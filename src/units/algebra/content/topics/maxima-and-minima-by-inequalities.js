export default {
  "number": 216,
  "title": "Maxima and minima by inequalities",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "400-406"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the least value of $\\dfrac{16x^2 + 49}{6x}$ for a positive number $x$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "28/3",
    "solution": [
      "Find the least value of $\\dfrac{16x^2 + 49}{6x}$ for a positive number $x$.",
      "$\\dfrac{16x^2 + 49}{6x} = \\dfrac{8x}{3} + \\dfrac{49}{6x}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{8x}{3} + \\dfrac{49}{6x}\\right) \\ge \\sqrt{\\dfrac{8x}{3} \\cdot \\dfrac{49}{6x}}$",
      "$\\sqrt{\\dfrac{8x}{3} \\cdot \\dfrac{49}{6x}} = \\dfrac{14}{3}$",
      "$\\dfrac{8x}{3} + \\dfrac{49}{6x} \\ge \\dfrac{28}{3}$",
      "Equality holds only when $\\dfrac{8x}{3} = \\dfrac{49}{6x}$, that is at $x = \\dfrac{7}{4}$.",
      "At $x = \\dfrac{7}{4}$ the expression is $\\dfrac{16 \\cdot \\left(\\dfrac{7}{4}\\right)^2 + 49}{6 \\cdot \\dfrac{7}{4}} = \\dfrac{28}{3}$.",
      "The least value is $\\dfrac{28}{3}$."
    ]
  },
  "ideas": [
    {
      "name": "Attaining the bound",
      "concrete": "For every real number $x$, the sum $x^2 + (x - 2)^2$ is at least $0$, since each square is at least $0$. Yet $0$ is not its least value: the sum is $0$ only when $x = 0$ and $x - 2 = 0$ together, and no number does both. Multiplying out and completing the square gives $x^2 + (x - 2)^2 = 2(x - 1)^2 + 2$, which is at least $2$ and equals $2$ at $x = 1$. The least value is $2$: the bound $2$ is reached, and the bound $0$ is not.",
      "general": "For an expression and the values of its letters that meet stated conditions, a number $c$ is the greatest value only when two things are shown: the expression is at most $c$ for all such values, and the expression equals $c$ for some such values. A least value needs the same two things with \"at least\" in place of \"at most\". Showing the values that give $c$ is **attaining the bound**. A bound that no such values reach is not the greatest or the least value. Where the bound comes from an inequality, the case of equality in that inequality says where to look for the values."
    }
  ],
  "kinds": [
    {
      "id": "t216-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest value of $2x + 3y$ for real numbers $x$, $y$ and $z$ with $2x + 5y \\le 3z + 4$ and $3z - 2y \\le 7$.",
            "lines": [
              {
                "step": "Find the greatest value of $2x + 3y$ for real numbers $x$, $y$ and $z$ with $2x + 5y \\le 3z + 4$ and $3z - 2y \\le 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x + 5y) + (3z - 2y) \\le (3z + 4) + 7$",
                "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added."
              },
              {
                "step": "$2x + 3y + 3z \\le 3z + 11$",
                "reason": "Collecting like terms: the terms in $y$ on the left, and the two numbers on the right."
              },
              {
                "step": "$2x + 3y \\le 11$",
                "reason": "Adding the same number: $3z$ is taken from both sides."
              },
              {
                "step": "The values $x = 4$, $y = 1$ and $z = 3$ meet both conditions with equality, since $2 \\cdot 4 + 5 \\cdot 1 = 3 \\cdot 3 + 4$ and $3 \\cdot 3 - 2 \\cdot 1 = 7$, and they give $2 \\cdot 4 + 3 \\cdot 1 = 11$.",
                "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
              },
              {
                "step": "The greatest value is $11$.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $3x - 4y$ for real numbers $x$, $y$ and $z$ with $3x + 2y \\ge 2z + 5$ and $2z - 6y \\ge -8$.",
              "form": "Answer as an integer.",
              "answer": "-3",
              "lines": [
                {
                  "step": "Find the least value of $3x - 4y$ for real numbers $x$, $y$ and $z$ with $3x + 2y \\ge 2z + 5$ and $2z - 6y \\ge -8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x + 2y) + (2z - 6y) \\ge (2z + 5) + \\left(-8\\right)$",
                  "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added."
                },
                {
                  "step": "$3x - 4y + 2z \\ge 2z - 3$",
                  "reason": "Collecting like terms: the terms in $y$ on the left, and the two numbers on the right."
                },
                {
                  "step": "$3x - 4y \\ge -3$",
                  "reason": "Adding the same number: $2z$ is taken from both sides."
                },
                {
                  "step": "The values $x = 3$, $y = 3$ and $z = 5$ meet both conditions with equality, since $3 \\cdot 3 + 2 \\cdot 3 = 2 \\cdot 5 + 5$ and $2 \\cdot 5 - 6 \\cdot 3 = -8$, and they give $3 \\cdot 3 - 4 \\cdot 3 = -3$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The least value is $-3$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $4x - 2y$ for real numbers $x$, $y$ and $z$ with $4x + y \\le 5z - 2$ and $5z - 3y \\le 8$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the greatest value of $4x - 2y$ for real numbers $x$, $y$ and $z$ with $4x + y \\le 5z - 2$ and $5z - 3y \\le 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x + y) + (5z - 3y) \\le (5z - 2) + 8$",
                  "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added."
                },
                {
                  "step": "$4x - 2y + 5z \\le 5z + 6$",
                  "reason": "Collecting like terms: the terms in $y$ on the left, and the two numbers on the right."
                },
                {
                  "step": "$4x - 2y \\le 6$",
                  "reason": "Adding the same number: $5z$ is taken from both sides."
                },
                {
                  "step": "The values $x = 1$, $y = -1$ and $z = 1$ meet both conditions with equality, since $4 \\cdot 1 + \\left(-1\\right) = 5 \\cdot 1 - 2$ and $5 \\cdot 1 - 3 \\cdot \\left(-1\\right) = 8$, and they give $4 \\cdot 1 - 2 \\cdot \\left(-1\\right) = 6$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The greatest value is $6$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $2x + 4y$ for real numbers $x$, $y$ and $z$ with $2x + 7y \\ge z + 5$ and $z - 3y \\ge 3$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the least value of $2x + 4y$ for real numbers $x$, $y$ and $z$ with $2x + 7y \\ge z + 5$ and $z - 3y \\ge 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x + 7y) + (z - 3y) \\ge (z + 5) + 3$",
                  "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added."
                },
                {
                  "step": "$2x + 4y + z \\ge z + 8$",
                  "reason": "Collecting like terms: the terms in $y$ on the left, and the two numbers on the right."
                },
                {
                  "step": "$2x + 4y \\ge 8$",
                  "reason": "Adding the same number: $z$ is taken from both sides."
                },
                {
                  "step": "The values $x = 2$, $y = 1$ and $z = 6$ meet both conditions with equality, since $2 \\cdot 2 + 7 \\cdot 1 = 6 + 5$ and $6 - 3 \\cdot 1 = 3$, and they give $2 \\cdot 2 + 4 \\cdot 1 = 8$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The least value is $8$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $\\dfrac{4x^2 + 9}{5x}$ for a positive number $x$.",
            "lines": [
              {
                "step": "Find the least value of $\\dfrac{4x^2 + 9}{5x}$ for a positive number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{4x^2 + 9}{5x} = \\dfrac{4x}{5} + \\dfrac{9}{5x}$",
                "reason": "Cancelling a common factor: each term of the numerator is divided by $5x$, and $x$ cancels in the first."
              },
              {
                "step": "$\\dfrac{1}{2}\\left(\\dfrac{4x}{5} + \\dfrac{9}{5x}\\right) \\ge \\sqrt{\\dfrac{4x}{5} \\cdot \\dfrac{9}{5x}}$",
                "reason": "AM-GM for two numbers: both numbers are positive, since $x > 0$."
              },
              {
                "step": "$\\sqrt{\\dfrac{4x}{5} \\cdot \\dfrac{9}{5x}} = \\dfrac{6}{5}$",
                "reason": "Positive square root: $x$ cancels in the product, which is $\\dfrac{36}{25}$, the square of $\\dfrac{6}{5}$."
              },
              {
                "step": "$\\dfrac{4x}{5} + \\dfrac{9}{5x} \\ge \\dfrac{12}{5}$",
                "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
              },
              {
                "step": "Equality holds only when $\\dfrac{4x}{5} = \\dfrac{9}{5x}$, that is at $x = \\dfrac{3}{2}$.",
                "reason": "Equality in AM-GM: the two numbers are equal, and $x$ is positive."
              },
              {
                "step": "At $x = \\dfrac{3}{2}$ the expression is $\\dfrac{4 \\cdot \\left(\\dfrac{3}{2}\\right)^2 + 9}{5 \\cdot \\dfrac{3}{2}} = \\dfrac{12}{5}$.",
                "reason": "Attaining the bound: substituting the value gives the bound."
              },
              {
                "step": "The least value is $\\dfrac{12}{5}$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $\\dfrac{9x^2 + 4}{7x}$ for a positive number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12/7",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{9x^2 + 4}{7x}$ for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9x^2 + 4}{7x} = \\dfrac{9x}{7} + \\dfrac{4}{7x}$",
                  "reason": "Cancelling a common factor: each term of the numerator is divided by $7x$, and $x$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(\\dfrac{9x}{7} + \\dfrac{4}{7x}\\right) \\ge \\sqrt{\\dfrac{9x}{7} \\cdot \\dfrac{4}{7x}}$",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $x > 0$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{9x}{7} \\cdot \\dfrac{4}{7x}} = \\dfrac{6}{7}$",
                  "reason": "Positive square root: $x$ cancels in the product, which is $\\dfrac{36}{49}$, the square of $\\dfrac{6}{7}$."
                },
                {
                  "step": "$\\dfrac{9x}{7} + \\dfrac{4}{7x} \\ge \\dfrac{12}{7}$",
                  "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $\\dfrac{9x}{7} = \\dfrac{4}{7x}$, that is at $x = \\dfrac{2}{3}$.",
                  "reason": "Equality in AM-GM: the two numbers are equal, and $x$ is positive."
                },
                {
                  "step": "At $x = \\dfrac{2}{3}$ the expression is $\\dfrac{9 \\cdot \\left(\\dfrac{2}{3}\\right)^2 + 4}{7 \\cdot \\dfrac{2}{3}} = \\dfrac{12}{7}$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{12}{7}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\dfrac{4x^2 + 25}{11x}$ for a positive number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "20/11",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{4x^2 + 25}{11x}$ for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4x^2 + 25}{11x} = \\dfrac{4x}{11} + \\dfrac{25}{11x}$",
                  "reason": "Cancelling a common factor: each term of the numerator is divided by $11x$, and $x$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(\\dfrac{4x}{11} + \\dfrac{25}{11x}\\right) \\ge \\sqrt{\\dfrac{4x}{11} \\cdot \\dfrac{25}{11x}}$",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $x > 0$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{4x}{11} \\cdot \\dfrac{25}{11x}} = \\dfrac{10}{11}$",
                  "reason": "Positive square root: $x$ cancels in the product, which is $\\dfrac{100}{121}$, the square of $\\dfrac{10}{11}$."
                },
                {
                  "step": "$\\dfrac{4x}{11} + \\dfrac{25}{11x} \\ge \\dfrac{20}{11}$",
                  "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $\\dfrac{4x}{11} = \\dfrac{25}{11x}$, that is at $x = \\dfrac{5}{2}$.",
                  "reason": "Equality in AM-GM: the two numbers are equal, and $x$ is positive."
                },
                {
                  "step": "At $x = \\dfrac{5}{2}$ the expression is $\\dfrac{4 \\cdot \\left(\\dfrac{5}{2}\\right)^2 + 25}{11 \\cdot \\dfrac{5}{2}} = \\dfrac{20}{11}$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{20}{11}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\dfrac{25x^2 + 4}{9x}$ for a positive number $x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "20/9",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{25x^2 + 4}{9x}$ for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{25x^2 + 4}{9x} = \\dfrac{25x}{9} + \\dfrac{4}{9x}$",
                  "reason": "Cancelling a common factor: each term of the numerator is divided by $9x$, and $x$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(\\dfrac{25x}{9} + \\dfrac{4}{9x}\\right) \\ge \\sqrt{\\dfrac{25x}{9} \\cdot \\dfrac{4}{9x}}$",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $x > 0$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{25x}{9} \\cdot \\dfrac{4}{9x}} = \\dfrac{10}{9}$",
                  "reason": "Positive square root: $x$ cancels in the product, which is $\\dfrac{100}{81}$, the square of $\\dfrac{10}{9}$."
                },
                {
                  "step": "$\\dfrac{25x}{9} + \\dfrac{4}{9x} \\ge \\dfrac{20}{9}$",
                  "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $\\dfrac{25x}{9} = \\dfrac{4}{9x}$, that is at $x = \\dfrac{2}{5}$.",
                  "reason": "Equality in AM-GM: the two numbers are equal, and $x$ is positive."
                },
                {
                  "step": "At $x = \\dfrac{2}{5}$ the expression is $\\dfrac{25 \\cdot \\left(\\dfrac{2}{5}\\right)^2 + 4}{9 \\cdot \\dfrac{2}{5}} = \\dfrac{20}{9}$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{20}{9}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $\\dfrac{x^2 - 8x + 25}{3x - 12}$ for a number $x$ greater than $4$.",
            "lines": [
              {
                "step": "Find the least value of $\\dfrac{x^2 - 8x + 25}{3x - 12}$ for a number $x$ greater than $4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 8x + 25 = (x - 4)^2 + 9$",
                "reason": "Completing the square: half of $-8$ is $-4$, and its square is added and taken away."
              },
              {
                "step": "$\\dfrac{x^2 - 8x + 25}{3x - 12} = \\dfrac{x - 4}{3} + \\dfrac{3}{x - 4}$",
                "reason": "Cancelling a common factor: the denominator is $3(x - 4)$, each term of the numerator is divided by it, and $x - 4$ cancels in the first and $3$ in the second."
              },
              {
                "step": "$\\dfrac{1}{2}\\left(\\dfrac{x - 4}{3} + \\dfrac{3}{x - 4}\\right) \\ge \\sqrt{\\dfrac{x - 4}{3} \\cdot \\dfrac{3}{x - 4}}$",
                "reason": "AM-GM for two numbers: both numbers are positive, since $x > 4$."
              },
              {
                "step": "$\\sqrt{\\dfrac{x - 4}{3} \\cdot \\dfrac{3}{x - 4}} = 1$",
                "reason": "Positive square root: $x - 4$ cancels in the product, which is $1$, the square of $1$."
              },
              {
                "step": "$\\dfrac{x - 4}{3} + \\dfrac{3}{x - 4} \\ge 2$",
                "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
              },
              {
                "step": "Equality holds only when $\\dfrac{x - 4}{3} = \\dfrac{3}{x - 4}$, that is at $x = 7$.",
                "reason": "Equality in AM-GM: the two numbers are equal, and $x - 4$ is positive."
              },
              {
                "step": "At $x = 7$ the expression is $\\dfrac{7^2 - 8 \\cdot 7 + 25}{3 \\cdot 7 - 12} = 2$.",
                "reason": "Attaining the bound: substituting the value gives the bound."
              },
              {
                "step": "The least value is $2$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $\\dfrac{4x^2 - 8x + 29}{3x - 3}$ for a number $x$ greater than $1$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "20/3",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{4x^2 - 8x + 29}{3x - 3}$ for a number $x$ greater than $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 - 8x + 29 = 4(x - 1)^2 + 25$",
                  "reason": "Completing the square: half of $-2$ is $-1$, and its square is added and taken away, with $4$ taken out of the first two terms."
                },
                {
                  "step": "$\\dfrac{4x^2 - 8x + 29}{3x - 3} = \\dfrac{4(x - 1)}{3} + \\dfrac{25}{3(x - 1)}$",
                  "reason": "Cancelling a common factor: the denominator is $3(x - 1)$, each term of the numerator is divided by it, and $x - 1$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(\\dfrac{4(x - 1)}{3} + \\dfrac{25}{3(x - 1)}\\right) \\ge \\sqrt{\\dfrac{4(x - 1)}{3} \\cdot \\dfrac{25}{3(x - 1)}}$",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $x > 1$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{4(x - 1)}{3} \\cdot \\dfrac{25}{3(x - 1)}} = \\dfrac{10}{3}$",
                  "reason": "Positive square root: $x - 1$ cancels in the product, which is $\\dfrac{100}{9}$, the square of $\\dfrac{10}{3}$."
                },
                {
                  "step": "$\\dfrac{4(x - 1)}{3} + \\dfrac{25}{3(x - 1)} \\ge \\dfrac{20}{3}$",
                  "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $\\dfrac{4(x - 1)}{3} = \\dfrac{25}{3(x - 1)}$, that is at $x = \\dfrac{7}{2}$.",
                  "reason": "Equality in AM-GM: the two numbers are equal, and $x - 1$ is positive."
                },
                {
                  "step": "At $x = \\dfrac{7}{2}$ the expression is $\\dfrac{4 \\cdot \\left(\\dfrac{7}{2}\\right)^2 - 8 \\cdot \\dfrac{7}{2} + 29}{3 \\cdot \\dfrac{7}{2} - 3} = \\dfrac{20}{3}$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{20}{3}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\dfrac{16x^2 + 64x + 65}{5x + 10}$ for a number $x$ greater than $-2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8/5",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{16x^2 + 64x + 65}{5x + 10}$ for a number $x$ greater than $-2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16x^2 + 64x + 65 = 16(x + 2)^2 + 1$",
                  "reason": "Completing the square: half of $4$ is $2$, and its square is added and taken away, with $16$ taken out of the first two terms."
                },
                {
                  "step": "$\\dfrac{16x^2 + 64x + 65}{5x + 10} = \\dfrac{16(x + 2)}{5} + \\dfrac{1}{5(x + 2)}$",
                  "reason": "Cancelling a common factor: the denominator is $5(x + 2)$, each term of the numerator is divided by it, and $x + 2$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(\\dfrac{16(x + 2)}{5} + \\dfrac{1}{5(x + 2)}\\right) \\ge \\sqrt{\\dfrac{16(x + 2)}{5} \\cdot \\dfrac{1}{5(x + 2)}}$",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $x > -2$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{16(x + 2)}{5} \\cdot \\dfrac{1}{5(x + 2)}} = \\dfrac{4}{5}$",
                  "reason": "Positive square root: $x + 2$ cancels in the product, which is $\\dfrac{16}{25}$, the square of $\\dfrac{4}{5}$."
                },
                {
                  "step": "$\\dfrac{16(x + 2)}{5} + \\dfrac{1}{5(x + 2)} \\ge \\dfrac{8}{5}$",
                  "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $\\dfrac{16(x + 2)}{5} = \\dfrac{1}{5(x + 2)}$, that is at $x = -\\dfrac{7}{4}$.",
                  "reason": "Equality in AM-GM: the two numbers are equal, and $x + 2$ is positive."
                },
                {
                  "step": "At $x = -\\dfrac{7}{4}$ the expression is $\\dfrac{16 \\cdot \\left(-\\dfrac{7}{4}\\right)^2 + 64 \\cdot \\left(-\\dfrac{7}{4}\\right) + 65}{5 \\cdot \\left(-\\dfrac{7}{4}\\right) + 10} = \\dfrac{8}{5}$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{8}{5}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\dfrac{x^2 + 6x + 58}{5x + 15}$ for a number $x$ greater than $-3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "14/5",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{x^2 + 6x + 58}{5x + 15}$ for a number $x$ greater than $-3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 6x + 58 = (x + 3)^2 + 49$",
                  "reason": "Completing the square: half of $6$ is $3$, and its square is added and taken away."
                },
                {
                  "step": "$\\dfrac{x^2 + 6x + 58}{5x + 15} = \\dfrac{x + 3}{5} + \\dfrac{49}{5(x + 3)}$",
                  "reason": "Cancelling a common factor: the denominator is $5(x + 3)$, each term of the numerator is divided by it, and $x + 3$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(\\dfrac{x + 3}{5} + \\dfrac{49}{5(x + 3)}\\right) \\ge \\sqrt{\\dfrac{x + 3}{5} \\cdot \\dfrac{49}{5(x + 3)}}$",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $x > -3$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{x + 3}{5} \\cdot \\dfrac{49}{5(x + 3)}} = \\dfrac{7}{5}$",
                  "reason": "Positive square root: $x + 3$ cancels in the product, which is $\\dfrac{49}{25}$, the square of $\\dfrac{7}{5}$."
                },
                {
                  "step": "$\\dfrac{x + 3}{5} + \\dfrac{49}{5(x + 3)} \\ge \\dfrac{14}{5}$",
                  "reason": "Multiplying by a positive number: both sides of the line with the root are multiplied by $2$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $\\dfrac{x + 3}{5} = \\dfrac{49}{5(x + 3)}$, that is at $x = 4$.",
                  "reason": "Equality in AM-GM: the two numbers are equal, and $x + 3$ is positive."
                },
                {
                  "step": "At $x = 4$ the expression is $\\dfrac{4^2 + 6 \\cdot 4 + 58}{5 \\cdot 4 + 15} = \\dfrac{14}{5}$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{14}{5}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $2x + 3y + 4z$ for positive numbers $x$, $y$ and $z$ with $xyz = 72$.",
            "lines": [
              {
                "step": "Find the least value of $2x + 3y + 4z$ for positive numbers $x$, $y$ and $z$ with $xyz = 72$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{2x + 3y + 4z}{3} \\ge \\sqrt[3]{2x \\cdot 3y \\cdot 4z}$",
                "reason": "AM-GM for n numbers: the three numbers $2x$, $3y$ and $4z$ are positive."
              },
              {
                "step": "$\\sqrt[3]{2x \\cdot 3y \\cdot 4z} = 12$",
                "reason": "Substituting a value: the product is $24xyz$, and $xyz = 72$; Fractional exponents: $24 \\cdot 72 = 12^3$."
              },
              {
                "step": "$2x + 3y + 4z \\ge 36$",
                "reason": "Multiplying by a positive number: both sides of the second line are multiplied by $3$, and the root is replaced by its value."
              },
              {
                "step": "Equality holds only when $2x = 3y = 4z$.",
                "reason": "Equality in AM-GM: the three numbers are equal."
              },
              {
                "step": "The values $x = 6$, $y = 4$ and $z = 3$ have $2 \\cdot 6 = 3 \\cdot 4 = 4 \\cdot 3$ and $6 \\cdot 4 \\cdot 3 = 72$, and they give $2 \\cdot 6 + 3 \\cdot 4 + 4 \\cdot 3 = 36$.",
                "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
              },
              {
                "step": "The least value is $36$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $x + 2y + 4z$ for positive numbers $x$, $y$ and $z$ with $xyz = 64$.",
              "form": "Answer as an integer.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find the least value of $x + 2y + 4z$ for positive numbers $x$, $y$ and $z$ with $xyz = 64$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x + 2y + 4z}{3} \\ge \\sqrt[3]{x \\cdot 2y \\cdot 4z}$",
                  "reason": "AM-GM for n numbers: the three numbers $x$, $2y$ and $4z$ are positive."
                },
                {
                  "step": "$\\sqrt[3]{x \\cdot 2y \\cdot 4z} = 8$",
                  "reason": "Substituting a value: the product is $8xyz$, and $xyz = 64$; Fractional exponents: $8 \\cdot 64 = 8^3$."
                },
                {
                  "step": "$x + 2y + 4z \\ge 24$",
                  "reason": "Multiplying by a positive number: both sides of the second line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $x = 2y = 4z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal."
                },
                {
                  "step": "The values $x = 8$, $y = 4$ and $z = 2$ have $8 = 2 \\cdot 4 = 4 \\cdot 2$ and $8 \\cdot 4 \\cdot 2 = 64$, and they give $8 + 2 \\cdot 4 + 4 \\cdot 2 = 24$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The least value is $24$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $2x + 3y + 6z$ for positive numbers $x$, $y$ and $z$ with $xyz = 6$.",
              "form": "Answer as an integer.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find the least value of $2x + 3y + 6z$ for positive numbers $x$, $y$ and $z$ with $xyz = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2x + 3y + 6z}{3} \\ge \\sqrt[3]{2x \\cdot 3y \\cdot 6z}$",
                  "reason": "AM-GM for n numbers: the three numbers $2x$, $3y$ and $6z$ are positive."
                },
                {
                  "step": "$\\sqrt[3]{2x \\cdot 3y \\cdot 6z} = 6$",
                  "reason": "Substituting a value: the product is $36xyz$, and $xyz = 6$; Fractional exponents: $36 \\cdot 6 = 6^3$."
                },
                {
                  "step": "$2x + 3y + 6z \\ge 18$",
                  "reason": "Multiplying by a positive number: both sides of the second line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $2x = 3y = 6z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal."
                },
                {
                  "step": "The values $x = 3$, $y = 2$ and $z = 1$ have $2 \\cdot 3 = 3 \\cdot 2 = 6 \\cdot 1$ and $3 \\cdot 2 \\cdot 1 = 6$, and they give $2 \\cdot 3 + 3 \\cdot 2 + 6 \\cdot 1 = 18$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The least value is $18$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $2x + 5y + 10z$ for positive numbers $x$, $y$ and $z$ with $xyz = 10$.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the least value of $2x + 5y + 10z$ for positive numbers $x$, $y$ and $z$ with $xyz = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2x + 5y + 10z}{3} \\ge \\sqrt[3]{2x \\cdot 5y \\cdot 10z}$",
                  "reason": "AM-GM for n numbers: the three numbers $2x$, $5y$ and $10z$ are positive."
                },
                {
                  "step": "$\\sqrt[3]{2x \\cdot 5y \\cdot 10z} = 10$",
                  "reason": "Substituting a value: the product is $100xyz$, and $xyz = 10$; Fractional exponents: $100 \\cdot 10 = 10^3$."
                },
                {
                  "step": "$2x + 5y + 10z \\ge 30$",
                  "reason": "Multiplying by a positive number: both sides of the second line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $2x = 5y = 10z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal."
                },
                {
                  "step": "The values $x = 5$, $y = 2$ and $z = 1$ have $2 \\cdot 5 = 5 \\cdot 2 = 10 \\cdot 1$ and $5 \\cdot 2 \\cdot 1 = 10$, and they give $2 \\cdot 5 + 5 \\cdot 2 + 10 \\cdot 1 = 30$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The least value is $30$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $2x^2 + \\dfrac{108}{x}$ for a positive number $x$.",
            "lines": [
              {
                "step": "Find the least value of $2x^2 + \\dfrac{108}{x}$ for a positive number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x^2 + \\dfrac{108}{x} = 2x^2 + \\dfrac{54}{x} + \\dfrac{54}{x}$",
                "reason": "Collecting like terms: the two equal parts add back to $\\dfrac{108}{x}$."
              },
              {
                "step": "$\\dfrac{1}{3}\\left(2x^2 + \\dfrac{54}{x} + \\dfrac{54}{x}\\right) \\ge \\sqrt[3]{2x^2 \\cdot \\dfrac{54}{x} \\cdot \\dfrac{54}{x}}$",
                "reason": "AM-GM for n numbers: the three numbers are positive, since $x > 0$."
              },
              {
                "step": "$\\sqrt[3]{2x^2 \\cdot \\dfrac{54}{x} \\cdot \\dfrac{54}{x}} = 18$",
                "reason": "Cancelling a common factor: $x^2$ cancels in the product, which is $5832$; Fractional exponents: $5832 = 18^3$."
              },
              {
                "step": "$2x^2 + \\dfrac{108}{x} \\ge 54$",
                "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
              },
              {
                "step": "Equality holds only when $2x^2 = \\dfrac{54}{x}$, that is when $x^3 = 27$, so at $x = 3$.",
                "reason": "Equality in AM-GM: the three numbers are equal."
              },
              {
                "step": "At $x = 3$ the expression is $2 \\cdot 3^2 + \\dfrac{108}{3} = 54$.",
                "reason": "Attaining the bound: substituting the value gives the bound."
              },
              {
                "step": "The least value is $54$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $x^2 + \\dfrac{128}{x}$ for a positive number $x$.",
              "form": "Answer as an integer.",
              "answer": "48",
              "lines": [
                {
                  "step": "Find the least value of $x^2 + \\dfrac{128}{x}$ for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + \\dfrac{128}{x} = x^2 + \\dfrac{64}{x} + \\dfrac{64}{x}$",
                  "reason": "Collecting like terms: the two equal parts add back to $\\dfrac{128}{x}$."
                },
                {
                  "step": "$\\dfrac{1}{3}\\left(x^2 + \\dfrac{64}{x} + \\dfrac{64}{x}\\right) \\ge \\sqrt[3]{x^2 \\cdot \\dfrac{64}{x} \\cdot \\dfrac{64}{x}}$",
                  "reason": "AM-GM for n numbers: the three numbers are positive, since $x > 0$."
                },
                {
                  "step": "$\\sqrt[3]{x^2 \\cdot \\dfrac{64}{x} \\cdot \\dfrac{64}{x}} = 16$",
                  "reason": "Cancelling a common factor: $x^2$ cancels in the product, which is $4096$; Fractional exponents: $4096 = 16^3$."
                },
                {
                  "step": "$x^2 + \\dfrac{128}{x} \\ge 48$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $x^2 = \\dfrac{64}{x}$, that is when $x^3 = 64$, so at $x = 4$.",
                  "reason": "Equality in AM-GM: the three numbers are equal."
                },
                {
                  "step": "At $x = 4$ the expression is $4^2 + \\dfrac{128}{4} = 48$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $48$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $2x + \\dfrac{8}{x^2}$ for a positive number $x$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the least value of $2x + \\dfrac{8}{x^2}$ for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + \\dfrac{8}{x^2} = x + x + \\dfrac{8}{x^2}$",
                  "reason": "Collecting like terms: the two equal parts add back to $2x$."
                },
                {
                  "step": "$\\dfrac{1}{3}\\left(x + x + \\dfrac{8}{x^2}\\right) \\ge \\sqrt[3]{x \\cdot x \\cdot \\dfrac{8}{x^2}}$",
                  "reason": "AM-GM for n numbers: the three numbers are positive, since $x > 0$."
                },
                {
                  "step": "$\\sqrt[3]{x \\cdot x \\cdot \\dfrac{8}{x^2}} = 2$",
                  "reason": "Cancelling a common factor: $x^2$ cancels in the product, which is $8$; Fractional exponents: $8 = 2^3$."
                },
                {
                  "step": "$2x + \\dfrac{8}{x^2} \\ge 6$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $x = \\dfrac{8}{x^2}$, that is when $x^3 = 8$, so at $x = 2$.",
                  "reason": "Equality in AM-GM: the three numbers are equal."
                },
                {
                  "step": "At $x = 2$ the expression is $2 \\cdot 2 + \\dfrac{8}{2^2} = 6$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $6$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $4x + \\dfrac{250}{x^2}$ for a positive number $x$.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the least value of $4x + \\dfrac{250}{x^2}$ for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + \\dfrac{250}{x^2} = 2x + 2x + \\dfrac{250}{x^2}$",
                  "reason": "Collecting like terms: the two equal parts add back to $4x$."
                },
                {
                  "step": "$\\dfrac{1}{3}\\left(2x + 2x + \\dfrac{250}{x^2}\\right) \\ge \\sqrt[3]{2x \\cdot 2x \\cdot \\dfrac{250}{x^2}}$",
                  "reason": "AM-GM for n numbers: the three numbers are positive, since $x > 0$."
                },
                {
                  "step": "$\\sqrt[3]{2x \\cdot 2x \\cdot \\dfrac{250}{x^2}} = 10$",
                  "reason": "Cancelling a common factor: $x^2$ cancels in the product, which is $1000$; Fractional exponents: $1000 = 10^3$."
                },
                {
                  "step": "$4x + \\dfrac{250}{x^2} \\ge 30$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $2x = \\dfrac{250}{x^2}$, that is when $x^3 = 125$, so at $x = 5$.",
                  "reason": "Equality in AM-GM: the three numbers are equal."
                },
                {
                  "step": "At $x = 5$ the expression is $4 \\cdot 5 + \\dfrac{250}{5^2} = 30$.",
                  "reason": "Attaining the bound: substituting the value gives the bound."
                },
                {
                  "step": "The least value is $30$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 5xy + y^2 = 63$.",
            "lines": [
              {
                "step": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 5xy + y^2 = 63$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - y)^2 \\ge 0$",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "$x^2 - 2xy + y^2 \\ge 0$",
                "reason": "Square of a binomial: the square is multiplied out."
              },
              {
                "step": "$x^2 + 5xy + y^2 \\ge 7xy$",
                "reason": "Adding the same number: $7xy$ is added to both sides."
              },
              {
                "step": "$63 \\ge 7xy$",
                "reason": "Substituting a value: the left side is $63$, by the condition."
              },
              {
                "step": "$xy \\le 9$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{7}$."
              },
              {
                "step": "The values $x = 3$ and $y = 3$ meet the condition, since $3^2 + 5 \\cdot 3 \\cdot 3 + 3^2 = 63$, and they give $xy = 3 \\cdot 3 = 9$.",
                "reason": "Attaining the bound: equality in the second line needs $x = y$, and these values have it, meet the condition and give the bound."
              },
              {
                "step": "The greatest value is $9$.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 4xy + y^2 = 24$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 4xy + y^2 = 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - y)^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$x^2 - 2xy + y^2 \\ge 0$",
                  "reason": "Square of a binomial: the square is multiplied out."
                },
                {
                  "step": "$x^2 + 4xy + y^2 \\ge 6xy$",
                  "reason": "Adding the same number: $6xy$ is added to both sides."
                },
                {
                  "step": "$24 \\ge 6xy$",
                  "reason": "Substituting a value: the left side is $24$, by the condition."
                },
                {
                  "step": "$xy \\le 4$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{6}$."
                },
                {
                  "step": "The values $x = 2$ and $y = 2$ meet the condition, since $2^2 + 4 \\cdot 2 \\cdot 2 + 2^2 = 24$, and they give $xy = 2 \\cdot 2 = 4$.",
                  "reason": "Attaining the bound: equality in the second line needs $x = y$, and these values have it, meet the condition and give the bound."
                },
                {
                  "step": "The greatest value is $4$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 3xy + 4y^2 = 56$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 3xy + 4y^2 = 56$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 2y)^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$x^2 - 4xy + 4y^2 \\ge 0$",
                  "reason": "Square of a binomial: the square is multiplied out."
                },
                {
                  "step": "$x^2 + 3xy + 4y^2 \\ge 7xy$",
                  "reason": "Adding the same number: $7xy$ is added to both sides."
                },
                {
                  "step": "$56 \\ge 7xy$",
                  "reason": "Substituting a value: the left side is $56$, by the condition."
                },
                {
                  "step": "$xy \\le 8$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{7}$."
                },
                {
                  "step": "The values $x = 4$ and $y = 2$ meet the condition, since $4^2 + 3 \\cdot 4 \\cdot 2 + 4 \\cdot 2^2 = 56$, and they give $xy = 4 \\cdot 2 = 8$.",
                  "reason": "Attaining the bound: equality in the second line needs $x = 2y$, and these values have it, meet the condition and give the bound."
                },
                {
                  "step": "The greatest value is $8$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 6xy + y^2 = 40$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 6xy + y^2 = 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - y)^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "$x^2 - 2xy + y^2 \\ge 0$",
                  "reason": "Square of a binomial: the square is multiplied out."
                },
                {
                  "step": "$x^2 + 6xy + y^2 \\ge 8xy$",
                  "reason": "Adding the same number: $8xy$ is added to both sides."
                },
                {
                  "step": "$40 \\ge 8xy$",
                  "reason": "Substituting a value: the left side is $40$, by the condition."
                },
                {
                  "step": "$xy \\le 5$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{8}$."
                },
                {
                  "step": "The values $x = \\sqrt{5}$ and $y = \\sqrt{5}$ meet the condition, since $(\\sqrt{5})^2 + 6 \\cdot \\sqrt{5} \\cdot \\sqrt{5} + (\\sqrt{5})^2 = 40$, and they give $xy = \\sqrt{5} \\cdot \\sqrt{5} = 5$.",
                  "reason": "Attaining the bound: equality in the second line needs $x = y$, and these values have it, meet the condition and give the bound."
                },
                {
                  "step": "The greatest value is $5$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $2x + 3y = 26$.",
            "lines": [
              {
                "step": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $2x + 3y = 26$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2^2 + 3^2)(x^2 + y^2) \\ge (2x + 3y)^2$",
                "reason": "Cauchy-Schwarz Inequality, for the first sequence $2$, $3$ and the second sequence $x$, $y$."
              },
              {
                "step": "$13(x^2 + y^2) \\ge 26^2$",
                "reason": "Substituting a value: $2^2 + 3^2 = 13$, and $2x + 3y = 26$ by the condition."
              },
              {
                "step": "$x^2 + y^2 \\ge 52$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{13}$, and $\\dfrac{26^2}{13} = 52$."
              },
              {
                "step": "Equality holds only when $x = 2c$ and $y = 3c$ for some real number $c$.",
                "reason": "Equality in Cauchy-Schwarz: the numbers $2$ and $3$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
              },
              {
                "step": "The condition then reads $2 \\cdot 2c + 3 \\cdot 3c = 26$, so $c = 2$, which gives $x = 4$ and $y = 6$.",
                "reason": "Substituting a value: each letter is replaced in the condition, which gives $13c = 26$."
              },
              {
                "step": "These values give $x^2 + y^2 = 4^2 + 6^2 = 52$.",
                "reason": "Attaining the bound: the values meet the condition and give the bound."
              },
              {
                "step": "The least value is $52$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $x + 2y = 7$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "49/5",
              "lines": [
                {
                  "step": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $x + 2y = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(1^2 + 2^2)(x^2 + y^2) \\ge (x + 2y)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $1$, $2$ and the second sequence $x$, $y$."
                },
                {
                  "step": "$5(x^2 + y^2) \\ge 7^2$",
                  "reason": "Substituting a value: $1^2 + 2^2 = 5$, and $x + 2y = 7$ by the condition."
                },
                {
                  "step": "$x^2 + y^2 \\ge \\dfrac{49}{5}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5}$, and $\\dfrac{7^2}{5} = \\dfrac{49}{5}$."
                },
                {
                  "step": "Equality holds only when $x = c$ and $y = 2c$ for some real number $c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $1$ and $2$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
                },
                {
                  "step": "The condition then reads $c + 2 \\cdot 2c = 7$, so $c = \\dfrac{7}{5}$, which gives $x = \\dfrac{7}{5}$ and $y = \\dfrac{14}{5}$.",
                  "reason": "Substituting a value: each letter is replaced in the condition, which gives $5c = 7$."
                },
                {
                  "step": "These values give $x^2 + y^2 = \\left(\\dfrac{7}{5}\\right)^2 + \\left(\\dfrac{14}{5}\\right)^2 = \\dfrac{49}{5}$.",
                  "reason": "Attaining the bound: the values meet the condition and give the bound."
                },
                {
                  "step": "The least value is $\\dfrac{49}{5}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $2x + 5y = 10$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "100/29",
              "lines": [
                {
                  "step": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $2x + 5y = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2^2 + 5^2)(x^2 + y^2) \\ge (2x + 5y)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $2$, $5$ and the second sequence $x$, $y$."
                },
                {
                  "step": "$29(x^2 + y^2) \\ge 10^2$",
                  "reason": "Substituting a value: $2^2 + 5^2 = 29$, and $2x + 5y = 10$ by the condition."
                },
                {
                  "step": "$x^2 + y^2 \\ge \\dfrac{100}{29}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{29}$, and $\\dfrac{10^2}{29} = \\dfrac{100}{29}$."
                },
                {
                  "step": "Equality holds only when $x = 2c$ and $y = 5c$ for some real number $c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $2$ and $5$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
                },
                {
                  "step": "The condition then reads $2 \\cdot 2c + 5 \\cdot 5c = 10$, so $c = \\dfrac{10}{29}$, which gives $x = \\dfrac{20}{29}$ and $y = \\dfrac{50}{29}$.",
                  "reason": "Substituting a value: each letter is replaced in the condition, which gives $29c = 10$."
                },
                {
                  "step": "These values give $x^2 + y^2 = \\left(\\dfrac{20}{29}\\right)^2 + \\left(\\dfrac{50}{29}\\right)^2 = \\dfrac{100}{29}$.",
                  "reason": "Attaining the bound: the values meet the condition and give the bound."
                },
                {
                  "step": "The least value is $\\dfrac{100}{29}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $x^2 + y^2 + z^2$ for real numbers $x$, $y$ and $z$ with $3x + 2y + 6z = 14$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the least value of $x^2 + y^2 + z^2$ for real numbers $x$, $y$ and $z$ with $3x + 2y + 6z = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3^2 + 2^2 + 6^2)(x^2 + y^2 + z^2) \\ge (3x + 2y + 6z)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $3$, $2$, $6$ and the second sequence $x$, $y$, $z$."
                },
                {
                  "step": "$49(x^2 + y^2 + z^2) \\ge 14^2$",
                  "reason": "Substituting a value: $3^2 + 2^2 + 6^2 = 49$, and $3x + 2y + 6z = 14$ by the condition."
                },
                {
                  "step": "$x^2 + y^2 + z^2 \\ge 4$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{49}$, and $\\dfrac{14^2}{49} = 4$."
                },
                {
                  "step": "Equality holds only when $x = 3c$, $y = 2c$ and $z = 6c$ for some real number $c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $3$, $2$ and $6$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
                },
                {
                  "step": "The condition then reads $3 \\cdot 3c + 2 \\cdot 2c + 6 \\cdot 6c = 14$, so $c = \\dfrac{2}{7}$, which gives $x = \\dfrac{6}{7}$, $y = \\dfrac{4}{7}$ and $z = \\dfrac{12}{7}$.",
                  "reason": "Substituting a value: each letter is replaced in the condition, which gives $49c = 14$."
                },
                {
                  "step": "These values give $x^2 + y^2 + z^2 = \\left(\\dfrac{6}{7}\\right)^2 + \\left(\\dfrac{4}{7}\\right)^2 + \\left(\\dfrac{12}{7}\\right)^2 = 4$.",
                  "reason": "Attaining the bound: the values meet the condition and give the bound."
                },
                {
                  "step": "The least value is $4$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $3x + 5y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 136$.",
            "lines": [
              {
                "step": "Find the greatest value of $3x + 5y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 136$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(3^2 + 5^2)(x^2 + y^2) \\ge (3x + 5y)^2$",
                "reason": "Cauchy-Schwarz Inequality, for the first sequence $3$, $5$ and the second sequence $x$, $y$."
              },
              {
                "step": "$(3x + 5y)^2 \\le 34 \\cdot 136$",
                "reason": "Substituting a value: $3^2 + 5^2 = 34$, and $x^2 + y^2 = 136$ by the condition."
              },
              {
                "step": "$|3x + 5y| \\le 68$",
                "reason": "Powers and roots of positive numbers keep the order: $34 \\cdot 136 = 68^2$, and an absolute value above $68$ would have a square above $68^2$."
              },
              {
                "step": "$3x + 5y \\le 68$",
                "reason": "Absolute value, from arithmetic: a number is at most its absolute value."
              },
              {
                "step": "Equality holds only when $x = 3c$ and $y = 5c$ for some real number $c$.",
                "reason": "Equality in Cauchy-Schwarz: the numbers $3$ and $5$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
              },
              {
                "step": "The condition then reads $(3c)^2 + (5c)^2 = 136$, so $c^2 = 4$; with $c = 2$ this gives $x = 6$ and $y = 10$.",
                "reason": "Substituting a value: each letter is replaced in the condition, which gives $34c^2 = 136$; the positive $c$ makes $3x + 5y$ positive."
              },
              {
                "step": "These values give $3 \\cdot 6 + 5 \\cdot 10 = 68$.",
                "reason": "Attaining the bound: the values meet the condition and give the bound."
              },
              {
                "step": "The greatest value is $68$.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $x + 6y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 333$.",
              "form": "Answer as an integer.",
              "answer": "111",
              "lines": [
                {
                  "step": "Find the greatest value of $x + 6y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 333$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(1^2 + 6^2)(x^2 + y^2) \\ge (x + 6y)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $1$, $6$ and the second sequence $x$, $y$."
                },
                {
                  "step": "$(x + 6y)^2 \\le 37 \\cdot 333$",
                  "reason": "Substituting a value: $1^2 + 6^2 = 37$, and $x^2 + y^2 = 333$ by the condition."
                },
                {
                  "step": "$|x + 6y| \\le 111$",
                  "reason": "Powers and roots of positive numbers keep the order: $37 \\cdot 333 = 111^2$, and an absolute value above $111$ would have a square above $111^2$."
                },
                {
                  "step": "$x + 6y \\le 111$",
                  "reason": "Absolute value, from arithmetic: a number is at most its absolute value."
                },
                {
                  "step": "Equality holds only when $x = c$ and $y = 6c$ for some real number $c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $1$ and $6$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
                },
                {
                  "step": "The condition then reads $c^2 + (6c)^2 = 333$, so $c^2 = 9$; with $c = 3$ this gives $x = 3$ and $y = 18$.",
                  "reason": "Substituting a value: each letter is replaced in the condition, which gives $37c^2 = 333$; the positive $c$ makes $x + 6y$ positive."
                },
                {
                  "step": "These values give $3 + 6 \\cdot 18 = 111$.",
                  "reason": "Attaining the bound: the values meet the condition and give the bound."
                },
                {
                  "step": "The greatest value is $111$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $8x + 15y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 9$.",
              "form": "Answer as an integer.",
              "answer": "51",
              "lines": [
                {
                  "step": "Find the greatest value of $8x + 15y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(8^2 + 15^2)(x^2 + y^2) \\ge (8x + 15y)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $8$, $15$ and the second sequence $x$, $y$."
                },
                {
                  "step": "$(8x + 15y)^2 \\le 289 \\cdot 9$",
                  "reason": "Substituting a value: $8^2 + 15^2 = 289$, and $x^2 + y^2 = 9$ by the condition."
                },
                {
                  "step": "$|8x + 15y| \\le 51$",
                  "reason": "Powers and roots of positive numbers keep the order: $289 \\cdot 9 = 51^2$, and an absolute value above $51$ would have a square above $51^2$."
                },
                {
                  "step": "$8x + 15y \\le 51$",
                  "reason": "Absolute value, from arithmetic: a number is at most its absolute value."
                },
                {
                  "step": "Equality holds only when $x = 8c$ and $y = 15c$ for some real number $c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $8$ and $15$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
                },
                {
                  "step": "The condition then reads $(8c)^2 + (15c)^2 = 9$, so $c^2 = \\dfrac{9}{289}$; with $c = \\dfrac{3}{17}$ this gives $x = \\dfrac{24}{17}$ and $y = \\dfrac{45}{17}$.",
                  "reason": "Substituting a value: each letter is replaced in the condition, which gives $289c^2 = 9$; the positive $c$ makes $8x + 15y$ positive."
                },
                {
                  "step": "These values give $8 \\cdot \\dfrac{24}{17} + 15 \\cdot \\dfrac{45}{17} = 51$.",
                  "reason": "Attaining the bound: the values meet the condition and give the bound."
                },
                {
                  "step": "The greatest value is $51$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $4x + 4y + 7z$ for real numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 9$.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Find the greatest value of $4x + 4y + 7z$ for real numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4^2 + 4^2 + 7^2)(x^2 + y^2 + z^2) \\ge (4x + 4y + 7z)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $4$, $4$, $7$ and the second sequence $x$, $y$, $z$."
                },
                {
                  "step": "$(4x + 4y + 7z)^2 \\le 81 \\cdot 9$",
                  "reason": "Substituting a value: $4^2 + 4^2 + 7^2 = 81$, and $x^2 + y^2 + z^2 = 9$ by the condition."
                },
                {
                  "step": "$|4x + 4y + 7z| \\le 27$",
                  "reason": "Powers and roots of positive numbers keep the order: $81 \\cdot 9 = 27^2$, and an absolute value above $27$ would have a square above $27^2$."
                },
                {
                  "step": "$4x + 4y + 7z \\le 27$",
                  "reason": "Absolute value, from arithmetic: a number is at most its absolute value."
                },
                {
                  "step": "Equality holds only when $x = 4c$, $y = 4c$ and $z = 7c$ for some real number $c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $4$, $4$ and $7$ are not all $0$, so the two sides are equal only when the second sequence is one number times the first."
                },
                {
                  "step": "The condition then reads $(4c)^2 + (4c)^2 + (7c)^2 = 9$, so $c^2 = \\dfrac{1}{9}$; with $c = \\dfrac{1}{3}$ this gives $x = \\dfrac{4}{3}$, $y = \\dfrac{4}{3}$ and $z = \\dfrac{7}{3}$.",
                  "reason": "Substituting a value: each letter is replaced in the condition, which gives $81c^2 = 9$; the positive $c$ makes $4x + 4y + 7z$ positive."
                },
                {
                  "step": "These values give $4 \\cdot \\dfrac{4}{3} + 4 \\cdot \\dfrac{4}{3} + 7 \\cdot \\dfrac{7}{3} = 27$.",
                  "reason": "Attaining the bound: the values meet the condition and give the bound."
                },
                {
                  "step": "The greatest value is $27$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 5m$, $m < 2k$ and $k < 9$.",
            "lines": [
              {
                "step": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 5m$, $m < 2k$ and $k < 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Since $k$ is a whole number, $2k \\le 16$.",
                "reason": "Multiplying by a positive number: the whole numbers with $k < 9$ are those up to $8$, and both sides of $k \\le 8$ are multiplied by $2$."
              },
              {
                "step": "Since $m$ is a whole number, $m \\le 15$.",
                "reason": "Transitivity, from arithmetic: $m < 2k$ and $2k \\le 16$ give $m < 16$, and the whole numbers with $m < 16$ are those up to $15$."
              },
              {
                "step": "$5m \\le 75$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $5$."
              },
              {
                "step": "Since $n$ is a whole number, $n \\le 74$.",
                "reason": "Transitivity, from arithmetic: $n < 5m$ and $5m \\le 75$ give $n < 75$, and the whole numbers with $n < 75$ are those up to $74$."
              },
              {
                "step": "The values $n = 74$, $m = 15$ and $k = 8$ meet the three conditions, since $5 \\cdot 15 = 75$ is above $74$, $2 \\cdot 8 = 16$ is above $15$, and $8$ is below $9$.",
                "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
              },
              {
                "step": "The greatest value is $74$.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 2m$, $m < 6k$ and $k < 7$.",
              "form": "Answer as an integer.",
              "answer": "69",
              "lines": [
                {
                  "step": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 2m$, $m < 6k$ and $k < 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Since $k$ is a whole number, $6k \\le 36$.",
                  "reason": "Multiplying by a positive number: the whole numbers with $k < 7$ are those up to $6$, and both sides of $k \\le 6$ are multiplied by $6$."
                },
                {
                  "step": "Since $m$ is a whole number, $m \\le 35$.",
                  "reason": "Transitivity, from arithmetic: $m < 6k$ and $6k \\le 36$ give $m < 36$, and the whole numbers with $m < 36$ are those up to $35$."
                },
                {
                  "step": "$2m \\le 70$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 69$.",
                  "reason": "Transitivity, from arithmetic: $n < 2m$ and $2m \\le 70$ give $n < 70$, and the whole numbers with $n < 70$ are those up to $69$."
                },
                {
                  "step": "The values $n = 69$, $m = 35$ and $k = 6$ meet the three conditions, since $2 \\cdot 35 = 70$ is above $69$, $6 \\cdot 6 = 36$ is above $35$, and $6$ is below $7$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The greatest value is $69$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 7m$, $m < 3k$ and $k < 6$.",
              "form": "Answer as an integer.",
              "answer": "97",
              "lines": [
                {
                  "step": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 7m$, $m < 3k$ and $k < 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Since $k$ is a whole number, $3k \\le 15$.",
                  "reason": "Multiplying by a positive number: the whole numbers with $k < 6$ are those up to $5$, and both sides of $k \\le 5$ are multiplied by $3$."
                },
                {
                  "step": "Since $m$ is a whole number, $m \\le 14$.",
                  "reason": "Transitivity, from arithmetic: $m < 3k$ and $3k \\le 15$ give $m < 15$, and the whole numbers with $m < 15$ are those up to $14$."
                },
                {
                  "step": "$7m \\le 98$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $7$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 97$.",
                  "reason": "Transitivity, from arithmetic: $n < 7m$ and $7m \\le 98$ give $n < 98$, and the whole numbers with $n < 98$ are those up to $97$."
                },
                {
                  "step": "The values $n = 97$, $m = 14$ and $k = 5$ meet the three conditions, since $7 \\cdot 14 = 98$ is above $97$, $3 \\cdot 5 = 15$ is above $14$, and $5$ is below $6$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The greatest value is $97$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 3m$, $m < 5k$ and $k < 12$.",
              "form": "Answer as an integer.",
              "answer": "161",
              "lines": [
                {
                  "step": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 3m$, $m < 5k$ and $k < 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Since $k$ is a whole number, $5k \\le 55$.",
                  "reason": "Multiplying by a positive number: the whole numbers with $k < 12$ are those up to $11$, and both sides of $k \\le 11$ are multiplied by $5$."
                },
                {
                  "step": "Since $m$ is a whole number, $m \\le 54$.",
                  "reason": "Transitivity, from arithmetic: $m < 5k$ and $5k \\le 55$ give $m < 55$, and the whole numbers with $m < 55$ are those up to $54$."
                },
                {
                  "step": "$3m \\le 162$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 161$.",
                  "reason": "Transitivity, from arithmetic: $n < 3m$ and $3m \\le 162$ give $n < 162$, and the whole numbers with $n < 162$ are those up to $161$."
                },
                {
                  "step": "The values $n = 161$, $m = 54$ and $k = 11$ meet the three conditions, since $3 \\cdot 54 = 162$ is above $161$, $5 \\cdot 11 = 55$ is above $54$, and $11$ is below $12$.",
                  "reason": "Attaining the bound: substituting the values meets the conditions and gives the bound."
                },
                {
                  "step": "The greatest value is $161$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t216-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest area, in square metres, of a rectangle with perimeter $20$ metres.",
            "lines": [
              {
                "step": "Find the greatest area, in square metres, of a rectangle with perimeter $20$ metres.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With sides of $x$ and $y$ metres, the perimeter gives $2x + 2y = 20$, so $x + y = 10$, and the area is $xy$.",
                "reason": "Writing a sentence as an equation: the perimeter is twice the sum of the two sides, and the area is their product."
              },
              {
                "step": "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
                "reason": "AM-GM for two numbers: the lengths are positive, by A length is positive."
              },
              {
                "step": "$\\sqrt{xy} \\le 5$",
                "reason": "Substituting a value: $x + y = 10$."
              },
              {
                "step": "$xy \\le 25$",
                "reason": "Powers and roots of positive numbers keep the order: both sides are at least $0$, so their squares keep the order, and $5^2 = 25$."
              },
              {
                "step": "Equality holds only when $x = y$, that is for the square of side $5$ metres.",
                "reason": "Equality in AM-GM: the two numbers are equal."
              },
              {
                "step": "The square of side $5$ metres has perimeter $4 \\cdot 5 = 20$ metres and area $5^2 = 25$ square metres.",
                "reason": "Attaining the bound: the square meets the condition and gives the bound."
              },
              {
                "step": "The greatest area is $25$ square metres.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest area, in square metres, of a rectangular pen closed by a fence of length $28$ metres.",
              "form": "Answer as an integer.",
              "answer": "49",
              "lines": [
                {
                  "step": "Find the greatest area, in square metres, of a rectangular pen closed by a fence of length $28$ metres.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With sides of $x$ and $y$ metres, the perimeter gives $2x + 2y = 28$, so $x + y = 14$, and the area is $xy$.",
                  "reason": "Writing a sentence as an equation: the perimeter is twice the sum of the two sides, and the area is their product."
                },
                {
                  "step": "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
                  "reason": "AM-GM for two numbers: the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt{xy} \\le 7$",
                  "reason": "Substituting a value: $x + y = 14$."
                },
                {
                  "step": "$xy \\le 49$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are at least $0$, so their squares keep the order, and $7^2 = 49$."
                },
                {
                  "step": "Equality holds only when $x = y$, that is for the square of side $7$ metres.",
                  "reason": "Equality in AM-GM: the two numbers are equal."
                },
                {
                  "step": "The square of side $7$ metres has perimeter $4 \\cdot 7 = 28$ metres and area $7^2 = 49$ square metres.",
                  "reason": "Attaining the bound: the square meets the condition and gives the bound."
                },
                {
                  "step": "The greatest area is $49$ square metres.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest area, in square centimetres, of a rectangle bent from a wire of length $44$ centimetres.",
              "form": "Answer as an integer.",
              "answer": "121",
              "lines": [
                {
                  "step": "Find the greatest area, in square centimetres, of a rectangle bent from a wire of length $44$ centimetres.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With sides of $x$ and $y$ centimetres, the perimeter gives $2x + 2y = 44$, so $x + y = 22$, and the area is $xy$.",
                  "reason": "Writing a sentence as an equation: the perimeter is twice the sum of the two sides, and the area is their product."
                },
                {
                  "step": "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
                  "reason": "AM-GM for two numbers: the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt{xy} \\le 11$",
                  "reason": "Substituting a value: $x + y = 22$."
                },
                {
                  "step": "$xy \\le 121$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are at least $0$, so their squares keep the order, and $11^2 = 121$."
                },
                {
                  "step": "Equality holds only when $x = y$, that is for the square of side $11$ centimetres.",
                  "reason": "Equality in AM-GM: the two numbers are equal."
                },
                {
                  "step": "The square of side $11$ centimetres has perimeter $4 \\cdot 11 = 44$ centimetres and area $11^2 = 121$ square centimetres.",
                  "reason": "Attaining the bound: the square meets the condition and gives the bound."
                },
                {
                  "step": "The greatest area is $121$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest area, in square metres, of a rectangular field with perimeter $52$ metres.",
              "form": "Answer as an integer.",
              "answer": "169",
              "lines": [
                {
                  "step": "Find the greatest area, in square metres, of a rectangular field with perimeter $52$ metres.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With sides of $x$ and $y$ metres, the perimeter gives $2x + 2y = 52$, so $x + y = 26$, and the area is $xy$.",
                  "reason": "Writing a sentence as an equation: the perimeter is twice the sum of the two sides, and the area is their product."
                },
                {
                  "step": "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
                  "reason": "AM-GM for two numbers: the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt{xy} \\le 13$",
                  "reason": "Substituting a value: $x + y = 26$."
                },
                {
                  "step": "$xy \\le 169$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are at least $0$, so their squares keep the order, and $13^2 = 169$."
                },
                {
                  "step": "Equality holds only when $x = y$, that is for the square of side $13$ metres.",
                  "reason": "Equality in AM-GM: the two numbers are equal."
                },
                {
                  "step": "The square of side $13$ metres has perimeter $4 \\cdot 13 = 52$ metres and area $13^2 = 169$ square metres.",
                  "reason": "Attaining the bound: the square meets the condition and gives the bound."
                },
                {
                  "step": "The greatest area is $169$ square metres.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least surface area, in square centimetres, of a closed box with volume $8$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
            "lines": [
              {
                "step": "Find the least surface area, in square centimetres, of a closed box with volume $8$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 8$, and the surface area is $2xy + 2yz + 2zx$.",
                "reason": "Writing a sentence as an equation: the volume is the product of the three edges, and each of the three products of two edges is the area of two faces."
              },
              {
                "step": "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
                "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
              },
              {
                "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 4$",
                "reason": "Substituting a value: the product is $(xyz)^2$, and $xyz = 8$; Fractional exponents: $8^2 = 4^3$."
              },
              {
                "step": "$2xy + 2yz + 2zx \\ge 24$",
                "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $6$, and the root is replaced by its value."
              },
              {
                "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
              },
              {
                "step": "The cube of edge $2$ centimetres has volume $2^3 = 8$ cubic centimetres and surface area $6 \\cdot 2^2 = 24$ square centimetres.",
                "reason": "Attaining the bound: the cube meets the condition and gives the bound."
              },
              {
                "step": "The least surface area is $24$ square centimetres.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least surface area, in square centimetres, of a closed tin with volume $27$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
              "form": "Answer as an integer.",
              "answer": "54",
              "lines": [
                {
                  "step": "Find the least surface area, in square centimetres, of a closed tin with volume $27$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 27$, and the surface area is $2xy + 2yz + 2zx$.",
                  "reason": "Writing a sentence as an equation: the volume is the product of the three edges, and each of the three products of two edges is the area of two faces."
                },
                {
                  "step": "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
                  "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 9$",
                  "reason": "Substituting a value: the product is $(xyz)^2$, and $xyz = 27$; Fractional exponents: $27^2 = 9^3$."
                },
                {
                  "step": "$2xy + 2yz + 2zx \\ge 54$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $6$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
                },
                {
                  "step": "The cube of edge $3$ centimetres has volume $3^3 = 27$ cubic centimetres and surface area $6 \\cdot 3^2 = 54$ square centimetres.",
                  "reason": "Attaining the bound: the cube meets the condition and gives the bound."
                },
                {
                  "step": "The least surface area is $54$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least surface area, in square centimetres, of a closed crate with volume $1728$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
              "form": "Answer as an integer.",
              "answer": "864",
              "lines": [
                {
                  "step": "Find the least surface area, in square centimetres, of a closed crate with volume $1728$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 1728$, and the surface area is $2xy + 2yz + 2zx$.",
                  "reason": "Writing a sentence as an equation: the volume is the product of the three edges, and each of the three products of two edges is the area of two faces."
                },
                {
                  "step": "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
                  "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 144$",
                  "reason": "Substituting a value: the product is $(xyz)^2$, and $xyz = 1728$; Fractional exponents: $1728^2 = 144^3$."
                },
                {
                  "step": "$2xy + 2yz + 2zx \\ge 864$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $6$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
                },
                {
                  "step": "The cube of edge $12$ centimetres has volume $12^3 = 1728$ cubic centimetres and surface area $6 \\cdot 12^2 = 864$ square centimetres.",
                  "reason": "Attaining the bound: the cube meets the condition and gives the bound."
                },
                {
                  "step": "The least surface area is $864$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least surface area, in square centimetres, of a closed carton with volume $6859$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
              "form": "Answer as an integer.",
              "answer": "2166",
              "lines": [
                {
                  "step": "Find the least surface area, in square centimetres, of a closed carton with volume $6859$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 6859$, and the surface area is $2xy + 2yz + 2zx$.",
                  "reason": "Writing a sentence as an equation: the volume is the product of the three edges, and each of the three products of two edges is the area of two faces."
                },
                {
                  "step": "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
                  "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 361$",
                  "reason": "Substituting a value: the product is $(xyz)^2$, and $xyz = 6859$; Fractional exponents: $6859^2 = 361^3$."
                },
                {
                  "step": "$2xy + 2yz + 2zx \\ge 2166$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $6$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
                },
                {
                  "step": "The cube of edge $19$ centimetres has volume $19^3 = 6859$ cubic centimetres and surface area $6 \\cdot 19^2 = 2166$ square centimetres.",
                  "reason": "Attaining the bound: the cube meets the condition and gives the bound."
                },
                {
                  "step": "The least surface area is $2166$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least area of sheet, in square centimetres, that makes an open box with volume $32$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
            "lines": [
              {
                "step": "Find the least area of sheet, in square centimetres, that makes an open box with volume $32$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 32$, and the area of sheet is $2xy + 2xz + yz$.",
                "reason": "Writing a sentence as an equation: the volume is the product of the three edges, two sides have area $xy$ each, two have area $xz$ each, and the bottom has area $yz$."
              },
              {
                "step": "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
                "reason": "AM-GM for n numbers: the three numbers $2xy$, $2xz$ and $yz$ are positive, since the lengths are positive, by A length is positive."
              },
              {
                "step": "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 16$",
                "reason": "Substituting a value: the product is $4(xyz)^2$, and $xyz = 32$; Fractional exponents: $4 \\cdot 32^2 = 16^3$."
              },
              {
                "step": "$2xy + 2xz + yz \\ge 48$",
                "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
              },
              {
                "step": "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
                "reason": "Equality in AM-GM: the three numbers are equal, and dividing $2xy = 2xz$ by $2x$ and $2xz = yz$ by $z$ gives $y = z$ and $y = 2x$."
              },
              {
                "step": "The box of height $2$ centimetres on a square bottom of side $4$ centimetres has volume $2 \\cdot 4 \\cdot 4 = 32$ cubic centimetres and uses $2 \\cdot 2 \\cdot 4 + 2 \\cdot 2 \\cdot 4 + 4 \\cdot 4 = 48$ square centimetres of sheet.",
                "reason": "Attaining the bound: this box meets the condition and gives the bound."
              },
              {
                "step": "The least area of sheet is $48$ square centimetres.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least area of sheet, in square centimetres, that makes an open tray with volume $4$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the least area of sheet, in square centimetres, that makes an open tray with volume $4$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 4$, and the area of sheet is $2xy + 2xz + yz$.",
                  "reason": "Writing a sentence as an equation: the volume is the product of the three edges, two sides have area $xy$ each, two have area $xz$ each, and the bottom has area $yz$."
                },
                {
                  "step": "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
                  "reason": "AM-GM for n numbers: the three numbers $2xy$, $2xz$ and $yz$ are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 4$",
                  "reason": "Substituting a value: the product is $4(xyz)^2$, and $xyz = 4$; Fractional exponents: $4 \\cdot 4^2 = 4^3$."
                },
                {
                  "step": "$2xy + 2xz + yz \\ge 12$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $2xy = 2xz$ by $2x$ and $2xz = yz$ by $z$ gives $y = z$ and $y = 2x$."
                },
                {
                  "step": "The box of height $1$ centimetre on a square bottom of side $2$ centimetres has volume $1 \\cdot 2 \\cdot 2 = 4$ cubic centimetres and uses $2 \\cdot 1 \\cdot 2 + 2 \\cdot 1 \\cdot 2 + 2 \\cdot 2 = 12$ square centimetres of sheet.",
                  "reason": "Attaining the bound: this box meets the condition and gives the bound."
                },
                {
                  "step": "The least area of sheet is $12$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least area of sheet, in square centimetres, that makes an open tank with volume $4000$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
              "form": "Answer as an integer.",
              "answer": "1200",
              "lines": [
                {
                  "step": "Find the least area of sheet, in square centimetres, that makes an open tank with volume $4000$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 4000$, and the area of sheet is $2xy + 2xz + yz$.",
                  "reason": "Writing a sentence as an equation: the volume is the product of the three edges, two sides have area $xy$ each, two have area $xz$ each, and the bottom has area $yz$."
                },
                {
                  "step": "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
                  "reason": "AM-GM for n numbers: the three numbers $2xy$, $2xz$ and $yz$ are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 400$",
                  "reason": "Substituting a value: the product is $4(xyz)^2$, and $xyz = 4000$; Fractional exponents: $4 \\cdot 4000^2 = 400^3$."
                },
                {
                  "step": "$2xy + 2xz + yz \\ge 1200$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $2xy = 2xz$ by $2x$ and $2xz = yz$ by $z$ gives $y = z$ and $y = 2x$."
                },
                {
                  "step": "The box of height $10$ centimetres on a square bottom of side $20$ centimetres has volume $10 \\cdot 20 \\cdot 20 = 4000$ cubic centimetres and uses $2 \\cdot 10 \\cdot 20 + 2 \\cdot 10 \\cdot 20 + 20 \\cdot 20 = 1200$ square centimetres of sheet.",
                  "reason": "Attaining the bound: this box meets the condition and gives the bound."
                },
                {
                  "step": "The least area of sheet is $1200$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least area of sheet, in square centimetres, that makes an open bin with volume $256$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
              "form": "Answer as an integer.",
              "answer": "192",
              "lines": [
                {
                  "step": "Find the least area of sheet, in square centimetres, that makes an open bin with volume $256$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 256$, and the area of sheet is $2xy + 2xz + yz$.",
                  "reason": "Writing a sentence as an equation: the volume is the product of the three edges, two sides have area $xy$ each, two have area $xz$ each, and the bottom has area $yz$."
                },
                {
                  "step": "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
                  "reason": "AM-GM for n numbers: the three numbers $2xy$, $2xz$ and $yz$ are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 64$",
                  "reason": "Substituting a value: the product is $4(xyz)^2$, and $xyz = 256$; Fractional exponents: $4 \\cdot 256^2 = 64^3$."
                },
                {
                  "step": "$2xy + 2xz + yz \\ge 192$",
                  "reason": "Multiplying by a positive number: both sides of the third line are multiplied by $3$, and the root is replaced by its value."
                },
                {
                  "step": "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $2xy = 2xz$ by $2x$ and $2xz = yz$ by $z$ gives $y = z$ and $y = 2x$."
                },
                {
                  "step": "The box of height $4$ centimetres on a square bottom of side $8$ centimetres has volume $4 \\cdot 8 \\cdot 8 = 256$ cubic centimetres and uses $2 \\cdot 4 \\cdot 8 + 2 \\cdot 4 \\cdot 8 + 8 \\cdot 8 = 192$ square centimetres of sheet.",
                  "reason": "Attaining the bound: this box meets the condition and gives the bound."
                },
                {
                  "step": "The least area of sheet is $192$ square centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest volume, in cubic centimetres, of a closed box with surface area $150$ square centimetres: a top, a bottom and four sides, all rectangles.",
            "lines": [
              {
                "step": "Find the greatest volume, in cubic centimetres, of a closed box with surface area $150$ square centimetres: a top, a bottom and four sides, all rectangles.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 150$, so $xy + yz + zx = 75$, and the volume is $xyz$.",
                "reason": "Writing a sentence as an equation: each of the three products of two edges is the area of two faces, and the volume is the product of the three edges."
              },
              {
                "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
                "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
              },
              {
                "step": "$\\sqrt[3]{(xyz)^2} \\le 25$",
                "reason": "Substituting a value: the product under the root is $(xyz)^2$, and $xy + yz + zx = 75$."
              },
              {
                "step": "$(xyz)^2 \\le 25^3$",
                "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their cubes keep the order."
              },
              {
                "step": "$xyz \\le 125$",
                "reason": "Powers and roots of positive numbers keep the order: $25^3 = 125^2$, and positive square roots keep the order."
              },
              {
                "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
              },
              {
                "step": "The cube of edge $5$ centimetres has surface area $6 \\cdot 5^2 = 150$ square centimetres and volume $5^3 = 125$ cubic centimetres.",
                "reason": "Attaining the bound: the cube meets the condition and gives the bound."
              },
              {
                "step": "The greatest volume is $125$ cubic centimetres.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest volume, in cubic centimetres, of a closed tin with surface area $294$ square centimetres: a top, a bottom and four sides, all rectangles.",
              "form": "Answer as an integer.",
              "answer": "343",
              "lines": [
                {
                  "step": "Find the greatest volume, in cubic centimetres, of a closed tin with surface area $294$ square centimetres: a top, a bottom and four sides, all rectangles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 294$, so $xy + yz + zx = 147$, and the volume is $xyz$.",
                  "reason": "Writing a sentence as an equation: each of the three products of two edges is the area of two faces, and the volume is the product of the three edges."
                },
                {
                  "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
                  "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{(xyz)^2} \\le 49$",
                  "reason": "Substituting a value: the product under the root is $(xyz)^2$, and $xy + yz + zx = 147$."
                },
                {
                  "step": "$(xyz)^2 \\le 49^3$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their cubes keep the order."
                },
                {
                  "step": "$xyz \\le 343$",
                  "reason": "Powers and roots of positive numbers keep the order: $49^3 = 343^2$, and positive square roots keep the order."
                },
                {
                  "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
                },
                {
                  "step": "The cube of edge $7$ centimetres has surface area $6 \\cdot 7^2 = 294$ square centimetres and volume $7^3 = 343$ cubic centimetres.",
                  "reason": "Attaining the bound: the cube meets the condition and gives the bound."
                },
                {
                  "step": "The greatest volume is $343$ cubic centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest volume, in cubic centimetres, of a closed crate with surface area $1944$ square centimetres: a top, a bottom and four sides, all rectangles.",
              "form": "Answer as an integer.",
              "answer": "5832",
              "lines": [
                {
                  "step": "Find the greatest volume, in cubic centimetres, of a closed crate with surface area $1944$ square centimetres: a top, a bottom and four sides, all rectangles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 1944$, so $xy + yz + zx = 972$, and the volume is $xyz$.",
                  "reason": "Writing a sentence as an equation: each of the three products of two edges is the area of two faces, and the volume is the product of the three edges."
                },
                {
                  "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
                  "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{(xyz)^2} \\le 324$",
                  "reason": "Substituting a value: the product under the root is $(xyz)^2$, and $xy + yz + zx = 972$."
                },
                {
                  "step": "$(xyz)^2 \\le 324^3$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their cubes keep the order."
                },
                {
                  "step": "$xyz \\le 5832$",
                  "reason": "Powers and roots of positive numbers keep the order: $324^3 = 5832^2$, and positive square roots keep the order."
                },
                {
                  "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
                },
                {
                  "step": "The cube of edge $18$ centimetres has surface area $6 \\cdot 18^2 = 1944$ square centimetres and volume $18^3 = 5832$ cubic centimetres.",
                  "reason": "Attaining the bound: the cube meets the condition and gives the bound."
                },
                {
                  "step": "The greatest volume is $5832$ cubic centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest volume, in cubic centimetres, of a closed carton with surface area $1536$ square centimetres: a top, a bottom and four sides, all rectangles.",
              "form": "Answer as an integer.",
              "answer": "4096",
              "lines": [
                {
                  "step": "Find the greatest volume, in cubic centimetres, of a closed carton with surface area $1536$ square centimetres: a top, a bottom and four sides, all rectangles.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 1536$, so $xy + yz + zx = 768$, and the volume is $xyz$.",
                  "reason": "Writing a sentence as an equation: each of the three products of two edges is the area of two faces, and the volume is the product of the three edges."
                },
                {
                  "step": "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
                  "reason": "AM-GM for n numbers: the three areas are positive, since the lengths are positive, by A length is positive."
                },
                {
                  "step": "$\\sqrt[3]{(xyz)^2} \\le 256$",
                  "reason": "Substituting a value: the product under the root is $(xyz)^2$, and $xy + yz + zx = 768$."
                },
                {
                  "step": "$(xyz)^2 \\le 256^3$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their cubes keep the order."
                },
                {
                  "step": "$xyz \\le 4096$",
                  "reason": "Powers and roots of positive numbers keep the order: $256^3 = 4096^2$, and positive square roots keep the order."
                },
                {
                  "step": "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
                  "reason": "Equality in AM-GM: the three numbers are equal, and dividing $xy = yz$ by $y$ and $yz = zx$ by $z$ gives equal edges."
                },
                {
                  "step": "The cube of edge $16$ centimetres has surface area $6 \\cdot 16^2 = 1536$ square centimetres and volume $16^3 = 4096$ cubic centimetres.",
                  "reason": "Attaining the bound: the cube meets the condition and gives the bound."
                },
                {
                  "step": "The greatest volume is $4096$ cubic centimetres.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t216-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $3x + 4y \\le 2z + 6$ and $2z - 7y \\le 5$; the working adds the two conditions.",
            "given": [
              "$(3x + 4y) + (2z + 7y) \\le (2z + 6) + 5$",
              "$3x + 11y + 2z \\le 2z + 11$",
              "$3x + 11y \\le 11$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $3x + 4y \\le 2z + 6$ and $2z - 7y \\le 5$; the working adds the two conditions.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Adding the two conditions gives $(3x + 4y) + (2z - 7y) \\le (2z + 6) + 5$, and collecting like terms gives $3x - 3y + 2z \\le 2z + 11$.",
                "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added; Collecting like terms: the terms in $y$, and the two numbers."
              },
              {
                "step": "Line 1 copies the left side of the second condition, $2z - 7y$, as $2z + 7y$.",
                "reason": "A sign lost: the minus sign in front of $7y$ is dropped."
              },
              {
                "step": "Line 1 written right is $(3x + 4y) + (2z - 7y) \\le (2z + 6) + 5$.",
                "reason": "Adding two inequalities: the two left sides are added with each sign kept; each later line then follows from it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $2x + 3y \\ge 5z - 3$ and $5z - 6y \\ge 8$; the working adds the two conditions.",
              "given": [
                "$(2x + 3y) + (5z - 6y) \\ge (5z - 3) + 8$",
                "$2x + 9y + 5z \\ge 5z + 5$",
                "$2x + 9y \\ge 5$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*x-3*y+5*z >= 5*z+5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $2x + 3y \\ge 5z - 3$ and $5z - 6y \\ge 8$; the working adds the two conditions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding the two conditions gives $(2x + 3y) + (5z - 6y) \\ge (5z - 3) + 8$, and collecting like terms gives $2x - 3y + 5z \\ge 5z + 5$.",
                  "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added; Collecting like terms: the terms in $y$, and the two numbers."
                },
                {
                  "step": "Line 1 agrees with this. Line 2 collects $3y - 6y$ as $9y$.",
                  "reason": "A sign lost: the minus sign in front of $6y$ is dropped, and $3y - 6y$ is $-3y$."
                },
                {
                  "step": "Line 2 written right is $2x - 3y + 5z \\ge 5z + 5$.",
                  "reason": "Collecting like terms: the terms in $y$ and the two numbers are collected with each sign kept; each later line then follows from it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $7x + 2y \\le 2z - 5$ and $2z - 4y \\le 9$; the working adds the two conditions.",
              "given": [
                "$(7x + 2y) + (2z + 4y) \\le (2z - 5) + 9$",
                "$7x + 6y + 2z \\le 2z + 4$",
                "$7x + 6y \\le 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (7*x+2*y)+(2*z-4*y) <= (2*z-5)+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $7x + 2y \\le 2z - 5$ and $2z - 4y \\le 9$; the working adds the two conditions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding the two conditions gives $(7x + 2y) + (2z - 4y) \\le (2z - 5) + 9$, and collecting like terms gives $7x - 2y + 2z \\le 2z + 4$.",
                  "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added; Collecting like terms: the terms in $y$, and the two numbers."
                },
                {
                  "step": "Line 1 copies the left side of the second condition, $2z - 4y$, as $2z + 4y$.",
                  "reason": "A sign lost: the minus sign in front of $4y$ is dropped."
                },
                {
                  "step": "Line 1 written right is $(7x + 2y) + (2z - 4y) \\le (2z - 5) + 9$.",
                  "reason": "Adding two inequalities: the two left sides are added with each sign kept; each later line then follows from it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $5x + 2y \\ge 3z + 12$ and $3z - 5y \\ge -4$; the working adds the two conditions.",
              "given": [
                "$(5x + 2y) + (3z - 5y) \\ge (3z + 12) - 4$",
                "$5x - 3y + 3z \\ge 3z + 16$",
                "$5x - 3y \\ge 16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 5*x-3*y+3*z >= 3*z+8",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $5x + 2y \\ge 3z + 12$ and $3z - 5y \\ge -4$; the working adds the two conditions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding the two conditions gives $(5x + 2y) + (3z - 5y) \\ge (3z + 12) - 4$, and collecting like terms gives $5x - 3y + 3z \\ge 3z + 8$.",
                  "reason": "Adding two inequalities: the two left sides are added, and the two right sides are added; Collecting like terms: the terms in $y$, and the two numbers."
                },
                {
                  "step": "Line 1 agrees with this. Line 2 works out $12 - 4$ on the right as $16$.",
                  "reason": "A sign lost: the minus sign in front of $4$ is dropped, and $12 - 4$ is $8$."
                },
                {
                  "step": "Line 2 written right is $5x - 3y + 3z \\ge 3z + 8$.",
                  "reason": "Collecting like terms: the terms in $y$ and the two numbers are collected with each sign kept; each later line then follows from it."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 116$; the working bounds $5x - 2y$ from above.",
            "given": [
              "$(5x - 2y)^2 \\le (5^2 + (-2)^2)(x^2 + y^2)$",
              "$(5^2 + (-2)^2)(x^2 + y^2) = 9 \\cdot 116$",
              "$(5x - 2y)^2 \\le 9 \\cdot 116$",
              "$5x - 2y \\le 6\\sqrt{29}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 116$; the working bounds $5x - 2y$ from above.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For the first sequence $5$, $-2$ and the second sequence $x$, $y$, the inequality reads $(5x - 2y)^2 \\le (5^2 + (-2)^2)(x^2 + y^2)$, and $5^2 + (-2)^2 = 29$.",
                "reason": "Cauchy-Schwarz Inequality: the squares of each sequence are added, and the sum of the first sequence is never squared."
              },
              {
                "step": "Line 1 agrees with this. Line 2 works out $5^2 + (-2)^2$ as $(5 + (-2))^2 = 9$.",
                "reason": "A power taken term by term over a sum: $(5 + (-2))^2 = 9$, while $5^2 + (-2)^2 = 29$."
              },
              {
                "step": "Line 2 written right is $(5^2 + (-2)^2)(x^2 + y^2) = 29 \\cdot 116$.",
                "reason": "Cauchy-Schwarz Inequality: the squares of the first sequence are added; each later line then follows from it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 232$; the working bounds $7x - 3y$ from above.",
              "given": [
                "$(7x - 3y)^2 \\le (7 + (-3))^2(x^2 + y^2)$",
                "$(7 + (-3))^2(x^2 + y^2) = 16 \\cdot 232$",
                "$(7x - 3y)^2 \\le 16 \\cdot 232$",
                "$7x - 3y \\le 8\\sqrt{58}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (7*x-3*y)^2 <= (7^2+(-3)^2)*(x^2+y^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 232$; the working bounds $7x - 3y$ from above.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For the first sequence $7$, $-3$ and the second sequence $x$, $y$, the inequality reads $(7x - 3y)^2 \\le (7^2 + (-3)^2)(x^2 + y^2)$, and $7^2 + (-3)^2 = 58$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares of each sequence are added, and the sum of the first sequence is never squared."
                },
                {
                  "step": "Line 1 writes $(7 + (-3))^2$ where the inequality has $7^2 + (-3)^2$.",
                  "reason": "A power taken term by term over a sum: $(7 + (-3))^2 = 16$, while $7^2 + (-3)^2 = 58$."
                },
                {
                  "step": "Line 1 written right is $(7x - 3y)^2 \\le (7^2 + (-3)^2)(x^2 + y^2)$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares of the first sequence are added; each later line then follows from it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 272$; the working bounds $4x - y$ from above.",
              "given": [
                "$(4x - y)^2 \\le (4^2 + (-1)^2)(x^2 + y^2)$",
                "$(4^2 + (-1)^2)(x^2 + y^2) = 9 \\cdot 272$",
                "$(4x - y)^2 \\le 9 \\cdot 272$",
                "$4x - y \\le 12\\sqrt{17}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (4^2+(-1)^2)*(x^2+y^2) = 17*272",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 272$; the working bounds $4x - y$ from above.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For the first sequence $4$, $-1$ and the second sequence $x$, $y$, the inequality reads $(4x - y)^2 \\le (4^2 + (-1)^2)(x^2 + y^2)$, and $4^2 + (-1)^2 = 17$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares of each sequence are added, and the sum of the first sequence is never squared."
                },
                {
                  "step": "Line 1 agrees with this. Line 2 works out $4^2 + (-1)^2$ as $(4 + (-1))^2 = 9$.",
                  "reason": "A power taken term by term over a sum: $(4 + (-1))^2 = 9$, while $4^2 + (-1)^2 = 17$."
                },
                {
                  "step": "Line 2 written right is $(4^2 + (-1)^2)(x^2 + y^2) = 17 \\cdot 272$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares of the first sequence are added; each later line then follows from it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 148$; the working bounds $6x - y$ from above.",
              "given": [
                "$(6x - y)^2 \\le (6 + (-1))^2(x^2 + y^2)$",
                "$(6 + (-1))^2(x^2 + y^2) = 25 \\cdot 148$",
                "$(6x - y)^2 \\le 25 \\cdot 148$",
                "$6x - y \\le 10\\sqrt{37}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (6*x-y)^2 <= (6^2+(-1)^2)*(x^2+y^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 148$; the working bounds $6x - y$ from above.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For the first sequence $6$, $-1$ and the second sequence $x$, $y$, the inequality reads $(6x - y)^2 \\le (6^2 + (-1)^2)(x^2 + y^2)$, and $6^2 + (-1)^2 = 37$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares of each sequence are added, and the sum of the first sequence is never squared."
                },
                {
                  "step": "Line 1 writes $(6 + (-1))^2$ where the inequality has $6^2 + (-1)^2$.",
                  "reason": "A power taken term by term over a sum: $(6 + (-1))^2 = 25$, while $6^2 + (-1)^2 = 37$."
                },
                {
                  "step": "Line 1 written right is $(6x - y)^2 \\le (6^2 + (-1)^2)(x^2 + y^2)$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares of the first sequence are added; each later line then follows from it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t216-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with perimeter $40$ metres has one side of $x$ metres and area $z$ square metres.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with perimeter $40$ metres has one side of $x$ metres and area $z$ square metres.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y$ metres for the other side, the perimeter gives $2x + 2y = 40$.",
                "reason": "Writing a sentence as an equation: the perimeter is twice the sum of the two sides."
              },
              {
                "step": "So $y = 20 - x$.",
                "reason": "Solving for a letter in terms of the others: both sides are halved, and $x$ is taken from both sides."
              },
              {
                "step": "The area gives $z = xy$.",
                "reason": "Writing a sentence as an equation: the area is the product of the two sides."
              },
              {
                "step": "$z = x(20 - x)$",
                "reason": "Substituting a value: $y$ is replaced by its expression in $x$, in brackets."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangular pen against a long wall has $30$ metres of fence on its other three sides, the two sides that meet the wall $x$ metres each, and area $z$ square metres.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x*(30-2*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangular pen against a long wall has $30$ metres of fence on its other three sides, the two sides that meet the wall $x$ metres each, and area $z$ square metres.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y$ metres for the side opposite the wall, the fence gives $2x + y = 30$.",
                  "reason": "Writing a sentence as an equation: the fence runs along two sides of $x$ metres and one of $y$ metres."
                },
                {
                  "step": "So $y = 30 - 2x$.",
                  "reason": "Solving for a letter in terms of the others: $2x$ is taken from both sides."
                },
                {
                  "step": "The area gives $z = xy$.",
                  "reason": "Writing a sentence as an equation: the area is the product of the two sides."
                },
                {
                  "step": "$z = x(30 - 2x)$",
                  "reason": "Substituting a value: $y$ is replaced by its expression in $x$, in brackets."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A closed box with a square bottom of side $x$ centimetres has volume $10$ cubic centimetres and surface area $z$ square centimetres.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 2*x^2+40/x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A closed box with a square bottom of side $x$ centimetres has volume $10$ cubic centimetres and surface area $z$ square centimetres.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y$ centimetres for the height, the volume gives $x^2y = 10$.",
                  "reason": "Writing a sentence as an equation: the volume is the area of the bottom times the height."
                },
                {
                  "step": "So $y = \\dfrac{10}{x^2}$.",
                  "reason": "Solving for a letter in terms of the others: both sides are divided by $x^2$."
                },
                {
                  "step": "The area gives $z = 2x^2 + 4xy$.",
                  "reason": "Writing a sentence as an equation: the top and the bottom have area $x^2$ each, and each of the four sides has area $xy$."
                },
                {
                  "step": "$z = 2x^2 + \\dfrac{40}{x}$",
                  "reason": "Substituting a value: $y$ is replaced by its expression in $x$, in brackets, and $4x \\cdot \\dfrac{10}{x^2} = \\dfrac{40}{x}$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: The number $z$ is the sum of $2$ times a positive number $x$ and $3$ times a second positive number, where the product of the two numbers is $24$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 2*x+72/x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: The number $z$ is the sum of $2$ times a positive number $x$ and $3$ times a second positive number, where the product of the two numbers is $24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y$ for the second number, the product gives $xy = 24$.",
                  "reason": "Writing a sentence as an equation: the product of the two numbers is stated."
                },
                {
                  "step": "So $y = \\dfrac{24}{x}$.",
                  "reason": "Solving for a letter in terms of the others: both sides are divided by $x$."
                },
                {
                  "step": "The sum gives $z = 2x + 3y$.",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and each \"times\" is a product."
                },
                {
                  "step": "$z = 2x + \\dfrac{72}{x}$",
                  "reason": "Substituting a value: $y$ is replaced by its expression in $x$, in brackets, and $3 \\cdot \\dfrac{24}{x} = \\dfrac{72}{x}$."
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
