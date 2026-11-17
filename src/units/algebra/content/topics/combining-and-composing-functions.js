export default {
  "number": 159,
  "title": "Sums, products and compositions of functions",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "460-467, 479-483"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $(fg)(x)$, where $f(x) = -6x + 19$ and $g(x) = -3x^2 + 5x + 12$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "18*x^3-87*x^2+23*x+228",
    "solution": [
      "Find $(fg)(x)$, where $f(x) = -6x + 19$ and $g(x) = -3x^2 + 5x + 12$.",
      "$(fg)(x) = (-6x + 19)(-3x^2 + 5x + 12)$",
      "$(fg)(x) = 18x^3 - 30x^2 - 72x - 57x^2 + 95x + 228$",
      "$(fg)(x) = 18x^3 - 87x^2 + 23x + 228$"
    ]
  },
  "ideas": [
    {
      "name": "Sum, difference, product and quotient of functions",
      "concrete": "With $f(x) = 2x^2 - 15$ and $g(x) = 5x - 13$, the input $3$ gives $f(3) = 3$ and $g(3) = 2$, so $(f + g)(3) = 3 + 2 = 5$, $(f - g)(3) = 1$, $(fg)(3) = 3 \\cdot 2 = 6$ and $\\left(\\dfrac{f}{g}\\right)(3) = \\dfrac{3}{2}$.",
      "general": "For functions $f$ and $g$, the **sum** $f + g$, the **difference** $f - g$, the **product** $fg$ and the **quotient** $\\dfrac{f}{g}$ are the functions with outputs $f(x) + g(x)$, $f(x) - g(x)$, $f(x) \\cdot g(x)$ and $\\dfrac{f(x)}{g(x)}$, for each $x$ in the domains of both; the quotient also leaves out each $x$ with $g(x) = 0$."
    },
    {
      "name": "Composition $f(g(x))$",
      "concrete": "With $f(x) = 7x - 12$ and $g(x) = 2x^2 + 11$, the input $3$ goes into $g$ first: $g(3) = 29$, and then $f(g(3)) = f(29) = 191$. In the other order, $f(3) = 9$ and $g(f(3)) = g(9) = 173$, a different number.",
      "general": "The **composition** $f(g(x))$, also written $(f \\circ g)(x)$, puts the input $x$ into $g$ and then the output $g(x)$ into $f$. It has an output for each $x$ in the domain of $g$ whose output $g(x)$ is in the domain of $f$. In general $f(g(x))$ and $g(f(x))$ are different."
    },
    {
      "name": "The notation $f^n$ for $f$ applied $n$ times",
      "concrete": "With $f(x) = 7x + 11$, the function applied twice is $f^2(x) = f(f(x)) = 7(7x + 11) + 11 = 49x + 88$, while the square of the output is $(f(x))^2 = 49x^2 + 154x + 121$, a different expression.",
      "general": "For a function $f$ and a whole number $n$ from $1$ up, $f^n(x)$ is $f$ applied $n$ times: $f^1(x) = f(x)$, $f^2(x) = f(f(x))$, $f^3(x) = f(f(f(x)))$, and so on. It is never the power $(f(x))^n$."
    }
  ],
  "kinds": [
    {
      "id": "t159-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $\\left(\\dfrac{f}{g}\\right)(4)$, where $f(x) = 2x^2 + 8x + 11$ and $g(x) = -4x - 3$.",
            "lines": [
              {
                "step": "Find $\\left(\\dfrac{f}{g}\\right)(4)$, where $f(x) = 2x^2 + 8x + 11$ and $g(x) = -4x - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(4) = 2(4)^2 + 8(4) + 11 = 75$",
                "reason": "Function notation: $4$ goes, in brackets, where $x$ stands; the power comes before the products."
              },
              {
                "step": "$g(4) = -4(4) - 3 = -19$",
                "reason": "Function notation: $4$ goes, in brackets, where $x$ stands."
              },
              {
                "step": "$\\left(\\dfrac{f}{g}\\right)(4) = \\dfrac{75}{-19} = -\\dfrac{75}{19}$",
                "reason": "Sum, difference, product and quotient of functions: the quotient at $4$ is $f(4)$ divided by $g(4)$, and $g(4)$ is not $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $(f + g)(-1)$, where $f(x) = 2x^2 - 9x + 12$ and $g(x) = 2x - 10$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find $(f + g)(-1)$, where $f(x) = 2x^2 - 9x + 12$ and $g(x) = 2x - 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-1) = 2(-1)^2 - 9(-1) + 12 = 23$",
                  "reason": "Function notation: $-1$ goes, in brackets, where $x$ stands; the power comes before the products."
                },
                {
                  "step": "$g(-1) = 2(-1) - 10 = -12$",
                  "reason": "Function notation: $-1$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$(f + g)(-1) = 23 + (-12) = 11$",
                  "reason": "Sum, difference, product and quotient of functions: the sum at $-1$ is $f(-1) + g(-1)$."
                }
              ]
            },
            {
              "prompt": "Find $(f - g)(2)$, where $f(x) = -4x^2 - 2x + 3$ and $g(x) = -2x - 8$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Find $(f - g)(2)$, where $f(x) = -4x^2 - 2x + 3$ and $g(x) = -2x - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = -4(2)^2 - 2(2) + 3 = -17$",
                  "reason": "Function notation: $2$ goes, in brackets, where $x$ stands; the power comes before the products."
                },
                {
                  "step": "$g(2) = -2(2) - 8 = -12$",
                  "reason": "Function notation: $2$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$(f - g)(2) = -17 - (-12) = -5$",
                  "reason": "Sum, difference, product and quotient of functions: the difference at $2$ is $f(2) - g(2)$."
                }
              ]
            },
            {
              "prompt": "Find $(fg)(2)$, where $f(x) = -5x^2 + 6x - 5$ and $g(x) = -3x + 11$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-65",
              "lines": [
                {
                  "step": "Find $(fg)(2)$, where $f(x) = -5x^2 + 6x - 5$ and $g(x) = -3x + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = -5(2)^2 + 6(2) - 5 = -13$",
                  "reason": "Function notation: $2$ goes, in brackets, where $x$ stands; the power comes before the products."
                },
                {
                  "step": "$g(2) = -3(2) + 11 = 5$",
                  "reason": "Function notation: $2$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$(fg)(2) = -13 \\cdot 5 = -65$",
                  "reason": "Sum, difference, product and quotient of functions: the product at $2$ is $f(2) \\cdot g(2)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $(fg)(x)$, where $f(x) = 10x + 9$ and $g(x) = -2x^2 - 3x + 8$.",
            "lines": [
              {
                "step": "Find $(fg)(x)$, where $f(x) = 10x + 9$ and $g(x) = -2x^2 - 3x + 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(fg)(x) = (10x + 9)(-2x^2 - 3x + 8)$",
                "reason": "Sum, difference, product and quotient of functions: $(fg)(x)$ is $f(x) \\cdot g(x)$."
              },
              {
                "step": "$(fg)(x) = -20x^3 - 30x^2 + 80x - 18x^2 - 27x + 72$",
                "reason": "Every term of one bracket times every term of the other: $10x$ and $9$ each multiply the three terms of $-2x^2 - 3x + 8$."
              },
              {
                "step": "$(fg)(x) = -20x^3 - 48x^2 + 53x + 72$",
                "reason": "Collecting like terms: the terms in $x^2$ are added, and so are the terms in $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $(fg)(x)$, where $f(x) = -5x + 14$ and $g(x) = 6x^2 - 5x - 9$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-30*x^3+109*x^2-25*x-126",
              "lines": [
                {
                  "step": "Find $(fg)(x)$, where $f(x) = -5x + 14$ and $g(x) = 6x^2 - 5x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(fg)(x) = (-5x + 14)(6x^2 - 5x - 9)$",
                  "reason": "Sum, difference, product and quotient of functions: $(fg)(x)$ is $f(x) \\cdot g(x)$."
                },
                {
                  "step": "$(fg)(x) = -30x^3 + 25x^2 + 45x + 84x^2 - 70x - 126$",
                  "reason": "Every term of one bracket times every term of the other: $-5x$ and $14$ each multiply the three terms of $6x^2 - 5x - 9$."
                },
                {
                  "step": "$(fg)(x) = -30x^3 + 109x^2 - 25x - 126$",
                  "reason": "Collecting like terms: the terms in $x^2$ are added, and so are the terms in $x$."
                }
              ]
            },
            {
              "prompt": "Find $(fg)(x)$, where $f(x) = -9x + 22$ and $g(x) = 2x^2 + 3x - 7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-18*x^3+17*x^2+129*x-154",
              "lines": [
                {
                  "step": "Find $(fg)(x)$, where $f(x) = -9x + 22$ and $g(x) = 2x^2 + 3x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(fg)(x) = (-9x + 22)(2x^2 + 3x - 7)$",
                  "reason": "Sum, difference, product and quotient of functions: $(fg)(x)$ is $f(x) \\cdot g(x)$."
                },
                {
                  "step": "$(fg)(x) = -18x^3 - 27x^2 + 63x + 44x^2 + 66x - 154$",
                  "reason": "Every term of one bracket times every term of the other: $-9x$ and $22$ each multiply the three terms of $2x^2 + 3x - 7$."
                },
                {
                  "step": "$(fg)(x) = -18x^3 + 17x^2 + 129x - 154$",
                  "reason": "Collecting like terms: the terms in $x^2$ are added, and so are the terms in $x$."
                }
              ]
            },
            {
              "prompt": "Find $(fg)(x)$, where $f(x) = -7x + 1$ and $g(x) = -5x^2 - 5x - 11$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "35*x^3+30*x^2+72*x-11",
              "lines": [
                {
                  "step": "Find $(fg)(x)$, where $f(x) = -7x + 1$ and $g(x) = -5x^2 - 5x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(fg)(x) = (-7x + 1)(-5x^2 - 5x - 11)$",
                  "reason": "Sum, difference, product and quotient of functions: $(fg)(x)$ is $f(x) \\cdot g(x)$."
                },
                {
                  "step": "$(fg)(x) = 35x^3 + 35x^2 + 77x - 5x^2 - 5x - 11$",
                  "reason": "Every term of one bracket times every term of the other: $-7x$ and $1$ each multiply the three terms of $-5x^2 - 5x - 11$."
                },
                {
                  "step": "$(fg)(x) = 35x^3 + 30x^2 + 72x - 11$",
                  "reason": "Collecting like terms: the terms in $x^2$ are added, and so are the terms in $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $g(f(-1))$, where $f(x) = 7x + 6$ and $g(x) = 4x^2 - 4x + 13$.",
            "lines": [
              {
                "step": "Find $g(f(-1))$, where $f(x) = 7x + 6$ and $g(x) = 4x^2 - 4x + 13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(-1) = 7(-1) + 6 = -1$",
                "reason": "Function notation: the inner function is worked out first, with $-1$ in brackets where $x$ stands."
              },
              {
                "step": "$g(f(-1)) = g(-1)$",
                "reason": "Composition $f(g(x))$: the output of $f$ is the input of $g$."
              },
              {
                "step": "$g(-1) = 4(-1)^2 - 4(-1) + 13 = 21$",
                "reason": "Function notation: $-1$ goes, in brackets, where $x$ stands."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(g(-3))$, where $f(x) = -10x - 10$ and $g(x) = -4x^2 - 8x + 14$.",
              "form": "Answer as an integer.",
              "answer": "-30",
              "lines": [
                {
                  "step": "Find $f(g(-3))$, where $f(x) = -10x - 10$ and $g(x) = -4x^2 - 8x + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(-3) = -4(-3)^2 - 8(-3) + 14 = 2$",
                  "reason": "Function notation: the inner function is worked out first, with $-3$ in brackets where $x$ stands."
                },
                {
                  "step": "$f(g(-3)) = f(2)$",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$."
                },
                {
                  "step": "$f(2) = -10(2) - 10 = -30$",
                  "reason": "Function notation: $2$ goes, in brackets, where $x$ stands."
                }
              ]
            },
            {
              "prompt": "Find $g(f(-5))$, where $f(x) = 4x + 8$ and $g(x) = 2x^2 + 9x - 6$.",
              "form": "Answer as an integer.",
              "answer": "174",
              "lines": [
                {
                  "step": "Find $g(f(-5))$, where $f(x) = 4x + 8$ and $g(x) = 2x^2 + 9x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-5) = 4(-5) + 8 = -12$",
                  "reason": "Function notation: the inner function is worked out first, with $-5$ in brackets where $x$ stands."
                },
                {
                  "step": "$g(f(-5)) = g(-12)$",
                  "reason": "Composition $f(g(x))$: the output of $f$ is the input of $g$."
                },
                {
                  "step": "$g(-12) = 2(-12)^2 + 9(-12) - 6 = 174$",
                  "reason": "Function notation: $-12$ goes, in brackets, where $x$ stands."
                }
              ]
            },
            {
              "prompt": "Find $f(g(1))$, where $f(x) = -6x - 5$ and $g(x) = -4x^2 + 10x + 9$.",
              "form": "Answer as an integer.",
              "answer": "-95",
              "lines": [
                {
                  "step": "Find $f(g(1))$, where $f(x) = -6x - 5$ and $g(x) = -4x^2 + 10x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(1) = -4(1)^2 + 10(1) + 9 = 15$",
                  "reason": "Function notation: the inner function is worked out first, with $1$ in brackets where $x$ stands."
                },
                {
                  "step": "$f(g(1)) = f(15)$",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$."
                },
                {
                  "step": "$f(15) = -6(15) - 5 = -95$",
                  "reason": "Function notation: $15$ goes, in brackets, where $x$ stands."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(f(x))$, where $f(x) = -6x + 26$.",
            "lines": [
              {
                "step": "Find $f(f(x))$, where $f(x) = -6x + 26$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(f(x)) = -6(-6x + 26) + 26$",
                "reason": "Composition $f(g(x))$: the inner function's rule goes, in brackets, where $x$ stands in the outer rule."
              },
              {
                "step": "$f(f(x)) = 36x - 156 + 26$",
                "reason": "Multiplying out: $-6$ multiplies each term inside the bracket."
              },
              {
                "step": "$f(f(x)) = 36x - 130$",
                "reason": "Collecting like terms: the two numbers are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(g(x))$, where $f(x) = 7x - 19$ and $g(x) = 4x^2 + 7x - 11$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "28*x^2+49*x-96",
              "lines": [
                {
                  "step": "Find $f(g(x))$, where $f(x) = 7x - 19$ and $g(x) = 4x^2 + 7x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 7(4x^2 + 7x - 11) - 19$",
                  "reason": "Composition $f(g(x))$: the inner function's rule goes, in brackets, where $x$ stands in the outer rule."
                },
                {
                  "step": "$f(g(x)) = 28x^2 + 49x - 77 - 19$",
                  "reason": "Multiplying out: $7$ multiplies each term inside the bracket."
                },
                {
                  "step": "$f(g(x)) = 28x^2 + 49x - 96$",
                  "reason": "Collecting like terms: the two numbers are added."
                }
              ]
            },
            {
              "prompt": "Find $g(f(x))$, where $f(x) = -4x^2 + 8x - 7$ and $g(x) = -3x + 19$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "12*x^2-24*x+40",
              "lines": [
                {
                  "step": "Find $g(f(x))$, where $f(x) = -4x^2 + 8x - 7$ and $g(x) = -3x + 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(f(x)) = -3(-4x^2 + 8x - 7) + 19$",
                  "reason": "Composition $f(g(x))$: the inner function's rule goes, in brackets, where $x$ stands in the outer rule."
                },
                {
                  "step": "$g(f(x)) = 12x^2 - 24x + 21 + 19$",
                  "reason": "Multiplying out: $-3$ multiplies each term inside the bracket."
                },
                {
                  "step": "$g(f(x)) = 12x^2 - 24x + 40$",
                  "reason": "Collecting like terms: the two numbers are added."
                }
              ]
            },
            {
              "prompt": "Find $f(f(x))$, where $f(x) = 10x - 22$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "100*x-242",
              "lines": [
                {
                  "step": "Find $f(f(x))$, where $f(x) = 10x - 22$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = 10(10x - 22) - 22$",
                  "reason": "Composition $f(g(x))$: the inner function's rule goes, in brackets, where $x$ stands in the outer rule."
                },
                {
                  "step": "$f(f(x)) = 100x - 220 - 22$",
                  "reason": "Multiplying out: $10$ multiplies each term inside the bracket."
                },
                {
                  "step": "$f(f(x)) = 100x - 242$",
                  "reason": "Collecting like terms: the two numbers are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $g(f(x))$, where $f(x) = 5x - 2$ and $g(x) = -5x^2 - 3x - 16$.",
            "lines": [
              {
                "step": "Find $g(f(x))$, where $f(x) = 5x - 2$ and $g(x) = -5x^2 - 3x - 16$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$g(f(x)) = -5(5x - 2)^2 - 3(5x - 2) - 16$",
                "reason": "Composition $f(g(x))$: the inner rule $5x - 2$ goes, in brackets, in each place where $x$ stands in the rule for $g$."
              },
              {
                "step": "$g(f(x)) = -5(25x^2 - 20x + 4) - 3(5x - 2) - 16$",
                "reason": "Square of a binomial: $(5x - 2)^2 = 25x^2 - 20x + 4$."
              },
              {
                "step": "$g(f(x)) = -125x^2 + 100x - 20 - 15x + 6 - 16$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$g(f(x)) = -125x^2 + 85x - 30$",
                "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(g(x))$, where $f(x) = 2x^2 + 5x + 17$ and $g(x) = 4x - 10$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "32*x^2-140*x+167",
              "lines": [
                {
                  "step": "Find $f(g(x))$, where $f(x) = 2x^2 + 5x + 17$ and $g(x) = 4x - 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 2(4x - 10)^2 + 5(4x - 10) + 17$",
                  "reason": "Composition $f(g(x))$: the inner rule $4x - 10$ goes, in brackets, in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(g(x)) = 2(16x^2 - 80x + 100) + 5(4x - 10) + 17$",
                  "reason": "Square of a binomial: $(4x - 10)^2 = 16x^2 - 80x + 100$."
                },
                {
                  "step": "$f(g(x)) = 32x^2 - 160x + 200 + 20x - 50 + 17$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$f(g(x)) = 32x^2 - 140x + 167$",
                  "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
                }
              ]
            },
            {
              "prompt": "Find $g(f(x))$, where $f(x) = -5x - 10$ and $g(x) = 4x^2 - 11x + 18$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "100*x^2+455*x+528",
              "lines": [
                {
                  "step": "Find $g(f(x))$, where $f(x) = -5x - 10$ and $g(x) = 4x^2 - 11x + 18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(f(x)) = 4(-5x - 10)^2 - 11(-5x - 10) + 18$",
                  "reason": "Composition $f(g(x))$: the inner rule $-5x - 10$ goes, in brackets, in each place where $x$ stands in the rule for $g$."
                },
                {
                  "step": "$g(f(x)) = 4(25x^2 + 100x + 100) - 11(-5x - 10) + 18$",
                  "reason": "Square of a binomial: $(-5x - 10)^2 = 25x^2 + 100x + 100$."
                },
                {
                  "step": "$g(f(x)) = 100x^2 + 400x + 400 + 55x + 110 + 18$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$g(f(x)) = 100x^2 + 455x + 528$",
                  "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
                }
              ]
            },
            {
              "prompt": "Find $f(g(x))$, where $f(x) = 5x^2 + 9x + 17$ and $g(x) = 4x - 1$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "80*x^2-4*x+13",
              "lines": [
                {
                  "step": "Find $f(g(x))$, where $f(x) = 5x^2 + 9x + 17$ and $g(x) = 4x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 5(4x - 1)^2 + 9(4x - 1) + 17$",
                  "reason": "Composition $f(g(x))$: the inner rule $4x - 1$ goes, in brackets, in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(g(x)) = 5(16x^2 - 8x + 1) + 9(4x - 1) + 17$",
                  "reason": "Square of a binomial: $(4x - 1)^2 = 16x^2 - 8x + 1$."
                },
                {
                  "step": "$f(g(x)) = 80x^2 - 40x + 5 + 36x - 9 + 17$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$f(g(x)) = 80x^2 - 4x + 13$",
                  "reason": "Collecting like terms: the terms in $x$ are added, and so are the numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{51}(12)$, where $f(x) = \\dfrac{11x - 30}{-5x - 11}$.",
            "lines": [
              {
                "step": "Find $f^{51}(12)$, where $f(x) = \\dfrac{11x - 30}{-5x - 11}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f^2(x) = \\dfrac{11 \\cdot \\dfrac{11x - 30}{-5x - 11} - 30}{-5 \\cdot \\dfrac{11x - 30}{-5x - 11} - 11}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
              },
              {
                "step": "$f^2(x) = \\dfrac{11(11x - 30) - 30(-5x - 11)}{-5(11x - 30) - 11(-5x - 11)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $-5x - 11$."
              },
              {
                "step": "$f^2(x) = \\dfrac{271x}{271}$",
                "reason": "Multiplying out and collecting like terms: on the top the numbers cancel, and on the bottom the terms in $x$ cancel."
              },
              {
                "step": "$f^2(x) = x$",
                "reason": "Cancelling a common factor: the top and the bottom share the factor $271$."
              },
              {
                "step": "$f^{51}(12) = f(12)$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: after the first application, the other $50$ come in pairs, and each pair gives back its input."
              },
              {
                "step": "$f(12) = \\dfrac{11(12) - 30}{-5(12) - 11} = -\\dfrac{102}{71}$",
                "reason": "Function notation: $12$ goes, in brackets, where $x$ stands, and the fraction is put in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{19}(11)$, where $f(x) = \\dfrac{-7x + 29}{-7x + 7}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "24/35",
              "lines": [
                {
                  "step": "Find $f^{19}(11)$, where $f(x) = \\dfrac{-7x + 29}{-7x + 7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-7 \\cdot \\dfrac{-7x + 29}{-7x + 7} + 29}{-7 \\cdot \\dfrac{-7x + 29}{-7x + 7} + 7}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-7(-7x + 29) + 29(-7x + 7)}{-7(-7x + 29) + 7(-7x + 7)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-7x + 7$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-154x}{-154}$",
                  "reason": "Multiplying out and collecting like terms: on the top the numbers cancel, and on the bottom the terms in $x$ cancel."
                },
                {
                  "step": "$f^2(x) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-154$."
                },
                {
                  "step": "$f^{19}(11) = f(11)$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: after the first application, the other $18$ come in pairs, and each pair gives back its input."
                },
                {
                  "step": "$f(11) = \\dfrac{-7(11) + 29}{-7(11) + 7} = \\dfrac{24}{35}$",
                  "reason": "Function notation: $11$ goes, in brackets, where $x$ stands, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $f^{85}(-5)$, where $f(x) = \\dfrac{3x - 17}{-5x - 3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-16/11",
              "lines": [
                {
                  "step": "Find $f^{85}(-5)$, where $f(x) = \\dfrac{3x - 17}{-5x - 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{3 \\cdot \\dfrac{3x - 17}{-5x - 3} - 17}{-5 \\cdot \\dfrac{3x - 17}{-5x - 3} - 3}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{3(3x - 17) - 17(-5x - 3)}{-5(3x - 17) - 3(-5x - 3)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-5x - 3$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{94x}{94}$",
                  "reason": "Multiplying out and collecting like terms: on the top the numbers cancel, and on the bottom the terms in $x$ cancel."
                },
                {
                  "step": "$f^2(x) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $94$."
                },
                {
                  "step": "$f^{85}(-5) = f(-5)$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: after the first application, the other $84$ come in pairs, and each pair gives back its input."
                },
                {
                  "step": "$f(-5) = \\dfrac{3(-5) - 17}{-5(-5) - 3} = -\\dfrac{16}{11}$",
                  "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $f^{77}(8)$, where $f(x) = \\dfrac{11x - 29}{4x - 11}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "59/21",
              "lines": [
                {
                  "step": "Find $f^{77}(8)$, where $f(x) = \\dfrac{11x - 29}{4x - 11}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{11 \\cdot \\dfrac{11x - 29}{4x - 11} - 29}{4 \\cdot \\dfrac{11x - 29}{4x - 11} - 11}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{11(11x - 29) - 29(4x - 11)}{4(11x - 29) - 11(4x - 11)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $4x - 11$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{5x}{5}$",
                  "reason": "Multiplying out and collecting like terms: on the top the numbers cancel, and on the bottom the terms in $x$ cancel."
                },
                {
                  "step": "$f^2(x) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $5$."
                },
                {
                  "step": "$f^{77}(8) = f(8)$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: after the first application, the other $76$ come in pairs, and each pair gives back its input."
                },
                {
                  "step": "$f(8) = \\dfrac{11(8) - 29}{4(8) - 11} = \\dfrac{59}{21}$",
                  "reason": "Function notation: $8$ goes, in brackets, where $x$ stands, and the fraction is put in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{38}(-10)$, where $f(x) = x + 39$.",
            "lines": [
              {
                "step": "Find $f^{38}(-10)$, where $f(x) = x + 39$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f^{38}(-10) = -10 + 38 \\cdot 39$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: each application of $f$ adds $39$ to its input, so $38$ applications add $38$ copies of $39$, and multiplication as repeated addition (arithmetic's) writes that as $38 \\cdot 39$."
              },
              {
                "step": "$f^{38}(-10) = -10 + 1482$",
                "reason": "The order of operations puts products before sums and differences."
              },
              {
                "step": "$f^{38}(-10) = 1472$",
                "reason": "The order of operations leaves sums and differences for last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{21}(1)$, where $f(x) = x + 16$.",
              "form": "Answer as an integer.",
              "answer": "337",
              "lines": [
                {
                  "step": "Find $f^{21}(1)$, where $f(x) = x + 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^{21}(1) = 1 + 21 \\cdot 16$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: each application of $f$ adds $16$ to its input, so $21$ applications add $21$ copies of $16$, and multiplication as repeated addition (arithmetic's) writes that as $21 \\cdot 16$."
                },
                {
                  "step": "$f^{21}(1) = 1 + 336$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$f^{21}(1) = 337$",
                  "reason": "The order of operations leaves sums and differences for last."
                }
              ]
            },
            {
              "prompt": "Find $f^{30}(21)$, where $f(x) = x + 37$.",
              "form": "Answer as an integer.",
              "answer": "1131",
              "lines": [
                {
                  "step": "Find $f^{30}(21)$, where $f(x) = x + 37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^{30}(21) = 21 + 30 \\cdot 37$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: each application of $f$ adds $37$ to its input, so $30$ applications add $30$ copies of $37$, and multiplication as repeated addition (arithmetic's) writes that as $30 \\cdot 37$."
                },
                {
                  "step": "$f^{30}(21) = 21 + 1110$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$f^{30}(21) = 1131$",
                  "reason": "The order of operations leaves sums and differences for last."
                }
              ]
            },
            {
              "prompt": "Find $f^{41}(19)$, where $f(x) = x + 31$.",
              "form": "Answer as an integer.",
              "answer": "1290",
              "lines": [
                {
                  "step": "Find $f^{41}(19)$, where $f(x) = x + 31$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^{41}(19) = 19 + 41 \\cdot 31$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: each application of $f$ adds $31$ to its input, so $41$ applications add $41$ copies of $31$, and multiplication as repeated addition (arithmetic's) writes that as $41 \\cdot 31$."
                },
                {
                  "step": "$f^{41}(19) = 19 + 1271$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$f^{41}(19) = 1290$",
                  "reason": "The order of operations leaves sums and differences for last."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $f(f(x)) = x$, where $f(x) = -4x - 35$.",
            "lines": [
              {
                "step": "Solve $f(f(x)) = x$, where $f(x) = -4x - 35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(f(x)) = -4(-4x - 35) - 35$",
                "reason": "Composition $f(g(x))$: the rule $-4x - 35$ goes, in brackets, where $x$ stands in the rule for $f$."
              },
              {
                "step": "$f(f(x)) = 16x + 140 - 35$",
                "reason": "Multiplying out: $-4$ multiplies each term inside the bracket."
              },
              {
                "step": "$f(f(x)) = 16x + 105$",
                "reason": "Collecting like terms: the two numbers are added."
              },
              {
                "step": "$16x + 105 = x$",
                "reason": "Substituting a value: $f(f(x))$ is replaced by the expression it equals."
              },
              {
                "step": "$15x = -105$",
                "reason": "Adding the same number: $-x$ and $-105$ are added to both sides, and the terms in $x$ are collected."
              },
              {
                "step": "$x = -7$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $f(f(x)) = x$, where $f(x) = -9x - 33$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -33/10",
              "lines": [
                {
                  "step": "Solve $f(f(x)) = x$, where $f(x) = -9x - 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = -9(-9x - 33) - 33$",
                  "reason": "Composition $f(g(x))$: the rule $-9x - 33$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(f(x)) = 81x + 297 - 33$",
                  "reason": "Multiplying out: $-9$ multiplies each term inside the bracket."
                },
                {
                  "step": "$f(f(x)) = 81x + 264$",
                  "reason": "Collecting like terms: the two numbers are added."
                },
                {
                  "step": "$81x + 264 = x$",
                  "reason": "Substituting a value: $f(f(x))$ is replaced by the expression it equals."
                },
                {
                  "step": "$80x = -264$",
                  "reason": "Adding the same number: $-x$ and $-264$ are added to both sides, and the terms in $x$ are collected."
                },
                {
                  "step": "$x = -\\dfrac{33}{10}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $80$."
                }
              ]
            },
            {
              "prompt": "Solve $f(f(x)) = x$, where $f(x) = 3x - 45$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 45/2",
              "lines": [
                {
                  "step": "Solve $f(f(x)) = x$, where $f(x) = 3x - 45$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = 3(3x - 45) - 45$",
                  "reason": "Composition $f(g(x))$: the rule $3x - 45$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(f(x)) = 9x - 135 - 45$",
                  "reason": "Multiplying out: $3$ multiplies each term inside the bracket."
                },
                {
                  "step": "$f(f(x)) = 9x - 180$",
                  "reason": "Collecting like terms: the two numbers are added."
                },
                {
                  "step": "$9x - 180 = x$",
                  "reason": "Substituting a value: $f(f(x))$ is replaced by the expression it equals."
                },
                {
                  "step": "$8x = 180$",
                  "reason": "Adding the same number: $-x$ and $180$ are added to both sides, and the terms in $x$ are collected."
                },
                {
                  "step": "$x = \\dfrac{45}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                }
              ]
            },
            {
              "prompt": "Solve $f(f(x)) = x$, where $f(x) = 11x + 12$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -6/5",
              "lines": [
                {
                  "step": "Solve $f(f(x)) = x$, where $f(x) = 11x + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = 11(11x + 12) + 12$",
                  "reason": "Composition $f(g(x))$: the rule $11x + 12$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(f(x)) = 121x + 132 + 12$",
                  "reason": "Multiplying out: $11$ multiplies each term inside the bracket."
                },
                {
                  "step": "$f(f(x)) = 121x + 144$",
                  "reason": "Collecting like terms: the two numbers are added."
                },
                {
                  "step": "$121x + 144 = x$",
                  "reason": "Substituting a value: $f(f(x))$ is replaced by the expression it equals."
                },
                {
                  "step": "$120x = -144$",
                  "reason": "Adding the same number: $-x$ and $-144$ are added to both sides, and the terms in $x$ are collected."
                },
                {
                  "step": "$x = -\\dfrac{6}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $120$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$, where $f(x) = -9x - 19$, $g(x) = -4x + b$ and $f(g(1)) = -82$.",
            "lines": [
              {
                "step": "Find $b$, where $f(x) = -9x - 19$, $g(x) = -4x + b$ and $f(g(1)) = -82$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$g(1) = -4(1) + b = -4 + b$",
                "reason": "Function notation: $1$ goes, in brackets, where $x$ stands, and the letter $b$ stays as it is."
              },
              {
                "step": "$f(g(1)) = -9(-4 + b) - 19$",
                "reason": "Composition $f(g(x))$: the output $-4 + b$ of $g$ goes, in brackets, where $x$ stands in the rule for $f$."
              },
              {
                "step": "$-9(-4 + b) - 19 = -82$",
                "reason": "Transitive property: both sides equal $f(g(1))$, which is $-82$."
              },
              {
                "step": "$36 - 9b - 19 = -82$",
                "reason": "Multiplying out: $-9$ multiplies each term inside the bracket."
              },
              {
                "step": "$17 - 9b = -82$",
                "reason": "Collecting like terms: the two numbers are added."
              },
              {
                "step": "$-9b = -99$",
                "reason": "Adding the same number: $-17$ is added to both sides."
              },
              {
                "step": "$b = 11$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-9$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, where $f(x) = -3x + 24$, $g(x) = 7x + b$ and $f(g(-5)) = 120$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 3",
              "lines": [
                {
                  "step": "Find $b$, where $f(x) = -3x + 24$, $g(x) = 7x + b$ and $f(g(-5)) = 120$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(-5) = 7(-5) + b = -35 + b$",
                  "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands, and the letter $b$ stays as it is."
                },
                {
                  "step": "$f(g(-5)) = -3(-35 + b) + 24$",
                  "reason": "Composition $f(g(x))$: the output $-35 + b$ of $g$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$-3(-35 + b) + 24 = 120$",
                  "reason": "Transitive property: both sides equal $f(g(-5))$, which is $120$."
                },
                {
                  "step": "$105 - 3b + 24 = 120$",
                  "reason": "Multiplying out: $-3$ multiplies each term inside the bracket."
                },
                {
                  "step": "$129 - 3b = 120$",
                  "reason": "Collecting like terms: the two numbers are added."
                },
                {
                  "step": "$-3b = -9$",
                  "reason": "Adding the same number: $-129$ is added to both sides."
                },
                {
                  "step": "$b = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $f(x) = -5x + 27$, $g(x) = 5x + b$ and $f(g(-3)) = 67$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 7",
              "lines": [
                {
                  "step": "Find $b$, where $f(x) = -5x + 27$, $g(x) = 5x + b$ and $f(g(-3)) = 67$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(-3) = 5(-3) + b = -15 + b$",
                  "reason": "Function notation: $-3$ goes, in brackets, where $x$ stands, and the letter $b$ stays as it is."
                },
                {
                  "step": "$f(g(-3)) = -5(-15 + b) + 27$",
                  "reason": "Composition $f(g(x))$: the output $-15 + b$ of $g$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$-5(-15 + b) + 27 = 67$",
                  "reason": "Transitive property: both sides equal $f(g(-3))$, which is $67$."
                },
                {
                  "step": "$75 - 5b + 27 = 67$",
                  "reason": "Multiplying out: $-5$ multiplies each term inside the bracket."
                },
                {
                  "step": "$102 - 5b = 67$",
                  "reason": "Collecting like terms: the two numbers are added."
                },
                {
                  "step": "$-5b = -35$",
                  "reason": "Adding the same number: $-102$ is added to both sides."
                },
                {
                  "step": "$b = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $f(x) = 4x + 13$, $g(x) = -8x + b$ and $f(g(3)) = -139$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -14",
              "lines": [
                {
                  "step": "Find $b$, where $f(x) = 4x + 13$, $g(x) = -8x + b$ and $f(g(3)) = -139$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(3) = -8(3) + b = -24 + b$",
                  "reason": "Function notation: $3$ goes, in brackets, where $x$ stands, and the letter $b$ stays as it is."
                },
                {
                  "step": "$f(g(3)) = 4(-24 + b) + 13$",
                  "reason": "Composition $f(g(x))$: the output $-24 + b$ of $g$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$4(-24 + b) + 13 = -139$",
                  "reason": "Transitive property: both sides equal $f(g(3))$, which is $-139$."
                },
                {
                  "step": "$-96 + 4b + 13 = -139$",
                  "reason": "Multiplying out: $4$ multiplies each term inside the bracket."
                },
                {
                  "step": "$-83 + 4b = -139$",
                  "reason": "Collecting like terms: the two numbers are added."
                },
                {
                  "step": "$4b = -56$",
                  "reason": "Adding the same number: $83$ is added to both sides."
                },
                {
                  "step": "$b = -14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$, where $f(x) = 10x + 23$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = -70x + 153$ for every $x$.",
            "lines": [
              {
                "step": "Find $b$, where $f(x) = 10x + 23$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = -70x + 153$ for every $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(g(x)) = 10(ax + b) + 23$",
                "reason": "Composition $f(g(x))$: the rule $ax + b$ goes, in brackets, where $x$ stands in the rule for $f$."
              },
              {
                "step": "$f(g(x)) = 10ax + 10b + 23$",
                "reason": "Multiplying out: $10$ multiplies each term inside the bracket."
              },
              {
                "step": "$10b + 23 = 153$",
                "reason": "Equal for all $x$ means equal coefficients: the two expressions for $f(g(x))$ have equal constant terms."
              },
              {
                "step": "$10b = 130$",
                "reason": "Adding the same number: $-23$ is added to both sides."
              },
              {
                "step": "$b = 13$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, where $f(x) = 7x - 24$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = 14x - 108$ for every $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -12",
              "lines": [
                {
                  "step": "Find $b$, where $f(x) = 7x - 24$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = 14x - 108$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 7(ax + b) - 24$",
                  "reason": "Composition $f(g(x))$: the rule $ax + b$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(g(x)) = 7ax + 7b - 24$",
                  "reason": "Multiplying out: $7$ multiplies each term inside the bracket."
                },
                {
                  "step": "$7b - 24 = -108$",
                  "reason": "Equal for all $x$ means equal coefficients: the two expressions for $f(g(x))$ have equal constant terms."
                },
                {
                  "step": "$7b = -84$",
                  "reason": "Adding the same number: $24$ is added to both sides."
                },
                {
                  "step": "$b = -12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $f(x) = 2x - 25$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = 10x - 13$ for every $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 6",
              "lines": [
                {
                  "step": "Find $b$, where $f(x) = 2x - 25$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = 10x - 13$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 2(ax + b) - 25$",
                  "reason": "Composition $f(g(x))$: the rule $ax + b$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(g(x)) = 2ax + 2b - 25$",
                  "reason": "Multiplying out: $2$ multiplies each term inside the bracket."
                },
                {
                  "step": "$2b - 25 = -13$",
                  "reason": "Equal for all $x$ means equal coefficients: the two expressions for $f(g(x))$ have equal constant terms."
                },
                {
                  "step": "$2b = 12$",
                  "reason": "Adding the same number: $25$ is added to both sides."
                },
                {
                  "step": "$b = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $f(x) = 2x + 20$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = -4x + 38$ for every $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 9",
              "lines": [
                {
                  "step": "Find $b$, where $f(x) = 2x + 20$, $g(x) = ax + b$ for numbers $a$ and $b$, and $f(g(x)) = -4x + 38$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(g(x)) = 2(ax + b) + 20$",
                  "reason": "Composition $f(g(x))$: the rule $ax + b$ goes, in brackets, where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f(g(x)) = 2ax + 2b + 20$",
                  "reason": "Multiplying out: $2$ multiplies each term inside the bracket."
                },
                {
                  "step": "$2b + 20 = 38$",
                  "reason": "Equal for all $x$ means equal coefficients: the two expressions for $f(g(x))$ have equal constant terms."
                },
                {
                  "step": "$2b = 18$",
                  "reason": "Adding the same number: $-20$ is added to both sides."
                },
                {
                  "step": "$b = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $g(-45)$, where $f(x) = 3x - 18$ and $g(f(x)) = -4x^2 - 10x + 3$.",
            "lines": [
              {
                "step": "Find $g(-45)$, where $f(x) = 3x - 18$ and $g(f(x)) = -4x^2 - 10x + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x - 18 = -45$",
                "reason": "Composition $f(g(x))$: $g(f(x))$ is $g(-45)$ at an $x$ with $f(x) = -45$."
              },
              {
                "step": "$3x = -27$",
                "reason": "Adding the same number: $18$ is added to both sides."
              },
              {
                "step": "$x = -9$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$g(-45) = g(f(-9)) = -4(-9)^2 - 10(-9) + 3$",
                "reason": "Substituting a value: $x = -9$ goes, in brackets, in the rule for $g(f(x))$."
              },
              {
                "step": "$g(-45) = -231$",
                "reason": "The order of operations: powers, then products, then sums."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $g(-18)$, where $f(x) = -9x + 9$ and $g(f(x)) = -5x^2 - 9x - 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-78",
              "lines": [
                {
                  "step": "Find $g(-18)$, where $f(x) = -9x + 9$ and $g(f(x)) = -5x^2 - 9x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-9x + 9 = -18$",
                  "reason": "Composition $f(g(x))$: $g(f(x))$ is $g(-18)$ at an $x$ with $f(x) = -18$."
                },
                {
                  "step": "$-9x = -27$",
                  "reason": "Adding the same number: $-9$ is added to both sides."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-9$."
                },
                {
                  "step": "$g(-18) = g(f(3)) = -5(3)^2 - 9(3) - 6$",
                  "reason": "Substituting a value: $x = 3$ goes, in brackets, in the rule for $g(f(x))$."
                },
                {
                  "step": "$g(-18) = -78$",
                  "reason": "The order of operations: powers, then products, then sums."
                }
              ]
            },
            {
              "prompt": "Find $g(-10)$, where $f(x) = -7x - 17$ and $g(f(x)) = 4x^2 - 6x - 5$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find $g(-10)$, where $f(x) = -7x - 17$ and $g(f(x)) = 4x^2 - 6x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7x - 17 = -10$",
                  "reason": "Composition $f(g(x))$: $g(f(x))$ is $g(-10)$ at an $x$ with $f(x) = -10$."
                },
                {
                  "step": "$-7x = 7$",
                  "reason": "Adding the same number: $17$ is added to both sides."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
                },
                {
                  "step": "$g(-10) = g(f(-1)) = 4(-1)^2 - 6(-1) - 5$",
                  "reason": "Substituting a value: $x = -1$ goes, in brackets, in the rule for $g(f(x))$."
                },
                {
                  "step": "$g(-10) = 5$",
                  "reason": "The order of operations: powers, then products, then sums."
                }
              ]
            },
            {
              "prompt": "Find $g(-11)$, where $f(x) = -6x + 1$ and $g(f(x)) = 4x^2 + 8x - 1$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "31",
              "lines": [
                {
                  "step": "Find $g(-11)$, where $f(x) = -6x + 1$ and $g(f(x)) = 4x^2 + 8x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x + 1 = -11$",
                  "reason": "Composition $f(g(x))$: $g(f(x))$ is $g(-11)$ at an $x$ with $f(x) = -11$."
                },
                {
                  "step": "$-6x = -12$",
                  "reason": "Adding the same number: $-1$ is added to both sides."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                },
                {
                  "step": "$g(-11) = g(f(2)) = 4(2)^2 + 8(2) - 1$",
                  "reason": "Substituting a value: $x = 2$ goes, in brackets, in the rule for $g(f(x))$."
                },
                {
                  "step": "$g(-11) = 31$",
                  "reason": "The order of operations: powers, then products, then sums."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $g(x)$, where $f(x) = 5x + 15$ and $g(f(x)) = -100x^2 - 555x - 761$.",
            "lines": [
              {
                "step": "Find $g(x)$, where $f(x) = 5x + 15$ and $g(f(x)) = -100x^2 - 555x - 761$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\dfrac{y - 15}{5}$",
                "reason": "Solving for a letter in terms of the others: with $y = 5x + 15$, adding $-15$ to both sides and dividing by $5$ gives $x$."
              },
              {
                "step": "$g(y) = -100\\left(\\dfrac{y - 15}{5}\\right)^2 - 555\\left(\\dfrac{y - 15}{5}\\right) - 761$",
                "reason": "Substituting a value: at this $x$ the output $f(x)$ is $y$, so $g(y)$ is the rule for $g(f(x))$ with $\\dfrac{y - 15}{5}$ in place of $x$."
              },
              {
                "step": "$g(y) = -4(y - 15)^2 - 111(y - 15) - 761$",
                "reason": "Power of a quotient, then cancelling a common factor: $(5)^2 = 25$ divides $-100$, and $5$ divides $-555$."
              },
              {
                "step": "$g(y) = -4(y^2 - 30y + 225) - 111(y - 15) - 761$",
                "reason": "Square of a binomial: $(y - 15)^2 = y^2 - 30y + 225$."
              },
              {
                "step": "$g(y) = -4y^2 + 120y - 900 - 111y + 1665 - 761$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$g(y) = -4y^2 + 9y + 4$",
                "reason": "Collecting like terms: the terms in $y$ are added, and so are the numbers."
              },
              {
                "step": "$g(x) = -4x^2 + 9x + 4$",
                "reason": "Dummy variable: the letter $y$ only marks the input, so $x$ may take its place."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $g(x)$, where $f(x) = -2x - 13$ and $g(f(x)) = -8x^2 - 106x - 361$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x^2+x-10",
              "lines": [
                {
                  "step": "Find $g(x)$, where $f(x) = -2x - 13$ and $g(f(x)) = -8x^2 - 106x - 361$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -\\dfrac{y + 13}{2}$",
                  "reason": "Solving for a letter in terms of the others: with $y = -2x - 13$, adding $13$ to both sides and dividing by $-2$ gives $x$."
                },
                {
                  "step": "$g(y) = -8\\left(-\\dfrac{y + 13}{2}\\right)^2 - 106\\left(-\\dfrac{y + 13}{2}\\right) - 361$",
                  "reason": "Substituting a value: at this $x$ the output $f(x)$ is $y$, so $g(y)$ is the rule for $g(f(x))$ with $-\\dfrac{y + 13}{2}$ in place of $x$."
                },
                {
                  "step": "$g(y) = -2(y + 13)^2 + 53(y + 13) - 361$",
                  "reason": "Power of a quotient, then cancelling a common factor: $(-2)^2 = 4$ divides $-8$, and $-2$ divides $-106$."
                },
                {
                  "step": "$g(y) = -2(y^2 + 26y + 169) + 53(y + 13) - 361$",
                  "reason": "Square of a binomial: $(y + 13)^2 = y^2 + 26y + 169$."
                },
                {
                  "step": "$g(y) = -2y^2 - 52y - 338 + 53y + 689 - 361$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$g(y) = -2y^2 + y - 10$",
                  "reason": "Collecting like terms: the terms in $y$ are added, and so are the numbers."
                },
                {
                  "step": "$g(x) = -2x^2 + x - 10$",
                  "reason": "Dummy variable: the letter $y$ only marks the input, so $x$ may take its place."
                }
              ]
            },
            {
              "prompt": "Find $g(x)$, where $f(x) = -2x - 12$ and $g(f(x)) = -16x^2 - 188x - 562$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^2-2*x-10",
              "lines": [
                {
                  "step": "Find $g(x)$, where $f(x) = -2x - 12$ and $g(f(x)) = -16x^2 - 188x - 562$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -\\dfrac{y + 12}{2}$",
                  "reason": "Solving for a letter in terms of the others: with $y = -2x - 12$, adding $12$ to both sides and dividing by $-2$ gives $x$."
                },
                {
                  "step": "$g(y) = -16\\left(-\\dfrac{y + 12}{2}\\right)^2 - 188\\left(-\\dfrac{y + 12}{2}\\right) - 562$",
                  "reason": "Substituting a value: at this $x$ the output $f(x)$ is $y$, so $g(y)$ is the rule for $g(f(x))$ with $-\\dfrac{y + 12}{2}$ in place of $x$."
                },
                {
                  "step": "$g(y) = -4(y + 12)^2 + 94(y + 12) - 562$",
                  "reason": "Power of a quotient, then cancelling a common factor: $(-2)^2 = 4$ divides $-16$, and $-2$ divides $-188$."
                },
                {
                  "step": "$g(y) = -4(y^2 + 24y + 144) + 94(y + 12) - 562$",
                  "reason": "Square of a binomial: $(y + 12)^2 = y^2 + 24y + 144$."
                },
                {
                  "step": "$g(y) = -4y^2 - 96y - 576 + 94y + 1128 - 562$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$g(y) = -4y^2 - 2y - 10$",
                  "reason": "Collecting like terms: the terms in $y$ are added, and so are the numbers."
                },
                {
                  "step": "$g(x) = -4x^2 - 2x - 10$",
                  "reason": "Dummy variable: the letter $y$ only marks the input, so $x$ may take its place."
                }
              ]
            },
            {
              "prompt": "Find $g(x)$, where $f(x) = -3x + 15$ and $g(f(x)) = -36x^2 + 378x - 1004$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^2-6*x-14",
              "lines": [
                {
                  "step": "Find $g(x)$, where $f(x) = -3x + 15$ and $g(f(x)) = -36x^2 + 378x - 1004$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -\\dfrac{y - 15}{3}$",
                  "reason": "Solving for a letter in terms of the others: with $y = -3x + 15$, adding $-15$ to both sides and dividing by $-3$ gives $x$."
                },
                {
                  "step": "$g(y) = -36\\left(-\\dfrac{y - 15}{3}\\right)^2 + 378\\left(-\\dfrac{y - 15}{3}\\right) - 1004$",
                  "reason": "Substituting a value: at this $x$ the output $f(x)$ is $y$, so $g(y)$ is the rule for $g(f(x))$ with $-\\dfrac{y - 15}{3}$ in place of $x$."
                },
                {
                  "step": "$g(y) = -4(y - 15)^2 - 126(y - 15) - 1004$",
                  "reason": "Power of a quotient, then cancelling a common factor: $(-3)^2 = 9$ divides $-36$, and $-3$ divides $378$."
                },
                {
                  "step": "$g(y) = -4(y^2 - 30y + 225) - 126(y - 15) - 1004$",
                  "reason": "Square of a binomial: $(y - 15)^2 = y^2 - 30y + 225$."
                },
                {
                  "step": "$g(y) = -4y^2 + 120y - 900 - 126y + 1890 - 1004$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$g(y) = -4y^2 - 6y - 14$",
                  "reason": "Collecting like terms: the terms in $y$ are added, and so are the numbers."
                },
                {
                  "step": "$g(x) = -4x^2 - 6x - 14$",
                  "reason": "Dummy variable: the letter $y$ only marks the input, so $x$ may take its place."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f^2(x)$, where $f(x) = -7x + 36$, and write that line right.",
            "given": [
              "$f^2(x) = f(f(x))$",
              "$f(f(x)) = f(-7x + 36)$",
              "$f(-7x + 36) = (-7x + 36)^2$",
              "$f(-7x + 36) = (-7x + 36)(-7x + 36)$",
              "$f(-7x + 36) = 49x^2 - 504x + 1296$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f^2(x)$, where $f(x) = -7x + 36$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 reads $f^2$ as the square of an output of $f$.",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2$ is $f$ applied twice, so its value is $f$ of an output of $f$, never that output squared."
              },
              {
                "step": "Line 3 written right is $f(-7x + 36) = -7(-7x + 36) + 36$.",
                "reason": "Composition $f(g(x))$: the output of the inner $f$ is the input of the outer $f$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f^2(-4)$, where $f(x) = 10x - 31$, and write that line right.",
              "given": [
                "$f(-4) = 10(-4) - 31 = -71$",
                "$f^2(-4) = (-71)^2$",
                "$f^2(-4) = 5041$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f^2(-4) = 10*(-71)-31",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^2(-4)$, where $f(x) = 10x - 31$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 reads $f^2$ as the square of an output of $f$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2$ is $f$ applied twice, so its value is $f$ of an output of $f$, never that output squared."
                },
                {
                  "step": "Line 2 written right is $f^2(-4) = 10 \\cdot (-71) - 31$.",
                  "reason": "Composition $f(g(x))$: the output of the inner $f$ is the input of the outer $f$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f^2(x)$, where $f(x) = -4x + 29$, and write that line right.",
              "given": [
                "$f^2(x) = f(-4x + 29)$",
                "$f(-4x + 29) = (-4x + 29)^2$",
                "$f(-4x + 29) = (-4x + 29)(-4x + 29)$",
                "$f(-4x + 29) = 16x^2 - 232x + 841$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(-4*x+29) = -4*(-4*x+29)+29",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^2(x)$, where $f(x) = -4x + 29$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 reads $f^2$ as the square of an output of $f$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2$ is $f$ applied twice, so its value is $f$ of an output of $f$, never that output squared."
                },
                {
                  "step": "Line 2 written right is $f(-4x + 29) = -4(-4x + 29) + 29$.",
                  "reason": "Composition $f(g(x))$: the output of the inner $f$ is the input of the outer $f$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f^2(x)$, where $f(x) = 3x + 20$, and write that line right.",
              "given": [
                "$f^2(x) = f(f(x))$",
                "$f(f(x)) = f(3x + 20)$",
                "$f(3x + 20) = (3x + 20)^2$",
                "$f(3x + 20) = (3x + 20)(3x + 20)$",
                "$f(3x + 20) = 9x^2 + 120x + 400$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(3*x+20) = 3*(3*x+20)+20",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^2(x)$, where $f(x) = 3x + 20$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 reads $f^2$ as the square of an output of $f$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2$ is $f$ applied twice, so its value is $f$ of an output of $f$, never that output squared."
                },
                {
                  "step": "Line 3 written right is $f(3x + 20) = 3(3x + 20) + 20$.",
                  "reason": "Composition $f(g(x))$: the output of the inner $f$ is the input of the outer $f$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(g(-5))$, where $f(x) = -5x - 20$ and $g(x) = -9x - 12$, and write that line right.",
            "given": [
              "$g(-5) = -9(-5) - 12$",
              "$g(-5) = 33$",
              "$f(g(-5)) = 33 \\cdot (-5(-5) - 20)$",
              "$f(g(-5)) = 165$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(g(-5))$, where $f(x) = -5x - 20$ and $g(x) = -9x - 12$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 multiplies an output of $f$ by an output of $g$.",
                "reason": "Composition $f(g(x))$: $f(g(x))$ puts the output of $g$ into $f$; it is never the product $f(x) \\cdot g(x)$."
              },
              {
                "step": "Line 3 written right is $f(g(-5)) = -5 \\cdot 33 - 20$.",
                "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(g(x))$, where $f(x) = 8x - 18$ and $g(x) = 5x + 23$, and write that line right.",
              "given": [
                "$f(g(x)) = f(5x + 23)$",
                "$f(5x + 23) = (8x - 18)(5x + 23)$",
                "$f(5x + 23) = 40x^2 + 184x - 90x - 414$",
                "$f(5x + 23) = 40x^2 + 94x - 414$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(5*x+23) = 8*(5*x+23)-18",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(g(x))$, where $f(x) = 8x - 18$ and $g(x) = 5x + 23$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies an output of $f$ by an output of $g$.",
                  "reason": "Composition $f(g(x))$: $f(g(x))$ puts the output of $g$ into $f$; it is never the product $f(x) \\cdot g(x)$."
                },
                {
                  "step": "Line 2 written right is $f(5x + 23) = 8(5x + 23) - 18$.",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(g(-3))$, where $f(x) = 10x + 11$ and $g(x) = -4x + 20$, and write that line right.",
              "given": [
                "$g(-3) = -4(-3) + 20 = 32$",
                "$f(g(-3)) = 32 \\cdot (10(-3) + 11)$",
                "$f(g(-3)) = -608$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(g(-3)) = 10*32+11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(g(-3))$, where $f(x) = 10x + 11$ and $g(x) = -4x + 20$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies an output of $f$ by an output of $g$.",
                  "reason": "Composition $f(g(x))$: $f(g(x))$ puts the output of $g$ into $f$; it is never the product $f(x) \\cdot g(x)$."
                },
                {
                  "step": "Line 2 written right is $f(g(-3)) = 10 \\cdot 32 + 11$.",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(g(x))$, where $f(x) = -6x + 23$ and $g(x) = -10x - 5$, and write that line right.",
              "given": [
                "$g(x) = -10x - 5$",
                "$f(g(x)) = f(-10x - 5)$",
                "$f(-10x - 5) = (-6x + 23)(-10x - 5)$",
                "$f(-10x - 5) = 60x^2 + 30x - 230x - 115$",
                "$f(-10x - 5) = 60x^2 - 200x - 115$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(-10*x-5) = -6*(-10*x-5)+23",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(g(x))$, where $f(x) = -6x + 23$ and $g(x) = -10x - 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies an output of $f$ by an output of $g$.",
                  "reason": "Composition $f(g(x))$: $f(g(x))$ puts the output of $g$ into $f$; it is never the product $f(x) \\cdot g(x)$."
                },
                {
                  "step": "Line 3 written right is $f(-10x - 5) = -6(-10x - 5) + 23$.",
                  "reason": "Composition $f(g(x))$: the output of $g$ is the input of $f$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for the output $y$, with $y$ alone on the left, of a machine that first multiplies its input $x$ by 11 and then divides 14 by the result, where $g$ is the first step and $f$ the second.",
            "lines": [
              {
                "step": "Write an equation for the output $y$, with $y$ alone on the left, of a machine that first multiplies its input $x$ by 11 and then divides 14 by the result, where $g$ is the first step and $f$ the second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$g(x) = 11x$",
                "reason": "Writing a sentence as an equation: the first operation acts on the input $x$."
              },
              {
                "step": "$f(x) = \\dfrac{14}{x}$",
                "reason": "Writing a sentence as an equation: the second operation acts on its own input."
              },
              {
                "step": "$y = \\dfrac{14}{11x}$",
                "reason": "Composition $f(g(x))$: the rule for $g(x)$ goes, in brackets, where $x$ stands in the rule for $f$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $y = f(g(x))$ as an equation in $x$, with $y$ alone on the left, where the function $g$ squares its input and the function $f$ multiplies its input by 12.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 12*x^2",
              "lines": [
                {
                  "step": "Write $y = f(g(x))$ as an equation in $x$, with $y$ alone on the left, where the function $g$ squares its input and the function $f$ multiplies its input by 12.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(x) = x^2$",
                  "reason": "Writing a sentence as an equation: the first operation acts on the input $x$."
                },
                {
                  "step": "$f(x) = 12x$",
                  "reason": "Writing a sentence as an equation: the second operation acts on its own input."
                },
                {
                  "step": "$y = 12x^2$",
                  "reason": "Composition $f(g(x))$: the rule for $g(x)$ goes, in brackets, where $x$ stands in the rule for $f$."
                }
              ]
            },
            {
              "prompt": "Write $y = g(f(x))$ as an equation in $x$, with $y$ alone on the left, where the function $f$ divides 13 by its input and the function $g$ squares its input.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (13/x)^2",
              "lines": [
                {
                  "step": "Write $y = g(f(x))$ as an equation in $x$, with $y$ alone on the left, where the function $f$ divides 13 by its input and the function $g$ squares its input.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = \\dfrac{13}{x}$",
                  "reason": "Writing a sentence as an equation: the first operation acts on the input $x$."
                },
                {
                  "step": "$g(x) = x^2$",
                  "reason": "Writing a sentence as an equation: the second operation acts on its own input."
                },
                {
                  "step": "$y = \\left(\\dfrac{13}{x}\\right)^2$",
                  "reason": "Composition $f(g(x))$: the rule for $f(x)$ goes, in brackets, where $x$ stands in the rule for $g$."
                }
              ]
            },
            {
              "prompt": "Write an equation for the output $y$, with $y$ alone on the left, of a machine that first multiplies its input $x$ by 7 and then adds 4 to the result, where $g$ is the first step and $f$ the second.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 7*x+4",
              "lines": [
                {
                  "step": "Write an equation for the output $y$, with $y$ alone on the left, of a machine that first multiplies its input $x$ by 7 and then adds 4 to the result, where $g$ is the first step and $f$ the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(x) = 7x$",
                  "reason": "Writing a sentence as an equation: the first operation acts on the input $x$."
                },
                {
                  "step": "$f(x) = x + 4$",
                  "reason": "Writing a sentence as an equation: the second operation acts on its own input."
                },
                {
                  "step": "$y = 7x + 4$",
                  "reason": "Composition $f(g(x))$: the rule for $g(x)$ goes, in brackets, where $x$ stands in the rule for $f$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k7",
      "forms": [
        {
          "example": {
            "problem": "Find the domain of $g(f(x))$, where $f(x) = 10x - 37$ and $g(x) = -2\\sqrt{x - 7}$.",
            "lines": [
              {
                "step": "Find the domain of $g(f(x))$, where $f(x) = 10x - 37$ and $g(x) = -2\\sqrt{x - 7}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The domain of $g$ is $x \\ge 7$.",
                "reason": "Even root of a negative number is not real: $x - 7$ must be at least $0$."
              },
              {
                "step": "$10x - 37 \\ge 7$",
                "reason": "Composition $f(g(x))$: $g(f(x))$ has an output exactly when $f(x)$ is in the domain of $g$, and $f$ gives an output for every $x$."
              },
              {
                "step": "$10x \\ge 44$",
                "reason": "Adding the same number: $37$ is added to both sides."
              },
              {
                "step": "$x \\ge \\dfrac{22}{5}$",
                "reason": "Multiplying by a positive number: both sides are divided by $10$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of $g(f(x))$, where $f(x) = 6x + 39$ and $g(x) = 2\\sqrt{x - 13}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= -13/3",
              "lines": [
                {
                  "step": "Find the domain of $g(f(x))$, where $f(x) = 6x + 39$ and $g(x) = 2\\sqrt{x - 13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The domain of $g$ is $x \\ge 13$.",
                  "reason": "Even root of a negative number is not real: $x - 13$ must be at least $0$."
                },
                {
                  "step": "$6x + 39 \\ge 13$",
                  "reason": "Composition $f(g(x))$: $g(f(x))$ has an output exactly when $f(x)$ is in the domain of $g$, and $f$ gives an output for every $x$."
                },
                {
                  "step": "$6x \\ge -26$",
                  "reason": "Adding the same number: $-39$ is added to both sides."
                },
                {
                  "step": "$x \\ge -\\dfrac{13}{3}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Find the domain of $g(f(x))$, where $f(x) = 5x - 35$ and $g(x) = -8\\sqrt{x + 20}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= 3",
              "lines": [
                {
                  "step": "Find the domain of $g(f(x))$, where $f(x) = 5x - 35$ and $g(x) = -8\\sqrt{x + 20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The domain of $g$ is $x \\ge -20$.",
                  "reason": "Even root of a negative number is not real: $x + 20$ must be at least $0$."
                },
                {
                  "step": "$5x - 35 \\ge -20$",
                  "reason": "Composition $f(g(x))$: $g(f(x))$ has an output exactly when $f(x)$ is in the domain of $g$, and $f$ gives an output for every $x$."
                },
                {
                  "step": "$5x \\ge 15$",
                  "reason": "Adding the same number: $35$ is added to both sides."
                },
                {
                  "step": "$x \\ge 3$",
                  "reason": "Multiplying by a positive number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find the domain of $g(f(x))$, where $f(x) = 9x - 25$ and $g(x) = -3\\sqrt{x - 28}$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= 53/9",
              "lines": [
                {
                  "step": "Find the domain of $g(f(x))$, where $f(x) = 9x - 25$ and $g(x) = -3\\sqrt{x - 28}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The domain of $g$ is $x \\ge 28$.",
                  "reason": "Even root of a negative number is not real: $x - 28$ must be at least $0$."
                },
                {
                  "step": "$9x - 25 \\ge 28$",
                  "reason": "Composition $f(g(x))$: $g(f(x))$ has an output exactly when $f(x)$ is in the domain of $g$, and $f$ gives an output for every $x$."
                },
                {
                  "step": "$9x \\ge 53$",
                  "reason": "Adding the same number: $25$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{53}{9}$",
                  "reason": "Multiplying by a positive number: both sides are divided by $9$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t159-k8",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $g(f(7))$ is defined, where $f(x) = 5x + 18$ and $g(x) = \\sqrt{-8x + 20}$.",
            "lines": [
              {
                "step": "Decide whether $g(f(7))$ is defined, where $f(x) = 5x + 18$ and $g(x) = \\sqrt{-8x + 20}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(7) = 5(7) + 18 = 53$",
                "reason": "Function notation: $7$ goes, in brackets, where $x$ stands."
              },
              {
                "step": "$-8(53) + 20 = -404$",
                "reason": "Composition $f(g(x))$: the output $53$ of $f$ is the input of $g$, so it goes where $x$ stands under the root."
              },
              {
                "step": "No: the number under the root is $-404$, below $0$, so $53$ is not in the domain of $g$.",
                "reason": "Even root of a negative number is not real."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $g(f(4))$ is defined, where $f(x) = -7x - 8$ and $g(x) = \\sqrt{-3x - 22}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $g(f(4))$ is defined, where $f(x) = -7x - 8$ and $g(x) = \\sqrt{-3x - 22}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4) = -7(4) - 8 = -36$",
                  "reason": "Function notation: $4$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$-3(-36) - 22 = 86$",
                  "reason": "Composition $f(g(x))$: the output $-36$ of $f$ is the input of $g$, so it goes where $x$ stands under the root."
                },
                {
                  "step": "Yes: the number under the root is $86$, at least $0$, so $g(-36)$ is a real number.",
                  "reason": "Positive square root: a number at least $0$ has a square root, so the input is in the domain of $g$."
                }
              ]
            },
            {
              "prompt": "Decide whether $g(f(-2))$ is defined, where $f(x) = 8x - 28$ and $g(x) = \\sqrt{2x + 37}$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $g(f(-2))$ is defined, where $f(x) = 8x - 28$ and $g(x) = \\sqrt{2x + 37}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-2) = 8(-2) - 28 = -44$",
                  "reason": "Function notation: $-2$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$2(-44) + 37 = -51$",
                  "reason": "Composition $f(g(x))$: the output $-44$ of $f$ is the input of $g$, so it goes where $x$ stands under the root."
                },
                {
                  "step": "No: the number under the root is $-51$, below $0$, so $-44$ is not in the domain of $g$.",
                  "reason": "Even root of a negative number is not real."
                }
              ]
            },
            {
              "prompt": "Decide whether $g(f(-9))$ is defined, where $f(x) = 6x - 7$ and $g(x) = \\sqrt{-9x - 36}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $g(f(-9))$ is defined, where $f(x) = 6x - 7$ and $g(x) = \\sqrt{-9x - 36}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-9) = 6(-9) - 7 = -61$",
                  "reason": "Function notation: $-9$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$-9(-61) - 36 = 513$",
                  "reason": "Composition $f(g(x))$: the output $-61$ of $f$ is the input of $g$, so it goes where $x$ stands under the root."
                },
                {
                  "step": "Yes: the number under the root is $513$, at least $0$, so $g(-61)$ is a real number.",
                  "reason": "Positive square root: a number at least $0$ has a square root, so the input is in the domain of $g$."
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
      "id": "t159-p1",
      "method": "direct proof",
      "statement": "For functions $f$ and $g$ such that every output of $g$ is in the domain of $f$, the composition $h$ with $h(x) = f(g(x))$ is a function on the domain of $g$.",
      "idea": "An input goes into $g$ and gives one output, and $f$ turns that one number into one output of its own. Two steps that each give exactly one output give exactly one output in all.",
      "lines": [
        {
          "line": "Let $a$ be a number in the domain of $g$.",
          "reason": "Domain: the inputs of $h$ to be checked are the numbers in the domain of $g$."
        },
        {
          "line": "The function $g$ gives exactly one output for the input $a$; call it $b$, so $g(a) = b$.",
          "reason": "Function: a function gives exactly one output for each input it accepts."
        },
        {
          "line": "The number $b$ is in the domain of $f$.",
          "reason": "Range: $b$ is an output of $g$, and every output of $g$ is in the domain of $f$ by the hypothesis."
        },
        {
          "line": "The function $f$ gives exactly one output $f(b)$ for the input $b$.",
          "reason": "Function: a function gives exactly one output for each input it accepts."
        },
        {
          "line": "So $h(a) = f(g(a)) = f(b)$.",
          "reason": "Substituting a value: $g(a)$ is replaced by $b$, which equals it by line 2."
        },
        {
          "line": "So $h$ gives exactly one output for the input $a$.",
          "reason": "Transitive property: by lines 4 and 5, $h(a)$ is the one number $f(b)$."
        },
        {
          "line": "Therefore $h$ is a function on the domain of $g$.",
          "reason": "Function: by line 6 each input in the domain of $g$, taken as $a$ in line 1, has exactly one output."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t159-s1",
      "method": "direct proof",
      "statement": "Prove that for functions $f$, $g$ and $h$, with every output of $h$ in the domain of $g$ and every output of $g$ in the domain of $f$, the functions $p(x) = f(g(x))$ and $q(x) = g(h(x))$ give $p(h(x)) = f(q(x))$ for each $x$ in the domain of $h$. Facts it may use: composition, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain of $h$.",
            "reason": "Domain: the claim is about each input of $h$."
          },
          {
            "line": "So $p(h(x)) = f(g(h(x)))$.",
            "reason": "Composition $f(g(x))$: $p$ puts its input into $g$ and then into $f$, and here its input is $h(x)$."
          },
          {
            "line": "Also $q(x) = g(h(x))$.",
            "reason": "Composition $f(g(x))$: this is the rule for $q$ at the input $x$."
          },
          {
            "line": "So $f(q(x)) = f(g(h(x)))$.",
            "reason": "Substituting a value: $q(x)$ is replaced by $g(h(x))$, which equals it by line 3."
          },
          {
            "line": "Therefore $p(h(x)) = f(q(x))$.",
            "reason": "Transitive property: by lines 2 and 4, both equal $f(g(h(x)))$."
          }
        ]
      }
    },
    {
      "id": "t159-s2",
      "method": "direct proof",
      "statement": "Prove that if $f(x) = ax + b$ and $g(x) = cx + d$ for numbers $a$, $b$, $c$ and $d$, then $f(g(x)) = g(f(x))$ for every $x$ exactly when $ad + b = cb + d$. Facts it may use: composition, multiplying out, collecting like terms, equal for all $x$ means equal coefficients.",
      "check": {
        "proof": [
          {
            "line": "For every $x$, $f(g(x)) = a(cx + d) + b$.",
            "reason": "Composition $f(g(x))$: the rule $cx + d$ goes, in brackets, where $x$ stands in the rule for $f$."
          },
          {
            "line": "So $f(g(x)) = acx + ad + b$.",
            "reason": "Multiplying out: $a$ multiplies each term inside the bracket."
          },
          {
            "line": "For every $x$, $g(f(x)) = c(ax + b) + d$.",
            "reason": "Composition $f(g(x))$: the rule $ax + b$ goes, in brackets, where $x$ stands in the rule for $g$."
          },
          {
            "line": "So $g(f(x)) = acx + cb + d$.",
            "reason": "Multiplying out, with $ca = ac$ by the commutative law (arithmetic's)."
          },
          {
            "line": "If $ad + b = cb + d$, the expressions of lines 2 and 4 are the same, so $f(g(x)) = g(f(x))$ for every $x$.",
            "reason": "Substituting a value: $ad + b$ is replaced by $cb + d$ in line 2, which gives line 4."
          },
          {
            "line": "If $f(g(x)) = g(f(x))$ for every $x$, then $acx + ad + b = acx + cb + d$ for every $x$.",
            "reason": "Transitive property: lines 2 and 4 give the two sides."
          },
          {
            "line": "Then $ad + b = cb + d$.",
            "reason": "Equal for all $x$ means equal coefficients: the constant terms of line 6 are equal."
          },
          {
            "line": "Therefore $f(g(x)) = g(f(x))$ for every $x$ exactly when $ad + b = cb + d$.",
            "reason": "Exactly when: line 5 proves the claim one way round and line 7 the other."
          }
        ]
      }
    },
    {
      "id": "t159-s3",
      "method": "direct proof",
      "statement": "Prove that for functions $f$, $g$ and $h$, with every output of $h$ in the domain of $f$ and of $g$, $(f + g)(h(x)) = f(h(x)) + g(h(x))$ for each $x$ in the domain of $h$. Facts it may use: sum of functions, composition, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain of $h$, and let $c = h(x)$.",
            "reason": "Domain: the claim is about each input of $h$."
          },
          {
            "line": "So $(f + g)(h(x)) = (f + g)(c)$.",
            "reason": "Substituting a value: $h(x)$ is replaced by $c$, which equals it by line 1."
          },
          {
            "line": "Then $(f + g)(c) = f(c) + g(c)$.",
            "reason": "Sum, difference, product and quotient of functions: the sum at $c$ is $f(c) + g(c)$, and $c$, an output of $h$, is in the domain of $f$ and of $g$."
          },
          {
            "line": "Also $f(c) + g(c) = f(h(x)) + g(h(x))$.",
            "reason": "Substituting a value: $c$ is replaced by $h(x)$, which equals it by line 1."
          },
          {
            "line": "Therefore $(f + g)(h(x)) = f(h(x)) + g(h(x))$.",
            "reason": "Transitive property: by lines 2, 3 and 4."
          }
        ]
      }
    },
    {
      "id": "t159-s4",
      "method": "direct proof",
      "statement": "Prove that if $f$ is a function with $f^2(x) = x$ for every $x$ in its domain, and every output of $f$ is in its domain, then $f^5(x) = f(x)$ for every $x$ in its domain. Facts it may use: the notation $f^n$ for $f$ applied $n$ times, composition, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain of $f$.",
            "reason": "Domain: the claim is about each input of $f$."
          },
          {
            "line": "So $f^5(x) = f^2(f^2(f(x)))$.",
            "reason": "The notation $f^n$ for $f$ applied $n$ times: five applications of $f$ are one application, then two, then two more."
          },
          {
            "line": "Also $f^2(f(x)) = f(x)$.",
            "reason": "Substituting a value: the hypothesis $f^2(x) = x$ holds with the input $f(x)$, which is in the domain of $f$."
          },
          {
            "line": "So $f^5(x) = f^2(f(x))$.",
            "reason": "Substituting a value: $f^2(f(x))$ is replaced by $f(x)$ inside line 2, by line 3."
          },
          {
            "line": "Therefore $f^5(x) = f(x)$.",
            "reason": "Transitive property: by lines 4 and 3."
          }
        ]
      }
    }
  ]
}
