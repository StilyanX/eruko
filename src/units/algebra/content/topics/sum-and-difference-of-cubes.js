export default {
  "number": 139,
  "title": "Sum and difference of cubes",
  "section": 7,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "339-344, 352-356"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Factor $192w^3 - 1029$ completely.",
    "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
    "answer": "3*(4*w-7)*(16*w^2+28*w+49)",
    "solution": [
      "Factor $192w^3 - 1029$ completely.",
      "$192w^3 - 1029 = 3(64w^3 - 343)$",
      "$3(64w^3 - 343) = 3\\left((4w)^3 - 7^3\\right)$",
      "$3\\left((4w)^3 - 7^3\\right) = 3(4w - 7)\\left((4w)^2 + (4w)(7) + 7^2\\right)$",
      "$3(4w - 7)\\left((4w)^2 + (4w)(7) + 7^2\\right) = 3(4w - 7)(16w^2 + 28w + 49)$"
    ]
  },
  "ideas": [
    {
      "name": "Sum and difference of cubes",
      "concrete": "Multiplying out $(x - 6)(x^2 + 6x + 36)$ gives $x^3 + 6x^2 + 36x - 6x^2 - 36x - 216$: every term but the first and the last cancels, so $(x - 6)(x^2 + 6x + 36) = x^3 - 216$, and $x^3 - 216$ factors as $(x - 6)(x^2 + 6x + 36)$.",
      "general": "For all numbers $x$ and $y$, $x^3 - y^3 = (x - y)(x^2 + xy + y^2)$, the **difference of cubes**, and $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$, the **sum of cubes**. A factor $x - y$ must vanish when $x = y$: the difference $x^3 - y^3$ is zero there and has the factor $x - y$, while the sum $x^3 + y^3$ has the factor $x + y$."
    }
  ],
  "kinds": [
    {
      "id": "t139-k1",
      "forms": [
        {
          "example": {
            "problem": "Factor $125x^3 - 512$ completely.",
            "lines": [
              {
                "step": "Factor $125x^3 - 512$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$125x^3 - 512 = (5x)^3 - 8^3$",
                "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(5x)^3 = 125x^3$ and $8^3 = 512$."
              },
              {
                "step": "$(5x)^3 - 8^3 = (5x - 8)\\left((5x)^2 + (5x)(8) + 8^2\\right)$",
                "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 5x$ and $b = 8$."
              },
              {
                "step": "$(5x - 8)\\left((5x)^2 + (5x)(8) + 8^2\\right) = (5x - 8)(25x^2 + 40x + 64)$",
                "reason": "Power of a product and the multiplication of integers, from arithmetic: $(5x)^2 = 25x^2$, $(5x)(8) = 40x$ and $8^2 = 64$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $8z^3 - 729$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*z-9)*(4*z^2+18*z+81)",
              "lines": [
                {
                  "step": "Factor $8z^3 - 729$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8z^3 - 729 = (2z)^3 - 9^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(2z)^3 = 8z^3$ and $9^3 = 729$."
                },
                {
                  "step": "$(2z)^3 - 9^3 = (2z - 9)\\left((2z)^2 + (2z)(9) + 9^2\\right)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 2z$ and $b = 9$."
                },
                {
                  "step": "$(2z - 9)\\left((2z)^2 + (2z)(9) + 9^2\\right) = (2z - 9)(4z^2 + 18z + 81)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(2z)^2 = 4z^2$, $(2z)(9) = 18z$ and $9^2 = 81$."
                }
              ]
            },
            {
              "prompt": "Factor $27t^3 - 1000y^3$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(3*t-10*y)*(9*t^2+30*t*y+100*y^2)",
              "lines": [
                {
                  "step": "Factor $27t^3 - 1000y^3$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$27t^3 - 1000y^3 = (3t)^3 - (10y)^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(3t)^3 = 27t^3$ and $(10y)^3 = 1000y^3$."
                },
                {
                  "step": "$(3t)^3 - (10y)^3 = (3t - 10y)\\left((3t)^2 + (3t)(10y) + (10y)^2\\right)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 3t$ and $b = 10y$."
                },
                {
                  "step": "$(3t - 10y)\\left((3t)^2 + (3t)(10y) + (10y)^2\\right) = (3t - 10y)(9t^2 + 30ty + 100y^2)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(3t)^2 = 9t^2$, $(3t)(10y) = 30ty$ and $(10y)^2 = 100y^2$."
                }
              ]
            },
            {
              "prompt": "Factor $1331s^3 - 1728$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(11*s-12)*(121*s^2+132*s+144)",
              "lines": [
                {
                  "step": "Factor $1331s^3 - 1728$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1331s^3 - 1728 = (11s)^3 - 12^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(11s)^3 = 1331s^3$ and $12^3 = 1728$."
                },
                {
                  "step": "$(11s)^3 - 12^3 = (11s - 12)\\left((11s)^2 + (11s)(12) + 12^2\\right)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 11s$ and $b = 12$."
                },
                {
                  "step": "$(11s - 12)\\left((11s)^2 + (11s)(12) + 12^2\\right) = (11s - 12)(121s^2 + 132s + 144)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(11s)^2 = 121s^2$, $(11s)(12) = 132s$ and $12^2 = 144$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $6859z^3 + 8000$ completely.",
            "lines": [
              {
                "step": "Factor $6859z^3 + 8000$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6859z^3 + 8000 = (19z)^3 + 20^3$",
                "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(19z)^3 = 6859z^3$ and $20^3 = 8000$."
              },
              {
                "step": "$(19z)^3 + 20^3 = (19z + 20)\\left((19z)^2 - (19z)(20) + 20^2\\right)$",
                "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 19z$ and $b = 20$."
              },
              {
                "step": "$(19z + 20)\\left((19z)^2 - (19z)(20) + 20^2\\right) = (19z + 20)(361z^2 - 380z + 400)$",
                "reason": "Power of a product and the multiplication of integers, from arithmetic: $(19z)^2 = 361z^2$, $(19z)(20) = 380z$ and $20^2 = 400$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $t^3 + 64$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(t+4)*(t^2-4*t+16)",
              "lines": [
                {
                  "step": "Factor $t^3 + 64$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$t^3 + 64 = t^3 + 4^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $4^3 = 64$."
                },
                {
                  "step": "$t^3 + 4^3 = (t + 4)\\left(t^2 - (t)(4) + 4^2\\right)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = t$ and $b = 4$."
                },
                {
                  "step": "$(t + 4)\\left(t^2 - (t)(4) + 4^2\\right) = (t + 4)(t^2 - 4t + 16)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $t^2 = t^2$, $(t)(4) = 4t$ and $4^2 = 16$."
                }
              ]
            },
            {
              "prompt": "Factor $125s^3 + 343$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(5*s+7)*(25*s^2-35*s+49)",
              "lines": [
                {
                  "step": "Factor $125s^3 + 343$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$125s^3 + 343 = (5s)^3 + 7^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(5s)^3 = 125s^3$ and $7^3 = 343$."
                },
                {
                  "step": "$(5s)^3 + 7^3 = (5s + 7)\\left((5s)^2 - (5s)(7) + 7^2\\right)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 5s$ and $b = 7$."
                },
                {
                  "step": "$(5s + 7)\\left((5s)^2 - (5s)(7) + 7^2\\right) = (5s + 7)(25s^2 - 35s + 49)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(5s)^2 = 25s^2$, $(5s)(7) = 35s$ and $7^2 = 49$."
                }
              ]
            },
            {
              "prompt": "Factor $512x^3 + 729$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(8*x+9)*(64*x^2-72*x+81)",
              "lines": [
                {
                  "step": "Factor $512x^3 + 729$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$512x^3 + 729 = (8x)^3 + 9^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(8x)^3 = 512x^3$ and $9^3 = 729$."
                },
                {
                  "step": "$(8x)^3 + 9^3 = (8x + 9)\\left((8x)^2 - (8x)(9) + 9^2\\right)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 8x$ and $b = 9$."
                },
                {
                  "step": "$(8x + 9)\\left((8x)^2 - (8x)(9) + 9^2\\right) = (8x + 9)(64x^2 - 72x + 81)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(8x)^2 = 64x^2$, $(8x)(9) = 72x$ and $9^2 = 81$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $432t^3 - 9826$ completely.",
            "lines": [
              {
                "step": "Factor $432t^3 - 9826$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$432t^3 - 9826 = 2(216t^3 - 4913)$",
                "reason": "Common factor: $2$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
              },
              {
                "step": "$2(216t^3 - 4913) = 2\\left((6t)^3 - 17^3\\right)$",
                "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(6t)^3 = 216t^3$ and $17^3 = 4913$."
              },
              {
                "step": "$2\\left((6t)^3 - 17^3\\right) = 2(6t - 17)\\left((6t)^2 + (6t)(17) + 17^2\\right)$",
                "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 6t$ and $b = 17$."
              },
              {
                "step": "$2(6t - 17)\\left((6t)^2 + (6t)(17) + 17^2\\right) = 2(6t - 17)(36t^2 + 102t + 289)$",
                "reason": "Power of a product and the multiplication of integers, from arithmetic: $(6t)^2 = 36t^2$, $(6t)(17) = 102t$ and $17^2 = 289$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $5000s^3 - 34\\,295$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "5*(10*s-19)*(100*s^2+190*s+361)",
              "lines": [
                {
                  "step": "Factor $5000s^3 - 34\\,295$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5000s^3 - 34\\,295 = 5(1000s^3 - 6859)$",
                  "reason": "Common factor: $5$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
                },
                {
                  "step": "$5(1000s^3 - 6859) = 5\\left((10s)^3 - 19^3\\right)$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(10s)^3 = 1000s^3$ and $19^3 = 6859$."
                },
                {
                  "step": "$5\\left((10s)^3 - 19^3\\right) = 5(10s - 19)\\left((10s)^2 + (10s)(19) + 19^2\\right)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 10s$ and $b = 19$."
                },
                {
                  "step": "$5(10s - 19)\\left((10s)^2 + (10s)(19) + 19^2\\right) = 5(10s - 19)(100s^2 + 190s + 361)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(10s)^2 = 100s^2$, $(10s)(19) = 190s$ and $19^2 = 361$."
                }
              ]
            },
            {
              "prompt": "Factor $-375x^3 + 5184$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "-3*(5*x-12)*(25*x^2+60*x+144)",
              "lines": [
                {
                  "step": "Factor $-375x^3 + 5184$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-375x^3 + 5184 = -3(125x^3 - 1728)$",
                  "reason": "Common factor: $-3$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
                },
                {
                  "step": "$-3(125x^3 - 1728) = -3\\left((5x)^3 - 12^3\\right)$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(5x)^3 = 125x^3$ and $12^3 = 1728$."
                },
                {
                  "step": "$-3\\left((5x)^3 - 12^3\\right) = -3(5x - 12)\\left((5x)^2 + (5x)(12) + 12^2\\right)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 5x$ and $b = 12$."
                },
                {
                  "step": "$-3(5x - 12)\\left((5x)^2 + (5x)(12) + 12^2\\right) = -3(5x - 12)(25x^2 + 60x + 144)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(5x)^2 = 25x^2$, $(5x)(12) = 60x$ and $12^2 = 144$."
                }
              ]
            },
            {
              "prompt": "Factor $108z^3 - 16\\,384$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "4*(3*z-16)*(9*z^2+48*z+256)",
              "lines": [
                {
                  "step": "Factor $108z^3 - 16\\,384$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$108z^3 - 16\\,384 = 4(27z^3 - 4096)$",
                  "reason": "Common factor: $4$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
                },
                {
                  "step": "$4(27z^3 - 4096) = 4\\left((3z)^3 - 16^3\\right)$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(3z)^3 = 27z^3$ and $16^3 = 4096$."
                },
                {
                  "step": "$4\\left((3z)^3 - 16^3\\right) = 4(3z - 16)\\left((3z)^2 + (3z)(16) + 16^2\\right)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 3z$ and $b = 16$."
                },
                {
                  "step": "$4(3z - 16)\\left((3z)^2 + (3z)(16) + 16^2\\right) = 4(3z - 16)(9z^2 + 48z + 256)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(3z)^2 = 9z^2$, $(3z)(16) = 48z$ and $16^2 = 256$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $-16s^3 - 4394$ completely.",
            "lines": [
              {
                "step": "Factor $-16s^3 - 4394$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-16s^3 - 4394 = -2(8s^3 + 2197)$",
                "reason": "Common factor: $-2$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
              },
              {
                "step": "$-2(8s^3 + 2197) = -2\\left((2s)^3 + 13^3\\right)$",
                "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(2s)^3 = 8s^3$ and $13^3 = 2197$."
              },
              {
                "step": "$-2\\left((2s)^3 + 13^3\\right) = -2(2s + 13)\\left((2s)^2 - (2s)(13) + 13^2\\right)$",
                "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 2s$ and $b = 13$."
              },
              {
                "step": "$-2(2s + 13)\\left((2s)^2 - (2s)(13) + 13^2\\right) = -2(2s + 13)(4s^2 - 26s + 169)$",
                "reason": "Power of a product and the multiplication of integers, from arithmetic: $(2s)^2 = 4s^2$, $(2s)(13) = 26s$ and $13^2 = 169$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $1536x^3 + 10\\,125$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "3*(8*x+15)*(64*x^2-120*x+225)",
              "lines": [
                {
                  "step": "Factor $1536x^3 + 10\\,125$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1536x^3 + 10\\,125 = 3(512x^3 + 3375)$",
                  "reason": "Common factor: $3$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
                },
                {
                  "step": "$3(512x^3 + 3375) = 3\\left((8x)^3 + 15^3\\right)$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(8x)^3 = 512x^3$ and $15^3 = 3375$."
                },
                {
                  "step": "$3\\left((8x)^3 + 15^3\\right) = 3(8x + 15)\\left((8x)^2 - (8x)(15) + 15^2\\right)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 8x$ and $b = 15$."
                },
                {
                  "step": "$3(8x + 15)\\left((8x)^2 - (8x)(15) + 15^2\\right) = 3(8x + 15)(64x^2 - 120x + 225)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(8x)^2 = 64x^2$, $(8x)(15) = 120x$ and $15^2 = 225$."
                }
              ]
            },
            {
              "prompt": "Factor $3000z^3 + 14\\,739$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "3*(10*z+17)*(100*z^2-170*z+289)",
              "lines": [
                {
                  "step": "Factor $3000z^3 + 14\\,739$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3000z^3 + 14\\,739 = 3(1000z^3 + 4913)$",
                  "reason": "Common factor: $3$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
                },
                {
                  "step": "$3(1000z^3 + 4913) = 3\\left((10z)^3 + 17^3\\right)$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(10z)^3 = 1000z^3$ and $17^3 = 4913$."
                },
                {
                  "step": "$3\\left((10z)^3 + 17^3\\right) = 3(10z + 17)\\left((10z)^2 - (10z)(17) + 17^2\\right)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 10z$ and $b = 17$."
                },
                {
                  "step": "$3(10z + 17)\\left((10z)^2 - (10z)(17) + 17^2\\right) = 3(10z + 17)(100z^2 - 170z + 289)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(10z)^2 = 100z^2$, $(10z)(17) = 170z$ and $17^2 = 289$."
                }
              ]
            },
            {
              "prompt": "Factor $-864t^3 - 27\\,436$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "-4*(6*t+19)*(36*t^2-114*t+361)",
              "lines": [
                {
                  "step": "Factor $-864t^3 - 27\\,436$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-864t^3 - 27\\,436 = -4(216t^3 + 6859)$",
                  "reason": "Common factor: $-4$ divides both terms, and the bracket left has a cube for its first term and a cube for its last."
                },
                {
                  "step": "$-4(216t^3 + 6859) = -4\\left((6t)^3 + 19^3\\right)$",
                  "reason": "Power of a product and the definition of a power, from arithmetic, write each term as a cube: $(6t)^3 = 216t^3$ and $19^3 = 6859$."
                },
                {
                  "step": "$-4\\left((6t)^3 + 19^3\\right) = -4(6t + 19)\\left((6t)^2 - (6t)(19) + 19^2\\right)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 6t$ and $b = 19$."
                },
                {
                  "step": "$-4(6t + 19)\\left((6t)^2 - (6t)(19) + 19^2\\right) = -4(6t + 19)(36t^2 - 114t + 361)$",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(6t)^2 = 36t^2$, $(6t)(19) = 114t$ and $19^2 = 361$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $729x^6 - 4096$ completely.",
            "lines": [
              {
                "step": "Factor $729x^6 - 4096$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$729x^6 - 4096 = (27x^3)^2 - 64^2$",
                "reason": "Power law and power of a product: $(27x^3)^2 = 729x^6$, and $64^2 = 4096$."
              },
              {
                "step": "$(27x^3)^2 - 64^2 = (27x^3 - 64)(27x^3 + 64)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 27x^3$ and $b = 64$."
              },
              {
                "step": "$27x^3 - 64 = (3x - 4)(9x^2 + 12x + 16)$",
                "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 3x$ and $b = 4$, since $(3x)^3 = 27x^3$ and $4^3 = 64$."
              },
              {
                "step": "$27x^3 + 64 = (3x + 4)(9x^2 - 12x + 16)$",
                "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 3x$ and $b = 4$, since $(3x)^3 = 27x^3$ and $4^3 = 64$."
              },
              {
                "step": "$729x^6 - 4096 = (3x - 4)(9x^2 + 12x + 16)(3x + 4)(9x^2 - 12x + 16)$",
                "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $4096z^6 - 15\\,625$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(4*z-5)*(16*z^2+20*z+25)*(4*z+5)*(16*z^2-20*z+25)",
              "lines": [
                {
                  "step": "Factor $4096z^6 - 15\\,625$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4096z^6 - 15\\,625 = (64z^3)^2 - 125^2$",
                  "reason": "Power law and power of a product: $(64z^3)^2 = 4096z^6$, and $125^2 = 15\\,625$."
                },
                {
                  "step": "$(64z^3)^2 - 125^2 = (64z^3 - 125)(64z^3 + 125)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 64z^3$ and $b = 125$."
                },
                {
                  "step": "$64z^3 - 125 = (4z - 5)(16z^2 + 20z + 25)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 4z$ and $b = 5$, since $(4z)^3 = 64z^3$ and $5^3 = 125$."
                },
                {
                  "step": "$64z^3 + 125 = (4z + 5)(16z^2 - 20z + 25)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 4z$ and $b = 5$, since $(4z)^3 = 64z^3$ and $5^3 = 125$."
                },
                {
                  "step": "$4096z^6 - 15\\,625 = (4z - 5)(16z^2 + 20z + 25)(4z + 5)(16z^2 - 20z + 25)$",
                  "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Factor $64t^6 - 729$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*t-3)*(4*t^2+6*t+9)*(2*t+3)*(4*t^2-6*t+9)",
              "lines": [
                {
                  "step": "Factor $64t^6 - 729$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$64t^6 - 729 = (8t^3)^2 - 27^2$",
                  "reason": "Power law and power of a product: $(8t^3)^2 = 64t^6$, and $27^2 = 729$."
                },
                {
                  "step": "$(8t^3)^2 - 27^2 = (8t^3 - 27)(8t^3 + 27)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 8t^3$ and $b = 27$."
                },
                {
                  "step": "$8t^3 - 27 = (2t - 3)(4t^2 + 6t + 9)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 2t$ and $b = 3$, since $(2t)^3 = 8t^3$ and $3^3 = 27$."
                },
                {
                  "step": "$8t^3 + 27 = (2t + 3)(4t^2 - 6t + 9)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 2t$ and $b = 3$, since $(2t)^3 = 8t^3$ and $3^3 = 27$."
                },
                {
                  "step": "$64t^6 - 729 = (2t - 3)(4t^2 + 6t + 9)(2t + 3)(4t^2 - 6t + 9)$",
                  "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Factor $729s^6 - 15\\,625$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(3*s-5)*(9*s^2+15*s+25)*(3*s+5)*(9*s^2-15*s+25)",
              "lines": [
                {
                  "step": "Factor $729s^6 - 15\\,625$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$729s^6 - 15\\,625 = (27s^3)^2 - 125^2$",
                  "reason": "Power law and power of a product: $(27s^3)^2 = 729s^6$, and $125^2 = 15\\,625$."
                },
                {
                  "step": "$(27s^3)^2 - 125^2 = (27s^3 - 125)(27s^3 + 125)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 27s^3$ and $b = 125$."
                },
                {
                  "step": "$27s^3 - 125 = (3s - 5)(9s^2 + 15s + 25)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 3s$ and $b = 5$, since $(3s)^3 = 27s^3$ and $5^3 = 125$."
                },
                {
                  "step": "$27s^3 + 125 = (3s + 5)(9s^2 - 15s + 25)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 3s$ and $b = 5$, since $(3s)^3 = 27s^3$ and $5^3 = 125$."
                },
                {
                  "step": "$729s^6 - 15\\,625 = (3s - 5)(9s^2 + 15s + 25)(3s + 5)(9s^2 - 15s + 25)$",
                  "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t139-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the larger of the two primes whose product is $N = 4069$.",
            "lines": [
              {
                "step": "Find the larger of the two primes whose product is $N = 4069$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4069 = 16^3 - 3^3$",
                "reason": "The definition of a power, from arithmetic: $16^3 = 4096$ and $3^3 = 27$, and $4096 - 27 = 4069$."
              },
              {
                "step": "$16^3 - 3^3 = (16 - 3)(16^2 + 16 \\cdot 3 + 3^2)$",
                "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 16$ and $b = 3$."
              },
              {
                "step": "The two factors are $16 - 3 = 13$ and $16^2 + 16 \\cdot 3 + 3^2 = 313$.",
                "reason": "The multiplication and addition of integers, from arithmetic: $256 + 48 + 9 = 313$."
              },
              {
                "step": "The two primes are $13$ and $313$, and the larger is $313$.",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the larger of the two primes whose product is $N = 46\\,313$.",
              "form": "Answer as an integer.",
              "answer": "1597",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 46\\,313$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$46\\,313 = 36^3 - 7^3$",
                  "reason": "The definition of a power, from arithmetic: $36^3 = 46\\,656$ and $7^3 = 343$, and $46\\,656 - 343 = 46\\,313$."
                },
                {
                  "step": "$36^3 - 7^3 = (36 - 7)(36^2 + 36 \\cdot 7 + 7^2)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 36$ and $b = 7$."
                },
                {
                  "step": "The two factors are $36 - 7 = 29$ and $36^2 + 36 \\cdot 7 + 7^2 = 1597$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $1296 + 252 + 49 = 1597$."
                },
                {
                  "step": "The two primes are $29$ and $1597$, and the larger is $1597$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 50\\,437$.",
              "form": "Answer as an integer.",
              "answer": "1627",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 50\\,437$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$50\\,437 = 37^3 - 6^3$",
                  "reason": "The definition of a power, from arithmetic: $37^3 = 50\\,653$ and $6^3 = 216$, and $50\\,653 - 216 = 50\\,437$."
                },
                {
                  "step": "$37^3 - 6^3 = (37 - 6)(37^2 + 37 \\cdot 6 + 6^2)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 37$ and $b = 6$."
                },
                {
                  "step": "The two factors are $37 - 6 = 31$ and $37^2 + 37 \\cdot 6 + 6^2 = 1627$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $1369 + 222 + 36 = 1627$."
                },
                {
                  "step": "The two primes are $31$ and $1627$, and the larger is $1627$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 139\\,879$.",
              "form": "Answer as an integer.",
              "answer": "3253",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 139\\,879$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$139\\,879 = 52^3 - 9^3$",
                  "reason": "The definition of a power, from arithmetic: $52^3 = 140\\,608$ and $9^3 = 729$, and $140\\,608 - 729 = 139\\,879$."
                },
                {
                  "step": "$52^3 - 9^3 = (52 - 9)(52^2 + 52 \\cdot 9 + 9^2)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 52$ and $b = 9$."
                },
                {
                  "step": "The two factors are $52 - 9 = 43$ and $52^2 + 52 \\cdot 9 + 9^2 = 3253$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $2704 + 468 + 81 = 3253$."
                },
                {
                  "step": "The two primes are $43$ and $3253$, and the larger is $3253$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the larger of the two primes whose product is $N = 125\\,729$.",
            "lines": [
              {
                "step": "Find the larger of the two primes whose product is $N = 125\\,729$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$125\\,729 = 50^3 + 9^3$",
                "reason": "The definition of a power, from arithmetic: $50^3 = 125\\,000$ and $9^3 = 729$, and $125\\,000 + 729 = 125\\,729$."
              },
              {
                "step": "$50^3 + 9^3 = (50 + 9)(50^2 - 50 \\cdot 9 + 9^2)$",
                "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 50$ and $b = 9$."
              },
              {
                "step": "The two factors are $50 + 9 = 59$ and $50^2 - 50 \\cdot 9 + 9^2 = 2131$.",
                "reason": "The multiplication and addition of integers, from arithmetic: $2500 - 450 + 81 = 2131$."
              },
              {
                "step": "The two primes are $59$ and $2131$, and the larger is $2131$.",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the larger of the two primes whose product is $N = 238\\,453$.",
              "form": "Answer as an integer.",
              "answer": "3559",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 238\\,453$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$238\\,453 = 62^3 + 5^3$",
                  "reason": "The definition of a power, from arithmetic: $62^3 = 238\\,328$ and $5^3 = 125$, and $238\\,328 + 125 = 238\\,453$."
                },
                {
                  "step": "$62^3 + 5^3 = (62 + 5)(62^2 - 62 \\cdot 5 + 5^2)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 62$ and $b = 5$."
                },
                {
                  "step": "The two factors are $62 + 5 = 67$ and $62^2 - 62 \\cdot 5 + 5^2 = 3559$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $3844 - 310 + 25 = 3559$."
                },
                {
                  "step": "The two primes are $67$ and $3559$, and the larger is $3559$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 804\\,421$.",
              "form": "Answer as an integer.",
              "answer": "8293",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 804\\,421$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$804\\,421 = 93^3 + 4^3$",
                  "reason": "The definition of a power, from arithmetic: $93^3 = 804\\,357$ and $4^3 = 64$, and $804\\,357 + 64 = 804\\,421$."
                },
                {
                  "step": "$93^3 + 4^3 = (93 + 4)(93^2 - 93 \\cdot 4 + 4^2)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 93$ and $b = 4$."
                },
                {
                  "step": "The two factors are $93 + 4 = 97$ and $93^2 - 93 \\cdot 4 + 4^2 = 8293$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $8649 - 372 + 16 = 8293$."
                },
                {
                  "step": "The two primes are $97$ and $8293$, and the larger is $8293$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 857\\,887$.",
              "form": "Answer as an integer.",
              "answer": "8329",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 857\\,887$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$857\\,887 = 95^3 + 8^3$",
                  "reason": "The definition of a power, from arithmetic: $95^3 = 857\\,375$ and $8^3 = 512$, and $857\\,375 + 512 = 857\\,887$."
                },
                {
                  "step": "$95^3 + 8^3 = (95 + 8)(95^2 - 95 \\cdot 8 + 8^2)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 95$ and $b = 8$."
                },
                {
                  "step": "The two factors are $95 + 8 = 103$ and $95^2 - 95 \\cdot 8 + 8^2 = 8329$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $9025 - 760 + 64 = 8329$."
                },
                {
                  "step": "The two primes are $103$ and $8329$, and the larger is $8329$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the larger of the two primes whose product is $N = 17^6 + 10^6$.",
            "lines": [
              {
                "step": "Find the larger of the two primes whose product is $N = 17^6 + 10^6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$17^6 + 10^6 = 289^3 + 100^3$",
                "reason": "Power law: $17^6 = (17^2)^3 = 289^3$ and $10^6 = (10^2)^3 = 100^3$."
              },
              {
                "step": "$289^3 + 100^3 = (289 + 100)(289^2 - 289 \\cdot 100 + 100^2)$",
                "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 289$ and $b = 100$."
              },
              {
                "step": "The two factors are $289 + 100 = 389$ and $289^2 - 289 \\cdot 100 + 100^2 = 64\\,621$.",
                "reason": "The multiplication and addition of integers, from arithmetic: $83\\,521 - 28\\,900 + 10\\,000 = 64\\,621$."
              },
              {
                "step": "The two primes are $389$ and $64\\,621$, and the larger is $64\\,621$.",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the larger of the two primes whose product is $N = 20^6 + 11^6$.",
              "form": "Answer as an integer.",
              "answer": "126241",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 20^6 + 11^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$20^6 + 11^6 = 400^3 + 121^3$",
                  "reason": "Power law: $20^6 = (20^2)^3 = 400^3$ and $11^6 = (11^2)^3 = 121^3$."
                },
                {
                  "step": "$400^3 + 121^3 = (400 + 121)(400^2 - 400 \\cdot 121 + 121^2)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 400$ and $b = 121$."
                },
                {
                  "step": "The two factors are $400 + 121 = 521$ and $400^2 - 400 \\cdot 121 + 121^2 = 126\\,241$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $160\\,000 - 48\\,400 + 14\\,641 = 126\\,241$."
                },
                {
                  "step": "The two primes are $521$ and $126\\,241$, and the larger is $126\\,241$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 23^6 + 12^6$.",
              "form": "Answer as an integer.",
              "answer": "224401",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 23^6 + 12^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$23^6 + 12^6 = 529^3 + 144^3$",
                  "reason": "Power law: $23^6 = (23^2)^3 = 529^3$ and $12^6 = (12^2)^3 = 144^3$."
                },
                {
                  "step": "$529^3 + 144^3 = (529 + 144)(529^2 - 529 \\cdot 144 + 144^2)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 529$ and $b = 144$."
                },
                {
                  "step": "The two factors are $529 + 144 = 673$ and $529^2 - 529 \\cdot 144 + 144^2 = 224\\,401$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $279\\,841 - 76\\,176 + 20\\,736 = 224\\,401$."
                },
                {
                  "step": "The two primes are $673$ and $224\\,401$, and the larger is $224\\,401$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 24^6 + 19^6$.",
              "form": "Answer as an integer.",
              "answer": "254161",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 24^6 + 19^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$24^6 + 19^6 = 576^3 + 361^3$",
                  "reason": "Power law: $24^6 = (24^2)^3 = 576^3$ and $19^6 = (19^2)^3 = 361^3$."
                },
                {
                  "step": "$576^3 + 361^3 = (576 + 361)(576^2 - 576 \\cdot 361 + 361^2)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 576$ and $b = 361$."
                },
                {
                  "step": "The two factors are $576 + 361 = 937$ and $576^2 - 576 \\cdot 361 + 361^2 = 254\\,161$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $331\\,776 - 207\\,936 + 130\\,321 = 254\\,161$."
                },
                {
                  "step": "The two primes are $937$ and $254\\,161$, and the larger is $254\\,161$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the larger of the two primes whose product is $N = 2^{15} - 3^9$.",
            "lines": [
              {
                "step": "Find the larger of the two primes whose product is $N = 2^{15} - 3^9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2^{15} - 3^9 = 32^3 - 27^3$",
                "reason": "Power law: $2^{15} = (2^5)^3 = 32^3$ and $3^9 = (3^3)^3 = 27^3$."
              },
              {
                "step": "$32^3 - 27^3 = (32 - 27)(32^2 + 32 \\cdot 27 + 27^2)$",
                "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 32$ and $b = 27$."
              },
              {
                "step": "The two factors are $32 - 27 = 5$ and $32^2 + 32 \\cdot 27 + 27^2 = 2617$.",
                "reason": "The multiplication and addition of integers, from arithmetic: $1024 + 864 + 729 = 2617$."
              },
              {
                "step": "The two primes are $5$ and $2617$, and the larger is $2617$.",
                "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the larger of the two primes whose product is $N = 14^6 - 5^9$.",
              "form": "Answer as an integer.",
              "answer": "78541",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 14^6 - 5^9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$14^6 - 5^9 = 196^3 - 125^3$",
                  "reason": "Power law: $14^6 = (14^2)^3 = 196^3$ and $5^9 = (5^3)^3 = 125^3$."
                },
                {
                  "step": "$196^3 - 125^3 = (196 - 125)(196^2 + 196 \\cdot 125 + 125^2)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 196$ and $b = 125$."
                },
                {
                  "step": "The two factors are $196 - 125 = 71$ and $196^2 + 196 \\cdot 125 + 125^2 = 78\\,541$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $38\\,416 + 24\\,500 + 15\\,625 = 78\\,541$."
                },
                {
                  "step": "The two primes are $71$ and $78\\,541$, and the larger is $78\\,541$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 6^9 - 13^6$.",
              "form": "Answer as an integer.",
              "answer": "111721",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 6^9 - 13^6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6^9 - 13^6 = 216^3 - 169^3$",
                  "reason": "Power law: $6^9 = (6^3)^3 = 216^3$ and $13^6 = (13^2)^3 = 169^3$."
                },
                {
                  "step": "$216^3 - 169^3 = (216 - 169)(216^2 + 216 \\cdot 169 + 169^2)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 216$ and $b = 169$."
                },
                {
                  "step": "The two factors are $216 - 169 = 47$ and $216^2 + 216 \\cdot 169 + 169^2 = 111\\,721$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $46\\,656 + 36\\,504 + 28\\,561 = 111\\,721$."
                },
                {
                  "step": "The two primes are $47$ and $111\\,721$, and the larger is $111\\,721$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            },
            {
              "prompt": "Find the larger of the two primes whose product is $N = 3^{15} - 2^{18}$.",
              "form": "Answer as an integer.",
              "answer": "78697",
              "lines": [
                {
                  "step": "Find the larger of the two primes whose product is $N = 3^{15} - 2^{18}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{15} - 2^{18} = 243^3 - 64^3$",
                  "reason": "Power law: $3^{15} = (3^5)^3 = 243^3$ and $2^{18} = (2^6)^3 = 64^3$."
                },
                {
                  "step": "$243^3 - 64^3 = (243 - 64)(243^2 + 243 \\cdot 64 + 64^2)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 243$ and $b = 64$."
                },
                {
                  "step": "The two factors are $243 - 64 = 179$ and $243^2 + 243 \\cdot 64 + 64^2 = 78\\,697$.",
                  "reason": "The multiplication and addition of integers, from arithmetic: $59\\,049 + 15\\,552 + 4096 = 78\\,697$."
                },
                {
                  "step": "The two primes are $179$ and $78\\,697$, and the larger is $78\\,697$.",
                  "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: both factors are greater than $1$ and $N$ has exactly two primes in its decomposition, so each factor is one of the two primes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t139-k3",
      "forms": [
        {
          "example": {
            "problem": "Expand $(11x - 18)(121x^2 + 198x + 324)$.",
            "lines": [
              {
                "step": "Expand $(11x - 18)(121x^2 + 198x + 324)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first bracket is $a - b$ with $a = 11x$ and $b = 18$, and the second is $a^2 + ab + b^2$.",
                "reason": "Power of a product and the multiplication of integers, from arithmetic: $(11x)^2 = 121x^2$, $(11x)(18) = 198x$ and $18^2 = 324$."
              },
              {
                "step": "$(11x - 18)(121x^2 + 198x + 324) = (11x)^3 - 18^3$",
                "reason": "Difference of cubes, read from right to left: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$."
              },
              {
                "step": "$(11x)^3 - 18^3 = 1331x^3 - 5832$",
                "reason": "Power of a product and the definition of a power, from arithmetic: $(11x)^3 = 1331x^3$ and $18^3 = 5832$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(13z - 20)(169z^2 + 260z + 400)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2197*z^3-8000",
              "lines": [
                {
                  "step": "Expand $(13z - 20)(169z^2 + 260z + 400)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first bracket is $a - b$ with $a = 13z$ and $b = 20$, and the second is $a^2 + ab + b^2$.",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(13z)^2 = 169z^2$, $(13z)(20) = 260z$ and $20^2 = 400$."
                },
                {
                  "step": "$(13z - 20)(169z^2 + 260z + 400) = (13z)^3 - 20^3$",
                  "reason": "Difference of cubes, read from right to left: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$."
                },
                {
                  "step": "$(13z)^3 - 20^3 = 2197z^3 - 8000$",
                  "reason": "Power of a product and the definition of a power, from arithmetic: $(13z)^3 = 2197z^3$ and $20^3 = 8000$."
                }
              ]
            },
            {
              "prompt": "Expand $(4t - 9y)(16t^2 + 36ty + 81y^2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "64*t^3-729*y^3",
              "lines": [
                {
                  "step": "Expand $(4t - 9y)(16t^2 + 36ty + 81y^2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first bracket is $a - b$ with $a = 4t$ and $b = 9y$, and the second is $a^2 + ab + b^2$.",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(4t)^2 = 16t^2$, $(4t)(9y) = 36ty$ and $(9y)^2 = 81y^2$."
                },
                {
                  "step": "$(4t - 9y)(16t^2 + 36ty + 81y^2) = (4t)^3 - (9y)^3$",
                  "reason": "Difference of cubes, read from right to left: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$."
                },
                {
                  "step": "$(4t)^3 - (9y)^3 = 64t^3 - 729y^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic: $(4t)^3 = 64t^3$ and $(9y)^3 = 729y^3$."
                }
              ]
            },
            {
              "prompt": "Expand $(2s - 15)(4s^2 + 30s + 225)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*s^3-3375",
              "lines": [
                {
                  "step": "Expand $(2s - 15)(4s^2 + 30s + 225)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first bracket is $a - b$ with $a = 2s$ and $b = 15$, and the second is $a^2 + ab + b^2$.",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(2s)^2 = 4s^2$, $(2s)(15) = 30s$ and $15^2 = 225$."
                },
                {
                  "step": "$(2s - 15)(4s^2 + 30s + 225) = (2s)^3 - 15^3$",
                  "reason": "Difference of cubes, read from right to left: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$."
                },
                {
                  "step": "$(2s)^3 - 15^3 = 8s^3 - 3375$",
                  "reason": "Power of a product and the definition of a power, from arithmetic: $(2s)^3 = 8s^3$ and $15^3 = 3375$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $(3t + 20y)(9t^2 - 60ty + 400y^2)$.",
            "lines": [
              {
                "step": "Expand $(3t + 20y)(9t^2 - 60ty + 400y^2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first bracket is $a + b$ with $a = 3t$ and $b = 20y$, and the second is $a^2 - ab + b^2$.",
                "reason": "Power of a product and the multiplication of integers, from arithmetic: $(3t)^2 = 9t^2$, $(3t)(20y) = 60ty$ and $(20y)^2 = 400y^2$."
              },
              {
                "step": "$(3t + 20y)(9t^2 - 60ty + 400y^2) = (3t)^3 + (20y)^3$",
                "reason": "Sum of cubes, read from right to left: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
              },
              {
                "step": "$(3t)^3 + (20y)^3 = 27t^3 + 8000y^3$",
                "reason": "Power of a product and the definition of a power, from arithmetic: $(3t)^3 = 27t^3$ and $(20y)^3 = 8000y^3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $(4s + 15)(16s^2 - 60s + 225)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "64*s^3+3375",
              "lines": [
                {
                  "step": "Expand $(4s + 15)(16s^2 - 60s + 225)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first bracket is $a + b$ with $a = 4s$ and $b = 15$, and the second is $a^2 - ab + b^2$.",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(4s)^2 = 16s^2$, $(4s)(15) = 60s$ and $15^2 = 225$."
                },
                {
                  "step": "$(4s + 15)(16s^2 - 60s + 225) = (4s)^3 + 15^3$",
                  "reason": "Sum of cubes, read from right to left: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
                },
                {
                  "step": "$(4s)^3 + 15^3 = 64s^3 + 3375$",
                  "reason": "Power of a product and the definition of a power, from arithmetic: $(4s)^3 = 64s^3$ and $15^3 = 3375$."
                }
              ]
            },
            {
              "prompt": "Expand $(2x + 17)(4x^2 - 34x + 289)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x^3+4913",
              "lines": [
                {
                  "step": "Expand $(2x + 17)(4x^2 - 34x + 289)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first bracket is $a + b$ with $a = 2x$ and $b = 17$, and the second is $a^2 - ab + b^2$.",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(2x)^2 = 4x^2$, $(2x)(17) = 34x$ and $17^2 = 289$."
                },
                {
                  "step": "$(2x + 17)(4x^2 - 34x + 289) = (2x)^3 + 17^3$",
                  "reason": "Sum of cubes, read from right to left: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
                },
                {
                  "step": "$(2x)^3 + 17^3 = 8x^3 + 4913$",
                  "reason": "Power of a product and the definition of a power, from arithmetic: $(2x)^3 = 8x^3$ and $17^3 = 4913$."
                }
              ]
            },
            {
              "prompt": "Expand $(8z + 19y)(64z^2 - 152yz + 361y^2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "512*z^3+6859*y^3",
              "lines": [
                {
                  "step": "Expand $(8z + 19y)(64z^2 - 152yz + 361y^2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first bracket is $a + b$ with $a = 8z$ and $b = 19y$, and the second is $a^2 - ab + b^2$.",
                  "reason": "Power of a product and the multiplication of integers, from arithmetic: $(8z)^2 = 64z^2$, $(8z)(19y) = 152yz$ and $(19y)^2 = 361y^2$."
                },
                {
                  "step": "$(8z + 19y)(64z^2 - 152yz + 361y^2) = (8z)^3 + (19y)^3$",
                  "reason": "Sum of cubes, read from right to left: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
                },
                {
                  "step": "$(8z)^3 + (19y)^3 = 512z^3 + 6859y^3$",
                  "reason": "Power of a product and the definition of a power, from arithmetic: $(8z)^3 = 512z^3$ and $(19y)^3 = 6859y^3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t139-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this factorisation of $343x^3 - 8000$, and write that line right.",
            "given": [
              "$343x^3 - 8000$",
              "$(7x)^3 - 20^3$",
              "$(7x + 20)\\left((7x)^2 - (7x)(20) + 20^2\\right)$",
              "$(7x + 20)(49x^2 - 140x + 400)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factorisation of $343x^3 - 8000$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes the difference of two cubes $(7x)^3 - 20^3$ with the brackets of a sum of cubes, $7x + 20$ and a middle term with the sign $-$.",
                "reason": "A sign lost: when $7x = 20$, $(7x)^3 - 20^3$ is zero, and a factor $a - b$ must vanish when $a = b$, so the first bracket is $7x - 20$, not $7x + 20$."
              },
              {
                "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line not equal to the line before it."
              },
              {
                "step": "Line 3 written right is $(7x - 20)\\left((7x)^2 + (7x)(20) + 20^2\\right)$.",
                "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the sign in the first bracket is the sign between the cubes, and the middle term of the second bracket has the other sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factorisation of $162z^3 + 7986$, and write that line right.",
              "given": [
                "$162z^3 + 7986$",
                "$6(27z^3 + 1331)$",
                "$6\\left((3z)^3 + 11^3\\right)$",
                "$6(3z - 11)\\left((3z)^2 + (3z)(11) + 11^2\\right)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 6*(3*z+11)*((3*z)^2-(3*z)*(11)+(11)^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $162z^3 + 7986$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the sum of two cubes $(3z)^3 + 11^3$ with the brackets of a difference of cubes, $3z - 11$ and a middle term with the sign $+$.",
                  "reason": "A sign lost: a factor $a - b$ must vanish when $a = b$, but when $3z = 11$ the sum $(3z)^3 + 11^3$ is $2 \\cdot 11^3$, not zero, so the first bracket is $3z + 11$, not $3z - 11$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 4 written right is $6(3z + 11)\\left((3z)^2 - (3z)(11) + 11^2\\right)$.",
                  "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the sign in the first bracket is the sign between the cubes, and the middle term of the second bracket has the other sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factorisation of $320t^3 - 10\\,985y^3$, and write that line right.",
              "given": [
                "$320t^3 - 10\\,985y^3$",
                "$5(64t^3 - 2197y^3)$",
                "$5\\left((4t)^3 - (13y)^3\\right)$",
                "$5(4t + 13y)\\left((4t)^2 - (4t)(13y) + (13y)^2\\right)$",
                "$5(4t + 13y)(16t^2 - 52ty + 169y^2)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 5*(4*t-13*y)*((4*t)^2+(4*t)*(13*y)+(13*y)^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $320t^3 - 10\\,985y^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the difference of two cubes $(4t)^3 - (13y)^3$ with the brackets of a sum of cubes, $4t + 13y$ and a middle term with the sign $-$.",
                  "reason": "A sign lost: when $4t = 13y$, $(4t)^3 - (13y)^3$ is zero, and a factor $a - b$ must vanish when $a = b$, so the first bracket is $4t - 13y$, not $4t + 13y$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 4 written right is $5(4t - 13y)\\left((4t)^2 + (4t)(13y) + (13y)^2\\right)$.",
                  "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the sign in the first bracket is the sign between the cubes, and the middle term of the second bracket has the other sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factorisation of $729s^3 + 4096$, and write that line right.",
              "given": [
                "$729s^3 + 4096$",
                "$(9s)^3 + 16^3$",
                "$(9s - 16)\\left((9s)^2 + (9s)(16) + 16^2\\right)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (9*s+16)*((9*s)^2-(9*s)*(16)+(16)^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $729s^3 + 4096$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the sum of two cubes $(9s)^3 + 16^3$ with the brackets of a difference of cubes, $9s - 16$ and a middle term with the sign $+$.",
                  "reason": "A sign lost: a factor $a - b$ must vanish when $a = b$, but when $9s = 16$ the sum $(9s)^3 + 16^3$ is $2 \\cdot 16^3$, not zero, so the first bracket is $9s + 16$, not $9s - 16$."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 3 written right is $(9s + 16)\\left((9s)^2 - (9s)(16) + 16^2\\right)$.",
                  "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the sign in the first bracket is the sign between the cubes, and the middle term of the second bracket has the other sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this factorisation of $250z^3 - 1458$, and write that line right.",
            "given": [
              "$250z^3 - 1458$",
              "$2(125z^3 - 729)$",
              "$2\\left((5z)^3 - 9^3\\right)$",
              "$2(5z - 9)^3$",
              "$2(5z - 9)(5z - 9)(5z - 9)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factorisation of $250z^3 - 1458$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 3 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
              },
              {
                "step": "Line 4 writes $(5z)^3 - 9^3$ as $(5z - 9)^3$.",
                "reason": "A power taken term by term over a sum: $(5z - 9)^3$ is $(5z - 9)(5z - 9)(5z - 9)$, which has terms in $z^2$ and $z$ that $(5z)^3 - 9^3$ lacks."
              },
              {
                "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                "reason": "The first wrong line is the first line not equal to the line before it."
              },
              {
                "step": "Line 4 written right is $2(5z - 9)\\left((5z)^2 + (5z)(9) + 9^2\\right)$.",
                "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the cube of a bracket is not the difference or sum of the cubes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factorisation of $1331t^3 + 8000y^3$, and write that line right.",
              "given": [
                "$1331t^3 + 8000y^3$",
                "$(11t)^3 + (20y)^3$",
                "$(11t + 20y)^3$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (11*t+20*y)*((11*t)^2-(11*t)*(20*y)+(20*y)^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $1331t^3 + 8000y^3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(11t)^3 + (20y)^3$ as $(11t + 20y)^3$.",
                  "reason": "A power taken term by term over a sum: $(11t + 20y)^3$ is $(11t + 20y)(11t + 20y)(11t + 20y)$, which has terms in $t^2y$ and $ty^2$ that $(11t)^3 + (20y)^3$ lacks."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 3 written right is $(11t + 20y)\\left((11t)^2 - (11t)(20y) + (20y)^2\\right)$.",
                  "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the cube of a bracket is not the difference or sum of the cubes."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factorisation of $512s^3 - 2197$, and write that line right.",
              "given": [
                "$512s^3 - 2197$",
                "$(8s)^3 - 13^3$",
                "$(8s - 13)^3$",
                "$(8s - 13)(8s - 13)(8s - 13)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (8*s-13)*((8*s)^2+(8*s)*(13)+(13)^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $512s^3 - 2197$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $(8s)^3 - 13^3$ as $(8s - 13)^3$.",
                  "reason": "A power taken term by term over a sum: $(8s - 13)^3$ is $(8s - 13)(8s - 13)(8s - 13)$, which has terms in $s^2$ and $s$ that $(8s)^3 - 13^3$ lacks."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 3 written right is $(8s - 13)\\left((8s)^2 + (8s)(13) + 13^2\\right)$.",
                  "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the cube of a bracket is not the difference or sum of the cubes."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factorisation of $2058x^3 + 20\\,250$, and write that line right.",
              "given": [
                "$2058x^3 + 20\\,250$",
                "$6(343x^3 + 3375)$",
                "$6\\left((7x)^3 + 15^3\\right)$",
                "$6(7x + 15)^3$",
                "$6(7x + 15)(7x + 15)(7x + 15)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 6*(7*x+15)*((7*x)^2-(7*x)*(15)+(15)^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $2058x^3 + 20\\,250$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $(7x)^3 + 15^3$ as $(7x + 15)^3$.",
                  "reason": "A power taken term by term over a sum: $(7x + 15)^3$ is $(7x + 15)(7x + 15)(7x + 15)$, which has terms in $x^2$ and $x$ that $(7x)^3 + 15^3$ lacks."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 4 written right is $6(7x + 15)\\left((7x)^2 - (7x)(15) + 15^2\\right)$.",
                  "reason": "Difference of cubes, $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, and sum of cubes, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the cube of a bracket is not the difference or sum of the cubes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t139-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the difference of the cubes on the left and nothing multiplied out: The difference of the cubes of $x$ and $y$ is 7 times the difference of $x$ and $y$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the difference of the cubes on the left and nothing multiplied out: The difference of the cubes of $x$ and $y$ is 7 times the difference of $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The cubes of $x$ and $y$ are $x^3$ and $y^3$, and their difference is $x^3 - y^3$.",
                "reason": "Writing a sentence as an equation: \"the cubes of\" raises each number to the power 3, and \"the difference of\" takes the second from the first of the two cubes."
              },
              {
                "step": "The difference of $x$ and $y$ is $x - y$, and 7 times it is $7(x - y)$.",
                "reason": "Writing a sentence as an equation: \"7 times\" multiplies the whole difference, kept in a bracket, by 7."
              },
              {
                "step": "$x^3 - y^3 = 7(x - y)$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum of the cubes on the left and nothing multiplied out: Multiplying the sum of $x$ and $y$ by 14 gives the sum of their cubes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^3+y^3 = 14*(x+y)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the cubes on the left and nothing multiplied out: Multiplying the sum of $x$ and $y$ by 14 gives the sum of their cubes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cubes of $x$ and $y$ are $x^3$ and $y^3$, and their sum is $x^3 + y^3$.",
                  "reason": "Writing a sentence as an equation: \"their cubes\" raises each number to the power 3, and \"the sum of\" adds the two cubes."
                },
                {
                  "step": "The sum of $x$ and $y$ is $x + y$, and 14 times it is $14(x + y)$.",
                  "reason": "Writing a sentence as an equation: \"multiplying by 14\" multiplies the whole sum, kept in a bracket, by 14."
                },
                {
                  "step": "$x^3 + y^3 = 14(x + y)$",
                  "reason": "Writing a sentence as an equation: the word \"gives\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the difference of the cubes on the left and nothing multiplied out: Taking the difference of the cubes of $x$ and $y$ gives 9 times the difference of $x$ and $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^3-y^3 = 9*(x-y)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the difference of the cubes on the left and nothing multiplied out: Taking the difference of the cubes of $x$ and $y$ gives 9 times the difference of $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cubes of $x$ and $y$ are $x^3$ and $y^3$, and their difference is $x^3 - y^3$.",
                  "reason": "Writing a sentence as an equation: \"the cubes of\" raises each number to the power 3, and \"the difference of\" takes the second from the first of the two cubes."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and 9 times it is $9(x - y)$.",
                  "reason": "Writing a sentence as an equation: \"9 times\" multiplies the whole difference, kept in a bracket, by 9."
                },
                {
                  "step": "$x^3 - y^3 = 9(x - y)$",
                  "reason": "Writing a sentence as an equation: the word \"gives\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum of the cubes on the left and nothing multiplied out: The sum of the cubes of $x$ and $y$ is the same as 6 times the sum of $x$ and $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^3+y^3 = 6*(x+y)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the cubes on the left and nothing multiplied out: The sum of the cubes of $x$ and $y$ is the same as 6 times the sum of $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cubes of $x$ and $y$ are $x^3$ and $y^3$, and their sum is $x^3 + y^3$.",
                  "reason": "Writing a sentence as an equation: \"the cubes of\" raises each number to the power 3, and \"the sum of\" adds the two cubes."
                },
                {
                  "step": "The sum of $x$ and $y$ is $x + y$, and 6 times it is $6(x + y)$.",
                  "reason": "Writing a sentence as an equation: \"6 times\" multiplies the whole sum, kept in a bracket, by 6."
                },
                {
                  "step": "$x^3 + y^3 = 6(x + y)$",
                  "reason": "Writing a sentence as an equation: the words \"is the same as\" mark the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with the cube of the sum on the left and nothing multiplied out: The cube of the sum of $x$ and $y$ is 25 more than the sum of their cubes.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the cube of the sum on the left and nothing multiplied out: The cube of the sum of $x$ and $y$ is 25 more than the sum of their cubes.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of $x$ and $y$ is $x + y$, and its cube is $(x + y)^3$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers, and \"the cube of\" raises the whole sum, kept in a bracket, to the power 3."
              },
              {
                "step": "The sum of their cubes is $x^3 + y^3$.",
                "reason": "Writing a sentence as an equation: \"their cubes\" raises each number to the power 3, and \"the sum of\" acts on the two cubes."
              },
              {
                "step": "Adding 25 to that gives $x^3 + y^3 + 25$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds 25 to the sum of the cubes."
              },
              {
                "step": "$(x + y)^3 = x^3 + y^3 + 25$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the cube of the difference on the left and nothing multiplied out: The cube of the difference of $x$ and $y$ falls 30 short of the difference of their cubes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-y)^3 = x^3-y^3-30",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the cube of the difference on the left and nothing multiplied out: The cube of the difference of $x$ and $y$ falls 30 short of the difference of their cubes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and its cube is $(x - y)^3$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" takes the second number from the first, and \"the cube of\" raises the whole difference, kept in a bracket, to the power 3."
                },
                {
                  "step": "The difference of their cubes is $x^3 - y^3$.",
                  "reason": "Writing a sentence as an equation: \"their cubes\" raises each number to the power 3, and \"the difference of\" acts on the two cubes."
                },
                {
                  "step": "Taking 30 from that gives $x^3 - y^3 - 30$.",
                  "reason": "Writing a sentence as an equation: \"falls 30 short of\" takes 30 from the difference of the cubes."
                },
                {
                  "step": "$(x - y)^3 = x^3 - y^3 - 30$",
                  "reason": "Writing a sentence as an equation: the words \"falls short of\" mark the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the cube of the sum on the left and nothing multiplied out: The cube of the sum of $x$ and $y$ exceeds the sum of their cubes by 45.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+y)^3 = x^3+y^3+45",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the cube of the sum on the left and nothing multiplied out: The cube of the sum of $x$ and $y$ exceeds the sum of their cubes by 45.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and $y$ is $x + y$, and its cube is $(x + y)^3$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers, and \"the cube of\" raises the whole sum, kept in a bracket, to the power 3."
                },
                {
                  "step": "The sum of their cubes is $x^3 + y^3$.",
                  "reason": "Writing a sentence as an equation: \"their cubes\" raises each number to the power 3, and \"the sum of\" acts on the two cubes."
                },
                {
                  "step": "Adding 45 to that gives $x^3 + y^3 + 45$.",
                  "reason": "Writing a sentence as an equation: \"exceeds … by 45\" adds 45 to the sum of the cubes."
                },
                {
                  "step": "$(x + y)^3 = x^3 + y^3 + 45$",
                  "reason": "Writing a sentence as an equation: the word \"exceeds\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the cube of the difference on the left and nothing multiplied out: The cube of the difference of $x$ and $y$ is what you get by adding 62 to the difference of their cubes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-y)^3 = x^3-y^3+62",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the cube of the difference on the left and nothing multiplied out: The cube of the difference of $x$ and $y$ is what you get by adding 62 to the difference of their cubes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and its cube is $(x - y)^3$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" takes the second number from the first, and \"the cube of\" raises the whole difference, kept in a bracket, to the power 3."
                },
                {
                  "step": "The difference of their cubes is $x^3 - y^3$.",
                  "reason": "Writing a sentence as an equation: \"their cubes\" raises each number to the power 3, and \"the difference of\" acts on the two cubes."
                },
                {
                  "step": "Adding 62 to that gives $x^3 - y^3 + 62$.",
                  "reason": "Writing a sentence as an equation: \"adding 62 to\" adds 62 to the difference of the cubes."
                },
                {
                  "step": "$(x - y)^3 = x^3 - y^3 + 62$",
                  "reason": "Writing a sentence as an equation: the words \"is what you get by\" mark the place of the equals sign."
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
      "id": "t139-p1",
      "method": "direct proof",
      "statement": "For all numbers $x$ and $y$, $x^3 - y^3 = (x - y)(x^2 + xy + y^2)$.",
      "idea": "Multiply out the right side. Each of $x$ and $-y$ multiplies the three terms of the second bracket, and the four middle terms cancel in pairs, leaving $x^3 - y^3$.",
      "lines": [
        {
          "line": "The product $(x - y)(x^2 + xy + y^2)$ equals $x(x^2 + xy + y^2) - y(x^2 + xy + y^2)$.",
          "reason": "The distributive law: each term of the first bracket multiplies the second bracket."
        },
        {
          "line": "The product $x(x^2 + xy + y^2)$ equals $x^3 + x^2y + xy^2$.",
          "reason": "The distributive law, with the product law $x \\cdot x^2 = x^3$."
        },
        {
          "line": "The product $y(x^2 + xy + y^2)$ equals $x^2y + xy^2 + y^3$.",
          "reason": "The distributive law, with the product law $y \\cdot y^2 = y^3$ and the commutative law of multiplication."
        },
        {
          "line": "So $(x - y)(x^2 + xy + y^2) = x^3 + x^2y + xy^2 - (x^2y + xy^2 + y^3)$.",
          "reason": "Line 1, with each product replaced by the expression equal to it in lines 2 and 3."
        },
        {
          "line": "The expression $x^3 + x^2y + xy^2 - (x^2y + xy^2 + y^3)$ equals $x^3 + x^2y + xy^2 - x^2y - xy^2 - y^3$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "The sum $x^3 + x^2y + xy^2 - x^2y - xy^2 - y^3$ equals $x^3 - y^3$.",
          "reason": "Collecting like terms: $x^2y - x^2y = 0$ and $xy^2 - xy^2 = 0$."
        },
        {
          "line": "Therefore $x^3 - y^3 = (x - y)(x^2 + xy + y^2)$.",
          "reason": "Lines 4 to 6, read with the symmetric property."
        }
      ]
    },
    {
      "id": "t139-p2",
      "method": "direct proof",
      "statement": "For all numbers $x$ and $y$, $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$.",
      "idea": "Put $-y$ in place of $y$ in the difference of cubes: the cube of $-y$ is $-y^3$, so the difference turns into a sum, and the brackets change sign where $y$ appears to an odd power.",
      "lines": [
        {
          "line": "For all numbers $x$ and $y$, $x^3 - (-y)^3 = \\left(x - (-y)\\right)\\left(x^2 + x(-y) + (-y)^2\\right)$.",
          "reason": "Difference of cubes, with $-y$ in place of $y$."
        },
        {
          "line": "The cube $(-y)^3$ equals $-y^3$.",
          "reason": "Sign of a power of a negative number: an odd power keeps the minus sign."
        },
        {
          "line": "The difference $x^3 - (-y^3)$ equals $x^3 + y^3$.",
          "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
        },
        {
          "line": "The difference $x - (-y)$ equals $x + y$.",
          "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
        },
        {
          "line": "The product $x(-y)$ equals $-xy$.",
          "reason": "Signs of products, from arithmetic: a positive times a negative is negative."
        },
        {
          "line": "The square $(-y)^2$ equals $y^2$.",
          "reason": "Sign of a power of a negative number: an even power is positive."
        },
        {
          "line": "Therefore $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$.",
          "reason": "Line 1, with each piece replaced by the expression equal to it in lines 2 to 6."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t139-s1",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$ and $b$, $a^6 - b^6 = (a - b)(a^2 + ab + b^2)(a + b)(a^2 - ab + b^2)$. Facts it may use: power law, difference of squares, difference of cubes, sum of cubes.",
      "check": {
        "proof": [
          {
            "line": "The power $a^6$ equals $(a^3)^2$, and $b^6$ equals $(b^3)^2$.",
            "reason": "Power law: $(a^3)^2 = a^{3 \\cdot 2} = a^6$."
          },
          {
            "line": "So $a^6 - b^6 = (a^3 - b^3)(a^3 + b^3)$.",
            "reason": "Difference of squares, with $a^3$ and $b^3$ as the two numbers squared."
          },
          {
            "line": "The difference $a^3 - b^3$ equals $(a - b)(a^2 + ab + b^2)$.",
            "reason": "Difference of cubes."
          },
          {
            "line": "The sum $a^3 + b^3$ equals $(a + b)(a^2 - ab + b^2)$.",
            "reason": "Sum of cubes."
          },
          {
            "line": "Therefore $a^6 - b^6 = (a - b)(a^2 + ab + b^2)(a + b)(a^2 - ab + b^2)$.",
            "reason": "Line 2, with each bracket replaced by the product equal to it in lines 3 and 4."
          }
        ]
      }
    },
    {
      "id": "t139-s2",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$ and $b$, $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$. Facts it may use: square of a binomial, collecting like terms, sum of cubes, the distributive law, the commutative law of multiplication, product law.",
      "check": {
        "proof": [
          {
            "line": "The square $(a + b)^2$ equals $a^2 + 2ab + b^2$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "So $(a + b)^2 - 3ab = a^2 + 2ab + b^2 - 3ab$.",
            "reason": "Line 1, with $3ab$ taken from both sides."
          },
          {
            "line": "The expression $a^2 + 2ab + b^2 - 3ab$ equals $a^2 - ab + b^2$.",
            "reason": "Collecting like terms: $2ab - 3ab = -ab$."
          },
          {
            "line": "The sum $a^3 + b^3$ equals $(a + b)(a^2 - ab + b^2)$.",
            "reason": "Sum of cubes."
          },
          {
            "line": "So $a^3 + b^3 = (a + b)\\left((a + b)^2 - 3ab\\right)$.",
            "reason": "Line 4, with the second bracket replaced by the expression equal to it in lines 2 and 3."
          },
          {
            "line": "$(a + b)\\left((a + b)^2 - 3ab\\right) = (a + b)(a + b)^2 - (a + b) \\cdot 3ab$",
            "reason": "The distributive law, from arithmetic."
          },
          {
            "line": "$(a + b) \\cdot 3ab = 3ab(a + b)$",
            "reason": "The commutative law of multiplication."
          },
          {
            "line": "The product $(a + b)(a + b)^2$ equals $(a + b)^3$.",
            "reason": "Product law: $(a + b)^1(a + b)^2 = (a + b)^{1 + 2}$."
          },
          {
            "line": "Therefore $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$.",
            "reason": "Line 5, with the product replaced by the expression equal to it in lines 6 to 8."
          }
        ]
      }
    }
  ]
}
