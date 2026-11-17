export default {
  "number": 200,
  "title": "The Fundamental Theorem of Algebra and graphs of polynomials",
  "section": 13,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "196, 215-219"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-5$ to $1$; beyond these values the graph keeps rising or falling and does not turn.",
    "form": "Answer as an integer.",
    "answer": "5",
    "solution": [
      "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-5$ to $1$; beyond these values the graph keeps rising or falling and does not turn.",
      "The line $y = -20$ meets the graph at $5$ points.",
      "So $f(x) = -20$ for $5$ different numbers $x$.",
      "So $f(x) + 20 = 0$ for $5$ different numbers $x$.",
      "So the polynomial $f(x) + 20$ has $5$ different roots.",
      "The polynomial $f(x) + 20$ has the same degree as $f(x)$.",
      "The degree of $f(x)$ is at least $5$.",
      "The least degree the graph allows is $5$."
    ],
    "figure": {
      "file": "fundamental-theorem-of-algebra-1.svg",
      "alt": "The graph of y = f(x), a smooth curve on a grid with numbered axes."
    }
  },
  "ideas": [
    {
      "name": "Fundamental Theorem of Algebra",
      "concrete": "The polynomial $f(x) = (x + 2)^2(x^2 + 9)$ has degree $4$. Its roots are $-2$, with multiplicity $2$, and $3i$ and $-3i$, each with multiplicity $1$, since $x^2 + 9 = (x - 3i)(x + 3i)$. So, each root counted as often as its multiplicity, $f(x)$ has four roots, and $f(x) = (x + 2)^2(x - 3i)(x + 3i)$.",
      "general": "A polynomial $f(x)$ of degree $n$, with $n \\ge 1$ and real or complex coefficients, has exactly $n$ complex roots when each root is counted as often as its multiplicity: $f(x) = a(x - r_1)(x - r_2)\\cdots(x - r_n)$, with $a$ its leading coefficient and $r_1, r_2, \\dots, r_n$ its roots, a root of multiplicity $k$ written $k$ times. This is the **Fundamental Theorem of Algebra**. It is taken here with no proof."
    },
    {
      "name": "At most n roots",
      "concrete": "The polynomial $f(x) = 2(x + 4)(x - 5)(x - 6)$ has degree $3$ and the three different roots $-4$, $5$ and $6$. At a fourth number every bracket is nonzero, as at $x = 3$: $f(3) = 2 \\cdot 7 \\cdot (-2) \\cdot (-3) = 84$. So $f(x)$ has no fourth root.",
      "general": "A nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots; for $n = 0$ it is a nonzero number and has no root. This is **At most n roots**."
    }
  ],
  "kinds": [
    {
      "id": "t200-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-8$ to $1$; beyond these values the graph keeps rising or falling and does not turn.",
            "figure": {
              "file": "fundamental-theorem-of-algebra-2.svg",
              "alt": "The graph of y = f(x), a smooth curve on a grid with numbered axes."
            },
            "lines": [
              {
                "step": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-8$ to $1$; beyond these values the graph keeps rising or falling and does not turn.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The line $y = 20$ meets the graph at $4$ points.",
                "reason": "Horizontal line $y = c$: the line through the points at height $20$ meets the graph at the $4$ points read from the figure."
              },
              {
                "step": "So $f(x) = 20$ for $4$ different numbers $x$.",
                "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 20$."
              },
              {
                "step": "So $f(x) - 20 = 0$ for $4$ different numbers $x$.",
                "reason": "Adding the same number to both sides: $20$ is taken from both sides of $f(x) = 20$, which leaves $0$ on the right."
              },
              {
                "step": "So the polynomial $f(x) - 20$ has $4$ different roots.",
                "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
              },
              {
                "step": "The polynomial $f(x) - 20$ has the same degree as $f(x)$.",
                "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
              },
              {
                "step": "The degree of $f(x)$ is at least $4$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) - 20$ has $4$ different roots."
              },
              {
                "step": "The least degree the graph allows is $4$.",
                "reason": "Answering the question asked: by line 7 the graph rules out every degree below $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-4$ to $5$; beyond these values the graph keeps rising or falling and does not turn.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-3.svg",
                "alt": "The graph of y = f(x), a smooth curve on a grid with numbered axes."
              },
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-4$ to $5$; beyond these values the graph keeps rising or falling and does not turn.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line $y = 24$ meets the graph at $3$ points.",
                  "reason": "Horizontal line $y = c$: the line through the points at height $24$ meets the graph at the $3$ points read from the figure."
                },
                {
                  "step": "So $f(x) = 24$ for $3$ different numbers $x$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 24$."
                },
                {
                  "step": "So $f(x) - 24 = 0$ for $3$ different numbers $x$.",
                  "reason": "Adding the same number to both sides: $24$ is taken from both sides of $f(x) = 24$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) - 24$ has $3$ different roots.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) - 24$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $3$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) - 24$ has $3$ different roots."
                },
                {
                  "step": "The least degree the graph allows is $3$.",
                  "reason": "Answering the question asked: by line 7 the graph rules out every degree below $3$."
                }
              ]
            },
            {
              "prompt": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-1$ to $8$; beyond these values the graph keeps rising or falling and does not turn.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-4.svg",
                "alt": "The graph of y = f(x), a smooth curve on a grid with numbered axes."
              },
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-1$ to $8$; beyond these values the graph keeps rising or falling and does not turn.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line $y = -4$ meets the graph at $6$ points.",
                  "reason": "Horizontal line $y = c$: the line through the points at height $-4$ meets the graph at the $6$ points read from the figure."
                },
                {
                  "step": "So $f(x) = -4$ for $6$ different numbers $x$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = -4$."
                },
                {
                  "step": "So $f(x) + 4 = 0$ for $6$ different numbers $x$.",
                  "reason": "Adding the same number to both sides: $-4$ is taken from both sides of $f(x) = -4$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) + 4$ has $6$ different roots.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) + 4$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $6$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) + 4$ has $6$ different roots."
                },
                {
                  "step": "The least degree the graph allows is $6$.",
                  "reason": "Answering the question asked: by line 7 the graph rules out every degree below $6$."
                }
              ]
            },
            {
              "prompt": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-6$ to $2$; beyond these values the graph keeps rising or falling and does not turn.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-5.svg",
                "alt": "The graph of y = f(x), a smooth curve on a grid with numbered axes."
              },
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the least degree of the polynomial $f(x)$ that the graph in the figure allows. The figure shows the graph of $y = f(x)$ for $x$ from $-6$ to $2$; beyond these values the graph keeps rising or falling and does not turn.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line $y = 22$ meets the graph at $7$ points.",
                  "reason": "Horizontal line $y = c$: the line through the points at height $22$ meets the graph at the $7$ points read from the figure."
                },
                {
                  "step": "So $f(x) = 22$ for $7$ different numbers $x$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 22$."
                },
                {
                  "step": "So $f(x) - 22 = 0$ for $7$ different numbers $x$.",
                  "reason": "Adding the same number to both sides: $22$ is taken from both sides of $f(x) = 22$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) - 22$ has $7$ different roots.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) - 22$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $7$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) - 22$ has $7$ different roots."
                },
                {
                  "step": "The least degree the graph allows is $7$.",
                  "reason": "Answering the question asked: by line 7 the graph rules out every degree below $7$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t200-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number of complex roots of $f(x) = (2x^3 + 6)^3(2x^3 - 3x^2 - 8x) + 8x^{10} - 12$, each root counted as often as its multiplicity.",
            "lines": [
              {
                "step": "Find the number of complex roots of $f(x) = (2x^3 + 6)^3(2x^3 - 3x^2 - 8x) + 8x^{10} - 12$, each root counted as often as its multiplicity.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The leading term of $(2x^3 + 6)^3$ is $8x^9$.",
                "reason": "The leading term of a product is the product of the leading terms: $3$ factors $2x^3$ multiply to $8x^9$."
              },
              {
                "step": "The leading term of $(2x^3 + 6)^3(2x^3 - 3x^2 - 8x)$ is $16x^{12}$.",
                "reason": "The leading term of a product is the product of the leading terms: $8x^9$ times $2x^3$."
              },
              {
                "step": "The degree of $f(x)$ is $12$.",
                "reason": "Degree: the other terms, $8x^{10} - 12$, have powers below $12$, so $16x^{12}$ is the leading term of $f(x)$."
              },
              {
                "step": "So $f(x)$ has $12$ complex roots, each counted as often as its multiplicity.",
                "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of complex roots of $f(x) = (3x^3 + 5x^2)^2(3x^3 - 4x^2 + 4x) + 2x^8 - 5$, each root counted as often as its multiplicity.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the number of complex roots of $f(x) = (3x^3 + 5x^2)^2(3x^3 - 4x^2 + 4x) + 2x^8 - 5$, each root counted as often as its multiplicity.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The leading term of $(3x^3 + 5x^2)^2$ is $9x^6$.",
                  "reason": "The leading term of a product is the product of the leading terms: $2$ factors $3x^3$ multiply to $9x^6$."
                },
                {
                  "step": "The leading term of $(3x^3 + 5x^2)^2(3x^3 - 4x^2 + 4x)$ is $27x^9$.",
                  "reason": "The leading term of a product is the product of the leading terms: $9x^6$ times $3x^3$."
                },
                {
                  "step": "The degree of $f(x)$ is $9$.",
                  "reason": "Degree: the other terms, $2x^8 - 5$, have powers below $9$, so $27x^9$ is the leading term of $f(x)$."
                },
                {
                  "step": "So $f(x)$ has $9$ complex roots, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity."
                }
              ]
            },
            {
              "prompt": "Find the number of complex roots of $f(x) = (2x^3 - 5x^2)^3(x^3 - 3x^2) + 5x^{10} - 4$, each root counted as often as its multiplicity.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the number of complex roots of $f(x) = (2x^3 - 5x^2)^3(x^3 - 3x^2) + 5x^{10} - 4$, each root counted as often as its multiplicity.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The leading term of $(2x^3 - 5x^2)^3$ is $8x^9$.",
                  "reason": "The leading term of a product is the product of the leading terms: $3$ factors $2x^3$ multiply to $8x^9$."
                },
                {
                  "step": "The leading term of $(2x^3 - 5x^2)^3(x^3 - 3x^2)$ is $8x^{12}$.",
                  "reason": "The leading term of a product is the product of the leading terms: $8x^9$ times $x^3$."
                },
                {
                  "step": "The degree of $f(x)$ is $12$.",
                  "reason": "Degree: the other terms, $5x^{10} - 4$, have powers below $12$, so $8x^{12}$ is the leading term of $f(x)$."
                },
                {
                  "step": "So $f(x)$ has $12$ complex roots, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity."
                }
              ]
            },
            {
              "prompt": "Find the number of complex roots of $f(x) = (x^3 - 6x^2)^2(2x^2 - 9x - 9) + 15x^7 + 4$, each root counted as often as its multiplicity.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the number of complex roots of $f(x) = (x^3 - 6x^2)^2(2x^2 - 9x - 9) + 15x^7 + 4$, each root counted as often as its multiplicity.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The leading term of $(x^3 - 6x^2)^2$ is $x^6$.",
                  "reason": "The leading term of a product is the product of the leading terms: $2$ factors $x^3$ multiply to $x^6$."
                },
                {
                  "step": "The leading term of $(x^3 - 6x^2)^2(2x^2 - 9x - 9)$ is $2x^8$.",
                  "reason": "The leading term of a product is the product of the leading terms: $x^6$ times $2x^2$."
                },
                {
                  "step": "The degree of $f(x)$ is $8$.",
                  "reason": "Degree: the other terms, $15x^7 + 4$, have powers below $8$, so $2x^8$ is the leading term of $f(x)$."
                },
                {
                  "step": "So $f(x)$ has $8$ complex roots, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = 4(x^3 - 2x^2 - 8x)^2$ and $q(x) = (2x^3 - 8x^2 + 3)^2$.",
            "lines": [
              {
                "step": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = 4(x^3 - 2x^2 - 8x)^2$ and $q(x) = (2x^3 - 8x^2 + 3)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The equation $p(x) = q(x)$ holds exactly when $p(x) - q(x) = 0$.",
                "reason": "Adding the same number to both sides: $q(x)$ is taken from both sides."
              },
              {
                "step": "$4(x^3 - 2x^2 - 8x)^2 = 4x^6 - 16x^5 - 48x^4 + 128x^3 + 256x^2$",
                "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
              },
              {
                "step": "$(2x^3 - 8x^2 + 3)^2 = 4x^6 - 32x^5 + 64x^4 + 12x^3 - 48x^2 + 9$",
                "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
              },
              {
                "step": "$p(x) - q(x) = 4x^6 - 16x^5 - 48x^4 + 128x^3 + 256x^2 - (4x^6 - 32x^5 + 64x^4 + 12x^3 - 48x^2 + 9)$",
                "reason": "Substitution: lines 3 and 4 take the places of the two parts."
              },
              {
                "step": "$p(x) - q(x) = 4x^6 - 16x^5 - 48x^4 + 128x^3 + 256x^2 - 4x^6 + 32x^5 - 64x^4 - 12x^3 + 48x^2 - 9$",
                "reason": "Subtracting a bracket changes every sign in it: each term of line 4 is taken away."
              },
              {
                "step": "$p(x) - q(x) = 16x^5 - 112x^4 + 116x^3 + 304x^2 - 9$",
                "reason": "Collecting like terms: the terms in $x^6$ cancel, and the terms in each lower power are added."
              },
              {
                "step": "The degree of $p(x) - q(x)$ is $5$.",
                "reason": "Degree: the highest power of $x$ with a nonzero coefficient is $x^5$."
              },
              {
                "step": "So $p(x) = q(x)$ has $5$ complex solutions, each counted as often as its multiplicity.",
                "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity. By line 2, the solutions of $p(x) = q(x)$ are the roots of $p(x) - q(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = (2x^3 + 5x^2 - 9)^2$ and $q(x) = (2x^3 + 5x^2 + 6)^2$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = (2x^3 + 5x^2 - 9)^2$ and $q(x) = (2x^3 + 5x^2 + 6)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The equation $p(x) = q(x)$ holds exactly when $p(x) - q(x) = 0$.",
                  "reason": "Adding the same number to both sides: $q(x)$ is taken from both sides."
                },
                {
                  "step": "$(2x^3 + 5x^2 - 9)^2 = 4x^6 + 20x^5 + 25x^4 - 36x^3 - 90x^2 + 81$",
                  "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
                },
                {
                  "step": "$(2x^3 + 5x^2 + 6)^2 = 4x^6 + 20x^5 + 25x^4 + 24x^3 + 60x^2 + 36$",
                  "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
                },
                {
                  "step": "$p(x) - q(x) = 4x^6 + 20x^5 + 25x^4 - 36x^3 - 90x^2 + 81 - (4x^6 + 20x^5 + 25x^4 + 24x^3 + 60x^2 + 36)$",
                  "reason": "Substitution: lines 3 and 4 take the places of the two parts."
                },
                {
                  "step": "$p(x) - q(x) = 4x^6 + 20x^5 + 25x^4 - 36x^3 - 90x^2 + 81 - 4x^6 - 20x^5 - 25x^4 - 24x^3 - 60x^2 - 36$",
                  "reason": "Subtracting a bracket changes every sign in it: each term of line 4 is taken away."
                },
                {
                  "step": "$p(x) - q(x) = -60x^3 - 150x^2 + 45$",
                  "reason": "Collecting like terms: the terms in $x^6$ cancel, and the terms in each lower power are added."
                },
                {
                  "step": "The degree of $p(x) - q(x)$ is $3$.",
                  "reason": "Degree: the highest power of $x$ with a nonzero coefficient is $x^3$."
                },
                {
                  "step": "So $p(x) = q(x)$ has $3$ complex solutions, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity. By line 2, the solutions of $p(x) = q(x)$ are the roots of $p(x) - q(x)$."
                }
              ]
            },
            {
              "prompt": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = (x^3 - 5x^2 + 7)^2$ and $q(x) = (x^3 - 5x^2 - 4)^2$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = (x^3 - 5x^2 + 7)^2$ and $q(x) = (x^3 - 5x^2 - 4)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The equation $p(x) = q(x)$ holds exactly when $p(x) - q(x) = 0$.",
                  "reason": "Adding the same number to both sides: $q(x)$ is taken from both sides."
                },
                {
                  "step": "$(x^3 - 5x^2 + 7)^2 = x^6 - 10x^5 + 25x^4 + 14x^3 - 70x^2 + 49$",
                  "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
                },
                {
                  "step": "$(x^3 - 5x^2 - 4)^2 = x^6 - 10x^5 + 25x^4 - 8x^3 + 40x^2 + 16$",
                  "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
                },
                {
                  "step": "$p(x) - q(x) = x^6 - 10x^5 + 25x^4 + 14x^3 - 70x^2 + 49 - (x^6 - 10x^5 + 25x^4 - 8x^3 + 40x^2 + 16)$",
                  "reason": "Substitution: lines 3 and 4 take the places of the two parts."
                },
                {
                  "step": "$p(x) - q(x) = x^6 - 10x^5 + 25x^4 + 14x^3 - 70x^2 + 49 - x^6 + 10x^5 - 25x^4 + 8x^3 - 40x^2 - 16$",
                  "reason": "Subtracting a bracket changes every sign in it: each term of line 4 is taken away."
                },
                {
                  "step": "$p(x) - q(x) = 22x^3 - 110x^2 + 33$",
                  "reason": "Collecting like terms: the terms in $x^6$ cancel, and the terms in each lower power are added."
                },
                {
                  "step": "The degree of $p(x) - q(x)$ is $3$.",
                  "reason": "Degree: the highest power of $x$ with a nonzero coefficient is $x^3$."
                },
                {
                  "step": "So $p(x) = q(x)$ has $3$ complex solutions, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity. By line 2, the solutions of $p(x) = q(x)$ are the roots of $p(x) - q(x)$."
                }
              ]
            },
            {
              "prompt": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = 4(x^3 + 9x + 4)^2$ and $q(x) = (2x^3 + 2x^2 - 3x)^2$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the number of complex solutions of $p(x) = q(x)$, each counted as often as its multiplicity, where $p(x) = 4(x^3 + 9x + 4)^2$ and $q(x) = (2x^3 + 2x^2 - 3x)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The equation $p(x) = q(x)$ holds exactly when $p(x) - q(x) = 0$.",
                  "reason": "Adding the same number to both sides: $q(x)$ is taken from both sides."
                },
                {
                  "step": "$4(x^3 + 9x + 4)^2 = 4x^6 + 72x^4 + 32x^3 + 324x^2 + 288x + 64$",
                  "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
                },
                {
                  "step": "$(2x^3 + 2x^2 - 3x)^2 = 4x^6 + 8x^5 - 8x^4 - 12x^3 + 9x^2$",
                  "reason": "Multiplying out: each bracket multiplies the others term by term, and like terms are collected."
                },
                {
                  "step": "$p(x) - q(x) = 4x^6 + 72x^4 + 32x^3 + 324x^2 + 288x + 64 - (4x^6 + 8x^5 - 8x^4 - 12x^3 + 9x^2)$",
                  "reason": "Substitution: lines 3 and 4 take the places of the two parts."
                },
                {
                  "step": "$p(x) - q(x) = 4x^6 + 72x^4 + 32x^3 + 324x^2 + 288x + 64 - 4x^6 - 8x^5 + 8x^4 + 12x^3 - 9x^2$",
                  "reason": "Subtracting a bracket changes every sign in it: each term of line 4 is taken away."
                },
                {
                  "step": "$p(x) - q(x) = -8x^5 + 80x^4 + 44x^3 + 315x^2 + 288x + 64$",
                  "reason": "Collecting like terms: the terms in $x^6$ cancel, and the terms in each lower power are added."
                },
                {
                  "step": "The degree of $p(x) - q(x)$ is $5$.",
                  "reason": "Degree: the highest power of $x$ with a nonzero coefficient is $x^5$."
                },
                {
                  "step": "So $p(x) = q(x)$ has $5$ complex solutions, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $n$, with $n \\ge 1$, has exactly $n$ complex roots, each counted as often as its multiplicity. By line 2, the solutions of $p(x) = q(x)$ are the roots of $p(x) - q(x)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t200-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $f(x)$, the polynomial of degree less than $5$ whose graph is in the figure. The graph meets the $x$-axis at A, B and C and the $y$-axis at D$(0, 10)$; read A, B and C from the grid.",
            "figure": {
              "file": "fundamental-theorem-of-algebra-20.svg",
              "alt": "The graph of a polynomial on a grid with numbered axes; it meets the x-axis at the marked points A, B and C, and the y-axis at the marked point D."
            },
            "lines": [
              {
                "step": "Find $f(x)$, the polynomial of degree less than $5$ whose graph is in the figure. The graph meets the $x$-axis at A, B and C and the $y$-axis at D$(0, 10)$; read A, B and C from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The line $y = 4$ meets the graph at $4$ points.",
                "reason": "Horizontal line $y = c$: the line through the points at height $4$ meets the graph at the $4$ points read from the figure."
              },
              {
                "step": "So $f(x) = 4$ for $4$ different numbers $x$.",
                "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 4$."
              },
              {
                "step": "So $f(x) - 4 = 0$ for $4$ different numbers $x$.",
                "reason": "Adding the same number to both sides: $4$ is taken from both sides of $f(x) = 4$, which leaves $0$ on the right."
              },
              {
                "step": "So the polynomial $f(x) - 4$ has $4$ different roots.",
                "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
              },
              {
                "step": "The polynomial $f(x) - 4$ has the same degree as $f(x)$.",
                "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
              },
              {
                "step": "The degree of $f(x)$ is at least $4$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) - 4$ has $4$ different roots."
              },
              {
                "step": "The degree of $f(x)$ is $4$.",
                "reason": "Degree: a degree is a whole number, and the problem gives one less than $5$."
              },
              {
                "step": "The points are A$(1, 0)$, B$(5, 0)$ and C$(8, 0)$.",
                "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
              },
              {
                "step": "The roots of $f(x)$ are $1$, $5$ and $8$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "The graph crosses the $x$-axis at B and C and touches it at A.",
                "reason": "Graph of a function: the curve is read where it meets the $x$-axis."
              },
              {
                "step": "So the roots $5$ and $8$ have odd multiplicity and the root $1$ has even multiplicity.",
                "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
              },
              {
                "step": "The product $(x - 1)^2(x - 5)(x - 8)$ is a factor of $f(x)$.",
                "reason": "Multiplicity, with the Fundamental Theorem of Algebra: $f(x)$ is a nonzero number times brackets $x - r$, so the product is a factor, since each of its roots has in $f(x)$ a multiplicity at least its power here."
              },
              {
                "step": "So $f(x) = a(x - 1)^2(x - 5)(x - 8)$ for a number $a$.",
                "reason": "Degree of a product is the sum of the degrees: the product has degree $4$, as $f(x)$ has, so the other factor has degree $0$ and is a nonzero number $a$."
              },
              {
                "step": "$10 = a(0 - 1)^2(0 - 5)(0 - 8)$",
                "reason": "Substituting a value: D$(0, 10)$ lies on the graph, so $0$ goes in place of $x$ and $10$ in place of $f(x)$."
              },
              {
                "step": "$10 = 40a$",
                "reason": "Order of operations: each bracket is worked out, then each power, then the product."
              },
              {
                "step": "$a = \\dfrac{1}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $40$."
              },
              {
                "step": "$f(x) = \\dfrac{1}{4}(x - 1)^2(x - 5)(x - 8)$",
                "reason": "Substituting a value: $\\dfrac{1}{4}$ goes in place of $a$ in line 14."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, the polynomial of degree less than $4$ whose graph is in the figure. The graph meets the $x$-axis at A and B and the $y$-axis at C$(0, 12)$; read A and B from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-21.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes; it meets the x-axis at the marked points A and B, and the y-axis at the marked point C."
              },
              "form": "Answer as an expression, or equivalent.",
              "answer": "-4*(x+1)^2*(x-3)",
              "lines": [
                {
                  "step": "Find $f(x)$, the polynomial of degree less than $4$ whose graph is in the figure. The graph meets the $x$-axis at A and B and the $y$-axis at C$(0, 12)$; read A and B from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line $y = 5$ meets the graph at $3$ points.",
                  "reason": "Horizontal line $y = c$: the line through the points at height $5$ meets the graph at the $3$ points read from the figure."
                },
                {
                  "step": "So $f(x) = 5$ for $3$ different numbers $x$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 5$."
                },
                {
                  "step": "So $f(x) - 5 = 0$ for $3$ different numbers $x$.",
                  "reason": "Adding the same number to both sides: $5$ is taken from both sides of $f(x) = 5$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) - 5$ has $3$ different roots.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) - 5$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $3$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) - 5$ has $3$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $3$.",
                  "reason": "Degree: a degree is a whole number, and the problem gives one less than $4$."
                },
                {
                  "step": "The points are A$(-1, 0)$ and B$(3, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The roots of $f(x)$ are $-1$ and $3$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The graph crosses the $x$-axis at B and touches it at A.",
                  "reason": "Graph of a function: the curve is read where it meets the $x$-axis."
                },
                {
                  "step": "So the root $3$ has odd multiplicity and the root $-1$ has even multiplicity.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
                },
                {
                  "step": "The product $(x + 1)^2(x - 3)$ is a factor of $f(x)$.",
                  "reason": "Multiplicity, with the Fundamental Theorem of Algebra: $f(x)$ is a nonzero number times brackets $x - r$, so the product is a factor, since each of its roots has in $f(x)$ a multiplicity at least its power here."
                },
                {
                  "step": "So $f(x) = a(x + 1)^2(x - 3)$ for a number $a$.",
                  "reason": "Degree of a product is the sum of the degrees: the product has degree $3$, as $f(x)$ has, so the other factor has degree $0$ and is a nonzero number $a$."
                },
                {
                  "step": "$12 = a(0 + 1)^2(0 - 3)$",
                  "reason": "Substituting a value: C$(0, 12)$ lies on the graph, so $0$ goes in place of $x$ and $12$ in place of $f(x)$."
                },
                {
                  "step": "$12 = -3a$",
                  "reason": "Order of operations: each bracket is worked out, then each power, then the product."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "$f(x) = -4(x + 1)^2(x - 3)$",
                  "reason": "Substituting a value: $-4$ goes in place of $a$ in line 14."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, the polynomial of degree less than $6$ whose graph is in the figure. The graph meets the $x$-axis at A, B, C and D and the $y$-axis at E$(0, 20)$; read A, B, C and D from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-22.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes; it meets the x-axis at the marked points A, B, C and D, and the y-axis at the marked point E."
              },
              "form": "Answer as an expression, or equivalent.",
              "answer": "-1/2*(x+5)*(x+4)*(x+1)^2*(x-2)",
              "lines": [
                {
                  "step": "Find $f(x)$, the polynomial of degree less than $6$ whose graph is in the figure. The graph meets the $x$-axis at A, B, C and D and the $y$-axis at E$(0, 20)$; read A, B, C and D from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line $y = 10$ meets the graph at $5$ points.",
                  "reason": "Horizontal line $y = c$: the line through the points at height $10$ meets the graph at the $5$ points read from the figure."
                },
                {
                  "step": "So $f(x) = 10$ for $5$ different numbers $x$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 10$."
                },
                {
                  "step": "So $f(x) - 10 = 0$ for $5$ different numbers $x$.",
                  "reason": "Adding the same number to both sides: $10$ is taken from both sides of $f(x) = 10$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) - 10$ has $5$ different roots.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) - 10$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $5$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) - 10$ has $5$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $5$.",
                  "reason": "Degree: a degree is a whole number, and the problem gives one less than $6$."
                },
                {
                  "step": "The points are A$(-5, 0)$, B$(-4, 0)$, C$(-1, 0)$ and D$(2, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The roots of $f(x)$ are $-5$, $-4$, $-1$ and $2$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The graph crosses the $x$-axis at A, B and D and touches it at C.",
                  "reason": "Graph of a function: the curve is read where it meets the $x$-axis."
                },
                {
                  "step": "So the roots $-5$, $-4$ and $2$ have odd multiplicity and the root $-1$ has even multiplicity.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
                },
                {
                  "step": "The product $(x + 5)(x + 4)(x + 1)^2(x - 2)$ is a factor of $f(x)$.",
                  "reason": "Multiplicity, with the Fundamental Theorem of Algebra: $f(x)$ is a nonzero number times brackets $x - r$, so the product is a factor, since each of its roots has in $f(x)$ a multiplicity at least its power here."
                },
                {
                  "step": "So $f(x) = a(x + 5)(x + 4)(x + 1)^2(x - 2)$ for a number $a$.",
                  "reason": "Degree of a product is the sum of the degrees: the product has degree $5$, as $f(x)$ has, so the other factor has degree $0$ and is a nonzero number $a$."
                },
                {
                  "step": "$20 = a(0 + 5)(0 + 4)(0 + 1)^2(0 - 2)$",
                  "reason": "Substituting a value: E$(0, 20)$ lies on the graph, so $0$ goes in place of $x$ and $20$ in place of $f(x)$."
                },
                {
                  "step": "$20 = -40a$",
                  "reason": "Order of operations: each bracket is worked out, then each power, then the product."
                },
                {
                  "step": "$a = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-40$."
                },
                {
                  "step": "$f(x) = -\\dfrac{1}{2}(x + 5)(x + 4)(x + 1)^2(x - 2)$",
                  "reason": "Substituting a value: $-\\dfrac{1}{2}$ goes in place of $a$ in line 14."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, the polynomial of degree less than $6$ whose graph is in the figure. The graph meets the $x$-axis at A, B and C and the $y$-axis at D$(0, -288)$; read A, B and C from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-23.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes; it meets the x-axis at the marked points A, B and C, and the y-axis at the marked point D."
              },
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*(x+3)^2*(x-2)^2*(x-4)",
              "lines": [
                {
                  "step": "Find $f(x)$, the polynomial of degree less than $6$ whose graph is in the figure. The graph meets the $x$-axis at A, B and C and the $y$-axis at D$(0, -288)$; read A, B and C from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The line $y = -50$ meets the graph at $5$ points.",
                  "reason": "Horizontal line $y = c$: the line through the points at height $-50$ meets the graph at the $5$ points read from the figure."
                },
                {
                  "step": "So $f(x) = -50$ for $5$ different numbers $x$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = -50$."
                },
                {
                  "step": "So $f(x) + 50 = 0$ for $5$ different numbers $x$.",
                  "reason": "Adding the same number to both sides: $-50$ is taken from both sides of $f(x) = -50$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) + 50$ has $5$ different roots.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) + 50$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $5$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Here $f(x) + 50$ has $5$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $5$.",
                  "reason": "Degree: a degree is a whole number, and the problem gives one less than $6$."
                },
                {
                  "step": "The points are A$(-3, 0)$, B$(2, 0)$ and C$(4, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The roots of $f(x)$ are $-3$, $2$ and $4$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The graph crosses the $x$-axis at C and touches it at A and B.",
                  "reason": "Graph of a function: the curve is read where it meets the $x$-axis."
                },
                {
                  "step": "So the root $4$ has odd multiplicity and the roots $-3$ and $2$ have even multiplicity.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
                },
                {
                  "step": "The product $(x + 3)^2(x - 2)^2(x - 4)$ is a factor of $f(x)$.",
                  "reason": "Multiplicity, with the Fundamental Theorem of Algebra: $f(x)$ is a nonzero number times brackets $x - r$, so the product is a factor, since each of its roots has in $f(x)$ a multiplicity at least its power here."
                },
                {
                  "step": "So $f(x) = a(x + 3)^2(x - 2)^2(x - 4)$ for a number $a$.",
                  "reason": "Degree of a product is the sum of the degrees: the product has degree $5$, as $f(x)$ has, so the other factor has degree $0$ and is a nonzero number $a$."
                },
                {
                  "step": "$-288 = a(0 + 3)^2(0 - 2)^2(0 - 4)$",
                  "reason": "Substituting a value: D$(0, -288)$ lies on the graph, so $0$ goes in place of $x$ and $-288$ in place of $f(x)$."
                },
                {
                  "step": "$-288 = -144a$",
                  "reason": "Order of operations: each bracket is worked out, then each power, then the product."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-144$."
                },
                {
                  "step": "$f(x) = 2(x + 3)^2(x - 2)^2(x - 4)$",
                  "reason": "Substituting a value: $2$ goes in place of $a$ in line 14."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A, B and C and the origin, and nowhere else, and passes through P$(4, -72)$; read A, B and C from the grid.",
            "figure": {
              "file": "fundamental-theorem-of-algebra-31.svg",
              "alt": "The graph of a polynomial on a grid with numbered axes; it crosses the x-axis at the marked points A, B and C and at the origin, and passes through the marked point P."
            },
            "lines": [
              {
                "step": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A, B and C and the origin, and nowhere else, and passes through P$(4, -72)$; read A, B and C from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The points are A$(1, 0)$, B$(5, 0)$ and C$(6, 0)$, with the origin $(0, 0)$.",
                "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
              },
              {
                "step": "The $4$ different roots of $f(x)$ are $0$, $1$, $5$ and $6$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "The degree of $f(x)$ is at least $4$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
              },
              {
                "step": "The degree of $f(x)$ is $4$.",
                "reason": "Degree: the problem asks for the least degree the graph allows, and line 4 allows none below $4$."
              },
              {
                "step": "So $f(x) = ax(x - 1)(x - 5)(x - 6)$, with $a$ its leading coefficient.",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$-72 = a(4)(4 - 1)(4 - 5)(4 - 6)$",
                "reason": "Substituting a value: P lies on the graph, so $4$ goes in place of $x$ and $-72$ in place of $f(x)$."
              },
              {
                "step": "$-72 = 24a$",
                "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
              },
              {
                "step": "$a = -3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $24$."
              },
              {
                "step": "$f(x) = -3x(x - 1)(x - 5)(x - 6)$",
                "reason": "Substituting a value: $-3$ goes in place of $a$ in line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A and B and the origin, and nowhere else, and passes through P$(-4, 16)$; read A and B from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-32.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes; it crosses the x-axis at the marked points A and B and at the origin, and passes through the marked point P."
              },
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*(x+5)*(x+2)*x",
              "lines": [
                {
                  "step": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A and B and the origin, and nowhere else, and passes through P$(-4, 16)$; read A and B from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A$(-5, 0)$ and B$(-2, 0)$, with the origin $(0, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The $3$ different roots of $f(x)$ are $-5$, $-2$ and $0$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The degree of $f(x)$ is at least $3$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $3$.",
                  "reason": "Degree: the problem asks for the least degree the graph allows, and line 4 allows none below $3$."
                },
                {
                  "step": "So $f(x) = a(x + 5)(x + 2)x$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$16 = a(-4 + 5)(-4 + 2)(-4)$",
                  "reason": "Substituting a value: P lies on the graph, so $-4$ goes in place of $x$ and $16$ in place of $f(x)$."
                },
                {
                  "step": "$16 = 8a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$f(x) = 2(x + 5)(x + 2)x$",
                  "reason": "Substituting a value: $2$ goes in place of $a$ in line 6."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A, B, C and D and the origin, and nowhere else, and passes through P$(1, 36)$; read A, B, C and D from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-33.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes; it crosses the x-axis at the marked points A, B, C and D and at the origin, and passes through the marked point P."
              },
              "form": "Answer as an expression, or equivalent.",
              "answer": "3*(x+2)*(x+1)*x*(x-2)*(x-3)",
              "lines": [
                {
                  "step": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A, B, C and D and the origin, and nowhere else, and passes through P$(1, 36)$; read A, B, C and D from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A$(-2, 0)$, B$(-1, 0)$, C$(2, 0)$ and D$(3, 0)$, with the origin $(0, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The $5$ different roots of $f(x)$ are $-2$, $-1$, $0$, $2$ and $3$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The degree of $f(x)$ is at least $5$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $5$.",
                  "reason": "Degree: the problem asks for the least degree the graph allows, and line 4 allows none below $5$."
                },
                {
                  "step": "So $f(x) = a(x + 2)(x + 1)x(x - 2)(x - 3)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$36 = a(1 + 2)(1 + 1)(1)(1 - 2)(1 - 3)$",
                  "reason": "Substituting a value: P lies on the graph, so $1$ goes in place of $x$ and $36$ in place of $f(x)$."
                },
                {
                  "step": "$36 = 12a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                },
                {
                  "step": "$f(x) = 3(x + 2)(x + 1)x(x - 2)(x - 3)$",
                  "reason": "Substituting a value: $3$ goes in place of $a$ in line 6."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A, B and C and the origin, and nowhere else, and passes through P$(-1, -10)$; read A, B and C from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-34.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes; it crosses the x-axis at the marked points A, B and C and at the origin, and passes through the marked point P."
              },
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2/3*(x+4)*(x+2)*x*(x-4)",
              "lines": [
                {
                  "step": "Find $f(x)$, the polynomial of the least degree that its graph allows, whose graph is in the figure. The graph crosses the $x$-axis at A, B and C and the origin, and nowhere else, and passes through P$(-1, -10)$; read A, B and C from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A$(-4, 0)$, B$(-2, 0)$ and C$(4, 0)$, with the origin $(0, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The $4$ different roots of $f(x)$ are $-4$, $-2$, $0$ and $4$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The degree of $f(x)$ is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $4$.",
                  "reason": "Degree: the problem asks for the least degree the graph allows, and line 4 allows none below $4$."
                },
                {
                  "step": "So $f(x) = a(x + 4)(x + 2)x(x - 4)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$-10 = a(-1 + 4)(-1 + 2)(-1)(-1 - 4)$",
                  "reason": "Substituting a value: P lies on the graph, so $-1$ goes in place of $x$ and $-10$ in place of $f(x)$."
                },
                {
                  "step": "$-10 = 15a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = -\\dfrac{2}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
                },
                {
                  "step": "$f(x) = -\\dfrac{2}{3}(x + 4)(x + 2)x(x - 4)$",
                  "reason": "Substituting a value: $-\\dfrac{2}{3}$ goes in place of $a$ in line 6."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t200-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = 20$ at $4$ points, crosses the $x$-axis at $-7$ and $-6$ and touches it at $-1$, and meets the $y$-axis at $(0, 126)$, and write that line right.",
            "given": [
              "The degree of $f(x)$ is $4$.",
              "$f(x) = a(x + 7)(x - 6)(x + 1)^2$",
              "$f(0) = a \\cdot 7 \\cdot (-6) \\cdot 1^2$",
              "$126 = -42a$",
              "$a = -3$",
              "$f(x) = -3(x + 7)(x - 6)(x + 1)^2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = 20$ at $4$ points, crosses the $x$-axis at $-7$ and $-6$ and touches it at $-1$, and meets the $y$-axis at $(0, 126)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $f(x) - 20$ has $4$ different roots, so $f(x)$ has degree at least $4$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) - 20$ has the degree of $f(x)$."
              },
              {
                "step": "Line 1 is right, since the degree is also less than $5$.",
                "reason": "Degree: a degree is a whole number, and the only one from $4$ up and below $5$ is $4$."
              },
              {
                "step": "Line 2 writes the root $-6$ as the bracket $x - 6$, so the minus sign of $-6$ is lost.",
                "reason": "A sign lost: the root $-6$ gives the bracket $x + 6$, which is $0$ at $x = -6$."
              },
              {
                "step": "Each line before line 2 is right, and each later line follows from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Transitive property: each later line takes its values from the line before it."
              },
              {
                "step": "Line 2 written right is $f(x) = a(x + 7)(x + 6)(x + 1)^2$.",
                "reason": "Subtraction as addition, from arithmetic: the root $-6$ gives $x - (-6)$, which is $x + 6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $6$, with $a$ its leading coefficient, whose graph meets the line $y = 2$ at $5$ points, crosses the $x$-axis at $5$, $6$ and $7$ and touches it at $2$, and meets the $y$-axis at $(0, 420)$, and write that line right.",
              "given": [
                "The degree of $f(x)$ is $5$.",
                "$f(x) = a(x - 2)^2(x - 5)(x - 6)(x - 7)$",
                "$f(0) = a \\cdot (-2)^2 \\cdot 5 \\cdot (-6) \\cdot (-7)$",
                "$420 = 840a$",
                "$a = \\dfrac{1}{2}$",
                "$f(x) = \\dfrac{1}{2}(x - 2)^2(x - 5)(x - 6)(x - 7)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(0) = a*(-2)^2*(-5)*(-6)*(-7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $6$, with $a$ its leading coefficient, whose graph meets the line $y = 2$ at $5$ points, crosses the $x$-axis at $5$, $6$ and $7$ and touches it at $2$, and meets the $y$-axis at $(0, 420)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $f(x) - 2$ has $5$ different roots, so $f(x)$ has degree at least $5$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) - 2$ has the degree of $f(x)$."
                },
                {
                  "step": "Line 1 is right, since the degree is also less than $6$.",
                  "reason": "Degree: a degree is a whole number, and the only one from $5$ up and below $6$ is $5$."
                },
                {
                  "step": "Line 3 gives the bracket $0 - 5$ the value $5$, but its value is $-5$.",
                  "reason": "A sign lost: $0 - 5$ takes $5$ away from $0$, so it is negative."
                },
                {
                  "step": "Each line before line 3 is right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 3 written right is $f(0) = a \\cdot (-2)^2 \\cdot (-5) \\cdot (-6) \\cdot (-7)$.",
                  "reason": "Subtraction as addition, from arithmetic: $0 - 5 = 0 + (-5) = -5$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $6$, with $a$ its leading coefficient, whose graph meets the line $y = -50$ at $5$ points, crosses the $x$-axis at $-2$, $4$ and $6$ and touches it at $1$, and meets the $y$-axis at $(0, -72)$, and write that line right.",
              "given": [
                "The degree of $f(x)$ is $5$.",
                "$f(x) = a(x - 2)(x - 1)^2(x - 4)(x - 6)$",
                "$f(0) = a \\cdot (-2) \\cdot (-1)^2 \\cdot (-4) \\cdot (-6)$",
                "$-72 = -48a$",
                "$a = \\dfrac{3}{2}$",
                "$f(x) = \\dfrac{3}{2}(x - 2)(x - 1)^2(x - 4)(x - 6)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(x) = a*(x+2)*(x-1)^2*(x-4)*(x-6)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $6$, with $a$ its leading coefficient, whose graph meets the line $y = -50$ at $5$ points, crosses the $x$-axis at $-2$, $4$ and $6$ and touches it at $1$, and meets the $y$-axis at $(0, -72)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $f(x) + 50$ has $5$ different roots, so $f(x)$ has degree at least $5$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) + 50$ has the degree of $f(x)$."
                },
                {
                  "step": "Line 1 is right, since the degree is also less than $6$.",
                  "reason": "Degree: a degree is a whole number, and the only one from $5$ up and below $6$ is $5$."
                },
                {
                  "step": "Line 2 writes the root $-2$ as the bracket $x - 2$, so the minus sign of $-2$ is lost.",
                  "reason": "A sign lost: the root $-2$ gives the bracket $x + 2$, which is $0$ at $x = -2$."
                },
                {
                  "step": "Each line before line 2 is right, and each later line follows from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 2 written right is $f(x) = a(x + 2)(x - 1)^2(x - 4)(x - 6)$.",
                  "reason": "Subtraction as addition, from arithmetic: the root $-2$ gives $x - (-2)$, which is $x + 2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $6$, with $a$ its leading coefficient, whose graph meets the line $y = -2$ at $5$ points, crosses the $x$-axis at $2$, $3$ and $8$ and touches it at $6$, and meets the $y$-axis at $(0, -432)$, and write that line right.",
              "given": [
                "The degree of $f(x)$ is $5$.",
                "$f(x) = a(x - 2)(x - 3)(x - 6)^2(x - 8)$",
                "$f(0) = a \\cdot (-2) \\cdot (-3) \\cdot (-6)^2 \\cdot 8$",
                "$-432 = 1728a$",
                "$a = -\\dfrac{1}{4}$",
                "$f(x) = -\\dfrac{1}{4}(x - 2)(x - 3)(x - 6)^2(x - 8)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(0) = a*(-2)*(-3)*(-6)^2*(-8)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $6$, with $a$ its leading coefficient, whose graph meets the line $y = -2$ at $5$ points, crosses the $x$-axis at $2$, $3$ and $8$ and touches it at $6$, and meets the $y$-axis at $(0, -432)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $f(x) + 2$ has $5$ different roots, so $f(x)$ has degree at least $5$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) + 2$ has the degree of $f(x)$."
                },
                {
                  "step": "Line 1 is right, since the degree is also less than $6$.",
                  "reason": "Degree: a degree is a whole number, and the only one from $5$ up and below $6$ is $5$."
                },
                {
                  "step": "Line 3 gives the bracket $0 - 8$ the value $8$, but its value is $-8$.",
                  "reason": "A sign lost: $0 - 8$ takes $8$ away from $0$, so it is negative."
                },
                {
                  "step": "Each line before line 3 is right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 3 written right is $f(0) = a \\cdot (-2) \\cdot (-3) \\cdot (-6)^2 \\cdot (-8)$.",
                  "reason": "Subtraction as addition, from arithmetic: $0 - 8 = 0 + (-8) = -8$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = -5$ at $4$ points, crosses the $x$-axis at $1$ and $2$ and touches it at $6$, and meets the $y$-axis at $(0, -108)$, and write that line right.",
            "given": [
              "The degree of $f(x)$ is $4$.",
              "$f(x) = a(x - 1)(x - 2)(x - 6)^2$",
              "$f(0) = a \\cdot (-1) \\cdot (-2) \\cdot (-6)^2$",
              "$-108 = 72a$",
              "$a = \\dfrac{3}{2}$",
              "$f(x) = \\dfrac{3}{2}(x - 1)(x - 2)(x - 6)^2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = -5$ at $4$ points, crosses the $x$-axis at $1$ and $2$ and touches it at $6$, and meets the $y$-axis at $(0, -108)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $f(x) + 5$ has $4$ different roots, so $f(x)$ has degree at least $4$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) + 5$ has the degree of $f(x)$."
              },
              {
                "step": "Line 1 is right, since the degree is also less than $5$.",
                "reason": "Degree: a degree is a whole number, and the only one from $4$ up and below $5$ is $4$."
              },
              {
                "step": "Line 5 gives $-108 \\div 72$ the value $\\dfrac{3}{2}$, but its value is $-\\dfrac{3}{2}$.",
                "reason": "A sign lost: the quotient of two numbers of opposite signs is negative."
              },
              {
                "step": "Each line before line 5 is right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
                "reason": "Transitive property: each later line takes its values from the line before it."
              },
              {
                "step": "Line 5 written right is $a = -\\dfrac{3}{2}$.",
                "reason": "Signs of products, from arithmetic: a quotient is negative exactly when its two numbers have opposite signs."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $4$, with $a$ its leading coefficient, whose graph meets the line $y = -2$ at $3$ points, crosses the $x$-axis at $4$ and touches it at $-2$, and meets the $y$-axis at $(0, -8)$, and write that line right.",
              "given": [
                "The degree of $f(x)$ is $3$.",
                "$f(x) = a(x + 2)^2(x - 4)$",
                "$f(0) = a \\cdot 2^2 \\cdot (-4)$",
                "$-8 = 16a$",
                "$a = -\\dfrac{1}{2}$",
                "$f(x) = -\\dfrac{1}{2}(x + 2)^2(x - 4)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -8 = -16*a",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $4$, with $a$ its leading coefficient, whose graph meets the line $y = -2$ at $3$ points, crosses the $x$-axis at $4$ and touches it at $-2$, and meets the $y$-axis at $(0, -8)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $f(x) + 2$ has $3$ different roots, so $f(x)$ has degree at least $3$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) + 2$ has the degree of $f(x)$."
                },
                {
                  "step": "Line 1 is right, since the degree is also less than $4$.",
                  "reason": "Degree: a degree is a whole number, and the only one from $3$ up and below $4$ is $3$."
                },
                {
                  "step": "Line 4 gives the product in line 3 the value $16$, but its value is $-16$.",
                  "reason": "A sign lost: the product has an odd number of negative factors, so it is negative."
                },
                {
                  "step": "Each line before line 4 is right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 4 written right is $-8 = -16a$.",
                  "reason": "Signs of products, from arithmetic: an even number of negative factors gives a positive product, and an odd number a negative one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = -5$ at $4$ points, crosses the $x$-axis at $-2$ and $-1$ and touches it at $-5$, and meets the $y$-axis at $(0, -150)$, and write that line right.",
              "given": [
                "The degree of $f(x)$ is $4$.",
                "$f(x) = a(x + 5)^2(x + 2)(x + 1)$",
                "$f(0) = a \\cdot 5^2 \\cdot 2 \\cdot 1$",
                "$-150 = 50a$",
                "$a = 3$",
                "$f(x) = 3(x + 5)^2(x + 2)(x + 1)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: a = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = -5$ at $4$ points, crosses the $x$-axis at $-2$ and $-1$ and touches it at $-5$, and meets the $y$-axis at $(0, -150)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $f(x) + 5$ has $4$ different roots, so $f(x)$ has degree at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) + 5$ has the degree of $f(x)$."
                },
                {
                  "step": "Line 1 is right, since the degree is also less than $5$.",
                  "reason": "Degree: a degree is a whole number, and the only one from $4$ up and below $5$ is $4$."
                },
                {
                  "step": "Line 5 gives $-150 \\div 50$ the value $3$, but its value is $-3$.",
                  "reason": "A sign lost: the quotient of two numbers of opposite signs is negative."
                },
                {
                  "step": "Each line before line 5 is right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 5 written right is $a = -3$.",
                  "reason": "Signs of products, from arithmetic: a quotient is negative exactly when its two numbers have opposite signs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = 5$ at $4$ points, crosses the $x$-axis at $-1$ and $7$ and touches it at $3$, and meets the $y$-axis at $(0, 42)$, and write that line right.",
              "given": [
                "The degree of $f(x)$ is $4$.",
                "$f(x) = a(x + 1)(x - 3)^2(x - 7)$",
                "$f(0) = a \\cdot 1 \\cdot (-3)^2 \\cdot (-7)$",
                "$42 = 63a$",
                "$a = \\dfrac{2}{3}$",
                "$f(x) = \\dfrac{2}{3}(x + 1)(x - 3)^2(x - 7)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 42 = -63*a",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree less than $5$, with $a$ its leading coefficient, whose graph meets the line $y = 5$ at $4$ points, crosses the $x$-axis at $-1$ and $7$ and touches it at $3$, and meets the $y$-axis at $(0, 42)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $f(x) - 5$ has $4$ different roots, so $f(x)$ has degree at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots. The polynomial $f(x) - 5$ has the degree of $f(x)$."
                },
                {
                  "step": "Line 1 is right, since the degree is also less than $5$.",
                  "reason": "Degree: a degree is a whole number, and the only one from $4$ up and below $5$ is $4$."
                },
                {
                  "step": "Line 4 gives the product in line 3 the value $63$, but its value is $-63$.",
                  "reason": "A sign lost: the product has an odd number of negative factors, so it is negative."
                },
                {
                  "step": "Each line before line 4 is right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 4 written right is $42 = -63a$.",
                  "reason": "Signs of products, from arithmetic: an even number of negative factors gives a positive product, and an odd number a negative one."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t200-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = -3(x + 2)^2(x + 1)$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = -3(x + 2)^2(x + 1)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph meets the $x$-axis at $(-2, 0)$ and $(-1, 0)$.",
                "reason": "Zero-product property: $y = 0$ exactly when one bracket is $0$, at $x = -2$ and $x = -1$."
              },
              {
                "step": "The graph meets the $y$-axis at $(0, -12)$.",
                "reason": "Substituting a value: at $x = 0$, $y = -3(0 + 2)^2(0 + 1) = -12$."
              },
              {
                "step": "In this product the root $-2$ has multiplicity $2$ and the root $-1$ has multiplicity $1$.",
                "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket."
              },
              {
                "step": "The graph touches the $x$-axis at $(-2, 0)$ and crosses it at $(-1, 0)$.",
                "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
              },
              {
                "step": "The graph is above the $x$-axis for $x < -2$ and $-2 < x < -1$, and below it for $x > -1$.",
                "reason": "Sign table: for $x$ above every root each bracket is positive, so $y$ has the sign of $-3$, and the sign changes at a root of odd multiplicity only."
              },
              {
                "step": "So the graph turns on the $x$-axis at $(-2, 0)$, and once between $x = -2$ and $x = -1$, above the $x$-axis.",
                "reason": "Sign table: between two neighbouring roots the graph stays on one side of the axis and meets it at both roots, so a sketch turns once between them; at a touch it turns on the axis.",
                "figure": {
                  "file": "fundamental-theorem-of-algebra-42.svg",
                  "alt": "The sketch: a smooth curve through the marked intercepts, turning where the lines above say."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -\\dfrac{1}{3}(x - 1)(x - 4)^2(x - 6)$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "crosses the $x$-axis at $(1, 0)$",
                  "touches the $x$-axis at $(4, 0)$",
                  "crosses the $x$-axis at $(6, 0)$",
                  "$(0, -32)$"
                ],
                "turning": [
                  "$(4, 0)$",
                  "a turning point between $x = 1$ and $x = 4$, above the $x$-axis",
                  "a turning point between $x = 4$ and $x = 6$, above the $x$-axis"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -\\dfrac{1}{3}(x - 1)(x - 4)^2(x - 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph meets the $x$-axis at $(1, 0)$, $(4, 0)$ and $(6, 0)$.",
                  "reason": "Zero-product property: $y = 0$ exactly when one bracket is $0$, at $x = 1$, $x = 4$ and $x = 6$."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, -32)$.",
                  "reason": "Substituting a value: at $x = 0$, $y = -\\dfrac{1}{3}(0 - 1)(0 - 4)^2(0 - 6) = -32$."
                },
                {
                  "step": "In this product the root $1$ has multiplicity $1$, the root $4$ has multiplicity $2$ and the root $6$ has multiplicity $1$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket."
                },
                {
                  "step": "The graph touches the $x$-axis at $(4, 0)$ and crosses it at $(1, 0)$ and $(6, 0)$.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
                },
                {
                  "step": "The graph is above the $x$-axis for $1 < x < 4$ and $4 < x < 6$, and below it for $x < 1$ and $x > 6$.",
                  "reason": "Sign table: for $x$ above every root each bracket is positive, so $y$ has the sign of $-\\dfrac{1}{3}$, and the sign changes at a root of odd multiplicity only."
                },
                {
                  "step": "So the graph turns on the $x$-axis at $(4, 0)$, once between $x = 1$ and $x = 4$, above the $x$-axis, and once between $x = 4$ and $x = 6$, above the $x$-axis.",
                  "reason": "Sign table: between two neighbouring roots the graph stays on one side of the axis and meets it at both roots, so a sketch turns once between them; at a touch it turns on the axis.",
                  "figure": {
                    "file": "fundamental-theorem-of-algebra-43.svg",
                    "alt": "The sketch: a smooth curve through the marked intercepts, turning where the lines above say."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{1}{2}(x - 2)^2(x - 5)(x - 7)$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "touches the $x$-axis at $(2, 0)$",
                  "crosses the $x$-axis at $(5, 0)$",
                  "crosses the $x$-axis at $(7, 0)$",
                  "$(0, 70)$"
                ],
                "turning": [
                  "$(2, 0)$",
                  "a turning point between $x = 2$ and $x = 5$, above the $x$-axis",
                  "a turning point between $x = 5$ and $x = 7$, below the $x$-axis"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{1}{2}(x - 2)^2(x - 5)(x - 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph meets the $x$-axis at $(2, 0)$, $(5, 0)$ and $(7, 0)$.",
                  "reason": "Zero-product property: $y = 0$ exactly when one bracket is $0$, at $x = 2$, $x = 5$ and $x = 7$."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 70)$.",
                  "reason": "Substituting a value: at $x = 0$, $y = \\dfrac{1}{2}(0 - 2)^2(0 - 5)(0 - 7) = 70$."
                },
                {
                  "step": "In this product the root $2$ has multiplicity $2$, the root $5$ has multiplicity $1$ and the root $7$ has multiplicity $1$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket."
                },
                {
                  "step": "The graph touches the $x$-axis at $(2, 0)$ and crosses it at $(5, 0)$ and $(7, 0)$.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
                },
                {
                  "step": "The graph is above the $x$-axis for $x < 2$, $2 < x < 5$ and $x > 7$, and below it for $5 < x < 7$.",
                  "reason": "Sign table: for $x$ above every root each bracket is positive, so $y$ has the sign of $\\dfrac{1}{2}$, and the sign changes at a root of odd multiplicity only."
                },
                {
                  "step": "So the graph turns on the $x$-axis at $(2, 0)$, once between $x = 2$ and $x = 5$, above the $x$-axis, and once between $x = 5$ and $x = 7$, below the $x$-axis.",
                  "reason": "Sign table: between two neighbouring roots the graph stays on one side of the axis and meets it at both roots, so a sketch turns once between them; at a touch it turns on the axis.",
                  "figure": {
                    "file": "fundamental-theorem-of-algebra-44.svg",
                    "alt": "The sketch: a smooth curve through the marked intercepts, turning where the lines above say."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\dfrac{2}{3}(x + 5)(x + 3)^2(x - 3)^2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "crosses the $x$-axis at $(-5, 0)$",
                  "touches the $x$-axis at $(-3, 0)$",
                  "touches the $x$-axis at $(3, 0)$",
                  "$(0, 270)$"
                ],
                "turning": [
                  "$(-3, 0)$",
                  "$(3, 0)$",
                  "a turning point between $x = -5$ and $x = -3$, above the $x$-axis",
                  "a turning point between $x = -3$ and $x = 3$, above the $x$-axis"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\dfrac{2}{3}(x + 5)(x + 3)^2(x - 3)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph meets the $x$-axis at $(-5, 0)$, $(-3, 0)$ and $(3, 0)$.",
                  "reason": "Zero-product property: $y = 0$ exactly when one bracket is $0$, at $x = -5$, $x = -3$ and $x = 3$."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 270)$.",
                  "reason": "Substituting a value: at $x = 0$, $y = \\dfrac{2}{3}(0 + 5)(0 + 3)^2(0 - 3)^2 = 270$."
                },
                {
                  "step": "In this product the root $-5$ has multiplicity $1$, the root $-3$ has multiplicity $2$ and the root $3$ has multiplicity $2$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket."
                },
                {
                  "step": "The graph touches the $x$-axis at $(-3, 0)$ and $(3, 0)$ and crosses it at $(-5, 0)$.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the $x$-axis at a root of odd multiplicity and touches it at a root of even multiplicity."
                },
                {
                  "step": "The graph is above the $x$-axis for $-5 < x < -3$, $-3 < x < 3$ and $x > 3$, and below it for $x < -5$.",
                  "reason": "Sign table: for $x$ above every root each bracket is positive, so $y$ has the sign of $\\dfrac{2}{3}$, and the sign changes at a root of odd multiplicity only."
                },
                {
                  "step": "So the graph turns on the $x$-axis at $(-3, 0)$ and $(3, 0)$, once between $x = -5$ and $x = -3$, above the $x$-axis, and once between $x = -3$ and $x = 3$, above the $x$-axis.",
                  "reason": "Sign table: between two neighbouring roots the graph stays on one side of the axis and meets it at both roots, so a sketch turns once between them; at a touch it turns on the axis.",
                  "figure": {
                    "file": "fundamental-theorem-of-algebra-45.svg",
                    "alt": "The sketch: a smooth curve through the marked intercepts, turning where the lines above say."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = 2$ at A, B and C and passes through P$(2, 18)$. Read A, B and C from the grid.",
            "figure": {
              "file": "fundamental-theorem-of-algebra-53.svg",
              "alt": "The graph of a polynomial on a grid with numbered axes, and a horizontal line; the curve meets the line at the marked points A, B and C, and passes through the marked point P."
            },
            "lines": [
              {
                "step": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = 2$ at A, B and C and passes through P$(2, 18)$. Read A, B and C from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The points are A$(3, 2)$, B$(6, 2)$ and C$(8, 2)$.",
                "reason": "Coordinates: each point is read from the numbers along the axes."
              },
              {
                "step": "So $f(x) = 2$ at $x = 3$, $x = 6$ and $x = 8$.",
                "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 2$."
              },
              {
                "step": "So $f(x) - 2 = 0$ at $x = 3$, $x = 6$ and $x = 8$.",
                "reason": "Adding the same number to both sides: $2$ is taken from both sides of $f(x) = 2$, which leaves $0$ on the right."
              },
              {
                "step": "So the polynomial $f(x) - 2$ has the $3$ different roots $3$, $6$ and $8$.",
                "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
              },
              {
                "step": "The polynomial $f(x) - 2$ has the same degree as $f(x)$.",
                "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
              },
              {
                "step": "The degree of $f(x)$ is at least $3$.",
                "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
              },
              {
                "step": "The degree of $f(x)$ is $3$.",
                "reason": "Degree: the problem gives the least degree the graph allows, and line 7 allows none below $3$."
              },
              {
                "step": "So $f(x) - 2 = a(x - 3)(x - 6)(x - 8)$, with $a$ its leading coefficient.",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$18 - 2 = a(2 - 3)(2 - 6)(2 - 8)$",
                "reason": "Substituting a value: P lies on the graph, so $2$ goes in place of $x$ and $18$ in place of $f(x)$."
              },
              {
                "step": "$16 = -24a$",
                "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
              },
              {
                "step": "$a = -\\dfrac{2}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$."
              },
              {
                "step": "$f(x) - 2 = -\\dfrac{2}{3}(x - 3)(x - 6)(x - 8)$",
                "reason": "Substituting a value: $-\\dfrac{2}{3}$ goes in place of $a$ in line 9."
              },
              {
                "step": "$f(x) = -\\dfrac{2}{3}(x - 3)(x - 6)(x - 8) + 2$",
                "reason": "Adding the same number to both sides: $2$ is added to both sides."
              },
              {
                "step": "$y = -\\dfrac{2}{3}(x - 3)(x - 6)(x - 8) + 2$",
                "reason": "Graph of a function: the graph is $y = f(x)$, so $y$ stands for $f(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = -6$ at A, B, C and D and passes through P$(-4, 4)$. Read A, B, C and D from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-54.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes, and a horizontal line; the curve meets the line at the marked points A, B, C and D, and passes through the marked point P."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -2/3*(x+5)*(x+3)*(x+1)*(x-1)-6",
              "lines": [
                {
                  "step": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = -6$ at A, B, C and D and passes through P$(-4, 4)$. Read A, B, C and D from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A$(-5, -6)$, B$(-3, -6)$, C$(-1, -6)$ and D$(1, -6)$.",
                  "reason": "Coordinates: each point is read from the numbers along the axes."
                },
                {
                  "step": "So $f(x) = -6$ at $x = -5$, $x = -3$, $x = -1$ and $x = 1$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = -6$."
                },
                {
                  "step": "So $f(x) + 6 = 0$ at $x = -5$, $x = -3$, $x = -1$ and $x = 1$.",
                  "reason": "Adding the same number to both sides: $-6$ is taken from both sides of $f(x) = -6$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) + 6$ has the $4$ different roots $-5$, $-3$, $-1$ and $1$.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) + 6$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $4$.",
                  "reason": "Degree: the problem gives the least degree the graph allows, and line 7 allows none below $4$."
                },
                {
                  "step": "So $f(x) + 6 = a(x + 5)(x + 3)(x + 1)(x - 1)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$4 + 6 = a(-4 + 5)(-4 + 3)(-4 + 1)(-4 - 1)$",
                  "reason": "Substituting a value: P lies on the graph, so $-4$ goes in place of $x$ and $4$ in place of $f(x)$."
                },
                {
                  "step": "$10 = -15a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = -\\dfrac{2}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-15$."
                },
                {
                  "step": "$f(x) + 6 = -\\dfrac{2}{3}(x + 5)(x + 3)(x + 1)(x - 1)$",
                  "reason": "Substituting a value: $-\\dfrac{2}{3}$ goes in place of $a$ in line 9."
                },
                {
                  "step": "$f(x) = -\\dfrac{2}{3}(x + 5)(x + 3)(x + 1)(x - 1) - 6$",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                },
                {
                  "step": "$y = -\\dfrac{2}{3}(x + 5)(x + 3)(x + 1)(x - 1) - 6$",
                  "reason": "Graph of a function: the graph is $y = f(x)$, so $y$ stands for $f(x)$."
                }
              ]
            },
            {
              "prompt": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = -5$ at A, B and C and passes through P$(2, -35)$. Read A, B and C from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-55.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes, and a horizontal line; the curve meets the line at the marked points A, B and C, and passes through the marked point P."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -2*(x-1)*(x-5)*(x-7)-5",
              "lines": [
                {
                  "step": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = -5$ at A, B and C and passes through P$(2, -35)$. Read A, B and C from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A$(1, -5)$, B$(5, -5)$ and C$(7, -5)$.",
                  "reason": "Coordinates: each point is read from the numbers along the axes."
                },
                {
                  "step": "So $f(x) = -5$ at $x = 1$, $x = 5$ and $x = 7$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = -5$."
                },
                {
                  "step": "So $f(x) + 5 = 0$ at $x = 1$, $x = 5$ and $x = 7$.",
                  "reason": "Adding the same number to both sides: $-5$ is taken from both sides of $f(x) = -5$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) + 5$ has the $3$ different roots $1$, $5$ and $7$.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) + 5$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $3$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $3$.",
                  "reason": "Degree: the problem gives the least degree the graph allows, and line 7 allows none below $3$."
                },
                {
                  "step": "So $f(x) + 5 = a(x - 1)(x - 5)(x - 7)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$-35 + 5 = a(2 - 1)(2 - 5)(2 - 7)$",
                  "reason": "Substituting a value: P lies on the graph, so $2$ goes in place of $x$ and $-35$ in place of $f(x)$."
                },
                {
                  "step": "$-30 = 15a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
                },
                {
                  "step": "$f(x) + 5 = -2(x - 1)(x - 5)(x - 7)$",
                  "reason": "Substituting a value: $-2$ goes in place of $a$ in line 9."
                },
                {
                  "step": "$f(x) = -2(x - 1)(x - 5)(x - 7) - 5$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                },
                {
                  "step": "$y = -2(x - 1)(x - 5)(x - 7) - 5$",
                  "reason": "Graph of a function: the graph is $y = f(x)$, so $y$ stands for $f(x)$."
                }
              ]
            },
            {
              "prompt": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = 5$ at A, B, C and D and passes through P$(-6, 2)$. Read A, B, C and D from the grid.",
              "figure": {
                "file": "fundamental-theorem-of-algebra-56.svg",
                "alt": "The graph of a polynomial on a grid with numbered axes, and a horizontal line; the curve meets the line at the marked points A, B, C and D, and passes through the marked point P."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -1/2*(x+8)*(x+7)*(x+5)*(x+3)+5",
              "lines": [
                {
                  "step": "Write an equation of the graph in the figure, with $y$ alone on the left. The graph is of $y = f(x)$, a polynomial of the least degree that the graph allows; it meets the line $y = 5$ at A, B, C and D and passes through P$(-6, 2)$. Read A, B, C and D from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A$(-8, 5)$, B$(-7, 5)$, C$(-5, 5)$ and D$(-3, 5)$.",
                  "reason": "Coordinates: each point is read from the numbers along the axes."
                },
                {
                  "step": "So $f(x) = 5$ at $x = -8$, $x = -7$, $x = -5$ and $x = -3$.",
                  "reason": "A common point of two graphs satisfies both equations: at each of these points $y = f(x)$ and $y = 5$."
                },
                {
                  "step": "So $f(x) - 5 = 0$ at $x = -8$, $x = -7$, $x = -5$ and $x = -3$.",
                  "reason": "Adding the same number to both sides: $5$ is taken from both sides of $f(x) = 5$, which leaves $0$ on the right."
                },
                {
                  "step": "So the polynomial $f(x) - 5$ has the $4$ different roots $-8$, $-7$, $-5$ and $-3$.",
                  "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of a polynomial $g(x)$ when $g(r) = 0$."
                },
                {
                  "step": "The polynomial $f(x) - 5$ has the same degree as $f(x)$.",
                  "reason": "Degree: taking a number from $f(x)$ changes only its constant term, and $f(x)$ is not a constant, since its graph is not a horizontal line."
                },
                {
                  "step": "The degree of $f(x)$ is at least $4$.",
                  "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
                },
                {
                  "step": "The degree of $f(x)$ is $4$.",
                  "reason": "Degree: the problem gives the least degree the graph allows, and line 7 allows none below $4$."
                },
                {
                  "step": "So $f(x) - 5 = a(x + 8)(x + 7)(x + 5)(x + 3)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$2 - 5 = a(-6 + 8)(-6 + 7)(-6 + 5)(-6 + 3)$",
                  "reason": "Substituting a value: P lies on the graph, so $-6$ goes in place of $x$ and $2$ in place of $f(x)$."
                },
                {
                  "step": "$-3 = 6a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$f(x) - 5 = -\\dfrac{1}{2}(x + 8)(x + 7)(x + 5)(x + 3)$",
                  "reason": "Substituting a value: $-\\dfrac{1}{2}$ goes in place of $a$ in line 9."
                },
                {
                  "step": "$f(x) = -\\dfrac{1}{2}(x + 8)(x + 7)(x + 5)(x + 3) + 5$",
                  "reason": "Adding the same number to both sides: $5$ is added to both sides."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}(x + 8)(x + 7)(x + 5)(x + 3) + 5$",
                  "reason": "Graph of a function: the graph is $y = f(x)$, so $y$ stands for $f(x)$."
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
      "id": "t200-p1",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial with real coefficients of degree $n$, with $n \\ge 1$, and let $c$ be a real number. Then the graphs of $y = c$ and $y = f(x)$ meet at no more than $n$ points.",
      "idea": "Each common point gives a root of $f(x) - c$, a polynomial of degree $n$, and At most n roots allows no more than $n$ of them.",
      "lines": [
        {
          "line": "Let $r$ be the $x$-coordinate of a point where the graphs of $y = c$ and $y = f(x)$ meet.",
          "reason": "The proof starts from one common point, since the statement is about each of them."
        },
        {
          "line": "$f(r) = c$",
          "reason": "A common point of two graphs satisfies both equations: at the point, $y = f(r)$ and $y = c$."
        },
        {
          "line": "$f(r) - c = 0$",
          "reason": "Adding the same number to both sides: $c$ is taken from both sides of line 2."
        },
        {
          "line": "So $r$ is a root of the polynomial $g(x) = f(x) - c$.",
          "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of $g(x)$ when $g(r) = 0$."
        },
        {
          "line": "The polynomial $g(x)$ has degree $n$.",
          "reason": "Degree: taking the number $c$ from $f(x)$ changes only the constant term, and $n \\ge 1$, so the leading term of $f(x)$ stays."
        },
        {
          "line": "The polynomial $g(x)$ has at most $n$ different roots.",
          "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
        },
        {
          "line": "Two different common points have different $x$-coordinates.",
          "reason": "Horizontal line $y = c$: every point of the line has $y$-coordinate $c$, so two of its points with one $x$-coordinate are one point."
        },
        {
          "line": "So the graphs meet at no more than $n$ points.",
          "reason": "Lines 4, 6 and 7: each common point gives its own root of $g(x)$, and there are at most $n$ roots."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t200-s1",
      "method": "proof by contradiction",
      "statement": "Prove that a nonzero polynomial $f(x)$ of degree $n$, with $n \\ge 0$, has at most $n$ different roots. Facts it may use: Factored form, degree, leading coefficient, substituting a value, zero-product property, the definition of a root.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $f(x)$ has more than $n$ different roots.",
            "reason": "Proof by contradiction: the proof supposes the opposite of the statement."
          },
          {
            "line": "Then $f(x)$ has $n + 1$ different roots $r_1, r_2, \\dots, r_{n+1}$.",
            "reason": "Line 1: more than $n$ roots hold $n + 1$ different ones."
          },
          {
            "line": "Let $a$ be the leading coefficient of $f(x)$; then $a \\ne 0$.",
            "reason": "Leading coefficient: the coefficient of the highest power of $x$ in $f(x)$, which is not $0$."
          },
          {
            "line": "Then $f(x) = a(x - r_1)(x - r_2)\\cdots(x - r_n)$, a product with no bracket when $n = 0$.",
            "reason": "Factored form: for $n \\ge 1$, $f(x)$ has degree $n$ and the $n$ different roots $r_1, \\dots, r_n$; for $n = 0$, by its degree, $f(x)$ is the number $a$."
          },
          {
            "line": "$f(r_{n+1}) = a(r_{n+1} - r_1)(r_{n+1} - r_2)\\cdots(r_{n+1} - r_n)$",
            "reason": "Substituting a value: $r_{n+1}$ goes in place of $x$ in line 4."
          },
          {
            "line": "Each bracket $r_{n+1} - r_k$, with $k$ from $1$ to $n$, is not $0$.",
            "reason": "Line 2: the roots are different, so $r_{n+1} \\ne r_k$; for $n = 0$ there is no bracket."
          },
          {
            "line": "$f(r_{n+1}) \\ne 0$",
            "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and by lines 3 and 6 none is; for $n = 0$ the product is $a$ alone."
          },
          {
            "line": "$f(r_{n+1}) = 0$",
            "reason": "Factor Theorem, its definition of a root: $r_{n+1}$ is a root of $f(x)$ by line 2."
          },
          {
            "line": "Lines 7 and 8 contradict each other, so $f(x)$ has at most $n$ different roots.",
            "reason": "Proof by contradiction: the supposition of line 1 is false."
          }
        ]
      }
    },
    {
      "id": "t200-s2",
      "method": "proof by cases",
      "statement": "Prove that if $f(x)$ is a polynomial with real coefficients of degree $n$, with $n \\ge 2$, then no line meets the graph of $y = f(x)$ at more than $n$ points. Facts it may use: vertical line $x = c$, slope-intercept form, vertical line test, a common point of two graphs satisfies both equations, the definition of a root, degree, At most n roots.",
      "check": {
        "proof": [
          {
            "line": "A line is either a vertical line $x = c$ or the graph of $y = ax + b$ for numbers $a$ and $b$.",
            "reason": "Slope-intercept form: a line that is not vertical has a slope $a$ and a $y$-intercept $(0, b)$; a vertical line is $x = c$."
          },
          {
            "line": "Case 1: the line is $x = c$.",
            "reason": "Proof by cases: the first of the two cases of line 1."
          },
          {
            "line": "The line $x = c$ meets the graph of $y = f(x)$ only at $(c, f(c))$.",
            "reason": "Vertical line test: a vertical line meets the graph of a function at one point at most."
          },
          {
            "line": "One point is no more than $n$ points, since $n \\ge 2$.",
            "reason": "Transitivity, from arithmetic: $1 < 2 \\le n$."
          },
          {
            "line": "Case 2: the line is $y = ax + b$.",
            "reason": "Proof by cases: the second of the two cases of line 1."
          },
          {
            "line": "At a common point with $x$-coordinate $r$, $f(r) = ar + b$.",
            "reason": "A common point of two graphs satisfies both equations: at the point, $y = f(r)$ and $y = ar + b$."
          },
          {
            "line": "$f(r) - ar - b = 0$",
            "reason": "Adding the same number to both sides: $ar + b$ is taken from both sides of line 6."
          },
          {
            "line": "So $r$ is a root of $g(x) = f(x) - ax - b$.",
            "reason": "Factor Theorem, its definition of a root: a number $r$ is a root of $g(x)$ when $g(r) = 0$."
          },
          {
            "line": "The polynomial $g(x)$ has degree $n$.",
            "reason": "Degree: $ax + b$ has no power of $x$ above $1$, and $n \\ge 2$, so taking it away leaves the leading term of $f(x)$."
          },
          {
            "line": "The polynomial $g(x)$ has at most $n$ different roots.",
            "reason": "At most n roots: a nonzero polynomial of degree $n$, with $n \\ge 0$, has at most $n$ different roots."
          },
          {
            "line": "Two different common points have different $x$-coordinates.",
            "reason": "Graph of a function: a point of the line $y = ax + b$ is fixed by its $x$-coordinate."
          },
          {
            "line": "So the line $y = ax + b$ meets the graph at no more than $n$ points.",
            "reason": "Lines 8, 10 and 11: each common point gives its own root of $g(x)$."
          },
          {
            "line": "In both cases the line meets the graph at no more than $n$ points.",
            "reason": "Proof by cases: lines 4 and 12 cover the two cases of line 1."
          }
        ]
      }
    },
    {
      "id": "t200-s3",
      "method": "direct proof",
      "statement": "Prove that if two polynomials $f(x)$ and $g(x)$ of degree $n$, with $n \\ge 1$, have the same leading coefficient, and each complex number has the same multiplicity as a root of $f(x)$ as it has as a root of $g(x)$, then $f(x) = g(x)$. Facts it may use: Fundamental Theorem of Algebra, Multiplicity, zero-product property, product law, the commutative law of multiplication.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ be the leading coefficient of $f(x)$ and of $g(x)$.",
            "reason": "The proof names the leading coefficient the two polynomials share."
          },
          {
            "line": "Then $f(x) = a(x - r_1)(x - r_2)\\cdots(x - r_n)$ for complex numbers $r_1, r_2, \\dots, r_n$.",
            "reason": "Fundamental Theorem of Algebra: $f(x)$ has degree $n$ and leading coefficient $a$."
          },
          {
            "line": "Also $g(x) = a(x - s_1)(x - s_2)\\cdots(x - s_n)$ for complex numbers $s_1, s_2, \\dots, s_n$.",
            "reason": "Fundamental Theorem of Algebra: $g(x)$ has degree $n$ and leading coefficient $a$."
          },
          {
            "line": "Let $c$ be one of the numbers $r_1, \\dots, r_n$, and let $k$ be how many of them equal $c$.",
            "reason": "The proof follows one root of $f(x)$ at a time."
          },
          {
            "line": "Then $f(x) = (x - c)^kh(x)$, where $h(x)$ is $a$ times the brackets of line 2 other than $x - c$.",
            "reason": "Product law: the $k$ brackets $x - c$ of line 2, brought together, are $(x - c)^k$."
          },
          {
            "line": "$h(c) \\ne 0$",
            "reason": "Zero-product property: $a \\ne 0$, and each bracket of $h(c)$ is $c$ minus a number other than $c$."
          },
          {
            "line": "The root $c$ has multiplicity $k$ in $f(x)$.",
            "reason": "Multiplicity: when $f(x) = (x - c)^kh(x)$ with $h(c) \\ne 0$, the root $c$ has multiplicity $k$."
          },
          {
            "line": "Also $g(x) = (x - c)^mq(x)$, where $m$ is how many of the numbers $s_1, \\dots, s_n$ equal $c$, and $q(x)$ is $a$ times the brackets of line 3 other than $x - c$.",
            "reason": "Product law, as line 5 shows for $f(x)$: the $m$ brackets $x - c$ of line 3, brought together, are $(x - c)^m$."
          },
          {
            "line": "$q(c) \\ne 0$",
            "reason": "Zero-product property, as line 6 shows for $f(x)$: $a \\ne 0$, and each bracket of $q(c)$ is $c$ minus a number other than $c$."
          },
          {
            "line": "The number $c$ has multiplicity $m$ in $g(x)$.",
            "reason": "Multiplicity, as line 7 shows for $f(x)$: $g(x) = (x - c)^mq(x)$ with $q(c) \\ne 0$."
          },
          {
            "line": "So exactly $k$ of the numbers $s_1, \\dots, s_n$ equal $c$.",
            "reason": "The statement's hypothesis: $c$ has the same multiplicity in $g(x)$ as in $f(x)$, so $m = k$ by lines 7 and 10."
          },
          {
            "line": "Each value among $r_1, \\dots, r_n$ appears as often among $s_1, \\dots, s_n$.",
            "reason": "Lines 4 to 11, for each value among $r_1, \\dots, r_n$ in turn."
          },
          {
            "line": "These values fill all $n$ places of line 3.",
            "reason": "Line 12: the counts of the values among $r_1, \\dots, r_n$ add to $n$, and line 3 has $n$ places."
          },
          {
            "line": "So the brackets of line 3 are those of line 2 in another order, and $f(x) = g(x)$.",
            "reason": "The commutative law of multiplication, from arithmetic: the order of the factors does not change a product."
          }
        ]
      }
    }
  ]
}
