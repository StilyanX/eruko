export default {
  "number": 105,
  "title": "Like terms and multiplying out a bracket",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "55-57, 62-64, 106-112"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Simplify $11x - 4 - 3x + 9 - 2x$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "6*x+5",
    "solution": [
      "Simplify $11x - 4 - 3x + 9 - 2x$.",
      "$11x - 4 - 3x + 9 - 2x = 11x - 3x - 2x - 4 + 9$",
      "$11x - 3x - 2x - 4 + 9 = (11 - 3 - 2)x + (-4 + 9)$",
      "$(11 - 3 - 2)x + (-4 + 9) = 6x + 5$"
    ]
  },
  "ideas": [
    {
      "name": "Like terms",
      "concrete": "The sum $7x + 2x$ is 7 times a number and 2 times the same number, which is $(7 + 2)x = 9x$.",
      "general": "**Like terms** are terms with the same letters to the same powers, such as $7x$ and $2x$, or $3x^2y$ and $-5x^2y$; two numbers are like terms of each other. **Collecting like terms** is the distributive law read backwards: for all numbers $a$, $b$ and $x$, $ax + bx = (a + b)x$ and $ax - bx = (a - b)x$, and the same holds with a power or a product of letters in place of $x$. Terms that are not like terms, such as $3x^2$ and $2x$, or $5x$ and $3$, do not collect, and their sum stays written as two terms."
    },
    {
      "name": "Multiplying out",
      "concrete": "The product $4(x + 6)$ is $4\\cdot x + 4\\cdot 6 = 4x + 24$.",
      "general": "**Multiplying out** a bracket is the distributive law used on an expression with letters: for all numbers $a$, $b$ and $c$, $a(b + c) = ab + ac$ and $a(b - c) = ab - ac$. The factor in front multiplies each term in the bracket once, and the same holds for a bracket of three terms or more."
    },
    {
      "name": "Subtracting a bracket",
      "concrete": "Taking $3x + 2$ away from $10$ takes away $3x$ and takes away $2$: $10 - (3x + 2) = 10 - 3x - 2$.",
      "general": "Arithmetic's rule for removing parentheses says that $-(b + c) = -b - c$ and $-(b - c) = -b + c$ for all numbers $b$ and $c$. Used on an expression with letters, it has the name **subtracting a bracket changes every sign in it**: for all numbers $a$, $b$ and $c$, $a - (b + c) = a - b - c$ and $a - (b - c) = a - b + c$. A bracket with a plus sign in front of it, or with nothing in front of it, drops with no change."
    },
    {
      "name": "Descending order of powers",
      "concrete": "The expression $4x - 7 + 2x^3$ is written $2x^3 + 4x - 7$.",
      "general": "An expression in one letter is in **descending order of powers** when its terms run from the highest power of the letter down to the number with no letter, each power written once."
    }
  ],
  "kinds": [
    {
      "id": "t105-k1",
      "forms": [
        {
          "example": {
            "problem": "Simplify $8x + 5 - 3x + 12$.",
            "lines": [
              {
                "step": "Simplify $8x + 5 - 3x + 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$8x + 5 - 3x + 12 = 8x - 3x + 5 + 12$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$8x - 3x + 5 + 12 = (8 - 3)x + (5 + 12)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(8 - 3)x + (5 + 12) = 5x + 17$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $6x - 4 + 9x + 10$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "15*x+6",
              "lines": [
                {
                  "step": "Simplify $6x - 4 + 9x + 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x - 4 + 9x + 10 = 6x + 9x - 4 + 10$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$6x + 9x - 4 + 10 = (6 + 9)x + (-4 + 10)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(6 + 9)x + (-4 + 10) = 15x + 6$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $x + 7 - 5x - 2 + 3x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-x+5",
              "lines": [
                {
                  "step": "Simplify $x + 7 - 5x - 2 + 3x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 7 - 5x - 2 + 3x = x - 5x + 3x + 7 - 2$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$x - 5x + 3x + 7 - 2 = (1 - 5 + 3)x + (7 - 2)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(1 - 5 + 3)x + (7 - 2) = -x + 5$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $12 - 4z + 3 - 9z$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-13*z+15",
              "lines": [
                {
                  "step": "Simplify $12 - 4z + 3 - 9z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12 - 4z + 3 - 9z = -4z - 9z + 12 + 3$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$-4z - 9z + 12 + 3 = (-4 - 9)z + (12 + 3)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(-4 - 9)z + (12 + 3) = -13z + 15$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $4x^2 + 6x - x^2 + 3xy - 9x + 5xy$.",
            "lines": [
              {
                "step": "Simplify $4x^2 + 6x - x^2 + 3xy - 9x + 5xy$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x^2 + 6x - x^2 + 3xy - 9x + 5xy = 4x^2 - x^2 + 6x - 9x + 3xy + 5xy$",
                "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^2$, terms in $x$ and terms in $xy$; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$4x^2 - x^2 + 6x - 9x + 3xy + 5xy = (4 - 1)x^2 + (6 - 9)x + (3 + 5)xy$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1."
              },
              {
                "step": "$(4 - 1)x^2 + (6 - 9)x + (3 + 5)xy = 3x^2 - 3x + 8xy$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $2y^2 + 7y + 5y^2 - 3 - 4y + 8$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*y^2+3*y+5",
              "lines": [
                {
                  "step": "Simplify $2y^2 + 7y + 5y^2 - 3 - 4y + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y^2 + 7y + 5y^2 - 3 - 4y + 8 = 2y^2 + 5y^2 + 7y - 4y - 3 + 8$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $y^2$, terms in $y$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$2y^2 + 5y^2 + 7y - 4y - 3 + 8 = (2 + 5)y^2 + (7 - 4)y + (-3 + 8)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(2 + 5)y^2 + (7 - 4)y + (-3 + 8) = 7y^2 + 3y + 5$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $5xy - 2x + 3y + xy + 6x - 8y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*x*y+4*x-5*y",
              "lines": [
                {
                  "step": "Simplify $5xy - 2x + 3y + xy + 6x - 8y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5xy - 2x + 3y + xy + 6x - 8y = 5xy + xy - 2x + 6x + 3y - 8y$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $xy$, terms in $x$ and terms in $y$; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$5xy + xy - 2x + 6x + 3y - 8y = (5 + 1)xy + (-2 + 6)x + (3 - 8)y$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1."
                },
                {
                  "step": "$(5 + 1)xy + (-2 + 6)x + (3 - 8)y = 6xy + 4x - 5y$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $x^3 + 4x^2 - 6x + 2x^3 - x^2 + 10x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^3+3*x^2+4*x",
              "lines": [
                {
                  "step": "Simplify $x^3 + 4x^2 - 6x + 2x^3 - x^2 + 10x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + 4x^2 - 6x + 2x^3 - x^2 + 10x = x^3 + 2x^3 + 4x^2 - x^2 - 6x + 10x$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^3$, terms in $x^2$ and terms in $x$; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$x^3 + 2x^3 + 4x^2 - x^2 - 6x + 10x = (1 + 2)x^3 + (4 - 1)x^2 + (-6 + 10)x$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1."
                },
                {
                  "step": "$(1 + 2)x^3 + (4 - 1)x^2 + (-6 + 10)x = 3x^3 + 3x^2 + 4x$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{3}{4}x + \\dfrac{1}{2} - \\dfrac{1}{6}x + \\dfrac{2}{3}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{3}{4}x + \\dfrac{1}{2} - \\dfrac{1}{6}x + \\dfrac{2}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{3}{4}x + \\dfrac{1}{2} - \\dfrac{1}{6}x + \\dfrac{2}{3} = \\dfrac{3}{4}x - \\dfrac{1}{6}x + \\dfrac{1}{2} + \\dfrac{2}{3}$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$\\dfrac{3}{4}x - \\dfrac{1}{6}x + \\dfrac{1}{2} + \\dfrac{2}{3} = \\left(\\dfrac{3}{4} - \\dfrac{1}{6}\\right)x + \\left(\\dfrac{1}{2} + \\dfrac{2}{3}\\right)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$\\left(\\dfrac{3}{4} - \\dfrac{1}{6}\\right)x + \\left(\\dfrac{1}{2} + \\dfrac{2}{3}\\right) = \\left(\\dfrac{9}{12} - \\dfrac{2}{12}\\right)x + \\left(\\dfrac{3}{6} + \\dfrac{4}{6}\\right)$",
                "reason": "Fractions are added and subtracted over a common denominator, so each fraction in a bracket is rewritten over the common denominator of that bracket."
              },
              {
                "step": "$\\left(\\dfrac{9}{12} - \\dfrac{2}{12}\\right)x + \\left(\\dfrac{3}{6} + \\dfrac{4}{6}\\right) = \\dfrac{7}{12}x + \\dfrac{7}{6}$",
                "reason": "Fractions with a common denominator add over that denominator, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{1}{2}x + \\dfrac{2}{5} + \\dfrac{1}{3}x - \\dfrac{1}{10}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5*x/6+3/10",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{1}{2}x + \\dfrac{2}{5} + \\dfrac{1}{3}x - \\dfrac{1}{10}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{2}x + \\dfrac{2}{5} + \\dfrac{1}{3}x - \\dfrac{1}{10} = \\dfrac{1}{2}x + \\dfrac{1}{3}x + \\dfrac{2}{5} - \\dfrac{1}{10}$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$\\dfrac{1}{2}x + \\dfrac{1}{3}x + \\dfrac{2}{5} - \\dfrac{1}{10} = \\left(\\dfrac{1}{2} + \\dfrac{1}{3}\\right)x + \\left(\\dfrac{2}{5} - \\dfrac{1}{10}\\right)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2} + \\dfrac{1}{3}\\right)x + \\left(\\dfrac{2}{5} - \\dfrac{1}{10}\\right) = \\left(\\dfrac{3}{6} + \\dfrac{2}{6}\\right)x + \\left(\\dfrac{4}{10} - \\dfrac{1}{10}\\right)$",
                  "reason": "Fractions are added and subtracted over a common denominator, so each fraction in a bracket is rewritten over the common denominator of that bracket."
                },
                {
                  "step": "$\\left(\\dfrac{3}{6} + \\dfrac{2}{6}\\right)x + \\left(\\dfrac{4}{10} - \\dfrac{1}{10}\\right) = \\dfrac{5}{6}x + \\dfrac{3}{10}$",
                  "reason": "Fractions with a common denominator add over that denominator, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{5}{6}y - \\dfrac{1}{4} - \\dfrac{1}{4}y + \\dfrac{3}{8}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*y/12+1/8",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{5}{6}y - \\dfrac{1}{4} - \\dfrac{1}{4}y + \\dfrac{3}{8}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5}{6}y - \\dfrac{1}{4} - \\dfrac{1}{4}y + \\dfrac{3}{8} = \\dfrac{5}{6}y - \\dfrac{1}{4}y - \\dfrac{1}{4} + \\dfrac{3}{8}$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$\\dfrac{5}{6}y - \\dfrac{1}{4}y - \\dfrac{1}{4} + \\dfrac{3}{8} = \\left(\\dfrac{5}{6} - \\dfrac{1}{4}\\right)y + \\left(-\\dfrac{1}{4} + \\dfrac{3}{8}\\right)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$\\left(\\dfrac{5}{6} - \\dfrac{1}{4}\\right)y + \\left(-\\dfrac{1}{4} + \\dfrac{3}{8}\\right) = \\left(\\dfrac{10}{12} - \\dfrac{3}{12}\\right)y + \\left(-\\dfrac{2}{8} + \\dfrac{3}{8}\\right)$",
                  "reason": "Fractions are added and subtracted over a common denominator, so each fraction in a bracket is rewritten over the common denominator of that bracket."
                },
                {
                  "step": "$\\left(\\dfrac{10}{12} - \\dfrac{3}{12}\\right)y + \\left(-\\dfrac{2}{8} + \\dfrac{3}{8}\\right) = \\dfrac{7}{12}y + \\dfrac{1}{8}$",
                  "reason": "Fractions with a common denominator add over that denominator, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{2}{3}x^2 - x + \\dfrac{1}{4}x^2 + \\dfrac{3}{5}x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "11*x^2/12-2*x/5",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{2}{3}x^2 - x + \\dfrac{1}{4}x^2 + \\dfrac{3}{5}x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2}{3}x^2 - x + \\dfrac{1}{4}x^2 + \\dfrac{3}{5}x = \\dfrac{2}{3}x^2 + \\dfrac{1}{4}x^2 - x + \\dfrac{3}{5}x$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^2$ and terms in $x$; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$\\dfrac{2}{3}x^2 + \\dfrac{1}{4}x^2 - x + \\dfrac{3}{5}x = \\left(\\dfrac{2}{3} + \\dfrac{1}{4}\\right)x^2 + \\left(-1 + \\dfrac{3}{5}\\right)x$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1."
                },
                {
                  "step": "$\\left(\\dfrac{2}{3} + \\dfrac{1}{4}\\right)x^2 + \\left(-1 + \\dfrac{3}{5}\\right)x = \\left(\\dfrac{8}{12} + \\dfrac{3}{12}\\right)x^2 + \\left(-\\dfrac{5}{5} + \\dfrac{3}{5}\\right)x$",
                  "reason": "Fractions are added and subtracted over a common denominator, so each fraction in a bracket is rewritten over the common denominator of that bracket."
                },
                {
                  "step": "$\\left(\\dfrac{8}{12} + \\dfrac{3}{12}\\right)x^2 + \\left(-\\dfrac{5}{5} + \\dfrac{3}{5}\\right)x = \\dfrac{11}{12}x^2 - \\dfrac{2}{5}x$",
                  "reason": "Fractions with a common denominator add over that denominator, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(6x - 7) + (11 - 9x) + (4x + 3)$.",
            "lines": [
              {
                "step": "Simplify $(6x - 7) + (11 - 9x) + (4x + 3)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(6x - 7) + (11 - 9x) + (4x + 3) = 6x - 7 + 11 - 9x + 4x + 3$",
                "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
              },
              {
                "step": "$6x - 7 + 11 - 9x + 4x + 3 = 6x - 9x + 4x - 7 + 11 + 3$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$6x - 9x + 4x - 7 + 11 + 3 = (6 - 9 + 4)x + (-7 + 11 + 3)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(6 - 9 + 4)x + (-7 + 11 + 3) = x + 7$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(9x + 2) + (-4x + 6)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5*x+8",
              "lines": [
                {
                  "step": "Simplify $(9x + 2) + (-4x + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(9x + 2) + (-4x + 6) = 9x + 2 - 4x + 6$",
                  "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
                },
                {
                  "step": "$9x + 2 - 4x + 6 = 9x - 4x + 2 + 6$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$9x - 4x + 2 + 6 = (9 - 4)x + (2 + 6)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(9 - 4)x + (2 + 6) = 5x + 8$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $(3y - 5) + (8 - 7y) + (2y + 1)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*y+4",
              "lines": [
                {
                  "step": "Simplify $(3y - 5) + (8 - 7y) + (2y + 1)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3y - 5) + (8 - 7y) + (2y + 1) = 3y - 5 + 8 - 7y + 2y + 1$",
                  "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
                },
                {
                  "step": "$3y - 5 + 8 - 7y + 2y + 1 = 3y - 7y + 2y - 5 + 8 + 1$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$3y - 7y + 2y - 5 + 8 + 1 = (3 - 7 + 2)y + (-5 + 8 + 1)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(3 - 7 + 2)y + (-5 + 8 + 1) = -2y + 4$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $(2x + 4y - 3) + (5x - 6y) + (y + 7)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*x-y+4",
              "lines": [
                {
                  "step": "Simplify $(2x + 4y - 3) + (5x - 6y) + (y + 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x + 4y - 3) + (5x - 6y) + (y + 7) = 2x + 4y - 3 + 5x - 6y + y + 7$",
                  "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
                },
                {
                  "step": "$2x + 4y - 3 + 5x - 6y + y + 7 = 2x + 5x + 4y - 6y + y - 3 + 7$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x$, terms in $y$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$2x + 5x + 4y - 6y + y - 3 + 7 = (2 + 5)x + (4 - 6 + 1)y + (-3 + 7)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(2 + 5)x + (4 - 6 + 1)y + (-3 + 7) = 7x - y + 4$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(3x^2y)^2 + (2x^3)(4xy^2)$.",
            "lines": [
              {
                "step": "Simplify $(3x^2y)^2 + (2x^3)(4xy^2)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(3x^2y)^2 = 3^2(x^2)^2y^2$",
                "reason": "The power of a product gives the exponent 2 to each factor in the bracket, which leaves a power of the number and a power of each letter."
              },
              {
                "step": "$3^2(x^2)^2y^2 = 9x^4y^2$",
                "reason": "The power law multiplies the exponents of a power of a power, and $3^2 = 9$, which leaves one term."
              },
              {
                "step": "$(2x^3)(4xy^2) = (2\\cdot 4)(x^3\\cdot x)y^2$",
                "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
              },
              {
                "step": "$(2\\cdot 4)(x^3\\cdot x)y^2 = 8x^4y^2$",
                "reason": "The product law adds the exponents of powers of one base, and the multiplication of whole numbers gives the coefficient, which leaves one term."
              },
              {
                "step": "$(3x^2y)^2 + (2x^3)(4xy^2) = 9x^4y^2 + 8x^4y^2$",
                "reason": "Each product is replaced by the term equal to it. Like terms have the same letters to the same powers, and both terms have the letter part $x^4y^2$."
              },
              {
                "step": "$9x^4y^2 + 8x^4y^2 = (9 + 8)x^4y^2$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term."
              },
              {
                "step": "$(9 + 8)x^4y^2 = 17x^4y^2$",
                "reason": "The addition and subtraction of integers works out the bracket, which gives the coefficient of the one term left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(2x^3)^2 - (3x^2)(5x^4)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-11*x^6",
              "lines": [
                {
                  "step": "Simplify $(2x^3)^2 - (3x^2)(5x^4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x^3)^2 = 2^2(x^3)^2$",
                  "reason": "The power of a product gives the exponent 2 to each factor in the bracket, which leaves a power of the number and a power of each letter."
                },
                {
                  "step": "$2^2(x^3)^2 = 4x^6$",
                  "reason": "The power law multiplies the exponents of a power of a power, and $2^2 = 4$, which leaves one term."
                },
                {
                  "step": "$(3x^2)(5x^4) = (3\\cdot 5)(x^2\\cdot x^4)$",
                  "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
                },
                {
                  "step": "$(3\\cdot 5)(x^2\\cdot x^4) = 15x^6$",
                  "reason": "The product law adds the exponents of powers of one base, and the multiplication of whole numbers gives the coefficient, which leaves one term."
                },
                {
                  "step": "$(2x^3)^2 - (3x^2)(5x^4) = 4x^6 - 15x^6$",
                  "reason": "Each product is replaced by the term equal to it. Like terms have the same letters to the same powers, and both terms have the letter part $x^6$."
                },
                {
                  "step": "$4x^6 - 15x^6 = (4 - 15)x^6$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term."
                },
                {
                  "step": "$(4 - 15)x^6 = -11x^6$",
                  "reason": "The addition and subtraction of integers works out the bracket, which gives the coefficient of the one term left."
                }
              ]
            },
            {
              "prompt": "Simplify $(5xy^2)^2 + (3x^2y)(2y^3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "31*x^2*y^4",
              "lines": [
                {
                  "step": "Simplify $(5xy^2)^2 + (3x^2y)(2y^3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(5xy^2)^2 = 5^2x^2(y^2)^2$",
                  "reason": "The power of a product gives the exponent 2 to each factor in the bracket, which leaves a power of the number and a power of each letter."
                },
                {
                  "step": "$5^2x^2(y^2)^2 = 25x^2y^4$",
                  "reason": "The power law multiplies the exponents of a power of a power, and $5^2 = 25$, which leaves one term."
                },
                {
                  "step": "$(3x^2y)(2y^3) = (3\\cdot 2)x^2(y\\cdot y^3)$",
                  "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
                },
                {
                  "step": "$(3\\cdot 2)x^2(y\\cdot y^3) = 6x^2y^4$",
                  "reason": "The product law adds the exponents of powers of one base, and the multiplication of whole numbers gives the coefficient, which leaves one term."
                },
                {
                  "step": "$(5xy^2)^2 + (3x^2y)(2y^3) = 25x^2y^4 + 6x^2y^4$",
                  "reason": "Each product is replaced by the term equal to it. Like terms have the same letters to the same powers, and both terms have the letter part $x^2y^4$."
                },
                {
                  "step": "$25x^2y^4 + 6x^2y^4 = (25 + 6)x^2y^4$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term."
                },
                {
                  "step": "$(25 + 6)x^2y^4 = 31x^2y^4$",
                  "reason": "The addition and subtraction of integers works out the bracket, which gives the coefficient of the one term left."
                }
              ]
            },
            {
              "prompt": "Simplify $(4y^3z)^2 - (7y^2)(2y^4z^2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*y^6*z^2",
              "lines": [
                {
                  "step": "Simplify $(4y^3z)^2 - (7y^2)(2y^4z^2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4y^3z)^2 = 4^2(y^3)^2z^2$",
                  "reason": "The power of a product gives the exponent 2 to each factor in the bracket, which leaves a power of the number and a power of each letter."
                },
                {
                  "step": "$4^2(y^3)^2z^2 = 16y^6z^2$",
                  "reason": "The power law multiplies the exponents of a power of a power, and $4^2 = 16$, which leaves one term."
                },
                {
                  "step": "$(7y^2)(2y^4z^2) = (7\\cdot 2)(y^2\\cdot y^4)z^2$",
                  "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
                },
                {
                  "step": "$(7\\cdot 2)(y^2\\cdot y^4)z^2 = 14y^6z^2$",
                  "reason": "The product law adds the exponents of powers of one base, and the multiplication of whole numbers gives the coefficient, which leaves one term."
                },
                {
                  "step": "$(4y^3z)^2 - (7y^2)(2y^4z^2) = 16y^6z^2 - 14y^6z^2$",
                  "reason": "Each product is replaced by the term equal to it. Like terms have the same letters to the same powers, and both terms have the letter part $y^6z^2$."
                },
                {
                  "step": "$16y^6z^2 - 14y^6z^2 = (16 - 14)y^6z^2$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term."
                },
                {
                  "step": "$(16 - 14)y^6z^2 = 2y^6z^2$",
                  "reason": "The addition and subtraction of integers works out the bracket, which gives the coefficient of the one term left."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t105-k2",
      "forms": [
        {
          "example": {
            "problem": "Simplify $5(2x - 3) + 4x + 8$.",
            "lines": [
              {
                "step": "Simplify $5(2x - 3) + 4x + 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5(2x - 3) + 4x + 8 = 10x - 15 + 4x + 8$",
                "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $10x - 15$ and removes the bracket."
              },
              {
                "step": "$10x - 15 + 4x + 8 = 10x + 4x - 15 + 8$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$10x + 4x - 15 + 8 = (10 + 4)x + (-15 + 8)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(10 + 4)x + (-15 + 8) = 14x - 7$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $3(4x + 1) - 5x + 6$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*x+9",
              "lines": [
                {
                  "step": "Simplify $3(4x + 1) - 5x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3(4x + 1) - 5x + 6 = 12x + 3 - 5x + 6$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $12x + 3$ and removes the bracket."
                },
                {
                  "step": "$12x + 3 - 5x + 6 = 12x - 5x + 3 + 6$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$12x - 5x + 3 + 6 = (12 - 5)x + (3 + 6)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(12 - 5)x + (3 + 6) = 7x + 9$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $7x - 2 + 6(x - 4)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "13*x-26",
              "lines": [
                {
                  "step": "Simplify $7x - 2 + 6(x - 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x - 2 + 6(x - 4) = 7x - 2 + 6x - 24$",
                  "reason": "Multiplying out: by the distributive law the $6$ in front multiplies each term in the bracket, which gives $6x - 24$ and removes the bracket."
                },
                {
                  "step": "$7x - 2 + 6x - 24 = 7x + 6x - 2 - 24$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$7x + 6x - 2 - 24 = (7 + 6)x + (-2 - 24)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(7 + 6)x + (-2 - 24) = 13x - 26$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $8(3 - y) + 11y - 9$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*y+15",
              "lines": [
                {
                  "step": "Simplify $8(3 - y) + 11y - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8(3 - y) + 11y - 9 = 24 - 8y + 11y - 9$",
                  "reason": "Multiplying out: by the distributive law the $8$ in front multiplies each term in the bracket, which gives $24 - 8y$ and removes the bracket."
                },
                {
                  "step": "$24 - 8y + 11y - 9 = -8y + 11y + 24 - 9$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$-8y + 11y + 24 - 9 = (-8 + 11)y + (24 - 9)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(-8 + 11)y + (24 - 9) = 3y + 15$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(7x + 4) - (3x - 8)$.",
            "lines": [
              {
                "step": "Simplify $(7x + 4) - (3x - 8)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(7x + 4) - (3x - 8) = 7x + 4 - (3x - 8)$",
                "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
              },
              {
                "step": "$7x + 4 - (3x - 8) = 7x + 4 - 3x + 8$",
                "reason": "Subtracting a bracket changes every sign in it: $3x$ becomes $-3x$ and $-8$ becomes $+8$, which removes the bracket."
              },
              {
                "step": "$7x + 4 - 3x + 8 = 7x - 3x + 4 + 8$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$7x - 3x + 4 + 8 = (7 - 3)x + (4 + 8)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(7 - 3)x + (4 + 8) = 4x + 12$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(2x - 9) - (5x + 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x-12",
              "lines": [
                {
                  "step": "Simplify $(2x - 9) - (5x + 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x - 9) - (5x + 3) = 2x - 9 - (5x + 3)$",
                  "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
                },
                {
                  "step": "$2x - 9 - (5x + 3) = 2x - 9 - 5x - 3$",
                  "reason": "Subtracting a bracket changes every sign in it: $5x$ becomes $-5x$ and $+3$ becomes $-3$, which removes the bracket."
                },
                {
                  "step": "$2x - 9 - 5x - 3 = 2x - 5x - 9 - 3$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$2x - 5x - 9 - 3 = (2 - 5)x + (-9 - 3)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(2 - 5)x + (-9 - 3) = -3x - 12$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $(3y^2 + 6y - 1) - (y^2 - 2y + 7)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*y^2+8*y-8",
              "lines": [
                {
                  "step": "Simplify $(3y^2 + 6y - 1) - (y^2 - 2y + 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3y^2 + 6y - 1) - (y^2 - 2y + 7) = 3y^2 + 6y - 1 - (y^2 - 2y + 7)$",
                  "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
                },
                {
                  "step": "$3y^2 + 6y - 1 - (y^2 - 2y + 7) = 3y^2 + 6y - 1 - y^2 + 2y - 7$",
                  "reason": "Subtracting a bracket changes every sign in it: $y^2$ becomes $-y^2$, $-2y$ becomes $+2y$ and $+7$ becomes $-7$, which removes the bracket."
                },
                {
                  "step": "$3y^2 + 6y - 1 - y^2 + 2y - 7 = 3y^2 - y^2 + 6y + 2y - 1 - 7$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $y^2$, terms in $y$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$3y^2 - y^2 + 6y + 2y - 1 - 7 = (3 - 1)y^2 + (6 + 2)y + (-1 - 7)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(3 - 1)y^2 + (6 + 2)y + (-1 - 7) = 2y^2 + 8y - 8$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $(8 - 3z) - (5 - 9z)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*z+3",
              "lines": [
                {
                  "step": "Simplify $(8 - 3z) - (5 - 9z)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(8 - 3z) - (5 - 9z) = 8 - 3z - (5 - 9z)$",
                  "reason": "The associative law of addition lets a bracket with a plus sign in front of it, or with nothing in front of it, drop with no change, which sets its terms in the sum."
                },
                {
                  "step": "$8 - 3z - (5 - 9z) = 8 - 3z - 5 + 9z$",
                  "reason": "Subtracting a bracket changes every sign in it: $5$ becomes $-5$ and $-9z$ becomes $+9z$, which removes the bracket."
                },
                {
                  "step": "$8 - 3z - 5 + 9z = -3z + 9z + 8 - 5$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$-3z + 9z + 8 - 5 = (-3 + 9)z + (8 - 5)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(-3 + 9)z + (8 - 5) = 6z + 3$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $3(2x - y) - 2(x + 4y - 5)$.",
            "lines": [
              {
                "step": "Simplify $3(2x - y) - 2(x + 4y - 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3(2x - y) - 2(x + 4y - 5) = 6x - 3y - 2(x + 4y - 5)$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $6x - 3y$ and removes the bracket."
              },
              {
                "step": "$6x - 3y - 2(x + 4y - 5) = 6x - 3y - 2x - 8y + 10$",
                "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-2x - 8y + 10$ and removes the bracket."
              },
              {
                "step": "$6x - 3y - 2x - 8y + 10 = 6x - 2x - 3y - 8y + 10$",
                "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x$, terms in $y$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$6x - 2x - 3y - 8y + 10 = (6 - 2)x + (-3 - 8)y + 10$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
              },
              {
                "step": "$(6 - 2)x + (-3 - 8)y + 10 = 4x - 11y + 10$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $4(x + 3y) + 5(2x - y)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "14*x+7*y",
              "lines": [
                {
                  "step": "Simplify $4(x + 3y) + 5(2x - y)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(x + 3y) + 5(2x - y) = 4x + 12y + 5(2x - y)$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, which gives $4x + 12y$ and removes the bracket."
                },
                {
                  "step": "$4x + 12y + 5(2x - y) = 4x + 12y + 10x - 5y$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $10x - 5y$ and removes the bracket."
                },
                {
                  "step": "$4x + 12y + 10x - 5y = 4x + 10x + 12y - 5y$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x$ and terms in $y$; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$4x + 10x + 12y - 5y = (4 + 10)x + (12 - 5)y$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(4 + 10)x + (12 - 5)y = 14x + 7y$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $2(3x - 4z + 1) - 3(x - 2z)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x-2*z+2",
              "lines": [
                {
                  "step": "Simplify $2(3x - 4z + 1) - 3(x - 2z)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(3x - 4z + 1) - 3(x - 2z) = 6x - 8z + 2 - 3(x - 2z)$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, which gives $6x - 8z + 2$ and removes the bracket."
                },
                {
                  "step": "$6x - 8z + 2 - 3(x - 2z) = 6x - 8z + 2 - 3x + 6z$",
                  "reason": "Multiplying out with the minus sign: the $3$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-3x + 6z$ and removes the bracket."
                },
                {
                  "step": "$6x - 8z + 2 - 3x + 6z = 6x - 3x - 8z + 6z + 2$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x$, terms in $z$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$6x - 3x - 8z + 6z + 2 = (6 - 3)x + (-8 + 6)z + 2$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(6 - 3)x + (-8 + 6)z + 2 = 3x - 2z + 2$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $5(y - 2z) - 4(2y - 3z + 6)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*y+2*z-24",
              "lines": [
                {
                  "step": "Simplify $5(y - 2z) - 4(2y - 3z + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(y - 2z) - 4(2y - 3z + 6) = 5y - 10z - 4(2y - 3z + 6)$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $5y - 10z$ and removes the bracket."
                },
                {
                  "step": "$5y - 10z - 4(2y - 3z + 6) = 5y - 10z - 8y + 12z - 24$",
                  "reason": "Multiplying out with the minus sign: the $4$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-8y + 12z - 24$ and removes the bracket."
                },
                {
                  "step": "$5y - 10z - 8y + 12z - 24 = 5y - 8y - 10z + 12z - 24$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $y$, terms in $z$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$5y - 8y - 10z + 12z - 24 = (5 - 8)y + (-10 + 12)z - 24$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(5 - 8)y + (-10 + 12)z - 24 = -3y + 2z - 24$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Expand $4x(3x^2 - 2x + 7)$.",
            "lines": [
              {
                "step": "Expand $4x(3x^2 - 2x + 7)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x(3x^2 - 2x + 7) = 4x\\cdot 3x^2 - 4x\\cdot 2x + 4x\\cdot 7$",
                "reason": "Multiplying out: by the distributive law the $4x$ in front multiplies each term in the bracket, which removes the bracket."
              },
              {
                "step": "$4x\\cdot 3x^2 - 4x\\cdot 2x + 4x\\cdot 7 = (4\\cdot 3)(x\\cdot x^2) - (4\\cdot 2)(x\\cdot x) + (4\\cdot 7)x$",
                "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
              },
              {
                "step": "$(4\\cdot 3)(x\\cdot x^2) - (4\\cdot 2)(x\\cdot x) + (4\\cdot 7)x = (4\\cdot 3)x^3 - (4\\cdot 2)x^2 + (4\\cdot 7)x$",
                "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $x$ in each term."
              },
              {
                "step": "$(4\\cdot 3)x^3 - (4\\cdot 2)x^2 + (4\\cdot 7)x = 12x^3 - 8x^2 + 28x$",
                "reason": "The multiplication of whole numbers gives each coefficient, which leaves every term with one number in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Expand $2x(5x + 8)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "10*x^2+16*x",
              "lines": [
                {
                  "step": "Expand $2x(5x + 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x(5x + 8) = 2x\\cdot 5x + 2x\\cdot 8$",
                  "reason": "Multiplying out: by the distributive law the $2x$ in front multiplies each term in the bracket, which removes the bracket."
                },
                {
                  "step": "$2x\\cdot 5x + 2x\\cdot 8 = (2\\cdot 5)(x\\cdot x) + (2\\cdot 8)x$",
                  "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
                },
                {
                  "step": "$(2\\cdot 5)(x\\cdot x) + (2\\cdot 8)x = (2\\cdot 5)x^2 + (2\\cdot 8)x$",
                  "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $x$ in each term."
                },
                {
                  "step": "$(2\\cdot 5)x^2 + (2\\cdot 8)x = 10x^2 + 16x$",
                  "reason": "The multiplication of whole numbers gives each coefficient, which leaves every term with one number in front."
                }
              ]
            },
            {
              "prompt": "Expand $3y^2(2y^3 - 6y + 5)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*y^5-18*y^3+15*y^2",
              "lines": [
                {
                  "step": "Expand $3y^2(2y^3 - 6y + 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3y^2(2y^3 - 6y + 5) = 3y^2\\cdot 2y^3 - 3y^2\\cdot 6y + 3y^2\\cdot 5$",
                  "reason": "Multiplying out: by the distributive law the $3y^2$ in front multiplies each term in the bracket, which removes the bracket."
                },
                {
                  "step": "$3y^2\\cdot 2y^3 - 3y^2\\cdot 6y + 3y^2\\cdot 5 = (3\\cdot 2)(y^2\\cdot y^3) - (3\\cdot 6)(y^2\\cdot y) + (3\\cdot 5)y^2$",
                  "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
                },
                {
                  "step": "$(3\\cdot 2)(y^2\\cdot y^3) - (3\\cdot 6)(y^2\\cdot y) + (3\\cdot 5)y^2 = (3\\cdot 2)y^5 - (3\\cdot 6)y^3 + (3\\cdot 5)y^2$",
                  "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $y$ in each term."
                },
                {
                  "step": "$(3\\cdot 2)y^5 - (3\\cdot 6)y^3 + (3\\cdot 5)y^2 = 6y^5 - 18y^3 + 15y^2$",
                  "reason": "The multiplication of whole numbers gives each coefficient, which leaves every term with one number in front."
                }
              ]
            },
            {
              "prompt": "Expand $5xy(2x - 3y^2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "10*x^2*y-15*x*y^3",
              "lines": [
                {
                  "step": "Expand $5xy(2x - 3y^2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5xy(2x - 3y^2) = 5xy\\cdot 2x - 5xy\\cdot 3y^2$",
                  "reason": "Multiplying out: by the distributive law the $5xy$ in front multiplies each term in the bracket, which removes the bracket."
                },
                {
                  "step": "$5xy\\cdot 2x - 5xy\\cdot 3y^2 = (5\\cdot 2)(x\\cdot x)y - (5\\cdot 3)x(y\\cdot y^2)$",
                  "reason": "The associative and commutative laws of multiplication let the numbers stand together and the powers of each letter together, which sets up one rule for each group."
                },
                {
                  "step": "$(5\\cdot 2)(x\\cdot x)y - (5\\cdot 3)x(y\\cdot y^2) = (5\\cdot 2)x^2y - (5\\cdot 3)xy^3$",
                  "reason": "The product law adds the exponents of powers of one base, which leaves a single power of $x$ and $y$ in each term."
                },
                {
                  "step": "$(5\\cdot 2)x^2y - (5\\cdot 3)xy^3 = 10x^2y - 15xy^3$",
                  "reason": "The multiplication of whole numbers gives each coefficient, which leaves every term with one number in front."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $3(x^2 - 2x + 4) - x(5 - 2x)$.",
            "lines": [
              {
                "step": "Simplify $3(x^2 - 2x + 4) - x(5 - 2x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3(x^2 - 2x + 4) - x(5 - 2x) = 3x^2 - 6x + 12 - x(5 - 2x)$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $3x^2 - 6x + 12$ and removes the bracket."
              },
              {
                "step": "$3x^2 - 6x + 12 - x(5 - 2x) = 3x^2 - 6x + 12 - 5x + 2x^2$",
                "reason": "Multiplying out with the minus sign: the $x$ multiplies each term in the bracket, and the product law adds the exponents of the powers of $x$, and subtracting a bracket changes every sign in it, which gives $-5x + 2x^2$ and removes the bracket."
              },
              {
                "step": "$3x^2 - 6x + 12 - 5x + 2x^2 = 3x^2 + 2x^2 - 6x - 5x + 12$",
                "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^2$, terms in $x$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
              },
              {
                "step": "$3x^2 + 2x^2 - 6x - 5x + 12 = (3 + 2)x^2 + (-6 - 5)x + 12$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
              },
              {
                "step": "$(3 + 2)x^2 + (-6 - 5)x + 12 = 5x^2 - 11x + 12$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $2x(x + 5) + 4(x^2 - 3x)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*x^2-2*x",
              "lines": [
                {
                  "step": "Simplify $2x(x + 5) + 4(x^2 - 3x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x(x + 5) + 4(x^2 - 3x) = 2x^2 + 10x + 4(x^2 - 3x)$",
                  "reason": "Multiplying out: by the distributive law the $2x$ in front multiplies each term in the bracket, and the product law adds the exponents of the powers of $x$, which gives $2x^2 + 10x$ and removes the bracket."
                },
                {
                  "step": "$2x^2 + 10x + 4(x^2 - 3x) = 2x^2 + 10x + 4x^2 - 12x$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, which gives $4x^2 - 12x$ and removes the bracket."
                },
                {
                  "step": "$2x^2 + 10x + 4x^2 - 12x = 2x^2 + 4x^2 + 10x - 12x$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^2$ and terms in $x$; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$2x^2 + 4x^2 + 10x - 12x = (2 + 4)x^2 + (10 - 12)x$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(2 + 4)x^2 + (10 - 12)x = 6x^2 - 2x$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $5(y^2 + 2y - 1) - 3y(y - 4)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*y^2+22*y-5",
              "lines": [
                {
                  "step": "Simplify $5(y^2 + 2y - 1) - 3y(y - 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(y^2 + 2y - 1) - 3y(y - 4) = 5y^2 + 10y - 5 - 3y(y - 4)$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $5y^2 + 10y - 5$ and removes the bracket."
                },
                {
                  "step": "$5y^2 + 10y - 5 - 3y(y - 4) = 5y^2 + 10y - 5 - 3y^2 + 12y$",
                  "reason": "Multiplying out with the minus sign: the $3y$ multiplies each term in the bracket, and the product law adds the exponents of the powers of $y$, and subtracting a bracket changes every sign in it, which gives $-3y^2 + 12y$ and removes the bracket."
                },
                {
                  "step": "$5y^2 + 10y - 5 - 3y^2 + 12y = 5y^2 - 3y^2 + 10y + 12y - 5$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $y^2$, terms in $y$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$5y^2 - 3y^2 + 10y + 12y - 5 = (5 - 3)y^2 + (10 + 12)y - 5$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(5 - 3)y^2 + (10 + 12)y - 5 = 2y^2 + 22y - 5$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Simplify $x(4x - 9) - 2(x^2 - 7x + 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^2+5*x-6",
              "lines": [
                {
                  "step": "Simplify $x(4x - 9) - 2(x^2 - 7x + 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(4x - 9) - 2(x^2 - 7x + 3) = 4x^2 - 9x - 2(x^2 - 7x + 3)$",
                  "reason": "Multiplying out: by the distributive law the $x$ in front multiplies each term in the bracket, and the product law adds the exponents of the powers of $x$, which gives $4x^2 - 9x$ and removes the bracket."
                },
                {
                  "step": "$4x^2 - 9x - 2(x^2 - 7x + 3) = 4x^2 - 9x - 2x^2 + 14x - 6$",
                  "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-2x^2 + 14x - 6$ and removes the bracket."
                },
                {
                  "step": "$4x^2 - 9x - 2x^2 + 14x - 6 = 4x^2 - 2x^2 - 9x + 14x - 6$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^2$, terms in $x$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$4x^2 - 2x^2 - 9x + 14x - 6 = (4 - 2)x^2 + (-9 + 14)x - 6$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(4 - 2)x^2 + (-9 + 14)x - 6 = 2x^2 + 5x - 6$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression that, subtracted from $5y - 6z$, gives $y + 2z - 9$.",
            "lines": [
              {
                "step": "Find the expression that, subtracted from $5y - 6z$, gives $y + 2z - 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The expression is $5y - 6z - (y + 2z - 9)$.",
                "reason": "The definition of subtraction: the expression and $y + 2z - 9$ add up to $5y - 6z$, so the expression is $5y - 6z$ with $y + 2z - 9$ taken away, and the bracket keeps $y + 2z - 9$ as one amount."
              },
              {
                "step": "$5y - 6z - (y + 2z - 9) = 5y - 6z - y - 2z + 9$",
                "reason": "Subtracting a bracket changes every sign in it: $y$ becomes $-y$, $+2z$ becomes $-2z$ and $-9$ becomes $+9$, which removes the bracket."
              },
              {
                "step": "$5y - 6z - y - 2z + 9 = 5y - y - 6z - 2z + 9$",
                "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $y$, terms in $z$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$5y - y - 6z - 2z + 9 = (5 - 1)y + (-6 - 2)z + 9$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1."
              },
              {
                "step": "$(5 - 1)y + (-6 - 2)z + 9 = 4y - 8z + 9$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression that, subtracted from $9x + 4$, gives $2x - 7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*x+11",
              "lines": [
                {
                  "step": "Find the expression that, subtracted from $9x + 4$, gives $2x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $9x + 4 - (2x - 7)$.",
                  "reason": "The definition of subtraction: the expression and $2x - 7$ add up to $9x + 4$, so the expression is $9x + 4$ with $2x - 7$ taken away, and the bracket keeps $2x - 7$ as one amount."
                },
                {
                  "step": "$9x + 4 - (2x - 7) = 9x + 4 - 2x + 7$",
                  "reason": "Subtracting a bracket changes every sign in it: $2x$ becomes $-2x$ and $-7$ becomes $+7$, which removes the bracket."
                },
                {
                  "step": "$9x + 4 - 2x + 7 = 9x - 2x + 4 + 7$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$9x - 2x + 4 + 7 = (9 - 2)x + (4 + 7)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(9 - 2)x + (4 + 7) = 7x + 11$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Find the expression that, subtracted from $x^2 - 3x + 8$, gives $4x^2 + x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^2-4*x+8",
              "lines": [
                {
                  "step": "Find the expression that, subtracted from $x^2 - 3x + 8$, gives $4x^2 + x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $x^2 - 3x + 8 - (4x^2 + x)$.",
                  "reason": "The definition of subtraction: the expression and $4x^2 + x$ add up to $x^2 - 3x + 8$, so the expression is $x^2 - 3x + 8$ with $4x^2 + x$ taken away, and the bracket keeps $4x^2 + x$ as one amount."
                },
                {
                  "step": "$x^2 - 3x + 8 - (4x^2 + x) = x^2 - 3x + 8 - 4x^2 - x$",
                  "reason": "Subtracting a bracket changes every sign in it: $4x^2$ becomes $-4x^2$ and $+x$ becomes $-x$, which removes the bracket."
                },
                {
                  "step": "$x^2 - 3x + 8 - 4x^2 - x = x^2 - 4x^2 - 3x - x + 8$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x^2$, terms in $x$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side, in descending order of powers."
                },
                {
                  "step": "$x^2 - 4x^2 - 3x - x + 8 = (1 - 4)x^2 + (-3 - 1)x + 8$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1."
                },
                {
                  "step": "$(1 - 4)x^2 + (-3 - 1)x + 8 = -3x^2 - 4x + 8$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Find the expression that, subtracted from $7x - 2y + 5$, gives $3x + 4y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "4*x-6*y+5",
              "lines": [
                {
                  "step": "Find the expression that, subtracted from $7x - 2y + 5$, gives $3x + 4y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $7x - 2y + 5 - (3x + 4y)$.",
                  "reason": "The definition of subtraction: the expression and $3x + 4y$ add up to $7x - 2y + 5$, so the expression is $7x - 2y + 5$ with $3x + 4y$ taken away, and the bracket keeps $3x + 4y$ as one amount."
                },
                {
                  "step": "$7x - 2y + 5 - (3x + 4y) = 7x - 2y + 5 - 3x - 4y$",
                  "reason": "Subtracting a bracket changes every sign in it: $3x$ becomes $-3x$ and $+4y$ becomes $-4y$, which removes the bracket."
                },
                {
                  "step": "$7x - 2y + 5 - 3x - 4y = 7x - 3x - 2y - 4y + 5$",
                  "reason": "Like terms have the same letters to the same powers, so the terms sort into terms in $x$, terms in $y$ and numbers; the commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$7x - 3x - 2y - 4y + 5 = (7 - 3)x + (-2 - 4)y + 5$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(7 - 3)x + (-2 - 4)y + 5 = 4x - 6y + 5$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t105-k3",
      "forms": [
        {
          "example": {
            "problem": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: add 7, multiply the result by 3, subtract 9, and subtract 3 times the starting number.",
            "lines": [
              {
                "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: add 7, multiply the result by 3, subtract 9, and subtract 3 times the starting number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The steps give the expression $3(x + 7) - 9 - 3x$.",
                "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
              },
              {
                "step": "$3(x + 7) - 9 - 3x = 3x + 21 - 9 - 3x$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $3x + 21$ and removes the bracket."
              },
              {
                "step": "$3x + 21 - 9 - 3x = 3x - 3x + 21 - 9$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$3x - 3x + 21 - 9 = (3 - 3)x + (21 - 9)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(3 - 3)x + (21 - 9) = 0x + 12$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              },
              {
                "step": "$0x + 12 = 12$",
                "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: subtract 4, multiply the result by 5, add 30, and subtract 5 times the starting number.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "10",
              "lines": [
                {
                  "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: subtract 4, multiply the result by 5, add 30, and subtract 5 times the starting number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $5(x - 4) + 30 - 5x$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
                },
                {
                  "step": "$5(x - 4) + 30 - 5x = 5x - 20 + 30 - 5x$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $5x - 20$ and removes the bracket."
                },
                {
                  "step": "$5x - 20 + 30 - 5x = 5x - 5x - 20 + 30$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$5x - 5x - 20 + 30 = (5 - 5)x + (-20 + 30)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(5 - 5)x + (-20 + 30) = 0x + 10$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x + 10 = 10$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: add 6, multiply the result by 2, subtract twice the starting number, and subtract 5.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7",
              "lines": [
                {
                  "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: add 6, multiply the result by 2, subtract twice the starting number, and subtract 5.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $2(x + 6) - 2x - 5$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
                },
                {
                  "step": "$2(x + 6) - 2x - 5 = 2x + 12 - 2x - 5$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, which gives $2x + 12$ and removes the bracket."
                },
                {
                  "step": "$2x + 12 - 2x - 5 = 2x - 2x + 12 - 5$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$2x - 2x + 12 - 5 = (2 - 2)x + (12 - 5)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(2 - 2)x + (12 - 5) = 0x + 7$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x + 7 = 7$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: subtract it from 9, multiply the result by 4, add 4 times the starting number, and subtract 20.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "16",
              "lines": [
                {
                  "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: subtract it from 9, multiply the result by 4, add 4 times the starting number, and subtract 20.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $4(9 - x) + 4x - 20$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
                },
                {
                  "step": "$4(9 - x) + 4x - 20 = 36 - 4x + 4x - 20$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, which gives $36 - 4x$ and removes the bracket."
                },
                {
                  "step": "$36 - 4x + 4x - 20 = -4x + 4x + 36 - 20$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$-4x + 4x + 36 - 20 = (-4 + 4)x + (36 - 20)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(-4 + 4)x + (36 - 20) = 0x + 16$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x + 16 = 16$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the starting number $x$ when the result of these steps is 23. Start with the number $x$: add 4, multiply the result by 3, subtract 5, and subtract twice the starting number.",
            "lines": [
              {
                "step": "Find the starting number $x$ when the result of these steps is 23. Start with the number $x$: add 4, multiply the result by 3, subtract 5, and subtract twice the starting number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The steps give the expression $3(x + 4) - 5 - 2x$.",
                "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
              },
              {
                "step": "$3(x + 4) - 5 - 2x = 3x + 12 - 5 - 2x$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $3x + 12$ and removes the bracket."
              },
              {
                "step": "$3x + 12 - 5 - 2x = 3x - 2x + 12 - 5$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$3x - 2x + 12 - 5 = (3 - 2)x + (12 - 5)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(3 - 2)x + (12 - 5) = x + 7$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              },
              {
                "step": "The result is 23, so $x + 7 = 23$.",
                "reason": "Writing a sentence as an equation: the words \"the result is\" set the simplified expression equal to the number named."
              },
              {
                "step": "So $x = 23 - 7$.",
                "reason": "The definition of subtraction: the number that added to $7$ gives $23$ is $23 - 7$."
              },
              {
                "step": "The starting number is $x = 16$.",
                "reason": "The addition and subtraction of whole numbers gives the value, which is the number the steps began with."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the starting number $x$ when the result of these steps is 30. Start with the number $x$: subtract 2, multiply the result by 4, add 19, and subtract 3 times the starting number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 19",
              "lines": [
                {
                  "step": "Find the starting number $x$ when the result of these steps is 30. Start with the number $x$: subtract 2, multiply the result by 4, add 19, and subtract 3 times the starting number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $4(x - 2) + 19 - 3x$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
                },
                {
                  "step": "$4(x - 2) + 19 - 3x = 4x - 8 + 19 - 3x$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, which gives $4x - 8$ and removes the bracket."
                },
                {
                  "step": "$4x - 8 + 19 - 3x = 4x - 3x - 8 + 19$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$4x - 3x - 8 + 19 = (4 - 3)x + (-8 + 19)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(4 - 3)x + (-8 + 19) = x + 11$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "The result is 30, so $x + 11 = 30$.",
                  "reason": "Writing a sentence as an equation: the words \"the result is\" set the simplified expression equal to the number named."
                },
                {
                  "step": "So $x = 30 - 11$.",
                  "reason": "The definition of subtraction: the number that added to $11$ gives $30$ is $30 - 11$."
                },
                {
                  "step": "The starting number is $x = 19$.",
                  "reason": "The addition and subtraction of whole numbers gives the value, which is the number the steps began with."
                }
              ]
            },
            {
              "prompt": "Find the starting number $x$ when the result of these steps is 9. Start with the number $x$: add 6, multiply the result by 5, subtract 4 times the starting number, and subtract 38.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 17",
              "lines": [
                {
                  "step": "Find the starting number $x$ when the result of these steps is 9. Start with the number $x$: add 6, multiply the result by 5, subtract 4 times the starting number, and subtract 38.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $5(x + 6) - 4x - 38$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
                },
                {
                  "step": "$5(x + 6) - 4x - 38 = 5x + 30 - 4x - 38$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $5x + 30$ and removes the bracket."
                },
                {
                  "step": "$5x + 30 - 4x - 38 = 5x - 4x + 30 - 38$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$5x - 4x + 30 - 38 = (5 - 4)x + (30 - 38)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(5 - 4)x + (30 - 38) = x - 8$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "The result is 9, so $x - 8 = 9$.",
                  "reason": "Writing a sentence as an equation: the words \"the result is\" set the simplified expression equal to the number named."
                },
                {
                  "step": "So $x = 9 + 8$.",
                  "reason": "The definition of subtraction: the difference $x - 8$ is the number that added to $8$ gives $x$, so $x$ is $9 + 8$."
                },
                {
                  "step": "The starting number is $x = 17$.",
                  "reason": "The addition and subtraction of whole numbers gives the value, which is the number the steps began with."
                }
              ]
            },
            {
              "prompt": "Find the starting number $x$ when the result of these steps is 41. Start with the number $x$: add 3, multiply the result by 2, subtract 1, and subtract the starting number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 36",
              "lines": [
                {
                  "step": "Find the starting number $x$ when the result of these steps is 41. Start with the number $x$: add 3, multiply the result by 2, subtract 1, and subtract the starting number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $2(x + 3) - 1 - x$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and a bracket keeps together the amount that a later step multiplies."
                },
                {
                  "step": "$2(x + 3) - 1 - x = 2x + 6 - 1 - x$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, which gives $2x + 6$ and removes the bracket."
                },
                {
                  "step": "$2x + 6 - 1 - x = 2x - x + 6 - 1$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$2x - x + 6 - 1 = (2 - 1)x + (6 - 1)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. A term with no number in front of its letters has the coefficient 1. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(2 - 1)x + (6 - 1) = x + 5$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "The result is 41, so $x + 5 = 41$.",
                  "reason": "Writing a sentence as an equation: the words \"the result is\" set the simplified expression equal to the number named."
                },
                {
                  "step": "So $x = 41 - 5$.",
                  "reason": "The definition of subtraction: the number that added to $5$ gives $41$ is $41 - 5$."
                },
                {
                  "step": "The starting number is $x = 36$.",
                  "reason": "The addition and subtraction of whole numbers gives the value, which is the number the steps began with."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 6, add 15, divide the result by 3, and subtract twice the starting number.",
            "lines": [
              {
                "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 6, add 15, divide the result by 3, and subtract twice the starting number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The steps give the expression $\\dfrac{6x + 15}{3} - 2x$.",
                "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and the fraction bar keeps together the amount that is divided."
              },
              {
                "step": "$\\dfrac{6x + 15}{3} - 2x = \\dfrac{1}{3}\\left(6x + 15\\right) - 2x$",
                "reason": "The definition of division: dividing by $3$ is multiplying by $\\dfrac{1}{3}$, which turns the fraction into a bracket with a number in front."
              },
              {
                "step": "$\\dfrac{1}{3}\\left(6x + 15\\right) - 2x = 2x + 5 - 2x$",
                "reason": "Multiplying out: by the distributive law the $\\dfrac{1}{3}$ in front multiplies each term in the bracket, which gives $2x + 5$ and removes the bracket."
              },
              {
                "step": "$2x + 5 - 2x = 2x - 2x + 5$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$2x - 2x + 5 = (2 - 2)x + 5$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
              },
              {
                "step": "$(2 - 2)x + 5 = 0x + 5$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              },
              {
                "step": "$0x + 5 = 5$",
                "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 8, subtract 20, divide the result by 4, and subtract twice the starting number.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 8, subtract 20, divide the result by 4, and subtract twice the starting number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $\\dfrac{8x - 20}{4} - 2x$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and the fraction bar keeps together the amount that is divided."
                },
                {
                  "step": "$\\dfrac{8x - 20}{4} - 2x = \\dfrac{1}{4}\\left(8x - 20\\right) - 2x$",
                  "reason": "The definition of division: dividing by $4$ is multiplying by $\\dfrac{1}{4}$, which turns the fraction into a bracket with a number in front."
                },
                {
                  "step": "$\\dfrac{1}{4}\\left(8x - 20\\right) - 2x = 2x - 5 - 2x$",
                  "reason": "Multiplying out: by the distributive law the $\\dfrac{1}{4}$ in front multiplies each term in the bracket, which gives $2x - 5$ and removes the bracket."
                },
                {
                  "step": "$2x - 5 - 2x = 2x - 2x - 5$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$2x - 2x - 5 = (2 - 2)x - 5$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(2 - 2)x - 5 = 0x - 5$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x - 5 = -5$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 10, add 45, divide the result by 5, and subtract twice the starting number.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "9",
              "lines": [
                {
                  "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 10, add 45, divide the result by 5, and subtract twice the starting number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $\\dfrac{10x + 45}{5} - 2x$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and the fraction bar keeps together the amount that is divided."
                },
                {
                  "step": "$\\dfrac{10x + 45}{5} - 2x = \\dfrac{1}{5}\\left(10x + 45\\right) - 2x$",
                  "reason": "The definition of division: dividing by $5$ is multiplying by $\\dfrac{1}{5}$, which turns the fraction into a bracket with a number in front."
                },
                {
                  "step": "$\\dfrac{1}{5}\\left(10x + 45\\right) - 2x = 2x + 9 - 2x$",
                  "reason": "Multiplying out: by the distributive law the $\\dfrac{1}{5}$ in front multiplies each term in the bracket, which gives $2x + 9$ and removes the bracket."
                },
                {
                  "step": "$2x + 9 - 2x = 2x - 2x + 9$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$2x - 2x + 9 = (2 - 2)x + 9$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(2 - 2)x + 9 = 0x + 9$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x + 9 = 9$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 4, subtract the result from 36, divide the result by 2, and add twice the starting number.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "18",
              "lines": [
                {
                  "step": "Write the result of these steps as an expression in $x$, and simplify it. Start with a number $x$: multiply it by 4, subtract the result from 36, divide the result by 2, and add twice the starting number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The steps give the expression $\\dfrac{36 - 4x}{2} + 2x$.",
                  "reason": "Writing a sentence as an equation: each step becomes its operation, in the order of the steps, and the fraction bar keeps together the amount that is divided."
                },
                {
                  "step": "$\\dfrac{36 - 4x}{2} + 2x = \\dfrac{1}{2}\\left(36 - 4x\\right) + 2x$",
                  "reason": "The definition of division: dividing by $2$ is multiplying by $\\dfrac{1}{2}$, which turns the fraction into a bracket with a number in front."
                },
                {
                  "step": "$\\dfrac{1}{2}\\left(36 - 4x\\right) + 2x = 18 - 2x + 2x$",
                  "reason": "Multiplying out: by the distributive law the $\\dfrac{1}{2}$ in front multiplies each term in the bracket, which gives $18 - 2x$ and removes the bracket."
                },
                {
                  "step": "$18 - 2x + 2x = -2x + 2x + 18$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$-2x + 2x + 18 = (-2 + 2)x + 18$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part."
                },
                {
                  "step": "$(-2 + 2)x + 18 = 0x + 18$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x + 18 = 18$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this as an expression in $x$, and simplify it: subtract twice the sum of $5x$ and 4 from 3 times the sum of $4x$ and 5.",
            "lines": [
              {
                "step": "Write this as an expression in $x$, and simplify it: subtract twice the sum of $5x$ and 4 from 3 times the sum of $4x$ and 5.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The words give the expression $3(4x + 5) - 2(5x + 4)$.",
                "reason": "Writing a sentence as an equation: each named amount goes in a bracket, so that it is multiplied or taken away as one amount, and the amount after the word \"from\" is written first."
              },
              {
                "step": "$3(4x + 5) - 2(5x + 4) = 12x + 15 - 2(5x + 4)$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $12x + 15$ and removes the bracket."
              },
              {
                "step": "$12x + 15 - 2(5x + 4) = 12x + 15 - 10x - 8$",
                "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-10x - 8$ and removes the bracket."
              },
              {
                "step": "$12x + 15 - 10x - 8 = 12x - 10x + 15 - 8$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$12x - 10x + 15 - 8 = (12 - 10)x + (15 - 8)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(12 - 10)x + (15 - 8) = 2x + 7$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this as an expression in $x$, and simplify it: subtract 3 times the sum of $x$ and 8 from twice the sum of $6x$ and 1.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "9*x-22",
              "lines": [
                {
                  "step": "Write this as an expression in $x$, and simplify it: subtract 3 times the sum of $x$ and 8 from twice the sum of $6x$ and 1.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words give the expression $2(6x + 1) - 3(x + 8)$.",
                  "reason": "Writing a sentence as an equation: each named amount goes in a bracket, so that it is multiplied or taken away as one amount, and the amount after the word \"from\" is written first."
                },
                {
                  "step": "$2(6x + 1) - 3(x + 8) = 12x + 2 - 3(x + 8)$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, which gives $12x + 2$ and removes the bracket."
                },
                {
                  "step": "$12x + 2 - 3(x + 8) = 12x + 2 - 3x - 24$",
                  "reason": "Multiplying out with the minus sign: the $3$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-3x - 24$ and removes the bracket."
                },
                {
                  "step": "$12x + 2 - 3x - 24 = 12x - 3x + 2 - 24$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$12x - 3x + 2 - 24 = (12 - 3)x + (2 - 24)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(12 - 3)x + (2 - 24) = 9x - 22$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Write this as an expression in $x$, and simplify it: subtract twice the sum of $x$ and 9 from 5 times the sum of $2x$ and 3.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x-3",
              "lines": [
                {
                  "step": "Write this as an expression in $x$, and simplify it: subtract twice the sum of $x$ and 9 from 5 times the sum of $2x$ and 3.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words give the expression $5(2x + 3) - 2(x + 9)$.",
                  "reason": "Writing a sentence as an equation: each named amount goes in a bracket, so that it is multiplied or taken away as one amount, and the amount after the word \"from\" is written first."
                },
                {
                  "step": "$5(2x + 3) - 2(x + 9) = 10x + 15 - 2(x + 9)$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $10x + 15$ and removes the bracket."
                },
                {
                  "step": "$10x + 15 - 2(x + 9) = 10x + 15 - 2x - 18$",
                  "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-2x - 18$ and removes the bracket."
                },
                {
                  "step": "$10x + 15 - 2x - 18 = 10x - 2x + 15 - 18$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$10x - 2x + 15 - 18 = (10 - 2)x + (15 - 18)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(10 - 2)x + (15 - 18) = 8x - 3$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            },
            {
              "prompt": "Write this as an expression in $x$, and simplify it: subtract 3 times the number that is 5 less than $2x$ from 4 times the sum of $x$ and 6.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x+39",
              "lines": [
                {
                  "step": "Write this as an expression in $x$, and simplify it: subtract 3 times the number that is 5 less than $2x$ from 4 times the sum of $x$ and 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words give the expression $4(x + 6) - 3(2x - 5)$.",
                  "reason": "Writing a sentence as an equation: each named amount goes in a bracket, so that it is multiplied or taken away as one amount, and the amount after the word \"from\" is written first."
                },
                {
                  "step": "$4(x + 6) - 3(2x - 5) = 4x + 24 - 3(2x - 5)$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, which gives $4x + 24$ and removes the bracket."
                },
                {
                  "step": "$4x + 24 - 3(2x - 5) = 4x + 24 - 6x + 15$",
                  "reason": "Multiplying out with the minus sign: the $3$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-6x + 15$ and removes the bracket."
                },
                {
                  "step": "$4x + 24 - 6x + 15 = 4x - 6x + 24 + 15$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$4x - 6x + 24 + 15 = (4 - 6)x + (24 + 15)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(4 - 6)x + (24 + 15) = -2x + 39$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t105-k4",
      "forms": [
        {
          "example": {
            "problem": "Find a number $a$ for which $5(3x + 4) - a(5x - 2)$ has the same value for every number $x$.",
            "lines": [
              {
                "step": "Find a number $a$ for which $5(3x + 4) - a(5x - 2)$ has the same value for every number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5(3x + 4) - a(5x - 2) = 15x + 20 - a(5x - 2)$",
                "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $15x + 20$ and removes the first bracket."
              },
              {
                "step": "$15x + 20 - a(5x - 2) = 15x + 20 - 5ax + 2a$",
                "reason": "Multiplying out with the minus sign: the $a$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-5ax + 2a$ and removes the second bracket."
              },
              {
                "step": "The terms in $x$ are $15x$ and $-5ax$, and they collect to $(15 - 5a)x$.",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which puts $x$ in one place."
              },
              {
                "step": "The expression has the same value for every $x$ when $15 - 5a = 0$.",
                "reason": "A term $0x$ is 0 for every $x$, since 0 times a number is 0, and the other terms hold no $x$."
              },
              {
                "step": "So $5a = 15$.",
                "reason": "By the definition of subtraction, $15 - 5a = 0$ says that $5a$ and $15$ are equal."
              },
              {
                "step": "So $a = 3$.",
                "reason": "The definition of division: the number that multiplied by $5$ gives $15$ is $\\dfrac{15}{5}$, which is $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which $a(2x + 3) + 4(3x - 5)$ has the same value for every number $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -6",
              "lines": [
                {
                  "step": "Find a number $a$ for which $a(2x + 3) + 4(3x - 5)$ has the same value for every number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a(2x + 3) + 4(3x - 5) = 2ax + 3a + 4(3x - 5)$",
                  "reason": "Multiplying out: by the distributive law the $a$ in front multiplies each term in the bracket, which gives $2ax + 3a$ and removes the first bracket."
                },
                {
                  "step": "$2ax + 3a + 4(3x - 5) = 2ax + 3a + 12x - 20$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, which gives $12x - 20$ and removes the second bracket."
                },
                {
                  "step": "The terms in $x$ are $2ax$ and $12x$, and they collect to $(2a + 12)x$.",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which puts $x$ in one place."
                },
                {
                  "step": "The expression has the same value for every $x$ when $2a + 12 = 0$.",
                  "reason": "A term $0x$ is 0 for every $x$, since 0 times a number is 0, and the other terms hold no $x$."
                },
                {
                  "step": "So $2a = -12$.",
                  "reason": "By the definition of subtraction, $2a + 12 = 0$ says that $2a$ is $0 - 12$, which is $-12$."
                },
                {
                  "step": "So $a = -6$.",
                  "reason": "The definition of division: the number that multiplied by $2$ gives $-12$ is $\\dfrac{-12}{2}$, which is $-6$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $3(ax + 2) - 6(x - 5)$ has the same value for every number $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 2",
              "lines": [
                {
                  "step": "Find a number $a$ for which $3(ax + 2) - 6(x - 5)$ has the same value for every number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3(ax + 2) - 6(x - 5) = 3ax + 6 - 6(x - 5)$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $3ax + 6$ and removes the first bracket."
                },
                {
                  "step": "$3ax + 6 - 6(x - 5) = 3ax + 6 - 6x + 30$",
                  "reason": "Multiplying out with the minus sign: the $6$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-6x + 30$ and removes the second bracket."
                },
                {
                  "step": "The terms in $x$ are $3ax$ and $-6x$, and they collect to $(3a - 6)x$.",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which puts $x$ in one place."
                },
                {
                  "step": "The expression has the same value for every $x$ when $3a - 6 = 0$.",
                  "reason": "A term $0x$ is 0 for every $x$, since 0 times a number is 0, and the other terms hold no $x$."
                },
                {
                  "step": "So $3a = 6$.",
                  "reason": "By the definition of subtraction, $3a - 6 = 0$ says that $3a$ is $0 - (-6)$, which is $6$."
                },
                {
                  "step": "So $a = 2$.",
                  "reason": "The definition of division: the number that multiplied by $3$ gives $6$ is $\\dfrac{6}{3}$, which is $2$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which $2(7x - 1) - a(4x + 3)$ has the same value for every number $x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 7/2",
              "lines": [
                {
                  "step": "Find a number $a$ for which $2(7x - 1) - a(4x + 3)$ has the same value for every number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(7x - 1) - a(4x + 3) = 14x - 2 - a(4x + 3)$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, which gives $14x - 2$ and removes the first bracket."
                },
                {
                  "step": "$14x - 2 - a(4x + 3) = 14x - 2 - 4ax - 3a$",
                  "reason": "Multiplying out with the minus sign: the $a$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-4ax - 3a$ and removes the second bracket."
                },
                {
                  "step": "The terms in $x$ are $14x$ and $-4ax$, and they collect to $(14 - 4a)x$.",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of the two terms in $x$, which puts $x$ in one place."
                },
                {
                  "step": "The expression has the same value for every $x$ when $14 - 4a = 0$.",
                  "reason": "A term $0x$ is 0 for every $x$, since 0 times a number is 0, and the other terms hold no $x$."
                },
                {
                  "step": "So $4a = 14$.",
                  "reason": "By the definition of subtraction, $14 - 4a = 0$ says that $4a$ and $14$ are equal."
                },
                {
                  "step": "So $a = \\dfrac{7}{2}$.",
                  "reason": "The definition of division: the number that multiplied by $4$ gives $14$ is $\\dfrac{14}{4}$, which is $\\dfrac{7}{2}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t105-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this simplification of $6x + 5 - (2x - 9)$, and write that line right.",
            "given": [
              "$6x + 5 - (2x - 9)$",
              "$6x + 5 - 2x - 9$",
              "$6x - 2x + 5 - 9$",
              "$4x - 4$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this simplification of $6x + 5 - (2x - 9)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes away the bracket, and writes $-9$ where the rule gives $+9$.",
                "reason": "A sign lost: subtracting a bracket changes every sign in it, so the term $-9$ of the bracket, taken away, gives $+9$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the lost sign with it."
              },
              {
                "step": "Line 2 written right is $6x + 5 - 2x + 9$.",
                "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this simplification of $(3x - 8) - (7x + 2)$, and write that line right.",
              "given": [
                "$(3x - 8) - (7x + 2)$",
                "$3x - 8 - (7x + 2)$",
                "$3x - 8 - 7x + 2$",
                "$3x - 7x - 8 + 2$",
                "$-4x - 6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3*x-8-7*x-2",
              "lines": [
                {
                  "step": "Find the first wrong line in this simplification of $(3x - 8) - (7x + 2)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 drops the bracket with nothing in front of it, and it is right.",
                  "reason": "The rule changes no value, so the two lines are equal for every value of the letters."
                },
                {
                  "step": "Line 3 takes away the bracket, and writes $+2$ where the rule gives $-2$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so the term $+2$ of the bracket, taken away, gives $-2$."
                },
                {
                  "step": "Line 3 written right is $3x - 8 - 7x - 2$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $2(5x + 3) - 3(2x - 4)$, and write that line right.",
              "given": [
                "$2(5x + 3) - 3(2x - 4)$",
                "$10x + 6 - 3(2x - 4)$",
                "$10x + 6 - 6x - 12$",
                "$10x - 6x + 6 - 12$",
                "$4x - 6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 10*x+6-6*x+12",
              "lines": [
                {
                  "step": "Find the first wrong line in this simplification of $2(5x + 3) - 3(2x - 4)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies out the first bracket, and it is right.",
                  "reason": "The rule changes no value, so the two lines are equal for every value of the letters."
                },
                {
                  "step": "Line 3 multiplies out the bracket, and writes $-12$ where the rule gives $+12$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so the term $-4$ of the bracket, times $3$ and taken away, gives $+12$."
                },
                {
                  "step": "Line 3 written right is $10x + 6 - 6x + 12$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $4y + 1 - (9y - 6)$, and write that line right.",
              "given": [
                "$4y + 1 - (9y - 6)$",
                "$4y + 1 - 9y + 6$",
                "$4y + 9y + 1 + 6$",
                "$13y + 7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*y-9*y+1+6",
              "lines": [
                {
                  "step": "Find the first wrong line in this simplification of $4y + 1 - (9y - 6)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes away the bracket, and it is right.",
                  "reason": "The rule changes no value, so the two lines are equal for every value of the letters."
                },
                {
                  "step": "Line 3 brings like terms side by side, and the term $-9y$ arrives as $+9y$.",
                  "reason": "A sign lost: under the commutative law of addition each term moves with the sign in front of it, since taking a term away is adding its opposite."
                },
                {
                  "step": "Line 3 written right is $4y - 9y + 1 + 6$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this simplification of $9x + 6 - x + 8$, and write that line right.",
            "given": [
              "$9x + 6 - x + 8$",
              "$9x - x + 6 + 8$",
              "$9 + 6 + 8$",
              "$23$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this simplification of $9x + 6 - x + 8$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 brings like terms side by side, and it is right.",
                "reason": "Each rule changes no value, so these lines are equal for every value of the letters."
              },
              {
                "step": "Line 3 takes $x$ away from $9x$ as if the letter were a thing to remove, and leaves $9$.",
                "reason": "A letter read as an object: a letter stands for a number, so $9x$ is 9 times the number and $x$ is 1 times it, and collecting like terms gives $(9 - 1)x$, which is $8x$."
              },
              {
                "step": "Line 3 written right is $8x + 6 + 8$.",
                "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this simplification of $4(6x - x + 3) + 5$, and write that line right.",
              "given": [
                "$4(6x - x + 3) + 5$",
                "$4(6 + 3) + 5$",
                "$24 + 12 + 5$",
                "$41$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 4*(5*x+3)+5",
              "lines": [
                {
                  "step": "Find the first wrong line in this simplification of $4(6x - x + 3) + 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $x$ away from $6x$ inside the bracket as if the letter were a thing to remove, and leaves $6$.",
                  "reason": "A letter read as an object: a letter stands for a number, so $6x$ is 6 times the number and $x$ is 1 times it, and collecting like terms gives $(6 - 1)x$, which is $5x$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 written right is $4(5x + 3) + 5$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $5x + 7 + 3x + 2$, and write that line right.",
              "given": [
                "$5x + 7 + 3x + 2$",
                "$5x + 3x + 7 + 2$",
                "$8x + 7 + 2$",
                "$17x$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8*x+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this simplification of $5x + 7 + 3x + 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The lines before line 4 are right: line 2 brings like terms side by side, and line 3 collects the terms in $x$.",
                  "reason": "Each rule changes no value, so these lines are equal for every value of the letters."
                },
                {
                  "step": "Line 4 adds the numbers $7$ and $2$ to the coefficient $8$, as if the letter were a label for the whole sum.",
                  "reason": "A letter read as an object: a letter stands for a number, so $8x$ is 8 times the number, while $7$ and $2$ are numbers alone. The terms are not like terms, and only $7 + 2$ collects."
                },
                {
                  "step": "Line 4 written right is $8x + 9$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this simplification of $2x + 5y + 6x + y$, and write that line right.",
              "given": [
                "$2x + 5y + 6x + y$",
                "$2x + 6x + 5y + y$",
                "$8x + 5y + y$",
                "$14xy$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8*x+6*y",
              "lines": [
                {
                  "step": "Find the first wrong line in this simplification of $2x + 5y + 6x + y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The lines before line 4 are right: line 2 brings like terms side by side, and line 3 collects the terms in $x$.",
                  "reason": "Each rule changes no value, so these lines are equal for every value of the letters."
                },
                {
                  "step": "Line 4 adds the coefficients $8$, $5$ and $1$ and writes the two letters after the total, as if the letters were labels.",
                  "reason": "A letter read as an object: a letter stands for a number, so $8x$ is 8 times one number and $5y + y$ is 6 times another. Terms in $x$ and terms in $y$ are not like terms, so they stay apart."
                },
                {
                  "step": "Line 4 written right is $8x + 6y$.",
                  "reason": "The line before it is changed by the rule alone, with every sign and every letter kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t105-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write these sentences as an equation in $x$, without multiplying out: One number is $x$. A second number is 3 more than twice $x$. The sum of the two numbers is 30.",
            "lines": [
              {
                "step": "Write these sentences as an equation in $x$, without multiplying out: One number is $x$. A second number is 3 more than twice $x$. The sum of the two numbers is 30.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The second number is $2x + 3$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "The sum of the two numbers is $x + (2x + 3)$.",
                "reason": "Writing a sentence as an equation: the second number is one amount, so it goes in a bracket, and \"sum\" adds the two numbers."
              },
              {
                "step": "$x + (2x + 3) = 30$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write these sentences as an equation in $x$, without multiplying out: One number is $x$. A second number is 4 less than 3 times $x$. The first number minus the second number is $-10$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x-(3*x-4) = -10",
              "lines": [
                {
                  "step": "Write these sentences as an equation in $x$, without multiplying out: One number is $x$. A second number is 4 less than 3 times $x$. The first number minus the second number is $-10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The second number is $3x - 4$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "The first number minus the second number is $x - (3x - 4)$.",
                  "reason": "Writing a sentence as an equation: the second number is one amount, so it goes in a bracket, and \"minus\" takes the whole of it away."
                },
                {
                  "step": "$x - (3x - 4) = -10$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write these sentences as an equation in $x$, without multiplying out: Three numbers are $x$, twice $x$, and 5 more than $x$. The sum of the three numbers is 41.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x+2*x+(x+5) = 41",
              "lines": [
                {
                  "step": "Write these sentences as an equation in $x$, without multiplying out: Three numbers are $x$, twice $x$, and 5 more than $x$. The sum of the three numbers is 41.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The second number is $2x$, and the third number is $x + 5$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, and \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "The sum of the three numbers is $x + 2x + (x + 5)$.",
                  "reason": "Writing a sentence as an equation: the third number is one amount, so it goes in a bracket, and \"sum\" adds the three numbers."
                },
                {
                  "step": "$x + 2x + (x + 5) = 41$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write these sentences as an equation in $x$, without multiplying out: One number is $x$. A second number is 7 less than 5 times $x$. The sum of the two numbers is 53.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x+(5*x-7) = 53",
              "lines": [
                {
                  "step": "Write these sentences as an equation in $x$, without multiplying out: One number is $x$. A second number is 7 less than 5 times $x$. The sum of the two numbers is 53.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The second number is $5x - 7$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "The sum of the two numbers is $x + (5x - 7)$.",
                  "reason": "Writing a sentence as an equation: the second number is one amount, so it goes in a bracket, and \"sum\" adds the two numbers."
                },
                {
                  "step": "$x + (5x - 7) = 53$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, without multiplying out: The number 35 is 5 times the sum of $x$ and 2.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, without multiplying out: The number 35 is 5 times the sum of $x$ and 2.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of $x$ and 2 is $x + 2$.",
                "reason": "Writing a sentence as an equation: \"sum\" adds the two numbers."
              },
              {
                "step": "The product of 5 and that amount is $5(x + 2)$.",
                "reason": "Writing a sentence as an equation: the amount named is multiplied as one amount, so it goes in a bracket with the number in front."
              },
              {
                "step": "$35 = 5(x + 2)$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out: Subtracting 2 times the sum of $x$ and 3 from 20 leaves 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "20-2*(x+3) = 6",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out: Subtracting 2 times the sum of $x$ and 3 from 20 leaves 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and 3 is $x + 3$.",
                  "reason": "Writing a sentence as an equation: \"sum\" adds the two numbers."
                },
                {
                  "step": "The product of 2 and that amount is $2(x + 3)$.",
                  "reason": "Writing a sentence as an equation: the amount named is multiplied as one amount, so it goes in a bracket with the number in front."
                },
                {
                  "step": "$20 - 2(x + 3) = 6$",
                  "reason": "Writing a sentence as an equation: \"subtracting … from\" puts the number after \"from\" first, and \"leaves\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out: The product of 4 and the number that is 1 less than $x$ is 11 more than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "4*(x-1) = x+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out: The product of 4 and the number that is 1 less than $x$ is 11 more than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 1 less than $x$ is $x - 1$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "The product of 4 and that amount is $4(x - 1)$.",
                  "reason": "Writing a sentence as an equation: the amount named is multiplied as one amount, so it goes in a bracket with the number in front."
                },
                {
                  "step": "$4(x - 1) = x + 11$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, and \"more than\" adds the amount to what follows the words."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, without multiplying out: Subtracting the sum of $x$ and 4 from 6 times $x$ leaves 21.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "6*x-(x+4) = 21",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, without multiplying out: Subtracting the sum of $x$ and 4 from 6 times $x$ leaves 21.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and 4 is $x + 4$.",
                  "reason": "Writing a sentence as an equation: \"sum\" adds the two numbers."
                },
                {
                  "step": "Taking that amount from $6x$ gives $6x - (x + 4)$.",
                  "reason": "Writing a sentence as an equation: the amount named is taken away as one amount, so it goes in a bracket after the minus sign."
                },
                {
                  "step": "$6x - (x + 4) = 21$",
                  "reason": "Writing a sentence as an equation: \"leaves\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t105-k7",
      "forms": [
        {
          "example": {
            "problem": "Simplify $6y + 5x - 9 - 2x + 6y + 14$ when $x = -4y$.",
            "lines": [
              {
                "step": "Simplify $6y + 5x - 9 - 2x + 6y + 14$ when $x = -4y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6y + 5x - 9 - 2x + 6y + 14 = 6y + 5(-4y) - 9 - 2(-4y) + 6y + 14$",
                "reason": "Substituting a value: the expression $-4y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
              },
              {
                "step": "$6y + 5(-4y) - 9 - 2(-4y) + 6y + 14 = 6y - 20y - 9 + 8y + 6y + 14$",
                "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
              },
              {
                "step": "$6y - 20y - 9 + 8y + 6y + 14 = 6y - 20y + 8y + 6y - 9 + 14$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$6y - 20y + 8y + 6y - 9 + 14 = (6 - 20 + 8 + 6)y + (-9 + 14)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(6 - 20 + 8 + 6)y + (-9 + 14) = 0y + 5$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              },
              {
                "step": "$0y + 5 = 5$",
                "reason": "0 times a number is 0, so $0y$ is 0 and a number is left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $5x - 3y + 2x + 8 - 11y - 15$ when $x = 2y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-7",
              "lines": [
                {
                  "step": "Simplify $5x - 3y + 2x + 8 - 11y - 15$ when $x = 2y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 3y + 2x + 8 - 11y - 15 = 5(2y) - 3y + 2(2y) + 8 - 11y - 15$",
                  "reason": "Substituting a value: the expression $2y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$5(2y) - 3y + 2(2y) + 8 - 11y - 15 = 10y - 3y + 4y + 8 - 11y - 15$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
                },
                {
                  "step": "$10y - 3y + 4y + 8 - 11y - 15 = 10y - 3y + 4y - 11y + 8 - 15$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$10y - 3y + 4y - 11y + 8 - 15 = (10 - 3 + 4 - 11)y + (8 - 15)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(10 - 3 + 4 - 11)y + (8 - 15) = 0y - 7$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y - 7 = -7$",
                  "reason": "0 times a number is 0, so $0y$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Simplify $6y - x + 10 - 2x + 3y - 4$ when $x = 3y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6",
              "lines": [
                {
                  "step": "Simplify $6y - x + 10 - 2x + 3y - 4$ when $x = 3y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6y - x + 10 - 2x + 3y - 4 = 6y - (3y) + 10 - 2(3y) + 3y - 4$",
                  "reason": "Substituting a value: the expression $3y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$6y - (3y) + 10 - 2(3y) + 3y - 4 = 6y - 3y + 10 - 6y + 3y - 4$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
                },
                {
                  "step": "$6y - 3y + 10 - 6y + 3y - 4 = 6y - 3y - 6y + 3y + 10 - 4$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$6y - 3y - 6y + 3y + 10 - 4 = (6 - 3 - 6 + 3)y + (10 - 4)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(6 - 3 - 6 + 3)y + (10 - 4) = 0y + 6$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y + 6 = 6$",
                  "reason": "0 times a number is 0, so $0y$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Simplify $8x - y + 5 + 2x - 4y - 13$ when $y = 2x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Simplify $8x - y + 5 + 2x - 4y - 13$ when $y = 2x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8x - y + 5 + 2x - 4y - 13 = 8x - (2x) + 5 + 2x - 4(2x) - 13$",
                  "reason": "Substituting a value: the expression $2x$ goes, in brackets, in each place where $y$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$8x - (2x) + 5 + 2x - 4(2x) - 13 = 8x - 2x + 5 + 2x - 8x - 13$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
                },
                {
                  "step": "$8x - 2x + 5 + 2x - 8x - 13 = 8x - 2x + 2x - 8x + 5 - 13$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$8x - 2x + 2x - 8x + 5 - 13 = (8 - 2 + 2 - 8)x + (5 - 13)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(8 - 2 + 2 - 8)x + (5 - 13) = 0x - 8$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x - 8 = -8$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $3(2x + 2y - 1) - 2(x - 3y + 4)$ when $x = -3y$.",
            "lines": [
              {
                "step": "Simplify $3(2x + 2y - 1) - 2(x - 3y + 4)$ when $x = -3y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3(2x + 2y - 1) - 2(x - 3y + 4) = 3(2(-3y) + 2y - 1) - 2((-3y) - 3y + 4)$",
                "reason": "Substituting a value: the expression $-3y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
              },
              {
                "step": "$3(2(-3y) + 2y - 1) - 2((-3y) - 3y + 4) = 3(-6y + 2y - 1) - 2(-3y - 3y + 4)$",
                "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
              },
              {
                "step": "$3(-6y + 2y - 1) - 2(-3y - 3y + 4) = -18y + 6y - 3 - 2(-3y - 3y + 4)$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $-18y + 6y - 3$ and removes the bracket."
              },
              {
                "step": "$-18y + 6y - 3 - 2(-3y - 3y + 4) = -18y + 6y - 3 + 6y + 6y - 8$",
                "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $6y + 6y - 8$ and removes the bracket."
              },
              {
                "step": "$-18y + 6y - 3 + 6y + 6y - 8 = -18y + 6y + 6y + 6y - 3 - 8$",
                "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
              },
              {
                "step": "$-18y + 6y + 6y + 6y - 3 - 8 = (-18 + 6 + 6 + 6)y + (-3 - 8)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(-18 + 6 + 6 + 6)y + (-3 - 8) = 0y - 11$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              },
              {
                "step": "$0y - 11 = -11$",
                "reason": "0 times a number is 0, so $0y$ is 0 and a number is left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $2(x + 4y + 3) + 3(x - 6y - 1)$ when $x = 2y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3",
              "lines": [
                {
                  "step": "Simplify $2(x + 4y + 3) + 3(x - 6y - 1)$ when $x = 2y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(x + 4y + 3) + 3(x - 6y - 1) = 2((2y) + 4y + 3) + 3((2y) - 6y - 1)$",
                  "reason": "Substituting a value: the expression $2y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$2((2y) + 4y + 3) + 3((2y) - 6y - 1) = 2(2y + 4y + 3) + 3(2y - 6y - 1)$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
                },
                {
                  "step": "$2(2y + 4y + 3) + 3(2y - 6y - 1) = 4y + 8y + 6 + 3(2y - 6y - 1)$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, which gives $4y + 8y + 6$ and removes the bracket."
                },
                {
                  "step": "$4y + 8y + 6 + 3(2y - 6y - 1) = 4y + 8y + 6 + 6y - 18y - 3$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, which gives $6y - 18y - 3$ and removes the bracket."
                },
                {
                  "step": "$4y + 8y + 6 + 6y - 18y - 3 = 4y + 8y + 6y - 18y + 6 - 3$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$4y + 8y + 6y - 18y + 6 - 3 = (4 + 8 + 6 - 18)y + (6 - 3)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(4 + 8 + 6 - 18)y + (6 - 3) = 0y + 3$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y + 3 = 3$",
                  "reason": "0 times a number is 0, so $0y$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Simplify $5(x + y - 3) - 2(x + 3y + 4)$ when $y = 3x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-23",
              "lines": [
                {
                  "step": "Simplify $5(x + y - 3) - 2(x + 3y + 4)$ when $y = 3x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(x + y - 3) - 2(x + 3y + 4) = 5(x + (3x) - 3) - 2(x + 3(3x) + 4)$",
                  "reason": "Substituting a value: the expression $3x$ goes, in brackets, in each place where $y$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$5(x + (3x) - 3) - 2(x + 3(3x) + 4) = 5(x + 3x - 3) - 2(x + 9x + 4)$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
                },
                {
                  "step": "$5(x + 3x - 3) - 2(x + 9x + 4) = 5x + 15x - 15 - 2(x + 9x + 4)$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, which gives $5x + 15x - 15$ and removes the bracket."
                },
                {
                  "step": "$5x + 15x - 15 - 2(x + 9x + 4) = 5x + 15x - 15 - 2x - 18x - 8$",
                  "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $-2x - 18x - 8$ and removes the bracket."
                },
                {
                  "step": "$5x + 15x - 15 - 2x - 18x - 8 = 5x + 15x - 2x - 18x - 15 - 8$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$5x + 15x - 2x - 18x - 15 - 8 = (5 + 15 - 2 - 18)x + (-15 - 8)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(5 + 15 - 2 - 18)x + (-15 - 8) = 0x - 23$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0x - 23 = -23$",
                  "reason": "0 times a number is 0, so $0x$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Simplify $6(x + y + 2) - 2(x - 5y + 7)$ when $x = -4y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Simplify $6(x + y + 2) - 2(x - 5y + 7)$ when $x = -4y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6(x + y + 2) - 2(x - 5y + 7) = 6((-4y) + y + 2) - 2((-4y) - 5y + 7)$",
                  "reason": "Substituting a value: the expression $-4y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$6((-4y) + y + 2) - 2((-4y) - 5y + 7) = 6(-4y + y + 2) - 2(-4y - 5y + 7)$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, which clears those brackets."
                },
                {
                  "step": "$6(-4y + y + 2) - 2(-4y - 5y + 7) = -24y + 6y + 12 - 2(-4y - 5y + 7)$",
                  "reason": "Multiplying out: by the distributive law the $6$ in front multiplies each term in the bracket, which gives $-24y + 6y + 12$ and removes the bracket."
                },
                {
                  "step": "$-24y + 6y + 12 - 2(-4y - 5y + 7) = -24y + 6y + 12 + 8y + 10y - 14$",
                  "reason": "Multiplying out with the minus sign: the $2$ multiplies each term in the bracket, and subtracting a bracket changes every sign in it, which gives $8y + 10y - 14$ and removes the bracket."
                },
                {
                  "step": "$-24y + 6y + 12 + 8y + 10y - 14 = -24y + 6y + 8y + 10y + 12 - 14$",
                  "reason": "The commutative law of addition lets each term move with the sign in front of it, which brings the like terms side by side."
                },
                {
                  "step": "$-24y + 6y + 8y + 10y + 12 - 14 = (-24 + 6 + 8 + 10)y + (12 - 14)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(-24 + 6 + 8 + 10)y + (12 - 14) = 0y - 2$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y - 2 = -2$",
                  "reason": "0 times a number is 0, so $0y$ is 0 and a number is left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $2x^2 + 7xy + 3y^2 + 5 - 9$ when $x = -3y$.",
            "lines": [
              {
                "step": "Simplify $2x^2 + 7xy + 3y^2 + 5 - 9$ when $x = -3y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x^2 + 7xy + 3y^2 + 5 - 9 = 2(-3y)^2 + 7(-3y)y + 3y^2 + 5 - 9$",
                "reason": "Substituting a value: the expression $-3y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
              },
              {
                "step": "$2(-3y)^2 + 7(-3y)y + 3y^2 + 5 - 9 = 18y^2 + 7(-3y)y + 3y^2 + 5 - 9$",
                "reason": "Power of a product: $(-3y)^2 = (-3)^2y^2$. Sign of a power of a negative number: an even power of a negative number is positive, so $(-3)^2 = 9$ and $(-3y)^2 = 9y^2$. The 2 in front multiplies it, which gives $18y^2$."
              },
              {
                "step": "$18y^2 + 7(-3y)y + 3y^2 + 5 - 9 = 18y^2 - 21y^2 + 3y^2 + 5 - 9$",
                "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, and the product law gives $y\\cdot y = y^2$, which clears those brackets."
              },
              {
                "step": "$18y^2 - 21y^2 + 3y^2 + 5 - 9 = (18 - 21 + 3)y^2 + (5 - 9)$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
              },
              {
                "step": "$(18 - 21 + 3)y^2 + (5 - 9) = 0y^2 - 4$",
                "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
              },
              {
                "step": "$0y^2 - 4 = -4$",
                "reason": "0 times a number is 0, so $0y^2$ is 0 and a number is left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $3x^2 + 5xy + 2y^2 + 9 - 2$ when $x = -y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7",
              "lines": [
                {
                  "step": "Simplify $3x^2 + 5xy + 2y^2 + 9 - 2$ when $x = -y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 + 5xy + 2y^2 + 9 - 2 = 3(-y)^2 + 5(-y)y + 2y^2 + 9 - 2$",
                  "reason": "Substituting a value: the expression $-y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$3(-y)^2 + 5(-y)y + 2y^2 + 9 - 2 = 3y^2 + 5(-y)y + 2y^2 + 9 - 2$",
                  "reason": "Power of a product: $(-y)^2 = (-1)^2y^2$. Sign of a power of a negative number: an even power of a negative number is positive, so $(-1)^2 = 1$ and $(-y)^2 = y^2$. The 3 in front multiplies it, which gives $3y^2$."
                },
                {
                  "step": "$3y^2 + 5(-y)y + 2y^2 + 9 - 2 = 3y^2 - 5y^2 + 2y^2 + 9 - 2$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, and the product law gives $y\\cdot y = y^2$, which clears those brackets."
                },
                {
                  "step": "$3y^2 - 5y^2 + 2y^2 + 9 - 2 = (3 - 5 + 2)y^2 + (9 - 2)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(3 - 5 + 2)y^2 + (9 - 2) = 0y^2 + 7$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y^2 + 7 = 7$",
                  "reason": "0 times a number is 0, so $0y^2$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Simplify $2x^2 + 8xy + 6y^2 - 8 + 9$ when $x = -3y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "1",
              "lines": [
                {
                  "step": "Simplify $2x^2 + 8xy + 6y^2 - 8 + 9$ when $x = -3y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 + 8xy + 6y^2 - 8 + 9 = 2(-3y)^2 + 8(-3y)y + 6y^2 - 8 + 9$",
                  "reason": "Substituting a value: the expression $-3y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$2(-3y)^2 + 8(-3y)y + 6y^2 - 8 + 9 = 18y^2 + 8(-3y)y + 6y^2 - 8 + 9$",
                  "reason": "Power of a product: $(-3y)^2 = (-3)^2y^2$. Sign of a power of a negative number: an even power of a negative number is positive, so $(-3)^2 = 9$ and $(-3y)^2 = 9y^2$. The 2 in front multiplies it, which gives $18y^2$."
                },
                {
                  "step": "$18y^2 + 8(-3y)y + 6y^2 - 8 + 9 = 18y^2 - 24y^2 + 6y^2 - 8 + 9$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, and the product law gives $y\\cdot y = y^2$, which clears those brackets."
                },
                {
                  "step": "$18y^2 - 24y^2 + 6y^2 - 8 + 9 = (18 - 24 + 6)y^2 + (-8 + 9)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(18 - 24 + 6)y^2 + (-8 + 9) = 0y^2 + 1$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y^2 + 1 = 1$",
                  "reason": "0 times a number is 0, so $0y^2$ is 0 and a number is left."
                }
              ]
            },
            {
              "prompt": "Simplify $4x^2 + 7xy + 3y^2 - 6 + 10$ when $x = -y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "4",
              "lines": [
                {
                  "step": "Simplify $4x^2 + 7xy + 3y^2 - 6 + 10$ when $x = -y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 + 7xy + 3y^2 - 6 + 10 = 4(-y)^2 + 7(-y)y + 3y^2 - 6 + 10$",
                  "reason": "Substituting a value: the expression $-y$ goes, in brackets, in each place where $x$ stands, which leaves one letter in the expression."
                },
                {
                  "step": "$4(-y)^2 + 7(-y)y + 3y^2 - 6 + 10 = 4y^2 + 7(-y)y + 3y^2 - 6 + 10$",
                  "reason": "Power of a product: $(-y)^2 = (-1)^2y^2$. Sign of a power of a negative number: an even power of a negative number is positive, so $(-1)^2 = 1$ and $(-y)^2 = y^2$. The 4 in front multiplies it, which gives $4y^2$."
                },
                {
                  "step": "$4y^2 + 7(-y)y + 3y^2 - 6 + 10 = 4y^2 - 7y^2 + 3y^2 - 6 + 10$",
                  "reason": "The associative law of multiplication gives each product of a number and the term in brackets, with the sign that the rule of signs for products gives, and the product law gives $y\\cdot y = y^2$, which clears those brackets."
                },
                {
                  "step": "$4y^2 - 7y^2 + 3y^2 - 6 + 10 = (4 - 7 + 3)y^2 + (-6 + 10)$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients of terms with the same letter part, which leaves one term for each letter part. The numbers go in a bracket of their own."
                },
                {
                  "step": "$(4 - 7 + 3)y^2 + (-6 + 10) = 0y^2 + 4$",
                  "reason": "The addition and subtraction of integers works out each bracket, which leaves each letter part written once."
                },
                {
                  "step": "$0y^2 + 4 = 4$",
                  "reason": "0 times a number is 0, so $0y^2$ is 0 and a number is left."
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
      "id": "t105-p1",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$ and $c$, $a - (b + c) = a - b - c$.",
      "idea": "Taking a number away is adding its opposite, and the opposite of $b + c$ is $-1$ times $b + c$. The distributive law gives the $-1$ to each term of the bracket, so each term changes its sign.",
      "lines": [
        {
          "line": "The difference $a - (b + c)$ equals $a + (-(b + c))$.",
          "reason": "The definition of subtraction: taking a number away is adding its opposite."
        },
        {
          "line": "The opposite $-(b + c)$ equals $(-1)(b + c)$.",
          "reason": "Signs of products, from arithmetic: $(-1)x = -x$ for every number $x$."
        },
        {
          "line": "The product $(-1)(b + c)$ equals $(-1)b + (-1)c$.",
          "reason": "The distributive law."
        },
        {
          "line": "The product $(-1)b$ equals $-b$.",
          "reason": "Signs of products, from arithmetic: $(-1)x = -x$ for every number $x$."
        },
        {
          "line": "The product $(-1)c$ equals $-c$.",
          "reason": "Signs of products, from arithmetic: $(-1)x = -x$ for every number $x$."
        },
        {
          "line": "So $-(b + c) = (-b) + (-c)$.",
          "reason": "Combining the equalities of lines 2 to 5."
        },
        {
          "line": "So $a - (b + c) = a + ((-b) + (-c))$.",
          "reason": "Line 1, with the opposite $-(b + c)$ replaced by the sum equal to it in line 6."
        },
        {
          "line": "The sum $a + ((-b) + (-c))$ equals $(a + (-b)) + (-c)$.",
          "reason": "The associative law of addition."
        },
        {
          "line": "The sum $a + (-b)$ equals $a - b$.",
          "reason": "The definition of subtraction, read from right to left."
        },
        {
          "line": "The sum $(a - b) + (-c)$ equals $(a - b) - c$.",
          "reason": "The definition of subtraction, read from right to left."
        },
        {
          "line": "The difference $(a - b) - c$ is written $a - b - c$.",
          "reason": "The order of operations works additions and subtractions with no brackets from left to right."
        },
        {
          "line": "Therefore $a - (b + c) = a - b - c$.",
          "reason": "Combining the equalities of lines 7 to 11."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t105-s1",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$ and $c$, $(a - b)c = ac - bc$.",
      "check": {
        "proof": [
          {
            "line": "The product $(a - b)c$ equals $(a + (-b))c$.",
            "reason": "The definition of subtraction: taking a number away is adding its opposite."
          },
          {
            "line": "The product $(a + (-b))c$ equals $c(a + (-b))$.",
            "reason": "The commutative law of multiplication."
          },
          {
            "line": "The product $c(a + (-b))$ equals $ca + c(-b)$.",
            "reason": "The distributive law."
          },
          {
            "line": "The product $ca$ equals $ac$.",
            "reason": "The commutative law of multiplication."
          },
          {
            "line": "The product $c(-b)$ equals $(-b)c$.",
            "reason": "The commutative law of multiplication."
          },
          {
            "line": "The product $(-b)c$ equals $-(bc)$.",
            "reason": "Signs of products, from arithmetic: $(-x)y = -xy$ for all numbers $x$ and $y$."
          },
          {
            "line": "So $(a - b)c = ac + (-(bc))$.",
            "reason": "Combining the equalities of lines 1 to 6."
          },
          {
            "line": "The sum $ac + (-(bc))$ equals $ac - bc$.",
            "reason": "The definition of subtraction, read from right to left."
          },
          {
            "line": "Therefore $(a - b)c = ac - bc$.",
            "reason": "Combining the equalities of lines 7 and 8."
          }
        ]
      }
    },
    {
      "id": "t105-s2",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$, $c$ and $d$, $d(a + b + c) = da + db + dc$.",
      "check": {
        "proof": [
          {
            "line": "The sum $a + b + c$ means $(a + b) + c$.",
            "reason": "The order of operations works a sum with no brackets from left to right."
          },
          {
            "line": "The product $d((a + b) + c)$ equals $d(a + b) + dc$.",
            "reason": "The distributive law, with $a + b$ as one term of the bracket."
          },
          {
            "line": "The product $d(a + b)$ equals $da + db$.",
            "reason": "The distributive law."
          },
          {
            "line": "So $d(a + b) + dc = (da + db) + dc$.",
            "reason": "The first term of the sum is replaced by the sum equal to it in line 3."
          },
          {
            "line": "So $d(a + b + c) = (da + db) + dc$.",
            "reason": "Combining the equalities of lines 1, 2 and 4."
          },
          {
            "line": "The sum $(da + db) + dc$ is written $da + db + dc$.",
            "reason": "The order of operations works a sum with no brackets from left to right."
          },
          {
            "line": "Therefore $d(a + b + c) = da + db + dc$.",
            "reason": "Line 5, with its right side written as in line 6."
          }
        ]
      }
    },
    {
      "id": "t105-s3",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$ and $c$, $a - (b - c) = a - b + c$.",
      "check": {
        "proof": [
          {
            "line": "The difference $b - c$ equals $b + (-c)$.",
            "reason": "The definition of subtraction: taking a number away is adding its opposite."
          },
          {
            "line": "So $a - (b - c) = a - (b + (-c))$.",
            "reason": "The bracket is replaced by the sum equal to it in line 1."
          },
          {
            "line": "The difference $a - (b + (-c))$ equals $a - b - (-c)$.",
            "reason": "Subtracting a bracket changes every sign in it, with $-c$ as the second term of the bracket."
          },
          {
            "line": "The difference $a - b - (-c)$ equals $(a - b) + (-(-c))$.",
            "reason": "The definition of subtraction."
          },
          {
            "line": "The opposite $-(-c)$ equals $c$.",
            "reason": "Mirror reflection, from arithmetic: $-(-x) = x$ for every number $x$."
          },
          {
            "line": "So $(a - b) + (-(-c)) = a - b + c$.",
            "reason": "The opposite $-(-c)$ is replaced by $c$, from line 5."
          },
          {
            "line": "Therefore $a - (b - c) = a - b + c$.",
            "reason": "Combining the equalities of lines 2, 3, 4 and 6."
          }
        ]
      }
    },
    {
      "id": "t105-s4",
      "method": "direct proof",
      "statement": "For all numbers $a$, $b$, $c$ and $d$, $a - d(b + c) = a - db - dc$.",
      "check": {
        "proof": [
          {
            "line": "The product $d(b + c)$ equals $db + dc$.",
            "reason": "Multiplying out: the distributive law."
          },
          {
            "line": "So $a - d(b + c) = a - (db + dc)$.",
            "reason": "The product is replaced by the sum equal to it in line 1, and the bracket keeps that sum as one amount."
          },
          {
            "line": "The difference $a - (db + dc)$ equals $a - db - dc$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "Therefore $a - d(b + c) = a - db - dc$.",
            "reason": "Combining the equalities of lines 2 and 3."
          }
        ]
      }
    }
  ]
}
