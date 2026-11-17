export default {
  "number": 202,
  "title": "Irrational roots",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "230-238"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the other two roots of $f(x) = x^3 - 3x^2 - 133x - 441$, given that $5 - 2\\sqrt{22}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{5+2*sqrt(22), -7}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 - 3x^2 - 133x - 441$, given that $5 - 2\\sqrt{22}$ is a root.",
      "The conjugate $5 + 2\\sqrt{22}$ is also a root of $f(x)$.",
      "$(5 - 2\\sqrt{22}) + (5 + 2\\sqrt{22}) = 10$",
      "$(5 - 2\\sqrt{22})(5 + 2\\sqrt{22}) = 25 - 88 = -63$",
      "The numbers $5 - 2\\sqrt{22}$ and $5 + 2\\sqrt{22}$ are the roots of $x^2 - 10x - 63$.",
      "For a number $e$, $f(x) = (x^2 - 10x - 63)(x + e)$.",
      "$-63e = -441$",
      "$e = 7$",
      "So the other two roots are $5 + 2\\sqrt{22}$ and $-7$."
    ]
  },
  "ideas": [
    {
      "name": "Radical conjugate roots",
      "concrete": "The polynomial $f(x) = x^3 + 7x^2 + 9x - 9$ has integer coefficients. With $r = -2 + \\sqrt{7}$, the powers are $r^2 = 11 - 4\\sqrt{7}$ and $r^3 = -50 + 19\\sqrt{7}$, so $f(r) = (-50 + 7 \\cdot 11 + 9 \\cdot (-2) - 9) + (19 + 7 \\cdot (-4) + 9)\\sqrt{7} = 0 + 0\\sqrt{7} = 0$. For $-2 - \\sqrt{7}$ the same sums come out with $-\\sqrt{7}$ in place of $\\sqrt{7}$, so $f\\left(-2 - \\sqrt{7}\\right) = 0 - 0\\sqrt{7} = 0$ too.",
      "general": "Let $f(x)$ be a polynomial whose coefficients are rational numbers, and let $b$, $c$ and $d$ be rational numbers with $c \\ne 0$ and $\\sqrt{d}$ irrational. If $b + c\\sqrt{d}$ is a root of $f(x)$, then its conjugate $b - c\\sqrt{d}$ is a root of $f(x)$ too. This is the fact **Radical conjugate roots**. It needs rational coefficients: $x - \\sqrt{2}$ has the root $\\sqrt{2}$ and not the root $-\\sqrt{2}$."
    }
  ],
  "kinds": [
    {
      "id": "t202-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the other two roots of $f(x) = x^3 + 5x^2 - 45x - 81$, given that $2 - \\sqrt{13}$ is a root.",
            "lines": [
              {
                "step": "Find the other two roots of $f(x) = x^3 + 5x^2 - 45x - 81$, given that $2 - \\sqrt{13}$ is a root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate $2 + \\sqrt{13}$ is also a root of $f(x)$.",
                "reason": "Radical conjugate roots: the coefficients of $f(x)$ are integers, so they are rational, and $\\sqrt{13}$ is irrational, so the conjugate of a root is a root."
              },
              {
                "step": "$(2 - \\sqrt{13}) + (2 + \\sqrt{13}) = 4$",
                "reason": "Collecting like terms: the multiples of $\\sqrt{13}$ cancel."
              },
              {
                "step": "$(2 - \\sqrt{13})(2 + \\sqrt{13}) = 4 - 13 = -9$",
                "reason": "Difference of squares: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$."
              },
              {
                "step": "The numbers $2 - \\sqrt{13}$ and $2 + \\sqrt{13}$ are the roots of $x^2 - 4x - 9$.",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots have sum $4$ and product $-9$ is $x^2 - (4)x + (-9)$, which is $x^2 - 4x - 9$."
              },
              {
                "step": "For a number $e$, $f(x) = (x^2 - 4x - 9)(x + e)$.",
                "reason": "Factor Theorem: $x$ minus each of the two roots is a factor of $f(x)$, their product is the quadratic of line 5, and $f(x)$ has degree $3$ and leading coefficient $1$."
              },
              {
                "step": "$-9e = -81$",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 6 are equal."
              },
              {
                "step": "$e = 9$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-9$."
              },
              {
                "step": "So the other two roots are $2 + \\sqrt{13}$ and $-9$.",
                "reason": "Zero-product property: by line 6, $f(x) = 0$ where $x + 9$ is $0$, at $x = -9$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other two roots of $f(x) = x^3 + 16x^2 - 155x - 1290$, given that $-5 + 4\\sqrt{15}$ is a root.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5-4*sqrt(15), -6}",
              "lines": [
                {
                  "step": "Find the other two roots of $f(x) = x^3 + 16x^2 - 155x - 1290$, given that $-5 + 4\\sqrt{15}$ is a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-5 - 4\\sqrt{15}$ is also a root of $f(x)$.",
                  "reason": "Radical conjugate roots: the coefficients of $f(x)$ are integers, so they are rational, and $\\sqrt{15}$ is irrational, so the conjugate of a root is a root."
                },
                {
                  "step": "$(-5 + 4\\sqrt{15}) + (-5 - 4\\sqrt{15}) = -10$",
                  "reason": "Collecting like terms: the multiples of $\\sqrt{15}$ cancel."
                },
                {
                  "step": "$(-5 + 4\\sqrt{15})(-5 - 4\\sqrt{15}) = 25 - 240 = -215$",
                  "reason": "Difference of squares: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$."
                },
                {
                  "step": "The numbers $-5 + 4\\sqrt{15}$ and $-5 - 4\\sqrt{15}$ are the roots of $x^2 + 10x - 215$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots have sum $-10$ and product $-215$ is $x^2 - (-10)x + (-215)$, which is $x^2 + 10x - 215$."
                },
                {
                  "step": "For a number $e$, $f(x) = (x^2 + 10x - 215)(x + e)$.",
                  "reason": "Factor Theorem: $x$ minus each of the two roots is a factor of $f(x)$, their product is the quadratic of line 5, and $f(x)$ has degree $3$ and leading coefficient $1$."
                },
                {
                  "step": "$-215e = -1290$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 6 are equal."
                },
                {
                  "step": "$e = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-215$."
                },
                {
                  "step": "So the other two roots are $-5 - 4\\sqrt{15}$ and $-6$.",
                  "reason": "Zero-product property: by line 6, $f(x) = 0$ where $x + 6$ is $0$, at $x = -6$."
                }
              ]
            },
            {
              "prompt": "Find the other two roots of $f(x) = x^3 + 13x^2 - 40x - 400$, given that $-4 + 4\\sqrt{6}$ is a root.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4-4*sqrt(6), -5}",
              "lines": [
                {
                  "step": "Find the other two roots of $f(x) = x^3 + 13x^2 - 40x - 400$, given that $-4 + 4\\sqrt{6}$ is a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-4 - 4\\sqrt{6}$ is also a root of $f(x)$.",
                  "reason": "Radical conjugate roots: the coefficients of $f(x)$ are integers, so they are rational, and $\\sqrt{6}$ is irrational, so the conjugate of a root is a root."
                },
                {
                  "step": "$(-4 + 4\\sqrt{6}) + (-4 - 4\\sqrt{6}) = -8$",
                  "reason": "Collecting like terms: the multiples of $\\sqrt{6}$ cancel."
                },
                {
                  "step": "$(-4 + 4\\sqrt{6})(-4 - 4\\sqrt{6}) = 16 - 96 = -80$",
                  "reason": "Difference of squares: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$."
                },
                {
                  "step": "The numbers $-4 + 4\\sqrt{6}$ and $-4 - 4\\sqrt{6}$ are the roots of $x^2 + 8x - 80$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots have sum $-8$ and product $-80$ is $x^2 - (-8)x + (-80)$, which is $x^2 + 8x - 80$."
                },
                {
                  "step": "For a number $e$, $f(x) = (x^2 + 8x - 80)(x + e)$.",
                  "reason": "Factor Theorem: $x$ minus each of the two roots is a factor of $f(x)$, their product is the quadratic of line 5, and $f(x)$ has degree $3$ and leading coefficient $1$."
                },
                {
                  "step": "$-80e = -400$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 6 are equal."
                },
                {
                  "step": "$e = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-80$."
                },
                {
                  "step": "So the other two roots are $-4 - 4\\sqrt{6}$ and $-5$.",
                  "reason": "Zero-product property: by line 6, $f(x) = 0$ where $x + 5$ is $0$, at $x = -5$."
                }
              ]
            },
            {
              "prompt": "Find the other two roots of $f(x) = x^3 - 2x^2 - 123x + 600$, given that $-3 - 2\\sqrt{21}$ is a root.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3+2*sqrt(21), 8}",
              "lines": [
                {
                  "step": "Find the other two roots of $f(x) = x^3 - 2x^2 - 123x + 600$, given that $-3 - 2\\sqrt{21}$ is a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-3 + 2\\sqrt{21}$ is also a root of $f(x)$.",
                  "reason": "Radical conjugate roots: the coefficients of $f(x)$ are integers, so they are rational, and $\\sqrt{21}$ is irrational, so the conjugate of a root is a root."
                },
                {
                  "step": "$(-3 - 2\\sqrt{21}) + (-3 + 2\\sqrt{21}) = -6$",
                  "reason": "Collecting like terms: the multiples of $\\sqrt{21}$ cancel."
                },
                {
                  "step": "$(-3 - 2\\sqrt{21})(-3 + 2\\sqrt{21}) = 9 - 84 = -75$",
                  "reason": "Difference of squares: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$."
                },
                {
                  "step": "The numbers $-3 - 2\\sqrt{21}$ and $-3 + 2\\sqrt{21}$ are the roots of $x^2 + 6x - 75$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots have sum $-6$ and product $-75$ is $x^2 - (-6)x + (-75)$, which is $x^2 + 6x - 75$."
                },
                {
                  "step": "For a number $e$, $f(x) = (x^2 + 6x - 75)(x + e)$.",
                  "reason": "Factor Theorem: $x$ minus each of the two roots is a factor of $f(x)$, their product is the quadratic of line 5, and $f(x)$ has degree $3$ and leading coefficient $1$."
                },
                {
                  "step": "$-75e = 600$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 6 are equal."
                },
                {
                  "step": "$e = -8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-75$."
                },
                {
                  "step": "So the other two roots are $-3 + 2\\sqrt{21}$ and $8$.",
                  "reason": "Zero-product property: by line 6, $f(x) = 0$ where $x - 8$ is $0$, at $x = 8$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $7 - 3\\sqrt{22}$ and $1 - 2\\sqrt{15}$ as roots.",
            "lines": [
              {
                "step": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $7 - 3\\sqrt{22}$ and $1 - 2\\sqrt{15}$ as roots.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate $7 + 3\\sqrt{22}$ of $7 - 3\\sqrt{22}$ is also a root.",
                "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{22}$ is irrational."
              },
              {
                "step": "The conjugate $1 + 2\\sqrt{15}$ of $1 - 2\\sqrt{15}$ is also a root.",
                "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{15}$ is irrational."
              },
              {
                "step": "$\\left(x - (7 - 3\\sqrt{22})\\right)\\left(x - (7 + 3\\sqrt{22})\\right) = \\left(x - 7\\right)^2 - 198$",
                "reason": "Difference of squares: the brackets are $\\left(x - 7\\right) - 3\\sqrt{22}$ and $\\left(x - 7\\right) + 3\\sqrt{22}$, and $(3\\sqrt{22})^2 = 9 \\cdot 22 = 198$."
              },
              {
                "step": "$\\left(x - 7\\right)^2 - 198 = x^2 - 14x - 149$",
                "reason": "Square of a binomial: $\\left(x - 7\\right)^2$ has the terms $x^2$, $-14x$ and $49$, and $49 - 198 = -149$."
              },
              {
                "step": "$\\left(x - (1 - 2\\sqrt{15})\\right)\\left(x - (1 + 2\\sqrt{15})\\right) = \\left(x - 1\\right)^2 - 60$",
                "reason": "Difference of squares: the brackets are $\\left(x - 1\\right) - 2\\sqrt{15}$ and $\\left(x - 1\\right) + 2\\sqrt{15}$, and $(2\\sqrt{15})^2 = 4 \\cdot 15 = 60$."
              },
              {
                "step": "$\\left(x - 1\\right)^2 - 60 = x^2 - 2x - 59$",
                "reason": "Square of a binomial: $\\left(x - 1\\right)^2$ has the terms $x^2$, $-2x$ and $1$, and $1 - 60 = -59$."
              },
              {
                "step": "$f(x) = (x^2 - 14x - 149)(x^2 - 2x - 59)$",
                "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 4 to 7 pair them."
              },
              {
                "step": "$f(x) = x^4 - 16x^3 - 180x^2 + 1124x + 8791$",
                "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-7 + 4\\sqrt{19}$ and $-3 + 2\\sqrt{13}$ as roots.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4+20*x^3-214*x^2-2132*x+10965",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-7 + 4\\sqrt{19}$ and $-3 + 2\\sqrt{13}$ as roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-7 - 4\\sqrt{19}$ of $-7 + 4\\sqrt{19}$ is also a root.",
                  "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{19}$ is irrational."
                },
                {
                  "step": "The conjugate $-3 - 2\\sqrt{13}$ of $-3 + 2\\sqrt{13}$ is also a root.",
                  "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{13}$ is irrational."
                },
                {
                  "step": "$\\left(x - (-7 + 4\\sqrt{19})\\right)\\left(x - (-7 - 4\\sqrt{19})\\right) = \\left(x + 7\\right)^2 - 304$",
                  "reason": "Difference of squares: the brackets are $\\left(x + 7\\right) - 4\\sqrt{19}$ and $\\left(x + 7\\right) + 4\\sqrt{19}$, and $(4\\sqrt{19})^2 = 16 \\cdot 19 = 304$."
                },
                {
                  "step": "$\\left(x + 7\\right)^2 - 304 = x^2 + 14x - 255$",
                  "reason": "Square of a binomial: $\\left(x + 7\\right)^2$ has the terms $x^2$, $14x$ and $49$, and $49 - 304 = -255$."
                },
                {
                  "step": "$\\left(x - (-3 + 2\\sqrt{13})\\right)\\left(x - (-3 - 2\\sqrt{13})\\right) = \\left(x + 3\\right)^2 - 52$",
                  "reason": "Difference of squares: the brackets are $\\left(x + 3\\right) - 2\\sqrt{13}$ and $\\left(x + 3\\right) + 2\\sqrt{13}$, and $(2\\sqrt{13})^2 = 4 \\cdot 13 = 52$."
                },
                {
                  "step": "$\\left(x + 3\\right)^2 - 52 = x^2 + 6x - 43$",
                  "reason": "Square of a binomial: $\\left(x + 3\\right)^2$ has the terms $x^2$, $6x$ and $9$, and $9 - 52 = -43$."
                },
                {
                  "step": "$f(x) = (x^2 + 14x - 255)(x^2 + 6x - 43)$",
                  "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 4 to 7 pair them."
                },
                {
                  "step": "$f(x) = x^4 + 20x^3 - 214x^2 - 2132x + 10{,}965$",
                  "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-2 + 3\\sqrt{23}$ and $3 + 3\\sqrt{17}$ as roots.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-2*x^3-371*x^2+642*x+29232",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-2 + 3\\sqrt{23}$ and $3 + 3\\sqrt{17}$ as roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-2 - 3\\sqrt{23}$ of $-2 + 3\\sqrt{23}$ is also a root.",
                  "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{23}$ is irrational."
                },
                {
                  "step": "The conjugate $3 - 3\\sqrt{17}$ of $3 + 3\\sqrt{17}$ is also a root.",
                  "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{17}$ is irrational."
                },
                {
                  "step": "$\\left(x - (-2 + 3\\sqrt{23})\\right)\\left(x - (-2 - 3\\sqrt{23})\\right) = \\left(x + 2\\right)^2 - 207$",
                  "reason": "Difference of squares: the brackets are $\\left(x + 2\\right) - 3\\sqrt{23}$ and $\\left(x + 2\\right) + 3\\sqrt{23}$, and $(3\\sqrt{23})^2 = 9 \\cdot 23 = 207$."
                },
                {
                  "step": "$\\left(x + 2\\right)^2 - 207 = x^2 + 4x - 203$",
                  "reason": "Square of a binomial: $\\left(x + 2\\right)^2$ has the terms $x^2$, $4x$ and $4$, and $4 - 207 = -203$."
                },
                {
                  "step": "$\\left(x - (3 + 3\\sqrt{17})\\right)\\left(x - (3 - 3\\sqrt{17})\\right) = \\left(x - 3\\right)^2 - 153$",
                  "reason": "Difference of squares: the brackets are $\\left(x - 3\\right) - 3\\sqrt{17}$ and $\\left(x - 3\\right) + 3\\sqrt{17}$, and $(3\\sqrt{17})^2 = 9 \\cdot 17 = 153$."
                },
                {
                  "step": "$\\left(x - 3\\right)^2 - 153 = x^2 - 6x - 144$",
                  "reason": "Square of a binomial: $\\left(x - 3\\right)^2$ has the terms $x^2$, $-6x$ and $9$, and $9 - 153 = -144$."
                },
                {
                  "step": "$f(x) = (x^2 + 4x - 203)(x^2 - 6x - 144)$",
                  "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 4 to 7 pair them."
                },
                {
                  "step": "$f(x) = x^4 - 2x^3 - 371x^2 + 642x + 29{,}232$",
                  "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $6 + \\sqrt{14}$ and $2 + 3\\sqrt{6}$ as roots.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-16*x^3+20*x^2+512*x-1100",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $6 + \\sqrt{14}$ and $2 + 3\\sqrt{6}$ as roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $6 - \\sqrt{14}$ of $6 + \\sqrt{14}$ is also a root.",
                  "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{14}$ is irrational."
                },
                {
                  "step": "The conjugate $2 - 3\\sqrt{6}$ of $2 + 3\\sqrt{6}$ is also a root.",
                  "reason": "Radical conjugate roots: the coefficients are rational and $\\sqrt{6}$ is irrational."
                },
                {
                  "step": "$\\left(x - (6 + \\sqrt{14})\\right)\\left(x - (6 - \\sqrt{14})\\right) = \\left(x - 6\\right)^2 - 14$",
                  "reason": "Difference of squares: the brackets are $\\left(x - 6\\right) - \\sqrt{14}$ and $\\left(x - 6\\right) + \\sqrt{14}$, and $(\\sqrt{14})^2 = 14$."
                },
                {
                  "step": "$\\left(x - 6\\right)^2 - 14 = x^2 - 12x + 22$",
                  "reason": "Square of a binomial: $\\left(x - 6\\right)^2$ has the terms $x^2$, $-12x$ and $36$, and $36 - 14 = 22$."
                },
                {
                  "step": "$\\left(x - (2 + 3\\sqrt{6})\\right)\\left(x - (2 - 3\\sqrt{6})\\right) = \\left(x - 2\\right)^2 - 54$",
                  "reason": "Difference of squares: the brackets are $\\left(x - 2\\right) - 3\\sqrt{6}$ and $\\left(x - 2\\right) + 3\\sqrt{6}$, and $(3\\sqrt{6})^2 = 9 \\cdot 6 = 54$."
                },
                {
                  "step": "$\\left(x - 2\\right)^2 - 54 = x^2 - 4x - 50$",
                  "reason": "Square of a binomial: $\\left(x - 2\\right)^2$ has the terms $x^2$, $-4x$ and $4$, and $4 - 54 = -50$."
                },
                {
                  "step": "$f(x) = (x^2 - 12x + 22)(x^2 - 4x - 50)$",
                  "reason": "Factored form: a polynomial of degree $4$ with leading coefficient $1$ and the four different roots of lines 1 to 3 is the product of the brackets $x - r$, one for each root $r$, and lines 4 to 7 pair them."
                },
                {
                  "step": "$f(x) = x^4 - 16x^3 + 20x^2 + 512x - 1100$",
                  "reason": "Multiplying out and collecting like terms: every term of one bracket times every term of the other."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t202-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{5} + 3\\sqrt{17}$ as a root.",
            "lines": [
              {
                "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{5} + 3\\sqrt{17}$ as a root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\sqrt{5} + 3\\sqrt{17}$",
                "reason": "Defining the unknown: the letter stands for the number the question names."
              },
              {
                "step": "$x^2 = 5 + 6\\sqrt{85} + 153$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $(\\sqrt{5})^2 = 5$, $(3\\sqrt{17})^2 = 153$ and $2 \\cdot \\sqrt{5} \\cdot 3\\sqrt{17} = 6\\sqrt{85}$ by the root of a product."
              },
              {
                "step": "$x^2 - 158 = 6\\sqrt{85}$",
                "reason": "Adding the same number to both sides: $5 + 153 = 158$ is taken from each side."
              },
              {
                "step": "$(x^2 - 158)^2 = 3060$",
                "reason": "Raising both sides to a power: both sides are squared, and $(6\\sqrt{85})^2 = 36 \\cdot 85 = 3060$."
              },
              {
                "step": "$x^4 - 316x^2 + 24{,}964 = 3060$",
                "reason": "Square of a binomial: $(x^2 - 158)^2 = x^4 - 2 \\cdot 158x^2 + 158^2$."
              },
              {
                "step": "$x^4 - 316x^2 + 21{,}904 = 0$",
                "reason": "Adding the same number to both sides: $3060$ is taken from each side."
              },
              {
                "step": "The polynomial $x^4 - 316x^2 + 21{,}904$ has the root $\\sqrt{5} + 3\\sqrt{17}$.",
                "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{7} - 2\\sqrt{10}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-94*x^2+1089",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{7} - 2\\sqrt{10}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{7} - 2\\sqrt{10}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^2 = 7 - 4\\sqrt{70} + 40$",
                  "reason": "Square of a binomial: $(a - b)^2 = a^2 - 2ab + b^2$, with $(\\sqrt{7})^2 = 7$, $(2\\sqrt{10})^2 = 40$ and $2 \\cdot \\sqrt{7} \\cdot 2\\sqrt{10} = 4\\sqrt{70}$ by the root of a product."
                },
                {
                  "step": "$x^2 - 47 = -4\\sqrt{70}$",
                  "reason": "Adding the same number to both sides: $7 + 40 = 47$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 47)^2 = 1120$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(4\\sqrt{70})^2 = 16 \\cdot 70 = 1120$."
                },
                {
                  "step": "$x^4 - 94x^2 + 2209 = 1120$",
                  "reason": "Square of a binomial: $(x^2 - 47)^2 = x^4 - 2 \\cdot 47x^2 + 47^2$."
                },
                {
                  "step": "$x^4 - 94x^2 + 1089 = 0$",
                  "reason": "Adding the same number to both sides: $1120$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^4 - 94x^2 + 1089$ has the root $\\sqrt{7} - 2\\sqrt{10}$.",
                  "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{2} + 3\\sqrt{11}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-202*x^2+9409",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{2} + 3\\sqrt{11}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{2} + 3\\sqrt{11}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^2 = 2 + 6\\sqrt{22} + 99$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $(\\sqrt{2})^2 = 2$, $(3\\sqrt{11})^2 = 99$ and $2 \\cdot \\sqrt{2} \\cdot 3\\sqrt{11} = 6\\sqrt{22}$ by the root of a product."
                },
                {
                  "step": "$x^2 - 101 = 6\\sqrt{22}$",
                  "reason": "Adding the same number to both sides: $2 + 99 = 101$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 101)^2 = 792$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(6\\sqrt{22})^2 = 36 \\cdot 22 = 792$."
                },
                {
                  "step": "$x^4 - 202x^2 + 10{,}201 = 792$",
                  "reason": "Square of a binomial: $(x^2 - 101)^2 = x^4 - 2 \\cdot 101x^2 + 101^2$."
                },
                {
                  "step": "$x^4 - 202x^2 + 9409 = 0$",
                  "reason": "Adding the same number to both sides: $792$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^4 - 202x^2 + 9409$ has the root $\\sqrt{2} + 3\\sqrt{11}$.",
                  "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{3} + \\sqrt{19}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-92*x^2+64",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{3} + \\sqrt{19}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 3\\sqrt{3} + \\sqrt{19}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^2 = 27 + 6\\sqrt{57} + 19$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $(3\\sqrt{3})^2 = 27$, $(\\sqrt{19})^2 = 19$ and $2 \\cdot 3\\sqrt{3} \\cdot \\sqrt{19} = 6\\sqrt{57}$ by the root of a product."
                },
                {
                  "step": "$x^2 - 46 = 6\\sqrt{57}$",
                  "reason": "Adding the same number to both sides: $27 + 19 = 46$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 46)^2 = 2052$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(6\\sqrt{57})^2 = 36 \\cdot 57 = 2052$."
                },
                {
                  "step": "$x^4 - 92x^2 + 2116 = 2052$",
                  "reason": "Square of a binomial: $(x^2 - 46)^2 = x^4 - 2 \\cdot 46x^2 + 46^2$."
                },
                {
                  "step": "$x^4 - 92x^2 + 64 = 0$",
                  "reason": "Adding the same number to both sides: $2052$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^4 - 92x^2 + 64$ has the root $3\\sqrt{3} + \\sqrt{19}$.",
                  "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{69 + 6\\sqrt{5}}$ as a root.",
            "lines": [
              {
                "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{69 + 6\\sqrt{5}}$ as a root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\sqrt{69 + 6\\sqrt{5}}$",
                "reason": "Defining the unknown: the letter stands for the number the question names."
              },
              {
                "step": "$x^2 = 69 + 6\\sqrt{5}$",
                "reason": "Positive square root, from arithmetic: the square of a square root is the number under it."
              },
              {
                "step": "$x^2 - 69 = 6\\sqrt{5}$",
                "reason": "Adding the same number to both sides: $69$ is taken from each side."
              },
              {
                "step": "$(x^2 - 69)^2 = 180$",
                "reason": "Raising both sides to a power: both sides are squared, and $(6\\sqrt{5})^2 = 36 \\cdot 5 = 180$."
              },
              {
                "step": "$x^4 - 138x^2 + 4761 = 180$",
                "reason": "Square of a binomial: $(x^2 - 69)^2 = x^4 - 2 \\cdot 69x^2 + 69^2$."
              },
              {
                "step": "$x^4 - 138x^2 + 4581 = 0$",
                "reason": "Adding the same number to both sides: $180$ is taken from each side."
              },
              {
                "step": "The polynomial $x^4 - 138x^2 + 4581$ has the root $\\sqrt{69 + 6\\sqrt{5}}$.",
                "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{41 - 6\\sqrt{11}}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-82*x^2+1285",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{41 - 6\\sqrt{11}}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{41 - 6\\sqrt{11}}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^2 = 41 - 6\\sqrt{11}$",
                  "reason": "Positive square root, from arithmetic: the square of a square root is the number under it."
                },
                {
                  "step": "$x^2 - 41 = -6\\sqrt{11}$",
                  "reason": "Adding the same number to both sides: $41$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 41)^2 = 396$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(6\\sqrt{11})^2 = 36 \\cdot 11 = 396$."
                },
                {
                  "step": "$x^4 - 82x^2 + 1681 = 396$",
                  "reason": "Square of a binomial: $(x^2 - 41)^2 = x^4 - 2 \\cdot 41x^2 + 41^2$."
                },
                {
                  "step": "$x^4 - 82x^2 + 1285 = 0$",
                  "reason": "Adding the same number to both sides: $396$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^4 - 82x^2 + 1285$ has the root $\\sqrt{41 - 6\\sqrt{11}}$.",
                  "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{83 - 4\\sqrt{17}}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-166*x^2+6617",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{83 - 4\\sqrt{17}}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{83 - 4\\sqrt{17}}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^2 = 83 - 4\\sqrt{17}$",
                  "reason": "Positive square root, from arithmetic: the square of a square root is the number under it."
                },
                {
                  "step": "$x^2 - 83 = -4\\sqrt{17}$",
                  "reason": "Adding the same number to both sides: $83$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 83)^2 = 272$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(4\\sqrt{17})^2 = 16 \\cdot 17 = 272$."
                },
                {
                  "step": "$x^4 - 166x^2 + 6889 = 272$",
                  "reason": "Square of a binomial: $(x^2 - 83)^2 = x^4 - 2 \\cdot 83x^2 + 83^2$."
                },
                {
                  "step": "$x^4 - 166x^2 + 6617 = 0$",
                  "reason": "Adding the same number to both sides: $272$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^4 - 166x^2 + 6617$ has the root $\\sqrt{83 - 4\\sqrt{17}}$.",
                  "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{38 + 2\\sqrt{10}}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^4-76*x^2+1404",
              "lines": [
                {
                  "step": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{38 + 2\\sqrt{10}}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{38 + 2\\sqrt{10}}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^2 = 38 + 2\\sqrt{10}$",
                  "reason": "Positive square root, from arithmetic: the square of a square root is the number under it."
                },
                {
                  "step": "$x^2 - 38 = 2\\sqrt{10}$",
                  "reason": "Adding the same number to both sides: $38$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 38)^2 = 40$",
                  "reason": "Raising both sides to a power: both sides are squared, and $(2\\sqrt{10})^2 = 4 \\cdot 10 = 40$."
                },
                {
                  "step": "$x^4 - 76x^2 + 1444 = 40$",
                  "reason": "Square of a binomial: $(x^2 - 38)^2 = x^4 - 2 \\cdot 38x^2 + 38^2$."
                },
                {
                  "step": "$x^4 - 76x^2 + 1404 = 0$",
                  "reason": "Adding the same number to both sides: $40$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^4 - 76x^2 + 1404$ has the root $\\sqrt{38 + 2\\sqrt{10}}$.",
                  "reason": "Answering the question asked: by line 7 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $4\\sqrt[3]{14} + 2\\sqrt[3]{196}$ as a root.",
            "lines": [
              {
                "step": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $4\\sqrt[3]{14} + 2\\sqrt[3]{196}$ as a root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 4\\sqrt[3]{14} + 2\\sqrt[3]{196}$",
                "reason": "Defining the unknown: the letter stands for the number the question names."
              },
              {
                "step": "$x^3 = 896 + 1568 + 3 \\cdot 4\\sqrt[3]{14} \\cdot 2\\sqrt[3]{196} \\cdot x$",
                "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a = 4\\sqrt[3]{14}$, $b = 2\\sqrt[3]{196}$ and $a + b = x$; $(4\\sqrt[3]{14})^3 = 896$ and $(2\\sqrt[3]{196})^3 = 1568$."
              },
              {
                "step": "$4\\sqrt[3]{14} \\cdot 2\\sqrt[3]{196} = 8\\sqrt[3]{2744} = 112$",
                "reason": "Root of a product: $\\sqrt[3]{14}\\sqrt[3]{196} = \\sqrt[3]{2744}$, and $14^3 = 2744$."
              },
              {
                "step": "$x^3 = 2464 + 336x$",
                "reason": "Substitution: line 4 takes the place of the product of the two cube roots in line 3, and $896 + 1568 = 2464$."
              },
              {
                "step": "$x^3 - 336x - 2464 = 0$",
                "reason": "Adding the same number to both sides: $2464 + 336x$ is taken from each side."
              },
              {
                "step": "The polynomial $x^3 - 336x - 2464$ has the root $4\\sqrt[3]{14} + 2\\sqrt[3]{196}$.",
                "reason": "Answering the question asked: by line 6 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $2\\sqrt[3]{20} - \\sqrt[3]{50}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3+60*x-110",
              "lines": [
                {
                  "step": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $2\\sqrt[3]{20} - \\sqrt[3]{50}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2\\sqrt[3]{20} - \\sqrt[3]{50}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^3 = 160 - 50 - 3 \\cdot 2\\sqrt[3]{20} \\cdot \\sqrt[3]{50} \\cdot x$",
                  "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a = 2\\sqrt[3]{20}$, $b = -\\sqrt[3]{50}$ and $a + b = x$; $(2\\sqrt[3]{20})^3 = 160$ and $(\\sqrt[3]{50})^3 = 50$."
                },
                {
                  "step": "$2\\sqrt[3]{20} \\cdot \\sqrt[3]{50} = 2\\sqrt[3]{1000} = 20$",
                  "reason": "Root of a product: $\\sqrt[3]{20}\\sqrt[3]{50} = \\sqrt[3]{1000}$, and $10^3 = 1000$."
                },
                {
                  "step": "$x^3 = 110 - 60x$",
                  "reason": "Substitution: line 4 takes the place of the product of the two cube roots in line 3, and $160 - 50 = 110$."
                },
                {
                  "step": "$x^3 + 60x - 110 = 0$",
                  "reason": "Adding the same number to both sides: $110 - 60x$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^3 + 60x - 110$ has the root $2\\sqrt[3]{20} - \\sqrt[3]{50}$.",
                  "reason": "Answering the question asked: by line 6 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $3$."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{252} - \\sqrt[3]{294}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3+126*x+42",
              "lines": [
                {
                  "step": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{252} - \\sqrt[3]{294}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt[3]{252} - \\sqrt[3]{294}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^3 = 252 - 294 - 3 \\cdot \\sqrt[3]{252} \\cdot \\sqrt[3]{294} \\cdot x$",
                  "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a = \\sqrt[3]{252}$, $b = -\\sqrt[3]{294}$ and $a + b = x$; $(\\sqrt[3]{252})^3 = 252$ and $(\\sqrt[3]{294})^3 = 294$."
                },
                {
                  "step": "$\\sqrt[3]{252} \\cdot \\sqrt[3]{294} = \\sqrt[3]{74{,}088} = 42$",
                  "reason": "Root of a product: $\\sqrt[3]{252}\\sqrt[3]{294} = \\sqrt[3]{74{,}088}$, and $42^3 = 74{,}088$."
                },
                {
                  "step": "$x^3 = -42 - 126x$",
                  "reason": "Substitution: line 4 takes the place of the product of the two cube roots in line 3, and $252 - 294 = -42$."
                },
                {
                  "step": "$x^3 + 126x + 42 = 0$",
                  "reason": "Adding the same number to both sides: $-42 - 126x$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^3 + 126x + 42$ has the root $\\sqrt[3]{252} - \\sqrt[3]{294}$.",
                  "reason": "Answering the question asked: by line 6 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $3$."
                }
              ]
            },
            {
              "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{28} + \\sqrt[3]{98}$ as a root.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-42*x-126",
              "lines": [
                {
                  "step": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{28} + \\sqrt[3]{98}$ as a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt[3]{28} + \\sqrt[3]{98}$",
                  "reason": "Defining the unknown: the letter stands for the number the question names."
                },
                {
                  "step": "$x^3 = 28 + 98 + 3 \\cdot \\sqrt[3]{28} \\cdot \\sqrt[3]{98} \\cdot x$",
                  "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a = \\sqrt[3]{28}$, $b = \\sqrt[3]{98}$ and $a + b = x$; $(\\sqrt[3]{28})^3 = 28$ and $(\\sqrt[3]{98})^3 = 98$."
                },
                {
                  "step": "$\\sqrt[3]{28} \\cdot \\sqrt[3]{98} = \\sqrt[3]{2744} = 14$",
                  "reason": "Root of a product: $\\sqrt[3]{28}\\sqrt[3]{98} = \\sqrt[3]{2744}$, and $14^3 = 2744$."
                },
                {
                  "step": "$x^3 = 126 + 42x$",
                  "reason": "Substitution: line 4 takes the place of the product of the two cube roots in line 3, and $28 + 98 = 126$."
                },
                {
                  "step": "$x^3 - 42x - 126 = 0$",
                  "reason": "Adding the same number to both sides: $126 + 42x$ is taken from each side."
                },
                {
                  "step": "The polynomial $x^3 - 42x - 126$ has the root $\\sqrt[3]{28} + \\sqrt[3]{98}$.",
                  "reason": "Answering the question asked: by line 6 the number of line 2 is a root, and the polynomial has integer coefficients, leading coefficient $1$ and degree $3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t202-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the number $r = \\sqrt[3]{128 + 128\\sqrt{3}} - \\sqrt[3]{128\\sqrt{3} - 128}$ is irrational.",
            "lines": [
              {
                "step": "Decide whether the number $r = \\sqrt[3]{128 + 128\\sqrt{3}} - \\sqrt[3]{128\\sqrt{3} - 128}$ is irrational.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$r^3 = (128 + 128\\sqrt{3}) - (128\\sqrt{3} - 128) - 3\\sqrt[3]{128 + 128\\sqrt{3}}\\sqrt[3]{128\\sqrt{3} - 128}\\,r$",
                "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a$ the first cube root, $b$ minus the second, and $a + b = r$."
              },
              {
                "step": "$(128 + 128\\sqrt{3})(128\\sqrt{3} - 128) = 49{,}152 - 16{,}384 = 32{,}768$",
                "reason": "Difference of squares: $(b\\sqrt{d} + a)(b\\sqrt{d} - a) = b^2d - a^2$."
              },
              {
                "step": "$\\sqrt[3]{128 + 128\\sqrt{3}}\\sqrt[3]{128\\sqrt{3} - 128} = \\sqrt[3]{32{,}768} = 32$",
                "reason": "Root of a product: $\\sqrt[3]{a}\\sqrt[3]{b} = \\sqrt[3]{ab}$ for $a, b \\ge 0$, and both numbers under the roots are positive: $128 + 128\\sqrt{3}$ is a sum of positive numbers, and $128\\sqrt{3} - 128$ is positive since $(128\\sqrt{3})^2 = 49{,}152$ is greater than $128^2 = 16{,}384$; and $32^3 = 32{,}768$."
              },
              {
                "step": "$r^3 = 256 - 96r$",
                "reason": "Substitution: line 4 takes the place of the product of the cube roots in line 2, and the multiples of $\\sqrt{3}$ cancel."
              },
              {
                "step": "So $r$ is a root of $f(x) = x^3 + 96x - 256$.",
                "reason": "Adding the same number to both sides: $256 - 96r$ is taken from each side of line 5."
              },
              {
                "step": "The number $r$ is positive.",
                "reason": "Powers and roots of positive numbers keep the order: $128\\sqrt{3} - 128$ is positive by line 4, and $128 + 128\\sqrt{3}$ is the greater by $256$, so its cube root is the greater."
              },
              {
                "step": "$128 + 128\\sqrt{3} < 512$",
                "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{3} < 2$, since $3 < 4$, so $128 + 128\\sqrt{3} < 128 + 256 = 384$, and $384 < 512$."
              },
              {
                "step": "So $r$ is less than $8$.",
                "reason": "Powers and roots of positive numbers keep the order: by line 8 the first cube root is less than $\\sqrt[3]{512} = 8$, and $r$ is that cube root less a positive number."
              },
              {
                "step": "If $r$ is rational, it is one of $1$, $2$ and $4$.",
                "reason": "Rational Root Theorem: $f(x)$ has integer coefficients and leading coefficient $1$, so a rational root is an integer that divides $-256$, and by lines 7 and 9 it lies between $0$ and $8$."
              },
              {
                "step": "$\\begin{array}{c|ccc} x & 1 & 2 & 4 \\\\ \\hline f(x) & -159 & -56 & 192 \\end{array}$",
                "reason": "Substituting a value: each number of line 10 goes in place of $x$ in $f(x)$."
              },
              {
                "step": "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes.",
                "reason": "Irrational number, from arithmetic: $r$ is a real number that is not rational."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the number $r = \\sqrt[3]{94 + 34\\sqrt{31}} - \\sqrt[3]{34\\sqrt{31} - 94}$ is irrational.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the number $r = \\sqrt[3]{94 + 34\\sqrt{31}} - \\sqrt[3]{34\\sqrt{31} - 94}$ is irrational.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^3 = (94 + 34\\sqrt{31}) - (34\\sqrt{31} - 94) - 3\\sqrt[3]{94 + 34\\sqrt{31}}\\sqrt[3]{34\\sqrt{31} - 94}\\,r$",
                  "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a$ the first cube root, $b$ minus the second, and $a + b = r$."
                },
                {
                  "step": "$(94 + 34\\sqrt{31})(34\\sqrt{31} - 94) = 35{,}836 - 8836 = 27{,}000$",
                  "reason": "Difference of squares: $(b\\sqrt{d} + a)(b\\sqrt{d} - a) = b^2d - a^2$."
                },
                {
                  "step": "$\\sqrt[3]{94 + 34\\sqrt{31}}\\sqrt[3]{34\\sqrt{31} - 94} = \\sqrt[3]{27{,}000} = 30$",
                  "reason": "Root of a product: $\\sqrt[3]{a}\\sqrt[3]{b} = \\sqrt[3]{ab}$ for $a, b \\ge 0$, and both numbers under the roots are positive: $94 + 34\\sqrt{31}$ is a sum of positive numbers, and $34\\sqrt{31} - 94$ is positive since $(34\\sqrt{31})^2 = 35{,}836$ is greater than $94^2 = 8836$; and $30^3 = 27{,}000$."
                },
                {
                  "step": "$r^3 = 188 - 90r$",
                  "reason": "Substitution: line 4 takes the place of the product of the cube roots in line 2, and the multiples of $\\sqrt{31}$ cancel."
                },
                {
                  "step": "So $r$ is a root of $f(x) = x^3 + 90x - 188$.",
                  "reason": "Adding the same number to both sides: $188 - 90r$ is taken from each side of line 5."
                },
                {
                  "step": "The number $r$ is positive.",
                  "reason": "Powers and roots of positive numbers keep the order: $34\\sqrt{31} - 94$ is positive by line 4, and $94 + 34\\sqrt{31}$ is the greater by $188$, so its cube root is the greater."
                },
                {
                  "step": "$94 + 34\\sqrt{31} < 343$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{31} < 6$, since $31 < 36$, so $94 + 34\\sqrt{31} < 94 + 204 = 298$, and $298 < 343$."
                },
                {
                  "step": "So $r$ is less than $7$.",
                  "reason": "Powers and roots of positive numbers keep the order: by line 8 the first cube root is less than $\\sqrt[3]{343} = 7$, and $r$ is that cube root less a positive number."
                },
                {
                  "step": "If $r$ is rational, it is one of $1$, $2$ and $4$.",
                  "reason": "Rational Root Theorem: $f(x)$ has integer coefficients and leading coefficient $1$, so a rational root is an integer that divides $-188$, and by lines 7 and 9 it lies between $0$ and $7$."
                },
                {
                  "step": "$\\begin{array}{c|ccc} x & 1 & 2 & 4 \\\\ \\hline f(x) & -97 & 0 & 236 \\end{array}$",
                  "reason": "Substituting a value: each number of line 10 goes in place of $x$ in $f(x)$."
                },
                {
                  "step": "$f(x) = (x - 2)(x^2 + 2x + 94)$",
                  "reason": "Factor Theorem: $f(2) = 0$ by line 11, so $x - 2$ is a factor, and synthetic division by $2$ gives the quotient."
                },
                {
                  "step": "The discriminant of $x^2 + 2x + 94$ is $2^2 - 4 \\cdot 94 = -372$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "So $r = 2$, a rational number, and the answer is No.",
                  "reason": "Zero-product property: $f(r) = 0$ by line 6, $r$ is real, and the quadratic of line 12 is not $0$ at a real number, so $r - 2 = 0$."
                }
              ]
            },
            {
              "prompt": "Decide whether the number $r = \\sqrt[3]{11 + 5\\sqrt{34}} - \\sqrt[3]{5\\sqrt{34} - 11}$ is irrational.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the number $r = \\sqrt[3]{11 + 5\\sqrt{34}} - \\sqrt[3]{5\\sqrt{34} - 11}$ is irrational.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^3 = (11 + 5\\sqrt{34}) - (5\\sqrt{34} - 11) - 3\\sqrt[3]{11 + 5\\sqrt{34}}\\sqrt[3]{5\\sqrt{34} - 11}\\,r$",
                  "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a$ the first cube root, $b$ minus the second, and $a + b = r$."
                },
                {
                  "step": "$(11 + 5\\sqrt{34})(5\\sqrt{34} - 11) = 850 - 121 = 729$",
                  "reason": "Difference of squares: $(b\\sqrt{d} + a)(b\\sqrt{d} - a) = b^2d - a^2$."
                },
                {
                  "step": "$\\sqrt[3]{11 + 5\\sqrt{34}}\\sqrt[3]{5\\sqrt{34} - 11} = \\sqrt[3]{729} = 9$",
                  "reason": "Root of a product: $\\sqrt[3]{a}\\sqrt[3]{b} = \\sqrt[3]{ab}$ for $a, b \\ge 0$, and both numbers under the roots are positive: $11 + 5\\sqrt{34}$ is a sum of positive numbers, and $5\\sqrt{34} - 11$ is positive since $(5\\sqrt{34})^2 = 850$ is greater than $11^2 = 121$; and $9^3 = 729$."
                },
                {
                  "step": "$r^3 = 22 - 27r$",
                  "reason": "Substitution: line 4 takes the place of the product of the cube roots in line 2, and the multiples of $\\sqrt{34}$ cancel."
                },
                {
                  "step": "So $r$ is a root of $f(x) = x^3 + 27x - 22$.",
                  "reason": "Adding the same number to both sides: $22 - 27r$ is taken from each side of line 5."
                },
                {
                  "step": "The number $r$ is positive.",
                  "reason": "Powers and roots of positive numbers keep the order: $5\\sqrt{34} - 11$ is positive by line 4, and $11 + 5\\sqrt{34}$ is the greater by $22$, so its cube root is the greater."
                },
                {
                  "step": "$11 + 5\\sqrt{34} < 64$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{34} < 6$, since $34 < 36$, so $11 + 5\\sqrt{34} < 11 + 30 = 41$, and $41 < 64$."
                },
                {
                  "step": "So $r$ is less than $4$.",
                  "reason": "Powers and roots of positive numbers keep the order: by line 8 the first cube root is less than $\\sqrt[3]{64} = 4$, and $r$ is that cube root less a positive number."
                },
                {
                  "step": "If $r$ is rational, it is one of $1$ and $2$.",
                  "reason": "Rational Root Theorem: $f(x)$ has integer coefficients and leading coefficient $1$, so a rational root is an integer that divides $-22$, and by lines 7 and 9 it lies between $0$ and $4$."
                },
                {
                  "step": "$\\begin{array}{c|cc} x & 1 & 2 \\\\ \\hline f(x) & 6 & 40 \\end{array}$",
                  "reason": "Substituting a value: each number of line 10 goes in place of $x$ in $f(x)$."
                },
                {
                  "step": "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes.",
                  "reason": "Irrational number, from arithmetic: $r$ is a real number that is not rational."
                }
              ]
            },
            {
              "prompt": "Decide whether the number $r = \\sqrt[3]{126 + 17\\sqrt{109}} - \\sqrt[3]{17\\sqrt{109} - 126}$ is irrational.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the number $r = \\sqrt[3]{126 + 17\\sqrt{109}} - \\sqrt[3]{17\\sqrt{109} - 126}$ is irrational.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^3 = (126 + 17\\sqrt{109}) - (17\\sqrt{109} - 126) - 3\\sqrt[3]{126 + 17\\sqrt{109}}\\sqrt[3]{17\\sqrt{109} - 126}\\,r$",
                  "reason": "Squaring and cubing a known sum: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$, so $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$, with $a$ the first cube root, $b$ minus the second, and $a + b = r$."
                },
                {
                  "step": "$(126 + 17\\sqrt{109})(17\\sqrt{109} - 126) = 31{,}501 - 15{,}876 = 15{,}625$",
                  "reason": "Difference of squares: $(b\\sqrt{d} + a)(b\\sqrt{d} - a) = b^2d - a^2$."
                },
                {
                  "step": "$\\sqrt[3]{126 + 17\\sqrt{109}}\\sqrt[3]{17\\sqrt{109} - 126} = \\sqrt[3]{15{,}625} = 25$",
                  "reason": "Root of a product: $\\sqrt[3]{a}\\sqrt[3]{b} = \\sqrt[3]{ab}$ for $a, b \\ge 0$, and both numbers under the roots are positive: $126 + 17\\sqrt{109}$ is a sum of positive numbers, and $17\\sqrt{109} - 126$ is positive since $(17\\sqrt{109})^2 = 31{,}501$ is greater than $126^2 = 15{,}876$; and $25^3 = 15{,}625$."
                },
                {
                  "step": "$r^3 = 252 - 75r$",
                  "reason": "Substitution: line 4 takes the place of the product of the cube roots in line 2, and the multiples of $\\sqrt{109}$ cancel."
                },
                {
                  "step": "So $r$ is a root of $f(x) = x^3 + 75x - 252$.",
                  "reason": "Adding the same number to both sides: $252 - 75r$ is taken from each side of line 5."
                },
                {
                  "step": "The number $r$ is positive.",
                  "reason": "Powers and roots of positive numbers keep the order: $17\\sqrt{109} - 126$ is positive by line 4, and $126 + 17\\sqrt{109}$ is the greater by $252$, so its cube root is the greater."
                },
                {
                  "step": "$126 + 17\\sqrt{109} < 343$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{109} < 11$, since $109 < 121$, so $126 + 17\\sqrt{109} < 126 + 187 = 313$, and $313 < 343$."
                },
                {
                  "step": "So $r$ is less than $7$.",
                  "reason": "Powers and roots of positive numbers keep the order: by line 8 the first cube root is less than $\\sqrt[3]{343} = 7$, and $r$ is that cube root less a positive number."
                },
                {
                  "step": "If $r$ is rational, it is one of $1$, $2$, $3$, $4$ and $6$.",
                  "reason": "Rational Root Theorem: $f(x)$ has integer coefficients and leading coefficient $1$, so a rational root is an integer that divides $-252$, and by lines 7 and 9 it lies between $0$ and $7$."
                },
                {
                  "step": "$\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 6 \\\\ \\hline f(x) & -176 & -94 & 0 & 112 & 414 \\end{array}$",
                  "reason": "Substituting a value: each number of line 10 goes in place of $x$ in $f(x)$."
                },
                {
                  "step": "$f(x) = (x - 3)(x^2 + 3x + 84)$",
                  "reason": "Factor Theorem: $f(3) = 0$ by line 11, so $x - 3$ is a factor, and synthetic division by $3$ gives the quotient."
                },
                {
                  "step": "The discriminant of $x^2 + 3x + 84$ is $3^2 - 4 \\cdot 84 = -327$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "So $r = 3$, a rational number, and the answer is No.",
                  "reason": "Zero-product property: $f(r) = 0$ by line 6, $r$ is real, and the quadratic of line 12 is not $0$ at a real number, so $r - 3 = 0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t202-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = 7x^3 + 10x^2 + 4x - 7$ has an irrational root between $0$ and $1$.",
            "lines": [
              {
                "step": "Decide whether $f(x) = 7x^3 + 10x^2 + 4x - 7$ has an irrational root between $0$ and $1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(0) = 7 \\cdot 0^3 + 10 \\cdot 0^2 + 4 \\cdot 0 - 7$",
                "reason": "Substituting a value: $0$ goes in place of $x$."
              },
              {
                "step": "$f(0) = -7$",
                "reason": "Order of operations: each power, then each product, then the sum from left to right."
              },
              {
                "step": "$f(1) = 7 \\cdot 1^3 + 10 \\cdot 1^2 + 4 \\cdot 1 - 7$",
                "reason": "Substituting a value: $1$ goes in place of $x$."
              },
              {
                "step": "$f(1) = 14$",
                "reason": "Order of operations: each power, then each product, then the sum from left to right."
              },
              {
                "step": "So $f(x)$ has a root between $0$ and $1$.",
                "reason": "Sign change: $f(0) = -7$ and $f(1) = 14$ have opposite signs, so the polynomial has a root between $0$ and $1$."
              },
              {
                "step": "A rational root between $0$ and $1$ can only be $\\dfrac{1}{7}$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so a rational root $\\dfrac{k}{m}$ in lowest terms has $k$ dividing $-7$ and $m$ dividing $7$; these are the ones between $0$ and $1$."
              },
              {
                "step": "$\\begin{array}{c|c} x & \\dfrac{1}{7} \\\\ \\hline f(x) & -\\dfrac{304}{49} \\end{array}$",
                "reason": "Substituting a value: each number of line 7 goes in place of $x$."
              },
              {
                "step": "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes.",
                "reason": "Irrational number, from arithmetic: the root is a real number that is not rational."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = 10x^3 - 3x^2 + 34x - 78$ has an irrational root between $1$ and $2$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 10x^3 - 3x^2 + 34x - 78$ has an irrational root between $1$ and $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(1) = 10 \\cdot 1^3 - 3 \\cdot 1^2 + 34 \\cdot 1 - 78$",
                  "reason": "Substituting a value: $1$ goes in place of $x$."
                },
                {
                  "step": "$f(1) = -37$",
                  "reason": "Order of operations: each power, then each product, then the sum from left to right."
                },
                {
                  "step": "$f(2) = 10 \\cdot 2^3 - 3 \\cdot 2^2 + 34 \\cdot 2 - 78$",
                  "reason": "Substituting a value: $2$ goes in place of $x$."
                },
                {
                  "step": "$f(2) = 58$",
                  "reason": "Order of operations: each power, then each product, then the sum from left to right."
                },
                {
                  "step": "So $f(x)$ has a root between $1$ and $2$.",
                  "reason": "Sign change: $f(1) = -37$ and $f(2) = 58$ have opposite signs, so the polynomial has a root between $1$ and $2$."
                },
                {
                  "step": "A rational root between $1$ and $2$ is one of $\\dfrac{6}{5}$, $\\dfrac{13}{10}$ and $\\dfrac{3}{2}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so a rational root $\\dfrac{k}{m}$ in lowest terms has $k$ dividing $-78$ and $m$ dividing $10$; these are the ones between $1$ and $2$."
                },
                {
                  "step": "$\\begin{array}{c|ccc} x & \\dfrac{6}{5} & \\dfrac{13}{10} & \\dfrac{3}{2} \\\\ \\hline f(x) & -\\dfrac{606}{25} & -\\dfrac{169}{10} & 0 \\end{array}$",
                  "reason": "Substituting a value: each number of line 7 goes in place of $x$."
                },
                {
                  "step": "$f(x) = \\left(x - \\dfrac{3}{2}\\right)(10x^2 + 12x + 52)$",
                  "reason": "Factor Theorem: $f\\left(\\dfrac{3}{2}\\right) = 0$ by line 8, so $x - \\dfrac{3}{2}$ is a factor, and synthetic division by $\\dfrac{3}{2}$ gives the quotient."
                },
                {
                  "step": "The discriminant of $10x^2 + 12x + 52$ is $144 - 4 \\cdot 10 \\cdot 52 = -1936$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "So $\\dfrac{3}{2}$ is the only real root of $f(x)$; it is rational, and the answer is No.",
                  "reason": "Zero-product property: $f(x) = 0$ only where $x - \\dfrac{3}{2} = 0$, since the quadratic of line 9 is not $0$ at a real number."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = 9x^3 - 6x^2 - 8x + 52$ has an irrational root between $-2$ and $-1$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 9x^3 - 6x^2 - 8x + 52$ has an irrational root between $-2$ and $-1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-2) = 9 \\cdot (-2)^3 - 6 \\cdot (-2)^2 - 8 \\cdot (-2) + 52$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$."
                },
                {
                  "step": "$f(-2) = -28$",
                  "reason": "Order of operations: each power, then each product, then the sum from left to right."
                },
                {
                  "step": "$f(-1) = 9 \\cdot (-1)^3 - 6 \\cdot (-1)^2 - 8 \\cdot (-1) + 52$",
                  "reason": "Substituting a value: $-1$ goes in place of $x$."
                },
                {
                  "step": "$f(-1) = 45$",
                  "reason": "Order of operations: each power, then each product, then the sum from left to right."
                },
                {
                  "step": "So $f(x)$ has a root between $-2$ and $-1$.",
                  "reason": "Sign change: $f(-2) = -28$ and $f(-1) = 45$ have opposite signs, so the polynomial has a root between $-2$ and $-1$."
                },
                {
                  "step": "A rational root between $-2$ and $-1$ is one of $-\\dfrac{13}{9}$ and $-\\dfrac{4}{3}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so a rational root $\\dfrac{k}{m}$ in lowest terms has $k$ dividing $52$ and $m$ dividing $9$; these are the ones between $-2$ and $-1$."
                },
                {
                  "step": "$\\begin{array}{c|cc} x & -\\dfrac{13}{9} & -\\dfrac{4}{3} \\\\ \\hline f(x) & \\dfrac{1937}{81} & \\dfrac{92}{3} \\end{array}$",
                  "reason": "Substituting a value: each number of line 7 goes in place of $x$."
                },
                {
                  "step": "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes.",
                  "reason": "Irrational number, from arithmetic: the root is a real number that is not rational."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = 8x^3 + 18x^2 - 65x + 72$ has an irrational root between $-5$ and $-4$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 8x^3 + 18x^2 - 65x + 72$ has an irrational root between $-5$ and $-4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-5) = 8 \\cdot (-5)^3 + 18 \\cdot (-5)^2 - 65 \\cdot (-5) + 72$",
                  "reason": "Substituting a value: $-5$ goes in place of $x$."
                },
                {
                  "step": "$f(-5) = -153$",
                  "reason": "Order of operations: each power, then each product, then the sum from left to right."
                },
                {
                  "step": "$f(-4) = 8 \\cdot (-4)^3 + 18 \\cdot (-4)^2 - 65 \\cdot (-4) + 72$",
                  "reason": "Substituting a value: $-4$ goes in place of $x$."
                },
                {
                  "step": "$f(-4) = 108$",
                  "reason": "Order of operations: each power, then each product, then the sum from left to right."
                },
                {
                  "step": "So $f(x)$ has a root between $-5$ and $-4$.",
                  "reason": "Sign change: $f(-5) = -153$ and $f(-4) = 108$ have opposite signs, so the polynomial has a root between $-5$ and $-4$."
                },
                {
                  "step": "A rational root between $-5$ and $-4$ can only be $-\\dfrac{9}{2}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so a rational root $\\dfrac{k}{m}$ in lowest terms has $k$ dividing $72$ and $m$ dividing $8$; these are the ones between $-5$ and $-4$."
                },
                {
                  "step": "$\\begin{array}{c|c} x & -\\dfrac{9}{2} \\\\ \\hline f(x) & 0 \\end{array}$",
                  "reason": "Substituting a value: each number of line 7 goes in place of $x$."
                },
                {
                  "step": "$f(x) = \\left(x + \\dfrac{9}{2}\\right)(8x^2 - 18x + 16)$",
                  "reason": "Factor Theorem: $f\\left(-\\dfrac{9}{2}\\right) = 0$ by line 8, so $x + \\dfrac{9}{2}$ is a factor, and synthetic division by $-\\dfrac{9}{2}$ gives the quotient."
                },
                {
                  "step": "The discriminant of $8x^2 - 18x + 16$ is $324 - 4 \\cdot 8 \\cdot 16 = -188$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "So $-\\dfrac{9}{2}$ is the only real root of $f(x)$; it is rational, and the answer is No.",
                  "reason": "Zero-product property: $f(x) = 0$ only where $x + \\dfrac{9}{2} = 0$, since the quadratic of line 9 is not $0$ at a real number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t202-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 5x^2 - 221x - 1665$, given that $2 + 3\\sqrt{21}$ is a root, and write that line right.",
            "given": [
              "The conjugate $2 - 3\\sqrt{21}$ is also a root.",
              "$(2 + 3\\sqrt{21}) + (2 - 3\\sqrt{21}) = 4$",
              "$(2 + 3\\sqrt{21})(2 - 3\\sqrt{21}) = 4 + 189 = 193$",
              "For a number $e$, $f(x) = (x^2 - 4x + 193)(x + e)$.",
              "$193e = -1665$",
              "$e = -\\dfrac{1665}{193}$",
              "The other two roots are $2 - 3\\sqrt{21}$ and $\\dfrac{1665}{193}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 5x^2 - 221x - 1665$, given that $2 + 3\\sqrt{21}$ is a root, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes the product as $4 + 189$, but the square of $3\\sqrt{21}$ is taken away.",
                "reason": "A sign lost: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$, with a minus sign before $b^2d$."
              },
              {
                "step": "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 3."
              },
              {
                "step": "Line 3 written right is $(2 + 3\\sqrt{21})(2 - 3\\sqrt{21}) = 4 - 189 = -185$.",
                "reason": "Difference of squares: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 3x^2 - 69x - 145$, given that $4 - 3\\sqrt{5}$ is a root, and write that line right.",
              "given": [
                "The conjugate $4 + 3\\sqrt{5}$ is also a root.",
                "$(4 - 3\\sqrt{5}) + (4 + 3\\sqrt{5}) = 8$",
                "$(4 - 3\\sqrt{5})(4 + 3\\sqrt{5}) = 16 - 45 = -29$",
                "For a number $e$, $f(x) = (x^2 - 8x - 29)(x + e)$.",
                "$-29e = 145$",
                "$e = -5$",
                "The other two roots are $4 + 3\\sqrt{5}$ and $5$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -29*e = -145",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 3x^2 - 69x - 145$, given that $4 - 3\\sqrt{5}$ is a root, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 gives the constant term of $f(x)$ as $145$, but it is $-145$.",
                  "reason": "A sign lost: the constant term of $f(x)$ is $-145$, and line 4 makes it $-29e$."
                },
                {
                  "step": "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 5."
                },
                {
                  "step": "Line 5 written right is $-29e = -145$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of $f(x)$ and of line 4 are equal."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 16x^2 - 5x + 390$, given that $5 - 3\\sqrt{10}$ is a root, and write that line right.",
              "given": [
                "The conjugate $5 + 3\\sqrt{10}$ is also a root.",
                "$(5 - 3\\sqrt{10}) + (5 + 3\\sqrt{10}) = 10$",
                "$(5 - 3\\sqrt{10})(5 + 3\\sqrt{10}) = 25 - 90 = -65$",
                "For a number $e$, $f(x) = (x^2 - 10x - 65)(x + e)$.",
                "$-65e = 390$",
                "$e = 6$",
                "The other two roots are $5 + 3\\sqrt{10}$ and $-6$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: e = -6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 16x^2 - 5x + 390$, given that $5 - 3\\sqrt{10}$ is a root, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 gives $e = 6$, but $390 \\div (-65) = -6$.",
                  "reason": "A sign lost: a quotient of two numbers of opposite signs is negative."
                },
                {
                  "step": "The lines above line 6 are right, and each later line follows from line 6 as it is written, so line 6 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 6."
                },
                {
                  "step": "Line 6 written right is $e = -6$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 5 are divided by $-65$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 4x^2 - 299x + 606$, given that $1 - 4\\sqrt{19}$ is a root, and write that line right.",
              "given": [
                "The conjugate $1 + 4\\sqrt{19}$ is also a root.",
                "$(1 - 4\\sqrt{19}) + (1 + 4\\sqrt{19}) = 2$",
                "$(1 - 4\\sqrt{19})(1 + 4\\sqrt{19}) = 1 + 304 = 305$",
                "For a number $e$, $f(x) = (x^2 - 2x + 305)(x + e)$.",
                "$305e = 606$",
                "$e = \\dfrac{606}{305}$",
                "The other two roots are $1 + 4\\sqrt{19}$ and $-\\dfrac{606}{305}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (1-4*sqrt(19))*(1+4*sqrt(19)) = 1-304 = -303",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 4x^2 - 299x + 606$, given that $1 - 4\\sqrt{19}$ is a root, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes the product as $1 + 304$, but the square of $4\\sqrt{19}$ is taken away.",
                  "reason": "A sign lost: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$, with a minus sign before $b^2d$."
                },
                {
                  "step": "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 3."
                },
                {
                  "step": "Line 3 written right is $(1 - 4\\sqrt{19})(1 + 4\\sqrt{19}) = 1 - 304 = -303$.",
                  "reason": "Difference of squares: $(a + b\\sqrt{d})(a - b\\sqrt{d}) = a^2 - b^2d$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t202-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $-3 + 4\\sqrt{10}$ and $x$ minus the conjugate of $-3 + 4\\sqrt{10}$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $-3 + 4\\sqrt{10}$ and $x$ minus the conjugate of $-3 + 4\\sqrt{10}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate of $-3 + 4\\sqrt{10}$ is $-3 - 4\\sqrt{10}$.",
                "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $a + b\\sqrt{c}$ is $a - b\\sqrt{c}$."
              },
              {
                "step": "The first amount is $x - (-3 + 4\\sqrt{10})$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "The second amount is $x - (-3 - 4\\sqrt{10})$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = \\left(x - (-3 + 4\\sqrt{10})\\right)\\left(x - (-3 - 4\\sqrt{10})\\right)$",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $-\\sqrt{21} - 7$ and $x$ minus the number $-\\sqrt{21} - 7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-(sqrt(21)-7))*(x-(-sqrt(21)-7))",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $-\\sqrt{21} - 7$ and $x$ minus the number $-\\sqrt{21} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $-\\sqrt{21} - 7$ is $\\sqrt{21} - 7$.",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $a + b\\sqrt{c}$ is $a - b\\sqrt{c}$."
                },
                {
                  "step": "The first amount is $x - (\\sqrt{21} - 7)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The second amount is $x - (-\\sqrt{21} - 7)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\left(x - (\\sqrt{21} - 7)\\right)\\left(x - (-\\sqrt{21} - 7)\\right)$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $4\\sqrt{17} + 6$ and $x$ minus its conjugate is a number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-(4*sqrt(17)+6))*(x-(-4*sqrt(17)+6))",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $4\\sqrt{17} + 6$ and $x$ minus its conjugate is a number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $4\\sqrt{17} + 6$ is $-4\\sqrt{17} + 6$.",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $a + b\\sqrt{c}$ is $a - b\\sqrt{c}$."
                },
                {
                  "step": "The first amount is $x - (4\\sqrt{17} + 6)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The second amount is $x - (-4\\sqrt{17} + 6)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\left(x - (4\\sqrt{17} + 6)\\right)\\left(x - (-4\\sqrt{17} + 6)\\right)$",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the word \"is\" stands where the equals sign goes, with $y$ moved to the left by the symmetric property."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $9 + 3\\sqrt{6}$ by $x$ minus the conjugate of $9 + 3\\sqrt{6}$ gives a number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-(9+3*sqrt(6)))*(x-(9-3*sqrt(6)))",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $9 + 3\\sqrt{6}$ by $x$ minus the conjugate of $9 + 3\\sqrt{6}$ gives a number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate of $9 + 3\\sqrt{6}$ is $9 - 3\\sqrt{6}$.",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $a + b\\sqrt{c}$ is $a - b\\sqrt{c}$."
                },
                {
                  "step": "The first amount is $x - (9 + 3\\sqrt{6})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The second amount is $x - (9 - 3\\sqrt{6})$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\left(x - (9 + 3\\sqrt{6})\\right)\\left(x - (9 - 3\\sqrt{6})\\right)$",
                  "reason": "Writing a sentence as an equation: \"multiplying by\" multiplies the two amounts, and the word \"gives\" stands where the equals sign goes, with $y$ moved to the left by the symmetric property."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t202-k7",
      "forms": [
        {
          "example": {
            "problem": "Decide whether every polynomial with rational coefficients that has the root $-2 - 2\\sqrt{7}$ also has the root $-2 + 2\\sqrt{7}$.",
            "lines": [
              {
                "step": "Decide whether every polynomial with rational coefficients that has the root $-2 - 2\\sqrt{7}$ also has the root $-2 + 2\\sqrt{7}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square root $\\sqrt{7}$ is irrational.",
                "reason": "Irrational square roots, from arithmetic: $7$ is a whole number that is not a perfect square, and the square root of such a number is irrational."
              },
              {
                "step": "The number $-2 + 2\\sqrt{7}$ is the conjugate of $-2 - 2\\sqrt{7}$.",
                "reason": "Conjugate of $a + b\\sqrt{c}$: the rational parts are equal and the multiples of the root have opposite signs."
              },
              {
                "step": "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes.",
                "reason": "Radical conjugate roots: the coefficients are rational and the root of line 2 is irrational."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether every polynomial with rational coefficients that has the root $5 - 2\\sqrt[3]{2}$ also has the root $5 + 2\\sqrt[3]{2}$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether every polynomial with rational coefficients that has the root $5 - 2\\sqrt[3]{2}$ also has the root $5 + 2\\sqrt[3]{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $g(x) = \\left(x - 5\\right)^3 + 16$ has rational coefficients.",
                  "reason": "Multiplying out and collecting like terms: the power of the bracket multiplies out to integer coefficients."
                },
                {
                  "step": "$g(5 - 2\\sqrt[3]{2}) = (-2\\sqrt[3]{2})^3 + 16 = 0$",
                  "reason": "Substituting a value: $5 - 2\\sqrt[3]{2}$ goes in place of $x$, and $(-2\\sqrt[3]{2})^3 = -16$."
                },
                {
                  "step": "$g(5 + 2\\sqrt[3]{2}) = (2\\sqrt[3]{2})^3 + 16 = 32$",
                  "reason": "Substituting a value: $5 + 2\\sqrt[3]{2}$ goes in place of $x$, and $(2\\sqrt[3]{2})^3 = 16$."
                },
                {
                  "step": "So $g(x)$ has the first root and not the second, and the answer is No.",
                  "reason": "Disproof by counterexample: one polynomial with rational coefficients that has the first root and not the second shows that the claim is false."
                }
              ]
            },
            {
              "prompt": "Decide whether every polynomial with rational coefficients that has the root $7 + 3\\sqrt{6}$ also has the root $7 - 3\\sqrt{6}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether every polynomial with rational coefficients that has the root $7 + 3\\sqrt{6}$ also has the root $7 - 3\\sqrt{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root $\\sqrt{6}$ is irrational.",
                  "reason": "Irrational square roots, from arithmetic: $6$ is a whole number that is not a perfect square, and the square root of such a number is irrational."
                },
                {
                  "step": "The number $7 - 3\\sqrt{6}$ is the conjugate of $7 + 3\\sqrt{6}$.",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the rational parts are equal and the multiples of the root have opposite signs."
                },
                {
                  "step": "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes.",
                  "reason": "Radical conjugate roots: the coefficients are rational and the root of line 2 is irrational."
                }
              ]
            },
            {
              "prompt": "Decide whether every polynomial with rational coefficients that has the root $-7 + 3\\sqrt{19}$ also has the root $7 + 3\\sqrt{19}$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether every polynomial with rational coefficients that has the root $-7 + 3\\sqrt{19}$ also has the root $7 + 3\\sqrt{19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $g(x) = \\left(x + 7\\right)^2 - 171$ has rational coefficients.",
                  "reason": "Multiplying out and collecting like terms: the power of the bracket multiplies out to integer coefficients."
                },
                {
                  "step": "$g(-7 + 3\\sqrt{19}) = (3\\sqrt{19})^2 - 171 = 0$",
                  "reason": "Substituting a value: $-7 + 3\\sqrt{19}$ goes in place of $x$, and $(3\\sqrt{19})^2 = 171$."
                },
                {
                  "step": "$g(7 + 3\\sqrt{19}) = (14 + 3\\sqrt{19})^2 - 171 = 196 + 84\\sqrt{19}$",
                  "reason": "Substituting a value: $7 + 3\\sqrt{19}$ goes in place of $x$; by the square of a binomial $(14 + 3\\sqrt{19})^2 = 367 + 84\\sqrt{19}$, and $196 + 84\\sqrt{19}$ is not $0$, since $\\sqrt{19}$ is irrational."
                },
                {
                  "step": "So $g(x)$ has the first root and not the second, and the answer is No.",
                  "reason": "Disproof by counterexample: one polynomial with rational coefficients that has the first root and not the second shows that the claim is false."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t202-p1",
      "method": "proof by contradiction",
      "statement": "Let $b$, $c$, $p$, $q$ and $d$ be rational numbers with $\\sqrt{d}$ irrational. If $b + c\\sqrt{d} = p + q\\sqrt{d}$, then $b = p$ and $c = q$.",
      "idea": "This is Equal rational parts and equal irrational parts, proved for every rational $d$ with $\\sqrt{d}$ irrational. Were $c - q$ not $0$, dividing by it would write $\\sqrt{d}$ as a quotient of two rational numbers, which is rational. So $c = q$, and then $b = p$.",
      "lines": [
        {
          "line": "$(b - p) + (c - q)\\sqrt{d} = 0$",
          "reason": "Adding the same number to both sides: $p + q\\sqrt{d}$ is taken from each side, and like terms are collected."
        },
        {
          "line": "Suppose that $c - q \\ne 0$.",
          "reason": "Proof by contradiction: the opposite of $c - q = 0$ is assumed."
        },
        {
          "line": "$(c - q)\\sqrt{d} = -(b - p)$",
          "reason": "Adding the same number to both sides: $b - p$ is taken from each side of line 1."
        },
        {
          "line": "$\\sqrt{d} = -\\dfrac{b - p}{c - q}$",
          "reason": "Dividing both sides by a nonzero number: $c - q \\ne 0$ by line 2."
        },
        {
          "line": "The number $-\\dfrac{b - p}{c - q}$ is rational.",
          "reason": "Division of rational numbers: $b - p$ and $c - q$ are rational, and a quotient of two rational numbers, the bottom one not $0$, is rational."
        },
        {
          "line": "So $\\sqrt{d}$ is rational, which is false.",
          "reason": "The hypothesis: $\\sqrt{d}$ is irrational, and by lines 4 and 5 it is rational."
        },
        {
          "line": "So $c - q = 0$.",
          "reason": "Proof by contradiction: the assumption of line 2 is false."
        },
        {
          "line": "$(b - p) + 0 \\cdot \\sqrt{d} = 0$",
          "reason": "Substituting a value: $0$ goes in place of $c - q$ in line 1."
        },
        {
          "line": "$b - p = 0$",
          "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$, and $(b - p) + 0 = b - p$."
        },
        {
          "line": "So $b = p$ and $c = q$.",
          "reason": "Adding the same number to both sides: $p$ is added to each side of line 9, and $q$ to each side of line 7."
        }
      ]
    },
    {
      "id": "t202-p2",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial whose coefficients are rational numbers, and let $b$, $c$ and $d$ be rational numbers with $c \\ne 0$ and $\\sqrt{d}$ irrational. If $b + c\\sqrt{d}$ is a root of $f(x)$, then $b - c\\sqrt{d}$ is a root of $f(x)$.",
      "idea": "Divide $f(x)$ by the quadratic $g(x)$ whose roots are $b + c\\sqrt{d}$ and $b - c\\sqrt{d}$. Its coefficients are rational, so the remainder $e_1x + e_0$ has rational coefficients; at $b + c\\sqrt{d}$ it is $(e_1b + e_0) + e_1c\\sqrt{d} = 0$, so $e_1 = e_0 = 0$, and $g(x)$ divides $f(x)$.",
      "lines": [
        {
          "line": "Let $g(x) = \\left(x - (b + c\\sqrt{d})\\right)\\left(x - (b - c\\sqrt{d})\\right)$.",
          "reason": "Factored form: $g(x)$ is the polynomial with leading coefficient $1$ and the roots $b + c\\sqrt{d}$ and $b - c\\sqrt{d}$."
        },
        {
          "line": "$g(x) = (x - b)^2 - c^2d$",
          "reason": "Difference of squares: the brackets are $(x - b) - c\\sqrt{d}$ and $(x - b) + c\\sqrt{d}$, and $(c\\sqrt{d})^2 = c^2d$ by the power of a product and the positive square root."
        },
        {
          "line": "So $g(x) = x^2 - 2bx + b^2 - c^2d$, a polynomial whose coefficients are rational.",
          "reason": "Square of a binomial: $(x - b)^2 = x^2 - 2bx + b^2$; the coefficients $-2b$ and $b^2 - c^2d$ are sums and products of rational numbers."
        },
        {
          "line": "Then $f(x) = g(x)h(x) + e_1x + e_0$ for a polynomial $h(x)$ and numbers $e_1$ and $e_0$, all with rational coefficients.",
          "reason": "Division statement: dividing by $g(x)$, of degree $2$, leaves a remainder of degree below $2$; long division takes away rational multiples of $g(x)$, whose leading coefficient is $1$, so every number it gives is rational."
        },
        {
          "line": "$g(b + c\\sqrt{d}) = 0$",
          "reason": "Zero-product property: at $x = b + c\\sqrt{d}$ the first bracket of line 1 is $0$."
        },
        {
          "line": "$f(b + c\\sqrt{d}) = e_1(b + c\\sqrt{d}) + e_0$",
          "reason": "Substituting a value: $b + c\\sqrt{d}$ goes in place of $x$ in line 4, and the product with $g(b + c\\sqrt{d}) = 0$ is $0$ by line 5."
        },
        {
          "line": "$e_1(b + c\\sqrt{d}) + e_0 = 0$",
          "reason": "The hypothesis: $f(b + c\\sqrt{d}) = 0$, so line 6 is $0$."
        },
        {
          "line": "$(e_1b + e_0) + e_1c\\sqrt{d} = 0$",
          "reason": "The distributive law, from arithmetic: $e_1(b + c\\sqrt{d})$ is multiplied out, and like terms are collected."
        },
        {
          "line": "Both $e_1b + e_0 = 0$ and $e_1c = 0$.",
          "reason": "Equal rational parts and equal irrational parts: $e_1b + e_0$ and $e_1c$ are rational, $\\sqrt{d}$ is irrational, and line 8 sets the sum equal to $0 + 0\\sqrt{d}$."
        },
        {
          "line": "$e_1 = 0$",
          "reason": "Zero-product property: $e_1c = 0$ and $c \\ne 0$ by the hypothesis."
        },
        {
          "line": "$e_0 = 0$",
          "reason": "Substituting a value: $0$ goes in place of $e_1$ in $e_1b + e_0 = 0$."
        },
        {
          "line": "$f(x) = g(x)h(x)$",
          "reason": "Substitution: by lines 10 and 11 the remainder in line 4 is $0$."
        },
        {
          "line": "$g(b - c\\sqrt{d}) = 0$",
          "reason": "Zero-product property: at $x = b - c\\sqrt{d}$ the second bracket of line 1 is $0$."
        },
        {
          "line": "So $f(b - c\\sqrt{d}) = 0$, and $b - c\\sqrt{d}$ is a root of $f(x)$.",
          "reason": "Substituting a value: $b - c\\sqrt{d}$ goes in place of $x$ in line 12, and the product with $g(b - c\\sqrt{d}) = 0$ is $0$ by line 13."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t202-s1",
      "method": "proof by contradiction",
      "statement": "Prove that if $n$ is a whole number at least $1$, $a$ is an integer, $b$ is a real number with $b^n = a$, and $b$ is not an integer, then $b$ is irrational. Facts it may use: Rational Root Theorem, substituting a value, zero-product property, irrational number, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $b$ is rational, written as a fraction $\\dfrac{k}{m}$ in lowest terms, with $k$ an integer and $m$ a whole number at least $1$.",
            "reason": "Proof by contradiction: the opposite of the statement is assumed."
          },
          {
            "line": "The number $b$ is a root of the polynomial $x^n - a$.",
            "reason": "Substituting a value: with $b$ in place of $x$, $b^n - a = 0$ by the hypothesis."
          },
          {
            "line": "$a \\ne 0$",
            "reason": "Zero-product property: if $a = 0$, then $b^n = 0$ gives $b = 0$, an integer, against the hypothesis."
          },
          {
            "line": "The denominator $m$ is $1$.",
            "reason": "Rational Root Theorem: $x^n - a$ has integer coefficients, degree $n \\ge 1$, leading coefficient $1$ and constant term $-a \\ne 0$ by line 3, so $m$ divides the leading coefficient $1$, and the one whole number at least $1$ that divides $1$ is $1$."
          },
          {
            "line": "So $b = k$, an integer.",
            "reason": "Substituting a value: $1$ goes in place of $m$ in line 1."
          },
          {
            "line": "So $b$ is irrational.",
            "reason": "Proof by contradiction: line 5 contradicts the hypothesis that $b$ is not an integer, so the assumption of line 1 is false and $b$, a real number, is not rational."
          }
        ]
      }
    },
    {
      "id": "t202-s2",
      "method": "direct proof",
      "statement": "Prove that if $f(x)$ is a polynomial of degree $3$ whose coefficients are rational, and $b + c\\sqrt{d}$ is a root of $f(x)$, where $b$, $c$ and $d$ are rational numbers with $c \\ne 0$ and $\\sqrt{d}$ irrational, then $f(x)$ has a rational root. Facts it may use: Radical conjugate roots, Factored form, difference of squares, square of a binomial, Division statement, substituting a value, Substitution, Zero polynomial, degree of a product is the sum of the degrees, zero-product property, division of rational numbers.",
      "check": {
        "proof": [
          {
            "line": "The number $b - c\\sqrt{d}$ is a root of $f(x)$.",
            "reason": "Radical conjugate roots: the coefficients of $f(x)$ are rational, $c \\ne 0$ and $\\sqrt{d}$ is irrational."
          },
          {
            "line": "The two roots are different: $(b + c\\sqrt{d}) - (b - c\\sqrt{d}) = 2c\\sqrt{d} \\ne 0$.",
            "reason": "Zero-product property: $c \\ne 0$, and $\\sqrt{d} \\ne 0$ since $0$ is rational."
          },
          {
            "line": "Let $g(x) = \\left(x - (b + c\\sqrt{d})\\right)\\left(x - (b - c\\sqrt{d})\\right)$.",
            "reason": "Factored form: $g(x)$ is the polynomial with leading coefficient $1$ and the two roots of line 2."
          },
          {
            "line": "So $g(x) = (x - b)^2 - c^2d$.",
            "reason": "Difference of squares: the brackets are $(x - b) - c\\sqrt{d}$ and $(x - b) + c\\sqrt{d}$, and $(c\\sqrt{d})^2 = c^2d$ by the power of a product and the positive square root."
          },
          {
            "line": "So $g(x) = x^2 - 2bx + b^2 - c^2d$, a polynomial whose coefficients are rational.",
            "reason": "Square of a binomial: $(x - b)^2 = x^2 - 2bx + b^2$; the coefficients $-2b$ and $b^2 - c^2d$ are sums and products of rational numbers."
          },
          {
            "line": "Then $f(x) = g(x)h(x) + e_1x + e_0$ for a polynomial $h(x)$ and numbers $e_1$ and $e_0$, all with rational coefficients.",
            "reason": "Division statement: dividing by $g(x)$, of degree $2$, leaves a remainder of degree below $2$; long division takes away rational multiples of $g(x)$, whose leading coefficient is $1$, so every number it gives is rational."
          },
          {
            "line": "The remainder $e_1x + e_0$ is $0$ at $x = b + c\\sqrt{d}$ and at $x = b - c\\sqrt{d}$.",
            "reason": "Substituting a value: at each of the two roots $f(x) = 0$, by the hypothesis and line 1, and $g(x) = 0$, by line 3, so line 6 leaves $e_1x + e_0 = 0$."
          },
          {
            "line": "So $e_1 = 0$ and $e_0 = 0$.",
            "reason": "Zero polynomial: $e_1x + e_0$ is written with no power of $x$ above $x^1$ and is $0$ at the two different numbers of line 2."
          },
          {
            "line": "$f(x) = g(x)h(x)$",
            "reason": "Substitution: by line 8 the remainder in line 6 is $0$."
          },
          {
            "line": "Then $h(x) = a_1x + a_0$, with rational numbers $a_1 \\ne 0$ and $a_0$.",
            "reason": "Degree of a product is the sum of the degrees: $3 = 2 + 1$, so $h(x)$ has degree $1$, and its coefficients are rational by line 6."
          },
          {
            "line": "The rational number $-\\dfrac{a_0}{a_1}$ is a root of $f(x)$.",
            "reason": "Zero-product property: $h\\left(-\\dfrac{a_0}{a_1}\\right) = 0$, so line 9 is $0$ there; the quotient is rational by the division of rational numbers, as $a_1 \\ne 0$."
          }
        ]
      }
    }
  ]
}
