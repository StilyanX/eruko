export default {
  "number": 127,
  "title": "Parallel and perpendicular lines",
  "section": 5,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "238-245"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the equation of the line through $(2, 5)$ perpendicular to $3x - 6y = 7$, in standard form.",
    "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
    "answer": "2*x+y = 9",
    "solution": [
      "Find the equation of the line through $(2, 5)$ perpendicular to $3x - 6y = 7$, in standard form.",
      "$y = \\dfrac{1}{2}x - \\dfrac{7}{6}$",
      "$m = -2$",
      "$y - 5 = -2(x - 2)$",
      "$y - 5 = -2x + 4$",
      "$2x + y = 9$"
    ]
  },
  "ideas": [
    {
      "name": "Parallel lines",
      "concrete": "At every $x$ the line $y = 2x + 1$ is $4$ above the line $y = 2x - 3$, so the two lines never meet.",
      "general": "Two different lines in the plane that share no point are **parallel lines**."
    },
    {
      "name": "Perpendicular lines",
      "concrete": "The $x$-axis and the $y$-axis meet at the origin, and the angle between them is a right angle.",
      "general": "Two lines that meet at a right angle are **perpendicular lines**."
    },
    {
      "name": "Equal slopes mean parallel or the same line",
      "concrete": "Written in slope-intercept form, $4x - 2y = 6$ is $y = 2x - 3$ and $6x - 3y = -3$ is $y = 2x + 1$: the slopes are both $2$ and the $y$-intercepts differ, so the lines are parallel; $8x - 4y = -4$ is $y = 2x + 1$ again, the same line as the second.",
      "general": "For numbers $m$, $b_1$ and $b_2$, the lines $y = mx + b_1$ and $y = mx + b_2$ are parallel when $b_1$ and $b_2$ differ, and are the same line when $b_1 = b_2$."
    },
    {
      "name": "Slopes with product $-1$ mean perpendicular",
      "concrete": "The slopes of $y = 2x + 1$ and $y = -\\dfrac{1}{2}x + 4$ have product $2 \\cdot \\left(-\\dfrac{1}{2}\\right) = -1$, and the two lines meet at a right angle.",
      "general": "For two lines that are not vertical, with slopes $m_1$ and $m_2$, the lines are perpendicular exactly when $m_1 m_2 = -1$. So for a nonzero slope $m$, every line perpendicular to a line of slope $m$ has slope $-\\dfrac{1}{m}$."
    },
    {
      "name": "A system has no solution, one, or infinitely many according as its lines are parallel, crossing, or the same",
      "concrete": "The lines $y = 2x + 1$ and $y = -3x + 6$ have different slopes and cross at $(1, 3)$, the one solution of the system; $y = 2x + 1$ and $y = 2x - 3$ are parallel, and their system has no solution; $y = 2x + 1$ and $6x - 3y = -3$ are one line, and every point of it solves their system.",
      "general": "For a system of two linear equations in $x$ and $y$, each the equation of a line, the system has no solution when the lines are parallel, exactly one solution when they cross, and infinitely many solutions when they are the same line."
    }
  ],
  "kinds": [
    {
      "id": "t127-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the equation of the line through $(-7, -5)$ parallel to $2x - 9y = -3$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(-7, -5)$ parallel to $2x - 9y = -3$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x - 9y = c$",
                "reason": "Equal slopes mean parallel or the same line: a line parallel to $2x - 9y = -3$ has its slope, so it keeps the coefficients of $x$ and $y$ and only the constant $c$ changes."
              },
              {
                "step": "$c = 2 \\cdot (-7) - 9 \\cdot (-5)$",
                "reason": "Substituting a value: the point $(-7, -5)$ is on the line, so $x$ is replaced by $-7$ and $y$ by $-5$, in brackets."
              },
              {
                "step": "$c = 31$",
                "reason": "Order of operations: the products are worked out first, then the sum."
              },
              {
                "step": "$2x - 9y = 31$",
                "reason": "Standard form: $2$ is above $0$, and $2$ and $9$ have no common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(-2, 4)$ parallel to $4x - 7y = 8$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "4*x-7*y = -36",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-2, 4)$ parallel to $4x - 7y = 8$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x - 7y = c$",
                  "reason": "Equal slopes mean parallel or the same line: a line parallel to $4x - 7y = 8$ has its slope, so it keeps the coefficients of $x$ and $y$ and only the constant $c$ changes."
                },
                {
                  "step": "$c = 4 \\cdot (-2) - 7 \\cdot 4$",
                  "reason": "Substituting a value: the point $(-2, 4)$ is on the line, so $x$ is replaced by $-2$ and $y$ by $4$, in brackets."
                },
                {
                  "step": "$c = -36$",
                  "reason": "Order of operations: the products are worked out first, then the sum."
                },
                {
                  "step": "$4x - 7y = -36$",
                  "reason": "Standard form: $4$ is above $0$, and $4$ and $7$ have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-1, -5)$ parallel to $8x + 9y = 7$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "8*x+9*y = -53",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-1, -5)$ parallel to $8x + 9y = 7$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8x + 9y = c$",
                  "reason": "Equal slopes mean parallel or the same line: a line parallel to $8x + 9y = 7$ has its slope, so it keeps the coefficients of $x$ and $y$ and only the constant $c$ changes."
                },
                {
                  "step": "$c = 8 \\cdot (-1) + 9 \\cdot (-5)$",
                  "reason": "Substituting a value: the point $(-1, -5)$ is on the line, so $x$ is replaced by $-1$ and $y$ by $-5$, in brackets."
                },
                {
                  "step": "$c = -53$",
                  "reason": "Order of operations: the products are worked out first, then the sum."
                },
                {
                  "step": "$8x + 9y = -53$",
                  "reason": "Standard form: $8$ is above $0$, and $8$ and $9$ have no common factor."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-5, 4)$ parallel to $2x + 5y = -14$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "2*x+5*y = 10",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-5, 4)$ parallel to $2x + 5y = -14$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 5y = c$",
                  "reason": "Equal slopes mean parallel or the same line: a line parallel to $2x + 5y = -14$ has its slope, so it keeps the coefficients of $x$ and $y$ and only the constant $c$ changes."
                },
                {
                  "step": "$c = 2 \\cdot (-5) + 5 \\cdot 4$",
                  "reason": "Substituting a value: the point $(-5, 4)$ is on the line, so $x$ is replaced by $-5$ and $y$ by $4$, in brackets."
                },
                {
                  "step": "$c = 10$",
                  "reason": "Order of operations: the products are worked out first, then the sum."
                },
                {
                  "step": "$2x + 5y = 10$",
                  "reason": "Standard form: $2$ is above $0$, and $2$ and $5$ have no common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(8, 9)$ perpendicular to $5x - 20y = -8$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(8, 9)$ perpendicular to $5x - 20y = -8$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = \\dfrac{1}{4}x + \\dfrac{2}{5}$",
                "reason": "Slope-intercept form: adding $-5x$ to both sides and dividing both sides by $-20$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$m = -4$",
                "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{4}$ is $-1$, so it is $-1 \\div \\dfrac{1}{4} = -4$."
              },
              {
                "step": "$y - 9 = -4(x - 8)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$y - 9 = -4x + 32$",
                "reason": "Multiplying out: $-4$ multiplies each term of the bracket, and $-4 \\cdot (-8) = 32$."
              },
              {
                "step": "$4x + y = 41$",
                "reason": "Adding the same number to both sides: adding $4x + 9$ to both sides gives the standard form, $4$ above $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(6, 5)$ perpendicular to $5x - 30y = -7$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "6*x+y = 41",
              "lines": [
                {
                  "step": "Find the equation of the line through $(6, 5)$ perpendicular to $5x - 30y = -7$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{1}{6}x + \\dfrac{7}{30}$",
                  "reason": "Slope-intercept form: adding $-5x$ to both sides and dividing both sides by $-30$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = -6$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{6}$ is $-1$, so it is $-1 \\div \\dfrac{1}{6} = -6$."
                },
                {
                  "step": "$y - 5 = -6(x - 6)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 5 = -6x + 36$",
                  "reason": "Multiplying out: $-6$ multiplies each term of the bracket, and $-6 \\cdot (-6) = 36$."
                },
                {
                  "step": "$6x + y = 41$",
                  "reason": "Adding the same number to both sides: adding $6x + 5$ to both sides gives the standard form, $6$ above $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(9, 1)$ perpendicular to $2x - 10y = -15$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x+y = 46",
              "lines": [
                {
                  "step": "Find the equation of the line through $(9, 1)$ perpendicular to $2x - 10y = -15$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{1}{5}x + \\dfrac{3}{2}$",
                  "reason": "Slope-intercept form: adding $-2x$ to both sides and dividing both sides by $-10$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = -5$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{5}$ is $-1$, so it is $-1 \\div \\dfrac{1}{5} = -5$."
                },
                {
                  "step": "$y - 1 = -5(x - 9)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 1 = -5x + 45$",
                  "reason": "Multiplying out: $-5$ multiplies each term of the bracket, and $-5 \\cdot (-9) = 45$."
                },
                {
                  "step": "$5x + y = 46$",
                  "reason": "Adding the same number to both sides: adding $5x + 1$ to both sides gives the standard form, $5$ above $0$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(3, 6)$ perpendicular to $4x - 20y = 11$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "5*x+y = 21",
              "lines": [
                {
                  "step": "Find the equation of the line through $(3, 6)$ perpendicular to $4x - 20y = 11$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{1}{5}x - \\dfrac{11}{20}$",
                  "reason": "Slope-intercept form: adding $-4x$ to both sides and dividing both sides by $-20$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = -5$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{5}$ is $-1$, so it is $-1 \\div \\dfrac{1}{5} = -5$."
                },
                {
                  "step": "$y - 6 = -5(x - 3)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$y - 6 = -5x + 15$",
                  "reason": "Multiplying out: $-5$ multiplies each term of the bracket, and $-5 \\cdot (-3) = 15$."
                },
                {
                  "step": "$5x + y = 21$",
                  "reason": "Adding the same number to both sides: adding $5x + 6$ to both sides gives the standard form, $5$ above $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $x$-intercept of the line through $(5, 2)$ perpendicular to $2x - 12y = -17$.",
            "lines": [
              {
                "step": "Find the $x$-intercept of the line through $(5, 2)$ perpendicular to $2x - 12y = -17$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = \\dfrac{1}{6}x + \\dfrac{17}{12}$",
                "reason": "Slope-intercept form: adding $-2x$ to both sides and dividing both sides by $-12$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$m = -6$",
                "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{6}$ is $-1$, so it is $-1 \\div \\dfrac{1}{6} = -6$."
              },
              {
                "step": "$y - 2 = -6(x - 5)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$-2 = -6(x - 5)$",
                "reason": "Definition of the $x$-intercept: at the $x$-intercept $y = 0$, and $0$ less a number is its opposite."
              },
              {
                "step": "$x - 5 = \\dfrac{1}{3}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-6$ leaves $x - 5$ alone."
              },
              {
                "step": "$x = \\dfrac{16}{3}$",
                "reason": "Adding the same number to both sides: adding $5$ to both sides leaves $x$ alone."
              },
              {
                "step": "$\\left(\\dfrac{16}{3}, 0\\right)$",
                "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $x$-intercept of the line through $(9, 7)$ perpendicular to $3x - 12y = -20$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(43/4, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(9, 7)$ perpendicular to $3x - 12y = -20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{1}{4}x + \\dfrac{5}{3}$",
                  "reason": "Slope-intercept form: adding $-3x$ to both sides and dividing both sides by $-12$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = -4$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{4}$ is $-1$, so it is $-1 \\div \\dfrac{1}{4} = -4$."
                },
                {
                  "step": "$y - 7 = -4(x - 9)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$-7 = -4(x - 9)$",
                  "reason": "Definition of the $x$-intercept: at the $x$-intercept $y = 0$, and $0$ less a number is its opposite."
                },
                {
                  "step": "$x - 9 = \\dfrac{7}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $x - 9$ alone."
                },
                {
                  "step": "$x = \\dfrac{43}{4}$",
                  "reason": "Adding the same number to both sides: adding $9$ to both sides leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{43}{4}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the line through $(4, 9)$ perpendicular to $3x - 12y = 14$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(25/4, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(4, 9)$ perpendicular to $3x - 12y = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{1}{4}x - \\dfrac{7}{6}$",
                  "reason": "Slope-intercept form: adding $-3x$ to both sides and dividing both sides by $-12$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = -4$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{4}$ is $-1$, so it is $-1 \\div \\dfrac{1}{4} = -4$."
                },
                {
                  "step": "$y - 9 = -4(x - 4)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$-9 = -4(x - 4)$",
                  "reason": "Definition of the $x$-intercept: at the $x$-intercept $y = 0$, and $0$ less a number is its opposite."
                },
                {
                  "step": "$x - 4 = \\dfrac{9}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $x - 4$ alone."
                },
                {
                  "step": "$x = \\dfrac{25}{4}$",
                  "reason": "Adding the same number to both sides: adding $4$ to both sides leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{25}{4}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the line through $(9, 6)$ perpendicular to $5x - 20y = -6$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(21/2, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the line through $(9, 6)$ perpendicular to $5x - 20y = -6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{1}{4}x + \\dfrac{3}{10}$",
                  "reason": "Slope-intercept form: adding $-5x$ to both sides and dividing both sides by $-20$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = -4$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $\\dfrac{1}{4}$ is $-1$, so it is $-1 \\div \\dfrac{1}{4} = -4$."
                },
                {
                  "step": "$y - 6 = -4(x - 9)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$-6 = -4(x - 9)$",
                  "reason": "Definition of the $x$-intercept: at the $x$-intercept $y = 0$, and $0$ less a number is its opposite."
                },
                {
                  "step": "$x - 9 = \\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $x - 9$ alone."
                },
                {
                  "step": "$x = \\dfrac{21}{2}$",
                  "reason": "Adding the same number to both sides: adding $9$ to both sides leaves $x$ alone."
                },
                {
                  "step": "$\\left(\\dfrac{21}{2}, 0\\right)$",
                  "reason": "Definition of the $x$-intercept: the point has $y$-coordinate $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation of the line through $(4, -6)$ perpendicular to $5x + 4y = 3$, in standard form.",
            "lines": [
              {
                "step": "Find the equation of the line through $(4, -6)$ perpendicular to $5x + 4y = 3$, in standard form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -\\dfrac{5}{4}x + \\dfrac{3}{4}$",
                "reason": "Slope-intercept form: adding $-5x$ to both sides and dividing both sides by $4$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$m = \\dfrac{4}{5}$",
                "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $-\\dfrac{5}{4}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{5}{4}\\right) = \\dfrac{4}{5}$."
              },
              {
                "step": "$y + 6 = \\dfrac{4}{5}(x - 4)$",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "$5(y + 6) = 4(x - 4)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fraction."
              },
              {
                "step": "$5y + 30 = 4x - 16$",
                "reason": "Multiplying out: each number in front of a bracket multiplies each term inside it."
              },
              {
                "step": "$46 = 4x - 5y$",
                "reason": "Adding the same number to both sides: adding $-5y + 16$ to both sides."
              },
              {
                "step": "$4x - 5y = 46$",
                "reason": "Symmetric property: the two sides are written in the other order, so the coefficient of $x$ is above $0$ as standard form asks."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the line through $(1, -4)$ perpendicular to $5x + 2y = -8$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "2*x-5*y = 22",
              "lines": [
                {
                  "step": "Find the equation of the line through $(1, -4)$ perpendicular to $5x + 2y = -8$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{5}{2}x - 4$",
                  "reason": "Slope-intercept form: adding $-5x$ to both sides and dividing both sides by $2$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = \\dfrac{2}{5}$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $-\\dfrac{5}{2}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{5}{2}\\right) = \\dfrac{2}{5}$."
                },
                {
                  "step": "$y + 4 = \\dfrac{2}{5}(x - 1)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$5(y + 4) = 2(x - 1)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fraction."
                },
                {
                  "step": "$5y + 20 = 2x - 2$",
                  "reason": "Multiplying out: each number in front of a bracket multiplies each term inside it."
                },
                {
                  "step": "$22 = 2x - 5y$",
                  "reason": "Adding the same number to both sides: adding $-5y + 2$ to both sides."
                },
                {
                  "step": "$2x - 5y = 22$",
                  "reason": "Symmetric property: the two sides are written in the other order, so the coefficient of $x$ is above $0$ as standard form asks."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(-4, -6)$ perpendicular to $3x + 2y = -18$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "2*x-3*y = 10",
              "lines": [
                {
                  "step": "Find the equation of the line through $(-4, -6)$ perpendicular to $3x + 2y = -18$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{3}{2}x - 9$",
                  "reason": "Slope-intercept form: adding $-3x$ to both sides and dividing both sides by $2$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = \\dfrac{2}{3}$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $-\\dfrac{3}{2}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{3}{2}\\right) = \\dfrac{2}{3}$."
                },
                {
                  "step": "$y + 6 = \\dfrac{2}{3}(x + 4)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$3(y + 6) = 2(x + 4)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
                },
                {
                  "step": "$3y + 18 = 2x + 8$",
                  "reason": "Multiplying out: each number in front of a bracket multiplies each term inside it."
                },
                {
                  "step": "$10 = 2x - 3y$",
                  "reason": "Adding the same number to both sides: adding $-3y - 8$ to both sides."
                },
                {
                  "step": "$2x - 3y = 10$",
                  "reason": "Symmetric property: the two sides are written in the other order, so the coefficient of $x$ is above $0$ as standard form asks."
                }
              ]
            },
            {
              "prompt": "Find the equation of the line through $(5, -8)$ perpendicular to $7x + 3y = 8$, in standard form.",
              "form": "Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.",
              "answer": "3*x-7*y = 71",
              "lines": [
                {
                  "step": "Find the equation of the line through $(5, -8)$ perpendicular to $7x + 3y = 8$, in standard form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{7}{3}x + \\dfrac{8}{3}$",
                  "reason": "Slope-intercept form: adding $-7x$ to both sides and dividing both sides by $3$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$m = \\dfrac{3}{7}$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the new slope times $-\\dfrac{7}{3}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{7}{3}\\right) = \\dfrac{3}{7}$."
                },
                {
                  "step": "$y + 8 = \\dfrac{3}{7}(x - 5)$",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "$7(y + 8) = 3(x - 5)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $7$ clears the fraction."
                },
                {
                  "step": "$7y + 56 = 3x - 15$",
                  "reason": "Multiplying out: each number in front of a bracket multiplies each term inside it."
                },
                {
                  "step": "$71 = 3x - 7y$",
                  "reason": "Adding the same number to both sides: adding $-7y + 15$ to both sides."
                },
                {
                  "step": "$3x - 7y = 71$",
                  "reason": "Symmetric property: the two sides are written in the other order, so the coefficient of $x$ is above $0$ as standard form asks."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t127-k2",
      "forms": [
        {
          "example": {
            "problem": "Find how many points the lines $8x + 3y = -7$ and $-16x - 6y = -23$ share.",
            "lines": [
              {
                "step": "Find how many points the lines $8x + 3y = -7$ and $-16x - 6y = -23$ share.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -\\dfrac{8}{3}x - \\dfrac{7}{3}$",
                "reason": "Slope-intercept form: adding $-8x$ to both sides of the first equation and dividing both sides by $3$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$y = -\\dfrac{8}{3}x + \\dfrac{23}{6}$",
                "reason": "Slope-intercept form: adding $16x$ to both sides of the second equation and dividing both sides by $-6$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "The slopes are $-\\dfrac{8}{3}$ and $-\\dfrac{8}{3}$, and the $y$-intercepts are $\\left(0, -\\dfrac{7}{3}\\right)$ and $\\left(0, \\dfrac{23}{6}\\right)$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope, and the constant term gives the $y$-intercept."
              },
              {
                "step": "The lines are parallel: None.",
                "reason": "A system has no solution, one, or infinitely many according as its lines are parallel, crossing, or the same: equal slopes and different $y$-intercepts make the lines parallel, by equal slopes mean parallel or the same line, and parallel lines share no point."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many points the lines $4x - 5y = -1$ and $-3x + 8y = 19$ share.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Find how many points the lines $4x - 5y = -1$ and $-3x + 8y = 19$ share.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{4}{5}x + \\dfrac{1}{5}$",
                  "reason": "Slope-intercept form: adding $-4x$ to both sides of the first equation and dividing both sides by $-5$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$y = \\dfrac{3}{8}x + \\dfrac{19}{8}$",
                  "reason": "Slope-intercept form: adding $3x$ to both sides of the second equation and dividing both sides by $8$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "The slopes are $\\dfrac{4}{5}$ and $\\dfrac{3}{8}$, and the $y$-intercepts are $\\left(0, \\dfrac{1}{5}\\right)$ and $\\left(0, \\dfrac{19}{8}\\right)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope, and the constant term gives the $y$-intercept."
                },
                {
                  "step": "The slopes differ, so the lines cross: One.",
                  "reason": "A system has no solution, one, or infinitely many according as its lines are parallel, crossing, or the same: different slopes make the lines cross, and two crossing lines share exactly one point."
                }
              ]
            },
            {
              "prompt": "Find how many points the lines $5x + 8y = 9$ and $-10x - 16y = -18$ share.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "Infinitely many",
              "lines": [
                {
                  "step": "Find how many points the lines $5x + 8y = 9$ and $-10x - 16y = -18$ share.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{5}{8}x + \\dfrac{9}{8}$",
                  "reason": "Slope-intercept form: adding $-5x$ to both sides of the first equation and dividing both sides by $8$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$y = -\\dfrac{5}{8}x + \\dfrac{9}{8}$",
                  "reason": "Slope-intercept form: adding $10x$ to both sides of the second equation and dividing both sides by $-16$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "The slopes are $-\\dfrac{5}{8}$ and $-\\dfrac{5}{8}$, and the $y$-intercepts are $\\left(0, \\dfrac{9}{8}\\right)$ and $\\left(0, \\dfrac{9}{8}\\right)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope, and the constant term gives the $y$-intercept."
                },
                {
                  "step": "The two equations give the same line: Infinitely many.",
                  "reason": "A system has no solution, one, or infinitely many according as its lines are parallel, crossing, or the same: equal slopes and the same $y$-intercept make them one line, by equal slopes mean parallel or the same line, and every point of it is shared."
                }
              ]
            },
            {
              "prompt": "Find how many points the lines $8x - 5y = 2$ and $-16x + 10y = -9$ share.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Find how many points the lines $8x - 5y = 2$ and $-16x + 10y = -9$ share.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{8}{5}x - \\dfrac{2}{5}$",
                  "reason": "Slope-intercept form: adding $-8x$ to both sides of the first equation and dividing both sides by $-5$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$y = \\dfrac{8}{5}x - \\dfrac{9}{10}$",
                  "reason": "Slope-intercept form: adding $16x$ to both sides of the second equation and dividing both sides by $10$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "The slopes are $\\dfrac{8}{5}$ and $\\dfrac{8}{5}$, and the $y$-intercepts are $\\left(0, -\\dfrac{2}{5}\\right)$ and $\\left(0, -\\dfrac{9}{10}\\right)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the coefficient of $x$ is the slope, and the constant term gives the $y$-intercept."
                },
                {
                  "step": "The lines are parallel: None.",
                  "reason": "A system has no solution, one, or infinitely many according as its lines are parallel, crossing, or the same: equal slopes and different $y$-intercepts make the lines parallel, by equal slopes mean parallel or the same line, and parallel lines share no point."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t127-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the lines $2x + 7y = 5$ and $21x - 6y = 14$ are perpendicular.",
            "lines": [
              {
                "step": "Decide whether the lines $2x + 7y = 5$ and $21x - 6y = 14$ are perpendicular.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -\\dfrac{2}{7}x + \\dfrac{5}{7}$",
                "reason": "Slope-intercept form: adding $-2x$ to both sides of the first equation and dividing both sides by $7$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$y = \\dfrac{7}{2}x - \\dfrac{7}{3}$",
                "reason": "Slope-intercept form: adding $-21x$ to both sides of the second equation and dividing both sides by $-6$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$-\\dfrac{2}{7} \\cdot \\dfrac{7}{2} = -1$",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slopes are the coefficients of $x$, and their product is worked out by the rule for multiplying fractions."
              },
              {
                "step": "The product is $-1$: Yes.",
                "reason": "Slopes with product $-1$ mean perpendicular: the product of the slopes is $-1$, so the lines meet at a right angle."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the lines $7x + 2y = -5$ and $2x + 7y = -16$ are perpendicular.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the lines $7x + 2y = -5$ and $2x + 7y = -16$ are perpendicular.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{7}{2}x - \\dfrac{5}{2}$",
                  "reason": "Slope-intercept form: adding $-7x$ to both sides of the first equation and dividing both sides by $2$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$y = -\\dfrac{2}{7}x - \\dfrac{16}{7}$",
                  "reason": "Slope-intercept form: adding $-2x$ to both sides of the second equation and dividing both sides by $7$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{7}{2} \\cdot \\left(-\\dfrac{2}{7}\\right) = 1$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slopes are the coefficients of $x$, and their product is worked out by the rule for multiplying fractions."
                },
                {
                  "step": "The product is not $-1$: No.",
                  "reason": "Slopes with product $-1$ mean perpendicular: two lines that are not vertical are perpendicular only when the product of their slopes is $-1$, and here it is $1$."
                }
              ]
            },
            {
              "prompt": "Decide whether the lines $7x - 8y = 13$ and $24x + 21y = -11$ are perpendicular.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the lines $7x - 8y = 13$ and $24x + 21y = -11$ are perpendicular.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{7}{8}x - \\dfrac{13}{8}$",
                  "reason": "Slope-intercept form: adding $-7x$ to both sides of the first equation and dividing both sides by $-8$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$y = -\\dfrac{8}{7}x - \\dfrac{11}{21}$",
                  "reason": "Slope-intercept form: adding $-24x$ to both sides of the second equation and dividing both sides by $21$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$\\dfrac{7}{8} \\cdot \\left(-\\dfrac{8}{7}\\right) = -1$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slopes are the coefficients of $x$, and their product is worked out by the rule for multiplying fractions."
                },
                {
                  "step": "The product is $-1$: Yes.",
                  "reason": "Slopes with product $-1$ mean perpendicular: the product of the slopes is $-1$, so the lines meet at a right angle."
                }
              ]
            },
            {
              "prompt": "Decide whether the lines $5x - 9y = 20$ and $10x - 18y = 7$ are perpendicular.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the lines $5x - 9y = 20$ and $10x - 18y = 7$ are perpendicular.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{5}{9}x - \\dfrac{20}{9}$",
                  "reason": "Slope-intercept form: adding $-5x$ to both sides of the first equation and dividing both sides by $-9$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$y = \\dfrac{5}{9}x - \\dfrac{7}{18}$",
                  "reason": "Slope-intercept form: adding $-10x$ to both sides of the second equation and dividing both sides by $-18$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$\\dfrac{5}{9} \\cdot \\dfrac{5}{9} = \\dfrac{25}{81}$",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: the slopes are the coefficients of $x$, and their product is worked out by the rule for multiplying fractions."
                },
                {
                  "step": "The product is not $-1$: No.",
                  "reason": "Slopes with product $-1$ mean perpendicular: two lines that are not vertical are perpendicular only when the product of their slopes is $-1$, and here it is $\\dfrac{25}{81}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t127-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $a$ if the line $ax + 3y = -14$ is parallel to $8x + 9y = -5$.",
            "lines": [
              {
                "step": "Find $a$ if the line $ax + 3y = -14$ is parallel to $8x + 9y = -5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -\\dfrac{a}{3}x - \\dfrac{14}{3}$",
                "reason": "Slope-intercept form: adding $-ax$ to both sides and dividing both sides by $3$ leaves $y$ alone."
              },
              {
                "step": "$y = -\\dfrac{8}{9}x - \\dfrac{5}{9}$",
                "reason": "Slope-intercept form: adding $-8x$ to both sides of the second equation and dividing both sides by $9$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$-\\dfrac{a}{3} = -\\dfrac{8}{9}$",
                "reason": "Equal slopes mean parallel or the same line: parallel lines that are not vertical have equal slopes, and by the line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$ each slope is the coefficient of $x$."
              },
              {
                "step": "$a = \\dfrac{8}{3}$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $-3$ leaves $a$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$ if the line $ax + 6y = -1$ is parallel to $9x - 4y = 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-27/2",
              "lines": [
                {
                  "step": "Find $a$ if the line $ax + 6y = -1$ is parallel to $9x - 4y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{a}{6}x - \\dfrac{1}{6}$",
                  "reason": "Slope-intercept form: adding $-ax$ to both sides and dividing both sides by $6$ leaves $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{9}{4}x - \\dfrac{3}{4}$",
                  "reason": "Slope-intercept form: adding $-9x$ to both sides of the second equation and dividing both sides by $-4$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{a}{6} = \\dfrac{9}{4}$",
                  "reason": "Equal slopes mean parallel or the same line: parallel lines that are not vertical have equal slopes, and by the line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$ each slope is the coefficient of $x$."
                },
                {
                  "step": "$a = -\\dfrac{27}{2}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-6$ leaves $a$ alone."
                }
              ]
            },
            {
              "prompt": "Find $a$ if the line $ax + 3y = 19$ is parallel to $7x - 4y = -16$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-21/4",
              "lines": [
                {
                  "step": "Find $a$ if the line $ax + 3y = 19$ is parallel to $7x - 4y = -16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{a}{3}x + \\dfrac{19}{3}$",
                  "reason": "Slope-intercept form: adding $-ax$ to both sides and dividing both sides by $3$ leaves $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{7}{4}x + 4$",
                  "reason": "Slope-intercept form: adding $-7x$ to both sides of the second equation and dividing both sides by $-4$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{a}{3} = \\dfrac{7}{4}$",
                  "reason": "Equal slopes mean parallel or the same line: parallel lines that are not vertical have equal slopes, and by the line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$ each slope is the coefficient of $x$."
                },
                {
                  "step": "$a = -\\dfrac{21}{4}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-3$ leaves $a$ alone."
                }
              ]
            },
            {
              "prompt": "Find $a$ if the line $ax + 4y = -5$ is parallel to $9x + 5y = 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "36/5",
              "lines": [
                {
                  "step": "Find $a$ if the line $ax + 4y = -5$ is parallel to $9x + 5y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{a}{4}x - \\dfrac{5}{4}$",
                  "reason": "Slope-intercept form: adding $-ax$ to both sides and dividing both sides by $4$ leaves $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{9}{5}x + \\dfrac{3}{5}$",
                  "reason": "Slope-intercept form: adding $-9x$ to both sides of the second equation and dividing both sides by $5$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{a}{4} = -\\dfrac{9}{5}$",
                  "reason": "Equal slopes mean parallel or the same line: parallel lines that are not vertical have equal slopes, and by the line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$ each slope is the coefficient of $x$."
                },
                {
                  "step": "$a = \\dfrac{36}{5}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-4$ leaves $a$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $c$ if the line $4x + cy = -3$ is perpendicular to $7x - 2y = 11$.",
            "lines": [
              {
                "step": "Find $c$ if the line $4x + cy = -3$ is perpendicular to $7x - 2y = 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -\\dfrac{4}{c}x - \\dfrac{3}{c}$",
                "reason": "Slope-intercept form: adding $-4x$ to both sides and dividing both sides by $c$, nonzero since the line has a slope, leaves $y$ alone."
              },
              {
                "step": "$y = \\dfrac{7}{2}x - \\dfrac{11}{2}$",
                "reason": "Slope-intercept form: adding $-7x$ to both sides of the second equation and dividing both sides by $-2$ leaves $y$ alone, as in $y = mx + b$."
              },
              {
                "step": "$-\\dfrac{4}{c} \\cdot \\dfrac{7}{2} = -1$",
                "reason": "Slopes with product $-1$ mean perpendicular: the slopes are the coefficients of $x$ in the two lines above (the line $y = mx + b$ has slope $m$), and their product is $-1$."
              },
              {
                "step": "$4 \\cdot \\dfrac{7}{2} = c$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $-c$ clears the fraction."
              },
              {
                "step": "$c = 14$",
                "reason": "Order of operations: the product is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $c$ if the line $4x + cy = 19$ is perpendicular to $5x - 9y = -9$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "20/9",
              "lines": [
                {
                  "step": "Find $c$ if the line $4x + cy = 19$ is perpendicular to $5x - 9y = -9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{4}{c}x + \\dfrac{19}{c}$",
                  "reason": "Slope-intercept form: adding $-4x$ to both sides and dividing both sides by $c$, nonzero since the line has a slope, leaves $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{5}{9}x + 1$",
                  "reason": "Slope-intercept form: adding $-5x$ to both sides of the second equation and dividing both sides by $-9$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{4}{c} \\cdot \\dfrac{5}{9} = -1$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the slopes are the coefficients of $x$ in the two lines above (the line $y = mx + b$ has slope $m$), and their product is $-1$."
                },
                {
                  "step": "$4 \\cdot \\dfrac{5}{9} = c$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-c$ clears the fraction."
                },
                {
                  "step": "$c = \\dfrac{20}{9}$",
                  "reason": "Order of operations: the product is worked out."
                }
              ]
            },
            {
              "prompt": "Find $c$ if the line $7x + cy = -2$ is perpendicular to $7x - 9y = -6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "49/9",
              "lines": [
                {
                  "step": "Find $c$ if the line $7x + cy = -2$ is perpendicular to $7x - 9y = -6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{7}{c}x - \\dfrac{2}{c}$",
                  "reason": "Slope-intercept form: adding $-7x$ to both sides and dividing both sides by $c$, nonzero since the line has a slope, leaves $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{7}{9}x + \\dfrac{2}{3}$",
                  "reason": "Slope-intercept form: adding $-7x$ to both sides of the second equation and dividing both sides by $-9$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{7}{c} \\cdot \\dfrac{7}{9} = -1$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the slopes are the coefficients of $x$ in the two lines above (the line $y = mx + b$ has slope $m$), and their product is $-1$."
                },
                {
                  "step": "$7 \\cdot \\dfrac{7}{9} = c$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-c$ clears the fraction."
                },
                {
                  "step": "$c = \\dfrac{49}{9}$",
                  "reason": "Order of operations: the product is worked out."
                }
              ]
            },
            {
              "prompt": "Find $c$ if the line $3x + cy = -19$ is perpendicular to $9x + 7y = 8$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-27/7",
              "lines": [
                {
                  "step": "Find $c$ if the line $3x + cy = -19$ is perpendicular to $9x + 7y = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{3}{c}x - \\dfrac{19}{c}$",
                  "reason": "Slope-intercept form: adding $-3x$ to both sides and dividing both sides by $c$, nonzero since the line has a slope, leaves $y$ alone."
                },
                {
                  "step": "$y = -\\dfrac{9}{7}x + \\dfrac{8}{7}$",
                  "reason": "Slope-intercept form: adding $-9x$ to both sides of the second equation and dividing both sides by $7$ leaves $y$ alone, as in $y = mx + b$."
                },
                {
                  "step": "$-\\dfrac{3}{c} \\cdot \\left(-\\dfrac{9}{7}\\right) = -1$",
                  "reason": "Slopes with product $-1$ mean perpendicular: the slopes are the coefficients of $x$ in the two lines above (the line $y = mx + b$ has slope $m$), and their product is $-1$."
                },
                {
                  "step": "$3 \\cdot \\left(-\\dfrac{9}{7}\\right) = c$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-c$ clears the fraction."
                },
                {
                  "step": "$c = -\\dfrac{27}{7}$",
                  "reason": "Order of operations: the product is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a$ if the lines $ax - 27y = 27$ and $4x + 9y = -9$ are the same line.",
            "lines": [
              {
                "step": "Find $a$ if the lines $ax - 27y = 27$ and $4x + 9y = -9$ are the same line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-3(4x + 9y) = -3 \\cdot (-9)$",
                "reason": "Multiplying both sides by the same number: $-3$ turns the coefficient $9$ of $y$ into $-27$, the coefficient in the first equation."
              },
              {
                "step": "$-12x - 27y = 27$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$a = -12$",
                "reason": "Equal slopes mean parallel or the same line: with the same coefficients of $y$, the first equation gives the same slope and $y$-intercept as $-12x - 27y = 27$ only when its other number matches."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $c$ if the lines $-30x + 40y = c$ and $18x - 24y = -33$ are the same line.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "55",
              "lines": [
                {
                  "step": "Find $c$ if the lines $-30x + 40y = c$ and $18x - 24y = -33$ are the same line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{5}{3}(18x - 24y) = -\\dfrac{5}{3} \\cdot (-33)$",
                  "reason": "Multiplying both sides by the same number: $-\\dfrac{5}{3}$ turns the coefficient $-24$ of $y$ into $40$, the coefficient in the first equation."
                },
                {
                  "step": "$-30x + 40y = 55$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$c = 55$",
                  "reason": "Equal slopes mean parallel or the same line: with the same coefficients of $y$, the first equation gives the same slope and $y$-intercept as $-30x + 40y = 55$ only when its other number matches."
                }
              ]
            },
            {
              "prompt": "Find $a$ if the lines $ax + 12y = 30$ and $5x - 4y = -10$ are the same line.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-15",
              "lines": [
                {
                  "step": "Find $a$ if the lines $ax + 12y = 30$ and $5x - 4y = -10$ are the same line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3(5x - 4y) = -3 \\cdot (-10)$",
                  "reason": "Multiplying both sides by the same number: $-3$ turns the coefficient $-4$ of $y$ into $12$, the coefficient in the first equation."
                },
                {
                  "step": "$-15x + 12y = 30$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$a = -15$",
                  "reason": "Equal slopes mean parallel or the same line: with the same coefficients of $y$, the first equation gives the same slope and $y$-intercept as $-15x + 12y = 30$ only when its other number matches."
                }
              ]
            },
            {
              "prompt": "Find $c$ if the lines $-10x + 10y = c$ and $6x - 6y = 27$ are the same line.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-45",
              "lines": [
                {
                  "step": "Find $c$ if the lines $-10x + 10y = c$ and $6x - 6y = 27$ are the same line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-\\dfrac{5}{3}(6x - 6y) = -\\dfrac{5}{3} \\cdot 27$",
                  "reason": "Multiplying both sides by the same number: $-\\dfrac{5}{3}$ turns the coefficient $-6$ of $y$ into $10$, the coefficient in the first equation."
                },
                {
                  "step": "$-10x + 10y = -45$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$c = -45$",
                  "reason": "Equal slopes mean parallel or the same line: with the same coefficients of $y$, the first equation gives the same slope and $y$-intercept as $-10x + 10y = -45$ only when its other number matches."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t127-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the line through $(6, 7)$ perpendicular to $4x - 24y = -11$ in standard form, and write that line right.",
            "given": [
              "$y = \\dfrac{1}{6}x + \\dfrac{11}{24}$",
              "$m = 6$",
              "$y - 7 = 6(x - 6)$",
              "$y - 7 = 6x - 36$",
              "$6x - y = 29$"
            ],
            "lines": [
              {
                "step": "The working is for the line through $(6, 7)$ perpendicular to $4x - 24y = -11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes the new slope as $1 \\div \\dfrac{1}{6} = 6$, so a sign is lost.",
                "reason": "A sign is lost: the new slope times $\\dfrac{1}{6}$ is $-1$, so it is $-6$, not $6$."
              },
              {
                "step": "Line 2 written right is $m = -6$.",
                "reason": "Slopes with product $-1$ mean perpendicular: the new slope times the given slope is $-1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the line through $(5, 4)$ perpendicular to $3x - 12y = -5$ in standard form, and write that line right.",
              "given": [
                "$y = \\dfrac{1}{4}x + \\dfrac{5}{12}$",
                "$m = -4$",
                "$y - 4 = -4(x - 5)$",
                "$y - 4 = -4x - 20$",
                "$4x + y = -16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y-4=-4*x+20",
              "lines": [
                {
                  "step": "The working is for the line through $(5, 4)$ perpendicular to $3x - 12y = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies $-4$ by $-5$ and writes $-20$, so a sign is lost.",
                  "reason": "A sign is lost: a negative number times a negative number is positive, so $-4 \\cdot (-5) = 20$."
                },
                {
                  "step": "Line 4 written right is $y - 4 = -4x + 20$.",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(7, 4)$ perpendicular to $4x - 20y = -1$ in standard form, and write that line right.",
              "given": [
                "$y = -\\dfrac{1}{5}x + \\dfrac{1}{20}$",
                "$m = 5$",
                "$y - 4 = 5(x - 7)$",
                "$y - 4 = 5x - 35$",
                "$5x - y = 31$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: y=(1/5)*x+(1/20)",
              "lines": [
                {
                  "step": "The working is for the line through $(7, 4)$ perpendicular to $4x - 20y = -1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes the slope of $4x - 20y = -1$ as $-\\dfrac{1}{5}$, so a sign is lost.",
                  "reason": "A sign is lost: adding $-4x$ to both sides and dividing both sides by $-20$ gives the coefficient $\\dfrac{-4}{-20} = \\dfrac{1}{5}$ for $x$."
                },
                {
                  "step": "Line 1 written right is $y = \\dfrac{1}{5}x + \\dfrac{1}{20}$.",
                  "reason": "Slope-intercept form: adding the $x$-term's opposite to both sides and dividing both sides by the coefficient of $y$ leaves $y$ alone, as in $y = mx + b$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(3, 6)$ perpendicular to $2x - 12y = 19$ in standard form, and write that line right.",
              "given": [
                "$y = \\dfrac{1}{6}x - \\dfrac{19}{12}$",
                "$m = -6$",
                "$y - 6 = -6(x - 3)$",
                "$y - 6 = -6x + 18$",
                "$6x + y = 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 6*x+y=24",
              "lines": [
                {
                  "step": "The working is for the line through $(3, 6)$ perpendicular to $2x - 12y = 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 moves $-6$ across and keeps its sign, so a sign is lost.",
                  "reason": "A sign is lost: adding $6$ to both sides puts $+6$ on the right, so the constant is $18 + 6 = 24$."
                },
                {
                  "step": "Line 5 written right is $6x + y = 24$.",
                  "reason": "Adding the same number to both sides: the constant moves across with its sign changed."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the line through $(8, 4)$ perpendicular to $4x + 5y = 5$ in standard form, and write that line right.",
            "given": [
              "$y = -\\dfrac{4}{5}x + 1$",
              "$m = \\dfrac{5}{4}$",
              "$y - 4 = \\dfrac{5}{4}(x + 8)$",
              "$4(y - 4) = 5(x + 8)$",
              "$4y - 16 = 5x + 40$",
              "$-56 = 5x - 4y$",
              "$5x - 4y = -56$"
            ],
            "lines": [
              {
                "step": "The working is for the line through $(8, 4)$ perpendicular to $4x + 5y = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 puts $x_1 = 8$ in as $x + 8$, so a sign is lost.",
                "reason": "A sign is lost: point-slope form has $x - x_1$, so $x_1 = 8$ gives $x - 8$."
              },
              {
                "step": "Line 3 written right is $y - 4 = \\dfrac{5}{4}(x - 8)$.",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the line through $(6, -8)$ perpendicular to $5x + 2y = -13$ in standard form, and write that line right.",
              "given": [
                "$y = -\\dfrac{5}{2}x - \\dfrac{13}{2}$",
                "$m = \\dfrac{2}{5}$",
                "$y + 8 = \\dfrac{2}{5}(x - 6)$",
                "$5(y + 8) = 2(x - 6)$",
                "$5y - 40 = 2x - 12$",
                "$-28 = 2x - 5y$",
                "$2x - 5y = -28$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 5*y+40=2*x-12",
              "lines": [
                {
                  "step": "The working is for the line through $(6, -8)$ perpendicular to $5x + 2y = -13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies $5$ by $8$ and writes $-40$, so a sign is lost.",
                  "reason": "A sign is lost: $5 \\cdot 8 = 40$."
                },
                {
                  "step": "Line 5 written right is $5y + 40 = 2x - 12$.",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(-8, -5)$ perpendicular to $2x + 5y = 4$ in standard form, and write that line right.",
              "given": [
                "$y = -\\dfrac{2}{5}x + \\dfrac{4}{5}$",
                "$m = \\dfrac{5}{2}$",
                "$y + 5 = \\dfrac{5}{2}(x + 8)$",
                "$2(y + 5) = 5(x + 8)$",
                "$2y + 10 = 5x + 40$",
                "$50 = 5x - 2y$",
                "$5x - 2y = 50$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: -30=5*x-2*y",
              "lines": [
                {
                  "step": "The working is for the line through $(-8, -5)$ perpendicular to $2x + 5y = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 moves $40$ across and keeps its sign, so a sign is lost.",
                  "reason": "A sign is lost: adding $-40$ to both sides changes its sign, so the constant is $10 - 40 = -30$."
                },
                {
                  "step": "Line 6 written right is $-30 = 5x - 2y$.",
                  "reason": "Adding the same number to both sides: the constant moves across with its sign changed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the line through $(-2, -4)$ perpendicular to $5x + 4y = 14$ in standard form, and write that line right.",
              "given": [
                "$y = -\\dfrac{5}{4}x + \\dfrac{7}{2}$",
                "$m = \\dfrac{4}{5}$",
                "$y + 4 = \\dfrac{4}{5}(x + 2)$",
                "$5(y + 4) = 4(x + 2)$",
                "$5y - 20 = 4x + 8$",
                "$-28 = 4x - 5y$",
                "$4x - 5y = -28$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 5*y+20=4*x+8",
              "lines": [
                {
                  "step": "The working is for the line through $(-2, -4)$ perpendicular to $5x + 4y = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies $5$ by $4$ and writes $-20$, so a sign is lost.",
                  "reason": "A sign is lost: $5 \\cdot 4 = 20$."
                },
                {
                  "step": "Line 5 written right is $5y + 20 = 4x + 8$.",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t127-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(-3, 2)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
            "figure": {
              "file": "parallel-and-perpendicular-lines-1.svg",
              "alt": "Two straight lines, L and M. L passes through two marked points, one at (−3, 2); M passes through a marked point on the y-axis."
            },
            "lines": [
              {
                "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(-3, 2)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The other marked point of L is $(-1, 3)$, and M meets the $y$-axis at $(0, -3)$.",
                "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
              },
              {
                "step": "$m = \\dfrac{3 - 2}{-1 - (-3)}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{1}{2}$",
                "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
              },
              {
                "step": "The slope of M is $\\dfrac{1}{2}$.",
                "reason": "Equal slopes mean parallel or the same line: M is parallel to L, so its slope is the slope of L."
              },
              {
                "step": "$y = \\dfrac{1}{2}x - 3$",
                "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(2, -1)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
              "figure": {
                "file": "parallel-and-perpendicular-lines-2.svg",
                "alt": "Two straight lines, L and M. L passes through two marked points, one at (2, −1); M passes through a marked point on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/2*x+2",
              "lines": [
                {
                  "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(2, -1)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point of L is $(4, 0)$, and M meets the $y$-axis at $(0, 2)$.",
                  "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
                },
                {
                  "step": "$m = \\dfrac{0 - (-1)}{4 - 2}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{1}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
                },
                {
                  "step": "The slope of M is $\\dfrac{1}{2}$.",
                  "reason": "Equal slopes mean parallel or the same line: M is parallel to L, so its slope is the slope of L."
                },
                {
                  "step": "$y = \\dfrac{1}{2}x + 2$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            },
            {
              "prompt": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(5, 1)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
              "figure": {
                "file": "parallel-and-perpendicular-lines-3.svg",
                "alt": "Two straight lines, L and M. L passes through two marked points, one at (5, 1); M passes through a marked point on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/2*x+3",
              "lines": [
                {
                  "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(5, 1)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point of L is $(3, 2)$, and M meets the $y$-axis at $(0, 3)$.",
                  "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
                },
                {
                  "step": "$m = \\dfrac{2 - 1}{3 - 5}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = -\\dfrac{1}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
                },
                {
                  "step": "The slope of M is $-\\dfrac{1}{2}$.",
                  "reason": "Equal slopes mean parallel or the same line: M is parallel to L, so its slope is the slope of L."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}x + 3$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            },
            {
              "prompt": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(4, 3)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
              "figure": {
                "file": "parallel-and-perpendicular-lines-4.svg",
                "alt": "Two straight lines, L and M. L passes through two marked points, one at (4, 3); M passes through a marked point on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -2*x-1",
              "lines": [
                {
                  "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is parallel to L. One marked point of L is $(4, 3)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point of L is $(6, -1)$, and M meets the $y$-axis at $(0, -1)$.",
                  "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
                },
                {
                  "step": "$m = \\dfrac{-1 - 3}{6 - 4}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = -2$",
                  "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
                },
                {
                  "step": "The slope of M is $-2$.",
                  "reason": "Equal slopes mean parallel or the same line: M is parallel to L, so its slope is the slope of L."
                },
                {
                  "step": "$y = -2x - 1$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(4, 3)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
            "figure": {
              "file": "parallel-and-perpendicular-lines-12.svg",
              "alt": "Two straight lines, L and M. L passes through two marked points, one at (4, 3); M passes through a marked point on the y-axis."
            },
            "lines": [
              {
                "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(4, 3)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The other marked point of L is $(6, 7)$, and M meets the $y$-axis at $(0, 4)$.",
                "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
              },
              {
                "step": "$m = \\dfrac{7 - 3}{6 - 4}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = 2$",
                "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
              },
              {
                "step": "The slope of M is $-\\dfrac{1}{2}$.",
                "reason": "Slopes with product $-1$ mean perpendicular: the slope of M times $2$ is $-1$, so it is $-1 \\div 2 = -\\dfrac{1}{2}$."
              },
              {
                "step": "$y = -\\dfrac{1}{2}x + 4$",
                "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(-2, -4)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
              "figure": {
                "file": "parallel-and-perpendicular-lines-13.svg",
                "alt": "Two straight lines, L and M. L passes through two marked points, one at (−2, −4); M passes through a marked point on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*x-2",
              "lines": [
                {
                  "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(-2, -4)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point of L is $(-5, -3)$, and M meets the $y$-axis at $(0, -2)$.",
                  "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
                },
                {
                  "step": "$m = \\dfrac{-3 - (-4)}{-5 - (-2)}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = -\\dfrac{1}{3}$",
                  "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
                },
                {
                  "step": "The slope of M is $3$.",
                  "reason": "Slopes with product $-1$ mean perpendicular: the slope of M times $-\\dfrac{1}{3}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{1}{3}\\right) = 3$."
                },
                {
                  "step": "$y = 3x - 2$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            },
            {
              "prompt": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(3, 4)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
              "figure": {
                "file": "parallel-and-perpendicular-lines-14.svg",
                "alt": "Two straight lines, L and M. L passes through two marked points, one at (3, 4); M passes through a marked point on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2/3*x+3",
              "lines": [
                {
                  "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(3, 4)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point of L is $(1, 7)$, and M meets the $y$-axis at $(0, 3)$.",
                  "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
                },
                {
                  "step": "$m = \\dfrac{7 - 4}{1 - 3}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = -\\dfrac{3}{2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
                },
                {
                  "step": "The slope of M is $\\dfrac{2}{3}$.",
                  "reason": "Slopes with product $-1$ mean perpendicular: the slope of M times $-\\dfrac{3}{2}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{3}{2}\\right) = \\dfrac{2}{3}$."
                },
                {
                  "step": "$y = \\dfrac{2}{3}x + 3$",
                  "reason": "Slope-intercept form: the line with slope $m$ and $y$-intercept $(0, b)$ is $y = mx + b$, written as an equation."
                }
              ]
            },
            {
              "prompt": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(-3, -3)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
              "figure": {
                "file": "parallel-and-perpendicular-lines-15.svg",
                "alt": "Two straight lines, L and M. L passes through two marked points, one at (−3, −3); M passes through a marked point on the y-axis."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*x+1",
              "lines": [
                {
                  "step": "Write the equation of line M in the figure, with $y$ alone on the left. M is perpendicular to L. One marked point of L is $(-3, -3)$; read the other marked point of L, and the marked point of M on the $y$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point of L is $(-6, -2)$, and M meets the $y$-axis at $(0, 1)$.",
                  "reason": "Coordinates: each marked point sits on grid lines, and a point on the $y$-axis has $x$-coordinate $0$."
                },
                {
                  "step": "$m = \\dfrac{-2 - (-3)}{-6 - (-3)}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = -\\dfrac{1}{3}$",
                  "reason": "Subtraction as addition: each difference is worked out, and the quotient is written as a reduced fraction."
                },
                {
                  "step": "The slope of M is $3$.",
                  "reason": "Slopes with product $-1$ mean perpendicular: the slope of M times $-\\dfrac{1}{3}$ is $-1$, so it is $-1 \\div \\left(-\\dfrac{1}{3}\\right) = 3$."
                },
                {
                  "step": "$y = 3x + 1$",
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
      "id": "t127-p1",
      "method": "proof by cases",
      "statement": "Let $m$, $b_1$ and $b_2$ be numbers. Then the lines $y = mx + b_1$ and $y = mx + b_2$ share no point when $b_1$ and $b_2$ differ, so they are parallel, and they are the same line when $b_1 = b_2$.",
      "idea": "Look for a point on both lines. Taking one equation from the other removes $x$ and $y$ together and leaves $0 = b_1 - b_2$, which is false when the intercepts differ and says nothing new when they are equal.",
      "lines": [
        {
          "line": "Suppose the point $(x_0, y_0)$ is on both lines.",
          "reason": "the hypothesis, for a common point"
        },
        {
          "line": "Then $y_0 = mx_0 + b_1$ and $y_0 = mx_0 + b_2$.",
          "reason": "solution of a two-variable equation: each point of a graph satisfies its equation"
        },
        {
          "line": "So $0 = b_1 - b_2$.",
          "reason": "adding two equations: the first less the second, with $y_0 - y_0 = 0$ and $mx_0 - mx_0 = 0$"
        },
        {
          "line": "Case $b_1$ and $b_2$ differ: then $b_1 - b_2$ is nonzero, so the third line is false.",
          "reason": "the case"
        },
        {
          "line": "So no point is on both lines.",
          "reason": "every common point gives the third line, which is false in this case"
        },
        {
          "line": "So the two lines are parallel.",
          "reason": "parallel lines: two different lines that share no point"
        },
        {
          "line": "Case $b_1 = b_2$: then $mx + b_2$ is the expression $mx + b_1$.",
          "reason": "substituting a value: $b_1$ in place of $b_2$"
        },
        {
          "line": "So a point satisfies $y = mx + b_1$ exactly when it satisfies $y = mx + b_2$.",
          "reason": "solution of a two-variable equation"
        },
        {
          "line": "Therefore in this case the two graphs are the same line.",
          "reason": "graph of an equation: the points that satisfy it"
        }
      ]
    },
    {
      "id": "t127-p2",
      "method": "direct proof",
      "statement": "Let two perpendicular lines, neither of them vertical, have slopes $m_1$ and $m_2$. Then $m_1 m_2 = -1$.",
      "idea": "Go one step to the right from the point where the lines meet: the first line rises $m_1$, the second $m_2$. The three points make a right triangle, and the Pythagorean theorem on its sides gives $m_1 m_2 = -1$.",
      "lines": [
        {
          "line": "Let the two lines meet at $X = (x_0, y_0)$.",
          "reason": "perpendicular lines: the lines meet"
        },
        {
          "line": "The first line is $y - y_0 = m_1(x - x_0)$.",
          "reason": "point-slope form"
        },
        {
          "line": "At $x = x_0 + 1$ it gives $y = y_0 + m_1$, so $A = (x_0 + 1, y_0 + m_1)$ is on the first line.",
          "reason": "substituting a value: $x_0 + 1$ in place of $x$"
        },
        {
          "line": "In the same way $B = (x_0 + 1, y_0 + m_2)$ is on the second line.",
          "reason": "point-slope form, then substituting a value"
        },
        {
          "line": "The slopes $m_1$ and $m_2$ differ.",
          "reason": "equal slopes mean parallel or the same line: two lines through $X$ with equal slopes would be one line, not two perpendicular lines"
        },
        {
          "line": "So $A$ and $B$ are different points.",
          "reason": "the third and fourth lines: the $y$-coordinates $y_0 + m_1$ and $y_0 + m_2$ differ"
        },
        {
          "line": "The angle of triangle $XAB$ at $X$ is a right angle.",
          "reason": "perpendicular lines: the lines meet at a right angle"
        },
        {
          "line": "Then $XA^2 = 1^2 + m_1^2$.",
          "reason": "distance formula: the differences are $1$ and $m_1$"
        },
        {
          "line": "So $XA^2 = 1 + m_1^2$.",
          "reason": "order of operations: $1^2 = 1$"
        },
        {
          "line": "And $XB^2 = 1^2 + m_2^2$.",
          "reason": "distance formula: the differences are $1$ and $m_2$"
        },
        {
          "line": "So $XB^2 = 1 + m_2^2$.",
          "reason": "order of operations: $1^2 = 1$"
        },
        {
          "line": "And $AB^2 = 0^2 + (m_1 - m_2)^2$.",
          "reason": "distance formula: the differences are $0$ and $m_1 - m_2$"
        },
        {
          "line": "So $AB^2 = 0 + (m_1 - m_2)^2$.",
          "reason": "order of operations: $0^2 = 0$"
        },
        {
          "line": "So $AB^2 = (m_1 - m_2)^2$.",
          "reason": "adding $0$ leaves a number unchanged"
        },
        {
          "line": "So $XA^2 + XB^2 = AB^2$.",
          "reason": "Pythagorean theorem: $AB$ is opposite the right angle, so it is the hypotenuse"
        },
        {
          "line": "So $1 + m_1^2 + 1 + m_2^2 = (m_1 - m_2)^2$.",
          "reason": "substituting a value: the ninth, eleventh and fourteenth lines"
        },
        {
          "line": "So $2 + m_1^2 + m_2^2 = (m_1 - m_2)^2$.",
          "reason": "collecting like terms: $1 + 1 = 2$"
        },
        {
          "line": "So $2 + m_1^2 + m_2^2 = m_1^2 - m_1m_2 - m_2m_1 + m_2^2$.",
          "reason": "the distributive law: $(m_1 - m_2)(m_1 - m_2)$ multiplied out"
        },
        {
          "line": "So $2 + m_1^2 + m_2^2 = m_1^2 - 2m_1m_2 + m_2^2$.",
          "reason": "collecting like terms: $-m_1m_2 - m_2m_1 = -2m_1m_2$"
        },
        {
          "line": "So $2 = -2m_1m_2$.",
          "reason": "adding the same number to both sides: adding $-m_1^2 - m_2^2$"
        },
        {
          "line": "So $-1 = m_1m_2$.",
          "reason": "dividing both sides by a nonzero number: dividing by $-2$"
        },
        {
          "line": "Therefore $m_1m_2 = -1$.",
          "reason": "symmetric property"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t127-s1",
      "method": "proof by cases",
      "statement": "Let $a$, $b$ and $c$ be numbers, $a$ and $b$ not both $0$. Then every line parallel to the graph of $ax + by = c$ is the graph of $ax + by = e$ for a number $e$. May use: parallel lines, slope-intercept form, Vertical line $x = c$, substituting a value, adding the same number to both sides, multiplying both sides by the same number, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Let $\\ell$ be a line parallel to the graph of $ax + by = c$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Case $b$ nonzero: the given line is $y = mx + f$ with $m = -\\dfrac{a}{b}$ and $f = \\dfrac{c}{b}$.",
            "reason": "slope-intercept form"
          },
          {
            "line": "A vertical line $x = g$ meets it at $(g, mg + f)$.",
            "reason": "substituting a value: $g$ in place of $x$"
          },
          {
            "line": "So $\\ell$ is not vertical.",
            "reason": "parallel lines share no point"
          },
          {
            "line": "So $\\ell$ is $y = sx + d$ for numbers $s$ and $d$.",
            "reason": "slope-intercept form"
          },
          {
            "line": "If $s$ and $m$ differ, let $x_0 = \\dfrac{f - d}{s - m}$; then $(s - m)x_0 = f - d$.",
            "reason": "multiplying both sides by the same number: multiplying by $s - m$"
          },
          {
            "line": "So $sx_0 + d = mx_0 + f$, and the point of $\\ell$ with $x$-coordinate $x_0$ is on both lines.",
            "reason": "adding the same number to both sides: adding $mx_0 + d$"
          },
          {
            "line": "So $s = m$.",
            "reason": "parallel lines share no point"
          },
          {
            "line": "So $\\ell$ is $y = -\\dfrac{a}{b}x + d$.",
            "reason": "substituting a value"
          },
          {
            "line": "So $by = -ax + bd$.",
            "reason": "multiplying both sides by the same number: multiplying by $b$"
          },
          {
            "line": "So $ax + by = bd$, the form $ax + by = e$ with $e = bd$.",
            "reason": "adding the same number to both sides: adding $ax$"
          },
          {
            "line": "Case $b = 0$: then $a$ is nonzero, and the given line is $x = \\dfrac{c}{a}$, a vertical line.",
            "reason": "dividing both sides by a nonzero number, and Vertical line $x = c$"
          },
          {
            "line": "A line $y = sx + d$ meets it at $\\left(\\dfrac{c}{a}, \\dfrac{sc}{a} + d\\right)$.",
            "reason": "substituting a value: $\\dfrac{c}{a}$ in place of $x$"
          },
          {
            "line": "So $\\ell$ is a vertical line $x = g$.",
            "reason": "parallel lines share no point"
          },
          {
            "line": "So $ax = ag$, the form $ax + by = e$ with $e = ag$, since $b = 0$.",
            "reason": "multiplying both sides by the same number: multiplying by $a$"
          },
          {
            "line": "Therefore in both cases $\\ell$ is the graph of $ax + by = e$.",
            "reason": "the eleventh and fifteenth lines"
          }
        ]
      }
    },
    {
      "id": "t127-s2",
      "method": "proof of existence by construction",
      "statement": "Let $m_1$, $m_2$, $b_1$ and $b_2$ be numbers with $m_1$ and $m_2$ different. Then the lines $y = m_1x + b_1$ and $y = m_2x + b_2$ meet in exactly one point. May use: solution of a two-variable equation, substituting a value, adding the same number to both sides, multiplying both sides by the same number, dividing both sides by a nonzero number, common factor, transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $x_0 = \\dfrac{b_2 - b_1}{m_1 - m_2}$ and $y_0 = m_1x_0 + b_1$.",
            "reason": "the hypothesis: $m_1 - m_2$ is nonzero, so the quotient is a number"
          },
          {
            "line": "Then $(m_1 - m_2)x_0 = b_2 - b_1$.",
            "reason": "multiplying both sides by the same number: multiplying by $m_1 - m_2$"
          },
          {
            "line": "So $m_1x_0 + b_1 = m_2x_0 + b_2$.",
            "reason": "adding the same number to both sides: adding $m_2x_0 + b_1$"
          },
          {
            "line": "So $y_0 = m_2x_0 + b_2$.",
            "reason": "transitive property, with the first line"
          },
          {
            "line": "So $(x_0, y_0)$ is on both lines.",
            "reason": "solution of a two-variable equation: the first and fourth lines"
          },
          {
            "line": "Let $(x, y)$ be on both lines: then $m_1x + b_1 = m_2x + b_2$.",
            "reason": "transitive property: both sides equal $y$"
          },
          {
            "line": "So $m_1x - m_2x = b_2 - b_1$.",
            "reason": "adding the same number to both sides: adding $-m_2x - b_1$"
          },
          {
            "line": "So $(m_1 - m_2)x = b_2 - b_1$.",
            "reason": "common factor: $m_1x - m_2x = (m_1 - m_2)x$"
          },
          {
            "line": "So $x = x_0$.",
            "reason": "dividing both sides by a nonzero number: dividing by $m_1 - m_2$"
          },
          {
            "line": "So $y = m_1x_0 + b_1 = y_0$.",
            "reason": "substituting a value: $x_0$ in place of $x$"
          },
          {
            "line": "Therefore the lines meet in exactly one point, $(x_0, y_0)$.",
            "reason": "the fifth and tenth lines"
          }
        ]
      }
    },
    {
      "id": "t127-s3",
      "method": "direct proof",
      "statement": "Let $L_1$, $L_2$ and $L_3$ be lines, none vertical or horizontal, with $L_1$ perpendicular to $L_2$ and $L_2$ perpendicular to $L_3$. Then $L_1$ and $L_3$ are parallel or the same line. May use: positive, negative, zero and undefined slope, slopes with product $-1$ mean perpendicular, equal slopes mean parallel or the same line, dividing both sides by a nonzero number, transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $m_1$, $m_2$ and $m_3$ be the slopes of $L_1$, $L_2$ and $L_3$, each nonzero.",
            "reason": "the hypothesis, with positive, negative, zero and undefined slope: a line that is not horizontal has a slope other than $0$"
          },
          {
            "line": "Then $m_1m_2 = -1$.",
            "reason": "slopes with product $-1$ mean perpendicular: $L_1$ and $L_2$"
          },
          {
            "line": "And $m_2m_3 = -1$.",
            "reason": "slopes with product $-1$ mean perpendicular: $L_2$ and $L_3$"
          },
          {
            "line": "So $m_1 = -\\dfrac{1}{m_2}$.",
            "reason": "dividing both sides by a nonzero number: dividing by $m_2$"
          },
          {
            "line": "So $m_3 = -\\dfrac{1}{m_2}$.",
            "reason": "dividing both sides by a nonzero number: dividing the third line by $m_2$"
          },
          {
            "line": "So $m_1 = m_3$.",
            "reason": "transitive property"
          },
          {
            "line": "Therefore $L_1$ and $L_3$ are parallel or the same line.",
            "reason": "equal slopes mean parallel or the same line"
          }
        ]
      }
    }
  ]
}
