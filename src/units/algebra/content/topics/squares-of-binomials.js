export default {
  "number": 137,
  "title": "Squares of a binomial",
  "section": 7,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "324-332, 352-356"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Expand $(3y - 2)^2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "9*y^2-12*y+4",
    "solution": [
      "Expand $(3y - 2)^2$.",
      "$(3y - 2)^2 = (3y)^2 + 2(3y)(-2) + (-2)^2$",
      "$(3y)^2 + 2(3y)(-2) + (-2)^2 = 9y^2 - 12y + 4$"
    ]
  },
  "ideas": [
    {
      "name": "Square of a binomial",
      "concrete": "The square $(x + 10)^2$ is $(x + 10)(x + 10)$, which is $x^2 + 10x + 10x + 100$: the two middle products are both $10x$, so they collect to $20x$, twice the product of $x$ and $10$, and $(x + 10)^2 = x^2 + 20x + 100$.",
      "general": "For all numbers $a$ and $b$, $(a + b)^2 = a^2 + 2ab + b^2$: the **square of a binomial** is the square of the first term, plus twice the product of the two terms, plus the square of the second term. With $-b$ in place of $b$ it reads $(a - b)^2 = a^2 - 2ab + b^2$."
    },
    {
      "name": "Perfect-square quadratic",
      "concrete": "In $25x^2 - 30x + 9$ the first term is $(5x)^2$, the last term is $(-3)^2$ and the middle term is $2(5x)(-3)$, so $25x^2 - 30x + 9 = (5x - 3)^2$.",
      "general": "A **perfect-square quadratic** is a quadratic that is the square of a binomial. For numbers $d$ and $e$ with $d \\ne 0$, the quadratic $d^2x^2 + bx + e^2$ is the square of a binomial exactly when $b = 2de$ or $b = -2de$, and then it is $(dx + e)^2$ or $(dx - e)^2$."
    }
  ],
  "kinds": [
    {
      "id": "t137-k1",
      "forms": [
        {
          "example": {
            "problem": "Expand $(y - 15)^2$.",
            "lines": [
              {
                "step": "Expand $(y - 15)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(y - 15)^2 = y^2 + 2(y)(-15) + (-15)^2$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = y$ and $b = -15$."
              },
              {
                "step": "$y^2 + 2(y)(-15) + (-15)^2 = y^2 - 30y + 225$",
                "reason": "Signs of products, from arithmetic, give $2(y)(-15) = -30y$ and $(-15)^2 = 225$, since a product of two numbers of the same sign is positive and of different signs negative."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(z - 16)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "z^2-32*z+256",
              "lines": [
                {
                  "step": "Expand $(z - 16)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(z - 16)^2 = z^2 + 2(z)(-16) + (-16)^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = z$ and $b = -16$."
                },
                {
                  "step": "$z^2 + 2(z)(-16) + (-16)^2 = z^2 - 32z + 256$",
                  "reason": "Signs of products, from arithmetic, give $2(z)(-16) = -32z$ and $(-16)^2 = 256$, since a product of two numbers of the same sign is positive and of different signs negative."
                }
              ]
            },
            {
              "prompt": "Expand $(z + 17)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "z^2+34*z+289",
              "lines": [
                {
                  "step": "Expand $(z + 17)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(z + 17)^2 = z^2 + 2(z)(17) + 17^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = z$ and $b = 17$."
                },
                {
                  "step": "$z^2 + 2(z)(17) + 17^2 = z^2 + 34z + 289$",
                  "reason": "Signs of products, from arithmetic, give $2(z)(17) = 34z$ and $17^2 = 289$, since a product of two numbers of the same sign is positive and of different signs negative."
                }
              ]
            },
            {
              "prompt": "Expand $(z + 19)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "z^2+38*z+361",
              "lines": [
                {
                  "step": "Expand $(z + 19)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(z + 19)^2 = z^2 + 2(z)(19) + 19^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = z$ and $b = 19$."
                },
                {
                  "step": "$z^2 + 2(z)(19) + 19^2 = z^2 + 38z + 361$",
                  "reason": "Signs of products, from arithmetic, give $2(z)(19) = 38z$ and $19^2 = 361$, since a product of two numbers of the same sign is positive and of different signs negative."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(7z - 2)^2$.",
            "lines": [
              {
                "step": "Expand $(7z - 2)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(7z - 2)^2 = (7z)^2 + 2(7z)(-2) + (-2)^2$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 7z$ and $b = -2$."
              },
              {
                "step": "$(7z)^2 + 2(7z)(-2) + (-2)^2 = 49z^2 - 28z + 4$",
                "reason": "Power of a product: $(7z)^2 = 49z^2$. Signs of products, from arithmetic, give $2(7z)(-2) = -28z$ and $(-2)^2 = 4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(7z - 5)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "49*z^2-70*z+25",
              "lines": [
                {
                  "step": "Expand $(7z - 5)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7z - 5)^2 = (7z)^2 + 2(7z)(-5) + (-5)^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 7z$ and $b = -5$."
                },
                {
                  "step": "$(7z)^2 + 2(7z)(-5) + (-5)^2 = 49z^2 - 70z + 25$",
                  "reason": "Power of a product: $(7z)^2 = 49z^2$. Signs of products, from arithmetic, give $2(7z)(-5) = -70z$ and $(-5)^2 = 25$."
                }
              ]
            },
            {
              "prompt": "Expand $(10x + 19y)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "100*x^2+380*x*y+361*y^2",
              "lines": [
                {
                  "step": "Expand $(10x + 19y)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(10x + 19y)^2 = (10x)^2 + 2(10x)(19y) + (19y)^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 10x$ and $b = 19y$."
                },
                {
                  "step": "$(10x)^2 + 2(10x)(19y) + (19y)^2 = 100x^2 + 380xy + 361y^2$",
                  "reason": "Power of a product: $(10x)^2 = 100x^2$. Signs of products, from arithmetic, give $2(10x)(19y) = 380xy$ and $(19y)^2 = 361y^2$."
                }
              ]
            },
            {
              "prompt": "Expand $(7z + 3)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "49*z^2+42*z+9",
              "lines": [
                {
                  "step": "Expand $(7z + 3)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7z + 3)^2 = (7z)^2 + 2(7z)(3) + 3^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 7z$ and $b = 3$."
                },
                {
                  "step": "$(7z)^2 + 2(7z)(3) + 3^2 = 49z^2 + 42z + 9$",
                  "reason": "Power of a product: $(7z)^2 = 49z^2$. Signs of products, from arithmetic, give $2(7z)(3) = 42z$ and $3^2 = 9$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(x + 5y - 8)^2$.",
            "lines": [
              {
                "step": "Expand $(x + 5y - 8)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + 5y - 8)^2 = \\left((x + 5y) - 8\\right)^2$",
                "reason": "The associative law of addition: the first two terms are taken together as one term, $x + 5y$."
              },
              {
                "step": "$\\left((x + 5y) - 8\\right)^2 = (x + 5y)^2 + 2(x + 5y)(-8) + (-8)^2$",
                "reason": "Square of a binomial, with $a = x + 5y$ and $b = -8$."
              },
              {
                "step": "$(x + 5y)^2 = x^2 + 10xy + 25y^2$",
                "reason": "Square of a binomial, with $a = x$ and $b = 5y$; power of a product gives $(5y)^2 = 25y^2$."
              },
              {
                "step": "$2(x + 5y)(-8) = -16x - 80y$",
                "reason": "The distributive law: $-16$ multiplies each term of the bracket, with the signs of products, from arithmetic."
              },
              {
                "step": "$(-8)^2 = 64$",
                "reason": "Signs of products, from arithmetic: a product of two numbers of the same sign is positive."
              },
              {
                "step": "$(x + 5y - 8)^2 = x^2 + 10xy + 25y^2 - 16x - 80y + 64$",
                "reason": "Line 3, with each piece replaced by the expression equal to it in lines 4, 5 and 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(y - 3z - 9)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "y^2-6*y*z+9*z^2-18*y+54*z+81",
              "lines": [
                {
                  "step": "Expand $(y - 3z - 9)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(y - 3z - 9)^2 = \\left((y - 3z) - 9\\right)^2$",
                  "reason": "The associative law of addition: the first two terms are taken together as one term, $y - 3z$."
                },
                {
                  "step": "$\\left((y - 3z) - 9\\right)^2 = (y - 3z)^2 + 2(y - 3z)(-9) + (-9)^2$",
                  "reason": "Square of a binomial, with $a = y - 3z$ and $b = -9$."
                },
                {
                  "step": "$(y - 3z)^2 = y^2 - 6yz + 9z^2$",
                  "reason": "Square of a binomial, with $a = y$ and $b = -3z$; power of a product gives $(-3z)^2 = 9z^2$."
                },
                {
                  "step": "$2(y - 3z)(-9) = -18y + 54z$",
                  "reason": "The distributive law: $-18$ multiplies each term of the bracket, with the signs of products, from arithmetic."
                },
                {
                  "step": "$(-9)^2 = 81$",
                  "reason": "Signs of products, from arithmetic: a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$(y - 3z - 9)^2 = y^2 - 6yz + 9z^2 - 18y + 54z + 81$",
                  "reason": "Line 3, with each piece replaced by the expression equal to it in lines 4, 5 and 6."
                }
              ]
            },
            {
              "prompt": "Expand $(x + 3z - 2)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+6*x*z+9*z^2-4*x-12*z+4",
              "lines": [
                {
                  "step": "Expand $(x + 3z - 2)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 3z - 2)^2 = \\left((x + 3z) - 2\\right)^2$",
                  "reason": "The associative law of addition: the first two terms are taken together as one term, $x + 3z$."
                },
                {
                  "step": "$\\left((x + 3z) - 2\\right)^2 = (x + 3z)^2 + 2(x + 3z)(-2) + (-2)^2$",
                  "reason": "Square of a binomial, with $a = x + 3z$ and $b = -2$."
                },
                {
                  "step": "$(x + 3z)^2 = x^2 + 6xz + 9z^2$",
                  "reason": "Square of a binomial, with $a = x$ and $b = 3z$; power of a product gives $(3z)^2 = 9z^2$."
                },
                {
                  "step": "$2(x + 3z)(-2) = -4x - 12z$",
                  "reason": "The distributive law: $-4$ multiplies each term of the bracket, with the signs of products, from arithmetic."
                },
                {
                  "step": "$(-2)^2 = 4$",
                  "reason": "Signs of products, from arithmetic: a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$(x + 3z - 2)^2 = x^2 + 6xz + 9z^2 - 4x - 12z + 4$",
                  "reason": "Line 3, with each piece replaced by the expression equal to it in lines 4, 5 and 6."
                }
              ]
            },
            {
              "prompt": "Expand $(x + 2y - 8)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+4*x*y+4*y^2-16*x-32*y+64",
              "lines": [
                {
                  "step": "Expand $(x + 2y - 8)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 2y - 8)^2 = \\left((x + 2y) - 8\\right)^2$",
                  "reason": "The associative law of addition: the first two terms are taken together as one term, $x + 2y$."
                },
                {
                  "step": "$\\left((x + 2y) - 8\\right)^2 = (x + 2y)^2 + 2(x + 2y)(-8) + (-8)^2$",
                  "reason": "Square of a binomial, with $a = x + 2y$ and $b = -8$."
                },
                {
                  "step": "$(x + 2y)^2 = x^2 + 4xy + 4y^2$",
                  "reason": "Square of a binomial, with $a = x$ and $b = 2y$; power of a product gives $(2y)^2 = 4y^2$."
                },
                {
                  "step": "$2(x + 2y)(-8) = -16x - 32y$",
                  "reason": "The distributive law: $-16$ multiplies each term of the bracket, with the signs of products, from arithmetic."
                },
                {
                  "step": "$(-8)^2 = 64$",
                  "reason": "Signs of products, from arithmetic: a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$(x + 2y - 8)^2 = x^2 + 4xy + 4y^2 - 16x - 32y + 64$",
                  "reason": "Line 3, with each piece replaced by the expression equal to it in lines 4, 5 and 6."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $\\left(y - \\dfrac{1}{11}\\right)^2$.",
            "lines": [
              {
                "step": "Expand $\\left(y - \\dfrac{1}{11}\\right)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(y - \\dfrac{1}{11}\\right)^2 = y^2 + 2(y)\\left(-\\dfrac{1}{11}\\right) + \\left(-\\dfrac{1}{11}\\right)^2$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = y$ and $b = -\\dfrac{1}{11}$."
              },
              {
                "step": "$y^2 + 2(y)\\left(-\\dfrac{1}{11}\\right) + \\left(-\\dfrac{1}{11}\\right)^2 = y^2 - \\dfrac{2}{11}y + \\dfrac{1}{121}$",
                "reason": "The product formula, from arithmetic, gives $2(y)\\left(-\\dfrac{1}{11}\\right) = -\\dfrac{2}{11}y$ and $\\left(-\\dfrac{1}{11}\\right)^2 = \\dfrac{1 \\cdot 1}{11 \\cdot 11} = \\dfrac{1}{121}$, with the signs of products, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $\\left(x - \\dfrac{1}{10}\\right)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2-1/5*x+1/100",
              "lines": [
                {
                  "step": "Expand $\\left(x - \\dfrac{1}{10}\\right)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x - \\dfrac{1}{10}\\right)^2 = x^2 + 2(x)\\left(-\\dfrac{1}{10}\\right) + \\left(-\\dfrac{1}{10}\\right)^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = x$ and $b = -\\dfrac{1}{10}$."
                },
                {
                  "step": "$x^2 + 2(x)\\left(-\\dfrac{1}{10}\\right) + \\left(-\\dfrac{1}{10}\\right)^2 = x^2 - \\dfrac{1}{5}x + \\dfrac{1}{100}$",
                  "reason": "The product formula, from arithmetic, gives $2(x)\\left(-\\dfrac{1}{10}\\right) = -\\dfrac{1}{5}x$ and $\\left(-\\dfrac{1}{10}\\right)^2 = \\dfrac{1 \\cdot 1}{10 \\cdot 10} = \\dfrac{1}{100}$, with the signs of products, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Expand $\\left(x + \\dfrac{1}{9}\\right)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+2/9*x+1/81",
              "lines": [
                {
                  "step": "Expand $\\left(x + \\dfrac{1}{9}\\right)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(x + \\dfrac{1}{9}\\right)^2 = x^2 + 2(x)\\left(\\dfrac{1}{9}\\right) + \\left(\\dfrac{1}{9}\\right)^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = x$ and $b = \\dfrac{1}{9}$."
                },
                {
                  "step": "$x^2 + 2(x)\\left(\\dfrac{1}{9}\\right) + \\left(\\dfrac{1}{9}\\right)^2 = x^2 + \\dfrac{2}{9}x + \\dfrac{1}{81}$",
                  "reason": "The product formula, from arithmetic, gives $2(x)\\left(\\dfrac{1}{9}\\right) = \\dfrac{2}{9}x$ and $\\left(\\dfrac{1}{9}\\right)^2 = \\dfrac{1 \\cdot 1}{9 \\cdot 9} = \\dfrac{1}{81}$, with the signs of products, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Expand $\\left(z - \\dfrac{1}{8}\\right)^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "z^2-1/4*z+1/64",
              "lines": [
                {
                  "step": "Expand $\\left(z - \\dfrac{1}{8}\\right)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(z - \\dfrac{1}{8}\\right)^2 = z^2 + 2(z)\\left(-\\dfrac{1}{8}\\right) + \\left(-\\dfrac{1}{8}\\right)^2$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = z$ and $b = -\\dfrac{1}{8}$."
                },
                {
                  "step": "$z^2 + 2(z)\\left(-\\dfrac{1}{8}\\right) + \\left(-\\dfrac{1}{8}\\right)^2 = z^2 - \\dfrac{1}{4}z + \\dfrac{1}{64}$",
                  "reason": "The product formula, from arithmetic, gives $2(z)\\left(-\\dfrac{1}{8}\\right) = -\\dfrac{1}{4}z$ and $\\left(-\\dfrac{1}{8}\\right)^2 = \\dfrac{1 \\cdot 1}{8 \\cdot 8} = \\dfrac{1}{64}$, with the signs of products, from arithmetic."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t137-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $100y^2 - 40y + 4$ is the square of a binomial.",
            "lines": [
              {
                "step": "Decide whether $100y^2 - 40y + 4$ is the square of a binomial.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Suppose that $100y^2 - 40y + 4 = (dy + e)^2$ for some numbers $d$ and $e$. Then $(dy + e)^2 = d^2y^2 + 2dey + e^2$.",
                "reason": "Square of a binomial, with $a = dy$ and $b = e$, and power of a product for $(dy)^2$."
              },
              {
                "step": "The $y^2$ terms and the constant terms give $d^2 = 100$ and $e^2 = 4$, so $d = 10$ or $d = -10$, and $e = 2$ or $e = -2$.",
                "reason": "Equal for all $y$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "Then $2de$ is $40$ or $-40$.",
                "reason": "Signs of products, from arithmetic: $2de$ is positive when $d$ and $e$ have the same sign and negative when they differ."
              },
              {
                "step": "The middle coefficient $-40$ is $2de$ with $d = 10$ and $e = -2$, so $100y^2 - 40y + 4 = (10y - 2)^2$: Yes.",
                "reason": "Equal for all $y$ means equal coefficients: the $y$ terms agree, so the quadratic is a perfect-square quadratic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $4z^2 + 22z + 16$ is the square of a binomial.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $4z^2 + 22z + 16$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $4z^2 + 22z + 16 = (dz + e)^2$ for some numbers $d$ and $e$. Then $(dz + e)^2 = d^2z^2 + 2dez + e^2$.",
                  "reason": "Square of a binomial, with $a = dz$ and $b = e$, and power of a product for $(dz)^2$."
                },
                {
                  "step": "The $z^2$ terms and the constant terms give $d^2 = 4$ and $e^2 = 16$, so $d = 2$ or $d = -2$, and $e = 4$ or $e = -4$.",
                  "reason": "Equal for all $z$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "Then $2de$ is $16$ or $-16$.",
                  "reason": "Signs of products, from arithmetic: $2de$ is positive when $d$ and $e$ have the same sign and negative when they differ."
                },
                {
                  "step": "The middle coefficient $22$ is neither $16$ nor $-16$, so $4z^2 + 22z + 16$ is not the square of a binomial: No.",
                  "reason": "Equal for all $z$ means equal coefficients: the $z$ terms of the two sides would have to agree, and they cannot."
                }
              ]
            },
            {
              "prompt": "Decide whether $16x^2 - 72x + 81$ is the square of a binomial.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $16x^2 - 72x + 81$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $16x^2 - 72x + 81 = (dx + e)^2$ for some numbers $d$ and $e$. Then $(dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms and the constant terms give $d^2 = 16$ and $e^2 = 81$, so $d = 4$ or $d = -4$, and $e = 9$ or $e = -9$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "Then $2de$ is $72$ or $-72$.",
                  "reason": "Signs of products, from arithmetic: $2de$ is positive when $d$ and $e$ have the same sign and negative when they differ."
                },
                {
                  "step": "The middle coefficient $-72$ is $2de$ with $d = 4$ and $e = -9$, so $16x^2 - 72x + 81 = (4x - 9)^2$: Yes.",
                  "reason": "Equal for all $x$ means equal coefficients: the $x$ terms agree, so the quadratic is a perfect-square quadratic."
                }
              ]
            },
            {
              "prompt": "Decide whether $4x^2 - 44x - 121$ is the square of a binomial.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $4x^2 - 44x - 121$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $4x^2 - 44x - 121 = (dx + e)^2$ for some numbers $d$ and $e$. Then $(dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The constant terms give $e^2 = -121$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "No number $e$ has $e^2 = -121$, since $e^2 = e \\cdot e$ is never negative.",
                  "reason": "Signs of products, from arithmetic: a product of two numbers of the same sign is positive, and $0 \\cdot 0 = 0$."
                },
                {
                  "step": "No such $d$ and $e$ exist, so $4x^2 - 44x - 121$ is not the square of a binomial: No.",
                  "reason": "Answering the question asked: the supposition of line 2 gives a number that cannot exist."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t137-k3",
      "forms": [
        {
          "example": {
            "problem": "Factor $64z^2 - 80z + 25$.",
            "lines": [
              {
                "step": "Factor $64z^2 - 80z + 25$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term is $64z^2 = (8z)^2$, and the last term is $25 = (-5)^2$.",
                "reason": "Power of a product gives $(8z)^2 = 64z^2$, and the signs of products, from arithmetic, give $(-5)^2 = 25$."
              },
              {
                "step": "The middle term is $2(8z)(-5) = -80z$.",
                "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 8z$ and $b = -5$."
              },
              {
                "step": "$64z^2 - 80z + 25 = (8z - 5)^2$",
                "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $81x^2 + 72x + 16$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(9*x+4)^2",
              "lines": [
                {
                  "step": "Factor $81x^2 + 72x + 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $81x^2 = (9x)^2$, and the last term is $16 = 4^2$.",
                  "reason": "Power of a product gives $(9x)^2 = 81x^2$, and the signs of products, from arithmetic, give $4^2 = 16$."
                },
                {
                  "step": "The middle term is $2(9x)(4) = 72x$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 9x$ and $b = 4$."
                },
                {
                  "step": "$81x^2 + 72x + 16 = (9x + 4)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            },
            {
              "prompt": "Factor $49x^2 + 140xy + 100y^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(7*x+10*y)^2",
              "lines": [
                {
                  "step": "Factor $49x^2 + 140xy + 100y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $49x^2 = (7x)^2$, and the last term is $100y^2 = (10y)^2$.",
                  "reason": "Power of a product gives $(7x)^2 = 49x^2$, and the signs of products, from arithmetic, give $(10y)^2 = 100y^2$."
                },
                {
                  "step": "The middle term is $2(7x)(10y) = 140xy$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 7x$ and $b = 10y$."
                },
                {
                  "step": "$49x^2 + 140xy + 100y^2 = (7x + 10y)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            },
            {
              "prompt": "Factor $169z^2 - 442z + 289$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(13*z-17)^2",
              "lines": [
                {
                  "step": "Factor $169z^2 - 442z + 289$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $169z^2 = (13z)^2$, and the last term is $289 = (-17)^2$.",
                  "reason": "Power of a product gives $(13z)^2 = 169z^2$, and the signs of products, from arithmetic, give $(-17)^2 = 289$."
                },
                {
                  "step": "The middle term is $2(13z)(-17) = -442z$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 13z$ and $b = -17$."
                },
                {
                  "step": "$169z^2 - 442z + 289 = (13z - 17)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $162x^2 + 288x + 128$.",
            "lines": [
              {
                "step": "Factor $162x^2 + 288x + 128$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$162x^2 + 288x + 128 = 2(81x^2 + 144x + 64)$",
                "reason": "Factoring by the distributive law, read from right to left: $2$ divides each coefficient, and the bracket left has first and last terms that are squares."
              },
              {
                "step": "The first term is $81x^2 = (9x)^2$, and the last term is $64 = 8^2$.",
                "reason": "Power of a product gives $(9x)^2 = 81x^2$, and the signs of products, from arithmetic, give $8^2 = 64$."
              },
              {
                "step": "The middle term is $2(9x)(8) = 144x$.",
                "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 9x$ and $b = 8$."
              },
              {
                "step": "$162x^2 + 288x + 128 = 2(9x + 8)^2$",
                "reason": "Square of a binomial, read from right to left, used on the bracket of line 2: $a^2 + 2ab + b^2 = (a + b)^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $108y^2 + 396y + 363$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "3*(6*y+11)^2",
              "lines": [
                {
                  "step": "Factor $108y^2 + 396y + 363$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$108y^2 + 396y + 363 = 3(36y^2 + 132y + 121)$",
                  "reason": "Factoring by the distributive law, read from right to left: $3$ divides each coefficient, and the bracket left has first and last terms that are squares."
                },
                {
                  "step": "The first term is $36y^2 = (6y)^2$, and the last term is $121 = 11^2$.",
                  "reason": "Power of a product gives $(6y)^2 = 36y^2$, and the signs of products, from arithmetic, give $11^2 = 121$."
                },
                {
                  "step": "The middle term is $2(6y)(11) = 132y$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 6y$ and $b = 11$."
                },
                {
                  "step": "$108y^2 + 396y + 363 = 3(6y + 11)^2$",
                  "reason": "Square of a binomial, read from right to left, used on the bracket of line 2: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            },
            {
              "prompt": "Factor $-75x^2 - 330x - 363$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-3*(5*x+11)^2",
              "lines": [
                {
                  "step": "Factor $-75x^2 - 330x - 363$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-75x^2 - 330x - 363 = -3(25x^2 + 110x + 121)$",
                  "reason": "Factoring by the distributive law, read from right to left: $-3$ divides each coefficient, and the bracket left has first and last terms that are squares."
                },
                {
                  "step": "The first term is $25x^2 = (5x)^2$, and the last term is $121 = 11^2$.",
                  "reason": "Power of a product gives $(5x)^2 = 25x^2$, and the signs of products, from arithmetic, give $11^2 = 121$."
                },
                {
                  "step": "The middle term is $2(5x)(11) = 110x$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 5x$ and $b = 11$."
                },
                {
                  "step": "$-75x^2 - 330x - 363 = -3(5x + 11)^2$",
                  "reason": "Square of a binomial, read from right to left, used on the bracket of line 2: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            },
            {
              "prompt": "Factor $-18z^2 + 168z - 392$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "-2*(3*z-14)^2",
              "lines": [
                {
                  "step": "Factor $-18z^2 + 168z - 392$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-18z^2 + 168z - 392 = -2(9z^2 - 84z + 196)$",
                  "reason": "Factoring by the distributive law, read from right to left: $-2$ divides each coefficient, and the bracket left has first and last terms that are squares."
                },
                {
                  "step": "The first term is $9z^2 = (3z)^2$, and the last term is $196 = (-14)^2$.",
                  "reason": "Power of a product gives $(3z)^2 = 9z^2$, and the signs of products, from arithmetic, give $(-14)^2 = 196$."
                },
                {
                  "step": "The middle term is $2(3z)(-14) = -84z$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 3z$ and $b = -14$."
                },
                {
                  "step": "$-18z^2 + 168z - 392 = -2(3z - 14)^2$",
                  "reason": "Square of a binomial, read from right to left, used on the bracket of line 2: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $4z^2 + \\dfrac{4}{7}z + \\dfrac{1}{49}$.",
            "lines": [
              {
                "step": "Factor $4z^2 + \\dfrac{4}{7}z + \\dfrac{1}{49}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term is $4z^2 = (2z)^2$, and the last term is $\\dfrac{1}{49} = \\left(\\dfrac{1}{7}\\right)^2$.",
                "reason": "Power of a product gives $(2z)^2 = 4z^2$, and the product formula, from arithmetic, with the signs of products, from arithmetic, gives $\\left(\\dfrac{1}{7}\\right)^2 = \\dfrac{1 \\cdot 1}{7 \\cdot 7} = \\dfrac{1}{49}$."
              },
              {
                "step": "The middle term is $2(2z)\\left(\\dfrac{1}{7}\\right) = \\dfrac{4}{7}z$.",
                "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 2z$ and $b = \\dfrac{1}{7}$."
              },
              {
                "step": "$4z^2 + \\dfrac{4}{7}z + \\dfrac{1}{49} = \\left(2z + \\dfrac{1}{7}\\right)^2$",
                "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $4z^2 - \\dfrac{2}{3}z + \\dfrac{1}{36}$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(2*z-1/6)^2",
              "lines": [
                {
                  "step": "Factor $4z^2 - \\dfrac{2}{3}z + \\dfrac{1}{36}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $4z^2 = (2z)^2$, and the last term is $\\dfrac{1}{36} = \\left(-\\dfrac{1}{6}\\right)^2$.",
                  "reason": "Power of a product gives $(2z)^2 = 4z^2$, and the product formula, from arithmetic, with the signs of products, from arithmetic, gives $\\left(-\\dfrac{1}{6}\\right)^2 = \\dfrac{1 \\cdot 1}{6 \\cdot 6} = \\dfrac{1}{36}$."
                },
                {
                  "step": "The middle term is $2(2z)\\left(-\\dfrac{1}{6}\\right) = -\\dfrac{2}{3}z$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 2z$ and $b = -\\dfrac{1}{6}$."
                },
                {
                  "step": "$4z^2 - \\dfrac{2}{3}z + \\dfrac{1}{36} = \\left(2z - \\dfrac{1}{6}\\right)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            },
            {
              "prompt": "Factor $9x^2 - \\dfrac{12}{5}x + \\dfrac{4}{25}$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(3*x-2/5)^2",
              "lines": [
                {
                  "step": "Factor $9x^2 - \\dfrac{12}{5}x + \\dfrac{4}{25}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $9x^2 = (3x)^2$, and the last term is $\\dfrac{4}{25} = \\left(-\\dfrac{2}{5}\\right)^2$.",
                  "reason": "Power of a product gives $(3x)^2 = 9x^2$, and the product formula, from arithmetic, with the signs of products, from arithmetic, gives $\\left(-\\dfrac{2}{5}\\right)^2 = \\dfrac{2 \\cdot 2}{5 \\cdot 5} = \\dfrac{4}{25}$."
                },
                {
                  "step": "The middle term is $2(3x)\\left(-\\dfrac{2}{5}\\right) = -\\dfrac{12}{5}x$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 3x$ and $b = -\\dfrac{2}{5}$."
                },
                {
                  "step": "$9x^2 - \\dfrac{12}{5}x + \\dfrac{4}{25} = \\left(3x - \\dfrac{2}{5}\\right)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            },
            {
              "prompt": "Factor $16x^2 - 2x + \\dfrac{1}{16}$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(4*x-1/4)^2",
              "lines": [
                {
                  "step": "Factor $16x^2 - 2x + \\dfrac{1}{16}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $16x^2 = (4x)^2$, and the last term is $\\dfrac{1}{16} = \\left(-\\dfrac{1}{4}\\right)^2$.",
                  "reason": "Power of a product gives $(4x)^2 = 16x^2$, and the product formula, from arithmetic, with the signs of products, from arithmetic, gives $\\left(-\\dfrac{1}{4}\\right)^2 = \\dfrac{1 \\cdot 1}{4 \\cdot 4} = \\dfrac{1}{16}$."
                },
                {
                  "step": "The middle term is $2(4x)\\left(-\\dfrac{1}{4}\\right) = -2x$.",
                  "reason": "Perfect-square quadratic: $a^2 + 2ab + b^2$ is the square of $a + b$, and here the middle term is $2ab$ with $a = 4x$ and $b = -\\dfrac{1}{4}$."
                },
                {
                  "step": "$16x^2 - 2x + \\dfrac{1}{16} = \\left(4x - \\dfrac{1}{4}\\right)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t137-k4",
      "forms": [
        {
          "example": {
            "problem": "Find a number $c$ for which $121z^2 + 132z + c$ is the square of a binomial.",
            "lines": [
              {
                "step": "Find a number $c$ for which $121z^2 + 132z + c$ is the square of a binomial.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Suppose that $121z^2 + 132z + c = (dz + e)^2 = d^2z^2 + 2dez + e^2$.",
                "reason": "Square of a binomial, with $a = dz$ and $b = e$, and power of a product for $(dz)^2$."
              },
              {
                "step": "The $z^2$ terms give $d^2 = 121$, so $d = 11$ or $d = -11$.",
                "reason": "Equal for all $z$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "The $z$ terms give $2de = 132$, so $e = 6$ when $d = 11$, and $e = -6$ when $d = -11$.",
                "reason": "Equal for all $z$ means equal coefficients, then dividing both sides by the nonzero number $2d$."
              },
              {
                "step": "The constant terms give $c = e^2 = 36$, from either value of $e$.",
                "reason": "Equal for all $z$ means equal coefficients: the constant terms, with the signs of products, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $c$ for which $121x^2 + 110x + c$ is the square of a binomial.",
              "form": "Answer as an integer.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find a number $c$ for which $121x^2 + 110x + c$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $121x^2 + 110x + c = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms give $d^2 = 121$, so $d = 11$ or $d = -11$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The $x$ terms give $2de = 110$, so $e = 5$ when $d = 11$, and $e = -5$ when $d = -11$.",
                  "reason": "Equal for all $x$ means equal coefficients, then dividing both sides by the nonzero number $2d$."
                },
                {
                  "step": "The constant terms give $c = e^2 = 25$, from either value of $e$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms, with the signs of products, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find a number $c$ for which $4x^2 + 60x + c$ is the square of a binomial.",
              "form": "Answer as an integer.",
              "answer": "225",
              "lines": [
                {
                  "step": "Find a number $c$ for which $4x^2 + 60x + c$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $4x^2 + 60x + c = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms give $d^2 = 4$, so $d = 2$ or $d = -2$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The $x$ terms give $2de = 60$, so $e = 15$ when $d = 2$, and $e = -15$ when $d = -2$.",
                  "reason": "Equal for all $x$ means equal coefficients, then dividing both sides by the nonzero number $2d$."
                },
                {
                  "step": "The constant terms give $c = e^2 = 225$, from either value of $e$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms, with the signs of products, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find a number $c$ for which $36x^2 - 156x + c$ is the square of a binomial.",
              "form": "Answer as an integer.",
              "answer": "169",
              "lines": [
                {
                  "step": "Find a number $c$ for which $36x^2 - 156x + c$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $36x^2 - 156x + c = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms give $d^2 = 36$, so $d = 6$ or $d = -6$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The $x$ terms give $2de = -156$, so $e = -13$ when $d = 6$, and $e = 13$ when $d = -6$.",
                  "reason": "Equal for all $x$ means equal coefficients, then dividing both sides by the nonzero number $2d$."
                },
                {
                  "step": "The constant terms give $c = e^2 = 169$, from either value of $e$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms, with the signs of products, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $b$ for which $49x^2 + bx + 144$ is the square of a binomial.",
            "lines": [
              {
                "step": "Find every number $b$ for which $49x^2 + bx + 144$ is the square of a binomial.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Suppose that $49x^2 + bx + 144 = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
              },
              {
                "step": "The $x^2$ terms and the constant terms give $d^2 = 49$ and $e^2 = 144$, so $d = 7$ or $d = -7$, and $e = 12$ or $e = -12$.",
                "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "The $x$ terms give $b = 2de$, which is $168$ when $d$ and $e$ have the same sign and $-168$ when they differ.",
                "reason": "Equal for all $x$ means equal coefficients, with the signs of products, from arithmetic."
              },
              {
                "step": "The values of $b$ are $-168$ and $168$.",
                "reason": "Answering the question asked: each value comes from a binomial whose square has the given first and last terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $b$ for which $16x^2 + bx + 225$ is the square of a binomial.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-120, 120}",
              "lines": [
                {
                  "step": "Find every number $b$ for which $16x^2 + bx + 225$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $16x^2 + bx + 225 = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms and the constant terms give $d^2 = 16$ and $e^2 = 225$, so $d = 4$ or $d = -4$, and $e = 15$ or $e = -15$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The $x$ terms give $b = 2de$, which is $120$ when $d$ and $e$ have the same sign and $-120$ when they differ.",
                  "reason": "Equal for all $x$ means equal coefficients, with the signs of products, from arithmetic."
                },
                {
                  "step": "The values of $b$ are $-120$ and $120$.",
                  "reason": "Answering the question asked: each value comes from a binomial whose square has the given first and last terms."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $121x^2 + bx + 64$ is the square of a binomial.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-176, 176}",
              "lines": [
                {
                  "step": "Find every number $b$ for which $121x^2 + bx + 64$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $121x^2 + bx + 64 = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms and the constant terms give $d^2 = 121$ and $e^2 = 64$, so $d = 11$ or $d = -11$, and $e = 8$ or $e = -8$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The $x$ terms give $b = 2de$, which is $176$ when $d$ and $e$ have the same sign and $-176$ when they differ.",
                  "reason": "Equal for all $x$ means equal coefficients, with the signs of products, from arithmetic."
                },
                {
                  "step": "The values of $b$ are $-176$ and $176$.",
                  "reason": "Answering the question asked: each value comes from a binomial whose square has the given first and last terms."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $81x^2 + bx + 121$ is the square of a binomial.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-198, 198}",
              "lines": [
                {
                  "step": "Find every number $b$ for which $81x^2 + bx + 121$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Suppose that $81x^2 + bx + 121 = (dx + e)^2 = d^2x^2 + 2dex + e^2$.",
                  "reason": "Square of a binomial, with $a = dx$ and $b = e$, and power of a product for $(dx)^2$."
                },
                {
                  "step": "The $x^2$ terms and the constant terms give $d^2 = 81$ and $e^2 = 121$, so $d = 9$ or $d = -9$, and $e = 11$ or $e = -11$.",
                  "reason": "Equal for all $x$ means equal coefficients, and if $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "The $x$ terms give $b = 2de$, which is $198$ when $d$ and $e$ have the same sign and $-198$ when they differ.",
                  "reason": "Equal for all $x$ means equal coefficients, with the signs of products, from arithmetic."
                },
                {
                  "step": "The values of $b$ are $-198$ and $198$.",
                  "reason": "Answering the question asked: each value comes from a binomial whose square has the given first and last terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t137-k5",
      "forms": [
        {
          "example": {
            "problem": "Compute $506^2$.",
            "lines": [
              {
                "step": "Compute $506^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$506 = 500 + 6$",
                "reason": "The addition of integers, from arithmetic: $500$ is a round number whose square takes one product of small numbers."
              },
              {
                "step": "$(500 + 6)^2 = 500^2 + 2(500)(6) + 6^2$",
                "reason": "Square of a binomial, with $a = 500$ and $b = 6$."
              },
              {
                "step": "$500^2 + 2(500)(6) + 6^2 = 250\\,000 + 6000 + 36$",
                "reason": "The multiplication of integers, from arithmetic, with the signs of products, from arithmetic, for $2(500)(6)$."
              },
              {
                "step": "$250\\,000 + 6000 + 36 = 256\\,036$",
                "reason": "The addition and subtraction of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $7007^2$.",
              "form": "Answer as an integer.",
              "answer": "49098049",
              "lines": [
                {
                  "step": "Compute $7007^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7007 = 7000 + 7$",
                  "reason": "The addition of integers, from arithmetic: $7000$ is a round number whose square takes one product of small numbers."
                },
                {
                  "step": "$(7000 + 7)^2 = 7000^2 + 2(7000)(7) + 7^2$",
                  "reason": "Square of a binomial, with $a = 7000$ and $b = 7$."
                },
                {
                  "step": "$7000^2 + 2(7000)(7) + 7^2 = 49\\,000\\,000 + 98\\,000 + 49$",
                  "reason": "The multiplication of integers, from arithmetic, with the signs of products, from arithmetic, for $2(7000)(7)$."
                },
                {
                  "step": "$49\\,000\\,000 + 98\\,000 + 49 = 49\\,098\\,049$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $306^2$.",
              "form": "Answer as an integer.",
              "answer": "93636",
              "lines": [
                {
                  "step": "Compute $306^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$306 = 300 + 6$",
                  "reason": "The addition of integers, from arithmetic: $300$ is a round number whose square takes one product of small numbers."
                },
                {
                  "step": "$(300 + 6)^2 = 300^2 + 2(300)(6) + 6^2$",
                  "reason": "Square of a binomial, with $a = 300$ and $b = 6$."
                },
                {
                  "step": "$300^2 + 2(300)(6) + 6^2 = 90\\,000 + 3600 + 36$",
                  "reason": "The multiplication of integers, from arithmetic, with the signs of products, from arithmetic, for $2(300)(6)$."
                },
                {
                  "step": "$90\\,000 + 3600 + 36 = 93\\,636$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $6008^2$.",
              "form": "Answer as an integer.",
              "answer": "36096064",
              "lines": [
                {
                  "step": "Compute $6008^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6008 = 6000 + 8$",
                  "reason": "The addition of integers, from arithmetic: $6000$ is a round number whose square takes one product of small numbers."
                },
                {
                  "step": "$(6000 + 8)^2 = 6000^2 + 2(6000)(8) + 8^2$",
                  "reason": "Square of a binomial, with $a = 6000$ and $b = 8$."
                },
                {
                  "step": "$6000^2 + 2(6000)(8) + 8^2 = 36\\,000\\,000 + 96\\,000 + 64$",
                  "reason": "The multiplication of integers, from arithmetic, with the signs of products, from arithmetic, for $2(6000)(8)$."
                },
                {
                  "step": "$36\\,000\\,000 + 96\\,000 + 64 = 36\\,096\\,064$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $77\\,012^2 - 77\\,004 \\cdot 77\\,020$.",
            "lines": [
              {
                "step": "Compute $77\\,012^2 - 77\\,004 \\cdot 77\\,020$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $c = 77\\,000$. Then $77\\,012 = c + 12$, $77\\,004 = c + 4$ and $77\\,020 = c + 20$.",
                "reason": "The addition of integers, from arithmetic: each number differs from $77\\,000$ by less than 100."
              },
              {
                "step": "$77\\,012^2 - 77\\,004 \\cdot 77\\,020 = (c + 12)^2 - (c + 4)(c + 20)$",
                "reason": "Substituting a value: each number is replaced by the expression in $c$ equal to it, in brackets."
              },
              {
                "step": "$(c + 12)^2 = c^2 + 24c + 144$",
                "reason": "Square of a binomial, with $a = c$ and $b = 12$."
              },
              {
                "step": "$(c + 4)(c + 20) = c^2 + 24c + 80$",
                "reason": "Every term of one bracket times every term of the other, and collecting like terms."
              },
              {
                "step": "$(c^2 + 24c + 144) - (c^2 + 24c + 80) = c^2 + 24c + 144 - c^2 - 24c - 80$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$c^2 + 24c + 144 - c^2 - 24c - 80 = 64$",
                "reason": "Collecting like terms: the terms in $c^2$ and in $c$ cancel, and $144 - 80 = 64$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $37\\,977^2 - 37\\,974 \\cdot 37\\,980$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Compute $37\\,977^2 - 37\\,974 \\cdot 37\\,980$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $c = 38\\,000$. Then $37\\,977 = c - 23$, $37\\,974 = c - 26$ and $37\\,980 = c - 20$.",
                  "reason": "The addition of integers, from arithmetic: each number differs from $38\\,000$ by less than 100."
                },
                {
                  "step": "$37\\,977^2 - 37\\,974 \\cdot 37\\,980 = (c - 23)^2 - (c - 26)(c - 20)$",
                  "reason": "Substituting a value: each number is replaced by the expression in $c$ equal to it, in brackets."
                },
                {
                  "step": "$(c - 23)^2 = c^2 - 46c + 529$",
                  "reason": "Square of a binomial, with $a = c$ and $b = -23$."
                },
                {
                  "step": "$(c - 26)(c - 20) = c^2 - 46c + 520$",
                  "reason": "Every term of one bracket times every term of the other, and collecting like terms."
                },
                {
                  "step": "$(c^2 - 46c + 529) - (c^2 - 46c + 520) = c^2 - 46c + 529 - c^2 + 46c - 520$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$c^2 - 46c + 529 - c^2 + 46c - 520 = 9$",
                  "reason": "Collecting like terms: the terms in $c^2$ and in $c$ cancel, and $529 - 520 = 9$."
                }
              ]
            },
            {
              "prompt": "Compute $64\\,029^2 - 64\\,011 \\cdot 64\\,047$.",
              "form": "Answer as an integer.",
              "answer": "324",
              "lines": [
                {
                  "step": "Compute $64\\,029^2 - 64\\,011 \\cdot 64\\,047$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $c = 64\\,000$. Then $64\\,029 = c + 29$, $64\\,011 = c + 11$ and $64\\,047 = c + 47$.",
                  "reason": "The addition of integers, from arithmetic: each number differs from $64\\,000$ by less than 100."
                },
                {
                  "step": "$64\\,029^2 - 64\\,011 \\cdot 64\\,047 = (c + 29)^2 - (c + 11)(c + 47)$",
                  "reason": "Substituting a value: each number is replaced by the expression in $c$ equal to it, in brackets."
                },
                {
                  "step": "$(c + 29)^2 = c^2 + 58c + 841$",
                  "reason": "Square of a binomial, with $a = c$ and $b = 29$."
                },
                {
                  "step": "$(c + 11)(c + 47) = c^2 + 58c + 517$",
                  "reason": "Every term of one bracket times every term of the other, and collecting like terms."
                },
                {
                  "step": "$(c^2 + 58c + 841) - (c^2 + 58c + 517) = c^2 + 58c + 841 - c^2 - 58c - 517$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$c^2 + 58c + 841 - c^2 - 58c - 517 = 324$",
                  "reason": "Collecting like terms: the terms in $c^2$ and in $c$ cancel, and $841 - 517 = 324$."
                }
              ]
            },
            {
              "prompt": "Compute $27\\,024^2 - 27\\,004 \\cdot 27\\,044$.",
              "form": "Answer as an integer.",
              "answer": "400",
              "lines": [
                {
                  "step": "Compute $27\\,024^2 - 27\\,004 \\cdot 27\\,044$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $c = 27\\,000$. Then $27\\,024 = c + 24$, $27\\,004 = c + 4$ and $27\\,044 = c + 44$.",
                  "reason": "The addition of integers, from arithmetic: each number differs from $27\\,000$ by less than 100."
                },
                {
                  "step": "$27\\,024^2 - 27\\,004 \\cdot 27\\,044 = (c + 24)^2 - (c + 4)(c + 44)$",
                  "reason": "Substituting a value: each number is replaced by the expression in $c$ equal to it, in brackets."
                },
                {
                  "step": "$(c + 24)^2 = c^2 + 48c + 576$",
                  "reason": "Square of a binomial, with $a = c$ and $b = 24$."
                },
                {
                  "step": "$(c + 4)(c + 44) = c^2 + 48c + 176$",
                  "reason": "Every term of one bracket times every term of the other, and collecting like terms."
                },
                {
                  "step": "$(c^2 + 48c + 576) - (c^2 + 48c + 176) = c^2 + 48c + 576 - c^2 - 48c - 176$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$c^2 + 48c + 576 - c^2 - 48c - 176 = 400$",
                  "reason": "Collecting like terms: the terms in $c^2$ and in $c$ cancel, and $576 - 176 = 400$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $150\\,025^2 - 2 \\cdot 150\\,025 \\cdot 150\\,000 + 150\\,000^2$.",
            "lines": [
              {
                "step": "Compute $150\\,025^2 - 2 \\cdot 150\\,025 \\cdot 150\\,000 + 150\\,000^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The three terms are $a^2$, $-2ab$ and $b^2$, with $a = 150\\,025$ and $b = 150\\,000$.",
                "reason": "Perfect-square quadratic: the first term is the square of $150\\,025$, the last term is the square of $150\\,000$, and the middle term is minus twice their product."
              },
              {
                "step": "$150\\,025^2 - 2 \\cdot 150\\,025 \\cdot 150\\,000 + 150\\,000^2 = (150\\,025 - 150\\,000)^2$",
                "reason": "Square of a binomial, read from right to left: $a^2 - 2ab + b^2 = (a - b)^2$."
              },
              {
                "step": "$150\\,025 - 150\\,000 = 25$",
                "reason": "The addition and subtraction of integers, from arithmetic."
              },
              {
                "step": "$(150\\,025 - 150\\,000)^2 = 25^2$",
                "reason": "Line 4: the bracket is replaced by the number equal to it."
              },
              {
                "step": "$25^2 = 625$",
                "reason": "The definition of a power, from arithmetic: a square is a number times itself."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $1649^2 + 2 \\cdot 1649 \\cdot 1351 + 1351^2$.",
              "form": "Answer as an integer.",
              "answer": "9000000",
              "lines": [
                {
                  "step": "Compute $1649^2 + 2 \\cdot 1649 \\cdot 1351 + 1351^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The three terms are $a^2$, $2ab$ and $b^2$, with $a = 1649$ and $b = 1351$.",
                  "reason": "Perfect-square quadratic: the first term is the square of $1649$, the last term is the square of $1351$, and the middle term is twice their product."
                },
                {
                  "step": "$1649^2 + 2 \\cdot 1649 \\cdot 1351 + 1351^2 = (1649 + 1351)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                },
                {
                  "step": "$1649 + 1351 = 3000$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "$(1649 + 1351)^2 = 3000^2$",
                  "reason": "Line 4: the bracket is replaced by the number equal to it."
                },
                {
                  "step": "$3000^2 = 9\\,000\\,000$",
                  "reason": "The definition of a power, from arithmetic: a square is a number times itself."
                }
              ]
            },
            {
              "prompt": "Compute $93\\,067^2 - 2 \\cdot 93\\,067 \\cdot 93\\,031 + 93\\,031^2$.",
              "form": "Answer as an integer.",
              "answer": "1296",
              "lines": [
                {
                  "step": "Compute $93\\,067^2 - 2 \\cdot 93\\,067 \\cdot 93\\,031 + 93\\,031^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The three terms are $a^2$, $-2ab$ and $b^2$, with $a = 93\\,067$ and $b = 93\\,031$.",
                  "reason": "Perfect-square quadratic: the first term is the square of $93\\,067$, the last term is the square of $93\\,031$, and the middle term is minus twice their product."
                },
                {
                  "step": "$93\\,067^2 - 2 \\cdot 93\\,067 \\cdot 93\\,031 + 93\\,031^2 = (93\\,067 - 93\\,031)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 - 2ab + b^2 = (a - b)^2$."
                },
                {
                  "step": "$93\\,067 - 93\\,031 = 36$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "$(93\\,067 - 93\\,031)^2 = 36^2$",
                  "reason": "Line 4: the bracket is replaced by the number equal to it."
                },
                {
                  "step": "$36^2 = 1296$",
                  "reason": "The definition of a power, from arithmetic: a square is a number times itself."
                }
              ]
            },
            {
              "prompt": "Compute $35\\,387^2 + 2 \\cdot 35\\,387 \\cdot 34\\,613 + 34\\,613^2$.",
              "form": "Answer as an integer.",
              "answer": "4900000000",
              "lines": [
                {
                  "step": "Compute $35\\,387^2 + 2 \\cdot 35\\,387 \\cdot 34\\,613 + 34\\,613^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The three terms are $a^2$, $2ab$ and $b^2$, with $a = 35\\,387$ and $b = 34\\,613$.",
                  "reason": "Perfect-square quadratic: the first term is the square of $35\\,387$, the last term is the square of $34\\,613$, and the middle term is twice their product."
                },
                {
                  "step": "$35\\,387^2 + 2 \\cdot 35\\,387 \\cdot 34\\,613 + 34\\,613^2 = (35\\,387 + 34\\,613)^2$",
                  "reason": "Square of a binomial, read from right to left: $a^2 + 2ab + b^2 = (a + b)^2$."
                },
                {
                  "step": "$35\\,387 + 34\\,613 = 70\\,000$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "$(35\\,387 + 34\\,613)^2 = 70\\,000^2$",
                  "reason": "Line 4: the bracket is replaced by the number equal to it."
                },
                {
                  "step": "$70\\,000^2 = 4\\,900\\,000\\,000$",
                  "reason": "The definition of a power, from arithmetic: a square is a number times itself."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t137-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this expansion of $(2x - 23)^2 + 7x$, and write that line right.",
            "given": [
              "$(2x - 23)^2 + 7x$",
              "$(2x)^2 - 23^2 + 7x$",
              "$4x^2 - 529 + 7x$",
              "$4x^2 + 7x - 529$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this expansion of $(2x - 23)^2 + 7x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 writes $(2x - 23)^2$ as $(2x)^2 - 23^2$ and leaves out the middle term $2(2x)(-23)$.",
                "reason": "A power taken term by term over a sum: the square of a bracket is the bracket times itself, and the square of a binomial has three terms, not two."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $(2x)^2 + 2(2x)(-23) + (-23)^2 + 7x$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this expansion of $(5x + 23)^2 - 9(x - 7)$, and write that line right.",
              "given": [
                "$(5x + 23)^2 - 9(x - 7)$",
                "$(5x)^2 + 23^2 - 9(x - 7)$",
                "$25x^2 + 529 - 9x + 63$",
                "$25x^2 - 9x + 592$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (5*x)^2+2*(5*x)*(23)+23^2-9*(x-7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(5x + 23)^2 - 9(x - 7)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $(5x + 23)^2$ as $(5x)^2 + 23^2$ and leaves out the middle term $2(5x)(23)$.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the bracket times itself, and the square of a binomial has three terms, not two."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $(5x)^2 + 2(5x)(23) + 23^2 - 9(x - 7)$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $5(x - 5) + (5x - 21)^2$, and write that line right.",
              "given": [
                "$5(x - 5) + (5x - 21)^2$",
                "$5x - 25 + (5x - 21)^2$",
                "$5x - 25 + (5x)^2 + (-21)^2$",
                "$25x^2 + 5x + 416$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*x-25+(5*x)^2+2*(5*x)*(-21)+(-21)^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $5(x - 5) + (5x - 21)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(5x - 21)^2$ as $(5x)^2 + (-21)^2$ and leaves out the middle term $2(5x)(-21)$.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the bracket times itself, and the square of a binomial has three terms, not two."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $5x - 25 + (5x)^2 + 2(5x)(-21) + (-21)^2$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(7x + 20)^2 - 6(x - 3)$, and write that line right.",
              "given": [
                "$(7x + 20)^2 - 6(x - 3)$",
                "$(7x + 20)^2 - 6x + 18$",
                "$(7x)^2 + 20^2 - 6x + 18$",
                "$49x^2 - 6x + 418$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (7*x)^2+2*(7*x)*(20)+20^2-6*x+18",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(7x + 20)^2 - 6(x - 3)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(7x + 20)^2$ as $(7x)^2 + 20^2$ and leaves out the middle term $2(7x)(20)$.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the bracket times itself, and the square of a binomial has three terms, not two."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $(7x)^2 + 2(7x)(20) + 20^2 - 6x + 18$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this expansion of $(12x - 13)^2 - 4x$, and write that line right.",
            "given": [
              "$(12x - 13)^2 - 4x$",
              "$(12x)^2 + 2(12x)(13) + (-13)^2 - 4x$",
              "$144x^2 + 312x + 169 - 4x$",
              "$144x^2 + 308x + 169$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this expansion of $(12x - 13)^2 - 4x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 writes the middle product as $2(12x)(13)$, where the second term of the binomial is $-13$.",
                "reason": "A sign lost: the binomial is $12x + (-13)$, so $b = -13$ and the middle term is $2(12x)(-13)$, which the signs of products, from arithmetic, make negative."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $(12x)^2 + 2(12x)(-13) + (-13)^2 - 4x$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this expansion of $(13x - 11)^2 + 2x$, and write that line right.",
              "given": [
                "$(13x - 11)^2 + 2x$",
                "$(13x)^2 + 2(13x)(-11) + (-11)^2 + 2x$",
                "$169x^2 - 286x - 121 + 2x$",
                "$169x^2 - 284x - 121$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 169*x^2-286*x+121+2*x",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(13x - 11)^2 + 2x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(-11)^2$ as $-121$.",
                  "reason": "A sign lost: by the signs of products, from arithmetic, a negative number times a negative number is positive, so $(-11)^2 = 121$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $169x^2 - 286x + 121 + 2x$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $7(x - 7) + (8x - 21)^2$, and write that line right.",
              "given": [
                "$7(x - 7) + (8x - 21)^2$",
                "$7x - 49 + (8x - 21)^2$",
                "$7x - 49 + (8x)^2 + 2(8x)(21) + (-21)^2$",
                "$64x^2 + 343x + 392$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*x-49+(8*x)^2+2*(8*x)*(-21)+(-21)^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $7(x - 7) + (8x - 21)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the middle product as $2(8x)(21)$, where the second term of the binomial is $-21$.",
                  "reason": "A sign lost: the binomial is $8x + (-21)$, so $b = -21$ and the middle term is $2(8x)(-21)$, which the signs of products, from arithmetic, make negative."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $7x - 49 + (8x)^2 + 2(8x)(-21) + (-21)^2$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this expansion of $(13x - 14)^2 - 3x$, and write that line right.",
              "given": [
                "$(13x - 14)^2 - 3x$",
                "$169x^2 - 364x - 196 - 3x$",
                "$169x^2 - 367x - 196$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 169*x^2-364*x+196-3*x",
              "lines": [
                {
                  "step": "Find the first wrong line in this expansion of $(13x - 14)^2 - 3x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 gives the last term of the square as $-196$, where it is $(-14)^2$.",
                  "reason": "A sign lost: by the signs of products, from arithmetic, a negative number times a negative number is positive, so $(-14)^2 = 196$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $169x^2 - 364x + 196 - 3x$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ keeps the middle term $2ab$ and the sign of each term."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t137-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: The number $y$ equals the square of the number that is 19 less than 3 times $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: The number $y$ equals the square of the number that is 19 less than 3 times $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "3 times $x$ is $3x$.",
                "reason": "Writing a sentence as an equation: \"3 times\" multiplies $x$ by $3$."
              },
              {
                "step": "19 less than that is $3x - 19$.",
                "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
              },
              {
                "step": "The square of that number is $(3x - 19)^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
              },
              {
                "step": "$y = (3x - 19)^2$",
                "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign, and $y$ stands alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: The number $y$ is the square of the number that is 18 less than 5 times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (5*x-18)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: The number $y$ is the square of the number that is 18 less than 5 times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "5 times $x$ is $5x$.",
                  "reason": "Writing a sentence as an equation: \"5 times\" multiplies $x$ by $5$."
                },
                {
                  "step": "18 less than that is $5x - 18$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "The square of that number is $(5x - 18)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
                },
                {
                  "step": "$y = (5x - 18)^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and $y$ stands alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: Squaring the number that is 21 more than twice $x$ gives the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (2*x+21)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: Squaring the number that is 21 more than twice $x$ gives the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice $x$ is $2x$.",
                  "reason": "Writing a sentence as an equation: \"twice\" multiplies $x$ by $2$."
                },
                {
                  "step": "21 more than that is $2x + 21$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "The square of that number is $(2x + 21)^2$.",
                  "reason": "Writing a sentence as an equation: \"squaring\" raises the whole number, kept in a bracket, to the power 2."
                },
                {
                  "step": "$y = (2x + 21)^2$",
                  "reason": "Writing a sentence as an equation: the word \"gives\" marks the place of the equals sign, and $y$ stands alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: The number $y$ is the square of the number that is 23 less than 8 times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (8*x-23)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and the square not multiplied out: The number $y$ is the square of the number that is 23 less than 8 times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "8 times $x$ is $8x$.",
                  "reason": "Writing a sentence as an equation: \"8 times\" multiplies $x$ by $8$."
                },
                {
                  "step": "23 less than that is $8x - 23$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "The square of that number is $(8x - 23)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
                },
                {
                  "step": "$y = (8x - 23)^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and $y$ stands alone on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with the square of the sum on the left and nothing multiplied out: The square of the sum of $x$ and $y$ is 13 more than the sum of their squares.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the square of the sum on the left and nothing multiplied out: The square of the sum of $x$ and $y$ is 13 more than the sum of their squares.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of $x$ and $y$ is $x + y$, and its square is $(x + y)^2$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers, and \"the square of\" raises the whole sum, kept in a bracket, to the power 2."
              },
              {
                "step": "The sum of their squares is $x^2 + y^2$.",
                "reason": "Writing a sentence as an equation: \"their squares\" squares each number, and \"the sum of\" adds the two squares."
              },
              {
                "step": "13 more than that is $x^2 + y^2 + 13$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "$(x + y)^2 = x^2 + y^2 + 13$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the square of the difference on the left and nothing multiplied out: The square of the difference of $x$ and $y$ is 44 more than the sum of their squares.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-y)^2 = x^2+y^2+44",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the square of the difference on the left and nothing multiplied out: The square of the difference of $x$ and $y$ is 44 more than the sum of their squares.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and its square is $(x - y)^2$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" takes the second number from the first of the two numbers, and \"the square of\" raises the whole difference, kept in a bracket, to the power 2."
                },
                {
                  "step": "The sum of their squares is $x^2 + y^2$.",
                  "reason": "Writing a sentence as an equation: \"their squares\" squares each number, and \"the sum of\" adds the two squares."
                },
                {
                  "step": "44 more than that is $x^2 + y^2 + 44$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$(x - y)^2 = x^2 + y^2 + 44$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the square of the difference on the left and nothing multiplied out: The square of the difference of $x$ and $y$ is 6 less than the sum of their squares.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-y)^2 = x^2+y^2-6",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the square of the difference on the left and nothing multiplied out: The square of the difference of $x$ and $y$ is 6 less than the sum of their squares.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and its square is $(x - y)^2$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" takes the second number from the first of the two numbers, and \"the square of\" raises the whole difference, kept in a bracket, to the power 2."
                },
                {
                  "step": "The sum of their squares is $x^2 + y^2$.",
                  "reason": "Writing a sentence as an equation: \"their squares\" squares each number, and \"the sum of\" adds the two squares."
                },
                {
                  "step": "6 less than that is $x^2 + y^2 - 6$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "$(x - y)^2 = x^2 + y^2 - 6$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the square of the difference on the left and nothing multiplied out: The square of the difference of $x$ and $y$ is 58 more than the sum of their squares.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-y)^2 = x^2+y^2+58",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the square of the difference on the left and nothing multiplied out: The square of the difference of $x$ and $y$ is 58 more than the sum of their squares.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and its square is $(x - y)^2$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" takes the second number from the first of the two numbers, and \"the square of\" raises the whole difference, kept in a bracket, to the power 2."
                },
                {
                  "step": "The sum of their squares is $x^2 + y^2$.",
                  "reason": "Writing a sentence as an equation: \"their squares\" squares each number, and \"the sum of\" adds the two squares."
                },
                {
                  "step": "58 more than that is $x^2 + y^2 + 58$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$(x - y)^2 = x^2 + y^2 + 58$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
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
      "id": "t137-p1",
      "method": "direct proof",
      "statement": "For all numbers $a$ and $b$, $(a + b)^2 = a^2 + 2ab + b^2$.",
      "idea": "Squaring means multiplying the bracket by itself. Every term of one bracket times every term of the other gives four products, and the two middle ones are both $ab$, so they collect to $2ab$.",
      "lines": [
        {
          "line": "The square $(a + b)^2$ equals $(a + b)(a + b)$.",
          "reason": "The definition of a power, from arithmetic: a square is a number times itself."
        },
        {
          "line": "The product $(a + b)(a + b)$ equals $a \\cdot a + ab + ba + b \\cdot b$.",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "The product $ba$ equals $ab$.",
          "reason": "The commutative law of multiplication."
        },
        {
          "line": "So $(a + b)^2 = a \\cdot a + ab + ab + b \\cdot b$.",
          "reason": "Lines 1 and 2, with $ba$ replaced by $ab$ as line 3 allows."
        },
        {
          "line": "The sum $ab + ab$ equals $2ab$.",
          "reason": "Collecting like terms: $(1 + 1)ab = 2ab$."
        },
        {
          "line": "The product $a \\cdot a$ equals $a^2$, and $b \\cdot b$ equals $b^2$.",
          "reason": "The definition of a power, from arithmetic."
        },
        {
          "line": "Therefore $(a + b)^2 = a^2 + 2ab + b^2$.",
          "reason": "Line 4, with each piece replaced by the expression equal to it in lines 5 and 6."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t137-s1",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $b$ and $c$, $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$. Facts it may use: the associative and commutative laws of addition and multiplication, square of a binomial, the distributive law.",
      "check": {
        "proof": [
          {
            "line": "The sum $a + b + c$ equals $(a + b) + c$.",
            "reason": "The associative law of addition."
          },
          {
            "line": "So $(a + b + c)^2 = \\left((a + b) + c\\right)^2$.",
            "reason": "The sum is replaced by the sum equal to it in line 1."
          },
          {
            "line": "The square $\\left((a + b) + c\\right)^2$ equals $(a + b)^2 + 2(a + b)c + c^2$.",
            "reason": "Square of a binomial, with $a + b$ as the first term and $c$ as the second."
          },
          {
            "line": "The square $(a + b)^2$ equals $a^2 + 2ab + b^2$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "The product $2(a + b)c$ equals $2ac + 2bc$.",
            "reason": "The distributive law, with the commutative law of multiplication to bring $c$ beside each term."
          },
          {
            "line": "So $(a + b + c)^2 = a^2 + 2ab + b^2 + 2ac + 2bc + c^2$.",
            "reason": "Lines 2 and 3, with each piece replaced by the expression equal to it in lines 4 and 5."
          },
          {
            "line": "The sum $a^2 + 2ab + b^2 + 2ac + 2bc + c^2$ equals $a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$.",
            "reason": "The commutative laws of addition and multiplication."
          },
          {
            "line": "Therefore $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$.",
            "reason": "Lines 6 and 7: two numbers equal to one number are equal."
          }
        ]
      }
    },
    {
      "id": "t137-s2",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n$, $(10n + 5)^2 = 100n(n + 1) + 25$. Facts it may use: square of a binomial, power of a product, the commutative and associative laws of multiplication, the definition of a power, the distributive law.",
      "check": {
        "proof": [
          {
            "line": "The square $(10n + 5)^2$ equals $(10n)^2 + 2(10n)(5) + 5^2$.",
            "reason": "Square of a binomial, with $a = 10n$ and $b = 5$."
          },
          {
            "line": "The square $(10n)^2$ equals $100n^2$.",
            "reason": "Power of a product: $(10n)^2 = 10^2n^2$."
          },
          {
            "line": "The product $2(10n)(5)$ equals $100n$.",
            "reason": "The commutative and associative laws of multiplication, from arithmetic, put the numbers together: $2 \\cdot 10 \\cdot 5 = 100$."
          },
          {
            "line": "The square $5^2$ equals $25$.",
            "reason": "The definition of a power, from arithmetic."
          },
          {
            "line": "So $(10n + 5)^2 = 100n^2 + 100n + 25$.",
            "reason": "Line 1, with each piece replaced by the expression equal to it in lines 2 to 4."
          },
          {
            "line": "The sum $100n^2 + 100n$ equals $100(n^2 + n)$.",
            "reason": "Factoring by the distributive law, read from right to left, with the common factor $100$."
          },
          {
            "line": "The sum $n^2 + n$ equals $n(n + 1)$.",
            "reason": "Factoring by the distributive law, read from right to left, with the common factor $n$."
          },
          {
            "line": "Therefore $(10n + 5)^2 = 100n(n + 1) + 25$.",
            "reason": "Line 5, with $100n^2 + 100n$ replaced by the expression equal to it in lines 6 and 7."
          }
        ]
      }
    }
  ]
}
