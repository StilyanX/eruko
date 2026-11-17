export default {
  "number": 109,
  "title": "Linear equations in one variable",
  "section": 2,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "77-88, 98-102"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $-6x = 21$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = -7/2",
    "solution": [
      "Solve $-6x = 21$.",
      "$-\\dfrac{1}{6}\\cdot (-6x) = -\\dfrac{1}{6}\\cdot 21$",
      "$x = -\\dfrac{7}{2}$"
    ]
  },
  "ideas": [
    {
      "name": "Linear equations and their solutions",
      "concrete": "In $4x - 3 = 9$ the letter $x$ appears only as a number times $x$. The value $x = 3$ makes both sides $9$, and no other value does.",
      "general": "A **linear equation in one variable** is an equation in one letter in which the letter appears only as a number times its first power, such as $5x + 2 = 3x - 8$. A **solution** is a value of the letter that makes the two sides equal; to solve the equation is to find every solution. **Isolating the variable** finds them: adding the same number to both sides and multiplying or dividing both sides by the same nonzero number keep the two sides equal, so each step keeps every solution and adds none, until the letter stands alone on one side."
    },
    {
      "name": "Checking a solution",
      "concrete": "The value $x = 3$ in $4x - 3 = 9$ gives $4(3) - 3 = 9$ on the left, which is the right side, so $x = 3$ is a solution.",
      "general": "**Checking a solution**: a number is a solution of an equation exactly when substituting it for the letter makes the two sides come out equal. A value that makes them differ is not a solution, and the working that found it holds a fault."
    },
    {
      "name": "Clearing fractions",
      "concrete": "Multiplying both sides of $\\dfrac{x}{3} + \\dfrac{1}{2} = 2$ by $6$ gives $2x + 3 = 12$, with no fraction left.",
      "general": "**Clearing fractions**: multiplying both sides of an equation by the lowest common denominator of its fractions keeps the two sides equal and leaves whole numbers. An equation with decimals is cleared the same way by $10$, $100$ or the power of ten that matches the most decimal places."
    },
    {
      "name": "No solution, or every number",
      "concrete": "In $2x + 5 = 2x + 1$ taking $2x$ from both sides leaves $5 = 1$, so no number works. In $2x + 5 = 2x + 5$ it leaves $5 = 5$, so every number works.",
      "general": "For all numbers $a$, $b$, $c$ and $d$, the equation $ax + b = cx + d$ has exactly one solution when $a \\ne c$. When $a = c$, the terms in $x$ cancel: it is an **equation with no solution** when $b \\ne d$, and an **equation true for every value** of $x$ when $b = d$."
    }
  ],
  "kinds": [
    {
      "id": "t109-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $x - 25 = -8$.",
            "lines": [
              {
                "step": "Solve $x - 25 = -8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x - 25 + 25 = -8 + 25$",
                "reason": "Adding the same number to both sides: adding $25$ to both sides keeps them equal."
              },
              {
                "step": "$x = 17$",
                "reason": "Isolating the variable: the two numbers on the left add to $0$ and leave $x$ alone, and the right side works out to $17$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x + 12 = 4$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -8",
              "lines": [
                {
                  "step": "Solve $x + 12 = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 12 - 12 = 4 - 12$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides keeps them equal."
                },
                {
                  "step": "$x = -8$",
                  "reason": "Isolating the variable: the two numbers on the left add to $0$ and leave $x$ alone, and the right side works out to $-8$."
                }
              ]
            },
            {
              "prompt": "Solve $y - 15 = -4$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 11",
              "lines": [
                {
                  "step": "Solve $y - 15 = -4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 15 + 15 = -4 + 15$",
                  "reason": "Adding the same number to both sides: adding $15$ to both sides keeps them equal."
                },
                {
                  "step": "$y = 11$",
                  "reason": "Isolating the variable: the two numbers on the left add to $0$ and leave $y$ alone, and the right side works out to $11$."
                }
              ]
            },
            {
              "prompt": "Solve $z + 8 = 31$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = 23",
              "lines": [
                {
                  "step": "Solve $z + 8 = 31$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z + 8 - 8 = 31 - 8$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides keeps them equal."
                },
                {
                  "step": "$z = 23$",
                  "reason": "Isolating the variable: the two numbers on the left add to $0$ and leave $z$ alone, and the right side works out to $23$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $-4x = 18$.",
            "lines": [
              {
                "step": "Solve $-4x = 18$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-\\dfrac{1}{4}\\cdot (-4x) = -\\dfrac{1}{4}\\cdot 18$",
                "reason": "Multiplying both sides by the same number: the reciprocal of the coefficient $-4$ is $-\\dfrac{1}{4}$, and multiplying both sides by it keeps them equal."
              },
              {
                "step": "$x = -\\dfrac{9}{2}$",
                "reason": "Isolating the variable: a number times its reciprocal is $1$, which leaves $x$ alone on the left, and the right side works out to $-\\dfrac{9}{2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $8x = -52$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -13/2",
              "lines": [
                {
                  "step": "Solve $8x = -52$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{8}\\cdot 8x = \\dfrac{1}{8}\\cdot (-52)$",
                  "reason": "Multiplying both sides by the same number: the reciprocal of the coefficient $8$ is $\\dfrac{1}{8}$, and multiplying both sides by it keeps them equal."
                },
                {
                  "step": "$x = -\\dfrac{13}{2}$",
                  "reason": "Isolating the variable: a number times its reciprocal is $1$, which leaves $x$ alone on the left, and the right side works out to $-\\dfrac{13}{2}$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{2}{3}y = -8$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -12",
              "lines": [
                {
                  "step": "Solve $\\dfrac{2}{3}y = -8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{2}\\cdot \\dfrac{2}{3}y = \\dfrac{3}{2}\\cdot (-8)$",
                  "reason": "Multiplying both sides by the same number: the reciprocal of the coefficient $\\dfrac{2}{3}$ is $\\dfrac{3}{2}$, and multiplying both sides by it keeps them equal."
                },
                {
                  "step": "$y = -12$",
                  "reason": "Isolating the variable: a number times its reciprocal is $1$, which leaves $y$ alone on the left, and the right side works out to $-12$."
                }
              ]
            },
            {
              "prompt": "Solve $-7z = -16$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = 16/7",
              "lines": [
                {
                  "step": "Solve $-7z = -16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{1}{7}\\cdot (-7z) = -\\dfrac{1}{7}\\cdot (-16)$",
                  "reason": "Multiplying both sides by the same number: the reciprocal of the coefficient $-7$ is $-\\dfrac{1}{7}$, and multiplying both sides by it keeps them equal."
                },
                {
                  "step": "$z = \\dfrac{16}{7}$",
                  "reason": "Isolating the variable: a number times its reciprocal is $1$, which leaves $z$ alone on the left, and the right side works out to $\\dfrac{16}{7}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t109-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $x = 3$ is a solution of $4x - 5 = 2x + 1$.",
            "lines": [
              {
                "step": "Decide whether $x = 3$ is a solution of $4x - 5 = 2x + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4(3) - 5 = 7$",
                "reason": "Substituting a value: $x$ is replaced by $3$, in brackets, on the left side, and the order of operations works it out."
              },
              {
                "step": "$2(3) + 1 = 7$",
                "reason": "Substituting a value: $x$ is replaced by $3$, in brackets, on the right side, and the order of operations works it out."
              },
              {
                "step": "Yes",
                "reason": "Checking a solution: a number is a solution exactly when the two sides come out equal, and here both are $7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $x = -2$ is a solution of $5x + 3 = 2x - 1$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $x = -2$ is a solution of $5x + 3 = 2x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(-2) + 3 = -7$",
                  "reason": "Substituting a value: $x$ is replaced by $-2$, in brackets, on the left side, and the order of operations works it out."
                },
                {
                  "step": "$2(-2) - 1 = -5$",
                  "reason": "Substituting a value: $x$ is replaced by $-2$, in brackets, on the right side, and the order of operations works it out."
                },
                {
                  "step": "No",
                  "reason": "Checking a solution: a number is a solution exactly when the two sides come out equal, and here $-7$ and $-5$ differ."
                }
              ]
            },
            {
              "prompt": "Decide whether $y = 4$ is a solution of $3y - 7 = -y + 9$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $y = 4$ is a solution of $3y - 7 = -y + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3(4) - 7 = 5$",
                  "reason": "Substituting a value: $y$ is replaced by $4$, in brackets, on the left side, and the order of operations works it out."
                },
                {
                  "step": "$-(4) + 9 = 5$",
                  "reason": "Substituting a value: $y$ is replaced by $4$, in brackets, on the right side, and the order of operations works it out."
                },
                {
                  "step": "Yes",
                  "reason": "Checking a solution: a number is a solution exactly when the two sides come out equal, and here both are $5$."
                }
              ]
            },
            {
              "prompt": "Decide whether $x = 5$ is a solution of $6x - 2 = 4x + 7$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $x = 5$ is a solution of $6x - 2 = 4x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6(5) - 2 = 28$",
                  "reason": "Substituting a value: $x$ is replaced by $5$, in brackets, on the left side, and the order of operations works it out."
                },
                {
                  "step": "$4(5) + 7 = 27$",
                  "reason": "Substituting a value: $x$ is replaced by $5$, in brackets, on the right side, and the order of operations works it out."
                },
                {
                  "step": "No",
                  "reason": "Checking a solution: a number is a solution exactly when the two sides come out equal, and here $28$ and $27$ differ."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t109-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $5x + 7 = -8$.",
            "lines": [
              {
                "step": "Solve $5x + 7 = -8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x = -15$",
                "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = -3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates the variable."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3x - 11 = 16$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 9",
              "lines": [
                {
                  "step": "Solve $3x - 11 = 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x = 27$",
                  "reason": "Adding the same number to both sides: adding $11$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $-4y + 9 = 25$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -4",
              "lines": [
                {
                  "step": "Solve $-4y + 9 = 25$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4y = 16$",
                  "reason": "Adding the same number to both sides: adding $-9$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $13 + 6x = 4$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -3/2",
              "lines": [
                {
                  "step": "Solve $13 + 6x = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x = -9$",
                  "reason": "Adding the same number to both sides: adding $-13$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = -\\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ isolates the variable."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $9x - 4 = 3x + 20$.",
            "lines": [
              {
                "step": "Solve $9x - 4 = 3x + 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x - 4 = 20$",
                "reason": "Adding the same number to both sides: adding $-3x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $6x$."
              },
              {
                "step": "$6x = 24$",
                "reason": "Adding the same number to both sides: adding $4$ to both sides leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ isolates the variable."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x + 11 = 6x - 9$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5",
              "lines": [
                {
                  "step": "Solve $2x + 11 = 6x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4x + 11 = -9$",
                  "reason": "Adding the same number to both sides: adding $-6x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $-4x$."
                },
                {
                  "step": "$-4x = -20$",
                  "reason": "Adding the same number to both sides: adding $-11$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $-3y + 7 = 5y + 31$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -3",
              "lines": [
                {
                  "step": "Solve $-3y + 7 = 5y + 31$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8y + 7 = 31$",
                  "reason": "Adding the same number to both sides: adding $-5y$ to both sides gathers the terms in $y$ on the left, and collecting like terms gives $-8y$."
                },
                {
                  "step": "$-8y = 24$",
                  "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-8$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $8x + 5 = 3x - 12$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -17/5",
              "lines": [
                {
                  "step": "Solve $8x + 5 = 3x - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 5 = -12$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $5x$."
                },
                {
                  "step": "$5x = -17$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = -\\dfrac{17}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates the variable."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $3(2x - 5) = 4x + 9$.",
            "lines": [
              {
                "step": "Solve $3(2x - 5) = 4x + 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x - 15 = 4x + 9$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
              },
              {
                "step": "$2x - 15 = 9$",
                "reason": "Adding the same number to both sides: adding $-4x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $2x$."
              },
              {
                "step": "$2x = 24$",
                "reason": "Adding the same number to both sides: adding $15$ to both sides leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 12$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ isolates the variable."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2(4x + 3) = -5x + 12$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 6/13",
              "lines": [
                {
                  "step": "Solve $2(4x + 3) = -5x + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8x + 6 = -5x + 12$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$13x + 6 = 12$",
                  "reason": "Adding the same number to both sides: adding $5x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $13x$."
                },
                {
                  "step": "$13x = 6$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = \\dfrac{6}{13}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $13$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $-2(3y - 4) = 2y + 11$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -3/8",
              "lines": [
                {
                  "step": "Solve $-2(3y - 4) = 2y + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6y + 8 = 2y + 11$",
                  "reason": "Multiplying out: by the distributive law the $-2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$-8y + 8 = 11$",
                  "reason": "Adding the same number to both sides: adding $-2y$ to both sides gathers the terms in $y$ on the left, and collecting like terms gives $-8y$."
                },
                {
                  "step": "$-8y = 3$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = -\\dfrac{3}{8}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-8$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $5(x + 2) = 2x - 8$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -6",
              "lines": [
                {
                  "step": "Solve $5(x + 2) = 2x - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 10 = 2x - 8$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$3x + 10 = -8$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $3x$."
                },
                {
                  "step": "$3x = -18$",
                  "reason": "Adding the same number to both sides: adding $-10$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = -6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates the variable."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{3x}{4} + \\dfrac{2}{3} = \\dfrac{x}{6} + 1$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{3x}{4} + \\dfrac{2}{3} = \\dfrac{x}{6} + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$12\\left(\\dfrac{3x}{4} + \\dfrac{2}{3}\\right) = 12\\left(\\dfrac{x}{6} + 1\\right)$",
                "reason": "Clearing fractions: the lowest common denominator of $4$, $3$ and $6$ is $12$, and multiplying both sides by the same number keeps them equal."
              },
              {
                "step": "$9x + 8 = 2x + 12$",
                "reason": "Multiplying out: $12$ multiplies each term, and each denominator divides $12$, which leaves whole numbers."
              },
              {
                "step": "$7x + 8 = 12$",
                "reason": "Adding the same number to both sides: adding $-2x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $7x$."
              },
              {
                "step": "$7x = 4$",
                "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = \\dfrac{4}{7}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ isolates the variable."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x}{2} - \\dfrac{3}{4} = \\dfrac{x}{8} + 2$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 22/3",
              "lines": [
                {
                  "step": "Solve $\\dfrac{x}{2} - \\dfrac{3}{4} = \\dfrac{x}{8} + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8\\left(\\dfrac{x}{2} - \\dfrac{3}{4}\\right) = 8\\left(\\dfrac{x}{8} + 2\\right)$",
                  "reason": "Clearing fractions: the lowest common denominator of $2$, $4$ and $8$ is $8$, and multiplying both sides by the same number keeps them equal."
                },
                {
                  "step": "$4x - 6 = x + 16$",
                  "reason": "Multiplying out: $8$ multiplies each term, and each denominator divides $8$, which leaves whole numbers."
                },
                {
                  "step": "$3x - 6 = 16$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $3x$."
                },
                {
                  "step": "$3x = 22$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = \\dfrac{22}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{2y}{3} + 5 = \\dfrac{y}{4} - \\dfrac{5}{6}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -14",
              "lines": [
                {
                  "step": "Solve $\\dfrac{2y}{3} + 5 = \\dfrac{y}{4} - \\dfrac{5}{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12\\left(\\dfrac{2y}{3} + 5\\right) = 12\\left(\\dfrac{y}{4} - \\dfrac{5}{6}\\right)$",
                  "reason": "Clearing fractions: the lowest common denominator of $3$, $4$ and $6$ is $12$, and multiplying both sides by the same number keeps them equal."
                },
                {
                  "step": "$8y + 60 = 3y - 10$",
                  "reason": "Multiplying out: $12$ multiplies each term, and each denominator divides $12$, which leaves whole numbers."
                },
                {
                  "step": "$5y + 60 = -10$",
                  "reason": "Adding the same number to both sides: adding $-3y$ to both sides gathers the terms in $y$ on the left, and collecting like terms gives $5y$."
                },
                {
                  "step": "$5y = -70$",
                  "reason": "Adding the same number to both sides: adding $-60$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = -14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{3x}{5} + \\dfrac{1}{2} = \\dfrac{x}{10} - 2$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -5",
              "lines": [
                {
                  "step": "Solve $\\dfrac{3x}{5} + \\dfrac{1}{2} = \\dfrac{x}{10} - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10\\left(\\dfrac{3x}{5} + \\dfrac{1}{2}\\right) = 10\\left(\\dfrac{x}{10} - 2\\right)$",
                  "reason": "Clearing fractions: the lowest common denominator of $5$, $2$ and $10$ is $10$, and multiplying both sides by the same number keeps them equal."
                },
                {
                  "step": "$6x + 5 = x - 20$",
                  "reason": "Multiplying out: $10$ multiplies each term, and each denominator divides $10$, which leaves whole numbers."
                },
                {
                  "step": "$5x + 5 = -20$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $5x$."
                },
                {
                  "step": "$5x = -25$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates the variable."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $0.4x - 1.3 = 0.15x + 0.2$.",
            "lines": [
              {
                "step": "Solve $0.4x - 1.3 = 0.15x + 0.2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$100(0.4x - 1.3) = 100(0.15x + 0.2)$",
                "reason": "Multiplying both sides by the same number: the most decimal places in the equation is two, so multiplying both sides by $100$ makes every number whole."
              },
              {
                "step": "$40x - 130 = 15x + 20$",
                "reason": "Multiplying out: $100$ multiplies each term in the bracket."
              },
              {
                "step": "$25x - 130 = 20$",
                "reason": "Adding the same number to both sides: adding $-15x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $25x$."
              },
              {
                "step": "$25x = 150$",
                "reason": "Adding the same number to both sides: adding $130$ to both sides leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $25$ isolates the variable."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $1.2x + 0.5 = 0.7x + 3$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5",
              "lines": [
                {
                  "step": "Solve $1.2x + 0.5 = 0.7x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10(1.2x + 0.5) = 10(0.7x + 3)$",
                  "reason": "Multiplying both sides by the same number: the most decimal places in the equation is one, so multiplying both sides by $10$ makes every number whole."
                },
                {
                  "step": "$12x + 5 = 7x + 30$",
                  "reason": "Multiplying out: $10$ multiplies each term in the bracket."
                },
                {
                  "step": "$5x + 5 = 30$",
                  "reason": "Adding the same number to both sides: adding $-7x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $5x$."
                },
                {
                  "step": "$5x = 25$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $0.06y + 1.5 = 0.02y - 0.3$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -45",
              "lines": [
                {
                  "step": "Solve $0.06y + 1.5 = 0.02y - 0.3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$100(0.06y + 1.5) = 100(0.02y - 0.3)$",
                  "reason": "Multiplying both sides by the same number: the most decimal places in the equation is two, so multiplying both sides by $100$ makes every number whole."
                },
                {
                  "step": "$6y + 150 = 2y - 30$",
                  "reason": "Multiplying out: $100$ multiplies each term in the bracket."
                },
                {
                  "step": "$4y + 150 = -30$",
                  "reason": "Adding the same number to both sides: adding $-2y$ to both sides gathers the terms in $y$ on the left, and collecting like terms gives $4y$."
                },
                {
                  "step": "$4y = -180$",
                  "reason": "Adding the same number to both sides: adding $-150$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = -45$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $2.5x - 4 = 0.9x + 4.8$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 11/2",
              "lines": [
                {
                  "step": "Solve $2.5x - 4 = 0.9x + 4.8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10(2.5x - 4) = 10(0.9x + 4.8)$",
                  "reason": "Multiplying both sides by the same number: the most decimal places in the equation is one, so multiplying both sides by $10$ makes every number whole."
                },
                {
                  "step": "$25x - 40 = 9x + 48$",
                  "reason": "Multiplying out: $10$ multiplies each term in the bracket."
                },
                {
                  "step": "$16x - 40 = 48$",
                  "reason": "Adding the same number to both sides: adding $-9x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $16x$."
                },
                {
                  "step": "$16x = 88$",
                  "reason": "Adding the same number to both sides: adding $40$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = \\dfrac{11}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $16$ isolates the variable."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x(x + 5) - 3 = x^2 + 2x + 9$.",
            "lines": [
              {
                "step": "Solve $x(x + 5) - 3 = x^2 + 2x + 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 5x - 3 = x^2 + 2x + 9$",
                "reason": "Multiplying out: by the distributive law $x$ multiplies each term in the bracket, and $x \\cdot x = x^2$."
              },
              {
                "step": "$5x - 3 = 2x + 9$",
                "reason": "Adding the same number to both sides: adding $-x^2$ to both sides cancels the squares and leaves a linear equation."
              },
              {
                "step": "$3x - 3 = 9$",
                "reason": "Adding the same number to both sides: adding $-2x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $3x$."
              },
              {
                "step": "$3x = 12$",
                "reason": "Adding the same number to both sides: adding $3$ to both sides leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates the variable."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x(x - 3) + 4 = 2x^2 - x - 11$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 3",
              "lines": [
                {
                  "step": "Solve $2x(x - 3) + 4 = 2x^2 - x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 6x + 4 = 2x^2 - x - 11$",
                  "reason": "Multiplying out: by the distributive law $2x$ multiplies each term in the bracket, and $x \\cdot x = x^2$."
                },
                {
                  "step": "$-6x + 4 = -x - 11$",
                  "reason": "Adding the same number to both sides: adding $-2x^2$ to both sides cancels the squares and leaves a linear equation."
                },
                {
                  "step": "$-5x + 4 = -11$",
                  "reason": "Adding the same number to both sides: adding $x$ to both sides gathers the terms in $x$ on the left, and collecting like terms gives $-5x$."
                },
                {
                  "step": "$-5x = -15$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $y(y - 6) + 7 = y^2 - 2y - 9$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 4",
              "lines": [
                {
                  "step": "Solve $y(y - 6) + 7 = y^2 - 2y - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 - 6y + 7 = y^2 - 2y - 9$",
                  "reason": "Multiplying out: by the distributive law $y$ multiplies each term in the bracket, and $y \\cdot y = y^2$."
                },
                {
                  "step": "$-6y + 7 = -2y - 9$",
                  "reason": "Adding the same number to both sides: adding $-y^2$ to both sides cancels the squares and leaves a linear equation."
                },
                {
                  "step": "$-4y + 7 = -9$",
                  "reason": "Adding the same number to both sides: adding $2y$ to both sides gathers the terms in $y$ on the left, and collecting like terms gives $-4y$."
                },
                {
                  "step": "$-4y = -16$",
                  "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ isolates the variable."
                }
              ]
            },
            {
              "prompt": "Solve $3z(z + 2) - 5 = 3z^2 + 9z + 4$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = -3",
              "lines": [
                {
                  "step": "Solve $3z(z + 2) - 5 = 3z^2 + 9z + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3z^2 + 6z - 5 = 3z^2 + 9z + 4$",
                  "reason": "Multiplying out: by the distributive law $3z$ multiplies each term in the bracket, and $z \\cdot z = z^2$."
                },
                {
                  "step": "$6z - 5 = 9z + 4$",
                  "reason": "Adding the same number to both sides: adding $-3z^2$ to both sides cancels the squares and leaves a linear equation."
                },
                {
                  "step": "$-3z - 5 = 4$",
                  "reason": "Adding the same number to both sides: adding $-9z$ to both sides gathers the terms in $z$ on the left, and collecting like terms gives $-3z$."
                },
                {
                  "step": "$-3z = 9$",
                  "reason": "Adding the same number to both sides: adding $5$ to both sides leaves the term in $z$ alone on the left."
                },
                {
                  "step": "$z = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ isolates the variable."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t109-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $3x + 5 + 2x = 5x - 4 + 1$ has one solution, no solution or infinitely many solutions.",
            "lines": [
              {
                "step": "Decide whether $3x + 5 + 2x = 5x - 4 + 1$ has one solution, no solution or infinitely many solutions.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x + 5 = 5x - 3$",
                "reason": "Collecting like terms on each side: the distributive law read backwards adds the coefficients of the terms in the letter, and the numbers are added."
              },
              {
                "step": "$5 = -3$",
                "reason": "Adding the same number to both sides: adding $-5x$ to both sides takes the terms in $x$ off the right."
              },
              {
                "step": "None",
                "reason": "Linear equation in one variable: when a term in the letter is left, isolating the variable gives exactly one value; when the terms cancel, a false equation of numbers is an equation with no solution and a true one is an equation true for every value. Here the terms cancel and $5 = -3$ is false."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $6x - 2 - x = 5x + 9 - 11$ has one solution, no solution or infinitely many solutions.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "Infinitely many",
              "lines": [
                {
                  "step": "Decide whether $6x - 2 - x = 5x + 9 - 11$ has one solution, no solution or infinitely many solutions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 2 = 5x - 2$",
                  "reason": "Collecting like terms on each side: the distributive law read backwards adds the coefficients of the terms in the letter, and the numbers are added."
                },
                {
                  "step": "$-2 = -2$",
                  "reason": "Adding the same number to both sides: adding $-5x$ to both sides takes the terms in $x$ off the right."
                },
                {
                  "step": "Infinitely many",
                  "reason": "Linear equation in one variable: when a term in the letter is left, isolating the variable gives exactly one value; when the terms cancel, a false equation of numbers is an equation with no solution and a true one is an equation true for every value. Here the terms cancel and $-2 = -2$ is true."
                }
              ]
            },
            {
              "prompt": "Decide whether $4y + 7 + 3y = 2y - 6 + 8$ has one solution, no solution or infinitely many solutions.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Decide whether $4y + 7 + 3y = 2y - 6 + 8$ has one solution, no solution or infinitely many solutions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7y + 7 = 2y + 2$",
                  "reason": "Collecting like terms on each side: the distributive law read backwards adds the coefficients of the terms in the letter, and the numbers are added."
                },
                {
                  "step": "$5y + 7 = 2$",
                  "reason": "Adding the same number to both sides: adding $-2y$ to both sides takes the terms in $y$ off the right."
                },
                {
                  "step": "One",
                  "reason": "Linear equation in one variable: when a term in the letter is left, isolating the variable gives exactly one value; when the terms cancel, a false equation of numbers is an equation with no solution and a true one is an equation true for every value. Here the term $5y$ is left."
                }
              ]
            },
            {
              "prompt": "Decide whether $-2x + 3 + 5x = 3x + 10 - 4$ has one solution, no solution or infinitely many solutions.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Decide whether $-2x + 3 + 5x = 3x + 10 - 4$ has one solution, no solution or infinitely many solutions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x + 3 = 3x + 6$",
                  "reason": "Collecting like terms on each side: the distributive law read backwards adds the coefficients of the terms in the letter, and the numbers are added."
                },
                {
                  "step": "$3 = 6$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides takes the terms in $x$ off the right."
                },
                {
                  "step": "None",
                  "reason": "Linear equation in one variable: when a term in the letter is left, isolating the variable gives exactly one value; when the terms cancel, a false equation of numbers is an equation with no solution and a true one is an equation true for every value. Here the terms cancel and $3 = 6$ is false."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $a$ for which $3(x + a) + 4 = 3x + 19$ is true for every value of $x$.",
            "lines": [
              {
                "step": "Find a number $a$ for which $3(x + a) + 4 = 3x + 19$ is true for every value of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x + 3a + 4 = 3x + 19$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
              },
              {
                "step": "$3a + 4 = 19$",
                "reason": "Equation true for every value: the terms in $x$ are the same on both sides, so the equation holds for every $x$ exactly when the numbers left are equal."
              },
              {
                "step": "$3a = 15$",
                "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the term in $a$ alone."
              },
              {
                "step": "$a = 5$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which $2(x + a) - 5 = 2x + 9$ is true for every value of $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 7",
              "lines": [
                {
                  "step": "Find a number $a$ for which $2(x + a) - 5 = 2x + 9$ is true for every value of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 2a - 5 = 2x + 9$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$2a - 5 = 9$",
                  "reason": "Equation true for every value: the terms in $x$ are the same on both sides, so the equation holds for every $x$ exactly when the numbers left are equal."
                },
                {
                  "step": "$2a = 14$",
                  "reason": "Adding the same number to both sides: adding $5$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = 7$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ isolates $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $4(y + a) + 7 = 4y - 5$ is true for every value of $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -3",
              "lines": [
                {
                  "step": "Find a number $a$ for which $4(y + a) + 7 = 4y - 5$ is true for every value of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4y + 4a + 7 = 4y - 5$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$4a + 7 = -5$",
                  "reason": "Equation true for every value: the terms in $y$ are the same on both sides, so the equation holds for every $y$ exactly when the numbers left are equal."
                },
                {
                  "step": "$4a = -12$",
                  "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ isolates $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $-2(x + a) + 3 = -2x + 11$ is true for every value of $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -4",
              "lines": [
                {
                  "step": "Find a number $a$ for which $-2(x + a) + 3 = -2x + 11$ is true for every value of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x - 2a + 3 = -2x + 11$",
                  "reason": "Multiplying out: by the distributive law the $-2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$-2a + 3 = 11$",
                  "reason": "Equation true for every value: the terms in $x$ are the same on both sides, so the equation holds for every $x$ exactly when the numbers left are equal."
                },
                {
                  "step": "$-2a = 8$",
                  "reason": "Adding the same number to both sides: adding $-3$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ isolates $a$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $a$ for which $ax + 4 + 2x = 5x - 1$ has no solution.",
            "lines": [
              {
                "step": "Find a number $a$ for which $ax + 4 + 2x = 5x - 1$ has no solution.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$ax + 4 + 2x - 5x = -1$",
                "reason": "Adding the same number to both sides: adding $-5x$ to both sides takes the term in $x$ off the right."
              },
              {
                "step": "$(a - 3)x + 4 = -1$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x$."
              },
              {
                "step": "$a - 3 = 0$",
                "reason": "Equation with no solution: with the coefficient $a - 3$ not $0$, dividing both sides by it gives one value of $x$; with the coefficient $0$ the equation reads $4 = -1$, which is false."
              },
              {
                "step": "$a = 3$",
                "reason": "Adding the same number to both sides: adding $3$ to both sides isolates $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which $ax - 3 + 6x = x + 8$ has no solution.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -5",
              "lines": [
                {
                  "step": "Find a number $a$ for which $ax - 3 + 6x = x + 8$ has no solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ax - 3 + 6x - x = 8$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides takes the term in $x$ off the right."
                },
                {
                  "step": "$(a + 5)x - 3 = 8$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x$."
                },
                {
                  "step": "$a + 5 = 0$",
                  "reason": "Equation with no solution: with the coefficient $a + 5$ not $0$, dividing both sides by it gives one value of $x$; with the coefficient $0$ the equation reads $-3 = 8$, which is false."
                },
                {
                  "step": "$a = -5$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides isolates $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $ay + 7 - 4y = 2y + 3$ has no solution.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 6",
              "lines": [
                {
                  "step": "Find a number $a$ for which $ay + 7 - 4y = 2y + 3$ has no solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ay + 7 - 4y - 2y = 3$",
                  "reason": "Adding the same number to both sides: adding $-2y$ to both sides takes the term in $y$ off the right."
                },
                {
                  "step": "$(a - 6)y + 7 = 3$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $y$."
                },
                {
                  "step": "$a - 6 = 0$",
                  "reason": "Equation with no solution: with the coefficient $a - 6$ not $0$, dividing both sides by it gives one value of $y$; with the coefficient $0$ the equation reads $7 = 3$, which is false."
                },
                {
                  "step": "$a = 6$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides isolates $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $ax + 2 + 3x = 9x - 6$ has no solution.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 6",
              "lines": [
                {
                  "step": "Find a number $a$ for which $ax + 2 + 3x = 9x - 6$ has no solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ax + 2 + 3x - 9x = -6$",
                  "reason": "Adding the same number to both sides: adding $-9x$ to both sides takes the term in $x$ off the right."
                },
                {
                  "step": "$(a - 6)x + 2 = -6$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the terms in $x$."
                },
                {
                  "step": "$a - 6 = 0$",
                  "reason": "Equation with no solution: with the coefficient $a - 6$ not $0$, dividing both sides by it gives one value of $x$; with the coefficient $0$ the equation reads $2 = -6$, which is false."
                },
                {
                  "step": "$a = 6$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides isolates $a$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t109-k5",
      "forms": [
        {
          "example": {
            "problem": "Find a number $a$ for which $x = 4$ is a solution of $ax - 7 = 2x + 9$.",
            "lines": [
              {
                "step": "Find a number $a$ for which $x = 4$ is a solution of $ax - 7 = 2x + 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a(4) - 7 = 2(4) + 9$",
                "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $4$, in brackets."
              },
              {
                "step": "$4a - 7 = 17$",
                "reason": "The commutative law of multiplication writes $a(4)$ as $4a$, and the order of operations works out the right side."
              },
              {
                "step": "$4a = 24$",
                "reason": "Adding the same number to both sides: adding $7$ to both sides leaves the term in $a$ alone."
              },
              {
                "step": "$a = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ isolates $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which $x = 3$ is a solution of $ax + 5 = 4x - 1$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 2",
              "lines": [
                {
                  "step": "Find a number $a$ for which $x = 3$ is a solution of $ax + 5 = 4x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a(3) + 5 = 4(3) - 1$",
                  "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $3$, in brackets."
                },
                {
                  "step": "$3a + 5 = 11$",
                  "reason": "The commutative law of multiplication writes $a(3)$ as $3a$, and the order of operations works out the right side."
                },
                {
                  "step": "$3a = 6$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which $x = -2$ is a solution of $bx + 8 = 3x + 6$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 4",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x = -2$ is a solution of $bx + 8 = 3x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b(-2) + 8 = 3(-2) + 6$",
                  "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $-2$, in brackets."
                },
                {
                  "step": "$-2b + 8 = 0$",
                  "reason": "The commutative law of multiplication writes $b(-2)$ as $-2b$, and the order of operations works out the right side."
                },
                {
                  "step": "$-2b = -8$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the term in $b$ alone."
                },
                {
                  "step": "$b = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ isolates $b$."
                }
              ]
            },
            {
              "prompt": "Find a number $c$ for which $x = 5$ is a solution of $cx - 4 = -x + 11$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 2",
              "lines": [
                {
                  "step": "Find a number $c$ for which $x = 5$ is a solution of $cx - 4 = -x + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$c(5) - 4 = -(5) + 11$",
                  "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $5$, in brackets."
                },
                {
                  "step": "$5c - 4 = 6$",
                  "reason": "The commutative law of multiplication writes $c(5)$ as $5c$, and the order of operations works out the right side."
                },
                {
                  "step": "$5c = 10$",
                  "reason": "Adding the same number to both sides: adding $4$ to both sides leaves the term in $c$ alone."
                },
                {
                  "step": "$c = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates $c$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $b$ for which $bx + 6 = 22$ has the same solution as $5x - 3 = 17$.",
            "lines": [
              {
                "step": "Find a number $b$ for which $bx + 6 = 22$ has the same solution as $5x - 3 = 17$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x = 20$",
                "reason": "Adding the same number to both sides of $5x - 3 = 17$: adding $3$ leaves the term in $x$ alone."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ isolates the variable, so $4$ is the solution of both equations."
              },
              {
                "step": "$b(4) + 6 = 22$",
                "reason": "Substituting a value: a solution makes the equation true, so $x$ is replaced by $4$, in brackets."
              },
              {
                "step": "$4b + 6 = 22$",
                "reason": "The commutative law of multiplication writes $b(4)$ as $4b$."
              },
              {
                "step": "$4b = 16$",
                "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $b$ alone."
              },
              {
                "step": "$b = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ isolates $b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $b$ for which $bx + 5 = -16$ has the same solution as $3x + 8 = -10$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 7/2",
              "lines": [
                {
                  "step": "Find a number $b$ for which $bx + 5 = -16$ has the same solution as $3x + 8 = -10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x = -18$",
                  "reason": "Adding the same number to both sides of $3x + 8 = -10$: adding $-8$ leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates the variable, so $-6$ is the solution of both equations."
                },
                {
                  "step": "$b(-6) + 5 = -16$",
                  "reason": "Substituting a value: a solution makes the equation true, so $x$ is replaced by $-6$, in brackets."
                },
                {
                  "step": "$-6b + 5 = -16$",
                  "reason": "The commutative law of multiplication writes $b(-6)$ as $-6b$."
                },
                {
                  "step": "$-6b = -21$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $b$ alone."
                },
                {
                  "step": "$b = \\dfrac{7}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-6$ isolates $b$."
                }
              ]
            },
            {
              "prompt": "Find a number $c$ for which $cx - 7 = 11$ has the same solution as $4x + 9 = 33$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 3",
              "lines": [
                {
                  "step": "Find a number $c$ for which $cx - 7 = 11$ has the same solution as $4x + 9 = 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x = 24$",
                  "reason": "Adding the same number to both sides of $4x + 9 = 33$: adding $-9$ leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ isolates the variable, so $6$ is the solution of both equations."
                },
                {
                  "step": "$c(6) - 7 = 11$",
                  "reason": "Substituting a value: a solution makes the equation true, so $x$ is replaced by $6$, in brackets."
                },
                {
                  "step": "$6c - 7 = 11$",
                  "reason": "The commutative law of multiplication writes $c(6)$ as $6c$."
                },
                {
                  "step": "$6c = 18$",
                  "reason": "Adding the same number to both sides: adding $7$ to both sides leaves the term in $c$ alone."
                },
                {
                  "step": "$c = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ isolates $c$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $ax + 4 = -2$ has the same solution as $7x - 6 = 15$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -2",
              "lines": [
                {
                  "step": "Find a number $a$ for which $ax + 4 = -2$ has the same solution as $7x - 6 = 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x = 21$",
                  "reason": "Adding the same number to both sides of $7x - 6 = 15$: adding $6$ leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ isolates the variable, so $3$ is the solution of both equations."
                },
                {
                  "step": "$a(3) + 4 = -2$",
                  "reason": "Substituting a value: a solution makes the equation true, so $x$ is replaced by $3$, in brackets."
                },
                {
                  "step": "$3a + 4 = -2$",
                  "reason": "The commutative law of multiplication writes $a(3)$ as $3a$."
                },
                {
                  "step": "$3a = -6$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ isolates $a$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $a$ for which $x = 2$ is a solution of $ax^2 + 3x - 4 = ax + 6$.",
            "lines": [
              {
                "step": "Find a number $a$ for which $x = 2$ is a solution of $ax^2 + 3x - 4 = ax + 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a(2)^2 + 3(2) - 4 = a(2) + 6$",
                "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $2$, in brackets."
              },
              {
                "step": "$4a + 2 = 2a + 6$",
                "reason": "Order of operations: the power comes first, $(2)^2 = 4$, and the commutative law of multiplication writes each product with $a$ as a number times $a$."
              },
              {
                "step": "$2a + 2 = 6$",
                "reason": "Adding the same number to both sides: adding $-2a$ to both sides gathers the terms in $a$ on the left, and collecting like terms gives $2a$."
              },
              {
                "step": "$2a = 4$",
                "reason": "Adding the same number to both sides: adding $-2$ to both sides leaves the term in $a$ alone."
              },
              {
                "step": "$a = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ isolates $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $b$ for which $x = -1$ is a solution of $bx^2 + 5x + 2 = bx - 9$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -3",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x = -1$ is a solution of $bx^2 + 5x + 2 = bx - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b(-1)^2 + 5(-1) + 2 = b(-1) - 9$",
                  "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $-1$, in brackets."
                },
                {
                  "step": "$b - 3 = -b - 9$",
                  "reason": "Order of operations: the power comes first, $(-1)^2 = 1$, and the commutative law of multiplication writes each product with $b$ as a number times $b$."
                },
                {
                  "step": "$2b - 3 = -9$",
                  "reason": "Adding the same number to both sides: adding $b$ to both sides gathers the terms in $b$ on the left, and collecting like terms gives $2b$."
                },
                {
                  "step": "$2b = -6$",
                  "reason": "Adding the same number to both sides: adding $3$ to both sides leaves the term in $b$ alone."
                },
                {
                  "step": "$b = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ isolates $b$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $x = 3$ is a solution of $ax^2 - 2x + 1 = ax + 13$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 3",
              "lines": [
                {
                  "step": "Find a number $a$ for which $x = 3$ is a solution of $ax^2 - 2x + 1 = ax + 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a(3)^2 - 2(3) + 1 = a(3) + 13$",
                  "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $3$, in brackets."
                },
                {
                  "step": "$9a - 5 = 3a + 13$",
                  "reason": "Order of operations: the power comes first, $(3)^2 = 9$, and the commutative law of multiplication writes each product with $a$ as a number times $a$."
                },
                {
                  "step": "$6a - 5 = 13$",
                  "reason": "Adding the same number to both sides: adding $-3a$ to both sides gathers the terms in $a$ on the left, and collecting like terms gives $6a$."
                },
                {
                  "step": "$6a = 18$",
                  "reason": "Adding the same number to both sides: adding $5$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ isolates $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $c$ for which $x = -2$ is a solution of $cx^2 + 4x - 3 = cx + 7$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 3",
              "lines": [
                {
                  "step": "Find a number $c$ for which $x = -2$ is a solution of $cx^2 + 4x - 3 = cx + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$c(-2)^2 + 4(-2) - 3 = c(-2) + 7$",
                  "reason": "Substituting a value: a solution makes the equation true, so each $x$ is replaced by $-2$, in brackets."
                },
                {
                  "step": "$4c - 11 = -2c + 7$",
                  "reason": "Order of operations: the power comes first, $(-2)^2 = 4$, and the commutative law of multiplication writes each product with $c$ as a number times $c$."
                },
                {
                  "step": "$6c - 11 = 7$",
                  "reason": "Adding the same number to both sides: adding $2c$ to both sides gathers the terms in $c$ on the left, and collecting like terms gives $6c$."
                },
                {
                  "step": "$6c = 18$",
                  "reason": "Adding the same number to both sides: adding $11$ to both sides leaves the term in $c$ alone."
                },
                {
                  "step": "$c = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ isolates $c$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t109-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $7x + 5 = 3x + 25$, and write that line right.",
            "given": [
              "$7x + 5 = 3x + 25$",
              "$7x + 3x + 5 = 25$",
              "$7x + 3x = 25 - 5$",
              "$10x = 20$",
              "$x = 2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $7x + 5 = 3x + 25$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every line before line 2 is right.",
                "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
              },
              {
                "step": "Line 2 takes $3x$ off the right and writes $3x$ on the left, where it belongs with the opposite sign.",
                "reason": "A sign lost: adding the same number to both sides adds $-3x$ to both sides, so the term arrives on the left as $-3x$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that keeps the two sides equal, and carries the fault with it."
              },
              {
                "step": "Line 2 written right is $7x - 3x + 5 = 25$.",
                "reason": "Adding the same number to both sides changes the two sides together, with every sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $6x - 4 = 2x + 14$, and write that line right.",
              "given": [
                "$6x - 4 = 2x + 14$",
                "$6x - 2x - 4 = 14$",
                "$6x - 2x = 14 - 4$",
                "$4x = 10$",
                "$x = \\dfrac{5}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 6*x-2*x = 14+4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $6x - 4 = 2x + 14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 3 is right.",
                  "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
                },
                {
                  "step": "Line 3 takes $-4$ off the left and writes $-4$ on the right, where it belongs with the opposite sign.",
                  "reason": "A sign lost: adding the same number to both sides adds $4$ to both sides, so the number arrives on the right as $4$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that keeps the two sides equal, and carries the fault with it."
                },
                {
                  "step": "Line 3 written right is $6x - 2x = 14 + 4$.",
                  "reason": "Adding the same number to both sides changes the two sides together, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $9y + 8 = 4y - 12$, and write that line right.",
              "given": [
                "$9y + 8 = 4y - 12$",
                "$9y + 4y + 8 = -12$",
                "$9y + 4y = -12 - 8$",
                "$13y = -20$",
                "$y = -\\dfrac{20}{13}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 9*y-4*y+8 = -12",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $9y + 8 = 4y - 12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
                },
                {
                  "step": "Line 2 takes $4y$ off the right and writes $4y$ on the left, where it belongs with the opposite sign.",
                  "reason": "A sign lost: adding the same number to both sides adds $-4y$ to both sides, so the term arrives on the left as $-4y$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that keeps the two sides equal, and carries the fault with it."
                },
                {
                  "step": "Line 2 written right is $9y - 4y + 8 = -12$.",
                  "reason": "Adding the same number to both sides changes the two sides together, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $5x - 9 = -3x + 15$, and write that line right.",
              "given": [
                "$5x - 9 = -3x + 15$",
                "$5x + 3x - 9 = 15$",
                "$5x + 3x = 15 - 9$",
                "$8x = 6$",
                "$x = \\dfrac{3}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*x+3*x = 15+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $5x - 9 = -3x + 15$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 3 is right.",
                  "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
                },
                {
                  "step": "Line 3 takes $-9$ off the left and writes $-9$ on the right, where it belongs with the opposite sign.",
                  "reason": "A sign lost: adding the same number to both sides adds $9$ to both sides, so the number arrives on the right as $9$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that keeps the two sides equal, and carries the fault with it."
                },
                {
                  "step": "Line 3 written right is $5x + 3x = 15 + 9$.",
                  "reason": "Adding the same number to both sides changes the two sides together, with every sign kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $7x + 4 = 2x + 29$, and write that line right.",
            "given": [
              "$7x + 4 = 2x + 29$",
              "$7x + 4 = 2x + 29 - 2x = 29$",
              "$7x = 25$",
              "$x = 25 \\div 7 = \\dfrac{25}{7}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $7x + 4 = 2x + 29$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every line before line 2 is right.",
                "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
              },
              {
                "step": "Line 2 adds $-2x$ to the right side alone and runs on with a second equals sign, so it states $7x + 4 = 29$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side $7x + 4$ equals $2x + 29$, not $29$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that keeps the two sides equal, and carries the fault with it."
              },
              {
                "step": "Line 2 written right is $5x + 4 = 29$.",
                "reason": "Adding the same number to both sides changes the two sides together, with every sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $8x - 5 = 3x + 15$, and write that line right.",
              "given": [
                "$8x - 5 = 3x + 15$",
                "$5x - 5 = 15$",
                "$5x = 20$",
                "$5x = 20 \\div 5 = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $8x - 5 = 3x + 15$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 4 is right.",
                  "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
                },
                {
                  "step": "Line 4 divides the right side alone by $5$ and runs on with a second equals sign, so it states $5x = 4$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side $5x$ equals $20$, not $4$."
                },
                {
                  "step": "Line 4 is the last line, so it is the first wrong line.",
                  "reason": "Every line before it is right."
                },
                {
                  "step": "Line 4 written right is $x = 4$.",
                  "reason": "Dividing both sides by a nonzero number changes the two sides together."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $6y + 9 = -2y + 33$, and write that line right.",
              "given": [
                "$6y + 9 = -2y + 33$",
                "$8y + 9 = 33$",
                "$8y = 24$",
                "$8y = 24 \\div 8 = 3$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y = 3",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $6y + 9 = -2y + 33$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 4 is right.",
                  "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
                },
                {
                  "step": "Line 4 divides the right side alone by $8$ and runs on with a second equals sign, so it states $8y = 3$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side $8y$ equals $24$, not $3$."
                },
                {
                  "step": "Line 4 is the last line, so it is the first wrong line.",
                  "reason": "Every line before it is right."
                },
                {
                  "step": "Line 4 written right is $y = 3$.",
                  "reason": "Dividing both sides by a nonzero number changes the two sides together."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $9x - 7 = 4x + 18$, and write that line right.",
              "given": [
                "$9x - 7 = 4x + 18$",
                "$9x - 7 = 4x + 18 - 4x = 18$",
                "$9x = 25$",
                "$x = 25 \\div 9 = \\dfrac{25}{9}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 5*x-7 = 18",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $9x - 7 = 4x + 18$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Line 1 is the equation as given, and each line after it, up to the wrong one, keeps the two sides equal by adding the same number to both sides or by collecting like terms."
                },
                {
                  "step": "Line 2 adds $-4x$ to the right side alone and runs on with a second equals sign, so it states $9x - 7 = 18$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side $9x - 7$ equals $4x + 18$, not $18$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that keeps the two sides equal, and carries the fault with it."
                },
                {
                  "step": "Line 2 written right is $5x - 7 = 18$.",
                  "reason": "Adding the same number to both sides changes the two sides together, with every sign kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t109-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: Ten less than six times a number $x$ equals the number plus fifteen.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: Ten less than six times a number $x$ equals the number plus fifteen.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side, ten less than six times a number $x$, is $6x - 10$.",
                "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
              },
              {
                "step": "The right side, the number plus fifteen, is $x + 15$.",
                "reason": "Writing a sentence as an equation: \"plus\" adds the amount to what comes before it."
              },
              {
                "step": "$6x - 10 = x + 15$",
                "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: Five more than three times a number $x$ equals the number minus seven.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3*x+5 = x-7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: Five more than three times a number $x$ equals the number minus seven.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side, five more than three times a number $x$, is $3x + 5$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "The right side, the number minus seven, is $x - 7$.",
                  "reason": "Writing a sentence as an equation: \"minus\" takes the amount away from what comes before it."
                },
                {
                  "step": "$3x + 5 = x - 7$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: Five times a number $x$ minus two equals eleven more than twice the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*x-2 = 2*x+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: Five times a number $x$ minus two equals eleven more than twice the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side, five times a number $x$ minus two, is $5x - 2$.",
                  "reason": "Writing a sentence as an equation: \"minus\" takes the amount away from what comes before it."
                },
                {
                  "step": "The right side, eleven more than twice the number, is $2x + 11$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$5x - 2 = 2x + 11$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: A number $x$ plus eight equals four less than three times the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x+8 = 3*x-4",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: A number $x$ plus eight equals four less than three times the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side, a number $x$ plus eight, is $x + 8$.",
                  "reason": "Writing a sentence as an equation: \"plus\" adds the amount to what comes before it."
                },
                {
                  "step": "The right side, four less than three times the number, is $3x - 4$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "$x + 8 = 3x - 4$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, without multiplying out: Three times the sum of a number $x$ and five equals two more than four times the number.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, without multiplying out: Three times the sum of a number $x$ and five equals two more than four times the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the number and five is $x + 5$.",
                "reason": "Writing a sentence as an equation: \"sum\" adds the two numbers."
              },
              {
                "step": "Three times that sum is $3(x + 5)$.",
                "reason": "Writing a sentence as an equation: the sum is one amount, so it goes in a bracket, and the bracket is multiplied by $3$."
              },
              {
                "step": "The right side, two more than four times the number, is $4x + 2$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "$3(x + 5) = 4x + 2$",
                "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out: Twice the difference of a number $x$ and seven equals nine more than the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*(x-7) = x+9",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out: Twice the difference of a number $x$ and seven equals nine more than the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of the number and seven is $x - 7$.",
                  "reason": "Writing a sentence as an equation: \"difference\" takes the second number away from the first."
                },
                {
                  "step": "Twice that difference is $2(x - 7)$.",
                  "reason": "Writing a sentence as an equation: the difference is one amount, so it goes in a bracket, and the bracket is multiplied by $2$."
                },
                {
                  "step": "The right side, nine more than the number, is $x + 9$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$2(x - 7) = x + 9$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out: Four times the sum of a number $x$ and two equals three less than six times the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "4*(x+2) = 6*x-3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out: Four times the sum of a number $x$ and two equals three less than six times the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the number and two is $x + 2$.",
                  "reason": "Writing a sentence as an equation: \"sum\" adds the two numbers."
                },
                {
                  "step": "Four times that sum is $4(x + 2)$.",
                  "reason": "Writing a sentence as an equation: the sum is one amount, so it goes in a bracket, and the bracket is multiplied by $4$."
                },
                {
                  "step": "The right side, three less than six times the number, is $6x - 3$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "$4(x + 2) = 6x - 3$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out: Five times the difference of a number $x$ and three equals eleven more than twice the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*(x-3) = 2*x+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out: Five times the difference of a number $x$ and three equals eleven more than twice the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of the number and three is $x - 3$.",
                  "reason": "Writing a sentence as an equation: \"difference\" takes the second number away from the first."
                },
                {
                  "step": "Five times that difference is $5(x - 3)$.",
                  "reason": "Writing a sentence as an equation: the difference is one amount, so it goes in a bracket, and the bracket is multiplied by $5$."
                },
                {
                  "step": "The right side, eleven more than twice the number, is $2x + 11$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$5(x - 3) = 2x + 11$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
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
      "id": "t109-p1",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$, $c$ and $d$ with $a \\ne c$, the equation $ax + b = cx + d$ has exactly one solution, $x = \\dfrac{d - b}{a - c}$.",
      "idea": "Isolating the variable shows that a solution can only be $\\dfrac{d - b}{a - c}$; putting that value back in shows that it is one.",
      "lines": [
        {
          "line": "Suppose that a number $x$ satisfies $ax + b = cx + d$.",
          "reason": "Solution: a solution is a value that makes the two sides equal."
        },
        {
          "line": "Then $ax + b - cx = d$.",
          "reason": "Adding the same number to both sides: $-cx$ is added to both sides."
        },
        {
          "line": "Then $ax - cx = d - b$.",
          "reason": "Adding the same number to both sides: $-b$ is added to both sides."
        },
        {
          "line": "Then $(a - c)x = d - b$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "The number $a - c$ is not $0$.",
          "reason": "Adding $c$ to both sides of $a - c = 0$ would give $a = c$, which the hypothesis rules out."
        },
        {
          "line": "Then $x = \\dfrac{d - b}{a - c}$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $a - c$."
        },
        {
          "line": "So every solution equals $\\dfrac{d - b}{a - c}$.",
          "reason": "Lines 1 to 6 hold for every number $x$ that satisfies the equation."
        },
        {
          "line": "Now let $r = \\dfrac{d - b}{a - c}$.",
          "reason": "The number $a - c$ is not $0$ by line 5, so the quotient is a number."
        },
        {
          "line": "Then $(a - c)r = d - b$.",
          "reason": "The definition of division: a quotient times its divisor is the number divided."
        },
        {
          "line": "Then $ar - cr = d - b$.",
          "reason": "Multiplying out."
        },
        {
          "line": "Then $ar + b - cr = d$.",
          "reason": "Adding the same number to both sides: $b$ is added to both sides."
        },
        {
          "line": "Then $ar + b = cr + d$.",
          "reason": "Adding the same number to both sides: $cr$ is added to both sides."
        },
        {
          "line": "Therefore $\\dfrac{d - b}{a - c}$ is a solution, and by line 7 it is the only one.",
          "reason": "Solution: line 12 says that the value $r$ makes the two sides equal."
        }
      ]
    },
    {
      "id": "t109-p2",
      "method": "proof by cases",
      "statement": "For all numbers $a$, $b$ and $d$, the equation $ax + b = ax + d$ is true for every value of $x$ when $b = d$, and has no solution when $b \\ne d$.",
      "idea": "Taking $ax$ from both sides leaves $b = d$, a statement with no $x$ in it. It is true for every $x$ or false for every $x$, according to the numbers $b$ and $d$.",
      "lines": [
        {
          "line": "Case 1: $b = d$.",
          "reason": "Every pair of numbers $b$ and $d$ is equal or not equal, so the two cases cover them all."
        },
        {
          "line": "For every number $x$, $ax + d = ax + d$.",
          "reason": "A number equals itself."
        },
        {
          "line": "So for every number $x$, $ax + b = ax + d$.",
          "reason": "Line 2, with $d$ replaced by $b$, which equals it in this case."
        },
        {
          "line": "So the equation is true for every value of $x$.",
          "reason": "Equation true for every value: line 3 holds for every number $x$."
        },
        {
          "line": "Case 2: $b \\ne d$. Suppose that a number $x$ satisfies $ax + b = ax + d$.",
          "reason": "Solution: a solution is a value that makes the two sides equal."
        },
        {
          "line": "Then $b = d$.",
          "reason": "Adding the same number to both sides: $-ax$ is added to both sides."
        },
        {
          "line": "Line 6 and the condition $b \\ne d$ cannot both hold, so no number $x$ satisfies the equation.",
          "reason": "Equation with no solution: the supposed solution of line 5 leads to a false equation."
        },
        {
          "line": "Therefore the equation is true for every value of $x$ when $b = d$, and has no solution when $b \\ne d$.",
          "reason": "Lines 4 and 7 settle the two cases, and the cases cover every pair $b$, $d$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t109-s1",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$ and $b$, $a - b = 0$ exactly when $a = b$.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $a - b = 0$.",
            "reason": "The first direction starts from its hypothesis."
          },
          {
            "line": "Then $a - b + b = 0 + b$.",
            "reason": "Adding the same number to both sides: $b$ is added to both sides."
          },
          {
            "line": "Then $a = b$.",
            "reason": "The two numbers $-b$ and $b$ add to $0$ on the left, and $0 + b = b$ on the right."
          },
          {
            "line": "Now suppose that $a = b$.",
            "reason": "The second direction starts from its hypothesis."
          },
          {
            "line": "Then $a - b = b - b$.",
            "reason": "Adding the same number to both sides: $-b$ is added to both sides."
          },
          {
            "line": "Then $a - b = 0$.",
            "reason": "A number minus itself is $0$."
          },
          {
            "line": "Therefore $a - b = 0$ exactly when $a = b$.",
            "reason": "Lines 1 to 3 give the first direction and lines 4 to 6 the second."
          }
        ]
      }
    },
    {
      "id": "t109-s2",
      "method": "proof by cases",
      "statement": "Prove that for every number $k$, the equation $k(x - 1) = 0$ has exactly one solution, $x = 1$, when $k \\ne 0$, and is true for every value of $x$ when $k = 0$.",
      "check": {
        "proof": [
          {
            "line": "Case 1: $k = 0$. Then for every number $x$, $k(x - 1) = 0(x - 1)$.",
            "reason": "Every number $k$ is $0$ or not $0$, so the two cases cover them all; here $k$ is replaced by $0$, which equals it."
          },
          {
            "line": "For every number $x$, $0(x - 1) = 0$.",
            "reason": "Zero times a number is $0$."
          },
          {
            "line": "So the equation is true for every value of $x$.",
            "reason": "Equation true for every value: lines 1 and 2 hold for every number $x$."
          },
          {
            "line": "Case 2: $k \\ne 0$. Suppose that a number $x$ satisfies $k(x - 1) = 0$.",
            "reason": "Solution: a solution is a value that makes the two sides equal."
          },
          {
            "line": "Then $x - 1 = 0$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $k$."
          },
          {
            "line": "Then $x = 1$.",
            "reason": "Adding the same number to both sides: $1$ is added to both sides."
          },
          {
            "line": "The value $x = 1$ gives $k(1 - 1) = k \\cdot 0 = 0$, so it is a solution.",
            "reason": "Checking a solution."
          },
          {
            "line": "Therefore the equation has exactly the solution $x = 1$ when $k \\ne 0$, and is true for every value of $x$ when $k = 0$.",
            "reason": "Line 3 settles case 1, and lines 6 and 7 settle case 2."
          }
        ]
      }
    },
    {
      "id": "t109-s3",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $b$ and $c$ and every nonzero number $n$, a number $x$ is a solution of $ax + b = c$ exactly when it is a solution of $nax + nb = nc$.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $ax + b = c$.",
            "reason": "The first direction starts from its hypothesis."
          },
          {
            "line": "Then $n(ax + b) = nc$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $n$."
          },
          {
            "line": "Then $nax + nb = nc$.",
            "reason": "Multiplying out."
          },
          {
            "line": "Now suppose that $nax + nb = nc$.",
            "reason": "The second direction starts from its hypothesis."
          },
          {
            "line": "Then $n(ax + b) = nc$.",
            "reason": "Factoring: the common factor $n$ is taken out."
          },
          {
            "line": "Then $ax + b = c$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $n$."
          },
          {
            "line": "Therefore $x$ is a solution of one equation exactly when it is a solution of the other.",
            "reason": "Lines 1 to 3 give the first direction and lines 4 to 6 the second."
          }
        ]
      }
    }
  ]
}
