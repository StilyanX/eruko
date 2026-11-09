// Hides: how an era screen's map is drawn by code from a table of places with coordinates (the
// paper's "Map drawing" and "Map"): the build errors a table can hold, the projection, the marks,
// labels, date, scale bar and north mark of the SVG, and the words of its text, each place's
// direction and distance from the first one named. Lines and text only, in currentColor: no
// border, no filled territory, no colour that marks a state, no arrow. The points come from
// Pleiades by id and the coastline from the caller, which names it on the map (21.01
// <bu-bi-pipeline> Map drawing).

const R = 6371
const FONT = 17
const rad = (/** @type {number} */ d) => (d * Math.PI) / 180
const DIRECTIONS = [
  'north',
  'north-east',
  'east',
  'south-east',
  'south',
  'south-west',
  'west',
  'north-west'
]

/**
 * One place or force on the map: the name the situation uses, the id of the sentence that uses
 * it, its latitude and longitude from a named gazetteer, and whether its site is approximate. A
 * force may give `at`, the name of the place it stands at, and take that place's coordinates.
 * @typedef {{ name: string, sentence: string, lat?: number, lon?: number, approximate?: boolean, at?: string }} Place
 */

/**
 * A place as the map holds it, its coordinates resolved.
 * @typedef {{ name: string, sentence: string, lat: number, lon: number, approximate: boolean, at?: string }} Placed
 */

/** @typedef {{ asOf: number, file: string, places: Placed[], alt: string[] }} LifeMap */

/**
 * A year in words: -43 is "43 BC", 14 is "AD 14". There is no year 0.
 * @param {number} y
 */
export function yearName(y) {
  if (!Number.isInteger(y) || y === 0)
    throw new Error(`${y} is not a year: 44 BC is -44, AD 14 is 14`)
  return y < 0 ? `${-y} BC` : `AD ${y}`
}

/**
 * Great-circle distance in km and initial bearing in degrees from a to b.
 * @param {{ lat: number, lon: number }} a
 * @param {{ lat: number, lon: number }} b
 */
function leg(a, b) {
  const [p1, p2, dl] = [rad(a.lat), rad(b.lat), rad(b.lon - a.lon)]
  const h = Math.sin((p2 - p1) / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2
  const km = 2 * R * Math.asin(Math.sqrt(h))
  const y = Math.sin(dl) * Math.cos(p2)
  const x = Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl)
  return { km, bearing: ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360 }
}

/**
 * Every place resolved, or the build error its table holds.
 * @param {readonly Place[]} places
 * @param {Readonly<Record<string, string>>} sentences
 * @returns {Placed[]}
 */
function resolve(places, sentences) {
  if (!places.length)
    throw new Error(
      'A map needs a place: where the situation names none, the era screen carries no map'
    )
  const has = (/** @type {number | undefined} */ v) => typeof v === 'number' && Number.isFinite(v)
  return places.map(p => {
    const text = Object.hasOwn(sentences, p.sentence) ? sentences[p.sentence] : undefined
    if (text === undefined)
      throw new Error(
        `"${p.name}" names sentence "${p.sentence}", which the situation does not hold`
      )
    if (!text.includes(p.name))
      throw new Error(`"${p.name}" is not in sentence "${p.sentence}": "${text}"`)
    if (p.at !== undefined) {
      const site = places.find(
        q => q.name === p.at && q.at === undefined && has(q.lat) && has(q.lon)
      )
      if (!site)
        throw new Error(
          `"${p.name}" stands at "${p.at}", which is no place with coordinates on the map`
        )
      return {
        name: p.name,
        sentence: p.sentence,
        lat: /** @type {number} */ (site.lat),
        lon: /** @type {number} */ (site.lon),
        approximate: !!site.approximate,
        at: p.at
      }
    }
    if (!has(p.lat) || !has(p.lon))
      throw new Error(`"${p.name}" has no coordinates: a name with no coordinates is a build error`)
    return {
      name: p.name,
      sentence: p.sentence,
      lat: /** @type {number} */ (p.lat),
      lon: /** @type {number} */ (p.lon),
      approximate: !!p.approximate
    }
  })
}

/**
 * The map's text: every place and force with its direction and distance from the first place
 * named. The paper's example ("Mutina: 37 km north-west of Bononia. Antony's legions: at
 * Mutina.") does not show how the first place itself reads, so it reads the plainest way: "the
 * first place named". A place under half a km from it reads "at" it, as a force does.
 * @param {readonly Placed[]} placed
 */
function altOf(placed) {
  const first = /** @type {Placed} */ (placed.find(p => p.at === undefined))
  return placed.map(p => {
    if (p.at !== undefined) return `${p.name}: at ${p.at}.`
    if (p === first) return `${p.name}: the first place named.`
    const { km, bearing } = leg(first, p)
    const d = Math.round(km)
    if (d === 0) return `${p.name}: at ${first.name}.`
    return `${p.name}: ${d} km ${DIRECTIONS[Math.round(bearing / 45) % 8]} of ${first.name}.`
  })
}

/** @param {string} s */
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
/** @param {number} v */
const n = v => String(Math.round(v * 10) / 10)
// ponytail: a label's width is guessed at 0.6 of the font size a character; labels sit right of
// their mark and are not moved apart, so two places a few px apart overlap. Place labels apart
// when a map shows it.
/** @param {string} s */
const widthOf = s => s.length * FONT * 0.6

/**
 * The scale bar's length: a round number of km (1, 2 or 5 times a power of ten) near a third of
 * the span.
 * @param {number} spanKm
 */
function roundKm(spanKm) {
  const t = Math.max(spanKm / 3, 1)
  const p = 10 ** Math.floor(Math.log10(t))
  return [5, 2, 1].map(m => m * p).find(v => v <= t) ?? p
}

/**
 * Equirectangular, in px from the top-left site: x east, y south, longitude scaled by cos of the
 * mean latitude, the larger span 300 px (and at least 20 km).
 * @param {readonly Placed[]} sites
 */
function projection(sites) {
  const k = Math.cos(rad(sites.reduce((s, p) => s + p.lat, 0) / sites.length))
  /** @param {number} lon @param {number} lat @returns {[number, number]} */
  const km = (lon, lat) => [R * rad(lon) * k, -R * rad(lat)]
  const pts = sites.map(p => km(p.lon, p.lat))
  const [xs, ys] = [pts.map(q => q[0]), pts.map(q => q[1])]
  const [x0, y0] = [Math.min(...xs), Math.min(...ys)]
  const spanKm = Math.max(Math.max(...xs) - x0, Math.max(...ys) - y0, 20)
  const scale = 300 / spanKm // px a km
  /** @param {number} lon @param {number} lat @returns {[number, number]} */
  const px = (lon, lat) => {
    const [x, y] = km(lon, lat)
    return [(x - x0) * scale, (y - y0) * scale]
  }
  const [x1, y1] = [Math.max(...xs), Math.max(...ys)]
  const m = Math.max(spanKm * 0.15, 10)
  /** @param {number} lon @param {number} lat */
  const inside = (lon, lat) => {
    const [x, y] = km(lon, lat)
    return x >= x0 - m && x <= x1 + m && y >= y0 - m && y <= y1 + m
  }
  return { px, scale, spanKm, inside }
}

/**
 * Each site's mark and label, the forces at it listed under its name, and the box they fill.
 * @param {readonly Placed[]} placed
 * @param {(lon: number, lat: number) => [number, number]} px
 */
function drawSites(placed, px) {
  /** @type {string[]} */
  const marks = []
  /** @type {string[]} */
  const texts = []
  const box = { left: 0, top: 0, right: 0, bottom: 0 }
  for (const s of placed.filter(p => p.at === undefined)) {
    const [x, y] = px(s.lon, s.lat)
    marks.push(
      s.approximate
        ? `<circle cx="${n(x)}" cy="${n(y)}" r="4" fill="none" stroke="currentColor"/>`
        : `<circle cx="${n(x)}" cy="${n(y)}" r="3" fill="currentColor"/>`
    )
    const forces = placed.filter(f => f.at === s.name).map(f => f.name)
    const lines = [s.approximate ? `${s.name}, site approximate` : s.name, ...forces]
    lines.forEach((line, i) => {
      const ty = y + FONT * 0.35 + i * FONT * 1.2
      texts.push(`<text x="${n(x + 8)}" y="${n(ty)}">${esc(line)}</text>`)
      box.right = Math.max(box.right, x + 8 + widthOf(line))
      box.bottom = Math.max(box.bottom, ty + FONT * 0.3)
    })
    box.left = Math.min(box.left, x - 5)
    box.top = Math.min(box.top, y - FONT)
  }
  return { marks, texts, box }
}

/**
 * The map of a raised-level era screen as of the decision's year.
 * @param {{ asOf: number, places: readonly Place[], sentences: Readonly<Record<string, string>>, coast?: readonly (readonly (readonly [number, number])[])[], coastNote?: string }} input
 *   `coast`: polylines of [lon, lat], the coastline of that date where the sources let it be
 *   drawn and today's where they do not, cut to the map; `coastNote` says which, under the scale.
 * @returns {LifeMap}
 */
export function drawMap({ asOf, places, sentences, coast = [], coastNote = '' }) {
  const date = `as of ${yearName(asOf)}`
  const placed = resolve(places, sentences)
  const { px, scale, spanKm, inside } = projection(placed.filter(p => p.at === undefined))
  const { marks, texts, box } = drawSites(placed, px)
  const { left, top, bottom } = box

  // The date top left, north top right (a short line over N), the scale bar under the places.
  const headY = top - FONT * 1.2
  texts.push(`<text x="${n(left)}" y="${n(headY)}">${esc(date)}</text>`)
  let right = Math.max(box.right, left + widthOf(date) + 40)
  const nx = right - FONT / 2
  texts.push(`<text x="${n(nx)}" y="${n(headY)}" text-anchor="middle">N</text>`)
  const barKm = roundKm(spanKm)
  const [barY, barX1] = [bottom + FONT, left + barKm * scale]
  // The coastline only inside the box of the places, cut where it leaves it.
  const cut = coast.flatMap(line => {
    /** @type {(readonly [number, number])[][]} */
    const runs = [[]]
    for (const q of line) {
      if (inside(q[0], q[1])) runs.at(-1)?.push(q)
      else if (runs.at(-1)?.length) runs.push([])
    }
    return runs.filter(r => r.length > 1)
  })
  const strokes = [
    ...cut.map(
      line =>
        `<polyline points="${line.map(([lon, lat]) => px(lon, lat).map(n).join(',')).join(' ')}"/>`
    ),
    `<line x1="${n(nx)}" y1="${n(headY - FONT * 2)}" x2="${n(nx)}" y2="${n(headY - FONT - 2)}"/>`,
    `<polyline points="${n(left)},${n(barY - 5)} ${n(left)},${n(barY)} ${n(barX1)},${n(barY)} ${n(barX1)},${n(barY - 5)}"/>`
  ]
  texts.push(`<text x="${n(barX1 + 6)}" y="${n(barY + FONT * 0.35)}">${barKm} km</text>`)
  right = Math.max(right, barX1 + 6 + widthOf(`${barKm} km`))
  const noteY = barY + (coastNote ? FONT * 1.4 : 0)
  if (coastNote) {
    texts.push(`<text x="${n(left)}" y="${n(noteY + FONT * 0.35)}">${esc(coastNote)}</text>`)
    right = Math.max(right, left + widthOf(coastNote))
  }

  const pad = 4
  const [vx, vy] = [left - pad, headY - FONT * 2 - pad]
  const [w, h] = [right - vx + pad, noteY + FONT * 0.5 + pad - vy]
  const file =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${n(vx)} ${n(vy)} ${n(w)} ${n(h)}" width="${n(w)}" height="${n(h)}">` +
    `<g fill="none" stroke="currentColor">${strokes.join('')}</g>${marks.join('')}` +
    `<g fill="currentColor" font-size="${FONT}">${texts.join('')}</g></svg>\n`
  return { asOf, file, places: placed, alt: altOf(placed) }
}
