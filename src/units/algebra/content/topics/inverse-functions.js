export default {
  "number": 160,
  "title": "Inverse functions",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "467-472, 479-483"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether $g(x) = \\dfrac{-11x - 3}{7x - 6}$ is the inverse of $f(x) = \\dfrac{6x - 3}{7x + 11}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $g(x) = \\dfrac{-11x - 3}{7x - 6}$ is the inverse of $f(x) = \\dfrac{6x - 3}{7x + 11}$.",
      "$g(f(x)) = \\dfrac{-11(6x - 3) - 3(7x + 11)}{7(6x - 3) - 6(7x + 11)}$",
      "$g(f(x)) = \\dfrac{-87x}{-87}$",
      "$g(f(x)) = x$",
      "$f(g(x)) = \\dfrac{6(-11x - 3) - 3(7x - 6)}{7(-11x - 3) + 11(7x - 6)}$",
      "$f(g(x)) = \\dfrac{-87x}{-87}$",
      "$f(g(x)) = x$",
      "Yes: $g(f(x)) = x$ and $f(g(x)) = x$, so $g$ undoes $f$ and $f$ undoes $g$."
    ]
  },
  "ideas": [
    {
      "name": "Inverse function",
      "concrete": "With $f(x) = 9x - 20$ and $g(x) = \\dfrac{x + 20}{9}$, the input $3$ gives $f(3) = 7$ and then $g(7) = \\dfrac{27}{9} = 3$, the input again. For every $x$, $g(f(x)) = \\dfrac{(9x - 20) + 20}{9} = x$ and $f(g(x)) = 9 \\cdot \\dfrac{x + 20}{9} - 20 = x$, so $g$ undoes $f$ and $f$ undoes $g$.",
      "general": "Functions $f$ and $g$ are **inverse functions** of each other when $g(f(x)) = x$ for each $x$ in the domain of $f$ and $f(g(x)) = x$ for each $x$ in the domain of $g$. The inverse of $f$ is written $f^{-1}$; the $-1$ is part of the name, so $f^{-1}(x)$ is never $\\dfrac{1}{f(x)}$. Where $f$ has an inverse, $f(a) = b$ means $f^{-1}(b) = a$, and $f^{-1}(x)$ is found by solving $f(y) = x$ for $y$."
    },
    {
      "name": "A function with one output from two inputs has no inverse",
      "concrete": "With $f(x) = 3x^2 + 24x + 37$, the inputs $-5$ and $-3$ both give the output $-8$. An inverse would have to send $-8$ back to $-5$ and also to $-3$, and a function gives one output for each input, so $f$ has no inverse.",
      "general": "If a function $f$ has $f(a) = f(b)$ for two different inputs $a$ and $b$, then $f$ has no inverse."
    },
    {
      "name": "Restricting the domain",
      "concrete": "On all numbers, $f(x) = 11x^2 - 30$ gives $f(-2) = f(2) = 14$ and has no inverse. On the domain $x \\ge 0$ each output comes from one input, and solving $11y^2 - 30 = x$ with $y \\ge 0$ gives the inverse $f^{-1}(x) = \\sqrt{\\dfrac{x + 30}{11}}$.",
      "general": "**Restricting the domain** of a function to a set of inputs on which no two inputs share an output gives a function that has an inverse there. For $f(x) = a(x - b)^2 + c$ with $a \\ne 0$, either of the domains $x \\ge b$ and $x \\le b$ does this."
    }
  ],
  "kinds": [
    {
      "id": "t160-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $g(x) = \\dfrac{-8x - 22}{7x - 2}$ is the inverse of $f(x) = \\dfrac{2x + 22}{-7x - 8}$.",
            "lines": [
              {
                "step": "Decide whether $g(x) = \\dfrac{-8x - 22}{7x - 2}$ is the inverse of $f(x) = \\dfrac{2x + 22}{-7x - 8}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$g(f(x)) = \\dfrac{-8(2x + 22) - 22(-7x - 8)}{7(2x + 22) - 2(-7x - 8)}$",
                "reason": "Composition $f(g(x))$ and complex fraction: the rule for $f(x)$ goes where $x$ stands in the rule for $g$, and the top and the bottom are each multiplied by $-7x - 8$."
              },
              {
                "step": "$g(f(x)) = \\dfrac{138x}{28x + 170}$",
                "reason": "Multiplying out, then collecting like terms."
              },
              {
                "step": "$g(f(-2)) = \\dfrac{138(-2)}{28(-2) + 170} = -\\dfrac{46}{19}$",
                "reason": "Substituting a value: $x = -2$, in brackets, in the last line; $-2$ is in the domain of $f$."
              },
              {
                "step": "No: $g(f(-2))$ is $-\\dfrac{46}{19}$, not $-2$, so $g$ does not undo $f$.",
                "reason": "Inverse function: an inverse $g$ of $f$ gives $g(f(x)) = x$ for each $x$ in the domain of $f$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $g(x) = \\dfrac{19x + 20}{8x + 12}$ is the inverse of $f(x) = \\dfrac{-12x + 20}{8x - 19}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $g(x) = \\dfrac{19x + 20}{8x + 12}$ is the inverse of $f(x) = \\dfrac{-12x + 20}{8x - 19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(f(x)) = \\dfrac{19(-12x + 20) + 20(8x - 19)}{8(-12x + 20) + 12(8x - 19)}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule for $f(x)$ goes where $x$ stands in the rule for $g$, and the top and the bottom are each multiplied by $8x - 19$."
                },
                {
                  "step": "$g(f(x)) = \\dfrac{-68x}{-68}$",
                  "reason": "Multiplying out, then collecting like terms."
                },
                {
                  "step": "$g(f(x)) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-68$."
                },
                {
                  "step": "$f(g(x)) = \\dfrac{-12(19x + 20) + 20(8x + 12)}{8(19x + 20) - 19(8x + 12)}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule for $g(x)$ goes where $x$ stands in the rule for $f$, and the top and the bottom are each multiplied by $8x + 12$."
                },
                {
                  "step": "$f(g(x)) = \\dfrac{-68x}{-68}$",
                  "reason": "Multiplying out, then collecting like terms."
                },
                {
                  "step": "$f(g(x)) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-68$."
                },
                {
                  "step": "Yes: $g(f(x)) = x$ and $f(g(x)) = x$, so $g$ undoes $f$ and $f$ undoes $g$.",
                  "reason": "Inverse function: $g$ is the inverse of $f$ when $g(f(x)) = x$ for each $x$ in the domain of $f$ and $f(g(x)) = x$ for each $x$ in the domain of $g$."
                }
              ]
            },
            {
              "prompt": "Decide whether $g(x) = \\dfrac{-17x + 12}{3x + 12}$ is the inverse of $f(x) = \\dfrac{12x + 12}{-3x - 17}$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $g(x) = \\dfrac{-17x + 12}{3x + 12}$ is the inverse of $f(x) = \\dfrac{12x + 12}{-3x - 17}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(f(x)) = \\dfrac{-17(12x + 12) + 12(-3x - 17)}{3(12x + 12) + 12(-3x - 17)}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule for $f(x)$ goes where $x$ stands in the rule for $g$, and the top and the bottom are each multiplied by $-3x - 17$."
                },
                {
                  "step": "$g(f(x)) = \\dfrac{-240x - 408}{-168}$",
                  "reason": "Multiplying out, then collecting like terms."
                },
                {
                  "step": "$g(f(3)) = \\dfrac{-240(3) - 408}{-168} = \\dfrac{47}{7}$",
                  "reason": "Substituting a value: $x = 3$, in brackets, in the last line; $3$ is in the domain of $f$."
                },
                {
                  "step": "No: $g(f(3))$ is $\\dfrac{47}{7}$, not $3$, so $g$ does not undo $f$.",
                  "reason": "Inverse function: an inverse $g$ of $f$ gives $g(f(x)) = x$ for each $x$ in the domain of $f$."
                }
              ]
            },
            {
              "prompt": "Decide whether $g(x) = \\dfrac{13x + 15}{6x - 9}$ is the inverse of $f(x) = \\dfrac{9x + 15}{6x - 13}$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $g(x) = \\dfrac{13x + 15}{6x - 9}$ is the inverse of $f(x) = \\dfrac{9x + 15}{6x - 13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$g(f(x)) = \\dfrac{13(9x + 15) + 15(6x - 13)}{6(9x + 15) - 9(6x - 13)}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule for $f(x)$ goes where $x$ stands in the rule for $g$, and the top and the bottom are each multiplied by $6x - 13$."
                },
                {
                  "step": "$g(f(x)) = \\dfrac{207x}{207}$",
                  "reason": "Multiplying out, then collecting like terms."
                },
                {
                  "step": "$g(f(x)) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $207$."
                },
                {
                  "step": "$f(g(x)) = \\dfrac{9(13x + 15) + 15(6x - 9)}{6(13x + 15) - 13(6x - 9)}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule for $g(x)$ goes where $x$ stands in the rule for $f$, and the top and the bottom are each multiplied by $6x - 9$."
                },
                {
                  "step": "$f(g(x)) = \\dfrac{207x}{207}$",
                  "reason": "Multiplying out, then collecting like terms."
                },
                {
                  "step": "$f(g(x)) = x$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $207$."
                },
                {
                  "step": "Yes: $g(f(x)) = x$ and $f(g(x)) = x$, so $g$ undoes $f$ and $f$ undoes $g$.",
                  "reason": "Inverse function: $g$ is the inverse of $f$ when $g(f(x)) = x$ for each $x$ in the domain of $f$ and $f(g(x)) = x$ for each $x$ in the domain of $g$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t160-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the inverse of $f(x) = -13x - 10$.",
            "lines": [
              {
                "step": "Find the inverse of $f(x) = -13x - 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-13y - 10 = x$",
                "reason": "Inverse function: $f(f^{-1}(x)) = x$, so $y = f^{-1}(x)$ is the number with $f(y) = x$."
              },
              {
                "step": "$-13y = x + 10$",
                "reason": "Adding the same number to both sides: $10$ is added to both sides."
              },
              {
                "step": "$f^{-1}(x) = \\dfrac{-x - 10}{13}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-13$, and $y$ is $f^{-1}(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the inverse of $f(x) = -11x - 50$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(-x-50)/11",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = -11x - 50$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-11y - 50 = x$",
                  "reason": "Inverse function: $f(f^{-1}(x)) = x$, so $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$-11y = x + 50$",
                  "reason": "Adding the same number to both sides: $50$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-x - 50}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-11$, and $y$ is $f^{-1}(x)$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = 11x - 46$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(x+46)/11",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = 11x - 46$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$11y - 46 = x$",
                  "reason": "Inverse function: $f(f^{-1}(x)) = x$, so $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$11y = x + 46$",
                  "reason": "Adding the same number to both sides: $46$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{x + 46}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$, and $y$ is $f^{-1}(x)$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = 10x + 40$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(x-40)/10",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = 10x + 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10y + 40 = x$",
                  "reason": "Inverse function: $f(f^{-1}(x)) = x$, so $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$10y = x - 40$",
                  "reason": "Adding the same number to both sides: $-40$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{x - 40}{10}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$, and $y$ is $f^{-1}(x)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the inverse of $f(x) = \\dfrac{5x - 18}{6x + 14}$.",
            "lines": [
              {
                "step": "Find the inverse of $f(x) = \\dfrac{5x - 18}{6x + 14}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{5y - 18}{6y + 14} = x$",
                "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
              },
              {
                "step": "$5y - 18 = 6xy + 14x$",
                "reason": "Cross-multiplying: both sides are multiplied by $6y + 14$, and the bracket is multiplied out."
              },
              {
                "step": "$5y - 6xy = 14x + 18$",
                "reason": "Adding the same number to both sides: $-6xy$ and $18$ are added to both sides."
              },
              {
                "step": "$y(5 - 6x) = 14x + 18$",
                "reason": "Collecting the terms with the letter and factoring it out: $y$ is taken out of the two terms on the left."
              },
              {
                "step": "$f^{-1}(x) = \\dfrac{14x + 18}{5 - 6x}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5 - 6x$, which is not $0$ for an output of $f$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the inverse of $f(x) = \\dfrac{-8x + 7}{-2x - 20}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(-20*x-7)/(-8+2*x)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = \\dfrac{-8x + 7}{-2x - 20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-8y + 7}{-2y - 20} = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$-8y + 7 = -2xy - 20x$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-2y - 20$, and the bracket is multiplied out."
                },
                {
                  "step": "$-8y + 2xy = -20x - 7$",
                  "reason": "Adding the same number to both sides: $2xy$ and $-7$ are added to both sides."
                },
                {
                  "step": "$y(-8 + 2x) = -20x - 7$",
                  "reason": "Collecting the terms with the letter and factoring it out: $y$ is taken out of the two terms on the left."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-20x - 7}{-8 + 2x}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-8 + 2x$, which is not $0$ for an output of $f$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = \\dfrac{8x + 14}{9x - 17}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(-17*x-14)/(8-9*x)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = \\dfrac{8x + 14}{9x - 17}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8y + 14}{9y - 17} = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$8y + 14 = 9xy - 17x$",
                  "reason": "Cross-multiplying: both sides are multiplied by $9y - 17$, and the bracket is multiplied out."
                },
                {
                  "step": "$8y - 9xy = -17x - 14$",
                  "reason": "Adding the same number to both sides: $-9xy$ and $-14$ are added to both sides."
                },
                {
                  "step": "$y(8 - 9x) = -17x - 14$",
                  "reason": "Collecting the terms with the letter and factoring it out: $y$ is taken out of the two terms on the left."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-17x - 14}{8 - 9x}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8 - 9x$, which is not $0$ for an output of $f$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = \\dfrac{11x - 9}{3x + 10}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(10*x+9)/(11-3*x)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = \\dfrac{11x - 9}{3x + 10}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{11y - 9}{3y + 10} = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$11y - 9 = 3xy + 10x$",
                  "reason": "Cross-multiplying: both sides are multiplied by $3y + 10$, and the bracket is multiplied out."
                },
                {
                  "step": "$11y - 3xy = 10x + 9$",
                  "reason": "Adding the same number to both sides: $-3xy$ and $9$ are added to both sides."
                },
                {
                  "step": "$y(11 - 3x) = 10x + 9$",
                  "reason": "Collecting the terms with the letter and factoring it out: $y$ is taken out of the two terms on the left."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{10x + 9}{11 - 3x}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11 - 3x$, which is not $0$ for an output of $f$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the inverse of $f(x) = -5x^3 - 39$.",
            "lines": [
              {
                "step": "Find the inverse of $f(x) = -5x^3 - 39$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-5y^3 - 39 = x$",
                "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
              },
              {
                "step": "$-5y^3 = x + 39$",
                "reason": "Adding the same number to both sides: $39$ is added to both sides."
              },
              {
                "step": "$y^3 = -\\dfrac{x + 39}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
              },
              {
                "step": "$f^{-1}(x) = -\\sqrt[3]{\\dfrac{x + 39}{5}}$",
                "reason": "The one real cube root: each number has exactly one real cube root, so $y$ is the cube root of the right side, and the cube root of $-p$ is $-\\sqrt[3]{p}$, since $(-q)^3 = -q^3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the inverse of $f(x) = 3x^3 + 34$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((x-34)/3)^(1/3)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = 3x^3 + 34$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3y^3 + 34 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$3y^3 = x - 34$",
                  "reason": "Adding the same number to both sides: $-34$ is added to both sides."
                },
                {
                  "step": "$y^3 = \\dfrac{x - 34}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$f^{-1}(x) = \\sqrt[3]{\\dfrac{x - 34}{3}}$",
                  "reason": "The one real cube root: each number has exactly one real cube root, so $y$ is the cube root of the right side."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = -6x^3 - 28$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-((x+28)/6)^(1/3)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = -6x^3 - 28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6y^3 - 28 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$-6y^3 = x + 28$",
                  "reason": "Adding the same number to both sides: $28$ is added to both sides."
                },
                {
                  "step": "$y^3 = -\\dfrac{x + 28}{6}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                },
                {
                  "step": "$f^{-1}(x) = -\\sqrt[3]{\\dfrac{x + 28}{6}}$",
                  "reason": "The one real cube root: each number has exactly one real cube root, so $y$ is the cube root of the right side, and the cube root of $-p$ is $-\\sqrt[3]{p}$, since $(-q)^3 = -q^3$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = -3x^3 + 50$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-((x-50)/3)^(1/3)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = -3x^3 + 50$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3y^3 + 50 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$-3y^3 = x - 50$",
                  "reason": "Adding the same number to both sides: $-50$ is added to both sides."
                },
                {
                  "step": "$y^3 = -\\dfrac{x - 50}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "$f^{-1}(x) = -\\sqrt[3]{\\dfrac{x - 50}{3}}$",
                  "reason": "The one real cube root: each number has exactly one real cube root, so $y$ is the cube root of the right side, and the cube root of $-p$ is $-\\sqrt[3]{p}$, since $(-q)^3 = -q^3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the inverse of $f(x) = \\sqrt[3]{-7x + 40} - 8$.",
            "lines": [
              {
                "step": "Find the inverse of $f(x) = \\sqrt[3]{-7x + 40} - 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt[3]{-7y + 40} - 8 = x$",
                "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
              },
              {
                "step": "$\\sqrt[3]{-7y + 40} = x + 8$",
                "reason": "Adding the same number to both sides: $8$ is added to both sides."
              },
              {
                "step": "$-7y + 40 = (x + 8)^3$",
                "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is the number under it."
              },
              {
                "step": "$-7y = (x + 8)^3 - 40$",
                "reason": "Adding the same number to both sides: $-40$ is added to both sides."
              },
              {
                "step": "$f^{-1}(x) = \\dfrac{40 - (x + 8)^3}{7}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the inverse of $f(x) = \\sqrt[3]{9x + 18} + 10$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((x-10)^3-18)/9",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = \\sqrt[3]{9x + 18} + 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[3]{9y + 18} + 10 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$\\sqrt[3]{9y + 18} = x - 10$",
                  "reason": "Adding the same number to both sides: $-10$ is added to both sides."
                },
                {
                  "step": "$9y + 18 = (x - 10)^3$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is the number under it."
                },
                {
                  "step": "$9y = (x - 10)^3 - 18$",
                  "reason": "Adding the same number to both sides: $-18$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{(x - 10)^3 - 18}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = \\sqrt[3]{-11x - 11} + 2$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(-11-(x-2)^3)/11",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = \\sqrt[3]{-11x - 11} + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[3]{-11y - 11} + 2 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$\\sqrt[3]{-11y - 11} = x - 2$",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides."
                },
                {
                  "step": "$-11y - 11 = (x - 2)^3$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is the number under it."
                },
                {
                  "step": "$-11y = (x - 2)^3 + 11$",
                  "reason": "Adding the same number to both sides: $11$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-11 - (x - 2)^3}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-11$."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = \\sqrt[3]{-11x - 36} - 20$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(-36-(x+20)^3)/11",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = \\sqrt[3]{-11x - 36} - 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[3]{-11y - 36} - 20 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$\\sqrt[3]{-11y - 36} = x + 20$",
                  "reason": "Adding the same number to both sides: $20$ is added to both sides."
                },
                {
                  "step": "$-11y - 36 = (x + 20)^3$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is the number under it."
                },
                {
                  "step": "$-11y = (x + 20)^3 + 36$",
                  "reason": "Adding the same number to both sides: $36$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-36 - (x + 20)^3}{11}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-11$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the inverse of $f(x) = x^2 - 20x + 136$ on the domain $x \\le 10$.",
            "lines": [
              {
                "step": "Find the inverse of $f(x) = x^2 - 20x + 136$ on the domain $x \\le 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = (x - 10)^2 + 36$",
                "reason": "Completing the square: half of $-20$ is $-10$, and $(x - 10)^2 = x^2 - 20x + 100$."
              },
              {
                "step": "$(y - 10)^2 + 36 = x$",
                "reason": "Inverse function: $y = f^{-1}(x)$ is the number in the domain with $f(y) = x$."
              },
              {
                "step": "$(y - 10)^2 = x - 36$",
                "reason": "Adding the same number to both sides: $-36$ is added to both sides."
              },
              {
                "step": "$y - 10 = -\\sqrt{x - 36}$",
                "reason": "Restricting the domain: $y \\le 10$, so $y - 10$ is at most $0$; of the two numbers whose square is $x - 36$ it is minus the positive square root."
              },
              {
                "step": "$f^{-1}(x) = 10 - \\sqrt{x - 36}$",
                "reason": "Adding the same number to both sides: $10$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the inverse of $f(x) = x^2 + 14x + 79$ on the domain $x \\ge -7$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-7+sqrt(x-30)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = x^2 + 14x + 79$ on the domain $x \\ge -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = (x + 7)^2 + 30$",
                  "reason": "Completing the square: half of $14$ is $7$, and $(x + 7)^2 = x^2 + 14x + 49$."
                },
                {
                  "step": "$(y + 7)^2 + 30 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number in the domain with $f(y) = x$."
                },
                {
                  "step": "$(y + 7)^2 = x - 30$",
                  "reason": "Adding the same number to both sides: $-30$ is added to both sides."
                },
                {
                  "step": "$y + 7 = \\sqrt{x - 30}$",
                  "reason": "Restricting the domain: $y \\ge -7$, so $y + 7$ is at least $0$; of the two numbers whose square is $x - 30$ it is the positive square root."
                },
                {
                  "step": "$f^{-1}(x) = -7 + \\sqrt{x - 30}$",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = x^2 + 16x + 43$ on the domain $x \\le -8$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-8-sqrt(x+21)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = x^2 + 16x + 43$ on the domain $x \\le -8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = (x + 8)^2 - 21$",
                  "reason": "Completing the square: half of $16$ is $8$, and $(x + 8)^2 = x^2 + 16x + 64$."
                },
                {
                  "step": "$(y + 8)^2 - 21 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number in the domain with $f(y) = x$."
                },
                {
                  "step": "$(y + 8)^2 = x + 21$",
                  "reason": "Adding the same number to both sides: $21$ is added to both sides."
                },
                {
                  "step": "$y + 8 = -\\sqrt{x + 21}$",
                  "reason": "Restricting the domain: $y \\le -8$, so $y + 8$ is at most $0$; of the two numbers whose square is $x + 21$ it is minus the positive square root."
                },
                {
                  "step": "$f^{-1}(x) = -8 - \\sqrt{x + 21}$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the inverse of $f(x) = x^2 - 12x + 76$ on the domain $x \\ge 6$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "6+sqrt(x-40)",
              "lines": [
                {
                  "step": "Find the inverse of $f(x) = x^2 - 12x + 76$ on the domain $x \\ge 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = (x - 6)^2 + 40$",
                  "reason": "Completing the square: half of $-12$ is $-6$, and $(x - 6)^2 = x^2 - 12x + 36$."
                },
                {
                  "step": "$(y - 6)^2 + 40 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number in the domain with $f(y) = x$."
                },
                {
                  "step": "$(y - 6)^2 = x - 40$",
                  "reason": "Adding the same number to both sides: $-40$ is added to both sides."
                },
                {
                  "step": "$y - 6 = \\sqrt{x - 40}$",
                  "reason": "Restricting the domain: $y \\ge 6$, so $y - 6$ is at least $0$; of the two numbers whose square is $x - 40$ it is the positive square root."
                },
                {
                  "step": "$f^{-1}(x) = 6 + \\sqrt{x - 40}$",
                  "reason": "Adding the same number to both sides: $6$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{-1}(x)$ for $x \\ge -5$, where $f(x) = \\sqrt{12x + 22} - 5$.",
            "lines": [
              {
                "step": "Find $f^{-1}(x)$ for $x \\ge -5$, where $f(x) = \\sqrt{12x + 22} - 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{12y + 22} - 5 = x$",
                "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
              },
              {
                "step": "$\\sqrt{12y + 22} = x + 5$",
                "reason": "Adding the same number to both sides: $5$ is added to both sides."
              },
              {
                "step": "Here $x + 5 \\ge 0$, so squaring both sides loses no solution.",
                "reason": "Raising both sides to a power: squaring gives a new solution only where the two sides have opposite signs; a square root is at least $0$, and $x + 5 \\ge 0$ since $x \\ge -5$."
              },
              {
                "step": "$12y + 22 = (x + 5)^2$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
              },
              {
                "step": "$12y = (x + 5)^2 - 22$",
                "reason": "Adding the same number to both sides: $-22$ is added to both sides."
              },
              {
                "step": "$f^{-1}(x) = \\dfrac{(x + 5)^2 - 22}{12}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{-1}(x)$ for $x \\ge 9$, where $f(x) = \\sqrt{12x - 14} + 9$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((x-9)^2+14)/12",
              "lines": [
                {
                  "step": "Find $f^{-1}(x)$ for $x \\ge 9$, where $f(x) = \\sqrt{12x - 14} + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{12y - 14} + 9 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$\\sqrt{12y - 14} = x - 9$",
                  "reason": "Adding the same number to both sides: $-9$ is added to both sides."
                },
                {
                  "step": "Here $x - 9 \\ge 0$, so squaring both sides loses no solution.",
                  "reason": "Raising both sides to a power: squaring gives a new solution only where the two sides have opposite signs; a square root is at least $0$, and $x - 9 \\ge 0$ since $x \\ge 9$."
                },
                {
                  "step": "$12y - 14 = (x - 9)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$12y = (x - 9)^2 + 14$",
                  "reason": "Adding the same number to both sides: $14$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{(x - 9)^2 + 14}{12}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(x)$ for $x \\ge 20$, where $f(x) = \\sqrt{5x - 17} + 20$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((x-20)^2+17)/5",
              "lines": [
                {
                  "step": "Find $f^{-1}(x)$ for $x \\ge 20$, where $f(x) = \\sqrt{5x - 17} + 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{5y - 17} + 20 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$\\sqrt{5y - 17} = x - 20$",
                  "reason": "Adding the same number to both sides: $-20$ is added to both sides."
                },
                {
                  "step": "Here $x - 20 \\ge 0$, so squaring both sides loses no solution.",
                  "reason": "Raising both sides to a power: squaring gives a new solution only where the two sides have opposite signs; a square root is at least $0$, and $x - 20 \\ge 0$ since $x \\ge 20$."
                },
                {
                  "step": "$5y - 17 = (x - 20)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$5y = (x - 20)^2 + 17$",
                  "reason": "Adding the same number to both sides: $17$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{(x - 20)^2 + 17}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(x)$ for $x \\ge -20$, where $f(x) = \\sqrt{8x - 40} - 20$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "((x+20)^2+40)/8",
              "lines": [
                {
                  "step": "Find $f^{-1}(x)$ for $x \\ge -20$, where $f(x) = \\sqrt{8x - 40} - 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{8y - 40} - 20 = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$\\sqrt{8y - 40} = x + 20$",
                  "reason": "Adding the same number to both sides: $20$ is added to both sides."
                },
                {
                  "step": "Here $x + 20 \\ge 0$, so squaring both sides loses no solution.",
                  "reason": "Raising both sides to a power: squaring gives a new solution only where the two sides have opposite signs; a square root is at least $0$, and $x + 20 \\ge 0$ since $x \\ge -20$."
                },
                {
                  "step": "$8y - 40 = (x + 20)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$8y = (x + 20)^2 + 40$",
                  "reason": "Adding the same number to both sides: $40$ is added to both sides."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{(x + 20)^2 + 40}{8}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t160-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = -3x^2 - 36x - 136$, on the domain $x \\le -5$, has an inverse.",
            "lines": [
              {
                "step": "Decide whether $f(x) = -3x^2 - 36x - 136$, on the domain $x \\le -5$, has an inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = -3(x + 6)^2 - 28$",
                "reason": "Completing the square: $-3$ is taken out of the two terms in $x$, and the square is completed."
              },
              {
                "step": "$f(-7) = -3(-7)^2 - 36(-7) - 136 = -31$",
                "reason": "Substituting a value: $-7$ is in the domain, since it is at most $-5$."
              },
              {
                "step": "$f(-5) = -3(-5)^2 - 36(-5) - 136 = -31$",
                "reason": "Substituting a value: $-5$ is in the domain, since it is at most $-5$."
              },
              {
                "step": "No: the two inputs $-7$ and $-5$ give the one output $-31$.",
                "reason": "A function with one output from two inputs has no inverse."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = -5x^2 + 30x - 52$, on the domain $x \\ge 6$, has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = -5x^2 + 30x - 52$, on the domain $x \\ge 6$, has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = -5(x - 3)^2 - 7$",
                  "reason": "Completing the square: $-5$ is taken out of the two terms in $x$, and the square is completed."
                },
                {
                  "step": "Let $u$ and $w$ be inputs of the domain with $f(u) = f(w)$.",
                  "reason": "Direct proof: two inputs with one output are taken."
                },
                {
                  "step": "$-5(u - 3)^2 - 7 = -5(w - 3)^2 - 7$",
                  "reason": "Substituting a value: $u$ and $w$ go where $x$ stands in line 2."
                },
                {
                  "step": "$-5(u - 3)^2 = -5(w - 3)^2$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "$(u - 3)^2 = (w - 3)^2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                },
                {
                  "step": "$u - 3 = w - 3$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $u$ and $w$ are at least $6$, so $u - 3$ and $w - 3$ are both above $0$ and cannot be opposite numbers."
                },
                {
                  "step": "$u = w$",
                  "reason": "Adding the same number to both sides: $3$ is added to both sides."
                },
                {
                  "step": "Yes: no output of $f$ on this domain comes from two different inputs.",
                  "reason": "Restricting the domain: on a domain where each output comes from one input, the input can be read back from the output, so $f$ has an inverse there."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = -5x^2 + 90x - 409$, on the domain $x \\ge 7$, has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = -5x^2 + 90x - 409$, on the domain $x \\ge 7$, has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = -5(x - 9)^2 - 4$",
                  "reason": "Completing the square: $-5$ is taken out of the two terms in $x$, and the square is completed."
                },
                {
                  "step": "$f(7) = -5(7)^2 + 90(7) - 409 = -24$",
                  "reason": "Substituting a value: $7$ is in the domain, since it is at least $7$."
                },
                {
                  "step": "$f(11) = -5(11)^2 + 90(11) - 409 = -24$",
                  "reason": "Substituting a value: $11$ is in the domain, since it is at least $7$."
                },
                {
                  "step": "No: the two inputs $7$ and $11$ give the one output $-24$.",
                  "reason": "A function with one output from two inputs has no inverse."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = -5x^2 + 70x - 254$, on the domain $x \\ge 9$, has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = -5x^2 + 70x - 254$, on the domain $x \\ge 9$, has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = -5(x - 7)^2 - 9$",
                  "reason": "Completing the square: $-5$ is taken out of the two terms in $x$, and the square is completed."
                },
                {
                  "step": "Let $u$ and $w$ be inputs of the domain with $f(u) = f(w)$.",
                  "reason": "Direct proof: two inputs with one output are taken."
                },
                {
                  "step": "$-5(u - 7)^2 - 9 = -5(w - 7)^2 - 9$",
                  "reason": "Substituting a value: $u$ and $w$ go where $x$ stands in line 2."
                },
                {
                  "step": "$-5(u - 7)^2 = -5(w - 7)^2$",
                  "reason": "Adding the same number to both sides: $9$ is added to both sides."
                },
                {
                  "step": "$(u - 7)^2 = (w - 7)^2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                },
                {
                  "step": "$u - 7 = w - 7$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $u$ and $w$ are at least $9$, so $u - 7$ and $w - 7$ are both above $0$ and cannot be opposite numbers."
                },
                {
                  "step": "$u = w$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "Yes: no output of $f$ on this domain comes from two different inputs.",
                  "reason": "Restricting the domain: on a domain where each output comes from one input, the input can be read back from the output, so $f$ has an inverse there."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t160-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $f^{-1}(2)$, where $f(x) = \\dfrac{9x - 23}{3x + 4}$.",
            "lines": [
              {
                "step": "Find $f^{-1}(2)$, where $f(x) = \\dfrac{9x - 23}{3x + 4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{9y - 23}{3y + 4} = 2$",
                "reason": "Inverse function: $f(f^{-1}(2)) = 2$, so $y = f^{-1}(2)$ is the number with $f(y) = 2$."
              },
              {
                "step": "$9y - 23 = 6y + 8$",
                "reason": "Cross-multiplying: both sides are multiplied by $3y + 4$, and the bracket is multiplied out."
              },
              {
                "step": "$3y = 31$",
                "reason": "Adding the same number to both sides: $-6y$ and $23$ are added to both sides."
              },
              {
                "step": "$f^{-1}(2) = \\dfrac{31}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, and $y$ is $f^{-1}(2)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{-1}(-3)$, where $f(x) = \\dfrac{7x - 19}{-3x + 9}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find $f^{-1}(-3)$, where $f(x) = \\dfrac{7x - 19}{-3x + 9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7y - 19}{-3y + 9} = -3$",
                  "reason": "Inverse function: $f(f^{-1}(-3)) = -3$, so $y = f^{-1}(-3)$ is the number with $f(y) = -3$."
                },
                {
                  "step": "$7y - 19 = 9y - 27$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-3y + 9$, and the bracket is multiplied out."
                },
                {
                  "step": "$-2y = -8$",
                  "reason": "Adding the same number to both sides: $-9y$ and $19$ are added to both sides."
                },
                {
                  "step": "$f^{-1}(-3) = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$, and $y$ is $f^{-1}(-3)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(2)$, where $f(x) = \\dfrac{3x - 25}{-6x - 20}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Find $f^{-1}(2)$, where $f(x) = \\dfrac{3x - 25}{-6x - 20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3y - 25}{-6y - 20} = 2$",
                  "reason": "Inverse function: $f(f^{-1}(2)) = 2$, so $y = f^{-1}(2)$ is the number with $f(y) = 2$."
                },
                {
                  "step": "$3y - 25 = -12y - 40$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-6y - 20$, and the bracket is multiplied out."
                },
                {
                  "step": "$15y = -15$",
                  "reason": "Adding the same number to both sides: $12y$ and $25$ are added to both sides."
                },
                {
                  "step": "$f^{-1}(2) = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$, and $y$ is $f^{-1}(2)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(8)$, where $f(x) = \\dfrac{7x + 9}{-6x + 6}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "39/55",
              "lines": [
                {
                  "step": "Find $f^{-1}(8)$, where $f(x) = \\dfrac{7x + 9}{-6x + 6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7y + 9}{-6y + 6} = 8$",
                  "reason": "Inverse function: $f(f^{-1}(8)) = 8$, so $y = f^{-1}(8)$ is the number with $f(y) = 8$."
                },
                {
                  "step": "$7y + 9 = -48y + 48$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-6y + 6$, and the bracket is multiplied out."
                },
                {
                  "step": "$55y = 39$",
                  "reason": "Adding the same number to both sides: $48y$ and $-9$ are added to both sides."
                },
                {
                  "step": "$f^{-1}(8) = \\dfrac{39}{55}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $55$, and $y$ is $f^{-1}(8)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a$, where $f(x) = \\dfrac{(a + 9)x - 4}{-5x - 8}$ is its own inverse.",
            "lines": [
              {
                "step": "Find $a$, where $f(x) = \\dfrac{(a + 9)x - 4}{-5x - 8}$ is its own inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{(a + 9)y - 4}{-5y - 8} = x$",
                "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
              },
              {
                "step": "$(a + 9)y - 4 = -5xy - 8x$",
                "reason": "Cross-multiplying: both sides are multiplied by $-5y - 8$, and the bracket is multiplied out."
              },
              {
                "step": "$y(a + 9 + 5x) = -8x + 4$",
                "reason": "Collecting the terms with the letter and factoring it out: $5xy$ and $4$ are added to both sides, and $y$ is taken out."
              },
              {
                "step": "$f^{-1}(x) = \\dfrac{-8x + 4}{a + 9 + 5x}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by the bracket."
              },
              {
                "step": "$(-8x + 4)(-5x - 8) = ((a + 9)x - 4)(a + 9 + 5x)$",
                "reason": "Cross-multiplying: its own inverse means $f^{-1}(x) = f(x)$ for every $x$, and the two fractions are cross-multiplied."
              },
              {
                "step": "$40 = 5(a + 9)$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of the two sides are equal."
              },
              {
                "step": "$a + 9 = 8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$a = -1$",
                "reason": "Adding the same number to both sides: $-9$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, where $f(x) = \\dfrac{(a - 7)x - 17}{-7x - 16}$ is its own inverse.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 23",
              "lines": [
                {
                  "step": "Find $a$, where $f(x) = \\dfrac{(a - 7)x - 17}{-7x - 16}$ is its own inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(a - 7)y - 17}{-7y - 16} = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$(a - 7)y - 17 = -7xy - 16x$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-7y - 16$, and the bracket is multiplied out."
                },
                {
                  "step": "$y(a - 7 + 7x) = -16x + 17$",
                  "reason": "Collecting the terms with the letter and factoring it out: $7xy$ and $17$ are added to both sides, and $y$ is taken out."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-16x + 17}{a - 7 + 7x}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by the bracket."
                },
                {
                  "step": "$(-16x + 17)(-7x - 16) = ((a - 7)x - 17)(a - 7 + 7x)$",
                  "reason": "Cross-multiplying: its own inverse means $f^{-1}(x) = f(x)$ for every $x$, and the two fractions are cross-multiplied."
                },
                {
                  "step": "$112 = 7(a - 7)$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of the two sides are equal."
                },
                {
                  "step": "$a - 7 = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$a = 23$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $a$, where $f(x) = \\dfrac{(a + 5)x + 20}{-3x - 16}$ is its own inverse.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 11",
              "lines": [
                {
                  "step": "Find $a$, where $f(x) = \\dfrac{(a + 5)x + 20}{-3x - 16}$ is its own inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(a + 5)y + 20}{-3y - 16} = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$(a + 5)y + 20 = -3xy - 16x$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-3y - 16$, and the bracket is multiplied out."
                },
                {
                  "step": "$y(a + 5 + 3x) = -16x - 20$",
                  "reason": "Collecting the terms with the letter and factoring it out: $3xy$ and $-20$ are added to both sides, and $y$ is taken out."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-16x - 20}{a + 5 + 3x}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by the bracket."
                },
                {
                  "step": "$(-16x - 20)(-3x - 16) = ((a + 5)x + 20)(a + 5 + 3x)$",
                  "reason": "Cross-multiplying: its own inverse means $f^{-1}(x) = f(x)$ for every $x$, and the two fractions are cross-multiplied."
                },
                {
                  "step": "$48 = 3(a + 5)$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of the two sides are equal."
                },
                {
                  "step": "$a + 5 = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$a = 11$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $a$, where $f(x) = \\dfrac{(a + 6)x - 4}{-5x + 14}$ is its own inverse.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -20",
              "lines": [
                {
                  "step": "Find $a$, where $f(x) = \\dfrac{(a + 6)x - 4}{-5x + 14}$ is its own inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(a + 6)y - 4}{-5y + 14} = x$",
                  "reason": "Inverse function: $y = f^{-1}(x)$ is the number with $f(y) = x$."
                },
                {
                  "step": "$(a + 6)y - 4 = -5xy + 14x$",
                  "reason": "Cross-multiplying: both sides are multiplied by $-5y + 14$, and the bracket is multiplied out."
                },
                {
                  "step": "$y(a + 6 + 5x) = 14x + 4$",
                  "reason": "Collecting the terms with the letter and factoring it out: $5xy$ and $4$ are added to both sides, and $y$ is taken out."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{14x + 4}{a + 6 + 5x}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by the bracket."
                },
                {
                  "step": "$(14x + 4)(-5x + 14) = ((a + 6)x - 4)(a + 6 + 5x)$",
                  "reason": "Cross-multiplying: its own inverse means $f^{-1}(x) = f(x)$ for every $x$, and the two fractions are cross-multiplied."
                },
                {
                  "step": "$-70 = 5(a + 6)$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of the two sides are equal."
                },
                {
                  "step": "$a + 6 = -14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$a = -20$",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t160-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(-1) - f^{-1}(-2)$, where $f(x) = 3x - 23$, and write that line right.",
            "given": [
              "$f(-1) = 3(-1) - 23 = -26$",
              "$f(-2) = 3(-2) - 23 = -29$",
              "$f^{-1}(-2) = -\\dfrac{1}{29}$",
              "$f(-1) - f^{-1}(-2) = -26 + \\dfrac{1}{29} = -\\dfrac{753}{29}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(-1) - f^{-1}(-2)$, where $f(x) = 3x - 23$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 reads $f^{-1}(-2)$ as $1$ divided by an output of $f$.",
                "reason": "Inverse function: $f^{-1}$ names the function that undoes $f$; the $-1$ is part of its name and never a power of an output."
              },
              {
                "step": "Line 3 written right is $f^{-1}(-2) = 7$.",
                "reason": "Inverse function: $f^{-1}(-2)$ is the number $y$ with $f(y) = -2$, and $3y - 23 = -2$ gives $y = 7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f^{-1}(6) + f(3)$, where $f(x) = 9x - 30$, and write that line right.",
              "given": [
                "$f^{-1}(6) = \\dfrac{1}{9(6) - 30} = \\dfrac{1}{24}$",
                "$f(3) = 9(3) - 30 = -3$",
                "$f^{-1}(6) + f(3) = \\dfrac{1}{24} - 3 = -\\dfrac{71}{24}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f^(-1)(6) = 4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{-1}(6) + f(3)$, where $f(x) = 9x - 30$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 reads $f^{-1}(6)$ as $1$ divided by an output of $f$.",
                  "reason": "Inverse function: $f^{-1}$ names the function that undoes $f$; the $-1$ is part of its name and never a power of an output."
                },
                {
                  "step": "Line 1 written right is $f^{-1}(6) = 4$.",
                  "reason": "Inverse function: $f^{-1}(6)$ is the number $y$ with $f(y) = 6$, and $9y - 30 = 6$ gives $y = 4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(5) + f^{-1}(5)$, where $f(x) = -9x - 26$, and write that line right.",
              "given": [
                "$f(5) = -9(5) - 26 = -71$",
                "$f^{-1}(5) = -\\dfrac{1}{71}$",
                "$f(5) + f^{-1}(5) = -71 - \\dfrac{1}{71} = -\\dfrac{5042}{71}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f^(-1)(5) = -31/9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(5) + f^{-1}(5)$, where $f(x) = -9x - 26$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 reads $f^{-1}(5)$ as $1$ divided by an output of $f$.",
                  "reason": "Inverse function: $f^{-1}$ names the function that undoes $f$; the $-1$ is part of its name and never a power of an output."
                },
                {
                  "step": "Line 2 written right is $f^{-1}(5) = -\\dfrac{31}{9}$.",
                  "reason": "Inverse function: $f^{-1}(5)$ is the number $y$ with $f(y) = 5$, and $-9y - 26 = 5$ gives $y = -\\dfrac{31}{9}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(-8) - f^{-1}(9)$, where $f(x) = 10x + 24$, and write that line right.",
              "given": [
                "$f(-8) = 10(-8) + 24 = -56$",
                "$f(9) = 10(9) + 24 = 114$",
                "$f^{-1}(9) = \\dfrac{1}{114}$",
                "$f(-8) - f^{-1}(9) = -56 - \\dfrac{1}{114} = -\\dfrac{6385}{114}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f^(-1)(9) = -3/2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(-8) - f^{-1}(9)$, where $f(x) = 10x + 24$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 reads $f^{-1}(9)$ as $1$ divided by an output of $f$.",
                  "reason": "Inverse function: $f^{-1}$ names the function that undoes $f$; the $-1$ is part of its name and never a power of an output."
                },
                {
                  "step": "Line 3 written right is $f^{-1}(9) = -\\dfrac{3}{2}$.",
                  "reason": "Inverse function: $f^{-1}(9)$ is the number $y$ with $f(y) = 9$, and $10y + 24 = 9$ gives $y = -\\dfrac{3}{2}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\ge 7$, where $f(x) = x^2 - 14x + 67$, and write that line right.",
            "given": [
              "$f(x) = (x - 7)^2 + 18$",
              "$(y - 7)^2 + 18 = x$",
              "$(y - 7)^2 = x + 18$",
              "$y - 7 = \\sqrt{x + 18}$",
              "$f^{-1}(x) = 7 + \\sqrt{x + 18}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\ge 7$, where $f(x) = x^2 - 14x + 67$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 loses a sign: $-18$ is added to both sides, so the right side is $x - 18$; line 3 keeps the sign of $18$.",
                "reason": "Adding the same number to both sides and restricting the domain: a number moved to the other side changes its sign, a number copied keeps it, and the domain fixes the sign of the root."
              },
              {
                "step": "Line 3 written right is $(y - 7)^2 = x - 18$.",
                "reason": "Restricting the domain and Inverse function: each line after it then gives the inverse on the domain $x \\ge 7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\ge -12$, where $f(x) = x^2 + 24x + 183$, and write that line right.",
              "given": [
                "$f(x) = (x + 12)^2 + 39$",
                "$(y + 12)^2 + 39 = x$",
                "$(y + 12)^2 = x - 39$",
                "$y + 12 = -\\sqrt{x - 39}$",
                "$f^{-1}(x) = -12 - \\sqrt{x - 39}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y+12 = sqrt(x-39)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\ge -12$, where $f(x) = x^2 + 24x + 183$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 loses a sign: on the domain $y \\ge -12$ the number $y + 12$ is at least $0$, so it is the positive square root, and line 4 has the other sign.",
                  "reason": "Adding the same number to both sides and restricting the domain: a number moved to the other side changes its sign, a number copied keeps it, and the domain fixes the sign of the root."
                },
                {
                  "step": "Line 4 written right is $y + 12 = \\sqrt{x - 39}$.",
                  "reason": "Restricting the domain and Inverse function: each line after it then gives the inverse on the domain $x \\ge -12$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\ge -4$, where $f(x) = x^2 + 8x + 47$, and write that line right.",
              "given": [
                "$f(x) = (x + 4)^2 + 31$",
                "$(y + 4)^2 + 31 = x$",
                "$(y + 4)^2 = x - 31$",
                "$y + 4 = \\sqrt{x - 31}$",
                "$f^{-1}(x) = 4 + \\sqrt{x - 31}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: f^(-1)(x) = -4+sqrt(x-31)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\ge -4$, where $f(x) = x^2 + 8x + 47$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 loses a sign: $-4$ is added to both sides of line 4, and line 5 has $4$.",
                  "reason": "Adding the same number to both sides and restricting the domain: a number moved to the other side changes its sign, a number copied keeps it, and the domain fixes the sign of the root."
                },
                {
                  "step": "Line 5 written right is $f^{-1}(x) = -4 + \\sqrt{x - 31}$.",
                  "reason": "Restricting the domain and Inverse function: each line after it then gives the inverse on the domain $x \\ge -4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\le -8$, where $f(x) = x^2 + 16x + 42$, and write that line right.",
              "given": [
                "$f(x) = (x + 8)^2 - 22$",
                "$(y + 8)^2 + 22 = x$",
                "$(y + 8)^2 = x - 22$",
                "$y + 8 = -\\sqrt{x - 22}$",
                "$f^{-1}(x) = -8 - \\sqrt{x - 22}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (y+8)^2-22 = x",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the inverse of $f$ on the domain $x \\le -8$, where $f(x) = x^2 + 16x + 42$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 loses a sign: the square has $-22$ added, as line 1 shows, and line 2 has $22$.",
                  "reason": "Adding the same number to both sides and restricting the domain: a number moved to the other side changes its sign, a number copied keeps it, and the domain fixes the sign of the root."
                },
                {
                  "step": "Line 2 written right is $(y + 8)^2 - 22 = x$.",
                  "reason": "Restricting the domain and Inverse function: each line after it then gives the inverse on the domain $x \\le -8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t160-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ cubes its input and then takes $2$ from the result.",
            "lines": [
              {
                "step": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ cubes its input and then takes $2$ from the result.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = x^3 - 2$",
                "reason": "Writing a sentence as an equation: each step of $f$ becomes its operation, in the sentence's order."
              },
              {
                "step": "The inverse adds $2$ to its input and then takes the cube root of the result.",
                "reason": "Inverse function: $f^{-1}$ sends each output of $f$ back to its input, so it undoes the last step of $f$ first."
              },
              {
                "step": "$y = \\sqrt[3]{x + 2}$",
                "reason": "Writing a sentence as an equation: each step of the inverse becomes its operation, in order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ multiplies its input by $8$ and then takes the result from $37$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (37-x)/8",
              "lines": [
                {
                  "step": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ multiplies its input by $8$ and then takes the result from $37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 37 - 8x$",
                  "reason": "Writing a sentence as an equation: each step of $f$ becomes its operation, in the sentence's order."
                },
                {
                  "step": "The inverse takes its input from $37$ and then divides the result by $8$.",
                  "reason": "Inverse function: $f^{-1}$ sends each output of $f$ back to its input, so it undoes the last step of $f$ first."
                },
                {
                  "step": "$y = \\dfrac{37 - x}{8}$",
                  "reason": "Writing a sentence as an equation: each step of the inverse becomes its operation, in order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ multiplies its input by $7$ and then adds $22$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-22)/7",
              "lines": [
                {
                  "step": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ multiplies its input by $7$ and then adds $22$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 7x + 22$",
                  "reason": "Writing a sentence as an equation: each step of $f$ becomes its operation, in the sentence's order."
                },
                {
                  "step": "The inverse takes $22$ from its input and then divides the result by $7$.",
                  "reason": "Inverse function: $f^{-1}$ sends each output of $f$ back to its input, so it undoes the last step of $f$ first."
                },
                {
                  "step": "$y = \\dfrac{x - 22}{7}$",
                  "reason": "Writing a sentence as an equation: each step of the inverse becomes its operation, in order."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ adds $54$ to its input and then multiplies the result by $11$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x/11-54",
              "lines": [
                {
                  "step": "Write an equation for $y = f^{-1}(x)$, with $y$ alone on the left, where the function $f$ adds $54$ to its input and then multiplies the result by $11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = 11(x + 54)$",
                  "reason": "Writing a sentence as an equation: each step of $f$ becomes its operation, in the sentence's order."
                },
                {
                  "step": "The inverse divides its input by $11$ and then takes $54$ from the result.",
                  "reason": "Inverse function: $f^{-1}$ sends each output of $f$ back to its input, so it undoes the last step of $f$ first."
                },
                {
                  "step": "$y = \\dfrac{x}{11} - 54$",
                  "reason": "Writing a sentence as an equation: each step of the inverse becomes its operation, in order."
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
      "id": "t160-p1",
      "method": "proof by contradiction",
      "statement": "If a function $f$ has $f(a) = f(b)$ for two different numbers $a$ and $b$ of its domain, then $f$ has no inverse.",
      "idea": "An inverse would have to send the one output $f(a)$ back to $a$ and also to $b$. A function gives exactly one output for each input, so $a$ and $b$ would be equal, which they are not.",
      "lines": [
        {
          "line": "Suppose $f$ has an inverse $g$.",
          "reason": "Proof by contradiction: the opposite of the claim is assumed."
        },
        {
          "line": "Then $g(f(a)) = a$.",
          "reason": "Inverse function: $g(f(x)) = x$ for each $x$ in the domain of $f$, and $a$ is in it."
        },
        {
          "line": "And $g(f(b)) = b$.",
          "reason": "Inverse function: $g(f(x)) = x$ for each $x$ in the domain of $f$, and $b$ is in it."
        },
        {
          "line": "So $g(f(a)) = g(f(b))$.",
          "reason": "Function: $f(a)$ and $f(b)$ are one number by the hypothesis, and $g$ gives exactly one output for it."
        },
        {
          "line": "So $a = b$.",
          "reason": "Transitive property: by lines 2, 4 and 3."
        },
        {
          "line": "This contradicts the hypothesis that $a$ and $b$ are different, so $f$ has no inverse.",
          "reason": "Proof by contradiction: the assumption of line 1 leads to a false statement, so it is false."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t160-s1",
      "method": "direct proof",
      "statement": "Prove that a function has at most one inverse: if $g$ and $h$ are both inverses of a function $f$, then $g(x) = h(x)$ for each $x$ in the range of $f$. Facts it may use: inverse function, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the range of $f$, the domain of $h$.",
            "reason": "Inverse function: the inverse $h$ takes the outputs of $f$ as its inputs."
          },
          {
            "line": "Then $f(h(x)) = x$.",
            "reason": "Inverse function: $h$ is an inverse of $f$."
          },
          {
            "line": "So $g(f(h(x))) = g(x)$.",
            "reason": "Substituting a value: $f(h(x))$ is replaced by $x$, which equals it by line 2."
          },
          {
            "line": "Also $g(f(h(x))) = h(x)$.",
            "reason": "Inverse function: $g(f(y)) = y$ for each $y$ in the domain of $f$, and $y = h(x)$ is in it."
          },
          {
            "line": "Therefore $g(x) = h(x)$.",
            "reason": "Transitive property: by lines 3 and 4, both equal $g(f(h(x)))$."
          }
        ]
      }
    },
    {
      "id": "t160-s3",
      "method": "proof by contradiction",
      "statement": "Prove that for numbers $b$ and $c$, the function $f(x) = (x - b)^2 + c$ on the domain $x \\ge b$ never gives one output from two different inputs. Facts it may use: restricting the domain, adding the same number to both sides, if $x^2 = a^2$ then $x = a$ or $x = -a$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $u$ and $w$ are different numbers, both at least $b$, with $f(u) = f(w)$.",
            "reason": "Proof by contradiction: the opposite of the claim is assumed."
          },
          {
            "line": "Then $(u - b)^2 + c = (w - b)^2 + c$.",
            "reason": "Substituting a value: $u$ and $w$ go where $x$ stands."
          },
          {
            "line": "So $(u - b)^2 = (w - b)^2$.",
            "reason": "Adding the same number to both sides: $-c$ is added to both sides."
          },
          {
            "line": "So $u - b = w - b$ or $u - b = -(w - b)$.",
            "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
          },
          {
            "line": "The first gives $u = w$, which contradicts line 1.",
            "reason": "Adding the same number to both sides: $b$ is added to both sides."
          },
          {
            "line": "In the second, $u - b$ is at least $0$ and $-(w - b)$ is at most $0$, so both are $0$.",
            "reason": "Restricting the domain: $u \\ge b$ and $w \\ge b$ by line 1."
          },
          {
            "line": "Then $u = b$ and $w = b$, so $u = w$, which contradicts line 1.",
            "reason": "Adding the same number to both sides: $b$ is added to $u - b = 0$ and to $w - b = 0$."
          },
          {
            "line": "Therefore no two different inputs of the domain give one output.",
            "reason": "Proof by contradiction: both cases of line 4 contradict the assumption of line 1."
          }
        ]
      }
    },
    {
      "id": "t160-s4",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ have inverses $f^{-1}$ and $g^{-1}$, with every output of $g$ in the domain of $f$ and every output of $f^{-1}$ an output of $g$, then $t(x) = g^{-1}(f^{-1}(x))$ gives $f(g(t(x))) = x$ for each $x$ in the domain of $f^{-1}$. Facts it may use: inverse function, composition, substituting a value, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number in the domain of $f^{-1}$.",
            "reason": "Domain: the claim is about each such input."
          },
          {
            "line": "So $f(g(t(x))) = f(g(g^{-1}(f^{-1}(x))))$.",
            "reason": "Composition $f(g(x))$: $t(x)$ is $g^{-1}(f^{-1}(x))$."
          },
          {
            "line": "And $g(g^{-1}(f^{-1}(x))) = f^{-1}(x)$.",
            "reason": "Inverse function: $g(g^{-1}(y)) = y$ for each $y$ in the domain of $g^{-1}$, here $y = f^{-1}(x)$, and $f^{-1}(x)$ is an output of $g$ by the hypothesis."
          },
          {
            "line": "So $f(g(t(x))) = f(f^{-1}(x))$.",
            "reason": "Substituting a value: by line 3 inside line 2."
          },
          {
            "line": "And $f(f^{-1}(x)) = x$.",
            "reason": "Inverse function: $f^{-1}$ is the inverse of $f$."
          },
          {
            "line": "Therefore $f(g(t(x))) = x$.",
            "reason": "Transitive property: by lines 4 and 5."
          }
        ]
      }
    }
  ]
}
