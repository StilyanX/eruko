#!/usr/bin/env python3
# Hides: how the two maths faces under src/style/fonts/ are cut. A formula
# is set in one family, "Eruko Maths", of three faces split by unicode-range (faces.css, written
# here): its digits and upright letters are Literata's own face; its one-letter variables are
# Literata Italic's letters moved to the Mathematical Italic code points a browser maps a
# one-letter <mi> to (Eruko Maths Letters); every sign, bracket, radical, Greek letter and the
# MATH table's layout constants are TeX Gyre Bonum Math's, cut to the code points in SIGNS
# (Eruko Maths Signs). Each folder's VENDOR.json records its files' hashes and the code points
# its face holds; tests/maths-fonts.test.mjs fails when a generated formula uses one neither
# face holds. Then: add the code point to SIGNS below and run this again.
#
#   nix-shell -p 'python3.withPackages(p: [p.fonttools p.brotli])' --run 'python3 scripts/maths-fonts.py'
#   (or any Python 3 with fontTools and brotli), then: npm run gen
#
# TeX Gyre Bonum Math is fetched from CTAN and checked against its SHA-256, or read from the
# file named by --bonum.
import hashlib
import json
import sys
import tempfile
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables._c_m_a_p import CmapSubtable
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / 'src' / 'style' / 'fonts'
LITERATA = 'literata-5.3.0'
BONUM_URL = 'https://mirrors.ctan.org/fonts/tex-gyre-math/opentype/texgyrebonum-math.otf'
BONUM_SHA = 'd7b4245e4ec359940da7c9ddb982e49737455eaa29dafb809743cc1a58053147'
SIGNS_DIR = FONTS / 'eruko-maths-signs-1.005'
LETTERS_DIR = FONTS / 'eruko-maths-letters-5.3.0'

# What Literata's upright face sets in a formula: % , . the digits and the upright letters.
LITERATA_RANGE = 'U+0025,U+002C,U+002E,U+0030-0039,U+0041-005A,U+0061-007A'


def span(a, b):
    return set(range(a, b + 1))


# The code points Eruko Maths Signs keeps: what the units' formulas use and a margin, so a new
# formula seldom needs a new cut. Bonum lacks some of these; the face holds those it has.
SIGNS = (
    span(0x20, 0x7E)  # ASCII: the signs on the keyboard, and the fallback under Literata's
    | span(0xA0, 0xBF)  # ± · ° ¬ and the Latin-1 signs
    | {0xD7, 0xF7}  # × ÷
    | {0x131, 0x237}  # dotless i and j, under an accent
    | span(0x2C6, 0x2DD)  # the spacing accents: ˆ ˇ ˙ ˜
    | span(0x300, 0x30C)  # the combining accents
    | span(0x370, 0x3FF)  # all of Greek
    | span(0x2000, 0x206F)  # spaces, dashes, primes, the ellipsis, the invisible operators
    | span(0x20D0, 0x20DC)  # the vector arrow and its kin
    | span(0x2100, 0x214F)  # ℓ ℏ ℜ ℑ and the blackboard ℂ ℍ ℕ ℙ ℚ ℝ ℤ
    | span(0x2190, 0x21FF)  # arrows
    | span(0x2200, 0x22FF)  # operators and relations
    | span(0x2300, 0x23FF)  # floors, ceilings, the braces over and under
    | span(0x25A0, 0x25FF)  # triangles, squares, circles
    | span(0x27C0, 0x27FF)  # ⟂ ⟨ ⟩ ⟦ ⟧ and the long arrows
    | span(0x2A00, 0x2A0C)  # the big operators: ⨁ ⨂ and the multiple integrals
    | span(0x2A7D, 0x2AA0)  # ⩽ ⩾ and their kin
    | span(0x1D400, 0x1D467)  # bold letters (vectors), and italic: the fallback under the letters' face
    | span(0x1D538, 0x1D56B)  # blackboard letters
    | span(0x1D6A4, 0x1D6A5)  # dotless italic i and j
    | span(0x1D6E2, 0x1D71B)  # italic Greek
    | span(0x1D7D8, 0x1D7E1)  # blackboard digits
)

# Literata Italic's letters, each at the code point a one-letter <mi> is drawn from
# (MathML Core, text-transform: math-auto). Italic h is U+210E, the Planck constant.
LETTERS = (
    [(0x41 + i, 0x1D434 + i) for i in range(26)]
    + [(0x61 + i, 0x1D44E + i) for i in range(26) if i != 7]
    + [(0x68, 0x210E), (0x131, 0x1D6A4), (0x237, 0x1D6A5)]
)

STEPS = 5


def step(n, text):
    print(f'[{n}/{STEPS}] {text}', flush=True)


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def ranges(points):
    """Code points as a unicode-range list: U+0020-007E,U+00A0,…"""
    out, pts = [], sorted(points)
    i = 0
    while i < len(pts):
        j = i
        while j + 1 < len(pts) and pts[j + 1] == pts[j] + 1:
            j += 1
        out.append(f'U+{pts[i]:04X}' + (f'-{pts[j]:04X}' if j > i else ''))
        i = j + 1
    return ','.join(out)


def rename(font, name):
    """A derived font carries its own name (OFL 1.1; the GUST Font License asks for it)."""
    for record in font['name'].names:
        if record.nameID in (1, 4, 16):
            record.string = name
        elif record.nameID == 6:
            record.string = name.replace(' ', '')
        elif record.nameID == 3:
            record.string = f'{name}: Eruko'
    if 'CFF ' in font:
        cff = font['CFF '].cff
        cff.fontNames = [name.replace(' ', '')]
        top = cff.topDictIndex[0]
        top.FullName = top.FamilyName = name


def vendor(folder, record):
    files = sorted(
        p.relative_to(folder).as_posix()
        for p in folder.rglob('*')
        if p.is_file() and p.name != 'VENDOR.json'
    )
    record['files'] = {f: sha(folder / f) for f in files}
    (folder / 'VENDOR.json').write_text(json.dumps(record, indent=2) + '\n')


def bonum():
    if '--bonum' in sys.argv:
        path = Path(sys.argv[sys.argv.index('--bonum') + 1])
    else:
        path = Path(tempfile.mkdtemp()) / 'texgyrebonum-math.otf'
        urllib.request.urlretrieve(BONUM_URL, path)
    if sha(path) != BONUM_SHA:
        sys.exit(f'{path} is not TeX Gyre Bonum Math 1.005 (SHA-256 {BONUM_SHA})')
    return path


step(1, 'TeX Gyre Bonum Math 1.005, from CTAN or --bonum')
source = bonum()

step(2, 'Eruko Maths Signs: Bonum cut to the code points in SIGNS, its MATH table kept')
signs_file = SIGNS_DIR / 'files' / 'eruko-maths-signs.woff2'
signs_file.parent.mkdir(parents=True, exist_ok=True)
options = subset.Options()
options.layout_features = ['*']
options.hinting = False
options.desubroutinize = True
options.notdef_outline = True
options.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14]
options.flavor = 'woff2'
font = TTFont(source, recalcTimestamp=False)  # the same bytes at every run
cutter = subset.Subsetter(options)
cutter.populate(unicodes=SIGNS)
cutter.subset(font)
assert 'MATH' in font, 'the MATH table is lost'
rename(font, 'Eruko Maths Signs')
font.flavor = 'woff2'
font.save(signs_file)
signs = set(TTFont(signs_file).getBestCmap())

step(3, "Eruko Maths Letters: Literata Italic's letters at the Mathematical Italic code points")
letters_file = LETTERS_DIR / 'files' / 'eruko-maths-letters.woff2'
letters_file.parent.mkdir(parents=True, exist_ok=True)
font = TTFont(FONTS / LITERATA / 'files' / 'literata-latin-opsz-italic.woff2', recalcTimestamp=False)
font.flavor = None
font = instancer.instantiateVariableFont(font, {'wght': 400})  # the optical-size axis stays
cmap = font.getBestCmap()
moved = {to: cmap[of] for of, to in LETTERS if of in cmap}
options = subset.Options()
options.layout_features = ['kern']
options.notdef_outline = True
options.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14]
options.glyph_names = False
cutter = subset.Subsetter(options)
cutter.populate(glyphs=sorted(set(moved.values())))
cutter.subset(font)
table = CmapSubtable.newSubtable(12)
table.platformID, table.platEncID, table.language = 3, 10, 0
table.cmap = moved
font['cmap'].tables = [table]
rename(font, 'Eruko Maths Letters')
font.flavor = 'woff2'
font.save(letters_file)
letters = set(TTFont(letters_file).getBestCmap())

step(4, 'faces.css: the one family, split by unicode-range')
(SIGNS_DIR / 'faces.css').write_text(f"""/* Written by scripts/maths-fonts.py. The family every formula is set in, of three faces split by
   unicode-range. The first has no range, so it is the family's first available font: the browser
   reads the MATH table, the radical, the brackets and every sign from it. The second is Literata's
   own upright face for the digits and upright letters; the third holds Literata Italic's letters
   at the Mathematical Italic code points of a one-letter variable. No face names a weight: the
   three must match as one family. */
@font-face {{
  font-family: 'Eruko Maths';
  src: url(./files/eruko-maths-signs.woff2) format('woff2');
}}
@font-face {{
  font-family: 'Eruko Maths';
  src: url(../{LITERATA}/files/literata-latin-opsz-normal.woff2) format('woff2-variations');
  unicode-range: {LITERATA_RANGE};
}}
@font-face {{
  font-family: 'Eruko Maths';
  src: url(../{LETTERS_DIR.name}/files/eruko-maths-letters.woff2) format('woff2');
  unicode-range: {ranges(letters)};
}}
""")

step(5, 'VENDOR.json: the files and the code points of each face')
vendor(
    SIGNS_DIR,
    {
        'name': 'Eruko Maths Signs',
        'version': '1.005',
        'source': BONUM_URL,
        'license': 'GUST Font License',
        'cut': 'scripts/maths-fonts.py',
        'codePoints': ranges(signs),
    },
)
vendor(
    LETTERS_DIR,
    {
        'name': 'Eruko Maths Letters',
        'version': '5.3.0',
        'source': f'src/style/fonts/{LITERATA}/files/literata-latin-opsz-italic.woff2',
        'license': 'OFL-1.1',
        'cut': 'scripts/maths-fonts.py',
        'codePoints': ranges(letters),
    },
)
print(
    f'Eruko Maths Signs: {len(signs)} code points, {signs_file.stat().st_size} bytes; '
    f'Eruko Maths Letters: {len(letters)} code points, {letters_file.stat().st_size} bytes'
)
