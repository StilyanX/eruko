export default {
  "number": 112,
  "title": "Solving an equation for one letter",
  "section": 2,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "118-122, 127"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $2ax - c = 4b + cx$ for $x$.",
    "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
    "answer": "x = (4*b+c)/(2*a-c)",
    "solution": [
      "Solve $2ax - c = 4b + cx$ for $x$.",
      "$2ax - cx = 4b + c$",
      "$x(2a - c) = 4b + c$",
      "Where $2a - c$ is not $0$, $x = \\dfrac{4b + c}{2a - c}$."
    ]
  },
  "ideas": [
    {
      "name": "Solving for a letter in terms of the others",
      "concrete": "In $3x + 2y = 6$ the steps that would solve $3x + 2 = 6$ work with $2y$ in place of $2$: taking $2y$ from both sides gives $3x = 6 - 2y$, and dividing both sides by $3$ gives $x = \\dfrac{6 - 2y}{3}$.",
      "general": "To **solve for a letter in terms of the others** in an equation with several letters, the other letters are treated as numbers, and the rules for equations leave the chosen letter alone on one side, with no copy of it on the other. A division by an expression in the other letters holds only where that expression is not $0$."
    },
    {
      "name": "Collecting the terms with the letter and factoring it out",
      "concrete": "In $ax + 5 = 2x + b$ the terms $ax$ and $2x$ go to the left and $5$ to the right: $ax - 2x = b - 5$. Taking out $x$ gives $x(a - 2) = b - 5$, and where $a$ is not $2$, $x = \\dfrac{b - 5}{a - 2}$.",
      "general": "Where the letter solved for stands in several terms, **collecting the terms with the letter and factoring it out** puts every term with the letter on one side and every other term on the other, then writes that side as the letter times one bracket. Dividing by the bracket solves the equation wherever the bracket is not $0$."
    }
  ],
  "kinds": [
    {
      "id": "t112-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $4x + 3by = 2c$ for $y$, where $b$ is not $0$.",
            "lines": [
              {
                "step": "Solve $4x + 3by = 2c$ for $y$, where $b$ is not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3by = 2c - 4x$",
                "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves the term in $y$ alone on the left."
              },
              {
                "step": "$y = \\dfrac{2c - 4x}{3b}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3b$, which is not $0$, as the problem states, leaves $y$ alone, so $y$ is solved for in terms of the others."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $5ax - 2b = 9$ for $x$, where $a$ is not $0$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (9+2*b)/(5*a)",
              "lines": [
                {
                  "step": "Solve $5ax - 2b = 9$ for $x$, where $a$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5ax = 9 + 2b$",
                  "reason": "Adding the same number to both sides: adding $2b$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = \\dfrac{9 + 2b}{5a}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5a$, which is not $0$, as the problem states, leaves $x$ alone, so $x$ is solved for in terms of the others."
                }
              ]
            },
            {
              "prompt": "Solve $2c + 6xz = y$ for $z$, where $x$ is not $0$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = (y-2*c)/(6*x)",
              "lines": [
                {
                  "step": "Solve $2c + 6xz = y$ for $z$, where $x$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6xz = y - 2c$",
                  "reason": "Adding the same number to both sides: adding $-2c$ to both sides keeps them equal and leaves the term in $z$ alone on the left."
                },
                {
                  "step": "$z = \\dfrac{y - 2c}{6x}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6x$, which is not $0$, as the problem states, leaves $z$ alone, so $z$ is solved for in terms of the others."
                }
              ]
            },
            {
              "prompt": "Solve $9b + 4c = 2x$ for $c$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "c = (2*x-9*b)/(4)",
              "lines": [
                {
                  "step": "Solve $9b + 4c = 2x$ for $c$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4c = 2x - 9b$",
                  "reason": "Adding the same number to both sides: adding $-9b$ to both sides keeps them equal and leaves the term in $c$ alone on the left."
                },
                {
                  "step": "$c = \\dfrac{2x - 9b}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$, which is not $0$, leaves $c$ alone, so $c$ is solved for in terms of the others."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $3ax + 2b = 5c - bx$ for $x$.",
            "lines": [
              {
                "step": "Solve $3ax + 2b = 5c - bx$ for $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3ax + bx = 5c - 2b$",
                "reason": "Adding the same number to both sides: adding $bx$ and $-2b$ to both sides keeps them equal and puts every term in $x$ on the left and every other term on the right."
              },
              {
                "step": "$x(3a + b) = 5c - 2b$",
                "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $x$, and the distributive law read backwards takes it out of the sum."
              },
              {
                "step": "Where $3a + b$ is not $0$, $x = \\dfrac{5c - 2b}{3a + b}$.",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3a + b$, where it is not $0$, leaves $x$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $5by - 3 = 2a + ay$ for $y$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (2*a+3)/(5*b-a)",
              "lines": [
                {
                  "step": "Solve $5by - 3 = 2a + ay$ for $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5by - ay = 2a + 3$",
                  "reason": "Adding the same number to both sides: adding $-ay$ and $3$ to both sides keeps them equal and puts every term in $y$ on the left and every other term on the right."
                },
                {
                  "step": "$y(5b - a) = 2a + 3$",
                  "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $y$, and the distributive law read backwards takes it out of the sum."
                },
                {
                  "step": "Where $5b - a$ is not $0$, $y = \\dfrac{2a + 3}{5b - a}$.",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5b - a$, where it is not $0$, leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Solve $4z + cz = 7a - 2bz$ for $z$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = (7*a)/(4+c+2*b)",
              "lines": [
                {
                  "step": "Solve $4z + cz = 7a - 2bz$ for $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4z + cz + 2bz = 7a$",
                  "reason": "Adding the same number to both sides: adding $2bz$ to both sides keeps them equal and puts every term in $z$ on the left and every other term on the right."
                },
                {
                  "step": "$z(4 + c + 2b) = 7a$",
                  "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $z$, and the distributive law read backwards takes it out of the sum."
                },
                {
                  "step": "Where $4 + c + 2b$ is not $0$, $z = \\dfrac{7a}{4 + c + 2b}$.",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4 + c + 2b$, where it is not $0$, leaves $z$ alone."
                }
              ]
            },
            {
              "prompt": "Solve $2xy - 5 = 3x + y$ for $x$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (y+5)/(2*y-3)",
              "lines": [
                {
                  "step": "Solve $2xy - 5 = 3x + y$ for $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2xy - 3x = y + 5$",
                  "reason": "Adding the same number to both sides: adding $-3x$ and $5$ to both sides keeps them equal and puts every term in $x$ on the left and every other term on the right."
                },
                {
                  "step": "$x(2y - 3) = y + 5$",
                  "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $x$, and the distributive law read backwards takes it out of the sum."
                },
                {
                  "step": "Where $2y - 3$ is not $0$, $x = \\dfrac{y + 5}{2y - 3}$.",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2y - 3$, where it is not $0$, leaves $x$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{x + a}{x - a} = b$ for $x$, where $x$ is not $a$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{x + a}{x - a} = b$ for $x$, where $x$ is not $a$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + a = b(x - a)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - a$, which is not $0$, as the problem states, and the fraction leaves its top."
              },
              {
                "step": "$x + a = bx - ab$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$x - bx = -ab - a$",
                "reason": "Adding the same number to both sides: adding $-bx$ and $-a$ to both sides puts every term in $x$ on the left and every other term on the right."
              },
              {
                "step": "$x(1 - b) = -ab - a$",
                "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $x$, and the distributive law read backwards takes it out of the sum."
              },
              {
                "step": "Where $1 - b$ is not $0$, $x = \\dfrac{-ab - a}{1 - b}$.",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $1 - b$, where it is not $0$, leaves $x$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{y - 2c}{y + c} = a$ for $y$, where $y$ is not $-c$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (a*c+2*c)/(1-a)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{y - 2c}{y + c} = a$ for $y$, where $y$ is not $-c$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 2c = a(y + c)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y + c$, which is not $0$, as the problem states, and the fraction leaves its top."
                },
                {
                  "step": "$y - 2c = ay + ac$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$y - ay = ac + 2c$",
                  "reason": "Adding the same number to both sides: adding $-ay$ and $2c$ to both sides puts every term in $y$ on the left and every other term on the right."
                },
                {
                  "step": "$y(1 - a) = ac + 2c$",
                  "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $y$, and the distributive law read backwards takes it out of the sum."
                },
                {
                  "step": "Where $1 - a$ is not $0$, $y = \\dfrac{ac + 2c}{1 - a}$.",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $1 - a$, where it is not $0$, leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{3z + b}{z - 2} = c$ for $z$, where $z$ is not $2$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = (-2*c-b)/(3-c)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{3z + b}{z - 2} = c$ for $z$, where $z$ is not $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3z + b = c(z - 2)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $z - 2$, which is not $0$, as the problem states, and the fraction leaves its top."
                },
                {
                  "step": "$3z + b = cz - 2c$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$3z - cz = -2c - b$",
                  "reason": "Adding the same number to both sides: adding $-cz$ and $-b$ to both sides puts every term in $z$ on the left and every other term on the right."
                },
                {
                  "step": "$z(3 - c) = -2c - b$",
                  "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $z$, and the distributive law read backwards takes it out of the sum."
                },
                {
                  "step": "Where $3 - c$ is not $0$, $z = \\dfrac{-2c - b}{3 - c}$.",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3 - c$, where it is not $0$, leaves $z$ alone."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{ax + 1}{x + 4} = b$ for $x$, where $x$ is not $-4$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (4*b-1)/(a-b)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{ax + 1}{x + 4} = b$ for $x$, where $x$ is not $-4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ax + 1 = b(x + 4)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x + 4$, which is not $0$, as the problem states, and the fraction leaves its top."
                },
                {
                  "step": "$ax + 1 = bx + 4b$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$ax - bx = 4b - 1$",
                  "reason": "Adding the same number to both sides: adding $-bx$ and $-1$ to both sides puts every term in $x$ on the left and every other term on the right."
                },
                {
                  "step": "$x(a - b) = 4b - 1$",
                  "reason": "Collecting the terms with the letter and factoring it out: each term on the left has the factor $x$, and the distributive law read backwards takes it out of the sum."
                },
                {
                  "step": "Where $a - b$ is not $0$, $x = \\dfrac{4b - 1}{a - b}$.",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $a - b$, where it is not $0$, leaves $x$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{5y}{b} - 2 = 3a$ for $y$, where $b$ is not $0$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{5y}{b} - 2 = 3a$ for $y$, where $b$ is not $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5y - 2b = 3ab$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $b$, which is not $0$, as the problem states; each term is multiplied, and the fraction leaves its top."
              },
              {
                "step": "$5y = 3ab + 2b$",
                "reason": "Adding the same number to both sides: adding $2b$ to both sides leaves the term in $y$ alone on the left."
              },
              {
                "step": "$y = \\dfrac{3ab + 2b}{5}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone, so $y$ is solved for in terms of the others."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{2y}{b} - c = 5$ for $y$, where $b$ is not $0$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (5*b+b*c)/(2)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{2y}{b} - c = 5$ for $y$, where $b$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y - bc = 5b$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $b$, which is not $0$, as the problem states; each term is multiplied, and the fraction leaves its top."
                },
                {
                  "step": "$2y = 5b + bc$",
                  "reason": "Adding the same number to both sides: adding $bc$ to both sides leaves the term in $y$ alone on the left."
                },
                {
                  "step": "$y = \\dfrac{5b + bc}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone, so $y$ is solved for in terms of the others."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{4z}{c} + 3 = a$ for $z$, where $c$ is not $0$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "z = (a*c-3*c)/(4)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{4z}{c} + 3 = a$ for $z$, where $c$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4z + 3c = ac$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $c$, which is not $0$, as the problem states; each term is multiplied, and the fraction leaves its top."
                },
                {
                  "step": "$4z = ac - 3c$",
                  "reason": "Adding the same number to both sides: adding $-3c$ to both sides leaves the term in $z$ alone on the left."
                },
                {
                  "step": "$z = \\dfrac{ac - 3c}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $z$ alone, so $z$ is solved for in terms of the others."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{5x}{2a} - b = 1$ for $x$, where $a$ is not $0$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (2*a+2*a*b)/(5)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{5x}{2a} - b = 1$ for $x$, where $a$ is not $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 2ab = 2a$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2a$, which is not $0$, since $a$ is not $0$; each term is multiplied, and the fraction leaves its top."
                },
                {
                  "step": "$5x = 2a + 2ab$",
                  "reason": "Adding the same number to both sides: adding $2ab$ to both sides leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = \\dfrac{2a + 2ab}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone, so $x$ is solved for in terms of the others."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t112-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $2ax + 3b = c - 5x$ for $x$, and write that line right.",
            "given": [
              "$2ax + 3b = c - 5x$",
              "$2ax - 5x = c - 3b$",
              "$x(2a - 5) = c - 3b$",
              "$x = \\dfrac{c - 3b}{2a - 5}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $2ax + 3b = c - 5x$ for $x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 is the first wrong line, where a sign is lost: moving $-5x$ to the other side keeps its sign.",
                "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
              },
              {
                "step": "Line 2 written right is $2ax + 5x = c - 3b$.",
                "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $5ax - 2c = 7b + bx$ for $x$, and write that line right.",
              "given": [
                "$5ax - 2c = 7b + bx$",
                "$5ax - bx = 7b - 2c$",
                "$x(5a - b) = 7b - 2c$",
                "$x = \\dfrac{7b - 2c}{5a - b}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 5*a*x-b*x = 7*b+2*c",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $5ax - 2c = 7b + bx$ for $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 is the first wrong line, where a sign is lost: moving $-2c$ to the other side keeps its sign.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $5ax - bx = 7b + 2c$.",
                  "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $ax + 4c = 9 - 3bx$ for $x$, and write that line right.",
              "given": [
                "$ax + 4c = 9 - 3bx$",
                "$ax - 3bx = 9 - 4c$",
                "$x(a - 3b) = 9 - 4c$",
                "$x = \\dfrac{9 - 4c}{a - 3b}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: a*x+3*b*x = 9-4*c",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $ax + 4c = 9 - 3bx$ for $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 is the first wrong line, where a sign is lost: moving $-3bx$ to the other side keeps its sign.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $ax + 3bx = 9 - 4c$.",
                  "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $4cx - 3a = 6 + 2x$ for $x$, and write that line right.",
              "given": [
                "$4cx - 3a = 6 + 2x$",
                "$4cx - 2x = 6 - 3a$",
                "$x(4c - 2) = 6 - 3a$",
                "$x = \\dfrac{6 - 3a}{4c - 2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 4*c*x-2*x = 6+3*a",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $4cx - 3a = 6 + 2x$ for $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 is the first wrong line, where a sign is lost: moving $-3a$ to the other side keeps its sign.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $4cx - 2x = 6 + 3a$.",
                  "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $4by - c = 2a + 3cy$ for $y$, and write that line right.",
            "given": [
              "$4by - c = 2a + 3cy$",
              "$4by - 3cy = 2a + c$",
              "$y(bc) = 2a + c$",
              "$y = \\dfrac{2a + c}{bc}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $4by - c = 2a + 3cy$ for $y$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 is the first wrong line, where the letters are read as objects: $4b - 3c$ becomes $bc$, as if unlike terms joined into one term.",
                "reason": "Collecting like terms: only like terms join, so two unlike terms stay two terms inside the bracket."
              },
              {
                "step": "Line 3 written right is $y(4b - 3c) = 2a + c$.",
                "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $2cy + 9 = 4a - 5by$ for $y$, and write that line right.",
              "given": [
                "$2cy + 9 = 4a - 5by$",
                "$2cy + 5by = 4a - 9$",
                "$y(7bc) = 4a - 9$",
                "$y = \\dfrac{4a - 9}{7bc}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y*(2*c+5*b) = 4*a-9",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2cy + 9 = 4a - 5by$ for $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 is the first wrong line, where the letters are read as objects: $2c + 5b$ becomes $7bc$, as if unlike terms joined into one term.",
                  "reason": "Collecting like terms: only like terms join, so two unlike terms stay two terms inside the bracket."
                },
                {
                  "step": "Line 3 written right is $y(2c + 5b) = 4a - 9$.",
                  "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $3ay - 2 = 5c + 4by$ for $y$, and write that line right.",
              "given": [
                "$3ay - 2 = 5c + 4by$",
                "$3ay - 4by = 5c + 2$",
                "$y(-ab) = 5c + 2$",
                "$y = \\dfrac{5c + 2}{-ab}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y*(3*a-4*b) = 5*c+2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $3ay - 2 = 5c + 4by$ for $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 is the first wrong line, where the letters are read as objects: $3a - 4b$ becomes $-ab$, as if unlike terms joined into one term.",
                  "reason": "Collecting like terms: only like terms join, so two unlike terms stay two terms inside the bracket."
                },
                {
                  "step": "Line 3 written right is $y(3a - 4b) = 5c + 2$.",
                  "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $6ay + c = 2b - 3cy$ for $y$, and write that line right.",
              "given": [
                "$6ay + c = 2b - 3cy$",
                "$6ay + 3cy = 2b - c$",
                "$y(9ac) = 2b - c$",
                "$y = \\dfrac{2b - c}{9ac}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y*(6*a+3*c) = 2*b-c",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $6ay + c = 2b - 3cy$ for $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 is the first wrong line, where the letters are read as objects: $6a + 3c$ becomes $9ac$, as if unlike terms joined into one term.",
                  "reason": "Collecting like terms: only like terms join, so two unlike terms stay two terms inside the bracket."
                },
                {
                  "step": "Line 3 written right is $y(6a + 3c) = 2b - c$.",
                  "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $3cz + a = 8 - bz$ for $z$, and write that line right.",
            "given": [
              "$3cz + a = 8 - bz$",
              "$3cz + bz = 8 - a$",
              "$z(3c + b) = 8 - a$",
              "$z = \\dfrac{a - 8}{3c + b}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $3cz + a = 8 - bz$ for $z$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 is the first wrong line, where a sign is lost: the top of the fraction is not the right side of line 3.",
                "reason": "Dividing both sides by a nonzero number: the whole right side is divided, each sign kept."
              },
              {
                "step": "Line 4 written right is $z = \\dfrac{8 - a}{3c + b}$.",
                "reason": "Each line before line 4 is right, and line 4 written right follows from line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $6bz - a = 2c + 4z$ for $z$, and write that line right.",
              "given": [
                "$6bz - a = 2c + 4z$",
                "$6bz - 4z = 2c + a$",
                "$z(6b - 4) = 2c + a$",
                "$z = \\dfrac{-2c - a}{6b - 4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: z = (2*c+a)/(6*b-4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $6bz - a = 2c + 4z$ for $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 is the first wrong line, where a sign is lost: the top of the fraction is not the right side of line 3.",
                  "reason": "Dividing both sides by a nonzero number: the whole right side is divided, each sign kept."
                },
                {
                  "step": "Line 4 written right is $z = \\dfrac{2c + a}{6b - 4}$.",
                  "reason": "Each line before line 4 is right, and line 4 written right follows from line 3."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $7z + 2a = 3bz - c$ for $z$, and write that line right.",
              "given": [
                "$7z + 2a = 3bz - c$",
                "$7z - 3bz = -c - 2a$",
                "$z(7 - 3b) = -c - 2a$",
                "$z = \\dfrac{c + 2a}{7 - 3b}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: z = (-c-2*a)/(7-3*b)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $7z + 2a = 3bz - c$ for $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 is the first wrong line, where a sign is lost: the top of the fraction is not the right side of line 3.",
                  "reason": "Dividing both sides by a nonzero number: the whole right side is divided, each sign kept."
                },
                {
                  "step": "Line 4 written right is $z = \\dfrac{-c - 2a}{7 - 3b}$.",
                  "reason": "Each line before line 4 is right, and line 4 written right follows from line 3."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2bz + 5c = a - 7z$ for $z$, and write that line right.",
              "given": [
                "$2bz + 5c = a - 7z$",
                "$2bz + 7z = a - 5c$",
                "$z(2b + 7) = a - 5c$",
                "$z = \\dfrac{5c - a}{2b + 7}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: z = (a-5*c)/(2*b+7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2bz + 5c = a - 7z$ for $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 is the first wrong line, where a sign is lost: the top of the fraction is not the right side of line 3.",
                  "reason": "Dividing both sides by a nonzero number: the whole right side is divided, each sign kept."
                },
                {
                  "step": "Line 4 written right is $z = \\dfrac{a - 5c}{2b + 7}$.",
                  "reason": "Each line before line 4 is right, and line 4 written right follows from line 3."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t112-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation: the distance $y$ is the speed $x$ times the time $z$, less a head start of 6.",
            "lines": [
              {
                "step": "Write this sentence as an equation: the distance $y$ is the speed $x$ times the time $z$, less a head start of 6.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first piece is $xz$.",
                "reason": "Writing a sentence as an equation: the speed times the time is the product $xz$."
              },
              {
                "step": "The whole phrase is $xz - 6$.",
                "reason": "Writing a sentence as an equation: less 6 means 6 is taken away."
              },
              {
                "step": "$y = xz - 6$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 4 more than the product of $x$ and $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x*z+4",
              "lines": [
                {
                  "step": "Write this sentence as an equation: the number $y$ is 4 more than the product of $x$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first piece is $xz$.",
                  "reason": "Writing a sentence as an equation: the product of two numbers is the two multiplied."
                },
                {
                  "step": "The whole phrase is $xz + 4$.",
                  "reason": "Writing a sentence as an equation: 4 more than an amount means 4 is added to it."
                },
                {
                  "step": "$y = xz + 4$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 3 times the sum of $x$ and $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*(x+z)",
              "lines": [
                {
                  "step": "Write this sentence as an equation: the number $y$ is 3 times the sum of $x$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first piece is $x + z$.",
                  "reason": "Writing a sentence as an equation: the sum of two numbers is the two added."
                },
                {
                  "step": "The whole phrase is $3(x + z)$.",
                  "reason": "Writing a sentence as an equation: 3 times an amount multiplies the whole amount, so it takes a bracket."
                },
                {
                  "step": "$y = 3(x + z)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $z$ equals $x$ divided by the sum of $y$ and 5.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (x)/(y+5)",
              "lines": [
                {
                  "step": "Write this sentence as an equation: the number $z$ equals $x$ divided by the sum of $y$ and 5.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first piece is $y + 5$.",
                  "reason": "Writing a sentence as an equation: the sum of $y$ and 5 is the two added."
                },
                {
                  "step": "The whole phrase is $\\dfrac{x}{y + 5}$.",
                  "reason": "Writing a sentence as an equation: divided by the sum means the whole sum is the bottom of the fraction."
                },
                {
                  "step": "$z = \\dfrac{x}{y + 5}$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" stands where the equals sign goes."
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
