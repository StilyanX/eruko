export default {
  "number": 144,
  "title": "Complex numbers",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "362-371"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Simplify $3(4 - 2i) - 2(5 - 6i)$.",
    "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
    "answer": "2+6*i",
    "solution": [
      "Simplify $3(4 - 2i) - 2(5 - 6i)$.",
      "$3(4 - 2i) - 2(5 - 6i) = 12 - 6i - 10 + 12i$",
      "$12 - 6i - 10 + 12i = 2 + 6i$"
    ]
  },
  "ideas": [
    {
      "name": "Complex number $a + bi$",
      "concrete": "The number $-4 + 7i$ is the sum of the real number $-4$ and the imaginary number $7i$. Its real part is $-4$ and its imaginary part is $7$.",
      "general": "For real numbers $a$ and $b$, a **complex number** is a number $a + bi$. Its **real part** is $a$ and its **imaginary part** is $b$. A complex number with imaginary part $0$ is a real number, and one with real part $0$ is an imaginary number, as in t143."
    },
    {
      "name": "Two complex numbers are equal when their real parts and their imaginary parts are equal",
      "concrete": "For real numbers $x$ and $y$, the equation $x + yi = 6 - 9i$ holds exactly when $x = 6$ and $y = -9$.",
      "general": "For real numbers $a$, $b$, $c$ and $d$, $a + bi = c + di$ exactly when $a = c$ and $b = d$: **two complex numbers are equal when their real parts and their imaginary parts are equal**."
    },
    {
      "name": "Complex conjugate",
      "concrete": "The complex conjugate of $6 + 5i$ is $6 - 5i$, and the complex conjugate of $-2 - 8i$ is $-2 + 8i$.",
      "general": "For real numbers $a$ and $b$, the **complex conjugate** of $a + bi$ is $a - bi$: the sign of the imaginary part is reversed. It is written $\\overline{a + bi}$, so $\\overline{a + bi} = a - bi$."
    },
    {
      "name": "A number times its conjugate is $a^2 + b^2$",
      "concrete": "Multiplying out, $(4 - 5i)(4 + 5i) = 16 + 20i - 20i - 25i^2 = 16 + 25 = 41$, which is $4^2 + 5^2$.",
      "general": "For real numbers $a$ and $b$, $(a + bi)(a - bi) = a^2 + b^2$, a real number."
    },
    {
      "name": "Dividing by multiplying top and bottom by the conjugate of the bottom",
      "concrete": "In $\\dfrac{6}{1 + 3i}$ the top and the bottom are multiplied by $1 - 3i$, so the bottom becomes $1^2 + 3^2 = 10$, and $\\dfrac{6}{1 + 3i} = \\dfrac{6 - 18i}{10} = \\dfrac{3}{5} - \\dfrac{9}{5}i$.",
      "general": "For real numbers $a$, $b$, $c$ and $d$, with $c$ and $d$ not both $0$, $\\dfrac{a + bi}{c + di} = \\dfrac{(a + bi)(c - di)}{c^2 + d^2}$: the quotient is written as a complex number by **dividing by multiplying top and bottom by the conjugate of the bottom**."
    },
    {
      "name": "Conjugate of a sum and conjugate of a product",
      "concrete": "With $2 + 3i$ and $4 - 6i$: their sum is $6 - 3i$, whose conjugate is $6 + 3i = (2 - 3i) + (4 + 6i)$; their product is $26$, whose conjugate is $26 = (2 - 3i)(4 + 6i)$.",
      "general": "For complex numbers $a + bi$ and $c + di$, the **conjugate of a sum** is the sum of the conjugates, $\\overline{(a + bi) + (c + di)} = \\overline{a + bi} + \\overline{c + di}$, and the **conjugate of a product** is the product of the conjugates, $\\overline{(a + bi)(c + di)} = \\overline{a + bi} \\cdot \\overline{c + di}$."
    }
  ],
  "kinds": [
    {
      "id": "t144-k1",
      "forms": [
        {
          "example": {
            "problem": "Simplify $4(9 - 7i) - 3(6 + 5i)$.",
            "lines": [
              {
                "step": "Simplify $4(9 - 7i) - 3(6 + 5i)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4(9 - 7i) - 3(6 + 5i) = 36 - 28i - 18 - 15i$",
                "reason": "The distributive law, from arithmetic, multiplies out each bracket, and subtracting a bracket changes every sign in it."
              },
              {
                "step": "$36 - 28i - 18 - 15i = 18 - 43i$",
                "reason": "Collecting like terms: the real parts $36$ and $-18$ are added, and the imaginary parts $-28$ and $-15$ are added, with $i$ kept as one number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $9(3 - 3i) + 9(-9 + 3i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-54",
              "lines": [
                {
                  "step": "Simplify $9(3 - 3i) + 9(-9 + 3i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9(3 - 3i) + 9(-9 + 3i) = 27 - 27i - 81 + 27i$",
                  "reason": "The distributive law, from arithmetic, multiplies out each bracket."
                },
                {
                  "step": "$27 - 27i - 81 + 27i = -54$",
                  "reason": "Collecting like terms: the real parts $27$ and $-81$ are added, and the imaginary parts $-27$ and $27$ are added, with $i$ kept as one number."
                }
              ]
            },
            {
              "prompt": "Simplify $8(-9 + 5i) - 5(9 - 6i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-117+70*i",
              "lines": [
                {
                  "step": "Simplify $8(-9 + 5i) - 5(9 - 6i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8(-9 + 5i) - 5(9 - 6i) = -72 + 40i - 45 + 30i$",
                  "reason": "The distributive law, from arithmetic, multiplies out each bracket, and subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$-72 + 40i - 45 + 30i = -117 + 70i$",
                  "reason": "Collecting like terms: the real parts $-72$ and $-45$ are added, and the imaginary parts $40$ and $30$ are added, with $i$ kept as one number."
                }
              ]
            },
            {
              "prompt": "Simplify $7(-9 - 9i) + 2(3 - 3i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-57-69*i",
              "lines": [
                {
                  "step": "Simplify $7(-9 - 9i) + 2(3 - 3i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7(-9 - 9i) + 2(3 - 3i) = -63 - 63i + 6 - 6i$",
                  "reason": "The distributive law, from arithmetic, multiplies out each bracket."
                },
                {
                  "step": "$-63 - 63i + 6 - 6i = -57 - 69i$",
                  "reason": "Collecting like terms: the real parts $-63$ and $6$ are added, and the imaginary parts $-63$ and $-6$ are added, with $i$ kept as one number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k2",
      "forms": [
        {
          "example": {
            "problem": "Expand $(-8 - 7i)(-7 + 2i)$.",
            "lines": [
              {
                "step": "Expand $(-8 - 7i)(-7 + 2i)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-8 - 7i)(-7 + 2i) = 56 - 16i + 49i - 14i^2$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$56 - 16i + 49i - 14i^2 = 56 - 16i + 49i + 14$",
                "reason": "The number $i$ with $i^2 = -1$: $-14i^2 = 14$."
              },
              {
                "step": "$56 - 16i + 49i + 14 = 70 + 33i$",
                "reason": "Collecting like terms: the real parts together and the imaginary parts together."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(-8 + 9i)(-4 + 4i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-4-68*i",
              "lines": [
                {
                  "step": "Expand $(-8 + 9i)(-4 + 4i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-8 + 9i)(-4 + 4i) = 32 - 32i - 36i + 36i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$32 - 32i - 36i + 36i^2 = 32 - 32i - 36i - 36$",
                  "reason": "The number $i$ with $i^2 = -1$: $36i^2 = -36$."
                },
                {
                  "step": "$32 - 32i - 36i - 36 = -4 - 68i$",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            },
            {
              "prompt": "Expand $(3 + 7i)(2 + 8i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-50+38*i",
              "lines": [
                {
                  "step": "Expand $(3 + 7i)(2 + 8i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3 + 7i)(2 + 8i) = 6 + 24i + 14i + 56i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$6 + 24i + 14i + 56i^2 = 6 + 24i + 14i - 56$",
                  "reason": "The number $i$ with $i^2 = -1$: $56i^2 = -56$."
                },
                {
                  "step": "$6 + 24i + 14i - 56 = -50 + 38i$",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            },
            {
              "prompt": "Expand $(5 + 7i)(-9 + 2i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-59-53*i",
              "lines": [
                {
                  "step": "Expand $(5 + 7i)(-9 + 2i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5 + 7i)(-9 + 2i) = -45 + 10i - 63i + 14i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$-45 + 10i - 63i + 14i^2 = -45 + 10i - 63i - 14$",
                  "reason": "The number $i$ with $i^2 = -1$: $14i^2 = -14$."
                },
                {
                  "step": "$-45 + 10i - 63i - 14 = -59 - 53i$",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(8 - 5i)^2$.",
            "lines": [
              {
                "step": "Expand $(8 - 5i)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(8 - 5i)^2 = 64 - 80i + 25i^2$",
                "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, with $x = 8$ and $y = -5i$."
              },
              {
                "step": "$64 - 80i + 25i^2 = 64 - 80i - 25$",
                "reason": "The number $i$ with $i^2 = -1$: $25i^2 = -25$."
              },
              {
                "step": "$64 - 80i - 25 = 39 - 80i$",
                "reason": "Collecting like terms: the real parts together."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(2 + 6i)^2$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-32+24*i",
              "lines": [
                {
                  "step": "Expand $(2 + 6i)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2 + 6i)^2 = 4 + 24i + 36i^2$",
                  "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, with $x = 2$ and $y = 6i$."
                },
                {
                  "step": "$4 + 24i + 36i^2 = 4 + 24i - 36$",
                  "reason": "The number $i$ with $i^2 = -1$: $36i^2 = -36$."
                },
                {
                  "step": "$4 + 24i - 36 = -32 + 24i$",
                  "reason": "Collecting like terms: the real parts together."
                }
              ]
            },
            {
              "prompt": "Expand $(9 - 7i)^2$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "32-126*i",
              "lines": [
                {
                  "step": "Expand $(9 - 7i)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(9 - 7i)^2 = 81 - 126i + 49i^2$",
                  "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, with $x = 9$ and $y = -7i$."
                },
                {
                  "step": "$81 - 126i + 49i^2 = 81 - 126i - 49$",
                  "reason": "The number $i$ with $i^2 = -1$: $49i^2 = -49$."
                },
                {
                  "step": "$81 - 126i - 49 = 32 - 126i$",
                  "reason": "Collecting like terms: the real parts together."
                }
              ]
            },
            {
              "prompt": "Expand $(-9 + 6i)^2$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "45-108*i",
              "lines": [
                {
                  "step": "Expand $(-9 + 6i)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-9 + 6i)^2 = 81 - 108i + 36i^2$",
                  "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, with $x = -9$ and $y = 6i$."
                },
                {
                  "step": "$81 - 108i + 36i^2 = 81 - 108i - 36$",
                  "reason": "The number $i$ with $i^2 = -1$: $36i^2 = -36$."
                },
                {
                  "step": "$81 - 108i - 36 = 45 - 108i$",
                  "reason": "Collecting like terms: the real parts together."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(-6 + 3i)(6 - 5i)(6 + 5i)$.",
            "lines": [
              {
                "step": "Expand $(-6 + 3i)(6 - 5i)(6 + 5i)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-6 + 3i)(6 - 5i)(6 + 5i) = (6 - 5i)(6 + 5i)(-6 + 3i)$",
                "reason": "The commutative law of multiplication, from arithmetic: $6 - 5i$ and its complex conjugate $6 + 5i$ are placed side by side."
              },
              {
                "step": "$(6 - 5i)(6 + 5i)(-6 + 3i) = 61(-6 + 3i)$",
                "reason": "A number times its conjugate is $a^2 + b^2$: $6^2 + 5^2 = 61$."
              },
              {
                "step": "$61(-6 + 3i) = -366 + 183i$",
                "reason": "The distributive law, from arithmetic, multiplies each part by the number in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(3 + 8i)(-7 - 9i)(3 - 8i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-511-657*i",
              "lines": [
                {
                  "step": "Expand $(3 + 8i)(-7 - 9i)(3 - 8i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3 + 8i)(-7 - 9i)(3 - 8i) = (3 + 8i)(3 - 8i)(-7 - 9i)$",
                  "reason": "The commutative law of multiplication, from arithmetic: $3 + 8i$ and its complex conjugate $3 - 8i$ are placed side by side."
                },
                {
                  "step": "$(3 + 8i)(3 - 8i)(-7 - 9i) = 73(-7 - 9i)$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $3^2 + 8^2 = 73$."
                },
                {
                  "step": "$73(-7 - 9i) = -511 - 657i$",
                  "reason": "The distributive law, from arithmetic, multiplies each part by the number in front."
                }
              ]
            },
            {
              "prompt": "Expand $(7 + 8i)(-8 - 2i)(7 - 8i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-904-226*i",
              "lines": [
                {
                  "step": "Expand $(7 + 8i)(-8 - 2i)(7 - 8i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7 + 8i)(-8 - 2i)(7 - 8i) = (7 + 8i)(7 - 8i)(-8 - 2i)$",
                  "reason": "The commutative law of multiplication, from arithmetic: $7 + 8i$ and its complex conjugate $7 - 8i$ are placed side by side."
                },
                {
                  "step": "$(7 + 8i)(7 - 8i)(-8 - 2i) = 113(-8 - 2i)$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $7^2 + 8^2 = 113$."
                },
                {
                  "step": "$113(-8 - 2i) = -904 - 226i$",
                  "reason": "The distributive law, from arithmetic, multiplies each part by the number in front."
                }
              ]
            },
            {
              "prompt": "Expand $(-3 - 4i)(-3 - 9i)(-3 + 4i)$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-75-225*i",
              "lines": [
                {
                  "step": "Expand $(-3 - 4i)(-3 - 9i)(-3 + 4i)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-3 - 4i)(-3 - 9i)(-3 + 4i) = (-3 - 4i)(-3 + 4i)(-3 - 9i)$",
                  "reason": "The commutative law of multiplication, from arithmetic: $-3 - 4i$ and its complex conjugate $-3 + 4i$ are placed side by side."
                },
                {
                  "step": "$(-3 - 4i)(-3 + 4i)(-3 - 9i) = 25(-3 - 9i)$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $(-3)^2 + 4^2 = 25$."
                },
                {
                  "step": "$25(-3 - 9i) = -75 - 225i$",
                  "reason": "The distributive law, from arithmetic, multiplies each part by the number in front."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $f(4 - 5i)$, where $f(x) = 3x^2 - 5x + 6$.",
            "lines": [
              {
                "step": "Evaluate $f(4 - 5i)$, where $f(x) = 3x^2 - 5x + 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(4 - 5i) = 3(4 - 5i)^2 - 5(4 - 5i) + 6$",
                "reason": "Substituting a value: $x$ is replaced by $4 - 5i$, in brackets."
              },
              {
                "step": "$(4 - 5i)^2 = -9 - 40i$",
                "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $25i^2 = -25$."
              },
              {
                "step": "$f(4 - 5i) = 3(-9 - 40i) - 5(4 - 5i) + 6$",
                "reason": "Line 2, with the square replaced by its value from line 3."
              },
              {
                "step": "$f(4 - 5i) = -27 - 120i - 20 + 25i + 6$",
                "reason": "The distributive law, from arithmetic, multiplies out each bracket."
              },
              {
                "step": "$f(4 - 5i) = -41 - 95i$",
                "reason": "Collecting like terms: the real parts together and the imaginary parts together."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $f(2 + 2i)$, where $f(x) = 6x^2 + 3x + 7$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "13+54*i",
              "lines": [
                {
                  "step": "Evaluate $f(2 + 2i)$, where $f(x) = 6x^2 + 3x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2 + 2i) = 6(2 + 2i)^2 + 3(2 + 2i) + 7$",
                  "reason": "Substituting a value: $x$ is replaced by $2 + 2i$, in brackets."
                },
                {
                  "step": "$(2 + 2i)^2 = 8i$",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $4i^2 = -4$."
                },
                {
                  "step": "$f(2 + 2i) = 6(8i) + 3(2 + 2i) + 7$",
                  "reason": "Line 2, with the square replaced by its value from line 3."
                },
                {
                  "step": "$f(2 + 2i) = 48i + 6 + 6i + 7$",
                  "reason": "The distributive law, from arithmetic, multiplies out each bracket."
                },
                {
                  "step": "$f(2 + 2i) = 13 + 54i$",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            },
            {
              "prompt": "Evaluate $f(-4 + 2i)$, where $f(x) = 5x^2 - 9x + 4$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "100-98*i",
              "lines": [
                {
                  "step": "Evaluate $f(-4 + 2i)$, where $f(x) = 5x^2 - 9x + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-4 + 2i) = 5(-4 + 2i)^2 - 9(-4 + 2i) + 4$",
                  "reason": "Substituting a value: $x$ is replaced by $-4 + 2i$, in brackets."
                },
                {
                  "step": "$(-4 + 2i)^2 = 12 - 16i$",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $4i^2 = -4$."
                },
                {
                  "step": "$f(-4 + 2i) = 5(12 - 16i) - 9(-4 + 2i) + 4$",
                  "reason": "Line 2, with the square replaced by its value from line 3."
                },
                {
                  "step": "$f(-4 + 2i) = 60 - 80i + 36 - 18i + 4$",
                  "reason": "The distributive law, from arithmetic, multiplies out each bracket."
                },
                {
                  "step": "$f(-4 + 2i) = 100 - 98i$",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            },
            {
              "prompt": "Evaluate $f(7 - 10i)$, where $f(x) = 3x^2 - 6x - 7$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-202-360*i",
              "lines": [
                {
                  "step": "Evaluate $f(7 - 10i)$, where $f(x) = 3x^2 - 6x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(7 - 10i) = 3(7 - 10i)^2 - 6(7 - 10i) - 7$",
                  "reason": "Substituting a value: $x$ is replaced by $7 - 10i$, in brackets."
                },
                {
                  "step": "$(7 - 10i)^2 = -51 - 140i$",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $100i^2 = -100$."
                },
                {
                  "step": "$f(7 - 10i) = 3(-51 - 140i) - 6(7 - 10i) - 7$",
                  "reason": "Line 2, with the square replaced by its value from line 3."
                },
                {
                  "step": "$f(7 - 10i) = -153 - 420i - 42 + 60i - 7$",
                  "reason": "The distributive law, from arithmetic, multiplies out each bracket."
                },
                {
                  "step": "$f(7 - 10i) = -202 - 360i$",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a real number $x$ for which $(9 + xi)(6 - 3i)$ is a real number.",
            "lines": [
              {
                "step": "Find a real number $x$ for which $(9 + xi)(6 - 3i)$ is a real number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(9 + xi)(6 - 3i) = 54 - 27i + 6xi - 3xi^2$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$54 - 27i + 6xi - 3xi^2 = (3x + 54) + (6x - 27)i$",
                "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
              },
              {
                "step": "The imaginary part $6x - 27$ is $0$.",
                "reason": "Real number: a complex number is real when its imaginary part is $0$."
              },
              {
                "step": "$x = \\dfrac{9}{2}$",
                "reason": "Adding the same number to both sides and dividing both sides by $6$, a nonzero number, and then the product is the real number $\\dfrac{135}{2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a real number $x$ for which $(8 + xi)(8 + 8i)$ is a real number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -8",
              "lines": [
                {
                  "step": "Find a real number $x$ for which $(8 + xi)(8 + 8i)$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(8 + xi)(8 + 8i) = 64 + 64i + 8xi + 8xi^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$64 + 64i + 8xi + 8xi^2 = (-8x + 64) + (8x + 64)i$",
                  "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
                },
                {
                  "step": "The imaginary part $8x + 64$ is $0$.",
                  "reason": "Real number: a complex number is real when its imaginary part is $0$."
                },
                {
                  "step": "$x = -8$",
                  "reason": "Adding the same number to both sides and dividing both sides by $8$, a nonzero number, and then the product is the real number $128$."
                }
              ]
            },
            {
              "prompt": "Find a real number $x$ for which $(5 + xi)(9 + 8i)$ is a real number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -40/9",
              "lines": [
                {
                  "step": "Find a real number $x$ for which $(5 + xi)(9 + 8i)$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5 + xi)(9 + 8i) = 45 + 40i + 9xi + 8xi^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$45 + 40i + 9xi + 8xi^2 = (-8x + 45) + (9x + 40)i$",
                  "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
                },
                {
                  "step": "The imaginary part $9x + 40$ is $0$.",
                  "reason": "Real number: a complex number is real when its imaginary part is $0$."
                },
                {
                  "step": "$x = -\\dfrac{40}{9}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $9$, a nonzero number, and then the product is the real number $\\dfrac{725}{9}$."
                }
              ]
            },
            {
              "prompt": "Find a real number $x$ for which $(x + 6i)(-7 + 4i)$ is a real number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 21/2",
              "lines": [
                {
                  "step": "Find a real number $x$ for which $(x + 6i)(-7 + 4i)$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 6i)(-7 + 4i) = -7x + 4xi - 42i + 24i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$-7x + 4xi - 42i + 24i^2 = (-7x - 24) + (4x - 42)i$",
                  "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
                },
                {
                  "step": "The imaginary part $4x - 42$ is $0$.",
                  "reason": "Real number: a complex number is real when its imaginary part is $0$."
                },
                {
                  "step": "$x = \\dfrac{21}{2}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $4$, a nonzero number, and then the product is the real number $-\\dfrac{195}{2}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a real number $x$ for which $(x + 8i)(-8 - 2i)$ is an imaginary number.",
            "lines": [
              {
                "step": "Find a real number $x$ for which $(x + 8i)(-8 - 2i)$ is an imaginary number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + 8i)(-8 - 2i) = -8x - 2xi - 64i - 16i^2$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$-8x - 2xi - 64i - 16i^2 = (-8x + 16) + (-2x - 64)i$",
                "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
              },
              {
                "step": "The real part $-8x + 16$ is $0$.",
                "reason": "Imaginary number: $bi$ is imaginary for every real $b$, so the real part is $0$."
              },
              {
                "step": "$x = 2$",
                "reason": "Adding the same number to both sides and dividing both sides by $-8$, a nonzero number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a real number $x$ for which $(x + 4i)(-5 + 8i)$ is an imaginary number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -32/5",
              "lines": [
                {
                  "step": "Find a real number $x$ for which $(x + 4i)(-5 + 8i)$ is an imaginary number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 4i)(-5 + 8i) = -5x + 8xi - 20i + 32i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$-5x + 8xi - 20i + 32i^2 = (-5x - 32) + (8x - 20)i$",
                  "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
                },
                {
                  "step": "The real part $-5x - 32$ is $0$.",
                  "reason": "Imaginary number: $bi$ is imaginary for every real $b$, so the real part is $0$."
                },
                {
                  "step": "$x = -\\dfrac{32}{5}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-5$, a nonzero number."
                }
              ]
            },
            {
              "prompt": "Find a real number $x$ for which $(x + 7i)(6 - 5i)$ is an imaginary number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -35/6",
              "lines": [
                {
                  "step": "Find a real number $x$ for which $(x + 7i)(6 - 5i)$ is an imaginary number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 7i)(6 - 5i) = 6x - 5xi + 42i - 35i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$6x - 5xi + 42i - 35i^2 = (6x + 35) + (-5x + 42)i$",
                  "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
                },
                {
                  "step": "The real part $6x + 35$ is $0$.",
                  "reason": "Imaginary number: $bi$ is imaginary for every real $b$, so the real part is $0$."
                },
                {
                  "step": "$x = -\\dfrac{35}{6}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $6$, a nonzero number."
                }
              ]
            },
            {
              "prompt": "Find a real number $x$ for which $(x + 9i)(9 + 5i)$ is an imaginary number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5",
              "lines": [
                {
                  "step": "Find a real number $x$ for which $(x + 9i)(9 + 5i)$ is an imaginary number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 9i)(9 + 5i) = 9x + 5xi + 81i + 45i^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$9x + 5xi + 81i + 45i^2 = (9x - 45) + (5x + 81)i$",
                  "reason": "The number $i$ with $i^2 = -1$, then collecting like terms: the real parts together and the imaginary parts together."
                },
                {
                  "step": "The real part $9x - 45$ is $0$.",
                  "reason": "Imaginary number: $bi$ is imaginary for every real $b$, so the real part is $0$."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Adding the same number to both sides and dividing both sides by $9$, a nonzero number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k4",
      "forms": [
        {
          "example": {
            "problem": "Find all complex numbers whose square is $-105 + 88i$.",
            "lines": [
              {
                "step": "Find all complex numbers whose square is $-105 + 88i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
              },
              {
                "step": "So $x^2 - y^2 = -105$ and $2xy = 88$.",
                "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = -105 + 88i$."
              },
              {
                "step": "So $xy = 44$, and of the factor pairs of $44$, the pairs $x = 4$, $y = 11$ and $x = -4$, $y = -11$ give $x^2 - y^2 = 16 - 121 = -105$.",
                "reason": "Factor pairs of the constant: each pair is tried in the first equation, and two pairs fit."
              },
              {
                "step": "The two numbers are $4 + 11i$ and $-4 - 11i$.",
                "reason": "Both pairs fit the two equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find all complex numbers whose square is $-19 - 180i$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{9-10*i, -9+10*i}",
              "lines": [
                {
                  "step": "Find all complex numbers whose square is $-19 - 180i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "So $x^2 - y^2 = -19$ and $2xy = -180$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = -19 - 180i$."
                },
                {
                  "step": "So $xy = -90$, and of the factor pairs of $-90$, the pairs $x = 9$, $y = -10$ and $x = -9$, $y = 10$ give $x^2 - y^2 = 81 - 100 = -19$.",
                  "reason": "Factor pairs of the constant: each pair is tried in the first equation, and two pairs fit."
                },
                {
                  "step": "The two numbers are $9 - 10i$ and $-9 + 10i$.",
                  "reason": "Both pairs fit the two equations."
                }
              ]
            },
            {
              "prompt": "Find all complex numbers whose square is $-96 + 40i$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2+10*i, -2-10*i}",
              "lines": [
                {
                  "step": "Find all complex numbers whose square is $-96 + 40i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "So $x^2 - y^2 = -96$ and $2xy = 40$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = -96 + 40i$."
                },
                {
                  "step": "So $xy = 20$, and of the factor pairs of $20$, the pairs $x = 2$, $y = 10$ and $x = -2$, $y = -10$ give $x^2 - y^2 = 4 - 100 = -96$.",
                  "reason": "Factor pairs of the constant: each pair is tried in the first equation, and two pairs fit."
                },
                {
                  "step": "The two numbers are $2 + 10i$ and $-2 - 10i$.",
                  "reason": "Both pairs fit the two equations."
                }
              ]
            },
            {
              "prompt": "Find all complex numbers whose square is $128i$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{8+8*i, -8-8*i}",
              "lines": [
                {
                  "step": "Find all complex numbers whose square is $128i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "So $x^2 - y^2 = 0$ and $2xy = 128$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = 128i$."
                },
                {
                  "step": "So $xy = 64$, and of the factor pairs of $64$, the pairs $x = 8$, $y = 8$ and $x = -8$, $y = -8$ give $x^2 - y^2 = 64 - 64 = 0$.",
                  "reason": "Factor pairs of the constant: each pair is tried in the first equation, and two pairs fit."
                },
                {
                  "step": "The two numbers are $8 + 8i$ and $-8 - 8i$.",
                  "reason": "Both pairs fit the two equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find all complex numbers whose square is $-24 + 70i$.",
            "lines": [
              {
                "step": "Find all complex numbers whose square is $-24 + 70i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
              },
              {
                "step": "So $x^2 - y^2 = -24$ and $2xy = 70$.",
                "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = -24 + 70i$."
              },
              {
                "step": "So $y = \\dfrac{35}{x}$, and $x^2 - \\dfrac{1225}{x^2} = -24$.",
                "reason": "Substitution: $x$ is not $0$, since $2xy = 70$, so the second equation gives $y$, and its value is put into the first."
              },
              {
                "step": "So $x^4 + 24x^2 - 1225 = 0$.",
                "reason": "Multiplying both sides by the same number, $x^2$, then adding the same number to both sides."
              },
              {
                "step": "So $(x^2 - 25)(x^2 + 49) = 0$.",
                "reason": "Factoring a quadratic, in $x^2$: the two numbers $-25$ and $49$ have product $-1225$ and sum $24$."
              },
              {
                "step": "So $x^2 = 25$.",
                "reason": "Zero-product property: $x^2 + 49$ is above $0$ for a real number $x$, so the other factor is $0$."
              },
              {
                "step": "So $x = 5$ and $y = 7$, or $x = -5$ and $y = -7$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and line 4 gives $y$ from each $x$."
              },
              {
                "step": "The two numbers are $5 + 7i$ and $-5 - 7i$.",
                "reason": "Both pairs fit the two equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find all complex numbers whose square is $128 + 96i$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{12+4*i, -12-4*i}",
              "lines": [
                {
                  "step": "Find all complex numbers whose square is $128 + 96i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "So $x^2 - y^2 = 128$ and $2xy = 96$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = 128 + 96i$."
                },
                {
                  "step": "So $y = \\dfrac{48}{x}$, and $x^2 - \\dfrac{2304}{x^2} = 128$.",
                  "reason": "Substitution: $x$ is not $0$, since $2xy = 96$, so the second equation gives $y$, and its value is put into the first."
                },
                {
                  "step": "So $x^4 - 128x^2 - 2304 = 0$.",
                  "reason": "Multiplying both sides by the same number, $x^2$, then adding the same number to both sides."
                },
                {
                  "step": "So $(x^2 - 144)(x^2 + 16) = 0$.",
                  "reason": "Factoring a quadratic, in $x^2$: the two numbers $-144$ and $16$ have product $-2304$ and sum $-128$."
                },
                {
                  "step": "So $x^2 = 144$.",
                  "reason": "Zero-product property: $x^2 + 16$ is above $0$ for a real number $x$, so the other factor is $0$."
                },
                {
                  "step": "So $x = 12$ and $y = 4$, or $x = -12$ and $y = -4$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and line 4 gives $y$ from each $x$."
                },
                {
                  "step": "The two numbers are $12 + 4i$ and $-12 - 4i$.",
                  "reason": "Both pairs fit the two equations."
                }
              ]
            },
            {
              "prompt": "Find all complex numbers whose square is $-13 - 84i$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{6-7*i, -6+7*i}",
              "lines": [
                {
                  "step": "Find all complex numbers whose square is $-13 - 84i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "So $x^2 - y^2 = -13$ and $2xy = -84$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = -13 - 84i$."
                },
                {
                  "step": "So $y = -\\dfrac{42}{x}$, and $x^2 - \\dfrac{1764}{x^2} = -13$.",
                  "reason": "Substitution: $x$ is not $0$, since $2xy = -84$, so the second equation gives $y$, and its value is put into the first."
                },
                {
                  "step": "So $x^4 + 13x^2 - 1764 = 0$.",
                  "reason": "Multiplying both sides by the same number, $x^2$, then adding the same number to both sides."
                },
                {
                  "step": "So $(x^2 - 36)(x^2 + 49) = 0$.",
                  "reason": "Factoring a quadratic, in $x^2$: the two numbers $-36$ and $49$ have product $-1764$ and sum $13$."
                },
                {
                  "step": "So $x^2 = 36$.",
                  "reason": "Zero-product property: $x^2 + 49$ is above $0$ for a real number $x$, so the other factor is $0$."
                },
                {
                  "step": "So $x = 6$ and $y = -7$, or $x = -6$ and $y = 7$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and line 4 gives $y$ from each $x$."
                },
                {
                  "step": "The two numbers are $6 - 7i$ and $-6 + 7i$.",
                  "reason": "Both pairs fit the two equations."
                }
              ]
            },
            {
              "prompt": "Find all complex numbers whose square is $-91 + 60i$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3+10*i, -3-10*i}",
              "lines": [
                {
                  "step": "Find all complex numbers whose square is $-91 + 60i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the number be $x + yi$, with $x$ and $y$ real, so $(x + yi)^2 = x^2 - y^2 + 2xyi$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "So $x^2 - y^2 = -91$ and $2xy = 60$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: $x^2 - y^2 + 2xyi = -91 + 60i$."
                },
                {
                  "step": "So $y = \\dfrac{30}{x}$, and $x^2 - \\dfrac{900}{x^2} = -91$.",
                  "reason": "Substitution: $x$ is not $0$, since $2xy = 60$, so the second equation gives $y$, and its value is put into the first."
                },
                {
                  "step": "So $x^4 + 91x^2 - 900 = 0$.",
                  "reason": "Multiplying both sides by the same number, $x^2$, then adding the same number to both sides."
                },
                {
                  "step": "So $(x^2 - 9)(x^2 + 100) = 0$.",
                  "reason": "Factoring a quadratic, in $x^2$: the two numbers $-9$ and $100$ have product $-900$ and sum $91$."
                },
                {
                  "step": "So $x^2 = 9$.",
                  "reason": "Zero-product property: $x^2 + 100$ is above $0$ for a real number $x$, so the other factor is $0$."
                },
                {
                  "step": "So $x = 3$ and $y = 10$, or $x = -3$ and $y = -10$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and line 4 gives $y$ from each $x$."
                },
                {
                  "step": "The two numbers are $3 + 10i$ and $-3 - 10i$.",
                  "reason": "Both pairs fit the two equations."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k5",
      "forms": [
        {
          "example": {
            "problem": "Write $\\dfrac{9 - 8i}{4 + 6i}$ as a complex number $a + bi$.",
            "lines": [
              {
                "step": "Write $\\dfrac{9 - 8i}{4 + 6i}$ as a complex number $a + bi$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{9 - 8i}{4 + 6i} = \\dfrac{(9 - 8i)(4 - 6i)}{(4 + 6i)(4 - 6i)}$",
                "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $4 + 6i$ is $4 - 6i$."
              },
              {
                "step": "$\\dfrac{(9 - 8i)(4 - 6i)}{(4 + 6i)(4 - 6i)} = \\dfrac{(9 - 8i)(4 - 6i)}{52}$",
                "reason": "A number times its conjugate is $a^2 + b^2$: $4^2 + 6^2 = 52$."
              },
              {
                "step": "$\\dfrac{(9 - 8i)(4 - 6i)}{52} = \\dfrac{-12 - 86i}{52}$",
                "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
              },
              {
                "step": "$\\dfrac{-12 - 86i}{52} = -\\dfrac{3}{13} - \\dfrac{43}{26}i$",
                "reason": "Each part is divided by $52$, and cancelling a common factor leaves each fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{9 - 9i}{-3 + 5i}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-36/17-9*i/17",
              "lines": [
                {
                  "step": "Write $\\dfrac{9 - 9i}{-3 + 5i}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9 - 9i}{-3 + 5i} = \\dfrac{(9 - 9i)(-3 - 5i)}{(-3 + 5i)(-3 - 5i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $-3 + 5i$ is $-3 - 5i$."
                },
                {
                  "step": "$\\dfrac{(9 - 9i)(-3 - 5i)}{(-3 + 5i)(-3 - 5i)} = \\dfrac{(9 - 9i)(-3 - 5i)}{34}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $(-3)^2 + 5^2 = 34$."
                },
                {
                  "step": "$\\dfrac{(9 - 9i)(-3 - 5i)}{34} = \\dfrac{-72 - 18i}{34}$",
                  "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
                },
                {
                  "step": "$\\dfrac{-72 - 18i}{34} = -\\dfrac{36}{17} - \\dfrac{9}{17}i$",
                  "reason": "Each part is divided by $34$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{-4 - 8i}{7 + 6i}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-76/85-32*i/85",
              "lines": [
                {
                  "step": "Write $\\dfrac{-4 - 8i}{7 + 6i}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-4 - 8i}{7 + 6i} = \\dfrac{(-4 - 8i)(7 - 6i)}{(7 + 6i)(7 - 6i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $7 + 6i$ is $7 - 6i$."
                },
                {
                  "step": "$\\dfrac{(-4 - 8i)(7 - 6i)}{(7 + 6i)(7 - 6i)} = \\dfrac{(-4 - 8i)(7 - 6i)}{85}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $7^2 + 6^2 = 85$."
                },
                {
                  "step": "$\\dfrac{(-4 - 8i)(7 - 6i)}{85} = \\dfrac{-76 - 32i}{85}$",
                  "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
                },
                {
                  "step": "$\\dfrac{-76 - 32i}{85} = -\\dfrac{76}{85} - \\dfrac{32}{85}i$",
                  "reason": "Each part is divided by $85$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{-5 + 2i}{3 + 4i}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-7/25+26*i/25",
              "lines": [
                {
                  "step": "Write $\\dfrac{-5 + 2i}{3 + 4i}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-5 + 2i}{3 + 4i} = \\dfrac{(-5 + 2i)(3 - 4i)}{(3 + 4i)(3 - 4i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $3 + 4i$ is $3 - 4i$."
                },
                {
                  "step": "$\\dfrac{(-5 + 2i)(3 - 4i)}{(3 + 4i)(3 - 4i)} = \\dfrac{(-5 + 2i)(3 - 4i)}{25}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $3^2 + 4^2 = 25$."
                },
                {
                  "step": "$\\dfrac{(-5 + 2i)(3 - 4i)}{25} = \\dfrac{-7 + 26i}{25}$",
                  "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
                },
                {
                  "step": "$\\dfrac{-7 + 26i}{25} = -\\dfrac{7}{25} + \\dfrac{26}{25}i$",
                  "reason": "Each part is divided by $25$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{5 + 8i}{9i}$ as a complex number $a + bi$.",
            "lines": [
              {
                "step": "Write $\\dfrac{5 + 8i}{9i}$ as a complex number $a + bi$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{5 + 8i}{9i} = \\dfrac{(5 + 8i) \\cdot i}{9i \\cdot i}$",
                "reason": "Cancelling a common factor read backwards: the top and the bottom are multiplied by $i$, which is not $0$, and the value is kept."
              },
              {
                "step": "$\\dfrac{(5 + 8i) \\cdot i}{9i \\cdot i} = \\dfrac{(5 + 8i) \\cdot i}{-9}$",
                "reason": "The number $i$ with $i^2 = -1$: $9i \\cdot i = 9i^2 = -9$."
              },
              {
                "step": "$\\dfrac{(5 + 8i) \\cdot i}{-9} = \\dfrac{-8 + 5i}{-9}$",
                "reason": "The distributive law, from arithmetic, with the number $i$ with $i^2 = -1$: $8i \\cdot i = -8$."
              },
              {
                "step": "$\\dfrac{-8 + 5i}{-9} = \\dfrac{8}{9} - \\dfrac{5}{9}i$",
                "reason": "Each part is divided by $-9$, and cancelling a common factor leaves each fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{7 + 9i}{-4i}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-9/4+7*i/4",
              "lines": [
                {
                  "step": "Write $\\dfrac{7 + 9i}{-4i}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7 + 9i}{-4i} = \\dfrac{(7 + 9i) \\cdot i}{-4i \\cdot i}$",
                  "reason": "Cancelling a common factor read backwards: the top and the bottom are multiplied by $i$, which is not $0$, and the value is kept."
                },
                {
                  "step": "$\\dfrac{(7 + 9i) \\cdot i}{-4i \\cdot i} = \\dfrac{(7 + 9i) \\cdot i}{4}$",
                  "reason": "The number $i$ with $i^2 = -1$: $-4i \\cdot i = -4i^2 = 4$."
                },
                {
                  "step": "$\\dfrac{(7 + 9i) \\cdot i}{4} = \\dfrac{-9 + 7i}{4}$",
                  "reason": "The distributive law, from arithmetic, with the number $i$ with $i^2 = -1$: $9i \\cdot i = -9$."
                },
                {
                  "step": "$\\dfrac{-9 + 7i}{4} = -\\dfrac{9}{4} + \\dfrac{7}{4}i$",
                  "reason": "Each part is divided by $4$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{-5 - 7i}{-8i}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "7/8-5*i/8",
              "lines": [
                {
                  "step": "Write $\\dfrac{-5 - 7i}{-8i}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-5 - 7i}{-8i} = \\dfrac{(-5 - 7i) \\cdot i}{-8i \\cdot i}$",
                  "reason": "Cancelling a common factor read backwards: the top and the bottom are multiplied by $i$, which is not $0$, and the value is kept."
                },
                {
                  "step": "$\\dfrac{(-5 - 7i) \\cdot i}{-8i \\cdot i} = \\dfrac{(-5 - 7i) \\cdot i}{8}$",
                  "reason": "The number $i$ with $i^2 = -1$: $-8i \\cdot i = -8i^2 = 8$."
                },
                {
                  "step": "$\\dfrac{(-5 - 7i) \\cdot i}{8} = \\dfrac{7 - 5i}{8}$",
                  "reason": "The distributive law, from arithmetic, with the number $i$ with $i^2 = -1$: $-7i \\cdot i = 7$."
                },
                {
                  "step": "$\\dfrac{7 - 5i}{8} = \\dfrac{7}{8} - \\dfrac{5}{8}i$",
                  "reason": "Each part is divided by $8$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{5 - 4i}{-3i}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "4/3+5*i/3",
              "lines": [
                {
                  "step": "Write $\\dfrac{5 - 4i}{-3i}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5 - 4i}{-3i} = \\dfrac{(5 - 4i) \\cdot i}{-3i \\cdot i}$",
                  "reason": "Cancelling a common factor read backwards: the top and the bottom are multiplied by $i$, which is not $0$, and the value is kept."
                },
                {
                  "step": "$\\dfrac{(5 - 4i) \\cdot i}{-3i \\cdot i} = \\dfrac{(5 - 4i) \\cdot i}{3}$",
                  "reason": "The number $i$ with $i^2 = -1$: $-3i \\cdot i = -3i^2 = 3$."
                },
                {
                  "step": "$\\dfrac{(5 - 4i) \\cdot i}{3} = \\dfrac{4 + 5i}{3}$",
                  "reason": "The distributive law, from arithmetic, with the number $i$ with $i^2 = -1$: $-4i \\cdot i = 4$."
                },
                {
                  "step": "$\\dfrac{4 + 5i}{3} = \\dfrac{4}{3} + \\dfrac{5}{3}i$",
                  "reason": "Each part is divided by $3$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $(-9 + 2i)^{-2}$ as a complex number $a + bi$.",
            "lines": [
              {
                "step": "Write $(-9 + 2i)^{-2}$ as a complex number $a + bi$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-9 + 2i)^{-2} = \\dfrac{1}{(-9 + 2i)^2}$",
                "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$."
              },
              {
                "step": "$\\dfrac{1}{(-9 + 2i)^2} = \\dfrac{1}{77 - 36i}$",
                "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(-9 + 2i)^2 = 77 - 36i$."
              },
              {
                "step": "$\\dfrac{1}{77 - 36i} = \\dfrac{77 + 36i}{(77 - 36i)(77 + 36i)}$",
                "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $77 - 36i$ is $77 + 36i$."
              },
              {
                "step": "$\\dfrac{77 + 36i}{(77 - 36i)(77 + 36i)} = \\dfrac{77 + 36i}{7225}$",
                "reason": "A number times its conjugate is $a^2 + b^2$: $77^2 + 36^2 = 7225$."
              },
              {
                "step": "$\\dfrac{77 + 36i}{7225} = \\dfrac{77}{7225} + \\dfrac{36}{7225}i$",
                "reason": "Each part is divided by $7225$, and cancelling a common factor leaves each fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $(-9 - 8i)^{-2}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "17/21025-144*i/21025",
              "lines": [
                {
                  "step": "Write $(-9 - 8i)^{-2}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-9 - 8i)^{-2} = \\dfrac{1}{(-9 - 8i)^2}$",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "$\\dfrac{1}{(-9 - 8i)^2} = \\dfrac{1}{17 + 144i}$",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(-9 - 8i)^2 = 17 + 144i$."
                },
                {
                  "step": "$\\dfrac{1}{17 + 144i} = \\dfrac{17 - 144i}{(17 + 144i)(17 - 144i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $17 + 144i$ is $17 - 144i$."
                },
                {
                  "step": "$\\dfrac{17 - 144i}{(17 + 144i)(17 - 144i)} = \\dfrac{17 - 144i}{21{,}025}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $17^2 + 144^2 = 21{,}025$."
                },
                {
                  "step": "$\\dfrac{17 - 144i}{21{,}025} = \\dfrac{17}{21{,}025} - \\dfrac{144}{21{,}025}i$",
                  "reason": "Each part is divided by $21{,}025$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $(-7 + 4i)^{-2}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "33/4225+56*i/4225",
              "lines": [
                {
                  "step": "Write $(-7 + 4i)^{-2}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-7 + 4i)^{-2} = \\dfrac{1}{(-7 + 4i)^2}$",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "$\\dfrac{1}{(-7 + 4i)^2} = \\dfrac{1}{33 - 56i}$",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(-7 + 4i)^2 = 33 - 56i$."
                },
                {
                  "step": "$\\dfrac{1}{33 - 56i} = \\dfrac{33 + 56i}{(33 - 56i)(33 + 56i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $33 - 56i$ is $33 + 56i$."
                },
                {
                  "step": "$\\dfrac{33 + 56i}{(33 - 56i)(33 + 56i)} = \\dfrac{33 + 56i}{4225}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $33^2 + 56^2 = 4225$."
                },
                {
                  "step": "$\\dfrac{33 + 56i}{4225} = \\dfrac{33}{4225} + \\dfrac{56}{4225}i$",
                  "reason": "Each part is divided by $4225$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Write $(-7 + 11i)^{-2}$ as a complex number $a + bi$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-18/7225+77*i/14450",
              "lines": [
                {
                  "step": "Write $(-7 + 11i)^{-2}$ as a complex number $a + bi$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-7 + 11i)^{-2} = \\dfrac{1}{(-7 + 11i)^2}$",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "$\\dfrac{1}{(-7 + 11i)^2} = \\dfrac{1}{-72 - 154i}$",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(-7 + 11i)^2 = -72 - 154i$."
                },
                {
                  "step": "$\\dfrac{1}{-72 - 154i} = \\dfrac{-72 + 154i}{(-72 - 154i)(-72 + 154i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $-72 - 154i$ is $-72 + 154i$."
                },
                {
                  "step": "$\\dfrac{-72 + 154i}{(-72 - 154i)(-72 + 154i)} = \\dfrac{-72 + 154i}{28{,}900}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $(-72)^2 + 154^2 = 28{,}900$."
                },
                {
                  "step": "$\\dfrac{-72 + 154i}{28{,}900} = -\\dfrac{18}{7225} + \\dfrac{77}{14{,}450}i$",
                  "reason": "Each part is divided by $28{,}900$, and cancelling a common factor leaves each fraction in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the complex number $z$ for which $z(-4 - 2i) = 16 + 18i$.",
            "lines": [
              {
                "step": "Find the complex number $z$ for which $z(-4 - 2i) = 16 + 18i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z = \\dfrac{16 + 18i}{-4 - 2i}$",
                "reason": "Dividing both sides by a nonzero number: $-4 - 2i$ is not $0$."
              },
              {
                "step": "$z = \\dfrac{(16 + 18i)(-4 + 2i)}{(-4 - 2i)(-4 + 2i)}$",
                "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $-4 - 2i$ is $-4 + 2i$."
              },
              {
                "step": "$z = \\dfrac{(16 + 18i)(-4 + 2i)}{20}$",
                "reason": "A number times its conjugate is $a^2 + b^2$: $(-4)^2 + 2^2 = 20$."
              },
              {
                "step": "$z = \\dfrac{-100 - 40i}{20}$",
                "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
              },
              {
                "step": "$z = -5 - 2i$",
                "reason": "Each part is divided by $20$, and cancelling a common factor leaves each part a whole number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the complex number $z$ for which $z(5 + 8i) = -65 - 15i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-5+5*i",
              "lines": [
                {
                  "step": "Find the complex number $z$ for which $z(5 + 8i) = -65 - 15i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{-65 - 15i}{5 + 8i}$",
                  "reason": "Dividing both sides by a nonzero number: $5 + 8i$ is not $0$."
                },
                {
                  "step": "$z = \\dfrac{(-65 - 15i)(5 - 8i)}{(5 + 8i)(5 - 8i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $5 + 8i$ is $5 - 8i$."
                },
                {
                  "step": "$z = \\dfrac{(-65 - 15i)(5 - 8i)}{89}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $5^2 + 8^2 = 89$."
                },
                {
                  "step": "$z = \\dfrac{-445 + 445i}{89}$",
                  "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
                },
                {
                  "step": "$z = -5 + 5i$",
                  "reason": "Each part is divided by $89$, and cancelling a common factor leaves each part a whole number."
                }
              ]
            },
            {
              "prompt": "Find the complex number $z$ for which $(-5 + 9i)z = -102 + 14i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "6+8*i",
              "lines": [
                {
                  "step": "Find the complex number $z$ for which $(-5 + 9i)z = -102 + 14i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{-102 + 14i}{-5 + 9i}$",
                  "reason": "Dividing both sides by a nonzero number: $-5 + 9i$ is not $0$."
                },
                {
                  "step": "$z = \\dfrac{(-102 + 14i)(-5 - 9i)}{(-5 + 9i)(-5 - 9i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $-5 + 9i$ is $-5 - 9i$."
                },
                {
                  "step": "$z = \\dfrac{(-102 + 14i)(-5 - 9i)}{106}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $(-5)^2 + 9^2 = 106$."
                },
                {
                  "step": "$z = \\dfrac{636 + 848i}{106}$",
                  "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
                },
                {
                  "step": "$z = 6 + 8i$",
                  "reason": "Each part is divided by $106$, and cancelling a common factor leaves each part a whole number."
                }
              ]
            },
            {
              "prompt": "Find the complex number $z$ for which $z(-8 - 2i) = 52 - 38i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-5+6*i",
              "lines": [
                {
                  "step": "Find the complex number $z$ for which $z(-8 - 2i) = 52 - 38i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{52 - 38i}{-8 - 2i}$",
                  "reason": "Dividing both sides by a nonzero number: $-8 - 2i$ is not $0$."
                },
                {
                  "step": "$z = \\dfrac{(52 - 38i)(-8 + 2i)}{(-8 - 2i)(-8 + 2i)}$",
                  "reason": "Dividing by multiplying top and bottom by the conjugate of the bottom: the complex conjugate of $-8 - 2i$ is $-8 + 2i$."
                },
                {
                  "step": "$z = \\dfrac{(52 - 38i)(-8 + 2i)}{68}$",
                  "reason": "A number times its conjugate is $a^2 + b^2$: $(-8)^2 + 2^2 = 68$."
                },
                {
                  "step": "$z = \\dfrac{-340 + 408i}{68}$",
                  "reason": "Every term of one bracket times every term of the other, with the number $i$ with $i^2 = -1$, then collecting like terms."
                },
                {
                  "step": "$z = -5 + 6i$",
                  "reason": "Each part is divided by $68$, and cancelling a common factor leaves each part a whole number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k7",
      "forms": [
        {
          "example": {
            "problem": "Find the complex number $z$ for which $12z - 8\\overline{z} = 24 - 80i$.",
            "lines": [
              {
                "step": "Find the complex number $z$ for which $12z - 8\\overline{z} = 24 - 80i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $z = x + yi$, with $x$ and $y$ real, so $\\overline{z} = x - yi$.",
                "reason": "Complex conjugate: the sign of the imaginary part is reversed."
              },
              {
                "step": "So $12(x + yi) - 8(x - yi) = 24 - 80i$.",
                "reason": "Substituting a value: $z$ and $\\overline{z}$ are replaced by their values, in brackets."
              },
              {
                "step": "So $4x + 20yi = 24 - 80i$.",
                "reason": "The distributive law, from arithmetic, then collecting like terms."
              },
              {
                "step": "So $4x = 24$ and $20y = -80$.",
                "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal."
              },
              {
                "step": "So $x = 6$ and $y = -4$, and $z = 6 - 4i$.",
                "reason": "Dividing both sides by a nonzero number, $4$ in the first equation and $20$ in the second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the complex number $z$ for which $9z + 7\\overline{z} = 32 + 14i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "2+7*i",
              "lines": [
                {
                  "step": "Find the complex number $z$ for which $9z + 7\\overline{z} = 32 + 14i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $z = x + yi$, with $x$ and $y$ real, so $\\overline{z} = x - yi$.",
                  "reason": "Complex conjugate: the sign of the imaginary part is reversed."
                },
                {
                  "step": "So $9(x + yi) + 7(x - yi) = 32 + 14i$.",
                  "reason": "Substituting a value: $z$ and $\\overline{z}$ are replaced by their values, in brackets."
                },
                {
                  "step": "So $16x + 2yi = 32 + 14i$.",
                  "reason": "The distributive law, from arithmetic, then collecting like terms."
                },
                {
                  "step": "So $16x = 32$ and $2y = 14$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal."
                },
                {
                  "step": "So $x = 2$ and $y = 7$, and $z = 2 + 7i$.",
                  "reason": "Dividing both sides by a nonzero number, $16$ in the first equation and $2$ in the second."
                }
              ]
            },
            {
              "prompt": "Find the complex number $z$ for which $7z + 9\\overline{z} = -48 + 16i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-3-8*i",
              "lines": [
                {
                  "step": "Find the complex number $z$ for which $7z + 9\\overline{z} = -48 + 16i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $z = x + yi$, with $x$ and $y$ real, so $\\overline{z} = x - yi$.",
                  "reason": "Complex conjugate: the sign of the imaginary part is reversed."
                },
                {
                  "step": "So $7(x + yi) + 9(x - yi) = -48 + 16i$.",
                  "reason": "Substituting a value: $z$ and $\\overline{z}$ are replaced by their values, in brackets."
                },
                {
                  "step": "So $16x - 2yi = -48 + 16i$.",
                  "reason": "The distributive law, from arithmetic, then collecting like terms."
                },
                {
                  "step": "So $16x = -48$ and $-2y = 16$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal."
                },
                {
                  "step": "So $x = -3$ and $y = -8$, and $z = -3 - 8i$.",
                  "reason": "Dividing both sides by a nonzero number, $16$ in the first equation and $-2$ in the second."
                }
              ]
            },
            {
              "prompt": "Find the complex number $z$ for which $12z + 5\\overline{z} = -153 + 21i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-9+3*i",
              "lines": [
                {
                  "step": "Find the complex number $z$ for which $12z + 5\\overline{z} = -153 + 21i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $z = x + yi$, with $x$ and $y$ real, so $\\overline{z} = x - yi$.",
                  "reason": "Complex conjugate: the sign of the imaginary part is reversed."
                },
                {
                  "step": "So $12(x + yi) + 5(x - yi) = -153 + 21i$.",
                  "reason": "Substituting a value: $z$ and $\\overline{z}$ are replaced by their values, in brackets."
                },
                {
                  "step": "So $17x + 7yi = -153 + 21i$.",
                  "reason": "The distributive law, from arithmetic, then collecting like terms."
                },
                {
                  "step": "So $17x = -153$ and $7y = 21$.",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal."
                },
                {
                  "step": "So $x = -9$ and $y = 3$, and $z = -9 + 3i$.",
                  "reason": "Dividing both sides by a nonzero number, $17$ in the first equation and $7$ in the second."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k8",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working of $(-3 - 9i)(7 - 8i)$, and write that line right.",
            "given": [
              "$(-3 - 9i)(7 - 8i)$",
              "$-21 + 24i - 63i + 72i^2$",
              "$-21 + 24i - 63i + 72$",
              "$51 - 39i$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working of $(-3 - 9i)(7 - 8i)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes $72i^2$ as $72$.",
                "reason": "A sign lost: the number $i$ with $i^2 = -1$ gives $72i^2 = -72$, so $i^2$ is never $1$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $-21 + 24i - 63i - 72$.",
                "reason": "The term in $i^2$ changes its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of $(-4 - 2i)(-9 - 8i)$, and write that line right.",
              "given": [
                "$(-4 - 2i)(-9 - 8i)$",
                "$-4(-9 - 8i) - 2i(-9 - 8i)$",
                "$36 + 32i + 18i + 16i^2$",
                "$36 + 32i + 18i + 16$",
                "$52 + 50i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 36+32*i+18*i-16",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $(-4 - 2i)(-9 - 8i)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $16i^2$ as $16$.",
                  "reason": "A sign lost: the number $i$ with $i^2 = -1$ gives $16i^2 = -16$, so $i^2$ is never $1$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $36 + 32i + 18i - 16$.",
                  "reason": "The term in $i^2$ changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $(-5 + 2i)(-2 - 6i)$, and write that line right.",
              "given": [
                "$(-5 + 2i)(-2 - 6i)$",
                "$10 + 30i - 4i - 12i^2$",
                "$10 + 30i - 4i - 12$",
                "$(10 - 12) + (30 - 4)i$",
                "$-2 + 26i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 10+30*i-4*i+12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $(-5 + 2i)(-2 - 6i)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $-12i^2$ as $-12$.",
                  "reason": "A sign lost: the number $i$ with $i^2 = -1$ gives $-12i^2 = 12$, so $i^2$ is never $1$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $10 + 30i - 4i + 12$.",
                  "reason": "The term in $i^2$ changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $(4 - 2i)(9 + 5i)$, and write that line right.",
              "given": [
                "$(4 - 2i)(9 + 5i)$",
                "$4(9 + 5i) - 2i(9 + 5i)$",
                "$36 + 20i - 18i - 10i^2$",
                "$36 + 20i - 18i - 10$",
                "$26 + 2i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 36+20*i-18*i+10",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $(4 - 2i)(9 + 5i)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $-10i^2$ as $-10$.",
                  "reason": "A sign lost: the number $i$ with $i^2 = -1$ gives $-10i^2 = 10$, so $i^2$ is never $1$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $36 + 20i - 18i + 10$.",
                  "reason": "The term in $i^2$ changes its sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working of $4(6 + 6i) + 4(4 - 2i)$, and write that line right.",
            "given": [
              "$4(6 + 6i) + 4(4 - 2i)$",
              "$24 + 24i + 16 - 8i$",
              "$(24 + 24 + 16 - 8)i$",
              "$(40 + 16)i$",
              "$56i$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working of $4(6 + 6i) + 4(4 - 2i)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 adds the real part $40$ to the numbers in front of $i$, as if $i$ were a label on every term.",
                "reason": "A letter read as an object: $i$ is a number, a real number and a multiple of $i$ are not like terms, and collecting like terms keeps the real part and the imaginary part apart."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $40 + 16i$.",
                "reason": "Collecting like terms: the real parts together and the imaginary parts together."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of $5(-9 + 4i) + 7(-2 - 9i)$, and write that line right.",
              "given": [
                "$5(-9 + 4i) + 7(-2 - 9i)$",
                "$-45 + 20i - 14 - 63i$",
                "$(-45 - 14) + (20 - 63)i$",
                "$(-59 - 43)i$",
                "$-102i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -59-43*i",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $5(-9 + 4i) + 7(-2 - 9i)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 adds the real part $-59$ to the numbers in front of $i$, as if $i$ were a label on every term.",
                  "reason": "A letter read as an object: $i$ is a number, a real number and a multiple of $i$ are not like terms, and collecting like terms keeps the real part and the imaginary part apart."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $-59 - 43i$.",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $5(4 - 7i) + 4(6 + 4i)$, and write that line right.",
              "given": [
                "$5(4 - 7i) + 4(6 + 4i)$",
                "$20 - 35i + 24 + 16i$",
                "$(20 - 35 + 24 + 16)i$",
                "$(44 - 19)i$",
                "$25i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 44-19*i",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $5(4 - 7i) + 4(6 + 4i)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 adds the real part $44$ to the numbers in front of $i$, as if $i$ were a label on every term.",
                  "reason": "A letter read as an object: $i$ is a number, a real number and a multiple of $i$ are not like terms, and collecting like terms keeps the real part and the imaginary part apart."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $44 - 19i$.",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $6(-4 + 9i) + 4(9 - 8i)$, and write that line right.",
              "given": [
                "$6(-4 + 9i) + 4(9 - 8i)$",
                "$-24 + 54i + 36 - 32i$",
                "$(-24 + 36) + (54 - 32)i$",
                "$(12 + 22)i$",
                "$34i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 12+22*i",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $6(-4 + 9i) + 4(9 - 8i)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 adds the real part $12$ to the numbers in front of $i$, as if $i$ were a label on every term.",
                  "reason": "A letter read as an object: $i$ is a number, a real number and a multiple of $i$ are not like terms, and collecting like terms keeps the real part and the imaginary part apart."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $12 + 22i$.",
                  "reason": "Collecting like terms: the real parts together and the imaginary parts together."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working of $\\dfrac{7 + 4i}{-6 - 9i}$, and write that line right.",
            "given": [
              "$\\dfrac{7 + 4i}{-6 - 9i}$",
              "$\\dfrac{(7 + 4i)(-6 + 9i)}{(-6 - 9i)(-6 + 9i)}$",
              "$\\dfrac{(7 + 4i)(-6 + 9i)}{-45}$",
              "$\\dfrac{-78 + 39i}{-45}$",
              "$\\dfrac{26}{15} - \\dfrac{13}{15}i$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working of $\\dfrac{7 + 4i}{-6 - 9i}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes the bottom $(-6 - 9i)(-6 + 9i)$ as $(-6)^2 - 9^2 = -45$.",
                "reason": "A sign lost: a number times its conjugate is $a^2 + b^2$, since $81i^2 = -81$, so the bottom is $(-6)^2 + 9^2 = 117$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $\\dfrac{(7 + 4i)(-6 + 9i)}{117}$.",
                "reason": "The bottom is the sum of the two squares."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of $\\dfrac{-2 + 3i}{3 - 5i}$, and write that line right.",
              "given": [
                "$\\dfrac{-2 + 3i}{3 - 5i}$",
                "$\\dfrac{(-2 + 3i)(3 + 5i)}{(3 - 5i)(3 + 5i)}$",
                "$\\dfrac{(-2 + 3i)(3 + 5i)}{9 + 15i - 15i - 25i^2}$",
                "$\\dfrac{(-2 + 3i)(3 + 5i)}{-16}$",
                "$\\dfrac{-21 - i}{-16}$",
                "$\\dfrac{21}{16} + \\dfrac{1}{16}i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (-2+3*i)*(3+5*i)/34",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $\\dfrac{-2 + 3i}{3 - 5i}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the bottom $(3 - 5i)(3 + 5i)$ as $3^2 - 5^2 = -16$.",
                  "reason": "A sign lost: a number times its conjugate is $a^2 + b^2$, since $25i^2 = -25$, so the bottom is $3^2 + 5^2 = 34$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{(-2 + 3i)(3 + 5i)}{34}$.",
                  "reason": "The bottom is the sum of the two squares."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $\\dfrac{8 - 8i}{-5 - 3i}$, and write that line right.",
              "given": [
                "$\\dfrac{8 - 8i}{-5 - 3i}$",
                "$\\dfrac{(8 - 8i)(-5 + 3i)}{(-5 - 3i)(-5 + 3i)}$",
                "$\\dfrac{(8 - 8i)(-5 + 3i)}{16}$",
                "$\\dfrac{-16 + 64i}{16}$",
                "$-1 + 4i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (8-8*i)*(-5+3*i)/34",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $\\dfrac{8 - 8i}{-5 - 3i}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the bottom $(-5 - 3i)(-5 + 3i)$ as $(-5)^2 - 3^2 = 16$.",
                  "reason": "A sign lost: a number times its conjugate is $a^2 + b^2$, since $9i^2 = -9$, so the bottom is $(-5)^2 + 3^2 = 34$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{(8 - 8i)(-5 + 3i)}{34}$.",
                  "reason": "The bottom is the sum of the two squares."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $\\dfrac{-5 + 8i}{8 - 3i}$, and write that line right.",
              "given": [
                "$\\dfrac{-5 + 8i}{8 - 3i}$",
                "$\\dfrac{(-5 + 8i)(8 + 3i)}{(8 - 3i)(8 + 3i)}$",
                "$\\dfrac{(-5 + 8i)(8 + 3i)}{64 + 24i - 24i - 9i^2}$",
                "$\\dfrac{(-5 + 8i)(8 + 3i)}{55}$",
                "$\\dfrac{-64 + 49i}{55}$",
                "$-\\dfrac{64}{55} + \\dfrac{49}{55}i$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (-5+8*i)*(8+3*i)/73",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $\\dfrac{-5 + 8i}{8 - 3i}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the bottom $(8 - 3i)(8 + 3i)$ as $8^2 - 3^2 = 55$.",
                  "reason": "A sign lost: a number times its conjugate is $a^2 + b^2$, since $9i^2 = -9$, so the bottom is $8^2 + 3^2 = 73$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{(-5 + 8i)(8 + 3i)}{73}$.",
                  "reason": "The bottom is the sum of the two squares."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t144-k9",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is $i$ times the sum of $x$ and 4.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is $i$ times the sum of $x$ and 4.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of $x$ and 4 is $x + 4$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it."
              },
              {
                "step": "$z = i(x + 4)$",
                "reason": "Writing a sentence as an equation: \"$i$ times\" multiplies the whole sum by $i$, and \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is the product of $6 - 7i$ and $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (6-7*i)*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is the product of $6 - 7i$ and $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $6 - 7i$ is kept whole, in brackets: $(6 - 7i)$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers named after it, each whole."
                },
                {
                  "step": "$z = (6 - 7i)x$",
                  "reason": "Writing a sentence as an equation: the product of $(6 - 7i)$ and $x$ is $(6 - 7i)x$, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is $x$ divided by $9 - 4i$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x/(9-4*i)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is $x$ divided by $9 - 4i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $9 - 4i$ is kept whole, as the bottom of a fraction.",
                  "reason": "Writing a sentence as an equation: \"divided by\" puts the whole number after it below the fraction bar."
                },
                {
                  "step": "$z = \\dfrac{x}{9 - 4i}$",
                  "reason": "Writing a sentence as an equation: $x$ goes on top, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is the square of the sum of $x$ and $3i$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (x+3*i)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $z$ alone on the left: The number $z$ is the square of the sum of $x$ and $3i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and $3i$ is $x + 3i$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it."
                },
                {
                  "step": "$z = (x + 3i)^2$",
                  "reason": "Writing a sentence as an equation: \"the square of\" squares the whole sum, and \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation the real parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $72i$.",
            "lines": [
              {
                "step": "Write the equation the real parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $72i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of $x + yi$ is $72i$, so $(x + yi)^2 = 72i$.",
                "reason": "Writing a sentence as an equation: \"the square of\" squares the whole sum, and \"is\" marks the place of the equals sign."
              },
              {
                "step": "So $x^2 - y^2 + 2xyi = 72i$.",
                "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
              },
              {
                "step": "$x^2 - y^2 = 0$",
                "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the real parts are $x^2 - y^2$ and $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation the imaginary parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $162i$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*x*y = 162",
              "lines": [
                {
                  "step": "Write the equation the imaginary parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $162i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x + yi$ is $162i$, so $(x + yi)^2 = 162i$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" squares the whole sum, and \"is\" marks the place of the equals sign."
                },
                {
                  "step": "So $x^2 - y^2 + 2xyi = 162i$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "$2xy = 162$",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the imaginary parts are $2xy$ and $162$."
                }
              ]
            },
            {
              "prompt": "Write the equation the real parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $14 + 62i$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2-y^2 = 14",
              "lines": [
                {
                  "step": "Write the equation the real parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $14 + 62i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x + yi$ is $14 + 62i$, so $(x + yi)^2 = 14 + 62i$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" squares the whole sum, and \"is\" marks the place of the equals sign."
                },
                {
                  "step": "So $x^2 - y^2 + 2xyi = 14 + 62i$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "$x^2 - y^2 = 14$",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the real parts are $x^2 - y^2$ and $14$."
                }
              ]
            },
            {
              "prompt": "Write the equation the imaginary parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $-38 + 18i$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*x*y = 18",
              "lines": [
                {
                  "step": "Write the equation the imaginary parts give, in $x$ and $y$ with the terms in $x$ and $y$ on the left: The square of $x + yi$, with $x$ and $y$ real, is $-38 + 18i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x + yi$ is $-38 + 18i$, so $(x + yi)^2 = -38 + 18i$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" squares the whole sum, and \"is\" marks the place of the equals sign."
                },
                {
                  "step": "So $x^2 - y^2 + 2xyi = -38 + 18i$.",
                  "reason": "Square of a binomial, with the number $i$ with $i^2 = -1$: $(yi)^2 = -y^2$."
                },
                {
                  "step": "$2xy = 18$",
                  "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal: the imaginary parts are $2xy$ and $18$."
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
      "id": "t144-p1",
      "method": "direct proof",
      "statement": "For real numbers $a$ and $b$, $(a + bi)(a - bi) = a^2 + b^2$.",
      "idea": "Multiply out: the two middle terms cancel, and $i^2 = -1$ turns the minus sign in front of $b^2$ into a plus sign.",
      "lines": [
        {
          "line": "The product $(a + bi)(a - bi)$ equals $a \\cdot a - a \\cdot bi + bi \\cdot a - bi \\cdot bi$.",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "The products are $a \\cdot a = a^2$, $a \\cdot bi = abi$, $bi \\cdot a = abi$ and $bi \\cdot bi = b^2i^2$.",
          "reason": "The commutative and associative laws of multiplication and the definition of a power, from arithmetic."
        },
        {
          "line": "So the product equals $a^2 - abi + abi - b^2i^2$.",
          "reason": "Line 1, with each product replaced by its value in line 2."
        },
        {
          "line": "The terms $-abi$ and $abi$ add to $0$.",
          "reason": "Collecting like terms: $(-1 + 1)abi = 0$."
        },
        {
          "line": "So the product equals $a^2 - b^2i^2$.",
          "reason": "Line 3, with the two middle terms replaced by $0$ by line 4."
        },
        {
          "line": "The term $b^2i^2$ equals $-b^2$.",
          "reason": "The number $i$ with $i^2 = -1$."
        },
        {
          "line": "Therefore $(a + bi)(a - bi) = a^2 + b^2$.",
          "reason": "Line 5 with line 6, since subtracting $-b^2$ is adding $b^2$, from arithmetic."
        }
      ]
    },
    {
      "id": "t144-p2",
      "method": "direct proof",
      "statement": "For real numbers $a$, $b$, $c$ and $d$, $\\overline{(a + bi) + (c + di)} = \\overline{a + bi} + \\overline{c + di}$ and $\\overline{(a + bi)(c + di)} = \\overline{a + bi} \\cdot \\overline{c + di}$.",
      "idea": "Write each side as a complex number with its real part and its imaginary part, and compare: the two sides come out the same.",
      "lines": [
        {
          "line": "The sum $(a + bi) + (c + di)$ equals $(a + c) + (b + d)i$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "So its conjugate is $(a + c) - (b + d)i$.",
          "reason": "Complex conjugate."
        },
        {
          "line": "The conjugates of $a + bi$ and $c + di$ are $a - bi$ and $c - di$.",
          "reason": "Complex conjugate."
        },
        {
          "line": "So $\\overline{a + bi} + \\overline{c + di} = (a + c) - (b + d)i$.",
          "reason": "Collecting like terms, used on line 3."
        },
        {
          "line": "So $\\overline{(a + bi) + (c + di)} = \\overline{a + bi} + \\overline{c + di}$.",
          "reason": "Lines 2 and 4, with the symmetric and the transitive properties."
        },
        {
          "line": "The product $(a + bi)(c + di)$ equals $ac + adi + bci + bdi^2$.",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "So the product equals $ac + adi + bci - bd$.",
          "reason": "The number $i$ with $i^2 = -1$: $bdi^2 = -bd$."
        },
        {
          "line": "So the product equals $(ac - bd) + (ad + bc)i$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "So its conjugate is $(ac - bd) - (ad + bc)i$.",
          "reason": "Complex conjugate."
        },
        {
          "line": "The product $(a - bi)(c - di)$ equals $ac - adi - bci + bdi^2$.",
          "reason": "Every term of one bracket times every term of the other, used on the conjugates of line 3."
        },
        {
          "line": "So the product of the conjugates equals $ac - adi - bci - bd$.",
          "reason": "The number $i$ with $i^2 = -1$: $bdi^2 = -bd$."
        },
        {
          "line": "So $\\overline{a + bi} \\cdot \\overline{c + di} = (ac - bd) - (ad + bc)i$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "Therefore $\\overline{(a + bi)(c + di)} = \\overline{a + bi} \\cdot \\overline{c + di}$.",
          "reason": "Lines 9 and 12, with the symmetric and the transitive properties."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t144-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$, the complex conjugate of the complex conjugate of $a + bi$ is $a + bi$. Facts it may use: complex conjugate, real part and imaginary part.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers.",
            "reason": "The statement is about every complex number $a + bi$, so one of them is named."
          },
          {
            "line": "The complex conjugate of $a + bi$ is $a - bi$.",
            "reason": "Complex conjugate."
          },
          {
            "line": "The number $a - bi$ is $a + (-b)i$, with real part $a$ and imaginary part $-b$.",
            "reason": "Subtraction as addition, from arithmetic: taking away a number adds its negative."
          },
          {
            "line": "The complex conjugate of $a + (-b)i$ is $a - (-b)i$.",
            "reason": "Complex conjugate, with $-b$ in place of $b$."
          },
          {
            "line": "The number $a - (-b)i$ is $a + bi$.",
            "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
          },
          {
            "line": "Therefore the complex conjugate of the complex conjugate of $a + bi$ is $a + bi$.",
            "reason": "Lines 2 to 5 and the transitive property."
          }
        ]
      }
    },
    {
      "id": "t144-s2",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$, the sum of $a + bi$ and its complex conjugate is the real number $2a$. Facts it may use: complex conjugate, collecting like terms, real number.",
      "check": {
        "proof": [
          {
            "line": "The complex conjugate of $a + bi$ is $a - bi$.",
            "reason": "Complex conjugate."
          },
          {
            "line": "The sum $(a + bi) + (a - bi)$ equals $(a + a) + (b - b)i$.",
            "reason": "Collecting like terms: the real parts together and the imaginary parts together."
          },
          {
            "line": "The sum $a + a$ equals $2a$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "The difference $b - b$ equals $0$.",
            "reason": "A number minus itself is $0$, from arithmetic."
          },
          {
            "line": "So the sum is $2a + 0i$.",
            "reason": "Line 2, with each bracket replaced by its value in lines 3 and 4."
          },
          {
            "line": "So the sum is $2a$.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "Therefore the sum is $2a$, a real number.",
            "reason": "A complex number with imaginary part $0$ is a real number."
          }
        ]
      }
    },
    {
      "id": "t144-s3",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$, the complex conjugate of $a + bi$ equals $a + bi$ exactly when $a + bi$ is a real number. Facts it may use: complex conjugate, two complex numbers are equal when their real parts and their imaginary parts are equal, real number.",
      "check": {
        "proof": [
          {
            "line": "The complex conjugate of $a + bi$ is $a - bi$.",
            "reason": "Complex conjugate."
          },
          {
            "line": "So the complex conjugate equals $a + bi$ exactly when $a - bi = a + bi$.",
            "reason": "Line 1."
          },
          {
            "line": "The equation $a - bi = a + bi$ holds exactly when $a = a$ and $-b = b$.",
            "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal."
          },
          {
            "line": "The equation $-b = b$ holds exactly when $2b = 0$.",
            "reason": "Adding the same number to both sides: $b$ added, or taken away again."
          },
          {
            "line": "The equation $2b = 0$ holds exactly when $b = 0$.",
            "reason": "Dividing both sides by a nonzero number, $2$, or multiplying both sides by it again."
          },
          {
            "line": "Since $a = a$ always holds, the complex conjugate equals $a + bi$ exactly when $b = 0$.",
            "reason": "Lines 2 to 5."
          },
          {
            "line": "Therefore the complex conjugate of $a + bi$ equals $a + bi$ exactly when $a + bi$ is a real number.",
            "reason": "A complex number is a real number exactly when its imaginary part, here $b$, is $0$."
          }
        ]
      }
    },
    {
      "id": "t144-s4",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$, if $(a + bi)^2$ is a real number, then $a = 0$ or $b = 0$. Facts it may use: square of a binomial, the number $i$ with $i^2 = -1$, collecting like terms, real number, dividing both sides by a nonzero number, zero-product property.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $(a + bi)^2$ is a real number.",
            "reason": "This is the condition of the statement."
          },
          {
            "line": "The square $(a + bi)^2$ equals $a^2 + 2abi + b^2i^2$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "The term $b^2i^2$ equals $-b^2$.",
            "reason": "The number $i$ with $i^2 = -1$."
          },
          {
            "line": "So the square equals $(a^2 - b^2) + 2abi$.",
            "reason": "Collecting like terms, used on line 2 with line 3."
          },
          {
            "line": "So $2ab = 0$.",
            "reason": "A real number has imaginary part $0$, by line 1."
          },
          {
            "line": "So $ab = 0$.",
            "reason": "Dividing both sides by a nonzero number, $2$."
          },
          {
            "line": "Therefore $a = 0$ or $b = 0$.",
            "reason": "Zero-product property."
          }
        ]
      }
    },
    {
      "id": "t144-s5",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$ and $c$ with $a$ not $0$, if $(a + bi)(a + ci)$ is a real number, then $c = -b$. Facts it may use: every term of one bracket times every term of the other, the number $i$ with $i^2 = -1$, collecting like terms, real number, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $(a + bi)(a + ci)$ is a real number.",
            "reason": "This is the condition of the statement."
          },
          {
            "line": "The product $(a + bi)(a + ci)$ equals $a^2 + aci + abi + bci^2$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "The term $bci^2$ equals $-bc$.",
            "reason": "The number $i$ with $i^2 = -1$."
          },
          {
            "line": "So the product equals $(a^2 - bc) + (ac + ab)i$.",
            "reason": "Collecting like terms, used on line 2 with line 3."
          },
          {
            "line": "So $ac + ab = 0$.",
            "reason": "A real number has imaginary part $0$, by line 1."
          },
          {
            "line": "So $a(c + b) = 0$.",
            "reason": "The distributive law read backwards, from arithmetic."
          },
          {
            "line": "So $c + b = 0$.",
            "reason": "Dividing both sides by a nonzero number, $a$."
          },
          {
            "line": "Therefore $c = -b$.",
            "reason": "Adding the same number to both sides: $b$ is taken away."
          }
        ]
      }
    }
  ]
}
