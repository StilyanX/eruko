export default [
  {
    "id": "t223-k1-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $f(x) = |2x - 5| + |2x + 5|$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = |2x - 5| + |2x + 5|$ is even, odd or neither.",
      "$f(-x) = |2(-x) - 5| + |2(-x) + 5|$",
      "$f(-x) = |-2x - 5| + |-2x + 5|$",
      "$f(-x) = |-(2x + 5)| + |-(2x - 5)|$",
      "$f(-x) = |2x + 5| + |2x - 5|$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\sqrt[3]{x^4 + 5}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = \\sqrt[3]{x^4 + 5}$ is even, odd or neither.",
      "$f(-x) = \\sqrt[3]{(-x)^4 + 5}$",
      "$f(-x) = \\sqrt[3]{x^4 + 5}$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $f(x) = |x + 3| - |x - 3|$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = |x + 3| - |x - 3|$ is even, odd or neither.",
      "$f(-x) = |(-x) + 3| - |(-x) - 3|$",
      "$f(-x) = |-x + 3| - |-x - 3|$",
      "$f(-x) = |-(x - 3)| - |-(x + 3)|$",
      "$f(-x) = |x - 3| - |x + 3|$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = x^4 - 6x^3 + 5$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $f(x) = x^4 - 6x^3 + 5$ is even, odd or neither.",
      "$f(-x) = (-x)^4 - 6(-x)^3 + 5$",
      "$f(-x) = x^4 + 6x^3 + 5$",
      "$-f(x) = -x^4 + 6x^3 - 5$",
      "At $x = 2$: $f(2) = -27$, $f(-2) = 69$ and $-f(2) = 27$.",
      "Neither: $f(-2)$ is equal to neither $f(2)$ nor $-f(2)$."
    ]
  },
  {
    "id": "t223-k1-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\sqrt{x^4 + 2x + 6}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $f(x) = \\sqrt{x^4 + 2x + 6}$ is even, odd or neither.",
      "$f(-x) = \\sqrt{(-x)^4 + 2(-x) + 6}$",
      "$f(-x) = \\sqrt{x^4 - 2x + 6}$",
      "$-f(x) = -\\sqrt{x^4 + 2x + 6}$",
      "At $x = 1$: $f(1) = 3$, $f(-1) = \\sqrt{5}$ and $-f(1) = -3$.",
      "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$."
    ]
  },
  {
    "id": "t223-k1-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\sqrt[3]{x} - 5x^3$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = \\sqrt[3]{x} - 5x^3$ is even, odd or neither.",
      "$f(-x) = \\sqrt[3]{-x} - 5(-x)^3$",
      "$f(-x) = \\sqrt[3]{-x} + 5x^3$",
      "$f(-x) = -\\sqrt[3]{x} + 5x^3$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\dfrac{3x^3 + x}{x^6 + 4}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = \\dfrac{3x^3 + x}{x^6 + 4}$ is even, odd or neither.",
      "$f(-x) = \\dfrac{3(-x)^3 + (-x)}{(-x)^6 + 4}$",
      "$f(-x) = \\dfrac{-3x^3 - x}{x^6 + 4}$",
      "$-f(x) = \\dfrac{-3x^3 - x}{x^6 + 4}$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\dfrac{x^2 + 3x}{x^4 + 2}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $f(x) = \\dfrac{x^2 + 3x}{x^4 + 2}$ is even, odd or neither.",
      "$f(-x) = \\dfrac{(-x)^2 + 3(-x)}{(-x)^4 + 2}$",
      "$f(-x) = \\dfrac{x^2 - 3x}{x^4 + 2}$",
      "$-f(x) = \\dfrac{-x^2 - 3x}{x^4 + 2}$",
      "At $x = 1$: $f(1) = \\dfrac{4}{3}$, $f(-1) = -\\dfrac{2}{3}$ and $-f(1) = -\\dfrac{4}{3}$.",
      "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$."
    ]
  },
  {
    "id": "t223-k1-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Decide whether $f(x) = x\\sqrt[3]{x} + 6$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = x\\sqrt[3]{x} + 6$ is even, odd or neither.",
      "$f(-x) = (-x)\\sqrt[3]{-x} + 6$",
      "$f(-x) = (-x)\\left(-\\sqrt[3]{x}\\right) + 6$",
      "$f(-x) = x\\sqrt[3]{x} + 6$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 3^{x^4 - 2x^2}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = 3^{x^4 - 2x^2}$ is even, odd or neither.",
      "$f(-x) = 3^{(-x)^4 - 2(-x)^2}$",
      "$f(-x) = 3^{x^4 - 2x^2}$",
      "$-f(x) = -3^{x^4 - 2x^2}$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 2x^7 - 5x^3$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = 2x^7 - 5x^3$ is even, odd or neither.",
      "$f(-x) = 2(-x)^7 - 5(-x)^3$",
      "$f(-x) = -2x^7 + 5x^3$",
      "$-f(x) = -2x^7 + 5x^3$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\sqrt[3]{3x^8 - 5x^4}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = \\sqrt[3]{3x^8 - 5x^4}$ is even, odd or neither.",
      "$f(-x) = \\sqrt[3]{3(-x)^8 - 5(-x)^4}$",
      "$f(-x) = \\sqrt[3]{3x^8 - 5x^4}$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $f(x) = x|x| + 4$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $f(x) = x|x| + 4$ is even, odd or neither.",
      "$f(-x) = (-x)|-x| + 4$",
      "$f(-x) = -x|-x| + 4$",
      "$f(-x) = -x|x| + 4$",
      "At $x = 1$: $f(1) = 5$, $f(-1) = 3$ and $-f(1) = -5$.",
      "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$."
    ]
  },
  {
    "id": "t223-k1-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\dfrac{x^5 - 4x^3}{2x^2 + 1}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = \\dfrac{x^5 - 4x^3}{2x^2 + 1}$ is even, odd or neither.",
      "$f(-x) = \\dfrac{(-x)^5 - 4(-x)^3}{2(-x)^2 + 1}$",
      "$f(-x) = \\dfrac{-x^5 + 4x^3}{2x^2 + 1}$",
      "$-f(x) = \\dfrac{-x^5 + 4x^3}{2x^2 + 1}$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p15",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $f(x) = x^3|x| + 8x$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = x^3|x| + 8x$ is even, odd or neither.",
      "$f(-x) = (-x)^3|-x| + 8(-x)$",
      "$f(-x) = -x^3|-x| - 8x$",
      "$f(-x) = -x^3|x| - 8x$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p16",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $f(x) = |x^5 - 2x|$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = |x^5 - 2x|$ is even, odd or neither.",
      "$f(-x) = |(-x)^5 - 2(-x)|$",
      "$f(-x) = |-x^5 + 2x|$",
      "$f(-x) = |-(x^5 - 2x)|$",
      "$f(-x) = |x^5 - 2x|$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p17",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 2^{x^3 + 2x}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $f(x) = 2^{x^3 + 2x}$ is even, odd or neither.",
      "$f(-x) = 2^{(-x)^3 + 2(-x)}$",
      "$f(-x) = 2^{-x^3 - 2x}$",
      "$-f(x) = -2^{x^3 + 2x}$",
      "At $x = 1$: $f(1) = 8$, $f(-1) = \\dfrac{1}{8}$ and $-f(1) = -8$.",
      "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$."
    ]
  },
  {
    "id": "t223-k1-p18",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\dfrac{x}{|x| + 2}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $f(x) = \\dfrac{x}{|x| + 2}$ is even, odd or neither.",
      "$f(-x) = \\dfrac{(-x)}{|-x| + 2}$",
      "$f(-x) = \\dfrac{-x}{|-x| + 2}$",
      "$f(-x) = \\dfrac{-x}{|x| + 2}$",
      "Odd: $f(-x) = -f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k1-p19",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Decide whether $f(x) = \\sqrt[3]{7x + 1}$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $f(x) = \\sqrt[3]{7x + 1}$ is even, odd or neither.",
      "$f(-x) = \\sqrt[3]{7(-x) + 1}$",
      "$f(-x) = \\sqrt[3]{-7x + 1}$",
      "At $x = 1$: $f(1) = 2$, $f(-1) = -\\sqrt[3]{6}$ and $-f(1) = -2$.",
      "Neither: $f(-1)$ is equal to neither $f(1)$ nor $-f(1)$."
    ]
  },
  {
    "id": "t223-k1-p20",
    "topic": "even-and-odd-functions",
    "kind": "t223-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 5x^8 - 2x^2 - 9$ is even, odd or neither.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $f(x) = 5x^8 - 2x^2 - 9$ is even, odd or neither.",
      "$f(-x) = 5(-x)^8 - 2(-x)^2 - 9$",
      "$f(-x) = 5x^8 - 2x^2 - 9$",
      "$-f(x) = -5x^8 + 2x^2 + 9$",
      "Even: $f(-x) = f(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k2-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 1)$, $B(1, 1)$, $C(2, -2)$ and $D(4, 2)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-7.svg",
      "alt": "A broken line through marked points, among them A(0, 1), B(1, 1), C(2, −2) and D(4, 2); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 1)$, $B(1, 1)$, $C(2, -2)$ and $D(4, 2)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-1, 1)$, $(-2, -2)$ and $(-4, 2)$.",
      "The mirror images of $B$, $C$ and $D$ in the $y$-axis are $(-1, 1)$, $(-2, -2)$ and $(-4, 2)$.",
      "A half-turn about the origin carries $B$, $C$ and $D$ to $(-1, -1)$, $(-2, 2)$ and $(-4, -2)$.",
      "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis."
    ]
  },
  {
    "id": "t223-k2-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(2, 2)$ and $C(4, -3)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-9.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(2, 2) and C(4, −3); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(2, 2)$ and $C(4, -3)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, 2)$ and $(-4, -3)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, 2)$ and $(-4, -3)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-2, -2)$ and $(-4, 3)$.",
      "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis."
    ]
  },
  {
    "id": "t223-k2-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(2, -2)$, $C(3, 1)$ and $D(4, 4)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-13.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(2, −2), C(3, 1) and D(4, 4); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(2, -2)$, $C(3, 1)$ and $D(4, 4)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, 2)$, $(-3, -1)$ and $(-4, -4)$.",
      "The mirror images of $B$, $C$ and $D$ in the $y$-axis are $(-2, -2)$, $(-3, 1)$ and $(-4, 4)$.",
      "A half-turn about the origin carries $B$, $C$ and $D$ to $(-2, 2)$, $(-3, -1)$ and $(-4, -4)$.",
      "Odd: the marked points on the left are the half-turn images, and $A$ is the origin, so a half-turn about the origin carries the graph onto itself."
    ]
  },
  {
    "id": "t223-k2-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, -3)$, $B(2, -4)$ and $C(4, -2)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-6.svg",
      "alt": "A broken line through marked points, among them A(0, −3), B(2, −4) and C(4, −2); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, -3)$, $B(2, -4)$ and $C(4, -2)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, -4)$ and $(-4, -2)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, -4)$ and $(-4, -2)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-2, 4)$ and $(-4, 2)$.",
      "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis."
    ]
  },
  {
    "id": "t223-k2-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(3, 4)$ and $C(4, 1)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-11.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(3, 4) and C(4, 1); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(3, 4)$ and $C(4, 1)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-3, -4)$ and $(-4, -1)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-3, 4)$ and $(-4, 1)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-3, -4)$ and $(-4, -1)$.",
      "Odd: the marked points on the left are the half-turn images, and $A$ is the origin, so a half-turn about the origin carries the graph onto itself."
    ]
  },
  {
    "id": "t223-k2-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, -1)$, $B(1, 2)$, $C(3, 0)$ and $D(4, 3)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-15.svg",
      "alt": "A broken line through marked points, among them A(0, −1), B(1, 2), C(3, 0) and D(4, 3); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, -1)$, $B(1, 2)$, $C(3, 0)$ and $D(4, 3)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-1, 2)$, $(-3, 0)$ and $(-4, 1)$.",
      "The mirror images of $B$, $C$ and $D$ in the $y$-axis are $(-1, 2)$, $(-3, 0)$ and $(-4, 3)$.",
      "A half-turn about the origin carries $B$, $C$ and $D$ to $(-1, -2)$, $(-3, 0)$ and $(-4, -3)$.",
      "Neither: over $x = -4$ the graph has $(-4, 1)$, which is neither the mirror image $(-4, 3)$ of $D$ nor its half-turn image $(-4, -3)$."
    ]
  },
  {
    "id": "t223-k2-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 1)$, $B(2, 4)$ and $C(3, -2)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-17.svg",
      "alt": "A broken line through marked points, among them A(0, 1), B(2, 4) and C(3, −2); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 1)$, $B(2, 4)$ and $C(3, -2)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, 4)$ and $(-3, 2)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, 4)$ and $(-3, -2)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-2, -4)$ and $(-3, 2)$.",
      "Neither: over $x = -3$ the graph has $(-3, 2)$, not the mirror image $(-3, -2)$ of $C$, and over $x = 0$ it has $A$, not the half-turn image $(0, -1)$ of $A$."
    ]
  },
  {
    "id": "t223-k2-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(1, -2)$, $C(2, 1)$ and $D(4, 2)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-10.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(1, −2), C(2, 1) and D(4, 2); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(1, -2)$, $C(2, 1)$ and $D(4, 2)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-1, 2)$, $(-2, -1)$ and $(-4, -2)$.",
      "The mirror images of $B$, $C$ and $D$ in the $y$-axis are $(-1, -2)$, $(-2, 1)$ and $(-4, 2)$.",
      "A half-turn about the origin carries $B$, $C$ and $D$ to $(-1, 2)$, $(-2, -1)$ and $(-4, -2)$.",
      "Odd: the marked points on the left are the half-turn images, and $A$ is the origin, so a half-turn about the origin carries the graph onto itself."
    ]
  },
  {
    "id": "t223-k2-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 4)$, $B(2, 3)$ and $C(4, 0)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-5.svg",
      "alt": "A broken line through marked points, among them A(0, 4), B(2, 3) and C(4, 0); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 4)$, $B(2, 3)$ and $C(4, 0)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, 3)$ and $(-4, 0)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, 3)$ and $(-4, 0)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-2, -3)$ and $(-4, 0)$.",
      "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis."
    ]
  },
  {
    "id": "t223-k2-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(1, 3)$ and $C(4, -1)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-14.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(1, 3) and C(4, −1); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(1, 3)$ and $C(4, -1)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-1, -3)$ and $(-4, 1)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-1, 3)$ and $(-4, -1)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-1, -3)$ and $(-4, 1)$.",
      "Odd: the marked points on the left are the half-turn images, and $A$ is the origin, so a half-turn about the origin carries the graph onto itself."
    ]
  },
  {
    "id": "t223-k2-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 3)$, $B(1, 4)$ and $C(3, -4)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-8.svg",
      "alt": "A broken line through marked points, among them A(0, 3), B(1, 4) and C(3, −4); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 3)$, $B(1, 4)$ and $C(3, -4)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-1, 4)$ and $(-3, -4)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-1, 4)$ and $(-3, -4)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-1, -4)$ and $(-3, 4)$.",
      "Even: the marked points on the left are the mirror images, and $A$ lies on the $y$-axis, so the graph is its own mirror image in the $y$-axis."
    ]
  },
  {
    "id": "t223-k2-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(3, -2)$ and $C(4, 3)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-18.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(3, −2) and C(4, 3); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(3, -2)$ and $C(4, 3)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-3, -2)$ and $(-4, -1)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-3, -2)$ and $(-4, 3)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-3, 2)$ and $(-4, -3)$.",
      "Neither: over $x = -4$ the graph has $(-4, -1)$, which is neither the mirror image $(-4, 3)$ of $C$ nor its half-turn image $(-4, -3)$."
    ]
  },
  {
    "id": "t223-k2-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 4)$, $B(2, 2)$ and $C(4, 1)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-16.svg",
      "alt": "A broken line through marked points, among them A(0, 4), B(2, 2) and C(4, 1); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 4)$, $B(2, 2)$ and $C(4, 1)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, 4)$ and $(-4, 1)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, 2)$ and $(-4, 1)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-2, -2)$ and $(-4, -1)$.",
      "Neither: over $x = -2$ the graph has $(-2, 4)$, which is neither the mirror image $(-2, 2)$ of $B$ nor its half-turn image $(-2, -2)$."
    ]
  },
  {
    "id": "t223-k2-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(2, 3)$ and $C(4, -2)$; the others lie to the left of the $y$-axis.",
    "figure": {
      "file": "even-and-odd-functions-12.svg",
      "alt": "A broken line through marked points, among them A(0, 0), B(2, 3) and C(4, −2); the other marked points lie to the left of the y-axis."
    },
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether the function $f$ is even, odd or neither. The figure shows its whole graph: a broken line through the marked points, straight from each to the next. Among them are $A(0, 0)$, $B(2, 3)$ and $C(4, -2)$; the others lie to the left of the $y$-axis.",
      "To the left of the $y$-axis the marked points are $(-2, -3)$ and $(-4, 2)$.",
      "The mirror images of $B$ and $C$ in the $y$-axis are $(-2, 3)$ and $(-4, -2)$.",
      "A half-turn about the origin carries $B$ and $C$ to $(-2, -3)$ and $(-4, 2)$.",
      "Odd: the marked points on the left are the half-turn images, and $A$ is the origin, so a half-turn about the origin carries the graph onto itself."
    ]
  },
  {
    "id": "t223-k3-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x^2\\,f(x) - 6x\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = x^2\\,f(x) - 6x\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)^2\\,f(-x) - 6(-x)\\,g(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)^2\\,f(x) - 6(-x)\\,\\left(-g(x)\\right)$",
      "$h(-x) = x^2\\,f(x) - 6x\\,g(x)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g(x)^3 - 8f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = g(x)^3 - 8f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = g(-x)^3 - 8f(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = \\left(-g(x)\\right)^3 - 8f(x)$",
      "$h(-x) = -g(x)^3 - 8f(x)$",
      "With $f(x) = 1$ and $g(x) = x$, $h(x) = x^3 - 8$, so $h(1) = -7$ and $h(-1) = -9$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k3-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x\\,f(x)^2 - 9g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = x\\,f(x)^2 - 9g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)\\,f(-x)^2 - 9g(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)\\,f(x)^2 - 9\\left(-g(x)\\right)$",
      "$h(-x) = -x\\,f(x)^2 + 9g(x)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x^4\\,g(x) - 2x\\,f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = x^4\\,g(x) - 2x\\,f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)^4\\,g(-x) - 2(-x)\\,f(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)^4\\,\\left(-g(x)\\right) - 2(-x)\\,f(x)$",
      "$h(-x) = -x^4\\,g(x) + 2x\\,f(x)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x^3\\,f(x) + 2f(x)\\,g(x)^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = x^3\\,f(x) + 2f(x)\\,g(x)^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)^3\\,f(-x) + 2f(-x)\\,g(-x)^2$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)^3\\,f(x) + 2f(x)\\,\\left(-g(x)\\right)^2$",
      "$h(-x) = -x^3\\,f(x) + 2f(x)\\,g(x)^2$",
      "With $f(x) = 1$ and $g(x) = x$, $h(x) = x^3 + 2x^2$, so $h(1) = 3$ and $h(-1) = 1$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k3-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = 3f(x)\\,g(x)^4$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = 3f(x)\\,g(x)^4$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = 3f(-x)\\,g(-x)^4$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = 3f(x)\\,\\left(-g(x)\\right)^4$",
      "$h(-x) = 3f(x)\\,g(x)^4$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = 3f(x)\\,g(x) - x^4$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = 3f(x)\\,g(x) - x^4$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = 3f(-x)\\,g(-x) - (-x)^4$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = 3f(x)\\,\\left(-g(x)\\right) - (-x)^4$",
      "$h(-x) = -3f(x)\\,g(x) - x^4$",
      "With $f(x) = 1$ and $g(x) = x$, $h(x) = -x^4 + 3x$, so $h(1) = 2$ and $h(-1) = -4$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k3-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = 6f(x)^3\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = 6f(x)^3\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = 6f(-x)^3\\,g(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = 6f(x)^3\\,\\left(-g(x)\\right)$",
      "$h(-x) = -6f(x)^3\\,g(x)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x^5\\,f(x) - g(x)^4$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = x^5\\,f(x) - g(x)^4$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)^5\\,f(-x) - g(-x)^4$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)^5\\,f(x) - \\left(-g(x)\\right)^4$",
      "$h(-x) = -x^5\\,f(x) - g(x)^4$",
      "With $f(x) = 1$ and $g(x) = x$, $h(x) = x^5 - x^4$, so $h(1) = 0$ and $h(-1) = -2$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k3-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x\\,f(x) + g(x)^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = x\\,f(x) + g(x)^2$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)\\,f(-x) + g(-x)^2$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)\\,f(x) + \\left(-g(x)\\right)^2$",
      "$h(-x) = -x\\,f(x) + g(x)^2$",
      "With $f(x) = 1$ and $g(x) = x$, $h(x) = x^2 + x$, so $h(1) = 2$ and $h(-1) = 0$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k3-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x\\,f(x)\\,g(x)^3$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = x\\,f(x)\\,g(x)^3$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)\\,f(-x)\\,g(-x)^3$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)\\,f(x)\\,\\left(-g(x)\\right)^3$",
      "$h(-x) = x\\,f(x)\\,g(x)^3$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x^4\\,f(x)^2\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = x^4\\,f(x)^2\\,g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)^4\\,f(-x)^2\\,g(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)^4\\,f(x)^2\\,\\left(-g(x)\\right)$",
      "$h(-x) = -x^4\\,f(x)^2\\,g(x)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = 2x^3\\,g(x)^3 - f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = 2x^3\\,g(x)^3 - f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = 2(-x)^3\\,g(-x)^3 - f(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = 2(-x)^3\\,\\left(-g(x)\\right)^3 - f(x)$",
      "$h(-x) = 2x^3\\,g(x)^3 - f(x)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = x\\,g(x) - 5f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = x\\,g(x) - 5f(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = (-x)\\,g(-x) - 5f(-x)$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = (-x)\\,\\left(-g(x)\\right) - 5f(x)$",
      "$h(-x) = x\\,g(x) - 5f(x)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k3-p15",
    "topic": "even-and-odd-functions",
    "kind": "t223-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f(x)^2\\,g(x)^3$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = f(x)^2\\,g(x)^3$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = f(-x)^2\\,g(-x)^3$",
      "$f(-x) = f(x)$",
      "$g(-x) = -g(x)$",
      "$h(-x) = f(x)^2\\,\\left(-g(x)\\right)^3$",
      "$h(-x) = -f(x)^2\\,g(x)^3$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(x^2 - 6x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = g\\left(x^2 - 6x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left((-x)^2 - 6(-x)\\right)$",
      "$h(-x) = g\\left(x^2 + 6x\\right)$",
      "With $g(x) = x$, $h(x) = x^2 - 6x$, so $h(1) = -5$ and $h(-1) = 7$.",
      "Neither: for this $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k4-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(x^6 + 4\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = g\\left(x^6 + 4\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left((-x)^6 + 4\\right)$",
      "$h(-x) = g\\left(x^6 + 4\\right)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(x^7 - 2x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = g\\left(x^7 - 2x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left((-x)^7 - 2(-x)\\right)$",
      "$h(-x) = g\\left(-x^7 + 2x\\right)$",
      "$h(-x) = g\\left(-\\left(x^7 - 2x\\right)\\right)$",
      "$h(-x) = -g\\left(x^7 - 2x\\right)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(f(x)\\right) - g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = g\\left(f(x)\\right) - g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = g\\left(f(-x)\\right) - g(-x)$",
      "$h(-x) = g\\left(f(x)\\right) - g(-x)$",
      "$h(-x) = g\\left(f(x)\\right) - \\left(-g(x)\\right)$",
      "$h(-x) = g\\left(f(x)\\right) + g(x)$",
      "With $f(x) = x^2$ and $g(x) = x$, $h(x) = x^2 - x$, so $h(1) = 0$ and $h(-1) = 2$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k4-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(g(x)\\right) + 2x$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = g\\left(g(x)\\right) + 2x$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left(g(-x)\\right) + 2(-x)$",
      "$h(-x) = g\\left(-g(x)\\right) + 2(-x)$",
      "$h(-x) = -g\\left(g(x)\\right) + 2(-x)$",
      "$h(-x) = -g\\left(g(x)\\right) - 2x$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(2x^3 - 5\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = f\\left(2x^3 - 5\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
      "$h(-x) = f\\left(2(-x)^3 - 5\\right)$",
      "$h(-x) = f\\left(-2x^3 - 5\\right)$",
      "With $f(x) = x^2$, $h(x) = \\left(2x^3 - 5\\right)^2$, so $h(1) = 9$ and $h(-1) = 49$.",
      "Neither: for this $f$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k4-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(3x^9 - 8x^3\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = g\\left(3x^9 - 8x^3\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left(3(-x)^9 - 8(-x)^3\\right)$",
      "$h(-x) = g\\left(-3x^9 + 8x^3\\right)$",
      "$h(-x) = g\\left(-\\left(3x^9 - 8x^3\\right)\\right)$",
      "$h(-x) = -g\\left(3x^9 - 8x^3\\right)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(3x^5 + 2x^3\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = g\\left(3x^5 + 2x^3\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left(3(-x)^5 + 2(-x)^3\\right)$",
      "$h(-x) = g\\left(-3x^5 - 2x^3\\right)$",
      "$h(-x) = g\\left(-\\left(3x^5 + 2x^3\\right)\\right)$",
      "$h(-x) = -g\\left(3x^5 + 2x^3\\right)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(f(x)\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = f\\left(f(x)\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
      "$h(-x) = f\\left(f(-x)\\right)$",
      "$h(-x) = f\\left(f(x)\\right)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(g(x)\\right) + g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = f\\left(g(x)\\right) + g(x)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = f\\left(g(-x)\\right) + g(-x)$",
      "$h(-x) = f\\left(-g(x)\\right) - g(x)$",
      "$h(-x) = f\\left(g(x)\\right) - g(x)$",
      "With $f(x) = x^2$ and $g(x) = x$, $h(x) = x^2 + x$, so $h(1) = 2$ and $h(-1) = 0$.",
      "Neither: for these $f$ and $g$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k4-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(g(x)^3\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = f\\left(g(x)^3\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = f\\left(g(-x)^3\\right)$",
      "$h(-x) = f\\left(\\left(-g(x)\\right)^3\\right)$",
      "$h(-x) = f\\left(-g(x)^3\\right)$",
      "$h(-x) = f\\left(g(x)^3\\right)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(3x^4 - 5x^2\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = g\\left(3x^4 - 5x^2\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left(3(-x)^4 - 5(-x)^2\\right)$",
      "$h(-x) = g\\left(3x^4 - 5x^2\\right)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(x^7 + 2x^5 - 3x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = f\\left(x^7 + 2x^5 - 3x\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
      "$h(-x) = f\\left((-x)^7 + 2(-x)^5 - 3(-x)\\right)$",
      "$h(-x) = f\\left(-x^7 - 2x^5 + 3x\\right)$",
      "$h(-x) = f\\left(-\\left(x^7 + 2x^5 - 3x\\right)\\right)$",
      "$h(-x) = f\\left(x^7 + 2x^5 - 3x\\right)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(x^3 + 2x^2\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = f\\left(x^3 + 2x^2\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
      "$h(-x) = f\\left((-x)^3 + 2(-x)^2\\right)$",
      "$h(-x) = f\\left(-x^3 + 2x^2\\right)$",
      "With $f(x) = x^2$, $h(x) = \\left(x^3 + 2x^2\\right)^2$, so $h(1) = 9$ and $h(-1) = 1$.",
      "Neither: for this $f$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k4-p15",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(x\\,f(x)\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = g\\left(x\\,f(x)\\right)$ is even for every even function $f$ and every odd function $g$, odd for every such pair, or neither. Each function has domain all real numbers.",
      "$h(-x) = g\\left((-x)\\,f(-x)\\right)$",
      "$h(-x) = g\\left(-x\\,f(x)\\right)$",
      "$h(-x) = -g\\left(x\\,f(x)\\right)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p16",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = g\\left(2x^5 - x^3 + 4x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Odd",
    "solution": [
      "Decide whether $h(x) = g\\left(2x^5 - x^3 + 4x\\right)$ is even for every odd function $g$, odd for every such $g$, or neither. The domain of $g$ is all real numbers.",
      "$h(-x) = g\\left(2(-x)^5 - (-x)^3 + 4(-x)\\right)$",
      "$h(-x) = g\\left(-2x^5 + x^3 - 4x\\right)$",
      "$h(-x) = g\\left(-\\left(2x^5 - x^3 + 4x\\right)\\right)$",
      "$h(-x) = -g\\left(2x^5 - x^3 + 4x\\right)$",
      "Odd: $h(-x) = -h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p17",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(2x^6 - 7x^4\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Even",
    "solution": [
      "Decide whether $h(x) = f\\left(2x^6 - 7x^4\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
      "$h(-x) = f\\left(2(-x)^6 - 7(-x)^4\\right)$",
      "$h(-x) = f\\left(2x^6 - 7x^4\\right)$",
      "Even: $h(-x) = h(x)$ for every number $x$."
    ]
  },
  {
    "id": "t223-k4-p18",
    "topic": "even-and-odd-functions",
    "kind": "t223-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $h(x) = f\\left(5x + 4\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
    "form": "Answer as Even, Odd or Neither.",
    "answer": "Neither",
    "solution": [
      "Decide whether $h(x) = f\\left(5x + 4\\right)$ is even for every even function $f$, odd for every such $f$, or neither. The domain of $f$ is all real numbers.",
      "$h(-x) = f\\left(5(-x) + 4\\right)$",
      "$h(-x) = f\\left(-5x + 4\\right)$",
      "With $f(x) = x^2$, $h(x) = \\left(5x + 4\\right)^2$, so $h(1) = 81$ and $h(-1) = 1$.",
      "Neither: for this $f$, $h(-1)$ is equal to neither $h(1)$ nor $-h(1)$."
    ]
  },
  {
    "id": "t223-k5-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (x - 3)^3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-9*x^2-27",
    "solution": [
      "Find the even part of $f(x) = (x - 3)^3$.",
      "$f(x) = x^3 - 9x^2 + 27x - 27$",
      "$f(-x) = -x^3 - 9x^2 - 27x - 27$",
      "$f(x) + f(-x) = -18x^2 - 54$",
      "The even part is $-9x^2 - 27$."
    ]
  },
  {
    "id": "t223-k5-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (2x^2 + x - 3)(x^2 - 5x + 1)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "2*x^4-6*x^2-3",
    "solution": [
      "Find the even part of $f(x) = (2x^2 + x - 3)(x^2 - 5x + 1)$.",
      "$f(x) = 2x^4 - 9x^3 - 6x^2 + 16x - 3$",
      "$f(-x) = 2x^4 + 9x^3 - 6x^2 - 16x - 3$",
      "$f(x) + f(-x) = 4x^4 - 12x^2 - 6$",
      "The even part is $2x^4 - 6x^2 - 3$."
    ]
  },
  {
    "id": "t223-k5-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (x + 4)^3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+48*x",
    "solution": [
      "Find the odd part of $f(x) = (x + 4)^3$.",
      "$f(x) = x^3 + 12x^2 + 48x + 64$",
      "$f(-x) = -x^3 + 12x^2 - 48x + 64$",
      "$f(x) - f(-x) = 2x^3 + 96x$",
      "The odd part is $x^3 + 48x$."
    ]
  },
  {
    "id": "t223-k5-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (2x + 1)^3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "12*x^2+1",
    "solution": [
      "Find the even part of $f(x) = (2x + 1)^3$.",
      "$f(x) = 8x^3 + 12x^2 + 6x + 1$",
      "$f(-x) = -8x^3 + 12x^2 - 6x + 1$",
      "$f(x) + f(-x) = 24x^2 + 2$",
      "The even part is $12x^2 + 1$."
    ]
  },
  {
    "id": "t223-k5-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (x^2 - 3x + 2)(x^2 + 6x + 5)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "3*x^3-3*x",
    "solution": [
      "Find the odd part of $f(x) = (x^2 - 3x + 2)(x^2 + 6x + 5)$.",
      "$f(x) = x^4 + 3x^3 - 11x^2 - 3x + 10$",
      "$f(-x) = x^4 - 3x^3 - 11x^2 + 3x + 10$",
      "$f(x) - f(-x) = 6x^3 - 6x$",
      "The odd part is $3x^3 - 3x$."
    ]
  },
  {
    "id": "t223-k5-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (x^2 + 4x - 1)(2x^2 - x + 3)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "7*x^3+13*x",
    "solution": [
      "Find the odd part of $f(x) = (x^2 + 4x - 1)(2x^2 - x + 3)$.",
      "$f(x) = 2x^4 + 7x^3 - 3x^2 + 13x - 3$",
      "$f(-x) = 2x^4 - 7x^3 - 3x^2 - 13x - 3$",
      "$f(x) - f(-x) = 14x^3 + 26x$",
      "The odd part is $7x^3 + 13x$."
    ]
  },
  {
    "id": "t223-k5-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (x^2 - 2x + 5)(x^2 + 4x + 3)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4+15",
    "solution": [
      "Find the even part of $f(x) = (x^2 - 2x + 5)(x^2 + 4x + 3)$.",
      "$f(x) = x^4 + 2x^3 + 14x + 15$",
      "$f(-x) = x^4 - 2x^3 - 14x + 15$",
      "$f(x) + f(-x) = 2x^4 + 30$",
      "The even part is $x^4 + 15$."
    ]
  },
  {
    "id": "t223-k5-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (4x + 3)(x^2 - 2x - 2)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-5*x^2-6",
    "solution": [
      "Find the even part of $f(x) = (4x + 3)(x^2 - 2x - 2)$.",
      "$f(x) = 4x^3 - 5x^2 - 14x - 6$",
      "$f(-x) = -4x^3 - 5x^2 + 14x - 6$",
      "$f(x) + f(-x) = -10x^2 - 12$",
      "The even part is $-5x^2 - 6$."
    ]
  },
  {
    "id": "t223-k5-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (2x + 5)(x^2 - 3x - 4)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "2*x^3-23*x",
    "solution": [
      "Find the odd part of $f(x) = (2x + 5)(x^2 - 3x - 4)$.",
      "$f(x) = 2x^3 - x^2 - 23x - 20$",
      "$f(-x) = -2x^3 - x^2 + 23x - 20$",
      "$f(x) - f(-x) = 4x^3 - 46x$",
      "The odd part is $2x^3 - 23x$."
    ]
  },
  {
    "id": "t223-k5-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (5x + 3)(2x^2 - x - 2)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "10*x^3-13*x",
    "solution": [
      "Find the odd part of $f(x) = (5x + 3)(2x^2 - x - 2)$.",
      "$f(x) = 10x^3 + x^2 - 13x - 6$",
      "$f(-x) = -10x^3 + x^2 + 13x - 6$",
      "$f(x) - f(-x) = 20x^3 - 26x$",
      "The odd part is $10x^3 - 13x$."
    ]
  },
  {
    "id": "t223-k5-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (x - 4)(2x^2 + 3x + 6)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-5*x^2-24",
    "solution": [
      "Find the even part of $f(x) = (x - 4)(2x^2 + 3x + 6)$.",
      "$f(x) = 2x^3 - 5x^2 - 6x - 24$",
      "$f(-x) = -2x^3 - 5x^2 + 6x - 24$",
      "$f(x) + f(-x) = -10x^2 - 48$",
      "The even part is $-5x^2 - 24$."
    ]
  },
  {
    "id": "t223-k5-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the even part of $f(x) = (5x - 2)(x^2 + x - 3)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "3*x^2+6",
    "solution": [
      "Find the even part of $f(x) = (5x - 2)(x^2 + x - 3)$.",
      "$f(x) = 5x^3 + 3x^2 - 17x + 6$",
      "$f(-x) = -5x^3 + 3x^2 + 17x + 6$",
      "$f(x) + f(-x) = 6x^2 + 12$",
      "The even part is $3x^2 + 6$."
    ]
  },
  {
    "id": "t223-k5-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (3x + 1)^3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "27*x^3+9*x",
    "solution": [
      "Find the odd part of $f(x) = (3x + 1)^3$.",
      "$f(x) = 27x^3 + 27x^2 + 9x + 1$",
      "$f(-x) = -27x^3 + 27x^2 - 9x + 1$",
      "$f(x) - f(-x) = 54x^3 + 18x$",
      "The odd part is $27x^3 + 9x$."
    ]
  },
  {
    "id": "t223-k5-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the odd part of $f(x) = (x - 6)(3x^2 + 2x + 1)$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "3*x^3-11*x",
    "solution": [
      "Find the odd part of $f(x) = (x - 6)(3x^2 + 2x + 1)$.",
      "$f(x) = 3x^3 - 16x^2 - 11x - 6$",
      "$f(-x) = -3x^3 - 16x^2 + 11x - 6$",
      "$f(x) - f(-x) = 6x^3 - 22x$",
      "The odd part is $3x^3 - 11x$."
    ]
  },
  {
    "id": "t223-k6-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = x^7 + 5x^5 - 3x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-x)^7 + 5(-x)^5 - 3(-x)$",
      "$f(-x) = x^7 - 5x^5 + 3x$",
      "$-f(x) = -x^7 - 5x^5 + 3x$",
      "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = -x^7-5*x^5+3*x",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = x^7 + 5x^5 - 3x$ is even, odd or neither, and write that line right.",
      "Line 2 writes $(-x)^7$ as $x^7$, so the minus sign of the odd power is lost.",
      "Line 2 written right is $f(-x) = -x^7 - 5x^5 + 3x$."
    ]
  },
  {
    "id": "t223-k6-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (3x + 6)^2 - 16x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-3x + 6)^2 - 16(-x)$",
      "$f(-x) = 9x^2 - 20x + 36$",
      "$f(x) = 9x^2 - 16x + 36$",
      "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = 9*x^2+20*x+36",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (3x + 6)^2 - 16x$ is even, odd or neither, and write that line right.",
      "Line 3 squares $3x + 6$ term by term, as $9x^2 + 36$, and leaves out the middle term $36x$.",
      "Line 3 written right is $f(x) = 9x^2 + 20x + 36$."
    ]
  },
  {
    "id": "t223-k6-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = 7x^6 - 2x^4 - 5x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = 7(-x)^6 - 2(-x)^4 + 5(-x)$",
      "$f(-x) = 7x^6 - 2x^4 - 5x$",
      "$-f(x) = -7x^6 + 2x^4 + 5x$",
      "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(-x) = 7*(-x)^6-2*(-x)^4-5*(-x)",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = 7x^6 - 2x^4 - 5x$ is even, odd or neither, and write that line right.",
      "Line 1 writes the term $-5x$ of $f(x)$ as $+5(-x)$, so its minus sign is lost.",
      "Line 1 written right is $f(-x) = 7(-x)^6 - 2(-x)^4 - 5(-x)$."
    ]
  },
  {
    "id": "t223-k6-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (3x - 8)^2 - 10x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-3x - 8)^2 - 10(-x)$",
      "$f(-x) = 9x^2 + 10x + 64$",
      "$f(x) = 9x^2 - 58x + 64$",
      "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = 9*x^2+58*x+64",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (3x - 8)^2 - 10x$ is even, odd or neither, and write that line right.",
      "Line 2 squares $-3x - 8$ term by term, as $9x^2 + 64$, and leaves out the middle term $48x$.",
      "Line 2 written right is $f(-x) = 9x^2 + 58x + 64$."
    ]
  },
  {
    "id": "t223-k6-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = 6x^4 + x^3 - 3x^2$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = 6(-x)^4 + (-x)^3 - 3(-x)^2$",
      "$f(-x) = 6x^4 + x^3 - 3x^2$",
      "$-f(x) = -6x^4 - x^3 + 3x^2$",
      "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = 6*x^4-x^3-3*x^2",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = 6x^4 + x^3 - 3x^2$ is even, odd or neither, and write that line right.",
      "Line 2 writes $(-x)^3$ as $x^3$, so the minus sign of the odd power is lost.",
      "Line 2 written right is $f(-x) = 6x^4 - x^3 - 3x^2$."
    ]
  },
  {
    "id": "t223-k6-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = 3x^5 - 6x^4 + 8x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = 3(-x)^5 - 6(-x)^4 + 8(-x)$",
      "$f(-x) = -3x^5 - 6x^4 - 8x$",
      "$-f(x) = -3x^5 - 6x^4 - 8x$",
      "So $f(-x) = -f(x)$ for every number $x$, and $f$ is odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: -f(x) = -3*x^5+6*x^4-8*x",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = 3x^5 - 6x^4 + 8x$ is even, odd or neither, and write that line right.",
      "Line 3 leaves the term $-6x^4$ of $f(x)$ as it is, so the minus sign in front of $f(x)$ is lost on that term.",
      "Line 3 written right is $-f(x) = -3x^5 + 6x^4 - 8x$."
    ]
  },
  {
    "id": "t223-k6-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (4x + 6)^2 - 24x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-4x + 6)^2 - 24(-x)$",
      "$f(-x) = 16x^2 + 24x + 36$",
      "$f(x) = 16x^2 + 24x + 36$",
      "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = 16*x^2-24*x+36",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (4x + 6)^2 - 24x$ is even, odd or neither, and write that line right.",
      "Line 2 squares $-4x + 6$ term by term, as $16x^2 + 36$, and leaves out the middle term $-48x$.",
      "Line 2 written right is $f(-x) = 16x^2 - 24x + 36$."
    ]
  },
  {
    "id": "t223-k6-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = 9x^5 - 4x^3 - x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = 9(-x)^5 - 4(-x)^3 - (-x)$",
      "$f(-x) = -9x^5 + 4x^3 - x$",
      "$-f(x) = -9x^5 + 4x^3 + x$",
      "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = -9*x^5+4*x^3+x",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = 9x^5 - 4x^3 - x$ is even, odd or neither, and write that line right.",
      "Line 2 writes $-(-x)$ as $-x$, so the minus sign of the odd power is lost.",
      "Line 2 written right is $f(-x) = -9x^5 + 4x^3 + x$."
    ]
  },
  {
    "id": "t223-k6-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (x - 8)^2 + 8x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-x - 8)^2 + 8(-x)$",
      "$f(-x) = x^2 + 8x + 64$",
      "$f(x) = x^2 + 8x + 64$",
      "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = x^2-8*x+64",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (x - 8)^2 + 8x$ is even, odd or neither, and write that line right.",
      "Line 3 squares $x - 8$ term by term, as $x^2 + 64$, and leaves out the middle term $-16x$.",
      "Line 3 written right is $f(x) = x^2 - 8x + 64$."
    ]
  },
  {
    "id": "t223-k6-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = -2x^5 + 8x^3 - 7$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = -2(-x)^5 + 8(-x)^3 + 7$",
      "$f(-x) = 2x^5 - 8x^3 + 7$",
      "$-f(x) = 2x^5 - 8x^3 + 7$",
      "So $f(-x) = -f(x)$ for every number $x$, and $f$ is odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(-x) = -2*(-x)^5+8*(-x)^3-7",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = -2x^5 + 8x^3 - 7$ is even, odd or neither, and write that line right.",
      "Line 1 writes the term $-7$ of $f(x)$ as $+7$, so its minus sign is lost.",
      "Line 1 written right is $f(-x) = -2(-x)^5 + 8(-x)^3 - 7$."
    ]
  },
  {
    "id": "t223-k6-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (2x + 5)^2 - 10x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-2x + 5)^2 - 10(-x)$",
      "$f(-x) = 4x^2 - 10x + 25$",
      "$f(x) = 4x^2 - 10x + 25$",
      "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(x) = 4*x^2+10*x+25",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (2x + 5)^2 - 10x$ is even, odd or neither, and write that line right.",
      "Line 3 squares $2x + 5$ term by term, as $4x^2 + 25$, and leaves out the middle term $20x$.",
      "Line 3 written right is $f(x) = 4x^2 + 10x + 25$."
    ]
  },
  {
    "id": "t223-k6-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (5x - 4)^2 + 10x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-5x - 4)^2 + 10(-x)$",
      "$f(-x) = 25x^2 - 10x + 16$",
      "$f(x) = 25x^2 - 30x + 16$",
      "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = 25*x^2+30*x+16",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (5x - 4)^2 + 10x$ is even, odd or neither, and write that line right.",
      "Line 2 squares $-5x - 4$ term by term, as $25x^2 + 16$, and leaves out the middle term $40x$.",
      "Line 2 written right is $f(-x) = 25x^2 + 30x + 16$."
    ]
  },
  {
    "id": "t223-k6-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = 5x^7 - 9x^3 + 2x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = 5(-x)^7 - 9(-x)^3 + 2(-x)$",
      "$f(-x) = -5x^7 + 9x^3 - 2x$",
      "$-f(x) = -5x^7 - 9x^3 - 2x$",
      "So $f(-x)$ is neither $f(x)$ nor $-f(x)$, and $f$ is neither even nor odd."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: -f(x) = -5*x^7+9*x^3-2*x",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = 5x^7 - 9x^3 + 2x$ is even, odd or neither, and write that line right.",
      "Line 3 leaves the term $-9x^3$ of $f(x)$ as it is, so the minus sign in front of $f(x)$ is lost on that term.",
      "Line 3 written right is $-f(x) = -5x^7 + 9x^3 - 2x$."
    ]
  },
  {
    "id": "t223-k6-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working that decides whether $f(x) = (5x - 7)^2 + 35x$ is even, odd or neither, and write that line right.",
    "given": [
      "$f(-x) = (-5x - 7)^2 + 35(-x)$",
      "$f(-x) = 25x^2 - 35x + 49$",
      "$f(x) = 25x^2 - 35x + 49$",
      "So $f(-x) = f(x)$ for every number $x$, and $f$ is even."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: f(-x) = 25*x^2+35*x+49",
    "solution": [
      "Find the first wrong line in this working that decides whether $f(x) = (5x - 7)^2 + 35x$ is even, odd or neither, and write that line right.",
      "Line 2 squares $-5x - 7$ term by term, as $25x^2 + 49$, and leaves out the middle term $70x$.",
      "Line 2 written right is $f(-x) = 25x^2 + 35x + 49$."
    ]
  },
  {
    "id": "t223-k7-p01",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of the even function $f$ that has $f(x) = \\dfrac{1}{9}(x - 6)^2 - 1$ for every $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-9, 0)$",
        "$(-3, 0)$",
        "$(0, 3)$",
        "$(3, 0)$",
        "$(9, 0)$"
      ],
      "turning": [
        "$(-6, -1)$",
        "$(0, 3)$",
        "$(6, -1)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of the even function $f$ that has $f(x) = \\dfrac{1}{9}(x - 6)^2 - 1$ for every $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(6, -1)$ that opens upward.",
      "That part meets the $x$-axis where $\\dfrac{1}{9}(x - 6)^2 - 1 = 0$, that is where $(x - 6)^2 = 9$.",
      "So it meets the $x$-axis at $(3, 0)$ and $(9, 0)$.",
      "It meets the $y$-axis at $(0, 3)$.",
      "The graph also has the points $(-6, -1)$, $(-3, 0)$ and $(-9, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-28.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 3), with vertices at (6, −1) and (−6, −1), through (3, 0), (9, 0), (−3, 0) and (−9, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p02",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = (x - 4)^2 - 9$ whenever $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-7, 0)$",
        "$(-1, 0)$",
        "$(0, 7)$",
        "$(1, 0)$",
        "$(7, 0)$"
      ],
      "turning": [
        "$(-4, -9)$",
        "$(0, 7)$",
        "$(4, -9)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = (x - 4)^2 - 9$ whenever $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(4, -9)$ that opens upward.",
      "That part meets the $x$-axis where $(x - 4)^2 - 9 = 0$, that is where $(x - 4)^2 = 9$.",
      "So it meets the $x$-axis at $(1, 0)$ and $(7, 0)$.",
      "It meets the $y$-axis at $(0, 7)$.",
      "The graph also has the points $(-4, -9)$, $(-1, 0)$ and $(-7, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-27.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 7), with vertices at (4, −9) and (−4, −9), through (1, 0), (7, 0), (−1, 0) and (−7, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p03",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of the odd function $f$ that has $f(x) = 8\\left(x - \\dfrac{1}{2}\\right)^2 - 2$ for every $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-1, 0)$",
        "$(0, 0)$",
        "$(1, 0)$"
      ],
      "turning": [
        "$\\left(-\\dfrac{1}{2}, 2\\right)$",
        "$\\left(\\dfrac{1}{2}, -2\\right)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of the odd function $f$ that has $f(x) = 8\\left(x - \\dfrac{1}{2}\\right)^2 - 2$ for every $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $\\left(\\dfrac{1}{2}, -2\\right)$ that opens upward.",
      "That part meets the $x$-axis where $8\\left(x - \\dfrac{1}{2}\\right)^2 - 2 = 0$, that is where $\\left(x - \\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$.",
      "So it meets the $x$-axis at $(0, 0)$ and $(1, 0)$.",
      "It meets the $y$-axis at $(0, 0)$.",
      "The graph also has the points $\\left(-\\dfrac{1}{2}, 2\\right)$ and $(-1, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its image under a half-turn about the origin.",
        "figure": {
          "file": "even-and-odd-functions-36.svg",
          "alt": "A curve through the origin with vertices at (1/2, −2) and (−1/2, 2), through (1, 0) and (−1, 0); a half-turn about the origin carries it onto itself."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p04",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of the even function $f$ that has $f(x) = \\dfrac{1}{2}(x + 4)^2 - 2$ for every $x \\le 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-6, 0)$",
        "$(-2, 0)$",
        "$(0, 6)$",
        "$(2, 0)$",
        "$(6, 0)$"
      ],
      "turning": [
        "$(-4, -2)$",
        "$(0, 6)$",
        "$(4, -2)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of the even function $f$ that has $f(x) = \\dfrac{1}{2}(x + 4)^2 - 2$ for every $x \\le 0$.",
      "For $x \\le 0$ the graph is part of a parabola with vertex $(-4, -2)$ that opens upward.",
      "That part meets the $x$-axis where $\\dfrac{1}{2}(x + 4)^2 - 2 = 0$, that is where $(x + 4)^2 = 4$.",
      "So it meets the $x$-axis at $(-2, 0)$ and $(-6, 0)$.",
      "It meets the $y$-axis at $(0, 6)$.",
      "The graph also has the points $(4, -2)$, $(2, 0)$ and $(6, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\le 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-25.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 6), with vertices at (−4, −2) and (4, −2), through (−2, 0), (−6, 0), (2, 0) and (6, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p05",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $f$, an even function with $f(x) = -\\dfrac{1}{4}(x - 6)^2 + 1$ for $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-8, 0)$",
        "$(-4, 0)$",
        "$(0, -8)$",
        "$(4, 0)$",
        "$(8, 0)$"
      ],
      "turning": [
        "$(-6, 1)$",
        "$(0, -8)$",
        "$(6, 1)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $f$, an even function with $f(x) = -\\dfrac{1}{4}(x - 6)^2 + 1$ for $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(6, 1)$ that opens downward.",
      "That part meets the $x$-axis where $-\\dfrac{1}{4}(x - 6)^2 + 1 = 0$, that is where $(x - 6)^2 = 4$.",
      "So it meets the $x$-axis at $(4, 0)$ and $(8, 0)$.",
      "It meets the $y$-axis at $(0, -8)$.",
      "The graph also has the points $(-6, 1)$, $(-4, 0)$ and $(-8, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-26.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, −8), with vertices at (6, 1) and (−6, 1), through (4, 0), (8, 0), (−4, 0) and (−8, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p06",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of the odd function $f$ that has $f(x) = \\dfrac{1}{3}(x + 3)^2 - 3$ for every $x \\le 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-6, 0)$",
        "$(0, 0)$",
        "$(6, 0)$"
      ],
      "turning": [
        "$(-3, -3)$",
        "$(3, 3)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of the odd function $f$ that has $f(x) = \\dfrac{1}{3}(x + 3)^2 - 3$ for every $x \\le 0$.",
      "For $x \\le 0$ the graph is part of a parabola with vertex $(-3, -3)$ that opens upward.",
      "That part meets the $x$-axis where $\\dfrac{1}{3}(x + 3)^2 - 3 = 0$, that is where $(x + 3)^2 = 9$.",
      "So it meets the $x$-axis at $(0, 0)$ and $(-6, 0)$.",
      "It meets the $y$-axis at $(0, 0)$.",
      "The graph also has the points $(3, 3)$ and $(6, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\le 0$ together with its image under a half-turn about the origin.",
        "figure": {
          "file": "even-and-odd-functions-34.svg",
          "alt": "A curve through the origin with vertices at (−3, −3) and (3, 3), through (−6, 0) and (6, 0); a half-turn about the origin carries it onto itself."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p07",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $f$, an even function with $f(x) = 4\\left(x - \\dfrac{3}{2}\\right)^2 - 4$ for $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$\\left(-\\dfrac{5}{2}, 0\\right)$",
        "$\\left(-\\dfrac{1}{2}, 0\\right)$",
        "$(0, 5)$",
        "$\\left(\\dfrac{1}{2}, 0\\right)$",
        "$\\left(\\dfrac{5}{2}, 0\\right)$"
      ],
      "turning": [
        "$\\left(-\\dfrac{3}{2}, -4\\right)$",
        "$(0, 5)$",
        "$\\left(\\dfrac{3}{2}, -4\\right)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $f$, an even function with $f(x) = 4\\left(x - \\dfrac{3}{2}\\right)^2 - 4$ for $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $\\left(\\dfrac{3}{2}, -4\\right)$ that opens upward.",
      "That part meets the $x$-axis where $4\\left(x - \\dfrac{3}{2}\\right)^2 - 4 = 0$, that is where $\\left(x - \\dfrac{3}{2}\\right)^2 = 1$.",
      "So it meets the $x$-axis at $\\left(\\dfrac{1}{2}, 0\\right)$ and $\\left(\\dfrac{5}{2}, 0\\right)$.",
      "It meets the $y$-axis at $(0, 5)$.",
      "The graph also has the points $\\left(-\\dfrac{3}{2}, -4\\right)$, $\\left(-\\dfrac{1}{2}, 0\\right)$ and $\\left(-\\dfrac{5}{2}, 0\\right)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-23.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 5), with vertices at (3/2, −4) and (−3/2, −4), through (1/2, 0), (5/2, 0), (−1/2, 0) and (−5/2, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p08",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = 4\\left(x + \\dfrac{3}{2}\\right)^2 - 9$ whenever $x \\le 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-3, 0)$",
        "$(0, 0)$",
        "$(3, 0)$"
      ],
      "turning": [
        "$\\left(-\\dfrac{3}{2}, -9\\right)$",
        "$(0, 0)$",
        "$\\left(\\dfrac{3}{2}, -9\\right)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = 4\\left(x + \\dfrac{3}{2}\\right)^2 - 9$ whenever $x \\le 0$.",
      "For $x \\le 0$ the graph is part of a parabola with vertex $\\left(-\\dfrac{3}{2}, -9\\right)$ that opens upward.",
      "That part meets the $x$-axis where $4\\left(x + \\dfrac{3}{2}\\right)^2 - 9 = 0$, that is where $\\left(x + \\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4}$.",
      "So it meets the $x$-axis at $(0, 0)$ and $(-3, 0)$.",
      "It meets the $y$-axis at $(0, 0)$.",
      "The graph also has the points $\\left(\\dfrac{3}{2}, -9\\right)$ and $(3, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\le 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-32.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 0), with vertices at (−3/2, −9) and (3/2, −9), through (−3, 0) and (3, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p09",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = 4(x - 1)^2 - 1$ whenever $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$\\left(-\\dfrac{3}{2}, 0\\right)$",
        "$\\left(-\\dfrac{1}{2}, 0\\right)$",
        "$(0, 3)$",
        "$\\left(\\dfrac{1}{2}, 0\\right)$",
        "$\\left(\\dfrac{3}{2}, 0\\right)$"
      ],
      "turning": [
        "$(-1, -1)$",
        "$(0, 3)$",
        "$(1, -1)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = 4(x - 1)^2 - 1$ whenever $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(1, -1)$ that opens upward.",
      "That part meets the $x$-axis where $4(x - 1)^2 - 1 = 0$, that is where $(x - 1)^2 = \\dfrac{1}{4}$.",
      "So it meets the $x$-axis at $\\left(\\dfrac{1}{2}, 0\\right)$ and $\\left(\\dfrac{3}{2}, 0\\right)$.",
      "It meets the $y$-axis at $(0, 3)$.",
      "The graph also has the points $(-1, -1)$, $\\left(-\\dfrac{1}{2}, 0\\right)$ and $\\left(-\\dfrac{3}{2}, 0\\right)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-31.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 3), with vertices at (1, −1) and (−1, −1), through (1/2, 0), (3/2, 0), (−1/2, 0) and (−3/2, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p10",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $f$, an even function with $f(x) = \\dfrac{1}{4}(x + 6)^2 - 4$ for $x \\le 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-10, 0)$",
        "$(-2, 0)$",
        "$(0, 5)$",
        "$(2, 0)$",
        "$(10, 0)$"
      ],
      "turning": [
        "$(-6, -4)$",
        "$(0, 5)$",
        "$(6, -4)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $f$, an even function with $f(x) = \\dfrac{1}{4}(x + 6)^2 - 4$ for $x \\le 0$.",
      "For $x \\le 0$ the graph is part of a parabola with vertex $(-6, -4)$ that opens upward.",
      "That part meets the $x$-axis where $\\dfrac{1}{4}(x + 6)^2 - 4 = 0$, that is where $(x + 6)^2 = 16$.",
      "So it meets the $x$-axis at $(-2, 0)$ and $(-10, 0)$.",
      "It meets the $y$-axis at $(0, 5)$.",
      "The graph also has the points $(6, -4)$, $(2, 0)$ and $(10, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\le 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-29.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, 5), with vertices at (−6, −4) and (6, −4), through (−2, 0), (−10, 0), (2, 0) and (10, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p11",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $f$, an odd function with $f(x) = \\dfrac{1}{5}(x - 5)^2 - 5$ for $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-10, 0)$",
        "$(0, 0)$",
        "$(10, 0)$"
      ],
      "turning": [
        "$(-5, 5)$",
        "$(5, -5)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $f$, an odd function with $f(x) = \\dfrac{1}{5}(x - 5)^2 - 5$ for $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(5, -5)$ that opens upward.",
      "That part meets the $x$-axis where $\\dfrac{1}{5}(x - 5)^2 - 5 = 0$, that is where $(x - 5)^2 = 25$.",
      "So it meets the $x$-axis at $(0, 0)$ and $(10, 0)$.",
      "It meets the $y$-axis at $(0, 0)$.",
      "The graph also has the points $(-5, 5)$ and $(-10, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its image under a half-turn about the origin.",
        "figure": {
          "file": "even-and-odd-functions-35.svg",
          "alt": "A curve through the origin with vertices at (5, −5) and (−5, 5), through (10, 0) and (−10, 0); a half-turn about the origin carries it onto itself."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p12",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = -(x - 3)^2 + 4$ whenever $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-5, 0)$",
        "$(-1, 0)$",
        "$(0, -5)$",
        "$(1, 0)$",
        "$(5, 0)$"
      ],
      "turning": [
        "$(-3, 4)$",
        "$(0, -5)$",
        "$(3, 4)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = f(x)$, where $f$ is even and $f(x) = -(x - 3)^2 + 4$ whenever $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(3, 4)$ that opens downward.",
      "That part meets the $x$-axis where $-(x - 3)^2 + 4 = 0$, that is where $(x - 3)^2 = 4$.",
      "So it meets the $x$-axis at $(1, 0)$ and $(5, 0)$.",
      "It meets the $y$-axis at $(0, -5)$.",
      "The graph also has the points $(-3, 4)$, $(-1, 0)$ and $(-5, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-24.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, −5), with vertices at (3, 4) and (−3, 4), through (1, 0), (5, 0), (−1, 0) and (−5, 0)."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p13",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = f(x)$, where $f$ is odd and $f(x) = -2(x - 2)^2 + 8$ whenever $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-4, 0)$",
        "$(0, 0)$",
        "$(4, 0)$"
      ],
      "turning": [
        "$(-2, -8)$",
        "$(2, 8)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = f(x)$, where $f$ is odd and $f(x) = -2(x - 2)^2 + 8$ whenever $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(2, 8)$ that opens downward.",
      "That part meets the $x$-axis where $-2(x - 2)^2 + 8 = 0$, that is where $(x - 2)^2 = 4$.",
      "So it meets the $x$-axis at $(0, 0)$ and $(4, 0)$.",
      "It meets the $y$-axis at $(0, 0)$.",
      "The graph also has the points $(-2, -8)$ and $(-4, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its image under a half-turn about the origin.",
        "figure": {
          "file": "even-and-odd-functions-33.svg",
          "alt": "A curve through the origin with vertices at (2, 8) and (−2, −8), through (4, 0) and (−4, 0); a half-turn about the origin carries it onto itself."
        }
      }
    ]
  },
  {
    "id": "t223-k7-p14",
    "topic": "even-and-odd-functions",
    "kind": "t223-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of the even function $f$ that has $f(x) = -(x - 5)^2 + 16$ for every $x \\ge 0$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(-9, 0)$",
        "$(-1, 0)$",
        "$(0, -9)$",
        "$(1, 0)$",
        "$(9, 0)$"
      ],
      "turning": [
        "$(-5, 16)$",
        "$(0, -9)$",
        "$(5, 16)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of the even function $f$ that has $f(x) = -(x - 5)^2 + 16$ for every $x \\ge 0$.",
      "For $x \\ge 0$ the graph is part of a parabola with vertex $(5, 16)$ that opens downward.",
      "That part meets the $x$-axis where $-(x - 5)^2 + 16 = 0$, that is where $(x - 5)^2 = 16$.",
      "So it meets the $x$-axis at $(1, 0)$ and $(9, 0)$.",
      "It meets the $y$-axis at $(0, -9)$.",
      "The graph also has the points $(-5, 16)$, $(-1, 0)$ and $(-9, 0)$.",
      {
        "step": "The graph is the part of the parabola for $x \\ge 0$ together with its mirror image in the $y$-axis.",
        "figure": {
          "file": "even-and-odd-functions-30.svg",
          "alt": "Two half parabolas, mirror images in the y-axis, that meet at (0, −9), with vertices at (5, 16) and (−5, 16), through (1, 0), (9, 0), (−1, 0) and (−9, 0)."
        }
      }
    ]
  }
]
