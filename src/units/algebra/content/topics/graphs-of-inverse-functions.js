export default {
  "number": 165,
  "title": "Graphs of inverse functions",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "502-511"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $3$, where $f(x) = -8x + 10$ has an inverse.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(-14, 3)",
    "solution": [
      "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $3$, where $f(x) = -8x + 10$ has an inverse.",
      "$f(3) = -8 \\cdot 3 + 10 = -14$",
      "The point $(3, -14)$ lies on the graph of $y = f(x)$.",
      "The point $(-14, 3)$ lies on the graph of $y = f^{-1}(x)$."
    ]
  },
  "ideas": [
    {
      "name": "Graphs of inverse functions",
      "concrete": "With $f(x) = 3x + 10$, the inverse is $f^{-1}(x) = \\dfrac{x - 10}{3}$. The point $(-2, 4)$ lies on the graph of $y = f(x)$, since $f(-2) = 4$, and $f^{-1}(4) = \\dfrac{-6}{3} = -2$, so $(4, -2)$ lies on the graph of $y = f^{-1}(x)$. The two points are mirror images in the line $y = x$: their midpoint $(1, 1)$ lies on it, and the line through them has slope $-1$. The function $g(x) = x^2$ has $g(-3) = g(3) = 9$, so the horizontal line $y = 9$ meets its graph twice, and $g$ has no inverse.",
      "general": "For a function $f$ that has an inverse $f^{-1}$, a point $(a, b)$ lies on the graph of $y = f(x)$ exactly when $(b, a)$ lies on the graph of $y = f^{-1}(x)$. So the graph of $y = f^{-1}(x)$ is the mirror image of the graph of $y = f(x)$ in the line $y = x$. The **horizontal line test**: a function has an inverse exactly when no horizontal line meets its graph at more than one point."
    }
  ],
  "kinds": [
    {
      "id": "t165-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $3$, where $f(x) = -3x - 13$ has an inverse.",
            "lines": [
              {
                "step": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $3$, where $f(x) = -3x - 13$ has an inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(3) = -3 \\cdot 3 - 13 = -22$",
                "reason": "Substituting a value: $3$ goes in place of $x$."
              },
              {
                "step": "The point $(3, -22)$ lies on the graph of $y = f(x)$.",
                "reason": "Graph of a function: the height of the graph at $x = 3$ is $f(3)$."
              },
              {
                "step": "The point $(-22, 3)$ lies on the graph of $y = f^{-1}(x)$.",
                "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $1$, where $f(x) = 3x^2 + 6$ on the domain $x \\ge 0$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(9, 1)",
              "lines": [
                {
                  "step": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $1$, where $f(x) = 3x^2 + 6$ on the domain $x \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(1) = 3 \\cdot 1^2 + 6 = 9$",
                  "reason": "Substituting a value: $1$ goes in place of $x$."
                },
                {
                  "step": "The point $(1, 9)$ lies on the graph of $y = f(x)$.",
                  "reason": "Graph of a function: the height of the graph at $x = 1$ is $f(1)$."
                },
                {
                  "step": "The point $(9, 1)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                }
              ]
            },
            {
              "prompt": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $-4$, where $f(x) = -8x + 2$ has an inverse.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(34, -4)",
              "lines": [
                {
                  "step": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $-4$, where $f(x) = -8x + 2$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-4) = -8 \\cdot (-4) + 2 = 34$",
                  "reason": "Substituting a value: $-4$ goes in place of $x$."
                },
                {
                  "step": "The point $(-4, 34)$ lies on the graph of $y = f(x)$.",
                  "reason": "Graph of a function: the height of the graph at $x = -4$ is $f(-4)$."
                },
                {
                  "step": "The point $(34, -4)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                }
              ]
            },
            {
              "prompt": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $2$, where $f(x) = -3x^2 - 10$ on the domain $x \\ge 0$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-22, 2)",
              "lines": [
                {
                  "step": "Find the point of the graph of $y = f^{-1}(x)$ whose second coordinate is $2$, where $f(x) = -3x^2 - 10$ on the domain $x \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = -3 \\cdot 2^2 - 10 = -22$",
                  "reason": "Substituting a value: $2$ goes in place of $x$."
                },
                {
                  "step": "The point $(2, -22)$ lies on the graph of $y = f(x)$.",
                  "reason": "Graph of a function: the height of the graph at $x = 2$ is $f(2)$."
                },
                {
                  "step": "The point $(-22, 2)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-5, 0)$, $E(-2, -1)$, $M(0, -4)$ and $V(1, -5)$.",
            "figure": {
              "file": "graphs-of-inverse-functions-77.svg",
              "alt": "The graph of y = f(x), a broken line from C(−5, 0) through E(−2, −1) through M(0, −4) to V(1, −5)."
            },
            "lines": [
              {
                "step": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-5, 0)$, $E(-2, -1)$, $M(0, -4)$ and $V(1, -5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The marked points go to $A(0, -5)$, $G(-1, -2)$, $S(-4, 0)$, $W(-5, 1)$.",
                "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
              },
              {
                "step": "The graph of $y = f(x)$ crosses the $y$-axis at $(0, -4)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "The graph of $y = f(x)$ crosses the $x$-axis at $(-5, 0)$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "So the graph of $y = f^{-1}(x)$ crosses the $x$-axis at $(-4, 0)$ and the $y$-axis at $(0, -5)$.",
                "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
              },
              {
                "step": "The broken line through $A$, $G$, $S$ and $W$ is the graph, the mirror image of the given broken line in $y = x$.",
                "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                "figure": {
                  "file": "graphs-of-inverse-functions-78.svg",
                  "alt": "The graph of y = f⁻¹(x), a broken line from A(0, −5) through G(−1, −2) through S(−4, 0) to W(−5, 1). The dashed line is y = x."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $H(-5, -1)$, $R(-4, 0)$, $V(-1, 1)$ and $W(0, 4)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-3.svg",
                "alt": "The graph of y = f(x), a broken line from H(−5, −1) through R(−4, 0) through V(−1, 1) to W(0, 4)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -4)$",
                  "$(4, 0)$"
                ],
                "turning": [
                  "$(0, -4)$",
                  "$(1, -1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $H(-5, -1)$, $R(-4, 0)$, $V(-1, 1)$ and $W(0, 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The marked points go to $B(-1, -5)$, $C(0, -4)$, $J(1, -1)$, $L(4, 0)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The graph of $y = f(x)$ crosses the $y$-axis at $(0, 4)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The graph of $y = f(x)$ crosses the $x$-axis at $(-4, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "So the graph of $y = f^{-1}(x)$ crosses the $x$-axis at $(4, 0)$ and the $y$-axis at $(0, -4)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The broken line through $B$, $C$, $J$ and $L$ is the graph, the mirror image of the given broken line in $y = x$.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                  "figure": {
                    "file": "graphs-of-inverse-functions-4.svg",
                    "alt": "The graph of y = f⁻¹(x), a broken line from B(−1, −5) through C(0, −4) through J(1, −1) to L(4, 0). The dashed line is y = x."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-4, -5)$, $M(0, -4)$, $P(1, -1)$ and $S(4, 2)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-79.svg",
                "alt": "The graph of y = f(x), a broken line from C(−4, −5) through M(0, −4) through P(1, −1) to S(4, 2)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-4, 0)$",
                  "$(0, 2)$"
                ],
                "turning": [
                  "$(-4, 0)$",
                  "$(-1, 1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-4, -5)$, $M(0, -4)$, $P(1, -1)$ and $S(4, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The marked points go to $J(-5, -4)$, $K(-4, 0)$, $L(-1, 1)$, $Q(2, 4)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The graph of $y = f(x)$ crosses the $y$-axis at $(0, -4)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The graph of $y = f(x)$ crosses the $x$-axis at $(2, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "So the graph of $y = f^{-1}(x)$ crosses the $x$-axis at $(-4, 0)$ and the $y$-axis at $(0, 2)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The broken line through $J$, $K$, $L$ and $Q$ is the graph, the mirror image of the given broken line in $y = x$.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                  "figure": {
                    "file": "graphs-of-inverse-functions-80.svg",
                    "alt": "The graph of y = f⁻¹(x), a broken line from J(−5, −4) through K(−4, 0) through L(−1, 1) to Q(2, 4). The dashed line is y = x."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-4, 4)$, $E(-1, 2)$, $G(0, 1)$ and $P(4, 0)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-7.svg",
                "alt": "The graph of y = f(x), a broken line from C(−4, 4) through E(−1, 2) through G(0, 1) to P(4, 0)."
              },
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 4)$",
                  "$(1, 0)$"
                ],
                "turning": [
                  "$(2, -1)$",
                  "$(1, 0)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f^{-1}(x)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-4, 4)$, $E(-1, 2)$, $G(0, 1)$ and $P(4, 0)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The marked points go to $H(4, -4)$, $N(2, -1)$, $R(1, 0)$, $U(0, 4)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The graph of $y = f(x)$ crosses the $y$-axis at $(0, 1)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The graph of $y = f(x)$ crosses the $x$-axis at $(4, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "So the graph of $y = f^{-1}(x)$ crosses the $x$-axis at $(1, 0)$ and the $y$-axis at $(0, 4)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The broken line through $H$, $N$, $R$ and $U$ is the graph, the mirror image of the given broken line in $y = x$.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                  "figure": {
                    "file": "graphs-of-inverse-functions-8.svg",
                    "alt": "The graph of y = f⁻¹(x), a broken line from H(4, −4) through N(2, −1) through R(1, 0) to U(0, 4). The dashed line is y = x."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{-1}(2)$, where the graph of $y = f(x)$ is the broken line in the figure, through $H(-5, 0)$, $J(-4, 2)$, $M(-1, 3)$ and $P(0, 5)$.",
            "figure": {
              "file": "graphs-of-inverse-functions-17.svg",
              "alt": "The graph of y = f(x), a broken line from H(−5, 0) through J(−4, 2) through M(−1, 3) to P(0, 5)."
            },
            "lines": [
              {
                "step": "Find $f^{-1}(2)$, where the graph of $y = f(x)$ is the broken line in the figure, through $H(-5, 0)$, $J(-4, 2)$, $M(-1, 3)$ and $P(0, 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The horizontal line $y = 2$ meets the broken line at $J(-4, 2)$ and nowhere else.",
                "reason": "Horizontal line $y = c$: each straight piece of the broken line rises, so the height $2$ is reached once."
              },
              {
                "step": "So $(2, -4)$ lies on the graph of $y = f^{-1}(x)$.",
                "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
              },
              {
                "step": "$f^{-1}(2) = -4$",
                "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = 2$ is $f^{-1}(2)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{-1}(-2)$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-5, 5)$, $D(-2, 1)$, $G(-1, 0)$ and $S(1, -2)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-18.svg",
                "alt": "The graph of y = f(x), a broken line from A(−5, 5) through D(−2, 1) through G(−1, 0) to S(1, −2)."
              },
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find $f^{-1}(-2)$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-5, 5)$, $D(-2, 1)$, $G(-1, 0)$ and $S(1, -2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The horizontal line $y = -2$ meets the broken line at $S(1, -2)$ and nowhere else.",
                  "reason": "Horizontal line $y = c$: each straight piece of the broken line falls, so the height $-2$ is reached once."
                },
                {
                  "step": "So $(-2, 1)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "$f^{-1}(-2) = 1$",
                  "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = -2$ is $f^{-1}(-2)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(1)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-3, 3)$, $N(-2, 1)$, $R(1, -2)$ and $V(4, -4)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-19.svg",
                "alt": "The graph of y = f(x), a broken line from C(−3, 3) through N(−2, 1) through R(1, −2) to V(4, −4)."
              },
              "form": "Answer as an integer.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Find $f^{-1}(1)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-3, 3)$, $N(-2, 1)$, $R(1, -2)$ and $V(4, -4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The horizontal line $y = 1$ meets the broken line at $N(-2, 1)$ and nowhere else.",
                  "reason": "Horizontal line $y = c$: each straight piece of the broken line falls, so the height $1$ is reached once."
                },
                {
                  "step": "So $(1, -2)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "$f^{-1}(1) = -2$",
                  "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = 1$ is $f^{-1}(1)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(3)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-2, 4)$, $D(-1, 3)$, $L(3, -1)$ and $P(5, -5)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-20.svg",
                "alt": "The graph of y = f(x), a broken line from C(−2, 4) through D(−1, 3) through L(3, −1) to P(5, −5)."
              },
              "form": "Answer as an integer.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Find $f^{-1}(3)$, where the graph of $y = f(x)$ is the broken line in the figure, through $C(-2, 4)$, $D(-1, 3)$, $L(3, -1)$ and $P(5, -5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The horizontal line $y = 3$ meets the broken line at $D(-1, 3)$ and nowhere else.",
                  "reason": "Horizontal line $y = c$: each straight piece of the broken line falls, so the height $3$ is reached once."
                },
                {
                  "step": "So $(3, -1)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "$f^{-1}(3) = -1$",
                  "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = 3$ is $f^{-1}(3)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $a$ with $f^{-1}(a) = 1$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-4, -2)$, $J(-2, -1)$, $Q(0, 1)$ and $W(1, 2)$.",
            "figure": {
              "file": "graphs-of-inverse-functions-29.svg",
              "alt": "The graph of y = f(x), a broken line from A(−4, −2) through J(−2, −1) through Q(0, 1) to W(1, 2)."
            },
            "lines": [
              {
                "step": "Find a number $a$ with $f^{-1}(a) = 1$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-4, -2)$, $J(-2, -1)$, $Q(0, 1)$ and $W(1, 2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The point $(a, 1)$ lies on the graph of $y = f^{-1}(x)$.",
                "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = a$ is $f^{-1}(a)$."
              },
              {
                "step": "So $(1, a)$ lies on the graph of $y = f(x)$.",
                "reason": "Graphs of inverse functions: $f$ is the inverse of $f^{-1}$, so $(b, a)$ on the graph of $f^{-1}$ puts $(a, b)$ on the graph of $f$."
              },
              {
                "step": "The broken line at $x = 1$ passes through $W(1, 2)$, so $a = 2$.",
                "reason": "Graph of a function: the height of the graph at $x = 1$ is $f(1)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ with $f^{-1}(a) = 2$, where the graph of $y = f(x)$ is the broken line in the figure, through $K(-5, -4)$, $N(-4, -2)$, $P(-2, 2)$ and $U(2, 4)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-30.svg",
                "alt": "The graph of y = f(x), a broken line from K(−5, −4) through N(−4, −2) through P(−2, 2) to U(2, 4)."
              },
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find a number $a$ with $f^{-1}(a) = 2$, where the graph of $y = f(x)$ is the broken line in the figure, through $K(-5, -4)$, $N(-4, -2)$, $P(-2, 2)$ and $U(2, 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point $(a, 2)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = a$ is $f^{-1}(a)$."
                },
                {
                  "step": "So $(2, a)$ lies on the graph of $y = f(x)$.",
                  "reason": "Graphs of inverse functions: $f$ is the inverse of $f^{-1}$, so $(b, a)$ on the graph of $f^{-1}$ puts $(a, b)$ on the graph of $f$."
                },
                {
                  "step": "The broken line at $x = 2$ passes through $U(2, 4)$, so $a = 4$.",
                  "reason": "Graph of a function: the height of the graph at $x = 2$ is $f(2)$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ with $f^{-1}(a) = 1$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-5, 4)$, $E(-4, 0)$, $K(-3, -1)$ and $W(1, -5)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-31.svg",
                "alt": "The graph of y = f(x), a broken line from A(−5, 4) through E(−4, 0) through K(−3, −1) to W(1, −5)."
              },
              "form": "Answer as an integer.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Find a number $a$ with $f^{-1}(a) = 1$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(-5, 4)$, $E(-4, 0)$, $K(-3, -1)$ and $W(1, -5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point $(a, 1)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = a$ is $f^{-1}(a)$."
                },
                {
                  "step": "So $(1, a)$ lies on the graph of $y = f(x)$.",
                  "reason": "Graphs of inverse functions: $f$ is the inverse of $f^{-1}$, so $(b, a)$ on the graph of $f^{-1}$ puts $(a, b)$ on the graph of $f$."
                },
                {
                  "step": "The broken line at $x = 1$ passes through $W(1, -5)$, so $a = -5$.",
                  "reason": "Graph of a function: the height of the graph at $x = 1$ is $f(1)$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ with $f^{-1}(a) = 3$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(0, -5)$, $C(1, -2)$, $K(3, -1)$ and $L(5, 0)$.",
              "figure": {
                "file": "graphs-of-inverse-functions-32.svg",
                "alt": "The graph of y = f(x), a broken line from A(0, −5) through C(1, −2) through K(3, −1) to L(5, 0)."
              },
              "form": "Answer as an integer.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Find a number $a$ with $f^{-1}(a) = 3$, where the graph of $y = f(x)$ is the broken line in the figure, through $A(0, -5)$, $C(1, -2)$, $K(3, -1)$ and $L(5, 0)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point $(a, 3)$ lies on the graph of $y = f^{-1}(x)$.",
                  "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = a$ is $f^{-1}(a)$."
                },
                {
                  "step": "So $(3, a)$ lies on the graph of $y = f(x)$.",
                  "reason": "Graphs of inverse functions: $f$ is the inverse of $f^{-1}$, so $(b, a)$ on the graph of $f^{-1}$ puts $(a, b)$ on the graph of $f$."
                },
                {
                  "step": "The broken line at $x = 3$ passes through $K(3, -1)$, so $a = -1$.",
                  "reason": "Graph of a function: the height of the graph at $x = 3$ is $f(3)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t165-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the function whose graph is the broken line $HJVW$ in the figure has an inverse.",
            "figure": {
              "file": "graphs-of-inverse-functions-41.svg",
              "alt": "A broken line from H(−5, −4) through J(−3, −1) through V(−1, 0) to W(1, 2)."
            },
            "lines": [
              {
                "step": "Decide whether the function whose graph is the broken line $HJVW$ in the figure has an inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "From left to right the marked points have the heights $-4$, $-1$, $0$ and $2$, so each straight piece rises.",
                "reason": "Graph of a function: the height of the graph at each marked point is its second coordinate."
              },
              {
                "step": "So each horizontal line meets the broken line at most once.",
                "reason": "Horizontal line $y = c$: a piece that rises meets a horizontal line at most once, and each piece takes heights the pieces before it never reach."
              },
              {
                "step": "Yes: the function has an inverse.",
                "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the function whose graph is the broken line $EKRV$ in the figure has an inverse.",
              "figure": {
                "file": "graphs-of-inverse-functions-42.svg",
                "alt": "A broken line from E(−4, 4) through K(−2, −2) through R(1, −5) to V(4, −4)."
              },
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the function whose graph is the broken line $EKRV$ in the figure has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The horizontal line $y = -4$ meets the broken line at $V(4, -4)$ and at $(0, -4)$.",
                  "reason": "Horizontal line $y = c$: every point of the line $y = -4$ has height $-4$, and the broken line reaches that height at both points."
                },
                {
                  "step": "So the output $-4$ comes from the two inputs $4$ and $0$.",
                  "reason": "Graph of a function: the height of the graph at $x = a$ is $f(a)$."
                },
                {
                  "step": "No: the function has no inverse.",
                  "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
                }
              ]
            },
            {
              "prompt": "Decide whether the function whose graph is the broken line $MNPR$ in the figure has an inverse.",
              "figure": {
                "file": "graphs-of-inverse-functions-43.svg",
                "alt": "A broken line from M(−3, 3) through N(−2, 1) through P(0, −1) to R(4, −2)."
              },
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the function whose graph is the broken line $MNPR$ in the figure has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From left to right the marked points have the heights $3$, $1$, $-1$ and $-2$, so each straight piece falls.",
                  "reason": "Graph of a function: the height of the graph at each marked point is its second coordinate."
                },
                {
                  "step": "So each horizontal line meets the broken line at most once.",
                  "reason": "Horizontal line $y = c$: a piece that falls meets a horizontal line at most once, and each piece takes heights the pieces before it never reach."
                },
                {
                  "step": "Yes: the function has an inverse.",
                  "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
                }
              ]
            },
            {
              "prompt": "Decide whether the function whose graph is the broken line $JQRVW$ in the figure has an inverse.",
              "figure": {
                "file": "graphs-of-inverse-functions-44.svg",
                "alt": "A broken line from J(−4, −2) through Q(−2, −1) through R(−1, 5) through V(1, 2) to W(4, −4)."
              },
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the function whose graph is the broken line $JQRVW$ in the figure has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The horizontal line $y = -2$ meets the broken line at $J(-4, -2)$ and at $(3, -2)$.",
                  "reason": "Horizontal line $y = c$: every point of the line $y = -2$ has height $-2$, and the broken line reaches that height at both points."
                },
                {
                  "step": "So the output $-2$ comes from the two inputs $-4$ and $3$.",
                  "reason": "Graph of a function: the height of the graph at $x = a$ is $f(a)$."
                },
                {
                  "step": "No: the function has no inverse.",
                  "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t165-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the function $f(x) = 2x^3 - 32x - 14$ has an inverse.",
            "lines": [
              {
                "step": "Decide whether the function $f(x) = 2x^3 - 32x - 14$ has an inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Two inputs $p$ and $q$ with $f(p) = f(q)$ give $2p^3 - 32p - 14 = 2q^3 - 32q - 14$.",
                "reason": "Substituting a value: $p$ and then $q$ go in place of $x$."
              },
              {
                "step": "$2(p^3 - q^3) - 32(p - q) = 0$",
                "reason": "Adding the same number to both sides: $-(2q^3 - 32q - 14)$ is added to each side."
              },
              {
                "step": "$2(p - q)(p^2 + pq + q^2 - 16) = 0$",
                "reason": "Difference of cubes: $p^3 - q^3 = (p - q)(p^2 + pq + q^2)$, so $p - q$ is a factor of both terms."
              },
              {
                "step": "With $p = 0$ and $q = 4$ the second bracket is $0^2 + 0 \\cdot 4 + 4^2 - 16 = 0$",
                "reason": "Substituting a value: $0$ goes in place of $p$, and $4$ in place of $q$."
              },
              {
                "step": "$f(0) = f(4) = -14$",
                "reason": "Substituting a value: $f(0) = 2 \\cdot 0^3 - 32 \\cdot 0 - 14 = -14$ and $f(4) = 2 \\cdot 4^3 - 32 \\cdot 4 - 14 = -14$."
              },
              {
                "step": "No: the horizontal line $y = -14$ meets the graph at $x = 0$ and at $x = 4$, so $f$ has no inverse.",
                "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the function $f(x) = -x^3 - 8x + 12$ has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the function $f(x) = -x^3 - 8x + 12$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Two inputs $p$ and $q$ with $f(p) = f(q)$ give $-p^3 - 8p + 12 = -q^3 - 8q + 12$.",
                  "reason": "Substituting a value: $p$ and then $q$ go in place of $x$."
                },
                {
                  "step": "$-(p^3 - q^3) - 8(p - q) = 0$",
                  "reason": "Adding the same number to both sides: $-(-q^3 - 8q + 12)$ is added to each side."
                },
                {
                  "step": "$-(p - q)(p^2 + pq + q^2 + 8) = 0$",
                  "reason": "Difference of cubes: $p^3 - q^3 = (p - q)(p^2 + pq + q^2)$, so $p - q$ is a factor of both terms."
                },
                {
                  "step": "$p^2 + pq + q^2 + 8 = \\left(p + \\dfrac{q}{2}\\right)^2 + \\dfrac{3q^2}{4} + 8$",
                  "reason": "Completing the square in letters: $p^2 + pq = \\left(p + \\dfrac{q}{2}\\right)^2 - \\dfrac{q^2}{4}$."
                },
                {
                  "step": "So the second bracket is at least $8$.",
                  "reason": "Trivial Inequality: squares are never negative."
                },
                {
                  "step": "So $p - q = 0$.",
                  "reason": "Zero-product property: the product is $0$ and the second bracket is not, so the first factor is $0$."
                },
                {
                  "step": "Yes: two different inputs never give one output, so no horizontal line meets the graph twice, and $f$ has an inverse.",
                  "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
                }
              ]
            },
            {
              "prompt": "Decide whether the function $f(x) = 3x^3 - 12x + 17$ has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the function $f(x) = 3x^3 - 12x + 17$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Two inputs $p$ and $q$ with $f(p) = f(q)$ give $3p^3 - 12p + 17 = 3q^3 - 12q + 17$.",
                  "reason": "Substituting a value: $p$ and then $q$ go in place of $x$."
                },
                {
                  "step": "$3(p^3 - q^3) - 12(p - q) = 0$",
                  "reason": "Adding the same number to both sides: $-(3q^3 - 12q + 17)$ is added to each side."
                },
                {
                  "step": "$3(p - q)(p^2 + pq + q^2 - 4) = 0$",
                  "reason": "Difference of cubes: $p^3 - q^3 = (p - q)(p^2 + pq + q^2)$, so $p - q$ is a factor of both terms."
                },
                {
                  "step": "With $p = 0$ and $q = 2$ the second bracket is $0^2 + 0 \\cdot 2 + 2^2 - 4 = 0$",
                  "reason": "Substituting a value: $0$ goes in place of $p$, and $2$ in place of $q$."
                },
                {
                  "step": "$f(0) = f(2) = 17$",
                  "reason": "Substituting a value: $f(0) = 3 \\cdot 0^3 - 12 \\cdot 0 + 17 = 17$ and $f(2) = 3 \\cdot 2^3 - 12 \\cdot 2 + 17 = 17$."
                },
                {
                  "step": "No: the horizontal line $y = 17$ meets the graph at $x = 0$ and at $x = 2$, so $f$ has no inverse.",
                  "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
                }
              ]
            },
            {
              "prompt": "Decide whether the function $f(x) = x^3 + 7x + 6$ has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the function $f(x) = x^3 + 7x + 6$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Two inputs $p$ and $q$ with $f(p) = f(q)$ give $p^3 + 7p + 6 = q^3 + 7q + 6$.",
                  "reason": "Substituting a value: $p$ and then $q$ go in place of $x$."
                },
                {
                  "step": "$(p^3 - q^3) + 7(p - q) = 0$",
                  "reason": "Adding the same number to both sides: $-(q^3 + 7q + 6)$ is added to each side."
                },
                {
                  "step": "$(p - q)(p^2 + pq + q^2 + 7) = 0$",
                  "reason": "Difference of cubes: $p^3 - q^3 = (p - q)(p^2 + pq + q^2)$, so $p - q$ is a factor of both terms."
                },
                {
                  "step": "$p^2 + pq + q^2 + 7 = \\left(p + \\dfrac{q}{2}\\right)^2 + \\dfrac{3q^2}{4} + 7$",
                  "reason": "Completing the square in letters: $p^2 + pq = \\left(p + \\dfrac{q}{2}\\right)^2 - \\dfrac{q^2}{4}$."
                },
                {
                  "step": "So the second bracket is at least $7$.",
                  "reason": "Trivial Inequality: squares are never negative."
                },
                {
                  "step": "So $p - q = 0$.",
                  "reason": "Zero-product property: the product is $0$ and the second bracket is not, so the first factor is $0$."
                },
                {
                  "step": "Yes: two different inputs never give one output, so no horizontal line meets the graph twice, and $f$ has an inverse.",
                  "reason": "Graphs of inverse functions: by the horizontal line test, a function has an inverse exactly when no horizontal line meets its graph at more than one point."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t165-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(10, -3)$.",
            "lines": [
              {
                "step": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(10, -3)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(f(x)) = a(ax + b) + b = a^2x + ab + b$",
                "reason": "Composition $f(g(x))$: $ax + b$, in brackets, goes in place of $x$, and the bracket is multiplied out."
              },
              {
                "step": "So $a^2x + ab + b = x$ for every $x$.",
                "reason": "Inverse function: $f$ is its own inverse, so $f(f(x)) = x$."
              },
              {
                "step": "So $a^2 = 1$ and $ab + b = 0$.",
                "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ and the constant terms agree."
              },
              {
                "step": "So $a = 1$ or $a = -1$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "With $a = 1$, $2b = 0$, so $b = 0$ and $f(x) = x$.",
                "reason": "Dividing both sides by a nonzero number: both sides of $2b = 0$ are divided by $2$."
              },
              {
                "step": "Then $f(10) = 10 \\ne -3$, so $a = -1$.",
                "reason": "Substituting a value: $10$ goes in place of $x$, and the graph passes through $(10, -3)$."
              },
              {
                "step": "$-3 = -10 + b$",
                "reason": "Graph of a function: the height of the graph at $x = 10$ is $f(10)$."
              },
              {
                "step": "$b = 7$",
                "reason": "Adding the same number to both sides: $10$ is added to each side."
              },
              {
                "step": "$y = -x + 7$",
                "reason": "Substituting a value: $a = -1$ and $b = 7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(11, -16)$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -x-5",
              "lines": [
                {
                  "step": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(11, -16)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = a(ax + b) + b = a^2x + ab + b$",
                  "reason": "Composition $f(g(x))$: $ax + b$, in brackets, goes in place of $x$, and the bracket is multiplied out."
                },
                {
                  "step": "So $a^2x + ab + b = x$ for every $x$.",
                  "reason": "Inverse function: $f$ is its own inverse, so $f(f(x)) = x$."
                },
                {
                  "step": "So $a^2 = 1$ and $ab + b = 0$.",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ and the constant terms agree."
                },
                {
                  "step": "So $a = 1$ or $a = -1$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "With $a = 1$, $2b = 0$, so $b = 0$ and $f(x) = x$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of $2b = 0$ are divided by $2$."
                },
                {
                  "step": "Then $f(11) = 11 \\ne -16$, so $a = -1$.",
                  "reason": "Substituting a value: $11$ goes in place of $x$, and the graph passes through $(11, -16)$."
                },
                {
                  "step": "$-16 = -11 + b$",
                  "reason": "Graph of a function: the height of the graph at $x = 11$ is $f(11)$."
                },
                {
                  "step": "$b = -5$",
                  "reason": "Adding the same number to both sides: $11$ is added to each side."
                },
                {
                  "step": "$y = -x - 5$",
                  "reason": "Substituting a value: $a = -1$ and $b = -5$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(2, 20)$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -x+22",
              "lines": [
                {
                  "step": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(2, 20)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = a(ax + b) + b = a^2x + ab + b$",
                  "reason": "Composition $f(g(x))$: $ax + b$, in brackets, goes in place of $x$, and the bracket is multiplied out."
                },
                {
                  "step": "So $a^2x + ab + b = x$ for every $x$.",
                  "reason": "Inverse function: $f$ is its own inverse, so $f(f(x)) = x$."
                },
                {
                  "step": "So $a^2 = 1$ and $ab + b = 0$.",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ and the constant terms agree."
                },
                {
                  "step": "So $a = 1$ or $a = -1$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "With $a = 1$, $2b = 0$, so $b = 0$ and $f(x) = x$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of $2b = 0$ are divided by $2$."
                },
                {
                  "step": "Then $f(2) = 2 \\ne 20$, so $a = -1$.",
                  "reason": "Substituting a value: $2$ goes in place of $x$, and the graph passes through $(2, 20)$."
                },
                {
                  "step": "$20 = -2 + b$",
                  "reason": "Graph of a function: the height of the graph at $x = 2$ is $f(2)$."
                },
                {
                  "step": "$b = 22$",
                  "reason": "Adding the same number to both sides: $2$ is added to each side."
                },
                {
                  "step": "$y = -x + 22$",
                  "reason": "Substituting a value: $a = -1$ and $b = 22$."
                }
              ]
            },
            {
              "prompt": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(8, -11)$.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = -x-3",
              "lines": [
                {
                  "step": "Find the equation of the graph of $y = f(x)$, where $f(x) = ax + b$ is its own inverse and its graph passes through $(8, -11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(f(x)) = a(ax + b) + b = a^2x + ab + b$",
                  "reason": "Composition $f(g(x))$: $ax + b$, in brackets, goes in place of $x$, and the bracket is multiplied out."
                },
                {
                  "step": "So $a^2x + ab + b = x$ for every $x$.",
                  "reason": "Inverse function: $f$ is its own inverse, so $f(f(x)) = x$."
                },
                {
                  "step": "So $a^2 = 1$ and $ab + b = 0$.",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ and the constant terms agree."
                },
                {
                  "step": "So $a = 1$ or $a = -1$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "With $a = 1$, $2b = 0$, so $b = 0$ and $f(x) = x$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of $2b = 0$ are divided by $2$."
                },
                {
                  "step": "Then $f(8) = 8 \\ne -11$, so $a = -1$.",
                  "reason": "Substituting a value: $8$ goes in place of $x$, and the graph passes through $(8, -11)$."
                },
                {
                  "step": "$-11 = -8 + b$",
                  "reason": "Graph of a function: the height of the graph at $x = 8$ is $f(8)$."
                },
                {
                  "step": "$b = -3$",
                  "reason": "Adding the same number to both sides: $8$ is added to each side."
                },
                {
                  "step": "$y = -x - 3$",
                  "reason": "Substituting a value: $a = -1$ and $b = -3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t165-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(-9, -4)$ and $Q(12, 10)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
            "given": [
              "$R = (-9, 4)$",
              "$S = (10, 12)$",
              "$\\dfrac{12 - 4}{10 - (-9)} = \\dfrac{8}{19}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(-9, -4)$ and $Q(12, 10)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 gives $R = (-9, 4)$, the mirror image of $P(-9, -4)$ in the $x$-axis.",
                "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$. An axis is never that line."
              },
              {
                "step": "Line 1 written right is $R = (-4, -9)$.",
                "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(7, -5)$ and $Q(-12, -9)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
              "given": [
                "$R = (-5, 7)$",
                "$S = (12, -9)$",
                "$\\dfrac{-9 - 7}{12 - (-5)} = -\\dfrac{16}{17}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: S = (-9, -12)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(7, -5)$ and $Q(-12, -9)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives $S = (12, -9)$, the mirror image of $Q(-12, -9)$ in the $y$-axis.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$. An axis is never that line."
                },
                {
                  "step": "Line 2 written right is $S = (-9, -12)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(-11, 7)$ and $Q(9, -5)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
              "given": [
                "$R = (7, -11)$",
                "$S = (-9, -5)$",
                "$\\dfrac{-5 - (-11)}{-9 - 7} = -\\dfrac{3}{8}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: S = (-5, 9)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(-11, 7)$ and $Q(9, -5)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives $S = (-9, -5)$, the mirror image of $Q(9, -5)$ in the $y$-axis.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$. An axis is never that line."
                },
                {
                  "step": "Line 2 written right is $S = (-5, 9)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(8, -6)$ and $Q(4, -12)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
              "given": [
                "$R = (8, 6)$",
                "$S = (-12, 4)$",
                "$\\dfrac{4 - 6}{-12 - 8} = \\dfrac{1}{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: R = (-6, 8)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, and write that line right: the graph of $y = f(x)$ passes through $P(8, -6)$ and $Q(4, -12)$, $f$ has an inverse, $R$ and $S$ are the points of the graph of $y = f^{-1}(x)$ that match $P$ and $Q$, and the working finds the slope of $RS$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 gives $R = (8, 6)$, the mirror image of $P(8, -6)$ in the $x$-axis.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$. An axis is never that line."
                },
                {
                  "step": "Line 1 written right is $R = (-6, 8)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t165-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = 2x^3 + 16$.",
            "lines": [
              {
                "step": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = 2x^3 + 16$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph of $y = f(x)$ meets the $y$-axis at $(0, 16)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $f(0) = 16$."
              },
              {
                "step": "The graph of $y = f(x)$ meets the $x$-axis at $(-2, 0)$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$, and $f(-2) = 2 \\cdot (-2)^3 + 16 = 0$."
              },
              {
                "step": "The graph of $y = f^{-1}(x)$ meets the $x$-axis at $(16, 0)$ and the $y$-axis at $(0, -2)$.",
                "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
              },
              {
                "step": "The graphs pass through these pairs of points, each the mirror image of the other in $y = x$.",
                "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                "figure": {
                  "file": "graphs-of-inverse-functions-59.svg",
                  "alt": "Two curves: y = f(x) through (0, 16) and (−2, 0), and y = f⁻¹(x) through (16, 0) and (0, −2), mirror images in the dashed line y = x."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = x^3 + 27$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 27)$",
                  "$(-3, 0)$",
                  "$(27, 0)$",
                  "$(0, -3)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = x^3 + 27$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = f(x)$ meets the $y$-axis at $(0, 27)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $f(0) = 27$."
                },
                {
                  "step": "The graph of $y = f(x)$ meets the $x$-axis at $(-3, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$, and $f(-3) = (-3)^3 + 27 = 0$."
                },
                {
                  "step": "The graph of $y = f^{-1}(x)$ meets the $x$-axis at $(27, 0)$ and the $y$-axis at $(0, -3)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The graphs pass through these pairs of points, each the mirror image of the other in $y = x$.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                  "figure": {
                    "file": "graphs-of-inverse-functions-60.svg",
                    "alt": "Two curves: y = f(x) through (0, 27) and (−3, 0), and y = f⁻¹(x) through (27, 0) and (0, −3), mirror images in the dashed line y = x."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = 3x^3 - 3$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -3)$",
                  "$(1, 0)$",
                  "$(-3, 0)$",
                  "$(0, 1)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = 3x^3 - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = f(x)$ meets the $y$-axis at $(0, -3)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $f(0) = -3$."
                },
                {
                  "step": "The graph of $y = f(x)$ meets the $x$-axis at $(1, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$, and $f(1) = 3 \\cdot 1^3 - 3 = 0$."
                },
                {
                  "step": "The graph of $y = f^{-1}(x)$ meets the $x$-axis at $(-3, 0)$ and the $y$-axis at $(0, 1)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The graphs pass through these pairs of points, each the mirror image of the other in $y = x$.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                  "figure": {
                    "file": "graphs-of-inverse-functions-61.svg",
                    "alt": "Two curves: y = f(x) through (0, −3) and (1, 0), and y = f⁻¹(x) through (−3, 0) and (0, 1), mirror images in the dashed line y = x."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = -2x + 4$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 4)$",
                  "$(2, 0)$",
                  "$(4, 0)$",
                  "$(0, 2)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = f(x)$ and $y = f^{-1}(x)$ on one pair of axes, where $f(x) = -2x + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = f(x)$ meets the $y$-axis at $(0, 4)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $f(0) = 4$."
                },
                {
                  "step": "The graph of $y = f(x)$ meets the $x$-axis at $(2, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$, and $f(2) = -2 \\cdot 2 + 4 = 0$."
                },
                {
                  "step": "The graph of $y = f^{-1}(x)$ meets the $x$-axis at $(4, 0)$ and the $y$-axis at $(0, 2)$.",
                  "reason": "Graphs of inverse functions: $(a, b)$ on the graph of $f$ puts $(b, a)$ on the graph of $f^{-1}$."
                },
                {
                  "step": "The graphs pass through these pairs of points, each the mirror image of the other in $y = x$.",
                  "reason": "Graphs of inverse functions: the graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$.",
                  "figure": {
                    "file": "graphs-of-inverse-functions-62.svg",
                    "alt": "Two straight lines: y = f(x) through (0, 4) and (2, 0), and y = f⁻¹(x) through (4, 0) and (0, 2), mirror images in the dashed line y = x."
                  }
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
      "id": "t165-p1",
      "method": "direct proof",
      "statement": "For a function $f$ that has an inverse $f^{-1}$, if the point $(a, b)$ lies on the graph of $y = f(x)$, then the point $(b, a)$ lies on the graph of $y = f^{-1}(x)$.",
      "idea": "Undo $f$ at the point. The inverse sends the output $b$ back to the input $a$, so on the graph of the inverse the two coordinates trade places.",
      "lines": [
        {
          "line": "The point $(a, b)$ lies on the graph of $y = f(x)$.",
          "reason": "This is the hypothesis."
        },
        {
          "line": "So $f(a) = b$.",
          "reason": "Graph of a function: the height of the graph at $x = a$ is $f(a)$."
        },
        {
          "line": "And $f^{-1}(f(a)) = a$.",
          "reason": "Inverse function: $f^{-1}(f(x)) = x$ for each $x$ in the domain of $f$."
        },
        {
          "line": "So $f^{-1}(b) = a$.",
          "reason": "Substituting a value: by line 2, $b$ goes in place of $f(a)$ in line 3."
        },
        {
          "line": "Therefore $(b, a)$ lies on the graph of $y = f^{-1}(x)$.",
          "reason": "Graph of a function: the height of the graph of $y = f^{-1}(x)$ at $x = b$ is $f^{-1}(b)$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t165-s1",
      "method": "proof of existence by construction",
      "statement": "Prove that a function $f$ whose graph no horizontal line meets at more than one point has an inverse. Facts it may use: graph of a function, function, inverse function, range, horizontal line $y = c$.",
      "check": {
        "proof": [
          {
            "line": "Let $c$ be an output of $f$.",
            "reason": "Range: the outputs of $f$ form its range."
          },
          {
            "line": "The horizontal line $y = c$ meets the graph of $y = f(x)$ at exactly one point $(a, c)$.",
            "reason": "Horizontal line $y = c$: the line meets the graph at least once, since $c$ is an output, and at most once, by the hypothesis."
          },
          {
            "line": "Let $g(c) = a$, the one input with $f(a) = c$.",
            "reason": "Function: $g$ gives each output $c$ of $f$ one output $a$."
          },
          {
            "line": "Then $f(g(c)) = f(a) = c$ for each $c$ in the range of $f$.",
            "reason": "Substituting a value: by line 3, $a$ goes in place of $g(c)$."
          },
          {
            "line": "Now let $x$ be an input of $f$, with output $f(x)$.",
            "reason": "Graph of a function: the point $(x, f(x))$ lies on the graph."
          },
          {
            "line": "The input $x$ is the one input with output $f(x)$, so $g(f(x)) = x$.",
            "reason": "Lines 2 and 3: the horizontal line $y = f(x)$ meets the graph at one point only."
          },
          {
            "line": "Therefore $g$ is the inverse of $f$.",
            "reason": "Inverse function: lines 4 and 6 give $f(g(x)) = x$ and $g(f(x)) = x$."
          }
        ]
      }
    },
    {
      "id": "t165-s2",
      "method": "direct proof",
      "statement": "Prove that if a function $f$ is its own inverse, then $f(f(x)) = x$ for each $x$ in its domain. Facts it may use: inverse function, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be in the domain of $f$.",
            "reason": "This is the hypothesis: $x$ is a number in the domain."
          },
          {
            "line": "Then $f^{-1}(f(x)) = x$.",
            "reason": "Inverse function: $f^{-1}(f(x)) = x$ for each $x$ in the domain of $f$."
          },
          {
            "line": "And $f^{-1} = f$.",
            "reason": "This is the hypothesis."
          },
          {
            "line": "Therefore $f(f(x)) = x$.",
            "reason": "Substituting a value: by line 3, $f$ goes in place of $f^{-1}$ in line 2."
          }
        ]
      }
    },
    {
      "id": "t165-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $a \\ne b$, the midpoint of the points $(a, b)$ and $(b, a)$ lies on the line $y = x$, and the line through these two points is perpendicular to $y = x$. Facts it may use: midpoint formula, slope, the line $y=mx+b$ has slope $m$, cancelling a common factor, slopes with product $-1$ mean perpendicular.",
      "check": {
        "proof": [
          {
            "line": "The midpoint is $\\left(\\dfrac{a + b}{2}, \\dfrac{b + a}{2}\\right)$.",
            "reason": "Midpoint formula: each coordinate is the mean of the two."
          },
          {
            "line": "Its two coordinates are equal, so it lies on $y = x$.",
            "reason": "The commutative law of addition, from arithmetic: $a + b = b + a$."
          },
          {
            "line": "The slope through the two points is $\\dfrac{a - b}{b - a}$.",
            "reason": "Slope: the change in $y$ over the change in $x$; $b - a \\ne 0$ since $a \\ne b$."
          },
          {
            "line": "And $\\dfrac{a - b}{b - a} = -1$.",
            "reason": "Cancelling a common factor: $a - b = -(b - a)$."
          },
          {
            "line": "The line $y = x$ has slope $1$, and $-1 \\cdot 1 = -1$.",
            "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$."
          },
          {
            "line": "Therefore the line through the two points is perpendicular to $y = x$.",
            "reason": "Slopes with product $-1$ mean perpendicular."
          }
        ]
      }
    },
    {
      "id": "t165-s4",
      "method": "proof by contradiction",
      "statement": "Prove that if $f(p) < f(q)$ whenever $p < q$, then no horizontal line meets the graph of $y = f(x)$ at more than one point. Facts it may use: graph of a function, horizontal line $y = c$, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Suppose the horizontal line $y = c$ meets the graph of $y = f(x)$ at two points $(p, c)$ and $(q, c)$ with $p < q$.",
            "reason": "Proof by contradiction: assume a horizontal line meets the graph twice, and name the point with the smaller first coordinate $(p, c)$."
          },
          {
            "line": "So $f(p) = c$ and $f(q) = c$.",
            "reason": "Graph of a function: the height of the graph at $x = p$ is $f(p)$, and at $x = q$ it is $f(q)$."
          },
          {
            "line": "And $f(p) < f(q)$.",
            "reason": "This is the hypothesis: $p < q$."
          },
          {
            "line": "So $c < c$.",
            "reason": "Substituting a value: by line 2, $c$ goes in place of $f(p)$ and of $f(q)$ in line 3."
          },
          {
            "line": "This is false, so no horizontal line meets the graph at more than one point.",
            "reason": "Proof by contradiction: no number is less than itself, so the assumption of line 1 is false."
          }
        ]
      }
    }
  ]
}
