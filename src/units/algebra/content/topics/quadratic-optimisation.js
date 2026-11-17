export default {
  "number": 156,
  "title": "Greatest and least values of a quadratic",
  "section": 9,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "439-446, 448-450"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the greatest value of $-2x^2 - 22x + 23$ for a real number $x$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "167/2",
    "solution": [
      "Find the greatest value of $-2x^2 - 22x + 23$ for a real number $x$.",
      "$-2x^2 - 22x + 23 = -2(x^2 + 11x) + 23$",
      "$-2x^2 - 22x + 23 = -2\\left(x + \\dfrac{11}{2}\\right)^2 + \\dfrac{167}{2}$",
      "The square $\\left(x + \\dfrac{11}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{11}{2}$.",
      "So the value is greatest at $x = -\\dfrac{11}{2}$, where $-2\\left(x + \\dfrac{11}{2}\\right)^2$ is $0$.",
      "The greatest value is $\\dfrac{167}{2}$."
    ]
  },
  "ideas": [
    {
      "name": "Greatest and least values of a quadratic",
      "concrete": "Completing the square gives $3x^2 - 30x + 61 = 3(x - 5)^2 - 14$. The square $(x - 5)^2$ is at least $0$ and is $0$ only at $x = 5$, so $3x^2 - 30x + 61$ is at least $-14$, and equals $-14$ at $x = 5$. Its least value is $-14$, at $x = 5 = -\\dfrac{-30}{2 \\cdot 3}$. It has no greatest value: at $x = 5 + n$ it is $3n^2 - 14$, which grows past every number as the whole number $n$ grows.",
      "general": "For real numbers $a$, $b$ and $c$ with $a \\ne 0$, the quadratic $ax^2 + bx + c$ has its **least value** at $x = -\\dfrac{b}{2a}$ when $a > 0$, and its **greatest value** at $x = -\\dfrac{b}{2a}$ when $a < 0$. That value is $c - \\dfrac{b^2}{4a}$. To find it, complete the square and use the Trivial Inequality. If the quadratic has real roots $r$ and $s$, then $\\dfrac{r + s}{2} = -\\dfrac{b}{2a}$: the least value (for $a > 0$) or the greatest value (for $a < 0$) is at the **mean of the roots**."
    }
  ],
  "kinds": [
    {
      "id": "t156-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the least value of $x^2 - 23x + 33$ for a real number $x$.",
            "lines": [
              {
                "step": "Find the least value of $x^2 - 23x + 33$ for a real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 23x + 33 = \\left(x - \\dfrac{23}{2}\\right)^2 - \\dfrac{397}{4}$",
                "reason": "Completing the square: half of $-23$ is $-\\dfrac{23}{2}$, and its square, $\\dfrac{529}{4}$, is added and taken away."
              },
              {
                "step": "The square $\\left(x - \\dfrac{23}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{23}{2}$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "So $x^2 - 23x + 33 \\ge -\\dfrac{397}{4}$, with equality at $x = \\dfrac{23}{2}$.",
                "reason": "Adding the same number: $-\\dfrac{397}{4}$ is added to both sides of $\\left(x - \\dfrac{23}{2}\\right)^2 \\ge 0$."
              },
              {
                "step": "The least value is $-\\dfrac{397}{4}$.",
                "reason": "A greatest value needs a bound and a case that reaches it: no value is below $-\\dfrac{397}{4}$, and $x = \\dfrac{23}{2}$ gives $-\\dfrac{397}{4}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $x^2 - 7x - 37$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-197/4",
              "lines": [
                {
                  "step": "Find the least value of $x^2 - 7x - 37$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 7x - 37 = \\left(x - \\dfrac{7}{2}\\right)^2 - \\dfrac{197}{4}$",
                  "reason": "Completing the square: half of $-7$ is $-\\dfrac{7}{2}$, and its square, $\\dfrac{49}{4}$, is added and taken away."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{7}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{7}{2}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So $x^2 - 7x - 37 \\ge -\\dfrac{197}{4}$, with equality at $x = \\dfrac{7}{2}$.",
                  "reason": "Adding the same number: $-\\dfrac{197}{4}$ is added to both sides of $\\left(x - \\dfrac{7}{2}\\right)^2 \\ge 0$."
                },
                {
                  "step": "The least value is $-\\dfrac{197}{4}$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no value is below $-\\dfrac{197}{4}$, and $x = \\dfrac{7}{2}$ gives $-\\dfrac{197}{4}$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $x^2 - 19x - 32$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-489/4",
              "lines": [
                {
                  "step": "Find the least value of $x^2 - 19x - 32$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 19x - 32 = \\left(x - \\dfrac{19}{2}\\right)^2 - \\dfrac{489}{4}$",
                  "reason": "Completing the square: half of $-19$ is $-\\dfrac{19}{2}$, and its square, $\\dfrac{361}{4}$, is added and taken away."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{19}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{19}{2}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So $x^2 - 19x - 32 \\ge -\\dfrac{489}{4}$, with equality at $x = \\dfrac{19}{2}$.",
                  "reason": "Adding the same number: $-\\dfrac{489}{4}$ is added to both sides of $\\left(x - \\dfrac{19}{2}\\right)^2 \\ge 0$."
                },
                {
                  "step": "The least value is $-\\dfrac{489}{4}$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no value is below $-\\dfrac{489}{4}$, and $x = \\dfrac{19}{2}$ gives $-\\dfrac{489}{4}$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $x^2 - 17x + 14$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-233/4",
              "lines": [
                {
                  "step": "Find the least value of $x^2 - 17x + 14$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 17x + 14 = \\left(x - \\dfrac{17}{2}\\right)^2 - \\dfrac{233}{4}$",
                  "reason": "Completing the square: half of $-17$ is $-\\dfrac{17}{2}$, and its square, $\\dfrac{289}{4}$, is added and taken away."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{17}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{17}{2}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So $x^2 - 17x + 14 \\ge -\\dfrac{233}{4}$, with equality at $x = \\dfrac{17}{2}$.",
                  "reason": "Adding the same number: $-\\dfrac{233}{4}$ is added to both sides of $\\left(x - \\dfrac{17}{2}\\right)^2 \\ge 0$."
                },
                {
                  "step": "The least value is $-\\dfrac{233}{4}$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no value is below $-\\dfrac{233}{4}$, and $x = \\dfrac{17}{2}$ gives $-\\dfrac{233}{4}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $-4x^2 - 32x - 53$ for a real number $x$.",
            "lines": [
              {
                "step": "Find the greatest value of $-4x^2 - 32x - 53$ for a real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4x^2 - 32x - 53 = -4(x^2 + 8x) - 53$",
                "reason": "Taking out a common factor: $-4$ is taken out of the two terms with $x$."
              },
              {
                "step": "$-4x^2 - 32x - 53 = -4(x + 4)^2 + 11$",
                "reason": "Completing the square: $16$ is added inside the bracket, so $-4 \\cdot 16 = -64$ is taken away outside it."
              },
              {
                "step": "The square $(x + 4)^2$ is at least $0$, and is $0$ only at $x = -4$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "So the value is greatest at $x = -4$, where $-4(x + 4)^2$ is $0$.",
                "reason": "Greatest and least values of a quadratic: the leading coefficient $-4$ is below $0$, so the value is greatest where the square is $0$."
              },
              {
                "step": "The greatest value is $11$.",
                "reason": "Substituting a value: at $x = -4$ the term $-4(x + 4)^2$ is $0$, which leaves $11$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $4x^2 - 44x + 2$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-119",
              "lines": [
                {
                  "step": "Find the least value of $4x^2 - 44x + 2$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 - 44x + 2 = 4(x^2 - 11x) + 2$",
                  "reason": "Taking out a common factor: $4$ is taken out of the two terms with $x$."
                },
                {
                  "step": "$4x^2 - 44x + 2 = 4\\left(x - \\dfrac{11}{2}\\right)^2 - 119$",
                  "reason": "Completing the square: $\\dfrac{121}{4}$ is added inside the bracket, so $4 \\cdot \\dfrac{121}{4} = 121$ is taken away outside it."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{11}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{11}{2}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So the value is least at $x = \\dfrac{11}{2}$, where $4\\left(x - \\dfrac{11}{2}\\right)^2$ is $0$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $4$ is above $0$, so the value is least where the square is $0$."
                },
                {
                  "step": "The least value is $-119$.",
                  "reason": "Substituting a value: at $x = \\dfrac{11}{2}$ the term $4\\left(x - \\dfrac{11}{2}\\right)^2$ is $0$, which leaves $-119$."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $-6x^2 + 54x + 43$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "329/2",
              "lines": [
                {
                  "step": "Find the greatest value of $-6x^2 + 54x + 43$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x^2 + 54x + 43 = -6(x^2 - 9x) + 43$",
                  "reason": "Taking out a common factor: $-6$ is taken out of the two terms with $x$."
                },
                {
                  "step": "$-6x^2 + 54x + 43 = -6\\left(x - \\dfrac{9}{2}\\right)^2 + \\dfrac{329}{2}$",
                  "reason": "Completing the square: $\\dfrac{81}{4}$ is added inside the bracket, so $-6 \\cdot \\dfrac{81}{4} = -\\dfrac{243}{2}$ is taken away outside it."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{9}{2}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{9}{2}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So the value is greatest at $x = \\dfrac{9}{2}$, where $-6\\left(x - \\dfrac{9}{2}\\right)^2$ is $0$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-6$ is below $0$, so the value is greatest where the square is $0$."
                },
                {
                  "step": "The greatest value is $\\dfrac{329}{2}$.",
                  "reason": "Substituting a value: at $x = \\dfrac{9}{2}$ the term $-6\\left(x - \\dfrac{9}{2}\\right)^2$ is $0$, which leaves $\\dfrac{329}{2}$."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $-3x^2 - 18x - 20$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the greatest value of $-3x^2 - 18x - 20$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x^2 - 18x - 20 = -3(x^2 + 6x) - 20$",
                  "reason": "Taking out a common factor: $-3$ is taken out of the two terms with $x$."
                },
                {
                  "step": "$-3x^2 - 18x - 20 = -3(x + 3)^2 + 7$",
                  "reason": "Completing the square: $9$ is added inside the bracket, so $-3 \\cdot 9 = -27$ is taken away outside it."
                },
                {
                  "step": "The square $(x + 3)^2$ is at least $0$, and is $0$ only at $x = -3$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So the value is greatest at $x = -3$, where $-3(x + 3)^2$ is $0$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-3$ is below $0$, so the value is greatest where the square is $0$."
                },
                {
                  "step": "The greatest value is $7$.",
                  "reason": "Substituting a value: at $x = -3$ the term $-3(x + 3)^2$ is $0$, which leaves $7$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $-5(x + 11)(x + 13)$ for a real number $x$.",
            "lines": [
              {
                "step": "Find the greatest value of $-5(x + 11)(x + 13)$ for a real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The expression is $0$ at $x = -11$ and at $x = -13$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "$x = \\dfrac{-11 + (-13)}{2} = -12$",
                "reason": "Greatest and least values of a quadratic: the least or greatest value of a quadratic is at the mean of its roots."
              },
              {
                "step": "$-5(-12 + 11)(-12 + 13) = -5 \\cdot (-1) \\cdot 1$",
                "reason": "Substituting a value: $x$ is replaced by its value $-12$."
              },
              {
                "step": "$-5 \\cdot (-1) \\cdot 1 = 5$",
                "reason": "Order of operations: the product is worked out from left to right."
              },
              {
                "step": "The greatest value is $5$.",
                "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the value at the mean of the roots is the greatest."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $-3(x + 15)(x - 7)$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "363",
              "lines": [
                {
                  "step": "Find the greatest value of $-3(x + 15)(x - 7)$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $0$ at $x = -15$ and at $x = 7$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{-15 + 7}{2} = -4$",
                  "reason": "Greatest and least values of a quadratic: the least or greatest value of a quadratic is at the mean of its roots."
                },
                {
                  "step": "$-3(-4 + 15)(-4 - 7) = -3 \\cdot 11 \\cdot (-11)$",
                  "reason": "Substituting a value: $x$ is replaced by its value $-4$."
                },
                {
                  "step": "$-3 \\cdot 11 \\cdot (-11) = 363$",
                  "reason": "Order of operations: the product is worked out from left to right."
                },
                {
                  "step": "The greatest value is $363$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-3$ is below $0$, so the value at the mean of the roots is the greatest."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $-5(x - 9)(x + 14)$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2645/4",
              "lines": [
                {
                  "step": "Find the greatest value of $-5(x - 9)(x + 14)$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $0$ at $x = 9$ and at $x = -14$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{9 + (-14)}{2} = -\\dfrac{5}{2}$",
                  "reason": "Greatest and least values of a quadratic: the least or greatest value of a quadratic is at the mean of its roots."
                },
                {
                  "step": "$-5\\left(-\\dfrac{5}{2} - 9\\right)\\left(-\\dfrac{5}{2} + 14\\right) = -5 \\cdot \\left(-\\dfrac{23}{2}\\right) \\cdot \\dfrac{23}{2}$",
                  "reason": "Substituting a value: $x$ is replaced by its value $-\\dfrac{5}{2}$."
                },
                {
                  "step": "$-5 \\cdot \\left(-\\dfrac{23}{2}\\right) \\cdot \\dfrac{23}{2} = \\dfrac{2645}{4}$",
                  "reason": "Order of operations: the product is worked out from left to right."
                },
                {
                  "step": "The greatest value is $\\dfrac{2645}{4}$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the value at the mean of the roots is the greatest."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $-5(x - 15)(x + 4)$ for a real number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1805/4",
              "lines": [
                {
                  "step": "Find the greatest value of $-5(x - 15)(x + 4)$ for a real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $0$ at $x = 15$ and at $x = -4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{15 + (-4)}{2} = \\dfrac{11}{2}$",
                  "reason": "Greatest and least values of a quadratic: the least or greatest value of a quadratic is at the mean of its roots."
                },
                {
                  "step": "$-5\\left(\\dfrac{11}{2} - 15\\right)\\left(\\dfrac{11}{2} + 4\\right) = -5 \\cdot \\left(-\\dfrac{19}{2}\\right) \\cdot \\dfrac{19}{2}$",
                  "reason": "Substituting a value: $x$ is replaced by its value $\\dfrac{11}{2}$."
                },
                {
                  "step": "$-5 \\cdot \\left(-\\dfrac{19}{2}\\right) \\cdot \\dfrac{19}{2} = \\dfrac{1805}{4}$",
                  "reason": "Order of operations: the product is worked out from left to right."
                },
                {
                  "step": "The greatest value is $\\dfrac{1805}{4}$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the value at the mean of the roots is the greatest."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $3x^2 - 8x + y^2 + 7y + 28$ for real numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the least value of $3x^2 - 8x + y^2 + 7y + 28$ for real numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x^2 - 8x + y^2 + 7y + 28 = 3\\left(x - \\dfrac{4}{3}\\right)^2 + \\left(y + \\dfrac{7}{2}\\right)^2 + \\dfrac{125}{12}$",
                "reason": "Completing the square, once in $x$ and once in $y$: the two squares add $\\dfrac{16}{3}$ and $\\dfrac{49}{4}$, and both are taken away again."
              },
              {
                "step": "The squares $\\left(x - \\dfrac{4}{3}\\right)^2$ and $\\left(y + \\dfrac{7}{2}\\right)^2$ are at least $0$, and both are $0$ only at $x = \\dfrac{4}{3}$, $y = -\\dfrac{7}{2}$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "$3\\left(x - \\dfrac{4}{3}\\right)^2 + \\left(y + \\dfrac{7}{2}\\right)^2 \\ge 0$",
                "reason": "Adding two inequalities: each square times a positive number is at least $0$, by multiplying by a positive number."
              },
              {
                "step": "So $3x^2 - 8x + y^2 + 7y + 28 \\ge \\dfrac{125}{12}$, with equality at $x = \\dfrac{4}{3}$, $y = -\\dfrac{7}{2}$.",
                "reason": "Adding the same number: $\\dfrac{125}{12}$ is added to both sides of the line above."
              },
              {
                "step": "The least value is $\\dfrac{125}{12}$.",
                "reason": "A greatest value needs a bound and a case that reaches it: no value is below $\\dfrac{125}{12}$, and $x = \\dfrac{4}{3}$, $y = -\\dfrac{7}{2}$ gives $\\dfrac{125}{12}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $4x^2 - 17x + 5y^2 - 16y - 10$ for real numbers $x$ and $y$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3269/80",
              "lines": [
                {
                  "step": "Find the least value of $4x^2 - 17x + 5y^2 - 16y - 10$ for real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 - 17x + 5y^2 - 16y - 10 = 4\\left(x - \\dfrac{17}{8}\\right)^2 + 5\\left(y - \\dfrac{8}{5}\\right)^2 - \\dfrac{3269}{80}$",
                  "reason": "Completing the square, once in $x$ and once in $y$: the two squares add $\\dfrac{289}{16}$ and $\\dfrac{64}{5}$, and both are taken away again."
                },
                {
                  "step": "The squares $\\left(x - \\dfrac{17}{8}\\right)^2$ and $\\left(y - \\dfrac{8}{5}\\right)^2$ are at least $0$, and both are $0$ only at $x = \\dfrac{17}{8}$, $y = \\dfrac{8}{5}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$4\\left(x - \\dfrac{17}{8}\\right)^2 + 5\\left(y - \\dfrac{8}{5}\\right)^2 \\ge 0$",
                  "reason": "Adding two inequalities: each square times a positive number is at least $0$, by multiplying by a positive number."
                },
                {
                  "step": "So $4x^2 - 17x + 5y^2 - 16y - 10 \\ge -\\dfrac{3269}{80}$, with equality at $x = \\dfrac{17}{8}$, $y = \\dfrac{8}{5}$.",
                  "reason": "Adding the same number: $-\\dfrac{3269}{80}$ is added to both sides of the line above."
                },
                {
                  "step": "The least value is $-\\dfrac{3269}{80}$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no value is below $-\\dfrac{3269}{80}$, and $x = \\dfrac{17}{8}$, $y = \\dfrac{8}{5}$ gives $-\\dfrac{3269}{80}$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $x^2 - 7x + 5y^2 + 7y - 26$ for real numbers $x$ and $y$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-407/10",
              "lines": [
                {
                  "step": "Find the least value of $x^2 - 7x + 5y^2 + 7y - 26$ for real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 7x + 5y^2 + 7y - 26 = \\left(x - \\dfrac{7}{2}\\right)^2 + 5\\left(y + \\dfrac{7}{10}\\right)^2 - \\dfrac{407}{10}$",
                  "reason": "Completing the square, once in $x$ and once in $y$: the two squares add $\\dfrac{49}{4}$ and $\\dfrac{49}{20}$, and both are taken away again."
                },
                {
                  "step": "The squares $\\left(x - \\dfrac{7}{2}\\right)^2$ and $\\left(y + \\dfrac{7}{10}\\right)^2$ are at least $0$, and both are $0$ only at $x = \\dfrac{7}{2}$, $y = -\\dfrac{7}{10}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$\\left(x - \\dfrac{7}{2}\\right)^2 + 5\\left(y + \\dfrac{7}{10}\\right)^2 \\ge 0$",
                  "reason": "Adding two inequalities: each square times a positive number is at least $0$, by multiplying by a positive number."
                },
                {
                  "step": "So $x^2 - 7x + 5y^2 + 7y - 26 \\ge -\\dfrac{407}{10}$, with equality at $x = \\dfrac{7}{2}$, $y = -\\dfrac{7}{10}$.",
                  "reason": "Adding the same number: $-\\dfrac{407}{10}$ is added to both sides of the line above."
                },
                {
                  "step": "The least value is $-\\dfrac{407}{10}$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no value is below $-\\dfrac{407}{10}$, and $x = \\dfrac{7}{2}$, $y = -\\dfrac{7}{10}$ gives $-\\dfrac{407}{10}$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $4x^2 + 2x + 2y^2 + 4y + 15$ for real numbers $x$ and $y$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "51/4",
              "lines": [
                {
                  "step": "Find the least value of $4x^2 + 2x + 2y^2 + 4y + 15$ for real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 + 2x + 2y^2 + 4y + 15 = 4\\left(x + \\dfrac{1}{4}\\right)^2 + 2(y + 1)^2 + \\dfrac{51}{4}$",
                  "reason": "Completing the square, once in $x$ and once in $y$: the two squares add $\\dfrac{1}{4}$ and $2$, and both are taken away again."
                },
                {
                  "step": "The squares $\\left(x + \\dfrac{1}{4}\\right)^2$ and $(y + 1)^2$ are at least $0$, and both are $0$ only at $x = -\\dfrac{1}{4}$, $y = -1$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$4\\left(x + \\dfrac{1}{4}\\right)^2 + 2(y + 1)^2 \\ge 0$",
                  "reason": "Adding two inequalities: each square times a positive number is at least $0$, by multiplying by a positive number."
                },
                {
                  "step": "So $4x^2 + 2x + 2y^2 + 4y + 15 \\ge \\dfrac{51}{4}$, with equality at $x = -\\dfrac{1}{4}$, $y = -1$.",
                  "reason": "Adding the same number: $\\dfrac{51}{4}$ is added to both sides of the line above."
                },
                {
                  "step": "The least value is $\\dfrac{51}{4}$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no value is below $\\dfrac{51}{4}$, and $x = -\\dfrac{1}{4}$, $y = -1$ gives $\\dfrac{51}{4}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t156-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the price in pounds that makes the money taken in a day greatest: a bakery sells 600 loaves a day at 16 pounds each. For every pound added to the price, it sells 10 fewer loaves a day.",
            "lines": [
              {
                "step": "Find the price in pounds that makes the money taken in a day greatest: a bakery sells 600 loaves a day at 16 pounds each. For every pound added to the price, it sells 10 fewer loaves a day.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the rise in price in pounds. The price is $16 + x$ pounds, and the number sold is $600 - 10x$.",
                "reason": "Defining the unknown: the rise in price is the letter, and each quantity in the sentence is written in it."
              },
              {
                "step": "$y = (16 + x)(600 - 10x)$",
                "reason": "Writing a sentence as an equation: the money taken, $y$ pounds, is the price times the number sold."
              },
              {
                "step": "The money taken is $0$ at $x = -16$ and at $x = 60$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "$x = \\dfrac{-16 + 60}{2} = 22$",
                "reason": "Greatest and least values of a quadratic: the leading coefficient $-10$ is below $0$, so the greatest value is at the mean of the roots."
              },
              {
                "step": "The price is $16 + 22 = 38$ pounds.",
                "reason": "Answering the question asked: the price, never the rise, is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the price in pounds that makes the money taken in a night greatest: a theatre sells 232 seats a night at 52 pounds each. For every pound added to the price, 4 fewer seats are sold.",
              "form": "Answer as a number, or equivalent.",
              "answer": "55",
              "lines": [
                {
                  "step": "Find the price in pounds that makes the money taken in a night greatest: a theatre sells 232 seats a night at 52 pounds each. For every pound added to the price, 4 fewer seats are sold.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the rise in price in pounds. The price is $52 + x$ pounds, and the number sold is $232 - 4x$.",
                  "reason": "Defining the unknown: the rise in price is the letter, and each quantity in the sentence is written in it."
                },
                {
                  "step": "$y = (52 + x)(232 - 4x)$",
                  "reason": "Writing a sentence as an equation: the money taken, $y$ pounds, is the price times the number sold."
                },
                {
                  "step": "The money taken is $0$ at $x = -52$ and at $x = 58$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{-52 + 58}{2} = 3$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-4$ is below $0$, so the greatest value is at the mean of the roots."
                },
                {
                  "step": "The price is $52 + 3 = 55$ pounds.",
                  "reason": "Answering the question asked: the price, never the rise, is asked for."
                }
              ]
            },
            {
              "prompt": "Find the price in pounds that makes the money taken in a night greatest: a theatre sells 445 seats a night at 75 pounds each. For every pound added to the price, 5 fewer seats are sold.",
              "form": "Answer as a number, or equivalent.",
              "answer": "82",
              "lines": [
                {
                  "step": "Find the price in pounds that makes the money taken in a night greatest: a theatre sells 445 seats a night at 75 pounds each. For every pound added to the price, 5 fewer seats are sold.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the rise in price in pounds. The price is $75 + x$ pounds, and the number sold is $445 - 5x$.",
                  "reason": "Defining the unknown: the rise in price is the letter, and each quantity in the sentence is written in it."
                },
                {
                  "step": "$y = (75 + x)(445 - 5x)$",
                  "reason": "Writing a sentence as an equation: the money taken, $y$ pounds, is the price times the number sold."
                },
                {
                  "step": "The money taken is $0$ at $x = -75$ and at $x = 89$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{-75 + 89}{2} = 7$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the greatest value is at the mean of the roots."
                },
                {
                  "step": "The price is $75 + 7 = 82$ pounds.",
                  "reason": "Answering the question asked: the price, never the rise, is asked for."
                }
              ]
            },
            {
              "prompt": "Find the price in pounds that makes the money taken in a night greatest: a theatre sells 684 seats a night at 21 pounds each. For every pound added to the price, 12 fewer seats are sold.",
              "form": "Answer as a number, or equivalent.",
              "answer": "39",
              "lines": [
                {
                  "step": "Find the price in pounds that makes the money taken in a night greatest: a theatre sells 684 seats a night at 21 pounds each. For every pound added to the price, 12 fewer seats are sold.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the rise in price in pounds. The price is $21 + x$ pounds, and the number sold is $684 - 12x$.",
                  "reason": "Defining the unknown: the rise in price is the letter, and each quantity in the sentence is written in it."
                },
                {
                  "step": "$y = (21 + x)(684 - 12x)$",
                  "reason": "Writing a sentence as an equation: the money taken, $y$ pounds, is the price times the number sold."
                },
                {
                  "step": "The money taken is $0$ at $x = -21$ and at $x = 57$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{-21 + 57}{2} = 18$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-12$ is below $0$, so the greatest value is at the mean of the roots."
                },
                {
                  "step": "The price is $21 + 18 = 39$ pounds.",
                  "reason": "Answering the question asked: the price, never the rise, is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest height in metres: a toy rocket is fired upwards from a roof. Its height above the street, in metres, $t$ seconds after it is fired is $-5t^2 + 28t + 28$.",
            "lines": [
              {
                "step": "Find the greatest height in metres: a toy rocket is fired upwards from a roof. Its height above the street, in metres, $t$ seconds after it is fired is $-5t^2 + 28t + 28$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$t = -\\dfrac{28}{2 \\cdot (-5)} = \\dfrac{14}{5}$",
                "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the height is greatest at $t = -\\dfrac{b}{2a}$."
              },
              {
                "step": "$-5 \\cdot \\left(\\dfrac{14}{5}\\right)^2 + 28 \\cdot \\dfrac{14}{5} + 28 = -\\dfrac{196}{5} + \\dfrac{392}{5} + 28$",
                "reason": "Substituting a value: $t$ is replaced by its value $\\dfrac{14}{5}$."
              },
              {
                "step": "$-\\dfrac{196}{5} + \\dfrac{392}{5} + 28 = \\dfrac{336}{5}$",
                "reason": "Order of operations: the sum is worked out from left to right."
              },
              {
                "step": "The greatest height is $\\dfrac{336}{5}$ metres.",
                "reason": "Answering the question asked: the height, never the time, is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest height in metres: a diver jumps upwards from a high board. The diver's height above the water, in metres, $t$ seconds after the jump is $-5t^2 + 24t + 95$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "619/5",
              "lines": [
                {
                  "step": "Find the greatest height in metres: a diver jumps upwards from a high board. The diver's height above the water, in metres, $t$ seconds after the jump is $-5t^2 + 24t + 95$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$t = -\\dfrac{24}{2 \\cdot (-5)} = \\dfrac{12}{5}$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the height is greatest at $t = -\\dfrac{b}{2a}$."
                },
                {
                  "step": "$-5 \\cdot \\left(\\dfrac{12}{5}\\right)^2 + 24 \\cdot \\dfrac{12}{5} + 95 = -\\dfrac{144}{5} + \\dfrac{288}{5} + 95$",
                  "reason": "Substituting a value: $t$ is replaced by its value $\\dfrac{12}{5}$."
                },
                {
                  "step": "$-\\dfrac{144}{5} + \\dfrac{288}{5} + 95 = \\dfrac{619}{5}$",
                  "reason": "Order of operations: the sum is worked out from left to right."
                },
                {
                  "step": "The greatest height is $\\dfrac{619}{5}$ metres.",
                  "reason": "Answering the question asked: the height, never the time, is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greatest height in metres: a ball is thrown upwards from the top of a cliff. Its height above the sea, in metres, $t$ seconds after it is thrown is $-5t^2 + 40t + 41$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "121",
              "lines": [
                {
                  "step": "Find the greatest height in metres: a ball is thrown upwards from the top of a cliff. Its height above the sea, in metres, $t$ seconds after it is thrown is $-5t^2 + 40t + 41$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$t = -\\dfrac{40}{2 \\cdot (-5)} = 4$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the height is greatest at $t = -\\dfrac{b}{2a}$."
                },
                {
                  "step": "$-5 \\cdot 4^2 + 40 \\cdot 4 + 41 = -80 + 160 + 41$",
                  "reason": "Substituting a value: $t$ is replaced by its value $4$."
                },
                {
                  "step": "$-80 + 160 + 41 = 121$",
                  "reason": "Order of operations: the sum is worked out from left to right."
                },
                {
                  "step": "The greatest height is $121$ metres.",
                  "reason": "Answering the question asked: the height, never the time, is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greatest height in metres: a diver jumps upwards from a high board. The diver's height above the water, in metres, $t$ seconds after the jump is $-5t^2 + 34t + 38$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "479/5",
              "lines": [
                {
                  "step": "Find the greatest height in metres: a diver jumps upwards from a high board. The diver's height above the water, in metres, $t$ seconds after the jump is $-5t^2 + 34t + 38$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$t = -\\dfrac{34}{2 \\cdot (-5)} = \\dfrac{17}{5}$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the height is greatest at $t = -\\dfrac{b}{2a}$."
                },
                {
                  "step": "$-5 \\cdot \\left(\\dfrac{17}{5}\\right)^2 + 34 \\cdot \\dfrac{17}{5} + 38 = -\\dfrac{289}{5} + \\dfrac{578}{5} + 38$",
                  "reason": "Substituting a value: $t$ is replaced by its value $\\dfrac{17}{5}$."
                },
                {
                  "step": "$-\\dfrac{289}{5} + \\dfrac{578}{5} + 38 = \\dfrac{479}{5}$",
                  "reason": "Order of operations: the sum is worked out from left to right."
                },
                {
                  "step": "The greatest height is $\\dfrac{479}{5}$ metres.",
                  "reason": "Answering the question asked: the height, never the time, is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest area in square metres of this pen: a farmer has 298 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 2 more fences across the inside that split the pen into 3 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 6 metres wide, which needs no fence.",
            "lines": [
              {
                "step": "Find the greatest area in square metres of this pen: a farmer has 298 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 2 more fences across the inside that split the pen into 3 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 6 metres wide, which needs no fence.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the length in metres of each fence that meets the wall. The side opposite the wall is $304 - 4x$ metres.",
                "reason": "Defining the unknown: the 4 fences that meet the wall use $4x$ metres, and the rest of the $298$ metres, with the $6$ metre gate, is opposite the wall."
              },
              {
                "step": "$y = x(304 - 4x)$",
                "reason": "Writing a sentence as an equation: the area, $y$ square metres, is the length times the width."
              },
              {
                "step": "The area is $0$ at $x = 0$ and at $x = 76$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "$x = \\dfrac{0 + 76}{2} = 38$",
                "reason": "Greatest and least values of a quadratic: the leading coefficient $-4$ is below $0$, so the greatest value is at the mean of the roots."
              },
              {
                "step": "$38\\left(304 - 4 \\cdot 38\\right) = 38 \\cdot 152$",
                "reason": "Substituting a value: $x$ is replaced by its value $38$."
              },
              {
                "step": "$38 \\cdot 152 = 5776$",
                "reason": "Order of operations: the product is worked out from left to right."
              },
              {
                "step": "The greatest area is $5776$ square metres.",
                "reason": "Answering the question asked: the area, never the length, is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest area in square metres of this pen: a farmer has 307 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 3 more fences across the inside that split the pen into 4 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 3 metres wide, which needs no fence.",
              "form": "Answer as a number, or equivalent.",
              "answer": "4805",
              "lines": [
                {
                  "step": "Find the greatest area in square metres of this pen: a farmer has 307 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 3 more fences across the inside that split the pen into 4 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 3 metres wide, which needs no fence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the length in metres of each fence that meets the wall. The side opposite the wall is $310 - 5x$ metres.",
                  "reason": "Defining the unknown: the 5 fences that meet the wall use $5x$ metres, and the rest of the $307$ metres, with the $3$ metre gate, is opposite the wall."
                },
                {
                  "step": "$y = x(310 - 5x)$",
                  "reason": "Writing a sentence as an equation: the area, $y$ square metres, is the length times the width."
                },
                {
                  "step": "The area is $0$ at $x = 0$ and at $x = 62$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{0 + 62}{2} = 31$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the greatest value is at the mean of the roots."
                },
                {
                  "step": "$31\\left(310 - 5 \\cdot 31\\right) = 31 \\cdot 155$",
                  "reason": "Substituting a value: $x$ is replaced by its value $31$."
                },
                {
                  "step": "$31 \\cdot 155 = 4805$",
                  "reason": "Order of operations: the product is worked out from left to right."
                },
                {
                  "step": "The greatest area is $4805$ square metres.",
                  "reason": "Answering the question asked: the area, never the length, is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greatest area in square metres of this pen: a farmer has 334 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 3 more fences across the inside that split the pen into 4 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 6 metres wide, which needs no fence.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5780",
              "lines": [
                {
                  "step": "Find the greatest area in square metres of this pen: a farmer has 334 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 3 more fences across the inside that split the pen into 4 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 6 metres wide, which needs no fence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the length in metres of each fence that meets the wall. The side opposite the wall is $340 - 5x$ metres.",
                  "reason": "Defining the unknown: the 5 fences that meet the wall use $5x$ metres, and the rest of the $334$ metres, with the $6$ metre gate, is opposite the wall."
                },
                {
                  "step": "$y = x(340 - 5x)$",
                  "reason": "Writing a sentence as an equation: the area, $y$ square metres, is the length times the width."
                },
                {
                  "step": "The area is $0$ at $x = 0$ and at $x = 68$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{0 + 68}{2} = 34$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-5$ is below $0$, so the greatest value is at the mean of the roots."
                },
                {
                  "step": "$34\\left(340 - 5 \\cdot 34\\right) = 34 \\cdot 170$",
                  "reason": "Substituting a value: $x$ is replaced by its value $34$."
                },
                {
                  "step": "$34 \\cdot 170 = 5780$",
                  "reason": "Order of operations: the product is worked out from left to right."
                },
                {
                  "step": "The greatest area is $5780$ square metres.",
                  "reason": "Answering the question asked: the area, never the length, is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greatest area in square metres of this pen: a farmer has 206 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 2 more fences across the inside that split the pen into 3 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 2 metres wide, which needs no fence.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2704",
              "lines": [
                {
                  "step": "Find the greatest area in square metres of this pen: a farmer has 206 metres of fence for a rectangular pen against a long wall, which needs no fence. The fence runs along the side opposite the wall, along the two ends, and along 2 more fences across the inside that split the pen into 3 parts; the ends and the inside fences meet the wall at right angles and have one length. The side opposite the wall has a gate 2 metres wide, which needs no fence.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the length in metres of each fence that meets the wall. The side opposite the wall is $208 - 4x$ metres.",
                  "reason": "Defining the unknown: the 4 fences that meet the wall use $4x$ metres, and the rest of the $206$ metres, with the $2$ metre gate, is opposite the wall."
                },
                {
                  "step": "$y = x(208 - 4x)$",
                  "reason": "Writing a sentence as an equation: the area, $y$ square metres, is the length times the width."
                },
                {
                  "step": "The area is $0$ at $x = 0$ and at $x = 52$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "$x = \\dfrac{0 + 52}{2} = 26$",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-4$ is below $0$, so the greatest value is at the mean of the roots."
                },
                {
                  "step": "$26\\left(208 - 4 \\cdot 26\\right) = 26 \\cdot 104$",
                  "reason": "Substituting a value: $x$ is replaced by its value $26$."
                },
                {
                  "step": "$26 \\cdot 104 = 2704$",
                  "reason": "Order of operations: the product is worked out from left to right."
                },
                {
                  "step": "The greatest area is $2704$ square metres.",
                  "reason": "Answering the question asked: the area, never the length, is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t156-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $-2x^2 - 19x + 7$ has a greatest value for real numbers $x$.",
            "lines": [
              {
                "step": "Decide whether $-2x^2 - 19x + 7$ has a greatest value for real numbers $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-2x^2 - 19x + 7 = -2\\left(x + \\dfrac{19}{4}\\right)^2 + \\dfrac{417}{8}$",
                "reason": "Completing the square in letters, with $a = -2$, $b = -19$ and $c = 7$."
              },
              {
                "step": "The square $\\left(x + \\dfrac{19}{4}\\right)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{19}{4}$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "So $-2x^2 - 19x + 7 \\le \\dfrac{417}{8}$ for every real $x$, with equality at $x = -\\dfrac{19}{4}$.",
                "reason": "Greatest and least values of a quadratic: the leading coefficient $-2$ is below $0$, so the value at $x = -\\dfrac{19}{4}$ is the greatest."
              },
              {
                "step": "The answer is Yes.",
                "reason": "A greatest value needs a bound and a case that reaches it: $\\dfrac{417}{8}$ is a bound, and $x = -\\dfrac{19}{4}$ reaches it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $2x^2 - 17x + 31$ has a greatest value for real numbers $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $2x^2 - 17x + 31$ has a greatest value for real numbers $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 17x + 31 = 2\\left(x - \\dfrac{17}{4}\\right)^2 - \\dfrac{41}{8}$",
                  "reason": "Completing the square in letters, with $a = 2$, $b = -17$ and $c = 31$."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{17}{4}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{17}{4}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "At $x = \\dfrac{17}{4} + n$ for a whole number $n$, the value is $-\\dfrac{41}{8} + 2n^2$, which rises above every number as $n$ grows.",
                  "reason": "Substituting a value: $x$ is replaced by $\\dfrac{17}{4} + n$, and the square in the second line becomes $n^2$."
                },
                {
                  "step": "The answer is No.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no number bounds the values on that side, so none of them is the greatest."
                }
              ]
            },
            {
              "prompt": "Decide whether $-4x^2 + 19x - 12$ has a greatest value for real numbers $x$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $-4x^2 + 19x - 12$ has a greatest value for real numbers $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4x^2 + 19x - 12 = -4\\left(x - \\dfrac{19}{8}\\right)^2 + \\dfrac{169}{16}$",
                  "reason": "Completing the square in letters, with $a = -4$, $b = 19$ and $c = -12$."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{19}{8}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{19}{8}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "So $-4x^2 + 19x - 12 \\le \\dfrac{169}{16}$ for every real $x$, with equality at $x = \\dfrac{19}{8}$.",
                  "reason": "Greatest and least values of a quadratic: the leading coefficient $-4$ is below $0$, so the value at $x = \\dfrac{19}{8}$ is the greatest."
                },
                {
                  "step": "The answer is Yes.",
                  "reason": "A greatest value needs a bound and a case that reaches it: $\\dfrac{169}{16}$ is a bound, and $x = \\dfrac{19}{8}$ reaches it."
                }
              ]
            },
            {
              "prompt": "Decide whether $-5x^2 + 24x - 8$ has a least value for real numbers $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $-5x^2 + 24x - 8$ has a least value for real numbers $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-5x^2 + 24x - 8 = -5\\left(x - \\dfrac{12}{5}\\right)^2 + \\dfrac{104}{5}$",
                  "reason": "Completing the square in letters, with $a = -5$, $b = 24$ and $c = -8$."
                },
                {
                  "step": "The square $\\left(x - \\dfrac{12}{5}\\right)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{12}{5}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "At $x = \\dfrac{12}{5} + n$ for a whole number $n$, the value is $\\dfrac{104}{5} - 5n^2$, which falls below every number as $n$ grows.",
                  "reason": "Substituting a value: $x$ is replaced by $\\dfrac{12}{5} + n$, and the square in the second line becomes $n^2$."
                },
                {
                  "step": "The answer is No.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no number bounds the values on that side, so none of them is the least."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t156-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the greatest value of $y = -6x^2 - 54x - 13$, and write that line right.",
            "given": [
              "$y = -6(x^2 - 9x) - 13$",
              "$y = -6\\left(x^2 - 9x + \\dfrac{81}{4}\\right) + \\dfrac{243}{2} - 13$",
              "$y = -6\\left(x - \\dfrac{9}{2}\\right)^2 + \\dfrac{217}{2}$",
              "The greatest value of $y$ is $\\dfrac{217}{2}$, at $x = \\dfrac{9}{2}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the greatest value of $y = -6x^2 - 54x - 13$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 takes out $-6$ but keeps the sign of the term in $x$: it writes $-9x$ inside the bracket.",
                "reason": "Taking out a common factor: $-54x$ divided by $-6$ is $9x$, so the sign of the term changes."
              },
              {
                "step": "Line 1 written right is $y = -6(x^2 + 9x) - 13$.",
                "reason": "Taking out a common factor: $-6(x^2 + 9x)$ multiplied out is $-6x^2 - 54x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the greatest value of $y = -25 + 36x - 4x^2$, and write that line right.",
              "given": [
                "$y = -4x^2 + 36x - 25$",
                "$y = -4(x^2 + 9x) - 25$",
                "$y = -4\\left(x^2 + 9x + \\dfrac{81}{4}\\right) + 81 - 25$",
                "$y = -4\\left(x + \\dfrac{9}{2}\\right)^2 + 56$",
                "The greatest value of $y$ is $56$, at $x = -\\dfrac{9}{2}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y = -4*(x^2-9*x)-25",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the greatest value of $y = -25 + 36x - 4x^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes out $-4$ but keeps the sign of the term in $x$: it writes $9x$ inside the bracket.",
                  "reason": "Taking out a common factor: $36x$ divided by $-4$ is $-9x$, so the sign of the term changes."
                },
                {
                  "step": "Line 2 written right is $y = -4(x^2 - 9x) - 25$.",
                  "reason": "Taking out a common factor: $-4(x^2 - 9x)$ multiplied out is $-4x^2 + 36x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the greatest value of $y = -4x^2 + 16x + 13$, and write that line right.",
              "given": [
                "$y = -4(x^2 + 4x) + 13$",
                "$y = -4\\left(x^2 + 4x + 4\\right) + 16 + 13$",
                "$y = -4(x + 2)^2 + 29$",
                "The greatest value of $y$ is $29$, at $x = -2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: y = -4*(x^2-4*x)+13",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the greatest value of $y = -4x^2 + 16x + 13$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes out $-4$ but keeps the sign of the term in $x$: it writes $4x$ inside the bracket.",
                  "reason": "Taking out a common factor: $16x$ divided by $-4$ is $-4x$, so the sign of the term changes."
                },
                {
                  "step": "Line 1 written right is $y = -4(x^2 - 4x) + 13$.",
                  "reason": "Taking out a common factor: $-4(x^2 - 4x)$ multiplied out is $-4x^2 + 16x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the greatest value of $y = -22 + 24x - 3x^2$, and write that line right.",
              "given": [
                "$y = -3x^2 + 24x - 22$",
                "$y = -3(x^2 + 8x) - 22$",
                "$y = -3\\left(x^2 + 8x + 16\\right) + 48 - 22$",
                "$y = -3(x + 4)^2 + 26$",
                "The greatest value of $y$ is $26$, at $x = -4$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y = -3*(x^2-8*x)-22",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the greatest value of $y = -22 + 24x - 3x^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes out $-3$ but keeps the sign of the term in $x$: it writes $8x$ inside the bracket.",
                  "reason": "Taking out a common factor: $24x$ divided by $-3$ is $-8x$, so the sign of the term changes."
                },
                {
                  "step": "Line 2 written right is $y = -3(x^2 - 8x) - 22$.",
                  "reason": "Taking out a common factor: $-3(x^2 - 8x)$ multiplied out is $-3x^2 + 24x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working on the values of $y = -6x^2 - 66x + 43$, and write that line right.",
            "given": [
              "$y = -6(x^2 + 11x) + 43$",
              "$y = -6\\left(x + \\dfrac{11}{2}\\right)^2 + \\dfrac{449}{2}$",
              "$-6\\left(x + \\dfrac{11}{2}\\right)^2 \\ge 0$",
              "$y \\ge \\dfrac{449}{2}$",
              "The least value of $y$ is $\\dfrac{449}{2}$, and $y$ has no greatest value."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working on the values of $y = -6x^2 - 66x + 43$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 reads $-6\\left(x + \\dfrac{11}{2}\\right)^2$ as at least $0$, which loses the minus sign of $-6$.",
                "reason": "Multiplying by a negative number reverses the sign: the square is at least $0$ by the Trivial Inequality, and $-6$ times it is at most $0$."
              },
              {
                "step": "Line 3 written right is $-6\\left(x + \\dfrac{11}{2}\\right)^2 \\le 0$.",
                "reason": "Multiplying by a negative number reverses the sign: $\\left(x + \\dfrac{11}{2}\\right)^2 \\ge 0$ is multiplied by $-6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working on the values of $y = 39 + 10x - 2x^2$, and write that line right.",
              "given": [
                "$y = -2x^2 + 10x + 39$",
                "$y = -2(x^2 - 5x) + 39$",
                "$y = -2\\left(x - \\dfrac{5}{2}\\right)^2 + \\dfrac{103}{2}$",
                "$-2\\left(x - \\dfrac{5}{2}\\right)^2 \\ge 0$",
                "$y \\ge \\dfrac{103}{2}$",
                "The least value of $y$ is $\\dfrac{103}{2}$, and $y$ has no greatest value."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -2*(x-5/2)^2 <= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the values of $y = 39 + 10x - 2x^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 reads $-2\\left(x - \\dfrac{5}{2}\\right)^2$ as at least $0$, which loses the minus sign of $-2$.",
                  "reason": "Multiplying by a negative number reverses the sign: the square is at least $0$ by the Trivial Inequality, and $-2$ times it is at most $0$."
                },
                {
                  "step": "Line 4 written right is $-2\\left(x - \\dfrac{5}{2}\\right)^2 \\le 0$.",
                  "reason": "Multiplying by a negative number reverses the sign: $\\left(x - \\dfrac{5}{2}\\right)^2 \\ge 0$ is multiplied by $-2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the values of $y = -4x^2 - 32x + 22$, and write that line right.",
              "given": [
                "$y = -4(x^2 + 8x) + 22$",
                "$y = -4(x + 4)^2 + 86$",
                "$-4(x + 4)^2 \\ge 0$",
                "$y \\ge 86$",
                "The least value of $y$ is $86$, and $y$ has no greatest value."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -4*(x+4)^2 <= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the values of $y = -4x^2 - 32x + 22$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 reads $-4(x + 4)^2$ as at least $0$, which loses the minus sign of $-4$.",
                  "reason": "Multiplying by a negative number reverses the sign: the square is at least $0$ by the Trivial Inequality, and $-4$ times it is at most $0$."
                },
                {
                  "step": "Line 3 written right is $-4(x + 4)^2 \\le 0$.",
                  "reason": "Multiplying by a negative number reverses the sign: $(x + 4)^2 \\ge 0$ is multiplied by $-4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working on the values of $y = -29 - 35x - 5x^2$, and write that line right.",
              "given": [
                "$y = -5x^2 - 35x - 29$",
                "$y = -5(x^2 + 7x) - 29$",
                "$y = -5\\left(x + \\dfrac{7}{2}\\right)^2 + \\dfrac{129}{4}$",
                "$-5\\left(x + \\dfrac{7}{2}\\right)^2 \\ge 0$",
                "$y \\ge \\dfrac{129}{4}$",
                "The least value of $y$ is $\\dfrac{129}{4}$, and $y$ has no greatest value."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -5*(x+7/2)^2 <= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working on the values of $y = -29 - 35x - 5x^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 reads $-5\\left(x + \\dfrac{7}{2}\\right)^2$ as at least $0$, which loses the minus sign of $-5$.",
                  "reason": "Multiplying by a negative number reverses the sign: the square is at least $0$ by the Trivial Inequality, and $-5$ times it is at most $0$."
                },
                {
                  "step": "Line 4 written right is $-5\\left(x + \\dfrac{7}{2}\\right)^2 \\le 0$.",
                  "reason": "Multiplying by a negative number reverses the sign: $\\left(x + \\dfrac{7}{2}\\right)^2 \\ge 0$ is multiplied by $-5$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t156-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cinema sells 48 tickets a night at 18 pounds each, and for every pound added to the price, 4 fewer tickets are sold. The price goes up by $x$ pounds, and $y$ is the money taken in a night, in pounds.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A cinema sells 48 tickets a night at 18 pounds each, and for every pound added to the price, 4 fewer tickets are sold. The price goes up by $x$ pounds, and $y$ is the money taken in a night, in pounds.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The price is $18 + x$ pounds.",
                "reason": "Writing a sentence as an equation: a rise of $x$ pounds is added to the price."
              },
              {
                "step": "The number of tickets sold is $48 - 4x$.",
                "reason": "Writing a sentence as an equation: $4$ fewer tickets for each of the $x$ pounds is $4x$ taken away."
              },
              {
                "step": "$y = (18 + x)(48 - 4x)$",
                "reason": "Writing a sentence as an equation: the money taken is the price times the number sold."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: An orchard has 78 trees, each giving 201 kilograms of fruit, and each extra tree planted makes every tree give 5 kilograms less. With $x$ extra trees, $y$ is the fruit of the whole orchard in kilograms.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (78+x)*(201-5*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: An orchard has 78 trees, each giving 201 kilograms of fruit, and each extra tree planted makes every tree give 5 kilograms less. With $x$ extra trees, $y$ is the fruit of the whole orchard in kilograms.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number of trees is $78 + x$.",
                  "reason": "Writing a sentence as an equation: $x$ extra trees are added to the trees there."
                },
                {
                  "step": "Each tree gives $201 - 5x$ kilograms.",
                  "reason": "Writing a sentence as an equation: $5$ kilograms less for each of the $x$ extra trees is $5x$ taken away."
                },
                {
                  "step": "$y = (78 + x)(201 - 5x)$",
                  "reason": "Writing a sentence as an equation: the whole crop is the number of trees times the crop of each."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A rectangular pen against a wall is closed on its other three sides by 270 metres of fence and a gate 6 metres wide in the side opposite the wall. Each of the two sides that meet the wall is $x$ metres long, and $y$ is the area of the pen in square metres.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x*(276-2*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A rectangular pen against a wall is closed on its other three sides by 270 metres of fence and a gate 6 metres wide in the side opposite the wall. Each of the two sides that meet the wall is $x$ metres long, and $y$ is the area of the pen in square metres.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The width of the pen is $x$ metres.",
                  "reason": "Writing a sentence as an equation: each side that meets the wall is $x$ metres."
                },
                {
                  "step": "The side opposite the wall is $276 - 2x$ metres.",
                  "reason": "Writing a sentence as an equation: the two sides that meet the wall use $2x$ of the $270$ metres, and the gate adds $6$ metres."
                },
                {
                  "step": "$y = x(276 - 2x)$",
                  "reason": "Writing a sentence as an equation: the area is the width times the length."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A coach trip costs 111 pounds a seat when 43 people book, and for every extra person who books, the price of every seat drops by 5 pounds. With $x$ extra people, $y$ is the total paid, in pounds.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (43+x)*(111-5*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: A coach trip costs 111 pounds a seat when 43 people book, and for every extra person who books, the price of every seat drops by 5 pounds. With $x$ extra people, $y$ is the total paid, in pounds.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number of people is $43 + x$.",
                  "reason": "Writing a sentence as an equation: $x$ extra people are added to those who booked."
                },
                {
                  "step": "The price of a seat is $111 - 5x$ pounds.",
                  "reason": "Writing a sentence as an equation: a drop of $5$ pounds for each of the $x$ extra people is $5x$ taken away."
                },
                {
                  "step": "$y = (43 + x)(111 - 5x)$",
                  "reason": "Writing a sentence as an equation: the total paid is the number of people times the price of a seat."
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
      "id": "t156-p1",
      "method": "proof by cases",
      "statement": "Let $a$, $b$ and $c$ be real numbers with $a \\ne 0$. Then $ax^2 + bx + c$ has its least value at $x = -\\dfrac{b}{2a}$ when $a > 0$, and its greatest value there when $a < 0$.",
      "idea": "Completing the square in letters leaves $a$ times a square plus a number; the square is at least $0$, and the sign of $a$ decides whether that number is a floor or a ceiling.",
      "lines": [
        {
          "line": "Let $a$, $b$ and $c$ be real numbers with $a \\ne 0$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $ax^2 + bx + c = a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$ for every real $x$.",
          "reason": "Completing the square in letters"
        },
        {
          "line": "Also $\\left(x + \\dfrac{b}{2a}\\right)^2 \\ge 0$, with equality only at $x = -\\dfrac{b}{2a}$.",
          "reason": "Trivial Inequality, for the real number $x + \\dfrac{b}{2a}$"
        },
        {
          "line": "Since $a \\ne 0$, $a > 0$ or $a < 0$.",
          "reason": "arithmetic's order: a number other than $0$ is positive or negative"
        },
        {
          "line": "If $a > 0$, then $a\\left(x + \\dfrac{b}{2a}\\right)^2 \\ge 0$, with equality only at $x = -\\dfrac{b}{2a}$.",
          "reason": "multiplying by a positive number keeps the order"
        },
        {
          "line": "So, if $a > 0$, then $a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a} \\ge c - \\dfrac{b^2}{4a}$.",
          "reason": "adding the same number $c - \\dfrac{b^2}{4a}$ to both sides"
        },
        {
          "line": "That is, if $a > 0$, then $ax^2 + bx + c \\ge c - \\dfrac{b^2}{4a}$, with equality only at $x = -\\dfrac{b}{2a}$.",
          "reason": "the second line"
        },
        {
          "line": "If $a < 0$, then $a\\left(x + \\dfrac{b}{2a}\\right)^2 \\le 0$, with equality only at $x = -\\dfrac{b}{2a}$.",
          "reason": "multiplying by a negative number reverses the sign"
        },
        {
          "line": "So, if $a < 0$, then $a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a} \\le c - \\dfrac{b^2}{4a}$.",
          "reason": "adding the same number $c - \\dfrac{b^2}{4a}$ to both sides"
        },
        {
          "line": "That is, if $a < 0$, then $ax^2 + bx + c \\le c - \\dfrac{b^2}{4a}$, with equality only at $x = -\\dfrac{b}{2a}$.",
          "reason": "the second line"
        },
        {
          "line": "Therefore the value at $x = -\\dfrac{b}{2a}$ is the least when $a > 0$ and the greatest when $a < 0$.",
          "reason": "a greatest value needs a bound and a case that reaches it: the seventh and tenth lines give the bound, and $x = -\\dfrac{b}{2a}$ reaches it"
        }
      ]
    },
    {
      "id": "t156-p2",
      "method": "direct proof",
      "statement": "Let $a$, $b$ and $c$ be real numbers with $a \\ne 0$, and let $r$ and $s$ be the real roots of $ax^2 + bx + c = 0$. Then $\\dfrac{r + s}{2} = -\\dfrac{b}{2a}$, so the least or greatest value of $ax^2 + bx + c$ is at the mean of its roots.",
      "idea": "The sum of the roots is $-\\dfrac{b}{a}$; half of it is the $x$ at which the first proof puts the least or greatest value.",
      "lines": [
        {
          "line": "Let $a$, $b$ and $c$ be real numbers with $a \\ne 0$, and let $r$ and $s$ be the real roots of $ax^2 + bx + c = 0$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $r + s = -\\dfrac{b}{a}$.",
          "reason": "sum of roots $-b/a$"
        },
        {
          "line": "So $\\dfrac{r + s}{2} = -\\dfrac{b}{2a}$.",
          "reason": "multiplying both sides by the same number $\\dfrac{1}{2}$"
        },
        {
          "line": "Therefore the least or greatest value of $ax^2 + bx + c$ is at $x = \\dfrac{r + s}{2}$.",
          "reason": "Greatest and least values of a quadratic: the value is least or greatest at $x = -\\dfrac{b}{2a}$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t156-s2",
      "method": "proof by cases",
      "statement": "Prove that if $a$, $b$ and $c$ are real numbers with $a \\ne 0$, then $ax^2 + bx + c$ has a least value or a greatest value for real $x$, and not both.",
      "check": {
        "proof": [
          {
            "line": "Let $a \\ne 0$, $b$ and $c$ be real numbers, and let $h = -\\dfrac{b}{2a}$ and $k = c - \\dfrac{b^2}{4a}$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $ax^2 + bx + c = a(x - h)^2 + k$ for every real $x$.",
            "reason": "Completing the square in letters"
          },
          {
            "line": "Let $d$ be a real number, and let $t = \\dfrac{|d - k| + 1}{|a|} + 1$.",
            "reason": "defining the unknown: $|a| > 0$ since $a \\ne 0$"
          },
          {
            "line": "So $\\dfrac{|d - k| + 1}{|a|} > 0$.",
            "reason": "dividing by a positive number keeps the order: $|d - k| + 1 > 0$ is divided by $|a|$"
          },
          {
            "line": "Then $t > 1$.",
            "reason": "adding the same number $1$ to both sides of the line above"
          },
          {
            "line": "So $t^2 > t$.",
            "reason": "multiplying by a positive number keeps the order: $t > 1$ is multiplied by $t$"
          },
          {
            "line": "So $|a|t^2 > |a|t$.",
            "reason": "multiplying by a positive number keeps the order: both sides are multiplied by $|a|$"
          },
          {
            "line": "Also $|a|t = |d - k| + 1 + |a|$.",
            "reason": "the distributive law (arithmetic's)"
          },
          {
            "line": "Also $1 + |a| > 0$.",
            "reason": "adding two inequalities: $1 > 0$ and $|a| > 0$"
          },
          {
            "line": "So $|d - k| + 1 + |a| > |d - k|$.",
            "reason": "adding the same number $|d - k|$ to both sides of the ninth line"
          },
          {
            "line": "So $|a|t > |d - k|$.",
            "reason": "the eighth and tenth lines"
          },
          {
            "line": "So $|a|t^2 > |d - k|$.",
            "reason": "transitivity: the seventh and eleventh lines"
          },
          {
            "line": "At $x = h + t$ the value is $at^2 + k$.",
            "reason": "substituting a value: $x$ is replaced by $h + t$ in the second line"
          },
          {
            "line": "Also $|d - k| \\ge d - k$.",
            "reason": "absolute value (arithmetic's)"
          },
          {
            "line": "Also $|d - k| \\ge k - d$.",
            "reason": "absolute value (arithmetic's)"
          },
          {
            "line": "So $|d - k| + k \\ge d$.",
            "reason": "adding the same number $k$ to both sides of the fourteenth line"
          },
          {
            "line": "So $k - |d - k| \\le d$.",
            "reason": "adding the same number $d - |d - k|$ to both sides of the fifteenth line"
          },
          {
            "line": "Then $a > 0$ or $a < 0$.",
            "reason": "arithmetic's order: a number other than $0$ is positive or negative"
          },
          {
            "line": "If $a > 0$, then $at^2 > |d - k|$.",
            "reason": "absolute value (arithmetic's): $|a| = a$ when $a > 0$, in the twelfth line"
          },
          {
            "line": "If $a > 0$, then $at^2 + k > |d - k| + k$.",
            "reason": "adding the same number $k$ to both sides"
          },
          {
            "line": "If $a > 0$, then $at^2 + k > d$.",
            "reason": "transitivity: the twentieth and sixteenth lines"
          },
          {
            "line": "If $a > 0$, no value is the greatest, and the value at $x = h$ is the least.",
            "reason": "a greatest value needs a bound and a case that reaches it: no number $d$ bounds the values from above; the least value is by Greatest and least values of a quadratic"
          },
          {
            "line": "If $a < 0$, then $-at^2 > |d - k|$.",
            "reason": "absolute value (arithmetic's): $|a| = -a$ when $a < 0$, in the twelfth line"
          },
          {
            "line": "If $a < 0$, then $at^2 < -|d - k|$.",
            "reason": "multiplying by a negative number reverses the sign: both sides are multiplied by $-1$"
          },
          {
            "line": "If $a < 0$, then $at^2 + k < k - |d - k|$.",
            "reason": "adding the same number $k$ to both sides"
          },
          {
            "line": "If $a < 0$, then $at^2 + k < d$.",
            "reason": "transitivity: the twenty-fifth and seventeenth lines"
          },
          {
            "line": "If $a < 0$, no value is the least, and the value at $x = h$ is the greatest.",
            "reason": "a greatest value needs a bound and a case that reaches it: no number $d$ bounds the values from below; the greatest value is by Greatest and least values of a quadratic"
          },
          {
            "line": "Therefore $ax^2 + bx + c$ has a least value or a greatest value, and not both.",
            "reason": "the two cases of the eighteenth line"
          }
        ]
      }
    },
    {
      "id": "t156-s3",
      "method": "direct proof",
      "statement": "Prove that if $a \\ne 0$, $b$, $c$, $r$ and $s$ are real numbers with $r \\ne s$ and $ar^2 + br + c = as^2 + bs + c$, then the least or greatest value of $ax^2 + bx + c$ is at $x = \\dfrac{r + s}{2}$.",
      "check": {
        "proof": [
          {
            "line": "Let $a \\ne 0$, $b$, $c$, $r$ and $s$ be real numbers with $r \\ne s$ and $ar^2 + br + c = as^2 + bs + c$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $ar^2 + br = as^2 + bs$.",
            "reason": "adding the same number $-c$ to both sides"
          },
          {
            "line": "So $a(r^2 - s^2) + b(r - s) = 0$.",
            "reason": "adding the same number $-as^2 - bs$ to both sides"
          },
          {
            "line": "So $a(r - s)(r + s) + b(r - s) = 0$.",
            "reason": "difference of squares"
          },
          {
            "line": "So $(r - s)(a(r + s) + b) = 0$.",
            "reason": "taking out a common factor"
          },
          {
            "line": "So $a(r + s) + b = 0$.",
            "reason": "zero-product property: $r - s \\ne 0$"
          },
          {
            "line": "So $a(r + s) = -b$.",
            "reason": "adding the same number $-b$ to both sides"
          },
          {
            "line": "So $\\dfrac{r + s}{2} = -\\dfrac{b}{2a}$.",
            "reason": "dividing both sides by a nonzero number: both sides are divided by $2a$"
          },
          {
            "line": "Therefore the least or greatest value of $ax^2 + bx + c$ is at $x = \\dfrac{r + s}{2}$.",
            "reason": "Greatest and least values of a quadratic: the value is least or greatest at $x = -\\dfrac{b}{2a}$"
          }
        ]
      }
    }
  ]
}
