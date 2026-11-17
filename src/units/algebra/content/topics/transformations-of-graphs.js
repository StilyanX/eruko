export default {
  "number": 164,
  "title": "Shifting, stretching and reflecting graphs",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "491-502, 506-511"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the point that $(-12, -13)$ on the graph of $y = g(x)$ moves to on the graph of $y = g(-x)$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(12, -13)",
    "solution": [
      "Find the point that $(-12, -13)$ on the graph of $y = g(x)$ moves to on the graph of $y = g(-x)$.",
      "The graph of $y = g(-x)$ is the mirror image of the graph of $y = g(x)$ in the $y$-axis.",
      "So $(-12, -13)$ moves to $(-(-12), -13)$.",
      "The point is $(12, -13)$."
    ]
  },
  "ideas": [
    {
      "name": "Shifting, stretching and reflecting graphs",
      "concrete": "The point $(6, -11)$ lies on the graph of $y = f(x)$, so $f(6) = -11$. The graph of $y = 4f(3x + 8) - 3$ takes at each $x$ the height of the graph of $y = f(x)$ at $3x + 8$. The input $6$ needs $3x + 8 = 6$, so $x = -\\dfrac{2}{3}$, and the height there is $4 \\cdot (-11) - 3 = -47$. So $(6, -11)$ moves to $\\left(-\\dfrac{2}{3}, -47\\right)$.",
      "general": "For a function $f$ and a number $k$, each point $(p, q)$ of the graph of $y = f(x)$ moves as follows. The graph of $y = f(x) + k$ is the graph moved $k$ units up, or $-k$ units down when $k < 0$: $(p, q)$ goes to $(p, q + k)$. The graph of $y = f(x + k)$ is the graph moved $k$ units to the left, or $-k$ units to the right when $k < 0$: $(p, q)$ goes to $(p - k, q)$. For $k > 0$, the graph of $y = kf(x)$ is the graph **scaled from the $x$-axis** by $k$: $(p, q)$ goes to $(p, kq)$. For $k > 0$, the graph of $y = f(kx)$ is the graph **scaled from the $y$-axis** by $\\dfrac{1}{k}$: $(p, q)$ goes to $\\left(\\dfrac{p}{k}, q\\right)$. The graph of $y = -f(x)$ is the graph **reflected in the $x$-axis**: $(p, q)$ goes to $(p, -q)$. The graph of $y = f(-x)$ is the graph **reflected in the $y$-axis**: $(p, q)$ goes to $(-p, q)$. Several changes are made in order from the inside of $f$ outwards: for numbers $a \\ne 0$, $b \\ne 0$, $c$ and $d$, the graph of $y = af(bx + c) + d$ takes $(p, q)$ to $\\left(\\dfrac{p - c}{b}, aq + d\\right)$. The order matters: shifting up by $d$ and then scaling by $a$ gives $y = a(f(x) + d)$, not $y = af(x) + d$."
    }
  ],
  "kinds": [
    {
      "id": "t164-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the point that $(-6, -13)$ on the graph of $y = h(x)$ moves to on the graph of $y = h\\left(\\dfrac{x}{4}\\right)$.",
            "lines": [
              {
                "step": "Find the point that $(-6, -13)$ on the graph of $y = h(x)$ moves to on the graph of $y = h\\left(\\dfrac{x}{4}\\right)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph of $y = h\\left(\\dfrac{x}{4}\\right)$ is the graph of $y = h(x)$ scaled from the $y$-axis by $4$.",
                "reason": "Shifting, stretching and reflecting graphs: for $k > 0$, the graph of $y = f(kx)$ is the graph of $y = f(x)$ with every distance from the $y$-axis multiplied by $\\dfrac{1}{k}$."
              },
              {
                "step": "So $(-6, -13)$ moves to $\\left(-6 \\cdot 4, -13\\right)$.",
                "reason": "Shifting, stretching and reflecting graphs: each point keeps its second coordinate, and its first coordinate is multiplied by $4$."
              },
              {
                "step": "The point is $(-24, -13)$.",
                "reason": "Order of operations: the coordinates are worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point that $(-13, 4)$ on the graph of $y = h(x)$ moves to on the graph of $y = h(x + 9)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-22, 4)",
              "lines": [
                {
                  "step": "Find the point that $(-13, 4)$ on the graph of $y = h(x)$ moves to on the graph of $y = h(x + 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = h(x + 9)$ is the graph of $y = h(x)$ moved 9 units to the left.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph of $y = f(x + k)$ is the graph of $y = f(x)$ moved $k$ to the left, or $-k$ to the right when $k < 0$."
                },
                {
                  "step": "So $(-13, 4)$ moves to $(-13 - 9, 4)$.",
                  "reason": "Shifting, stretching and reflecting graphs: each point keeps its second coordinate, and its first coordinate grows by $-9$."
                },
                {
                  "step": "The point is $(-22, 4)$.",
                  "reason": "Order of operations: the coordinates are worked out."
                }
              ]
            },
            {
              "prompt": "Find the point that $(10, -9)$ on the graph of $y = g(x)$ moves to on the graph of $y = -g(x)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(10, 9)",
              "lines": [
                {
                  "step": "Find the point that $(10, -9)$ on the graph of $y = g(x)$ moves to on the graph of $y = -g(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = -g(x)$ is the mirror image of the graph of $y = g(x)$ in the $x$-axis.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph of $y = -f(x)$ is the graph of $y = f(x)$ reflected in the $x$-axis."
                },
                {
                  "step": "So $(10, -9)$ moves to $(10, -(-9))$.",
                  "reason": "Shifting, stretching and reflecting graphs: each point keeps its first coordinate, and its second coordinate changes sign."
                },
                {
                  "step": "The point is $(10, 9)$.",
                  "reason": "Order of operations: the coordinates are worked out."
                }
              ]
            },
            {
              "prompt": "Find the point that $(3, -11)$ on the graph of $y = h(x)$ moves to on the graph of $y = 6h(x)$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, -66)",
              "lines": [
                {
                  "step": "Find the point that $(3, -11)$ on the graph of $y = h(x)$ moves to on the graph of $y = 6h(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = 6h(x)$ is the graph of $y = h(x)$ scaled from the $x$-axis by $6$.",
                  "reason": "Shifting, stretching and reflecting graphs: for $k > 0$, the graph of $y = kf(x)$ is the graph of $y = f(x)$ with every height multiplied by $k$."
                },
                {
                  "step": "So $(3, -11)$ moves to $(3, 6 \\cdot (-11))$.",
                  "reason": "Shifting, stretching and reflecting graphs: each point keeps its first coordinate, and its second coordinate is multiplied by $6$."
                },
                {
                  "step": "The point is $(3, -66)$.",
                  "reason": "Order of operations: the coordinates are worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the point that $(-19, -12)$ on the graph of $y = h(x)$ moves to on the graph of $y = -5h(3x + 5) + 12$.",
            "lines": [
              {
                "step": "Find the point that $(-19, -12)$ on the graph of $y = h(x)$ moves to on the graph of $y = -5h(3x + 5) + 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x + 5 = -19$",
                "reason": "Graph of a function: the new graph takes the height of the graph of $y = h(x)$ at the input $-19$, so the expression inside $h$ must equal $-19$."
              },
              {
                "step": "$3x = -24$",
                "reason": "Adding the same number to both sides: $5$ is taken from each side."
              },
              {
                "step": "$x = -8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$y = -5 \\cdot (-12) + 12 = 72$",
                "reason": "Substituting a value: $h(-19) = -12$, in brackets, goes in place of $h(3x + 5)$."
              },
              {
                "step": "The point is $(-8, 72)$.",
                "reason": "Shifting, stretching and reflecting graphs: the input is undone from the inside of $h$ outwards, and the height is built up in the order the formula gives it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point that $(20, 3)$ on the graph of $y = f(x)$ moves to on the graph of $y = -3f(4x + 4) - 2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -11)",
              "lines": [
                {
                  "step": "Find the point that $(20, 3)$ on the graph of $y = f(x)$ moves to on the graph of $y = -3f(4x + 4) - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 4 = 20$",
                  "reason": "Graph of a function: the new graph takes the height of the graph of $y = f(x)$ at the input $20$, so the expression inside $f$ must equal $20$."
                },
                {
                  "step": "$4x = 16$",
                  "reason": "Adding the same number to both sides: $4$ is taken from each side."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$y = -3 \\cdot 3 - 2 = -11$",
                  "reason": "Substituting a value: $f(20) = 3$, in brackets, goes in place of $f(4x + 4)$."
                },
                {
                  "step": "The point is $(4, -11)$.",
                  "reason": "Shifting, stretching and reflecting graphs: the input is undone from the inside of $f$ outwards, and the height is built up in the order the formula gives it."
                }
              ]
            },
            {
              "prompt": "Find the point that $(-7, -8)$ on the graph of $y = f(x)$ moves to on the graph of $y = 3f(3x + 8) + 8$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-5, -16)",
              "lines": [
                {
                  "step": "Find the point that $(-7, -8)$ on the graph of $y = f(x)$ moves to on the graph of $y = 3f(3x + 8) + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x + 8 = -7$",
                  "reason": "Graph of a function: the new graph takes the height of the graph of $y = f(x)$ at the input $-7$, so the expression inside $f$ must equal $-7$."
                },
                {
                  "step": "$3x = -15$",
                  "reason": "Adding the same number to both sides: $8$ is taken from each side."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$y = 3 \\cdot (-8) + 8 = -16$",
                  "reason": "Substituting a value: $f(-7) = -8$, in brackets, goes in place of $f(3x + 8)$."
                },
                {
                  "step": "The point is $(-5, -16)$.",
                  "reason": "Shifting, stretching and reflecting graphs: the input is undone from the inside of $f$ outwards, and the height is built up in the order the formula gives it."
                }
              ]
            },
            {
              "prompt": "Find the point that $(10, -7)$ on the graph of $y = g(x)$ moves to on the graph of $y = 3g(-3x + 1) - 15$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-3, -36)",
              "lines": [
                {
                  "step": "Find the point that $(10, -7)$ on the graph of $y = g(x)$ moves to on the graph of $y = 3g(-3x + 1) - 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x + 1 = 10$",
                  "reason": "Graph of a function: the new graph takes the height of the graph of $y = g(x)$ at the input $10$, so the expression inside $g$ must equal $10$."
                },
                {
                  "step": "$-3x = 9$",
                  "reason": "Adding the same number to both sides: $1$ is taken from each side."
                },
                {
                  "step": "$x = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "$y = 3 \\cdot (-7) - 15 = -36$",
                  "reason": "Substituting a value: $g(10) = -7$, in brackets, goes in place of $g(-3x + 1)$."
                },
                {
                  "step": "The point is $(-3, -36)$.",
                  "reason": "Shifting, stretching and reflecting graphs: the input is undone from the inside of $g$ outwards, and the height is built up in the order the formula gives it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t164-k2",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the graph made from $y = x^3$ by a shift of 7 units to the left, then a scaling from the $x$-axis by $3$, then a scaling from the $y$-axis by $4$, with $y$ alone on the left.",
            "lines": [
              {
                "step": "Write the equation of the graph made from $y = x^3$ by a shift of 7 units to the left, then a scaling from the $x$-axis by $3$, then a scaling from the $y$-axis by $4$, with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = (x + 7)^3$",
                "reason": "Shifting, stretching and reflecting graphs: moving the graph 7 units to the left puts $x + 7$ in place of $x$."
              },
              {
                "step": "$y = 3(x + 7)^3$",
                "reason": "Shifting, stretching and reflecting graphs: every height is multiplied by $3$, so the whole right side is."
              },
              {
                "step": "$y = 3\\left(\\dfrac{x}{4} + 7\\right)^3$",
                "reason": "Shifting, stretching and reflecting graphs: scaling from the $y$-axis by $4$ puts $\\dfrac{x}{4}$ in place of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the graph made from $y = x^3$ by a shift of 8 units to the left, then a reflection in the $y$-axis, then a scaling from the $y$-axis by $3$, with $y$ alone on the left.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (-x/3+8)^3",
              "lines": [
                {
                  "step": "Write the equation of the graph made from $y = x^3$ by a shift of 8 units to the left, then a reflection in the $y$-axis, then a scaling from the $y$-axis by $3$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = (x + 8)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: moving the graph 8 units to the left puts $x + 8$ in place of $x$."
                },
                {
                  "step": "$y = (-x + 8)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: the mirror image in the $y$-axis puts $-x$ in place of $x$."
                },
                {
                  "step": "$y = \\left(-\\dfrac{x}{3} + 8\\right)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: scaling from the $y$-axis by $3$ puts $\\dfrac{x}{3}$ in place of $x$."
                }
              ]
            },
            {
              "prompt": "Write the equation of the graph made from $y = x^3$ by a scaling from the $y$-axis by $\\dfrac{1}{3}$, then a shift of 4 units to the left, then a reflection in the $y$-axis, with $y$ alone on the left.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (-3*x+12)^3",
              "lines": [
                {
                  "step": "Write the equation of the graph made from $y = x^3$ by a scaling from the $y$-axis by $\\dfrac{1}{3}$, then a shift of 4 units to the left, then a reflection in the $y$-axis, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = (3x)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: scaling from the $y$-axis by $\\dfrac{1}{3}$ puts $3x$ in place of $x$."
                },
                {
                  "step": "$y = (3x + 12)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: moving the graph 4 units to the left puts $x + 4$ in place of $x$."
                },
                {
                  "step": "$y = (-3x + 12)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: the mirror image in the $y$-axis puts $-x$ in place of $x$."
                }
              ]
            },
            {
              "prompt": "Write the equation of the graph made from $y = x^3$ by a shift of 9 units up, then a scaling from the $y$-axis by $\\dfrac{1}{2}$, then a scaling from the $x$-axis by $3$, with $y$ alone on the left.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*(2*x)^3+27",
              "lines": [
                {
                  "step": "Write the equation of the graph made from $y = x^3$ by a shift of 9 units up, then a scaling from the $y$-axis by $\\dfrac{1}{2}$, then a scaling from the $x$-axis by $3$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = x^3 + 9$",
                  "reason": "Shifting, stretching and reflecting graphs: moving the graph 9 units up adds $9$ to the whole right side."
                },
                {
                  "step": "$y = (2x)^3 + 9$",
                  "reason": "Shifting, stretching and reflecting graphs: scaling from the $y$-axis by $\\dfrac{1}{2}$ puts $2x$ in place of $x$."
                },
                {
                  "step": "$y = 3(2x)^3 + 27$",
                  "reason": "Shifting, stretching and reflecting graphs: every height is multiplied by $3$, so the whole right side is."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t164-k3",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = g(x + 4) + 5$, where the graph of $y = g(x)$ is the broken line in the figure, through $A(-4, -3)$, $B(-2, -1)$, $C(1, 3)$ and $D(4, 2)$.",
            "figure": {
              "file": "transformations-of-graphs-1.svg",
              "alt": "The graph of y = g(x), a broken line from A(−4, −3) through B(−2, −1) through C(1, 3) to D(4, 2)."
            },
            "lines": [
              {
                "step": "Sketch the graph of $y = g(x + 4) + 5$, where the graph of $y = g(x)$ is the broken line in the figure, through $A(-4, -3)$, $B(-2, -1)$, $C(1, 3)$ and $D(4, 2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each point $(p, q)$ of the graph of $y = g(x)$ moves to $(p - 4, q + 5)$.",
                "reason": "Shifting, stretching and reflecting graphs: the graph moves 4 units to the left and 5 units up."
              },
              {
                "step": "So the points move: $A(-4, -3)$ to $P(-8, 2)$, $B(-2, -1)$ to $Q(-6, 4)$, $C(1, 3)$ to $R(-3, 8)$, $D(4, 2)$ to $S(0, 7)$.",
                "reason": "Order of operations: $-4$ is added to each first coordinate and $5$ to each second coordinate."
              },
              {
                "step": "The new graph does not cross the $x$-axis: every moved point lies above it.",
                "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and every moved point has a positive second coordinate."
              },
              {
                "step": "The new graph meets the $y$-axis at $(0, 7)$.",
                "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, here at the moved point $S$."
              },
              {
                "step": "The broken line through $P$, $Q$, $R$ and $S$ is the graph.",
                "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                "figure": {
                  "file": "transformations-of-graphs-2.svg",
                  "alt": "The graph of y = g(x + 4) + 5, a broken line from P(−8, 2) through Q(−6, 4) through R(−3, 8) to S(0, 7)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = f(x - 1) + 4$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-4, 4)$, $B(-2, -1)$ and $C(4, 5)$.",
              "figure": {
                "file": "transformations-of-graphs-3.svg",
                "alt": "The graph of y = f(x), a broken line from A(−4, 4) through B(−2, −1) to C(4, 5)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 4)$"
                ],
                "turning": [
                  "$(-1, 3)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x - 1) + 4$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-4, 4)$, $B(-2, -1)$ and $C(4, 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each point $(p, q)$ of the graph of $y = f(x)$ moves to $(p + 1, q + 4)$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 1 unit to the right and 4 units up."
                },
                {
                  "step": "So the points move: $A(-4, 4)$ to $P(-3, 8)$, $B(-2, -1)$ to $Q(-1, 3)$, $C(4, 5)$ to $R(5, 9)$.",
                  "reason": "Order of operations: $1$ is added to each first coordinate and $4$ to each second coordinate."
                },
                {
                  "step": "The new graph does not cross the $x$-axis: every moved point lies above it.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and every moved point has a positive second coordinate."
                },
                {
                  "step": "The new graph crosses the $y$-axis at $(0, 4)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, here on the segment that runs across it."
                },
                {
                  "step": "The broken line through $P$, $Q$ and $R$ is the graph.",
                  "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                  "figure": {
                    "file": "transformations-of-graphs-4.svg",
                    "alt": "The graph of y = f(x − 1) + 4, a broken line from P(−3, 8) through Q(−1, 3) to R(5, 9)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = h(x + 1) - 2$, where the graph of $y = h(x)$ is the broken line in the figure, through $A(-1, -3)$, $B(1, -4)$ and $C(4, 2)$.",
              "figure": {
                "file": "transformations-of-graphs-5.svg",
                "alt": "The graph of y = h(x), a broken line from A(−1, −3) through B(1, −4) to C(4, 2)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(3, 0)$",
                  "$(0, -6)$"
                ],
                "turning": [
                  "$(0, -6)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = h(x + 1) - 2$, where the graph of $y = h(x)$ is the broken line in the figure, through $A(-1, -3)$, $B(1, -4)$ and $C(4, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each point $(p, q)$ of the graph of $y = h(x)$ moves to $(p - 1, q - 2)$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 1 unit to the left and 2 units down."
                },
                {
                  "step": "So the points move: $A(-1, -3)$ to $P(-2, -5)$, $B(1, -4)$ to $Q(0, -6)$, $C(4, 2)$ to $R(3, 0)$.",
                  "reason": "Order of operations: $-1$ is added to each first coordinate and $-2$ to each second coordinate."
                },
                {
                  "step": "The new graph crosses the $x$-axis at $(3, 0)$.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, here on the segments between the moved points."
                },
                {
                  "step": "The new graph crosses the $y$-axis at $(0, -6)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, here at the moved point $Q$."
                },
                {
                  "step": "The broken line through $P$, $Q$ and $R$ is the graph.",
                  "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                  "figure": {
                    "file": "transformations-of-graphs-6.svg",
                    "alt": "The graph of y = h(x + 1) − 2, a broken line from P(−2, −5) through Q(0, −6) to R(3, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f(x + 3) - 3$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-4, 1)$, $B(-2, -2)$, $C(1, -4)$ and $D(3, -5)$.",
              "figure": {
                "file": "transformations-of-graphs-7.svg",
                "alt": "The graph of y = f(x), a broken line from A(−4, 1) through B(−2, −2) through C(1, −4) to D(3, −5)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -8)$"
                ],
                "turning": [
                  "$(-5, -5)$",
                  "$(-2, -7)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x + 3) - 3$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-4, 1)$, $B(-2, -2)$, $C(1, -4)$ and $D(3, -5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each point $(p, q)$ of the graph of $y = f(x)$ moves to $(p - 3, q - 3)$.",
                  "reason": "Shifting, stretching and reflecting graphs: the graph moves 3 units to the left and 3 units down."
                },
                {
                  "step": "So the points move: $A(-4, 1)$ to $P(-7, -2)$, $B(-2, -2)$ to $Q(-5, -5)$, $C(1, -4)$ to $R(-2, -7)$, $D(3, -5)$ to $S(0, -8)$.",
                  "reason": "Order of operations: $-3$ is added to each first coordinate and $-3$ to each second coordinate."
                },
                {
                  "step": "The new graph does not cross the $x$-axis: every moved point lies below it.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and every moved point has a negative second coordinate."
                },
                {
                  "step": "The new graph meets the $y$-axis at $(0, -8)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, here at the moved point $S$."
                },
                {
                  "step": "The broken line through $P$, $Q$, $R$ and $S$ is the graph.",
                  "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                  "figure": {
                    "file": "transformations-of-graphs-8.svg",
                    "alt": "The graph of y = f(x + 3) − 3, a broken line from P(−7, −2) through Q(−5, −5) through R(−2, −7) to S(0, −8)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = g(2x - 4) + 2$, where the graph of $y = g(x)$ is the broken line in the figure, through $A(-4, 4)$, $B(-2, 1)$ and $C(4, -1)$.",
            "figure": {
              "file": "transformations-of-graphs-87.svg",
              "alt": "The graph of y = g(x), a broken line from A(−4, 4) through B(−2, 1) to C(4, −1)."
            },
            "lines": [
              {
                "step": "Sketch the graph of $y = g(2x - 4) + 2$, where the graph of $y = g(x)$ is the broken line in the figure, through $A(-4, 4)$, $B(-2, 1)$ and $C(4, -1)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each point $(p, q)$ of the graph of $y = g(x)$ moves to the point where $2x - 4 = p$, at height $q + 2$.",
                "reason": "Shifting, stretching and reflecting graphs: the new graph takes at $x$ the height of the graph of $y = g(x)$ at $2x - 4$, and $2$ is added to it."
              },
              {
                "step": "$2x = p + 4$",
                "reason": "Adding the same number to both sides: $-4$ is taken from each side."
              },
              {
                "step": "$x = \\dfrac{p + 4}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "So the points move: $A(-4, 4)$ to $P(0, 6)$, $B(-2, 1)$ to $Q(1, 3)$, $C(4, -1)$ to $R(4, 1)$.",
                "reason": "Order of operations: each first coordinate $p$ gives $\\dfrac{p + 4}{2}$, and $2$ is added to each second coordinate."
              },
              {
                "step": "The new graph does not cross the $x$-axis: every moved point lies above it.",
                "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and every moved point has a positive second coordinate."
              },
              {
                "step": "The new graph meets the $y$-axis at $(0, 6)$.",
                "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, here at the moved point $P$."
              },
              {
                "step": "The broken line through $P$, $Q$ and $R$ is the graph.",
                "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                "figure": {
                  "file": "transformations-of-graphs-88.svg",
                  "alt": "The graph of y = g(2x − 4) + 2, a broken line from P(0, 6) through Q(1, 3) to R(4, 1)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = h(2x - 5) - 1$, where the graph of $y = h(x)$ is the broken line in the figure, through $A(-1, 3)$, $B(1, -5)$, $C(3, -1)$ and $D(5, -5)$.",
              "figure": {
                "file": "transformations-of-graphs-89.svg",
                "alt": "The graph of y = h(x), a broken line from A(−1, 3) through B(1, −5) through C(3, −1) to D(5, −5)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{9}{4}, 0)$"
                ],
                "turning": [
                  "$(3, -6)$",
                  "$(4, -2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = h(2x - 5) - 1$, where the graph of $y = h(x)$ is the broken line in the figure, through $A(-1, 3)$, $B(1, -5)$, $C(3, -1)$ and $D(5, -5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each point $(p, q)$ of the graph of $y = h(x)$ moves to the point where $2x - 5 = p$, at height $q - 1$.",
                  "reason": "Shifting, stretching and reflecting graphs: the new graph takes at $x$ the height of the graph of $y = h(x)$ at $2x - 5$, and $-1$ is added to it."
                },
                {
                  "step": "$2x = p + 5$",
                  "reason": "Adding the same number to both sides: $-5$ is taken from each side."
                },
                {
                  "step": "$x = \\dfrac{p + 5}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So the points move: $A(-1, 3)$ to $P(2, 2)$, $B(1, -5)$ to $Q(3, -6)$, $C(3, -1)$ to $R(4, -2)$, $D(5, -5)$ to $S(5, -6)$.",
                  "reason": "Order of operations: each first coordinate $p$ gives $\\dfrac{p + 5}{2}$, and $-1$ is added to each second coordinate."
                },
                {
                  "step": "The new graph crosses the $x$-axis at $(\\dfrac{9}{4}, 0)$.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, here on the segments between the moved points."
                },
                {
                  "step": "The new graph does not cross the $y$-axis: every moved point lies to its right.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, and every moved point has a positive first coordinate."
                },
                {
                  "step": "The broken line through $P$, $Q$, $R$ and $S$ is the graph.",
                  "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                  "figure": {
                    "file": "transformations-of-graphs-90.svg",
                    "alt": "The graph of y = h(2x − 5) − 1, a broken line from P(2, 2) through Q(3, −6) through R(4, −2) to S(5, −6)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = h(2x - 4) - 2$, where the graph of $y = h(x)$ is the broken line in the figure, through $A(-6, -4)$, $B(-4, -5)$, $C(-2, -3)$ and $D(2, 4)$.",
              "figure": {
                "file": "transformations-of-graphs-91.svg",
                "alt": "The graph of y = h(x), a broken line from A(−6, −4) through B(−4, −5) through C(−2, −3) to D(2, 4)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{17}{7}, 0)$",
                  "$(0, -7)$"
                ],
                "turning": [
                  "$(0, -7)$",
                  "$(1, -5)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = h(2x - 4) - 2$, where the graph of $y = h(x)$ is the broken line in the figure, through $A(-6, -4)$, $B(-4, -5)$, $C(-2, -3)$ and $D(2, 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each point $(p, q)$ of the graph of $y = h(x)$ moves to the point where $2x - 4 = p$, at height $q - 2$.",
                  "reason": "Shifting, stretching and reflecting graphs: the new graph takes at $x$ the height of the graph of $y = h(x)$ at $2x - 4$, and $-2$ is added to it."
                },
                {
                  "step": "$2x = p + 4$",
                  "reason": "Adding the same number to both sides: $-4$ is taken from each side."
                },
                {
                  "step": "$x = \\dfrac{p + 4}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So the points move: $A(-6, -4)$ to $P(-1, -6)$, $B(-4, -5)$ to $Q(0, -7)$, $C(-2, -3)$ to $R(1, -5)$, $D(2, 4)$ to $S(3, 2)$.",
                  "reason": "Order of operations: each first coordinate $p$ gives $\\dfrac{p + 4}{2}$, and $-2$ is added to each second coordinate."
                },
                {
                  "step": "The new graph crosses the $x$-axis at $(\\dfrac{17}{7}, 0)$.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, here on the segments between the moved points."
                },
                {
                  "step": "The new graph crosses the $y$-axis at $(0, -7)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, here at the moved point $Q$."
                },
                {
                  "step": "The broken line through $P$, $Q$, $R$ and $S$ is the graph.",
                  "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                  "figure": {
                    "file": "transformations-of-graphs-92.svg",
                    "alt": "The graph of y = h(2x − 4) − 2, a broken line from P(−1, −6) through Q(0, −7) through R(1, −5) to S(3, 2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = g(2x - 7) - 3$, where the graph of $y = g(x)$ is the broken line in the figure, through $A(-3, -1)$, $B(-1, -5)$ and $C(1, 5)$.",
              "figure": {
                "file": "transformations-of-graphs-93.svg",
                "alt": "The graph of y = g(x), a broken line from A(−3, −1) through B(−1, −5) to C(1, 5)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{19}{5}, 0)$"
                ],
                "turning": [
                  "$(3, -8)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = g(2x - 7) - 3$, where the graph of $y = g(x)$ is the broken line in the figure, through $A(-3, -1)$, $B(-1, -5)$ and $C(1, 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each point $(p, q)$ of the graph of $y = g(x)$ moves to the point where $2x - 7 = p$, at height $q - 3$.",
                  "reason": "Shifting, stretching and reflecting graphs: the new graph takes at $x$ the height of the graph of $y = g(x)$ at $2x - 7$, and $-3$ is added to it."
                },
                {
                  "step": "$2x = p + 7$",
                  "reason": "Adding the same number to both sides: $-7$ is taken from each side."
                },
                {
                  "step": "$x = \\dfrac{p + 7}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So the points move: $A(-3, -1)$ to $P(2, -4)$, $B(-1, -5)$ to $Q(3, -8)$, $C(1, 5)$ to $R(4, 2)$.",
                  "reason": "Order of operations: each first coordinate $p$ gives $\\dfrac{p + 7}{2}$, and $-3$ is added to each second coordinate."
                },
                {
                  "step": "The new graph crosses the $x$-axis at $(\\dfrac{19}{5}, 0)$.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, here on the segments between the moved points."
                },
                {
                  "step": "The new graph does not cross the $y$-axis: every moved point lies to its right.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$, and every moved point has a positive first coordinate."
                },
                {
                  "step": "The broken line through $P$, $Q$ and $R$ is the graph.",
                  "reason": "Graph of a function: the new graph is the old one moved point by point, so its segments join the moved points.",
                  "figure": {
                    "file": "transformations-of-graphs-94.svg",
                    "alt": "The graph of y = g(2x − 7) − 3, a broken line from P(2, −4) through Q(3, −8) to R(4, 2)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t164-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = af(x + b) + c$ and the points $A(-4, -3)$, $B(-1, 2)$, $C(1, 1)$ of the graph of $y = f(x)$ move to $P(-6, 9)$, $Q(-3, -1)$, $R(-1, 1)$.",
            "figure": {
              "file": "transformations-of-graphs-45.svg",
              "alt": "Two broken lines. The graph of y = f(x) runs from A(−4, −3) through B(−1, 2) to C(1, 1). The graph G runs from P(−6, 9) through Q(−3, −1) to R(−1, 1)."
            },
            "lines": [
              {
                "step": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = af(x + b) + c$ and the points $A(-4, -3)$, $B(-1, 2)$, $C(1, 1)$ of the graph of $y = f(x)$ move to $P(-6, 9)$, $Q(-3, -1)$, $R(-1, 1)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$b = -4 - (-6) = 2$",
                "reason": "Shifting, stretching and reflecting graphs: the graph of $y = f(x + b)$ is moved $b$ to the left, so $A$ and $P$ differ by $b$ in their first coordinates."
              },
              {
                "step": "$9 = -3a + c$",
                "reason": "Shifting, stretching and reflecting graphs: each height $q$ becomes $aq + c$, here for $A$ and $P$."
              },
              {
                "step": "$-1 = 2a + c$",
                "reason": "Shifting, stretching and reflecting graphs: the same for $B$ and $Q$."
              },
              {
                "step": "$-10 = 5a$",
                "reason": "Adding two equations: line 3 is taken from line 4, which leaves $a$ times the difference of the heights."
              },
              {
                "step": "$a = -2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$9 = -3 \\cdot (-2) + c$",
                "reason": "Substituting a value: $a$, in brackets, goes into line 3."
              },
              {
                "step": "$c = 3$",
                "reason": "Adding the same number to both sides: $6$ is taken from each side."
              },
              {
                "step": "So $a = -2$, $b = 2$ and $c = 3$.",
                "reason": "Lines 2, 6 and 8."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = af(x + b) + c$ and the points $A(-2, -1)$, $B(1, 1)$, $C(4, -1)$ of the graph of $y = f(x)$ move to $P(-1, 0)$, $Q(2, -6)$, $R(5, 0)$.",
              "figure": {
                "file": "transformations-of-graphs-46.svg",
                "alt": "Two broken lines. The graph of y = f(x) runs from A(−2, −1) through B(1, 1) to C(4, −1). The graph G runs from P(−1, 0) through Q(2, −6) to R(5, 0)."
              },
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -3, b = -1, c = -3",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = af(x + b) + c$ and the points $A(-2, -1)$, $B(1, 1)$, $C(4, -1)$ of the graph of $y = f(x)$ move to $P(-1, 0)$, $Q(2, -6)$, $R(5, 0)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b = -2 - (-1) = -1$",
                  "reason": "Shifting, stretching and reflecting graphs: the graph of $y = f(x + b)$ is moved $b$ to the left, so $A$ and $P$ differ by $b$ in their first coordinates."
                },
                {
                  "step": "$0 = -a + c$",
                  "reason": "Shifting, stretching and reflecting graphs: each height $q$ becomes $aq + c$, here for $A$ and $P$."
                },
                {
                  "step": "$-6 = a + c$",
                  "reason": "Shifting, stretching and reflecting graphs: the same for $B$ and $Q$."
                },
                {
                  "step": "$-6 = 2a$",
                  "reason": "Adding two equations: line 3 is taken from line 4, which leaves $a$ times the difference of the heights."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$0 = -(-3) + c$",
                  "reason": "Substituting a value: $a$, in brackets, goes into line 3."
                },
                {
                  "step": "$c = -3$",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                },
                {
                  "step": "So $a = -3$, $b = -1$ and $c = -3$.",
                  "reason": "Lines 2, 6 and 8."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = ag(x + b) + c$ and the points $A(-3, -3)$, $B(2, 3)$, $C(4, -1)$ of the graph of $y = g(x)$ move to $P(-2, 12)$, $Q(3, 0)$, $R(5, 8)$.",
              "figure": {
                "file": "transformations-of-graphs-47.svg",
                "alt": "Two broken lines. The graph of y = g(x) runs from A(−3, −3) through B(2, 3) to C(4, −1). The graph G runs from P(−2, 12) through Q(3, 0) to R(5, 8)."
              },
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -2, b = -1, c = 6",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = ag(x + b) + c$ and the points $A(-3, -3)$, $B(2, 3)$, $C(4, -1)$ of the graph of $y = g(x)$ move to $P(-2, 12)$, $Q(3, 0)$, $R(5, 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b = -3 - (-2) = -1$",
                  "reason": "Shifting, stretching and reflecting graphs: the graph of $y = g(x + b)$ is moved $b$ to the left, so $A$ and $P$ differ by $b$ in their first coordinates."
                },
                {
                  "step": "$12 = -3a + c$",
                  "reason": "Shifting, stretching and reflecting graphs: each height $q$ becomes $aq + c$, here for $A$ and $P$."
                },
                {
                  "step": "$0 = 3a + c$",
                  "reason": "Shifting, stretching and reflecting graphs: the same for $B$ and $Q$."
                },
                {
                  "step": "$-12 = 6a$",
                  "reason": "Adding two equations: line 3 is taken from line 4, which leaves $a$ times the difference of the heights."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$12 = -3 \\cdot (-2) + c$",
                  "reason": "Substituting a value: $a$, in brackets, goes into line 3."
                },
                {
                  "step": "$c = 6$",
                  "reason": "Adding the same number to both sides: $6$ is taken from each side."
                },
                {
                  "step": "So $a = -2$, $b = -1$ and $c = 6$.",
                  "reason": "Lines 2, 6 and 8."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = ag(x + b) + c$ and the points $A(-3, -2)$, $B(-1, 4)$, $C(1, 2)$ of the graph of $y = g(x)$ move to $P(-4, -11)$, $Q(-2, 1)$, $R(0, -3)$.",
              "figure": {
                "file": "transformations-of-graphs-48.svg",
                "alt": "Two broken lines. The graph of y = g(x) runs from A(−3, −2) through B(−1, 4) to C(1, 2). The graph G runs from P(−4, −11) through Q(−2, 1) to R(0, −3)."
              },
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = 2, b = 1, c = -7",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$, where the graph G in the figure is the graph of $y = ag(x + b) + c$ and the points $A(-3, -2)$, $B(-1, 4)$, $C(1, 2)$ of the graph of $y = g(x)$ move to $P(-4, -11)$, $Q(-2, 1)$, $R(0, -3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b = -3 - (-4) = 1$",
                  "reason": "Shifting, stretching and reflecting graphs: the graph of $y = g(x + b)$ is moved $b$ to the left, so $A$ and $P$ differ by $b$ in their first coordinates."
                },
                {
                  "step": "$-11 = -2a + c$",
                  "reason": "Shifting, stretching and reflecting graphs: each height $q$ becomes $aq + c$, here for $A$ and $P$."
                },
                {
                  "step": "$1 = 4a + c$",
                  "reason": "Shifting, stretching and reflecting graphs: the same for $B$ and $Q$."
                },
                {
                  "step": "$12 = 6a$",
                  "reason": "Adding two equations: line 3 is taken from line 4, which leaves $a$ times the difference of the heights."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$-11 = -2 \\cdot 2 + c$",
                  "reason": "Substituting a value: $a$, in brackets, goes into line 3."
                },
                {
                  "step": "$c = -7$",
                  "reason": "Adding the same number to both sides: $-4$ is taken from each side."
                },
                {
                  "step": "So $a = 2$, $b = 1$ and $c = -7$.",
                  "reason": "Lines 2, 6 and 8."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t164-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether there is a function $f$ for which the graphs of $y = f(x)$ and $y = -f(x)$ meet.",
            "lines": [
              {
                "step": "Decide whether there is a function $f$ for which the graphs of $y = f(x)$ and $y = -f(x)$ meet.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph of $y = -f(x)$ is the graph of $y = f(x)$ moved point by point.",
                "reason": "Shifting, stretching and reflecting graphs: every height changes sign, so $(p, q)$ goes to $(p, -q)$."
              },
              {
                "step": "With $f(x) = x - 4$, both graphs pass through $(4, 0)$.",
                "reason": "Substituting a value: $x = 4$ gives height $0$ on both graphs."
              },
              {
                "step": "Yes: $f(x) = x - 4$ is such a function.",
                "reason": "Graph of a function: a common point of two graphs lies on both."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether, for every function $f$ whose graph meets the $x$-axis, the graph of $y = f(-x)$ has the same $x$-intercepts as the graph of $y = f(x)$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether, for every function $f$ whose graph meets the $x$-axis, the graph of $y = f(-x)$ has the same $x$-intercepts as the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = f(-x)$ is the graph of $y = f(x)$ moved point by point.",
                  "reason": "Shifting, stretching and reflecting graphs: every first coordinate changes sign, so $(p, q)$ goes to $(-p, q)$."
                },
                {
                  "step": "With $f(x) = x - 8$, the only $x$-intercept is $(8, 0)$, and it goes to $(-8, 0)$.",
                  "reason": "Disproof by counterexample: one function for which the claim fails is enough."
                },
                {
                  "step": "No: for $f(x) = x - 8$ the two graphs have different $x$-intercepts.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$."
                }
              ]
            },
            {
              "prompt": "Decide whether, for every function $g$ whose graph passes through $(0, 0)$, the graph of $y = 3g(2x)$ also passes through $(0, 0)$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether, for every function $g$ whose graph passes through $(0, 0)$, the graph of $y = 3g(2x)$ also passes through $(0, 0)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = 3g(2x)$ is the graph of $y = g(x)$ moved point by point.",
                  "reason": "Shifting, stretching and reflecting graphs: every distance from the $y$-axis is multiplied by $\\dfrac{1}{2}$ and every height by $3$, so $(p, q)$ goes to $\\left(\\dfrac{p}{2}, 3q\\right)$."
                },
                {
                  "step": "The point $(0, 0)$ goes to $\\left(\\dfrac{0}{2}, 3 \\cdot 0\\right)$, which is $(0, 0)$.",
                  "reason": "Order of operations: $\\dfrac{0}{2} = 0$ and $3 \\cdot 0 = 0$."
                },
                {
                  "step": "Yes: for every such $g$ the graph of $y = 3g(2x)$ passes through $(0, 0)$.",
                  "reason": "Graph of a function: a point of the graph of $y = g(x)$ moves to a point of the new graph."
                }
              ]
            },
            {
              "prompt": "Decide whether, for every function $f$, the graphs of $y = f(x + 5)$ and $y = f(x) + 5$ meet.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether, for every function $f$, the graphs of $y = f(x + 5)$ and $y = f(x) + 5$ meet.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = f(x + 5)$ is the graph of $y = f(x)$ moved 5 units to the left, and the graph of $y = f(x) + 5$ is it moved 5 units up.",
                  "reason": "Shifting, stretching and reflecting graphs: $(p, q)$ goes to $(p - 5, q)$ on the first graph and to $(p, q + 5)$ on the second."
                },
                {
                  "step": "With $f(x) = 4$, the two heights at each $x$ are $4$ and $4 + 5 = 9$.",
                  "reason": "Disproof by counterexample: one function for which the claim fails is enough."
                },
                {
                  "step": "No: for $f(x) = 4$ the two graphs never meet.",
                  "reason": "Graph of a function: a common point would need one height at that $x$ on both graphs."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t164-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the point that $(1, -10)$ on the graph of $y = h(x)$ moves to on the graph of $y = 5h(-2x - 9) + 10$, and write that line right.",
            "given": [
              "$-2x - 9 = 1$",
              "$-2x = -8$",
              "$x = 4$",
              "$y = 5 \\cdot (-10) + 10 = -40$",
              "The point is $(4, -40)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the point that $(1, -10)$ on the graph of $y = h(x)$ moves to on the graph of $y = 5h(-2x - 9) + 10$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 sets the expression inside $h$ equal to $1$, which is right.",
                "reason": "Graph of a function: the new graph takes the height of the old one at the input $1$."
              },
              {
                "step": "Line 2 keeps the sign of $-9$ as it crosses to the other side, so the sign is lost: taking $-9$ from both sides gives $1 - (-9) = 10$.",
                "reason": "Adding the same number to both sides: the same number is taken from each side."
              },
              {
                "step": "Line 2 written right is $-2x = 10$.",
                "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the point that $(-8, -11)$ on the graph of $y = g(x)$ moves to on the graph of $y = 3g(-2x + 4) + 1$, and write that line right.",
              "given": [
                "$y = 3 \\cdot (-11) + 1 = -32$",
                "$-2x + 4 = -8$",
                "$-2x = -4$",
                "$x = 2$",
                "The point is $(2, -32)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -2*x = -12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the point that $(-8, -11)$ on the graph of $y = g(x)$ moves to on the graph of $y = 3g(-2x + 4) + 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 sets the expression inside $g$ equal to $-8$, which is right.",
                  "reason": "Graph of a function: the new graph takes the height of the old one at the input $-8$."
                },
                {
                  "step": "Line 3 keeps the sign of $4$ as it crosses to the other side, so the sign is lost: taking $4$ from both sides gives $-8 - 4 = -12$.",
                  "reason": "Adding the same number to both sides: the same number is taken from each side."
                },
                {
                  "step": "Line 3 written right is $-2x = -12$.",
                  "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the point that $(-2, 10)$ on the graph of $y = h(x)$ moves to on the graph of $y = -4h(-2x + 6) + 7$, and write that line right.",
              "given": [
                "$-2x + 6 = -2$",
                "$-2x = 4$",
                "$x = -2$",
                "$y = -4 \\cdot 10 + 7 = -33$",
                "The point is $(-2, -33)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -2*x = -8",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the point that $(-2, 10)$ on the graph of $y = h(x)$ moves to on the graph of $y = -4h(-2x + 6) + 7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 sets the expression inside $h$ equal to $-2$, which is right.",
                  "reason": "Graph of a function: the new graph takes the height of the old one at the input $-2$."
                },
                {
                  "step": "Line 2 keeps the sign of $6$ as it crosses to the other side, so the sign is lost: taking $6$ from both sides gives $-2 - 6 = -8$.",
                  "reason": "Adding the same number to both sides: the same number is taken from each side."
                },
                {
                  "step": "Line 2 written right is $-2x = -8$.",
                  "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the point that $(5, 5)$ on the graph of $y = g(x)$ moves to on the graph of $y = -5g(2x - 3) - 13$, and write that line right.",
              "given": [
                "$y = -5 \\cdot 5 - 13 = -38$",
                "$2x - 3 = 5$",
                "$2x = 2$",
                "$x = 1$",
                "The point is $(1, -38)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*x = 8",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the point that $(5, 5)$ on the graph of $y = g(x)$ moves to on the graph of $y = -5g(2x - 3) - 13$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 sets the expression inside $g$ equal to $5$, which is right.",
                  "reason": "Graph of a function: the new graph takes the height of the old one at the input $5$."
                },
                {
                  "step": "Line 3 keeps the sign of $-3$ as it crosses to the other side, so the sign is lost: taking $-3$ from both sides gives $5 - (-3) = 8$.",
                  "reason": "Adding the same number to both sides: the same number is taken from each side."
                },
                {
                  "step": "Line 3 written right is $2x = 8$.",
                  "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the point that $(-6, -2)$ on the graph of $y = h(x)$ moves to on the graph of $y = -3h(2x - 8) - 13$, and write that line right.",
            "given": [
              "$y = -3 \\cdot (-2) - 13$",
              "$y = -6 - 13$",
              "$y = -19$",
              "$2x - 8 = -6$",
              "$2x = 2$",
              "$x = 1$",
              "The point is $(1, -19)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the point that $(-6, -2)$ on the graph of $y = h(x)$ moves to on the graph of $y = -3h(2x - 8) - 13$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 puts $h(-6) = -2$ in place of $h(2x - 8)$, which is right.",
                "reason": "Substituting a value: the known height goes in, in brackets."
              },
              {
                "step": "Line 2 writes the product $-3 \\cdot (-2)$ as $-6$, so the sign is lost: the product of two negative numbers is positive, $6$.",
                "reason": "Signs of products: a product of two negative numbers is positive."
              },
              {
                "step": "Line 2 written right is $y = 6 - 13$.",
                "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the point that $(14, -4)$ on the graph of $y = g(x)$ moves to on the graph of $y = -4g(-2x + 6) - 8$, and write that line right.",
              "given": [
                "$-2x + 6 = 14$",
                "$-2x = 8$",
                "$x = -4$",
                "$y = -4 \\cdot (-4) - 8$",
                "$y = -16 - 8$",
                "$y = -24$",
                "The point is $(-4, -24)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = 16-8",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the point that $(14, -4)$ on the graph of $y = g(x)$ moves to on the graph of $y = -4g(-2x + 6) - 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 puts $g(14) = -4$ in place of $g(-2x + 6)$, which is right.",
                  "reason": "Substituting a value: the known height goes in, in brackets."
                },
                {
                  "step": "Line 5 writes the product $-4 \\cdot (-4)$ as $-16$, so the sign is lost: the product of two negative numbers is positive, $16$.",
                  "reason": "Signs of products: a product of two negative numbers is positive."
                },
                {
                  "step": "Line 5 written right is $y = 16 - 8$.",
                  "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the point that $(13, -8)$ on the graph of $y = g(x)$ moves to on the graph of $y = -3g(2x + 5) + 4$, and write that line right.",
              "given": [
                "$y = -3 \\cdot (-8) + 4$",
                "$y = -24 + 4$",
                "$y = -20$",
                "$2x + 5 = 13$",
                "$2x = 8$",
                "$x = 4$",
                "The point is $(4, -20)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y = 24+4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the point that $(13, -8)$ on the graph of $y = g(x)$ moves to on the graph of $y = -3g(2x + 5) + 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 puts $g(13) = -8$ in place of $g(2x + 5)$, which is right.",
                  "reason": "Substituting a value: the known height goes in, in brackets."
                },
                {
                  "step": "Line 2 writes the product $-3 \\cdot (-8)$ as $-24$, so the sign is lost: the product of two negative numbers is positive, $24$.",
                  "reason": "Signs of products: a product of two negative numbers is positive."
                },
                {
                  "step": "Line 2 written right is $y = 24 + 4$.",
                  "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the point that $(8, -4)$ on the graph of $y = f(x)$ moves to on the graph of $y = -3f(3x - 13) + 14$, and write that line right.",
              "given": [
                "$3x - 13 = 8$",
                "$3x = 21$",
                "$x = 7$",
                "$y = -3 \\cdot (-4) + 14$",
                "$y = -12 + 14$",
                "$y = 2$",
                "The point is $(7, 2)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = 12+14",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the point that $(8, -4)$ on the graph of $y = f(x)$ moves to on the graph of $y = -3f(3x - 13) + 14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 puts $f(8) = -4$ in place of $f(3x - 13)$, which is right.",
                  "reason": "Substituting a value: the known height goes in, in brackets."
                },
                {
                  "step": "Line 5 writes the product $-3 \\cdot (-4)$ as $-12$, so the sign is lost: the product of two negative numbers is positive, $12$.",
                  "reason": "Signs of products: a product of two negative numbers is positive."
                },
                {
                  "step": "Line 5 written right is $y = 12 + 14$.",
                  "reason": "The lines after it follow from the wrong line, so the first wrong line is this one."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t164-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(-10, -7)$ is the point of the curve where it is flat.",
            "figure": {
              "file": "transformations-of-graphs-115.svg",
              "alt": "A curve rising from left to right, the graph of y = x³ moved so that its flat point is V(−10, −7)."
            },
            "lines": [
              {
                "step": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(-10, -7)$ is the point of the curve where it is flat.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The point $(0, 0)$, where the graph of $y = x^3$ is flat, moves to $V(-10, -7)$: 10 units to the left and 7 units down.",
                "reason": "Shifting, stretching and reflecting graphs: a shift moves every point of the graph and keeps its shape, so the flat point $(0, 0)$ goes to the flat point $V$."
              },
              {
                "step": "$y = (x + 10)^3$",
                "reason": "Shifting, stretching and reflecting graphs: moving 10 units to the left puts $x + 10$ in place of $x$."
              },
              {
                "step": "$y = (x + 10)^3 - 7$",
                "reason": "Shifting, stretching and reflecting graphs: moving 7 units down adds $-7$ to the right side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(3, -14)$ is the point of the curve where it is flat.",
              "figure": {
                "file": "transformations-of-graphs-116.svg",
                "alt": "A curve rising from left to right, the graph of y = x³ moved so that its flat point is V(3, −14)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-3)^3-14",
              "lines": [
                {
                  "step": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(3, -14)$ is the point of the curve where it is flat.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point $(0, 0)$, where the graph of $y = x^3$ is flat, moves to $V(3, -14)$: 3 units to the right and 14 units down.",
                  "reason": "Shifting, stretching and reflecting graphs: a shift moves every point of the graph and keeps its shape, so the flat point $(0, 0)$ goes to the flat point $V$."
                },
                {
                  "step": "$y = (x - 3)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: moving 3 units to the right puts $x - 3$ in place of $x$."
                },
                {
                  "step": "$y = (x - 3)^3 - 14$",
                  "reason": "Shifting, stretching and reflecting graphs: moving 14 units down adds $-14$ to the right side."
                }
              ]
            },
            {
              "prompt": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(2, 10)$ is the point of the curve where it is flat.",
              "figure": {
                "file": "transformations-of-graphs-117.svg",
                "alt": "A curve rising from left to right, the graph of y = x³ moved so that its flat point is V(2, 10)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-2)^3+10",
              "lines": [
                {
                  "step": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(2, 10)$ is the point of the curve where it is flat.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point $(0, 0)$, where the graph of $y = x^3$ is flat, moves to $V(2, 10)$: 2 units to the right and 10 units up.",
                  "reason": "Shifting, stretching and reflecting graphs: a shift moves every point of the graph and keeps its shape, so the flat point $(0, 0)$ goes to the flat point $V$."
                },
                {
                  "step": "$y = (x - 2)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: moving 2 units to the right puts $x - 2$ in place of $x$."
                },
                {
                  "step": "$y = (x - 2)^3 + 10$",
                  "reason": "Shifting, stretching and reflecting graphs: moving 10 units up adds $10$ to the right side."
                }
              ]
            },
            {
              "prompt": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(-1, -12)$ is the point of the curve where it is flat.",
              "figure": {
                "file": "transformations-of-graphs-118.svg",
                "alt": "A curve rising from left to right, the graph of y = x³ moved so that its flat point is V(−1, −12)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+1)^3-12",
              "lines": [
                {
                  "step": "Write the equation of the curve in the figure, with $y$ alone on the left: it is the graph of $y = x^3$ moved by shifts only, and $V(-1, -12)$ is the point of the curve where it is flat.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point $(0, 0)$, where the graph of $y = x^3$ is flat, moves to $V(-1, -12)$: 1 unit to the left and 12 units down.",
                  "reason": "Shifting, stretching and reflecting graphs: a shift moves every point of the graph and keeps its shape, so the flat point $(0, 0)$ goes to the flat point $V$."
                },
                {
                  "step": "$y = (x + 1)^3$",
                  "reason": "Shifting, stretching and reflecting graphs: moving 1 unit to the left puts $x + 1$ in place of $x$."
                },
                {
                  "step": "$y = (x + 1)^3 - 12$",
                  "reason": "Shifting, stretching and reflecting graphs: moving 12 units down adds $-12$ to the right side."
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
      "id": "t164-p1",
      "method": "direct proof",
      "statement": "For a function $f$ and a number $k$, a point $(p, q)$ lies on the graph of $y = f(x)$ exactly when the point $(p - k, q)$ lies on the graph of $y = f(x + k)$. So the graph of $y = f(x + k)$ is the graph of $y = f(x)$ moved $k$ units to the left.",
      "idea": "Match the points. The new graph takes at $x$ the height the old graph has at $x + k$, so the height the old graph has at $p$ turns up on the new graph at $p - k$, which is $k$ to the left of $p$.",
      "lines": [
        {
          "line": "Let $(p, q)$ be a point of the graph of $y = f(x)$.",
          "reason": "Graph of a function: its points are the pairs $(x, f(x))$."
        },
        {
          "line": "Then $f(p) = q$.",
          "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$."
        },
        {
          "line": "At $x = p - k$ the right side of $y = f(x + k)$ is $f((p - k) + k)$.",
          "reason": "Substituting a value: $p - k$, in brackets, goes in place of $x$."
        },
        {
          "line": "And $(p - k) + k = p$.",
          "reason": "Collecting like terms: $-k + k = 0$."
        },
        {
          "line": "So $f((p - k) + k) = q$.",
          "reason": "Substituting a value: by line 4, then line 2."
        },
        {
          "line": "So $(p - k, q)$ lies on the graph of $y = f(x + k)$.",
          "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation."
        },
        {
          "line": "Now let $(s, t)$ be a point of the graph of $y = f(x + k)$.",
          "reason": "Graph of an equation: its points are the pairs that satisfy $y = f(x + k)$."
        },
        {
          "line": "Then $t = f(s + k)$.",
          "reason": "Graph of an equation: the coordinates satisfy the equation."
        },
        {
          "line": "So $(s + k, t)$ lies on the graph of $y = f(x)$.",
          "reason": "Graph of a function: the height of the graph at $x = s + k$ is $f(s + k)$."
        },
        {
          "line": "And $(s, t)$ is that point with $k$ taken from its first coordinate.",
          "reason": "Collecting like terms: $(s + k) - k = s$."
        },
        {
          "line": "Therefore the points of the graph of $y = f(x + k)$ are exactly the points of the graph of $y = f(x)$ moved $k$ units to the left.",
          "reason": "Lines 6 and 10: each point of either graph matches one of the other."
        }
      ]
    },
    {
      "id": "t164-p2",
      "method": "direct proof",
      "statement": "For a function $f$ and a number $k > 0$, a point $(p, q)$ lies on the graph of $y = f(x)$ exactly when the point $\\left(\\dfrac{p}{k}, q\\right)$ lies on the graph of $y = f(kx)$. So the graph of $y = f(kx)$ is the graph of $y = f(x)$ scaled from the $y$-axis by $\\dfrac{1}{k}$.",
      "idea": "Match the points. The new graph takes at $x$ the height the old graph has at $kx$, so the height the old graph has at $p$ turns up on the new graph at $\\dfrac{p}{k}$, and that number is $\\dfrac{1}{k}$ times as far from $0$ as $p$.",
      "lines": [
        {
          "line": "Let $(p, q)$ be a point of the graph of $y = f(x)$.",
          "reason": "Graph of a function: its points are the pairs $(x, f(x))$."
        },
        {
          "line": "Then $f(p) = q$.",
          "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$."
        },
        {
          "line": "At $x = \\dfrac{p}{k}$ the right side of $y = f(kx)$ is $f\\left(k \\cdot \\dfrac{p}{k}\\right)$.",
          "reason": "Substituting a value: $\\dfrac{p}{k}$ goes in place of $x$; it is a number, since $k \\ne 0$."
        },
        {
          "line": "And $k \\cdot \\dfrac{p}{k} = p$.",
          "reason": "Product of fraction pairs: $k \\cdot \\dfrac{p}{k} = \\dfrac{kp}{k}$, and the common factor $k$ cancels."
        },
        {
          "line": "So $f\\left(k \\cdot \\dfrac{p}{k}\\right) = q$.",
          "reason": "Substituting a value: by line 4, then line 2."
        },
        {
          "line": "So $\\left(\\dfrac{p}{k}, q\\right)$ lies on the graph of $y = f(kx)$.",
          "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation."
        },
        {
          "line": "Now let $(s, t)$ be a point of the graph of $y = f(kx)$.",
          "reason": "Graph of an equation: its points are the pairs that satisfy $y = f(kx)$."
        },
        {
          "line": "Then $t = f(ks)$.",
          "reason": "Graph of an equation: the coordinates satisfy the equation."
        },
        {
          "line": "So $(ks, t)$ lies on the graph of $y = f(x)$.",
          "reason": "Graph of a function: the height of the graph at $x = ks$ is $f(ks)$."
        },
        {
          "line": "And $(s, t)$ is that point with its first coordinate multiplied by $\\dfrac{1}{k}$.",
          "reason": "Product of fraction pairs: $\\dfrac{1}{k} \\cdot ks = \\dfrac{ks}{k}$, and the common factor $k$ cancels."
        },
        {
          "line": "And the distance of $\\dfrac{p}{k}$ from $0$ is $\\dfrac{1}{k}$ times the distance of $p$ from $0$.",
          "reason": "Distance on the number line: $\\left|\\dfrac{p}{k}\\right| = \\dfrac{|p|}{k}$, since $k > 0$."
        },
        {
          "line": "Therefore the graph of $y = f(kx)$ is the graph of $y = f(x)$ with every distance from the $y$-axis multiplied by $\\dfrac{1}{k}$.",
          "reason": "Lines 6, 10 and 11: each point of either graph matches one of the other, at $\\dfrac{1}{k}$ times the distance from the $y$-axis."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t164-s1",
      "method": "direct proof",
      "statement": "Prove that for a function $f$ and a number $k$, the graph of $y = f(x) + k$ is the graph of $y = f(x)$ moved $k$ units up: a point $(p, q)$ lies on the graph of $y = f(x)$ exactly when $(p, q + k)$ lies on the graph of $y = f(x) + k$. Facts it may use: graph of a function, graph of an equation, substituting a value, adding the same number to both sides, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let $(p, q)$ be a point of the graph of $y = f(x)$.",
            "reason": "Graph of a function: its points are the pairs $(x, f(x))$."
          },
          {
            "line": "Then $f(p) = q$.",
            "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$."
          },
          {
            "line": "At $x = p$ the right side of $y = f(x) + k$ is $f(p) + k$.",
            "reason": "Substituting a value: $p$ goes in place of $x$."
          },
          {
            "line": "So the right side is $q + k$.",
            "reason": "Substituting a value: by line 2, $q$ goes in place of $f(p)$."
          },
          {
            "line": "So $(p, q + k)$ lies on the graph of $y = f(x) + k$.",
            "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation."
          },
          {
            "line": "Now let $(s, t)$ be a point of the graph of $y = f(x) + k$.",
            "reason": "Graph of an equation: its points are the pairs that satisfy $y = f(x) + k$."
          },
          {
            "line": "Then $t = f(s) + k$.",
            "reason": "Graph of an equation: the coordinates satisfy the equation."
          },
          {
            "line": "Then $t - k = f(s)$.",
            "reason": "Adding the same number to both sides: $k$ is taken from each side."
          },
          {
            "line": "So $(s, t - k)$ lies on the graph of $y = f(x)$.",
            "reason": "Graph of a function: the height of the graph at $x = s$ is $f(s)$."
          },
          {
            "line": "And $(s, t)$ is that point moved $k$ units up.",
            "reason": "Collecting like terms: $(t - k) + k = t$."
          },
          {
            "line": "Therefore the graph of $y = f(x) + k$ is the graph of $y = f(x)$ moved $k$ units up.",
            "reason": "Lines 5 and 10: each point of either graph matches one of the other."
          }
        ]
      }
    },
    {
      "id": "t164-s2",
      "method": "direct proof",
      "statement": "Prove that for a function $f$ and a number $k > 0$, a point $(p, q)$ lies on the graph of $y = f(x)$ exactly when $(p, kq)$ lies on the graph of $y = kf(x)$, so that the graph of $y = kf(x)$ is the graph of $y = f(x)$ scaled from the $x$-axis by $k$. Facts it may use: graph of a function, graph of an equation, substituting a value, dividing both sides by a nonzero number, product of fraction pairs.",
      "check": {
        "proof": [
          {
            "line": "Let $(p, q)$ be a point of the graph of $y = f(x)$.",
            "reason": "Graph of a function: its points are the pairs $(x, f(x))$."
          },
          {
            "line": "Then $f(p) = q$.",
            "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$."
          },
          {
            "line": "At $x = p$ the right side of $y = kf(x)$ is $kf(p)$.",
            "reason": "Substituting a value: $p$ goes in place of $x$."
          },
          {
            "line": "So the right side is $kq$.",
            "reason": "Substituting a value: by line 2, $q$ goes in place of $f(p)$."
          },
          {
            "line": "So $(p, kq)$ lies on the graph of $y = kf(x)$.",
            "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation."
          },
          {
            "line": "Now let $(s, t)$ be a point of the graph of $y = kf(x)$.",
            "reason": "Graph of an equation: its points are the pairs that satisfy $y = kf(x)$."
          },
          {
            "line": "Then $t = kf(s)$.",
            "reason": "Graph of an equation: the coordinates satisfy the equation."
          },
          {
            "line": "Then $\\dfrac{t}{k} = f(s)$.",
            "reason": "Dividing both sides by a nonzero number: $k > 0$, so $k \\ne 0$."
          },
          {
            "line": "So $\\left(s, \\dfrac{t}{k}\\right)$ lies on the graph of $y = f(x)$.",
            "reason": "Graph of a function: the height of the graph at $x = s$ is $f(s)$."
          },
          {
            "line": "And $(s, t)$ is that point with its height multiplied by $k$.",
            "reason": "Product of fraction pairs: $k \\cdot \\dfrac{t}{k} = \\dfrac{kt}{k}$, and the common factor $k$ cancels."
          },
          {
            "line": "Therefore the graph of $y = kf(x)$ is the graph of $y = f(x)$ with every height multiplied by $k$.",
            "reason": "Lines 5 and 10: each point of either graph matches one of the other."
          }
        ]
      }
    },
    {
      "id": "t164-s3",
      "method": "direct proof",
      "statement": "Prove that for a function $f$, a point $(p, q)$ lies on the graph of $y = f(x)$ exactly when $(p, -q)$ lies on the graph of $y = -f(x)$, so that the graph of $y = -f(x)$ is the mirror image of the graph of $y = f(x)$ in the $x$-axis. Facts it may use: graph of a function, graph of an equation, substituting a value, multiplying both sides by the same number, mirror reflection.",
      "check": {
        "proof": [
          {
            "line": "Let $(p, q)$ be a point of the graph of $y = f(x)$.",
            "reason": "Graph of a function: its points are the pairs $(x, f(x))$."
          },
          {
            "line": "Then $f(p) = q$.",
            "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$."
          },
          {
            "line": "At $x = p$ the right side of $y = -f(x)$ is $-f(p)$.",
            "reason": "Substituting a value: $p$ goes in place of $x$."
          },
          {
            "line": "So the right side is $-q$.",
            "reason": "Substituting a value: by line 2, $q$ goes in place of $f(p)$."
          },
          {
            "line": "So $(p, -q)$ lies on the graph of $y = -f(x)$.",
            "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation."
          },
          {
            "line": "Now let $(s, t)$ be a point of the graph of $y = -f(x)$.",
            "reason": "Graph of an equation: its points are the pairs that satisfy $y = -f(x)$."
          },
          {
            "line": "Then $t = -f(s)$.",
            "reason": "Graph of an equation: the coordinates satisfy the equation."
          },
          {
            "line": "Then $-t = f(s)$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $-1$."
          },
          {
            "line": "So $(s, -t)$ lies on the graph of $y = f(x)$.",
            "reason": "Graph of a function: the height of the graph at $x = s$ is $f(s)$."
          },
          {
            "line": "And $(s, t)$ is its mirror image in the $x$-axis.",
            "reason": "Mirror reflection: the opposite of $-t$ is $t$."
          },
          {
            "line": "Therefore the graph of $y = -f(x)$ is the mirror image of the graph of $y = f(x)$ in the $x$-axis.",
            "reason": "Lines 5 and 10: each point of either graph matches one of the other, with the sign of its height changed."
          }
        ]
      }
    },
    {
      "id": "t164-s4",
      "method": "direct proof",
      "statement": "Prove that for a function $f$, a point $(p, q)$ lies on the graph of $y = f(x)$ exactly when $(-p, q)$ lies on the graph of $y = f(-x)$, so that the graph of $y = f(-x)$ is the mirror image of the graph of $y = f(x)$ in the $y$-axis. Facts it may use: graph of a function, graph of an equation, substituting a value, mirror reflection (the opposite of $-p$ is $p$).",
      "check": {
        "proof": [
          {
            "line": "Let $(p, q)$ be a point of the graph of $y = f(x)$.",
            "reason": "Graph of a function: its points are the pairs $(x, f(x))$."
          },
          {
            "line": "Then $f(p) = q$.",
            "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$."
          },
          {
            "line": "At $x = -p$ the right side of $y = f(-x)$ is $f(-(-p))$.",
            "reason": "Substituting a value: $-p$, in brackets, goes in place of $x$."
          },
          {
            "line": "And $-(-p) = p$.",
            "reason": "Mirror reflection: the opposite of $-p$ is $p$."
          },
          {
            "line": "So the right side is $f(p) = q$.",
            "reason": "Substituting a value: by line 4, then line 2."
          },
          {
            "line": "So $(-p, q)$ lies on the graph of $y = f(-x)$.",
            "reason": "Graph of an equation: a point lies on it when its coordinates satisfy the equation."
          },
          {
            "line": "Now let $(s, t)$ be a point of the graph of $y = f(-x)$.",
            "reason": "Graph of an equation: its points are the pairs that satisfy $y = f(-x)$."
          },
          {
            "line": "Then $t = f(-s)$.",
            "reason": "Graph of an equation: the coordinates satisfy the equation."
          },
          {
            "line": "So $(-s, t)$ lies on the graph of $y = f(x)$.",
            "reason": "Graph of a function: the height of the graph at $x = -s$ is $f(-s)$."
          },
          {
            "line": "And $(s, t)$ is its mirror image in the $y$-axis.",
            "reason": "Mirror reflection: the opposite of $-s$ is $s$."
          },
          {
            "line": "Therefore the graph of $y = f(-x)$ is the mirror image of the graph of $y = f(x)$ in the $y$-axis.",
            "reason": "Lines 6 and 10: each point of either graph matches one of the other, with the sign of its first coordinate changed."
          }
        ]
      }
    },
    {
      "id": "t164-s5",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$ with $a > 0$, if $r$ is a root of $ax^2 + bx + c = 0$, then $ar$ is a root of $x^2 + bx + ac = 0$, by moving the graph of $y = f(x)$, where $f(x) = ax^2 + bx + c$, to the graph of $y = af\\left(\\dfrac{x}{a}\\right)$. Facts it may use: graph of a function, substituting a value, multiplying out, shifting, stretching and reflecting graphs.",
      "check": {
        "proof": [
          {
            "line": "Let $g(x) = af\\left(\\dfrac{x}{a}\\right)$.",
            "reason": "Function: $g$ gives each $x$ the output $af\\left(\\dfrac{x}{a}\\right)$; $a \\ne 0$, so $\\dfrac{x}{a}$ is a number."
          },
          {
            "line": "Then $g(x) = a\\left(a \\cdot \\dfrac{x^2}{a^2} + b \\cdot \\dfrac{x}{a} + c\\right)$.",
            "reason": "Substituting a value: $\\dfrac{x}{a}$, in brackets, goes in place of $x$ in $ax^2 + bx + c$."
          },
          {
            "line": "So $g(x) = x^2 + bx + ac$.",
            "reason": "Multiplying out: $a$ multiplies each term in the bracket."
          },
          {
            "line": "The point $(r, 0)$ lies on the graph of $y = f(x)$.",
            "reason": "Graph of a function: $f(r) = 0$, since $r$ is a root."
          },
          {
            "line": "So $(ar, 0)$ lies on the graph of $y = f\\left(\\dfrac{x}{a}\\right)$.",
            "reason": "Shifting, stretching and reflecting graphs: scaling from the $y$-axis with $k = \\dfrac{1}{a} > 0$ takes the point $(p, q)$ to $\\left(\\dfrac{p}{k}, q\\right) = (ap, q)$."
          },
          {
            "line": "So $(ar, 0)$ lies on the graph of $y = g(x)$.",
            "reason": "Shifting, stretching and reflecting graphs: scaling from the $x$-axis multiplies the height $0$ by $a$, and it stays $0$."
          },
          {
            "line": "Therefore $(ar)^2 + b(ar) + ac = 0$, and $ar$ is a root of $x^2 + bx + ac = 0$.",
            "reason": "Graph of a function: $g(ar) = 0$, and line 3 gives $g(ar)$."
          }
        ]
      }
    }
  ]
}
