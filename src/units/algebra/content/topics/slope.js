export default {
  "number": 124,
  "title": "Slope",
  "section": 5,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "217-228"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the slope of the line through $(2, -1)$ and $(-4, 7)$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-4/3",
    "solution": [
      "Find the slope of the line through $(2, -1)$ and $(-4, 7)$.",
      "$m = \\dfrac{7 - (-1)}{-4 - 2}$",
      "$m = \\dfrac{8}{-6}$",
      "$m = -\\dfrac{8}{6}$",
      "$m = -\\dfrac{4}{3}$"
    ]
  },
  "ideas": [
    {
      "name": "Slope",
      "concrete": "From $(1, 1)$ to $(4, 7)$ the change in $y$ is $7 - 1 = 6$ and the change in $x$ is $4 - 1 = 3$, so the slope of the line through them is $\\dfrac{6}{3} = 2$.",
      "general": "For points $(x_1, y_1)$ and $(x_2, y_2)$ with $x_1$ other than $x_2$, the **slope** of the line through them is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$: the change in $y$ over the change in $x$, the two differences taken in the same order.",
      "figure": {
        "file": "slope-1.svg",
        "alt": "A segment from (1, 1) to (4, 7) with a horizontal leg of 3 and a vertical leg of 6."
      }
    },
    {
      "name": "Positive, negative, zero and undefined slope",
      "concrete": "The line through $(0, 1)$ and $(2, 5)$ goes up from left to right and has slope $2$; the line through $(-1, 3)$ and $(4, 3)$ is horizontal and has slope $\\dfrac{0}{5} = 0$; the line through $(2, -1)$ and $(2, 4)$ is vertical, and $\\dfrac{5}{0}$ is not defined.",
      "general": "For a line, the slope is **positive** when the line goes up from left to right and **negative** when it goes down; it is **zero** when the line is horizontal, its points sharing one $y$-coordinate, and **undefined** when the line is vertical, its points sharing one $x$-coordinate."
    },
    {
      "name": "Steepness",
      "concrete": "From $(0, 0)$ the line to $(1, 3)$ rises $3$ over a run of $1$, slope $3$, and is steeper than a line of slope $1$; the line to $(3, 1)$ rises $1$ over a run of $3$, slope $\\dfrac{1}{3}$, and is flatter.",
      "general": "For a line that is not vertical, the larger the size $|m|$ of its slope, the steeper the line: a slope above $1$ or below $-1$ means the rise or fall is larger than the run, and a slope between $-1$ and $1$ means it is smaller."
    },
    {
      "name": "Collinear points have equal slopes",
      "concrete": "For $(0, 1)$, $(1, 3)$ and $(3, 7)$ the slope from the first point to the second is $2$ and from the first to the third is $\\dfrac{6}{3} = 2$, so the three points lie on one line.",
      "general": "Three points with different $x$-coordinates are **collinear**, on one line, exactly when the slope from the first point to the second equals the slope from the first point to the third."
    }
  ],
  "kinds": [
    {
      "id": "t124-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the slope of the line through $(-1, 8)$ and $(-9, -4)$.",
            "lines": [
              {
                "step": "Find the slope of the line through $(-1, 8)$ and $(-9, -4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m = \\dfrac{-4 - 8}{-9 - (-1)}$",
                "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{-12}{-8}$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$m = \\dfrac{12}{8}$",
                "reason": "Negative quotient identities: $\\dfrac{-a}{-b} = \\dfrac{a}{b}$, so the two minus signs cancel."
              },
              {
                "step": "$m = \\dfrac{3}{2}$",
                "reason": "Reduced fraction: dividing the top and the bottom by their common factor $4$ leaves the fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the slope of the line through $(4, -9)$ and $(2, 3)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Find the slope of the line through $(4, -9)$ and $(2, 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{3 - (-9)}{2 - 4}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{12}{-2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$m = -\\dfrac{12}{2}$",
                  "reason": "Negative quotient identities: $\\dfrac{a}{-b} = -\\dfrac{a}{b}$, so the minus sign is written in front."
                },
                {
                  "step": "$m = -6$",
                  "reason": "Reduced fraction: dividing the top and the bottom by their common factor $2$ leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the slope of the line through $(-7, -6)$ and $(-9, 0)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3",
              "lines": [
                {
                  "step": "Find the slope of the line through $(-7, -6)$ and $(-9, 0)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{0 - (-6)}{-9 - (-7)}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{6}{-2}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$m = -\\dfrac{6}{2}$",
                  "reason": "Negative quotient identities: $\\dfrac{a}{-b} = -\\dfrac{a}{b}$, so the minus sign is written in front."
                },
                {
                  "step": "$m = -3$",
                  "reason": "Reduced fraction: dividing the top and the bottom by their common factor $2$ leaves the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the slope of the line through $(8, 9)$ and $(-4, -5)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/6",
              "lines": [
                {
                  "step": "Find the slope of the line through $(8, 9)$ and $(-4, -5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-5 - 9}{-4 - 8}$",
                  "reason": "Slope: the slope through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{-14}{-12}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$m = \\dfrac{14}{12}$",
                  "reason": "Negative quotient identities: $\\dfrac{-a}{-b} = \\dfrac{a}{b}$, so the two minus signs cancel."
                },
                {
                  "step": "$m = \\dfrac{7}{6}$",
                  "reason": "Reduced fraction: dividing the top and the bottom by their common factor $2$ leaves the fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the slope of the line in the figure. One marked point is $(-1, 3)$; read the other from the grid.",
            "figure": {
              "file": "slope-2.svg",
              "alt": "A straight line through two marked points, one at (−1, 3), the other to its right."
            },
            "lines": [
              {
                "step": "Find the slope of the line in the figure. One marked point is $(-1, 3)$; read the other from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The other marked point is $(3, 6)$.",
                "reason": "Coordinates: the first coordinate gives the steps right or left of the origin, the second the steps up or down."
              },
              {
                "step": "From $(-1, 3)$ to $(3, 6)$ the run is $4$ and the rise is $3$.",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$m = \\dfrac{3}{4}$",
                "reason": "Slope: the change in $y$, $3$, over the change in $x$, $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the slope of the line in the figure. One marked point is $(-1, 2)$; read the other from the grid.",
              "figure": {
                "file": "slope-3.svg",
                "alt": "A straight line through two marked points, one at (−1, 2), the other to its right."
              },
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3/4",
              "lines": [
                {
                  "step": "Find the slope of the line in the figure. One marked point is $(-1, 2)$; read the other from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point is $(3, -1)$.",
                  "reason": "Coordinates: the first coordinate gives the steps right or left of the origin, the second the steps up or down."
                },
                {
                  "step": "From $(-1, 2)$ to $(3, -1)$ the run is $4$ and the fall is $3$.",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$m = -\\dfrac{3}{4}$",
                  "reason": "Slope: the change in $y$, $-3$, over the change in $x$, $4$."
                }
              ]
            },
            {
              "prompt": "Find the slope of the line in the figure. One marked point is $(-4, 3)$; read the other from the grid.",
              "figure": {
                "file": "slope-4.svg",
                "alt": "A straight line through two marked points, one at (−4, 3), the other to its right."
              },
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/3",
              "lines": [
                {
                  "step": "Find the slope of the line in the figure. One marked point is $(-4, 3)$; read the other from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point is $(-1, 4)$.",
                  "reason": "Coordinates: the first coordinate gives the steps right or left of the origin, the second the steps up or down."
                },
                {
                  "step": "From $(-4, 3)$ to $(-1, 4)$ the run is $3$ and the rise is $1$.",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$m = \\dfrac{1}{3}$",
                  "reason": "Slope: the change in $y$, $1$, over the change in $x$, $3$."
                }
              ]
            },
            {
              "prompt": "Find the slope of the line in the figure. One marked point is $(0, 4)$; read the other from the grid.",
              "figure": {
                "file": "slope-5.svg",
                "alt": "A straight line through two marked points, one at (0, 4), the other to its right."
              },
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-1/2",
              "lines": [
                {
                  "step": "Find the slope of the line in the figure. One marked point is $(0, 4)$; read the other from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other marked point is $(2, 3)$.",
                  "reason": "Coordinates: the first coordinate gives the steps right or left of the origin, the second the steps up or down."
                },
                {
                  "step": "From $(0, 4)$ to $(2, 3)$ the run is $2$ and the fall is $1$.",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$m = -\\dfrac{1}{2}$",
                  "reason": "Slope: the change in $y$, $-1$, over the change in $x$, $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t124-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the line through $(-4, 6)$ and $(-4, -5)$ has a slope.",
            "lines": [
              {
                "step": "Decide whether the line through $(-4, 6)$ and $(-4, -5)$ has a slope.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x_2 - x_1 = -4 - (-4) = 0$",
                "reason": "Subtraction as addition: the two points have the same $x$-coordinate, so the difference of the $x$-coordinates is $0$."
              },
              {
                "step": "$y_2 - y_1 = -5 - 6 = -11$",
                "reason": "Subtraction as addition: the difference of the $y$-coordinates is worked out."
              },
              {
                "step": "The quotient $\\dfrac{-11}{0}$ has denominator $0$.",
                "reason": "Division of rational numbers: a quotient $\\dfrac{a}{b}$ is defined only when $b$ is nonzero."
              },
              {
                "step": "No",
                "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $x$-coordinate is vertical, and its slope is undefined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the line through $(-2, -6)$ and $(-9, -6)$ has a slope.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the line through $(-2, -6)$ and $(-9, -6)$ has a slope.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_2 - x_1 = -9 - (-2) = -7$",
                  "reason": "Subtraction as addition: the two $x$-coordinates differ, so the difference is nonzero."
                },
                {
                  "step": "$y_2 - y_1 = -6 - (-6) = 0$",
                  "reason": "Subtraction as addition: the two points have the same $y$-coordinate, so the difference of the $y$-coordinates is $0$."
                },
                {
                  "step": "The quotient $\\dfrac{0}{-7}$ is $0$.",
                  "reason": "Division of rational numbers: $0$ divided by a nonzero number is $0$."
                },
                {
                  "step": "Yes",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $y$-coordinate is horizontal, and its slope is $0$."
                }
              ]
            },
            {
              "prompt": "Decide whether the line through $(6, 0)$ and $(-3, 0)$ has a slope.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the line through $(6, 0)$ and $(-3, 0)$ has a slope.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_2 - x_1 = -3 - 6 = -9$",
                  "reason": "Subtraction as addition: the two $x$-coordinates differ, so the difference is nonzero."
                },
                {
                  "step": "$y_2 - y_1 = 0 - 0 = 0$",
                  "reason": "Subtraction as addition: the two points have the same $y$-coordinate, so the difference of the $y$-coordinates is $0$."
                },
                {
                  "step": "The quotient $\\dfrac{0}{-9}$ is $0$.",
                  "reason": "Division of rational numbers: $0$ divided by a nonzero number is $0$."
                },
                {
                  "step": "Yes",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $y$-coordinate is horizontal, and its slope is $0$."
                }
              ]
            },
            {
              "prompt": "Decide whether the line through $(1, 4)$ and $(1, -9)$ has a slope.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the line through $(1, 4)$ and $(1, -9)$ has a slope.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_2 - x_1 = 1 - 1 = 0$",
                  "reason": "Subtraction as addition: the two points have the same $x$-coordinate, so the difference of the $x$-coordinates is $0$."
                },
                {
                  "step": "$y_2 - y_1 = -9 - 4 = -13$",
                  "reason": "Subtraction as addition: the difference of the $y$-coordinates is worked out."
                },
                {
                  "step": "The quotient $\\dfrac{-13}{0}$ has denominator $0$.",
                  "reason": "Division of rational numbers: a quotient $\\dfrac{a}{b}$ is defined only when $b$ is nonzero."
                },
                {
                  "step": "No",
                  "reason": "Positive, negative, zero and undefined slope: a line through two points with the same $x$-coordinate is vertical, and its slope is undefined."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t124-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the points $(4, 0)$, $(2, 1)$ and $(-2, 4)$ lie on one line.",
            "lines": [
              {
                "step": "Decide whether the points $(4, 0)$, $(2, 1)$ and $(-2, 4)$ lie on one line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m_1 = \\dfrac{1 - 0}{2 - 4}$",
                "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
              },
              {
                "step": "$m_1 = -\\dfrac{1}{2}$",
                "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
              },
              {
                "step": "$m_2 = \\dfrac{4 - 0}{-2 - 4}$",
                "reason": "Slope: the slope from the first point to the third, with each value put in place of its letter."
              },
              {
                "step": "$m_2 = -\\dfrac{2}{3}$",
                "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
              },
              {
                "step": "No",
                "reason": "Collinear points have equal slopes: $-\\dfrac{1}{2}$ and $-\\dfrac{2}{3}$ differ, so the three points are not on one line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the points $(1, 3)$, $(5, 0)$ and $(-11, 12)$ lie on one line.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the points $(1, 3)$, $(5, 0)$ and $(-11, 12)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m_1 = \\dfrac{0 - 3}{5 - 1}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m_1 = -\\dfrac{3}{4}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$m_2 = \\dfrac{12 - 3}{-11 - 1}$",
                  "reason": "Slope: the slope from the first point to the third, with each value put in place of its letter."
                },
                {
                  "step": "$m_2 = -\\dfrac{3}{4}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "Yes",
                  "reason": "Collinear points have equal slopes: the two lines from the first point have one slope, so they are one line."
                }
              ]
            },
            {
              "prompt": "Decide whether the points $(2, 1)$, $(-3, 2)$ and $(-8, 3)$ lie on one line.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the points $(2, 1)$, $(-3, 2)$ and $(-8, 3)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m_1 = \\dfrac{2 - 1}{-3 - 2}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m_1 = -\\dfrac{1}{5}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$m_2 = \\dfrac{3 - 1}{-8 - 2}$",
                  "reason": "Slope: the slope from the first point to the third, with each value put in place of its letter."
                },
                {
                  "step": "$m_2 = -\\dfrac{1}{5}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "Yes",
                  "reason": "Collinear points have equal slopes: the two lines from the first point have one slope, so they are one line."
                }
              ]
            },
            {
              "prompt": "Decide whether the points $(3, 2)$, $(6, -2)$ and $(-3, 9)$ lie on one line.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the points $(3, 2)$, $(6, -2)$ and $(-3, 9)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m_1 = \\dfrac{-2 - 2}{6 - 3}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m_1 = -\\dfrac{4}{3}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$m_2 = \\dfrac{9 - 2}{-3 - 3}$",
                  "reason": "Slope: the slope from the first point to the third, with each value put in place of its letter."
                },
                {
                  "step": "$m_2 = -\\dfrac{7}{6}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "No",
                  "reason": "Collinear points have equal slopes: $-\\dfrac{4}{3}$ and $-\\dfrac{7}{6}$ differ, so the three points are not on one line."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t124-k4",
      "forms": [
        {
          "example": {
            "problem": "Find a number $y$ for which $(-4, -3)$, $(5, -2)$ and $(-1, y)$ lie on one line.",
            "lines": [
              {
                "step": "Find a number $y$ for which $(-4, -3)$, $(5, -2)$ and $(-1, y)$ lie on one line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m = \\dfrac{-2 - (-3)}{5 - (-4)}$",
                "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
              },
              {
                "step": "$m = \\dfrac{1}{9}$",
                "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
              },
              {
                "step": "$\\dfrac{y - (-3)}{-1 - (-4)} = \\dfrac{1}{9}$",
                "reason": "Collinear points have equal slopes: the slope from the first point to $(-1, y)$ equals $m$."
              },
              {
                "step": "$\\dfrac{y + 3}{3} = \\dfrac{1}{9}$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$y + 3 = \\dfrac{1}{3}$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
              },
              {
                "step": "$y = -\\dfrac{8}{3}$",
                "reason": "Adding the same number to both sides: adding $-3$ to both sides leaves $y$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $y$ for which $(-6, 3)$, $(-1, 1)$ and $(-2, y)$ lie on one line.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 7/5",
              "lines": [
                {
                  "step": "Find a number $y$ for which $(-6, 3)$, $(-1, 1)$ and $(-2, y)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{1 - 3}{-1 - (-6)}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m = -\\dfrac{2}{5}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$\\dfrac{y - 3}{-2 - (-6)} = -\\dfrac{2}{5}$",
                  "reason": "Collinear points have equal slopes: the slope from the first point to $(-2, y)$ equals $m$."
                },
                {
                  "step": "$\\dfrac{y - 3}{4} = -\\dfrac{2}{5}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$y - 3 = -\\dfrac{8}{5}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ clears the fraction."
                },
                {
                  "step": "$y = \\dfrac{7}{5}$",
                  "reason": "Adding the same number to both sides: adding $3$ to both sides leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find a number $y$ for which $(6, -6)$, $(7, 2)$ and $(2, y)$ lie on one line.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -38",
              "lines": [
                {
                  "step": "Find a number $y$ for which $(6, -6)$, $(7, 2)$ and $(2, y)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{2 - (-6)}{7 - 6}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m = 8$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$\\dfrac{y - (-6)}{2 - 6} = 8$",
                  "reason": "Collinear points have equal slopes: the slope from the first point to $(2, y)$ equals $m$."
                },
                {
                  "step": "$\\dfrac{y + 6}{-4} = 8$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 6 = -32$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-4$ clears the fraction."
                },
                {
                  "step": "$y = -38$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find a number $y$ for which $(1, -7)$, $(7, 4)$ and $(-4, y)$ lie on one line.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -97/6",
              "lines": [
                {
                  "step": "Find a number $y$ for which $(1, -7)$, $(7, 4)$ and $(-4, y)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{4 - (-7)}{7 - 1}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m = \\dfrac{11}{6}$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$\\dfrac{y - (-7)}{-4 - 1} = \\dfrac{11}{6}$",
                  "reason": "Collinear points have equal slopes: the slope from the first point to $(-4, y)$ equals $m$."
                },
                {
                  "step": "$\\dfrac{y + 7}{-5} = \\dfrac{11}{6}$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$y + 7 = -\\dfrac{55}{6}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $-5$ clears the fraction."
                },
                {
                  "step": "$y = -\\dfrac{97}{6}$",
                  "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves $y$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $x$ for which $(4, 2)$, $(5, -2)$ and $(x, 3)$ lie on one line.",
            "lines": [
              {
                "step": "Find a number $x$ for which $(4, 2)$, $(5, -2)$ and $(x, 3)$ lie on one line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m = \\dfrac{-2 - 2}{5 - 4}$",
                "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
              },
              {
                "step": "$m = -4$",
                "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
              },
              {
                "step": "$\\dfrac{3 - 2}{x - 4} = -4$",
                "reason": "Collinear points have equal slopes: the slope from the first point to $(x, 3)$ equals $m$."
              },
              {
                "step": "$\\dfrac{1}{x - 4} = -4$",
                "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
              },
              {
                "step": "$1 = -4(x - 4)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $x - 4$, which is nonzero because the third point and the first have different $x$-coordinates."
              },
              {
                "step": "$-4(x - 4) = 1$",
                "reason": "Symmetric property: the two sides of an equation may change places."
              },
              {
                "step": "$-4x + 16 = 1$",
                "reason": "Multiplying out: $-4$ multiplies each term of the bracket."
              },
              {
                "step": "$-4x = -15$",
                "reason": "Adding the same number to both sides: adding $-16$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{15}{4}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $x$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ for which $(-2, -1)$, $(-4, -7)$ and $(x, -12)$ lie on one line.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -17/3",
              "lines": [
                {
                  "step": "Find a number $x$ for which $(-2, -1)$, $(-4, -7)$ and $(x, -12)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-7 - (-1)}{-4 - (-2)}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m = 3$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$\\dfrac{-12 - (-1)}{x - (-2)} = 3$",
                  "reason": "Collinear points have equal slopes: the slope from the first point to $(x, -12)$ equals $m$."
                },
                {
                  "step": "$\\dfrac{-11}{x + 2} = 3$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$-11 = 3(x + 2)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $x + 2$, which is nonzero because the third point and the first have different $x$-coordinates."
                },
                {
                  "step": "$3(x + 2) = -11$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$3x + 6 = -11$",
                  "reason": "Multiplying out: $3$ multiplies each term of the bracket."
                },
                {
                  "step": "$3x = -17$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -\\dfrac{17}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $(1, -3)$, $(-1, 3)$ and $(x, -1)$ lie on one line.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1/3",
              "lines": [
                {
                  "step": "Find a number $x$ for which $(1, -3)$, $(-1, 3)$ and $(x, -1)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{3 - (-3)}{-1 - 1}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m = -3$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$\\dfrac{-1 - (-3)}{x - 1} = -3$",
                  "reason": "Collinear points have equal slopes: the slope from the first point to $(x, -1)$ equals $m$."
                },
                {
                  "step": "$\\dfrac{2}{x - 1} = -3$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$2 = -3(x - 1)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $x - 1$, which is nonzero because the third point and the first have different $x$-coordinates."
                },
                {
                  "step": "$-3(x - 1) = 2$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$-3x + 3 = 2$",
                  "reason": "Multiplying out: $-3$ multiplies each term of the bracket."
                },
                {
                  "step": "$-3x = -1$",
                  "reason": "Adding the same number to both sides: adding $-3$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{1}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $(1, -1)$, $(3, -9)$ and $(x, 3)$ lie on one line.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 0",
              "lines": [
                {
                  "step": "Find a number $x$ for which $(1, -1)$, $(3, -9)$ and $(x, 3)$ lie on one line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m = \\dfrac{-9 - (-1)}{3 - 1}$",
                  "reason": "Slope: the slope from the first point to the second, with each value put in place of its letter."
                },
                {
                  "step": "$m = -4$",
                  "reason": "Subtraction as addition, negative quotient identities and reduced fraction: each difference is worked out, a minus sign is written in front, and the quotient is reduced to lowest terms."
                },
                {
                  "step": "$\\dfrac{3 - (-1)}{x - 1} = -4$",
                  "reason": "Collinear points have equal slopes: the slope from the first point to $(x, 3)$ equals $m$."
                },
                {
                  "step": "$\\dfrac{4}{x - 1} = -4$",
                  "reason": "Subtraction as addition: each difference is worked out, and taking away a negative number adds its opposite."
                },
                {
                  "step": "$4 = -4(x - 1)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $x - 1$, which is nonzero because the third point and the first have different $x$-coordinates."
                },
                {
                  "step": "$-4(x - 1) = 4$",
                  "reason": "Symmetric property: the two sides of an equation may change places."
                },
                {
                  "step": "$-4x + 4 = 4$",
                  "reason": "Multiplying out: $-4$ multiplies each term of the bracket."
                },
                {
                  "step": "$-4x = 0$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 0$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $x$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t124-k5",
      "forms": [
        {
          "example": {
            "problem": "Find where the slope $m$ of the line drawn through $(0, -4)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
            "figure": {
              "file": "slope-13.svg",
              "alt": "A straight line on a grid, drawn through (0, −4)."
            },
            "lines": [
              {
                "step": "Find where the slope $m$ of the line drawn through $(0, -4)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "From left to right the line goes up.",
                "reason": "Positive, negative, zero and undefined slope: a line that goes up from left to right has positive slope."
              },
              {
                "step": "At a run of $1$ to the right from $(0, -4)$, the line passes above $(1, -3)$.",
                "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
              },
              {
                "step": "$m > 1$",
                "reason": "Steepness: a line going up that rises more than its run has slope above $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find where the slope $m$ of the line drawn through $(4, -3)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
              "figure": {
                "file": "slope-14.svg",
                "alt": "A straight line on a grid, drawn through (4, −3)."
              },
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-1 < m < 0",
              "lines": [
                {
                  "step": "Find where the slope $m$ of the line drawn through $(4, -3)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the line goes down.",
                  "reason": "Positive, negative, zero and undefined slope: a line that goes down from left to right has negative slope."
                },
                {
                  "step": "At a run of $1$ to the right from $(4, -3)$, the line passes above $(5, -4)$.",
                  "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
                },
                {
                  "step": "$-1 < m < 0$",
                  "reason": "Steepness: a line going down that falls less than its run has slope between $-1$ and $0$."
                }
              ]
            },
            {
              "prompt": "Find where the slope $m$ of the line drawn through $(0, 2)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
              "figure": {
                "file": "slope-15.svg",
                "alt": "A straight line on a grid, drawn through (0, 2)."
              },
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "0 < m < 1",
              "lines": [
                {
                  "step": "Find where the slope $m$ of the line drawn through $(0, 2)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the line goes up.",
                  "reason": "Positive, negative, zero and undefined slope: a line that goes up from left to right has positive slope."
                },
                {
                  "step": "At a run of $1$ to the right from $(0, 2)$, the line passes below $(1, 3)$.",
                  "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
                },
                {
                  "step": "$0 < m < 1$",
                  "reason": "Steepness: a line going up that rises less than its run has slope between $0$ and $1$."
                }
              ]
            },
            {
              "prompt": "Find where the slope $m$ of the line drawn through $(2, 0)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
              "figure": {
                "file": "slope-16.svg",
                "alt": "A straight line on a grid, drawn through (2, 0)."
              },
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "m < -1",
              "lines": [
                {
                  "step": "Find where the slope $m$ of the line drawn through $(2, 0)$ lies: above $1$, between $0$ and $1$, between $-1$ and $0$, or below $-1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the line goes down.",
                  "reason": "Positive, negative, zero and undefined slope: a line that goes down from left to right has negative slope."
                },
                {
                  "step": "At a run of $1$ to the right from $(2, 0)$, the line passes below $(3, -1)$.",
                  "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
                },
                {
                  "step": "$m < -1$",
                  "reason": "Steepness: a line going down that falls more than its run has slope below $-1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the slope $m$ of the line in the figure, drawn through $(-3, -3)$.",
            "figure": {
              "file": "slope-31.svg",
              "alt": "A straight line on a grid, drawn through (−3, −3)."
            },
            "lines": [
              {
                "step": "Find the slope $m$ of the line in the figure, drawn through $(-3, -3)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "From left to right the line goes up.",
                "reason": "Positive, negative, zero and undefined slope: a line that goes up from left to right has positive slope."
              },
              {
                "step": "At a run of $1$ to the right from $(-3, -3)$, the line passes through $(-2, -2)$.",
                "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
              },
              {
                "step": "$m = 1$",
                "reason": "Steepness: a rise or fall equal to the run gives slope $1$ or $-1$, and a line that neither rises nor falls over its run has slope $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the slope $m$ of the line in the figure, drawn through $(-2, 2)$.",
              "figure": {
                "file": "slope-32.svg",
                "alt": "A straight line on a grid, drawn through (−2, 2)."
              },
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "m = -1",
              "lines": [
                {
                  "step": "Find the slope $m$ of the line in the figure, drawn through $(-2, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the line goes down.",
                  "reason": "Positive, negative, zero and undefined slope: a line that goes down from left to right has negative slope."
                },
                {
                  "step": "At a run of $1$ to the right from $(-2, 2)$, the line passes through $(-1, 1)$.",
                  "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
                },
                {
                  "step": "$m = -1$",
                  "reason": "Steepness: a rise or fall equal to the run gives slope $1$ or $-1$, and a line that neither rises nor falls over its run has slope $0$."
                }
              ]
            },
            {
              "prompt": "Find the slope $m$ of the line in the figure, drawn through $(-1, 2)$.",
              "figure": {
                "file": "slope-33.svg",
                "alt": "A straight line on a grid, drawn through (−1, 2)."
              },
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "m = 0",
              "lines": [
                {
                  "step": "Find the slope $m$ of the line in the figure, drawn through $(-1, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the line is level.",
                  "reason": "Positive, negative, zero and undefined slope: a line that is horizontal has slope $0$."
                },
                {
                  "step": "At a run of $1$ to the right from $(-1, 2)$, the line passes through $(0, 2)$.",
                  "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
                },
                {
                  "step": "$m = 0$",
                  "reason": "Steepness: a rise or fall equal to the run gives slope $1$ or $-1$, and a line that neither rises nor falls over its run has slope $0$."
                }
              ]
            },
            {
              "prompt": "Find the slope $m$ of the line in the figure, drawn through $(2, 1)$.",
              "figure": {
                "file": "slope-34.svg",
                "alt": "A straight line on a grid, drawn through (2, 1)."
              },
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "m = 1",
              "lines": [
                {
                  "step": "Find the slope $m$ of the line in the figure, drawn through $(2, 1)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the line goes up.",
                  "reason": "Positive, negative, zero and undefined slope: a line that goes up from left to right has positive slope."
                },
                {
                  "step": "At a run of $1$ to the right from $(2, 1)$, the line passes through $(3, 2)$.",
                  "reason": "Slope: the slope is the change in $y$ over the change in $x$, so it compares the rise or fall with the run."
                },
                {
                  "step": "$m = 1$",
                  "reason": "Steepness: a rise or fall equal to the run gives slope $1$ or $-1$, and a line that neither rises nor falls over its run has slope $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t124-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the slope of the line through $(2, -8)$ and $(-9, 6)$, and write that line right.",
            "given": [
              "$m = \\dfrac{6 - (-8)}{-9 - 2}$",
              "$m = \\dfrac{-2}{-11}$",
              "$m = \\dfrac{2}{11}$"
            ],
            "lines": [
              {
                "step": "The working is for the slope of the line through $(2, -8)$ and $(-9, 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 works out $6 - (-8)$ as $-2$, so a sign is lost.",
                "reason": "A sign is lost: taking away $-8$ adds its opposite, so $6 - (-8) = 14$."
              },
              {
                "step": "Line 2 written right is $m = \\dfrac{14}{-11}$.",
                "reason": "Slope: the change in $y$ over the change in $x$, both differences in the same order and each worked out with its sign, and the quotient keeps the sign they give."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the slope of the line through $(-9, 1)$ and $(-5, -7)$, and write that line right.",
              "given": [
                "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$",
                "$m = \\dfrac{-7 - 1}{-5 - (-9)}$",
                "$m = \\dfrac{-8}{4}$",
                "$m = \\dfrac{8}{4}$",
                "$m = 2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: m = -8/4",
              "lines": [
                {
                  "step": "The working is for the slope of the line through $(-9, 1)$ and $(-5, -7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 drops the one minus sign of $\\dfrac{-8}{4}$, so a sign is lost.",
                  "reason": "A sign is lost: a quotient with one negative part is negative, so the minus sign is written in front."
                },
                {
                  "step": "Line 4 written right is $m = -\\dfrac{8}{4}$.",
                  "reason": "Slope: the change in $y$ over the change in $x$, both differences in the same order and each worked out with its sign, and the quotient keeps the sign they give."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the slope of the line through $(6, 4)$ and $(2, -4)$, and write that line right.",
              "given": [
                "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$",
                "$m = \\dfrac{4 - (-4)}{2 - 6}$",
                "$m = \\dfrac{8}{-4}$",
                "$m = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: m = (-4-4)/(2-6)",
              "lines": [
                {
                  "step": "The working is for the slope of the line through $(6, 4)$ and $(2, -4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $y_1 - y_2$ on top but $x_2 - x_1$ below, so a sign is lost.",
                  "reason": "A sign is lost: one difference taken in the opposite order is the opposite number, so the quotient comes out with the wrong sign."
                },
                {
                  "step": "Line 2 written right is $m = \\dfrac{-4 - 4}{2 - 6}$.",
                  "reason": "Slope: the change in $y$ over the change in $x$, both differences in the same order and each worked out with its sign, and the quotient keeps the sign they give."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the slope of the line through $(3, 8)$ and $(-9, -1)$, and write that line right.",
              "given": [
                "$m = \\dfrac{-1 - 8}{-9 - 3}$",
                "$m = \\dfrac{-9}{-12}$",
                "$m = -\\dfrac{3}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: m = 3/4",
              "lines": [
                {
                  "step": "The working is for the slope of the line through $(3, 8)$ and $(-9, -1)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 reduces $\\dfrac{-9}{-12}$ to $-\\dfrac{3}{4}$, with the wrong sign, so a sign is lost.",
                  "reason": "A sign is lost: the two minus signs cancel."
                },
                {
                  "step": "Line 3 written right is $m = \\dfrac{3}{4}$.",
                  "reason": "Slope: the change in $y$ over the change in $x$, both differences in the same order and each worked out with its sign, and the quotient keeps the sign they give."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t124-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the slope of the line joining $(x, 2)$ to $(-2, -1)$.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the slope of the line joining $(x, 2)$ to $(-2, -1)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The words \"the number $y$ is\" become $y =$, and the slope becomes the right side.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = \\dfrac{-1 - 2}{-2 - x}$",
                "reason": "Slope: the change in $y$ over the change in $x$, with each value put in place of its letter."
              },
              {
                "step": "$y = -\\dfrac{3}{-2 - x}$",
                "reason": "Subtraction as addition and negative quotient identities: each difference is worked out, and a negative quotient is written with the minus sign in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $z$ in terms of $y$, with $z$ alone on the left: The number $z$ is the slope of the line from $(-1, y)$ to $(6, 3)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (3-y)/7",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z$ in terms of $y$, with $z$ alone on the left: The number $z$ is the slope of the line from $(-1, y)$ to $(6, 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $z$ is\" become $z =$, and the slope becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$z = \\dfrac{3 - y}{6 - (-1)}$",
                  "reason": "Slope: the change in $y$ over the change in $x$, with each value put in place of its letter."
                },
                {
                  "step": "$z = \\dfrac{3 - y}{7}$",
                  "reason": "Subtraction as addition and negative quotient identities: each difference is worked out, and a negative quotient is written with the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the change in height of the line through $(-8, 7)$ and $(7, 3)$ as it runs $x$ to the right.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -4/15*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the change in height of the line through $(-8, 7)$ and $(7, 3)$ as it runs $x$ to the right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $y$ is\" become $y =$, and the change in height becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{3 - 7}{7 - (-8)} \\cdot x$",
                  "reason": "Slope: the change in $y$ over the change in $x$, with each value put in place of its letter."
                },
                {
                  "step": "$y = -\\dfrac{4}{15} \\cdot x$",
                  "reason": "Subtraction as addition and negative quotient identities: each difference is worked out, and a negative quotient is written with the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the slope from $(1, 4)$ to $(x, 0)$ minus the slope from $(1, 4)$ to $(8, 5)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -4/(x-1) - 1/7",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $y$ in terms of $x$, with $y$ alone on the left: The number $y$ is the slope from $(1, 4)$ to $(x, 0)$ minus the slope from $(1, 4)$ to $(8, 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"the number $y$ is\" become $y =$, and the difference of the two slopes becomes the right side.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{0 - 4}{x - 1} - \\dfrac{5 - 4}{8 - 1}$",
                  "reason": "Slope: the change in $y$ over the change in $x$, with each value put in place of its letter."
                },
                {
                  "step": "$y = -\\dfrac{4}{x - 1} - \\dfrac{1}{7}$",
                  "reason": "Subtraction as addition and negative quotient identities: each difference is worked out, and a negative quotient is written with the minus sign in front."
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
      "id": "t124-p1",
      "method": "direct proof",
      "statement": "Let $A$, $B$ and $C$ be numbers with $B$ nonzero. Then for two points of the graph of $Ax + By = C$ with different $x$-coordinates, the slope of the line through them is $-\\dfrac{A}{B}$.",
      "idea": "Write the equation once for each point and take one from the other: the constant goes, and what is left ties the change in $y$ to the change in $x$.",
      "lines": [
        {
          "line": "Let $(x_1, y_1)$ and $(x_2, y_2)$ be points of the graph of $Ax + By = C$ with $x_1$ other than $x_2$, and $B$ nonzero.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $Ax_1 + By_1 = C$ and $Ax_2 + By_2 = C$.",
          "reason": "solution of a two-variable equation: each point on the graph satisfies the equation"
        },
        {
          "line": "So $(Ax_2 + By_2) - (Ax_1 + By_1) = C - C$.",
          "reason": "adding two equations: the second equation is added to the first multiplied by $-1$"
        },
        {
          "line": "So $(Ax_2 + By_2) - (Ax_1 + By_1) = 0$.",
          "reason": "subtraction as addition: $C - C = 0$"
        },
        {
          "line": "So $A(x_2 - x_1) + B(y_2 - y_1) = 0$.",
          "reason": "collecting like terms"
        },
        {
          "line": "So $B(y_2 - y_1) = -A(x_2 - x_1)$.",
          "reason": "adding the same number to both sides: adding $-A(x_2 - x_1)$"
        },
        {
          "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-A(x_2 - x_1)}{B(x_2 - x_1)}$.",
          "reason": "dividing both sides by a nonzero number: dividing by $B(x_2 - x_1)$, nonzero by the hypothesis, as $B$ is nonzero and $x_1$ is other than $x_2$"
        },
        {
          "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-A}{B}$.",
          "reason": "cancelling a common factor: the factor $x_2 - x_1$"
        },
        {
          "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} = -\\dfrac{A}{B}$.",
          "reason": "negative quotient identities"
        },
        {
          "line": "Therefore the slope of the line through the two points is $-\\dfrac{A}{B}$.",
          "reason": "slope: the left side is the slope through $(x_1, y_1)$ and $(x_2, y_2)$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t124-s1",
      "method": "direct proof",
      "statement": "Let $A = (x_1, y_1)$, $B = (x_2, y_2)$ and $C = (x_3, y_3)$ have three different $x$-coordinates, and let the slope from $A$ to $B$ and the slope from $A$ to $C$ both equal $m$. Then $A$, $B$ and $C$ all satisfy the one linear equation $y - y_1 = m(x - x_1)$. May use: slope, multiplying both sides by the same number, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "By hypothesis $\\dfrac{y_2 - y_1}{x_2 - x_1} = m$.",
            "reason": "slope: the slope from $A$ to $B$"
          },
          {
            "line": "So $y_2 - y_1 = m(x_2 - x_1)$.",
            "reason": "multiplying both sides by the same number: multiplying by $x_2 - x_1$"
          },
          {
            "line": "So $B$ satisfies $y - y_1 = m(x - x_1)$.",
            "reason": "substituting a value: $x = x_2$ and $y = y_2$ give the second line"
          },
          {
            "line": "By hypothesis $\\dfrac{y_3 - y_1}{x_3 - x_1} = m$.",
            "reason": "slope: the slope from $A$ to $C$"
          },
          {
            "line": "So $y_3 - y_1 = m(x_3 - x_1)$.",
            "reason": "multiplying both sides by the same number: multiplying by $x_3 - x_1$"
          },
          {
            "line": "So $C$ satisfies $y - y_1 = m(x - x_1)$.",
            "reason": "substituting a value: $x = x_3$ and $y = y_3$ give the fifth line"
          },
          {
            "line": "Putting $x = x_1$ and $y = y_1$ in gives $y_1 - y_1 = m(x_1 - x_1)$, that is $0 = m \\cdot 0$.",
            "reason": "substituting a value"
          },
          {
            "line": "So $A$ satisfies it too, as $m \\cdot 0 = 0$.",
            "reason": "assumptions on multiplication: a number times $0$ is $0$"
          },
          {
            "line": "Therefore $A$, $B$ and $C$ all satisfy $y - y_1 = m(x - x_1)$.",
            "reason": "the third, sixth and eighth lines"
          }
        ]
      }
    },
    {
      "id": "t124-s2",
      "method": "direct proof",
      "statement": "Let $A = (x_1, y_1)$ and $B = (x_2, y_2)$ with $x_1$ other than $x_2$, and let $M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$ be the midpoint of the segment $AB$. Then the slope from $A$ to $M$ and the slope from $M$ to $B$ both equal the slope from $A$ to $B$. May use: slope, midpoint formula, the general subtraction formula for fractions, cancelling a common factor.",
      "check": {
        "proof": [
          {
            "line": "Let $M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\dfrac{y_1 + y_2}{2} - y_1 = \\dfrac{y_2 - y_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "Also $\\dfrac{x_1 + x_2}{2} - x_1 = \\dfrac{x_2 - x_1}{2}$, which is nonzero.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "So the slope from $A$ to $M$ is $\\dfrac{\\left(\\frac{y_2 - y_1}{2}\\right)}{\\left(\\frac{x_2 - x_1}{2}\\right)}$.",
            "reason": "slope, with the second and third lines"
          },
          {
            "line": "So the slope from $A$ to $M$ is $\\dfrac{y_2 - y_1}{x_2 - x_1}$.",
            "reason": "cancelling a common factor: the factor $\\dfrac{1}{2}$ on top and below"
          },
          {
            "line": "Also $y_2 - \\dfrac{y_1 + y_2}{2} = \\dfrac{y_2 - y_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "Also $x_2 - \\dfrac{x_1 + x_2}{2} = \\dfrac{x_2 - x_1}{2}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "So the slope from $M$ to $B$ is $\\dfrac{\\left(\\frac{y_2 - y_1}{2}\\right)}{\\left(\\frac{x_2 - x_1}{2}\\right)}$.",
            "reason": "slope, with the sixth and seventh lines"
          },
          {
            "line": "So the slope from $M$ to $B$ is $\\dfrac{y_2 - y_1}{x_2 - x_1}$.",
            "reason": "cancelling a common factor: the factor $\\dfrac{1}{2}$ on top and below"
          },
          {
            "line": "Therefore both slopes equal the slope from $A$ to $B$.",
            "reason": "slope: the slope from $A$ to $B$ is $\\dfrac{y_2 - y_1}{x_2 - x_1}$"
          }
        ]
      }
    },
    {
      "id": "t124-s3",
      "method": "direct proof",
      "statement": "Let $(x_1, y_1)$ and $(x_2, y_2)$ be points with $x_1$ less than $x_2$ and $y_2$ less than $y_1$. Then the slope of the line through them is negative. May use: slope, subtraction as addition, division of rational numbers, signs of products.",
      "check": {
        "proof": [
          {
            "line": "Let $x_1$ be less than $x_2$ and $y_2$ less than $y_1$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x_2 - x_1$ is positive.",
            "reason": "subtraction as addition: a smaller number taken from a larger one leaves a positive number"
          },
          {
            "line": "Also $y_2 - y_1$ is negative.",
            "reason": "subtraction as addition: a larger number taken from a smaller one leaves a negative number"
          },
          {
            "line": "So $\\dfrac{1}{x_2 - x_1}$ is positive.",
            "reason": "division of rational numbers: the reciprocal of a positive number is positive"
          },
          {
            "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} = (y_2 - y_1) \\cdot \\dfrac{1}{x_2 - x_1}$ is negative.",
            "reason": "signs of products: a negative number times a positive number is negative"
          },
          {
            "line": "Therefore the slope of the line through the two points is negative.",
            "reason": "slope"
          }
        ]
      }
    },
    {
      "id": "t124-s4",
      "method": "direct proof",
      "statement": "Let $(x_1, y_1)$ and $(x_2, y_2)$ be points with $x_1$ less than $x_2$, and let the rise $y_2 - y_1$ be larger than the run $x_2 - x_1$. Then the slope of the line through them is above $1$. May use: slope, subtraction as addition, the general subtraction formula for fractions, quotient of positive rational numbers.",
      "check": {
        "proof": [
          {
            "line": "Let $x_1$ be less than $x_2$, and let $y_2 - y_1$ be larger than $x_2 - x_1$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x_2 - x_1$ is positive.",
            "reason": "subtraction as addition: a smaller number taken from a larger one leaves a positive number"
          },
          {
            "line": "Also $(y_2 - y_1) - (x_2 - x_1)$ is positive.",
            "reason": "subtraction as addition: the smaller difference taken from the larger"
          },
          {
            "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} - 1 = \\dfrac{y_2 - y_1}{x_2 - x_1} - \\dfrac{x_2 - x_1}{x_2 - x_1}$.",
            "reason": "division of rational numbers: a nonzero number divided by itself is $1$"
          },
          {
            "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} - 1 = \\dfrac{(y_2 - y_1) - (x_2 - x_1)}{x_2 - x_1}$.",
            "reason": "the general subtraction formula for fractions"
          },
          {
            "line": "So $\\dfrac{y_2 - y_1}{x_2 - x_1} - 1$ is positive.",
            "reason": "quotient of positive rational numbers: the second and third lines"
          },
          {
            "line": "Therefore the slope $\\dfrac{y_2 - y_1}{x_2 - x_1}$ is above $1$.",
            "reason": "slope, with subtraction as addition: a number that leaves a positive number when $1$ is taken from it is above $1$"
          }
        ]
      }
    }
  ]
}
