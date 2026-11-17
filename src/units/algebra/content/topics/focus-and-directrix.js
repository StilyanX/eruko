export default {
  "number": 189,
  "title": "Focus and directrix of a parabola",
  "section": 12,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "107-117"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the equation, with $y$ alone on the left, of the parabola with focus $(-8, 5)$ and directrix $y = 11$.",
    "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
    "answer": "y = -1/12*(x+8)^2+8",
    "solution": [
      "Find the equation, with $y$ alone on the left, of the parabola with focus $(-8, 5)$ and directrix $y = 11$.",
      "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x + 8)^2 + (y - 5)^2}$.",
      "The distance from $(x, y)$ to the directrix is $|y - 11|$.",
      "$\\sqrt{(x + 8)^2 + (y - 5)^2} = |y - 11|$",
      "$(x + 8)^2 + (y - 5)^2 = (y - 11)^2$",
      "$(x + 8)^2 = (y - 11)^2 - (y - 5)^2$",
      "$(x + 8)^2 = y^2 - 22y + 121 - (y^2 - 10y + 25)$",
      "$(x + 8)^2 = -12y + 96$",
      "$-12y = (x + 8)^2 - 96$",
      "$y = -\\dfrac{1}{12}(x + 8)^2 + 8$"
    ]
  },
  "ideas": [
    {
      "name": "Parabola (focus and directrix)",
      "concrete": "Take the point $(5, 6)$ and the line $y = 2$. The point $(9, 6)$ is $4$ to the right of $(5, 6)$ and $4$ above the line, so it is as far from the point as from the line. So is $(5, 4)$, which is $2$ from each.",
      "general": "For a point and a line that does not pass through it, the set of points as far from the point as from the line is the **parabola** with **focus** the point and **directrix** the line. The **distance from a point to a line** is the length of the perpendicular from the point to the line: from $(x, y)$ to the line $y = c$ it is $|y - c|$, and to the line $x = c$ it is $|x - c|$. The line through the focus perpendicular to the directrix is the axis of symmetry, and the point where it meets the parabola is the vertex.",
      "figure": {
        "file": "focus-and-directrix-23.svg",
        "alt": "A parabola opening upward with its focus F at (5, 6), its vertex V at (5, 4), the point P at (9, 6) on it, and its directrix, the dashed horizontal line y = 2."
      }
    },
    {
      "name": "Focal distance",
      "concrete": "In $y = \\dfrac{1}{12}(x + 5)^2 + 1$ the vertex is $(-5, 1)$ and $a = \\dfrac{1}{12}$, so $t = \\dfrac{1}{4a} = 3$. The focus is $3$ above the vertex, at $(-5, 4)$, and the directrix is the line $y = -2$, $3$ below it.",
      "general": "For numbers $a$, $h$ and $k$ with $a \\ne 0$, put $t = \\dfrac{1}{4a}$. The graph of $y = a(x - h)^2 + k$ is the parabola with focus $(h, k + t)$ and directrix $y = k - t$. The graph of $x = a(y - k)^2 + h$ is the parabola with focus $(h + t, k)$ and directrix $x = h - t$. The vertex $(h, k)$ is the midpoint of the focus and the point where the axis of symmetry meets the directrix, so it is $|t|$ from each; $|t|$ is the **focal distance**. Read the other way, $a = \\dfrac{1}{4t}$."
    }
  ],
  "kinds": [
    {
      "id": "t189-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the equation, with $y$ alone on the left, of the parabola with focus $(5, -14)$ and directrix $y = -6$.",
            "lines": [
              {
                "step": "Find the equation, with $y$ alone on the left, of the parabola with focus $(5, -14)$ and directrix $y = -6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x - 5)^2 + (y + 14)^2}$.",
                "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
              },
              {
                "step": "The distance from $(x, y)$ to the directrix is $|y + 6|$.",
                "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $y = c$ is $|y - c|$."
              },
              {
                "step": "$\\sqrt{(x - 5)^2 + (y + 14)^2} = |y + 6|$",
                "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
              },
              {
                "step": "$(x - 5)^2 + (y + 14)^2 = (y + 6)^2$",
                "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
              },
              {
                "step": "$(x - 5)^2 = (y + 6)^2 - (y + 14)^2$",
                "reason": "Adding the same number to both sides: $(y + 14)^2$ is taken from each side."
              },
              {
                "step": "$(x - 5)^2 = y^2 + 12y + 36 - (y^2 + 28y + 196)$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
              },
              {
                "step": "$(x - 5)^2 = -16y - 160$",
                "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
              },
              {
                "step": "$-16y = (x - 5)^2 + 160$",
                "reason": "Adding the same number to both sides: $160$ is added to each side, and the sides are read the other way round."
              },
              {
                "step": "$y = -\\dfrac{1}{16}(x - 5)^2 - 10$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-16$, and $160 \\div (-16) = -10$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with focus $(1, -9)$ and directrix $y = -7$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -1/4*(x-1)^2-8",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with focus $(1, -9)$ and directrix $y = -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x - 1)^2 + (y + 9)^2}$.",
                  "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
                },
                {
                  "step": "The distance from $(x, y)$ to the directrix is $|y + 7|$.",
                  "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $y = c$ is $|y - c|$."
                },
                {
                  "step": "$\\sqrt{(x - 1)^2 + (y + 9)^2} = |y + 7|$",
                  "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
                },
                {
                  "step": "$(x - 1)^2 + (y + 9)^2 = (y + 7)^2$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
                },
                {
                  "step": "$(x - 1)^2 = (y + 7)^2 - (y + 9)^2$",
                  "reason": "Adding the same number to both sides: $(y + 9)^2$ is taken from each side."
                },
                {
                  "step": "$(x - 1)^2 = y^2 + 14y + 49 - (y^2 + 18y + 81)$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
                },
                {
                  "step": "$(x - 1)^2 = -4y - 32$",
                  "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
                },
                {
                  "step": "$-4y = (x - 1)^2 + 32$",
                  "reason": "Adding the same number to both sides: $32$ is added to each side, and the sides are read the other way round."
                },
                {
                  "step": "$y = -\\dfrac{1}{4}(x - 1)^2 - 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$, and $32 \\div (-4) = -8$."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with focus $(2, 9)$ and directrix $y = 3$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 1/12*(x-2)^2+6",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with focus $(2, 9)$ and directrix $y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x - 2)^2 + (y - 9)^2}$.",
                  "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
                },
                {
                  "step": "The distance from $(x, y)$ to the directrix is $|y - 3|$.",
                  "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $y = c$ is $|y - c|$."
                },
                {
                  "step": "$\\sqrt{(x - 2)^2 + (y - 9)^2} = |y - 3|$",
                  "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
                },
                {
                  "step": "$(x - 2)^2 + (y - 9)^2 = (y - 3)^2$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
                },
                {
                  "step": "$(x - 2)^2 = (y - 3)^2 - (y - 9)^2$",
                  "reason": "Adding the same number to both sides: $(y - 9)^2$ is taken from each side."
                },
                {
                  "step": "$(x - 2)^2 = y^2 - 6y + 9 - (y^2 - 18y + 81)$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
                },
                {
                  "step": "$(x - 2)^2 = 12y - 72$",
                  "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
                },
                {
                  "step": "$12y = (x - 2)^2 + 72$",
                  "reason": "Adding the same number to both sides: $72$ is added to each side, and the sides are read the other way round."
                },
                {
                  "step": "$y = \\dfrac{1}{12}(x - 2)^2 + 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$, and $72 \\div 12 = 6$."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with focus $(-12, 11)$ and directrix $y = 9$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 1/4*(x+12)^2+10",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with focus $(-12, 11)$ and directrix $y = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x + 12)^2 + (y - 11)^2}$.",
                  "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
                },
                {
                  "step": "The distance from $(x, y)$ to the directrix is $|y - 9|$.",
                  "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $y = c$ is $|y - c|$."
                },
                {
                  "step": "$\\sqrt{(x + 12)^2 + (y - 11)^2} = |y - 9|$",
                  "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
                },
                {
                  "step": "$(x + 12)^2 + (y - 11)^2 = (y - 9)^2$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
                },
                {
                  "step": "$(x + 12)^2 = (y - 9)^2 - (y - 11)^2$",
                  "reason": "Adding the same number to both sides: $(y - 11)^2$ is taken from each side."
                },
                {
                  "step": "$(x + 12)^2 = y^2 - 18y + 81 - (y^2 - 22y + 121)$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
                },
                {
                  "step": "$(x + 12)^2 = 4y - 40$",
                  "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
                },
                {
                  "step": "$4y = (x + 12)^2 + 40$",
                  "reason": "Adding the same number to both sides: $40$ is added to each side, and the sides are read the other way round."
                },
                {
                  "step": "$y = \\dfrac{1}{4}(x + 12)^2 + 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, and $40 \\div 4 = 10$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation, with $x$ alone on the left, of the parabola with focus $(11, 6)$ and directrix $x = 3$.",
            "lines": [
              {
                "step": "Find the equation, with $x$ alone on the left, of the parabola with focus $(11, 6)$ and directrix $x = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x - 11)^2 + (y - 6)^2}$.",
                "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
              },
              {
                "step": "The distance from $(x, y)$ to the directrix is $|x - 3|$.",
                "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $x = c$ is $|x - c|$."
              },
              {
                "step": "$\\sqrt{(x - 11)^2 + (y - 6)^2} = |x - 3|$",
                "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
              },
              {
                "step": "$(x - 11)^2 + (y - 6)^2 = (x - 3)^2$",
                "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
              },
              {
                "step": "$(y - 6)^2 = (x - 3)^2 - (x - 11)^2$",
                "reason": "Adding the same number to both sides: $(x - 11)^2$ is taken from each side."
              },
              {
                "step": "$(y - 6)^2 = x^2 - 6x + 9 - (x^2 - 22x + 121)$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
              },
              {
                "step": "$(y - 6)^2 = 16x - 112$",
                "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
              },
              {
                "step": "$16x = (y - 6)^2 + 112$",
                "reason": "Adding the same number to both sides: $112$ is added to each side, and the sides are read the other way round."
              },
              {
                "step": "$x = \\dfrac{1}{16}(y - 6)^2 + 7$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$, and $112 \\div 16 = 7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with focus $(13, 5)$ and directrix $x = 7$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 1/12*(y-5)^2+10",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with focus $(13, 5)$ and directrix $x = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x - 13)^2 + (y - 5)^2}$.",
                  "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
                },
                {
                  "step": "The distance from $(x, y)$ to the directrix is $|x - 7|$.",
                  "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $x = c$ is $|x - c|$."
                },
                {
                  "step": "$\\sqrt{(x - 13)^2 + (y - 5)^2} = |x - 7|$",
                  "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
                },
                {
                  "step": "$(x - 13)^2 + (y - 5)^2 = (x - 7)^2$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
                },
                {
                  "step": "$(y - 5)^2 = (x - 7)^2 - (x - 13)^2$",
                  "reason": "Adding the same number to both sides: $(x - 13)^2$ is taken from each side."
                },
                {
                  "step": "$(y - 5)^2 = x^2 - 14x + 49 - (x^2 - 26x + 169)$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
                },
                {
                  "step": "$(y - 5)^2 = 12x - 120$",
                  "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
                },
                {
                  "step": "$12x = (y - 5)^2 + 120$",
                  "reason": "Adding the same number to both sides: $120$ is added to each side, and the sides are read the other way round."
                },
                {
                  "step": "$x = \\dfrac{1}{12}(y - 5)^2 + 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$, and $120 \\div 12 = 10$."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with focus $(10, -12)$ and directrix $x = 12$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -1/4*(y+12)^2+11",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with focus $(10, -12)$ and directrix $x = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x - 10)^2 + (y + 12)^2}$.",
                  "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
                },
                {
                  "step": "The distance from $(x, y)$ to the directrix is $|x - 12|$.",
                  "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $x = c$ is $|x - c|$."
                },
                {
                  "step": "$\\sqrt{(x - 10)^2 + (y + 12)^2} = |x - 12|$",
                  "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
                },
                {
                  "step": "$(x - 10)^2 + (y + 12)^2 = (x - 12)^2$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
                },
                {
                  "step": "$(y + 12)^2 = (x - 12)^2 - (x - 10)^2$",
                  "reason": "Adding the same number to both sides: $(x - 10)^2$ is taken from each side."
                },
                {
                  "step": "$(y + 12)^2 = x^2 - 24x + 144 - (x^2 - 20x + 100)$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
                },
                {
                  "step": "$(y + 12)^2 = -4x + 44$",
                  "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
                },
                {
                  "step": "$-4x = (y + 12)^2 - 44$",
                  "reason": "Adding the same number to both sides: $44$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$x = -\\dfrac{1}{4}(y + 12)^2 + 11$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$, and $-44 \\div (-4) = 11$."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with focus $(-9, -7)$ and directrix $x = -13$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 1/8*(y+7)^2-11",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with focus $(-9, -7)$ and directrix $x = -13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The distance from a point $(x, y)$ to the focus is $\\sqrt{(x + 9)^2 + (y + 7)^2}$.",
                  "reason": "Distance formula: the distance between two points is the square root of the sum of the squares of the differences of their coordinates."
                },
                {
                  "step": "The distance from $(x, y)$ to the directrix is $|x + 13|$.",
                  "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $x = c$ is $|x - c|$."
                },
                {
                  "step": "$\\sqrt{(x + 9)^2 + (y + 7)^2} = |x + 13|$",
                  "reason": "Parabola (focus and directrix): every point of the parabola is as far from the focus as from the directrix."
                },
                {
                  "step": "$(x + 9)^2 + (y + 7)^2 = (x + 13)^2$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and the square of an absolute value is the square of the number inside it."
                },
                {
                  "step": "$(y + 7)^2 = (x + 13)^2 - (x + 9)^2$",
                  "reason": "Adding the same number to both sides: $(x + 9)^2$ is taken from each side."
                },
                {
                  "step": "$(y + 7)^2 = x^2 + 26x + 169 - (x^2 + 18x + 81)$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, used on both squares."
                },
                {
                  "step": "$(y + 7)^2 = 8x + 88$",
                  "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and the two squares of the same letter cancel."
                },
                {
                  "step": "$8x = (y + 7)^2 - 88$",
                  "reason": "Adding the same number to both sides: $88$ is taken from each side, and the sides are read the other way round."
                },
                {
                  "step": "$x = \\dfrac{1}{8}(y + 7)^2 - 11$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$, and $-88 \\div 8 = -11$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t189-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-12, 1)$ and focus $(-12, 4)$.",
            "lines": [
              {
                "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-12, 1)$ and focus $(-12, 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = a(x + 12)^2 + 1$",
                "reason": "Standard form $y = a(x - h)^2 + k$: the vertex and the focus have the same $x$-coordinate, so the axis of symmetry is vertical, and $(h, k) = (-12, 1)$."
              },
              {
                "step": "$t = 4 - 1 = 3$",
                "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
              },
              {
                "step": "$a = \\dfrac{1}{4 \\cdot 3} = \\dfrac{1}{12}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
              },
              {
                "step": "$y = \\dfrac{1}{12}(x + 12)^2 + 1$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-15, -5)$ and focus $(-15, -12)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -1/28*(x+15)^2-5",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-15, -5)$ and focus $(-15, -12)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x + 15)^2 - 5$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the vertex and the focus have the same $x$-coordinate, so the axis of symmetry is vertical, and $(h, k) = (-15, -5)$."
                },
                {
                  "step": "$t = -12 - (-5) = -7$",
                  "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-7)} = -\\dfrac{1}{28}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = -\\dfrac{1}{28}(x + 15)^2 - 5$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-9, -6)$ and focus $(-9, -2)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 1/16*(x+9)^2-6",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-9, -6)$ and focus $(-9, -2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x + 9)^2 - 6$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the vertex and the focus have the same $x$-coordinate, so the axis of symmetry is vertical, and $(h, k) = (-9, -6)$."
                },
                {
                  "step": "$t = -2 - (-6) = 4$",
                  "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 4} = \\dfrac{1}{16}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = \\dfrac{1}{16}(x + 9)^2 - 6$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(5, -4)$ and focus $(5, 3)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 1/28*(x-5)^2-4",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(5, -4)$ and focus $(5, 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x - 5)^2 - 4$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the vertex and the focus have the same $x$-coordinate, so the axis of symmetry is vertical, and $(h, k) = (5, -4)$."
                },
                {
                  "step": "$t = 3 - (-4) = 7$",
                  "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 7} = \\dfrac{1}{28}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = \\dfrac{1}{28}(x - 5)^2 - 4$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(8, 13)$ and directrix $y = 17$.",
            "lines": [
              {
                "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(8, 13)$ and directrix $y = 17$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = a(x - 8)^2 + 13$",
                "reason": "Standard form $y = a(x - h)^2 + k$: the directrix is a horizontal line, so the axis of symmetry is vertical, and $(h, k) = (8, 13)$."
              },
              {
                "step": "$t = 13 - 17 = -4$",
                "reason": "Focal distance: the directrix is $y = k - t$, so $t$ is the $y$-coordinate of the vertex minus the number of the directrix."
              },
              {
                "step": "$a = \\dfrac{1}{4 \\cdot (-4)} = -\\dfrac{1}{16}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
              },
              {
                "step": "$y = -\\dfrac{1}{16}(x - 8)^2 + 13$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-8, -10)$ and directrix $y = -12$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 1/8*(x+8)^2-10",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-8, -10)$ and directrix $y = -12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x + 8)^2 - 10$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the directrix is a horizontal line, so the axis of symmetry is vertical, and $(h, k) = (-8, -10)$."
                },
                {
                  "step": "$t = -10 - (-12) = 2$",
                  "reason": "Focal distance: the directrix is $y = k - t$, so $t$ is the $y$-coordinate of the vertex minus the number of the directrix."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = \\dfrac{1}{8}(x + 8)^2 - 10$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-13, -7)$ and directrix $y = -5$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -1/8*(x+13)^2-7",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-13, -7)$ and directrix $y = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x + 13)^2 - 7$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the directrix is a horizontal line, so the axis of symmetry is vertical, and $(h, k) = (-13, -7)$."
                },
                {
                  "step": "$t = -7 - (-5) = -2$",
                  "reason": "Focal distance: the directrix is $y = k - t$, so $t$ is the $y$-coordinate of the vertex minus the number of the directrix."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = -\\dfrac{1}{8}(x + 13)^2 - 7$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-9, 10)$ and directrix $y = 9$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 1/4*(x+9)^2+10",
              "lines": [
                {
                  "step": "Find the equation, with $y$ alone on the left, of the parabola with vertex $(-9, 10)$ and directrix $y = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = a(x + 9)^2 + 10$",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the directrix is a horizontal line, so the axis of symmetry is vertical, and $(h, k) = (-9, 10)$."
                },
                {
                  "step": "$t = 10 - 9 = 1$",
                  "reason": "Focal distance: the directrix is $y = k - t$, so $t$ is the $y$-coordinate of the vertex minus the number of the directrix."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 1} = \\dfrac{1}{4}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = \\dfrac{1}{4}(x + 9)^2 + 10$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(15, 2)$ and focus $(11, 2)$.",
            "lines": [
              {
                "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(15, 2)$ and focus $(11, 2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = a(y - 2)^2 + 15$",
                "reason": "Standard form $x = a(y - k)^2 + h$: the vertex and the focus have the same $y$-coordinate, so the axis of symmetry is horizontal, and $(h, k) = (15, 2)$."
              },
              {
                "step": "$t = 11 - 15 = -4$",
                "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
              },
              {
                "step": "$a = \\dfrac{1}{4 \\cdot (-4)} = -\\dfrac{1}{16}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
              },
              {
                "step": "$x = -\\dfrac{1}{16}(y - 2)^2 + 15$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-3, 9)$ and focus $(-6, 9)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -1/12*(y-9)^2-3",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-3, 9)$ and focus $(-6, 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 9)^2 - 3$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the vertex and the focus have the same $y$-coordinate, so the axis of symmetry is horizontal, and $(h, k) = (-3, 9)$."
                },
                {
                  "step": "$t = -6 - (-3) = -3$",
                  "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-3)} = -\\dfrac{1}{12}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = -\\dfrac{1}{12}(y - 9)^2 - 3$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-14, -9)$ and focus $(-19, -9)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -1/20*(y+9)^2-14",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-14, -9)$ and focus $(-19, -9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y + 9)^2 - 14$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the vertex and the focus have the same $y$-coordinate, so the axis of symmetry is horizontal, and $(h, k) = (-14, -9)$."
                },
                {
                  "step": "$t = -19 - (-14) = -5$",
                  "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-5)} = -\\dfrac{1}{20}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = -\\dfrac{1}{20}(y + 9)^2 - 14$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, -10)$ and focus $(8, -10)$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 1/24*(y+10)^2+2",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, -10)$ and focus $(8, -10)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y + 10)^2 + 2$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the vertex and the focus have the same $y$-coordinate, so the axis of symmetry is horizontal, and $(h, k) = (2, -10)$."
                },
                {
                  "step": "$t = 8 - 2 = 6$",
                  "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 6} = \\dfrac{1}{24}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = \\dfrac{1}{24}(y + 10)^2 + 2$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-8, -2)$ and directrix $x = -5$.",
            "lines": [
              {
                "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-8, -2)$ and directrix $x = -5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = a(y + 2)^2 - 8$",
                "reason": "Standard form $x = a(y - k)^2 + h$: the directrix is a vertical line, so the axis of symmetry is horizontal, and $(h, k) = (-8, -2)$."
              },
              {
                "step": "$t = -8 - (-5) = -3$",
                "reason": "Focal distance: the directrix is $x = h - t$, so $t$ is the $x$-coordinate of the vertex minus the number of the directrix."
              },
              {
                "step": "$a = \\dfrac{1}{4 \\cdot (-3)} = -\\dfrac{1}{12}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
              },
              {
                "step": "$x = -\\dfrac{1}{12}(y + 2)^2 - 8$",
                "reason": "Substituting a value: $a$ is replaced by its value in line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-15, 11)$ and directrix $x = -13$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -1/8*(y-11)^2-15",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-15, 11)$ and directrix $x = -13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 11)^2 - 15$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the directrix is a vertical line, so the axis of symmetry is horizontal, and $(h, k) = (-15, 11)$."
                },
                {
                  "step": "$t = -15 - (-13) = -2$",
                  "reason": "Focal distance: the directrix is $x = h - t$, so $t$ is the $x$-coordinate of the vertex minus the number of the directrix."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = -\\dfrac{1}{8}(y - 11)^2 - 15$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, 7)$ and directrix $x = 9$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -1/28*(y-7)^2+2",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(2, 7)$ and directrix $x = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 7)^2 + 2$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the directrix is a vertical line, so the axis of symmetry is horizontal, and $(h, k) = (2, 7)$."
                },
                {
                  "step": "$t = 2 - 9 = -7$",
                  "reason": "Focal distance: the directrix is $x = h - t$, so $t$ is the $x$-coordinate of the vertex minus the number of the directrix."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-7)} = -\\dfrac{1}{28}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = -\\dfrac{1}{28}(y - 7)^2 + 2$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            },
            {
              "prompt": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-5, 8)$ and directrix $x = -2$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = -1/12*(y-8)^2-5",
              "lines": [
                {
                  "step": "Find the equation, with $x$ alone on the left, of the parabola with vertex $(-5, 8)$ and directrix $x = -2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = a(y - 8)^2 - 5$",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the directrix is a vertical line, so the axis of symmetry is horizontal, and $(h, k) = (-5, 8)$."
                },
                {
                  "step": "$t = -5 - (-2) = -3$",
                  "reason": "Focal distance: the directrix is $x = h - t$, so $t$ is the $x$-coordinate of the vertex minus the number of the directrix."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-3)} = -\\dfrac{1}{12}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = -\\dfrac{1}{12}(y - 8)^2 - 5$",
                  "reason": "Substituting a value: $a$ is replaced by its value in line 2."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t189-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the focus of the graph of $y = -2x^2 + 28x - 82$.",
            "lines": [
              {
                "step": "Find the focus of the graph of $y = -2x^2 + 28x - 82$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = -2(x^2 - 14x) - 82$",
                "reason": "Taking out a common factor: $-2$ is taken out of the two terms in $x$."
              },
              {
                "step": "$y = -2(x^2 - 14x + 49) + 98 - 82$",
                "reason": "Completing the square: $49$ is added inside the bracket, which adds $(-2) \\cdot 49 = -98$ to the right side, so $98$ is put outside to leave the value unchanged."
              },
              {
                "step": "$y = -2(x - 7)^2 + 98 - 82$",
                "reason": "Completing the square: $x^2 - 14x + 49 = (x - 7)^2$, half of $-14$ being $-7$."
              },
              {
                "step": "$y = -2(x - 7)^2 + 16$",
                "reason": "Collecting like terms: $98 - 82 = 16$."
              },
              {
                "step": "So $a = -2$, $h = 7$ and $k = 16$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
              },
              {
                "step": "$t = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
              },
              {
                "step": "The focus is $(h, k + t) = \\left(7, 16 + \\left(-\\dfrac{1}{8}\\right)\\right) = \\left(7, \\dfrac{127}{8}\\right)$.",
                "reason": "Focal distance: the focus of the graph of $y = a(x - h)^2 + k$ is $(h, k + t)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the focus of the graph of $y = 6x^2 - 12x + 34$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, 673/24)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $y = 6x^2 - 12x + 34$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 6(x^2 - 2x) + 34$",
                  "reason": "Taking out a common factor: $6$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 6(x^2 - 2x + 1) - 6 + 34$",
                  "reason": "Completing the square: $1$ is added inside the bracket, which adds $6 \\cdot 1 = 6$ to the right side, so $-6$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 6(x - 1)^2 - 6 + 34$",
                  "reason": "Completing the square: $x^2 - 2x + 1 = (x - 1)^2$, half of $-2$ being $-1$."
                },
                {
                  "step": "$y = 6(x - 1)^2 + 28$",
                  "reason": "Collecting like terms: $-6 + 34 = 28$."
                },
                {
                  "step": "So $a = 6$, $h = 1$ and $k = 28$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 6} = \\dfrac{1}{24}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The focus is $(h, k + t) = \\left(1, 28 + \\dfrac{1}{24}\\right) = \\left(1, \\dfrac{673}{24}\\right)$.",
                  "reason": "Focal distance: the focus of the graph of $y = a(x - h)^2 + k$ is $(h, k + t)$."
                }
              ]
            },
            {
              "prompt": "Find the focus of the graph of $y = -5x^2 + 20x - 6$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, 279/20)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $y = -5x^2 + 20x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -5(x^2 - 4x) - 6$",
                  "reason": "Taking out a common factor: $-5$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = -5(x^2 - 4x + 4) + 20 - 6$",
                  "reason": "Completing the square: $4$ is added inside the bracket, which adds $(-5) \\cdot 4 = -20$ to the right side, so $20$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = -5(x - 2)^2 + 20 - 6$",
                  "reason": "Completing the square: $x^2 - 4x + 4 = (x - 2)^2$, half of $-4$ being $-2$."
                },
                {
                  "step": "$y = -5(x - 2)^2 + 14$",
                  "reason": "Collecting like terms: $20 - 6 = 14$."
                },
                {
                  "step": "So $a = -5$, $h = 2$ and $k = 14$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot (-5)} = -\\dfrac{1}{20}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The focus is $(h, k + t) = \\left(2, 14 + \\left(-\\dfrac{1}{20}\\right)\\right) = \\left(2, \\dfrac{279}{20}\\right)$.",
                  "reason": "Focal distance: the focus of the graph of $y = a(x - h)^2 + k$ is $(h, k + t)$."
                }
              ]
            },
            {
              "prompt": "Find the focus of the graph of $y = 2x^2 + 24x + 91$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-6, 153/8)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $y = 2x^2 + 24x + 91$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 2(x^2 + 12x) + 91$",
                  "reason": "Taking out a common factor: $2$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 2(x^2 + 12x + 36) - 72 + 91$",
                  "reason": "Completing the square: $36$ is added inside the bracket, which adds $2 \\cdot 36 = 72$ to the right side, so $-72$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 2(x + 6)^2 - 72 + 91$",
                  "reason": "Completing the square: $x^2 + 12x + 36 = (x + 6)^2$, half of $12$ being $6$."
                },
                {
                  "step": "$y = 2(x + 6)^2 + 19$",
                  "reason": "Collecting like terms: $-72 + 91 = 19$."
                },
                {
                  "step": "So $a = 2$, $h = -6$ and $k = 19$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The focus is $(h, k + t) = \\left(-6, 19 + \\dfrac{1}{8}\\right) = \\left(-6, \\dfrac{153}{8}\\right)$.",
                  "reason": "Focal distance: the focus of the graph of $y = a(x - h)^2 + k$ is $(h, k + t)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the directrix of the graph of $y = 5x^2 - 40x + 58$, as an equation with $y$ alone on the left.",
            "lines": [
              {
                "step": "Find the directrix of the graph of $y = 5x^2 - 40x + 58$, as an equation with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 5(x^2 - 8x) + 58$",
                "reason": "Taking out a common factor: $5$ is taken out of the two terms in $x$."
              },
              {
                "step": "$y = 5(x^2 - 8x + 16) - 80 + 58$",
                "reason": "Completing the square: $16$ is added inside the bracket, which adds $5 \\cdot 16 = 80$ to the right side, so $-80$ is put outside to leave the value unchanged."
              },
              {
                "step": "$y = 5(x - 4)^2 - 80 + 58$",
                "reason": "Completing the square: $x^2 - 8x + 16 = (x - 4)^2$, half of $-8$ being $-4$."
              },
              {
                "step": "$y = 5(x - 4)^2 - 22$",
                "reason": "Collecting like terms: $-80 + 58 = -22$."
              },
              {
                "step": "So $a = 5$, $h = 4$ and $k = -22$.",
                "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
              },
              {
                "step": "$t = \\dfrac{1}{4 \\cdot 5} = \\dfrac{1}{20}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
              },
              {
                "step": "The directrix is the line $y = -22 - \\dfrac{1}{20} = -\\dfrac{441}{20}$.",
                "reason": "Focal distance: the directrix of the graph of $y = a(x - h)^2 + k$ is $y = k - t$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the directrix of the graph of $y = 3x^2 - 48x + 218$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = 311/12",
              "lines": [
                {
                  "step": "Find the directrix of the graph of $y = 3x^2 - 48x + 218$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 3(x^2 - 16x) + 218$",
                  "reason": "Taking out a common factor: $3$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = 3(x^2 - 16x + 64) - 192 + 218$",
                  "reason": "Completing the square: $64$ is added inside the bracket, which adds $3 \\cdot 64 = 192$ to the right side, so $-192$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = 3(x - 8)^2 - 192 + 218$",
                  "reason": "Completing the square: $x^2 - 16x + 64 = (x - 8)^2$, half of $-16$ being $-8$."
                },
                {
                  "step": "$y = 3(x - 8)^2 + 26$",
                  "reason": "Collecting like terms: $-192 + 218 = 26$."
                },
                {
                  "step": "So $a = 3$, $h = 8$ and $k = 26$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 3} = \\dfrac{1}{12}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The directrix is the line $y = 26 - \\dfrac{1}{12} = \\dfrac{311}{12}$.",
                  "reason": "Focal distance: the directrix of the graph of $y = a(x - h)^2 + k$ is $y = k - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the graph of $y = -2x^2 + 16x - 39$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -55/8",
              "lines": [
                {
                  "step": "Find the directrix of the graph of $y = -2x^2 + 16x - 39$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -2(x^2 - 8x) - 39$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = -2(x^2 - 8x + 16) + 32 - 39$",
                  "reason": "Completing the square: $16$ is added inside the bracket, which adds $(-2) \\cdot 16 = -32$ to the right side, so $32$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = -2(x - 4)^2 + 32 - 39$",
                  "reason": "Completing the square: $x^2 - 8x + 16 = (x - 4)^2$, half of $-8$ being $-4$."
                },
                {
                  "step": "$y = -2(x - 4)^2 - 7$",
                  "reason": "Collecting like terms: $32 - 39 = -7$."
                },
                {
                  "step": "So $a = -2$, $h = 4$ and $k = -7$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The directrix is the line $y = -7 - \\left(-\\dfrac{1}{8}\\right) = -\\dfrac{55}{8}$.",
                  "reason": "Focal distance: the directrix of the graph of $y = a(x - h)^2 + k$ is $y = k - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the graph of $y = -3x^2 - 18x - 50$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -275/12",
              "lines": [
                {
                  "step": "Find the directrix of the graph of $y = -3x^2 - 18x - 50$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -3(x^2 + 6x) - 50$",
                  "reason": "Taking out a common factor: $-3$ is taken out of the two terms in $x$."
                },
                {
                  "step": "$y = -3(x^2 + 6x + 9) + 27 - 50$",
                  "reason": "Completing the square: $9$ is added inside the bracket, which adds $(-3) \\cdot 9 = -27$ to the right side, so $27$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$y = -3(x + 3)^2 + 27 - 50$",
                  "reason": "Completing the square: $x^2 + 6x + 9 = (x + 3)^2$, half of $6$ being $3$."
                },
                {
                  "step": "$y = -3(x + 3)^2 - 23$",
                  "reason": "Collecting like terms: $27 - 50 = -23$."
                },
                {
                  "step": "So $a = -3$, $h = -3$ and $k = -23$.",
                  "reason": "Standard form $y = a(x - h)^2 + k$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot (-3)} = -\\dfrac{1}{12}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The directrix is the line $y = -23 - \\left(-\\dfrac{1}{12}\\right) = -\\dfrac{275}{12}$.",
                  "reason": "Focal distance: the directrix of the graph of $y = a(x - h)^2 + k$ is $y = k - t$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the focus of the graph of $x = 2y^2 + 36y + 179$.",
            "lines": [
              {
                "step": "Find the focus of the graph of $x = 2y^2 + 36y + 179$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 2(y^2 + 18y) + 179$",
                "reason": "Taking out a common factor: $2$ is taken out of the two terms in $y$."
              },
              {
                "step": "$x = 2(y^2 + 18y + 81) - 162 + 179$",
                "reason": "Completing the square: $81$ is added inside the bracket, which adds $2 \\cdot 81 = 162$ to the right side, so $-162$ is put outside to leave the value unchanged."
              },
              {
                "step": "$x = 2(y + 9)^2 - 162 + 179$",
                "reason": "Completing the square: $y^2 + 18y + 81 = (y + 9)^2$, half of $18$ being $9$."
              },
              {
                "step": "$x = 2(y + 9)^2 + 17$",
                "reason": "Collecting like terms: $-162 + 179 = 17$."
              },
              {
                "step": "So $a = 2$, $k = -9$ and $h = 17$.",
                "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
              },
              {
                "step": "$t = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
              },
              {
                "step": "The focus is $(h + t, k) = \\left(17 + \\dfrac{1}{8}, -9\\right) = \\left(\\dfrac{137}{8}, -9\\right)$.",
                "reason": "Focal distance: the focus of the graph of $x = a(y - k)^2 + h$ is $(h + t, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the focus of the graph of $x = 2y^2 - 4y + 29$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(217/8, 1)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $x = 2y^2 - 4y + 29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2(y^2 - 2y) + 29$",
                  "reason": "Taking out a common factor: $2$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = 2(y^2 - 2y + 1) - 2 + 29$",
                  "reason": "Completing the square: $1$ is added inside the bracket, which adds $2 \\cdot 1 = 2$ to the right side, so $-2$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = 2(y - 1)^2 - 2 + 29$",
                  "reason": "Completing the square: $y^2 - 2y + 1 = (y - 1)^2$, half of $-2$ being $-1$."
                },
                {
                  "step": "$x = 2(y - 1)^2 + 27$",
                  "reason": "Collecting like terms: $-2 + 29 = 27$."
                },
                {
                  "step": "So $a = 2$, $k = 1$ and $h = 27$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The focus is $(h + t, k) = \\left(27 + \\dfrac{1}{8}, 1\\right) = \\left(\\dfrac{217}{8}, 1\\right)$.",
                  "reason": "Focal distance: the focus of the graph of $x = a(y - k)^2 + h$ is $(h + t, k)$."
                }
              ]
            },
            {
              "prompt": "Find the focus of the graph of $x = 4y^2 - 40y + 114$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(225/16, 5)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $x = 4y^2 - 40y + 114$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 4(y^2 - 10y) + 114$",
                  "reason": "Taking out a common factor: $4$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = 4(y^2 - 10y + 25) - 100 + 114$",
                  "reason": "Completing the square: $25$ is added inside the bracket, which adds $4 \\cdot 25 = 100$ to the right side, so $-100$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = 4(y - 5)^2 - 100 + 114$",
                  "reason": "Completing the square: $y^2 - 10y + 25 = (y - 5)^2$, half of $-10$ being $-5$."
                },
                {
                  "step": "$x = 4(y - 5)^2 + 14$",
                  "reason": "Collecting like terms: $-100 + 114 = 14$."
                },
                {
                  "step": "So $a = 4$, $k = 5$ and $h = 14$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 4} = \\dfrac{1}{16}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The focus is $(h + t, k) = \\left(14 + \\dfrac{1}{16}, 5\\right) = \\left(\\dfrac{225}{16}, 5\\right)$.",
                  "reason": "Focal distance: the focus of the graph of $x = a(y - k)^2 + h$ is $(h + t, k)$."
                }
              ]
            },
            {
              "prompt": "Find the focus of the graph of $x = -5y^2 + 50y - 154$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-581/20, 5)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $x = -5y^2 + 50y - 154$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -5(y^2 - 10y) - 154$",
                  "reason": "Taking out a common factor: $-5$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = -5(y^2 - 10y + 25) + 125 - 154$",
                  "reason": "Completing the square: $25$ is added inside the bracket, which adds $(-5) \\cdot 25 = -125$ to the right side, so $125$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = -5(y - 5)^2 + 125 - 154$",
                  "reason": "Completing the square: $y^2 - 10y + 25 = (y - 5)^2$, half of $-10$ being $-5$."
                },
                {
                  "step": "$x = -5(y - 5)^2 - 29$",
                  "reason": "Collecting like terms: $125 - 154 = -29$."
                },
                {
                  "step": "So $a = -5$, $k = 5$ and $h = -29$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot (-5)} = -\\dfrac{1}{20}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The focus is $(h + t, k) = \\left(-29 + \\left(-\\dfrac{1}{20}\\right), 5\\right) = \\left(-\\dfrac{581}{20}, 5\\right)$.",
                  "reason": "Focal distance: the focus of the graph of $x = a(y - k)^2 + h$ is $(h + t, k)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the directrix of the graph of $x = 4y^2 + 64y + 241$, as an equation with $x$ alone on the left.",
            "lines": [
              {
                "step": "Find the directrix of the graph of $x = 4y^2 + 64y + 241$, as an equation with $x$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 4(y^2 + 16y) + 241$",
                "reason": "Taking out a common factor: $4$ is taken out of the two terms in $y$."
              },
              {
                "step": "$x = 4(y^2 + 16y + 64) - 256 + 241$",
                "reason": "Completing the square: $64$ is added inside the bracket, which adds $4 \\cdot 64 = 256$ to the right side, so $-256$ is put outside to leave the value unchanged."
              },
              {
                "step": "$x = 4(y + 8)^2 - 256 + 241$",
                "reason": "Completing the square: $y^2 + 16y + 64 = (y + 8)^2$, half of $16$ being $8$."
              },
              {
                "step": "$x = 4(y + 8)^2 - 15$",
                "reason": "Collecting like terms: $-256 + 241 = -15$."
              },
              {
                "step": "So $a = 4$, $k = -8$ and $h = -15$.",
                "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
              },
              {
                "step": "$t = \\dfrac{1}{4 \\cdot 4} = \\dfrac{1}{16}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
              },
              {
                "step": "The directrix is the line $x = -15 - \\dfrac{1}{16} = -\\dfrac{241}{16}$.",
                "reason": "Focal distance: the directrix of the graph of $x = a(y - k)^2 + h$ is $x = h - t$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the directrix of the graph of $x = 3y^2 + 36y + 122$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 167/12",
              "lines": [
                {
                  "step": "Find the directrix of the graph of $x = 3y^2 + 36y + 122$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 3(y^2 + 12y) + 122$",
                  "reason": "Taking out a common factor: $3$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = 3(y^2 + 12y + 36) - 108 + 122$",
                  "reason": "Completing the square: $36$ is added inside the bracket, which adds $3 \\cdot 36 = 108$ to the right side, so $-108$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = 3(y + 6)^2 - 108 + 122$",
                  "reason": "Completing the square: $y^2 + 12y + 36 = (y + 6)^2$, half of $12$ being $6$."
                },
                {
                  "step": "$x = 3(y + 6)^2 + 14$",
                  "reason": "Collecting like terms: $-108 + 122 = 14$."
                },
                {
                  "step": "So $a = 3$, $k = -6$ and $h = 14$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 3} = \\dfrac{1}{12}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The directrix is the line $x = 14 - \\dfrac{1}{12} = \\dfrac{167}{12}$.",
                  "reason": "Focal distance: the directrix of the graph of $x = a(y - k)^2 + h$ is $x = h - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the graph of $x = 2y^2 - 12y + 38$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 159/8",
              "lines": [
                {
                  "step": "Find the directrix of the graph of $x = 2y^2 - 12y + 38$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2(y^2 - 6y) + 38$",
                  "reason": "Taking out a common factor: $2$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = 2(y^2 - 6y + 9) - 18 + 38$",
                  "reason": "Completing the square: $9$ is added inside the bracket, which adds $2 \\cdot 9 = 18$ to the right side, so $-18$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = 2(y - 3)^2 - 18 + 38$",
                  "reason": "Completing the square: $y^2 - 6y + 9 = (y - 3)^2$, half of $-6$ being $-3$."
                },
                {
                  "step": "$x = 2(y - 3)^2 + 20$",
                  "reason": "Collecting like terms: $-18 + 38 = 20$."
                },
                {
                  "step": "So $a = 2$, $k = 3$ and $h = 20$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The directrix is the line $x = 20 - \\dfrac{1}{8} = \\dfrac{159}{8}$.",
                  "reason": "Focal distance: the directrix of the graph of $x = a(y - k)^2 + h$ is $x = h - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the graph of $x = -4y^2 - 24y - 19$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 273/16",
              "lines": [
                {
                  "step": "Find the directrix of the graph of $x = -4y^2 - 24y - 19$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -4(y^2 + 6y) - 19$",
                  "reason": "Taking out a common factor: $-4$ is taken out of the two terms in $y$."
                },
                {
                  "step": "$x = -4(y^2 + 6y + 9) + 36 - 19$",
                  "reason": "Completing the square: $9$ is added inside the bracket, which adds $(-4) \\cdot 9 = -36$ to the right side, so $36$ is put outside to leave the value unchanged."
                },
                {
                  "step": "$x = -4(y + 3)^2 + 36 - 19$",
                  "reason": "Completing the square: $y^2 + 6y + 9 = (y + 3)^2$, half of $6$ being $3$."
                },
                {
                  "step": "$x = -4(y + 3)^2 + 17$",
                  "reason": "Collecting like terms: $36 - 19 = 17$."
                },
                {
                  "step": "So $a = -4$, $k = -3$ and $h = 17$.",
                  "reason": "Standard form $x = a(y - k)^2 + h$: the equation is compared with it term by term."
                },
                {
                  "step": "$t = \\dfrac{1}{4 \\cdot (-4)} = -\\dfrac{1}{16}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$."
                },
                {
                  "step": "The directrix is the line $x = 17 - \\left(-\\dfrac{1}{16}\\right) = \\dfrac{273}{16}$.",
                  "reason": "Focal distance: the directrix of the graph of $x = a(y - k)^2 + h$ is $x = h - t$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t189-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the directrix of the parabola with vertex $(-12, -14)$ and focus $(-12, -16)$, as an equation with $y$ alone on the left.",
            "lines": [
              {
                "step": "Find the directrix of the parabola with vertex $(-12, -14)$ and focus $(-12, -16)$, as an equation with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The vertex and the focus have the same $x$-coordinate, so the axis of symmetry is the vertical line $x = -12$, and the directrix is a horizontal line.",
                "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
              },
              {
                "step": "$t = -16 - (-14) = -2$",
                "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
              },
              {
                "step": "The directrix is the line $y = -14 - (-2) = -12$.",
                "reason": "Focal distance: the directrix is $y = k - t$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the directrix of the parabola with vertex $(-9, -15)$ and focus $(-9, -9)$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -21",
              "lines": [
                {
                  "step": "Find the directrix of the parabola with vertex $(-9, -15)$ and focus $(-9, -9)$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex and the focus have the same $x$-coordinate, so the axis of symmetry is the vertical line $x = -9$, and the directrix is a horizontal line.",
                  "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
                },
                {
                  "step": "$t = -9 - (-15) = 6$",
                  "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "The directrix is the line $y = -15 - 6 = -21$.",
                  "reason": "Focal distance: the directrix is $y = k - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the parabola with vertex $(12, -15)$ and focus $(12, -16)$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -14",
              "lines": [
                {
                  "step": "Find the directrix of the parabola with vertex $(12, -15)$ and focus $(12, -16)$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex and the focus have the same $x$-coordinate, so the axis of symmetry is the vertical line $x = 12$, and the directrix is a horizontal line.",
                  "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
                },
                {
                  "step": "$t = -16 - (-15) = -1$",
                  "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "The directrix is the line $y = -15 - (-1) = -14$.",
                  "reason": "Focal distance: the directrix is $y = k - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the parabola with vertex $(-11, 3)$ and focus $(-11, 8)$, as an equation with $y$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "y = -2",
              "lines": [
                {
                  "step": "Find the directrix of the parabola with vertex $(-11, 3)$ and focus $(-11, 8)$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex and the focus have the same $x$-coordinate, so the axis of symmetry is the vertical line $x = -11$, and the directrix is a horizontal line.",
                  "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
                },
                {
                  "step": "$t = 8 - 3 = 5$",
                  "reason": "Focal distance: the focus is $(h, k + t)$, so $t$ is the $y$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "The directrix is the line $y = 3 - 5 = -2$.",
                  "reason": "Focal distance: the directrix is $y = k - t$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the directrix of the parabola with vertex $(-12, -13)$ and focus $(-6, -13)$, as an equation with $x$ alone on the left.",
            "lines": [
              {
                "step": "Find the directrix of the parabola with vertex $(-12, -13)$ and focus $(-6, -13)$, as an equation with $x$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The vertex and the focus have the same $y$-coordinate, so the axis of symmetry is the horizontal line $y = -13$, and the directrix is a vertical line.",
                "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
              },
              {
                "step": "$t = -6 - (-12) = 6$",
                "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
              },
              {
                "step": "The directrix is the line $x = -12 - 6 = -18$.",
                "reason": "Focal distance: the directrix is $x = h - t$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the directrix of the parabola with vertex $(6, 13)$ and focus $(3, 13)$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 9",
              "lines": [
                {
                  "step": "Find the directrix of the parabola with vertex $(6, 13)$ and focus $(3, 13)$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex and the focus have the same $y$-coordinate, so the axis of symmetry is the horizontal line $y = 13$, and the directrix is a vertical line.",
                  "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
                },
                {
                  "step": "$t = 3 - 6 = -3$",
                  "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "The directrix is the line $x = 6 - (-3) = 9$.",
                  "reason": "Focal distance: the directrix is $x = h - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the parabola with vertex $(11, -13)$ and focus $(12, -13)$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 10",
              "lines": [
                {
                  "step": "Find the directrix of the parabola with vertex $(11, -13)$ and focus $(12, -13)$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex and the focus have the same $y$-coordinate, so the axis of symmetry is the horizontal line $y = -13$, and the directrix is a vertical line.",
                  "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
                },
                {
                  "step": "$t = 12 - 11 = 1$",
                  "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "The directrix is the line $x = 11 - 1 = 10$.",
                  "reason": "Focal distance: the directrix is $x = h - t$."
                }
              ]
            },
            {
              "prompt": "Find the directrix of the parabola with vertex $(11, 8)$ and focus $(9, 8)$, as an equation with $x$ alone on the left.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 13",
              "lines": [
                {
                  "step": "Find the directrix of the parabola with vertex $(11, 8)$ and focus $(9, 8)$, as an equation with $x$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The vertex and the focus have the same $y$-coordinate, so the axis of symmetry is the horizontal line $y = 8$, and the directrix is a vertical line.",
                  "reason": "Parabola (focus and directrix): the axis of symmetry is the line through the focus perpendicular to the directrix, and the vertex lies on it."
                },
                {
                  "step": "$t = 9 - 11 = -2$",
                  "reason": "Focal distance: the focus is $(h + t, k)$, so $t$ is the $x$-coordinate of the focus minus that of the vertex."
                },
                {
                  "step": "The directrix is the line $x = 11 - (-2) = 13$.",
                  "reason": "Focal distance: the directrix is $x = h - t$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t189-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the focus of the graph of $y = -3x^2 - 54x - 215$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
            "given": [
              "$y = -3x^2 - 54x - 215$",
              "$y = -3(x^2 + 18x) - 215$",
              "$y = -3(x^2 + 18x + 81) + 243 - 215$",
              "$y = -3(x + 9)^2 + 243 - 215$",
              "$y = -3(x + 9)^2 + 28$",
              "$a = -3$, $h = -9$, $k = 28$",
              "$t = -\\dfrac{1}{12}$",
              "The focus is $\\left(-9, \\dfrac{337}{12}\\right)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the focus of the graph of $y = -3x^2 - 54x - 215$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 8 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 8 takes $t$ away from $k$ instead of adding it.",
                "reason": "A sign lost: the focus of $y = a(x - h)^2 + k$ is $(h, k + t)$, so $t$ is added to $k$."
              },
              {
                "step": "Line 8 written right reads: the focus is $\\left(-9, \\dfrac{335}{12}\\right)$.",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the focus of $y = a(x - h)^2 + k$ is $(h, k + t)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the focus of the graph of $y = -5x^2 + 10x + 12$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
              "given": [
                "$y = -5x^2 + 10x + 12$",
                "$y = -5(x^2 - 2x) + 12$",
                "$y = -5(x^2 - 2x + 1) + 5 + 12$",
                "$y = -5(x - 1)^2 + 5 + 12$",
                "$y = -5(x - 1)^2 + 17$",
                "$a = -5$, $h = 1$, $k = 17$",
                "$t = \\dfrac{1}{20}$",
                "The focus is $\\left(1, \\dfrac{341}{20}\\right)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: t = -1/20",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the focus of the graph of $y = -5x^2 + 10x + 12$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 7 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 7 gives $t$ the sign opposite to the sign of $a = -5$.",
                  "reason": "A sign lost: $t = \\dfrac{1}{4a}$ has the same sign as $a$."
                },
                {
                  "step": "Line 7 written right is $t = -\\dfrac{1}{20}$.",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the focus of $y = a(x - h)^2 + k$ is $(h, k + t)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the focus of the graph of $y = 6x^2 - 24x + 28$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
              "given": [
                "$y = 6x^2 - 24x + 28$",
                "$y = 6(x^2 - 4x) + 28$",
                "$y = 6(x^2 - 4x + 4) - 24 + 28$",
                "$y = 6(x - 2)^2 - 24 + 28$",
                "$y = 6(x - 2)^2 + 4$",
                "$a = 6$, $h = 2$, $k = 4$",
                "$t = \\dfrac{1}{24}$",
                "The focus is $\\left(2, \\dfrac{95}{24}\\right)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: (2, 97/24)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the focus of the graph of $y = 6x^2 - 24x + 28$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 8 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 8 takes $t$ away from $k$ instead of adding it.",
                  "reason": "A sign lost: the focus of $y = a(x - h)^2 + k$ is $(h, k + t)$, so $t$ is added to $k$."
                },
                {
                  "step": "Line 8 written right reads: the focus is $\\left(2, \\dfrac{97}{24}\\right)$.",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the focus of $y = a(x - h)^2 + k$ is $(h, k + t)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the focus of the graph of $y = 4x^2 - 48x + 171$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
              "given": [
                "$y = 4x^2 - 48x + 171$",
                "$y = 4(x^2 - 12x) + 171$",
                "$y = 4(x^2 - 12x + 36) - 144 + 171$",
                "$y = 4(x - 6)^2 - 144 + 171$",
                "$y = 4(x - 6)^2 + 27$",
                "$a = 4$, $h = 6$, $k = 27$",
                "$t = -\\dfrac{1}{16}$",
                "The focus is $\\left(6, \\dfrac{431}{16}\\right)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: t = 1/16",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the focus of the graph of $y = 4x^2 - 48x + 171$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 7 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 7 gives $t$ the sign opposite to the sign of $a = 4$.",
                  "reason": "A sign lost: $t = \\dfrac{1}{4a}$ has the same sign as $a$."
                },
                {
                  "step": "Line 7 written right is $t = \\dfrac{1}{16}$.",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the focus of $y = a(x - h)^2 + k$ is $(h, k + t)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the directrix of the graph of $x = 3y^2 + 30y + 83$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
            "given": [
              "$x = 3y^2 + 30y + 83$",
              "$x = 3(y^2 + 10y) + 83$",
              "$x = 3(y^2 + 10y + 25) - 75 + 83$",
              "$x = 3(y + 5)^2 - 75 + 83$",
              "$x = 3(y + 5)^2 + 8$",
              "$a = 3$, $k = -5$, $h = 8$",
              "$t = \\dfrac{1}{12}$",
              "The directrix is $x = \\dfrac{97}{12}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the directrix of the graph of $x = 3y^2 + 30y + 83$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 8 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 8 adds $t$ to $h$ instead of taking it away.",
                "reason": "A sign lost: the directrix of $x = a(y - k)^2 + h$ is $x = h - t$, so $t$ is taken away from $h$."
              },
              {
                "step": "Line 8 written right reads: the directrix is $x = \\dfrac{95}{12}$.",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the directrix of $x = a(y - k)^2 + h$ is $x = h - t$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the directrix of the graph of $x = -4y^2 - 40y - 125$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
              "given": [
                "$x = -4y^2 - 40y - 125$",
                "$x = -4(y^2 + 10y) - 125$",
                "$x = -4(y^2 + 10y + 25) + 100 - 125$",
                "$x = -4(y + 5)^2 + 100 - 125$",
                "$x = -4(y + 5)^2 - 25$",
                "$a = -4$, $k = -5$, $h = -25$",
                "$t = \\dfrac{1}{16}$",
                "The directrix is $x = -\\dfrac{401}{16}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: t = -1/16",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the directrix of the graph of $x = -4y^2 - 40y - 125$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 7 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 7 gives $t$ the sign opposite to the sign of $a = -4$.",
                  "reason": "A sign lost: $t = \\dfrac{1}{4a}$ has the same sign as $a$."
                },
                {
                  "step": "Line 7 written right is $t = -\\dfrac{1}{16}$.",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the directrix of $x = a(y - k)^2 + h$ is $x = h - t$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the directrix of the graph of $x = 6y^2 - 48y + 77$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
              "given": [
                "$x = 6y^2 - 48y + 77$",
                "$x = 6(y^2 - 8y) + 77$",
                "$x = 6(y^2 - 8y + 16) - 96 + 77$",
                "$x = 6(y - 4)^2 - 96 + 77$",
                "$x = 6(y - 4)^2 - 19$",
                "$a = 6$, $k = 4$, $h = -19$",
                "$t = \\dfrac{1}{24}$",
                "The directrix is $x = -\\dfrac{455}{24}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: x = -457/24",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the directrix of the graph of $x = 6y^2 - 48y + 77$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 8 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 8 adds $t$ to $h$ instead of taking it away.",
                  "reason": "A sign lost: the directrix of $x = a(y - k)^2 + h$ is $x = h - t$, so $t$ is taken away from $h$."
                },
                {
                  "step": "Line 8 written right reads: the directrix is $x = -\\dfrac{457}{24}$.",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the directrix of $x = a(y - k)^2 + h$ is $x = h - t$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the directrix of the graph of $x = 2y^2 - 28y + 75$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
              "given": [
                "$x = 2y^2 - 28y + 75$",
                "$x = 2(y^2 - 14y) + 75$",
                "$x = 2(y^2 - 14y + 49) - 98 + 75$",
                "$x = 2(y - 7)^2 - 98 + 75$",
                "$x = 2(y - 7)^2 - 23$",
                "$a = 2$, $k = 7$, $h = -23$",
                "$t = -\\dfrac{1}{8}$",
                "The directrix is $x = -\\dfrac{183}{8}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: t = 1/8",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the directrix of the graph of $x = 2y^2 - 28y + 75$, and write that line right. In the working, $t = \\dfrac{1}{4a}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 7 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 7 gives $t$ the sign opposite to the sign of $a = 2$.",
                  "reason": "A sign lost: $t = \\dfrac{1}{4a}$ has the same sign as $a$."
                },
                {
                  "step": "Line 7 written right is $t = \\dfrac{1}{8}$.",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, and the directrix of $x = a(y - k)^2 + h$ is $x = h - t$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the equation of the parabola with focus $(12, -11)$ and directrix $y = -7$, and write that line right.",
            "given": [
              "$\\sqrt{(x - 12)^2 + (y + 11)^2} = |y + 7|$",
              "$(x - 12)^2 + (y + 11)^2 = (y + 7)^2$",
              "$(x - 12)^2 = (y + 7)^2 - (y + 11)^2$",
              "$(x - 12)^2 = y^2 + 49 - (y + 11)^2$",
              "$(x - 12)^2 = y^2 + 49 - (y^2 + 22y + 121)$",
              "$(x - 12)^2 = -22y - 72$",
              "$-22y = (x - 12)^2 + 72$",
              "$y = -\\dfrac{1}{22}(x - 12)^2 - \\dfrac{36}{11}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the equation of the parabola with focus $(12, -11)$ and directrix $y = -7$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 sets the two distances equal, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 squares $y + 7$ term by term.",
                "reason": "A power taken term by term over a sum: $(y + 7)^2$ is $y^2 + 14y + 49$, not $y^2 + 49$."
              },
              {
                "step": "Line 4 written right is $(x - 12)^2 = y^2 + 14y + 49 - (y + 11)^2$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the equation of the parabola with focus $(7, -6)$ and directrix $x = 3$, and write that line right.",
              "given": [
                "$\\sqrt{(x - 7)^2 + (y + 6)^2} = |x - 3|$",
                "$(x - 7)^2 + (y + 6)^2 = (x - 3)^2$",
                "$(y + 6)^2 = (x - 3)^2 - (x - 7)^2$",
                "$(y + 6)^2 = x^2 - 6x + 9 - (x - 7)^2$",
                "$(y + 6)^2 = x^2 - 6x + 9 - (x^2 + 49)$",
                "$(y + 6)^2 = -6x - 40$",
                "$-6x = (y + 6)^2 + 40$",
                "$x = -\\dfrac{1}{6}(y + 6)^2 - \\dfrac{20}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (y+6)^2 = x^2-6*x+9-(x^2-14*x+49)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the equation of the parabola with focus $(7, -6)$ and directrix $x = 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 sets the two distances equal, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 squares $x - 7$ term by term.",
                  "reason": "A power taken term by term over a sum: $(x - 7)^2$ is $x^2 - 14x + 49$, not $x^2 + 49$."
                },
                {
                  "step": "Line 5 written right is $(y + 6)^2 = x^2 - 6x + 9 - (x^2 - 14x + 49)$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the equation of the parabola with focus $(-10, -13)$ and directrix $y = -7$, and write that line right.",
              "given": [
                "$\\sqrt{(x + 10)^2 + (y + 13)^2} = |y + 7|$",
                "$(x + 10)^2 + (y + 13)^2 = (y + 7)^2$",
                "$(x + 10)^2 = (y + 7)^2 - (y + 13)^2$",
                "$(x + 10)^2 = y^2 + 49 - (y + 13)^2$",
                "$(x + 10)^2 = y^2 + 49 - (y^2 + 26y + 169)$",
                "$(x + 10)^2 = -26y - 120$",
                "$-26y = (x + 10)^2 + 120$",
                "$y = -\\dfrac{1}{26}(x + 10)^2 - \\dfrac{60}{13}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x+10)^2 = y^2+14*y+49-(y+13)^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the equation of the parabola with focus $(-10, -13)$ and directrix $y = -7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 sets the two distances equal, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 squares $y + 7$ term by term.",
                  "reason": "A power taken term by term over a sum: $(y + 7)^2$ is $y^2 + 14y + 49$, not $y^2 + 49$."
                },
                {
                  "step": "Line 4 written right is $(x + 10)^2 = y^2 + 14y + 49 - (y + 13)^2$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the equation of the parabola with focus $(7, 12)$ and directrix $x = 5$, and write that line right.",
              "given": [
                "$\\sqrt{(x - 7)^2 + (y - 12)^2} = |x - 5|$",
                "$(x - 7)^2 + (y - 12)^2 = (x - 5)^2$",
                "$(y - 12)^2 = (x - 5)^2 - (x - 7)^2$",
                "$(y - 12)^2 = x^2 - 10x + 25 - (x - 7)^2$",
                "$(y - 12)^2 = x^2 - 10x + 25 - (x^2 + 49)$",
                "$(y - 12)^2 = -10x - 24$",
                "$-10x = (y - 12)^2 + 24$",
                "$x = -\\dfrac{1}{10}(y - 12)^2 - \\dfrac{12}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (y-12)^2 = x^2-10*x+25-(x^2-14*x+49)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the equation of the parabola with focus $(7, 12)$ and directrix $x = 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 sets the two distances equal, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 squares $x - 7$ term by term.",
                  "reason": "A power taken term by term over a sum: $(x - 7)^2$ is $x^2 - 14x + 49$, not $x^2 + 49$."
                },
                {
                  "step": "Line 5 written right is $(y - 12)^2 = x^2 - 10x + 25 - (x^2 - 14x + 49)$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t189-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(10, -2)$; read its directrix, the dashed line, from the grid.",
            "figure": {
              "file": "focus-and-directrix-1.svg",
              "alt": "A parabola opening upward with its focus F at (10, −2) and its directrix, a dashed horizontal line, crossing the y-axis at a grid mark."
            },
            "lines": [
              {
                "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(10, -2)$; read its directrix, the dashed line, from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The directrix is the line $y = -6$.",
                "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
              },
              {
                "step": "The vertex is $\\left(10, \\dfrac{-2 + (-6)}{2}\\right) = (10, -4)$.",
                "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(10, -6)$, the point where the axis meets the directrix."
              },
              {
                "step": "$t = -2 - (-4) = 2$",
                "reason": "Focal distance: the focus is $(h, k + t)$."
              },
              {
                "step": "$a = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
              },
              {
                "step": "$y = \\dfrac{1}{8}(x - 10)^2 - 4$",
                "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $y = a(x - h)^2 + k$, which is the equation of the drawn curve."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(8, -6)$; read its directrix, the dashed line, from the grid.",
              "figure": {
                "file": "focus-and-directrix-2.svg",
                "alt": "A parabola opening downward with its focus F at (8, −6) and its directrix, a dashed horizontal line, crossing the y-axis at a grid mark."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/8*(x-8)^2-4",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(8, -6)$; read its directrix, the dashed line, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The directrix is the line $y = -2$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "The vertex is $\\left(8, \\dfrac{-6 + (-2)}{2}\\right) = (8, -4)$.",
                  "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(8, -2)$, the point where the axis meets the directrix."
                },
                {
                  "step": "$t = -6 - (-4) = -2$",
                  "reason": "Focal distance: the focus is $(h, k + t)$."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = -\\dfrac{1}{8}(x - 8)^2 - 4$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $y = a(x - h)^2 + k$, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(-2, 10)$; read its directrix, the dashed line, from the grid.",
              "figure": {
                "file": "focus-and-directrix-3.svg",
                "alt": "A parabola opening downward with its focus F at (−2, 10) and its directrix, a dashed horizontal line, crossing the y-axis at a grid mark."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/8*(x+2)^2+12",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(-2, 10)$; read its directrix, the dashed line, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The directrix is the line $y = 14$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "The vertex is $\\left(-2, \\dfrac{10 + 14}{2}\\right) = (-2, 12)$.",
                  "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(-2, 14)$, the point where the axis meets the directrix."
                },
                {
                  "step": "$t = 10 - 12 = -2$",
                  "reason": "Focal distance: the focus is $(h, k + t)$."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = -\\dfrac{1}{8}(x + 2)^2 + 12$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $y = a(x - h)^2 + k$, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(4, 12)$; read its directrix, the dashed line, from the grid.",
              "figure": {
                "file": "focus-and-directrix-4.svg",
                "alt": "A parabola opening downward with its focus F at (4, 12) and its directrix, a dashed horizontal line, crossing the y-axis at a grid mark."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/8*(x-4)^2+14",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $y$ alone on the left. Its focus F is $(4, 12)$; read its directrix, the dashed line, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The directrix is the line $y = 16$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "The vertex is $\\left(4, \\dfrac{12 + 16}{2}\\right) = (4, 14)$.",
                  "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(4, 16)$, the point where the axis meets the directrix."
                },
                {
                  "step": "$t = 12 - 14 = -2$",
                  "reason": "Focal distance: the focus is $(h, k + t)$."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$y = -\\dfrac{1}{8}(x - 4)^2 + 14$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $y = a(x - h)^2 + k$, which is the equation of the drawn curve."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(-4, 16)$; read its directrix, the dashed line, from the grid.",
            "figure": {
              "file": "focus-and-directrix-12.svg",
              "alt": "A parabola opening to the right with its focus F at (−4, 16) and its directrix, a dashed vertical line, crossing the x-axis at a grid mark."
            },
            "lines": [
              {
                "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(-4, 16)$; read its directrix, the dashed line, from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The directrix is the line $x = -6$.",
                "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
              },
              {
                "step": "The vertex is $\\left(\\dfrac{-4 + (-6)}{2}, 16\\right) = (-5, 16)$.",
                "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(-6, 16)$, the point where the axis meets the directrix."
              },
              {
                "step": "$t = -4 - (-5) = 1$",
                "reason": "Focal distance: the focus is $(h + t, k)$."
              },
              {
                "step": "$a = \\dfrac{1}{4 \\cdot 1} = \\dfrac{1}{4}$",
                "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
              },
              {
                "step": "$x = \\dfrac{1}{4}(y - 16)^2 - 5$",
                "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $x = a(y - k)^2 + h$, which is the equation of the drawn curve."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(8, 16)$; read its directrix, the dashed line, from the grid.",
              "figure": {
                "file": "focus-and-directrix-13.svg",
                "alt": "A parabola opening to the left with its focus F at (8, 16) and its directrix, a dashed vertical line, crossing the x-axis at a grid mark."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = -1/8*(y-16)^2+10",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(8, 16)$; read its directrix, the dashed line, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The directrix is the line $x = 12$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "The vertex is $\\left(\\dfrac{8 + 12}{2}, 16\\right) = (10, 16)$.",
                  "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(12, 16)$, the point where the axis meets the directrix."
                },
                {
                  "step": "$t = 8 - 10 = -2$",
                  "reason": "Focal distance: the focus is $(h + t, k)$."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot (-2)} = -\\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = -\\dfrac{1}{8}(y - 16)^2 + 10$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $x = a(y - k)^2 + h$, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(8, 8)$; read its directrix, the dashed line, from the grid.",
              "figure": {
                "file": "focus-and-directrix-14.svg",
                "alt": "A parabola opening to the right with its focus F at (8, 8) and its directrix, a dashed vertical line, crossing the x-axis at a grid mark."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 1/4*(y-8)^2+7",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(8, 8)$; read its directrix, the dashed line, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The directrix is the line $x = 6$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "The vertex is $\\left(\\dfrac{8 + 6}{2}, 8\\right) = (7, 8)$.",
                  "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(6, 8)$, the point where the axis meets the directrix."
                },
                {
                  "step": "$t = 8 - 7 = 1$",
                  "reason": "Focal distance: the focus is $(h + t, k)$."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 1} = \\dfrac{1}{4}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = \\dfrac{1}{4}(y - 8)^2 + 7$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $x = a(y - k)^2 + h$, which is the equation of the drawn curve."
                }
              ]
            },
            {
              "prompt": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(8, -14)$; read its directrix, the dashed line, from the grid.",
              "figure": {
                "file": "focus-and-directrix-15.svg",
                "alt": "A parabola opening to the right with its focus F at (8, −14) and its directrix, a dashed vertical line, crossing the x-axis at a grid mark."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 1/8*(y+14)^2+6",
              "lines": [
                {
                  "step": "Write the equation of the parabola in the figure, with $x$ alone on the left. Its focus F is $(8, -14)$; read its directrix, the dashed line, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The directrix is the line $x = 4$.",
                  "reason": "Coordinates: the $x$-coordinate is read across and the $y$-coordinate up the grid."
                },
                {
                  "step": "The vertex is $\\left(\\dfrac{8 + 4}{2}, -14\\right) = (6, -14)$.",
                  "reason": "Focal distance and Midpoint formula: the vertex is the midpoint of the focus and $(4, -14)$, the point where the axis meets the directrix."
                },
                {
                  "step": "$t = 8 - 6 = 2$",
                  "reason": "Focal distance: the focus is $(h + t, k)$."
                },
                {
                  "step": "$a = \\dfrac{1}{4 \\cdot 2} = \\dfrac{1}{8}$",
                  "reason": "Focal distance: $t = \\dfrac{1}{4a}$, so $a = \\dfrac{1}{4t}$."
                },
                {
                  "step": "$x = \\dfrac{1}{8}(y + 14)^2 + 6$",
                  "reason": "Writing a sentence as an equation: the vertex and $a$ fill the standard form $x = a(y - k)^2 + h$, which is the equation of the drawn curve."
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
      "id": "t189-p1",
      "method": "proof by cases",
      "statement": "For all numbers $h$, $c$ and $d$ with $c \\ne d$, the parabola with focus $(h, c)$ and directrix $y = d$ meets the line $x = h$ at exactly one point, $\\left(h, \\dfrac{c + d}{2}\\right)$, and that point is the midpoint of the focus and the point $(h, d)$.",
      "idea": "On the line through the focus perpendicular to the directrix, a point is as far from the focus as from the directrix only halfway between them.",
      "lines": [
        {
          "line": "A point $(h, y)$ of the line $x = h$ is on the parabola exactly when its distance to $(h, c)$ equals its distance to the line $y = d$.",
          "reason": "Parabola (focus and directrix)."
        },
        {
          "line": "The distance from $(h, y)$ to $(h, c)$ is $\\sqrt{(h - h)^2 + (y - c)^2}$.",
          "reason": "Distance formula."
        },
        {
          "line": "This distance is $\\sqrt{(y - c)^2}$.",
          "reason": "A number minus itself is $0$, and $0^2 = 0$."
        },
        {
          "line": "So the distance is $|y - c|$.",
          "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
        },
        {
          "line": "The distance from $(h, y)$ to the line $y = d$ is $|y - d|$.",
          "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $y = d$ is $|y - d|$."
        },
        {
          "line": "So $(h, y)$ is on the parabola exactly when $|y - c| = |y - d|$.",
          "reason": "Lines 1, 4 and 5."
        },
        {
          "line": "Two numbers have the same absolute value exactly when they are equal or opposite, so $|y - c| = |y - d|$ exactly when $y - c = y - d$ or $y - c = -(y - d)$.",
          "reason": "Absolute value, from arithmetic: two numbers at the same distance from $0$ are equal or opposite."
        },
        {
          "line": "In the first case, $y - c = y - d$, so $c = d$.",
          "reason": "Adding the same number to both sides: $c + d - y$ is added to each side."
        },
        {
          "line": "The hypothesis says $c \\ne d$, so the first case gives no point.",
          "reason": "The hypothesis, with line 8."
        },
        {
          "line": "In the second case, $y - c = -(y - d)$, so $y - c = -y + d$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "So $2y = c + d$.",
          "reason": "Adding the same number to both sides: $y + c$ is added to each side."
        },
        {
          "line": "So $y = \\dfrac{c + d}{2}$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
        },
        {
          "line": "So the one point of the parabola on the line $x = h$ is $\\left(h, \\dfrac{c + d}{2}\\right)$.",
          "reason": "Lines 6, 7, 9 and 12: each step from line 10 on can be read backwards."
        },
        {
          "line": "The midpoint of $(h, c)$ and $(h, d)$ is $\\left(\\dfrac{h + h}{2}, \\dfrac{c + d}{2}\\right)$.",
          "reason": "Midpoint formula."
        },
        {
          "line": "Here $\\dfrac{h + h}{2} = h$, so the midpoint is $\\left(h, \\dfrac{c + d}{2}\\right)$.",
          "reason": "Collecting like terms: $h + h = 2h$, and $2h \\div 2 = h$."
        },
        {
          "line": "So the point of line 13 is the midpoint of the focus and $(h, d)$.",
          "reason": "Lines 13 and 15."
        }
      ]
    },
    {
      "id": "t189-p2",
      "method": "direct proof",
      "statement": "For every number $t \\ne 0$, a point $(x, y)$ is as far from the point $(0, t)$ as from the line $y = -t$ exactly when $y = \\dfrac{x^2}{4t}$.",
      "idea": "Set the two distances equal and square to clear the root and the absolute value; the squares of $y$ and of $t$ cancel and leave $x^2 = 4ty$. Every step can be read backwards.",
      "lines": [
        {
          "line": "Let $(x, y)$ be as far from $(0, t)$ as from the line $y = -t$.",
          "reason": "The first direction: its hypothesis."
        },
        {
          "line": "Its distance from $(0, t)$ is $\\sqrt{(x - 0)^2 + (y - t)^2}$.",
          "reason": "Distance formula."
        },
        {
          "line": "This is $\\sqrt{x^2 + (y - t)^2}$.",
          "reason": "Taking away $0$ leaves a number as it is."
        },
        {
          "line": "Its distance from the line $y = -t$ is $|y - (-t)|$.",
          "reason": "Distance from a point to a line: the distance from a point $(x, y)$ to the line $y = c$ is $|y - c|$."
        },
        {
          "line": "This is $|y + t|$.",
          "reason": "Subtraction as addition: taking away a number is adding its opposite."
        },
        {
          "line": "So $\\sqrt{x^2 + (y - t)^2} = |y + t|$.",
          "reason": "Line 1, with lines 3 and 5."
        },
        {
          "line": "So $x^2 + (y - t)^2 = (y + t)^2$.",
          "reason": "Raising both sides to a power: both sides are squared; the square of a square root is the number under it, and $|y + t|^2 = (y + t)^2$ because $|y + t|$ is $y + t$ or its opposite."
        },
        {
          "line": "So $x^2 = (y + t)^2 - (y - t)^2$.",
          "reason": "Adding the same number to both sides: $(y - t)^2$ is taken from each side."
        },
        {
          "line": "So $x^2 = y^2 + 2ty + t^2 - (y^2 - 2ty + t^2)$.",
          "reason": "Square of a binomial, used on both squares."
        },
        {
          "line": "So $x^2 = 4ty$.",
          "reason": "Collecting like terms: subtracting a bracket changes every sign in it, and $y^2$ and $t^2$ cancel."
        },
        {
          "line": "So $y = \\dfrac{x^2}{4t}$.",
          "reason": "Dividing both sides by a nonzero number: $4t \\ne 0$ because $t \\ne 0$, and the sides are read the other way round."
        },
        {
          "line": "Now let $(x, y)$ be a point with $y = \\dfrac{x^2}{4t}$.",
          "reason": "The second direction: its hypothesis."
        },
        {
          "line": "Then $x^2 = 4ty$.",
          "reason": "Multiplying both sides by the same number: both sides are multiplied by $4t$, and the sides are read the other way round."
        },
        {
          "line": "So $x^2 = (y + t)^2 - (y - t)^2$.",
          "reason": "Lines 8 to 10: $(y + t)^2 - (y - t)^2 = 4ty$ for all numbers $y$ and $t$."
        },
        {
          "line": "So $x^2 + (y - t)^2 = (y + t)^2$.",
          "reason": "Adding the same number to both sides: $(y - t)^2$ is added to each side."
        },
        {
          "line": "So $\\sqrt{x^2 + (y - t)^2} = |y + t|$.",
          "reason": "Positive square root: both sides of line 15 are squares of nonnegative numbers, $\\sqrt{x^2 + (y - t)^2}$ and $|y + t|$, and two nonnegative numbers with the same square are equal."
        },
        {
          "line": "So $(x, y)$ is as far from $(0, t)$ as from the line $y = -t$.",
          "reason": "Lines 2 to 5: the two sides of line 16 are the two distances."
        },
        {
          "line": "So the points as far from $(0, t)$ as from the line $y = -t$ are exactly the points of the graph of $y = \\dfrac{x^2}{4t}$.",
          "reason": "Lines 11 and 17: each direction holds."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t189-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $h$ and $k$ with $a \\ne 0$, and $t = \\dfrac{1}{4a}$, every point of the graph of $x = a(y - k)^2 + h$ is as far from the point $(h + t, k)$ as from the line $x = h - t$. Facts it may use: graph of an equation, distance formula, distance from a point to a line, adding the same number to both sides, multiplying both sides by the same number, square of a binomial, collecting like terms, the root of a square is the absolute value.",
      "check": {
        "proof": [
          {
            "line": "Let $(x, y)$ be a point of the graph, so $x = a(y - k)^2 + h$.",
            "reason": "Graph of an equation: the coordinates of a point of the graph satisfy the equation."
          },
          {
            "line": "Then $x - h = a(y - k)^2$.",
            "reason": "Adding the same number to both sides: $h$ is taken from each side."
          },
          {
            "line": "So $(y - k)^2 = 4t(x - h)$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $4t$, and $4ta = 1$ because $t = \\dfrac{1}{4a}$."
          },
          {
            "line": "The square of the distance from $(x, y)$ to $(h + t, k)$ is $(x - h - t)^2 + (y - k)^2$.",
            "reason": "Distance formula."
          },
          {
            "line": "The square $(x - h - t)^2$ is $(x - h)^2 - 2t(x - h) + t^2$.",
            "reason": "Square of a binomial, with $x - h$ as one term and $-t$ as the other."
          },
          {
            "line": "So the square of the distance is $(x - h)^2 - 2t(x - h) + t^2 + (y - k)^2$.",
            "reason": "Lines 4 and 5."
          },
          {
            "line": "So the square of the distance is $(x - h)^2 - 2t(x - h) + t^2 + 4t(x - h)$.",
            "reason": "Line 3."
          },
          {
            "line": "This is $(x - h)^2 + 2t(x - h) + t^2$.",
            "reason": "Collecting like terms: $-2t(x - h) + 4t(x - h) = 2t(x - h)$."
          },
          {
            "line": "This is $(x - h + t)^2$.",
            "reason": "Square of a binomial, with $x - h$ as one term and $t$ as the other."
          },
          {
            "line": "So the distance from $(x, y)$ to $(h + t, k)$ is $\\sqrt{(x - h + t)^2}$.",
            "reason": "Lines 4 and 9: a distance is the square root of its square."
          },
          {
            "line": "This is $|x - h + t|$.",
            "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
          },
          {
            "line": "The distance from $(x, y)$ to the line $x = h - t$ is $|x - (h - t)|$.",
            "reason": "Distance from a point to a line: the distance from $(x, y)$ to the line $x = c$ is $|x - c|$."
          },
          {
            "line": "This is $|x - h + t|$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "So the two distances are equal: the point is as far from $(h + t, k)$ as from the line $x = h - t$.",
            "reason": "Lines 11 and 13."
          }
        ]
      }
    },
    {
      "id": "t189-s2",
      "method": "proof by cases",
      "statement": "Prove that for numbers $h$, $c$ and $d$ with $c \\ne d$, every point $(x, y)$ of the parabola with focus $(h, c)$ and directrix $y = d$ lies on the same side of the directrix as the focus: $y - d$ is positive when $c - d$ is positive, and negative when $c - d$ is negative. Facts it may use: Parabola (focus and directrix), distance formula, distance from a point to a line, raising both sides to a power, adding the same number to both sides, difference of squares, collecting like terms, Trivial Inequality, multiplying by a positive number, multiplying by a negative number reverses the sign.",
      "check": {
        "proof": [
          {
            "line": "The point is as far from $(h, c)$ as from the line $y = d$.",
            "reason": "Parabola (focus and directrix)."
          },
          {
            "line": "So $\\sqrt{(x - h)^2 + (y - c)^2} = |y - d|$.",
            "reason": "Distance formula for the distance to $(h, c)$, and Distance from a point to a line for the distance to the line $y = d$."
          },
          {
            "line": "So $(x - h)^2 + (y - c)^2 = (y - d)^2$.",
            "reason": "Raising both sides to a power: both sides are squared."
          },
          {
            "line": "So $(x - h)^2 = (y - d)^2 - (y - c)^2$.",
            "reason": "Adding the same number to both sides: $(y - c)^2$ is taken from each side."
          },
          {
            "line": "So $(x - h)^2 = \\big((y - d) - (y - c)\\big)\\big((y - d) + (y - c)\\big)$.",
            "reason": "Difference of squares."
          },
          {
            "line": "So $(x - h)^2 = (c - d)(2y - c - d)$.",
            "reason": "Collecting like terms in each bracket."
          },
          {
            "line": "So $(c - d)(2y - c - d) \\ge 0$.",
            "reason": "Trivial Inequality: $(x - h)^2 \\ge 0$, with line 6."
          },
          {
            "line": "Also $2(y - d) = (2y - c - d) + (c - d)$.",
            "reason": "Collecting like terms: the right side is $2y - 2d$."
          },
          {
            "line": "In the first case, $c - d > 0$, and line 7 gives $2y - c - d \\ge 0$.",
            "reason": "Multiplying by a positive number: line 7 is multiplied by $\\dfrac{1}{c - d}$, which is positive."
          },
          {
            "line": "So $(2y - c - d) + (c - d) > 0$.",
            "reason": "Adding the same number: $c - d$ is added to both sides of line 9, and $0 + (c - d) > 0$."
          },
          {
            "line": "So $y - d > 0$ in the first case.",
            "reason": "Line 8, with both sides divided by the positive number $2$."
          },
          {
            "line": "In the second case, $c - d < 0$, and line 7 gives $2y - c - d \\le 0$.",
            "reason": "Multiplying by a negative number reverses the sign: line 7 is multiplied by $\\dfrac{1}{c - d}$, which is negative."
          },
          {
            "line": "So $(2y - c - d) + (c - d) < 0$.",
            "reason": "Adding the same number: $c - d$ is added to both sides of line 12, and $0 + (c - d) < 0$."
          },
          {
            "line": "So $y - d < 0$ in the second case.",
            "reason": "Line 8, with both sides divided by the positive number $2$."
          },
          {
            "line": "Because $c \\ne d$, one of the two cases holds, and in each $y - d$ has the sign of $c - d$.",
            "reason": "Lines 11 and 14."
          }
        ]
      }
    },
    {
      "id": "t189-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $h$ and $k$ with $a > 0$, the line through the focus of the graph of $y = a(x - h)^2 + k$ parallel to its directrix meets the graph at two points, and the distance between those two points is $\\dfrac{1}{a}$. Facts it may use: Focal distance, horizontal line $y = c$, substituting a value, adding the same number to both sides, dividing both sides by a nonzero number, power of a quotient, if $x^2 = c^2$ then $x = c$ or $x = -c$, distance on the number line, collecting like terms, absolute value.",
      "check": {
        "proof": [
          {
            "line": "The focus is $\\left(h, k + \\dfrac{1}{4a}\\right)$ and the directrix is a horizontal line.",
            "reason": "Focal distance, with $t = \\dfrac{1}{4a}$."
          },
          {
            "line": "So the line through the focus parallel to the directrix is $y = k + \\dfrac{1}{4a}$.",
            "reason": "Horizontal line $y = c$: every point of it has the same $y$-coordinate."
          },
          {
            "line": "A point of the graph on this line has $a(x - h)^2 + k = k + \\dfrac{1}{4a}$.",
            "reason": "Substituting a value: $y$ is replaced by $k + \\dfrac{1}{4a}$."
          },
          {
            "line": "So $a(x - h)^2 = \\dfrac{1}{4a}$.",
            "reason": "Adding the same number to both sides: $k$ is taken from each side."
          },
          {
            "line": "So $(x - h)^2 = \\dfrac{1}{4a^2}$.",
            "reason": "Dividing both sides by a nonzero number: both sides are divided by $a$."
          },
          {
            "line": "Here $\\dfrac{1}{4a^2} = \\left(\\dfrac{1}{2a}\\right)^2$.",
            "reason": "Power of a quotient."
          },
          {
            "line": "So $x - h = \\dfrac{1}{2a}$ or $x - h = -\\dfrac{1}{2a}$.",
            "reason": "If $x^2 = c^2$ then $x = c$ or $x = -c$, with $c = \\dfrac{1}{2a}$."
          },
          {
            "line": "So the two points are $\\left(h + \\dfrac{1}{2a}, k + \\dfrac{1}{4a}\\right)$ and $\\left(h - \\dfrac{1}{2a}, k + \\dfrac{1}{4a}\\right)$.",
            "reason": "Adding the same number to both sides: $h$ is added to each side of line 7."
          },
          {
            "line": "The two points have the same $y$-coordinate, so the distance between them is $\\left|\\left(h + \\dfrac{1}{2a}\\right) - \\left(h - \\dfrac{1}{2a}\\right)\\right|$.",
            "reason": "Distance on the number line: the distance between two numbers is the absolute value of their difference."
          },
          {
            "line": "This is $\\left|\\dfrac{1}{a}\\right|$.",
            "reason": "Collecting like terms: the two $h$ cancel, and $\\dfrac{1}{2a} + \\dfrac{1}{2a} = \\dfrac{1}{a}$."
          },
          {
            "line": "This is $\\dfrac{1}{a}$.",
            "reason": "Absolute value: a positive number is its own distance from $0$, and $\\dfrac{1}{a} > 0$ because $a > 0$."
          }
        ]
      }
    }
  ]
}
