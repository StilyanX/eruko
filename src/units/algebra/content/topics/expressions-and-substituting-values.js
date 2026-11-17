export default {
  "number": 101,
  "title": "Expressions and substituting values",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "53-55, 105-106"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $3x^2 - 2x$ when $x = -4$.",
    "form": "Answer as an integer.",
    "answer": "56",
    "solution": [
      "Evaluate $3x^2 - 2x$ when $x = -4$.",
      "$3x^2 - 2x = 3(-4)^2 - 2(-4)$",
      "$3(-4)^2 - 2(-4) = 3(16) - 2(-4)$",
      "$3(16) - 2(-4) = 48 + 8$",
      "$48 + 8 = 56$"
    ]
  },
  "ideas": [
    {
      "name": "Expressions",
      "concrete": "In $3x^2 + 7$ the letter $x$ stands for a number that is free to change, and the numbers $3$, $2$ and $7$ are fixed.",
      "general": "A **variable** is a letter that stands for a number and may take different values. A **constant** is a number with one fixed value. An **expression** is made of numbers and variables joined by additions, subtractions, multiplications, divisions, powers and roots. A **term** is a constant alone, or a constant times a power of one variable or of several. The **coefficient** of a term is the constant that multiplies its variables: a number written in front of a letter multiplies it, so $6x$ means $6$ times $x$."
    },
    {
      "name": "Substituting a value",
      "concrete": "With $5$ in place of $x$, the expression $2x + 1$ becomes $2(5) + 1 = 11$.",
      "general": "**Substituting a value** for a variable puts that value, in brackets, in every place where the variable stands. The expression is then worked out by the order of operations."
    },
    {
      "name": "Writing a sentence as an equation",
      "concrete": "The sentence \"the number $y$ is 4 less than 6 times $x$\" becomes $y = 6x - 4$.",
      "general": "**Writing a sentence as an equation** takes the sentence one phrase at a time. Each phrase for an operation becomes that operation, brackets keep together what the sentence treats as one amount, and the word \"is\" becomes the equals sign."
    },
    {
      "name": "The power binds before the coefficient",
      "concrete": "With $5$ in place of $x$, the term $3x^2$ is $3(5)^2 = 3(25) = 75$, and not $15^2 = 225$.",
      "general": "In a term $ax^n$ the power belongs to $x$ alone: $ax^n = a(x^n)$. The term $-x^n$ has the coefficient $-1$, so $-x^n = -(x^n)$."
    }
  ],
  "kinds": [
    {
      "id": "t101-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $2x^2 + 5x$ when $x = 3$.",
            "lines": [
              {
                "step": "$2x^2 + 5x = 2(3)^2 + 5(3)$",
                "reason": "Substituting a value: the number $3$ goes, in brackets, in each place where $x$ stands."
              },
              {
                "step": "$2(3)^2 + 5(3) = 2(9) + 5(3)$",
                "reason": "The power binds before the coefficient, so each power is worked out first and its coefficient is left as it is."
              },
              {
                "step": "$2(9) + 5(3) = 18 + 15$",
                "reason": "The order of operations puts products before sums and differences."
              },
              {
                "step": "$18 + 15 = 33$",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $4x^2 - 3x$ when $x = 5$.",
              "form": "Answer as an integer.",
              "answer": "85",
              "lines": [
                {
                  "step": "$4x^2 - 3x = 4(5)^2 - 3(5)$",
                  "reason": "Substituting a value: the number $5$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$4(5)^2 - 3(5) = 4(25) - 3(5)$",
                  "reason": "The power binds before the coefficient, so each power is worked out first and its coefficient is left as it is."
                },
                {
                  "step": "$4(25) - 3(5) = 100 - 15$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$100 - 15 = 85$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $x^3 - 6x + 4$ when $x = 2$.",
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "$x^3 - 6x + 4 = (2)^3 - 6(2) + 4$",
                  "reason": "Substituting a value: the number $2$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$(2)^3 - 6(2) + 4 = 8 - 6(2) + 4$",
                  "reason": "The power binds before the coefficient, so each power is worked out first and its coefficient is left as it is."
                },
                {
                  "step": "$8 - 6(2) + 4 = 8 - 12 + 4$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$8 - 12 + 4 = 0$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $7x - 2x^2$ when $x = 4$.",
              "form": "Answer as an integer.",
              "answer": "-4",
              "lines": [
                {
                  "step": "$7x - 2x^2 = 7(4) - 2(4)^2$",
                  "reason": "Substituting a value: the number $4$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$7(4) - 2(4)^2 = 7(4) - 2(16)$",
                  "reason": "The power binds before the coefficient, so each power is worked out first and its coefficient is left as it is."
                },
                {
                  "step": "$7(4) - 2(16) = 28 - 32$",
                  "reason": "The order of operations puts products before sums and differences."
                },
                {
                  "step": "$28 - 32 = -4$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $2x^2 + 7x$ when $x = -3$.",
            "lines": [
              {
                "step": "$2x^2 + 7x = 2(-3)^2 + 7(-3)$",
                "reason": "Substituting a value: the negative number $-3$ goes, in brackets, in each place where $x$ stands."
              },
              {
                "step": "$2(-3)^2 + 7(-3) = 2(9) + 7(-3)$",
                "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
              },
              {
                "step": "$2(9) + 7(-3) = 18 - 21$",
                "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
              },
              {
                "step": "$18 - 21 = -3$",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $5x^2 - 4x$ when $x = -2$.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "$5x^2 - 4x = 5(-2)^2 - 4(-2)$",
                  "reason": "Substituting a value: the negative number $-2$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$5(-2)^2 - 4(-2) = 5(4) - 4(-2)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$5(4) - 4(-2) = 20 + 8$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$20 + 8 = 28$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $-x^2 + 6x + 10$ when $x = -5$.",
              "form": "Answer as an integer.",
              "answer": "-45",
              "lines": [
                {
                  "step": "$-x^2 + 6x + 10 = -(-5)^2 + 6(-5) + 10$",
                  "reason": "Substituting a value: the negative number $-5$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$-(-5)^2 + 6(-5) + 10 = -(25) + 6(-5) + 10$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$-(25) + 6(-5) + 10 = -25 - 30 + 10$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$-25 - 30 + 10 = -45$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $9 - 2x^2 - 3x$ when $x = -4$.",
              "form": "Answer as an integer.",
              "answer": "-11",
              "lines": [
                {
                  "step": "$9 - 2x^2 - 3x = 9 - 2(-4)^2 - 3(-4)$",
                  "reason": "Substituting a value: the negative number $-4$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$9 - 2(-4)^2 - 3(-4) = 9 - 2(16) - 3(-4)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$9 - 2(16) - 3(-4) = 9 - 32 + 12$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$9 - 32 + 12 = -11$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sqrt{4x^2 + 9x}$ when $x = -3$.",
            "lines": [
              {
                "step": "$\\sqrt{4x^2 + 9x} = \\sqrt{4(-3)^2 + 9(-3)}$",
                "reason": "Substituting a value: the number $-3$ goes, in brackets, in each place where $x$ stands."
              },
              {
                "step": "$\\sqrt{4(-3)^2 + 9(-3)} = \\sqrt{4(9) + 9(-3)}$",
                "reason": "The root sign groups what stands under it as brackets do, so the order of operations works under it first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
              },
              {
                "step": "$\\sqrt{4(9) + 9(-3)} = \\sqrt{36 - 27}$",
                "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
              },
              {
                "step": "$\\sqrt{36 - 27} = \\sqrt{9}$",
                "reason": "The order of operations ends under the root sign on the sum or difference."
              },
              {
                "step": "$\\sqrt{9} = 3$",
                "reason": "The definition of the positive square root: $3^2 = 9$ and $3$ is not negative."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sqrt{2x^2 + 7}$ when $x = 3$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "$\\sqrt{2x^2 + 7} = \\sqrt{2(3)^2 + 7}$",
                  "reason": "Substituting a value: the number $3$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$\\sqrt{2(3)^2 + 7} = \\sqrt{2(9) + 7}$",
                  "reason": "The root sign groups what stands under it as brackets do, so the order of operations works under it first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$\\sqrt{2(9) + 7} = \\sqrt{18 + 7}$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$\\sqrt{18 + 7} = \\sqrt{25}$",
                  "reason": "The order of operations ends under the root sign on the sum or difference."
                },
                {
                  "step": "$\\sqrt{25} = 5$",
                  "reason": "The definition of the positive square root: $5^2 = 25$ and $5$ is not negative."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sqrt{x^2 - 6x}$ when $x = -2$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "$\\sqrt{x^2 - 6x} = \\sqrt{(-2)^2 - 6(-2)}$",
                  "reason": "Substituting a value: the number $-2$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$\\sqrt{(-2)^2 - 6(-2)} = \\sqrt{4 - 6(-2)}$",
                  "reason": "The root sign groups what stands under it as brackets do, so the order of operations works under it first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$\\sqrt{4 - 6(-2)} = \\sqrt{4 + 12}$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$\\sqrt{4 + 12} = \\sqrt{16}$",
                  "reason": "The order of operations ends under the root sign on the sum or difference."
                },
                {
                  "step": "$\\sqrt{16} = 4$",
                  "reason": "The definition of the positive square root: $4^2 = 16$ and $4$ is not negative."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sqrt{100 - 4x^2}$ when $x = 3$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "$\\sqrt{100 - 4x^2} = \\sqrt{100 - 4(3)^2}$",
                  "reason": "Substituting a value: the number $3$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$\\sqrt{100 - 4(3)^2} = \\sqrt{100 - 4(9)}$",
                  "reason": "The root sign groups what stands under it as brackets do, so the order of operations works under it first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$\\sqrt{100 - 4(9)} = \\sqrt{100 - 36}$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$\\sqrt{100 - 36} = \\sqrt{64}$",
                  "reason": "The order of operations ends under the root sign on the sum or difference."
                },
                {
                  "step": "$\\sqrt{64} = 8$",
                  "reason": "The definition of the positive square root: $8^2 = 64$ and $8$ is not negative."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{5x + 1}{x^2 + 3}$ when $x = -3$.",
            "lines": [
              {
                "step": "$\\dfrac{5x + 1}{x^2 + 3} = \\dfrac{5(-3) + 1}{(-3)^2 + 3}$",
                "reason": "Substituting a value: the number $-3$ goes, in brackets, in each place where $x$ stands."
              },
              {
                "step": "$\\dfrac{5(-3) + 1}{(-3)^2 + 3} = \\dfrac{5(-3) + 1}{9 + 3}$",
                "reason": "The fraction bar groups the top and the bottom as brackets do, so the order of operations works in each first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
              },
              {
                "step": "$\\dfrac{5(-3) + 1}{9 + 3} = \\dfrac{-15 + 1}{9 + 3}$",
                "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
              },
              {
                "step": "$\\dfrac{-15 + 1}{9 + 3} = \\dfrac{-14}{12}$",
                "reason": "The order of operations ends in the top and in the bottom on the sum or difference."
              },
              {
                "step": "$\\dfrac{-14}{12} = -\\dfrac{7}{6}$",
                "reason": "Reducing to lowest terms: the top and the bottom are both divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{x^2 + 6}{4x}$ when $x = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/4",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 + 6}{4x} = \\dfrac{(2)^2 + 6}{4(2)}$",
                  "reason": "Substituting a value: the number $2$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$\\dfrac{(2)^2 + 6}{4(2)} = \\dfrac{4 + 6}{4(2)}$",
                  "reason": "The fraction bar groups the top and the bottom as brackets do, so the order of operations works in each first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$\\dfrac{4 + 6}{4(2)} = \\dfrac{4 + 6}{8}$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$\\dfrac{4 + 6}{8} = \\dfrac{10}{8}$",
                  "reason": "The order of operations ends in the top and in the bottom on the sum or difference."
                },
                {
                  "step": "$\\dfrac{10}{8} = \\dfrac{5}{4}$",
                  "reason": "Reducing to lowest terms: the top and the bottom are both divided by $2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{5x - 1}{x^2 - 3}$ when $x = 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/3",
              "lines": [
                {
                  "step": "$\\dfrac{5x - 1}{x^2 - 3} = \\dfrac{5(3) - 1}{(3)^2 - 3}$",
                  "reason": "Substituting a value: the number $3$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$\\dfrac{5(3) - 1}{(3)^2 - 3} = \\dfrac{5(3) - 1}{9 - 3}$",
                  "reason": "The fraction bar groups the top and the bottom as brackets do, so the order of operations works in each first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$\\dfrac{5(3) - 1}{9 - 3} = \\dfrac{15 - 1}{9 - 3}$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$\\dfrac{15 - 1}{9 - 3} = \\dfrac{14}{6}$",
                  "reason": "The order of operations ends in the top and in the bottom on the sum or difference."
                },
                {
                  "step": "$\\dfrac{14}{6} = \\dfrac{7}{3}$",
                  "reason": "Reducing to lowest terms: the top and the bottom are both divided by $2$."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{x^2 - 4x}{2x + 9}$ when $x = -3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "$\\dfrac{x^2 - 4x}{2x + 9} = \\dfrac{(-3)^2 - 4(-3)}{2(-3) + 9}$",
                  "reason": "Substituting a value: the number $-3$ goes, in brackets, in each place where $x$ stands."
                },
                {
                  "step": "$\\dfrac{(-3)^2 - 4(-3)}{2(-3) + 9} = \\dfrac{9 - 4(-3)}{2(-3) + 9}$",
                  "reason": "The fraction bar groups the top and the bottom as brackets do, so the order of operations works in each first. The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$\\dfrac{9 - 4(-3)}{2(-3) + 9} = \\dfrac{9 + 12}{-6 + 9}$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$\\dfrac{9 + 12}{-6 + 9} = \\dfrac{21}{3}$",
                  "reason": "The order of operations ends in the top and in the bottom on the sum or difference."
                },
                {
                  "step": "$\\dfrac{21}{3} = 7$",
                  "reason": "Reducing to lowest terms: the top and the bottom are both divided by $3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t101-k2",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $2xy + y^2$ when $x = 5$ and $y = -3$.",
            "lines": [
              {
                "step": "$2xy + y^2 = 2(5)(-3) + (-3)^2$",
                "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
              },
              {
                "step": "$2(5)(-3) + (-3)^2 = 2(5)(-3) + 9$",
                "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
              },
              {
                "step": "$2(5)(-3) + 9 = -30 + 9$",
                "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
              },
              {
                "step": "$-30 + 9 = -21$",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $x^2 - 3xy$ when $x = -2$ and $y = 4$.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "$x^2 - 3xy = (-2)^2 - 3(-2)(4)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$(-2)^2 - 3(-2)(4) = 4 - 3(-2)(4)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$4 - 3(-2)(4) = 4 + 24$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$4 + 24 = 28$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $x^2 + y^2 - 4y$ when $x = 3$ and $y = -5$.",
              "form": "Answer as an integer.",
              "answer": "54",
              "lines": [
                {
                  "step": "$x^2 + y^2 - 4y = (3)^2 + (-5)^2 - 4(-5)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$(3)^2 + (-5)^2 - 4(-5) = 9 + 25 - 4(-5)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$9 + 25 - 4(-5) = 9 + 25 + 20$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$9 + 25 + 20 = 54$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $3x^2y - 2x + z$ when $x = -1$, $y = 4$ and $z = -7$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "$3x^2y - 2x + z = 3(-1)^2(4) - 2(-1) + (-7)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$3(-1)^2(4) - 2(-1) + (-7) = 3(1)(4) - 2(-1) + (-7)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$3(1)(4) - 2(-1) + (-7) = 12 + 2 - 7$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$12 + 2 - 7 = 7$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $x^2 + xy$ when $x = \\dfrac{1}{2}$ and $y = 3$.",
            "lines": [
              {
                "step": "$x^2 + xy = \\left(\\dfrac{1}{2}\\right)^2 + \\left(\\dfrac{1}{2}\\right)(3)$",
                "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
              },
              {
                "step": "$\\left(\\dfrac{1}{2}\\right)^2 + \\left(\\dfrac{1}{2}\\right)(3) = \\dfrac{1}{4} + \\left(\\dfrac{1}{2}\\right)(3)$",
                "reason": "The power binds before the coefficient, and the product formula multiplies a fraction by itself."
              },
              {
                "step": "$\\dfrac{1}{4} + \\left(\\dfrac{1}{2}\\right)(3) = \\dfrac{1}{4} + \\dfrac{3}{2}$",
                "reason": "The order of operations puts products before sums and differences, and the product formula with the sign rules for products gives each product in lowest terms."
              },
              {
                "step": "$\\dfrac{1}{4} + \\dfrac{3}{2} = \\dfrac{1}{4} + \\dfrac{6}{4}$",
                "reason": "The rule for writing fractions with a common denominator: the common denominator is $4$."
              },
              {
                "step": "$\\dfrac{1}{4} + \\dfrac{6}{4} = \\dfrac{7}{4}$",
                "reason": "Fractions with the same denominator add by adding their numerators."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $2x^2 - y$ when $x = \\dfrac{2}{3}$ and $y = \\dfrac{1}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/18",
              "lines": [
                {
                  "step": "$2x^2 - y = 2\\left(\\dfrac{2}{3}\\right)^2 - \\left(\\dfrac{1}{2}\\right)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$2\\left(\\dfrac{2}{3}\\right)^2 - \\left(\\dfrac{1}{2}\\right) = 2\\left(\\dfrac{4}{9}\\right) - \\left(\\dfrac{1}{2}\\right)$",
                  "reason": "The power binds before the coefficient, and the product formula multiplies a fraction by itself."
                },
                {
                  "step": "$2\\left(\\dfrac{4}{9}\\right) - \\left(\\dfrac{1}{2}\\right) = \\dfrac{8}{9} - \\dfrac{1}{2}$",
                  "reason": "The order of operations puts products before sums and differences, and the product formula with the sign rules for products gives each product in lowest terms."
                },
                {
                  "step": "$\\dfrac{8}{9} - \\dfrac{1}{2} = \\dfrac{16}{18} - \\dfrac{9}{18}$",
                  "reason": "The rule for writing fractions with a common denominator: the common denominator is $18$."
                },
                {
                  "step": "$\\dfrac{16}{18} - \\dfrac{9}{18} = \\dfrac{7}{18}$",
                  "reason": "Fractions with the same denominator add by adding their numerators."
                }
              ]
            },
            {
              "prompt": "Evaluate $xy + y^2$ when $x = 5$ and $y = -\\dfrac{1}{3}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-14/9",
              "lines": [
                {
                  "step": "$xy + y^2 = (5)\\left(-\\dfrac{1}{3}\\right) + \\left(-\\dfrac{1}{3}\\right)^2$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$(5)\\left(-\\dfrac{1}{3}\\right) + \\left(-\\dfrac{1}{3}\\right)^2 = (5)\\left(-\\dfrac{1}{3}\\right) + \\dfrac{1}{9}$",
                  "reason": "The power binds before the coefficient, and the product formula multiplies a fraction by itself."
                },
                {
                  "step": "$(5)\\left(-\\dfrac{1}{3}\\right) + \\dfrac{1}{9} = -\\dfrac{5}{3} + \\dfrac{1}{9}$",
                  "reason": "The order of operations puts products before sums and differences, and the product formula with the sign rules for products gives each product in lowest terms."
                },
                {
                  "step": "$-\\dfrac{5}{3} + \\dfrac{1}{9} = -\\dfrac{15}{9} + \\dfrac{1}{9}$",
                  "reason": "The rule for writing fractions with a common denominator: the common denominator is $9$."
                },
                {
                  "step": "$-\\dfrac{15}{9} + \\dfrac{1}{9} = -\\dfrac{14}{9}$",
                  "reason": "Fractions with the same denominator add by adding their numerators."
                }
              ]
            },
            {
              "prompt": "Evaluate $x^2 + yz - x$ when $x = \\dfrac{3}{4}$, $y = -2$ and $z = \\dfrac{1}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-19/16",
              "lines": [
                {
                  "step": "$x^2 + yz - x = \\left(\\dfrac{3}{4}\\right)^2 + (-2)\\left(\\dfrac{1}{2}\\right) - \\left(\\dfrac{3}{4}\\right)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$\\left(\\dfrac{3}{4}\\right)^2 + (-2)\\left(\\dfrac{1}{2}\\right) - \\left(\\dfrac{3}{4}\\right) = \\dfrac{9}{16} + (-2)\\left(\\dfrac{1}{2}\\right) - \\left(\\dfrac{3}{4}\\right)$",
                  "reason": "The power binds before the coefficient, and the product formula multiplies a fraction by itself."
                },
                {
                  "step": "$\\dfrac{9}{16} + (-2)\\left(\\dfrac{1}{2}\\right) - \\left(\\dfrac{3}{4}\\right) = \\dfrac{9}{16} - 1 - \\dfrac{3}{4}$",
                  "reason": "The order of operations puts products before sums and differences, and the product formula with the sign rules for products gives each product in lowest terms."
                },
                {
                  "step": "$\\dfrac{9}{16} - 1 - \\dfrac{3}{4} = \\dfrac{9}{16} - \\dfrac{16}{16} - \\dfrac{12}{16}$",
                  "reason": "The rule for writing fractions with a common denominator: the common denominator is $16$."
                },
                {
                  "step": "$\\dfrac{9}{16} - \\dfrac{16}{16} - \\dfrac{12}{16} = -\\dfrac{19}{16}$",
                  "reason": "Fractions with the same denominator add by adding their numerators."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $xz - y^2$ when $x = 3$, $y = -4$ and $z = 2x - y$.",
            "lines": [
              {
                "step": "$z = 2(3) - (-4)$",
                "reason": "Substituting a value: in the expression that gives $z$, each letter is replaced by its own value, in brackets."
              },
              {
                "step": "$2(3) - (-4) = 6 + 4$",
                "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
              },
              {
                "step": "$6 + 4 = 10$",
                "reason": "The order of operations leaves the sum or difference for last, and it gives $z = 10$."
              },
              {
                "step": "$xz - y^2 = (3)(10) - (-4)^2$",
                "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the letter $z$ by the value found for it."
              },
              {
                "step": "$(3)(10) - (-4)^2 = (3)(10) - (16)$",
                "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
              },
              {
                "step": "$(3)(10) - (16) = 30 - 16$",
                "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
              },
              {
                "step": "$30 - 16 = 14$",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $z^2 + 4xy$ when $x = -2$, $y = 5$ and $z = 3x + y$.",
              "form": "Answer as an integer.",
              "answer": "-39",
              "lines": [
                {
                  "step": "$z = 3(-2) + (5)$",
                  "reason": "Substituting a value: in the expression that gives $z$, each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$3(-2) + (5) = -6 + 5$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$-6 + 5 = -1$",
                  "reason": "The order of operations leaves the sum or difference for last, and it gives $z = -1$."
                },
                {
                  "step": "$z^2 + 4xy = (-1)^2 + 4(-2)(5)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the letter $z$ by the value found for it."
                },
                {
                  "step": "$(-1)^2 + 4(-2)(5) = 1 + 4(-2)(5)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$1 + 4(-2)(5) = 1 - 40$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$1 - 40 = -39$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $2z - x^2y$ when $x = 4$, $y = -1$ and $z = x - 3y$.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "$z = (4) - 3(-1)$",
                  "reason": "Substituting a value: in the expression that gives $z$, each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$(4) - 3(-1) = 4 + 3$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$4 + 3 = 7$",
                  "reason": "The order of operations leaves the sum or difference for last, and it gives $z = 7$."
                },
                {
                  "step": "$2z - x^2y = 2(7) - (4)^2(-1)$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the letter $z$ by the value found for it."
                },
                {
                  "step": "$2(7) - (4)^2(-1) = 2(7) - (16)(-1)$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$2(7) - (16)(-1) = 14 + 16$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$14 + 16 = 30$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $x^2 + yz - 6$ when $x = -3$, $y = -2$ and $z = 2y - x$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "$z = 2(-2) - (-3)$",
                  "reason": "Substituting a value: in the expression that gives $z$, each letter is replaced by its own value, in brackets."
                },
                {
                  "step": "$2(-2) - (-3) = -4 + 3$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$-4 + 3 = -1$",
                  "reason": "The order of operations leaves the sum or difference for last, and it gives $z = -1$."
                },
                {
                  "step": "$x^2 + yz - 6 = (-3)^2 + (-2)(-1) - 6$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the letter $z$ by the value found for it."
                },
                {
                  "step": "$(-3)^2 + (-2)(-1) - 6 = 9 + (-2)(-1) - 6$",
                  "reason": "The power binds before the coefficient, and the sign rule for a product of two negative numbers makes the square of a negative number positive."
                },
                {
                  "step": "$9 + (-2)(-1) - 6 = 9 + 2 - 6$",
                  "reason": "The order of operations puts products before sums and differences, and the sign rules for products give each product its sign."
                },
                {
                  "step": "$9 + 2 - 6 = 5$",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t101-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the wrong line in this evaluation of $3x^2 + 4$ when $x = 5$, and write that line right.",
            "given": [
              "$3x^2 + 4 = 3(5)^2 + 4$",
              "$3(5)^2 + 4 = 15^2 + 4$",
              "$15^2 + 4 = 225 + 4$",
              "$225 + 4 = 229$"
            ],
            "lines": [
              {
                "step": "Line 1 puts $5$, in brackets, in each place where $x$ stands.",
                "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
              },
              {
                "step": "Line 2 multiplies the coefficient $3$ by $5$ first and then takes the square of the product $15$.",
                "reason": "The power binds before the coefficient: the term $3x^2$ means $3(x^2)$, so $5$ alone is squared."
              },
              {
                "step": "Line 2 written right is $3(5)^2 + 4 = 3(25) + 4$.",
                "reason": "The power is worked out first, and the coefficient $3$ is left as it is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the wrong line in this evaluation of $2x^2 + 3x$ when $x = 7$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*(7)^2+3*(7) = 2*(49)+3*(7)",
              "lines": [
                {
                  "step": "Line 1 puts $7$, in brackets, in each place where $x$ stands.",
                  "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
                },
                {
                  "step": "Line 2 multiplies the coefficient $2$ by $7$ first and then takes the square of the product $14$.",
                  "reason": "The power binds before the coefficient: the term $2x^2$ means $2(x^2)$, so $7$ alone is squared."
                },
                {
                  "step": "Line 2 written right is $2(7)^2 + 3(7) = 2(49) + 3(7)$.",
                  "reason": "The power is worked out first, and the coefficient $2$ is left as it is."
                }
              ],
              "given": [
                "$2x^2 + 3x = 2(7)^2 + 3(7)$",
                "$2(7)^2 + 3(7) = 14^2 + 3(7)$",
                "$14^2 + 3(7) = 196 + 3(7)$",
                "$196 + 3(7) = 196 + 21$",
                "$196 + 21 = 217$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $50 - 4x^2$ when $x = 3$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 50-4*(3)^2 = 50-4*(9)",
              "lines": [
                {
                  "step": "Line 1 puts $3$, in brackets, in each place where $x$ stands.",
                  "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
                },
                {
                  "step": "Line 2 multiplies the coefficient $4$ by $3$ first and then takes the square of the product $12$.",
                  "reason": "The power binds before the coefficient: the term $4x^2$ means $4(x^2)$, so $3$ alone is squared."
                },
                {
                  "step": "Line 2 written right is $50 - 4(3)^2 = 50 - 4(9)$.",
                  "reason": "The power is worked out first, and the coefficient $4$ is left as it is."
                }
              ],
              "given": [
                "$50 - 4x^2 = 50 - 4(3)^2$",
                "$50 - 4(3)^2 = 50 - 12^2$",
                "$50 - 12^2 = 50 - 144$",
                "$50 - 144 = -94$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $2x^3 + 1$ when $x = 3$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*(3)^3+1 = 2*(27)+1",
              "lines": [
                {
                  "step": "Line 1 puts $3$, in brackets, in each place where $x$ stands.",
                  "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
                },
                {
                  "step": "Line 2 multiplies the coefficient $2$ by $3$ first and then takes the cube of the product $6$.",
                  "reason": "The power binds before the coefficient: the term $2x^3$ means $2(x^3)$, so $3$ alone is cubed."
                },
                {
                  "step": "Line 2 written right is $2(3)^3 + 1 = 2(27) + 1$.",
                  "reason": "The power is worked out first, and the coefficient $2$ is left as it is."
                }
              ],
              "given": [
                "$2x^3 + 1 = 2(3)^3 + 1$",
                "$2(3)^3 + 1 = 6^3 + 1$",
                "$6^3 + 1 = 216 + 1$",
                "$216 + 1 = 217$"
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the wrong line in this evaluation of $-x^2 + 5$ when $x = -3$, and write that line right.",
            "given": [
              "$-x^2 + 5 = (-3)^2 + 5$",
              "$(-3)^2 + 5 = 9 + 5$",
              "$9 + 5 = 14$"
            ],
            "lines": [
              {
                "step": "Line 1 puts $-3$ in the place where $x$ stands and leaves out the minus sign in front of $x^2$.",
                "reason": "Substituting a value replaces the letter alone, and every other sign of the expression stays."
              },
              {
                "step": "The minus sign of the term is lost, as if it were the minus sign of the value.",
                "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
              },
              {
                "step": "Line 1 written right is $-x^2 + 5 = -(-3)^2 + 5$.",
                "reason": "The value $-3$ stands in brackets under the power, with the minus sign of the term in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the wrong line in this evaluation of $-x^2 + 4x$ when $x = -5$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: -x^2+4*x = -(-5)^2+4*(-5)",
              "lines": [
                {
                  "step": "Line 1 puts $-5$ in the place where $x$ stands and leaves out the minus sign in front of $x^2$.",
                  "reason": "Substituting a value replaces the letter alone, and every other sign of the expression stays."
                },
                {
                  "step": "The minus sign of the term is lost, as if it were the minus sign of the value.",
                  "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
                },
                {
                  "step": "Line 1 written right is $-x^2 + 4x = -(-5)^2 + 4(-5)$.",
                  "reason": "The value $-5$ stands in brackets under the power, with the minus sign of the term in front."
                }
              ],
              "given": [
                "$-x^2 + 4x = (-5)^2 + 4(-5)$",
                "$(-5)^2 + 4(-5) = 25 + 4(-5)$",
                "$25 + 4(-5) = 25 - 20$",
                "$25 - 20 = 5$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $30 - x^2$ when $x = -4$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 30-x^2 = 30-(-4)^2",
              "lines": [
                {
                  "step": "Line 1 puts $-4$ in the place where $x$ stands and leaves out the minus sign in front of $x^2$.",
                  "reason": "Substituting a value replaces the letter alone, and every other sign of the expression stays."
                },
                {
                  "step": "The minus sign of the term is lost, as if it were the minus sign of the value.",
                  "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
                },
                {
                  "step": "Line 1 written right is $30 - x^2 = 30 - (-4)^2$.",
                  "reason": "The value $-4$ stands in brackets under the power, with the minus sign of the term in front."
                }
              ],
              "given": [
                "$30 - x^2 = 30 + (-4)^2$",
                "$30 + (-4)^2 = 30 + 16$",
                "$30 + 16 = 46$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $-x^2 - 6$ when $x = -8$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: -x^2-6 = -(-8)^2-6",
              "lines": [
                {
                  "step": "Line 1 puts $-8$ in the place where $x$ stands and leaves out the minus sign in front of $x^2$.",
                  "reason": "Substituting a value replaces the letter alone, and every other sign of the expression stays."
                },
                {
                  "step": "The minus sign of the term is lost, as if it were the minus sign of the value.",
                  "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
                },
                {
                  "step": "Line 1 written right is $-x^2 - 6 = -(-8)^2 - 6$.",
                  "reason": "The value $-8$ stands in brackets under the power, with the minus sign of the term in front."
                }
              ],
              "given": [
                "$-x^2 - 6 = (-8)^2 - 6$",
                "$(-8)^2 - 6 = 64 - 6$",
                "$64 - 6 = 58$"
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the wrong line in this evaluation of $-x^2 + 20$ when $x = -4$, and write that line right.",
            "given": [
              "$-x^2 + 20 = -(-4)^2 + 20$",
              "$-(-4)^2 + 20 = 16 + 20$",
              "$16 + 20 = 36$"
            ],
            "lines": [
              {
                "step": "Line 1 puts $-4$, in brackets, in each place where $x$ stands and keeps the minus sign in front of the power.",
                "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
              },
              {
                "step": "Line 2 squares $-4$ and then drops the minus sign that stands in front of the power.",
                "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
              },
              {
                "step": "Line 2 written right is $-(-4)^2 + 20 = -(16) + 20$.",
                "reason": "The sign rule for a product of two negative numbers gives $(-4)^2 = 16$, and the coefficient $-1$ stays in front of it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the wrong line in this evaluation of $40 - x^2$ when $x = -6$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 40-(-6)^2 = 40-(36)",
              "lines": [
                {
                  "step": "Line 1 puts $-6$, in brackets, in each place where $x$ stands and keeps the minus sign in front of the power.",
                  "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
                },
                {
                  "step": "Line 2 squares $-6$ and then drops the minus sign that stands in front of the power.",
                  "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
                },
                {
                  "step": "Line 2 written right is $40 - (-6)^2 = 40 - (36)$.",
                  "reason": "The sign rule for a product of two negative numbers gives $(-6)^2 = 36$, and the coefficient $-1$ stays in front of it."
                }
              ],
              "given": [
                "$40 - x^2 = 40 - (-6)^2$",
                "$40 - (-6)^2 = 40 + 36$",
                "$40 + 36 = 76$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $-x^2 - 5x$ when $x = -2$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -(-2)^2-5*(-2) = -(4)-5*(-2)",
              "lines": [
                {
                  "step": "Line 1 puts $-2$, in brackets, in each place where $x$ stands and keeps the minus sign in front of the power.",
                  "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
                },
                {
                  "step": "Line 2 squares $-2$ and then drops the minus sign that stands in front of the power.",
                  "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
                },
                {
                  "step": "Line 2 written right is $-(-2)^2 - 5(-2) = -(4) - 5(-2)$.",
                  "reason": "The sign rule for a product of two negative numbers gives $(-2)^2 = 4$, and the coefficient $-1$ stays in front of it."
                }
              ],
              "given": [
                "$-x^2 - 5x = -(-2)^2 - 5(-2)$",
                "$-(-2)^2 - 5(-2) = 4 - 5(-2)$",
                "$4 - 5(-2) = 4 + 10$",
                "$4 + 10 = 14$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $-x^2 - 7$ when $x = -3$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -(-3)^2-7 = -(9)-7",
              "lines": [
                {
                  "step": "Line 1 puts $-3$, in brackets, in each place where $x$ stands and keeps the minus sign in front of the power.",
                  "reason": "Substituting a value changes nothing else in the expression, so line 1 is right."
                },
                {
                  "step": "Line 2 squares $-3$ and then drops the minus sign that stands in front of the power.",
                  "reason": "The power binds before the coefficient: the term $-x^2$ has the coefficient $-1$, which is outside the square."
                },
                {
                  "step": "Line 2 written right is $-(-3)^2 - 7 = -(9) - 7$.",
                  "reason": "The sign rule for a product of two negative numbers gives $(-3)^2 = 9$, and the coefficient $-1$ stays in front of it."
                }
              ],
              "given": [
                "$-x^2 - 7 = -(-3)^2 - 7$",
                "$-(-3)^2 - 7 = 9 - 7$",
                "$9 - 7 = 2$"
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the wrong line in this evaluation of $5y + y^2$ when $y = 3$, and write that line right.",
            "given": [
              "$5y + y^2 = 53 + (3)^2$",
              "$53 + (3)^2 = 53 + 9$",
              "$53 + 9 = 62$"
            ],
            "lines": [
              {
                "step": "Line 1 writes the digit $3$ after the digit $5$ and reads the term $5y$ as the number $53$.",
                "reason": "The definition of a coefficient: the term $5y$ is the product of $5$ and $y$."
              },
              {
                "step": "The letter $y$ stands for a number that the coefficient $5$ multiplies, and not for a digit of a longer number.",
                "reason": "Substituting a value puts the value, in brackets, in each place where the letter stands."
              },
              {
                "step": "Line 1 written right is $5y + y^2 = 5(3) + (3)^2$.",
                "reason": "The brackets keep $5(3)$ a product of $5$ and $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the wrong line in this evaluation of $x^2 + 7x$ when $x = 3$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: x^2+7*x = (3)^2+7*(3)",
              "lines": [
                {
                  "step": "Line 1 writes the digit $3$ after the digit $7$ and reads the term $7x$ as the number $73$.",
                  "reason": "The definition of a coefficient: the term $7x$ is the product of $7$ and $x$."
                },
                {
                  "step": "The letter $x$ stands for a number that the coefficient $7$ multiplies, and not for a digit of a longer number.",
                  "reason": "Substituting a value puts the value, in brackets, in each place where the letter stands."
                },
                {
                  "step": "Line 1 written right is $x^2 + 7x = (3)^2 + 7(3)$.",
                  "reason": "The brackets keep $7(3)$ a product of $7$ and $3$."
                }
              ],
              "given": [
                "$x^2 + 7x = (3)^2 + 73$",
                "$(3)^2 + 73 = 9 + 73$",
                "$9 + 73 = 82$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $4x + 3x^2$ when $x = 6$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 4*x+3*x^2 = 4*(6)+3*(6)^2",
              "lines": [
                {
                  "step": "Line 1 writes the digit $6$ after the digit $4$ and reads the term $4x$ as the number $46$.",
                  "reason": "The definition of a coefficient: the term $4x$ is the product of $4$ and $x$."
                },
                {
                  "step": "The letter $x$ stands for a number that the coefficient $4$ multiplies, and not for a digit of a longer number.",
                  "reason": "Substituting a value puts the value, in brackets, in each place where the letter stands."
                },
                {
                  "step": "Line 1 written right is $4x + 3x^2 = 4(6) + 3(6)^2$.",
                  "reason": "The brackets keep $4(6)$ a product of $4$ and $6$."
                }
              ],
              "given": [
                "$4x + 3x^2 = 46 + 3(6)^2$",
                "$46 + 3(6)^2 = 46 + 3(36)$",
                "$46 + 3(36) = 46 + 108$",
                "$46 + 108 = 154$"
              ]
            },
            {
              "prompt": "Find the wrong line in this evaluation of $2y^2 + 3y$ when $y = 4$, and write that line right.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 2*y^2+3*y = 2*(4)^2+3*(4)",
              "lines": [
                {
                  "step": "Line 1 writes the digit $4$ after the digit $3$ and reads the term $3y$ as the number $34$.",
                  "reason": "The definition of a coefficient: the term $3y$ is the product of $3$ and $y$."
                },
                {
                  "step": "The letter $y$ stands for a number that the coefficient $3$ multiplies, and not for a digit of a longer number.",
                  "reason": "Substituting a value puts the value, in brackets, in each place where the letter stands."
                },
                {
                  "step": "Line 1 written right is $2y^2 + 3y = 2(4)^2 + 3(4)$.",
                  "reason": "The brackets keep $3(4)$ a product of $3$ and $4$."
                }
              ],
              "given": [
                "$2y^2 + 3y = 2(4)^2 + 34$",
                "$2(4)^2 + 34 = 2(16) + 34$",
                "$2(16) + 34 = 32 + 34$",
                "$32 + 34 = 66$"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t101-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation: the number $y$ is 7 less than twice $x$.",
            "lines": [
              {
                "step": "Twice $x$ is $2x$.",
                "reason": "Twice means 2 times, and by the definition of a coefficient the 2 is written in front of the letter with no times sign."
              },
              {
                "step": "The number 7 less than $2x$ is $2x - 7$.",
                "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
              },
              {
                "step": "$y = 2x - 7$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 5 more than 3 times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*x+5",
              "lines": [
                {
                  "step": "The product 3 times $x$ is $3x$.",
                  "reason": "The definition of a coefficient: a product of a number and a letter is written with the number in front, and no times sign."
                },
                {
                  "step": "The number 5 more than $3x$ is $3x + 5$.",
                  "reason": "Writing a sentence as an equation: more than means the amount is added to what follows the words."
                },
                {
                  "step": "$y = 3x + 5$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 9 less than half of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x/2-9",
              "lines": [
                {
                  "step": "Half of $x$ is $\\dfrac{x}{2}$.",
                  "reason": "Writing a sentence as an equation: half of a number is the number divided by 2."
                },
                {
                  "step": "The number 9 less than $\\dfrac{x}{2}$ is $\\dfrac{x}{2} - 9$.",
                  "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
                },
                {
                  "step": "$y = \\dfrac{x}{2} - 9$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 15 decreased by the product of 4 and $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 15-4*x",
              "lines": [
                {
                  "step": "The product of 4 and $x$ is $4x$.",
                  "reason": "The definition of a coefficient: a product of a number and a letter is written with the number in front, and no times sign."
                },
                {
                  "step": "The number 15 decreased by $4x$ is $15 - 4x$.",
                  "reason": "Writing a sentence as an equation: decreased by means what follows the words is taken away from what stands before them."
                },
                {
                  "step": "$y = 15 - 4x$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation: the number $y$ is 3 times the sum of $x$ and 4.",
            "lines": [
              {
                "step": "The sum of $x$ and 4 is $x + 4$.",
                "reason": "Writing a sentence as an equation: sum means the two are added."
              },
              {
                "step": "The product of 3 and that sum is $3(x + 4)$.",
                "reason": "Writing a sentence as an equation: brackets keep the sum together, so the operation acts on the whole of it and not on one part."
              },
              {
                "step": "$y = 3(x + 4)$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 5 times the number that is 2 less than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5*(x-2)",
              "lines": [
                {
                  "step": "The number that is 2 less than $x$ is $x - 2$.",
                  "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
                },
                {
                  "step": "The product of 5 and that difference is $5(x - 2)$.",
                  "reason": "Writing a sentence as an equation: brackets keep the difference together, so the operation acts on the whole of it and not on one part."
                },
                {
                  "step": "$y = 5(x - 2)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is the sum of $x$ and 9, divided by 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+9)/2",
              "lines": [
                {
                  "step": "The sum of $x$ and 9 is $x + 9$.",
                  "reason": "Writing a sentence as an equation: sum means the two are added."
                },
                {
                  "step": "That sum divided by 2 is $\\dfrac{x + 9}{2}$.",
                  "reason": "Writing a sentence as an equation: the fraction bar groups the top as brackets do, so the whole sum is divided."
                },
                {
                  "step": "$y = \\dfrac{x + 9}{2}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is the square of the number that is 3 less than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-3)^2",
              "lines": [
                {
                  "step": "The number that is 3 less than $x$ is $x - 3$.",
                  "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
                },
                {
                  "step": "The square of that difference is $(x - 3)^2$.",
                  "reason": "Writing a sentence as an equation: brackets keep the difference together, so the operation acts on the whole of it and not on one part."
                },
                {
                  "step": "$y = (x - 3)^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation: the number $y$ is 3 less than 5 times the square of $x$.",
            "lines": [
              {
                "step": "The square of $x$ is $x^2$.",
                "reason": "Writing a sentence as an equation: the square of a number is its second power."
              },
              {
                "step": "The product of 5 and that square is $5x^2$.",
                "reason": "The power binds before the coefficient, so the coefficient multiplies the power and no brackets are needed."
              },
              {
                "step": "The number 3 less than $5x^2$ is $5x^2 - 3$.",
                "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
              },
              {
                "step": "$y = 5x^2 - 3$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 9 more than twice the square of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*x^2+9",
              "lines": [
                {
                  "step": "The square of $x$ is $x^2$.",
                  "reason": "Writing a sentence as an equation: the square of a number is its second power."
                },
                {
                  "step": "Twice that square is $2x^2$.",
                  "reason": "The power binds before the coefficient, so the coefficient multiplies the power and no brackets are needed."
                },
                {
                  "step": "The number 9 more than $2x^2$ is $2x^2 + 9$.",
                  "reason": "Writing a sentence as an equation: more than means the amount is added to what follows the words."
                },
                {
                  "step": "$y = 2x^2 + 9$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 1 less than 4 times the cube of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4*x^3-1",
              "lines": [
                {
                  "step": "The cube of $x$ is $x^3$.",
                  "reason": "Writing a sentence as an equation: the cube of a number is its third power."
                },
                {
                  "step": "The product of 4 and that cube is $4x^3$.",
                  "reason": "The power binds before the coefficient, so the coefficient multiplies the power and no brackets are needed."
                },
                {
                  "step": "The number 1 less than $4x^3$ is $4x^3 - 1$.",
                  "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
                },
                {
                  "step": "$y = 4x^3 - 1$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $y$ is 20 decreased by 3 times the square of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 20-3*x^2",
              "lines": [
                {
                  "step": "The square of $x$ is $x^2$.",
                  "reason": "Writing a sentence as an equation: the square of a number is its second power."
                },
                {
                  "step": "The product of 3 and that square is $3x^2$.",
                  "reason": "The power binds before the coefficient, so the coefficient multiplies the power and no brackets are needed."
                },
                {
                  "step": "The number 20 decreased by $3x^2$ is $20 - 3x^2$.",
                  "reason": "Writing a sentence as an equation: decreased by means what follows the words is taken away from what stands before them."
                },
                {
                  "step": "$y = 20 - 3x^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation: the number $z$ is the sum of 3 times $x$ and 4 times $y$.",
            "lines": [
              {
                "step": "The product 3 times $x$ is $3x$.",
                "reason": "The definition of a coefficient: a product of a number and a letter is written with the number in front, and no times sign."
              },
              {
                "step": "The product 4 times $y$ is $4y$.",
                "reason": "The definition of a coefficient: a product of a number and a letter is written with the number in front, and no times sign."
              },
              {
                "step": "The sum of $3x$ and $4y$ is $3x + 4y$.",
                "reason": "Writing a sentence as an equation: sum means the two are added."
              },
              {
                "step": "$z = 3x + 4y$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation: the number $z$ is 6 less than the product of $x$ and $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x*y-6",
              "lines": [
                {
                  "step": "The product of $x$ and $y$ is $xy$.",
                  "reason": "Writing a sentence as an equation: a product of two letters is written with the letters side by side, and no times sign."
                },
                {
                  "step": "The number 6 less than $xy$ is $xy - 6$.",
                  "reason": "Writing a sentence as an equation: less than means the amount is taken away from what follows the words."
                },
                {
                  "step": "$z = xy - 6$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $z$ is the number left when 5 times $y$ is taken from twice $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 2*x-5*y",
              "lines": [
                {
                  "step": "Twice $x$ is $2x$.",
                  "reason": "Twice means 2 times, and by the definition of a coefficient the 2 is written in front of the letter with no times sign."
                },
                {
                  "step": "The product 5 times $y$ is $5y$.",
                  "reason": "The definition of a coefficient: a product of a number and a letter is written with the number in front, and no times sign."
                },
                {
                  "step": "The number left when $5y$ is taken from $2x$ is $2x - 5y$.",
                  "reason": "Writing a sentence as an equation: taken from means the first amount is taken away from the second."
                },
                {
                  "step": "$z = 2x - 5y$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation: the number $z$ is the sum of 7 times $x$ and twice $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 7*x+2*y",
              "lines": [
                {
                  "step": "The product 7 times $x$ is $7x$.",
                  "reason": "The definition of a coefficient: a product of a number and a letter is written with the number in front, and no times sign."
                },
                {
                  "step": "Twice $y$ is $2y$.",
                  "reason": "Twice means 2 times, and by the definition of a coefficient the 2 is written in front of the letter with no times sign."
                },
                {
                  "step": "The sum of $7x$ and $2y$ is $7x + 2y$.",
                  "reason": "Writing a sentence as an equation: sum means the two are added."
                },
                {
                  "step": "$z = 7x + 2y$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
