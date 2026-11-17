export default [
  {
    "id": "t218-k1-p01",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -5x^3 - 6x - 3$ is monotonically decreasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = -5x^3 - 6x - 3$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-5(x + c)^3 - 6(x + c) - 3\\right) - \\left(-5x^3 - 6x - 3\\right)$.",
      "$f(x + c) - f(x) = -15cx^2 - 15c^2x - 5c^3 - 6c$",
      "$f(x + c) - f(x) = c\\left(-15x^2 - 15cx - 5c^2 - 6\\right)$",
      "$-15x^2 - 15cx - 5c^2 - 6 = -15\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{5c^2}{4} - 6$",
      "For every $x$ and every $c > 0$ the bracket is negative.",
      "So $f(x + c) - f(x) < 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically decreasing."
    ]
  },
  {
    "id": "t218-k1-p02",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 8x^3 + 3x - 6$ is monotonically decreasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 8x^3 + 3x - 6$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(8(x + c)^3 + 3(x + c) - 6\\right) - \\left(8x^3 + 3x - 6\\right)$.",
      "$f(x + c) - f(x) = 24cx^2 + 24c^2x + 8c^3 + 3c$",
      "$f(x + c) - f(x) = c\\left(24x^2 + 24cx + 8c^2 + 3\\right)$",
      "$24x^2 + 24cx + 8c^2 + 3 = 24\\left(x + \\dfrac{c}{2}\\right)^2 + 2c^2 + 3$",
      "For every $x$ and every $c > 0$ the bracket is positive.",
      "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
      "No: $f$ is monotonically increasing, so a greater input gives a greater output."
    ]
  },
  {
    "id": "t218-k1-p03",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -2x^3 + 8x - 11$ is monotonically decreasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = -2x^3 + 8x - 11$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-2(x + c)^3 + 8(x + c) - 11\\right) - \\left(-2x^3 + 8x - 11\\right)$.",
      "$f(x + c) - f(x) = -6cx^2 - 6c^2x - 2c^3 + 8c$",
      "$f(x + c) - f(x) = c\\left(-6x^2 - 6cx - 2c^2 + 8\\right)$",
      "$-6x^2 - 6cx - 2c^2 + 8 = -6\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{c^2}{2} + 8$",
      "At $x = 0$ the bracket is $-2c^2 + 8$, which is $0$ at $c = 2$.",
      "So $f(2) - f(0) = 0$: the inputs $0$ and $2$ give the same output, $-11$.",
      "No: the greater input $2$ does not give a smaller output than the input $0$."
    ]
  },
  {
    "id": "t218-k1-p04",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 5x^3 + 3x - 2$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 5x^3 + 3x - 2$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(5(x + c)^3 + 3(x + c) - 2\\right) - \\left(5x^3 + 3x - 2\\right)$.",
      "$f(x + c) - f(x) = 15cx^2 + 15c^2x + 5c^3 + 3c$",
      "$f(x + c) - f(x) = c\\left(15x^2 + 15cx + 5c^2 + 3\\right)$",
      "$15x^2 + 15cx + 5c^2 + 3 = 15\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{5c^2}{4} + 3$",
      "For every $x$ and every $c > 0$ the bracket is positive.",
      "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically increasing."
    ]
  },
  {
    "id": "t218-k1-p05",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -3x^3 - 10x + 2$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = -3x^3 - 10x + 2$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-3(x + c)^3 - 10(x + c) + 2\\right) - \\left(-3x^3 - 10x + 2\\right)$.",
      "$f(x + c) - f(x) = -9cx^2 - 9c^2x - 3c^3 - 10c$",
      "$f(x + c) - f(x) = c\\left(-9x^2 - 9cx - 3c^2 - 10\\right)$",
      "$-9x^2 - 9cx - 3c^2 - 10 = -9\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{3c^2}{4} - 10$",
      "For every $x$ and every $c > 0$ the bracket is negative.",
      "So $f(x + c) - f(x) < 0$ for every $x$ and every $c > 0$.",
      "No: $f$ is monotonically decreasing, so a greater input gives a smaller output."
    ]
  },
  {
    "id": "t218-k1-p06",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 3x^3 - 27x + 4$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 3x^3 - 27x + 4$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(3(x + c)^3 - 27(x + c) + 4\\right) - \\left(3x^3 - 27x + 4\\right)$.",
      "$f(x + c) - f(x) = 9cx^2 + 9c^2x + 3c^3 - 27c$",
      "$f(x + c) - f(x) = c\\left(9x^2 + 9cx + 3c^2 - 27\\right)$",
      "$9x^2 + 9cx + 3c^2 - 27 = 9\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{3c^2}{4} - 27$",
      "At $x = 0$ the bracket is $3c^2 - 27$, which is $0$ at $c = 3$.",
      "So $f(3) - f(0) = 0$: the inputs $0$ and $3$ give the same output, $4$.",
      "No: the greater input $3$ does not give a greater output than the input $0$."
    ]
  },
  {
    "id": "t218-k1-p07",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 4x^3 - 36x - 9$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 4x^3 - 36x - 9$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(4(x + c)^3 - 36(x + c) - 9\\right) - \\left(4x^3 - 36x - 9\\right)$.",
      "$f(x + c) - f(x) = 12cx^2 + 12c^2x + 4c^3 - 36c$",
      "$f(x + c) - f(x) = c\\left(12x^2 + 12cx + 4c^2 - 36\\right)$",
      "$12x^2 + 12cx + 4c^2 - 36 = 12\\left(x + \\dfrac{c}{2}\\right)^2 + c^2 - 36$",
      "At $x = 0$ the bracket is $4c^2 - 36$, which is $0$ at $c = 3$.",
      "So $f(3) - f(0) = 0$: the inputs $0$ and $3$ give the same output, $-9$.",
      "No: the greater input $3$ does not give a greater output than the input $0$."
    ]
  },
  {
    "id": "t218-k1-p08",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -4x^3 - 3x + 9$ is monotonically decreasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = -4x^3 - 3x + 9$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-4(x + c)^3 - 3(x + c) + 9\\right) - \\left(-4x^3 - 3x + 9\\right)$.",
      "$f(x + c) - f(x) = -12cx^2 - 12c^2x - 4c^3 - 3c$",
      "$f(x + c) - f(x) = c\\left(-12x^2 - 12cx - 4c^2 - 3\\right)$",
      "$-12x^2 - 12cx - 4c^2 - 3 = -12\\left(x + \\dfrac{c}{2}\\right)^2 - c^2 - 3$",
      "For every $x$ and every $c > 0$ the bracket is negative.",
      "So $f(x + c) - f(x) < 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically decreasing."
    ]
  },
  {
    "id": "t218-k1-p09",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 3x^3 + 8x - 5$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 3x^3 + 8x - 5$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(3(x + c)^3 + 8(x + c) - 5\\right) - \\left(3x^3 + 8x - 5\\right)$.",
      "$f(x + c) - f(x) = 9cx^2 + 9c^2x + 3c^3 + 8c$",
      "$f(x + c) - f(x) = c\\left(9x^2 + 9cx + 3c^2 + 8\\right)$",
      "$9x^2 + 9cx + 3c^2 + 8 = 9\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{3c^2}{4} + 8$",
      "For every $x$ and every $c > 0$ the bracket is positive.",
      "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically increasing."
    ]
  },
  {
    "id": "t218-k1-p10",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 7x^3 + 2x - 8$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 7x^3 + 2x - 8$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(7(x + c)^3 + 2(x + c) - 8\\right) - \\left(7x^3 + 2x - 8\\right)$.",
      "$f(x + c) - f(x) = 21cx^2 + 21c^2x + 7c^3 + 2c$",
      "$f(x + c) - f(x) = c\\left(21x^2 + 21cx + 7c^2 + 2\\right)$",
      "$21x^2 + 21cx + 7c^2 + 2 = 21\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{7c^2}{4} + 2$",
      "For every $x$ and every $c > 0$ the bracket is positive.",
      "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically increasing."
    ]
  },
  {
    "id": "t218-k1-p11",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -6x^3 - 5x + 4$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = -6x^3 - 5x + 4$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-6(x + c)^3 - 5(x + c) + 4\\right) - \\left(-6x^3 - 5x + 4\\right)$.",
      "$f(x + c) - f(x) = -18cx^2 - 18c^2x - 6c^3 - 5c$",
      "$f(x + c) - f(x) = c\\left(-18x^2 - 18cx - 6c^2 - 5\\right)$",
      "$-18x^2 - 18cx - 6c^2 - 5 = -18\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{3c^2}{2} - 5$",
      "For every $x$ and every $c > 0$ the bracket is negative.",
      "So $f(x + c) - f(x) < 0$ for every $x$ and every $c > 0$.",
      "No: $f$ is monotonically decreasing, so a greater input gives a smaller output."
    ]
  },
  {
    "id": "t218-k1-p12",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -2x^3 - 9x + 4$ is monotonically decreasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = -2x^3 - 9x + 4$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-2(x + c)^3 - 9(x + c) + 4\\right) - \\left(-2x^3 - 9x + 4\\right)$.",
      "$f(x + c) - f(x) = -6cx^2 - 6c^2x - 2c^3 - 9c$",
      "$f(x + c) - f(x) = c\\left(-6x^2 - 6cx - 2c^2 - 9\\right)$",
      "$-6x^2 - 6cx - 2c^2 - 9 = -6\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{c^2}{2} - 9$",
      "For every $x$ and every $c > 0$ the bracket is negative.",
      "So $f(x + c) - f(x) < 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically decreasing."
    ]
  },
  {
    "id": "t218-k1-p13",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = -5x^3 + 5x + 6$ is monotonically decreasing.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = -5x^3 + 5x + 6$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-5(x + c)^3 + 5(x + c) + 6\\right) - \\left(-5x^3 + 5x + 6\\right)$.",
      "$f(x + c) - f(x) = -15cx^2 - 15c^2x - 5c^3 + 5c$",
      "$f(x + c) - f(x) = c\\left(-15x^2 - 15cx - 5c^2 + 5\\right)$",
      "$-15x^2 - 15cx - 5c^2 + 5 = -15\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{5c^2}{4} + 5$",
      "At $x = 0$ the bracket is $-5c^2 + 5$, which is $0$ at $c = 1$.",
      "So $f(1) - f(0) = 0$: the inputs $0$ and $1$ give the same output, $6$.",
      "No: the greater input $1$ does not give a smaller output than the input $0$."
    ]
  },
  {
    "id": "t218-k1-p14",
    "topic": "monotonic-functions",
    "kind": "t218-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 6x^3 + 11x + 2$ is monotonically increasing.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 6x^3 + 11x + 2$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(6(x + c)^3 + 11(x + c) + 2\\right) - \\left(6x^3 + 11x + 2\\right)$.",
      "$f(x + c) - f(x) = 18cx^2 + 18c^2x + 6c^3 + 11c$",
      "$f(x + c) - f(x) = c\\left(18x^2 + 18cx + 6c^2 + 11\\right)$",
      "$18x^2 + 18cx + 6c^2 + 11 = 18\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{3c^2}{2} + 11$",
      "For every $x$ and every $c > 0$ the bracket is positive.",
      "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
      "Yes: $f$ is monotonically increasing."
    ]
  },
  {
    "id": "t218-k2-p01",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -6x^2 - 42x + 8$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-inf, -7/2]",
    "solution": [
      "Find the largest interval on which $f(x) = -6x^2 - 42x + 8$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-6(x + c)^2 - 42(x + c) + 8\\right) - \\left(-6x^2 - 42x + 8\\right)$.",
      "$f(x + c) - f(x) = -12cx - 6c^2 - 42c$",
      "$f(x + c) - f(x) = c(-12x - 6c - 42)$",
      "$-12x - 6c - 42 = -6\\left(x + \\dfrac{7}{2}\\right) - 6\\left(x + c + \\dfrac{7}{2}\\right)$",
      "For $x \\ge -\\dfrac{7}{2}$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le -\\dfrac{7}{2}$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $(-\\infty, -\\dfrac{7}{2}]$."
    ]
  },
  {
    "id": "t218-k2-p02",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 6x^2 + 30x - 7$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[-5/2, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = 6x^2 + 30x - 7$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(6(x + c)^2 + 30(x + c) - 7\\right) - \\left(6x^2 + 30x - 7\\right)$.",
      "$f(x + c) - f(x) = 12cx + 6c^2 + 30c$",
      "$f(x + c) - f(x) = c(12x + 6c + 30)$",
      "$12x + 6c + 30 = 6\\left(x + \\dfrac{5}{2}\\right) + 6\\left(x + c + \\dfrac{5}{2}\\right)$",
      "For $x \\ge -\\dfrac{5}{2}$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le -\\dfrac{5}{2}$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $[-\\dfrac{5}{2}, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p03",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -3x^2 + 33x + 7$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-inf, 11/2]",
    "solution": [
      "Find the largest interval on which $f(x) = -3x^2 + 33x + 7$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-3(x + c)^2 + 33(x + c) + 7\\right) - \\left(-3x^2 + 33x + 7\\right)$.",
      "$f(x + c) - f(x) = -6cx - 3c^2 + 33c$",
      "$f(x + c) - f(x) = c(-6x - 3c + 33)$",
      "$-6x - 3c + 33 = -3\\left(x - \\dfrac{11}{2}\\right) - 3\\left(x + c - \\dfrac{11}{2}\\right)$",
      "For $x \\ge \\dfrac{11}{2}$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le \\dfrac{11}{2}$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $(-\\infty, \\dfrac{11}{2}]$."
    ]
  },
  {
    "id": "t218-k2-p04",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 8x^2 - 24x - 5$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[3/2, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = 8x^2 - 24x - 5$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(8(x + c)^2 - 24(x + c) - 5\\right) - \\left(8x^2 - 24x - 5\\right)$.",
      "$f(x + c) - f(x) = 16cx + 8c^2 - 24c$",
      "$f(x + c) - f(x) = c(16x + 8c - 24)$",
      "$16x + 8c - 24 = 8\\left(x - \\dfrac{3}{2}\\right) + 8\\left(x + c - \\dfrac{3}{2}\\right)$",
      "For $x \\ge \\dfrac{3}{2}$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le \\dfrac{3}{2}$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $[\\dfrac{3}{2}, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p05",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 5x^2 - 40x - 6$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-inf, 4]",
    "solution": [
      "Find the largest interval on which $f(x) = 5x^2 - 40x - 6$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(5(x + c)^2 - 40(x + c) - 6\\right) - \\left(5x^2 - 40x - 6\\right)$.",
      "$f(x + c) - f(x) = 10cx + 5c^2 - 40c$",
      "$f(x + c) - f(x) = c(10x + 5c - 40)$",
      "$10x + 5c - 40 = 5\\left(x - 4\\right) + 5\\left(x + c - 4\\right)$",
      "For $x \\ge 4$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le 4$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $(-\\infty, 4]$."
    ]
  },
  {
    "id": "t218-k2-p06",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 7x^2 + 14x + 3$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[-1, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = 7x^2 + 14x + 3$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(7(x + c)^2 + 14(x + c) + 3\\right) - \\left(7x^2 + 14x + 3\\right)$.",
      "$f(x + c) - f(x) = 14cx + 7c^2 + 14c$",
      "$f(x + c) - f(x) = c(14x + 7c + 14)$",
      "$14x + 7c + 14 = 7\\left(x + 1\\right) + 7\\left(x + c + 1\\right)$",
      "For $x \\ge -1$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le -1$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $[-1, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p07",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -5x^2 - 15x + 9$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[-3/2, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = -5x^2 - 15x + 9$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-5(x + c)^2 - 15(x + c) + 9\\right) - \\left(-5x^2 - 15x + 9\\right)$.",
      "$f(x + c) - f(x) = -10cx - 5c^2 - 15c$",
      "$f(x + c) - f(x) = c(-10x - 5c - 15)$",
      "$-10x - 5c - 15 = -5\\left(x + \\dfrac{3}{2}\\right) - 5\\left(x + c + \\dfrac{3}{2}\\right)$",
      "For $x \\ge -\\dfrac{3}{2}$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le -\\dfrac{3}{2}$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $[-\\dfrac{3}{2}, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p08",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -2x^2 + 10x - 9$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[5/2, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = -2x^2 + 10x - 9$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-2(x + c)^2 + 10(x + c) - 9\\right) - \\left(-2x^2 + 10x - 9\\right)$.",
      "$f(x + c) - f(x) = -4cx - 2c^2 + 10c$",
      "$f(x + c) - f(x) = c(-4x - 2c + 10)$",
      "$-4x - 2c + 10 = -2\\left(x - \\dfrac{5}{2}\\right) - 2\\left(x + c - \\dfrac{5}{2}\\right)$",
      "For $x \\ge \\dfrac{5}{2}$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le \\dfrac{5}{2}$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $[\\dfrac{5}{2}, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p09",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -3x^2 - 24x + 4$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[-4, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = -3x^2 - 24x + 4$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-3(x + c)^2 - 24(x + c) + 4\\right) - \\left(-3x^2 - 24x + 4\\right)$.",
      "$f(x + c) - f(x) = -6cx - 3c^2 - 24c$",
      "$f(x + c) - f(x) = c(-6x - 3c - 24)$",
      "$-6x - 3c - 24 = -3\\left(x + 4\\right) - 3\\left(x + c + 4\\right)$",
      "For $x \\ge -4$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le -4$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $[-4, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p10",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 3x^2 + 27x - 4$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-inf, -9/2]",
    "solution": [
      "Find the largest interval on which $f(x) = 3x^2 + 27x - 4$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(3(x + c)^2 + 27(x + c) - 4\\right) - \\left(3x^2 + 27x - 4\\right)$.",
      "$f(x + c) - f(x) = 6cx + 3c^2 + 27c$",
      "$f(x + c) - f(x) = c(6x + 3c + 27)$",
      "$6x + 3c + 27 = 3\\left(x + \\dfrac{9}{2}\\right) + 3\\left(x + c + \\dfrac{9}{2}\\right)$",
      "For $x \\ge -\\dfrac{9}{2}$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le -\\dfrac{9}{2}$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $(-\\infty, -\\dfrac{9}{2}]$."
    ]
  },
  {
    "id": "t218-k2-p11",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 2x^2 + 22x - 8$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-inf, -11/2]",
    "solution": [
      "Find the largest interval on which $f(x) = 2x^2 + 22x - 8$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(2(x + c)^2 + 22(x + c) - 8\\right) - \\left(2x^2 + 22x - 8\\right)$.",
      "$f(x + c) - f(x) = 4cx + 2c^2 + 22c$",
      "$f(x + c) - f(x) = c(4x + 2c + 22)$",
      "$4x + 2c + 22 = 2\\left(x + \\dfrac{11}{2}\\right) + 2\\left(x + c + \\dfrac{11}{2}\\right)$",
      "For $x \\ge -\\dfrac{11}{2}$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le -\\dfrac{11}{2}$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $(-\\infty, -\\dfrac{11}{2}]$."
    ]
  },
  {
    "id": "t218-k2-p12",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -7x^2 - 28x + 6$ is monotonically decreasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[-2, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = -7x^2 - 28x + 6$ is monotonically decreasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-7(x + c)^2 - 28(x + c) + 6\\right) - \\left(-7x^2 - 28x + 6\\right)$.",
      "$f(x + c) - f(x) = -14cx - 7c^2 - 28c$",
      "$f(x + c) - f(x) = c(-14x - 7c - 28)$",
      "$-14x - 7c - 28 = -7\\left(x + 2\\right) - 7\\left(x + c + 2\\right)$",
      "For $x \\ge -2$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le -2$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $[-2, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p13",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = 2x^2 - 14x + 9$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "[7/2, inf)",
    "solution": [
      "Find the largest interval on which $f(x) = 2x^2 - 14x + 9$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(2(x + c)^2 - 14(x + c) + 9\\right) - \\left(2x^2 - 14x + 9\\right)$.",
      "$f(x + c) - f(x) = 4cx + 2c^2 - 14c$",
      "$f(x + c) - f(x) = c(4x + 2c - 14)$",
      "$4x + 2c - 14 = 2\\left(x - \\dfrac{7}{2}\\right) + 2\\left(x + c - \\dfrac{7}{2}\\right)$",
      "For $x \\ge \\dfrac{7}{2}$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
      "For $x + c \\le \\dfrac{7}{2}$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
      "The largest interval is $[\\dfrac{7}{2}, \\infty)$."
    ]
  },
  {
    "id": "t218-k2-p14",
    "topic": "monotonic-functions",
    "kind": "t218-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the largest interval on which $f(x) = -4x^2 + 36x + 5$ is monotonically increasing.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-inf, 9/2]",
    "solution": [
      "Find the largest interval on which $f(x) = -4x^2 + 36x + 5$ is monotonically increasing.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-4(x + c)^2 + 36(x + c) + 5\\right) - \\left(-4x^2 + 36x + 5\\right)$.",
      "$f(x + c) - f(x) = -8cx - 4c^2 + 36c$",
      "$f(x + c) - f(x) = c(-8x - 4c + 36)$",
      "$-8x - 4c + 36 = -4\\left(x - \\dfrac{9}{2}\\right) - 4\\left(x + c - \\dfrac{9}{2}\\right)$",
      "For $x \\ge \\dfrac{9}{2}$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
      "For $x + c \\le \\dfrac{9}{2}$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
      "The largest interval is $(-\\infty, \\dfrac{9}{2}]$."
    ]
  },
  {
    "id": "t218-k3-p01",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least value of $\\sqrt{3x - 12} + \\sqrt{5x + 44}$.",
    "form": "Answer as an integer.",
    "answer": "8",
    "solution": [
      "Find the least value of $\\sqrt{3x - 12} + \\sqrt{5x + 44}$.",
      "Both roots are defined exactly when $x \\ge 4$.",
      "For numbers $a > b \\ge 4$, $\\sqrt{3a - 12} > \\sqrt{3b - 12}$ and $\\sqrt{5a + 44} > \\sqrt{5b + 44}$.",
      "So $\\sqrt{3a - 12} + \\sqrt{5a + 44} > \\sqrt{3b - 12} + \\sqrt{5b + 44}$.",
      "So the sum is monotonically increasing on $x \\ge 4$, and its least value is at $x = 4$.",
      "The least value is $\\sqrt{0} + \\sqrt{64} = 8$."
    ]
  },
  {
    "id": "t218-k3-p02",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the greatest value of $\\log_{2}{(-3x^2 - 12x + 52)}$.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find the greatest value of $\\log_{2}{(-3x^2 - 12x + 52)}$.",
      "$-3x^2 - 12x + 52 = -3(x + 2)^2 + 64$",
      "The greatest value of $-3x^2 - 12x + 52$ is $64$, at $x = -2$, and the logarithm is defined wherever the quadratic is positive.",
      "So the greatest value of the logarithm is at $x = -2$.",
      "The greatest value is $\\log_{2}{64} = 6$."
    ]
  },
  {
    "id": "t218-k3-p03",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least value of $\\sqrt{x + 6} + \\sqrt{2x + 93}$.",
    "form": "Answer as an integer.",
    "answer": "9",
    "solution": [
      "Find the least value of $\\sqrt{x + 6} + \\sqrt{2x + 93}$.",
      "Both roots are defined exactly when $x \\ge -6$.",
      "For numbers $a > b \\ge -6$, $\\sqrt{a + 6} > \\sqrt{b + 6}$ and $\\sqrt{2a + 93} > \\sqrt{2b + 93}$.",
      "So $\\sqrt{a + 6} + \\sqrt{2a + 93} > \\sqrt{b + 6} + \\sqrt{2b + 93}$.",
      "So the sum is monotonically increasing on $x \\ge -6$, and its least value is at $x = -6$.",
      "The least value is $\\sqrt{0} + \\sqrt{81} = 9$."
    ]
  },
  {
    "id": "t218-k3-p04",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $\\log_{3}{(x^3 + 10x^2 + 55x + 186)} - \\log_{3}{(x + 6)}$.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the least value of $\\log_{3}{(x^3 + 10x^2 + 55x + 186)} - \\log_{3}{(x + 6)}$.",
      "$\\log_{3}{(x^3 + 10x^2 + 55x + 186)} - \\log_{3}{(x + 6)} = \\log_{3}{\\dfrac{x^3 + 10x^2 + 55x + 186}{x + 6}}$",
      "$\\dfrac{x^3 + 10x^2 + 55x + 186}{x + 6} = x^2 + 4x + 31$",
      "$x^2 + 4x + 31 = (x + 2)^2 + 27$",
      "The least value of $x^2 + 4x + 31$ is $27$, at $x = -2$, and every value of it is positive.",
      "Both logarithms are defined exactly when $x > -6$, and $x = -2$ is such a number.",
      "So the least value of the difference is at $x = -2$.",
      "The least value is $\\log_{3}{27} = 3$."
    ]
  },
  {
    "id": "t218-k3-p05",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least value of $\\log_{2}{(x^2 + 8x + 32)}$.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find the least value of $\\log_{2}{(x^2 + 8x + 32)}$.",
      "$x^2 + 8x + 32 = (x + 4)^2 + 16$",
      "The least value of $x^2 + 8x + 32$ is $16$, at $x = -4$, and every value of it is positive.",
      "So the least value of the logarithm is at $x = -4$.",
      "The least value is $\\log_{2}{16} = 4$."
    ]
  },
  {
    "id": "t218-k3-p06",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least value of $\\sqrt{5x - 10} + \\sqrt{3x - 2}$.",
    "form": "Answer as an integer.",
    "answer": "2",
    "solution": [
      "Find the least value of $\\sqrt{5x - 10} + \\sqrt{3x - 2}$.",
      "Both roots are defined exactly when $x \\ge 2$.",
      "For numbers $a > b \\ge 2$, $\\sqrt{5a - 10} > \\sqrt{5b - 10}$ and $\\sqrt{3a - 2} > \\sqrt{3b - 2}$.",
      "So $\\sqrt{5a - 10} + \\sqrt{3a - 2} > \\sqrt{5b - 10} + \\sqrt{3b - 2}$.",
      "So the sum is monotonically increasing on $x \\ge 2$, and its least value is at $x = 2$.",
      "The least value is $\\sqrt{0} + \\sqrt{4} = 2$."
    ]
  },
  {
    "id": "t218-k3-p07",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the greatest value of $\\sqrt{x + 100} - \\sqrt{x - 21}$.",
    "form": "Answer as an integer.",
    "answer": "11",
    "solution": [
      "Find the greatest value of $\\sqrt{x + 100} - \\sqrt{x - 21}$.",
      "Both roots are defined exactly when $x \\ge 21$.",
      "$\\sqrt{x + 100} - \\sqrt{x - 21} = \\dfrac{(x + 100) - (x - 21)}{\\sqrt{x + 100} + \\sqrt{x - 21}}$",
      "$\\sqrt{x + 100} - \\sqrt{x - 21} = \\dfrac{121}{\\sqrt{x + 100} + \\sqrt{x - 21}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 21$.",
      "So the fraction is monotonically decreasing on $x \\ge 21$.",
      "The greatest value is at the least input, $x = 21$.",
      "The greatest value is $\\dfrac{121}{\\sqrt{121} + \\sqrt{0}} = 11$."
    ]
  },
  {
    "id": "t218-k3-p08",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the greatest value of $\\sqrt{x + 90} - \\sqrt{x - 54}$.",
    "form": "Answer as an integer.",
    "answer": "12",
    "solution": [
      "Find the greatest value of $\\sqrt{x + 90} - \\sqrt{x - 54}$.",
      "Both roots are defined exactly when $x \\ge 54$.",
      "$\\sqrt{x + 90} - \\sqrt{x - 54} = \\dfrac{(x + 90) - (x - 54)}{\\sqrt{x + 90} + \\sqrt{x - 54}}$",
      "$\\sqrt{x + 90} - \\sqrt{x - 54} = \\dfrac{144}{\\sqrt{x + 90} + \\sqrt{x - 54}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 54$.",
      "So the fraction is monotonically decreasing on $x \\ge 54$.",
      "The greatest value is at the least input, $x = 54$.",
      "The greatest value is $\\dfrac{144}{\\sqrt{144} + \\sqrt{0}} = 12$."
    ]
  },
  {
    "id": "t218-k3-p09",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the greatest value of $\\sqrt{x + 150} - \\sqrt{x - 46}$.",
    "form": "Answer as an integer.",
    "answer": "14",
    "solution": [
      "Find the greatest value of $\\sqrt{x + 150} - \\sqrt{x - 46}$.",
      "Both roots are defined exactly when $x \\ge 46$.",
      "$\\sqrt{x + 150} - \\sqrt{x - 46} = \\dfrac{(x + 150) - (x - 46)}{\\sqrt{x + 150} + \\sqrt{x - 46}}$",
      "$\\sqrt{x + 150} - \\sqrt{x - 46} = \\dfrac{196}{\\sqrt{x + 150} + \\sqrt{x - 46}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 46$.",
      "So the fraction is monotonically decreasing on $x \\ge 46$.",
      "The greatest value is at the least input, $x = 46$.",
      "The greatest value is $\\dfrac{196}{\\sqrt{196} + \\sqrt{0}} = 14$."
    ]
  },
  {
    "id": "t218-k3-p10",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $\\log_{10}{(x^3 - 6x^2 + 37x + 1192)} - \\log_{10}{(x + 8)}$.",
    "form": "Answer as an integer.",
    "answer": "2",
    "solution": [
      "Find the least value of $\\log_{10}{(x^3 - 6x^2 + 37x + 1192)} - \\log_{10}{(x + 8)}$.",
      "$\\log_{10}{(x^3 - 6x^2 + 37x + 1192)} - \\log_{10}{(x + 8)} = \\log_{10}{\\dfrac{x^3 - 6x^2 + 37x + 1192}{x + 8}}$",
      "$\\dfrac{x^3 - 6x^2 + 37x + 1192}{x + 8} = x^2 - 14x + 149$",
      "$x^2 - 14x + 149 = (x - 7)^2 + 100$",
      "The least value of $x^2 - 14x + 149$ is $100$, at $x = 7$, and every value of it is positive.",
      "Both logarithms are defined exactly when $x > -8$, and $x = 7$ is such a number.",
      "So the least value of the difference is at $x = 7$.",
      "The least value is $\\log_{10}{100} = 2$."
    ]
  },
  {
    "id": "t218-k3-p11",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the greatest value of $\\sqrt{x + 69} - \\sqrt{x - 100}$.",
    "form": "Answer as an integer.",
    "answer": "13",
    "solution": [
      "Find the greatest value of $\\sqrt{x + 69} - \\sqrt{x - 100}$.",
      "Both roots are defined exactly when $x \\ge 100$.",
      "$\\sqrt{x + 69} - \\sqrt{x - 100} = \\dfrac{(x + 69) - (x - 100)}{\\sqrt{x + 69} + \\sqrt{x - 100}}$",
      "$\\sqrt{x + 69} - \\sqrt{x - 100} = \\dfrac{169}{\\sqrt{x + 69} + \\sqrt{x - 100}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 100$.",
      "So the fraction is monotonically decreasing on $x \\ge 100$.",
      "The greatest value is at the least input, $x = 100$.",
      "The greatest value is $\\dfrac{169}{\\sqrt{169} + \\sqrt{0}} = 13$."
    ]
  },
  {
    "id": "t218-k3-p12",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least value of $\\sqrt{2x - 14} + \\sqrt{3x + 79}$.",
    "form": "Answer as an integer.",
    "answer": "10",
    "solution": [
      "Find the least value of $\\sqrt{2x - 14} + \\sqrt{3x + 79}$.",
      "Both roots are defined exactly when $x \\ge 7$.",
      "For numbers $a > b \\ge 7$, $\\sqrt{2a - 14} > \\sqrt{2b - 14}$ and $\\sqrt{3a + 79} > \\sqrt{3b + 79}$.",
      "So $\\sqrt{2a - 14} + \\sqrt{3a + 79} > \\sqrt{2b - 14} + \\sqrt{3b + 79}$.",
      "So the sum is monotonically increasing on $x \\ge 7$, and its least value is at $x = 7$.",
      "The least value is $\\sqrt{0} + \\sqrt{100} = 10$."
    ]
  },
  {
    "id": "t218-k3-p13",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least value of $\\log_{4}{(3x^2 - 12x + 28)}$.",
    "form": "Answer as an integer.",
    "answer": "2",
    "solution": [
      "Find the least value of $\\log_{4}{(3x^2 - 12x + 28)}$.",
      "$3x^2 - 12x + 28 = 3(x - 2)^2 + 16$",
      "The least value of $3x^2 - 12x + 28$ is $16$, at $x = 2$, and every value of it is positive.",
      "So the least value of the logarithm is at $x = 2$.",
      "The least value is $\\log_{4}{16} = 2$."
    ]
  },
  {
    "id": "t218-k3-p14",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least value of $\\sqrt{2x + 8} + \\sqrt{x + 53}$.",
    "form": "Answer as an integer.",
    "answer": "7",
    "solution": [
      "Find the least value of $\\sqrt{2x + 8} + \\sqrt{x + 53}$.",
      "Both roots are defined exactly when $x \\ge -4$.",
      "For numbers $a > b \\ge -4$, $\\sqrt{2a + 8} > \\sqrt{2b + 8}$ and $\\sqrt{a + 53} > \\sqrt{b + 53}$.",
      "So $\\sqrt{2a + 8} + \\sqrt{a + 53} > \\sqrt{2b + 8} + \\sqrt{b + 53}$.",
      "So the sum is monotonically increasing on $x \\ge -4$, and its least value is at $x = -4$.",
      "The least value is $\\sqrt{0} + \\sqrt{49} = 7$."
    ]
  },
  {
    "id": "t218-k3-p15",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $\\log_{4}{(x^3 + 3x^2 - 29x + 225)} - \\log_{4}{(x + 9)}$.",
    "form": "Answer as an integer.",
    "answer": "2",
    "solution": [
      "Find the least value of $\\log_{4}{(x^3 + 3x^2 - 29x + 225)} - \\log_{4}{(x + 9)}$.",
      "$\\log_{4}{(x^3 + 3x^2 - 29x + 225)} - \\log_{4}{(x + 9)} = \\log_{4}{\\dfrac{x^3 + 3x^2 - 29x + 225}{x + 9}}$",
      "$\\dfrac{x^3 + 3x^2 - 29x + 225}{x + 9} = x^2 - 6x + 25$",
      "$x^2 - 6x + 25 = (x - 3)^2 + 16$",
      "The least value of $x^2 - 6x + 25$ is $16$, at $x = 3$, and every value of it is positive.",
      "Both logarithms are defined exactly when $x > -9$, and $x = 3$ is such a number.",
      "So the least value of the difference is at $x = 3$.",
      "The least value is $\\log_{4}{16} = 2$."
    ]
  },
  {
    "id": "t218-k3-p16",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the greatest value of $\\sqrt{x + 200} - \\sqrt{x - 25}$.",
    "form": "Answer as an integer.",
    "answer": "15",
    "solution": [
      "Find the greatest value of $\\sqrt{x + 200} - \\sqrt{x - 25}$.",
      "Both roots are defined exactly when $x \\ge 25$.",
      "$\\sqrt{x + 200} - \\sqrt{x - 25} = \\dfrac{(x + 200) - (x - 25)}{\\sqrt{x + 200} + \\sqrt{x - 25}}$",
      "$\\sqrt{x + 200} - \\sqrt{x - 25} = \\dfrac{225}{\\sqrt{x + 200} + \\sqrt{x - 25}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 25$.",
      "So the fraction is monotonically decreasing on $x \\ge 25$.",
      "The greatest value is at the least input, $x = 25$.",
      "The greatest value is $\\dfrac{225}{\\sqrt{225} + \\sqrt{0}} = 15$."
    ]
  },
  {
    "id": "t218-k3-p17",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least value of $\\log_{2}{(2x^2 + 24x + 200)}$.",
    "form": "Answer as an integer.",
    "answer": "7",
    "solution": [
      "Find the least value of $\\log_{2}{(2x^2 + 24x + 200)}$.",
      "$2x^2 + 24x + 200 = 2(x + 6)^2 + 128$",
      "The least value of $2x^2 + 24x + 200$ is $128$, at $x = -6$, and every value of it is positive.",
      "So the least value of the logarithm is at $x = -6$.",
      "The least value is $\\log_{2}{128} = 7$."
    ]
  },
  {
    "id": "t218-k3-p18",
    "topic": "monotonic-functions",
    "kind": "t218-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the greatest value of $\\log_{7}{(-x^2 - 6x - 2)}$.",
    "form": "Answer as an integer.",
    "answer": "1",
    "solution": [
      "Find the greatest value of $\\log_{7}{(-x^2 - 6x - 2)}$.",
      "$-x^2 - 6x - 2 = -(x + 3)^2 + 7$",
      "The greatest value of $-x^2 - 6x - 2$ is $7$, at $x = -3$, and the logarithm is defined wherever the quadratic is positive.",
      "So the greatest value of the logarithm is at $x = -3$.",
      "The greatest value is $\\log_{7}{7} = 1$."
    ]
  },
  {
    "id": "t218-k4-p01",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $2^x + 5x = 36$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 4",
    "solution": [
      "Find every real solution of $2^x + 5x = 36$.",
      "At $x = 4$ the left side is $2^{4} + 5 \\cdot 4 = 36$, so $4$ is a solution.",
      "For numbers $a > b$, $2^a > 2^b$ and $5a > 5b$.",
      "So $2^a + 5a > 2^b + 5b$: the left side is monotonically increasing.",
      "So no other number gives $36$.",
      "$x = 4$"
    ]
  },
  {
    "id": "t218-k4-p02",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $3^x + 7x = -\\dfrac{20}{3}$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -1",
    "solution": [
      "Find every real solution of $3^x + 7x = -\\dfrac{20}{3}$.",
      "At $x = -1$ the left side is $3^{-1} + 7 \\cdot (-1) = -\\dfrac{20}{3}$, so $-1$ is a solution.",
      "For numbers $a > b$, $3^a > 3^b$ and $7a > 7b$.",
      "So $3^a + 7a > 3^b + 7b$: the left side is monotonically increasing.",
      "So no other number gives $-\\dfrac{20}{3}$.",
      "$x = -1$"
    ]
  },
  {
    "id": "t218-k4-p03",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find every real solution of $\\sqrt{x + 6} + \\sqrt{x + 21} + \\sqrt{x + 54} = 12$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -5",
    "solution": [
      "Find every real solution of $\\sqrt{x + 6} + \\sqrt{x + 21} + \\sqrt{x + 54} = 12$.",
      "The left side is defined exactly when $x \\ge -6$.",
      "At $x = -5$ the left side is $\\sqrt{1} + \\sqrt{16} + \\sqrt{49} = 1 + 4 + 7 = 12$, so $-5$ is a solution.",
      "For numbers $a > b \\ge -6$, $\\sqrt{a + 6} > \\sqrt{b + 6}$, $\\sqrt{a + 21} > \\sqrt{b + 21}$ and $\\sqrt{a + 54} > \\sqrt{b + 54}$.",
      "So $\\sqrt{a + 6} + \\sqrt{a + 21} + \\sqrt{a + 54} > \\sqrt{b + 6} + \\sqrt{b + 21} + \\sqrt{b + 54}$: the left side is monotonically increasing on $x \\ge -6$.",
      "So no other number in the domain gives $12$.",
      "$x = -5$"
    ]
  },
  {
    "id": "t218-k4-p04",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every real solution of $\\log_{2}{x} + 5x = 22$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 4",
    "solution": [
      "Find every real solution of $\\log_{2}{x} + 5x = 22$.",
      "The left side is defined for $x > 0$.",
      "At $x = 4$ the left side is $\\log_{2}{4} + 5 \\cdot 4 = 22$, so $4$ is a solution.",
      "For numbers $a > b > 0$, $\\log_{2}{a} > \\log_{2}{b}$ and $5a > 5b$.",
      "So $\\log_{2}{a} + 5a > \\log_{2}{b} + 5b$: the left side is monotonically increasing on $x > 0$.",
      "So no other positive number gives $22$.",
      "$x = 4$"
    ]
  },
  {
    "id": "t218-k4-p05",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $9^x + 2x = 4$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 1/2",
    "solution": [
      "Find every real solution of $9^x + 2x = 4$.",
      "At $x = \\dfrac{1}{2}$ the left side is $9^{\\frac{1}{2}} + 2 \\cdot \\dfrac{1}{2} = 4$, so $\\dfrac{1}{2}$ is a solution.",
      "For numbers $a > b$, $9^a > 9^b$ and $2a > 2b$.",
      "So $9^a + 2a > 9^b + 2b$: the left side is monotonically increasing.",
      "So no other number gives $4$.",
      "$x = \\dfrac{1}{2}$"
    ]
  },
  {
    "id": "t218-k4-p06",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $7^x + 3x = 1$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 0",
    "solution": [
      "Find every real solution of $7^x + 3x = 1$.",
      "At $x = 0$ the left side is $7^{0} + 3 \\cdot 0 = 1$, so $0$ is a solution.",
      "For numbers $a > b$, $7^a > 7^b$ and $3a > 3b$.",
      "So $7^a + 3a > 7^b + 3b$: the left side is monotonically increasing.",
      "So no other number gives $1$.",
      "$x = 0$"
    ]
  },
  {
    "id": "t218-k4-p07",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $2^x + 6x = -\\dfrac{47}{4}$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -2",
    "solution": [
      "Find every real solution of $2^x + 6x = -\\dfrac{47}{4}$.",
      "At $x = -2$ the left side is $2^{-2} + 6 \\cdot (-2) = -\\dfrac{47}{4}$, so $-2$ is a solution.",
      "For numbers $a > b$, $2^a > 2^b$ and $6a > 6b$.",
      "So $2^a + 6a > 2^b + 6b$: the left side is monotonically increasing.",
      "So no other number gives $-\\dfrac{47}{4}$.",
      "$x = -2$"
    ]
  },
  {
    "id": "t218-k4-p08",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $3^x + 4x = 39$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 3",
    "solution": [
      "Find every real solution of $3^x + 4x = 39$.",
      "At $x = 3$ the left side is $3^{3} + 4 \\cdot 3 = 39$, so $3$ is a solution.",
      "For numbers $a > b$, $3^a > 3^b$ and $4a > 4b$.",
      "So $3^a + 4a > 3^b + 4b$: the left side is monotonically increasing.",
      "So no other number gives $39$.",
      "$x = 3$"
    ]
  },
  {
    "id": "t218-k4-p09",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every real solution of $\\log_{3}{x} + 6x = 1$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 1/3",
    "solution": [
      "Find every real solution of $\\log_{3}{x} + 6x = 1$.",
      "The left side is defined for $x > 0$.",
      "At $x = \\dfrac{1}{3}$ the left side is $\\log_{3}{\\dfrac{1}{3}} + 6 \\cdot \\dfrac{1}{3} = 1$, so $\\dfrac{1}{3}$ is a solution.",
      "For numbers $a > b > 0$, $\\log_{3}{a} > \\log_{3}{b}$ and $6a > 6b$.",
      "So $\\log_{3}{a} + 6a > \\log_{3}{b} + 6b$: the left side is monotonically increasing on $x > 0$.",
      "So no other positive number gives $1$.",
      "$x = \\dfrac{1}{3}$"
    ]
  },
  {
    "id": "t218-k4-p10",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find every real solution of $\\sqrt{x + 1} + \\sqrt{x + 4} + \\sqrt{x + 36} = 9$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 0",
    "solution": [
      "Find every real solution of $\\sqrt{x + 1} + \\sqrt{x + 4} + \\sqrt{x + 36} = 9$.",
      "The left side is defined exactly when $x \\ge -1$.",
      "At $x = 0$ the left side is $\\sqrt{1} + \\sqrt{4} + \\sqrt{36} = 1 + 2 + 6 = 9$, so $0$ is a solution.",
      "For numbers $a > b \\ge -1$, $\\sqrt{a + 1} > \\sqrt{b + 1}$, $\\sqrt{a + 4} > \\sqrt{b + 4}$ and $\\sqrt{a + 36} > \\sqrt{b + 36}$.",
      "So $\\sqrt{a + 1} + \\sqrt{a + 4} + \\sqrt{a + 36} > \\sqrt{b + 1} + \\sqrt{b + 4} + \\sqrt{b + 36}$: the left side is monotonically increasing on $x \\ge -1$.",
      "So no other number in the domain gives $9$.",
      "$x = 0$"
    ]
  },
  {
    "id": "t218-k4-p11",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every real solution of $\\log_{6}{x} + 4x = 4$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 1",
    "solution": [
      "Find every real solution of $\\log_{6}{x} + 4x = 4$.",
      "The left side is defined for $x > 0$.",
      "At $x = 1$ the left side is $\\log_{6}{1} + 4 \\cdot 1 = 4$, so $1$ is a solution.",
      "For numbers $a > b > 0$, $\\log_{6}{a} > \\log_{6}{b}$ and $4a > 4b$.",
      "So $\\log_{6}{a} + 4a > \\log_{6}{b} + 4b$: the left side is monotonically increasing on $x > 0$.",
      "So no other positive number gives $4$.",
      "$x = 1$"
    ]
  },
  {
    "id": "t218-k4-p12",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $4^x + 10x = 23$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 3/2",
    "solution": [
      "Find every real solution of $4^x + 10x = 23$.",
      "At $x = \\dfrac{3}{2}$ the left side is $4^{\\frac{3}{2}} + 10 \\cdot \\dfrac{3}{2} = 23$, so $\\dfrac{3}{2}$ is a solution.",
      "For numbers $a > b$, $4^a > 4^b$ and $10a > 10b$.",
      "So $4^a + 10a > 4^b + 10b$: the left side is monotonically increasing.",
      "So no other number gives $23$.",
      "$x = \\dfrac{3}{2}$"
    ]
  },
  {
    "id": "t218-k4-p13",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every real solution of $\\log_{10}{x} + 2x = 21$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 10",
    "solution": [
      "Find every real solution of $\\log_{10}{x} + 2x = 21$.",
      "The left side is defined for $x > 0$.",
      "At $x = 10$ the left side is $\\log_{10}{10} + 2 \\cdot 10 = 21$, so $10$ is a solution.",
      "For numbers $a > b > 0$, $\\log_{10}{a} > \\log_{10}{b}$ and $2a > 2b$.",
      "So $\\log_{10}{a} + 2a > \\log_{10}{b} + 2b$: the left side is monotonically increasing on $x > 0$.",
      "So no other positive number gives $21$.",
      "$x = 10$"
    ]
  },
  {
    "id": "t218-k4-p14",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every real solution of $\\log_{4}{x} + 3x = 50$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 16",
    "solution": [
      "Find every real solution of $\\log_{4}{x} + 3x = 50$.",
      "The left side is defined for $x > 0$.",
      "At $x = 16$ the left side is $\\log_{4}{16} + 3 \\cdot 16 = 50$, so $16$ is a solution.",
      "For numbers $a > b > 0$, $\\log_{4}{a} > \\log_{4}{b}$ and $3a > 3b$.",
      "So $\\log_{4}{a} + 3a > \\log_{4}{b} + 3b$: the left side is monotonically increasing on $x > 0$.",
      "So no other positive number gives $50$.",
      "$x = 16$"
    ]
  },
  {
    "id": "t218-k4-p15",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find every real solution of $\\log_{2}{x} + 2x = 69$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 32",
    "solution": [
      "Find every real solution of $\\log_{2}{x} + 2x = 69$.",
      "The left side is defined for $x > 0$.",
      "At $x = 32$ the left side is $\\log_{2}{32} + 2 \\cdot 32 = 69$, so $32$ is a solution.",
      "For numbers $a > b > 0$, $\\log_{2}{a} > \\log_{2}{b}$ and $2a > 2b$.",
      "So $\\log_{2}{a} + 2a > \\log_{2}{b} + 2b$: the left side is monotonically increasing on $x > 0$.",
      "So no other positive number gives $69$.",
      "$x = 32$"
    ]
  },
  {
    "id": "t218-k4-p16",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find every real solution of $\\sqrt{x - 6} + \\sqrt{x + 15} + \\sqrt{x + 26} = 13$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 10",
    "solution": [
      "Find every real solution of $\\sqrt{x - 6} + \\sqrt{x + 15} + \\sqrt{x + 26} = 13$.",
      "The left side is defined exactly when $x \\ge 6$.",
      "At $x = 10$ the left side is $\\sqrt{4} + \\sqrt{25} + \\sqrt{36} = 2 + 5 + 6 = 13$, so $10$ is a solution.",
      "For numbers $a > b \\ge 6$, $\\sqrt{a - 6} > \\sqrt{b - 6}$, $\\sqrt{a + 15} > \\sqrt{b + 15}$ and $\\sqrt{a + 26} > \\sqrt{b + 26}$.",
      "So $\\sqrt{a - 6} + \\sqrt{a + 15} + \\sqrt{a + 26} > \\sqrt{b - 6} + \\sqrt{b + 15} + \\sqrt{b + 26}$: the left side is monotonically increasing on $x \\ge 6$.",
      "So no other number in the domain gives $13$.",
      "$x = 10$"
    ]
  },
  {
    "id": "t218-k4-p17",
    "topic": "monotonic-functions",
    "kind": "t218-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find every real solution of $6^x + 5x = 46$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 2",
    "solution": [
      "Find every real solution of $6^x + 5x = 46$.",
      "At $x = 2$ the left side is $6^{2} + 5 \\cdot 2 = 46$, so $2$ is a solution.",
      "For numbers $a > b$, $6^a > 6^b$ and $5a > 5b$.",
      "So $6^a + 5a > 6^b + 5b$: the left side is monotonically increasing.",
      "So no other number gives $46$.",
      "$x = 2$"
    ]
  },
  {
    "id": "t218-k5-p01",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 441} - \\sqrt{x - 400}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 441} - \\sqrt{x - 400} = \\dfrac{(x + 441) - (x - 400)}{\\sqrt{x + 441} + \\sqrt{x - 400}}$",
      "$\\sqrt{x + 441} - \\sqrt{x - 400} = \\dfrac{841}{\\sqrt{x + 441} + \\sqrt{x - 400}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 400$, so the fraction is monotonically decreasing there and is greatest at $x = 400$, where the denominator is $\\sqrt{400 + 441} + \\sqrt{400 - 400}$.",
      "$\\sqrt{400 + 441} + \\sqrt{400 - 400} = 41$",
      "The greatest value is $\\dfrac{841}{41}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(400+441)+sqrt(400-400) = 29",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 441} - \\sqrt{x - 400}$, and write that line right.",
      "Line 4 takes the root of the sum $400 + 441$ term by term, as $20 + 21$; the sum is $841$, and its root is $29$.",
      "Line 4 written right is $\\sqrt{400 + 441} + \\sqrt{400 - 400} = 29$."
    ]
  },
  {
    "id": "t218-k5-p02",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 3x^2 + 30x - 8$ is monotonically increasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(3(x + c)^2 + 30(x + c) - 8\\right) - \\left(3x^2 + 30x - 8\\right)$",
      "$f(x + c) - f(x) = 6cx + 3c^2 + 30c$",
      "$f(x + c) - f(x) = c(6x + 3c - 30)$",
      "The bracket is positive for every $c > 0$ exactly when $6x - 30 \\ge 0$.",
      "$x \\ge 5$",
      "The largest interval is $[5, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x+c)-f(x) = c*(6*x+3*c+30)",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = 3x^2 + 30x - 8$ is monotonically increasing, and write that line right.",
      "Line 3 loses a sign: taking the factor $c$ out of $30c$ leaves $30$, and line 3 has $-30$.",
      "Line 3 written right is $f(x + c) - f(x) = c(6x + 3c + 30)$."
    ]
  },
  {
    "id": "t218-k5-p03",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 7x^2 - 42x + 2$ is monotonically increasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(7(x + c)^2 - 42(x + c) + 2\\right) - \\left(7x^2 - 42x + 2\\right)$",
      "$f(x + c) - f(x) = 14cx + 7c^2 - 42c$",
      "$f(x + c) - f(x) = c(14x + 7c - 42)$",
      "The bracket is positive for every $c > 0$ exactly when $14x - 42 \\ge 0$.",
      "$x \\ge -3$",
      "The largest interval is $[-3, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: x >= 3",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = 7x^2 - 42x + 2$ is monotonically increasing, and write that line right.",
      "Line 5 loses a sign: adding $42$ to both sides of $14x - 42 \\ge 0$ gives $14x \\ge 42$, so $x \\ge 3$; line 5 keeps the sign of $-42$.",
      "Line 5 written right is $x \\ge 3$."
    ]
  },
  {
    "id": "t218-k5-p04",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 65} - \\sqrt{x - 16}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 65} - \\sqrt{x - 16} = \\dfrac{(x + 65) - (x - 16)}{\\sqrt{x + 65} + \\sqrt{x - 16}}$",
      "$\\sqrt{x + 65} - \\sqrt{x - 16} = \\dfrac{49}{\\sqrt{x + 65} + \\sqrt{x - 16}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 16$, so the fraction is monotonically decreasing there and is greatest at $x = 16$, where the denominator is $\\sqrt{16 + 65} + \\sqrt{16 - 16}$.",
      "$\\sqrt{16 + 65} + \\sqrt{16 - 16} = 9$",
      "The greatest value is $\\dfrac{49}{9}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: sqrt(x+65)-sqrt(x-16) = 81/(sqrt(x+65)+sqrt(x-16))",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 65} - \\sqrt{x - 16}$, and write that line right.",
      "Line 2 loses a sign: taking away the bracket $(x - 16)$ adds $16$, so the top is $65 + 16 = 81$; line 2 has $65 - 16$.",
      "Line 2 written right is $\\sqrt{x + 65} - \\sqrt{x - 16} = \\dfrac{81}{\\sqrt{x + 65} + \\sqrt{x - 16}}$."
    ]
  },
  {
    "id": "t218-k5-p05",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 576} - \\sqrt{x - 49}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 576} - \\sqrt{x - 49} = \\dfrac{(x + 576) - (x - 49)}{\\sqrt{x + 576} + \\sqrt{x - 49}}$",
      "$\\sqrt{x + 576} - \\sqrt{x - 49} = \\dfrac{625}{\\sqrt{x + 576} + \\sqrt{x - 49}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 49$, so the fraction is monotonically decreasing there and is greatest at $x = 49$, where the denominator is $\\sqrt{49 + 576} + \\sqrt{49 - 49}$.",
      "$\\sqrt{49 + 576} + \\sqrt{49 - 49} = 31$",
      "The greatest value is $\\dfrac{625}{31}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(49+576)+sqrt(49-49) = 25",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 576} - \\sqrt{x - 49}$, and write that line right.",
      "Line 4 takes the root of the sum $49 + 576$ term by term, as $7 + 24$; the sum is $625$, and its root is $25$.",
      "Line 4 written right is $\\sqrt{49 + 576} + \\sqrt{49 - 49} = 25$."
    ]
  },
  {
    "id": "t218-k5-p06",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 225} - \\sqrt{x - 64}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 225} - \\sqrt{x - 64} = \\dfrac{(x + 225) - (x - 64)}{\\sqrt{x + 225} + \\sqrt{x - 64}}$",
      "$\\sqrt{x + 225} - \\sqrt{x - 64} = \\dfrac{289}{\\sqrt{x + 225} + \\sqrt{x - 64}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 64$, so the fraction is monotonically decreasing there and is greatest at $x = 64$, where the denominator is $\\sqrt{64 + 225} + \\sqrt{64 - 64}$.",
      "$\\sqrt{64 + 225} + \\sqrt{64 - 64} = 23$",
      "The greatest value is $\\dfrac{289}{23}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(64+225)+sqrt(64-64) = 17",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 225} - \\sqrt{x - 64}$, and write that line right.",
      "Line 4 takes the root of the sum $64 + 225$ term by term, as $8 + 15$; the sum is $289$, and its root is $17$.",
      "Line 4 written right is $\\sqrt{64 + 225} + \\sqrt{64 - 64} = 17$."
    ]
  },
  {
    "id": "t218-k5-p07",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 73} - \\sqrt{x - 48}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 73} - \\sqrt{x - 48} = \\dfrac{(x + 73) - (x - 48)}{\\sqrt{x + 73} + \\sqrt{x - 48}}$",
      "$\\sqrt{x + 73} - \\sqrt{x - 48} = \\dfrac{25}{\\sqrt{x + 73} + \\sqrt{x - 48}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 48$, so the fraction is monotonically decreasing there and is greatest at $x = 48$, where the denominator is $\\sqrt{48 + 73} + \\sqrt{48 - 48}$.",
      "$\\sqrt{48 + 73} + \\sqrt{48 - 48} = 11$",
      "The greatest value is $\\dfrac{25}{11}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: sqrt(x+73)-sqrt(x-48) = 121/(sqrt(x+73)+sqrt(x-48))",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 73} - \\sqrt{x - 48}$, and write that line right.",
      "Line 2 loses a sign: taking away the bracket $(x - 48)$ adds $48$, so the top is $73 + 48 = 121$; line 2 has $73 - 48$.",
      "Line 2 written right is $\\sqrt{x + 73} - \\sqrt{x - 48} = \\dfrac{121}{\\sqrt{x + 73} + \\sqrt{x - 48}}$."
    ]
  },
  {
    "id": "t218-k5-p08",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = -2x^2 - 28x + 5$ is monotonically decreasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(-2(x + c)^2 - 28(x + c) + 5\\right) - \\left(-2x^2 - 28x + 5\\right)$",
      "$f(x + c) - f(x) = -4cx - 2c^2 + 28c$",
      "$f(x + c) - f(x) = c(-4x - 2c + 28)$",
      "The bracket is negative for every $c > 0$ exactly when $-4x + 28 \\le 0$.",
      "$x \\ge 7$",
      "The largest interval is $[7, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(x+c)-f(x) = -4*c*x-2*c^2-28*c",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = -2x^2 - 28x + 5$ is monotonically decreasing, and write that line right.",
      "Line 2 loses a sign: $-28$ times $(x + c)$ gives the term $-28c$, and line 2 has $28c$.",
      "Line 2 written right is $f(x + c) - f(x) = -4cx - 2c^2 - 28c$."
    ]
  },
  {
    "id": "t218-k5-p09",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 85} - \\sqrt{x - 36}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 85} - \\sqrt{x - 36} = \\dfrac{(x + 85) - (x - 36)}{\\sqrt{x + 85} + \\sqrt{x - 36}}$",
      "$\\sqrt{x + 85} - \\sqrt{x - 36} = \\dfrac{49}{\\sqrt{x + 85} + \\sqrt{x - 36}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 36$, so the fraction is monotonically decreasing there and is greatest at $x = 36$, where the denominator is $\\sqrt{36 + 85} + \\sqrt{36 - 36}$.",
      "$\\sqrt{36 + 85} + \\sqrt{36 - 36} = 11$",
      "The greatest value is $\\dfrac{49}{11}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: sqrt(x+85)-sqrt(x-36) = 121/(sqrt(x+85)+sqrt(x-36))",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 85} - \\sqrt{x - 36}$, and write that line right.",
      "Line 2 loses a sign: taking away the bracket $(x - 36)$ adds $36$, so the top is $85 + 36 = 121$; line 2 has $85 - 36$.",
      "Line 2 written right is $\\sqrt{x + 85} - \\sqrt{x - 36} = \\dfrac{121}{\\sqrt{x + 85} + \\sqrt{x - 36}}$."
    ]
  },
  {
    "id": "t218-k5-p10",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 4x^2 - 28x + 9$ is monotonically increasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(4(x + c)^2 - 28(x + c) + 9\\right) - \\left(4x^2 - 28x + 9\\right)$",
      "$f(x + c) - f(x) = 8cx + 4c^2 - 28c$",
      "$f(x + c) - f(x) = c(8x + 4c + 28)$",
      "The bracket is positive for every $c > 0$ exactly when $8x + 28 \\ge 0$.",
      "$x \\ge -\\dfrac{7}{2}$",
      "The largest interval is $[-\\dfrac{7}{2}, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x+c)-f(x) = c*(8*x+4*c-28)",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = 4x^2 - 28x + 9$ is monotonically increasing, and write that line right.",
      "Line 3 loses a sign: taking the factor $c$ out of $-28c$ leaves $-28$, and line 3 has $28$.",
      "Line 3 written right is $f(x + c) - f(x) = c(8x + 4c - 28)$."
    ]
  },
  {
    "id": "t218-k5-p11",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 1225} - \\sqrt{x - 144}$, and write that line right.",
    "given": [
      "$\\sqrt{x + 1225} - \\sqrt{x - 144} = \\dfrac{(x + 1225) - (x - 144)}{\\sqrt{x + 1225} + \\sqrt{x - 144}}$",
      "$\\sqrt{x + 1225} - \\sqrt{x - 144} = \\dfrac{1369}{\\sqrt{x + 1225} + \\sqrt{x - 144}}$",
      "The denominator is positive and monotonically increasing on $x \\ge 144$, so the fraction is monotonically decreasing there and is greatest at $x = 144$, where the denominator is $\\sqrt{144 + 1225} + \\sqrt{144 - 144}$.",
      "$\\sqrt{144 + 1225} + \\sqrt{144 - 144} = 47$",
      "The greatest value is $\\dfrac{1369}{47}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(144+1225)+sqrt(144-144) = 37",
    "solution": [
      "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 1225} - \\sqrt{x - 144}$, and write that line right.",
      "Line 4 takes the root of the sum $144 + 1225$ term by term, as $12 + 35$; the sum is $1369$, and its root is $37$.",
      "Line 4 written right is $\\sqrt{144 + 1225} + \\sqrt{144 - 144} = 37$."
    ]
  },
  {
    "id": "t218-k5-p12",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 6x^2 - 24x - 7$ is monotonically increasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(6(x + c)^2 - 24(x + c) - 7\\right) - \\left(6x^2 - 24x - 7\\right)$",
      "$f(x + c) - f(x) = 12cx + 6c^2 + 24c$",
      "$f(x + c) - f(x) = c(12x + 6c + 24)$",
      "The bracket is positive for every $c > 0$ exactly when $12x + 24 \\ge 0$.",
      "$x \\ge -2$",
      "The largest interval is $[-2, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(x+c)-f(x) = 12*c*x+6*c^2-24*c",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = 6x^2 - 24x - 7$ is monotonically increasing, and write that line right.",
      "Line 2 loses a sign: $-24$ times $(x + c)$ gives the term $-24c$, and line 2 has $24c$.",
      "Line 2 written right is $f(x + c) - f(x) = 12cx + 6c^2 - 24c$."
    ]
  },
  {
    "id": "t218-k5-p13",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 2x^2 - 18x + 3$ is monotonically increasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(2(x + c)^2 - 18(x + c) + 3\\right) - \\left(2x^2 - 18x + 3\\right)$",
      "$f(x + c) - f(x) = 4cx + 2c^2 - 18c$",
      "$f(x + c) - f(x) = c(4x + 2c - 18)$",
      "The bracket is positive for every $c > 0$ exactly when $4x - 18 \\ge 0$.",
      "$x \\ge -\\dfrac{9}{2}$",
      "The largest interval is $[-\\dfrac{9}{2}, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: x >= 9/2",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = 2x^2 - 18x + 3$ is monotonically increasing, and write that line right.",
      "Line 5 loses a sign: adding $18$ to both sides of $4x - 18 \\ge 0$ gives $4x \\ge 18$, so $x \\ge \\dfrac{9}{2}$; line 5 keeps the sign of $-18$.",
      "Line 5 written right is $x \\ge \\dfrac{9}{2}$."
    ]
  },
  {
    "id": "t218-k5-p14",
    "topic": "monotonic-functions",
    "kind": "t218-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 8x^2 + 40x - 3$ is monotonically increasing, and write that line right.",
    "given": [
      "$f(x + c) - f(x) = \\left(8(x + c)^2 + 40(x + c) - 3\\right) - \\left(8x^2 + 40x - 3\\right)$",
      "$f(x + c) - f(x) = 16cx + 8c^2 + 40c$",
      "$f(x + c) - f(x) = c(16x + 8c - 40)$",
      "The bracket is positive for every $c > 0$ exactly when $16x - 40 \\ge 0$.",
      "$x \\ge \\dfrac{5}{2}$",
      "The largest interval is $[\\dfrac{5}{2}, \\infty)$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x+c)-f(x) = c*(16*x+8*c+40)",
    "solution": [
      "Find the first wrong line in this working for the largest interval on which $f(x) = 8x^2 + 40x - 3$ is monotonically increasing, and write that line right.",
      "Line 3 loses a sign: taking the factor $c$ out of $40c$ leaves $40$, and line 3 has $-40$.",
      "Line 3 written right is $f(x + c) - f(x) = c(16x + 8c + 40)$."
    ]
  },
  {
    "id": "t218-k6-p01",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, -3)$, $B(-3, 5)$, $C(1, -3)$ and $D(3, 5)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-18.svg",
      "alt": "A curve through the marked points A(−5, −3), B(−3, 5), C(1, −3) and D(3, 5)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -3 and x <= 1",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, -3)$, $B(-3, 5)$, $C(1, -3)$ and $D(3, 5)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph rises from left to right as far as the marked point $B(-3, 5)$, falls from $B$ to the marked point $C(1, -3)$, and rises from $C$ on.",
      "The part that falls starts at $B$: there $x \\ge -3$.",
      "The part that falls ends at $C$: there $x \\le 1$.",
      "The interval is $x \\ge -3$ and $x \\le 1$."
    ]
  },
  {
    "id": "t218-k6-p02",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, 4)$, $B(-4, 2)$, $C(-3, 0)$ and $D(-2, 4)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-20.svg",
      "alt": "A curve through the marked points A(−5, 4), B(−4, 2), C(−3, 0) and D(−2, 4)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -5 and x <= -3",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, 4)$, $B(-4, 2)$, $C(-3, 0)$ and $D(-2, 4)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph rises from left to right as far as the marked point $A(-5, 4)$, falls from $A$ to the marked point $C(-3, 0)$, and rises from $C$ on.",
      "The part that falls starts at $A$: there $x \\ge -5$.",
      "The part that falls ends at $C$: there $x \\le -3$.",
      "The interval is $x \\ge -5$ and $x \\le -3$."
    ]
  },
  {
    "id": "t218-k6-p03",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-1, 4)$, $B(1, -4)$, $C(3, 0)$, $D(5, 4)$ and $E(7, -4)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-19.svg",
      "alt": "A curve through the marked points A(−1, 4), B(1, −4), C(3, 0), D(5, 4) and E(7, −4)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= 1 and x <= 5",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-1, 4)$, $B(1, -4)$, $C(3, 0)$, $D(5, 4)$ and $E(7, -4)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $B(1, -4)$, rises from $B$ to the marked point $D(5, 4)$, and falls from $D$ on.",
      "The part that rises starts at $B$: there $x \\ge 1$.",
      "The part that rises ends at $D$: there $x \\le 5$.",
      "The interval is $x \\ge 1$ and $x \\le 5$."
    ]
  },
  {
    "id": "t218-k6-p04",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(3, -1)$, $B(4, -5)$, $C(5, -3)$ and $D(6, -1)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-21.svg",
      "alt": "A curve through the marked points A(3, −1), B(4, −5), C(5, −3) and D(6, −1)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= 4 and x <= 6",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(3, -1)$, $B(4, -5)$, $C(5, -3)$ and $D(6, -1)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $B(4, -5)$, rises from $B$ to the marked point $D(6, -1)$, and falls from $D$ on.",
      "The part that rises starts at $B$: there $x \\ge 4$.",
      "The part that rises ends at $D$: there $x \\le 6$.",
      "The interval is $x \\ge 4$ and $x \\le 6$."
    ]
  },
  {
    "id": "t218-k6-p05",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(6, 2)$, $B(7, 1)$ and $C(8, -2)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-9.svg",
      "alt": "A curve through the marked points A(6, 2), B(7, 1) and C(8, −2)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= 6",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(6, 2)$, $B(7, 1)$ and $C(8, -2)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph rises from left to right as far as the marked point $A(6, 2)$ and falls from there on.",
      "The graph falls from $x = 6$ on.",
      "$x \\ge 6$"
    ]
  },
  {
    "id": "t218-k6-p06",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-4, 2)$, $B(-3, 1)$ and $C(-2, 2)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-7.svg",
      "alt": "A curve through the marked points A(−4, 2), B(−3, 1) and C(−2, 2)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -3",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-4, 2)$, $B(-3, 1)$ and $C(-2, 2)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $B(-3, 1)$ and rises from there on.",
      "The graph rises from $x = -3$ on.",
      "$x \\ge -3$"
    ]
  },
  {
    "id": "t218-k6-p07",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-4, 4)$, $B(-3, -2)$ and $C(-2, -4)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-5.svg",
      "alt": "A curve through the marked points A(−4, 4), B(−3, −2) and C(−2, −4)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x <= -2",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-4, 4)$, $B(-3, -2)$ and $C(-2, -4)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $C(-2, -4)$ and rises from there on.",
      "The graph falls as far as $x = -2$.",
      "$x \\le -2$"
    ]
  },
  {
    "id": "t218-k6-p08",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, 4)$, $B(-4, 6)$ and $C(-3, 4)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-10.svg",
      "alt": "A curve through the marked points A(−5, 4), B(−4, 6) and C(−3, 4)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -4",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, 4)$, $B(-4, 6)$ and $C(-3, 4)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph rises from left to right as far as the marked point $B(-4, 6)$ and falls from there on.",
      "The graph falls from $x = -4$ on.",
      "$x \\ge -4$"
    ]
  },
  {
    "id": "t218-k6-p09",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-4, 1)$, $B(-2, 5)$, $C(2, 1)$ and $D(4, 5)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-22.svg",
      "alt": "A curve through the marked points A(−4, 1), B(−2, 5), C(2, 1) and D(4, 5)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -2 and x <= 2",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-4, 1)$, $B(-2, 5)$, $C(2, 1)$ and $D(4, 5)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph rises from left to right as far as the marked point $B(-2, 5)$, falls from $B$ to the marked point $C(2, 1)$, and rises from $C$ on.",
      "The part that falls starts at $B$: there $x \\ge -2$.",
      "The part that falls ends at $C$: there $x \\le 2$.",
      "The interval is $x \\ge -2$ and $x \\le 2$."
    ]
  },
  {
    "id": "t218-k6-p10",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-2, 5)$, $B(-1, -3)$, $C(0, 1)$ and $D(1, 5)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-17.svg",
      "alt": "A curve through the marked points A(−2, 5), B(−1, −3), C(0, 1) and D(1, 5)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -1 and x <= 1",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-2, 5)$, $B(-1, -3)$, $C(0, 1)$ and $D(1, 5)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $B(-1, -3)$, rises from $B$ to the marked point $D(1, 5)$, and falls from $D$ on.",
      "The part that rises starts at $B$: there $x \\ge -1$.",
      "The part that rises ends at $D$: there $x \\le 1$.",
      "The interval is $x \\ge -1$ and $x \\le 1$."
    ]
  },
  {
    "id": "t218-k6-p11",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-3, 1)$, $B(-2, -2)$ and $C(-1, -5)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-8.svg",
      "alt": "A curve through the marked points A(−3, 1), B(−2, −2) and C(−1, −5)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= -1",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-3, 1)$, $B(-2, -2)$ and $C(-1, -5)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $C(-1, -5)$ and rises from there on.",
      "The graph rises from $x = -1$ on.",
      "$x \\ge -1$"
    ]
  },
  {
    "id": "t218-k6-p12",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, -1)$, $B(-4, 0)$ and $C(-3, 1)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-12.svg",
      "alt": "A curve through the marked points A(−5, −1), B(−4, 0) and C(−3, 1)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x <= -5",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-5, -1)$, $B(-4, 0)$ and $C(-3, 1)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $A(-5, -1)$ and rises from there on.",
      "The graph falls as far as $x = -5$.",
      "$x \\le -5$"
    ]
  },
  {
    "id": "t218-k6-p13",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(4, 3)$, $B(5, 2)$ and $C(6, 1)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-6.svg",
      "alt": "A curve through the marked points A(4, 3), B(5, 2) and C(6, 1)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x <= 4",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(4, 3)$, $B(5, 2)$ and $C(6, 1)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph rises from left to right as far as the marked point $A(4, 3)$ and falls from there on.",
      "The graph rises as far as $x = 4$.",
      "$x \\le 4$"
    ]
  },
  {
    "id": "t218-k6-p14",
    "topic": "monotonic-functions",
    "kind": "t218-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(3, 2)$, $B(4, -4)$ and $C(5, -6)$, and the graph keeps its direction beyond the edges of the figure.",
    "figure": {
      "file": "monotonic-functions-11.svg",
      "alt": "A curve through the marked points A(3, 2), B(4, −4) and C(5, −6)."
    },
    "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
    "answer": "x >= 5",
    "solution": [
      "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(3, 2)$, $B(4, -4)$ and $C(5, -6)$, and the graph keeps its direction beyond the edges of the figure.",
      "In the figure the graph falls from left to right as far as the marked point $C(5, -6)$ and rises from there on.",
      "The graph rises from $x = 5$ on.",
      "$x \\ge 5$"
    ]
  }
]
