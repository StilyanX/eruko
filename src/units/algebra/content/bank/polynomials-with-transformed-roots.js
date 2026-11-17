export default [
  {
    "id": "t236-k1-p01",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 + 4x + 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+x^2-12*x+14",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 + 4x + 2$.",
      "A number $x$ is a root of $q$ exactly when $x - 2$ is a root of $p$, so $q(x) = p(x - 2)$.",
      "$q(x) = (x - 2)^3 + 7(x - 2)^2 + 4(x - 2) + 2$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 + 7x^2 - 28x + 28 + 4x - 8 + 2$",
      "$q(x) = x^3 + x^2 - 12x + 14$"
    ]
  },
  {
    "id": "t236-k1-p02",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $3r - 2$, $3s - 2$ and $3t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 5x - 3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+30*x^2+153*x+113",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $3r - 2$, $3s - 2$ and $3t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 5x - 3$.",
      "A number $x$ is a root of $q$ exactly when $\\dfrac{x + 2}{3}$ is a root of $p$, so $q(x) = 27p\\left(\\dfrac{x + 2}{3}\\right)$.",
      "$q(x) = 27\\left(\\left(\\dfrac{x + 2}{3}\\right)^3 + 8\\left(\\dfrac{x + 2}{3}\\right)^2 + 5 \\cdot \\dfrac{x + 2}{3} - 3\\right)$",
      "$q(x) = (x + 2)^3 + 24(x + 2)^2 + 45(x + 2) - 81$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 + 24x^2 + 96x + 96 + 45x + 90 - 81$",
      "$q(x) = x^3 + 30x^2 + 153x + 113$"
    ]
  },
  {
    "id": "t236-k1-p03",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 2x^2 - 6x - 7$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+6/7*x^2+2/7*x-5/7",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 2x^2 - 6x - 7$.",
      "The number $0$ is not a root of $p$, since $p(0) = -7$.",
      "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
      "$x^3p\\left(\\dfrac{1}{x}\\right) = 5 - 2x - 6x^2 - 7x^3$",
      "$q(x) = x^3 + \\dfrac{6}{7}x^2 + \\dfrac{2}{7}x - \\dfrac{5}{7}$"
    ]
  },
  {
    "id": "t236-k1-p04",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 9x - 5$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-2*x^2-13*x+21",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 9x - 5$.",
      "A number $x$ is a root of $q$ exactly when $x - 2$ is a root of $p$, so $q(x) = p(x - 2)$.",
      "$q(x) = (x - 2)^3 + 4(x - 2)^2 - 9(x - 2) - 5$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 + 4x^2 - 16x + 16 - 9x + 18 - 5$",
      "$q(x) = x^3 - 2x^2 - 13x + 21$"
    ]
  },
  {
    "id": "t236-k1-p05",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r - 4$, $s - 4$ and $t - 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 3x + 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+20*x^2+115*x+213",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r - 4$, $s - 4$ and $t - 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 3x + 9$.",
      "A number $x$ is a root of $q$ exactly when $x + 4$ is a root of $p$, so $q(x) = p(x + 4)$.",
      "$q(x) = (x + 4)^3 + 8(x + 4)^2 + 3(x + 4) + 9$",
      "$q(x) = x^3 + 12x^2 + 48x + 64 + 8x^2 + 64x + 128 + 3x + 12 + 9$",
      "$q(x) = x^3 + 20x^2 + 115x + 213$"
    ]
  },
  {
    "id": "t236-k1-p06",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $3r - 4$, $3s - 4$ and $3t - 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 - 5x + 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-9*x^2-165*x-344",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $3r - 4$, $3s - 4$ and $3t - 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 - 5x + 4$.",
      "A number $x$ is a root of $q$ exactly when $\\dfrac{x + 4}{3}$ is a root of $p$, so $q(x) = 27p\\left(\\dfrac{x + 4}{3}\\right)$.",
      "$q(x) = 27\\left(\\left(\\dfrac{x + 4}{3}\\right)^3 - 7\\left(\\dfrac{x + 4}{3}\\right)^2 - 5 \\cdot \\dfrac{x + 4}{3} + 4\\right)$",
      "$q(x) = (x + 4)^3 - 21(x + 4)^2 - 45(x + 4) + 108$",
      "$q(x) = x^3 + 12x^2 + 48x + 64 - 21x^2 - 168x - 336 - 45x - 180 + 108$",
      "$q(x) = x^3 - 9x^2 - 165x - 344$"
    ]
  },
  {
    "id": "t236-k1-p07",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $2r + 5$, $2s + 5$ and $2t + 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 4x - 6$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-11*x^2+51*x-153",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $2r + 5$, $2s + 5$ and $2t + 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 4x - 6$.",
      "A number $x$ is a root of $q$ exactly when $\\dfrac{x - 5}{2}$ is a root of $p$, so $q(x) = 8p\\left(\\dfrac{x - 5}{2}\\right)$.",
      "$q(x) = 8\\left(\\left(\\dfrac{x - 5}{2}\\right)^3 + 2\\left(\\dfrac{x - 5}{2}\\right)^2 + 4 \\cdot \\dfrac{x - 5}{2} - 6\\right)$",
      "$q(x) = (x - 5)^3 + 4(x - 5)^2 + 16(x - 5) - 48$",
      "$q(x) = x^3 - 15x^2 + 75x - 125 + 4x^2 - 40x + 100 + 16x - 80 - 48$",
      "$q(x) = x^3 - 11x^2 + 51x - 153$"
    ]
  },
  {
    "id": "t236-k1-p08",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 4x^2 - 9x + 7$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-9/7*x^2-4/7*x+5/7",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 4x^2 - 9x + 7$.",
      "The number $0$ is not a root of $p$, since $p(0) = 7$.",
      "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
      "$x^3p\\left(\\dfrac{1}{x}\\right) = 5 - 4x - 9x^2 + 7x^3$",
      "$q(x) = x^3 - \\dfrac{9}{7}x^2 - \\dfrac{4}{7}x + \\dfrac{5}{7}$"
    ]
  },
  {
    "id": "t236-k1-p09",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 - 3x + 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+3*x^2-3*x-8",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 - 3x + 2$.",
      "A number $x$ is a root of $q$ exactly when $x + 2$ is a root of $p$, so $q(x) = p(x + 2)$.",
      "$q(x) = (x + 2)^3 - 3(x + 2)^2 - 3(x + 2) + 2$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 - 3x^2 - 12x - 12 - 3x - 6 + 2$",
      "$q(x) = x^3 + 3x^2 - 3x - 8$"
    ]
  },
  {
    "id": "t236-k1-p10",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $3r + 2$, $3s + 2$ and $3t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 6x + 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-12*x^2-18*x+130",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $3r + 2$, $3s + 2$ and $3t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 6x + 2$.",
      "A number $x$ is a root of $q$ exactly when $\\dfrac{x - 2}{3}$ is a root of $p$, so $q(x) = 27p\\left(\\dfrac{x - 2}{3}\\right)$.",
      "$q(x) = 27\\left(\\left(\\dfrac{x - 2}{3}\\right)^3 - 2\\left(\\dfrac{x - 2}{3}\\right)^2 - 6 \\cdot \\dfrac{x - 2}{3} + 2\\right)$",
      "$q(x) = (x - 2)^3 - 6(x - 2)^2 - 54(x - 2) + 54$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 - 6x^2 + 24x - 24 - 54x + 108 + 54$",
      "$q(x) = x^3 - 12x^2 - 18x + 130$"
    ]
  },
  {
    "id": "t236-k1-p11",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 5x^2 - 4x + 3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+11*x^2+28*x+23",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 5x^2 - 4x + 3$.",
      "A number $x$ is a root of $q$ exactly when $x + 2$ is a root of $p$, so $q(x) = p(x + 2)$.",
      "$q(x) = (x + 2)^3 + 5(x + 2)^2 - 4(x + 2) + 3$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 + 5x^2 + 20x + 20 - 4x - 8 + 3$",
      "$q(x) = x^3 + 11x^2 + 28x + 23$"
    ]
  },
  {
    "id": "t236-k1-p12",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 6x^3 + 3x^2 + 2x - 7$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-2/7*x^2-3/7*x-6/7",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 6x^3 + 3x^2 + 2x - 7$.",
      "The number $0$ is not a root of $p$, since $p(0) = -7$.",
      "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
      "$x^3p\\left(\\dfrac{1}{x}\\right) = 6 + 3x + 2x^2 - 7x^3$",
      "$q(x) = x^3 - \\dfrac{2}{7}x^2 - \\dfrac{3}{7}x - \\dfrac{6}{7}$"
    ]
  },
  {
    "id": "t236-k1-p13",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 2x^3 - 9x^2 - 6x + 6$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-x^2-3/2*x+1/3",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 2x^3 - 9x^2 - 6x + 6$.",
      "The number $0$ is not a root of $p$, since $p(0) = 6$.",
      "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
      "$x^3p\\left(\\dfrac{1}{x}\\right) = 2 - 9x - 6x^2 + 6x^3$",
      "$q(x) = x^3 - x^2 - \\dfrac{3}{2}x + \\dfrac{1}{3}$"
    ]
  },
  {
    "id": "t236-k1-p14",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $3r + 5$, $3s + 5$ and $3t + 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 4x - 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+9*x^2-129*x+187",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $3r + 5$, $3s + 5$ and $3t + 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 4x - 4$.",
      "A number $x$ is a root of $q$ exactly when $\\dfrac{x - 5}{3}$ is a root of $p$, so $q(x) = 27p\\left(\\dfrac{x - 5}{3}\\right)$.",
      "$q(x) = 27\\left(\\left(\\dfrac{x - 5}{3}\\right)^3 + 8\\left(\\dfrac{x - 5}{3}\\right)^2 + 4 \\cdot \\dfrac{x - 5}{3} - 4\\right)$",
      "$q(x) = (x - 5)^3 + 24(x - 5)^2 + 36(x - 5) - 108$",
      "$q(x) = x^3 - 15x^2 + 75x - 125 + 24x^2 - 240x + 600 + 36x - 180 - 108$",
      "$q(x) = x^3 + 9x^2 - 129x + 187$"
    ]
  },
  {
    "id": "t236-k2-p01",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 - 20x - 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-121*x^2+364*x-4",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 - 20x - 2$.",
      "$p(x) = (x^3 - 20x) + (-9x^2 - 2)$",
      "So at a root $x$ of $p$, $x^3 - 20x = 9x^2 + 2$.",
      "$x^2(x^2 - 20)^2 = (9x^2 + 2)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 20)^2 - (9x + 2)^2$.",
      "$q(x) = x^3 - 40x^2 + 400x - 81x^2 - 36x - 4$",
      "$q(x) = x^3 - 121x^2 + 364x - 4$"
    ]
  },
  {
    "id": "t236-k2-p02",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 25x + 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-114*x^2+561*x-16",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 25x + 4$.",
      "$p(x) = (x^3 - 25x) + (8x^2 + 4)$",
      "So at a root $x$ of $p$, $x^3 - 25x = -8x^2 - 4$.",
      "$x^2(x^2 - 25)^2 = (-8x^2 - 4)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 25)^2 - (-8x - 4)^2$.",
      "$q(x) = x^3 - 50x^2 + 625x - 64x^2 - 64x - 16$",
      "$q(x) = x^3 - 114x^2 + 561x - 16$"
    ]
  },
  {
    "id": "t236-k2-p03",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 3x^2 - 14x - 3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-37*x^2+214*x-9",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 3x^2 - 14x - 3$.",
      "$p(x) = (x^3 - 14x) + (3x^2 - 3)$",
      "So at a root $x$ of $p$, $x^3 - 14x = -3x^2 + 3$.",
      "$x^2(x^2 - 14)^2 = (-3x^2 + 3)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 14)^2 - (-3x + 3)^2$.",
      "$q(x) = x^3 - 28x^2 + 196x - 9x^2 + 18x - 9$",
      "$q(x) = x^3 - 37x^2 + 214x - 9$"
    ]
  },
  {
    "id": "t236-k2-p04",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 - 15x + 6$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-111*x^2+117*x-36",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 - 15x + 6$.",
      "$p(x) = (x^3 - 15x) + (9x^2 + 6)$",
      "So at a root $x$ of $p$, $x^3 - 15x = -9x^2 - 6$.",
      "$x^2(x^2 - 15)^2 = (-9x^2 - 6)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 15)^2 - (-9x - 6)^2$.",
      "$q(x) = x^3 - 30x^2 + 225x - 81x^2 - 108x - 36$",
      "$q(x) = x^3 - 111x^2 + 117x - 36$"
    ]
  },
  {
    "id": "t236-k2-p05",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 + 19x + 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-43*x^2+289*x-16",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 + 19x + 4$.",
      "$p(x) = (x^3 + 19x) + (9x^2 + 4)$",
      "So at a root $x$ of $p$, $x^3 + 19x = -9x^2 - 4$.",
      "$x^2(x^2 + 19)^2 = (-9x^2 - 4)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 19)^2 - (-9x - 4)^2$.",
      "$q(x) = x^3 + 38x^2 + 361x - 81x^2 - 72x - 16$",
      "$q(x) = x^3 - 43x^2 + 289x - 16$"
    ]
  },
  {
    "id": "t236-k2-p06",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 9x - 6$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+14*x^2+105*x-36",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 9x - 6$.",
      "$p(x) = (x^3 + 9x) + (2x^2 - 6)$",
      "So at a root $x$ of $p$, $x^3 + 9x = -2x^2 + 6$.",
      "$x^2(x^2 + 9)^2 = (-2x^2 + 6)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 9)^2 - (-2x + 6)^2$.",
      "$q(x) = x^3 + 18x^2 + 81x - 4x^2 + 24x - 36$",
      "$q(x) = x^3 + 14x^2 + 105x - 36$"
    ]
  },
  {
    "id": "t236-k2-p07",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 24x - 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+32*x^2+544*x-16",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 24x - 4$.",
      "$p(x) = (x^3 + 24x) + (-4x^2 - 4)$",
      "So at a root $x$ of $p$, $x^3 + 24x = 4x^2 + 4$.",
      "$x^2(x^2 + 24)^2 = (4x^2 + 4)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 24)^2 - (4x + 4)^2$.",
      "$q(x) = x^3 + 48x^2 + 576x - 16x^2 - 32x - 16$",
      "$q(x) = x^3 + 32x^2 + 544x - 16$"
    ]
  },
  {
    "id": "t236-k2-p08",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 + 12x - 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-25*x^2+172*x-4",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 + 12x - 2$.",
      "$p(x) = (x^3 + 12x) + (7x^2 - 2)$",
      "So at a root $x$ of $p$, $x^3 + 12x = -7x^2 + 2$.",
      "$x^2(x^2 + 12)^2 = (-7x^2 + 2)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 12)^2 - (-7x + 2)^2$.",
      "$q(x) = x^3 + 24x^2 + 144x - 49x^2 + 28x - 4$",
      "$q(x) = x^3 - 25x^2 + 172x - 4$"
    ]
  },
  {
    "id": "t236-k2-p09",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 6x + 8$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-16*x^2+68*x-64",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 6x + 8$.",
      "$p(x) = (x^3 - 6x) + (-2x^2 + 8)$",
      "So at a root $x$ of $p$, $x^3 - 6x = 2x^2 - 8$.",
      "$x^2(x^2 - 6)^2 = (2x^2 - 8)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 6)^2 - (2x - 8)^2$.",
      "$q(x) = x^3 - 12x^2 + 36x - 4x^2 + 32x - 64$",
      "$q(x) = x^3 - 16x^2 + 68x - 64$"
    ]
  },
  {
    "id": "t236-k2-p10",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 13x - 7$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-10*x^2+253*x-49",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 13x - 7$.",
      "$p(x) = (x^3 + 13x) + (6x^2 - 7)$",
      "So at a root $x$ of $p$, $x^3 + 13x = -6x^2 + 7$.",
      "$x^2(x^2 + 13)^2 = (-6x^2 + 7)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 13)^2 - (-6x + 7)^2$.",
      "$q(x) = x^3 + 26x^2 + 169x - 36x^2 + 84x - 49$",
      "$q(x) = x^3 - 10x^2 + 253x - 49$"
    ]
  },
  {
    "id": "t236-k2-p11",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 - 16x - 3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-81*x^2+298*x-9",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 - 16x - 3$.",
      "$p(x) = (x^3 - 16x) + (7x^2 - 3)$",
      "So at a root $x$ of $p$, $x^3 - 16x = -7x^2 + 3$.",
      "$x^2(x^2 - 16)^2 = (-7x^2 + 3)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 16)^2 - (-7x + 3)^2$.",
      "$q(x) = x^3 - 32x^2 + 256x - 49x^2 + 42x - 9$",
      "$q(x) = x^3 - 81x^2 + 298x - 9$"
    ]
  },
  {
    "id": "t236-k2-p12",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 17x + 5$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-70*x^2+229*x-25",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 17x + 5$.",
      "$p(x) = (x^3 - 17x) + (6x^2 + 5)$",
      "So at a root $x$ of $p$, $x^3 - 17x = -6x^2 - 5$.",
      "$x^2(x^2 - 17)^2 = (-6x^2 - 5)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 17)^2 - (-6x - 5)^2$.",
      "$q(x) = x^3 - 34x^2 + 289x - 36x^2 - 60x - 25$",
      "$q(x) = x^3 - 70x^2 + 229x - 25$"
    ]
  },
  {
    "id": "t236-k2-p13",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 + 23x + 7$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-35*x^2+403*x-49",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 + 23x + 7$.",
      "$p(x) = (x^3 + 23x) + (9x^2 + 7)$",
      "So at a root $x$ of $p$, $x^3 + 23x = -9x^2 - 7$.",
      "$x^2(x^2 + 23)^2 = (-9x^2 - 7)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 23)^2 - (-9x - 7)^2$.",
      "$q(x) = x^3 + 46x^2 + 529x - 81x^2 - 126x - 49$",
      "$q(x) = x^3 - 35x^2 + 403x - 49$"
    ]
  },
  {
    "id": "t236-k2-p14",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 8x - 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-52*x^2+16*x-16",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 8x - 4$.",
      "$p(x) = (x^3 - 8x) + (-6x^2 - 4)$",
      "So at a root $x$ of $p$, $x^3 - 8x = 6x^2 + 4$.",
      "$x^2(x^2 - 8)^2 = (6x^2 + 4)^2$",
      "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 8)^2 - (6x + 4)^2$.",
      "$q(x) = x^3 - 16x^2 + 64x - 36x^2 - 48x - 16$",
      "$q(x) = x^3 - 52x^2 + 16x - 16$"
    ]
  },
  {
    "id": "t236-k3-p01",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 - 2x - 7$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "30/31",
    "solution": [
      "Find $\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 - 2x - 7$.",
      "The numbers $r + 4$, $s + 4$ and $t + 4$ are the roots of $q(x) = p(x - 4)$.",
      "$q(x) = (x - 4)^3 + 2(x - 4)^2 - 2(x - 4) - 7$",
      "$q(x) = x^3 - 10x^2 + 30x - 31$",
      "The numbers $\\dfrac{1}{r + 4}$, $\\dfrac{1}{s + 4}$ and $\\dfrac{1}{t + 4}$ are the roots of $-31x^3 + 30x^2 - 10x + 1$.",
      "$\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4} = \\dfrac{30}{31}$"
    ]
  },
  {
    "id": "t236-k3-p02",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r + 2} + \\dfrac{1}{s + 2} + \\dfrac{1}{t + 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 + 9x - 5$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "41/51",
    "solution": [
      "Find $\\dfrac{1}{r + 2} + \\dfrac{1}{s + 2} + \\dfrac{1}{t + 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 + 9x - 5$.",
      "The numbers $r + 2$, $s + 2$ and $t + 2$ are the roots of $q(x) = p(x - 2)$.",
      "$q(x) = (x - 2)^3 - 5(x - 2)^2 + 9(x - 2) - 5$",
      "$q(x) = x^3 - 11x^2 + 41x - 51$",
      "The numbers $\\dfrac{1}{r + 2}$, $\\dfrac{1}{s + 2}$ and $\\dfrac{1}{t + 2}$ are the roots of $-51x^3 + 41x^2 - 11x + 1$.",
      "$\\dfrac{1}{r + 2} + \\dfrac{1}{s + 2} + \\dfrac{1}{t + 2} = \\dfrac{41}{51}$"
    ]
  },
  {
    "id": "t236-k3-p03",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 - 3x + 3$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-11/15",
    "solution": [
      "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 - 3x + 3$.",
      "The numbers $r - 2$, $s - 2$ and $t - 2$ are the roots of $q(x) = p(x + 2)$.",
      "$q(x) = (x + 2)^3 - 5(x + 2)^2 - 3(x + 2) + 3$",
      "$q(x) = x^3 + x^2 - 11x - 15$",
      "The numbers $\\dfrac{1}{r - 2}$, $\\dfrac{1}{s - 2}$ and $\\dfrac{1}{t - 2}$ are the roots of $-15x^3 - 11x^2 + x + 1$.",
      "$\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2} = -\\dfrac{11}{15}$"
    ]
  },
  {
    "id": "t236-k3-p04",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r + 3)(s + 3)(t + 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 - 9x - 2$.",
    "form": "Answer as an integer.",
    "answer": "-61",
    "solution": [
      "Find $(r + 3)(s + 3)(t + 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 - 9x - 2$.",
      "The numbers $r + 3$, $s + 3$ and $t + 3$ are the roots of the monic cubic $q(x) = p(x - 3)$.",
      "$(r + 3)(s + 3)(t + 3) = -q(0)$",
      "$q(0) = p(-3) = (-3)^3 + 7 \\cdot (-3)^2 - 9 \\cdot (-3) - 2 = 61$",
      "$(r + 3)(s + 3)(t + 3) = -61$"
    ]
  },
  {
    "id": "t236-k3-p05",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 6x - 5$.",
    "form": "Answer as an integer.",
    "answer": "-115",
    "solution": [
      "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 6x - 5$.",
      "The numbers $r - 4$, $s - 4$ and $t - 4$ are the roots of the monic cubic $q(x) = p(x + 4)$.",
      "$(r - 4)(s - 4)(t - 4) = -q(0)$",
      "$q(0) = p(4) = 4^3 + 2 \\cdot 4^2 + 6 \\cdot 4 - 5 = 115$",
      "$(r - 4)(s - 4)(t - 4) = -115$"
    ]
  },
  {
    "id": "t236-k3-p06",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 4x - 9$.",
    "form": "Answer as an integer.",
    "answer": "-135",
    "solution": [
      "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 4x - 9$.",
      "The numbers $r - 4$, $s - 4$ and $t - 4$ are the roots of the monic cubic $q(x) = p(x + 4)$.",
      "$(r - 4)(s - 4)(t - 4) = -q(0)$",
      "$q(0) = p(4) = 4^3 + 6 \\cdot 4^2 - 4 \\cdot 4 - 9 = 135$",
      "$(r - 4)(s - 4)(t - 4) = -135$"
    ]
  },
  {
    "id": "t236-k3-p07",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r + 4)(s + 4)(t + 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 + 3x + 5$.",
    "form": "Answer as an integer.",
    "answer": "167",
    "solution": [
      "Find $(r + 4)(s + 4)(t + 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 + 3x + 5$.",
      "The numbers $r + 4$, $s + 4$ and $t + 4$ are the roots of the monic cubic $q(x) = p(x - 4)$.",
      "$(r + 4)(s + 4)(t + 4) = -q(0)$",
      "$q(0) = p(-4) = (-4)^3 - 6 \\cdot (-4)^2 + 3 \\cdot (-4) + 5 = -167$",
      "$(r + 4)(s + 4)(t + 4) = 167$"
    ]
  },
  {
    "id": "t236-k3-p08",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 - 9x - 8$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-13/34",
    "solution": [
      "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 - 9x - 8$.",
      "The numbers $r - 2$, $s - 2$ and $t - 2$ are the roots of $q(x) = p(x + 2)$.",
      "$q(x) = (x + 2)^3 - 4(x + 2)^2 - 9(x + 2) - 8$",
      "$q(x) = x^3 + 2x^2 - 13x - 34$",
      "The numbers $\\dfrac{1}{r - 2}$, $\\dfrac{1}{s - 2}$ and $\\dfrac{1}{t - 2}$ are the roots of $-34x^3 - 13x^2 + 2x + 1$.",
      "$\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2} = -\\dfrac{13}{34}$"
    ]
  },
  {
    "id": "t236-k3-p09",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 5x - 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "91/146",
    "solution": [
      "Find $\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 5x - 6$.",
      "The numbers $r + 4$, $s + 4$ and $t + 4$ are the roots of $q(x) = p(x - 4)$.",
      "$q(x) = (x - 4)^3 - 6(x - 4)^2 - 5(x - 4) - 6$",
      "$q(x) = x^3 - 18x^2 + 91x - 146$",
      "The numbers $\\dfrac{1}{r + 4}$, $\\dfrac{1}{s + 4}$ and $\\dfrac{1}{t + 4}$ are the roots of $-146x^3 + 91x^2 - 18x + 1$.",
      "$\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4} = \\dfrac{91}{146}$"
    ]
  },
  {
    "id": "t236-k3-p10",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 7x - 7$.",
    "form": "Answer as an integer.",
    "answer": "59",
    "solution": [
      "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 7x - 7$.",
      "The numbers $r - 4$, $s - 4$ and $t - 4$ are the roots of the monic cubic $q(x) = p(x + 4)$.",
      "$(r - 4)(s - 4)(t - 4) = -q(0)$",
      "$q(0) = p(4) = 4^3 - 9 \\cdot 4^2 + 7 \\cdot 4 - 7 = -59$",
      "$(r - 4)(s - 4)(t - 4) = 59$"
    ]
  },
  {
    "id": "t236-k3-p11",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 4x + 3$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-24/19",
    "solution": [
      "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 4x + 3$.",
      "The numbers $r - 2$, $s - 2$ and $t - 2$ are the roots of $q(x) = p(x + 2)$.",
      "$q(x) = (x + 2)^3 + 4(x + 2)^2 - 4(x + 2) + 3$",
      "$q(x) = x^3 + 10x^2 + 24x + 19$",
      "The numbers $\\dfrac{1}{r - 2}$, $\\dfrac{1}{s - 2}$ and $\\dfrac{1}{t - 2}$ are the roots of $19x^3 + 24x^2 + 10x + 1$.",
      "$\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2} = -\\dfrac{24}{19}$"
    ]
  },
  {
    "id": "t236-k3-p12",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r + 3)(s + 3)(t + 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 2x + 9$.",
    "form": "Answer as an integer.",
    "answer": "60",
    "solution": [
      "Find $(r + 3)(s + 3)(t + 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 2x + 9$.",
      "The numbers $r + 3$, $s + 3$ and $t + 3$ are the roots of the monic cubic $q(x) = p(x - 3)$.",
      "$(r + 3)(s + 3)(t + 3) = -q(0)$",
      "$q(0) = p(-3) = (-3)^3 - 4 \\cdot (-3)^2 + 2 \\cdot (-3) + 9 = -60$",
      "$(r + 3)(s + 3)(t + 3) = 60$"
    ]
  },
  {
    "id": "t236-k3-p13",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $\\dfrac{1}{r - 4} + \\dfrac{1}{s - 4} + \\dfrac{1}{t - 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 + 8x - 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-64/117",
    "solution": [
      "Find $\\dfrac{1}{r - 4} + \\dfrac{1}{s - 4} + \\dfrac{1}{t - 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 + 8x - 6$.",
      "The numbers $r - 4$, $s - 4$ and $t - 4$ are the roots of $q(x) = p(x + 4)$.",
      "$q(x) = (x + 4)^3 + 9(x + 4)^2 + 8(x + 4) - 6$",
      "$q(x) = x^3 + 21x^2 + 128x + 234$",
      "The numbers $\\dfrac{1}{r - 4}$, $\\dfrac{1}{s - 4}$ and $\\dfrac{1}{t - 4}$ are the roots of $234x^3 + 128x^2 + 21x + 1$.",
      "$\\dfrac{1}{r - 4} + \\dfrac{1}{s - 4} + \\dfrac{1}{t - 4} = -\\dfrac{64}{117}$"
    ]
  },
  {
    "id": "t236-k3-p14",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $(r - 3)(s - 3)(t - 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 8x - 4$.",
    "form": "Answer as an integer.",
    "answer": "-35",
    "solution": [
      "Find $(r - 3)(s - 3)(t - 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 8x - 4$.",
      "The numbers $r - 3$, $s - 3$ and $t - 3$ are the roots of the monic cubic $q(x) = p(x + 3)$.",
      "$(r - 3)(s - 3)(t - 3) = -q(0)$",
      "$q(0) = p(3) = 3^3 + 4 \\cdot 3^2 - 8 \\cdot 3 - 4 = 35$",
      "$(r - 3)(s - 3)(t - 3) = -35$"
    ]
  },
  {
    "id": "t236-k4-p01",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 4x - 2$, and write that line right.",
    "given": [
      "$q(x) = p(x - 2)$",
      "$q(x) = (x - 2)^3 - 8(x - 2)^2 - 4(x - 2) - 2$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 - 8x^2 + 32x - 32 - 4x + 8 - 2$",
      "$q(x) = x^3 - 14x^2 + 40x - 34$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: q(x) = (x-2)^3+8*(x-2)^2-4*(x-2)-2",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 4x - 2$, and write that line right.",
      "Line 2 writes $-8(x - 2)^2$ where $p$ has $8x^2$: a sign is lost.",
      "Line 2 written right is $q(x) = (x - 2)^3 + 8(x - 2)^2 - 4(x - 2) - 2$."
    ]
  },
  {
    "id": "t236-k4-p02",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 8x^2 + 2x - 3$, and write that line right.",
    "given": [
      "$q(x) = p(x + 2)$",
      "$q(x) = (x + 2)^3 + 8(x + 2)^2 + 2(x + 2) - 3$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 + 8x^2 + 32x + 32 + 2x + 4 - 3$",
      "$q(x) = x^3 + 14x^2 + 46x + 41$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: q(x) = (x+2)^3-8*(x+2)^2+2*(x+2)-3",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 8x^2 + 2x - 3$, and write that line right.",
      "Line 2 writes $+8(x + 2)^2$ where $p$ has $-8x^2$: a sign is lost.",
      "Line 2 written right is $q(x) = (x + 2)^3 - 8(x + 2)^2 + 2(x + 2) - 3$."
    ]
  },
  {
    "id": "t236-k4-p03",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 - 8x - 3$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x + 2)$",
      "$q(x) = (x + 2)^3 - 4(x + 2)^2 - 8(x + 2) - 3$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 - 4x^2 - 16x - 16 + 8x - 16 - 3$",
      "$q(x) = x^3 + 2x^2 + 4x - 27$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: q(x) = x^3+6*x^2+12*x+8-4*x^2-16*x-16-8*x-16-3",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 - 8x - 3$, and write that line right.",
      "Line 4 writes $8x$ where $-8(x + 2)$ gives $-8x$: a sign is lost.",
      "Line 4 written right is $q(x) = x^3 + 6x^2 + 12x + 8 - 4x^2 - 16x - 16 - 8x - 16 - 3$."
    ]
  },
  {
    "id": "t236-k4-p04",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 8x + 6$, and write that line right.",
    "given": [
      "$q(x) = p(x - 3)$",
      "$q(x) = (x - 3)^3 - 2(x - 3)^2 + 8(x - 3) + 6$",
      "$q(x) = x^3 - 9x^2 + 27x - 27 - 2x^2 + 12x - 18 + 8x - 24 + 6$",
      "$q(x) = x^3 - 11x^2 + 47x - 63$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: q(x) = (x-3)^3+2*(x-3)^2+8*(x-3)+6",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 8x + 6$, and write that line right.",
      "Line 2 writes $-2(x - 3)^2$ where $p$ has $2x^2$: a sign is lost.",
      "Line 2 written right is $q(x) = (x - 3)^3 + 2(x - 3)^2 + 8(x - 3) + 6$."
    ]
  },
  {
    "id": "t236-k4-p05",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 - 4x + 9$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x + 2)$",
      "$q(x) = (x + 2)^3 - 7(x + 2)^2 - 4(x + 2) + 9$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 + 7x^2 - 28x - 28 - 4x - 8 + 9$",
      "$q(x) = x^3 + 13x^2 - 20x - 19$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: q(x) = x^3+6*x^2+12*x+8-7*x^2-28*x-28-4*x-8+9",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 - 4x + 9$, and write that line right.",
      "Line 4 writes $7x^2$ where $-7(x + 2)^2$ gives $-7x^2$: a sign is lost.",
      "Line 4 written right is $q(x) = x^3 + 6x^2 + 12x + 8 - 7x^2 - 28x - 28 - 4x - 8 + 9$."
    ]
  },
  {
    "id": "t236-k4-p06",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 6$, $s + 6$ and $t + 6$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 4x + 7$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x + 6)$",
      "$q(x) = (x + 6)^3 + 6(x + 6)^2 - 4(x + 6) + 7$",
      "$q(x) = x^3 + 18x^2 + 108x + 216 + 6x^2 + 72x + 216 - 4x - 24 + 7$",
      "$q(x) = x^3 + 24x^2 + 176x + 415$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: q(x) = p(x-6)",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 6$, $s + 6$ and $t + 6$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 4x + 7$, and write that line right.",
      "Line 2 replaces $x$ by $x + 6$: the sign of $6$ is lost, and the roots of $p(x + 6)$ are $6$ less than those of $p$.",
      "Line 2 written right is $q(x) = p(x - 6)$."
    ]
  },
  {
    "id": "t236-k4-p07",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 - 5x + 8$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x - 2)$",
      "$q(x) = (x - 2)^3 - 9(x - 2)^2 + 5(x - 2) + 8$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 - 9x^2 + 36x - 36 + 5x - 10 + 8$",
      "$q(x) = x^3 - 15x^2 + 53x - 46$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: q(x) = (x-2)^3-9*(x-2)^2-5*(x-2)+8",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 - 5x + 8$, and write that line right.",
      "Line 3 writes $+5(x - 2)$ where $p$ has $-5x$: a sign is lost.",
      "Line 3 written right is $q(x) = (x - 2)^3 - 9(x - 2)^2 - 5(x - 2) + 8$."
    ]
  },
  {
    "id": "t236-k4-p08",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 9x + 9$, and write that line right.",
    "given": [
      "$q(x) = p(x - 3)$",
      "$q(x) = (x - 3)^3 + 8(x - 3)^2 - 9(x - 3) + 9$",
      "$q(x) = x^3 - 9x^2 + 27x - 27 + 8x^2 + 48x + 72 - 9x + 27 + 9$",
      "$q(x) = x^3 - x^2 + 66x + 81$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: q(x) = x^3-9*x^2+27*x-27+8*x^2-48*x+72-9*x+27+9",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 9x + 9$, and write that line right.",
      "Line 3 writes $48x$ where $8(x - 3)^2$ gives $-48x$: a sign is lost.",
      "Line 3 written right is $q(x) = x^3 - 9x^2 + 27x - 27 + 8x^2 - 48x + 72 - 9x + 27 + 9$."
    ]
  },
  {
    "id": "t236-k4-p09",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 2x + 8$, and write that line right.",
    "given": [
      "$q(x) = p(x - 2)$",
      "$q(x) = (x - 2)^3 - 2(x - 2)^2 - 2(x - 2) + 8$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 - 2x^2 - 8x - 8 - 2x + 4 + 8$",
      "$q(x) = x^3 - 8x^2 + 2x - 4$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: q(x) = x^3-6*x^2+12*x-8-2*x^2+8*x-8-2*x+4+8",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 2x + 8$, and write that line right.",
      "Line 3 writes $-8x$ where $-2(x - 2)^2$ gives $8x$: a sign is lost.",
      "Line 3 written right is $q(x) = x^3 - 6x^2 + 12x - 8 - 2x^2 + 8x - 8 - 2x + 4 + 8$."
    ]
  },
  {
    "id": "t236-k4-p10",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 - 7x + 4$, and write that line right.",
    "given": [
      "$q(x) = p(x - 2)$",
      "$q(x) = (x - 2)^3 - 7(x - 2)^2 - 7(x - 2) + 4$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 - 7x^2 + 28x - 28 - 7x + 14 + 4$",
      "$q(x) = x^3 - 13x^2 + 33x - 18$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: q(x) = p(x+2)",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 - 7x + 4$, and write that line right.",
      "Line 1 replaces $x$ by $x - 2$: the sign of $2$ is lost, and the roots of $p(x - 2)$ are $2$ more than those of $p$.",
      "Line 1 written right is $q(x) = p(x + 2)$."
    ]
  },
  {
    "id": "t236-k4-p11",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 5$, $s - 5$ and $t - 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 5x - 6$, and write that line right.",
    "given": [
      "$q(x) = p(x - 5)$",
      "$q(x) = (x - 5)^3 + 8(x - 5)^2 + 5(x - 5) - 6$",
      "$q(x) = x^3 - 15x^2 + 75x - 125 + 8x^2 - 80x + 200 + 5x - 25 - 6$",
      "$q(x) = x^3 - 7x^2 + 44$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: q(x) = p(x+5)",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 5$, $s - 5$ and $t - 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 5x - 6$, and write that line right.",
      "Line 1 replaces $x$ by $x - 5$: the sign of $5$ is lost, and the roots of $p(x - 5)$ are $5$ more than those of $p$.",
      "Line 1 written right is $q(x) = p(x + 5)$."
    ]
  },
  {
    "id": "t236-k4-p12",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 4$, $s - 4$ and $t - 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 4x - 5$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x - 4)$",
      "$q(x) = (x - 4)^3 - 2(x - 4)^2 - 4(x - 4) - 5$",
      "$q(x) = x^3 - 12x^2 + 48x - 64 - 2x^2 + 16x - 32 - 4x + 16 - 5$",
      "$q(x) = x^3 - 14x^2 + 60x - 85$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: q(x) = p(x+4)",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 4$, $s - 4$ and $t - 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 4x - 5$, and write that line right.",
      "Line 2 replaces $x$ by $x - 4$: the sign of $4$ is lost, and the roots of $p(x - 4)$ are $4$ more than those of $p$.",
      "Line 2 written right is $q(x) = p(x + 4)$."
    ]
  },
  {
    "id": "t236-k4-p13",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 7x + 8$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x + 2)$",
      "$q(x) = (x + 2)^3 + 4(x + 2)^2 + 7(x + 2) + 8$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 + 4x^2 + 16x + 16 + 7x + 14 + 8$",
      "$q(x) = x^3 + 10x^2 + 35x + 46$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: q(x) = (x+2)^3+4*(x+2)^2-7*(x+2)+8",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 4x^2 - 7x + 8$, and write that line right.",
      "Line 3 writes $+7(x + 2)$ where $p$ has $-7x$: a sign is lost.",
      "Line 3 written right is $q(x) = (x + 2)^3 + 4(x + 2)^2 - 7(x + 2) + 8$."
    ]
  },
  {
    "id": "t236-k4-p14",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 9x - 5$, and write that line right.",
    "given": [
      "$p(x) = (x - r)(x - s)(x - t)$",
      "$q(x) = p(x - 2)$",
      "$q(x) = (x - 2)^3 + 6(x - 2)^2 - 9(x - 2) - 5$",
      "$q(x) = x^3 - 6x^2 + 12x - 8 + 6x^2 - 24x + 24 - 9x + 18 - 5$",
      "$q(x) = x^3 - 21x + 29$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: q(x) = p(x+2)",
    "solution": [
      "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 9x - 5$, and write that line right.",
      "Line 2 replaces $x$ by $x - 2$: the sign of $2$ is lost, and the roots of $p(x - 2)$ are $2$ more than those of $p$.",
      "Line 2 written right is $q(x) = p(x + 2)$."
    ]
  },
  {
    "id": "t236-k5-p01",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 6 times the value of $p$ at the number found by taking 4 from $x$ and dividing the result by 7.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 6*p((x-4)/7)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 6 times the value of $p$ at the number found by taking 4 from $x$ and dividing the result by 7.",
      "Taking 4 from $x$ gives $x - 4$.",
      "Dividing the result by 7 gives $\\dfrac{x - 4}{7}$.",
      "The value of $p$ there, 6 times, is $6p\\left(\\dfrac{x - 4}{7}\\right)$.",
      "$q(x) = 6p\\left(\\dfrac{x - 4}{7}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p02",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 2 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 9 by $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 2*x^3*p(9/x)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 2 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 9 by $x$.",
      "Dividing 9 by $x$ gives $\\dfrac{9}{x}$, and the value of $p$ there is $p\\left(\\dfrac{9}{x}\\right)$.",
      "2 times the third power of $x$ is $2x^3$.",
      "Multiplied by the value of $p$, that is $2x^3p\\left(\\dfrac{9}{x}\\right)$.",
      "$q(x) = 2x^3p\\left(\\dfrac{9}{x}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p03",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 7 times the value of $p$ at the number found by taking 16 from $x$ and dividing the result by 5.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 7*p((x-16)/5)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 7 times the value of $p$ at the number found by taking 16 from $x$ and dividing the result by 5.",
      "Taking 16 from $x$ gives $x - 16$.",
      "Dividing the result by 5 gives $\\dfrac{x - 16}{5}$.",
      "The value of $p$ there, 7 times, is $7p\\left(\\dfrac{x - 16}{5}\\right)$.",
      "$q(x) = 7p\\left(\\dfrac{x - 16}{5}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p04",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 22 times the value of $p$ at the number 16 less than $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 22*p(x-16)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 22 times the value of $p$ at the number 16 less than $x$.",
      "The number 16 less than $x$ is $x - 16$.",
      "The value of $p$ there is $p(x - 16)$.",
      "22 times that is $22p(x - 16)$.",
      "$q(x) = 22p(x - 16)$"
    ]
  },
  {
    "id": "t236-k5-p05",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 20 times the value of $p$ at the number 12 less than $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 20*p(x-12)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 20 times the value of $p$ at the number 12 less than $x$.",
      "The number 12 less than $x$ is $x - 12$.",
      "The value of $p$ there is $p(x - 12)$.",
      "20 times that is $20p(x - 12)$.",
      "$q(x) = 20p(x - 12)$"
    ]
  },
  {
    "id": "t236-k5-p06",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 20 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 4 by $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 20*x^3*p(4/x)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 20 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 4 by $x$.",
      "Dividing 4 by $x$ gives $\\dfrac{4}{x}$, and the value of $p$ there is $p\\left(\\dfrac{4}{x}\\right)$.",
      "20 times the third power of $x$ is $20x^3$.",
      "Multiplied by the value of $p$, that is $20x^3p\\left(\\dfrac{4}{x}\\right)$.",
      "$q(x) = 20x^3p\\left(\\dfrac{4}{x}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p07",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 29 times the value of $p$ at the number 4 less than $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 29*p(x-4)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 29 times the value of $p$ at the number 4 less than $x$.",
      "The number 4 less than $x$ is $x - 4$.",
      "The value of $p$ there is $p(x - 4)$.",
      "29 times that is $29p(x - 4)$.",
      "$q(x) = 29p(x - 4)$"
    ]
  },
  {
    "id": "t236-k5-p08",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 19 times the value of $p$ at the number found by taking 25 from $x$ and dividing the result by 2.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 19*p((x-25)/2)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 19 times the value of $p$ at the number found by taking 25 from $x$ and dividing the result by 2.",
      "Taking 25 from $x$ gives $x - 25$.",
      "Dividing the result by 2 gives $\\dfrac{x - 25}{2}$.",
      "The value of $p$ there, 19 times, is $19p\\left(\\dfrac{x - 25}{2}\\right)$.",
      "$q(x) = 19p\\left(\\dfrac{x - 25}{2}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p09",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 33 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 20 by $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 33*x^3*p(20/x)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 33 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 20 by $x$.",
      "Dividing 20 by $x$ gives $\\dfrac{20}{x}$, and the value of $p$ there is $p\\left(\\dfrac{20}{x}\\right)$.",
      "33 times the third power of $x$ is $33x^3$.",
      "Multiplied by the value of $p$, that is $33x^3p\\left(\\dfrac{20}{x}\\right)$.",
      "$q(x) = 33x^3p\\left(\\dfrac{20}{x}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p10",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 4 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 14 by $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 4*x^3*p(14/x)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 4 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 14 by $x$.",
      "Dividing 14 by $x$ gives $\\dfrac{14}{x}$, and the value of $p$ there is $p\\left(\\dfrac{14}{x}\\right)$.",
      "4 times the third power of $x$ is $4x^3$.",
      "Multiplied by the value of $p$, that is $4x^3p\\left(\\dfrac{14}{x}\\right)$.",
      "$q(x) = 4x^3p\\left(\\dfrac{14}{x}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p11",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 17 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 17 by $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 17*x^3*p(17/x)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 17 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 17 by $x$.",
      "Dividing 17 by $x$ gives $\\dfrac{17}{x}$, and the value of $p$ there is $p\\left(\\dfrac{17}{x}\\right)$.",
      "17 times the third power of $x$ is $17x^3$.",
      "Multiplied by the value of $p$, that is $17x^3p\\left(\\dfrac{17}{x}\\right)$.",
      "$q(x) = 17x^3p\\left(\\dfrac{17}{x}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p12",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 3 times the value of $p$ at the number found by taking 2 from $x$ and dividing the result by 9.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 3*p((x-2)/9)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 3 times the value of $p$ at the number found by taking 2 from $x$ and dividing the result by 9.",
      "Taking 2 from $x$ gives $x - 2$.",
      "Dividing the result by 9 gives $\\dfrac{x - 2}{9}$.",
      "The value of $p$ there, 3 times, is $3p\\left(\\dfrac{x - 2}{9}\\right)$.",
      "$q(x) = 3p\\left(\\dfrac{x - 2}{9}\\right)$"
    ]
  },
  {
    "id": "t236-k5-p13",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 23 times the value of $p$ at the number 5 less than $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 23*p(x-5)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 23 times the value of $p$ at the number 5 less than $x$.",
      "The number 5 less than $x$ is $x - 5$.",
      "The value of $p$ there is $p(x - 5)$.",
      "23 times that is $23p(x - 5)$.",
      "$q(x) = 23p(x - 5)$"
    ]
  },
  {
    "id": "t236-k5-p14",
    "topic": "polynomials-with-transformed-roots",
    "kind": "t236-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 19 times the value of $p$ at the number 6 less than $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "q(x) = 19*p(x-6)",
    "solution": [
      "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 19 times the value of $p$ at the number 6 less than $x$.",
      "The number 6 less than $x$ is $x - 6$.",
      "The value of $p$ there is $p(x - 6)$.",
      "19 times that is $19p(x - 6)$.",
      "$q(x) = 19p(x - 6)$"
    ]
  }
]
