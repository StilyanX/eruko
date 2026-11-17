export default {
  "number": 146,
  "title": "The quadratic formula and the discriminant",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "385-397"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $2x^2 + 10x - 2 = 0$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = (-5+sqrt(29))/2, x = (-5-sqrt(29))/2",
    "solution": [
      "Solve $2x^2 + 10x - 2 = 0$.",
      "$a = 2$, $b = 10$, $c = -2$",
      "$b^2 - 4ac = 10^2 - 4 \\cdot 2 \\cdot (-2) = 116$",
      "$x = \\dfrac{-10 \\pm \\sqrt{116}}{4}$",
      "$\\sqrt{116} = \\sqrt{4}\\sqrt{29} = 2\\sqrt{29}$",
      "So $x = \\dfrac{-5 + \\sqrt{29}}{2}$ or $x = \\dfrac{-5 - \\sqrt{29}}{2}$."
    ]
  },
  "ideas": [
    {
      "name": "The quadratic formula",
      "concrete": "In $4x^2 + 8x - 9 = 0$ the coefficients are $a = 4$, $b = 8$ and $c = -9$, so $b^2 - 4ac = 208$ and $x = \\dfrac{-8 \\pm \\sqrt{208}}{8}$, so $x = \\dfrac{-2 + \\sqrt{13}}{2}$ or $x = \\dfrac{-2 - \\sqrt{13}}{2}$.",
      "general": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, the solutions of $ax^2 + bx + c = 0$ are $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$: this is the **quadratic formula**. It holds for complex coefficients too, whenever $b^2 - 4ac$ is a real number. Counted with a double root twice, every quadratic has two roots."
    },
    {
      "name": "The discriminant",
      "concrete": "For $3x^2 - 4x - 9$ the number $b^2 - 4ac$ is $124$, positive, and there are two different real roots; for $49x^2 - 210x + 225$ it is $0$, and there is a double root; for $5x^2 - 8x + 8$ it is $-96$, negative, and neither root is real.",
      "general": "The **discriminant** of $ax^2 + bx + c$ is $b^2 - 4ac$. For real $a$, $b$, $c$ with $a \\ne 0$: a positive discriminant gives two different real roots, a zero discriminant gives a double root $-\\dfrac{b}{2a}$, and a negative discriminant gives two roots that are not real. For rational $a$, $b$, $c$ the roots are rational exactly when the discriminant is the square of a rational number."
    },
    {
      "name": "Conjugate roots",
      "concrete": "The equation $x^2 + 8x + 41 = 0$ has the root $-4 + 5i$, and its other root is the conjugate $-4 - 5i$: their sum is $-8$ and their product is $41$.",
      "general": "When $a$, $b$, $c$ are real and $r + si$ with $s \\ne 0$ is a root of $ax^2 + bx + c = 0$, the other root is $r - si$: **non-real roots of a real quadratic are conjugates**. When $a$, $b$, $c$ are rational, $p$ and $q$ rational with $q \\ne 0$ and $\\sqrt{r}$ irrational, and $p + q\\sqrt{r}$ is a root, the other root is $p - q\\sqrt{r}$: **surd roots of a rational quadratic are conjugate surds**."
    }
  ],
  "kinds": [
    {
      "id": "t146-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $6x^2 + 2x - 9 = 0$.",
            "lines": [
              {
                "step": "Solve $6x^2 + 2x - 9 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a = 6$, $b = 2$, $c = -9$",
                "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
              },
              {
                "step": "$b^2 - 4ac = 2^2 - 4 \\cdot 6 \\cdot (-9) = 220$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "$x = \\dfrac{-2 \\pm \\sqrt{220}}{12}$",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -2$ and $2a = 12$."
              },
              {
                "step": "$\\sqrt{220} = \\sqrt{4}\\sqrt{55} = 2\\sqrt{55}$",
                "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
              },
              {
                "step": "So $x = \\dfrac{-1 + \\sqrt{55}}{6}$ or $x = \\dfrac{-1 - \\sqrt{55}}{6}$.",
                "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $y^2 - 14y + 2 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 7+sqrt(47), y = 7-sqrt(47)",
              "lines": [
                {
                  "step": "Solve $y^2 - 14y + 2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 1$, $b = -14$, $c = 2$",
                  "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-14)^2 - 4 \\cdot 1 \\cdot 2 = 188$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$y = \\dfrac{14 \\pm \\sqrt{188}}{2}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 14$ and $2a = 2$."
                },
                {
                  "step": "$\\sqrt{188} = \\sqrt{4}\\sqrt{47} = 2\\sqrt{47}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $y = 7 + \\sqrt{47}$ or $y = 7 - \\sqrt{47}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $2z^2 - 14z + 5 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = (7+sqrt(39))/2, z = (7-sqrt(39))/2",
              "lines": [
                {
                  "step": "Solve $2z^2 - 14z + 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 2$, $b = -14$, $c = 5$",
                  "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-14)^2 - 4 \\cdot 2 \\cdot 5 = 156$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$z = \\dfrac{14 \\pm \\sqrt{156}}{4}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 14$ and $2a = 4$."
                },
                {
                  "step": "$\\sqrt{156} = \\sqrt{4}\\sqrt{39} = 2\\sqrt{39}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $z = \\dfrac{7 + \\sqrt{39}}{2}$ or $z = \\dfrac{7 - \\sqrt{39}}{2}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $3x^2 - 6x - 4 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (3+sqrt(21))/3, x = (3-sqrt(21))/3",
              "lines": [
                {
                  "step": "Solve $3x^2 - 6x - 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 3$, $b = -6$, $c = -4$",
                  "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-6)^2 - 4 \\cdot 3 \\cdot (-4) = 84$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{6 \\pm \\sqrt{84}}{6}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 6$ and $2a = 6$."
                },
                {
                  "step": "$\\sqrt{84} = \\sqrt{4}\\sqrt{21} = 2\\sqrt{21}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $x = \\dfrac{3 + \\sqrt{21}}{3}$ or $x = \\dfrac{3 - \\sqrt{21}}{3}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex solution of $y^2 - 2y + 18 = 0$.",
            "lines": [
              {
                "step": "Find every complex solution of $y^2 - 2y + 18 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a = 1$, $b = -2$, $c = 18$",
                "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
              },
              {
                "step": "$b^2 - 4ac = (-2)^2 - 4 \\cdot 1 \\cdot 18 = -68$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "$y = \\dfrac{2 \\pm \\sqrt{-68}}{2}$",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 2$ and $2a = 2$."
              },
              {
                "step": "$\\sqrt{-68} = i\\sqrt{68}$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
              },
              {
                "step": "$i\\sqrt{68} = i\\sqrt{4}\\sqrt{17} = 2i\\sqrt{17}$",
                "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
              },
              {
                "step": "So $y = 1 + i\\sqrt{17}$ or $y = 1 - i\\sqrt{17}$.",
                "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $z^2 + 6z + 14 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = -3+i*sqrt(5), z = -3-i*sqrt(5)",
              "lines": [
                {
                  "step": "Find every complex solution of $z^2 + 6z + 14 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 1$, $b = 6$, $c = 14$",
                  "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 6^2 - 4 \\cdot 1 \\cdot 14 = -20$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$z = \\dfrac{-6 \\pm \\sqrt{-20}}{2}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -6$ and $2a = 2$."
                },
                {
                  "step": "$\\sqrt{-20} = i\\sqrt{20}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "$i\\sqrt{20} = i\\sqrt{4}\\sqrt{5} = 2i\\sqrt{5}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $z = -3 + i\\sqrt{5}$ or $z = -3 - i\\sqrt{5}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^2 - 6x + 23 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3+i*sqrt(14), x = 3-i*sqrt(14)",
              "lines": [
                {
                  "step": "Find every complex solution of $x^2 - 6x + 23 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 1$, $b = -6$, $c = 23$",
                  "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-6)^2 - 4 \\cdot 1 \\cdot 23 = -56$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{6 \\pm \\sqrt{-56}}{2}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 6$ and $2a = 2$."
                },
                {
                  "step": "$\\sqrt{-56} = i\\sqrt{56}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "$i\\sqrt{56} = i\\sqrt{4}\\sqrt{14} = 2i\\sqrt{14}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $x = 3 + i\\sqrt{14}$ or $x = 3 - i\\sqrt{14}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $5y^2 - 4y + 9 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = (2+i*sqrt(41))/5, y = (2-i*sqrt(41))/5",
              "lines": [
                {
                  "step": "Find every complex solution of $5y^2 - 4y + 9 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 5$, $b = -4$, $c = 9$",
                  "reason": "Quadratic formula: the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-4)^2 - 4 \\cdot 5 \\cdot 9 = -164$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$y = \\dfrac{4 \\pm \\sqrt{-164}}{10}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 4$ and $2a = 10$."
                },
                {
                  "step": "$\\sqrt{-164} = i\\sqrt{164}$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
                },
                {
                  "step": "$i\\sqrt{164} = i\\sqrt{4}\\sqrt{41} = 2i\\sqrt{41}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $y = \\dfrac{2 + i\\sqrt{41}}{5}$ or $y = \\dfrac{2 - i\\sqrt{41}}{5}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $6z^2 - 7z - 2 = 4z^2 - 5z + 3$.",
            "lines": [
              {
                "step": "Solve $6z^2 - 7z - 2 = 4z^2 - 5z + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2z^2 - 2z - 5 = 0$",
                "reason": "Adding the same number to both sides: $4z^2 - 5z + 3$ is taken from each side, and like terms are collected."
              },
              {
                "step": "$a = 2$, $b = -2$, $c = -5$",
                "reason": "Quadratic formula: the equation in line 2 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
              },
              {
                "step": "$b^2 - 4ac = (-2)^2 - 4 \\cdot 2 \\cdot (-5) = 44$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "$z = \\dfrac{2 \\pm \\sqrt{44}}{4}$",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 2$ and $2a = 4$."
              },
              {
                "step": "$\\sqrt{44} = \\sqrt{4}\\sqrt{11} = 2\\sqrt{11}$",
                "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
              },
              {
                "step": "So $z = \\dfrac{1 + \\sqrt{11}}{2}$ or $z = \\dfrac{1 - \\sqrt{11}}{2}$.",
                "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $7x^2 + 4x - 5 = 4x^2 + 2x + 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = (-1+sqrt(22))/3, x = (-1-sqrt(22))/3",
              "lines": [
                {
                  "step": "Solve $7x^2 + 4x - 5 = 4x^2 + 2x + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 + 2x - 7 = 0$",
                  "reason": "Adding the same number to both sides: $4x^2 + 2x + 2$ is taken from each side, and like terms are collected."
                },
                {
                  "step": "$a = 3$, $b = 2$, $c = -7$",
                  "reason": "Quadratic formula: the equation in line 2 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 2^2 - 4 \\cdot 3 \\cdot (-7) = 88$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$x = \\dfrac{-2 \\pm \\sqrt{88}}{6}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -2$ and $2a = 6$."
                },
                {
                  "step": "$\\sqrt{88} = \\sqrt{4}\\sqrt{22} = 2\\sqrt{22}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $x = \\dfrac{-1 + \\sqrt{22}}{3}$ or $x = \\dfrac{-1 - \\sqrt{22}}{3}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $3y^2 - 4y + 1 = -2y^2 - 6y + 5$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = (-1+sqrt(21))/5, y = (-1-sqrt(21))/5",
              "lines": [
                {
                  "step": "Solve $3y^2 - 4y + 1 = -2y^2 - 6y + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5y^2 + 2y - 4 = 0$",
                  "reason": "Adding the same number to both sides: $-2y^2 - 6y + 5$ is taken from each side, and like terms are collected."
                },
                {
                  "step": "$a = 5$, $b = 2$, $c = -4$",
                  "reason": "Quadratic formula: the equation in line 2 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 2^2 - 4 \\cdot 5 \\cdot (-4) = 84$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$y = \\dfrac{-2 \\pm \\sqrt{84}}{10}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -2$ and $2a = 10$."
                },
                {
                  "step": "$\\sqrt{84} = \\sqrt{4}\\sqrt{21} = 2\\sqrt{21}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $y = \\dfrac{-1 + \\sqrt{21}}{5}$ or $y = \\dfrac{-1 - \\sqrt{21}}{5}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Solve $5z^2 + 4z - 11 = 2z^2 + 2z - 9$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = (-1+sqrt(7))/3, z = (-1-sqrt(7))/3",
              "lines": [
                {
                  "step": "Solve $5z^2 + 4z - 11 = 2z^2 + 2z - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3z^2 + 2z - 2 = 0$",
                  "reason": "Adding the same number to both sides: $2z^2 + 2z - 9$ is taken from each side, and like terms are collected."
                },
                {
                  "step": "$a = 3$, $b = 2$, $c = -2$",
                  "reason": "Quadratic formula: the equation in line 2 has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = 2^2 - 4 \\cdot 3 \\cdot (-2) = 28$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "$z = \\dfrac{-2 \\pm \\sqrt{28}}{6}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -2$ and $2a = 6$."
                },
                {
                  "step": "$\\sqrt{28} = \\sqrt{4}\\sqrt{7} = 2\\sqrt{7}$",
                  "reason": "Root of a product: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ for $a, b \\ge 0$, with $4 = 2^2$."
                },
                {
                  "step": "So $z = \\dfrac{-1 + \\sqrt{7}}{3}$ or $z = \\dfrac{-1 - \\sqrt{7}}{3}$.",
                  "reason": "Cancelling a common factor: each term of the top and the bottom are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every complex solution of $2x^2 + 8ix + 10 = 0$.",
            "lines": [
              {
                "step": "Find every complex solution of $2x^2 + 8ix + 10 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a = 2$, $b = 8i$, $c = 10$",
                "reason": "Quadratic formula: its derivation holds for complex coefficients too when $b^2 - 4ac$ is real, and the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
              },
              {
                "step": "$b^2 - 4ac = (8i)^2 - 4 \\cdot 2 \\cdot 10 = -64 - 80 = -144$",
                "reason": "Discriminant $b^2 - 4ac$, with the number $i$ with $i^2 = -1$: $(8i)^2 = -64$."
              },
              {
                "step": "$x = \\dfrac{-8i \\pm \\sqrt{-144}}{4}$",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -8i$ and $2a = 4$."
              },
              {
                "step": "$\\sqrt{-144} = 12i$",
                "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and $144 = 12^2$."
              },
              {
                "step": "Then $x = \\dfrac{4i}{4}$ or $x = \\dfrac{-20i}{4}$",
                "reason": "Collecting like terms: the multiples of $i$ in each top are added."
              },
              {
                "step": "So $x = i$ or $x = -5i$.",
                "reason": "Cancelling a common factor: top and bottom are divided by $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every complex solution of $y^2 + 10iy - 9 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = -i, y = -9*i",
              "lines": [
                {
                  "step": "Find every complex solution of $y^2 + 10iy - 9 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 1$, $b = 10i$, $c = -9$",
                  "reason": "Quadratic formula: its derivation holds for complex coefficients too when $b^2 - 4ac$ is real, and the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (10i)^2 - 4 \\cdot 1 \\cdot (-9) = -100 + 36 = -64$",
                  "reason": "Discriminant $b^2 - 4ac$, with the number $i$ with $i^2 = -1$: $(10i)^2 = -100$."
                },
                {
                  "step": "$y = \\dfrac{-10i \\pm \\sqrt{-64}}{2}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -10i$ and $2a = 2$."
                },
                {
                  "step": "$\\sqrt{-64} = 8i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and $64 = 8^2$."
                },
                {
                  "step": "Then $y = \\dfrac{-2i}{2}$ or $y = \\dfrac{-18i}{2}$",
                  "reason": "Collecting like terms: the multiples of $i$ in each top are added."
                },
                {
                  "step": "So $y = -i$ or $y = -9i$.",
                  "reason": "Cancelling a common factor: top and bottom are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $2z^2 - 12iz - 10 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 5*i, z = i",
              "lines": [
                {
                  "step": "Find every complex solution of $2z^2 - 12iz - 10 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 2$, $b = -12i$, $c = -10$",
                  "reason": "Quadratic formula: its derivation holds for complex coefficients too when $b^2 - 4ac$ is real, and the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-12i)^2 - 4 \\cdot 2 \\cdot (-10) = -144 + 80 = -64$",
                  "reason": "Discriminant $b^2 - 4ac$, with the number $i$ with $i^2 = -1$: $(-12i)^2 = -144$."
                },
                {
                  "step": "$z = \\dfrac{12i \\pm \\sqrt{-64}}{4}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 12i$ and $2a = 4$."
                },
                {
                  "step": "$\\sqrt{-64} = 8i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and $64 = 8^2$."
                },
                {
                  "step": "Then $z = \\dfrac{20i}{4}$ or $z = \\dfrac{4i}{4}$",
                  "reason": "Collecting like terms: the multiples of $i$ in each top are added."
                },
                {
                  "step": "So $z = 5i$ or $z = i$.",
                  "reason": "Cancelling a common factor: top and bottom are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find every complex solution of $x^2 - 11ix + 12 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 12*i, x = -i",
              "lines": [
                {
                  "step": "Find every complex solution of $x^2 - 11ix + 12 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a = 1$, $b = -11i$, $c = 12$",
                  "reason": "Quadratic formula: its derivation holds for complex coefficients too when $b^2 - 4ac$ is real, and the equation has the shape $ax^2 + bx + c = 0$, so $a$, $b$ and $c$ are read from it."
                },
                {
                  "step": "$b^2 - 4ac = (-11i)^2 - 4 \\cdot 1 \\cdot 12 = -121 - 48 = -169$",
                  "reason": "Discriminant $b^2 - 4ac$, with the number $i$ with $i^2 = -1$: $(-11i)^2 = -121$."
                },
                {
                  "step": "$x = \\dfrac{11i \\pm \\sqrt{-169}}{2}$",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 11i$ and $2a = 2$."
                },
                {
                  "step": "$\\sqrt{-169} = 13i$",
                  "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$, and $169 = 13^2$."
                },
                {
                  "step": "Then $x = \\dfrac{24i}{2}$ or $x = \\dfrac{-2i}{2}$",
                  "reason": "Collecting like terms: the multiples of $i$ in each top are added."
                },
                {
                  "step": "So $x = 12i$ or $x = -i$.",
                  "reason": "Cancelling a common factor: top and bottom are divided by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t146-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number $a$ for which $ax^2 + 6x + 5 = 0$ has a double root.",
            "lines": [
              {
                "step": "Find the number $a$ for which $ax^2 + 6x + 5 = 0$ has a double root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6^2 - 4 \\cdot a \\cdot 5 = 0$",
                "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
              },
              {
                "step": "$20a = 36$",
                "reason": "Adding the same number to both sides: $20a$ is added to each side, and $6^2 = 36$."
              },
              {
                "step": "$a = \\dfrac{9}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $20$, and the fraction is put in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $a$ for which $ay^2 - 6y + 8 = 0$ has a double root.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/8",
              "lines": [
                {
                  "step": "Find the number $a$ for which $ay^2 - 6y + 8 = 0$ has a double root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-6)^2 - 4 \\cdot a \\cdot 8 = 0$",
                  "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
                },
                {
                  "step": "$32a = 36$",
                  "reason": "Adding the same number to both sides: $32a$ is added to each side, and $(-6)^2 = 36$."
                },
                {
                  "step": "$a = \\dfrac{9}{8}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $32$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the number $a$ for which $az^2 - 3z + 8 = 0$ has a double root.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/32",
              "lines": [
                {
                  "step": "Find the number $a$ for which $az^2 - 3z + 8 = 0$ has a double root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-3)^2 - 4 \\cdot a \\cdot 8 = 0$",
                  "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
                },
                {
                  "step": "$32a = 9$",
                  "reason": "Adding the same number to both sides: $32a$ is added to each side, and $(-3)^2 = 9$."
                },
                {
                  "step": "$a = \\dfrac{9}{32}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $32$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $7x^2 - 5x + c = 0$ has a double root.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/28",
              "lines": [
                {
                  "step": "Find the number $c$ for which $7x^2 - 5x + c = 0$ has a double root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-5)^2 - 4 \\cdot 7 \\cdot c = 0$",
                  "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
                },
                {
                  "step": "$28c = 25$",
                  "reason": "Adding the same number to both sides: $28c$ is added to each side, and $(-5)^2 = 25$."
                },
                {
                  "step": "$c = \\dfrac{25}{28}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $28$, and the fraction is put in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the positive number $b$ for which $169y^2 + by + 4 = 0$ has a double root.",
            "lines": [
              {
                "step": "Find the positive number $b$ for which $169y^2 + by + 4 = 0$ has a double root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$b^2 - 4 \\cdot 169 \\cdot 4 = 0$",
                "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
              },
              {
                "step": "$b^2 = 2{,}704$",
                "reason": "Adding the same number to both sides: $4 \\cdot 169 \\cdot 4 = 2{,}704$ is added to each side."
              },
              {
                "step": "So $b = 52$ or $b = -52$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $2{,}704 = 52^2$."
              },
              {
                "step": "$b = 52$",
                "reason": "Answering the question asked: $b$ is positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the positive number $b$ for which $169z^2 + bz + 9 = 0$ has a double root.",
              "form": "Answer as an integer.",
              "answer": "78",
              "lines": [
                {
                  "step": "Find the positive number $b$ for which $169z^2 + bz + 9 = 0$ has a double root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4 \\cdot 169 \\cdot 9 = 0$",
                  "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
                },
                {
                  "step": "$b^2 = 6{,}084$",
                  "reason": "Adding the same number to both sides: $4 \\cdot 169 \\cdot 9 = 6{,}084$ is added to each side."
                },
                {
                  "step": "So $b = 78$ or $b = -78$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $6{,}084 = 78^2$."
                },
                {
                  "step": "$b = 78$",
                  "reason": "Answering the question asked: $b$ is positive."
                }
              ]
            },
            {
              "prompt": "Find the positive number $b$ for which $4x^2 + bx + 225 = 0$ has a double root.",
              "form": "Answer as an integer.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find the positive number $b$ for which $4x^2 + bx + 225 = 0$ has a double root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4 \\cdot 4 \\cdot 225 = 0$",
                  "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
                },
                {
                  "step": "$b^2 = 3{,}600$",
                  "reason": "Adding the same number to both sides: $4 \\cdot 4 \\cdot 225 = 3{,}600$ is added to each side."
                },
                {
                  "step": "So $b = 60$ or $b = -60$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $3{,}600 = 60^2$."
                },
                {
                  "step": "$b = 60$",
                  "reason": "Answering the question asked: $b$ is positive."
                }
              ]
            },
            {
              "prompt": "Find the positive number $b$ for which $144y^2 + by + 25 = 0$ has a double root.",
              "form": "Answer as an integer.",
              "answer": "120",
              "lines": [
                {
                  "step": "Find the positive number $b$ for which $144y^2 + by + 25 = 0$ has a double root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4 \\cdot 144 \\cdot 25 = 0$",
                  "reason": "Positive, zero, negative discriminant: the quadratic has a double root exactly when $b^2 - 4ac = 0$."
                },
                {
                  "step": "$b^2 = 14{,}400$",
                  "reason": "Adding the same number to both sides: $4 \\cdot 144 \\cdot 25 = 14{,}400$ is added to each side."
                },
                {
                  "step": "So $b = 120$ or $b = -120$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $14{,}400 = 120^2$."
                },
                {
                  "step": "$b = 120$",
                  "reason": "Answering the question asked: $b$ is positive."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find all numbers $c$ for which $8z^2 + 7z + c = 0$ has real roots.",
            "lines": [
              {
                "step": "Find all numbers $c$ for which $8z^2 + 7z + c = 0$ has real roots.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7^2 - 4 \\cdot 8 \\cdot c \\ge 0$",
                "reason": "Positive, zero, negative discriminant: the roots are real exactly when $b^2 - 4ac \\ge 0$."
              },
              {
                "step": "$49 \\ge 32c$",
                "reason": "Adding the same number to both sides keeps the order: $32c$ is added to each side, and $7^2 = 49$."
              },
              {
                "step": "$c \\le \\dfrac{49}{32}$",
                "reason": "Multiplying by a positive number keeps the order: both sides are divided by $32$, and the inequality is read from right to left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find all numbers $c$ for which $8x^2 + 9x + c = 0$ has real roots.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "c <= 81/32",
              "lines": [
                {
                  "step": "Find all numbers $c$ for which $8x^2 + 9x + c = 0$ has real roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9^2 - 4 \\cdot 8 \\cdot c \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: the roots are real exactly when $b^2 - 4ac \\ge 0$."
                },
                {
                  "step": "$81 \\ge 32c$",
                  "reason": "Adding the same number to both sides keeps the order: $32c$ is added to each side, and $9^2 = 81$."
                },
                {
                  "step": "$c \\le \\dfrac{81}{32}$",
                  "reason": "Multiplying by a positive number keeps the order: both sides are divided by $32$, and the inequality is read from right to left."
                }
              ]
            },
            {
              "prompt": "Find all numbers $c$ for which $7y^2 - 9y + c = 0$ has real roots.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "c <= 81/28",
              "lines": [
                {
                  "step": "Find all numbers $c$ for which $7y^2 - 9y + c = 0$ has real roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-9)^2 - 4 \\cdot 7 \\cdot c \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: the roots are real exactly when $b^2 - 4ac \\ge 0$."
                },
                {
                  "step": "$81 \\ge 28c$",
                  "reason": "Adding the same number to both sides keeps the order: $28c$ is added to each side, and $(-9)^2 = 81$."
                },
                {
                  "step": "$c \\le \\dfrac{81}{28}$",
                  "reason": "Multiplying by a positive number keeps the order: both sides are divided by $28$, and the inequality is read from right to left."
                }
              ]
            },
            {
              "prompt": "Find all numbers $c$ for which $5z^2 + 11z + c = 0$ has real roots.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "c <= 121/20",
              "lines": [
                {
                  "step": "Find all numbers $c$ for which $5z^2 + 11z + c = 0$ has real roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$11^2 - 4 \\cdot 5 \\cdot c \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: the roots are real exactly when $b^2 - 4ac \\ge 0$."
                },
                {
                  "step": "$121 \\ge 20c$",
                  "reason": "Adding the same number to both sides keeps the order: $20c$ is added to each side, and $11^2 = 121$."
                },
                {
                  "step": "$c \\le \\dfrac{121}{20}$",
                  "reason": "Multiplying by a positive number keeps the order: both sides are divided by $20$, and the inequality is read from right to left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find all numbers $y$ for which some real number $x$ satisfies $y = 6x^2 - 3x - 5$.",
            "lines": [
              {
                "step": "Find all numbers $y$ for which some real number $x$ satisfies $y = 6x^2 - 3x - 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x^2 - 3x - 5 - y = 0$",
                "reason": "Adding the same number to both sides: $y$ is taken from each side, so the equation is a quadratic in $x$ with $a = 6$, $b = -3$ and $c = -5 - y$."
              },
              {
                "step": "$(-3)^2 - 4 \\cdot 6 \\cdot (-5 - y) \\ge 0$",
                "reason": "Positive, zero, negative discriminant: a real $x$ exists exactly when the discriminant is at least $0$."
              },
              {
                "step": "$129 + 24y \\ge 0$",
                "reason": "The distributive law, from arithmetic: $-4 \\cdot 6$ multiplies each term of the bracket, and $(-3)^2 = 9$."
              },
              {
                "step": "$24y \\ge -129$",
                "reason": "Adding the same number to both sides keeps the order: $129$ is taken from each side."
              },
              {
                "step": "$y \\ge -\\dfrac{43}{8}$",
                "reason": "Multiplying by a positive number keeps the order: both sides are divided by $24$, and the fraction is put in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find all numbers $y$ for which some real number $x$ satisfies $y = 3x^2 - 11x + 7$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "y >= -37/12",
              "lines": [
                {
                  "step": "Find all numbers $y$ for which some real number $x$ satisfies $y = 3x^2 - 11x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 - 11x + 7 - y = 0$",
                  "reason": "Adding the same number to both sides: $y$ is taken from each side, so the equation is a quadratic in $x$ with $a = 3$, $b = -11$ and $c = 7 - y$."
                },
                {
                  "step": "$(-11)^2 - 4 \\cdot 3 \\cdot (7 - y) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: a real $x$ exists exactly when the discriminant is at least $0$."
                },
                {
                  "step": "$37 + 12y \\ge 0$",
                  "reason": "The distributive law, from arithmetic: $-4 \\cdot 3$ multiplies each term of the bracket, and $(-11)^2 = 121$."
                },
                {
                  "step": "$12y \\ge -37$",
                  "reason": "Adding the same number to both sides keeps the order: $37$ is taken from each side."
                },
                {
                  "step": "$y \\ge -\\dfrac{37}{12}$",
                  "reason": "Multiplying by a positive number keeps the order: both sides are divided by $12$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find all numbers $y$ for which some real number $x$ satisfies $y = 3x^2 + 4x - 6$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "y >= -22/3",
              "lines": [
                {
                  "step": "Find all numbers $y$ for which some real number $x$ satisfies $y = 3x^2 + 4x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 + 4x - 6 - y = 0$",
                  "reason": "Adding the same number to both sides: $y$ is taken from each side, so the equation is a quadratic in $x$ with $a = 3$, $b = 4$ and $c = -6 - y$."
                },
                {
                  "step": "$4^2 - 4 \\cdot 3 \\cdot (-6 - y) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: a real $x$ exists exactly when the discriminant is at least $0$."
                },
                {
                  "step": "$88 + 12y \\ge 0$",
                  "reason": "The distributive law, from arithmetic: $-4 \\cdot 3$ multiplies each term of the bracket, and $4^2 = 16$."
                },
                {
                  "step": "$12y \\ge -88$",
                  "reason": "Adding the same number to both sides keeps the order: $88$ is taken from each side."
                },
                {
                  "step": "$y \\ge -\\dfrac{22}{3}$",
                  "reason": "Multiplying by a positive number keeps the order: both sides are divided by $12$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find all numbers $y$ for which some real number $x$ satisfies $y = 2x^2 + 9x + 2$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "y >= -65/8",
              "lines": [
                {
                  "step": "Find all numbers $y$ for which some real number $x$ satisfies $y = 2x^2 + 9x + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 + 9x + 2 - y = 0$",
                  "reason": "Adding the same number to both sides: $y$ is taken from each side, so the equation is a quadratic in $x$ with $a = 2$, $b = 9$ and $c = 2 - y$."
                },
                {
                  "step": "$9^2 - 4 \\cdot 2 \\cdot (2 - y) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: a real $x$ exists exactly when the discriminant is at least $0$."
                },
                {
                  "step": "$65 + 8y \\ge 0$",
                  "reason": "The distributive law, from arithmetic: $-4 \\cdot 2$ multiplies each term of the bracket, and $9^2 = 81$."
                },
                {
                  "step": "$8y \\ge -65$",
                  "reason": "Adding the same number to both sides keeps the order: $65$ is taken from each side."
                },
                {
                  "step": "$y \\ge -\\dfrac{65}{8}$",
                  "reason": "Multiplying by a positive number keeps the order: both sides are divided by $8$, and the fraction is put in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t146-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the roots of $338x^2 + 364x + 98 = 0$ are real.",
            "lines": [
              {
                "step": "Decide whether the roots of $338x^2 + 364x + 98 = 0$ are real.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$b^2 - 4ac = 364^2 - 4 \\cdot 338 \\cdot 98 = 0$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "The discriminant is $0$, so the equation has a double root, and it is real.",
                "reason": "Positive, zero, negative discriminant: a zero discriminant gives a double root, $-\\dfrac{b}{2a}$, a real number."
              },
              {
                "step": "Yes",
                "reason": "Answering the question asked."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the roots of $8y^2 + 3y - 3 = 0$ are real.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the roots of $8y^2 + 3y - 3 = 0$ are real.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 3^2 - 4 \\cdot 8 \\cdot (-3) = 105$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "The discriminant $105$ is positive, so the equation has two different real roots.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two different real roots."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Decide whether the roots of $2z^2 - 5z + 11 = 0$ are real.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the roots of $2z^2 - 5z + 11 = 0$ are real.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = (-5)^2 - 4 \\cdot 2 \\cdot 11 = -63$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "The discriminant $-63$ is negative, so the roots are not real.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives two roots that are not real."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Decide whether the roots of $2x^2 + 4x + 11 = 0$ are real.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the roots of $2x^2 + 4x + 11 = 0$ are real.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 4^2 - 4 \\cdot 2 \\cdot 11 = -72$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "The discriminant $-72$ is negative, so the roots are not real.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives two roots that are not real."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t146-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the roots of $4y^2 + 5y - 9 = 0$ are rational.",
            "lines": [
              {
                "step": "Decide whether the roots of $4y^2 + 5y - 9 = 0$ are rational.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$b^2 - 4ac = 5^2 - 4 \\cdot 4 \\cdot (-9) = 169$",
                "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
              },
              {
                "step": "The square root $\\sqrt{169} = 13$ is a whole number.",
                "reason": "Positive square root, from arithmetic: $13^2 = 169$."
              },
              {
                "step": "The roots $\\dfrac{-5 \\pm 13}{8}$ are rational.",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$: sums and quotients of rational numbers are rational."
              },
              {
                "step": "Yes",
                "reason": "Answering the question asked."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the roots of $6z^2 + 3z - 10 = 0$ are rational.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the roots of $6z^2 + 3z - 10 = 0$ are rational.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 3^2 - 4 \\cdot 6 \\cdot (-10) = 249$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "The number $249$ is not a perfect square, so $\\sqrt{249}$ is irrational.",
                  "reason": "Irrational square roots, from arithmetic: the square root of a whole number that is not a perfect square is irrational."
                },
                {
                  "step": "The roots $\\dfrac{-3 \\pm \\sqrt{249}}{12}$ are irrational.",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$: a rational number plus or minus an irrational number is irrational, and so is that sum divided by a nonzero rational number."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Decide whether the roots of $5x^2 + 2x - 7 = 0$ are rational.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the roots of $5x^2 + 2x - 7 = 0$ are rational.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 2^2 - 4 \\cdot 5 \\cdot (-7) = 144$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "The square root $\\sqrt{144} = 12$ is a whole number.",
                  "reason": "Positive square root, from arithmetic: $12^2 = 144$."
                },
                {
                  "step": "The roots $\\dfrac{-2 \\pm 12}{10}$ are rational.",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$: sums and quotients of rational numbers are rational."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Decide whether the roots of $7y^2 - 12y + 2 = 0$ are rational.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the roots of $7y^2 - 12y + 2 = 0$ are rational.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = (-12)^2 - 4 \\cdot 7 \\cdot 2 = 88$",
                  "reason": "Discriminant $b^2 - 4ac$: each letter is replaced by its value, in brackets where it is negative, and the order of operations, from arithmetic, gives the number."
                },
                {
                  "step": "The number $88$ is not a perfect square, so $\\sqrt{88}$ is irrational.",
                  "reason": "Irrational square roots, from arithmetic: the square root of a whole number that is not a perfect square is irrational."
                },
                {
                  "step": "The roots $\\dfrac{12 \\pm \\sqrt{88}}{14}$ are irrational.",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$: a rational number plus or minus an irrational number is irrational, and so is that sum divided by a nonzero rational number."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t146-k5",
      "forms": [
        {
          "example": {
            "problem": "Find $b$ if one root of $x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, is $3 + 3i\\sqrt{3}$.",
            "lines": [
              {
                "step": "Find $b$ if one root of $x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, is $3 + 3i\\sqrt{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The other root is $3 - 3i\\sqrt{3}$.",
                "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real and $3 + 3i\\sqrt{3}$ is not real."
              },
              {
                "step": "The sum of the roots is $(3 + 3i\\sqrt{3}) + (3 - 3i\\sqrt{3}) = 6$.",
                "reason": "Collecting like terms: the multiples of $i$ cancel."
              },
              {
                "step": "The product of the roots is $(3 + 3i\\sqrt{3})(3 - 3i\\sqrt{3}) = 9 + 9 \\cdot 3 = 36$.",
                "reason": "A number times its conjugate: $(r + si)(r - si) = r^2 + s^2$."
              },
              {
                "step": "$b = -6$",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $c$ if one root of $y^2 + by + c = 0$, where $b$ and $c$ are real numbers, is $-5 - 2i$.",
              "form": "Answer as an integer.",
              "answer": "29",
              "lines": [
                {
                  "step": "Find $c$ if one root of $y^2 + by + c = 0$, where $b$ and $c$ are real numbers, is $-5 - 2i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other root is $-5 + 2i$.",
                  "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real and $-5 - 2i$ is not real."
                },
                {
                  "step": "The sum of the roots is $(-5 - 2i) + (-5 + 2i) = -10$.",
                  "reason": "Collecting like terms: the multiples of $i$ cancel."
                },
                {
                  "step": "The product of the roots is $(-5 - 2i)(-5 + 2i) = 25 + 4 = 29$.",
                  "reason": "A number times its conjugate: $(r + si)(r - si) = r^2 + s^2$."
                },
                {
                  "step": "$c = 29$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
                }
              ]
            },
            {
              "prompt": "Find $b$ if one root of $z^2 + bz + c = 0$, where $b$ and $c$ are real numbers, is $4 - 2i\\sqrt{5}$.",
              "form": "Answer as an integer.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Find $b$ if one root of $z^2 + bz + c = 0$, where $b$ and $c$ are real numbers, is $4 - 2i\\sqrt{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other root is $4 + 2i\\sqrt{5}$.",
                  "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real and $4 - 2i\\sqrt{5}$ is not real."
                },
                {
                  "step": "The sum of the roots is $(4 - 2i\\sqrt{5}) + (4 + 2i\\sqrt{5}) = 8$.",
                  "reason": "Collecting like terms: the multiples of $i$ cancel."
                },
                {
                  "step": "The product of the roots is $(4 - 2i\\sqrt{5})(4 + 2i\\sqrt{5}) = 16 + 4 \\cdot 5 = 36$.",
                  "reason": "A number times its conjugate: $(r + si)(r - si) = r^2 + s^2$."
                },
                {
                  "step": "$b = -8$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
                }
              ]
            },
            {
              "prompt": "Find $c$ if one root of $x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, is $-2 - 6i$.",
              "form": "Answer as an integer.",
              "answer": "40",
              "lines": [
                {
                  "step": "Find $c$ if one root of $x^2 + bx + c = 0$, where $b$ and $c$ are real numbers, is $-2 - 6i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other root is $-2 + 6i$.",
                  "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real and $-2 - 6i$ is not real."
                },
                {
                  "step": "The sum of the roots is $(-2 - 6i) + (-2 + 6i) = -4$.",
                  "reason": "Collecting like terms: the multiples of $i$ cancel."
                },
                {
                  "step": "The product of the roots is $(-2 - 6i)(-2 + 6i) = 4 + 36 = 40$.",
                  "reason": "A number times its conjugate: $(r + si)(r - si) = r^2 + s^2$."
                },
                {
                  "step": "$c = 40$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $c$ if one root of $y^2 + by + c = 0$, where $b$ and $c$ are rational numbers, is $-7 + 5\\sqrt{2}$.",
            "lines": [
              {
                "step": "Find $c$ if one root of $y^2 + by + c = 0$, where $b$ and $c$ are rational numbers, is $-7 + 5\\sqrt{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The other root is $-7 - 5\\sqrt{2}$.",
                "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational and $\\sqrt{2}$ is irrational."
              },
              {
                "step": "The sum of the roots is $(-7 + 5\\sqrt{2}) + (-7 - 5\\sqrt{2}) = -14$.",
                "reason": "Collecting like terms: the multiples of the root cancel."
              },
              {
                "step": "The product of the roots is $(-7 + 5\\sqrt{2})(-7 - 5\\sqrt{2}) = 49 - 25 \\cdot 2 = -1$.",
                "reason": "Difference of squares: $(r + s\\sqrt{n})(r - s\\sqrt{n}) = r^2 - s^2n$."
              },
              {
                "step": "$c = -1$",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$ if one root of $z^2 + bz + c = 0$, where $b$ and $c$ are rational numbers, is $8 + 3\\sqrt{7}$.",
              "form": "Answer as an integer.",
              "answer": "-16",
              "lines": [
                {
                  "step": "Find $b$ if one root of $z^2 + bz + c = 0$, where $b$ and $c$ are rational numbers, is $8 + 3\\sqrt{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other root is $8 - 3\\sqrt{7}$.",
                  "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational and $\\sqrt{7}$ is irrational."
                },
                {
                  "step": "The sum of the roots is $(8 + 3\\sqrt{7}) + (8 - 3\\sqrt{7}) = 16$.",
                  "reason": "Collecting like terms: the multiples of the root cancel."
                },
                {
                  "step": "The product of the roots is $(8 + 3\\sqrt{7})(8 - 3\\sqrt{7}) = 64 - 9 \\cdot 7 = 1$.",
                  "reason": "Difference of squares: $(r + s\\sqrt{n})(r - s\\sqrt{n}) = r^2 - s^2n$."
                },
                {
                  "step": "$b = -16$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
                }
              ]
            },
            {
              "prompt": "Find $c$ if one root of $x^2 + bx + c = 0$, where $b$ and $c$ are rational numbers, is $4 - 2\\sqrt{2}$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find $c$ if one root of $x^2 + bx + c = 0$, where $b$ and $c$ are rational numbers, is $4 - 2\\sqrt{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other root is $4 + 2\\sqrt{2}$.",
                  "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational and $\\sqrt{2}$ is irrational."
                },
                {
                  "step": "The sum of the roots is $(4 - 2\\sqrt{2}) + (4 + 2\\sqrt{2}) = 8$.",
                  "reason": "Collecting like terms: the multiples of the root cancel."
                },
                {
                  "step": "The product of the roots is $(4 - 2\\sqrt{2})(4 + 2\\sqrt{2}) = 16 - 4 \\cdot 2 = 8$.",
                  "reason": "Difference of squares: $(r + s\\sqrt{n})(r - s\\sqrt{n}) = r^2 - s^2n$."
                },
                {
                  "step": "$c = 8$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
                }
              ]
            },
            {
              "prompt": "Find $b$ if one root of $y^2 + by + c = 0$, where $b$ and $c$ are rational numbers, is $-5 + 2\\sqrt{7}$.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find $b$ if one root of $y^2 + by + c = 0$, where $b$ and $c$ are rational numbers, is $-5 + 2\\sqrt{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other root is $-5 - 2\\sqrt{7}$.",
                  "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational and $\\sqrt{7}$ is irrational."
                },
                {
                  "step": "The sum of the roots is $(-5 + 2\\sqrt{7}) + (-5 - 2\\sqrt{7}) = -10$.",
                  "reason": "Collecting like terms: the multiples of the root cancel."
                },
                {
                  "step": "The product of the roots is $(-5 + 2\\sqrt{7})(-5 - 2\\sqrt{7}) = 25 - 4 \\cdot 7 = -3$.",
                  "reason": "Difference of squares: $(r + s\\sqrt{n})(r - s\\sqrt{n}) = r^2 - s^2n$."
                },
                {
                  "step": "$b = 10$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, $b$ is minus the sum and $c$ is the product."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the other root of a quadratic with real coefficients, one of whose roots is $-5 + 3i$.",
            "lines": [
              {
                "step": "Find the other root of a quadratic with real coefficients, one of whose roots is $-5 + 3i$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root $-5 + 3i$ is not real: its imaginary part is not $0$.",
                "reason": "Imaginary part: the real number that multiplies $i$."
              },
              {
                "step": "The other root is $-5 - 3i$.",
                "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other root of a quadratic with real coefficients, one of whose roots is $-6 + i$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-6-i",
              "lines": [
                {
                  "step": "Find the other root of a quadratic with real coefficients, one of whose roots is $-6 + i$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $-6 + i$ is not real: its imaginary part is not $0$.",
                  "reason": "Imaginary part: the real number that multiplies $i$."
                },
                {
                  "step": "The other root is $-6 - i$.",
                  "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real."
                }
              ]
            },
            {
              "prompt": "Find the other root of a quadratic with real coefficients, one of whose roots is $-3 - 2i\\sqrt{3}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "-3+2*i*sqrt(3)",
              "lines": [
                {
                  "step": "Find the other root of a quadratic with real coefficients, one of whose roots is $-3 - 2i\\sqrt{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $-3 - 2i\\sqrt{3}$ is not real: its imaginary part is not $0$.",
                  "reason": "Imaginary part: the real number that multiplies $i$."
                },
                {
                  "step": "The other root is $-3 + 2i\\sqrt{3}$.",
                  "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real."
                }
              ]
            },
            {
              "prompt": "Find the other root of a quadratic with real coefficients, one of whose roots is $7 - 2i\\sqrt{2}$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "7+2*i*sqrt(2)",
              "lines": [
                {
                  "step": "Find the other root of a quadratic with real coefficients, one of whose roots is $7 - 2i\\sqrt{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $7 - 2i\\sqrt{2}$ is not real: its imaginary part is not $0$.",
                  "reason": "Imaginary part: the real number that multiplies $i$."
                },
                {
                  "step": "The other root is $7 + 2i\\sqrt{2}$.",
                  "reason": "Non-real roots of a real quadratic are conjugates: the coefficients are real."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the other root of a quadratic with rational coefficients, one of whose roots is $-7 - 2\\sqrt{11}$.",
            "lines": [
              {
                "step": "Find the other root of a quadratic with rational coefficients, one of whose roots is $-7 - 2\\sqrt{11}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root $-7 - 2\\sqrt{11}$ is irrational.",
                "reason": "Irrational square roots, from arithmetic: $\\sqrt{11}$ is irrational, and a rational number plus a nonzero rational multiple of it is irrational."
              },
              {
                "step": "The other root is $-7 + 2\\sqrt{11}$.",
                "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other root of a quadratic with rational coefficients, one of whose roots is $8 - 5\\sqrt{3}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "8+5*sqrt(3)",
              "lines": [
                {
                  "step": "Find the other root of a quadratic with rational coefficients, one of whose roots is $8 - 5\\sqrt{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $8 - 5\\sqrt{3}$ is irrational.",
                  "reason": "Irrational square roots, from arithmetic: $\\sqrt{3}$ is irrational, and a rational number plus a nonzero rational multiple of it is irrational."
                },
                {
                  "step": "The other root is $8 + 5\\sqrt{3}$.",
                  "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational."
                }
              ]
            },
            {
              "prompt": "Find the other root of a quadratic with rational coefficients, one of whose roots is $-2 + 3\\sqrt{5}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-2-3*sqrt(5)",
              "lines": [
                {
                  "step": "Find the other root of a quadratic with rational coefficients, one of whose roots is $-2 + 3\\sqrt{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $-2 + 3\\sqrt{5}$ is irrational.",
                  "reason": "Irrational square roots, from arithmetic: $\\sqrt{5}$ is irrational, and a rational number plus a nonzero rational multiple of it is irrational."
                },
                {
                  "step": "The other root is $-2 - 3\\sqrt{5}$.",
                  "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational."
                }
              ]
            },
            {
              "prompt": "Find the other root of a quadratic with rational coefficients, one of whose roots is $6 + 3\\sqrt{2}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "6-3*sqrt(2)",
              "lines": [
                {
                  "step": "Find the other root of a quadratic with rational coefficients, one of whose roots is $6 + 3\\sqrt{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $6 + 3\\sqrt{2}$ is irrational.",
                  "reason": "Irrational square roots, from arithmetic: $\\sqrt{2}$ is irrational, and a rational number plus a nonzero rational multiple of it is irrational."
                },
                {
                  "step": "The other root is $6 - 3\\sqrt{2}$.",
                  "reason": "Surd roots of a rational quadratic are conjugate surds: the coefficients are rational."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t146-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $8x^2 + 10x = 3$, and write that line right.",
            "given": [
              "$8x^2 + 10x = 3$",
              "$a = 8$, $b = 10$, $c = 3$",
              "$b^2 - 4ac = 10^2 - 4 \\cdot 8 \\cdot 3 = 4$",
              "$x = \\dfrac{-10 \\pm 2}{16}$",
              "$x = -\\dfrac{1}{2}$ or $x = -\\dfrac{3}{4}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $8x^2 + 10x = 3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 reads $c = 3$ from the right side, before every term is on the left.",
                "reason": "A sign lost: the quadratic formula needs $ax^2 + bx + c = 0$, and taking $3$ from both sides gives $8x^2 + 10x - 3 = 0$."
              },
              {
                "step": "Line 2 written right is $a = 8, b = 10, c = -3$.",
                "reason": "Adding the same number to both sides puts every term on the left, so $c = -3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $y(6y - 25) = -14$, and write that line right.",
              "given": [
                "$y(6y - 25) = -14$",
                "$6y^2 - 25y = -14$",
                "$a = 6$, $b = -25$, $c = -14$",
                "$b^2 - 4ac = (-25)^2 - 4 \\cdot 6 \\cdot (-14) = 961$",
                "$y = \\dfrac{25 \\pm 31}{12}$",
                "$y = \\dfrac{14}{3}$ or $y = -\\dfrac{1}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: a = 6, b = -25, c = 14",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $y(6y - 25) = -14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 reads $c = -14$ from the right side, before every term is on the left.",
                  "reason": "A sign lost: the quadratic formula needs $ax^2 + bx + c = 0$, and taking $-14$ from both sides gives $6y^2 - 25y + 14 = 0$."
                },
                {
                  "step": "Line 3 written right is $a = 6, b = -25, c = 14$.",
                  "reason": "Adding the same number to both sides puts every term on the left, so $c = 14$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2z^2 + 15z = -27$, and write that line right.",
              "given": [
                "$2z^2 + 15z = -27$",
                "$a = 2$, $b = 15$, $c = -27$",
                "$b^2 - 4ac = 15^2 - 4 \\cdot 2 \\cdot (-27) = 441$",
                "$z = \\dfrac{-15 \\pm 21}{4}$",
                "$z = \\dfrac{3}{2}$ or $z = -9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: a = 2, b = 15, c = 27",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2z^2 + 15z = -27$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 reads $c = -27$ from the right side, before every term is on the left.",
                  "reason": "A sign lost: the quadratic formula needs $ax^2 + bx + c = 0$, and taking $-27$ from both sides gives $2z^2 + 15z + 27 = 0$."
                },
                {
                  "step": "Line 2 written right is $a = 2, b = 15, c = 27$.",
                  "reason": "Adding the same number to both sides puts every term on the left, so $c = 27$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $x(6x - 17) = -10$, and write that line right.",
              "given": [
                "$x(6x - 17) = -10$",
                "$6x^2 - 17x = -10$",
                "$a = 6$, $b = -17$, $c = -10$",
                "$b^2 - 4ac = (-17)^2 - 4 \\cdot 6 \\cdot (-10) = 529$",
                "$x = \\dfrac{17 \\pm 23}{12}$",
                "$x = \\dfrac{10}{3}$ or $x = -\\dfrac{1}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: a = 6, b = -17, c = 10",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x(6x - 17) = -10$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 reads $c = -10$ from the right side, before every term is on the left.",
                  "reason": "A sign lost: the quadratic formula needs $ax^2 + bx + c = 0$, and taking $-10$ from both sides gives $6x^2 - 17x + 10 = 0$."
                },
                {
                  "step": "Line 3 written right is $a = 6, b = -17, c = 10$.",
                  "reason": "Adding the same number to both sides puts every term on the left, so $c = 10$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $4y^2 + 3y - 7 = 0$, and write that line right.",
            "given": [
              "$4y^2 + 3y - 7 = 0$",
              "$a = 4$, $b = 3$, $c = -7$",
              "$b^2 - 4ac = 3^2 - 4 \\cdot 4 \\cdot (-7) = 121$",
              "$y = \\dfrac{3 \\pm 11}{8}$",
              "$y = \\dfrac{7}{4}$ or $y = -1$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $4y^2 + 3y - 7 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 puts $b = 3$ at the front of the top, where the formula has $-b$.",
                "reason": "A sign lost: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, and $-b = -3$."
              },
              {
                "step": "Line 4 written right is $y = \\dfrac{-3 \\pm 11}{8}$.",
                "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $2z^2 + 3z - 14 = 0$, and write that line right.",
              "given": [
                "$2z^2 + 3z - 14 = 0$",
                "$a = 2$, $b = 3$, $c = -14$",
                "$b^2 - 4ac = 3^2 - 4 \\cdot 2 \\cdot (-14) = 121$",
                "$z = \\dfrac{3 \\pm 11}{4}$",
                "$z = \\dfrac{7}{2}$ or $z = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: z = (-3+11)/4 or z = (-3-11)/4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2z^2 + 3z - 14 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 puts $b = 3$ at the front of the top, where the formula has $-b$.",
                  "reason": "A sign lost: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, and $-b = -3$."
                },
                {
                  "step": "Line 4 written right is $z = \\dfrac{-3 \\pm 11}{4}$.",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = -3$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $3x^2 - 8x = -4$, and write that line right.",
              "given": [
                "$3x^2 - 8x = -4$",
                "$3x^2 - 8x + 4 = 0$",
                "$a = 3$, $b = -8$, $c = 4$",
                "$b^2 - 4ac = (-8)^2 - 4 \\cdot 3 \\cdot 4 = 16$",
                "$x = \\dfrac{-8 \\pm 4}{6}$",
                "$x = -\\dfrac{2}{3}$ or $x = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x = (8+4)/6 or x = (8-4)/6",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $3x^2 - 8x = -4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 puts $b = -8$ at the front of the top, where the formula has $-b$.",
                  "reason": "A sign lost: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, and $-b = 8$."
                },
                {
                  "step": "Line 5 written right is $x = \\dfrac{8 \\pm 4}{6}$.",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 8$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $5y^2 - 9y - 2 = 0$, and write that line right.",
              "given": [
                "$5y^2 - 9y - 2 = 0$",
                "$a = 5$, $b = -9$, $c = -2$",
                "$b^2 - 4ac = (-9)^2 - 4 \\cdot 5 \\cdot (-2) = 121$",
                "$y = \\dfrac{-9 \\pm 11}{10}$",
                "$y = \\dfrac{1}{5}$ or $y = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y = (9+11)/10 or y = (9-11)/10",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $5y^2 - 9y - 2 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 puts $b = -9$ at the front of the top, where the formula has $-b$.",
                  "reason": "A sign lost: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, and $-b = 9$."
                },
                {
                  "step": "Line 4 written right is $y = \\dfrac{9 \\pm 11}{10}$.",
                  "reason": "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, with $-b = 9$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $2y^2 - 7y + 5 = 0$, and write that line right.",
            "given": [
              "$2y^2 - 7y + 5 = 0$",
              "$a = 2$, $b = -7$, $c = 5$",
              "$y = \\dfrac{7 \\pm \\sqrt{49 - 40}}{4}$",
              "$y = \\dfrac{7 \\pm (7 - \\sqrt{40})}{4}$",
              "$y = \\dfrac{14 - \\sqrt{40}}{4}$ or $y = \\dfrac{\\sqrt{40}}{4}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $2y^2 - 7y + 5 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 takes the square root of $49 - 40$ as $\\sqrt{49} - \\sqrt{40}$.",
                "reason": "A root taken term by term over a sum: the square root of a difference is not the difference of the square roots."
              },
              {
                "step": "Line 4 written right is $y = \\dfrac{7 \\pm 3}{4}$.",
                "reason": "Order of operations, from arithmetic: $49 - 40 = 9$ first, and $\\sqrt{9} = 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $4z^2 - 11z = -6$, and write that line right.",
              "given": [
                "$4z^2 - 11z = -6$",
                "$4z^2 - 11z + 6 = 0$",
                "$a = 4$, $b = -11$, $c = 6$",
                "$z = \\dfrac{11 \\pm \\sqrt{121 - 96}}{8}$",
                "$z = \\dfrac{11 \\pm (11 - \\sqrt{96})}{8}$",
                "$z = \\dfrac{22 - \\sqrt{96}}{8}$ or $z = \\dfrac{\\sqrt{96}}{8}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: z = (11+5)/8 or z = (11-5)/8",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $4z^2 - 11z = -6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 takes the square root of $121 - 96$ as $\\sqrt{121} - \\sqrt{96}$.",
                  "reason": "A root taken term by term over a sum: the square root of a difference is not the difference of the square roots."
                },
                {
                  "step": "Line 5 written right is $z = \\dfrac{11 \\pm 5}{8}$.",
                  "reason": "Order of operations, from arithmetic: $121 - 96 = 25$ first, and $\\sqrt{25} = 5$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $5x^2 + 13x + 8 = 0$, and write that line right.",
              "given": [
                "$5x^2 + 13x + 8 = 0$",
                "$a = 5$, $b = 13$, $c = 8$",
                "$x = \\dfrac{-13 \\pm \\sqrt{169 - 160}}{10}$",
                "$x = \\dfrac{-13 \\pm (13 - \\sqrt{160})}{10}$",
                "$x = -\\dfrac{\\sqrt{160}}{10}$ or $x = \\dfrac{-26 + \\sqrt{160}}{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = (-13+3)/10 or x = (-13-3)/10",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $5x^2 + 13x + 8 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 takes the square root of $169 - 160$ as $\\sqrt{169} - \\sqrt{160}$.",
                  "reason": "A root taken term by term over a sum: the square root of a difference is not the difference of the square roots."
                },
                {
                  "step": "Line 4 written right is $x = \\dfrac{-13 \\pm 3}{10}$.",
                  "reason": "Order of operations, from arithmetic: $169 - 160 = 9$ first, and $\\sqrt{9} = 3$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2y^2 - 13y = -11$, and write that line right.",
              "given": [
                "$2y^2 - 13y = -11$",
                "$2y^2 - 13y + 11 = 0$",
                "$a = 2$, $b = -13$, $c = 11$",
                "$y = \\dfrac{13 \\pm \\sqrt{169 - 88}}{4}$",
                "$y = \\dfrac{13 \\pm (13 - \\sqrt{88})}{4}$",
                "$y = \\dfrac{26 - \\sqrt{88}}{4}$ or $y = \\dfrac{\\sqrt{88}}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = (13+9)/4 or y = (13-9)/4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2y^2 - 13y = -11$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 takes the square root of $169 - 88$ as $\\sqrt{169} - \\sqrt{88}$.",
                  "reason": "A root taken term by term over a sum: the square root of a difference is not the difference of the square roots."
                },
                {
                  "step": "Line 5 written right is $y = \\dfrac{13 \\pm 9}{4}$.",
                  "reason": "Order of operations, from arithmetic: $169 - 88 = 81$ first, and $\\sqrt{81} = 9$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t146-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the product of a number $x$ and 9 more than the number is 10.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the product of a number $x$ and 9 more than the number is 10.",
                "reason": "This is the problem as given."
              },
              {
                "step": "9 more than the number is $x + 9$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "The product of the number and that amount is $x(x + 9)$.",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the bracket keeps the second amount whole."
              },
              {
                "step": "$x(x + 9) = 10$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the product of a number $x$ and 3 less than the number is 14.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x-3) = 14",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the product of a number $x$ and 3 less than the number is 14.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "3 less than the number is $x - 3$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The product of the number and that amount is $x(x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the bracket keeps the second amount whole."
                },
                {
                  "step": "$x(x - 3) = 14$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the product of a number $x$ and 4 less than 3 times the number is 260.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(3*x-4) = 260",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the product of a number $x$ and 4 less than 3 times the number is 260.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "4 less than 3 times the number is $3x - 4$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The product of the number and that amount is $x(3x - 4)$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the bracket keeps the second amount whole."
                },
                {
                  "step": "$x(3x - 4) = 260$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the product of two consecutive whole numbers, the smaller $x$, is 156.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x+1) = 156",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the product of two consecutive whole numbers, the smaller $x$, is 156.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The larger number is $x + 1$.",
                  "reason": "Writing a sentence as an equation: consecutive whole numbers differ by $1$."
                },
                {
                  "step": "The product of the two numbers is $x(x + 1)$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two amounts, and the bracket keeps the second amount whole."
                },
                {
                  "step": "$x(x + 1) = 156$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: a rectangle has width $x$, its length is 9 more than its width, and its area is 36.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: a rectangle has width $x$, its length is 9 more than its width, and its area is 36.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The length is $x + 9$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "The area is $x(x + 9)$.",
                "reason": "Area of a rectangle is the product of its sides, from arithmetic."
              },
              {
                "step": "$x(x + 9) = 36$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: a rectangle has width $x$, its length is 4 more than 3 times its width, and its area is 20.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(3*x+4) = 20",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: a rectangle has width $x$, its length is 4 more than 3 times its width, and its area is 20.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The length is $3x + 4$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The area is $x(3x + 4)$.",
                  "reason": "Area of a rectangle is the product of its sides, from arithmetic."
                },
                {
                  "step": "$x(3x + 4) = 20$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: a rectangle's length is 14 less than 3 times its width $x$, and its area is 325.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(3*x-14) = 325",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: a rectangle's length is 14 less than 3 times its width $x$, and its area is 325.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The length is $3x - 14$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The area is $x(3x - 14)$.",
                  "reason": "Area of a rectangle is the product of its sides, from arithmetic."
                },
                {
                  "step": "$x(3x - 14) = 325$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: a rectangle has length $x$, its width is 18 less than its length, and its area is 544.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x-18) = 544",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: a rectangle has length $x$, its width is 18 less than its length, and its area is 544.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The width is $x - 18$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The area is $x(x - 18)$.",
                  "reason": "Area of a rectangle is the product of its sides, from arithmetic."
                },
                {
                  "step": "$x(x - 18) = 544$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
      "id": "t146-p1",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, the solutions of $ax^2 + bx + c = 0$ are $x = \\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a}$ and $x = \\dfrac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
      "idea": "Write the quadratic in completed-square form, leave the square alone on one side, and take both square roots.",
      "lines": [
        {
          "line": "The sum $ax^2 + bx + c$ equals $a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$.",
          "reason": "Completing the square in letters, with $a \\ne 0$."
        },
        {
          "line": "So the equation is $a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a} = 0$.",
          "reason": "Line 1: the left side is replaced by the expression equal to it."
        },
        {
          "line": "So $a\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2}{4a} - c$.",
          "reason": "Adding the same number to both sides: $c - \\dfrac{b^2}{4a}$ is taken from each side."
        },
        {
          "line": "So $\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2}{4a^2} - \\dfrac{c}{a}$.",
          "reason": "Dividing both sides by a nonzero number, $a$."
        },
        {
          "line": "So $\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2 - 4ac}{4a^2}$.",
          "reason": "The general addition formula, from arithmetic: $\\dfrac{c}{a} = \\dfrac{4ac}{4a^2}$ over the common denominator $4a^2$."
        },
        {
          "line": "The top of the right side of line 5, $b^2 - 4ac$, equals $\\left(\\sqrt{b^2 - 4ac}\\right)^2$.",
          "reason": "The square of a square root is the number under it."
        },
        {
          "line": "The bottom of the right side of line 5, $4a^2$, equals $(2a)^2$.",
          "reason": "Power of a product."
        },
        {
          "line": "So the right side of line 5 equals $\\left(\\dfrac{\\sqrt{b^2 - 4ac}}{2a}\\right)^2$.",
          "reason": "Power of a quotient, with lines 6 and 7."
        },
        {
          "line": "So $x + \\dfrac{b}{2a} = \\dfrac{\\sqrt{b^2 - 4ac}}{2a}$ or $x + \\dfrac{b}{2a} = -\\dfrac{\\sqrt{b^2 - 4ac}}{2a}$.",
          "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $x + \\dfrac{b}{2a}$ in place of $x$ and $\\dfrac{\\sqrt{b^2 - 4ac}}{2a}$ in place of $a$, by lines 5 and 8."
        },
        {
          "line": "So $x = -\\dfrac{b}{2a} + \\dfrac{\\sqrt{b^2 - 4ac}}{2a}$ or $x = -\\dfrac{b}{2a} - \\dfrac{\\sqrt{b^2 - 4ac}}{2a}$.",
          "reason": "Adding the same number to both sides: $\\dfrac{b}{2a}$ is taken from each side."
        },
        {
          "line": "So $x = \\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a}$ or $x = \\dfrac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
          "reason": "Adding fractions with the same denominator, from arithmetic."
        }
      ]
    },
    {
      "id": "t146-p2",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, the two roots of $ax^2 + bx + c = 0$ have sum $-\\dfrac{b}{a}$ and product $\\dfrac{c}{a}$.",
      "idea": "Add and multiply the two roots the quadratic formula gives: the square roots cancel in the sum, and the product is a difference of squares.",
      "lines": [
        {
          "line": "The roots are $r = \\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a}$ and $s = \\dfrac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
          "reason": "Quadratic formula."
        },
        {
          "line": "So $r + s = \\dfrac{-b + \\sqrt{b^2 - 4ac} - b - \\sqrt{b^2 - 4ac}}{2a}$.",
          "reason": "Adding fractions with the same denominator, from arithmetic."
        },
        {
          "line": "So $r + s = \\dfrac{-2b}{2a}$.",
          "reason": "Collecting like terms: the square roots cancel."
        },
        {
          "line": "So $r + s = -\\dfrac{b}{a}$.",
          "reason": "Cancelling a common factor, $2$."
        },
        {
          "line": "The product $rs$ equals $\\dfrac{\\left(-b + \\sqrt{b^2 - 4ac}\\right)\\left(-b - \\sqrt{b^2 - 4ac}\\right)}{4a^2}$.",
          "reason": "The product formula, from arithmetic."
        },
        {
          "line": "So $rs = \\dfrac{(-b)^2 - \\left(\\sqrt{b^2 - 4ac}\\right)^2}{4a^2}$.",
          "reason": "Difference of squares on the top."
        },
        {
          "line": "So $rs = \\dfrac{b^2 - \\left(\\sqrt{b^2 - 4ac}\\right)^2}{4a^2}$.",
          "reason": "Sign of a power of a negative number: $(-b)^2 = b^2$."
        },
        {
          "line": "So $rs = \\dfrac{b^2 - (b^2 - 4ac)}{4a^2}$.",
          "reason": "The square of a square root is the number under it."
        },
        {
          "line": "So $rs = \\dfrac{b^2 - b^2 + 4ac}{4a^2}$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "So $rs = \\dfrac{4ac}{4a^2}$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "So $rs = \\dfrac{c}{a}$.",
          "reason": "Cancelling a common factor, $4a$."
        }
      ]
    },
    {
      "id": "t146-p3",
      "method": "direct proof",
      "statement": "For real numbers $a$, $b$ and $c$ with $a \\ne 0$, if $r + si$ with $r$, $s$ real and $s \\ne 0$ is a root of $ax^2 + bx + c = 0$, then $r - si$ is the other root.",
      "idea": "A non-real root forces a negative discriminant, and then the formula gives two roots with one real part and opposite imaginary parts.",
      "lines": [
        {
          "line": "The roots are $\\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a}$ and $\\dfrac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
          "reason": "Quadratic formula."
        },
        {
          "line": "When $b^2 - 4ac \\ge 0$ both roots are real numbers.",
          "reason": "Positive square root, from arithmetic: a nonnegative real number has a real square root, and sums and quotients of real numbers are real."
        },
        {
          "line": "So $b^2 - 4ac < 0$.",
          "reason": "Line 2: the root $r + si$ is not real, since $s \\ne 0$."
        },
        {
          "line": "So $\\sqrt{b^2 - 4ac} = i\\sqrt{4ac - b^2}$, with $4ac - b^2$ positive.",
          "reason": "Square root of a negative number: $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$."
        },
        {
          "line": "So the roots are $-\\dfrac{b}{2a} + \\dfrac{\\sqrt{4ac - b^2}}{2a}i$ and $-\\dfrac{b}{2a} - \\dfrac{\\sqrt{4ac - b^2}}{2a}i$.",
          "reason": "Lines 1 and 4: each term of the top is divided by $2a$."
        },
        {
          "line": "These two roots are complex conjugates of each other.",
          "reason": "Complex conjugate: one real part, and imaginary parts of opposite sign."
        },
        {
          "line": "So $r + si$ is one of them, and $r - si$ is the other.",
          "reason": "Two complex numbers are equal when their real parts and their imaginary parts are equal, and the conjugate of $r + si$ is $r - si$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t146-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$ with $a \\ne 0$, and every number $x$, $ax^2 + bx + c = 0$ exactly when $b^2 - 4ac = (2ax + b)^2$. Facts it may use: square of a binomial, subtracting a bracket changes every sign in it, collecting like terms, taking out a common factor, adding the same number to both sides, zero-product property.",
      "check": {
        "proof": [
          {
            "line": "The square $(2ax + b)^2$ equals $4a^2x^2 + 4abx + b^2$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "So $b^2 - 4ac - (2ax + b)^2 = b^2 - 4ac - 4a^2x^2 - 4abx - b^2$.",
            "reason": "Subtracting a bracket changes every sign in it, with line 1."
          },
          {
            "line": "So $b^2 - 4ac - (2ax + b)^2 = -4a^2x^2 - 4abx - 4ac$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "The right side of line 3 equals $-4a(ax^2 + bx + c)$.",
            "reason": "Taking out a common factor, $-4a$."
          },
          {
            "line": "So $b^2 - 4ac = (2ax + b)^2$ exactly when $-4a(ax^2 + bx + c) = 0$.",
            "reason": "Adding the same number to both sides: two numbers are equal exactly when their difference is $0$, with lines 3 and 4."
          },
          {
            "line": "Since $-4a \\ne 0$, $-4a(ax^2 + bx + c) = 0$ exactly when $ax^2 + bx + c = 0$.",
            "reason": "Zero-product property: $a$ is not $0$."
          },
          {
            "line": "Therefore $ax^2 + bx + c = 0$ exactly when $b^2 - 4ac = (2ax + b)^2$.",
            "reason": "Lines 5 and 6."
          }
        ]
      }
    },
    {
      "id": "t146-s2",
      "method": "proof of the contrapositive",
      "statement": "Prove that for real numbers $a$, $b$ and $c$ with $a \\ne 0$, if $b^2 - 4ac < 0$ then $ax^2 + bx + c \\ne 0$ for every real number $x$. Facts it may use: multiplying both sides by the same number, adding the same number to both sides, square of a binomial, sign of a power of a negative number.",
      "check": {
        "proof": [
          {
            "line": "Suppose a real number $x$ has $ax^2 + bx + c = 0$; the contrapositive asks to show $b^2 - 4ac \\ge 0$.",
            "reason": "Proof of the contrapositive: the statement holds exactly when its contrapositive holds."
          },
          {
            "line": "Then $4a^2x^2 + 4abx + 4ac = 0$.",
            "reason": "Multiplying both sides by the same number, $4a$."
          },
          {
            "line": "So $4a^2x^2 + 4abx + b^2 = b^2 - 4ac$.",
            "reason": "Adding the same number to both sides: $b^2 - 4ac$ is added to each side."
          },
          {
            "line": "So $(2ax + b)^2 = b^2 - 4ac$.",
            "reason": "Square of a binomial, read from right to left."
          },
          {
            "line": "The number $2ax + b$ is real, so $(2ax + b)^2 \\ge 0$.",
            "reason": "Sign of a power of a negative number: an even power of a nonzero real number is positive, and $0^2 = 0$."
          },
          {
            "line": "So $b^2 - 4ac \\ge 0$, and when $b^2 - 4ac < 0$ no real $x$ has $ax^2 + bx + c = 0$.",
            "reason": "Lines 4 and 5, and the contrapositive of line 1."
          }
        ]
      }
    },
    {
      "id": "t146-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$, with $a \\ne 0$ and $c \\ne 0$, $\\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a} = \\dfrac{2c}{-b - \\sqrt{b^2 - 4ac}}$, so the roots of $ax^2 + bx + c = 0$ can be written with $2c$ on top. Facts it may use: difference of squares, sign of a power of a negative number, the square of a square root is the number under it, subtracting a bracket changes every sign in it, collecting like terms, zero-product property, cancelling a common factor.",
      "check": {
        "proof": [
          {
            "line": "The product $\\left(-b + \\sqrt{b^2 - 4ac}\\right)\\left(-b - \\sqrt{b^2 - 4ac}\\right)$ equals $(-b)^2 - \\left(\\sqrt{b^2 - 4ac}\\right)^2$.",
            "reason": "Difference of squares."
          },
          {
            "line": "So that product equals $b^2 - \\left(\\sqrt{b^2 - 4ac}\\right)^2$.",
            "reason": "Sign of a power of a negative number: $(-b)^2 = b^2$."
          },
          {
            "line": "So that product equals $b^2 - (b^2 - 4ac)$.",
            "reason": "The square of a square root is the number under it."
          },
          {
            "line": "So that product equals $b^2 - b^2 + 4ac$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "So that product equals $4ac$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So $-b - \\sqrt{b^2 - 4ac} \\ne 0$.",
            "reason": "Zero-product property: $4ac \\ne 0$ because $a \\ne 0$ and $c \\ne 0$."
          },
          {
            "line": "So $\\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a} = \\dfrac{\\left(-b + \\sqrt{b^2 - 4ac}\\right)\\left(-b - \\sqrt{b^2 - 4ac}\\right)}{2a\\left(-b - \\sqrt{b^2 - 4ac}\\right)}$.",
            "reason": "Cancelling a common factor, read backwards: top and bottom are multiplied by the nonzero number of line 6."
          },
          {
            "line": "So $\\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a} = \\dfrac{4ac}{2a\\left(-b - \\sqrt{b^2 - 4ac}\\right)}$.",
            "reason": "Line 5: the top is replaced by the number equal to it."
          },
          {
            "line": "Therefore $\\dfrac{-b + \\sqrt{b^2 - 4ac}}{2a} = \\dfrac{2c}{-b - \\sqrt{b^2 - 4ac}}$.",
            "reason": "Cancelling a common factor, $2a$."
          }
        ]
      }
    },
    {
      "id": "t146-s4",
      "method": "direct proof",
      "statement": "Prove that for rational numbers $a$, $b$, $c$, $p$ and $q$ with $a \\ne 0$, and a whole number $n$ whose square root is irrational, if $p + q\\sqrt{n}$ is a root of $ax^2 + bx + c = 0$ then so is $p - q\\sqrt{n}$. Facts it may use: square of a binomial, the square of a square root is the number under it, the distributive law, collecting like terms, equal rational parts and equal irrational parts, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "The equation gives $a(p + q\\sqrt{n})^2 + b(p + q\\sqrt{n}) + c = 0$.",
            "reason": "Substituting a value: $p + q\\sqrt{n}$ is a root."
          },
          {
            "line": "So $a(p^2 + 2pq\\sqrt{n} + q^2(\\sqrt{n})^2) + b(p + q\\sqrt{n}) + c = 0$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "So $a(p^2 + 2pq\\sqrt{n} + q^2n) + b(p + q\\sqrt{n}) + c = 0$.",
            "reason": "The square of a square root is the number under it."
          },
          {
            "line": "So $ap^2 + 2apq\\sqrt{n} + aq^2n + bp + bq\\sqrt{n} + c = 0$.",
            "reason": "The distributive law."
          },
          {
            "line": "So $(ap^2 + aq^2n + bp + c) + (2apq + bq)\\sqrt{n} = 0$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So $ap^2 + aq^2n + bp + c = 0$ and $2apq + bq = 0$.",
            "reason": "Equal rational parts and equal irrational parts: the two brackets are rational and $\\sqrt{n}$ is irrational, and $0 = 0 + 0\\sqrt{n}$."
          },
          {
            "line": "The sum $a(p - q\\sqrt{n})^2 + b(p - q\\sqrt{n}) + c$ equals $a(p^2 - 2pq\\sqrt{n} + q^2(\\sqrt{n})^2) + b(p - q\\sqrt{n}) + c$.",
            "reason": "Square of a binomial."
          },
          {
            "line": "So that sum equals $a(p^2 - 2pq\\sqrt{n} + q^2n) + b(p - q\\sqrt{n}) + c$.",
            "reason": "The square of a square root is the number under it."
          },
          {
            "line": "So that sum equals $ap^2 - 2apq\\sqrt{n} + aq^2n + bp - bq\\sqrt{n} + c$.",
            "reason": "The distributive law."
          },
          {
            "line": "So that sum equals $(ap^2 + aq^2n + bp + c) - (2apq + bq)\\sqrt{n}$.",
            "reason": "Collecting like terms."
          },
          {
            "line": "So that sum equals $0 - 0 \\cdot \\sqrt{n} = 0$.",
            "reason": "Substituting a value: the brackets are replaced by their values from line 6."
          },
          {
            "line": "Therefore $p - q\\sqrt{n}$ is a root of $ax^2 + bx + c = 0$.",
            "reason": "Line 11: the equation holds at $p - q\\sqrt{n}$."
          }
        ]
      }
    }
  ]
}
