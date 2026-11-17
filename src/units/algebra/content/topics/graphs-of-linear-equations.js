export default {
  "number": 125,
  "title": "Graphs of linear equations",
  "section": 5,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "215-224, 232-238"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the $x$-intercept of the graph of $4x - 7y = 12$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(3, 0)",
    "solution": [
      "Find the $x$-intercept of the graph of $4x - 7y = 12$.",
      "$4x - 7(0) = 12$",
      "$4x = 12$",
      "$x = 3$",
      "The $x$-intercept is $(3, 0)$."
    ]
  },
  "ideas": [
    {
      "name": "Graph of an equation",
      "concrete": "The pairs $(0, 2)$, $(5, 0)$ and $(10, -2)$ are solutions of $2x + 5y = 10$, so these three points lie on its graph; the pair $(1, 1)$ is not a solution, so $(1, 1)$ is not on it.",
      "general": "The **graph** of an equation in $x$ and $y$ is the set of every point $(x, y)$ whose coordinates are a solution of the equation."
    },
    {
      "name": "The graph of $ax + by = c$ is a line",
      "concrete": "The three points $(0, 2)$, $(5, 0)$ and $(10, -2)$ of the graph of $2x + 5y = 10$ lie on one straight line, and every other solution lies on that line too.",
      "general": "For numbers $a$, $b$ and $c$, with $a$ and $b$ not both $0$, the graph of $ax + by = c$ is a straight line. Two of its points fix it; a third point is a check on the first two.",
      "figure": {
        "file": "graphs-of-linear-equations-1.svg",
        "alt": "A straight line through (0, 2), (5, 0) and (10, −2)."
      }
    },
    {
      "name": "$x$-intercept",
      "concrete": "The graph of $2x + 5y = 10$ meets the $x$-axis where $y = 0$: there $2x = 10$, so $x = 5$, and the $x$-intercept is the point $(5, 0)$.",
      "general": "The **$x$-intercept** of a graph is a point where the graph meets the $x$-axis. Its $y$-coordinate is $0$, so it is found by putting $0$ in place of $y$."
    },
    {
      "name": "$y$-intercept",
      "concrete": "The graph of $2x + 5y = 10$ meets the $y$-axis where $x = 0$: there $5y = 10$, so $y = 2$, and the $y$-intercept is the point $(0, 2)$.",
      "general": "The **$y$-intercept** of a graph is a point where the graph meets the $y$-axis. Its $x$-coordinate is $0$, so it is found by putting $0$ in place of $x$."
    },
    {
      "name": "Horizontal line $y = c$",
      "concrete": "The solutions of $y = 4$ are the points $(x, 4)$ for every number $x$, such as $(-3, 4)$, $(0, 4)$ and $(5, 4)$; they make a horizontal line $4$ above the $x$-axis.",
      "general": "For a number $c$, the graph of $y = c$ is the horizontal line through $(0, c)$. Where $c$ is not $0$ it has no $x$-intercept; the graph of $y = 0$ is the $x$-axis."
    },
    {
      "name": "Vertical line $x = c$",
      "concrete": "The solutions of $x = -1$ are the points $(-1, y)$ for every number $y$; they make a vertical line $1$ to the left of the $y$-axis.",
      "general": "For a number $c$, the graph of $x = c$ is the vertical line through $(c, 0)$. Where $c$ is not $0$ it has no $y$-intercept; the graph of $x = 0$ is the $y$-axis."
    }
  ],
  "kinds": [
    {
      "id": "t125-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the $x$-intercept of the graph of $3x + 4y = -15$.",
            "lines": [
              {
                "step": "Find the $x$-intercept of the graph of $3x + 4y = -15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x + 4(0) = -15$",
                "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
              },
              {
                "step": "$3x = -15$",
                "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
              },
              {
                "step": "$x = -5$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
              },
              {
                "step": "The $x$-intercept is $(-5, 0)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $x$-intercept of the graph of $5x - 4y = 20$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the graph of $5x - 4y = 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 4(0) = 20$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$5x = 20$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(4, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the graph of $2x + 7y = 9$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(9/2, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the graph of $2x + 7y = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 7(0) = 9$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$2x = 9$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$x = \\dfrac{9}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(\\dfrac{9}{2}, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the $x$-intercept of the graph of $7x - 3y = -14$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-2, 0)",
              "lines": [
                {
                  "step": "Find the $x$-intercept of the graph of $7x - 3y = -14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x - 3(0) = -14$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$7x = -14$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(-2, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the $y$-intercept of the graph of $4x + 5y = -20$.",
            "lines": [
              {
                "step": "Find the $y$-intercept of the graph of $4x + 5y = -20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4(0) + 5y = -20$",
                "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
              },
              {
                "step": "$5y = -20$",
                "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
              },
              {
                "step": "$y = -4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone."
              },
              {
                "step": "The $y$-intercept is $(0, -4)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $y$-intercept of the graph of $3x - 8y = -3$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, 3/8)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the graph of $3x - 8y = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3(0) - 8y = -3$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$-8y = -3$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$y = \\dfrac{3}{8}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-8$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, \\dfrac{3}{8})$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the graph of $5x - 7y = 21$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -3)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the graph of $5x - 7y = 21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(0) - 7y = 21$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$-7y = 21$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-7$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, -3)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the $y$-intercept of the graph of $7x + 4y = -9$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -9/4)",
              "lines": [
                {
                  "step": "Find the $y$-intercept of the graph of $7x + 4y = -9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7(0) + 4y = -9$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$4y = -9$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$y = -\\dfrac{9}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, -\\dfrac{9}{4})$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t125-k2",
      "forms": [
        {
          "example": {
            "problem": "Find how many points the graph of $4y = -12$ shares with the $x$-axis.",
            "lines": [
              {
                "step": "Find how many points the graph of $4y = -12$ shares with the $x$-axis.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
              },
              {
                "step": "The graph is the horizontal line $y = -3$, and $-3$ is not $0$, so the graph shares no point with the $x$-axis: None.",
                "reason": "Horizontal line $y = c$: every point of the graph has $y$-coordinate $-3$, and the $x$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many points the graph of $3y = 0$ shares with the $x$-axis.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "Infinitely many",
              "lines": [
                {
                  "step": "Find how many points the graph of $3y = 0$ shares with the $x$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 0$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
                },
                {
                  "step": "The graph is the horizontal line $y = 0$, which is the $x$-axis itself, so every point of the $x$-axis is on it: Infinitely many.",
                  "reason": "Horizontal line $y = c$: every point of the graph has $y$-coordinate $0$, and the $x$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
                }
              ]
            },
            {
              "prompt": "Find how many points the graph of $6y = 18$ shares with the $y$-axis.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Find how many points the graph of $6y = 18$ shares with the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $y$ alone."
                },
                {
                  "step": "The graph is the horizontal line $y = 3$, and its one point with $x = 0$ is $(0, 3)$, on the $y$-axis: One.",
                  "reason": "Horizontal line $y = c$: every point of the graph has $y$-coordinate $3$, and the $x$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
                }
              ]
            },
            {
              "prompt": "Find how many points the graph of $5y = 35$ shares with the $x$-axis.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Find how many points the graph of $5y = 35$ shares with the $x$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 7$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone."
                },
                {
                  "step": "The graph is the horizontal line $y = 7$, and $7$ is not $0$, so the graph shares no point with the $x$-axis: None.",
                  "reason": "Horizontal line $y = c$: every point of the graph has $y$-coordinate $7$, and the $x$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many points the graph of $5x = 20$ shares with the $y$-axis.",
            "lines": [
              {
                "step": "Find how many points the graph of $5x = 20$ shares with the $y$-axis.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
              },
              {
                "step": "The graph is the vertical line $x = 4$, and $4$ is not $0$, so the graph shares no point with the $y$-axis: None.",
                "reason": "Vertical line $x = c$: every point of the graph has $x$-coordinate $4$, and the $y$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many points the graph of $2x = 0$ shares with the $y$-axis.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "Infinitely many",
              "lines": [
                {
                  "step": "Find how many points the graph of $2x = 0$ shares with the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 0$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "The graph is the vertical line $x = 0$, which is the $y$-axis itself, so every point of the $y$-axis is on it: Infinitely many.",
                  "reason": "Vertical line $x = c$: every point of the graph has $x$-coordinate $0$, and the $y$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
                }
              ]
            },
            {
              "prompt": "Find how many points the graph of $7x = -28$ shares with the $x$-axis.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Find how many points the graph of $7x = -28$ shares with the $x$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $x$ alone."
                },
                {
                  "step": "The graph is the vertical line $x = -4$, and its one point with $y = 0$ is $(-4, 0)$, on the $x$-axis: One.",
                  "reason": "Vertical line $x = c$: every point of the graph has $x$-coordinate $-4$, and the $y$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
                }
              ]
            },
            {
              "prompt": "Find how many points the graph of $3x = 24$ shares with the $y$-axis.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Find how many points the graph of $3x = 24$ shares with the $y$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "The graph is the vertical line $x = 8$, and $8$ is not $0$, so the graph shares no point with the $y$-axis: None.",
                  "reason": "Vertical line $x = c$: every point of the graph has $x$-coordinate $8$, and the $y$-coordinate takes every value. Axes: a point lies on the $x$-axis when its $y$-coordinate is $0$, and on the $y$-axis when its $x$-coordinate is $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t125-k3",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $3x + 4y = 12$.",
            "lines": [
              {
                "step": "Sketch the graph of $3x + 4y = 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x + 4(0) = 12$",
                "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
              },
              {
                "step": "$3x = 12$",
                "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
              },
              {
                "step": "The $x$-intercept is $(4, 0)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "$3(0) + 4y = 12$",
                "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
              },
              {
                "step": "$4y = 12$",
                "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
              },
              {
                "step": "$y = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
              },
              {
                "step": "The $y$-intercept is $(0, 3)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "The line through $(4, 0)$ and $(0, 3)$ is the graph.",
                "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                "figure": {
                  "file": "graphs-of-linear-equations-2.svg",
                  "alt": "A straight line through (4, 0) and (0, 3)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $5x - 6y = 30$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(6, 0)$",
                  "$(0, -5)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $5x - 6y = 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 6(0) = 30$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$5x = 30$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(6, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$5(0) - 6y = 30$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$-6y = 30$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$y = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-6$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, -5)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "The line through $(6, 0)$ and $(0, -5)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-3.svg",
                    "alt": "A straight line through (6, 0) and (0, −5)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $2x + 7y = -14$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-7, 0)$",
                  "$(0, -2)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $2x + 7y = -14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 7(0) = -14$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$2x = -14$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$x = -7$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(-7, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$2(0) + 7y = -14$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$7y = -14$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$y = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, -2)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "The line through $(-7, 0)$ and $(0, -2)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-4.svg",
                    "alt": "A straight line through (−7, 0) and (0, −2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $2x - 5y = -10$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-5, 0)$",
                  "$(0, 2)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $2x - 5y = -10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x - 5(0) = -10$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$2x = -10$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(-5, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$2(0) - 5y = -10$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$-5y = -10$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, 2)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "The line through $(-5, 0)$ and $(0, 2)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-5.svg",
                    "alt": "A straight line through (−5, 0) and (0, 2)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $3x - 4y = 0$.",
            "lines": [
              {
                "step": "Sketch the graph of $3x - 4y = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$, $-4y = 0$ and $y = 0$, so the graph passes through the origin $(0, 0)$, its $x$-intercept and its $y$-intercept.",
                "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$; the same point has $y$-coordinate $0$, so by the definition of the $x$-intercept it is also the $x$-intercept."
              },
              {
                "step": "At $x = 4$, $12 - 4y = 0$ and $y = 3$, so $(4, 3)$ is on the graph.",
                "reason": "Graph of an equation: a solution of the equation is a point of the graph; $x = 4$ is chosen so that $y$ comes out whole."
              },
              {
                "step": "The line through $(0, 0)$ and $(4, 3)$ is the graph.",
                "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                "figure": {
                  "file": "graphs-of-linear-equations-13.svg",
                  "alt": "A straight line through (0, 0) and (4, 3)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $5x + 4y = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $5x + 4y = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $4y = 0$ and $y = 0$, so the graph passes through the origin $(0, 0)$, its $x$-intercept and its $y$-intercept.",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$; the same point has $y$-coordinate $0$, so by the definition of the $x$-intercept it is also the $x$-intercept."
                },
                {
                  "step": "At $x = 4$, $20 + 4y = 0$ and $y = -5$, so $(4, -5)$ is on the graph.",
                  "reason": "Graph of an equation: a solution of the equation is a point of the graph; $x = 4$ is chosen so that $y$ comes out whole."
                },
                {
                  "step": "The line through $(0, 0)$ and $(4, -5)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-14.svg",
                    "alt": "A straight line through (0, 0) and (4, −5)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $4x - 5y = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $4x - 5y = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $-5y = 0$ and $y = 0$, so the graph passes through the origin $(0, 0)$, its $x$-intercept and its $y$-intercept.",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$; the same point has $y$-coordinate $0$, so by the definition of the $x$-intercept it is also the $x$-intercept."
                },
                {
                  "step": "At $x = 5$, $20 - 5y = 0$ and $y = 4$, so $(5, 4)$ is on the graph.",
                  "reason": "Graph of an equation: a solution of the equation is a point of the graph; $x = 5$ is chosen so that $y$ comes out whole."
                },
                {
                  "step": "The line through $(0, 0)$ and $(5, 4)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-15.svg",
                    "alt": "A straight line through (0, 0) and (5, 4)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $2x + 7y = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $2x + 7y = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $7y = 0$ and $y = 0$, so the graph passes through the origin $(0, 0)$, its $x$-intercept and its $y$-intercept.",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$; the same point has $y$-coordinate $0$, so by the definition of the $x$-intercept it is also the $x$-intercept."
                },
                {
                  "step": "At $x = 7$, $14 + 7y = 0$ and $y = -2$, so $(7, -2)$ is on the graph.",
                  "reason": "Graph of an equation: a solution of the equation is a point of the graph; $x = 7$ is chosen so that $y$ comes out whole."
                },
                {
                  "step": "The line through $(0, 0)$ and $(7, -2)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through them is the whole graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-16.svg",
                    "alt": "A straight line through (0, 0) and (7, −2)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $3y + 24 = 0$.",
            "lines": [
              {
                "step": "Sketch the graph of $3y + 24 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3y = -24$",
                "reason": "Adding the same number to both sides: adding $-24$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = -8$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
              },
              {
                "step": "The graph is the horizontal line through $(0, -8)$: every point on it has $y$-coordinate $-8$.",
                "reason": "Horizontal line $y = c$: the graph of $y = c$ is the horizontal line through $(0, c)$.",
                "figure": {
                  "file": "graphs-of-linear-equations-24.svg",
                  "alt": "A horizontal straight line through (0, −8)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $2y - 18 = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 9)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $2y - 18 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y = 18$",
                  "reason": "Adding the same number to both sides: adding $18$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "The graph is the horizontal line through $(0, 9)$: every point on it has $y$-coordinate $9$.",
                  "reason": "Horizontal line $y = c$: the graph of $y = c$ is the horizontal line through $(0, c)$.",
                  "figure": {
                    "file": "graphs-of-linear-equations-25.svg",
                    "alt": "A horizontal straight line through (0, 9)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $5y - 5 = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 1)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $5y - 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5y = 5$",
                  "reason": "Adding the same number to both sides: adding $5$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone."
                },
                {
                  "step": "The graph is the horizontal line through $(0, 1)$: every point on it has $y$-coordinate $1$.",
                  "reason": "Horizontal line $y = c$: the graph of $y = c$ is the horizontal line through $(0, c)$.",
                  "figure": {
                    "file": "graphs-of-linear-equations-26.svg",
                    "alt": "A horizontal straight line through (0, 1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $4y + 4 = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -1)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $4y + 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4y = -4$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
                },
                {
                  "step": "The graph is the horizontal line through $(0, -1)$: every point on it has $y$-coordinate $-1$.",
                  "reason": "Horizontal line $y = c$: the graph of $y = c$ is the horizontal line through $(0, c)$.",
                  "figure": {
                    "file": "graphs-of-linear-equations-27.svg",
                    "alt": "A horizontal straight line through (0, −1)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $2x - 2 = 0$.",
            "lines": [
              {
                "step": "Sketch the graph of $2x - 2 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x = 2$",
                "reason": "Adding the same number to both sides: adding $2$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = 1$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
              },
              {
                "step": "The graph is the vertical line through $(1, 0)$: every point on it has $x$-coordinate $1$.",
                "reason": "Vertical line $x = c$: the graph of $x = c$ is the vertical line through $(c, 0)$.",
                "figure": {
                  "file": "graphs-of-linear-equations-35.svg",
                  "alt": "A vertical straight line through (1, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $3x + 15 = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-5, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $3x + 15 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x = -15$",
                  "reason": "Adding the same number to both sides: adding $-15$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "The graph is the vertical line through $(-5, 0)$: every point on it has $x$-coordinate $-5$.",
                  "reason": "Vertical line $x = c$: the graph of $x = c$ is the vertical line through $(c, 0)$.",
                  "figure": {
                    "file": "graphs-of-linear-equations-36.svg",
                    "alt": "A vertical straight line through (−5, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $4x + 4 = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-1, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $4x + 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x = -4$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "The graph is the vertical line through $(-1, 0)$: every point on it has $x$-coordinate $-1$.",
                  "reason": "Vertical line $x = c$: the graph of $x = c$ is the vertical line through $(c, 0)$.",
                  "figure": {
                    "file": "graphs-of-linear-equations-37.svg",
                    "alt": "A vertical straight line through (−1, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $6x + 60 = 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-10, 0)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $6x + 60 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x = -60$",
                  "reason": "Adding the same number to both sides: adding $-60$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "The graph is the vertical line through $(-10, 0)$: every point on it has $x$-coordinate $-10$.",
                  "reason": "Vertical line $x = c$: the graph of $x = c$ is the vertical line through $(c, 0)$.",
                  "figure": {
                    "file": "graphs-of-linear-equations-38.svg",
                    "alt": "A vertical straight line through (−10, 0)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t125-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the $x$-intercept of the graph of $6x - 5y = 30$, and write that line right.",
            "given": [
              "$6x - 5y = 30$",
              "$6(0) - 5y = 30$",
              "$-5y = 30$",
              "$y = -6$",
              "The $x$-intercept is $(0, -6)$."
            ],
            "lines": [
              {
                "step": "The working is for the $x$-intercept of the graph of $6x - 5y = 30$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 puts $0$ in place of $x$, but the $x$-intercept lies on the $x$-axis, where $y = 0$.",
                "reason": "A letter is read as an object: the $x$ in $x$-intercept names the axis the point lies on, and it is not the letter that is set to $0$."
              },
              {
                "step": "Line 2 written right is $6x - 5(0) = 30$.",
                "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the $y$-intercept of the graph of $\\dfrac{x}{4} + \\dfrac{y}{3} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{x}{4} + \\dfrac{y}{3} = 2$",
                "$3x + 4y = 24$",
                "$3x + 4(0) = 24$",
                "$3x = 24$",
                "$x = 8$",
                "The $y$-intercept is $(8, 0)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3*0+4*y = 24",
              "lines": [
                {
                  "step": "The working is for the $y$-intercept of the graph of $\\dfrac{x}{4} + \\dfrac{y}{3} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts $0$ in place of $y$, but the $y$-intercept lies on the $y$-axis, where $x = 0$.",
                  "reason": "A letter is read as an object: the $y$ in $y$-intercept names the axis the point lies on, and it is not the letter that is set to $0$."
                },
                {
                  "step": "Line 3 written right is $3(0) + 4y = 24$.",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the $y$-intercept of the graph of $2x + 9y = 18$, and write that line right.",
              "given": [
                "$2x + 9y = 18$",
                "$2x + 9(0) = 18$",
                "$2x = 18$",
                "$x = 9$",
                "The $y$-intercept is $(9, 0)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*0+9*y = 18",
              "lines": [
                {
                  "step": "The working is for the $y$-intercept of the graph of $2x + 9y = 18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 puts $0$ in place of $y$, but the $y$-intercept lies on the $y$-axis, where $x = 0$.",
                  "reason": "A letter is read as an object: the $y$ in $y$-intercept names the axis the point lies on, and it is not the letter that is set to $0$."
                },
                {
                  "step": "Line 2 written right is $2(0) + 9y = 18$.",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the $x$-intercept of the graph of $\\dfrac{x}{5} - \\dfrac{y}{2} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{x}{5} - \\dfrac{y}{2} = 2$",
                "$2x - 5y = 20$",
                "$2(0) - 5y = 20$",
                "$-5y = 20$",
                "$y = -4$",
                "The $x$-intercept is $(0, -4)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*x-5*0 = 20",
              "lines": [
                {
                  "step": "The working is for the $x$-intercept of the graph of $\\dfrac{x}{5} - \\dfrac{y}{2} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts $0$ in place of $x$, but the $x$-intercept lies on the $x$-axis, where $y = 0$.",
                  "reason": "A letter is read as an object: the $x$ in $x$-intercept names the axis the point lies on, and it is not the letter that is set to $0$."
                },
                {
                  "step": "Line 3 written right is $2x - 5(0) = 20$.",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the intercepts of the graph of $3x - 7y = 21$, and write that line right.",
            "given": [
              "$3x - 7y = 21$",
              "$3x - 7(0) = 21$",
              "$3x = 21$",
              "$x = 7$",
              "The $x$-intercept is $(0, 7)$.",
              "$3(0) - 7y = 21$",
              "$-7y = 21$",
              "$y = -3$",
              "The $y$-intercept is $(0, -3)$."
            ],
            "lines": [
              {
                "step": "The working is for the intercepts of the graph of $3x - 7y = 21$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 writes the value $x = 7$ in the place of the other coordinate.",
                "reason": "A letter is read as an object: the $x$ in $x$-intercept names the axis, and the value found for $x$ is the $x$-coordinate of the point."
              },
              {
                "step": "Line 5 written right is: the $x$-intercept is $(7, 0)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the intercepts of the graph of $\\dfrac{x}{2} + \\dfrac{y}{7} = 1$, and write that line right.",
              "given": [
                "$\\dfrac{x}{2} + \\dfrac{y}{7} = 1$",
                "$7x + 2y = 14$",
                "$7x + 2(0) = 14$",
                "$7x = 14$",
                "$x = 2$",
                "The $x$-intercept is $(2, 0)$.",
                "$7(0) + 2y = 14$",
                "$2y = 14$",
                "$y = 7$",
                "The $y$-intercept is $(7, 0)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 10: (0, 7)",
              "lines": [
                {
                  "step": "The working is for the intercepts of the graph of $\\dfrac{x}{2} + \\dfrac{y}{7} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 10 writes the value $y = 7$ in the place of the other coordinate.",
                  "reason": "A letter is read as an object: the $y$ in $y$-intercept names the axis, and the value found for $y$ is the $y$-coordinate of the point."
                },
                {
                  "step": "Line 10 written right is: the $y$-intercept is $(0, 7)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the intercepts of the graph of $4x + 9y = -36$, and write that line right.",
              "given": [
                "$4x + 9y = -36$",
                "$4x + 9(0) = -36$",
                "$4x = -36$",
                "$x = -9$",
                "The $x$-intercept is $(-9, 0)$.",
                "$4(0) + 9y = -36$",
                "$9y = -36$",
                "$y = -4$",
                "The $y$-intercept is $(-4, 0)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 9: (0, -4)",
              "lines": [
                {
                  "step": "The working is for the intercepts of the graph of $4x + 9y = -36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 9 writes the value $y = -4$ in the place of the other coordinate.",
                  "reason": "A letter is read as an object: the $y$ in $y$-intercept names the axis, and the value found for $y$ is the $y$-coordinate of the point."
                },
                {
                  "step": "Line 9 written right is: the $y$-intercept is $(0, -4)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the intercepts of the graph of $\\dfrac{x}{5} - \\dfrac{y}{4} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{x}{5} - \\dfrac{y}{4} = 2$",
                "$4x - 5y = 40$",
                "$4x - 5(0) = 40$",
                "$4x = 40$",
                "$x = 10$",
                "The $x$-intercept is $(0, 10)$.",
                "$4(0) - 5y = 40$",
                "$-5y = 40$",
                "$y = -8$",
                "The $y$-intercept is $(0, -8)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: (10, 0)",
              "lines": [
                {
                  "step": "The working is for the intercepts of the graph of $\\dfrac{x}{5} - \\dfrac{y}{4} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 writes the value $x = 10$ in the place of the other coordinate.",
                  "reason": "A letter is read as an object: the $x$ in $x$-intercept names the axis, and the value found for $x$ is the $x$-coordinate of the point."
                },
                {
                  "step": "Line 6 written right is: the $x$-intercept is $(10, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t125-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 4x - 12$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 4x - 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 4(0) - 12$",
                "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
              },
              {
                "step": "$y = -12$",
                "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
              },
              {
                "step": "The $y$-intercept is $(0, -12)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "$0 = 4x - 12$",
                "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
              },
              {
                "step": "$4x = 12$",
                "reason": "Adding the same number to both sides: adding $12$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
              },
              {
                "step": "The $x$-intercept is $(3, 0)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "$-4x + y = -12$",
                "reason": "Adding the same number to both sides: taking $4x$ from both sides of the equation of the problem puts it in the shape $ax + by = c$."
              },
              {
                "step": "The line through $(0, -12)$ and $(3, 0)$ is the graph.",
                "reason": "The graph of $ax + by = c$ is a line: $-4x + y = -12$ has that shape, so the line through two of its points is the graph.",
                "figure": {
                  "file": "graphs-of-linear-equations-46.svg",
                  "alt": "A straight line through (0, −12) and (3, 0)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -4x + 8$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(2, 0)$",
                  "$(0, 8)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -4x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -4(0) + 8$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$y = 8$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "The $y$-intercept is $(0, 8)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$0 = -4x + 8$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$-4x = -8$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(2, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$4x + y = 8$",
                  "reason": "Adding the same number to both sides: adding $4x$ to both sides of the equation of the problem puts it in the shape $ax + by = c$."
                },
                {
                  "step": "The line through $(0, 8)$ and $(2, 0)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: $4x + y = 8$ has that shape, so the line through two of its points is the graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-47.svg",
                    "alt": "A straight line through (0, 8) and (2, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 6x + 12$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-2, 0)$",
                  "$(0, 12)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 6x + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 6(0) + 12$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$y = 12$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "The $y$-intercept is $(0, 12)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$0 = 6x + 12$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$6x = -12$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(-2, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$-6x + y = 12$",
                  "reason": "Adding the same number to both sides: taking $6x$ from both sides of the equation of the problem puts it in the shape $ax + by = c$."
                },
                {
                  "step": "The line through $(0, 12)$ and $(-2, 0)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: $-6x + y = 12$ has that shape, so the line through two of its points is the graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-48.svg",
                    "alt": "A straight line through (0, 12) and (−2, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -7x + 14$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(2, 0)$",
                  "$(0, 14)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -7x + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -7(0) + 14$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "The $y$-intercept is $(0, 14)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$0 = -7x + 14$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$-7x = -14$",
                  "reason": "Adding the same number to both sides: adding $-14$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-7$ leaves $x$ alone."
                },
                {
                  "step": "The $x$-intercept is $(2, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$7x + y = 14$",
                  "reason": "Adding the same number to both sides: adding $7x$ to both sides of the equation of the problem puts it in the shape $ax + by = c$."
                },
                {
                  "step": "The line through $(0, 14)$ and $(2, 0)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: $7x + y = 14$ has that shape, so the line through two of its points is the graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-49.svg",
                    "alt": "A straight line through (0, 14) and (2, 0)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $x = 5y - 10$.",
            "lines": [
              {
                "step": "Sketch the graph of $x = 5y - 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 5(0) - 10$",
                "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
              },
              {
                "step": "$x = -10$",
                "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
              },
              {
                "step": "The $x$-intercept is $(-10, 0)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "$0 = 5y - 10$",
                "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
              },
              {
                "step": "$5y = 10$",
                "reason": "Adding the same number to both sides: adding $10$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone."
              },
              {
                "step": "The $y$-intercept is $(0, 2)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "$x - 5y = -10$",
                "reason": "Adding the same number to both sides: taking $5y$ from both sides of the equation of the problem puts it in the shape $ax + by = c$."
              },
              {
                "step": "The line through $(-10, 0)$ and $(0, 2)$ is the graph.",
                "reason": "The graph of $ax + by = c$ is a line: $x - 5y = -10$ has that shape, so the line through two of its points is the graph.",
                "figure": {
                  "file": "graphs-of-linear-equations-57.svg",
                  "alt": "A straight line through (−10, 0) and (0, 2)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $x = -6y + 12$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(12, 0)$",
                  "$(0, 2)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = -6y + 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -6(0) + 12$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$x = 12$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "The $x$-intercept is $(12, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$0 = -6y + 12$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$-6y = -12$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-6$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, 2)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$x + 6y = 12$",
                  "reason": "Adding the same number to both sides: adding $6y$ to both sides of the equation of the problem puts it in the shape $ax + by = c$."
                },
                {
                  "step": "The line through $(12, 0)$ and $(0, 2)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: $x + 6y = 12$ has that shape, so the line through two of its points is the graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-58.svg",
                    "alt": "A straight line through (12, 0) and (0, 2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x = 7y + 14$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(14, 0)$",
                  "$(0, -2)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = 7y + 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 7(0) + 14$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "The $x$-intercept is $(14, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$0 = 7y + 14$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$7y = -14$",
                  "reason": "Adding the same number to both sides: adding $-14$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, -2)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$x - 7y = 14$",
                  "reason": "Adding the same number to both sides: taking $7y$ from both sides of the equation of the problem puts it in the shape $ax + by = c$."
                },
                {
                  "step": "The line through $(14, 0)$ and $(0, -2)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: $x - 7y = 14$ has that shape, so the line through two of its points is the graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-59.svg",
                    "alt": "A straight line through (14, 0) and (0, −2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x = -5y - 15$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-15, 0)$",
                  "$(0, -3)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x = -5y - 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -5(0) - 15$",
                  "reason": "Definition of the $x$-intercept: the $x$-intercept is the point where the graph meets the $x$-axis, and its $y$-coordinate is $0$, so $0$ is put in place of $y$."
                },
                {
                  "step": "$x = -15$",
                  "reason": "Assumptions on multiplication: the product of a number and $0$ is $0$, and by the assumptions on addition adding $0$ leaves the other term as it is."
                },
                {
                  "step": "The $x$-intercept is $(-15, 0)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$0 = -5y - 15$",
                  "reason": "Definition of the $y$-intercept: the $y$-intercept is the point where the graph meets the $y$-axis, and its $x$-coordinate is $0$, so $0$ is put in place of $x$."
                },
                {
                  "step": "$-5y = 15$",
                  "reason": "Adding the same number to both sides: adding $15$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $y$ alone."
                },
                {
                  "step": "The $y$-intercept is $(0, -3)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "$x + 5y = -15$",
                  "reason": "Adding the same number to both sides: adding $5y$ to both sides of the equation of the problem puts it in the shape $ax + by = c$."
                },
                {
                  "step": "The line through $(-15, 0)$ and $(0, -3)$ is the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: $x + 5y = -15$ has that shape, so the line through two of its points is the graph.",
                  "figure": {
                    "file": "graphs-of-linear-equations-60.svg",
                    "alt": "A straight line through (−15, 0) and (0, −3)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t125-k6",
      "forms": [
        {
          "example": {
            "problem": "Find $a$, given that the point $(2, -3)$ lies on the graph of $ax + 4y = 2$.",
            "lines": [
              {
                "step": "Find $a$, given that the point $(2, -3)$ lies on the graph of $ax + 4y = 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a(2) + 4(-3) = 2$",
                "reason": "Graph of an equation: the point $(2, -3)$ is on the graph, so its coordinates are a solution; Substituting a value puts $2$ in place of $x$ and $-3$ in place of $y$, each in brackets."
              },
              {
                "step": "$2a - 12 = 2$",
                "reason": "Arithmetic: $4 \\cdot (-3) = -12$, and $a(2)$ is written $2a$ by the assumptions on multiplication."
              },
              {
                "step": "$2a = 14$",
                "reason": "Adding the same number to both sides: adding $12$ to both sides leaves the term in $a$ alone."
              },
              {
                "step": "$a = 7$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $a$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, given that the point $(3, 2)$ lies on the graph of $5x + by = 3$.",
              "form": "Answer as an integer.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Find $b$, given that the point $(3, 2)$ lies on the graph of $5x + by = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(3) + b(2) = 3$",
                  "reason": "Graph of an equation: the point $(3, 2)$ is on the graph, so its coordinates are a solution; Substituting a value puts $3$ in place of $x$ and $2$ in place of $y$, each in brackets."
                },
                {
                  "step": "$15 + 2b = 3$",
                  "reason": "Arithmetic: $5 \\cdot (3) = 15$, and $b(2)$ is written $2b$ by the assumptions on multiplication."
                },
                {
                  "step": "$2b = -12$",
                  "reason": "Adding the same number to both sides: adding $-15$ to both sides leaves the term in $b$ alone."
                },
                {
                  "step": "$b = -6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $b$ alone."
                }
              ]
            },
            {
              "prompt": "Find $a$, given that the point $(-2, 2)$ lies on the graph of $ax + 9y = 10$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find $a$, given that the point $(-2, 2)$ lies on the graph of $ax + 9y = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a(-2) + 9(2) = 10$",
                  "reason": "Graph of an equation: the point $(-2, 2)$ is on the graph, so its coordinates are a solution; Substituting a value puts $-2$ in place of $x$ and $2$ in place of $y$, each in brackets."
                },
                {
                  "step": "$-2a + 18 = 10$",
                  "reason": "Arithmetic: $9 \\cdot (2) = 18$, and $a(-2)$ is written $-2a$ by the assumptions on multiplication."
                },
                {
                  "step": "$-2a = -8$",
                  "reason": "Adding the same number to both sides: adding $-18$ to both sides leaves the term in $a$ alone."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $a$ alone."
                }
              ]
            },
            {
              "prompt": "Find $b$, given that the point $(4, -2)$ lies on the graph of $3x + by = -4$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find $b$, given that the point $(4, -2)$ lies on the graph of $3x + by = -4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3(4) + b(-2) = -4$",
                  "reason": "Graph of an equation: the point $(4, -2)$ is on the graph, so its coordinates are a solution; Substituting a value puts $4$ in place of $x$ and $-2$ in place of $y$, each in brackets."
                },
                {
                  "step": "$12 - 2b = -4$",
                  "reason": "Arithmetic: $3 \\cdot (4) = 12$, and $b(-2)$ is written $-2b$ by the assumptions on multiplication."
                },
                {
                  "step": "$-2b = -16$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $b$ alone."
                },
                {
                  "step": "$b = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $b$ alone."
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
