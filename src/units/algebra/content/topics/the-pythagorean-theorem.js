export default {
  "number": 245,
  "title": "The Pythagorean theorem",
  "section": 5,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "213"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $5$ and $15$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "5*sqrt(10)",
    "solution": [
      "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $5$ and $15$.",
      "$x^2 = 5^2 + 15^2$",
      "$x^2 = 250$",
      "$x = \\sqrt{250}$",
      "$x = 5\\sqrt{10}$"
    ]
  },
  "ideas": [
    {
      "name": "Pythagorean theorem",
      "concrete": "A right triangle with legs $5$ and $12$ has a hypotenuse whose square is $5^2 + 12^2 = 25 + 144 = 169$, and the hypotenuse is the positive number with that square, $13$.",
      "general": "A **right triangle** is a triangle with two sides that meet at a right angle. Those two sides are its **legs**, and the side opposite the right angle is its **hypotenuse**. For every right triangle with legs of lengths $a$ and $b$ and hypotenuse of length $c$, the **Pythagorean theorem** states $a^2 + b^2 = c^2$."
    }
  ],
  "kinds": [
    {
      "id": "t245-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $2$ and $4$.",
            "lines": [
              {
                "step": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $2$ and $4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 = 2^2 + 4^2$",
                "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
              },
              {
                "step": "$x^2 = 20$",
                "reason": "A power with a whole exponent is a repeated product, which is worked out, and the two squares are added."
              },
              {
                "step": "$x = \\sqrt{20}$",
                "reason": "A length is positive, so it is the positive square root of its square."
              },
              {
                "step": "$x = 2\\sqrt{5}$",
                "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $4$ out of the root as $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $4$ and $6$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(13)",
              "lines": [
                {
                  "step": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $4$ and $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 = 4^2 + 6^2$",
                  "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
                },
                {
                  "step": "$x^2 = 52$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out, and the two squares are added."
                },
                {
                  "step": "$x = \\sqrt{52}$",
                  "reason": "A length is positive, so it is the positive square root of its square."
                },
                {
                  "step": "$x = 2\\sqrt{13}$",
                  "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $4$ out of the root as $2$."
                }
              ]
            },
            {
              "prompt": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $6$ and $10$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(34)",
              "lines": [
                {
                  "step": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $6$ and $10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 = 6^2 + 10^2$",
                  "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
                },
                {
                  "step": "$x^2 = 136$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out, and the two squares are added."
                },
                {
                  "step": "$x = \\sqrt{136}$",
                  "reason": "A length is positive, so it is the positive square root of its square."
                },
                {
                  "step": "$x = 2\\sqrt{34}$",
                  "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $4$ out of the root as $2$."
                }
              ]
            },
            {
              "prompt": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $4$ and $14$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(53)",
              "lines": [
                {
                  "step": "Find the length $x$ of the hypotenuse of a right triangle whose legs have lengths $4$ and $14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 = 4^2 + 14^2$",
                  "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
                },
                {
                  "step": "$x^2 = 212$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out, and the two squares are added."
                },
                {
                  "step": "$x = \\sqrt{212}$",
                  "reason": "A length is positive, so it is the positive square root of its square."
                },
                {
                  "step": "$x = 2\\sqrt{53}$",
                  "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $4$ out of the root as $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $9$ and whose other leg has length $5$.",
            "lines": [
              {
                "step": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $9$ and whose other leg has length $5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 5^2 = 9^2$",
                "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
              },
              {
                "step": "$x^2 + 25 = 81$",
                "reason": "A power with a whole exponent is a repeated product, which is worked out."
              },
              {
                "step": "$x^2 = 56$",
                "reason": "Adding the same number to both sides: adding $-25$ to both sides keeps them equal and leaves $x^2$ alone."
              },
              {
                "step": "$x = \\sqrt{56}$",
                "reason": "A length is positive, so it is the positive square root of its square."
              },
              {
                "step": "$x = 2\\sqrt{14}$",
                "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $4$ out of the root as $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $6$ and whose other leg has length $2$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(2)",
              "lines": [
                {
                  "step": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $6$ and whose other leg has length $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 2^2 = 6^2$",
                  "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
                },
                {
                  "step": "$x^2 + 4 = 36$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                },
                {
                  "step": "$x^2 = 32$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides keeps them equal and leaves $x^2$ alone."
                },
                {
                  "step": "$x = \\sqrt{32}$",
                  "reason": "A length is positive, so it is the positive square root of its square."
                },
                {
                  "step": "$x = 4\\sqrt{2}$",
                  "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $16$ out of the root as $4$."
                }
              ]
            },
            {
              "prompt": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $8$ and whose other leg has length $4$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(3)",
              "lines": [
                {
                  "step": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $8$ and whose other leg has length $4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 4^2 = 8^2$",
                  "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
                },
                {
                  "step": "$x^2 + 16 = 64$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                },
                {
                  "step": "$x^2 = 48$",
                  "reason": "Adding the same number to both sides: adding $-16$ to both sides keeps them equal and leaves $x^2$ alone."
                },
                {
                  "step": "$x = \\sqrt{48}$",
                  "reason": "A length is positive, so it is the positive square root of its square."
                },
                {
                  "step": "$x = 4\\sqrt{3}$",
                  "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $16$ out of the root as $4$."
                }
              ]
            },
            {
              "prompt": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $12$ and whose other leg has length $8$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(5)",
              "lines": [
                {
                  "step": "Find the length $x$ of a leg of a right triangle whose hypotenuse has length $12$ and whose other leg has length $8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 8^2 = 12^2$",
                  "reason": "Pythagorean theorem: in a right triangle the square of the hypotenuse is the sum of the squares of the two legs."
                },
                {
                  "step": "$x^2 + 64 = 144$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                },
                {
                  "step": "$x^2 = 80$",
                  "reason": "Adding the same number to both sides: adding $-64$ to both sides keeps them equal and leaves $x^2$ alone."
                },
                {
                  "step": "$x = \\sqrt{80}$",
                  "reason": "A length is positive, so it is the positive square root of its square."
                },
                {
                  "step": "$x = 4\\sqrt{5}$",
                  "reason": "Simplest radical form: the root of a product is the product of the roots, which takes the square factor $16$ out of the root as $4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t245-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $3$ and $7$, and write that line right.",
            "given": [
              "$x^2 = 3^2 + 7^2$",
              "$x = 3 + 7$",
              "$x = 10$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $3$ and $7$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 is the first wrong line: the root of the sum $3^2 + 7^2$ is taken as the sum of the roots, $3 + 7$.",
                "reason": "Pythagorean theorem: the sum of the squares is worked out first, and only then is its positive square root taken; $10^2$ is not $3^2 + 7^2$."
              },
              {
                "step": "Line 2 written right is $x = \\sqrt{3^2 + 7^2}$.",
                "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $5$ and $7$, and write that line right.",
              "given": [
                "$x^2 = 5^2 + 7^2$",
                "$x = \\sqrt{5^2 + 7^2}$",
                "$x = 5 + 7$",
                "$x = 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x = sqrt(74)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $5$ and $7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 is the first wrong line: the root over the sum is taken from each square on its own, as if $\\sqrt{5^2 + 7^2}$ were $5 + 7$.",
                  "reason": "Pythagorean theorem: the sum of the squares is worked out first, and only then is its positive square root taken; $12^2$ is not $5^2 + 7^2$."
                },
                {
                  "step": "Line 3 written right is $x = \\sqrt{74}$.",
                  "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $2$ and $8$, and write that line right.",
              "given": [
                "$x^2 = 2^2 + 8^2$",
                "$x = \\sqrt{2^2 + 8^2}$",
                "$x = 2 + 8$",
                "$x = 10$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x = sqrt(68)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $2$ and $8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 is the first wrong line: the root over the sum is taken from each square on its own, as if $\\sqrt{2^2 + 8^2}$ were $2 + 8$.",
                  "reason": "Pythagorean theorem: the sum of the squares is worked out first, and only then is its positive square root taken; $10^2$ is not $2^2 + 8^2$."
                },
                {
                  "step": "Line 3 written right is $x = \\sqrt{68}$.",
                  "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $4$ and $9$, and write that line right.",
              "given": [
                "$x^2 = 4^2 + 9^2$",
                "$x = 4 + 9$",
                "$x = 13$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x = sqrt(4^2+9^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution for the hypotenuse $x$ of a right triangle with legs $4$ and $9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 is the first wrong line: the root of the sum $4^2 + 9^2$ is taken as the sum of the roots, $4 + 9$.",
                  "reason": "Pythagorean theorem: the sum of the squares is worked out first, and only then is its positive square root taken; $13^2$ is not $4^2 + 9^2$."
                },
                {
                  "step": "Line 2 written right is $x = \\sqrt{4^2 + 9^2}$.",
                  "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $11$ and other leg $6$, and write that line right.",
            "given": [
              "$x^2 + 6^2 = 11^2$",
              "$x^2 + 36 = 121$",
              "$x^2 = 121 + 36$",
              "$x^2 = 157$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $11$ and other leg $6$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 is the first wrong line: a sign is lost, as $36$ moves to the right side and keeps its plus sign.",
                "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
              },
              {
                "step": "Line 3 written right is $x^2 = 121 - 36$.",
                "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $9$ and other leg $4$, and write that line right.",
              "given": [
                "$x^2 + 4^2 = 9^2$",
                "$x^2 = 9^2 + 4^2$",
                "$x^2 = 97$",
                "$x = \\sqrt{97}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2 = 9^2-4^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $9$ and other leg $4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 is the first wrong line: a sign is lost, as $4^2$ moves to the right side and keeps its plus sign.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $x^2 = 9^2 - 4^2$.",
                  "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $10$ and other leg $7$, and write that line right.",
              "given": [
                "$x^2 + 7^2 = 10^2$",
                "$x^2 + 49 = 100$",
                "$x^2 = 100 + 49$",
                "$x^2 = 149$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2 = 100-49",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $10$ and other leg $7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 is the first wrong line: a sign is lost, as $49$ moves to the right side and keeps its plus sign.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 3 written right is $x^2 = 100 - 49$.",
                  "reason": "Each line before line 3 is right, and line 3 written right follows from line 2."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $13$ and other leg $6$, and write that line right.",
              "given": [
                "$x^2 + 6^2 = 13^2$",
                "$x^2 = 13^2 + 6^2$",
                "$x^2 = 205$",
                "$x = \\sqrt{205}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2 = 13^2-6^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution for the leg $x$ of a right triangle with hypotenuse $13$ and other leg $6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 is the first wrong line: a sign is lost, as $6^2$ moves to the right side and keeps its plus sign.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $x^2 = 13^2 - 6^2$.",
                  "reason": "Each line before line 2 is right, and line 2 written right follows from line 1."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t245-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the sum of the squares of the legs on the left: a right triangle has legs of lengths $x$ and $3$ more than $x$ and a hypotenuse of length $15$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the sum of the squares of the legs on the left: a right triangle has legs of lengths $x$ and $3$ more than $x$ and a hypotenuse of length $15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The legs are $x$ and $x + 3$, and the hypotenuse is $15$.",
                "reason": "Writing a sentence as an equation: the phrase \"$3$ more than $x$\" is $x + 3$; the side opposite the right angle is the hypotenuse, and the two sides that meet at the right angle are the legs."
              },
              {
                "step": "The sum of the squares of the legs is $x^2 + (x + 3)^2$.",
                "reason": "Pythagorean theorem: the squares of the two legs are added on one side."
              },
              {
                "step": "$x^2 + (x + 3)^2 = 15^2$",
                "reason": "Writing a sentence as an equation: the square of the hypotenuse stands on the other side of the equals sign, as the Pythagorean theorem states."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the squares of the legs on the left: a right triangle has legs of lengths $x$ and $4$ more than $x$ and a hypotenuse of length $20$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+(x+4)^2 = 20^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the squares of the legs on the left: a right triangle has legs of lengths $x$ and $4$ more than $x$ and a hypotenuse of length $20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The legs are $x$ and $x + 4$, and the hypotenuse is $20$.",
                  "reason": "Writing a sentence as an equation: the length $4$ more than $x$ is $x + 4$; the side opposite the right angle is the hypotenuse, and the two sides that meet at the right angle are the legs."
                },
                {
                  "step": "The sum of the squares of the legs is $x^2 + (x + 4)^2$.",
                  "reason": "Pythagorean theorem: the squares of the two legs are added on one side."
                },
                {
                  "step": "$x^2 + (x + 4)^2 = 20^2$",
                  "reason": "Writing a sentence as an equation: the square of the hypotenuse stands on the other side of the equals sign, as the Pythagorean theorem states."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $y$, with the sum of the squares of the legs on the left: the hypotenuse of a right triangle has length $y$, and its legs have lengths $9$ and $3$ less than $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "9^2+(y-3)^2 = y^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$, with the sum of the squares of the legs on the left: the hypotenuse of a right triangle has length $y$, and its legs have lengths $9$ and $3$ less than $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The legs are $9$ and $y - 3$, and the hypotenuse is $y$.",
                  "reason": "Writing a sentence as an equation: the length $3$ less than $y$ is $y - 3$; the side opposite the right angle is the hypotenuse, and the two sides that meet at the right angle are the legs."
                },
                {
                  "step": "The sum of the squares of the legs is $9^2 + (y - 3)^2$.",
                  "reason": "Pythagorean theorem: the squares of the two legs are added on one side."
                },
                {
                  "step": "$9^2 + (y - 3)^2 = y^2$",
                  "reason": "Writing a sentence as an equation: the square of the hypotenuse stands on the other side of the equals sign, as the Pythagorean theorem states."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum of the squares of the legs on the left: one leg of a right triangle is twice the other leg $x$, and the hypotenuse has length $10$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+(2*x)^2 = 10^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum of the squares of the legs on the left: one leg of a right triangle is twice the other leg $x$, and the hypotenuse has length $10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The legs are $x$ and $2x$, and the hypotenuse is $10$.",
                  "reason": "Writing a sentence as an equation: twice $x$ is $2x$; the side opposite the right angle is the hypotenuse, and the two sides that meet at the right angle are the legs."
                },
                {
                  "step": "The sum of the squares of the legs is $x^2 + (2x)^2$.",
                  "reason": "Pythagorean theorem: the squares of the two legs are added on one side."
                },
                {
                  "step": "$x^2 + (2x)^2 = 10^2$",
                  "reason": "Writing a sentence as an equation: the square of the hypotenuse stands on the other side of the equals sign, as the Pythagorean theorem states."
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
      "id": "t245-p1",
      "method": "direct proof",
      "statement": "Let a right triangle have legs of lengths $a$ and $b$ and a hypotenuse of length $c$. Then $a^2 + b^2 = c^2$.",
      "idea": "Four copies of the triangle fill the corners of a square of side $a + b$ and leave a square of side $c$ in the middle. The big square's area, counted once as a whole and once as its five pieces, gives the equation.",
      "lines": [
        {
          "line": "Four copies of the triangle are set in a square of side $a + b$, one in each corner, with the right angle at the corner and the legs $a$ and $b$ along the two sides that meet there.",
          "reason": "Each side of the square is a leg $a$ followed by a leg $b$ of the next copy, so the four copies fit along the four sides."
        },
        {
          "line": "The four hypotenuses bound a figure in the middle with four sides, each of length $c$.",
          "reason": "Each side of the middle figure is the hypotenuse of one copy."
        },
        {
          "line": "At each corner of the middle figure, one angle of the middle figure and two angles of two copies lie along one side of the square, so the three add to $180^\\circ$.",
          "reason": "Angles on a straight line add to $180^\\circ$."
        },
        {
          "line": "At that point one copy's angle between $a$ and $c$ meets the next copy's angle between $b$ and $c$, the two angles of the triangle other than the right angle.",
          "reason": "The first line: leg $a$ of one copy runs into leg $b$ of the next."
        },
        {
          "line": "These two angles add to $90^\\circ$.",
          "reason": "Angles of a triangle add to $180^\\circ$, and the right angle takes $90^\\circ$ of it."
        },
        {
          "line": "Each angle of the middle figure is $90^\\circ$.",
          "reason": "The third and fifth lines: $180^\\circ - 90^\\circ = 90^\\circ$."
        },
        {
          "line": "The middle figure is a square of side $c$.",
          "reason": "Square: a figure with four equal sides and four right angles, with the second line."
        },
        {
          "line": "The area of the big square is $(a + b)^2$.",
          "reason": "Area of a square is the square of its side."
        },
        {
          "line": "Each copy has area $\\dfrac{ab}{2}$.",
          "reason": "Area of a right triangle is half the product of its legs."
        },
        {
          "line": "The area of the big square is also $4 \\cdot \\dfrac{ab}{2} + c^2$.",
          "reason": "Area of a whole is the sum of the areas of its pieces, with Area of a square is the square of its side for the middle square."
        },
        {
          "line": "So $(a + b)^2 = 4 \\cdot \\dfrac{ab}{2} + c^2$.",
          "reason": "The eighth and tenth lines give two expressions for one area."
        },
        {
          "line": "The product $4 \\cdot \\dfrac{ab}{2}$ equals $2ab$.",
          "reason": "Cancelling a common factor: $4$ and $2$ share the factor $2$."
        },
        {
          "line": "The square $(a + b)^2$ equals $(a + b)(a + b)$.",
          "reason": "A power with a whole exponent is a repeated product."
        },
        {
          "line": "The product $(a + b)(a + b)$ equals $a^2 + ab + ba + b^2$.",
          "reason": "Multiplying out: each term of the first bracket multiplies each term of the second."
        },
        {
          "line": "The sum $a^2 + ab + ba + b^2$ equals $a^2 + 2ab + b^2$.",
          "reason": "Collecting like terms: $ab$ and $ba$ are like terms, by the commutative law of multiplication."
        },
        {
          "line": "So $(a + b)^2 = 2ab + c^2$.",
          "reason": "The eleventh line, with $4 \\cdot \\dfrac{ab}{2}$ replaced by the expression equal to it in the twelfth line."
        },
        {
          "line": "So $a^2 + 2ab + b^2 = 2ab + c^2$.",
          "reason": "The sixteenth line, with $(a + b)^2$ replaced by the expression equal to it in the thirteenth to fifteenth lines."
        },
        {
          "line": "Therefore $a^2 + b^2 = c^2$.",
          "reason": "Adding the same number to both sides: adding $-2ab$ to both sides keeps them equal."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t245-s1",
      "method": "direct proof",
      "statement": "Let a right triangle have legs of lengths $a$ and $b$ and a hypotenuse of length $c$. Then $c > a$.",
      "check": {
        "proof": [
          {
            "line": "The lengths satisfy $a^2 + b^2 = c^2$.",
            "reason": "Pythagorean theorem."
          },
          {
            "line": "So $c^2 - a^2 = b^2$.",
            "reason": "Adding the same number to both sides: adding $-a^2$ to both sides keeps them equal."
          },
          {
            "line": "The length $b$ is positive.",
            "reason": "A length is positive."
          },
          {
            "line": "The square $b^2$ equals $b \\cdot b$.",
            "reason": "A power with a whole exponent is a repeated product."
          },
          {
            "line": "So $b^2$ is positive.",
            "reason": "The product of two positive numbers is positive."
          },
          {
            "line": "So $c^2 - a^2$ is positive.",
            "reason": "The second and fifth lines: $c^2 - a^2$ equals $b^2$, which is positive."
          },
          {
            "line": "The product $(c - a)(c + a)$ equals $c^2 + ca - ac - a^2$.",
            "reason": "Multiplying out: each term of the first bracket multiplies each term of the second."
          },
          {
            "line": "The sum $c^2 + ca - ac - a^2$ equals $c^2 - a^2$.",
            "reason": "Collecting like terms: $ca$ and $-ac$ are like terms whose sum is $0$."
          },
          {
            "line": "So $(c - a)(c + a)$ is positive.",
            "reason": "The sixth line, with $c^2 - a^2$ replaced by the product equal to it in the seventh and eighth lines."
          },
          {
            "line": "The sum $c + a$ is positive.",
            "reason": "A length is positive, so $a$ and $c$ are positive, and the sum of two positive numbers is positive."
          },
          {
            "line": "So $c - a$ is positive.",
            "reason": "Multiplying both sides of an inequality by a positive number keeps its direction: $(c - a)(c + a) > 0$ times $\\dfrac{1}{c + a}$, which is positive by the tenth line."
          },
          {
            "line": "Therefore $c > a$.",
            "reason": "Adding the same number to both sides of an inequality keeps its direction: adding $a$ to both sides of $c - a > 0$."
          }
        ]
      }
    }
  ]
}
