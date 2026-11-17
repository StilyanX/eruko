export default {
  "number": 131,
  "title": "Linear inequalities in two variables",
  "section": 6,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "269-272"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether the point $(4, -2)$ lies in the region $2x - 5y > 16$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the point $(4, -2)$ lies in the region $2x - 5y > 16$.",
      "$2 \\cdot 4 - 5 \\cdot (-2) = 18$",
      "The inequality $18 > 16$ is true.",
      "Yes"
    ]
  },
  "ideas": [
    {
      "name": "Half-plane",
      "concrete": "The line $2x + 3y = 12$ splits the plane into two parts. The point $(3, 3)$ gives $2 \\cdot 3 + 3 \\cdot 3 = 15$, more than $12$, and so does every point on its side of the line; the point $(0, 0)$ gives $0$, less than $12$, and so does every point on the other side. So the solutions of $2x + 3y > 12$ fill the side that holds $(3, 3)$.",
      "general": "For numbers $a$, $b$ and $c$, with $a$ and $b$ not both $0$, the line $ax + by = c$ splits the plane into two **half-planes**: on one of them $ax + by > c$ at every point, and on the other $ax + by < c$ at every point. So the solutions $(x, y)$ of a linear inequality in two variables fill one half-plane, with or without the line."
    },
    {
      "name": "Boundary line, solid or dashed",
      "concrete": "The points of the line $3x - 2y = 6$ make $3x - 2y \\ge 6$ true and $3x - 2y > 6$ false. So the sketch of $3x - 2y \\ge 6$ draws the line solid, and the sketch of $3x - 2y > 6$ draws it dashed.",
      "general": "The line $ax + by = c$ is the **boundary line** of the inequalities $ax + by < c$, $ax + by \\le c$, $ax + by > c$ and $ax + by \\ge c$. It is drawn **solid** for the nonstrict signs $\\le$ and $\\ge$, whose solutions take in the line, and **dashed** for the strict signs $<$ and $>$, whose solutions leave it out."
    },
    {
      "name": "Test point",
      "concrete": "For $4x + 3y \\le 12$, the origin is not on the line $4x + 3y = 12$, and $4 \\cdot 0 + 3 \\cdot 0 = 0$ with $0 \\le 12$ true, so the region is the side of the line that holds the origin. For $x$ and $y$ with $3x - 2y < 0$ the line passes through the origin, so the point $(1, 0)$ is tested instead: $3 \\cdot 1 - 2 \\cdot 0 = 3$, and $3 < 0$ is false.",
      "general": "A **test point** is a point off the boundary line, put into the inequality. Since every point of one half-plane gives the same answer, a true inequality at the test point means the region is its side of the line, and a false one means the other side. The origin is the easiest test point whenever the line does not pass through it."
    },
    {
      "name": "Region of a system of inequalities",
      "concrete": "The points that satisfy both $2x + 3y \\le 12$ and $3x - 2y > 3$ are the points shaded for the first and also for the second, the part where the two half-planes overlap. The point $(2, 1)$ gives $7 \\le 12$ and $4 > 3$, so it lies in that part.",
      "general": "The **region of a system of inequalities** is the set of points that make every inequality of the system true. It is found by sketching each half-plane on the same axes and keeping the part they share; a chain $c < ax + by < d$ is the system of its two inequalities, and its region is the strip between two parallel lines."
    }
  ],
  "kinds": [
    {
      "id": "t131-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the point $(-5, 1)$ lies in the region $-2x + 6y < 19$.",
            "lines": [
              {
                "step": "Decide whether the point $(-5, 1)$ lies in the region $-2x + 6y < 19$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-2 \\cdot (-5) + 6 \\cdot 1 = 16$",
                "reason": "Substituting a value: the coordinates of the point stand in place of $x$ and $y$."
              },
              {
                "step": "The inequality $16 < 19$ is true.",
                "reason": "Test point: a point lies in the region exactly when it makes the inequality true."
              },
              {
                "step": "Yes",
                "reason": "The point makes the inequality true, so it lies in the region."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the point $(6, 6)$ lies in the region $4x + 5y \\ge 60$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the point $(6, 6)$ lies in the region $4x + 5y \\ge 60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4 \\cdot 6 + 5 \\cdot 6 = 54$",
                  "reason": "Substituting a value: the coordinates of the point stand in place of $x$ and $y$."
                },
                {
                  "step": "The inequality $54 \\ge 60$ is false.",
                  "reason": "Test point: a point lies in the region exactly when it makes the inequality true."
                },
                {
                  "step": "No",
                  "reason": "The point makes the inequality false, so it lies outside the region."
                }
              ]
            },
            {
              "prompt": "Decide whether the point $(-2, 3)$ lies in the region $-7x + 5y < 29$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the point $(-2, 3)$ lies in the region $-7x + 5y < 29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7 \\cdot (-2) + 5 \\cdot 3 = 29$",
                  "reason": "Substituting a value: the coordinates of the point stand in place of $x$ and $y$."
                },
                {
                  "step": "The inequality $29 < 29$ is false.",
                  "reason": "Test point: a point lies in the region exactly when it makes the inequality true. The point lies on the boundary, and the sign $<$ is strict, so the boundary is left out."
                },
                {
                  "step": "No",
                  "reason": "The point makes the inequality false, so it lies outside the region."
                }
              ]
            },
            {
              "prompt": "Decide whether the point $(2, 6)$ lies in the region $-7x + 4y \\le 14$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the point $(2, 6)$ lies in the region $-7x + 4y \\le 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7 \\cdot 2 + 4 \\cdot 6 = 10$",
                  "reason": "Substituting a value: the coordinates of the point stand in place of $x$ and $y$."
                },
                {
                  "step": "The inequality $10 \\le 14$ is true.",
                  "reason": "Test point: a point lies in the region exactly when it makes the inequality true."
                },
                {
                  "step": "Yes",
                  "reason": "The point makes the inequality true, so it lies in the region."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t131-k2",
      "forms": [
        {
          "example": {
            "problem": "Sketch the region $-6x - 7y \\le 42$.",
            "lines": [
              {
                "step": "Sketch the region $-6x - 7y \\le 42$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $y = 0$, $x = -7$, and at $x = 0$, $y = -6$, so the boundary $-6x - 7y = 42$ crosses the axes at $(-7, 0)$ and $(0, -6)$.",
                "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $-6x - 7y = 42$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
              },
              {
                "step": "The boundary is solid.",
                "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region."
              },
              {
                "step": "At $(0, 0)$, $-6 \\cdot 0 - 7 \\cdot 0 = 0$, and $0 \\le 42$ is true.",
                "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
              },
              {
                "step": "The region is the half-plane on the side of the origin.",
                "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                "figure": {
                  "file": "linear-inequalities-in-two-variables-1.svg",
                  "alt": "A solid line through (−7, 0) and (0, −6), with the side holding the origin shaded."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region $6x - 7y \\le -42$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid line $6x - 7y = -42$",
                  "shaded above $6x - 7y = -42$",
                  "test point $(0, 0)$ does not satisfy it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $6x - 7y \\le -42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$, $x = -7$, and at $x = 0$, $y = 6$, so the boundary $6x - 7y = -42$ crosses the axes at $(-7, 0)$ and $(0, 6)$.",
                  "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $6x - 7y = -42$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region."
                },
                {
                  "step": "At $(0, 0)$, $6 \\cdot 0 - 7 \\cdot 0 = 0$, and $0 \\le -42$ is false.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
                },
                {
                  "step": "The region is the half-plane on the side away from the origin.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-2.svg",
                    "alt": "A solid line through (−7, 0) and (0, 6), with the side away from the origin shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $-5x + 8y > 40$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $-5x + 8y = 40$",
                  "shaded above $-5x + 8y = 40$",
                  "test point $(0, 0)$ does not satisfy it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $-5x + 8y > 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$, $x = -8$, and at $x = 0$, $y = 5$, so the boundary $-5x + 8y = 40$ crosses the axes at $(-8, 0)$ and $(0, 5)$.",
                  "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $-5x + 8y = 40$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $>$ is strict, so the points of the line are not in the region."
                },
                {
                  "step": "At $(0, 0)$, $-5 \\cdot 0 + 8 \\cdot 0 = 0$, and $0 > 40$ is false.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
                },
                {
                  "step": "The region is the half-plane on the side away from the origin.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-3.svg",
                    "alt": "A dashed line through (−8, 0) and (0, 5), with the side away from the origin shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $8x + 7y < -56$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $8x + 7y = -56$",
                  "shaded below $8x + 7y = -56$",
                  "test point $(0, 0)$ does not satisfy it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $8x + 7y < -56$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$, $x = -7$, and at $x = 0$, $y = -8$, so the boundary $8x + 7y = -56$ crosses the axes at $(-7, 0)$ and $(0, -8)$.",
                  "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $8x + 7y = -56$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region."
                },
                {
                  "step": "At $(0, 0)$, $8 \\cdot 0 + 7 \\cdot 0 = 0$, and $0 < -56$ is false.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
                },
                {
                  "step": "The region is the half-plane on the side away from the origin.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-4.svg",
                    "alt": "A dashed line through (−7, 0) and (0, −8), with the side away from the origin shaded."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the region $2x + 3y \\le 0$.",
            "lines": [
              {
                "step": "Sketch the region $2x + 3y \\le 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 0$, $y = 0$, so the boundary $2x + 3y = 0$ passes through the origin, and it also passes through $(-3, 2)$, since $2 \\cdot (-3) + 3 \\cdot 2 = 0$.",
                "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through the origin and the second point is the boundary."
              },
              {
                "step": "The boundary is solid.",
                "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region."
              },
              {
                "step": "At $(1, 0)$, $2 \\cdot 1 + 3 \\cdot 0 = 2$, and $2 \\le 0$ is false.",
                "reason": "Test point: the origin lies on the boundary and tells nothing, so the point $(1, 0)$, off the line, is tested instead."
              },
              {
                "step": "The region is the half-plane on the side away from $(1, 0)$.",
                "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                "figure": {
                  "file": "linear-inequalities-in-two-variables-12.svg",
                  "alt": "A solid line through (0, 0) and (−3, 2), with the side away from the point (1, 0) shaded."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region $3x - 4y \\le 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid line $3x - 4y = 0$",
                  "shaded above $3x - 4y = 0$",
                  "test point $(1, 0)$ does not satisfy it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $3x - 4y \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $y = 0$, so the boundary $3x - 4y = 0$ passes through the origin, and it also passes through $(4, 3)$, since $3 \\cdot 4 - 4 \\cdot 3 = 0$.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through the origin and the second point is the boundary."
                },
                {
                  "step": "The boundary is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region."
                },
                {
                  "step": "At $(1, 0)$, $3 \\cdot 1 - 4 \\cdot 0 = 3$, and $3 \\le 0$ is false.",
                  "reason": "Test point: the origin lies on the boundary and tells nothing, so the point $(1, 0)$, off the line, is tested instead."
                },
                {
                  "step": "The region is the half-plane on the side away from $(1, 0)$.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-13.svg",
                    "alt": "A solid line through (0, 0) and (4, 3), with the side away from the point (1, 0) shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $2x - 5y > 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $2x - 5y = 0$",
                  "shaded below $2x - 5y = 0$",
                  "test point $(1, 0)$ satisfies it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $2x - 5y > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $y = 0$, so the boundary $2x - 5y = 0$ passes through the origin, and it also passes through $(5, 2)$, since $2 \\cdot 5 - 5 \\cdot 2 = 0$.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through the origin and the second point is the boundary."
                },
                {
                  "step": "The boundary is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $>$ is strict, so the points of the line are not in the region."
                },
                {
                  "step": "At $(1, 0)$, $2 \\cdot 1 - 5 \\cdot 0 = 2$, and $2 > 0$ is true.",
                  "reason": "Test point: the origin lies on the boundary and tells nothing, so the point $(1, 0)$, off the line, is tested instead."
                },
                {
                  "step": "The region is the half-plane on the side of $(1, 0)$.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-14.svg",
                    "alt": "A dashed line through (0, 0) and (5, 2), with the side holding the point (1, 0) shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $-3x - 4y \\ge 0$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid line $-3x - 4y = 0$",
                  "shaded below $-3x - 4y = 0$",
                  "test point $(1, 0)$ does not satisfy it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $-3x - 4y \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 0$, $y = 0$, so the boundary $-3x - 4y = 0$ passes through the origin, and it also passes through $(4, -3)$, since $-3 \\cdot 4 - 4 \\cdot (-3) = 0$.",
                  "reason": "The graph of $ax + by = c$ is a line: two of its points fix the line, so the line through the origin and the second point is the boundary."
                },
                {
                  "step": "The boundary is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\ge$ is nonstrict, so the points of the line are in the region."
                },
                {
                  "step": "At $(1, 0)$, $-3 \\cdot 1 - 4 \\cdot 0 = -3$, and $-3 \\ge 0$ is false.",
                  "reason": "Test point: the origin lies on the boundary and tells nothing, so the point $(1, 0)$, off the line, is tested instead."
                },
                {
                  "step": "The region is the half-plane on the side away from $(1, 0)$.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-15.svg",
                    "alt": "A solid line through (0, 0) and (4, −3), with the side away from the point (1, 0) shaded."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the region $2(y + 4) \\le 20 + 3x$.",
            "lines": [
              {
                "step": "Sketch the region $2(y + 4) \\le 20 + 3x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Multiplying out gives $2y + 8 \\le 20 + 3x$.",
                "reason": "The distributive law: the bracket is multiplied out, term by term."
              },
              {
                "step": "Taking $3x$ from both sides and taking $8$ from both sides gives $-3x + 2y \\le 12$.",
                "reason": "Adding the same number: the same term is added to both sides, so the sign stays as it is."
              },
              {
                "step": "At $y = 0$, $x = -4$, and at $x = 0$, $y = 6$, so the boundary $-3x + 2y = 12$ crosses the axes at $(-4, 0)$ and $(0, 6)$.",
                "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $-3x + 2y = 12$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
              },
              {
                "step": "The boundary is solid.",
                "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region."
              },
              {
                "step": "At $(0, 0)$, $-3 \\cdot 0 + 2 \\cdot 0 = 0$, and $0 \\le 12$ is true.",
                "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
              },
              {
                "step": "The region is the half-plane on the side of the origin.",
                "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                "figure": {
                  "file": "linear-inequalities-in-two-variables-67.svg",
                  "alt": "A solid line through (−4, 0) and (0, 6), with the side holding the origin shaded."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region $3(y - 2) > -27 - 7x$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $7x + 3y = -21$",
                  "shaded above $7x + 3y = -21$",
                  "test point $(0, 0)$ satisfies it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $3(y - 2) > -27 - 7x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying out gives $3y - 6 > -27 - 7x$.",
                  "reason": "The distributive law: the bracket is multiplied out, term by term."
                },
                {
                  "step": "Adding $7x$ to both sides and adding $6$ to both sides gives $7x + 3y > -21$.",
                  "reason": "Adding the same number: the same term is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "At $y = 0$, $x = -3$, and at $x = 0$, $y = -7$, so the boundary $7x + 3y = -21$ crosses the axes at $(-3, 0)$ and $(0, -7)$.",
                  "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $7x + 3y = -21$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $>$ is strict, so the points of the line are not in the region."
                },
                {
                  "step": "At $(0, 0)$, $7 \\cdot 0 + 3 \\cdot 0 = 0$, and $0 > -21$ is true.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
                },
                {
                  "step": "The region is the half-plane on the side of the origin.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-68.svg",
                    "alt": "A dashed line through (−3, 0) and (0, −7), with the side holding the origin shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $7(y - 3) > 7 - 4x$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $4x + 7y = 28$",
                  "shaded above $4x + 7y = 28$",
                  "test point $(0, 0)$ does not satisfy it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $7(y - 3) > 7 - 4x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying out gives $7y - 21 > 7 - 4x$.",
                  "reason": "The distributive law: the bracket is multiplied out, term by term."
                },
                {
                  "step": "Adding $4x$ to both sides and adding $21$ to both sides gives $4x + 7y > 28$.",
                  "reason": "Adding the same number: the same term is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "At $y = 0$, $x = 7$, and at $x = 0$, $y = 4$, so the boundary $4x + 7y = 28$ crosses the axes at $(7, 0)$ and $(0, 4)$.",
                  "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $4x + 7y = 28$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $>$ is strict, so the points of the line are not in the region."
                },
                {
                  "step": "At $(0, 0)$, $4 \\cdot 0 + 7 \\cdot 0 = 0$, and $0 > 28$ is false.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
                },
                {
                  "step": "The region is the half-plane on the side away from the origin.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-69.svg",
                    "alt": "A dashed line through (7, 0) and (0, 4), with the side away from the origin shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $6(y + 4) \\ge -6 + 5x$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid line $-5x + 6y = -30$",
                  "shaded above $-5x + 6y = -30$",
                  "test point $(0, 0)$ satisfies it"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $6(y + 4) \\ge -6 + 5x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying out gives $6y + 24 \\ge -6 + 5x$.",
                  "reason": "The distributive law: the bracket is multiplied out, term by term."
                },
                {
                  "step": "Taking $5x$ from both sides and taking $24$ from both sides gives $-5x + 6y \\ge -30$.",
                  "reason": "Adding the same number: the same term is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "At $y = 0$, $x = 6$, and at $x = 0$, $y = -5$, so the boundary $-5x + 6y = -30$ crosses the axes at $(6, 0)$ and $(0, -5)$.",
                  "reason": "The graph of $ax + by = c$ is a line: the boundary is the line $-5x + 6y = -30$, and putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\ge$ is nonstrict, so the points of the line are in the region."
                },
                {
                  "step": "At $(0, 0)$, $-5 \\cdot 0 + 6 \\cdot 0 = 0$, and $0 \\ge -30$ is true.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which side of the line holds the region."
                },
                {
                  "step": "The region is the half-plane on the side of the origin.",
                  "reason": "Half-plane: the line splits the plane into two half-planes, and every point on one side gives the same answer as the test point.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-70.svg",
                    "alt": "A solid line through (6, 0) and (0, −5), with the side holding the origin shaded."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t131-k3",
      "forms": [
        {
          "example": {
            "problem": "Sketch the region of points that satisfy both $4x - 5y \\ge -20$ and $5x - 2y < -10$.",
            "lines": [
              {
                "step": "Sketch the region of points that satisfy both $4x - 5y \\ge -20$ and $5x - 2y < -10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The boundary $4x - 5y = -20$ crosses the axes at $(-5, 0)$ and $(0, 4)$ and is solid.",
                "reason": "Boundary line, solid or dashed: the sign $\\ge$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
              },
              {
                "step": "At $(0, 0)$, $4 \\cdot 0 - 5 \\cdot 0 = 0$, and $0 \\ge -20$ is true, so $4x - 5y \\ge -20$ holds on the side of the origin.",
                "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
              },
              {
                "step": "The boundary $5x - 2y = -10$ crosses the axes at $(-2, 0)$ and $(0, 5)$ and is dashed.",
                "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
              },
              {
                "step": "At $(0, 0)$, $5 \\cdot 0 - 2 \\cdot 0 = 0$, and $0 < -10$ is false, so $5x - 2y < -10$ holds on the side away from the origin.",
                "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
              },
              {
                "step": "The region is the part shaded for both inequalities, which holds the point $(-5, -2)$.",
                "reason": "Region of a system of inequalities: a point lies in it exactly when it makes both inequalities true, so the region is where the two half-planes overlap.",
                "figure": {
                  "file": "linear-inequalities-in-two-variables-23.svg",
                  "alt": "A solid line and a dashed line crossing, with the part on the correct side of both shaded around (−5, −2)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region of points that satisfy both $-4x + 5y > -20$ and $5x - 4y < -20$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $-4x + 5y = -20$",
                  "shaded above $-4x + 5y = -20$",
                  "dashed line $5x - 4y = -20$",
                  "shaded above $5x - 4y = -20$",
                  "test point $(-4, 3)$ satisfies both"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region of points that satisfy both $-4x + 5y > -20$ and $5x - 4y < -20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary $-4x + 5y = -20$ crosses the axes at $(5, 0)$ and $(0, -4)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $>$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "At $(0, 0)$, $-4 \\cdot 0 + 5 \\cdot 0 = 0$, and $0 > -20$ is true, so $-4x + 5y > -20$ holds on the side of the origin.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
                },
                {
                  "step": "The boundary $5x - 4y = -20$ crosses the axes at $(-4, 0)$ and $(0, 5)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "At $(0, 0)$, $5 \\cdot 0 - 4 \\cdot 0 = 0$, and $0 < -20$ is false, so $5x - 4y < -20$ holds on the side away from the origin.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
                },
                {
                  "step": "The region is the part shaded for both inequalities, which holds the point $(-4, 3)$.",
                  "reason": "Region of a system of inequalities: a point lies in it exactly when it makes both inequalities true, so the region is where the two half-planes overlap.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-24.svg",
                    "alt": "Two dashed lines crossing, with the part on the correct side of both shaded around (−4, 3)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region of points that satisfy both $-2x + 3y < 6$ and $5x + 3y \\ge 15$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $-2x + 3y = 6$",
                  "shaded below $-2x + 3y = 6$",
                  "solid line $5x + 3y = 15$",
                  "shaded above $5x + 3y = 15$",
                  "test point $(4, 2)$ satisfies both"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region of points that satisfy both $-2x + 3y < 6$ and $5x + 3y \\ge 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary $-2x + 3y = 6$ crosses the axes at $(-3, 0)$ and $(0, 2)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "At $(0, 0)$, $-2 \\cdot 0 + 3 \\cdot 0 = 0$, and $0 < 6$ is true, so $-2x + 3y < 6$ holds on the side of the origin.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
                },
                {
                  "step": "The boundary $5x + 3y = 15$ crosses the axes at $(3, 0)$ and $(0, 5)$ and is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\ge$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "At $(0, 0)$, $5 \\cdot 0 + 3 \\cdot 0 = 0$, and $0 \\ge 15$ is false, so $5x + 3y \\ge 15$ holds on the side away from the origin.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
                },
                {
                  "step": "The region is the part shaded for both inequalities, which holds the point $(4, 2)$.",
                  "reason": "Region of a system of inequalities: a point lies in it exactly when it makes both inequalities true, so the region is where the two half-planes overlap.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-25.svg",
                    "alt": "A dashed line and a solid line crossing, with the part on the correct side of both shaded around (4, 2)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region of points that satisfy both $-4x - 5y \\le 20$ and $2x + 3y \\ge -6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid line $-4x - 5y = 20$",
                  "shaded above $-4x - 5y = 20$",
                  "solid line $2x + 3y = -6$",
                  "shaded above $2x + 3y = -6$",
                  "test point $(-1, 1)$ satisfies both"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region of points that satisfy both $-4x - 5y \\le 20$ and $2x + 3y \\ge -6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary $-4x - 5y = 20$ crosses the axes at $(-5, 0)$ and $(0, -4)$ and is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "At $(0, 0)$, $-4 \\cdot 0 - 5 \\cdot 0 = 0$, and $0 \\le 20$ is true, so $-4x - 5y \\le 20$ holds on the side of the origin.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
                },
                {
                  "step": "The boundary $2x + 3y = -6$ crosses the axes at $(-3, 0)$ and $(0, -2)$ and is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\ge$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "At $(0, 0)$, $2 \\cdot 0 + 3 \\cdot 0 = 0$, and $0 \\ge -6$ is true, so $2x + 3y \\ge -6$ holds on the side of the origin.",
                  "reason": "Test point: the origin is not on the boundary, so it tells which half-plane the inequality fills."
                },
                {
                  "step": "The region is the part shaded for both inequalities, which holds the point $(-1, 1)$.",
                  "reason": "Region of a system of inequalities: a point lies in it exactly when it makes both inequalities true, so the region is where the two half-planes overlap.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-26.svg",
                    "alt": "Two solid lines crossing, with the part on the correct side of both shaded around (−1, 1)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the region $-12 < -3x - 4y \\le 24$.",
            "lines": [
              {
                "step": "Sketch the region $-12 < -3x - 4y \\le 24$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The chain holds exactly when $-12 < -3x - 4y$ and $-3x - 4y \\le 24$ both hold.",
                "reason": "Solving a chain: a chain holds exactly when its two inequalities both hold, so the region is the region of the system of the two."
              },
              {
                "step": "The boundary $-3x - 4y = -12$ crosses the axes at $(4, 0)$ and $(0, 3)$ and is dashed.",
                "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
              },
              {
                "step": "The boundary $-3x - 4y = 24$ crosses the axes at $(-8, 0)$ and $(0, -6)$ and is solid.",
                "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
              },
              {
                "step": "The two boundaries are parallel, both of slope $-\\dfrac{3}{4}$.",
                "reason": "Equal slopes mean parallel or the same line: the two lines share their left side and have different right sides, so they never meet."
              },
              {
                "step": "At $(0, 0)$, $-3 \\cdot 0 - 4 \\cdot 0 = 0$, and $-12 < 0 \\le 24$ is true.",
                "reason": "Test point: the origin lies on neither boundary, and it lies between the two lines."
              },
              {
                "step": "The region is the strip between the two lines.",
                "reason": "Region of a system of inequalities: the points that satisfy both lie on the side of each line that holds the origin, which is the strip between them.",
                "figure": {
                  "file": "linear-inequalities-in-two-variables-34.svg",
                  "alt": "Two parallel lines, the first dashed and the second solid, with the strip between them shaded."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region $-14 < 2x - 7y < 14$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $2x - 7y = -14$",
                  "shaded below $2x - 7y = -14$",
                  "dashed line $2x - 7y = 14$",
                  "shaded above $2x - 7y = 14$",
                  "test point $(0, 0)$ satisfies both"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $-14 < 2x - 7y < 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain holds exactly when $-14 < 2x - 7y$ and $2x - 7y < 14$ both hold.",
                  "reason": "Solving a chain: a chain holds exactly when its two inequalities both hold, so the region is the region of the system of the two."
                },
                {
                  "step": "The boundary $2x - 7y = -14$ crosses the axes at $(-7, 0)$ and $(0, 2)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary $2x - 7y = 14$ crosses the axes at $(7, 0)$ and $(0, -2)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The two boundaries are parallel, both of slope $\\dfrac{2}{7}$.",
                  "reason": "Equal slopes mean parallel or the same line: the two lines share their left side and have different right sides, so they never meet."
                },
                {
                  "step": "At $(0, 0)$, $2 \\cdot 0 - 7 \\cdot 0 = 0$, and $-14 < 0 < 14$ is true.",
                  "reason": "Test point: the origin lies on neither boundary, and it lies between the two lines."
                },
                {
                  "step": "The region is the strip between the two lines.",
                  "reason": "Region of a system of inequalities: the points that satisfy both lie on the side of each line that holds the origin, which is the strip between them.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-35.svg",
                    "alt": "Two parallel lines, both dashed, with the strip between them shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $-21 < -3x - 7y < 21$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed line $-3x - 7y = -21$",
                  "shaded below $-3x - 7y = -21$",
                  "dashed line $-3x - 7y = 21$",
                  "shaded above $-3x - 7y = 21$",
                  "test point $(0, 0)$ satisfies both"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $-21 < -3x - 7y < 21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain holds exactly when $-21 < -3x - 7y$ and $-3x - 7y < 21$ both hold.",
                  "reason": "Solving a chain: a chain holds exactly when its two inequalities both hold, so the region is the region of the system of the two."
                },
                {
                  "step": "The boundary $-3x - 7y = -21$ crosses the axes at $(7, 0)$ and $(0, 3)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary $-3x - 7y = 21$ crosses the axes at $(-7, 0)$ and $(0, -3)$ and is dashed.",
                  "reason": "Boundary line, solid or dashed: the sign $<$ is strict, so the points of the line are not in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The two boundaries are parallel, both of slope $-\\dfrac{3}{7}$.",
                  "reason": "Equal slopes mean parallel or the same line: the two lines share their left side and have different right sides, so they never meet."
                },
                {
                  "step": "At $(0, 0)$, $-3 \\cdot 0 - 7 \\cdot 0 = 0$, and $-21 < 0 < 21$ is true.",
                  "reason": "Test point: the origin lies on neither boundary, and it lies between the two lines."
                },
                {
                  "step": "The region is the strip between the two lines.",
                  "reason": "Region of a system of inequalities: the points that satisfy both lie on the side of each line that holds the origin, which is the strip between them.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-36.svg",
                    "alt": "Two parallel lines, both dashed, with the strip between them shaded."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $-15 \\le 3x - 5y \\le 15$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid line $3x - 5y = -15$",
                  "shaded below $3x - 5y = -15$",
                  "solid line $3x - 5y = 15$",
                  "shaded above $3x - 5y = 15$",
                  "test point $(0, 0)$ satisfies both"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $-15 \\le 3x - 5y \\le 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain holds exactly when $-15 \\le 3x - 5y$ and $3x - 5y \\le 15$ both hold.",
                  "reason": "Solving a chain: a chain holds exactly when its two inequalities both hold, so the region is the region of the system of the two."
                },
                {
                  "step": "The boundary $3x - 5y = -15$ crosses the axes at $(-5, 0)$ and $(0, 3)$ and is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The boundary $3x - 5y = 15$ crosses the axes at $(5, 0)$ and $(0, -3)$ and is solid.",
                  "reason": "Boundary line, solid or dashed: the sign $\\le$ is nonstrict, so the points of the line are in the region. Putting $0$ in place of each letter in turn gives the two points where it meets the axes."
                },
                {
                  "step": "The two boundaries are parallel, both of slope $\\dfrac{3}{5}$.",
                  "reason": "Equal slopes mean parallel or the same line: the two lines share their left side and have different right sides, so they never meet."
                },
                {
                  "step": "At $(0, 0)$, $3 \\cdot 0 - 5 \\cdot 0 = 0$, and $-15 \\le 0 \\le 15$ is true.",
                  "reason": "Test point: the origin lies on neither boundary, and it lies between the two lines."
                },
                {
                  "step": "The region is the strip between the two lines.",
                  "reason": "Region of a system of inequalities: the points that satisfy both lie on the side of each line that holds the origin, which is the strip between them.",
                  "figure": {
                    "file": "linear-inequalities-in-two-variables-37.svg",
                    "alt": "Two parallel lines, both solid, with the strip between them shaded."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t131-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution, which sketches the region $3x - 4y \\ge 5$ by putting $y$ alone, and write that line right.",
            "given": [
              "$3x - 4y \\ge 5$",
              "$-4y \\ge 5 - 3x$",
              "$y \\ge \\dfrac{3x - 5}{4}$",
              "The boundary $y = \\dfrac{3x - 5}{4}$ is solid.",
              "The region lies above the boundary."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, which sketches the region $3x - 4y \\ge 5$ by putting $y$ alone, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Adding the same number: line 2 takes $3x$ from both sides, so the sign stays as it is."
              },
              {
                "step": "Line 3 divides both sides by $-4$ and keeps the sign $\\ge$.",
                "reason": "Multiplying by a negative number reverses the sign: dividing by $-4$ is multiplying by $-\\dfrac{1}{4}$, which is negative, so $\\ge$ becomes $\\le$."
              },
              {
                "step": "Line 3 written right is $y \\le \\dfrac{3x - 5}{4}$.",
                "reason": "Multiplying by a negative number reverses the sign: the region then lies on the other side of the boundary from the one the solution shades."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, which sketches the region $2x - 3y + 4 < 11$ by putting $y$ alone, and write that line right.",
              "given": [
                "$2x - 3y + 4 < 11$",
                "$2x - 3y < 7$",
                "$-3y < 7 - 2x$",
                "$y < \\dfrac{2x - 7}{3}$",
                "The boundary $y = \\dfrac{2x - 7}{3}$ is dashed.",
                "The region lies below the boundary."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y > (2*x-7)/3",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which sketches the region $2x - 3y + 4 < 11$ by putting $y$ alone, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Adding the same number: line 2 takes $4$ from both sides and line 3 takes $2x$ from both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 4 divides both sides by $-3$ and keeps the sign $<$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-3$ is multiplying by $-\\dfrac{1}{3}$, which is negative, so $<$ becomes $>$."
                },
                {
                  "step": "Line 4 written right is $y > \\dfrac{2x - 7}{3}$.",
                  "reason": "Multiplying by a negative number reverses the sign: the region then lies on the other side of the boundary from the one the solution shades."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which sketches the region $5x - 2y \\le -3$ by putting $y$ alone, and write that line right.",
              "given": [
                "$5x - 2y \\le -3$",
                "$-2y \\le -3 - 5x$",
                "$y \\le \\dfrac{5x + 3}{2}$",
                "The boundary $y = \\dfrac{5x + 3}{2}$ is solid.",
                "The region lies below the boundary."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y >= (5*x+3)/2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which sketches the region $5x - 2y \\le -3$ by putting $y$ alone, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Adding the same number: line 2 takes $5x$ from both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 3 divides both sides by $-2$ and keeps the sign $\\le$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-2$ is multiplying by $-\\dfrac{1}{2}$, which is negative, so $\\le$ becomes $\\ge$."
                },
                {
                  "step": "Line 3 written right is $y \\ge \\dfrac{5x + 3}{2}$.",
                  "reason": "Multiplying by a negative number reverses the sign: the region then lies on the other side of the boundary from the one the solution shades."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which sketches the region $-3x - 5y - 6 > -2$ by putting $y$ alone, and write that line right.",
              "given": [
                "$-3x - 5y - 6 > -2$",
                "$-3x - 5y > 4$",
                "$-5y > 4 + 3x$",
                "$y > \\dfrac{-3x - 4}{5}$",
                "The boundary $y = \\dfrac{-3x - 4}{5}$ is dashed.",
                "The region lies above the boundary."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y < (-3*x-4)/5",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which sketches the region $-3x - 5y - 6 > -2$ by putting $y$ alone, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Adding the same number: line 2 adds $6$ to both sides and line 3 takes $-3x$ from both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 4 divides both sides by $-5$ and keeps the sign $>$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing by $-5$ is multiplying by $-\\dfrac{1}{5}$, which is negative, so $>$ becomes $<$."
                },
                {
                  "step": "Line 4 written right is $y < \\dfrac{-3x - 4}{5}$.",
                  "reason": "Multiplying by a negative number reverses the sign: the region then lies on the other side of the boundary from the one the solution shades."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution, which sketches the region $3x + 5y - 5 < 2 + 3y$ by putting $y$ alone, and write that line right.",
            "given": [
              "$3x + 5y - 5 < 2 + 3y$",
              "$3x + 5y < 7 + 3y$",
              "$3x + 2y < 7$",
              "$2y < 7 + 3x$",
              "$y < \\dfrac{7 + 3x}{2}$",
              "The boundary $y = \\dfrac{7 + 3x}{2}$ is dashed.",
              "The region lies below the boundary."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, which sketches the region $3x + 5y - 5 < 2 + 3y$ by putting $y$ alone, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 3 are right.",
                "reason": "Adding the same number: line 2 adds $5$ to both sides and line 3 takes $3y$ from both sides, so the sign stays as it is."
              },
              {
                "step": "Line 4 moves $3x$ to the right side without changing its sign.",
                "reason": "Adding the same number: taking $3x$ from both sides is adding $-3x$ to both sides, so the term changes its sign on the right."
              },
              {
                "step": "Line 4 written right is $2y < 7 - 3x$.",
                "reason": "Adding the same number: the sign of the inequality stays as it is, and only the moved term changes its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, which sketches the region $4x + 3y - 6 \\ge -1$ by putting $y$ alone, and write that line right.",
              "given": [
                "$4x + 3y - 6 \\ge -1$",
                "$4x + 3y \\ge 5$",
                "$3y \\ge 5 + 4x$",
                "$y \\ge \\dfrac{5 + 4x}{3}$",
                "The boundary $y = \\dfrac{5 + 4x}{3}$ is solid.",
                "The region lies above the boundary."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3*y >= 5-4*x",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which sketches the region $4x + 3y - 6 \\ge -1$ by putting $y$ alone, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Adding the same number: line 2 adds $6$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 3 moves $4x$ to the right side without changing its sign.",
                  "reason": "Adding the same number: taking $4x$ from both sides is adding $-4x$ to both sides, so the term changes its sign on the right."
                },
                {
                  "step": "Line 3 written right is $3y \\ge 5 - 4x$.",
                  "reason": "Adding the same number: the sign of the inequality stays as it is, and only the moved term changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which sketches the region $-5x + 6y + 6 > 10 + 4y$ by putting $y$ alone, and write that line right.",
              "given": [
                "$-5x + 6y + 6 > 10 + 4y$",
                "$-5x + 6y > 4 + 4y$",
                "$-5x + 2y > 4$",
                "$2y > 4 - 5x$",
                "$y > \\dfrac{4 - 5x}{2}$",
                "The boundary $y = \\dfrac{4 - 5x}{2}$ is dashed.",
                "The region lies above the boundary."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*y > 4+5*x",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which sketches the region $-5x + 6y + 6 > 10 + 4y$ by putting $y$ alone, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Adding the same number: line 2 takes $6$ from both sides and line 3 takes $4y$ from both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 4 moves $-5x$ to the right side without changing its sign.",
                  "reason": "Adding the same number: taking $-5x$ from both sides is adding $5x$ to both sides, so the term changes its sign on the right."
                },
                {
                  "step": "Line 4 written right is $2y > 4 + 5x$.",
                  "reason": "Adding the same number: the sign of the inequality stays as it is, and only the moved term changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, which sketches the region $2x + 5y + 9 \\le 5$ by putting $y$ alone, and write that line right.",
              "given": [
                "$2x + 5y + 9 \\le 5$",
                "$2x + 5y \\le -4$",
                "$5y \\le -4 + 2x$",
                "$y \\le \\dfrac{-4 + 2x}{5}$",
                "The boundary $y = \\dfrac{-4 + 2x}{5}$ is solid.",
                "The region lies below the boundary."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*y <= -4-2*x",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, which sketches the region $2x + 5y + 9 \\le 5$ by putting $y$ alone, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Adding the same number: line 2 takes $9$ from both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 3 moves $2x$ to the right side without changing its sign.",
                  "reason": "Adding the same number: taking $2x$ from both sides is adding $-2x$ to both sides, so the term changes its sign on the right."
                },
                {
                  "step": "Line 3 written right is $5y \\le -4 - 2x$.",
                  "reason": "Adding the same number: the sign of the inequality stays as it is, and only the moved term changes its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t131-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-6, 0)$ and $(0, 5)$, with $y$ alone on the left.",
            "figure": {
              "file": "linear-inequalities-in-two-variables-45.svg",
              "alt": "A dashed line through (−6, 0) and (0, 5), with the side holding the origin shaded."
            },
            "lines": [
              {
                "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-6, 0)$ and $(0, 5)$, with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The boundary passes through $(-6, 0)$ and $(0, 5)$, so its slope is $\\dfrac{5 - 0}{0 - (-6)} = \\dfrac{5}{6}$.",
                "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
              },
              {
                "step": "The boundary is $y = \\dfrac{5}{6}x + 5$.",
                "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, 5)$."
              },
              {
                "step": "The boundary is dashed, so the sign is strict.",
                "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
              },
              {
                "step": "The origin is inside the shaded region, and there $y = 0$ and the right side is $5$, so the sign must make $0 < 5$ true.",
                "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
              },
              {
                "step": "$y < \\dfrac{5}{6}x + 5$",
                "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-2, 0)$ and $(0, 6)$, with $y$ alone on the left.",
              "figure": {
                "file": "linear-inequalities-in-two-variables-46.svg",
                "alt": "A dashed line through (−2, 0) and (0, 6), with the side away from the origin shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y > 3*x+6",
              "lines": [
                {
                  "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-2, 0)$ and $(0, 6)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary passes through $(-2, 0)$ and $(0, 6)$, so its slope is $\\dfrac{6 - 0}{0 - (-2)} = 3$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "The boundary is $y = 3x + 6$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, 6)$."
                },
                {
                  "step": "The boundary is dashed, so the sign is strict.",
                  "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
                },
                {
                  "step": "The origin is outside the shaded region, and there $y = 0$ and the right side is $6$, so the sign must make $0 > 6$ false.",
                  "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
                },
                {
                  "step": "$y > 3x + 6$",
                  "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
                }
              ]
            },
            {
              "prompt": "Write the inequality of the shaded region in the figure, whose boundary passes through $(4, 0)$ and $(0, 3)$, with $y$ alone on the left.",
              "figure": {
                "file": "linear-inequalities-in-two-variables-47.svg",
                "alt": "A solid line through (4, 0) and (0, 3), with the side away from the origin shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y >= -3*x/4+3",
              "lines": [
                {
                  "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(4, 0)$ and $(0, 3)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary passes through $(4, 0)$ and $(0, 3)$, so its slope is $\\dfrac{3 - 0}{0 - 4} = -\\dfrac{3}{4}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "The boundary is $y = -\\dfrac{3}{4}x + 3$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, 3)$."
                },
                {
                  "step": "The boundary is solid, so the sign is nonstrict.",
                  "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
                },
                {
                  "step": "The origin is outside the shaded region, and there $y = 0$ and the right side is $3$, so the sign must make $0 \\ge 3$ false.",
                  "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
                },
                {
                  "step": "$y \\ge -\\dfrac{3}{4}x + 3$",
                  "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
                }
              ]
            },
            {
              "prompt": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-6, 0)$ and $(0, -3)$, with $y$ alone on the left.",
              "figure": {
                "file": "linear-inequalities-in-two-variables-48.svg",
                "alt": "A solid line through (−6, 0) and (0, −3), with the side holding the origin shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y >= -x/2-3",
              "lines": [
                {
                  "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-6, 0)$ and $(0, -3)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary passes through $(-6, 0)$ and $(0, -3)$, so its slope is $\\dfrac{-3 - 0}{0 - (-6)} = -\\dfrac{1}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "The boundary is $y = -\\dfrac{1}{2}x - 3$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -3)$."
                },
                {
                  "step": "The boundary is solid, so the sign is nonstrict.",
                  "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
                },
                {
                  "step": "The origin is inside the shaded region, and there $y = 0$ and the right side is $-3$, so the sign must make $0 \\ge -3$ true.",
                  "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
                },
                {
                  "step": "$y \\ge -\\dfrac{1}{2}x - 3$",
                  "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(-4, 0)$ and $(0, -5)$ and through $(6, 0)$ and $(0, -3)$, each with $y$ alone on the left, joined by \"and\".",
            "figure": {
              "file": "linear-inequalities-in-two-variables-56.svg",
              "alt": "A solid line through (−4, 0) and (0, −5) and a dashed line through (6, 0) and (0, −3), with the part around (2, −4) shaded."
            },
            "lines": [
              {
                "step": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(-4, 0)$ and $(0, -5)$ and through $(6, 0)$ and $(0, -3)$, each with $y$ alone on the left, joined by \"and\".",
                "reason": "This is the problem as given."
              },
              {
                "step": "The line through $(-4, 0)$ and $(0, -5)$ has slope $\\dfrac{-5 - 0}{0 - (-4)} = -\\dfrac{5}{4}$.",
                "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
              },
              {
                "step": "That boundary is $y = -\\dfrac{5}{4}x - 5$.",
                "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -5)$."
              },
              {
                "step": "It is solid, and the origin is on the shaded side, so the inequality is $y \\ge -\\dfrac{5}{4}x - 5$.",
                "reason": "Test point: at the origin $0 \\ge -5$ is true, and the line style fixes whether the sign is strict."
              },
              {
                "step": "The line through $(6, 0)$ and $(0, -3)$ has slope $\\dfrac{-3 - 0}{0 - 6} = \\dfrac{1}{2}$.",
                "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
              },
              {
                "step": "That boundary is $y = \\dfrac{1}{2}x - 3$.",
                "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -3)$."
              },
              {
                "step": "It is dashed, and the origin is off the shaded side, so the inequality is $y < \\dfrac{1}{2}x - 3$.",
                "reason": "Test point: at the origin $0 < -3$ is false, and the line style fixes whether the sign is strict."
              },
              {
                "step": "The inequalities are $y \\ge -\\dfrac{5}{4}x - 5$ and $y < \\dfrac{1}{2}x - 3$.",
                "reason": "Region of a system of inequalities: the shaded part is where both hold, so the two inequalities are joined by \"and\"."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(8, 0)$ and $(0, 4)$ and through $(2, 0)$ and $(0, -5)$, each with $y$ alone on the left, joined by \"and\".",
              "figure": {
                "file": "linear-inequalities-in-two-variables-57.svg",
                "alt": "A dashed line through (8, 0) and (0, 4) and a solid line through (2, 0) and (0, −5), with the part around (4, −1) shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y < -x/2+4 and y <= 5*x/2-5",
              "lines": [
                {
                  "step": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(8, 0)$ and $(0, 4)$ and through $(2, 0)$ and $(0, -5)$, each with $y$ alone on the left, joined by \"and\".",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line through $(8, 0)$ and $(0, 4)$ has slope $\\dfrac{4 - 0}{0 - 8} = -\\dfrac{1}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "That boundary is $y = -\\dfrac{1}{2}x + 4$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, 4)$."
                },
                {
                  "step": "It is dashed, and the origin is on the shaded side, so the inequality is $y < -\\dfrac{1}{2}x + 4$.",
                  "reason": "Test point: at the origin $0 < 4$ is true, and the line style fixes whether the sign is strict."
                },
                {
                  "step": "The line through $(2, 0)$ and $(0, -5)$ has slope $\\dfrac{-5 - 0}{0 - 2} = \\dfrac{5}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "That boundary is $y = \\dfrac{5}{2}x - 5$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -5)$."
                },
                {
                  "step": "It is solid, and the origin is off the shaded side, so the inequality is $y \\le \\dfrac{5}{2}x - 5$.",
                  "reason": "Test point: at the origin $0 \\le -5$ is false, and the line style fixes whether the sign is strict."
                },
                {
                  "step": "The inequalities are $y < -\\dfrac{1}{2}x + 4$ and $y \\le \\dfrac{5}{2}x - 5$.",
                  "reason": "Region of a system of inequalities: the shaded part is where both hold, so the two inequalities are joined by \"and\"."
                }
              ]
            },
            {
              "prompt": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(-4, 0)$ and $(0, 2)$ and through $(-6, 0)$ and $(0, -4)$, each with $y$ alone on the left, joined by \"and\".",
              "figure": {
                "file": "linear-inequalities-in-two-variables-58.svg",
                "alt": "Two dashed lines, one through (−4, 0) and (0, 2) and one through (−6, 0) and (0, −4), with the part around (−2, 3) shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y > x/2+2 and y > -2*x/3-4",
              "lines": [
                {
                  "step": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(-4, 0)$ and $(0, 2)$ and through $(-6, 0)$ and $(0, -4)$, each with $y$ alone on the left, joined by \"and\".",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line through $(-4, 0)$ and $(0, 2)$ has slope $\\dfrac{2 - 0}{0 - (-4)} = \\dfrac{1}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "That boundary is $y = \\dfrac{1}{2}x + 2$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, 2)$."
                },
                {
                  "step": "It is dashed, and the origin is off the shaded side, so the inequality is $y > \\dfrac{1}{2}x + 2$.",
                  "reason": "Test point: at the origin $0 > 2$ is false, and the line style fixes whether the sign is strict."
                },
                {
                  "step": "The line through $(-6, 0)$ and $(0, -4)$ has slope $\\dfrac{-4 - 0}{0 - (-6)} = -\\dfrac{2}{3}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "That boundary is $y = -\\dfrac{2}{3}x - 4$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -4)$."
                },
                {
                  "step": "It is dashed, and the origin is on the shaded side, so the inequality is $y > -\\dfrac{2}{3}x - 4$.",
                  "reason": "Test point: at the origin $0 > -4$ is true, and the line style fixes whether the sign is strict."
                },
                {
                  "step": "The inequalities are $y > \\dfrac{1}{2}x + 2$ and $y > -\\dfrac{2}{3}x - 4$.",
                  "reason": "Region of a system of inequalities: the shaded part is where both hold, so the two inequalities are joined by \"and\"."
                }
              ]
            },
            {
              "prompt": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(4, 0)$ and $(0, -2)$ and through $(2, 0)$ and $(0, -6)$, each with $y$ alone on the left, joined by \"and\".",
              "figure": {
                "file": "linear-inequalities-in-two-variables-59.svg",
                "alt": "A solid line through (4, 0) and (0, −2) and a dashed line through (2, 0) and (0, −6), with the part around (3, −3) shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y <= x/2-2 and y < 3*x-6",
              "lines": [
                {
                  "step": "Write the two inequalities of the shaded region in the figure, whose boundaries pass through $(4, 0)$ and $(0, -2)$ and through $(2, 0)$ and $(0, -6)$, each with $y$ alone on the left, joined by \"and\".",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line through $(4, 0)$ and $(0, -2)$ has slope $\\dfrac{-2 - 0}{0 - 4} = \\dfrac{1}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "That boundary is $y = \\dfrac{1}{2}x - 2$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -2)$."
                },
                {
                  "step": "It is solid, and the origin is off the shaded side, so the inequality is $y \\le \\dfrac{1}{2}x - 2$.",
                  "reason": "Test point: at the origin $0 \\le -2$ is false, and the line style fixes whether the sign is strict."
                },
                {
                  "step": "The line through $(2, 0)$ and $(0, -6)$ has slope $\\dfrac{-6 - 0}{0 - 2} = 3$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "That boundary is $y = 3x - 6$.",
                  "reason": "Slope-intercept form: the line $y=mx+b$ has slope $m$ and $y$-intercept $(0, b)$, here $(0, -6)$."
                },
                {
                  "step": "It is dashed, and the origin is off the shaded side, so the inequality is $y < 3x - 6$.",
                  "reason": "Test point: at the origin $0 < -6$ is false, and the line style fixes whether the sign is strict."
                },
                {
                  "step": "The inequalities are $y \\le \\dfrac{1}{2}x - 2$ and $y < 3x - 6$.",
                  "reason": "Region of a system of inequalities: the shaded part is where both hold, so the two inequalities are joined by \"and\"."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inequality of the shaded region in the figure, whose boundary passes through $(1, 3)$ and $(3, 7)$, with $y$ alone on the left.",
            "figure": {
              "file": "linear-inequalities-in-two-variables-74.svg",
              "alt": "A dashed line through (1, 3) and (3, 7), with the side holding the origin shaded."
            },
            "lines": [
              {
                "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(1, 3)$ and $(3, 7)$, with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The slope of the boundary is $\\dfrac{7 - 3}{3 - 1} = 2$.",
                "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
              },
              {
                "step": "The boundary is $y - 3 = 2(x - 1)$.",
                "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
              },
              {
                "step": "With $y$ alone, the boundary is $y = 2x + 1$.",
                "reason": "Adding the same number: the bracket is multiplied out by the distributive law, and the same number is added to both sides to leave $y$ alone."
              },
              {
                "step": "The boundary is dashed, so the sign is strict.",
                "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
              },
              {
                "step": "The origin is inside the shaded region, and there $y = 0$ and the right side is $1$, so the sign must make $0 < 1$ true.",
                "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
              },
              {
                "step": "$y < 2x + 1$",
                "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-2, 4)$ and $(2, -2)$, with $y$ alone on the left.",
              "figure": {
                "file": "linear-inequalities-in-two-variables-75.svg",
                "alt": "A solid line through (−2, 4) and (2, −2), with the side away from the origin shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y >= -3*x/2+1",
              "lines": [
                {
                  "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-2, 4)$ and $(2, -2)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The slope of the boundary is $\\dfrac{-2 - 4}{2 - (-2)} = -\\dfrac{3}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "The boundary is $y - 4 = -\\dfrac{3}{2}(x + 2)$.",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "With $y$ alone, the boundary is $y = -\\dfrac{3}{2}x + 1$.",
                  "reason": "Adding the same number: the bracket is multiplied out by the distributive law, and the same number is added to both sides to leave $y$ alone."
                },
                {
                  "step": "The boundary is solid, so the sign is nonstrict.",
                  "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
                },
                {
                  "step": "The origin is outside the shaded region, and there $y = 0$ and the right side is $1$, so the sign must make $0 \\ge 1$ false.",
                  "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
                },
                {
                  "step": "$y \\ge -\\dfrac{3}{2}x + 1$",
                  "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
                }
              ]
            },
            {
              "prompt": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-1, -5)$ and $(2, 4)$, with $y$ alone on the left.",
              "figure": {
                "file": "linear-inequalities-in-two-variables-76.svg",
                "alt": "A solid line through (−1, −5) and (2, 4), with the side away from the origin shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y <= 3*x-2",
              "lines": [
                {
                  "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(-1, -5)$ and $(2, 4)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The slope of the boundary is $\\dfrac{4 - (-5)}{2 - (-1)} = 3$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "The boundary is $y + 5 = 3(x + 1)$.",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "With $y$ alone, the boundary is $y = 3x - 2$.",
                  "reason": "Adding the same number: the bracket is multiplied out by the distributive law, and the same number is added to both sides to leave $y$ alone."
                },
                {
                  "step": "The boundary is solid, so the sign is nonstrict.",
                  "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
                },
                {
                  "step": "The origin is outside the shaded region, and there $y = 0$ and the right side is $-2$, so the sign must make $0 \\le -2$ false.",
                  "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
                },
                {
                  "step": "$y \\le 3x - 2$",
                  "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
                }
              ]
            },
            {
              "prompt": "Write the inequality of the shaded region in the figure, whose boundary passes through $(2, 5)$ and $(4, 4)$, with $y$ alone on the left.",
              "figure": {
                "file": "linear-inequalities-in-two-variables-77.svg",
                "alt": "A dashed line through (2, 5) and (4, 4), with the side away from the origin shaded."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y > -x/2+6",
              "lines": [
                {
                  "step": "Write the inequality of the shaded region in the figure, whose boundary passes through $(2, 5)$ and $(4, 4)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The slope of the boundary is $\\dfrac{4 - 5}{4 - 2} = -\\dfrac{1}{2}$.",
                  "reason": "Slope: the change in $y$ divided by the change in $x$ between two points of the line."
                },
                {
                  "step": "The boundary is $y - 5 = -\\dfrac{1}{2}(x - 2)$.",
                  "reason": "Point-slope form: the line through $(x_1, y_1)$ with slope $m$ is $y - y_1 = m(x - x_1)$, with each value put in place of its letter."
                },
                {
                  "step": "With $y$ alone, the boundary is $y = -\\dfrac{1}{2}x + 6$.",
                  "reason": "Adding the same number: the bracket is multiplied out by the distributive law, and the same number is added to both sides to leave $y$ alone."
                },
                {
                  "step": "The boundary is dashed, so the sign is strict.",
                  "reason": "Boundary line, solid or dashed: a dashed line leaves its points out, which a strict sign does, and a solid line takes them in."
                },
                {
                  "step": "The origin is outside the shaded region, and there $y = 0$ and the right side is $6$, so the sign must make $0 > 6$ false.",
                  "reason": "Test point: the origin is not on the boundary, so it fixes the direction of the sign."
                },
                {
                  "step": "$y > -\\dfrac{1}{2}x + 6$",
                  "reason": "Boundary line, solid or dashed: the line style gives a strict or nonstrict sign, the test point gives its direction, and the boundary gives the right side."
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
