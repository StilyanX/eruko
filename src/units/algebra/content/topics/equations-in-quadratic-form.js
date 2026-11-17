export default {
  "number": 147,
  "title": "Equations that are quadratic in an expression",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "312-317"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find every complex solution of $x^4 + 5x^2 - 104 = 0$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 2*sqrt(2), x = -2*sqrt(2), x = i*sqrt(13), x = -i*sqrt(13)",
    "solution": [
      "$x^4 + 5x^2 - 104 = 0$",
      "With $y = x^2$: $y^2 + 5y - 104 = 0$",
      "$(y - 8)(y + 13) = 0$",
      "Then $y = 8$ or $y = -13$",
      "Then $x^2 = 8$ or $x^2 = -13$",
      "So $x = 2\\sqrt{2}$, $x = -2\\sqrt{2}$, $x = i\\sqrt{13}$, $x = -i\\sqrt{13}$."
    ]
  },
  "ideas": [
    {
      "name": "Quadratic in an expression",
      "concrete": "In $x^6 - 2x^3 - 528 = 0$ the power $x^6$ is $(x^3)^2$, so with $y = x^3$ the equation reads $y^2 - 2y - 528 = 0$, a quadratic in $y$. Its roots $24$ and $-22$ give $x^3 = 24$ or $x^3 = -22$.",
      "general": "An equation is a **quadratic in an expression** when it can be written as $ay^2 + by + c = 0$, with $a \\ne 0$, where $y$ stands for one expression in the unknown each time it appears. Solving the quadratic for $y$ and then putting the expression back in place of $y$ is **substituting a letter and undoing it**: each value of $y$ gives an equation for the unknown, and the solutions of those equations, at values where the expression is defined, are the solutions of the original equation."
    }
  ],
  "kinds": [
    {
      "id": "t147-k1",
      "forms": [
        {
          "example": {
            "problem": "Find every complex solution of $x^4 - 79x^2 + 1504 = 0$.",
            "lines": [
              {
                "step": "$x^4 - 79x^2 + 1504 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = x^2$: $y^2 - 79y + 1504 = 0$",
                "reason": "Quadratic in an expression: $x^4 = (x^2)^2$ by the power law, so the letter $y$ stands for $x^2$ each time it appears."
              },
              {
                "step": "$(y - 32)(y - 47) = 0$",
                "reason": "Factoring a quadratic: the two numbers $-32$ and $-47$ have product $1504$ and sum $-79$."
              },
              {
                "step": "Then $y = 32$ or $y = 47$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Then $x^2 = 32$ or $x^2 = 47$",
                "reason": "Substituting a letter and undoing it: $x^2$ is put back in place of $y$."
              },
              {
                "step": "So $x = 4\\sqrt{2}$, $x = -4\\sqrt{2}$, $x = \\sqrt{47}$, $x = -\\sqrt{47}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $x^4 - 12x^2 - 189 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = sqrt(21), x = -sqrt(21), x = 3*i, x = -3*i",
              "lines": [
                {
                  "step": "$x^4 - 12x^2 - 189 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2$: $y^2 - 12y - 189 = 0$",
                  "reason": "Quadratic in an expression: $x^4 = (x^2)^2$ by the power law, so the letter $y$ stands for $x^2$ each time it appears."
                },
                {
                  "step": "$(y - 21)(y + 9) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-21$ and $9$ have product $-189$ and sum $-12$."
                },
                {
                  "step": "Then $y = 21$ or $y = -9$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 = 21$ or $x^2 = -9$",
                  "reason": "Substituting a letter and undoing it: $x^2$ is put back in place of $y$."
                },
                {
                  "step": "So $x = \\sqrt{21}$, $x = -\\sqrt{21}$, $x = 3i$, $x = -3i$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^4 - 44x^2 + 123 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = sqrt(3), x = -sqrt(3), x = sqrt(41), x = -sqrt(41)",
              "lines": [
                {
                  "step": "$x^4 - 44x^2 + 123 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2$: $y^2 - 44y + 123 = 0$",
                  "reason": "Quadratic in an expression: $x^4 = (x^2)^2$ by the power law, so the letter $y$ stands for $x^2$ each time it appears."
                },
                {
                  "step": "$(y - 3)(y - 41) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-3$ and $-41$ have product $123$ and sum $-44$."
                },
                {
                  "step": "Then $y = 3$ or $y = 41$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 = 3$ or $x^2 = 41$",
                  "reason": "Substituting a letter and undoing it: $x^2$ is put back in place of $y$."
                },
                {
                  "step": "So $x = \\sqrt{3}$, $x = -\\sqrt{3}$, $x = \\sqrt{41}$, $x = -\\sqrt{41}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^4 + 35x^2 - 74 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = sqrt(2), x = -sqrt(2), x = i*sqrt(37), x = -i*sqrt(37)",
              "lines": [
                {
                  "step": "$x^4 + 35x^2 - 74 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2$: $y^2 + 35y - 74 = 0$",
                  "reason": "Quadratic in an expression: $x^4 = (x^2)^2$ by the power law, so the letter $y$ stands for $x^2$ each time it appears."
                },
                {
                  "step": "$(y - 2)(y + 37) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-2$ and $37$ have product $-74$ and sum $35$."
                },
                {
                  "step": "Then $y = 2$ or $y = -37$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 = 2$ or $x^2 = -37$",
                  "reason": "Substituting a letter and undoing it: $x^2$ is put back in place of $y$."
                },
                {
                  "step": "So $x = \\sqrt{2}$, $x = -\\sqrt{2}$, $x = i\\sqrt{37}$, $x = -i\\sqrt{37}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(x^2 + 2x)^2 - 56(x^2 + 2x) + 384 = 0$.",
            "lines": [
              {
                "step": "$(x^2 + 2x)^2 - 56(x^2 + 2x) + 384 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = x^2 + 2x$: $y^2 - 56y + 384 = 0$",
                "reason": "Quadratic in an expression: the expression $x^2 + 2x$ appears twice, so the letter $y$ stands for it each time, and the equation is a quadratic in $y$."
              },
              {
                "step": "$(y - 48)(y - 8) = 0$",
                "reason": "Factoring a quadratic: the two numbers $-48$ and $-8$ have product $384$ and sum $-56$."
              },
              {
                "step": "Then $y = 48$ or $y = 8$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Then $x^2 + 2x - 48 = 0$ or $x^2 + 2x - 8 = 0$",
                "reason": "Substituting a letter and undoing it: $x^2 + 2x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
              },
              {
                "step": "Then $(x + 8)(x - 6) = 0$ or $(x + 4)(x - 2) = 0$",
                "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
              },
              {
                "step": "So $x = -8$, $x = 6$, $x = -4$, $x = 2$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(x^2 + 6x)^2 - 43(x^2 + 6x) + 432 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -8, x = 2, x = -9, x = 3",
              "lines": [
                {
                  "step": "$(x^2 + 6x)^2 - 43(x^2 + 6x) + 432 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2 + 6x$: $y^2 - 43y + 432 = 0$",
                  "reason": "Quadratic in an expression: the expression $x^2 + 6x$ appears twice, so the letter $y$ stands for it each time, and the equation is a quadratic in $y$."
                },
                {
                  "step": "$(y - 16)(y - 27) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-16$ and $-27$ have product $432$ and sum $-43$."
                },
                {
                  "step": "Then $y = 16$ or $y = 27$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 + 6x - 16 = 0$ or $x^2 + 6x - 27 = 0$",
                  "reason": "Substituting a letter and undoing it: $x^2 + 6x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
                },
                {
                  "step": "Then $(x + 8)(x - 2) = 0$ or $(x + 9)(x - 3) = 0$",
                  "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
                },
                {
                  "step": "So $x = -8$, $x = 2$, $x = -9$, $x = 3$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $(x^2 - 7x)^2 + 22(x^2 - 7x) + 120 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 2, x = 5, x = 3, x = 4",
              "lines": [
                {
                  "step": "$(x^2 - 7x)^2 + 22(x^2 - 7x) + 120 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2 - 7x$: $y^2 + 22y + 120 = 0$",
                  "reason": "Quadratic in an expression: the expression $x^2 - 7x$ appears twice, so the letter $y$ stands for it each time, and the equation is a quadratic in $y$."
                },
                {
                  "step": "$(y + 10)(y + 12) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $10$ and $12$ have product $120$ and sum $22$."
                },
                {
                  "step": "Then $y = -10$ or $y = -12$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 - 7x + 10 = 0$ or $x^2 - 7x + 12 = 0$",
                  "reason": "Substituting a letter and undoing it: $x^2 - 7x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
                },
                {
                  "step": "Then $(x - 2)(x - 5) = 0$ or $(x - 3)(x - 4) = 0$",
                  "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
                },
                {
                  "step": "So $x = 2$, $x = 5$, $x = 3$, $x = 4$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $(x^2 + 2x)^2 - 39(x^2 + 2x) + 360 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -5, x = 3, x = -6, x = 4",
              "lines": [
                {
                  "step": "$(x^2 + 2x)^2 - 39(x^2 + 2x) + 360 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2 + 2x$: $y^2 - 39y + 360 = 0$",
                  "reason": "Quadratic in an expression: the expression $x^2 + 2x$ appears twice, so the letter $y$ stands for it each time, and the equation is a quadratic in $y$."
                },
                {
                  "step": "$(y - 15)(y - 24) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-15$ and $-24$ have product $360$ and sum $-39$."
                },
                {
                  "step": "Then $y = 15$ or $y = 24$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 + 2x - 15 = 0$ or $x^2 + 2x - 24 = 0$",
                  "reason": "Substituting a letter and undoing it: $x^2 + 2x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
                },
                {
                  "step": "Then $(x + 5)(x - 3) = 0$ or $(x + 6)(x - 4) = 0$",
                  "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
                },
                {
                  "step": "So $x = -5$, $x = 3$, $x = -6$, $x = 4$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(x^2 - 8x)(x^2 - 8x + 27) = -180$.",
            "lines": [
              {
                "step": "$(x^2 - 8x)(x^2 - 8x + 27) = -180$",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = x^2 - 8x$: $y(y + 27) = -180$",
                "reason": "Quadratic in an expression: the letter $y$ stands for $x^2 - 8x$ each time it appears."
              },
              {
                "step": "$y^2 + 27y + 180 = 0$",
                "reason": "Multiplying out the bracket, and adding the same number to both sides: $180$ is added to each side."
              },
              {
                "step": "$(y + 15)(y + 12) = 0$",
                "reason": "Factoring a quadratic: the two numbers $15$ and $12$ have product $180$ and sum $27$."
              },
              {
                "step": "Then $y = -15$ or $y = -12$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Then $x^2 - 8x + 15 = 0$ or $x^2 - 8x + 12 = 0$",
                "reason": "Substituting a letter and undoing it: $x^2 - 8x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
              },
              {
                "step": "Then $(x - 3)(x - 5) = 0$ or $(x - 2)(x - 6) = 0$",
                "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
              },
              {
                "step": "So $x = 3$, $x = 5$, $x = 2$, $x = 6$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(x^2 + 9x)(x^2 + 9x + 32) = -252$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -6, x = -3, x = -7, x = -2",
              "lines": [
                {
                  "step": "$(x^2 + 9x)(x^2 + 9x + 32) = -252$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2 + 9x$: $y(y + 32) = -252$",
                  "reason": "Quadratic in an expression: the letter $y$ stands for $x^2 + 9x$ each time it appears."
                },
                {
                  "step": "$y^2 + 32y + 252 = 0$",
                  "reason": "Multiplying out the bracket, and adding the same number to both sides: $252$ is added to each side."
                },
                {
                  "step": "$(y + 18)(y + 14) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $18$ and $14$ have product $252$ and sum $32$."
                },
                {
                  "step": "Then $y = -18$ or $y = -14$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 + 9x + 18 = 0$ or $x^2 + 9x + 14 = 0$",
                  "reason": "Substituting a letter and undoing it: $x^2 + 9x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
                },
                {
                  "step": "Then $(x + 6)(x + 3) = 0$ or $(x + 7)(x + 2) = 0$",
                  "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
                },
                {
                  "step": "So $x = -6$, $x = -3$, $x = -7$, $x = -2$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $(x^2 + 9x)(x^2 + 9x + 28) = -160$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -5, x = -4, x = -8, x = -1",
              "lines": [
                {
                  "step": "$(x^2 + 9x)(x^2 + 9x + 28) = -160$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2 + 9x$: $y(y + 28) = -160$",
                  "reason": "Quadratic in an expression: the letter $y$ stands for $x^2 + 9x$ each time it appears."
                },
                {
                  "step": "$y^2 + 28y + 160 = 0$",
                  "reason": "Multiplying out the bracket, and adding the same number to both sides: $160$ is added to each side."
                },
                {
                  "step": "$(y + 20)(y + 8) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $20$ and $8$ have product $160$ and sum $28$."
                },
                {
                  "step": "Then $y = -20$ or $y = -8$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 + 9x + 20 = 0$ or $x^2 + 9x + 8 = 0$",
                  "reason": "Substituting a letter and undoing it: $x^2 + 9x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
                },
                {
                  "step": "Then $(x + 5)(x + 4) = 0$ or $(x + 8)(x + 1) = 0$",
                  "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
                },
                {
                  "step": "So $x = -5$, $x = -4$, $x = -8$, $x = -1$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            },
            {
              "prompt": "Solve $(x^2 + 7x)(x^2 + 7x - 12) = 108$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -9, x = 2, x = -6, x = -1",
              "lines": [
                {
                  "step": "$(x^2 + 7x)(x^2 + 7x - 12) = 108$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = x^2 + 7x$: $y(y - 12) = 108$",
                  "reason": "Quadratic in an expression: the letter $y$ stands for $x^2 + 7x$ each time it appears."
                },
                {
                  "step": "$y^2 - 12y - 108 = 0$",
                  "reason": "Multiplying out the bracket, and adding the same number to both sides: $-108$ is added to each side."
                },
                {
                  "step": "$(y - 18)(y + 6) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-18$ and $6$ have product $-108$ and sum $-12$."
                },
                {
                  "step": "Then $y = 18$ or $y = -6$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x^2 + 7x - 18 = 0$ or $x^2 + 7x + 6 = 0$",
                  "reason": "Substituting a letter and undoing it: $x^2 + 7x$ is put back in place of $y$, and each value of $y$ is taken from both sides."
                },
                {
                  "step": "Then $(x + 9)(x - 2) = 0$ or $(x + 6)(x + 1) = 0$",
                  "reason": "Factoring a quadratic, once for each equation: two numbers with sum the coefficient of $x$ and product the constant term."
                },
                {
                  "step": "So $x = -9$, $x = 2$, $x = -6$, $x = -1$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x - 6\\sqrt{x} - 72 = 0$.",
            "lines": [
              {
                "step": "$x - 6\\sqrt{x} - 72 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = \\sqrt{x}$: $y^2 - 6y - 72 = 0$",
                "reason": "Quadratic in an expression: $x = (\\sqrt{x})^2$ for $x$ not negative, so the letter $y$ stands for $\\sqrt{x}$ and $y^2$ for $x$."
              },
              {
                "step": "$(y - 12)(y + 6) = 0$",
                "reason": "Factoring a quadratic: the two numbers $-12$ and $6$ have product $-72$ and sum $-6$."
              },
              {
                "step": "Then $y = 12$ or $y = -6$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Then $y = 12$ stands, and $y = -6$ gives no $x$",
                "reason": "Positive square root: $\\sqrt{x}$ is never negative, so only a value of $y$ that is not negative gives an $x$."
              },
              {
                "step": "$\\sqrt{x} = 12$",
                "reason": "Substituting a letter and undoing it: $\\sqrt{x}$ is put back in place of $y$."
              },
              {
                "step": "$x = 144$",
                "reason": "Raising both sides to a power: both sides of each equation are squared."
              },
              {
                "step": "Check: $144 - 6 \\cdot 12 - 72 = 0$",
                "reason": "Checking in the original equation: squaring may add a false solution, so each value is put back, with $\\sqrt{x}$ as the value of $y$."
              },
              {
                "step": "So $x = 144$.",
                "reason": "Checking a solution: every value that passes the check is a solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x - 17\\sqrt{x} + 52 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 16, x = 169",
              "lines": [
                {
                  "step": "$x - 17\\sqrt{x} + 52 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt{x}$: $y^2 - 17y + 52 = 0$",
                  "reason": "Quadratic in an expression: $x = (\\sqrt{x})^2$ for $x$ not negative, so the letter $y$ stands for $\\sqrt{x}$ and $y^2$ for $x$."
                },
                {
                  "step": "$(y - 4)(y - 13) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-4$ and $-13$ have product $52$ and sum $-17$."
                },
                {
                  "step": "Then $y = 4$ or $y = 13$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $y = 4$ and $y = 13$ both stand",
                  "reason": "Positive square root: $\\sqrt{x}$ is never negative, so only a value of $y$ that is not negative gives an $x$."
                },
                {
                  "step": "Then $\\sqrt{x} = 4$ or $\\sqrt{x} = 13$",
                  "reason": "Substituting a letter and undoing it: $\\sqrt{x}$ is put back in place of $y$."
                },
                {
                  "step": "Then $x = 16$ or $x = 169$",
                  "reason": "Raising both sides to a power: both sides of each equation are squared."
                },
                {
                  "step": "Check: $16 - 17 \\cdot 4 + 52 = 0$ and $169 - 17 \\cdot 13 + 52 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so each value is put back, with $\\sqrt{x}$ as the value of $y$."
                },
                {
                  "step": "So $x = 16$, $x = 169$.",
                  "reason": "Checking a solution: every value that passes the check is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $x - 2\\sqrt{x} - 195 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 225",
              "lines": [
                {
                  "step": "$x - 2\\sqrt{x} - 195 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt{x}$: $y^2 - 2y - 195 = 0$",
                  "reason": "Quadratic in an expression: $x = (\\sqrt{x})^2$ for $x$ not negative, so the letter $y$ stands for $\\sqrt{x}$ and $y^2$ for $x$."
                },
                {
                  "step": "$(y - 15)(y + 13) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-15$ and $13$ have product $-195$ and sum $-2$."
                },
                {
                  "step": "Then $y = 15$ or $y = -13$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $y = 15$ stands, and $y = -13$ gives no $x$",
                  "reason": "Positive square root: $\\sqrt{x}$ is never negative, so only a value of $y$ that is not negative gives an $x$."
                },
                {
                  "step": "$\\sqrt{x} = 15$",
                  "reason": "Substituting a letter and undoing it: $\\sqrt{x}$ is put back in place of $y$."
                },
                {
                  "step": "$x = 225$",
                  "reason": "Raising both sides to a power: both sides of each equation are squared."
                },
                {
                  "step": "Check: $225 - 2 \\cdot 15 - 195 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so each value is put back, with $\\sqrt{x}$ as the value of $y$."
                },
                {
                  "step": "So $x = 225$.",
                  "reason": "Checking a solution: every value that passes the check is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $x - 5\\sqrt{x} - 66 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 121",
              "lines": [
                {
                  "step": "$x - 5\\sqrt{x} - 66 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt{x}$: $y^2 - 5y - 66 = 0$",
                  "reason": "Quadratic in an expression: $x = (\\sqrt{x})^2$ for $x$ not negative, so the letter $y$ stands for $\\sqrt{x}$ and $y^2$ for $x$."
                },
                {
                  "step": "$(y - 11)(y + 6) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-11$ and $6$ have product $-66$ and sum $-5$."
                },
                {
                  "step": "Then $y = 11$ or $y = -6$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $y = 11$ stands, and $y = -6$ gives no $x$",
                  "reason": "Positive square root: $\\sqrt{x}$ is never negative, so only a value of $y$ that is not negative gives an $x$."
                },
                {
                  "step": "$\\sqrt{x} = 11$",
                  "reason": "Substituting a letter and undoing it: $\\sqrt{x}$ is put back in place of $y$."
                },
                {
                  "step": "$x = 121$",
                  "reason": "Raising both sides to a power: both sides of each equation are squared."
                },
                {
                  "step": "Check: $121 - 5 \\cdot 11 - 66 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so each value is put back, with $\\sqrt{x}$ as the value of $y$."
                },
                {
                  "step": "So $x = 121$.",
                  "reason": "Checking a solution: every value that passes the check is a solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{8}{x^2} - \\dfrac{10}{x} - 25 = 0$.",
            "lines": [
              {
                "step": "$\\dfrac{8}{x^2} - \\dfrac{10}{x} - 25 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x \\ne 0$",
                "reason": "Excluded value: $x = 0$ makes a denominator $0$, so $x$ is not $0$."
              },
              {
                "step": "With $y = \\dfrac{1}{x}$: $8y^2 - 10y - 25 = 0$",
                "reason": "Quadratic in an expression: $\\dfrac{1}{x^2} = \\left(\\dfrac{1}{x}\\right)^2$ by the power of a quotient, so the letter $y$ stands for $\\dfrac{1}{x}$ each time it appears."
              },
              {
                "step": "$(2y - 5)(4y + 5) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Then $y = \\dfrac{5}{2}$ or $y = -\\dfrac{5}{4}$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Then $\\dfrac{1}{x} = \\dfrac{5}{2}$ or $\\dfrac{1}{x} = -\\dfrac{5}{4}$",
                "reason": "Substituting a letter and undoing it: $\\dfrac{1}{x}$ is put back in place of $y$."
              },
              {
                "step": "So $x = \\dfrac{2}{5}$, $x = -\\dfrac{4}{5}$.",
                "reason": "Cross-multiplying each equation, and neither value is $0$, the excluded value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{15}{x^2} - \\dfrac{13}{x} - 6 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -3, x = 5/6",
              "lines": [
                {
                  "step": "$\\dfrac{15}{x^2} - \\dfrac{13}{x} - 6 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\ne 0$",
                  "reason": "Excluded value: $x = 0$ makes a denominator $0$, so $x$ is not $0$."
                },
                {
                  "step": "With $y = \\dfrac{1}{x}$: $15y^2 - 13y - 6 = 0$",
                  "reason": "Quadratic in an expression: $\\dfrac{1}{x^2} = \\left(\\dfrac{1}{x}\\right)^2$ by the power of a quotient, so the letter $y$ stands for $\\dfrac{1}{x}$ each time it appears."
                },
                {
                  "step": "$(3y + 1)(5y - 6) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Then $y = -\\dfrac{1}{3}$ or $y = \\dfrac{6}{5}$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $\\dfrac{1}{x} = -\\dfrac{1}{3}$ or $\\dfrac{1}{x} = \\dfrac{6}{5}$",
                  "reason": "Substituting a letter and undoing it: $\\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $x = -3$, $x = \\dfrac{5}{6}$.",
                  "reason": "Cross-multiplying each equation, and neither value is $0$, the excluded value."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{9}{x^2} - \\dfrac{15}{x} + 4 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3, x = 3/4",
              "lines": [
                {
                  "step": "$\\dfrac{9}{x^2} - \\dfrac{15}{x} + 4 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\ne 0$",
                  "reason": "Excluded value: $x = 0$ makes a denominator $0$, so $x$ is not $0$."
                },
                {
                  "step": "With $y = \\dfrac{1}{x}$: $9y^2 - 15y + 4 = 0$",
                  "reason": "Quadratic in an expression: $\\dfrac{1}{x^2} = \\left(\\dfrac{1}{x}\\right)^2$ by the power of a quotient, so the letter $y$ stands for $\\dfrac{1}{x}$ each time it appears."
                },
                {
                  "step": "$(3y - 1)(3y - 4) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Then $y = \\dfrac{1}{3}$ or $y = \\dfrac{4}{3}$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $\\dfrac{1}{x} = \\dfrac{1}{3}$ or $\\dfrac{1}{x} = \\dfrac{4}{3}$",
                  "reason": "Substituting a letter and undoing it: $\\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $x = 3$, $x = \\dfrac{3}{4}$.",
                  "reason": "Cross-multiplying each equation, and neither value is $0$, the excluded value."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{10}{x^2} - \\dfrac{27}{x} + 5 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 2/5, x = 5",
              "lines": [
                {
                  "step": "$\\dfrac{10}{x^2} - \\dfrac{27}{x} + 5 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\ne 0$",
                  "reason": "Excluded value: $x = 0$ makes a denominator $0$, so $x$ is not $0$."
                },
                {
                  "step": "With $y = \\dfrac{1}{x}$: $10y^2 - 27y + 5 = 0$",
                  "reason": "Quadratic in an expression: $\\dfrac{1}{x^2} = \\left(\\dfrac{1}{x}\\right)^2$ by the power of a quotient, so the letter $y$ stands for $\\dfrac{1}{x}$ each time it appears."
                },
                {
                  "step": "$(2y - 5)(5y - 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Then $y = \\dfrac{5}{2}$ or $y = \\dfrac{1}{5}$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $\\dfrac{1}{x} = \\dfrac{5}{2}$ or $\\dfrac{1}{x} = \\dfrac{1}{5}$",
                  "reason": "Substituting a letter and undoing it: $\\dfrac{1}{x}$ is put back in place of $y$."
                },
                {
                  "step": "So $x = \\dfrac{2}{5}$, $x = 5$.",
                  "reason": "Cross-multiplying each equation, and neither value is $0$, the excluded value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t147-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every complex solution of $x^3 = -9261$.",
            "lines": [
              {
                "step": "$x^3 = -9261$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^3 + 9261 = 0$",
                "reason": "Adding the same number to both sides: $9261$ is added to each side."
              },
              {
                "step": "$(x + 21)(x^2 - 21x + 441) = 0$",
                "reason": "Sum and difference of cubes: the sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = x$ and $b = 21$, since $9261 = 21^3$."
              },
              {
                "step": "Then $x = -21$ or $x^2 - 21x + 441 = 0$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "$x = \\dfrac{21 \\pm \\sqrt{441 - 1764}}{2} = \\dfrac{21 \\pm 21i\\sqrt{3}}{2}$",
                "reason": "Quadratic formula with $a = 1$, $b = -21$, $c = 441$, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              },
              {
                "step": "So $x = -21$, $x = \\dfrac{21}{2} + \\dfrac{21\\sqrt{3}}{2}i$, $x = \\dfrac{21}{2} - \\dfrac{21\\sqrt{3}}{2}i$.",
                "reason": "Zero-product property: the solutions are the root of the first factor and the two roots of the quadratic factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $x^3 = -1728$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -12, x = 6+6*i*sqrt(3), x = 6-6*i*sqrt(3)",
              "lines": [
                {
                  "step": "$x^3 = -1728$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + 1728 = 0$",
                  "reason": "Adding the same number to both sides: $1728$ is added to each side."
                },
                {
                  "step": "$(x + 12)(x^2 - 12x + 144) = 0$",
                  "reason": "Sum and difference of cubes: the sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = x$ and $b = 12$, since $1728 = 12^3$."
                },
                {
                  "step": "Then $x = -12$ or $x^2 - 12x + 144 = 0$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = \\dfrac{12 \\pm \\sqrt{144 - 576}}{2} = \\dfrac{12 \\pm 12i\\sqrt{3}}{2}$",
                  "reason": "Quadratic formula with $a = 1$, $b = -12$, $c = 144$, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = -12$, $x = 6 + 6i\\sqrt{3}$, $x = 6 - 6i\\sqrt{3}$.",
                  "reason": "Zero-product property: the solutions are the root of the first factor and the two roots of the quadratic factor."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^3 = 2197$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 13, x = -13/2+13*i*sqrt(3)/2, x = -13/2-13*i*sqrt(3)/2",
              "lines": [
                {
                  "step": "$x^3 = 2197$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 2197 = 0$",
                  "reason": "Adding the same number to both sides: $2197$ is taken from each side."
                },
                {
                  "step": "$(x - 13)(x^2 + 13x + 169) = 0$",
                  "reason": "Sum and difference of cubes: the difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = x$ and $b = 13$, since $2197 = 13^3$."
                },
                {
                  "step": "Then $x = 13$ or $x^2 + 13x + 169 = 0$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = \\dfrac{-13 \\pm \\sqrt{169 - 676}}{2} = \\dfrac{-13 \\pm 13i\\sqrt{3}}{2}$",
                  "reason": "Quadratic formula with $a = 1$, $b = 13$, $c = 169$, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = 13$, $x = -\\dfrac{13}{2} + \\dfrac{13\\sqrt{3}}{2}i$, $x = -\\dfrac{13}{2} - \\dfrac{13\\sqrt{3}}{2}i$.",
                  "reason": "Zero-product property: the solutions are the root of the first factor and the two roots of the quadratic factor."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^3 = -8000$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -20, x = 10+10*i*sqrt(3), x = 10-10*i*sqrt(3)",
              "lines": [
                {
                  "step": "$x^3 = -8000$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + 8000 = 0$",
                  "reason": "Adding the same number to both sides: $8000$ is added to each side."
                },
                {
                  "step": "$(x + 20)(x^2 - 20x + 400) = 0$",
                  "reason": "Sum and difference of cubes: the sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = x$ and $b = 20$, since $8000 = 20^3$."
                },
                {
                  "step": "Then $x = -20$ or $x^2 - 20x + 400 = 0$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = \\dfrac{20 \\pm \\sqrt{400 - 1600}}{2} = \\dfrac{20 \\pm 20i\\sqrt{3}}{2}$",
                  "reason": "Quadratic formula with $a = 1$, $b = -20$, $c = 400$, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = -20$, $x = 10 + 10i\\sqrt{3}$, $x = 10 - 10i\\sqrt{3}$.",
                  "reason": "Zero-product property: the solutions are the root of the first factor and the two roots of the quadratic factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex solution of $x^4 = 900$.",
            "lines": [
              {
                "step": "$x^4 = 900$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^4 - 900 = 0$",
                "reason": "Adding the same number to both sides: $900$ is taken from each side."
              },
              {
                "step": "$(x^2 - 30)(x^2 + 30) = 0$",
                "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = 30$."
              },
              {
                "step": "Then $x^2 = 30$ or $x^2 = -30$",
                "reason": "Zero-product property, with $30$ added to or taken from both sides."
              },
              {
                "step": "So $x = \\sqrt{30}$, $x = -\\sqrt{30}$, $x = i\\sqrt{30}$, $x = -i\\sqrt{30}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $x^4 = 104{,}976$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 18, x = -18, x = 18*i, x = -18*i",
              "lines": [
                {
                  "step": "$x^4 = 104{,}976$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - 104{,}976 = 0$",
                  "reason": "Adding the same number to both sides: $104{,}976$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 324)(x^2 + 324) = 0$",
                  "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = 324$."
                },
                {
                  "step": "Then $x^2 = 324$ or $x^2 = -324$",
                  "reason": "Zero-product property, with $324$ added to or taken from both sides."
                },
                {
                  "step": "So $x = 18$, $x = -18$, $x = 18i$, $x = -18i$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^4 = 961$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = sqrt(31), x = -sqrt(31), x = i*sqrt(31), x = -i*sqrt(31)",
              "lines": [
                {
                  "step": "$x^4 = 961$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - 961 = 0$",
                  "reason": "Adding the same number to both sides: $961$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 31)(x^2 + 31) = 0$",
                  "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = 31$."
                },
                {
                  "step": "Then $x^2 = 31$ or $x^2 = -31$",
                  "reason": "Zero-product property, with $31$ added to or taken from both sides."
                },
                {
                  "step": "So $x = \\sqrt{31}$, $x = -\\sqrt{31}$, $x = i\\sqrt{31}$, $x = -i\\sqrt{31}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^4 = 130{,}321$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 19, x = -19, x = 19*i, x = -19*i",
              "lines": [
                {
                  "step": "$x^4 = 130{,}321$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - 130{,}321 = 0$",
                  "reason": "Adding the same number to both sides: $130{,}321$ is taken from each side."
                },
                {
                  "step": "$(x^2 - 361)(x^2 + 361) = 0$",
                  "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = 361$."
                },
                {
                  "step": "Then $x^2 = 361$ or $x^2 = -361$",
                  "reason": "Zero-product property, with $361$ added to or taken from both sides."
                },
                {
                  "step": "So $x = 19$, $x = -19$, $x = 19i$, $x = -19i$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, for each value of $x^2$, each root in simplest radical form; where a value is negative, the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex solution of $x^6 = 46{,}656$.",
            "lines": [
              {
                "step": "$x^6 = 46{,}656$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^6 - 46{,}656 = 0$",
                "reason": "Adding the same number to both sides: $46{,}656$ is taken from each side."
              },
              {
                "step": "$(x^3 - 216)(x^3 + 216) = 0$",
                "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^3$ and $b = 216$."
              },
              {
                "step": "$(x - 6)(x^2 + 6x + 36)(x + 6)(x^2 - 6x + 36) = 0$",
                "reason": "Sum and difference of cubes: the difference of cubes and the sum of cubes, with $b = 6$, since $216 = 6^3$."
              },
              {
                "step": "$x = 6$, $x = -6$, $x^2 + 6x + 36 = 0$ or $x^2 - 6x + 36 = 0$",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Then $x = \\dfrac{-6 \\pm 6i\\sqrt{3}}{2}$ or $x = \\dfrac{6 \\pm 6i\\sqrt{3}}{2}$",
                "reason": "Quadratic formula on each quadratic, with discriminant $36 - 144 = -108$ both times, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              },
              {
                "step": "So $x = 6$, $x = -6$, $x = -3 + 3i\\sqrt{3}$, $x = -3 - 3i\\sqrt{3}$, $x = 3 + 3i\\sqrt{3}$, $x = 3 - 3i\\sqrt{3}$.",
                "reason": "Zero-product property: the six solutions are the roots of the four factors."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $x^6 = 531{,}441$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 9, x = -9, x = -9/2+9*i*sqrt(3)/2, x = -9/2-9*i*sqrt(3)/2, x = 9/2+9*i*sqrt(3)/2, x = 9/2-9*i*sqrt(3)/2",
              "lines": [
                {
                  "step": "$x^6 = 531{,}441$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^6 - 531{,}441 = 0$",
                  "reason": "Adding the same number to both sides: $531{,}441$ is taken from each side."
                },
                {
                  "step": "$(x^3 - 729)(x^3 + 729) = 0$",
                  "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^3$ and $b = 729$."
                },
                {
                  "step": "$(x - 9)(x^2 + 9x + 81)(x + 9)(x^2 - 9x + 81) = 0$",
                  "reason": "Sum and difference of cubes: the difference of cubes and the sum of cubes, with $b = 9$, since $729 = 9^3$."
                },
                {
                  "step": "$x = 9$, $x = -9$, $x^2 + 9x + 81 = 0$ or $x^2 - 9x + 81 = 0$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x = \\dfrac{-9 \\pm 9i\\sqrt{3}}{2}$ or $x = \\dfrac{9 \\pm 9i\\sqrt{3}}{2}$",
                  "reason": "Quadratic formula on each quadratic, with discriminant $81 - 324 = -243$ both times, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = 9$, $x = -9$, $x = -\\dfrac{9}{2} + \\dfrac{9\\sqrt{3}}{2}i$, $x = -\\dfrac{9}{2} - \\dfrac{9\\sqrt{3}}{2}i$, $x = \\dfrac{9}{2} + \\dfrac{9\\sqrt{3}}{2}i$, $x = \\dfrac{9}{2} - \\dfrac{9\\sqrt{3}}{2}i$.",
                  "reason": "Zero-product property: the six solutions are the roots of the four factors."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^6 = 262{,}144$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 8, x = -8, x = -4+4*i*sqrt(3), x = -4-4*i*sqrt(3), x = 4+4*i*sqrt(3), x = 4-4*i*sqrt(3)",
              "lines": [
                {
                  "step": "$x^6 = 262{,}144$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^6 - 262{,}144 = 0$",
                  "reason": "Adding the same number to both sides: $262{,}144$ is taken from each side."
                },
                {
                  "step": "$(x^3 - 512)(x^3 + 512) = 0$",
                  "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^3$ and $b = 512$."
                },
                {
                  "step": "$(x - 8)(x^2 + 8x + 64)(x + 8)(x^2 - 8x + 64) = 0$",
                  "reason": "Sum and difference of cubes: the difference of cubes and the sum of cubes, with $b = 8$, since $512 = 8^3$."
                },
                {
                  "step": "$x = 8$, $x = -8$, $x^2 + 8x + 64 = 0$ or $x^2 - 8x + 64 = 0$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x = \\dfrac{-8 \\pm 8i\\sqrt{3}}{2}$ or $x = \\dfrac{8 \\pm 8i\\sqrt{3}}{2}$",
                  "reason": "Quadratic formula on each quadratic, with discriminant $64 - 256 = -192$ both times, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = 8$, $x = -8$, $x = -4 + 4i\\sqrt{3}$, $x = -4 - 4i\\sqrt{3}$, $x = 4 + 4i\\sqrt{3}$, $x = 4 - 4i\\sqrt{3}$.",
                  "reason": "Zero-product property: the six solutions are the roots of the four factors."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^6 = 4096$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4, x = -4, x = -2+2*i*sqrt(3), x = -2-2*i*sqrt(3), x = 2+2*i*sqrt(3), x = 2-2*i*sqrt(3)",
              "lines": [
                {
                  "step": "$x^6 = 4096$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^6 - 4096 = 0$",
                  "reason": "Adding the same number to both sides: $4096$ is taken from each side."
                },
                {
                  "step": "$(x^3 - 64)(x^3 + 64) = 0$",
                  "reason": "Difference of squares, $a^2 - b^2 = (a - b)(a + b)$, with $a = x^3$ and $b = 64$."
                },
                {
                  "step": "$(x - 4)(x^2 + 4x + 16)(x + 4)(x^2 - 4x + 16) = 0$",
                  "reason": "Sum and difference of cubes: the difference of cubes and the sum of cubes, with $b = 4$, since $64 = 4^3$."
                },
                {
                  "step": "$x = 4$, $x = -4$, $x^2 + 4x + 16 = 0$ or $x^2 - 4x + 16 = 0$",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Then $x = \\dfrac{-4 \\pm 4i\\sqrt{3}}{2}$ or $x = \\dfrac{4 \\pm 4i\\sqrt{3}}{2}$",
                  "reason": "Quadratic formula on each quadratic, with discriminant $16 - 64 = -48$ both times, and the square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "So $x = 4$, $x = -4$, $x = -2 + 2i\\sqrt{3}$, $x = -2 - 2i\\sqrt{3}$, $x = 2 + 2i\\sqrt{3}$, $x = 2 - 2i\\sqrt{3}$.",
                  "reason": "Zero-product property: the six solutions are the roots of the four factors."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t147-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution, which finds every complex solution of $x^4 - 17x^2 - 390 = 0$, and write that line right.",
            "given": [
              "$x^4 - 17x^2 - 390 = 0$",
              "With $y = x^2$: $y^2 - 17y - 390 = 0$",
              "$(y - 30)(y - 13) = 0$",
              "Then $y = 30$ or $y = 13$",
              "Then $x^2 = 30$ or $x^2 = 13$",
              "So $x = \\sqrt{30}$, $x = -\\sqrt{30}$, $x = \\sqrt{13}$, $x = -\\sqrt{13}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, which finds every complex solution of $x^4 - 17x^2 - 390 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 gives the second bracket the wrong sign: its number must be minus the second root, so the product of the two numbers is the constant term.",
                "reason": "Factoring a quadratic: the two numbers have the constant term as product and the coefficient of $y$ as sum."
              },
              {
                "step": "Line 3 written right is $(y - 30)(y + 13) = 0$.",
                "reason": "Each later line follows from the line written right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, which finds every complex solution of $x^4 - 14x^2 - 176 = 0$, and write that line right.",
              "given": [
                "$x^4 - 14x^2 - 176 = 0$",
                "With $y = x^2$: $y^2 - 14y - 176 = 0$",
                "$(y - 22)(y + 8) = 0$",
                "Then $y = 22$ or $y = -8$",
                "Then $x^2 = 22$ or $x^2 = 8$",
                "So $x = \\sqrt{22}$, $x = -\\sqrt{22}$, $x = 2\\sqrt{2}$, $x = -2\\sqrt{2}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x^2 = 22, x^2 = -8",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which finds every complex solution of $x^4 - 14x^2 - 176 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 loses the sign: $x^2$ takes the value of $y$ found on line 4, sign and all.",
                  "reason": "Substituting a letter and undoing it: $x^2$ is put back in place of $y$ with the value unchanged."
                },
                {
                  "step": "Line 5 written right is $x^2 = 22$ or $x^2 = -8$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which finds every complex solution of $x^4 - 19x^2 - 182 = 0$, and write that line right.",
              "given": [
                "$x^4 - 19x^2 - 182 = 0$",
                "With $y = x^2$: $y^2 - 19y - 182 = 0$",
                "$(y - 26)(y + 7) = 0$",
                "Then $y = 26$ or $y = -7$",
                "Then $x^2 = 26$ or $x^2 = -7$",
                "So $x = \\sqrt{26}$, $x = -\\sqrt{26}$, $x = \\sqrt{7}$, $x = -\\sqrt{7}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x = sqrt(26), x = -sqrt(26), x = i*sqrt(7), x = -i*sqrt(7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which finds every complex solution of $x^4 - 19x^2 - 182 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 6 loses the sign under the root: a negative value of $x^2$ gives imaginary roots, by the square root of a negative number.",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "Line 6 written right is $x = \\sqrt{26}$, $x = -\\sqrt{26}$, $x = i\\sqrt{7}$, $x = -i\\sqrt{7}$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which finds every complex solution of $x^4 + 15x^2 - 184 = 0$, and write that line right.",
              "given": [
                "$x^4 + 15x^2 - 184 = 0$",
                "With $y = x^2$: $y^2 + 15y - 184 = 0$",
                "$(y - 8)(y + 23) = 0$",
                "Then $y = 8$ or $y = 23$",
                "Then $x^2 = 8$ or $x^2 = 23$",
                "So $x = 2\\sqrt{2}$, $x = -2\\sqrt{2}$, $x = \\sqrt{23}$, $x = -\\sqrt{23}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y = 8, y = -23",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which finds every complex solution of $x^4 + 15x^2 - 184 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 loses the sign: the second bracket is $0$ at the opposite of its number.",
                  "reason": "Zero-product property: $y - a = 0$ gives $y = a$, and $y + a = 0$ gives $y = -a$."
                },
                {
                  "step": "Line 4 written right is $y = 8$ or $y = -23$.",
                  "reason": "Each later line follows from the line written right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t147-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 39 more than 9 times its square.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 39 more than 9 times its square.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The fourth power of the number is $x^4$, and its square is $x^2$.",
                "reason": "Writing a sentence as an equation: \"the fourth power of\" a number multiplies four copies of it, and \"its square\" is the number times itself."
              },
              {
                "step": "9 times its square is $9x^2$, and 39 more than that is $9x^2 + 39$.",
                "reason": "Writing a sentence as an equation: \"times\" multiplies, \"more than\" adds and \"less than\" takes away the amount before it."
              },
              {
                "step": "$x^4 = 9x^2 + 39$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 4 more than 16 times its square.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4 = 16*x^2+4",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 4 more than 16 times its square.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fourth power of the number is $x^4$, and its square is $x^2$.",
                  "reason": "Writing a sentence as an equation: \"the fourth power of\" a number multiplies four copies of it, and \"its square\" is the number times itself."
                },
                {
                  "step": "16 times its square is $16x^2$, and 4 more than that is $16x^2 + 4$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"more than\" adds and \"less than\" takes away the amount before it."
                },
                {
                  "step": "$x^4 = 16x^2 + 4$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 39 less than 8 times its square.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4 = 8*x^2-39",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 39 less than 8 times its square.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fourth power of the number is $x^4$, and its square is $x^2$.",
                  "reason": "Writing a sentence as an equation: \"the fourth power of\" a number multiplies four copies of it, and \"its square\" is the number times itself."
                },
                {
                  "step": "8 times its square is $8x^2$, and 39 less than that is $8x^2 - 39$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"more than\" adds and \"less than\" takes away the amount before it."
                },
                {
                  "step": "$x^4 = 8x^2 - 39$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 59 less than 19 times its square.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4 = 19*x^2-59",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $x^4$ alone on the left: the fourth power of a number $x$ is 59 less than 19 times its square.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fourth power of the number is $x^4$, and its square is $x^2$.",
                  "reason": "Writing a sentence as an equation: \"the fourth power of\" a number multiplies four copies of it, and \"its square\" is the number times itself."
                },
                {
                  "step": "19 times its square is $19x^2$, and 59 less than that is $19x^2 - 59$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"more than\" adds and \"less than\" takes away the amount before it."
                },
                {
                  "step": "$x^4 = 19x^2 - 59$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 10 less than the square of a number $x$ is 26.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 10 less than the square of a number $x$ is 26.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of the number is $x^2$, and 10 less than it is $x^2 - 10$.",
                "reason": "Writing a sentence as an equation: \"10 less than\" takes 10 away from the amount after it."
              },
              {
                "step": "The square of that amount is $(x^2 - 10)^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
              },
              {
                "step": "$(x^2 - 10)^2 = 26$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 19 less than the square of a number $x$ is 61.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2-19)^2 = 61",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 19 less than the square of a number $x$ is 61.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and 19 less than it is $x^2 - 19$.",
                  "reason": "Writing a sentence as an equation: \"19 less than\" takes 19 away from the amount after it."
                },
                {
                  "step": "The square of that amount is $(x^2 - 19)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x^2 - 19)^2 = 61$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 6 less than the square of a number $x$ is 64.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2-6)^2 = 64",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 6 less than the square of a number $x$ is 64.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and 6 less than it is $x^2 - 6$.",
                  "reason": "Writing a sentence as an equation: \"6 less than\" takes 6 away from the amount after it."
                },
                {
                  "step": "The square of that amount is $(x^2 - 6)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x^2 - 6)^2 = 64$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 9 less than the square of a number $x$ is 68.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2-9)^2 = 68",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of 9 less than the square of a number $x$ is 68.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and 9 less than it is $x^2 - 9$.",
                  "reason": "Writing a sentence as an equation: \"9 less than\" takes 9 away from the amount after it."
                },
                {
                  "step": "The square of that amount is $(x^2 - 9)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x^2 - 9)^2 = 68$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 18 is 24.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 18 is 24.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of the number is $x^2$, and its sum with 18 is $x^2 + 18$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
              },
              {
                "step": "The square of that amount is $(x^2 + 18)^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
              },
              {
                "step": "$(x^2 + 18)^2 = 24$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 16 is 7.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2+16)^2 = 7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 16 is 7.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and its sum with 16 is $x^2 + 16$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
                },
                {
                  "step": "The square of that amount is $(x^2 + 16)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x^2 + 16)^2 = 7$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 14 is 38.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2+14)^2 = 38",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 14 is 38.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and its sum with 14 is $x^2 + 14$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
                },
                {
                  "step": "The square of that amount is $(x^2 + 14)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x^2 + 14)^2 = 38$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 6 is 15.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x^2+6)^2 = 15",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the squared bracket alone on the left: the square of the sum of the square of a number $x$ and 6 is 15.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and its sum with 6 is $x^2 + 6$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
                },
                {
                  "step": "The square of that amount is $(x^2 + 6)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x^2 + 6)^2 = 15$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
