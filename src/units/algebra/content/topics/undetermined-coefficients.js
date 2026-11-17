export default {
  "number": 235,
  "title": "The method of undetermined coefficients",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "644-648"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $a$, where $x^2 + 15x + 5$ is a factor of $x^4 + 11x^3 + ax^2 - 95x + b$.",
    "form": "Answer as an integer.",
    "answer": "-60",
    "solution": [
      "Find $a$, where $x^2 + 15x + 5$ is a factor of $x^4 + 11x^3 + ax^2 - 95x + b$.",
      "$x^4 + 11x^3 + ax^2 - 95x + b = (x^2 + 15x + 5)(x^2 + cx + d)$",
      "$(x^2 + 15x + 5)(x^2 + cx + d) = x^4 + (c + 15)x^3 + (d + 15c + 5)x^2 + (15d + 5c)x + 5d$",
      "This gives $c + 15 = 11$, so $c = -4$.",
      "This gives $15d + 5 \\cdot (-4) = -95$, so $d = -5$.",
      "$a = -5 + 15 \\cdot (-4) + 5 = -60$"
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t235-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $a$, where $x^2 + 7x + 3$ is a factor of $x^4 + 9x^3 + ax^2 - 22x + b$.",
            "lines": [
              {
                "step": "Find $a$, where $x^2 + 7x + 3$ is a factor of $x^4 + 9x^3 + ax^2 - 22x + b$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^4 + 9x^3 + ax^2 - 22x + b = (x^2 + 7x + 3)(x^2 + cx + d)$",
                "reason": "Undetermined coefficients: the other factor has degree $4 - 2 = 2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are written as unknowns $c$ and $d$."
              },
              {
                "step": "$(x^2 + 7x + 3)(x^2 + cx + d) = x^4 + (c + 7)x^3 + (d + 7c + 3)x^2 + (7d + 3c)x + 3d$",
                "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
              },
              {
                "step": "This gives $c + 7 = 9$, so $c = 2$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 2 and 3."
              },
              {
                "step": "This gives $7d + 3 \\cdot 2 = -22$, so $d = -4$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $c = 2$ from line 4."
              },
              {
                "step": "$a = -4 + 7 \\cdot 2 + 3 = 13$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $a = d + 7c + 3$, with the values of lines 4 and 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, where $x^2 - 9x + 15$ is a factor of $x^4 - 12x^3 + ax^2 + 36x + b$.",
              "form": "Answer as an integer.",
              "answer": "33",
              "lines": [
                {
                  "step": "Find $a$, where $x^2 - 9x + 15$ is a factor of $x^4 - 12x^3 + ax^2 + 36x + b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - 12x^3 + ax^2 + 36x + b = (x^2 - 9x + 15)(x^2 + cx + d)$",
                  "reason": "Undetermined coefficients: the other factor has degree $4 - 2 = 2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are written as unknowns $c$ and $d$."
                },
                {
                  "step": "$(x^2 - 9x + 15)(x^2 + cx + d) = x^4 + (c - 9)x^3 + (d - 9c + 15)x^2 + (-9d + 15c)x + 15d$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $c - 9 = -12$, so $c = -3$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 2 and 3."
                },
                {
                  "step": "This gives $-9d + 15 \\cdot (-3) = 36$, so $d = -9$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $c = -3$ from line 4."
                },
                {
                  "step": "$a = -9 - 9 \\cdot (-3) + 15 = 33$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $a = d - 9c + 15$, with the values of lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Find $a$, where $x^2 + 5x - 8$ is a factor of $x^4 + 12x^3 + ax^2 - 36x + b$.",
              "form": "Answer as an integer.",
              "answer": "31",
              "lines": [
                {
                  "step": "Find $a$, where $x^2 + 5x - 8$ is a factor of $x^4 + 12x^3 + ax^2 - 36x + b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 + 12x^3 + ax^2 - 36x + b = (x^2 + 5x - 8)(x^2 + cx + d)$",
                  "reason": "Undetermined coefficients: the other factor has degree $4 - 2 = 2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are written as unknowns $c$ and $d$."
                },
                {
                  "step": "$(x^2 + 5x - 8)(x^2 + cx + d) = x^4 + (c + 5)x^3 + (d + 5c - 8)x^2 + (5d - 8c)x - 8d$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $c + 5 = 12$, so $c = 7$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 2 and 3."
                },
                {
                  "step": "This gives $5d - 8 \\cdot 7 = -36$, so $d = 4$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $c = 7$ from line 4."
                },
                {
                  "step": "$a = 4 + 5 \\cdot 7 - 8 = 31$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $a = d + 5c - 8$, with the values of lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Find $a$, where $x^2 - 16x + 17$ is a factor of $x^4 - 21x^3 + ax^2 - 21x + b$.",
              "form": "Answer as an integer.",
              "answer": "93",
              "lines": [
                {
                  "step": "Find $a$, where $x^2 - 16x + 17$ is a factor of $x^4 - 21x^3 + ax^2 - 21x + b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - 21x^3 + ax^2 - 21x + b = (x^2 - 16x + 17)(x^2 + cx + d)$",
                  "reason": "Undetermined coefficients: the other factor has degree $4 - 2 = 2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are written as unknowns $c$ and $d$."
                },
                {
                  "step": "$(x^2 - 16x + 17)(x^2 + cx + d) = x^4 + (c - 16)x^3 + (d - 16c + 17)x^2 + (-16d + 17c)x + 17d$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $c - 16 = -21$, so $c = -5$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 2 and 3."
                },
                {
                  "step": "This gives $-16d + 17 \\cdot (-5) = -21$, so $d = -4$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $c = -5$ from line 4."
                },
                {
                  "step": "$a = -4 - 16 \\cdot (-5) + 17 = 93$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $a = d - 16c + 17$, with the values of lines 4 and 5."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $b$, where $x^2 - 15x - 14$ is a factor of $ax^3 + bx^2 + 51x + 126$.",
            "lines": [
              {
                "step": "Find $b$, where $x^2 - 15x - 14$ is a factor of $ax^3 + bx^2 + 51x + 126$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$ax^3 + bx^2 + 51x + 126 = (x^2 - 15x - 14)(cx + d)$",
                "reason": "Undetermined coefficients: the other factor has degree $3 - 2 = 1$, since the degree of a product is the sum of the degrees, so it is written $cx + d$ with unknown coefficients $c$ and $d$."
              },
              {
                "step": "$(x^2 - 15x - 14)(cx + d) = cx^3 + (d - 15c)x^2 + (-15d - 14c)x - 14d$",
                "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
              },
              {
                "step": "This gives $-14d = 126$, so $d = -9$.",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms of lines 2 and 3."
              },
              {
                "step": "This gives $-15 \\cdot (-9) - 14c = 51$, so $c = 6$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $d = -9$ from line 4."
              },
              {
                "step": "$b = -9 - 15 \\cdot 6 = -99$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $b = d - 15c$, with the values of lines 4 and 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, where $x^2 + 16x + 4$ is a factor of $ax^3 + bx^2 + 156x + 36$.",
              "form": "Answer as an integer.",
              "answer": "57",
              "lines": [
                {
                  "step": "Find $b$, where $x^2 + 16x + 4$ is a factor of $ax^3 + bx^2 + 156x + 36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ax^3 + bx^2 + 156x + 36 = (x^2 + 16x + 4)(cx + d)$",
                  "reason": "Undetermined coefficients: the other factor has degree $3 - 2 = 1$, since the degree of a product is the sum of the degrees, so it is written $cx + d$ with unknown coefficients $c$ and $d$."
                },
                {
                  "step": "$(x^2 + 16x + 4)(cx + d) = cx^3 + (d + 16c)x^2 + (16d + 4c)x + 4d$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $4d = 36$, so $d = 9$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of lines 2 and 3."
                },
                {
                  "step": "This gives $16 \\cdot 9 + 4c = 156$, so $c = 3$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $d = 9$ from line 4."
                },
                {
                  "step": "$b = 9 + 16 \\cdot 3 = 57$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $b = d + 16c$, with the values of lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $x^2 - 10x + 6$ is a factor of $ax^3 + bx^2 + 14x - 30$.",
              "form": "Answer as an integer.",
              "answer": "55",
              "lines": [
                {
                  "step": "Find $b$, where $x^2 - 10x + 6$ is a factor of $ax^3 + bx^2 + 14x - 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ax^3 + bx^2 + 14x - 30 = (x^2 - 10x + 6)(cx + d)$",
                  "reason": "Undetermined coefficients: the other factor has degree $3 - 2 = 1$, since the degree of a product is the sum of the degrees, so it is written $cx + d$ with unknown coefficients $c$ and $d$."
                },
                {
                  "step": "$(x^2 - 10x + 6)(cx + d) = cx^3 + (d - 10c)x^2 + (-10d + 6c)x + 6d$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $6d = -30$, so $d = -5$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of lines 2 and 3."
                },
                {
                  "step": "This gives $-10 \\cdot (-5) + 6c = 14$, so $c = -6$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $d = -5$ from line 4."
                },
                {
                  "step": "$b = -5 - 10 \\cdot (-6) = 55$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $b = d - 10c$, with the values of lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Find $b$, where $x^2 - 14x + 17$ is a factor of $ax^3 + bx^2 - 60x - 51$.",
              "form": "Answer as an integer.",
              "answer": "81",
              "lines": [
                {
                  "step": "Find $b$, where $x^2 - 14x + 17$ is a factor of $ax^3 + bx^2 - 60x - 51$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$ax^3 + bx^2 - 60x - 51 = (x^2 - 14x + 17)(cx + d)$",
                  "reason": "Undetermined coefficients: the other factor has degree $3 - 2 = 1$, since the degree of a product is the sum of the degrees, so it is written $cx + d$ with unknown coefficients $c$ and $d$."
                },
                {
                  "step": "$(x^2 - 14x + 17)(cx + d) = cx^3 + (d - 14c)x^2 + (-14d + 17c)x + 17d$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $17d = -51$, so $d = -3$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of lines 2 and 3."
                },
                {
                  "step": "This gives $-14 \\cdot (-3) + 17c = -60$, so $c = -6$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of lines 2 and 3, with $d = -3$ from line 4."
                },
                {
                  "step": "$b = -3 - 14 \\cdot (-6) = 81$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of lines 2 and 3 give $b = d - 14c$, with the values of lines 4 and 5."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t235-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -4x^2 + 15x - 14$ and $f(g(x)) = -16x^2 - 66x - 68$.",
            "lines": [
              {
                "step": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -4x^2 + 15x - 14$ and $f(g(x)) = -16x^2 - 66x - 68$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $g(x)$ has degree $1$.",
                "reason": "Degree of a product is the sum of the degrees: $f(g(x))$ is $-4$ times the square of $g(x)$ plus terms of lower degree, so its degree is twice that of $g(x)$, and the given $f(g(x))$ has degree $2$."
              },
              {
                "step": "Write $g(x) = ax + b$, with $a > 0$.",
                "reason": "Undetermined coefficients: a polynomial of degree $1$ is written with unknown coefficients $a$ and $b$."
              },
              {
                "step": "$f(ax + b) = -4(ax + b)^2 + 15(ax + b) - 14$",
                "reason": "Composition $f(g(x))$: each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
              },
              {
                "step": "$f(ax + b) = -4a^2x^2 - 8abx + 15ax - 4b^2 + 15b - 14$",
                "reason": "Multiplying out: square of a binomial, $(ax + b)^2 = a^2x^2 + 2abx + b^2$, then each bracket multiplied by its number."
              },
              {
                "step": "This gives $-4a^2 = -16$, so $a = 2$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given $f(g(x))$; of the two square roots, $a > 0$ keeps $2$."
              },
              {
                "step": "This gives $-16b + 30 = -66$, so $b = 6$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ give $-8ab + 15a = -66$, with $a = 2$ from line 6."
              },
              {
                "step": "$-4 \\cdot 6^2 + 15 \\cdot 6 - 14 = -68$",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms $-4b^2 + 15b - 14$ and $-68$ agree at $b = 6$, so the values of lines 6 and 7 fit every coefficient."
              },
              {
                "step": "$g(x) = 2x + 6$",
                "reason": "Substituting a value: $a$ and $b$ from lines 6 and 7 are put into line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 7x^2 + 8x + 11$ and $f(g(x)) = 28x^2 + 72x + 55$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*x+2",
              "lines": [
                {
                  "step": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 7x^2 + 8x + 11$ and $f(g(x)) = 28x^2 + 72x + 55$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $g(x)$ has degree $1$.",
                  "reason": "Degree of a product is the sum of the degrees: $f(g(x))$ is $7$ times the square of $g(x)$ plus terms of lower degree, so its degree is twice that of $g(x)$, and the given $f(g(x))$ has degree $2$."
                },
                {
                  "step": "Write $g(x) = ax + b$, with $a > 0$.",
                  "reason": "Undetermined coefficients: a polynomial of degree $1$ is written with unknown coefficients $a$ and $b$."
                },
                {
                  "step": "$f(ax + b) = 7(ax + b)^2 + 8(ax + b) + 11$",
                  "reason": "Composition $f(g(x))$: each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
                },
                {
                  "step": "$f(ax + b) = 7a^2x^2 + 14abx + 8ax + 7b^2 + 8b + 11$",
                  "reason": "Multiplying out: square of a binomial, $(ax + b)^2 = a^2x^2 + 2abx + b^2$, then each bracket multiplied by its number."
                },
                {
                  "step": "This gives $7a^2 = 28$, so $a = 2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given $f(g(x))$; of the two square roots, $a > 0$ keeps $2$."
                },
                {
                  "step": "This gives $28b + 16 = 72$, so $b = 2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ give $14ab + 8a = 72$, with $a = 2$ from line 6."
                },
                {
                  "step": "$7 \\cdot 2^2 + 8 \\cdot 2 + 11 = 55$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms $7b^2 + 8b + 11$ and $55$ agree at $b = 2$, so the values of lines 6 and 7 fit every coefficient."
                },
                {
                  "step": "$g(x) = 2x + 2$",
                  "reason": "Substituting a value: $a$ and $b$ from lines 6 and 7 are put into line 3."
                }
              ]
            },
            {
              "prompt": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 4x^2 + 6x + 5$ and $f(g(x)) = 100x^2 + 110x + 33$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*x+2",
              "lines": [
                {
                  "step": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 4x^2 + 6x + 5$ and $f(g(x)) = 100x^2 + 110x + 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $g(x)$ has degree $1$.",
                  "reason": "Degree of a product is the sum of the degrees: $f(g(x))$ is $4$ times the square of $g(x)$ plus terms of lower degree, so its degree is twice that of $g(x)$, and the given $f(g(x))$ has degree $2$."
                },
                {
                  "step": "Write $g(x) = ax + b$, with $a > 0$.",
                  "reason": "Undetermined coefficients: a polynomial of degree $1$ is written with unknown coefficients $a$ and $b$."
                },
                {
                  "step": "$f(ax + b) = 4(ax + b)^2 + 6(ax + b) + 5$",
                  "reason": "Composition $f(g(x))$: each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
                },
                {
                  "step": "$f(ax + b) = 4a^2x^2 + 8abx + 6ax + 4b^2 + 6b + 5$",
                  "reason": "Multiplying out: square of a binomial, $(ax + b)^2 = a^2x^2 + 2abx + b^2$, then each bracket multiplied by its number."
                },
                {
                  "step": "This gives $4a^2 = 100$, so $a = 5$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given $f(g(x))$; of the two square roots, $a > 0$ keeps $5$."
                },
                {
                  "step": "This gives $40b + 30 = 110$, so $b = 2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ give $8ab + 6a = 110$, with $a = 5$ from line 6."
                },
                {
                  "step": "$4 \\cdot 2^2 + 6 \\cdot 2 + 5 = 33$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms $4b^2 + 6b + 5$ and $33$ agree at $b = 2$, so the values of lines 6 and 7 fit every coefficient."
                },
                {
                  "step": "$g(x) = 5x + 2$",
                  "reason": "Substituting a value: $a$ and $b$ from lines 6 and 7 are put into line 3."
                }
              ]
            },
            {
              "prompt": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 - 15x + 3$ and $f(g(x)) = -8x^2 + 10x + 28$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*x-5",
              "lines": [
                {
                  "step": "Find $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 - 15x + 3$ and $f(g(x)) = -8x^2 + 10x + 28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $g(x)$ has degree $1$.",
                  "reason": "Degree of a product is the sum of the degrees: $f(g(x))$ is $-2$ times the square of $g(x)$ plus terms of lower degree, so its degree is twice that of $g(x)$, and the given $f(g(x))$ has degree $2$."
                },
                {
                  "step": "Write $g(x) = ax + b$, with $a > 0$.",
                  "reason": "Undetermined coefficients: a polynomial of degree $1$ is written with unknown coefficients $a$ and $b$."
                },
                {
                  "step": "$f(ax + b) = -2(ax + b)^2 - 15(ax + b) + 3$",
                  "reason": "Composition $f(g(x))$: each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
                },
                {
                  "step": "$f(ax + b) = -2a^2x^2 - 4abx - 15ax - 2b^2 - 15b + 3$",
                  "reason": "Multiplying out: square of a binomial, $(ax + b)^2 = a^2x^2 + 2abx + b^2$, then each bracket multiplied by its number."
                },
                {
                  "step": "This gives $-2a^2 = -8$, so $a = 2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given $f(g(x))$; of the two square roots, $a > 0$ keeps $2$."
                },
                {
                  "step": "This gives $-8b - 30 = 10$, so $b = -5$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ give $-4ab - 15a = 10$, with $a = 2$ from line 6."
                },
                {
                  "step": "$-2 \\cdot (-5)^2 - 15 \\cdot (-5) + 3 = 28$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms $-2b^2 - 15b + 3$ and $28$ agree at $b = -5$, so the values of lines 6 and 7 fit every coefficient."
                },
                {
                  "step": "$g(x) = 2x - 5$",
                  "reason": "Substituting a value: $a$ and $b$ from lines 6 and 7 are put into line 3."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $f(x)$ is a polynomial with $f(3x) - 12f(x) = 12x^2 - 18x - 77$ for every $x$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(x)$ is a polynomial with $f(3x) - 12f(x) = 12x^2 - 18x - 77$ for every $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "If $f(x)$ has degree $n$ and leading coefficient $a_n$, the term in $x^n$ of $f(3x) - 12f(x)$ is $(3^n - 12)a_nx^n$.",
                "reason": "The leading term of a product is the product of the leading terms: the term in $x^n$ of $f(3x)$ is $a_n(3x)^n = 3^na_nx^n$, by the power of a product."
              },
              {
                "step": "So $f(x)$ has degree $2$, the degree of the right side.",
                "reason": "Degree: the powers of $3$ start $1$, $3$, $9$, $27$, and each later one is larger than $12$ in size, so none is $12$; with $a_n \\ne 0$, the term of line 2 is not $0$ and the left side has degree $n$."
              },
              {
                "step": "$f(x) = ax^2 + bx + c$",
                "reason": "Undetermined coefficients: a polynomial of degree $2$ is written with unknown coefficients $a$, $b$ and $c$."
              },
              {
                "step": "$f(3x) - 12f(x) = -3ax^2 - 9bx - 11c$",
                "reason": "Substituting a value: $f(3x) = a(3x)^2 + b(3x) + c = 9ax^2 + 3bx + c$; then like terms are collected."
              },
              {
                "step": "This gives $-3a = 12$, so $a = -4$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given right side."
              },
              {
                "step": "This gives $-9b = -18$, so $b = 2$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
              },
              {
                "step": "This gives $-11c = -77$, so $c = 7$.",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms."
              },
              {
                "step": "$f(x) = -4x^2 + 2x + 7$",
                "reason": "Substituting a value: $a$, $b$ and $c$ from lines 6, 7 and 8 are put into line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(x)$ is a polynomial with $f(-3x) - 19f(x) = -50x^2 - 66x - 126$ for every $x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5*x^2+3*x+7",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x)$ is a polynomial with $f(-3x) - 19f(x) = -50x^2 - 66x - 126$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "If $f(x)$ has degree $n$ and leading coefficient $a_n$, the term in $x^n$ of $f(-3x) - 19f(x)$ is $((-3)^n - 19)a_nx^n$.",
                  "reason": "The leading term of a product is the product of the leading terms: the term in $x^n$ of $f(-3x)$ is $a_n(-3x)^n = (-3)^na_nx^n$, by the power of a product."
                },
                {
                  "step": "So $f(x)$ has degree $2$, the degree of the right side.",
                  "reason": "Degree: the powers of $-3$ start $1$, $-3$, $9$, $-27$, and each later one is larger than $19$ in size, so none is $19$; with $a_n \\ne 0$, the term of line 2 is not $0$ and the left side has degree $n$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "Undetermined coefficients: a polynomial of degree $2$ is written with unknown coefficients $a$, $b$ and $c$."
                },
                {
                  "step": "$f(-3x) - 19f(x) = -10ax^2 - 22bx - 18c$",
                  "reason": "Substituting a value: $f(-3x) = a(-3x)^2 + b(-3x) + c = 9ax^2 - 3bx + c$; then like terms are collected."
                },
                {
                  "step": "This gives $-10a = -50$, so $a = 5$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given right side."
                },
                {
                  "step": "This gives $-22b = -66$, so $b = 3$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
                },
                {
                  "step": "This gives $-18c = -126$, so $c = 7$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "$f(x) = 5x^2 + 3x + 7$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ from lines 6, 7 and 8 are put into line 4."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x)$ is a polynomial with $f(-2x) + 6f(x) = 70x^2 + 20x - 42$ for every $x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*x^2+5*x-6",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x)$ is a polynomial with $f(-2x) + 6f(x) = 70x^2 + 20x - 42$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "If $f(x)$ has degree $n$ and leading coefficient $a_n$, the term in $x^n$ of $f(-2x) + 6f(x)$ is $((-2)^n + 6)a_nx^n$.",
                  "reason": "The leading term of a product is the product of the leading terms: the term in $x^n$ of $f(-2x)$ is $a_n(-2x)^n = (-2)^na_nx^n$, by the power of a product."
                },
                {
                  "step": "So $f(x)$ has degree $2$, the degree of the right side.",
                  "reason": "Degree: the powers of $-2$ start $1$, $-2$, $4$, $-8$, and each later one is larger than $6$ in size, so none is $-6$; with $a_n \\ne 0$, the term of line 2 is not $0$ and the left side has degree $n$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "Undetermined coefficients: a polynomial of degree $2$ is written with unknown coefficients $a$, $b$ and $c$."
                },
                {
                  "step": "$f(-2x) + 6f(x) = 10ax^2 + 4bx + 7c$",
                  "reason": "Substituting a value: $f(-2x) = a(-2x)^2 + b(-2x) + c = 4ax^2 - 2bx + c$; then like terms are collected."
                },
                {
                  "step": "This gives $10a = 70$, so $a = 7$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given right side."
                },
                {
                  "step": "This gives $4b = 20$, so $b = 5$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
                },
                {
                  "step": "This gives $7c = -42$, so $c = -6$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "$f(x) = 7x^2 + 5x - 6$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ from lines 6, 7 and 8 are put into line 4."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x)$ is a polynomial with $f(-3x) + 6f(x) = -105x^2 + 6x - 14$ for every $x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-7*x^2+2*x-2",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x)$ is a polynomial with $f(-3x) + 6f(x) = -105x^2 + 6x - 14$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "If $f(x)$ has degree $n$ and leading coefficient $a_n$, the term in $x^n$ of $f(-3x) + 6f(x)$ is $((-3)^n + 6)a_nx^n$.",
                  "reason": "The leading term of a product is the product of the leading terms: the term in $x^n$ of $f(-3x)$ is $a_n(-3x)^n = (-3)^na_nx^n$, by the power of a product."
                },
                {
                  "step": "So $f(x)$ has degree $2$, the degree of the right side.",
                  "reason": "Degree: the powers of $-3$ start $1$, $-3$, $9$, $-27$, and each later one is larger than $6$ in size, so none is $-6$; with $a_n \\ne 0$, the term of line 2 is not $0$ and the left side has degree $n$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "Undetermined coefficients: a polynomial of degree $2$ is written with unknown coefficients $a$, $b$ and $c$."
                },
                {
                  "step": "$f(-3x) + 6f(x) = 15ax^2 + 3bx + 7c$",
                  "reason": "Substituting a value: $f(-3x) = a(-3x)^2 + b(-3x) + c = 9ax^2 - 3bx + c$; then like terms are collected."
                },
                {
                  "step": "This gives $15a = -105$, so $a = -7$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 5 and of the given right side."
                },
                {
                  "step": "This gives $3b = 6$, so $b = 2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
                },
                {
                  "step": "This gives $7c = -14$, so $c = -2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "$f(x) = -7x^2 + 2x - 2$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ from lines 6, 7 and 8 are put into line 4."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t235-k3",
      "forms": [
        {
          "example": {
            "problem": "Factor $x^4 + 4x^3 - 68x^2 - 25x + 130$ into two quadratics, given that two of its roots have product $-10$.",
            "lines": [
              {
                "step": "Factor $x^4 + 4x^3 - 68x^2 - 25x + 130$ into two quadratics, given that two of its roots have product $-10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two roots with product $-10$ are the roots of $x^2 + ax - 10$, for some number $a$.",
                "reason": "Product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots are the two has their product as its constant term."
              },
              {
                "step": "$x^4 + 4x^3 - 68x^2 - 25x + 130 = (x^2 + ax - 10)(x^2 + bx + c)$",
                "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
              },
              {
                "step": "This gives $-10c = 130$, so $c = -13$.",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 3."
              },
              {
                "step": "$(x^2 + ax - 10)(x^2 + bx - 13) = x^4 + (a + b)x^3 + (ab - 23)x^2 + (-13a - 10b)x + 130$",
                "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
              },
              {
                "step": "So $a + b = 4$ and $-13a - 10b = -25$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ and in $x$ of line 5 and of the quartic."
              },
              {
                "step": "This gives $-3a = 15$, so $a = -5$ and $b = 9$.",
                "reason": "Elimination: $-10$ times the first equation of line 6 is taken from the second, and $b$ drops out; then $b = 4 - a$."
              },
              {
                "step": "$(-5) \\cdot 9 - 23 = -68$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$, $ab - 23$ and $-68$, agree at these values, so every coefficient fits."
              },
              {
                "step": "$x^4 + 4x^3 - 68x^2 - 25x + 130 = (x^2 - 5x - 10)(x^2 + 9x - 13)$",
                "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $x^4 - 14x^3 + 36x^2 + 73x + 14$ into two quadratics, given that two of its roots have product $-7$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2-5*x-7)*(x^2-9*x-2)",
              "lines": [
                {
                  "step": "Factor $x^4 - 14x^3 + 36x^2 + 73x + 14$ into two quadratics, given that two of its roots have product $-7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two roots with product $-7$ are the roots of $x^2 + ax - 7$, for some number $a$.",
                  "reason": "Product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots are the two has their product as its constant term."
                },
                {
                  "step": "$x^4 - 14x^3 + 36x^2 + 73x + 14 = (x^2 + ax - 7)(x^2 + bx + c)$",
                  "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
                },
                {
                  "step": "This gives $-7c = 14$, so $c = -2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 3."
                },
                {
                  "step": "$(x^2 + ax - 7)(x^2 + bx - 2) = x^4 + (a + b)x^3 + (ab - 9)x^2 + (-2a - 7b)x + 14$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "So $a + b = -14$ and $-2a - 7b = 73$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ and in $x$ of line 5 and of the quartic."
                },
                {
                  "step": "This gives $5a = -25$, so $a = -5$ and $b = -9$.",
                  "reason": "Elimination: $-7$ times the first equation of line 6 is taken from the second, and $b$ drops out; then $b = -14 - a$."
                },
                {
                  "step": "$(-5) \\cdot (-9) - 9 = 36$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$, $ab - 9$ and $36$, agree at these values, so every coefficient fits."
                },
                {
                  "step": "$x^4 - 14x^3 + 36x^2 + 73x + 14 = (x^2 - 5x - 7)(x^2 - 9x - 2)$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
                }
              ]
            },
            {
              "prompt": "Factor $x^4 + 4x^3 - 77x^2 + 70x + 30$ into two quadratics, given that two of its roots have product $-15$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2+10*x-15)*(x^2-6*x-2)",
              "lines": [
                {
                  "step": "Factor $x^4 + 4x^3 - 77x^2 + 70x + 30$ into two quadratics, given that two of its roots have product $-15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two roots with product $-15$ are the roots of $x^2 + ax - 15$, for some number $a$.",
                  "reason": "Product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots are the two has their product as its constant term."
                },
                {
                  "step": "$x^4 + 4x^3 - 77x^2 + 70x + 30 = (x^2 + ax - 15)(x^2 + bx + c)$",
                  "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
                },
                {
                  "step": "This gives $-15c = 30$, so $c = -2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 3."
                },
                {
                  "step": "$(x^2 + ax - 15)(x^2 + bx - 2) = x^4 + (a + b)x^3 + (ab - 17)x^2 + (-2a - 15b)x + 30$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "So $a + b = 4$ and $-2a - 15b = 70$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ and in $x$ of line 5 and of the quartic."
                },
                {
                  "step": "This gives $13a = 130$, so $a = 10$ and $b = -6$.",
                  "reason": "Elimination: $-15$ times the first equation of line 6 is taken from the second, and $b$ drops out; then $b = 4 - a$."
                },
                {
                  "step": "$10 \\cdot (-6) - 17 = -77$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$, $ab - 17$ and $-77$, agree at these values, so every coefficient fits."
                },
                {
                  "step": "$x^4 + 4x^3 - 77x^2 + 70x + 30 = (x^2 + 10x - 15)(x^2 - 6x - 2)$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
                }
              ]
            },
            {
              "prompt": "Factor $x^4 - 9x^3 - 28x^2 - 38x - 16$ into two quadratics, given that two of its roots have product $2$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2+2*x+2)*(x^2-11*x-8)",
              "lines": [
                {
                  "step": "Factor $x^4 - 9x^3 - 28x^2 - 38x - 16$ into two quadratics, given that two of its roots have product $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two roots with product $2$ are the roots of $x^2 + ax + 2$, for some number $a$.",
                  "reason": "Product of roots $c/a$: a quadratic with leading coefficient $1$ whose roots are the two has their product as its constant term."
                },
                {
                  "step": "$x^4 - 9x^3 - 28x^2 - 38x - 16 = (x^2 + ax + 2)(x^2 + bx + c)$",
                  "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
                },
                {
                  "step": "This gives $2c = -16$, so $c = -8$.",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of the two sides of line 3."
                },
                {
                  "step": "$(x^2 + ax + 2)(x^2 + bx - 8) = x^4 + (a + b)x^3 + (ab - 6)x^2 + (-8a + 2b)x - 16$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "So $a + b = -9$ and $-8a + 2b = -38$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ and in $x$ of line 5 and of the quartic."
                },
                {
                  "step": "This gives $-10a = -20$, so $a = 2$ and $b = -11$.",
                  "reason": "Elimination: $2$ times the first equation of line 6 is taken from the second, and $b$ drops out; then $b = -9 - a$."
                },
                {
                  "step": "$2 \\cdot (-11) - 6 = -28$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$, $ab - 6$ and $-28$, agree at these values, so every coefficient fits."
                },
                {
                  "step": "$x^4 - 9x^3 - 28x^2 - 38x - 16 = (x^2 + 2x + 2)(x^2 - 11x - 8)$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $x^4 + 8x^3 - 13x^2 + 94x + 99$ into two quadratics, given that two of its roots have sum $-11$.",
            "lines": [
              {
                "step": "Factor $x^4 + 8x^3 - 13x^2 + 94x + 99$ into two quadratics, given that two of its roots have sum $-11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two roots with sum $-11$ are the roots of $x^2 + 11x + a$, for some number $a$.",
                "reason": "Sum of roots $-b/a$: a quadratic with leading coefficient $1$ whose roots are the two has minus their sum as its coefficient of $x$."
              },
              {
                "step": "$x^4 + 8x^3 - 13x^2 + 94x + 99 = (x^2 + 11x + a)(x^2 + bx + c)$",
                "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
              },
              {
                "step": "$(x^2 + 11x + a)(x^2 + bx + c) = x^4 + (b + 11)x^3 + (a + c + 11b)x^2 + (ab + 11c)x + ac$",
                "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
              },
              {
                "step": "This gives $b + 11 = 8$, so $b = -3$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 3 and 4."
              },
              {
                "step": "So $a + c = 20$ and $-3a + 11c = 94$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ and in $x$ of lines 3 and 4, with $b = -3$ from line 5."
              },
              {
                "step": "So $a = 9$ and $c = 11$.",
                "reason": "Elimination: $-11$ times the first equation of line 6 is added to the second, and $c$ drops out, leaving $-14a = -126$; then $c = 20 - a$."
              },
              {
                "step": "$9 \\cdot 11 = 99$",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms, $ac$ and $99$, agree at these values, so every coefficient fits."
              },
              {
                "step": "$x^4 + 8x^3 - 13x^2 + 94x + 99 = (x^2 + 11x + 9)(x^2 - 3x + 11)$",
                "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $x^4 - 8x^3 - 8x^2 - 144x - 28$ into two quadratics, given that two of its roots have sum $10$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2-10*x-2)*(x^2+2*x+14)",
              "lines": [
                {
                  "step": "Factor $x^4 - 8x^3 - 8x^2 - 144x - 28$ into two quadratics, given that two of its roots have sum $10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two roots with sum $10$ are the roots of $x^2 - 10x + a$, for some number $a$.",
                  "reason": "Sum of roots $-b/a$: a quadratic with leading coefficient $1$ whose roots are the two has minus their sum as its coefficient of $x$."
                },
                {
                  "step": "$x^4 - 8x^3 - 8x^2 - 144x - 28 = (x^2 - 10x + a)(x^2 + bx + c)$",
                  "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
                },
                {
                  "step": "$(x^2 - 10x + a)(x^2 + bx + c) = x^4 + (b - 10)x^3 + (a + c - 10b)x^2 + (ab - 10c)x + ac$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $b - 10 = -8$, so $b = 2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 3 and 4."
                },
                {
                  "step": "So $a + c = 12$ and $2a - 10c = -144$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ and in $x$ of lines 3 and 4, with $b = 2$ from line 5."
                },
                {
                  "step": "So $a = -2$ and $c = 14$.",
                  "reason": "Elimination: $10$ times the first equation of line 6 is added to the second, and $c$ drops out, leaving $12a = -24$; then $c = 12 - a$."
                },
                {
                  "step": "$(-2) \\cdot 14 = -28$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms, $ac$ and $-28$, agree at these values, so every coefficient fits."
                },
                {
                  "step": "$x^4 - 8x^3 - 8x^2 - 144x - 28 = (x^2 - 10x - 2)(x^2 + 2x + 14)$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
                }
              ]
            },
            {
              "prompt": "Factor $x^4 - 10x^3 - 6x^2 + 86x + 105$ into two quadratics, given that two of its roots have sum $8$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2-8*x-15)*(x^2-2*x-7)",
              "lines": [
                {
                  "step": "Factor $x^4 - 10x^3 - 6x^2 + 86x + 105$ into two quadratics, given that two of its roots have sum $8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two roots with sum $8$ are the roots of $x^2 - 8x + a$, for some number $a$.",
                  "reason": "Sum of roots $-b/a$: a quadratic with leading coefficient $1$ whose roots are the two has minus their sum as its coefficient of $x$."
                },
                {
                  "step": "$x^4 - 10x^3 - 6x^2 + 86x + 105 = (x^2 - 8x + a)(x^2 + bx + c)$",
                  "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
                },
                {
                  "step": "$(x^2 - 8x + a)(x^2 + bx + c) = x^4 + (b - 8)x^3 + (a + c - 8b)x^2 + (ab - 8c)x + ac$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $b - 8 = -10$, so $b = -2$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 3 and 4."
                },
                {
                  "step": "So $a + c = -22$ and $-2a - 8c = 86$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ and in $x$ of lines 3 and 4, with $b = -2$ from line 5."
                },
                {
                  "step": "So $a = -15$ and $c = -7$.",
                  "reason": "Elimination: $8$ times the first equation of line 6 is added to the second, and $c$ drops out, leaving $6a = -90$; then $c = -22 - a$."
                },
                {
                  "step": "$(-15) \\cdot (-7) = 105$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms, $ac$ and $105$, agree at these values, so every coefficient fits."
                },
                {
                  "step": "$x^4 - 10x^3 - 6x^2 + 86x + 105 = (x^2 - 8x - 15)(x^2 - 2x - 7)$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
                }
              ]
            },
            {
              "prompt": "Factor $x^4 - 14x^3 + 46x^2 - 111x + 36$ into two quadratics, given that two of its roots have sum $3$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2-3*x+9)*(x^2-11*x+4)",
              "lines": [
                {
                  "step": "Factor $x^4 - 14x^3 + 46x^2 - 111x + 36$ into two quadratics, given that two of its roots have sum $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two roots with sum $3$ are the roots of $x^2 - 3x + a$, for some number $a$.",
                  "reason": "Sum of roots $-b/a$: a quadratic with leading coefficient $1$ whose roots are the two has minus their sum as its coefficient of $x$."
                },
                {
                  "step": "$x^4 - 14x^3 + 46x^2 - 111x + 36 = (x^2 - 3x + a)(x^2 + bx + c)$",
                  "reason": "Undetermined coefficients: the quadratic of line 2 is a factor by the Factor Theorem; the other factor has degree $2$, since the degree of a product is the sum of the degrees, and leading coefficient $1$, since the leading term of a product is the product of the leading terms; its other coefficients are unknowns $b$ and $c$."
                },
                {
                  "step": "$(x^2 - 3x + a)(x^2 + bx + c) = x^4 + (b - 3)x^3 + (a + c - 3b)x^2 + (ab - 3c)x + ac$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "This gives $b - 3 = -14$, so $b = -11$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^3$ of lines 3 and 4."
                },
                {
                  "step": "So $a + c = 13$ and $-11a - 3c = -111$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ and in $x$ of lines 3 and 4, with $b = -11$ from line 5."
                },
                {
                  "step": "So $a = 9$ and $c = 4$.",
                  "reason": "Elimination: $3$ times the first equation of line 6 is added to the second, and $c$ drops out, leaving $-8a = -72$; then $c = 13 - a$."
                },
                {
                  "step": "$9 \\cdot 4 = 36$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms, $ac$ and $36$, agree at these values, so every coefficient fits."
                },
                {
                  "step": "$x^4 - 14x^3 + 46x^2 - 111x + 36 = (x^2 - 3x + 9)(x^2 - 11x + 4)$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ are put into line 3."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t235-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 7x^2 - 4x + 9$ and $f(g(x)) = 28x^2 + 132x + 164$, and write that line right.",
            "given": [
              "The polynomial $g(x)$ has degree $1$.",
              "Write $g(x) = ax + b$, with $a > 0$.",
              "$f(ax + b) = 7a^2x^2 - 4ax + 7b^2 - 4b + 9$",
              "This gives $7a^2 = 28$, so $a = 2$.",
              "This gives $-4a = 132$, so $a = -33$.",
              "The two values of $a$ differ, so no polynomial $g(x)$ fits."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 7x^2 - 4x + 9$ and $f(g(x)) = 28x^2 + 132x + 164$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 squares $ax + b$ term by term, as $a^2x^2 + b^2$, and leaves out the term in $abx$.",
                "reason": "Square of a binomial: $(ax + b)^2 = a^2x^2 + 2abx + b^2$."
              },
              {
                "step": "Line 3 written right is $f(ax + b) = 7a^2x^2 + 14abx - 4ax + 7b^2 - 4b + 9$.",
                "reason": "Multiplying out: $7$ times $2abx$ gives the missing term $14abx$, and the other terms stay as they are."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 4x^2 + 14x + 11$ and $f(g(x)) = 64x^2 + 152x + 89$, and write that line right.",
              "given": [
                "The polynomial $g(x)$ has degree $1$.",
                "Write $g(x) = ax + b$, with $a > 0$.",
                "$f(ax + b) = 4(ax + b)^2 + 14(ax + b) + 11$",
                "$f(ax + b) = 4a^2x^2 + 14ax + 4b^2 + 14b + 11$",
                "This gives $4a^2 = 64$, so $a = 4$.",
                "This gives $14a = 152$, so $a = \\dfrac{76}{7}$.",
                "The two values of $a$ differ, so no polynomial $g(x)$ fits."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f(a*x+b) = 4*a^2*x^2+8*a*b*x+14*a*x+4*b^2+14*b+11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 4x^2 + 14x + 11$ and $f(g(x)) = 64x^2 + 152x + 89$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 squares $ax + b$ term by term, as $a^2x^2 + b^2$, and leaves out the term in $abx$.",
                  "reason": "Square of a binomial: $(ax + b)^2 = a^2x^2 + 2abx + b^2$."
                },
                {
                  "step": "Line 4 written right is $f(ax + b) = 4a^2x^2 + 8abx + 14ax + 4b^2 + 14b + 11$.",
                  "reason": "Multiplying out: $4$ times $2abx$ gives the missing term $8abx$, and the other terms stay as they are."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 11x + 10$ and $f(g(x)) = -50x^2 + 95x - 20$, and write that line right.",
              "given": [
                "Write $g(x) = ax + b$, with $a > 0$.",
                "$f(ax + b) = -2a^2x^2 + 11ax - 2b^2 + 11b + 10$",
                "This gives $-2a^2 = -50$, so $a = 5$.",
                "This gives $11a = 95$, so $a = \\dfrac{95}{11}$.",
                "The two values of $a$ differ, so no polynomial $g(x)$ fits."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(a*x+b) = -2*a^2*x^2-4*a*b*x+11*a*x-2*b^2+11*b+10",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 11x + 10$ and $f(g(x)) = -50x^2 + 95x - 20$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 squares $ax + b$ term by term, as $a^2x^2 + b^2$, and leaves out the term in $abx$.",
                  "reason": "Square of a binomial: $(ax + b)^2 = a^2x^2 + 2abx + b^2$."
                },
                {
                  "step": "Line 2 written right is $f(ax + b) = -2a^2x^2 - 4abx + 11ax - 2b^2 + 11b + 10$.",
                  "reason": "Multiplying out: $-2$ times $2abx$ gives the missing term $-4abx$, and the other terms stay as they are."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 12x + 5$ and $f(g(x)) = -18x^2 + 60x - 27$, and write that line right.",
              "given": [
                "The polynomial $g(x)$ has degree $1$.",
                "Write $g(x) = ax + b$, with $a > 0$.",
                "$f(ax + b) = -2a^2x^2 + 12ax - 2b^2 + 12b + 5$",
                "This gives $-2a^2 = -18$, so $a = 3$.",
                "This gives $12a = 60$, so $a = 5$.",
                "The two values of $a$ differ, so no polynomial $g(x)$ fits."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(a*x+b) = -2*a^2*x^2-4*a*b*x+12*a*x-2*b^2+12*b+5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 12x + 5$ and $f(g(x)) = -18x^2 + 60x - 27$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 squares $ax + b$ term by term, as $a^2x^2 + b^2$, and leaves out the term in $abx$.",
                  "reason": "Square of a binomial: $(ax + b)^2 = a^2x^2 + 2abx + b^2$."
                },
                {
                  "step": "Line 3 written right is $f(ax + b) = -2a^2x^2 - 4abx + 12ax - 2b^2 + 12b + 5$.",
                  "reason": "Multiplying out: $-2$ times $2abx$ gives the missing term $-4abx$, and the other terms stay as they are."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 6x - 5$ and $f(g(x)) = -8x^2 + 28x - 25$, and write that line right.",
            "given": [
              "Write $g(x) = ax + b$, with $a > 0$.",
              "$f(ax + b) = -2(ax + b)^2 + 6(ax + b) - 5$",
              "$f(ax + b) = -2a^2x^2 - 4abx + 6ax - 2b^2 + 6b - 5$",
              "This gives $-2a^2 = -8$, so $a = 2$.",
              "$-8b - 12 = 28$",
              "$b = -5$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 6x - 5$ and $f(g(x)) = -8x^2 + 28x - 25$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 writes the term from $6ax$ as $-12$, and loses its sign: with $a = 2$ it is $12$.",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 3 are $-4abx$ and $6ax$, so their coefficients give $-4ab + 6a = 28$."
              },
              {
                "step": "Line 5 written right is $-8b + 12 = 28$.",
                "reason": "Substituting a value: $a = 2$ from line 4 is put into $-4ab + 6a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 9x - 8$ and $f(g(x)) = -18x^2 + 75x - 76$, and write that line right.",
              "given": [
                "Write $g(x) = ax + b$, with $a > 0$.",
                "$f(ax + b) = -2a^2x^2 - 4abx + 9ax - 2b^2 + 9b - 8$",
                "This gives $-2a^2 = -18$, so $a = 3$.",
                "$-12b - 27 = 75$",
                "$b = -\\dfrac{17}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -12*b+27 = 75",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = -2x^2 + 9x - 8$ and $f(g(x)) = -18x^2 + 75x - 76$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes the term from $9ax$ as $-27$, and loses its sign: with $a = 3$ it is $27$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 2 are $-4abx$ and $9ax$, so their coefficients give $-4ab + 9a = 75$."
                },
                {
                  "step": "Line 4 written right is $-12b + 27 = 75$.",
                  "reason": "Substituting a value: $a = 3$ from line 3 is put into $-4ab + 9a$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 5x^2 - 7x + 11$ and $f(g(x)) = 45x^2 + 129x + 101$, and write that line right.",
              "given": [
                "The polynomial $g(x)$ has degree $1$.",
                "Write $g(x) = ax + b$, with $a > 0$.",
                "$f(ax + b) = 5(ax + b)^2 - 7(ax + b) + 11$",
                "$f(ax + b) = 5a^2x^2 + 10abx - 7ax + 5b^2 - 7b + 11$",
                "This gives $5a^2 = 45$, so $a = 3$.",
                "$30b + 21 = 129$",
                "$b = \\dfrac{18}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 30*b-21 = 129",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 5x^2 - 7x + 11$ and $f(g(x)) = 45x^2 + 129x + 101$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 writes the term from $-7ax$ as $21$, and loses its sign: with $a = 3$ it is $-21$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 4 are $10abx$ and $-7ax$, so their coefficients give $10ab - 7a = 129$."
                },
                {
                  "step": "Line 6 written right is $30b - 21 = 129$.",
                  "reason": "Substituting a value: $a = 3$ from line 5 is put into $10ab - 7a$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 2x^2 + 13x - 5$ and $f(g(x)) = 32x^2 + 148x + 145$, and write that line right.",
              "given": [
                "Write $g(x) = ax + b$, with $a > 0$.",
                "$f(ax + b) = 2(ax + b)^2 + 13(ax + b) - 5$",
                "$f(ax + b) = 2a^2x^2 + 4abx + 13ax + 2b^2 + 13b - 5$",
                "This gives $2a^2 = 32$, so $a = 4$.",
                "$16b - 52 = 148$",
                "$b = \\dfrac{25}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 16*b+52 = 148",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $g(x)$, where $g(x)$ is a polynomial with leading coefficient above $0$, $f(x) = 2x^2 + 13x - 5$ and $f(g(x)) = 32x^2 + 148x + 145$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes the term from $13ax$ as $-52$, and loses its sign: with $a = 4$ it is $52$.",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 3 are $4abx$ and $13ax$, so their coefficients give $4ab + 13a = 148$."
                },
                {
                  "step": "Line 5 written right is $16b + 52 = 148$.",
                  "reason": "Substituting a value: $a = 4$ from line 4 is put into $4ab + 13a$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t235-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: The polynomial $x^4 + 8x^3 - 110x^2 - 251x - 104$ is the product of $x^2 + 15x + 8$ and $x^2 + ax + b$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: The polynomial $x^4 + 8x^3 - 110x^2 - 251x - 104$ is the product of $x^2 + 15x + 8$ and $x^2 + ax + b$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two quadratics multiplied are $(x^2 + 15x + 8)(x^2 + ax + b)$.",
                "reason": "Writing a sentence as an equation: \"product\" means the two are multiplied."
              },
              {
                "step": "$x^4 + 8x^3 - 110x^2 - 251x - 104 = (x^2 + 15x + 8)(x^2 + ax + b)$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: The product of $x^2 - 14x - 15$ and $x^2 + ax + b$ equals $x^4 - 18x^3 + 45x^2 + 4x - 60$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4-18*x^3+45*x^2+4*x-60 = (x^2-14*x-15)*(x^2+a*x+b)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: The product of $x^2 - 14x - 15$ and $x^2 + ax + b$ equals $x^4 - 18x^3 + 45x^2 + 4x - 60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two quadratics multiplied are $(x^2 - 14x - 15)(x^2 + ax + b)$.",
                  "reason": "Writing a sentence as an equation: \"product\" means the two are multiplied."
                },
                {
                  "step": "$x^4 - 18x^3 + 45x^2 + 4x - 60 = (x^2 - 14x - 15)(x^2 + ax + b)$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: Multiplying $x^2 + 8x + 9$ by $x^2 + ax + b$ gives $x^4 + 9x^3 + 3x^2 - 103x - 126$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4+9*x^3+3*x^2-103*x-126 = (x^2+8*x+9)*(x^2+a*x+b)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: Multiplying $x^2 + 8x + 9$ by $x^2 + ax + b$ gives $x^4 + 9x^3 + 3x^2 - 103x - 126$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two quadratics multiplied are $(x^2 + 8x + 9)(x^2 + ax + b)$.",
                  "reason": "Writing a sentence as an equation: \"multiplying\" means the two are multiplied."
                },
                {
                  "step": "$x^4 + 9x^3 + 3x^2 - 103x - 126 = (x^2 + 8x + 9)(x^2 + ax + b)$",
                  "reason": "Writing a sentence as an equation: \"gives\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: The polynomial $x^4 + 11x^3 - 22x^2 - 159x - 39$ is the product of $x^2 + 12x + 3$ and $x^2 + ax + b$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4+11*x^3-22*x^2-159*x-39 = (x^2+12*x+3)*(x^2+a*x+b)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$ and $b$, with the quartic alone on the left: The polynomial $x^4 + 11x^3 - 22x^2 - 159x - 39$ is the product of $x^2 + 12x + 3$ and $x^2 + ax + b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two quadratics multiplied are $(x^2 + 12x + 3)(x^2 + ax + b)$.",
                  "reason": "Writing a sentence as an equation: \"product\" means the two are multiplied."
                },
                {
                  "step": "$x^4 + 11x^3 - 22x^2 - 159x - 39 = (x^2 + 12x + 3)(x^2 + ax + b)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: The value of $f(x) = 4x^2 + 5x + 3$ at $ax + b$ is $64x^2 - 76x + 24$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: The value of $f(x) = 4x^2 + 5x + 3$ at $ax + b$ is $64x^2 - 76x + 24$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(ax + b) = 4(ax + b)^2 + 5(ax + b) + 3$",
                "reason": "Composition $f(g(x))$: the value of $f$ at $ax + b$ means each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
              },
              {
                "step": "$4(ax + b)^2 + 5(ax + b) + 3 = 64x^2 - 76x + 24$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: When $f(x) = 7x^2 - 3x - 11$ is applied to $ax + b$, the result equals $63x^2 + 75x + 11$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "7*(a*x+b)^2-3*(a*x+b)-11 = 63*x^2+75*x+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: When $f(x) = 7x^2 - 3x - 11$ is applied to $ax + b$, the result equals $63x^2 + 75x + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(ax + b) = 7(ax + b)^2 - 3(ax + b) - 11$",
                  "reason": "Composition $f(g(x))$: $f$ applied to $ax + b$ means each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
                },
                {
                  "step": "$7(ax + b)^2 - 3(ax + b) - 11 = 63x^2 + 75x + 11$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: Putting $ax + b$ in place of $x$ in $f(x) = 5x^2 + 11x - 14$ gives $80x^2 - 36x - 16$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*(a*x+b)^2+11*(a*x+b)-14 = 80*x^2-36*x-16",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: Putting $ax + b$ in place of $x$ in $f(x) = 5x^2 + 11x - 14$ gives $80x^2 - 36x - 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(ax + b) = 5(ax + b)^2 + 11(ax + b) - 14$",
                  "reason": "Composition $f(g(x))$: putting $ax + b$ in place of $x$ means each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
                },
                {
                  "step": "$5(ax + b)^2 + 11(ax + b) - 14 = 80x^2 - 36x - 16$",
                  "reason": "Writing a sentence as an equation: \"gives\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: The value of $f(x) = 2x^2 - 4x + 3$ at $ax + b$ is $50x^2 - 80x + 33$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*(a*x+b)^2-4*(a*x+b)+3 = 50*x^2-80*x+33",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, $a$ and $b$, with $f(ax + b)$ written in $a$, $b$ and $x$ on the left: The value of $f(x) = 2x^2 - 4x + 3$ at $ax + b$ is $50x^2 - 80x + 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(ax + b) = 2(ax + b)^2 - 4(ax + b) + 3$",
                  "reason": "Composition $f(g(x))$: the value of $f$ at $ax + b$ means each $x$ in $f(x)$ is replaced by $ax + b$, in brackets."
                },
                {
                  "step": "$2(ax + b)^2 - 4(ax + b) + 3 = 50x^2 - 80x + 33$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t235-s1",
      "method": "proof by contradiction",
      "statement": "Prove that no real numbers $a$ and $b$ make $(x^2 + a)(x^2 + b) = x^4 + 1$ for every $x$. Facts it may use: multiplying out, equal for all $x$ means equal coefficients, substituting a value, multiplying both sides by the same number, Trivial Inequality.",
      "check": {
        "proof": [
          {
            "line": "Suppose real numbers $a$ and $b$ make $(x^2 + a)(x^2 + b) = x^4 + 1$ for every $x$.",
            "reason": "Proof by contradiction: the opposite of the claim is assumed."
          },
          {
            "line": "Then $(x^2 + a)(x^2 + b) = x^4 + (a + b)x^2 + ab$.",
            "reason": "Multiplying out."
          },
          {
            "line": "So $a + b = 0$.",
            "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 2 and of $x^4 + 1$, which has none."
          },
          {
            "line": "And $ab = 1$.",
            "reason": "Equal for all $x$ means equal coefficients: the constant terms."
          },
          {
            "line": "So $b = -a$.",
            "reason": "Adding the same number to both sides: $a$ is taken from each side of line 3."
          },
          {
            "line": "So $-a^2 = 1$.",
            "reason": "Substituting a value: line 5 is put into line 4."
          },
          {
            "line": "So $a^2 = -1$.",
            "reason": "Multiplying both sides by the same number: both sides of line 6 are multiplied by $-1$."
          },
          {
            "line": "But $a^2 \\ge 0$, since $a$ is real.",
            "reason": "Trivial Inequality: the square of a real number is at least $0$."
          },
          {
            "line": "Therefore no such real numbers $a$ and $b$ exist.",
            "reason": "Proof by contradiction: lines 7 and 8 cannot both hold, so the assumption of line 1 is false."
          }
        ]
      }
    },
    {
      "id": "t235-s2",
      "method": "proof of existence by construction",
      "statement": "Prove that there are numbers $a$, $b$ and $c$ with $x^3 = ax(x - 1)(x - 2) + bx(x - 1) + cx$ for every $x$. Facts it may use: multiplying out, Undetermined coefficients, equal for all $x$ means equal coefficients, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "For numbers $a$, $b$ and $c$, $ax(x - 1)(x - 2) + bx(x - 1) + cx = ax^3 + (b - 3a)x^2 + (2a - b + c)x$.",
            "reason": "Multiplying out: $x(x - 1)(x - 2) = x^3 - 3x^2 + 2x$ and $x(x - 1) = x^2 - x$, then like terms collected."
          },
          {
            "line": "The two sides of the statement agree for every $x$ when $a = 1$, $b - 3a = 0$ and $2a - b + c = 0$.",
            "reason": "Undetermined coefficients and equal for all $x$ means equal coefficients: the coefficients of $x^3$, $x^2$ and $x$ in $x^3$ are $1$, $0$ and $0$."
          },
          {
            "line": "Take $a = 1$.",
            "reason": "The first condition of line 2."
          },
          {
            "line": "Take $b = 3$, so that $b - 3a = 3 - 3 = 0$.",
            "reason": "Substituting a value: $a = 1$ from line 3."
          },
          {
            "line": "Take $c = 1$, so that $2a - b + c = 2 - 3 + 1 = 0$.",
            "reason": "Substituting a value: $a = 1$ and $b = 3$ from lines 3 and 4."
          },
          {
            "line": "With these numbers, the right side of line 1 is $x^3$ for every $x$.",
            "reason": "Substituting a value: lines 3, 4 and 5 into line 1."
          },
          {
            "line": "Therefore the numbers $a = 1$, $b = 3$ and $c = 1$ exist with the property asked for.",
            "reason": "Proof of existence by construction: line 6 shows that the numbers built in lines 3 to 5 work."
          }
        ]
      }
    }
  ]
}
