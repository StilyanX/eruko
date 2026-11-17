export default {
  "number": 192,
  "title": "Which conic an equation gives",
  "section": 12,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "131, 141, 143, 152, 156-158"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether the graph of $-6x^2 - 15x - 6y = 40$ is a parabola.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the graph of $-6x^2 - 15x - 6y = 40$ is a parabola.",
      "The coefficient of $y^2$ is $0$, the coefficient of $x^2$ is $-6$, and the coefficient of $y$ is $-6$.",
      "So the graph is a parabola.",
      "Yes"
    ]
  },
  "ideas": [
    {
      "name": "Conic from its coefficients",
      "concrete": "In $7x^2 - 8y^2 - 70x - 128y = 291$ both squares appear, and their coefficients $7$ and $-8$ have the product $-56$, which is below $0$. So the graph is a hyperbola or two lines that cross; it is never an ellipse, a circle or a parabola.",
      "general": "For numbers $a$, $b$, $c$, $d$ and $e$, the graph of $ax^2 + by^2 + cx + dy + e = 0$ is named by the coefficients of its squares. When $a = 0$ while $b$ and $c$ are not $0$, or $b = 0$ while $a$ and $d$ are not $0$, the graph is a parabola. When $a = 0$ and $c = 0$ while $b$ is not $0$, or $b = 0$ and $d = 0$ while $a$ is not $0$, only one letter is left, and the graph is two lines, one line or empty, each line parallel to an axis; it is never a parabola. When $ab > 0$, the graph is an ellipse, a point, or empty, and the ellipse is a circle when $a = b$. When $ab < 0$, the graph is a hyperbola or two lines that cross. The parabola, the circle, the ellipse and the hyperbola are the **conics**."
    },
    {
      "name": "Degenerate conic",
      "concrete": "Completing both squares turns $8x^2 + 3y^2 + 48x - 48y = -264$ into $8(x + 3)^2 + 3(y - 8)^2 = 0$. Each term on the left is a positive number times a square, so it is $0$ or more, and the sum is $0$ only when both squares are $0$: the graph is the one point $(-3, 8)$.",
      "general": "For numbers $a$ and $b$, neither $0$, and numbers $h$, $k$ and $r$, look at the graph of $a(x - h)^2 + b(y - k)^2 = r$. When $ab > 0$, it is an ellipse if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; for $a = b$ this is Circle, point or nothing, with a circle in place of the ellipse. When $ab < 0$, it is a hyperbola if $r \\ne 0$, opening left and right if $r$ has the sign of $a$ and up and down if $r$ has the sign of $b$; if $r = 0$, it is the two lines through $(h, k)$ on which $\\sqrt{|a|}(x - h) = \\sqrt{|b|}(y - k)$ or $\\sqrt{|a|}(x - h) = -\\sqrt{|b|}(y - k)$, since then $|a|(x - h)^2 = |b|(y - k)^2$. The point, the empty graph and the two lines are the **degenerate conics**; none of them is an ellipse, a circle or a hyperbola."
    }
  ],
  "kinds": [
    {
      "id": "t192-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the graph of $4y^2 - 11x - 3y = 32$ is a parabola.",
            "lines": [
              {
                "step": "Decide whether the graph of $4y^2 - 11x - 3y = 32$ is a parabola.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The coefficient of $x^2$ is $0$, the coefficient of $y^2$ is $4$, and the coefficient of $x$ is $-11$.",
                "reason": "Conic from its coefficients: the graph is named by the coefficients of $x^2$ and $y^2$, and when one of them is $0$, also by the coefficient of the letter whose square is missing."
              },
              {
                "step": "So the graph is a parabola.",
                "reason": "Conic from its coefficients: when the coefficient of one square is $0$ and the coefficients of the other square and of the letter whose square is missing are not, the graph is a parabola."
              },
              {
                "step": "Yes",
                "reason": "Answering the question asked: the graph is a parabola, so it is a parabola."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the graph of $6y^2 - 5y = 21$ is a parabola.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the graph of $6y^2 - 5y = 21$ is a parabola.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficient of $x^2$ is $0$, the coefficient of $y^2$ is $6$, and $x$ does not appear.",
                  "reason": "Conic from its coefficients: the graph is named by the coefficients of $x^2$ and $y^2$, and when one of them is $0$, also by the coefficient of the letter whose square is missing."
                },
                {
                  "step": "So the graph is not a parabola.",
                  "reason": "Conic from its coefficients: when the coefficient of one square is $0$ and the letter whose square is missing does not appear, only one letter is left, and the graph is two lines, one line or empty, each line parallel to an axis; it is never a parabola."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked: the graph is two lines, one line or empty, so it is not a parabola."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $7x^2 + 12x - 7y = -33$ is a parabola.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $7x^2 + 12x - 7y = -33$ is a parabola.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficient of $y^2$ is $0$, the coefficient of $x^2$ is $7$, and the coefficient of $y$ is $-7$.",
                  "reason": "Conic from its coefficients: the graph is named by the coefficients of $x^2$ and $y^2$, and when one of them is $0$, also by the coefficient of the letter whose square is missing."
                },
                {
                  "step": "So the graph is a parabola.",
                  "reason": "Conic from its coefficients: when the coefficient of one square is $0$ and the coefficients of the other square and of the letter whose square is missing are not, the graph is a parabola."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the graph is a parabola, so it is a parabola."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $5x^2 + 8x = -27$ is a parabola.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the graph of $5x^2 + 8x = -27$ is a parabola.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficient of $y^2$ is $0$, the coefficient of $x^2$ is $5$, and $y$ does not appear.",
                  "reason": "Conic from its coefficients: the graph is named by the coefficients of $x^2$ and $y^2$, and when one of them is $0$, also by the coefficient of the letter whose square is missing."
                },
                {
                  "step": "So the graph is not a parabola.",
                  "reason": "Conic from its coefficients: when the coefficient of one square is $0$ and the letter whose square is missing does not appear, only one letter is left, and the graph is two lines, one line or empty, each line parallel to an axis; it is never a parabola."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked: the graph is two lines, one line or empty, so it is not a parabola."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t192-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the graph of $4x^2 + 7y^2 + 24x - 14y = -124$ is an ellipse.",
            "lines": [
              {
                "step": "Decide whether the graph of $4x^2 + 7y^2 + 24x - 14y = -124$ is an ellipse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The coefficients of $x^2$ and $y^2$ are $4$ and $7$, and $4 \\cdot 7 = 28$ is above $0$, so the graph is an ellipse, a point, or empty.",
                "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
              },
              {
                "step": "$4(x^2 + 6x) + 7(y^2 - 2y) = -124$",
                "reason": "Taking out a common factor: $4$ is taken out of the two terms in $x$ and $7$ out of the two terms in $y$."
              },
              {
                "step": "$4(x^2 + 6x + 9) + 7(y^2 - 2y + 1) = -124 + 36 + 7$",
                "reason": "Completing the square: $9$ and $1$ are added inside the brackets, which adds $4 \\cdot 9 = 36$ and $7 \\cdot 1 = 7$ to the left side, so both are added to the right side too."
              },
              {
                "step": "$4(x + 3)^2 + 7(y - 1)^2 = -81$",
                "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "The right side $-81$ has the opposite sign to $4$, so the graph is empty.",
                "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
              },
              {
                "step": "No",
                "reason": "Answering the question asked: the graph is empty, so it is not an ellipse."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the graph of $-3x^2 + 4y^2 - 6x - 80y = -382$ is a hyperbola.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $-3x^2 + 4y^2 - 6x - 80y = -382$ is a hyperbola.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficients of $x^2$ and $y^2$ are $-3$ and $4$, and $-3 \\cdot 4 = -12$ is below $0$, so the graph is a hyperbola or two lines.",
                  "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
                },
                {
                  "step": "$-3(x^2 + 2x) + 4(y^2 - 20y) = -382$",
                  "reason": "Taking out a common factor: $-3$ is taken out of the two terms in $x$ and $4$ out of the two terms in $y$."
                },
                {
                  "step": "$-3(x^2 + 2x + 1) + 4(y^2 - 20y + 100) = -382 - 3 + 400$",
                  "reason": "Completing the square: $1$ and $100$ are added inside the brackets, which adds $-3 \\cdot 1 = -3$ and $4 \\cdot 100 = 400$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$-3(x + 1)^2 + 4(y - 10)^2 = 15$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The right side $15$ is not $0$, so the graph is a hyperbola.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the graph is a hyperbola, so it is a hyperbola."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $3x^2 + 3y^2 - 60x + 72y = -685$ is a circle.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $3x^2 + 3y^2 - 60x + 72y = -685$ is a circle.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficients of $x^2$ and $y^2$ are $3$ and $3$, and $3 \\cdot 3 = 9$ is above $0$, so the graph is an ellipse, a point, or empty.",
                  "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
                },
                {
                  "step": "$3(x^2 - 20x) + 3(y^2 + 24y) = -685$",
                  "reason": "Taking out a common factor: $3$ is taken out of the two terms in $x$ and $3$ out of the two terms in $y$."
                },
                {
                  "step": "$3(x^2 - 20x + 100) + 3(y^2 + 24y + 144) = -685 + 300 + 432$",
                  "reason": "Completing the square: $100$ and $144$ are added inside the brackets, which adds $3 \\cdot 100 = 300$ and $3 \\cdot 144 = 432$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$3(x - 10)^2 + 3(y + 12)^2 = 47$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The right side $47$ has the sign of $3$ and the coefficients of the two squares are equal, so the graph is a circle.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the graph is a circle, so it is a circle."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $-8x^2 + 5y^2 + 144x - 30y = 603$ is a hyperbola.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the graph of $-8x^2 + 5y^2 + 144x - 30y = 603$ is a hyperbola.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficients of $x^2$ and $y^2$ are $-8$ and $5$, and $-8 \\cdot 5 = -40$ is below $0$, so the graph is a hyperbola or two lines.",
                  "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
                },
                {
                  "step": "$-8(x^2 - 18x) + 5(y^2 - 6y) = 603$",
                  "reason": "Taking out a common factor: $-8$ is taken out of the two terms in $x$ and $5$ out of the two terms in $y$."
                },
                {
                  "step": "$-8(x^2 - 18x + 81) + 5(y^2 - 6y + 9) = 603 - 648 + 45$",
                  "reason": "Completing the square: $81$ and $9$ are added inside the brackets, which adds $-8 \\cdot 81 = -648$ and $5 \\cdot 9 = 45$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$-8(x - 9)^2 + 5(y - 3)^2 = 0$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The right side is $0$, so the graph is two lines through $(9, 3)$.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked: the graph is two lines through $(9, 3)$, so it is not a hyperbola."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t192-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the graph of $\\dfrac{(x - 2)^2}{5} - \\dfrac{(y + 8)^2}{9} = 0$ is a hyperbola.",
            "lines": [
              {
                "step": "Decide whether the graph of $\\dfrac{(x - 2)^2}{5} - \\dfrac{(y + 8)^2}{9} = 0$ is a hyperbola.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $a = \\dfrac{1}{5}$, $b = -\\dfrac{1}{9}$, $h = 2$, $k = -8$ and $r = 0$, and $ab = -\\dfrac{1}{45}$ is below $0$, so the graph is a hyperbola or two lines.",
                "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$ with $a$ and $b$ not $0$, the graph is an ellipse, a point, or empty when $ab > 0$, and a hyperbola or two lines when $ab < 0$."
              },
              {
                "step": "The right side is $0$, so the graph is two lines through $(2, -8)$.",
                "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
              },
              {
                "step": "No",
                "reason": "Answering the question asked: the graph is two lines through $(2, -8)$, so it is not a hyperbola."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the graph of $\\dfrac{(x + 8)^2}{8} + \\dfrac{(y - 4)^2}{3} = 10$ is an ellipse.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $\\dfrac{(x + 8)^2}{8} + \\dfrac{(y - 4)^2}{3} = 10$ is an ellipse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = \\dfrac{1}{8}$, $b = \\dfrac{1}{3}$, $h = -8$, $k = 4$ and $r = 10$, and $ab = \\dfrac{1}{24}$ is above $0$, so the graph is an ellipse, a point, or empty.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$ with $a$ and $b$ not $0$, the graph is an ellipse, a point, or empty when $ab > 0$, and a hyperbola or two lines when $ab < 0$."
                },
                {
                  "step": "The right side $10$ has the sign of $\\dfrac{1}{8}$, so the graph is an ellipse.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the graph is an ellipse, so it is an ellipse."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $\\dfrac{(x - 2)^2}{9} + \\dfrac{(y - 6)^2}{8} = 0$ is a single point.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $\\dfrac{(x - 2)^2}{9} + \\dfrac{(y - 6)^2}{8} = 0$ is a single point.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = \\dfrac{1}{9}$, $b = \\dfrac{1}{8}$, $h = 2$, $k = 6$ and $r = 0$, and $ab = \\dfrac{1}{72}$ is above $0$, so the graph is an ellipse, a point, or empty.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$ with $a$ and $b$ not $0$, the graph is an ellipse, a point, or empty when $ab > 0$, and a hyperbola or two lines when $ab < 0$."
                },
                {
                  "step": "The right side is $0$, so the graph is the one point $(2, 6)$.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the graph is the one point $(2, 6)$, so it is a single point."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $\\dfrac{(x + 12)^2}{3} + \\dfrac{(y - 13)^2}{3} = 5$ is a circle.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $\\dfrac{(x + 12)^2}{3} + \\dfrac{(y - 13)^2}{3} = 5$ is a circle.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $a = \\dfrac{1}{3}$, $b = \\dfrac{1}{3}$, $h = -12$, $k = 13$ and $r = 5$, and $ab = \\dfrac{1}{9}$ is above $0$, so the graph is an ellipse, a point, or empty.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$ with $a$ and $b$ not $0$, the graph is an ellipse, a point, or empty when $ab > 0$, and a hyperbola or two lines when $ab < 0$."
                },
                {
                  "step": "The right side $5$ has the sign of $\\dfrac{1}{3}$ and $a = b$, so the graph is a circle.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the graph is a circle, so it is a circle."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t192-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working that names the graph of $7x^2 - 3y^2 + 98x + 12y = -331$, and write that line right.",
            "given": [
              "$7x^2 - 3y^2 + 98x + 12y = -331$",
              "$7(x^2 + 14x) - 3(y^2 - 4y) = -331$",
              "$7(x^2 + 14x + 49) - 3(y^2 - 4y + 4) = -331 + 343 + 12 = 24$",
              "$7(x + 7)^2 - 3(y - 2)^2 = 24$",
              "The graph is a hyperbola."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that names the graph of $7x^2 - 3y^2 + 98x + 12y = -331$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 adds $12$ to the right side for the terms in $y$, where $-3 \\cdot 4 = -12$ is added to the left side, so a sign is lost.",
                "reason": "A sign lost: a square added inside a bracket with a negative number in front adds a negative amount to the left side, and the same negative amount goes to the right side."
              },
              {
                "step": "Line 3 written right is $7(x^2 + 14x + 49) - 3(y^2 - 4y + 4) = -331 + 343 - 12 = 0$.",
                "reason": "Completing the square: $49$ and $4$ are added inside the brackets, which adds $7 \\cdot 49 = 343$ and $-3 \\cdot 4 = -12$ to the left side, so both are added to the right side too."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that names the graph of $-3x^2 + 2y^2 - 30x - 36y + 153 = 0$, and write that line right.",
              "given": [
                "$-3x^2 + 2y^2 - 30x - 36y + 153 = 0$",
                "$-3x^2 + 2y^2 - 30x - 36y = -153$",
                "$-3(x^2 + 10x) + 2(y^2 - 18y) = -153$",
                "$-3(x^2 + 10x + 25) + 2(y^2 - 18y + 81) = -153 + 75 + 162 = 84$",
                "$-3(x + 5)^2 + 2(y - 9)^2 = 84$",
                "The graph is a hyperbola."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -3*(x^2+10*x+25)+2*(y^2-18*y+81) = -153-75+162 = -66",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $-3x^2 + 2y^2 - 30x - 36y + 153 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $75$ to the right side for the terms in $x$, where $-3 \\cdot 25 = -75$ is added to the left side, so a sign is lost.",
                  "reason": "A sign lost: a square added inside a bracket with a negative number in front adds a negative amount to the left side, and the same negative amount goes to the right side."
                },
                {
                  "step": "Line 4 written right is $-3(x^2 + 10x + 25) + 2(y^2 - 18y + 81) = -153 - 75 + 162 = -66$.",
                  "reason": "Completing the square: $25$ and $81$ are added inside the brackets, which adds $-3 \\cdot 25 = -75$ and $2 \\cdot 81 = 162$ to the left side, so both are added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $-3x^2 - 5y^2 - 54x - 20y = 263$, and write that line right.",
              "given": [
                "$-3x^2 - 5y^2 - 54x - 20y = 263$",
                "$-3(x^2 + 18x) - 5(y^2 + 4y) = 263$",
                "$-3(x^2 + 18x + 81) - 5(y^2 + 4y + 4) = 263 + 243 - 20 = 486$",
                "$-3(x + 9)^2 - 5(y + 2)^2 = 486$",
                "The graph is empty."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -3*(x^2+18*x+81)-5*(y^2+4*y+4) = 263-243-20 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $-3x^2 - 5y^2 - 54x - 20y = 263$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $243$ to the right side for the terms in $x$, where $-3 \\cdot 81 = -243$ is added to the left side, so a sign is lost.",
                  "reason": "A sign lost: a square added inside a bracket with a negative number in front adds a negative amount to the left side, and the same negative amount goes to the right side."
                },
                {
                  "step": "Line 3 written right is $-3(x^2 + 18x + 81) - 5(y^2 + 4y + 4) = 263 - 243 - 20 = 0$.",
                  "reason": "Completing the square: $81$ and $4$ are added inside the brackets, which adds $-3 \\cdot 81 = -243$ and $-5 \\cdot 4 = -20$ to the left side, so both are added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $-7x^2 + 8y^2 - 112x + 32y - 416 = 0$, and write that line right.",
              "given": [
                "$-7x^2 + 8y^2 - 112x + 32y - 416 = 0$",
                "$-7x^2 + 8y^2 - 112x + 32y = 416$",
                "$-7(x^2 + 16x) + 8(y^2 + 4y) = 416$",
                "$-7(x^2 + 16x + 64) + 8(y^2 + 4y + 4) = 416 + 448 + 32 = 896$",
                "$-7(x + 8)^2 + 8(y + 2)^2 = 896$",
                "The graph is a hyperbola."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -7*(x^2+16*x+64)+8*(y^2+4*y+4) = 416-448+32 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $-7x^2 + 8y^2 - 112x + 32y - 416 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $448$ to the right side for the terms in $x$, where $-7 \\cdot 64 = -448$ is added to the left side, so a sign is lost.",
                  "reason": "A sign lost: a square added inside a bracket with a negative number in front adds a negative amount to the left side, and the same negative amount goes to the right side."
                },
                {
                  "step": "Line 4 written right is $-7(x^2 + 16x + 64) + 8(y^2 + 4y + 4) = 416 - 448 + 32 = 0$.",
                  "reason": "Completing the square: $64$ and $4$ are added inside the brackets, which adds $-7 \\cdot 64 = -448$ and $8 \\cdot 4 = 32$ to the left side, so both are added to the right side too."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working that names the graph of $7x^2 + 8y^2 - 42x - 96y + 351 = 0$, and write that line right.",
            "given": [
              "$7x^2 + 8y^2 - 42x - 96y + 351 = 0$",
              "$7x^2 + 8y^2 - 42x - 96y = 351$",
              "$7(x^2 - 6x) + 8(y^2 - 12y) = 351$",
              "$7(x^2 - 6x + 9) + 8(y^2 - 12y + 36) = 351 + 63 + 288 = 702$",
              "$7(x - 3)^2 + 8(y - 6)^2 = 702$",
              "The graph is an ellipse."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that names the graph of $7x^2 + 8y^2 - 42x - 96y + 351 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 moves $351$ to the right side without changing its sign, so a sign is lost.",
                "reason": "A sign lost: a number moved to the other side of an equation changes its sign."
              },
              {
                "step": "Line 2 written right is $7x^2 + 8y^2 - 42x - 96y = -351$.",
                "reason": "Adding the same number to both sides: $351$ is taken from both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that names the graph of $8x^2 + 9y^2 - 16x - 162y + 775 = 0$, and write that line right.",
              "given": [
                "$8x^2 + 9y^2 - 16x - 162y + 775 = 0$",
                "$8(x^2 - 2x) + 9(y^2 - 18y) + 775 = 0$",
                "$8(x^2 - 2x) + 9(y^2 - 18y) = 775$",
                "$8(x^2 - 2x + 1) + 9(y^2 - 18y + 81) = 775 + 8 + 729 = 1512$",
                "$8(x - 1)^2 + 9(y - 9)^2 = 1512$",
                "The graph is an ellipse."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 8*(x^2-2*x)+9*(y^2-18*y) = -775",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $8x^2 + 9y^2 - 16x - 162y + 775 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 moves $775$ to the right side without changing its sign, so a sign is lost.",
                  "reason": "A sign lost: a number moved to the other side of an equation changes its sign."
                },
                {
                  "step": "Line 3 written right is $8(x^2 - 2x) + 9(y^2 - 18y) = -775$.",
                  "reason": "Adding the same number to both sides: $775$ is taken from both sides."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $9x^2 - 5y^2 + 162x - 40y + 649 = 0$, and write that line right.",
              "given": [
                "$9x^2 - 5y^2 + 162x - 40y + 649 = 0$",
                "$9x^2 - 5y^2 + 162x - 40y = 649$",
                "$9(x^2 + 18x) - 5(y^2 + 8y) = 649$",
                "$9(x^2 + 18x + 81) - 5(y^2 + 8y + 16) = 649 + 729 - 80 = 1298$",
                "$9(x + 9)^2 - 5(y + 4)^2 = 1298$",
                "The graph is a hyperbola."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 9*x^2-5*y^2+162*x-40*y = -649",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $9x^2 - 5y^2 + 162x - 40y + 649 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 moves $649$ to the right side without changing its sign, so a sign is lost.",
                  "reason": "A sign lost: a number moved to the other side of an equation changes its sign."
                },
                {
                  "step": "Line 2 written right is $9x^2 - 5y^2 + 162x - 40y = -649$.",
                  "reason": "Adding the same number to both sides: $649$ is taken from both sides."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $-8x^2 + 7y^2 - 112x - 140y + 376 = 0$, and write that line right.",
              "given": [
                "$-8x^2 + 7y^2 - 112x - 140y + 376 = 0$",
                "$-8(x^2 + 14x) + 7(y^2 - 20y) + 376 = 0$",
                "$-8(x^2 + 14x) + 7(y^2 - 20y) = 376$",
                "$-8(x^2 + 14x + 49) + 7(y^2 - 20y + 100) = 376 - 392 + 700 = 684$",
                "$-8(x + 7)^2 + 7(y - 10)^2 = 684$",
                "The graph is a hyperbola."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -8*(x^2+14*x)+7*(y^2-20*y) = -376",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $-8x^2 + 7y^2 - 112x - 140y + 376 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 moves $376$ to the right side without changing its sign, so a sign is lost.",
                  "reason": "A sign lost: a number moved to the other side of an equation changes its sign."
                },
                {
                  "step": "Line 3 written right is $-8(x^2 + 14x) + 7(y^2 - 20y) = -376$.",
                  "reason": "Adding the same number to both sides: $376$ is taken from both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working that names the graph of $3x^2 + 7y^2 - 18x - 140y = -655$, and write that line right.",
            "given": [
              "$3x^2 + 7y^2 - 18x - 140y = -655$",
              "$3(x^2 - 6x) + 7(y^2 - 20y) = -655$",
              "$3(x^2 - 6x) + 7(y^2 - 20y) = -655 + 27 + 700 = 72$",
              "$3(x - 3)^2 + 7(y - 10)^2 = 72$",
              "The graph is an ellipse."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that names the graph of $3x^2 + 7y^2 - 18x - 140y = -655$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 adds $27$ and $700$ to the right side only and runs on with a second equals sign.",
                "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
              },
              {
                "step": "Line 3 written right is $3(x^2 - 6x + 9) + 7(y^2 - 20y + 100) = -655 + 27 + 700 = 72$.",
                "reason": "Completing the square: $9$ and $100$ are added inside the brackets, which adds $3 \\cdot 9 = 27$ and $7 \\cdot 100 = 700$ to the left side, so both are added to the right side too."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that names the graph of $6x^2 - 9y^2 + 120x + 54y + 502 = 0$, and write that line right.",
              "given": [
                "$6x^2 - 9y^2 + 120x + 54y + 502 = 0$",
                "$6x^2 - 9y^2 + 120x + 54y = -502$",
                "$6(x^2 + 20x) - 9(y^2 - 6y) = -502$",
                "$6(x^2 + 20x) - 9(y^2 - 6y) = -502 + 600 - 81 = 17$",
                "$6(x + 10)^2 - 9(y - 3)^2 = 17$",
                "The graph is a hyperbola."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 6*(x^2+20*x+100)-9*(y^2-6*y+9) = -502+600-81 = 17",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $6x^2 - 9y^2 + 120x + 54y + 502 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $600$ and $-81$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $6(x^2 + 20x + 100) - 9(y^2 - 6y + 9) = -502 + 600 - 81 = 17$.",
                  "reason": "Completing the square: $100$ and $9$ are added inside the brackets, which adds $6 \\cdot 100 = 600$ and $-9 \\cdot 9 = -81$ to the left side, so both are added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $7x^2 + 2y^2 - 28x - 40y = -228$, and write that line right.",
              "given": [
                "$7x^2 + 2y^2 - 28x - 40y = -228$",
                "$7(x^2 - 4x) + 2(y^2 - 20y) = -228$",
                "$7(x^2 - 4x) + 2(y^2 - 20y) = -228 + 28 + 200 = 0$",
                "$7(x - 2)^2 + 2(y - 10)^2 = 0$",
                "The graph is the one point $(2, 10)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*(x^2-4*x+4)+2*(y^2-20*y+100) = -228+28+200 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $7x^2 + 2y^2 - 28x - 40y = -228$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $28$ and $200$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 3 written right is $7(x^2 - 4x + 4) + 2(y^2 - 20y + 100) = -228 + 28 + 200 = 0$.",
                  "reason": "Completing the square: $4$ and $100$ are added inside the brackets, which adds $7 \\cdot 4 = 28$ and $2 \\cdot 100 = 200$ to the left side, so both are added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $-6x^2 + 7y^2 - 12x + 112y + 442 = 0$, and write that line right.",
              "given": [
                "$-6x^2 + 7y^2 - 12x + 112y + 442 = 0$",
                "$-6x^2 + 7y^2 - 12x + 112y = -442$",
                "$-6(x^2 + 2x) + 7(y^2 + 16y) = -442$",
                "$-6(x^2 + 2x) + 7(y^2 + 16y) = -442 - 6 + 448 = 0$",
                "$-6(x + 1)^2 + 7(y + 8)^2 = 0$",
                "The graph is two lines through $(-1, -8)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -6*(x^2+2*x+1)+7*(y^2+16*y+64) = -442-6+448 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $-6x^2 + 7y^2 - 12x + 112y + 442 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $-6$ and $448$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the numbers are added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $-6(x^2 + 2x + 1) + 7(y^2 + 16y + 64) = -442 - 6 + 448 = 0$.",
                  "reason": "Completing the square: $1$ and $64$ are added inside the brackets, which adds $-6 \\cdot 1 = -6$ and $7 \\cdot 64 = 448$ to the left side, so both are added to the right side too."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working that names the graph of $2x^2 + 3y^2 - 20x + 60y = -350$, and write that line right.",
            "given": [
              "$2x^2 + 3y^2 - 20x + 60y = -350$",
              "$2(x^2 - 10x) + 3(y^2 + 20y) = -350$",
              "$2(x^2 - 10x + 25) + 3(y^2 + 20y + 100) = -350 + 50 + 300 = 0$",
              "$2(x + 5)^2 + 3(y + 10)^2 = 0$",
              "The graph is the one point $(-5, -10)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that names the graph of $2x^2 + 3y^2 - 20x + 60y = -350$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 writes $x^2 - 10x + 25$ as $(x + 5)^2$, so a sign is lost.",
                "reason": "A sign lost: $x^2 - 2hx + h^2 = (x - h)^2$, so the sign inside the bracket is the sign of the middle term."
              },
              {
                "step": "Line 4 written right is $2(x - 5)^2 + 3(y + 10)^2 = 0$.",
                "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that names the graph of $9x^2 - 5y^2 + 54x + 70y - 164 = 0$, and write that line right.",
              "given": [
                "$9x^2 - 5y^2 + 54x + 70y - 164 = 0$",
                "$9x^2 - 5y^2 + 54x + 70y = 164$",
                "$9(x^2 + 6x) - 5(y^2 - 14y) = 164$",
                "$9(x^2 + 6x + 9) - 5(y^2 - 14y + 49) = 164 + 81 - 245 = 0$",
                "$9(x + 3)^2 - 5(y + 7)^2 = 0$",
                "The graph is two lines through $(-3, -7)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 9*(x+3)^2-5*(y-7)^2 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $9x^2 - 5y^2 + 54x + 70y - 164 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 writes $y^2 - 14y + 49$ as $(y + 7)^2$, so a sign is lost.",
                  "reason": "A sign lost: $x^2 - 2hx + h^2 = (x - h)^2$, so the sign inside the bracket is the sign of the middle term."
                },
                {
                  "step": "Line 5 written right is $9(x + 3)^2 - 5(y - 7)^2 = 0$.",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $7x^2 + 2y^2 - 42x - 12y = -2$, and write that line right.",
              "given": [
                "$7x^2 + 2y^2 - 42x - 12y = -2$",
                "$7(x^2 - 6x) + 2(y^2 - 6y) = -2$",
                "$7(x^2 - 6x + 9) + 2(y^2 - 6y + 9) = -2 + 63 + 18 = 79$",
                "$7(x - 3)^2 + 2(y + 3)^2 = 79$",
                "The graph is an ellipse."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 7*(x-3)^2+2*(y-3)^2 = 79",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $7x^2 + 2y^2 - 42x - 12y = -2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 writes $y^2 - 6y + 9$ as $(y + 3)^2$, so a sign is lost.",
                  "reason": "A sign lost: $x^2 - 2hx + h^2 = (x - h)^2$, so the sign inside the bracket is the sign of the middle term."
                },
                {
                  "step": "Line 4 written right is $7(x - 3)^2 + 2(y - 3)^2 = 79$.",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that names the graph of $7x^2 + 6y^2 - 84x - 24y + 276 = 0$, and write that line right.",
              "given": [
                "$7x^2 + 6y^2 - 84x - 24y + 276 = 0$",
                "$7x^2 + 6y^2 - 84x - 24y = -276$",
                "$7(x^2 - 12x) + 6(y^2 - 4y) = -276$",
                "$7(x^2 - 12x + 36) + 6(y^2 - 4y + 4) = -276 + 252 + 24 = 0$",
                "$7(x + 6)^2 + 6(y - 2)^2 = 0$",
                "The graph is the one point $(-6, 2)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 7*(x-6)^2+6*(y-2)^2 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that names the graph of $7x^2 + 6y^2 - 84x - 24y + 276 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 writes $x^2 - 12x + 36$ as $(x + 6)^2$, so a sign is lost.",
                  "reason": "A sign lost: $x^2 - 2hx + h^2 = (x - h)^2$, so the sign inside the bracket is the sign of the middle term."
                },
                {
                  "step": "Line 5 written right is $7(x - 6)^2 + 6(y - 2)^2 = 0$.",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t192-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $9x^2 - 16y^2 - 72x + 160y = 256$.",
            "lines": [
              {
                "step": "Sketch the graph of $9x^2 - 16y^2 - 72x + 160y = 256$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The coefficients of $x^2$ and $y^2$ are $9$ and $-16$, and $9 \\cdot (-16) = -144$ is below $0$, so the graph is a hyperbola or two lines.",
                "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
              },
              {
                "step": "$9(x^2 - 8x) - 16(y^2 - 10y) = 256$",
                "reason": "Taking out a common factor: $9$ is taken out of the two terms in $x$ and $-16$ out of the two terms in $y$."
              },
              {
                "step": "$9(x^2 - 8x + 16) - 16(y^2 - 10y + 25) = 256 + 144 - 400$",
                "reason": "Completing the square: $16$ and $25$ are added inside the brackets, which adds $9 \\cdot 16 = 144$ and $-16 \\cdot 25 = -400$ to the left side, so both are added to the right side too."
              },
              {
                "step": "$9(x - 4)^2 - 16(y - 5)^2 = 0$",
                "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
              },
              {
                "step": "The right side is $0$, so the graph is two lines through $(4, 5)$.",
                "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
              },
              {
                "step": "$9(x - 4)^2 = 16(y - 5)^2$",
                "reason": "Adding the same number to both sides: $16(y - 5)^2$ is added to both sides."
              },
              {
                "step": "$(3(x - 4))^2 = (4(y - 5))^2$",
                "reason": "Power of a product: $9(x - 4)^2 = 3^2(x - 4)^2 = (3(x - 4))^2$, and the same for $16(y - 5)^2$."
              },
              {
                "step": "Either $3(x - 4) = 4(y - 5)$ or $3(x - 4) = -4(y - 5)$",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "Either $3x - 12 = 4y - 20$ or $3x - 12 = -4y + 20$",
                "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
              },
              {
                "step": "So $3x - 4y = -8$ or $3x + 4y = 32$",
                "reason": "Adding the same number to both sides: in each equation the term in $y$ goes to the left side and the number to the right side."
              },
              {
                "step": "At $y = 0$, $x = -\\dfrac{8}{3}$ or $x = \\dfrac{32}{3}$.",
                "reason": "Definition of the $x$-intercept: a line meets the $x$-axis where $y = 0$."
              },
              {
                "step": "At $x = 0$, $y = 2$ or $y = 8$.",
                "reason": "Definition of the $y$-intercept: a line meets the $y$-axis where $x = 0$."
              },
              {
                "step": "The line through $\\left(-\\dfrac{8}{3}, 0\\right)$ and $(0, 2)$ and the line through $\\left(\\dfrac{32}{3}, 0\\right)$ and $(0, 8)$, crossing at $(4, 5)$, are the graph.",
                "reason": "The graph of $ax + by = c$ is a line: each line is fixed by its two points.",
                "figure": {
                  "file": "classifying-conics-1.svg",
                  "alt": "Two lines crossing at (4, 5): one through (−8/3, 0) and (0, 2), the other through (32/3, 0) and (0, 8)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $25x^2 - 36y^2 - 250x + 144y = -481$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "One line through $\\left(\\dfrac{13}{5}, 0\\right)$ and $\\left(0, -\\dfrac{13}{6}\\right)$",
                  "The other line through $\\left(\\dfrac{37}{5}, 0\\right)$ and $\\left(0, \\dfrac{37}{6}\\right)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $25x^2 - 36y^2 - 250x + 144y = -481$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficients of $x^2$ and $y^2$ are $25$ and $-36$, and $25 \\cdot (-36) = -900$ is below $0$, so the graph is a hyperbola or two lines.",
                  "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
                },
                {
                  "step": "$25(x^2 - 10x) - 36(y^2 - 4y) = -481$",
                  "reason": "Taking out a common factor: $25$ is taken out of the two terms in $x$ and $-36$ out of the two terms in $y$."
                },
                {
                  "step": "$25(x^2 - 10x + 25) - 36(y^2 - 4y + 4) = -481 + 625 - 144$",
                  "reason": "Completing the square: $25$ and $4$ are added inside the brackets, which adds $25 \\cdot 25 = 625$ and $-36 \\cdot 4 = -144$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$25(x - 5)^2 - 36(y - 2)^2 = 0$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The right side is $0$, so the graph is two lines through $(5, 2)$.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "$25(x - 5)^2 = 36(y - 2)^2$",
                  "reason": "Adding the same number to both sides: $36(y - 2)^2$ is added to both sides."
                },
                {
                  "step": "$(5(x - 5))^2 = (6(y - 2))^2$",
                  "reason": "Power of a product: $25(x - 5)^2 = 5^2(x - 5)^2 = (5(x - 5))^2$, and the same for $36(y - 2)^2$."
                },
                {
                  "step": "Either $5(x - 5) = 6(y - 2)$ or $5(x - 5) = -6(y - 2)$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "Either $5x - 25 = 6y - 12$ or $5x - 25 = -6y + 12$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "So $5x - 6y = 13$ or $5x + 6y = 37$",
                  "reason": "Adding the same number to both sides: in each equation the term in $y$ goes to the left side and the number to the right side."
                },
                {
                  "step": "At $y = 0$, $x = \\dfrac{13}{5}$ or $x = \\dfrac{37}{5}$.",
                  "reason": "Definition of the $x$-intercept: a line meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "At $x = 0$, $y = -\\dfrac{13}{6}$ or $y = \\dfrac{37}{6}$.",
                  "reason": "Definition of the $y$-intercept: a line meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The line through $\\left(\\dfrac{13}{5}, 0\\right)$ and $\\left(0, -\\dfrac{13}{6}\\right)$ and the line through $\\left(\\dfrac{37}{5}, 0\\right)$ and $\\left(0, \\dfrac{37}{6}\\right)$, crossing at $(5, 2)$, are the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: each line is fixed by its two points.",
                  "figure": {
                    "file": "classifying-conics-2.svg",
                    "alt": "Two lines crossing at (5, 2): one through (13/5, 0) and (0, −13/6), the other through (37/5, 0) and (0, 37/6)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $25x^2 - 4y^2 + 200x - 24y = -364$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "One line through $\\left(-\\dfrac{14}{5}, 0\\right)$ and $(0, 7)$",
                  "The other line through $\\left(-\\dfrac{26}{5}, 0\\right)$ and $(0, -13)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $25x^2 - 4y^2 + 200x - 24y = -364$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficients of $x^2$ and $y^2$ are $25$ and $-4$, and $25 \\cdot (-4) = -100$ is below $0$, so the graph is a hyperbola or two lines.",
                  "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
                },
                {
                  "step": "$25(x^2 + 8x) - 4(y^2 + 6y) = -364$",
                  "reason": "Taking out a common factor: $25$ is taken out of the two terms in $x$ and $-4$ out of the two terms in $y$."
                },
                {
                  "step": "$25(x^2 + 8x + 16) - 4(y^2 + 6y + 9) = -364 + 400 - 36$",
                  "reason": "Completing the square: $16$ and $9$ are added inside the brackets, which adds $25 \\cdot 16 = 400$ and $-4 \\cdot 9 = -36$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$25(x + 4)^2 - 4(y + 3)^2 = 0$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The right side is $0$, so the graph is two lines through $(-4, -3)$.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "$25(x + 4)^2 = 4(y + 3)^2$",
                  "reason": "Adding the same number to both sides: $4(y + 3)^2$ is added to both sides."
                },
                {
                  "step": "$(5(x + 4))^2 = (2(y + 3))^2$",
                  "reason": "Power of a product: $25(x + 4)^2 = 5^2(x + 4)^2 = (5(x + 4))^2$, and the same for $4(y + 3)^2$."
                },
                {
                  "step": "Either $5(x + 4) = 2(y + 3)$ or $5(x + 4) = -2(y + 3)$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "Either $5x + 20 = 2y + 6$ or $5x + 20 = -2y - 6$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "So $5x - 2y = -14$ or $5x + 2y = -26$",
                  "reason": "Adding the same number to both sides: in each equation the term in $y$ goes to the left side and the number to the right side."
                },
                {
                  "step": "At $y = 0$, $x = -\\dfrac{14}{5}$ or $x = -\\dfrac{26}{5}$.",
                  "reason": "Definition of the $x$-intercept: a line meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "At $x = 0$, $y = 7$ or $y = -13$.",
                  "reason": "Definition of the $y$-intercept: a line meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The line through $\\left(-\\dfrac{14}{5}, 0\\right)$ and $(0, 7)$ and the line through $\\left(-\\dfrac{26}{5}, 0\\right)$ and $(0, -13)$, crossing at $(-4, -3)$, are the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: each line is fixed by its two points.",
                  "figure": {
                    "file": "classifying-conics-3.svg",
                    "alt": "Two lines crossing at (−4, −3): one through (−14/5, 0) and (0, 7), the other through (−26/5, 0) and (0, −13)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $16x^2 - 25y^2 + 32x + 200y = 384$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "One line through $(-6, 0)$ and $\\left(0, \\dfrac{24}{5}\\right)$",
                  "The other line through $(4, 0)$ and $\\left(0, \\dfrac{16}{5}\\right)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $16x^2 - 25y^2 + 32x + 200y = 384$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficients of $x^2$ and $y^2$ are $16$ and $-25$, and $16 \\cdot (-25) = -400$ is below $0$, so the graph is a hyperbola or two lines.",
                  "reason": "Conic from its coefficients: when the product of the coefficients of $x^2$ and $y^2$ is above $0$, the graph is an ellipse, a point, or empty; when it is below $0$, a hyperbola or two lines."
                },
                {
                  "step": "$16(x^2 + 2x) - 25(y^2 - 8y) = 384$",
                  "reason": "Taking out a common factor: $16$ is taken out of the two terms in $x$ and $-25$ out of the two terms in $y$."
                },
                {
                  "step": "$16(x^2 + 2x + 1) - 25(y^2 - 8y + 16) = 384 + 16 - 400$",
                  "reason": "Completing the square: $1$ and $16$ are added inside the brackets, which adds $16 \\cdot 1 = 16$ and $-25 \\cdot 16 = -400$ to the left side, so both are added to the right side too."
                },
                {
                  "step": "$16(x + 1)^2 - 25(y - 4)^2 = 0$",
                  "reason": "Completing the square: $x^2 - 2hx + h^2 = (x - h)^2$, once in $x$ and once in $y$, and the numbers on the right are added."
                },
                {
                  "step": "The right side is $0$, so the graph is two lines through $(-1, 4)$.",
                  "reason": "Degenerate conic: for $a(x - h)^2 + b(y - k)^2 = r$, when $ab > 0$ the graph is an ellipse (a circle when $a = b$) if $r$ has the sign of $a$, the one point $(h, k)$ if $r = 0$, and empty if $r$ has the opposite sign; when $ab < 0$ it is a hyperbola if $r \\ne 0$ and two lines through $(h, k)$ if $r = 0$."
                },
                {
                  "step": "$16(x + 1)^2 = 25(y - 4)^2$",
                  "reason": "Adding the same number to both sides: $25(y - 4)^2$ is added to both sides."
                },
                {
                  "step": "$(4(x + 1))^2 = (5(y - 4))^2$",
                  "reason": "Power of a product: $16(x + 1)^2 = 4^2(x + 1)^2 = (4(x + 1))^2$, and the same for $25(y - 4)^2$."
                },
                {
                  "step": "Either $4(x + 1) = 5(y - 4)$ or $4(x + 1) = -5(y - 4)$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "Either $4x + 4 = 5y - 20$ or $4x + 4 = -5y + 20$",
                  "reason": "Multiplying out: the number in front of each bracket multiplies each term inside it."
                },
                {
                  "step": "So $4x - 5y = -24$ or $4x + 5y = 16$",
                  "reason": "Adding the same number to both sides: in each equation the term in $y$ goes to the left side and the number to the right side."
                },
                {
                  "step": "At $y = 0$, $x = -6$ or $x = 4$.",
                  "reason": "Definition of the $x$-intercept: a line meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "At $x = 0$, $y = \\dfrac{24}{5}$ or $y = \\dfrac{16}{5}$.",
                  "reason": "Definition of the $y$-intercept: a line meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The line through $(-6, 0)$ and $\\left(0, \\dfrac{24}{5}\\right)$ and the line through $(4, 0)$ and $\\left(0, \\dfrac{16}{5}\\right)$, crossing at $(-1, 4)$, are the graph.",
                  "reason": "The graph of $ax + by = c$ is a line: each line is fixed by its two points.",
                  "figure": {
                    "file": "classifying-conics-4.svg",
                    "alt": "Two lines crossing at (−1, 4): one through (−6, 0) and (0, 24/5), the other through (4, 0) and (0, 16/5)."
                  }
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
