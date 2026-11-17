export default {
  "number": 132,
  "title": "Greatest and least values under linear conditions",
  "section": 6,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "272-280, 283-285"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the greatest value of $3x + 2y$ for $x \\ge 0$, $y \\ge 0$, $x + y \\le 8$ and $x + 3y \\le 12$.",
    "form": "Answer as an integer.",
    "answer": "24",
    "solution": [
      "Find the greatest value of $3x + 2y$ for $x \\ge 0$, $y \\ge 0$, $x + y \\le 8$ and $x + 3y \\le 12$.",
      "The vertices of the region are $(0, 0)$, $(8, 0)$, $(6, 2)$ and $(0, 4)$.",
      "There $3x + 2y$ is $0$, $24$, $22$ and $8$.",
      "The greatest value is $24$."
    ]
  },
  "ideas": [
    {
      "name": "Greatest and least value",
      "concrete": "For whole numbers $n$ with $4n + 3 \\le 30$, the numbers $n$ can be are $0$, $1$, $2$, $3$, $4$, $5$ and $6$. The value $6$ is one of them, and none of them is more than $6$, so $6$ is the greatest value of $n$; in the same way $0$ is the least value.",
      "general": "The **greatest value** of a quantity over a set of allowed cases is a value the quantity takes at one of the cases, with no case giving more. The **least value** is a value it takes at one of the cases, with no case giving less."
    },
    {
      "name": "A greatest value needs a bound and a case that reaches it",
      "concrete": "For numbers $x$ with $0 \\le x \\le 5$, no $x$ is more than $5$, and $x = 5$ is allowed, so the greatest value of $x$ is $5$. For numbers $x$ with $0 \\le x < 5$, no $x$ reaches $5$, and each allowed $x$ is passed by the allowed number halfway from it to $5$, so there is no greatest value.",
      "general": "A number $M$ is the greatest value of a quantity over a set of cases when two things are shown: the quantity is at most $M$ in every case (the bound), and one case gives exactly $M$ (the case that reaches it). A bound that no case reaches is not a greatest value. A least value needs, in the same way, a bound from below and a case that reaches it."
    },
    {
      "name": "Vertex of a region",
      "concrete": "The region of $x \\ge 0$, $y \\ge 0$ and $2x + 3y \\le 12$ is a triangle. Its corners are $(0, 0)$, where $x = 0$ meets $y = 0$; $(6, 0)$, where $2x + 3y = 12$ meets $y = 0$; and $(0, 4)$, where $2x + 3y = 12$ meets $x = 0$.",
      "general": "A **vertex** of the region of a system of linear inequalities is a point of the region where two of its boundary lines meet: a corner of the region. It is found by solving the two equations of the boundary lines as a system and checking that the point satisfies every other inequality.",
      "figure": {
        "file": "linear-optimisation-5.svg",
        "alt": "The region of the conditions shaded, a shape with corners at (0, 0), (0, 4), (6, 0)."
      }
    },
    {
      "name": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices",
      "concrete": "Over the triangle with vertices $(0, 0)$, $(6, 0)$ and $(0, 4)$, the expression $5x + 2y$ is $0$, $30$ and $8$ at the vertices. So its greatest value over the whole triangle is $30$, at $(6, 0)$, and its least value is $0$, at $(0, 0)$.",
      "general": "For numbers $a$ and $b$, let a system of nonstrict linear inequalities ($\\le$ or $\\ge$) have a region that is bounded: it lies inside some rectangle. Then the expression $ax + by$ has a greatest and a least value over the region, and each is taken at a vertex. So the greatest value is the greatest of the values at the vertices, and the least value is the least of them. This is taken as a stated fact: the lines $ax + by = k$ for different $k$ are parallel, and the last of them that still touches the region touches it at a corner."
    }
  ],
  "kinds": [
    {
      "id": "t132-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest value of $6x + 5y$ for $x \\ge 0$, $y \\ge 0$, $4x + 3y \\le 36$ and $2x + 3y \\le 24$.",
            "lines": [
              {
                "step": "Find the greatest value of $6x + 5y$ for $x \\ge 0$, $y \\ge 0$, $4x + 3y \\le 36$ and $2x + 3y \\le 24$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $y = 0$ the conditions give $4x \\le 36$ and $2x \\le 24$, so $x \\le 9$ and $x \\le 12$, and the region meets the $x$-axis from $(0, 0)$ to $(9, 0)$.",
                "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
              },
              {
                "step": "At $x = 0$ the conditions give $3y \\le 36$ and $3y \\le 24$, so $y \\le 12$ and $y \\le 8$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 8)$.",
                "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
              },
              {
                "step": "The lines $4x + 3y = 36$ and $2x + 3y = 24$ meet at $(6, 4)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                "reason": "Elimination: $(4x + 3y) - (2x + 3y) = 36 - 24$ gives $2x = 12$, and back-substitution gives $y$."
              },
              {
                "step": "The values of $6x + 5y$ at the vertices $(0, 0)$, $(9, 0)$, $(6, 4)$, $(0, 8)$ are $0$, $54$, $56$, $40$.",
                "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn.",
                "figure": {
                  "file": "linear-optimisation-1.svg",
                  "alt": "The region of the conditions shaded, a shape with corners at (0, 0), (9, 0), (6, 4), (0, 8)."
                }
              },
              {
                "step": "The greatest value is $56$.",
                "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $8x + 7y$ for $x \\ge 0$, $y \\ge 0$, $5x + 2y \\le 45$ and $2x + 7y \\le 49$.",
              "form": "Answer as an integer.",
              "answer": "91",
              "lines": [
                {
                  "step": "Find the greatest value of $8x + 7y$ for $x \\ge 0$, $y \\ge 0$, $5x + 2y \\le 45$ and $2x + 7y \\le 49$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$ the conditions give $5x \\le 45$ and $2x \\le 49$, so $x \\le 9$ and $x \\le \\dfrac{49}{2}$, and the region meets the $x$-axis from $(0, 0)$ to $(9, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $2y \\le 45$ and $7y \\le 49$, so $y \\le \\dfrac{45}{2}$ and $y \\le 7$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 7)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines $5x + 2y = 45$ and $2x + 7y = 49$ meet at $(7, 5)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Elimination: $7(5x + 2y) - 2(2x + 7y) = 315 - 98$ gives $31x = 217$, and back-substitution gives $y$."
                },
                {
                  "step": "The values of $8x + 7y$ at the vertices $(0, 0)$, $(9, 0)$, $(7, 5)$, $(0, 7)$ are $0$, $72$, $91$, $49$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest value is $91$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $5x + 3y$ for $x \\ge 0$, $y \\ge 0$, $4x + 5y \\le 48$ and $4x + 7y \\le 56$.",
              "form": "Answer as an integer.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find the greatest value of $5x + 3y$ for $x \\ge 0$, $y \\ge 0$, $4x + 5y \\le 48$ and $4x + 7y \\le 56$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$ the conditions give $4x \\le 48$ and $4x \\le 56$, so $x \\le 12$ and $x \\le 14$, and the region meets the $x$-axis from $(0, 0)$ to $(12, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $5y \\le 48$ and $7y \\le 56$, so $y \\le \\dfrac{48}{5}$ and $y \\le 8$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 8)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines $4x + 5y = 48$ and $4x + 7y = 56$ meet at $(7, 4)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Elimination: $7(4x + 5y) - 5(4x + 7y) = 336 - 280$ gives $8x = 56$, and back-substitution gives $y$."
                },
                {
                  "step": "The values of $5x + 3y$ at the vertices $(0, 0)$, $(12, 0)$, $(7, 4)$, $(0, 8)$ are $0$, $60$, $47$, $24$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest value is $60$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $-6x - 5y$ for $x \\ge 0$, $y \\ge 0$, $7x + 4y \\le 56$ and $3x + 4y \\le 40$.",
              "form": "Answer as an integer.",
              "answer": "-59",
              "lines": [
                {
                  "step": "Find the least value of $-6x - 5y$ for $x \\ge 0$, $y \\ge 0$, $7x + 4y \\le 56$ and $3x + 4y \\le 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$ the conditions give $7x \\le 56$ and $3x \\le 40$, so $x \\le 8$ and $x \\le \\dfrac{40}{3}$, and the region meets the $x$-axis from $(0, 0)$ to $(8, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $4y \\le 56$ and $4y \\le 40$, so $y \\le 14$ and $y \\le 10$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 10)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines $7x + 4y = 56$ and $3x + 4y = 40$ meet at $(4, 7)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Elimination: $(7x + 4y) - (3x + 4y) = 56 - 40$ gives $4x = 16$, and back-substitution gives $y$."
                },
                {
                  "step": "The values of $-6x - 5y$ at the vertices $(0, 0)$, $(8, 0)$, $(4, 7)$, $(0, 10)$ are $0$, $-48$, $-59$, $-50$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The least value is $-59$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the least of the four values is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $-5x + 4y$ for $5x - 3y \\ge -6$, $2x + 3y \\le 27$ and $8x - 9y \\le 3$.",
            "lines": [
              {
                "step": "Find the greatest value of $-5x + 4y$ for $5x - 3y \\ge -6$, $2x + 3y \\le 27$ and $8x - 9y \\le 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The boundary lines of the first and second conditions meet at $(3, 7)$, and there $8 \\cdot 3 - 9 \\cdot 7 = -39$, so the point satisfies the third condition, $8x - 9y \\le 3$, and is a vertex.",
                "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
              },
              {
                "step": "The boundary lines of the first and third conditions meet at $(-3, -3)$, and there $2 \\cdot (-3) + 3 \\cdot (-3) = -15$, so the point satisfies the second condition, $2x + 3y \\le 27$, and is a vertex.",
                "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
              },
              {
                "step": "The boundary lines of the second and third conditions meet at $(6, 5)$, and there $5 \\cdot 6 - 3 \\cdot 5 = 15$, so the point satisfies the first condition, $5x - 3y \\ge -6$, and is a vertex.",
                "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
              },
              {
                "step": "The values of $-5x + 4y$ at the vertices $(3, 7)$, $(-3, -3)$, $(6, 5)$ are $13$, $3$, $-10$.",
                "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn.",
                "figure": {
                  "file": "linear-optimisation-2.svg",
                  "alt": "The region of the conditions shaded, a shape with corners at (3, 7), (−3, −3), (6, 5)."
                }
              },
              {
                "step": "The greatest value is $13$.",
                "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the three values is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $4x - 6y$ for $8x - 3y \\ge -7$, $3x + 4y \\le 23$ and $5x - 7y \\le 11$.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the greatest value of $4x - 6y$ for $8x - 3y \\ge -7$, $3x + 4y \\le 23$ and $5x - 7y \\le 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary lines of the first and second conditions meet at $(1, 5)$, and there $5 \\cdot 1 - 7 \\cdot 5 = -30$, so the point satisfies the third condition, $5x - 7y \\le 11$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The boundary lines of the first and third conditions meet at $(-2, -3)$, and there $3 \\cdot (-2) + 4 \\cdot (-3) = -18$, so the point satisfies the second condition, $3x + 4y \\le 23$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The boundary lines of the second and third conditions meet at $(5, 2)$, and there $8 \\cdot 5 - 3 \\cdot 2 = 34$, so the point satisfies the first condition, $8x - 3y \\ge -7$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The values of $4x - 6y$ at the vertices $(1, 5)$, $(-2, -3)$, $(5, 2)$ are $-26$, $10$, $8$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest value is $10$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the three values is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $6x + 2y$ for $3x + 2y \\ge 4$, $5x + 3y \\le 8$ and $7x + 4y \\ge 10$.",
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "Find the least value of $6x + 2y$ for $3x + 2y \\ge 4$, $5x + 3y \\le 8$ and $7x + 4y \\ge 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary lines of the first and second conditions meet at $(4, -4)$, and there $7 \\cdot 4 + 4 \\cdot (-4) = 12$, so the point satisfies the third condition, $7x + 4y \\ge 10$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The boundary lines of the first and third conditions meet at $(2, -1)$, and there $5 \\cdot 2 + 3 \\cdot (-1) = 7$, so the point satisfies the second condition, $5x + 3y \\le 8$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The boundary lines of the second and third conditions meet at $(-2, 6)$, and there $3 \\cdot (-2) + 2 \\cdot 6 = 6$, so the point satisfies the first condition, $3x + 2y \\ge 4$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The values of $6x + 2y$ at the vertices $(4, -4)$, $(2, -1)$, $(-2, 6)$ are $16$, $10$, $0$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The least value is $0$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the least of the three values is the least value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $-5x - 6y$ for $5x + 7y \\le 46$, $2x + 9y \\ge 37$ and $3x - 2y \\ge -22$.",
              "form": "Answer as an integer.",
              "answer": "-10",
              "lines": [
                {
                  "step": "Find the greatest value of $-5x - 6y$ for $5x + 7y \\le 46$, $2x + 9y \\ge 37$ and $3x - 2y \\ge -22$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The boundary lines of the first and second conditions meet at $(5, 3)$, and there $3 \\cdot 5 - 2 \\cdot 3 = 9$, so the point satisfies the third condition, $3x - 2y \\ge -22$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The boundary lines of the first and third conditions meet at $(-2, 8)$, and there $2 \\cdot (-2) + 9 \\cdot 8 = 68$, so the point satisfies the second condition, $2x + 9y \\ge 37$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The boundary lines of the second and third conditions meet at $(-4, 5)$, and there $5 \\cdot (-4) + 7 \\cdot 5 = 15$, so the point satisfies the first condition, $5x + 7y \\le 46$, and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the third condition."
                },
                {
                  "step": "The values of $-5x - 6y$ at the vertices $(5, 3)$, $(-2, 8)$, $(-4, 5)$ are $-43$, $-38$, $-10$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest value is $-10$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the three values is the greatest value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t132-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $3x + 4y$ has a greatest value for $x \\ge 0$, $y \\ge 0$ and $2x + 5y \\ge 20$.",
            "lines": [
              {
                "step": "Decide whether $3x + 4y$ has a greatest value for $x \\ge 0$, $y \\ge 0$ and $2x + 5y \\ge 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The points $(t, 0)$ for every number $t \\ge 10$ satisfy every condition, and there $3x + 4y = 3t$, which passes every number as $t$ grows.",
                "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of the point in each condition and in the expression.",
                "figure": {
                  "file": "linear-optimisation-3.svg",
                  "alt": "The region of the conditions shaded: it runs on without end to the right."
                }
              },
              {
                "step": "No.",
                "reason": "A greatest value needs a bound and a case that reaches it: no number bounds the values from above, so no value is the greatest."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $4x + 5y$ has a greatest value for $x \\ge 0$, $y \\ge 0$, $5x + 2y \\le 30$ and $2x + 4y \\le 28$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $4x + 5y$ has a greatest value for $x \\ge 0$, $y \\ge 0$, $5x + 2y \\le 30$ and $2x + 4y \\le 28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The region is bounded and every condition is nonstrict; its vertices are $(0, 0)$, $(0, 7)$, $(6, 0)$, $(4, 5)$, and the greatest value of $4x + 5y$ at them is $41$, at $(4, 5)$.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the greatest value over the whole region is the greatest of the values at the vertices."
                },
                {
                  "step": "Yes.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no point gives more than $41$, and the point $(4, 5)$ gives $41$."
                }
              ]
            },
            {
              "prompt": "Decide whether $2x + 5y$ has a greatest value for $x > 0$, $y > 0$ and $4x + 3y < 24$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $2x + 5y$ has a greatest value for $x > 0$, $y > 0$ and $4x + 3y < 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points $(t, 8 - 7t)$ for $0 < t \\le 1$ satisfy every condition, and there $2x + 5y = 40 - 33t$, which is below $40$ and passes every number below $40$ as $t$ shrinks.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of the point in each condition and in the expression."
                },
                {
                  "step": "No.",
                  "reason": "A greatest value needs a bound and a case that reaches it: for every allowed point $2x + 5y < \\dfrac{5}{3}(4x + 3y) < 40$, since $x > 0$, so every value is below $40$; each value is passed by one of these points, so no value is the greatest."
                }
              ]
            },
            {
              "prompt": "Decide whether $2x + 3y$ has a greatest value for $x \\ge 0$, $y \\ge 0$ and $3x - 2y \\le 6$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $2x + 3y$ has a greatest value for $x \\ge 0$, $y \\ge 0$ and $3x - 2y \\le 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points $(0, t)$ for every number $t \\ge 0$ satisfy every condition, and there $2x + 3y = 3t$, which passes every number as $t$ grows.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of the point in each condition and in the expression."
                },
                {
                  "step": "No.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no number bounds the values from above, so no value is the greatest."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t132-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest number of notebooks Mira can buy at $7$ euros each from $100$ euros, if she must keep at least $18$ euros for the bus.",
            "lines": [
              {
                "step": "Find the greatest number of notebooks Mira can buy at $7$ euros each from $100$ euros, if she must keep at least $18$ euros for the bus.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $n$ be the number of notebooks; then $7n + 18 \\le 100$.",
                "reason": "Writing a sentence as an equation: the notebooks cost $7n$ euros, and with the $18$ euros kept the total is at most $100$."
              },
              {
                "step": "$7n \\le 82$",
                "reason": "Adding the same number: $-18$ is added to both sides."
              },
              {
                "step": "$n \\le \\dfrac{82}{7}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{7}$."
              },
              {
                "step": "Since $n$ is a whole number, $n \\le 11$.",
                "reason": "Multiplying by a positive number: $7 \\cdot 11 = 77$, which is at most $82$, and $7 \\cdot 12 = 84$, which is more, so the whole numbers with $n \\le \\dfrac{82}{7}$ are those up to $11$."
              },
              {
                "step": "At $n = 11$, $7 \\cdot 11 + 18 = 95$, and $95 \\le 100$ is true.",
                "reason": "Substituting a value: $n$ is replaced by $(11)$."
              },
              {
                "step": "The greatest number is $11$.",
                "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $11$ satisfies the condition, and $n = 11$ does."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest number of $12$ kg crates a lift can carry with a $75$ kg driver, if the load must be at most $400$ kg.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Find the greatest number of $12$ kg crates a lift can carry with a $75$ kg driver, if the load must be at most $400$ kg.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of crates; then $12n + 75 \\le 400$.",
                  "reason": "Writing a sentence as an equation: the crates weigh $12n$ kg, and with the driver the load is at most $400$ kg."
                },
                {
                  "step": "$12n \\le 325$",
                  "reason": "Adding the same number: $-75$ is added to both sides."
                },
                {
                  "step": "$n \\le \\dfrac{325}{12}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{12}$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 27$.",
                  "reason": "Multiplying by a positive number: $12 \\cdot 27 = 324$, which is at most $325$, and $12 \\cdot 28 = 336$, which is more, so the whole numbers with $n \\le \\dfrac{325}{12}$ are those up to $27$."
                },
                {
                  "step": "At $n = 27$, $12 \\cdot 27 + 75 = 399$, and $399 \\le 400$ is true.",
                  "reason": "Substituting a value: $n$ is replaced by $(27)$."
                },
                {
                  "step": "The greatest number is $27$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $27$ satisfies the condition, and $n = 27$ does."
                }
              ]
            },
            {
              "prompt": "Find the least number of weeks Omar must save $15$ euros a week, starting with $40$ euros, to have at least $260$ euros.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find the least number of weeks Omar must save $15$ euros a week, starting with $40$ euros, to have at least $260$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of weeks; then $15n + 40 \\ge 260$.",
                  "reason": "Writing a sentence as an equation: after $n$ weeks Omar has $40 + 15n$ euros, which must be at least $260$."
                },
                {
                  "step": "$15n \\ge 220$",
                  "reason": "Adding the same number: $-40$ is added to both sides."
                },
                {
                  "step": "$n \\ge \\dfrac{44}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{15}$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\ge 15$.",
                  "reason": "Multiplying by a positive number: $15 \\cdot 15 = 225$, which is at least $220$, and $15 \\cdot 14 = 210$, which is less, so the whole numbers with $n \\ge \\dfrac{44}{3}$ are those from $15$ up."
                },
                {
                  "step": "At $n = 15$, $15 \\cdot 15 + 40 = 265$, and $265 \\ge 260$ is true.",
                  "reason": "Substituting a value: $n$ is replaced by $(15)$."
                },
                {
                  "step": "The least number is $15$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ below $15$ satisfies the condition, and $n = 15$ does."
                }
              ]
            },
            {
              "prompt": "Find the greatest number of $9$ cm tiles that fit in a row along a $200$ cm wall, if $23$ cm at the end are kept for a pipe.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find the greatest number of $9$ cm tiles that fit in a row along a $200$ cm wall, if $23$ cm at the end are kept for a pipe.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of tiles; then $9n + 23 \\le 200$.",
                  "reason": "Writing a sentence as an equation: the tiles take $9n$ cm, and with the $23$ cm kept the length is at most $200$ cm."
                },
                {
                  "step": "$9n \\le 177$",
                  "reason": "Adding the same number: $-23$ is added to both sides."
                },
                {
                  "step": "$n \\le \\dfrac{59}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{9}$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 19$.",
                  "reason": "Multiplying by a positive number: $9 \\cdot 19 = 171$, which is at most $177$, and $9 \\cdot 20 = 180$, which is more, so the whole numbers with $n \\le \\dfrac{59}{3}$ are those up to $19$."
                },
                {
                  "step": "At $n = 19$, $9 \\cdot 19 + 23 = 194$, and $194 \\le 200$ is true.",
                  "reason": "Substituting a value: $n$ is replaced by $(19)$."
                },
                {
                  "step": "The greatest number is $19$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $19$ satisfies the condition, and $n = 19$ does."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest number of pairs that can join so that at least seven elevenths of the choir are sopranos. A choir has $41$ sopranos and $19$ altos. Singers now join only in pairs of one soprano and one alto.",
            "lines": [
              {
                "step": "Find the greatest number of pairs that can join so that at least seven elevenths of the choir are sopranos. A choir has $41$ sopranos and $19$ altos. Singers now join only in pairs of one soprano and one alto.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $n$ be the number of pairs; then $\\dfrac{41 + n}{60 + 2n} \\ge \\dfrac{7}{11}$.",
                "reason": "Writing a sentence as an equation: there are then $41 + n$ sopranos out of $60 + 2n$ singers."
              },
              {
                "step": "$11(41 + n) \\ge 7(60 + 2n)$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $11(60 + 2n)$, which is positive."
              },
              {
                "step": "$451 + 11n \\ge 420 + 14n$",
                "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
              },
              {
                "step": "$31 \\ge 3n$",
                "reason": "Adding the same number: $-11n$ and $-420$ are added to both sides."
              },
              {
                "step": "$n \\le \\dfrac{31}{3}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{3}$, and the two sides are read the other way round."
              },
              {
                "step": "Since $n$ is a whole number, $n \\le 10$.",
                "reason": "Multiplying by a positive number: $3 \\cdot 10 = 30$, which is at most $31$, and $3 \\cdot 11 = 33$, which is more, so the whole numbers with $n \\le \\dfrac{31}{3}$ are those up to $10$."
              },
              {
                "step": "At $n = 10$ the fraction is $\\dfrac{51}{80}$, and $11 \\cdot 51 = 561$ is at least $7 \\cdot 80 = 560$.",
                "reason": "Substituting a value: $n$ is replaced by $(10)$."
              },
              {
                "step": "The greatest number is $10$.",
                "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $10$ satisfies the condition, and $n = 10$ does."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest number of pairs that can join so that at least five eighths of the club are adults. A club has $34$ adults and $7$ children. Members now join only in pairs of one adult and one child.",
              "form": "Answer as an integer.",
              "answer": "33",
              "lines": [
                {
                  "step": "Find the greatest number of pairs that can join so that at least five eighths of the club are adults. A club has $34$ adults and $7$ children. Members now join only in pairs of one adult and one child.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of pairs; then $\\dfrac{34 + n}{41 + 2n} \\ge \\dfrac{5}{8}$.",
                  "reason": "Writing a sentence as an equation: there are then $34 + n$ adults out of $41 + 2n$ members."
                },
                {
                  "step": "$8(34 + n) \\ge 5(41 + 2n)$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8(41 + 2n)$, which is positive."
                },
                {
                  "step": "$272 + 8n \\ge 205 + 10n$",
                  "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$67 \\ge 2n$",
                  "reason": "Adding the same number: $-8n$ and $-205$ are added to both sides."
                },
                {
                  "step": "$n \\le \\dfrac{67}{2}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$, and the two sides are read the other way round."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 33$.",
                  "reason": "Multiplying by a positive number: $2 \\cdot 33 = 66$, which is at most $67$, and $2 \\cdot 34 = 68$, which is more, so the whole numbers with $n \\le \\dfrac{67}{2}$ are those up to $33$."
                },
                {
                  "step": "At $n = 33$ the fraction is $\\dfrac{67}{107}$, and $8 \\cdot 67 = 536$ is at least $5 \\cdot 107 = 535$.",
                  "reason": "Substituting a value: $n$ is replaced by $(33)$."
                },
                {
                  "step": "The greatest number is $33$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $33$ satisfies the condition, and $n = 33$ does."
                }
              ]
            },
            {
              "prompt": "Find the greatest number of pairs that can be added so that at least seven tenths of the plants are roses. A garden has $52$ roses and $14$ lilies. Plants are now added only in pairs of one rose and one lily.",
              "form": "Answer as an integer.",
              "answer": "14",
              "lines": [
                {
                  "step": "Find the greatest number of pairs that can be added so that at least seven tenths of the plants are roses. A garden has $52$ roses and $14$ lilies. Plants are now added only in pairs of one rose and one lily.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of pairs; then $\\dfrac{52 + n}{66 + 2n} \\ge \\dfrac{7}{10}$.",
                  "reason": "Writing a sentence as an equation: there are then $52 + n$ roses out of $66 + 2n$ plants."
                },
                {
                  "step": "$10(52 + n) \\ge 7(66 + 2n)$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $10(66 + 2n)$, which is positive."
                },
                {
                  "step": "$520 + 10n \\ge 462 + 14n$",
                  "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$58 \\ge 4n$",
                  "reason": "Adding the same number: $-10n$ and $-462$ are added to both sides."
                },
                {
                  "step": "$n \\le \\dfrac{29}{2}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$, and the two sides are read the other way round."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 14$.",
                  "reason": "Multiplying by a positive number: $4 \\cdot 14 = 56$, which is at most $58$, and $4 \\cdot 15 = 60$, which is more, so the whole numbers with $n \\le \\dfrac{29}{2}$ are those up to $14$."
                },
                {
                  "step": "At $n = 14$ the fraction is $\\dfrac{66}{94}$, and $10 \\cdot 66 = 660$ is at least $7 \\cdot 94 = 658$.",
                  "reason": "Substituting a value: $n$ is replaced by $(14)$."
                },
                {
                  "step": "The greatest number is $14$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $14$ satisfies the condition, and $n = 14$ does."
                }
              ]
            },
            {
              "prompt": "Find the greatest number of pairs that can join so that at least five eighths of the team are forwards. A team has $27$ forwards and $8$ backs. Players now join only in pairs of one forward and one back.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the greatest number of pairs that can join so that at least five eighths of the team are forwards. A team has $27$ forwards and $8$ backs. Players now join only in pairs of one forward and one back.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of pairs; then $\\dfrac{27 + n}{35 + 2n} \\ge \\dfrac{5}{8}$.",
                  "reason": "Writing a sentence as an equation: there are then $27 + n$ forwards out of $35 + 2n$ players."
                },
                {
                  "step": "$8(27 + n) \\ge 5(35 + 2n)$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8(35 + 2n)$, which is positive."
                },
                {
                  "step": "$216 + 8n \\ge 175 + 10n$",
                  "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$41 \\ge 2n$",
                  "reason": "Adding the same number: $-8n$ and $-175$ are added to both sides."
                },
                {
                  "step": "$n \\le \\dfrac{41}{2}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$, and the two sides are read the other way round."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\le 20$.",
                  "reason": "Multiplying by a positive number: $2 \\cdot 20 = 40$, which is at most $41$, and $2 \\cdot 21 = 42$, which is more, so the whole numbers with $n \\le \\dfrac{41}{2}$ are those up to $20$."
                },
                {
                  "step": "At $n = 20$ the fraction is $\\dfrac{47}{75}$, and $8 \\cdot 47 = 376$ is at least $5 \\cdot 75 = 375$.",
                  "reason": "Substituting a value: $n$ is replaced by $(20)$."
                },
                {
                  "step": "The greatest number is $20$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ above $20$ satisfies the condition, and $n = 20$ does."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least number of red beads to add so that at least three fifths of the beads are red. A bag holds $8$ red beads and $23$ blue beads. Red beads are added one at a time.",
            "lines": [
              {
                "step": "Find the least number of red beads to add so that at least three fifths of the beads are red. A bag holds $8$ red beads and $23$ blue beads. Red beads are added one at a time.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $n$ be the number of red beads added; then $\\dfrac{8 + n}{31 + n} \\ge \\dfrac{3}{5}$.",
                "reason": "Writing a sentence as an equation: there are then $8 + n$ red beads out of $31 + n$ beads."
              },
              {
                "step": "$5(8 + n) \\ge 3(31 + n)$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $5(31 + n)$, which is positive."
              },
              {
                "step": "$40 + 5n \\ge 93 + 3n$",
                "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
              },
              {
                "step": "$2n \\ge 53$",
                "reason": "Adding the same number: $-3n$ and $-40$ are added to both sides."
              },
              {
                "step": "$n \\ge \\dfrac{53}{2}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$."
              },
              {
                "step": "Since $n$ is a whole number, $n \\ge 27$.",
                "reason": "Multiplying by a positive number: $2 \\cdot 27 = 54$, which is at least $53$, and $2 \\cdot 26 = 52$, which is less, so the whole numbers with $n \\ge \\dfrac{53}{2}$ are those from $27$ up."
              },
              {
                "step": "At $n = 27$ the fraction is $\\dfrac{35}{58}$, and $5 \\cdot 35 = 175$ is at least $3 \\cdot 58 = 174$.",
                "reason": "Substituting a value: $n$ is replaced by $(27)$."
              },
              {
                "step": "The least number is $27$.",
                "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ below $27$ satisfies the condition, and $n = 27$ does."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least number of green pens to add so that at least two fifths of the pens are green. A box holds $5$ green pens and $31$ black pens. Green pens are added one at a time.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find the least number of green pens to add so that at least two fifths of the pens are green. A box holds $5$ green pens and $31$ black pens. Green pens are added one at a time.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of green pens added; then $\\dfrac{5 + n}{36 + n} \\ge \\dfrac{2}{5}$.",
                  "reason": "Writing a sentence as an equation: there are then $5 + n$ green pens out of $36 + n$ pens."
                },
                {
                  "step": "$5(5 + n) \\ge 2(36 + n)$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $5(36 + n)$, which is positive."
                },
                {
                  "step": "$25 + 5n \\ge 72 + 2n$",
                  "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$3n \\ge 47$",
                  "reason": "Adding the same number: $-2n$ and $-25$ are added to both sides."
                },
                {
                  "step": "$n \\ge \\dfrac{47}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\ge 16$.",
                  "reason": "Multiplying by a positive number: $3 \\cdot 16 = 48$, which is at least $47$, and $3 \\cdot 15 = 45$, which is less, so the whole numbers with $n \\ge \\dfrac{47}{3}$ are those from $16$ up."
                },
                {
                  "step": "At $n = 16$ the fraction is $\\dfrac{21}{52}$, and $5 \\cdot 21 = 105$ is at least $2 \\cdot 52 = 104$.",
                  "reason": "Substituting a value: $n$ is replaced by $(16)$."
                },
                {
                  "step": "The least number is $16$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ below $16$ satisfies the condition, and $n = 16$ does."
                }
              ]
            },
            {
              "prompt": "Find the least number of white marbles to add so that at least three fifths of the marbles are white. A jar holds $12$ white marbles and $45$ grey marbles. White marbles are added one at a time.",
              "form": "Answer as an integer.",
              "answer": "56",
              "lines": [
                {
                  "step": "Find the least number of white marbles to add so that at least three fifths of the marbles are white. A jar holds $12$ white marbles and $45$ grey marbles. White marbles are added one at a time.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of white marbles added; then $\\dfrac{12 + n}{57 + n} \\ge \\dfrac{3}{5}$.",
                  "reason": "Writing a sentence as an equation: there are then $12 + n$ white marbles out of $57 + n$ marbles."
                },
                {
                  "step": "$5(12 + n) \\ge 3(57 + n)$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $5(57 + n)$, which is positive."
                },
                {
                  "step": "$60 + 5n \\ge 171 + 3n$",
                  "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$2n \\ge 111$",
                  "reason": "Adding the same number: $-3n$ and $-60$ are added to both sides."
                },
                {
                  "step": "$n \\ge \\dfrac{111}{2}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\ge 56$.",
                  "reason": "Multiplying by a positive number: $2 \\cdot 56 = 112$, which is at least $111$, and $2 \\cdot 55 = 110$, which is less, so the whole numbers with $n \\ge \\dfrac{111}{2}$ are those from $56$ up."
                },
                {
                  "step": "At $n = 56$ the fraction is $\\dfrac{68}{113}$, and $5 \\cdot 68 = 340$ is at least $3 \\cdot 113 = 339$.",
                  "reason": "Substituting a value: $n$ is replaced by $(56)$."
                },
                {
                  "step": "The least number is $56$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ below $56$ satisfies the condition, and $n = 56$ does."
                }
              ]
            },
            {
              "prompt": "Find the least number of maps to add so that at least two sevenths of the items are maps. A shelf holds $6$ maps and $38$ books. Maps are added one at a time.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the least number of maps to add so that at least two sevenths of the items are maps. A shelf holds $6$ maps and $38$ books. Maps are added one at a time.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $n$ be the number of maps added; then $\\dfrac{6 + n}{44 + n} \\ge \\dfrac{2}{7}$.",
                  "reason": "Writing a sentence as an equation: there are then $6 + n$ maps out of $44 + n$ items."
                },
                {
                  "step": "$7(6 + n) \\ge 2(44 + n)$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $7(44 + n)$, which is positive."
                },
                {
                  "step": "$42 + 7n \\ge 88 + 2n$",
                  "reason": "Multiplying out: each bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$5n \\ge 46$",
                  "reason": "Adding the same number: $-2n$ and $-42$ are added to both sides."
                },
                {
                  "step": "$n \\ge \\dfrac{46}{5}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "Since $n$ is a whole number, $n \\ge 10$.",
                  "reason": "Multiplying by a positive number: $5 \\cdot 10 = 50$, which is at least $46$, and $5 \\cdot 9 = 45$, which is less, so the whole numbers with $n \\ge \\dfrac{46}{5}$ are those from $10$ up."
                },
                {
                  "step": "At $n = 10$ the fraction is $\\dfrac{16}{54}$, and $7 \\cdot 16 = 112$ is at least $2 \\cdot 54 = 108$.",
                  "reason": "Substituting a value: $n$ is replaced by $(10)$."
                },
                {
                  "step": "The least number is $10$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: no whole number $n$ below $10$ satisfies the condition, and $n = 10$ does."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t132-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest income a day. A bakery makes $x$ trays of bread and $y$ trays of rolls a day. A tray of bread takes $3$ kg of flour and $2$ hours of oven time; a tray of rolls takes $2$ kg of flour and $4$ hours. The bakery has $36$ kg of flour and $40$ oven hours a day. A tray of bread sells for $50$ euros and a tray of rolls for $60$ euros.",
            "lines": [
              {
                "step": "Find the greatest income a day. A bakery makes $x$ trays of bread and $y$ trays of rolls a day. A tray of bread takes $3$ kg of flour and $2$ hours of oven time; a tray of rolls takes $2$ kg of flour and $4$ hours. The bakery has $36$ kg of flour and $40$ oven hours a day. A tray of bread sells for $50$ euros and a tray of rolls for $60$ euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of trays of bread and $y$ be the number of trays of rolls.",
                "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
              },
              {
                "step": "The conditions are $3x + 2y \\le 36$, $2x + 4y \\le 40$, $x \\ge 0$ and $y \\ge 0$.",
                "reason": "Writing a sentence as an equation: the flour used, $3x + 2y$ kg, is at most $36$ kg, the oven time, $2x + 4y$ hours, is at most $40$ hours, and neither number is negative."
              },
              {
                "step": "The income in euros is $50x + 60y$.",
                "reason": "Writing a sentence as an equation: the bread brings $50x$ euros and the rolls $60y$ euros."
              },
              {
                "step": "At $y = 0$ the conditions give $3x \\le 36$ and $2x \\le 40$, so $x \\le 12$ and $x \\le 20$, and the region meets the $x$-axis from $(0, 0)$ to $(12, 0)$.",
                "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
              },
              {
                "step": "At $x = 0$ the conditions give $2y \\le 36$ and $4y \\le 40$, so $y \\le 18$ and $y \\le 10$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 10)$.",
                "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
              },
              {
                "step": "The lines $3x + 2y = 36$ and $2x + 4y = 40$ meet at $(8, 6)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                "reason": "Elimination: $2(3x + 2y) - (2x + 4y) = 72 - 40$ gives $4x = 32$, and back-substitution gives $y$."
              },
              {
                "step": "The values of $50x + 60y$ at the vertices $(0, 0)$, $(12, 0)$, $(8, 6)$, $(0, 10)$ are $0$, $600$, $760$, $600$.",
                "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn.",
                "figure": {
                  "file": "linear-optimisation-4.svg",
                  "alt": "The region of the conditions shaded, a shape with corners at (0, 0), (12, 0), (8, 6), (0, 10)."
                }
              },
              {
                "step": "The greatest income is $760$ euros.",
                "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest income, and $(8, 6)$ has whole coordinates, so it is an allowed case."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest income a week. A workshop makes $x$ chairs and $y$ tables a week. Each chair takes $6$ kg of wood and $2$ hours of work; each table takes $7$ kg of wood and $3$ hours of work. The workshop has $96$ kg of wood and $36$ hours of work a week. Each chair sells for $60$ euros and each table for $80$ euros.",
              "form": "Answer as an integer.",
              "answer": "1020",
              "lines": [
                {
                  "step": "Find the greatest income a week. A workshop makes $x$ chairs and $y$ tables a week. Each chair takes $6$ kg of wood and $2$ hours of work; each table takes $7$ kg of wood and $3$ hours of work. The workshop has $96$ kg of wood and $36$ hours of work a week. Each chair sells for $60$ euros and each table for $80$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of chairs and $y$ be the number of tables.",
                  "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
                },
                {
                  "step": "The conditions are $6x + 7y \\le 96$, $2x + 3y \\le 36$, $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Writing a sentence as an equation: the kg of wood used, $6x + 7y$, is at most $96$, the hours of work used, $2x + 3y$, is at most $36$, and neither number is negative."
                },
                {
                  "step": "The income in euros is $60x + 80y$.",
                  "reason": "Writing a sentence as an equation: the chairs bring $60x$ euros and the tables $80y$ euros."
                },
                {
                  "step": "At $y = 0$ the conditions give $6x \\le 96$ and $2x \\le 36$, so $x \\le 16$ and $x \\le 18$, and the region meets the $x$-axis from $(0, 0)$ to $(16, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $7y \\le 96$ and $3y \\le 36$, so $y \\le \\dfrac{96}{7}$ and $y \\le 12$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 12)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines $6x + 7y = 96$ and $2x + 3y = 36$ meet at $(9, 6)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Elimination: $3(6x + 7y) - 7(2x + 3y) = 288 - 252$ gives $4x = 36$, and back-substitution gives $y$."
                },
                {
                  "step": "The values of $60x + 80y$ at the vertices $(0, 0)$, $(16, 0)$, $(9, 6)$, $(0, 12)$ are $0$, $960$, $1020$, $960$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest income is $1020$ euros.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest income, and $(9, 6)$ has whole coordinates, so it is an allowed case."
                }
              ]
            },
            {
              "prompt": "Find the greatest income a week. A workshop makes $x$ small boxes and $y$ large boxes a week. Each small box takes $4$ square metres of card and $3$ minutes of machine time; each large box takes $3$ square metres of card and $5$ minutes of machine time. The workshop has $32$ square metres of card and $35$ minutes of machine time a week. Each small box sells for $50$ euros and each large box for $20$ euros.",
              "form": "Answer as an integer.",
              "answer": "400",
              "lines": [
                {
                  "step": "Find the greatest income a week. A workshop makes $x$ small boxes and $y$ large boxes a week. Each small box takes $4$ square metres of card and $3$ minutes of machine time; each large box takes $3$ square metres of card and $5$ minutes of machine time. The workshop has $32$ square metres of card and $35$ minutes of machine time a week. Each small box sells for $50$ euros and each large box for $20$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of small boxes and $y$ be the number of large boxes.",
                  "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
                },
                {
                  "step": "The conditions are $4x + 3y \\le 32$, $3x + 5y \\le 35$, $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Writing a sentence as an equation: the square metres of card used, $4x + 3y$, is at most $32$, the minutes of machine time used, $3x + 5y$, is at most $35$, and neither number is negative."
                },
                {
                  "step": "The income in euros is $50x + 20y$.",
                  "reason": "Writing a sentence as an equation: the small boxes bring $50x$ euros and the large boxes $20y$ euros."
                },
                {
                  "step": "At $y = 0$ the conditions give $4x \\le 32$ and $3x \\le 35$, so $x \\le 8$ and $x \\le \\dfrac{35}{3}$, and the region meets the $x$-axis from $(0, 0)$ to $(8, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $3y \\le 32$ and $5y \\le 35$, so $y \\le \\dfrac{32}{3}$ and $y \\le 7$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 7)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines $4x + 3y = 32$ and $3x + 5y = 35$ meet at $(5, 4)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Elimination: $5(4x + 3y) - 3(3x + 5y) = 160 - 105$ gives $11x = 55$, and back-substitution gives $y$."
                },
                {
                  "step": "The values of $50x + 20y$ at the vertices $(0, 0)$, $(8, 0)$, $(5, 4)$, $(0, 7)$ are $0$, $400$, $330$, $140$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest income is $400$ euros.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest income, and $(8, 0)$ has whole coordinates, so it is an allowed case."
                }
              ]
            },
            {
              "prompt": "Find the greatest income a year. A farm sows $x$ hectares of wheat and $y$ hectares of oats a year. Each hectare of wheat takes $4$ bags of seed and $3$ days of work; each hectare of oats takes $5$ bags of seed and $4$ days of work. The farm has $72$ bags of seed and $56$ days of work a year. Each hectare of wheat brings $40$ euros and each hectare of oats $90$ euros.",
              "form": "Answer as an integer.",
              "answer": "1260",
              "lines": [
                {
                  "step": "Find the greatest income a year. A farm sows $x$ hectares of wheat and $y$ hectares of oats a year. Each hectare of wheat takes $4$ bags of seed and $3$ days of work; each hectare of oats takes $5$ bags of seed and $4$ days of work. The farm has $72$ bags of seed and $56$ days of work a year. Each hectare of wheat brings $40$ euros and each hectare of oats $90$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of hectares of wheat and $y$ be the number of hectares of oats.",
                  "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
                },
                {
                  "step": "The conditions are $4x + 5y \\le 72$, $3x + 4y \\le 56$, $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Writing a sentence as an equation: the bags of seed used, $4x + 5y$, is at most $72$, the days of work used, $3x + 4y$, is at most $56$, and neither number is negative."
                },
                {
                  "step": "The income in euros is $40x + 90y$.",
                  "reason": "Writing a sentence as an equation: the hectares of wheat bring $40x$ euros and the hectares of oats $90y$ euros."
                },
                {
                  "step": "At $y = 0$ the conditions give $4x \\le 72$ and $3x \\le 56$, so $x \\le 18$ and $x \\le \\dfrac{56}{3}$, and the region meets the $x$-axis from $(0, 0)$ to $(18, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $5y \\le 72$ and $4y \\le 56$, so $y \\le \\dfrac{72}{5}$ and $y \\le 14$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 14)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines $4x + 5y = 72$ and $3x + 4y = 56$ meet at $(8, 8)$, which satisfies $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Elimination: $4(4x + 5y) - 5(3x + 4y) = 288 - 280$ gives $x = 8$, and back-substitution gives $y$."
                },
                {
                  "step": "The values of $40x + 90y$ at the vertices $(0, 0)$, $(18, 0)$, $(8, 8)$, $(0, 14)$ are $0$, $720$, $1040$, $1260$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest income is $1260$ euros.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the four values is the greatest income."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest income a week. A workshop makes $x$ cupboards and $y$ bookcases a week. Each cupboard takes $5$ boards, $6$ hours of cutting and $6$ hours of varnishing; each bookcase takes $3$ boards, $2$ hours of cutting and $4$ hours of varnishing. The workshop has $59$ boards, $66$ hours of cutting and $76$ hours of varnishing a week. Each cupboard sells for $70$ euros and each bookcase for $40$ euros.",
            "lines": [
              {
                "step": "Find the greatest income a week. A workshop makes $x$ cupboards and $y$ bookcases a week. Each cupboard takes $5$ boards, $6$ hours of cutting and $6$ hours of varnishing; each bookcase takes $3$ boards, $2$ hours of cutting and $4$ hours of varnishing. The workshop has $59$ boards, $66$ hours of cutting and $76$ hours of varnishing a week. Each cupboard sells for $70$ euros and each bookcase for $40$ euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of cupboards and $y$ be the number of bookcases.",
                "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
              },
              {
                "step": "The conditions are $5x + 3y \\le 59$, $6x + 2y \\le 66$, $6x + 4y \\le 76$, $x \\ge 0$ and $y \\ge 0$.",
                "reason": "Writing a sentence as an equation: the boards used, $5x + 3y$, is at most $59$, the hours of cutting used, $6x + 2y$, is at most $66$, the hours of varnishing used, $6x + 4y$, is at most $76$, and neither number is negative."
              },
              {
                "step": "The income in euros is $70x + 40y$.",
                "reason": "Writing a sentence as an equation: the cupboards bring $70x$ euros and the bookcases $40y$ euros."
              },
              {
                "step": "At $y = 0$ the conditions give $5x \\le 59$, $6x \\le 66$ and $6x \\le 76$, so $x \\le 11$, and the region meets the $x$-axis from $(0, 0)$ to $(11, 0)$.",
                "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
              },
              {
                "step": "At $x = 0$ the conditions give $3y \\le 59$, $2y \\le 66$ and $4y \\le 76$, so $y \\le 19$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 19)$.",
                "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
              },
              {
                "step": "The lines of the first and second resources meet at $(10, 3)$, and there $6 \\cdot 10 + 4 \\cdot 3 = 72$, which is at most $76$, so the point satisfies the third condition and is a vertex.",
                "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
              },
              {
                "step": "The lines of the first and third resources meet at $(4, 13)$, and there $6 \\cdot 4 + 2 \\cdot 13 = 50$, which is at most $66$, so the point satisfies the second condition and is a vertex.",
                "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
              },
              {
                "step": "The lines of the second and third resources meet at $(\\dfrac{28}{3}, 5)$, and there $5 \\cdot \\dfrac{28}{3} + 3 \\cdot 5 = \\dfrac{185}{3}$, which is more than $59$, so the point fails the first condition and is not a vertex.",
                "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
              },
              {
                "step": "The values of $70x + 40y$ at the vertices $(0, 0)$, $(11, 0)$, $(10, 3)$, $(4, 13)$, $(0, 19)$ are $0$, $770$, $820$, $800$, $760$.",
                "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
              },
              {
                "step": "The greatest income is $820$ euros.",
                "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the five values is the greatest income, and $(10, 3)$ has whole coordinates, so it is an allowed case."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest income a week. A workshop makes $x$ sofas and $y$ armchairs a week. Each sofa takes $6$ metres of fabric, $5$ kg of foam and $4$ hours of work; each armchair takes $3$ metres of fabric, $4$ kg of foam and $4$ hours of work. The workshop has $48$ metres of fabric, $49$ kg of foam and $48$ hours of work a week. Each sofa sells for $70$ euros and each armchair for $50$ euros.",
              "form": "Answer as an integer.",
              "answer": "650",
              "lines": [
                {
                  "step": "Find the greatest income a week. A workshop makes $x$ sofas and $y$ armchairs a week. Each sofa takes $6$ metres of fabric, $5$ kg of foam and $4$ hours of work; each armchair takes $3$ metres of fabric, $4$ kg of foam and $4$ hours of work. The workshop has $48$ metres of fabric, $49$ kg of foam and $48$ hours of work a week. Each sofa sells for $70$ euros and each armchair for $50$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of sofas and $y$ be the number of armchairs.",
                  "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
                },
                {
                  "step": "The conditions are $6x + 3y \\le 48$, $5x + 4y \\le 49$, $4x + 4y \\le 48$, $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Writing a sentence as an equation: the metres of fabric used, $6x + 3y$, is at most $48$, the kg of foam used, $5x + 4y$, is at most $49$, the hours of work used, $4x + 4y$, is at most $48$, and neither number is negative."
                },
                {
                  "step": "The income in euros is $70x + 50y$.",
                  "reason": "Writing a sentence as an equation: the sofas bring $70x$ euros and the armchairs $50y$ euros."
                },
                {
                  "step": "At $y = 0$ the conditions give $6x \\le 48$, $5x \\le 49$ and $4x \\le 48$, so $x \\le 8$, and the region meets the $x$-axis from $(0, 0)$ to $(8, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $3y \\le 48$, $4y \\le 49$ and $4y \\le 48$, so $y \\le 12$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 12)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines of the first and second resources meet at $(5, 6)$, and there $4 \\cdot 5 + 4 \\cdot 6 = 44$, which is at most $48$, so the point satisfies the third condition and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The lines of the first and third resources meet at $(4, 8)$, and there $5 \\cdot 4 + 4 \\cdot 8 = 52$, which is more than $49$, so the point fails the second condition and is not a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The lines of the second and third resources meet at $(1, 11)$, and there $6 \\cdot 1 + 3 \\cdot 11 = 39$, which is at most $48$, so the point satisfies the first condition and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The values of $70x + 50y$ at the vertices $(0, 0)$, $(8, 0)$, $(5, 6)$, $(1, 11)$, $(0, 12)$ are $0$, $560$, $650$, $620$, $600$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest income is $650$ euros.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the five values is the greatest income, and $(5, 6)$ has whole coordinates, so it is an allowed case."
                }
              ]
            },
            {
              "prompt": "Find the greatest income a week. A workshop makes $x$ bracelets and $y$ rings a week. Each bracelet takes $2$ grams of silver, $2$ hours of shaping and $5$ hours of polishing; each ring takes $3$ grams of silver, $4$ hours of shaping and $5$ hours of polishing. The workshop has $45$ grams of silver, $56$ hours of shaping and $95$ hours of polishing a week. Each bracelet sells for $50$ euros and each ring for $70$ euros.",
              "form": "Answer as an integer.",
              "answer": "1090",
              "lines": [
                {
                  "step": "Find the greatest income a week. A workshop makes $x$ bracelets and $y$ rings a week. Each bracelet takes $2$ grams of silver, $2$ hours of shaping and $5$ hours of polishing; each ring takes $3$ grams of silver, $4$ hours of shaping and $5$ hours of polishing. The workshop has $45$ grams of silver, $56$ hours of shaping and $95$ hours of polishing a week. Each bracelet sells for $50$ euros and each ring for $70$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of bracelets and $y$ be the number of rings.",
                  "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
                },
                {
                  "step": "The conditions are $2x + 3y \\le 45$, $2x + 4y \\le 56$, $5x + 5y \\le 95$, $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Writing a sentence as an equation: the grams of silver used, $2x + 3y$, is at most $45$, the hours of shaping used, $2x + 4y$, is at most $56$, the hours of polishing used, $5x + 5y$, is at most $95$, and neither number is negative."
                },
                {
                  "step": "The income in euros is $50x + 70y$.",
                  "reason": "Writing a sentence as an equation: the bracelets bring $50x$ euros and the rings $70y$ euros."
                },
                {
                  "step": "At $y = 0$ the conditions give $2x \\le 45$, $2x \\le 56$ and $5x \\le 95$, so $x \\le 19$, and the region meets the $x$-axis from $(0, 0)$ to $(19, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $3y \\le 45$, $4y \\le 56$ and $5y \\le 95$, so $y \\le 14$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 14)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines of the first and second resources meet at $(6, 11)$, and there $5 \\cdot 6 + 5 \\cdot 11 = 85$, which is at most $95$, so the point satisfies the third condition and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The lines of the first and third resources meet at $(12, 7)$, and there $2 \\cdot 12 + 4 \\cdot 7 = 52$, which is at most $56$, so the point satisfies the second condition and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The lines of the second and third resources meet at $(10, 9)$, and there $2 \\cdot 10 + 3 \\cdot 9 = 47$, which is more than $45$, so the point fails the first condition and is not a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The values of $50x + 70y$ at the vertices $(0, 0)$, $(19, 0)$, $(6, 11)$, $(12, 7)$, $(0, 14)$ are $0$, $950$, $1070$, $1090$, $980$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest income is $1090$ euros.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the five values is the greatest income, and $(12, 7)$ has whole coordinates, so it is an allowed case."
                }
              ]
            },
            {
              "prompt": "Find the greatest income a week. A workshop makes $x$ drums and $y$ guitars a week. Each drum takes $5$ kg of wood, $2$ hours of carving and $7$ hours of tuning; each guitar takes $6$ kg of wood, $5$ hours of carving and $7$ hours of tuning. The workshop has $97$ kg of wood, $70$ hours of carving and $126$ hours of tuning a week. Each drum sells for $40$ euros and each guitar for $80$ euros.",
              "form": "Answer as an integer.",
              "answer": "1160",
              "lines": [
                {
                  "step": "Find the greatest income a week. A workshop makes $x$ drums and $y$ guitars a week. Each drum takes $5$ kg of wood, $2$ hours of carving and $7$ hours of tuning; each guitar takes $6$ kg of wood, $5$ hours of carving and $7$ hours of tuning. The workshop has $97$ kg of wood, $70$ hours of carving and $126$ hours of tuning a week. Each drum sells for $40$ euros and each guitar for $80$ euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of drums and $y$ be the number of guitars.",
                  "reason": "One letter for each unknown: each of the two numbers to choose gets its own letter."
                },
                {
                  "step": "The conditions are $5x + 6y \\le 97$, $2x + 5y \\le 70$, $7x + 7y \\le 126$, $x \\ge 0$ and $y \\ge 0$.",
                  "reason": "Writing a sentence as an equation: the kg of wood used, $5x + 6y$, is at most $97$, the hours of carving used, $2x + 5y$, is at most $70$, the hours of tuning used, $7x + 7y$, is at most $126$, and neither number is negative."
                },
                {
                  "step": "The income in euros is $40x + 80y$.",
                  "reason": "Writing a sentence as an equation: the drums bring $40x$ euros and the guitars $80y$ euros."
                },
                {
                  "step": "At $y = 0$ the conditions give $5x \\le 97$, $2x \\le 70$ and $7x \\le 126$, so $x \\le 18$, and the region meets the $x$-axis from $(0, 0)$ to $(18, 0)$.",
                  "reason": "Substituting a value: $y$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $x$."
                },
                {
                  "step": "At $x = 0$ the conditions give $6y \\le 97$, $5y \\le 70$ and $7y \\le 126$, so $y \\le 14$, and the region meets the $y$-axis from $(0, 0)$ to $(0, 14)$.",
                  "reason": "Substituting a value: $x$ is replaced by $(0)$ in each condition, and both sides are divided by the positive coefficient of $y$."
                },
                {
                  "step": "The lines of the first and second resources meet at $(5, 12)$, and there $7 \\cdot 5 + 7 \\cdot 12 = 119$, which is at most $126$, so the point satisfies the third condition and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The lines of the first and third resources meet at $(11, 7)$, and there $2 \\cdot 11 + 5 \\cdot 7 = 57$, which is at most $70$, so the point satisfies the second condition and is a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The lines of the second and third resources meet at $(\\dfrac{20}{3}, \\dfrac{34}{3})$, and there $5 \\cdot \\dfrac{20}{3} + 6 \\cdot \\dfrac{34}{3} = \\dfrac{304}{3}$, which is more than $97$, so the point fails the first condition and is not a vertex.",
                  "reason": "Vertex of a region: the point is found by elimination on the two boundary lines and checked against the other conditions."
                },
                {
                  "step": "The values of $40x + 80y$ at the vertices $(0, 0)$, $(18, 0)$, $(5, 12)$, $(11, 7)$, $(0, 14)$ are $0$, $720$, $1160$, $1000$, $1120$.",
                  "reason": "Substituting a value: $x$ and $y$ are replaced by the coordinates of each vertex in turn."
                },
                {
                  "step": "The greatest income is $1160$ euros.",
                  "reason": "The greatest and least values of a linear expression over a bounded region with nonstrict conditions occur at vertices: the region is bounded and every condition is nonstrict, so the greatest of the five values is the greatest income, and $(5, 12)$ has whole coordinates, so it is an allowed case."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t132-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $12$ to $30$.",
            "lines": [
              {
                "step": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $12$ to $30$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Take $n = 30$, the greatest number allowed.",
                "reason": "Multiplying by a positive number: for fixed $m$ and $k$, a greater $n$ gives a greater top, and dividing by the positive $k$ keeps that order."
              },
              {
                "step": "Then $m$ and $k$ are $12$ and $13$, the two least numbers left, in one order or the other.",
                "reason": "Reciprocals of numbers of the same sign reverse the order: with the top positive, a smaller $k$ gives a greater value, and a smaller $m$ gives a greater top, so neither takes a larger number while a smaller one is free."
              },
              {
                "step": "At $m = 12$, $k = 13$ the value is $\\dfrac{2 \\cdot 30 - 3 \\cdot 12}{13} = \\dfrac{24}{13}$, and at $m = 13$, $k = 12$ it is $\\dfrac{2 \\cdot 30 - 3 \\cdot 13}{12} = \\dfrac{21}{12} = \\dfrac{7}{4}$.",
                "reason": "Substituting a value: the letters are replaced by their numbers, and the fraction is put in lowest terms."
              },
              {
                "step": "Over the common denominator $52$ the two values are $\\dfrac{96}{52}$ and $\\dfrac{91}{52}$, so $\\dfrac{24}{13}$ is the greater.",
                "reason": "Simplest common denominator: with the same denominator, the fraction with the greater top is the greater."
              },
              {
                "step": "The greatest value is $\\dfrac{24}{13}$.",
                "reason": "Greatest and least value: the value is reached by the numbers above, and every other choice gives less."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $5$ to $30$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "42/5",
              "lines": [
                {
                  "step": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $5$ to $30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take $n = 30$, the greatest number allowed.",
                  "reason": "Multiplying by a positive number: for fixed $m$ and $k$, a greater $n$ gives a greater top, and dividing by the positive $k$ keeps that order."
                },
                {
                  "step": "Then $m$ and $k$ are $5$ and $6$, the two least numbers left, in one order or the other.",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: with the top positive, a smaller $k$ gives a greater value, and a smaller $m$ gives a greater top, so neither takes a larger number while a smaller one is free."
                },
                {
                  "step": "At $m = 5$, $k = 6$ the value is $\\dfrac{2 \\cdot 30 - 3 \\cdot 5}{6} = \\dfrac{45}{6} = \\dfrac{15}{2}$, and at $m = 6$, $k = 5$ it is $\\dfrac{2 \\cdot 30 - 3 \\cdot 6}{5} = \\dfrac{42}{5}$.",
                  "reason": "Substituting a value: the letters are replaced by their numbers, and the fraction is put in lowest terms."
                },
                {
                  "step": "Over the common denominator $10$ the two values are $\\dfrac{75}{10}$ and $\\dfrac{84}{10}$, so $\\dfrac{42}{5}$ is the greater.",
                  "reason": "Simplest common denominator: with the same denominator, the fraction with the greater top is the greater."
                },
                {
                  "step": "The greatest value is $\\dfrac{42}{5}$.",
                  "reason": "Greatest and least value: the value is reached by the numbers above, and every other choice gives less."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $14$ to $25$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8/15",
              "lines": [
                {
                  "step": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $14$ to $25$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take $n = 25$, the greatest number allowed.",
                  "reason": "Multiplying by a positive number: for fixed $m$ and $k$, a greater $n$ gives a greater top, and dividing by the positive $k$ keeps that order."
                },
                {
                  "step": "Then $m$ and $k$ are $14$ and $15$, the two least numbers left, in one order or the other.",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: with the top positive, a smaller $k$ gives a greater value, and a smaller $m$ gives a greater top, so neither takes a larger number while a smaller one is free."
                },
                {
                  "step": "At $m = 14$, $k = 15$ the value is $\\dfrac{2 \\cdot 25 - 3 \\cdot 14}{15} = \\dfrac{8}{15}$, and at $m = 15$, $k = 14$ it is $\\dfrac{2 \\cdot 25 - 3 \\cdot 15}{14} = \\dfrac{5}{14}$.",
                  "reason": "Substituting a value: the letters are replaced by their numbers, and the fraction is put in lowest terms."
                },
                {
                  "step": "Over the common denominator $210$ the two values are $\\dfrac{112}{210}$ and $\\dfrac{75}{210}$, so $\\dfrac{8}{15}$ is the greater.",
                  "reason": "Simplest common denominator: with the same denominator, the fraction with the greater top is the greater."
                },
                {
                  "step": "The greatest value is $\\dfrac{8}{15}$.",
                  "reason": "Greatest and least value: the value is reached by the numbers above, and every other choice gives less."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $23$ to $44$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "19/24",
              "lines": [
                {
                  "step": "Find the greatest value of $\\dfrac{2n - 3m}{k}$ for different whole numbers $n$, $m$ and $k$ from $23$ to $44$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Take $n = 44$, the greatest number allowed.",
                  "reason": "Multiplying by a positive number: for fixed $m$ and $k$, a greater $n$ gives a greater top, and dividing by the positive $k$ keeps that order."
                },
                {
                  "step": "Then $m$ and $k$ are $23$ and $24$, the two least numbers left, in one order or the other.",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: with the top positive, a smaller $k$ gives a greater value, and a smaller $m$ gives a greater top, so neither takes a larger number while a smaller one is free."
                },
                {
                  "step": "At $m = 23$, $k = 24$ the value is $\\dfrac{2 \\cdot 44 - 3 \\cdot 23}{24} = \\dfrac{19}{24}$, and at $m = 24$, $k = 23$ it is $\\dfrac{2 \\cdot 44 - 3 \\cdot 24}{23} = \\dfrac{16}{23}$.",
                  "reason": "Substituting a value: the letters are replaced by their numbers, and the fraction is put in lowest terms."
                },
                {
                  "step": "Over the common denominator $552$ the two values are $\\dfrac{437}{552}$ and $\\dfrac{384}{552}$, so $\\dfrac{19}{24}$ is the greater.",
                  "reason": "Simplest common denominator: with the same denominator, the fraction with the greater top is the greater."
                },
                {
                  "step": "The greatest value is $\\dfrac{19}{24}$.",
                  "reason": "Greatest and least value: the value is reached by the numbers above, and every other choice gives less."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t132-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find the greatest number of $8$ euro books Lea can buy from $150$ euros, if she must keep at least $35$ euros for lunch.",
            "given": [
              "Let $n$ be the number of books.",
              "$8n + 35 \\le 150$",
              "$8n + 35 \\le 150 = 8n$",
              "$n = \\dfrac{75}{4}$",
              "The greatest whole number of books is $18$."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find the greatest number of $8$ euro books Lea can buy from $150$ euros, if she must keep at least $35$ euros for lunch.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes $35$ from the left side alone and runs on with a second equals sign, so it states $150 = 8n$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $8n$ is the left side less $35$, not $150$."
              },
              {
                "step": "Line 3 written right is $8n \\le 115$.",
                "reason": "Adding the same number: $-35$ is added to both sides of line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the greatest number of $11$ kg boxes a cart can carry with a $45$ kg handle and frame, if the load must be at most $300$ kg, with $n$ the number of boxes.",
              "given": [
                "$11n + 45 \\le 300$",
                "$11n + 45 \\le 300 = 11n$",
                "$n = \\dfrac{300}{11}$",
                "The greatest whole number of boxes is $27$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 11*n <= 255",
              "lines": [
                {
                  "step": "The working is for this problem: Find the greatest number of $11$ kg boxes a cart can carry with a $45$ kg handle and frame, if the load must be at most $300$ kg, with $n$ the number of boxes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $45$ from the left side alone and runs on with a second equals sign, so it states $300 = 11n$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $11n$ is the left side less $45$, not $300$."
                },
                {
                  "step": "Line 2 written right is $11n \\le 255$.",
                  "reason": "Adding the same number: $-45$ is added to both sides of line 1."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the greatest number of $6$ minute songs a $95$ minute show can hold, if $17$ minutes go to a speech.",
              "given": [
                "Let $n$ be the number of songs.",
                "$6n + 17 \\le 95$",
                "$6n + 17 \\le 95 = 6n$",
                "$n = \\dfrac{95}{6}$",
                "The greatest whole number of songs is $15$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 6*n <= 78",
              "lines": [
                {
                  "step": "The working is for this problem: Find the greatest number of $6$ minute songs a $95$ minute show can hold, if $17$ minutes go to a speech.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $17$ from the left side alone and runs on with a second equals sign, so it states $95 = 6n$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $6n$ is the left side less $17$, not $95$."
                },
                {
                  "step": "Line 3 written right is $6n \\le 78$.",
                  "reason": "Adding the same number: $-17$ is added to both sides of line 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the greatest number of $9$ euro plants Tom can buy from $130$ euros, if he must keep at least $22$ euros for soil, with $n$ the number of plants.",
              "given": [
                "$9n + 22 \\le 130$",
                "$9n + 22 \\le 130 = 9n$",
                "$n = \\dfrac{130}{9}$",
                "The greatest whole number of plants is $14$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 9*n <= 108",
              "lines": [
                {
                  "step": "The working is for this problem: Find the greatest number of $9$ euro plants Tom can buy from $130$ euros, if he must keep at least $22$ euros for soil, with $n$ the number of plants.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $22$ from the left side alone and runs on with a second equals sign, so it states $130 = 9n$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $9n$ is the left side less $22$, not $130$."
                },
                {
                  "step": "Line 2 written right is $9n \\le 108$.",
                  "reason": "Adding the same number: $-22$ is added to both sides of line 1."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find the greatest number of $13$ cm frames that fit side by side on a $190$ cm wall, if $33$ cm at the end are kept for a door.",
            "given": [
              "Let $n$ be the number of frames.",
              "$13n + 33 \\le 190$",
              "$13n \\le 157$",
              "$13n \\le 157 = n$",
              "The greatest whole number of frames is $157$."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find the greatest number of $13$ cm frames that fit side by side on a $190$ cm wall, if $33$ cm at the end are kept for a door.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 divides the left side alone by $13$ and runs on with a second equals sign, so it states $157 = n$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $n$ is the left side divided by $13$, not $157$."
              },
              {
                "step": "Line 4 written right is $n \\le \\dfrac{157}{13}$.",
                "reason": "Multiplying by a positive number: both sides of line 3 are multiplied by $\\dfrac{1}{13}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the greatest number of $3$ euro rolls a team can buy from $58$ euros, if it must keep at least $16$ euros for water, with $n$ the number of rolls.",
              "given": [
                "$3n + 16 \\le 58$",
                "$3n \\le 42$",
                "$3n \\le 42 = n$",
                "The greatest whole number of rolls is $42$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: n <= 14",
              "lines": [
                {
                  "step": "The working is for this problem: Find the greatest number of $3$ euro rolls a team can buy from $58$ euros, if it must keep at least $16$ euros for water, with $n$ the number of rolls.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides the left side alone by $3$ and runs on with a second equals sign, so it states $42 = n$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $n$ is the left side divided by $3$, not $42$."
                },
                {
                  "step": "Line 3 written right is $n \\le 14$.",
                  "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $\\dfrac{1}{3}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the greatest number of $18$ kg sacks a hoist can lift with a $54$ kg hook, if the load must be at most $360$ kg.",
              "given": [
                "Let $n$ be the number of sacks.",
                "$18n + 54 \\le 360$",
                "$18n \\le 306$",
                "$18n \\le 306 = n$",
                "The greatest whole number of sacks is $306$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: n <= 17",
              "lines": [
                {
                  "step": "The working is for this problem: Find the greatest number of $18$ kg sacks a hoist can lift with a $54$ kg hook, if the load must be at most $360$ kg.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 divides the left side alone by $18$ and runs on with a second equals sign, so it states $306 = n$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $n$ is the left side divided by $18$, not $306$."
                },
                {
                  "step": "Line 4 written right is $n \\le 17$.",
                  "reason": "Multiplying by a positive number: both sides of line 3 are multiplied by $\\dfrac{1}{18}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the greatest number of $8$ minute games a $120$ minute lesson can hold, if $31$ minutes go to the warm-up, with $n$ the number of games.",
              "given": [
                "$8n + 31 \\le 120$",
                "$8n \\le 89$",
                "$8n \\le 89 = n$",
                "The greatest whole number of games is $89$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: n <= 89/8",
              "lines": [
                {
                  "step": "The working is for this problem: Find the greatest number of $8$ minute games a $120$ minute lesson can hold, if $31$ minutes go to the warm-up, with $n$ the number of games.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides the left side alone by $8$ and runs on with a second equals sign, so it states $89 = n$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $n$ is the left side divided by $8$, not $89$."
                },
                {
                  "step": "Line 3 written right is $n \\le \\dfrac{89}{8}$.",
                  "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $\\dfrac{1}{8}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t132-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: three times $x$ plus twice $y$ is at most $24$, and $y$ is at least $2$ more than $x$.",
            "lines": [
              {
                "step": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: three times $x$ plus twice $y$ is at most $24$, and $y$ is at least $2$ more than $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first condition is $3x + 2y \\le 24$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, and \"is at most\" gives the sign $\\le$."
              },
              {
                "step": "$2y \\le 24 - 3x$",
                "reason": "Adding the same number: $-3x$ is added to both sides."
              },
              {
                "step": "$y \\le \\dfrac{24 - 3x}{2}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$."
              },
              {
                "step": "The second condition is $y \\ge x + 2$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "Both together: $y \\le \\dfrac{24 - 3x}{2}$ and $y \\ge x + 2$",
                "reason": "Region of a system of inequalities: both conditions hold at once, so the two inequalities are joined by and."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: four times $x$ plus three times $y$ is less than $36$, and $y$ is more than twice $x$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y < (36-4*x)/3 and y > 2*x",
              "lines": [
                {
                  "step": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: four times $x$ plus three times $y$ is less than $36$, and $y$ is more than twice $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first condition is $4x + 3y < 36$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, and \"is less than\" gives the sign $<$."
                },
                {
                  "step": "$3y < 36 - 4x$",
                  "reason": "Adding the same number: $-4x$ is added to both sides."
                },
                {
                  "step": "$y < \\dfrac{36 - 4x}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The second condition is $y > 2x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "Both together: $y < \\dfrac{36 - 4x}{3}$ and $y > 2x$",
                  "reason": "Region of a system of inequalities: both conditions hold at once, so the two inequalities are joined by and."
                }
              ]
            },
            {
              "prompt": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: twice $x$ plus five times $y$ is at least $20$, and $y$ is at most $9$ less than $x$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y >= (20-2*x)/5 and y <= x-9",
              "lines": [
                {
                  "step": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: twice $x$ plus five times $y$ is at least $20$, and $y$ is at most $9$ less than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first condition is $2x + 5y \\ge 20$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, and \"is at least\" gives the sign $\\ge$."
                },
                {
                  "step": "$5y \\ge 20 - 2x$",
                  "reason": "Adding the same number: $-2x$ is added to both sides."
                },
                {
                  "step": "$y \\ge \\dfrac{20 - 2x}{5}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5}$."
                },
                {
                  "step": "The second condition is $y \\le x - 9$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "Both together: $y \\ge \\dfrac{20 - 2x}{5}$ and $y \\le x - 9$",
                  "reason": "Region of a system of inequalities: both conditions hold at once, so the two inequalities are joined by and."
                }
              ]
            },
            {
              "prompt": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: five times $x$ plus twice $y$ is more than $30$, and $y$ is less than $7$ more than three times $x$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "y > (30-5*x)/2 and y < 3*x+7",
              "lines": [
                {
                  "step": "Write these conditions on the numbers $x$ and $y$ as two inequalities joined by and, each with $y$ alone on the left: five times $x$ plus twice $y$ is more than $30$, and $y$ is less than $7$ more than three times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first condition is $5x + 2y > 30$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, and \"is more than\" gives the sign $>$."
                },
                {
                  "step": "$2y > 30 - 5x$",
                  "reason": "Adding the same number: $-5x$ is added to both sides."
                },
                {
                  "step": "$y > \\dfrac{30 - 5x}{2}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$."
                },
                {
                  "step": "The second condition is $y < 3x + 7$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "Both together: $y > \\dfrac{30 - 5x}{2}$ and $y < 3x + 7$",
                  "reason": "Region of a system of inequalities: both conditions hold at once, so the two inequalities are joined by and."
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
      "id": "t132-p1",
      "method": "direct proof",
      "statement": "Let $x$ and $y$ be numbers with $x \\ge 0$, $y \\ge 0$, $2x + y \\le 10$ and $x + 3y \\le 15$. Then the greatest value of $x + y$ is $7$.",
      "idea": "Twice the first condition added to the second bounds $5x + 5y$ by $35$, so $x + y$ is at most $7$; the point $(3, 4)$ satisfies every condition and gives $7$.",
      "lines": [
        {
          "line": "Suppose $x \\ge 0$, $y \\ge 0$, $2x + y \\le 10$ and $x + 3y \\le 15$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $4x + 2y \\le 20$.",
          "reason": "multiplying by a positive number: both sides of $2x + y \\le 10$ are multiplied by $2$"
        },
        {
          "line": "So $5x + 5y \\le 35$.",
          "reason": "adding two inequalities: the second line and $x + 3y \\le 15$"
        },
        {
          "line": "So $x + y \\le 7$ for every allowed $x$ and $y$.",
          "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5}$"
        },
        {
          "line": "At $x = 3$ and $y = 4$: $3 \\ge 0$, $4 \\ge 0$, $2 \\cdot 3 + 4 = 10$ and $3 + 3 \\cdot 4 = 15$, so the point $(3, 4)$ satisfies every condition.",
          "reason": "substituting a value: $x$ and $y$ are replaced by $(3)$ and $(4)$"
        },
        {
          "line": "There $x + y = 3 + 4 = 7$.",
          "reason": "substituting a value"
        },
        {
          "line": "Therefore the greatest value of $x + y$ is $7$.",
          "reason": "a greatest value needs a bound and a case that reaches it: the fourth line is the bound, and the sixth line is the case that reaches it"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t132-s1",
      "method": "direct proof",
      "statement": "Let $x$ and $y$ be numbers with $x \\ge 0$, $y \\ge 0$, $3x + y \\le 12$ and $x + 2y \\le 14$. Then $x + y \\le 8$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x \\ge 0$, $y \\ge 0$, $3x + y \\le 12$ and $x + 2y \\le 14$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $2x + 4y \\le 28$.",
            "reason": "multiplying by a positive number: both sides of $x + 2y \\le 14$ are multiplied by $2$"
          },
          {
            "line": "So $5x + 5y \\le 40$.",
            "reason": "adding two inequalities: $3x + y \\le 12$ and the second line"
          },
          {
            "line": "Therefore $x + y \\le 8$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5}$"
          }
        ]
      }
    },
    {
      "id": "t132-s2",
      "method": "proof of existence by construction",
      "statement": "There are numbers $x$ and $y$ with $x \\ge 0$, $y \\ge 0$, $3x + y \\le 12$, $x + 2y \\le 14$ and $x + y = 8$.",
      "check": {
        "proof": [
          {
            "line": "Take $x = 2$ and $y = 6$.",
            "reason": "the construction: the point where $3x + y = 12$ meets $x + 2y = 14$"
          },
          {
            "line": "Then $2 \\ge 0$ and $6 \\ge 0$.",
            "reason": "substituting a value"
          },
          {
            "line": "Also $3 \\cdot 2 + 6 = 12$, so $3x + y \\le 12$ holds.",
            "reason": "substituting a value: $x$ and $y$ are replaced by $(2)$ and $(6)$"
          },
          {
            "line": "Also $2 + 2 \\cdot 6 = 14$, so $x + 2y \\le 14$ holds.",
            "reason": "substituting a value: $x$ and $y$ are replaced by $(2)$ and $(6)$"
          },
          {
            "line": "Therefore $x + y = 2 + 6 = 8$, and the numbers $x = 2$ and $y = 6$ have every property asked for.",
            "reason": "substituting a value"
          }
        ]
      }
    }
  ]
}
