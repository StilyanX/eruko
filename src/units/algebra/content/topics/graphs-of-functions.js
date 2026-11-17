export default {
  "number": 163,
  "title": "Graphs of functions",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "484-490"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $f(-2)$, where the curve $HLQRW$ in the figure is the graph of $y = f(x)$.",
    "form": "Answer as an integer.",
    "answer": "-5",
    "solution": [
      "Find $f(-2)$, where the curve $HLQRW$ in the figure is the graph of $y = f(x)$.",
      "The point of the curve on the vertical line $x = -2$ is $L(-2, -5)$.",
      "$f(-2) = -5$"
    ],
    "figure": {
      "file": "graphs-of-functions-1.svg",
      "alt": "A curve of straight pieces from H(−3, 5) through L(−2, −5), Q(0, −1), R(1, 4) to W(3, −1)."
    }
  },
  "ideas": [
    {
      "name": "Graph of a function",
      "concrete": "For $f(x) = 5x^2 - 17$, the input $3$ gives $f(3) = 28$, so $(3, 28)$ is a point of the graph of $f$, and the height of the graph at $x = 3$ is $28$. The input $-3$ also gives $28$: two points of a graph may share a height, never an $x$-coordinate.",
      "general": "The **graph of a function** $f$ is the graph of the equation $y = f(x)$: the points $(x, f(x))$ for each $x$ in the domain of $f$. So $f(a)$ is the height of the graph at $x = a$: the one point of the graph on the vertical line $x = a$ is $(a, f(a))$, for each $a$ in the domain."
    },
    {
      "name": "Vertical line test",
      "concrete": "The circle $x^2 + y^2 = 169$ meets the vertical line $x = 5$ at $(5, 12)$ and at $(5, -12)$, so it is not the graph of a function: the input $5$ would have two outputs. The parabola $y = 4x^2 - 19$ meets each vertical line $x = a$ once, at $(a, 4a^2 - 19)$.",
      "general": "A curve in the plane is the graph of a function of $x$ exactly when no vertical line meets it at more than one point. One vertical line $x = a$ that meets it at $(a, p)$ and at $(a, q)$, with $p \\ne q$, shows that it is not."
    },
    {
      "name": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$",
      "concrete": "The graphs of $f(x) = x^3$ and $g(x) = 5x^2 - 14$ cross wherever the higher of the two changes. At $x = -2$ the graph of $f$ is below that of $g$, since $f(-2) = -8$ and $g(-2) = 6$; at $x = -1$ it is above, since $f(-1) = -1$ and $g(-1) = -9$; at $x = 2$ it is still above, since $f(2) = 8$ and $g(2) = 6$; at $x = 3$ it is below, since $f(3) = 27$ and $g(3) = 31$; at $x = 5$ it is above, since $f(5) = 125$ and $g(5) = 111$. So the graphs cross between $-2$ and $-1$, between $2$ and $3$, and between $3$ and $5$, and each crossing gives a solution of $x^3 = 5x^2 - 14$. A sketch shows these three crossings and no more; that count is read from a picture, so it still needs an argument.",
      "general": "For functions $f$ and $g$, a point $(a, b)$ is on both graphs exactly when $b = f(a)$ and $b = g(a)$, so the $x$-coordinates of the common points of the graphs are the solutions of $f(x) = g(x)$. **A graph is not a proof**: a sketch shows where two graphs seem to meet and how often, and only an argument shows that a value or a count is exact."
    }
  ],
  "kinds": [
    {
      "id": "t163-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $f(1)$, where the curve $BJKMQZ$ in the figure is the graph of $y = f(x)$.",
            "figure": {
              "file": "graphs-of-functions-2.svg",
              "alt": "A curve of straight pieces from B(−4, −4) through J(−2, 6), K(−1, −2), M(1, −1), Q(3, −4) to Z(4, 5)."
            },
            "lines": [
              {
                "step": "Find $f(1)$, where the curve $BJKMQZ$ in the figure is the graph of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The point of the curve on the vertical line $x = 1$ is $M(1, -1)$.",
                "reason": "Vertical line $x = c$: every point of the line $x = 1$ has $x$-coordinate $1$, and the marked point $M(1, -1)$ is the one point of the curve with it."
              },
              {
                "step": "$f(1) = -1$",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and the height of $M$ is $-1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(2)$, where the curve $ACHLMS$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-3.svg",
                "alt": "A curve of straight pieces from A(−4, 0) through C(−3, 1), H(−2, 6), L(−1, −6), M(2, 0) to S(4, 5)."
              },
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "Find $f(2)$, where the curve $ACHLMS$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point of the curve on the vertical line $x = 2$ is $M(2, 0)$.",
                  "reason": "Vertical line $x = c$: every point of the line $x = 2$ has $x$-coordinate $2$, and the marked point $M(2, 0)$ is the one point of the curve with it."
                },
                {
                  "step": "$f(2) = 0$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and the height of $M$ is $0$."
                }
              ]
            },
            {
              "prompt": "Find $f(4)$, where the curve $FGQZ$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-4.svg",
                "alt": "A curve of straight pieces from F(−2, 1) through G(1, −4), Q(3, 2) to Z(4, −6)."
              },
              "form": "Answer as an integer.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Find $f(4)$, where the curve $FGQZ$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point of the curve on the vertical line $x = 4$ is $Z(4, -6)$.",
                  "reason": "Vertical line $x = c$: every point of the line $x = 4$ has $x$-coordinate $4$, and the marked point $Z(4, -6)$ is the one point of the curve with it."
                },
                {
                  "step": "$f(4) = -6$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and the height of $Z$ is $-6$."
                }
              ]
            },
            {
              "prompt": "Find $f(-1)$, where the curve $HRVZ$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-5.svg",
                "alt": "A curve of straight pieces from H(−1, 6) through R(1, −4), V(2, 2) to Z(3, 1)."
              },
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find $f(-1)$, where the curve $HRVZ$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point of the curve on the vertical line $x = -1$ is $H(-1, 6)$.",
                  "reason": "Vertical line $x = c$: every point of the line $x = -1$ has $x$-coordinate $-1$, and the marked point $H(-1, 6)$ is the one point of the curve with it."
                },
                {
                  "step": "$f(-1) = 6$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and the height of $H$ is $6$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(f(2))$, where the curve $DHLSZ$ in the figure is the graph of $y = f(x)$.",
            "figure": {
              "file": "graphs-of-functions-6.svg",
              "alt": "A curve of straight pieces from D(−4, −6) through H(−3, 0), L(1, 3), S(2, 4) to Z(4, −6)."
            },
            "lines": [
              {
                "step": "Find $f(f(2))$, where the curve $DHLSZ$ in the figure is the graph of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(2) = 4$",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 2$ is $S(2, 4)$."
              },
              {
                "step": "$f(f(2)) = f(4)$",
                "reason": "Composition $f(g(x))$: the output $f(2)$ is the input of the outer $f$, so it is replaced by its value from line 2."
              },
              {
                "step": "$f(4) = -6$",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 4$ is $Z(4, -6)$."
              },
              {
                "step": "$f(f(2)) = -6$",
                "reason": "Transitive property: lines 3 and 4 give the same number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(f(2))$, where the curve $AGJKV$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-7.svg",
                "alt": "A curve of straight pieces from A(−3, −4) through G(−1, 0), J(0, 1), K(2, 0) to V(3, −1)."
              },
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find $f(f(2))$, where the curve $AGJKV$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = 0$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 2$ is $K(2, 0)$."
                },
                {
                  "step": "$f(f(2)) = f(0)$",
                  "reason": "Composition $f(g(x))$: the output $f(2)$ is the input of the outer $f$, so it is replaced by its value from line 2."
                },
                {
                  "step": "$f(0) = 1$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 0$ is $J(0, 1)$."
                },
                {
                  "step": "$f(f(2)) = 1$",
                  "reason": "Transitive property: lines 3 and 4 give the same number."
                }
              ]
            },
            {
              "prompt": "Find $f(f(0))$, where the curve $CDLPRU$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-8.svg",
                "alt": "A curve of straight pieces from C(−2, 0) through D(0, 1), L(1, −4), P(2, 2), R(3, −4) to U(4, −1)."
              },
              "form": "Answer as an integer.",
              "answer": "-4",
              "lines": [
                {
                  "step": "Find $f(f(0))$, where the curve $CDLPRU$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(0) = 1$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 0$ is $D(0, 1)$."
                },
                {
                  "step": "$f(f(0)) = f(1)$",
                  "reason": "Composition $f(g(x))$: the output $f(0)$ is the input of the outer $f$, so it is replaced by its value from line 2."
                },
                {
                  "step": "$f(1) = -4$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 1$ is $L(1, -4)$."
                },
                {
                  "step": "$f(f(0)) = -4$",
                  "reason": "Transitive property: lines 3 and 4 give the same number."
                }
              ]
            },
            {
              "prompt": "Find $f(f(-1))$, where the curve $AHJKLN$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-9.svg",
                "alt": "A curve of straight pieces from A(−4, 5) through H(−3, 0), J(−2, −6), K(−1, 2), L(1, −1) to N(2, 3)."
              },
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find $f(f(-1))$, where the curve $AHJKLN$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-1) = 2$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = -1$ is $K(-1, 2)$."
                },
                {
                  "step": "$f(f(-1)) = f(2)$",
                  "reason": "Composition $f(g(x))$: the output $f(-1)$ is the input of the outer $f$, so it is replaced by its value from line 2."
                },
                {
                  "step": "$f(2) = 3$",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 2$ is $N(2, 3)$."
                },
                {
                  "step": "$f(f(-1)) = 3$",
                  "reason": "Transitive property: lines 3 and 4 give the same number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every $x$ with $f(x) = 6$, where the curve $ABCGLM$ in the figure is the graph of $y = f(x)$.",
            "figure": {
              "file": "graphs-of-functions-10.svg",
              "alt": "A curve of straight pieces from A(−4, 6) through B(−3, 3), C(−2, −6), G(0, 6), L(1, 5) to M(4, 1)."
            },
            "lines": [
              {
                "step": "Find every $x$ with $f(x) = 6$, where the curve $ABCGLM$ in the figure is the graph of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The solutions are the $x$-coordinates of the points of the curve on the line $y = 6$.",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so $f(x) = 6$ exactly where the curve has height $6$."
              },
              {
                "step": "The line $y = 6$ meets the curve only at $A(-4, 6)$ and $G(0, 6)$.",
                "reason": "Horizontal line $y = c$: every point of the line has height $6$; each straight piece of the curve between two marked points lies on one side of the line, apart from its ends."
              },
              {
                "step": "The solutions are $x = -4$ and $x = 0$.",
                "reason": "Coordinates: the $x$-coordinate of each of these points is read across the grid."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every $x$ with $f(x) = -5$, where the curve $BGMSZ$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-11.svg",
                "alt": "A curve of straight pieces from B(−4, −5) through G(−3, 3), M(−2, −5), S(1, 2) to Z(3, −1)."
              },
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, -2}",
              "lines": [
                {
                  "step": "Find every $x$ with $f(x) = -5$, where the curve $BGMSZ$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The solutions are the $x$-coordinates of the points of the curve on the line $y = -5$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so $f(x) = -5$ exactly where the curve has height $-5$."
                },
                {
                  "step": "The line $y = -5$ meets the curve only at $B(-4, -5)$ and $M(-2, -5)$.",
                  "reason": "Horizontal line $y = c$: every point of the line has height $-5$; each straight piece of the curve between two marked points lies on one side of the line, apart from its ends."
                },
                {
                  "step": "The solutions are $x = -4$ and $x = -2$.",
                  "reason": "Coordinates: the $x$-coordinate of each of these points is read across the grid."
                }
              ]
            },
            {
              "prompt": "Find every $x$ with $f(x) = 6$, where the curve $CGPRZ$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-12.svg",
                "alt": "A curve of straight pieces from C(−4, 3) through G(−3, 6), P(−2, −3), R(1, 6) to Z(2, −6)."
              },
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3, 1}",
              "lines": [
                {
                  "step": "Find every $x$ with $f(x) = 6$, where the curve $CGPRZ$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The solutions are the $x$-coordinates of the points of the curve on the line $y = 6$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so $f(x) = 6$ exactly where the curve has height $6$."
                },
                {
                  "step": "The line $y = 6$ meets the curve only at $G(-3, 6)$ and $R(1, 6)$.",
                  "reason": "Horizontal line $y = c$: every point of the line has height $6$; each straight piece of the curve between two marked points lies on one side of the line, apart from its ends."
                },
                {
                  "step": "The solutions are $x = -3$ and $x = 1$.",
                  "reason": "Coordinates: the $x$-coordinate of each of these points is read across the grid."
                }
              ]
            },
            {
              "prompt": "Find every $x$ with $f(x) = 4$, where the curve $FHJLNT$ in the figure is the graph of $y = f(x)$.",
              "figure": {
                "file": "graphs-of-functions-13.svg",
                "alt": "A curve of straight pieces from F(−4, 4) through H(−3, 2), J(−2, 1), L(−1, −2), N(1, 0) to T(4, 4)."
              },
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, 4}",
              "lines": [
                {
                  "step": "Find every $x$ with $f(x) = 4$, where the curve $FHJLNT$ in the figure is the graph of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The solutions are the $x$-coordinates of the points of the curve on the line $y = 4$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so $f(x) = 4$ exactly where the curve has height $4$."
                },
                {
                  "step": "The line $y = 4$ meets the curve only at $F(-4, 4)$ and $T(4, 4)$.",
                  "reason": "Horizontal line $y = c$: every point of the line has height $4$; each straight piece of the curve between two marked points lies on one side of the line, apart from its ends."
                },
                {
                  "step": "The solutions are $x = -4$ and $x = 4$.",
                  "reason": "Coordinates: the $x$-coordinate of each of these points is read across the grid."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t163-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the range of the function whose graph is the curve $JNUW$ in the figure.",
            "figure": {
              "file": "graphs-of-functions-14.svg",
              "alt": "A curve of straight pieces from J(−4, −3) through N(−1, 4), U(0, 6) to W(4, 5)."
            },
            "lines": [
              {
                "step": "Find the range of the function whose graph is the curve $JNUW$ in the figure.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
              },
              {
                "step": "The lowest point of the curve is $J(-4, -3)$ and the highest is $U(0, 6)$.",
                "reason": "Coordinates: each piece of the curve is straight, so its lowest and highest points are marked points."
              },
              {
                "step": "The range is $[-3, 6]$.",
                "reason": "Range: the curve is one unbroken piece, so its heights take every value from the lowest to the highest."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of the function whose graph is the curve $KLPRW$ in the figure.",
              "figure": {
                "file": "graphs-of-functions-15.svg",
                "alt": "A curve of straight pieces from K(−4, −4) through L(0, 6), P(1, −4), R(3, −1) to W(4, −5)."
              },
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-5, 6]",
              "lines": [
                {
                  "step": "Find the range of the function whose graph is the curve $KLPRW$ in the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                  "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
                },
                {
                  "step": "The lowest point of the curve is $W(4, -5)$ and the highest is $L(0, 6)$.",
                  "reason": "Coordinates: each piece of the curve is straight, so its lowest and highest points are marked points."
                },
                {
                  "step": "The range is $[-5, 6]$.",
                  "reason": "Range: the curve is one unbroken piece, so its heights take every value from the lowest to the highest."
                }
              ]
            },
            {
              "prompt": "Find the range of the function whose graph is the curve $DLRS$ in the figure.",
              "figure": {
                "file": "graphs-of-functions-16.svg",
                "alt": "A curve of straight pieces from D(−4, −6) through L(1, 0), R(3, −1) to S(4, 1)."
              },
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-6, 1]",
              "lines": [
                {
                  "step": "Find the range of the function whose graph is the curve $DLRS$ in the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                  "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
                },
                {
                  "step": "The lowest point of the curve is $D(-4, -6)$ and the highest is $S(4, 1)$.",
                  "reason": "Coordinates: each piece of the curve is straight, so its lowest and highest points are marked points."
                },
                {
                  "step": "The range is $[-6, 1]$.",
                  "reason": "Range: the curve is one unbroken piece, so its heights take every value from the lowest to the highest."
                }
              ]
            },
            {
              "prompt": "Find the range of the function whose graph is the curve $CDFMSV$ in the figure.",
              "figure": {
                "file": "graphs-of-functions-17.svg",
                "alt": "A curve of straight pieces from C(−4, −1) through D(−2, 0), F(−1, −5), M(2, 1), S(3, 2) to V(4, 0)."
              },
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-5, 2]",
              "lines": [
                {
                  "step": "Find the range of the function whose graph is the curve $CDFMSV$ in the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                  "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
                },
                {
                  "step": "The lowest point of the curve is $F(-1, -5)$ and the highest is $S(3, 2)$.",
                  "reason": "Coordinates: each piece of the curve is straight, so its lowest and highest points are marked points."
                },
                {
                  "step": "The range is $[-5, 2]$.",
                  "reason": "Range: the curve is one unbroken piece, so its heights take every value from the lowest to the highest."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the domain of the function whose graph is the curve $DEFJQ$ in the figure.",
            "figure": {
              "file": "graphs-of-functions-18.svg",
              "alt": "A curve of straight pieces from D(−3, −4) through E(−1, 1), F(1, 3), J(2, −2) to Q(4, 1)."
            },
            "lines": [
              {
                "step": "Find the domain of the function whose graph is the curve $DEFJQ$ in the figure.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
              },
              {
                "step": "The curve starts at $D(-3, -4)$ on the left and ends at $Q(4, 1)$ on the right.",
                "reason": "Coordinates: the $x$-coordinates of the marked points rise from left to right along the curve."
              },
              {
                "step": "The domain is $[-3, 4]$.",
                "reason": "Domain: the curve has one point on each vertical line $x = a$ for $a$ from $-3$ to $4$, and none outside."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the domain of the function whose graph is the curve $AGJV$ in the figure.",
              "figure": {
                "file": "graphs-of-functions-19.svg",
                "alt": "A curve of straight pieces from A(−4, 5) through G(−3, −6), J(0, 1) to V(1, 3)."
              },
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-4, 1]",
              "lines": [
                {
                  "step": "Find the domain of the function whose graph is the curve $AGJV$ in the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                  "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
                },
                {
                  "step": "The curve starts at $A(-4, 5)$ on the left and ends at $V(1, 3)$ on the right.",
                  "reason": "Coordinates: the $x$-coordinates of the marked points rise from left to right along the curve."
                },
                {
                  "step": "The domain is $[-4, 1]$.",
                  "reason": "Domain: the curve has one point on each vertical line $x = a$ for $a$ from $-4$ to $1$, and none outside."
                }
              ]
            },
            {
              "prompt": "Find the domain of the function whose graph is the curve $FHPTUW$ in the figure.",
              "figure": {
                "file": "graphs-of-functions-20.svg",
                "alt": "A curve of straight pieces from F(−4, −5) through H(−3, −6), P(−2, 2), T(1, 3), U(3, 1) to W(4, −4)."
              },
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-4, 4]",
              "lines": [
                {
                  "step": "Find the domain of the function whose graph is the curve $FHPTUW$ in the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                  "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
                },
                {
                  "step": "The curve starts at $F(-4, -5)$ on the left and ends at $W(4, -4)$ on the right.",
                  "reason": "Coordinates: the $x$-coordinates of the marked points rise from left to right along the curve."
                },
                {
                  "step": "The domain is $[-4, 4]$.",
                  "reason": "Domain: the curve has one point on each vertical line $x = a$ for $a$ from $-4$ to $4$, and none outside."
                }
              ]
            },
            {
              "prompt": "Find the domain of the function whose graph is the curve $AHKS$ in the figure.",
              "figure": {
                "file": "graphs-of-functions-21.svg",
                "alt": "A curve of straight pieces from A(−4, 3) through H(−2, −4), K(−1, 6) to S(3, −1)."
              },
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-4, 3]",
              "lines": [
                {
                  "step": "Find the domain of the function whose graph is the curve $AHKS$ in the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each vertical line meets the curve at most once, so the curve is the graph of a function $f$.",
                  "reason": "Vertical line test: the marked points run from left to right along the curve and the curve is straight between them."
                },
                {
                  "step": "The curve starts at $A(-4, 3)$ on the left and ends at $S(3, -1)$ on the right.",
                  "reason": "Coordinates: the $x$-coordinates of the marked points rise from left to right along the curve."
                },
                {
                  "step": "The domain is $[-4, 3]$.",
                  "reason": "Domain: the curve has one point on each vertical line $x = a$ for $a$ from $-4$ to $3$, and none outside."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t163-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 20x^2 - 47x + 21$.",
            "lines": [
              {
                "step": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 20x^2 - 47x + 21$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$20x^2 - 47x + 21 = 0$",
                "reason": "Definition of the $x$-intercept: the graph of $y = f(x)$ meets the $x$-axis where $y = 0$, that is where $f(x) = 0$."
              },
              {
                "step": "$(5x - 3)(4x - 7) = 0$",
                "reason": "Factoring a quadratic: multiplying the two brackets out gives back the quadratic."
              },
              {
                "step": "So $x = \\dfrac{3}{5}$ or $x = \\dfrac{7}{4}$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 6x^2 - 29x + 28$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4/3, 7/2}",
              "lines": [
                {
                  "step": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 6x^2 - 29x + 28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x^2 - 29x + 28 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph of $y = f(x)$ meets the $x$-axis where $y = 0$, that is where $f(x) = 0$."
                },
                {
                  "step": "$(3x - 4)(2x - 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying the two brackets out gives back the quadratic."
                },
                {
                  "step": "So $x = \\dfrac{4}{3}$ or $x = \\dfrac{7}{2}$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 15x^2 - 34x + 16$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2/3, 8/5}",
              "lines": [
                {
                  "step": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 15x^2 - 34x + 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15x^2 - 34x + 16 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph of $y = f(x)$ meets the $x$-axis where $y = 0$, that is where $f(x) = 0$."
                },
                {
                  "step": "$(3x - 2)(5x - 8) = 0$",
                  "reason": "Factoring a quadratic: multiplying the two brackets out gives back the quadratic."
                },
                {
                  "step": "So $x = \\dfrac{2}{3}$ or $x = \\dfrac{8}{5}$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            },
            {
              "prompt": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 16x^2 + 16x + 3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3/4, -1/4}",
              "lines": [
                {
                  "step": "Find the $x$-coordinates of the $x$-intercepts of the graph of $y = f(x)$, where $f(x) = 16x^2 + 16x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16x^2 + 16x + 3 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph of $y = f(x)$ meets the $x$-axis where $y = 0$, that is where $f(x) = 0$."
                },
                {
                  "step": "$(4x + 3)(4x + 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying the two brackets out gives back the quadratic."
                },
                {
                  "step": "So $x = -\\dfrac{3}{4}$ or $x = -\\dfrac{1}{4}$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{-5x + 16}{8x + 2}$.",
            "lines": [
              {
                "step": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{-5x + 16}{8x + 2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The $y$-intercept is the point $(0, f(0))$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$; a function has at most one $y$-intercept, so this is the only one."
              },
              {
                "step": "$f(0) = \\dfrac{-5 \\cdot 0 + 16}{8 \\cdot 0 + 2}$",
                "reason": "Substituting a value: $0$ takes the place of $x$, in brackets."
              },
              {
                "step": "$f(0) = \\dfrac{16}{2}$",
                "reason": "Order of operations: the products by $0$ first, then the sums above and below the bar."
              },
              {
                "step": "$f(0) = 8$",
                "reason": "Fraction rules: a fraction is its top divided by its bottom."
              },
              {
                "step": "The $y$-intercept is $(0, 8)$.",
                "reason": "Coordinates: the point has $x$-coordinate $0$ and height $f(0)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{-5x - 28}{-4x - 4}$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 7)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{-5x - 28}{-4x - 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $y$-intercept is the point $(0, f(0))$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$; a function has at most one $y$-intercept, so this is the only one."
                },
                {
                  "step": "$f(0) = \\dfrac{-5 \\cdot 0 - 28}{-4 \\cdot 0 - 4}$",
                  "reason": "Substituting a value: $0$ takes the place of $x$, in brackets."
                },
                {
                  "step": "$f(0) = \\dfrac{-28}{-4}$",
                  "reason": "Order of operations: the products by $0$ first, then the sums above and below the bar."
                },
                {
                  "step": "$f(0) = 7$",
                  "reason": "Fraction rules: a fraction is its top divided by its bottom."
                },
                {
                  "step": "The $y$-intercept is $(0, 7)$.",
                  "reason": "Coordinates: the point has $x$-coordinate $0$ and height $f(0)$."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{-5x + 12}{7x + 3}$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 4)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{-5x + 12}{7x + 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $y$-intercept is the point $(0, f(0))$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$; a function has at most one $y$-intercept, so this is the only one."
                },
                {
                  "step": "$f(0) = \\dfrac{-5 \\cdot 0 + 12}{7 \\cdot 0 + 3}$",
                  "reason": "Substituting a value: $0$ takes the place of $x$, in brackets."
                },
                {
                  "step": "$f(0) = \\dfrac{12}{3}$",
                  "reason": "Order of operations: the products by $0$ first, then the sums above and below the bar."
                },
                {
                  "step": "$f(0) = 4$",
                  "reason": "Fraction rules: a fraction is its top divided by its bottom."
                },
                {
                  "step": "The $y$-intercept is $(0, 4)$.",
                  "reason": "Coordinates: the point has $x$-coordinate $0$ and height $f(0)$."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{2x - 18}{-8x + 9}$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -2)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the graph of $y = f(x)$, where $f(x) = \\dfrac{2x - 18}{-8x + 9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $y$-intercept is the point $(0, f(0))$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$; a function has at most one $y$-intercept, so this is the only one."
                },
                {
                  "step": "$f(0) = \\dfrac{2 \\cdot 0 - 18}{-8 \\cdot 0 + 9}$",
                  "reason": "Substituting a value: $0$ takes the place of $x$, in brackets."
                },
                {
                  "step": "$f(0) = \\dfrac{-18}{9}$",
                  "reason": "Order of operations: the products by $0$ first, then the sums above and below the bar."
                },
                {
                  "step": "$f(0) = -2$",
                  "reason": "Fraction rules: a fraction is its top divided by its bottom."
                },
                {
                  "step": "The $y$-intercept is $(0, -2)$.",
                  "reason": "Coordinates: the point has $x$-coordinate $0$ and height $f(0)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{5x + 14} - 8$.",
            "lines": [
              {
                "step": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{5x + 14} - 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{5x + 14} - 8 = 0$",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
              },
              {
                "step": "$\\sqrt{5x + 14} = 8$",
                "reason": "Adding the same number to both sides: $8$ is added to both sides."
              },
              {
                "step": "$5x + 14 = 64$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
              },
              {
                "step": "$5x = 50$",
                "reason": "Adding the same number to both sides: $-14$ is added to both sides."
              },
              {
                "step": "$x = 10$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$\\sqrt{5 \\cdot 10 + 14} - 8 = 0$",
                "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
              },
              {
                "step": "The $x$-intercept is $(10, 0)$.",
                "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{7x + 8} - 8$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(8, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{7x + 8} - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{7x + 8} - 8 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "$\\sqrt{7x + 8} = 8$",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides."
                },
                {
                  "step": "$7x + 8 = 64$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$7x = 56$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$\\sqrt{7 \\cdot 8 + 8} - 8 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
                },
                {
                  "step": "The $x$-intercept is $(8, 0)$.",
                  "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 6."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{3x + 22} - 5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{3x + 22} - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{3x + 22} - 5 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "$\\sqrt{3x + 22} = 5$",
                  "reason": "Adding the same number to both sides: $5$ is added to both sides."
                },
                {
                  "step": "$3x + 22 = 25$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$3x = 3$",
                  "reason": "Adding the same number to both sides: $-22$ is added to both sides."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$\\sqrt{3 \\cdot 1 + 22} - 5 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
                },
                {
                  "step": "The $x$-intercept is $(1, 0)$.",
                  "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 6."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{5x + 39} - 2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-7, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the graph of $y = f(x)$, where $f(x) = \\sqrt{5x + 39} - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{5x + 39} - 2 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "$\\sqrt{5x + 39} = 2$",
                  "reason": "Adding the same number to both sides: $2$ is added to both sides."
                },
                {
                  "step": "$5x + 39 = 4$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$5x = -35$",
                  "reason": "Adding the same number to both sides: $-39$ is added to both sides."
                },
                {
                  "step": "$x = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$\\sqrt{5 \\cdot (-7) + 39} - 2 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
                },
                {
                  "step": "The $x$-intercept is $(-7, 0)$.",
                  "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 6."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t163-k4",
      "forms": [
        {
          "example": {
            "problem": "Find how many real numbers $x$ satisfy $x^4 = -20x + 3$, by sketching the graphs of $y = x^4$ and $y = -20x + 3$.",
            "lines": [
              {
                "step": "Find how many real numbers $x$ satisfy $x^4 = -20x + 3$, by sketching the graphs of $y = x^4$ and $y = -20x + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The solutions are the $x$-coordinates of the common points of the graphs of $f(x) = x^4$ and $g(x) = -20x + 3$.",
                "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: a point $(a, b)$ is on both graphs exactly when $f(a) = b = g(a)$."
              },
              {
                "step": "$f(-3) = 81$, $g(-3) = 63$; $f(-2) = 16$, $g(-2) = 43$; $f(0) = 0$, $g(0) = 3$; $f(1) = 1$, $g(1) = -17$",
                "reason": "Substituting a value: each input goes into both rules."
              },
              {
                "step": "Compared with the graph of $g$, the graph of $f$ is above at $x = -3$, below at $x = -2$, below at $x = 0$ and above at $x = 1$.",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the larger value belongs to the higher graph."
              },
              {
                "step": "The sketch shows the graphs meeting once between $x = -3$ and $x = -2$ and once between $x = 0$ and $x = 1$, and nowhere else.",
                "figure": {
                  "file": "graphs-of-functions-22.svg",
                  "alt": "The graphs of y = x⁴ and the line y = −20x + 3, which cross twice."
                },
                "reason": "A graph is not a proof: the sketch gives the count; the changes of order in line 4 show that each crossing it counts is there."
              },
              {
                "step": "There are $2$ real solutions.",
                "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: one solution for each common point."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many real numbers $x$ satisfy $x^3 = 17x - 33$, by sketching the graphs of $y = x^3$ and $y = 17x - 33$.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find how many real numbers $x$ satisfy $x^3 = 17x - 33$, by sketching the graphs of $y = x^3$ and $y = 17x - 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The solutions are the $x$-coordinates of the common points of the graphs of $f(x) = x^3$ and $g(x) = 17x - 33$.",
                  "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: a point $(a, b)$ is on both graphs exactly when $f(a) = b = g(a)$."
                },
                {
                  "step": "$f(-5) = -125$, $g(-5) = -118$; $f(-4) = -64$, $g(-4) = -101$",
                  "reason": "Substituting a value: each input goes into both rules."
                },
                {
                  "step": "Compared with the graph of $g$, the graph of $f$ is below at $x = -5$ and above at $x = -4$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the larger value belongs to the higher graph."
                },
                {
                  "step": "The sketch shows the graphs meeting once between $x = -5$ and $x = -4$, and nowhere else.",
                  "figure": {
                    "file": "graphs-of-functions-23.svg",
                    "alt": "The graphs of y = x³ and the line y = 17x − 33, which cross once."
                  },
                  "reason": "A graph is not a proof: the sketch gives the count; the changes of order in line 4 show that each crossing it counts is there."
                },
                {
                  "step": "There is $1$ real solution.",
                  "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: one solution for each common point."
                }
              ]
            },
            {
              "prompt": "Find how many real numbers $x$ satisfy $2x^4 = 17x - 41$, by sketching the graphs of $y = 2x^4$ and $y = 17x - 41$.",
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "Find how many real numbers $x$ satisfy $2x^4 = 17x - 41$, by sketching the graphs of $y = 2x^4$ and $y = 17x - 41$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The solutions are the $x$-coordinates of the common points of the graphs of $f(x) = 2x^4$ and $g(x) = 17x - 41$.",
                  "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: a point $(a, b)$ is on both graphs exactly when $f(a) = b = g(a)$."
                },
                {
                  "step": "$f(0) = 0$, $g(0) = -41$; $f(1) = 2$, $g(1) = -24$; $f(2) = 32$, $g(2) = -7$",
                  "reason": "Substituting a value: each input goes into both rules."
                },
                {
                  "step": "Compared with the graph of $g$, the graph of $f$ is above at $x = 0$, above at $x = 1$ and above at $x = 2$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the larger value belongs to the higher graph."
                },
                {
                  "step": "The sketch shows the graphs meeting nowhere: the graph of $f$ stays above the line.",
                  "figure": {
                    "file": "graphs-of-functions-24.svg",
                    "alt": "The graphs of y = 2x⁴ and the line y = 17x − 41, which do not meet."
                  },
                  "reason": "A graph is not a proof: the sketch gives the count; the changes of order in line 4 show that each crossing it counts is there."
                },
                {
                  "step": "There are $0$ real solutions.",
                  "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: one solution for each common point."
                }
              ]
            },
            {
              "prompt": "Find how many real numbers $x$ satisfy $x^3 = 15x + 20$, by sketching the graphs of $y = x^3$ and $y = 15x + 20$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find how many real numbers $x$ satisfy $x^3 = 15x + 20$, by sketching the graphs of $y = x^3$ and $y = 15x + 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The solutions are the $x$-coordinates of the common points of the graphs of $f(x) = x^3$ and $g(x) = 15x + 20$.",
                  "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: a point $(a, b)$ is on both graphs exactly when $f(a) = b = g(a)$."
                },
                {
                  "step": "$f(-3) = -27$, $g(-3) = -25$; $f(-2) = -8$, $g(-2) = -10$; $f(-1) = -1$, $g(-1) = 5$; $f(4) = 64$, $g(4) = 80$; $f(5) = 125$, $g(5) = 95$",
                  "reason": "Substituting a value: each input goes into both rules."
                },
                {
                  "step": "Compared with the graph of $g$, the graph of $f$ is below at $x = -3$, above at $x = -2$, below at $x = -1$, below at $x = 4$ and above at $x = 5$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the larger value belongs to the higher graph."
                },
                {
                  "step": "The sketch shows the graphs meeting once between $x = -3$ and $x = -2$, once between $x = -2$ and $x = -1$ and once between $x = 4$ and $x = 5$, and nowhere else.",
                  "figure": {
                    "file": "graphs-of-functions-25.svg",
                    "alt": "The graphs of y = x³ and the line y = 15x + 20, which cross three times."
                  },
                  "reason": "A graph is not a proof: the sketch gives the count; the changes of order in line 4 show that each crossing it counts is there."
                },
                {
                  "step": "There are $3$ real solutions.",
                  "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$: one solution for each common point."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t163-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working of $f(f(-1)) + f(0)$, read from the curve $EHMNUV$ in the figure, the graph of $y = f(x)$, and write that line right.",
            "figure": {
              "file": "graphs-of-functions-26.svg",
              "alt": "A curve of straight pieces from E(−3, 5) through H(−2, 0), M(−1, −2), N(0, 2), U(1, 3) to V(2, −1)."
            },
            "given": [
              "$f(-1) = 2$",
              "$f(f(-1)) = f(2) = -1$",
              "$f(0) = 2$",
              "$f(f(-1)) + f(0) = -1 + 2 = 1$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working of $f(f(-1)) + f(0)$, read from the curve $EHMNUV$ in the figure, the graph of $y = f(x)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 gives $f(-1) = 2$, the $x$-coordinate of $V(2, -1)$, the marked point at height $-1$.",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the input $-1$ is read along the $x$-axis, never as a height."
              },
              {
                "step": "Line 1 written right is $f(-1) = -2$.",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = -1$ is $M(-1, -2)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working of $f(f(2)) + f(1)$, read from the curve $DGNQV$ in the figure, the graph of $y = f(x)$, and write that line right.",
              "figure": {
                "file": "graphs-of-functions-27.svg",
                "alt": "A curve of straight pieces from D(−4, 6) through G(−1, −6), N(1, 2), Q(2, −1) to V(4, 0)."
              },
              "given": [
                "$f(2) = -1$",
                "$f(f(2)) = f(-1) = 2$",
                "$f(1) = 2$",
                "$f(f(2)) + f(1) = 2 + 2 = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(f(2)) = f(-1) = -6",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $f(f(2)) + f(1)$, read from the curve $DGNQV$ in the figure, the graph of $y = f(x)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives $f(-1) = 2$, the $x$-coordinate of $Q(2, -1)$, the marked point at height $-1$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the input $-1$ is read along the $x$-axis, never as a height."
                },
                {
                  "step": "Line 2 written right is $f(f(2)) = f(-1) = -6$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = -1$ is $G(-1, -6)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $f(f(0)) + f(3)$, read from the curve $ACHQU$ in the figure, the graph of $y = f(x)$, and write that line right.",
              "figure": {
                "file": "graphs-of-functions-28.svg",
                "alt": "A curve of straight pieces from A(−4, 3) through C(0, −4), H(2, −5), Q(3, −3) to U(4, −6)."
              },
              "given": [
                "$f(0) = -4$",
                "$f(f(0)) = f(-4) = 3$",
                "$f(3) = -4$",
                "$f(f(0)) + f(3) = 3 + (-4) = -1$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(3) = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $f(f(0)) + f(3)$, read from the curve $ACHQU$ in the figure, the graph of $y = f(x)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives $f(3) = -4$, the $x$-coordinate of $A(-4, 3)$, the marked point at height $3$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the input $3$ is read along the $x$-axis, never as a height."
                },
                {
                  "step": "Line 3 written right is $f(3) = -3$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = 3$ is $Q(3, -3)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working of $f(f(-3)) + f(-2)$, read from the curve $ABFMNQ$ in the figure, the graph of $y = f(x)$, and write that line right.",
              "figure": {
                "file": "graphs-of-functions-29.svg",
                "alt": "A curve of straight pieces from A(−3, 3) through B(−2, 5), F(−1, −5), M(1, −3), N(2, 0) to Q(3, 2)."
              },
              "given": [
                "$f(-3) = 1$",
                "$f(f(-3)) = f(1) = -3$",
                "$f(-2) = 5$",
                "$f(f(-3)) + f(-2) = -3 + 5 = 2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(-3) = 3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working of $f(f(-3)) + f(-2)$, read from the curve $ABFMNQ$ in the figure, the graph of $y = f(x)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 gives $f(-3) = 1$, the $x$-coordinate of $M(1, -3)$, the marked point at height $-3$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, so the input $-3$ is read along the $x$-axis, never as a height."
                },
                {
                  "step": "Line 1 written right is $f(-3) = 3$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$; the point of the curve on the line $x = -3$ is $A(-3, 3)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t163-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = f(x)$, where $f(x) = -6x^2 + 63x - 147$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = f(x)$, where $f(x) = -6x^2 + 63x - 147$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$, $f(0) = -147$, so the graph meets the $y$-axis at $C(0, -147)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
              },
              {
                "step": "$-6x^2 + 63x - 147 = -3(2x - 7)(x - 7)$",
                "reason": "Factoring a quadratic: multiplying the brackets out gives back the quadratic."
              },
              {
                "step": "So $f(x) = 0$ at $x = \\dfrac{7}{2}$ and at $x = 7$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "The graph meets the $x$-axis at $A(\\dfrac{7}{2}, 0)$ and $B(7, 0)$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
              },
              {
                "step": "The vertex is at $x = \\dfrac{21}{4}$, the mean of the roots.",
                "reason": "Vertex: the least or greatest value of a quadratic is at the mean of its roots."
              },
              {
                "step": "$f\\left(\\dfrac{21}{4}\\right) = \\dfrac{147}{8}$",
                "reason": "Substituting a value: $\\dfrac{21}{4}$ takes the place of $x$, in brackets."
              },
              {
                "step": "The turning point is $V(\\dfrac{21}{4}, \\dfrac{147}{8})$.",
                "reason": "Coordinates: the point has $x$-coordinate $\\dfrac{21}{4}$ and height $f\\left(\\dfrac{21}{4}\\right)$."
              },
              {
                "step": "The parabola opens down and passes through $A$, $B$, $C$ and $V$.",
                "figure": {
                  "file": "graphs-of-functions-30.svg",
                  "alt": "A parabola opening down through A(7/2, 0), B(7, 0) and C(0, −147), with vertex V(21/4, 147/8)."
                },
                "reason": "Opens up or down by the sign of $a$: the coefficient of $x^2$ is $-6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f(x) = 4x^2 - 54x + 182$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(\\dfrac{13}{2}, 0)$",
                  "$(7, 0)$",
                  "$(0, 182)$"
                ],
                "turning": [
                  "$(\\dfrac{27}{4}, -\\dfrac{1}{4})$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f(x) = 4x^2 - 54x + 182$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $f(0) = 182$, so the graph meets the $y$-axis at $C(0, 182)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
                },
                {
                  "step": "$4x^2 - 54x + 182 = 2(2x - 13)(x - 7)$",
                  "reason": "Factoring a quadratic: multiplying the brackets out gives back the quadratic."
                },
                {
                  "step": "So $f(x) = 0$ at $x = \\dfrac{13}{2}$ and at $x = 7$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $A(\\dfrac{13}{2}, 0)$ and $B(7, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "The vertex is at $x = \\dfrac{27}{4}$, the mean of the roots.",
                  "reason": "Vertex: the least or greatest value of a quadratic is at the mean of its roots."
                },
                {
                  "step": "$f\\left(\\dfrac{27}{4}\\right) = -\\dfrac{1}{4}$",
                  "reason": "Substituting a value: $\\dfrac{27}{4}$ takes the place of $x$, in brackets."
                },
                {
                  "step": "The turning point is $V(\\dfrac{27}{4}, -\\dfrac{1}{4})$.",
                  "reason": "Coordinates: the point has $x$-coordinate $\\dfrac{27}{4}$ and height $f\\left(\\dfrac{27}{4}\\right)$."
                },
                {
                  "step": "The parabola opens up and passes through $A$, $B$, $C$ and $V$.",
                  "figure": {
                    "file": "graphs-of-functions-31.svg",
                    "alt": "A parabola opening up through A(13/2, 0), B(7, 0) and C(0, 182), with vertex V(27/4, −1/4)."
                  },
                  "reason": "Opens up or down by the sign of $a$: the coefficient of $x^2$ is $4$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f(x) = -4x^2 - 34x - 30$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{15}{2}, 0)$",
                  "$(-1, 0)$",
                  "$(0, -30)$"
                ],
                "turning": [
                  "$(-\\dfrac{17}{4}, \\dfrac{169}{4})$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f(x) = -4x^2 - 34x - 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $f(0) = -30$, so the graph meets the $y$-axis at $C(0, -30)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
                },
                {
                  "step": "$-4x^2 - 34x - 30 = -2(2x + 15)(x + 1)$",
                  "reason": "Factoring a quadratic: multiplying the brackets out gives back the quadratic."
                },
                {
                  "step": "So $f(x) = 0$ at $x = -\\dfrac{15}{2}$ and at $x = -1$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $A(-\\dfrac{15}{2}, 0)$ and $B(-1, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "The vertex is at $x = -\\dfrac{17}{4}$, the mean of the roots.",
                  "reason": "Vertex: the least or greatest value of a quadratic is at the mean of its roots."
                },
                {
                  "step": "$f\\left(-\\dfrac{17}{4}\\right) = \\dfrac{169}{4}$",
                  "reason": "Substituting a value: $-\\dfrac{17}{4}$ takes the place of $x$, in brackets."
                },
                {
                  "step": "The turning point is $V(-\\dfrac{17}{4}, \\dfrac{169}{4})$.",
                  "reason": "Coordinates: the point has $x$-coordinate $-\\dfrac{17}{4}$ and height $f\\left(-\\dfrac{17}{4}\\right)$."
                },
                {
                  "step": "The parabola opens down and passes through $A$, $B$, $C$ and $V$.",
                  "figure": {
                    "file": "graphs-of-functions-32.svg",
                    "alt": "A parabola opening down through A(−15/2, 0), B(−1, 0) and C(0, −30), with vertex V(−17/4, 169/4)."
                  },
                  "reason": "Opens up or down by the sign of $a$: the coefficient of $x^2$ is $-4$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f(x) = -4x^2 + 2x + 240$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-\\dfrac{15}{2}, 0)$",
                  "$(8, 0)$",
                  "$(0, 240)$"
                ],
                "turning": [
                  "$(\\dfrac{1}{4}, \\dfrac{961}{4})$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f(x) = -4x^2 + 2x + 240$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $f(0) = 240$, so the graph meets the $y$-axis at $C(0, 240)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
                },
                {
                  "step": "$-4x^2 + 2x + 240 = -2(2x + 15)(x - 8)$",
                  "reason": "Factoring a quadratic: multiplying the brackets out gives back the quadratic."
                },
                {
                  "step": "So $f(x) = 0$ at $x = -\\dfrac{15}{2}$ and at $x = 8$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $A(-\\dfrac{15}{2}, 0)$ and $B(8, 0)$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "The vertex is at $x = \\dfrac{1}{4}$, the mean of the roots.",
                  "reason": "Vertex: the least or greatest value of a quadratic is at the mean of its roots."
                },
                {
                  "step": "$f\\left(\\dfrac{1}{4}\\right) = \\dfrac{961}{4}$",
                  "reason": "Substituting a value: $\\dfrac{1}{4}$ takes the place of $x$, in brackets."
                },
                {
                  "step": "The turning point is $V(\\dfrac{1}{4}, \\dfrac{961}{4})$.",
                  "reason": "Coordinates: the point has $x$-coordinate $\\dfrac{1}{4}$ and height $f\\left(\\dfrac{1}{4}\\right)$."
                },
                {
                  "step": "The parabola opens down and passes through $A$, $B$, $C$ and $V$.",
                  "figure": {
                    "file": "graphs-of-functions-33.svg",
                    "alt": "A parabola opening down through A(−15/2, 0), B(8, 0) and C(0, 240), with vertex V(1/4, 961/4)."
                  },
                  "reason": "Opens up or down by the sign of $a$: the coefficient of $x^2$ is $-4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{3x + 4} - 1$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{3x + 4} - 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x + 4 \\ge 0$",
                "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
              },
              {
                "step": "$3x \\ge -4$",
                "reason": "Adding the same number: $-4$ is added to both sides."
              },
              {
                "step": "$x \\ge -\\dfrac{4}{3}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{3}$."
              },
              {
                "step": "$f\\left(-\\dfrac{4}{3}\\right) = \\sqrt{0} - 1 = -1$",
                "reason": "Substituting a value: with $x = -\\dfrac{4}{3}$ the number under the root is $3 \\cdot \\left(-\\dfrac{4}{3}\\right) + 4 = 0$."
              },
              {
                "step": "The graph starts at $S(-\\dfrac{4}{3}, -1)$ and has no point to its left.",
                "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and line 4 leaves no $x$ below $-\\dfrac{4}{3}$."
              },
              {
                "step": "At $x = 0$, $f(0) = \\sqrt{4} - 1 = 1$, so the graph meets the $y$-axis at $C(0, 1)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
              },
              {
                "step": "$\\sqrt{3x + 4} - 1 = 0$",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
              },
              {
                "step": "$\\sqrt{3x + 4} = 1$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              },
              {
                "step": "$3x + 4 = 1$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
              },
              {
                "step": "$3x = -3$",
                "reason": "Adding the same number to both sides: $-4$ is added to both sides."
              },
              {
                "step": "$x = -1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$\\sqrt{3 \\cdot (-1) + 4} - 1 = 0$",
                "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
              },
              {
                "step": "The graph meets the $x$-axis at $A(-1, 0)$.",
                "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 12."
              },
              {
                "step": "The curve starts at $S$ and rises to the right through $A$ and $C$.",
                "figure": {
                  "file": "graphs-of-functions-34.svg",
                  "alt": "A curve starting at S(−4/3, −1) and rising to the right through A(−1, 0) and C(0, 1)."
                },
                "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the curve rises to the right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{4x + 25} - 9$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(14, 0)$",
                  "$(0, -4)$"
                ],
                "turning": [
                  "$(-\\dfrac{25}{4}, -9)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{4x + 25} - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 25 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
                },
                {
                  "step": "$4x \\ge -25$",
                  "reason": "Adding the same number: $-25$ is added to both sides."
                },
                {
                  "step": "$x \\ge -\\dfrac{25}{4}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$."
                },
                {
                  "step": "$f\\left(-\\dfrac{25}{4}\\right) = \\sqrt{0} - 9 = -9$",
                  "reason": "Substituting a value: with $x = -\\dfrac{25}{4}$ the number under the root is $4 \\cdot \\left(-\\dfrac{25}{4}\\right) + 25 = 0$."
                },
                {
                  "step": "The graph starts at $S(-\\dfrac{25}{4}, -9)$ and has no point to its left.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and line 4 leaves no $x$ below $-\\dfrac{25}{4}$."
                },
                {
                  "step": "At $x = 0$, $f(0) = \\sqrt{25} - 9 = -4$, so the graph meets the $y$-axis at $C(0, -4)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
                },
                {
                  "step": "$\\sqrt{4x + 25} - 9 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "$\\sqrt{4x + 25} = 9$",
                  "reason": "Adding the same number to both sides: $9$ is added to both sides."
                },
                {
                  "step": "$4x + 25 = 81$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$4x = 56$",
                  "reason": "Adding the same number to both sides: $-25$ is added to both sides."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$\\sqrt{4 \\cdot 14 + 25} - 9 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $A(14, 0)$.",
                  "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 12."
                },
                {
                  "step": "The curve starts at $S$ and rises to the right through $C$ and $A$.",
                  "figure": {
                    "file": "graphs-of-functions-35.svg",
                    "alt": "A curve starting at S(−25/4, −9) and rising to the right through C(0, −4) and A(14, 0)."
                  },
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the curve rises to the right."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{6x + 49} - 5$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-4, 0)$",
                  "$(0, 2)$"
                ],
                "turning": [
                  "$(-\\dfrac{49}{6}, -5)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{6x + 49} - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x + 49 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
                },
                {
                  "step": "$6x \\ge -49$",
                  "reason": "Adding the same number: $-49$ is added to both sides."
                },
                {
                  "step": "$x \\ge -\\dfrac{49}{6}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{6}$."
                },
                {
                  "step": "$f\\left(-\\dfrac{49}{6}\\right) = \\sqrt{0} - 5 = -5$",
                  "reason": "Substituting a value: with $x = -\\dfrac{49}{6}$ the number under the root is $6 \\cdot \\left(-\\dfrac{49}{6}\\right) + 49 = 0$."
                },
                {
                  "step": "The graph starts at $S(-\\dfrac{49}{6}, -5)$ and has no point to its left.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and line 4 leaves no $x$ below $-\\dfrac{49}{6}$."
                },
                {
                  "step": "At $x = 0$, $f(0) = \\sqrt{49} - 5 = 2$, so the graph meets the $y$-axis at $C(0, 2)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
                },
                {
                  "step": "$\\sqrt{6x + 49} - 5 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "$\\sqrt{6x + 49} = 5$",
                  "reason": "Adding the same number to both sides: $5$ is added to both sides."
                },
                {
                  "step": "$6x + 49 = 25$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$6x = -24$",
                  "reason": "Adding the same number to both sides: $-49$ is added to both sides."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$\\sqrt{6 \\cdot (-4) + 49} - 5 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $A(-4, 0)$.",
                  "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 12."
                },
                {
                  "step": "The curve starts at $S$ and rises to the right through $A$ and $C$.",
                  "figure": {
                    "file": "graphs-of-functions-36.svg",
                    "alt": "A curve starting at S(−49/6, −5) and rising to the right through A(−4, 0) and C(0, 2)."
                  },
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the curve rises to the right."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{4x + 1} - 7$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(12, 0)$",
                  "$(0, -6)$"
                ],
                "turning": [
                  "$(-\\dfrac{1}{4}, -7)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = f(x)$, where $f(x) = \\sqrt{4x + 1} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 1 \\ge 0$",
                  "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
                },
                {
                  "step": "$4x \\ge -1$",
                  "reason": "Adding the same number: $-1$ is added to both sides."
                },
                {
                  "step": "$x \\ge -\\dfrac{1}{4}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$."
                },
                {
                  "step": "$f\\left(-\\dfrac{1}{4}\\right) = \\sqrt{0} - 7 = -7$",
                  "reason": "Substituting a value: with $x = -\\dfrac{1}{4}$ the number under the root is $4 \\cdot \\left(-\\dfrac{1}{4}\\right) + 1 = 0$."
                },
                {
                  "step": "The graph starts at $S(-\\dfrac{1}{4}, -7)$ and has no point to its left.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and line 4 leaves no $x$ below $-\\dfrac{1}{4}$."
                },
                {
                  "step": "At $x = 0$, $f(0) = \\sqrt{1} - 7 = -6$, so the graph meets the $y$-axis at $C(0, -6)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and a function has at most one $y$-intercept."
                },
                {
                  "step": "$\\sqrt{4x + 1} - 7 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $f(x) = 0$."
                },
                {
                  "step": "$\\sqrt{4x + 1} = 7$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "$4x + 1 = 49$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$4x = 48$",
                  "reason": "Adding the same number to both sides: $-1$ is added to both sides."
                },
                {
                  "step": "$x = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$\\sqrt{4 \\cdot 12 + 1} - 7 = 0$",
                  "reason": "Checking in the original equation: squaring may add a false solution, so the value is put back into $f(x) = 0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $A(12, 0)$.",
                  "reason": "Coordinates: the point has height $0$ and $x$-coordinate the solution of line 12."
                },
                {
                  "step": "The curve starts at $S$ and rises to the right through $C$ and $A$.",
                  "figure": {
                    "file": "graphs-of-functions-37.svg",
                    "alt": "A curve starting at S(−1/4, −7) and rising to the right through C(0, −6) and A(12, 0)."
                  },
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the curve rises to the right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t163-k7",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the curve $LTUZ$ in the figure is the graph of a function of $x$.",
            "figure": {
              "file": "graphs-of-functions-38.svg",
              "alt": "A curve of straight pieces from L(−4, −1) through T(−2, −4), U(1, −6) to Z(2, −1)."
            },
            "lines": [
              {
                "step": "Decide whether the curve $LTUZ$ in the figure is the graph of a function of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Along the curve each marked point lies further to the right than the one before, and the curve is straight between them.",
                "reason": "Coordinates: the $x$-coordinates of the marked points, in order along the curve, are $-4$, $-2$, $1$, $2$."
              },
              {
                "step": "So each vertical line meets the curve at most once.",
                "reason": "Vertical line $x = c$: a straight piece running to the right meets a vertical line at most once, and the pieces lie side by side."
              },
              {
                "step": "The curve is the graph of a function.",
                "reason": "Vertical line test: no vertical line meets the curve at more than one point."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the curve $BCJMQZ$ in the figure is the graph of a function of $x$.",
              "figure": {
                "file": "graphs-of-functions-39.svg",
                "alt": "A curve of straight pieces from B(−3, −5) through C(3, −4), J(−3, −1), M(−2, 0), Q(2, 1) to Z(4, 5)."
              },
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the curve $BCJMQZ$ in the figure is the graph of a function of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertical line $x = -3$ meets the curve at $B(-3, -5)$ and at $J(-3, -1)$.",
                  "reason": "Vertical line $x = c$: every point of the line $x = -3$ has $x$-coordinate $-3$, and both marked points have it."
                },
                {
                  "step": "So the input $-3$ would have the two outputs $-5$ and $-1$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and a function gives one output for each input."
                },
                {
                  "step": "The curve is not the graph of a function.",
                  "reason": "Vertical line test: a curve that a vertical line meets at two points is not the graph of a function."
                }
              ]
            },
            {
              "prompt": "Decide whether the curve $KMUVZ$ in the figure is the graph of a function of $x$.",
              "figure": {
                "file": "graphs-of-functions-40.svg",
                "alt": "A curve of straight pieces from K(−4, −4) through M(−3, 2), U(0, −3), V(3, −5) to Z(4, −6)."
              },
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the curve $KMUVZ$ in the figure is the graph of a function of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Along the curve each marked point lies further to the right than the one before, and the curve is straight between them.",
                  "reason": "Coordinates: the $x$-coordinates of the marked points, in order along the curve, are $-4$, $-3$, $0$, $3$, $4$."
                },
                {
                  "step": "So each vertical line meets the curve at most once.",
                  "reason": "Vertical line $x = c$: a straight piece running to the right meets a vertical line at most once, and the pieces lie side by side."
                },
                {
                  "step": "The curve is the graph of a function.",
                  "reason": "Vertical line test: no vertical line meets the curve at more than one point."
                }
              ]
            },
            {
              "prompt": "Decide whether the curve $ABDFM$ in the figure is the graph of a function of $x$.",
              "figure": {
                "file": "graphs-of-functions-41.svg",
                "alt": "A curve of straight pieces from A(−1, −4) through B(0, −3), D(−4, 2), F(2, 4) to M(0, 5)."
              },
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the curve $ABDFM$ in the figure is the graph of a function of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertical line $x = 0$ meets the curve at $B(0, -3)$ and at $M(0, 5)$.",
                  "reason": "Vertical line $x = c$: every point of the line $x = 0$ has $x$-coordinate $0$, and both marked points have it."
                },
                {
                  "step": "So the input $0$ would have the two outputs $-3$ and $5$.",
                  "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, and a function gives one output for each input."
                },
                {
                  "step": "The curve is not the graph of a function.",
                  "reason": "Vertical line test: a curve that a vertical line meets at two points is not the graph of a function."
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
      "id": "t163-p1",
      "method": "direct proof",
      "statement": "A function $f$ has at most one $y$-intercept: the graph of $y = f(x)$ meets the $y$-axis at no more than one point.",
      "idea": "A point of the graph on the $y$-axis has $x$-coordinate $0$, so its height is $f(0)$. A function has one output for the input $0$, so all such points have the same height and are one point.",
      "lines": [
        {
          "line": "Let $(0, p)$ and $(0, q)$ be points of the graph of $f$ on the $y$-axis.",
          "reason": "Definition of the $y$-intercept: a point of the graph on the $y$-axis has $x$-coordinate $0$."
        },
        {
          "line": "Then $p = f(0)$.",
          "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, here at $x = 0$, and $(0, p)$ is on the graph."
        },
        {
          "line": "Also $q = f(0)$.",
          "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, here at $x = 0$, and $(0, q)$ is on the graph."
        },
        {
          "line": "The function $f$ gives exactly one output $f(0)$ for the input $0$.",
          "reason": "Function: a function gives exactly one output for each input it accepts."
        },
        {
          "line": "So $p = q$.",
          "reason": "Transitive property: by lines 2 and 3 both equal the one number $f(0)$ of line 4."
        },
        {
          "line": "So $(0, p)$ and $(0, q)$ are the same point, and the graph has at most one $y$-intercept.",
          "reason": "Ordered pair: two ordered pairs with equal first numbers and equal second numbers are the same pair."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t163-s1",
      "method": "direct proof",
      "statement": "Prove that for every number $c$, the line $y = c$ meets the graph of $f(x) = 7x + 23$ at exactly one point. Facts it may use: graph of a function, horizontal line $y = c$, the transitive property, adding the same number to both sides, dividing both sides by a nonzero number, checking a solution.",
      "check": {
        "proof": [
          {
            "line": "A point $(x, y)$ is on the line $y = c$ exactly when $y = c$.",
            "reason": "Horizontal line $y = c$: every point of the line has height $c$, and every point with height $c$ is on it."
          },
          {
            "line": "A point $(x, y)$ is on the graph of $f$ exactly when $y = 7x + 23$.",
            "reason": "Graph of a function: the points of the graph are the points $(x, f(x))$."
          },
          {
            "line": "So a point $(x, y)$ is on both exactly when $y = c$ and $7x + 23 = c$.",
            "reason": "Transitive property: with $y = c$, the equation $y = 7x + 23$ of line 2 holds exactly when $7x + 23 = c$."
          },
          {
            "line": "$7x = c - 23$",
            "reason": "Adding the same number to both sides: $-23$ is added to both sides of $7x + 23 = c$."
          },
          {
            "line": "$x = \\dfrac{c - 23}{7}$",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
          },
          {
            "line": "$7 \\cdot \\dfrac{c - 23}{7} + 23 = c$",
            "reason": "Checking a solution: the value of line 5 is put back into $7x + 23 = c$, and the left side is $c - 23 + 23$."
          },
          {
            "line": "Therefore the line $y = c$ meets the graph of $f$ at exactly one point, $\\left(\\dfrac{c - 23}{7}, c\\right)$.",
            "reason": "Lines 3 to 6: every common point has the $x$-coordinate of line 5 and the height $c$, and line 6 shows that this point is common."
          }
        ]
      }
    },
    {
      "id": "t163-s2",
      "method": "direct proof",
      "statement": "Prove that the graphs of $f(x) = x^3$ and $g(x) = 16x$ meet at exactly the three points $(-4, -64)$, $(0, 0)$ and $(4, 64)$. Facts it may use: the graphs of $f$ and $g$ meet where $f(x) = g(x)$, adding the same number to both sides, taking out a common factor, difference of squares, the Zero-product property, graph of a function.",
      "check": {
        "proof": [
          {
            "line": "The $x$-coordinates of the common points are the solutions of $x^3 = 16x$.",
            "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$."
          },
          {
            "line": "$x^3 - 16x = 0$",
            "reason": "Adding the same number to both sides: $-16x$ is added to both sides."
          },
          {
            "line": "$x(x^2 - 16) = 0$",
            "reason": "Taking out a common factor: $x$ is a factor of both terms."
          },
          {
            "line": "$x(x - 4)(x + 4) = 0$",
            "reason": "Difference of squares: $x^2 - 16 = (x - 4)(x + 4)$."
          },
          {
            "line": "So $x = 0$, $x = 4$ or $x = -4$.",
            "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
          },
          {
            "line": "The heights there are $g(-4) = -64$, $g(0) = 0$ and $g(4) = 64$.",
            "reason": "Graph of a function: $f(a)$ is the height of the graph at $x = a$, here for $g(x) = 16x$."
          },
          {
            "line": "Therefore the graphs meet at exactly the points $(-4, -64)$, $(0, 0)$ and $(4, 64)$.",
            "reason": "Lines 5 and 6: each common point has one of the three $x$-coordinates of line 5 and the height of line 6."
          }
        ]
      }
    },
    {
      "id": "t163-s3",
      "method": "direct proof",
      "statement": "Prove that the graphs of $f(x) = x^4 + 3$ and $g(x) = 2x^2$ have no common point. Facts it may use: the graphs of $f$ and $g$ meet where $f(x) = g(x)$, adding the same number to both sides, completing the square, the Trivial Inequality, transitivity.",
      "check": {
        "proof": [
          {
            "line": "A common point would have an $x$-coordinate with $x^4 + 3 = 2x^2$.",
            "reason": "The graphs of $f$ and $g$ meet where $f(x) = g(x)$."
          },
          {
            "line": "$x^4 - 2x^2 + 3 = 0$",
            "reason": "Adding the same number to both sides: $-2x^2$ is added to both sides."
          },
          {
            "line": "For every $x$, $x^4 - 2x^2 + 3 = (x^2 - 1)^2 + 2$.",
            "reason": "Completing the square: $(x^2 - 1)^2 = x^4 - 2x^2 + 1$, and $3 = 1 + 2$."
          },
          {
            "line": "For every $x$, $(x^2 - 1)^2 \\ge 0$.",
            "reason": "Trivial Inequality: the square of a real number is at least $0$."
          },
          {
            "line": "So $(x^2 - 1)^2 + 2 \\ge 2$.",
            "reason": "Adding the same number: $2$ is added to both sides of line 4."
          },
          {
            "line": "So $x^4 - 2x^2 + 3 \\ge 2$ for every $x$.",
            "reason": "Transitivity: lines 3 and 5."
          },
          {
            "line": "So $x^4 - 2x^2 + 3$ is never $0$.",
            "reason": "Transitivity: by line 6 it is at least $2$, and $2$ is above $0$."
          },
          {
            "line": "Therefore the graphs of $f$ and $g$ have no common point.",
            "reason": "Line 1: a common point needs a solution of line 2, and line 7 shows there is none."
          }
        ]
      }
    }
  ]
}
