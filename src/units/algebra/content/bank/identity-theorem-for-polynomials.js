export default [
  {
    "id": "t201-k1-p01",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find $f(0)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{k - 3}{k + 2}$ for $k = 2$, $k = 3$, $k = 4$ and $k = 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-9/8",
    "solution": [
      "Find $f(0)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{k - 3}{k + 2}$ for $k = 2$, $k = 3$, $k = 4$ and $k = 6$.",
      "For each of $k = 2$, $k = 3$, $k = 4$ and $k = 6$, the product $(k + 2)f(k)$ is $k - 3$.",
      "The polynomial $h(x) = (x + 2)f(x) - (x - 3)$ is $0$ at $x = 2$, $x = 3$, $x = 4$ and $x = 6$.",
      "The polynomial $h(x)$ has degree $4$.",
      "The polynomial $h(x)$ is $a(x - 2)(x - 3)(x - 4)(x - 6)$, with $a$ its leading coefficient.",
      "$h(-2) = 5$",
      "$5 = a(-2 - 2)(-2 - 3)(-2 - 4)(-2 - 6)$",
      "$5 = 960a$",
      "$a = \\dfrac{1}{192}$",
      "$(0 + 2)f(0) - (0 - 3) = \\dfrac{1}{192}(0 - 2)(0 - 3)(0 - 4)(0 - 6)$",
      "$2f(0) + 3 = \\dfrac{3}{4}$",
      "$2f(0) = -\\dfrac{9}{4}$",
      "$f(0) = -\\dfrac{9}{8}$"
    ]
  },
  {
    "id": "t201-k1-p02",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find $f(-3)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = \\dfrac{4}{k - 5}$ for $k = 3$, $k = 4$ and $k = 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "94",
    "solution": [
      "Find $f(-3)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = \\dfrac{4}{k - 5}$ for $k = 3$, $k = 4$ and $k = 6$.",
      "For each of $k = 3$, $k = 4$ and $k = 6$, the product $(k - 5)f(k)$ is $4$.",
      "The polynomial $h(x) = (x - 5)f(x) - 4$ is $0$ at $x = 3$, $x = 4$ and $x = 6$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x - 3)(x - 4)(x - 6)$, with $a$ its leading coefficient.",
      "$h(5) = -4$",
      "$-4 = a(5 - 3)(5 - 4)(5 - 6)$",
      "$-4 = -2a$",
      "$a = 2$",
      "$(-3 - 5)f(-3) - 4 = 2(-3 - 3)(-3 - 4)(-3 - 6)$",
      "$-8f(-3) - 4 = -756$",
      "$-8f(-3) = -752$",
      "$f(-3) = 94$"
    ]
  },
  {
    "id": "t201-k1-p03",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $f(3)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $-3$ and $f(k) = 8k^3 - 17k^2 + 7k$ for $k = -2$, $k = -1$, $k = 1$ and $k = 5$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "324",
    "solution": [
      "Find $f(3)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $-3$ and $f(k) = 8k^3 - 17k^2 + 7k$ for $k = -2$, $k = -1$, $k = 1$ and $k = 5$.",
      "The polynomial $h(x) = f(x) - (8x^3 - 17x^2 + 7x)$ is $0$ at $x = -2$, $x = -1$, $x = 1$ and $x = 5$.",
      "The polynomial $h(x)$ has degree $4$ and leading coefficient $-3$.",
      "$h(x) = -3(x + 2)(x + 1)(x - 1)(x - 5)$",
      "$f(3) - (8 \\cdot 3^3 - 17 \\cdot 3^2 + 7 \\cdot 3) = -3(3 + 2)(3 + 1)(3 - 1)(3 - 5)$",
      "$f(3) - 84 = 240$",
      "$f(3) = 324$"
    ]
  },
  {
    "id": "t201-k1-p04",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find $f(5)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(-4) = -127$, $f(-1) = -22$ and $f(0) = -15$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-190",
    "solution": [
      "Find $f(5)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(-4) = -127$, $f(-1) = -22$ and $f(0) = -15$.",
      "The values are those of $g(x) = -7x^2 - 15$ at $x = -4$, $x = -1$ and $x = 0$.",
      "The polynomial $h(x) = f(x) - (-7x^2 - 15)$ is $0$ at $x = -4$, $x = -1$ and $x = 0$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = -7x^2 - 15$",
      "$f(5) = -7 \\cdot 5^2 - 15$",
      "$f(5) = -190$"
    ]
  },
  {
    "id": "t201-k1-p05",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $f(4)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $2$ and $f(k) = 3k^3 - 9k + 8$ for $k = -5$, $k = -3$, $k = 3$ and $k = 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-88",
    "solution": [
      "Find $f(4)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $2$ and $f(k) = 3k^3 - 9k + 8$ for $k = -5$, $k = -3$, $k = 3$ and $k = 6$.",
      "The polynomial $h(x) = f(x) - (3x^3 - 9x + 8)$ is $0$ at $x = -5$, $x = -3$, $x = 3$ and $x = 6$.",
      "The polynomial $h(x)$ has degree $4$ and leading coefficient $2$.",
      "$h(x) = 2(x + 5)(x + 3)(x - 3)(x - 6)$",
      "$f(4) - (3 \\cdot 4^3 - 9 \\cdot 4 + 8) = 2(4 + 5)(4 + 3)(4 - 3)(4 - 6)$",
      "$f(4) - 164 = -252$",
      "$f(4) = -88$"
    ]
  },
  {
    "id": "t201-k1-p06",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $4$ and $f(k) = -6k^2 - 7k - 11$ for $k = 1$, $k = 2$ and $k = 4$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-1039",
    "solution": [
      "Find $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $4$ and $f(k) = -6k^2 - 7k - 11$ for $k = 1$, $k = 2$ and $k = 4$.",
      "The polynomial $h(x) = f(x) - (-6x^2 - 7x - 11)$ is $0$ at $x = 1$, $x = 2$ and $x = 4$.",
      "The polynomial $h(x)$ has degree $3$ and leading coefficient $4$.",
      "$h(x) = 4(x - 1)(x - 2)(x - 4)$",
      "$f(-4) - (-6 \\cdot (-4)^2 - 7 \\cdot (-4) - 11) = 4(-4 - 1)(-4 - 2)(-4 - 4)$",
      "$f(-4) + 79 = -960$",
      "$f(-4) = -1039$"
    ]
  },
  {
    "id": "t201-k1-p07",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $f(2)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = -7k^2 - 9k - 3$ for $k = -3$, $k = 1$ and $k = 6$, and $f(3) = 15$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "11",
    "solution": [
      "Find $f(2)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = -7k^2 - 9k - 3$ for $k = -3$, $k = 1$ and $k = 6$, and $f(3) = 15$.",
      "The polynomial $h(x) = f(x) - (-7x^2 - 9x - 3)$ is $0$ at $x = -3$, $x = 1$ and $x = 6$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x + 3)(x - 1)(x - 6)$, with $a$ its leading coefficient.",
      "$15 - (-7 \\cdot 3^2 - 9 \\cdot 3 - 3) = a(3 + 3)(3 - 1)(3 - 6)$",
      "$108 = -36a$",
      "$a = -3$",
      "$f(2) - (-7 \\cdot 2^2 - 9 \\cdot 2 - 3) = -3(2 + 3)(2 - 1)(2 - 6)$",
      "$f(2) + 49 = 60$",
      "$f(2) = 11$"
    ]
  },
  {
    "id": "t201-k1-p08",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-2) = -41$, $f(0) = -9$, $f(2) = 23$ and $f(3) = 99$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-509",
    "solution": [
      "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-2) = -41$, $f(0) = -9$, $f(2) = 23$ and $f(3) = 99$.",
      "The values are those of $g(x) = 4x^3 - 9$ at $x = -2$, $x = 0$, $x = 2$ and $x = 3$.",
      "The polynomial $h(x) = f(x) - (4x^3 - 9)$ is $0$ at $x = -2$, $x = 0$, $x = 2$ and $x = 3$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = 4x^3 - 9$",
      "$f(-5) = 4 \\cdot (-5)^3 - 9$",
      "$f(-5) = -509$"
    ]
  },
  {
    "id": "t201-k1-p09",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $f(-2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $3$ and $f(k) = -8k^2 - 8k + 13$ for $k = -4$, $k = -3$ and $k = -1$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-9",
    "solution": [
      "Find $f(-2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $3$ and $f(k) = -8k^2 - 8k + 13$ for $k = -4$, $k = -3$ and $k = -1$.",
      "The polynomial $h(x) = f(x) - (-8x^2 - 8x + 13)$ is $0$ at $x = -4$, $x = -3$ and $x = -1$.",
      "The polynomial $h(x)$ has degree $3$ and leading coefficient $3$.",
      "$h(x) = 3(x + 4)(x + 3)(x + 1)$",
      "$f(-2) - (-8 \\cdot (-2)^2 - 8 \\cdot (-2) + 13) = 3(-2 + 4)(-2 + 3)(-2 + 1)$",
      "$f(-2) + 3 = -6$",
      "$f(-2) = -9$"
    ]
  },
  {
    "id": "t201-k1-p10",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $f(6)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = 8k^2 - 6k - 18$ for $k = 1$, $k = 3$ and $k = 5$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "234",
    "solution": [
      "Find $f(6)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = 8k^2 - 6k - 18$ for $k = 1$, $k = 3$ and $k = 5$.",
      "The polynomial $h(x) = f(x) - (8x^2 - 6x - 18)$ is $0$ at $x = 1$, $x = 3$ and $x = 5$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = 8x^2 - 6x - 18$",
      "$f(6) = 8 \\cdot 6^2 - 6 \\cdot 6 - 18$",
      "$f(6) = 234$"
    ]
  },
  {
    "id": "t201-k1-p11",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $f(4)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = -6k^2 + 9k - 8$ for $k = -4$, $k = 2$ and $k = 6$, and $f(-3) = -179$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-4",
    "solution": [
      "Find $f(4)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = -6k^2 + 9k - 8$ for $k = -4$, $k = 2$ and $k = 6$, and $f(-3) = -179$.",
      "The polynomial $h(x) = f(x) - (-6x^2 + 9x - 8)$ is $0$ at $x = -4$, $x = 2$ and $x = 6$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x + 4)(x - 2)(x - 6)$, with $a$ its leading coefficient.",
      "$-179 - (-6 \\cdot (-3)^2 + 9 \\cdot (-3) - 8) = a(-3 + 4)(-3 - 2)(-3 - 6)$",
      "$-90 = 45a$",
      "$a = -2$",
      "$f(4) - (-6 \\cdot 4^2 + 9 \\cdot 4 - 8) = -2(4 + 4)(4 - 2)(4 - 6)$",
      "$f(4) + 68 = 64$",
      "$f(4) = -4$"
    ]
  },
  {
    "id": "t201-k1-p12",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find $f(5)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = \\dfrac{k + 6}{k + 2}$ for $k = -3$, $k = 2$ and $k = 3$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1/5",
    "solution": [
      "Find $f(5)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = \\dfrac{k + 6}{k + 2}$ for $k = -3$, $k = 2$ and $k = 3$.",
      "For each of $k = -3$, $k = 2$ and $k = 3$, the product $(k + 2)f(k)$ is $k + 6$.",
      "The polynomial $h(x) = (x + 2)f(x) - (x + 6)$ is $0$ at $x = -3$, $x = 2$ and $x = 3$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x + 3)(x - 2)(x - 3)$, with $a$ its leading coefficient.",
      "$h(-2) = -4$",
      "$-4 = a(-2 + 3)(-2 - 2)(-2 - 3)$",
      "$-4 = 20a$",
      "$a = -\\dfrac{1}{5}$",
      "$(5 + 2)f(5) - (5 + 6) = -\\dfrac{1}{5}(5 + 3)(5 - 2)(5 - 3)$",
      "$7f(5) - 11 = -\\dfrac{48}{5}$",
      "$7f(5) = \\dfrac{7}{5}$",
      "$f(5) = \\dfrac{1}{5}$"
    ]
  },
  {
    "id": "t201-k1-p13",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $f(-2)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(k) = -7k^2 - 13k + 9$ for $k = -3$, $k = 0$, $k = 1$ and $k = 5$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "7",
    "solution": [
      "Find $f(-2)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(k) = -7k^2 - 13k + 9$ for $k = -3$, $k = 0$, $k = 1$ and $k = 5$.",
      "The polynomial $h(x) = f(x) - (-7x^2 - 13x + 9)$ is $0$ at $x = -3$, $x = 0$, $x = 1$ and $x = 5$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = -7x^2 - 13x + 9$",
      "$f(-2) = -7 \\cdot (-2)^2 - 13 \\cdot (-2) + 9$",
      "$f(-2) = 7$"
    ]
  },
  {
    "id": "t201-k1-p14",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $f(4)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = -7k^2 + 6k + 13$ for $k = 0$, $k = 2$ and $k = 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-75",
    "solution": [
      "Find $f(4)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = -7k^2 + 6k + 13$ for $k = 0$, $k = 2$ and $k = 6$.",
      "The polynomial $h(x) = f(x) - (-7x^2 + 6x + 13)$ is $0$ at $x = 0$, $x = 2$ and $x = 6$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = -7x^2 + 6x + 13$",
      "$f(4) = -7 \\cdot 4^2 + 6 \\cdot 4 + 13$",
      "$f(4) = -75$"
    ]
  },
  {
    "id": "t201-k1-p15",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = -8k^2 - 7k - 9$ for $k = -4$, $k = -2$ and $k = 6$, and $f(1) = -74$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-24",
    "solution": [
      "Find $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = -8k^2 - 7k - 9$ for $k = -4$, $k = -2$ and $k = 6$, and $f(1) = -74$.",
      "The polynomial $h(x) = f(x) - (-8x^2 - 7x - 9)$ is $0$ at $x = -4$, $x = -2$ and $x = 6$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x + 4)(x + 2)(x - 6)$, with $a$ its leading coefficient.",
      "$-74 - (-8 \\cdot 1^2 - 7 \\cdot 1 - 9) = a(1 + 4)(1 + 2)(1 - 6)$",
      "$-50 = -75a$",
      "$a = \\dfrac{2}{3}$",
      "$f(-1) - (-8 \\cdot (-1)^2 - 7 \\cdot (-1) - 9) = \\dfrac{2}{3}(-1 + 4)(-1 + 2)(-1 - 6)$",
      "$f(-1) + 10 = -14$",
      "$f(-1) = -24$"
    ]
  },
  {
    "id": "t201-k1-p16",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find $f(3)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-3) = 43$, $f(-2) = 5$, $f(0) = -11$ and $f(2) = -27$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-65",
    "solution": [
      "Find $f(3)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-3) = 43$, $f(-2) = 5$, $f(0) = -11$ and $f(2) = -27$.",
      "The values are those of $g(x) = -2x^3 - 11$ at $x = -3$, $x = -2$, $x = 0$ and $x = 2$.",
      "The polynomial $h(x) = f(x) - (-2x^3 - 11)$ is $0$ at $x = -3$, $x = -2$, $x = 0$ and $x = 2$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = -2x^3 - 11$",
      "$f(3) = -2 \\cdot 3^3 - 11$",
      "$f(3) = -65$"
    ]
  },
  {
    "id": "t201-k1-p17",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find $f(6)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = -\\dfrac{8}{k - 4}$ for $k = -1$, $k = 3$ and $k = 5$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-104/5",
    "solution": [
      "Find $f(6)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = -\\dfrac{8}{k - 4}$ for $k = -1$, $k = 3$ and $k = 5$.",
      "For each of $k = -1$, $k = 3$ and $k = 5$, the product $(k - 4)f(k)$ is $-8$.",
      "The polynomial $h(x) = (x - 4)f(x) + 8$ is $0$ at $x = -1$, $x = 3$ and $x = 5$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x + 1)(x - 3)(x - 5)$, with $a$ its leading coefficient.",
      "$h(4) = 8$",
      "$8 = a(4 + 1)(4 - 3)(4 - 5)$",
      "$8 = -5a$",
      "$a = -\\dfrac{8}{5}$",
      "$(6 - 4)f(6) + 8 = -\\dfrac{8}{5}(6 + 1)(6 - 3)(6 - 5)$",
      "$2f(6) + 8 = -\\dfrac{168}{5}$",
      "$2f(6) = -\\dfrac{208}{5}$",
      "$f(6) = -\\dfrac{104}{5}$"
    ]
  },
  {
    "id": "t201-k1-p18",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 3k^2 + 16k - 11$ for $k = -4$, $k = 1$ and $k = 5$, and $f(2) = 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "16",
    "solution": [
      "Find $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 3k^2 + 16k - 11$ for $k = -4$, $k = 1$ and $k = 5$, and $f(2) = 6$.",
      "The polynomial $h(x) = f(x) - (3x^2 + 16x - 11)$ is $0$ at $x = -4$, $x = 1$ and $x = 5$.",
      "The polynomial $h(x)$ has degree $3$.",
      "The polynomial $h(x)$ is $a(x + 4)(x - 1)(x - 5)$, with $a$ its leading coefficient.",
      "$6 - (3 \\cdot 2^2 + 16 \\cdot 2 - 11) = a(2 + 4)(2 - 1)(2 - 5)$",
      "$-27 = -18a$",
      "$a = \\dfrac{3}{2}$",
      "$f(-3) - (3 \\cdot (-3)^2 + 16 \\cdot (-3) - 11) = \\dfrac{3}{2}(-3 + 4)(-3 - 1)(-3 - 5)$",
      "$f(-3) + 32 = 48$",
      "$f(-3) = 16$"
    ]
  },
  {
    "id": "t201-k1-p19",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find $f(5)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-2) = -4$, $f(-1) = -13$, $f(0) = -16$ and $f(1) = -13$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "59",
    "solution": [
      "Find $f(5)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-2) = -4$, $f(-1) = -13$, $f(0) = -16$ and $f(1) = -13$.",
      "The values are those of $g(x) = 3x^2 - 16$ at $x = -2$, $x = -1$, $x = 0$ and $x = 1$.",
      "The polynomial $h(x) = f(x) - (3x^2 - 16)$ is $0$ at $x = -2$, $x = -1$, $x = 0$ and $x = 1$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = 3x^2 - 16$",
      "$f(5) = 3 \\cdot 5^2 - 16$",
      "$f(5) = 59$"
    ]
  },
  {
    "id": "t201-k1-p20",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = -5k^2 + 13k + 7$ for $k = 0$, $k = 5$ and $k = 6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-183",
    "solution": [
      "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = -5k^2 + 13k + 7$ for $k = 0$, $k = 5$ and $k = 6$.",
      "The polynomial $h(x) = f(x) - (-5x^2 + 13x + 7)$ is $0$ at $x = 0$, $x = 5$ and $x = 6$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = -5x^2 + 13x + 7$",
      "$f(-5) = -5 \\cdot (-5)^2 + 13 \\cdot (-5) + 7$",
      "$f(-5) = -183$"
    ]
  },
  {
    "id": "t201-k2-p01",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(5)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-2$ that has the same values as $g(x) = 5x^2 + 10x + 11$ at $x = -4$, $x = 2$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (5x^2 + 10x + 11) = -2(x - 4)(x - 2)(x - 6)$",
      "$f(5) - (5 \\cdot 5^2 + 10 \\cdot 5 + 11) = -2(5 - 4)(5 - 2)(5 - 6)$",
      "$f(5) - 186 = -2 \\cdot 1 \\cdot 3 \\cdot (-1)$",
      "$f(5) - 186 = 6$",
      "$f(5) = 192$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(x)-(5*x^2+10*x+11) = -2*(x+4)*(x-2)*(x-6)",
    "solution": [
      "Find the first wrong line in this working for $f(5)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-2$ that has the same values as $g(x) = 5x^2 + 10x + 11$ at $x = -4$, $x = 2$ and $x = 6$, and write that line right.",
      "Line 1 writes the bracket for $-4$ as $x - 4$, so the minus sign of $-4$ is lost.",
      "No line comes before line 1, and each later line follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(x) - (5x^2 + 10x + 11) = -2(x + 4)(x - 2)(x - 6)$."
    ]
  },
  {
    "id": "t201-k2-p02",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-5$ that has the same values as $g(x) = -5x^2 + 8x + 12$ at $x = -5$, $x = 2$ and $x = 5$, and write that line right.",
    "given": [
      "$f(x) - (-5x^2 + 8x + 12) = -5(x + 5)(x - 2)(x - 5)$",
      "$f(-2) - (-5 \\cdot (-2)^2 + 8 \\cdot (-2) + 12) = -5(-2 + 5)(-2 - 2)(-2 - 5)$",
      "$f(-2) + 24 = -5 \\cdot 3 \\cdot (-4) \\cdot (-7)$",
      "$f(-2) + 24 = -420$",
      "$f(-2) = -396$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: f(-2) = -444",
    "solution": [
      "Find the first wrong line in this working for $f(-2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-5$ that has the same values as $g(x) = -5x^2 + 8x + 12$ at $x = -5$, $x = 2$ and $x = 5$, and write that line right.",
      "Line 5 adds $24$ to $-420$, but $24$ is taken from both sides of line 4.",
      "The lines above line 5 are right, so line 5 is the first wrong line.",
      "Line 5 written right is $f(-2) = -444$."
    ]
  },
  {
    "id": "t201-k2-p03",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $3$ that has the same values as $g(x) = 4x^2 + 17x - 2$ at $x = -2$, $x = 5$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (4x^2 + 17x - 2) = 3(x - 2)(x - 5)(x - 6)$",
      "$f(-3) - (4 \\cdot (-3)^2 + 17 \\cdot (-3) - 2) = 3(-3 - 2)(-3 - 5)(-3 - 6)$",
      "$f(-3) + 17 = 3 \\cdot (-5) \\cdot (-8) \\cdot (-9)$",
      "$f(-3) + 17 = -1080$",
      "$f(-3) = -1097$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(x)-(4*x^2+17*x-2) = 3*(x+2)*(x-5)*(x-6)",
    "solution": [
      "Find the first wrong line in this working for $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $3$ that has the same values as $g(x) = 4x^2 + 17x - 2$ at $x = -2$, $x = 5$ and $x = 6$, and write that line right.",
      "Line 1 writes the bracket for $-2$ as $x - 2$, so the minus sign of $-2$ is lost.",
      "No line comes before line 1, and each later line follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(x) - (4x^2 + 17x - 2) = 3(x + 2)(x - 5)(x - 6)$."
    ]
  },
  {
    "id": "t201-k2-p04",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $2$ that has the same values as $g(x) = 4x^2 - 11x - 8$ at $x = -3$, $x = 1$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (4x^2 - 11x - 8) = 2(x + 3)(x - 1)(x - 6)$",
      "$f(2) - (4 \\cdot 2^2 - 11 \\cdot 2 - 8) = 2(2 + 3)(2 - 1)(2 - 6)$",
      "$f(2) + 14 = 2 \\cdot 5 \\cdot 1 \\cdot 4$",
      "$f(2) + 14 = 40$",
      "$f(2) = 26$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(2)+14 = 2*5*1*(-4)",
    "solution": [
      "Find the first wrong line in this working for $f(2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $2$ that has the same values as $g(x) = 4x^2 - 11x - 8$ at $x = -3$, $x = 1$ and $x = 6$, and write that line right.",
      "Line 3 gives the bracket $(2 - 6)$ the value $4$, but its value is $-4$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(2) + 14 = 2 \\cdot 5 \\cdot 1 \\cdot (-4)$."
    ]
  },
  {
    "id": "t201-k2-p05",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $2$ that has the same values as $g(x) = -5x^2 + 14$ at $x = -1$, $x = 1$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (-5x^2 + 14) = 2(x + 1)(x - 1)(x - 6)$",
      "$f(4) - (-5 \\cdot 4^2 + 14) = 2(4 + 1)(4 - 1)(4 - 6)$",
      "$f(4) + 66 = 2 \\cdot 5 \\cdot 3 \\cdot (-2)$",
      "$f(4) + 66 = 60$",
      "$f(4) = -6$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: f(4)+66 = -60",
    "solution": [
      "Find the first wrong line in this working for $f(4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $2$ that has the same values as $g(x) = -5x^2 + 14$ at $x = -1$, $x = 1$ and $x = 6$, and write that line right.",
      "Line 4 gives the product of line 3 the value $60$, but its value is $-60$.",
      "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $f(4) + 66 = -60$."
    ]
  },
  {
    "id": "t201-k2-p06",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-4$ that has the same values as $g(x) = -6x^2 - 8x - 17$ at $x = -4$, $x = -1$ and $x = 2$, and write that line right.",
    "given": [
      "$f(x) - (-6x^2 - 8x - 17) = -4(x + 4)(x + 1)(x - 2)$",
      "$f(4) - (-6 \\cdot 4^2 - 8 \\cdot 4 - 17) = -4(4 + 4)(4 + 1)(4 - 2)$",
      "$f(4) + 145 = -4 \\cdot 8 \\cdot 5 \\cdot 2$",
      "$f(4) + 145 = -320$",
      "$f(4) = -175$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: f(4) = -465",
    "solution": [
      "Find the first wrong line in this working for $f(4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-4$ that has the same values as $g(x) = -6x^2 - 8x - 17$ at $x = -4$, $x = -1$ and $x = 2$, and write that line right.",
      "Line 5 adds $145$ to $-320$, but $145$ is taken from both sides of line 4.",
      "The lines above line 5 are right, so line 5 is the first wrong line.",
      "Line 5 written right is $f(4) = -465$."
    ]
  },
  {
    "id": "t201-k2-p07",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $5$ that has the same values as $g(x) = 3x^2 - 5x + 17$ at $x = 1$, $x = 4$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (3x^2 - 5x + 17) = 5(x - 1)(x - 4)(x - 6)$",
      "$f(-3) - (3 \\cdot (-3)^2 - 5 \\cdot (-3) + 17) = 5(-3 - 1)(-3 - 4)(-3 - 6)$",
      "$f(-3) - 59 = 5 \\cdot (-4) \\cdot (-7) \\cdot (-9)$",
      "$f(-3) - 59 = 1260$",
      "$f(-3) = 1319$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: f(-3)-59 = -1260",
    "solution": [
      "Find the first wrong line in this working for $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $5$ that has the same values as $g(x) = 3x^2 - 5x + 17$ at $x = 1$, $x = 4$ and $x = 6$, and write that line right.",
      "Line 4 gives the product of line 3 the value $1260$, but its value is $-1260$.",
      "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $f(-3) - 59 = -1260$."
    ]
  },
  {
    "id": "t201-k2-p08",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-2$ that has the same values as $g(x) = 5x^2 + 6x - 16$ at $x = -4$, $x = -3$ and $x = 5$, and write that line right.",
    "given": [
      "$f(x) - (5x^2 + 6x - 16) = -2(x + 4)(x + 3)(x - 5)$",
      "$f(-1) - (5 \\cdot (-1)^2 + 6 \\cdot (-1) - 16) = -2(-1 + 4)(-1 + 3)(-1 - 5)$",
      "$f(-1) + 17 = -2 \\cdot 3 \\cdot 2 \\cdot 6$",
      "$f(-1) + 17 = -72$",
      "$f(-1) = -89$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(-1)+17 = -2*3*2*(-6)",
    "solution": [
      "Find the first wrong line in this working for $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-2$ that has the same values as $g(x) = 5x^2 + 6x - 16$ at $x = -4$, $x = -3$ and $x = 5$, and write that line right.",
      "Line 3 gives the bracket $(-1 - 5)$ the value $6$, but its value is $-6$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(-1) + 17 = -2 \\cdot 3 \\cdot 2 \\cdot (-6)$."
    ]
  },
  {
    "id": "t201-k2-p09",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $5$ that has the same values as $g(x) = 8x^2 - 11x + 12$ at $x = -2$, $x = 2$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (8x^2 - 11x + 12) = 5(x + 2)(x - 2)(x - 6)$",
      "$f(-4) - (8 \\cdot (-4)^2 - 11 \\cdot (-4) + 12) = 5(-4 + 2)(-4 - 2)(-4 - 6)$",
      "$f(-4) - 184 = 5 \\cdot (-2) \\cdot (-6) \\cdot 10$",
      "$f(-4) - 184 = 600$",
      "$f(-4) = 784$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(-4)-184 = 5*(-2)*(-6)*(-10)",
    "solution": [
      "Find the first wrong line in this working for $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $5$ that has the same values as $g(x) = 8x^2 - 11x + 12$ at $x = -2$, $x = 2$ and $x = 6$, and write that line right.",
      "Line 3 gives the bracket $(-4 - 6)$ the value $10$, but its value is $-10$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(-4) - 184 = 5 \\cdot (-2) \\cdot (-6) \\cdot (-10)$."
    ]
  },
  {
    "id": "t201-k2-p10",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-5$ that has the same values as $g(x) = -7x^2 + 17x + 18$ at $x = -2$, $x = 1$ and $x = 5$, and write that line right.",
    "given": [
      "$f(x) - (-7x^2 + 17x + 18) = -5(x + 2)(x - 1)(x - 5)$",
      "$f(-4) - (-7 \\cdot (-4)^2 + 17 \\cdot (-4) + 18) = -5(-4 + 2)(-4 - 1)(-4 - 5)$",
      "$f(-4) + 162 = -5 \\cdot (-2) \\cdot (-5) \\cdot (-9)$",
      "$f(-4) + 162 = 450$",
      "$f(-4) = 612$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: f(-4) = 288",
    "solution": [
      "Find the first wrong line in this working for $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-5$ that has the same values as $g(x) = -7x^2 + 17x + 18$ at $x = -2$, $x = 1$ and $x = 5$, and write that line right.",
      "Line 5 adds $162$ to $450$, but $162$ is taken from both sides of line 4.",
      "The lines above line 5 are right, so line 5 is the first wrong line.",
      "Line 5 written right is $f(-4) = 288$."
    ]
  },
  {
    "id": "t201-k2-p11",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(6)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $4$ that has the same values as $g(x) = 2x^2 - 8x + 3$ at $x = -5$, $x = -3$ and $x = 2$, and write that line right.",
    "given": [
      "$f(x) - (2x^2 - 8x + 3) = 4(x + 5)(x - 3)(x - 2)$",
      "$f(6) - (2 \\cdot 6^2 - 8 \\cdot 6 + 3) = 4(6 + 5)(6 - 3)(6 - 2)$",
      "$f(6) - 27 = 4 \\cdot 11 \\cdot 3 \\cdot 4$",
      "$f(6) - 27 = 528$",
      "$f(6) = 555$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(x)-(2*x^2-8*x+3) = 4*(x+5)*(x+3)*(x-2)",
    "solution": [
      "Find the first wrong line in this working for $f(6)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $4$ that has the same values as $g(x) = 2x^2 - 8x + 3$ at $x = -5$, $x = -3$ and $x = 2$, and write that line right.",
      "Line 1 writes the bracket for $-3$ as $x - 3$, so the minus sign of $-3$ is lost.",
      "No line comes before line 1, and each later line follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(x) - (2x^2 - 8x + 3) = 4(x + 5)(x + 3)(x - 2)$."
    ]
  },
  {
    "id": "t201-k2-p12",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(-2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-6$ that has the same values as $g(x) = -5x^2 + 7x + 17$ at $x = -3$, $x = 1$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (-5x^2 + 7x + 17) = -6(x + 3)(x - 1)(x - 6)$",
      "$f(-2) - (-5 \\cdot (-2)^2 + 7 \\cdot (-2) + 17) = -6(-2 + 3)(-2 - 1)(-2 - 6)$",
      "$f(-2) + 17 = -6 \\cdot 1 \\cdot (-3) \\cdot (-8)$",
      "$f(-2) + 17 = 144$",
      "$f(-2) = 127$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: f(-2)+17 = -144",
    "solution": [
      "Find the first wrong line in this working for $f(-2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-6$ that has the same values as $g(x) = -5x^2 + 7x + 17$ at $x = -3$, $x = 1$ and $x = 6$, and write that line right.",
      "Line 4 gives the product of line 3 the value $144$, but its value is $-144$.",
      "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $f(-2) + 17 = -144$."
    ]
  },
  {
    "id": "t201-k2-p13",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(1)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-4$ that has the same values as $g(x) = 2x^2 - 15x - 9$ at $x = -5$, $x = -4$ and $x = 5$, and write that line right.",
    "given": [
      "$f(x) - (2x^2 - 15x - 9) = -4(x + 5)(x - 4)(x - 5)$",
      "$f(1) - (2 \\cdot 1^2 - 15 \\cdot 1 - 9) = -4(1 + 5)(1 - 4)(1 - 5)$",
      "$f(1) + 22 = -4 \\cdot 6 \\cdot (-3) \\cdot (-4)$",
      "$f(1) + 22 = -288$",
      "$f(1) = -310$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: f(x)-(2*x^2-15*x-9) = -4*(x+5)*(x+4)*(x-5)",
    "solution": [
      "Find the first wrong line in this working for $f(1)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-4$ that has the same values as $g(x) = 2x^2 - 15x - 9$ at $x = -5$, $x = -4$ and $x = 5$, and write that line right.",
      "Line 1 writes the bracket for $-4$ as $x - 4$, so the minus sign of $-4$ is lost.",
      "No line comes before line 1, and each later line follows from line 1 as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $f(x) - (2x^2 - 15x - 9) = -4(x + 5)(x + 4)(x - 5)$."
    ]
  },
  {
    "id": "t201-k2-p14",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $f(2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-6$ that has the same values as $g(x) = -4x^2 - 13x - 4$ at $x = -5$, $x = -4$ and $x = 6$, and write that line right.",
    "given": [
      "$f(x) - (-4x^2 - 13x - 4) = -6(x + 5)(x + 4)(x - 6)$",
      "$f(2) - (-4 \\cdot 2^2 - 13 \\cdot 2 - 4) = -6(2 + 5)(2 + 4)(2 - 6)$",
      "$f(2) + 46 = -6 \\cdot 7 \\cdot 6 \\cdot 4$",
      "$f(2) + 46 = -1008$",
      "$f(2) = -1054$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: f(2)+46 = -6*7*6*(-4)",
    "solution": [
      "Find the first wrong line in this working for $f(2)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-6$ that has the same values as $g(x) = -4x^2 - 13x - 4$ at $x = -5$, $x = -4$ and $x = 6$, and write that line right.",
      "Line 3 gives the bracket $(2 - 6)$ the value $4$, but its value is $-4$.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $f(2) + 46 = -6 \\cdot 7 \\cdot 6 \\cdot (-4)$."
    ]
  },
  {
    "id": "t201-k3-p01",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $81a + 9b + c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + b + 25c = 16$, $16a + 4b + 36c = 49$ and $9a + 9b + 49c = 100$.",
    "form": "Answer as an integer.",
    "answer": "64",
    "solution": [
      "Find $81a + 9b + c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + b + 25c = 16$, $16a + 4b + 36c = 49$ and $9a + 9b + 49c = 100$.",
      "Each equation is $a(x - 5)^2 + b(x + 1)^2 + c(x + 5)^2 = (3x + 4)^2$ at one of $x = 0$, $x = 1$ and $x = 2$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 5)^2 + b(x + 1)^2 + c(x + 5)^2 = (3x + 4)^2$ holds at every number $x$.",
      "At $x = -4$, the equation of the line above reads $a(-4 - 5)^2 + b(-4 + 1)^2 + c(-4 + 5)^2 = (3 \\cdot (-4) + 4)^2$.",
      "$81a + 9b + c = 64$"
    ]
  },
  {
    "id": "t201-k3-p02",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $4a + 8b - 8c$, given that the numbers $a$, $b$ and $c$ satisfy $4a + 16b + 16c = 36$, $9a + 25b + 9c = 1$ and $16a + 36b + 4c = 16$.",
    "form": "Answer as an integer.",
    "answer": "-60",
    "solution": [
      "Find $4a + 8b - 8c$, given that the numbers $a$, $b$ and $c$ satisfy $4a + 16b + 16c = 36$, $9a + 25b + 9c = 1$ and $16a + 36b + 4c = 16$.",
      "Each equation is $a(x + 2)^2 + b(x + 4)^2 + c(x - 4)^2 = (5x - 6)^2$ at one of $x = 0$, $x = 1$ and $x = 2$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x + 2)^2 + b(x + 4)^2 + c(x - 4)^2 = (5x - 6)^2$ holds at every number $x$.",
      "The coefficient of $x$ on the left is $4a + 8b - 8c$.",
      "The coefficient of $x$ on the right is $-60$.",
      "$4a + 8b - 8c = -60$"
    ]
  },
  {
    "id": "t201-k3-p03",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $-8a - 10b - 2c$, given that the numbers $a$, $b$ and $c$ satisfy $81a + 100b + 36c = 729$, $64a + 81b + 25c = 400$ and $49a + 64b + 16c = 169$.",
    "form": "Answer as an integer.",
    "answer": "112",
    "solution": [
      "Find $-8a - 10b - 2c$, given that the numbers $a$, $b$ and $c$ satisfy $81a + 100b + 36c = 729$, $64a + 81b + 25c = 400$ and $49a + 64b + 16c = 169$.",
      "Each equation is $a(x - 4)^2 + b(x - 5)^2 + c(x - 1)^2 = (7x + 8)^2$ at one of $x = -5$, $x = -4$ and $x = -3$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 4)^2 + b(x - 5)^2 + c(x - 1)^2 = (7x + 8)^2$ holds at every number $x$.",
      "The coefficient of $x$ on the left is $-8a - 10b - 2c$.",
      "The coefficient of $x$ on the right is $112$.",
      "$-8a - 10b - 2c = 112$"
    ]
  },
  {
    "id": "t201-k3-p04",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $4a + 36c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + 49b + c = 256$, $36a + 64b + 4c = 441$ and $49a + 81b + 9c = 676$.",
    "form": "Answer as an integer.",
    "answer": "361",
    "solution": [
      "Find $4a + 36c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + 49b + c = 256$, $36a + 64b + 4c = 441$ and $49a + 81b + 9c = 676$.",
      "Each equation is $a(x + 1)^2 + b(x + 3)^2 + c(x - 3)^2 = (5x - 4)^2$ at one of $x = 4$, $x = 5$ and $x = 6$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x + 1)^2 + b(x + 3)^2 + c(x - 3)^2 = (5x - 4)^2$ holds at every number $x$.",
      "At $x = -3$, the equation of the line above reads $a(-3 + 1)^2 + b(-3 + 3)^2 + c(-3 - 3)^2 = (5 \\cdot (-3) - 4)^2$.",
      "$4a + 36c = 361$"
    ]
  },
  {
    "id": "t201-k3-p05",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $10a - 10b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + 25b + 4c = 121$, $36a + 16b + 9c = 49$ and $49a + 9b + 16c = 9$.",
    "form": "Answer as an integer.",
    "answer": "-88",
    "solution": [
      "Find $10a - 10b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + 25b + 4c = 121$, $36a + 16b + 9c = 49$ and $49a + 9b + 16c = 9$.",
      "Each equation is $a(x + 5)^2 + b(x - 5)^2 + c(x + 2)^2 = (4x - 11)^2$ at one of $x = 0$, $x = 1$ and $x = 2$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x + 5)^2 + b(x - 5)^2 + c(x + 2)^2 = (4x - 11)^2$ holds at every number $x$.",
      "The coefficient of $x$ on the left is $10a - 10b + 4c$.",
      "The coefficient of $x$ on the right is $-88$.",
      "$10a - 10b + 4c = -88$"
    ]
  },
  {
    "id": "t201-k3-p06",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $4a + 64c$, given that the numbers $a$, $b$ and $c$ satisfy $9a + b + 81c = 81$, $16a + 4b + 100c = 196$ and $25a + 9b + 121c = 361$.",
    "form": "Answer as an integer.",
    "answer": "16",
    "solution": [
      "Find $4a + 64c$, given that the numbers $a$, $b$ and $c$ satisfy $9a + b + 81c = 81$, $16a + 4b + 100c = 196$ and $25a + 9b + 121c = 361$.",
      "Each equation is $a(x - 1)^2 + b(x - 3)^2 + c(x + 5)^2 = (5x - 11)^2$ at one of $x = 4$, $x = 5$ and $x = 6$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 1)^2 + b(x - 3)^2 + c(x + 5)^2 = (5x - 11)^2$ holds at every number $x$.",
      "At $x = 3$, the equation of the line above reads $a(3 - 1)^2 + b(3 - 3)^2 + c(3 + 5)^2 = (5 \\cdot 3 - 11)^2$.",
      "$4a + 64c = 16$"
    ]
  },
  {
    "id": "t201-k3-p07",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $-4a - 8b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $9a + 25b + c = 16$, $4a + 16b + 4c = 81$ and $a + 9b + 9c = 196$.",
    "form": "Answer as an integer.",
    "answer": "90",
    "solution": [
      "Find $-4a - 8b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $9a + 25b + c = 16$, $4a + 16b + 4c = 81$ and $a + 9b + 9c = 196$.",
      "Each equation is $a(x - 2)^2 + b(x - 4)^2 + c(x + 2)^2 = (5x + 9)^2$ at one of $x = -1$, $x = 0$ and $x = 1$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 2)^2 + b(x - 4)^2 + c(x + 2)^2 = (5x + 9)^2$ holds at every number $x$.",
      "The coefficient of $x$ on the left is $-4a - 8b + 4c$.",
      "The coefficient of $x$ on the right is $90$.",
      "$-4a - 8b + 4c = 90$"
    ]
  },
  {
    "id": "t201-k3-p08",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $9a + 36b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 9b + 49c = 484$, $25a + 4b + 36c = 225$ and $16a + b + 25c = 64$.",
    "form": "Answer as an integer.",
    "answer": "1681",
    "solution": [
      "Find $9a + 36b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 9b + 49c = 484$, $25a + 4b + 36c = 225$ and $16a + b + 25c = 64$.",
      "Each equation is $a(x - 1)^2 + b(x + 2)^2 + c(x - 2)^2 = (7x + 13)^2$ at one of $x = -5$, $x = -4$ and $x = -3$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 1)^2 + b(x + 2)^2 + c(x - 2)^2 = (7x + 13)^2$ holds at every number $x$.",
      "At $x = 4$, the equation of the line above reads $a(4 - 1)^2 + b(4 + 2)^2 + c(4 - 2)^2 = (7 \\cdot 4 + 13)^2$.",
      "$9a + 36b + 4c = 1681$"
    ]
  },
  {
    "id": "t201-k3-p09",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $a + b + c$, given that the numbers $a$, $b$ and $c$ satisfy $a + 4b + 64c = 121$, $4a + 9b + 81c = 196$ and $9a + 16b + 100c = 289$.",
    "form": "Answer as an integer.",
    "answer": "9",
    "solution": [
      "Find $a + b + c$, given that the numbers $a$, $b$ and $c$ satisfy $a + 4b + 64c = 121$, $4a + 9b + 81c = 196$ and $9a + 16b + 100c = 289$.",
      "Each equation is $a(x - 3)^2 + b(x - 2)^2 + c(x + 4)^2 = (3x - 1)^2$ at one of $x = 4$, $x = 5$ and $x = 6$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 3)^2 + b(x - 2)^2 + c(x + 4)^2 = (3x - 1)^2$ holds at every number $x$.",
      "The coefficient of $x^2$ on the left is $a + b + c$.",
      "The coefficient of $x^2$ on the right is $9$.",
      "$a + b + c = 9$"
    ]
  },
  {
    "id": "t201-k3-p10",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $25b + 64c$, given that the numbers $a$, $b$ and $c$ satisfy $4a + 9b + 36c = 841$, $9a + 4b + 25c = 400$ and $16a + b + 16c = 121$.",
    "form": "Answer as an integer.",
    "answer": "2209",
    "solution": [
      "Find $25b + 64c$, given that the numbers $a$, $b$ and $c$ satisfy $4a + 9b + 36c = 841$, $9a + 4b + 25c = 400$ and $16a + b + 16c = 121$.",
      "Each equation is $a(x + 4)^2 + b(x - 1)^2 + c(x - 4)^2 = (9x - 11)^2$ at one of $x = -2$, $x = -1$ and $x = 0$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x + 4)^2 + b(x - 1)^2 + c(x - 4)^2 = (9x - 11)^2$ holds at every number $x$.",
      "At $x = -4$, the equation of the line above reads $a(-4 + 4)^2 + b(-4 - 1)^2 + c(-4 - 4)^2 = (9 \\cdot (-4) - 11)^2$.",
      "$25b + 64c = 2209$"
    ]
  },
  {
    "id": "t201-k3-p11",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $16b + 49c$, given that the numbers $a$, $b$ and $c$ satisfy $100a + 36b + 9c = 289$, $81a + 25b + 4c = 144$ and $64a + 16b + c = 49$.",
    "form": "Answer as an integer.",
    "answer": "1089",
    "solution": [
      "Find $16b + 49c$, given that the numbers $a$, $b$ and $c$ satisfy $100a + 36b + 9c = 289$, $81a + 25b + 4c = 144$ and $64a + 16b + c = 49$.",
      "Each equation is $a(x - 5)^2 + b(x - 1)^2 + c(x + 2)^2 = (5x + 8)^2$ at one of $x = -5$, $x = -4$ and $x = -3$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 5)^2 + b(x - 1)^2 + c(x + 2)^2 = (5x + 8)^2$ holds at every number $x$.",
      "At $x = 5$, the equation of the line above reads $a(5 - 5)^2 + b(5 - 1)^2 + c(5 + 2)^2 = (5 \\cdot 5 + 8)^2$.",
      "$16b + 49c = 1089$"
    ]
  },
  {
    "id": "t201-k3-p12",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $-10a + 8b - 8c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 9b + 25c = 1$, $25a + 16b + 16c = 49$ and $16a + 25b + 9c = 169$.",
    "form": "Answer as an integer.",
    "answer": "84",
    "solution": [
      "Find $-10a + 8b - 8c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 9b + 25c = 1$, $25a + 16b + 16c = 49$ and $16a + 25b + 9c = 169$.",
      "Each equation is $a(x - 5)^2 + b(x + 4)^2 + c(x - 4)^2 = (6x + 7)^2$ at one of $x = -1$, $x = 0$ and $x = 1$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x - 5)^2 + b(x + 4)^2 + c(x - 4)^2 = (6x + 7)^2$ holds at every number $x$.",
      "The coefficient of $x$ on the left is $-10a + 8b - 8c$.",
      "The coefficient of $x$ on the right is $84$.",
      "$-10a + 8b - 8c = 84$"
    ]
  },
  {
    "id": "t201-k3-p13",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $49a + 9b + c$, given that the numbers $a$, $b$ and $c$ satisfy $64a + 16b + 4c = 169$, $81a + 25b + 9c = 289$ and $100a + 36b + 16c = 441$.",
    "form": "Answer as an integer.",
    "answer": "81",
    "solution": [
      "Find $49a + 9b + c$, given that the numbers $a$, $b$ and $c$ satisfy $64a + 16b + 4c = 169$, $81a + 25b + 9c = 289$ and $100a + 36b + 16c = 441$.",
      "Each equation is $a(x + 5)^2 + b(x + 1)^2 + c(x - 1)^2 = (4x + 1)^2$ at one of $x = 3$, $x = 4$ and $x = 5$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x + 5)^2 + b(x + 1)^2 + c(x - 1)^2 = (4x + 1)^2$ holds at every number $x$.",
      "At $x = 2$, the equation of the line above reads $a(2 + 5)^2 + b(2 + 1)^2 + c(2 - 1)^2 = (4 \\cdot 2 + 1)^2$.",
      "$49a + 9b + c = 81$"
    ]
  },
  {
    "id": "t201-k3-p14",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $8a + 2b - 2c$, given that the numbers $a$, $b$ and $c$ satisfy $49a + 16b + 4c = 9$, $64a + 25b + 9c = 64$ and $81a + 36b + 16c = 169$.",
    "form": "Answer as an integer.",
    "answer": "-120",
    "solution": [
      "Find $8a + 2b - 2c$, given that the numbers $a$, $b$ and $c$ satisfy $49a + 16b + 4c = 9$, $64a + 25b + 9c = 64$ and $81a + 36b + 16c = 169$.",
      "Each equation is $a(x + 4)^2 + b(x + 1)^2 + c(x - 1)^2 = (5x - 12)^2$ at one of $x = 3$, $x = 4$ and $x = 5$.",
      "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
      "The equation $a(x + 4)^2 + b(x + 1)^2 + c(x - 1)^2 = (5x - 12)^2$ holds at every number $x$.",
      "The coefficient of $x$ on the left is $8a + 2b - 2c$.",
      "The coefficient of $x$ on the right is $-120$.",
      "$8a + 2b - 2c = -120$"
    ]
  },
  {
    "id": "t201-k4-p01",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -3$, $x = 3$ and $x = 6$, the polynomial $f(x)$ of degree at most $2$ is equal to $19$ more than $8$ times the square of $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 8*x^2+19",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -3$, $x = 3$ and $x = 6$, the polynomial $f(x)$ of degree at most $2$ is equal to $19$ more than $8$ times the square of $x$.",
      "In symbols, $19$ more than $8$ times the square of $x$ is $8x^2 + 19$.",
      "The equation $f(x) = 8x^2 + 19$ holds at each of the $3$ different numbers $-3$, $3$ and $6$.",
      "The polynomial $8x^2 + 19$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = 8x^2 + 19$"
    ]
  },
  {
    "id": "t201-k4-p02",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -2$, $x = -1$, $x = 0$ and $x = 1$, the polynomial $f(x)$ of degree at most $3$ is equal to the sum of $7$ times the cube of $x$ and $2$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 7*x^3+2",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -2$, $x = -1$, $x = 0$ and $x = 1$, the polynomial $f(x)$ of degree at most $3$ is equal to the sum of $7$ times the cube of $x$ and $2$.",
      "In symbols, the sum of $7$ times the cube of $x$ and $2$ is $7x^3 + 2$.",
      "The equation $f(x) = 7x^3 + 2$ holds at each of the $4$ different numbers $-2$, $-1$, $0$ and $1$.",
      "The polynomial $7x^3 + 2$ has degree $3$, so both sides have degree at most $3$.",
      "$f(x) = 7x^3 + 2$"
    ]
  },
  {
    "id": "t201-k4-p03",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $2$, and of the square of the sum of $x$ and $22$ are equal at $x = -4$, $x = -1$ and $x = 5$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = (x+22)^2",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $2$, and of the square of the sum of $x$ and $22$ are equal at $x = -4$, $x = -1$ and $x = 5$.",
      "In symbols, the square of the sum of $x$ and $22$ is $(x + 22)^2$.",
      "The equation $f(x) = (x + 22)^2$ holds at each of the $3$ different numbers $-4$, $-1$ and $5$.",
      "The polynomial $(x + 22)^2$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = (x + 22)^2$"
    ]
  },
  {
    "id": "t201-k4-p04",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $3$, and of the difference of $6$ times the cube of $x$ and $13$ times $x$ are equal at $x = -2$, $x = 0$, $x = 1$ and $x = 6$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 6*x^3-13*x",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $3$, and of the difference of $6$ times the cube of $x$ and $13$ times $x$ are equal at $x = -2$, $x = 0$, $x = 1$ and $x = 6$.",
      "In symbols, the difference of $6$ times the cube of $x$ and $13$ times $x$ is $6x^3 - 13x$.",
      "The equation $f(x) = 6x^3 - 13x$ holds at each of the $4$ different numbers $-2$, $0$, $1$ and $6$.",
      "The polynomial $6x^3 - 13x$ has degree $3$, so both sides have degree at most $3$.",
      "$f(x) = 6x^3 - 13x$"
    ]
  },
  {
    "id": "t201-k4-p05",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -4$, $x = 2$ and $x = 5$, the polynomial $f(x)$ of degree at most $2$ is equal to the square of the sum of $x$ and $20$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = (x+20)^2",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -4$, $x = 2$ and $x = 5$, the polynomial $f(x)$ of degree at most $2$ is equal to the square of the sum of $x$ and $20$.",
      "In symbols, the square of the sum of $x$ and $20$ is $(x + 20)^2$.",
      "The equation $f(x) = (x + 20)^2$ holds at each of the $3$ different numbers $-4$, $2$ and $5$.",
      "The polynomial $(x + 20)^2$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = (x + 20)^2$"
    ]
  },
  {
    "id": "t201-k4-p06",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $3$, and at $x = -5$, $x = 0$, $x = 5$ and $x = 6$ its value is $8$ less than the sum of $7$ times the square of $x$ and $5$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 7*x^2+5*x-8",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $3$, and at $x = -5$, $x = 0$, $x = 5$ and $x = 6$ its value is $8$ less than the sum of $7$ times the square of $x$ and $5$ times $x$.",
      "In symbols, $8$ less than the sum of $7$ times the square of $x$ and $5$ times $x$ is $7x^2 + 5x - 8$.",
      "The equation $f(x) = 7x^2 + 5x - 8$ holds at each of the $4$ different numbers $-5$, $0$, $5$ and $6$.",
      "The polynomial $7x^2 + 5x - 8$ has degree $2$, so both sides have degree at most $3$.",
      "$f(x) = 7x^2 + 5x - 8$"
    ]
  },
  {
    "id": "t201-k4-p07",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $2$, takes the same value as the product of $x + 7$ and $x - 14$ at each of $x = -3$, $x = 0$ and $x = 6$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = (x+7)*(x-14)",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $2$, takes the same value as the product of $x + 7$ and $x - 14$ at each of $x = -3$, $x = 0$ and $x = 6$.",
      "In symbols, the product of $x + 7$ and $x - 14$ is $(x + 7)(x - 14)$.",
      "The equation $f(x) = (x + 7)(x - 14)$ holds at each of the $3$ different numbers $-3$, $0$ and $6$.",
      "The polynomial $(x + 7)(x - 14)$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = (x + 7)(x - 14)$"
    ]
  },
  {
    "id": "t201-k4-p08",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $3$, and at $x = -5$, $x = -4$, $x = -3$ and $x = 0$ its value is $7$ less than the sum of $6$ times the cube of $x$ and $15$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 6*x^3+15*x-7",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $3$, and at $x = -5$, $x = -4$, $x = -3$ and $x = 0$ its value is $7$ less than the sum of $6$ times the cube of $x$ and $15$ times $x$.",
      "In symbols, $7$ less than the sum of $6$ times the cube of $x$ and $15$ times $x$ is $6x^3 + 15x - 7$.",
      "The equation $f(x) = 6x^3 + 15x - 7$ holds at each of the $4$ different numbers $-5$, $-4$, $-3$ and $0$.",
      "The polynomial $6x^3 + 15x - 7$ has degree $3$, so both sides have degree at most $3$.",
      "$f(x) = 6x^3 + 15x - 7$"
    ]
  },
  {
    "id": "t201-k4-p09",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $2$, takes the same value as $23$ less than $4$ times the square of $x$ at each of $x = 2$, $x = 4$ and $x = 5$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 4*x^2-23",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $2$, takes the same value as $23$ less than $4$ times the square of $x$ at each of $x = 2$, $x = 4$ and $x = 5$.",
      "In symbols, $23$ less than $4$ times the square of $x$ is $4x^2 - 23$.",
      "The equation $f(x) = 4x^2 - 23$ holds at each of the $3$ different numbers $2$, $4$ and $5$.",
      "The polynomial $4x^2 - 23$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = 4x^2 - 23$"
    ]
  },
  {
    "id": "t201-k4-p10",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $3$, and at $x = -5$, $x = -4$, $x = 4$ and $x = 5$ its value is the sum of $9$ times the cube of $x$ and $13$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 9*x^3+13",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $3$, and at $x = -5$, $x = -4$, $x = 4$ and $x = 5$ its value is the sum of $9$ times the cube of $x$ and $13$.",
      "In symbols, the sum of $9$ times the cube of $x$ and $13$ is $9x^3 + 13$.",
      "The equation $f(x) = 9x^3 + 13$ holds at each of the $4$ different numbers $-5$, $-4$, $4$ and $5$.",
      "The polynomial $9x^3 + 13$ has degree $3$, so both sides have degree at most $3$.",
      "$f(x) = 9x^3 + 13$"
    ]
  },
  {
    "id": "t201-k4-p11",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $1$, takes the same value as $17$ less than $7$ times $x$ at each of $x = -3$ and $x = -1$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 7*x-17",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $1$, takes the same value as $17$ less than $7$ times $x$ at each of $x = -3$ and $x = -1$.",
      "In symbols, $17$ less than $7$ times $x$ is $7x - 17$.",
      "The equation $f(x) = 7x - 17$ holds at each of the $2$ different numbers $-3$ and $-1$.",
      "The polynomial $7x - 17$ has degree $1$, so both sides have degree at most $1$.",
      "$f(x) = 7x - 17$"
    ]
  },
  {
    "id": "t201-k4-p12",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -3$, $x = 1$ and $x = 4$, the polynomial $f(x)$ of degree at most $2$ is equal to the sum of $5$ times the square of $x$ and $21$ times $x$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 5*x^2+21*x",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = -3$, $x = 1$ and $x = 4$, the polynomial $f(x)$ of degree at most $2$ is equal to the sum of $5$ times the square of $x$ and $21$ times $x$.",
      "In symbols, the sum of $5$ times the square of $x$ and $21$ times $x$ is $5x^2 + 21x$.",
      "The equation $f(x) = 5x^2 + 21x$ holds at each of the $3$ different numbers $-3$, $1$ and $4$.",
      "The polynomial $5x^2 + 21x$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = 5x^2 + 21x$"
    ]
  },
  {
    "id": "t201-k4-p13",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $2$, takes the same value as the sum of $7$ times the square of $x$ and $2$ times $x$ at each of $x = -2$, $x = 0$ and $x = 6$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 7*x^2+2*x",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $2$, takes the same value as the sum of $7$ times the square of $x$ and $2$ times $x$ at each of $x = -2$, $x = 0$ and $x = 6$.",
      "In symbols, the sum of $7$ times the square of $x$ and $2$ times $x$ is $7x^2 + 2x$.",
      "The equation $f(x) = 7x^2 + 2x$ holds at each of the $3$ different numbers $-2$, $0$ and $6$.",
      "The polynomial $7x^2 + 2x$ has degree $2$, so both sides have degree at most $2$.",
      "$f(x) = 7x^2 + 2x$"
    ]
  },
  {
    "id": "t201-k4-p14",
    "topic": "identity-theorem-for-polynomials",
    "kind": "t201-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $2$, and of $13$ less than $9$ times $x$ are equal at $x = -5$, $x = -3$ and $x = 2$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "f(x) = 9*x-13",
    "solution": [
      "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $2$, and of $13$ less than $9$ times $x$ are equal at $x = -5$, $x = -3$ and $x = 2$.",
      "In symbols, $13$ less than $9$ times $x$ is $9x - 13$.",
      "The equation $f(x) = 9x - 13$ holds at each of the $3$ different numbers $-5$, $-3$ and $2$.",
      "The polynomial $9x - 13$ has degree $1$, so both sides have degree at most $2$.",
      "$f(x) = 9x - 13$"
    ]
  }
]
