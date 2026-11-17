export default [
  {
    "id": "t197-k1-p01",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 + 6x^3 - 108x^2 - 472x - 480$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x+2)^2*(x-10)*(x+12)",
    "solution": [
      "Factor $f(x) = x^4 + 6x^3 - 108x^2 - 472x - 480$ completely.",
      "Every nonzero integer root of $f(x)$ divides $-480$.",
      "$\\begin{array}{r|rrrrr} -2 & 1 & 6 & -108 & -472 & -480 \\\\ & & -2 & -8 & 232 & 480 \\\\ \\hline & 1 & 4 & -116 & -240 & 0 \\end{array}$",
      "$f(x) = (x + 2)(x^3 + 4x^2 - 116x - 240)$",
      "$\\begin{array}{r|rrrr} -2 & 1 & 4 & -116 & -240 \\\\ & & -2 & -4 & 240 \\\\ \\hline & 1 & 2 & -120 & 0 \\end{array}$",
      "$x^3 + 4x^2 - 116x - 240 = (x + 2)(x^2 + 2x - 120)$",
      "$x^2 + 2x - 120 = (x - 10)(x + 12)$",
      "$f(x) = (x + 2)(x + 2)(x - 10)(x + 12)$",
      "$f(x) = (x + 2)^2(x - 10)(x + 12)$"
    ]
  },
  {
    "id": "t197-k1-p02",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $f(x) = x^3 + 5x^2 - 102x - 216$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x+2)*(x-9)*(x+12)",
    "solution": [
      "Factor $f(x) = x^3 + 5x^2 - 102x - 216$ completely.",
      "Every nonzero integer root of $f(x)$ divides $-216$.",
      "$\\begin{array}{r|rrrr} -2 & 1 & 5 & -102 & -216 \\\\ & & -2 & -6 & 216 \\\\ \\hline & 1 & 3 & -108 & 0 \\end{array}$",
      "$f(x) = (x + 2)(x^2 + 3x - 108)$",
      "$x^2 + 3x - 108 = (x - 9)(x + 12)$",
      "$f(x) = (x + 2)(x - 9)(x + 12)$"
    ]
  },
  {
    "id": "t197-k1-p03",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 + 20x^3 + 81x^2 + 90x$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "x*(x+2)*(x+3)*(x+15)",
    "solution": [
      "Factor $f(x) = x^4 + 20x^3 + 81x^2 + 90x$ completely.",
      "$f(x) = x(x^3 + 20x^2 + 81x + 90)$",
      "Every nonzero integer root of $x^3 + 20x^2 + 81x + 90$ divides $90$.",
      "$\\begin{array}{r|rrrr} -2 & 1 & 20 & 81 & 90 \\\\ & & -2 & -36 & -90 \\\\ \\hline & 1 & 18 & 45 & 0 \\end{array}$",
      "$x^3 + 20x^2 + 81x + 90 = (x + 2)(x^2 + 18x + 45)$",
      "$x^2 + 18x + 45 = (x + 3)(x + 15)$",
      "$f(x) = x(x + 2)(x + 3)(x + 15)$"
    ]
  },
  {
    "id": "t197-k1-p04",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 - 12x^3 - 55x^2 + 150x$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "x*(x-2)*(x+5)*(x-15)",
    "solution": [
      "Factor $f(x) = x^4 - 12x^3 - 55x^2 + 150x$ completely.",
      "$f(x) = x(x^3 - 12x^2 - 55x + 150)$",
      "Every nonzero integer root of $x^3 - 12x^2 - 55x + 150$ divides $150$.",
      "$\\begin{array}{r|rrrr} 2 & 1 & -12 & -55 & 150 \\\\ & & 2 & -20 & -150 \\\\ \\hline & 1 & -10 & -75 & 0 \\end{array}$",
      "$x^3 - 12x^2 - 55x + 150 = (x - 2)(x^2 - 10x - 75)$",
      "$x^2 - 10x - 75 = (x + 5)(x - 15)$",
      "$f(x) = x(x - 2)(x + 5)(x - 15)$"
    ]
  },
  {
    "id": "t197-k1-p05",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 + 23x^3 + 153x^2 + 405x + 378$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x+3)^3*(x+14)",
    "solution": [
      "Factor $f(x) = x^4 + 23x^3 + 153x^2 + 405x + 378$ completely.",
      "Every nonzero integer root of $f(x)$ divides $378$.",
      "$\\begin{array}{r|rrrrr} -3 & 1 & 23 & 153 & 405 & 378 \\\\ & & -3 & -60 & -279 & -378 \\\\ \\hline & 1 & 20 & 93 & 126 & 0 \\end{array}$",
      "$f(x) = (x + 3)(x^3 + 20x^2 + 93x + 126)$",
      "$\\begin{array}{r|rrrr} -3 & 1 & 20 & 93 & 126 \\\\ & & -3 & -51 & -126 \\\\ \\hline & 1 & 17 & 42 & 0 \\end{array}$",
      "$x^3 + 20x^2 + 93x + 126 = (x + 3)(x^2 + 17x + 42)$",
      "$x^2 + 17x + 42 = (x + 3)(x + 14)$",
      "$f(x) = (x + 3)(x + 3)(x + 3)(x + 14)$",
      "$f(x) = (x + 3)^3(x + 14)$"
    ]
  },
  {
    "id": "t197-k1-p06",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $f(x) = x^3 - 10x^2 - 88x + 448$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x-4)*(x+8)*(x-14)",
    "solution": [
      "Factor $f(x) = x^3 - 10x^2 - 88x + 448$ completely.",
      "Every nonzero integer root of $f(x)$ divides $448$.",
      "$\\begin{array}{r|rrrr} 4 & 1 & -10 & -88 & 448 \\\\ & & 4 & -24 & -448 \\\\ \\hline & 1 & -6 & -112 & 0 \\end{array}$",
      "$f(x) = (x - 4)(x^2 - 6x - 112)$",
      "$x^2 - 6x - 112 = (x + 8)(x - 14)$",
      "$f(x) = (x - 4)(x + 8)(x - 14)$"
    ]
  },
  {
    "id": "t197-k1-p07",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 - 23x^3 + 146x^2 - 280x$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "x*(x-4)*(x-5)*(x-14)",
    "solution": [
      "Factor $f(x) = x^4 - 23x^3 + 146x^2 - 280x$ completely.",
      "$f(x) = x(x^3 - 23x^2 + 146x - 280)$",
      "Every nonzero integer root of $x^3 - 23x^2 + 146x - 280$ divides $-280$.",
      "$\\begin{array}{r|rrrr} 4 & 1 & -23 & 146 & -280 \\\\ & & 4 & -76 & 280 \\\\ \\hline & 1 & -19 & 70 & 0 \\end{array}$",
      "$x^3 - 23x^2 + 146x - 280 = (x - 4)(x^2 - 19x + 70)$",
      "$x^2 - 19x + 70 = (x - 5)(x - 14)$",
      "$f(x) = x(x - 4)(x - 5)(x - 14)$"
    ]
  },
  {
    "id": "t197-k1-p08",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $f(x) = x^3 + 9x^2 - 76x - 480$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x+5)*(x-8)*(x+12)",
    "solution": [
      "Factor $f(x) = x^3 + 9x^2 - 76x - 480$ completely.",
      "Every nonzero integer root of $f(x)$ divides $-480$.",
      "$\\begin{array}{r|rrrr} -5 & 1 & 9 & -76 & -480 \\\\ & & -5 & -20 & 480 \\\\ \\hline & 1 & 4 & -96 & 0 \\end{array}$",
      "$f(x) = (x + 5)(x^2 + 4x - 96)$",
      "$x^2 + 4x - 96 = (x - 8)(x + 12)$",
      "$f(x) = (x + 5)(x - 8)(x + 12)$"
    ]
  },
  {
    "id": "t197-k1-p09",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 + 4x^3 - 135x^2 + 450x$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "x*(x-5)*(x-6)*(x+15)",
    "solution": [
      "Factor $f(x) = x^4 + 4x^3 - 135x^2 + 450x$ completely.",
      "$f(x) = x(x^3 + 4x^2 - 135x + 450)$",
      "Every nonzero integer root of $x^3 + 4x^2 - 135x + 450$ divides $450$.",
      "$\\begin{array}{r|rrrr} 5 & 1 & 4 & -135 & 450 \\\\ & & 5 & 45 & -450 \\\\ \\hline & 1 & 9 & -90 & 0 \\end{array}$",
      "$x^3 + 4x^2 - 135x + 450 = (x - 5)(x^2 + 9x - 90)$",
      "$x^2 + 9x - 90 = (x - 6)(x + 15)$",
      "$f(x) = x(x - 5)(x - 6)(x + 15)$"
    ]
  },
  {
    "id": "t197-k1-p10",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $f(x) = x^3 - 16x^2 + 11x + 364$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x+4)*(x-7)*(x-13)",
    "solution": [
      "Factor $f(x) = x^3 - 16x^2 + 11x + 364$ completely.",
      "Every nonzero integer root of $f(x)$ divides $364$.",
      "$\\begin{array}{r|rrrr} -4 & 1 & -16 & 11 & 364 \\\\ & & -4 & 80 & -364 \\\\ \\hline & 1 & -20 & 91 & 0 \\end{array}$",
      "$f(x) = (x + 4)(x^2 - 20x + 91)$",
      "$x^2 - 20x + 91 = (x - 7)(x - 13)$",
      "$f(x) = (x + 4)(x - 7)(x - 13)$"
    ]
  },
  {
    "id": "t197-k1-p11",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 + 2x^3 - 123x^2 + 576x - 756$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x-3)^2*(x-6)*(x+14)",
    "solution": [
      "Factor $f(x) = x^4 + 2x^3 - 123x^2 + 576x - 756$ completely.",
      "Every nonzero integer root of $f(x)$ divides $-756$.",
      "$\\begin{array}{r|rrrrr} 3 & 1 & 2 & -123 & 576 & -756 \\\\ & & 3 & 15 & -324 & 756 \\\\ \\hline & 1 & 5 & -108 & 252 & 0 \\end{array}$",
      "$f(x) = (x - 3)(x^3 + 5x^2 - 108x + 252)$",
      "$\\begin{array}{r|rrrr} 3 & 1 & 5 & -108 & 252 \\\\ & & 3 & 24 & -252 \\\\ \\hline & 1 & 8 & -84 & 0 \\end{array}$",
      "$x^3 + 5x^2 - 108x + 252 = (x - 3)(x^2 + 8x - 84)$",
      "$x^2 + 8x - 84 = (x - 6)(x + 14)$",
      "$f(x) = (x - 3)(x - 3)(x - 6)(x + 14)$",
      "$f(x) = (x - 3)^2(x - 6)(x + 14)$"
    ]
  },
  {
    "id": "t197-k1-p12",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 + 20x^3 + 121x^2 + 210x$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "x*(x+3)*(x+7)*(x+10)",
    "solution": [
      "Factor $f(x) = x^4 + 20x^3 + 121x^2 + 210x$ completely.",
      "$f(x) = x(x^3 + 20x^2 + 121x + 210)$",
      "Every nonzero integer root of $x^3 + 20x^2 + 121x + 210$ divides $210$.",
      "$\\begin{array}{r|rrrr} -3 & 1 & 20 & 121 & 210 \\\\ & & -3 & -51 & -210 \\\\ \\hline & 1 & 17 & 70 & 0 \\end{array}$",
      "$x^3 + 20x^2 + 121x + 210 = (x + 3)(x^2 + 17x + 70)$",
      "$x^2 + 17x + 70 = (x + 7)(x + 10)$",
      "$f(x) = x(x + 3)(x + 7)(x + 10)$"
    ]
  },
  {
    "id": "t197-k1-p13",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $f(x) = x^4 - 10x^3 - 63x^2 + 340x - 364$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x-2)^2*(x+7)*(x-13)",
    "solution": [
      "Factor $f(x) = x^4 - 10x^3 - 63x^2 + 340x - 364$ completely.",
      "Every nonzero integer root of $f(x)$ divides $-364$.",
      "$\\begin{array}{r|rrrrr} 2 & 1 & -10 & -63 & 340 & -364 \\\\ & & 2 & -16 & -158 & 364 \\\\ \\hline & 1 & -8 & -79 & 182 & 0 \\end{array}$",
      "$f(x) = (x - 2)(x^3 - 8x^2 - 79x + 182)$",
      "$\\begin{array}{r|rrrr} 2 & 1 & -8 & -79 & 182 \\\\ & & 2 & -12 & -182 \\\\ \\hline & 1 & -6 & -91 & 0 \\end{array}$",
      "$x^3 - 8x^2 - 79x + 182 = (x - 2)(x^2 - 6x - 91)$",
      "$x^2 - 6x - 91 = (x + 7)(x - 13)$",
      "$f(x) = (x - 2)(x - 2)(x + 7)(x - 13)$",
      "$f(x) = (x - 2)^2(x + 7)(x - 13)$"
    ]
  },
  {
    "id": "t197-k1-p14",
    "topic": "integer-roots",
    "kind": "t197-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $f(x) = x^3 + 30x^2 + 263x + 546$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x+3)*(x+13)*(x+14)",
    "solution": [
      "Factor $f(x) = x^3 + 30x^2 + 263x + 546$ completely.",
      "Every nonzero integer root of $f(x)$ divides $546$.",
      "$\\begin{array}{r|rrrr} -3 & 1 & 30 & 263 & 546 \\\\ & & -3 & -81 & -546 \\\\ \\hline & 1 & 27 & 182 & 0 \\end{array}$",
      "$f(x) = (x + 3)(x^2 + 27x + 182)$",
      "$x^2 + 27x + 182 = (x + 13)(x + 14)$",
      "$f(x) = (x + 3)(x + 13)(x + 14)$"
    ]
  },
  {
    "id": "t197-k2-p01",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -288)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-6.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it touches the x-axis at A and B, and meets the y-axis at C (0, −288)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -2*(x+2)^2*(x-6)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -288)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-2, 0)$ and B $(6, 0)$.",
      "The roots are $-2$ and $6$.",
      "The graph touches the $x$-axis at A and B, so the roots $-2$ and $6$ have multiplicity $2$.",
      "$y = a(x + 2)^2(x - 6)^2$",
      "$-288 = a(0 + 2)^2(0 - 6)^2$",
      "$-288 = 144a$",
      "$a = -2$",
      "$y = -2(x + 2)^2(x - 6)^2$"
    ]
  },
  {
    "id": "t197-k2-p02",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 256)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-8.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at A, touches it at B, and meets the y-axis at C (0, 256)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -2*(x-2)*(x-8)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 256)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(2, 0)$ and B $(8, 0)$.",
      "The roots are $2$ and $8$.",
      "The graph crosses the $x$-axis at A and touches it at B, so the root $2$ has multiplicity $1$ and the root $8$ has multiplicity $2$.",
      "$y = a(x - 2)(x - 8)^2$",
      "$256 = a(0 - 2)(0 - 8)^2$",
      "$256 = -128a$",
      "$a = -2$",
      "$y = -2(x - 2)(x - 8)^2$"
    ]
  },
  {
    "id": "t197-k2-p03",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -32)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-13.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it touches the x-axis at A and B, and meets the y-axis at C (0, −32)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -2*(x+4)^2*(x-1)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -32)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-4, 0)$ and B $(1, 0)$.",
      "The roots are $-4$ and $1$.",
      "The graph touches the $x$-axis at A and B, so the roots $-4$ and $1$ have multiplicity $2$.",
      "$y = a(x + 4)^2(x - 1)^2$",
      "$-32 = a(0 + 4)^2(0 - 1)^2$",
      "$-32 = 16a$",
      "$a = -2$",
      "$y = -2(x + 4)^2(x - 1)^2$"
    ]
  },
  {
    "id": "t197-k2-p04",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -144)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-12.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at A, touches it at B, and meets the y-axis at C (0, −144)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -2*(x+8)*(x+3)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -144)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-8, 0)$ and B $(-3, 0)$.",
      "The roots are $-8$ and $-3$.",
      "The graph crosses the $x$-axis at A and touches it at B, so the root $-8$ has multiplicity $1$ and the root $-3$ has multiplicity $2$.",
      "$y = a(x + 8)(x + 3)^2$",
      "$-144 = a(0 + 8)(0 + 3)^2$",
      "$-144 = 72a$",
      "$a = -2$",
      "$y = -2(x + 8)(x + 3)^2$"
    ]
  },
  {
    "id": "t197-k2-p05",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 54)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-5.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at A, touches it at B, and meets the y-axis at C (0, 54)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*(x+3)*(x-3)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 54)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-3, 0)$ and B $(3, 0)$.",
      "The roots are $-3$ and $3$.",
      "The graph crosses the $x$-axis at A and touches it at B, so the root $-3$ has multiplicity $1$ and the root $3$ has multiplicity $2$.",
      "$y = a(x + 3)(x - 3)^2$",
      "$54 = a(0 + 3)(0 - 3)^2$",
      "$54 = 27a$",
      "$a = 2$",
      "$y = 2(x + 3)(x - 3)^2$"
    ]
  },
  {
    "id": "t197-k2-p06",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, -576)$. Read A, B and C from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-18.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it crosses the x-axis at B and C, touches it at A, and meets the y-axis at D (0, −576)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -3*(x+3)*(x+1)*(x+8)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, -576)$. Read A, B and C from the numbers on the $x$-axis.",
      "The points are A $(-8, 0)$, B $(-3, 0)$ and C $(-1, 0)$.",
      "The roots are $-8$, $-3$ and $-1$.",
      "The graph crosses the $x$-axis at B and C and touches it at A, so the roots $-3$ and $-1$ have multiplicity $1$ and the root $-8$ has multiplicity $2$.",
      "$y = a(x + 3)(x + 1)(x + 8)^2$",
      "$-576 = a(0 + 3)(0 + 1)(0 + 8)^2$",
      "$-576 = 192a$",
      "$a = -3$",
      "$y = -3(x + 3)(x + 1)(x + 8)^2$"
    ]
  },
  {
    "id": "t197-k2-p07",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -24)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-9.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at A, touches it at B, and meets the y-axis at C (0, −24)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -3*(x+8)*(x+1)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -24)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-8, 0)$ and B $(-1, 0)$.",
      "The roots are $-8$ and $-1$.",
      "The graph crosses the $x$-axis at A and touches it at B, so the root $-8$ has multiplicity $1$ and the root $-1$ has multiplicity $2$.",
      "$y = a(x + 8)(x + 1)^2$",
      "$-24 = a(0 + 8)(0 + 1)^2$",
      "$-24 = 8a$",
      "$a = -3$",
      "$y = -3(x + 8)(x + 1)^2$"
    ]
  },
  {
    "id": "t197-k2-p08",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, 192)$. Read A, B and C from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-17.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it crosses the x-axis at A and B, touches it at C, and meets the y-axis at D (0, 192)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*(x+6)*(x+4)*(x-2)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, 192)$. Read A, B and C from the numbers on the $x$-axis.",
      "The points are A $(-6, 0)$, B $(-4, 0)$ and C $(2, 0)$.",
      "The roots are $-6$, $-4$ and $2$.",
      "The graph crosses the $x$-axis at A and B and touches it at C, so the roots $-6$ and $-4$ have multiplicity $1$ and the root $2$ has multiplicity $2$.",
      "$y = a(x + 6)(x + 4)(x - 2)^2$",
      "$192 = a(0 + 6)(0 + 4)(0 - 2)^2$",
      "$192 = 96a$",
      "$a = 2$",
      "$y = 2(x + 6)(x + 4)(x - 2)^2$"
    ]
  },
  {
    "id": "t197-k2-p09",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 72)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-14.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it touches the x-axis at A and B, and meets the y-axis at C (0, 72)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*(x+2)^2*(x-3)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 72)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-2, 0)$ and B $(3, 0)$.",
      "The roots are $-2$ and $3$.",
      "The graph touches the $x$-axis at A and B, so the roots $-2$ and $3$ have multiplicity $2$.",
      "$y = a(x + 2)^2(x - 3)^2$",
      "$72 = a(0 + 2)^2(0 - 3)^2$",
      "$72 = 36a$",
      "$a = 2$",
      "$y = 2(x + 2)^2(x - 3)^2$"
    ]
  },
  {
    "id": "t197-k2-p10",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 8)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-15.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at A, touches it at B, and meets the y-axis at C (0, 8)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*(x+1)*(x-2)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 8)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-1, 0)$ and B $(2, 0)$.",
      "The roots are $-1$ and $2$.",
      "The graph crosses the $x$-axis at A and touches it at B, so the root $-1$ has multiplicity $1$ and the root $2$ has multiplicity $2$.",
      "$y = a(x + 1)(x - 2)^2$",
      "$8 = a(0 + 1)(0 - 2)^2$",
      "$8 = 4a$",
      "$a = 2$",
      "$y = 2(x + 1)(x - 2)^2$"
    ]
  },
  {
    "id": "t197-k2-p11",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 14)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-7.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at B, touches it at A, and meets the y-axis at C (0, 14)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -2*(x-7)*(x-1)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 14)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(1, 0)$ and B $(7, 0)$.",
      "The roots are $1$ and $7$.",
      "The graph crosses the $x$-axis at B and touches it at A, so the root $7$ has multiplicity $1$ and the root $1$ has multiplicity $2$.",
      "$y = a(x - 7)(x - 1)^2$",
      "$14 = a(0 - 7)(0 - 1)^2$",
      "$14 = -7a$",
      "$a = -2$",
      "$y = -2(x - 7)(x - 1)^2$"
    ]
  },
  {
    "id": "t197-k2-p12",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -100)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-10.svg",
      "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at A, touches it at B, and meets the y-axis at C (0, −100)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -2*(x+2)*(x-5)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -100)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-2, 0)$ and B $(5, 0)$.",
      "The roots are $-2$ and $5$.",
      "The graph crosses the $x$-axis at A and touches it at B, so the root $-2$ has multiplicity $1$ and the root $5$ has multiplicity $2$.",
      "$y = a(x + 2)(x - 5)^2$",
      "$-100 = a(0 + 2)(0 - 5)^2$",
      "$-100 = 50a$",
      "$a = -2$",
      "$y = -2(x + 2)(x - 5)^2$"
    ]
  },
  {
    "id": "t197-k2-p13",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 288)$. Read A and B from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-11.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it touches the x-axis at A and B, and meets the y-axis at C (0, 288)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*(x+3)^2*(x-4)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 288)$. Read A and B from the numbers on the $x$-axis.",
      "The points are A $(-3, 0)$ and B $(4, 0)$.",
      "The roots are $-3$ and $4$.",
      "The graph touches the $x$-axis at A and B, so the roots $-3$ and $4$ have multiplicity $2$.",
      "$y = a(x + 3)^2(x - 4)^2$",
      "$288 = a(0 + 3)^2(0 - 4)^2$",
      "$288 = 144a$",
      "$a = 2$",
      "$y = 2(x + 3)^2(x - 4)^2$"
    ]
  },
  {
    "id": "t197-k2-p14",
    "topic": "integer-roots",
    "kind": "t197-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, -441)$. Read A, B and C from the numbers on the $x$-axis.",
    "figure": {
      "file": "integer-roots-16.svg",
      "alt": "The graph of a polynomial of degree 4, with numbered axes; it crosses the x-axis at A and B, touches it at C, and meets the y-axis at D (0, −441)."
    },
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = -3*(x-1)*(x-3)*(x-7)^2",
    "solution": [
      "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, -441)$. Read A, B and C from the numbers on the $x$-axis.",
      "The points are A $(1, 0)$, B $(3, 0)$ and C $(7, 0)$.",
      "The roots are $1$, $3$ and $7$.",
      "The graph crosses the $x$-axis at A and B and touches it at C, so the roots $1$ and $3$ have multiplicity $1$ and the root $7$ has multiplicity $2$.",
      "$y = a(x - 1)(x - 3)(x - 7)^2$",
      "$-441 = a(0 - 1)(0 - 3)(0 - 7)^2$",
      "$-441 = 147a$",
      "$a = -3$",
      "$y = -3(x - 1)(x - 3)(x - 7)^2$"
    ]
  },
  {
    "id": "t197-k3-p01",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $x^3 + 96x \\le -19x^2 - 144$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -12 or -4 <= x <= -3",
    "solution": [
      "Solve $x^3 + 96x \\le -19x^2 - 144$.",
      "$x^3 + 19x^2 + 96x + 144 \\le 0$",
      "Every nonzero integer root of $x^3 + 19x^2 + 96x + 144$ divides $144$.",
      "$\\begin{array}{r|rrrr} -3 & 1 & 19 & 96 & 144 \\\\ & & -3 & -48 & -144 \\\\ \\hline & 1 & 16 & 48 & 0 \\end{array}$",
      "$x^3 + 19x^2 + 96x + 144 = (x + 3)(x^2 + 16x + 48)$",
      "$x^2 + 16x + 48 = (x + 4)(x + 12)$",
      "$(x + 3)(x + 4)(x + 12) \\le 0$",
      "On $x < -12$, $-12 < x < -4$, $-4 < x < -3$ and $x > -3$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-12$, $-4$ and $-3$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -12$ or $-4 \\le x \\le -3$."
    ]
  },
  {
    "id": "t197-k3-p02",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $x^3 + 13x^2 + 40x + 36 \\le 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -9 or x = -2",
    "solution": [
      "Solve $x^3 + 13x^2 + 40x + 36 \\le 0$.",
      "Every nonzero integer root of $x^3 + 13x^2 + 40x + 36$ divides $36$.",
      "$\\begin{array}{r|rrrr} -2 & 1 & 13 & 40 & 36 \\\\ & & -2 & -22 & -36 \\\\ \\hline & 1 & 11 & 18 & 0 \\end{array}$",
      "$x^3 + 13x^2 + 40x + 36 = (x + 2)(x^2 + 11x + 18)$",
      "$x^2 + 11x + 18 = (x + 2)(x + 9)$",
      "$(x + 2)(x + 2)(x + 9) \\le 0$",
      "$(x + 2)^2(x + 9) \\le 0$",
      "The square $(x + 2)^2$ is at least $0$, and is $0$ only at $x = -2$.",
      "For $x \\ne -2$ the product has the sign of $x + 9$: negative for $x < -9$ and positive for $x > -9$.",
      "The product is $0$ at $-9$ and $-2$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -9$ or $x = -2$."
    ]
  },
  {
    "id": "t197-k3-p03",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $x^3 + 22x^2 + 128x + 224 \\le 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -14 or x = -4",
    "solution": [
      "Solve $x^3 + 22x^2 + 128x + 224 \\le 0$.",
      "Every nonzero integer root of $x^3 + 22x^2 + 128x + 224$ divides $224$.",
      "$\\begin{array}{r|rrrr} -4 & 1 & 22 & 128 & 224 \\\\ & & -4 & -72 & -224 \\\\ \\hline & 1 & 18 & 56 & 0 \\end{array}$",
      "$x^3 + 22x^2 + 128x + 224 = (x + 4)(x^2 + 18x + 56)$",
      "$x^2 + 18x + 56 = (x + 4)(x + 14)$",
      "$(x + 4)(x + 4)(x + 14) \\le 0$",
      "$(x + 4)^2(x + 14) \\le 0$",
      "The square $(x + 4)^2$ is at least $0$, and is $0$ only at $x = -4$.",
      "For $x \\ne -4$ the product has the sign of $x + 14$: negative for $x < -14$ and positive for $x > -14$.",
      "The product is $0$ at $-14$ and $-4$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -14$ or $x = -4$."
    ]
  },
  {
    "id": "t197-k3-p04",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $x^3 - 81x \\ge -2x^2 - 198$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-11 <= x <= 3 or x >= 6",
    "solution": [
      "Solve $x^3 - 81x \\ge -2x^2 - 198$.",
      "$x^3 + 2x^2 - 81x + 198 \\ge 0$",
      "Every nonzero integer root of $x^3 + 2x^2 - 81x + 198$ divides $198$.",
      "$\\begin{array}{r|rrrr} 3 & 1 & 2 & -81 & 198 \\\\ & & 3 & 15 & -198 \\\\ \\hline & 1 & 5 & -66 & 0 \\end{array}$",
      "$x^3 + 2x^2 - 81x + 198 = (x - 3)(x^2 + 5x - 66)$",
      "$x^2 + 5x - 66 = (x - 6)(x + 11)$",
      "$(x - 3)(x - 6)(x + 11) \\ge 0$",
      "On $x < -11$, $-11 < x < 3$, $3 < x < 6$ and $x > 6$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-11$, $3$ and $6$, so these numbers are taken in.",
      "The solutions are the numbers with $-11 \\le x \\le 3$ or $x \\ge 6$."
    ]
  },
  {
    "id": "t197-k3-p05",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Solve $x^3 + 11x^2 - 33x + 126 \\ge 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x >= -14",
    "solution": [
      "Solve $x^3 + 11x^2 - 33x + 126 \\ge 0$.",
      "Every nonzero integer root of $x^3 + 11x^2 - 33x + 126$ divides $126$.",
      "$\\begin{array}{r|rrrr} -14 & 1 & 11 & -33 & 126 \\\\ & & -14 & 42 & -126 \\\\ \\hline & 1 & -3 & 9 & 0 \\end{array}$",
      "$x^3 + 11x^2 - 33x + 126 = (x + 14)(x^2 - 3x + 9)$",
      "The discriminant of $x^2 - 3x + 9$ is $(-3)^2 - 4 \\cdot 9 = -27$.",
      "The quadratic $x^2 - 3x + 9$ is positive for every real number $x$.",
      "$(x + 14)(x^2 - 3x + 9) \\ge 0$",
      "$x + 14 \\ge 0$",
      "The solutions are the numbers with $x \\ge -14$."
    ]
  },
  {
    "id": "t197-k3-p06",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Solve $x^3 + 4x^2 - 115x + 350 \\le 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -14 or x = 5",
    "solution": [
      "Solve $x^3 + 4x^2 - 115x + 350 \\le 0$.",
      "Every nonzero integer root of $x^3 + 4x^2 - 115x + 350$ divides $350$.",
      "$\\begin{array}{r|rrrr} 5 & 1 & 4 & -115 & 350 \\\\ & & 5 & 45 & -350 \\\\ \\hline & 1 & 9 & -70 & 0 \\end{array}$",
      "$x^3 + 4x^2 - 115x + 350 = (x - 5)(x^2 + 9x - 70)$",
      "$x^2 + 9x - 70 = (x - 5)(x + 14)$",
      "$(x - 5)(x - 5)(x + 14) \\le 0$",
      "$(x - 5)^2(x + 14) \\le 0$",
      "The square $(x - 5)^2$ is at least $0$, and is $0$ only at $x = 5$.",
      "For $x \\ne 5$ the product has the sign of $x + 14$: negative for $x < -14$ and positive for $x > -14$.",
      "The product is $0$ at $-14$ and $5$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -14$ or $x = 5$."
    ]
  },
  {
    "id": "t197-k3-p07",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Solve $x^3 + 6x^2 + 10x + 208 < 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < -8",
    "solution": [
      "Solve $x^3 + 6x^2 + 10x + 208 < 0$.",
      "Every nonzero integer root of $x^3 + 6x^2 + 10x + 208$ divides $208$.",
      "$\\begin{array}{r|rrrr} -8 & 1 & 6 & 10 & 208 \\\\ & & -8 & 16 & -208 \\\\ \\hline & 1 & -2 & 26 & 0 \\end{array}$",
      "$x^3 + 6x^2 + 10x + 208 = (x + 8)(x^2 - 2x + 26)$",
      "The discriminant of $x^2 - 2x + 26$ is $(-2)^2 - 4 \\cdot 26 = -100$.",
      "The quadratic $x^2 - 2x + 26$ is positive for every real number $x$.",
      "$(x + 8)(x^2 - 2x + 26) < 0$",
      "$x + 8 < 0$",
      "The solutions are the numbers with $x < -8$."
    ]
  },
  {
    "id": "t197-k3-p08",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $x^3 + 20x^2 < -44x + 560$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < -14 or -10 < x < 4",
    "solution": [
      "Solve $x^3 + 20x^2 < -44x + 560$.",
      "$x^3 + 20x^2 + 44x - 560 < 0$",
      "Every nonzero integer root of $x^3 + 20x^2 + 44x - 560$ divides $-560$.",
      "$\\begin{array}{r|rrrr} 4 & 1 & 20 & 44 & -560 \\\\ & & 4 & 96 & 560 \\\\ \\hline & 1 & 24 & 140 & 0 \\end{array}$",
      "$x^3 + 20x^2 + 44x - 560 = (x - 4)(x^2 + 24x + 140)$",
      "$x^2 + 24x + 140 = (x + 10)(x + 14)$",
      "$(x - 4)(x + 10)(x + 14) < 0$",
      "On $x < -14$, $-14 < x < -10$, $-10 < x < 4$ and $x > 4$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-14$, $-10$ and $4$, so these numbers are left out.",
      "The solutions are the numbers with $x < -14$ or $-10 < x < 4$."
    ]
  },
  {
    "id": "t197-k3-p09",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $x^3 + 6x^2 - 109x - 234 \\ge 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-13 <= x <= -2 or x >= 9",
    "solution": [
      "Solve $x^3 + 6x^2 - 109x - 234 \\ge 0$.",
      "Every nonzero integer root of $x^3 + 6x^2 - 109x - 234$ divides $-234$.",
      "$\\begin{array}{r|rrrr} -2 & 1 & 6 & -109 & -234 \\\\ & & -2 & -8 & 234 \\\\ \\hline & 1 & 4 & -117 & 0 \\end{array}$",
      "$x^3 + 6x^2 - 109x - 234 = (x + 2)(x^2 + 4x - 117)$",
      "$x^2 + 4x - 117 = (x - 9)(x + 13)$",
      "$(x + 2)(x - 9)(x + 13) \\ge 0$",
      "On $x < -13$, $-13 < x < -2$, $-2 < x < 9$ and $x > 9$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-13$, $-2$ and $9$, so these numbers are taken in.",
      "The solutions are the numbers with $-13 \\le x \\le -2$ or $x \\ge 9$."
    ]
  },
  {
    "id": "t197-k3-p10",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Solve $x^3 + 25x^2 \\le -176x - 260$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= -13 or -10 <= x <= -2",
    "solution": [
      "Solve $x^3 + 25x^2 \\le -176x - 260$.",
      "$x^3 + 25x^2 + 176x + 260 \\le 0$",
      "Every nonzero integer root of $x^3 + 25x^2 + 176x + 260$ divides $260$.",
      "$\\begin{array}{r|rrrr} -2 & 1 & 25 & 176 & 260 \\\\ & & -2 & -46 & -260 \\\\ \\hline & 1 & 23 & 130 & 0 \\end{array}$",
      "$x^3 + 25x^2 + 176x + 260 = (x + 2)(x^2 + 23x + 130)$",
      "$x^2 + 23x + 130 = (x + 10)(x + 13)$",
      "$(x + 2)(x + 10)(x + 13) \\le 0$",
      "On $x < -13$, $-13 < x < -10$, $-10 < x < -2$ and $x > -2$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-13$, $-10$ and $-2$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le -13$ or $-10 \\le x \\le -2$."
    ]
  },
  {
    "id": "t197-k3-p11",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Solve $x^3 - 15x^2 + 74x - 180 \\ge 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x >= 9",
    "solution": [
      "Solve $x^3 - 15x^2 + 74x - 180 \\ge 0$.",
      "Every nonzero integer root of $x^3 - 15x^2 + 74x - 180$ divides $-180$.",
      "$\\begin{array}{r|rrrr} 9 & 1 & -15 & 74 & -180 \\\\ & & 9 & -54 & 180 \\\\ \\hline & 1 & -6 & 20 & 0 \\end{array}$",
      "$x^3 - 15x^2 + 74x - 180 = (x - 9)(x^2 - 6x + 20)$",
      "The discriminant of $x^2 - 6x + 20$ is $(-6)^2 - 4 \\cdot 20 = -44$.",
      "The quadratic $x^2 - 6x + 20$ is positive for every real number $x$.",
      "$(x - 9)(x^2 - 6x + 20) \\ge 0$",
      "$x - 9 \\ge 0$",
      "The solutions are the numbers with $x \\ge 9$."
    ]
  },
  {
    "id": "t197-k3-p12",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $x^3 + 19x^2 + 34x - 504 > 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-14 < x < -9 or x > 4",
    "solution": [
      "Solve $x^3 + 19x^2 + 34x - 504 > 0$.",
      "Every nonzero integer root of $x^3 + 19x^2 + 34x - 504$ divides $-504$.",
      "$\\begin{array}{r|rrrr} 4 & 1 & 19 & 34 & -504 \\\\ & & 4 & 92 & 504 \\\\ \\hline & 1 & 23 & 126 & 0 \\end{array}$",
      "$x^3 + 19x^2 + 34x - 504 = (x - 4)(x^2 + 23x + 126)$",
      "$x^2 + 23x + 126 = (x + 9)(x + 14)$",
      "$(x - 4)(x + 9)(x + 14) > 0$",
      "On $x < -14$, $-14 < x < -9$, $-9 < x < 4$ and $x > 4$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-14$, $-9$ and $4$, so these numbers are left out.",
      "The solutions are the numbers with $-14 < x < -9$ or $x > 4$."
    ]
  },
  {
    "id": "t197-k3-p13",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $x^3 - 25x^2 + 178x - 264 < 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x < 2 or 11 < x < 12",
    "solution": [
      "Solve $x^3 - 25x^2 + 178x - 264 < 0$.",
      "Every nonzero integer root of $x^3 - 25x^2 + 178x - 264$ divides $-264$.",
      "$\\begin{array}{r|rrrr} 2 & 1 & -25 & 178 & -264 \\\\ & & 2 & -46 & 264 \\\\ \\hline & 1 & -23 & 132 & 0 \\end{array}$",
      "$x^3 - 25x^2 + 178x - 264 = (x - 2)(x^2 - 23x + 132)$",
      "$x^2 - 23x + 132 = (x - 11)(x - 12)$",
      "$(x - 2)(x - 11)(x - 12) < 0$",
      "On $x < 2$, $2 < x < 11$, $11 < x < 12$ and $x > 12$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $2$, $11$ and $12$, so these numbers are left out.",
      "The solutions are the numbers with $x < 2$ or $11 < x < 12$."
    ]
  },
  {
    "id": "t197-k3-p14",
    "topic": "integer-roots",
    "kind": "t197-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Solve $x^3 - 30x^2 + 261x - 540 \\le 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "x <= 3 or 12 <= x <= 15",
    "solution": [
      "Solve $x^3 - 30x^2 + 261x - 540 \\le 0$.",
      "Every nonzero integer root of $x^3 - 30x^2 + 261x - 540$ divides $-540$.",
      "$\\begin{array}{r|rrrr} 3 & 1 & -30 & 261 & -540 \\\\ & & 3 & -81 & 540 \\\\ \\hline & 1 & -27 & 180 & 0 \\end{array}$",
      "$x^3 - 30x^2 + 261x - 540 = (x - 3)(x^2 - 27x + 180)$",
      "$x^2 - 27x + 180 = (x - 12)(x - 15)$",
      "$(x - 3)(x - 12)(x - 15) \\le 0$",
      "On $x < 3$, $3 < x < 12$, $12 < x < 15$ and $x > 15$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $3$, $12$ and $15$, so these numbers are taken in.",
      "The solutions are the numbers with $x \\le 3$ or $12 \\le x \\le 15$."
    ]
  },
  {
    "id": "t197-k4-p01",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = 2x^3 - 4x^2 - 4x - 9$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find an integer $n$ such that $f(x) = 2x^3 - 4x^2 - 4x - 9$ has a root between $n$ and $n + 1$.",
      "$f(3) = 2 \\cdot 3^3 - 4 \\cdot 3^2 - 4 \\cdot 3 - 9$",
      "$f(3) = 54 - 36 - 12 - 9$",
      "$f(3) = -3$",
      "$f(4) = 2 \\cdot 4^3 - 4 \\cdot 4^2 - 4 \\cdot 4 - 9$",
      "$f(4) = 128 - 64 - 16 - 9$",
      "$f(4) = 39$",
      "So $f(x)$ has a root between $3$ and $4$.",
      "$n = 3$"
    ]
  },
  {
    "id": "t197-k4-p02",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = x^3 - 9x^2 + 9x - 3$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "7",
    "solution": [
      "Find an integer $n$ such that $f(x) = x^3 - 9x^2 + 9x - 3$ has a root between $n$ and $n + 1$.",
      "$f(7) = 7^3 - 9 \\cdot 7^2 + 9 \\cdot 7 - 3$",
      "$f(7) = 343 - 441 + 63 - 3$",
      "$f(7) = -38$",
      "$f(8) = 8^3 - 9 \\cdot 8^2 + 9 \\cdot 8 - 3$",
      "$f(8) = 512 - 576 + 72 - 3$",
      "$f(8) = 5$",
      "So $f(x)$ has a root between $7$ and $8$.",
      "$n = 7$"
    ]
  },
  {
    "id": "t197-k4-p03",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = 3x^3 - 7x^2 - 4x - 4$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "2",
    "solution": [
      "Find an integer $n$ such that $f(x) = 3x^3 - 7x^2 - 4x - 4$ has a root between $n$ and $n + 1$.",
      "$f(2) = 3 \\cdot 2^3 - 7 \\cdot 2^2 - 4 \\cdot 2 - 4$",
      "$f(2) = 24 - 28 - 8 - 4$",
      "$f(2) = -16$",
      "$f(3) = 3 \\cdot 3^3 - 7 \\cdot 3^2 - 4 \\cdot 3 - 4$",
      "$f(3) = 81 - 63 - 12 - 4$",
      "$f(3) = 2$",
      "So $f(x)$ has a root between $2$ and $3$.",
      "$n = 2$"
    ]
  },
  {
    "id": "t197-k4-p04",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = x^3 + 4x^2 - 6x + 6$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-6",
    "solution": [
      "Find an integer $n$ such that $f(x) = x^3 + 4x^2 - 6x + 6$ has a root between $n$ and $n + 1$.",
      "$f(-6) = (-6)^3 + 4(-6)^2 - 6(-6) + 6$",
      "$f(-6) = -216 + 144 + 36 + 6$",
      "$f(-6) = -30$",
      "$f(-5) = (-5)^3 + 4(-5)^2 - 6(-5) + 6$",
      "$f(-5) = -125 + 100 + 30 + 6$",
      "$f(-5) = 11$",
      "So $f(x)$ has a root between $-6$ and $-5$.",
      "$n = -6$"
    ]
  },
  {
    "id": "t197-k4-p05",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -2x^3 + 9x^2 - 4x + 8$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find an integer $n$ such that $f(x) = -2x^3 + 9x^2 - 4x + 8$ has a root between $n$ and $n + 1$.",
      "$f(4) = -2 \\cdot 4^3 + 9 \\cdot 4^2 - 4 \\cdot 4 + 8$",
      "$f(4) = -128 + 144 - 16 + 8$",
      "$f(4) = 8$",
      "$f(5) = -2 \\cdot 5^3 + 9 \\cdot 5^2 - 4 \\cdot 5 + 8$",
      "$f(5) = -250 + 225 - 20 + 8$",
      "$f(5) = -37$",
      "So $f(x)$ has a root between $4$ and $5$.",
      "$n = 4$"
    ]
  },
  {
    "id": "t197-k4-p06",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -3x^3 - 2x^2 + 5x + 8$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "1",
    "solution": [
      "Find an integer $n$ such that $f(x) = -3x^3 - 2x^2 + 5x + 8$ has a root between $n$ and $n + 1$.",
      "$f(1) = -3 \\cdot 1^3 - 2 \\cdot 1^2 + 5 \\cdot 1 + 8$",
      "$f(1) = -3 - 2 + 5 + 8$",
      "$f(1) = 8$",
      "$f(2) = -3 \\cdot 2^3 - 2 \\cdot 2^2 + 5 \\cdot 2 + 8$",
      "$f(2) = -24 - 8 + 10 + 8$",
      "$f(2) = -14$",
      "So $f(x)$ has a root between $1$ and $2$.",
      "$n = 1$"
    ]
  },
  {
    "id": "t197-k4-p07",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -3x^3 - 6x^2 - 4x - 3$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-2",
    "solution": [
      "Find an integer $n$ such that $f(x) = -3x^3 - 6x^2 - 4x - 3$ has a root between $n$ and $n + 1$.",
      "$f(-2) = -3(-2)^3 - 6(-2)^2 - 4(-2) - 3$",
      "$f(-2) = 24 - 24 + 8 - 3$",
      "$f(-2) = 5$",
      "$f(-1) = -3(-1)^3 - 6(-1)^2 - 4(-1) - 3$",
      "$f(-1) = 3 - 6 + 4 - 3$",
      "$f(-1) = -2$",
      "So $f(x)$ has a root between $-2$ and $-1$.",
      "$n = -2$"
    ]
  },
  {
    "id": "t197-k4-p08",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = x^3 - 4x^2 - 5x - 7$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "5",
    "solution": [
      "Find an integer $n$ such that $f(x) = x^3 - 4x^2 - 5x - 7$ has a root between $n$ and $n + 1$.",
      "$f(5) = 5^3 - 4 \\cdot 5^2 - 5 \\cdot 5 - 7$",
      "$f(5) = 125 - 100 - 25 - 7$",
      "$f(5) = -7$",
      "$f(6) = 6^3 - 4 \\cdot 6^2 - 5 \\cdot 6 - 7$",
      "$f(6) = 216 - 144 - 30 - 7$",
      "$f(6) = 35$",
      "So $f(x)$ has a root between $5$ and $6$.",
      "$n = 5$"
    ]
  },
  {
    "id": "t197-k4-p09",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -2x^3 + 3x^2 + 9x + 8$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find an integer $n$ such that $f(x) = -2x^3 + 3x^2 + 9x + 8$ has a root between $n$ and $n + 1$.",
      "$f(3) = -2 \\cdot 3^3 + 3 \\cdot 3^2 + 9 \\cdot 3 + 8$",
      "$f(3) = -54 + 27 + 27 + 8$",
      "$f(3) = 8$",
      "$f(4) = -2 \\cdot 4^3 + 3 \\cdot 4^2 + 9 \\cdot 4 + 8$",
      "$f(4) = -128 + 48 + 36 + 8$",
      "$f(4) = -36$",
      "So $f(x)$ has a root between $3$ and $4$.",
      "$n = 3$"
    ]
  },
  {
    "id": "t197-k4-p10",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = 2x^3 + 8x^2 - 5x + 8$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-5",
    "solution": [
      "Find an integer $n$ such that $f(x) = 2x^3 + 8x^2 - 5x + 8$ has a root between $n$ and $n + 1$.",
      "$f(-5) = 2(-5)^3 + 8(-5)^2 - 5(-5) + 8$",
      "$f(-5) = -250 + 200 + 25 + 8$",
      "$f(-5) = -17$",
      "$f(-4) = 2(-4)^3 + 8(-4)^2 - 5(-4) + 8$",
      "$f(-4) = -128 + 128 + 20 + 8$",
      "$f(-4) = 28$",
      "So $f(x)$ has a root between $-5$ and $-4$.",
      "$n = -5$"
    ]
  },
  {
    "id": "t197-k4-p11",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -3x^3 - 8x^2 + 3x - 8$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-4",
    "solution": [
      "Find an integer $n$ such that $f(x) = -3x^3 - 8x^2 + 3x - 8$ has a root between $n$ and $n + 1$.",
      "$f(-4) = -3(-4)^3 - 8(-4)^2 + 3(-4) - 8$",
      "$f(-4) = 192 - 128 - 12 - 8$",
      "$f(-4) = 44$",
      "$f(-3) = -3(-3)^3 - 8(-3)^2 + 3(-3) - 8$",
      "$f(-3) = 81 - 72 - 9 - 8$",
      "$f(-3) = -8$",
      "So $f(x)$ has a root between $-4$ and $-3$.",
      "$n = -4$"
    ]
  },
  {
    "id": "t197-k4-p12",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = 2x^3 + 5x^2 - 6x + 7$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-4",
    "solution": [
      "Find an integer $n$ such that $f(x) = 2x^3 + 5x^2 - 6x + 7$ has a root between $n$ and $n + 1$.",
      "$f(-4) = 2(-4)^3 + 5(-4)^2 - 6(-4) + 7$",
      "$f(-4) = -128 + 80 + 24 + 7$",
      "$f(-4) = -17$",
      "$f(-3) = 2(-3)^3 + 5(-3)^2 - 6(-3) + 7$",
      "$f(-3) = -54 + 45 + 18 + 7$",
      "$f(-3) = 16$",
      "So $f(x)$ has a root between $-4$ and $-3$.",
      "$n = -4$"
    ]
  },
  {
    "id": "t197-k4-p13",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -2x^3 + 7x - 9$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-3",
    "solution": [
      "Find an integer $n$ such that $f(x) = -2x^3 + 7x - 9$ has a root between $n$ and $n + 1$.",
      "$f(-3) = -2(-3)^3 + 7(-3) - 9$",
      "$f(-3) = 54 - 21 - 9$",
      "$f(-3) = 24$",
      "$f(-2) = -2(-2)^3 + 7(-2) - 9$",
      "$f(-2) = 16 - 14 - 9$",
      "$f(-2) = -7$",
      "So $f(x)$ has a root between $-3$ and $-2$.",
      "$n = -3$"
    ]
  },
  {
    "id": "t197-k4-p14",
    "topic": "integer-roots",
    "kind": "t197-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find an integer $n$ such that $f(x) = -3x^3 + 4x^2 + 2x - 8$ has a root between $n$ and $n + 1$.",
    "form": "Answer as an integer.",
    "answer": "-2",
    "solution": [
      "Find an integer $n$ such that $f(x) = -3x^3 + 4x^2 + 2x - 8$ has a root between $n$ and $n + 1$.",
      "$f(-2) = -3(-2)^3 + 4(-2)^2 + 2(-2) - 8$",
      "$f(-2) = 24 + 16 - 4 - 8$",
      "$f(-2) = 28$",
      "$f(-1) = -3(-1)^3 + 4(-1)^2 + 2(-1) - 8$",
      "$f(-1) = 3 + 4 - 2 - 8$",
      "$f(-1) = -3$",
      "So $f(x)$ has a root between $-2$ and $-1$.",
      "$n = -2$"
    ]
  },
  {
    "id": "t197-k5-p01",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 7x^2 + 2x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(6) = 6^3 - 7 \\cdot 6^2 + 2 \\cdot 6 - 5 = 216 - 252 + 12 - 5$",
      "$216 - 252 + 12 - 5 = -29$",
      "$f(7) = 7^3 - 7 \\cdot 7^2 + 2 \\cdot 7 - 5 = 343 - 343 + 14 - 5$",
      "$343 - 343 + 14 - 5 = 695$",
      "The values $f(6) = -29$ and $f(7) = 695$ have different signs, so $f(x)$ has a root between $6$ and $7$.",
      "$n = 6$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 343-343+14-5 = 9",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 7x^2 + 2x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 4 adds the terms of $f(7)$ with the sign of $-343$ lost: $343 - 343 + 14 - 5$ is $9$, not $695$.",
      "The lines above line 4 are right, and each later line is right or follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $343 - 343 + 14 - 5 = 9$."
    ]
  },
  {
    "id": "t197-k5-p02",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 + 3x^2 - 2x + 4$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-4) = (-4)^3 + 3(-4)^2 - 2(-4) + 4 = -64 + 48 - 8 + 4$",
      "$-64 + 48 - 8 + 4 = -20$",
      "$f(-3) = (-3)^3 + 3(-3)^2 - 2(-3) + 4 = -27 + 27 + 6 + 4$",
      "$-27 + 27 + 6 + 4 = 10$",
      "The values $f(-4) = -20$ and $f(-3) = 10$ have different signs, so $f(x)$ has a root between $-4$ and $-3$.",
      "$n = -4$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(-4) = (-4)^3+3*(-4)^2-2*(-4)+4 = -64+48+8+4",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 + 3x^2 - 2x + 4$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 1 gives the term $-2(-4)$ the value $-8$, but its value is $8$.",
      "Line 1 is the first line, and each later line is right or follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(-4) = (-4)^3 + 3(-4)^2 - 2(-4) + 4 = -64 + 48 + 8 + 4$."
    ]
  },
  {
    "id": "t197-k5-p03",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 7x^2 + 3x - 7$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(6) = 6^3 - 7 \\cdot 6^2 + 3 \\cdot 6 - 7 = 216 - 252 - 18 - 7$",
      "$216 - 252 - 18 - 7 = -61$",
      "$f(7) = 7^3 - 7 \\cdot 7^2 + 3 \\cdot 7 - 7 = 343 - 343 + 21 - 7$",
      "$343 - 343 + 21 - 7 = 14$",
      "The values $f(6) = -61$ and $f(7) = 14$ have different signs, so $f(x)$ has a root between $6$ and $7$.",
      "$n = 6$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(6) = 6^3-7*6^2+3*6-7 = 216-252+18-7",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 7x^2 + 3x - 7$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 1 gives the term $3 \\cdot 6$ the value $-18$, but its value is $18$.",
      "Line 1 is the first line, and each later line is right or follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(6) = 6^3 - 7 \\cdot 6^2 + 3 \\cdot 6 - 7 = 216 - 252 + 18 - 7$."
    ]
  },
  {
    "id": "t197-k5-p04",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -2x^3 - 9x^2 + 5x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-6) = -2(-6)^3 - 9(-6)^2 + 5(-6) - 5 = 432 - 324 - 30 - 5$",
      "$432 - 324 - 30 - 5 = 133$",
      "$f(-5) = -2(-5)^3 - 9(-5)^2 + 5(-5) - 5 = 250 - 225 - 25 - 5$",
      "$250 - 225 - 25 - 5 = -5$",
      "The values $f(-6) = 133$ and $f(-5) = -5$ have different signs, so $f(x)$ has a root between $-6$ and $-5$.",
      "$n = -6$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 432-324-30-5 = 73",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = -2x^3 - 9x^2 + 5x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 2 adds the terms of $f(-6)$ with the sign of $-30$ lost: $432 - 324 - 30 - 5$ is $73$, not $133$.",
      "The lines above line 2 are right, and each later line is right or follows from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $432 - 324 - 30 - 5 = 73$."
    ]
  },
  {
    "id": "t197-k5-p05",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 8x^2 + 7x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(7) = 7^3 - 8 \\cdot 7^2 + 7 \\cdot 7 - 5 = 343 - 392 + 49 - 5$",
      "$343 - 392 + 49 - 5 = -5$",
      "$f(8) = 8^3 - 8 \\cdot 8^2 + 7 \\cdot 8 - 5 = 512 - 512 + 56 - 5$",
      "$512 - 512 + 56 - 5 = 1075$",
      "The values $f(7) = -5$ and $f(8) = 1075$ have different signs, so $f(x)$ has a root between $7$ and $8$.",
      "$n = 7$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 512-512+56-5 = 51",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 8x^2 + 7x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 4 adds the terms of $f(8)$ with the sign of $-512$ lost: $512 - 512 + 56 - 5$ is $51$, not $1075$.",
      "The lines above line 4 are right, and each later line is right or follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $512 - 512 + 56 - 5 = 51$."
    ]
  },
  {
    "id": "t197-k5-p06",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 + 3x^2 - 8x + 7$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-5) = (-5)^3 + 3(-5)^2 - 8(-5) + 7 = -125 - 75 + 40 + 7$",
      "$-125 - 75 + 40 + 7 = -153$",
      "$f(-4) = (-4)^3 + 3(-4)^2 - 8(-4) + 7 = -64 + 48 + 32 + 7$",
      "$-64 + 48 + 32 + 7 = 23$",
      "The values $f(-5) = -153$ and $f(-4) = 23$ have different signs, so $f(x)$ has a root between $-5$ and $-4$.",
      "$n = -5$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(-5) = (-5)^3+3*(-5)^2-8*(-5)+7 = -125+75+40+7",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 + 3x^2 - 8x + 7$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 1 gives the term $3(-5)^2$ the value $-75$, but its value is $75$.",
      "Line 1 is the first line, and each later line is right or follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(-5) = (-5)^3 + 3(-5)^2 - 8(-5) + 7 = -125 + 75 + 40 + 7$."
    ]
  },
  {
    "id": "t197-k5-p07",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -2x^3 + 5x^2 - 2x + 6$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(2) = -2 \\cdot 2^3 + 5 \\cdot 2^2 - 2 \\cdot 2 + 6 = -16 + 20 - 4 + 6$",
      "$-16 + 20 - 4 + 6 = 14$",
      "$f(3) = -2 \\cdot 3^3 + 5 \\cdot 3^2 - 2 \\cdot 3 + 6 = -54 + 45 - 6 + 6$",
      "$-54 + 45 - 6 + 6 = -9$",
      "The values $f(2) = 14$ and $f(3) = -9$ have different signs, so $f(x)$ has a root between $2$ and $3$.",
      "$n = 2$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: -16+20-4+6 = 6",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = -2x^3 + 5x^2 - 2x + 6$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 2 adds the terms of $f(2)$ with the sign of $-4$ lost: $-16 + 20 - 4 + 6$ is $6$, not $14$.",
      "The lines above line 2 are right, and each later line is right or follows from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $-16 + 20 - 4 + 6 = 6$."
    ]
  },
  {
    "id": "t197-k5-p08",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 - 7x^2 + 9x - 8$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(1) = 3 \\cdot 1^3 - 7 \\cdot 1^2 + 9 \\cdot 1 - 8 = 3 - 7 + 9 - 8$",
      "$3 - 7 + 9 - 8 = -3$",
      "$f(2) = 3 \\cdot 2^3 - 7 \\cdot 2^2 + 9 \\cdot 2 - 8 = 24 - 28 + 18 - 8$",
      "$24 - 28 + 18 - 8 = 22$",
      "The values $f(1) = -3$ and $f(2) = 22$ have different signs, so $f(x)$ has a root between $1$ and $2$.",
      "$n = 1$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 24-28+18-8 = 6",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 - 7x^2 + 9x - 8$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 4 adds the terms of $f(2)$ with the sign of $-8$ lost: $24 - 28 + 18 - 8$ is $6$, not $22$.",
      "The lines above line 4 are right, and each later line is right or follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $24 - 28 + 18 - 8 = 6$."
    ]
  },
  {
    "id": "t197-k5-p09",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 3x^2 - 7x - 9$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(4) = 4^3 - 3 \\cdot 4^2 - 7 \\cdot 4 - 9 = 64 - 48 - 28 - 9$",
      "$64 - 48 - 28 - 9 = -21$",
      "$f(5) = 5^3 - 3 \\cdot 5^2 - 7 \\cdot 5 - 9 = 125 + 75 - 35 - 9$",
      "$125 + 75 - 35 - 9 = 156$",
      "The values $f(4) = -21$ and $f(5) = 156$ have different signs, so $f(x)$ has a root between $4$ and $5$.",
      "$n = 4$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(5) = 5^3-3*5^2-7*5-9 = 125-75-35-9",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 3x^2 - 7x - 9$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 3 gives the term $-3 \\cdot 5^2$ the value $75$, but its value is $-75$.",
      "The lines above line 3 are right, and each later line is right or follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(5) = 5^3 - 3 \\cdot 5^2 - 7 \\cdot 5 - 9 = 125 - 75 - 35 - 9$."
    ]
  },
  {
    "id": "t197-k5-p10",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 + 3x^2 + 5$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-2) = 3(-2)^3 + 3(-2)^2 + 5 = -24 - 12 + 5$",
      "$-24 - 12 + 5 = -31$",
      "$f(-1) = 3(-1)^3 + 3(-1)^2 + 5 = -3 + 3 + 5$",
      "$-3 + 3 + 5 = 5$",
      "The values $f(-2) = -31$ and $f(-1) = 5$ have different signs, so $f(x)$ has a root between $-2$ and $-1$.",
      "$n = -2$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(-2) = 3*(-2)^3+3*(-2)^2+5 = -24+12+5",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 + 3x^2 + 5$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 1 gives the term $3(-2)^2$ the value $-12$, but its value is $12$.",
      "Line 1 is the first line, and each later line is right or follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(-2) = 3(-2)^3 + 3(-2)^2 + 5 = -24 + 12 + 5$."
    ]
  },
  {
    "id": "t197-k5-p11",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 + 5x^2 + 3x - 7$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-2) = -3(-2)^3 + 5(-2)^2 + 3(-2) - 7 = 24 + 20 - 6 - 7$",
      "$24 + 20 - 6 - 7 = 31$",
      "$f(-1) = -3(-1)^3 + 5(-1)^2 + 3(-1) - 7 = -3 + 5 - 3 - 7$",
      "$-3 + 5 - 3 - 7 = -8$",
      "The values $f(-2) = 31$ and $f(-1) = -8$ have different signs, so $f(x)$ has a root between $-2$ and $-1$.",
      "$n = -2$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(-1) = -3*(-1)^3+5*(-1)^2+3*(-1)-7 = 3+5-3-7",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 + 5x^2 + 3x - 7$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 3 gives the term $-3(-1)^3$ the value $-3$, but its value is $3$.",
      "The lines above line 3 are right, and each later line is right or follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(-1) = -3(-1)^3 + 5(-1)^2 + 3(-1) - 7 = 3 + 5 - 3 - 7$."
    ]
  },
  {
    "id": "t197-k5-p12",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 - 8x^2 - 2x - 6$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-3) = -3(-3)^3 - 8(-3)^2 - 2(-3) - 6 = 81 - 72 + 6 - 6$",
      "$81 - 72 + 6 - 6 = 9$",
      "$f(-2) = -3(-2)^3 - 8(-2)^2 - 2(-2) - 6 = 24 - 32 - 4 - 6$",
      "$24 - 32 - 4 - 6 = -18$",
      "The values $f(-3) = 9$ and $f(-2) = -18$ have different signs, so $f(x)$ has a root between $-3$ and $-2$.",
      "$n = -3$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(-2) = -3*(-2)^3-8*(-2)^2-2*(-2)-6 = 24-32+4-6",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 - 8x^2 - 2x - 6$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 3 gives the term $-2(-2)$ the value $-4$, but its value is $4$.",
      "The lines above line 3 are right, and each later line is right or follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(-2) = -3(-2)^3 - 8(-2)^2 - 2(-2) - 6 = 24 - 32 + 4 - 6$."
    ]
  },
  {
    "id": "t197-k5-p13",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 - 8x^2 - 7x - 3$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(3) = 3 \\cdot 3^3 - 8 \\cdot 3^2 - 7 \\cdot 3 - 3 = 81 - 72 - 21 - 3$",
      "$81 - 72 - 21 - 3 = -15$",
      "$f(4) = 3 \\cdot 4^3 - 8 \\cdot 4^2 - 7 \\cdot 4 - 3 = 192 - 128 - 28 - 3$",
      "$192 - 128 - 28 - 3 = 89$",
      "The values $f(3) = -15$ and $f(4) = 89$ have different signs, so $f(x)$ has a root between $3$ and $4$.",
      "$n = 3$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 192-128-28-3 = 33",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 - 8x^2 - 7x - 3$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 4 adds the terms of $f(4)$ with the sign of $-28$ lost: $192 - 128 - 28 - 3$ is $33$, not $89$.",
      "The lines above line 4 are right, and each later line is right or follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $192 - 128 - 28 - 3 = 33$."
    ]
  },
  {
    "id": "t197-k5-p14",
    "topic": "integer-roots",
    "kind": "t197-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 - 9x^2 - 6x - 4$ has a root between $n$ and $n + 1$, and write that line right.",
    "given": [
      "$f(-3) = -3(-3)^3 - 9(-3)^2 - 6(-3) - 4 = 81 - 81 + 18 - 4$",
      "$81 - 81 + 18 - 4 = 22$",
      "$f(-2) = -3(-2)^3 - 9(-2)^2 - 6(-2) - 4 = 24 - 36 + 12 - 4$",
      "$24 - 36 + 12 - 4 = -4$",
      "The values $f(-3) = 22$ and $f(-2) = -4$ have different signs, so $f(x)$ has a root between $-3$ and $-2$.",
      "$n = -3$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 81-81+18-4 = 14",
    "solution": [
      "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 - 9x^2 - 6x - 4$ has a root between $n$ and $n + 1$, and write that line right.",
      "Line 2 adds the terms of $f(-3)$ with the sign of $-4$ lost: $81 - 81 + 18 - 4$ is $14$, not $22$.",
      "The lines above line 2 are right, and each later line is right or follows from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $81 - 81 + 18 - 4 = 14$."
    ]
  }
]
