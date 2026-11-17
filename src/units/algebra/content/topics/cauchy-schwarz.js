export default {
  "number": 215,
  "title": "The Cauchy-Schwarz Inequality",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "392-399, 600-605"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(7x + 8y)^2 \\le E(4x^2 + 9y^2)$ for all real numbers $x$ and $y$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "697/36",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(7x + 8y)^2 \\le E(4x^2 + 9y^2)$ for all real numbers $x$ and $y$.",
      "The first sequence is $\\dfrac{7}{2}$, $\\dfrac{8}{3}$ and the second is $2x$, $3y$.",
      "$\\left(\\left(\\dfrac{7}{2}\\right)^2 + \\left(\\dfrac{8}{3}\\right)^2\\right)\\left((2x)^2 + (3y)^2\\right) \\ge \\left(\\dfrac{7}{2} \\cdot 2x + \\dfrac{8}{3} \\cdot 3y\\right)^2$",
      "$\\left(\\dfrac{7}{2}\\right)^2 + \\left(\\dfrac{8}{3}\\right)^2 = \\dfrac{697}{36}$",
      "$\\dfrac{697}{36}(4x^2 + 9y^2) \\ge (7x + 8y)^2$",
      "$E = \\dfrac{697}{36}$"
    ]
  },
  "ideas": [
    {
      "name": "Cauchy-Schwarz Inequality",
      "concrete": "For the first sequence $2$, $3$ and the second sequence $5$, $4$, the sums of the squares multiply to $(2^2 + 3^2)(5^2 + 4^2) = 13 \\cdot 41 = 533$, the sum of the products squared is $(2 \\cdot 5 + 3 \\cdot 4)^2 = 22^2 = 484$, and $533 \\ge 484$.",
      "general": "For real numbers $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$, the product of the two sums of squares is at least the square of the sum of the products: $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\ge (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$, the **Cauchy-Schwarz Inequality**.",
      "definitions": [
        "Cauchy-Schwarz Inequality"
      ]
    },
    {
      "name": "Equality in Cauchy-Schwarz",
      "concrete": "For the first sequence $3$, $5$ and the second sequence $12$, $20$, each term of the second is $4$ times the term of the first in its place, and the two sides are equal: $(3^2 + 5^2)(12^2 + 20^2) = 34 \\cdot 544 = 18{,}496$ and $(3 \\cdot 12 + 5 \\cdot 20)^2 = 136^2 = 18{,}496$.",
      "general": "For real numbers $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$, the two sides of the Cauchy-Schwarz Inequality are equal exactly when every one of $a_1, a_2, \\ldots, a_n$ is $0$, or there is a number $c$ with $b_1 = ca_1$, $b_2 = ca_2$, and so on to $b_n = ca_n$: **Equality in Cauchy-Schwarz**.",
      "definitions": [
        "Equality in Cauchy-Schwarz"
      ]
    }
  ],
  "kinds": [
    {
      "id": "t215-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(8x + 3y)^2 \\le E(4x^2 + 36y^2)$ for all real numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(8x + 3y)^2 \\le E(4x^2 + 36y^2)$ for all real numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first sequence is $4$, $\\dfrac{1}{2}$ and the second is $2x$, $6y$.",
                "reason": "Cauchy-Schwarz Inequality: the squares on the right side are those of $2x$ and $6y$, so these form the second sequence, and the first holds the numbers that multiply them to give the terms of $8x + 3y$."
              },
              {
                "step": "$\\left(4^2 + \\left(\\dfrac{1}{2}\\right)^2\\right)\\left((2x)^2 + (6y)^2\\right) \\ge \\left(4 \\cdot 2x + \\dfrac{1}{2} \\cdot 6y\\right)^2$",
                "reason": "Cauchy-Schwarz Inequality, for these two sequences."
              },
              {
                "step": "$4^2 + \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{65}{4}$",
                "reason": "Fraction rules (arithmetic's): each number is squared, a fraction top and bottom, and the squares are added over a common bottom."
              },
              {
                "step": "$\\dfrac{65}{4}(4x^2 + 36y^2) \\ge (8x + 3y)^2$",
                "reason": "Power of a product: $(2x)^2 = 4x^2$ and $(6y)^2 = 36y^2$, and on the right side each product is worked out."
              },
              {
                "step": "$E = \\dfrac{65}{4}$",
                "reason": "Answering the question asked: the number in front of the bracket is $E$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(8x + 11y)^2 \\le E(4x^2 + 25y^2)$ for all real numbers $x$ and $y$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "521/25",
              "lines": [
                {
                  "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(8x + 11y)^2 \\le E(4x^2 + 25y^2)$ for all real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $4$, $\\dfrac{11}{5}$ and the second is $2x$, $5y$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares on the right side are those of $2x$ and $5y$, so these form the second sequence, and the first holds the numbers that multiply them to give the terms of $8x + 11y$."
                },
                {
                  "step": "$\\left(4^2 + \\left(\\dfrac{11}{5}\\right)^2\\right)\\left((2x)^2 + (5y)^2\\right) \\ge \\left(4 \\cdot 2x + \\dfrac{11}{5} \\cdot 5y\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$4^2 + \\left(\\dfrac{11}{5}\\right)^2 = \\dfrac{521}{25}$",
                  "reason": "Fraction rules (arithmetic's): each number is squared, a fraction top and bottom, and the squares are added over a common bottom."
                },
                {
                  "step": "$\\dfrac{521}{25}(4x^2 + 25y^2) \\ge (8x + 11y)^2$",
                  "reason": "Power of a product: $(2x)^2 = 4x^2$ and $(5y)^2 = 25y^2$, and on the right side each product is worked out."
                },
                {
                  "step": "$E = \\dfrac{521}{25}$",
                  "reason": "Answering the question asked: the number in front of the bracket is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(2x + 7y)^2 \\le E(9x^2 + 36y^2)$ for all real numbers $x$ and $y$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "65/36",
              "lines": [
                {
                  "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(2x + 7y)^2 \\le E(9x^2 + 36y^2)$ for all real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\dfrac{2}{3}$, $\\dfrac{7}{6}$ and the second is $3x$, $6y$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares on the right side are those of $3x$ and $6y$, so these form the second sequence, and the first holds the numbers that multiply them to give the terms of $2x + 7y$."
                },
                {
                  "step": "$\\left(\\left(\\dfrac{2}{3}\\right)^2 + \\left(\\dfrac{7}{6}\\right)^2\\right)\\left((3x)^2 + (6y)^2\\right) \\ge \\left(\\dfrac{2}{3} \\cdot 3x + \\dfrac{7}{6} \\cdot 6y\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$\\left(\\dfrac{2}{3}\\right)^2 + \\left(\\dfrac{7}{6}\\right)^2 = \\dfrac{65}{36}$",
                  "reason": "Fraction rules (arithmetic's): each number is squared, a fraction top and bottom, and the squares are added over a common bottom."
                },
                {
                  "step": "$\\dfrac{65}{36}(9x^2 + 36y^2) \\ge (2x + 7y)^2$",
                  "reason": "Power of a product: $(3x)^2 = 9x^2$ and $(6y)^2 = 36y^2$, and on the right side each product is worked out."
                },
                {
                  "step": "$E = \\dfrac{65}{36}$",
                  "reason": "Answering the question asked: the number in front of the bracket is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(10x + 5y + 4z)^2 \\le E(36x^2 + 4y^2 + z^2)$ for all real numbers $x$, $y$ and $z$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "901/36",
              "lines": [
                {
                  "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(10x + 5y + 4z)^2 \\le E(36x^2 + 4y^2 + z^2)$ for all real numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\dfrac{5}{3}$, $\\dfrac{5}{2}$, $4$ and the second is $6x$, $2y$, $z$.",
                  "reason": "Cauchy-Schwarz Inequality: the squares on the right side are those of $6x$, $2y$ and $z$, so these form the second sequence, and the first holds the numbers that multiply them to give the terms of $10x + 5y + 4z$."
                },
                {
                  "step": "$\\left(\\left(\\dfrac{5}{3}\\right)^2 + \\left(\\dfrac{5}{2}\\right)^2 + 4^2\\right)\\left((6x)^2 + (2y)^2 + z^2\\right) \\ge \\left(\\dfrac{5}{3} \\cdot 6x + \\dfrac{5}{2} \\cdot 2y + 4 \\cdot z\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$\\left(\\dfrac{5}{3}\\right)^2 + \\left(\\dfrac{5}{2}\\right)^2 + 4^2 = \\dfrac{901}{36}$",
                  "reason": "Fraction rules (arithmetic's): each number is squared, a fraction top and bottom, and the squares are added over a common bottom."
                },
                {
                  "step": "$\\dfrac{901}{36}(36x^2 + 4y^2 + z^2) \\ge (10x + 5y + 4z)^2$",
                  "reason": "Power of a product: $(6x)^2 = 36x^2$ and $(2y)^2 = 4y^2$, and on the right side each product is worked out."
                },
                {
                  "step": "$E = \\dfrac{901}{36}$",
                  "reason": "Answering the question asked: the number in front of the bracket is $E$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{2x + 4} + \\sqrt{3y + 8} + \\sqrt{z + 1} \\le E$, for positive numbers $x$, $y$ and $z$ with $2x + 3y + z = 29$.",
            "lines": [
              {
                "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{2x + 4} + \\sqrt{3y + 8} + \\sqrt{z + 1} \\le E$, for positive numbers $x$, $y$ and $z$ with $2x + 3y + z = 29$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\sqrt{2x + 4} \\cdot 1 + \\sqrt{3y + 8} \\cdot 1 + \\sqrt{z + 1} \\cdot 1\\right)^2 \\le \\left((\\sqrt{2x + 4})^2 + (\\sqrt{3y + 8})^2 + (\\sqrt{z + 1})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
                "reason": "Cauchy-Schwarz Inequality, for the first sequence $\\sqrt{2x + 4}$, $\\sqrt{3y + 8}$, $\\sqrt{z + 1}$ and the second sequence $1$, $1$, $1$."
              },
              {
                "step": "$\\left(\\sqrt{2x + 4} + \\sqrt{3y + 8} + \\sqrt{z + 1}\\right)^2 \\le 3\\left((2x + 4) + (3y + 8) + (z + 1)\\right)$",
                "reason": "Positive square root (arithmetic's): the square of the square root of a positive number is that number; and the three ones add to $3$."
              },
              {
                "step": "$(2x + 4) + (3y + 8) + (z + 1) = 2x + 3y + z + 13$",
                "reason": "Collecting like terms: the numbers are added."
              },
              {
                "step": "$2x + 3y + z + 13 = 42$",
                "reason": "Substituting a value: $2x + 3y + z = 29$, and $29 + 13 = 42$."
              },
              {
                "step": "$\\left(\\sqrt{2x + 4} + \\sqrt{3y + 8} + \\sqrt{z + 1}\\right)^2 \\le 126$",
                "reason": "Substituting a value: the bracket is $42$, and $3 \\cdot 42 = 126$."
              },
              {
                "step": "$\\sqrt{2x + 4} + \\sqrt{3y + 8} + \\sqrt{z + 1} \\le \\sqrt{126}$",
                "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their square roots stand in the same order."
              },
              {
                "step": "$E = \\sqrt{126} = 3\\sqrt{14}$",
                "reason": "Simplest radical form: $126 = 9 \\cdot 14$, and the root of $9$ comes out as $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 7} + \\sqrt{6y + 3} + \\sqrt{z + 2} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + 6y + z = 24$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "6*sqrt(3)",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 7} + \\sqrt{6y + 3} + \\sqrt{z + 2} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + 6y + z = 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\sqrt{6x + 7} \\cdot 1 + \\sqrt{6y + 3} \\cdot 1 + \\sqrt{z + 2} \\cdot 1\\right)^2 \\le \\left((\\sqrt{6x + 7})^2 + (\\sqrt{6y + 3})^2 + (\\sqrt{z + 2})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $\\sqrt{6x + 7}$, $\\sqrt{6y + 3}$, $\\sqrt{z + 2}$ and the second sequence $1$, $1$, $1$."
                },
                {
                  "step": "$\\left(\\sqrt{6x + 7} + \\sqrt{6y + 3} + \\sqrt{z + 2}\\right)^2 \\le 3\\left((6x + 7) + (6y + 3) + (z + 2)\\right)$",
                  "reason": "Positive square root (arithmetic's): the square of the square root of a positive number is that number; and the three ones add to $3$."
                },
                {
                  "step": "$(6x + 7) + (6y + 3) + (z + 2) = 6x + 6y + z + 12$",
                  "reason": "Collecting like terms: the numbers are added."
                },
                {
                  "step": "$6x + 6y + z + 12 = 36$",
                  "reason": "Substituting a value: $6x + 6y + z = 24$, and $24 + 12 = 36$."
                },
                {
                  "step": "$\\left(\\sqrt{6x + 7} + \\sqrt{6y + 3} + \\sqrt{z + 2}\\right)^2 \\le 108$",
                  "reason": "Substituting a value: the bracket is $36$, and $3 \\cdot 36 = 108$."
                },
                {
                  "step": "$\\sqrt{6x + 7} + \\sqrt{6y + 3} + \\sqrt{z + 2} \\le \\sqrt{108}$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their square roots stand in the same order."
                },
                {
                  "step": "$E = \\sqrt{108} = 6\\sqrt{3}$",
                  "reason": "Simplest radical form: $108 = 36 \\cdot 3$, and the root of $36$ comes out as $6$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{4x + 2} + \\sqrt{3y + 5} + \\sqrt{6z + 3} \\le E$, for positive numbers $x$, $y$ and $z$ with $4x + 3y + 6z = 14$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "6*sqrt(2)",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{4x + 2} + \\sqrt{3y + 5} + \\sqrt{6z + 3} \\le E$, for positive numbers $x$, $y$ and $z$ with $4x + 3y + 6z = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\sqrt{4x + 2} \\cdot 1 + \\sqrt{3y + 5} \\cdot 1 + \\sqrt{6z + 3} \\cdot 1\\right)^2 \\le \\left((\\sqrt{4x + 2})^2 + (\\sqrt{3y + 5})^2 + (\\sqrt{6z + 3})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $\\sqrt{4x + 2}$, $\\sqrt{3y + 5}$, $\\sqrt{6z + 3}$ and the second sequence $1$, $1$, $1$."
                },
                {
                  "step": "$\\left(\\sqrt{4x + 2} + \\sqrt{3y + 5} + \\sqrt{6z + 3}\\right)^2 \\le 3\\left((4x + 2) + (3y + 5) + (6z + 3)\\right)$",
                  "reason": "Positive square root (arithmetic's): the square of the square root of a positive number is that number; and the three ones add to $3$."
                },
                {
                  "step": "$(4x + 2) + (3y + 5) + (6z + 3) = 4x + 3y + 6z + 10$",
                  "reason": "Collecting like terms: the numbers are added."
                },
                {
                  "step": "$4x + 3y + 6z + 10 = 24$",
                  "reason": "Substituting a value: $4x + 3y + 6z = 14$, and $14 + 10 = 24$."
                },
                {
                  "step": "$\\left(\\sqrt{4x + 2} + \\sqrt{3y + 5} + \\sqrt{6z + 3}\\right)^2 \\le 72$",
                  "reason": "Substituting a value: the bracket is $24$, and $3 \\cdot 24 = 72$."
                },
                {
                  "step": "$\\sqrt{4x + 2} + \\sqrt{3y + 5} + \\sqrt{6z + 3} \\le \\sqrt{72}$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their square roots stand in the same order."
                },
                {
                  "step": "$E = \\sqrt{72} = 6\\sqrt{2}$",
                  "reason": "Simplest radical form: $72 = 36 \\cdot 2$, and the root of $36$ comes out as $6$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 8} + \\sqrt{y + 4} + \\sqrt{4z + 1} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + y + 4z = 8$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(7)",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 8} + \\sqrt{y + 4} + \\sqrt{4z + 1} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + y + 4z = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\sqrt{6x + 8} \\cdot 1 + \\sqrt{y + 4} \\cdot 1 + \\sqrt{4z + 1} \\cdot 1\\right)^2 \\le \\left((\\sqrt{6x + 8})^2 + (\\sqrt{y + 4})^2 + (\\sqrt{4z + 1})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $\\sqrt{6x + 8}$, $\\sqrt{y + 4}$, $\\sqrt{4z + 1}$ and the second sequence $1$, $1$, $1$."
                },
                {
                  "step": "$\\left(\\sqrt{6x + 8} + \\sqrt{y + 4} + \\sqrt{4z + 1}\\right)^2 \\le 3\\left((6x + 8) + (y + 4) + (4z + 1)\\right)$",
                  "reason": "Positive square root (arithmetic's): the square of the square root of a positive number is that number; and the three ones add to $3$."
                },
                {
                  "step": "$(6x + 8) + (y + 4) + (4z + 1) = 6x + y + 4z + 13$",
                  "reason": "Collecting like terms: the numbers are added."
                },
                {
                  "step": "$6x + y + 4z + 13 = 21$",
                  "reason": "Substituting a value: $6x + y + 4z = 8$, and $8 + 13 = 21$."
                },
                {
                  "step": "$\\left(\\sqrt{6x + 8} + \\sqrt{y + 4} + \\sqrt{4z + 1}\\right)^2 \\le 63$",
                  "reason": "Substituting a value: the bracket is $21$, and $3 \\cdot 21 = 63$."
                },
                {
                  "step": "$\\sqrt{6x + 8} + \\sqrt{y + 4} + \\sqrt{4z + 1} \\le \\sqrt{63}$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides are positive, so their square roots stand in the same order."
                },
                {
                  "step": "$E = \\sqrt{63} = 3\\sqrt{7}$",
                  "reason": "Simplest radical form: $63 = 9 \\cdot 7$, and the root of $9$ comes out as $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(9x + y)\\left(\\dfrac{16}{x} + \\dfrac{25}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(9x + y)\\left(\\dfrac{16}{x} + \\dfrac{25}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first sequence is $\\sqrt{9x}$, $\\sqrt{y}$ and the second is $\\sqrt{\\dfrac{16}{x}}$, $\\sqrt{\\dfrac{25}{y}}$.",
                "reason": "Cauchy-Schwarz Inequality: each bracket is a sum of positive numbers, and each term is the square of its square root."
              },
              {
                "step": "$(9x + y)\\left(\\dfrac{16}{x} + \\dfrac{25}{y}\\right) \\ge \\left(\\sqrt{9x} \\cdot \\sqrt{\\dfrac{16}{x}} + \\sqrt{y} \\cdot \\sqrt{\\dfrac{25}{y}}\\right)^2$",
                "reason": "Cauchy-Schwarz Inequality, for these two sequences."
              },
              {
                "step": "The products are $\\sqrt{144} = 12$ and $\\sqrt{25} = 5$.",
                "reason": "Root of a product: the two roots are multiplied under one root sign, and the letter cancels."
              },
              {
                "step": "$(9x + y)\\left(\\dfrac{16}{x} + \\dfrac{25}{y}\\right) \\ge (12 + 5)^2$",
                "reason": "Substituting a value: each product is replaced by its value."
              },
              {
                "step": "$(12 + 5)^2 = 289$",
                "reason": "Order of operations (arithmetic's): the bracket is $17$, and $17^2 = 289$."
              },
              {
                "step": "$E = 289$",
                "reason": "Answering the question asked: the number on the smaller side is $E$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 3y)\\left(\\dfrac{18}{x} + \\dfrac{12}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "324",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 3y)\\left(\\dfrac{18}{x} + \\dfrac{12}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{8x}$, $\\sqrt{3y}$ and the second is $\\sqrt{\\dfrac{18}{x}}$, $\\sqrt{\\dfrac{12}{y}}$.",
                  "reason": "Cauchy-Schwarz Inequality: each bracket is a sum of positive numbers, and each term is the square of its square root."
                },
                {
                  "step": "$(8x + 3y)\\left(\\dfrac{18}{x} + \\dfrac{12}{y}\\right) \\ge \\left(\\sqrt{8x} \\cdot \\sqrt{\\dfrac{18}{x}} + \\sqrt{3y} \\cdot \\sqrt{\\dfrac{12}{y}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "The products are $\\sqrt{144} = 12$ and $\\sqrt{36} = 6$.",
                  "reason": "Root of a product: the two roots are multiplied under one root sign, and the letter cancels."
                },
                {
                  "step": "$(8x + 3y)\\left(\\dfrac{18}{x} + \\dfrac{12}{y}\\right) \\ge (12 + 6)^2$",
                  "reason": "Substituting a value: each product is replaced by its value."
                },
                {
                  "step": "$(12 + 6)^2 = 324$",
                  "reason": "Order of operations (arithmetic's): the bracket is $18$, and $18^2 = 324$."
                },
                {
                  "step": "$E = 324$",
                  "reason": "Answering the question asked: the number on the smaller side is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(4x + 24y + 12z)\\left(\\dfrac{16}{x} + \\dfrac{6}{y} + \\dfrac{3}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an integer.",
              "answer": "676",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(4x + 24y + 12z)\\left(\\dfrac{16}{x} + \\dfrac{6}{y} + \\dfrac{3}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{4x}$, $\\sqrt{24y}$, $\\sqrt{12z}$ and the second is $\\sqrt{\\dfrac{16}{x}}$, $\\sqrt{\\dfrac{6}{y}}$, $\\sqrt{\\dfrac{3}{z}}$.",
                  "reason": "Cauchy-Schwarz Inequality: each bracket is a sum of positive numbers, and each term is the square of its square root."
                },
                {
                  "step": "$(4x + 24y + 12z)\\left(\\dfrac{16}{x} + \\dfrac{6}{y} + \\dfrac{3}{z}\\right) \\ge \\left(\\sqrt{4x} \\cdot \\sqrt{\\dfrac{16}{x}} + \\sqrt{24y} \\cdot \\sqrt{\\dfrac{6}{y}} + \\sqrt{12z} \\cdot \\sqrt{\\dfrac{3}{z}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "The products are $\\sqrt{64} = 8$, $\\sqrt{144} = 12$ and $\\sqrt{36} = 6$.",
                  "reason": "Root of a product: the two roots are multiplied under one root sign, and the letter cancels."
                },
                {
                  "step": "$(4x + 24y + 12z)\\left(\\dfrac{16}{x} + \\dfrac{6}{y} + \\dfrac{3}{z}\\right) \\ge (8 + 12 + 6)^2$",
                  "reason": "Substituting a value: each product is replaced by its value."
                },
                {
                  "step": "$(8 + 12 + 6)^2 = 676$",
                  "reason": "Order of operations (arithmetic's): the bracket is $26$, and $26^2 = 676$."
                },
                {
                  "step": "$E = 676$",
                  "reason": "Answering the question asked: the number on the smaller side is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(6x + y + 16z)\\left(\\dfrac{6}{x} + \\dfrac{25}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an integer.",
              "answer": "225",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(6x + y + 16z)\\left(\\dfrac{6}{x} + \\dfrac{25}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{6x}$, $\\sqrt{y}$, $\\sqrt{16z}$ and the second is $\\sqrt{\\dfrac{6}{x}}$, $\\sqrt{\\dfrac{25}{y}}$, $\\sqrt{\\dfrac{1}{z}}$.",
                  "reason": "Cauchy-Schwarz Inequality: each bracket is a sum of positive numbers, and each term is the square of its square root."
                },
                {
                  "step": "$(6x + y + 16z)\\left(\\dfrac{6}{x} + \\dfrac{25}{y} + \\dfrac{1}{z}\\right) \\ge \\left(\\sqrt{6x} \\cdot \\sqrt{\\dfrac{6}{x}} + \\sqrt{y} \\cdot \\sqrt{\\dfrac{25}{y}} + \\sqrt{16z} \\cdot \\sqrt{\\dfrac{1}{z}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "The products are $\\sqrt{36} = 6$, $\\sqrt{25} = 5$ and $\\sqrt{16} = 4$.",
                  "reason": "Root of a product: the two roots are multiplied under one root sign, and the letter cancels."
                },
                {
                  "step": "$(6x + y + 16z)\\left(\\dfrac{6}{x} + \\dfrac{25}{y} + \\dfrac{1}{z}\\right) \\ge (6 + 5 + 4)^2$",
                  "reason": "Substituting a value: each product is replaced by its value."
                },
                {
                  "step": "$(6 + 5 + 4)^2 = 225$",
                  "reason": "Order of operations (arithmetic's): the bracket is $15$, and $15^2 = 225$."
                },
                {
                  "step": "$E = 225$",
                  "reason": "Answering the question asked: the number on the smaller side is $E$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{9}{5x} + \\dfrac{1}{6y} \\ge \\dfrac{E}{5x + 6y}$ for all positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{9}{5x} + \\dfrac{1}{6y} \\ge \\dfrac{E}{5x + 6y}$ for all positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first sequence is $\\sqrt{5x}$, $\\sqrt{6y}$ and the second is $\\dfrac{3}{\\sqrt{5x}}$, $\\dfrac{1}{\\sqrt{6y}}$.",
                "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since $9 = 3^2$ and $1 = 1^2$."
              },
              {
                "step": "$(5x + 6y)\\left(\\dfrac{9}{5x} + \\dfrac{1}{6y}\\right) \\ge \\left(\\sqrt{5x} \\cdot \\dfrac{3}{\\sqrt{5x}} + \\sqrt{6y} \\cdot \\dfrac{1}{\\sqrt{6y}}\\right)^2$",
                "reason": "Cauchy-Schwarz Inequality, for these two sequences."
              },
              {
                "step": "$(5x + 6y)\\left(\\dfrac{9}{5x} + \\dfrac{1}{6y}\\right) \\ge (3 + 1)^2$",
                "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
              },
              {
                "step": "$(3 + 1)^2 = 16$",
                "reason": "Order of operations (arithmetic's): the bracket is $4$, and $4^2 = 16$."
              },
              {
                "step": "$\\dfrac{9}{5x} + \\dfrac{1}{6y} \\ge \\dfrac{16}{5x + 6y}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{5x + 6y}$, which is positive."
              },
              {
                "step": "$E = 16$",
                "reason": "Answering the question asked: the number on top of the right side is $E$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{36}{7x} + \\dfrac{81}{5y} + \\dfrac{1}{4z} \\ge \\dfrac{E}{7x + 5y + 4z}$ for all positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an integer.",
              "answer": "256",
              "lines": [
                {
                  "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{36}{7x} + \\dfrac{81}{5y} + \\dfrac{1}{4z} \\ge \\dfrac{E}{7x + 5y + 4z}$ for all positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{7x}$, $\\sqrt{5y}$, $\\sqrt{4z}$ and the second is $\\dfrac{6}{\\sqrt{7x}}$, $\\dfrac{9}{\\sqrt{5y}}$, $\\dfrac{1}{\\sqrt{4z}}$.",
                  "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since $36 = 6^2$, $81 = 9^2$ and $1 = 1^2$."
                },
                {
                  "step": "$(7x + 5y + 4z)\\left(\\dfrac{36}{7x} + \\dfrac{81}{5y} + \\dfrac{1}{4z}\\right) \\ge \\left(\\sqrt{7x} \\cdot \\dfrac{6}{\\sqrt{7x}} + \\sqrt{5y} \\cdot \\dfrac{9}{\\sqrt{5y}} + \\sqrt{4z} \\cdot \\dfrac{1}{\\sqrt{4z}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$(7x + 5y + 4z)\\left(\\dfrac{36}{7x} + \\dfrac{81}{5y} + \\dfrac{1}{4z}\\right) \\ge (6 + 9 + 1)^2$",
                  "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
                },
                {
                  "step": "$(6 + 9 + 1)^2 = 256$",
                  "reason": "Order of operations (arithmetic's): the bracket is $16$, and $16^2 = 256$."
                },
                {
                  "step": "$\\dfrac{36}{7x} + \\dfrac{81}{5y} + \\dfrac{1}{4z} \\ge \\dfrac{256}{7x + 5y + 4z}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{7x + 5y + 4z}$, which is positive."
                },
                {
                  "step": "$E = 256$",
                  "reason": "Answering the question asked: the number on top of the right side is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{1}{2x} + \\dfrac{64}{y} \\ge \\dfrac{E}{2x + y}$ for all positive numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "81",
              "lines": [
                {
                  "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{1}{2x} + \\dfrac{64}{y} \\ge \\dfrac{E}{2x + y}$ for all positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{2x}$, $\\sqrt{y}$ and the second is $\\dfrac{1}{\\sqrt{2x}}$, $\\dfrac{8}{\\sqrt{y}}$.",
                  "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since $1 = 1^2$ and $64 = 8^2$."
                },
                {
                  "step": "$(2x + y)\\left(\\dfrac{1}{2x} + \\dfrac{64}{y}\\right) \\ge \\left(\\sqrt{2x} \\cdot \\dfrac{1}{\\sqrt{2x}} + \\sqrt{y} \\cdot \\dfrac{8}{\\sqrt{y}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$(2x + y)\\left(\\dfrac{1}{2x} + \\dfrac{64}{y}\\right) \\ge (1 + 8)^2$",
                  "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
                },
                {
                  "step": "$(1 + 8)^2 = 81$",
                  "reason": "Order of operations (arithmetic's): the bracket is $9$, and $9^2 = 81$."
                },
                {
                  "step": "$\\dfrac{1}{2x} + \\dfrac{64}{y} \\ge \\dfrac{81}{2x + y}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2x + y}$, which is positive."
                },
                {
                  "step": "$E = 81$",
                  "reason": "Answering the question asked: the number on top of the right side is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{81}{2x} + \\dfrac{25}{3y} \\ge \\dfrac{E}{2x + 3y}$ for all positive numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "196",
              "lines": [
                {
                  "step": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{81}{2x} + \\dfrac{25}{3y} \\ge \\dfrac{E}{2x + 3y}$ for all positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{2x}$, $\\sqrt{3y}$ and the second is $\\dfrac{9}{\\sqrt{2x}}$, $\\dfrac{5}{\\sqrt{3y}}$.",
                  "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since $81 = 9^2$ and $25 = 5^2$."
                },
                {
                  "step": "$(2x + 3y)\\left(\\dfrac{81}{2x} + \\dfrac{25}{3y}\\right) \\ge \\left(\\sqrt{2x} \\cdot \\dfrac{9}{\\sqrt{2x}} + \\sqrt{3y} \\cdot \\dfrac{5}{\\sqrt{3y}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$(2x + 3y)\\left(\\dfrac{81}{2x} + \\dfrac{25}{3y}\\right) \\ge (9 + 5)^2$",
                  "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
                },
                {
                  "step": "$(9 + 5)^2 = 196$",
                  "reason": "Order of operations (arithmetic's): the bracket is $14$, and $14^2 = 196$."
                },
                {
                  "step": "$\\dfrac{81}{2x} + \\dfrac{25}{3y} \\ge \\dfrac{196}{2x + 3y}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2x + 3y}$, which is positive."
                },
                {
                  "step": "$E = 196$",
                  "reason": "Answering the question asked: the number on top of the right side is $E$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 4} \\ge E$, for positive numbers $x$ and $y$ with $x + y = 8$.",
            "lines": [
              {
                "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 4} \\ge E$, for positive numbers $x$ and $y$ with $x + y = 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first sequence is $\\sqrt{x + 5}$, $\\sqrt{y + 4}$ and the second is $\\dfrac{x}{\\sqrt{x + 5}}$, $\\dfrac{y}{\\sqrt{y + 4}}$.",
                "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since each top is the square of its letter."
              },
              {
                "step": "$\\left((x + 5) + (y + 4)\\right)\\left(\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 4}\\right) \\ge \\left(\\sqrt{x + 5} \\cdot \\dfrac{x}{\\sqrt{x + 5}} + \\sqrt{y + 4} \\cdot \\dfrac{y}{\\sqrt{y + 4}}\\right)^2$",
                "reason": "Cauchy-Schwarz Inequality, for these two sequences."
              },
              {
                "step": "$\\left((x + 5) + (y + 4)\\right)\\left(\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 4}\\right) \\ge (x + y)^2$",
                "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
              },
              {
                "step": "$(x + 5) + (y + 4) = x + y + 9$",
                "reason": "Collecting like terms: the numbers are added."
              },
              {
                "step": "$17\\left(\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 4}\\right) \\ge 64$",
                "reason": "Substituting a value: $x + y = 8$, so the first bracket is $8 + 9 = 17$ and the right side is $8^2 = 64$."
              },
              {
                "step": "$\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 4} \\ge \\dfrac{64}{17}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{17}$, which is positive."
              },
              {
                "step": "$E = \\dfrac{64}{17}$",
                "reason": "Answering the question asked: the number on the smaller side is $E$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 7} + \\dfrac{y^2}{y + 3} + \\dfrac{z^2}{z + 6} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/5",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 7} + \\dfrac{y^2}{y + 3} + \\dfrac{z^2}{z + 6} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{x + 7}$, $\\sqrt{y + 3}$, $\\sqrt{z + 6}$ and the second is $\\dfrac{x}{\\sqrt{x + 7}}$, $\\dfrac{y}{\\sqrt{y + 3}}$, $\\dfrac{z}{\\sqrt{z + 6}}$.",
                  "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since each top is the square of its letter."
                },
                {
                  "step": "$\\left((x + 7) + (y + 3) + (z + 6)\\right)\\left(\\dfrac{x^2}{x + 7} + \\dfrac{y^2}{y + 3} + \\dfrac{z^2}{z + 6}\\right) \\ge \\left(\\sqrt{x + 7} \\cdot \\dfrac{x}{\\sqrt{x + 7}} + \\sqrt{y + 3} \\cdot \\dfrac{y}{\\sqrt{y + 3}} + \\sqrt{z + 6} \\cdot \\dfrac{z}{\\sqrt{z + 6}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$\\left((x + 7) + (y + 3) + (z + 6)\\right)\\left(\\dfrac{x^2}{x + 7} + \\dfrac{y^2}{y + 3} + \\dfrac{z^2}{z + 6}\\right) \\ge (x + y + z)^2$",
                  "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
                },
                {
                  "step": "$(x + 7) + (y + 3) + (z + 6) = x + y + z + 16$",
                  "reason": "Collecting like terms: the numbers are added."
                },
                {
                  "step": "$20\\left(\\dfrac{x^2}{x + 7} + \\dfrac{y^2}{y + 3} + \\dfrac{z^2}{z + 6}\\right) \\ge 16$",
                  "reason": "Substituting a value: $x + y + z = 4$, so the first bracket is $4 + 16 = 20$ and the right side is $4^2 = 16$."
                },
                {
                  "step": "$\\dfrac{x^2}{x + 7} + \\dfrac{y^2}{y + 3} + \\dfrac{z^2}{z + 6} \\ge \\dfrac{4}{5}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{20}$, which is positive, and $\\dfrac{16}{20} = \\dfrac{4}{5}$."
                },
                {
                  "step": "$E = \\dfrac{4}{5}$",
                  "reason": "Answering the question asked: the number on the smaller side is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 5} + \\dfrac{z^2}{z + 3} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 12$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "48/7",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 5} + \\dfrac{z^2}{z + 3} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{x + 1}$, $\\sqrt{y + 5}$, $\\sqrt{z + 3}$ and the second is $\\dfrac{x}{\\sqrt{x + 1}}$, $\\dfrac{y}{\\sqrt{y + 5}}$, $\\dfrac{z}{\\sqrt{z + 3}}$.",
                  "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since each top is the square of its letter."
                },
                {
                  "step": "$\\left((x + 1) + (y + 5) + (z + 3)\\right)\\left(\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 5} + \\dfrac{z^2}{z + 3}\\right) \\ge \\left(\\sqrt{x + 1} \\cdot \\dfrac{x}{\\sqrt{x + 1}} + \\sqrt{y + 5} \\cdot \\dfrac{y}{\\sqrt{y + 5}} + \\sqrt{z + 3} \\cdot \\dfrac{z}{\\sqrt{z + 3}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$\\left((x + 1) + (y + 5) + (z + 3)\\right)\\left(\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 5} + \\dfrac{z^2}{z + 3}\\right) \\ge (x + y + z)^2$",
                  "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
                },
                {
                  "step": "$(x + 1) + (y + 5) + (z + 3) = x + y + z + 9$",
                  "reason": "Collecting like terms: the numbers are added."
                },
                {
                  "step": "$21\\left(\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 5} + \\dfrac{z^2}{z + 3}\\right) \\ge 144$",
                  "reason": "Substituting a value: $x + y + z = 12$, so the first bracket is $12 + 9 = 21$ and the right side is $12^2 = 144$."
                },
                {
                  "step": "$\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 5} + \\dfrac{z^2}{z + 3} \\ge \\dfrac{48}{7}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{21}$, which is positive, and $\\dfrac{144}{21} = \\dfrac{48}{7}$."
                },
                {
                  "step": "$E = \\dfrac{48}{7}$",
                  "reason": "Answering the question asked: the number on the smaller side is $E$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 4} + \\dfrac{z^2}{z + 7} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 10$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10/3",
              "lines": [
                {
                  "step": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 4} + \\dfrac{z^2}{z + 7} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sequence is $\\sqrt{x + 9}$, $\\sqrt{y + 4}$, $\\sqrt{z + 7}$ and the second is $\\dfrac{x}{\\sqrt{x + 9}}$, $\\dfrac{y}{\\sqrt{y + 4}}$, $\\dfrac{z}{\\sqrt{z + 7}}$.",
                  "reason": "Cauchy-Schwarz Inequality: the sum of the bottoms is one sum of squares and the sum of the fractions is the other, since each top is the square of its letter."
                },
                {
                  "step": "$\\left((x + 9) + (y + 4) + (z + 7)\\right)\\left(\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 4} + \\dfrac{z^2}{z + 7}\\right) \\ge \\left(\\sqrt{x + 9} \\cdot \\dfrac{x}{\\sqrt{x + 9}} + \\sqrt{y + 4} \\cdot \\dfrac{y}{\\sqrt{y + 4}} + \\sqrt{z + 7} \\cdot \\dfrac{z}{\\sqrt{z + 7}}\\right)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for these two sequences."
                },
                {
                  "step": "$\\left((x + 9) + (y + 4) + (z + 7)\\right)\\left(\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 4} + \\dfrac{z^2}{z + 7}\\right) \\ge (x + y + z)^2$",
                  "reason": "Cancelling a common factor: in each product the root on top cancels with the same root on the bottom."
                },
                {
                  "step": "$(x + 9) + (y + 4) + (z + 7) = x + y + z + 20$",
                  "reason": "Collecting like terms: the numbers are added."
                },
                {
                  "step": "$30\\left(\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 4} + \\dfrac{z^2}{z + 7}\\right) \\ge 100$",
                  "reason": "Substituting a value: $x + y + z = 10$, so the first bracket is $10 + 20 = 30$ and the right side is $10^2 = 100$."
                },
                {
                  "step": "$\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 4} + \\dfrac{z^2}{z + 7} \\ge \\dfrac{10}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{30}$, which is positive, and $\\dfrac{100}{30} = \\dfrac{10}{3}$."
                },
                {
                  "step": "$E = \\dfrac{10}{3}$",
                  "reason": "Answering the question asked: the number on the smaller side is $E$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t215-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $z$, for real numbers $x$, $y$ and $z$ with $4x + 2y + 3z = 58$ and $x^2 + y^2 + z^2 = 116$.",
            "lines": [
              {
                "step": "Find $z$, for real numbers $x$, $y$ and $z$ with $4x + 2y + 3z = 58$ and $x^2 + y^2 + z^2 = 116$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(4^2 + 2^2 + 3^2\\right)(x^2 + y^2 + z^2) \\ge (4x + 2y + 3z)^2$",
                "reason": "Cauchy-Schwarz Inequality, for the first sequence $4$, $2$, $3$ and the second sequence $x$, $y$, $z$."
              },
              {
                "step": "The left side is $29 \\cdot 116 = 3364$ and the right side is $58^2 = 3364$, so the two sides are equal.",
                "reason": "Substituting a value: $x^2 + y^2 + z^2 = 116$ and $4x + 2y + 3z = 58$, with $4^2 + 2^2 + 3^2 = 29$."
              },
              {
                "step": "There is a number $c$ with $x = 4c$, $y = 2c$ and $z = 3c$.",
                "reason": "Equality in Cauchy-Schwarz: the numbers $4$, $2$ and $3$ are not all $0$ and the two sides are equal, so the second sequence is one number times the first."
              },
              {
                "step": "$4(4c) + 2(2c) + 3(3c) = 58$",
                "reason": "Substituting a value: each letter in $4x + 2y + 3z = 58$ is replaced by its multiple of $c$."
              },
              {
                "step": "$29c = 58$",
                "reason": "Collecting like terms: the multiples of $c$ are added."
              },
              {
                "step": "$c = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $29$."
              },
              {
                "step": "$z = 6$",
                "reason": "Substituting a value: $z = 3c$ with $c = 2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, for real numbers $x$ and $y$ with $2x - 3y = 39$ and $x^2 + y^2 = 117$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 6",
              "lines": [
                {
                  "step": "Find $x$, for real numbers $x$ and $y$ with $2x - 3y = 39$ and $x^2 + y^2 = 117$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(2^2 + (-3)^2\\right)(x^2 + y^2) \\ge (2x - 3y)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $2$, $-3$ and the second sequence $x$, $y$."
                },
                {
                  "step": "The left side is $13 \\cdot 117 = 1521$ and the right side is $39^2 = 1521$, so the two sides are equal.",
                  "reason": "Substituting a value: $x^2 + y^2 = 117$ and $2x - 3y = 39$, with $2^2 + (-3)^2 = 13$."
                },
                {
                  "step": "There is a number $c$ with $x = 2c$ and $y = -3c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $2$ and $-3$ are not all $0$ and the two sides are equal, so the second sequence is one number times the first."
                },
                {
                  "step": "$2(2c) - 3(-3c) = 39$",
                  "reason": "Substituting a value: each letter in $2x - 3y = 39$ is replaced by its multiple of $c$."
                },
                {
                  "step": "$13c = 39$",
                  "reason": "Collecting like terms: the multiples of $c$ are added."
                },
                {
                  "step": "$c = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Substituting a value: $x = 2c$ with $c = 3$."
                }
              ]
            },
            {
              "prompt": "Find $x$, for real numbers $x$, $y$ and $z$ with $6x + 3y - 5z = \\dfrac{70}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{70}{9}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 2",
              "lines": [
                {
                  "step": "Find $x$, for real numbers $x$, $y$ and $z$ with $6x + 3y - 5z = \\dfrac{70}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{70}{9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(6^2 + 3^2 + (-5)^2\\right)(x^2 + y^2 + z^2) \\ge (6x + 3y - 5z)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $6$, $3$, $-5$ and the second sequence $x$, $y$, $z$."
                },
                {
                  "step": "The left side is $70 \\cdot \\dfrac{70}{9} = \\dfrac{4900}{9}$ and the right side is $\\left(\\dfrac{70}{3}\\right)^2 = \\dfrac{4900}{9}$, so the two sides are equal.",
                  "reason": "Substituting a value: $x^2 + y^2 + z^2 = \\dfrac{70}{9}$ and $6x + 3y - 5z = \\dfrac{70}{3}$, with $6^2 + 3^2 + (-5)^2 = 70$."
                },
                {
                  "step": "There is a number $c$ with $x = 6c$, $y = 3c$ and $z = -5c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $6$, $3$ and $-5$ are not all $0$ and the two sides are equal, so the second sequence is one number times the first."
                },
                {
                  "step": "$6(6c) + 3(3c) - 5(-5c) = \\dfrac{70}{3}$",
                  "reason": "Substituting a value: each letter in $6x + 3y - 5z = \\dfrac{70}{3}$ is replaced by its multiple of $c$."
                },
                {
                  "step": "$70c = \\dfrac{70}{3}$",
                  "reason": "Collecting like terms: the multiples of $c$ are added."
                },
                {
                  "step": "$c = \\dfrac{1}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $70$."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Substituting a value: $x = 6c$ with $c = \\dfrac{1}{3}$."
                }
              ]
            },
            {
              "prompt": "Find $z$, for real numbers $x$, $y$ and $z$ with $3x - 2y + 6z = \\dfrac{49}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{49}{9}$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = 2",
              "lines": [
                {
                  "step": "Find $z$, for real numbers $x$, $y$ and $z$ with $3x - 2y + 6z = \\dfrac{49}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{49}{9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(3^2 + (-2)^2 + 6^2\\right)(x^2 + y^2 + z^2) \\ge (3x - 2y + 6z)^2$",
                  "reason": "Cauchy-Schwarz Inequality, for the first sequence $3$, $-2$, $6$ and the second sequence $x$, $y$, $z$."
                },
                {
                  "step": "The left side is $49 \\cdot \\dfrac{49}{9} = \\dfrac{2401}{9}$ and the right side is $\\left(\\dfrac{49}{3}\\right)^2 = \\dfrac{2401}{9}$, so the two sides are equal.",
                  "reason": "Substituting a value: $x^2 + y^2 + z^2 = \\dfrac{49}{9}$ and $3x - 2y + 6z = \\dfrac{49}{3}$, with $3^2 + (-2)^2 + 6^2 = 49$."
                },
                {
                  "step": "There is a number $c$ with $x = 3c$, $y = -2c$ and $z = 6c$.",
                  "reason": "Equality in Cauchy-Schwarz: the numbers $3$, $-2$ and $6$ are not all $0$ and the two sides are equal, so the second sequence is one number times the first."
                },
                {
                  "step": "$3(3c) - 2(-2c) + 6(6c) = \\dfrac{49}{3}$",
                  "reason": "Substituting a value: each letter in $3x - 2y + 6z = \\dfrac{49}{3}$ is replaced by its multiple of $c$."
                },
                {
                  "step": "$49c = \\dfrac{49}{3}$",
                  "reason": "Collecting like terms: the multiples of $c$ are added."
                },
                {
                  "step": "$c = \\dfrac{1}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $49$."
                },
                {
                  "step": "$z = 2$",
                  "reason": "Substituting a value: $z = 6c$ with $c = \\dfrac{1}{3}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t215-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(3x + 8y + 9z)\\left(\\dfrac{27}{x} + \\dfrac{8}{y} + \\dfrac{4}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
            "given": [
              "$(3x + 8y + 9z)\\left(\\dfrac{27}{x} + \\dfrac{8}{y} + \\dfrac{4}{z}\\right) \\ge \\left(\\sqrt{3x} \\cdot \\sqrt{\\dfrac{27}{x}} + \\sqrt{8y} \\cdot \\sqrt{\\dfrac{8}{y}} + \\sqrt{9z} \\cdot \\sqrt{\\dfrac{4}{z}}\\right)^2$",
              "$\\sqrt{3x} \\cdot \\sqrt{\\dfrac{27}{x}} = 9$",
              "$\\sqrt{8y} \\cdot \\sqrt{\\dfrac{8}{y}} = 8$",
              "$\\sqrt{9z} \\cdot \\sqrt{\\dfrac{4}{z}} = 6$",
              "$(9 + 8 + 6)^2 = 81 + 64 + 36$",
              "$81 + 64 + 36 = 181$",
              "$E = 181$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(3x + 8y + 9z)\\left(\\dfrac{27}{x} + \\dfrac{8}{y} + \\dfrac{4}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 4 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the three products.",
                "reason": "Cauchy-Schwarz Inequality and Root of a product: each of these lines follows from the problem."
              },
              {
                "step": "Line 5 squares the sum $9 + 8 + 6$ one term at a time.",
                "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares, since twice each product of two different terms is left out."
              },
              {
                "step": "Line 5 written right is $(9 + 8 + 6)^2 = 529$.",
                "reason": "Order of operations (arithmetic's): the bracket is worked out first, and $23^2 = 529$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(16x + 7y + 2z)\\left(\\dfrac{9}{x} + \\dfrac{7}{y} + \\dfrac{32}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
              "given": [
                "$(16x + 7y + 2z)\\left(\\dfrac{9}{x} + \\dfrac{7}{y} + \\dfrac{32}{z}\\right) \\ge \\left(\\sqrt{16x} \\cdot \\sqrt{\\dfrac{9}{x}} + \\sqrt{7y} \\cdot \\sqrt{\\dfrac{7}{y}} + \\sqrt{2z} \\cdot \\sqrt{\\dfrac{32}{z}}\\right)^2$",
                "$\\sqrt{16x} \\cdot \\sqrt{\\dfrac{9}{x}} = \\sqrt{144}$",
                "$\\sqrt{7y} \\cdot \\sqrt{\\dfrac{7}{y}} = \\sqrt{49}$",
                "$\\sqrt{2z} \\cdot \\sqrt{\\dfrac{32}{z}} = \\sqrt{64}$",
                "$\\left(\\sqrt{144} + \\sqrt{49} + \\sqrt{64}\\right)^2 = (12 + 7 + 8)^2$",
                "$(12 + 7 + 8)^2 = 144 + 49 + 64$",
                "$E = 257$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: (12+7+8)^2 = 729",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(16x + 7y + 2z)\\left(\\dfrac{9}{x} + \\dfrac{7}{y} + \\dfrac{32}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 5 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, the three products, and the roots worked out.",
                  "reason": "Cauchy-Schwarz Inequality, Root of a product and positive square root (arithmetic's): each of these lines follows from the problem."
                },
                {
                  "step": "Line 6 squares the sum $12 + 7 + 8$ one term at a time.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares, since twice each product of two different terms is left out."
                },
                {
                  "step": "Line 6 written right is $(12 + 7 + 8)^2 = 729$.",
                  "reason": "Order of operations (arithmetic's): the bracket is worked out first, and $27^2 = 729$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(x + 25y + 12z)\\left(\\dfrac{25}{x} + \\dfrac{4}{y} + \\dfrac{3}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
              "given": [
                "$(x + 25y + 12z)\\left(\\dfrac{25}{x} + \\dfrac{4}{y} + \\dfrac{3}{z}\\right) \\ge \\left(\\sqrt{x} \\cdot \\sqrt{\\dfrac{25}{x}} + \\sqrt{25y} \\cdot \\sqrt{\\dfrac{4}{y}} + \\sqrt{12z} \\cdot \\sqrt{\\dfrac{3}{z}}\\right)^2$",
                "$\\sqrt{x} \\cdot \\sqrt{\\dfrac{25}{x}} = 5$",
                "$\\sqrt{25y} \\cdot \\sqrt{\\dfrac{4}{y}} = 10$",
                "$\\sqrt{12z} \\cdot \\sqrt{\\dfrac{3}{z}} = 6$",
                "$(5 + 10 + 6)^2 = 25 + 100 + 36$",
                "$25 + 100 + 36 = 161$",
                "$E = 161$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (5+10+6)^2 = 441",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(x + 25y + 12z)\\left(\\dfrac{25}{x} + \\dfrac{4}{y} + \\dfrac{3}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the three products.",
                  "reason": "Cauchy-Schwarz Inequality and Root of a product: each of these lines follows from the problem."
                },
                {
                  "step": "Line 5 squares the sum $5 + 10 + 6$ one term at a time.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares, since twice each product of two different terms is left out."
                },
                {
                  "step": "Line 5 written right is $(5 + 10 + 6)^2 = 441$.",
                  "reason": "Order of operations (arithmetic's): the bracket is worked out first, and $21^2 = 441$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(11x + 18y + 4z)\\left(\\dfrac{11}{x} + \\dfrac{8}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
              "given": [
                "$(11x + 18y + 4z)\\left(\\dfrac{11}{x} + \\dfrac{8}{y} + \\dfrac{1}{z}\\right) \\ge \\left(\\sqrt{11x} \\cdot \\sqrt{\\dfrac{11}{x}} + \\sqrt{18y} \\cdot \\sqrt{\\dfrac{8}{y}} + \\sqrt{4z} \\cdot \\sqrt{\\dfrac{1}{z}}\\right)^2$",
                "$\\sqrt{11x} \\cdot \\sqrt{\\dfrac{11}{x}} = \\sqrt{121}$",
                "$\\sqrt{18y} \\cdot \\sqrt{\\dfrac{8}{y}} = \\sqrt{144}$",
                "$\\sqrt{4z} \\cdot \\sqrt{\\dfrac{1}{z}} = \\sqrt{4}$",
                "$\\left(\\sqrt{121} + \\sqrt{144} + \\sqrt{4}\\right)^2 = (11 + 12 + 2)^2$",
                "$(11 + 12 + 2)^2 = 121 + 144 + 4$",
                "$E = 269$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: (11+12+2)^2 = 625",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(11x + 18y + 4z)\\left(\\dfrac{11}{x} + \\dfrac{8}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 5 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, the three products, and the roots worked out.",
                  "reason": "Cauchy-Schwarz Inequality, Root of a product and positive square root (arithmetic's): each of these lines follows from the problem."
                },
                {
                  "step": "Line 6 squares the sum $11 + 12 + 2$ one term at a time.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares, since twice each product of two different terms is left out."
                },
                {
                  "step": "Line 6 written right is $(11 + 12 + 2)^2 = 625$.",
                  "reason": "Order of operations (arithmetic's): the bracket is worked out first, and $25^2 = 625$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(12x + 8y + 5z)\\left(\\dfrac{3}{x} + \\dfrac{8}{y} + \\dfrac{20}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
            "given": [
              "$(12x + 8y + 5z)\\left(\\dfrac{3}{x} + \\dfrac{8}{y} + \\dfrac{20}{z}\\right) \\ge \\left(\\sqrt{12x} \\cdot \\sqrt{\\dfrac{3}{x}} + \\sqrt{8y} \\cdot \\sqrt{\\dfrac{8}{y}} + \\sqrt{5z} \\cdot \\sqrt{\\dfrac{20}{z}}\\right)^2$",
              "$\\sqrt{12x} \\cdot \\sqrt{\\dfrac{3}{x}} = 6$",
              "$\\sqrt{8y} \\cdot \\sqrt{\\dfrac{8}{y}} = 8 + 6 = 14$",
              "$\\sqrt{5z} \\cdot \\sqrt{\\dfrac{20}{z}} = 10$",
              "$E = (14 + 10)^2 = 576$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(12x + 8y + 5z)\\left(\\dfrac{3}{x} + \\dfrac{8}{y} + \\dfrac{20}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first product.",
                "reason": "Cauchy-Schwarz Inequality and Root of a product: each of these lines follows from the problem."
              },
              {
                "step": "Line 3 runs on from the product, which is $8$, to the total so far, $14$, with a second equals sign.",
                "reason": "Equation: the equals sign says that its two sides are the same number, and the product is not the total."
              },
              {
                "step": "Line 3 written right is $\\sqrt{8y} \\cdot \\sqrt{\\dfrac{8}{y}} = 8$.",
                "reason": "Root of a product: the line states the product alone, and the adding is left to the next line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(25x + 6y + 32z)\\left(\\dfrac{1}{x} + \\dfrac{24}{y} + \\dfrac{2}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
              "given": [
                "$(25x + 6y + 32z)\\left(\\dfrac{1}{x} + \\dfrac{24}{y} + \\dfrac{2}{z}\\right) \\ge \\left(\\sqrt{25x} \\cdot \\sqrt{\\dfrac{1}{x}} + \\sqrt{6y} \\cdot \\sqrt{\\dfrac{24}{y}} + \\sqrt{32z} \\cdot \\sqrt{\\dfrac{2}{z}}\\right)^2$",
                "$\\sqrt{25x} \\cdot \\sqrt{\\dfrac{1}{x}} = 5$",
                "$\\sqrt{6y} \\cdot \\sqrt{\\dfrac{24}{y}} = 12$",
                "$\\sqrt{32z} \\cdot \\sqrt{\\dfrac{2}{z}} = 8 + 5 + 12 = 25$",
                "$E = 25^2 = 625$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: sqrt(32*z)*sqrt(2/z) = 8",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(25x + 6y + 32z)\\left(\\dfrac{1}{x} + \\dfrac{24}{y} + \\dfrac{2}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first two products.",
                  "reason": "Cauchy-Schwarz Inequality and Root of a product: each of these lines follows from the problem."
                },
                {
                  "step": "Line 4 runs on from the product, which is $8$, to the total, $25$, with a second equals sign.",
                  "reason": "Equation: the equals sign says that its two sides are the same number, and the product is not the total."
                },
                {
                  "step": "Line 4 written right is $\\sqrt{32z} \\cdot \\sqrt{\\dfrac{2}{z}} = 8$.",
                  "reason": "Root of a product: the line states the product alone, and the adding is left to the next line."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(x + 25y + 20z)\\left(\\dfrac{4}{x} + \\dfrac{1}{y} + \\dfrac{5}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
              "given": [
                "$(x + 25y + 20z)\\left(\\dfrac{4}{x} + \\dfrac{1}{y} + \\dfrac{5}{z}\\right) \\ge \\left(\\sqrt{x} \\cdot \\sqrt{\\dfrac{4}{x}} + \\sqrt{25y} \\cdot \\sqrt{\\dfrac{1}{y}} + \\sqrt{20z} \\cdot \\sqrt{\\dfrac{5}{z}}\\right)^2$",
                "$\\sqrt{x} \\cdot \\sqrt{\\dfrac{4}{x}} = 2$",
                "$\\sqrt{25y} \\cdot \\sqrt{\\dfrac{1}{y}} = 5 + 2 = 7$",
                "$\\sqrt{20z} \\cdot \\sqrt{\\dfrac{5}{z}} = 10$",
                "$E = (7 + 10)^2 = 289$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(25*y)*sqrt(1/y) = 5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(x + 25y + 20z)\\left(\\dfrac{4}{x} + \\dfrac{1}{y} + \\dfrac{5}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first product.",
                  "reason": "Cauchy-Schwarz Inequality and Root of a product: each of these lines follows from the problem."
                },
                {
                  "step": "Line 3 runs on from the product, which is $5$, to the total so far, $7$, with a second equals sign.",
                  "reason": "Equation: the equals sign says that its two sides are the same number, and the product is not the total."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{25y} \\cdot \\sqrt{\\dfrac{1}{y}} = 5$.",
                  "reason": "Root of a product: the line states the product alone, and the adding is left to the next line."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 27y + 4z)\\left(\\dfrac{18}{x} + \\dfrac{3}{y} + \\dfrac{25}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
              "given": [
                "$(8x + 27y + 4z)\\left(\\dfrac{18}{x} + \\dfrac{3}{y} + \\dfrac{25}{z}\\right) \\ge \\left(\\sqrt{8x} \\cdot \\sqrt{\\dfrac{18}{x}} + \\sqrt{27y} \\cdot \\sqrt{\\dfrac{3}{y}} + \\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}}\\right)^2$",
                "$\\sqrt{8x} \\cdot \\sqrt{\\dfrac{18}{x}} = 12$",
                "$\\sqrt{27y} \\cdot \\sqrt{\\dfrac{3}{y}} = 9$",
                "$\\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}} = 10 + 12 + 9 = 31$",
                "$E = 31^2 = 961$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: sqrt(4*z)*sqrt(25/z) = 10",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 27y + 4z)\\left(\\dfrac{18}{x} + \\dfrac{3}{y} + \\dfrac{25}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first two products.",
                  "reason": "Cauchy-Schwarz Inequality and Root of a product: each of these lines follows from the problem."
                },
                {
                  "step": "Line 4 runs on from the product, which is $10$, to the total, $31$, with a second equals sign.",
                  "reason": "Equation: the equals sign says that its two sides are the same number, and the product is not the total."
                },
                {
                  "step": "Line 4 written right is $\\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}} = 10$.",
                  "reason": "Root of a product: the line states the product alone, and the adding is left to the next line."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t215-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $2$, $8$, $3$ and the second sequence $5$, $x$, $x + 4$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $2$, $8$, $3$ and the second sequence $5$, $x$, $x + 4$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the squares of the first sequence is $2^2 + 8^2 + 3^2$.",
                "reason": "Writing a sentence as an equation: \"the sum of the squares\" means each term is squared and the squares are added."
              },
              {
                "step": "The sum of the squares of the second sequence is $5^2 + x^2 + (x + 4)^2$.",
                "reason": "Writing a sentence as an equation: a term with more than one part goes in a bracket before it is squared."
              },
              {
                "step": "$y = (2^2 + 8^2 + 3^2)(5^2 + x^2 + (x + 4)^2)$",
                "reason": "Writing a sentence as an equation: \"times\" means the two sums are multiplied, each in its own bracket, and \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $2$, $8$ and the second sequence $x$, $6$, $8$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (5^2+2^2+8^2)*(x^2+6^2+8^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $2$, $8$ and the second sequence $x$, $6$, $8$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the squares of the first sequence is $5^2 + 2^2 + 8^2$.",
                  "reason": "Writing a sentence as an equation: \"the sum of the squares\" means each term is squared and the squares are added."
                },
                {
                  "step": "The sum of the squares of the second sequence is $x^2 + 6^2 + 8^2$.",
                  "reason": "Writing a sentence as an equation: a term with more than one part goes in a bracket before it is squared."
                },
                {
                  "step": "$y = (5^2 + 2^2 + 8^2)(x^2 + 6^2 + 8^2)$",
                  "reason": "Writing a sentence as an equation: \"times\" means the two sums are multiplied, each in its own bracket, and \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $6$, $7$, $2$ and the second sequence $9$, $8$, $x$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6^2+7^2+2^2)*(9^2+8^2+x^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $6$, $7$, $2$ and the second sequence $9$, $8$, $x$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the squares of the first sequence is $6^2 + 7^2 + 2^2$.",
                  "reason": "Writing a sentence as an equation: \"the sum of the squares\" means each term is squared and the squares are added."
                },
                {
                  "step": "The sum of the squares of the second sequence is $9^2 + 8^2 + x^2$.",
                  "reason": "Writing a sentence as an equation: a term with more than one part goes in a bracket before it is squared."
                },
                {
                  "step": "$y = (6^2 + 7^2 + 2^2)(9^2 + 8^2 + x^2)$",
                  "reason": "Writing a sentence as an equation: \"the product of\" means the two sums are multiplied, each in its own bracket, and \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $4$, $6$ and the second sequence $x$, $x + 5$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (4^2+6^2)*(x^2+(x+5)^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $4$, $6$ and the second sequence $x$, $x + 5$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the squares of the first sequence is $4^2 + 6^2$.",
                  "reason": "Writing a sentence as an equation: \"the sum of the squares\" means each term is squared and the squares are added."
                },
                {
                  "step": "The sum of the squares of the second sequence is $x^2 + (x + 5)^2$.",
                  "reason": "Writing a sentence as an equation: a term with more than one part goes in a bracket before it is squared."
                },
                {
                  "step": "$y = (4^2 + 6^2)(x^2 + (x + 5)^2)$",
                  "reason": "Writing a sentence as an equation: \"times\" means the two sums are multiplied, each in its own bracket, and \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $8$ and the second sequence $3$, $x$, the number $y$ is the square of the sum of the products of the terms in the same places.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $8$ and the second sequence $3$, $x$, the number $y$ is the square of the sum of the products of the terms in the same places.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The products of the terms in the same places are $5 \\cdot 3$ and $8x$.",
                "reason": "Writing a sentence as an equation: \"in the same places\" pairs first term with first term and so on, and \"product\" means each pair is multiplied."
              },
              {
                "step": "The sum of the products is $5 \\cdot 3 + 8x$.",
                "reason": "Writing a sentence as an equation: \"sum\" means the products are added."
              },
              {
                "step": "$y = (5 \\cdot 3 + 8x)^2$",
                "reason": "Writing a sentence as an equation: \"the square of the sum\" puts the whole sum in a bracket before it is squared, and \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $9$, $2$ and the second sequence $x$, $4$, $6$, the number $y$ is the square of the sum of the products of the terms in the same places.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (5*x+9*4+2*6)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $9$, $2$ and the second sequence $x$, $4$, $6$, the number $y$ is the square of the sum of the products of the terms in the same places.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The products of the terms in the same places are $5x$, $9 \\cdot 4$ and $2 \\cdot 6$.",
                  "reason": "Writing a sentence as an equation: \"in the same places\" pairs first term with first term and so on, and \"product\" means each pair is multiplied."
                },
                {
                  "step": "The sum of the products is $5x + 9 \\cdot 4 + 2 \\cdot 6$.",
                  "reason": "Writing a sentence as an equation: \"sum\" means the products are added."
                },
                {
                  "step": "$y = (5x + 9 \\cdot 4 + 2 \\cdot 6)^2$",
                  "reason": "Writing a sentence as an equation: \"the square of the sum\" puts the whole sum in a bracket before it is squared, and \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $7$, $8$, $2$ and the second sequence $x + 5$, $7$, $x$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (7*(x+5)+8*7+2*x)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $7$, $8$, $2$ and the second sequence $x + 5$, $7$, $x$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The products of the terms in the same places are $7(x + 5)$, $8 \\cdot 7$ and $2x$.",
                  "reason": "Writing a sentence as an equation: \"in the same places\" pairs first term with first term and so on, and \"multiplied\" means each pair is multiplied."
                },
                {
                  "step": "The sum of the products is $7(x + 5) + 8 \\cdot 7 + 2x$.",
                  "reason": "Writing a sentence as an equation: \"added\" means the products are added."
                },
                {
                  "step": "$y = (7(x + 5) + 8 \\cdot 7 + 2x)^2$",
                  "reason": "Writing a sentence as an equation: \"the square of that sum\" puts the whole sum in a bracket before it is squared, and \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $8$, $4$, $7$ and the second sequence $3$, $9$, $x$, the number $y$ is the square of the sum of the products of the terms in the same places.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (8*3+4*9+7*x)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $8$, $4$, $7$ and the second sequence $3$, $9$, $x$, the number $y$ is the square of the sum of the products of the terms in the same places.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The products of the terms in the same places are $8 \\cdot 3$, $4 \\cdot 9$ and $7x$.",
                  "reason": "Writing a sentence as an equation: \"in the same places\" pairs first term with first term and so on, and \"product\" means each pair is multiplied."
                },
                {
                  "step": "The sum of the products is $8 \\cdot 3 + 4 \\cdot 9 + 7x$.",
                  "reason": "Writing a sentence as an equation: \"sum\" means the products are added."
                },
                {
                  "step": "$y = (8 \\cdot 3 + 4 \\cdot 9 + 7x)^2$",
                  "reason": "Writing a sentence as an equation: \"the square of the sum\" puts the whole sum in a bracket before it is squared, and \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $8$, $9$, $7$ and the second sequence $24$, $27$, $x$, the two sides of the Cauchy-Schwarz Inequality are equal.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $8$, $9$, $7$ and the second sequence $24$, $27$, $x$, the two sides of the Cauchy-Schwarz Inequality are equal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The side with the sums of squares is $(8^2 + 9^2 + 7^2)(24^2 + 27^2 + x^2)$.",
                "reason": "Cauchy-Schwarz Inequality: its greater side is the sum of the squares of one sequence times the sum of the squares of the other."
              },
              {
                "step": "The other side is $(8 \\cdot 24 + 9 \\cdot 27 + 7x)^2$.",
                "reason": "Cauchy-Schwarz Inequality: its smaller side is the square of the sum of the products of the terms in the same places."
              },
              {
                "step": "$(8^2 + 9^2 + 7^2)(24^2 + 27^2 + x^2) = (8 \\cdot 24 + 9 \\cdot 27 + 7x)^2$",
                "reason": "Writing a sentence as an equation: \"are equal\" puts the equals sign between the two sides, with the product of the two sums of squares on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $7$, $3$ and the second sequence $28$, $x$, the two sides of the Cauchy-Schwarz Inequality are equal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(7^2+3^2)*(28^2+x^2) = (7*28+3*x)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $7$, $3$ and the second sequence $28$, $x$, the two sides of the Cauchy-Schwarz Inequality are equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The side with the sums of squares is $(7^2 + 3^2)(28^2 + x^2)$.",
                  "reason": "Cauchy-Schwarz Inequality: its greater side is the sum of the squares of one sequence times the sum of the squares of the other."
                },
                {
                  "step": "The other side is $(7 \\cdot 28 + 3x)^2$.",
                  "reason": "Cauchy-Schwarz Inequality: its smaller side is the square of the sum of the products of the terms in the same places."
                },
                {
                  "step": "$(7^2 + 3^2)(28^2 + x^2) = (7 \\cdot 28 + 3x)^2$",
                  "reason": "Writing a sentence as an equation: \"are equal\" puts the equals sign between the two sides, with the product of the two sums of squares on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $6$, $3$ and the second sequence $18$, $x + 8$, equality holds in the Cauchy-Schwarz Inequality.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(6^2+3^2)*(18^2+(x+8)^2) = (6*18+3*(x+8))^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $6$, $3$ and the second sequence $18$, $x + 8$, equality holds in the Cauchy-Schwarz Inequality.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The side with the sums of squares is $(6^2 + 3^2)(18^2 + (x + 8)^2)$.",
                  "reason": "Cauchy-Schwarz Inequality: its greater side is the sum of the squares of one sequence times the sum of the squares of the other."
                },
                {
                  "step": "The other side is $(6 \\cdot 18 + 3(x + 8))^2$.",
                  "reason": "Cauchy-Schwarz Inequality: its smaller side is the square of the sum of the products of the terms in the same places."
                },
                {
                  "step": "$(6^2 + 3^2)(18^2 + (x + 8)^2) = (6 \\cdot 18 + 3(x + 8))^2$",
                  "reason": "Writing a sentence as an equation: \"equality holds\" puts the equals sign between the two sides, with the product of the two sums of squares on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $7$, $9$, $4$ and the second sequence $35$, $x + 8$, $20$, the two sides of the Cauchy-Schwarz Inequality are equal.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(7^2+9^2+4^2)*(35^2+(x+8)^2+20^2) = (7*35+9*(x+8)+4*20)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $7$, $9$, $4$ and the second sequence $35$, $x + 8$, $20$, the two sides of the Cauchy-Schwarz Inequality are equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The side with the sums of squares is $(7^2 + 9^2 + 4^2)(35^2 + (x + 8)^2 + 20^2)$.",
                  "reason": "Cauchy-Schwarz Inequality: its greater side is the sum of the squares of one sequence times the sum of the squares of the other."
                },
                {
                  "step": "The other side is $(7 \\cdot 35 + 9(x + 8) + 4 \\cdot 20)^2$.",
                  "reason": "Cauchy-Schwarz Inequality: its smaller side is the square of the sum of the products of the terms in the same places."
                },
                {
                  "step": "$(7^2 + 9^2 + 4^2)(35^2 + (x + 8)^2 + 20^2) = (7 \\cdot 35 + 9(x + 8) + 4 \\cdot 20)^2$",
                  "reason": "Writing a sentence as an equation: \"are equal\" puts the equals sign between the two sides, with the product of the two sums of squares on the left."
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
      "id": "t215-p1",
      "method": "direct proof",
      "statement": "Let $a_1$, $a_2$, $b_1$ and $b_2$ be real numbers. Then $(a_1^2 + a_2^2)(b_1^2 + b_2^2) \\ge (a_1b_1 + a_2b_2)^2$, and the two sides are equal exactly when $a_1b_2 = a_2b_1$.",
      "idea": "By the Two-squares identity the greater side is the smaller side plus the square $(a_1b_2 - a_2b_1)^2$, and a square is never negative.",
      "lines": [
        {
          "line": "Let $a_1$, $a_2$, $b_1$ and $b_2$ be real numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $(a_1^2 + a_2^2)(b_1^2 + b_2^2) = (a_1b_1 + a_2b_2)^2 + (a_1b_2 - a_2b_1)^2$.",
          "reason": "Two-squares identity"
        },
        {
          "line": "Also $(a_1b_2 - a_2b_1)^2 \\ge 0$.",
          "reason": "Trivial Inequality"
        },
        {
          "line": "So $(a_1b_1 + a_2b_2)^2 + (a_1b_2 - a_2b_1)^2 \\ge (a_1b_1 + a_2b_2)^2$.",
          "reason": "adding the same number (arithmetic's): $(a_1b_1 + a_2b_2)^2$ is added to both sides of the third line"
        },
        {
          "line": "So $(a_1^2 + a_2^2)(b_1^2 + b_2^2) \\ge (a_1b_1 + a_2b_2)^2$.",
          "reason": "the second and fourth lines"
        },
        {
          "line": "The two sides are equal exactly when $(a_1b_2 - a_2b_1)^2 = 0$.",
          "reason": "the second line: the two sides differ by this square"
        },
        {
          "line": "So the two sides are equal exactly when $a_1b_2 - a_2b_1 = 0$.",
          "reason": "Trivial Inequality: a square is $0$ only when the number squared is $0$"
        },
        {
          "line": "So the two sides are equal exactly when $a_1b_2 = a_2b_1$.",
          "reason": "adding the same number to both sides: $a_2b_1$ is added to both sides of the equation in the seventh line"
        },
        {
          "line": "Therefore $(a_1^2 + a_2^2)(b_1^2 + b_2^2) \\ge (a_1b_1 + a_2b_2)^2$, and the two sides are equal exactly when $a_1b_2 = a_2b_1$.",
          "reason": "the fifth and eighth lines"
        }
      ]
    },
    {
      "id": "t215-p2",
      "method": "proof by cases",
      "statement": "Let $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$ be real numbers. Then $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\ge (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$.",
      "idea": "The sum of squares $(a_1x - b_1)^2 + (a_2x - b_2)^2 + \\cdots + (a_nx - b_n)^2$ is a quadratic in $x$ that is never negative, so its discriminant is at most $0$, and that is the inequality.",
      "lines": [
        {
          "line": "Let $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$ be real numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "Let $f(x) = (a_1x - b_1)^2 + (a_2x - b_2)^2 + \\cdots + (a_nx - b_n)^2$ for every real number $x$.",
          "reason": "function notation: this names the sum of squares that the proof studies"
        },
        {
          "line": "Then $f(x) \\ge 0$ for every real number $x$.",
          "reason": "Trivial Inequality, for each square, and adding two inequalities (arithmetic's)"
        },
        {
          "line": "Also $f(x) = (a_1^2 + a_2^2 + \\cdots + a_n^2)x^2 - 2(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)x + (b_1^2 + b_2^2 + \\cdots + b_n^2)$.",
          "reason": "square of a binomial, for each bracket, and collecting like terms"
        },
        {
          "line": "Also $a_1^2 + a_2^2 + \\cdots + a_n^2 \\ge 0$, so this sum is $0$ or it is positive.",
          "reason": "Trivial Inequality, for each square, and adding two inequalities (arithmetic's)"
        },
        {
          "line": "Case 1: $a_1^2 + a_2^2 + \\cdots + a_n^2 = 0$. Then $a_1 = a_2 = \\cdots = a_n = 0$.",
          "reason": "a sum of squares is zero only when each is zero"
        },
        {
          "line": "So $a_1b_1 + a_2b_2 + \\cdots + a_nb_n = 0$ in Case 1.",
          "reason": "substituting a value: every product has the factor $0$"
        },
        {
          "line": "So $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\ge (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$ in Case 1.",
          "reason": "substituting a value: both sides are $0$"
        },
        {
          "line": "Case 2: $a_1^2 + a_2^2 + \\cdots + a_n^2 > 0$. Then $f(x) = (a_1^2 + a_2^2 + \\cdots + a_n^2)\\left(x - \\dfrac{a_1b_1 + a_2b_2 + \\cdots + a_nb_n}{a_1^2 + a_2^2 + \\cdots + a_n^2}\\right)^2 + (b_1^2 + b_2^2 + \\cdots + b_n^2) - \\dfrac{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "Completing the square in letters, on the fourth line, with $a_1^2 + a_2^2 + \\cdots + a_n^2$ as the coefficient of $x^2$"
        },
        {
          "line": "So $f\\left(\\dfrac{a_1b_1 + a_2b_2 + \\cdots + a_nb_n}{a_1^2 + a_2^2 + \\cdots + a_n^2}\\right) = (b_1^2 + b_2^2 + \\cdots + b_n^2) - \\dfrac{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "substituting a value: at this $x$ the square is $0$"
        },
        {
          "line": "So $(b_1^2 + b_2^2 + \\cdots + b_n^2) - \\dfrac{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2} \\ge 0$.",
          "reason": "the third line, at this $x$"
        },
        {
          "line": "So $4(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2 - 4(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\le 0$: the discriminant of $f$ is at most $0$.",
          "reason": "multiplying by a negative number reverses the sign: both sides are multiplied by $-4(a_1^2 + a_2^2 + \\cdots + a_n^2)$; the left side is the discriminant, by the fourth line"
        },
        {
          "line": "So $4(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2 \\le 4(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2)$.",
          "reason": "adding the same number (arithmetic's): $4(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2)$ is added to both sides"
        },
        {
          "line": "So $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\ge (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$ in Case 2.",
          "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$"
        },
        {
          "line": "Therefore $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\ge (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$.",
          "reason": "the fifth line: one of the two cases holds, and the inequality holds in each"
        }
      ]
    },
    {
      "id": "t215-p3",
      "method": "direct proof",
      "statement": "Let $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$ be real numbers, with $a_1, a_2, \\ldots, a_n$ not all $0$. Then $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) = (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$ exactly when there is a number $c$ with $b_1 = ca_1$, $b_2 = ca_2$, and so on to $b_n = ca_n$.",
      "idea": "With $c$ the sum of the products divided by the sum of the squares of $a_1, a_2, \\ldots, a_n$, the sum of the squares $(ca_1 - b_1)^2 + (ca_2 - b_2)^2 + \\cdots + (ca_n - b_n)^2$ is the difference of the two sides divided by a positive number, so it is $0$ exactly when the sides are equal.",
      "lines": [
        {
          "line": "Let $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$ be real numbers, with $a_1, a_2, \\ldots, a_n$ not all $0$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $a_1^2 + a_2^2 + \\cdots + a_n^2 > 0$.",
          "reason": "Trivial Inequality: no square is negative, and the square of a number that is not $0$ is positive"
        },
        {
          "line": "First assume that there is a number $c$ with $b_1 = ca_1$, $b_2 = ca_2$, and so on to $b_n = ca_n$.",
          "reason": "the first of the two directions"
        },
        {
          "line": "Then $a_1b_1 + a_2b_2 + \\cdots + a_nb_n = c(a_1^2 + a_2^2 + \\cdots + a_n^2)$.",
          "reason": "substituting a value, and taking out a common factor"
        },
        {
          "line": "Also $b_1^2 + b_2^2 + \\cdots + b_n^2 = c^2(a_1^2 + a_2^2 + \\cdots + a_n^2)$.",
          "reason": "substituting a value, power of a product, and taking out a common factor"
        },
        {
          "line": "So $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) = c^2(a_1^2 + a_2^2 + \\cdots + a_n^2)^2$.",
          "reason": "multiplying both sides by the same number: both sides of the fifth line are multiplied by $a_1^2 + a_2^2 + \\cdots + a_n^2$"
        },
        {
          "line": "Also $(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2 = c^2(a_1^2 + a_2^2 + \\cdots + a_n^2)^2$.",
          "reason": "the fourth line, with both sides squared, and power of a product"
        },
        {
          "line": "So $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) = (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$.",
          "reason": "transitive property: the sixth and seventh lines"
        },
        {
          "line": "Now assume that $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) = (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$, and let $c = \\dfrac{a_1b_1 + a_2b_2 + \\cdots + a_nb_n}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "the second direction; the second line allows the division"
        },
        {
          "line": "Then $(ca_1 - b_1)^2 + (ca_2 - b_2)^2 + \\cdots + (ca_n - b_n)^2 = c^2(a_1^2 + a_2^2 + \\cdots + a_n^2) - 2c(a_1b_1 + a_2b_2 + \\cdots + a_nb_n) + (b_1^2 + b_2^2 + \\cdots + b_n^2)$.",
          "reason": "square of a binomial, for each bracket, and collecting like terms"
        },
        {
          "line": "Also $c^2(a_1^2 + a_2^2 + \\cdots + a_n^2) = \\dfrac{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "substituting a value: the value of $c$, and cancelling a common factor"
        },
        {
          "line": "Also $2c(a_1b_1 + a_2b_2 + \\cdots + a_nb_n) = \\dfrac{2(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "substituting a value: the value of $c$"
        },
        {
          "line": "So $(ca_1 - b_1)^2 + (ca_2 - b_2)^2 + \\cdots + (ca_n - b_n)^2 = (b_1^2 + b_2^2 + \\cdots + b_n^2) - \\dfrac{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "the tenth, eleventh and twelfth lines, and collecting like terms"
        },
        {
          "line": "Also $(b_1^2 + b_2^2 + \\cdots + b_n^2) - \\dfrac{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2} = \\dfrac{(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) - (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2}{a_1^2 + a_2^2 + \\cdots + a_n^2}$.",
          "reason": "single fraction: the two terms over the common bottom"
        },
        {
          "line": "So $(ca_1 - b_1)^2 + (ca_2 - b_2)^2 + \\cdots + (ca_n - b_n)^2 = 0$.",
          "reason": "the thirteenth and fourteenth lines, and the assumption of the ninth line: the top of the fraction is $0$"
        },
        {
          "line": "So $ca_1 - b_1 = 0$, $ca_2 - b_2 = 0$, and so on to $ca_n - b_n = 0$.",
          "reason": "a sum of squares is zero only when each is zero"
        },
        {
          "line": "So $b_1 = ca_1$, $b_2 = ca_2$, and so on to $b_n = ca_n$.",
          "reason": "adding the same number to both sides of each equation"
        },
        {
          "line": "Therefore $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) = (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$ exactly when there is a number $c$ with $b_1 = ca_1$, $b_2 = ca_2$, and so on to $b_n = ca_n$.",
          "reason": "the two directions: the third to eighth lines, and the ninth to seventeenth lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t215-s1",
      "method": "direct proof",
      "statement": "Prove that $\\dfrac{(x_1 + x_2 + \\cdots + x_n)^2}{y_1 + y_2 + \\cdots + y_n} \\le \\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\cdots + \\dfrac{x_n^2}{y_n}$ for all real numbers $x_1, x_2, \\ldots, x_n$ and all positive numbers $y_1, y_2, \\ldots, y_n$.",
      "check": {
        "proof": [
          {
            "line": "Let $x_1, x_2, \\ldots, x_n$ be real numbers and $y_1, y_2, \\ldots, y_n$ positive numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\sqrt{y_1}, \\sqrt{y_2}, \\ldots, \\sqrt{y_n}$ are positive numbers.",
            "reason": "positive square root (arithmetic's): a positive number has a positive square root"
          },
          {
            "line": "So $\\left(\\left(\\dfrac{x_1}{\\sqrt{y_1}}\\right)^2 + \\left(\\dfrac{x_2}{\\sqrt{y_2}}\\right)^2 + \\cdots + \\left(\\dfrac{x_n}{\\sqrt{y_n}}\\right)^2\\right)\\left((\\sqrt{y_1})^2 + (\\sqrt{y_2})^2 + \\cdots + (\\sqrt{y_n})^2\\right) \\ge \\left(\\dfrac{x_1}{\\sqrt{y_1}} \\cdot \\sqrt{y_1} + \\dfrac{x_2}{\\sqrt{y_2}} \\cdot \\sqrt{y_2} + \\cdots + \\dfrac{x_n}{\\sqrt{y_n}} \\cdot \\sqrt{y_n}\\right)^2$.",
            "reason": "Cauchy-Schwarz Inequality, for the sequences $\\dfrac{x_1}{\\sqrt{y_1}}, \\ldots, \\dfrac{x_n}{\\sqrt{y_n}}$ and $\\sqrt{y_1}, \\ldots, \\sqrt{y_n}$"
          },
          {
            "line": "Also $\\left(\\dfrac{x_1}{\\sqrt{y_1}}\\right)^2 = \\dfrac{x_1^2}{y_1}$, and in the same way for each of the other terms.",
            "reason": "power of a quotient, and positive square root (arithmetic's): the square of $\\sqrt{y_1}$ is $y_1$"
          },
          {
            "line": "Also $\\dfrac{x_1}{\\sqrt{y_1}} \\cdot \\sqrt{y_1} = x_1$, and in the same way for each of the other terms.",
            "reason": "cancelling a common factor"
          },
          {
            "line": "So $\\left(\\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\cdots + \\dfrac{x_n^2}{y_n}\\right)(y_1 + y_2 + \\cdots + y_n) \\ge (x_1 + x_2 + \\cdots + x_n)^2$.",
            "reason": "the third, fourth and fifth lines, and positive square root (arithmetic's) in the second bracket"
          },
          {
            "line": "Also $y_1 + y_2 + \\cdots + y_n > 0$.",
            "reason": "adding two inequalities (arithmetic's): a sum of positive numbers is positive"
          },
          {
            "line": "Therefore $\\dfrac{(x_1 + x_2 + \\cdots + x_n)^2}{y_1 + y_2 + \\cdots + y_n} \\le \\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\cdots + \\dfrac{x_n^2}{y_n}$.",
            "reason": "multiplying by a positive number: both sides of the sixth line are multiplied by $\\dfrac{1}{y_1 + y_2 + \\cdots + y_n}$"
          }
        ]
      }
    },
    {
      "id": "t215-s2",
      "method": "proof by cases",
      "statement": "Prove that $a_1b_1 + a_2b_2 + \\cdots + a_nb_n \\le \\sqrt{a_1^2 + a_2^2 + \\cdots + a_n^2} \\cdot \\sqrt{b_1^2 + b_2^2 + \\cdots + b_n^2}$ for all real numbers $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$.",
      "check": {
        "proof": [
          {
            "line": "Let $a_1, a_2, \\ldots, a_n$ and $b_1, b_2, \\ldots, b_n$ be real numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) \\ge (a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2$.",
            "reason": "Cauchy-Schwarz Inequality"
          },
          {
            "line": "Also $a_1^2 + a_2^2 + \\cdots + a_n^2 \\ge 0$ and $b_1^2 + b_2^2 + \\cdots + b_n^2 \\ge 0$.",
            "reason": "Trivial Inequality, for each square, and adding two inequalities (arithmetic's)"
          },
          {
            "line": "So $\\sqrt{a_1^2 + a_2^2 + \\cdots + a_n^2} \\cdot \\sqrt{b_1^2 + b_2^2 + \\cdots + b_n^2} \\ge 0$.",
            "reason": "positive square root (arithmetic's): a square root is never negative, so the product of two is never negative"
          },
          {
            "line": "Case 1: $a_1b_1 + a_2b_2 + \\cdots + a_nb_n \\le 0$. Then $a_1b_1 + a_2b_2 + \\cdots + a_nb_n \\le \\sqrt{a_1^2 + a_2^2 + \\cdots + a_n^2} \\cdot \\sqrt{b_1^2 + b_2^2 + \\cdots + b_n^2}$.",
            "reason": "transitivity (arithmetic's), with the fourth line"
          },
          {
            "line": "Case 2: $a_1b_1 + a_2b_2 + \\cdots + a_nb_n > 0$. Then $(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2 > 0$.",
            "reason": "Trivial Inequality: the square of a number that is not $0$ is positive"
          },
          {
            "line": "So $(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2) > 0$, and both sides of the inequality in the second line are positive.",
            "reason": "transitivity (arithmetic's): the second and sixth lines"
          },
          {
            "line": "So $\\sqrt{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2} \\le \\sqrt{(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2)}$.",
            "reason": "powers and roots of positive numbers keep the order, on the second line"
          },
          {
            "line": "Also $\\sqrt{(a_1b_1 + a_2b_2 + \\cdots + a_nb_n)^2} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n$.",
            "reason": "the root of a square is the absolute value, $\\sqrt{a^2} = |a|$, and a positive number is its own absolute value"
          },
          {
            "line": "Also $\\sqrt{(a_1^2 + a_2^2 + \\cdots + a_n^2)(b_1^2 + b_2^2 + \\cdots + b_n^2)} = \\sqrt{a_1^2 + a_2^2 + \\cdots + a_n^2} \\cdot \\sqrt{b_1^2 + b_2^2 + \\cdots + b_n^2}$.",
            "reason": "root of a product, with the third line"
          },
          {
            "line": "So $a_1b_1 + a_2b_2 + \\cdots + a_nb_n \\le \\sqrt{a_1^2 + a_2^2 + \\cdots + a_n^2} \\cdot \\sqrt{b_1^2 + b_2^2 + \\cdots + b_n^2}$ in Case 2.",
            "reason": "the eighth, ninth and tenth lines"
          },
          {
            "line": "Therefore $a_1b_1 + a_2b_2 + \\cdots + a_nb_n \\le \\sqrt{a_1^2 + a_2^2 + \\cdots + a_n^2} \\cdot \\sqrt{b_1^2 + b_2^2 + \\cdots + b_n^2}$.",
            "reason": "a real number is at most $0$ or positive, so one of the two cases holds, and the inequality holds in each"
          }
        ]
      }
    },
    {
      "id": "t215-s3",
      "method": "direct proof",
      "statement": "Let $x_1, x_2, \\ldots, x_n$ be real numbers and $y_1, y_2, \\ldots, y_n$ positive numbers. Prove that if $\\dfrac{(x_1 + x_2 + \\cdots + x_n)^2}{y_1 + y_2 + \\cdots + y_n} = \\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\cdots + \\dfrac{x_n^2}{y_n}$, then there is a number $c$ with $x_1 = cy_1$, $x_2 = cy_2$, and so on to $x_n = cy_n$.",
      "check": {
        "proof": [
          {
            "line": "Let $x_1, x_2, \\ldots, x_n$ be real numbers and $y_1, y_2, \\ldots, y_n$ positive numbers with $\\dfrac{(x_1 + x_2 + \\cdots + x_n)^2}{y_1 + y_2 + \\cdots + y_n} = \\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\cdots + \\dfrac{x_n^2}{y_n}$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $y_1 + y_2 + \\cdots + y_n > 0$.",
            "reason": "adding two inequalities (arithmetic's): a sum of positive numbers is positive"
          },
          {
            "line": "So $(x_1 + x_2 + \\cdots + x_n)^2 = \\left(\\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\cdots + \\dfrac{x_n^2}{y_n}\\right)(y_1 + y_2 + \\cdots + y_n)$.",
            "reason": "multiplying both sides by the same number: both sides of the equation in the first line are multiplied by $y_1 + y_2 + \\cdots + y_n$"
          },
          {
            "line": "Also $y_1 = (\\sqrt{y_1})^2$, and in the same way for each of the other numbers.",
            "reason": "positive square root (arithmetic's): the square of the square root of a positive number is that number"
          },
          {
            "line": "So $\\dfrac{x_1^2}{y_1} = \\left(\\dfrac{x_1}{\\sqrt{y_1}}\\right)^2$, and in the same way for each of the other terms.",
            "reason": "power of a quotient, with the fourth line"
          },
          {
            "line": "Also $x_1 = \\sqrt{y_1} \\cdot \\dfrac{x_1}{\\sqrt{y_1}}$, and in the same way for each of the other numbers.",
            "reason": "cancelling a common factor"
          },
          {
            "line": "So $\\left(\\sqrt{y_1} \\cdot \\dfrac{x_1}{\\sqrt{y_1}} + \\sqrt{y_2} \\cdot \\dfrac{x_2}{\\sqrt{y_2}} + \\cdots + \\sqrt{y_n} \\cdot \\dfrac{x_n}{\\sqrt{y_n}}\\right)^2 = \\left((\\sqrt{y_1})^2 + (\\sqrt{y_2})^2 + \\cdots + (\\sqrt{y_n})^2\\right)\\left(\\left(\\dfrac{x_1}{\\sqrt{y_1}}\\right)^2 + \\left(\\dfrac{x_2}{\\sqrt{y_2}}\\right)^2 + \\cdots + \\left(\\dfrac{x_n}{\\sqrt{y_n}}\\right)^2\\right)$: the two sides of the Cauchy-Schwarz Inequality for the sequences $\\sqrt{y_1}, \\ldots, \\sqrt{y_n}$ and $\\dfrac{x_1}{\\sqrt{y_1}}, \\ldots, \\dfrac{x_n}{\\sqrt{y_n}}$ are equal.",
            "reason": "substituting a value: the fourth, fifth and sixth lines, in the equation of the third line"
          },
          {
            "line": "Also $\\sqrt{y_1}, \\sqrt{y_2}, \\ldots, \\sqrt{y_n}$ are not all $0$.",
            "reason": "positive square root (arithmetic's): a positive number has a positive square root"
          },
          {
            "line": "So there is a number $c$ with $\\dfrac{x_1}{\\sqrt{y_1}} = c\\sqrt{y_1}$, $\\dfrac{x_2}{\\sqrt{y_2}} = c\\sqrt{y_2}$, and so on to $\\dfrac{x_n}{\\sqrt{y_n}} = c\\sqrt{y_n}$.",
            "reason": "Equality in Cauchy-Schwarz, with the seventh and eighth lines"
          },
          {
            "line": "So $\\sqrt{y_1} \\cdot \\dfrac{x_1}{\\sqrt{y_1}} = c(\\sqrt{y_1})^2$, and in the same way for each of the other equations.",
            "reason": "multiplying both sides by the same number: both sides of each equation are multiplied by its square root"
          },
          {
            "line": "Therefore there is a number $c$ with $x_1 = cy_1$, $x_2 = cy_2$, and so on to $x_n = cy_n$.",
            "reason": "substituting a value: the fourth and sixth lines, in each equation of the tenth line"
          }
        ]
      }
    }
  ]
}
