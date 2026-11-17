export default {
  "number": 190,
  "title": "Ellipses",
  "section": 12,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "129-142"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x + 5)^2}{49} + \\dfrac{(y - 4)^2}{81} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
    "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
    "answer": "h = -5, k = 4, a = 9, b = 7, c = 4*sqrt(2)",
    "solution": [
      "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x + 5)^2}{49} + \\dfrac{(y - 4)^2}{81} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
      "$h = -5$, $k = 4$",
      "$a^2 = 81$, $b^2 = 49$",
      "$a = 9$, $b = 7$",
      "$c^2 = 81 - 49 = 32$",
      "$c = \\sqrt{32}$",
      "$h = -5$, $k = 4$, $a = 9$, $b = 7$, $c = 4\\sqrt{2}$"
    ]
  },
  "ideas": [
    {
      "name": "Ellipse, foci and axes",
      "concrete": "The points whose distances from $(-3, 2)$ and $(13, 2)$ add to $34$ include $(22, 2)$, at distances $25$ and $9$, and $(5, 17)$, at distance $17$ from each. Together they make an oval curve round $(5, 2)$, the midpoint of the two given points.",
      "general": "For two points $F_1$ and $F_2$ and a number $2a$ greater than the distance between them, the **ellipse** with **foci** $F_1$ and $F_2$ is the set of points whose distances from $F_1$ and from $F_2$ add to $2a$. The midpoint of the foci is the **centre** of the ellipse. A segment with both ends on the ellipse is a **chord**. The **major axis** is the chord through both foci; the **minor axis** is the chord through the centre at right angles to it. The two axes cross at the centre."
    },
    {
      "name": "Sum of focal distances",
      "concrete": "For the ellipse with foci $(-3, 2)$ and $(13, 2)$ and distances adding to $34$, the major axis runs along the line $y = 2$ from $(-12, 2)$ to $(22, 2)$, and its length, $34$, is the sum of the distances.",
      "general": "For an ellipse whose points have distances from its foci adding to $2a$, the major axis has length $2a$, and its ends are at distance $a$ from the centre: for every point of the ellipse, the distances to the two foci add to the length of the major axis."
    },
    {
      "name": "Standard form of an ellipse",
      "concrete": "The ellipse with centre $(-4, 6)$, a horizontal major axis of length $20$ and a minor axis of length $14$ is the graph of $\\dfrac{(x + 4)^2}{100} + \\dfrac{(y - 6)^2}{49} = 1$; its axes end at $(-14, 6)$, $(6, 6)$, $(-4, -1)$ and $(-4, 13)$.",
      "general": "For numbers $h$ and $k$ and numbers $a$ and $b$ with $a > b > 0$, the graph of $\\dfrac{(x - h)^2}{a^2} + \\dfrac{(y - k)^2}{b^2} = 1$ is the ellipse with centre $(h, k)$, a horizontal major axis of length $2a$ and a vertical minor axis of length $2b$; the graph of $\\dfrac{(x - h)^2}{b^2} + \\dfrac{(y - k)^2}{a^2} = 1$ is the same ellipse turned, with a vertical major axis. In each, the larger denominator is $a^2$ and sits under the bracket of the coordinate along which the major axis runs. This is the **standard form** of an ellipse."
    },
    {
      "name": "Focal relation of an ellipse",
      "concrete": "For $\\dfrac{(x - 2)^2}{625} + \\dfrac{(y + 9)^2}{576} = 1$, $a = 25$ and $b = 24$, so $c^2 = 625 - 576 = 49$ and $c = 7$: the foci are $(-5, -9)$ and $(9, -9)$, $7$ to each side of the centre $(2, -9)$.",
      "general": "For an ellipse with a major axis of length $2a$ and a minor axis of length $2b$, $a > b > 0$, the distance $c$ from the centre to each focus satisfies $c^2 = a^2 - b^2$: the centre, a focus and an end of the minor axis make a right triangle whose hypotenuse is $a$. The foci lie on the major axis, at $(h \\pm c, k)$ when it is horizontal and at $(h, k \\pm c)$ when it is vertical."
    }
  ],
  "kinds": [
    {
      "id": "t190-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x + 4)^2}{49} + \\dfrac{(y - 1)^2}{4} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x + 4)^2}{49} + \\dfrac{(y - 1)^2}{4} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = -4$, $k = 1$",
                "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
              },
              {
                "step": "$a^2 = 49$, $b^2 = 4$",
                "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
              },
              {
                "step": "$a = 7$, $b = 2$",
                "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
              },
              {
                "step": "$c^2 = 49 - 4 = 45$",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
              },
              {
                "step": "$c = \\sqrt{45}$",
                "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $45$."
              },
              {
                "step": "$h = -4$, $k = 1$, $a = 7$, $b = 2$, $c = 3\\sqrt{5}$",
                "reason": "Simplest radical form: $\\sqrt{45} = \\sqrt{9}\\sqrt{5} = 3\\sqrt{5}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x - 2)^2}{100} + \\dfrac{(y + 3)^2}{256} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 2, k = -3, a = 16, b = 10, c = 2*sqrt(39)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x - 2)^2}{100} + \\dfrac{(y + 3)^2}{256} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 2$, $k = -3$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 256$, $b^2 = 100$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$a = 16$, $b = 10$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 256 - 100 = 156$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{156}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $156$."
                },
                {
                  "step": "$h = 2$, $k = -3$, $a = 16$, $b = 10$, $c = 2\\sqrt{39}$",
                  "reason": "Simplest radical form: $\\sqrt{156} = \\sqrt{4}\\sqrt{39} = 2\\sqrt{39}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x - 6)^2}{100} + \\dfrac{(y - 3)^2}{4} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 6, k = 3, a = 10, b = 2, c = 4*sqrt(6)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x - 6)^2}{100} + \\dfrac{(y - 3)^2}{4} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 6$, $k = 3$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 100$, $b^2 = 4$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
                },
                {
                  "step": "$a = 10$, $b = 2$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 100 - 4 = 96$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{96}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $96$."
                },
                {
                  "step": "$h = 6$, $k = 3$, $a = 10$, $b = 2$, $c = 4\\sqrt{6}$",
                  "reason": "Simplest radical form: $\\sqrt{96} = \\sqrt{16}\\sqrt{6} = 4\\sqrt{6}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x - 7)^2}{81} + \\dfrac{(y + 8)^2}{256} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 7, k = -8, a = 16, b = 9, c = 5*sqrt(7)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $\\dfrac{(x - 7)^2}{81} + \\dfrac{(y + 8)^2}{256} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 7$, $k = -8$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 256$, $b^2 = 81$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$a = 16$, $b = 9$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 256 - 81 = 175$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{175}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $175$."
                },
                {
                  "step": "$h = 7$, $k = -8$, $a = 16$, $b = 9$, $c = 5\\sqrt{7}$",
                  "reason": "Simplest radical form: $\\sqrt{175} = \\sqrt{25}\\sqrt{7} = 5\\sqrt{7}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the centre $(h, k)$ of the ellipse $9x^2 + 16y^2 - 162x + 96y = 423$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ of the ellipse $9x^2 + 16y^2 - 162x + 96y = 423$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$9(x^2 - 18x) + 16(y^2 + 6y) = 423$",
                "reason": "Taking out a common factor: $9$ is taken out of the two terms in $x$ and $16$ out of the two terms in $y$."
              },
              {
                "step": "$9(x^2 - 18x + 81) + 16(y^2 + 6y + 9) = 423 + 729 + 144$",
                "reason": "Completing the square: $81$ and $9$ are added inside the brackets, which adds $9 \\cdot 81 = 729$ and $16 \\cdot 9 = 144$ to the left side, so both are added to the right side too."
              },
              {
                "step": "$9(x - 9)^2 + 16(y + 3)^2 = 1296$",
                "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "$\\dfrac{(x - 9)^2}{144} + \\dfrac{(y + 3)^2}{81} = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $1296$, with $\\dfrac{9}{1296} = \\dfrac{1}{144}$ and $\\dfrac{16}{1296} = \\dfrac{1}{81}$."
              },
              {
                "step": "$h = 9$, $k = -3$",
                "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
              },
              {
                "step": "$a^2 = 144$, $b^2 = 81$",
                "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
              },
              {
                "step": "$a = 12$, $b = 9$",
                "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
              },
              {
                "step": "$c^2 = 144 - 81 = 63$",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
              },
              {
                "step": "$c = \\sqrt{63}$",
                "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $63$."
              },
              {
                "step": "$h = 9$, $k = -3$, $a = 12$, $b = 9$, $c = 3\\sqrt{7}$",
                "reason": "Simplest radical form: $\\sqrt{63} = \\sqrt{9}\\sqrt{7} = 3\\sqrt{7}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $81x^2 + 25y^2 + 162x + 200y = 1544$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -1, k = -4, a = 9, b = 5, c = 2*sqrt(14)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $81x^2 + 25y^2 + 162x + 200y = 1544$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$81(x^2 + 2x) + 25(y^2 + 8y) = 1544$",
                  "reason": "Taking out a common factor: $81$ is taken out of the two terms in $x$ and $25$ out of the two terms in $y$."
                },
                {
                  "step": "$81(x^2 + 2x + 1) + 25(y^2 + 8y + 16) = 1544 + 81 + 400$",
                  "reason": "Completing the square: $1$ and $16$ are added inside the brackets, which adds $81 \\cdot 1 = 81$ and $25 \\cdot 16 = 400$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$81(x + 1)^2 + 25(y + 4)^2 = 2025$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2}{25} + \\dfrac{(y + 4)^2}{81} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2025$, with $\\dfrac{81}{2025} = \\dfrac{1}{25}$ and $\\dfrac{25}{2025} = \\dfrac{1}{81}$."
                },
                {
                  "step": "$h = -1$, $k = -4$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 81$, $b^2 = 25$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$a = 9$, $b = 5$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 81 - 25 = 56$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{56}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $56$."
                },
                {
                  "step": "$h = -1$, $k = -4$, $a = 9$, $b = 5$, $c = 2\\sqrt{14}$",
                  "reason": "Simplest radical form: $\\sqrt{56} = \\sqrt{4}\\sqrt{14} = 2\\sqrt{14}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $4x^2 + 9y^2 - 16x + 126y = -133$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 2, k = -7, a = 9, b = 6, c = 3*sqrt(5)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $4x^2 + 9y^2 - 16x + 126y = -133$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(x^2 - 4x) + 9(y^2 + 14y) = -133$",
                  "reason": "Taking out a common factor: $4$ is taken out of the two terms in $x$ and $9$ out of the two terms in $y$."
                },
                {
                  "step": "$4(x^2 - 4x + 4) + 9(y^2 + 14y + 49) = -133 + 16 + 441$",
                  "reason": "Completing the square: $4$ and $49$ are added inside the brackets, which adds $4 \\cdot 4 = 16$ and $9 \\cdot 49 = 441$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$4(x - 2)^2 + 9(y + 7)^2 = 324$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 2)^2}{81} + \\dfrac{(y + 7)^2}{36} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $324$, with $\\dfrac{4}{324} = \\dfrac{1}{81}$ and $\\dfrac{9}{324} = \\dfrac{1}{36}$."
                },
                {
                  "step": "$h = 2$, $k = -7$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 81$, $b^2 = 36$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
                },
                {
                  "step": "$a = 9$, $b = 6$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 81 - 36 = 45$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{45}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $45$."
                },
                {
                  "step": "$h = 2$, $k = -7$, $a = 9$, $b = 6$, $c = 3\\sqrt{5}$",
                  "reason": "Simplest radical form: $\\sqrt{45} = \\sqrt{9}\\sqrt{5} = 3\\sqrt{5}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $9x^2 + 4y^2 - 144x - 8y = 320$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 8, k = 1, a = 15, b = 10, c = 5*sqrt(5)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $9x^2 + 4y^2 - 144x - 8y = 320$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9(x^2 - 16x) + 4(y^2 - 2y) = 320$",
                  "reason": "Taking out a common factor: $9$ is taken out of the two terms in $x$ and $4$ out of the two terms in $y$."
                },
                {
                  "step": "$9(x^2 - 16x + 64) + 4(y^2 - 2y + 1) = 320 + 576 + 4$",
                  "reason": "Completing the square: $64$ and $1$ are added inside the brackets, which adds $9 \\cdot 64 = 576$ and $4 \\cdot 1 = 4$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$9(x - 8)^2 + 4(y - 1)^2 = 900$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 8)^2}{100} + \\dfrac{(y - 1)^2}{225} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $900$, with $\\dfrac{9}{900} = \\dfrac{1}{100}$ and $\\dfrac{4}{900} = \\dfrac{1}{225}$."
                },
                {
                  "step": "$h = 8$, $k = 1$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 225$, $b^2 = 100$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$a = 15$, $b = 10$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 225 - 100 = 125$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{125}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $125$."
                },
                {
                  "step": "$h = 8$, $k = 1$, $a = 15$, $b = 10$, $c = 5\\sqrt{5}$",
                  "reason": "Simplest radical form: $\\sqrt{125} = \\sqrt{25}\\sqrt{5} = 5\\sqrt{5}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the centre $(h, k)$ of the ellipse $9x^2 + 16y^2 + 72x - 96y - 2016 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
            "lines": [
              {
                "step": "Find the centre $(h, k)$ of the ellipse $9x^2 + 16y^2 + 72x - 96y - 2016 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$9x^2 + 16y^2 + 72x - 96y = 2016$",
                "reason": "Adding the same number to both sides: $2016$ is added to both sides."
              },
              {
                "step": "$9(x^2 + 8x) + 16(y^2 - 6y) = 2016$",
                "reason": "Taking out a common factor: $9$ is taken out of the two terms in $x$ and $16$ out of the two terms in $y$."
              },
              {
                "step": "$9(x^2 + 8x + 16) + 16(y^2 - 6y + 9) = 2016 + 144 + 144$",
                "reason": "Completing the square: $16$ and $9$ are added inside the brackets, which adds $9 \\cdot 16 = 144$ and $16 \\cdot 9 = 144$ to the left side, so both are added to the right side too."
              },
              {
                "step": "$9(x + 4)^2 + 16(y - 3)^2 = 2304$",
                "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "$\\dfrac{(x + 4)^2}{256} + \\dfrac{(y - 3)^2}{144} = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2304$, with $\\dfrac{9}{2304} = \\dfrac{1}{256}$ and $\\dfrac{16}{2304} = \\dfrac{1}{144}$."
              },
              {
                "step": "$h = -4$, $k = 3$",
                "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
              },
              {
                "step": "$a^2 = 256$, $b^2 = 144$",
                "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
              },
              {
                "step": "$a = 16$, $b = 12$",
                "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
              },
              {
                "step": "$c^2 = 256 - 144 = 112$",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
              },
              {
                "step": "$c = \\sqrt{112}$",
                "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $112$."
              },
              {
                "step": "$h = -4$, $k = 3$, $a = 16$, $b = 12$, $c = 4\\sqrt{7}$",
                "reason": "Simplest radical form: $\\sqrt{112} = \\sqrt{16}\\sqrt{7} = 4\\sqrt{7}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $169x^2 + 16y^2 - 1690x - 160y + 1921 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 5, k = 5, a = 13, b = 4, c = 3*sqrt(17)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $169x^2 + 16y^2 - 1690x - 160y + 1921 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$169x^2 + 16y^2 - 1690x - 160y = -1921$",
                  "reason": "Adding the same number to both sides: $1921$ is taken from both sides."
                },
                {
                  "step": "$169(x^2 - 10x) + 16(y^2 - 10y) = -1921$",
                  "reason": "Taking out a common factor: $169$ is taken out of the two terms in $x$ and $16$ out of the two terms in $y$."
                },
                {
                  "step": "$169(x^2 - 10x + 25) + 16(y^2 - 10y + 25) = -1921 + 4225 + 400$",
                  "reason": "Completing the square: $25$ and $25$ are added inside the brackets, which adds $169 \\cdot 25 = 4225$ and $16 \\cdot 25 = 400$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$169(x - 5)^2 + 16(y - 5)^2 = 2704$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 5)^2}{16} + \\dfrac{(y - 5)^2}{169} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2704$, with $\\dfrac{169}{2704} = \\dfrac{1}{16}$ and $\\dfrac{16}{2704} = \\dfrac{1}{169}$."
                },
                {
                  "step": "$h = 5$, $k = 5$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 169$, $b^2 = 16$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$a = 13$, $b = 4$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 169 - 16 = 153$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{153}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $153$."
                },
                {
                  "step": "$h = 5$, $k = 5$, $a = 13$, $b = 4$, $c = 3\\sqrt{17}$",
                  "reason": "Simplest radical form: $\\sqrt{153} = \\sqrt{9}\\sqrt{17} = 3\\sqrt{17}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $4x^2 + 49y^2 - 56x + 882y + 3381 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 7, k = -9, a = 14, b = 4, c = 6*sqrt(5)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $4x^2 + 49y^2 - 56x + 882y + 3381 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 + 49y^2 - 56x + 882y = -3381$",
                  "reason": "Adding the same number to both sides: $3381$ is taken from both sides."
                },
                {
                  "step": "$4(x^2 - 14x) + 49(y^2 + 18y) = -3381$",
                  "reason": "Taking out a common factor: $4$ is taken out of the two terms in $x$ and $49$ out of the two terms in $y$."
                },
                {
                  "step": "$4(x^2 - 14x + 49) + 49(y^2 + 18y + 81) = -3381 + 196 + 3969$",
                  "reason": "Completing the square: $49$ and $81$ are added inside the brackets, which adds $4 \\cdot 49 = 196$ and $49 \\cdot 81 = 3969$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$4(x - 7)^2 + 49(y + 9)^2 = 784$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 7)^2}{196} + \\dfrac{(y + 9)^2}{16} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $784$, with $\\dfrac{4}{784} = \\dfrac{1}{196}$ and $\\dfrac{49}{784} = \\dfrac{1}{16}$."
                },
                {
                  "step": "$h = 7$, $k = -9$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 196$, $b^2 = 16$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
                },
                {
                  "step": "$a = 14$, $b = 4$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 196 - 16 = 180$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{180}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $180$."
                },
                {
                  "step": "$h = 7$, $k = -9$, $a = 14$, $b = 4$, $c = 6\\sqrt{5}$",
                  "reason": "Simplest radical form: $\\sqrt{180} = \\sqrt{36}\\sqrt{5} = 6\\sqrt{5}$."
                }
              ]
            },
            {
              "prompt": "Find the centre $(h, k)$ of the ellipse $49x^2 + 25y^2 + 98x + 50y - 1151 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -1, k = -1, a = 7, b = 5, c = 2*sqrt(6)",
              "lines": [
                {
                  "step": "Find the centre $(h, k)$ of the ellipse $49x^2 + 25y^2 + 98x + 50y - 1151 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$49x^2 + 25y^2 + 98x + 50y = 1151$",
                  "reason": "Adding the same number to both sides: $1151$ is added to both sides."
                },
                {
                  "step": "$49(x^2 + 2x) + 25(y^2 + 2y) = 1151$",
                  "reason": "Taking out a common factor: $49$ is taken out of the two terms in $x$ and $25$ out of the two terms in $y$."
                },
                {
                  "step": "$49(x^2 + 2x + 1) + 25(y^2 + 2y + 1) = 1151 + 49 + 25$",
                  "reason": "Completing the square: $1$ and $1$ are added inside the brackets, which adds $49 \\cdot 1 = 49$ and $25 \\cdot 1 = 25$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$49(x + 1)^2 + 25(y + 1)^2 = 1225$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2}{25} + \\dfrac{(y + 1)^2}{49} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $1225$, with $\\dfrac{49}{1225} = \\dfrac{1}{25}$ and $\\dfrac{25}{1225} = \\dfrac{1}{49}$."
                },
                {
                  "step": "$h = -1$, $k = -1$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 49$, $b^2 = 25$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$a = 7$, $b = 5$",
                  "reason": "Positive square root: $a$ and $b$ are half the lengths of the two axes, so each is the positive number whose square is given."
                },
                {
                  "step": "$c^2 = 49 - 25 = 24$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{24}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $24$."
                },
                {
                  "step": "$h = -1$, $k = -1$, $a = 7$, $b = 5$, $c = 2\\sqrt{6}$",
                  "reason": "Simplest radical form: $\\sqrt{24} = \\sqrt{4}\\sqrt{6} = 2\\sqrt{6}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the focus of the ellipse $\\dfrac{(x + 7)^2}{81} + \\dfrac{(y + 1)^2}{9} = 1$ that lies above or to the right of its centre.",
            "lines": [
              {
                "step": "Find the focus of the ellipse $\\dfrac{(x + 7)^2}{81} + \\dfrac{(y + 1)^2}{9} = 1$ that lies above or to the right of its centre.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = -7$, $k = -1$",
                "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
              },
              {
                "step": "$a^2 = 81$, $b^2 = 9$",
                "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
              },
              {
                "step": "$c^2 = 81 - 9 = 72$",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
              },
              {
                "step": "$c = \\sqrt{72}$",
                "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $72$."
              },
              {
                "step": "$c = 6\\sqrt{2}$",
                "reason": "Simplest radical form: $\\sqrt{72} = \\sqrt{36}\\sqrt{2} = 6\\sqrt{2}$."
              },
              {
                "step": "The foci are $(-7 - 6\\sqrt{2}, -1)$ and $(-7 + 6\\sqrt{2}, -1)$.",
                "reason": "Focal relation of an ellipse: the foci lie on the major axis, $c$ from the centre, at $(h \\pm c, k)$ since the major axis is horizontal (line 3)."
              },
              {
                "step": "$(-7 + 6\\sqrt{2}, -1)$",
                "reason": "Answering the question asked: $(-7 + 6\\sqrt{2}, -1)$ lies to the right of the centre."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the focus of the ellipse $\\dfrac{(x - 4)^2}{81} + \\dfrac{(y - 2)^2}{169} = 1$ that lies above or to the right of its centre.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, 2+2*sqrt(22))",
              "lines": [
                {
                  "step": "Find the focus of the ellipse $\\dfrac{(x - 4)^2}{81} + \\dfrac{(y - 2)^2}{169} = 1$ that lies above or to the right of its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 4$, $k = 2$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 169$, $b^2 = 81$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$c^2 = 169 - 81 = 88$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{88}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $88$."
                },
                {
                  "step": "$c = 2\\sqrt{22}$",
                  "reason": "Simplest radical form: $\\sqrt{88} = \\sqrt{4}\\sqrt{22} = 2\\sqrt{22}$."
                },
                {
                  "step": "The foci are $(4, 2 - 2\\sqrt{22})$ and $(4, 2 + 2\\sqrt{22})$.",
                  "reason": "Focal relation of an ellipse: the foci lie on the major axis, $c$ from the centre, at $(h, k \\pm c)$ since the major axis is vertical (line 3)."
                },
                {
                  "step": "$(4, 2 + 2\\sqrt{22})$",
                  "reason": "Answering the question asked: $(4, 2 + 2\\sqrt{22})$ lies above the centre."
                }
              ]
            },
            {
              "prompt": "Find the focus of the ellipse $\\dfrac{(x - 7)^2}{256} + \\dfrac{(y - 7)^2}{4} = 1$ that lies above or to the right of its centre.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(7+6*sqrt(7), 7)",
              "lines": [
                {
                  "step": "Find the focus of the ellipse $\\dfrac{(x - 7)^2}{256} + \\dfrac{(y - 7)^2}{4} = 1$ that lies above or to the right of its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 7$, $k = 7$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 256$, $b^2 = 4$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
                },
                {
                  "step": "$c^2 = 256 - 4 = 252$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{252}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $252$."
                },
                {
                  "step": "$c = 6\\sqrt{7}$",
                  "reason": "Simplest radical form: $\\sqrt{252} = \\sqrt{36}\\sqrt{7} = 6\\sqrt{7}$."
                },
                {
                  "step": "The foci are $(7 - 6\\sqrt{7}, 7)$ and $(7 + 6\\sqrt{7}, 7)$.",
                  "reason": "Focal relation of an ellipse: the foci lie on the major axis, $c$ from the centre, at $(h \\pm c, k)$ since the major axis is horizontal (line 3)."
                },
                {
                  "step": "$(7 + 6\\sqrt{7}, 7)$",
                  "reason": "Answering the question asked: $(7 + 6\\sqrt{7}, 7)$ lies to the right of the centre."
                }
              ]
            },
            {
              "prompt": "Find the focus of the ellipse $\\dfrac{(x - 9)^2}{9} + \\dfrac{(y - 2)^2}{225} = 1$ that lies above or to the right of its centre.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(9, 2+6*sqrt(6))",
              "lines": [
                {
                  "step": "Find the focus of the ellipse $\\dfrac{(x - 9)^2}{9} + \\dfrac{(y - 2)^2}{225} = 1$ that lies above or to the right of its centre.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 9$, $k = 2$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                },
                {
                  "step": "$a^2 = 225$, $b^2 = 9$",
                  "reason": "Standard form of an ellipse: the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "$c^2 = 225 - 9 = 216$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                },
                {
                  "step": "$c = \\sqrt{216}$",
                  "reason": "Positive square root: $c$ is a distance, so it is the positive number whose square is $216$."
                },
                {
                  "step": "$c = 6\\sqrt{6}$",
                  "reason": "Simplest radical form: $\\sqrt{216} = \\sqrt{36}\\sqrt{6} = 6\\sqrt{6}$."
                },
                {
                  "step": "The foci are $(9, 2 - 6\\sqrt{6})$ and $(9, 2 + 6\\sqrt{6})$.",
                  "reason": "Focal relation of an ellipse: the foci lie on the major axis, $c$ from the centre, at $(h, k \\pm c)$ since the major axis is vertical (line 3)."
                },
                {
                  "step": "$(9, 2 + 6\\sqrt{6})$",
                  "reason": "Answering the question asked: $(9, 2 + 6\\sqrt{6})$ lies above the centre."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t190-k2",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $4x^2 + 9y^2 - 24x + 144y = 2988$.",
            "lines": [
              {
                "step": "Sketch the graph of $4x^2 + 9y^2 - 24x + 144y = 2988$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4(x^2 - 6x) + 9(y^2 + 16y) = 2988$",
                "reason": "Taking out a common factor: $4$ is taken out of the two terms in $x$ and $9$ out of the two terms in $y$."
              },
              {
                "step": "$4(x^2 - 6x + 9) + 9(y^2 + 16y + 64) = 2988 + 36 + 576$",
                "reason": "Completing the square: $9$ and $64$ are added inside the brackets, which adds $4 \\cdot 9 = 36$ and $9 \\cdot 64 = 576$ to the left side, so both are added to the right side too."
              },
              {
                "step": "$4(x - 3)^2 + 9(y + 8)^2 = 3600$",
                "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "$\\dfrac{(x - 3)^2}{900} + \\dfrac{(y + 8)^2}{400} = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3600$, with $\\dfrac{4}{3600} = \\dfrac{1}{900}$ and $\\dfrac{9}{3600} = \\dfrac{1}{400}$."
              },
              {
                "step": "The centre is $(3, -8)$, $a = 30$ and $b = 20$, and the major axis is horizontal.",
                "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
              },
              {
                "step": "The ends of the major axis are $(-27, -8)$ and $(33, -8)$, and the ends of the minor axis are $(3, -28)$ and $(3, 12)$.",
                "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
              },
              {
                "step": "$\\dfrac{(x - 3)^2}{900} + \\dfrac{(0 + 8)^2}{400} = 1$",
                "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$\\dfrac{(x - 3)^2}{900} = \\dfrac{21}{25}$",
                "reason": "Adding the same number to both sides: $\\dfrac{64}{400}$ is taken from both sides."
              },
              {
                "step": "$(x - 3)^2 = 756$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $900$."
              },
              {
                "step": "Either $x - 3 = \\sqrt{756}$ or $x - 3 = -\\sqrt{756}$, so $x = 3 + \\sqrt{756}$ or $x = 3 - \\sqrt{756}$",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
              },
              {
                "step": "So $x = 3 + 6\\sqrt{21}$ or $x = 3 - 6\\sqrt{21}$.",
                "reason": "Simplest radical form: $\\sqrt{756} = 6\\sqrt{21}$."
              },
              {
                "step": "$\\dfrac{(0 - 3)^2}{900} + \\dfrac{(y + 8)^2}{400} = 1$",
                "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$\\dfrac{(y + 8)^2}{400} = \\dfrac{99}{100}$",
                "reason": "Adding the same number to both sides: $\\dfrac{9}{900}$ is taken from both sides."
              },
              {
                "step": "$(y + 8)^2 = 396$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $400$."
              },
              {
                "step": "Either $y + 8 = \\sqrt{396}$ or $y + 8 = -\\sqrt{396}$, so $y = -8 + \\sqrt{396}$ or $y = -8 - \\sqrt{396}$",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
              },
              {
                "step": "So $y = -8 + 6\\sqrt{11}$ or $y = -8 - 6\\sqrt{11}$.",
                "reason": "Simplest radical form: $\\sqrt{396} = 6\\sqrt{11}$."
              },
              {
                "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                "figure": {
                  "file": "ellipses-2.svg",
                  "alt": "An ellipse with centre (3, −8) crossing the x-axis at 3 − 6√21 and 3 + 6√21 and the y-axis at −8 − 6√11 and −8 + 6√11."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $9x^2 + 4y^2 + 180x - 144y = 108$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-10 - 4\\sqrt{7}, 0)$",
                  "$(-10 + 4\\sqrt{7}, 0)$",
                  "$(0, 18 - 3\\sqrt{39})$",
                  "$(0, 18 + 3\\sqrt{39})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $9x^2 + 4y^2 + 180x - 144y = 108$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9(x^2 + 20x) + 4(y^2 - 36y) = 108$",
                  "reason": "Taking out a common factor: $9$ is taken out of the two terms in $x$ and $4$ out of the two terms in $y$."
                },
                {
                  "step": "$9(x^2 + 20x + 100) + 4(y^2 - 36y + 324) = 108 + 900 + 1296$",
                  "reason": "Completing the square: $100$ and $324$ are added inside the brackets, which adds $9 \\cdot 100 = 900$ and $4 \\cdot 324 = 1296$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$9(x + 10)^2 + 4(y - 18)^2 = 2304$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x + 10)^2}{256} + \\dfrac{(y - 18)^2}{576} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2304$, with $\\dfrac{9}{2304} = \\dfrac{1}{256}$ and $\\dfrac{4}{2304} = \\dfrac{1}{576}$."
                },
                {
                  "step": "The centre is $(-10, 18)$, $a = 24$ and $b = 16$, and the major axis is vertical.",
                  "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "The ends of the major axis are $(-10, -6)$ and $(-10, 42)$, and the ends of the minor axis are $(-26, 18)$ and $(6, 18)$.",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
                },
                {
                  "step": "$\\dfrac{(x + 10)^2}{256} + \\dfrac{(0 - 18)^2}{576} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 10)^2}{256} = \\dfrac{7}{16}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{324}{576}$ is taken from both sides."
                },
                {
                  "step": "$(x + 10)^2 = 112$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $256$."
                },
                {
                  "step": "Either $x + 10 = \\sqrt{112}$ or $x + 10 = -\\sqrt{112}$, so $x = -10 + \\sqrt{112}$ or $x = -10 - \\sqrt{112}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $x = -10 + 4\\sqrt{7}$ or $x = -10 - 4\\sqrt{7}$.",
                  "reason": "Simplest radical form: $\\sqrt{112} = 4\\sqrt{7}$."
                },
                {
                  "step": "$\\dfrac{(0 + 10)^2}{256} + \\dfrac{(y - 18)^2}{576} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y - 18)^2}{576} = \\dfrac{39}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{100}{256}$ is taken from both sides."
                },
                {
                  "step": "$(y - 18)^2 = 351$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $576$."
                },
                {
                  "step": "Either $y - 18 = \\sqrt{351}$ or $y - 18 = -\\sqrt{351}$, so $y = 18 + \\sqrt{351}$ or $y = 18 - \\sqrt{351}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $y = 18 + 3\\sqrt{39}$ or $y = 18 - 3\\sqrt{39}$.",
                  "reason": "Simplest radical form: $\\sqrt{351} = 3\\sqrt{39}$."
                },
                {
                  "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                  "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                  "figure": {
                    "file": "ellipses-3.svg",
                    "alt": "An ellipse with centre (−10, 18) crossing the x-axis at −10 − 4√7 and −10 + 4√7 and the y-axis at 18 − 3√39 and 18 + 3√39."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $4x^2 + 25y^2 + 120x - 500y = 200$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-15 - 5\\sqrt{11}, 0)$",
                  "$(-15 + 5\\sqrt{11}, 0)$",
                  "$(0, 10 - 6\\sqrt{3})$",
                  "$(0, 10 + 6\\sqrt{3})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $4x^2 + 25y^2 + 120x - 500y = 200$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(x^2 + 30x) + 25(y^2 - 20y) = 200$",
                  "reason": "Taking out a common factor: $4$ is taken out of the two terms in $x$ and $25$ out of the two terms in $y$."
                },
                {
                  "step": "$4(x^2 + 30x + 225) + 25(y^2 - 20y + 100) = 200 + 900 + 2500$",
                  "reason": "Completing the square: $225$ and $100$ are added inside the brackets, which adds $4 \\cdot 225 = 900$ and $25 \\cdot 100 = 2500$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$4(x + 15)^2 + 25(y - 10)^2 = 3600$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x + 15)^2}{900} + \\dfrac{(y - 10)^2}{144} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3600$, with $\\dfrac{4}{3600} = \\dfrac{1}{900}$ and $\\dfrac{25}{3600} = \\dfrac{1}{144}$."
                },
                {
                  "step": "The centre is $(-15, 10)$, $a = 30$ and $b = 12$, and the major axis is horizontal.",
                  "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
                },
                {
                  "step": "The ends of the major axis are $(-45, 10)$ and $(15, 10)$, and the ends of the minor axis are $(-15, -2)$ and $(-15, 22)$.",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
                },
                {
                  "step": "$\\dfrac{(x + 15)^2}{900} + \\dfrac{(0 - 10)^2}{144} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 15)^2}{900} = \\dfrac{11}{36}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{100}{144}$ is taken from both sides."
                },
                {
                  "step": "$(x + 15)^2 = 275$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $900$."
                },
                {
                  "step": "Either $x + 15 = \\sqrt{275}$ or $x + 15 = -\\sqrt{275}$, so $x = -15 + \\sqrt{275}$ or $x = -15 - \\sqrt{275}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $x = -15 + 5\\sqrt{11}$ or $x = -15 - 5\\sqrt{11}$.",
                  "reason": "Simplest radical form: $\\sqrt{275} = 5\\sqrt{11}$."
                },
                {
                  "step": "$\\dfrac{(0 + 15)^2}{900} + \\dfrac{(y - 10)^2}{144} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y - 10)^2}{144} = \\dfrac{3}{4}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{225}{900}$ is taken from both sides."
                },
                {
                  "step": "$(y - 10)^2 = 108$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $144$."
                },
                {
                  "step": "Either $y - 10 = \\sqrt{108}$ or $y - 10 = -\\sqrt{108}$, so $y = 10 + \\sqrt{108}$ or $y = 10 - \\sqrt{108}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $y = 10 + 6\\sqrt{3}$ or $y = 10 - 6\\sqrt{3}$.",
                  "reason": "Simplest radical form: $\\sqrt{108} = 6\\sqrt{3}$."
                },
                {
                  "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                  "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                  "figure": {
                    "file": "ellipses-4.svg",
                    "alt": "An ellipse with centre (−15, 10) crossing the x-axis at −15 − 5√11 and −15 + 5√11 and the y-axis at 10 − 6√3 and 10 + 6√3."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $9x^2 + 4y^2 - 108x + 48y = 2448$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(6 - 2\\sqrt{77}, 0)$",
                  "$(6 + 2\\sqrt{77}, 0)$",
                  "$(0, -6 - 18\\sqrt{2})$",
                  "$(0, -6 + 18\\sqrt{2})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $9x^2 + 4y^2 - 108x + 48y = 2448$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9(x^2 - 12x) + 4(y^2 + 12y) = 2448$",
                  "reason": "Taking out a common factor: $9$ is taken out of the two terms in $x$ and $4$ out of the two terms in $y$."
                },
                {
                  "step": "$9(x^2 - 12x + 36) + 4(y^2 + 12y + 36) = 2448 + 324 + 144$",
                  "reason": "Completing the square: $36$ and $36$ are added inside the brackets, which adds $9 \\cdot 36 = 324$ and $4 \\cdot 36 = 144$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$9(x - 6)^2 + 4(y + 6)^2 = 2916$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 6)^2}{324} + \\dfrac{(y + 6)^2}{729} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2916$, with $\\dfrac{9}{2916} = \\dfrac{1}{324}$ and $\\dfrac{4}{2916} = \\dfrac{1}{729}$."
                },
                {
                  "step": "The centre is $(6, -6)$, $a = 27$ and $b = 18$, and the major axis is vertical.",
                  "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "The ends of the major axis are $(6, -33)$ and $(6, 21)$, and the ends of the minor axis are $(-12, -6)$ and $(24, -6)$.",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
                },
                {
                  "step": "$\\dfrac{(x - 6)^2}{324} + \\dfrac{(0 + 6)^2}{729} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x - 6)^2}{324} = \\dfrac{77}{81}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{36}{729}$ is taken from both sides."
                },
                {
                  "step": "$(x - 6)^2 = 308$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $324$."
                },
                {
                  "step": "Either $x - 6 = \\sqrt{308}$ or $x - 6 = -\\sqrt{308}$, so $x = 6 + \\sqrt{308}$ or $x = 6 - \\sqrt{308}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $x = 6 + 2\\sqrt{77}$ or $x = 6 - 2\\sqrt{77}$.",
                  "reason": "Simplest radical form: $\\sqrt{308} = 2\\sqrt{77}$."
                },
                {
                  "step": "$\\dfrac{(0 - 6)^2}{324} + \\dfrac{(y + 6)^2}{729} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y + 6)^2}{729} = \\dfrac{8}{9}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{36}{324}$ is taken from both sides."
                },
                {
                  "step": "$(y + 6)^2 = 648$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $729$."
                },
                {
                  "step": "Either $y + 6 = \\sqrt{648}$ or $y + 6 = -\\sqrt{648}$, so $y = -6 + \\sqrt{648}$ or $y = -6 - \\sqrt{648}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $y = -6 + 18\\sqrt{2}$ or $y = -6 - 18\\sqrt{2}$.",
                  "reason": "Simplest radical form: $\\sqrt{648} = 18\\sqrt{2}$."
                },
                {
                  "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                  "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                  "figure": {
                    "file": "ellipses-5.svg",
                    "alt": "An ellipse with centre (6, −6) crossing the x-axis at 6 − 2√77 and 6 + 2√77 and the y-axis at −6 − 18√2 and −6 + 18√2."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t190-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $\\dfrac{(x + 4)^2}{144} + \\dfrac{(y - 2)^2}{36} = 1$.",
            "lines": [
              {
                "step": "Sketch the graph of $\\dfrac{(x + 4)^2}{144} + \\dfrac{(y - 2)^2}{36} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $(-4, 2)$, $a = 12$ and $b = 6$, and the major axis is horizontal.",
                "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
              },
              {
                "step": "The ends of the major axis are $(-16, 2)$ and $(8, 2)$, and the ends of the minor axis are $(-4, -4)$ and $(-4, 8)$.",
                "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
              },
              {
                "step": "$\\dfrac{(x + 4)^2}{144} + \\dfrac{(0 - 2)^2}{36} = 1$",
                "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$\\dfrac{(x + 4)^2}{144} = \\dfrac{8}{9}$",
                "reason": "Adding the same number to both sides: $\\dfrac{4}{36}$ is taken from both sides."
              },
              {
                "step": "$(x + 4)^2 = 128$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $144$."
              },
              {
                "step": "Either $x + 4 = \\sqrt{128}$ or $x + 4 = -\\sqrt{128}$, so $x = -4 + \\sqrt{128}$ or $x = -4 - \\sqrt{128}$",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
              },
              {
                "step": "So $x = -4 + 8\\sqrt{2}$ or $x = -4 - 8\\sqrt{2}$.",
                "reason": "Simplest radical form: $\\sqrt{128} = 8\\sqrt{2}$."
              },
              {
                "step": "$\\dfrac{(0 + 4)^2}{144} + \\dfrac{(y - 2)^2}{36} = 1$",
                "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$\\dfrac{(y - 2)^2}{36} = \\dfrac{8}{9}$",
                "reason": "Adding the same number to both sides: $\\dfrac{16}{144}$ is taken from both sides."
              },
              {
                "step": "$(y - 2)^2 = 32$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $36$."
              },
              {
                "step": "Either $y - 2 = \\sqrt{32}$ or $y - 2 = -\\sqrt{32}$, so $y = 2 + \\sqrt{32}$ or $y = 2 - \\sqrt{32}$",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
              },
              {
                "step": "So $y = 2 + 4\\sqrt{2}$ or $y = 2 - 4\\sqrt{2}$.",
                "reason": "Simplest radical form: $\\sqrt{32} = 4\\sqrt{2}$."
              },
              {
                "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                "figure": {
                  "file": "ellipses-20.svg",
                  "alt": "An ellipse with centre (−4, 2) crossing the x-axis at −4 − 8√2 and −4 + 8√2 and the y-axis at 2 − 4√2 and 2 + 4√2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $\\dfrac{(x - 5)^2}{64} + \\dfrac{(y - 2)^2}{256} = 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(5 - 3\\sqrt{7}, 0)$",
                  "$(5 + 3\\sqrt{7}, 0)$",
                  "$(0, 2 - 2\\sqrt{39})$",
                  "$(0, 2 + 2\\sqrt{39})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $\\dfrac{(x - 5)^2}{64} + \\dfrac{(y - 2)^2}{256} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(5, 2)$, $a = 16$ and $b = 8$, and the major axis is vertical.",
                  "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "The ends of the major axis are $(5, -14)$ and $(5, 18)$, and the ends of the minor axis are $(-3, 2)$ and $(13, 2)$.",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
                },
                {
                  "step": "$\\dfrac{(x - 5)^2}{64} + \\dfrac{(0 - 2)^2}{256} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x - 5)^2}{64} = \\dfrac{63}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{4}{256}$ is taken from both sides."
                },
                {
                  "step": "$(x - 5)^2 = 63$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $64$."
                },
                {
                  "step": "Either $x - 5 = \\sqrt{63}$ or $x - 5 = -\\sqrt{63}$, so $x = 5 + \\sqrt{63}$ or $x = 5 - \\sqrt{63}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $x = 5 + 3\\sqrt{7}$ or $x = 5 - 3\\sqrt{7}$.",
                  "reason": "Simplest radical form: $\\sqrt{63} = 3\\sqrt{7}$."
                },
                {
                  "step": "$\\dfrac{(0 - 5)^2}{64} + \\dfrac{(y - 2)^2}{256} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y - 2)^2}{256} = \\dfrac{39}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{25}{64}$ is taken from both sides."
                },
                {
                  "step": "$(y - 2)^2 = 156$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $256$."
                },
                {
                  "step": "Either $y - 2 = \\sqrt{156}$ or $y - 2 = -\\sqrt{156}$, so $y = 2 + \\sqrt{156}$ or $y = 2 - \\sqrt{156}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $y = 2 + 2\\sqrt{39}$ or $y = 2 - 2\\sqrt{39}$.",
                  "reason": "Simplest radical form: $\\sqrt{156} = 2\\sqrt{39}$."
                },
                {
                  "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                  "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                  "figure": {
                    "file": "ellipses-21.svg",
                    "alt": "An ellipse with centre (5, 2) crossing the x-axis at 5 − 3√7 and 5 + 3√7 and the y-axis at 2 − 2√39 and 2 + 2√39."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $\\dfrac{(x + 6)^2}{196} + \\dfrac{(y - 2)^2}{49} = 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-6 - 6\\sqrt{5}, 0)$",
                  "$(-6 + 6\\sqrt{5}, 0)$",
                  "$(0, 2 - 2\\sqrt{10})$",
                  "$(0, 2 + 2\\sqrt{10})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $\\dfrac{(x + 6)^2}{196} + \\dfrac{(y - 2)^2}{49} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-6, 2)$, $a = 14$ and $b = 7$, and the major axis is horizontal.",
                  "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $x$, so the major axis is horizontal."
                },
                {
                  "step": "The ends of the major axis are $(-20, 2)$ and $(8, 2)$, and the ends of the minor axis are $(-6, -5)$ and $(-6, 9)$.",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
                },
                {
                  "step": "$\\dfrac{(x + 6)^2}{196} + \\dfrac{(0 - 2)^2}{49} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 6)^2}{196} = \\dfrac{45}{49}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{4}{49}$ is taken from both sides."
                },
                {
                  "step": "$(x + 6)^2 = 180$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $196$."
                },
                {
                  "step": "Either $x + 6 = \\sqrt{180}$ or $x + 6 = -\\sqrt{180}$, so $x = -6 + \\sqrt{180}$ or $x = -6 - \\sqrt{180}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $x = -6 + 6\\sqrt{5}$ or $x = -6 - 6\\sqrt{5}$.",
                  "reason": "Simplest radical form: $\\sqrt{180} = 6\\sqrt{5}$."
                },
                {
                  "step": "$\\dfrac{(0 + 6)^2}{196} + \\dfrac{(y - 2)^2}{49} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y - 2)^2}{49} = \\dfrac{40}{49}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{36}{196}$ is taken from both sides."
                },
                {
                  "step": "$(y - 2)^2 = 40$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $49$."
                },
                {
                  "step": "Either $y - 2 = \\sqrt{40}$ or $y - 2 = -\\sqrt{40}$, so $y = 2 + \\sqrt{40}$ or $y = 2 - \\sqrt{40}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $y = 2 + 2\\sqrt{10}$ or $y = 2 - 2\\sqrt{10}$.",
                  "reason": "Simplest radical form: $\\sqrt{40} = 2\\sqrt{10}$."
                },
                {
                  "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                  "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                  "figure": {
                    "file": "ellipses-22.svg",
                    "alt": "An ellipse with centre (−6, 2) crossing the x-axis at −6 − 6√5 and −6 + 6√5 and the y-axis at 2 − 2√10 and 2 + 2√10."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $\\dfrac{(x + 2)^2}{16} + \\dfrac{(y + 6)^2}{144} = 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-2 - 2\\sqrt{3}, 0)$",
                  "$(-2 + 2\\sqrt{3}, 0)$",
                  "$(0, -6 - 6\\sqrt{3})$",
                  "$(0, -6 + 6\\sqrt{3})$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $\\dfrac{(x + 2)^2}{16} + \\dfrac{(y + 6)^2}{144} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-2, -6)$, $a = 12$ and $b = 4$, and the major axis is vertical.",
                  "reason": "Standard form of an ellipse: the centre is $(h, k)$, the larger denominator is $a^2$ and the smaller is $b^2$; the larger sits under the bracket in $y$, so the major axis is vertical."
                },
                {
                  "step": "The ends of the major axis are $(-2, -18)$ and $(-2, 6)$, and the ends of the minor axis are $(-6, -6)$ and $(2, -6)$.",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$, each with its midpoint at the centre."
                },
                {
                  "step": "$\\dfrac{(x + 2)^2}{16} + \\dfrac{(0 + 6)^2}{144} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 2)^2}{16} = \\dfrac{3}{4}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{36}{144}$ is taken from both sides."
                },
                {
                  "step": "$(x + 2)^2 = 12$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $16$."
                },
                {
                  "step": "Either $x + 2 = \\sqrt{12}$ or $x + 2 = -\\sqrt{12}$, so $x = -2 + \\sqrt{12}$ or $x = -2 - \\sqrt{12}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $x = -2 + 2\\sqrt{3}$ or $x = -2 - 2\\sqrt{3}$.",
                  "reason": "Simplest radical form: $\\sqrt{12} = 2\\sqrt{3}$."
                },
                {
                  "step": "$\\dfrac{(0 + 2)^2}{16} + \\dfrac{(y + 6)^2}{144} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y + 6)^2}{144} = \\dfrac{3}{4}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{4}{16}$ is taken from both sides."
                },
                {
                  "step": "$(y + 6)^2 = 108$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $144$."
                },
                {
                  "step": "Either $y + 6 = \\sqrt{108}$ or $y + 6 = -\\sqrt{108}$, so $y = -6 + \\sqrt{108}$ or $y = -6 - \\sqrt{108}$",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$."
                },
                {
                  "step": "So $y = -6 + 6\\sqrt{3}$ or $y = -6 - 6\\sqrt{3}$.",
                  "reason": "Simplest radical form: $\\sqrt{108} = 6\\sqrt{3}$."
                },
                {
                  "step": "The ellipse with that centre, through the four ends of its axes and these four crossings, is the graph.",
                  "reason": "Standard form of an ellipse: the graph is the ellipse with that centre and those axes.",
                  "figure": {
                    "file": "ellipses-23.svg",
                    "alt": "An ellipse with centre (−2, −6) crossing the x-axis at −2 − 2√3 and −2 + 2√3 and the y-axis at −6 − 6√3 and −6 + 6√3."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the ellipse in the figure, with centre $C(3, -7)$, the end $A(-5, -7)$ of its major axis and the end $B(3, -10)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
            "figure": {
              "file": "ellipses-31.svg",
              "alt": "An ellipse with centre C at (3, −7), the end A at (−5, −7) of its major axis and the end B at (3, −10) of its minor axis."
            },
            "lines": [
              {
                "step": "Write the equation of the ellipse in the figure, with centre $C(3, -7)$, the end $A(-5, -7)$ of its major axis and the end $B(3, -10)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $(3, -7)$, so $h = 3$ and $k = -7$.",
                "reason": "Standard form of an ellipse: $h$ and $k$ are the coordinates of the centre."
              },
              {
                "step": "$a = 3 - (-5) = 8$",
                "reason": "Major axis: half its length is the distance from the centre to an end, here along a horizontal line."
              },
              {
                "step": "$b = -7 - (-10) = 3$",
                "reason": "Minor axis: half its length is the distance from the centre to an end."
              },
              {
                "step": "$\\dfrac{(x - 3)^2}{64} + \\dfrac{(y + 7)^2}{9} = 1$",
                "reason": "Writing a sentence as an equation: the centre, $a^2 = 64$ and $b^2 = 9$ fill the standard form of an ellipse, with $a^2$ under the bracket in $x$ since the major axis is horizontal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the ellipse in the figure, with centre $C(-2, 6)$, the end $A(-2, 12)$ of its major axis and the end $B(3, 6)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+2)^2/25+(y-6)^2/36 = 1",
              "lines": [
                {
                  "step": "Write the equation of the ellipse in the figure, with centre $C(-2, 6)$, the end $A(-2, 12)$ of its major axis and the end $B(3, 6)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-2, 6)$, so $h = -2$ and $k = 6$.",
                  "reason": "Standard form of an ellipse: $h$ and $k$ are the coordinates of the centre."
                },
                {
                  "step": "$a = 12 - 6 = 6$",
                  "reason": "Major axis: half its length is the distance from the centre to an end, here along a vertical line."
                },
                {
                  "step": "$b = 3 - (-2) = 5$",
                  "reason": "Minor axis: half its length is the distance from the centre to an end."
                },
                {
                  "step": "$\\dfrac{(x + 2)^2}{25} + \\dfrac{(y - 6)^2}{36} = 1$",
                  "reason": "Writing a sentence as an equation: the centre, $a^2 = 36$ and $b^2 = 25$ fill the standard form of an ellipse, with $a^2$ under the bracket in $y$ since the major axis is vertical."
                }
              ],
              "figure": {
                "file": "ellipses-32.svg",
                "alt": "An ellipse with centre C at (−2, 6), the end A at (−2, 12) of its major axis and the end B at (3, 6) of its minor axis."
              }
            },
            {
              "prompt": "Write the equation of the ellipse in the figure, with centre $C(2, 1)$, the end $A(9, 1)$ of its major axis and the end $B(2, 7)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-2)^2/49+(y-1)^2/36 = 1",
              "lines": [
                {
                  "step": "Write the equation of the ellipse in the figure, with centre $C(2, 1)$, the end $A(9, 1)$ of its major axis and the end $B(2, 7)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(2, 1)$, so $h = 2$ and $k = 1$.",
                  "reason": "Standard form of an ellipse: $h$ and $k$ are the coordinates of the centre."
                },
                {
                  "step": "$a = 9 - 2 = 7$",
                  "reason": "Major axis: half its length is the distance from the centre to an end, here along a horizontal line."
                },
                {
                  "step": "$b = 7 - 1 = 6$",
                  "reason": "Minor axis: half its length is the distance from the centre to an end."
                },
                {
                  "step": "$\\dfrac{(x - 2)^2}{49} + \\dfrac{(y - 1)^2}{36} = 1$",
                  "reason": "Writing a sentence as an equation: the centre, $a^2 = 49$ and $b^2 = 36$ fill the standard form of an ellipse, with $a^2$ under the bracket in $x$ since the major axis is horizontal."
                }
              ],
              "figure": {
                "file": "ellipses-33.svg",
                "alt": "An ellipse with centre C at (2, 1), the end A at (9, 1) of its major axis and the end B at (2, 7) of its minor axis."
              }
            },
            {
              "prompt": "Write the equation of the ellipse in the figure, with centre $C(-7, 6)$, the end $A(-7, -1)$ of its major axis and the end $B(-5, 6)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+7)^2/4+(y-6)^2/49 = 1",
              "lines": [
                {
                  "step": "Write the equation of the ellipse in the figure, with centre $C(-7, 6)$, the end $A(-7, -1)$ of its major axis and the end $B(-5, 6)$ of its minor axis, in the form $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-7, 6)$, so $h = -7$ and $k = 6$.",
                  "reason": "Standard form of an ellipse: $h$ and $k$ are the coordinates of the centre."
                },
                {
                  "step": "$a = 6 - (-1) = 7$",
                  "reason": "Major axis: half its length is the distance from the centre to an end, here along a vertical line."
                },
                {
                  "step": "$b = -5 - (-7) = 2$",
                  "reason": "Minor axis: half its length is the distance from the centre to an end."
                },
                {
                  "step": "$\\dfrac{(x + 7)^2}{4} + \\dfrac{(y - 6)^2}{49} = 1$",
                  "reason": "Writing a sentence as an equation: the centre, $a^2 = 49$ and $b^2 = 4$ fill the standard form of an ellipse, with $a^2$ under the bracket in $y$ since the major axis is vertical."
                }
              ],
              "figure": {
                "file": "ellipses-34.svg",
                "alt": "An ellipse with centre C at (−7, 6), the end A at (−7, −1) of its major axis and the end B at (−5, 6) of its minor axis."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "t190-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(-6, 7)$, a major axis of length $26$ parallel to the $x$-axis, and a minor axis of length $12$.",
            "lines": [
              {
                "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(-6, 7)$, a major axis of length $26$ parallel to the $x$-axis, and a minor axis of length $12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a = \\dfrac{26}{2} = 13$, $b = \\dfrac{12}{2} = 6$",
                "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$."
              },
              {
                "step": "The major axis is parallel to the $x$-axis, so $a^2 = 169$ sits under the bracket in $x$.",
                "reason": "Standard form of an ellipse: $a^2$ sits under the bracket of the coordinate along which the major axis runs."
              },
              {
                "step": "$\\dfrac{(x + 6)^2}{169} + \\dfrac{(y - 7)^2}{36} = 1$",
                "reason": "Standard form of an ellipse: the centre $(h, k)$ fills the two brackets."
              },
              {
                "step": "$h = -6$, $k = 7$, $d = 169$, $e = 36$",
                "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(6, -1)$, a major axis of length $20$ parallel to the $y$-axis, and a minor axis of length $10$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 6, k = -1, d = 25, e = 100",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(6, -1)$, a major axis of length $20$ parallel to the $y$-axis, and a minor axis of length $10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = \\dfrac{20}{2} = 10$, $b = \\dfrac{10}{2} = 5$",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$."
                },
                {
                  "step": "The major axis is parallel to the $y$-axis, so $a^2 = 100$ sits under the bracket in $y$.",
                  "reason": "Standard form of an ellipse: $a^2$ sits under the bracket of the coordinate along which the major axis runs."
                },
                {
                  "step": "$\\dfrac{(x - 6)^2}{25} + \\dfrac{(y + 1)^2}{100} = 1$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ fills the two brackets."
                },
                {
                  "step": "$h = 6$, $k = -1$, $d = 25$, $e = 100$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(1, -5)$, a major axis of length $26$ parallel to the $x$-axis, and a minor axis of length $18$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 1, k = -5, d = 169, e = 81",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(1, -5)$, a major axis of length $26$ parallel to the $x$-axis, and a minor axis of length $18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = \\dfrac{26}{2} = 13$, $b = \\dfrac{18}{2} = 9$",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$."
                },
                {
                  "step": "The major axis is parallel to the $x$-axis, so $a^2 = 169$ sits under the bracket in $x$.",
                  "reason": "Standard form of an ellipse: $a^2$ sits under the bracket of the coordinate along which the major axis runs."
                },
                {
                  "step": "$\\dfrac{(x - 1)^2}{169} + \\dfrac{(y + 5)^2}{81} = 1$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ fills the two brackets."
                },
                {
                  "step": "$h = 1$, $k = -5$, $d = 169$, $e = 81$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(-6, -2)$, a major axis of length $18$ parallel to the $y$-axis, and a minor axis of length $16$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -6, k = -2, d = 64, e = 81",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with centre $(-6, -2)$, a major axis of length $18$ parallel to the $y$-axis, and a minor axis of length $16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = \\dfrac{18}{2} = 9$, $b = \\dfrac{16}{2} = 8$",
                  "reason": "Standard form of an ellipse: the major axis has length $2a$ and the minor axis length $2b$."
                },
                {
                  "step": "The major axis is parallel to the $y$-axis, so $a^2 = 81$ sits under the bracket in $y$.",
                  "reason": "Standard form of an ellipse: $a^2$ sits under the bracket of the coordinate along which the major axis runs."
                },
                {
                  "step": "$\\dfrac{(x + 6)^2}{64} + \\dfrac{(y + 2)^2}{81} = 1$",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ fills the two brackets."
                },
                {
                  "step": "$h = -6$, $k = -2$, $d = 64$, $e = 81$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(-14, 8)$ and $(4, 8)$ that add to $20$.",
            "lines": [
              {
                "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(-14, 8)$ and $(4, 8)$ that add to $20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $\\left(\\dfrac{-14 + 4}{2}, \\dfrac{8 + 8}{2}\\right) = (-5, 8)$.",
                "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
              },
              {
                "step": "$c = 4 - (-5) = 9$",
                "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
              },
              {
                "step": "$a = \\dfrac{20}{2} = 10$",
                "reason": "Sum of focal distances: the distances from each point to the two foci add to the length of the major axis, $2a$."
              },
              {
                "step": "$b^2 = 10^2 - 9^2 = 19$",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
              },
              {
                "step": "The foci lie on a horizontal line, so the major axis is horizontal and $a^2 = 100$ sits under the bracket in $x$.",
                "reason": "Major axis: it is the chord through both foci."
              },
              {
                "step": "$\\dfrac{(x + 5)^2}{100} + \\dfrac{(y - 8)^2}{19} = 1$",
                "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
              },
              {
                "step": "$h = -5$, $k = 8$, $d = 100$, $e = 19$",
                "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(5, -17)$ and $(5, 1)$ that add to $26$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 5, k = -8, d = 88, e = 169",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(5, -17)$ and $(5, 1)$ that add to $26$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{5 + 5}{2}, \\dfrac{-17 + 1}{2}\\right) = (5, -8)$.",
                  "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
                },
                {
                  "step": "$c = 1 - (-8) = 9$",
                  "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
                },
                {
                  "step": "$a = \\dfrac{26}{2} = 13$",
                  "reason": "Sum of focal distances: the distances from each point to the two foci add to the length of the major axis, $2a$."
                },
                {
                  "step": "$b^2 = 13^2 - 9^2 = 88$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
                },
                {
                  "step": "The foci lie on a vertical line, so the major axis is vertical and $a^2 = 169$ sits under the bracket in $y$.",
                  "reason": "Major axis: it is the chord through both foci."
                },
                {
                  "step": "$\\dfrac{(x - 5)^2}{88} + \\dfrac{(y + 8)^2}{169} = 1$",
                  "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
                },
                {
                  "step": "$h = 5$, $k = -8$, $d = 88$, $e = 169$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(-1, 4)$ and $(7, 4)$ that add to $12$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 3, k = 4, d = 36, e = 20",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(-1, 4)$ and $(7, 4)$ that add to $12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-1 + 7}{2}, \\dfrac{4 + 4}{2}\\right) = (3, 4)$.",
                  "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
                },
                {
                  "step": "$c = 7 - 3 = 4$",
                  "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
                },
                {
                  "step": "$a = \\dfrac{12}{2} = 6$",
                  "reason": "Sum of focal distances: the distances from each point to the two foci add to the length of the major axis, $2a$."
                },
                {
                  "step": "$b^2 = 6^2 - 4^2 = 20$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
                },
                {
                  "step": "The foci lie on a horizontal line, so the major axis is horizontal and $a^2 = 36$ sits under the bracket in $x$.",
                  "reason": "Major axis: it is the chord through both foci."
                },
                {
                  "step": "$\\dfrac{(x - 3)^2}{36} + \\dfrac{(y - 4)^2}{20} = 1$",
                  "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
                },
                {
                  "step": "$h = 3$, $k = 4$, $d = 36$, $e = 20$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(-8, -16)$ and $(-8, 4)$ that add to $24$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -8, k = -6, d = 44, e = 144",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse whose points have distances from $(-8, -16)$ and $(-8, 4)$ that add to $24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-8 + (-8)}{2}, \\dfrac{-16 + 4}{2}\\right) = (-8, -6)$.",
                  "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
                },
                {
                  "step": "$c = 4 - (-6) = 10$",
                  "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
                },
                {
                  "step": "$a = \\dfrac{24}{2} = 12$",
                  "reason": "Sum of focal distances: the distances from each point to the two foci add to the length of the major axis, $2a$."
                },
                {
                  "step": "$b^2 = 12^2 - 10^2 = 44$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
                },
                {
                  "step": "The foci lie on a vertical line, so the major axis is vertical and $a^2 = 144$ sits under the bracket in $y$.",
                  "reason": "Major axis: it is the chord through both foci."
                },
                {
                  "step": "$\\dfrac{(x + 8)^2}{44} + \\dfrac{(y + 6)^2}{144} = 1$",
                  "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
                },
                {
                  "step": "$h = -8$, $k = -6$, $d = 44$, $e = 144$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(-14, -1)$ and $(6, -1)$ that passes through $(-4, 23)$.",
            "lines": [
              {
                "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(-14, -1)$ and $(6, -1)$ that passes through $(-4, 23)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $\\left(\\dfrac{-14 + 6}{2}, \\dfrac{-1 + (-1)}{2}\\right) = (-4, -1)$.",
                "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
              },
              {
                "step": "$c = 6 - (-4) = 10$",
                "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
              },
              {
                "step": "$\\sqrt{(-4 - (-14))^2 + (23 - (-1))^2} = \\sqrt{676} = 26$",
                "reason": "Distance formula: the distance from $(-4, 23)$ to the focus $(-14, -1)$."
              },
              {
                "step": "$\\sqrt{(-4 - 6)^2 + (23 - (-1))^2} = \\sqrt{676} = 26$",
                "reason": "Distance formula: the distance from $(-4, 23)$ to the focus $(6, -1)$."
              },
              {
                "step": "$a = \\dfrac{26 + 26}{2} = 26$",
                "reason": "Sum of focal distances: the two distances add to the length of the major axis, $2a$."
              },
              {
                "step": "$b^2 = 26^2 - 10^2 = 576$",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
              },
              {
                "step": "The foci lie on a horizontal line, so the major axis is horizontal and $a^2 = 676$ sits under the bracket in $x$.",
                "reason": "Major axis: it is the chord through both foci."
              },
              {
                "step": "$\\dfrac{(x + 4)^2}{676} + \\dfrac{(y + 1)^2}{576} = 1$",
                "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
              },
              {
                "step": "$h = -4$, $k = -1$, $d = 676$, $e = 576$",
                "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(-8, -24)$ and $(-8, 16)$ that passes through $(-29, -4)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -8, k = -4, d = 441, e = 841",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(-8, -24)$ and $(-8, 16)$ that passes through $(-29, -4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-8 + (-8)}{2}, \\dfrac{-24 + 16}{2}\\right) = (-8, -4)$.",
                  "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
                },
                {
                  "step": "$c = 16 - (-4) = 20$",
                  "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
                },
                {
                  "step": "$\\sqrt{(-29 - (-8))^2 + (-4 - (-24))^2} = \\sqrt{841} = 29$",
                  "reason": "Distance formula: the distance from $(-29, -4)$ to the focus $(-8, -24)$."
                },
                {
                  "step": "$\\sqrt{(-29 - (-8))^2 + (-4 - 16)^2} = \\sqrt{841} = 29$",
                  "reason": "Distance formula: the distance from $(-29, -4)$ to the focus $(-8, 16)$."
                },
                {
                  "step": "$a = \\dfrac{29 + 29}{2} = 29$",
                  "reason": "Sum of focal distances: the two distances add to the length of the major axis, $2a$."
                },
                {
                  "step": "$b^2 = 29^2 - 20^2 = 441$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
                },
                {
                  "step": "The foci lie on a vertical line, so the major axis is vertical and $a^2 = 841$ sits under the bracket in $y$.",
                  "reason": "Major axis: it is the chord through both foci."
                },
                {
                  "step": "$\\dfrac{(x + 8)^2}{441} + \\dfrac{(y + 4)^2}{841} = 1$",
                  "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
                },
                {
                  "step": "$h = -8$, $k = -4$, $d = 441$, $e = 841$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(2, 8)$ and $(8, 8)$ that passes through $(-13, 28)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 5, k = 8, d = 729, e = 720",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(2, 8)$ and $(8, 8)$ that passes through $(-13, 28)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{2 + 8}{2}, \\dfrac{8 + 8}{2}\\right) = (5, 8)$.",
                  "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
                },
                {
                  "step": "$c = 8 - 5 = 3$",
                  "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
                },
                {
                  "step": "$\\sqrt{(-13 - 2)^2 + (28 - 8)^2} = \\sqrt{625} = 25$",
                  "reason": "Distance formula: the distance from $(-13, 28)$ to the focus $(2, 8)$."
                },
                {
                  "step": "$\\sqrt{(-13 - 8)^2 + (28 - 8)^2} = \\sqrt{841} = 29$",
                  "reason": "Distance formula: the distance from $(-13, 28)$ to the focus $(8, 8)$."
                },
                {
                  "step": "$a = \\dfrac{25 + 29}{2} = 27$",
                  "reason": "Sum of focal distances: the two distances add to the length of the major axis, $2a$."
                },
                {
                  "step": "$b^2 = 27^2 - 3^2 = 720$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
                },
                {
                  "step": "The foci lie on a horizontal line, so the major axis is horizontal and $a^2 = 729$ sits under the bracket in $x$.",
                  "reason": "Major axis: it is the chord through both foci."
                },
                {
                  "step": "$\\dfrac{(x - 5)^2}{729} + \\dfrac{(y - 8)^2}{720} = 1$",
                  "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
                },
                {
                  "step": "$h = 5$, $k = 8$, $d = 729$, $e = 720$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(-2, -15)$ and $(-2, 13)$ that passes through $(-26, -5)$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -2, k = -1, d = 588, e = 784",
              "lines": [
                {
                  "step": "Find $h$, $k$, $d$ and $e$ for which the graph of $\\dfrac{(x - h)^2}{d} + \\dfrac{(y - k)^2}{e} = 1$ is the ellipse with foci $(-2, -15)$ and $(-2, 13)$ that passes through $(-26, -5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-2 + (-2)}{2}, \\dfrac{-15 + 13}{2}\\right) = (-2, -1)$.",
                  "reason": "Foci of an ellipse: the centre is the midpoint of the two foci, found by the midpoint formula."
                },
                {
                  "step": "$c = 13 - (-1) = 14$",
                  "reason": "Foci of an ellipse: $c$ is the distance from the centre to each focus, here along a line parallel to an axis."
                },
                {
                  "step": "$\\sqrt{(-26 - (-2))^2 + (-5 - (-15))^2} = \\sqrt{676} = 26$",
                  "reason": "Distance formula: the distance from $(-26, -5)$ to the focus $(-2, -15)$."
                },
                {
                  "step": "$\\sqrt{(-26 - (-2))^2 + (-5 - 13)^2} = \\sqrt{900} = 30$",
                  "reason": "Distance formula: the distance from $(-26, -5)$ to the focus $(-2, 13)$."
                },
                {
                  "step": "$a = \\dfrac{26 + 30}{2} = 28$",
                  "reason": "Sum of focal distances: the two distances add to the length of the major axis, $2a$."
                },
                {
                  "step": "$b^2 = 28^2 - 14^2 = 588$",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, so $b^2 = a^2 - c^2$."
                },
                {
                  "step": "The foci lie on a vertical line, so the major axis is vertical and $a^2 = 784$ sits under the bracket in $y$.",
                  "reason": "Major axis: it is the chord through both foci."
                },
                {
                  "step": "$\\dfrac{(x + 2)^2}{588} + \\dfrac{(y + 1)^2}{784} = 1$",
                  "reason": "Standard form of an ellipse: the centre fills the brackets, and $b^2$ sits under the other bracket."
                },
                {
                  "step": "$h = -2$, $k = -1$, $d = 588$, $e = 784$",
                  "reason": "Answering the question asked: the numbers of the line before are read in the places of $h$, $k$, $d$ and $e$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t190-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $\\dfrac{(x - 2)^2}{25} + \\dfrac{(y - 9)^2}{4} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
            "given": [
              "$\\dfrac{(x - 2)^2}{25} + \\dfrac{(y - 9)^2}{4} = 1$",
              "$h = 2$, $k = 9$",
              "$a^2 = 25$, $b^2 = 4$",
              "$a = 5$, $b = 2$",
              "$c^2 = 25 + 4 = 29$",
              "$c = \\sqrt{29}$",
              "$h = 2$, $k = 9$, $a = 5$, $b = 2$, $c = \\sqrt{29}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $\\dfrac{(x - 2)^2}{25} + \\dfrac{(y - 9)^2}{4} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 5 adds $b^2 = 4$ to $a^2 = 25$ in place of taking it away, so a sign is lost.",
                "reason": "A sign lost: the minus sign between $a^2$ and $b^2$ has become a plus sign."
              },
              {
                "step": "Line 5 written right is $c^2 = 25 - 4 = 21$.",
                "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $144x^2 + 25y^2 - 1440x - 150y = -225$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$144x^2 + 25y^2 - 1440x - 150y = -225$",
                "$144(x^2 - 10x) + 25(y^2 - 6y) = -225$",
                "$144(x^2 - 10x + 25) + 25(y^2 - 6y + 9) = -225 + 3600 + 225$",
                "$144(x - 5)^2 + 25(y - 3)^2 = 3600$",
                "$\\dfrac{(x - 5)^2}{25} + \\dfrac{(y - 3)^2}{144} = 1$",
                "$h = 5$, $k = 3$",
                "$a^2 = 144$, $b^2 = 25$",
                "$a = 12$, $b = 5$",
                "$c^2 = 144 + 25 = 169$",
                "$c = \\sqrt{169}$",
                "$h = 5$, $k = 3$, $a = 12$, $b = 5$, $c = 13$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 9: c^2 = 144-25 = 119",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $144x^2 + 25y^2 - 1440x - 150y = -225$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 9 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 9 adds $b^2 = 25$ to $a^2 = 144$ in place of taking it away, so a sign is lost.",
                  "reason": "A sign lost: the minus sign between $a^2$ and $b^2$ has become a plus sign."
                },
                {
                  "step": "Line 9 written right is $c^2 = 144 - 25 = 119$.",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $4x^2 + 25y^2 - 56x + 350y + 521 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$4x^2 + 25y^2 - 56x + 350y + 521 = 0$",
                "$4x^2 + 25y^2 - 56x + 350y = -521$",
                "$4(x^2 - 14x) + 25(y^2 + 14y) = -521$",
                "$4(x^2 - 14x + 49) + 25(y^2 + 14y + 49) = -521 + 196 + 1225$",
                "$4(x - 7)^2 + 25(y + 7)^2 = 900$",
                "$\\dfrac{(x - 7)^2}{225} + \\dfrac{(y + 7)^2}{36} = 1$",
                "$h = 7$, $k = -7$",
                "$a^2 = 225$, $b^2 = 36$",
                "$a = 15$, $b = 6$",
                "$c^2 = 225 + 36 = 261$",
                "$c = \\sqrt{261}$",
                "$h = 7$, $k = -7$, $a = 15$, $b = 6$, $c = 3\\sqrt{29}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 10: c^2 = 225-36 = 189",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $4x^2 + 25y^2 - 56x + 350y + 521 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 10 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 10 adds $b^2 = 36$ to $a^2 = 225$ in place of taking it away, so a sign is lost.",
                  "reason": "A sign lost: the minus sign between $a^2$ and $b^2$ has become a plus sign."
                },
                {
                  "step": "Line 10 written right is $c^2 = 225 - 36 = 189$.",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $\\dfrac{(x - 8)^2}{49} + \\dfrac{(y - 3)^2}{64} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$\\dfrac{(x - 8)^2}{49} + \\dfrac{(y - 3)^2}{64} = 1$",
                "$h = 8$, $k = 3$",
                "$a^2 = 64$, $b^2 = 49$",
                "$a = 8$, $b = 7$",
                "$c^2 = 64 + 49 = 113$",
                "$c = \\sqrt{113}$",
                "$h = 8$, $k = 3$, $a = 8$, $b = 7$, $c = \\sqrt{113}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: c^2 = 64-49 = 15",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $\\dfrac{(x - 8)^2}{49} + \\dfrac{(y - 3)^2}{64} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 adds $b^2 = 49$ to $a^2 = 64$ in place of taking it away, so a sign is lost.",
                  "reason": "A sign lost: the minus sign between $a^2$ and $b^2$ has become a plus sign."
                },
                {
                  "step": "Line 5 written right is $c^2 = 64 - 49 = 15$.",
                  "reason": "Focal relation of an ellipse: $c^2 = a^2 - b^2$, where $c$ is the distance from the centre to each focus."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $4x^2 + 9y^2 + 72x + 18y = 963$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
            "given": [
              "$4x^2 + 9y^2 + 72x + 18y = 963$",
              "$4(x^2 + 18x) + 9(y^2 + 2y) = 963$",
              "$4(x^2 + 18x + 81) + 9(y^2 + 2y + 1) = 963 + 324 + 9$",
              "$4(x + 9)^2 + 9(y + 1)^2 = 1296$",
              "$\\dfrac{(x + 9)^2}{324} + \\dfrac{(y + 1)^2}{144} = 1$",
              "$h = 9$, $k = -1$",
              "$a^2 = 324$, $b^2 = 144$",
              "$a = 18$, $b = 12$",
              "$c^2 = 324 - 144 = 180$",
              "$c = \\sqrt{180}$",
              "$h = 9$, $k = -1$, $a = 18$, $b = 12$, $c = 6\\sqrt{5}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $4x^2 + 9y^2 + 72x + 18y = 963$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 6 reads $h$ from $(x + 9)^2$ as $9$, so a sign is lost.",
                "reason": "A sign lost: $(x + 9)$ is $(x - h)$ with $h = -9$, so the number in the place of $h$ is $-9$."
              },
              {
                "step": "Line 6 written right is $h = -9$, $k = -1$.",
                "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $256x^2 + 9y^2 + 2048x - 72y + 1936 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$256x^2 + 9y^2 + 2048x - 72y + 1936 = 0$",
                "$256x^2 + 9y^2 + 2048x - 72y = -1936$",
                "$256(x^2 + 8x) + 9(y^2 - 8y) = -1936$",
                "$256(x^2 + 8x + 16) + 9(y^2 - 8y + 16) = -1936 + 4096 + 144$",
                "$256(x + 4)^2 + 9(y - 4)^2 = 2304$",
                "$\\dfrac{(x + 4)^2}{9} + \\dfrac{(y - 4)^2}{256} = 1$",
                "$h = -4$, $k = -4$",
                "$a^2 = 256$, $b^2 = 9$",
                "$a = 16$, $b = 3$",
                "$c^2 = 256 - 9 = 247$",
                "$c = \\sqrt{247}$",
                "$h = -4$, $k = -4$, $a = 16$, $b = 3$, $c = \\sqrt{247}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: h = -4, k = 4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $256x^2 + 9y^2 + 2048x - 72y + 1936 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 7 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 7 reads $k$ from $(y - 4)^2$ as $-4$, so a sign is lost.",
                  "reason": "A sign lost: $(y - 4)$ is $(y - k)$ with $k = 4$, so the number in the place of $k$ is $4$."
                },
                {
                  "step": "Line 7 written right is $h = -4$, $k = 4$.",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $\\dfrac{(x + 6)^2}{81} + \\dfrac{(y - 7)^2}{16} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$\\dfrac{(x + 6)^2}{81} + \\dfrac{(y - 7)^2}{16} = 1$",
                "$h = 6$, $k = 7$",
                "$a^2 = 81$, $b^2 = 16$",
                "$a = 9$, $b = 4$",
                "$c^2 = 81 - 16 = 65$",
                "$c = \\sqrt{65}$",
                "$h = 6$, $k = 7$, $a = 9$, $b = 4$, $c = \\sqrt{65}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: h = -6, k = 7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $\\dfrac{(x + 6)^2}{81} + \\dfrac{(y - 7)^2}{16} = 1$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 reads $h$ from $(x + 6)^2$ as $6$, so a sign is lost.",
                  "reason": "A sign lost: $(x + 6)$ is $(x - h)$ with $h = -6$, so the number in the place of $h$ is $-6$."
                },
                {
                  "step": "Line 2 written right is $h = -6$, $k = 7$.",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $400x^2 + 9y^2 + 2400x + 54y = -81$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$400x^2 + 9y^2 + 2400x + 54y = -81$",
                "$400(x^2 + 6x) + 9(y^2 + 6y) = -81$",
                "$400(x^2 + 6x + 9) + 9(y^2 + 6y + 9) = -81 + 3600 + 81$",
                "$400(x + 3)^2 + 9(y + 3)^2 = 3600$",
                "$\\dfrac{(x + 3)^2}{9} + \\dfrac{(y + 3)^2}{400} = 1$",
                "$h = -3$, $k = 3$",
                "$a^2 = 400$, $b^2 = 9$",
                "$a = 20$, $b = 3$",
                "$c^2 = 400 - 9 = 391$",
                "$c = \\sqrt{391}$",
                "$h = -3$, $k = 3$, $a = 20$, $b = 3$, $c = \\sqrt{391}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: h = -3, k = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $400x^2 + 9y^2 + 2400x + 54y = -81$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 6 reads $k$ from $(y + 3)^2$ as $3$, so a sign is lost.",
                  "reason": "A sign lost: $(y + 3)$ is $(y - k)$ with $k = -3$, so the number in the place of $k$ is $-3$."
                },
                {
                  "step": "Line 6 written right is $h = -3$, $k = -3$.",
                  "reason": "Standard form of an ellipse: the centre $(h, k)$ makes both brackets $0$; a bracket with a plus sign reads as a minus, as $x + 5 = x - (-5)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $9x^2 + 361y^2 + 90x + 1444y = 1580$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
            "given": [
              "$9x^2 + 361y^2 + 90x + 1444y = 1580$",
              "$9(x^2 + 10x) + 361(y^2 + 4y) = 1580$",
              "$9(x^2 + 10x) + 361(y^2 + 4y) = 1580 + 225 + 1444 = 3249$",
              "$9(x + 5)^2 + 361(y + 2)^2 = 3249$",
              "$\\dfrac{(x + 5)^2}{361} + \\dfrac{(y + 2)^2}{9} = 1$",
              "$h = -5$, $k = -2$",
              "$a^2 = 361$, $b^2 = 9$",
              "$a = 19$, $b = 3$",
              "$c^2 = 361 - 9 = 352$",
              "$c = \\sqrt{352}$",
              "$h = -5$, $k = -2$, $a = 19$, $b = 3$, $c = 4\\sqrt{22}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $9x^2 + 361y^2 + 90x + 1444y = 1580$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 adds $225$ and $1444$ to the right side only and runs on with a second equals sign.",
                "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
              },
              {
                "step": "Line 3 written right is $9(x^2 + 10x + 25) + 361(y^2 + 4y + 4) = 1580 + 225 + 1444$.",
                "reason": "Completing the square: $25$ and $4$ go inside the brackets, which adds $225$ and $1444$ to the left side, and the same numbers are added to the right side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $81x^2 + 4y^2 + 324x - 24y + 36 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$81x^2 + 4y^2 + 324x - 24y + 36 = 0$",
                "$81x^2 + 4y^2 + 324x - 24y = -36$",
                "$81(x^2 + 4x) + 4(y^2 - 6y) = -36$",
                "$81(x^2 + 4x) + 4(y^2 - 6y) = -36 + 324 + 36 = 324$",
                "$81(x + 2)^2 + 4(y - 3)^2 = 324$",
                "$\\dfrac{(x + 2)^2}{4} + \\dfrac{(y - 3)^2}{81} = 1$",
                "$h = -2$, $k = 3$",
                "$a^2 = 81$, $b^2 = 4$",
                "$a = 9$, $b = 2$",
                "$c^2 = 81 - 4 = 77$",
                "$c = \\sqrt{77}$",
                "$h = -2$, $k = 3$, $a = 9$, $b = 2$, $c = \\sqrt{77}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 81*(x^2+4*x+4)+4*(y^2-6*y+9) = -36+324+36",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $81x^2 + 4y^2 + 324x - 24y + 36 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $324$ and $36$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $81(x^2 + 4x + 4) + 4(y^2 - 6y + 9) = -36 + 324 + 36$.",
                  "reason": "Completing the square: $4$ and $9$ go inside the brackets, which adds $324$ and $36$ to the left side, and the same numbers are added to the right side."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $4x^2 + 361y^2 - 48x - 722y = 939$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$4x^2 + 361y^2 - 48x - 722y = 939$",
                "$4(x^2 - 12x) + 361(y^2 - 2y) = 939$",
                "$4(x^2 - 12x) + 361(y^2 - 2y) = 939 + 144 + 361 = 1444$",
                "$4(x - 6)^2 + 361(y - 1)^2 = 1444$",
                "$\\dfrac{(x - 6)^2}{361} + \\dfrac{(y - 1)^2}{4} = 1$",
                "$h = 6$, $k = 1$",
                "$a^2 = 361$, $b^2 = 4$",
                "$a = 19$, $b = 2$",
                "$c^2 = 361 - 4 = 357$",
                "$c = \\sqrt{357}$",
                "$h = 6$, $k = 1$, $a = 19$, $b = 2$, $c = \\sqrt{357}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*(x^2-12*x+36)+361*(y^2-2*y+1) = 939+144+361",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $4x^2 + 361y^2 - 48x - 722y = 939$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $144$ and $361$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 3 written right is $4(x^2 - 12x + 36) + 361(y^2 - 2y + 1) = 939 + 144 + 361$.",
                  "reason": "Completing the square: $36$ and $1$ go inside the brackets, which adds $144$ and $361$ to the left side, and the same numbers are added to the right side."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $64x^2 + 25y^2 + 896x - 100y + 1636 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
              "given": [
                "$64x^2 + 25y^2 + 896x - 100y + 1636 = 0$",
                "$64x^2 + 25y^2 + 896x - 100y = -1636$",
                "$64(x^2 + 14x) + 25(y^2 - 4y) = -1636$",
                "$64(x^2 + 14x) + 25(y^2 - 4y) = -1636 + 3136 + 100 = 1600$",
                "$64(x + 7)^2 + 25(y - 2)^2 = 1600$",
                "$\\dfrac{(x + 7)^2}{25} + \\dfrac{(y - 2)^2}{64} = 1$",
                "$h = -7$, $k = 2$",
                "$a^2 = 64$, $b^2 = 25$",
                "$a = 8$, $b = 5$",
                "$c^2 = 64 - 25 = 39$",
                "$c = \\sqrt{39}$",
                "$h = -7$, $k = 2$, $a = 8$, $b = 5$, $c = \\sqrt{39}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 64*(x^2+14*x+49)+25*(y^2-4*y+4) = -1636+3136+100",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the centre $(h, k)$ of the ellipse $64x^2 + 25y^2 + 896x - 100y + 1636 = 0$, the half-lengths $a$ of its major axis and $b$ of its minor axis, and the distance $c$ from its centre to each focus, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $3136$ and $100$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $64(x^2 + 14x + 49) + 25(y^2 - 4y + 4) = -1636 + 3136 + 100$.",
                  "reason": "Completing the square: $49$ and $4$ go inside the brackets, which adds $3136$ and $100$ to the left side, and the same numbers are added to the right side."
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
      "id": "t190-p1",
      "method": "direct proof",
      "statement": "Let $a$ and $c$ be numbers with $a > c > 0$, and let $b$ be the positive number with $b^2 = a^2 - c^2$. Every point $(x, y)$ whose distances from $(c, 0)$ and $(-c, 0)$ add to $2a$ lies on the graph of $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$.",
      "idea": "Write the sum of the two distances with the distance formula. Move one root to the right side and square, which leaves a single root; isolate it and square again. The hypothesis $b^2 = a^2 - c^2$ then turns what is left into the standard form.",
      "lines": [
        {
          "line": "$\\sqrt{(x - c)^2 + y^2} + \\sqrt{(x + c)^2 + y^2} = 2a$",
          "reason": "distance formula, once for each focus, in the hypothesis on the sum"
        },
        {
          "line": "$\\sqrt{(x - c)^2 + y^2} = 2a - \\sqrt{(x + c)^2 + y^2}$",
          "reason": "adding the same number to both sides: $\\sqrt{(x + c)^2 + y^2}$ is taken from both sides"
        },
        {
          "line": "$(x - c)^2 + y^2 = \\left(2a - \\sqrt{(x + c)^2 + y^2}\\right)^2$",
          "reason": "raising both sides to a power: both sides are squared, and the square of a square root is the number under it"
        },
        {
          "line": "$(x - c)^2 + y^2 = 4a^2 - 4a\\sqrt{(x + c)^2 + y^2} + (x + c)^2 + y^2$",
          "reason": "square of a binomial on the right"
        },
        {
          "line": "$4a\\sqrt{(x + c)^2 + y^2} = 4a^2 + (x + c)^2 - (x - c)^2$",
          "reason": "adding the same number to both sides: $4a\\sqrt{(x + c)^2 + y^2} - (x - c)^2 - y^2$ is added to both sides"
        },
        {
          "line": "$(x + c)^2 - (x - c)^2 = (x^2 + 2cx + c^2) - (x^2 - 2cx + c^2)$",
          "reason": "square of a binomial, once for each bracket"
        },
        {
          "line": "$(x + c)^2 - (x - c)^2 = 4cx$",
          "reason": "collecting like terms, the subtracted bracket changing every sign in it"
        },
        {
          "line": "$4a\\sqrt{(x + c)^2 + y^2} = 4a^2 + 4cx$",
          "reason": "substituting a value: line 7 in line 5"
        },
        {
          "line": "$a\\sqrt{(x + c)^2 + y^2} = a^2 + cx$",
          "reason": "dividing both sides by a nonzero number: both sides are divided by $4$"
        },
        {
          "line": "$a^2\\left((x + c)^2 + y^2\\right) = (a^2 + cx)^2$",
          "reason": "raising both sides to a power: both sides are squared"
        },
        {
          "line": "$a^2(x + c)^2 + a^2y^2 = (a^2 + cx)^2$",
          "reason": "multiplying out the bracket on the left"
        },
        {
          "line": "$a^2(x^2 + 2cx + c^2) + a^2y^2 = a^4 + 2a^2cx + c^2x^2$",
          "reason": "square of a binomial, once on each side"
        },
        {
          "line": "$a^2x^2 + 2a^2cx + a^2c^2 + a^2y^2 = a^4 + 2a^2cx + c^2x^2$",
          "reason": "multiplying out the bracket on the left"
        },
        {
          "line": "$a^2x^2 - c^2x^2 + a^2y^2 = a^4 - a^2c^2$",
          "reason": "adding the same number to both sides: $2a^2cx + a^2c^2 + c^2x^2$ is taken from both sides"
        },
        {
          "line": "$(a^2 - c^2)x^2 + a^2y^2 = a^2(a^2 - c^2)$",
          "reason": "taking out a common factor: $x^2$ on the left and $a^2$ on the right"
        },
        {
          "line": "$b^2x^2 + a^2y^2 = a^2b^2$",
          "reason": "substituting a value: $a^2 - c^2 = b^2$, the hypothesis"
        },
        {
          "line": "$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$",
          "reason": "dividing both sides by a nonzero number: both sides are divided by $a^2b^2$, which is not $0$"
        }
      ]
    },
    {
      "id": "t190-p2",
      "method": "direct proof",
      "statement": "Let an ellipse have centre $C$, foci $F_1$ and $F_2$, and distances from its points to the foci adding to $2a$; let $c$ be the distance from $C$ to each focus and $2b$ the length of the minor axis. Then $c^2 = a^2 - b^2$.",
      "idea": "An end $B$ of the minor axis is as far from one focus as from the other, so each distance is half of $2a$. The centre, a focus and $B$ make a right triangle with legs $b$ and $c$ and hypotenuse $a$.",
      "figure": {
        "file": "ellipses-1.svg",
        "alt": "An ellipse with centre C, foci F1 and F2 on its horizontal major axis, and B the upper end of its minor axis."
      },
      "lines": [
        {
          "line": "Let $B$ be an end of the minor axis, so $B$ lies on the ellipse and $CB = b$.",
          "reason": "Minor axis: a chord of length $2b$ whose midpoint is the centre"
        },
        {
          "line": "The foci satisfy $CF_1 = CF_2 = c$.",
          "reason": "Foci of an ellipse: the centre is the midpoint of the two foci"
        },
        {
          "line": "The angles $BCF_1$ and $BCF_2$ are right angles.",
          "reason": "Minor axis: it is at right angles to the major axis, which passes through both foci"
        },
        {
          "line": "$BF_1^2 = CB^2 + CF_1^2$",
          "reason": "Pythagorean theorem in the right triangle $BCF_1$"
        },
        {
          "line": "$BF_2^2 = CB^2 + CF_2^2$",
          "reason": "Pythagorean theorem in the right triangle $BCF_2$"
        },
        {
          "line": "$BF_1^2 = BF_2^2$",
          "reason": "lines 2, 4 and 5: the right sides are equal"
        },
        {
          "line": "$BF_1 = BF_2$",
          "reason": "positive square root: a length is positive, and the two squares are equal"
        },
        {
          "line": "$BF_1 + BF_2 = 2a$",
          "reason": "Ellipse: $B$ lies on the ellipse, by line 1"
        },
        {
          "line": "$BF_1 + BF_1 = 2a$",
          "reason": "substituting a value: line 7 in line 8"
        },
        {
          "line": "$2BF_1 = 2a$",
          "reason": "collecting like terms"
        },
        {
          "line": "$BF_1 = a$",
          "reason": "dividing both sides by a nonzero number: both sides are divided by $2$"
        },
        {
          "line": "$a^2 = b^2 + c^2$",
          "reason": "substituting a value: lines 1, 2 and 11 in line 4"
        },
        {
          "line": "$c^2 = a^2 - b^2$",
          "reason": "adding the same number to both sides: $b^2$ is taken from both sides"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t190-s1",
      "method": "proof by cases",
      "statement": "Prove that for numbers $h$, $k$, $a$ and $c$ with $a > c > 0$, the points of the line $x = h$ whose distances from $(h, k - c)$ and $(h, k + c)$ add to $2a$ are exactly $(h, k - a)$ and $(h, k + a)$, so the major axis of the ellipse with these foci and this sum has length $2a$. Facts it may use: distance formula, the root of a square is the absolute value, absolute value, collecting like terms, adding the same number to both sides, dividing both sides by a nonzero number, Ellipse, Major axis, distance on a vertical line.",
      "check": {
        "proof": [
          {
            "line": "The distance from $(h, y)$ to $(h, k - c)$ is $\\sqrt{(y - k + c)^2}$.",
            "reason": "distance formula, the two $x$-coordinates being equal"
          },
          {
            "line": "That distance is $|y - k + c|$.",
            "reason": "the root of a square is the absolute value"
          },
          {
            "line": "The distance from $(h, y)$ to $(h, k + c)$ is $|y - k - c|$.",
            "reason": "lines 1 and 2 with $k + c$ in place of $k - c$"
          },
          {
            "line": "Case 1: $y \\ge k + c$. Then $y - k - c \\ge 0$ and $y - k + c > 0$.",
            "reason": "adding the same number to both sides of the case, with $c > 0$"
          },
          {
            "line": "So the distances are $y - k + c$ and $y - k - c$.",
            "reason": "absolute value: a number that is $0$ or more is its own absolute value"
          },
          {
            "line": "Their sum is $2(y - k)$.",
            "reason": "collecting like terms"
          },
          {
            "line": "The sum is $2a$ exactly when $y - k = a$.",
            "reason": "dividing both sides by a nonzero number: both sides are divided by $2$"
          },
          {
            "line": "That is, when $y = k + a$.",
            "reason": "adding the same number to both sides: $k$ is added"
          },
          {
            "line": "The point $(h, k + a)$ lies in case 1, since $k + a > k + c$.",
            "reason": "the hypothesis $a > c$, with $k$ added to both sides"
          },
          {
            "line": "Case 2: $k - c \\le y < k + c$. Then $y - k + c \\ge 0$ and $y - k - c < 0$.",
            "reason": "adding the same number to both sides of the case"
          },
          {
            "line": "So the distances are $y - k + c$ and $k + c - y$.",
            "reason": "absolute value: a number below $0$ has its opposite as its absolute value"
          },
          {
            "line": "Their sum is $2c$.",
            "reason": "collecting like terms"
          },
          {
            "line": "Since $2c < 2a$, no point of case 2 has sum $2a$.",
            "reason": "the hypothesis $a > c$"
          },
          {
            "line": "Case 3: $y < k - c$. Then $y - k + c < 0$ and $y - k - c < 0$.",
            "reason": "adding the same number to both sides of the case, with $c > 0$"
          },
          {
            "line": "So the distances are $k - c - y$ and $k + c - y$.",
            "reason": "absolute value: a number below $0$ has its opposite as its absolute value"
          },
          {
            "line": "Their sum is $2(k - y)$.",
            "reason": "collecting like terms"
          },
          {
            "line": "The sum is $2a$ exactly when $k - y = a$.",
            "reason": "dividing both sides by a nonzero number: both sides are divided by $2$"
          },
          {
            "line": "That is, when $y = k - a$.",
            "reason": "adding the same number to both sides"
          },
          {
            "line": "The point $(h, k - a)$ lies in case 3, since $k - a < k - c$.",
            "reason": "the hypothesis $a > c$, with $k$ added to both sides"
          },
          {
            "line": "Therefore the points of the line $x = h$ whose distances add to $2a$ are exactly $(h, k - a)$ and $(h, k + a)$.",
            "reason": "proof by cases: the three cases cover every $y$"
          },
          {
            "line": "These two points are the ends of the major axis, and the distance between them is $2a$.",
            "reason": "Major axis: the chord through both foci, which lies on the line $x = h$; distance on a vertical line"
          }
        ]
      }
    },
    {
      "id": "t190-s2",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$ and $b$ with $a > b > 0$ and $c = \\sqrt{a^2 - b^2}$, every point of the graph of $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ has distances from $(c, 0)$ and $(-c, 0)$ that add to $2a$. Facts it may use: graph of an equation, adding the same number to both sides, multiplying both sides by the same number, substituting a value, multiplying out, square of a binomial, adding two equations, collecting like terms, distance formula, the root of a square is the absolute value, Trivial Inequality, absolute value, positive square root, powers and roots of positive numbers keep the order, multiplying by a positive number.",
      "check": {
        "proof": [
          {
            "line": "Let $(x, y)$ be a point of the graph, so $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$.",
            "reason": "graph of an equation"
          },
          {
            "line": "$\\dfrac{y^2}{b^2} = 1 - \\dfrac{x^2}{a^2}$",
            "reason": "adding the same number to both sides"
          },
          {
            "line": "$y^2 = b^2 - \\dfrac{b^2x^2}{a^2}$",
            "reason": "multiplying both sides by the same number: $b^2$"
          },
          {
            "line": "Also $c^2 = a^2 - b^2$.",
            "reason": "positive square root: the square of $\\sqrt{a^2 - b^2}$ is the number under it"
          },
          {
            "line": "So $b^2 = a^2 - c^2$.",
            "reason": "adding the same number to both sides"
          },
          {
            "line": "$y^2 = a^2 - c^2 - \\dfrac{(a^2 - c^2)x^2}{a^2}$",
            "reason": "substituting a value: line 5 in line 3"
          },
          {
            "line": "$y^2 = a^2 - c^2 - x^2 + \\dfrac{c^2x^2}{a^2}$",
            "reason": "multiplying out, the subtracted bracket changing every sign in it"
          },
          {
            "line": "$(x - c)^2 = x^2 - 2cx + c^2$",
            "reason": "square of a binomial"
          },
          {
            "line": "$(x - c)^2 + y^2 = x^2 - 2cx + c^2 + a^2 - c^2 - x^2 + \\dfrac{c^2x^2}{a^2}$",
            "reason": "adding two equations: lines 7 and 8"
          },
          {
            "line": "$(x - c)^2 + y^2 = a^2 - 2cx + \\dfrac{c^2x^2}{a^2}$",
            "reason": "collecting like terms"
          },
          {
            "line": "$(x - c)^2 + y^2 = \\left(a - \\dfrac{cx}{a}\\right)^2$",
            "reason": "square of a binomial, read from right to left"
          },
          {
            "line": "So the distance from $(x, y)$ to $(c, 0)$ is $\\sqrt{\\left(a - \\dfrac{cx}{a}\\right)^2}$.",
            "reason": "distance formula"
          },
          {
            "line": "That distance is $\\left|a - \\dfrac{cx}{a}\\right|$.",
            "reason": "the root of a square is the absolute value"
          },
          {
            "line": "Also $\\dfrac{y^2}{b^2} \\ge 0$.",
            "reason": "Trivial Inequality, with $b^2 > 0$"
          },
          {
            "line": "$\\dfrac{x^2}{a^2} = 1 - \\dfrac{y^2}{b^2}$",
            "reason": "adding the same number to both sides: line 1"
          },
          {
            "line": "So $\\dfrac{x^2}{a^2} \\le 1$.",
            "reason": "lines 14 and 15: $\\dfrac{y^2}{b^2}$ is $0$ or more, so taking it away from $1$ leaves at most $1$"
          },
          {
            "line": "So $x^2 \\le a^2$.",
            "reason": "multiplying both sides by the same number: $a^2$, which is above $0$"
          },
          {
            "line": "So $\\sqrt{x^2} \\le \\sqrt{a^2}$.",
            "reason": "powers and roots of positive numbers keep the order; where $x = 0$, $\\sqrt{x^2} = 0 \\le \\sqrt{a^2}$ at once"
          },
          {
            "line": "So $|x| \\le a$.",
            "reason": "the root of a square is the absolute value, and $\\sqrt{a^2} = a$ since $a > 0$"
          },
          {
            "line": "Also $c^2 < a^2$.",
            "reason": "line 4: $b^2$ is above $0$, so taking it away from $a^2$ leaves less than $a^2$"
          },
          {
            "line": "So $c < a$.",
            "reason": "powers and roots of positive numbers keep the order, with $c \\ge 0$"
          },
          {
            "line": "Then $\\left|\\dfrac{cx}{a}\\right| = \\dfrac{c}{a}|x|$.",
            "reason": "absolute value of a product, with $\\dfrac{c}{a} \\ge 0$"
          },
          {
            "line": "So $\\dfrac{c}{a}|x| \\le c$.",
            "reason": "multiplying by a positive number: line 19 is multiplied by $\\dfrac{c}{a}$"
          },
          {
            "line": "So $\\dfrac{cx}{a} \\le c$.",
            "reason": "lines 22 and 23: a number is at most its absolute value"
          },
          {
            "line": "So $\\dfrac{cx}{a} < a$.",
            "reason": "lines 24 and 21: a number at most $c$, with $c < a$, is below $a$"
          },
          {
            "line": "So $a - \\dfrac{cx}{a} > 0$.",
            "reason": "adding the same number to both sides"
          },
          {
            "line": "The distance from $(x, y)$ to $(c, 0)$ is $a - \\dfrac{cx}{a}$.",
            "reason": "absolute value: a number above $0$ is its own absolute value, with line 13"
          },
          {
            "line": "The distance from $(x, y)$ to $(-c, 0)$ is $a + \\dfrac{cx}{a}$.",
            "reason": "lines 8 to 27 with $-c$ in place of $c$, which changes the sign of each term in $cx$"
          },
          {
            "line": "The two distances add to $\\left(a - \\dfrac{cx}{a}\\right) + \\left(a + \\dfrac{cx}{a}\\right)$, which is $2a$.",
            "reason": "collecting like terms"
          }
        ]
      }
    },
    {
      "id": "t190-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$ and $b$ with $a > b > 0$, the line through the focus $(c, 0)$ of the ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$, with $c > 0$, parallel to its minor axis meets the ellipse at exactly two points, and the distance between them is $\\dfrac{2b^2}{a}$. Facts it may use: Standard form of an ellipse, Focal relation of an ellipse, Minor axis, substituting a value, adding the same number to both sides, fractions with letters, multiplying both sides by the same number, if $x^2 = a^2$ then $x = a$ or $x = -a$, distance on a vertical line.",
      "check": {
        "proof": [
          {
            "line": "The focus $(c, 0)$ has $c^2 = a^2 - b^2$.",
            "reason": "Focal relation of an ellipse: the centre is $(0, 0)$ and the major axis is horizontal, since $a > b$"
          },
          {
            "line": "The minor axis is vertical, so the line through the focus parallel to it is $x = c$.",
            "reason": "Minor axis: it is at right angles to the major axis"
          },
          {
            "line": "A point $(c, y)$ lies on the ellipse exactly when $\\dfrac{c^2}{a^2} + \\dfrac{y^2}{b^2} = 1$.",
            "reason": "substituting a value: $x = c$"
          },
          {
            "line": "$\\dfrac{a^2 - b^2}{a^2} + \\dfrac{y^2}{b^2} = 1$",
            "reason": "substituting a value: line 1"
          },
          {
            "line": "$\\dfrac{y^2}{b^2} = 1 - \\dfrac{a^2 - b^2}{a^2}$",
            "reason": "adding the same number to both sides"
          },
          {
            "line": "$\\dfrac{y^2}{b^2} = \\dfrac{b^2}{a^2}$",
            "reason": "fractions with letters: $1 - \\dfrac{a^2 - b^2}{a^2} = \\dfrac{a^2 - a^2 + b^2}{a^2}$"
          },
          {
            "line": "$y^2 = \\dfrac{b^4}{a^2}$",
            "reason": "multiplying both sides by the same number: $b^2$"
          },
          {
            "line": "So $y = \\dfrac{b^2}{a}$ or $y = -\\dfrac{b^2}{a}$.",
            "reason": "if $x^2 = a^2$ then $x = a$ or $x = -a$, with $\\left(\\dfrac{b^2}{a}\\right)^2 = \\dfrac{b^4}{a^2}$"
          },
          {
            "line": "The two points $\\left(c, \\dfrac{b^2}{a}\\right)$ and $\\left(c, -\\dfrac{b^2}{a}\\right)$ are different, since $\\dfrac{b^2}{a} > 0$.",
            "reason": "line 8, with $a$ and $b$ above $0$"
          },
          {
            "line": "The distance between them is $\\dfrac{b^2}{a} - \\left(-\\dfrac{b^2}{a}\\right)$, which is $\\dfrac{2b^2}{a}$.",
            "reason": "distance on a vertical line: the larger $y$-coordinate minus the smaller"
          }
        ]
      }
    }
  ]
}
