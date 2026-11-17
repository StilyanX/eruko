export default {
  "number": 126,
  "title": "Equations of lines",
  "section": 5,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "228-238"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the equation of the line through $(1, -2)$ with slope $\\dfrac{3}{4}$, in standard form.",
    "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
    "answer": "3*x-4*y = 11",
    "solution": [
      "Find the equation of the line through $(1, -2)$ with slope $\\dfrac{3}{4}$, in standard form.",
      "$y - (-2) = \\dfrac{3}{4}(x - 1)$",
      "$y + 2 = \\dfrac{3}{4}(x - 1)$",
      "$4(y + 2) = 3(x - 1)$",
      "$4y + 8 = 3x - 3$",
      "$-3x + 4y = -11$",
      "$3x - 4y = 11$"
    ]
  },
  "ideas": [
    {
      "name": "Point-slope form",
      "concrete": "Every point $(x, y)$ of the line through $(2, -1)$ with slope $4$, other than $(2, -1)$ itself, has $\\dfrac{y + 1}{x - 2} = 4$, so $y + 1 = 4(x - 2)$; the point $(2, -1)$ satisfies this too, since both sides are then $0$.",
      "general": "For a point $(x_1, y_1)$ and a number $m$, the line through $(x_1, y_1)$ with slope $m$ is the graph of $y - y_1 = m(x - x_1)$, the **point-slope form** of its equation."
    },
    {
      "name": "Standard form $ax + by = c$",
      "concrete": "Multiplying out $y + 1 = 4(x - 2)$ gives $y + 1 = 4x - 8$, and adding $-4x - 1$ to both sides and then multiplying both sides by $-1$ gives $4x - y = 9$.",
      "general": "For whole numbers $a$, $b$ and $c$ with no common factor, $a$ and $b$ not both $0$, the equation $ax + by = c$ of a line is in **standard form** when $a$ is above $0$, or, for a horizontal line, when $a = 0$ and $b$ is above $0$."
    },
    {
      "name": "Slope-intercept form $y=mx+b$",
      "concrete": "Adding $-4x$ to both sides of $4x - y = 9$ gives $-y = -4x + 9$, and multiplying both sides by $-1$ gives $y = 4x - 9$.",
      "general": "For numbers $m$ and $b$, the equation $y = mx + b$ of a line that is not vertical is its **slope-intercept form**: $y$ alone on the left, a term in $x$ and a constant on the right."
    },
    {
      "name": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$",
      "concrete": "On $y = 4x - 9$ the points with $x = 0$ and $x = 1$ are $(0, -9)$ and $(1, -5)$; the slope between them is $\\dfrac{-5 - (-9)}{1 - 0} = 4$, the coefficient of $x$, and the line meets the $y$-axis at $(0, -9)$, the constant term.",
      "general": "For numbers $m$ and $b$, the graph of $y = mx + b$ is the line with slope $m$ that meets the $y$-axis at $(0, b)$.",
      "figure": {
        "file": "equations-of-lines-1.svg",
        "alt": "The line y = 4x − 9 through (0, −9) and (1, −5)."
      }
    }
  ],
  "kinds": [
    {
      "id": "t126-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the equation of the line through $(-7, -8)$ with slope $-3$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(-7, -8)$ with slope $-3$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - (-8) = -3(x - (-7))$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y + 8 = -3(x + 7)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$y + 8 = -3x - 21$",
                "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
              },
              {
                "step": "$3x + y = -29$",
                "reason": "Standard form: adding $3x - 8$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(-3, -8)$ with slope $-5$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x+y = -23",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-3, -8)$ with slope $-5$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-8) = -5(x - (-3))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 8 = -5(x + 3)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 8 = -5x - 15$",
                  "reason": "Multiplying out: $-5$ multiplies each term of the bracket."
                },
                {
                  "step": "$5x + y = -23$",
                  "reason": "Standard form: adding $5x - 8$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-1, -3)$ with slope $-3$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "3*x+y = -6",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-1, -3)$ with slope $-3$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-3) = -3(x - (-1))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 3 = -3(x + 1)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 3 = -3x - 3$",
                  "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
                },
                {
                  "step": "$3x + y = -6$",
                  "reason": "Standard form: adding $3x - 3$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(7, -2)$ with slope $-4$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "4*x+y = 26",
              "lines": [
                {
                  "step": "Find the equation of the line through $(7, -2)$ with slope $-4$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-2) = -4(x - 7)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 2 = -4(x - 7)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 2 = -4x + 28$",
                  "reason": "Multiplying out: $-4$ multiplies each term of the bracket."
                },
                {
                  "step": "$4x + y = 26$",
                  "reason": "Standard form: adding $4x - 2$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(-2, -7)$ with slope $\\dfrac{4}{3}$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(-2, -7)$ with slope $\\dfrac{4}{3}$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - (-7) = \\dfrac{4}{3}(x - (-2))$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y + 7 = \\dfrac{4}{3}(x + 2)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$3(y + 7) = 4(x + 2)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
              },
              {
                "step": "$3y + 21 = 4x + 8$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$-4x + 3y = -13$",
                "reason": "Adding the same number to both sides: adding $-4x - 21$ to both sides leaves the terms in $x$ and $y$ on the left."
              },
              {
                "step": "$4x - 3y = 13$",
                "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(5, -1)$ with slope $\\dfrac{2}{3}$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "2*x-3*y = 13",
              "lines": [
                {
                  "step": "Find the equation of the line through $(5, -1)$ with slope $\\dfrac{2}{3}$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-1) = \\dfrac{2}{3}(x - 5)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 1 = \\dfrac{2}{3}(x - 5)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$3(y + 1) = 2(x - 5)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
                },
                {
                  "step": "$3y + 3 = 2x - 10$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-2x + 3y = -13$",
                  "reason": "Adding the same number to both sides: adding $-2x - 3$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$2x - 3y = 13$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-4, -4)$ with slope $\\dfrac{2}{7}$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "2*x-7*y = 20",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-4, -4)$ with slope $\\dfrac{2}{7}$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-4) = \\dfrac{2}{7}(x - (-4))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 4 = \\dfrac{2}{7}(x + 4)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$7(y + 4) = 2(x + 4)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $7$ clears the fraction."
                },
                {
                  "step": "$7y + 28 = 2x + 8$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-2x + 7y = -20$",
                  "reason": "Adding the same number to both sides: adding $-2x - 28$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$2x - 7y = 20$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-8, -6)$ with slope $\\dfrac{6}{5}$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "6*x-5*y = -18",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-8, -6)$ with slope $\\dfrac{6}{5}$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-6) = \\dfrac{6}{5}(x - (-8))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 6 = \\dfrac{6}{5}(x + 8)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$5(y + 6) = 6(x + 8)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fraction."
                },
                {
                  "step": "$5y + 30 = 6x + 48$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-6x + 5y = 18$",
                  "reason": "Adding the same number to both sides: adding $-6x - 30$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$6x - 5y = -18$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(-6, -8)$ with slope $3$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(-6, -8)$ with slope $3$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - (-8) = 3(x - (-6))$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y + 8 = 3(x + 6)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$y + 8 = 3x + 18$",
                "reason": "Multiplying out: $3$ multiplies each term of the bracket."
              },
              {
                "step": "$-3x + y = 10$",
                "reason": "Adding the same number to both sides: adding $-3x - 8$ to both sides leaves the terms in $x$ and $y$ on the left."
              },
              {
                "step": "$3x - y = -10$",
                "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(-5, -6)$ with slope $5$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x-y = -19",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-5, -6)$ with slope $5$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-6) = 5(x - (-5))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 6 = 5(x + 5)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 6 = 5x + 25$",
                  "reason": "Multiplying out: $5$ multiplies each term of the bracket."
                },
                {
                  "step": "$-5x + y = 19$",
                  "reason": "Adding the same number to both sides: adding $-5x - 6$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$5x - y = -19$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-2, -3)$ with slope $6$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "6*x-y = -9",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-2, -3)$ with slope $6$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-3) = 6(x - (-2))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 3 = 6(x + 2)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 3 = 6x + 12$",
                  "reason": "Multiplying out: $6$ multiplies each term of the bracket."
                },
                {
                  "step": "$-6x + y = 9$",
                  "reason": "Adding the same number to both sides: adding $-6x - 3$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$6x - y = -9$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-1, -6)$ with slope $5$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x-y = 1",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-1, -6)$ with slope $5$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-6) = 5(x - (-1))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 6 = 5(x + 1)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 6 = 5x + 5$",
                  "reason": "Multiplying out: $5$ multiplies each term of the bracket."
                },
                {
                  "step": "$-5x + y = -1$",
                  "reason": "Adding the same number to both sides: adding $-5x - 6$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$5x - y = 1$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(8, -7)$ with slope $-\\dfrac{3}{2}$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(8, -7)$ with slope $-\\dfrac{3}{2}$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - (-7) = -\\dfrac{3}{2}(x - 8)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y + 7 = -\\dfrac{3}{2}(x - 8)$",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              },
              {
                "step": "$2(y + 7) = -3(x - 8)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
              },
              {
                "step": "$2y + 14 = -3x + 24$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$3x + 2y = 10$",
                "reason": "Standard form: adding $3x - 14$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(-7, -3)$ with slope $-\\dfrac{4}{5}$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "4*x+5*y = -43",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-7, -3)$ with slope $-\\dfrac{4}{5}$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-3) = -\\dfrac{4}{5}(x - (-7))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 3 = -\\dfrac{4}{5}(x + 7)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$5(y + 3) = -4(x + 7)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fraction."
                },
                {
                  "step": "$5y + 15 = -4x - 28$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$4x + 5y = -43$",
                  "reason": "Standard form: adding $4x - 15$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-5, -7)$ with slope $-\\dfrac{3}{7}$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "3*x+7*y = -64",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-5, -7)$ with slope $-\\dfrac{3}{7}$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-7) = -\\dfrac{3}{7}(x - (-5))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 7 = -\\dfrac{3}{7}(x + 5)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$7(y + 7) = -3(x + 5)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $7$ clears the fraction."
                },
                {
                  "step": "$7y + 49 = -3x - 15$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$3x + 7y = -64$",
                  "reason": "Standard form: adding $3x - 49$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-8, -3)$ with slope $-\\dfrac{7}{3}$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "7*x+3*y = -65",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-8, -3)$ with slope $-\\dfrac{7}{3}$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - (-3) = -\\dfrac{7}{3}(x - (-8))$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y + 3 = -\\dfrac{7}{3}(x + 8)$",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                },
                {
                  "step": "$3(y + 3) = -7(x + 8)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
                },
                {
                  "step": "$3y + 9 = -7x - 56$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$7x + 3y = -65$",
                  "reason": "Standard form: adding $7x - 9$ to both sides leaves the terms in $x$ and $y$ on the left, the coefficient of $x$ above $0$, and no common factor."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t126-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the equation of the line through $(6, 2)$ and $(9, -7)$, in slope-intercept form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(6, 2)$ and $(9, -7)$, in slope-intercept form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m = \\dfrac{-7 - 2}{9 - 6}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{-9}{3}$",
                "reason": "Subtraction as addition: each difference is worked out."
              },
              {
                "step": "$m = -3$",
                "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
              },
              {
                "step": "$y - 2 = -3(x - 6)$",
                "reason": "Point-slope form: the line through the first point with slope $m$."
              },
              {
                "step": "$y - 2 = -3x + 18$",
                "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
              },
              {
                "step": "$y = -3x + 20$",
                "reason": "Slope-intercept form: adding $2$ to both sides leaves $y$ alone, as in $y = mx + b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(2, 3)$ and $(10, -1)$, in slope-intercept form.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -1/2*x+4",
              "lines": [
                {
                  "step": "Find the equation of the line through $(2, 3)$ and $(10, -1)$, in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-1 - 3}{10 - 2}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-4}{8}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -\\dfrac{1}{2}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 3 = -\\dfrac{1}{2}(x - 2)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$y - 3 = -\\dfrac{1}{2}x + 1$",
                  "reason": "Multiplying out: $-\\dfrac{1}{2}$ multiplies each term of the bracket."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}x + 4$",
                  "reason": "Slope-intercept form: adding $3$ to both sides leaves $y$ alone, as in $y = mx + b$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(3, 6)$ and $(6, -3)$, in slope-intercept form.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -3*x+15",
              "lines": [
                {
                  "step": "Find the equation of the line through $(3, 6)$ and $(6, -3)$, in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-3 - 6}{6 - 3}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-9}{3}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -3$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 6 = -3(x - 3)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$y - 6 = -3x + 9$",
                  "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
                },
                {
                  "step": "$y = -3x + 15$",
                  "reason": "Slope-intercept form: adding $6$ to both sides leaves $y$ alone, as in $y = mx + b$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(1, 2)$ and $(3, -8)$, in slope-intercept form.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -5*x+7",
              "lines": [
                {
                  "step": "Find the equation of the line through $(1, 2)$ and $(3, -8)$, in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-8 - 2}{3 - 1}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-10}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -5$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 2 = -5(x - 1)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$y - 2 = -5x + 5$",
                  "reason": "Multiplying out: $-5$ multiplies each term of the bracket."
                },
                {
                  "step": "$y = -5x + 7$",
                  "reason": "Slope-intercept form: adding $2$ to both sides leaves $y$ alone, as in $y = mx + b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(2, -6)$ and $(2, -7)$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(2, -6)$ and $(2, -7)$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x_2 - x_1 = 2 - 2 = 0$",
                "reason": "Subtraction as addition: the two points have the same $x$-coordinate, so their difference is $0$."
              },
              {
                "step": "The slope is undefined, so the line is vertical.",
                "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $x$-coordinate is vertical."
              },
              {
                "step": "$x = 2$",
                "reason": "Vertical line $x = c$: every point of the vertical line has $x$-coordinate $2$; in standard form the coefficient of $y$ is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(-7, -4)$ and $(-7, -7)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "x = -7",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-7, -4)$ and $(-7, -7)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_2 - x_1 = -7 - (-7) = 0$",
                  "reason": "Subtraction as addition: the two points have the same $x$-coordinate, so their difference is $0$."
                },
                {
                  "step": "The slope is undefined, so the line is vertical.",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $x$-coordinate is vertical."
                },
                {
                  "step": "$x = -7$",
                  "reason": "Vertical line $x = c$: every point of the vertical line has $x$-coordinate $-7$; in standard form the coefficient of $y$ is $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-9, 5)$ and $(-9, -4)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "x = -9",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-9, 5)$ and $(-9, -4)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_2 - x_1 = -9 - (-9) = 0$",
                  "reason": "Subtraction as addition: the two points have the same $x$-coordinate, so their difference is $0$."
                },
                {
                  "step": "The slope is undefined, so the line is vertical.",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $x$-coordinate is vertical."
                },
                {
                  "step": "$x = -9$",
                  "reason": "Vertical line $x = c$: every point of the vertical line has $x$-coordinate $-9$; in standard form the coefficient of $y$ is $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-8, -1)$ and $(-8, -8)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "x = -8",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-8, -1)$ and $(-8, -8)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_2 - x_1 = -8 - (-8) = 0$",
                  "reason": "Subtraction as addition: the two points have the same $x$-coordinate, so their difference is $0$."
                },
                {
                  "step": "The slope is undefined, so the line is vertical.",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $x$-coordinate is vertical."
                },
                {
                  "step": "$x = -8$",
                  "reason": "Vertical line $x = c$: every point of the vertical line has $x$-coordinate $-8$; in standard form the coefficient of $y$ is $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(-3, 4)$ and $(7, 4)$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(-3, 4)$ and $(7, 4)$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y_2 - y_1 = 4 - 4 = 0$",
                "reason": "Subtraction as addition: the two points have the same $y$-coordinate, so their difference is $0$."
              },
              {
                "step": "The slope is $0$, so the line is horizontal.",
                "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $y$-coordinate is horizontal."
              },
              {
                "step": "$y = 4$",
                "reason": "Horizontal line $y = c$: every point of the horizontal line has $y$-coordinate $4$; in standard form the coefficient of $x$ is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(-3, -9)$ and $(7, -9)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "y = -9",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-3, -9)$ and $(7, -9)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y_2 - y_1 = -9 - (-9) = 0$",
                  "reason": "Subtraction as addition: the two points have the same $y$-coordinate, so their difference is $0$."
                },
                {
                  "step": "The slope is $0$, so the line is horizontal.",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $y$-coordinate is horizontal."
                },
                {
                  "step": "$y = -9$",
                  "reason": "Horizontal line $y = c$: every point of the horizontal line has $y$-coordinate $-9$; in standard form the coefficient of $x$ is $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(1, 5)$ and $(-6, 5)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "y = 5",
              "lines": [
                {
                  "step": "Find the equation of the line through $(1, 5)$ and $(-6, 5)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y_2 - y_1 = 5 - 5 = 0$",
                  "reason": "Subtraction as addition: the two points have the same $y$-coordinate, so their difference is $0$."
                },
                {
                  "step": "The slope is $0$, so the line is horizontal.",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $y$-coordinate is horizontal."
                },
                {
                  "step": "$y = 5$",
                  "reason": "Horizontal line $y = c$: every point of the horizontal line has $y$-coordinate $5$; in standard form the coefficient of $x$ is $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(6, -2)$ and $(-7, -2)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "y = -2",
              "lines": [
                {
                  "step": "Find the equation of the line through $(6, -2)$ and $(-7, -2)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y_2 - y_1 = -2 - (-2) = 0$",
                  "reason": "Subtraction as addition: the two points have the same $y$-coordinate, so their difference is $0$."
                },
                {
                  "step": "The slope is $0$, so the line is horizontal.",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $y$-coordinate is horizontal."
                },
                {
                  "step": "$y = -2$",
                  "reason": "Horizontal line $y = c$: every point of the horizontal line has $y$-coordinate $-2$; in standard form the coefficient of $x$ is $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(4, 6)$ and $(8, 16)$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(4, 6)$ and $(8, 16)$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m = \\dfrac{16 - 6}{8 - 4}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{10}{4}$",
                "reason": "Subtraction as addition: each difference is worked out."
              },
              {
                "step": "$m = \\dfrac{5}{2}$",
                "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
              },
              {
                "step": "$y - 6 = \\dfrac{5}{2}(x - 4)$",
                "reason": "Point-slope form: the line through the first point with slope $m$."
              },
              {
                "step": "$2(y - 6) = 5(x - 4)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
              },
              {
                "step": "$2y - 12 = 5x - 20$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "$-5x + 2y = -8$",
                "reason": "Adding the same number to both sides: adding $-5x + 12$ to both sides leaves the terms in $x$ and $y$ on the left."
              },
              {
                "step": "$5x - 2y = 8$",
                "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(1, 4)$ and $(11, 12)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "4*x-5*y = -16",
              "lines": [
                {
                  "step": "Find the equation of the line through $(1, 4)$ and $(11, 12)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{12 - 4}{11 - 1}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{8}{10}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = \\dfrac{4}{5}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 4 = \\dfrac{4}{5}(x - 1)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$5(y - 4) = 4(x - 1)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fraction."
                },
                {
                  "step": "$5y - 20 = 4x - 4$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-4x + 5y = 16$",
                  "reason": "Adding the same number to both sides: adding $-4x + 20$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$4x - 5y = -16$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(5, 1)$ and $(11, 16)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x-2*y = 23",
              "lines": [
                {
                  "step": "Find the equation of the line through $(5, 1)$ and $(11, 16)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{16 - 1}{11 - 5}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{15}{6}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = \\dfrac{5}{2}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 1 = \\dfrac{5}{2}(x - 5)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$2(y - 1) = 5(x - 5)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
                },
                {
                  "step": "$2y - 2 = 5x - 25$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-5x + 2y = -23$",
                  "reason": "Adding the same number to both sides: adding $-5x + 2$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$5x - 2y = 23$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(8, 8)$ and $(14, 12)$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "2*x-3*y = -8",
              "lines": [
                {
                  "step": "Find the equation of the line through $(8, 8)$ and $(14, 12)$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{12 - 8}{14 - 8}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{4}{6}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = \\dfrac{2}{3}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 8 = \\dfrac{2}{3}(x - 8)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$3(y - 8) = 2(x - 8)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
                },
                {
                  "step": "$3y - 24 = 2x - 16$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "$-2x + 3y = 8$",
                  "reason": "Adding the same number to both sides: adding $-2x + 24$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$2x - 3y = -8$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t126-k3",
      "forms": [
        {
          "example": {
            "problem": "Rearrange $9x - 4y = -13$ into slope-intercept form.",
            "lines": [
              {
                "step": "Rearrange $9x - 4y = -13$ into slope-intercept form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4y = -9x - 13$",
                "reason": "Adding the same number to both sides: adding $-9x$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = \\dfrac{9}{4}x + \\dfrac{13}{4}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ divides each term on the right, as in $y = mx + b$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Rearrange $4x + 6y = 5$ into slope-intercept form.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -2/3*x+5/6",
              "lines": [
                {
                  "step": "Rearrange $4x + 6y = 5$ into slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6y = -4x + 5$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{2}{3}x + \\dfrac{5}{6}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ divides each term on the right, as in $y = mx + b$."
                }
              ]
            },
            {
              "prompt": "Rearrange $3x + 4y = 8$ into slope-intercept form.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -3/4*x+2",
              "lines": [
                {
                  "step": "Rearrange $3x + 4y = 8$ into slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4y = -3x + 8$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{3}{4}x + 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ divides each term on the right, as in $y = mx + b$."
                }
              ]
            },
            {
              "prompt": "Rearrange $7x + 2y = -7$ into slope-intercept form.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -7/2*x-7/2",
              "lines": [
                {
                  "step": "Rearrange $7x + 2y = -7$ into slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y = -7x - 7$",
                  "reason": "Adding the same number to both sides: adding $-7x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{7}{2}x - \\dfrac{7}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ divides each term on the right, as in $y = mx + b$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Rearrange $y = \\dfrac{5}{2}x - 2$ into standard form.",
            "lines": [
              {
                "step": "Rearrange $y = \\dfrac{5}{2}x - 2$ into standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2y = 5x - 4$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fractions."
              },
              {
                "step": "$-5x + 2y = -4$",
                "reason": "Adding the same number to both sides: adding $-5x$ to both sides leaves the terms in $x$ and $y$ on the left."
              },
              {
                "step": "$5x - 2y = 4$",
                "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Rearrange $y = \\dfrac{8}{3}x + \\dfrac{17}{3}$ into standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "8*x-3*y = -17",
              "lines": [
                {
                  "step": "Rearrange $y = \\dfrac{8}{3}x + \\dfrac{17}{3}$ into standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3y = 8x + 17$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fractions."
                },
                {
                  "step": "$-8x + 3y = 17$",
                  "reason": "Adding the same number to both sides: adding $-8x$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$8x - 3y = -17$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Rearrange $y = \\dfrac{1}{5}x + \\dfrac{2}{5}$ into standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "x-5*y = -2",
              "lines": [
                {
                  "step": "Rearrange $y = \\dfrac{1}{5}x + \\dfrac{2}{5}$ into standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5y = x + 2$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fractions."
                },
                {
                  "step": "$-x + 5y = 2$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$x - 5y = -2$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            },
            {
              "prompt": "Rearrange $y = \\dfrac{3}{4}x + \\dfrac{1}{2}$ into standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "3*x-4*y = -2",
              "lines": [
                {
                  "step": "Rearrange $y = \\dfrac{3}{4}x + \\dfrac{1}{2}$ into standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4y = 3x + 2$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ clears the fractions."
                },
                {
                  "step": "$-3x + 4y = 2$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides leaves the terms in $x$ and $y$ on the left."
                },
                {
                  "step": "$3x - 4y = -2$",
                  "reason": "Standard form: multiplying both sides by $-1$ makes the coefficient of $x$ above $0$, and the three whole numbers have no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the slope of the line $x + 3y = -14$ by writing it in slope-intercept form.",
            "lines": [
              {
                "step": "Find the slope of the line $x + 3y = -14$ by writing it in slope-intercept form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3y = -x - 14$",
                "reason": "Adding the same number to both sides: adding $-x$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = -\\dfrac{1}{3}x - \\dfrac{14}{3}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ divides each term on the right."
              },
              {
                "step": "$m = -\\dfrac{1}{3}$",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the slope of the line $9x + 7y = -23$ by writing it in slope-intercept form.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-9/7",
              "lines": [
                {
                  "step": "Find the slope of the line $9x + 7y = -23$ by writing it in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7y = -9x - 23$",
                  "reason": "Adding the same number to both sides: adding $-9x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{9}{7}x - \\dfrac{23}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ divides each term on the right."
                },
                {
                  "step": "$m = -\\dfrac{9}{7}$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope."
                }
              ]
            },
            {
              "prompt": "Find the slope of the line $8x + 7y = 10$ by writing it in slope-intercept form.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-8/7",
              "lines": [
                {
                  "step": "Find the slope of the line $8x + 7y = 10$ by writing it in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7y = -8x + 10$",
                  "reason": "Adding the same number to both sides: adding $-8x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{8}{7}x + \\dfrac{10}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ divides each term on the right."
                },
                {
                  "step": "$m = -\\dfrac{8}{7}$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope."
                }
              ]
            },
            {
              "prompt": "Find the slope of the line $5x - 2y = -18$ by writing it in slope-intercept form.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/2",
              "lines": [
                {
                  "step": "Find the slope of the line $5x - 2y = -18$ by writing it in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2y = -5x - 18$",
                  "reason": "Adding the same number to both sides: adding $-5x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{5}{2}x + 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ divides each term on the right."
                },
                {
                  "step": "$m = \\dfrac{5}{2}$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $y$-intercept of the line $7x + 8y = -11$ by writing it in slope-intercept form.",
            "lines": [
              {
                "step": "Find the $y$-intercept of the line $7x + 8y = -11$ by writing it in slope-intercept form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$8y = -7x - 11$",
                "reason": "Adding the same number to both sides: adding $-7x$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = -\\dfrac{7}{8}x - \\dfrac{11}{8}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ divides each term on the right."
              },
              {
                "step": "$\\left(0, -\\dfrac{11}{8}\\right)$",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term gives the $y$-intercept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $y$-intercept of the line $2x + 6y = -1$ by writing it in slope-intercept form.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -1/6)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the line $2x + 6y = -1$ by writing it in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6y = -2x - 1$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{1}{3}x - \\dfrac{1}{6}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ divides each term on the right."
                },
                {
                  "step": "$\\left(0, -\\dfrac{1}{6}\\right)$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term gives the $y$-intercept."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the line $4x - 7y = -18$ by writing it in slope-intercept form.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 18/7)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the line $4x - 7y = -18$ by writing it in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7y = -4x - 18$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{4}{7}x + \\dfrac{18}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-7$ divides each term on the right."
                },
                {
                  "step": "$\\left(0, \\dfrac{18}{7}\\right)$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term gives the $y$-intercept."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the line $5x - 7y = 9$ by writing it in slope-intercept form.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -9/7)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the line $5x - 7y = 9$ by writing it in slope-intercept form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7y = -5x + 9$",
                  "reason": "Adding the same number to both sides: adding $-5x$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{5}{7}x - \\dfrac{9}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-7$ divides each term on the right."
                },
                {
                  "step": "$\\left(0, -\\dfrac{9}{7}\\right)$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term gives the $y$-intercept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t126-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the cost in dollars of printing 46 posters, if the cost $y$ in dollars of printing $x$ posters follows a straight-line rule, with 4 posters costing 91 dollars and 60 posters costing 131 dollars.",
            "lines": [
              {
                "step": "Find the cost in dollars of printing 46 posters, if the cost $y$ in dollars of printing $x$ posters follows a straight-line rule, with 4 posters costing 91 dollars and 60 posters costing 131 dollars.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The data pairs are the points $(4, 91)$ and $(60, 131)$ of the line.",
                "reason": "Ordered pair: each pair of values is a point $(x, y)$, and the straight-line rule is a line through both points."
              },
              {
                "step": "$m = \\dfrac{131 - 91}{60 - 4}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{40}{56}$",
                "reason": "Subtraction as addition: each difference is worked out."
              },
              {
                "step": "$m = \\dfrac{5}{7}$",
                "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
              },
              {
                "step": "$y - 91 = \\dfrac{5}{7}(x - 4)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y - 91 = \\dfrac{5}{7}(46 - 4)$",
                "reason": "Substituting a value: $x$ is replaced by $46$, in brackets."
              },
              {
                "step": "$y - 91 = 30$",
                "reason": "Order of operations: the bracket is worked out first, then the product."
              },
              {
                "step": "$y = 121$",
                "reason": "Adding the same number to both sides: adding $91$ to both sides leaves $y$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the length in millimetres of a spring with 26 grams hung on it, if its length $y$ in millimetres with $x$ grams hung on it follows a straight-line rule, with a length of 85 mm at 17 grams and 345 mm at 32 grams.",
              "form": "Answer as an integer.",
              "answer": "241",
              "lines": [
                {
                  "step": "Find the length in millimetres of a spring with 26 grams hung on it, if its length $y$ in millimetres with $x$ grams hung on it follows a straight-line rule, with a length of 85 mm at 17 grams and 345 mm at 32 grams.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The data pairs are the points $(17, 85)$ and $(32, 345)$ of the line.",
                  "reason": "Ordered pair: each pair of values is a point $(x, y)$, and the straight-line rule is a line through both points."
                },
                {
                  "step": "$m = \\dfrac{345 - 85}{32 - 17}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{260}{15}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = \\dfrac{52}{3}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 85 = \\dfrac{52}{3}(x - 17)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 85 = \\dfrac{52}{3}(26 - 17)$",
                  "reason": "Substituting a value: $x$ is replaced by $26$, in brackets."
                },
                {
                  "step": "$y - 85 = 156$",
                  "reason": "Order of operations: the bracket is worked out first, then the product."
                },
                {
                  "step": "$y = 241$",
                  "reason": "Adding the same number to both sides: adding $85$ to both sides leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find the height in millimetres of a candle 32 minutes after it is lit, if its height $y$ in millimetres after $x$ minutes follows a straight-line rule, with a height of 172 mm after 14 minutes and 81 mm after 53 minutes.",
              "form": "Answer as an integer.",
              "answer": "130",
              "lines": [
                {
                  "step": "Find the height in millimetres of a candle 32 minutes after it is lit, if its height $y$ in millimetres after $x$ minutes follows a straight-line rule, with a height of 172 mm after 14 minutes and 81 mm after 53 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The data pairs are the points $(14, 172)$ and $(53, 81)$ of the line.",
                  "reason": "Ordered pair: each pair of values is a point $(x, y)$, and the straight-line rule is a line through both points."
                },
                {
                  "step": "$m = \\dfrac{81 - 172}{53 - 14}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-91}{39}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -\\dfrac{7}{3}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 172 = -\\dfrac{7}{3}(x - 14)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 172 = -\\dfrac{7}{3}(32 - 14)$",
                  "reason": "Substituting a value: $x$ is replaced by $32$, in brackets."
                },
                {
                  "step": "$y - 172 = -42$",
                  "reason": "Order of operations: the bracket is worked out first, then the product."
                },
                {
                  "step": "$y = 130$",
                  "reason": "Adding the same number to both sides: adding $172$ to both sides leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find the number of litres in a tank 50 minutes after a tap is opened, if the number of litres $y$ after $x$ minutes follows a straight-line rule, with 141 litres after 5 minutes and 387 litres after 35 minutes.",
              "form": "Answer as an integer.",
              "answer": "510",
              "lines": [
                {
                  "step": "Find the number of litres in a tank 50 minutes after a tap is opened, if the number of litres $y$ after $x$ minutes follows a straight-line rule, with 141 litres after 5 minutes and 387 litres after 35 minutes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The data pairs are the points $(5, 141)$ and $(35, 387)$ of the line.",
                  "reason": "Ordered pair: each pair of values is a point $(x, y)$, and the straight-line rule is a line through both points."
                },
                {
                  "step": "$m = \\dfrac{387 - 141}{35 - 5}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{246}{30}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = \\dfrac{41}{5}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 141 = \\dfrac{41}{5}(x - 5)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 141 = \\dfrac{41}{5}(50 - 5)$",
                  "reason": "Substituting a value: $x$ is replaced by $50$, in brackets."
                },
                {
                  "step": "$y - 141 = 369$",
                  "reason": "Order of operations: the bracket is worked out first, then the product."
                },
                {
                  "step": "$y = 510$",
                  "reason": "Adding the same number to both sides: adding $141$ to both sides leaves $y$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t126-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the $y$-intercept of the line through $(8, 4)$ with slope $2$.",
            "lines": [
              {
                "step": "Find the $y$-intercept of the line through $(8, 4)$ with slope $2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - 4 = 2(x - 8)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y - 4 = 2x - 16$",
                "reason": "Multiplying out: $2$ multiplies each term of the bracket."
              },
              {
                "step": "$y = 2x - 12$",
                "reason": "Adding the same number to both sides: adding $4$ to both sides leaves $y$ alone."
              },
              {
                "step": "$\\left(0, -12\\right)$",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term $-12$ gives the $y$-intercept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $y$-intercept of the line through $(6, 8)$ with slope $-3$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 26)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the line through $(6, 8)$ with slope $-3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 8 = -3(x - 6)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 8 = -3x + 18$",
                  "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
                },
                {
                  "step": "$y = -3x + 26$",
                  "reason": "Adding the same number to both sides: adding $8$ to both sides leaves $y$ alone."
                },
                {
                  "step": "$\\left(0, 26\\right)$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term $26$ gives the $y$-intercept."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the line through $(3, 7)$ with slope $4$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -5)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the line through $(3, 7)$ with slope $4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 7 = 4(x - 3)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 7 = 4x - 12$",
                  "reason": "Multiplying out: $4$ multiplies each term of the bracket."
                },
                {
                  "step": "$y = 4x - 5$",
                  "reason": "Adding the same number to both sides: adding $7$ to both sides leaves $y$ alone."
                },
                {
                  "step": "$\\left(0, -5\\right)$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term $-5$ gives the $y$-intercept."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the line through $(2, 2)$ with slope $-3$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 8)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the line through $(2, 2)$ with slope $-3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 2 = -3(x - 2)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 2 = -3x + 6$",
                  "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
                },
                {
                  "step": "$y = -3x + 8$",
                  "reason": "Adding the same number to both sides: adding $2$ to both sides leaves $y$ alone."
                },
                {
                  "step": "$\\left(0, 8\\right)$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the constant term $8$ gives the $y$-intercept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $x$-intercept of the line through $(8, 3)$ with slope $5$.",
            "lines": [
              {
                "step": "Find the $x$-intercept of the line through $(8, 3)$ with slope $5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y - 3 = 5(x - 8)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$0 - 3 = 5(x - 8)$",
                "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
              },
              {
                "step": "$-3 = 5(x - 8)$",
                "reason": "Subtraction as addition: $0$ less a number is its opposite."
              },
              {
                "step": "$5(x - 8) = -3$",
                "reason": "Symmetric property: the two sides of an equation may change places."
              },
              {
                "step": "$5x - 40 = -3$",
                "reason": "Multiplying out: $5$ multiplies each term of the bracket."
              },
              {
                "step": "$5x = 37$",
                "reason": "Adding the same number to both sides: adding $40$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{37}{5}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
              },
              {
                "step": "$\\left(\\dfrac{37}{5}, 0\\right)$",
                "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $x$-intercept of the line through $(7, 3)$ with slope $5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(32/5, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(7, 3)$ with slope $5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 3 = 5(x - 7)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$0 - 3 = 5(x - 7)$",
                  "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
                },
                {
                  "step": "$-3 = 5(x - 7)$",
                  "reason": "Subtraction as addition: $0$ less a number is its opposite."
                },
                {
                  "step": "$5(x - 7) = -3$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$5x - 35 = -3$",
                  "reason": "Multiplying out: $5$ multiplies each term of the bracket."
                },
                {
                  "step": "$5x = 32$",
                  "reason": "Adding the same number to both sides: adding $35$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{32}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{32}{5}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the line through $(4, 5)$ with slope $-2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(13/2, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(4, 5)$ with slope $-2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 5 = -2(x - 4)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$0 - 5 = -2(x - 4)$",
                  "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
                },
                {
                  "step": "$-5 = -2(x - 4)$",
                  "reason": "Subtraction as addition: $0$ less a number is its opposite."
                },
                {
                  "step": "$-2(x - 4) = -5$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$-2x + 8 = -5$",
                  "reason": "Multiplying out: $-2$ multiplies each term of the bracket."
                },
                {
                  "step": "$-2x = -13$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{13}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{13}{2}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the line through $(7, 9)$ with slope $6$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(11/2, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(7, 9)$ with slope $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 9 = 6(x - 7)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$0 - 9 = 6(x - 7)$",
                  "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
                },
                {
                  "step": "$-9 = 6(x - 7)$",
                  "reason": "Subtraction as addition: $0$ less a number is its opposite."
                },
                {
                  "step": "$6(x - 7) = -9$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$6x - 42 = -9$",
                  "reason": "Multiplying out: $6$ multiplies each term of the bracket."
                },
                {
                  "step": "$6x = 33$",
                  "reason": "Adding the same number to both sides: adding $42$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{11}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{11}{2}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $x$-intercept of the line through $(5, 7)$ and $(7, -5)$.",
            "lines": [
              {
                "step": "Find the $x$-intercept of the line through $(5, 7)$ and $(7, -5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m = \\dfrac{-5 - 7}{7 - 5}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{-12}{2}$",
                "reason": "Subtraction as addition: each difference is worked out."
              },
              {
                "step": "$m = -6$",
                "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
              },
              {
                "step": "$y - 7 = -6(x - 5)$",
                "reason": "Point-slope form: the line through the first point with slope $m$."
              },
              {
                "step": "$0 - 7 = -6(x - 5)$",
                "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
              },
              {
                "step": "$-7 = -6(x - 5)$",
                "reason": "Subtraction as addition: $0$ less a number is its opposite."
              },
              {
                "step": "$-6(x - 5) = -7$",
                "reason": "Symmetric property: the two sides of an equation may change places."
              },
              {
                "step": "$-6x + 30 = -7$",
                "reason": "Multiplying out: $-6$ multiplies each term of the bracket."
              },
              {
                "step": "$-6x = -37$",
                "reason": "Adding the same number to both sides: adding $-30$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{37}{6}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-6$ leaves $x$ alone."
              },
              {
                "step": "$\\left(\\dfrac{37}{6}, 0\\right)$",
                "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $x$-intercept of the line through $(4, 4)$ and $(6, 10)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(8/3, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(4, 4)$ and $(6, 10)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{10 - 4}{6 - 4}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{6}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = 3$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 4 = 3(x - 4)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$0 - 4 = 3(x - 4)$",
                  "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
                },
                {
                  "step": "$-4 = 3(x - 4)$",
                  "reason": "Subtraction as addition: $0$ less a number is its opposite."
                },
                {
                  "step": "$3(x - 4) = -4$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$3x - 12 = -4$",
                  "reason": "Multiplying out: $3$ multiplies each term of the bracket."
                },
                {
                  "step": "$3x = 8$",
                  "reason": "Adding the same number to both sides: adding $12$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{8}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{8}{3}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the line through $(1, 6)$ and $(3, 14)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1/2, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(1, 6)$ and $(3, 14)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{14 - 6}{3 - 1}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{8}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = 4$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 6 = 4(x - 1)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$0 - 6 = 4(x - 1)$",
                  "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
                },
                {
                  "step": "$-6 = 4(x - 1)$",
                  "reason": "Subtraction as addition: $0$ less a number is its opposite."
                },
                {
                  "step": "$4(x - 1) = -6$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$4x - 4 = -6$",
                  "reason": "Multiplying out: $4$ multiplies each term of the bracket."
                },
                {
                  "step": "$4x = -2$",
                  "reason": "Adding the same number to both sides: adding $4$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "$\\left(-\\dfrac{1}{2}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the line through $(4, 8)$ and $(6, -12)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(24/5, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(4, 8)$ and $(6, -12)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-12 - 8}{6 - 4}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-20}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -10$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y - 8 = -10(x - 4)$",
                  "reason": "Point-slope form: the line through the first point with slope $m$."
                },
                {
                  "step": "$0 - 8 = -10(x - 4)$",
                  "reason": "Substituting a value: at the $x$-intercept $y = 0$, and $0$ is put in place of $y$."
                },
                {
                  "step": "$-8 = -10(x - 4)$",
                  "reason": "Subtraction as addition: $0$ less a number is its opposite."
                },
                {
                  "step": "$-10(x - 4) = -8$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$-10x + 40 = -8$",
                  "reason": "Multiplying out: $-10$ multiplies each term of the bracket."
                },
                {
                  "step": "$-10x = -48$",
                  "reason": "Adding the same number to both sides: adding $-40$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{24}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-10$ leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{24}{5}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t126-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the line through $(3, -3)$ with slope $-2$ in standard form, and write that line right.",
            "given": [
              "$y - (-3) = -2(x - 3)$",
              "$y - 3 = -2(x - 3)$",
              "$y - 3 = -2x + 6$",
              "$2x + y = 9$"
            ],
            "lines": [
              {
                "step": "The working is for the line through $(3, -3)$ with slope $-2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 turns $y - (-3)$ into $y - 3$, so a sign is lost.",
                "reason": "A sign is lost: taking away $-3$ adds its opposite, so $y - (-3) = y + 3$."
              },
              {
                "step": "Line 2 written right is $y + 3 = -2(x - 3)$.",
                "reason": "Subtraction as addition: taking away a negative number adds its opposite."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the line through $(8, -2)$ with slope $-4$ in standard form, and write that line right.",
              "given": [
                "$y - (-2) = -4(x - 8)$",
                "$y + 2 = -4(x - 8)$",
                "$y + 2 = -4x - 32$",
                "$4x + y = -34$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y+2=-4*x+32",
              "lines": [
                {
                  "step": "The working is for the line through $(8, -2)$ with slope $-4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies $-4$ by $(-8)$ and writes $-32$, so a sign is lost.",
                  "reason": "A sign is lost: a negative number times a negative number is positive, so $-4 \\cdot (-8) = 32$."
                },
                {
                  "step": "Line 3 written right is $y + 2 = -4x + 32$.",
                  "reason": "Multiplying out: $-4$ multiplies each term of the bracket."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(-8, -9)$ with slope $-6$ in standard form, and write that line right.",
              "given": [
                "$y - 9 = -6(x - (-8))$",
                "$y - 9 = -6(x + 8)$",
                "$y - 9 = -6x - 48$",
                "$6x + y = -39$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: y-(-9)=-6*(x-(-8))",
              "lines": [
                {
                  "step": "The working is for the line through $(-8, -9)$ with slope $-6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 puts $y_1 = -9$ in as $y - 9$, so a sign is lost.",
                  "reason": "A sign is lost: the value $-9$ goes in place of $y_1$ in brackets, so $y - y_1$ is $y - (-9)$."
                },
                {
                  "step": "Line 1 written right is $y - (-9) = -6(x - (-8))$.",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(6, -1)$ with slope $-2$ in standard form, and write that line right.",
              "given": [
                "$y - (-1) = -2(x - 6)$",
                "$y + 1 = -2(x - 6)$",
                "$y + 1 = -2x + 12$",
                "$2x + y = 13$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*x+y=11",
              "lines": [
                {
                  "step": "The working is for the line through $(6, -1)$ with slope $-2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 moves $1$ across and keeps its sign, so a sign is lost.",
                  "reason": "A sign is lost: adding $-1$ to both sides takes $1$ away from the right, so the constant is $12 - 1 = 11$."
                },
                {
                  "step": "Line 4 written right is $2x + y = 11$.",
                  "reason": "Adding the same number to both sides: the constant moves to the right with its sign changed."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the line through $(-8, -2)$ with slope $\\dfrac{5}{7}$ in standard form, and write that line right.",
            "given": [
              "$y - (-2) = \\dfrac{5}{7}(x - (-8))$",
              "$y + 2 = \\dfrac{5}{7}(x + 8)$",
              "$7(y + 2) = 5(x + 8)$",
              "$7y + 14 = 5x - 40$",
              "$-5x + 7y = -54$",
              "$5x - 7y = 54$"
            ],
            "lines": [
              {
                "step": "The working is for the line through $(-8, -2)$ with slope $\\dfrac{5}{7}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 multiplies $5$ by $8$ and writes $-40$, so a sign is lost.",
                "reason": "A sign is lost: $5 \\cdot 8 = 40$, so the constant on the right is $40$."
              },
              {
                "step": "Line 4 written right is $7y + 14 = 5x + 40$.",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the line through $(1, -3)$ with slope $\\dfrac{2}{5}$ in standard form, and write that line right.",
              "given": [
                "$y - (-3) = \\dfrac{2}{5}(x - 1)$",
                "$y - 3 = \\dfrac{2}{5}(x - 1)$",
                "$5(y - 3) = 2(x - 1)$",
                "$5y - 15 = 2x - 2$",
                "$-2x + 5y = 13$",
                "$2x - 5y = -13$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y+3=(2/5)*(x-1)",
              "lines": [
                {
                  "step": "The working is for the line through $(1, -3)$ with slope $\\dfrac{2}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 turns $y - (-3)$ into $y - 3$, so a sign is lost.",
                  "reason": "A sign is lost: taking away $-3$ adds its opposite, so $y - (-3) = y + 3$."
                },
                {
                  "step": "Line 2 written right is $y + 3 = \\dfrac{2}{5}(x - 1)$.",
                  "reason": "Subtraction as addition: taking away a negative number adds its opposite."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(-5, -8)$ with slope $\\dfrac{3}{2}$ in standard form, and write that line right.",
              "given": [
                "$y - (-8) = \\dfrac{3}{2}(x - (-5))$",
                "$y + 8 = \\dfrac{3}{2}(x + 5)$",
                "$2(y + 8) = 3(x + 5)$",
                "$2y + 16 = 3x + 15$",
                "$-3x + 2y = -1$",
                "$3x + 2y = 1$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 3*x-2*y=1",
              "lines": [
                {
                  "step": "The working is for the line through $(-5, -8)$ with slope $\\dfrac{3}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 multiplies by $-1$ but keeps the sign of $2y$, so a sign is lost.",
                  "reason": "A sign is lost: multiplying both sides by $-1$ changes the sign of every term, so $2y$ becomes $-2y$."
                },
                {
                  "step": "Line 6 written right is $3x - 2y = 1$.",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-1$ changes the sign of every term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(-6, -3)$ with slope $\\dfrac{4}{3}$ in standard form, and write that line right.",
              "given": [
                "$y - (-3) = \\dfrac{4}{3}(x - (-6))$",
                "$y + 3 = \\dfrac{4}{3}(x + 6)$",
                "$3(y + 3) = 4(x + 6)$",
                "$3y + 9 = 4x + 24$",
                "$-4x + 3y = 33$",
                "$4x - 3y = -33$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -4*x+3*y=15",
              "lines": [
                {
                  "step": "The working is for the line through $(-6, -3)$ with slope $\\dfrac{4}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 moves $9$ across and keeps its sign, so a sign is lost.",
                  "reason": "A sign is lost: adding $-9$ to both sides takes $9$ away from the right, so the constant is $24 - 9 = 15$."
                },
                {
                  "step": "Line 5 written right is $-4x + 3y = 15$.",
                  "reason": "Adding the same number to both sides: the constant moves to the right with its sign changed."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t126-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(4, -4)$; the other is on the $y$-axis.",
            "figure": {
              "file": "equations-of-lines-2.svg",
              "alt": "A straight line through two marked points, one at (4, −4), the other on the y-axis."
            },
            "lines": [
              {
                "step": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(4, -4)$; the other is on the $y$-axis.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The other marked point is $(0, 2)$.",
                "reason": "Coordinates: a point on the $y$-axis has $x$-coordinate $0$, and its $y$-coordinate is read from the grid."
              },
              {
                "step": "$m = \\dfrac{-4 - 2}{4 - 0}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{-6}{4}$",
                "reason": "Subtraction as addition: each difference is worked out."
              },
              {
                "step": "$m = -\\dfrac{3}{2}$",
                "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
              },
              {
                "step": "$y = -\\dfrac{3}{2}x + 2$",
                "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(4, 9)$; the other is on the $y$-axis.",
              "figure": {
                "file": "equations-of-lines-3.svg",
                "alt": "A straight line through two marked points, one at (4, 9), the other on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/2*x+11",
              "lines": [
                {
                  "step": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(4, 9)$; the other is on the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point is $(0, 11)$.",
                  "reason": "Coordinates: a point on the $y$-axis has $x$-coordinate $0$, and its $y$-coordinate is read from the grid."
                },
                {
                  "step": "$m = \\dfrac{9 - 11}{4 - 0}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-2}{4}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -\\dfrac{1}{2}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}x + 11$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            },
            {
              "prompt": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(4, -12)$; the other is on the $y$-axis.",
              "figure": {
                "file": "equations-of-lines-4.svg",
                "alt": "A straight line through two marked points, one at (4, −12), the other on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/2*x-10",
              "lines": [
                {
                  "step": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(4, -12)$; the other is on the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point is $(0, -10)$.",
                  "reason": "Coordinates: a point on the $y$-axis has $x$-coordinate $0$, and its $y$-coordinate is read from the grid."
                },
                {
                  "step": "$m = \\dfrac{-12 - (-10)}{4 - 0}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-2}{4}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -\\dfrac{1}{2}$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}x - 10$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            },
            {
              "prompt": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(3, -13)$; the other is on the $y$-axis.",
              "figure": {
                "file": "equations-of-lines-5.svg",
                "alt": "A straight line through two marked points, one at (3, −13), the other on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -4*x-1",
              "lines": [
                {
                  "step": "Write the equation of the line in the figure, with $y$ alone on the left. One marked point is $(3, -13)$; the other is on the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point is $(0, -1)$.",
                  "reason": "Coordinates: a point on the $y$-axis has $x$-coordinate $0$, and its $y$-coordinate is read from the grid."
                },
                {
                  "step": "$m = \\dfrac{-13 - (-1)}{3 - 0}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-12}{3}$",
                  "reason": "Subtraction as addition: each difference is worked out."
                },
                {
                  "step": "$m = -4$",
                  "reason": "Equivalent fraction pairs: the top and the bottom are divided by their common factor."
                },
                {
                  "step": "$y = -4x - 1$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
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
      "id": "t126-p1",
      "method": "direct proof",
      "statement": "Let $m$ and $b$ be numbers. Then the graph of $y = mx + b$ is a line with slope $m$, and it meets the $y$-axis at $(0, b)$.",
      "idea": "Take two points of the graph and work out the slope: the $b$ cancels and the $m$ comes out of the top. Then put $x = 0$ in to find the $y$-intercept.",
      "lines": [
        {
          "line": "Let $(x_1, y_1)$ and $(x_2, y_2)$ be two different points of the graph of $y = mx + b$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $y_1 = mx_1 + b$ and $y_2 = mx_2 + b$.",
          "reason": "solution of a two-variable equation: each point of the graph satisfies the equation"
        },
        {
          "line": "If $x_2 = x_1$, the second line gives $y_2 = mx_1 + b$.",
          "reason": "substituting a value: $x_1$ in place of $x_2$"
        },
        {
          "line": "Then $y_2 = y_1$.",
          "reason": "transitive property: both are equal to $mx_1 + b$"
        },
        {
          "line": "Then the two points are one point.",
          "reason": "ordered pair: two points with equal coordinates are one point"
        },
        {
          "line": "So $x_2 - x_1$ is nonzero.",
          "reason": "the hypothesis: the two points are different"
        },
        {
          "line": "So $y_2 - y_1 = (mx_2 + b) - (mx_1 + b)$.",
          "reason": "substituting a value: the second line"
        },
        {
          "line": "So $y_2 - y_1 = mx_2 + b - mx_1 - b$.",
          "reason": "subtracting a bracket changes every sign in it"
        },
        {
          "line": "So $y_2 - y_1 = mx_2 - mx_1$.",
          "reason": "collecting like terms: $b - b = 0$"
        },
        {
          "line": "So $y_2 - y_1 = m(x_2 - x_1)$.",
          "reason": "common factor: $m$ is taken out of both terms"
        },
        {
          "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{m(x_2 - x_1)}{x_2 - x_1}$.",
          "reason": "dividing both sides by a nonzero number: dividing by $x_2 - x_1$, nonzero by the sixth line"
        },
        {
          "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} = m$.",
          "reason": "cancelling a common factor: the factor $x_2 - x_1$"
        },
        {
          "line": "So the slope between every two points of the graph is $m$.",
          "reason": "slope: the left side is the slope through $(x_1, y_1)$ and $(x_2, y_2)$"
        },
        {
          "line": "So the graph is a line with slope $m$.",
          "reason": "collinear points have equal slopes: every point of the graph has slope $m$ to one fixed point of it"
        },
        {
          "line": "At $x = 0$ the equation gives $y = m \\cdot 0 + b$.",
          "reason": "substituting a value: $0$ in place of $x$"
        },
        {
          "line": "So $y = 0 + b$ at $x = 0$.",
          "reason": "zero times a number is $0$"
        },
        {
          "line": "So $y = b$ at $x = 0$.",
          "reason": "adding $0$ leaves a number as it was"
        },
        {
          "line": "Therefore the graph meets the $y$-axis at $(0, b)$.",
          "reason": "definition of the $y$-intercept: the point of the graph with $x$-coordinate $0$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t126-s1",
      "method": "proof by cases",
      "statement": "Let $(x_1, y_1)$ be a point and $m$ a number. Then a point $(x, y)$ satisfies $y - y_1 = m(x - x_1)$ exactly when it is $(x_1, y_1)$ itself, or it has $x$ other than $x_1$ and the slope from $(x_1, y_1)$ to it is $m$. May use: slope, substituting a value, multiplying both sides by the same number, dividing both sides by a nonzero number, adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Let $(x, y)$ satisfy $y - y_1 = m(x - x_1)$.",
            "reason": "the hypothesis, for the first direction"
          },
          {
            "line": "Case $x = x_1$: then $y - y_1 = m(x_1 - x_1)$.",
            "reason": "substituting a value: $x_1$ in place of $x$"
          },
          {
            "line": "So $y - y_1 = m \\cdot 0$.",
            "reason": "a number less itself is $0$"
          },
          {
            "line": "So $y - y_1 = 0$.",
            "reason": "zero times a number is $0$"
          },
          {
            "line": "So $y = y_1$, and the point is $(x_1, y_1)$.",
            "reason": "adding the same number to both sides: adding $y_1$"
          },
          {
            "line": "Case $x$ other than $x_1$: then $\\dfrac{y - y_1}{x - x_1} = m$.",
            "reason": "dividing both sides by a nonzero number: dividing by $x - x_1$"
          },
          {
            "line": "So the slope from $(x_1, y_1)$ to $(x, y)$ is $m$.",
            "reason": "slope"
          },
          {
            "line": "For the other direction, putting $(x_1, y_1)$ in gives $y_1 - y_1$ on the left and $m(x_1 - x_1)$ on the right.",
            "reason": "substituting a value"
          },
          {
            "line": "So the left side is $0$ and the right side is $m \\cdot 0$.",
            "reason": "a number less itself is $0$"
          },
          {
            "line": "So both sides are $0$, and $(x_1, y_1)$ satisfies the equation.",
            "reason": "zero times a number is $0$"
          },
          {
            "line": "Let $(x, y)$ have $x$ other than $x_1$ and slope $m$ from $(x_1, y_1)$: then $\\dfrac{y - y_1}{x - x_1} = m$.",
            "reason": "slope"
          },
          {
            "line": "So $y - y_1 = m(x - x_1)$.",
            "reason": "multiplying both sides by the same number: multiplying by $x - x_1$"
          },
          {
            "line": "Therefore the points satisfying the equation are $(x_1, y_1)$ and exactly the points with slope $m$ from it.",
            "reason": "the fifth, seventh, tenth and twelfth lines"
          }
        ]
      }
    },
    {
      "id": "t126-s2",
      "method": "direct proof",
      "statement": "Let $(x_1, y_1)$ and $(x_2, y_2)$ be points with $x_1$ other than $x_2$. Then the line through them is the graph of $(x_2 - x_1)(y - y_1) = (y_2 - y_1)(x - x_1)$. May use: slope, point-slope form, multiplying both sides by the same number, dividing both sides by a nonzero number, cancelling a common factor.",
      "check": {
        "proof": [
          {
            "line": "Let $(x_1, y_1)$ and $(x_2, y_2)$ have $x_1$ other than $x_2$, and take the line through them.",
            "reason": "the hypothesis"
          },
          {
            "line": "Its slope is $\\dfrac{y_2 - y_1}{x_2 - x_1}$.",
            "reason": "slope: the $x$-coordinates differ"
          },
          {
            "line": "So the line is the graph of $y - y_1 = \\dfrac{y_2 - y_1}{x_2 - x_1}(x - x_1)$.",
            "reason": "point-slope form: the point $(x_1, y_1)$"
          },
          {
            "line": "Multiplying both sides by $x_2 - x_1$ gives $(x_2 - x_1)(y - y_1) = (x_2 - x_1) \\cdot \\dfrac{y_2 - y_1}{x_2 - x_1}(x - x_1)$.",
            "reason": "multiplying both sides by the same number"
          },
          {
            "line": "So $(x_2 - x_1)(y - y_1) = (y_2 - y_1)(x - x_1)$.",
            "reason": "cancelling a common factor: the factor $x_2 - x_1$, nonzero by the hypothesis"
          },
          {
            "line": "Dividing both sides by $x_2 - x_1$ takes this equation back to the third line, so the two equations have the same points.",
            "reason": "dividing both sides by a nonzero number"
          },
          {
            "line": "Therefore the line through the two points is the graph of $(x_2 - x_1)(y - y_1) = (y_2 - y_1)(x - x_1)$.",
            "reason": "the third and sixth lines"
          }
        ]
      }
    },
    {
      "id": "t126-s3",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be nonzero numbers. Then the line through $(a, 0)$ and $(0, b)$ is the graph of $\\dfrac{x}{a} + \\dfrac{y}{b} = 1$. May use: slope, negative quotient identities, point-slope form, multiplying out, adding the same number to both sides, dividing both sides by a nonzero number, cancelling a common factor.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be nonzero, and take the line through $(a, 0)$ and $(0, b)$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Its slope is $\\dfrac{b - 0}{0 - a}$.",
            "reason": "slope: the $x$-coordinates differ because $a$ is nonzero"
          },
          {
            "line": "So its slope is $-\\dfrac{b}{a}$.",
            "reason": "negative quotient identities"
          },
          {
            "line": "So the line is $y - b = -\\dfrac{b}{a}(x - 0)$.",
            "reason": "point-slope form: the point $(0, b)$"
          },
          {
            "line": "So $y - b = -\\dfrac{b}{a}x$.",
            "reason": "multiplying out"
          },
          {
            "line": "So $\\dfrac{b}{a}x + y = b$.",
            "reason": "adding the same number to both sides: adding $\\dfrac{b}{a}x + b$"
          },
          {
            "line": "So $\\dfrac{bx}{ab} + \\dfrac{y}{b} = \\dfrac{b}{b}$.",
            "reason": "dividing both sides by a nonzero number: dividing each term by $b$"
          },
          {
            "line": "Therefore $\\dfrac{x}{a} + \\dfrac{y}{b} = 1$.",
            "reason": "cancelling a common factor: the factor $b$"
          }
        ]
      }
    }
  ]
}
