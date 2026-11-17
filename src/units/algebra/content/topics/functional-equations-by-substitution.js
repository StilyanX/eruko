export default {
  "number": 232,
  "title": "Functional equations by substitution",
  "section": 21,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "611-621"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $f(-4)$, where $f(2) = -4$ and $f(x + y) = f(x) + f(y) - 4xy(x + y) - 20$ for every $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "132",
    "solution": [
      "Find $f(-4)$, where $f(2) = -4$ and $f(x + y) = f(x) + f(y) - 4xy(x + y) - 20$ for every $x$ and $y$.",
      "$f(0) = 2f(0) - 20$",
      "$-f(0) = -20$",
      "$f(0) = 20$",
      "$20 = -4 + f(-2) - 20$",
      "$f(-2) = 44$",
      "$f(-4) = 2 \\cdot 44 - 4 \\cdot 4 \\cdot (-4) - 20$",
      "$f(-4) = 132$"
    ]
  },
  "ideas": [
    {
      "name": "Functional equation",
      "concrete": "In $f(x + y) = f(x) + 6xy + 3y^2 - 4y$ for every $x$ and $y$, the input $x = 0$ gives $f(y) = f(0) + 3y^2 - 4y$. The value $f(0)$ is one fixed number $c$, so every function that satisfies the equation is $f(x) = 3x^2 - 4x + c$ for some number $c$.",
      "general": "A **functional equation** is an equation whose unknown is a function and which holds for every input in a stated set. A value such as $f(0)$ or $f(1)$ that a substitution brings in is one fixed number: it is written $c$ and kept as a constant, never treated as a quantity that changes with $x$.",
      "definitions": [
        "functional equation"
      ]
    },
    {
      "name": "Checking the solution in the equation",
      "concrete": "In $f(x + y) + 2f(x - y) = 6x + 5y + 9$ for every $x$ and $y$, the input $y = 0$ gives $3f(x) = 6x + 9$, so every solution is $f(x) = 2x + 3$. Put back, the left side is $2(x + y) + 3 + 2(2(x - y) + 3) = 6x - 2y + 9$, which has $-2y$ where the right side has $5y$, so no function satisfies the equation.",
      "general": "A substitution shows only that every solution has a certain form. **Checking the solution in the equation** puts that form back into the equation for every input: the constants for which it holds give the solutions, and when no constant works the equation has no solution."
    },
    {
      "name": "Separation",
      "concrete": "In $y^2f(x) - x^2f(y) = 5x^3y^2 - 5x^2y^3$ for every nonzero $x$ and $y$, dividing by $x^2y^2$ and moving terms gives $\\dfrac{f(x)}{x^2} - 5x = \\dfrac{f(y)}{y^2} - 5y$. The left side holds only $x$ and the right side only $y$, so both are one number $c$, and $f(x) = cx^2 + 5x^3$.",
      "general": "**Separation**: when an equation in $x$ and $y$ can be written as $g(x) = g(y)$ for every $x$ and $y$ in a set, with the same expression $g$ on both sides, then $g$ takes one value $c$ on that set, and solving $g(x) = c$ gives the form of $f$."
    }
  ],
  "kinds": [
    {
      "id": "t232-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $f(8)$, where $f(-4) = -13$ and $f(x + y) = f(x) + f(y) + 2xy(x + y) - 7$ for every $x$ and $y$.",
            "lines": [
              {
                "step": "Find $f(8)$, where $f(-4) = -13$ and $f(x + y) = f(x) + f(y) + 2xy(x + y) - 7$ for every $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(0) = 2f(0) - 7$",
                "reason": "Substituting a chosen input: $x = 0$ and $y = 0$ make every input $0$ and the product term $0$."
              },
              {
                "step": "$-f(0) = -7$",
                "reason": "Functional equation: $f(0)$ is one fixed number, so $2f(0)$ is taken from both sides as a number is."
              },
              {
                "step": "$f(0) = 7$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
              },
              {
                "step": "$7 = -13 + f(4) - 7$",
                "reason": "Substituting a chosen input: $x = -4$ and $y = 4$ make the sum of the inputs $0$, so the product term is $0$, and the known values go in."
              },
              {
                "step": "$f(4) = 27$",
                "reason": "Adding the same number: $20$ is added to both sides."
              },
              {
                "step": "$f(8) = 2 \\cdot 27 + 2 \\cdot 16 \\cdot 8 - 7$",
                "reason": "Substituting a chosen input: $x = 4$ and $y = 4$ give the product $16$ and the sum $8$ of the inputs, and the value of $f(4)$ goes in."
              },
              {
                "step": "$f(8) = 303$",
                "reason": "Order of operations (arithmetic's): the products first, then the sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-6)$, where $f(3) = 23$ and $f(x + y) = f(x) + f(y) - 5xy(x + y) - 16$ for every $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "272",
              "lines": [
                {
                  "step": "Find $f(-6)$, where $f(3) = 23$ and $f(x + y) = f(x) + f(y) - 5xy(x + y) - 16$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(0) = 2f(0) - 16$",
                  "reason": "Substituting a chosen input: $x = 0$ and $y = 0$ make every input $0$ and the product term $0$."
                },
                {
                  "step": "$-f(0) = -16$",
                  "reason": "Functional equation: $f(0)$ is one fixed number, so $2f(0)$ is taken from both sides as a number is."
                },
                {
                  "step": "$f(0) = 16$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
                },
                {
                  "step": "$16 = 23 + f(-3) - 16$",
                  "reason": "Substituting a chosen input: $x = 3$ and $y = -3$ make the sum of the inputs $0$, so the product term is $0$, and the known values go in."
                },
                {
                  "step": "$f(-3) = 9$",
                  "reason": "Adding the same number: $-7$ is added to both sides."
                },
                {
                  "step": "$f(-6) = 2 \\cdot 9 - 5 \\cdot 9 \\cdot (-6) - 16$",
                  "reason": "Substituting a chosen input: $x = -3$ and $y = -3$ give the product $9$ and the sum $-6$ of the inputs, and the value of $f(-3)$ goes in."
                },
                {
                  "step": "$f(-6) = 272$",
                  "reason": "Order of operations (arithmetic's): the products first, then the sum."
                }
              ]
            },
            {
              "prompt": "Find $f(-10)$, where $f(5) = 20$ and $f(x + y) = f(x) + f(y) - 4xy(x + y) + 12$ for every $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "924",
              "lines": [
                {
                  "step": "Find $f(-10)$, where $f(5) = 20$ and $f(x + y) = f(x) + f(y) - 4xy(x + y) + 12$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(0) = 2f(0) + 12$",
                  "reason": "Substituting a chosen input: $x = 0$ and $y = 0$ make every input $0$ and the product term $0$."
                },
                {
                  "step": "$-f(0) = 12$",
                  "reason": "Functional equation: $f(0)$ is one fixed number, so $2f(0)$ is taken from both sides as a number is."
                },
                {
                  "step": "$f(0) = -12$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
                },
                {
                  "step": "$-12 = 20 + f(-5) + 12$",
                  "reason": "Substituting a chosen input: $x = 5$ and $y = -5$ make the sum of the inputs $0$, so the product term is $0$, and the known values go in."
                },
                {
                  "step": "$f(-5) = -44$",
                  "reason": "Adding the same number: $-32$ is added to both sides."
                },
                {
                  "step": "$f(-10) = 2 \\cdot (-44) - 4 \\cdot 25 \\cdot (-10) + 12$",
                  "reason": "Substituting a chosen input: $x = -5$ and $y = -5$ give the product $25$ and the sum $-10$ of the inputs, and the value of $f(-5)$ goes in."
                },
                {
                  "step": "$f(-10) = 924$",
                  "reason": "Order of operations (arithmetic's): the products first, then the sum."
                }
              ]
            },
            {
              "prompt": "Find $f(-8)$, where $f(4) = 11$ and $f(x + y) = f(x) + f(y) + 3xy(x + y) + 23$ for every $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-475",
              "lines": [
                {
                  "step": "Find $f(-8)$, where $f(4) = 11$ and $f(x + y) = f(x) + f(y) + 3xy(x + y) + 23$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(0) = 2f(0) + 23$",
                  "reason": "Substituting a chosen input: $x = 0$ and $y = 0$ make every input $0$ and the product term $0$."
                },
                {
                  "step": "$-f(0) = 23$",
                  "reason": "Functional equation: $f(0)$ is one fixed number, so $2f(0)$ is taken from both sides as a number is."
                },
                {
                  "step": "$f(0) = -23$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
                },
                {
                  "step": "$-23 = 11 + f(-4) + 23$",
                  "reason": "Substituting a chosen input: $x = 4$ and $y = -4$ make the sum of the inputs $0$, so the product term is $0$, and the known values go in."
                },
                {
                  "step": "$f(-4) = -57$",
                  "reason": "Adding the same number: $-34$ is added to both sides."
                },
                {
                  "step": "$f(-8) = 2 \\cdot (-57) + 3 \\cdot 16 \\cdot (-8) + 23$",
                  "reason": "Substituting a chosen input: $x = -4$ and $y = -4$ give the product $16$ and the sum $-8$ of the inputs, and the value of $f(-4)$ goes in."
                },
                {
                  "step": "$f(-8) = -475$",
                  "reason": "Order of operations (arithmetic's): the products first, then the sum."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t232-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $f(x)$, where $f(-4) = -66$ and $f(x + y) = f(x) - 10xy - 5y^2 - 4y$ for every $x$ and $y$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(-4) = -66$ and $f(x + y) = f(x) - 10xy - 5y^2 - 4y$ for every $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(y) = f(0) - 5y^2 - 4y$",
                "reason": "Substituting a chosen input: $x = 0$ removes every term in $x$ and leaves $f(y)$ beside $f(0)$."
              },
              {
                "step": "With $c = f(0)$, $f(x) = -5x^2 - 4x + c$",
                "reason": "Functional equation: $f(0)$ is one fixed number, written $c$, and the input $y$ is renamed $x$ by the dummy variable."
              },
              {
                "step": "$-5(x + y)^2 - 4(x + y) + c = -5x^2 - 4x + c - 10xy - 5y^2 - 4y$",
                "reason": "Checking the solution in the equation: both sides multiply out to the same polynomial, so the form satisfies the equation for every number $c$."
              },
              {
                "step": "$-5 \\cdot (-4)^2 - 4 \\cdot (-4) + c = -66$",
                "reason": "Substituting a value: $x = -4$ goes into the form, and $f(-4) = -66$."
              },
              {
                "step": "$c = -2$",
                "reason": "Adding the same number: $64$ is added to both sides."
              },
              {
                "step": "$f(x) = -5x^2 - 4x - 2$",
                "reason": "Substituting a value: $c$ is replaced by $-2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(2) = -60$ and $f(x + y) = f(x) - 16xy - 8y^2 - 8y$ for every $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-8*x^2-8*x-12",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(2) = -60$ and $f(x + y) = f(x) - 16xy - 8y^2 - 8y$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(y) = f(0) - 8y^2 - 8y$",
                  "reason": "Substituting a chosen input: $x = 0$ removes every term in $x$ and leaves $f(y)$ beside $f(0)$."
                },
                {
                  "step": "With $c = f(0)$, $f(x) = -8x^2 - 8x + c$",
                  "reason": "Functional equation: $f(0)$ is one fixed number, written $c$, and the input $y$ is renamed $x$ by the dummy variable."
                },
                {
                  "step": "$-8(x + y)^2 - 8(x + y) + c = -8x^2 - 8x + c - 16xy - 8y^2 - 8y$",
                  "reason": "Checking the solution in the equation: both sides multiply out to the same polynomial, so the form satisfies the equation for every number $c$."
                },
                {
                  "step": "$-8 \\cdot 2^2 - 8 \\cdot 2 + c = -60$",
                  "reason": "Substituting a value: $x = 2$ goes into the form, and $f(2) = -60$."
                },
                {
                  "step": "$c = -12$",
                  "reason": "Adding the same number: $48$ is added to both sides."
                },
                {
                  "step": "$f(x) = -8x^2 - 8x - 12$",
                  "reason": "Substituting a value: $c$ is replaced by $-12$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(3) = 1$ and $f(x + y) = f(x) - 4xy - 2y^2 + 4y$ for every $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2*x^2+4*x+7",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(3) = 1$ and $f(x + y) = f(x) - 4xy - 2y^2 + 4y$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(y) = f(0) - 2y^2 + 4y$",
                  "reason": "Substituting a chosen input: $x = 0$ removes every term in $x$ and leaves $f(y)$ beside $f(0)$."
                },
                {
                  "step": "With $c = f(0)$, $f(x) = -2x^2 + 4x + c$",
                  "reason": "Functional equation: $f(0)$ is one fixed number, written $c$, and the input $y$ is renamed $x$ by the dummy variable."
                },
                {
                  "step": "$-2(x + y)^2 + 4(x + y) + c = -2x^2 + 4x + c - 4xy - 2y^2 + 4y$",
                  "reason": "Checking the solution in the equation: both sides multiply out to the same polynomial, so the form satisfies the equation for every number $c$."
                },
                {
                  "step": "$-2 \\cdot 3^2 + 4 \\cdot 3 + c = 1$",
                  "reason": "Substituting a value: $x = 3$ goes into the form, and $f(3) = 1$."
                },
                {
                  "step": "$c = 7$",
                  "reason": "Adding the same number: $6$ is added to both sides."
                },
                {
                  "step": "$f(x) = -2x^2 + 4x + 7$",
                  "reason": "Substituting a value: $c$ is replaced by $7$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(-2) = -6$ and $f(x + y) = f(x) - 12xy - 6y^2 - 6y$ for every $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-6*x^2-6*x+6",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(-2) = -6$ and $f(x + y) = f(x) - 12xy - 6y^2 - 6y$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(y) = f(0) - 6y^2 - 6y$",
                  "reason": "Substituting a chosen input: $x = 0$ removes every term in $x$ and leaves $f(y)$ beside $f(0)$."
                },
                {
                  "step": "With $c = f(0)$, $f(x) = -6x^2 - 6x + c$",
                  "reason": "Functional equation: $f(0)$ is one fixed number, written $c$, and the input $y$ is renamed $x$ by the dummy variable."
                },
                {
                  "step": "$-6(x + y)^2 - 6(x + y) + c = -6x^2 - 6x + c - 12xy - 6y^2 - 6y$",
                  "reason": "Checking the solution in the equation: both sides multiply out to the same polynomial, so the form satisfies the equation for every number $c$."
                },
                {
                  "step": "$-6 \\cdot (-2)^2 - 6 \\cdot (-2) + c = -6$",
                  "reason": "Substituting a value: $x = -2$ goes into the form, and $f(-2) = -6$."
                },
                {
                  "step": "$c = 6$",
                  "reason": "Adding the same number: $12$ is added to both sides."
                },
                {
                  "step": "$f(x) = -6x^2 - 6x + 6$",
                  "reason": "Substituting a value: $c$ is replaced by $6$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $3f(x) - 9f(5 - x) = 60x - 267$ for every $x$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $3f(x) - 9f(5 - x) = 60x - 267$ for every $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3f(5 - x) - 9f(x) = -60x + 33$",
                "reason": "Substituting a chosen input: $5 - x$ goes in place of $x$, and $5 - (5 - x) = x$, so $f(x)$ and $f(5 - x)$ change places."
              },
              {
                "step": "$9f(x) - 27f(5 - x) = 180x - 801$",
                "reason": "Multiplying both sides by the same number: the given equation is multiplied by $3$."
              },
              {
                "step": "$81f(x) - 27f(5 - x) = 540x - 297$",
                "reason": "Multiplying both sides by the same number: line 2 is multiplied by $-9$."
              },
              {
                "step": "$-72f(x) = -360x - 504$",
                "reason": "Elimination: line 4 is taken from line 3, so the terms in $f(5 - x)$ cancel."
              },
              {
                "step": "$f(x) = 5x + 7$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-72$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $2f(x) - 10f(-2 - x) = -84x - 220$ for every $x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-7*x+10",
              "lines": [
                {
                  "step": "Find $f(x)$, where $2f(x) - 10f(-2 - x) = -84x - 220$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2f(-2 - x) - 10f(x) = 84x - 52$",
                  "reason": "Substituting a chosen input: $-2 - x$ goes in place of $x$, and $-2 - (-2 - x) = x$, so $f(x)$ and $f(-2 - x)$ change places."
                },
                {
                  "step": "$4f(x) - 20f(-2 - x) = -168x - 440$",
                  "reason": "Multiplying both sides by the same number: the given equation is multiplied by $2$."
                },
                {
                  "step": "$100f(x) - 20f(-2 - x) = -840x + 520$",
                  "reason": "Multiplying both sides by the same number: line 2 is multiplied by $-10$."
                },
                {
                  "step": "$-96f(x) = 672x - 960$",
                  "reason": "Elimination: line 4 is taken from line 3, so the terms in $f(-2 - x)$ cancel."
                },
                {
                  "step": "$f(x) = -7x + 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-96$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $5f(x) + 2f(-4 - x) = 12x - 46$ for every $x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*x-2",
              "lines": [
                {
                  "step": "Find $f(x)$, where $5f(x) + 2f(-4 - x) = 12x - 46$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5f(-4 - x) + 2f(x) = -12x - 94$",
                  "reason": "Substituting a chosen input: $-4 - x$ goes in place of $x$, and $-4 - (-4 - x) = x$, so $f(x)$ and $f(-4 - x)$ change places."
                },
                {
                  "step": "$25f(x) + 10f(-4 - x) = 60x - 230$",
                  "reason": "Multiplying both sides by the same number: the given equation is multiplied by $5$."
                },
                {
                  "step": "$4f(x) + 10f(-4 - x) = -24x - 188$",
                  "reason": "Multiplying both sides by the same number: line 2 is multiplied by $2$."
                },
                {
                  "step": "$21f(x) = 84x - 42$",
                  "reason": "Elimination: line 4 is taken from line 3, so the terms in $f(-4 - x)$ cancel."
                },
                {
                  "step": "$f(x) = 4x - 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $21$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $2f(x) + 7f(4 - x) = -20x + 76$ for every $x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*x-4",
              "lines": [
                {
                  "step": "Find $f(x)$, where $2f(x) + 7f(4 - x) = -20x + 76$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2f(4 - x) + 7f(x) = 20x - 4$",
                  "reason": "Substituting a chosen input: $4 - x$ goes in place of $x$, and $4 - (4 - x) = x$, so $f(x)$ and $f(4 - x)$ change places."
                },
                {
                  "step": "$4f(x) + 14f(4 - x) = -40x + 152$",
                  "reason": "Multiplying both sides by the same number: the given equation is multiplied by $2$."
                },
                {
                  "step": "$49f(x) + 14f(4 - x) = 140x - 28$",
                  "reason": "Multiplying both sides by the same number: line 2 is multiplied by $7$."
                },
                {
                  "step": "$-45f(x) = -180x + 180$",
                  "reason": "Elimination: line 4 is taken from line 3, so the terms in $f(4 - x)$ cancel."
                },
                {
                  "step": "$f(x) = 4x - 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-45$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $f(-2) = 32$ and $y^2f(x) - x^2f(y) = 3x^4y^2 - 3x^2y^4$ for every nonzero $x$ and $y$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(-2) = 32$ and $y^2f(x) - x^2f(y) = 3x^4y^2 - 3x^2y^4$ for every nonzero $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{f(x)}{x^2} - \\dfrac{f(y)}{y^2} = 3x^2 - 3y^2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^2y^2$, which is not zero."
              },
              {
                "step": "$\\dfrac{f(x)}{x^2} - 3x^2 = \\dfrac{f(y)}{y^2} - 3y^2$",
                "reason": "Adding the same number: $\\dfrac{f(y)}{y^2} - 3x^2$ is added to both sides."
              },
              {
                "step": "For one number $c$, $\\dfrac{f(x)}{x^2} - 3x^2 = c$",
                "reason": "Separation: the left side holds only $x$ and the right side is the same expression in $y$, so both sides are one number $c$."
              },
              {
                "step": "$f(x) = cx^2 + 3x^4$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^2$."
              },
              {
                "step": "$y^2(cx^2 + 3x^4) - x^2(cy^2 + 3y^4) = 3x^4y^2 - 3x^2y^4$",
                "reason": "Checking the solution in the equation: the terms in $c$ cancel, so the form satisfies the equation for every number $c$."
              },
              {
                "step": "$c \\cdot (-2)^2 + 3 \\cdot (-2)^4 = 32$",
                "reason": "Substituting a value: $x = -2$ goes into the form, and $f(-2) = 32$."
              },
              {
                "step": "$4c = -16$",
                "reason": "Adding the same number: $-48$ is added to both sides."
              },
              {
                "step": "$c = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              },
              {
                "step": "$f(x) = -4x^2 + 3x^4$",
                "reason": "Substituting a value: $c$ is replaced by $-4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(-3) = 108$ and $y^2f(x) - x^2f(y) = -2x^3y^2 + 2x^2y^3$ for every nonzero $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2*x^3+6*x^2",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(-3) = 108$ and $y^2f(x) - x^2f(y) = -2x^3y^2 + 2x^2y^3$ for every nonzero $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{f(x)}{x^2} - \\dfrac{f(y)}{y^2} = -2x + 2y$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^2y^2$, which is not zero."
                },
                {
                  "step": "$\\dfrac{f(x)}{x^2} + 2x = \\dfrac{f(y)}{y^2} + 2y$",
                  "reason": "Adding the same number: $\\dfrac{f(y)}{y^2} + 2x$ is added to both sides."
                },
                {
                  "step": "For one number $c$, $\\dfrac{f(x)}{x^2} + 2x = c$",
                  "reason": "Separation: the left side holds only $x$ and the right side is the same expression in $y$, so both sides are one number $c$."
                },
                {
                  "step": "$f(x) = cx^2 - 2x^3$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^2$."
                },
                {
                  "step": "$y^2(cx^2 - 2x^3) - x^2(cy^2 - 2y^3) = -2x^3y^2 + 2x^2y^3$",
                  "reason": "Checking the solution in the equation: the terms in $c$ cancel, so the form satisfies the equation for every number $c$."
                },
                {
                  "step": "$c \\cdot (-3)^2 - 2 \\cdot (-3)^3 = 108$",
                  "reason": "Substituting a value: $x = -3$ goes into the form, and $f(-3) = 108$."
                },
                {
                  "step": "$9c = 54$",
                  "reason": "Adding the same number: $-54$ is added to both sides."
                },
                {
                  "step": "$c = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "$f(x) = 6x^2 - 2x^3$",
                  "reason": "Substituting a value: $c$ is replaced by $6$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(2) = -68$ and $y^2f(x) - x^2f(y) = -2x^4y^2 + 2x^2y^4$ for every nonzero $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2*x^4-9*x^2",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(2) = -68$ and $y^2f(x) - x^2f(y) = -2x^4y^2 + 2x^2y^4$ for every nonzero $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{f(x)}{x^2} - \\dfrac{f(y)}{y^2} = -2x^2 + 2y^2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $x^2y^2$, which is not zero."
                },
                {
                  "step": "$\\dfrac{f(x)}{x^2} + 2x^2 = \\dfrac{f(y)}{y^2} + 2y^2$",
                  "reason": "Adding the same number: $\\dfrac{f(y)}{y^2} + 2x^2$ is added to both sides."
                },
                {
                  "step": "For one number $c$, $\\dfrac{f(x)}{x^2} + 2x^2 = c$",
                  "reason": "Separation: the left side holds only $x$ and the right side is the same expression in $y$, so both sides are one number $c$."
                },
                {
                  "step": "$f(x) = cx^2 - 2x^4$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x^2$."
                },
                {
                  "step": "$y^2(cx^2 - 2x^4) - x^2(cy^2 - 2y^4) = -2x^4y^2 + 2x^2y^4$",
                  "reason": "Checking the solution in the equation: the terms in $c$ cancel, so the form satisfies the equation for every number $c$."
                },
                {
                  "step": "$c \\cdot 2^2 - 2 \\cdot 2^4 = -68$",
                  "reason": "Substituting a value: $x = 2$ goes into the form, and $f(2) = -68$."
                },
                {
                  "step": "$4c = -36$",
                  "reason": "Adding the same number: $32$ is added to both sides."
                },
                {
                  "step": "$c = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$f(x) = -9x^2 - 2x^4$",
                  "reason": "Substituting a value: $c$ is replaced by $-9$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(-2) = -36$ and $yf(x) - xf(y) = -2x^4y + 2xy^4$ for every nonzero $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2*x^4+2*x",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(-2) = -36$ and $yf(x) - xf(y) = -2x^4y + 2xy^4$ for every nonzero $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{f(x)}{x} - \\dfrac{f(y)}{y} = -2x^3 + 2y^3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $xy$, which is not zero."
                },
                {
                  "step": "$\\dfrac{f(x)}{x} + 2x^3 = \\dfrac{f(y)}{y} + 2y^3$",
                  "reason": "Adding the same number: $\\dfrac{f(y)}{y} + 2x^3$ is added to both sides."
                },
                {
                  "step": "For one number $c$, $\\dfrac{f(x)}{x} + 2x^3 = c$",
                  "reason": "Separation: the left side holds only $x$ and the right side is the same expression in $y$, so both sides are one number $c$."
                },
                {
                  "step": "$f(x) = cx - 2x^4$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$."
                },
                {
                  "step": "$y(cx - 2x^4) - x(cy - 2y^4) = -2x^4y + 2xy^4$",
                  "reason": "Checking the solution in the equation: the terms in $c$ cancel, so the form satisfies the equation for every number $c$."
                },
                {
                  "step": "$c \\cdot (-2) - 2 \\cdot (-2)^4 = -36$",
                  "reason": "Substituting a value: $x = -2$ goes into the form, and $f(-2) = -36$."
                },
                {
                  "step": "$-2c = -4$",
                  "reason": "Adding the same number: $32$ is added to both sides."
                },
                {
                  "step": "$c = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "$f(x) = 2x - 2x^4$",
                  "reason": "Substituting a value: $c$ is replaced by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $f(x)f(y) - 8f(xy) = -8x^2 - 8y^2 + 9$ for every $x$ and $y$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(x)f(y) - 8f(xy) = -8x^2 - 8y^2 + 9$ for every $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x)f(0) - 8f(0) = -8x^2 + 9$",
                "reason": "Substituting a chosen input: $y = 0$ turns $f(y)$ and $f(xy)$ into $f(0)$."
              },
              {
                "step": "With $c = f(0)$, $cf(x) = -8x^2 + 9 + 8c$",
                "reason": "Functional equation: $f(0)$ is one fixed number $c$, so $-8c$ moves to the right side as a number does."
              },
              {
                "step": "If $c$ were $0$, the right side of line 3 would be zero for every $x$, but at $x = 1$ it is $1$.",
                "reason": "Substituting a chosen input: with $c = 0$, $x = 1$ in line 3 gives $0$ on the left and $1$ on the right, which is false, so $c \\ne 0$ and both sides may be divided by $c$."
              },
              {
                "step": "$c^2 = 9 + 8c$",
                "reason": "Substituting a chosen input: $x = 0$ in line 3, where $f(0) = c$."
              },
              {
                "step": "$c^2 - 8c - 9 = 0$",
                "reason": "Adding the same number: $-8c - 9$ is added to both sides."
              },
              {
                "step": "$(c + 1)(c - 9) = 0$",
                "reason": "Factoring a quadratic: the two numbers have the product and sum the quadratic needs."
              },
              {
                "step": "The root $9$ makes line 3 the form $-\\dfrac{8}{9}x^2 + 9$, whose $f(x)f(y) - 8f(xy)$ has the term $\\dfrac{640}{81}x^2y^2$, absent on the right.",
                "reason": "Zero-product property: $c = -1$ or $c = 9$; Checking the solution in the equation rejects $c = 9$, so $c = -1$."
              },
              {
                "step": "$f(x) = 8x^2 - 1$",
                "reason": "Dividing both sides by a nonzero number: line 3 with $c = -1$ is divided by $-1$."
              },
              {
                "step": "$(8x^2 - 1)(8y^2 - 1) - 8(8x^2y^2 - 1) = -8x^2 - 8y^2 + 9$",
                "reason": "Checking the solution in the equation: the left side multiplies out to the right side for every $x$ and $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(x)f(y) - 6f(xy) = -36x^2 - 36y^2 + 72$ for every $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "6*x^2-6",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x)f(y) - 6f(xy) = -36x^2 - 36y^2 + 72$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x)f(0) - 6f(0) = -36x^2 + 72$",
                  "reason": "Substituting a chosen input: $y = 0$ turns $f(y)$ and $f(xy)$ into $f(0)$."
                },
                {
                  "step": "With $c = f(0)$, $cf(x) = -36x^2 + 72 + 6c$",
                  "reason": "Functional equation: $f(0)$ is one fixed number $c$, so $-6c$ moves to the right side as a number does."
                },
                {
                  "step": "If $c$ were $0$, the right side of line 3 would be zero for every $x$, but at $x = 1$ it is $36$.",
                  "reason": "Substituting a chosen input: with $c = 0$, $x = 1$ in line 3 gives $0$ on the left and $36$ on the right, which is false, so $c \\ne 0$ and both sides may be divided by $c$."
                },
                {
                  "step": "$c^2 = 72 + 6c$",
                  "reason": "Substituting a chosen input: $x = 0$ in line 3, where $f(0) = c$."
                },
                {
                  "step": "$c^2 - 6c - 72 = 0$",
                  "reason": "Adding the same number: $-6c - 72$ is added to both sides."
                },
                {
                  "step": "$(c + 6)(c - 12) = 0$",
                  "reason": "Factoring a quadratic: the two numbers have the product and sum the quadratic needs."
                },
                {
                  "step": "The root $12$ makes line 3 the form $-3x^2 + 12$, whose $f(x)f(y) - 6f(xy)$ has the term $27x^2y^2$, absent on the right.",
                  "reason": "Zero-product property: $c = -6$ or $c = 12$; Checking the solution in the equation rejects $c = 12$, so $c = -6$."
                },
                {
                  "step": "$f(x) = 6x^2 - 6$",
                  "reason": "Dividing both sides by a nonzero number: line 3 with $c = -6$ is divided by $-6$."
                },
                {
                  "step": "$(6x^2 - 6)(6y^2 - 6) - 6(6x^2y^2 - 6) = -36x^2 - 36y^2 + 72$",
                  "reason": "Checking the solution in the equation: the left side multiplies out to the right side for every $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x)f(y) + 3f(xy) = -24x^2 - 24y^2 + 88$ for every $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-3*x^2+8",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x)f(y) + 3f(xy) = -24x^2 - 24y^2 + 88$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x)f(0) + 3f(0) = -24x^2 + 88$",
                  "reason": "Substituting a chosen input: $y = 0$ turns $f(y)$ and $f(xy)$ into $f(0)$."
                },
                {
                  "step": "With $c = f(0)$, $cf(x) = -24x^2 + 88 - 3c$",
                  "reason": "Functional equation: $f(0)$ is one fixed number $c$, so $3c$ moves to the right side as a number does."
                },
                {
                  "step": "If $c$ were $0$, the right side of line 3 would be zero for every $x$, but at $x = 1$ it is $64$.",
                  "reason": "Substituting a chosen input: with $c = 0$, $x = 1$ in line 3 gives $0$ on the left and $64$ on the right, which is false, so $c \\ne 0$ and both sides may be divided by $c$."
                },
                {
                  "step": "$c^2 = 88 - 3c$",
                  "reason": "Substituting a chosen input: $x = 0$ in line 3, where $f(0) = c$."
                },
                {
                  "step": "$c^2 + 3c - 88 = 0$",
                  "reason": "Adding the same number: $3c - 88$ is added to both sides."
                },
                {
                  "step": "$(c - 8)(c + 11) = 0$",
                  "reason": "Factoring a quadratic: the two numbers have the product and sum the quadratic needs."
                },
                {
                  "step": "The root $-11$ makes line 3 the form $\\dfrac{24}{11}x^2 - 11$, whose $f(x)f(y) + 3f(xy)$ has the term $\\dfrac{1368}{121}x^2y^2$, absent on the right.",
                  "reason": "Zero-product property: $c = 8$ or $c = -11$; Checking the solution in the equation rejects $c = -11$, so $c = 8$."
                },
                {
                  "step": "$f(x) = -3x^2 + 8$",
                  "reason": "Dividing both sides by a nonzero number: line 3 with $c = 8$ is divided by $8$."
                },
                {
                  "step": "$(-3x^2 + 8)(-3y^2 + 8) + 3(-3x^2y^2 + 8) = -24x^2 - 24y^2 + 88$",
                  "reason": "Checking the solution in the equation: the left side multiplies out to the right side for every $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x)f(y) + 9f(xy) = 54x^2 + 54y^2 - 18$ for every $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-9*x^2-6",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x)f(y) + 9f(xy) = 54x^2 + 54y^2 - 18$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x)f(0) + 9f(0) = 54x^2 - 18$",
                  "reason": "Substituting a chosen input: $y = 0$ turns $f(y)$ and $f(xy)$ into $f(0)$."
                },
                {
                  "step": "With $c = f(0)$, $cf(x) = 54x^2 - 18 - 9c$",
                  "reason": "Functional equation: $f(0)$ is one fixed number $c$, so $9c$ moves to the right side as a number does."
                },
                {
                  "step": "If $c$ were $0$, the right side of line 3 would be zero for every $x$, but at $x = 1$ it is $36$.",
                  "reason": "Substituting a chosen input: with $c = 0$, $x = 1$ in line 3 gives $0$ on the left and $36$ on the right, which is false, so $c \\ne 0$ and both sides may be divided by $c$."
                },
                {
                  "step": "$c^2 = -18 - 9c$",
                  "reason": "Substituting a chosen input: $x = 0$ in line 3, where $f(0) = c$."
                },
                {
                  "step": "$c^2 + 9c + 18 = 0$",
                  "reason": "Adding the same number: $9c + 18$ is added to both sides."
                },
                {
                  "step": "$(c + 6)(c + 3) = 0$",
                  "reason": "Factoring a quadratic: the two numbers have the product and sum the quadratic needs."
                },
                {
                  "step": "The root $-3$ makes line 3 the form $-18x^2 - 3$, whose $f(x)f(y) + 9f(xy)$ has the term $162x^2y^2$, absent on the right.",
                  "reason": "Zero-product property: $c = -6$ or $c = -3$; Checking the solution in the equation rejects $c = -3$, so $c = -6$."
                },
                {
                  "step": "$f(x) = -9x^2 - 6$",
                  "reason": "Dividing both sides by a nonzero number: line 3 with $c = -6$ is divided by $-6$."
                },
                {
                  "step": "$(-9x^2 - 6)(-9y^2 - 6) + 9(-9x^2y^2 - 6) = 54x^2 + 54y^2 - 18$",
                  "reason": "Checking the solution in the equation: the left side multiplies out to the right side for every $x$ and $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t232-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $P(x)$, where $P$ is a polynomial with $P(-2) = -9$ and $P(x + 2) = P(x) - 8$ for every $x$.",
            "lines": [
              {
                "step": "Find $P(x)$, where $P$ is a polynomial with $P(-2) = -9$ and $P(x + 2) = P(x) - 8$ for every $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The next values are $P(0) = -17$ and $P(2) = -25$",
                "reason": "Substituting a chosen input: $x = -2$ and then $x = 0$ each move the input on by $2$ and the value by $-8$."
              },
              {
                "step": "For every whole number $k$, $P(-2 + 2k) = -9 - 8k$",
                "reason": "Induction: the statement holds at $k = 0$, and each step from $k$ to $k + 1$ adds $2$ to the input and $-8$ to the value."
              },
              {
                "step": "The polynomial $Q(x) = P(x) + 4(x + 2) + 9$ is zero at $x = -2 + 2k$ for every whole number $k$",
                "reason": "Substituting a value: at $x = -2 + 2k$ the term $4(x + 2)$ is $8k$."
              },
              {
                "step": "So $Q$ is the zero polynomial.",
                "reason": "Identity Theorem: a polynomial that is zero at infinitely many inputs is the zero polynomial."
              },
              {
                "step": "$P(x) = -4(x + 2) - 9$",
                "reason": "Adding the same number: the two terms after $P(x)$ in line 4 are taken from both sides of $Q(x) = 0$."
              },
              {
                "step": "$P(x) = -4x - 17$",
                "reason": "Multiplying out: the bracket is multiplied out and the numbers collected."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $P(x)$, where $P$ is a polynomial with $P(6) = -3$ and $P(x + 6) = P(x) + 7$ for every $x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "7/6*x-10",
              "lines": [
                {
                  "step": "Find $P(x)$, where $P$ is a polynomial with $P(6) = -3$ and $P(x + 6) = P(x) + 7$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The next values are $P(12) = 4$ and $P(18) = 11$",
                  "reason": "Substituting a chosen input: $x = 6$ and then $x = 12$ each move the input on by $6$ and the value by $7$."
                },
                {
                  "step": "For every whole number $k$, $P(6 + 6k) = -3 + 7k$",
                  "reason": "Induction: the statement holds at $k = 0$, and each step from $k$ to $k + 1$ adds $6$ to the input and $7$ to the value."
                },
                {
                  "step": "The polynomial $Q(x) = P(x) - \\dfrac{7}{6}(x - 6) + 3$ is zero at $x = 6 + 6k$ for every whole number $k$",
                  "reason": "Substituting a value: at $x = 6 + 6k$ the term $\\dfrac{7}{6}(x - 6)$ is $7k$."
                },
                {
                  "step": "So $Q$ is the zero polynomial.",
                  "reason": "Identity Theorem: a polynomial that is zero at infinitely many inputs is the zero polynomial."
                },
                {
                  "step": "$P(x) = \\dfrac{7}{6}(x - 6) - 3$",
                  "reason": "Adding the same number: the two terms after $P(x)$ in line 4 are taken from both sides of $Q(x) = 0$."
                },
                {
                  "step": "$P(x) = \\dfrac{7}{6}x - 10$",
                  "reason": "Multiplying out: the bracket is multiplied out and the numbers collected."
                }
              ]
            },
            {
              "prompt": "Find $P(x)$, where $P$ is a polynomial with $P(6) = 7$ and $P(x + 2) = P(x) - 12$ for every $x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-6*x+43",
              "lines": [
                {
                  "step": "Find $P(x)$, where $P$ is a polynomial with $P(6) = 7$ and $P(x + 2) = P(x) - 12$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The next values are $P(8) = -5$ and $P(10) = -17$",
                  "reason": "Substituting a chosen input: $x = 6$ and then $x = 8$ each move the input on by $2$ and the value by $-12$."
                },
                {
                  "step": "For every whole number $k$, $P(6 + 2k) = 7 - 12k$",
                  "reason": "Induction: the statement holds at $k = 0$, and each step from $k$ to $k + 1$ adds $2$ to the input and $-12$ to the value."
                },
                {
                  "step": "The polynomial $Q(x) = P(x) + 6(x - 6) - 7$ is zero at $x = 6 + 2k$ for every whole number $k$",
                  "reason": "Substituting a value: at $x = 6 + 2k$ the term $6(x - 6)$ is $12k$."
                },
                {
                  "step": "So $Q$ is the zero polynomial.",
                  "reason": "Identity Theorem: a polynomial that is zero at infinitely many inputs is the zero polynomial."
                },
                {
                  "step": "$P(x) = -6(x - 6) + 7$",
                  "reason": "Adding the same number: the two terms after $P(x)$ in line 4 are taken from both sides of $Q(x) = 0$."
                },
                {
                  "step": "$P(x) = -6x + 43$",
                  "reason": "Multiplying out: the bracket is multiplied out and the numbers collected."
                }
              ]
            },
            {
              "prompt": "Find $P(x)$, where $P$ is a polynomial with $P(-5) = -7$ and $P(x + 5) = P(x) + 10$ for every $x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*x+3",
              "lines": [
                {
                  "step": "Find $P(x)$, where $P$ is a polynomial with $P(-5) = -7$ and $P(x + 5) = P(x) + 10$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The next values are $P(0) = 3$ and $P(5) = 13$",
                  "reason": "Substituting a chosen input: $x = -5$ and then $x = 0$ each move the input on by $5$ and the value by $10$."
                },
                {
                  "step": "For every whole number $k$, $P(-5 + 5k) = -7 + 10k$",
                  "reason": "Induction: the statement holds at $k = 0$, and each step from $k$ to $k + 1$ adds $5$ to the input and $10$ to the value."
                },
                {
                  "step": "The polynomial $Q(x) = P(x) - 2(x + 5) + 7$ is zero at $x = -5 + 5k$ for every whole number $k$",
                  "reason": "Substituting a value: at $x = -5 + 5k$ the term $2(x + 5)$ is $10k$."
                },
                {
                  "step": "So $Q$ is the zero polynomial.",
                  "reason": "Identity Theorem: a polynomial that is zero at infinitely many inputs is the zero polynomial."
                },
                {
                  "step": "$P(x) = 2(x + 5) - 7$",
                  "reason": "Adding the same number: the two terms after $P(x)$ in line 4 are taken from both sides of $Q(x) = 0$."
                },
                {
                  "step": "$P(x) = 2x + 3$",
                  "reason": "Multiplying out: the bracket is multiplied out and the numbers collected."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t232-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether some function $f$ satisfies $f(x + y) - 3f(x - y) = 8x - 19y - 6$ for every $x$ and $y$.",
            "lines": [
              {
                "step": "Decide whether some function $f$ satisfies $f(x + y) - 3f(x - y) = 8x - 19y - 6$ for every $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-2f(x) = 8x - 6$",
                "reason": "Substituting a chosen input: $y = 0$ makes both inputs $x$, so the two values of $f$ are one."
              },
              {
                "step": "$f(x) = -4x + 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$; every function that satisfies the equation has this form."
              },
              {
                "step": "$-4(x + y) + 3 - 3(-4(x - y) + 3) = 8x - 16y - 6$",
                "reason": "Checking the solution in the equation: the form is put back into the left side, which is multiplied out."
              },
              {
                "step": "The right side has $-19y$ where the left side has $-16y$, so the two sides differ at $y = 1$.",
                "reason": "Checking the solution in the equation: every solution has the form of line 3, and that form fails, so no function satisfies the equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether some function $f$ satisfies $f(x + y) - 3f(x - y) = 8x - 16y - 14$ for every $x$ and $y$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether some function $f$ satisfies $f(x + y) - 3f(x - y) = 8x - 16y - 14$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2f(x) = 8x - 14$",
                  "reason": "Substituting a chosen input: $y = 0$ makes both inputs $x$, so the two values of $f$ are one."
                },
                {
                  "step": "$f(x) = -4x + 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$; every function that satisfies the equation has this form."
                },
                {
                  "step": "$-4(x + y) + 7 - 3(-4(x - y) + 7) = 8x - 16y - 14$",
                  "reason": "Checking the solution in the equation: the form is put back into the left side, which is multiplied out."
                },
                {
                  "step": "The right side is also $8x - 16y - 14$, so $f(x) = -4x + 7$ satisfies the equation for every $x$ and $y$.",
                  "reason": "Checking the solution in the equation: the form passes the check, so such a function exists."
                }
              ]
            },
            {
              "prompt": "Decide whether some function $f$ satisfies $f(x + y) - 4f(x - y) = 6x - 14y - 3$ for every $x$ and $y$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether some function $f$ satisfies $f(x + y) - 4f(x - y) = 6x - 14y - 3$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3f(x) = 6x - 3$",
                  "reason": "Substituting a chosen input: $y = 0$ makes both inputs $x$, so the two values of $f$ are one."
                },
                {
                  "step": "$f(x) = -2x + 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$; every function that satisfies the equation has this form."
                },
                {
                  "step": "$-2(x + y) + 1 - 4(-2(x - y) + 1) = 6x - 10y - 3$",
                  "reason": "Checking the solution in the equation: the form is put back into the left side, which is multiplied out."
                },
                {
                  "step": "The right side has $-14y$ where the left side has $-10y$, so the two sides differ at $y = 1$.",
                  "reason": "Checking the solution in the equation: every solution has the form of line 3, and that form fails, so no function satisfies the equation."
                }
              ]
            },
            {
              "prompt": "Decide whether some function $f$ satisfies $f(x + y) - 4f(x - y) = -12x + 20y + 15$ for every $x$ and $y$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether some function $f$ satisfies $f(x + y) - 4f(x - y) = -12x + 20y + 15$ for every $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3f(x) = -12x + 15$",
                  "reason": "Substituting a chosen input: $y = 0$ makes both inputs $x$, so the two values of $f$ are one."
                },
                {
                  "step": "$f(x) = 4x - 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$; every function that satisfies the equation has this form."
                },
                {
                  "step": "$4(x + y) - 5 - 4(4(x - y) - 5) = -12x + 20y + 15$",
                  "reason": "Checking the solution in the equation: the form is put back into the left side, which is multiplied out."
                },
                {
                  "step": "The right side is also $-12x + 20y + 15$, so $f(x) = 4x - 5$ satisfies the equation for every $x$ and $y$.",
                  "reason": "Checking the solution in the equation: the form passes the check, so such a function exists."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t232-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(x)$, where $9f(x) + 7f(4 - x) = -10x - 108$ for every $x$, and write that line right.",
            "given": [
              "$9f(x) + 7f(4 - x) = -10x - 108$",
              "$9f(4 - x) + 7f(x) = 10x - 148$",
              "$81f(x) + 63f(4 - x) = -90x - 972$",
              "$49f(x) + 63f(4 - x) = -70x - 1036$",
              "$32f(x) = -20x + 64$",
              "$f(x) = -\\dfrac{5}{8}x + 2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(x)$, where $9f(x) + 7f(4 - x) = -10x - 108$ for every $x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 multiplies the term in $x$ of line 2 by $7$ and loses its sign.",
                "reason": "Multiplying both sides by the same number: every term of line 2 is multiplied by $7$, sign included."
              },
              {
                "step": "Line 4 written right is $49f(x) + 63f(4 - x) = 70x - 1036$",
                "reason": "Every line after it follows from the line written right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(x)$, where $-8f(x) + 9f(-3 - x) = 119x + 197$ for every $x$, and write that line right.",
              "given": [
                "$-8f(x) + 9f(-3 - x) = 119x + 197$",
                "$-8f(-3 - x) + 9f(x) = 119x - 160$",
                "$64f(x) - 72f(-3 - x) = -952x - 1576$",
                "$81f(x) - 72f(-3 - x) = 1071x - 1440$",
                "$-17f(x) = -2023x - 136$",
                "$f(x) = 119x + 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -8*f(-3-x)+9*f(x) = -119*x-160",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x)$, where $-8f(x) + 9f(-3 - x) = 119x + 197$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 keeps the sign of the term in $x$ when the input changes.",
                  "reason": "Multiplying out: the right side becomes a number times $(-3 - x)$, so its term in $x$ changes sign."
                },
                {
                  "step": "Line 2 written right is $-8f(-3 - x) + 9f(x) = -119x - 160$",
                  "reason": "Every line after it follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(x)$, where $4f(x) - 9f(3 - x) = -78x + 102$ for every $x$, and write that line right.",
              "given": [
                "$4f(x) - 9f(3 - x) = -78x + 102$",
                "$4f(3 - x) - 9f(x) = 78x - 132$",
                "$16f(x) - 36f(3 - x) = -312x + 408$",
                "$81f(x) - 36f(3 - x) = -702x + 1188$",
                "$-65f(x) = 390x - 780$",
                "$f(x) = 6x + 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: f(x) = -6*x+12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x)$, where $4f(x) - 9f(3 - x) = -78x + 102$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 divides the term in $x$ by $-65$ and loses the sign.",
                  "reason": "Dividing both sides by a nonzero number: every term is divided by $-65$, sign included."
                },
                {
                  "step": "Line 6 written right is $f(x) = -6x + 12$",
                  "reason": "Every line after it follows from the line written right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(x)$, where $-7f(x) + 8f(-6 - x) = -30x - 105$ for every $x$, and write that line right.",
              "given": [
                "$-7f(x) + 8f(-6 - x) = -30x - 105$",
                "$-7f(-6 - x) + 8f(x) = 30x + 75$",
                "$49f(x) - 56f(-6 - x) = 210x + 735$",
                "$64f(x) - 56f(-6 - x) = 240x + 600$",
                "$-15f(x) = -30x + 1335$",
                "$f(x) = 2x - 89$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -15*f(x) = -30*x+135",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x)$, where $-7f(x) + 8f(-6 - x) = -30x - 105$ for every $x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 adds the number term of line 4 where line 4 is taken away.",
                  "reason": "Elimination: line 4 is taken from line 3, and subtracting a bracket changes every sign in it."
                },
                {
                  "step": "Line 5 written right is $-15f(x) = -30x + 135$",
                  "reason": "Every line after it follows from the line written right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t232-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the sum $x + y$ is the product of its values at $x$ and at $y$, decreased by 21.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the sum $x + y$ is the product of its values at $x$ and at $y$, decreased by 21.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side is $f(x + y)$.",
                "reason": "Writing a sentence as an equation: the sentence opens on the value of $f$ at the input $x + y$."
              },
              {
                "step": "The right side is $f(x)f(y) - 21$.",
                "reason": "Writing a sentence as an equation: the product of the two values, then 21 taken away."
              },
              {
                "step": "$f(x + y) = f(x)f(y) - 21$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the product $xy$ is the sum of its value at $y$ and 24 times its value at $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x*y) = f(y)+24*f(x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the product $xy$ is the sum of its value at $y$ and 24 times its value at $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is $f(xy)$.",
                  "reason": "Writing a sentence as an equation: the sentence opens on the value of $f$ at the input $xy$."
                },
                {
                  "step": "The right side is $f(y) + 24f(x)$.",
                  "reason": "Writing a sentence as an equation: the value at $y$, then 24 times the value at $x$ added."
                },
                {
                  "step": "$f(xy) = f(y) + 24f(x)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at $5x$ is the square of its value at $x$, increased by $4x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(5*x) = f(x)^2+4*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at $5x$ is the square of its value at $x$, increased by $4x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is $f(5x)$.",
                  "reason": "Writing a sentence as an equation: the sentence opens on the value of $f$ at the input $5x$."
                },
                {
                  "step": "The right side is $f(x)^2 + 4x$.",
                  "reason": "Writing a sentence as an equation: the square of the value at $x$, then $4x$ added."
                },
                {
                  "step": "$f(5x) = f(x)^2 + 4x$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the quotient $\\dfrac{x}{y}$ is the difference of its values at $x$ and at $y$, increased by 24.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x/y) = f(x)-f(y)+24",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the value of $f$ that the sentence opens on alone on the left: The value of $f$ at the quotient $\\dfrac{x}{y}$ is the difference of its values at $x$ and at $y$, increased by 24.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is $f\\left(\\dfrac{x}{y}\\right)$.",
                  "reason": "Writing a sentence as an equation: the sentence opens on the value of $f$ at the input $\\dfrac{x}{y}$."
                },
                {
                  "step": "The right side is $f(x) - f(y) + 24$.",
                  "reason": "Writing a sentence as an equation: the value at $y$ taken from the value at $x$, then 24 added."
                },
                {
                  "step": "$f\\left(\\dfrac{x}{y}\\right) = f(x) - f(y) + 24$",
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
