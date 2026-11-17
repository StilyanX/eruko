// How a maths text is set (parts/maths-screens.dom.js), on the DOM the renderer builds: the
// punctuation after a formula is never parted from it, a formula of one token is tied to the word
// before it, and a formula of running prose stands on a line of its own when it is a chain of
// relations or follows a colon or an opening "For all …," with one, and nowhere else.
import { test, expect } from '@playwright/test'

/**
 * Draws with the app's own modules in the page: `draw(build)` puts what `build` returns into a
 * .lrn column and gives back its host. The MathML of the test's formulas is added by hand.
 * @param {import('@playwright/test').Page} page
 */
async function kit(page) {
  await page.goto('./')
  await expect(page.locator('h1')).toBeVisible()
  await page.evaluate(async () => {
    const at = (/** @type {string} */ p) => import(new URL(p, document.baseURI).href)
    const [{ h, morph }, screens, { addMathml }] = await Promise.all([
      at('parts/view.dom.js'),
      at('parts/maths-screens.dom.js'),
      at('parts/mathml.dom.js')
    ])
    const m = (/** @type {string} */ s) => `<math>${s}</math>`
    const eq = (/** @type {string} */ s) => m(`<mrow><mrow></mrow><mo>=</mo>${s}</mrow>`)
    addMathml({
      n: m('<mi>n</mi>'),
      x: m('<mi>x</mi>'),
      a: m('<mi>a</mi>'),
      64: m('<mn>64</mn>'),
      'x^2': m('<msup><mi>x</mi><mn>2</mn></msup>'),
      '\\sqrt{x}': m('<msqrt><mi>x</mi></msqrt>'),
      '{}= 1': eq('<mn>1</mn>'),
      '{}= b': eq('<mi>b</mi>'),
      '{}= c': eq('<mi>c</mi>'),
      '{}= x^2': eq('<msup><mi>x</mi><mn>2</mn></msup>'),
      '{}+ 1': m('<mrow><mrow></mrow><mo>+</mo><mn>1</mn></mrow>'),
      '\\sum_{i=1}^{n} i': m(
        '<munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mi>i</mi>'
      ),
      '$$a = b':
        '<math display="block" class="tml-display" style="display:block math;"><mi>a</mi><mo>=</mo><mi>b</mi></math>'
    })
    Object.assign(window, {
      kit: { h, ...screens },
      draw: (/** @type {(k: object) => unknown} */ build, width = '20rem') => {
        document.querySelector('#maths-text-host')?.remove()
        const host = document.createElement('div')
        host.id = 'maths-text-host'
        host.className = 'lrn'
        host.style.width = width
        document.body.append(host)
        morph(host, [build(/** @type {{ kit: object }} */ (/** @type {unknown} */ (window)).kit)])
        return host
      }
    })
  })
}

const SENTENCE =
  'Take a number $n$, then $x = 1$; so $x^2$. The root $\\sqrt{x}$, the sum $a + 1$, and $a = x^2$. '

test('the punctuation after a formula is in the formula’s box and never starts a line, at any width', async ({
  page
}) => {
  await kit(page)
  const found = await page.evaluate(async text => {
    const w = /** @type {any} */ (window)
    const host = w.draw((/** @type {any} */ k) => k.h('p', null, k.rich(text.repeat(3))))
    const boxes = [...host.querySelectorAll('[data-name=Formula]')]
    // Each formula's box ends with its mark behind a word joiner; no text outside starts with one.
    const marks = boxes.map(b => b.lastElementChild?.textContent ?? '')
    const outside = [...host.querySelector('p > span').childNodes]
      .filter(n => n.nodeType === 3)
      .map(n => n.data)
    let parted = 0
    for (let width = 90; width <= 640; width += 11) {
      host.style.width = `${width}px`
      for (const box of boxes) {
        const mark = box.lastElementChild
        const maths = [...box.querySelectorAll('[data-whole]')].at(-1)
        if (!mark || !maths) continue
        const [p, f] = [mark.getBoundingClientRect(), maths.getBoundingClientRect()]
        // Parted: the mark stands on a line under its formula, or a gap opened between them.
        if (p.top >= f.bottom || p.left < f.left || p.left - f.right > 2) parted++
      }
    }
    return { marks, outside, parted, after: getComputedStyle(boxes[2].lastElementChild).marginLeft }
  }, SENTENCE)
  expect(found.marks.slice(0, 6)).toEqual(['⁠,', '⁠;', '⁠.', '⁠,', '⁠,', '⁠.'])
  for (const text of found.outside) expect(text).not.toMatch(/^[.,;:]/)
  expect(found.parted).toBe(0)
  // After a script the mark is drawn back over the space the maths font leaves there.
  expect(parseFloat(found.after)).toBeLessThan(0)
})

test('a formula in the line has no margin of its own, and one of one token is tied to the word before it', async ({
  page
}) => {
  await kit(page)
  const found = await page.evaluate(text => {
    const w = /** @type {any} */ (window)
    const host = w.draw((/** @type {any} */ k) => k.h('p', null, k.rich(text)))
    const boxes = [...host.querySelectorAll('[data-name=Formula]')]
    return {
      margins: boxes.map(b => {
        const s = getComputedStyle(b)
        const m = b.querySelector('math')
        return [
          s.marginLeft,
          s.marginRight,
          m ? getComputedStyle(m).marginLeft : '',
          m ? getComputedStyle(m).marginRight : ''
        ].join(' ')
      }),
      before: boxes.map(b =>
        b.previousSibling?.nodeType === 3 ? b.previousSibling.data.slice(-1) : ''
      )
    }
  }, SENTENCE)
  for (const m of found.margins) expect(m).toBe('0px 0px 0px 0px')
  // n is one token: a no-break space. x = 1 is not: the ordinary word space.
  expect(found.before.slice(0, 2)).toEqual([' ', ' '])
})

const RULES = [
  ['a relation after a colon', 'It gives: $x = 1$, as said.', 1],
  ['a chain of two relations', 'Then $a = b = c$ holds.', 1],
  ['display maths of the content', 'Then $$a = b$$, as said.', 1],
  ['one relation and no colon', 'Then $x = 1$ holds.', 0],
  ['a relation after the clause For all', 'It holds. For all numbers, $x = 1$ holds.', 1],
  ['a relation after a comma, no For all', 'Then, as said, $x = 1$ holds.', 0],
  ['no relation after a colon', 'The sum: $a + 1$.', 0],
  ['a relation only in a script, after a colon', 'The sum: $\\sum_{i=1}^{n} i$.', 0],
  ['a bold term', 'The rule: **$x = 1$** holds.', 0]
]

test('in running prose a formula stands on its own line by the three rules, its punctuation at its end', async ({
  page
}) => {
  await kit(page)
  for (const [name, text, lines] of RULES) {
    const found = await page.evaluate(text => {
      const w = /** @type {any} */ (window)
      const host = w.draw((/** @type {any} */ k) => k.h('p', null, k.rich(text, true)))
      const own = [...host.querySelectorAll('.lrn-display')]
      const p = host.querySelector('p').getBoundingClientRect()
      return {
        own: own.length,
        maths: host.querySelectorAll('math').length,
        text: own.map(o => o.textContent),
        centred: own.map(o => {
          const r = o.firstElementChild.getBoundingClientRect()
          return Math.abs(r.left + r.right - p.left - p.right) < 3
        }),
        next: own.map(o => (o.nextSibling?.nodeType === 3 ? o.nextSibling.data : ''))
      }
    }, text)
    expect(found.own, String(name)).toBe(lines)
    expect(found.maths, `${name}: one <math> for the formula`).toBe(1)
    if (!lines) continue
    expect(found.centred, String(name)).toEqual([true])
    if (/, as said/.test(String(text))) {
      // The comma of the sentence ends the display line; the sentence goes on without it.
      expect(found.text[0]?.endsWith('⁠,'), String(name)).toBe(true)
      expect(found.next[0], String(name)).toBe(' as said.')
    }
  }
})

test('outside running prose only the content’s own display maths stands on its own line', async ({
  page
}) => {
  await kit(page)
  const text = 'It gives: $x = 1$, and $a = b = c$.'
  const found = await page.evaluate(text => {
    const w = /** @type {any} */ (window)
    const problem = { form: 'A number', answer: text, prompt: 'p' }
    /** @type {Record<string, (k: any) => unknown>} */
    const contexts = {
      'a table cell': k =>
        k.h('table', null, k.h('tbody', null, k.h('tr', null, k.h('td', null, k.rich(text))))),
      'a list item': k => k.h('ul', null, k.h('li', null, k.rich(text))),
      'a button': k => k.h('button', { type: 'button' }, k.rich(text)),
      "a problem's answer line": k =>
        k.h('div', null, k.answerBox({ problem, open: true, onOpen() {}, onDone() {} })),
      "a solution's or proof's numbered line": k =>
        k.lines({ lines: [text, { step: text, reason: text }] })
    }
    /** @type {Record<string, number>} */
    const out = {}
    for (const [name, build] of Object.entries(contexts))
      out[name] = w.draw(build).querySelectorAll('.lrn-display').length
    out['display maths of the content, in a line'] = w
      .draw((/** @type {any} */ k) => k.lines({ lines: ['So $$a = b$$'] }))
      .querySelectorAll('.lrn-display').length
    out['an idea'] = w
      .draw((/** @type {any} */ k) =>
        k.idea({ name: 'N', concrete: text, general: text, definitions: [text] }, 'Idea 1')
      )
      .querySelectorAll('.lrn-display').length
    return out
  }, text)
  expect(found).toEqual({
    'a table cell': 0,
    'a list item': 0,
    'a button': 0,
    "a problem's answer line": 0,
    "a solution's or proof's numbered line": 0,
    'display maths of the content, in a line': 1,
    'an idea': 6
  })
})

test('a formula on its own line wider than the column scrolls in a box the keyboard reaches; a formula in the line moves whole', async ({
  page
}) => {
  await kit(page)
  const found = await page.evaluate(async () => {
    const w = /** @type {any} */ (window)
    const frame = () =>
      new Promise(done => requestAnimationFrame(() => requestAnimationFrame(done)))
    const host = w.draw(
      (/** @type {any} */ k) =>
        k.h(
          'p',
          null,
          k.rich('So: $a = b = c$. A long line of words, then $a = b = c$ again.', true)
        ),
      '60px'
    )
    await frame()
    const own = host.querySelector('.lrn-display')
    const narrow = {
      role: own.getAttribute('role'),
      tab: own.getAttribute('tabindex'),
      name: own.getAttribute('aria-label'),
      scrolls: own.scrollWidth > own.clientWidth,
      page: document.documentElement.scrollWidth <= window.innerWidth
    }
    host.style.width = '30rem'
    await frame()
    // The second formula is a chain too: on its own line. The first inline one of SENTENCE is used below.
    return { narrow, wide: { role: own.getAttribute('role'), tab: own.getAttribute('tabindex') } }
  })
  expect(found.narrow).toEqual({
    role: 'region',
    tab: '0',
    name: 'Formula, scrolls sideways',
    scrolls: true,
    page: true
  })
  expect(found.wide).toEqual({ role: null, tab: null })
  const cut = await page.evaluate(text => {
    const w = /** @type {any} */ (window)
    const host = w.draw((/** @type {any} */ k) => k.h('p', null, k.rich(text.repeat(3))))
    let cut = 0
    for (let width = 200; width <= 640; width += 11) {
      host.style.width = `${width}px`
      for (const box of host.querySelectorAll('.lrn-whole')) {
        const parts = [...box.querySelectorAll('[data-whole]')].map(e => e.getBoundingClientRect())
        if (parts.some(r => r.top >= (parts[0]?.bottom ?? 0))) cut++
      }
    }
    return cut
  }, SENTENCE)
  expect(cut).toBe(0)
})
