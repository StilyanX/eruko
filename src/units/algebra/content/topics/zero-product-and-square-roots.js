export default {
  "number": 134,
  "title": "Solving by square roots and by a zero product",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "286-292"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $x^2 = 7x$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = 0, x = 7",
    "solution": [
      "$x^2 = 7x$",
      "$x^2 - 7x = 0$",
      "$x(x - 7) = 0$",
      "Either $x = 0$ or $x - 7 = 0$.",
      "Either $x = 0$ or $x = 7$."
    ]
  },
  "ideas": [
    {
      "name": "A product equal to 0",
      "concrete": "In $x(x - 10) = 0$ the product is 0 when $x = 0$ and when $x - 10 = 0$, so the roots are $x = 0$ and $x = 10$. Dividing $x^2 = 10x$ by $x$ would leave $x = 10$ alone and lose the root $x = 0$.",
      "general": "A **quadratic equation** in $x$ is an equation that can be written $ax^2 + bx + c = 0$ with numbers $a$, $b$ and $c$ and $a \\ne 0$. A **root** of an equation is a value of the unknown that makes it true. For all numbers $a$ and $b$, $ab = 0$ exactly when $a = 0$ or $b = 0$: the **zero-product property**, as arithmetic proved it for rational numbers. So moving every term to one side and writing that side as a product turns one equation into simpler ones. **Never divide by an expression that may be zero**: dividing both sides by $x$ loses the root $x = 0$."
    },
    {
      "name": "Square roots of both sides",
      "concrete": "In $x^2 = 64$ both $8^2$ and $(-8)^2$ are 64, so $x = 8$ or $x = -8$. In $x^2 = 48$ the roots are $\\sqrt{48}$ and $-\\sqrt{48}$, which in simplest radical form are $4\\sqrt{3}$ and $-4\\sqrt{3}$.",
      "general": "For all numbers $x$ and $a$, **if $x^2 = a^2$ then $x = a$ or $x = -a$**. So for a number $c$ above 0, $x^2 = c$ has the two roots $x = \\sqrt{c}$ and $x = -\\sqrt{c}$, and a bracket squared, as in $(2x - 1)^2 = c$, gives two equations of the first power."
    }
  ],
  "kinds": [
    {
      "id": "t134-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $2x^2 - 9x = 0$.",
            "lines": [
              {
                "step": "$2x^2 - 9x = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x(2x - 9) = 0$",
                "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
              },
              {
                "step": "Either $x = 0$ or $2x - 9 = 0$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $x$ is 0 or the bracket is 0."
              },
              {
                "step": "Either $x = 0$ or $2x = 9$.",
                "reason": "Adding the same number to both sides: $9$ is added to each side of the second equation."
              },
              {
                "step": "Either $x = 0$ or $x = \\dfrac{9}{2}$.",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3x^2 + 5x = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 0, x = -5/3",
              "lines": [
                {
                  "step": "$3x^2 + 5x = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(3x + 5) = 0$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
                },
                {
                  "step": "Either $x = 0$ or $3x + 5 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $x$ is 0 or the bracket is 0."
                },
                {
                  "step": "Either $x = 0$ or $3x = -5$.",
                  "reason": "Adding the same number to both sides: $-5$ is added to each side of the second equation."
                },
                {
                  "step": "Either $x = 0$ or $x = -\\dfrac{5}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Solve $4y^2 - 7y = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 0, y = 7/4",
              "lines": [
                {
                  "step": "$4y^2 - 7y = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(4y - 7) = 0$",
                  "reason": "Taking out a common factor: $y$ is a factor of both terms, and the distributive law read backwards writes the sum as $y$ times a bracket."
                },
                {
                  "step": "Either $y = 0$ or $4y - 7 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $y$ is 0 or the bracket is 0."
                },
                {
                  "step": "Either $y = 0$ or $4y = 7$.",
                  "reason": "Adding the same number to both sides: $7$ is added to each side of the second equation."
                },
                {
                  "step": "Either $y = 0$ or $y = \\dfrac{7}{4}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Solve $5z^2 + 12z = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 0, z = -12/5",
              "lines": [
                {
                  "step": "$5z^2 + 12z = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z(5z + 12) = 0$",
                  "reason": "Taking out a common factor: $z$ is a factor of both terms, and the distributive law read backwards writes the sum as $z$ times a bracket."
                },
                {
                  "step": "Either $z = 0$ or $5z + 12 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $z$ is 0 or the bracket is 0."
                },
                {
                  "step": "Either $z = 0$ or $5z = -12$.",
                  "reason": "Adding the same number to both sides: $-12$ is added to each side of the second equation."
                },
                {
                  "step": "Either $z = 0$ or $z = -\\dfrac{12}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $5$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $3x^2 = 8x$.",
            "lines": [
              {
                "step": "$3x^2 = 8x$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x^2 - 8x = 0$",
                "reason": "Adding the same number to both sides: $-8x$ is added to each side, so that one side is 0. Never divide by an expression that may be zero: dividing by $x$ would lose the root $x = 0$."
              },
              {
                "step": "$x(3x - 8) = 0$",
                "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
              },
              {
                "step": "Either $x = 0$ or $3x - 8 = 0$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $x$ is 0 or the bracket is 0."
              },
              {
                "step": "Either $x = 0$ or $3x = 8$.",
                "reason": "Adding the same number to both sides: $8$ is added to each side of the second equation."
              },
              {
                "step": "Either $x = 0$ or $x = \\dfrac{8}{3}$.",
                "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x^2 = -17x$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 0, x = -17/2",
              "lines": [
                {
                  "step": "$2x^2 = -17x$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 + 17x = 0$",
                  "reason": "Adding the same number to both sides: $17x$ is added to each side, so that one side is 0. Never divide by an expression that may be zero: dividing by $x$ would lose the root $x = 0$."
                },
                {
                  "step": "$x(2x + 17) = 0$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
                },
                {
                  "step": "Either $x = 0$ or $2x + 17 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $x$ is 0 or the bracket is 0."
                },
                {
                  "step": "Either $x = 0$ or $2x = -17$.",
                  "reason": "Adding the same number to both sides: $-17$ is added to each side of the second equation."
                },
                {
                  "step": "Either $x = 0$ or $x = -\\dfrac{17}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $5y^2 = 6y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 0, y = 6/5",
              "lines": [
                {
                  "step": "$5y^2 = 6y$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5y^2 - 6y = 0$",
                  "reason": "Adding the same number to both sides: $-6y$ is added to each side, so that one side is 0. Never divide by an expression that may be zero: dividing by $y$ would lose the root $y = 0$."
                },
                {
                  "step": "$y(5y - 6) = 0$",
                  "reason": "Taking out a common factor: $y$ is a factor of both terms, and the distributive law read backwards writes the sum as $y$ times a bracket."
                },
                {
                  "step": "Either $y = 0$ or $5y - 6 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $y$ is 0 or the bracket is 0."
                },
                {
                  "step": "Either $y = 0$ or $5y = 6$.",
                  "reason": "Adding the same number to both sides: $6$ is added to each side of the second equation."
                },
                {
                  "step": "Either $y = 0$ or $y = \\dfrac{6}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Solve $4z^2 = -11z$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 0, z = -11/4",
              "lines": [
                {
                  "step": "$4z^2 = -11z$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4z^2 + 11z = 0$",
                  "reason": "Adding the same number to both sides: $11z$ is added to each side, so that one side is 0. Never divide by an expression that may be zero: dividing by $z$ would lose the root $z = 0$."
                },
                {
                  "step": "$z(4z + 11) = 0$",
                  "reason": "Taking out a common factor: $z$ is a factor of both terms, and the distributive law read backwards writes the sum as $z$ times a bracket."
                },
                {
                  "step": "Either $z = 0$ or $4z + 11 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0, so $z$ is 0 or the bracket is 0."
                },
                {
                  "step": "Either $z = 0$ or $4z = -11$.",
                  "reason": "Adding the same number to both sides: $-11$ is added to each side of the second equation."
                },
                {
                  "step": "Either $z = 0$ or $z = -\\dfrac{11}{4}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of the second equation are divided by $4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t134-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $2x^2 = 2048$.",
            "lines": [
              {
                "step": "$2x^2 = 2048$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 = 1024$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, which leaves $x^2$ alone."
              },
              {
                "step": "Either $x = 32$ or $x = -32$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $1024 = 32^2$, and $-32$ squared is $1024$ too, so both are roots."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3x^2 = 147$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 7, x = -7",
              "lines": [
                {
                  "step": "$3x^2 = 147$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 = 49$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, which leaves $x^2$ alone."
                },
                {
                  "step": "Either $x = 7$ or $x = -7$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $49 = 7^2$, and $-7$ squared is $49$ too, so both are roots."
                }
              ]
            },
            {
              "prompt": "Solve $2y^2 = 162$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 9, y = -9",
              "lines": [
                {
                  "step": "$2y^2 = 162$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 = 81$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, which leaves $y^2$ alone."
                },
                {
                  "step": "Either $y = 9$ or $y = -9$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $81 = 9^2$, and $-9$ squared is $81$ too, so both are roots."
                }
              ]
            },
            {
              "prompt": "Solve $7z^2 = 28$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 2, z = -2",
              "lines": [
                {
                  "step": "$7z^2 = 28$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$, which leaves $z^2$ alone."
                },
                {
                  "step": "Either $z = 2$ or $z = -2$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $4 = 2^2$, and $-2$ squared is $4$ too, so both are roots."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $3x^2 - 60 = 0$.",
            "lines": [
              {
                "step": "$3x^2 - 60 = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x^2 = 60$",
                "reason": "Adding the same number to both sides: $60$ is added to each side."
              },
              {
                "step": "$x^2 = 20$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, which leaves $x^2$ alone."
              },
              {
                "step": "Either $x = \\sqrt{20}$ or $x = -\\sqrt{20}$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the positive square root $\\sqrt{20}$ squared is $20$, and so is its negative."
              },
              {
                "step": "$\\sqrt{20} = \\sqrt{4}\\sqrt{5}$",
                "reason": "Root of a product: $20 = 4 \\cdot 5$."
              },
              {
                "step": "Either $x = 2\\sqrt{5}$ or $x = -2\\sqrt{5}$.",
                "reason": "Simplest radical form: the positive square root of $4$ is $2$, which takes the square factor out of the root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x^2 - 24 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 2*sqrt(3), x = -2*sqrt(3)",
              "lines": [
                {
                  "step": "$2x^2 - 24 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 = 24$",
                  "reason": "Adding the same number to both sides: $24$ is added to each side."
                },
                {
                  "step": "$x^2 = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, which leaves $x^2$ alone."
                },
                {
                  "step": "Either $x = \\sqrt{12}$ or $x = -\\sqrt{12}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the positive square root $\\sqrt{12}$ squared is $12$, and so is its negative."
                },
                {
                  "step": "$\\sqrt{12} = \\sqrt{4}\\sqrt{3}$",
                  "reason": "Root of a product: $12 = 4 \\cdot 3$."
                },
                {
                  "step": "Either $x = 2\\sqrt{3}$ or $x = -2\\sqrt{3}$.",
                  "reason": "Simplest radical form: the positive square root of $4$ is $2$, which takes the square factor out of the root."
                }
              ]
            },
            {
              "prompt": "Solve $5y^2 - 90 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 3*sqrt(2), y = -3*sqrt(2)",
              "lines": [
                {
                  "step": "$5y^2 - 90 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5y^2 = 90$",
                  "reason": "Adding the same number to both sides: $90$ is added to each side."
                },
                {
                  "step": "$y^2 = 18$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$, which leaves $y^2$ alone."
                },
                {
                  "step": "Either $y = \\sqrt{18}$ or $y = -\\sqrt{18}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the positive square root $\\sqrt{18}$ squared is $18$, and so is its negative."
                },
                {
                  "step": "$\\sqrt{18} = \\sqrt{9}\\sqrt{2}$",
                  "reason": "Root of a product: $18 = 9 \\cdot 2$."
                },
                {
                  "step": "Either $y = 3\\sqrt{2}$ or $y = -3\\sqrt{2}$.",
                  "reason": "Simplest radical form: the positive square root of $9$ is $3$, which takes the square factor out of the root."
                }
              ]
            },
            {
              "prompt": "Solve $4z^2 - 112 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 2*sqrt(7), z = -2*sqrt(7)",
              "lines": [
                {
                  "step": "$4z^2 - 112 = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4z^2 = 112$",
                  "reason": "Adding the same number to both sides: $112$ is added to each side."
                },
                {
                  "step": "$z^2 = 28$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, which leaves $z^2$ alone."
                },
                {
                  "step": "Either $z = \\sqrt{28}$ or $z = -\\sqrt{28}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the positive square root $\\sqrt{28}$ squared is $28$, and so is its negative."
                },
                {
                  "step": "$\\sqrt{28} = \\sqrt{4}\\sqrt{7}$",
                  "reason": "Root of a product: $28 = 4 \\cdot 7$."
                },
                {
                  "step": "Either $z = 2\\sqrt{7}$ or $z = -2\\sqrt{7}$.",
                  "reason": "Simplest radical form: the positive square root of $4$ is $2$, which takes the square factor out of the root."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(2x - 3)^2 = 169$.",
            "lines": [
              {
                "step": "$(2x - 3)^2 = 169$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Either $2x - 3 = 13$ or $2x - 3 = -13$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here the bracket plays the part of $x$, and $169 = 13^2$."
              },
              {
                "step": "Either $2x = 16$ or $2x = -10$.",
                "reason": "Adding the same number to both sides: $3$ is added to each side of both equations."
              },
              {
                "step": "Either $x = 8$ or $x = -5$.",
                "reason": "Dividing both sides by a nonzero number: both sides of both equations are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x + 1)^2 = 25$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4/3, x = -2",
              "lines": [
                {
                  "step": "$(3x + 1)^2 = 25$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $3x + 1 = 5$ or $3x + 1 = -5$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here the bracket plays the part of $x$, and $25 = 5^2$."
                },
                {
                  "step": "Either $3x = 4$ or $3x = -6$.",
                  "reason": "Adding the same number to both sides: $-1$ is added to each side of both equations."
                },
                {
                  "step": "Either $x = \\dfrac{4}{3}$ or $x = -2$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of both equations are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Solve $(2y + 5)^2 = 225$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 5, y = -10",
              "lines": [
                {
                  "step": "$(2y + 5)^2 = 225$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $2y + 5 = 15$ or $2y + 5 = -15$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here the bracket plays the part of $y$, and $225 = 15^2$."
                },
                {
                  "step": "Either $2y = 10$ or $2y = -20$.",
                  "reason": "Adding the same number to both sides: $-5$ is added to each side of both equations."
                },
                {
                  "step": "Either $y = 5$ or $y = -10$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of both equations are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $(4z - 1)^2 = 9$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 1, z = -1/2",
              "lines": [
                {
                  "step": "$(4z - 1)^2 = 9$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $4z - 1 = 3$ or $4z - 1 = -3$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here the bracket plays the part of $z$, and $9 = 3^2$."
                },
                {
                  "step": "Either $4z = 4$ or $4z = -2$.",
                  "reason": "Adding the same number to both sides: $1$ is added to each side of both equations."
                },
                {
                  "step": "Either $z = 1$ or $z = -\\dfrac{1}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of both equations are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{x^2}{13} = 117$.",
            "lines": [
              {
                "step": "$\\dfrac{x^2}{13} = 117$",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 = 1521$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $13$, which leaves $x^2$ alone."
              },
              {
                "step": "Either $x = 39$ or $x = -39$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $1521 = 39^2$, and $-39$ squared is $1521$ too, so both are roots."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x^2}{7} = 112$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 28, x = -28",
              "lines": [
                {
                  "step": "$\\dfrac{x^2}{7} = 112$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 = 784$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $7$, which leaves $x^2$ alone."
                },
                {
                  "step": "Either $x = 28$ or $x = -28$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $784 = 28^2$, and $-28$ squared is $784$ too, so both are roots."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{y^2}{11} = 11$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 11, y = -11",
              "lines": [
                {
                  "step": "$\\dfrac{y^2}{11} = 11$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 = 121$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $11$, which leaves $y^2$ alone."
                },
                {
                  "step": "Either $y = 11$ or $y = -11$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $121 = 11^2$, and $-11$ squared is $121$ too, so both are roots."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{z^2}{3} = 363$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 33, z = -33",
              "lines": [
                {
                  "step": "$\\dfrac{z^2}{3} = 363$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 = 1089$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $3$, which leaves $z^2$ alone."
                },
                {
                  "step": "Either $z = 33$ or $z = -33$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $1089 = 33^2$, and $-33$ squared is $1089$ too, so both are roots."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t134-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $(2x - 5)(3x + 4) = 0$.",
            "lines": [
              {
                "step": "$(2x - 5)(3x + 4) = 0$",
                "reason": "This is the problem as given."
              },
              {
                "step": "Either $2x - 5 = 0$ or $3x + 4 = 0$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $2x = 5$ or $3x = -4$.",
                "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
              },
              {
                "step": "Either $x = \\dfrac{5}{2}$ or $x = -\\dfrac{4}{3}$.",
                "reason": "Dividing both sides by a nonzero number: the first equation is divided by $2$ and the second by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x + 2)(2x - 7) = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -2/3, x = 7/2",
              "lines": [
                {
                  "step": "$(3x + 2)(2x - 7) = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $3x + 2 = 0$ or $2x - 7 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $3x = -2$ or $2x = 7$.",
                  "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
                },
                {
                  "step": "Either $x = -\\dfrac{2}{3}$ or $x = \\dfrac{7}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided by $3$ and the second by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $(5x - 1)(4x + 3) = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/5, x = -3/4",
              "lines": [
                {
                  "step": "$(5x - 1)(4x + 3) = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $5x - 1 = 0$ or $4x + 3 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $5x = 1$ or $4x = -3$.",
                  "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
                },
                {
                  "step": "Either $x = \\dfrac{1}{5}$ or $x = -\\dfrac{3}{4}$.",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided by $5$ and the second by $4$."
                }
              ]
            },
            {
              "prompt": "Solve $(2x + 9)(7x - 2) = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -9/2, x = 2/7",
              "lines": [
                {
                  "step": "$(2x + 9)(7x - 2) = 0$",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $2x + 9 = 0$ or $7x - 2 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $2x = -9$ or $7x = 2$.",
                  "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
                },
                {
                  "step": "Either $x = -\\dfrac{9}{2}$ or $x = \\dfrac{2}{7}$.",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided by $2$ and the second by $7$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write a product of two brackets that is 0 exactly when $x = \\dfrac{2}{3}$ or $x = -4$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
            "lines": [
              {
                "step": "Write a product of two brackets that is 0 exactly when $x = \\dfrac{2}{3}$ or $x = -4$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The value $x = \\dfrac{2}{3}$ makes $3x - 2$ zero.",
                "reason": "Substituting a value: $3 \\cdot \\dfrac{2}{3} - 2 = 0$, and $3$ is the least whole number above 0 that clears the denominator, so the bracket has no common factor."
              },
              {
                "step": "The value $x = -4$ makes $x + 4$ zero.",
                "reason": "Substituting a value: $(-4) + 4 = 0$, and the root is a whole number, so the bracket needs no number in front of $x$."
              },
              {
                "step": "$(3x - 2)(x + 4)$",
                "reason": "Zero-product property: the product is 0 exactly when one of its brackets is 0, which is exactly at $x = \\dfrac{2}{3}$ and at $x = -4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write a product of two brackets that is 0 exactly when $x = \\dfrac{5}{2}$ or $x = -1$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(2*x-5)*(x+1)",
              "lines": [
                {
                  "step": "Write a product of two brackets that is 0 exactly when $x = \\dfrac{5}{2}$ or $x = -1$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value $x = \\dfrac{5}{2}$ makes $2x - 5$ zero.",
                  "reason": "Substituting a value: $2 \\cdot \\dfrac{5}{2} - 5 = 0$, and $2$ is the least whole number above 0 that clears the denominator, so the bracket has no common factor."
                },
                {
                  "step": "The value $x = -1$ makes $x + 1$ zero.",
                  "reason": "Substituting a value: $(-1) + 1 = 0$, and the root is a whole number, so the bracket needs no number in front of $x$."
                },
                {
                  "step": "$(2x - 5)(x + 1)$",
                  "reason": "Zero-product property: the product is 0 exactly when one of its brackets is 0, which is exactly at $x = \\dfrac{5}{2}$ and at $x = -1$."
                }
              ]
            },
            {
              "prompt": "Write a product of two brackets that is 0 exactly when $x = -\\dfrac{1}{3}$ or $x = 6$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(3*x+1)*(x-6)",
              "lines": [
                {
                  "step": "Write a product of two brackets that is 0 exactly when $x = -\\dfrac{1}{3}$ or $x = 6$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value $x = -\\dfrac{1}{3}$ makes $3x + 1$ zero.",
                  "reason": "Substituting a value: $3 \\cdot (-\\dfrac{1}{3}) + 1 = 0$, and $3$ is the least whole number above 0 that clears the denominator, so the bracket has no common factor."
                },
                {
                  "step": "The value $x = 6$ makes $x - 6$ zero.",
                  "reason": "Substituting a value: $6 - 6 = 0$, and the root is a whole number, so the bracket needs no number in front of $x$."
                },
                {
                  "step": "$(3x + 1)(x - 6)$",
                  "reason": "Zero-product property: the product is 0 exactly when one of its brackets is 0, which is exactly at $x = -\\dfrac{1}{3}$ and at $x = 6$."
                }
              ]
            },
            {
              "prompt": "Write a product of two brackets that is 0 exactly when $x = 7$ or $x = -\\dfrac{3}{4}$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-7)*(4*x+3)",
              "lines": [
                {
                  "step": "Write a product of two brackets that is 0 exactly when $x = 7$ or $x = -\\dfrac{3}{4}$, each bracket of the shape $ax + b$ with whole numbers $a$ and $b$, $a$ above 0 and no common factor, and no number in front.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value $x = 7$ makes $x - 7$ zero.",
                  "reason": "Substituting a value: $7 - 7 = 0$, and the root is a whole number, so the bracket needs no number in front of $x$."
                },
                {
                  "step": "The value $x = -\\dfrac{3}{4}$ makes $4x + 3$ zero.",
                  "reason": "Substituting a value: $4 \\cdot (-\\dfrac{3}{4}) + 3 = 0$, and $4$ is the least whole number above 0 that clears the denominator, so the bracket has no common factor."
                },
                {
                  "step": "$(x - 7)(4x + 3)$",
                  "reason": "Zero-product property: the product is 0 exactly when one of its brackets is 0, which is exactly at $x = 7$ and at $x = -\\dfrac{3}{4}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t134-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $(x + 4)^2 = 729$, and write that line right.",
            "given": [
              "$(x + 4)^2 = 729$",
              "$x + 4 = 27$",
              "$x = 23$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $(x + 4)^2 = 729$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 goes from $(x + 4)^2 = 729$ to $x + 4 = 27$ alone.",
                "reason": "A sign lost: $-27$ squared is $729$ too, so $x + 4 = -27$ is dropped."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the lost root with it."
              },
              {
                "step": "Line 2 written right is $x + 4 = 27$ or $x + 4 = -27$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: both the positive root and its negative are kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $5x^2 = 270$, and write that line right.",
              "given": [
                "$5x^2 = 270$",
                "$x^2 = 54$",
                "$x = \\sqrt{54}$",
                "$x = 3\\sqrt{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x = sqrt(54) or x = -sqrt(54)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $5x^2 = 270$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 goes from $x^2 = 54$ to $x = \\sqrt{54}$ alone.",
                  "reason": "A sign lost: $-\\sqrt{54}$ squared is $54$ too, so $x = -\\sqrt{54}$ is dropped."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the lost root with it."
                },
                {
                  "step": "Line 3 written right is $x = \\sqrt{54}$ or $x = -\\sqrt{54}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: both the positive root and its negative are kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $x^2 = 75$, and write that line right.",
              "given": [
                "$x^2 = 75$",
                "$x = \\sqrt{75}$",
                "$x = 5\\sqrt{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x = sqrt(75) or x = -sqrt(75)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x^2 = 75$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 goes from $x^2 = 75$ to $x = \\sqrt{75}$ alone.",
                  "reason": "A sign lost: $-\\sqrt{75}$ squared is $75$ too, so $x = -\\sqrt{75}$ is dropped."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the lost root with it."
                },
                {
                  "step": "Line 2 written right is $x = \\sqrt{75}$ or $x = -\\sqrt{75}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: both the positive root and its negative are kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2(x - 1)^2 = 392$, and write that line right.",
              "given": [
                "$2(x - 1)^2 = 392$",
                "$(x - 1)^2 = 196$",
                "$x - 1 = 14$",
                "$x = 15$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x-1 = 14 or x-1 = -14",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2(x - 1)^2 = 392$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 goes from $(x - 1)^2 = 196$ to $x - 1 = 14$ alone.",
                  "reason": "A sign lost: $-14$ squared is $196$ too, so $x - 1 = -14$ is dropped."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the lost root with it."
                },
                {
                  "step": "Line 3 written right is $x - 1 = 14$ or $x - 1 = -14$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: both the positive root and its negative are kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $(5x + 6)(x - 7) = 0$, and write that line right.",
            "given": [
              "$(5x + 6)(x - 7) = 0$",
              "Either $5x + 6 = 0$ or $x - 7 = 0$",
              "Either $5x = 6$ or $x - 7 = 0$",
              "Either $5x = 6$ or $x = 7$",
              "Either $x = \\dfrac{6}{5}$ or $x = 7$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $(5x + 6)(x - 7) = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 goes from $5x + 6 = 0$ to $5x = 6$.",
                "reason": "A sign lost: taking $6$ from each side gives $5x = -6$, so the sign of $6$ is dropped."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong sign with it."
              },
              {
                "step": "Line 3 written right is $5x = -6$ or $x - 7 = 0$.",
                "reason": "Adding the same number to both sides: the constant is taken from each side, and its sign changes as it moves."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $(2x - 9)(x + 4) = 0$, and write that line right.",
              "given": [
                "$(2x - 9)(x + 4) = 0$",
                "Either $2x - 9 = 0$ or $x + 4 = 0$",
                "Either $2x = 9$ or $x + 4 = 0$",
                "Either $2x = 9$ or $x = 4$",
                "Either $x = \\dfrac{9}{2}$ or $x = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*x = 9 or x = -4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $(2x - 9)(x + 4) = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1, 2 and 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 goes from $x + 4 = 0$ to $x = 4$.",
                  "reason": "A sign lost: taking $4$ from each side gives $x = -4$, so the sign of $4$ is dropped."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong sign with it."
                },
                {
                  "step": "Line 4 written right is $2x = 9$ or $x = -4$.",
                  "reason": "Adding the same number to both sides: the constant is taken from each side, and its sign changes as it moves."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $(7x + 3)(x + 2) = 0$, and write that line right.",
              "given": [
                "$(7x + 3)(x + 2) = 0$",
                "Either $7x + 3 = 0$ or $x + 2 = 0$",
                "Either $7x = 3$ or $x + 2 = 0$",
                "Either $7x = 3$ or $x = -2$",
                "Either $x = \\dfrac{3}{7}$ or $x = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*x = -3 or x+2 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $(7x + 3)(x + 2) = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 goes from $7x + 3 = 0$ to $7x = 3$.",
                  "reason": "A sign lost: taking $3$ from each side gives $7x = -3$, so the sign of $3$ is dropped."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong sign with it."
                },
                {
                  "step": "Line 3 written right is $7x = -3$ or $x + 2 = 0$.",
                  "reason": "Adding the same number to both sides: the constant is taken from each side, and its sign changes as it moves."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $(4x - 5)(x - 6) = 0$, and write that line right.",
              "given": [
                "$(4x - 5)(x - 6) = 0$",
                "Either $4x - 5 = 0$ or $x - 6 = 0$",
                "Either $4x = 5$ or $x - 6 = 0$",
                "Either $4x = 5$ or $x = -6$",
                "Either $x = \\dfrac{5}{4}$ or $x = -6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 4*x = 5 or x = 6",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $(4x - 5)(x - 6) = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1, 2 and 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 goes from $x - 6 = 0$ to $x = -6$.",
                  "reason": "A sign lost: taking $-6$ from each side gives $x = 6$, so the change of sign is lost."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong sign with it."
                },
                {
                  "step": "Line 4 written right is $4x = 5$ or $x = 6$.",
                  "reason": "Adding the same number to both sides: the constant is taken from each side, and its sign changes as it moves."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t134-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: The square of a number $x$ is 9 times the number.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: The square of a number $x$ is 9 times the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of the number is $x^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" raises the amount that follows to the power 2."
              },
              {
                "step": "9 times the number is $9x$.",
                "reason": "Writing a sentence as an equation: \"9 times\" multiplies the number by 9."
              },
              {
                "step": "$x^2 = 9x$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: 3 times the square of a number $x$ is 108.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3*x^2 = 108",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: 3 times the square of a number $x$ is 108.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the amount that follows to the power 2."
                },
                {
                  "step": "3 times that square is $3x^2$.",
                  "reason": "Writing a sentence as an equation: \"3 times\" multiplies the square by 3."
                },
                {
                  "step": "$3x^2 = 108$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: The square of the sum of a number $x$ and 4 is 64.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+4)^2 = 64",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: The square of the sum of a number $x$ and 4 is 64.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the number and 4 is $x + 4$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
                },
                {
                  "step": "The square of that amount is $(x + 4)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole amount that follows to the power 2, so the amount is kept in a bracket."
                },
                {
                  "step": "$(x + 4)^2 = 64$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: The product of a number $x$ and 3 less than the number is 70.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x-3) = 70",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the words before \"is\" on the left: The product of a number $x$ and 3 less than the number is 70.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "3 less than the number is $x - 3$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from the number that follows the words."
                },
                {
                  "step": "The product of the number and that amount is $x(x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, the second kept whole in a bracket."
                },
                {
                  "step": "$x(x - 3) = 70$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t134-k6",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$, not 0, for which 6 times the number is equal to one fifth of the square of the number.",
            "lines": [
              {
                "step": "Find a number $x$, not 0, for which 6 times the number is equal to one fifth of the square of the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x = \\dfrac{x^2}{5}$",
                "reason": "Writing a sentence as an equation: \"times\" multiplies, \"the square of\" raises to the power 2, \"one fifth of\" divides by 5, and \"is equal to\" marks the place of the equals sign."
              },
              {
                "step": "$30x = x^2$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $5$."
              },
              {
                "step": "$0 = x^2 - 30x$",
                "reason": "Adding the same number to both sides: $-30x$ is added to each side."
              },
              {
                "step": "$0 = x(x - 30)$",
                "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
              },
              {
                "step": "Either $x = 0$ or $x - 30 = 0$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $x = 0$ or $x = 30$.",
                "reason": "Adding the same number to both sides: $30$ is added to each side of the second equation."
              },
              {
                "step": "$x = 30$",
                "reason": "Answering the question asked: the number is not 0, so the root $x = 0$ is left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$, not 0, for which 4 times the number is equal to one seventh of the square of the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 28",
              "lines": [
                {
                  "step": "Find a number $x$, not 0, for which 4 times the number is equal to one seventh of the square of the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x = \\dfrac{x^2}{7}$",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"the square of\" raises to the power 2, \"one seventh of\" divides by 7, and \"is equal to\" marks the place of the equals sign."
                },
                {
                  "step": "$28x = x^2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $7$."
                },
                {
                  "step": "$0 = x^2 - 28x$",
                  "reason": "Adding the same number to both sides: $-28x$ is added to each side."
                },
                {
                  "step": "$0 = x(x - 28)$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
                },
                {
                  "step": "Either $x = 0$ or $x - 28 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $x = 0$ or $x = 28$.",
                  "reason": "Adding the same number to both sides: $28$ is added to each side of the second equation."
                },
                {
                  "step": "$x = 28$",
                  "reason": "Answering the question asked: the number is not 0, so the root $x = 0$ is left out."
                }
              ]
            },
            {
              "prompt": "Find a number $x$, not 0, for which 9 times the number is equal to one half of the square of the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 18",
              "lines": [
                {
                  "step": "Find a number $x$, not 0, for which 9 times the number is equal to one half of the square of the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x = \\dfrac{x^2}{2}$",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"the square of\" raises to the power 2, \"one half of\" divides by 2, and \"is equal to\" marks the place of the equals sign."
                },
                {
                  "step": "$18x = x^2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                },
                {
                  "step": "$0 = x^2 - 18x$",
                  "reason": "Adding the same number to both sides: $-18x$ is added to each side."
                },
                {
                  "step": "$0 = x(x - 18)$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
                },
                {
                  "step": "Either $x = 0$ or $x - 18 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $x = 0$ or $x = 18$.",
                  "reason": "Adding the same number to both sides: $18$ is added to each side of the second equation."
                },
                {
                  "step": "$x = 18$",
                  "reason": "Answering the question asked: the number is not 0, so the root $x = 0$ is left out."
                }
              ]
            },
            {
              "prompt": "Find a number $x$, not 0, for which 3 times the number is equal to one eighth of the square of the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 24",
              "lines": [
                {
                  "step": "Find a number $x$, not 0, for which 3 times the number is equal to one eighth of the square of the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x = \\dfrac{x^2}{8}$",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"the square of\" raises to the power 2, \"one eighth of\" divides by 8, and \"is equal to\" marks the place of the equals sign."
                },
                {
                  "step": "$24x = x^2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $8$."
                },
                {
                  "step": "$0 = x^2 - 24x$",
                  "reason": "Adding the same number to both sides: $-24x$ is added to each side."
                },
                {
                  "step": "$0 = x(x - 24)$",
                  "reason": "Taking out a common factor: $x$ is a factor of both terms, and the distributive law read backwards writes the sum as $x$ times a bracket."
                },
                {
                  "step": "Either $x = 0$ or $x - 24 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $x = 0$ or $x = 24$.",
                  "reason": "Adding the same number to both sides: $24$ is added to each side of the second equation."
                },
                {
                  "step": "$x = 24$",
                  "reason": "Answering the question asked: the number is not 0, so the root $x = 0$ is left out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a positive number $x$ for which 25 times the number is equal to 4 divided by the number.",
            "lines": [
              {
                "step": "Find a positive number $x$ for which 25 times the number is equal to 4 divided by the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$25x = \\dfrac{4}{x}$",
                "reason": "Writing a sentence as an equation: \"times\" multiplies, \"divided by\" divides, and \"is equal to\" marks the place of the equals sign."
              },
              {
                "step": "$25x^2 = 4$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is above 0 and so not 0."
              },
              {
                "step": "$x^2 = \\dfrac{4}{25}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $25$."
              },
              {
                "step": "Either $x = \\dfrac{2}{5}$ or $x = -\\dfrac{2}{5}$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $\\dfrac{4}{25} = \\left(\\dfrac{2}{5}\\right)^2$."
              },
              {
                "step": "$x = \\dfrac{2}{5}$",
                "reason": "Answering the question asked: the number is positive, so the negative root is left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a positive number $x$ for which 9 times the number is equal to 49 divided by the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 7/3",
              "lines": [
                {
                  "step": "Find a positive number $x$ for which 9 times the number is equal to 49 divided by the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x = \\dfrac{49}{x}$",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"divided by\" divides, and \"is equal to\" marks the place of the equals sign."
                },
                {
                  "step": "$9x^2 = 49$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is above 0 and so not 0."
                },
                {
                  "step": "$x^2 = \\dfrac{49}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "Either $x = \\dfrac{7}{3}$ or $x = -\\dfrac{7}{3}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $\\dfrac{49}{9} = \\left(\\dfrac{7}{3}\\right)^2$."
                },
                {
                  "step": "$x = \\dfrac{7}{3}$",
                  "reason": "Answering the question asked: the number is positive, so the negative root is left out."
                }
              ]
            },
            {
              "prompt": "Find a positive number $x$ for which 9 times the number is equal to 16 divided by the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 4/3",
              "lines": [
                {
                  "step": "Find a positive number $x$ for which 9 times the number is equal to 16 divided by the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x = \\dfrac{16}{x}$",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"divided by\" divides, and \"is equal to\" marks the place of the equals sign."
                },
                {
                  "step": "$9x^2 = 16$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is above 0 and so not 0."
                },
                {
                  "step": "$x^2 = \\dfrac{16}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "Either $x = \\dfrac{4}{3}$ or $x = -\\dfrac{4}{3}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $\\dfrac{16}{9} = \\left(\\dfrac{4}{3}\\right)^2$."
                },
                {
                  "step": "$x = \\dfrac{4}{3}$",
                  "reason": "Answering the question asked: the number is positive, so the negative root is left out."
                }
              ]
            },
            {
              "prompt": "Find a positive number $x$ for which 49 times the number is equal to 9 divided by the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 3/7",
              "lines": [
                {
                  "step": "Find a positive number $x$ for which 49 times the number is equal to 9 divided by the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$49x = \\dfrac{9}{x}$",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, \"divided by\" divides, and \"is equal to\" marks the place of the equals sign."
                },
                {
                  "step": "$49x^2 = 9$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is above 0 and so not 0."
                },
                {
                  "step": "$x^2 = \\dfrac{9}{49}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $49$."
                },
                {
                  "step": "Either $x = \\dfrac{3}{7}$ or $x = -\\dfrac{3}{7}$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here $\\dfrac{9}{49} = \\left(\\dfrac{3}{7}\\right)^2$."
                },
                {
                  "step": "$x = \\dfrac{3}{7}$",
                  "reason": "Answering the question asked: the number is positive, so the negative root is left out."
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
      "id": "t134-p1",
      "method": "direct proof",
      "statement": "For all numbers $x$ and $a$, if $x^2 = a^2$ then $x = a$ or $x = -a$.",
      "idea": "Moving $a^2$ to the left side leaves 0 on the right, and the left side is the product $(x - a)(x + a)$. The zero-product property then splits the equation into two equations of the first power.",
      "lines": [
        {
          "line": "The hypothesis is $x^2 = a^2$.",
          "reason": "The statement takes it as given."
        },
        {
          "line": "So $x^2 - a^2 = 0$.",
          "reason": "Adding the same number to both sides: $-a^2$ is added to each side."
        },
        {
          "line": "The product $(x - a)(x + a)$ equals $x^2 + ax - ax - a^2$.",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "The sum $x^2 + ax - ax - a^2$ equals $x^2 - a^2$.",
          "reason": "Collecting like terms: $ax - ax = (1 - 1)ax = 0$."
        },
        {
          "line": "So $(x - a)(x + a) = 0$.",
          "reason": "Transitive property: lines 2, 3 and 4."
        },
        {
          "line": "So $x - a = 0$ or $x + a = 0$.",
          "reason": "The zero-product property: a product is 0 only when one of its factors is 0."
        },
        {
          "line": "If $x - a = 0$, then $x = a$.",
          "reason": "Adding the same number to both sides: $a$ is added to each side."
        },
        {
          "line": "If $x + a = 0$, then $x = -a$.",
          "reason": "Adding the same number to both sides: $-a$ is added to each side."
        },
        {
          "line": "Therefore $x = a$ or $x = -a$.",
          "reason": "Lines 6, 7 and 8: each of the two cases gives one of the two values."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t134-s1",
      "method": "direct proof",
      "statement": "Prove that for every number $a$, if $a^3 = 0$ then $a = 0$, and if $a = 0$ then $a^3 = 0$. Facts it may use: the product law, the zero-product property, substituting a value, the assumptions on multiplication.",
      "check": {
        "proof": [
          {
            "line": "Suppose first that $a^3 = 0$.",
            "reason": "The hypothesis of the first half."
          },
          {
            "line": "The power $a^3$ equals $a^2 \\cdot a$.",
            "reason": "The product law $a^ma^n = a^{m+n}$, with $m = 2$ and $n = 1$."
          },
          {
            "line": "So $a^2 \\cdot a = 0$.",
            "reason": "Transitive property: lines 1 and 2."
          },
          {
            "line": "So $a^2 = 0$ or $a = 0$.",
            "reason": "The zero-product property."
          },
          {
            "line": "The power $a^2$ equals $a \\cdot a$.",
            "reason": "The product law $a^ma^n = a^{m+n}$, with $m = 1$ and $n = 1$."
          },
          {
            "line": "If $a^2 = 0$, then $a \\cdot a = 0$.",
            "reason": "Line 5: $a \\cdot a$ is equal to $a^2$."
          },
          {
            "line": "If $a \\cdot a = 0$, then $a = 0$.",
            "reason": "The zero-product property, with both factors equal to $a$."
          },
          {
            "line": "So $a = 0$.",
            "reason": "Lines 4, 6 and 7: both cases of line 4 give $a = 0$."
          },
          {
            "line": "Suppose now that $a = 0$.",
            "reason": "The hypothesis of the second half."
          },
          {
            "line": "Then $a^3 = 0^3$.",
            "reason": "Substituting a value: $a$ is replaced by its value 0."
          },
          {
            "line": "The power $0^3$ equals $0^2 \\cdot 0$.",
            "reason": "The product law $a^ma^n = a^{m+n}$, with $m = 2$ and $n = 1$."
          },
          {
            "line": "The product $0^2 \\cdot 0$ equals 0.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "So $a^3 = 0$.",
            "reason": "Transitive property: lines 10, 11 and 12."
          }
        ]
      }
    },
    {
      "id": "t134-s2",
      "method": "disproof by counterexample",
      "statement": "Prove that this statement is false: for every number $x$, if $x^2 = 3x$ then $x = 3$. Facts it may use: substituting a value, the product law, the assumptions on multiplication, never divide by an expression that may be zero.",
      "check": {
        "proof": [
          {
            "line": "Take $x = 0$.",
            "reason": "Dividing $x^2 = 3x$ by $x$ is the step that would give $x = 3$ alone; never divide by an expression that may be zero, so the value that makes $x$ zero is the one to test."
          },
          {
            "line": "Then $x^2 = 0^2$.",
            "reason": "Substituting a value: $x$ is replaced by its value 0."
          },
          {
            "line": "The power $0^2$ equals $0 \\cdot 0$.",
            "reason": "The product law $a^ma^n = a^{m+n}$, with $m = 1$ and $n = 1$."
          },
          {
            "line": "The product $0 \\cdot 0$ equals 0.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "And $3x = 3 \\cdot 0$.",
            "reason": "Substituting a value: $x$ is replaced by its value 0."
          },
          {
            "line": "The product $3 \\cdot 0$ equals 0.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "So $x^2 = 3x$ holds for $x = 0$.",
            "reason": "Lines 2 to 6: both sides are 0."
          },
          {
            "line": "But $x = 0$ is not $3$.",
            "reason": "The conclusion $x = 3$ fails for this value."
          },
          {
            "line": "Therefore the statement is false.",
            "reason": "Disproof by counterexample: one value for which the hypothesis holds and the conclusion fails."
          }
        ]
      }
    }
  ]
}
