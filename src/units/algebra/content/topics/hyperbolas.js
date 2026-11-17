export default {
  "number": 191,
  "title": "Hyperbolas",
  "section": 12,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "142-155"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x + 13)^2}{81} - \\dfrac{(y - 13)^2}{6} = 1$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(-4, 13)",
    "solution": [
      "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x + 13)^2}{81} - \\dfrac{(y - 13)^2}{6} = 1$.",
      "$y = 13$",
      "$\\dfrac{(x + 13)^2}{81} = 1$",
      "$(x + 13)^2 = 81$",
      "Either $x + 13 = 9$ or $x + 13 = -9$",
      "So $x = -4$ or $x = -22$",
      "The vertex with the larger $x$-coordinate is $(-4, 13)$."
    ]
  },
  "ideas": [
    {
      "name": "Hyperbola",
      "concrete": "Take the points $F_1(17, 0)$ and $F_2(-17, 0)$. The point $(8, 0)$ is $9$ from $F_1$ and $25$ from $F_2$; the point $\\left(17, \\dfrac{225}{8}\\right)$ is $\\dfrac{225}{8}$ from $F_1$ and $\\dfrac{353}{8}$ from $F_2$. For both, the larger distance minus the smaller is $16$. All the points with this difference $16$ make two curves, which meet the line through $F_1$ and $F_2$ at $(8, 0)$ and $(-8, 0)$, $16$ apart, with midpoint $(0, 0)$.",
      "general": "For two points $F_1$ and $F_2$ and a positive number $2a$ less than the distance between them, the set of points $P$ whose distances from $F_1$ and $F_2$ differ by $2a$, so that $|PF_1 - PF_2| = 2a$, is a **hyperbola** with **foci** $F_1$ and $F_2$. It has two pieces, its **branches**. The line through the foci meets it at two points, its **vertices**, and the midpoint of the vertices is its **centre**. With $c$ the distance from the centre to each focus, a point of the segment between the foci at distance $t$ from the centre is $c - t$ from one focus and $c + t$ from the other, distances that differ by $2t$, while every other point of the line through the foci has distances that differ by $2c$; so the vertices are $a$ from the centre and $2a$ apart: the **difference of focal distances** is the distance between the vertices."
    },
    {
      "name": "Standard form of a hyperbola",
      "concrete": "For the foci $(17, 0)$ and $(-17, 0)$ and the difference $16$, the centre is $(0, 0)$, $a = 8$ and $c = 17$, and $c^2 - a^2 = 225$. The hyperbola is the graph of $\\dfrac{x^2}{64} - \\dfrac{y^2}{225} = 1$. Its vertices $(8, 0)$ and $(-8, 0)$ are the points of the graph where the negative term $\\dfrac{y^2}{225}$ is $0$.",
      "general": "For numbers $h$ and $k$ and positive numbers $a$ and $b$, let $c$ be the positive number with $c^2 = a^2 + b^2$, the **focal relation**. The graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$ is the hyperbola with centre $(h, k)$, vertices $(h + a, k)$ and $(h - a, k)$, and foci $(h + c, k)$ and $(h - c, k)$; it opens left and right. The graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$ is the hyperbola with centre $(h, k)$, vertices $(h, k + a)$ and $(h, k - a)$, and foci $(h, k + c)$ and $(h, k - c)$; it opens up and down. These are the **standard forms** of a hyperbola. In each, the letter of the positive term names the direction of the vertices from the centre, and the vertices are the two points of the graph where the negative term is $0$."
    },
    {
      "name": "Asymptotes of a hyperbola",
      "concrete": "The lines $y = \\dfrac{15}{8}x$ and $y = -\\dfrac{15}{8}x$ are the asymptotes of the graph of $\\dfrac{x^2}{64} - \\dfrac{y^2}{225} = 1$. At $x = 40$ the upper half of the right branch has $y^2 = 225\\left(\\dfrac{1600}{64} - 1\\right) = 5400$, so $y = 30\\sqrt{6}$, a little below the line's $75$; farther out the gap shrinks.",
      "general": "For numbers $h$ and $k$ and positive numbers $a$ and $b$, the lines $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$ are the **asymptotes** of the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, and the lines $y - k = \\dfrac{a}{b}(x - h)$ and $y - k = -\\dfrac{a}{b}(x - h)$ are the asymptotes of the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. The graph never meets its asymptotes and comes closer and closer to them far from the centre. Both pass through the centre and through the corners of the rectangle centred on $(h, k)$, with sides parallel to the axes, that reaches $a$ from the centre toward each vertex and $b$ from the centre the other way.",
      "figure": {
        "file": "hyperbolas-32.svg",
        "alt": "The hyperbola with vertices (8, 0) and (−8, 0), opening left and right, its two asymptotes dashed through the centre (0, 0) and through the corners of the dashed rectangle with corners (8, 15), (−8, 15), (−8, −15) and (8, −15)."
      }
    },
    {
      "name": "Rectangular hyperbola",
      "concrete": "The graph of $(x - 2)(y - 3) = 9$ passes through $(5, 6)$ and $(-1, 0)$, since $3 \\cdot 3 = 9$ and $(-3) \\cdot (-3) = 9$. No point of it has $x = 2$ or $y = 3$, since there the left side is $0$. Solved for $y$, it reads $y = 3 + \\dfrac{9}{x - 2}$, which comes closer and closer to $3$ far from $x = 2$. Its asymptotes $x = 2$ and $y = 3$ are perpendicular and meet at $(2, 3)$, its centre.",
      "general": "A hyperbola whose asymptotes are perpendicular is a **rectangular hyperbola**. For numbers $h$, $k$ and $d$ with $d \\ne 0$, the graph of $(x - h)(y - k) = d$ never meets the lines $x = h$ and $y = k$. Solved for $y$ as $y = k + \\dfrac{d}{x - h}$, it has the vertical asymptote $x = h$ and the horizontal asymptote $y = k$. These asymptotes are perpendicular, and the point $(h, k)$ where they meet is the **centre** of the graph."
    }
  ],
  "kinds": [
    {
      "id": "t191-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x + 1)^2}{49} - \\dfrac{(y - 8)^2}{30} = 1$.",
            "lines": [
              {
                "step": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x + 1)^2}{49} - \\dfrac{(y - 8)^2}{30} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 8$",
                "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $y - 8 = 0$."
              },
              {
                "step": "$\\dfrac{(x + 1)^2}{49} = 1$",
                "reason": "Substituting a value: $y = 8$ makes the negative term $0$."
              },
              {
                "step": "$(x + 1)^2 = 49$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $49$."
              },
              {
                "step": "Either $x + 1 = 7$ or $x + 1 = -7$",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $49 = 7^2$."
              },
              {
                "step": "So $x = 6$ or $x = -8$",
                "reason": "Adding the same number to both sides: $1$ is taken from each side."
              },
              {
                "step": "The vertex with the larger $x$-coordinate is $(6, 8)$.",
                "reason": "Answering the question asked: of the vertices $(6, 8)$ and $(-8, 8)$, the first has the larger $x$-coordinate."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x - 1)^2}{4} - \\dfrac{(y - 14)^2}{21} = 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, 14)",
              "lines": [
                {
                  "step": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x - 1)^2}{4} - \\dfrac{(y - 14)^2}{21} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = 14$",
                  "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $y - 14 = 0$."
                },
                {
                  "step": "$\\dfrac{(x - 1)^2}{4} = 1$",
                  "reason": "Substituting a value: $y = 14$ makes the negative term $0$."
                },
                {
                  "step": "$(x - 1)^2 = 4$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4$."
                },
                {
                  "step": "Either $x - 1 = 2$ or $x - 1 = -2$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $4 = 2^2$."
                },
                {
                  "step": "So $x = 3$ or $x = -1$",
                  "reason": "Adding the same number to both sides: $1$ is added to each side."
                },
                {
                  "step": "The vertex with the larger $x$-coordinate is $(3, 14)$.",
                  "reason": "Answering the question asked: of the vertices $(3, 14)$ and $(-1, 14)$, the first has the larger $x$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x + 3)^2}{25} - \\dfrac{(y + 14)^2}{34} = 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -14)",
              "lines": [
                {
                  "step": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x + 3)^2}{25} - \\dfrac{(y + 14)^2}{34} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -14$",
                  "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $y + 14 = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 3)^2}{25} = 1$",
                  "reason": "Substituting a value: $y = -14$ makes the negative term $0$."
                },
                {
                  "step": "$(x + 3)^2 = 25$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $25$."
                },
                {
                  "step": "Either $x + 3 = 5$ or $x + 3 = -5$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $25 = 5^2$."
                },
                {
                  "step": "So $x = 2$ or $x = -8$",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                },
                {
                  "step": "The vertex with the larger $x$-coordinate is $(2, -14)$.",
                  "reason": "Answering the question asked: of the vertices $(2, -14)$ and $(-8, -14)$, the first has the larger $x$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x - 4)^2}{9} - \\dfrac{(y + 10)^2}{29} = 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(7, -10)",
              "lines": [
                {
                  "step": "Find the vertex with the larger $x$-coordinate of the graph of $\\dfrac{(x - 4)^2}{9} - \\dfrac{(y + 10)^2}{29} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -10$",
                  "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $y + 10 = 0$."
                },
                {
                  "step": "$\\dfrac{(x - 4)^2}{9} = 1$",
                  "reason": "Substituting a value: $y = -10$ makes the negative term $0$."
                },
                {
                  "step": "$(x - 4)^2 = 9$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $9$."
                },
                {
                  "step": "Either $x - 4 = 3$ or $x - 4 = -3$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $9 = 3^2$."
                },
                {
                  "step": "So $x = 7$ or $x = 1$",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                },
                {
                  "step": "The vertex with the larger $x$-coordinate is $(7, -10)$.",
                  "reason": "Answering the question asked: of the vertices $(7, -10)$ and $(1, -10)$, the first has the larger $x$-coordinate."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the vertex of the graph of $8x^2 + 48x - 5y^2 + 30y = -347$ that lies above or to the right of the other vertex.",
            "lines": [
              {
                "step": "Find the vertex of the graph of $8x^2 + 48x - 5y^2 + 30y = -347$ that lies above or to the right of the other vertex.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$8(x^2 + 6x) - 5(y^2 - 6y) = -347$",
                "reason": "Taking out a common factor: $8$ is taken out of the terms in $x$ and $5$ out of the terms in $y$."
              },
              {
                "step": "$8(x^2 + 6x + 9) - 5(y^2 - 6y) = -347 + 72$",
                "reason": "Completing the square: $9$ is added inside the first bracket, which adds $8 \\cdot 9 = 72$ to the left side, so $72$ is added to the right side too."
              },
              {
                "step": "$8(x^2 + 6x + 9) - 5(y^2 - 6y + 9) = -347 + 72 - 45$",
                "reason": "Completing the square: $9$ is added inside the second bracket, which adds $-5 \\cdot 9 = -45$ to the left side, so $-45$ is added to the right side too."
              },
              {
                "step": "$8(x + 3)^2 - 5(y - 3)^2 = -320$",
                "reason": "Completing the square: $x^2 + 6x + 9 = (x + 3)^2$ and $y^2 - 6y + 9 = (y - 3)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
              },
              {
                "step": "$\\dfrac{(y - 3)^2}{64} - \\dfrac{(x + 3)^2}{40} = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-320$, which is negative, so the term in $y$ becomes the positive one and is written first; $-320 \\div (-5) = 64$ and $-320 \\div 8 = -40$."
              },
              {
                "step": "$x = -3$",
                "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $x + 3 = 0$."
              },
              {
                "step": "$\\dfrac{(y - 3)^2}{64} = 1$",
                "reason": "Substituting a value: $x = -3$ makes the negative term $0$."
              },
              {
                "step": "$(y - 3)^2 = 64$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $64$."
              },
              {
                "step": "Either $y - 3 = 8$ or $y - 3 = -8$",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $64 = 8^2$."
              },
              {
                "step": "So $y = 11$ or $y = -5$",
                "reason": "Adding the same number to both sides: $3$ is added to each side."
              },
              {
                "step": "The vertex above the other is $(-3, 11)$.",
                "reason": "Answering the question asked: of the vertices $(-3, 11)$ and $(-3, -5)$, which share their $x$-coordinate, the first lies above the other."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the vertex of the graph of $2x^2 - 32x - 5y^2 + 60y = -268$ that lies above or to the right of the other vertex.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(8, 14)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $2x^2 - 32x - 5y^2 + 60y = -268$ that lies above or to the right of the other vertex.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(x^2 - 16x) - 5(y^2 - 12y) = -268$",
                  "reason": "Taking out a common factor: $2$ is taken out of the terms in $x$ and $5$ out of the terms in $y$."
                },
                {
                  "step": "$2(x^2 - 16x + 64) - 5(y^2 - 12y) = -268 + 128$",
                  "reason": "Completing the square: $64$ is added inside the first bracket, which adds $2 \\cdot 64 = 128$ to the left side, so $128$ is added to the right side too."
                },
                {
                  "step": "$2(x^2 - 16x + 64) - 5(y^2 - 12y + 36) = -268 + 128 - 180$",
                  "reason": "Completing the square: $36$ is added inside the second bracket, which adds $-5 \\cdot 36 = -180$ to the left side, so $-180$ is added to the right side too."
                },
                {
                  "step": "$2(x - 8)^2 - 5(y - 6)^2 = -320$",
                  "reason": "Completing the square: $x^2 - 16x + 64 = (x - 8)^2$ and $y^2 - 12y + 36 = (y - 6)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(y - 6)^2}{64} - \\dfrac{(x - 8)^2}{160} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-320$, which is negative, so the term in $y$ becomes the positive one and is written first; $-320 \\div (-5) = 64$ and $-320 \\div 2 = -160$."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $x - 8 = 0$."
                },
                {
                  "step": "$\\dfrac{(y - 6)^2}{64} = 1$",
                  "reason": "Substituting a value: $x = 8$ makes the negative term $0$."
                },
                {
                  "step": "$(y - 6)^2 = 64$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $64$."
                },
                {
                  "step": "Either $y - 6 = 8$ or $y - 6 = -8$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $64 = 8^2$."
                },
                {
                  "step": "So $y = 14$ or $y = -2$",
                  "reason": "Adding the same number to both sides: $6$ is added to each side."
                },
                {
                  "step": "The vertex above the other is $(8, 14)$.",
                  "reason": "Answering the question asked: of the vertices $(8, 14)$ and $(8, -2)$, which share their $x$-coordinate, the first lies above the other."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $8x^2 + 160x - 7y^2 + 14y = -905$ that lies above or to the right of the other vertex.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-10, 5)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $8x^2 + 160x - 7y^2 + 14y = -905$ that lies above or to the right of the other vertex.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8(x^2 + 20x) - 7(y^2 - 2y) = -905$",
                  "reason": "Taking out a common factor: $8$ is taken out of the terms in $x$ and $7$ out of the terms in $y$."
                },
                {
                  "step": "$8(x^2 + 20x + 100) - 7(y^2 - 2y) = -905 + 800$",
                  "reason": "Completing the square: $100$ is added inside the first bracket, which adds $8 \\cdot 100 = 800$ to the left side, so $800$ is added to the right side too."
                },
                {
                  "step": "$8(x^2 + 20x + 100) - 7(y^2 - 2y + 1) = -905 + 800 - 7$",
                  "reason": "Completing the square: $1$ is added inside the second bracket, which adds $-7 \\cdot 1 = -7$ to the left side, so $-7$ is added to the right side too."
                },
                {
                  "step": "$8(x + 10)^2 - 7(y - 1)^2 = -112$",
                  "reason": "Completing the square: $x^2 + 20x + 100 = (x + 10)^2$ and $y^2 - 2y + 1 = (y - 1)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(y - 1)^2}{16} - \\dfrac{(x + 10)^2}{14} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-112$, which is negative, so the term in $y$ becomes the positive one and is written first; $-112 \\div (-7) = 16$ and $-112 \\div 8 = -14$."
                },
                {
                  "step": "$x = -10$",
                  "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $x + 10 = 0$."
                },
                {
                  "step": "$\\dfrac{(y - 1)^2}{16} = 1$",
                  "reason": "Substituting a value: $x = -10$ makes the negative term $0$."
                },
                {
                  "step": "$(y - 1)^2 = 16$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $16$."
                },
                {
                  "step": "Either $y - 1 = 4$ or $y - 1 = -4$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $16 = 4^2$."
                },
                {
                  "step": "So $y = 5$ or $y = -3$",
                  "reason": "Adding the same number to both sides: $1$ is added to each side."
                },
                {
                  "step": "The vertex above the other is $(-10, 5)$.",
                  "reason": "Answering the question asked: of the vertices $(-10, 5)$ and $(-10, -3)$, which share their $x$-coordinate, the first lies above the other."
                }
              ]
            },
            {
              "prompt": "Find the vertex of the graph of $2x^2 + 36x - 9y^2 - 54y = -405$ that lies above or to the right of the other vertex.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-9, 3)",
              "lines": [
                {
                  "step": "Find the vertex of the graph of $2x^2 + 36x - 9y^2 - 54y = -405$ that lies above or to the right of the other vertex.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(x^2 + 18x) - 9(y^2 + 6y) = -405$",
                  "reason": "Taking out a common factor: $2$ is taken out of the terms in $x$ and $9$ out of the terms in $y$."
                },
                {
                  "step": "$2(x^2 + 18x + 81) - 9(y^2 + 6y) = -405 + 162$",
                  "reason": "Completing the square: $81$ is added inside the first bracket, which adds $2 \\cdot 81 = 162$ to the left side, so $162$ is added to the right side too."
                },
                {
                  "step": "$2(x^2 + 18x + 81) - 9(y^2 + 6y + 9) = -405 + 162 - 81$",
                  "reason": "Completing the square: $9$ is added inside the second bracket, which adds $-9 \\cdot 9 = -81$ to the left side, so $-81$ is added to the right side too."
                },
                {
                  "step": "$2(x + 9)^2 - 9(y + 3)^2 = -324$",
                  "reason": "Completing the square: $x^2 + 18x + 81 = (x + 9)^2$ and $y^2 + 6y + 9 = (y + 3)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(y + 3)^2}{36} - \\dfrac{(x + 9)^2}{162} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-324$, which is negative, so the term in $y$ becomes the positive one and is written first; $-324 \\div (-9) = 36$ and $-324 \\div 2 = -162$."
                },
                {
                  "step": "$x = -9$",
                  "reason": "Vertices of a hyperbola: the vertices are the two points of the graph where the negative term is $0$, and here that term is $0$ when $x + 9 = 0$."
                },
                {
                  "step": "$\\dfrac{(y + 3)^2}{36} = 1$",
                  "reason": "Substituting a value: $x = -9$ makes the negative term $0$."
                },
                {
                  "step": "$(y + 3)^2 = 36$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $36$."
                },
                {
                  "step": "Either $y + 3 = 6$ or $y + 3 = -6$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $36 = 6^2$."
                },
                {
                  "step": "So $y = 3$ or $y = -9$",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                },
                {
                  "step": "The vertex above the other is $(-9, 3)$.",
                  "reason": "Answering the question asked: of the vertices $(-9, 3)$ and $(-9, -9)$, which share their $x$-coordinate, the first lies above the other."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 12)^2}{37} - \\dfrac{(x + 4)^2}{15} = 1$.",
            "lines": [
              {
                "step": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 12)^2}{37} - \\dfrac{(x + 4)^2}{15} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = -4$, $k = -12$, $a^2 = 37$, $b^2 = 15$",
                "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$c^2 = 52$",
                "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $37 + 15 = 52$."
              },
              {
                "step": "$c = \\sqrt{52}$",
                "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $52$."
              },
              {
                "step": "$c = 2\\sqrt{13}$",
                "reason": "Simplest radical form: $\\sqrt{52} = \\sqrt{4}\\sqrt{13} = 2\\sqrt{13}$."
              },
              {
                "step": "The foci are $(-4, -12 + 2\\sqrt{13})$ and $(-4, -12 - 2\\sqrt{13})$.",
                "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the vertical line $x = -4$."
              },
              {
                "step": "The focus with the larger $y$-coordinate is $(-4, -12 + 2\\sqrt{13})$.",
                "reason": "Answering the question asked: $c$ is positive, so $k + c$ is the larger $y$-coordinate."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 8)^2}{27} - \\dfrac{(x - 8)^2}{49} = 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(8, -8+2*sqrt(19))",
              "lines": [
                {
                  "step": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 8)^2}{27} - \\dfrac{(x - 8)^2}{49} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 8$, $k = -8$, $a^2 = 27$, $b^2 = 49$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$c^2 = 76$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $27 + 49 = 76$."
                },
                {
                  "step": "$c = \\sqrt{76}$",
                  "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $76$."
                },
                {
                  "step": "$c = 2\\sqrt{19}$",
                  "reason": "Simplest radical form: $\\sqrt{76} = \\sqrt{4}\\sqrt{19} = 2\\sqrt{19}$."
                },
                {
                  "step": "The foci are $(8, -8 + 2\\sqrt{19})$ and $(8, -8 - 2\\sqrt{19})$.",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the vertical line $x = 8$."
                },
                {
                  "step": "The focus with the larger $y$-coordinate is $(8, -8 + 2\\sqrt{19})$.",
                  "reason": "Answering the question asked: $c$ is positive, so $k + c$ is the larger $y$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 13)^2}{38} - \\dfrac{(x + 1)^2}{37} = 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, -13+5*sqrt(3))",
              "lines": [
                {
                  "step": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 13)^2}{38} - \\dfrac{(x + 1)^2}{37} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -1$, $k = -13$, $a^2 = 38$, $b^2 = 37$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$c^2 = 75$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $38 + 37 = 75$."
                },
                {
                  "step": "$c = \\sqrt{75}$",
                  "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $75$."
                },
                {
                  "step": "$c = 5\\sqrt{3}$",
                  "reason": "Simplest radical form: $\\sqrt{75} = \\sqrt{25}\\sqrt{3} = 5\\sqrt{3}$."
                },
                {
                  "step": "The foci are $(-1, -13 + 5\\sqrt{3})$ and $(-1, -13 - 5\\sqrt{3})$.",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the vertical line $x = -1$."
                },
                {
                  "step": "The focus with the larger $y$-coordinate is $(-1, -13 + 5\\sqrt{3})$.",
                  "reason": "Answering the question asked: $c$ is positive, so $k + c$ is the larger $y$-coordinate."
                }
              ]
            },
            {
              "prompt": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 7)^2}{34} - \\dfrac{(x + 10)^2}{41} = 1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-10, -7+5*sqrt(3))",
              "lines": [
                {
                  "step": "Find the focus with the larger $y$-coordinate of the graph of $\\dfrac{(y + 7)^2}{34} - \\dfrac{(x + 10)^2}{41} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -10$, $k = -7$, $a^2 = 34$, $b^2 = 41$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$c^2 = 75$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $34 + 41 = 75$."
                },
                {
                  "step": "$c = \\sqrt{75}$",
                  "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $75$."
                },
                {
                  "step": "$c = 5\\sqrt{3}$",
                  "reason": "Simplest radical form: $\\sqrt{75} = \\sqrt{25}\\sqrt{3} = 5\\sqrt{3}$."
                },
                {
                  "step": "The foci are $(-10, -7 + 5\\sqrt{3})$ and $(-10, -7 - 5\\sqrt{3})$.",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the vertical line $x = -10$."
                },
                {
                  "step": "The focus with the larger $y$-coordinate is $(-10, -7 + 5\\sqrt{3})$.",
                  "reason": "Answering the question asked: $c$ is positive, so $k + c$ is the larger $y$-coordinate."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the focus of the graph of $7x^2 - 154x - 2y^2 - 20y = -755$ that lies above or to the right of the other focus.",
            "lines": [
              {
                "step": "Find the focus of the graph of $7x^2 - 154x - 2y^2 - 20y = -755$ that lies above or to the right of the other focus.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7(x^2 - 22x) - 2(y^2 + 10y) = -755$",
                "reason": "Taking out a common factor: $7$ is taken out of the terms in $x$ and $2$ out of the terms in $y$."
              },
              {
                "step": "$7(x^2 - 22x + 121) - 2(y^2 + 10y) = -755 + 847$",
                "reason": "Completing the square: $121$ is added inside the first bracket, which adds $7 \\cdot 121 = 847$ to the left side, so $847$ is added to the right side too."
              },
              {
                "step": "$7(x^2 - 22x + 121) - 2(y^2 + 10y + 25) = -755 + 847 - 50$",
                "reason": "Completing the square: $25$ is added inside the second bracket, which adds $-2 \\cdot 25 = -50$ to the left side, so $-50$ is added to the right side too."
              },
              {
                "step": "$7(x - 11)^2 - 2(y + 5)^2 = 42$",
                "reason": "Completing the square: $x^2 - 22x + 121 = (x - 11)^2$ and $y^2 + 10y + 25 = (y + 5)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
              },
              {
                "step": "$\\dfrac{(x - 11)^2}{6} - \\dfrac{(y + 5)^2}{21} = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $42$, and $42 \\div 7 = 6$ and $42 \\div 2 = 21$."
              },
              {
                "step": "$h = 11$, $k = -5$, $a^2 = 6$, $b^2 = 21$",
                "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$c^2 = 27$",
                "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $6 + 21 = 27$."
              },
              {
                "step": "$c = \\sqrt{27}$",
                "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $27$."
              },
              {
                "step": "$c = 3\\sqrt{3}$",
                "reason": "Simplest radical form: $\\sqrt{27} = \\sqrt{9}\\sqrt{3} = 3\\sqrt{3}$."
              },
              {
                "step": "The foci are $(11 + 3\\sqrt{3}, -5)$ and $(11 - 3\\sqrt{3}, -5)$.",
                "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the horizontal line $y = -5$."
              },
              {
                "step": "The focus to the right of the other is $(11 + 3\\sqrt{3}, -5)$.",
                "reason": "Answering the question asked: the foci share their $y$-coordinate, and $c$ is positive, so $(h + c, k)$ lies to the right of $(h - c, k)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the focus of the graph of $7x^2 - 28x - 11y^2 - 242y = 1765$ that lies above or to the right of the other focus.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2+6*sqrt(3), -11)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $7x^2 - 28x - 11y^2 - 242y = 1765$ that lies above or to the right of the other focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7(x^2 - 4x) - 11(y^2 + 22y) = 1765$",
                  "reason": "Taking out a common factor: $7$ is taken out of the terms in $x$ and $11$ out of the terms in $y$."
                },
                {
                  "step": "$7(x^2 - 4x + 4) - 11(y^2 + 22y) = 1765 + 28$",
                  "reason": "Completing the square: $4$ is added inside the first bracket, which adds $7 \\cdot 4 = 28$ to the left side, so $28$ is added to the right side too."
                },
                {
                  "step": "$7(x^2 - 4x + 4) - 11(y^2 + 22y + 121) = 1765 + 28 - 1331$",
                  "reason": "Completing the square: $121$ is added inside the second bracket, which adds $-11 \\cdot 121 = -1331$ to the left side, so $-1331$ is added to the right side too."
                },
                {
                  "step": "$7(x - 2)^2 - 11(y + 11)^2 = 462$",
                  "reason": "Completing the square: $x^2 - 4x + 4 = (x - 2)^2$ and $y^2 + 22y + 121 = (y + 11)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 2)^2}{66} - \\dfrac{(y + 11)^2}{42} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $462$, and $462 \\div 7 = 66$ and $462 \\div 11 = 42$."
                },
                {
                  "step": "$h = 2$, $k = -11$, $a^2 = 66$, $b^2 = 42$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$c^2 = 108$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $66 + 42 = 108$."
                },
                {
                  "step": "$c = \\sqrt{108}$",
                  "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $108$."
                },
                {
                  "step": "$c = 6\\sqrt{3}$",
                  "reason": "Simplest radical form: $\\sqrt{108} = \\sqrt{36}\\sqrt{3} = 6\\sqrt{3}$."
                },
                {
                  "step": "The foci are $(2 + 6\\sqrt{3}, -11)$ and $(2 - 6\\sqrt{3}, -11)$.",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the horizontal line $y = -11$."
                },
                {
                  "step": "The focus to the right of the other is $(2 + 6\\sqrt{3}, -11)$.",
                  "reason": "Answering the question asked: the foci share their $y$-coordinate, and $c$ is positive, so $(h + c, k)$ lies to the right of $(h - c, k)$."
                }
              ]
            },
            {
              "prompt": "Find the focus of the graph of $5x^2 + 20x - 4y^2 + 72y = 424$ that lies above or to the right of the other focus.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-2+3*sqrt(6), 9)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $5x^2 + 20x - 4y^2 + 72y = 424$ that lies above or to the right of the other focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(x^2 + 4x) - 4(y^2 - 18y) = 424$",
                  "reason": "Taking out a common factor: $5$ is taken out of the terms in $x$ and $4$ out of the terms in $y$."
                },
                {
                  "step": "$5(x^2 + 4x + 4) - 4(y^2 - 18y) = 424 + 20$",
                  "reason": "Completing the square: $4$ is added inside the first bracket, which adds $5 \\cdot 4 = 20$ to the left side, so $20$ is added to the right side too."
                },
                {
                  "step": "$5(x^2 + 4x + 4) - 4(y^2 - 18y + 81) = 424 + 20 - 324$",
                  "reason": "Completing the square: $81$ is added inside the second bracket, which adds $-4 \\cdot 81 = -324$ to the left side, so $-324$ is added to the right side too."
                },
                {
                  "step": "$5(x + 2)^2 - 4(y - 9)^2 = 120$",
                  "reason": "Completing the square: $x^2 + 4x + 4 = (x + 2)^2$ and $y^2 - 18y + 81 = (y - 9)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x + 2)^2}{24} - \\dfrac{(y - 9)^2}{30} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $120$, and $120 \\div 5 = 24$ and $120 \\div 4 = 30$."
                },
                {
                  "step": "$h = -2$, $k = 9$, $a^2 = 24$, $b^2 = 30$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$c^2 = 54$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $24 + 30 = 54$."
                },
                {
                  "step": "$c = \\sqrt{54}$",
                  "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $54$."
                },
                {
                  "step": "$c = 3\\sqrt{6}$",
                  "reason": "Simplest radical form: $\\sqrt{54} = \\sqrt{9}\\sqrt{6} = 3\\sqrt{6}$."
                },
                {
                  "step": "The foci are $(-2 + 3\\sqrt{6}, 9)$ and $(-2 - 3\\sqrt{6}, 9)$.",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the horizontal line $y = 9$."
                },
                {
                  "step": "The focus to the right of the other is $(-2 + 3\\sqrt{6}, 9)$.",
                  "reason": "Answering the question asked: the foci share their $y$-coordinate, and $c$ is positive, so $(h + c, k)$ lies to the right of $(h - c, k)$."
                }
              ]
            },
            {
              "prompt": "Find the focus of the graph of $10x^2 - 140x - 3y^2 + 42y = -223$ that lies above or to the right of the other focus.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(7+2*sqrt(13), 7)",
              "lines": [
                {
                  "step": "Find the focus of the graph of $10x^2 - 140x - 3y^2 + 42y = -223$ that lies above or to the right of the other focus.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10(x^2 - 14x) - 3(y^2 - 14y) = -223$",
                  "reason": "Taking out a common factor: $10$ is taken out of the terms in $x$ and $3$ out of the terms in $y$."
                },
                {
                  "step": "$10(x^2 - 14x + 49) - 3(y^2 - 14y) = -223 + 490$",
                  "reason": "Completing the square: $49$ is added inside the first bracket, which adds $10 \\cdot 49 = 490$ to the left side, so $490$ is added to the right side too."
                },
                {
                  "step": "$10(x^2 - 14x + 49) - 3(y^2 - 14y + 49) = -223 + 490 - 147$",
                  "reason": "Completing the square: $49$ is added inside the second bracket, which adds $-3 \\cdot 49 = -147$ to the left side, so $-147$ is added to the right side too."
                },
                {
                  "step": "$10(x - 7)^2 - 3(y - 7)^2 = 120$",
                  "reason": "Completing the square: $x^2 - 14x + 49 = (x - 7)^2$ and $y^2 - 14y + 49 = (y - 7)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(x - 7)^2}{12} - \\dfrac{(y - 7)^2}{40} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $120$, and $120 \\div 10 = 12$ and $120 \\div 3 = 40$."
                },
                {
                  "step": "$h = 7$, $k = 7$, $a^2 = 12$, $b^2 = 40$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$c^2 = 52$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $12 + 40 = 52$."
                },
                {
                  "step": "$c = \\sqrt{52}$",
                  "reason": "Positive square root: $c$ is the distance from the centre to a focus, so it is the positive number whose square is $52$."
                },
                {
                  "step": "$c = 2\\sqrt{13}$",
                  "reason": "Simplest radical form: $\\sqrt{52} = \\sqrt{4}\\sqrt{13} = 2\\sqrt{13}$."
                },
                {
                  "step": "The foci are $(7 + 2\\sqrt{13}, 7)$ and $(7 - 2\\sqrt{13}, 7)$.",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices, here the horizontal line $y = 7$."
                },
                {
                  "step": "The focus to the right of the other is $(7 + 2\\sqrt{13}, 7)$.",
                  "reason": "Answering the question asked: the foci share their $y$-coordinate, and $c$ is positive, so $(h + c, k)$ lies to the right of $(h - c, k)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t191-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(5, 6)$ and $(19, 6)$ and foci $(4, 6)$ and $(20, 6)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
            "lines": [
              {
                "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(5, 6)$ and $(19, 6)$ and foci $(4, 6)$ and $(20, 6)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $\\left(\\dfrac{5 + 19}{2}, \\dfrac{6 + 6}{2}\\right) = (12, 6)$, so $h = 12$ and $k = 6$.",
                "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
              },
              {
                "step": "$a = 19 - 12 = 7$",
                "reason": "Standard form of a hyperbola: the vertices are $(h + a, k)$ and $(h - a, k)$, so $a$ is the distance from the centre to a vertex."
              },
              {
                "step": "$c = 20 - 12 = 8$",
                "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices."
              },
              {
                "step": "$b^2 = 8^2 - 7^2 = 15$",
                "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, so $b^2 = c^2 - a^2$."
              },
              {
                "step": "$b = \\sqrt{15}$",
                "reason": "Positive square root: $b$ is the positive number whose square is $15$."
              },
              {
                "step": "$h = 12$, $k = 6$, $a = 7$, $b = \\sqrt{15}$",
                "reason": "Answering the question asked: the four numbers found, each in its place."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-14, -13)$ and $(-8, -13)$ and foci $(-15, -13)$ and $(-7, -13)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -11, k = -13, a = 3, b = sqrt(7)",
              "lines": [
                {
                  "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-14, -13)$ and $(-8, -13)$ and foci $(-15, -13)$ and $(-7, -13)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-14 + (-8)}{2}, \\dfrac{-13 + (-13)}{2}\\right) = (-11, -13)$, so $h = -11$ and $k = -13$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = -8 - (-11) = 3$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h + a, k)$ and $(h - a, k)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "$c = -7 - (-11) = 4$",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices."
                },
                {
                  "step": "$b^2 = 4^2 - 3^2 = 7$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, so $b^2 = c^2 - a^2$."
                },
                {
                  "step": "$b = \\sqrt{7}$",
                  "reason": "Positive square root: $b$ is the positive number whose square is $7$."
                },
                {
                  "step": "$h = -11$, $k = -13$, $a = 3$, $b = \\sqrt{7}$",
                  "reason": "Answering the question asked: the four numbers found, each in its place."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-20, 11)$ and $(-4, 11)$ and foci $(-27, 11)$ and $(3, 11)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -12, k = 11, a = 8, b = sqrt(161)",
              "lines": [
                {
                  "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-20, 11)$ and $(-4, 11)$ and foci $(-27, 11)$ and $(3, 11)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-20 + (-4)}{2}, \\dfrac{11 + 11}{2}\\right) = (-12, 11)$, so $h = -12$ and $k = 11$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = -4 - (-12) = 8$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h + a, k)$ and $(h - a, k)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "$c = 3 - (-12) = 15$",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices."
                },
                {
                  "step": "$b^2 = 15^2 - 8^2 = 161$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, so $b^2 = c^2 - a^2$."
                },
                {
                  "step": "$b = \\sqrt{161}$",
                  "reason": "Positive square root: $b$ is the positive number whose square is $161$."
                },
                {
                  "step": "$h = -12$, $k = 11$, $a = 8$, $b = \\sqrt{161}$",
                  "reason": "Answering the question asked: the four numbers found, each in its place."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-1, 12)$ and $(11, 12)$ and foci $(-2, 12)$ and $(12, 12)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 5, k = 12, a = 6, b = sqrt(13)",
              "lines": [
                {
                  "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-1, 12)$ and $(11, 12)$ and foci $(-2, 12)$ and $(12, 12)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-1 + 11}{2}, \\dfrac{12 + 12}{2}\\right) = (5, 12)$, so $h = 5$ and $k = 12$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 11 - 5 = 6$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h + a, k)$ and $(h - a, k)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "$c = 12 - 5 = 7$",
                  "reason": "Focal relation of a hyperbola: the foci lie $c$ from the centre on the line through the vertices."
                },
                {
                  "step": "$b^2 = 7^2 - 6^2 = 13$",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, so $b^2 = c^2 - a^2$."
                },
                {
                  "step": "$b = \\sqrt{13}$",
                  "reason": "Positive square root: $b$ is the positive number whose square is $13$."
                },
                {
                  "step": "$h = 5$, $k = 12$, $a = 6$, $b = \\sqrt{13}$",
                  "reason": "Answering the question asked: the four numbers found, each in its place."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-3, -18)$ and $(-3, -4)$ through the point $(-11, -32)$ is the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$.",
            "lines": [
              {
                "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-3, -18)$ and $(-3, -4)$ through the point $(-11, -32)$ is the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $\\left(\\dfrac{-3 + (-3)}{2}, \\dfrac{-18 + (-4)}{2}\\right) = (-3, -11)$, so $h = -3$ and $k = -11$.",
                "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
              },
              {
                "step": "$a = -4 - (-11) = 7$",
                "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
              },
              {
                "step": "$\\dfrac{(-32 - (-11))^2}{7^2} - \\dfrac{(-11 - (-3))^2}{b^2} = 1$",
                "reason": "Substituting a value: the point $(-11, -32)$ lies on the graph, so its coordinates satisfy the equation, with $h$, $k$ and $a$ put in."
              },
              {
                "step": "$9 - \\dfrac{64}{b^2} = 1$",
                "reason": "Order of operations: the brackets first, $(-32 - (-11))^2 = 441$ and $(-11 - (-3))^2 = 64$, then $441 \\div 49 = 9$."
              },
              {
                "step": "$\\dfrac{64}{b^2} = 8$",
                "reason": "Adding the same number to both sides: $\\dfrac{64}{b^2} - 1$ is added to each side."
              },
              {
                "step": "$64 = 8b^2$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $b^2$."
              },
              {
                "step": "$b^2 = 8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              },
              {
                "step": "$b = \\sqrt{8}$",
                "reason": "Positive square root: $b$ is the positive number whose square is $8$."
              },
              {
                "step": "$b = 2\\sqrt{2}$",
                "reason": "Simplest radical form: $\\sqrt{8} = \\sqrt{4}\\sqrt{2} = 2\\sqrt{2}$."
              },
              {
                "step": "$h = -3$, $k = -11$, $a = 7$, $b = 2\\sqrt{2}$",
                "reason": "Answering the question asked: the four numbers found, each in its place."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-11, 1)$ and $(-11, 9)$ through the point $(-39, -7)$ is the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = -11, k = 5, a = 4, b = 7*sqrt(2)",
              "lines": [
                {
                  "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-11, 1)$ and $(-11, 9)$ through the point $(-39, -7)$ is the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-11 + (-11)}{2}, \\dfrac{1 + 9}{2}\\right) = (-11, 5)$, so $h = -11$ and $k = 5$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 9 - 5 = 4$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "$\\dfrac{(-7 - 5)^2}{4^2} - \\dfrac{(-39 - (-11))^2}{b^2} = 1$",
                  "reason": "Substituting a value: the point $(-39, -7)$ lies on the graph, so its coordinates satisfy the equation, with $h$, $k$ and $a$ put in."
                },
                {
                  "step": "$9 - \\dfrac{784}{b^2} = 1$",
                  "reason": "Order of operations: the brackets first, $(-7 - 5)^2 = 144$ and $(-39 - (-11))^2 = 784$, then $144 \\div 16 = 9$."
                },
                {
                  "step": "$\\dfrac{784}{b^2} = 8$",
                  "reason": "Adding the same number to both sides: $\\dfrac{784}{b^2} - 1$ is added to each side."
                },
                {
                  "step": "$784 = 8b^2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $b^2$."
                },
                {
                  "step": "$b^2 = 98$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$b = \\sqrt{98}$",
                  "reason": "Positive square root: $b$ is the positive number whose square is $98$."
                },
                {
                  "step": "$b = 7\\sqrt{2}$",
                  "reason": "Simplest radical form: $\\sqrt{98} = \\sqrt{49}\\sqrt{2} = 7\\sqrt{2}$."
                },
                {
                  "step": "$h = -11$, $k = 5$, $a = 4$, $b = 7\\sqrt{2}$",
                  "reason": "Answering the question asked: the four numbers found, each in its place."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-4, -10)$ and $(6, -10)$ through the point $(-24, -34)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 1, k = -10, a = 5, b = 2*sqrt(6)",
              "lines": [
                {
                  "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(-4, -10)$ and $(6, -10)$ through the point $(-24, -34)$ is the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-4 + 6}{2}, \\dfrac{-10 + (-10)}{2}\\right) = (1, -10)$, so $h = 1$ and $k = -10$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 6 - 1 = 5$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h + a, k)$ and $(h - a, k)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "$\\dfrac{(-24 - 1)^2}{5^2} - \\dfrac{(-34 - (-10))^2}{b^2} = 1$",
                  "reason": "Substituting a value: the point $(-24, -34)$ lies on the graph, so its coordinates satisfy the equation, with $h$, $k$ and $a$ put in."
                },
                {
                  "step": "$25 - \\dfrac{576}{b^2} = 1$",
                  "reason": "Order of operations: the brackets first, $(-24 - 1)^2 = 625$ and $(-34 - (-10))^2 = 576$, then $625 \\div 25 = 25$."
                },
                {
                  "step": "$\\dfrac{576}{b^2} = 24$",
                  "reason": "Adding the same number to both sides: $\\dfrac{576}{b^2} - 1$ is added to each side."
                },
                {
                  "step": "$576 = 24b^2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $b^2$."
                },
                {
                  "step": "$b^2 = 24$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $24$."
                },
                {
                  "step": "$b = \\sqrt{24}$",
                  "reason": "Positive square root: $b$ is the positive number whose square is $24$."
                },
                {
                  "step": "$b = 2\\sqrt{6}$",
                  "reason": "Simplest radical form: $\\sqrt{24} = \\sqrt{4}\\sqrt{6} = 2\\sqrt{6}$."
                },
                {
                  "step": "$h = 1$, $k = -10$, $a = 5$, $b = 2\\sqrt{6}$",
                  "reason": "Answering the question asked: the four numbers found, each in its place."
                }
              ]
            },
            {
              "prompt": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(10, 5)$ and $(10, 13)$ through the point $(22, 1)$ is the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "h = 10, k = 9, a = 4, b = 4*sqrt(3)",
              "lines": [
                {
                  "step": "Find $h$, $k$, $a$ and $b$, with $a$ and $b$ positive, for which the hyperbola with vertices $(10, 5)$ and $(10, 13)$ through the point $(22, 1)$ is the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{10 + 10}{2}, \\dfrac{5 + 13}{2}\\right) = (10, 9)$, so $h = 10$ and $k = 9$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 13 - 9 = 4$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "$\\dfrac{(1 - 9)^2}{4^2} - \\dfrac{(22 - 10)^2}{b^2} = 1$",
                  "reason": "Substituting a value: the point $(22, 1)$ lies on the graph, so its coordinates satisfy the equation, with $h$, $k$ and $a$ put in."
                },
                {
                  "step": "$4 - \\dfrac{144}{b^2} = 1$",
                  "reason": "Order of operations: the brackets first, $(1 - 9)^2 = 64$ and $(22 - 10)^2 = 144$, then $64 \\div 16 = 4$."
                },
                {
                  "step": "$\\dfrac{144}{b^2} = 3$",
                  "reason": "Adding the same number to both sides: $\\dfrac{144}{b^2} - 1$ is added to each side."
                },
                {
                  "step": "$144 = 3b^2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $b^2$."
                },
                {
                  "step": "$b^2 = 48$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$b = \\sqrt{48}$",
                  "reason": "Positive square root: $b$ is the positive number whose square is $48$."
                },
                {
                  "step": "$b = 4\\sqrt{3}$",
                  "reason": "Simplest radical form: $\\sqrt{48} = \\sqrt{16}\\sqrt{3} = 4\\sqrt{3}$."
                },
                {
                  "step": "$h = 10$, $k = 9$, $a = 4$, $b = 4\\sqrt{3}$",
                  "reason": "Answering the question asked: the four numbers found, each in its place."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t191-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the foci of the graph of $12x^2 + 48x - 13y^2 + 286y = 2461$, and write that line right.",
            "given": [
              "$12x^2 + 48x - 13y^2 + 286y = 2461$",
              "$12(x^2 + 4x) - 13(y^2 - 22y) = 2461$",
              "$12(x^2 + 4x + 4) - 13(y^2 - 22y) = 2461 + 48$",
              "$12(x^2 + 4x + 4) - 13(y^2 - 22y + 121) = 2461 + 48 - 1573$",
              "$12(x + 2)^2 - 13(y + 11)^2 = 936$",
              "$\\dfrac{(x + 2)^2}{78} - \\dfrac{(y + 11)^2}{72} = 1$",
              "$h = -2$, $k = -11$, $a^2 = 78$, $b^2 = 72$",
              "$c^2 = 78 + 72 = 150$",
              "$c = \\sqrt{150}$",
              "$c = 5\\sqrt{6}$",
              "The foci are $(-2 + 5\\sqrt{6}, -11)$ and $(-2 - 5\\sqrt{6}, -11)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the foci of the graph of $12x^2 + 48x - 13y^2 + 286y = 2461$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 5 writes $y^2 - 22y + 121$ as $(y + 11)^2$.",
                "reason": "A sign lost: $(y + 11)^2$ multiplies out to $y^2 + 22y + 121$, and the middle term has the wrong sign."
              },
              {
                "step": "Line 5 written right is $12(x + 2)^2 - 13(y - 11)^2 = 936$.",
                "reason": "Completing the square: $y^2 - 22y + 121 = (y - 11)^2$, half of $-22$ being $-11$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $14x^2 + 196x - 11y^2 + 154y = 1085$, and write that line right.",
              "given": [
                "$14x^2 + 196x - 11y^2 + 154y = 1085$",
                "$14(x^2 + 14x) - 11(y^2 - 14y) = 1085$",
                "$14(x^2 + 14x + 49) - 11(y^2 - 14y) = 1085 + 686$",
                "$14(x^2 + 14x + 49) - 11(y^2 - 14y + 49) = 1085 + 686 + 539$",
                "$14(x + 7)^2 - 11(y - 7)^2 = 2310$",
                "$\\dfrac{(x + 7)^2}{165} - \\dfrac{(y - 7)^2}{210} = 1$",
                "$h = -7$, $k = 7$, $a^2 = 165$, $b^2 = 210$",
                "$c^2 = 165 + 210 = 375$",
                "$c = \\sqrt{375}$",
                "$c = 5\\sqrt{15}$",
                "The foci are $(-7 + 5\\sqrt{15}, 7)$ and $(-7 - 5\\sqrt{15}, 7)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 14*(x^2+14*x+49)-11*(y^2-14*y+49) = 1085+686-539",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $14x^2 + 196x - 11y^2 + 154y = 1085$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $539$ to the right side, but completing the square inside $-11(\\ldots)$ adds $-11 \\cdot 49 = -539$ to the left side.",
                  "reason": "A sign lost: a number added inside a bracket with a minus sign in front adds a negative amount to that side, so the same negative amount goes on the right."
                },
                {
                  "step": "Line 4 written right is $14(x^2 + 14x + 49) - 11(y^2 - 14y + 49) = 1085 + 686 - 539$.",
                  "reason": "Completing the square: $49$ is added inside the second bracket, which adds $-11 \\cdot 49 = -539$ to the left side, so $-539$ is added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $13x^2 + 52x - 12y^2 + 240y - 2396 = 0$, and write that line right.",
              "given": [
                "$13x^2 + 52x - 12y^2 + 240y - 2396 = 0$",
                "$13x^2 + 52x - 12y^2 + 240y = 2396$",
                "$13(x^2 + 4x) - 12(y^2 - 20y) = 2396$",
                "$13(x^2 + 4x + 4) - 12(y^2 - 20y) = 2396 + 52$",
                "$13(x^2 + 4x + 4) - 12(y^2 - 20y + 100) = 2396 + 52 - 1200$",
                "$13(x - 2)^2 - 12(y - 10)^2 = 1248$",
                "$\\dfrac{(x - 2)^2}{96} - \\dfrac{(y - 10)^2}{104} = 1$",
                "$h = 2$, $k = 10$, $a^2 = 96$, $b^2 = 104$",
                "$c^2 = 96 + 104 = 200$",
                "$c = \\sqrt{200}$",
                "$c = 10\\sqrt{2}$",
                "The foci are $(2 + 10\\sqrt{2}, 10)$ and $(2 - 10\\sqrt{2}, 10)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 13*(x+2)^2-12*(y-10)^2 = 1248",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $13x^2 + 52x - 12y^2 + 240y - 2396 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 6 writes $x^2 + 4x + 4$ as $(x - 2)^2$.",
                  "reason": "A sign lost: $(x - 2)^2$ multiplies out to $x^2 - 4x + 4$, and the middle term has the wrong sign."
                },
                {
                  "step": "Line 6 written right is $13(x + 2)^2 - 12(y - 10)^2 = 1248$.",
                  "reason": "Completing the square: $x^2 + 4x + 4 = (x + 2)^2$, half of $4$ being $2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $12x^2 + 144x - 11y^2 - 264y = 1680$, and write that line right.",
              "given": [
                "$12x^2 + 144x - 11y^2 - 264y = 1680$",
                "$12(x^2 + 12x) - 11(y^2 + 24y) = 1680$",
                "$12(x^2 + 12x + 36) - 11(y^2 + 24y) = 1680 + 432$",
                "$12(x^2 + 12x + 36) - 11(y^2 + 24y + 144) = 1680 + 432 + 1584$",
                "$12(x + 6)^2 - 11(y + 12)^2 = 3696$",
                "$\\dfrac{(x + 6)^2}{308} - \\dfrac{(y + 12)^2}{336} = 1$",
                "$h = -6$, $k = -12$, $a^2 = 308$, $b^2 = 336$",
                "$c^2 = 308 + 336 = 644$",
                "$c = \\sqrt{644}$",
                "$c = 2\\sqrt{161}$",
                "The foci are $(-6 + 2\\sqrt{161}, -12)$ and $(-6 - 2\\sqrt{161}, -12)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 12*(x^2+12*x+36)-11*(y^2+24*y+144) = 1680+432-1584",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $12x^2 + 144x - 11y^2 - 264y = 1680$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $1584$ to the right side, but completing the square inside $-11(\\ldots)$ adds $-11 \\cdot 144 = -1584$ to the left side.",
                  "reason": "A sign lost: a number added inside a bracket with a minus sign in front adds a negative amount to that side, so the same negative amount goes on the right."
                },
                {
                  "step": "Line 4 written right is $12(x^2 + 12x + 36) - 11(y^2 + 24y + 144) = 1680 + 432 - 1584$.",
                  "reason": "Completing the square: $144$ is added inside the second bracket, which adds $-11 \\cdot 144 = -1584$ to the left side, so $-1584$ is added to the right side too."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the foci of the graph of $13x^2 - 26x - 5y^2 + 110y = 1047$, and write that line right.",
            "given": [
              "$13x^2 - 26x - 5y^2 + 110y = 1047$",
              "$13(x^2 - 2x) - 5(y^2 - 22y) = 1047$",
              "$13(x^2 - 2x) - 5(y^2 - 22y) = 1047 + 13 = 1060$",
              "$13(x^2 - 2x + 1) - 5(y^2 - 22y + 121) = 1060 - 605 = 455$",
              "$13(x - 1)^2 - 5(y - 11)^2 = 455$",
              "$\\dfrac{(x - 1)^2}{35} - \\dfrac{(y - 11)^2}{91} = 1$",
              "$h = 1$, $k = 11$, $a^2 = 35$, $b^2 = 91$",
              "$c^2 = 35 + 91 = 126$",
              "$c = \\sqrt{126}$",
              "$c = 3\\sqrt{14}$",
              "The foci are $(1 + 3\\sqrt{14}, 11)$ and $(1 - 3\\sqrt{14}, 11)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the foci of the graph of $13x^2 - 26x - 5y^2 + 110y = 1047$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 adds $13$ to the right side only and runs on with a second equals sign.",
                "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same amount."
              },
              {
                "step": "Line 3 written right is $13(x^2 - 2x + 1) - 5(y^2 - 22y) = 1047 + 13$.",
                "reason": "Completing the square: $1$ is added inside the first bracket, which adds $13 \\cdot 1 = 13$ to the left side, so $13$ is added to the right side too; the right side may also be written as $1060$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $15x^2 + 30x - 11y^2 + 198y = 2196$, and write that line right.",
              "given": [
                "$15x^2 + 30x - 11y^2 + 198y = 2196$",
                "$15(x^2 + 2x) - 11(y^2 - 18y) = 2196$",
                "$15(x^2 + 2x + 1) - 11(y^2 - 18y) = 2196 + 15 = 2211$",
                "$15(x^2 + 2x + 1) - 11(y^2 - 18y) = 2196 + 15 - 891 = 1320$",
                "$15(x + 1)^2 - 11(y - 9)^2 = 1320$",
                "$\\dfrac{(x + 1)^2}{88} - \\dfrac{(y - 9)^2}{120} = 1$",
                "$h = -1$, $k = 9$, $a^2 = 88$, $b^2 = 120$",
                "$c^2 = 88 + 120 = 208$",
                "$c = \\sqrt{208}$",
                "$c = 4\\sqrt{13}$",
                "The foci are $(-1 + 4\\sqrt{13}, 9)$ and $(-1 - 4\\sqrt{13}, 9)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 15*(x^2+2*x+1)-11*(y^2-18*y+81) = 2196+15-891",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $15x^2 + 30x - 11y^2 + 198y = 2196$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $-891$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same amount."
                },
                {
                  "step": "Line 4 written right is $15(x^2 + 2x + 1) - 11(y^2 - 18y + 81) = 2196 + 15 - 891$.",
                  "reason": "Completing the square: $81$ is added inside the second bracket, which adds $-11 \\cdot 81 = -891$ to the left side, so $-891$ is added to the right side too; the right side may also be written as $1320$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $8x^2 + 144x - 13y^2 + 78y - 93 = 0$, and write that line right.",
              "given": [
                "$8x^2 + 144x - 13y^2 + 78y - 93 = 0$",
                "$8x^2 + 144x - 13y^2 + 78y = 93$",
                "$8(x^2 + 18x) - 13(y^2 - 6y) = 93$",
                "$8(x^2 + 18x) - 13(y^2 - 6y) = 93 + 648 = 741$",
                "$8(x^2 + 18x + 81) - 13(y^2 - 6y + 9) = 741 - 117 = 624$",
                "$8(x + 9)^2 - 13(y - 3)^2 = 624$",
                "$\\dfrac{(x + 9)^2}{78} - \\dfrac{(y - 3)^2}{48} = 1$",
                "$h = -9$, $k = 3$, $a^2 = 78$, $b^2 = 48$",
                "$c^2 = 78 + 48 = 126$",
                "$c = \\sqrt{126}$",
                "$c = 3\\sqrt{14}$",
                "The foci are $(-9 + 3\\sqrt{14}, 3)$ and $(-9 - 3\\sqrt{14}, 3)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8*(x^2+18*x+81)-13*(y^2-6*y) = 93+648",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $8x^2 + 144x - 13y^2 + 78y - 93 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $648$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same amount."
                },
                {
                  "step": "Line 4 written right is $8(x^2 + 18x + 81) - 13(y^2 - 6y) = 93 + 648$.",
                  "reason": "Completing the square: $81$ is added inside the first bracket, which adds $8 \\cdot 81 = 648$ to the left side, so $648$ is added to the right side too; the right side may also be written as $741$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $8x^2 + 144x - 15y^2 - 360y = 2472$, and write that line right.",
              "given": [
                "$8x^2 + 144x - 15y^2 - 360y = 2472$",
                "$8(x^2 + 18x) - 15(y^2 + 24y) = 2472$",
                "$8(x^2 + 18x + 81) - 15(y^2 + 24y) = 2472 + 648 = 3120$",
                "$8(x^2 + 18x + 81) - 15(y^2 + 24y) = 2472 + 648 - 2160 = 960$",
                "$8(x + 9)^2 - 15(y + 12)^2 = 960$",
                "$\\dfrac{(x + 9)^2}{120} - \\dfrac{(y + 12)^2}{64} = 1$",
                "$h = -9$, $k = -12$, $a^2 = 120$, $b^2 = 64$",
                "$c^2 = 120 + 64 = 184$",
                "$c = \\sqrt{184}$",
                "$c = 2\\sqrt{46}$",
                "The foci are $(-9 + 2\\sqrt{46}, -12)$ and $(-9 - 2\\sqrt{46}, -12)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8*(x^2+18*x+81)-15*(y^2+24*y+144) = 2472+648-2160",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $8x^2 + 144x - 15y^2 - 360y = 2472$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $-2160$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same amount."
                },
                {
                  "step": "Line 4 written right is $8(x^2 + 18x + 81) - 15(y^2 + 24y + 144) = 2472 + 648 - 2160$.",
                  "reason": "Completing the square: $144$ is added inside the second bracket, which adds $-15 \\cdot 144 = -2160$ to the left side, so $-2160$ is added to the right side too; the right side may also be written as $960$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the foci of the graph of $9x^2 + 18x - 11y^2 + 132y = 783$, and write that line right.",
            "given": [
              "$9x^2 + 18x - 11y^2 + 132y = 783$",
              "$9(x^2 + 2x) - 11(y^2 - 12y) = 783$",
              "$9(x^2 + 2x + 1) - 11(y^2 - 12y) = 783 + 9$",
              "$9(x^2 + 2x + 1) - 11(y^2 - 12y + 36) = 783 + 9 - 396$",
              "$9(x + 1)^2 - 11(y - 6)^2 = 396$",
              "$\\dfrac{(x + 1)^2}{44} - \\dfrac{(y - 6)^2}{36} = 1$",
              "$h = -1$, $k = 6$, $a^2 = 44$, $b^2 = 36$",
              "$c^2 = 44 - 36 = 8$",
              "$c = \\sqrt{8}$",
              "$c = 2\\sqrt{2}$",
              "The foci are $(-1 + 2\\sqrt{2}, 6)$ and $(-1 - 2\\sqrt{2}, 6)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the foci of the graph of $9x^2 + 18x - 11y^2 + 132y = 783$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 8 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 8 writes $c^2 = 44 - 36$, taking $b^2$ from $a^2$.",
                "reason": "A sign lost: the focal relation of a hyperbola adds $b^2$ to $a^2$, and line 8 takes it away."
              },
              {
                "step": "Line 8 written right is $c^2 = 44 + 36 = 80$.",
                "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $44 + 36 = 80$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $7x^2 + 154x - 13y^2 - 234y - 1025 = 0$, and write that line right.",
              "given": [
                "$7x^2 + 154x - 13y^2 - 234y - 1025 = 0$",
                "$7x^2 + 154x - 13y^2 - 234y = 1025$",
                "$7(x^2 + 22x) - 13(y^2 + 18y) = 1025$",
                "$7(x^2 + 22x + 121) - 13(y^2 + 18y) = 1025 + 847$",
                "$7(x^2 + 22x + 121) - 13(y^2 + 18y + 81) = 1025 + 847 - 1053$",
                "$7(x + 11)^2 - 13(y + 9)^2 = 819$",
                "$\\dfrac{(x + 11)^2}{117} - \\dfrac{(y + 9)^2}{63} = 1$",
                "$h = -11$, $k = -9$, $a^2 = 117$, $b^2 = 63$",
                "$c^2 = 117 - 63 = 54$",
                "$c = \\sqrt{54}$",
                "$c = 3\\sqrt{6}$",
                "The foci are $(-11 + 3\\sqrt{6}, -9)$ and $(-11 - 3\\sqrt{6}, -9)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 9: c^2 = 117+63 = 180",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $7x^2 + 154x - 13y^2 - 234y - 1025 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 9 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 9 writes $c^2 = 117 - 63$, taking $b^2$ from $a^2$.",
                  "reason": "A sign lost: the focal relation of a hyperbola adds $b^2$ to $a^2$, and line 9 takes it away."
                },
                {
                  "step": "Line 9 written right is $c^2 = 117 + 63 = 180$.",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $117 + 63 = 180$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $10x^2 + 120x - 13y^2 + 208y = 1642$, and write that line right.",
              "given": [
                "$10x^2 + 120x - 13y^2 + 208y = 1642$",
                "$10(x^2 + 12x) - 13(y^2 - 16y) = 1642$",
                "$10(x^2 + 12x + 36) - 13(y^2 - 16y) = 1642 + 360$",
                "$10(x^2 + 12x + 36) - 13(y^2 - 16y + 64) = 1642 + 360 - 832$",
                "$10(x + 6)^2 - 13(y - 8)^2 = 1170$",
                "$\\dfrac{(x + 6)^2}{117} - \\dfrac{(y - 8)^2}{90} = 1$",
                "$h = -6$, $k = 8$, $a^2 = 117$, $b^2 = 90$",
                "$c^2 = 117 - 90 = 27$",
                "$c = \\sqrt{27}$",
                "$c = 3\\sqrt{3}$",
                "The foci are $(-6 + 3\\sqrt{3}, 8)$ and $(-6 - 3\\sqrt{3}, 8)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: c^2 = 117+90 = 207",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $10x^2 + 120x - 13y^2 + 208y = 1642$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 8 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 8 writes $c^2 = 117 - 90$, taking $b^2$ from $a^2$.",
                  "reason": "A sign lost: the focal relation of a hyperbola adds $b^2$ to $a^2$, and line 8 takes it away."
                },
                {
                  "step": "Line 8 written right is $c^2 = 117 + 90 = 207$.",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $117 + 90 = 207$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the foci of the graph of $10x^2 + 160x - 13y^2 + 52y + 68 = 0$, and write that line right.",
              "given": [
                "$10x^2 + 160x - 13y^2 + 52y + 68 = 0$",
                "$10x^2 + 160x - 13y^2 + 52y = -68$",
                "$10(x^2 + 16x) - 13(y^2 - 4y) = -68$",
                "$10(x^2 + 16x + 64) - 13(y^2 - 4y) = -68 + 640$",
                "$10(x^2 + 16x + 64) - 13(y^2 - 4y + 4) = -68 + 640 - 52$",
                "$10(x + 8)^2 - 13(y - 2)^2 = 520$",
                "$\\dfrac{(x + 8)^2}{52} - \\dfrac{(y - 2)^2}{40} = 1$",
                "$h = -8$, $k = 2$, $a^2 = 52$, $b^2 = 40$",
                "$c^2 = 52 - 40 = 12$",
                "$c = \\sqrt{12}$",
                "$c = 2\\sqrt{3}$",
                "The foci are $(-8 + 2\\sqrt{3}, 2)$ and $(-8 - 2\\sqrt{3}, 2)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 9: c^2 = 52+40 = 92",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the foci of the graph of $10x^2 + 160x - 13y^2 + 52y + 68 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 9 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 9 writes $c^2 = 52 - 40$, taking $b^2$ from $a^2$.",
                  "reason": "A sign lost: the focal relation of a hyperbola adds $b^2$ to $a^2$, and line 9 takes it away."
                },
                {
                  "step": "Line 9 written right is $c^2 = 52 + 40 = 92$.",
                  "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$, and $52 + 40 = 92$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t191-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the asymptote with positive slope of the graph of $\\dfrac{(x - 12)^2}{25} - \\dfrac{(y - 10)^2}{81} = 1$, as an equation with $y$ alone on the left.",
            "lines": [
              {
                "step": "Find the asymptote with positive slope of the graph of $\\dfrac{(x - 12)^2}{25} - \\dfrac{(y - 10)^2}{81} = 1$, as an equation with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = 12$, $k = 10$, $a^2 = 25$, $b^2 = 81$",
                "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$a = 5$, $b = 9$",
                "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
              },
              {
                "step": "$y - 10 = \\dfrac{9}{5}(x - 12)$",
                "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$, with $\\dfrac{b}{a} = \\dfrac{9}{5}$; the first has the positive slope."
              },
              {
                "step": "$y - 10 = \\dfrac{9}{5}x - \\dfrac{108}{5}$",
                "reason": "Multiplying out: $\\dfrac{9}{5}$ multiplies each term in the bracket."
              },
              {
                "step": "$y = \\dfrac{9}{5}x - \\dfrac{58}{5}$",
                "reason": "Adding the same number to both sides: $10$ is added to each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the asymptote with positive slope of the graph of $\\dfrac{(x - 10)^2}{4} - \\dfrac{(y + 3)^2}{64} = 1$, as an equation with $y$ alone on the left.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 4*x-43",
              "lines": [
                {
                  "step": "Find the asymptote with positive slope of the graph of $\\dfrac{(x - 10)^2}{4} - \\dfrac{(y + 3)^2}{64} = 1$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 10$, $k = -3$, $a^2 = 4$, $b^2 = 64$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 2$, $b = 8$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "$y + 3 = 4(x - 10)$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$, with $\\dfrac{b}{a} = \\dfrac{8}{2} = 4$; the first has the positive slope."
                },
                {
                  "step": "$y + 3 = 4x - 40$",
                  "reason": "Multiplying out: $4$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = 4x - 43$",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Find the asymptote with positive slope of the graph of $\\dfrac{(x + 14)^2}{25} - \\dfrac{(y - 9)^2}{9} = 1$, as an equation with $y$ alone on the left.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 3/5*x+87/5",
              "lines": [
                {
                  "step": "Find the asymptote with positive slope of the graph of $\\dfrac{(x + 14)^2}{25} - \\dfrac{(y - 9)^2}{9} = 1$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -14$, $k = 9$, $a^2 = 25$, $b^2 = 9$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 5$, $b = 3$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "$y - 9 = \\dfrac{3}{5}(x + 14)$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$, with $\\dfrac{b}{a} = \\dfrac{3}{5}$; the first has the positive slope."
                },
                {
                  "step": "$y - 9 = \\dfrac{3}{5}x + \\dfrac{42}{5}$",
                  "reason": "Multiplying out: $\\dfrac{3}{5}$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = \\dfrac{3}{5}x + \\dfrac{87}{5}$",
                  "reason": "Adding the same number to both sides: $9$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Find the asymptote with positive slope of the graph of $\\dfrac{(x - 5)^2}{49} - \\dfrac{(y + 2)^2}{25} = 1$, as an equation with $y$ alone on the left.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 5/7*x-39/7",
              "lines": [
                {
                  "step": "Find the asymptote with positive slope of the graph of $\\dfrac{(x - 5)^2}{49} - \\dfrac{(y + 2)^2}{25} = 1$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 5$, $k = -2$, $a^2 = 49$, $b^2 = 25$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 7$, $b = 5$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "$y + 2 = \\dfrac{5}{7}(x - 5)$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$, with $\\dfrac{b}{a} = \\dfrac{5}{7}$; the first has the positive slope."
                },
                {
                  "step": "$y + 2 = \\dfrac{5}{7}x - \\dfrac{25}{7}$",
                  "reason": "Multiplying out: $\\dfrac{5}{7}$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = \\dfrac{5}{7}x - \\dfrac{39}{7}$",
                  "reason": "Adding the same number to both sides: $2$ is taken from each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the asymptote with positive slope of the graph of $16x^2 + 256x - 25y^2 + 600y = -1024$, as an equation with $y$ alone on the left.",
            "lines": [
              {
                "step": "Find the asymptote with positive slope of the graph of $16x^2 + 256x - 25y^2 + 600y = -1024$, as an equation with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$16(x^2 + 16x) - 25(y^2 - 24y) = -1024$",
                "reason": "Taking out a common factor: $16$ is taken out of the terms in $x$ and $25$ out of the terms in $y$."
              },
              {
                "step": "$16(x^2 + 16x + 64) - 25(y^2 - 24y) = -1024 + 1024$",
                "reason": "Completing the square: $64$ is added inside the first bracket, which adds $16 \\cdot 64 = 1024$ to the left side, so $1024$ is added to the right side too."
              },
              {
                "step": "$16(x^2 + 16x + 64) - 25(y^2 - 24y + 144) = -1024 + 1024 - 3600$",
                "reason": "Completing the square: $144$ is added inside the second bracket, which adds $-25 \\cdot 144 = -3600$ to the left side, so $-3600$ is added to the right side too."
              },
              {
                "step": "$16(x + 8)^2 - 25(y - 12)^2 = -3600$",
                "reason": "Completing the square: $x^2 + 16x + 64 = (x + 8)^2$ and $y^2 - 24y + 144 = (y - 12)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
              },
              {
                "step": "$\\dfrac{(y - 12)^2}{144} - \\dfrac{(x + 8)^2}{225} = 1$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3600$, which is negative, so the term in $y$ becomes the positive one and is written first; $-3600 \\div (-25) = 144$ and $-3600 \\div 16 = -225$."
              },
              {
                "step": "$h = -8$, $k = 12$, $a^2 = 144$, $b^2 = 225$",
                "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$a = 12$, $b = 15$",
                "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
              },
              {
                "step": "$y - 12 = \\dfrac{4}{5}(x + 8)$",
                "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{a}{b}(x - h)$ and $y - k = -\\dfrac{a}{b}(x - h)$, with $\\dfrac{a}{b} = \\dfrac{12}{15} = \\dfrac{4}{5}$; the first has the positive slope."
              },
              {
                "step": "$y - 12 = \\dfrac{4}{5}x + \\dfrac{32}{5}$",
                "reason": "Multiplying out: $\\dfrac{4}{5}$ multiplies each term in the bracket."
              },
              {
                "step": "$y = \\dfrac{4}{5}x + \\dfrac{92}{5}$",
                "reason": "Adding the same number to both sides: $12$ is added to each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the asymptote with positive slope of the graph of $4x^2 + 80x - 25y^2 - 300y = 100$, as an equation with $y$ alone on the left.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 2/5*x-2",
              "lines": [
                {
                  "step": "Find the asymptote with positive slope of the graph of $4x^2 + 80x - 25y^2 - 300y = 100$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(x^2 + 20x) - 25(y^2 + 12y) = 100$",
                  "reason": "Taking out a common factor: $4$ is taken out of the terms in $x$ and $25$ out of the terms in $y$."
                },
                {
                  "step": "$4(x^2 + 20x + 100) - 25(y^2 + 12y) = 100 + 400$",
                  "reason": "Completing the square: $100$ is added inside the first bracket, which adds $4 \\cdot 100 = 400$ to the left side, so $400$ is added to the right side too."
                },
                {
                  "step": "$4(x^2 + 20x + 100) - 25(y^2 + 12y + 36) = 100 + 400 - 900$",
                  "reason": "Completing the square: $36$ is added inside the second bracket, which adds $-25 \\cdot 36 = -900$ to the left side, so $-900$ is added to the right side too."
                },
                {
                  "step": "$4(x + 10)^2 - 25(y + 6)^2 = -400$",
                  "reason": "Completing the square: $x^2 + 20x + 100 = (x + 10)^2$ and $y^2 + 12y + 36 = (y + 6)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(y + 6)^2}{16} - \\dfrac{(x + 10)^2}{100} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-400$, which is negative, so the term in $y$ becomes the positive one and is written first; $-400 \\div (-25) = 16$ and $-400 \\div 4 = -100$."
                },
                {
                  "step": "$h = -10$, $k = -6$, $a^2 = 16$, $b^2 = 100$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 4$, $b = 10$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "$y + 6 = \\dfrac{2}{5}(x + 10)$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{a}{b}(x - h)$ and $y - k = -\\dfrac{a}{b}(x - h)$, with $\\dfrac{a}{b} = \\dfrac{4}{10} = \\dfrac{2}{5}$; the first has the positive slope."
                },
                {
                  "step": "$y + 6 = \\dfrac{2}{5}x + 4$",
                  "reason": "Multiplying out: $\\dfrac{2}{5}$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = \\dfrac{2}{5}x - 2$",
                  "reason": "Adding the same number to both sides: $6$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Find the asymptote with positive slope of the graph of $4x^2 + 48x - 49y^2 + 392y = 444$, as an equation with $y$ alone on the left.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 2/7*x+40/7",
              "lines": [
                {
                  "step": "Find the asymptote with positive slope of the graph of $4x^2 + 48x - 49y^2 + 392y = 444$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(x^2 + 12x) - 49(y^2 - 8y) = 444$",
                  "reason": "Taking out a common factor: $4$ is taken out of the terms in $x$ and $49$ out of the terms in $y$."
                },
                {
                  "step": "$4(x^2 + 12x + 36) - 49(y^2 - 8y) = 444 + 144$",
                  "reason": "Completing the square: $36$ is added inside the first bracket, which adds $4 \\cdot 36 = 144$ to the left side, so $144$ is added to the right side too."
                },
                {
                  "step": "$4(x^2 + 12x + 36) - 49(y^2 - 8y + 16) = 444 + 144 - 784$",
                  "reason": "Completing the square: $16$ is added inside the second bracket, which adds $-49 \\cdot 16 = -784$ to the left side, so $-784$ is added to the right side too."
                },
                {
                  "step": "$4(x + 6)^2 - 49(y - 4)^2 = -196$",
                  "reason": "Completing the square: $x^2 + 12x + 36 = (x + 6)^2$ and $y^2 - 8y + 16 = (y - 4)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(y - 4)^2}{4} - \\dfrac{(x + 6)^2}{49} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-196$, which is negative, so the term in $y$ becomes the positive one and is written first; $-196 \\div (-49) = 4$ and $-196 \\div 4 = -49$."
                },
                {
                  "step": "$h = -6$, $k = 4$, $a^2 = 4$, $b^2 = 49$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 2$, $b = 7$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "$y - 4 = \\dfrac{2}{7}(x + 6)$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{a}{b}(x - h)$ and $y - k = -\\dfrac{a}{b}(x - h)$, with $\\dfrac{a}{b} = \\dfrac{2}{7}$; the first has the positive slope."
                },
                {
                  "step": "$y - 4 = \\dfrac{2}{7}x + \\dfrac{12}{7}$",
                  "reason": "Multiplying out: $\\dfrac{2}{7}$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = \\dfrac{2}{7}x + \\dfrac{40}{7}$",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Find the asymptote with positive slope of the graph of $36x^2 - 144x - 49y^2 - 980y = -2300$, as an equation with $y$ alone on the left.",
              "form": "Answer as the line $y = mx + c$, as in y = 2*x-3.",
              "answer": "y = 6/7*x-82/7",
              "lines": [
                {
                  "step": "Find the asymptote with positive slope of the graph of $36x^2 - 144x - 49y^2 - 980y = -2300$, as an equation with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$36(x^2 - 4x) - 49(y^2 + 20y) = -2300$",
                  "reason": "Taking out a common factor: $36$ is taken out of the terms in $x$ and $49$ out of the terms in $y$."
                },
                {
                  "step": "$36(x^2 - 4x + 4) - 49(y^2 + 20y) = -2300 + 144$",
                  "reason": "Completing the square: $4$ is added inside the first bracket, which adds $36 \\cdot 4 = 144$ to the left side, so $144$ is added to the right side too."
                },
                {
                  "step": "$36(x^2 - 4x + 4) - 49(y^2 + 20y + 100) = -2300 + 144 - 4900$",
                  "reason": "Completing the square: $100$ is added inside the second bracket, which adds $-49 \\cdot 100 = -4900$ to the left side, so $-4900$ is added to the right side too."
                },
                {
                  "step": "$36(x - 2)^2 - 49(y + 10)^2 = -7056$",
                  "reason": "Completing the square: $x^2 - 4x + 4 = (x - 2)^2$ and $y^2 + 20y + 100 = (y + 10)^2$, each bracket the square of the letter plus half its middle coefficient; the numbers on the right are added."
                },
                {
                  "step": "$\\dfrac{(y + 10)^2}{144} - \\dfrac{(x - 2)^2}{196} = 1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7056$, which is negative, so the term in $y$ becomes the positive one and is written first; $-7056 \\div (-49) = 144$ and $-7056 \\div 36 = -196$."
                },
                {
                  "step": "$h = 2$, $k = -10$, $a^2 = 144$, $b^2 = 196$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 12$, $b = 14$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "$y + 10 = \\dfrac{6}{7}(x - 2)$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{a}{b}(x - h)$ and $y - k = -\\dfrac{a}{b}(x - h)$, with $\\dfrac{a}{b} = \\dfrac{12}{14} = \\dfrac{6}{7}$; the first has the positive slope."
                },
                {
                  "step": "$y + 10 = \\dfrac{6}{7}x - \\dfrac{12}{7}$",
                  "reason": "Multiplying out: $\\dfrac{6}{7}$ multiplies each term in the bracket."
                },
                {
                  "step": "$y = \\dfrac{6}{7}x - \\dfrac{82}{7}$",
                  "reason": "Adding the same number to both sides: $10$ is taken from each side."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t191-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $\\dfrac{(x - 1)^2}{81} - \\dfrac{(y - 8)^2}{36} = 1$.",
            "lines": [
              {
                "step": "Sketch the graph of $\\dfrac{(x - 1)^2}{81} - \\dfrac{(y - 8)^2}{36} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = 1$, $k = 8$, $a^2 = 81$, $b^2 = 36$",
                "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
              },
              {
                "step": "$a = 9$, $b = 6$",
                "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
              },
              {
                "step": "The vertices are $(10, 8)$ and $(-8, 8)$.",
                "reason": "Standard form of a hyperbola: the vertices of this graph are $(h + a, k)$ and $(h - a, k)$."
              },
              {
                "step": "The asymptotes are $y - 8 = \\dfrac{2}{3}(x - 1)$ and $y - 8 = -\\dfrac{2}{3}(x - 1)$.",
                "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$."
              },
              {
                "step": "$\\dfrac{(x - 1)^2}{81} - \\dfrac{(0 - 8)^2}{36} = 1$",
                "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$\\dfrac{(x - 1)^2}{81} = \\dfrac{25}{9}$",
                "reason": "Adding the same number to both sides: $\\dfrac{(0 - 8)^2}{36} = \\dfrac{16}{9}$ is added to each side, and $1 + \\dfrac{16}{9} = \\dfrac{25}{9}$."
              },
              {
                "step": "$(x - 1)^2 = 225$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $81$."
              },
              {
                "step": "Either $x - 1 = 15$ or $x - 1 = -15$",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $225 = 15^2$."
              },
              {
                "step": "So $x = 16$ or $x = -14$",
                "reason": "Adding the same number to both sides: $1$ is added to each side."
              },
              {
                "step": "$\\dfrac{(0 - 1)^2}{81} - \\dfrac{(y - 8)^2}{36} = 1$",
                "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$\\dfrac{(y - 8)^2}{36} = -\\dfrac{80}{81}$",
                "reason": "Adding the same number to both sides: $\\dfrac{(y - 8)^2}{36} - 1$ is added to each side, and $\\dfrac{1}{81} - 1 = -\\dfrac{80}{81}$."
              },
              {
                "step": "No square is negative, so the graph does not meet the $y$-axis.",
                "reason": "Trivial Inequality: $\\dfrac{(y - 8)^2}{36} \\ge 0$ for every real $y$, so it is never $-\\dfrac{80}{81}$."
              },
              {
                "step": "The two branches through the vertices, each coming closer and closer to the asymptotes far from the centre, are the graph.",
                "reason": "Asymptotes of a hyperbola: the branches open left and right from the vertices and come closer and closer to the asymptotes without meeting them.",
                "figure": {
                  "file": "hyperbolas-1.svg",
                  "alt": "A hyperbola opening left and right with centre (1, 8) and vertices (−8, 8) and (10, 8), crossing the x-axis at −14 and 16, with its two asymptotes dashed through the centre."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $\\dfrac{(x + 1)^2}{25} - \\dfrac{(y + 15)^2}{64} = 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(-\\dfrac{93}{8}, 0\\right)$",
                  "$\\left(\\dfrac{77}{8}, 0\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y + 15 = \\dfrac{8}{5}(x + 1)$",
                  "$y + 15 = -\\dfrac{8}{5}(x + 1)$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $\\dfrac{(x + 1)^2}{25} - \\dfrac{(y + 15)^2}{64} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -1$, $k = -15$, $a^2 = 25$, $b^2 = 64$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 5$, $b = 8$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "The vertices are $(4, -15)$ and $(-6, -15)$.",
                  "reason": "Standard form of a hyperbola: the vertices of this graph are $(h + a, k)$ and $(h - a, k)$."
                },
                {
                  "step": "The asymptotes are $y + 15 = \\dfrac{8}{5}(x + 1)$ and $y + 15 = -\\dfrac{8}{5}(x + 1)$.",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2}{25} - \\dfrac{(0 + 15)^2}{64} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2}{25} = \\dfrac{289}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{(0 + 15)^2}{64} = \\dfrac{225}{64}$ is added to each side, and $1 + \\dfrac{225}{64} = \\dfrac{289}{64}$."
                },
                {
                  "step": "$(x + 1)^2 = \\dfrac{7225}{64}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $25$."
                },
                {
                  "step": "Either $x + 1 = \\dfrac{85}{8}$ or $x + 1 = -\\dfrac{85}{8}$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $\\dfrac{7225}{64} = \\left(\\dfrac{85}{8}\\right)^2$."
                },
                {
                  "step": "So $x = \\dfrac{77}{8}$ or $x = -\\dfrac{93}{8}$",
                  "reason": "Adding the same number to both sides: $1$ is taken from each side."
                },
                {
                  "step": "$\\dfrac{(0 + 1)^2}{25} - \\dfrac{(y + 15)^2}{64} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y + 15)^2}{64} = -\\dfrac{24}{25}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{(y + 15)^2}{64} - 1$ is added to each side, and $\\dfrac{1}{25} - 1 = -\\dfrac{24}{25}$."
                },
                {
                  "step": "No square is negative, so the graph does not meet the $y$-axis.",
                  "reason": "Trivial Inequality: $\\dfrac{(y + 15)^2}{64} \\ge 0$ for every real $y$, so it is never $-\\dfrac{24}{25}$."
                },
                {
                  "step": "The two branches through the vertices, each coming closer and closer to the asymptotes far from the centre, are the graph.",
                  "reason": "Asymptotes of a hyperbola: the branches open left and right from the vertices and come closer and closer to the asymptotes without meeting them.",
                  "figure": {
                    "file": "hyperbolas-2.svg",
                    "alt": "A hyperbola opening left and right with centre (−1, −15) and vertices (−6, −15) and (4, −15), crossing the x-axis at −93/8 and 77/8, with its two asymptotes dashed through the centre."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $\\dfrac{(y + 1)^2}{64} - \\dfrac{(x + 3)^2}{16} = 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -11)$",
                  "$(0, 9)$"
                ],
                "turning": [
                  "$(-3, 7)$",
                  "$(-3, -9)$"
                ],
                "asymptotes": [
                  "$y + 1 = 2(x + 3)$",
                  "$y + 1 = -2(x + 3)$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $\\dfrac{(y + 1)^2}{64} - \\dfrac{(x + 3)^2}{16} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -3$, $k = -1$, $a^2 = 64$, $b^2 = 16$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$, with the $y$ term positive, is the hyperbola with centre $(h, k)$ that opens up and down; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 8$, $b = 4$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "The vertices are $(-3, 7)$ and $(-3, -9)$.",
                  "reason": "Standard form of a hyperbola: the vertices of this graph are $(h, k + a)$ and $(h, k - a)$."
                },
                {
                  "step": "The asymptotes are $y + 1 = 2(x + 3)$ and $y + 1 = -2(x + 3)$.",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{a}{b}(x - h)$ and $y - k = -\\dfrac{a}{b}(x - h)$."
                },
                {
                  "step": "$\\dfrac{(y + 1)^2}{64} - \\dfrac{(0 + 3)^2}{16} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y + 1)^2}{64} = \\dfrac{25}{16}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{(0 + 3)^2}{16} = \\dfrac{9}{16}$ is added to each side, and $1 + \\dfrac{9}{16} = \\dfrac{25}{16}$."
                },
                {
                  "step": "$(y + 1)^2 = 100$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $64$."
                },
                {
                  "step": "Either $y + 1 = 10$ or $y + 1 = -10$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $100 = 10^2$."
                },
                {
                  "step": "So $y = 9$ or $y = -11$",
                  "reason": "Adding the same number to both sides: $1$ is taken from each side."
                },
                {
                  "step": "$\\dfrac{(0 + 1)^2}{64} - \\dfrac{(x + 3)^2}{16} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 3)^2}{16} = -\\dfrac{63}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{(x + 3)^2}{16} - 1$ is added to each side, and $\\dfrac{1}{64} - 1 = -\\dfrac{63}{64}$."
                },
                {
                  "step": "No square is negative, so the graph does not meet the $x$-axis.",
                  "reason": "Trivial Inequality: $\\dfrac{(x + 3)^2}{16} \\ge 0$ for every real $x$, so it is never $-\\dfrac{63}{64}$."
                },
                {
                  "step": "The two branches through the vertices, each coming closer and closer to the asymptotes far from the centre, are the graph.",
                  "reason": "Asymptotes of a hyperbola: the branches open up and down from the vertices and come closer and closer to the asymptotes without meeting them.",
                  "figure": {
                    "file": "hyperbolas-3.svg",
                    "alt": "A hyperbola opening up and down with centre (−3, −1) and vertices (−3, −9) and (−3, 7), crossing the y-axis at −11 and 9, with its two asymptotes dashed through the centre."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $\\dfrac{(x + 1)^2}{64} - \\dfrac{(y + 16)^2}{144} = 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(-\\dfrac{43}{3}, 0\\right)$",
                  "$\\left(\\dfrac{37}{3}, 0\\right)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$y + 16 = \\dfrac{3}{2}(x + 1)$",
                  "$y + 16 = -\\dfrac{3}{2}(x + 1)$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $\\dfrac{(x + 1)^2}{64} - \\dfrac{(y + 16)^2}{144} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -1$, $k = -16$, $a^2 = 64$, $b^2 = 144$",
                  "reason": "Standard form of a hyperbola: the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$, with the $x$ term positive, is the hyperbola with centre $(h, k)$ that opens left and right; a bracket with a plus sign reads as a minus, as $x + 3 = x - (-3)$."
                },
                {
                  "step": "$a = 8$, $b = 12$",
                  "reason": "Positive square root: $a$ and $b$ are positive, so each is the positive number whose square is given."
                },
                {
                  "step": "The vertices are $(7, -16)$ and $(-9, -16)$.",
                  "reason": "Standard form of a hyperbola: the vertices of this graph are $(h + a, k)$ and $(h - a, k)$."
                },
                {
                  "step": "The asymptotes are $y + 16 = \\dfrac{3}{2}(x + 1)$ and $y + 16 = -\\dfrac{3}{2}(x + 1)$.",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2}{64} - \\dfrac{(0 + 16)^2}{144} = 1$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2}{64} = \\dfrac{25}{9}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{(0 + 16)^2}{144} = \\dfrac{16}{9}$ is added to each side, and $1 + \\dfrac{16}{9} = \\dfrac{25}{9}$."
                },
                {
                  "step": "$(x + 1)^2 = \\dfrac{1600}{9}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $64$."
                },
                {
                  "step": "Either $x + 1 = \\dfrac{40}{3}$ or $x + 1 = -\\dfrac{40}{3}$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $\\dfrac{1600}{9} = \\left(\\dfrac{40}{3}\\right)^2$."
                },
                {
                  "step": "So $x = \\dfrac{37}{3}$ or $x = -\\dfrac{43}{3}$",
                  "reason": "Adding the same number to both sides: $1$ is taken from each side."
                },
                {
                  "step": "$\\dfrac{(0 + 1)^2}{64} - \\dfrac{(y + 16)^2}{144} = 1$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$\\dfrac{(y + 16)^2}{144} = -\\dfrac{63}{64}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{(y + 16)^2}{144} - 1$ is added to each side, and $\\dfrac{1}{64} - 1 = -\\dfrac{63}{64}$."
                },
                {
                  "step": "No square is negative, so the graph does not meet the $y$-axis.",
                  "reason": "Trivial Inequality: $\\dfrac{(y + 16)^2}{144} \\ge 0$ for every real $y$, so it is never $-\\dfrac{63}{64}$."
                },
                {
                  "step": "The two branches through the vertices, each coming closer and closer to the asymptotes far from the centre, are the graph.",
                  "reason": "Asymptotes of a hyperbola: the branches open left and right from the vertices and come closer and closer to the asymptotes without meeting them.",
                  "figure": {
                    "file": "hyperbolas-4.svg",
                    "alt": "A hyperbola opening left and right with centre (−1, −16) and vertices (−9, −16) and (7, −16), crossing the x-axis at −43/3 and 37/3, with its two asymptotes dashed through the centre."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $(x + 2)(y - 2) = 28$.",
            "lines": [
              {
                "step": "Sketch the graph of $(x + 2)(y - 2) = 28$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $(-2, 2)$, and the asymptotes are the lines $x = -2$ and $y = 2$.",
                "reason": "Rectangular hyperbola: the graph of $(x - h)(y - k) = d$, with $d \\ne 0$, has the asymptotes $x = h$ and $y = k$, which meet at its centre $(h, k)$."
              },
              {
                "step": "The product $(x + 2)(y - 2)$ is positive where both brackets are positive or both are negative, so the branches lie above and to the right of the centre and below and to the left of it.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ."
              },
              {
                "step": "$(x + 2)(0 - 2) = 28$",
                "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$x + 2 = -14$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 - 2 = -2$."
              },
              {
                "step": "$x = -16$",
                "reason": "Adding the same number to both sides: $2$ is taken from each side."
              },
              {
                "step": "$(0 + 2)(y - 2) = 28$",
                "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "$y - 2 = 14$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 + 2 = 2$."
              },
              {
                "step": "$y = 16$",
                "reason": "Adding the same number to both sides: $2$ is added to each side."
              },
              {
                "step": "The two branches, one in each of those two quarters, each coming closer and closer to the asymptotes, are the graph.",
                "reason": "Rectangular hyperbola: the branches come closer and closer to the lines $x = h$ and $y = k$ without meeting them.",
                "figure": {
                  "file": "hyperbolas-10.svg",
                  "alt": "A curve in two branches with centre (−2, 2), its asymptotes x = −2 and y = 2 dashed, its branches above right and below left of the centre, crossing the x-axis at −16 and the y-axis at 16."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $(x + 4)(y + 3) = -60$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-24, 0)$",
                  "$(0, -18)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -4$",
                  "$y = -3$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $(x + 4)(y + 3) = -60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-4, -3)$, and the asymptotes are the lines $x = -4$ and $y = -3$.",
                  "reason": "Rectangular hyperbola: the graph of $(x - h)(y - k) = d$, with $d \\ne 0$, has the asymptotes $x = h$ and $y = k$, which meet at its centre $(h, k)$."
                },
                {
                  "step": "The product $(x + 4)(y + 3)$ is negative where one bracket is positive and the other negative, so the branches lie above and to the left of the centre and below and to the right of it.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ."
                },
                {
                  "step": "$(x + 4)(0 + 3) = -60$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$x + 4 = -20$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 + 3 = 3$."
                },
                {
                  "step": "$x = -24$",
                  "reason": "Adding the same number to both sides: $4$ is taken from each side."
                },
                {
                  "step": "$(0 + 4)(y + 3) = -60$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$y + 3 = -15$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 + 4 = 4$."
                },
                {
                  "step": "$y = -18$",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                },
                {
                  "step": "The two branches, one in each of those two quarters, each coming closer and closer to the asymptotes, are the graph.",
                  "reason": "Rectangular hyperbola: the branches come closer and closer to the lines $x = h$ and $y = k$ without meeting them.",
                  "figure": {
                    "file": "hyperbolas-11.svg",
                    "alt": "A curve in two branches with centre (−4, −3), its asymptotes x = −4 and y = −3 dashed, its branches above left and below right of the centre, crossing the x-axis at −24 and the y-axis at −18."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $(x + 4)(y - 7) = 56$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-12, 0)$",
                  "$(0, 21)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = -4$",
                  "$y = 7$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $(x + 4)(y - 7) = 56$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(-4, 7)$, and the asymptotes are the lines $x = -4$ and $y = 7$.",
                  "reason": "Rectangular hyperbola: the graph of $(x - h)(y - k) = d$, with $d \\ne 0$, has the asymptotes $x = h$ and $y = k$, which meet at its centre $(h, k)$."
                },
                {
                  "step": "The product $(x + 4)(y - 7)$ is positive where both brackets are positive or both are negative, so the branches lie above and to the right of the centre and below and to the left of it.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ."
                },
                {
                  "step": "$(x + 4)(0 - 7) = 56$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$x + 4 = -8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 - 7 = -7$."
                },
                {
                  "step": "$x = -12$",
                  "reason": "Adding the same number to both sides: $4$ is taken from each side."
                },
                {
                  "step": "$(0 + 4)(y - 7) = 56$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$y - 7 = 14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 + 4 = 4$."
                },
                {
                  "step": "$y = 21$",
                  "reason": "Adding the same number to both sides: $7$ is added to each side."
                },
                {
                  "step": "The two branches, one in each of those two quarters, each coming closer and closer to the asymptotes, are the graph.",
                  "reason": "Rectangular hyperbola: the branches come closer and closer to the lines $x = h$ and $y = k$ without meeting them.",
                  "figure": {
                    "file": "hyperbolas-12.svg",
                    "alt": "A curve in two branches with centre (−4, 7), its asymptotes x = −4 and y = 7 dashed, its branches above right and below left of the centre, crossing the x-axis at −12 and the y-axis at 21."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $(x - 4)(y - 4) = -52$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(17, 0)$",
                  "$(0, 17)$"
                ],
                "turning": [],
                "asymptotes": [
                  "$x = 4$",
                  "$y = 4$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the graph of $(x - 4)(y - 4) = -52$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $(4, 4)$, and the asymptotes are the lines $x = 4$ and $y = 4$.",
                  "reason": "Rectangular hyperbola: the graph of $(x - h)(y - k) = d$, with $d \\ne 0$, has the asymptotes $x = h$ and $y = k$, which meet at its centre $(h, k)$."
                },
                {
                  "step": "The product $(x - 4)(y - 4)$ is negative where one bracket is positive and the other negative, so the branches lie above and to the left of the centre and below and to the right of it.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ."
                },
                {
                  "step": "$(x - 4)(0 - 4) = -52$",
                  "reason": "Substituting a value: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$x - 4 = 13$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 - 4 = -4$."
                },
                {
                  "step": "$x = 17$",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                },
                {
                  "step": "$(0 - 4)(y - 4) = -52$",
                  "reason": "Substituting a value: the graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "$y - 4 = 13$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $0 - 4 = -4$."
                },
                {
                  "step": "$y = 17$",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                },
                {
                  "step": "The two branches, one in each of those two quarters, each coming closer and closer to the asymptotes, are the graph.",
                  "reason": "Rectangular hyperbola: the branches come closer and closer to the lines $x = h$ and $y = k$ without meeting them.",
                  "figure": {
                    "file": "hyperbolas-13.svg",
                    "alt": "A curve in two branches with centre (4, 4), its asymptotes x = 4 and y = 4 dashed, its branches above left and below right of the centre, crossing the x-axis at 17 and the y-axis at 17."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(11, 15)$ and $B(11, 1)$, and $P(19, 15)$ lies on one of its asymptotes, the dashed lines.",
            "figure": {
              "file": "hyperbolas-18.svg",
              "alt": "A hyperbola opening up and down with its vertices A (11, 15) and B (11, 1) and its two asymptotes dashed, one through P (19, 15)."
            },
            "lines": [
              {
                "step": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(11, 15)$ and $B(11, 1)$, and $P(19, 15)$ lies on one of its asymptotes, the dashed lines.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The centre is $\\left(\\dfrac{11 + 11}{2}, \\dfrac{15 + 1}{2}\\right) = (11, 8)$.",
                "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
              },
              {
                "step": "$a = 15 - 8 = 7$",
                "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
              },
              {
                "step": "The slope of the asymptote through the centre and $P$ is $\\dfrac{15 - 8}{19 - 11} = \\dfrac{7}{8}$.",
                "reason": "Slope: the change in $y$ over the change in $x$ between two points of the line."
              },
              {
                "step": "$\\dfrac{7}{b} = \\dfrac{7}{8}$",
                "reason": "Asymptotes of a hyperbola: the asymptotes of this graph have slopes $\\dfrac{a}{b}$ and $-\\dfrac{a}{b}$, with $a = 7$; the one through $P$ rises to the right."
              },
              {
                "step": "$7b = 56$",
                "reason": "Cross-multiplying: $7 \\cdot 8 = 7 \\cdot b$, the sides read the other way round."
              },
              {
                "step": "$b = 8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
              },
              {
                "step": "$\\dfrac{(y - 8)^2}{49} - \\dfrac{(x - 11)^2}{64} = 1$",
                "reason": "Standard form of a hyperbola: the centre, $a^2$ and $b^2$ put in their places."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(7, 1)$ and $B(7, -11)$, and $P(11, 1)$ lies on one of its asymptotes, the dashed lines.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(y+5)^2/36-(x-7)^2/16 = 1",
              "figure": {
                "file": "hyperbolas-19.svg",
                "alt": "A hyperbola opening up and down with its vertices A (7, 1) and B (7, −11) and its two asymptotes dashed, one through P (11, 1)."
              },
              "lines": [
                {
                  "step": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(7, 1)$ and $B(7, -11)$, and $P(11, 1)$ lies on one of its asymptotes, the dashed lines.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{7 + 7}{2}, \\dfrac{1 + (-11)}{2}\\right) = (7, -5)$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 1 - (-5) = 6$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "The slope of the asymptote through the centre and $P$ is $\\dfrac{1 - (-5)}{11 - 7} = \\dfrac{3}{2}$.",
                  "reason": "Slope: the change in $y$ over the change in $x$ between two points of the line."
                },
                {
                  "step": "$\\dfrac{6}{b} = \\dfrac{3}{2}$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph have slopes $\\dfrac{a}{b}$ and $-\\dfrac{a}{b}$, with $a = 6$; the one through $P$ rises to the right."
                },
                {
                  "step": "$3b = 12$",
                  "reason": "Cross-multiplying: $6 \\cdot 2 = 3 \\cdot b$, the sides read the other way round."
                },
                {
                  "step": "$b = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$\\dfrac{(y + 5)^2}{36} - \\dfrac{(x - 7)^2}{16} = 1$",
                  "reason": "Standard form of a hyperbola: the centre, $a^2$ and $b^2$ put in their places."
                }
              ]
            },
            {
              "prompt": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(-7, 14)$ and $B(-7, 8)$, and $P(-2, 14)$ lies on one of its asymptotes, the dashed lines.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(y-11)^2/9-(x+7)^2/25 = 1",
              "figure": {
                "file": "hyperbolas-20.svg",
                "alt": "A hyperbola opening up and down with its vertices A (−7, 14) and B (−7, 8) and its two asymptotes dashed, one through P (−2, 14)."
              },
              "lines": [
                {
                  "step": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(-7, 14)$ and $B(-7, 8)$, and $P(-2, 14)$ lies on one of its asymptotes, the dashed lines.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{-7 + (-7)}{2}, \\dfrac{14 + 8}{2}\\right) = (-7, 11)$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 14 - 11 = 3$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "The slope of the asymptote through the centre and $P$ is $\\dfrac{14 - 11}{-2 - (-7)} = \\dfrac{3}{5}$.",
                  "reason": "Slope: the change in $y$ over the change in $x$ between two points of the line."
                },
                {
                  "step": "$\\dfrac{3}{b} = \\dfrac{3}{5}$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph have slopes $\\dfrac{a}{b}$ and $-\\dfrac{a}{b}$, with $a = 3$; the one through $P$ rises to the right."
                },
                {
                  "step": "$3b = 15$",
                  "reason": "Cross-multiplying: $3 \\cdot 5 = 3 \\cdot b$, the sides read the other way round."
                },
                {
                  "step": "$b = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$\\dfrac{(y - 11)^2}{9} - \\dfrac{(x + 7)^2}{25} = 1$",
                  "reason": "Standard form of a hyperbola: the centre, $a^2$ and $b^2$ put in their places."
                }
              ]
            },
            {
              "prompt": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(10, 10)$ and $B(10, 6)$, and $P(15, 10)$ lies on one of its asymptotes, the dashed lines.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(y-8)^2/4-(x-10)^2/25 = 1",
              "figure": {
                "file": "hyperbolas-21.svg",
                "alt": "A hyperbola opening up and down with its vertices A (10, 10) and B (10, 6) and its two asymptotes dashed, one through P (15, 10)."
              },
              "lines": [
                {
                  "step": "Write the equation of the hyperbola in the figure in the form $\\dfrac{(y - k)^2}{a^2} - \\dfrac{(x - h)^2}{b^2} = 1$. Its vertices are $A(10, 10)$ and $B(10, 6)$, and $P(15, 10)$ lies on one of its asymptotes, the dashed lines.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The centre is $\\left(\\dfrac{10 + 10}{2}, \\dfrac{10 + 6}{2}\\right) = (10, 8)$.",
                  "reason": "Midpoint formula: the centre of a hyperbola is the midpoint of its vertices."
                },
                {
                  "step": "$a = 10 - 8 = 2$",
                  "reason": "Standard form of a hyperbola: the vertices are $(h, k + a)$ and $(h, k - a)$, so $a$ is the distance from the centre to a vertex."
                },
                {
                  "step": "The slope of the asymptote through the centre and $P$ is $\\dfrac{10 - 8}{15 - 10} = \\dfrac{2}{5}$.",
                  "reason": "Slope: the change in $y$ over the change in $x$ between two points of the line."
                },
                {
                  "step": "$\\dfrac{2}{b} = \\dfrac{2}{5}$",
                  "reason": "Asymptotes of a hyperbola: the asymptotes of this graph have slopes $\\dfrac{a}{b}$ and $-\\dfrac{a}{b}$, with $a = 2$; the one through $P$ rises to the right."
                },
                {
                  "step": "$2b = 10$",
                  "reason": "Cross-multiplying: $2 \\cdot 5 = 2 \\cdot b$, the sides read the other way round."
                },
                {
                  "step": "$b = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\dfrac{(y - 8)^2}{4} - \\dfrac{(x - 10)^2}{25} = 1$",
                  "reason": "Standard form of a hyperbola: the centre, $a^2$ and $b^2$ put in their places."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = 7$ and $y = -2$, and it passes through $P(10, -7)$.",
            "figure": {
              "file": "hyperbolas-25.svg",
              "alt": "A curve in two branches with its asymptotes x = 7 and y = −2 dashed, its branches above left and below right of the point where they cross, through the point P (10, −7)."
            },
            "lines": [
              {
                "step": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = 7$ and $y = -2$, and it passes through $P(10, -7)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h = 7$, $k = -2$",
                "reason": "Rectangular hyperbola: the asymptotes of the graph of $(x - h)(y - k) = d$ are the lines $x = h$ and $y = k$."
              },
              {
                "step": "$d = (10 - 7)(-7 - (-2))$",
                "reason": "Substituting a value: $P$ lies on the graph, so its coordinates satisfy the equation."
              },
              {
                "step": "$d = -15$",
                "reason": "Order of operations: the brackets first, $(10 - 7) = 3$ and $(-7 - (-2)) = -5$, then the product."
              },
              {
                "step": "$(x - 7)(y + 2) = -15$",
                "reason": "Rectangular hyperbola: $h$, $k$ and $d$ put in their places."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = -3$ and $y = 6$, and it passes through $P(-8, 5)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+3)*(y-6) = 5",
              "figure": {
                "file": "hyperbolas-26.svg",
                "alt": "A curve in two branches with its asymptotes x = −3 and y = 6 dashed, its branches above right and below left of the point where they cross, through the point P (−8, 5)."
              },
              "lines": [
                {
                  "step": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = -3$ and $y = 6$, and it passes through $P(-8, 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = -3$, $k = 6$",
                  "reason": "Rectangular hyperbola: the asymptotes of the graph of $(x - h)(y - k) = d$ are the lines $x = h$ and $y = k$."
                },
                {
                  "step": "$d = (-8 - (-3))(5 - 6)$",
                  "reason": "Substituting a value: $P$ lies on the graph, so its coordinates satisfy the equation."
                },
                {
                  "step": "$d = 5$",
                  "reason": "Order of operations: the brackets first, $(-8 - (-3)) = -5$ and $(5 - 6) = -1$, then the product."
                },
                {
                  "step": "$(x + 3)(y - 6) = 5$",
                  "reason": "Rectangular hyperbola: $h$, $k$ and $d$ put in their places."
                }
              ]
            },
            {
              "prompt": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = 3$ and $y = 8$, and it passes through $P(-3, 4)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-3)*(y-8) = 24",
              "figure": {
                "file": "hyperbolas-27.svg",
                "alt": "A curve in two branches with its asymptotes x = 3 and y = 8 dashed, its branches above right and below left of the point where they cross, through the point P (−3, 4)."
              },
              "lines": [
                {
                  "step": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = 3$ and $y = 8$, and it passes through $P(-3, 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 3$, $k = 8$",
                  "reason": "Rectangular hyperbola: the asymptotes of the graph of $(x - h)(y - k) = d$ are the lines $x = h$ and $y = k$."
                },
                {
                  "step": "$d = (-3 - 3)(4 - 8)$",
                  "reason": "Substituting a value: $P$ lies on the graph, so its coordinates satisfy the equation."
                },
                {
                  "step": "$d = 24$",
                  "reason": "Order of operations: the brackets first, $(-3 - 3) = -6$ and $(4 - 8) = -4$, then the product."
                },
                {
                  "step": "$(x - 3)(y - 8) = 24$",
                  "reason": "Rectangular hyperbola: $h$, $k$ and $d$ put in their places."
                }
              ]
            },
            {
              "prompt": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = 7$ and $y = -5$, and it passes through $P(10, 1)$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-7)*(y+5) = 18",
              "figure": {
                "file": "hyperbolas-28.svg",
                "alt": "A curve in two branches with its asymptotes x = 7 and y = −5 dashed, its branches above right and below left of the point where they cross, through the point P (10, 1)."
              },
              "lines": [
                {
                  "step": "Write the equation of the graph in the figure in the form $(x - h)(y - k) = d$. Its asymptotes are the dashed lines $x = 7$ and $y = -5$, and it passes through $P(10, 1)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h = 7$, $k = -5$",
                  "reason": "Rectangular hyperbola: the asymptotes of the graph of $(x - h)(y - k) = d$ are the lines $x = h$ and $y = k$."
                },
                {
                  "step": "$d = (10 - 7)(1 - (-5))$",
                  "reason": "Substituting a value: $P$ lies on the graph, so its coordinates satisfy the equation."
                },
                {
                  "step": "$d = 18$",
                  "reason": "Order of operations: the brackets first, $(10 - 7) = 3$ and $(1 - (-5)) = 6$, then the product."
                },
                {
                  "step": "$(x - 7)(y + 5) = 18$",
                  "reason": "Rectangular hyperbola: $h$, $k$ and $d$ put in their places."
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
      "id": "t191-p1",
      "method": "direct proof",
      "statement": "For numbers $a$ and $c$ with $0 < a < c$, and $b$ the positive number with $b^2 = c^2 - a^2$, every point of the hyperbola with foci $(c, 0)$ and $(-c, 0)$ and vertices $(a, 0)$ and $(-a, 0)$ lies on the graph of $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$.",
      "idea": "The vertex shows that the constant difference is $2a$. Put the distance formula into $PF_1 = PF_2 \\pm 2a$, square to leave one root alone, square again to clear it; what is left is the standard form once $c^2 - a^2$ is named $b^2$.",
      "lines": [
        {
          "line": "The vertex $(a, 0)$ is $c - a$ from $F_1 = (c, 0)$ and $c + a$ from $F_2 = (-c, 0)$.",
          "reason": "Distance on the number line: the three points lie on the $x$-axis, and $c > a > 0$."
        },
        {
          "line": "These two distances differ by $(c + a) - (c - a) = 2a$.",
          "reason": "Subtracting a bracket changes every sign in it, and the two $c$ cancel."
        },
        {
          "line": "So every point $P$ of the hyperbola has $|PF_1 - PF_2| = 2a$.",
          "reason": "Hyperbola: the difference of the distances to the foci is the same for every point of it, and the vertex is one of its points."
        },
        {
          "line": "Let $P = (x, y)$ be a point of the hyperbola, so $|PF_1 - PF_2| = 2a$.",
          "reason": "Line 3."
        },
        {
          "line": "So $PF_1 - PF_2 = 2a$ or $PF_1 - PF_2 = -2a$.",
          "reason": "Absolute value, from arithmetic: the numbers at distance $2a$ from $0$ are $2a$ and $-2a$."
        },
        {
          "line": "So $PF_1 = PF_2 \\pm 2a$, with the plus sign in the first case and the minus sign in the second.",
          "reason": "Adding the same number to both sides: $PF_2$ is added to each side."
        },
        {
          "line": "Here $PF_1 = \\sqrt{(x - c)^2 + y^2}$ and $PF_2 = \\sqrt{(x + c)^2 + y^2}$.",
          "reason": "Distance formula."
        },
        {
          "line": "So $\\sqrt{(x - c)^2 + y^2} = \\sqrt{(x + c)^2 + y^2} \\pm 2a$.",
          "reason": "Substituting a value: line 7 in line 6."
        },
        {
          "line": "So $(x - c)^2 + y^2 = \\left(\\sqrt{(x + c)^2 + y^2} \\pm 2a\\right)^2$.",
          "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
        },
        {
          "line": "So $(x - c)^2 + y^2 = (x + c)^2 + y^2 \\pm 4a\\sqrt{(x + c)^2 + y^2} + 4a^2$.",
          "reason": "Square of a binomial, on the right side."
        },
        {
          "line": "So $\\pm 4a\\sqrt{(x + c)^2 + y^2} = (x - c)^2 - (x + c)^2 - 4a^2$.",
          "reason": "Adding the same number to both sides: $(x + c)^2 + y^2 + 4a^2$ is taken from each side, and the sides are read the other way round."
        },
        {
          "line": "Here $(x - c)^2 - (x + c)^2 = (-2c)(2x) = -4xc$.",
          "reason": "Difference of squares: $(x - c)^2 - (x + c)^2 = \\big((x - c) - (x + c)\\big)\\big((x - c) + (x + c)\\big)$."
        },
        {
          "line": "So $\\pm 4a\\sqrt{(x + c)^2 + y^2} = -4xc - 4a^2$.",
          "reason": "Substituting a value: line 12 in line 11."
        },
        {
          "line": "So $\\pm a\\sqrt{(x + c)^2 + y^2} = -xc - a^2$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
        },
        {
          "line": "So $a^2\\left((x + c)^2 + y^2\\right) = (xc + a^2)^2$.",
          "reason": "Raising both sides to a power: both sides are squared; the square of $\\pm a$ is $a^2$, a number and its opposite have the same square, and the square of a square root is the number under it."
        },
        {
          "line": "So $a^2(x^2 + 2xc + c^2 + y^2) = x^2c^2 + 2xca^2 + a^4$.",
          "reason": "Square of a binomial, on both sides."
        },
        {
          "line": "So $a^2x^2 + 2a^2xc + a^2c^2 + a^2y^2 = x^2c^2 + 2xca^2 + a^4$.",
          "reason": "Multiplying out: $a^2$ multiplies each term in the bracket."
        },
        {
          "line": "So $a^2x^2 + a^2c^2 + a^2y^2 = x^2c^2 + a^4$.",
          "reason": "Adding the same number to both sides: $2a^2xc$ is taken from each side."
        },
        {
          "line": "So $x^2c^2 - a^2x^2 - a^2y^2 = a^2c^2 - a^4$.",
          "reason": "Adding the same number to both sides: $a^2x^2 + a^2y^2 + a^4$ is taken from each side, and the sides are read the other way round."
        },
        {
          "line": "So $x^2(c^2 - a^2) - a^2y^2 = a^2(c^2 - a^2)$.",
          "reason": "Taking out a common factor: $x^2$ from the first two terms on the left, and $a^2$ on the right."
        },
        {
          "line": "So $b^2x^2 - a^2y^2 = a^2b^2$.",
          "reason": "Substituting a value: $c^2 - a^2 = b^2$."
        },
        {
          "line": "So $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $a^2b^2$, which is positive."
        },
        {
          "line": "So every point of the hyperbola lies on the graph of $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$.",
          "reason": "Graph of an equation: line 4 took $P$ as a point of the hyperbola, and line 22 says its coordinates satisfy the equation."
        }
      ]
    },
    {
      "id": "t191-p2",
      "method": "proof by contradiction",
      "statement": "For positive numbers $a$ and $b$, the graph of $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$ does not meet the line $y = \\dfrac{b}{a}x$ or the line $y = -\\dfrac{b}{a}x$.",
      "idea": "A common point would satisfy $\\dfrac{y^2}{b^2} = \\dfrac{x^2}{a^2}$, which makes the left side of the hyperbola's equation $0$, not $1$.",
      "lines": [
        {
          "line": "Suppose that a point $(x, y)$ lies on the graph and on one of the two lines.",
          "reason": "Proof by contradiction: the statement is taken to be false."
        },
        {
          "line": "Then $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$.",
          "reason": "Graph of an equation: the coordinates of a point of the graph satisfy its equation."
        },
        {
          "line": "And $y = \\dfrac{b}{a}x$ or $y = -\\dfrac{b}{a}x$.",
          "reason": "The supposition of line 1."
        },
        {
          "line": "So $y^2 = \\dfrac{b^2}{a^2}x^2$.",
          "reason": "Raising both sides to a power: both sides are squared, and a number and its opposite have the same square."
        },
        {
          "line": "So $\\dfrac{y^2}{b^2} = \\dfrac{x^2}{a^2}$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $b^2$, which is positive."
        },
        {
          "line": "So $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 0$.",
          "reason": "Adding the same number to both sides: $\\dfrac{y^2}{b^2}$ is taken from each side."
        },
        {
          "line": "So $1 = 0$.",
          "reason": "Transitive property: lines 2 and 6 give two values of the same left side."
        },
        {
          "line": "This is false, so no point lies on the graph and on one of the two lines.",
          "reason": "Proof by contradiction: the supposition of line 1 leads to a false statement."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t191-s1",
      "method": "direct proof",
      "statement": "Prove that for positive numbers $a$ and $b$, every point $(x, y)$ of the graph of $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$ has $x^2 \\ge a^2$, and that $x^2 = a^2$ holds only at the vertices $(a, 0)$ and $(-a, 0)$. Facts it may use: graph of an equation, adding the same number to both sides, Trivial Inequality, multiplying by a positive number, adding the same number, substituting a value, multiplying both sides by the same number, if $x^2 = a^2$ then $x = a$ or $x = -a$, Standard form of a hyperbola.",
      "check": {
        "proof": [
          {
            "line": "Let $(x, y)$ be a point of the graph, so $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$.",
            "reason": "Graph of an equation: the coordinates of a point of the graph satisfy its equation."
          },
          {
            "line": "Then $\\dfrac{x^2}{a^2} = 1 + \\dfrac{y^2}{b^2}$.",
            "reason": "Adding the same number to both sides: $\\dfrac{y^2}{b^2}$ is added to each side."
          },
          {
            "line": "Also $y^2 \\ge 0$, with equality only when $y = 0$.",
            "reason": "Trivial Inequality: a square is never negative, and it is $0$ only when the number squared is $0$."
          },
          {
            "line": "So $\\dfrac{y^2}{b^2} \\ge 0$, with equality only when $y = 0$.",
            "reason": "Multiplying by a positive number: both sides of line 3 are multiplied by $\\dfrac{1}{b^2}$."
          },
          {
            "line": "So $1 + \\dfrac{y^2}{b^2} \\ge 1$, with equality only when $y = 0$.",
            "reason": "Adding the same number: $1$ is added to both sides of line 4."
          },
          {
            "line": "So $\\dfrac{x^2}{a^2} \\ge 1$, with equality only when $y = 0$.",
            "reason": "Substituting a value: line 2 gives $\\dfrac{x^2}{a^2}$ for $1 + \\dfrac{y^2}{b^2}$."
          },
          {
            "line": "So $x^2 \\ge a^2$, with equality only when $y = 0$.",
            "reason": "Multiplying by a positive number: both sides of line 6 are multiplied by $a^2$."
          },
          {
            "line": "When $y = 0$, line 2 gives $\\dfrac{x^2}{a^2} = 1$.",
            "reason": "Substituting a value: $y$ is replaced by $0$."
          },
          {
            "line": "So $x^2 = a^2$ when $y = 0$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $a^2$."
          },
          {
            "line": "So $x = a$ or $x = -a$ when $y = 0$.",
            "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
          },
          {
            "line": "So $x^2 = a^2$ holds only at $(a, 0)$ and $(-a, 0)$, which are the vertices of the graph.",
            "reason": "Lines 7 and 10, with Standard form of a hyperbola: the vertices of this graph are $(a, 0)$ and $(-a, 0)$."
          }
        ]
      }
    },
    {
      "id": "t191-s2",
      "method": "proof by cases",
      "statement": "Prove that for positive numbers $a$ and $b$, with $c$ the positive number for which $c^2 = a^2 + b^2$, every point $P$ of the graph of $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$ has $|PF_1 - PF_2| = 2a$, where $F_1 = (c, 0)$ and $F_2 = (-c, 0)$. Facts it may use: graph of an equation, adding the same number to both sides, multiplying both sides by the same number, distance formula, square of a binomial, substituting a value, fractions with letters, Focal relation of a hyperbola, collecting like terms, the root of a square is the absolute value, Trivial Inequality, multiplying by a positive number, adding the same number, powers and roots of positive numbers keep the order, transitivity, absolute value.",
      "check": {
        "proof": [
          {
            "line": "Let $P = (x, y)$ be a point of the graph, so $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$.",
            "reason": "Graph of an equation: the coordinates of a point of the graph satisfy its equation."
          },
          {
            "line": "Then $\\dfrac{x^2}{a^2} - 1 = \\dfrac{y^2}{b^2}$.",
            "reason": "Adding the same number to both sides: $\\dfrac{y^2}{b^2} - 1$ is added to each side."
          },
          {
            "line": "So $y^2 = \\dfrac{b^2x^2}{a^2} - b^2$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $b^2$, and the sides are read the other way round."
          },
          {
            "line": "Also $PF_1^2 = (x - c)^2 + y^2$ and $PF_2^2 = (x + c)^2 + y^2$.",
            "reason": "Distance formula."
          },
          {
            "line": "So $PF_1^2 = x^2 - 2cx + c^2 + y^2$ and $PF_2^2 = x^2 + 2cx + c^2 + y^2$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "So $PF_1^2 = x^2 + \\dfrac{b^2x^2}{a^2} - 2cx + c^2 - b^2$, and $PF_2^2$ is the same with $+2cx$.",
            "reason": "Substituting a value: line 3 in line 5."
          },
          {
            "line": "Here $x^2 + \\dfrac{b^2x^2}{a^2} = \\dfrac{(a^2 + b^2)x^2}{a^2}$.",
            "reason": "Fractions with letters: $x^2 = \\dfrac{a^2x^2}{a^2}$, and fractions with the same denominator are added by adding the tops."
          },
          {
            "line": "So $x^2 + \\dfrac{b^2x^2}{a^2} = \\dfrac{c^2x^2}{a^2}$, and $c^2 - b^2 = a^2$.",
            "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2$."
          },
          {
            "line": "So $PF_1^2 = \\dfrac{c^2x^2}{a^2} - 2cx + a^2$ and $PF_2^2 = \\dfrac{c^2x^2}{a^2} + 2cx + a^2$.",
            "reason": "Collecting like terms: line 8 in line 6."
          },
          {
            "line": "So $PF_1^2 = \\left(\\dfrac{cx}{a} - a\\right)^2$ and $PF_2^2 = \\left(\\dfrac{cx}{a} + a\\right)^2$.",
            "reason": "Square of a binomial, read backwards: twice $\\dfrac{cx}{a}$ times $a$ is $2cx$."
          },
          {
            "line": "So $PF_1 = \\left|\\dfrac{cx}{a} - a\\right|$ and $PF_2 = \\left|\\dfrac{cx}{a} + a\\right|$.",
            "reason": "The root of a square is the absolute value, and a distance is the positive square root of its square."
          },
          {
            "line": "Also $y^2 \\ge 0$.",
            "reason": "Trivial Inequality: a square is never negative."
          },
          {
            "line": "So $\\dfrac{y^2}{b^2} \\ge 0$.",
            "reason": "Multiplying by a positive number: both sides of line 12 are multiplied by $\\dfrac{1}{b^2}$."
          },
          {
            "line": "So $\\dfrac{x^2}{a^2} - 1 \\ge 0$.",
            "reason": "Substituting a value: line 2 gives $\\dfrac{x^2}{a^2} - 1$ for $\\dfrac{y^2}{b^2}$."
          },
          {
            "line": "So $\\dfrac{x^2}{a^2} \\ge 1$.",
            "reason": "Adding the same number: $1$ is added to both sides of line 14."
          },
          {
            "line": "So $x^2 \\ge a^2$.",
            "reason": "Multiplying by a positive number: both sides are multiplied by $a^2$."
          },
          {
            "line": "So $x \\ge a$ or $x \\le -a$.",
            "reason": "Powers and roots of positive numbers keep the order: if $-a < x < a$, then $x^2 < a^2$, against line 16."
          },
          {
            "line": "In the first case, $x \\ge a$, so $\\dfrac{cx}{a} \\ge c$.",
            "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{c}{a}$."
          },
          {
            "line": "Then $\\dfrac{cx}{a} - a \\ge c - a$.",
            "reason": "Adding the same number: $a$ is taken from both sides of line 18."
          },
          {
            "line": "Also $c > a$.",
            "reason": "Focal relation of a hyperbola: $c^2 = a^2 + b^2 > a^2$, and powers and roots of positive numbers keep the order."
          },
          {
            "line": "So $\\dfrac{cx}{a} - a > 0$ and $\\dfrac{cx}{a} + a > 0$.",
            "reason": "Transitivity: lines 19 and 20 give $\\dfrac{cx}{a} - a \\ge c - a > 0$, and $\\dfrac{cx}{a} + a$ is $2a$ more than $\\dfrac{cx}{a} - a$."
          },
          {
            "line": "So $PF_1 = \\dfrac{cx}{a} - a$ and $PF_2 = \\dfrac{cx}{a} + a$.",
            "reason": "Absolute value, from arithmetic: a positive number is its own absolute value; line 11."
          },
          {
            "line": "So $PF_1 - PF_2 = -2a$ in the first case.",
            "reason": "Collecting like terms: the two $\\dfrac{cx}{a}$ cancel."
          },
          {
            "line": "In the second case, $x \\le -a$, so $\\dfrac{cx}{a} \\le -c$.",
            "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{c}{a}$."
          },
          {
            "line": "Then $\\dfrac{cx}{a} + a \\le a - c$.",
            "reason": "Adding the same number: $a$ is added to both sides of line 24."
          },
          {
            "line": "Also $a - c < 0$.",
            "reason": "Adding the same number: $c$ is taken from both sides of line 20, read as $a < c$."
          },
          {
            "line": "So $\\dfrac{cx}{a} + a < 0$ and $\\dfrac{cx}{a} - a < 0$.",
            "reason": "Transitivity: lines 25 and 26 give $\\dfrac{cx}{a} + a \\le a - c < 0$, and $\\dfrac{cx}{a} - a$ is $2a$ less than $\\dfrac{cx}{a} + a$."
          },
          {
            "line": "So $PF_1 = a - \\dfrac{cx}{a}$ and $PF_2 = -\\dfrac{cx}{a} - a$.",
            "reason": "Absolute value, from arithmetic: a negative number's absolute value is its opposite; line 11."
          },
          {
            "line": "So $PF_1 - PF_2 = 2a$ in the second case.",
            "reason": "Collecting like terms: the two $\\dfrac{cx}{a}$ cancel."
          },
          {
            "line": "So in both cases $|PF_1 - PF_2| = 2a$.",
            "reason": "Lines 17, 23 and 29: the two cases cover every point."
          }
        ]
      }
    },
    {
      "id": "t191-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $h$ and $k$ and positive numbers $a$ and $b$, the graph of $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$ is a rectangular hyperbola exactly when $a = b$. Facts it may use: Asymptotes of a hyperbola, point-slope form, Rectangular hyperbola, slopes with product $-1$ mean perpendicular, the product formula, multiplying both sides by the same number, powers and roots of positive numbers keep the order.",
      "check": {
        "proof": [
          {
            "line": "The asymptotes of the graph are $y - k = \\dfrac{b}{a}(x - h)$ and $y - k = -\\dfrac{b}{a}(x - h)$.",
            "reason": "Asymptotes of a hyperbola."
          },
          {
            "line": "Their slopes are $\\dfrac{b}{a}$ and $-\\dfrac{b}{a}$, and neither is vertical.",
            "reason": "Point-slope form: the line $y - y_1 = m(x - x_1)$ has slope $m$."
          },
          {
            "line": "The graph is a rectangular hyperbola exactly when its asymptotes are perpendicular.",
            "reason": "Rectangular hyperbola: a hyperbola whose asymptotes are perpendicular."
          },
          {
            "line": "The asymptotes are perpendicular exactly when $\\dfrac{b}{a} \\cdot \\left(-\\dfrac{b}{a}\\right) = -1$.",
            "reason": "Slopes with product $-1$ mean perpendicular."
          },
          {
            "line": "That product is $-\\dfrac{b^2}{a^2}$, so the condition is $-\\dfrac{b^2}{a^2} = -1$.",
            "reason": "The product formula, from arithmetic."
          },
          {
            "line": "This holds exactly when $b^2 = a^2$.",
            "reason": "Multiplying both sides by the same number: by $-a^2$ one way, and dividing by $-a^2$ the other way."
          },
          {
            "line": "Since $a$ and $b$ are positive, $b^2 = a^2$ holds exactly when $b = a$.",
            "reason": "Powers and roots of positive numbers keep the order: if $b < a$ then $b^2 < a^2$, and if $b > a$ then $b^2 > a^2$."
          },
          {
            "line": "So the graph is a rectangular hyperbola exactly when $a = b$.",
            "reason": "Lines 3, 4, 6 and 7."
          }
        ]
      }
    },
    {
      "id": "t191-s4",
      "method": "proof by contradiction",
      "statement": "Prove that for numbers $h$, $k$ and $d$ with $d \\ne 0$, the graph of $(x - h)(y - k) = d$ does not meet the line $x = h$ or the line $y = k$. Facts it may use: graph of an equation, vertical line $x = c$, horizontal line $y = c$, a product with a factor $0$ is $0$, transitive property.",
      "check": {
        "proof": [
          {
            "line": "Suppose that a point $(x, y)$ of the graph lies on the line $x = h$ or on the line $y = k$.",
            "reason": "Proof by contradiction: the statement is taken to be false."
          },
          {
            "line": "Then $(x - h)(y - k) = d$.",
            "reason": "Graph of an equation: the coordinates of a point of the graph satisfy its equation."
          },
          {
            "line": "On the line $x = h$ the factor $x - h$ is $0$, and on the line $y = k$ the factor $y - k$ is $0$.",
            "reason": "Vertical line $x = c$ and horizontal line $y = c$: every point of the first has $x = c$, and every point of the second has $y = c$."
          },
          {
            "line": "So one of the factors $x - h$ and $y - k$ is $0$.",
            "reason": "Lines 1 and 3."
          },
          {
            "line": "So $(x - h)(y - k) = 0$.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "So $d = 0$.",
            "reason": "Transitive property: lines 2 and 5 give two values of the same product."
          },
          {
            "line": "This contradicts $d \\ne 0$, so no point of the graph lies on either line.",
            "reason": "Proof by contradiction: the supposition of line 1 leads to a statement that contradicts the hypothesis."
          }
        ]
      }
    }
  ]
}
