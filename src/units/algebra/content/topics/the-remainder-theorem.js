export default {
  "number": 195,
  "title": "The Remainder Theorem",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "185-189"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the remainder when $f(x) = 6x^5 + 7x^3 + 4$ is divided by $x - 3$.",
    "form": "Answer as an integer.",
    "answer": "1651",
    "solution": [
      "Find the remainder when $f(x) = 6x^5 + 7x^3 + 4$ is divided by $x - 3$.",
      "The remainder is $f(3)$.",
      "$f(3) = 6 \\cdot 3^5 + 7 \\cdot 3^3 + 4$",
      "$f(3) = 1458 + 189 + 4$",
      "$f(3) = 1651$",
      "The remainder is $1651$."
    ]
  },
  "ideas": [
    {
      "name": "Remainder Theorem",
      "concrete": "For $f(x) = 5x^3 - 3x^2 + 4x - 6$, the value $f(2) = 5 \\cdot 2^3 - 3 \\cdot 2^2 + 4 \\cdot 2 - 6 = 30$. Dividing $f(x)$ by $x - 2$ gives $5x^3 - 3x^2 + 4x - 6 = (x - 2)(5x^2 + 7x + 18) + 30$, so the remainder is $30$ as well.",
      "general": "For a polynomial $f(x)$ and a number $a$, the remainder when $f(x)$ is divided by $x - a$ is the number $f(a)$. This is the **Remainder Theorem**."
    }
  ],
  "kinds": [
    {
      "id": "t195-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the remainder when $f(x) = -3x^5 - 7x - 3$ is divided by $x - 2$.",
            "lines": [
              {
                "step": "Find the remainder when $f(x) = -3x^5 - 7x - 3$ is divided by $x - 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The remainder is $f(2)$.",
                "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 2$."
              },
              {
                "step": "$f(2) = -3 \\cdot 2^5 - 7 \\cdot 2 - 3$",
                "reason": "Function notation: $2$ goes where $x$ stands."
              },
              {
                "step": "$f(2) = -96 - 14 - 3$",
                "reason": "Order of operations: each power is worked out before its product."
              },
              {
                "step": "$f(2) = -113$",
                "reason": "Order of operations: the sums and differences are worked out from left to right."
              },
              {
                "step": "The remainder is $-113$.",
                "reason": "Answering the question asked: line 2 names the remainder $f(2)$, and the line before gives its value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $f(x) = -2x^3 - 8x^2 - 9$ is divided by $x - 4$.",
              "form": "Answer as an integer.",
              "answer": "-265",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -2x^3 - 8x^2 - 9$ is divided by $x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The remainder is $f(4)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 4$."
                },
                {
                  "step": "$f(4) = -2 \\cdot 4^3 - 8 \\cdot 4^2 - 9$",
                  "reason": "Function notation: $4$ goes where $x$ stands."
                },
                {
                  "step": "$f(4) = -128 - 128 - 9$",
                  "reason": "Order of operations: each power is worked out before its product."
                },
                {
                  "step": "$f(4) = -265$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "The remainder is $-265$.",
                  "reason": "Answering the question asked: line 2 names the remainder $f(4)$, and the line before gives its value."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = 6x^3 + 3x^2 - 6$ is divided by $x - 6$.",
              "form": "Answer as an integer.",
              "answer": "1398",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 6x^3 + 3x^2 - 6$ is divided by $x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The remainder is $f(6)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 6$."
                },
                {
                  "step": "$f(6) = 6 \\cdot 6^3 + 3 \\cdot 6^2 - 6$",
                  "reason": "Function notation: $6$ goes where $x$ stands."
                },
                {
                  "step": "$f(6) = 1296 + 108 - 6$",
                  "reason": "Order of operations: each power is worked out before its product."
                },
                {
                  "step": "$f(6) = 1398$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "The remainder is $1398$.",
                  "reason": "Answering the question asked: line 2 names the remainder $f(6)$, and the line before gives its value."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = 6x^4 + 6x^2 + 8$ is divided by $x - 1$.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 6x^4 + 6x^2 + 8$ is divided by $x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The remainder is $f(1)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 1$."
                },
                {
                  "step": "$f(1) = 6 \\cdot 1^4 + 6 \\cdot 1^2 + 8$",
                  "reason": "Function notation: $1$ goes where $x$ stands."
                },
                {
                  "step": "$f(1) = 6 + 6 + 8$",
                  "reason": "Order of operations: each power is worked out before its product."
                },
                {
                  "step": "$f(1) = 20$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "The remainder is $20$.",
                  "reason": "Answering the question asked: line 2 names the remainder $f(1)$, and the line before gives its value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the remainder when $f(x) = 3x^4 - 5x + 4$ is divided by $x + 4$.",
            "lines": [
              {
                "step": "Find the remainder when $f(x) = 3x^4 - 5x + 4$ is divided by $x + 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + 4 = x - (-4)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "The remainder is $f(-4)$.",
                "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -4$."
              },
              {
                "step": "$f(-4) = 3(-4)^4 - 5(-4) + 4$",
                "reason": "Function notation: $-4$ goes, in brackets, where $x$ stands."
              },
              {
                "step": "$f(-4) = 768 + 20 + 4$",
                "reason": "Sign of a power of a negative number: an even power of a negative number is positive and an odd power is negative; each power is worked out before its product."
              },
              {
                "step": "$f(-4) = 792$",
                "reason": "Order of operations: the sums and differences are worked out from left to right."
              },
              {
                "step": "The remainder is $792$.",
                "reason": "Answering the question asked: line 3 names the remainder $f(-4)$, and the line before gives its value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $f(x) = -4x^4 + 4x - 9$ is divided by $x + 1$.",
              "form": "Answer as an integer.",
              "answer": "-17",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -4x^4 + 4x - 9$ is divided by $x + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 1 = x - (-1)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "The remainder is $f(-1)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -1$."
                },
                {
                  "step": "$f(-1) = -4(-1)^4 + 4(-1) - 9$",
                  "reason": "Function notation: $-1$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-1) = -4 - 4 - 9$",
                  "reason": "Sign of a power of a negative number: an even power of a negative number is positive and an odd power is negative; each power is worked out before its product."
                },
                {
                  "step": "$f(-1) = -17$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "The remainder is $-17$.",
                  "reason": "Answering the question asked: line 3 names the remainder $f(-1)$, and the line before gives its value."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = 3x^3 - 3x^2 + 6x + 2$ is divided by $x + 3$.",
              "form": "Answer as an integer.",
              "answer": "-124",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 3x^3 - 3x^2 + 6x + 2$ is divided by $x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 3 = x - (-3)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "The remainder is $f(-3)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -3$."
                },
                {
                  "step": "$f(-3) = 3(-3)^3 - 3(-3)^2 + 6(-3) + 2$",
                  "reason": "Function notation: $-3$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-3) = -81 - 27 - 18 + 2$",
                  "reason": "Sign of a power of a negative number: an even power of a negative number is positive and an odd power is negative; each power is worked out before its product."
                },
                {
                  "step": "$f(-3) = -124$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "The remainder is $-124$.",
                  "reason": "Answering the question asked: line 3 names the remainder $f(-3)$, and the line before gives its value."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = 3x^3 + 6x^2 - 4$ is divided by $x + 5$.",
              "form": "Answer as an integer.",
              "answer": "-229",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 3x^3 + 6x^2 - 4$ is divided by $x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 5 = x - (-5)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "The remainder is $f(-5)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -5$."
                },
                {
                  "step": "$f(-5) = 3(-5)^3 + 6(-5)^2 - 4$",
                  "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-5) = -375 + 150 - 4$",
                  "reason": "Sign of a power of a negative number: an even power of a negative number is positive and an odd power is negative; each power is worked out before its product."
                },
                {
                  "step": "$f(-5) = -229$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "The remainder is $-229$.",
                  "reason": "Answering the question asked: line 3 names the remainder $f(-5)$, and the line before gives its value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t195-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the remainder when $f(x) = -7x^3 - 7x^2 - 9x + 4$ is divided by $2x + 3$.",
            "lines": [
              {
                "step": "Find the remainder when $f(x) = -7x^3 - 7x^2 - 9x + 4$ is divided by $2x + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor $2x + 3$ has degree $1$, so the remainder is a number $r$.",
                "reason": "Degree of the remainder: the remainder is $0$ or has degree below $1$, the degree of the divisor, so it has no term in $x$."
              },
              {
                "step": "$f(x) = (2x + 3)q(x) + r$",
                "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
              },
              {
                "step": "The divisor is $0$ at $x = -\\dfrac{3}{2}$.",
                "reason": "Isolating the variable: $2x + 3 = 0$ is solved for $x$, which gives $x = -\\dfrac{3}{2}$."
              },
              {
                "step": "$f\\left(-\\dfrac{3}{2}\\right) = 0 \\cdot q\\left(-\\dfrac{3}{2}\\right) + r$",
                "reason": "Substituting a value: $-\\dfrac{3}{2}$ goes in place of $x$ in line 3, and by line 4 the divisor is $0$ there."
              },
              {
                "step": "$f\\left(-\\dfrac{3}{2}\\right) = 0 + r$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f\\left(-\\dfrac{3}{2}\\right) = r$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$f\\left(-\\dfrac{3}{2}\\right) = -7\\left(-\\dfrac{3}{2}\\right)^3 - 7\\left(-\\dfrac{3}{2}\\right)^2 - 9\\left(-\\dfrac{3}{2}\\right) + 4$",
                "reason": "Function notation: $-\\dfrac{3}{2}$ goes, in brackets, where $x$ stands."
              },
              {
                "step": "$f\\left(-\\dfrac{3}{2}\\right) = \\dfrac{189}{8} - \\dfrac{63}{4} + \\dfrac{27}{2} + 4$",
                "reason": "Order of operations: each power is worked out before its product, and the signs of products give each term its sign."
              },
              {
                "step": "$f\\left(-\\dfrac{3}{2}\\right) = \\dfrac{203}{8}$",
                "reason": "The general addition formula, from arithmetic: over the common denominator $8$ the tops are $189 - 126 + 108 + 32$, which makes $203$."
              },
              {
                "step": "The remainder is $\\dfrac{203}{8}$.",
                "reason": "Transitive property: lines 7 and 10 give $r$ and the value the same number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $f(x) = -2x^3 - 4x - 4$ is divided by $3x + 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-20/27",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -2x^3 - 4x - 4$ is divided by $3x + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor $3x + 2$ has degree $1$, so the remainder is a number $r$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $1$, the degree of the divisor, so it has no term in $x$."
                },
                {
                  "step": "$f(x) = (3x + 2)q(x) + r$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "The divisor is $0$ at $x = -\\dfrac{2}{3}$.",
                  "reason": "Isolating the variable: $3x + 2 = 0$ is solved for $x$, which gives $x = -\\dfrac{2}{3}$."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = 0 \\cdot q\\left(-\\dfrac{2}{3}\\right) + r$",
                  "reason": "Substituting a value: $-\\dfrac{2}{3}$ goes in place of $x$ in line 3, and by line 4 the divisor is $0$ there."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = 0 + r$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = r$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = -2\\left(-\\dfrac{2}{3}\\right)^3 - 4\\left(-\\dfrac{2}{3}\\right) - 4$",
                  "reason": "Function notation: $-\\dfrac{2}{3}$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = \\dfrac{16}{27} + \\dfrac{8}{3} - 4$",
                  "reason": "Order of operations: each power is worked out before its product, and the signs of products give each term its sign."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = -\\dfrac{20}{27}$",
                  "reason": "The general addition formula, from arithmetic: over the common denominator $27$ the tops are $16 + 72 - 108$, which makes $-20$."
                },
                {
                  "step": "The remainder is $-\\dfrac{20}{27}$.",
                  "reason": "Transitive property: lines 7 and 10 give $r$ and the value the same number."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = -7x^3 + 8x - 7$ is divided by $3x + 5$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "326/27",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -7x^3 + 8x - 7$ is divided by $3x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor $3x + 5$ has degree $1$, so the remainder is a number $r$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $1$, the degree of the divisor, so it has no term in $x$."
                },
                {
                  "step": "$f(x) = (3x + 5)q(x) + r$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "The divisor is $0$ at $x = -\\dfrac{5}{3}$.",
                  "reason": "Isolating the variable: $3x + 5 = 0$ is solved for $x$, which gives $x = -\\dfrac{5}{3}$."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = 0 \\cdot q\\left(-\\dfrac{5}{3}\\right) + r$",
                  "reason": "Substituting a value: $-\\dfrac{5}{3}$ goes in place of $x$ in line 3, and by line 4 the divisor is $0$ there."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = 0 + r$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = r$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = -7\\left(-\\dfrac{5}{3}\\right)^3 + 8\\left(-\\dfrac{5}{3}\\right) - 7$",
                  "reason": "Function notation: $-\\dfrac{5}{3}$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = \\dfrac{875}{27} - \\dfrac{40}{3} - 7$",
                  "reason": "Order of operations: each power is worked out before its product, and the signs of products give each term its sign."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = \\dfrac{326}{27}$",
                  "reason": "The general addition formula, from arithmetic: over the common denominator $27$ the tops are $875 - 360 - 189$, which makes $326$."
                },
                {
                  "step": "The remainder is $\\dfrac{326}{27}$.",
                  "reason": "Transitive property: lines 7 and 10 give $r$ and the value the same number."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = 4x^3 + 9x^2 + 2x + 7$ is divided by $1 - 3x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "238/27",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 4x^3 + 9x^2 + 2x + 7$ is divided by $1 - 3x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor $1 - 3x$ has degree $1$, so the remainder is a number $r$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $1$, the degree of the divisor, so it has no term in $x$."
                },
                {
                  "step": "$f(x) = (1 - 3x)q(x) + r$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "The divisor is $0$ at $x = \\dfrac{1}{3}$.",
                  "reason": "Isolating the variable: $1 - 3x = 0$ is solved for $x$, which gives $x = \\dfrac{1}{3}$."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{3}\\right) = 0 \\cdot q\\left(\\dfrac{1}{3}\\right) + r$",
                  "reason": "Substituting a value: $\\dfrac{1}{3}$ goes in place of $x$ in line 3, and by line 4 the divisor is $0$ there."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{3}\\right) = 0 + r$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{3}\\right) = r$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{3}\\right) = 4\\left(\\dfrac{1}{3}\\right)^3 + 9\\left(\\dfrac{1}{3}\\right)^2 + 2\\left(\\dfrac{1}{3}\\right) + 7$",
                  "reason": "Function notation: $\\dfrac{1}{3}$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{3}\\right) = \\dfrac{4}{27} + 1 + \\dfrac{2}{3} + 7$",
                  "reason": "Order of operations: each power is worked out before its product, and the signs of products give each term its sign."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{3}\\right) = \\dfrac{238}{27}$",
                  "reason": "The general addition formula, from arithmetic: over the common denominator $27$ the tops are $4 + 27 + 18 + 189$, which makes $238$."
                },
                {
                  "step": "The remainder is $\\dfrac{238}{27}$.",
                  "reason": "Transitive property: lines 7 and 10 give $r$ and the value the same number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t195-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the remainder $r$ when $f(x) = -2x^3 + 3x^2 + 8x + 9$ is divided by $2x + 5$, with $q(x)$ the quotient, and write that line right.",
            "given": [
              "$f(x) = (2x + 5)q(x) + r$",
              "$2x + 5 = 2\\left(x + \\dfrac{5}{2}\\right)$",
              "$f\\left(-\\dfrac{5}{2}\\right) = 2\\left(-\\dfrac{5}{2} + \\dfrac{5}{2}\\right)q\\left(-\\dfrac{5}{2}\\right) + r = r$",
              "$f\\left(-\\dfrac{5}{2}\\right) = -2\\left(-\\dfrac{5}{2}\\right)^3 + 3\\left(-\\dfrac{5}{2}\\right)^2 + 8\\left(-\\dfrac{5}{2}\\right) + 9 = \\dfrac{125}{4} - \\dfrac{75}{4} - 20 + 9$",
              "$\\dfrac{125}{4} - \\dfrac{75}{4} - 20 + 9 = \\dfrac{125}{4} - \\dfrac{75}{4} - \\dfrac{80}{4} + \\dfrac{36}{4} = \\dfrac{6}{4}$",
              "$r = \\dfrac{6}{4} = \\dfrac{3}{2}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the remainder $r$ when $f(x) = -2x^3 + 3x^2 + 8x + 9$ is divided by $2x + 5$, with $q(x)$ the quotient, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1, 2 and 3 are right.",
                "reason": "Division statement: line 1 writes the dividend as the divisor times the quotient, plus the remainder, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 4 gives the term $3\\left(-\\dfrac{5}{2}\\right)^2$ the value $-\\dfrac{75}{4}$, but its value is $\\dfrac{75}{4}$.",
                "reason": "A sign lost: the signs of products, with the sign of a power of a negative number, make the term positive."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Transitive property: each later line takes its first side from the line before it, and so carries the fault of line 4."
              },
              {
                "step": "Line 4 written right is $f\\left(-\\dfrac{5}{2}\\right) = -2\\left(-\\dfrac{5}{2}\\right)^3 + 3\\left(-\\dfrac{5}{2}\\right)^2 + 8\\left(-\\dfrac{5}{2}\\right) + 9 = \\dfrac{125}{4} + \\dfrac{75}{4} - 20 + 9$.",
                "reason": "Signs of products: each term keeps the sign the signs of its factors give it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the remainder $r$ when $f(x) = -2x^3 + 2x^2 - 9x - 7$ is divided by $3x + 4$, with $q(x)$ the quotient, and write that line right.",
              "given": [
                "$f(x) = (3x + 4)q(x) + r$",
                "$3x + 4 = 3\\left(x - \\dfrac{4}{3}\\right)$",
                "$f\\left(\\dfrac{4}{3}\\right) = 3\\left(\\dfrac{4}{3} - \\dfrac{4}{3}\\right)q\\left(\\dfrac{4}{3}\\right) + r = r$",
                "$f\\left(\\dfrac{4}{3}\\right) = -2\\left(\\dfrac{4}{3}\\right)^3 + 2\\left(\\dfrac{4}{3}\\right)^2 - 9\\left(\\dfrac{4}{3}\\right) - 7 = -\\dfrac{128}{27} + \\dfrac{32}{9} - 12 - 7$",
                "$-\\dfrac{128}{27} + \\dfrac{32}{9} - 12 - 7 = -\\dfrac{128}{27} + \\dfrac{96}{27} - \\dfrac{324}{27} - \\dfrac{189}{27} = -\\dfrac{545}{27}$",
                "$r = -\\dfrac{545}{27}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 3*x+4 = 3*(x+(4/3))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the remainder $r$ when $f(x) = -2x^3 + 2x^2 - 9x - 7$ is divided by $3x + 4$, with $q(x)$ the quotient, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Division statement: line 1 writes the dividend as the divisor times the quotient, plus the remainder, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 takes $3$ out of $3x + 4$ and writes $x - \\dfrac{4}{3}$ in the bracket, so the sign of $\\dfrac{4}{3}$ is lost.",
                  "reason": "A sign lost: $3\\left(x - \\dfrac{4}{3}\\right)$ multiplies out to $3x - 4$, not $3x + 4$; taking out a common factor keeps each sign."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its first side from the line before it, and so carries the fault of line 2."
                },
                {
                  "step": "Line 2 written right is $3x + 4 = 3\\left(x + \\dfrac{4}{3}\\right)$.",
                  "reason": "Taking out a common factor: $3\\left(x + \\dfrac{4}{3}\\right)$ multiplies out to $3x + 4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the remainder $r$ when $f(x) = 2x^3 + 3x + 8$ is divided by $2x + 7$, with $q(x)$ the quotient, and write that line right.",
              "given": [
                "$f(x) = (2x + 7)q(x) + r$",
                "$2x + 7 = 2\\left(x + \\dfrac{7}{2}\\right)$",
                "$f\\left(-\\dfrac{7}{2}\\right) = 2\\left(-\\dfrac{7}{2} + \\dfrac{7}{2}\\right)q\\left(-\\dfrac{7}{2}\\right) + r = r$",
                "$f\\left(-\\dfrac{7}{2}\\right) = 2\\left(-\\dfrac{7}{2}\\right)^3 + 3\\left(-\\dfrac{7}{2}\\right) + 8 = -\\dfrac{343}{4} - \\dfrac{21}{2} + 8$",
                "$-\\dfrac{343}{4} - \\dfrac{21}{2} + 8 = \\dfrac{343}{4} - \\dfrac{42}{4} + \\dfrac{32}{4} = \\dfrac{333}{4}$",
                "$r = \\dfrac{333}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -(343/4)-(21/2)+8 = -(343/4)-(42/4)+(32/4) = -(353/4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the remainder $r$ when $f(x) = 2x^3 + 3x + 8$ is divided by $2x + 7$, with $q(x)$ the quotient, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Division statement: line 1 writes the dividend as the divisor times the quotient, plus the remainder, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 5 writes $-\\dfrac{343}{4}$ over the common denominator $4$ with its sign changed: it is $-\\dfrac{343}{4}$.",
                  "reason": "A sign lost: the cancellation law, from arithmetic, multiplies the top and the bottom by the same number, which keeps the sign."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its first side from the line before it, and so carries the fault of line 5."
                },
                {
                  "step": "Line 5 written right is $-\\dfrac{343}{4} - \\dfrac{21}{2} + 8 = -\\dfrac{343}{4} - \\dfrac{42}{4} + \\dfrac{32}{4} = -\\dfrac{353}{4}$.",
                  "reason": "The cancellation law, from arithmetic: the top and the bottom of each fraction are multiplied by the same number, and its sign stays."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the remainder $r$ when $f(x) = -3x^3 - 2x^2 + 8x + 2$ is divided by $2x - 1$, with $q(x)$ the quotient, and write that line right.",
              "given": [
                "$f(x) = (2x - 1)q(x) + r$",
                "$2x - 1 = 2\\left(x + \\dfrac{1}{2}\\right)$",
                "$f\\left(-\\dfrac{1}{2}\\right) = 2\\left(-\\dfrac{1}{2} + \\dfrac{1}{2}\\right)q\\left(-\\dfrac{1}{2}\\right) + r = r$",
                "$f\\left(-\\dfrac{1}{2}\\right) = -3\\left(-\\dfrac{1}{2}\\right)^3 - 2\\left(-\\dfrac{1}{2}\\right)^2 + 8\\left(-\\dfrac{1}{2}\\right) + 2 = \\dfrac{3}{8} - \\dfrac{1}{2} - 4 + 2$",
                "$\\dfrac{3}{8} - \\dfrac{1}{2} - 4 + 2 = \\dfrac{3}{8} - \\dfrac{4}{8} - \\dfrac{32}{8} + \\dfrac{16}{8} = -\\dfrac{17}{8}$",
                "$r = -\\dfrac{17}{8}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*x-1 = 2*(x-(1/2))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the remainder $r$ when $f(x) = -3x^3 - 2x^2 + 8x + 2$ is divided by $2x - 1$, with $q(x)$ the quotient, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Division statement: line 1 writes the dividend as the divisor times the quotient, plus the remainder, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 takes $2$ out of $2x - 1$ and writes $x + \\dfrac{1}{2}$ in the bracket, so the sign of $\\dfrac{1}{2}$ is lost.",
                  "reason": "A sign lost: $2\\left(x + \\dfrac{1}{2}\\right)$ multiplies out to $2x + 1$, not $2x - 1$; taking out a common factor keeps each sign."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its first side from the line before it, and so carries the fault of line 2."
                },
                {
                  "step": "Line 2 written right is $2x - 1 = 2\\left(x - \\dfrac{1}{2}\\right)$.",
                  "reason": "Taking out a common factor: $2\\left(x - \\dfrac{1}{2}\\right)$ multiplies out to $2x - 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t195-k4",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $f(3)$ by synthetic division, where $f(x) = 7x^4 - 30x^3 + 23x^2 + 9x + 11$.",
            "lines": [
              {
                "step": "Evaluate $f(3)$ by synthetic division, where $f(x) = 7x^4 - 30x^3 + 23x^2 + 9x + 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number on the left is $3$, and the top row is $7$, $-30$, $23$, $9$, $11$.",
                "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} 3 & 7 & -30 & 23 & 9 & 11 \\\\ & & 21 & -27 & -12 & -9 \\\\ \\hline & 7 & -9 & -4 & -3 & 2 \\end{array}$",
                "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "The last bottom number, $2$, is the remainder.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
              },
              {
                "step": "$f(3) = 2$",
                "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $f(5)$ by synthetic division, where $f(x) = 6x^5 - 32x^4 + 16x^3 - 28x^2 - 5x - 56$.",
              "form": "Answer as an integer.",
              "answer": "-31",
              "lines": [
                {
                  "step": "Evaluate $f(5)$ by synthetic division, where $f(x) = 6x^5 - 32x^4 + 16x^3 - 28x^2 - 5x - 56$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number on the left is $5$, and the top row is $6$, $-32$, $16$, $-28$, $-5$, $-56$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrrrr} 5 & 6 & -32 & 16 & -28 & -5 & -56 \\\\ & & 30 & -10 & 30 & 10 & 25 \\\\ \\hline & 6 & -2 & 6 & 2 & 5 & -31 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The last bottom number, $-31$, is the remainder.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
                },
                {
                  "step": "$f(5) = -31$",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 5$."
                }
              ]
            },
            {
              "prompt": "Evaluate $f(-3)$ by synthetic division, where $f(x) = 7x^4 + 17x^3 - 14x^2 + 48$.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "Evaluate $f(-3)$ by synthetic division, where $f(x) = 7x^4 + 17x^3 - 14x^2 + 48$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number on the left is $-3$, and the top row is $7$, $17$, $-14$, $0$, $48$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} -3 & 7 & 17 & -14 & 0 & 48 \\\\ & & -21 & 12 & 6 & -18 \\\\ \\hline & 7 & -4 & -2 & 6 & 30 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The last bottom number, $30$, is the remainder.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
                },
                {
                  "step": "$f(-3) = 30$",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -3$."
                }
              ]
            },
            {
              "prompt": "Evaluate $f(-8)$ by synthetic division, where $f(x) = 3x^5 + 19x^4 - 35x^3 + 45x^2 + 38x - 32$.",
              "form": "Answer as an integer.",
              "answer": "-16",
              "lines": [
                {
                  "step": "Evaluate $f(-8)$ by synthetic division, where $f(x) = 3x^5 + 19x^4 - 35x^3 + 45x^2 + 38x - 32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number on the left is $-8$, and the top row is $3$, $19$, $-35$, $45$, $38$, $-32$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrrrr} -8 & 3 & 19 & -35 & 45 & 38 & -32 \\\\ & & -24 & 40 & -40 & -40 & 16 \\\\ \\hline & 3 & -5 & 5 & 5 & -2 & -16 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The last bottom number, $-16$, is the remainder.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
                },
                {
                  "step": "$f(-8) = -16$",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t195-k5",
      "forms": [
        {
          "example": {
            "problem": "Find a number $b$ for which dividing $f(x) = bx^4 + 6x^3 + 7x^2 - 6x - 6$ by $x - 2$ leaves the remainder $10$.",
            "lines": [
              {
                "step": "Find a number $b$ for which dividing $f(x) = bx^4 + 6x^3 + 7x^2 - 6x - 6$ by $x - 2$ leaves the remainder $10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(2) = 10$",
                "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 2$ is $f(2)$, and the sentence gives it as $10$."
              },
              {
                "step": "$b \\cdot 2^4 + 6 \\cdot 2^3 + 7 \\cdot 2^2 - 6 \\cdot 2 - 6 = 10$",
                "reason": "Function notation: $2$ goes where $x$ stands."
              },
              {
                "step": "$16b + 58 = 10$",
                "reason": "Collecting like terms: each power is worked out before its product and the number terms are added."
              },
              {
                "step": "$16b = -48$",
                "reason": "Adding the same number to both sides: $-58$ is added to both sides."
              },
              {
                "step": "$b = -3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $b$ for which dividing $f(x) = 2x^4 + bx^3 + 8x - 9$ by $x - 3$ leaves the remainder $-6$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -61/9",
              "lines": [
                {
                  "step": "Find a number $b$ for which dividing $f(x) = 2x^4 + bx^3 + 8x - 9$ by $x - 3$ leaves the remainder $-6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(3) = -6$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 3$ is $f(3)$, and the sentence gives it as $-6$."
                },
                {
                  "step": "$2 \\cdot 3^4 + b \\cdot 3^3 + 8 \\cdot 3 - 9 = -6$",
                  "reason": "Function notation: $3$ goes where $x$ stands."
                },
                {
                  "step": "$27b + 177 = -6$",
                  "reason": "Collecting like terms: each power is worked out before its product and the number terms are added."
                },
                {
                  "step": "$27b = -183$",
                  "reason": "Adding the same number to both sides: $-177$ is added to both sides."
                },
                {
                  "step": "$b = -\\dfrac{61}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $27$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which dividing $f(x) = 4x^3 - 3x^2 + bx + 6$ by $x - 5$ leaves the remainder $19$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -412/5",
              "lines": [
                {
                  "step": "Find a number $b$ for which dividing $f(x) = 4x^3 - 3x^2 + bx + 6$ by $x - 5$ leaves the remainder $19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(5) = 19$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 5$ is $f(5)$, and the sentence gives it as $19$."
                },
                {
                  "step": "$4 \\cdot 5^3 - 3 \\cdot 5^2 + b \\cdot 5 + 6 = 19$",
                  "reason": "Function notation: $5$ goes where $x$ stands."
                },
                {
                  "step": "$5b + 431 = 19$",
                  "reason": "Collecting like terms: each power is worked out before its product and the number terms are added."
                },
                {
                  "step": "$5b = -412$",
                  "reason": "Adding the same number to both sides: $-431$ is added to both sides."
                },
                {
                  "step": "$b = -\\dfrac{412}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which dividing $f(x) = -4x^3 + bx^2 - 3x + 5$ by $x - 4$ leaves the remainder $-5$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 129/8",
              "lines": [
                {
                  "step": "Find a number $b$ for which dividing $f(x) = -4x^3 + bx^2 - 3x + 5$ by $x - 4$ leaves the remainder $-5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4) = -5$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 4$ is $f(4)$, and the sentence gives it as $-5$."
                },
                {
                  "step": "$-4 \\cdot 4^3 + b \\cdot 4^2 - 3 \\cdot 4 + 5 = -5$",
                  "reason": "Function notation: $4$ goes where $x$ stands."
                },
                {
                  "step": "$16b - 263 = -5$",
                  "reason": "Collecting like terms: each power is worked out before its product and the number terms are added."
                },
                {
                  "step": "$16b = 258$",
                  "reason": "Adding the same number to both sides: $263$ is added to both sides."
                },
                {
                  "step": "$b = \\dfrac{129}{8}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $b$ for which dividing $f(x) = -7x^4 - 2x^3 + bx^2 + 3x + 5$ by $x + 2$ leaves the remainder $9$.",
            "lines": [
              {
                "step": "Find a number $b$ for which dividing $f(x) = -7x^4 - 2x^3 + bx^2 + 3x + 5$ by $x + 2$ leaves the remainder $9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + 2 = x - (-2)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$f(-2) = 9$",
                "reason": "Remainder Theorem: by line 2 the remainder when $f(x)$ is divided by $x + 2$ is $f(-2)$, and the sentence gives it as $9$."
              },
              {
                "step": "$-7(-2)^4 - 2(-2)^3 + b(-2)^2 + 3(-2) + 5 = 9$",
                "reason": "Function notation: $-2$ goes, in brackets, where $x$ stands."
              },
              {
                "step": "$4b - 97 = 9$",
                "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the number terms are added."
              },
              {
                "step": "$4b = 106$",
                "reason": "Adding the same number to both sides: $97$ is added to both sides."
              },
              {
                "step": "$b = \\dfrac{53}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $b$ for which dividing $f(x) = 5x^3 + bx^2 + 5x - 8$ by $x + 4$ leaves the remainder $32$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 95/4",
              "lines": [
                {
                  "step": "Find a number $b$ for which dividing $f(x) = 5x^3 + bx^2 + 5x - 8$ by $x + 4$ leaves the remainder $32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 4 = x - (-4)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$f(-4) = 32$",
                  "reason": "Remainder Theorem: by line 2 the remainder when $f(x)$ is divided by $x + 4$ is $f(-4)$, and the sentence gives it as $32$."
                },
                {
                  "step": "$5(-4)^3 + b(-4)^2 + 5(-4) - 8 = 32$",
                  "reason": "Function notation: $-4$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$16b - 348 = 32$",
                  "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the number terms are added."
                },
                {
                  "step": "$16b = 380$",
                  "reason": "Adding the same number to both sides: $348$ is added to both sides."
                },
                {
                  "step": "$b = \\dfrac{95}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which dividing $f(x) = 2x^4 + 2x^3 - 4x^2 + bx + 5$ by $x + 3$ leaves the remainder $38$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 13",
              "lines": [
                {
                  "step": "Find a number $b$ for which dividing $f(x) = 2x^4 + 2x^3 - 4x^2 + bx + 5$ by $x + 3$ leaves the remainder $38$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 3 = x - (-3)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$f(-3) = 38$",
                  "reason": "Remainder Theorem: by line 2 the remainder when $f(x)$ is divided by $x + 3$ is $f(-3)$, and the sentence gives it as $38$."
                },
                {
                  "step": "$2(-3)^4 + 2(-3)^3 - 4(-3)^2 + b(-3) + 5 = 38$",
                  "reason": "Function notation: $-3$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$-3b + 77 = 38$",
                  "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the number terms are added."
                },
                {
                  "step": "$-3b = -39$",
                  "reason": "Adding the same number to both sides: $-77$ is added to both sides."
                },
                {
                  "step": "$b = 13$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which dividing $f(x) = -2x^3 - 8x^2 + bx - 4$ by $x + 7$ leaves the remainder $24$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 38",
              "lines": [
                {
                  "step": "Find a number $b$ for which dividing $f(x) = -2x^3 - 8x^2 + bx - 4$ by $x + 7$ leaves the remainder $24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 7 = x - (-7)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$f(-7) = 24$",
                  "reason": "Remainder Theorem: by line 2 the remainder when $f(x)$ is divided by $x + 7$ is $f(-7)$, and the sentence gives it as $24$."
                },
                {
                  "step": "$-2(-7)^3 - 8(-7)^2 + b(-7) - 4 = 24$",
                  "reason": "Function notation: $-7$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$-7b + 290 = 24$",
                  "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the number terms are added."
                },
                {
                  "step": "$-7b = -266$",
                  "reason": "Adding the same number to both sides: $-290$ is added to both sides."
                },
                {
                  "step": "$b = 38$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t195-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 3)(x + 4)$, given that dividing $f(x)$ by $x - 3$ leaves the remainder $-24$ and dividing it by $x + 4$ leaves the remainder $4$.",
            "lines": [
              {
                "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 3)(x + 4)$, given that dividing $f(x)$ by $x - 3$ leaves the remainder $-24$ and dividing it by $x + 4$ leaves the remainder $4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor, the sum of the degrees of its two factors."
              },
              {
                "step": "$f(x) = (x - 3)(x + 4)q(x) + ax + b$",
                "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
              },
              {
                "step": "$f(3) = 0 \\cdot q(3) + 3a + b$",
                "reason": "Substituting a value: $3$ goes in place of $x$ in line 3, and the factor $3 - 3$ is $0$."
              },
              {
                "step": "$f(3) = 0 + 3a + b$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(3) = 3a + b$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$3a + b = -24$",
                "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 3$ is $f(3)$, which the problem gives as $-24$."
              },
              {
                "step": "$f(-4) = 0 \\cdot q(-4) - 4a + b$",
                "reason": "Substituting a value: $-4$ goes in place of $x$ in line 3, and the factor $-4 + 4$ is $0$."
              },
              {
                "step": "$f(-4) = 0 - 4a + b$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(-4) = -4a + b$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$x + 4 = x - (-4)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$-4a + b = 4$",
                "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 4$ is $f(-4)$, which the problem gives as $4$."
              },
              {
                "step": "$7a = -28$",
                "reason": "Elimination: taking line 12 from line 7 leaves no term in $b$."
              },
              {
                "step": "$a = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
              },
              {
                "step": "$-12 + b = -24$",
                "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 7, and $3 \\cdot (-4) = -12$."
              },
              {
                "step": "$b = -12$",
                "reason": "Adding the same number to both sides: $12$ is added to both sides."
              },
              {
                "step": "The remainder is $-4x - 12$.",
                "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 8)(x + 5)$, given that dividing $f(x)$ by $x - 8$ leaves the remainder $-23$ and dividing it by $x + 5$ leaves the remainder $3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x-7",
              "lines": [
                {
                  "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 8)(x + 5)$, given that dividing $f(x)$ by $x - 8$ leaves the remainder $-23$ and dividing it by $x + 5$ leaves the remainder $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor, the sum of the degrees of its two factors."
                },
                {
                  "step": "$f(x) = (x - 8)(x + 5)q(x) + ax + b$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(8) = 0 \\cdot q(8) + 8a + b$",
                  "reason": "Substituting a value: $8$ goes in place of $x$ in line 3, and the factor $8 - 8$ is $0$."
                },
                {
                  "step": "$f(8) = 0 + 8a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(8) = 8a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$8a + b = -23$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 8$ is $f(8)$, which the problem gives as $-23$."
                },
                {
                  "step": "$f(-5) = 0 \\cdot q(-5) - 5a + b$",
                  "reason": "Substituting a value: $-5$ goes in place of $x$ in line 3, and the factor $-5 + 5$ is $0$."
                },
                {
                  "step": "$f(-5) = 0 - 5a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-5) = -5a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$x + 5 = x - (-5)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$-5a + b = 3$",
                  "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 5$ is $f(-5)$, which the problem gives as $3$."
                },
                {
                  "step": "$13a = -26$",
                  "reason": "Elimination: taking line 12 from line 7 leaves no term in $b$."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
                },
                {
                  "step": "$-16 + b = -23$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 7, and $8 \\cdot (-2) = -16$."
                },
                {
                  "step": "$b = -7$",
                  "reason": "Adding the same number to both sides: $16$ is added to both sides."
                },
                {
                  "step": "The remainder is $-2x - 7$.",
                  "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 4)(x + 2)$, given that dividing $f(x)$ by $x - 4$ leaves the remainder $-18$ and dividing it by $x + 2$ leaves the remainder $18$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*x+6",
              "lines": [
                {
                  "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 4)(x + 2)$, given that dividing $f(x)$ by $x - 4$ leaves the remainder $-18$ and dividing it by $x + 2$ leaves the remainder $18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor, the sum of the degrees of its two factors."
                },
                {
                  "step": "$f(x) = (x - 4)(x + 2)q(x) + ax + b$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(4) = 0 \\cdot q(4) + 4a + b$",
                  "reason": "Substituting a value: $4$ goes in place of $x$ in line 3, and the factor $4 - 4$ is $0$."
                },
                {
                  "step": "$f(4) = 0 + 4a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(4) = 4a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$4a + b = -18$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 4$ is $f(4)$, which the problem gives as $-18$."
                },
                {
                  "step": "$f(-2) = 0 \\cdot q(-2) - 2a + b$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$ in line 3, and the factor $-2 + 2$ is $0$."
                },
                {
                  "step": "$f(-2) = 0 - 2a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-2) = -2a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$x + 2 = x - (-2)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$-2a + b = 18$",
                  "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 2$ is $f(-2)$, which the problem gives as $18$."
                },
                {
                  "step": "$6a = -36$",
                  "reason": "Elimination: taking line 12 from line 7 leaves no term in $b$."
                },
                {
                  "step": "$a = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$-24 + b = -18$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 7, and $4 \\cdot (-6) = -24$."
                },
                {
                  "step": "$b = 6$",
                  "reason": "Adding the same number to both sides: $24$ is added to both sides."
                },
                {
                  "step": "The remainder is $-6x + 6$.",
                  "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 6)(x + 7)$, given that dividing $f(x)$ by $x - 6$ leaves the remainder $-18$ and dividing it by $x + 7$ leaves the remainder $8$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x-6",
              "lines": [
                {
                  "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 6)(x + 7)$, given that dividing $f(x)$ by $x - 6$ leaves the remainder $-18$ and dividing it by $x + 7$ leaves the remainder $8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor, the sum of the degrees of its two factors."
                },
                {
                  "step": "$f(x) = (x - 6)(x + 7)q(x) + ax + b$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(6) = 0 \\cdot q(6) + 6a + b$",
                  "reason": "Substituting a value: $6$ goes in place of $x$ in line 3, and the factor $6 - 6$ is $0$."
                },
                {
                  "step": "$f(6) = 0 + 6a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(6) = 6a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$6a + b = -18$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 6$ is $f(6)$, which the problem gives as $-18$."
                },
                {
                  "step": "$f(-7) = 0 \\cdot q(-7) - 7a + b$",
                  "reason": "Substituting a value: $-7$ goes in place of $x$ in line 3, and the factor $-7 + 7$ is $0$."
                },
                {
                  "step": "$f(-7) = 0 - 7a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-7) = -7a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$x + 7 = x - (-7)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$-7a + b = 8$",
                  "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 7$ is $f(-7)$, which the problem gives as $8$."
                },
                {
                  "step": "$13a = -26$",
                  "reason": "Elimination: taking line 12 from line 7 leaves no term in $b$."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
                },
                {
                  "step": "$-12 + b = -18$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 7, and $6 \\cdot (-2) = -12$."
                },
                {
                  "step": "$b = -6$",
                  "reason": "Adding the same number to both sides: $12$ is added to both sides."
                },
                {
                  "step": "The remainder is $-2x - 6$.",
                  "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the remainder when $f(x) = -3x^3 - 9x^2 + 2x + 3$ is divided by $x^2 + 3x - 10$.",
            "lines": [
              {
                "step": "Find the remainder when $f(x) = -3x^3 - 9x^2 + 2x + 3$ is divided by $x^2 + 3x - 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 3x - 10 = (x - 2)(x + 5)$",
                "reason": "Factoring a quadratic: $(x - 2)(x + 5)$ multiplies out to $x^2 + 3x - 10$."
              },
              {
                "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor."
              },
              {
                "step": "$f(x) = (x - 2)(x + 5)q(x) + ax + b$",
                "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
              },
              {
                "step": "$f(2) = 0 \\cdot q(2) + 2a + b$",
                "reason": "Substituting a value: $2$ goes in place of $x$ in line 4, and the factor $2 - 2$ is $0$."
              },
              {
                "step": "$f(2) = 0 + 2a + b$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(2) = 2a + b$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$2a + b = -53$",
                "reason": "Function notation: $2$ goes where $x$ stands, so $f(2) = -3 \\cdot 2^3 - 9 \\cdot 2^2 + 2 \\cdot 2 + 3 = -53$."
              },
              {
                "step": "$f(-5) = 0 \\cdot q(-5) - 5a + b$",
                "reason": "Substituting a value: $-5$ goes in place of $x$ in line 4, and the factor $-5 + 5$ is $0$."
              },
              {
                "step": "$f(-5) = 0 - 5a + b$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(-5) = -5a + b$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$-5a + b = 143$",
                "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands, so $f(-5) = -3(-5)^3 - 9(-5)^2 + 2(-5) + 3 = 143$."
              },
              {
                "step": "$7a = -196$",
                "reason": "Elimination: taking line 12 from line 8 leaves no term in $b$."
              },
              {
                "step": "$a = -28$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
              },
              {
                "step": "$-56 + b = -53$",
                "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 8, and $2 \\cdot (-28) = -56$."
              },
              {
                "step": "$b = 3$",
                "reason": "Adding the same number to both sides: $56$ is added to both sides."
              },
              {
                "step": "The remainder is $-28x + 3$.",
                "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $f(x) = 4x^3 - 2x^2 - 7x + 4$ is divided by $x^2 - 4x - 12$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "97*x+172",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 4x^3 - 2x^2 - 7x + 4$ is divided by $x^2 - 4x - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 4x - 12 = (x - 6)(x + 2)$",
                  "reason": "Factoring a quadratic: $(x - 6)(x + 2)$ multiplies out to $x^2 - 4x - 12$."
                },
                {
                  "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor."
                },
                {
                  "step": "$f(x) = (x - 6)(x + 2)q(x) + ax + b$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(6) = 0 \\cdot q(6) + 6a + b$",
                  "reason": "Substituting a value: $6$ goes in place of $x$ in line 4, and the factor $6 - 6$ is $0$."
                },
                {
                  "step": "$f(6) = 0 + 6a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(6) = 6a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$6a + b = 754$",
                  "reason": "Function notation: $6$ goes where $x$ stands, so $f(6) = 4 \\cdot 6^3 - 2 \\cdot 6^2 - 7 \\cdot 6 + 4 = 754$."
                },
                {
                  "step": "$f(-2) = 0 \\cdot q(-2) - 2a + b$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$ in line 4, and the factor $-2 + 2$ is $0$."
                },
                {
                  "step": "$f(-2) = 0 - 2a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-2) = -2a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$-2a + b = -22$",
                  "reason": "Function notation: $-2$ goes, in brackets, where $x$ stands, so $f(-2) = 4(-2)^3 - 2(-2)^2 - 7(-2) + 4 = -22$."
                },
                {
                  "step": "$8a = 776$",
                  "reason": "Elimination: taking line 12 from line 8 leaves no term in $b$."
                },
                {
                  "step": "$a = 97$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$582 + b = 754$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 8, and $6 \\cdot 97 = 582$."
                },
                {
                  "step": "$b = 172$",
                  "reason": "Adding the same number to both sides: $-582$ is added to both sides."
                },
                {
                  "step": "The remainder is $97x + 172$.",
                  "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = 5x^3 + 2x^2 - 5x + 2$ is divided by $x^2 - 2x - 3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "34*x+38",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 5x^3 + 2x^2 - 5x + 2$ is divided by $x^2 - 2x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 2x - 3 = (x - 3)(x + 1)$",
                  "reason": "Factoring a quadratic: $(x - 3)(x + 1)$ multiplies out to $x^2 - 2x - 3$."
                },
                {
                  "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor."
                },
                {
                  "step": "$f(x) = (x - 3)(x + 1)q(x) + ax + b$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(3) = 0 \\cdot q(3) + 3a + b$",
                  "reason": "Substituting a value: $3$ goes in place of $x$ in line 4, and the factor $3 - 3$ is $0$."
                },
                {
                  "step": "$f(3) = 0 + 3a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(3) = 3a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$3a + b = 140$",
                  "reason": "Function notation: $3$ goes where $x$ stands, so $f(3) = 5 \\cdot 3^3 + 2 \\cdot 3^2 - 5 \\cdot 3 + 2 = 140$."
                },
                {
                  "step": "$f(-1) = 0 \\cdot q(-1) - a + b$",
                  "reason": "Substituting a value: $-1$ goes in place of $x$ in line 4, and the factor $-1 + 1$ is $0$."
                },
                {
                  "step": "$f(-1) = 0 - a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-1) = -a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$-a + b = 4$",
                  "reason": "Function notation: $-1$ goes, in brackets, where $x$ stands, so $f(-1) = 5(-1)^3 + 2(-1)^2 - 5(-1) + 2 = 4$."
                },
                {
                  "step": "$4a = 136$",
                  "reason": "Elimination: taking line 12 from line 8 leaves no term in $b$."
                },
                {
                  "step": "$a = 34$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$102 + b = 140$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 8, and $3 \\cdot 34 = 102$."
                },
                {
                  "step": "$b = 38$",
                  "reason": "Adding the same number to both sides: $-102$ is added to both sides."
                },
                {
                  "step": "The remainder is $34x + 38$.",
                  "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = -4x^3 + 9x^2 - 5x - 6$ is divided by $x^2 - 2x - 48$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-195*x+42",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -4x^3 + 9x^2 - 5x - 6$ is divided by $x^2 - 2x - 48$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 2x - 48 = (x - 8)(x + 6)$",
                  "reason": "Factoring a quadratic: $(x - 8)(x + 6)$ multiplies out to $x^2 - 2x - 48$."
                },
                {
                  "step": "The divisor has degree $2$, so the remainder is $ax + b$ for numbers $a$ and $b$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $2$, the degree of the divisor."
                },
                {
                  "step": "$f(x) = (x - 8)(x + 6)q(x) + ax + b$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(8) = 0 \\cdot q(8) + 8a + b$",
                  "reason": "Substituting a value: $8$ goes in place of $x$ in line 4, and the factor $8 - 8$ is $0$."
                },
                {
                  "step": "$f(8) = 0 + 8a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(8) = 8a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$8a + b = -1518$",
                  "reason": "Function notation: $8$ goes where $x$ stands, so $f(8) = -4 \\cdot 8^3 + 9 \\cdot 8^2 - 5 \\cdot 8 - 6 = -1518$."
                },
                {
                  "step": "$f(-6) = 0 \\cdot q(-6) - 6a + b$",
                  "reason": "Substituting a value: $-6$ goes in place of $x$ in line 4, and the factor $-6 + 6$ is $0$."
                },
                {
                  "step": "$f(-6) = 0 - 6a + b$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-6) = -6a + b$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$-6a + b = 1212$",
                  "reason": "Function notation: $-6$ goes, in brackets, where $x$ stands, so $f(-6) = -4(-6)^3 + 9(-6)^2 - 5(-6) - 6 = 1212$."
                },
                {
                  "step": "$14a = -2730$",
                  "reason": "Elimination: taking line 12 from line 8 leaves no term in $b$."
                },
                {
                  "step": "$a = -195$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $14$."
                },
                {
                  "step": "$-1560 + b = -1518$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 8, and $8 \\cdot (-195) = -1560$."
                },
                {
                  "step": "$b = 42$",
                  "reason": "Adding the same number to both sides: $1560$ is added to both sides."
                },
                {
                  "step": "The remainder is $-195x + 42$.",
                  "reason": "Answering the question asked: the remainder is $ax + b$ with these values of $a$ and $b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the remainder when $f(x) = 3x^4 + 8x^3 + 6x + 3$ is divided by $x^3 - 16x$.",
            "lines": [
              {
                "step": "Find the remainder when $f(x) = 3x^4 + 8x^3 + 6x + 3$ is divided by $x^3 - 16x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^3 - 16x = x(x^2 - 16)$",
                "reason": "Taking out a common factor: $x$ is a factor of both terms."
              },
              {
                "step": "$x(x^2 - 16) = x(x - 4)(x + 4)$",
                "reason": "Difference of squares: $x^2 - 16 = (x - 4)(x + 4)$."
              },
              {
                "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor."
              },
              {
                "step": "$f(x) = x(x - 4)(x + 4)q(x) + ax^2 + bx + c$",
                "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
              },
              {
                "step": "$f(0) = 0 \\cdot q(0) + a \\cdot 0^2 + b \\cdot 0 + c$",
                "reason": "Substituting a value: $0$ goes in place of $x$ in line 5, and the factor $x$ is $0$."
              },
              {
                "step": "$f(0) = 0 + 0 + 0 + c$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(0) = c$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$c = 3$",
                "reason": "Function notation: $f(0)$ is the constant term $3$ of $f(x)$."
              },
              {
                "step": "$f(4) = 0 \\cdot q(4) + 16a + 4b + c$",
                "reason": "Substituting a value: $4$ goes in place of $x$ in line 5, and the factor $4 - 4$ is $0$."
              },
              {
                "step": "$f(4) = 0 + 16a + 4b + c$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(4) = 16a + 4b + c$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$16a + 4b + c = 1307$",
                "reason": "Function notation: $4$ goes where $x$ stands, so $f(4) = 3 \\cdot 4^4 + 8 \\cdot 4^3 + 6 \\cdot 4 + 3 = 1307$."
              },
              {
                "step": "$f(-4) = 0 \\cdot q(-4) + 16a - 4b + c$",
                "reason": "Substituting a value: $-4$ goes in place of $x$ in line 5, and the factor $-4 + 4$ is $0$."
              },
              {
                "step": "$f(-4) = 0 + 16a - 4b + c$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(-4) = 16a - 4b + c$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$16a - 4b + c = 235$",
                "reason": "Function notation: $-4$ goes, in brackets, where $x$ stands, so $f(-4) = 3(-4)^4 + 8(-4)^3 + 6(-4) + 3 = 235$."
              },
              {
                "step": "$8b = 1072$",
                "reason": "Elimination: taking line 17 from line 13 leaves no term in $a$ or $c$."
              },
              {
                "step": "$b = 134$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              },
              {
                "step": "$32a + 2c = 1542$",
                "reason": "Adding two equations: lines 13 and 17 are added, which leaves no term in $b$."
              },
              {
                "step": "$32a + 6 = 1542$",
                "reason": "Back-substitution: the value of $c$ from line 9 goes in place of $c$, and $2 \\cdot 3 = 6$."
              },
              {
                "step": "$32a = 1536$",
                "reason": "Adding the same number to both sides: $-6$ is added to both sides."
              },
              {
                "step": "$a = 48$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $32$."
              },
              {
                "step": "The remainder is $48x^2 + 134x + 3$.",
                "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $f(x) = 7x^4 - 5x^3 - 2x^2 - 9x - 6$ is divided by $x^3 - 9x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "61*x^2-54*x-6",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = 7x^4 - 5x^3 - 2x^2 - 9x - 6$ is divided by $x^3 - 9x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 9x = x(x^2 - 9)$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms."
                },
                {
                  "step": "$x(x^2 - 9) = x(x - 3)(x + 3)$",
                  "reason": "Difference of squares: $x^2 - 9 = (x - 3)(x + 3)$."
                },
                {
                  "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor."
                },
                {
                  "step": "$f(x) = x(x - 3)(x + 3)q(x) + ax^2 + bx + c$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(0) = 0 \\cdot q(0) + a \\cdot 0^2 + b \\cdot 0 + c$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in line 5, and the factor $x$ is $0$."
                },
                {
                  "step": "$f(0) = 0 + 0 + 0 + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(0) = c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$c = -6$",
                  "reason": "Function notation: $f(0)$ is the constant term $-6$ of $f(x)$."
                },
                {
                  "step": "$f(3) = 0 \\cdot q(3) + 9a + 3b + c$",
                  "reason": "Substituting a value: $3$ goes in place of $x$ in line 5, and the factor $3 - 3$ is $0$."
                },
                {
                  "step": "$f(3) = 0 + 9a + 3b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(3) = 9a + 3b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$9a + 3b + c = 381$",
                  "reason": "Function notation: $3$ goes where $x$ stands, so $f(3) = 7 \\cdot 3^4 - 5 \\cdot 3^3 - 2 \\cdot 3^2 - 9 \\cdot 3 - 6 = 381$."
                },
                {
                  "step": "$f(-3) = 0 \\cdot q(-3) + 9a - 3b + c$",
                  "reason": "Substituting a value: $-3$ goes in place of $x$ in line 5, and the factor $-3 + 3$ is $0$."
                },
                {
                  "step": "$f(-3) = 0 + 9a - 3b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-3) = 9a - 3b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$9a - 3b + c = 705$",
                  "reason": "Function notation: $-3$ goes, in brackets, where $x$ stands, so $f(-3) = 7(-3)^4 - 5(-3)^3 - 2(-3)^2 - 9(-3) - 6 = 705$."
                },
                {
                  "step": "$6b = -324$",
                  "reason": "Elimination: taking line 17 from line 13 leaves no term in $a$ or $c$."
                },
                {
                  "step": "$b = -54$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$18a + 2c = 1086$",
                  "reason": "Adding two equations: lines 13 and 17 are added, which leaves no term in $b$."
                },
                {
                  "step": "$18a - 12 = 1086$",
                  "reason": "Back-substitution: the value of $c$ from line 9 goes in place of $c$, and $2 \\cdot (-6) = -12$."
                },
                {
                  "step": "$18a = 1098$",
                  "reason": "Adding the same number to both sides: $12$ is added to both sides."
                },
                {
                  "step": "$a = 61$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $18$."
                },
                {
                  "step": "The remainder is $61x^2 - 54x - 6$.",
                  "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = -3x^5 - 9x^4 + 5x^3 + 3$ is divided by $x^3 - 4x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-36*x^2-28*x+3",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -3x^5 - 9x^4 + 5x^3 + 3$ is divided by $x^3 - 4x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 4x = x(x^2 - 4)$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms."
                },
                {
                  "step": "$x(x^2 - 4) = x(x - 2)(x + 2)$",
                  "reason": "Difference of squares: $x^2 - 4 = (x - 2)(x + 2)$."
                },
                {
                  "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor."
                },
                {
                  "step": "$f(x) = x(x - 2)(x + 2)q(x) + ax^2 + bx + c$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(0) = 0 \\cdot q(0) + a \\cdot 0^2 + b \\cdot 0 + c$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in line 5, and the factor $x$ is $0$."
                },
                {
                  "step": "$f(0) = 0 + 0 + 0 + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(0) = c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$c = 3$",
                  "reason": "Function notation: $f(0)$ is the constant term $3$ of $f(x)$."
                },
                {
                  "step": "$f(2) = 0 \\cdot q(2) + 4a + 2b + c$",
                  "reason": "Substituting a value: $2$ goes in place of $x$ in line 5, and the factor $2 - 2$ is $0$."
                },
                {
                  "step": "$f(2) = 0 + 4a + 2b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(2) = 4a + 2b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$4a + 2b + c = -197$",
                  "reason": "Function notation: $2$ goes where $x$ stands, so $f(2) = -3 \\cdot 2^5 - 9 \\cdot 2^4 + 5 \\cdot 2^3 + 3 = -197$."
                },
                {
                  "step": "$f(-2) = 0 \\cdot q(-2) + 4a - 2b + c$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$ in line 5, and the factor $-2 + 2$ is $0$."
                },
                {
                  "step": "$f(-2) = 0 + 4a - 2b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-2) = 4a - 2b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$4a - 2b + c = -85$",
                  "reason": "Function notation: $-2$ goes, in brackets, where $x$ stands, so $f(-2) = -3(-2)^5 - 9(-2)^4 + 5(-2)^3 + 3 = -85$."
                },
                {
                  "step": "$4b = -112$",
                  "reason": "Elimination: taking line 17 from line 13 leaves no term in $a$ or $c$."
                },
                {
                  "step": "$b = -28$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$8a + 2c = -282$",
                  "reason": "Adding two equations: lines 13 and 17 are added, which leaves no term in $b$."
                },
                {
                  "step": "$8a + 6 = -282$",
                  "reason": "Back-substitution: the value of $c$ from line 9 goes in place of $c$, and $2 \\cdot 3 = 6$."
                },
                {
                  "step": "$8a = -288$",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                },
                {
                  "step": "$a = -36$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "The remainder is $-36x^2 - 28x + 3$.",
                  "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $f(x) = -2x^4 + 7x^3 + 5x - 8$ is divided by $x^3 - 25x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-50*x^2+180*x-8",
              "lines": [
                {
                  "step": "Find the remainder when $f(x) = -2x^4 + 7x^3 + 5x - 8$ is divided by $x^3 - 25x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 25x = x(x^2 - 25)$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms."
                },
                {
                  "step": "$x(x^2 - 25) = x(x - 5)(x + 5)$",
                  "reason": "Difference of squares: $x^2 - 25 = (x - 5)(x + 5)$."
                },
                {
                  "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor."
                },
                {
                  "step": "$f(x) = x(x - 5)(x + 5)q(x) + ax^2 + bx + c$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(0) = 0 \\cdot q(0) + a \\cdot 0^2 + b \\cdot 0 + c$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in line 5, and the factor $x$ is $0$."
                },
                {
                  "step": "$f(0) = 0 + 0 + 0 + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(0) = c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$c = -8$",
                  "reason": "Function notation: $f(0)$ is the constant term $-8$ of $f(x)$."
                },
                {
                  "step": "$f(5) = 0 \\cdot q(5) + 25a + 5b + c$",
                  "reason": "Substituting a value: $5$ goes in place of $x$ in line 5, and the factor $5 - 5$ is $0$."
                },
                {
                  "step": "$f(5) = 0 + 25a + 5b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(5) = 25a + 5b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$25a + 5b + c = -358$",
                  "reason": "Function notation: $5$ goes where $x$ stands, so $f(5) = -2 \\cdot 5^4 + 7 \\cdot 5^3 + 5 \\cdot 5 - 8 = -358$."
                },
                {
                  "step": "$f(-5) = 0 \\cdot q(-5) + 25a - 5b + c$",
                  "reason": "Substituting a value: $-5$ goes in place of $x$ in line 5, and the factor $-5 + 5$ is $0$."
                },
                {
                  "step": "$f(-5) = 0 + 25a - 5b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-5) = 25a - 5b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$25a - 5b + c = -2158$",
                  "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands, so $f(-5) = -2(-5)^4 + 7(-5)^3 + 5(-5) - 8 = -2158$."
                },
                {
                  "step": "$10b = 1800$",
                  "reason": "Elimination: taking line 17 from line 13 leaves no term in $a$ or $c$."
                },
                {
                  "step": "$b = 180$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$50a + 2c = -2516$",
                  "reason": "Adding two equations: lines 13 and 17 are added, which leaves no term in $b$."
                },
                {
                  "step": "$50a - 16 = -2516$",
                  "reason": "Back-substitution: the value of $c$ from line 9 goes in place of $c$, and $2 \\cdot (-8) = -16$."
                },
                {
                  "step": "$50a = -2500$",
                  "reason": "Adding the same number to both sides: $16$ is added to both sides."
                },
                {
                  "step": "$a = -50$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $50$."
                },
                {
                  "step": "The remainder is $-50x^2 + 180x - 8$.",
                  "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 2)(x + 3)(x - 4)$, given that dividing $f(x)$ by $x - 2$, by $x + 3$ and by $x - 4$ leaves the remainders $7$, $32$ and $25$.",
            "lines": [
              {
                "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 2)(x + 3)(x - 4)$, given that dividing $f(x)$ by $x - 2$, by $x + 3$ and by $x - 4$ leaves the remainders $7$, $32$ and $25$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor, the sum of the degrees of its three factors."
              },
              {
                "step": "$f(x) = (x - 2)(x + 3)(x - 4)q(x) + ax^2 + bx + c$",
                "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
              },
              {
                "step": "$f(2) = 0 \\cdot q(2) + 4a + 2b + c$",
                "reason": "Substituting a value: $2$ goes in place of $x$ in line 3, and the factor $2 - 2$ is $0$."
              },
              {
                "step": "$f(2) = 0 + 4a + 2b + c$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(2) = 4a + 2b + c$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$4a + 2b + c = 7$",
                "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 2$ is $f(2)$, which the problem gives as $7$."
              },
              {
                "step": "$f(-3) = 0 \\cdot q(-3) + 9a - 3b + c$",
                "reason": "Substituting a value: $-3$ goes in place of $x$ in line 3, and the factor $-3 + 3$ is $0$."
              },
              {
                "step": "$f(-3) = 0 + 9a - 3b + c$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(-3) = 9a - 3b + c$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$x + 3 = x - (-3)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$9a - 3b + c = 32$",
                "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 3$ is $f(-3)$, which the problem gives as $32$."
              },
              {
                "step": "$f(4) = 0 \\cdot q(4) + 16a + 4b + c$",
                "reason": "Substituting a value: $4$ goes in place of $x$ in line 3, and the factor $4 - 4$ is $0$."
              },
              {
                "step": "$f(4) = 0 + 16a + 4b + c$",
                "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
              },
              {
                "step": "$f(4) = 16a + 4b + c$",
                "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
              },
              {
                "step": "$16a + 4b + c = 25$",
                "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 4$ is $f(4)$, which the problem gives as $25$."
              },
              {
                "step": "$12a + 2b = 18$",
                "reason": "Elimination: taking line 7 from line 16 leaves no term in $c$."
              },
              {
                "step": "$-5a + 5b = -25$",
                "reason": "Elimination: taking line 12 from line 7 leaves no term in $c$."
              },
              {
                "step": "$60a + 10b = 90$",
                "reason": "Multiplying both sides by the same number: both sides of line 17 are multiplied by $5$."
              },
              {
                "step": "$-10a + 10b = -50$",
                "reason": "Multiplying both sides by the same number: both sides of line 18 are multiplied by $2$."
              },
              {
                "step": "$70a = 140$",
                "reason": "Elimination: taking line 20 from line 19 leaves no term in $b$."
              },
              {
                "step": "$a = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $70$."
              },
              {
                "step": "$24 + 2b = 18$",
                "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 17, and $12 \\cdot 2 = 24$."
              },
              {
                "step": "$2b = -6$",
                "reason": "Adding the same number to both sides: $-24$ is added to both sides."
              },
              {
                "step": "$b = -3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$2 + c = 7$",
                "reason": "Back-substitution: the values of $a$ and $b$ go in place of $a$ and $b$ in line 7, and $4 \\cdot 2 + 2 \\cdot (-3) = 2$."
              },
              {
                "step": "$c = 5$",
                "reason": "Adding the same number to both sides: $-2$ is added to both sides."
              },
              {
                "step": "The remainder is $2x^2 - 3x + 5$.",
                "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 5)(x + 6)(x - 8)$, given that dividing $f(x)$ by $x - 5$, by $x + 6$ and by $x - 8$ leaves the remainders $-79$, $-24$ and $-178$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x^2-7*x+6",
              "lines": [
                {
                  "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 5)(x + 6)(x - 8)$, given that dividing $f(x)$ by $x - 5$, by $x + 6$ and by $x - 8$ leaves the remainders $-79$, $-24$ and $-178$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor, the sum of the degrees of its three factors."
                },
                {
                  "step": "$f(x) = (x - 5)(x + 6)(x - 8)q(x) + ax^2 + bx + c$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(5) = 0 \\cdot q(5) + 25a + 5b + c$",
                  "reason": "Substituting a value: $5$ goes in place of $x$ in line 3, and the factor $5 - 5$ is $0$."
                },
                {
                  "step": "$f(5) = 0 + 25a + 5b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(5) = 25a + 5b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$25a + 5b + c = -79$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 5$ is $f(5)$, which the problem gives as $-79$."
                },
                {
                  "step": "$f(-6) = 0 \\cdot q(-6) + 36a - 6b + c$",
                  "reason": "Substituting a value: $-6$ goes in place of $x$ in line 3, and the factor $-6 + 6$ is $0$."
                },
                {
                  "step": "$f(-6) = 0 + 36a - 6b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-6) = 36a - 6b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$x + 6 = x - (-6)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$36a - 6b + c = -24$",
                  "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 6$ is $f(-6)$, which the problem gives as $-24$."
                },
                {
                  "step": "$f(8) = 0 \\cdot q(8) + 64a + 8b + c$",
                  "reason": "Substituting a value: $8$ goes in place of $x$ in line 3, and the factor $8 - 8$ is $0$."
                },
                {
                  "step": "$f(8) = 0 + 64a + 8b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(8) = 64a + 8b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$64a + 8b + c = -178$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 8$ is $f(8)$, which the problem gives as $-178$."
                },
                {
                  "step": "$39a + 3b = -99$",
                  "reason": "Elimination: taking line 7 from line 16 leaves no term in $c$."
                },
                {
                  "step": "$-11a + 11b = -55$",
                  "reason": "Elimination: taking line 12 from line 7 leaves no term in $c$."
                },
                {
                  "step": "$429a + 33b = -1089$",
                  "reason": "Multiplying both sides by the same number: both sides of line 17 are multiplied by $11$."
                },
                {
                  "step": "$-33a + 33b = -165$",
                  "reason": "Multiplying both sides by the same number: both sides of line 18 are multiplied by $3$."
                },
                {
                  "step": "$462a = -924$",
                  "reason": "Elimination: taking line 20 from line 19 leaves no term in $b$."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $462$."
                },
                {
                  "step": "$-78 + 3b = -99$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 17, and $39 \\cdot (-2) = -78$."
                },
                {
                  "step": "$3b = -21$",
                  "reason": "Adding the same number to both sides: $78$ is added to both sides."
                },
                {
                  "step": "$b = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$-85 + c = -79$",
                  "reason": "Back-substitution: the values of $a$ and $b$ go in place of $a$ and $b$ in line 7, and $25 \\cdot (-2) + 5 \\cdot (-7) = -85$."
                },
                {
                  "step": "$c = 6$",
                  "reason": "Adding the same number to both sides: $85$ is added to both sides."
                },
                {
                  "step": "The remainder is $-2x^2 - 7x + 6$.",
                  "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 6)(x + 4)(x - 9)$, given that dividing $f(x)$ by $x - 6$, by $x + 4$ and by $x - 9$ leaves the remainders $-156$, $-126$ and $-399$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*x^2+9*x+6",
              "lines": [
                {
                  "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 6)(x + 4)(x - 9)$, given that dividing $f(x)$ by $x - 6$, by $x + 4$ and by $x - 9$ leaves the remainders $-156$, $-126$ and $-399$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor, the sum of the degrees of its three factors."
                },
                {
                  "step": "$f(x) = (x - 6)(x + 4)(x - 9)q(x) + ax^2 + bx + c$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(6) = 0 \\cdot q(6) + 36a + 6b + c$",
                  "reason": "Substituting a value: $6$ goes in place of $x$ in line 3, and the factor $6 - 6$ is $0$."
                },
                {
                  "step": "$f(6) = 0 + 36a + 6b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(6) = 36a + 6b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$36a + 6b + c = -156$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 6$ is $f(6)$, which the problem gives as $-156$."
                },
                {
                  "step": "$f(-4) = 0 \\cdot q(-4) + 16a - 4b + c$",
                  "reason": "Substituting a value: $-4$ goes in place of $x$ in line 3, and the factor $-4 + 4$ is $0$."
                },
                {
                  "step": "$f(-4) = 0 + 16a - 4b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-4) = 16a - 4b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$x + 4 = x - (-4)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$16a - 4b + c = -126$",
                  "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 4$ is $f(-4)$, which the problem gives as $-126$."
                },
                {
                  "step": "$f(9) = 0 \\cdot q(9) + 81a + 9b + c$",
                  "reason": "Substituting a value: $9$ goes in place of $x$ in line 3, and the factor $9 - 9$ is $0$."
                },
                {
                  "step": "$f(9) = 0 + 81a + 9b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(9) = 81a + 9b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$81a + 9b + c = -399$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 9$ is $f(9)$, which the problem gives as $-399$."
                },
                {
                  "step": "$45a + 3b = -243$",
                  "reason": "Elimination: taking line 7 from line 16 leaves no term in $c$."
                },
                {
                  "step": "$20a + 10b = -30$",
                  "reason": "Elimination: taking line 12 from line 7 leaves no term in $c$."
                },
                {
                  "step": "$450a + 30b = -2430$",
                  "reason": "Multiplying both sides by the same number: both sides of line 17 are multiplied by $10$."
                },
                {
                  "step": "$60a + 30b = -90$",
                  "reason": "Multiplying both sides by the same number: both sides of line 18 are multiplied by $3$."
                },
                {
                  "step": "$390a = -2340$",
                  "reason": "Elimination: taking line 20 from line 19 leaves no term in $b$."
                },
                {
                  "step": "$a = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $390$."
                },
                {
                  "step": "$-270 + 3b = -243$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 17, and $45 \\cdot (-6) = -270$."
                },
                {
                  "step": "$3b = 27$",
                  "reason": "Adding the same number to both sides: $270$ is added to both sides."
                },
                {
                  "step": "$b = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$-162 + c = -156$",
                  "reason": "Back-substitution: the values of $a$ and $b$ go in place of $a$ and $b$ in line 7, and $36 \\cdot (-6) + 6 \\cdot 9 = -162$."
                },
                {
                  "step": "$c = 6$",
                  "reason": "Adding the same number to both sides: $162$ is added to both sides."
                },
                {
                  "step": "The remainder is $-6x^2 + 9x + 6$.",
                  "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 3)(x + 7)(x - 7)$, given that dividing $f(x)$ by $x - 3$, by $x + 7$ and by $x - 7$ leaves the remainders $-2$, $-242$ and $-130$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^2+8*x+10",
              "lines": [
                {
                  "step": "Find the remainder when a polynomial $f(x)$ is divided by $(x - 3)(x + 7)(x - 7)$, given that dividing $f(x)$ by $x - 3$, by $x + 7$ and by $x - 7$ leaves the remainders $-2$, $-242$ and $-130$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor has degree $3$, so the remainder is $ax^2 + bx + c$ for numbers $a$, $b$ and $c$.",
                  "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor, the sum of the degrees of its three factors."
                },
                {
                  "step": "$f(x) = (x - 3)(x + 7)(x - 7)q(x) + ax^2 + bx + c$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient $q(x)$, plus the remainder."
                },
                {
                  "step": "$f(3) = 0 \\cdot q(3) + 9a + 3b + c$",
                  "reason": "Substituting a value: $3$ goes in place of $x$ in line 3, and the factor $3 - 3$ is $0$."
                },
                {
                  "step": "$f(3) = 0 + 9a + 3b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(3) = 9a + 3b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$9a + 3b + c = -2$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 3$ is $f(3)$, which the problem gives as $-2$."
                },
                {
                  "step": "$f(-7) = 0 \\cdot q(-7) + 49a - 7b + c$",
                  "reason": "Substituting a value: $-7$ goes in place of $x$ in line 3, and the factor $-7 + 7$ is $0$."
                },
                {
                  "step": "$f(-7) = 0 + 49a - 7b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(-7) = 49a - 7b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$x + 7 = x - (-7)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$49a - 7b + c = -242$",
                  "reason": "Remainder Theorem: by line 11 the remainder when $f(x)$ is divided by $x + 7$ is $f(-7)$, which the problem gives as $-242$."
                },
                {
                  "step": "$f(7) = 0 \\cdot q(7) + 49a + 7b + c$",
                  "reason": "Substituting a value: $7$ goes in place of $x$ in line 3, and the factor $7 - 7$ is $0$."
                },
                {
                  "step": "$f(7) = 0 + 49a + 7b + c$",
                  "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
                },
                {
                  "step": "$f(7) = 49a + 7b + c$",
                  "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
                },
                {
                  "step": "$49a + 7b + c = -130$",
                  "reason": "Remainder Theorem: the remainder when $f(x)$ is divided by $x - 7$ is $f(7)$, which the problem gives as $-130$."
                },
                {
                  "step": "$40a + 4b = -128$",
                  "reason": "Elimination: taking line 7 from line 16 leaves no term in $c$."
                },
                {
                  "step": "$-40a + 10b = 240$",
                  "reason": "Elimination: taking line 12 from line 7 leaves no term in $c$."
                },
                {
                  "step": "$200a + 20b = -640$",
                  "reason": "Multiplying both sides by the same number: both sides of line 17 are multiplied by $5$."
                },
                {
                  "step": "$-80a + 20b = 480$",
                  "reason": "Multiplying both sides by the same number: both sides of line 18 are multiplied by $2$."
                },
                {
                  "step": "$280a = -1120$",
                  "reason": "Elimination: taking line 20 from line 19 leaves no term in $b$."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $280$."
                },
                {
                  "step": "$-160 + 4b = -128$",
                  "reason": "Back-substitution: the value of $a$ goes in place of $a$ in line 17, and $40 \\cdot (-4) = -160$."
                },
                {
                  "step": "$4b = 32$",
                  "reason": "Adding the same number to both sides: $160$ is added to both sides."
                },
                {
                  "step": "$b = 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$-12 + c = -2$",
                  "reason": "Back-substitution: the values of $a$ and $b$ go in place of $a$ and $b$ in line 7, and $9 \\cdot (-4) + 3 \\cdot 8 = -12$."
                },
                {
                  "step": "$c = 10$",
                  "reason": "Adding the same number to both sides: $12$ is added to both sides."
                },
                {
                  "step": "The remainder is $-4x^2 + 8x + 10$.",
                  "reason": "Answering the question asked: the remainder is $ax^2 + bx + c$ with these values of $a$, $b$ and $c$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t195-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the value of $f$ alone on the left: Dividing the polynomial $f(x)$ by $x - 1$ leaves the remainder $-29$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the value of $f$ alone on the left: Dividing the polynomial $f(x)$ by $x - 1$ leaves the remainder $-29$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor is $x - 1$ and the remainder is $-29$.",
                "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
              },
              {
                "step": "The remainder is $f(1)$.",
                "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 1$."
              },
              {
                "step": "$f(1) = -29$",
                "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ alone on the left: The remainder is $-7$ when the polynomial $f(x)$ is divided by $x - 4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(4) = -7",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ alone on the left: The remainder is $-7$ when the polynomial $f(x)$ is divided by $x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - 4$ and the remainder is $-7$.",
                  "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
                },
                {
                  "step": "The remainder is $f(4)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 4$."
                },
                {
                  "step": "$f(4) = -7$",
                  "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ alone on the left: When the polynomial $f(x)$ is divided by $x - 6$, the remainder is $-32$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(6) = -32",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ alone on the left: When the polynomial $f(x)$ is divided by $x - 6$, the remainder is $-32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - 6$ and the remainder is $-32$.",
                  "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
                },
                {
                  "step": "The remainder is $f(6)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 6$."
                },
                {
                  "step": "$f(6) = -32$",
                  "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ alone on the left: The polynomial $f(x)$ leaves the remainder $13$ on division by $x - 3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(3) = 13",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ alone on the left: The polynomial $f(x)$ leaves the remainder $13$ on division by $x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - 3$ and the remainder is $13$.",
                  "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
                },
                {
                  "step": "The remainder is $f(3)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = 3$."
                },
                {
                  "step": "$f(3) = 13$",
                  "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with the value of $f$ alone on the left: When the polynomial $f(x)$ is divided by $x + 8$, the remainder is $-22$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the value of $f$ alone on the left: When the polynomial $f(x)$ is divided by $x + 8$, the remainder is $-22$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor is $x + 8$ and the remainder is $-22$.",
                "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
              },
              {
                "step": "$x + 8 = x - (-8)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "The remainder is $f(-8)$.",
                "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -8$."
              },
              {
                "step": "$f(-8) = -22$",
                "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ alone on the left: The polynomial $f(x)$ leaves the remainder $16$ on division by $x + 3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(-3) = 16",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ alone on the left: The polynomial $f(x)$ leaves the remainder $16$ on division by $x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x + 3$ and the remainder is $16$.",
                  "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
                },
                {
                  "step": "$x + 3 = x - (-3)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "The remainder is $f(-3)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -3$."
                },
                {
                  "step": "$f(-3) = 16$",
                  "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ alone on the left: Dividing the polynomial $f(x)$ by $x + 4$ leaves the remainder $29$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(-4) = 29",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ alone on the left: Dividing the polynomial $f(x)$ by $x + 4$ leaves the remainder $29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x + 4$ and the remainder is $29$.",
                  "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
                },
                {
                  "step": "$x + 4 = x - (-4)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "The remainder is $f(-4)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -4$."
                },
                {
                  "step": "$f(-4) = 29$",
                  "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ alone on the left: The remainder is $38$ when the polynomial $f(x)$ is divided by $x + 6$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(-6) = 38",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ alone on the left: The remainder is $38$ when the polynomial $f(x)$ is divided by $x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x + 6$ and the remainder is $38$.",
                  "reason": "Writing a sentence as an equation: the sentence names the polynomial divided, the divisor and the remainder."
                },
                {
                  "step": "$x + 6 = x - (-6)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "The remainder is $f(-6)$.",
                  "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$; here $a = -6$."
                },
                {
                  "step": "$f(-6) = 38$",
                  "reason": "Writing a sentence as an equation: the remainder, written as a value of $f$ and as the number the sentence gives, stands on the two sides of the equals sign."
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
      "id": "t195-p1",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial and $a$ a number. Then the remainder when $f(x)$ is divided by $x - a$ is $f(a)$.",
      "idea": "Write the division statement for the divisor $x - a$ and put $x = a$: the divisor becomes $0$, and the remainder is left alone.",
      "lines": [
        {
          "line": "Let $q(x)$ and $r(x)$ be the quotient and the remainder when $f(x)$ is divided by $x - a$.",
          "reason": "Division statement: $x - a$ is not the zero polynomial, so dividing $f(x)$ by it gives exactly one quotient and one remainder."
        },
        {
          "line": "$f(x) = (x - a)q(x) + r(x)$",
          "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder."
        },
        {
          "line": "The remainder $r(x)$ is $0$ or has degree below $1$.",
          "reason": "Degree of the remainder: the divisor $x - a$ has degree $1$."
        },
        {
          "line": "The remainder is a number $r$.",
          "reason": "Degree: a polynomial of degree $0$ is a nonzero number, and $0$ is a number."
        },
        {
          "line": "$f(x) = (x - a)q(x) + r$",
          "reason": "Substituting a value: by line 4 the remainder $r(x)$ is the number $r$."
        },
        {
          "line": "$f(a) = (a - a)q(a) + r$",
          "reason": "Substituting a value: $a$ goes in place of $x$ in line 5."
        },
        {
          "line": "$f(a) = 0 \\cdot q(a) + r$",
          "reason": "Subtraction as addition: $a - a = a + (-a) = 0$."
        },
        {
          "line": "$f(a) = 0 + r$",
          "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
        },
        {
          "line": "$f(a) = r$",
          "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
        },
        {
          "line": "So the remainder when $f(x)$ is divided by $x - a$ is $f(a)$.",
          "reason": "Transitive property: by line 4 the remainder is $r$, and by line 9 the number $r$ is $f(a)$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t195-s1",
      "method": "direct proof",
      "statement": "Prove that if dividing a polynomial $f(x)$ by a polynomial $d(x)$, not the zero polynomial, gives the quotient $q(x)$ and the remainder $r(x)$, and $a$ is a number with $d(a) = 0$, then $r(a) = f(a)$. Facts it may use: division statement, substituting a value, the assumptions on multiplication and on addition, symmetric property.",
      "check": {
        "proof": [
          {
            "line": "$f(x) = d(x)q(x) + r(x)$",
            "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder, for every number $x$."
          },
          {
            "line": "$f(a) = d(a)q(a) + r(a)$",
            "reason": "Substituting a value: $a$ goes in place of $x$ in line 1."
          },
          {
            "line": "$f(a) = 0 \\cdot q(a) + r(a)$",
            "reason": "Substituting a value: by the hypothesis $d(a) = 0$."
          },
          {
            "line": "$f(a) = 0 + r(a)$",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "$f(a) = r(a)$",
            "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
          },
          {
            "line": "$r(a) = f(a)$",
            "reason": "Symmetric property: the two sides of an equation may change places."
          }
        ]
      }
    },
    {
      "id": "t195-s2",
      "method": "direct proof",
      "statement": "Prove that if $f(x) = b_mx^{2m} + \\dots + b_1x^2 + b_0$, a polynomial with only even powers of $x$, then for every positive number $a$ the remainder when $f(x)$ is divided by $x - a$ equals the remainder when $f(x)$ is divided by $x + a$. Facts it may use: Remainder Theorem, subtraction as addition, function notation, sign of a power of a negative number, substituting a value, transitive property.",
      "check": {
        "proof": [
          {
            "line": "The remainder when $f(x)$ is divided by $x - a$ is $f(a)$.",
            "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$."
          },
          {
            "line": "$x + a = x - (-a)$",
            "reason": "Subtraction as addition: taking away $-a$ adds $a$."
          },
          {
            "line": "The remainder when $f(x)$ is divided by $x + a$ is $f(-a)$.",
            "reason": "Remainder Theorem: by line 2 the divisor is $x$ minus the number $-a$."
          },
          {
            "line": "$f(-a) = b_m(-a)^{2m} + \\dots + b_1(-a)^2 + b_0$",
            "reason": "Function notation: $-a$ goes, in brackets, where $x$ stands."
          },
          {
            "line": "For $k = 1, \\dots, m$, the powers satisfy $(-a)^{2k} = a^{2k}$.",
            "reason": "Sign of a power of a negative number: $a$ is positive, so an even power of $-a$ equals the same power of $a$."
          },
          {
            "line": "$f(-a) = b_ma^{2m} + \\dots + b_1a^2 + b_0$",
            "reason": "Substituting a value: by line 5 each $(-a)^{2k}$ in line 4 is replaced by $a^{2k}$."
          },
          {
            "line": "$f(-a) = f(a)$",
            "reason": "Function notation: the right side of line 6 is $f$ with $a$ where $x$ stands."
          },
          {
            "line": "So the remainder on division by $x - a$ equals the remainder on division by $x + a$.",
            "reason": "Transitive property: lines 1, 3 and 7 join the two remainders through $f(a) = f(-a)$."
          }
        ]
      }
    }
  ]
}
