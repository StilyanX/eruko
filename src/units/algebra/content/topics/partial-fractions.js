export default {
  "number": 175,
  "title": "Partial fractions",
  "section": 15,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "576-578, 619-620"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $b$ if $\\dfrac{5x - 20}{x^2 + x - 156} = \\dfrac{a}{x + 13} + \\dfrac{b}{x - 12}$ for every $x$ other than $-13$ and $12$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "8/5",
    "solution": [
      "Find $b$ if $\\dfrac{5x - 20}{x^2 + x - 156} = \\dfrac{a}{x + 13} + \\dfrac{b}{x - 12}$ for every $x$ other than $-13$ and $12$.",
      "$x^2 + x - 156 = (x + 13)(x - 12)$",
      "$\\dfrac{5x - 20}{(x + 13)(x - 12)} = \\dfrac{a}{x + 13} + \\dfrac{b}{x - 12}$",
      "$5x - 20 = a(x - 12) + b(x + 13)$",
      "$b = \\dfrac{8}{5}$"
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t175-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $a$ if $\\dfrac{-8x - 22}{x^2 + 16x + 48} = \\dfrac{a}{x + 12} + \\dfrac{b}{x + 4}$ for every $x$ other than $-12$ and $-4$.",
            "lines": [
              {
                "step": "Find $a$ if $\\dfrac{-8x - 22}{x^2 + 16x + 48} = \\dfrac{a}{x + 12} + \\dfrac{b}{x + 4}$ for every $x$ other than $-12$ and $-4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 16x + 48 = (x + 12)(x + 4)$",
                "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 + 16x + 48$, the numbers $12$ and $4$ have sum $16$ and product $48$."
              },
              {
                "step": "$\\dfrac{-8x - 22}{(x + 12)(x + 4)} = \\dfrac{a}{x + 12} + \\dfrac{b}{x + 4}$",
                "reason": "Partial fractions: the bottom is the product of the two linear factors $x + 12$ and $x + 4$."
              },
              {
                "step": "$-8x - 22 = a(x + 4) + b(x + 12)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 12)(x + 4)$."
              },
              {
                "step": "$a = -\\dfrac{37}{4}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -12$ gives $74 = -8a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$ if $\\dfrac{-8x - 15}{x^2 - 5x - 6} = \\dfrac{a}{x + 1} + \\dfrac{b}{x - 6}$ for every $x$ other than $-1$ and $6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-9",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-8x - 15}{x^2 - 5x - 6} = \\dfrac{a}{x + 1} + \\dfrac{b}{x - 6}$ for every $x$ other than $-1$ and $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 5x - 6 = (x + 1)(x - 6)$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 - 5x - 6$, the numbers $1$ and $-6$ have sum $-5$ and product $-6$."
                },
                {
                  "step": "$\\dfrac{-8x - 15}{(x + 1)(x - 6)} = \\dfrac{a}{x + 1} + \\dfrac{b}{x - 6}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $x + 1$ and $x - 6$."
                },
                {
                  "step": "$-8x - 15 = a(x - 6) + b(x + 1)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 1)(x - 6)$."
                },
                {
                  "step": "$b = -9$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = 6$ gives $-63 = 7b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{4x - 12}{x^2 - 21x + 108} = \\dfrac{a}{x - 12} + \\dfrac{b}{x - 9}$ for every $x$ other than $12$ and $9$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{4x - 12}{x^2 - 21x + 108} = \\dfrac{a}{x - 12} + \\dfrac{b}{x - 9}$ for every $x$ other than $12$ and $9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 21x + 108 = (x - 12)(x - 9)$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 - 21x + 108$, the numbers $-12$ and $-9$ have sum $-21$ and product $108$."
                },
                {
                  "step": "$\\dfrac{4x - 12}{(x - 12)(x - 9)} = \\dfrac{a}{x - 12} + \\dfrac{b}{x - 9}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $x - 12$ and $x - 9$."
                },
                {
                  "step": "$4x - 12 = a(x - 9) + b(x - 12)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 12)(x - 9)$."
                },
                {
                  "step": "$b = -8$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = 9$ gives $24 = -3b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{-9x + 12}{x^2 + 17x + 70} = \\dfrac{a}{x + 10} + \\dfrac{b}{x + 7}$ for every $x$ other than $-10$ and $-7$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-9x + 12}{x^2 + 17x + 70} = \\dfrac{a}{x + 10} + \\dfrac{b}{x + 7}$ for every $x$ other than $-10$ and $-7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 17x + 70 = (x + 10)(x + 7)$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 + 17x + 70$, the numbers $10$ and $7$ have sum $17$ and product $70$."
                },
                {
                  "step": "$\\dfrac{-9x + 12}{(x + 10)(x + 7)} = \\dfrac{a}{x + 10} + \\dfrac{b}{x + 7}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $x + 10$ and $x + 7$."
                },
                {
                  "step": "$-9x + 12 = a(x + 7) + b(x + 10)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 10)(x + 7)$."
                },
                {
                  "step": "$b = 25$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -7$ gives $75 = 3b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$ if $\\dfrac{-2x^2 - 18}{(x - 6)(x^2 + 21x + 108)} = \\dfrac{a}{x - 6} + \\dfrac{b}{x + 9} + \\dfrac{c}{x + 12}$ for every $x$ other than $6$, $-9$ and $-12$.",
            "lines": [
              {
                "step": "Find $b$ if $\\dfrac{-2x^2 - 18}{(x - 6)(x^2 + 21x + 108)} = \\dfrac{a}{x - 6} + \\dfrac{b}{x + 9} + \\dfrac{c}{x + 12}$ for every $x$ other than $6$, $-9$ and $-12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 6)(x^2 + 21x + 108) = (x - 6)(x + 9)(x + 12)$",
                "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 + 21x + 108$, the numbers $9$ and $12$ have sum $21$ and product $108$."
              },
              {
                "step": "$\\dfrac{-2x^2 - 18}{(x - 6)(x + 9)(x + 12)} = \\dfrac{a}{x - 6} + \\dfrac{b}{x + 9} + \\dfrac{c}{x + 12}$",
                "reason": "Partial fractions: the bottom is the product of the three linear factors $x - 6$, $x + 9$ and $x + 12$."
              },
              {
                "step": "$-2x^2 - 18 = a(x + 9)(x + 12) + b(x - 6)(x + 12) + c(x - 6)(x + 9)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 6)(x + 9)(x + 12)$."
              },
              {
                "step": "$b = 4$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -9$ gives $-180 = -45b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$ if $\\dfrac{-9x - 15}{(x - 7)(x^2 + 9x - 52)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x - 4} + \\dfrac{c}{x + 13}$ for every $x$ other than $7$, $4$ and $-13$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-13/10",
              "lines": [
                {
                  "step": "Find $a$ if $\\dfrac{-9x - 15}{(x - 7)(x^2 + 9x - 52)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x - 4} + \\dfrac{c}{x + 13}$ for every $x$ other than $7$, $4$ and $-13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 7)(x^2 + 9x - 52) = (x - 7)(x - 4)(x + 13)$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 + 9x - 52$, the numbers $-4$ and $13$ have sum $9$ and product $-52$."
                },
                {
                  "step": "$\\dfrac{-9x - 15}{(x - 7)(x - 4)(x + 13)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x - 4} + \\dfrac{c}{x + 13}$",
                  "reason": "Partial fractions: the bottom is the product of the three linear factors $x - 7$, $x - 4$ and $x + 13$."
                },
                {
                  "step": "$-9x - 15 = a(x - 4)(x + 13) + b(x - 7)(x + 13) + c(x - 7)(x - 4)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 7)(x - 4)(x + 13)$."
                },
                {
                  "step": "$a = -\\dfrac{13}{10}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = 7$ gives $-78 = 60a$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{-5x + 12}{(x - 8)(x^2 + 3x - 40)} = \\dfrac{a}{x - 8} + \\dfrac{b}{x + 8} + \\dfrac{c}{x - 5}$ for every $x$ other than $8$, $-8$ and $5$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/4",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-5x + 12}{(x - 8)(x^2 + 3x - 40)} = \\dfrac{a}{x - 8} + \\dfrac{b}{x + 8} + \\dfrac{c}{x - 5}$ for every $x$ other than $8$, $-8$ and $5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 8)(x^2 + 3x - 40) = (x - 8)(x + 8)(x - 5)$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 + 3x - 40$, the numbers $8$ and $-5$ have sum $3$ and product $-40$."
                },
                {
                  "step": "$\\dfrac{-5x + 12}{(x - 8)(x + 8)(x - 5)} = \\dfrac{a}{x - 8} + \\dfrac{b}{x + 8} + \\dfrac{c}{x - 5}$",
                  "reason": "Partial fractions: the bottom is the product of the three linear factors $x - 8$, $x + 8$ and $x - 5$."
                },
                {
                  "step": "$-5x + 12 = a(x + 8)(x - 5) + b(x - 8)(x - 5) + c(x - 8)(x + 8)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 8)(x + 8)(x - 5)$."
                },
                {
                  "step": "$b = \\dfrac{1}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -8$ gives $52 = 208b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{-3x^2 + 5x + 2}{(x - 7)(x^2 - 8x - 48)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x - 12} + \\dfrac{c}{x + 4}$ for every $x$ other than $7$, $12$ and $-4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-37/8",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-3x^2 + 5x + 2}{(x - 7)(x^2 - 8x - 48)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x - 12} + \\dfrac{c}{x + 4}$ for every $x$ other than $7$, $12$ and $-4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 7)(x^2 - 8x - 48) = (x - 7)(x - 12)(x + 4)$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 - 8x - 48$, the numbers $-12$ and $4$ have sum $-8$ and product $-48$."
                },
                {
                  "step": "$\\dfrac{-3x^2 + 5x + 2}{(x - 7)(x - 12)(x + 4)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x - 12} + \\dfrac{c}{x + 4}$",
                  "reason": "Partial fractions: the bottom is the product of the three linear factors $x - 7$, $x - 12$ and $x + 4$."
                },
                {
                  "step": "$-3x^2 + 5x + 2 = a(x - 12)(x + 4) + b(x - 7)(x + 4) + c(x - 7)(x - 12)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 7)(x - 12)(x + 4)$."
                },
                {
                  "step": "$b = -\\dfrac{37}{8}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = 12$ gives $-370 = 80b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$ if $\\dfrac{7x - 9}{(x - 3)^2(x + 1)} = \\dfrac{a}{x + 1} + \\dfrac{b}{x - 3} + \\dfrac{c}{(x - 3)^2}$ for every $x$ other than $3$ and $-1$.",
            "lines": [
              {
                "step": "Find $b$ if $\\dfrac{7x - 9}{(x - 3)^2(x + 1)} = \\dfrac{a}{x + 1} + \\dfrac{b}{x - 3} + \\dfrac{c}{(x - 3)^2}$ for every $x$ other than $3$ and $-1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7x - 9 = a(x - 3)^2 + b(x - 3)(x + 1) + c(x + 1)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 3)^2(x + 1)$."
              },
              {
                "step": "$a = -1$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -1$ gives $-16 = 16a$."
              },
              {
                "step": "$b = 1$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: the $x^2$ terms give $0 = a + b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$ if $\\dfrac{-4x + 13}{(x + 6)^2(x + 4)} = \\dfrac{a}{x + 4} + \\dfrac{b}{x + 6} + \\dfrac{c}{(x + 6)^2}$ for every $x$ other than $-6$ and $-4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-29/4",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-4x + 13}{(x + 6)^2(x + 4)} = \\dfrac{a}{x + 4} + \\dfrac{b}{x + 6} + \\dfrac{c}{(x + 6)^2}$ for every $x$ other than $-6$ and $-4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4x + 13 = a(x + 6)^2 + b(x + 6)(x + 4) + c(x + 4)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 6)^2(x + 4)$."
                },
                {
                  "step": "$a = \\dfrac{29}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -4$ gives $29 = 4a$."
                },
                {
                  "step": "$b = -\\dfrac{29}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: the $x^2$ terms give $0 = a + b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{4x^2 - 8x - 20}{(x - 3)^2(x - 2)} = \\dfrac{a}{x - 2} + \\dfrac{b}{x - 3} + \\dfrac{c}{(x - 3)^2}$ for every $x$ other than $3$ and $2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{4x^2 - 8x - 20}{(x - 3)^2(x - 2)} = \\dfrac{a}{x - 2} + \\dfrac{b}{x - 3} + \\dfrac{c}{(x - 3)^2}$ for every $x$ other than $3$ and $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 - 8x - 20 = a(x - 3)^2 + b(x - 3)(x - 2) + c(x - 2)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 3)^2(x - 2)$."
                },
                {
                  "step": "$a = -20$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = 2$ gives $-20 = a$."
                },
                {
                  "step": "$b = 24$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: the $x^2$ terms give $4 = a + b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{2x^2 + 2x - 10}{(x - 2)^2(x + 2)} = \\dfrac{a}{x + 2} + \\dfrac{b}{x - 2} + \\dfrac{c}{(x - 2)^2}$ for every $x$ other than $2$ and $-2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "19/8",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{2x^2 + 2x - 10}{(x - 2)^2(x + 2)} = \\dfrac{a}{x + 2} + \\dfrac{b}{x - 2} + \\dfrac{c}{(x - 2)^2}$ for every $x$ other than $2$ and $-2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 + 2x - 10 = a(x - 2)^2 + b(x - 2)(x + 2) + c(x + 2)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 2)^2(x + 2)$."
                },
                {
                  "step": "$a = -\\dfrac{3}{8}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -2$ gives $-6 = 16a$."
                },
                {
                  "step": "$b = \\dfrac{19}{8}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: the $x^2$ terms give $2 = a + b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$ if $\\dfrac{-4x - 14}{(x + 5)(2x - 1)} = \\dfrac{a}{x + 5} + \\dfrac{b}{2x - 1}$ for every $x$ other than $-5$ and $\\dfrac{1}{2}$.",
            "lines": [
              {
                "step": "Find $b$ if $\\dfrac{-4x - 14}{(x + 5)(2x - 1)} = \\dfrac{a}{x + 5} + \\dfrac{b}{2x - 1}$ for every $x$ other than $-5$ and $\\dfrac{1}{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4x - 14 = a(2x - 1) + b(x + 5)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 5)(2x - 1)$."
              },
              {
                "step": "$b = -\\dfrac{32}{11}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = \\dfrac{1}{2}$, where $2x - 1$ is $0$, gives $-16 = \\dfrac{11}{2}b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$ if $\\dfrac{-6x + 6}{(x + 1)(2x + 3)} = \\dfrac{a}{x + 1} + \\dfrac{b}{2x + 3}$ for every $x$ other than $-1$ and $-\\dfrac{3}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-30",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-6x + 6}{(x + 1)(2x + 3)} = \\dfrac{a}{x + 1} + \\dfrac{b}{2x + 3}$ for every $x$ other than $-1$ and $-\\dfrac{3}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x + 6 = a(2x + 3) + b(x + 1)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 1)(2x + 3)$."
                },
                {
                  "step": "$b = -30$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -\\dfrac{3}{2}$, where $2x + 3$ is $0$, gives $15 = -\\dfrac{1}{2}b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{12x + 4}{(x - 1)(3x + 7)} = \\dfrac{a}{x - 1} + \\dfrac{b}{3x + 7}$ for every $x$ other than $1$ and $-\\dfrac{7}{3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "36/5",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{12x + 4}{(x - 1)(3x + 7)} = \\dfrac{a}{x - 1} + \\dfrac{b}{3x + 7}$ for every $x$ other than $1$ and $-\\dfrac{7}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12x + 4 = a(3x + 7) + b(x - 1)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x - 1)(3x + 7)$."
                },
                {
                  "step": "$b = \\dfrac{36}{5}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -\\dfrac{7}{3}$, where $3x + 7$ is $0$, gives $-24 = -\\dfrac{10}{3}b$."
                }
              ]
            },
            {
              "prompt": "Find $b$ if $\\dfrac{-3x + 9}{(x + 6)(2x + 3)} = \\dfrac{a}{x + 6} + \\dfrac{b}{2x + 3}$ for every $x$ other than $-6$ and $-\\dfrac{3}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find $b$ if $\\dfrac{-3x + 9}{(x + 6)(2x + 3)} = \\dfrac{a}{x + 6} + \\dfrac{b}{2x + 3}$ for every $x$ other than $-6$ and $-\\dfrac{3}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x + 9 = a(2x + 3) + b(x + 6)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $(x + 6)(2x + 3)$."
                },
                {
                  "step": "$b = 3$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $x = -\\dfrac{3}{2}$, where $2x + 3$ is $0$, gives $\\dfrac{27}{2} = \\dfrac{9}{2}b$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t175-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{9x - 6}{(x - 4)(x - 7)} = \\dfrac{a}{x - 4} + \\dfrac{b}{x - 7}$ for every $x$ other than $4$ and $7$, and write that line right.",
            "given": [
              "$9x - 6 = a(x - 7) + b(x - 4)$",
              "$9 \\cdot 4 - 6 = a(4 + 7)$",
              "$a = \\dfrac{30}{11}$",
              "$9 \\cdot 7 - 6 = b(7 - 4)$",
              "$b = 19$",
              "$\\dfrac{9x - 6}{(x - 4)(x - 7)} = \\dfrac{30}{11(x - 4)} + \\dfrac{19}{x - 7}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{9x - 6}{(x - 4)(x - 7)} = \\dfrac{a}{x - 4} + \\dfrac{b}{x - 7}$ for every $x$ other than $4$ and $7$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Partial fractions: the bottom is the product of the two linear factors $x - 4$ and $x - 7$."
              },
              {
                "step": "Line 2 puts in $x = 4$, and the bracket $x - 7$ becomes $4 - 7$, not $4 + 7$: the sign in front of $7$ is lost.",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: every $x$ in line 1 is replaced by $4$ and each sign is kept."
              },
              {
                "step": "Line 2 written right is $9 \\cdot 4 - 6 = a(4 - 7)$.",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: with this line the later lines give the constants."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{7x - 9}{(x + 3)(x + 1)} = \\dfrac{a}{x + 3} + \\dfrac{b}{x + 1}$ for every $x$ other than $-3$ and $-1$, and write that line right.",
              "given": [
                "$7x - 9 = a(x + 1) + b(x - 3)$",
                "$7(-3) - 9 = a(-3 + 1)$",
                "$a = 15$",
                "$7(-1) - 9 = b(-1 - 3)$",
                "$b = 4$",
                "$\\dfrac{7x - 9}{(x + 3)(x + 1)} = \\dfrac{15}{x + 3} + \\dfrac{4}{x + 1}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 7*x-9 = a*(x+1)+b*(x+3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{7x - 9}{(x + 3)(x + 1)} = \\dfrac{a}{x + 3} + \\dfrac{b}{x + 1}$ for every $x$ other than $-3$ and $-1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the first line to check.",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $x + 3$ and $x + 1$."
                },
                {
                  "step": "Line 1 has $x - 3$ beside $b$, but multiplying $\\dfrac{b}{x + 1}$ by $(x + 3)(x + 1)$ leaves $b(x + 3)$: the sign in front of $3$ is lost.",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: line 1 must hold for every $x$, and each fraction on the right times $(x + 3)(x + 1)$ leaves the other factor of the bottom, with its own sign."
                },
                {
                  "step": "Line 1 written right is $7x - 9 = a(x + 1) + b(x + 3)$.",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: with this line the later lines give the constants."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{-7x + 8}{(x + 7)(x - 8)} = \\dfrac{a}{x + 7} + \\dfrac{b}{x - 8}$ for every $x$ other than $-7$ and $8$, and write that line right.",
              "given": [
                "$-7x + 8 = a(x - 8) + b(x + 7)$",
                "$-7(-7) + 8 = a(-7 - 8)$",
                "$a = -\\dfrac{19}{5}$",
                "$-7 \\cdot 8 + 8 = b(8 - 7)$",
                "$b = -48$",
                "$\\dfrac{-7x + 8}{(x + 7)(x - 8)} = -\\dfrac{19}{5(x + 7)} - \\dfrac{48}{x - 8}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -7*8+8 = b*(8+7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{-7x + 8}{(x + 7)(x - 8)} = \\dfrac{a}{x + 7} + \\dfrac{b}{x - 8}$ for every $x$ other than $-7$ and $8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $x + 7$ and $x - 8$."
                },
                {
                  "step": "Line 4 puts in $x = 8$, and the bracket $x + 7$ becomes $8 + 7$, not $8 - 7$: the sign in front of $7$ is lost.",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: every $x$ in line 1 is replaced by $8$ and each sign is kept."
                },
                {
                  "step": "Line 4 written right is $-7 \\cdot 8 + 8 = b(8 + 7)$.",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: with this line the later lines give the constants."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{2x - 13}{(x - 1)(x - 7)} = \\dfrac{a}{x - 1} + \\dfrac{b}{x - 7}$ for every $x$ other than $1$ and $7$, and write that line right.",
              "given": [
                "$2x - 13 = a(x - 7) + b(x - 1)$",
                "$2 \\cdot 1 - 13 = a(1 - 7)$",
                "$a = \\dfrac{11}{6}$",
                "$2 \\cdot 7 - 13 = b(7 - 1)$",
                "$b = -\\dfrac{1}{6}$",
                "$\\dfrac{2x - 13}{(x - 1)(x - 7)} = \\dfrac{11}{6(x - 1)} - \\dfrac{1}{6(x - 7)}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: b = 1/6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the constants $a$ and $b$ with $\\dfrac{2x - 13}{(x - 1)(x - 7)} = \\dfrac{a}{x - 1} + \\dfrac{b}{x - 7}$ for every $x$ other than $1$ and $7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $x - 1$ and $x - 7$."
                },
                {
                  "step": "Line 4 gives $1 = 6b$, so $b$ is $\\dfrac{1}{6}$, and line 5 has the opposite sign.",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: dividing both sides of line 4 by $6$ keeps the sign of the quotient."
                },
                {
                  "step": "Line 5 written right is $b = \\dfrac{1}{6}$.",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: with this line the later lines give the constants."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t175-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, $a$, $b$, with the fraction whose top is $5x - 5$ alone on the left: The fraction with top $5x - 5$ and bottom $(x - 4)(x - 3)$ equals the sum of fractions with constant tops $a$, $b$, one over each different linear factor in the order the bottom lists them.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, $a$, $b$, with the fraction whose top is $5x - 5$ alone on the left: The fraction with top $5x - 5$ and bottom $(x - 4)(x - 3)$ equals the sum of fractions with constant tops $a$, $b$, one over each different linear factor in the order the bottom lists them.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The different linear factors of the bottom, in its order, are $x - 4$ and $x - 3$.",
                "reason": "Writing a sentence as an equation: the bottom $(x - 4)(x - 3)$ is read factor by factor, in the order written."
              },
              {
                "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 4} + \\dfrac{b}{x - 3}$.",
                "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor takes one fraction with a constant top."
              },
              {
                "step": "$\\dfrac{5x - 5}{(x - 4)(x - 3)} = \\dfrac{a}{x - 4} + \\dfrac{b}{x - 3}$",
                "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-6x - 5$ alone on the left: The fraction with top $-6x - 5$ and bottom $(x - 2)(x + 5)(x + 9)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(-6*x-5)/((x-2)*(x+5)*(x+9)) = a/(x-2)+b/(x+5)+c/(x+9)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-6x - 5$ alone on the left: The fraction with top $-6x - 5$ and bottom $(x - 2)(x + 5)(x + 9)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The different linear factors of the bottom, in its order, are $x - 2$ and $x + 5$ and $x + 9$.",
                  "reason": "Writing a sentence as an equation: the bottom $(x - 2)(x + 5)(x + 9)$ is read factor by factor, in the order written."
                },
                {
                  "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 2} + \\dfrac{b}{x + 5} + \\dfrac{c}{x + 9}$.",
                  "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor takes one fraction with a constant top."
                },
                {
                  "step": "$\\dfrac{-6x - 5}{(x - 2)(x + 5)(x + 9)} = \\dfrac{a}{x - 2} + \\dfrac{b}{x + 5} + \\dfrac{c}{x + 9}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$, $b$, with the fraction whose top is $-4x + 9$ alone on the left: The fraction with top $-4x + 9$ and bottom $(x - 5)(x - 9)$ is the sum of fractions with constant tops $a$, $b$, one over each different linear factor in the order the bottom lists them.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(-4*x+9)/((x-5)*(x-9)) = a/(x-5)+b/(x-9)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$, $b$, with the fraction whose top is $-4x + 9$ alone on the left: The fraction with top $-4x + 9$ and bottom $(x - 5)(x - 9)$ is the sum of fractions with constant tops $a$, $b$, one over each different linear factor in the order the bottom lists them.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The different linear factors of the bottom, in its order, are $x - 5$ and $x - 9$.",
                  "reason": "Writing a sentence as an equation: the bottom $(x - 5)(x - 9)$ is read factor by factor, in the order written."
                },
                {
                  "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 5} + \\dfrac{b}{x - 9}$.",
                  "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor takes one fraction with a constant top."
                },
                {
                  "step": "$\\dfrac{-4x + 9}{(x - 5)(x - 9)} = \\dfrac{a}{x - 5} + \\dfrac{b}{x - 9}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-9x - 8$ alone on the left: The fraction with top $-9x - 8$ and bottom $(x - 6)(x - 3)(x + 6)$ is the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(-9*x-8)/((x-6)*(x-3)*(x+6)) = a/(x-6)+b/(x-3)+c/(x+6)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-9x - 8$ alone on the left: The fraction with top $-9x - 8$ and bottom $(x - 6)(x - 3)(x + 6)$ is the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The different linear factors of the bottom, in its order, are $x - 6$ and $x - 3$ and $x + 6$.",
                  "reason": "Writing a sentence as an equation: the bottom $(x - 6)(x - 3)(x + 6)$ is read factor by factor, in the order written."
                },
                {
                  "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 6} + \\dfrac{b}{x - 3} + \\dfrac{c}{x + 6}$.",
                  "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor takes one fraction with a constant top."
                },
                {
                  "step": "$\\dfrac{-9x - 8}{(x - 6)(x - 3)(x + 6)} = \\dfrac{a}{x - 6} + \\dfrac{b}{x - 3} + \\dfrac{c}{x + 6}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $2x - 11$ alone on the left: The fraction with top $2x - 11$ and bottom $(x + 8)^2(x - 6)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $2x - 11$ alone on the left: The fraction with top $2x - 11$ and bottom $(x + 8)^2(x - 6)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The different linear factors of the bottom, in its order, are $x + 8$ and $x - 6$.",
                "reason": "Writing a sentence as an equation: the bottom $(x + 8)^2(x - 6)$ is read factor by factor, in the order written."
              },
              {
                "step": "The repeated factor is $x + 8$, and its square is $(x + 8)^2$.",
                "reason": "Writing a sentence as an equation: the square of an expression is that expression to the power $2$."
              },
              {
                "step": "The sum of fractions with constant tops is $\\dfrac{a}{x + 8} + \\dfrac{b}{x - 6} + \\dfrac{c}{(x + 8)^2}$.",
                "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor, and the square of the repeated one, takes one fraction with a constant top."
              },
              {
                "step": "$\\dfrac{2x - 11}{(x + 8)^2(x - 6)} = \\dfrac{a}{x + 8} + \\dfrac{b}{x - 6} + \\dfrac{c}{(x + 8)^2}$",
                "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-3x - 1$ alone on the left: The fraction with top $-3x - 1$ and bottom $(x - 4)^2(x + 1)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(-3*x-1)/((x-4)^2*(x+1)) = a/(x-4)+b/(x+1)+c/((x-4)^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-3x - 1$ alone on the left: The fraction with top $-3x - 1$ and bottom $(x - 4)^2(x + 1)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The different linear factors of the bottom, in its order, are $x - 4$ and $x + 1$.",
                  "reason": "Writing a sentence as an equation: the bottom $(x - 4)^2(x + 1)$ is read factor by factor, in the order written."
                },
                {
                  "step": "The repeated factor is $x - 4$, and its square is $(x - 4)^2$.",
                  "reason": "Writing a sentence as an equation: the square of an expression is that expression to the power $2$."
                },
                {
                  "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 4} + \\dfrac{b}{x + 1} + \\dfrac{c}{(x - 4)^2}$.",
                  "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor, and the square of the repeated one, takes one fraction with a constant top."
                },
                {
                  "step": "$\\dfrac{-3x - 1}{(x - 4)^2(x + 1)} = \\dfrac{a}{x - 4} + \\dfrac{b}{x + 1} + \\dfrac{c}{(x - 4)^2}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $8x + 14$ alone on the left: The fraction with top $8x + 14$ and bottom $(x - 6)^2(x + 8)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(8*x+14)/((x-6)^2*(x+8)) = a/(x-6)+b/(x+8)+c/((x-6)^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $8x + 14$ alone on the left: The fraction with top $8x + 14$ and bottom $(x - 6)^2(x + 8)$ equals the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The different linear factors of the bottom, in its order, are $x - 6$ and $x + 8$.",
                  "reason": "Writing a sentence as an equation: the bottom $(x - 6)^2(x + 8)$ is read factor by factor, in the order written."
                },
                {
                  "step": "The repeated factor is $x - 6$, and its square is $(x - 6)^2$.",
                  "reason": "Writing a sentence as an equation: the square of an expression is that expression to the power $2$."
                },
                {
                  "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 6} + \\dfrac{b}{x + 8} + \\dfrac{c}{(x - 6)^2}$.",
                  "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor, and the square of the repeated one, takes one fraction with a constant top."
                },
                {
                  "step": "$\\dfrac{8x + 14}{(x - 6)^2(x + 8)} = \\dfrac{a}{x - 6} + \\dfrac{b}{x + 8} + \\dfrac{c}{(x - 6)^2}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-2x - 8$ alone on the left: The fraction with top $-2x - 8$ and bottom $(x - 7)^2(x + 5)$ is the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(-2*x-8)/((x-7)^2*(x+5)) = a/(x-7)+b/(x+5)+c/((x-7)^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$, $b$, $c$, with the fraction whose top is $-2x - 8$ alone on the left: The fraction with top $-2x - 8$ and bottom $(x - 7)^2(x + 5)$ is the sum of fractions with constant tops $a$, $b$, $c$, one over each different linear factor in the order the bottom lists them, then one over the square of the repeated factor.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The different linear factors of the bottom, in its order, are $x - 7$ and $x + 5$.",
                  "reason": "Writing a sentence as an equation: the bottom $(x - 7)^2(x + 5)$ is read factor by factor, in the order written."
                },
                {
                  "step": "The repeated factor is $x - 7$, and its square is $(x - 7)^2$.",
                  "reason": "Writing a sentence as an equation: the square of an expression is that expression to the power $2$."
                },
                {
                  "step": "The sum of fractions with constant tops is $\\dfrac{a}{x - 7} + \\dfrac{b}{x + 5} + \\dfrac{c}{(x - 7)^2}$.",
                  "reason": "Partial fractions, read with writing a sentence as an equation: each different linear factor, and the square of the repeated one, takes one fraction with a constant top."
                },
                {
                  "step": "$\\dfrac{-2x - 8}{(x - 7)^2(x + 5)} = \\dfrac{a}{x - 7} + \\dfrac{b}{x + 5} + \\dfrac{c}{(x - 7)^2}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" or \"equals\" stands where the equals sign goes, with the given fraction on the left."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
