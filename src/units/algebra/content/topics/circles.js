export default {
  "number": 152,
  "title": "Circles",
  "section": 12,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "415-424"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 14x - 8y = -20$.",
    "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
    "answer": "h = -7, k = 4, r = 3*sqrt(5)",
    "solution": [
      "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 14x - 8y = -20$.",
      "$x^2 + 14x + 49 + y^2 - 8y + 16 = -20 + 49 + 16$",
      "$(x + 7)^2 + (y - 4)^2 = 45$",
      "$h = -7$, $k = 4$, $r^2 = 45$",
      "$r = \\sqrt{45}$",
      "$h = -7$, $k = 4$, $r = 3\\sqrt{5}$"
    ]
  },
  "ideas": [
    {
      "name": "Circle",
      "concrete": "The points $13$ from $(-6, -7)$ include $(7, -7)$, $(-6, 6)$ and $(-1, 5)$: for the last, the distance formula gives $\\sqrt{5^2 + 12^2} = 13$. All such points together make a round curve centred on $(-6, -7)$.",
      "general": "For a point $C$ and a positive number $r$, the **circle** with **centre** $C$ and **radius** $r$ is the set of points at distance $r$ from $C$. A segment from the centre to a point of the circle is also called a radius. A **diameter** is a segment through the centre with both ends on the circle; its length is $2r$, and its midpoint is the centre.",
      "figure": {
        "file": "circles-1.svg",
        "alt": "A circle with centre C at (−6, −7) through the points A (7, −7), B (−6, 6) and D (−1, 5)."
      }
    },
    {
      "name": "Standard form of a circle",
      "concrete": "The circle with centre $(-9, 3)$ and radius $14$ is the graph of $(x + 9)^2 + (y - 3)^2 = 196$: a point is on it exactly when its distance from $(-9, 3)$ is $14$.",
      "general": "For numbers $h$ and $k$ and a positive number $r$, the circle with centre $(h, k)$ and radius $r$ is the graph of $(x - h)^2 + (y - k)^2 = r^2$, the **standard form** of a circle."
    },
    {
      "name": "Circle, point or nothing",
      "concrete": "Completing both squares turns $x^2 + 18x + y^2 - 18y = d$ into $(x + 9)^2 + (y - 9)^2 = d + 162$. For $d = -18$ the graph is the circle with centre $(-9, 9)$ and radius $12$; for $d = -162$ it is the one point $(-9, 9)$; for $d = -170$ no point satisfies it, since a sum of squares is never negative.",
      "general": "For numbers $a$, $b$, $c$ and $d$ with $a$ not $0$, dividing $ax^2 + bx + ay^2 + cy = d$ by $a$ and completing both squares gives $\\left(x + \\dfrac{b}{2a}\\right)^2 + \\left(y + \\dfrac{c}{2a}\\right)^2 = \\dfrac{d}{a} + \\dfrac{b^2 + c^2}{4a^2}$. The graph is a circle when the right side is above $0$, the one point $\\left(-\\dfrac{b}{2a}, -\\dfrac{c}{2a}\\right)$ when it is $0$, and empty when it is below $0$."
    }
  ],
  "kinds": [
    {
      "id": "t152-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x - 8)^2 + (y + 1)^2 = 96$.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x - 8)^2 + (y + 1)^2 = 96$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = 8$, $k = -1$, $r^2 = 96$",
                "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$r = \\sqrt{96}$",
                "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $96$."
              },
              {
                "step": "$h = 8$, $k = -1$, $r = 4\\sqrt{6}$",
                "reason": "Simplest radical form: $\\sqrt{96} = \\sqrt{16}\\sqrt{6} = 4\\sqrt{6}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x - 3)^2 + (y + 4)^2 = 117$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 3, k = -4, r = 3*sqrt(13)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x - 3)^2 + (y + 4)^2 = 117$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 3$, $k = -4$, $r^2 = 117$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{117}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $117$."
                },
                {
                  "step": "$h = 3$, $k = -4$, $r = 3\\sqrt{13}$",
                  "reason": "Simplest radical form: $\\sqrt{117} = \\sqrt{9}\\sqrt{13} = 3\\sqrt{13}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x + 1)^2 + (y - 12)^2 = 40$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -1, k = 12, r = 2*sqrt(10)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x + 1)^2 + (y - 12)^2 = 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -1$, $k = 12$, $r^2 = 40$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{40}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $40$."
                },
                {
                  "step": "$h = -1$, $k = 12$, $r = 2\\sqrt{10}$",
                  "reason": "Simplest radical form: $\\sqrt{40} = \\sqrt{4}\\sqrt{10} = 2\\sqrt{10}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x - 12)^2 + (y - 11)^2 = 117$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 12, k = 11, r = 3*sqrt(13)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $(x - 12)^2 + (y - 11)^2 = 117$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 12$, $k = 11$, $r^2 = 117$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{117}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $117$."
                },
                {
                  "step": "$h = 12$, $k = 11$, $r = 3\\sqrt{13}$",
                  "reason": "Simplest radical form: $\\sqrt{117} = \\sqrt{9}\\sqrt{13} = 3\\sqrt{13}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 10x + 16y = 71$.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 10x + 16y = 71$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 10x + 25 + y^2 + 16y + 64 = 71 + 25 + 64$",
                "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $25$ and $64$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
              },
              {
                "step": "$(x + 5)^2 + (y + 8)^2 = 160$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "$h = -5$, $k = -8$, $r^2 = 160$",
                "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$r = \\sqrt{160}$",
                "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $160$."
              },
              {
                "step": "$h = -5$, $k = -8$, $r = 4\\sqrt{10}$",
                "reason": "Simplest radical form: $\\sqrt{160} = \\sqrt{16}\\sqrt{10} = 4\\sqrt{10}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 6x + 16y = 103$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -3, k = -8, r = 4*sqrt(11)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 6x + 16y = 103$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 6x + 9 + y^2 + 16y + 64 = 103 + 9 + 64$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $9$ and $64$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 3)^2 + (y + 8)^2 = 176$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = -3$, $k = -8$, $r^2 = 176$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{176}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $176$."
                },
                {
                  "step": "$h = -3$, $k = -8$, $r = 4\\sqrt{11}$",
                  "reason": "Simplest radical form: $\\sqrt{176} = \\sqrt{16}\\sqrt{11} = 4\\sqrt{11}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 18x + 8y = 228$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -9, k = -4, r = 5*sqrt(13)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 18x + 8y = 228$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 18x + 81 + y^2 + 8y + 16 = 228 + 81 + 16$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $81$ and $16$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 9)^2 + (y + 4)^2 = 325$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = -9$, $k = -4$, $r^2 = 325$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{325}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $325$."
                },
                {
                  "step": "$h = -9$, $k = -4$, $r = 5\\sqrt{13}$",
                  "reason": "Simplest radical form: $\\sqrt{325} = \\sqrt{25}\\sqrt{13} = 5\\sqrt{13}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 22x - 18y = -90$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -11, k = 9, r = 4*sqrt(7)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 22x - 18y = -90$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 22x + 121 + y^2 - 18y + 81 = -90 + 121 + 81$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $121$ and $81$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 11)^2 + (y - 9)^2 = 112$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = -11$, $k = 9$, $r^2 = 112$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{112}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $112$."
                },
                {
                  "step": "$h = -11$, $k = 9$, $r = 4\\sqrt{7}$",
                  "reason": "Simplest radical form: $\\sqrt{112} = \\sqrt{16}\\sqrt{7} = 4\\sqrt{7}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the centre $(h, k)$ and the radius $r$ of the circle $4x^2 + 4y^2 + 80x - 16y = 84$.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $4x^2 + 4y^2 + 80x - 16y = 84$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + y^2 + 20x - 4y = 21$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, which leaves $x^2$ and $y^2$ each with coefficient $1$."
              },
              {
                "step": "$x^2 + 20x + 100 + y^2 - 4y + 4 = 21 + 100 + 4$",
                "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $100$ and $4$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
              },
              {
                "step": "$(x + 10)^2 + (y - 2)^2 = 125$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "$h = -10$, $k = 2$, $r^2 = 125$",
                "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$r = \\sqrt{125}$",
                "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $125$."
              },
              {
                "step": "$h = -10$, $k = 2$, $r = 5\\sqrt{5}$",
                "reason": "Simplest radical form: $\\sqrt{125} = \\sqrt{25}\\sqrt{5} = 5\\sqrt{5}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $5x^2 + 5y^2 - 30x + 110y = -90$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 3, k = -11, r = 4*sqrt(7)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $5x^2 + 5y^2 - 30x + 110y = -90$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 - 6x + 22y = -18$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$, which leaves $x^2$ and $y^2$ each with coefficient $1$."
                },
                {
                  "step": "$x^2 - 6x + 9 + y^2 + 22y + 121 = -18 + 9 + 121$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $9$ and $121$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 3)^2 + (y + 11)^2 = 112$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = 3$, $k = -11$, $r^2 = 112$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{112}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $112$."
                },
                {
                  "step": "$h = 3$, $k = -11$, $r = 4\\sqrt{7}$",
                  "reason": "Simplest radical form: $\\sqrt{112} = \\sqrt{16}\\sqrt{7} = 4\\sqrt{7}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $5x^2 + 5y^2 - 80x + 20y = 700$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 8, k = -2, r = 4*sqrt(13)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $5x^2 + 5y^2 - 80x + 20y = 700$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 - 16x + 4y = 140$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$, which leaves $x^2$ and $y^2$ each with coefficient $1$."
                },
                {
                  "step": "$x^2 - 16x + 64 + y^2 + 4y + 4 = 140 + 64 + 4$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $64$ and $4$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 8)^2 + (y + 2)^2 = 208$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = 8$, $k = -2$, $r^2 = 208$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{208}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $208$."
                },
                {
                  "step": "$h = 8$, $k = -2$, $r = 4\\sqrt{13}$",
                  "reason": "Simplest radical form: $\\sqrt{208} = \\sqrt{16}\\sqrt{13} = 4\\sqrt{13}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $2x^2 + 2y^2 - 8x + 8y = 334$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 2, k = -2, r = 5*sqrt(7)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $2x^2 + 2y^2 - 8x + 8y = 334$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 - 4x + 4y = 167$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, which leaves $x^2$ and $y^2$ each with coefficient $1$."
                },
                {
                  "step": "$x^2 - 4x + 4 + y^2 + 4y + 4 = 167 + 4 + 4$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $4$ and $4$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 2)^2 + (y + 2)^2 = 175$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = 2$, $k = -2$, $r^2 = 175$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{175}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $175$."
                },
                {
                  "step": "$h = 2$, $k = -2$, $r = 5\\sqrt{7}$",
                  "reason": "Simplest radical form: $\\sqrt{175} = \\sqrt{25}\\sqrt{7} = 5\\sqrt{7}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 20x + 22y + 193 = 0$.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 20x + 22y + 193 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + y^2 - 20x + 22y = -193$",
                "reason": "Adding the same number to both sides: $193$ is taken from both sides."
              },
              {
                "step": "$x^2 - 20x + 100 + y^2 + 22y + 121 = -193 + 100 + 121$",
                "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $100$ and $121$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
              },
              {
                "step": "$(x - 10)^2 + (y + 11)^2 = 28$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "$h = 10$, $k = -11$, $r^2 = 28$",
                "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$r = \\sqrt{28}$",
                "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $28$."
              },
              {
                "step": "$h = 10$, $k = -11$, $r = 2\\sqrt{7}$",
                "reason": "Simplest radical form: $\\sqrt{28} = \\sqrt{4}\\sqrt{7} = 2\\sqrt{7}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 22x - 22y + 152 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -11, k = 11, r = 3*sqrt(10)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 22x - 22y + 152 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 + 22x - 22y = -152$",
                  "reason": "Adding the same number to both sides: $152$ is taken from both sides."
                },
                {
                  "step": "$x^2 + 22x + 121 + y^2 - 22y + 121 = -152 + 121 + 121$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $121$ and $121$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 11)^2 + (y - 11)^2 = 90$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = -11$, $k = 11$, $r^2 = 90$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{90}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $90$."
                },
                {
                  "step": "$h = -11$, $k = 11$, $r = 3\\sqrt{10}$",
                  "reason": "Simplest radical form: $\\sqrt{90} = \\sqrt{9}\\sqrt{10} = 3\\sqrt{10}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 2x - 2y - 206 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -1, k = 1, r = 4*sqrt(13)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 2x - 2y - 206 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 + 2x - 2y = 206$",
                  "reason": "Adding the same number to both sides: $206$ is added to both sides."
                },
                {
                  "step": "$x^2 + 2x + 1 + y^2 - 2y + 1 = 206 + 1 + 1$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $1$ and $1$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 1)^2 + (y - 1)^2 = 208$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = -1$, $k = 1$, $r^2 = 208$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{208}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $208$."
                },
                {
                  "step": "$h = -1$, $k = 1$, $r = 4\\sqrt{13}$",
                  "reason": "Simplest radical form: $\\sqrt{208} = \\sqrt{16}\\sqrt{13} = 4\\sqrt{13}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 22x + 6y - 145 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 11, k = -3, r = 5*sqrt(11)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 22x + 6y - 145 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 - 22x + 6y = 145$",
                  "reason": "Adding the same number to both sides: $145$ is added to both sides."
                },
                {
                  "step": "$x^2 - 22x + 121 + y^2 + 6y + 9 = 145 + 121 + 9$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $121$ and $9$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 11)^2 + (y + 3)^2 = 275$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$h = 11$, $k = -3$, $r^2 = 275$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$r = \\sqrt{275}$",
                  "reason": "Positive square root: the radius is a length, so it is the positive number whose square is $275$."
                },
                {
                  "step": "$h = 11$, $k = -3$, $r = 5\\sqrt{11}$",
                  "reason": "Simplest radical form: $\\sqrt{275} = \\sqrt{25}\\sqrt{11} = 5\\sqrt{11}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t152-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every value of $c$ for which the graph of $x^2 + y^2 + 22x + 10y = c$ is a circle.",
            "lines": [
              {
                "step": "Find every value of $c$ for which the graph of $x^2 + y^2 + 22x + 10y = c$ is a circle.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 22x + 121 + y^2 + 10y + 25 = c + 121 + 25$",
                "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $121$ and $25$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
              },
              {
                "step": "$(x + 11)^2 + (y + 5)^2 = c + 146$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "The graph is a circle exactly when $c + 146 > 0$.",
                "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
              },
              {
                "step": "$c > -146$",
                "reason": "Adding the same number to both sides: $146$ is taken from both sides, and the inequality keeps its direction."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every value of $c$ for which the graph of $x^2 + y^2 + 28x - 18y = c$ has no point.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "c < -277",
              "lines": [
                {
                  "step": "Find every value of $c$ for which the graph of $x^2 + y^2 + 28x - 18y = c$ has no point.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 28x + 196 + y^2 - 18y + 81 = c + 196 + 81$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $196$ and $81$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 14)^2 + (y - 9)^2 = c + 277$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The graph has no point exactly when $c + 277 < 0$.",
                  "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
                },
                {
                  "step": "$c < -277$",
                  "reason": "Adding the same number to both sides: $277$ is taken from both sides, and the inequality keeps its direction."
                }
              ]
            },
            {
              "prompt": "Find every value of $c$ for which the graph of $x^2 + y^2 - 22x - 26y = c$ is a circle.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "c > -290",
              "lines": [
                {
                  "step": "Find every value of $c$ for which the graph of $x^2 + y^2 - 22x - 26y = c$ is a circle.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 22x + 121 + y^2 - 26y + 169 = c + 121 + 169$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $121$ and $169$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 11)^2 + (y - 13)^2 = c + 290$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The graph is a circle exactly when $c + 290 > 0$.",
                  "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
                },
                {
                  "step": "$c > -290$",
                  "reason": "Adding the same number to both sides: $290$ is taken from both sides, and the inequality keeps its direction."
                }
              ]
            },
            {
              "prompt": "Find every value of $c$ for which the graph of $x^2 + y^2 - 16x - 34y = c$ has no point.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "c < -353",
              "lines": [
                {
                  "step": "Find every value of $c$ for which the graph of $x^2 + y^2 - 16x - 34y = c$ has no point.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 16x + 64 + y^2 - 34y + 289 = c + 64 + 289$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $64$ and $289$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 8)^2 + (y - 17)^2 = c + 353$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The graph has no point exactly when $c + 353 < 0$.",
                  "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
                },
                {
                  "step": "$c < -353$",
                  "reason": "Adding the same number to both sides: $353$ is taken from both sides, and the inequality keeps its direction."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $c$ for which the graph of $x^2 + y^2 - 28x - 24y = c$ is one point.",
            "lines": [
              {
                "step": "Find the number $c$ for which the graph of $x^2 + y^2 - 28x - 24y = c$ is one point.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 28x + 196 + y^2 - 24y + 144 = c + 196 + 144$",
                "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $196$ and $144$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
              },
              {
                "step": "$(x - 14)^2 + (y - 12)^2 = c + 340$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "The graph is one point exactly when $c + 340 = 0$.",
                "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
              },
              {
                "step": "$c = -340$",
                "reason": "Adding the same number to both sides: $340$ is taken from both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which the graph of $x^2 + y^2 + 28x - 30y = c$ is one point.",
              "form": "Answer as an integer.",
              "answer": "-421",
              "lines": [
                {
                  "step": "Find the number $c$ for which the graph of $x^2 + y^2 + 28x - 30y = c$ is one point.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 28x + 196 + y^2 - 30y + 225 = c + 196 + 225$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $196$ and $225$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 14)^2 + (y - 15)^2 = c + 421$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The graph is one point exactly when $c + 421 = 0$.",
                  "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
                },
                {
                  "step": "$c = -421$",
                  "reason": "Adding the same number to both sides: $421$ is taken from both sides."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which the graph of $x^2 + y^2 - 22x + 34y = c$ is one point.",
              "form": "Answer as an integer.",
              "answer": "-410",
              "lines": [
                {
                  "step": "Find the number $c$ for which the graph of $x^2 + y^2 - 22x + 34y = c$ is one point.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 22x + 121 + y^2 + 34y + 289 = c + 121 + 289$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $121$ and $289$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 11)^2 + (y + 17)^2 = c + 410$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The graph is one point exactly when $c + 410 = 0$.",
                  "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
                },
                {
                  "step": "$c = -410$",
                  "reason": "Adding the same number to both sides: $410$ is taken from both sides."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which the graph of $x^2 + y^2 - 20x + 2y = c$ is one point.",
              "form": "Answer as an integer.",
              "answer": "-101",
              "lines": [
                {
                  "step": "Find the number $c$ for which the graph of $x^2 + y^2 - 20x + 2y = c$ is one point.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 20x + 100 + y^2 + 2y + 1 = c + 100 + 1$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $100$ and $1$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x - 10)^2 + (y + 1)^2 = c + 101$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The graph is one point exactly when $c + 101 = 0$.",
                  "reason": "Circle, point or nothing: once both squares are completed, a right side above $0$ gives a circle, a right side of $0$ gives one point, and a right side below $0$ gives no point."
                },
                {
                  "step": "$c = -101$",
                  "reason": "Adding the same number to both sides: $101$ is taken from both sides."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t152-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(-4, -7)$ and radius $12$.",
            "lines": [
              {
                "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(-4, -7)$ and radius $12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + 4)^2 + (y + 7)^2 = 144$",
                "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$, here with $r^2 = 12^2 = 144$."
              },
              {
                "step": "$x^2 + y^2 + 8x + 14y + 16 + 49 = 144$",
                "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
              },
              {
                "step": "$x^2 + y^2 + 8x + 14y = 79$",
                "reason": "Adding the same number to both sides: $65$ is taken from both sides."
              },
              {
                "step": "$a = 8$, $b = 14$, $c = 79$",
                "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(5, 8)$ and radius $2$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -10, b = -16, c = -85",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(5, 8)$ and radius $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 5)^2 + (y - 8)^2 = 4$",
                  "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$, here with $r^2 = 2^2 = 4$."
                },
                {
                  "step": "$x^2 + y^2 - 10x - 16y + 25 + 64 = 4$",
                  "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
                },
                {
                  "step": "$x^2 + y^2 - 10x - 16y = -85$",
                  "reason": "Adding the same number to both sides: $89$ is taken from both sides."
                },
                {
                  "step": "$a = -10$, $b = -16$, $c = -85$",
                  "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(7, -4)$ and radius $11$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -14, b = 8, c = 56",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(7, -4)$ and radius $11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 7)^2 + (y + 4)^2 = 121$",
                  "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$, here with $r^2 = 11^2 = 121$."
                },
                {
                  "step": "$x^2 + y^2 - 14x + 8y + 49 + 16 = 121$",
                  "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
                },
                {
                  "step": "$x^2 + y^2 - 14x + 8y = 56$",
                  "reason": "Adding the same number to both sides: $65$ is taken from both sides."
                },
                {
                  "step": "$a = -14$, $b = 8$, $c = 56$",
                  "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(-3, 10)$ and radius $6$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = 6, b = -20, c = -73",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with centre $(-3, 10)$ and radius $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 3)^2 + (y - 10)^2 = 36$",
                  "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$, here with $r^2 = 6^2 = 36$."
                },
                {
                  "step": "$x^2 + y^2 + 6x - 20y + 9 + 100 = 36$",
                  "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
                },
                {
                  "step": "$x^2 + y^2 + 6x - 20y = -73$",
                  "reason": "Adding the same number to both sides: $109$ is taken from both sides."
                },
                {
                  "step": "$a = 6$, $b = -20$, $c = -73$",
                  "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(-8, 8)$ to $(-10, 16)$.",
            "lines": [
              {
                "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(-8, 8)$ to $(-10, 16)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $\\left(\\dfrac{-8 + (-10)}{2}, \\dfrac{8 + 16}{2}\\right) = (-9, 12)$.",
                "reason": "Midpoint formula: the centre lies halfway along a diameter, so it is the midpoint of its two ends."
              },
              {
                "step": "$r^2 = (-8 - (-9))^2 + (8 - 12)^2 = 17$",
                "reason": "Distance formula: the radius is the distance from the centre to the end $(-8, 8)$, and its square is the sum of the two squares."
              },
              {
                "step": "$(x + 9)^2 + (y - 12)^2 = 17$",
                "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$."
              },
              {
                "step": "$x^2 + y^2 + 18x - 24y + 81 + 144 = 17$",
                "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
              },
              {
                "step": "$x^2 + y^2 + 18x - 24y = -208$",
                "reason": "Adding the same number to both sides: $225$ is taken from both sides."
              },
              {
                "step": "$a = 18$, $b = -24$, $c = -208$",
                "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(-2, 7)$ to $(10, 17)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -8, b = -24, c = -99",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(-2, 7)$ to $(10, 17)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-2 + 10}{2}, \\dfrac{7 + 17}{2}\\right) = (4, 12)$.",
                  "reason": "Midpoint formula: the centre lies halfway along a diameter, so it is the midpoint of its two ends."
                },
                {
                  "step": "$r^2 = (-2 - 4)^2 + (7 - 12)^2 = 61$",
                  "reason": "Distance formula: the radius is the distance from the centre to the end $(-2, 7)$, and its square is the sum of the two squares."
                },
                {
                  "step": "$(x - 4)^2 + (y - 12)^2 = 61$",
                  "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$."
                },
                {
                  "step": "$x^2 + y^2 - 8x - 24y + 16 + 144 = 61$",
                  "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
                },
                {
                  "step": "$x^2 + y^2 - 8x - 24y = -99$",
                  "reason": "Adding the same number to both sides: $160$ is taken from both sides."
                },
                {
                  "step": "$a = -8$, $b = -24$, $c = -99$",
                  "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(8, 5)$ to $(-4, 13)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -4, b = -18, c = -33",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(8, 5)$ to $(-4, 13)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{8 + (-4)}{2}, \\dfrac{5 + 13}{2}\\right) = (2, 9)$.",
                  "reason": "Midpoint formula: the centre lies halfway along a diameter, so it is the midpoint of its two ends."
                },
                {
                  "step": "$r^2 = (8 - 2)^2 + (5 - 9)^2 = 52$",
                  "reason": "Distance formula: the radius is the distance from the centre to the end $(8, 5)$, and its square is the sum of the two squares."
                },
                {
                  "step": "$(x - 2)^2 + (y - 9)^2 = 52$",
                  "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$."
                },
                {
                  "step": "$x^2 + y^2 - 4x - 18y + 4 + 81 = 52$",
                  "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
                },
                {
                  "step": "$x^2 + y^2 - 4x - 18y = -33$",
                  "reason": "Adding the same number to both sides: $85$ is taken from both sides."
                },
                {
                  "step": "$a = -4$, $b = -18$, $c = -33$",
                  "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(-5, -6)$ to $(-17, -18)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = 22, b = 24, c = -193",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle with a diameter from $(-5, -6)$ to $(-17, -18)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-5 + (-17)}{2}, \\dfrac{-6 + (-18)}{2}\\right) = (-11, -12)$.",
                  "reason": "Midpoint formula: the centre lies halfway along a diameter, so it is the midpoint of its two ends."
                },
                {
                  "step": "$r^2 = (-5 - (-11))^2 + (-6 - (-12))^2 = 72$",
                  "reason": "Distance formula: the radius is the distance from the centre to the end $(-5, -6)$, and its square is the sum of the two squares."
                },
                {
                  "step": "$(x + 11)^2 + (y + 12)^2 = 72$",
                  "reason": "Standard form of a circle: the circle with centre $(h, k)$ and radius $r$ is $(x - h)^2 + (y - k)^2 = r^2$."
                },
                {
                  "step": "$x^2 + y^2 + 22x + 24y + 121 + 144 = 72$",
                  "reason": "Square of a binomial: each bracket squared is the square of its first term, plus twice the product of its two terms, plus the square of its last term; the terms are written in the order of $x^2 + y^2 + ax + by$."
                },
                {
                  "step": "$x^2 + y^2 + 22x + 24y = -193$",
                  "reason": "Adding the same number to both sides: $265$ is taken from both sides."
                },
                {
                  "step": "$a = 22$, $b = 24$, $c = -193$",
                  "reason": "Answering the question asked: the coefficients of the line before are read in the places of $a$, $b$ and $c$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(-12, -6)$ and $(-18, 6)$.",
            "lines": [
              {
                "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(-12, -6)$ and $(-18, 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $(0, 0)$: $0^2 + 0^2 + a \\cdot 0 + b \\cdot 0 = c$, so $c = 0$",
                "reason": "Substituting a value: the point $(0, 0)$ lies on the circle, so its coordinates satisfy the equation."
              },
              {
                "step": "$(-12)^2 + (-6)^2 - 12a - 6b = 0$",
                "reason": "Substituting a value: $(-12, -6)$ is put in for $x$ and $y$, with $c = 0$."
              },
              {
                "step": "$-12a - 6b = -180$",
                "reason": "Adding the same number to both sides: $180$ is taken from both sides."
              },
              {
                "step": "$(-18)^2 + 6^2 - 18a + 6b = 0$",
                "reason": "Substituting a value: $(-18, 6)$ is put in for $x$ and $y$, with $c = 0$."
              },
              {
                "step": "$-18a + 6b = -360$",
                "reason": "Adding the same number to both sides: $360$ is taken from both sides."
              },
              {
                "step": "$a = 18$",
                "reason": "Elimination: a multiple of one equation is added to a multiple of the other so that $b$ drops out, which leaves $a$."
              },
              {
                "step": "$b = -6$",
                "reason": "Back-substitution: the value of $a$ is put into one of the two equations, which leaves $b$."
              },
              {
                "step": "$a = 18$, $b = -6$, $c = 0$",
                "reason": "Answering the question asked: $a$ and $b$ are the two values found, and $c = 0$ from the second line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(10, 26)$ and $(-8, 8)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -10, b = -26, c = 0",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(10, 26)$ and $(-8, 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $(0, 0)$: $0^2 + 0^2 + a \\cdot 0 + b \\cdot 0 = c$, so $c = 0$",
                  "reason": "Substituting a value: the point $(0, 0)$ lies on the circle, so its coordinates satisfy the equation."
                },
                {
                  "step": "$10^2 + 26^2 + 10a + 26b = 0$",
                  "reason": "Substituting a value: $(10, 26)$ is put in for $x$ and $y$, with $c = 0$."
                },
                {
                  "step": "$10a + 26b = -776$",
                  "reason": "Adding the same number to both sides: $776$ is taken from both sides."
                },
                {
                  "step": "$(-8)^2 + 8^2 - 8a + 8b = 0$",
                  "reason": "Substituting a value: $(-8, 8)$ is put in for $x$ and $y$, with $c = 0$."
                },
                {
                  "step": "$-8a + 8b = -128$",
                  "reason": "Adding the same number to both sides: $128$ is taken from both sides."
                },
                {
                  "step": "$a = -10$",
                  "reason": "Elimination: a multiple of one equation is added to a multiple of the other so that $b$ drops out, which leaves $a$."
                },
                {
                  "step": "$b = -26$",
                  "reason": "Back-substitution: the value of $a$ is put into one of the two equations, which leaves $b$."
                },
                {
                  "step": "$a = -10$, $b = -26$, $c = 0$",
                  "reason": "Answering the question asked: $a$ and $b$ are the two values found, and $c = 0$ from the second line."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(21, -5)$ and $(21, 21)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -26, b = -16, c = 0",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(21, -5)$ and $(21, 21)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $(0, 0)$: $0^2 + 0^2 + a \\cdot 0 + b \\cdot 0 = c$, so $c = 0$",
                  "reason": "Substituting a value: the point $(0, 0)$ lies on the circle, so its coordinates satisfy the equation."
                },
                {
                  "step": "$21^2 + (-5)^2 + 21a - 5b = 0$",
                  "reason": "Substituting a value: $(21, -5)$ is put in for $x$ and $y$, with $c = 0$."
                },
                {
                  "step": "$21a - 5b = -466$",
                  "reason": "Adding the same number to both sides: $466$ is taken from both sides."
                },
                {
                  "step": "$21^2 + 21^2 + 21a + 21b = 0$",
                  "reason": "Substituting a value: $(21, 21)$ is put in for $x$ and $y$, with $c = 0$."
                },
                {
                  "step": "$21a + 21b = -882$",
                  "reason": "Adding the same number to both sides: $882$ is taken from both sides."
                },
                {
                  "step": "$a = -26$",
                  "reason": "Elimination: a multiple of one equation is added to a multiple of the other so that $b$ drops out, which leaves $a$."
                },
                {
                  "step": "$b = -16$",
                  "reason": "Back-substitution: the value of $a$ is put into one of the two equations, which leaves $b$."
                },
                {
                  "step": "$a = -26$, $b = -16$, $c = 0$",
                  "reason": "Answering the question asked: $a$ and $b$ are the two values found, and $c = 0$ from the second line."
                }
              ]
            },
            {
              "prompt": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(-7, 15)$ and $(15, 7)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "a = -8, b = -22, c = 0",
              "lines": [
                {
                  "step": "Find $a$, $b$ and $c$ for which the graph of $x^2 + y^2 + ax + by = c$ is the circle through $(0, 0)$, $(-7, 15)$ and $(15, 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $(0, 0)$: $0^2 + 0^2 + a \\cdot 0 + b \\cdot 0 = c$, so $c = 0$",
                  "reason": "Substituting a value: the point $(0, 0)$ lies on the circle, so its coordinates satisfy the equation."
                },
                {
                  "step": "$(-7)^2 + 15^2 - 7a + 15b = 0$",
                  "reason": "Substituting a value: $(-7, 15)$ is put in for $x$ and $y$, with $c = 0$."
                },
                {
                  "step": "$-7a + 15b = -274$",
                  "reason": "Adding the same number to both sides: $274$ is taken from both sides."
                },
                {
                  "step": "$15^2 + 7^2 + 15a + 7b = 0$",
                  "reason": "Substituting a value: $(15, 7)$ is put in for $x$ and $y$, with $c = 0$."
                },
                {
                  "step": "$15a + 7b = -274$",
                  "reason": "Adding the same number to both sides: $274$ is taken from both sides."
                },
                {
                  "step": "$a = -8$",
                  "reason": "Elimination: a multiple of one equation is added to a multiple of the other so that $b$ drops out, which leaves $a$."
                },
                {
                  "step": "$b = -22$",
                  "reason": "Back-substitution: the value of $a$ is put into one of the two equations, which leaves $b$."
                },
                {
                  "step": "$a = -8$, $b = -22$, $c = 0$",
                  "reason": "Answering the question asked: $a$ and $b$ are the two values found, and $c = 0$ from the second line."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t152-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 22x + 28y = -308$, and write that line right.",
            "given": [
              "$x^2 + y^2 + 22x + 28y = -308$",
              "$x^2 + 22x + 121 + y^2 + 28y + 196 = -308 + 121 + 196$",
              "$(x - 11)^2 + (y + 14)^2 = 9$",
              "$h = 11$, $k = -14$, $r^2 = 9$",
              "$r = 3$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 22x + 28y = -308$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 writes $x^2 + 22x + 121$ as $(x - 11)^2$, so a sign is lost.",
                "reason": "A sign lost: $(x - 11)^2$ multiplies out to $x^2 - 22x + 121$, and the middle term has the wrong sign."
              },
              {
                "step": "Line 3 written right is $(x + 11)^2 + (y + 14)^2 = 9$.",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$ with $b = 22$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 26x + 20y = -125$, and write that line right.",
              "given": [
                "$x^2 + y^2 + 26x + 20y = -125$",
                "$x^2 + 26x + 169 + y^2 + 20y + 100 = -125 + 169 + 100$",
                "$(x - 13)^2 + (y + 10)^2 = 144$",
                "$h = 13$, $k = -10$, $r^2 = 144$",
                "$r = 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x+13)^2+(y+10)^2 = 144",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 26x + 20y = -125$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 writes $x^2 + 26x + 169$ as $(x - 13)^2$, so a sign is lost.",
                  "reason": "A sign lost: $(x - 13)^2$ multiplies out to $x^2 - 26x + 169$, and the middle term has the wrong sign."
                },
                {
                  "step": "Line 3 written right is $(x + 13)^2 + (y + 10)^2 = 144$.",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$ with $b = 26$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 4x + 2y - 59 = 0$, and write that line right.",
              "given": [
                "$x^2 + y^2 + 4x + 2y - 59 = 0$",
                "$x^2 + y^2 + 4x + 2y = 59$",
                "$x^2 + 4x + 4 + y^2 + 2y + 1 = 59 + 4 + 1$",
                "$(x - 2)^2 + (y + 1)^2 = 64$",
                "$h = 2$, $k = -1$, $r^2 = 64$",
                "$r = 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x+2)^2+(y+1)^2 = 64",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 4x + 2y - 59 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 writes $x^2 + 4x + 4$ as $(x - 2)^2$, so a sign is lost.",
                  "reason": "A sign lost: $(x - 2)^2$ multiplies out to $x^2 - 4x + 4$, and the middle term has the wrong sign."
                },
                {
                  "step": "Line 4 written right is $(x + 2)^2 + (y + 1)^2 = 64$.",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$ with $b = 4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 4x + 28y + 164 = 0$, and write that line right.",
              "given": [
                "$x^2 + y^2 + 4x + 28y + 164 = 0$",
                "$x^2 + y^2 + 4x + 28y = -164$",
                "$x^2 + 4x + 4 + y^2 + 28y + 196 = -164 + 4 + 196$",
                "$(x - 2)^2 + (y + 14)^2 = 36$",
                "$h = 2$, $k = -14$, $r^2 = 36$",
                "$r = 6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x+2)^2+(y+14)^2 = 36",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 4x + 28y + 164 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 writes $x^2 + 4x + 4$ as $(x - 2)^2$, so a sign is lost.",
                  "reason": "A sign lost: $(x - 2)^2$ multiplies out to $x^2 - 4x + 4$, and the middle term has the wrong sign."
                },
                {
                  "step": "Line 4 written right is $(x + 2)^2 + (y + 14)^2 = 36$.",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$ with $b = 4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 2x + 16y = 104$, and write that line right.",
            "given": [
              "$x^2 + y^2 + 2x + 16y = 104$",
              "$x^2 + 2x + 1 + y^2 + 16y + 64 = 104 + 1 + 64$",
              "$(x + 1)^2 + (y + 8)^2 = 169$",
              "$h = -1$, $k = 8$, $r^2 = 169$",
              "$r = 13$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 2x + 16y = 104$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 reads $k$ from $(y + 8)^2$ as $8$, so a sign is lost.",
                "reason": "A sign lost: $(y + 8)^2$ is $(y - k)^2$ with $k = -8$, so the number in the place of $k$ is $-8$."
              },
              {
                "step": "Line 4 written right is $h = -1$, $k = -8$, $r^2 = 169$.",
                "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 12x - 10y - 164 = 0$, and write that line right.",
              "given": [
                "$x^2 + y^2 - 12x - 10y - 164 = 0$",
                "$x^2 + y^2 - 12x - 10y = 164$",
                "$x^2 - 12x + 36 + y^2 - 10y + 25 = 164 + 36 + 25$",
                "$(x - 6)^2 + (y - 5)^2 = 225$",
                "$h = 6$, $k = -5$, $r^2 = 225$",
                "$r = 15$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: h = 6, k = 5, r^2 = 225",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 12x - 10y - 164 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 reads $k$ from $(y - 5)^2$ as $-5$, so a sign is lost.",
                  "reason": "A sign lost: $(y - 5)^2$ is $(y - k)^2$ with $k = 5$, so the number in the place of $k$ is $5$."
                },
                {
                  "step": "Line 5 written right is $h = 6$, $k = 5$, $r^2 = 225$.",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 24x - 10y = -153$, and write that line right.",
              "given": [
                "$x^2 + y^2 - 24x - 10y = -153$",
                "$x^2 - 24x + 144 + y^2 - 10y + 25 = -153 + 144 + 25$",
                "$(x - 12)^2 + (y - 5)^2 = 16$",
                "$h = 12$, $k = -5$, $r^2 = 16$",
                "$r = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: h = 12, k = 5, r^2 = 16",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 24x - 10y = -153$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 reads $k$ from $(y - 5)^2$ as $-5$, so a sign is lost.",
                  "reason": "A sign lost: $(y - 5)^2$ is $(y - k)^2$ with $k = 5$, so the number in the place of $k$ is $5$."
                },
                {
                  "step": "Line 4 written right is $h = 12$, $k = 5$, $r^2 = 16$.",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 26x - 14y + 169 = 0$, and write that line right.",
              "given": [
                "$x^2 + y^2 - 26x - 14y + 169 = 0$",
                "$x^2 + y^2 - 26x - 14y = -169$",
                "$x^2 - 26x + 169 + y^2 - 14y + 49 = -169 + 169 + 49$",
                "$(x - 13)^2 + (y - 7)^2 = 49$",
                "$h = 13$, $k = -7$, $r^2 = 49$",
                "$r = 7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: h = 13, k = 7, r^2 = 49",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 26x - 14y + 169 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 reads $k$ from $(y - 7)^2$ as $-7$, so a sign is lost.",
                  "reason": "A sign lost: $(y - 7)^2$ is $(y - k)^2$ with $k = 7$, so the number in the place of $k$ is $7$."
                },
                {
                  "step": "Line 5 written right is $h = 13$, $k = 7$, $r^2 = 49$.",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$ is the circle with centre $(h, k)$ and radius $r$; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 16x + 18y = -24$, and write that line right.",
            "given": [
              "$x^2 + y^2 + 16x + 18y = -24$",
              "$x^2 + y^2 + 16x + 18y = -24 + 64 + 81 = 121$",
              "$(x + 8)^2 + (y + 9)^2 = 121$",
              "$h = -8$, $k = -9$, $r^2 = 121$",
              "$r = 11$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 16x + 18y = -24$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 adds $64$ and $81$ to the right side only and runs on with a second equals sign.",
                "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
              },
              {
                "step": "Line 2 written right is $x^2 + 16x + 64 + y^2 + 18y + 81 = 121$.",
                "reason": "Completing the square: the numbers that complete the two squares are added to both sides; the right side may also be left as the sum, $-24 + 64 + 81$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 2x + 26y - 26 = 0$, and write that line right.",
              "given": [
                "$x^2 + y^2 - 2x + 26y - 26 = 0$",
                "$x^2 + y^2 - 2x + 26y = 26$",
                "$x^2 + y^2 - 2x + 26y = 26 + 1 + 169 = 196$",
                "$(x - 1)^2 + (y + 13)^2 = 196$",
                "$h = 1$, $k = -13$, $r^2 = 196$",
                "$r = 14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-2*x+1+y^2+26*y+169 = 196",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 2x + 26y - 26 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $1$ and $169$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 3 written right is $x^2 - 2x + 1 + y^2 + 26y + 169 = 196$.",
                  "reason": "Completing the square: the numbers that complete the two squares are added to both sides; the right side may also be left as the sum, $26 + 1 + 169$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 12x + 28y = -111$, and write that line right.",
              "given": [
                "$x^2 + y^2 + 12x + 28y = -111$",
                "$x^2 + y^2 + 12x + 28y = -111 + 36 + 196 = 121$",
                "$(x + 6)^2 + (y + 14)^2 = 121$",
                "$h = -6$, $k = -14$, $r^2 = 121$",
                "$r = 11$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2+12*x+36+y^2+28*y+196 = 121",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 + 12x + 28y = -111$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 adds $36$ and $196$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 2 written right is $x^2 + 12x + 36 + y^2 + 28y + 196 = 121$.",
                  "reason": "Completing the square: the numbers that complete the two squares are added to both sides; the right side may also be left as the sum, $-111 + 36 + 196$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 24x - 16y + 39 = 0$, and write that line right.",
              "given": [
                "$x^2 + y^2 - 24x - 16y + 39 = 0$",
                "$x^2 + y^2 - 24x - 16y = -39$",
                "$x^2 + y^2 - 24x - 16y = -39 + 144 + 64 = 169$",
                "$(x - 12)^2 + (y - 8)^2 = 169$",
                "$h = 12$, $k = 8$, $r^2 = 169$",
                "$r = 13$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-24*x+144+y^2-16*y+64 = 169",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ and the radius $r$ of the circle $x^2 + y^2 - 24x - 16y + 39 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $144$ and $64$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 3 written right is $x^2 - 24x + 144 + y^2 - 16y + 64 = 169$.",
                  "reason": "Completing the square: the numbers that complete the two squares are added to both sides; the right side may also be left as the sum, $-39 + 144 + 64$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t152-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the circle in the figure, with centre $C(-6, -3)$ and the point $P(-2, -8)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
            "figure": {
              "file": "circles-2.svg",
              "alt": "A circle with its centre C at (−6, −3) and the point P at (−2, −8) on it."
            },
            "lines": [
              {
                "step": "Write the equation of the circle in the figure, with centre $C(-6, -3)$ and the point $P(-2, -8)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $(-6, -3)$, so $h = -6$ and $k = -3$.",
                "reason": "Standard form of a circle: $h$ and $k$ are the coordinates of the centre."
              },
              {
                "step": "$r^2 = (-2 - (-6))^2 + (-8 - (-3))^2 = 41$",
                "reason": "Distance formula: the radius is the distance from $C$ to $P$, and its square is the sum of the two squares."
              },
              {
                "step": "$(x + 6)^2 + (y + 3)^2 = 41$",
                "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$, with the values of $h$, $k$ and $r^2$ put in place."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the circle in the figure, with centre $C(-4, 1)$ and the point $P(-8, -3)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+4)^2+(y-1)^2 = 32",
              "lines": [
                {
                  "step": "Write the equation of the circle in the figure, with centre $C(-4, 1)$ and the point $P(-8, -3)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-4, 1)$, so $h = -4$ and $k = 1$.",
                  "reason": "Standard form of a circle: $h$ and $k$ are the coordinates of the centre."
                },
                {
                  "step": "$r^2 = (-8 - (-4))^2 + (-3 - 1)^2 = 32$",
                  "reason": "Distance formula: the radius is the distance from $C$ to $P$, and its square is the sum of the two squares."
                },
                {
                  "step": "$(x + 4)^2 + (y - 1)^2 = 32$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$, with the values of $h$, $k$ and $r^2$ put in place."
                }
              ],
              "figure": {
                "file": "circles-3.svg",
                "alt": "A circle with its centre C at (−4, 1) and the point P at (−8, −3) on it."
              }
            },
            {
              "prompt": "Write the equation of the circle in the figure, with centre $C(-1, -4)$ and the point $P(-5, -2)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+1)^2+(y+4)^2 = 20",
              "lines": [
                {
                  "step": "Write the equation of the circle in the figure, with centre $C(-1, -4)$ and the point $P(-5, -2)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-1, -4)$, so $h = -1$ and $k = -4$.",
                  "reason": "Standard form of a circle: $h$ and $k$ are the coordinates of the centre."
                },
                {
                  "step": "$r^2 = (-5 - (-1))^2 + (-2 - (-4))^2 = 20$",
                  "reason": "Distance formula: the radius is the distance from $C$ to $P$, and its square is the sum of the two squares."
                },
                {
                  "step": "$(x + 1)^2 + (y + 4)^2 = 20$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$, with the values of $h$, $k$ and $r^2$ put in place."
                }
              ],
              "figure": {
                "file": "circles-4.svg",
                "alt": "A circle with its centre C at (−1, −4) and the point P at (−5, −2) on it."
              }
            },
            {
              "prompt": "Write the equation of the circle in the figure, with centre $C(2, -8)$ and the point $P(5, -5)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-2)^2+(y+8)^2 = 18",
              "lines": [
                {
                  "step": "Write the equation of the circle in the figure, with centre $C(2, -8)$ and the point $P(5, -5)$ on it, in the form $(x - h)^2 + (y - k)^2 = r^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(2, -8)$, so $h = 2$ and $k = -8$.",
                  "reason": "Standard form of a circle: $h$ and $k$ are the coordinates of the centre."
                },
                {
                  "step": "$r^2 = (5 - 2)^2 + (-5 - (-8))^2 = 18$",
                  "reason": "Distance formula: the radius is the distance from $C$ to $P$, and its square is the sum of the two squares."
                },
                {
                  "step": "$(x - 2)^2 + (y + 8)^2 = 18$",
                  "reason": "Standard form of a circle: $(x - h)^2 + (y - k)^2 = r^2$, with the values of $h$, $k$ and $r^2$ put in place."
                }
              ],
              "figure": {
                "file": "circles-5.svg",
                "alt": "A circle with its centre C at (2, −8) and the point P at (5, −5) on it."
              }
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $x^2 + y^2 + 14x - 14y = 32$.",
            "lines": [
              {
                "step": "Sketch the graph of $x^2 + y^2 + 14x - 14y = 32$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 14x + 49 + y^2 - 14y + 49 = 32 + 49 + 49$",
                "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $49$ and $49$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
              },
              {
                "step": "$(x + 7)^2 + (y - 7)^2 = 130$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "The centre is $(-7, 7)$ and the radius is $\\sqrt{130}$.",
                "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
              },
              {
                "step": "$(x + 7)^2 + (0 - 7)^2 = 130$",
                "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$(x + 7)^2 = 81$",
                "reason": "Adding the same number to both sides: $49$ is taken from both sides."
              },
              {
                "step": "Either $x + 7 = 9$ or $x + 7 = -9$, so $x = 2$ or $x = -16$",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
              },
              {
                "step": "$(0 + 7)^2 + (y - 7)^2 = 130$",
                "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$(y - 7)^2 = 81$",
                "reason": "Adding the same number to both sides: $49$ is taken from both sides."
              },
              {
                "step": "Either $y - 7 = 9$ or $y - 7 = -9$, so $y = 16$ or $y = -2$",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
              },
              {
                "step": "The circle with that centre and radius, through these points, is the graph.",
                "reason": "Standard form of a circle: the graph is the circle with that centre and radius.",
                "figure": {
                  "file": "circles-13.svg",
                  "alt": "A circle with centre (−7, 7) crossing the x-axis at −16 and 2 and the y-axis at −2 and 16."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $x^2 + y^2 + 16x + 16y = -60$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-10, 0)$",
                  "$(-6, 0)$",
                  "$(0, -10)$",
                  "$(0, -6)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x^2 + y^2 + 16x + 16y = -60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 16x + 64 + y^2 + 16y + 64 = -60 + 64 + 64$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $64$ and $64$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 8)^2 + (y + 8)^2 = 68$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The centre is $(-8, -8)$ and the radius is $2\\sqrt{17}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "$(x + 8)^2 + (0 + 8)^2 = 68$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$(x + 8)^2 = 4$",
                  "reason": "Adding the same number to both sides: $64$ is taken from both sides."
                },
                {
                  "step": "Either $x + 8 = 2$ or $x + 8 = -2$, so $x = -6$ or $x = -10$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "$(0 + 8)^2 + (y + 8)^2 = 68$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$(y + 8)^2 = 4$",
                  "reason": "Adding the same number to both sides: $64$ is taken from both sides."
                },
                {
                  "step": "Either $y + 8 = 2$ or $y + 8 = -2$, so $y = -6$ or $y = -10$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "The circle with that centre and radius, through these points, is the graph.",
                  "reason": "Standard form of a circle: the graph is the circle with that centre and radius.",
                  "figure": {
                    "file": "circles-14.svg",
                    "alt": "A circle with centre (−8, −8) crossing the x-axis at −10 and −6 and the y-axis at −10 and −6."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x^2 + y^2 + 2x - 2y = 99$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-11, 0)$",
                  "$(9, 0)$",
                  "$(0, -9)$",
                  "$(0, 11)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x^2 + y^2 + 2x - 2y = 99$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 2x + 1 + y^2 - 2y + 1 = 99 + 1 + 1$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $1$ and $1$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 1)^2 + (y - 1)^2 = 101$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The centre is $(-1, 1)$ and the radius is $\\sqrt{101}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "$(x + 1)^2 + (0 - 1)^2 = 101$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$(x + 1)^2 = 100$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "Either $x + 1 = 10$ or $x + 1 = -10$, so $x = 9$ or $x = -11$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "$(0 + 1)^2 + (y - 1)^2 = 101$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$(y - 1)^2 = 100$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides."
                },
                {
                  "step": "Either $y - 1 = 10$ or $y - 1 = -10$, so $y = 11$ or $y = -9$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "The circle with that centre and radius, through these points, is the graph.",
                  "reason": "Standard form of a circle: the graph is the circle with that centre and radius.",
                  "figure": {
                    "file": "circles-15.svg",
                    "alt": "A circle with centre (−1, 1) crossing the x-axis at −11 and 9 and the y-axis at −9 and 11."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $x^2 + y^2 + 4x + 4y = 32$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-8, 0)$",
                  "$(4, 0)$",
                  "$(0, -8)$",
                  "$(0, 4)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $x^2 + y^2 + 4x + 4y = 32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 4x + 4 + y^2 + 4y + 4 = 32 + 4 + 4$",
                  "reason": "Completing the square: the squares of half the coefficients of $x$ and of $y$, $4$ and $4$, are added to both sides, with the terms in $x$ and the terms in $y$ put side by side."
                },
                {
                  "step": "$(x + 2)^2 + (y + 2)^2 = 40$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The centre is $(-2, -2)$ and the radius is $2\\sqrt{10}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "$(x + 2)^2 + (0 + 2)^2 = 40$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$(x + 2)^2 = 36$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides."
                },
                {
                  "step": "Either $x + 2 = 6$ or $x + 2 = -6$, so $x = 4$ or $x = -8$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "$(0 + 2)^2 + (y + 2)^2 = 40$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$(y + 2)^2 = 36$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides."
                },
                {
                  "step": "Either $y + 2 = 6$ or $y + 2 = -6$, so $y = 4$ or $y = -8$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "The circle with that centre and radius, through these points, is the graph.",
                  "reason": "Standard form of a circle: the graph is the circle with that centre and radius.",
                  "figure": {
                    "file": "circles-16.svg",
                    "alt": "A circle with centre (−2, −2) crossing the x-axis at −8 and 4 and the y-axis at −8 and 4."
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
      "id": "t152-p1",
      "method": "direct proof",
      "statement": "Let $(h, k)$ be a point and $r$ a positive number. A point $(x, y)$ is at distance $r$ from $(h, k)$ exactly when $(x - h)^2 + (y - k)^2 = r^2$.",
      "idea": "The distance formula writes the distance as a square root; squaring both sides gives the equation, and the positive square root takes the equation back to the distance.",
      "lines": [
        {
          "line": "Let $(x, y)$ be a point at distance $r$ from $(h, k)$.",
          "reason": "the first direction: its hypothesis"
        },
        {
          "line": "Then $\\sqrt{(x - h)^2 + (y - k)^2} = r$.",
          "reason": "distance formula, from $(h, k)$ to $(x, y)$"
        },
        {
          "line": "So $\\left(\\sqrt{(x - h)^2 + (y - k)^2}\\right)^2 = r^2$.",
          "reason": "raising both sides to a power: both sides are squared"
        },
        {
          "line": "So $(x - h)^2 + (y - k)^2 = r^2$.",
          "reason": "positive square root: the square of a square root is the number under it"
        },
        {
          "line": "Now let $(x, y)$ be a point with $(x - h)^2 + (y - k)^2 = r^2$.",
          "reason": "the second direction: its hypothesis"
        },
        {
          "line": "The number $r$ is positive, and its square is $(x - h)^2 + (y - k)^2$.",
          "reason": "the hypothesis on $r$, with the fifth line"
        },
        {
          "line": "So $\\sqrt{(x - h)^2 + (y - k)^2} = r$.",
          "reason": "positive square root: the square root of a number is the positive number whose square it is"
        },
        {
          "line": "So the distance from $(x, y)$ to $(h, k)$ is $r$.",
          "reason": "distance formula, with the seventh line"
        },
        {
          "line": "Therefore the points at distance $r$ from $(h, k)$ are exactly the solutions of $(x - h)^2 + (y - k)^2 = r^2$.",
          "reason": "the fourth and eighth lines: each direction holds"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t152-s1",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$ and $c$ with $c + \\dfrac{a^2 + b^2}{4}$ above $0$, the graph of $x^2 + ax + y^2 + by = c$ is the circle with centre $\\left(-\\dfrac{a}{2}, -\\dfrac{b}{2}\\right)$ and radius $\\sqrt{c + \\dfrac{a^2 + b^2}{4}}$. May use: adding the same number to both sides, completing the square, positive square root, standard form of a circle (this topic).",
      "check": {
        "proof": [
          {
            "line": "Let $d = c + \\dfrac{a^2 + b^2}{4}$, a positive number.",
            "reason": "the hypothesis"
          },
          {
            "line": "$x^2 + ax + \\dfrac{a^2}{4} + y^2 + by + \\dfrac{b^2}{4} = c + \\dfrac{a^2}{4} + \\dfrac{b^2}{4}$",
            "reason": "adding the same number to both sides: $\\dfrac{a^2}{4}$ and $\\dfrac{b^2}{4}$ are added"
          },
          {
            "line": "$\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = d$",
            "reason": "completing the square, once in $x$ and once in $y$, with the first line"
          },
          {
            "line": "The number $\\sqrt{d}$ is positive and $\\left(\\sqrt{d}\\right)^2 = d$.",
            "reason": "positive square root: $d$ is positive"
          },
          {
            "line": "Therefore the graph is the circle with centre $\\left(-\\dfrac{a}{2}, -\\dfrac{b}{2}\\right)$ and radius $\\sqrt{d}$.",
            "reason": "standard form of a circle, with $x + \\dfrac{a}{2} = x - \\left(-\\dfrac{a}{2}\\right)$ and $y + \\dfrac{b}{2} = y - \\left(-\\dfrac{b}{2}\\right)$"
          }
        ]
      }
    },
    {
      "id": "t152-s2",
      "method": "proof of existence by construction",
      "statement": "For numbers $a$, $b$ and $c$ with $c + \\dfrac{a^2 + b^2}{4} \\ge 0$, the graph of $x^2 + ax + y^2 + by = c$ has a point. May use: adding the same number to both sides, completing the square, substituting a value, positive square root.",
      "check": {
        "proof": [
          {
            "line": "Let $d = c + \\dfrac{a^2 + b^2}{4}$, a number that is $0$ or more.",
            "reason": "the hypothesis"
          },
          {
            "line": "$x^2 + ax + \\dfrac{a^2}{4} + y^2 + by + \\dfrac{b^2}{4} = c + \\dfrac{a^2}{4} + \\dfrac{b^2}{4}$",
            "reason": "adding the same number to both sides: $\\dfrac{a^2}{4}$ and $\\dfrac{b^2}{4}$ are added"
          },
          {
            "line": "$\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = d$",
            "reason": "completing the square, once in $x$ and once in $y$, with the first line"
          },
          {
            "line": "Take $x = -\\dfrac{a}{2} + \\sqrt{d}$ and $y = -\\dfrac{b}{2}$.",
            "reason": "the construction: $\\sqrt{d}$ is a real number, since $d$ is $0$ or more"
          },
          {
            "line": "Then $\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = \\left(\\sqrt{d}\\right)^2 + 0^2$.",
            "reason": "substituting a value"
          },
          {
            "line": "So $\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = d$.",
            "reason": "positive square root: the square of $\\sqrt{d}$ is $d$"
          },
          {
            "line": "Therefore the point $\\left(-\\dfrac{a}{2} + \\sqrt{d}, -\\dfrac{b}{2}\\right)$ lies on the graph.",
            "reason": "the third line: the point satisfies the equation in its rewritten form"
          }
        ]
      }
    },
    {
      "id": "t152-s3",
      "method": "proof by contradiction",
      "statement": "For numbers $a$, $b$ and $c$ with $c + \\dfrac{a^2 + b^2}{4}$ below $0$, the graph of $x^2 + ax + y^2 + by = c$ has no point. May use: adding the same number to both sides, completing the square, Trivial Inequality, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "Let $d = c + \\dfrac{a^2 + b^2}{4}$, a negative number.",
            "reason": "the hypothesis"
          },
          {
            "line": "Suppose a point $(x, y)$ lies on the graph.",
            "reason": "the assumption to be contradicted"
          },
          {
            "line": "Then $x^2 + ax + \\dfrac{a^2}{4} + y^2 + by + \\dfrac{b^2}{4} = c + \\dfrac{a^2}{4} + \\dfrac{b^2}{4}$",
            "reason": "adding the same number to both sides: $\\dfrac{a^2}{4}$ and $\\dfrac{b^2}{4}$ are added"
          },
          {
            "line": "Then $\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = d$",
            "reason": "completing the square, once in $x$ and once in $y$, with the first line"
          },
          {
            "line": "Also $\\left(x + \\dfrac{a}{2}\\right)^2 \\ge 0$ and $\\left(y + \\dfrac{b}{2}\\right)^2 \\ge 0$.",
            "reason": "Trivial Inequality, once for each square"
          },
          {
            "line": "So $\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 \\ge 0$.",
            "reason": "adding two inequalities"
          },
          {
            "line": "So $d \\ge 0$.",
            "reason": "the fourth and sixth lines: the sum equals $d$"
          },
          {
            "line": "This contradicts the first line, so no point lies on the graph.",
            "reason": "proof by contradiction"
          }
        ]
      }
    },
    {
      "id": "t152-s4",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$ and $c$ with $c + \\dfrac{a^2 + b^2}{4} = 0$, the graph of $x^2 + ax + y^2 + by = c$ is the one point $\\left(-\\dfrac{a}{2}, -\\dfrac{b}{2}\\right)$. May use: adding the same number to both sides, completing the square, a sum of squares is zero only when each is zero, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "$x^2 + ax + \\dfrac{a^2}{4} + y^2 + by + \\dfrac{b^2}{4} = c + \\dfrac{a^2}{4} + \\dfrac{b^2}{4}$",
            "reason": "adding the same number to both sides: $\\dfrac{a^2}{4}$ and $\\dfrac{b^2}{4}$ are added"
          },
          {
            "line": "$\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = c + \\dfrac{a^2 + b^2}{4}$",
            "reason": "completing the square, once in $x$ and once in $y$"
          },
          {
            "line": "So $\\left(x + \\dfrac{a}{2}\\right)^2 + \\left(y + \\dfrac{b}{2}\\right)^2 = 0$.",
            "reason": "the hypothesis"
          },
          {
            "line": "So $\\left(x + \\dfrac{a}{2}\\right)^2 = 0$ and $\\left(y + \\dfrac{b}{2}\\right)^2 = 0$.",
            "reason": "a sum of squares is zero only when each is zero"
          },
          {
            "line": "So $x + \\dfrac{a}{2} = 0$ and $y + \\dfrac{b}{2} = 0$.",
            "reason": "Trivial Inequality: a square is $0$ only at $0$"
          },
          {
            "line": "So $x = -\\dfrac{a}{2}$ and $y = -\\dfrac{b}{2}$.",
            "reason": "adding the same number to both sides"
          },
          {
            "line": "The point $\\left(-\\dfrac{a}{2}, -\\dfrac{b}{2}\\right)$ satisfies the third line, since $0^2 + 0^2 = 0$.",
            "reason": "substituting a value"
          },
          {
            "line": "Therefore the graph is exactly the one point $\\left(-\\dfrac{a}{2}, -\\dfrac{b}{2}\\right)$.",
            "reason": "the sixth and seventh lines: no other point lies on it, and this one does"
          }
        ]
      }
    }
  ]
}
