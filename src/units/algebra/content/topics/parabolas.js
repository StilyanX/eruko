export default {
  "number": 151,
  "title": "Parabolas",
  "section": 12,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "404-414"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the vertex of the graph of $y = \\dfrac{1}{2}(x - 10)^2 + 13$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(10, 13)",
    "solution": [
      "Find the vertex of the graph of $y = \\dfrac{1}{2}(x - 10)^2 + 13$.",
      "Here $a = \\dfrac{1}{2}$, $h = 10$ and $k = 13$.",
      "The parabola opens upward.",
      "The vertex is $(10, 13)$."
    ]
  },
  "ideas": [
    {
      "name": "Parabola, axis of symmetry and vertex",
      "concrete": "In $y = 2(x - 3)^2 + 1$ the square $(x - 3)^2$ is never negative and is $0$ only at $x = 3$, so $y$ is never below $1$ and equals $1$ only at the point $(3, 1)$. The numbers $x = 2$ and $x = 4$ lie the same distance either side of $3$ and both give $y = 3$, so the points $(2, 3)$ and $(4, 3)$ are mirror images in the line $x = 3$.",
      "general": "For numbers $a$, $h$ and $k$ with $a \\ne 0$, the graph of $y = a(x - h)^2 + k$ is a **parabola**. The line $x = h$ cuts it into two halves that are mirror images of each other; it is the **axis of symmetry**. The point where the axis meets the parabola, $(h, k)$, is the **vertex**. The equation $y = a(x - h)^2 + k$ is the **standard form**. The parabola opens upward when $a > 0$, so the vertex is its lowest point, and downward when $a < 0$, so the vertex is its highest point. The same parabola written $y = ax^2 + bx + c$ is in **general form**; completing the square turns it into the standard form.",
      "figure": {
        "file": "parabolas-53.svg",
        "alt": "A parabola opening upward with its vertex V at (3, 1); the points A(2, 3) and B(4, 3) lie on it, one on each side of the vertical line through V."
      }
    },
    {
      "name": "Parabola with a horizontal axis",
      "concrete": "In $x = -4(y + 6)^2 + 9$ the letter $y$ is squared, so the roles of $x$ and $y$ change places: $x$ is never above $9$, and equals $9$ only at $y = -6$. The vertex is $(9, -6)$, the axis of symmetry is the line $y = -6$, and the parabola opens to the left.",
      "general": "For numbers $a$, $h$ and $k$ with $a \\ne 0$, the graph of $x = a(y - k)^2 + h$ is a parabola with vertex $(h, k)$ and axis of symmetry $y = k$; this is its standard form. It opens to the right when $a > 0$ and to the left when $a < 0$. Its general form is $x = ay^2 + by + c$."
    }
  ],
  "kinds": [
    {
      "id": "t151-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the vertex of the graph of $y = -3(x + 3)^2 - 16$.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $y = -3(x + 3)^2 - 16$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $a = -3$, $h = -3$ and $k = -16$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 3 = x - (-3)$, so the number in the bracket gives $-3$."
              },
              {
                "step": "The parabola opens downward.",
                "reason": "Opens up or down by the sign of $a$: $a = -3$ is negative."
              },
              {
                "step": "The vertex is $(-3, -16)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $y = 7(x + 4)^2 + 6$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-4, 6)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = 7(x + 4)^2 + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = 7$, $h = -4$ and $k = 6$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 4 = x - (-4)$, so the number in the bracket gives $-4$."
                },
                {
                  "step": "The parabola opens upward.",
                  "reason": "Opens up or down by the sign of $a$: $a = 7$ is positive."
                },
                {
                  "step": "The vertex is $(-4, 6)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $y = -\\dfrac{1}{2}(x - 2)^2 - 11$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -11)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = -\\dfrac{1}{2}(x - 2)^2 - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = -\\dfrac{1}{2}$, $h = 2$ and $k = -11$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The parabola opens downward.",
                  "reason": "Opens up or down by the sign of $a$: $a = -\\dfrac{1}{2}$ is negative."
                },
                {
                  "step": "The vertex is $(2, -11)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $y = 4(x + 11)^2 + 14$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-11, 14)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = 4(x + 11)^2 + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = 4$, $h = -11$ and $k = 14$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 11 = x - (-11)$, so the number in the bracket gives $-11$."
                },
                {
                  "step": "The parabola opens upward.",
                  "reason": "Opens up or down by the sign of $a$: $a = 4$ is positive."
                },
                {
                  "step": "The vertex is $(-11, 14)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the vertex of the graph of $x = 7(y - 25)^2 - 4$.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $x = 7(y - 25)^2 - 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $a = 7$, $k = 25$ and $h = -4$.",
                "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
              },
              {
                "step": "The parabola opens to the right.",
                "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = 7$ is positive."
              },
              {
                "step": "The vertex is $(-4, 25)$.",
                "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $x = 7(y + 1)^2 - 12$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-12, -1)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $x = 7(y + 1)^2 - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = 7$, $k = -1$ and $h = -12$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term, and $y + 1 = y - (-1)$, so the number in the bracket gives $-1$."
                },
                {
                  "step": "The parabola opens to the right.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = 7$ is positive."
                },
                {
                  "step": "The vertex is $(-12, -1)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $x = -2(y - 20)^2 + 12$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(12, 20)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $x = -2(y - 20)^2 + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = -2$, $k = 20$ and $h = 12$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "The parabola opens to the left.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -2$ is negative."
                },
                {
                  "step": "The vertex is $(12, 20)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $x = -2(y - 11)^2 + 6$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(6, 11)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $x = -2(y - 11)^2 + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = -2$, $k = 11$ and $h = 6$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "The parabola opens to the left.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -2$ is negative."
                },
                {
                  "step": "The vertex is $(6, 11)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the axis of symmetry of the graph of $y = 3(x + 15)^2 - 10$, as an equation with $x$ alone on the left.",
            "lines": [
              {
                "step": "Find the axis of symmetry of the graph of $y = 3(x + 15)^2 - 10$, as an equation with $x$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $a = 3$, $h = -15$ and $k = -10$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 15 = x - (-15)$, so the number in the bracket gives $-15$."
              },
              {
                "step": "The axis of symmetry is the line $x = -15$.",
                "reason": "Axis of symmetry: the axis of symmetry of the graph of $y = a(x - h)^2 + k$ is the line $x = h$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the axis of symmetry of the graph of $y = \\dfrac{3}{2}(x + 16)^2 + 19$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -16",
              "lines": [
                {
                  "step": "Find the axis of symmetry of the graph of $y = \\dfrac{3}{2}(x + 16)^2 + 19$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = \\dfrac{3}{2}$, $h = -16$ and $k = 19$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 16 = x - (-16)$, so the number in the bracket gives $-16$."
                },
                {
                  "step": "The axis of symmetry is the line $x = -16$.",
                  "reason": "Axis of symmetry: the axis of symmetry of the graph of $y = a(x - h)^2 + k$ is the line $x = h$."
                }
              ]
            },
            {
              "prompt": "Find the axis of symmetry of the graph of $y = -5(x + 5)^2 - 28$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -5",
              "lines": [
                {
                  "step": "Find the axis of symmetry of the graph of $y = -5(x + 5)^2 - 28$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = -5$, $h = -5$ and $k = -28$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 5 = x - (-5)$, so the number in the bracket gives $-5$."
                },
                {
                  "step": "The axis of symmetry is the line $x = -5$.",
                  "reason": "Axis of symmetry: the axis of symmetry of the graph of $y = a(x - h)^2 + k$ is the line $x = h$."
                }
              ]
            },
            {
              "prompt": "Find the axis of symmetry of the graph of $y = 6(x - 18)^2 - 29$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 18",
              "lines": [
                {
                  "step": "Find the axis of symmetry of the graph of $y = 6(x - 18)^2 - 29$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = 6$, $h = 18$ and $k = -29$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The axis of symmetry is the line $x = 18$.",
                  "reason": "Axis of symmetry: the axis of symmetry of the graph of $y = a(x - h)^2 + k$ is the line $x = h$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the axis of symmetry of the graph of $x = 6(y - 15)^2 - 16$, as an equation with $y$ alone on the left.",
            "lines": [
              {
                "step": "Find the axis of symmetry of the graph of $x = 6(y - 15)^2 - 16$, as an equation with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $a = 6$, $k = 15$ and $h = -16$.",
                "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
              },
              {
                "step": "The axis of symmetry is the line $y = 15$.",
                "reason": "Axis of symmetry: the axis of symmetry of the graph of $x = a(y - k)^2 + h$ is the line $y = k$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the axis of symmetry of the graph of $x = -\\dfrac{1}{3}(y + 24)^2 - 3$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -24",
              "lines": [
                {
                  "step": "Find the axis of symmetry of the graph of $x = -\\dfrac{1}{3}(y + 24)^2 - 3$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = -\\dfrac{1}{3}$, $k = -24$ and $h = -3$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term, and $y + 24 = y - (-24)$, so the number in the bracket gives $-24$."
                },
                {
                  "step": "The axis of symmetry is the line $y = -24$.",
                  "reason": "Axis of symmetry: the axis of symmetry of the graph of $x = a(y - k)^2 + h$ is the line $y = k$."
                }
              ]
            },
            {
              "prompt": "Find the axis of symmetry of the graph of $x = \\dfrac{1}{3}(y - 28)^2 + 8$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 28",
              "lines": [
                {
                  "step": "Find the axis of symmetry of the graph of $x = \\dfrac{1}{3}(y - 28)^2 + 8$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = \\dfrac{1}{3}$, $k = 28$ and $h = 8$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "The axis of symmetry is the line $y = 28$.",
                  "reason": "Axis of symmetry: the axis of symmetry of the graph of $x = a(y - k)^2 + h$ is the line $y = k$."
                }
              ]
            },
            {
              "prompt": "Find the axis of symmetry of the graph of $x = 2(y - 22)^2 + 16$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 22",
              "lines": [
                {
                  "step": "Find the axis of symmetry of the graph of $x = 2(y - 22)^2 + 16$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = 2$, $k = 22$ and $h = 16$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "The axis of symmetry is the line $y = 22$.",
                  "reason": "Axis of symmetry: the axis of symmetry of the graph of $x = a(y - k)^2 + h$ is the line $y = k$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t151-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the vertex of the graph of $y = x^2 - 8x + 32$.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $y = x^2 - 8x + 32$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = (x^2 - 8x + 16) - 16 + 32$",
                "reason": "Completing the square: the square of half the coefficient of $x$, $16$, is added and taken away, which leaves the value unchanged."
              },
              {
                "step": "$y = (x - 4)^2 - 16 + 32$",
                "reason": "Completing the square: $x^2 - 8x + 16 = (x - 4)^2$, half of $-8$ being $-4$."
              },
              {
                "step": "$y = (x - 4)^2 + 16$",
                "reason": "Line 3, with the numbers collected: $-16 + 32 = 16$."
              },
              {
                "step": "So $h = 4$ and $k = 16$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
              },
              {
                "step": "The vertex is $(4, 16)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $y = x^2 - 6x + 42$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, 33)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = x^2 - 6x + 42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = (x^2 - 6x + 9) - 9 + 42$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $9$, is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$y = (x - 3)^2 - 9 + 42$",
                  "reason": "Completing the square: $x^2 - 6x + 9 = (x - 3)^2$, half of $-6$ being $-3$."
                },
                {
                  "step": "$y = (x - 3)^2 + 33$",
                  "reason": "Line 3, with the numbers collected: $-9 + 42 = 33$."
                },
                {
                  "step": "So $h = 3$ and $k = 33$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(3, 33)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $y = x^2 - 18x + 21$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(9, -60)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = x^2 - 18x + 21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = (x^2 - 18x + 81) - 81 + 21$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $81$, is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$y = (x - 9)^2 - 81 + 21$",
                  "reason": "Completing the square: $x^2 - 18x + 81 = (x - 9)^2$, half of $-18$ being $-9$."
                },
                {
                  "step": "$y = (x - 9)^2 - 60$",
                  "reason": "Line 3, with the numbers collected: $-81 + 21 = -60$."
                },
                {
                  "step": "So $h = 9$ and $k = -60$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(9, -60)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $y = x^2 - 14x - 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(7, -50)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = x^2 - 14x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = (x^2 - 14x + 49) - 49 - 1$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $49$, is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$y = (x - 7)^2 - 49 - 1$",
                  "reason": "Completing the square: $x^2 - 14x + 49 = (x - 7)^2$, half of $-14$ being $-7$."
                },
                {
                  "step": "$y = (x - 7)^2 - 50$",
                  "reason": "Line 3, with the numbers collected: $-49 - 1 = -50$."
                },
                {
                  "step": "So $h = 7$ and $k = -50$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(7, -50)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the vertex of the graph of $y = 3x^2 - 12x + 43$.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $y = 3x^2 - 12x + 43$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 3(x^2 - 4x) + 43$",
                "reason": "Taking out a common factor: $3$ is taken out of the two terms in $x$."
              },
              {
                "step": "$y = 3(x^2 - 4x + 4) - 12 + 43$",
                "reason": "Completing the square: $4$ is added inside the bracket, which adds $3 \\cdot 4 = 12$ to the right side, so $-12$ is put outside to leave the value unchanged."
              },
              {
                "step": "$y = 3(x - 2)^2 - 12 + 43$",
                "reason": "Completing the square: $x^2 - 4x + 4 = (x - 2)^2$, half of $-4$ being $-2$."
              },
              {
                "step": "$y = 3(x - 2)^2 + 31$",
                "reason": "Line 4, with the numbers collected: $-12 + 43 = 31$."
              },
              {
                "step": "So $h = 2$ and $k = 31$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
              },
              {
                "step": "The vertex is $(2, 31)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $y = 6x^2 - 24x + 37$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, 13)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = 6x^2 - 24x + 37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 6(x^2 - 4x) + 37$",
                  "reason": "Taking out a common factor: $6$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 6(x^2 - 4x + 4) - 24 + 37$",
                  "reason": "Completing the square: $4$ is added inside the bracket, which adds $6 \\cdot 4 = 24$ to the right side, so $-24$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 6(x - 2)^2 - 24 + 37$",
                  "reason": "Completing the square: $x^2 - 4x + 4 = (x - 2)^2$, half of $-4$ being $-2$."
                },
                {
                  "step": "$y = 6(x - 2)^2 + 13$",
                  "reason": "Line 4, with the numbers collected: $-24 + 37 = 13$."
                },
                {
                  "step": "So $h = 2$ and $k = 13$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(2, 13)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $y = 3x^2 + 18x + 40$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-3, 13)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = 3x^2 + 18x + 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 3(x^2 + 6x) + 40$",
                  "reason": "Taking out a common factor: $3$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 3(x^2 + 6x + 9) - 27 + 40$",
                  "reason": "Completing the square: $9$ is added inside the bracket, which adds $3 \\cdot 9 = 27$ to the right side, so $-27$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 3(x + 3)^2 - 27 + 40$",
                  "reason": "Completing the square: $x^2 + 6x + 9 = (x + 3)^2$, half of $6$ being $3$."
                },
                {
                  "step": "$y = 3(x + 3)^2 + 13$",
                  "reason": "Line 4, with the numbers collected: $-27 + 40 = 13$."
                },
                {
                  "step": "So $h = -3$ and $k = 13$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term, and $x + 3 = x - (-3)$, so the number in the bracket gives $-3$."
                },
                {
                  "step": "The vertex is $(-3, 13)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $y = 7x^2 - 28x - 31$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -59)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $y = 7x^2 - 28x - 31$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 7(x^2 - 4x) - 31$",
                  "reason": "Taking out a common factor: $7$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 7(x^2 - 4x + 4) - 28 - 31$",
                  "reason": "Completing the square: $4$ is added inside the bracket, which adds $7 \\cdot 4 = 28$ to the right side, so $-28$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 7(x - 2)^2 - 28 - 31$",
                  "reason": "Completing the square: $x^2 - 4x + 4 = (x - 2)^2$, half of $-4$ being $-2$."
                },
                {
                  "step": "$y = 7(x - 2)^2 - 59$",
                  "reason": "Line 4, with the numbers collected: $-28 - 31 = -59$."
                },
                {
                  "step": "So $h = 2$ and $k = -59$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(2, -59)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the vertex of the graph of $x = -2y^2 - 12y + 31$.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $x = -2y^2 - 12y + 31$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = -2(y^2 + 6y) + 31$",
                "reason": "Taking out a common factor: $-2$ is taken out of the two terms in $y$."
              },
              {
                "step": "$x = -2(y^2 + 6y + 9) + 18 + 31$",
                "reason": "Completing the square: $9$ is added inside the bracket, which adds $(-2) \\cdot 9 = -18$ to the right side, so $18$ is put outside to leave the value unchanged."
              },
              {
                "step": "$x = -2(y + 3)^2 + 18 + 31$",
                "reason": "Completing the square: $y^2 + 6y + 9 = (y + 3)^2$, half of $6$ being $3$."
              },
              {
                "step": "$x = -2(y + 3)^2 + 49$",
                "reason": "Line 4, with the numbers collected: $18 + 31 = 49$."
              },
              {
                "step": "So $k = -3$ and $h = 49$.",
                "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term, and $y + 3 = y - (-3)$, so the number in the bracket gives $-3$."
              },
              {
                "step": "The vertex is $(49, -3)$.",
                "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $x = -2y^2 - 28y - 38$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(60, -7)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $x = -2y^2 - 28y - 38$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -2(y^2 + 14y) - 38$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = -2(y^2 + 14y + 49) + 98 - 38$",
                  "reason": "Completing the square: $49$ is added inside the bracket, which adds $(-2) \\cdot 49 = -98$ to the right side, so $98$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = -2(y + 7)^2 + 98 - 38$",
                  "reason": "Completing the square: $y^2 + 14y + 49 = (y + 7)^2$, half of $14$ being $7$."
                },
                {
                  "step": "$x = -2(y + 7)^2 + 60$",
                  "reason": "Line 4, with the numbers collected: $98 - 38 = 60$."
                },
                {
                  "step": "So $k = -7$ and $h = 60$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term, and $y + 7 = y - (-7)$, so the number in the bracket gives $-7$."
                },
                {
                  "step": "The vertex is $(60, -7)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $x = -2y^2 + 4y - 19$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-17, 1)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $x = -2y^2 + 4y - 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -2(y^2 - 2y) - 19$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = -2(y^2 - 2y + 1) + 2 - 19$",
                  "reason": "Completing the square: $1$ is added inside the bracket, which adds $(-2) \\cdot 1 = -2$ to the right side, so $2$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = -2(y - 1)^2 + 2 - 19$",
                  "reason": "Completing the square: $y^2 - 2y + 1 = (y - 1)^2$, half of $-2$ being $-1$."
                },
                {
                  "step": "$x = -2(y - 1)^2 - 17$",
                  "reason": "Line 4, with the numbers collected: $2 - 19 = -17$."
                },
                {
                  "step": "So $k = 1$ and $h = -17$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(-17, 1)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $x = 3y^2 + 6y - 37$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-40, -1)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $x = 3y^2 + 6y - 37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 3(y^2 + 2y) - 37$",
                  "reason": "Taking out a common factor: $3$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = 3(y^2 + 2y + 1) - 3 - 37$",
                  "reason": "Completing the square: $1$ is added inside the bracket, which adds $3 \\cdot 1 = 3$ to the right side, so $-3$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = 3(y + 1)^2 - 3 - 37$",
                  "reason": "Completing the square: $y^2 + 2y + 1 = (y + 1)^2$, half of $2$ being $1$."
                },
                {
                  "step": "$x = 3(y + 1)^2 - 40$",
                  "reason": "Line 4, with the numbers collected: $-3 - 37 = -40$."
                },
                {
                  "step": "So $k = -1$ and $h = -40$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term, and $y + 1 = y - (-1)$, so the number in the bracket gives $-1$."
                },
                {
                  "step": "The vertex is $(-40, -1)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the vertex of the graph of $-3x^2 + 24x + y = 8$.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $-3x^2 + 24x + y = 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 3x^2 - 24x + 8$",
                "reason": "Adding the same number to both sides: $-3x^2 + 24x$ is taken from each side, which leaves $y$ alone."
              },
              {
                "step": "$y = 3(x^2 - 8x) + 8$",
                "reason": "Taking out a common factor: $3$ is taken out of the two terms in $x$."
              },
              {
                "step": "$y = 3(x^2 - 8x + 16) - 48 + 8$",
                "reason": "Completing the square: $16$ is added inside the bracket, which adds $3 \\cdot 16 = 48$ to the right side, so $-48$ is put outside to leave the value unchanged."
              },
              {
                "step": "$y = 3(x - 4)^2 - 48 + 8$",
                "reason": "Completing the square: $x^2 - 8x + 16 = (x - 4)^2$, half of $-8$ being $-4$."
              },
              {
                "step": "$y = 3(x - 4)^2 - 40$",
                "reason": "Line 5, with the numbers collected: $-48 + 8 = -40$."
              },
              {
                "step": "So $h = 4$ and $k = -40$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
              },
              {
                "step": "The vertex is $(4, -40)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $-7x^2 + 14x + y = -24$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, -31)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $-7x^2 + 14x + y = -24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 7x^2 - 14x - 24$",
                  "reason": "Adding the same number to both sides: $-7x^2 + 14x$ is taken from each side, which leaves $y$ alone."
                },
                {
                  "step": "$y = 7(x^2 - 2x) - 24$",
                  "reason": "Taking out a common factor: $7$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 7(x^2 - 2x + 1) - 7 - 24$",
                  "reason": "Completing the square: $1$ is added inside the bracket, which adds $7 \\cdot 1 = 7$ to the right side, so $-7$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 7(x - 1)^2 - 7 - 24$",
                  "reason": "Completing the square: $x^2 - 2x + 1 = (x - 1)^2$, half of $-2$ being $-1$."
                },
                {
                  "step": "$y = 7(x - 1)^2 - 31$",
                  "reason": "Line 5, with the numbers collected: $-7 - 24 = -31$."
                },
                {
                  "step": "So $h = 1$ and $k = -31$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(1, -31)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $2x^2 - 20x + y = 3$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5, 53)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $2x^2 - 20x + y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -2x^2 + 20x + 3$",
                  "reason": "Adding the same number to both sides: $2x^2 - 20x$ is taken from each side, which leaves $y$ alone."
                },
                {
                  "step": "$y = -2(x^2 - 10x) + 3$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = -2(x^2 - 10x + 25) + 50 + 3$",
                  "reason": "Completing the square: $25$ is added inside the bracket, which adds $(-2) \\cdot 25 = -50$ to the right side, so $50$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = -2(x - 5)^2 + 50 + 3$",
                  "reason": "Completing the square: $x^2 - 10x + 25 = (x - 5)^2$, half of $-10$ being $-5$."
                },
                {
                  "step": "$y = -2(x - 5)^2 + 53$",
                  "reason": "Line 5, with the numbers collected: $50 + 3 = 53$."
                },
                {
                  "step": "So $h = 5$ and $k = 53$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(5, 53)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $-3x^2 + 30x + y = 25$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5, -50)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $-3x^2 + 30x + y = 25$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 3x^2 - 30x + 25$",
                  "reason": "Adding the same number to both sides: $-3x^2 + 30x$ is taken from each side, which leaves $y$ alone."
                },
                {
                  "step": "$y = 3(x^2 - 10x) + 25$",
                  "reason": "Taking out a common factor: $3$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 3(x^2 - 10x + 25) - 75 + 25$",
                  "reason": "Completing the square: $25$ is added inside the bracket, which adds $3 \\cdot 25 = 75$ to the right side, so $-75$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 3(x - 5)^2 - 75 + 25$",
                  "reason": "Completing the square: $x^2 - 10x + 25 = (x - 5)^2$, half of $-10$ being $-5$."
                },
                {
                  "step": "$y = 3(x - 5)^2 - 50$",
                  "reason": "Line 5, with the numbers collected: $-75 + 25 = -50$."
                },
                {
                  "step": "So $h = 5$ and $k = -50$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "The vertex is $(5, -50)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t151-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-6, 10)$ and a vertical axis of symmetry that passes through $(-2, 6)$.",
            "lines": [
              {
                "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-6, 10)$ and a vertical axis of symmetry that passes through $(-2, 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = a(x + 6)^2 + 10$",
                "reason": "Standard form $y = a(x - h)^2 + k$: the axis is vertical and the vertex is $(h, k) = (-6, 10)$."
              },
              {
                "step": "$6 = a(-2 + 6)^2 + 10$",
                "reason": "Substituting a value: $(-2, 6)$ is on the graph, so $x = -2$ and $y = 6$ satisfy the equation."
              },
              {
                "step": "$6 = 16a + 10$",
                "reason": "Order of operations: $-2 + 6 = 4$ and $4^2 = 16$."
              },
              {
                "step": "$-4 = 16a$",
                "reason": "Adding the same number to both sides: $10$ is taken from each side."
              },
              {
                "step": "$a = -\\dfrac{1}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
              },
              {
                "step": "$y = -\\dfrac{1}{4}(x + 6)^2 + 10$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-3, 2)$ and a vertical axis of symmetry that passes through $(1, -46)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -3*(x+3)^2+2",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-3, 2)$ and a vertical axis of symmetry that passes through $(1, -46)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x + 3)^2 + 2$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the axis is vertical and the vertex is $(h, k) = (-3, 2)$."
                },
                {
                  "step": "$-46 = a(1 + 3)^2 + 2$",
                  "reason": "Substituting a value: $(1, -46)$ is on the graph, so $x = 1$ and $y = -46$ satisfy the equation."
                },
                {
                  "step": "$-46 = 16a + 2$",
                  "reason": "Order of operations: $1 + 3 = 4$ and $4^2 = 16$."
                },
                {
                  "step": "$-48 = 16a$",
                  "reason": "Adding the same number to both sides: $2$ is taken from each side."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -3(x + 3)^2 + 2$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(3, 9)$ and a vertical axis of symmetry that passes through $(-1, -23)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -2*(x-3)^2+9",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(3, 9)$ and a vertical axis of symmetry that passes through $(-1, -23)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x - 3)^2 + 9$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the axis is vertical and the vertex is $(h, k) = (3, 9)$."
                },
                {
                  "step": "$-23 = a(-1 - 3)^2 + 9$",
                  "reason": "Substituting a value: $(-1, -23)$ is on the graph, so $x = -1$ and $y = -23$ satisfy the equation."
                },
                {
                  "step": "$-23 = 16a + 9$",
                  "reason": "Order of operations: $-1 - 3 = -4$ and $(-4)^2 = 16$."
                },
                {
                  "step": "$-32 = 16a$",
                  "reason": "Adding the same number to both sides: $9$ is taken from each side."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -2(x - 3)^2 + 9$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(7, 7)$ and a vertical axis of symmetry that passes through $(9, -9)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -4*(x-7)^2+7",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(7, 7)$ and a vertical axis of symmetry that passes through $(9, -9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x - 7)^2 + 7$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the axis is vertical and the vertex is $(h, k) = (7, 7)$."
                },
                {
                  "step": "$-9 = a(9 - 7)^2 + 7$",
                  "reason": "Substituting a value: $(9, -9)$ is on the graph, so $x = 9$ and $y = -9$ satisfy the equation."
                },
                {
                  "step": "$-9 = 4a + 7$",
                  "reason": "Order of operations: $9 - 7 = 2$ and $2^2 = 4$."
                },
                {
                  "step": "$-16 = 4a$",
                  "reason": "Adding the same number to both sides: $7$ is taken from each side."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -4(x - 7)^2 + 7$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-7, 9)$ and a horizontal axis of symmetry that passes through $(1, 13)$.",
            "lines": [
              {
                "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-7, 9)$ and a horizontal axis of symmetry that passes through $(1, 13)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = a(y - 9)^2 - 7$",
                "reason": "Standard form $x = a(y - k)^2 + h$: the axis is horizontal and the vertex is $(h, k) = (-7, 9)$."
              },
              {
                "step": "$1 = a(13 - 9)^2 - 7$",
                "reason": "Substituting a value: $(1, 13)$ is on the graph, so $x = 1$ and $y = 13$ satisfy the equation."
              },
              {
                "step": "$1 = 16a - 7$",
                "reason": "Order of operations: $13 - 9 = 4$ and $4^2 = 16$."
              },
              {
                "step": "$8 = 16a$",
                "reason": "Adding the same number to both sides: $7$ is added to each side."
              },
              {
                "step": "$a = \\dfrac{1}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
              },
              {
                "step": "$x = \\dfrac{1}{2}(y - 9)^2 - 7$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, 8)$ and a horizontal axis of symmetry that passes through $(-46, 12)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -3*(y-8)^2+2",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, 8)$ and a horizontal axis of symmetry that passes through $(-46, 12)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 8)^2 + 2$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the axis is horizontal and the vertex is $(h, k) = (2, 8)$."
                },
                {
                  "step": "$-46 = a(12 - 8)^2 + 2$",
                  "reason": "Substituting a value: $(-46, 12)$ is on the graph, so $x = -46$ and $y = 12$ satisfy the equation."
                },
                {
                  "step": "$-46 = 16a + 2$",
                  "reason": "Order of operations: $12 - 8 = 4$ and $4^2 = 16$."
                },
                {
                  "step": "$-48 = 16a$",
                  "reason": "Adding the same number to both sides: $2$ is taken from each side."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
                },
                {
                  "step": "$x = -3(y - 8)^2 + 2$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-3, 10)$ and a horizontal axis of symmetry that passes through $(13, 12)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 4*(y-10)^2-3",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-3, 10)$ and a horizontal axis of symmetry that passes through $(13, 12)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 10)^2 - 3$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the axis is horizontal and the vertex is $(h, k) = (-3, 10)$."
                },
                {
                  "step": "$13 = a(12 - 10)^2 - 3$",
                  "reason": "Substituting a value: $(13, 12)$ is on the graph, so $x = 13$ and $y = 12$ satisfy the equation."
                },
                {
                  "step": "$13 = 4a - 3$",
                  "reason": "Order of operations: $12 - 10 = 2$ and $2^2 = 4$."
                },
                {
                  "step": "$16 = 4a$",
                  "reason": "Adding the same number to both sides: $3$ is added to each side."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
                },
                {
                  "step": "$x = 4(y - 10)^2 - 3$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, 5)$ and a horizontal axis of symmetry that passes through $(14, 3)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 3*(y-5)^2+2",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, 5)$ and a horizontal axis of symmetry that passes through $(14, 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 5)^2 + 2$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the axis is horizontal and the vertex is $(h, k) = (2, 5)$."
                },
                {
                  "step": "$14 = a(3 - 5)^2 + 2$",
                  "reason": "Substituting a value: $(14, 3)$ is on the graph, so $x = 14$ and $y = 3$ satisfy the equation."
                },
                {
                  "step": "$14 = 4a + 2$",
                  "reason": "Order of operations: $3 - 5 = -2$ and $(-2)^2 = 4$."
                },
                {
                  "step": "$12 = 4a$",
                  "reason": "Adding the same number to both sides: $2$ is taken from each side."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
                },
                {
                  "step": "$x = 3(y - 5)^2 + 2$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the height, in metres, of an arch at a point $3$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $18$ metres wide at the ground and $22$ metres high at its centre.",
            "lines": [
              {
                "step": "Find the height, in metres, of an arch at a point $3$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $18$ metres wide at the ground and $22$ metres high at its centre.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre of the ground is put at the origin, so the vertex is $(0, 22)$ and the arch meets the ground at $(-9, 0)$ and $(9, 0)$.",
                "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $9$ either side of the origin."
              },
              {
                "step": "$y = ax^2 + 22$",
                "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$ and $k = 22$, the bracket is $x - 0 = x$."
              },
              {
                "step": "$0 = 81a + 22$",
                "reason": "Substituting a value: $(9, 0)$ is on the arch, and $9^2 = 81$."
              },
              {
                "step": "$-22 = 81a$",
                "reason": "Adding the same number to both sides: $22$ is taken from each side."
              },
              {
                "step": "$a = -\\dfrac{22}{81}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $81$, and the sides are read the other way round."
              },
              {
                "step": "$y = -\\dfrac{22}{81} \\cdot 3^2 + 22$",
                "reason": "Substituting a value: $x = 3$, a point $3$ metres from the centre."
              },
              {
                "step": "$y = \\dfrac{176}{9}$",
                "reason": "Order of operations: $-\\dfrac{22}{81} \\cdot 9 = -\\dfrac{22}{9}$, and $-\\dfrac{22}{9} + 22 = \\dfrac{176}{9}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the height, in metres, of an arch at a point $4$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $24$ metres wide at the ground and $13$ metres high at its centre.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "104/9",
              "lines": [
                {
                  "step": "Find the height, in metres, of an arch at a point $4$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $24$ metres wide at the ground and $13$ metres high at its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre of the ground is put at the origin, so the vertex is $(0, 13)$ and the arch meets the ground at $(-12, 0)$ and $(12, 0)$.",
                  "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $12$ either side of the origin."
                },
                {
                  "step": "$y = ax^2 + 13$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$ and $k = 13$, the bracket is $x - 0 = x$."
                },
                {
                  "step": "$0 = 144a + 13$",
                  "reason": "Substituting a value: $(12, 0)$ is on the arch, and $12^2 = 144$."
                },
                {
                  "step": "$-13 = 144a$",
                  "reason": "Adding the same number to both sides: $13$ is taken from each side."
                },
                {
                  "step": "$a = -\\dfrac{13}{144}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $144$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -\\dfrac{13}{144} \\cdot 4^2 + 13$",
                  "reason": "Substituting a value: $x = 4$, a point $4$ metres from the centre."
                },
                {
                  "step": "$y = \\dfrac{104}{9}$",
                  "reason": "Order of operations: $-\\dfrac{13}{144} \\cdot 16 = -\\dfrac{13}{9}$, and $-\\dfrac{13}{9} + 13 = \\dfrac{104}{9}$."
                }
              ]
            },
            {
              "prompt": "Find the height, in metres, of an arch at a point $4$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $12$ metres wide at the ground and $17$ metres high at its centre.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "85/9",
              "lines": [
                {
                  "step": "Find the height, in metres, of an arch at a point $4$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $12$ metres wide at the ground and $17$ metres high at its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre of the ground is put at the origin, so the vertex is $(0, 17)$ and the arch meets the ground at $(-6, 0)$ and $(6, 0)$.",
                  "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $6$ either side of the origin."
                },
                {
                  "step": "$y = ax^2 + 17$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$ and $k = 17$, the bracket is $x - 0 = x$."
                },
                {
                  "step": "$0 = 36a + 17$",
                  "reason": "Substituting a value: $(6, 0)$ is on the arch, and $6^2 = 36$."
                },
                {
                  "step": "$-17 = 36a$",
                  "reason": "Adding the same number to both sides: $17$ is taken from each side."
                },
                {
                  "step": "$a = -\\dfrac{17}{36}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $36$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -\\dfrac{17}{36} \\cdot 4^2 + 17$",
                  "reason": "Substituting a value: $x = 4$, a point $4$ metres from the centre."
                },
                {
                  "step": "$y = \\dfrac{85}{9}$",
                  "reason": "Order of operations: $-\\dfrac{17}{36} \\cdot 16 = -\\dfrac{68}{9}$, and $-\\dfrac{68}{9} + 17 = \\dfrac{85}{9}$."
                }
              ]
            },
            {
              "prompt": "Find the height, in metres, of an arch at a point $2$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $6$ metres wide at the ground and $5$ metres high at its centre.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/9",
              "lines": [
                {
                  "step": "Find the height, in metres, of an arch at a point $2$ metres from its centre, given that the arch is a parabola with a vertical axis of symmetry, $6$ metres wide at the ground and $5$ metres high at its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre of the ground is put at the origin, so the vertex is $(0, 5)$ and the arch meets the ground at $(-3, 0)$ and $(3, 0)$.",
                  "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $3$ either side of the origin."
                },
                {
                  "step": "$y = ax^2 + 5$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$ and $k = 5$, the bracket is $x - 0 = x$."
                },
                {
                  "step": "$0 = 9a + 5$",
                  "reason": "Substituting a value: $(3, 0)$ is on the arch, and $3^2 = 9$."
                },
                {
                  "step": "$-5 = 9a$",
                  "reason": "Adding the same number to both sides: $5$ is taken from each side."
                },
                {
                  "step": "$a = -\\dfrac{5}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -\\dfrac{5}{9} \\cdot 2^2 + 5$",
                  "reason": "Substituting a value: $x = 2$, a point $2$ metres from the centre."
                },
                {
                  "step": "$y = \\dfrac{25}{9}$",
                  "reason": "Order of operations: $-\\dfrac{5}{9} \\cdot 4 = -\\dfrac{20}{9}$, and $-\\dfrac{20}{9} + 5 = \\dfrac{25}{9}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $16$ metres wide at the ground and $9$ metres high at a point $6$ metres from its centre.",
            "lines": [
              {
                "step": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $16$ metres wide at the ground and $9$ metres high at a point $6$ metres from its centre.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre of the ground is put at the origin, so the vertex is $(0, k)$ and the arch meets the ground at $(-8, 0)$ and $(8, 0)$.",
                "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $8$ either side of the origin."
              },
              {
                "step": "$y = ax^2 + k$",
                "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$, the bracket is $x - 0 = x$, and $k$ is the height at the centre."
              },
              {
                "step": "$0 = 64a + k$",
                "reason": "Substituting a value: $(8, 0)$ is on the arch, and $8^2 = 64$."
              },
              {
                "step": "$9 = 36a + k$",
                "reason": "Substituting a value: $(6, 9)$ is on the arch, and $6^2 = 36$."
              },
              {
                "step": "$9 = -28a$",
                "reason": "Elimination: line 4 is taken from line 5, so $k$ drops out."
              },
              {
                "step": "$a = -\\dfrac{9}{28}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-28$, and the sides are read the other way round."
              },
              {
                "step": "$0 = 64 \\cdot \\left(-\\dfrac{9}{28}\\right) + k$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 4."
              },
              {
                "step": "$0 = -\\dfrac{144}{7} + k$",
                "reason": "Order of operations: $64 \\cdot \\left(-\\dfrac{9}{28}\\right) = -\\dfrac{144}{7}$."
              },
              {
                "step": "$k = \\dfrac{144}{7}$",
                "reason": "Adding the same number to both sides: $\\dfrac{144}{7}$ is added to each side, and the sides are read the other way round."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $28$ metres wide at the ground and $29$ metres high at a point $10$ metres from its centre.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1421/24",
              "lines": [
                {
                  "step": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $28$ metres wide at the ground and $29$ metres high at a point $10$ metres from its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre of the ground is put at the origin, so the vertex is $(0, k)$ and the arch meets the ground at $(-14, 0)$ and $(14, 0)$.",
                  "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $14$ either side of the origin."
                },
                {
                  "step": "$y = ax^2 + k$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$, the bracket is $x - 0 = x$, and $k$ is the height at the centre."
                },
                {
                  "step": "$0 = 196a + k$",
                  "reason": "Substituting a value: $(14, 0)$ is on the arch, and $14^2 = 196$."
                },
                {
                  "step": "$29 = 100a + k$",
                  "reason": "Substituting a value: $(10, 29)$ is on the arch, and $10^2 = 100$."
                },
                {
                  "step": "$29 = -96a$",
                  "reason": "Elimination: line 4 is taken from line 5, so $k$ drops out."
                },
                {
                  "step": "$a = -\\dfrac{29}{96}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-96$, and the sides are read the other way round."
                },
                {
                  "step": "$0 = 196 \\cdot \\left(-\\dfrac{29}{96}\\right) + k$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 4."
                },
                {
                  "step": "$0 = -\\dfrac{1421}{24} + k$",
                  "reason": "Order of operations: $196 \\cdot \\left(-\\dfrac{29}{96}\\right) = -\\dfrac{1421}{24}$."
                },
                {
                  "step": "$k = \\dfrac{1421}{24}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{1421}{24}$ is added to each side, and the sides are read the other way round."
                }
              ]
            },
            {
              "prompt": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $32$ metres wide at the ground and $23$ metres high at a point $12$ metres from its centre.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "368/7",
              "lines": [
                {
                  "step": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $32$ metres wide at the ground and $23$ metres high at a point $12$ metres from its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre of the ground is put at the origin, so the vertex is $(0, k)$ and the arch meets the ground at $(-16, 0)$ and $(16, 0)$.",
                  "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $16$ either side of the origin."
                },
                {
                  "step": "$y = ax^2 + k$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$, the bracket is $x - 0 = x$, and $k$ is the height at the centre."
                },
                {
                  "step": "$0 = 256a + k$",
                  "reason": "Substituting a value: $(16, 0)$ is on the arch, and $16^2 = 256$."
                },
                {
                  "step": "$23 = 144a + k$",
                  "reason": "Substituting a value: $(12, 23)$ is on the arch, and $12^2 = 144$."
                },
                {
                  "step": "$23 = -112a$",
                  "reason": "Elimination: line 4 is taken from line 5, so $k$ drops out."
                },
                {
                  "step": "$a = -\\dfrac{23}{112}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-112$, and the sides are read the other way round."
                },
                {
                  "step": "$0 = 256 \\cdot \\left(-\\dfrac{23}{112}\\right) + k$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 4."
                },
                {
                  "step": "$0 = -\\dfrac{368}{7} + k$",
                  "reason": "Order of operations: $256 \\cdot \\left(-\\dfrac{23}{112}\\right) = -\\dfrac{368}{7}$."
                },
                {
                  "step": "$k = \\dfrac{368}{7}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{368}{7}$ is added to each side, and the sides are read the other way round."
                }
              ]
            },
            {
              "prompt": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $36$ metres wide at the ground and $30$ metres high at a point $3$ metres from its centre.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "216/7",
              "lines": [
                {
                  "step": "Find the height, in metres, at the centre of an arch that is a parabola with a vertical axis of symmetry, $36$ metres wide at the ground and $30$ metres high at a point $3$ metres from its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre of the ground is put at the origin, so the vertex is $(0, k)$ and the arch meets the ground at $(-18, 0)$ and $(18, 0)$.",
                  "reason": "Coordinates: the ground is the $x$-axis and the axis of symmetry is the $y$-axis, so the two feet are $18$ either side of the origin."
                },
                {
                  "step": "$y = ax^2 + k$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: with $h = 0$, the bracket is $x - 0 = x$, and $k$ is the height at the centre."
                },
                {
                  "step": "$0 = 324a + k$",
                  "reason": "Substituting a value: $(18, 0)$ is on the arch, and $18^2 = 324$."
                },
                {
                  "step": "$30 = 9a + k$",
                  "reason": "Substituting a value: $(3, 30)$ is on the arch, and $3^2 = 9$."
                },
                {
                  "step": "$30 = -315a$",
                  "reason": "Elimination: line 4 is taken from line 5, so $k$ drops out."
                },
                {
                  "step": "$a = -\\dfrac{2}{21}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-315$, and the sides are read the other way round."
                },
                {
                  "step": "$0 = 324 \\cdot \\left(-\\dfrac{2}{21}\\right) + k$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 4."
                },
                {
                  "step": "$0 = -\\dfrac{216}{7} + k$",
                  "reason": "Order of operations: $324 \\cdot \\left(-\\dfrac{2}{21}\\right) = -\\dfrac{216}{7}$."
                },
                {
                  "step": "$k = \\dfrac{216}{7}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{216}{7}$ is added to each side, and the sides are read the other way round."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t151-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-4, 42)$, $(2, -36)$ and $(5, 6)$.",
            "lines": [
              {
                "step": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-4, 42)$, $(2, -36)$ and $(5, 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = ax^2 + bx + c$",
                "reason": "General form: the axis is vertical, so $y$ is a quadratic in $x$."
              },
              {
                "step": "$42 = 16a - 4b + c$",
                "reason": "Substituting a value: $(-4, 42)$ is on the graph, so $x = -4$ and $y = 42$ satisfy line 2, and $(-4)^2 = 16$."
              },
              {
                "step": "$-36 = 4a + 2b + c$",
                "reason": "Substituting a value: $(2, -36)$ is on the graph, so $x = 2$ and $y = -36$ satisfy line 2, and $2^2 = 4$."
              },
              {
                "step": "$6 = 25a + 5b + c$",
                "reason": "Substituting a value: $(5, 6)$ is on the graph, so $x = 5$ and $y = 6$ satisfy line 2, and $5^2 = 25$."
              },
              {
                "step": "$-78 = -12a + 6b$",
                "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
              },
              {
                "step": "$-36 = 9a + 9b$",
                "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
              },
              {
                "step": "$-162a = -486$",
                "reason": "Elimination: line 6 times $9$ minus line 7 times $6$, so $b$ drops out."
              },
              {
                "step": "$a = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-162$."
              },
              {
                "step": "$-78 = -36 + 6b$",
                "reason": "Back-substitution: $a = 3$ is put into line 6."
              },
              {
                "step": "$-42 = 6b$",
                "reason": "Adding the same number to both sides: $36$ is added to each side."
              },
              {
                "step": "$b = -7$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$, and the sides are read the other way round."
              },
              {
                "step": "$42 = 48 + 28 + c$",
                "reason": "Back-substitution: $a = 3$ and $b = -7$ are put into line 3."
              },
              {
                "step": "$c = -34$",
                "reason": "Adding the same number to both sides: $76$ is taken from each side, and the sides are read the other way round."
              },
              {
                "step": "$y = 3x^2 - 7x - 34$",
                "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-5, 48)$, $(-3, 52)$ and $(2, -8)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -2*x^2-14*x+28",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-5, 48)$, $(-3, 52)$ and $(2, -8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = ax^2 + bx + c$",
                  "reason": "General form: the axis is vertical, so $y$ is a quadratic in $x$."
                },
                {
                  "step": "$48 = 25a - 5b + c$",
                  "reason": "Substituting a value: $(-5, 48)$ is on the graph, so $x = -5$ and $y = 48$ satisfy line 2, and $(-5)^2 = 25$."
                },
                {
                  "step": "$52 = 9a - 3b + c$",
                  "reason": "Substituting a value: $(-3, 52)$ is on the graph, so $x = -3$ and $y = 52$ satisfy line 2, and $(-3)^2 = 9$."
                },
                {
                  "step": "$-8 = 4a + 2b + c$",
                  "reason": "Substituting a value: $(2, -8)$ is on the graph, so $x = 2$ and $y = -8$ satisfy line 2, and $2^2 = 4$."
                },
                {
                  "step": "$4 = -16a + 2b$",
                  "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
                },
                {
                  "step": "$-56 = -21a + 7b$",
                  "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
                },
                {
                  "step": "$-70a = 140$",
                  "reason": "Elimination: line 6 times $7$ minus line 7 times $2$, so $b$ drops out."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-70$."
                },
                {
                  "step": "$4 = 32 + 2b$",
                  "reason": "Back-substitution: $a = -2$ is put into line 6."
                },
                {
                  "step": "$-28 = 2b$",
                  "reason": "Adding the same number to both sides: $32$ is taken from each side."
                },
                {
                  "step": "$b = -14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, and the sides are read the other way round."
                },
                {
                  "step": "$48 = -50 + 70 + c$",
                  "reason": "Back-substitution: $a = -2$ and $b = -14$ are put into line 3."
                },
                {
                  "step": "$c = 28$",
                  "reason": "Adding the same number to both sides: $20$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$y = -2x^2 - 14x + 28$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-5, 7)$, $(-3, -19)$ and $(2, 21)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*x^2+11*x-13",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-5, 7)$, $(-3, -19)$ and $(2, 21)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = ax^2 + bx + c$",
                  "reason": "General form: the axis is vertical, so $y$ is a quadratic in $x$."
                },
                {
                  "step": "$7 = 25a - 5b + c$",
                  "reason": "Substituting a value: $(-5, 7)$ is on the graph, so $x = -5$ and $y = 7$ satisfy line 2, and $(-5)^2 = 25$."
                },
                {
                  "step": "$-19 = 9a - 3b + c$",
                  "reason": "Substituting a value: $(-3, -19)$ is on the graph, so $x = -3$ and $y = -19$ satisfy line 2, and $(-3)^2 = 9$."
                },
                {
                  "step": "$21 = 4a + 2b + c$",
                  "reason": "Substituting a value: $(2, 21)$ is on the graph, so $x = 2$ and $y = 21$ satisfy line 2, and $2^2 = 4$."
                },
                {
                  "step": "$-26 = -16a + 2b$",
                  "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
                },
                {
                  "step": "$14 = -21a + 7b$",
                  "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
                },
                {
                  "step": "$-70a = -210$",
                  "reason": "Elimination: line 6 times $7$ minus line 7 times $2$, so $b$ drops out."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-70$."
                },
                {
                  "step": "$-26 = -48 + 2b$",
                  "reason": "Back-substitution: $a = 3$ is put into line 6."
                },
                {
                  "step": "$22 = 2b$",
                  "reason": "Adding the same number to both sides: $48$ is added to each side."
                },
                {
                  "step": "$b = 11$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, and the sides are read the other way round."
                },
                {
                  "step": "$7 = 75 - 55 + c$",
                  "reason": "Back-substitution: $a = 3$ and $b = 11$ are put into line 3."
                },
                {
                  "step": "$c = -13$",
                  "reason": "Adding the same number to both sides: $20$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$y = 3x^2 + 11x - 13$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-3, -7)$, $(2, 3)$ and $(4, 49)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*x^2+5*x-19",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with a vertical axis of symmetry that passes through $(-3, -7)$, $(2, 3)$ and $(4, 49)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = ax^2 + bx + c$",
                  "reason": "General form: the axis is vertical, so $y$ is a quadratic in $x$."
                },
                {
                  "step": "$-7 = 9a - 3b + c$",
                  "reason": "Substituting a value: $(-3, -7)$ is on the graph, so $x = -3$ and $y = -7$ satisfy line 2, and $(-3)^2 = 9$."
                },
                {
                  "step": "$3 = 4a + 2b + c$",
                  "reason": "Substituting a value: $(2, 3)$ is on the graph, so $x = 2$ and $y = 3$ satisfy line 2, and $2^2 = 4$."
                },
                {
                  "step": "$49 = 16a + 4b + c$",
                  "reason": "Substituting a value: $(4, 49)$ is on the graph, so $x = 4$ and $y = 49$ satisfy line 2, and $4^2 = 16$."
                },
                {
                  "step": "$10 = -5a + 5b$",
                  "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
                },
                {
                  "step": "$56 = 7a + 7b$",
                  "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
                },
                {
                  "step": "$-70a = -210$",
                  "reason": "Elimination: line 6 times $7$ minus line 7 times $5$, so $b$ drops out."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-70$."
                },
                {
                  "step": "$10 = -15 + 5b$",
                  "reason": "Back-substitution: $a = 3$ is put into line 6."
                },
                {
                  "step": "$25 = 5b$",
                  "reason": "Adding the same number to both sides: $15$ is added to each side."
                },
                {
                  "step": "$b = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$, and the sides are read the other way round."
                },
                {
                  "step": "$-7 = 27 - 15 + c$",
                  "reason": "Back-substitution: $a = 3$ and $b = 5$ are put into line 3."
                },
                {
                  "step": "$c = -19$",
                  "reason": "Adding the same number to both sides: $12$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$y = 3x^2 + 5x - 19$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(26, -4)$, $(6, -2)$ and $(-46, 2)$.",
            "lines": [
              {
                "step": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(26, -4)$, $(6, -2)$ and $(-46, 2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = ay^2 + by + c$",
                "reason": "General form: the axis is horizontal, so $x$ is a quadratic in $y$."
              },
              {
                "step": "$26 = 16a - 4b + c$",
                "reason": "Substituting a value: $(26, -4)$ is on the graph, so $y = -4$ and $x = 26$ satisfy line 2, and $(-4)^2 = 16$."
              },
              {
                "step": "$6 = 4a - 2b + c$",
                "reason": "Substituting a value: $(6, -2)$ is on the graph, so $y = -2$ and $x = 6$ satisfy line 2, and $(-2)^2 = 4$."
              },
              {
                "step": "$-46 = 4a + 2b + c$",
                "reason": "Substituting a value: $(-46, 2)$ is on the graph, so $y = 2$ and $x = -46$ satisfy line 2, and $2^2 = 4$."
              },
              {
                "step": "$-20 = -12a + 2b$",
                "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
              },
              {
                "step": "$-72 = -12a + 6b$",
                "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
              },
              {
                "step": "$-48a = 24$",
                "reason": "Elimination: line 6 times $6$ minus line 7 times $2$, so $b$ drops out."
              },
              {
                "step": "$a = -\\dfrac{1}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-48$."
              },
              {
                "step": "$-20 = 6 + 2b$",
                "reason": "Back-substitution: $a = -\\dfrac{1}{2}$ is put into line 6."
              },
              {
                "step": "$-26 = 2b$",
                "reason": "Adding the same number to both sides: $6$ is taken from each side."
              },
              {
                "step": "$b = -13$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, and the sides are read the other way round."
              },
              {
                "step": "$26 = -8 + 52 + c$",
                "reason": "Back-substitution: $a = -\\dfrac{1}{2}$ and $b = -13$ are put into line 3."
              },
              {
                "step": "$c = -18$",
                "reason": "Adding the same number to both sides: $44$ is taken from each side, and the sides are read the other way round."
              },
              {
                "step": "$x = -\\dfrac{1}{2}y^2 - 13y - 18$",
                "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(16, -5)$, $(-11, -2)$ and $(37, 2)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 3*y^2+12*y+1",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(16, -5)$, $(-11, -2)$ and $(37, 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = ay^2 + by + c$",
                  "reason": "General form: the axis is horizontal, so $x$ is a quadratic in $y$."
                },
                {
                  "step": "$16 = 25a - 5b + c$",
                  "reason": "Substituting a value: $(16, -5)$ is on the graph, so $y = -5$ and $x = 16$ satisfy line 2, and $(-5)^2 = 25$."
                },
                {
                  "step": "$-11 = 4a - 2b + c$",
                  "reason": "Substituting a value: $(-11, -2)$ is on the graph, so $y = -2$ and $x = -11$ satisfy line 2, and $(-2)^2 = 4$."
                },
                {
                  "step": "$37 = 4a + 2b + c$",
                  "reason": "Substituting a value: $(37, 2)$ is on the graph, so $y = 2$ and $x = 37$ satisfy line 2, and $2^2 = 4$."
                },
                {
                  "step": "$-27 = -21a + 3b$",
                  "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
                },
                {
                  "step": "$21 = -21a + 7b$",
                  "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
                },
                {
                  "step": "$-84a = -252$",
                  "reason": "Elimination: line 6 times $7$ minus line 7 times $3$, so $b$ drops out."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-84$."
                },
                {
                  "step": "$-27 = -63 + 3b$",
                  "reason": "Back-substitution: $a = 3$ is put into line 6."
                },
                {
                  "step": "$36 = 3b$",
                  "reason": "Adding the same number to both sides: $63$ is added to each side."
                },
                {
                  "step": "$b = 12$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, and the sides are read the other way round."
                },
                {
                  "step": "$16 = 75 - 60 + c$",
                  "reason": "Back-substitution: $a = 3$ and $b = 12$ are put into line 3."
                },
                {
                  "step": "$c = 1$",
                  "reason": "Adding the same number to both sides: $15$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$x = 3y^2 + 12y + 1$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(36, -4)$, $(8, 3)$ and $(54, 5)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 3*y^2-y-16",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(36, -4)$, $(8, 3)$ and $(54, 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = ay^2 + by + c$",
                  "reason": "General form: the axis is horizontal, so $x$ is a quadratic in $y$."
                },
                {
                  "step": "$36 = 16a - 4b + c$",
                  "reason": "Substituting a value: $(36, -4)$ is on the graph, so $y = -4$ and $x = 36$ satisfy line 2, and $(-4)^2 = 16$."
                },
                {
                  "step": "$8 = 9a + 3b + c$",
                  "reason": "Substituting a value: $(8, 3)$ is on the graph, so $y = 3$ and $x = 8$ satisfy line 2, and $3^2 = 9$."
                },
                {
                  "step": "$54 = 25a + 5b + c$",
                  "reason": "Substituting a value: $(54, 5)$ is on the graph, so $y = 5$ and $x = 54$ satisfy line 2, and $5^2 = 25$."
                },
                {
                  "step": "$-28 = -7a + 7b$",
                  "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
                },
                {
                  "step": "$18 = 9a + 9b$",
                  "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
                },
                {
                  "step": "$-126a = -378$",
                  "reason": "Elimination: line 6 times $9$ minus line 7 times $7$, so $b$ drops out."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-126$."
                },
                {
                  "step": "$-28 = -21 + 7b$",
                  "reason": "Back-substitution: $a = 3$ is put into line 6."
                },
                {
                  "step": "$-7 = 7b$",
                  "reason": "Adding the same number to both sides: $21$ is added to each side."
                },
                {
                  "step": "$b = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$, and the sides are read the other way round."
                },
                {
                  "step": "$36 = 48 + 4 + c$",
                  "reason": "Back-substitution: $a = 3$ and $b = -1$ are put into line 3."
                },
                {
                  "step": "$c = -16$",
                  "reason": "Adding the same number to both sides: $52$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$x = 3y^2 - y - 16$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(-23, -5)$, $(7, -3)$ and $(-47, 3)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -3*y^2-9*y+7",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with a horizontal axis of symmetry that passes through $(-23, -5)$, $(7, -3)$ and $(-47, 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = ay^2 + by + c$",
                  "reason": "General form: the axis is horizontal, so $x$ is a quadratic in $y$."
                },
                {
                  "step": "$-23 = 25a - 5b + c$",
                  "reason": "Substituting a value: $(-23, -5)$ is on the graph, so $y = -5$ and $x = -23$ satisfy line 2, and $(-5)^2 = 25$."
                },
                {
                  "step": "$7 = 9a - 3b + c$",
                  "reason": "Substituting a value: $(7, -3)$ is on the graph, so $y = -3$ and $x = 7$ satisfy line 2, and $(-3)^2 = 9$."
                },
                {
                  "step": "$-47 = 9a + 3b + c$",
                  "reason": "Substituting a value: $(-47, 3)$ is on the graph, so $y = 3$ and $x = -47$ satisfy line 2, and $3^2 = 9$."
                },
                {
                  "step": "$30 = -16a + 2b$",
                  "reason": "Elimination: line 3 is taken from line 4, so $c$ drops out."
                },
                {
                  "step": "$-24 = -16a + 8b$",
                  "reason": "Elimination: line 3 is taken from line 5, so $c$ drops out."
                },
                {
                  "step": "$-96a = 288$",
                  "reason": "Elimination: line 6 times $8$ minus line 7 times $2$, so $b$ drops out."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-96$."
                },
                {
                  "step": "$30 = 48 + 2b$",
                  "reason": "Back-substitution: $a = -3$ is put into line 6."
                },
                {
                  "step": "$-18 = 2b$",
                  "reason": "Adding the same number to both sides: $48$ is taken from each side."
                },
                {
                  "step": "$b = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, and the sides are read the other way round."
                },
                {
                  "step": "$-23 = -75 + 45 + c$",
                  "reason": "Back-substitution: $a = -3$ and $b = -9$ are put into line 3."
                },
                {
                  "step": "$c = 7$",
                  "reason": "Adding the same number to both sides: $-30$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$x = -3y^2 - 9y + 7$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are replaced by their values in line 2."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t151-k5",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = \\dfrac{1}{2}x^2 - 8x + 19$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\dfrac{1}{2}x^2 - 8x + 19$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = \\dfrac{1}{2}(x - 8)^2 - 13$",
                "reason": "Completing the square in letters, with $a = \\dfrac{1}{2}$, $b = -8$ and $c = 19$: $h = -\\dfrac{b}{2a} = 8$ and $k = c - \\dfrac{b^2}{4a} = -13$."
              },
              {
                "step": "The vertex is $(8, -13)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              },
              {
                "step": "The parabola opens upward.",
                "reason": "Opens up or down by the sign of $a$: $a = \\dfrac{1}{2}$ is positive."
              },
              {
                "step": "At $x = 0$, $y = 19$, so the $y$-intercept is $(0, 19)$.",
                "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2, which gives $\\dfrac{1}{2} \\cdot 64 - 13 = 19$."
              },
              {
                "step": "$0 = \\dfrac{1}{2}(x - 8)^2 - 13$",
                "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2."
              },
              {
                "step": "$\\dfrac{1}{2}(x - 8)^2 = 13$",
                "reason": "Adding the same number to both sides: $13$ is added to each side."
              },
              {
                "step": "$(x - 8)^2 = 26$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{1}{2}$."
              },
              {
                "step": "So $x = 8 + \\sqrt{26}$ or $x = 8 - \\sqrt{26}$, and the $x$-intercepts are $(8 - \\sqrt{26}, 0)$ and $(8 + \\sqrt{26}, 0)$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x - 8 = \\sqrt{26}$ or $-\\sqrt{26}$, and $\\sqrt{26}$ is already in simplest radical form."
              },
              {
                "step": "The parabola through these points, with its vertex at $(8, -13)$, is the graph.",
                "figure": {
                  "file": "parabolas-1.svg",
                  "alt": "A parabola opening upward with its vertex V at (8, −13), crossing the x-axis at A(8 − √26, 0) and B(8 + √26, 0) and the y-axis at C(0, 19)."
                },
                "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = 8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\dfrac{3}{2}x^2 - 12x - 15$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(4 - \\sqrt{26}, 0)$",
                  "$(4 + \\sqrt{26}, 0)$",
                  "$(0, -15)$"
                ],
                "turning": [
                  "$(4, -39)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{3}{2}x^2 - 12x - 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = \\dfrac{3}{2}(x - 4)^2 - 39$",
                  "reason": "Completing the square in letters, with $a = \\dfrac{3}{2}$, $b = -12$ and $c = -15$: $h = -\\dfrac{b}{2a} = 4$ and $k = c - \\dfrac{b^2}{4a} = -39$."
                },
                {
                  "step": "The vertex is $(4, -39)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                },
                {
                  "step": "The parabola opens upward.",
                  "reason": "Opens up or down by the sign of $a$: $a = \\dfrac{3}{2}$ is positive."
                },
                {
                  "step": "At $x = 0$, $y = -15$, so the $y$-intercept is $(0, -15)$.",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2, which gives $\\dfrac{3}{2} \\cdot 16 - 39 = -15$."
                },
                {
                  "step": "$0 = \\dfrac{3}{2}(x - 4)^2 - 39$",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2."
                },
                {
                  "step": "$\\dfrac{3}{2}(x - 4)^2 = 39$",
                  "reason": "Adding the same number to both sides: $39$ is added to each side."
                },
                {
                  "step": "$(x - 4)^2 = 26$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{3}{2}$."
                },
                {
                  "step": "So $x = 4 + \\sqrt{26}$ or $x = 4 - \\sqrt{26}$, and the $x$-intercepts are $(4 - \\sqrt{26}, 0)$ and $(4 + \\sqrt{26}, 0)$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x - 4 = \\sqrt{26}$ or $-\\sqrt{26}$, and $\\sqrt{26}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(4, -39)$, is the graph.",
                  "figure": {
                    "file": "parabolas-2.svg",
                    "alt": "A parabola opening upward with its vertex V at (4, −39), crossing the x-axis at A(4 − √26, 0) and B(4 + √26, 0) and the y-axis at C(0, −15)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = 4$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -\\dfrac{3}{2}x^2 + 18x - 39$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(6 - \\sqrt{10}, 0)$",
                  "$(6 + \\sqrt{10}, 0)$",
                  "$(0, -39)$"
                ],
                "turning": [
                  "$(6, 15)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -\\dfrac{3}{2}x^2 + 18x - 39$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{3}{2}(x - 6)^2 + 15$",
                  "reason": "Completing the square in letters, with $a = -\\dfrac{3}{2}$, $b = 18$ and $c = -39$: $h = -\\dfrac{b}{2a} = 6$ and $k = c - \\dfrac{b^2}{4a} = 15$."
                },
                {
                  "step": "The vertex is $(6, 15)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                },
                {
                  "step": "The parabola opens downward.",
                  "reason": "Opens up or down by the sign of $a$: $a = -\\dfrac{3}{2}$ is negative."
                },
                {
                  "step": "At $x = 0$, $y = -39$, so the $y$-intercept is $(0, -39)$.",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2, which gives $-\\dfrac{3}{2} \\cdot 36 + 15 = -39$."
                },
                {
                  "step": "$0 = -\\dfrac{3}{2}(x - 6)^2 + 15$",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2."
                },
                {
                  "step": "$-\\dfrac{3}{2}(x - 6)^2 = -15$",
                  "reason": "Adding the same number to both sides: $15$ is taken from each side."
                },
                {
                  "step": "$(x - 6)^2 = 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{3}{2}$."
                },
                {
                  "step": "So $x = 6 + \\sqrt{10}$ or $x = 6 - \\sqrt{10}$, and the $x$-intercepts are $(6 - \\sqrt{10}, 0)$ and $(6 + \\sqrt{10}, 0)$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x - 6 = \\sqrt{10}$ or $-\\sqrt{10}$, and $\\sqrt{10}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(6, 15)$, is the graph.",
                  "figure": {
                    "file": "parabolas-3.svg",
                    "alt": "A parabola opening downward with its vertex V at (6, 15), crossing the x-axis at A(6 − √10, 0) and B(6 + √10, 0) and the y-axis at C(0, −39)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = 6$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -\\dfrac{1}{3}x^2 + 8x - 37$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(12 - \\sqrt{33}, 0)$",
                  "$(12 + \\sqrt{33}, 0)$",
                  "$(0, -37)$"
                ],
                "turning": [
                  "$(12, 11)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -\\dfrac{1}{3}x^2 + 8x - 37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -\\dfrac{1}{3}(x - 12)^2 + 11$",
                  "reason": "Completing the square in letters, with $a = -\\dfrac{1}{3}$, $b = 8$ and $c = -37$: $h = -\\dfrac{b}{2a} = 12$ and $k = c - \\dfrac{b^2}{4a} = 11$."
                },
                {
                  "step": "The vertex is $(12, 11)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                },
                {
                  "step": "The parabola opens downward.",
                  "reason": "Opens up or down by the sign of $a$: $a = -\\dfrac{1}{3}$ is negative."
                },
                {
                  "step": "At $x = 0$, $y = -37$, so the $y$-intercept is $(0, -37)$.",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2, which gives $-\\dfrac{1}{3} \\cdot 144 + 11 = -37$."
                },
                {
                  "step": "$0 = -\\dfrac{1}{3}(x - 12)^2 + 11$",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2."
                },
                {
                  "step": "$-\\dfrac{1}{3}(x - 12)^2 = -11$",
                  "reason": "Adding the same number to both sides: $11$ is taken from each side."
                },
                {
                  "step": "$(x - 12)^2 = 33$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{1}{3}$."
                },
                {
                  "step": "So $x = 12 + \\sqrt{33}$ or $x = 12 - \\sqrt{33}$, and the $x$-intercepts are $(12 - \\sqrt{33}, 0)$ and $(12 + \\sqrt{33}, 0)$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x - 12 = \\sqrt{33}$ or $-\\sqrt{33}$, and $\\sqrt{33}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(12, 11)$, is the graph.",
                  "figure": {
                    "file": "parabolas-4.svg",
                    "alt": "A parabola opening downward with its vertex V at (12, 11), crossing the x-axis at A(12 − √33, 0) and B(12 + √33, 0) and the y-axis at C(0, −37)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = 12$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $x = \\dfrac{3}{2}y^2 + 21y + \\dfrac{105}{2}$.",
            "lines": [
              {
                "step": "Sketch the graph of $x = \\dfrac{3}{2}y^2 + 21y + \\dfrac{105}{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\dfrac{3}{2}(y + 7)^2 - 21$",
                "reason": "Completing the square in letters, with $a = \\dfrac{3}{2}$, $b = 21$ and $c = \\dfrac{105}{2}$ in $x = ay^2 + by + c$: the bracket is $y + 7$, where $-\\dfrac{b}{2a} = -7$, and the number added is $c - \\dfrac{b^2}{4a} = -21$."
              },
              {
                "step": "The vertex is $(-21, -7)$.",
                "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
              },
              {
                "step": "The parabola opens to the right.",
                "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = \\dfrac{3}{2}$ is positive."
              },
              {
                "step": "At $y = 0$, $x = \\dfrac{105}{2}$, so the $x$-intercept is $(\\dfrac{105}{2}, 0)$.",
                "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2, which gives $\\dfrac{3}{2} \\cdot 49 - 21 = \\dfrac{105}{2}$."
              },
              {
                "step": "$0 = \\dfrac{3}{2}(y + 7)^2 - 21$",
                "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2."
              },
              {
                "step": "$\\dfrac{3}{2}(y + 7)^2 = 21$",
                "reason": "Adding the same number to both sides: $21$ is added to each side."
              },
              {
                "step": "$(y + 7)^2 = 14$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{3}{2}$."
              },
              {
                "step": "So $y = -7 + \\sqrt{14}$ or $y = -7 - \\sqrt{14}$, and the $y$-intercepts are $(0, -7 - \\sqrt{14})$ and $(0, -7 + \\sqrt{14})$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y + 7 = \\sqrt{14}$ or $-\\sqrt{14}$, and $\\sqrt{14}$ is already in simplest radical form."
              },
              {
                "step": "The parabola through these points, with its vertex at $(-21, -7)$, is the graph.",
                "figure": {
                  "file": "parabolas-12.svg",
                  "alt": "A parabola opening to the right with its vertex V at (−21, −7), crossing the y-axis at A(0, −7 − √14) and B(0, −7 + √14) and the x-axis at C(105/2, 0)."
                },
                "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = -7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $x = -\\dfrac{1}{3}y^2 - \\dfrac{14}{3}y - \\dfrac{34}{3}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -7 - \\sqrt{15})$",
                  "$(0, -7 + \\sqrt{15})$",
                  "$(-\\dfrac{34}{3}, 0)$"
                ],
                "turning": [
                  "$(5, -7)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = -\\dfrac{1}{3}y^2 - \\dfrac{14}{3}y - \\dfrac{34}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -\\dfrac{1}{3}(y + 7)^2 + 5$",
                  "reason": "Completing the square in letters, with $a = -\\dfrac{1}{3}$, $b = -\\dfrac{14}{3}$ and $c = -\\dfrac{34}{3}$ in $x = ay^2 + by + c$: the bracket is $y + 7$, where $-\\dfrac{b}{2a} = -7$, and the number added is $c - \\dfrac{b^2}{4a} = 5$."
                },
                {
                  "step": "The vertex is $(5, -7)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                },
                {
                  "step": "The parabola opens to the left.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -\\dfrac{1}{3}$ is negative."
                },
                {
                  "step": "At $y = 0$, $x = -\\dfrac{34}{3}$, so the $x$-intercept is $(-\\dfrac{34}{3}, 0)$.",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2, which gives $-\\dfrac{1}{3} \\cdot 49 + 5 = -\\dfrac{34}{3}$."
                },
                {
                  "step": "$0 = -\\dfrac{1}{3}(y + 7)^2 + 5$",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2."
                },
                {
                  "step": "$-\\dfrac{1}{3}(y + 7)^2 = -5$",
                  "reason": "Adding the same number to both sides: $5$ is taken from each side."
                },
                {
                  "step": "$(y + 7)^2 = 15$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{1}{3}$."
                },
                {
                  "step": "So $y = -7 + \\sqrt{15}$ or $y = -7 - \\sqrt{15}$, and the $y$-intercepts are $(0, -7 - \\sqrt{15})$ and $(0, -7 + \\sqrt{15})$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y + 7 = \\sqrt{15}$ or $-\\sqrt{15}$, and $\\sqrt{15}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(5, -7)$, is the graph.",
                  "figure": {
                    "file": "parabolas-13.svg",
                    "alt": "A parabola opening to the left with its vertex V at (5, −7), crossing the y-axis at A(0, −7 − √15) and B(0, −7 + √15) and the x-axis at C(−34/3, 0)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = -7$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x = -2y^2 + 16y + 6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 4 - \\sqrt{19})$",
                  "$(0, 4 + \\sqrt{19})$",
                  "$(6, 0)$"
                ],
                "turning": [
                  "$(38, 4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = -2y^2 + 16y + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -2(y - 4)^2 + 38$",
                  "reason": "Completing the square in letters, with $a = -2$, $b = 16$ and $c = 6$ in $x = ay^2 + by + c$: the bracket is $y - 4$, where $-\\dfrac{b}{2a} = 4$, and the number added is $c - \\dfrac{b^2}{4a} = 38$."
                },
                {
                  "step": "The vertex is $(38, 4)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                },
                {
                  "step": "The parabola opens to the left.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -2$ is negative."
                },
                {
                  "step": "At $y = 0$, $x = 6$, so the $x$-intercept is $(6, 0)$.",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2, which gives $-2 \\cdot 16 + 38 = 6$."
                },
                {
                  "step": "$0 = -2(y - 4)^2 + 38$",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2."
                },
                {
                  "step": "$-2(y - 4)^2 = -38$",
                  "reason": "Adding the same number to both sides: $38$ is taken from each side."
                },
                {
                  "step": "$(y - 4)^2 = 19$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "So $y = 4 + \\sqrt{19}$ or $y = 4 - \\sqrt{19}$, and the $y$-intercepts are $(0, 4 - \\sqrt{19})$ and $(0, 4 + \\sqrt{19})$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y - 4 = \\sqrt{19}$ or $-\\sqrt{19}$, and $\\sqrt{19}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(38, 4)$, is the graph.",
                  "figure": {
                    "file": "parabolas-14.svg",
                    "alt": "A parabola opening to the left with its vertex V at (38, 4), crossing the y-axis at A(0, 4 − √19) and B(0, 4 + √19) and the x-axis at C(6, 0)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = 4$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x = 3y^2 - 30y + 60$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 5 - \\sqrt{5})$",
                  "$(0, 5 + \\sqrt{5})$",
                  "$(60, 0)$"
                ],
                "turning": [
                  "$(-15, 5)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = 3y^2 - 30y + 60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 3(y - 5)^2 - 15$",
                  "reason": "Completing the square in letters, with $a = 3$, $b = -30$ and $c = 60$ in $x = ay^2 + by + c$: the bracket is $y - 5$, where $-\\dfrac{b}{2a} = 5$, and the number added is $c - \\dfrac{b^2}{4a} = -15$."
                },
                {
                  "step": "The vertex is $(-15, 5)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                },
                {
                  "step": "The parabola opens to the right.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = 3$ is positive."
                },
                {
                  "step": "At $y = 0$, $x = 60$, so the $x$-intercept is $(60, 0)$.",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 2, which gives $3 \\cdot 25 - 15 = 60$."
                },
                {
                  "step": "$0 = 3(y - 5)^2 - 15$",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 2."
                },
                {
                  "step": "$3(y - 5)^2 = 15$",
                  "reason": "Adding the same number to both sides: $15$ is added to each side."
                },
                {
                  "step": "$(y - 5)^2 = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "So $y = 5 + \\sqrt{5}$ or $y = 5 - \\sqrt{5}$, and the $y$-intercepts are $(0, 5 - \\sqrt{5})$ and $(0, 5 + \\sqrt{5})$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y - 5 = \\sqrt{5}$ or $-\\sqrt{5}$, and $\\sqrt{5}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(-15, 5)$, is the graph.",
                  "figure": {
                    "file": "parabolas-15.svg",
                    "alt": "A parabola opening to the right with its vertex V at (−15, 5), crossing the y-axis at A(0, 5 − √5) and B(0, 5 + √5) and the x-axis at C(60, 0)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = 5$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t151-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the vertex of the graph of $y = 4x^2 + 24x - 21$, and write that line right.",
            "given": [
              "$y = 4x^2 + 24x - 21$",
              "$y = 4(x^2 + 6x) - 21$",
              "$y = 4(x^2 + 6x + 9) - 36 - 21$",
              "$y = 4(x + 3)^2 - 57$",
              "$(h, k) = (3, -57)$",
              "Axis of symmetry: $x = 3$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the vertex of the graph of $y = 4x^2 + 24x - 21$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 5 reads $h$ from $x + 3$ as $3$.",
                "reason": "A sign lost: $x + 3$ is $x - h$ with $h = -3$."
              },
              {
                "step": "Line 5 written right is $(h, k) = (-3, -57)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $2x^2 - 4x + y = 23$, and write that line right.",
              "given": [
                "$2x^2 - 4x + y = 23$",
                "$y = -2x^2 + 4x + 23$",
                "$y = -2(x^2 - 2x) + 23$",
                "$y = -2(x^2 - 2x + 1) + 2 + 23$",
                "$y = -2(x - 1)^2 + 25$",
                "$(h, k) = (-1, 25)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: (h, k) = (1, 25)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $2x^2 - 4x + y = 23$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 6 reads $h$ from $x - 1$ as $-1$.",
                  "reason": "A sign lost: $x - 1$ is $x - h$ with $h = 1$."
                },
                {
                  "step": "Line 6 written right is $(h, k) = (1, 25)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $y = -7x^2 - 98x + 9$, and write that line right.",
              "given": [
                "$y = -7x^2 - 98x + 9$",
                "$y = -7(x^2 + 14x) + 9$",
                "$y = -7(x^2 + 14x + 49) + 343 + 9$",
                "$y = -7(x + 7)^2 + 352$",
                "$(h, k) = (7, 352)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (h, k) = (-7, 352)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $y = -7x^2 - 98x + 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 reads $h$ from $x + 7$ as $7$.",
                  "reason": "A sign lost: $x + 7$ is $x - h$ with $h = -7$."
                },
                {
                  "step": "Line 5 written right is $(h, k) = (-7, 352)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $7x^2 - 56x + y = 17$, and write that line right.",
              "given": [
                "$7x^2 - 56x + y = 17$",
                "$y = -7x^2 + 56x + 17$",
                "$y = -7(x^2 - 8x) + 17$",
                "$y = -7(x^2 - 8x + 16) + 112 + 17$",
                "$y = -7(x - 4)^2 + 129$",
                "$(h, k) = (-4, 129)$",
                "Axis of symmetry: $x = -4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: (h, k) = (4, 129)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $7x^2 - 56x + y = 17$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 6 reads $h$ from $x - 4$ as $-4$.",
                  "reason": "A sign lost: $x - 4$ is $x - h$ with $h = 4$."
                },
                {
                  "step": "Line 6 written right is $(h, k) = (4, 129)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the vertex of the graph of $y = -2x^2 - 28x - 30$, and write that line right.",
            "given": [
              "$y = -2x^2 - 28x - 30$",
              "$y = -2(x^2 - 14x) - 30$",
              "$y = -2(x^2 - 14x + 49) + 98 - 30$",
              "$y = -2(x - 7)^2 + 68$",
              "$(h, k) = (7, 68)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the vertex of the graph of $y = -2x^2 - 28x - 30$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 takes $-2$ out of $-2x^2 - 28x$ and leaves $-28x \\div (-2)$ as $-14x$.",
                "reason": "A sign lost: $-28x \\div (-2) = 14x$, since dividing by a negative number changes the sign."
              },
              {
                "step": "Line 2 written right is $y = -2(x^2 + 14x) - 30$.",
                "reason": "Taking out a common factor: $-2$ times $x^2 + 14x$ gives back $-2x^2 - 28x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $4x^2 + 56x + y = -9$, and write that line right.",
              "given": [
                "$4x^2 + 56x + y = -9$",
                "$y = -4x^2 - 56x - 9$",
                "$y = -4(x^2 - 14x) - 9$",
                "$y = -4(x^2 - 14x + 49) + 196 - 9$",
                "$y = -4(x - 7)^2 + 187$",
                "$(h, k) = (7, 187)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y=-4*(x^2+14*x)-9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $4x^2 + 56x + y = -9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 takes $-4$ out of $-4x^2 - 56x$ and leaves $-56x \\div (-4)$ as $-14x$.",
                  "reason": "A sign lost: $-56x \\div (-4) = 14x$, since dividing by a negative number changes the sign."
                },
                {
                  "step": "Line 3 written right is $y = -4(x^2 + 14x) - 9$.",
                  "reason": "Taking out a common factor: $-4$ times $x^2 + 14x$ gives back $-4x^2 - 56x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $y = -5x^2 - 30x + 19$, and write that line right.",
              "given": [
                "$y = -5x^2 - 30x + 19$",
                "$y = -5(x^2 - 6x) + 19$",
                "$y = -5(x^2 - 6x + 9) + 45 + 19$",
                "$y = -5(x - 3)^2 + 64$",
                "$(h, k) = (3, 64)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y=-5*(x^2+6*x)+19",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $y = -5x^2 - 30x + 19$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 takes $-5$ out of $-5x^2 - 30x$ and leaves $-30x \\div (-5)$ as $-6x$.",
                  "reason": "A sign lost: $-30x \\div (-5) = 6x$, since dividing by a negative number changes the sign."
                },
                {
                  "step": "Line 2 written right is $y = -5(x^2 + 6x) + 19$.",
                  "reason": "Taking out a common factor: $-5$ times $x^2 + 6x$ gives back $-5x^2 - 30x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $7x^2 + 28x + y = -2$, and write that line right.",
              "given": [
                "$7x^2 + 28x + y = -2$",
                "$y = -7x^2 - 28x - 2$",
                "$y = -7(x^2 - 4x) - 2$",
                "$y = -7(x^2 - 4x + 4) + 28 - 2$",
                "$y = -7(x - 2)^2 + 26$",
                "$(h, k) = (2, 26)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y=-7*(x^2+4*x)-2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $7x^2 + 28x + y = -2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 takes $-7$ out of $-7x^2 - 28x$ and leaves $-28x \\div (-7)$ as $-4x$.",
                  "reason": "A sign lost: $-28x \\div (-7) = 4x$, since dividing by a negative number changes the sign."
                },
                {
                  "step": "Line 3 written right is $y = -7(x^2 + 4x) - 2$.",
                  "reason": "Taking out a common factor: $-7$ times $x^2 + 4x$ gives back $-7x^2 - 28x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the vertex of the graph of $y = -7x^2 - 70x + 22$, and write that line right.",
            "given": [
              "$y = -7x^2 - 70x + 22$",
              "$y = -7(x^2 + 10x) + 22$",
              "$y = -7(x^2 + 10x + 25) - 175 + 22$",
              "$y = -7(x + 5)^2 - 153$",
              "$(h, k) = (-5, -153)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the vertex of the graph of $y = -7x^2 - 70x + 22$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 adds $25$ inside the bracket and puts $-175$ outside.",
                "reason": "A sign lost: $25$ inside the bracket adds $(-7) \\cdot 25 = -175$, so $175$, not $-175$, keeps the value unchanged."
              },
              {
                "step": "Line 3 written right is $y = -7(x^2 + 10x + 25) + 175 + 22$.",
                "reason": "Completing the square: the number put outside undoes what the number added inside the bracket adds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $3x^2 + 6x + y = 29$, and write that line right.",
              "given": [
                "$3x^2 + 6x + y = 29$",
                "$y = -3x^2 - 6x + 29$",
                "$y = -3(x^2 + 2x) + 29$",
                "$y = -3(x^2 + 2x + 1) - 3 + 29$",
                "$y = -3(x + 1)^2 + 26$",
                "$(h, k) = (-1, 26)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y=-3*(x^2+2*x+1)+3+29",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $3x^2 + 6x + y = 29$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $1$ inside the bracket and puts $-3$ outside.",
                  "reason": "A sign lost: $1$ inside the bracket adds $(-3) \\cdot 1 = -3$, so $3$, not $-3$, keeps the value unchanged."
                },
                {
                  "step": "Line 4 written right is $y = -3(x^2 + 2x + 1) + 3 + 29$.",
                  "reason": "Completing the square: the number put outside undoes what the number added inside the bracket adds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $y = -4x^2 - 40x - 30$, and write that line right.",
              "given": [
                "$y = -4x^2 - 40x - 30$",
                "$y = -4(x^2 + 10x) - 30$",
                "$y = -4(x^2 + 10x + 25) - 100 - 30$",
                "$y = -4(x + 5)^2 - 130$",
                "$(h, k) = (-5, -130)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y=-4*(x^2+10*x+25)+100-30",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $y = -4x^2 - 40x - 30$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $25$ inside the bracket and puts $-100$ outside.",
                  "reason": "A sign lost: $25$ inside the bracket adds $(-4) \\cdot 25 = -100$, so $100$, not $-100$, keeps the value unchanged."
                },
                {
                  "step": "Line 3 written right is $y = -4(x^2 + 10x + 25) + 100 - 30$.",
                  "reason": "Completing the square: the number put outside undoes what the number added inside the bracket adds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the vertex of the graph of $3x^2 - 42x + y = -22$, and write that line right.",
              "given": [
                "$3x^2 - 42x + y = -22$",
                "$y = -3x^2 + 42x - 22$",
                "$y = -3(x^2 - 14x) - 22$",
                "$y = -3(x^2 - 14x + 49) - 147 - 22$",
                "$y = -3(x - 7)^2 - 169$",
                "$(h, k) = (7, -169)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y=-3*(x^2-14*x+49)+147-22",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the vertex of the graph of $3x^2 - 42x + y = -22$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $49$ inside the bracket and puts $-147$ outside.",
                  "reason": "A sign lost: $49$ inside the bracket adds $(-3) \\cdot 49 = -147$, so $147$, not $-147$, keeps the value unchanged."
                },
                {
                  "step": "Line 4 written right is $y = -3(x^2 - 14x + 49) + 147 - 22$.",
                  "reason": "Completing the square: the number put outside undoes what the number added inside the bracket adds."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t151-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 2(x - 5)^2 - 26$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 2(x - 5)^2 - 26$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The vertex is $(5, -26)$.",
                "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
              },
              {
                "step": "The parabola opens upward.",
                "reason": "Opens up or down by the sign of $a$: $a = 2$ is positive."
              },
              {
                "step": "At $x = 0$, $y = 24$, so the $y$-intercept is $(0, 24)$.",
                "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1, which gives $2 \\cdot 25 - 26 = 24$."
              },
              {
                "step": "$0 = 2(x - 5)^2 - 26$",
                "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1."
              },
              {
                "step": "$2(x - 5)^2 = 26$",
                "reason": "Adding the same number to both sides: $26$ is added to each side."
              },
              {
                "step": "$(x - 5)^2 = 13$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "So $x = 5 + \\sqrt{13}$ or $x = 5 - \\sqrt{13}$, and the $x$-intercepts are $(5 - \\sqrt{13}, 0)$ and $(5 + \\sqrt{13}, 0)$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x - 5 = \\sqrt{13}$ or $-\\sqrt{13}$, and $\\sqrt{13}$ is already in simplest radical form."
              },
              {
                "step": "The parabola through these points, with its vertex at $(5, -26)$, is the graph.",
                "figure": {
                  "file": "parabolas-23.svg",
                  "alt": "A parabola opening upward with its vertex V at (5, −26), crossing the x-axis at A(5 − √13, 0) and B(5 + √13, 0) and the y-axis at C(0, 24)."
                },
                "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = 5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -\\dfrac{1}{2}(x + 4)^2 + 19$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-4 - \\sqrt{38}, 0)$",
                  "$(-4 + \\sqrt{38}, 0)$",
                  "$(0, 11)$"
                ],
                "turning": [
                  "$(-4, 19)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -\\dfrac{1}{2}(x + 4)^2 + 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex is $(-4, 19)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                },
                {
                  "step": "The parabola opens downward.",
                  "reason": "Opens up or down by the sign of $a$: $a = -\\dfrac{1}{2}$ is negative."
                },
                {
                  "step": "At $x = 0$, $y = 11$, so the $y$-intercept is $(0, 11)$.",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1, which gives $-\\dfrac{1}{2} \\cdot 16 + 19 = 11$."
                },
                {
                  "step": "$0 = -\\dfrac{1}{2}(x + 4)^2 + 19$",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1."
                },
                {
                  "step": "$-\\dfrac{1}{2}(x + 4)^2 = -19$",
                  "reason": "Adding the same number to both sides: $19$ is taken from each side."
                },
                {
                  "step": "$(x + 4)^2 = 38$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{1}{2}$."
                },
                {
                  "step": "So $x = -4 + \\sqrt{38}$ or $x = -4 - \\sqrt{38}$, and the $x$-intercepts are $(-4 - \\sqrt{38}, 0)$ and $(-4 + \\sqrt{38}, 0)$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x + 4 = \\sqrt{38}$ or $-\\sqrt{38}$, and $\\sqrt{38}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(-4, 19)$, is the graph.",
                  "figure": {
                    "file": "parabolas-24.svg",
                    "alt": "A parabola opening downward with its vertex V at (−4, 19), crossing the x-axis at A(−4 − √38, 0) and B(−4 + √38, 0) and the y-axis at C(0, 11)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = -4$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{3}{2}(x - 6)^2 - 33$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(6 - \\sqrt{22}, 0)$",
                  "$(6 + \\sqrt{22}, 0)$",
                  "$(0, 21)$"
                ],
                "turning": [
                  "$(6, -33)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{3}{2}(x - 6)^2 - 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex is $(6, -33)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                },
                {
                  "step": "The parabola opens upward.",
                  "reason": "Opens up or down by the sign of $a$: $a = \\dfrac{3}{2}$ is positive."
                },
                {
                  "step": "At $x = 0$, $y = 21$, so the $y$-intercept is $(0, 21)$.",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1, which gives $\\dfrac{3}{2} \\cdot 36 - 33 = 21$."
                },
                {
                  "step": "$0 = \\dfrac{3}{2}(x - 6)^2 - 33$",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1."
                },
                {
                  "step": "$\\dfrac{3}{2}(x - 6)^2 = 33$",
                  "reason": "Adding the same number to both sides: $33$ is added to each side."
                },
                {
                  "step": "$(x - 6)^2 = 22$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{3}{2}$."
                },
                {
                  "step": "So $x = 6 + \\sqrt{22}$ or $x = 6 - \\sqrt{22}$, and the $x$-intercepts are $(6 - \\sqrt{22}, 0)$ and $(6 + \\sqrt{22}, 0)$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x - 6 = \\sqrt{22}$ or $-\\sqrt{22}$, and $\\sqrt{22}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(6, -33)$, is the graph.",
                  "figure": {
                    "file": "parabolas-25.svg",
                    "alt": "A parabola opening upward with its vertex V at (6, −33), crossing the x-axis at A(6 − √22, 0) and B(6 + √22, 0) and the y-axis at C(0, 21)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = 6$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 2(x + 6)^2 - 6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-6 - \\sqrt{3}, 0)$",
                  "$(-6 + \\sqrt{3}, 0)$",
                  "$(0, 66)$"
                ],
                "turning": [
                  "$(-6, -6)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2(x + 6)^2 - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex is $(-6, -6)$.",
                  "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
                },
                {
                  "step": "The parabola opens upward.",
                  "reason": "Opens up or down by the sign of $a$: $a = 2$ is positive."
                },
                {
                  "step": "At $x = 0$, $y = 66$, so the $y$-intercept is $(0, 66)$.",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1, which gives $2 \\cdot 36 - 6 = 66$."
                },
                {
                  "step": "$0 = 2(x + 6)^2 - 6$",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1."
                },
                {
                  "step": "$2(x + 6)^2 = 6$",
                  "reason": "Adding the same number to both sides: $6$ is added to each side."
                },
                {
                  "step": "$(x + 6)^2 = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So $x = -6 + \\sqrt{3}$ or $x = -6 - \\sqrt{3}$, and the $x$-intercepts are $(-6 - \\sqrt{3}, 0)$ and $(-6 + \\sqrt{3}, 0)$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $x + 6 = \\sqrt{3}$ or $-\\sqrt{3}$, and $\\sqrt{3}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(-6, -6)$, is the graph.",
                  "figure": {
                    "file": "parabolas-26.svg",
                    "alt": "A parabola opening upward with its vertex V at (−6, −6), crossing the x-axis at A(−6 − √3, 0) and B(−6 + √3, 0) and the y-axis at C(0, 66)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $x = -6$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $x = -2(y - 1)^2 + 30$.",
            "lines": [
              {
                "step": "Sketch the graph of $x = -2(y - 1)^2 + 30$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The vertex is $(30, 1)$.",
                "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
              },
              {
                "step": "The parabola opens to the left.",
                "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -2$ is negative."
              },
              {
                "step": "At $y = 0$, $x = 28$, so the $x$-intercept is $(28, 0)$.",
                "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1, which gives $-2 \\cdot 1 + 30 = 28$."
              },
              {
                "step": "$0 = -2(y - 1)^2 + 30$",
                "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1."
              },
              {
                "step": "$-2(y - 1)^2 = -30$",
                "reason": "Adding the same number to both sides: $30$ is taken from each side."
              },
              {
                "step": "$(y - 1)^2 = 15$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
              },
              {
                "step": "So $y = 1 + \\sqrt{15}$ or $y = 1 - \\sqrt{15}$, and the $y$-intercepts are $(0, 1 - \\sqrt{15})$ and $(0, 1 + \\sqrt{15})$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y - 1 = \\sqrt{15}$ or $-\\sqrt{15}$, and $\\sqrt{15}$ is already in simplest radical form."
              },
              {
                "step": "The parabola through these points, with its vertex at $(30, 1)$, is the graph.",
                "figure": {
                  "file": "parabolas-30.svg",
                  "alt": "A parabola opening to the left with its vertex V at (30, 1), crossing the y-axis at A(0, 1 − √15) and B(0, 1 + √15) and the x-axis at C(28, 0)."
                },
                "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $x = -\\dfrac{1}{3}(y + 12)^2 + 5$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -12 - \\sqrt{15})$",
                  "$(0, -12 + \\sqrt{15})$",
                  "$(-43, 0)$"
                ],
                "turning": [
                  "$(5, -12)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = -\\dfrac{1}{3}(y + 12)^2 + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex is $(5, -12)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                },
                {
                  "step": "The parabola opens to the left.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -\\dfrac{1}{3}$ is negative."
                },
                {
                  "step": "At $y = 0$, $x = -43$, so the $x$-intercept is $(-43, 0)$.",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1, which gives $-\\dfrac{1}{3} \\cdot 144 + 5 = -43$."
                },
                {
                  "step": "$0 = -\\dfrac{1}{3}(y + 12)^2 + 5$",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1."
                },
                {
                  "step": "$-\\dfrac{1}{3}(y + 12)^2 = -5$",
                  "reason": "Adding the same number to both sides: $5$ is taken from each side."
                },
                {
                  "step": "$(y + 12)^2 = 15$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{1}{3}$."
                },
                {
                  "step": "So $y = -12 + \\sqrt{15}$ or $y = -12 - \\sqrt{15}$, and the $y$-intercepts are $(0, -12 - \\sqrt{15})$ and $(0, -12 + \\sqrt{15})$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y + 12 = \\sqrt{15}$ or $-\\sqrt{15}$, and $\\sqrt{15}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(5, -12)$, is the graph.",
                  "figure": {
                    "file": "parabolas-31.svg",
                    "alt": "A parabola opening to the left with its vertex V at (5, −12), crossing the y-axis at A(0, −12 − √15) and B(0, −12 + √15) and the x-axis at C(−43, 0)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = -12$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x = \\dfrac{1}{2}(y + 12)^2 - 17$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -12 - \\sqrt{34})$",
                  "$(0, -12 + \\sqrt{34})$",
                  "$(55, 0)$"
                ],
                "turning": [
                  "$(-17, -12)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = \\dfrac{1}{2}(y + 12)^2 - 17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex is $(-17, -12)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                },
                {
                  "step": "The parabola opens to the right.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = \\dfrac{1}{2}$ is positive."
                },
                {
                  "step": "At $y = 0$, $x = 55$, so the $x$-intercept is $(55, 0)$.",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1, which gives $\\dfrac{1}{2} \\cdot 144 - 17 = 55$."
                },
                {
                  "step": "$0 = \\dfrac{1}{2}(y + 12)^2 - 17$",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1."
                },
                {
                  "step": "$\\dfrac{1}{2}(y + 12)^2 = 17$",
                  "reason": "Adding the same number to both sides: $17$ is added to each side."
                },
                {
                  "step": "$(y + 12)^2 = 34$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{1}{2}$."
                },
                {
                  "step": "So $y = -12 + \\sqrt{34}$ or $y = -12 - \\sqrt{34}$, and the $y$-intercepts are $(0, -12 - \\sqrt{34})$ and $(0, -12 + \\sqrt{34})$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y + 12 = \\sqrt{34}$ or $-\\sqrt{34}$, and $\\sqrt{34}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(-17, -12)$, is the graph.",
                  "figure": {
                    "file": "parabolas-32.svg",
                    "alt": "A parabola opening to the right with its vertex V at (−17, −12), crossing the y-axis at A(0, −12 − √34) and B(0, −12 + √34) and the x-axis at C(55, 0)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = -12$."
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x = -\\dfrac{1}{3}(y - 2)^2 + 7$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 2 - \\sqrt{21})$",
                  "$(0, 2 + \\sqrt{21})$",
                  "$(\\dfrac{17}{3}, 0)$"
                ],
                "turning": [
                  "$(7, 2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = -\\dfrac{1}{3}(y - 2)^2 + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex is $(7, 2)$.",
                  "reason": "Vertex: the vertex of the graph of $x = a(y - k)^2 + h$ is $(h, k)$; the number added alone gives the $x$-coordinate."
                },
                {
                  "step": "The parabola opens to the left.",
                  "reason": "Opens up or down by the sign of $a$ (right or left for the second form): $a = -\\dfrac{1}{3}$ is negative."
                },
                {
                  "step": "At $y = 0$, $x = \\dfrac{17}{3}$, so the $x$-intercept is $(\\dfrac{17}{3}, 0)$.",
                  "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$ in line 1, which gives $-\\dfrac{1}{3} \\cdot 4 + 7 = \\dfrac{17}{3}$."
                },
                {
                  "step": "$0 = -\\dfrac{1}{3}(y - 2)^2 + 7$",
                  "reason": "Definition of the $y$-intercept: $0$ is put in place of $x$ in line 1."
                },
                {
                  "step": "$-\\dfrac{1}{3}(y - 2)^2 = -7$",
                  "reason": "Adding the same number to both sides: $7$ is taken from each side."
                },
                {
                  "step": "$(y - 2)^2 = 21$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-\\dfrac{1}{3}$."
                },
                {
                  "step": "So $y = 2 + \\sqrt{21}$ or $y = 2 - \\sqrt{21}$, and the $y$-intercepts are $(0, 2 - \\sqrt{21})$ and $(0, 2 + \\sqrt{21})$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: $y - 2 = \\sqrt{21}$ or $-\\sqrt{21}$, and $\\sqrt{21}$ is already in simplest radical form."
                },
                {
                  "step": "The parabola through these points, with its vertex at $(7, 2)$, is the graph.",
                  "figure": {
                    "file": "parabolas-33.svg",
                    "alt": "A parabola opening to the left with its vertex V at (7, 2), crossing the y-axis at A(0, 2 − √21) and B(0, 2 + √21) and the x-axis at C(17/3, 0)."
                  },
                  "reason": "Parabola: the graph of the standard form is a parabola, mirrored in its axis of symmetry $y = 2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(16, -12)$; read the marked point P from the grid.",
            "figure": {
              "file": "parabolas-37.svg",
              "alt": "A parabola opening upward with its vertex V at (16, −12) and a marked point P on it."
            },
            "lines": [
              {
                "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(16, -12)$; read the marked point P from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The point P is $(20, 20)$.",
                "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
              },
              {
                "step": "$y = a(x - 16)^2 - 12$",
                "reason": "Standard form $y = a(x - h)^2 + k$: the parabola opens upward, so its axis is vertical, and its vertex is $(16, -12)$."
              },
              {
                "step": "$20 = 16a - 12$",
                "reason": "Substituting a value: $x = 20$ and $y = 20$, and $(20 - 16)^2 = 16$."
              },
              {
                "step": "$32 = 16a$",
                "reason": "Adding the same number to both sides: $12$ is added to each side."
              },
              {
                "step": "$a = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
              },
              {
                "step": "$y = 2(x - 16)^2 - 12$",
                "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(-14, -4)$; read the marked point P from the grid.",
              "figure": {
                "file": "parabolas-38.svg",
                "alt": "A parabola opening upward with its vertex V at (−14, −4) and a marked point P on it."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/2*(x+14)^2-4",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(-14, -4)$; read the marked point P from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point P is $(-10, 4)$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "$y = a(x + 14)^2 - 4$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the parabola opens upward, so its axis is vertical, and its vertex is $(-14, -4)$."
                },
                {
                  "step": "$4 = 16a - 4$",
                  "reason": "Substituting a value: $x = -10$ and $y = 4$, and $(-10 + 14)^2 = 16$."
                },
                {
                  "step": "$8 = 16a$",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                },
                {
                  "step": "$a = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
                },
                {
                  "step": "$y = \\dfrac{1}{2}(x + 14)^2 - 4$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(-13, -16)$; read the marked point P from the grid.",
              "figure": {
                "file": "parabolas-39.svg",
                "alt": "A parabola opening downward with its vertex V at (−13, −16) and a marked point P on it."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/2*(x+13)^2-16",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(-13, -16)$; read the marked point P from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point P is $(-15, -18)$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "$y = a(x + 13)^2 - 16$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the parabola opens downward, so its axis is vertical, and its vertex is $(-13, -16)$."
                },
                {
                  "step": "$-18 = 4a - 16$",
                  "reason": "Substituting a value: $x = -15$ and $y = -18$, and $(-15 + 13)^2 = 4$."
                },
                {
                  "step": "$-2 = 4a$",
                  "reason": "Adding the same number to both sides: $16$ is added to each side."
                },
                {
                  "step": "$a = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}(x + 13)^2 - 16$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(-24, -8)$; read the marked point P from the grid.",
              "figure": {
                "file": "parabolas-40.svg",
                "alt": "A parabola opening downward with its vertex V at (−24, −8) and a marked point P on it."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/2*(x+24)^2-8",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its vertex V is $(-24, -8)$; read the marked point P from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point P is $(-20, -16)$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "$y = a(x + 24)^2 - 8$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the parabola opens downward, so its axis is vertical, and its vertex is $(-24, -8)$."
                },
                {
                  "step": "$-16 = 16a - 8$",
                  "reason": "Substituting a value: $x = -20$ and $y = -16$, and $(-20 + 24)^2 = 16$."
                },
                {
                  "step": "$-8 = 16a$",
                  "reason": "Adding the same number to both sides: $8$ is added to each side."
                },
                {
                  "step": "$a = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and the sides are read the other way round."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}(x + 24)^2 - 8$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(4, 5)$; read the marked point P from the grid.",
            "figure": {
              "file": "parabolas-45.svg",
              "alt": "A parabola opening to the left with its vertex V at (4, 5) and a marked point P on it."
            },
            "lines": [
              {
                "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(4, 5)$; read the marked point P from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The point P is $(2, 3)$.",
                "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
              },
              {
                "step": "$x = a(y - 5)^2 + 4$",
                "reason": "Standard form $x = a(y - k)^2 + h$: the parabola opens to the left, so its axis is horizontal, and its vertex is $(4, 5)$."
              },
              {
                "step": "$2 = 4a + 4$",
                "reason": "Substituting a value: $x = 2$ and $y = 3$, and $(3 - 5)^2 = 4$."
              },
              {
                "step": "$-2 = 4a$",
                "reason": "Adding the same number to both sides: $4$ is taken from each side."
              },
              {
                "step": "$a = -\\dfrac{1}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
              },
              {
                "step": "$x = -\\dfrac{1}{2}(y - 5)^2 + 4$",
                "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(-18, -6)$; read the marked point P from the grid.",
              "figure": {
                "file": "parabolas-46.svg",
                "alt": "A parabola opening to the left with its vertex V at (−18, −6) and a marked point P on it."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = -3*(y+6)^2-18",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(-18, -6)$; read the marked point P from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point P is $(-30, -8)$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "$x = a(y + 6)^2 - 18$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the parabola opens to the left, so its axis is horizontal, and its vertex is $(-18, -6)$."
                },
                {
                  "step": "$-30 = 4a - 18$",
                  "reason": "Substituting a value: $x = -30$ and $y = -8$, and $(-8 + 6)^2 = 4$."
                },
                {
                  "step": "$-12 = 4a$",
                  "reason": "Adding the same number to both sides: $18$ is added to each side."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
                },
                {
                  "step": "$x = -3(y + 6)^2 - 18$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(-17, 18)$; read the marked point P from the grid.",
              "figure": {
                "file": "parabolas-47.svg",
                "alt": "A parabola opening to the right with its vertex V at (−17, 18) and a marked point P on it."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 3*(y-18)^2-17",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(-17, 18)$; read the marked point P from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point P is $(-5, 16)$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "$x = a(y - 18)^2 - 17$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the parabola opens to the right, so its axis is horizontal, and its vertex is $(-17, 18)$."
                },
                {
                  "step": "$-5 = 4a - 17$",
                  "reason": "Substituting a value: $x = -5$ and $y = 16$, and $(16 - 18)^2 = 4$."
                },
                {
                  "step": "$12 = 4a$",
                  "reason": "Adding the same number to both sides: $17$ is added to each side."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and the sides are read the other way round."
                },
                {
                  "step": "$x = 3(y - 18)^2 - 17$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(22, 24)$; read the marked point P from the grid.",
              "figure": {
                "file": "parabolas-48.svg",
                "alt": "A parabola opening to the right with its vertex V at (22, 24) and a marked point P on it."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 1/2*(y-24)^2+22",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its vertex V is $(22, 24)$; read the marked point P from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The point P is $(40, 30)$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "$x = a(y - 24)^2 + 22$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the parabola opens to the right, so its axis is horizontal, and its vertex is $(22, 24)$."
                },
                {
                  "step": "$40 = 36a + 22$",
                  "reason": "Substituting a value: $x = 40$ and $y = 30$, and $(30 - 24)^2 = 36$."
                },
                {
                  "step": "$18 = 36a$",
                  "reason": "Adding the same number to both sides: $22$ is taken from each side."
                },
                {
                  "step": "$a = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $36$, and the sides are read the other way round."
                },
                {
                  "step": "$x = \\dfrac{1}{2}(y - 24)^2 + 22$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form, which is the equation of the drawn curve."
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
      "id": "t151-p1",
      "method": "direct proof",
      "statement": "For every number $a > 0$ and all numbers $h$ and $k$, the lowest point of the graph of $y = a(x - h)^2 + k$ is $(h, k)$, and no other point of the graph is as low.",
      "idea": "A square is never negative, so the term $a(x - h)^2$ only ever adds to $k$; it adds nothing exactly when $x = h$.",
      "lines": [
        {
          "line": "For every $x$, $(x - h)^2 \\ge 0$.",
          "reason": "Trivial Inequality."
        },
        {
          "line": "So $a(x - h)^2 \\ge 0$ for every $x$.",
          "reason": "Multiplying by a positive number: both sides of line 1 are multiplied by $a > 0$, and $a \\cdot 0 = 0$."
        },
        {
          "line": "So $a(x - h)^2 + k \\ge k$ for every $x$: on the graph, $y \\ge k$.",
          "reason": "Adding the same number: $k$ is added to both sides of line 2."
        },
        {
          "line": "At $x = h$, $y = a(h - h)^2 + k = k$.",
          "reason": "Substituting a value: $x$ is replaced by $h$, and $(h - h)^2 = 0$."
        },
        {
          "line": "So $(h, k)$ is on the graph, and by line 3 no point of the graph is lower.",
          "reason": "Lines 3 and 4."
        },
        {
          "line": "For $x \\ne h$, $(x - h)^2 > 0$.",
          "reason": "Trivial Inequality: $x^2 \\ge 0$ with equality only at $x = 0$, here with $x - h$, which is not $0$."
        },
        {
          "line": "So for $x \\ne h$, $a(x - h)^2 > 0$.",
          "reason": "Multiplying by a positive number: both sides of line 6 are multiplied by $a > 0$, and the strict sign is kept."
        },
        {
          "line": "So for $x \\ne h$, $a(x - h)^2 + k > k$.",
          "reason": "Adding the same number: $k$ is added to both sides of line 7."
        },
        {
          "line": "So $(h, k)$ is the lowest point of the graph, and the only point at that height.",
          "reason": "Lines 5 and 8."
        }
      ]
    },
    {
      "id": "t151-p2",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$ and $c$ with $a \\ne 0$, the vertex of the graph of $y = ax^2 + bx + c$ is $\\left(-\\dfrac{b}{2a}, c - \\dfrac{b^2}{4a}\\right)$.",
      "idea": "Completing the square in letters turns the general form into the standard form, and the vertex is read off the standard form.",
      "lines": [
        {
          "line": "For every $x$, $ax^2 + bx + c = a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$.",
          "reason": "Completing the square in letters."
        },
        {
          "line": "So the graph of $y = ax^2 + bx + c$ is the graph of $y = a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$.",
          "reason": "Graph of an equation: by line 1 the two equations have the same solutions $(x, y)$."
        },
        {
          "line": "The bracket $x + \\dfrac{b}{2a}$ equals $x - \\left(-\\dfrac{b}{2a}\\right)$.",
          "reason": "Subtraction as addition: taking away a number is adding its opposite."
        },
        {
          "line": "So the equation of line 2 is in standard form with $h = -\\dfrac{b}{2a}$ and $k = c - \\dfrac{b^2}{4a}$.",
          "reason": "Standard form $y = a(x - h)^2 + k$, with line 3 put into line 2."
        },
        {
          "line": "The vertex is $\\left(-\\dfrac{b}{2a}, c - \\dfrac{b^2}{4a}\\right)$.",
          "reason": "Vertex: the vertex of the graph of $y = a(x - h)^2 + k$ is $(h, k)$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t151-s1",
      "method": "direct proof",
      "statement": "Prove that if the graph of $y = ax^2 + bx + c$, with $a \\ne 0$, meets the $x$-axis at two points, then the $x$-coordinate of its vertex is the mean of the $x$-coordinates of those two points. Facts it may use: definition of the $x$-intercept, quadratic formula, positive discriminant, adding fractions with the same denominator (from arithmetic), arithmetic mean, completing the square in letters, standard form, vertex.",
      "check": {
        "proof": [
          {
            "line": "The two points have $y = 0$, so their $x$-coordinates are the two solutions of $ax^2 + bx + c = 0$.",
            "reason": "Definition of the $x$-intercept: $0$ is put in place of $y$."
          },
          {
            "line": "There are two solutions, so $b^2 - 4ac > 0$.",
            "reason": "Positive discriminant: a quadratic equation has two real solutions when $b^2 - 4ac > 0$."
          },
          {
            "line": "The solutions are $\\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a}$ and $\\dfrac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
            "reason": "Quadratic formula, with line 2: the root of $b^2 - 4ac$ is a real number."
          },
          {
            "line": "Their sum is $\\dfrac{-2b}{2a} = -\\dfrac{b}{a}$.",
            "reason": "Adding fractions with the same denominator, from arithmetic: the tops are added over the common bottom $2a$, and the two roots cancel."
          },
          {
            "line": "Their mean is $-\\dfrac{b}{a} \\div 2 = -\\dfrac{b}{2a}$.",
            "reason": "Arithmetic mean: the sum of two numbers divided by $2$."
          },
          {
            "line": "The equation is $y = a\\left(x - \\left(-\\dfrac{b}{2a}\\right)\\right)^2 + c - \\dfrac{b^2}{4a}$.",
            "reason": "Completing the square in letters, with the bracket written as $x$ minus a number."
          },
          {
            "line": "The $x$-coordinate of the vertex is $-\\dfrac{b}{2a}$.",
            "reason": "Standard form and vertex: the vertex of $y = a(x - h)^2 + k$ is $(h, k)$."
          },
          {
            "line": "So the $x$-coordinate of the vertex is the mean of the two $x$-coordinates.",
            "reason": "Lines 5 and 7: both equal $-\\dfrac{b}{2a}$."
          }
        ]
      }
    },
    {
      "id": "t151-s2",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $h$ and $k$ with $a \\ne 0$, the mirror image in the line $x = h$ of every point of the graph of $y = a(x - h)^2 + k$ is also a point of the graph. Facts it may use: graph of an equation, midpoint formula, collecting like terms, the sign of a power of a negative number, substituting a value, axis of symmetry.",
      "check": {
        "proof": [
          {
            "line": "Let $(p, q)$ be a point of the graph. Then $q = a(p - h)^2 + k$.",
            "reason": "Graph of an equation: the coordinates of a point of the graph satisfy the equation."
          },
          {
            "line": "The mirror image of $(p, q)$ in the line $x = h$ is $(2h - p, q)$.",
            "reason": "Midpoint formula: $(p, q)$ and $(2h - p, q)$ have the same $y$-coordinate, and their midpoint $\\left(\\dfrac{p + 2h - p}{2}, q\\right) = (h, q)$ lies on the line $x = h$."
          },
          {
            "line": "Put $x = 2h - p$: then $x - h = h - p$.",
            "reason": "Collecting like terms: $2h - p - h = h - p$."
          },
          {
            "line": "$(h - p)^2 = (p - h)^2$.",
            "reason": "The sign of a power of a negative number: $h - p = -(p - h)$, and an even power of a number and of its opposite are equal."
          },
          {
            "line": "So at $x = 2h - p$, $a(x - h)^2 + k = a(p - h)^2 + k = q$.",
            "reason": "Substituting a value, with lines 3, 4 and 1."
          },
          {
            "line": "So $(2h - p, q)$ is a point of the graph, for every point $(p, q)$ of it.",
            "reason": "Graph of an equation: its coordinates satisfy the equation, by line 5."
          }
        ]
      }
    },
    {
      "id": "t151-s3",
      "method": "direct proof",
      "statement": "Prove that for every number $a < 0$ and all numbers $h$ and $k$, the highest point of the graph of $y = a(x - h)^2 + k$ is $(h, k)$. Facts it may use: Trivial Inequality, multiplying by a negative number reverses the sign, adding the same number, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "For every $x$, $(x - h)^2 \\ge 0$.",
            "reason": "Trivial Inequality."
          },
          {
            "line": "So $a(x - h)^2 \\le 0$ for every $x$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 1 are multiplied by $a < 0$."
          },
          {
            "line": "So $a(x - h)^2 + k \\le k$ for every $x$: on the graph, $y \\le k$.",
            "reason": "Adding the same number: $k$ is added to both sides of line 2."
          },
          {
            "line": "At $x = h$, $y = a(h - h)^2 + k = k$.",
            "reason": "Substituting a value: $x$ is replaced by $h$, and $(h - h)^2 = 0$."
          },
          {
            "line": "So $(h, k)$ is on the graph and no point of the graph is higher: $(h, k)$ is the highest point.",
            "reason": "Lines 3 and 4."
          }
        ]
      }
    }
  ]
}
