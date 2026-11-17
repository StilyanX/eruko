export default [
  {
    "id": "t198-k1-p01",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 27x^3 + 63x^2 - 12x - 28$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{2/3, -7/3, -2/3}",
    "solution": [
      "Find every root of $f(x) = 27x^3 + 63x^2 - 12x - 28$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-28$ and $m$ a divisor of $27$.",
      "$\\begin{array}{r|rrrr} \\dfrac{2}{3} & 27 & 63 & -12 & -28 \\\\ & & 18 & 54 & 28 \\\\ \\hline & 27 & 81 & 42 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{2}{3}\\right)(27x^2 + 81x + 42)$",
      "$27x^2 + 81x + 42 = 3(9x^2 + 27x + 14)$",
      "$9x^2 + 27x + 14 = (3x + 7)(3x + 2)$",
      "$f(x) = 3\\left(x - \\dfrac{2}{3}\\right)(3x + 7)(3x + 2)$",
      "So $f(x) = 0$ exactly when $x - \\dfrac{2}{3} = 0$, $3x + 7 = 0$ or $3x + 2 = 0$.",
      "The set of roots is $\\left\\{\\dfrac{2}{3}, -\\dfrac{7}{3}, -\\dfrac{2}{3}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p02",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 4x^3 + 57x^2 - 85x + 30$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{3/4, (-15+sqrt(265))/2, (-15-sqrt(265))/2}",
    "solution": [
      "Find every root of $f(x) = 4x^3 + 57x^2 - 85x + 30$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $30$ and $m$ a divisor of $4$.",
      "$\\begin{array}{r|rrrr} \\dfrac{3}{4} & 4 & 57 & -85 & 30 \\\\ & & 3 & 45 & -30 \\\\ \\hline & 4 & 60 & -40 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{3}{4}\\right)(4x^2 + 60x - 40)$",
      "$4x^2 + 60x - 40 = 4(x^2 + 15x - 10)$",
      "$f(x) = 4\\left(x - \\dfrac{3}{4}\\right)(x^2 + 15x - 10)$",
      "So $f(x) = 0$ exactly when $x - \\dfrac{3}{4} = 0$ or $x^2 + 15x - 10 = 0$.",
      "$a = 1$, $b = 15$, $c = -10$",
      "$b^2 - 4ac = 15^2 - 4 \\cdot 1 \\cdot (-10) = 265$",
      "$x = \\dfrac{-15 \\pm \\sqrt{265}}{2}$",
      "The set of roots is $\\left\\{\\dfrac{3}{4}, \\dfrac{-15 + \\sqrt{265}}{2}, \\dfrac{-15 - \\sqrt{265}}{2}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p03",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 10x^3 + 57x^2 - 11x - 78$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-6/5, (-9+sqrt(185))/4, (-9-sqrt(185))/4}",
    "solution": [
      "Find every root of $f(x) = 10x^3 + 57x^2 - 11x - 78$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-78$ and $m$ a divisor of $10$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{6}{5} & 10 & 57 & -11 & -78 \\\\ & & -12 & -54 & 78 \\\\ \\hline & 10 & 45 & -65 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{6}{5}\\right)(10x^2 + 45x - 65)$",
      "$10x^2 + 45x - 65 = 5(2x^2 + 9x - 13)$",
      "$f(x) = 5\\left(x + \\dfrac{6}{5}\\right)(2x^2 + 9x - 13)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{6}{5} = 0$ or $2x^2 + 9x - 13 = 0$.",
      "$a = 2$, $b = 9$, $c = -13$",
      "$b^2 - 4ac = 9^2 - 4 \\cdot 2 \\cdot (-13) = 185$",
      "$x = \\dfrac{-9 \\pm \\sqrt{185}}{4}$",
      "The set of roots is $\\left\\{-\\dfrac{6}{5}, \\dfrac{-9 + \\sqrt{185}}{4}, \\dfrac{-9 - \\sqrt{185}}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p04",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 24x^3 - 34x^2 - 13x + 5$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1/2, 5/3, 1/4}",
    "solution": [
      "Find every root of $f(x) = 24x^3 - 34x^2 - 13x + 5$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $5$ and $m$ a divisor of $24$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 24 & -34 & -13 & 5 \\\\ & & -12 & 23 & -5 \\\\ \\hline & 24 & -46 & 10 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{2}\\right)(24x^2 - 46x + 10)$",
      "$24x^2 - 46x + 10 = 2(12x^2 - 23x + 5)$",
      "$12x^2 - 23x + 5 = (3x - 5)(4x - 1)$",
      "$f(x) = 2\\left(x + \\dfrac{1}{2}\\right)(3x - 5)(4x - 1)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{1}{2} = 0$, $3x - 5 = 0$ or $4x - 1 = 0$.",
      "The set of roots is $\\left\\{-\\dfrac{1}{2}, \\dfrac{5}{3}, \\dfrac{1}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p05",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find every root of $f(x) = x^3 + \\dfrac{19}{10}x^2 - \\dfrac{183}{50}x - \\dfrac{27}{5}$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-5/2, -6/5, 9/5}",
    "solution": [
      "Find every root of $f(x) = x^3 + \\dfrac{19}{10}x^2 - \\dfrac{183}{50}x - \\dfrac{27}{5}$.",
      "The equation $f(x) = 0$ holds exactly when $50x^3 + 95x^2 - 183x - 270 = 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $50x^3 + 95x^2 - 183x - 270$ has $k$ a divisor of $-270$ and $m$ a divisor of $50$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 50 & 95 & -183 & -270 \\\\ & & -125 & 75 & 270 \\\\ \\hline & 50 & -30 & -108 & 0 \\end{array}$",
      "$50x^3 + 95x^2 - 183x - 270 = \\left(x + \\dfrac{5}{2}\\right)(50x^2 - 30x - 108)$",
      "$50x^2 - 30x - 108 = 2(25x^2 - 15x - 54)$",
      "$25x^2 - 15x - 54 = (5x + 6)(5x - 9)$",
      "$50x^3 + 95x^2 - 183x - 270 = 2\\left(x + \\dfrac{5}{2}\\right)(5x + 6)(5x - 9)$",
      "So $50x^3 + 95x^2 - 183x - 270 = 0$ exactly when $x + \\dfrac{5}{2} = 0$, $5x + 6 = 0$ or $5x - 9 = 0$.",
      "The set of roots of $f(x)$ is $\\left\\{-\\dfrac{5}{2}, -\\dfrac{6}{5}, \\dfrac{9}{5}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p06",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 24x^3 + 74x^2 - 167x - 63$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1/3, -9/2, 7/4}",
    "solution": [
      "Find every root of $f(x) = 24x^3 + 74x^2 - 167x - 63$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-63$ and $m$ a divisor of $24$.",
      "$f(-1) = -24 + 74 + 167 - 63 = 154$",
      "$f(0) = -63$",
      "So $f(x)$ has a root between $-1$ and $0$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 24 & 74 & -167 & -63 \\\\ & & -8 & -22 & 63 \\\\ \\hline & 24 & 66 & -189 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{3}\\right)(24x^2 + 66x - 189)$",
      "$24x^2 + 66x - 189 = 3(8x^2 + 22x - 63)$",
      "$8x^2 + 22x - 63 = (2x + 9)(4x - 7)$",
      "$f(x) = 3\\left(x + \\dfrac{1}{3}\\right)(2x + 9)(4x - 7)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{1}{3} = 0$, $2x + 9 = 0$ or $4x - 7 = 0$.",
      "The set of roots is $\\left\\{-\\dfrac{1}{3}, -\\dfrac{9}{2}, \\dfrac{7}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p07",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find every root of $f(x) = x^3 + \\dfrac{169}{30}x^2 + 7x - \\dfrac{49}{30}$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-7/2, 1/5, -7/3}",
    "solution": [
      "Find every root of $f(x) = x^3 + \\dfrac{169}{30}x^2 + 7x - \\dfrac{49}{30}$.",
      "The equation $f(x) = 0$ holds exactly when $30x^3 + 169x^2 + 210x - 49 = 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $30x^3 + 169x^2 + 210x - 49$ has $k$ a divisor of $-49$ and $m$ a divisor of $30$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 30 & 169 & 210 & -49 \\\\ & & -105 & -224 & 49 \\\\ \\hline & 30 & 64 & -14 & 0 \\end{array}$",
      "$30x^3 + 169x^2 + 210x - 49 = \\left(x + \\dfrac{7}{2}\\right)(30x^2 + 64x - 14)$",
      "$30x^2 + 64x - 14 = 2(15x^2 + 32x - 7)$",
      "$15x^2 + 32x - 7 = (5x - 1)(3x + 7)$",
      "$30x^3 + 169x^2 + 210x - 49 = 2\\left(x + \\dfrac{7}{2}\\right)(5x - 1)(3x + 7)$",
      "So $30x^3 + 169x^2 + 210x - 49 = 0$ exactly when $x + \\dfrac{7}{2} = 0$, $5x - 1 = 0$ or $3x + 7 = 0$.",
      "The set of roots of $f(x)$ is $\\left\\{-\\dfrac{7}{2}, \\dfrac{1}{5}, -\\dfrac{7}{3}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p08",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find every complex root of $f(x) = 4x^3 - 8x^2 + 35x - 16$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{1/2, (3+i*sqrt(119))/4, (3-i*sqrt(119))/4}",
    "solution": [
      "Find every complex root of $f(x) = 4x^3 - 8x^2 + 35x - 16$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-16$ and $m$ a divisor of $4$.",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 4 & -8 & 35 & -16 \\\\ & & 2 & -3 & 16 \\\\ \\hline & 4 & -6 & 32 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{1}{2}\\right)(4x^2 - 6x + 32)$",
      "$4x^2 - 6x + 32 = 2(2x^2 - 3x + 16)$",
      "$f(x) = 2\\left(x - \\dfrac{1}{2}\\right)(2x^2 - 3x + 16)$",
      "So $f(x) = 0$ exactly when $x - \\dfrac{1}{2} = 0$ or $2x^2 - 3x + 16 = 0$.",
      "$a = 2$, $b = -3$, $c = 16$",
      "$b^2 - 4ac = (-3)^2 - 4 \\cdot 2 \\cdot 16 = -119$",
      "$x = \\dfrac{3 \\pm \\sqrt{-119}}{4}$",
      "$\\sqrt{-119} = i\\sqrt{119}$",
      "The set of complex roots is $\\left\\{\\dfrac{1}{2}, \\dfrac{3 + i\\sqrt{119}}{4}, \\dfrac{3 - i\\sqrt{119}}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p09",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 50x^3 + 275x^2 + 197x - 126$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-9/2, -7/5, 2/5}",
    "solution": [
      "Find every root of $f(x) = 50x^3 + 275x^2 + 197x - 126$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-126$ and $m$ a divisor of $50$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{9}{2} & 50 & 275 & 197 & -126 \\\\ & & -225 & -225 & 126 \\\\ \\hline & 50 & 50 & -28 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{9}{2}\\right)(50x^2 + 50x - 28)$",
      "$50x^2 + 50x - 28 = 2(25x^2 + 25x - 14)$",
      "$25x^2 + 25x - 14 = (5x + 7)(5x - 2)$",
      "$f(x) = 2\\left(x + \\dfrac{9}{2}\\right)(5x + 7)(5x - 2)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{9}{2} = 0$, $5x + 7 = 0$ or $5x - 2 = 0$.",
      "The set of roots is $\\left\\{-\\dfrac{9}{2}, -\\dfrac{7}{5}, \\dfrac{2}{5}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p10",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 20x^4 + 52x^3 - 381x^2 + 207x + 270$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-6, 3/2, 5/2, -3/5}",
    "solution": [
      "Find every root of $f(x) = 20x^4 + 52x^3 - 381x^2 + 207x + 270$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $270$ and $m$ a divisor of $20$.",
      "$\\begin{array}{r|rrrrr} -6 & 20 & 52 & -381 & 207 & 270 \\\\ & & -120 & 408 & -162 & -270 \\\\ \\hline & 20 & -68 & 27 & 45 & 0 \\end{array}$",
      "The quotient is $q(x) = 20x^3 - 68x^2 + 27x + 45$, so $f(x) = (x + 6)q(x)$.",
      "$\\begin{array}{r|rrrr} \\dfrac{3}{2} & 20 & -68 & 27 & 45 \\\\ & & 30 & -57 & -45 \\\\ \\hline & 20 & -38 & -30 & 0 \\end{array}$",
      "$q(x) = \\left(x - \\dfrac{3}{2}\\right)(20x^2 - 38x - 30)$",
      "$20x^2 - 38x - 30 = 2(10x^2 - 19x - 15)$",
      "$10x^2 - 19x - 15 = (2x - 5)(5x + 3)$",
      "$f(x) = 2(x + 6)\\left(x - \\dfrac{3}{2}\\right)(2x - 5)(5x + 3)$",
      "So $f(x) = 0$ exactly when $x + 6 = 0$, $x - \\dfrac{3}{2} = 0$, $2x - 5 = 0$ or $5x + 3 = 0$.",
      "The set of roots is $\\left\\{-6, \\dfrac{3}{2}, \\dfrac{5}{2}, -\\dfrac{3}{5}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p11",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 3x^3 + 34x^2 + 62x + 17$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1/3, (-11+sqrt(53))/2, (-11-sqrt(53))/2}",
    "solution": [
      "Find every root of $f(x) = 3x^3 + 34x^2 + 62x + 17$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $17$ and $m$ a divisor of $3$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 3 & 34 & 62 & 17 \\\\ & & -1 & -11 & -17 \\\\ \\hline & 3 & 33 & 51 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{3}\\right)(3x^2 + 33x + 51)$",
      "$3x^2 + 33x + 51 = 3(x^2 + 11x + 17)$",
      "$f(x) = 3\\left(x + \\dfrac{1}{3}\\right)(x^2 + 11x + 17)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{1}{3} = 0$ or $x^2 + 11x + 17 = 0$.",
      "$a = 1$, $b = 11$, $c = 17$",
      "$b^2 - 4ac = 11^2 - 4 \\cdot 1 \\cdot 17 = 53$",
      "$x = \\dfrac{-11 \\pm \\sqrt{53}}{2}$",
      "The set of roots is $\\left\\{-\\dfrac{1}{3}, \\dfrac{-11 + \\sqrt{53}}{2}, \\dfrac{-11 - \\sqrt{53}}{2}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p12",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 24x^4 - 58x^3 - 229x^2 + 778x - 560$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{2, -7/2, 8/3, 5/4}",
    "solution": [
      "Find every root of $f(x) = 24x^4 - 58x^3 - 229x^2 + 778x - 560$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-560$ and $m$ a divisor of $24$.",
      "$\\begin{array}{r|rrrrr} 2 & 24 & -58 & -229 & 778 & -560 \\\\ & & 48 & -20 & -498 & 560 \\\\ \\hline & 24 & -10 & -249 & 280 & 0 \\end{array}$",
      "The quotient is $q(x) = 24x^3 - 10x^2 - 249x + 280$, so $f(x) = (x - 2)q(x)$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 24 & -10 & -249 & 280 \\\\ & & -84 & 329 & -280 \\\\ \\hline & 24 & -94 & 80 & 0 \\end{array}$",
      "$q(x) = \\left(x + \\dfrac{7}{2}\\right)(24x^2 - 94x + 80)$",
      "$24x^2 - 94x + 80 = 2(12x^2 - 47x + 40)$",
      "$12x^2 - 47x + 40 = (3x - 8)(4x - 5)$",
      "$f(x) = 2(x - 2)\\left(x + \\dfrac{7}{2}\\right)(3x - 8)(4x - 5)$",
      "So $f(x) = 0$ exactly when $x - 2 = 0$, $x + \\dfrac{7}{2} = 0$, $3x - 8 = 0$ or $4x - 5 = 0$.",
      "The set of roots is $\\left\\{2, -\\dfrac{7}{2}, \\dfrac{8}{3}, \\dfrac{5}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p13",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $12x^3 - 61x - 315 = -56x^2$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -5/2, x = 7/3, x = -9/2",
    "solution": [
      "Solve $12x^3 - 61x - 315 = -56x^2$.",
      "$12x^3 + 56x^2 - 61x - 315 = 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $12x^3 + 56x^2 - 61x - 315$ has $k$ a divisor of $-315$ and $m$ a divisor of $12$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 12 & 56 & -61 & -315 \\\\ & & -30 & -65 & 315 \\\\ \\hline & 12 & 26 & -126 & 0 \\end{array}$",
      "$12x^3 + 56x^2 - 61x - 315 = \\left(x + \\dfrac{5}{2}\\right)(12x^2 + 26x - 126)$",
      "$12x^2 + 26x - 126 = 2(6x^2 + 13x - 63)$",
      "$6x^2 + 13x - 63 = (3x - 7)(2x + 9)$",
      "$2\\left(x + \\dfrac{5}{2}\\right)(3x - 7)(2x + 9) = 0$",
      "So $x + \\dfrac{5}{2} = 0$, $3x - 7 = 0$ or $2x + 9 = 0$.",
      "The solutions are $x = -\\dfrac{5}{2}$, $x = \\dfrac{7}{3}$ and $x = -\\dfrac{9}{2}$."
    ]
  },
  {
    "id": "t198-k1-p14",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 24x^3 + 58x^2 - 25x - 24$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{3/4, -1/2, -8/3}",
    "solution": [
      "Find every root of $f(x) = 24x^3 + 58x^2 - 25x - 24$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-24$ and $m$ a divisor of $24$.",
      "$f(0) = -24$",
      "$f(1) = 24 + 58 - 25 - 24 = 33$",
      "So $f(x)$ has a root between $0$ and $1$.",
      "$\\begin{array}{r|rrrr} \\dfrac{3}{4} & 24 & 58 & -25 & -24 \\\\ & & 18 & 57 & 24 \\\\ \\hline & 24 & 76 & 32 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{3}{4}\\right)(24x^2 + 76x + 32)$",
      "$24x^2 + 76x + 32 = 4(6x^2 + 19x + 8)$",
      "$6x^2 + 19x + 8 = (2x + 1)(3x + 8)$",
      "$f(x) = 4\\left(x - \\dfrac{3}{4}\\right)(2x + 1)(3x + 8)$",
      "So $f(x) = 0$ exactly when $x - \\dfrac{3}{4} = 0$, $2x + 1 = 0$ or $3x + 8 = 0$.",
      "The set of roots is $\\left\\{\\dfrac{3}{4}, -\\dfrac{1}{2}, -\\dfrac{8}{3}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p15",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find every root of $f(x) = x^3 - \\dfrac{2}{3}x^2 - \\dfrac{43}{9}x - \\dfrac{40}{27}$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1/3, 8/3, -5/3}",
    "solution": [
      "Find every root of $f(x) = x^3 - \\dfrac{2}{3}x^2 - \\dfrac{43}{9}x - \\dfrac{40}{27}$.",
      "The equation $f(x) = 0$ holds exactly when $27x^3 - 18x^2 - 129x - 40 = 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $27x^3 - 18x^2 - 129x - 40$ has $k$ a divisor of $-40$ and $m$ a divisor of $27$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 27 & -18 & -129 & -40 \\\\ & & -9 & 9 & 40 \\\\ \\hline & 27 & -27 & -120 & 0 \\end{array}$",
      "$27x^3 - 18x^2 - 129x - 40 = \\left(x + \\dfrac{1}{3}\\right)(27x^2 - 27x - 120)$",
      "$27x^2 - 27x - 120 = 3(9x^2 - 9x - 40)$",
      "$9x^2 - 9x - 40 = (3x - 8)(3x + 5)$",
      "$27x^3 - 18x^2 - 129x - 40 = 3\\left(x + \\dfrac{1}{3}\\right)(3x - 8)(3x + 5)$",
      "So $27x^3 - 18x^2 - 129x - 40 = 0$ exactly when $x + \\dfrac{1}{3} = 0$, $3x - 8 = 0$ or $3x + 5 = 0$.",
      "The set of roots of $f(x)$ is $\\left\\{-\\dfrac{1}{3}, \\dfrac{8}{3}, -\\dfrac{5}{3}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p16",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find every complex root of $f(x) = 9x^3 - 39x^2 + 79x - 104$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{8/3, (5+i*sqrt(131))/6, (5-i*sqrt(131))/6}",
    "solution": [
      "Find every complex root of $f(x) = 9x^3 - 39x^2 + 79x - 104$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-104$ and $m$ a divisor of $9$.",
      "$\\begin{array}{r|rrrr} \\dfrac{8}{3} & 9 & -39 & 79 & -104 \\\\ & & 24 & -40 & 104 \\\\ \\hline & 9 & -15 & 39 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{8}{3}\\right)(9x^2 - 15x + 39)$",
      "$9x^2 - 15x + 39 = 3(3x^2 - 5x + 13)$",
      "$f(x) = 3\\left(x - \\dfrac{8}{3}\\right)(3x^2 - 5x + 13)$",
      "So $f(x) = 0$ exactly when $x - \\dfrac{8}{3} = 0$ or $3x^2 - 5x + 13 = 0$.",
      "$a = 3$, $b = -5$, $c = 13$",
      "$b^2 - 4ac = (-5)^2 - 4 \\cdot 3 \\cdot 13 = -131$",
      "$x = \\dfrac{5 \\pm \\sqrt{-131}}{6}$",
      "$\\sqrt{-131} = i\\sqrt{131}$",
      "The set of complex roots is $\\left\\{\\dfrac{8}{3}, \\dfrac{5 + i\\sqrt{131}}{6}, \\dfrac{5 - i\\sqrt{131}}{6}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p17",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $60x^3 - 30 = -43x^2 + 113x$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -5/3, x = -1/4, x = 6/5",
    "solution": [
      "Solve $60x^3 - 30 = -43x^2 + 113x$.",
      "$60x^3 + 43x^2 - 113x - 30 = 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $60x^3 + 43x^2 - 113x - 30$ has $k$ a divisor of $-30$ and $m$ a divisor of $60$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{3} & 60 & 43 & -113 & -30 \\\\ & & -100 & 95 & 30 \\\\ \\hline & 60 & -57 & -18 & 0 \\end{array}$",
      "$60x^3 + 43x^2 - 113x - 30 = \\left(x + \\dfrac{5}{3}\\right)(60x^2 - 57x - 18)$",
      "$60x^2 - 57x - 18 = 3(20x^2 - 19x - 6)$",
      "$20x^2 - 19x - 6 = (4x + 1)(5x - 6)$",
      "$3\\left(x + \\dfrac{5}{3}\\right)(4x + 1)(5x - 6) = 0$",
      "So $x + \\dfrac{5}{3} = 0$, $4x + 1 = 0$ or $5x - 6 = 0$.",
      "The solutions are $x = -\\dfrac{5}{3}$, $x = -\\dfrac{1}{4}$ and $x = \\dfrac{6}{5}$."
    ]
  },
  {
    "id": "t198-k1-p18",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 40x^4 + 322x^3 + 697x^2 + 237x - 108$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-3, -9/2, -4/5, 1/4}",
    "solution": [
      "Find every root of $f(x) = 40x^4 + 322x^3 + 697x^2 + 237x - 108$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-108$ and $m$ a divisor of $40$.",
      "$\\begin{array}{r|rrrrr} -3 & 40 & 322 & 697 & 237 & -108 \\\\ & & -120 & -606 & -273 & 108 \\\\ \\hline & 40 & 202 & 91 & -36 & 0 \\end{array}$",
      "The quotient is $q(x) = 40x^3 + 202x^2 + 91x - 36$, so $f(x) = (x + 3)q(x)$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{9}{2} & 40 & 202 & 91 & -36 \\\\ & & -180 & -99 & 36 \\\\ \\hline & 40 & 22 & -8 & 0 \\end{array}$",
      "$q(x) = \\left(x + \\dfrac{9}{2}\\right)(40x^2 + 22x - 8)$",
      "$40x^2 + 22x - 8 = 2(20x^2 + 11x - 4)$",
      "$20x^2 + 11x - 4 = (5x + 4)(4x - 1)$",
      "$f(x) = 2(x + 3)\\left(x + \\dfrac{9}{2}\\right)(5x + 4)(4x - 1)$",
      "So $f(x) = 0$ exactly when $x + 3 = 0$, $x + \\dfrac{9}{2} = 0$, $5x + 4 = 0$ or $4x - 1 = 0$.",
      "The set of roots is $\\left\\{-3, -\\dfrac{9}{2}, -\\dfrac{4}{5}, \\dfrac{1}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p19",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $32x^3 + 225 = 32x^2 + 190x$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -5/2, x = 5/4, x = 9/4",
    "solution": [
      "Solve $32x^3 + 225 = 32x^2 + 190x$.",
      "$32x^3 - 32x^2 - 190x + 225 = 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $32x^3 - 32x^2 - 190x + 225$ has $k$ a divisor of $225$ and $m$ a divisor of $32$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 32 & -32 & -190 & 225 \\\\ & & -80 & 280 & -225 \\\\ \\hline & 32 & -112 & 90 & 0 \\end{array}$",
      "$32x^3 - 32x^2 - 190x + 225 = \\left(x + \\dfrac{5}{2}\\right)(32x^2 - 112x + 90)$",
      "$32x^2 - 112x + 90 = 2(16x^2 - 56x + 45)$",
      "$16x^2 - 56x + 45 = (4x - 5)(4x - 9)$",
      "$2\\left(x + \\dfrac{5}{2}\\right)(4x - 5)(4x - 9) = 0$",
      "So $x + \\dfrac{5}{2} = 0$, $4x - 5 = 0$ or $4x - 9 = 0$.",
      "The solutions are $x = -\\dfrac{5}{2}$, $x = \\dfrac{5}{4}$ and $x = \\dfrac{9}{4}$."
    ]
  },
  {
    "id": "t198-k1-p20",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 36x^3 + 75x^2 - 86x - 80$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-2/3, 5/4, -8/3}",
    "solution": [
      "Find every root of $f(x) = 36x^3 + 75x^2 - 86x - 80$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-80$ and $m$ a divisor of $36$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{2}{3} & 36 & 75 & -86 & -80 \\\\ & & -24 & -34 & 80 \\\\ \\hline & 36 & 51 & -120 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{2}{3}\\right)(36x^2 + 51x - 120)$",
      "$36x^2 + 51x - 120 = 3(12x^2 + 17x - 40)$",
      "$12x^2 + 17x - 40 = (4x - 5)(3x + 8)$",
      "$f(x) = 3\\left(x + \\dfrac{2}{3}\\right)(4x - 5)(3x + 8)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{2}{3} = 0$, $4x - 5 = 0$ or $3x + 8 = 0$.",
      "The set of roots is $\\left\\{-\\dfrac{2}{3}, \\dfrac{5}{4}, -\\dfrac{8}{3}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p21",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 45x^4 + 9x^3 - 155x^2 + 19x + 10$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-2, 1/3, 5/3, -1/5}",
    "solution": [
      "Find every root of $f(x) = 45x^4 + 9x^3 - 155x^2 + 19x + 10$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $10$ and $m$ a divisor of $45$.",
      "$\\begin{array}{r|rrrrr} -2 & 45 & 9 & -155 & 19 & 10 \\\\ & & -90 & 162 & -14 & -10 \\\\ \\hline & 45 & -81 & 7 & 5 & 0 \\end{array}$",
      "The quotient is $q(x) = 45x^3 - 81x^2 + 7x + 5$, so $f(x) = (x + 2)q(x)$.",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 45 & -81 & 7 & 5 \\\\ & & 15 & -22 & -5 \\\\ \\hline & 45 & -66 & -15 & 0 \\end{array}$",
      "$q(x) = \\left(x - \\dfrac{1}{3}\\right)(45x^2 - 66x - 15)$",
      "$45x^2 - 66x - 15 = 3(15x^2 - 22x - 5)$",
      "$15x^2 - 22x - 5 = (3x - 5)(5x + 1)$",
      "$f(x) = 3(x + 2)\\left(x - \\dfrac{1}{3}\\right)(3x - 5)(5x + 1)$",
      "So $f(x) = 0$ exactly when $x + 2 = 0$, $x - \\dfrac{1}{3} = 0$, $3x - 5 = 0$ or $5x + 1 = 0$.",
      "The set of roots is $\\left\\{-2, \\dfrac{1}{3}, \\dfrac{5}{3}, -\\dfrac{1}{5}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p22",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find every root of $f(x) = 45x^3 + 153x^2 + 151x + 35$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1/3, -7/5, -5/3}",
    "solution": [
      "Find every root of $f(x) = 45x^3 + 153x^2 + 151x + 35$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $35$ and $m$ a divisor of $45$.",
      "$f(-1) = -45 + 153 - 151 + 35 = -8$",
      "$f(0) = 35$",
      "So $f(x)$ has a root between $-1$ and $0$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 45 & 153 & 151 & 35 \\\\ & & -15 & -46 & -35 \\\\ \\hline & 45 & 138 & 105 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{3}\\right)(45x^2 + 138x + 105)$",
      "$45x^2 + 138x + 105 = 3(15x^2 + 46x + 35)$",
      "$15x^2 + 46x + 35 = (5x + 7)(3x + 5)$",
      "$f(x) = 3\\left(x + \\dfrac{1}{3}\\right)(5x + 7)(3x + 5)$",
      "So $f(x) = 0$ exactly when $x + \\dfrac{1}{3} = 0$, $5x + 7 = 0$ or $3x + 5 = 0$.",
      "The set of roots is $\\left\\{-\\dfrac{1}{3}, -\\dfrac{7}{5}, -\\dfrac{5}{3}\\right\\}$."
    ]
  },
  {
    "id": "t198-k1-p23",
    "topic": "rational-roots",
    "kind": "t198-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find every complex root of $f(x) = 6x^3 - 47x^2 + 131x - 126$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{7/3, (11+i*sqrt(23))/4, (11-i*sqrt(23))/4}",
    "solution": [
      "Find every complex root of $f(x) = 6x^3 - 47x^2 + 131x - 126$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-126$ and $m$ a divisor of $6$.",
      "$\\begin{array}{r|rrrr} \\dfrac{7}{3} & 6 & -47 & 131 & -126 \\\\ & & 14 & -77 & 126 \\\\ \\hline & 6 & -33 & 54 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{7}{3}\\right)(6x^2 - 33x + 54)$",
      "$6x^2 - 33x + 54 = 3(2x^2 - 11x + 18)$",
      "$f(x) = 3\\left(x - \\dfrac{7}{3}\\right)(2x^2 - 11x + 18)$",
      "So $f(x) = 0$ exactly when $x - \\dfrac{7}{3} = 0$ or $2x^2 - 11x + 18 = 0$.",
      "$a = 2$, $b = -11$, $c = 18$",
      "$b^2 - 4ac = (-11)^2 - 4 \\cdot 2 \\cdot 18 = -23$",
      "$x = \\dfrac{11 \\pm \\sqrt{-23}}{4}$",
      "$\\sqrt{-23} = i\\sqrt{23}$",
      "The set of complex roots is $\\left\\{\\dfrac{7}{3}, \\dfrac{11 + i\\sqrt{23}}{4}, \\dfrac{11 - i\\sqrt{23}}{4}\\right\\}$."
    ]
  },
  {
    "id": "t198-k2-p01",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 50x^3 - 45x^2 - 116x + 63$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $63$ and $m$ a divisor of $50$.",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 50 & -45 & -116 & 63 \\\\ & & 25 & -10 & -63 \\\\ \\hline & 50 & -20 & -126 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{1}{2}\\right)(50x^2 - 20x - 126)$",
      "$50x^2 - 20x - 126 = 2(25x^2 - 10x - 63)$",
      "$25x^2 - 10x - 63 = (5x + 9)(5x + 7)$",
      "$x = \\dfrac{1}{2}$, $x = -\\dfrac{9}{5}$ or $x = -\\dfrac{7}{5}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 25*x^2-10*x-63 = (5*x-9)*(5*x+7)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 50x^3 - 45x^2 - 116x + 63$, and write that line right.",
      "Line 5 writes the bracket $5x - 9$ as $5x + 9$, but $(5x + 9)(5x + 7)$ multiplies out to $25x^2 + 80x + 63$, not $25x^2 - 10x - 63$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $25x^2 - 10x - 63 = (5x - 9)(5x + 7)$."
    ]
  },
  {
    "id": "t198-k2-p02",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 32x^3 - 160x^2 + 178x - 35$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-35$ and $m$ a divisor of $32$.",
      "$\\begin{array}{r|rrrr} \\dfrac{7}{2} & 32 & -160 & 178 & -35 \\\\ & & 112 & -168 & 35 \\\\ \\hline & 32 & -48 & 10 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{7}{2}\\right)(32x^2 - 48x + 10)$",
      "$32x^2 - 48x + 10 = 2(16x^2 + 24x + 5)$",
      "$16x^2 + 24x + 5 = (4x + 5)(4x + 1)$",
      "$x = \\dfrac{7}{2}$, $x = -\\dfrac{5}{4}$ or $x = -\\dfrac{1}{4}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 32*x^2-48*x+10 = 2*(16*x^2-24*x+5)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 32x^3 - 160x^2 + 178x - 35$, and write that line right.",
      "Line 4 gives the coefficient of $x$ in the bracket as $24$, but $-48 \\div 2 = -24$.",
      "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $32x^2 - 48x + 10 = 2(16x^2 - 24x + 5)$."
    ]
  },
  {
    "id": "t198-k2-p03",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 20x^3 + 44x^2 - 69x - 135$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-135$ and $m$ a divisor of $20$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{3}{2} & 20 & 44 & -69 & -135 \\\\ & & -30 & -21 & 135 \\\\ \\hline & 20 & 14 & -90 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{3}{2}\\right)(20x^2 + 14x - 90)$",
      "$20x^2 + 14x - 90 = 2(10x^2 + 7x - 45)$",
      "$10x^2 + 7x - 45 = (5x - 9)(2x + 5)$",
      "$x = -\\dfrac{3}{2}$, $x = \\dfrac{9}{5}$ or $x = \\dfrac{5}{2}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: x = -3/2, x = 9/5, x = -5/2",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 20x^3 + 44x^2 - 69x - 135$, and write that line right.",
      "Line 6 gives the root of $2x + 5 = 0$ as $\\dfrac{5}{2}$, but it is $-\\dfrac{5}{2}$.",
      "The lines above line 6 are right, so line 6 is the first wrong line.",
      "Line 6 written right is $x = -\\dfrac{3}{2}$, $x = \\dfrac{9}{5}$ or $x = -\\dfrac{5}{2}$."
    ]
  },
  {
    "id": "t198-k2-p04",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 24x^3 + 74x^2 - 39x - 14$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-14$ and $m$ a divisor of $24$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & 24 & 74 & -39 & -14 \\\\ & & -84 & 35 & 14 \\\\ \\hline & 24 & -10 & -4 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{7}{2}\\right)(24x^2 - 10x - 4)$",
      "$24x^2 - 10x - 4 = 2(12x^2 - 5x - 2)$",
      "$12x^2 - 5x - 2 = (4x + 1)(3x - 2)$",
      "$x = -\\dfrac{7}{2}$, $x = \\dfrac{1}{4}$ or $x = \\dfrac{2}{3}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: x = -7/2, x = -1/4, x = 2/3",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 24x^3 + 74x^2 - 39x - 14$, and write that line right.",
      "Line 6 gives the root of $4x + 1 = 0$ as $\\dfrac{1}{4}$, but it is $-\\dfrac{1}{4}$.",
      "The lines above line 6 are right, so line 6 is the first wrong line.",
      "Line 6 written right is $x = -\\dfrac{7}{2}$, $x = -\\dfrac{1}{4}$ or $x = \\dfrac{2}{3}$."
    ]
  },
  {
    "id": "t198-k2-p05",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 36x^3 + 123x^2 + 79x - 28$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-28$ and $m$ a divisor of $36$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{4}{3} & 36 & 123 & 79 & -28 \\\\ & & -48 & -100 & 28 \\\\ \\hline & 36 & 75 & -21 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{4}{3}\\right)(36x^2 + 75x - 21)$",
      "$36x^2 + 75x - 21 = 3(12x^2 + 25x - 7)$",
      "$12x^2 + 25x - 7 = (4x + 1)(3x + 7)$",
      "$x = -\\dfrac{4}{3}$, $x = -\\dfrac{1}{4}$ or $x = -\\dfrac{7}{3}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 12*x^2+25*x-7 = (4*x-1)*(3*x+7)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 36x^3 + 123x^2 + 79x - 28$, and write that line right.",
      "Line 5 writes the bracket $4x - 1$ as $4x + 1$, but $(4x + 1)(3x + 7)$ multiplies out to $12x^2 + 31x + 7$, not $12x^2 + 25x - 7$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $12x^2 + 25x - 7 = (4x - 1)(3x + 7)$."
    ]
  },
  {
    "id": "t198-k2-p06",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 32x^3 + 80x^2 + 6x - 27$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-27$ and $m$ a divisor of $32$.",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 32 & 80 & 6 & -27 \\\\ & & 16 & 48 & 27 \\\\ \\hline & 32 & 96 & 54 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{2}\\right)(32x^2 + 96x + 54)$",
      "$32x^2 + 96x + 54 = 2(16x^2 + 48x + 27)$",
      "$16x^2 + 48x + 27 = (4x + 3)(4x + 9)$",
      "$x = -\\dfrac{1}{2}$, $x = -\\dfrac{3}{4}$ or $x = -\\dfrac{9}{4}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = (x-1/2)*(32*x^2+96*x+54)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 32x^3 + 80x^2 + 6x - 27$, and write that line right.",
      "Line 3 writes the factor for the number $\\dfrac{1}{2}$ on the left of line 2 as $x + \\dfrac{1}{2}$, but it is $x - \\dfrac{1}{2}$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(x) = \\left(x - \\dfrac{1}{2}\\right)(32x^2 + 96x + 54)$."
    ]
  },
  {
    "id": "t198-k2-p07",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 48x^3 - 88x^2 - 161x + 245$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $245$ and $m$ a divisor of $48$.",
      "$\\begin{array}{r|rrrr} \\dfrac{7}{3} & 48 & -88 & -161 & 245 \\\\ & & 112 & 56 & -245 \\\\ \\hline & 48 & 24 & -105 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{7}{3}\\right)(48x^2 + 24x - 105)$",
      "$48x^2 + 24x - 105 = 3(16x^2 + 8x - 35)$",
      "$16x^2 + 8x - 35 = (4x + 7)(4x - 5)$",
      "$x = -\\dfrac{7}{3}$, $x = -\\dfrac{7}{4}$ or $x = \\dfrac{5}{4}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = (x-7/3)*(48*x^2+24*x-105)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 48x^3 - 88x^2 - 161x + 245$, and write that line right.",
      "Line 3 writes the factor for the number $\\dfrac{7}{3}$ on the left of line 2 as $x + \\dfrac{7}{3}$, but it is $x - \\dfrac{7}{3}$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(x) = \\left(x - \\dfrac{7}{3}\\right)(48x^2 + 24x - 105)$."
    ]
  },
  {
    "id": "t198-k2-p08",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 40x^3 + 54x^2 - 3x - 10$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-10$ and $m$ a divisor of $40$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 40 & 54 & -3 & -10 \\\\ & & -20 & -17 & 10 \\\\ \\hline & 40 & 34 & -20 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{2}\\right)(40x^2 + 34x - 20)$",
      "$40x^2 + 34x - 20 = 2(20x^2 + 17x - 10)$",
      "$20x^2 + 17x - 10 = (4x + 5)(5x - 2)$",
      "$x = -\\dfrac{1}{2}$, $x = \\dfrac{5}{4}$ or $x = \\dfrac{2}{5}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: x = -1/2, x = -5/4, x = 2/5",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 40x^3 + 54x^2 - 3x - 10$, and write that line right.",
      "Line 6 gives the root of $4x + 5 = 0$ as $\\dfrac{5}{4}$, but it is $-\\dfrac{5}{4}$.",
      "The lines above line 6 are right, so line 6 is the first wrong line.",
      "Line 6 written right is $x = -\\dfrac{1}{2}$, $x = -\\dfrac{5}{4}$ or $x = \\dfrac{2}{5}$."
    ]
  },
  {
    "id": "t198-k2-p09",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 18x^3 + 105x^2 + 182x + 80$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $80$ and $m$ a divisor of $18$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 18 & 105 & 182 & 80 \\\\ & & -45 & -150 & -80 \\\\ \\hline & 18 & 60 & 32 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{5}{2}\\right)(18x^2 + 60x + 32)$",
      "$18x^2 + 60x + 32 = 2(9x^2 + 30x + 16)$",
      "$9x^2 + 30x + 16 = (3x + 2)(3x + 8)$",
      "$x = -\\dfrac{5}{2}$, $x = \\dfrac{2}{3}$ or $x = -\\dfrac{8}{3}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: x = -5/2, x = -2/3, x = -8/3",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 18x^3 + 105x^2 + 182x + 80$, and write that line right.",
      "Line 6 gives the root of $3x + 2 = 0$ as $\\dfrac{2}{3}$, but it is $-\\dfrac{2}{3}$.",
      "The lines above line 6 are right, so line 6 is the first wrong line.",
      "Line 6 written right is $x = -\\dfrac{5}{2}$, $x = -\\dfrac{2}{3}$ or $x = -\\dfrac{8}{3}$."
    ]
  },
  {
    "id": "t198-k2-p10",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 50x^3 + 45x^2 - 81x - 54$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-54$ and $m$ a divisor of $50$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{3}{2} & 50 & 45 & -81 & -54 \\\\ & & -75 & 45 & 54 \\\\ \\hline & 50 & -30 & -36 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{3}{2}\\right)(50x^2 - 30x - 36)$",
      "$50x^2 - 30x - 36 = 2(25x^2 + 15x - 18)$",
      "$25x^2 + 15x - 18 = (5x - 3)(5x + 6)$",
      "$x = -\\dfrac{3}{2}$, $x = \\dfrac{3}{5}$ or $x = -\\dfrac{6}{5}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 50*x^2-30*x-36 = 2*(25*x^2-15*x-18)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 50x^3 + 45x^2 - 81x - 54$, and write that line right.",
      "Line 4 gives the coefficient of $x$ in the bracket as $15$, but $-30 \\div 2 = -15$.",
      "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $50x^2 - 30x - 36 = 2(25x^2 - 15x - 18)$."
    ]
  },
  {
    "id": "t198-k2-p11",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 60x^3 + 91x^2 - 13x - 8$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-8$ and $m$ a divisor of $60$.",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 60 & 91 & -13 & -8 \\\\ & & 20 & 37 & 8 \\\\ \\hline & 60 & 111 & 24 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{1}{3}\\right)(60x^2 + 111x + 24)$",
      "$60x^2 + 111x + 24 = 3(20x^2 + 37x + 8)$",
      "$20x^2 + 37x + 8 = (5x + 8)(4x + 1)$",
      "$x = -\\dfrac{1}{3}$, $x = -\\dfrac{8}{5}$ or $x = -\\dfrac{1}{4}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = (x-1/3)*(60*x^2+111*x+24)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 60x^3 + 91x^2 - 13x - 8$, and write that line right.",
      "Line 3 writes the factor for the number $\\dfrac{1}{3}$ on the left of line 2 as $x + \\dfrac{1}{3}$, but it is $x - \\dfrac{1}{3}$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(x) = \\left(x - \\dfrac{1}{3}\\right)(60x^2 + 111x + 24)$."
    ]
  },
  {
    "id": "t198-k2-p12",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 30x^3 - 209x^2 + 373x - 180$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-180$ and $m$ a divisor of $30$.",
      "$\\begin{array}{r|rrrr} \\dfrac{9}{2} & 30 & -209 & 373 & -180 \\\\ & & 135 & -333 & 180 \\\\ \\hline & 30 & -74 & 40 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{9}{2}\\right)(30x^2 - 74x + 40)$",
      "$30x^2 - 74x + 40 = 2(15x^2 - 37x + 20)$",
      "$15x^2 - 37x + 20 = (3x - 5)(5x - 4)$",
      "$x = -\\dfrac{9}{2}$, $x = \\dfrac{5}{3}$ or $x = \\dfrac{4}{5}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = (x-9/2)*(30*x^2-74*x+40)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 30x^3 - 209x^2 + 373x - 180$, and write that line right.",
      "Line 3 writes the factor for the number $\\dfrac{9}{2}$ on the left of line 2 as $x + \\dfrac{9}{2}$, but it is $x - \\dfrac{9}{2}$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(x) = \\left(x - \\dfrac{9}{2}\\right)(30x^2 - 74x + 40)$."
    ]
  },
  {
    "id": "t198-k2-p13",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 20x^3 + 8x^2 - 327x + 189$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $189$ and $m$ a divisor of $20$.",
      "$\\begin{array}{r|rrrr} \\dfrac{7}{2} & 20 & 8 & -327 & 189 \\\\ & & 70 & 273 & -189 \\\\ \\hline & 20 & 78 & -54 & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{7}{2}\\right)(20x^2 + 78x - 54)$",
      "$20x^2 + 78x - 54 = 2(10x^2 + 39x - 27)$",
      "$10x^2 + 39x - 27 = (2x + 9)(5x + 3)$",
      "$x = \\dfrac{7}{2}$, $x = -\\dfrac{9}{2}$ or $x = -\\dfrac{3}{5}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 10*x^2+39*x-27 = (2*x+9)*(5*x-3)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 20x^3 + 8x^2 - 327x + 189$, and write that line right.",
      "Line 5 writes the bracket $5x - 3$ as $5x + 3$, but $(2x + 9)(5x + 3)$ multiplies out to $10x^2 + 51x + 27$, not $10x^2 + 39x - 27$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $10x^2 + 39x - 27 = (2x + 9)(5x - 3)$."
    ]
  },
  {
    "id": "t198-k2-p14",
    "topic": "rational-roots",
    "kind": "t198-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the roots of $f(x) = 40x^3 + 158x^2 - 183x - 378$, and write that line right.",
    "given": [
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-378$ and $m$ a divisor of $40$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{9}{2} & 40 & 158 & -183 & -378 \\\\ & & -180 & 99 & 378 \\\\ \\hline & 40 & -22 & -84 & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{9}{2}\\right)(40x^2 - 22x - 84)$",
      "$40x^2 - 22x - 84 = 2(20x^2 + 11x - 42)$",
      "$20x^2 + 11x - 42 = (5x - 6)(4x + 7)$",
      "$x = -\\dfrac{9}{2}$, $x = \\dfrac{6}{5}$ or $x = -\\dfrac{7}{4}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 40*x^2-22*x-84 = 2*(20*x^2-11*x-42)",
    "solution": [
      "Find the first wrong line in this working for the roots of $f(x) = 40x^3 + 158x^2 - 183x - 378$, and write that line right.",
      "Line 4 gives the coefficient of $x$ in the bracket as $11$, but $-22 \\div 2 = -11$.",
      "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $40x^2 - 22x - 84 = 2(20x^2 - 11x - 42)$."
    ]
  },
  {
    "id": "t198-k3-p01",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $54$ from $8$ times the cube of a number $x$ leaves the difference of $70$ times its square and $141$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "8*x^3-54 = 70*x^2-141*x",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $54$ from $8$ times the cube of a number $x$ leaves the difference of $70$ times its square and $141$ times $x$.",
      "The left side, $54$ taken from $8$ times the cube of $x$, is $8x^3 - 54$.",
      "The right side, the difference of $70$ times its square and $141$ times $x$, is $70x^2 - 141x$.",
      "The whole sentence is $8x^3 - 54 = 70x^2 - 141x$."
    ]
  },
  {
    "id": "t198-k3-p02",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $24$ times the cube of a number $x$ and $14$ times its square equals $105$ less than $143$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "24*x^3-14*x^2 = 143*x-105",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $24$ times the cube of a number $x$ and $14$ times its square equals $105$ less than $143$ times $x$.",
      "The left side, the difference of $24$ times the cube of $x$ and $14$ times its square, is $24x^3 - 14x^2$.",
      "The right side, $105$ less than $143$ times $x$, is $143x - 105$.",
      "The whole sentence is $24x^3 - 14x^2 = 143x - 105$."
    ]
  },
  {
    "id": "t198-k3-p03",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $16$ times the cube of a number $x$ and $56$ times its square is equal to the sum of $67$ times $x$ and $140$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "16*x^3+56*x^2 = 67*x+140",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $16$ times the cube of a number $x$ and $56$ times its square is equal to the sum of $67$ times $x$ and $140$.",
      "The left side, the sum of $16$ times the cube of $x$ and $56$ times its square, is $16x^3 + 56x^2$.",
      "The right side, the sum of $67$ times $x$ and $140$, is $67x + 140$.",
      "The whole sentence is $16x^3 + 56x^2 = 67x + 140$."
    ]
  },
  {
    "id": "t198-k3-p04",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $28$ from $9$ times the cube of a number $x$ leaves the difference of $60$ times its square and $103$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "9*x^3-28 = 60*x^2-103*x",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $28$ from $9$ times the cube of a number $x$ leaves the difference of $60$ times its square and $103$ times $x$.",
      "The left side, $28$ taken from $9$ times the cube of $x$, is $9x^3 - 28$.",
      "The right side, the difference of $60$ times its square and $103$ times $x$, is $60x^2 - 103x$.",
      "The whole sentence is $9x^3 - 28 = 60x^2 - 103x$."
    ]
  },
  {
    "id": "t198-k3-p05",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $20$ times the cube of a number $x$ and $47$ times its square is equal to the sum of $54$ times $x$ and $45$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "20*x^3+47*x^2 = 54*x+45",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $20$ times the cube of a number $x$ and $47$ times its square is equal to the sum of $54$ times $x$ and $45$.",
      "The left side, the sum of $20$ times the cube of $x$ and $47$ times its square, is $20x^3 + 47x^2$.",
      "The right side, the sum of $54$ times $x$ and $45$, is $54x + 45$.",
      "The whole sentence is $20x^3 + 47x^2 = 54x + 45$."
    ]
  },
  {
    "id": "t198-k3-p06",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $25$ times the cube of a number $x$ and $55$ times its square equals $84$ less than $32$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "25*x^3-55*x^2 = 32*x-84",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $25$ times the cube of a number $x$ and $55$ times its square equals $84$ less than $32$ times $x$.",
      "The left side, the difference of $25$ times the cube of $x$ and $55$ times its square, is $25x^3 - 55x^2$.",
      "The right side, $84$ less than $32$ times $x$, is $32x - 84$.",
      "The whole sentence is $25x^3 - 55x^2 = 32x - 84$."
    ]
  },
  {
    "id": "t198-k3-p07",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $245$ is added to $8$ times the cube of a number $x$, the result is the sum of $26$ times its square and $119$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "8*x^3+245 = 26*x^2+119*x",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $245$ is added to $8$ times the cube of a number $x$, the result is the sum of $26$ times its square and $119$ times $x$.",
      "The left side, $245$ added to $8$ times the cube of $x$, is $8x^3 + 245$.",
      "The right side, the sum of $26$ times its square and $119$ times $x$, is $26x^2 + 119x$.",
      "The whole sentence is $8x^3 + 245 = 26x^2 + 119x$."
    ]
  },
  {
    "id": "t198-k3-p08",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $100$ is added to $24$ times the cube of a number $x$, the result is the sum of $58$ times its square and $45$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "24*x^3+100 = 58*x^2+45*x",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $100$ is added to $24$ times the cube of a number $x$, the result is the sum of $58$ times its square and $45$ times $x$.",
      "The left side, $100$ added to $24$ times the cube of $x$, is $24x^3 + 100$.",
      "The right side, the sum of $58$ times its square and $45$ times $x$, is $58x^2 + 45x$.",
      "The whole sentence is $24x^3 + 100 = 58x^2 + 45x$."
    ]
  },
  {
    "id": "t198-k3-p09",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $15$ times the cube of a number $x$ and $79$ times its square equals $84$ less than $80$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "15*x^3-79*x^2 = 80*x-84",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $15$ times the cube of a number $x$ and $79$ times its square equals $84$ less than $80$ times $x$.",
      "The left side, the difference of $15$ times the cube of $x$ and $79$ times its square, is $15x^3 - 79x^2$.",
      "The right side, $84$ less than $80$ times $x$, is $80x - 84$.",
      "The whole sentence is $15x^3 - 79x^2 = 80x - 84$."
    ]
  },
  {
    "id": "t198-k3-p10",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $16$ times the cube of a number $x$ and $48$ times its square equals $45$ less than $169$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "16*x^3-48*x^2 = 169*x-45",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The difference of $16$ times the cube of a number $x$ and $48$ times its square equals $45$ less than $169$ times $x$.",
      "The left side, the difference of $16$ times the cube of $x$ and $48$ times its square, is $16x^3 - 48x^2$.",
      "The right side, $45$ less than $169$ times $x$, is $169x - 45$.",
      "The whole sentence is $16x^3 - 48x^2 = 169x - 45$."
    ]
  },
  {
    "id": "t198-k3-p11",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $126$ is added to $10$ times the cube of a number $x$, the result is the sum of $7$ times its square and $111$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "10*x^3+126 = 7*x^2+111*x",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: When $126$ is added to $10$ times the cube of a number $x$, the result is the sum of $7$ times its square and $111$ times $x$.",
      "The left side, $126$ added to $10$ times the cube of $x$, is $10x^3 + 126$.",
      "The right side, the sum of $7$ times its square and $111$ times $x$, is $7x^2 + 111x$.",
      "The whole sentence is $10x^3 + 126 = 7x^2 + 111x$."
    ]
  },
  {
    "id": "t198-k3-p12",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $9$ from $40$ times the cube of a number $x$ leaves the difference of $198$ times its square and $83$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "40*x^3-9 = 198*x^2-83*x",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: Taking $9$ from $40$ times the cube of a number $x$ leaves the difference of $198$ times its square and $83$ times $x$.",
      "The left side, $9$ taken from $40$ times the cube of $x$, is $40x^3 - 9$.",
      "The right side, the difference of $198$ times its square and $83$ times $x$, is $198x^2 - 83x$.",
      "The whole sentence is $40x^3 - 9 = 198x^2 - 83x$."
    ]
  },
  {
    "id": "t198-k3-p13",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $27$ times the cube of a number $x$ and $9$ times its square is equal to the sum of $48$ times $x$ and $16$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "27*x^3+9*x^2 = 48*x+16",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $27$ times the cube of a number $x$ and $9$ times its square is equal to the sum of $48$ times $x$ and $16$.",
      "The left side, the sum of $27$ times the cube of $x$ and $9$ times its square, is $27x^3 + 9x^2$.",
      "The right side, the sum of $48$ times $x$ and $16$, is $48x + 16$.",
      "The whole sentence is $27x^3 + 9x^2 = 48x + 16$."
    ]
  },
  {
    "id": "t198-k3-p14",
    "topic": "rational-roots",
    "kind": "t198-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $15$ times the cube of a number $x$ and $37$ times its square is equal to the sum of $22$ times $x$ and $72$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "15*x^3+37*x^2 = 22*x+72",
    "solution": [
      "Write this sentence as an equation in $x$, with the term in $x^3$ on the left: The sum of $15$ times the cube of a number $x$ and $37$ times its square is equal to the sum of $22$ times $x$ and $72$.",
      "The left side, the sum of $15$ times the cube of $x$ and $37$ times its square, is $15x^3 + 37x^2$.",
      "The right side, the sum of $22$ times $x$ and $72$, is $22x + 72$.",
      "The whole sentence is $15x^3 + 37x^2 = 22x + 72$."
    ]
  },
  {
    "id": "t198-k4-p01",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $20x^3 - 19x - 6 < 4x^2$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < -1/2 or -1/2 < x < 6/5",
    "solution": [
      "Solve $20x^3 - 19x - 6 < 4x^2$.",
      "$20x^3 - 4x^2 - 19x - 6 < 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $20x^3 - 4x^2 - 19x - 6$ has $k$ a divisor of $-6$ and $m$ a divisor of $20$.",
      "$\\begin{array}{r|rrrr} \\dfrac{6}{5} & 20 & -4 & -19 & -6 \\\\ & & 24 & 24 & 6 \\\\ \\hline & 20 & 20 & 5 & 0 \\end{array}$",
      "$20x^3 - 4x^2 - 19x - 6 = \\left(x - \\dfrac{6}{5}\\right)(20x^2 + 20x + 5)$",
      "$20x^2 + 20x + 5 = 5(4x^2 + 4x + 1)$",
      "$4x^2 + 4x + 1 = (2x + 1)^2$",
      "$5\\left(x - \\dfrac{6}{5}\\right)(2x + 1)^2 < 0$",
      "The square $(2x + 1)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{1}{2}$.",
      "For $x \\ne -\\dfrac{1}{2}$ the product has the sign of $x - \\dfrac{6}{5}$: negative for $x < \\dfrac{6}{5}$ and positive for $x > \\dfrac{6}{5}$.",
      "The product is $0$ at $-\\dfrac{1}{2}$ and $\\dfrac{6}{5}$, so these numbers are left out.",
      "The solutions are the numbers with $x < -\\dfrac{1}{2}$ or $-\\dfrac{1}{2} < x < \\dfrac{6}{5}$."
    ]
  },
  {
    "id": "t198-k4-p02",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $60x^3 + 149x^2 + 15x - 14 \\le 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -7/3 or -2/5 <= x <= 1/4",
    "solution": [
      "Solve $60x^3 + 149x^2 + 15x - 14 \\le 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $60x^3 + 149x^2 + 15x - 14$ has $k$ a divisor of $-14$ and $m$ a divisor of $60$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{7}{3} & 60 & 149 & 15 & -14 \\\\ & & -140 & -21 & 14 \\\\ \\hline & 60 & 9 & -6 & 0 \\end{array}$",
      "$60x^3 + 149x^2 + 15x - 14 = \\left(x + \\dfrac{7}{3}\\right)(60x^2 + 9x - 6)$",
      "$60x^2 + 9x - 6 = 3(20x^2 + 3x - 2)$",
      "$20x^2 + 3x - 2 = (4x - 1)(5x + 2)$",
      "$3\\left(x + \\dfrac{7}{3}\\right)(4x - 1)(5x + 2) \\le 0$",
      "On $x < -\\dfrac{7}{3}$, $-\\dfrac{7}{3} < x < -\\dfrac{2}{5}$, $-\\dfrac{2}{5} < x < \\dfrac{1}{4}$ and $x > \\dfrac{1}{4}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{7}{3}$, $-\\dfrac{2}{5}$ and $\\dfrac{1}{4}$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -\\dfrac{7}{3}$ or $-\\dfrac{2}{5} \\le x \\le \\dfrac{1}{4}$."
    ]
  },
  {
    "id": "t198-k4-p03",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $18x^3 - 31x + 18 \\ge 75x^2$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-2/3 <= x <= 1/3 or x >= 9/2",
    "solution": [
      "Solve $18x^3 - 31x + 18 \\ge 75x^2$.",
      "$18x^3 - 75x^2 - 31x + 18 \\ge 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $18x^3 - 75x^2 - 31x + 18$ has $k$ a divisor of $18$ and $m$ a divisor of $18$.",
      "$\\begin{array}{r|rrrr} \\dfrac{9}{2} & 18 & -75 & -31 & 18 \\\\ & & 81 & 27 & -18 \\\\ \\hline & 18 & 6 & -4 & 0 \\end{array}$",
      "$18x^3 - 75x^2 - 31x + 18 = \\left(x - \\dfrac{9}{2}\\right)(18x^2 + 6x - 4)$",
      "$18x^2 + 6x - 4 = 2(9x^2 + 3x - 2)$",
      "$9x^2 + 3x - 2 = (3x - 1)(3x + 2)$",
      "$2\\left(x - \\dfrac{9}{2}\\right)(3x - 1)(3x + 2) \\ge 0$",
      "On $x < -\\dfrac{2}{3}$, $-\\dfrac{2}{3} < x < \\dfrac{1}{3}$, $\\dfrac{1}{3} < x < \\dfrac{9}{2}$ and $x > \\dfrac{9}{2}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{2}{3}$, $\\dfrac{1}{3}$ and $\\dfrac{9}{2}$, so these numbers are taken in.",
      "The solutions are the numbers with $-\\dfrac{2}{3} \\le x \\le \\dfrac{1}{3}$ or $x \\ge \\dfrac{9}{2}$."
    ]
  },
  {
    "id": "t198-k4-p04",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $36x^3 \\ge 141x^2 - 70x - 147$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x >= -3/4",
    "solution": [
      "Solve $36x^3 \\ge 141x^2 - 70x - 147$.",
      "$36x^3 - 141x^2 + 70x + 147 \\ge 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $36x^3 - 141x^2 + 70x + 147$ has $k$ a divisor of $147$ and $m$ a divisor of $36$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{3}{4} & 36 & -141 & 70 & 147 \\\\ & & -27 & 126 & -147 \\\\ \\hline & 36 & -168 & 196 & 0 \\end{array}$",
      "$36x^3 - 141x^2 + 70x + 147 = \\left(x + \\dfrac{3}{4}\\right)(36x^2 - 168x + 196)$",
      "$36x^2 - 168x + 196 = 4(9x^2 - 42x + 49)$",
      "$9x^2 - 42x + 49 = (3x - 7)^2$",
      "$4\\left(x + \\dfrac{3}{4}\\right)(3x - 7)^2 \\ge 0$",
      "The square $(3x - 7)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{7}{3}$.",
      "For $x \\ne \\dfrac{7}{3}$ the product has the sign of $x + \\dfrac{3}{4}$: negative for $x < -\\dfrac{3}{4}$ and positive for $x > -\\dfrac{3}{4}$.",
      "The product is $0$ at $-\\dfrac{3}{4}$ and $\\dfrac{7}{3}$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\ge -\\dfrac{3}{4}$."
    ]
  },
  {
    "id": "t198-k4-p05",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $48x^3 - 88x^2 - 17x + 42 < 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < -2/3 or 3/4 < x < 7/4",
    "solution": [
      "Solve $48x^3 - 88x^2 - 17x + 42 < 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $48x^3 - 88x^2 - 17x + 42$ has $k$ a divisor of $42$ and $m$ a divisor of $48$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{2}{3} & 48 & -88 & -17 & 42 \\\\ & & -32 & 80 & -42 \\\\ \\hline & 48 & -120 & 63 & 0 \\end{array}$",
      "$48x^3 - 88x^2 - 17x + 42 = \\left(x + \\dfrac{2}{3}\\right)(48x^2 - 120x + 63)$",
      "$48x^2 - 120x + 63 = 3(16x^2 - 40x + 21)$",
      "$16x^2 - 40x + 21 = (4x - 3)(4x - 7)$",
      "$3\\left(x + \\dfrac{2}{3}\\right)(4x - 3)(4x - 7) < 0$",
      "On $x < -\\dfrac{2}{3}$, $-\\dfrac{2}{3} < x < \\dfrac{3}{4}$, $\\dfrac{3}{4} < x < \\dfrac{7}{4}$ and $x > \\dfrac{7}{4}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{2}{3}$, $\\dfrac{3}{4}$ and $\\dfrac{7}{4}$, so these numbers are left out.",
      "The solutions are the numbers with $x < -\\dfrac{2}{3}$ or $\\dfrac{3}{4} < x < \\dfrac{7}{4}$."
    ]
  },
  {
    "id": "t198-k4-p06",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $20x^3 - 147 \\ge -72x^2 + 35x$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-7/2 <= x <= -3/2 or x >= 7/5",
    "solution": [
      "Solve $20x^3 - 147 \\ge -72x^2 + 35x$.",
      "$20x^3 + 72x^2 - 35x - 147 \\ge 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $20x^3 + 72x^2 - 35x - 147$ has $k$ a divisor of $-147$ and $m$ a divisor of $20$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{3}{2} & 20 & 72 & -35 & -147 \\\\ & & -30 & -63 & 147 \\\\ \\hline & 20 & 42 & -98 & 0 \\end{array}$",
      "$20x^3 + 72x^2 - 35x - 147 = \\left(x + \\dfrac{3}{2}\\right)(20x^2 + 42x - 98)$",
      "$20x^2 + 42x - 98 = 2(10x^2 + 21x - 49)$",
      "$10x^2 + 21x - 49 = (2x + 7)(5x - 7)$",
      "$2\\left(x + \\dfrac{3}{2}\\right)(2x + 7)(5x - 7) \\ge 0$",
      "On $x < -\\dfrac{7}{2}$, $-\\dfrac{7}{2} < x < -\\dfrac{3}{2}$, $-\\dfrac{3}{2} < x < \\dfrac{7}{5}$ and $x > \\dfrac{7}{5}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{7}{2}$, $-\\dfrac{3}{2}$ and $\\dfrac{7}{5}$, so these numbers are taken in.",
      "The solutions are the numbers with $-\\dfrac{7}{2} \\le x \\le -\\dfrac{3}{2}$ or $x \\ge \\dfrac{7}{5}$."
    ]
  },
  {
    "id": "t198-k4-p07",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $45x^3 - 213x^2 + 278x - 80 \\le 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= 2/5 or 5/3 <= x <= 8/3",
    "solution": [
      "Solve $45x^3 - 213x^2 + 278x - 80 \\le 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $45x^3 - 213x^2 + 278x - 80$ has $k$ a divisor of $-80$ and $m$ a divisor of $45$.",
      "$\\begin{array}{r|rrrr} \\dfrac{5}{3} & 45 & -213 & 278 & -80 \\\\ & & 75 & -230 & 80 \\\\ \\hline & 45 & -138 & 48 & 0 \\end{array}$",
      "$45x^3 - 213x^2 + 278x - 80 = \\left(x - \\dfrac{5}{3}\\right)(45x^2 - 138x + 48)$",
      "$45x^2 - 138x + 48 = 3(15x^2 - 46x + 16)$",
      "$15x^2 - 46x + 16 = (5x - 2)(3x - 8)$",
      "$3\\left(x - \\dfrac{5}{3}\\right)(5x - 2)(3x - 8) \\le 0$",
      "On $x < \\dfrac{2}{5}$, $\\dfrac{2}{5} < x < \\dfrac{5}{3}$, $\\dfrac{5}{3} < x < \\dfrac{8}{3}$ and $x > \\dfrac{8}{3}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $\\dfrac{2}{5}$, $\\dfrac{5}{3}$ and $\\dfrac{8}{3}$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le \\dfrac{2}{5}$ or $\\dfrac{5}{3} \\le x \\le \\dfrac{8}{3}$."
    ]
  },
  {
    "id": "t198-k4-p08",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $50x^3 - 165x^2 < -168x + 49$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < 1/2",
    "solution": [
      "Solve $50x^3 - 165x^2 < -168x + 49$.",
      "$50x^3 - 165x^2 + 168x - 49 < 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $50x^3 - 165x^2 + 168x - 49$ has $k$ a divisor of $-49$ and $m$ a divisor of $50$.",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 50 & -165 & 168 & -49 \\\\ & & 25 & -70 & 49 \\\\ \\hline & 50 & -140 & 98 & 0 \\end{array}$",
      "$50x^3 - 165x^2 + 168x - 49 = \\left(x - \\dfrac{1}{2}\\right)(50x^2 - 140x + 98)$",
      "$50x^2 - 140x + 98 = 2(25x^2 - 70x + 49)$",
      "$25x^2 - 70x + 49 = (5x - 7)^2$",
      "$2\\left(x - \\dfrac{1}{2}\\right)(5x - 7)^2 < 0$",
      "The square $(5x - 7)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{7}{5}$.",
      "For $x \\ne \\dfrac{7}{5}$ the product has the sign of $x - \\dfrac{1}{2}$: negative for $x < \\dfrac{1}{2}$ and positive for $x > \\dfrac{1}{2}$.",
      "The product is $0$ at $\\dfrac{1}{2}$ and $\\dfrac{7}{5}$, so these numbers are left out.",
      "The solutions are the numbers with $x < \\dfrac{1}{2}$."
    ]
  },
  {
    "id": "t198-k4-p09",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $60x^3 - 45 > 247x^2 - 272x$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "1/5 < x < 5/3 or x > 9/4",
    "solution": [
      "Solve $60x^3 - 45 > 247x^2 - 272x$.",
      "$60x^3 - 247x^2 + 272x - 45 > 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $60x^3 - 247x^2 + 272x - 45$ has $k$ a divisor of $-45$ and $m$ a divisor of $60$.",
      "$\\begin{array}{r|rrrr} \\dfrac{5}{3} & 60 & -247 & 272 & -45 \\\\ & & 100 & -245 & 45 \\\\ \\hline & 60 & -147 & 27 & 0 \\end{array}$",
      "$60x^3 - 247x^2 + 272x - 45 = \\left(x - \\dfrac{5}{3}\\right)(60x^2 - 147x + 27)$",
      "$60x^2 - 147x + 27 = 3(20x^2 - 49x + 9)$",
      "$20x^2 - 49x + 9 = (4x - 9)(5x - 1)$",
      "$3\\left(x - \\dfrac{5}{3}\\right)(4x - 9)(5x - 1) > 0$",
      "On $x < \\dfrac{1}{5}$, $\\dfrac{1}{5} < x < \\dfrac{5}{3}$, $\\dfrac{5}{3} < x < \\dfrac{9}{4}$ and $x > \\dfrac{9}{4}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $\\dfrac{1}{5}$, $\\dfrac{5}{3}$ and $\\dfrac{9}{4}$, so these numbers are left out.",
      "The solutions are the numbers with $\\dfrac{1}{5} < x < \\dfrac{5}{3}$ or $x > \\dfrac{9}{4}$."
    ]
  },
  {
    "id": "t198-k4-p10",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $50x^3 - 132x \\le -65x^2 - 45$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -5/2 or x = 3/5",
    "solution": [
      "Solve $50x^3 - 132x \\le -65x^2 - 45$.",
      "$50x^3 + 65x^2 - 132x + 45 \\le 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $50x^3 + 65x^2 - 132x + 45$ has $k$ a divisor of $45$ and $m$ a divisor of $50$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 50 & 65 & -132 & 45 \\\\ & & -125 & 150 & -45 \\\\ \\hline & 50 & -60 & 18 & 0 \\end{array}$",
      "$50x^3 + 65x^2 - 132x + 45 = \\left(x + \\dfrac{5}{2}\\right)(50x^2 - 60x + 18)$",
      "$50x^2 - 60x + 18 = 2(25x^2 - 30x + 9)$",
      "$25x^2 - 30x + 9 = (5x - 3)^2$",
      "$2\\left(x + \\dfrac{5}{2}\\right)(5x - 3)^2 \\le 0$",
      "The square $(5x - 3)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{3}{5}$.",
      "For $x \\ne \\dfrac{3}{5}$ the product has the sign of $x + \\dfrac{5}{2}$: negative for $x < -\\dfrac{5}{2}$ and positive for $x > -\\dfrac{5}{2}$.",
      "The product is $0$ at $-\\dfrac{5}{2}$ and $\\dfrac{3}{5}$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -\\dfrac{5}{2}$ or $x = \\dfrac{3}{5}$."
    ]
  },
  {
    "id": "t198-k4-p11",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $60x^3 + 11x^2 - 171x - 56 \\ge 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-8/5 <= x <= -1/3 or x >= 7/4",
    "solution": [
      "Solve $60x^3 + 11x^2 - 171x - 56 \\ge 0$.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $60x^3 + 11x^2 - 171x - 56$ has $k$ a divisor of $-56$ and $m$ a divisor of $60$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 60 & 11 & -171 & -56 \\\\ & & -20 & 3 & 56 \\\\ \\hline & 60 & -9 & -168 & 0 \\end{array}$",
      "$60x^3 + 11x^2 - 171x - 56 = \\left(x + \\dfrac{1}{3}\\right)(60x^2 - 9x - 168)$",
      "$60x^2 - 9x - 168 = 3(20x^2 - 3x - 56)$",
      "$20x^2 - 3x - 56 = (5x + 8)(4x - 7)$",
      "$3\\left(x + \\dfrac{1}{3}\\right)(5x + 8)(4x - 7) \\ge 0$",
      "On $x < -\\dfrac{8}{5}$, $-\\dfrac{8}{5} < x < -\\dfrac{1}{3}$, $-\\dfrac{1}{3} < x < \\dfrac{7}{4}$ and $x > \\dfrac{7}{4}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{8}{5}$, $-\\dfrac{1}{3}$ and $\\dfrac{7}{4}$, so these numbers are taken in.",
      "The solutions are the numbers with $-\\dfrac{8}{5} \\le x \\le -\\dfrac{1}{3}$ or $x \\ge \\dfrac{7}{4}$."
    ]
  },
  {
    "id": "t198-k4-p12",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $80x^3 > 184x^2 + 91x - 294$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-6/5 < x < 7/4 or x > 7/4",
    "solution": [
      "Solve $80x^3 > 184x^2 + 91x - 294$.",
      "$80x^3 - 184x^2 - 91x + 294 > 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $80x^3 - 184x^2 - 91x + 294$ has $k$ a divisor of $294$ and $m$ a divisor of $80$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{6}{5} & 80 & -184 & -91 & 294 \\\\ & & -96 & 336 & -294 \\\\ \\hline & 80 & -280 & 245 & 0 \\end{array}$",
      "$80x^3 - 184x^2 - 91x + 294 = \\left(x + \\dfrac{6}{5}\\right)(80x^2 - 280x + 245)$",
      "$80x^2 - 280x + 245 = 5(16x^2 - 56x + 49)$",
      "$16x^2 - 56x + 49 = (4x - 7)^2$",
      "$5\\left(x + \\dfrac{6}{5}\\right)(4x - 7)^2 > 0$",
      "The square $(4x - 7)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{7}{4}$.",
      "For $x \\ne \\dfrac{7}{4}$ the product has the sign of $x + \\dfrac{6}{5}$: negative for $x < -\\dfrac{6}{5}$ and positive for $x > -\\dfrac{6}{5}$.",
      "The product is $0$ at $-\\dfrac{6}{5}$ and $\\dfrac{7}{4}$, so these numbers are left out.",
      "The solutions are the numbers with $-\\dfrac{6}{5} < x < \\dfrac{7}{4}$ or $x > \\dfrac{7}{4}$."
    ]
  },
  {
    "id": "t198-k4-p13",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $24x^3 + 21 > 70x^2 - 37x$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-1/3 < x < 3/2 or x > 7/4",
    "solution": [
      "Solve $24x^3 + 21 > 70x^2 - 37x$.",
      "$24x^3 - 70x^2 + 37x + 21 > 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $24x^3 - 70x^2 + 37x + 21$ has $k$ a divisor of $21$ and $m$ a divisor of $24$.",
      "$\\begin{array}{r|rrrr} \\dfrac{3}{2} & 24 & -70 & 37 & 21 \\\\ & & 36 & -51 & -21 \\\\ \\hline & 24 & -34 & -14 & 0 \\end{array}$",
      "$24x^3 - 70x^2 + 37x + 21 = \\left(x - \\dfrac{3}{2}\\right)(24x^2 - 34x - 14)$",
      "$24x^2 - 34x - 14 = 2(12x^2 - 17x - 7)$",
      "$12x^2 - 17x - 7 = (3x + 1)(4x - 7)$",
      "$2\\left(x - \\dfrac{3}{2}\\right)(3x + 1)(4x - 7) > 0$",
      "On $x < -\\dfrac{1}{3}$, $-\\dfrac{1}{3} < x < \\dfrac{3}{2}$, $\\dfrac{3}{2} < x < \\dfrac{7}{4}$ and $x > \\dfrac{7}{4}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{1}{3}$, $\\dfrac{3}{2}$ and $\\dfrac{7}{4}$, so these numbers are left out.",
      "The solutions are the numbers with $-\\dfrac{1}{3} < x < \\dfrac{3}{2}$ or $x > \\dfrac{7}{4}$."
    ]
  },
  {
    "id": "t198-k4-p14",
    "topic": "rational-roots",
    "kind": "t198-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $40x^3 + 18x^2 - 81 < 117x$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < -3/2 or -3/4 < x < 9/5",
    "solution": [
      "Solve $40x^3 + 18x^2 - 81 < 117x$.",
      "$40x^3 + 18x^2 - 117x - 81 < 0$",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $40x^3 + 18x^2 - 117x - 81$ has $k$ a divisor of $-81$ and $m$ a divisor of $40$.",
      "$\\begin{array}{r|rrrr} -\\dfrac{3}{2} & 40 & 18 & -117 & -81 \\\\ & & -60 & 63 & 81 \\\\ \\hline & 40 & -42 & -54 & 0 \\end{array}$",
      "$40x^3 + 18x^2 - 117x - 81 = \\left(x + \\dfrac{3}{2}\\right)(40x^2 - 42x - 54)$",
      "$40x^2 - 42x - 54 = 2(20x^2 - 21x - 27)$",
      "$20x^2 - 21x - 27 = (4x + 3)(5x - 9)$",
      "$2\\left(x + \\dfrac{3}{2}\\right)(4x + 3)(5x - 9) < 0$",
      "On $x < -\\dfrac{3}{2}$, $-\\dfrac{3}{2} < x < -\\dfrac{3}{4}$, $-\\dfrac{3}{4} < x < \\dfrac{9}{5}$ and $x > \\dfrac{9}{5}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-\\dfrac{3}{2}$, $-\\dfrac{3}{4}$ and $\\dfrac{9}{5}$, so these numbers are left out.",
      "The solutions are the numbers with $x < -\\dfrac{3}{2}$ or $-\\dfrac{3}{4} < x < \\dfrac{9}{5}$."
    ]
  },
  {
    "id": "t198-k5-p01",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 17x^3 - 4x^2 + 8x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 17x^3 - 4x^2 + 8x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{17}$ and $-\\dfrac{1}{17}$.",
      "$\\begin{array}{r|rrrr} 1 & 17 & -4 & 8 & -1 \\\\ & & 17 & 13 & 21 \\\\ \\hline & 17 & 13 & 21 & 20 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 17 & -4 & 8 & -1 \\\\ & & -17 & 21 & -29 \\\\ \\hline & 17 & -21 & 29 & -30 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{17} & 17 & -4 & 8 & -1 \\\\ & & 1 & -\\dfrac{3}{17} & \\dfrac{133}{289} \\\\ \\hline & 17 & -3 & \\dfrac{133}{17} & -\\dfrac{156}{289} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{17} & 17 & -4 & 8 & -1 \\\\ & & -1 & \\dfrac{5}{17} & -\\dfrac{141}{289} \\\\ \\hline & 17 & -5 & \\dfrac{141}{17} & -\\dfrac{430}{289} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  },
  {
    "id": "t198-k5-p02",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 7x^3 - 22x^2 + 10x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 7x^3 - 22x^2 + 10x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{7}$ and $-\\dfrac{1}{7}$.",
      "$\\begin{array}{r|rrrr} 1 & 7 & -22 & 10 & -1 \\\\ & & 7 & -15 & -5 \\\\ \\hline & 7 & -15 & -5 & -6 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 7 & -22 & 10 & -1 \\\\ & & -7 & 29 & -39 \\\\ \\hline & 7 & -29 & 39 & -40 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{7} & 7 & -22 & 10 & -1 \\\\ & & 1 & -3 & 1 \\\\ \\hline & 7 & -21 & 7 & 0 \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{7} & 7 & -22 & 10 & -1 \\\\ & & -1 & \\dfrac{23}{7} & -\\dfrac{93}{49} \\\\ \\hline & 7 & -23 & \\dfrac{93}{7} & -\\dfrac{142}{49} \\end{array}$",
      "The value $f\\left(\\dfrac{1}{7}\\right)$ is $0$, so $\\dfrac{1}{7}$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p03",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 23x^3 - 7x^2 + 9x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 23x^3 - 7x^2 + 9x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{23}$ and $-\\dfrac{1}{23}$.",
      "$\\begin{array}{r|rrrr} 1 & 23 & -7 & 9 & -1 \\\\ & & 23 & 16 & 25 \\\\ \\hline & 23 & 16 & 25 & 24 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 23 & -7 & 9 & -1 \\\\ & & -23 & 30 & -39 \\\\ \\hline & 23 & -30 & 39 & -40 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{23} & 23 & -7 & 9 & -1 \\\\ & & 1 & -\\dfrac{6}{23} & \\dfrac{201}{529} \\\\ \\hline & 23 & -6 & \\dfrac{201}{23} & -\\dfrac{328}{529} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{23} & 23 & -7 & 9 & -1 \\\\ & & -1 & \\dfrac{8}{23} & -\\dfrac{215}{529} \\\\ \\hline & 23 & -8 & \\dfrac{215}{23} & -\\dfrac{744}{529} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  },
  {
    "id": "t198-k5-p04",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 13x^3 + 27x^2 - 11x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 13x^3 + 27x^2 - 11x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{13}$ and $-\\dfrac{1}{13}$.",
      "$\\begin{array}{r|rrrr} 1 & 13 & 27 & -11 & -1 \\\\ & & 13 & 40 & 29 \\\\ \\hline & 13 & 40 & 29 & 28 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 13 & 27 & -11 & -1 \\\\ & & -13 & -14 & 25 \\\\ \\hline & 13 & 14 & -25 & 24 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{13} & 13 & 27 & -11 & -1 \\\\ & & 1 & \\dfrac{28}{13} & -\\dfrac{115}{169} \\\\ \\hline & 13 & 28 & -\\dfrac{115}{13} & -\\dfrac{284}{169} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{13} & 13 & 27 & -11 & -1 \\\\ & & -1 & -2 & 1 \\\\ \\hline & 13 & 26 & -13 & 0 \\end{array}$",
      "The value $f\\left(-\\dfrac{1}{13}\\right)$ is $0$, so $-\\dfrac{1}{13}$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p05",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 19x^3 - 2x^2 - 4x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 19x^3 - 2x^2 - 4x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{19}$ and $-\\dfrac{1}{19}$.",
      "$\\begin{array}{r|rrrr} 1 & 19 & -2 & -4 & -1 \\\\ & & 19 & 17 & 13 \\\\ \\hline & 19 & 17 & 13 & 12 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 19 & -2 & -4 & -1 \\\\ & & -19 & 21 & -17 \\\\ \\hline & 19 & -21 & 17 & -18 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{19} & 19 & -2 & -4 & -1 \\\\ & & 1 & -\\dfrac{1}{19} & -\\dfrac{77}{361} \\\\ \\hline & 19 & -1 & -\\dfrac{77}{19} & -\\dfrac{438}{361} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{19} & 19 & -2 & -4 & -1 \\\\ & & -1 & \\dfrac{3}{19} & \\dfrac{73}{361} \\\\ \\hline & 19 & -3 & -\\dfrac{73}{19} & -\\dfrac{288}{361} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  },
  {
    "id": "t198-k5-p06",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 17x^3 + 3x^2 + 2x + 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 17x^3 + 3x^2 + 2x + 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{17}$ and $-\\dfrac{1}{17}$.",
      "$\\begin{array}{r|rrrr} 1 & 17 & 3 & 2 & 1 \\\\ & & 17 & 20 & 22 \\\\ \\hline & 17 & 20 & 22 & 23 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 17 & 3 & 2 & 1 \\\\ & & -17 & 14 & -16 \\\\ \\hline & 17 & -14 & 16 & -15 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{17} & 17 & 3 & 2 & 1 \\\\ & & 1 & \\dfrac{4}{17} & \\dfrac{38}{289} \\\\ \\hline & 17 & 4 & \\dfrac{38}{17} & \\dfrac{327}{289} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{17} & 17 & 3 & 2 & 1 \\\\ & & -1 & -\\dfrac{2}{17} & -\\dfrac{32}{289} \\\\ \\hline & 17 & 2 & \\dfrac{32}{17} & \\dfrac{257}{289} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  },
  {
    "id": "t198-k5-p07",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 2x^3 - 13x^2 - 9x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 2x^3 - 13x^2 - 9x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{2}$ and $-\\dfrac{1}{2}$.",
      "$\\begin{array}{r|rrrr} 1 & 2 & -13 & -9 & -1 \\\\ & & 2 & -11 & -20 \\\\ \\hline & 2 & -11 & -20 & -21 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 2 & -13 & -9 & -1 \\\\ & & -2 & 15 & -6 \\\\ \\hline & 2 & -15 & 6 & -7 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 2 & -13 & -9 & -1 \\\\ & & 1 & -6 & -\\dfrac{15}{2} \\\\ \\hline & 2 & -12 & -15 & -\\dfrac{17}{2} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 2 & -13 & -9 & -1 \\\\ & & -1 & 7 & 1 \\\\ \\hline & 2 & -14 & -2 & 0 \\end{array}$",
      "The value $f\\left(-\\dfrac{1}{2}\\right)$ is $0$, so $-\\dfrac{1}{2}$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p08",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 2x^3 + 5x^2 - 5x + 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 2x^3 + 5x^2 - 5x + 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{2}$ and $-\\dfrac{1}{2}$.",
      "$\\begin{array}{r|rrrr} 1 & 2 & 5 & -5 & 1 \\\\ & & 2 & 7 & 2 \\\\ \\hline & 2 & 7 & 2 & 3 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 2 & 5 & -5 & 1 \\\\ & & -2 & -3 & 8 \\\\ \\hline & 2 & 3 & -8 & 9 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{2} & 2 & 5 & -5 & 1 \\\\ & & 1 & 3 & -1 \\\\ \\hline & 2 & 6 & -2 & 0 \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{2} & 2 & 5 & -5 & 1 \\\\ & & -1 & -2 & \\dfrac{7}{2} \\\\ \\hline & 2 & 4 & -7 & \\dfrac{9}{2} \\end{array}$",
      "The value $f\\left(\\dfrac{1}{2}\\right)$ is $0$, so $\\dfrac{1}{2}$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p09",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 19x^3 + 12x^2 + 5x + 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 19x^3 + 12x^2 + 5x + 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{19}$ and $-\\dfrac{1}{19}$.",
      "$\\begin{array}{r|rrrr} 1 & 19 & 12 & 5 & 1 \\\\ & & 19 & 31 & 36 \\\\ \\hline & 19 & 31 & 36 & 37 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 19 & 12 & 5 & 1 \\\\ & & -19 & 7 & -12 \\\\ \\hline & 19 & -7 & 12 & -11 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{19} & 19 & 12 & 5 & 1 \\\\ & & 1 & \\dfrac{13}{19} & \\dfrac{108}{361} \\\\ \\hline & 19 & 13 & \\dfrac{108}{19} & \\dfrac{469}{361} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{19} & 19 & 12 & 5 & 1 \\\\ & & -1 & -\\dfrac{11}{19} & -\\dfrac{84}{361} \\\\ \\hline & 19 & 11 & \\dfrac{84}{19} & \\dfrac{277}{361} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  },
  {
    "id": "t198-k5-p10",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 3x^3 + 8x^2 + 4x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 3x^3 + 8x^2 + 4x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{3}$ and $-\\dfrac{1}{3}$.",
      "$\\begin{array}{r|rrrr} 1 & 3 & 8 & 4 & -1 \\\\ & & 3 & 11 & 15 \\\\ \\hline & 3 & 11 & 15 & 14 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 3 & 8 & 4 & -1 \\\\ & & -3 & -5 & 1 \\\\ \\hline & 3 & 5 & -1 & 0 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 3 & 8 & 4 & -1 \\\\ & & 1 & 3 & \\dfrac{7}{3} \\\\ \\hline & 3 & 9 & 7 & \\dfrac{4}{3} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 3 & 8 & 4 & -1 \\\\ & & -1 & -\\dfrac{7}{3} & -\\dfrac{5}{9} \\\\ \\hline & 3 & 7 & \\dfrac{5}{3} & -\\dfrac{14}{9} \\end{array}$",
      "The value $f(-1)$ is $0$, so $-1$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p11",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 5x^3 - 5x^2 - 11x + 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 5x^3 - 5x^2 - 11x + 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{5}$ and $-\\dfrac{1}{5}$.",
      "$\\begin{array}{r|rrrr} 1 & 5 & -5 & -11 & 1 \\\\ & & 5 & 0 & -11 \\\\ \\hline & 5 & 0 & -11 & -10 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 5 & -5 & -11 & 1 \\\\ & & -5 & 10 & 1 \\\\ \\hline & 5 & -10 & -1 & 2 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{5} & 5 & -5 & -11 & 1 \\\\ & & 1 & -\\dfrac{4}{5} & -\\dfrac{59}{25} \\\\ \\hline & 5 & -4 & -\\dfrac{59}{5} & -\\dfrac{34}{25} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{5} & 5 & -5 & -11 & 1 \\\\ & & -1 & \\dfrac{6}{5} & \\dfrac{49}{25} \\\\ \\hline & 5 & -6 & -\\dfrac{49}{5} & \\dfrac{74}{25} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  },
  {
    "id": "t198-k5-p12",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 11x^3 + 18x^2 + 8x + 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 11x^3 + 18x^2 + 8x + 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{11}$ and $-\\dfrac{1}{11}$.",
      "$\\begin{array}{r|rrrr} 1 & 11 & 18 & 8 & 1 \\\\ & & 11 & 29 & 37 \\\\ \\hline & 11 & 29 & 37 & 38 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 11 & 18 & 8 & 1 \\\\ & & -11 & -7 & -1 \\\\ \\hline & 11 & 7 & 1 & 0 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{11} & 11 & 18 & 8 & 1 \\\\ & & 1 & \\dfrac{19}{11} & \\dfrac{107}{121} \\\\ \\hline & 11 & 19 & \\dfrac{107}{11} & \\dfrac{228}{121} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{11} & 11 & 18 & 8 & 1 \\\\ & & -1 & -\\dfrac{17}{11} & -\\dfrac{71}{121} \\\\ \\hline & 11 & 17 & \\dfrac{71}{11} & \\dfrac{50}{121} \\end{array}$",
      "The value $f(-1)$ is $0$, so $-1$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p13",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 13x^3 - 7x^2 - 5x - 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 13x^3 - 7x^2 - 5x - 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{13}$ and $-\\dfrac{1}{13}$.",
      "$\\begin{array}{r|rrrr} 1 & 13 & -7 & -5 & -1 \\\\ & & 13 & 6 & 1 \\\\ \\hline & 13 & 6 & 1 & 0 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 13 & -7 & -5 & -1 \\\\ & & -13 & 20 & -15 \\\\ \\hline & 13 & -20 & 15 & -16 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{13} & 13 & -7 & -5 & -1 \\\\ & & 1 & -\\dfrac{6}{13} & -\\dfrac{71}{169} \\\\ \\hline & 13 & -6 & -\\dfrac{71}{13} & -\\dfrac{240}{169} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{13} & 13 & -7 & -5 & -1 \\\\ & & -1 & \\dfrac{8}{13} & \\dfrac{57}{169} \\\\ \\hline & 13 & -8 & -\\dfrac{57}{13} & -\\dfrac{112}{169} \\end{array}$",
      "The value $f(1)$ is $0$, so $1$ is a rational root, and the answer is Yes."
    ]
  },
  {
    "id": "t198-k5-p14",
    "topic": "rational-roots",
    "kind": "t198-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 29x^3 + 10x^2 + 6x + 1$ has a rational root.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 29x^3 + 10x^2 + 6x + 1$ has a rational root.",
      "The rational roots of $f(x)$ are among $1$, $-1$, $\\dfrac{1}{29}$ and $-\\dfrac{1}{29}$.",
      "$\\begin{array}{r|rrrr} 1 & 29 & 10 & 6 & 1 \\\\ & & 29 & 39 & 45 \\\\ \\hline & 29 & 39 & 45 & 46 \\end{array}$",
      "$\\begin{array}{r|rrrr} -1 & 29 & 10 & 6 & 1 \\\\ & & -29 & 19 & -25 \\\\ \\hline & 29 & -19 & 25 & -24 \\end{array}$",
      "$\\begin{array}{r|rrrr} \\dfrac{1}{29} & 29 & 10 & 6 & 1 \\\\ & & 1 & \\dfrac{11}{29} & \\dfrac{185}{841} \\\\ \\hline & 29 & 11 & \\dfrac{185}{29} & \\dfrac{1026}{841} \\end{array}$",
      "$\\begin{array}{r|rrrr} -\\dfrac{1}{29} & 29 & 10 & 6 & 1 \\\\ & & -1 & -\\dfrac{9}{29} & -\\dfrac{165}{841} \\\\ \\hline & 29 & 9 & \\dfrac{165}{29} & \\dfrac{676}{841} \\end{array}$",
      "None of the four values is $0$, so no number on the list of line 2 is a root, and the answer is No."
    ]
  }
]
