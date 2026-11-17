export default {
  "number": 106,
  "title": "Taking out a common factor",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "64-67, 76, 112-115"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Factor $6x^3 - 9x^2$ completely.",
    "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
    "answer": "3*x^2*(2*x-3)",
    "solution": [
      "Factor $6x^3 - 9x^2$ completely.",
      "The greatest common divisor of $6$ and $9$ is $3$.",
      "Every term has the letter $x$, and the lowest power of $x$ in the terms is $x^2$.",
      "$6x^3 - 9x^2 = 3x^2\\cdot 2x - 3x^2\\cdot 3$",
      "$3x^2\\cdot 2x - 3x^2\\cdot 3 = 3x^2(2x - 3)$"
    ]
  },
  "ideas": [
    {
      "name": "Factoring",
      "concrete": "The sum $10x^2 + 15x$ is the product $5x(2x + 3)$, because multiplying out $5x(2x + 3)$ gives $10x^2 + 15x$.",
      "general": "**Factoring** writes a sum as a product. A **common factor** of the terms of a sum is a number, a letter, or a product of these, such that every term is that factor times another term. For all numbers $a$, $b$ and $c$, the distributive law, read from right to left, gives $ab + ac = a(b + c)$, which takes the common factor $a$ out of both terms, and the same holds for a sum of three terms or more. Multiplying out the product gives the sum back, which checks the factoring."
    },
    {
      "name": "Factoring completely",
      "concrete": "Taking $6x^2$ out of $12x^3 + 18x^2$ gives $6x^2(2x + 3)$, and the terms $2x$ and $3$ left in the bracket have no common factor other than $1$.",
      "general": "The **highest common factor** of the terms of a sum with whole-number coefficients is the greatest common divisor of the numbers in the terms, taken without their signs, times the lowest power of each letter that stands in every term. **Factoring completely** takes out the highest common factor, so that the terms left in the bracket have no common factor other than $1$. A common factor with a minus sign comes out in the same way: for all numbers $a$, $b$ and $c$, the sum $ab + ac$ equals $(-a)(-b) + (-a)(-c)$, which is $-a(-b - c)$, so every term in the bracket has the sign opposite to the one it had."
    },
    {
      "name": "Factoring out a bracket",
      "concrete": "Both terms of $3x(x - 4) + 7(x - 4)$ are multiples of the bracket $(x - 4)$, so $3x(x - 4) + 7(x - 4) = (3x + 7)(x - 4)$.",
      "general": "A bracket stands for one number, so a bracket can be a common factor. **Factoring out a bracket**: for all numbers $a$, $b$, $c$ and $d$, the distributive law, read from right to left, gives $a(c + d) + b(c + d) = (a + b)(c + d)$. A bracket with every sign changed is the same bracket with a minus sign in front: for all numbers $c$ and $d$, $d - c = -(c - d)$."
    },
    {
      "name": "Factoring by grouping",
      "concrete": "The four terms of $xy + 2x + 5y + 10$ pair off as $x(y + 2)$ and $5(y + 2)$, so $xy + 2x + 5y + 10 = (x + 5)(y + 2)$.",
      "general": "**Factoring by grouping** takes the terms of a sum in groups, takes a common factor out of each group, and factors out the bracket where every group leaves the same one. For all numbers $a$, $b$, $c$ and $d$, $ac + ad + bc + bd = a(c + d) + b(c + d) = (a + b)(c + d)$."
    }
  ],
  "kinds": [
    {
      "id": "t106-k1",
      "forms": [
        {
          "example": {
            "problem": "Factor $20x + 28y - 12$ completely.",
            "lines": [
              {
                "step": "Factor $20x + 28y - 12$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The greatest common divisor of $20$, $28$ and $12$ is $4$.",
                "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, so the common factor is this number alone."
              },
              {
                "step": "$20x + 28y - 12 = 4\\cdot 5x + 4\\cdot 7y - 4\\cdot 3$",
                "reason": "The multiplication of whole numbers writes the number in each term as $4$ times a whole number, which shows the common factor in every term."
              },
              {
                "step": "$4\\cdot 5x + 4\\cdot 7y - 4\\cdot 3 = 4(5x + 7y - 3)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $14x + 35$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "7*(2*x+5)",
              "lines": [
                {
                  "step": "Factor $14x + 35$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $14$ and $35$ is $7$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, so the common factor is this number alone."
                },
                {
                  "step": "$14x + 35 = 7\\cdot 2x + 7\\cdot 5$",
                  "reason": "The multiplication of whole numbers writes the number in each term as $7$ times a whole number, which shows the common factor in every term."
                },
                {
                  "step": "$7\\cdot 2x + 7\\cdot 5 = 7(2x + 5)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $24y^2 - 40$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "8*(3*y^2-5)",
              "lines": [
                {
                  "step": "Factor $24y^2 - 40$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $24$ and $40$ is $8$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, so the common factor is this number alone."
                },
                {
                  "step": "$24y^2 - 40 = 8\\cdot 3y^2 - 8\\cdot 5$",
                  "reason": "The multiplication of whole numbers writes the number in each term as $8$ times a whole number, which shows the common factor in every term."
                },
                {
                  "step": "$8\\cdot 3y^2 - 8\\cdot 5 = 8(3y^2 - 5)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $9x - 15y + 21z$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "3*(3*x-5*y+7*z)",
              "lines": [
                {
                  "step": "Factor $9x - 15y + 21z$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $9$, $15$ and $21$ is $3$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, so the common factor is this number alone."
                },
                {
                  "step": "$9x - 15y + 21z = 3\\cdot 3x - 3\\cdot 5y + 3\\cdot 7z$",
                  "reason": "The multiplication of whole numbers writes the number in each term as $3$ times a whole number, which shows the common factor in every term."
                },
                {
                  "step": "$3\\cdot 3x - 3\\cdot 5y + 3\\cdot 7z = 3(3x - 5y + 7z)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $-6x^2 + 9x - 15$ completely, taking out a factor with a minus sign.",
            "lines": [
              {
                "step": "Factor $-6x^2 + 9x - 15$ completely, taking out a factor with a minus sign.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The greatest common divisor of $6$, $9$ and $15$ is $3$.",
                "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, and a factor with a minus sign is asked for, so the factor to take out is $-3$."
              },
              {
                "step": "$-6x^2 + 9x - 15 = (-3)(2x^2) + (-3)(-3x) + (-3)(5)$",
                "reason": "The sign rules for products write each term as $-3$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
              },
              {
                "step": "$(-3)(2x^2) + (-3)(-3x) + (-3)(5) = -3(2x^2 - 3x + 5)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $-10x + 35$ completely, taking out a factor with a minus sign.",
              "form": "Answer with a factor with a minus sign taken out, as in -3*x*(x+2).",
              "answer": "-5*(2*x-7)",
              "lines": [
                {
                  "step": "Factor $-10x + 35$ completely, taking out a factor with a minus sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $10$ and $35$ is $5$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, and a factor with a minus sign is asked for, so the factor to take out is $-5$."
                },
                {
                  "step": "$-10x + 35 = (-5)(2x) + (-5)(-7)$",
                  "reason": "The sign rules for products write each term as $-5$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
                },
                {
                  "step": "$(-5)(2x) + (-5)(-7) = -5(2x - 7)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $-12y^2 - 20$ completely, taking out a factor with a minus sign.",
              "form": "Answer with a factor with a minus sign taken out, as in -3*x*(x+2).",
              "answer": "-4*(3*y^2+5)",
              "lines": [
                {
                  "step": "Factor $-12y^2 - 20$ completely, taking out a factor with a minus sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $12$ and $20$ is $4$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, and a factor with a minus sign is asked for, so the factor to take out is $-4$."
                },
                {
                  "step": "$-12y^2 - 20 = (-4)(3y^2) + (-4)(5)$",
                  "reason": "The sign rules for products write each term as $-4$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
                },
                {
                  "step": "$(-4)(3y^2) + (-4)(5) = -4(3y^2 + 5)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $-8x + 12y - 28z$ completely, taking out a factor with a minus sign.",
              "form": "Answer with a factor with a minus sign taken out, as in -3*x*(x+2).",
              "answer": "-4*(2*x-3*y+7*z)",
              "lines": [
                {
                  "step": "Factor $-8x + 12y - 28z$ completely, taking out a factor with a minus sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $8$, $12$ and $28$ is $4$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor. No letter stands in every term, and a factor with a minus sign is asked for, so the factor to take out is $-4$."
                },
                {
                  "step": "$-8x + 12y - 28z = (-4)(2x) + (-4)(-3y) + (-4)(7z)$",
                  "reason": "The sign rules for products write each term as $-4$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
                },
                {
                  "step": "$(-4)(2x) + (-4)(-3y) + (-4)(7z) = -4(2x - 3y + 7z)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $x^5y^2 - x^3y^4 + x^2y^3$ completely.",
            "lines": [
              {
                "step": "Factor $x^5y^2 - x^3y^4 + x^2y^3$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every term has the letters $x$ and $y$: the lowest power of $x$ in the terms is $x^2$, and the lowest power of $y$ in the terms is $y^2$.",
                "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $x^2y^2$. The numbers in the terms have no common divisor above $1$, so the common factor holds letters alone."
              },
              {
                "step": "$x^5y^2 - x^3y^4 + x^2y^3 = x^2y^2\\cdot x^3 - x^2y^2\\cdot xy^2 + x^2y^2\\cdot y$",
                "reason": "The product law adds the exponents of powers of one base, so each term is $x^2y^2$ times what is left of it, which shows the common factor in every term."
              },
              {
                "step": "$x^2y^2\\cdot x^3 - x^2y^2\\cdot xy^2 + x^2y^2\\cdot y = x^2y^2(x^3 - xy^2 + y)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $5x^4 + 3x^2$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "x^2*(5*x^2+3)",
              "lines": [
                {
                  "step": "Factor $5x^4 + 3x^2$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every term has the letter $x$, and the lowest power of $x$ in the terms is $x^2$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $x^2$. The numbers in the terms have no common divisor above $1$, so the common factor holds letters alone."
                },
                {
                  "step": "$5x^4 + 3x^2 = x^2\\cdot 5x^2 + x^2\\cdot 3$",
                  "reason": "The product law adds the exponents of powers of one base, so each term is $x^2$ times what is left of it, which shows the common factor in every term."
                },
                {
                  "step": "$x^2\\cdot 5x^2 + x^2\\cdot 3 = x^2(5x^2 + 3)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $y^6 - 4y^5 + y^3$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "y^3*(y^3-4*y^2+1)",
              "lines": [
                {
                  "step": "Factor $y^6 - 4y^5 + y^3$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every term has the letter $y$, and the lowest power of $y$ in the terms is $y^3$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $y^3$. The numbers in the terms have no common divisor above $1$, so the common factor holds letters alone."
                },
                {
                  "step": "$y^6 - 4y^5 + y^3 = y^3\\cdot y^3 - y^3\\cdot 4y^2 + y^3\\cdot 1$",
                  "reason": "The product law adds the exponents of powers of one base, so each term is $y^3$ times what is left of it, which shows the common factor in every term. The term $y^3$ is the common factor times $1$."
                },
                {
                  "step": "$y^3\\cdot y^3 - y^3\\cdot 4y^2 + y^3\\cdot 1 = y^3(y^3 - 4y^2 + 1)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $2x^3y + 7xy^2$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "x*y*(2*x^2+7*y)",
              "lines": [
                {
                  "step": "Factor $2x^3y + 7xy^2$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every term has the letters $x$ and $y$: the lowest power of $x$ in the terms is $x$, and the lowest power of $y$ in the terms is $y$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $xy$. The numbers in the terms have no common divisor above $1$, so the common factor holds letters alone."
                },
                {
                  "step": "$2x^3y + 7xy^2 = xy\\cdot 2x^2 + xy\\cdot 7y$",
                  "reason": "The product law adds the exponents of powers of one base, so each term is $xy$ times what is left of it, which shows the common factor in every term."
                },
                {
                  "step": "$xy\\cdot 2x^2 + xy\\cdot 7y = xy(2x^2 + 7y)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $12x^3y - 18x^2y^2 + 30xy^3$ completely.",
            "lines": [
              {
                "step": "Factor $12x^3y - 18x^2y^2 + 30xy^3$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The greatest common divisor of $12$, $18$ and $30$ is $6$.",
                "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
              },
              {
                "step": "Every term has the letters $x$ and $y$: the lowest power of $x$ in the terms is $x$, and the lowest power of $y$ in the terms is $y$.",
                "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $6xy$."
              },
              {
                "step": "$12x^3y - 18x^2y^2 + 30xy^3 = 6xy\\cdot 2x^2 - 6xy\\cdot 3xy + 6xy\\cdot 5y^2$",
                "reason": "The multiplication of whole numbers and the product law write each term as $6xy$ times what is left of it, which shows the common factor in every term."
              },
              {
                "step": "$6xy\\cdot 2x^2 - 6xy\\cdot 3xy + 6xy\\cdot 5y^2 = 6xy(2x^2 - 3xy + 5y^2)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $8x^4 - 20x^3$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "4*x^3*(2*x-5)",
              "lines": [
                {
                  "step": "Factor $8x^4 - 20x^3$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $8$ and $20$ is $4$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
                },
                {
                  "step": "Every term has the letter $x$, and the lowest power of $x$ in the terms is $x^3$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $4x^3$."
                },
                {
                  "step": "$8x^4 - 20x^3 = 4x^3\\cdot 2x - 4x^3\\cdot 5$",
                  "reason": "The multiplication of whole numbers and the product law write each term as $4x^3$ times what is left of it, which shows the common factor in every term."
                },
                {
                  "step": "$4x^3\\cdot 2x - 4x^3\\cdot 5 = 4x^3(2x - 5)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $15y^3 + 10y^2 - 35y$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "5*y*(3*y^2+2*y-7)",
              "lines": [
                {
                  "step": "Factor $15y^3 + 10y^2 - 35y$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $15$, $10$ and $35$ is $5$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
                },
                {
                  "step": "Every term has the letter $y$, and the lowest power of $y$ in the terms is $y$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $5y$."
                },
                {
                  "step": "$15y^3 + 10y^2 - 35y = 5y\\cdot 3y^2 + 5y\\cdot 2y - 5y\\cdot 7$",
                  "reason": "The multiplication of whole numbers and the product law write each term as $5y$ times what is left of it, which shows the common factor in every term."
                },
                {
                  "step": "$5y\\cdot 3y^2 + 5y\\cdot 2y - 5y\\cdot 7 = 5y(3y^2 + 2y - 7)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $14x^2y + 21xy^2$ completely.",
              "form": "Answer with the highest common factor taken out, as in 3*x*(x-2).",
              "answer": "7*x*y*(2*x+3*y)",
              "lines": [
                {
                  "step": "Factor $14x^2y + 21xy^2$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $14$ and $21$ is $7$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
                },
                {
                  "step": "Every term has the letters $x$ and $y$: the lowest power of $x$ in the terms is $x$, and the lowest power of $y$ in the terms is $y$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $7xy$."
                },
                {
                  "step": "$14x^2y + 21xy^2 = 7xy\\cdot 2x + 7xy\\cdot 3y$",
                  "reason": "The multiplication of whole numbers and the product law write each term as $7xy$ times what is left of it, which shows the common factor in every term."
                },
                {
                  "step": "$7xy\\cdot 2x + 7xy\\cdot 3y = 7xy(2x + 3y)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor out of every term, and the terms left in the bracket have no common factor to take out, so this is factoring completely."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $-8x^3 + 12x^2 - 28x$ completely, taking out a factor with a minus sign.",
            "lines": [
              {
                "step": "Factor $-8x^3 + 12x^2 - 28x$ completely, taking out a factor with a minus sign.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The greatest common divisor of $8$, $12$ and $28$ is $4$.",
                "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
              },
              {
                "step": "Every term has the letter $x$, and the lowest power of $x$ in the terms is $x$.",
                "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $4x$. A factor with a minus sign is asked for, so the factor to take out is $-4x$."
              },
              {
                "step": "$-8x^3 + 12x^2 - 28x = (-4x)(2x^2) + (-4x)(-3x) + (-4x)(7)$",
                "reason": "The sign rules for products and the product law write each term as $-4x$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
              },
              {
                "step": "$(-4x)(2x^2) + (-4x)(-3x) + (-4x)(7) = -4x(2x^2 - 3x + 7)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $-6y^4 - 14y^2$ completely, taking out a factor with a minus sign.",
              "form": "Answer with a factor with a minus sign taken out, as in -3*x*(x+2).",
              "answer": "-2*y^2*(3*y^2+7)",
              "lines": [
                {
                  "step": "Factor $-6y^4 - 14y^2$ completely, taking out a factor with a minus sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $6$ and $14$ is $2$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
                },
                {
                  "step": "Every term has the letter $y$, and the lowest power of $y$ in the terms is $y^2$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $2y^2$. A factor with a minus sign is asked for, so the factor to take out is $-2y^2$."
                },
                {
                  "step": "$-6y^4 - 14y^2 = (-2y^2)(3y^2) + (-2y^2)(7)$",
                  "reason": "The sign rules for products and the product law write each term as $-2y^2$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
                },
                {
                  "step": "$(-2y^2)(3y^2) + (-2y^2)(7) = -2y^2(3y^2 + 7)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $-15x^2y + 25xy^2$ completely, taking out a factor with a minus sign.",
              "form": "Answer with a factor with a minus sign taken out, as in -3*x*(x+2).",
              "answer": "-5*x*y*(3*x-5*y)",
              "lines": [
                {
                  "step": "Factor $-15x^2y + 25xy^2$ completely, taking out a factor with a minus sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $15$ and $25$ is $5$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
                },
                {
                  "step": "Every term has the letters $x$ and $y$: the lowest power of $x$ in the terms is $x$, and the lowest power of $y$ in the terms is $y$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $5xy$. A factor with a minus sign is asked for, so the factor to take out is $-5xy$."
                },
                {
                  "step": "$-15x^2y + 25xy^2 = (-5xy)(3x) + (-5xy)(-5y)$",
                  "reason": "The sign rules for products and the product law write each term as $-5xy$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
                },
                {
                  "step": "$(-5xy)(3x) + (-5xy)(-5y) = -5xy(3x - 5y)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $-9z^5 + 12z^3 - 6z^2$ completely, taking out a factor with a minus sign.",
              "form": "Answer with a factor with a minus sign taken out, as in -3*x*(x+2).",
              "answer": "-3*z^2*(3*z^3-4*z+2)",
              "lines": [
                {
                  "step": "Factor $-9z^5 + 12z^3 - 6z^2$ completely, taking out a factor with a minus sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The greatest common divisor of $9$, $12$ and $6$ is $3$.",
                  "reason": "The greatest common divisor of the numbers in the terms, taken without their signs, is the largest whole number that divides each of them, so it is the number in the highest common factor."
                },
                {
                  "step": "Every term has the letter $z$, and the lowest power of $z$ in the terms is $z^2$.",
                  "reason": "A common factor holds a letter only to a power that every term has, so the lowest power of each letter that stands in every term goes into the highest common factor, which is $3z^2$. A factor with a minus sign is asked for, so the factor to take out is $-3z^2$."
                },
                {
                  "step": "$-9z^5 + 12z^3 - 6z^2 = (-3z^2)(3z^3) + (-3z^2)(-4z) + (-3z^2)(2)$",
                  "reason": "The sign rules for products and the product law write each term as $-3z^2$ times a term of the opposite sign, which shows the common factor, with its minus sign, in every term."
                },
                {
                  "step": "$(-3z^2)(3z^3) + (-3z^2)(-4z) + (-3z^2)(2) = -3z^2(3z^3 - 4z + 2)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the common factor, with its minus sign, out of every term, which gives each term in the bracket the sign opposite to the one it had. The terms left have no common factor to take out, so this is factoring completely."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t106-k2",
      "forms": [
        {
          "example": {
            "problem": "Factor $4x(3x + 2) + 9(3x + 2)$ completely.",
            "lines": [
              {
                "step": "Factor $4x(3x + 2) + 9(3x + 2)$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term is $4x$ times the bracket $(3x + 2)$, and the second term is $9$ times the same bracket.",
                "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
              },
              {
                "step": "$4x(3x + 2) + 9(3x + 2) = (4x + 9)(3x + 2)$",
                "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
              },
              {
                "step": "Neither $4x + 9$ nor $3x + 2$ has a common factor of its terms, so $(4x + 9)(3x + 2)$ is factored completely.",
                "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $5(y - 7) + 2y(y - 7)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(5+2*y)*(y-7)",
              "lines": [
                {
                  "step": "Factor $5(y - 7) + 2y(y - 7)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $5$ times the bracket $(y - 7)$, and the second term is $2y$ times the same bracket.",
                  "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
                },
                {
                  "step": "$5(y - 7) + 2y(y - 7) = (5 + 2y)(y - 7)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $5 + 2y$ nor $y - 7$ has a common factor of its terms, so $(5 + 2y)(y - 7)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $x(3x + 5) - 6(3x + 5)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-6)*(3*x+5)",
              "lines": [
                {
                  "step": "Factor $x(3x + 5) - 6(3x + 5)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $x$ times the bracket $(3x + 5)$, and the term taken away is $6$ times the same bracket.",
                  "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
                },
                {
                  "step": "$x(3x + 5) - 6(3x + 5) = (x - 6)(3x + 5)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $x - 6$ nor $3x + 5$ has a common factor of its terms, so $(x - 6)(3x + 5)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $3y(x + 2y) + 4(x + 2y)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(3*y+4)*(x+2*y)",
              "lines": [
                {
                  "step": "Factor $3y(x + 2y) + 4(x + 2y)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $3y$ times the bracket $(x + 2y)$, and the second term is $4$ times the same bracket.",
                  "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
                },
                {
                  "step": "$3y(x + 2y) + 4(x + 2y) = (3y + 4)(x + 2y)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $3y + 4$ nor $x + 2y$ has a common factor of its terms, so $(3y + 4)(x + 2y)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $x(y + 3) + 5y + 15$ completely.",
            "lines": [
              {
                "step": "Factor $x(y + 3) + 5y + 15$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x(y + 3) + 5y + 15 = x(y + 3) + 5(y + 3)$",
                "reason": "Factoring takes the common factor $5$ out of the last two terms, and the bracket left is the one that the first term has."
              },
              {
                "step": "$x(y + 3) + 5(y + 3) = (x + 5)(y + 3)$",
                "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
              },
              {
                "step": "Neither $x + 5$ nor $y + 3$ has a common factor of its terms, so $(x + 5)(y + 3)$ is factored completely.",
                "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $3x(x - 4) + 5x - 20$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(3*x+5)*(x-4)",
              "lines": [
                {
                  "step": "Factor $3x(x - 4) + 5x - 20$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x(x - 4) + 5x - 20 = 3x(x - 4) + 5(x - 4)$",
                  "reason": "Factoring takes the common factor $5$ out of the last two terms, and the bracket left is the one that the first term has."
                },
                {
                  "step": "$3x(x - 4) + 5(x - 4) = (3x + 5)(x - 4)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $3x + 5$ nor $x - 4$ has a common factor of its terms, so $(3x + 5)(x - 4)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $y(3y + 2) + 12y + 8$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(y+4)*(3*y+2)",
              "lines": [
                {
                  "step": "Factor $y(3y + 2) + 12y + 8$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(3y + 2) + 12y + 8 = y(3y + 2) + 4(3y + 2)$",
                  "reason": "Factoring takes the common factor $4$ out of the last two terms, and the bracket left is the one that the first term has."
                },
                {
                  "step": "$y(3y + 2) + 4(3y + 2) = (y + 4)(3y + 2)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $y + 4$ nor $3y + 2$ has a common factor of its terms, so $(y + 4)(3y + 2)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $x(x + 2y) + 3x + 6y$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x+3)*(x+2*y)",
              "lines": [
                {
                  "step": "Factor $x(x + 2y) + 3x + 6y$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 2y) + 3x + 6y = x(x + 2y) + 3(x + 2y)$",
                  "reason": "Factoring takes the common factor $3$ out of the last two terms, and the bracket left is the one that the first term has."
                },
                {
                  "step": "$x(x + 2y) + 3(x + 2y) = (x + 3)(x + 2y)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $x + 3$ nor $x + 2y$ has a common factor of its terms, so $(x + 3)(x + 2y)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $3xy + 12x + 2y + 8$ completely.",
            "lines": [
              {
                "step": "Factor $3xy + 12x + 2y + 8$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3xy + 12x + 2y + 8 = (3xy + 12x) + (2y + 8)$",
                "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
              },
              {
                "step": "$(3xy + 12x) + (2y + 8) = 3x(y + 4) + (2y + 8)$",
                "reason": "Factoring takes the common factor $3x$ out of the first pair, which leaves the bracket $(y + 4)$."
              },
              {
                "step": "$3x(y + 4) + (2y + 8) = 3x(y + 4) + 2(y + 4)$",
                "reason": "Factoring takes the common factor $2$ out of the second pair, which leaves the same bracket as the first pair."
              },
              {
                "step": "$3x(y + 4) + 2(y + 4) = (3x + 2)(y + 4)$",
                "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
              },
              {
                "step": "Neither $3x + 2$ nor $y + 4$ has a common factor of its terms, so $(3x + 2)(y + 4)$ is factored completely.",
                "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $xy + 7x - 3y - 21$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-3)*(y+7)",
              "lines": [
                {
                  "step": "Factor $xy + 7x - 3y - 21$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy + 7x - 3y - 21 = (xy + 7x) + (-3y - 21)$",
                  "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
                },
                {
                  "step": "$(xy + 7x) + (-3y - 21) = x(y + 7) + (-3y - 21)$",
                  "reason": "Factoring takes the common factor $x$ out of the first pair, which leaves the bracket $(y + 7)$."
                },
                {
                  "step": "$x(y + 7) + (-3y - 21) = x(y + 7) - 3(y + 7)$",
                  "reason": "Factoring takes the common factor $-3$, with its minus sign, out of the second pair, which changes the sign of each of its terms and leaves the same bracket as the first pair."
                },
                {
                  "step": "$x(y + 7) - 3(y + 7) = (x - 3)(y + 7)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $x - 3$ nor $y + 7$ has a common factor of its terms, so $(x - 3)(y + 7)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $10xy - 15x + 4y - 6$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(5*x+2)*(2*y-3)",
              "lines": [
                {
                  "step": "Factor $10xy - 15x + 4y - 6$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10xy - 15x + 4y - 6 = (10xy - 15x) + (4y - 6)$",
                  "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
                },
                {
                  "step": "$(10xy - 15x) + (4y - 6) = 5x(2y - 3) + (4y - 6)$",
                  "reason": "Factoring takes the common factor $5x$ out of the first pair, which leaves the bracket $(2y - 3)$."
                },
                {
                  "step": "$5x(2y - 3) + (4y - 6) = 5x(2y - 3) + 2(2y - 3)$",
                  "reason": "Factoring takes the common factor $2$ out of the second pair, which leaves the same bracket as the first pair."
                },
                {
                  "step": "$5x(2y - 3) + 2(2y - 3) = (5x + 2)(2y - 3)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $5x + 2$ nor $2y - 3$ has a common factor of its terms, so $(5x + 2)(2y - 3)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $xz + yz + 4x + 4y$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(z+4)*(x+y)",
              "lines": [
                {
                  "step": "Factor $xz + yz + 4x + 4y$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xz + yz + 4x + 4y = (xz + yz) + (4x + 4y)$",
                  "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
                },
                {
                  "step": "$(xz + yz) + (4x + 4y) = z(x + y) + (4x + 4y)$",
                  "reason": "Factoring takes the common factor $z$ out of the first pair, which leaves the bracket $(x + y)$."
                },
                {
                  "step": "$z(x + y) + (4x + 4y) = z(x + y) + 4(x + y)$",
                  "reason": "Factoring takes the common factor $4$ out of the second pair, which leaves the same bracket as the first pair."
                },
                {
                  "step": "$z(x + y) + 4(x + y) = (z + 4)(x + y)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $z + 4$ nor $x + y$ has a common factor of its terms, so $(z + 4)(x + y)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $5x(x - 3) + 2(3 - x)$ completely.",
            "lines": [
              {
                "step": "Factor $5x(x - 3) + 2(3 - x)$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-(x - 3) = -x + 3$",
                "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, changes every sign in the bracket, which shows what the first bracket becomes with a minus sign in front."
              },
              {
                "step": "$-x + 3 = 3 - x$",
                "reason": "The commutative law of addition puts the term with the plus sign first, so the second bracket is the first with a minus sign in front."
              },
              {
                "step": "$5x(x - 3) + 2(3 - x) = 5x(x - 3) + 2(-(x - 3))$",
                "reason": "The two lines before give $(3 - x) = -(x - 3)$, and equal expressions stand in place of each other, which brings the first bracket into the second term."
              },
              {
                "step": "$5x(x - 3) + 2(-(x - 3)) = 5x(x - 3) - 2(x - 3)$",
                "reason": "The sign rules for products bring the minus sign of the bracket in front of the term, which makes the two brackets the same."
              },
              {
                "step": "$5x(x - 3) - 2(x - 3) = (5x - 2)(x - 3)$",
                "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
              },
              {
                "step": "Neither $5x - 2$ nor $x - 3$ has a common factor of its terms, so $(5x - 2)(x - 3)$ is factored completely.",
                "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $y(y - 8) - 4(8 - y)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(y+4)*(y-8)",
              "lines": [
                {
                  "step": "Factor $y(y - 8) - 4(8 - y)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-(y - 8) = -y + 8$",
                  "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, changes every sign in the bracket, which shows what the first bracket becomes with a minus sign in front."
                },
                {
                  "step": "$-y + 8 = 8 - y$",
                  "reason": "The commutative law of addition puts the term with the plus sign first, so the second bracket is the first with a minus sign in front."
                },
                {
                  "step": "$y(y - 8) - 4(8 - y) = y(y - 8) - 4(-(y - 8))$",
                  "reason": "The two lines before give $(8 - y) = -(y - 8)$, and equal expressions stand in place of each other, which brings the first bracket into the second term."
                },
                {
                  "step": "$y(y - 8) - 4(-(y - 8)) = y(y - 8) + 4(y - 8)$",
                  "reason": "The sign rules for products bring the minus sign of the bracket in front of the term, which makes the two brackets the same."
                },
                {
                  "step": "$y(y - 8) + 4(y - 8) = (y + 4)(y - 8)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $y + 4$ nor $y - 8$ has a common factor of its terms, so $(y + 4)(y - 8)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $3(2x - 7) + x(7 - 2x)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(3-x)*(2*x-7)",
              "lines": [
                {
                  "step": "Factor $3(2x - 7) + x(7 - 2x)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-(2x - 7) = -2x + 7$",
                  "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, changes every sign in the bracket, which shows what the first bracket becomes with a minus sign in front."
                },
                {
                  "step": "$-2x + 7 = 7 - 2x$",
                  "reason": "The commutative law of addition puts the term with the plus sign first, so the second bracket is the first with a minus sign in front."
                },
                {
                  "step": "$3(2x - 7) + x(7 - 2x) = 3(2x - 7) + x(-(2x - 7))$",
                  "reason": "The two lines before give $(7 - 2x) = -(2x - 7)$, and equal expressions stand in place of each other, which brings the first bracket into the second term."
                },
                {
                  "step": "$3(2x - 7) + x(-(2x - 7)) = 3(2x - 7) - x(2x - 7)$",
                  "reason": "The sign rules for products bring the minus sign of the bracket in front of the term, which makes the two brackets the same."
                },
                {
                  "step": "$3(2x - 7) - x(2x - 7) = (3 - x)(2x - 7)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $3 - x$ nor $2x - 7$ has a common factor of its terms, so $(3 - x)(2x - 7)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $2x(x - y) + 9(y - x)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(2*x-9)*(x-y)",
              "lines": [
                {
                  "step": "Factor $2x(x - y) + 9(y - x)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-(x - y) = -x + y$",
                  "reason": "The rule for removing parentheses, $-(x-y)=-x+y$, changes every sign in the bracket, which shows what the first bracket becomes with a minus sign in front."
                },
                {
                  "step": "$-x + y = y - x$",
                  "reason": "The commutative law of addition puts the term with the plus sign first, so the second bracket is the first with a minus sign in front."
                },
                {
                  "step": "$2x(x - y) + 9(y - x) = 2x(x - y) + 9(-(x - y))$",
                  "reason": "The two lines before give $(y - x) = -(x - y)$, and equal expressions stand in place of each other, which brings the first bracket into the second term."
                },
                {
                  "step": "$2x(x - y) + 9(-(x - y)) = 2x(x - y) - 9(x - y)$",
                  "reason": "The sign rules for products bring the minus sign of the bracket in front of the term, which makes the two brackets the same."
                },
                {
                  "step": "$2x(x - y) - 9(x - y) = (2x - 9)(x - y)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $2x - 9$ nor $x - y$ has a common factor of its terms, so $(2x - 9)(x - y)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $3x^2(y - 2) + 12x(y - 2)$ completely.",
            "lines": [
              {
                "step": "Factor $3x^2(y - 2) + 12x(y - 2)$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term is $3x^2$ times the bracket $(y - 2)$, and the second term is $12x$ times the same bracket.",
                "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
              },
              {
                "step": "$3x^2(y - 2) + 12x(y - 2) = (3x^2 + 12x)(y - 2)$",
                "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
              },
              {
                "step": "The terms of $3x^2 + 12x$ have the highest common factor $3x$, and $3x^2 + 12x = 3x(x + 4)$.",
                "reason": "Factoring takes the highest common factor out of a bracket whose terms have one, as it does for a sum that stands alone."
              },
              {
                "step": "$(3x^2 + 12x)(y - 2) = 3x(x + 4)(y - 2)$",
                "reason": "The line before puts $3x(x + 4)$ in place of the first bracket. Neither $x + 4$ nor $y - 2$ has a common factor of its terms, so this is factoring completely."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $10x(x + 2) + 15(x + 2)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "5*(2*x+3)*(x+2)",
              "lines": [
                {
                  "step": "Factor $10x(x + 2) + 15(x + 2)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $10x$ times the bracket $(x + 2)$, and the second term is $15$ times the same bracket.",
                  "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
                },
                {
                  "step": "$10x(x + 2) + 15(x + 2) = (10x + 15)(x + 2)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "The terms of $10x + 15$ have the highest common factor $5$, and $10x + 15 = 5(2x + 3)$.",
                  "reason": "Factoring takes the highest common factor out of a bracket whose terms have one, as it does for a sum that stands alone."
                },
                {
                  "step": "$(10x + 15)(x + 2) = 5(2x + 3)(x + 2)$",
                  "reason": "The line before puts $5(2x + 3)$ in place of the first bracket. Neither $2x + 3$ nor $x + 2$ has a common factor of its terms, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $4y^2(z + 6) - 10y(z + 6)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "2*y*(2*y-5)*(z+6)",
              "lines": [
                {
                  "step": "Factor $4y^2(z + 6) - 10y(z + 6)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $4y^2$ times the bracket $(z + 6)$, and the term taken away is $10y$ times the same bracket.",
                  "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
                },
                {
                  "step": "$4y^2(z + 6) - 10y(z + 6) = (4y^2 - 10y)(z + 6)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
                },
                {
                  "step": "The terms of $4y^2 - 10y$ have the highest common factor $2y$, and $4y^2 - 10y = 2y(2y - 5)$.",
                  "reason": "Factoring takes the highest common factor out of a bracket whose terms have one, as it does for a sum that stands alone."
                },
                {
                  "step": "$(4y^2 - 10y)(z + 6) = 2y(2y - 5)(z + 6)$",
                  "reason": "The line before puts $2y(2y - 5)$ in place of the first bracket. Neither $2y - 5$ nor $z + 6$ has a common factor of its terms, so this is factoring completely."
                }
              ]
            },
            {
              "prompt": "Factor $9x(2x - 1) - 15(2x - 1)$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "3*(3*x-5)*(2*x-1)",
              "lines": [
                {
                  "step": "Factor $9x(2x - 1) - 15(2x - 1)$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $9x$ times the bracket $(2x - 1)$, and the term taken away is $15$ times the same bracket.",
                  "reason": "A bracket stands for one number, so it is a common factor of the two terms in the way a single letter would be."
                },
                {
                  "step": "$9x(2x - 1) - 15(2x - 1) = (9x - 15)(2x - 1)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the difference of the two multipliers as the other factor."
                },
                {
                  "step": "The terms of $9x - 15$ have the highest common factor $3$, and $9x - 15 = 3(3x - 5)$.",
                  "reason": "Factoring takes the highest common factor out of a bracket whose terms have one, as it does for a sum that stands alone."
                },
                {
                  "step": "$(9x - 15)(2x - 1) = 3(3x - 5)(2x - 1)$",
                  "reason": "The line before puts $3(3x - 5)$ in place of the first bracket. Neither $3x - 5$ nor $2x - 1$ has a common factor of its terms, so this is factoring completely."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $x(x + 2y + 5) + 10y$ completely.",
            "lines": [
              {
                "step": "Factor $x(x + 2y + 5) + 10y$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x(x + 2y + 5) + 10y = x^2 + 2xy + 5x + 10y$",
                "reason": "Multiplying out the bracket gives four separate terms. The expression as it stands has no bracket that is a factor of both its terms, so the terms are set free to be grouped."
              },
              {
                "step": "$x^2 + 2xy + 5x + 10y = (x^2 + 2xy) + (5x + 10y)$",
                "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
              },
              {
                "step": "$(x^2 + 2xy) + (5x + 10y) = x(x + 2y) + (5x + 10y)$",
                "reason": "Factoring takes the common factor $x$ out of the first pair, which leaves the bracket $(x + 2y)$."
              },
              {
                "step": "$x(x + 2y) + (5x + 10y) = x(x + 2y) + 5(x + 2y)$",
                "reason": "Factoring takes the common factor $5$ out of the second pair, which leaves the same bracket as the first pair."
              },
              {
                "step": "$x(x + 2y) + 5(x + 2y) = (x + 5)(x + 2y)$",
                "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
              },
              {
                "step": "Neither $x + 5$ nor $x + 2y$ has a common factor of its terms, so $(x + 5)(x + 2y)$ is factored completely.",
                "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $x(x + y + 3) + 3y$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x+3)*(x+y)",
              "lines": [
                {
                  "step": "Factor $x(x + y + 3) + 3y$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + y + 3) + 3y = x^2 + xy + 3x + 3y$",
                  "reason": "Multiplying out the bracket gives four separate terms. The expression as it stands has no bracket that is a factor of both its terms, so the terms are set free to be grouped."
                },
                {
                  "step": "$x^2 + xy + 3x + 3y = (x^2 + xy) + (3x + 3y)$",
                  "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
                },
                {
                  "step": "$(x^2 + xy) + (3x + 3y) = x(x + y) + (3x + 3y)$",
                  "reason": "Factoring takes the common factor $x$ out of the first pair, which leaves the bracket $(x + y)$."
                },
                {
                  "step": "$x(x + y) + (3x + 3y) = x(x + y) + 3(x + y)$",
                  "reason": "Factoring takes the common factor $3$ out of the second pair, which leaves the same bracket as the first pair."
                },
                {
                  "step": "$x(x + y) + 3(x + y) = (x + 3)(x + y)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $x + 3$ nor $x + y$ has a common factor of its terms, so $(x + 3)(x + y)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $y(y + 3x + 4) + 12x$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(y+4)*(y+3*x)",
              "lines": [
                {
                  "step": "Factor $y(y + 3x + 4) + 12x$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y(y + 3x + 4) + 12x = y^2 + 3xy + 4y + 12x$",
                  "reason": "Multiplying out the bracket gives four separate terms. The expression as it stands has no bracket that is a factor of both its terms, so the terms are set free to be grouped."
                },
                {
                  "step": "$y^2 + 3xy + 4y + 12x = (y^2 + 3xy) + (4y + 12x)$",
                  "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
                },
                {
                  "step": "$(y^2 + 3xy) + (4y + 12x) = y(y + 3x) + (4y + 12x)$",
                  "reason": "Factoring takes the common factor $y$ out of the first pair, which leaves the bracket $(y + 3x)$."
                },
                {
                  "step": "$y(y + 3x) + (4y + 12x) = y(y + 3x) + 4(y + 3x)$",
                  "reason": "Factoring takes the common factor $4$ out of the second pair, which leaves the same bracket as the first pair."
                },
                {
                  "step": "$y(y + 3x) + 4(y + 3x) = (y + 4)(y + 3x)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $y + 4$ nor $y + 3x$ has a common factor of its terms, so $(y + 4)(y + 3x)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            },
            {
              "prompt": "Factor $x(x + y + z) + yz$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x+z)*(x+y)",
              "lines": [
                {
                  "step": "Factor $x(x + y + z) + yz$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + y + z) + yz = x^2 + xy + xz + yz$",
                  "reason": "Multiplying out the bracket gives four separate terms. The expression as it stands has no bracket that is a factor of both its terms, so the terms are set free to be grouped."
                },
                {
                  "step": "$x^2 + xy + xz + yz = (x^2 + xy) + (xz + yz)$",
                  "reason": "Factoring by grouping takes the terms in two pairs, each with a common factor of its own, and the associative law of addition allows the brackets."
                },
                {
                  "step": "$(x^2 + xy) + (xz + yz) = x(x + y) + (xz + yz)$",
                  "reason": "Factoring takes the common factor $x$ out of the first pair, which leaves the bracket $(x + y)$."
                },
                {
                  "step": "$x(x + y) + (xz + yz) = x(x + y) + z(x + y)$",
                  "reason": "Factoring takes the common factor $z$ out of the second pair, which leaves the same bracket as the first pair."
                },
                {
                  "step": "$x(x + y) + z(x + y) = (x + z)(x + y)$",
                  "reason": "Factoring out a bracket is the distributive law, read from right to left, with the bracket as the common factor, which leaves the sum of the two multipliers as the other factor."
                },
                {
                  "step": "Neither $x + z$ nor $x + y$ has a common factor of its terms, so $(x + z)(x + y)$ is factored completely.",
                  "reason": "Factoring completely leaves no bracket with a common factor to take out, which this line checks for each bracket."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t106-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a term which, multiplied by $4x^3$, gives $28x^7$.",
            "lines": [
              {
                "step": "Find a term which, multiplied by $4x^3$, gives $28x^7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$28x^7 = (4\\cdot 7)x^7$",
                "reason": "The multiplication of whole numbers writes $28$ as $4$ times $7$, which shows the number of the given term."
              },
              {
                "step": "$(4\\cdot 7)x^7 = (4\\cdot 7)(x^3\\cdot x^4)$",
                "reason": "The product law, read from right to left, writes a power as the power in the given term times another power of the same letter, which shows the letters of the given term."
              },
              {
                "step": "$(4\\cdot 7)(x^3\\cdot x^4) = (4x^3)(7x^4)$",
                "reason": "The associative and commutative laws of multiplication bring the given term together as the first factor, which leaves the term asked for as the second."
              },
              {
                "step": "Such a term is $7x^4$.",
                "reason": "Factoring has written $28x^7$ as the given term times one other term, and that term is the answer."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a term which, multiplied by $5y^2$, gives $45y^9$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "9*y^7",
              "lines": [
                {
                  "step": "Find a term which, multiplied by $5y^2$, gives $45y^9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$45y^9 = (5\\cdot 9)y^9$",
                  "reason": "The multiplication of whole numbers writes $45$ as $5$ times $9$, which shows the number of the given term."
                },
                {
                  "step": "$(5\\cdot 9)y^9 = (5\\cdot 9)(y^2\\cdot y^7)$",
                  "reason": "The product law, read from right to left, writes a power as the power in the given term times another power of the same letter, which shows the letters of the given term."
                },
                {
                  "step": "$(5\\cdot 9)(y^2\\cdot y^7) = (5y^2)(9y^7)$",
                  "reason": "The associative and commutative laws of multiplication bring the given term together as the first factor, which leaves the term asked for as the second."
                },
                {
                  "step": "Such a term is $9y^7$.",
                  "reason": "Factoring has written $45y^9$ as the given term times one other term, and that term is the answer."
                }
              ]
            },
            {
              "prompt": "Find a term which, multiplied by $3x^2y$, gives $-24x^5y^4$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "-8*x^3*y^3",
              "lines": [
                {
                  "step": "Find a term which, multiplied by $3x^2y$, gives $-24x^5y^4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-24x^5y^4 = (3\\cdot (-8))x^5y^4$",
                  "reason": "The sign rules for products write $-24$ as $3$ times $-8$, which shows the number of the given term."
                },
                {
                  "step": "$(3\\cdot (-8))x^5y^4 = (3\\cdot (-8))(x^2\\cdot x^3)(y\\cdot y^3)$",
                  "reason": "The product law, read from right to left, writes a power as the power in the given term times another power of the same letter, which shows the letters of the given term."
                },
                {
                  "step": "$(3\\cdot (-8))(x^2\\cdot x^3)(y\\cdot y^3) = (3x^2y)(-8x^3y^3)$",
                  "reason": "The associative and commutative laws of multiplication bring the given term together as the first factor, which leaves the term asked for as the second."
                },
                {
                  "step": "Such a term is $-8x^3y^3$.",
                  "reason": "Factoring has written $-24x^5y^4$ as the given term times one other term, and that term is the answer."
                }
              ]
            },
            {
              "prompt": "Find a term which, multiplied by $6z^4$, gives $54z^5$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "9*z",
              "lines": [
                {
                  "step": "Find a term which, multiplied by $6z^4$, gives $54z^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$54z^5 = (6\\cdot 9)z^5$",
                  "reason": "The multiplication of whole numbers writes $54$ as $6$ times $9$, which shows the number of the given term."
                },
                {
                  "step": "$(6\\cdot 9)z^5 = (6\\cdot 9)(z^4\\cdot z)$",
                  "reason": "The product law, read from right to left, writes a power as the power in the given term times another power of the same letter, which shows the letters of the given term."
                },
                {
                  "step": "$(6\\cdot 9)(z^4\\cdot z) = (6z^4)(9z)$",
                  "reason": "The associative and commutative laws of multiplication bring the given term together as the first factor, which leaves the term asked for as the second."
                },
                {
                  "step": "Such a term is $9z$.",
                  "reason": "Factoring has written $54z^5$ as the given term times one other term, and that term is the answer."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an expression which, multiplied by $4x$, gives $20x^2 - 28x$.",
            "lines": [
              {
                "step": "Find an expression which, multiplied by $4x$, gives $20x^2 - 28x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$20x^2 - 28x = 4x\\cdot 5x - 4x\\cdot 7$",
                "reason": "The multiplication of whole numbers and the product law write each term as $4x$ times what is left of it, which shows the given factor in every term."
              },
              {
                "step": "$4x\\cdot 5x - 4x\\cdot 7 = 4x(5x - 7)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the given factor out of every term."
              },
              {
                "step": "Such an expression is $5x - 7$.",
                "reason": "The expression is now the given factor times one bracket, and the sum in that bracket is the answer."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an expression which, multiplied by $5$, gives $15y + 40$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*y+8",
              "lines": [
                {
                  "step": "Find an expression which, multiplied by $5$, gives $15y + 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15y + 40 = 5\\cdot 3y + 5\\cdot 8$",
                  "reason": "The multiplication of whole numbers writes the number in each term as $5$ times a whole number, which shows the given factor in every term."
                },
                {
                  "step": "$5\\cdot 3y + 5\\cdot 8 = 5(3y + 8)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the given factor out of every term."
                },
                {
                  "step": "Such an expression is $3y + 8$.",
                  "reason": "The expression is now the given factor times one bracket, and the sum in that bracket is the answer."
                }
              ]
            },
            {
              "prompt": "Find an expression which, multiplied by $-2x$, gives $6x^3 - 10x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^2+5",
              "lines": [
                {
                  "step": "Find an expression which, multiplied by $-2x$, gives $6x^3 - 10x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x^3 - 10x = (-2x)(-3x^2) + (-2x)(5)$",
                  "reason": "The sign rules for products and the product law write each term as $-2x$ times a term of the opposite sign, which shows the given factor in every term."
                },
                {
                  "step": "$(-2x)(-3x^2) + (-2x)(5) = -2x(-3x^2 + 5)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the given factor out of every term."
                },
                {
                  "step": "Such an expression is $-3x^2 + 5$.",
                  "reason": "The expression is now the given factor times one bracket, and the sum in that bracket is the answer."
                }
              ]
            },
            {
              "prompt": "Find an expression which, multiplied by $y^2$, gives $4y^5 + y^3 - 9y^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "4*y^3+y-9",
              "lines": [
                {
                  "step": "Find an expression which, multiplied by $y^2$, gives $4y^5 + y^3 - 9y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4y^5 + y^3 - 9y^2 = y^2\\cdot 4y^3 + y^2\\cdot y - y^2\\cdot 9$",
                  "reason": "The product law adds the exponents of powers of one base, so each term is $y^2$ times what is left of it, which shows the given factor in every term."
                },
                {
                  "step": "$y^2\\cdot 4y^3 + y^2\\cdot y - y^2\\cdot 9 = y^2(4y^3 + y - 9)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the given factor out of every term."
                },
                {
                  "step": "Such an expression is $4y^3 + y - 9$.",
                  "reason": "The expression is now the given factor times one bracket, and the sum in that bracket is the answer."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a term which, multiplied by $(2x - 3y)$, gives $10x^2 - 15xy$.",
            "lines": [
              {
                "step": "Find a term which, multiplied by $(2x - 3y)$, gives $10x^2 - 15xy$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term of the product is $10x^2$, which is $5x$ times $2x$, the first term of the bracket.",
                "reason": "Multiplying out a bracket multiplies each of its terms by the same factor, so that factor turns the first term of the bracket into the first term of the product."
              },
              {
                "step": "The second term agrees: $5x$ times $-3y$ is $-15xy$.",
                "reason": "The sign rules for products and the product law give each product of two terms, which checks the factor against the rest of the expression."
              },
              {
                "step": "$10x^2 - 15xy = 5x(2x - 3y)$",
                "reason": "Factoring by the distributive law, read from right to left, takes the factor found out of every term."
              },
              {
                "step": "Such a term is $5x$.",
                "reason": "The expression is now the bracket times one factor, and that factor is the answer."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number which, multiplied by $(3x + 4)$, gives $18x + 24$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find a number which, multiplied by $(3x + 4)$, gives $18x + 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term of the product is $18x$, which is $6$ times $3x$, the first term of the bracket.",
                  "reason": "Multiplying out a bracket multiplies each of its terms by the same factor, so that factor turns the first term of the bracket into the first term of the product."
                },
                {
                  "step": "The second term agrees: $6$ times $4$ is $24$.",
                  "reason": "The sign rules for products and the product law give each product of two terms, which checks the factor against the rest of the expression."
                },
                {
                  "step": "$18x + 24 = 6(3x + 4)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the factor found out of every term."
                },
                {
                  "step": "Such a number is $6$.",
                  "reason": "The expression is now the bracket times one factor, and that factor is the answer."
                }
              ]
            },
            {
              "prompt": "Find a term which, multiplied by $(x - 5y)$, gives $-2xy + 10y^2$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "-2*y",
              "lines": [
                {
                  "step": "Find a term which, multiplied by $(x - 5y)$, gives $-2xy + 10y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term of the product is $-2xy$, which is $-2y$ times $x$, the first term of the bracket.",
                  "reason": "Multiplying out a bracket multiplies each of its terms by the same factor, so that factor turns the first term of the bracket into the first term of the product."
                },
                {
                  "step": "The second term agrees: $-2y$ times $-5y$ is $10y^2$.",
                  "reason": "The sign rules for products and the product law give each product of two terms, which checks the factor against the rest of the expression."
                },
                {
                  "step": "$-2xy + 10y^2 = -2y(x - 5y)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the factor found out of every term."
                },
                {
                  "step": "Such a term is $-2y$.",
                  "reason": "The expression is now the bracket times one factor, and that factor is the answer."
                }
              ]
            },
            {
              "prompt": "Find a term which, multiplied by $(4y + 1)$, gives $12y^3 + 3y^2$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "3*y^2",
              "lines": [
                {
                  "step": "Find a term which, multiplied by $(4y + 1)$, gives $12y^3 + 3y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term of the product is $12y^3$, which is $3y^2$ times $4y$, the first term of the bracket.",
                  "reason": "Multiplying out a bracket multiplies each of its terms by the same factor, so that factor turns the first term of the bracket into the first term of the product."
                },
                {
                  "step": "The second term agrees: $3y^2$ times $1$ is $3y^2$.",
                  "reason": "The sign rules for products and the product law give each product of two terms, which checks the factor against the rest of the expression."
                },
                {
                  "step": "$12y^3 + 3y^2 = 3y^2(4y + 1)$",
                  "reason": "Factoring by the distributive law, read from right to left, takes the factor found out of every term."
                },
                {
                  "step": "Such a term is $3y^2$.",
                  "reason": "The expression is now the bracket times one factor, and that factor is the answer."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t106-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this factoring of $-10x^4 + 25x^3 - 15x^2$, and write that line right.",
            "given": [
              "$-10x^4 + 25x^3 - 15x^2 = (-5)(2x^4) + (-5)(-5x^3) + (-5)(3x^2)$",
              "$(-5)(2x^4) + (-5)(-5x^3) + (-5)(3x^2) = -5(2x^4 + 5x^3 - 3x^2)$",
              "$-5(2x^4 + 5x^3 - 3x^2) = -5x^2(2x^2 + 5x - 3)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factoring of $-10x^4 + 25x^3 - 15x^2$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes out the factor $-5$, with its minus sign, and writes $+5x^3$ and $-3x^2$ in the bracket, with the signs that these terms had before the factor came out.",
                "reason": "Factoring out a common factor with a minus sign gives every term in the bracket the sign opposite to the one it had, by the sign rules for products."
              },
              {
                "step": "Multiplied out, the right side of line 2 is $-10x^4 - 25x^3 + 15x^2$, while the left side equals $-10x^4 + 25x^3 - 15x^2$.",
                "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here two terms have the opposite sign: a sign is lost."
              },
              {
                "step": "Line 2 written right is $(-5)(2x^4) + (-5)(-5x^3) + (-5)(3x^2) = -5(2x^4 - 5x^3 + 3x^2)$.",
                "reason": "A factor with a minus sign gives each term in the bracket the sign opposite to the one it had before the factor came out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factoring of $-6x^2y + 14xy^2$, and write that line right.",
              "given": [
                "$-6x^2y + 14xy^2 = -2(3x^2y + 7xy^2)$",
                "$-2(3x^2y + 7xy^2) = -2x(3xy + 7y^2)$",
                "$-2x(3xy + 7y^2) = -2xy(3x + 7y)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: -6*x^2*y+14*x*y^2 = -2*(3*x^2*y-7*x*y^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $-6x^2y + 14xy^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes out the factor $-2$, with its minus sign, and writes $+7xy^2$ in the bracket, with the sign that this term had before the factor came out.",
                  "reason": "Factoring out a common factor with a minus sign gives every term in the bracket the sign opposite to the one it had, by the sign rules for products."
                },
                {
                  "step": "Multiplied out, the right side of line 1 is $-6x^2y - 14xy^2$, while the left side equals $-6x^2y + 14xy^2$.",
                  "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here one term has the opposite sign: a sign is lost."
                },
                {
                  "step": "Line 1 written right is $-6x^2y + 14xy^2 = -2(3x^2y - 7xy^2)$.",
                  "reason": "A factor with a minus sign gives each term in the bracket the sign opposite to the one it had before the factor came out."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $-9y^5 - 12y^3 + 21y^2$, and write that line right.",
              "given": [
                "$-9y^5 - 12y^3 + 21y^2 = y^2\\cdot (-9y^3) - y^2\\cdot 12y + y^2\\cdot 21$",
                "$y^2\\cdot (-9y^3) - y^2\\cdot 12y + y^2\\cdot 21 = y^2(-9y^3 - 12y + 21)$",
                "$y^2(-9y^3 - 12y + 21) = -3y^2(3y^3 + 4y + 7)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y^2*(-9*y^3-12*y+21) = -3*y^2*(3*y^3+4*y-7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $-9y^5 - 12y^3 + 21y^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes out the factor $-3$, with its minus sign, and writes $+7$ in the bracket, with the sign that this term had before the factor came out.",
                  "reason": "Factoring out a common factor with a minus sign gives every term in the bracket the sign opposite to the one it had, by the sign rules for products."
                },
                {
                  "step": "Multiplied out, the right side of line 3 is $-9y^5 - 12y^3 - 21y^2$, while the left side equals $-9y^5 - 12y^3 + 21y^2$.",
                  "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here one term has the opposite sign: a sign is lost."
                },
                {
                  "step": "Line 3 written right is $y^2(-9y^3 - 12y + 21) = -3y^2(3y^3 + 4y - 7)$.",
                  "reason": "A factor with a minus sign gives each term in the bracket the sign opposite to the one it had before the factor came out."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $-4x^3z + 6x^2z^2 - 10xz$, and write that line right.",
              "given": [
                "$-4x^3z + 6x^2z^2 - 10xz = x(-4x^2z + 6xz^2 - 10z)$",
                "$x(-4x^2z + 6xz^2 - 10z) = -2x(2x^2z + 3xz^2 - 5z)$",
                "$-2x(2x^2z + 3xz^2 - 5z) = -2xz(2x^2 + 3xz - 5)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x*(-4*x^2*z+6*x*z^2-10*z) = -2*x*(2*x^2*z-3*x*z^2+5*z)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $-4x^3z + 6x^2z^2 - 10xz$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes out the factor $-2$, with its minus sign, and writes $+3xz^2$ and $-5z$ in the bracket, with the signs that these terms had before the factor came out.",
                  "reason": "Factoring out a common factor with a minus sign gives every term in the bracket the sign opposite to the one it had, by the sign rules for products."
                },
                {
                  "step": "Multiplied out, the right side of line 2 is $-4x^3z - 6x^2z^2 + 10xz$, while the left side equals $-4x^3z + 6x^2z^2 - 10xz$.",
                  "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here two terms have the opposite sign: a sign is lost."
                },
                {
                  "step": "Line 2 written right is $x(-4x^2z + 6xz^2 - 10z) = -2x(2x^2z - 3xz^2 + 5z)$.",
                  "reason": "A factor with a minus sign gives each term in the bracket the sign opposite to the one it had before the factor came out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this factoring of $12x^3 - 20x^2 + 8x$, and write that line right.",
            "given": [
              "$12x^3 - 20x^2 + 8x = 4\\cdot 3x^3 - 4\\cdot 5x^2 + 4\\cdot 2x$",
              "$4\\cdot 3x^3 - 4\\cdot 5x^2 + 4\\cdot 2x = 4(3x^3 + 5x^2 + 2x)$",
              "$4(3x^3 + 5x^2 + 2x) = 4x(3x^2 + 5x + 2)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factoring of $12x^3 - 20x^2 + 8x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes out the factor $4$, which has no minus sign, and writes $+5x^2$ in the bracket where the term before the factor came out was $-20x^2$.",
                "reason": "Factoring out a common factor with no minus sign leaves every term in the bracket with the sign it had, by the sign rules for products."
              },
              {
                "step": "Multiplied out, the right side of line 2 is $12x^3 + 20x^2 + 8x$, while the left side equals $12x^3 - 20x^2 + 8x$.",
                "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here one term has the opposite sign: a sign is lost."
              },
              {
                "step": "Line 2 written right is $4\\cdot 3x^3 - 4\\cdot 5x^2 + 4\\cdot 2x = 4(3x^3 - 5x^2 + 2x)$.",
                "reason": "A factor with no minus sign leaves each term in the bracket the sign it had before the factor came out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factoring of $9x^2y - 15xy^2$, and write that line right.",
              "given": [
                "$9x^2y - 15xy^2 = 3(3x^2y + 5xy^2)$",
                "$3(3x^2y + 5xy^2) = 3x(3xy + 5y^2)$",
                "$3x(3xy + 5y^2) = 3xy(3x + 5y)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 9*x^2*y-15*x*y^2 = 3*(3*x^2*y-5*x*y^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $9x^2y - 15xy^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes out the factor $3$, which has no minus sign, and writes $+5xy^2$ in the bracket where the term before the factor came out was $-15xy^2$.",
                  "reason": "Factoring out a common factor with no minus sign leaves every term in the bracket with the sign it had, by the sign rules for products."
                },
                {
                  "step": "Multiplied out, the right side of line 1 is $9x^2y + 15xy^2$, while the left side equals $9x^2y - 15xy^2$.",
                  "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here one term has the opposite sign: a sign is lost."
                },
                {
                  "step": "Line 1 written right is $9x^2y - 15xy^2 = 3(3x^2y - 5xy^2)$.",
                  "reason": "A factor with no minus sign leaves each term in the bracket the sign it had before the factor came out."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $6y^4 - 9y^3 - 21y^2$, and write that line right.",
              "given": [
                "$6y^4 - 9y^3 - 21y^2 = y^2\\cdot 6y^2 - y^2\\cdot 9y - y^2\\cdot 21$",
                "$y^2\\cdot 6y^2 - y^2\\cdot 9y - y^2\\cdot 21 = y^2(6y^2 - 9y - 21)$",
                "$y^2(6y^2 - 9y - 21) = 3y^2(2y^2 - 3y + 7)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y^2*(6*y^2-9*y-21) = 3*y^2*(2*y^2-3*y-7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $6y^4 - 9y^3 - 21y^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes out the factor $3$, which has no minus sign, and writes $+7$ in the bracket where the term before the factor came out was $-21$.",
                  "reason": "Factoring out a common factor with no minus sign leaves every term in the bracket with the sign it had, by the sign rules for products."
                },
                {
                  "step": "Multiplied out, the right side of line 3 is $6y^4 - 9y^3 + 21y^2$, while the left side equals $6y^4 - 9y^3 - 21y^2$.",
                  "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here one term has the opposite sign: a sign is lost."
                },
                {
                  "step": "Line 3 written right is $y^2(6y^2 - 9y - 21) = 3y^2(2y^2 - 3y - 7)$.",
                  "reason": "A factor with no minus sign leaves each term in the bracket the sign it had before the factor came out."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $10x^2z + 4xz^2 - 6xz$, and write that line right.",
              "given": [
                "$10x^2z + 4xz^2 - 6xz = 2(5x^2z + 2xz^2 - 3xz)$",
                "$2(5x^2z + 2xz^2 - 3xz) = 2x(5xz + 2z^2 + 3z)$",
                "$2x(5xz + 2z^2 + 3z) = 2xz(5x + 2z + 3)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*(5*x^2*z+2*x*z^2-3*x*z) = 2*x*(5*x*z+2*z^2-3*z)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $10x^2z + 4xz^2 - 6xz$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes out the factor $x$, which has no minus sign, and writes $+3z$ in the bracket where the term before the factor came out was $-3xz$.",
                  "reason": "Factoring out a common factor with no minus sign leaves every term in the bracket with the sign it had, by the sign rules for products."
                },
                {
                  "step": "Multiplied out, the right side of line 2 is $10x^2z + 4xz^2 + 6xz$, while the left side equals $10x^2z + 4xz^2 - 6xz$.",
                  "reason": "Multiplying out undoes factoring, so the two sides of a right line give the same expression, and here one term has the opposite sign: a sign is lost."
                },
                {
                  "step": "Line 2 written right is $2(5x^2z + 2xz^2 - 3xz) = 2x(5xz + 2z^2 - 3z)$.",
                  "reason": "A factor with no minus sign leaves each term in the bracket the sign it had before the factor came out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this factoring of $10x^2 + 15x + 5$, and write that line right.",
            "given": [
              "$10x^2 + 15x + 5 = 5\\cdot 2x^2 + 5\\cdot 3x + 5\\cdot 1$",
              "$5\\cdot 2x^2 + 5\\cdot 3x + 5\\cdot 1 = 5x(2x + 3 + 1)$",
              "$5x(2x + 3 + 1) = 5x(2x + 4)$",
              "$5x(2x + 4) = 10x(x + 2)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factoring of $10x^2 + 15x + 5$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes the letter $x$ out of every term, and the term $5$ has no $x$.",
                "reason": "A common factor is a factor of every term. The line reads the letter as a label that the whole expression carries, while a letter stands for a number and multiplies only the terms it is written in."
              },
              {
                "step": "With $2$ in place of $x$, the left side of line 2 is $75$ and the right side is $80$.",
                "reason": "Substituting a value into both sides tests whether they are equal, and here the two values differ."
              },
              {
                "step": "Line 2 written right is $5\\cdot 2x^2 + 5\\cdot 3x + 5\\cdot 1 = 5(2x^2 + 3x + 1)$.",
                "reason": "The highest common factor holds only the number and the letters that every term has, so $x$ stays inside the bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factoring of $12y^2 + 8y + 4$, and write that line right.",
              "given": [
                "$12y^2 + 8y + 4 = 4y(3y + 2 + 1)$",
                "$4y(3y + 2 + 1) = 4y(3y + 3)$",
                "$4y(3y + 3) = 12y(y + 1)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 12*y^2+8*y+4 = 4*(3*y^2+2*y+1)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $12y^2 + 8y + 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes the letter $y$ out of every term, and the term $4$ has no $y$.",
                  "reason": "A common factor is a factor of every term. The line reads the letter as a label that the whole expression carries, while a letter stands for a number and multiplies only the terms it is written in."
                },
                {
                  "step": "With $2$ in place of $y$, the left side of line 1 is $68$ and the right side is $72$.",
                  "reason": "Substituting a value into both sides tests whether they are equal, and here the two values differ."
                },
                {
                  "step": "Line 1 written right is $12y^2 + 8y + 4 = 4(3y^2 + 2y + 1)$.",
                  "reason": "The highest common factor holds only the number and the letters that every term has, so $y$ stays inside the bracket."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $6x^2y + 9xy + 3x$, and write that line right.",
              "given": [
                "$6x^2y + 9xy + 3x = 3(2x^2y + 3xy + x)$",
                "$3(2x^2y + 3xy + x) = 3xy(2x + 3 + 1)$",
                "$3xy(2x + 3 + 1) = 3xy(2x + 4)$",
                "$3xy(2x + 4) = 6xy(x + 2)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 3*(2*x^2*y+3*x*y+x) = 3*x*(2*x*y+3*y+1)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $6x^2y + 9xy + 3x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes the letter $y$ out of every term, and the term $x$ has no $y$.",
                  "reason": "A common factor is a factor of every term. The line reads the letter as a label that the whole expression carries, while a letter stands for a number and multiplies only the terms it is written in."
                },
                {
                  "step": "With $2$ in place of $y$ and $1$ in place of $x$, the left side of line 2 is $33$ and the right side is $36$.",
                  "reason": "Substituting a value into both sides tests whether they are equal, and here the two values differ."
                },
                {
                  "step": "Line 2 written right is $3(2x^2y + 3xy + x) = 3x(2xy + 3y + 1)$.",
                  "reason": "The highest common factor holds only the number and the letters that every term has, so $y$ stays inside the bracket."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $8xy^2 + 4xy + 12y$, and write that line right.",
              "given": [
                "$8xy^2 + 4xy + 12y = 4\\cdot 2xy^2 + 4\\cdot xy + 4\\cdot 3y$",
                "$4\\cdot 2xy^2 + 4\\cdot xy + 4\\cdot 3y = 4(2xy^2 + xy + 3y)$",
                "$4(2xy^2 + xy + 3y) = 4xy(2y + 4)$",
                "$4xy(2y + 4) = 8xy(y + 2)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*(2*x*y^2+x*y+3*y) = 4*y*(2*x*y+x+3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $8xy^2 + 4xy + 12y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes the letter $x$ out of every term, and the term $3y$ has no $x$.",
                  "reason": "A common factor is a factor of every term. The line reads the letter as a label that the whole expression carries, while a letter stands for a number and multiplies only the terms it is written in."
                },
                {
                  "step": "With $2$ in place of $x$ and $1$ in place of $y$, the left side of line 3 is $36$ and the right side is $48$.",
                  "reason": "Substituting a value into both sides tests whether they are equal, and here the two values differ."
                },
                {
                  "step": "Line 3 written right is $4(2xy^2 + xy + 3y) = 4y(2xy + x + 3)$.",
                  "reason": "The highest common factor holds only the number and the letters that every term has, so $x$ stays inside the bracket."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t106-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 4 more than $x$ is 12 more than 3 times $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 4 more than $x$ is 12 more than 3 times $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number that is 4 more than $x$ is $x + 4$.",
                "reason": "Writing a sentence as an equation: the words \"more than\" mean that 4 is added to what follows them."
              },
              {
                "step": "The product of $x$ and that number is $x(x + 4)$.",
                "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
              },
              {
                "step": "The number that is 12 more than 3 times $x$ is $3x + 12$.",
                "reason": "Writing a sentence as an equation: the words \"more than\" mean that 12 is added to what follows them, and by the definition of a coefficient 3 times $x$ is written $3x$."
              },
              {
                "step": "$x(x + 4) = 3x + 12$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 6 less than $x$ equals 12 less than twice $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x-6) = 2*x-12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 6 less than $x$ equals 12 less than twice $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 6 less than $x$ is $x - 6$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 6 is taken away from what follows them."
                },
                {
                  "step": "The product of $x$ and that number is $x(x - 6)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The number that is 12 less than twice $x$ is $2x - 12$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 12 is taken away from what follows them, and by the definition of a coefficient twice $x$ is written $2x$."
                },
                {
                  "step": "$x(x - 6) = 2x - 12$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 2 more than $x$ is equal to 10 more than 5 times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x+2) = 5*x+10",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 2 more than $x$ is equal to 10 more than 5 times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 2 more than $x$ is $x + 2$.",
                  "reason": "Writing a sentence as an equation: the words \"more than\" mean that 2 is added to what follows them."
                },
                {
                  "step": "The product of $x$ and that number is $x(x + 2)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The number that is 10 more than 5 times $x$ is $5x + 10$.",
                  "reason": "Writing a sentence as an equation: the words \"more than\" mean that 10 is added to what follows them, and by the definition of a coefficient 5 times $x$ is written $5x$."
                },
                {
                  "step": "$x(x + 2) = 5x + 10$",
                  "reason": "Writing a sentence as an equation: the words \"is equal to\" stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 9 less than $x$ is 7 more than twice $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x-9) = 2*x+7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the product of a number $x$ and the number that is 9 less than $x$ is 7 more than twice $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 9 less than $x$ is $x - 9$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 9 is taken away from what follows them."
                },
                {
                  "step": "The product of $x$ and that number is $x(x - 9)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The number that is 7 more than twice $x$ is $2x + 7$.",
                  "reason": "Writing a sentence as an equation: the words \"more than\" mean that 7 is added to what follows them, and by the definition of a coefficient twice $x$ is written $2x$."
                },
                {
                  "step": "$x(x - 9) = 2x + 7$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write an equation for $y$. Two products are formed: 5 times the sum of $x$ and 3, and $x$ times that same sum. The number $y$ is the first product plus the second.",
            "lines": [
              {
                "step": "Write an equation for $y$. Two products are formed: 5 times the sum of $x$ and 3, and $x$ times that same sum. The number $y$ is the first product plus the second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of $x$ and 3 is $x + 3$.",
                "reason": "Writing a sentence as an equation: the word \"sum\" means that the two numbers are added."
              },
              {
                "step": "The first product, 5 times that sum, is $5(x + 3)$.",
                "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
              },
              {
                "step": "The second product, $x$ times the same sum, is $x(x + 3)$.",
                "reason": "Writing a sentence as an equation: the same number is written with the same bracket, so the two products have a common factor."
              },
              {
                "step": "The first product plus the second is $5(x + 3) + x(x + 3)$.",
                "reason": "Writing a sentence as an equation: the word \"plus\" means that the second product is added to the first."
              },
              {
                "step": "$y = 5(x + 3) + x(x + 3)$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$. Two products are formed: $x$ times the number that is 2 less than $x$, and 5 times that same number. The number $y$ is the first product minus the second.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x*(x-2)-5*(x-2)",
              "lines": [
                {
                  "step": "Write an equation for $y$. Two products are formed: $x$ times the number that is 2 less than $x$, and 5 times that same number. The number $y$ is the first product minus the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 2 less than $x$ is $x - 2$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 2 is taken away from what follows them."
                },
                {
                  "step": "The first product, $x$ times that number, is $x(x - 2)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The second product, 5 times the same number, is $5(x - 2)$.",
                  "reason": "Writing a sentence as an equation: the same number is written with the same bracket, so the two products have a common factor."
                },
                {
                  "step": "The first product minus the second is $x(x - 2) - 5(x - 2)$.",
                  "reason": "Writing a sentence as an equation: the word \"minus\" means that the second product is taken away from the first."
                },
                {
                  "step": "$y = x(x - 2) - 5(x - 2)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$. Two products are formed: 7 times the sum of $x$ and 1, and $x$ times that same sum. The number $y$ is the first product minus the second.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 7*(x+1)-x*(x+1)",
              "lines": [
                {
                  "step": "Write an equation for $y$. Two products are formed: 7 times the sum of $x$ and 1, and $x$ times that same sum. The number $y$ is the first product minus the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and 1 is $x + 1$.",
                  "reason": "Writing a sentence as an equation: the word \"sum\" means that the two numbers are added."
                },
                {
                  "step": "The first product, 7 times that sum, is $7(x + 1)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The second product, $x$ times the same sum, is $x(x + 1)$.",
                  "reason": "Writing a sentence as an equation: the same number is written with the same bracket, so the two products have a common factor."
                },
                {
                  "step": "The first product minus the second is $7(x + 1) - x(x + 1)$.",
                  "reason": "Writing a sentence as an equation: the word \"minus\" means that the second product is taken away from the first."
                },
                {
                  "step": "$y = 7(x + 1) - x(x + 1)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$. Two products are formed: $x$ times the number that is 9 less than $x$, and 2 times that same number. The number $y$ is the first product plus the second.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x*(x-9)+2*(x-9)",
              "lines": [
                {
                  "step": "Write an equation for $y$. Two products are formed: $x$ times the number that is 9 less than $x$, and 2 times that same number. The number $y$ is the first product plus the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 9 less than $x$ is $x - 9$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 9 is taken away from what follows them."
                },
                {
                  "step": "The first product, $x$ times that number, is $x(x - 9)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The second product, 2 times the same number, is $2(x - 9)$.",
                  "reason": "Writing a sentence as an equation: the same number is written with the same bracket, so the two products have a common factor."
                },
                {
                  "step": "The first product plus the second is $x(x - 9) + 2(x - 9)$.",
                  "reason": "Writing a sentence as an equation: the word \"plus\" means that the second product is added to the first."
                },
                {
                  "step": "$y = x(x - 9) + 2(x - 9)$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$: 3 times the sum of two numbers $x$ and $y$ is 5 more than the product of the two numbers.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$: 3 times the sum of two numbers $x$ and $y$ is 5 more than the product of the two numbers.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the two numbers is $x + y$.",
                "reason": "Writing a sentence as an equation: the word \"sum\" means that the two numbers are added."
              },
              {
                "step": "The product 3 times the sum is $3(x + y)$.",
                "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
              },
              {
                "step": "The product of the two numbers is $xy$.",
                "reason": "Writing a sentence as an equation: the word \"product\" means that the two numbers are multiplied."
              },
              {
                "step": "The number that is 5 more than the product is $xy + 5$.",
                "reason": "Writing a sentence as an equation: the words \"more than\" mean that 5 is added to what follows them."
              },
              {
                "step": "$3(x + y) = xy + 5$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: 2 times the number left when a number $y$ is taken from a number $x$ is 7 less than the product of the two numbers.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*(x-y) = x*y-7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: 2 times the number left when a number $y$ is taken from a number $x$ is 7 less than the product of the two numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number left when $y$ is taken from $x$ is $x - y$.",
                  "reason": "Writing a sentence as an equation: the number taken away is written after the minus sign."
                },
                {
                  "step": "The product 2 times that number is $2(x - y)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The product of the two numbers is $xy$.",
                  "reason": "Writing a sentence as an equation: the word \"product\" means that the two numbers are multiplied."
                },
                {
                  "step": "The number that is 7 less than the product is $xy - 7$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 7 is taken away from what follows them."
                },
                {
                  "step": "$2(x - y) = xy - 7$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: 5 times the sum of two numbers $x$ and $y$ is 9 less than the product of the two numbers.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*(x+y) = x*y-9",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: 5 times the sum of two numbers $x$ and $y$ is 9 less than the product of the two numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the two numbers is $x + y$.",
                  "reason": "Writing a sentence as an equation: the word \"sum\" means that the two numbers are added."
                },
                {
                  "step": "The product 5 times the sum is $5(x + y)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The product of the two numbers is $xy$.",
                  "reason": "Writing a sentence as an equation: the word \"product\" means that the two numbers are multiplied."
                },
                {
                  "step": "The number that is 9 less than the product is $xy - 9$.",
                  "reason": "Writing a sentence as an equation: the words \"less than\" mean that 9 is taken away from what follows them."
                },
                {
                  "step": "$5(x + y) = xy - 9$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: 4 times the number left when a number $y$ is taken from a number $x$ is 1 more than the product of the two numbers.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "4*(x-y) = x*y+1",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: 4 times the number left when a number $y$ is taken from a number $x$ is 1 more than the product of the two numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number left when $y$ is taken from $x$ is $x - y$.",
                  "reason": "Writing a sentence as an equation: the number taken away is written after the minus sign."
                },
                {
                  "step": "The product 4 times that number is $4(x - y)$.",
                  "reason": "Writing a sentence as an equation: the brackets keep the number together as one factor, and a factor written in front of a bracket multiplies the whole of it."
                },
                {
                  "step": "The product of the two numbers is $xy$.",
                  "reason": "Writing a sentence as an equation: the word \"product\" means that the two numbers are multiplied."
                },
                {
                  "step": "The number that is 1 more than the product is $xy + 1$.",
                  "reason": "Writing a sentence as an equation: the words \"more than\" mean that 1 is added to what follows them."
                },
                {
                  "step": "$4(x - y) = xy + 1$",
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
