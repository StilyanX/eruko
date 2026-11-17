export default {
  "number": 204,
  "title": "Vieta's formulas",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "244-253"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $r + s + t$, where $r$, $s$ and $t$ are the roots of $7x^3 + 18x^2 + 14x - 15 = 0$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-18/7",
    "solution": [
      "Find $r + s + t$, where $r$, $s$ and $t$ are the roots of $7x^3 + 18x^2 + 14x - 15 = 0$.",
      "$r + s + t = (-1)^1 \\cdot \\dfrac{18}{7}$",
      "$r + s + t = -\\dfrac{18}{7}$"
    ]
  },
  "ideas": [
    {
      "name": "Vieta's formulas",
      "concrete": "The polynomial $f(x) = 2(x - 2)(x + 4)(x - 5)$, multiplied out, is $f(x) = 2x^3 - 6x^2 - 36x + 80$, and its roots are $2$, $-4$ and $5$. Their sum $3$ is $(-1)^1 \\cdot \\left(-\\dfrac{6}{2}\\right)$, the sum of their products two at a time, $2 \\cdot (-4) + (-4) \\cdot 5 + 5 \\cdot 2 = -18$, is $(-1)^2 \\cdot \\left(-\\dfrac{36}{2}\\right)$, and their product $-40$ is $(-1)^3 \\cdot \\dfrac{80}{2}$.",
      "general": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial of degree $n$, with $n \\ge 1$ and $a_n \\ne 0$, and let its $n$ complex roots, each counted as often as its multiplicity, be $r_1$ to $r_n$. For each whole number $k$ from $1$ to $n$, the sum of the products of the roots taken $k$ at a time is $(-1)^k\\dfrac{a_{n-k}}{a_n}$. So the sum of the roots is $-\\dfrac{a_{n-1}}{a_n}$, the sum of the products of the roots taken two at a time is $\\dfrac{a_{n-2}}{a_n}$, and the product of all $n$ roots is $(-1)^n\\dfrac{a_0}{a_n}$. These are **Vieta's formulas**."
    },
    {
      "name": "Elementary symmetric sums",
      "concrete": "For the numbers $6$, $-3$ and $7$, the sum is $10$, the sum of the products two at a time is $6 \\cdot (-3) + (-3) \\cdot 7 + 7 \\cdot 6 = 3$, and the product is $-126$. The sum of their squares, $36 + 9 + 49 = 94$, is $10^2 - 2 \\cdot 3$. The sum of their reciprocals, $\\dfrac{1}{6} - \\dfrac{1}{3} + \\dfrac{1}{7} = -\\dfrac{1}{42}$, is $\\dfrac{3}{-126}$.",
      "general": "For numbers $r_1$ to $r_n$ and each whole number $k$ from $1$ to $n$, the sum of the products of the numbers taken $k$ at a time, each choice of $k$ of the numbers counted once, is one of their **elementary symmetric sums**. For three numbers $r$, $s$ and $t$ these are $r + s + t$, $rs + st + tr$ and $rst$. The sum of their squares is $r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$, and, when $rst \\ne 0$, the sum of their reciprocals is $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\dfrac{rs + st + tr}{rst}$."
    }
  ],
  "kinds": [
    {
      "id": "t204-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $rs + st + tr$, where $r$, $s$ and $t$ are the roots of $7x^3 - 5x^2 - 4x - 16 = 0$.",
            "lines": [
              {
                "step": "Find $rs + st + tr$, where $r$, $s$ and $t$ are the roots of $7x^3 - 5x^2 - 4x - 16 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$rs + st + tr = (-1)^2 \\cdot \\left(-\\dfrac{4}{7}\\right)$",
                "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient $7$."
              },
              {
                "step": "$rs + st + tr = -\\dfrac{4}{7}$",
                "reason": "Sign of a power of a negative number: $(-1)^2 = 1$, so the value is the fraction itself."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $r + s + t$, where $r$, $s$ and $t$ are the roots of $5x^3 - 4x^2 - 4x + 18 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/5",
              "lines": [
                {
                  "step": "Find $r + s + t$, where $r$, $s$ and $t$ are the roots of $5x^3 - 4x^2 - 4x + 18 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r + s + t = (-1)^1 \\cdot \\left(-\\dfrac{4}{5}\\right)$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient $5$."
                },
                {
                  "step": "$r + s + t = \\dfrac{4}{5}$",
                  "reason": "Sign of a power of a negative number: $(-1)^1 = -1$, so the value is the fraction with its sign changed."
                }
              ]
            },
            {
              "prompt": "Find $rst + rsu + rtu + stu$, where $r$, $s$, $t$ and $u$ are the roots of $7x^4 - 16x^3 - 5x^2 + 10x + 9 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-10/7",
              "lines": [
                {
                  "step": "Find $rst + rsu + rtu + stu$, where $r$, $s$, $t$ and $u$ are the roots of $7x^4 - 16x^3 - 5x^2 + 10x + 9 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$rst + rsu + rtu + stu = (-1)^3 \\cdot \\dfrac{10}{7}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken three at a time is $(-1)^3$ times the coefficient of $x$ over the leading coefficient $7$."
                },
                {
                  "step": "$rst + rsu + rtu + stu = -\\dfrac{10}{7}$",
                  "reason": "Sign of a power of a negative number: $(-1)^3 = -1$, so the value is the fraction with its sign changed."
                }
              ]
            },
            {
              "prompt": "Find $rst$, where $r$, $s$ and $t$ are the roots of $8x^3 + 2x^2 + 19x - 5 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/8",
              "lines": [
                {
                  "step": "Find $rst$, where $r$, $s$ and $t$ are the roots of $8x^3 + 2x^2 + 19x - 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$rst = (-1)^3 \\cdot \\left(-\\dfrac{5}{8}\\right)$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient $8$."
                },
                {
                  "step": "$rst = \\dfrac{5}{8}$",
                  "reason": "Sign of a power of a negative number: $(-1)^3 = -1$, so the value is the fraction with its sign changed."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t204-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the other two complex roots of $3x^3 + 49x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $-7 + 2i\\sqrt{6}$ is a root.",
            "lines": [
              {
                "step": "Find the other two complex roots of $3x^3 + 49x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $-7 + 2i\\sqrt{6}$ is a root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate $-7 - 2i\\sqrt{6}$ of $-7 + 2i\\sqrt{6}$ is also a root.",
                "reason": "Conjugate roots: the coefficients are real and $-7 + 2i\\sqrt{6}$ is not real, so its conjugate is a root too."
              },
              {
                "step": "The third root $t$ satisfies $(-7 + 2i\\sqrt{6}) + (-7 - 2i\\sqrt{6}) + t = -\\dfrac{49}{3}$.",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{49}{3} = -\\dfrac{49}{3}$."
              },
              {
                "step": "$-14 + t = -\\dfrac{49}{3}$",
                "reason": "A number plus its conjugate is $2a$: here the real part is $-7$, so the two numbers add up to $-14$."
              },
              {
                "step": "$t = -\\dfrac{7}{3}$",
                "reason": "Adding the same number to both sides: $14$ is added to each side."
              },
              {
                "step": "The other two roots are $-7 - 2i\\sqrt{6}$ and $-\\dfrac{7}{3}$.",
                "reason": "Answering the question asked: the conjugate from line 2 and the third root from line 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other two complex roots of $2x^3 + 49x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $-8 + i\\sqrt{2}$ is a root.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-8-i*sqrt(2), -17/2}",
              "lines": [
                {
                  "step": "Find the other two complex roots of $2x^3 + 49x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $-8 + i\\sqrt{2}$ is a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-8 - i\\sqrt{2}$ of $-8 + i\\sqrt{2}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $-8 + i\\sqrt{2}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The third root $t$ satisfies $(-8 + i\\sqrt{2}) + (-8 - i\\sqrt{2}) + t = -\\dfrac{49}{2}$.",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{49}{2} = -\\dfrac{49}{2}$."
                },
                {
                  "step": "$-16 + t = -\\dfrac{49}{2}$",
                  "reason": "A number plus its conjugate is $2a$: here the real part is $-8$, so the two numbers add up to $-16$."
                },
                {
                  "step": "$t = -\\dfrac{17}{2}$",
                  "reason": "Adding the same number to both sides: $16$ is added to each side."
                },
                {
                  "step": "The other two roots are $-8 - i\\sqrt{2}$ and $-\\dfrac{17}{2}$.",
                  "reason": "Answering the question asked: the conjugate from line 2 and the third root from line 5."
                }
              ]
            },
            {
              "prompt": "Find the other two complex roots of $5x^3 - 84x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $11 + 4i\\sqrt{7}$ is a root.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{11-4*i*sqrt(7), -26/5}",
              "lines": [
                {
                  "step": "Find the other two complex roots of $5x^3 - 84x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $11 + 4i\\sqrt{7}$ is a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $11 - 4i\\sqrt{7}$ of $11 + 4i\\sqrt{7}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $11 + 4i\\sqrt{7}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The third root $t$ satisfies $(11 + 4i\\sqrt{7}) + (11 - 4i\\sqrt{7}) + t = \\dfrac{84}{5}$.",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{84}{5}\\right) = \\dfrac{84}{5}$."
                },
                {
                  "step": "$22 + t = \\dfrac{84}{5}$",
                  "reason": "A number plus its conjugate is $2a$: here the real part is $11$, so the two numbers add up to $22$."
                },
                {
                  "step": "$t = -\\dfrac{26}{5}$",
                  "reason": "Adding the same number to both sides: $-22$ is added to each side."
                },
                {
                  "step": "The other two roots are $11 - 4i\\sqrt{7}$ and $-\\dfrac{26}{5}$.",
                  "reason": "Answering the question asked: the conjugate from line 2 and the third root from line 5."
                }
              ]
            },
            {
              "prompt": "Find the other two complex roots of $3x^3 - 46x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $9 - 3i\\sqrt{5}$ is a root.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{9+3*i*sqrt(5), -8/3}",
              "lines": [
                {
                  "step": "Find the other two complex roots of $3x^3 - 46x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, given that $9 - 3i\\sqrt{5}$ is a root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $9 + 3i\\sqrt{5}$ of $9 - 3i\\sqrt{5}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $9 - 3i\\sqrt{5}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The third root $t$ satisfies $(9 - 3i\\sqrt{5}) + (9 + 3i\\sqrt{5}) + t = \\dfrac{46}{3}$.",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{46}{3}\\right) = \\dfrac{46}{3}$."
                },
                {
                  "step": "$18 + t = \\dfrac{46}{3}$",
                  "reason": "A number plus its conjugate is $2a$: here the real part is $9$, so the two numbers add up to $18$."
                },
                {
                  "step": "$t = -\\dfrac{8}{3}$",
                  "reason": "Adding the same number to both sides: $-18$ is added to each side."
                },
                {
                  "step": "The other two roots are $9 + 3i\\sqrt{5}$ and $-\\dfrac{8}{3}$.",
                  "reason": "Answering the question asked: the conjugate from line 2 and the third root from line 5."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$, where $b$ and $c$ are real numbers, given that $8 - 2i\\sqrt{7}$ is a root of $3x^3 - 38x^2 + bx + c = 0$.",
            "lines": [
              {
                "step": "Find $b$, where $b$ and $c$ are real numbers, given that $8 - 2i\\sqrt{7}$ is a root of $3x^3 - 38x^2 + bx + c = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The conjugate $8 + 2i\\sqrt{7}$ of $8 - 2i\\sqrt{7}$ is also a root.",
                "reason": "Conjugate roots: the coefficients are real and $8 - 2i\\sqrt{7}$ is not real, so its conjugate is a root too."
              },
              {
                "step": "The third root $t$ satisfies $(8 - 2i\\sqrt{7}) + (8 + 2i\\sqrt{7}) + t = \\dfrac{38}{3}$.",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{38}{3}\\right) = \\dfrac{38}{3}$."
              },
              {
                "step": "$16 + t = \\dfrac{38}{3}$",
                "reason": "A number plus its conjugate is $2a$: here the real part is $8$, so the two numbers add up to $16$."
              },
              {
                "step": "$t = -\\dfrac{10}{3}$",
                "reason": "Adding the same number to both sides: $-16$ is added to each side."
              },
              {
                "step": "$(8 - 2i\\sqrt{7})(8 + 2i\\sqrt{7}) = 92$",
                "reason": "A number times its conjugate is $a^2 + b^2$: here the real part squared plus the imaginary part squared, $8^2 + 28 = 92$."
              },
              {
                "step": "$\\dfrac{b}{3} = (8 - 2i\\sqrt{7})(8 + 2i\\sqrt{7}) + t\\left((8 - 2i\\sqrt{7}) + (8 + 2i\\sqrt{7})\\right)$",
                "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient $3$."
              },
              {
                "step": "$\\dfrac{b}{3} = 92 + \\left(-\\dfrac{10}{3}\\right) \\cdot 16$",
                "reason": "Substitution: line 6 gives the product of the pair, line 5 the third root, and the pair adds up to $16$ as in line 4."
              },
              {
                "step": "$\\dfrac{b}{3} = \\dfrac{116}{3}$",
                "reason": "Order of operations, from arithmetic: the product is worked out first, then the sum."
              },
              {
                "step": "$b = 116$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, where $b$ and $c$ are real numbers, given that $2 + 4i\\sqrt{2}$ is a root of $4x^3 + 11x^2 + bx + c = 0$.",
              "form": "Answer as an integer.",
              "answer": "36",
              "lines": [
                {
                  "step": "Find $b$, where $b$ and $c$ are real numbers, given that $2 + 4i\\sqrt{2}$ is a root of $4x^3 + 11x^2 + bx + c = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $2 - 4i\\sqrt{2}$ of $2 + 4i\\sqrt{2}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $2 + 4i\\sqrt{2}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The third root $t$ satisfies $(2 + 4i\\sqrt{2}) + (2 - 4i\\sqrt{2}) + t = -\\dfrac{11}{4}$.",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{11}{4} = -\\dfrac{11}{4}$."
                },
                {
                  "step": "$4 + t = -\\dfrac{11}{4}$",
                  "reason": "A number plus its conjugate is $2a$: here the real part is $2$, so the two numbers add up to $4$."
                },
                {
                  "step": "$t = -\\dfrac{27}{4}$",
                  "reason": "Adding the same number to both sides: $-4$ is added to each side."
                },
                {
                  "step": "$(2 + 4i\\sqrt{2})(2 - 4i\\sqrt{2}) = 36$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: here the real part squared plus the imaginary part squared, $2^2 + 32 = 36$."
                },
                {
                  "step": "$\\dfrac{b}{4} = (2 + 4i\\sqrt{2})(2 - 4i\\sqrt{2}) + t\\left((2 + 4i\\sqrt{2}) + (2 - 4i\\sqrt{2})\\right)$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient $4$."
                },
                {
                  "step": "$\\dfrac{b}{4} = 36 + \\left(-\\dfrac{27}{4}\\right) \\cdot 4$",
                  "reason": "Substitution: line 6 gives the product of the pair, line 5 the third root, and the pair adds up to $4$ as in line 4."
                },
                {
                  "step": "$\\dfrac{b}{4} = 9$",
                  "reason": "Order of operations, from arithmetic: the product is worked out first, then the sum."
                },
                {
                  "step": "$b = 36$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4$."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $b$ and $c$ are real numbers, given that $-10 + 7i$ is a root of $3x^3 + 67x^2 + bx + c = 0$.",
              "form": "Answer as an integer.",
              "answer": "587",
              "lines": [
                {
                  "step": "Find $b$, where $b$ and $c$ are real numbers, given that $-10 + 7i$ is a root of $3x^3 + 67x^2 + bx + c = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $-10 - 7i$ of $-10 + 7i$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $-10 + 7i$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The third root $t$ satisfies $(-10 + 7i) + (-10 - 7i) + t = -\\dfrac{67}{3}$.",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{67}{3} = -\\dfrac{67}{3}$."
                },
                {
                  "step": "$-20 + t = -\\dfrac{67}{3}$",
                  "reason": "A number plus its conjugate is $2a$: here the real part is $-10$, so the two numbers add up to $-20$."
                },
                {
                  "step": "$t = -\\dfrac{7}{3}$",
                  "reason": "Adding the same number to both sides: $20$ is added to each side."
                },
                {
                  "step": "$(-10 + 7i)(-10 - 7i) = 149$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: here the real part squared plus the imaginary part squared, $(-10)^2 + 49 = 149$."
                },
                {
                  "step": "$\\dfrac{b}{3} = (-10 + 7i)(-10 - 7i) + t\\left((-10 + 7i) + (-10 - 7i)\\right)$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient $3$."
                },
                {
                  "step": "$\\dfrac{b}{3} = 149 + \\left(-\\dfrac{7}{3}\\right) \\cdot (-20)$",
                  "reason": "Substitution: line 6 gives the product of the pair, line 5 the third root, and the pair adds up to $-20$ as in line 4."
                },
                {
                  "step": "$\\dfrac{b}{3} = \\dfrac{587}{3}$",
                  "reason": "Order of operations, from arithmetic: the product is worked out first, then the sum."
                },
                {
                  "step": "$b = 587$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $3$."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $b$ and $c$ are real numbers, given that $6 + i\\sqrt{5}$ is a root of $6x^3 - 73x^2 + bx + c = 0$.",
              "form": "Answer as an integer.",
              "answer": "258",
              "lines": [
                {
                  "step": "Find $b$, where $b$ and $c$ are real numbers, given that $6 + i\\sqrt{5}$ is a root of $6x^3 - 73x^2 + bx + c = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The conjugate $6 - i\\sqrt{5}$ of $6 + i\\sqrt{5}$ is also a root.",
                  "reason": "Conjugate roots: the coefficients are real and $6 + i\\sqrt{5}$ is not real, so its conjugate is a root too."
                },
                {
                  "step": "The third root $t$ satisfies $(6 + i\\sqrt{5}) + (6 - i\\sqrt{5}) + t = \\dfrac{73}{6}$.",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{73}{6}\\right) = \\dfrac{73}{6}$."
                },
                {
                  "step": "$12 + t = \\dfrac{73}{6}$",
                  "reason": "A number plus its conjugate is $2a$: here the real part is $6$, so the two numbers add up to $12$."
                },
                {
                  "step": "$t = \\dfrac{1}{6}$",
                  "reason": "Adding the same number to both sides: $-12$ is added to each side."
                },
                {
                  "step": "$(6 + i\\sqrt{5})(6 - i\\sqrt{5}) = 41$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: here the real part squared plus the imaginary part squared, $6^2 + 5 = 41$."
                },
                {
                  "step": "$\\dfrac{b}{6} = (6 + i\\sqrt{5})(6 - i\\sqrt{5}) + t\\left((6 + i\\sqrt{5}) + (6 - i\\sqrt{5})\\right)$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient $6$."
                },
                {
                  "step": "$\\dfrac{b}{6} = 41 + \\dfrac{1}{6} \\cdot 12$",
                  "reason": "Substitution: line 6 gives the product of the pair, line 5 the third root, and the pair adds up to $12$ as in line 4."
                },
                {
                  "step": "$\\dfrac{b}{6} = 43$",
                  "reason": "Order of operations, from arithmetic: the product is worked out first, then the sum."
                },
                {
                  "step": "$b = 258$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $6$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t204-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $b$, given that the three roots of $8x^3 - 156x^2 + bx - 2015 = 0$ form an arithmetic sequence.",
            "lines": [
              {
                "step": "Find $b$, given that the three roots of $8x^3 - 156x^2 + bx - 2015 = 0$ form an arithmetic sequence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the roots be $r$, $s$ and $t$ in the order of the sequence, so that $r + t = 2s$.",
                "reason": "A term midway between two others is their mean: $s$ is the mean of $r$ and $t$."
              },
              {
                "step": "$r + s + t = \\dfrac{39}{2}$",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{156}{8}\\right) = \\dfrac{39}{2}$."
              },
              {
                "step": "$3s = \\dfrac{39}{2}$",
                "reason": "Substitution: $2s$ from line 2 takes the place of $r + t$ in line 3."
              },
              {
                "step": "$s = \\dfrac{13}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$8 \\cdot \\left(\\dfrac{13}{2}\\right)^3 - 156 \\cdot \\left(\\dfrac{13}{2}\\right)^2 + b \\cdot \\dfrac{13}{2} - 2015 = 0$",
                "reason": "Substituting a value: $s$ is a root, so the left side is $0$ at $x = \\dfrac{13}{2}$."
              },
              {
                "step": "$\\dfrac{13}{2}b - 6409 = 0$",
                "reason": "Order of operations, from arithmetic: the powers, then the products, then the sums of the numbers are worked out."
              },
              {
                "step": "$\\dfrac{13}{2}b = 6409$",
                "reason": "Adding the same number to both sides: $6409$ is added to each side."
              },
              {
                "step": "$b = 986$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{13}{2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, given that the three roots of $8x^3 + 108x^2 + bx + 477 = 0$ form an arithmetic sequence.",
              "form": "Answer as an integer.",
              "answer": "430",
              "lines": [
                {
                  "step": "Find $b$, given that the three roots of $8x^3 + 108x^2 + bx + 477 = 0$ form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $r$, $s$ and $t$ in the order of the sequence, so that $r + t = 2s$.",
                  "reason": "A term midway between two others is their mean: $s$ is the mean of $r$ and $t$."
                },
                {
                  "step": "$r + s + t = -\\dfrac{27}{2}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{108}{8} = -\\dfrac{27}{2}$."
                },
                {
                  "step": "$3s = -\\dfrac{27}{2}$",
                  "reason": "Substitution: $2s$ from line 2 takes the place of $r + t$ in line 3."
                },
                {
                  "step": "$s = -\\dfrac{9}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$8 \\cdot \\left(-\\dfrac{9}{2}\\right)^3 + 108 \\cdot \\left(-\\dfrac{9}{2}\\right)^2 + b \\cdot \\left(-\\dfrac{9}{2}\\right) + 477 = 0$",
                  "reason": "Substituting a value: $s$ is a root, so the left side is $0$ at $x = -\\dfrac{9}{2}$."
                },
                {
                  "step": "$-\\dfrac{9}{2}b + 1935 = 0$",
                  "reason": "Order of operations, from arithmetic: the powers, then the products, then the sums of the numbers are worked out."
                },
                {
                  "step": "$-\\dfrac{9}{2}b = -1935$",
                  "reason": "Adding the same number to both sides: $-1935$ is added to each side."
                },
                {
                  "step": "$b = 430$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{9}{2}$."
                }
              ]
            },
            {
              "prompt": "Find $b$, given that the three roots of $8x^3 - 204x^2 + bx - 4522 = 0$ form an arithmetic sequence.",
              "form": "Answer as an integer.",
              "answer": "1688",
              "lines": [
                {
                  "step": "Find $b$, given that the three roots of $8x^3 - 204x^2 + bx - 4522 = 0$ form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $r$, $s$ and $t$ in the order of the sequence, so that $r + t = 2s$.",
                  "reason": "A term midway between two others is their mean: $s$ is the mean of $r$ and $t$."
                },
                {
                  "step": "$r + s + t = \\dfrac{51}{2}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{204}{8}\\right) = \\dfrac{51}{2}$."
                },
                {
                  "step": "$3s = \\dfrac{51}{2}$",
                  "reason": "Substitution: $2s$ from line 2 takes the place of $r + t$ in line 3."
                },
                {
                  "step": "$s = \\dfrac{17}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$8 \\cdot \\left(\\dfrac{17}{2}\\right)^3 - 204 \\cdot \\left(\\dfrac{17}{2}\\right)^2 + b \\cdot \\dfrac{17}{2} - 4522 = 0$",
                  "reason": "Substituting a value: $s$ is a root, so the left side is $0$ at $x = \\dfrac{17}{2}$."
                },
                {
                  "step": "$\\dfrac{17}{2}b - 14{,}348 = 0$",
                  "reason": "Order of operations, from arithmetic: the powers, then the products, then the sums of the numbers are worked out."
                },
                {
                  "step": "$\\dfrac{17}{2}b = 14{,}348$",
                  "reason": "Adding the same number to both sides: $14{,}348$ is added to each side."
                },
                {
                  "step": "$b = 1688$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{17}{2}$."
                }
              ]
            },
            {
              "prompt": "Find $b$, given that the three roots of $8x^3 - 276x^2 + bx - 11{,}362 = 0$ form an arithmetic sequence.",
              "form": "Answer as an integer.",
              "answer": "3104",
              "lines": [
                {
                  "step": "Find $b$, given that the three roots of $8x^3 - 276x^2 + bx - 11{,}362 = 0$ form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $r$, $s$ and $t$ in the order of the sequence, so that $r + t = 2s$.",
                  "reason": "A term midway between two others is their mean: $s$ is the mean of $r$ and $t$."
                },
                {
                  "step": "$r + s + t = \\dfrac{69}{2}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{276}{8}\\right) = \\dfrac{69}{2}$."
                },
                {
                  "step": "$3s = \\dfrac{69}{2}$",
                  "reason": "Substitution: $2s$ from line 2 takes the place of $r + t$ in line 3."
                },
                {
                  "step": "$s = \\dfrac{23}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$8 \\cdot \\left(\\dfrac{23}{2}\\right)^3 - 276 \\cdot \\left(\\dfrac{23}{2}\\right)^2 + b \\cdot \\dfrac{23}{2} - 11{,}362 = 0$",
                  "reason": "Substituting a value: $s$ is a root, so the left side is $0$ at $x = \\dfrac{23}{2}$."
                },
                {
                  "step": "$\\dfrac{23}{2}b - 35{,}696 = 0$",
                  "reason": "Order of operations, from arithmetic: the powers, then the products, then the sums of the numbers are worked out."
                },
                {
                  "step": "$\\dfrac{23}{2}b = 35{,}696$",
                  "reason": "Adding the same number to both sides: $35{,}696$ is added to each side."
                },
                {
                  "step": "$b = 3104$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{23}{2}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the roots of $2x^3 + 24x^2 + 48x - 64 = 0$, given that they form an arithmetic sequence.",
            "lines": [
              {
                "step": "Find the roots of $2x^3 + 24x^2 + 48x - 64 = 0$, given that they form an arithmetic sequence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the roots be $s - d$, $s$ and $s + d$, where $d$ is the common difference.",
                "reason": "Arithmetic sequence: each term after the first is the term before it plus the common difference $d$."
              },
              {
                "step": "$(s - d) + s + (s + d) = -12$",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{24}{2} = -12$."
              },
              {
                "step": "$3s = -12$",
                "reason": "Collecting like terms: $-d$ and $d$ add up to $0$."
              },
              {
                "step": "$s = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$(s - d) \\cdot s \\cdot (s + d) = 32$",
                "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{64}{2}\\right) = 32$."
              },
              {
                "step": "$s(s^2 - d^2) = 32$",
                "reason": "Difference of squares: $(s - d)(s + d) = s^2 - d^2$."
              },
              {
                "step": "$-4\\left((-4)^2 - d^2\\right) = 32$",
                "reason": "Substituting a value: line 5 gives $s = -4$."
              },
              {
                "step": "$(-4)^2 - d^2 = -8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
              },
              {
                "step": "$d^2 = 24$",
                "reason": "Isolating the variable: $d^2$ is added to both sides and the number on the right taken from both sides."
              },
              {
                "step": "So $d = 2\\sqrt{6}$ or $d = -2\\sqrt{6}$.",
                "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here the square is $d^2$."
              },
              {
                "step": "The roots are $-4 - 2\\sqrt{6}$, $-4$ and $-4 + 2\\sqrt{6}$.",
                "reason": "Substituting a value: either value of $d$ gives the same three numbers $s - d$, $s$ and $s + d$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the roots of $2x^3 - 54x^2 + 450x - 1134 = 0$, given that they form an arithmetic sequence.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{9-3*sqrt(2), 9, 9+3*sqrt(2)}",
              "lines": [
                {
                  "step": "Find the roots of $2x^3 - 54x^2 + 450x - 1134 = 0$, given that they form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $s - d$, $s$ and $s + d$, where $d$ is the common difference.",
                  "reason": "Arithmetic sequence: each term after the first is the term before it plus the common difference $d$."
                },
                {
                  "step": "$(s - d) + s + (s + d) = 27$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{54}{2}\\right) = 27$."
                },
                {
                  "step": "$3s = 27$",
                  "reason": "Collecting like terms: $-d$ and $d$ add up to $0$."
                },
                {
                  "step": "$s = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$(s - d) \\cdot s \\cdot (s + d) = 567$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{1134}{2}\\right) = 567$."
                },
                {
                  "step": "$s(s^2 - d^2) = 567$",
                  "reason": "Difference of squares: $(s - d)(s + d) = s^2 - d^2$."
                },
                {
                  "step": "$9\\left(9^2 - d^2\\right) = 567$",
                  "reason": "Substituting a value: line 5 gives $s = 9$."
                },
                {
                  "step": "$9^2 - d^2 = 63$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "$d^2 = 18$",
                  "reason": "Isolating the variable: $d^2$ is added to both sides and the number on the right taken from both sides."
                },
                {
                  "step": "So $d = 3\\sqrt{2}$ or $d = -3\\sqrt{2}$.",
                  "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here the square is $d^2$."
                },
                {
                  "step": "The roots are $9 - 3\\sqrt{2}$, $9$ and $9 + 3\\sqrt{2}$.",
                  "reason": "Substituting a value: either value of $d$ gives the same three numbers $s - d$, $s$ and $s + d$."
                }
              ]
            },
            {
              "prompt": "Find the roots of $3x^3 - 108x^2 + 1275x - 4932 = 0$, given that they form an arithmetic sequence.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{12-sqrt(7), 12, 12+sqrt(7)}",
              "lines": [
                {
                  "step": "Find the roots of $3x^3 - 108x^2 + 1275x - 4932 = 0$, given that they form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $s - d$, $s$ and $s + d$, where $d$ is the common difference.",
                  "reason": "Arithmetic sequence: each term after the first is the term before it plus the common difference $d$."
                },
                {
                  "step": "$(s - d) + s + (s + d) = 36$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{108}{3}\\right) = 36$."
                },
                {
                  "step": "$3s = 36$",
                  "reason": "Collecting like terms: $-d$ and $d$ add up to $0$."
                },
                {
                  "step": "$s = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$(s - d) \\cdot s \\cdot (s + d) = 1644$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{4932}{3}\\right) = 1644$."
                },
                {
                  "step": "$s(s^2 - d^2) = 1644$",
                  "reason": "Difference of squares: $(s - d)(s + d) = s^2 - d^2$."
                },
                {
                  "step": "$12\\left(12^2 - d^2\\right) = 1644$",
                  "reason": "Substituting a value: line 5 gives $s = 12$."
                },
                {
                  "step": "$12^2 - d^2 = 137$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                },
                {
                  "step": "$d^2 = 7$",
                  "reason": "Isolating the variable: $d^2$ is added to both sides and the number on the right taken from both sides."
                },
                {
                  "step": "So $d = \\sqrt{7}$ or $d = -\\sqrt{7}$.",
                  "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here the square is $d^2$."
                },
                {
                  "step": "The roots are $12 - \\sqrt{7}$, $12$ and $12 + \\sqrt{7}$.",
                  "reason": "Substituting a value: either value of $d$ gives the same three numbers $s - d$, $s$ and $s + d$."
                }
              ]
            },
            {
              "prompt": "Find the roots of $4x^3 - 84x^2 + 384x + 56 = 0$, given that they form an arithmetic sequence.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7-sqrt(51), 7, 7+sqrt(51)}",
              "lines": [
                {
                  "step": "Find the roots of $4x^3 - 84x^2 + 384x + 56 = 0$, given that they form an arithmetic sequence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $s - d$, $s$ and $s + d$, where $d$ is the common difference.",
                  "reason": "Arithmetic sequence: each term after the first is the term before it plus the common difference $d$."
                },
                {
                  "step": "$(s - d) + s + (s + d) = 21$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{84}{4}\\right) = 21$."
                },
                {
                  "step": "$3s = 21$",
                  "reason": "Collecting like terms: $-d$ and $d$ add up to $0$."
                },
                {
                  "step": "$s = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$(s - d) \\cdot s \\cdot (s + d) = -14$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\dfrac{56}{4} = -14$."
                },
                {
                  "step": "$s(s^2 - d^2) = -14$",
                  "reason": "Difference of squares: $(s - d)(s + d) = s^2 - d^2$."
                },
                {
                  "step": "$7\\left(7^2 - d^2\\right) = -14$",
                  "reason": "Substituting a value: line 5 gives $s = 7$."
                },
                {
                  "step": "$7^2 - d^2 = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$d^2 = 51$",
                  "reason": "Isolating the variable: $d^2$ is added to both sides and the number on the right taken from both sides."
                },
                {
                  "step": "So $d = \\sqrt{51}$ or $d = -\\sqrt{51}$.",
                  "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here the square is $d^2$."
                },
                {
                  "step": "The roots are $7 - \\sqrt{51}$, $7$ and $7 + \\sqrt{51}$.",
                  "reason": "Substituting a value: either value of $d$ gives the same three numbers $s - d$, $s$ and $s + d$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t204-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: Three numbers add up to $22$, the three products of two of them add up to $9$, and the three numbers multiply to $-40$.",
            "lines": [
              {
                "step": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: Three numbers add up to $22$, the three products of two of them add up to $9$, and the three numbers multiply to $-40$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the roots is $22$, so the coefficient of $x^2$ is $-22$.",
                "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$."
              },
              {
                "step": "The sum of the products of the roots taken two at a time is $9$, so the coefficient of $x$ is $9$.",
                "reason": "Vieta's formulas: with leading coefficient $1$, that sum is $(-1)^2$ times the coefficient of $x$."
              },
              {
                "step": "The product of the roots is $-40$, so the constant term is $40$.",
                "reason": "Vieta's formulas: with leading coefficient $1$, the product of the roots is $(-1)^3$ times the constant term."
              },
              {
                "step": "$x^3 - 22x^2 + 9x + 40 = 0$",
                "reason": "Writing a sentence as an equation: the terms go in the order of the powers of $x$, with $0$ on the right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: The product of three numbers is $3$, their sum is $-14$, and the sum of the products of the numbers taken two at a time is $-19$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^3+14*x^2-19*x-3 = 0",
              "lines": [
                {
                  "step": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: The product of three numbers is $3$, their sum is $-14$, and the sum of the products of the numbers taken two at a time is $-19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $-14$, so the coefficient of $x^2$ is $14$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$."
                },
                {
                  "step": "The sum of the products of the roots taken two at a time is $-19$, so the coefficient of $x$ is $-19$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, that sum is $(-1)^2$ times the coefficient of $x$."
                },
                {
                  "step": "The product of the roots is $3$, so the constant term is $-3$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the product of the roots is $(-1)^3$ times the constant term."
                },
                {
                  "step": "$x^3 + 14x^2 - 19x - 3 = 0$",
                  "reason": "Writing a sentence as an equation: the terms go in the order of the powers of $x$, with $0$ on the right."
                }
              ]
            },
            {
              "prompt": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: Three numbers have the sum $13$ and the product $-29$, and the products of the pairs among them have the sum $25$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^3-13*x^2+25*x+29 = 0",
              "lines": [
                {
                  "step": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: Three numbers have the sum $13$ and the product $-29$, and the products of the pairs among them have the sum $25$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $13$, so the coefficient of $x^2$ is $-13$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$."
                },
                {
                  "step": "The sum of the products of the roots taken two at a time is $25$, so the coefficient of $x$ is $25$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, that sum is $(-1)^2$ times the coefficient of $x$."
                },
                {
                  "step": "The product of the roots is $-29$, so the constant term is $29$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the product of the roots is $(-1)^3$ times the constant term."
                },
                {
                  "step": "$x^3 - 13x^2 + 25x + 29 = 0$",
                  "reason": "Writing a sentence as an equation: the terms go in the order of the powers of $x$, with $0$ on the right."
                }
              ]
            },
            {
              "prompt": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: The products of the pairs of three numbers add up to $39$, the numbers themselves add up to $30$, and their product is $46$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^3-30*x^2+39*x-46 = 0",
              "lines": [
                {
                  "step": "Write a cubic equation in $x$ whose three roots are the numbers in this sentence, with $x^3$ as its first term and $0$ on the right: The products of the pairs of three numbers add up to $39$, the numbers themselves add up to $30$, and their product is $46$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $30$, so the coefficient of $x^2$ is $-30$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$."
                },
                {
                  "step": "The sum of the products of the roots taken two at a time is $39$, so the coefficient of $x$ is $39$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, that sum is $(-1)^2$ times the coefficient of $x$."
                },
                {
                  "step": "The product of the roots is $46$, so the constant term is $-46$.",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the product of the roots is $(-1)^3$ times the constant term."
                },
                {
                  "step": "$x^3 - 30x^2 + 39x - 46 = 0$",
                  "reason": "Writing a sentence as an equation: the terms go in the order of the powers of $x$, with $0$ on the right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t204-k5",
      "forms": [
        {
          "example": {
            "problem": "Find $r^2 + s^2 + t^2$, where $r$, $s$ and $t$ are the roots of $9x^3 - 14x^2 - 11x + 2 = 0$.",
            "lines": [
              {
                "step": "Find $r^2 + s^2 + t^2$, where $r$, $s$ and $t$ are the roots of $9x^3 - 14x^2 - 11x + 2 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(r + s + t)^2 = r^2 + rs + rt + rs + s^2 + st + rt + st + t^2$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$(r + s + t)^2 = r^2 + s^2 + t^2 + 2rs + 2st + 2tr$",
                "reason": "Collecting like terms: each product of two different roots comes twice."
              },
              {
                "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                "reason": "Elementary symmetric sums: $2rs + 2st + 2tr$, which is $2(rs + st + tr)$, is taken from both sides, so the sum of the squares is written with the sum of the roots and the sum of their products taken two at a time."
              },
              {
                "step": "$r + s + t = \\dfrac{14}{9}$",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{14}{9}\\right) = \\dfrac{14}{9}$."
              },
              {
                "step": "$rs + st + tr = -\\dfrac{11}{9}$",
                "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{11}{9}\\right) = -\\dfrac{11}{9}$."
              },
              {
                "step": "$r^2 + s^2 + t^2 = \\left(\\dfrac{14}{9}\\right)^2 - 2 \\cdot \\left(-\\dfrac{11}{9}\\right)$",
                "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
              },
              {
                "step": "$r^2 + s^2 + t^2 = \\dfrac{394}{81}$",
                "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $r^2 + s^2 + t^2$, where $r$, $s$ and $t$ are the roots of $7x^3 - 16x^2 - 4x - 13 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "312/49",
              "lines": [
                {
                  "step": "Find $r^2 + s^2 + t^2$, where $r$, $s$ and $t$ are the roots of $7x^3 - 16x^2 - 4x - 13 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + s + t)^2 = r^2 + rs + rt + rs + s^2 + st + rt + st + t^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + s + t)^2 = r^2 + s^2 + t^2 + 2rs + 2st + 2tr$",
                  "reason": "Collecting like terms: each product of two different roots comes twice."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                  "reason": "Elementary symmetric sums: $2rs + 2st + 2tr$, which is $2(rs + st + tr)$, is taken from both sides, so the sum of the squares is written with the sum of the roots and the sum of their products taken two at a time."
                },
                {
                  "step": "$r + s + t = \\dfrac{16}{7}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{16}{7}\\right) = \\dfrac{16}{7}$."
                },
                {
                  "step": "$rs + st + tr = -\\dfrac{4}{7}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{4}{7}\\right) = -\\dfrac{4}{7}$."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\left(\\dfrac{16}{7}\\right)^2 - 2 \\cdot \\left(-\\dfrac{4}{7}\\right)$",
                  "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\dfrac{312}{49}$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $r^2 + s^2 + t^2 + u^2$, where $r$, $s$, $t$ and $u$ are the roots of $7x^4 - 19x^3 + 18x^2 - 18x + 5 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "109/49",
              "lines": [
                {
                  "step": "Find $r^2 + s^2 + t^2 + u^2$, where $r$, $s$, $t$ and $u$ are the roots of $7x^4 - 19x^3 + 18x^2 - 18x + 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + s + t + u)^2 = r^2 + rs + rt + ru + rs + s^2 + st + su + rt + st + t^2 + tu + ru + su + tu + u^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + s + t + u)^2 = r^2 + s^2 + t^2 + u^2 + 2rs + 2rt + 2ru + 2st + 2su + 2tu$",
                  "reason": "Collecting like terms: each product of two different roots comes twice."
                },
                {
                  "step": "$r^2 + s^2 + t^2 + u^2 = (r + s + t + u)^2 - 2(rs + rt + ru + st + su + tu)$",
                  "reason": "Elementary symmetric sums: $2rs + 2rt + 2ru + 2st + 2su + 2tu$, which is $2(rs + rt + ru + st + su + tu)$, is taken from both sides, so the sum of the squares is written with the sum of the roots and the sum of their products taken two at a time."
                },
                {
                  "step": "$r + s + t + u = \\dfrac{19}{7}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^3$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{19}{7}\\right) = \\dfrac{19}{7}$."
                },
                {
                  "step": "$rs + rt + ru + st + su + tu = \\dfrac{18}{7}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^2 \\cdot \\dfrac{18}{7} = \\dfrac{18}{7}$."
                },
                {
                  "step": "$r^2 + s^2 + t^2 + u^2 = \\left(\\dfrac{19}{7}\\right)^2 - 2 \\cdot \\left(\\dfrac{18}{7}\\right)$",
                  "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
                },
                {
                  "step": "$r^2 + s^2 + t^2 + u^2 = \\dfrac{109}{49}$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $r^2 + s^2 + t^2$, where $r$, $s$ and $t$ are the roots of $7x^3 - 15x^2 - 17x + 10 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "463/49",
              "lines": [
                {
                  "step": "Find $r^2 + s^2 + t^2$, where $r$, $s$ and $t$ are the roots of $7x^3 - 15x^2 - 17x + 10 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + s + t)^2 = r^2 + rs + rt + rs + s^2 + st + rt + st + t^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + s + t)^2 = r^2 + s^2 + t^2 + 2rs + 2st + 2tr$",
                  "reason": "Collecting like terms: each product of two different roots comes twice."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                  "reason": "Elementary symmetric sums: $2rs + 2st + 2tr$, which is $2(rs + st + tr)$, is taken from both sides, so the sum of the squares is written with the sum of the roots and the sum of their products taken two at a time."
                },
                {
                  "step": "$r + s + t = \\dfrac{15}{7}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{15}{7}\\right) = \\dfrac{15}{7}$."
                },
                {
                  "step": "$rs + st + tr = -\\dfrac{17}{7}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{17}{7}\\right) = -\\dfrac{17}{7}$."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\left(\\dfrac{15}{7}\\right)^2 - 2 \\cdot \\left(-\\dfrac{17}{7}\\right)$",
                  "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\dfrac{463}{49}$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $3x^3 - 14x^2 + 4x - 15 = 0$.",
            "lines": [
              {
                "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $3x^3 - 14x^2 + 4x - 15 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\dfrac{rs + st + tr}{rst}$",
                "reason": "Elementary symmetric sums: over the common denominator $rst$, which is not $0$ because the constant term is not $0$, the top is the sum of the products of the roots taken two at a time."
              },
              {
                "step": "$rs + st + tr = \\dfrac{4}{3}$",
                "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\dfrac{4}{3} = \\dfrac{4}{3}$."
              },
              {
                "step": "$rst = 5$",
                "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{15}{3}\\right) = 5$."
              },
              {
                "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\left(\\dfrac{4}{3}\\right) \\div \\left(5\\right)$",
                "reason": "Substituting a value: lines 3 and 4 give the top and the bottom, each put in brackets."
              },
              {
                "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\dfrac{4}{15}$",
                "reason": "Order of operations, from arithmetic: the quotient is worked out and written in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} + \\dfrac{1}{u}$, where $r$, $s$, $t$ and $u$ are the roots of $5x^4 - 12x^3 + 14x^2 + 15x - 17 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15/17",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} + \\dfrac{1}{u}$, where $r$, $s$, $t$ and $u$ are the roots of $5x^4 - 12x^3 + 14x^2 + 15x - 17 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} + \\dfrac{1}{u} = \\dfrac{rst + rsu + rtu + stu}{rstu}$",
                  "reason": "Elementary symmetric sums: over the common denominator $rstu$, which is not $0$ because the constant term is not $0$, the top is the sum of the products of the roots taken three at a time."
                },
                {
                  "step": "$rst + rsu + rtu + stu = -3$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken three at a time is $(-1)^3$ times the coefficient of $x$ over the leading coefficient, $(-1)^3 \\cdot \\dfrac{15}{5} = -3$."
                },
                {
                  "step": "$rstu = -\\dfrac{17}{5}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^4$ times the constant term over the leading coefficient, $(-1)^4 \\cdot \\left(-\\dfrac{17}{5}\\right) = -\\dfrac{17}{5}$."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} + \\dfrac{1}{u} = \\left(-3\\right) \\div \\left(-\\dfrac{17}{5}\\right)$",
                  "reason": "Substituting a value: lines 3 and 4 give the top and the bottom, each put in brackets."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} + \\dfrac{1}{u} = \\dfrac{15}{17}$",
                  "reason": "Order of operations, from arithmetic: the quotient is worked out and written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr}$, where $r$, $s$ and $t$ are the roots of $8x^3 + 2x^2 - 16x - 17 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2/17",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr}$, where $r$, $s$ and $t$ are the roots of $8x^3 + 2x^2 - 16x - 17 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr} = \\dfrac{r + s + t}{rst}$",
                  "reason": "Elementary symmetric sums: over the common denominator $rst$, which is not $0$ because the constant term is not $0$, the top is the sum of the roots."
                },
                {
                  "step": "$r + s + t = -\\dfrac{1}{4}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{2}{8} = -\\dfrac{1}{4}$."
                },
                {
                  "step": "$rst = \\dfrac{17}{8}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{17}{8}\\right) = \\dfrac{17}{8}$."
                },
                {
                  "step": "$\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr} = \\left(-\\dfrac{1}{4}\\right) \\div \\left(\\dfrac{17}{8}\\right)$",
                  "reason": "Substituting a value: lines 3 and 4 give the top and the bottom, each put in brackets."
                },
                {
                  "step": "$\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr} = -\\dfrac{2}{17}$",
                  "reason": "Order of operations, from arithmetic: the quotient is worked out and written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $7x^3 + 17x^2 - 17x - 8 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-17/8",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $7x^3 + 17x^2 - 17x - 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\dfrac{rs + st + tr}{rst}$",
                  "reason": "Elementary symmetric sums: over the common denominator $rst$, which is not $0$ because the constant term is not $0$, the top is the sum of the products of the roots taken two at a time."
                },
                {
                  "step": "$rs + st + tr = -\\dfrac{17}{7}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{17}{7}\\right) = -\\dfrac{17}{7}$."
                },
                {
                  "step": "$rst = \\dfrac{8}{7}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{8}{7}\\right) = \\dfrac{8}{7}$."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\left(-\\dfrac{17}{7}\\right) \\div \\left(\\dfrac{8}{7}\\right)$",
                  "reason": "Substituting a value: lines 3 and 4 give the top and the bottom, each put in brackets."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = -\\dfrac{17}{8}$",
                  "reason": "Order of operations, from arithmetic: the quotient is worked out and written in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $(9 - r)(9 - s)(9 - t)$, where $r$, $s$ and $t$ are the roots of $7x^3 - 15x^2 - 6x - 11 = 0$.",
            "lines": [
              {
                "step": "Find $(9 - r)(9 - s)(9 - t)$, where $r$, $s$ and $t$ are the roots of $7x^3 - 15x^2 - 6x - 11 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(9 - r)(9 - s) = 81 - 9r - 9s + rs$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$(9 - r)(9 - s)(9 - t) = 729 - 81r - 81s + 9rs - 81t + 9rt + 9st - rst$",
                "reason": "Every term of one bracket times every term of the other: each term of line 2 times $9$, then times $-t$."
              },
              {
                "step": "$(9 - r)(9 - s)(9 - t) = 729 - 81(r + s + t) + 9(rs + st + tr) - rst$",
                "reason": "Elementary symmetric sums: the terms are grouped into the sum of the roots, the sum of their products taken two at a time and their product, with the common factors taken out."
              },
              {
                "step": "$r + s + t = \\dfrac{15}{7}$",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{15}{7}\\right) = \\dfrac{15}{7}$."
              },
              {
                "step": "$rs + st + tr = -\\dfrac{6}{7}$",
                "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{6}{7}\\right) = -\\dfrac{6}{7}$."
              },
              {
                "step": "$rst = \\dfrac{11}{7}$",
                "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{11}{7}\\right) = \\dfrac{11}{7}$."
              },
              {
                "step": "$(9 - r)(9 - s)(9 - t) = 729 - 81 \\cdot \\left(\\dfrac{15}{7}\\right) + 9 \\cdot \\left(-\\dfrac{6}{7}\\right) - \\left(\\dfrac{11}{7}\\right)$",
                "reason": "Substituting a value: lines 5 to 7 give the three sums, each put in brackets."
              },
              {
                "step": "$(9 - r)(9 - s)(9 - t) = \\dfrac{3823}{7}$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $(r + 7)(s + 7)(t + 7)$, where $r$, $s$ and $t$ are the roots of $8x^3 + 13x^2 - 3x - 5 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2091/8",
              "lines": [
                {
                  "step": "Find $(r + 7)(s + 7)(t + 7)$, where $r$, $s$ and $t$ are the roots of $8x^3 + 13x^2 - 3x - 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + 7)(s + 7) = rs + 7r + 7s + 49$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + 7)(s + 7)(t + 7) = rst + 7rt + 7st + 49t + 7rs + 49r + 49s + 343$",
                  "reason": "Every term of one bracket times every term of the other: each term of line 2 times $t$, then times $7$."
                },
                {
                  "step": "$(r + 7)(s + 7)(t + 7) = rst + 7(rs + st + tr) + 49(r + s + t) + 343$",
                  "reason": "Elementary symmetric sums: the terms are grouped into the sum of the roots, the sum of their products taken two at a time and their product, with the common factors taken out."
                },
                {
                  "step": "$r + s + t = -\\dfrac{13}{8}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{13}{8} = -\\dfrac{13}{8}$."
                },
                {
                  "step": "$rs + st + tr = -\\dfrac{3}{8}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{3}{8}\\right) = -\\dfrac{3}{8}$."
                },
                {
                  "step": "$rst = \\dfrac{5}{8}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{5}{8}\\right) = \\dfrac{5}{8}$."
                },
                {
                  "step": "$(r + 7)(s + 7)(t + 7) = \\left(\\dfrac{5}{8}\\right) + 7 \\cdot \\left(-\\dfrac{3}{8}\\right) + 49 \\cdot \\left(-\\dfrac{13}{8}\\right) + 343$",
                  "reason": "Substituting a value: lines 5 to 7 give the three sums, each put in brackets."
                },
                {
                  "step": "$(r + 7)(s + 7)(t + 7) = \\dfrac{2091}{8}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
                }
              ]
            },
            {
              "prompt": "Find $(3 - r)(3 - s)(3 - t)$, where $r$, $s$ and $t$ are the roots of $2x^3 - 2x^2 - 13x - 15 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-9",
              "lines": [
                {
                  "step": "Find $(3 - r)(3 - s)(3 - t)$, where $r$, $s$ and $t$ are the roots of $2x^3 - 2x^2 - 13x - 15 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3 - r)(3 - s) = 9 - 3r - 3s + rs$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(3 - r)(3 - s)(3 - t) = 27 - 9r - 9s + 3rs - 9t + 3rt + 3st - rst$",
                  "reason": "Every term of one bracket times every term of the other: each term of line 2 times $3$, then times $-t$."
                },
                {
                  "step": "$(3 - r)(3 - s)(3 - t) = 27 - 9(r + s + t) + 3(rs + st + tr) - rst$",
                  "reason": "Elementary symmetric sums: the terms are grouped into the sum of the roots, the sum of their products taken two at a time and their product, with the common factors taken out."
                },
                {
                  "step": "$r + s + t = 1$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{2}{2}\\right) = 1$."
                },
                {
                  "step": "$rs + st + tr = -\\dfrac{13}{2}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{13}{2}\\right) = -\\dfrac{13}{2}$."
                },
                {
                  "step": "$rst = \\dfrac{15}{2}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{15}{2}\\right) = \\dfrac{15}{2}$."
                },
                {
                  "step": "$(3 - r)(3 - s)(3 - t) = 27 - 9 \\cdot \\left(1\\right) + 3 \\cdot \\left(-\\dfrac{13}{2}\\right) - \\left(\\dfrac{15}{2}\\right)$",
                  "reason": "Substituting a value: lines 5 to 7 give the three sums, each put in brackets."
                },
                {
                  "step": "$(3 - r)(3 - s)(3 - t) = -9$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
                }
              ]
            },
            {
              "prompt": "Find $(r + 4)(s + 4)(t + 4)$, where $r$, $s$ and $t$ are the roots of $8x^3 + 14x^2 - 19x - 6 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "109/4",
              "lines": [
                {
                  "step": "Find $(r + 4)(s + 4)(t + 4)$, where $r$, $s$ and $t$ are the roots of $8x^3 + 14x^2 - 19x - 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + 4)(s + 4) = rs + 4r + 4s + 16$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + 4)(s + 4)(t + 4) = rst + 4rt + 4st + 16t + 4rs + 16r + 16s + 64$",
                  "reason": "Every term of one bracket times every term of the other: each term of line 2 times $t$, then times $4$."
                },
                {
                  "step": "$(r + 4)(s + 4)(t + 4) = rst + 4(rs + st + tr) + 16(r + s + t) + 64$",
                  "reason": "Elementary symmetric sums: the terms are grouped into the sum of the roots, the sum of their products taken two at a time and their product, with the common factors taken out."
                },
                {
                  "step": "$r + s + t = -\\dfrac{7}{4}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{14}{8} = -\\dfrac{7}{4}$."
                },
                {
                  "step": "$rs + st + tr = -\\dfrac{19}{8}$",
                  "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$ over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{19}{8}\\right) = -\\dfrac{19}{8}$."
                },
                {
                  "step": "$rst = \\dfrac{3}{4}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\left(-\\dfrac{6}{8}\\right) = \\dfrac{3}{4}$."
                },
                {
                  "step": "$(r + 4)(s + 4)(t + 4) = \\left(\\dfrac{3}{4}\\right) + 4 \\cdot \\left(-\\dfrac{19}{8}\\right) + 16 \\cdot \\left(-\\dfrac{7}{4}\\right) + 64$",
                  "reason": "Substituting a value: lines 5 to 7 give the three sums, each put in brackets."
                },
                {
                  "step": "$(r + 4)(s + 4)(t + 4) = \\dfrac{109}{4}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t204-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $(14 - r)(14 - s)(14 - t)$, where $r$, $s$ and $t$ are the roots of $4x^3 - 3x^2 + 7x + 8 = 0$, and write that line right.",
            "given": [
              "$(14 - r)(14 - s)(14 - t) = 2744 - 196(r + s + t) + 14(rs + st + tr) + rst$",
              "$r + s + t = \\dfrac{3}{4}$",
              "$rs + st + tr = \\dfrac{7}{4}$",
              "$rst = -2$",
              "$(14 - r)(14 - s)(14 - t) = 2744 - 196 \\cdot \\left(\\dfrac{3}{4}\\right) + 14 \\cdot \\left(\\dfrac{7}{4}\\right) + \\left(-2\\right)$",
              "$(14 - r)(14 - s)(14 - t) = \\dfrac{5239}{2}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $(14 - r)(14 - s)(14 - t)$, where $r$, $s$ and $t$ are the roots of $4x^3 - 3x^2 + 7x + 8 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 ends on $+ rst$, but the term of the product that takes $-r$, $-s$ and $-t$ is $(-r)(-s)(-t)$.",
                "reason": "A sign lost: $(-r)(-s)(-t) = (-1)^3rst = -rst$, so the last term has a minus sign."
              },
              {
                "step": "Line 1 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 1 as it is written.",
                "reason": "Transitive property: the problem and the right lines above line 1 lead one to the next, and line 1 is the first step that does not."
              },
              {
                "step": "Line 1 written right is $(14 - r)(14 - s)(14 - t) = 2744 - 196(r + s + t) + 14(rs + st + tr) - rst$",
                "reason": "Elementary symmetric sums: the terms of the product group into the sum of the roots, the sum of their products taken two at a time and their product, and the term of the product is $-rst$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $(18 - r)(18 - s)(18 - t)$, where $r$, $s$ and $t$ are the roots of $5x^3 - 3x^2 - 9x + 11 = 0$, and write that line right.",
              "given": [
                "$(18 - r)(18 - s)(18 - t) = 5832 - 324(r + s + t) + 18(rs + st + tr) - rst$",
                "$r + s + t = \\dfrac{3}{5}$",
                "$rs + st + tr = -\\dfrac{9}{5}$",
                "$rst = \\dfrac{11}{5}$",
                "$(18 - r)(18 - s)(18 - t) = 5832 - 324 \\cdot \\left(\\dfrac{3}{5}\\right) + 18 \\cdot \\left(-\\dfrac{9}{5}\\right) - \\left(\\dfrac{11}{5}\\right)$",
                "$(18 - r)(18 - s)(18 - t) = 5603$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: r*s*t = -11/5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(18 - r)(18 - s)(18 - t)$, where $r$, $s$ and $t$ are the roots of $5x^3 - 3x^2 - 9x + 11 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 gives the product of the roots as $\\dfrac{11}{5}$, which leaves out the factor $(-1)^3$.",
                  "reason": "A sign lost: the product of the three roots is $(-1)^3$ times the constant term over the leading coefficient, so the sign of that fraction changes."
                },
                {
                  "step": "Line 4 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 4 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 4 lead one to the next, and line 4 is the first step that does not."
                },
                {
                  "step": "Line 4 written right is $rst = -\\dfrac{11}{5}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term over the leading coefficient, $(-1)^3 \\cdot \\dfrac{11}{5} = -\\dfrac{11}{5}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $(11 - r)(11 - s)(11 - t)$, where $r$, $s$ and $t$ are the roots of $6x^3 - 11x^2 - 12x + 2 = 0$, and write that line right.",
              "given": [
                "$(11 - r)(11 - s)(11 - t) = 1331 - 121(r + s + t) + 11(rs + st + tr) - rst$",
                "$r + s + t = -\\dfrac{11}{6}$",
                "$rs + st + tr = -2$",
                "$rst = -\\dfrac{1}{3}$",
                "$(11 - r)(11 - s)(11 - t) = 1331 - 121 \\cdot \\left(-\\dfrac{11}{6}\\right) + 11 \\cdot \\left(-2\\right) - \\left(-\\dfrac{1}{3}\\right)$",
                "$(11 - r)(11 - s)(11 - t) = \\dfrac{9187}{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: r+s+t = 11/6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(11 - r)(11 - s)(11 - t)$, where $r$, $s$ and $t$ are the roots of $6x^3 - 11x^2 - 12x + 2 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives the sum of the roots as $-\\dfrac{11}{6}$, which leaves out the factor $(-1)^1$.",
                  "reason": "A sign lost: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, so the sign of that fraction changes."
                },
                {
                  "step": "Line 2 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 2 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 2 lead one to the next, and line 2 is the first step that does not."
                },
                {
                  "step": "Line 2 written right is $r + s + t = \\dfrac{11}{6}$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^2$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{11}{6}\\right) = \\dfrac{11}{6}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $(20 - r)(20 - s)(20 - t)$, where $r$, $s$ and $t$ are the roots of $5x^3 + 2x^2 + 14x + 8 = 0$, and write that line right.",
              "given": [
                "$(20 - r)(20 - s)(20 - t) = 8000 - 400(r + s + t) + 20(rs + st + tr) - rst$",
                "$r + s + t = -\\dfrac{2}{5}$",
                "$rs + st + tr = \\dfrac{14}{5}$",
                "$rst = -\\dfrac{8}{5}$",
                "$(20 - r)(20 - s)(20 - t) = 8000 - 400 \\cdot \\left(\\dfrac{2}{5}\\right) + 20 \\cdot \\left(\\dfrac{14}{5}\\right) - \\left(-\\dfrac{8}{5}\\right)$",
                "$(20 - r)(20 - s)(20 - t) = \\dfrac{39{,}488}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (20-r)*(20-s)*(20-t) = 8000-400*(-2/5)+20*(14/5)-(-8/5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(20 - r)(20 - s)(20 - t)$, where $r$, $s$ and $t$ are the roots of $5x^3 + 2x^2 + 14x + 8 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 puts in $\\left(\\dfrac{2}{5}\\right)$ for the sum of the roots, but line 2 gives $-\\dfrac{2}{5}$.",
                  "reason": "A sign lost: each value goes in with its own sign, in brackets."
                },
                {
                  "step": "Line 5 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 5 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 5 lead one to the next, and line 5 is the first step that does not."
                },
                {
                  "step": "Line 5 written right is $(20 - r)(20 - s)(20 - t) = 8000 - 400 \\cdot \\left(-\\dfrac{2}{5}\\right) + 20 \\cdot \\left(\\dfrac{14}{5}\\right) - \\left(-\\dfrac{8}{5}\\right)$",
                  "reason": "Substituting a value: lines 2 to 4 give the three sums, each put in brackets with its sign."
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
      "id": "t204-p1",
      "method": "direct proof",
      "statement": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial of degree $n$, with $n \\ge 1$ and $a_n \\ne 0$, whose $n$ complex roots, each counted as often as its multiplicity, are $r_1$ to $r_n$. Then for each whole number $k$ from $1$ to $n$, the sum of the products of the roots taken $k$ at a time is $(-1)^k\\dfrac{a_{n-k}}{a_n}$.",
      "idea": "Write $f(x)$ as $a_n$ times the brackets $x - r_1$ to $x - r_n$ and multiply the brackets out by taking one term from each. A product that takes $k$ of the roots carries $(-1)^k$ and $x^{n-k}$, so the coefficient of $x^{n-k}$ is $a_n(-1)^k$ times the sum of the products of the roots taken $k$ at a time. The two ways of writing $f(x)$ have the same coefficients.",
      "lines": [
        {
          "line": "For every number $x$, $f(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$.",
          "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, is its leading coefficient times the brackets of its $n$ roots, each counted as often as its multiplicity."
        },
        {
          "line": "Multiplied out, the product $(x - r_1)(x - r_2)\\cdots(x - r_n)$ is the sum of all the products made by taking one term from each bracket, either $x$ or the negative of its root.",
          "reason": "Each term of a product comes from one term of each factor: each bracket gives one of its two terms to every product."
        },
        {
          "line": "A product that takes the negative of a root from $k$ brackets and $x$ from the other $n - k$ brackets has the factor $x^{n-k}$.",
          "reason": "Product law: the $n - k$ factors $x$ multiply to $x^{n-k}$."
        },
        {
          "line": "Such a product is $(-1)^k$ times the product of the $k$ roots it takes, times $x^{n-k}$.",
          "reason": "The commutative and associative laws of multiplication, from arithmetic: the $k$ factors $-1$ are gathered into $(-1)^k$."
        },
        {
          "line": "Each choice of $k$ of the $n$ brackets gives one such product, so the terms with $x^{n-k}$ add up to $(-1)^k$ times the sum of the products of the roots taken $k$ at a time, times $x^{n-k}$.",
          "reason": "Collecting like terms: the distributive law takes out the common factor $(-1)^kx^{n-k}$."
        },
        {
          "line": "The product that takes $x$ from every bracket is $x^n$.",
          "reason": "Product law: the $n$ factors $x$ multiply to $x^n$."
        },
        {
          "line": "So for every number $x$, $f(x)$ is $a_nx^n$ plus, for each $k$ from $1$ to $n$, $a_n(-1)^k$ times the sum of the products of the roots taken $k$ at a time, times $x^{n-k}$.",
          "reason": "The distributive law, from arithmetic: $a_n$ of line 1 multiplies each term of the product, which lines 5 and 6 give."
        },
        {
          "line": "For every number $x$, the difference of $a_nx^n + a_{n-1}x^{n-1} + \\dots + a_0$ and the right side of line 7 is $0$.",
          "reason": "Substitution: both are $f(x)$, by the statement and by line 7."
        },
        {
          "line": "That difference is the zero polynomial.",
          "reason": "Zero polynomial: the difference has degree at most $n$ and, by line 8, is $0$ at $n + 1$ different numbers."
        },
        {
          "line": "For each $k$ from $1$ to $n$, $a_{n-k}$ equals $a_n(-1)^k$ times the sum of the products of the roots taken $k$ at a time.",
          "reason": "Zero polynomial: every coefficient of the difference is $0$, and its coefficient of $x^{n-k}$ is $a_{n-k}$ minus the coefficient of $x^{n-k}$ in line 7."
        },
        {
          "line": "So $\\dfrac{a_{n-k}}{a_n}$ is $(-1)^k$ times the sum of the products of the roots taken $k$ at a time.",
          "reason": "Dividing both sides by a nonzero number: both sides of line 10 are divided by $a_n \\ne 0$."
        },
        {
          "line": "So $(-1)^k\\dfrac{a_{n-k}}{a_n}$ is $(-1)^k \\cdot (-1)^k$ times the sum of the products of the roots taken $k$ at a time.",
          "reason": "Multiplying both sides by the same number: both sides of line 11 are multiplied by $(-1)^k$."
        },
        {
          "line": "$(-1)^k \\cdot (-1)^k = 1$",
          "reason": "Sign of a power of a negative number: $(-1)^k \\cdot (-1)^k = (-1)^{2k}$, an even power of $-1$."
        },
        {
          "line": "So the sum of the products of the roots taken $k$ at a time is $(-1)^k\\dfrac{a_{n-k}}{a_n}$.",
          "reason": "Substitution: line 13 takes the place of $(-1)^k \\cdot (-1)^k$ in line 12."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t204-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$, if the three roots of $x^3 + ax^2 + bx + c = 0$, in some order, form an arithmetic sequence, then $2a^3 - 9ab + 27c = 0$. Facts it may use: Vieta's formulas, a term midway between two others is their mean, root of an equation, substituting a value, substitution, dividing both sides by a nonzero number, multiplying both sides by the same number, power of a quotient, sign of a power of a negative number, product law, the product formula, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let the roots be $r$, $s$ and $t$, in the order of the sequence.",
            "reason": "The hypothesis: the three roots form an arithmetic sequence in some order."
          },
          {
            "line": "$r + t = 2s$",
            "reason": "A term midway between two others is their mean: $s$ is the mean of $r$ and $t$, so twice $s$ is their sum."
          },
          {
            "line": "$r + s + t = -a$",
            "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient $a$ of $x^2$ over the leading coefficient $1$."
          },
          {
            "line": "$3s = -a$",
            "reason": "Substitution: line 2 takes the place of $r + t$ in line 3."
          },
          {
            "line": "$s = -\\dfrac{a}{3}$",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
          },
          {
            "line": "$s^3 + as^2 + bs + c = 0$",
            "reason": "Root of an equation: the root $s$ makes the equation true."
          },
          {
            "line": "$\\left(-\\dfrac{a}{3}\\right)^3 + a\\left(-\\dfrac{a}{3}\\right)^2 + b\\left(-\\dfrac{a}{3}\\right) + c = 0$",
            "reason": "Substituting a value: line 5 gives $s$, put in brackets."
          },
          {
            "line": "$\\dfrac{(-a)^3}{27} + a \\cdot \\dfrac{(-a)^2}{9} + b\\left(-\\dfrac{a}{3}\\right) + c = 0$",
            "reason": "Power of a quotient: each power of $-\\dfrac{a}{3}$ is that power of $-a$ over that power of $3$."
          },
          {
            "line": "$-\\dfrac{a^3}{27} + a \\cdot \\dfrac{a^2}{9} + b\\left(-\\dfrac{a}{3}\\right) + c = 0$",
            "reason": "Sign of a power of a negative number: $(-a)^3 = -a^3$ and $(-a)^2 = a^2$."
          },
          {
            "line": "$-\\dfrac{a^3}{27} + \\dfrac{a^3}{9} + b\\left(-\\dfrac{a}{3}\\right) + c = 0$",
            "reason": "Product law: $a \\cdot a^2 = a^3$."
          },
          {
            "line": "$-\\dfrac{a^3}{27} + \\dfrac{a^3}{9} - \\dfrac{ab}{3} + c = 0$",
            "reason": "The product formula, from arithmetic: $b$ times $-\\dfrac{a}{3}$ is $-\\dfrac{ab}{3}$."
          },
          {
            "line": "$-a^3 + 3a^3 - 9ab + 27c = 0$",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $27$."
          },
          {
            "line": "$2a^3 - 9ab + 27c = 0$",
            "reason": "Collecting like terms: $-a^3 + 3a^3 = 2a^3$."
          }
        ]
      }
    },
    {
      "id": "t204-s2",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$ with $c \\ne 0$, if $r$, $s$ and $t$ are the roots of $x^3 + ax^2 + bx + c = 0$, then $\\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} = \\dfrac{b^2 - 2ac}{c^2}$. Facts it may use: Vieta's formulas, Elementary symmetric sums, the assumptions on multiplication, every term of one bracket times every term of the other, the product formula, collecting like terms, adding the same number to both sides, substitution, power of a quotient, sign of a power of a negative number, single fraction.",
      "check": {
        "proof": [
          {
            "line": "$r + s + t = -a$",
            "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient $a$ over the leading coefficient $1$."
          },
          {
            "line": "$rs + st + tr = b$",
            "reason": "Vieta's formulas: the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient $b$ over the leading coefficient $1$."
          },
          {
            "line": "$rst = -c$",
            "reason": "Vieta's formulas: the product of the roots is $(-1)^3$ times the constant term $c$ over the leading coefficient $1$."
          },
          {
            "line": "$r \\ne 0$, $s \\ne 0$ and $t \\ne 0$",
            "reason": "Assumptions on multiplication, from arithmetic: if one root were $0$, the product $rst$ would be $0$, but by line 3 it is $-c$, which is not $0$."
          },
          {
            "line": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = \\dfrac{rs + st + tr}{rst}$",
            "reason": "Elementary symmetric sums: over the common denominator $rst$, not $0$ by line 4, the top is the sum of the products of the roots taken two at a time."
          },
          {
            "line": "$\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t} = -\\dfrac{b}{c}$",
            "reason": "Substitution: lines 2 and 3 give the top $b$ and the bottom $-c$."
          },
          {
            "line": "$\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr} = \\dfrac{r + s + t}{rst}$",
            "reason": "Elementary symmetric sums: over the common denominator $rst$, the top is the sum of the roots."
          },
          {
            "line": "$\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr} = \\dfrac{a}{c}$",
            "reason": "Substitution: lines 1 and 3 give the top $-a$ and the bottom $-c$."
          },
          {
            "line": "$\\left(\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}\\right)^2 = \\dfrac{1}{r} \\cdot \\dfrac{1}{r} + \\dfrac{1}{r} \\cdot \\dfrac{1}{s} + \\dfrac{1}{r} \\cdot \\dfrac{1}{t} + \\dfrac{1}{s} \\cdot \\dfrac{1}{r} + \\dfrac{1}{s} \\cdot \\dfrac{1}{s} + \\dfrac{1}{s} \\cdot \\dfrac{1}{t} + \\dfrac{1}{t} \\cdot \\dfrac{1}{r} + \\dfrac{1}{t} \\cdot \\dfrac{1}{s} + \\dfrac{1}{t} \\cdot \\dfrac{1}{t}$",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "$\\left(\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}\\right)^2 = \\dfrac{1}{r^2} + \\dfrac{1}{rs} + \\dfrac{1}{rt} + \\dfrac{1}{sr} + \\dfrac{1}{s^2} + \\dfrac{1}{st} + \\dfrac{1}{tr} + \\dfrac{1}{ts} + \\dfrac{1}{t^2}$",
            "reason": "The product formula, from arithmetic: tops multiply and bottoms multiply."
          },
          {
            "line": "$\\left(\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}\\right)^2 = \\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} + 2\\left(\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr}\\right)$",
            "reason": "Collecting like terms: each fraction with two different roots below comes twice."
          },
          {
            "line": "$\\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} = \\left(\\dfrac{1}{r} + \\dfrac{1}{s} + \\dfrac{1}{t}\\right)^2 - 2\\left(\\dfrac{1}{rs} + \\dfrac{1}{st} + \\dfrac{1}{tr}\\right)$",
            "reason": "Adding the same number to both sides: the doubled sum of line 11 is taken from both sides."
          },
          {
            "line": "$\\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} = \\left(-\\dfrac{b}{c}\\right)^2 - 2 \\cdot \\dfrac{a}{c}$",
            "reason": "Substitution: lines 6 and 8 take the place of the two sums in line 12."
          },
          {
            "line": "$\\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} = \\dfrac{(-b)^2}{c^2} - 2 \\cdot \\dfrac{a}{c}$",
            "reason": "Power of a quotient: $\\left(-\\dfrac{b}{c}\\right)^2$ is the square of $-b$ over the square of $c$."
          },
          {
            "line": "$\\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} = \\dfrac{b^2}{c^2} - 2 \\cdot \\dfrac{a}{c}$",
            "reason": "Sign of a power of a negative number: $(-b)^2 = b^2$."
          },
          {
            "line": "$\\dfrac{1}{r^2} + \\dfrac{1}{s^2} + \\dfrac{1}{t^2} = \\dfrac{b^2 - 2ac}{c^2}$",
            "reason": "Single fraction: over the common denominator $c^2$, the term $2 \\cdot \\dfrac{a}{c}$ becomes $\\dfrac{2ac}{c^2}$."
          }
        ]
      }
    }
  ]
}
