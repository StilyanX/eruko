# Hides: how a trace item's state table is recorded from a real run (A Self-Study System,
# Programming, Trace item: "Eruko fills the answer by running the program"). gdb runs this file
# against a program compiled with -g -O0: it steps line by line through the program's own code,
# into the program's own functions and never into the library, and once each line has run reads
# every column's value in the scope of that line. Run by scripts/lib/cpp-course.mjs:
#   TRACE_SRC=<file name> TRACE_SRC_PATH=<its path> TRACE_COLS='["n","count"]' \
#   TRACE_IN=<input file> TRACE_OUT=<json file> [TRACE_PRINTERS=<libstdc++ python folder>] \
#   gdb -q -batch -iex 'set auto-load safe-path /nix/store' -x scripts/lib/cpp-trace.py <program>
# A row is { line, values }, in the order the lines finish: a call's own rows come before the row
# of the line that made the call. A name not yet declared, or out of scope, is an empty cell. A
# value is written as std::println shows it inside a range: digits, true/false, "text", 'c',
# [1, 2], {"a": 1}. Lines that only hold a brace are no rows.
import glob
import json
import os
import sys

import gdb

PRINTERS = os.environ.get('TRACE_PRINTERS') or next(
    iter(sorted(glob.glob('/nix/store/*-gcc-*-lib/share/gcc-*/python'))), None
)
if PRINTERS:
    sys.path.insert(0, PRINTERS)
    from libstdcxx.v6.printers import register_libstdcxx_printers  # noqa: E402

    register_libstdcxx_printers(None)

SRC = os.environ['TRACE_SRC']
COLS = json.loads(os.environ['TRACE_COLS'])
LINES = open(os.environ['TRACE_SRC_PATH']).read().split('\n')


def text_of(s):
    # std::format's debug form of a string: the escapes json writes for these characters.
    return json.dumps(s, ensure_ascii=False)


def shown(v, inner=False):
    # As std::println("{}", x) prints x: a string or a char bare; inside a range, as the range
    # prints its elements, a string in double quotes and a char in single quotes.
    t = v.type.strip_typedefs()
    if t.code == gdb.TYPE_CODE_REF:
        return shown(v.referenced_value(), inner)
    t = t.unqualified()
    name = str(t)
    if t.code == gdb.TYPE_CODE_BOOL:
        return 'true' if bool(v) else 'false'
    if t.code == gdb.TYPE_CODE_INT and name == 'char':
        c = chr(int(v) % 256)
        if not inner:
            return c
        return "'\\''" if c == "'" else "'" + json.dumps(c, ensure_ascii=False)[1:-1].replace('\\"', '"') + "'"
    if t.code in (gdb.TYPE_CODE_INT, gdb.TYPE_CODE_ENUM):
        return str(int(v))
    if t.code == gdb.TYPE_CODE_FLT:
        f = float(v)
        return str(int(f)) if f == int(f) else repr(f)
    if name.startswith('std::__cxx11::basic_string<char') or name == 'std::string':
        length = int(v['_M_string_length'])
        text = v['_M_dataplus']['_M_p'].string(length=length) if length else ''
        return text_of(text) if inner else text
    pp = gdb.default_visualizer(v)
    if pp is not None and hasattr(pp, 'children'):
        kids = [c[1] for c in pp.children()]
        hint = pp.display_hint() if hasattr(pp, 'display_hint') else None
        if hint == 'map':
            pairs = [f'{shown(kids[i], True)}: {shown(kids[i + 1], True)}' for i in range(0, len(kids), 2)]
            return '{' + ', '.join(pairs) + '}'
        return '[' + ', '.join(shown(k, True) for k in kids) + ']'
    return v.format_string()


def value_of(name, block, frame, line):
    sym = gdb.lookup_symbol(name, block)[0]
    if sym is None or not (sym.is_variable or sym.is_argument) or sym.symtab is None:
        return ''
    if not sym.symtab.filename.endswith(SRC) or (sym.is_variable and sym.line > line):
        return ''
    # A name the line just run declares itself, a loop's own variable, holds a value only while
    # the run is still inside its loop: when the loop ends, the name is gone.
    if sym.is_variable and sym.line == line:
        now = gdb.lookup_symbol(name, frame.block())[0]
        if now is None or now.line != sym.line or now.symtab.filename != sym.symtab.filename:
            return ''
    return shown(sym.value(frame))


def own(frame):
    sal = frame.find_sal()
    return sal.symtab is not None and sal.symtab.filename.endswith(SRC)


def depth(frame):
    n = 0
    while frame is not None:
        n += 1
        frame = frame.older()
    return n


def running():
    return gdb.selected_inferior().pid != 0


def fail(text):
    json.dump({'error': text}, open(os.environ['TRACE_OUT'], 'w'))
    gdb.execute('kill')
    sys.exit(0)


gdb.execute('set pagination off')
gdb.execute('set confirm off')
gdb.execute('set print pretty off')
# Stepping never enters the library: only the program's own functions.
gdb.execute('skip -rfu ^(std|__gnu_cxx)::', to_string=True)
gdb.execute('break main', to_string=True)
gdb.execute(f"run < {os.environ['TRACE_IN']} > /dev/null", to_string=True)
rows = []
depths = []
# Lines begun and not yet finished, the innermost last: (frame depth, line, block).
begun = []
while running():
    frame = gdb.selected_frame()
    if not own(frame):
        try:
            gdb.execute('finish', to_string=True)
        except gdb.error:
            break
        continue
    sal = frame.find_sal()
    here = depth(frame)
    at_start = frame.pc() == gdb.find_pc_line(frame.pc()).pc
    while begun and begun[-1][0] > here:
        d, line, block = begun.pop()
        if LINES[line - 1].strip() not in ('}', '{', '};'):
            fail(f'line {line} ends its function with no line after it to read its values at')
    if at_start:
        if begun and begun[-1][0] == here:
            d, line, block = begun.pop()
            if LINES[line - 1].strip() not in ('}', '{', '};'):
                values = [value_of(c, block, frame, line) for c in COLS]
                # A line that runs in several stops (a range-for header: its test, then its
                # element) is one row, read when its last stop is over.
                if rows and rows[-1]['line'] == line and depths[-1] == here:
                    rows[-1] = {'line': line, 'values': values}
                else:
                    rows.append({'line': line, 'values': values})
                    depths.append(here)
        begun.append((here, sal.line, frame.block()))
    try:
        gdb.execute('step', to_string=True)
    except gdb.error:
        break
json.dump({'rows': rows}, open(os.environ['TRACE_OUT'], 'w'))
if running():
    gdb.execute('kill')
