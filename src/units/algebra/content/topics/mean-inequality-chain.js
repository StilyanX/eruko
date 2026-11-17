export default {
  "number": 230,
  "title": "The chain of means",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "581-593"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the expression $E$ that QM-AM gives in $(6x + 5y + 9)^2 + (3x + 6y + 9)^2 + (4x + 7y + 4)^2 \\ge E$, for positive numbers $x$ and $y$.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "(13*x+18*y+22)^2/3",
    "solution": [
      "Find the expression $E$ that QM-AM gives in $(6x + 5y + 9)^2 + (3x + 6y + 9)^2 + (4x + 7y + 4)^2 \\ge E$, for positive numbers $x$ and $y$.",
      "$\\sqrt{\\dfrac{(6x + 5y + 9)^2 + (3x + 6y + 9)^2 + (4x + 7y + 4)^2}{3}} \\ge \\dfrac{(6x + 5y + 9) + (3x + 6y + 9) + (4x + 7y + 4)}{3}$",
      "$\\dfrac{(6x + 5y + 9) + (3x + 6y + 9) + (4x + 7y + 4)}{3} = \\dfrac{13x + 18y + 22}{3}$",
      "$\\dfrac{(6x + 5y + 9)^2 + (3x + 6y + 9)^2 + (4x + 7y + 4)^2}{3} \\ge \\dfrac{(13x + 18y + 22)^2}{9}$",
      "$(6x + 5y + 9)^2 + (3x + 6y + 9)^2 + (4x + 7y + 4)^2 \\ge \\dfrac{(13x + 18y + 22)^2}{3}$"
    ]
  },
  "ideas": [
    {
      "name": "Quadratic mean and harmonic mean",
      "concrete": "For $3$, $6$ and $6$ the quadratic mean is $\\sqrt{\\dfrac{3^2 + 6^2 + 6^2}{3}} = \\sqrt{27} = 3\\sqrt{3}$, and the harmonic mean is $\\dfrac{3}{\\dfrac{1}{3} + \\dfrac{1}{6} + \\dfrac{1}{6}} = \\dfrac{9}{2}$.",
      "general": "For real numbers $a_1, a_2, \\ldots, a_n$ the **quadratic mean** is $\\sqrt{\\dfrac{a_1^2 + a_2^2 + \\cdots + a_n^2}{n}}$, the square root of the arithmetic mean of the squares. For nonzero numbers $a_1, a_2, \\ldots, a_n$ the **harmonic mean** is $\\dfrac{n}{\\dfrac{1}{a_1} + \\dfrac{1}{a_2} + \\cdots + \\dfrac{1}{a_n}}$, the count of numbers divided by the sum of their reciprocals.",
      "definitions": [
        "Quadratic mean",
        "Harmonic mean"
      ]
    },
    {
      "name": "Chain of means",
      "concrete": "For $3$, $6$ and $6$ the four means are $3\\sqrt{3}$, $5$, $\\sqrt[3]{108} = 3\\sqrt[3]{4}$ and $\\dfrac{9}{2}$, and $3\\sqrt{3} \\ge 5 \\ge 3\\sqrt[3]{4} \\ge \\dfrac{9}{2}$, since the cubes of $5$, $3\\sqrt[3]{4}$ and $\\dfrac{9}{2}$ are $125$, $108$ and $\\dfrac{729}{8}$, and $(3\\sqrt{3})^2 = 27 \\ge 25$.",
      "general": "For positive numbers $a_1, a_2, \\ldots, a_n$ the quadratic mean is at least the arithmetic mean (**QM-AM**), the arithmetic mean is at least the geometric mean (AM-GM for n numbers), and the geometric mean is at least the harmonic mean (**GM-HM**): QM $\\ge$ AM $\\ge$ GM $\\ge$ HM, the **chain of means**. Each sign is an equality only when all the numbers are equal. QM-AM also holds for real numbers of every sign. The arithmetic mean is at least the harmonic mean (AM-HM), which multiplied out reads $(a_1 + \\cdots + a_n)\\left(\\dfrac{1}{a_1} + \\cdots + \\dfrac{1}{a_n}\\right) \\ge n^2$."
    }
  ],
  "kinds": [
    {
      "id": "t230-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the expression $E$ that QM-AM gives in $(3x + 3y + 5)^2 + (7y + 5)^2 + (6x + 7y + 3)^2 \\ge E$, for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the expression $E$ that QM-AM gives in $(3x + 3y + 5)^2 + (7y + 5)^2 + (6x + 7y + 3)^2 \\ge E$, for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{\\dfrac{(3x + 3y + 5)^2 + (7y + 5)^2 + (6x + 7y + 3)^2}{3}} \\ge \\dfrac{(3x + 3y + 5) + (7y + 5) + (6x + 7y + 3)}{3}$",
                "reason": "QM-AM: the quadratic mean of the three positive numbers $3x + 3y + 5$, $7y + 5$ and $6x + 7y + 3$ is at least their arithmetic mean."
              },
              {
                "step": "$\\dfrac{(3x + 3y + 5) + (7y + 5) + (6x + 7y + 3)}{3} = \\dfrac{9x + 17y + 13}{3}$",
                "reason": "Collecting like terms: the terms in $x$, the terms in $y$ and the numbers are added separately."
              },
              {
                "step": "$\\dfrac{(3x + 3y + 5)^2 + (7y + 5)^2 + (6x + 7y + 3)^2}{3} \\ge \\dfrac{(9x + 17y + 13)^2}{9}$",
                "reason": "Squaring an inequality of nonnegative sides: both sides are positive, so squaring keeps the order."
              },
              {
                "step": "$(3x + 3y + 5)^2 + (7y + 5)^2 + (6x + 7y + 3)^2 \\ge \\dfrac{(9x + 17y + 13)^2}{3}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that QM-AM gives in $(5y + 9)^2 + (3y + 6)^2 + (4x + 5y + 2)^2 \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(4*x+13*y+17)^2/3",
              "lines": [
                {
                  "step": "Find the expression $E$ that QM-AM gives in $(5y + 9)^2 + (3y + 6)^2 + (4x + 5y + 2)^2 \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{\\dfrac{(5y + 9)^2 + (3y + 6)^2 + (4x + 5y + 2)^2}{3}} \\ge \\dfrac{(5y + 9) + (3y + 6) + (4x + 5y + 2)}{3}$",
                  "reason": "QM-AM: the quadratic mean of the three positive numbers $5y + 9$, $3y + 6$ and $4x + 5y + 2$ is at least their arithmetic mean."
                },
                {
                  "step": "$\\dfrac{(5y + 9) + (3y + 6) + (4x + 5y + 2)}{3} = \\dfrac{4x + 13y + 17}{3}$",
                  "reason": "Collecting like terms: the terms in $x$, the terms in $y$ and the numbers are added separately."
                },
                {
                  "step": "$\\dfrac{(5y + 9)^2 + (3y + 6)^2 + (4x + 5y + 2)^2}{3} \\ge \\dfrac{(4x + 13y + 17)^2}{9}$",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are positive, so squaring keeps the order."
                },
                {
                  "step": "$(5y + 9)^2 + (3y + 6)^2 + (4x + 5y + 2)^2 \\ge \\dfrac{(4x + 13y + 17)^2}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that QM-AM gives in $(5x + 6y + 3)^2 + (3x + 3y + 6)^2 + (7x + 6y + 3)^2 \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(15*x+15*y+12)^2/3",
              "lines": [
                {
                  "step": "Find the expression $E$ that QM-AM gives in $(5x + 6y + 3)^2 + (3x + 3y + 6)^2 + (7x + 6y + 3)^2 \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{\\dfrac{(5x + 6y + 3)^2 + (3x + 3y + 6)^2 + (7x + 6y + 3)^2}{3}} \\ge \\dfrac{(5x + 6y + 3) + (3x + 3y + 6) + (7x + 6y + 3)}{3}$",
                  "reason": "QM-AM: the quadratic mean of the three positive numbers $5x + 6y + 3$, $3x + 3y + 6$ and $7x + 6y + 3$ is at least their arithmetic mean."
                },
                {
                  "step": "$\\dfrac{(5x + 6y + 3) + (3x + 3y + 6) + (7x + 6y + 3)}{3} = \\dfrac{15x + 15y + 12}{3}$",
                  "reason": "Collecting like terms: the terms in $x$, the terms in $y$ and the numbers are added separately."
                },
                {
                  "step": "$\\dfrac{(5x + 6y + 3)^2 + (3x + 3y + 6)^2 + (7x + 6y + 3)^2}{3} \\ge \\dfrac{(15x + 15y + 12)^2}{9}$",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are positive, so squaring keeps the order."
                },
                {
                  "step": "$(5x + 6y + 3)^2 + (3x + 3y + 6)^2 + (7x + 6y + 3)^2 \\ge \\dfrac{(15x + 15y + 12)^2}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that QM-AM gives in $(7x + 6y)^2 + (4x + 7y + 9)^2 + (6x + 2y + 6)^2 \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(17*x+15*y+15)^2/3",
              "lines": [
                {
                  "step": "Find the expression $E$ that QM-AM gives in $(7x + 6y)^2 + (4x + 7y + 9)^2 + (6x + 2y + 6)^2 \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{\\dfrac{(7x + 6y)^2 + (4x + 7y + 9)^2 + (6x + 2y + 6)^2}{3}} \\ge \\dfrac{(7x + 6y) + (4x + 7y + 9) + (6x + 2y + 6)}{3}$",
                  "reason": "QM-AM: the quadratic mean of the three positive numbers $7x + 6y$, $4x + 7y + 9$ and $6x + 2y + 6$ is at least their arithmetic mean."
                },
                {
                  "step": "$\\dfrac{(7x + 6y) + (4x + 7y + 9) + (6x + 2y + 6)}{3} = \\dfrac{17x + 15y + 15}{3}$",
                  "reason": "Collecting like terms: the terms in $x$, the terms in $y$ and the numbers are added separately."
                },
                {
                  "step": "$\\dfrac{(7x + 6y)^2 + (4x + 7y + 9)^2 + (6x + 2y + 6)^2}{3} \\ge \\dfrac{(17x + 15y + 15)^2}{9}$",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are positive, so squaring keeps the order."
                },
                {
                  "step": "$(7x + 6y)^2 + (4x + 7y + 9)^2 + (6x + 2y + 6)^2 \\ge \\dfrac{(17x + 15y + 15)^2}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{27x} + \\dfrac{1}{12y} + \\dfrac{1}{18z} \\ge E$, for positive numbers $x$, $y$ and $z$.",
            "lines": [
              {
                "step": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{27x} + \\dfrac{1}{12y} + \\dfrac{1}{18z} \\ge E$, for positive numbers $x$, $y$ and $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt[3]{27x \\cdot 12y \\cdot 18z} \\ge \\dfrac{3}{\\dfrac{1}{27x} + \\dfrac{1}{12y} + \\dfrac{1}{18z}}$",
                "reason": "GM-HM: the geometric mean of the three positive numbers $27x$, $12y$ and $18z$ is at least their harmonic mean."
              },
              {
                "step": "$\\sqrt[3]{27x \\cdot 12y \\cdot 18z} = 18\\sqrt[3]{xyz}$",
                "reason": "Root of a product: the product is $5832xyz$, and $5832 = 18^3$."
              },
              {
                "step": "$\\dfrac{1}{27x} + \\dfrac{1}{12y} + \\dfrac{1}{18z} \\ge \\dfrac{3}{18\\sqrt[3]{xyz}}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by the sum of the reciprocals and divided by $18\\sqrt[3]{xyz}$."
              },
              {
                "step": "$\\dfrac{3}{18\\sqrt[3]{xyz}} = \\dfrac{1}{6\\sqrt[3]{xyz}}$",
                "reason": "Cancelling a common factor: the top and the bottom are divided by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{16x} + \\dfrac{1}{3y} + \\dfrac{1}{36z} \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "1/(4*(x*y*z)^(1/3))",
              "lines": [
                {
                  "step": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{16x} + \\dfrac{1}{3y} + \\dfrac{1}{36z} \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[3]{16x \\cdot 3y \\cdot 36z} \\ge \\dfrac{3}{\\dfrac{1}{16x} + \\dfrac{1}{3y} + \\dfrac{1}{36z}}$",
                  "reason": "GM-HM: the geometric mean of the three positive numbers $16x$, $3y$ and $36z$ is at least their harmonic mean."
                },
                {
                  "step": "$\\sqrt[3]{16x \\cdot 3y \\cdot 36z} = 12\\sqrt[3]{xyz}$",
                  "reason": "Root of a product: the product is $1728xyz$, and $1728 = 12^3$."
                },
                {
                  "step": "$\\dfrac{1}{16x} + \\dfrac{1}{3y} + \\dfrac{1}{36z} \\ge \\dfrac{3}{12\\sqrt[3]{xyz}}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by the sum of the reciprocals and divided by $12\\sqrt[3]{xyz}$."
                },
                {
                  "step": "$\\dfrac{3}{12\\sqrt[3]{xyz}} = \\dfrac{1}{4\\sqrt[3]{xyz}}$",
                  "reason": "Cancelling a common factor: the top and the bottom are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{12x} + \\dfrac{1}{9y} + \\dfrac{1}{2z} \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "1/(2*(x*y*z)^(1/3))",
              "lines": [
                {
                  "step": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{12x} + \\dfrac{1}{9y} + \\dfrac{1}{2z} \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[3]{12x \\cdot 9y \\cdot 2z} \\ge \\dfrac{3}{\\dfrac{1}{12x} + \\dfrac{1}{9y} + \\dfrac{1}{2z}}$",
                  "reason": "GM-HM: the geometric mean of the three positive numbers $12x$, $9y$ and $2z$ is at least their harmonic mean."
                },
                {
                  "step": "$\\sqrt[3]{12x \\cdot 9y \\cdot 2z} = 6\\sqrt[3]{xyz}$",
                  "reason": "Root of a product: the product is $216xyz$, and $216 = 6^3$."
                },
                {
                  "step": "$\\dfrac{1}{12x} + \\dfrac{1}{9y} + \\dfrac{1}{2z} \\ge \\dfrac{3}{6\\sqrt[3]{xyz}}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by the sum of the reciprocals and divided by $6\\sqrt[3]{xyz}$."
                },
                {
                  "step": "$\\dfrac{3}{6\\sqrt[3]{xyz}} = \\dfrac{1}{2\\sqrt[3]{xyz}}$",
                  "reason": "Cancelling a common factor: the top and the bottom are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{4x} + \\dfrac{1}{25y} \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "1/(5*sqrt(x*y))",
              "lines": [
                {
                  "step": "Find the expression $E$ that GM-HM gives in $\\dfrac{1}{4x} + \\dfrac{1}{25y} \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{4x \\cdot 25y} \\ge \\dfrac{2}{\\dfrac{1}{4x} + \\dfrac{1}{25y}}$",
                  "reason": "GM-HM: the geometric mean of the two positive numbers $4x$ and $25y$ is at least their harmonic mean."
                },
                {
                  "step": "$\\sqrt{4x \\cdot 25y} = 10\\sqrt{xy}$",
                  "reason": "Root of a product: the product is $100xy$, and $100 = 10^2$."
                },
                {
                  "step": "$\\dfrac{1}{4x} + \\dfrac{1}{25y} \\ge \\dfrac{2}{10\\sqrt{xy}}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by the sum of the reciprocals and divided by $10\\sqrt{xy}$."
                },
                {
                  "step": "$\\dfrac{2}{10\\sqrt{xy}} = \\dfrac{1}{5\\sqrt{xy}}$",
                  "reason": "Cancelling a common factor: the top and the bottom are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $E$ that the chain of means gives in $(2x + 14y + 12z + 10d)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{6z} + \\dfrac{1}{5d}\\right) \\ge E$, for positive numbers $x$, $y$, $z$ and $d$.",
            "lines": [
              {
                "step": "Find the number $E$ that the chain of means gives in $(2x + 14y + 12z + 10d)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{6z} + \\dfrac{1}{5d}\\right) \\ge E$, for positive numbers $x$, $y$, $z$ and $d$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x + 14y + 12z + 10d = 2(x + 7y + 6z + 5d)$",
                "reason": "Taking out a common factor: each term of the first bracket has the factor $2$."
              },
              {
                "step": "$\\dfrac{x + 7y + 6z + 5d}{4} \\ge \\dfrac{4}{\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{6z} + \\dfrac{1}{5d}}$",
                "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $7y$, $6z$ and $5d$ is at least their harmonic mean."
              },
              {
                "step": "$(x + 7y + 6z + 5d)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{6z} + \\dfrac{1}{5d}\\right) \\ge 16$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $4$ and by the sum of the reciprocals."
              },
              {
                "step": "$(2x + 14y + 12z + 10d)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{6z} + \\dfrac{1}{5d}\\right) \\ge 32$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $2$, and the second line puts the first bracket back."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ that the chain of means gives in $(12x + 60y + 36z + 84d)\\left(\\dfrac{1}{x} + \\dfrac{1}{5y} + \\dfrac{1}{3z} + \\dfrac{1}{7d}\\right) \\ge E$, for positive numbers $x$, $y$, $z$ and $d$.",
              "form": "Answer as an integer.",
              "answer": "192",
              "lines": [
                {
                  "step": "Find the number $E$ that the chain of means gives in $(12x + 60y + 36z + 84d)\\left(\\dfrac{1}{x} + \\dfrac{1}{5y} + \\dfrac{1}{3z} + \\dfrac{1}{7d}\\right) \\ge E$, for positive numbers $x$, $y$, $z$ and $d$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12x + 60y + 36z + 84d = 12(x + 5y + 3z + 7d)$",
                  "reason": "Taking out a common factor: each term of the first bracket has the factor $12$."
                },
                {
                  "step": "$\\dfrac{x + 5y + 3z + 7d}{4} \\ge \\dfrac{4}{\\dfrac{1}{x} + \\dfrac{1}{5y} + \\dfrac{1}{3z} + \\dfrac{1}{7d}}$",
                  "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $5y$, $3z$ and $7d$ is at least their harmonic mean."
                },
                {
                  "step": "$(x + 5y + 3z + 7d)\\left(\\dfrac{1}{x} + \\dfrac{1}{5y} + \\dfrac{1}{3z} + \\dfrac{1}{7d}\\right) \\ge 16$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$ and by the sum of the reciprocals."
                },
                {
                  "step": "$(12x + 60y + 36z + 84d)\\left(\\dfrac{1}{x} + \\dfrac{1}{5y} + \\dfrac{1}{3z} + \\dfrac{1}{7d}\\right) \\ge 192$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $12$, and the second line puts the first bracket back."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the chain of means gives in $(5x + 45y + 40z + 30d)\\left(\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{8z} + \\dfrac{1}{6d}\\right) \\ge E$, for positive numbers $x$, $y$, $z$ and $d$.",
              "form": "Answer as an integer.",
              "answer": "80",
              "lines": [
                {
                  "step": "Find the number $E$ that the chain of means gives in $(5x + 45y + 40z + 30d)\\left(\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{8z} + \\dfrac{1}{6d}\\right) \\ge E$, for positive numbers $x$, $y$, $z$ and $d$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 45y + 40z + 30d = 5(x + 9y + 8z + 6d)$",
                  "reason": "Taking out a common factor: each term of the first bracket has the factor $5$."
                },
                {
                  "step": "$\\dfrac{x + 9y + 8z + 6d}{4} \\ge \\dfrac{4}{\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{8z} + \\dfrac{1}{6d}}$",
                  "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $9y$, $8z$ and $6d$ is at least their harmonic mean."
                },
                {
                  "step": "$(x + 9y + 8z + 6d)\\left(\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{8z} + \\dfrac{1}{6d}\\right) \\ge 16$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$ and by the sum of the reciprocals."
                },
                {
                  "step": "$(5x + 45y + 40z + 30d)\\left(\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{8z} + \\dfrac{1}{6d}\\right) \\ge 80$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $5$, and the second line puts the first bracket back."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that the chain of means gives in $(5x + 35y + 15z)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{3z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an integer.",
              "answer": "45",
              "lines": [
                {
                  "step": "Find the number $E$ that the chain of means gives in $(5x + 35y + 15z)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{3z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 35y + 15z = 5(x + 7y + 3z)$",
                  "reason": "Taking out a common factor: each term of the first bracket has the factor $5$."
                },
                {
                  "step": "$\\dfrac{x + 7y + 3z}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{3z}}$",
                  "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $7y$ and $3z$ is at least their harmonic mean."
                },
                {
                  "step": "$(x + 7y + 3z)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{3z}\\right) \\ge 9$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$ and by the sum of the reciprocals."
                },
                {
                  "step": "$(5x + 35y + 15z)\\left(\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{3z}\\right) \\ge 45$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $5$, and the second line puts the first bracket back."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t230-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the least value of $(x - 5)^2 + (y + 2)^2 + (z + 6)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 40$.",
            "lines": [
              {
                "step": "Find the least value of $(x - 5)^2 + (y + 2)^2 + (z + 6)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 40$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 5) + (y + 2) + (z + 6) = 43$",
                "reason": "Substituting a value: the three numbers add to $x + y + z$ plus $-5 + 2 + 6$, and $x + y + z = 40$."
              },
              {
                "step": "$\\sqrt{\\dfrac{(x - 5)^2 + (y + 2)^2 + (z + 6)^2}{3}} \\ge \\dfrac{43}{3}$",
                "reason": "QM-AM: the quadratic mean of three real numbers is at least their arithmetic mean."
              },
              {
                "step": "$\\dfrac{(x - 5)^2 + (y + 2)^2 + (z + 6)^2}{3} \\ge \\dfrac{1849}{9}$",
                "reason": "Squaring an inequality of nonnegative sides: the right side is positive, so squaring keeps the order."
              },
              {
                "step": "$(x - 5)^2 + (y + 2)^2 + (z + 6)^2 \\ge \\dfrac{1849}{3}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
              },
              {
                "step": "Taking $x - 5 = y + 2 = z + 6 = \\dfrac{43}{3}$ gives $x = \\dfrac{58}{3}$, $y = \\dfrac{37}{3}$ and $z = \\dfrac{25}{3}$.",
                "reason": "Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
              },
              {
                "step": "At these values $x + y + z = 40$ and the expression is $\\dfrac{1849}{3}$.",
                "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
              },
              {
                "step": "The least value is $\\dfrac{1849}{3}$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $(x - 3)^2 + (y + 9)^2 + (z + 8)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 23$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1369/3",
              "lines": [
                {
                  "step": "Find the least value of $(x - 3)^2 + (y + 9)^2 + (z + 8)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 3) + (y + 9) + (z + 8) = 37$",
                  "reason": "Substituting a value: the three numbers add to $x + y + z$ plus $-3 + 9 + 8$, and $x + y + z = 23$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{(x - 3)^2 + (y + 9)^2 + (z + 8)^2}{3}} \\ge \\dfrac{37}{3}$",
                  "reason": "QM-AM: the quadratic mean of three real numbers is at least their arithmetic mean."
                },
                {
                  "step": "$\\dfrac{(x - 3)^2 + (y + 9)^2 + (z + 8)^2}{3} \\ge \\dfrac{1369}{9}$",
                  "reason": "Squaring an inequality of nonnegative sides: the right side is positive, so squaring keeps the order."
                },
                {
                  "step": "$(x - 3)^2 + (y + 9)^2 + (z + 8)^2 \\ge \\dfrac{1369}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Taking $x - 3 = y + 9 = z + 8 = \\dfrac{37}{3}$ gives $x = \\dfrac{46}{3}$, $y = \\dfrac{10}{3}$ and $z = \\dfrac{13}{3}$.",
                  "reason": "Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
                },
                {
                  "step": "At these values $x + y + z = 23$ and the expression is $\\dfrac{1369}{3}$.",
                  "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{1369}{3}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $(x + 7)^2 + (y - 5)^2 + (z - 8)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 47$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1681/3",
              "lines": [
                {
                  "step": "Find the least value of $(x + 7)^2 + (y - 5)^2 + (z - 8)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 47$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 7) + (y - 5) + (z - 8) = 41$",
                  "reason": "Substituting a value: the three numbers add to $x + y + z$ plus $7 - 5 - 8$, and $x + y + z = 47$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{(x + 7)^2 + (y - 5)^2 + (z - 8)^2}{3}} \\ge \\dfrac{41}{3}$",
                  "reason": "QM-AM: the quadratic mean of three real numbers is at least their arithmetic mean."
                },
                {
                  "step": "$\\dfrac{(x + 7)^2 + (y - 5)^2 + (z - 8)^2}{3} \\ge \\dfrac{1681}{9}$",
                  "reason": "Squaring an inequality of nonnegative sides: the right side is positive, so squaring keeps the order."
                },
                {
                  "step": "$(x + 7)^2 + (y - 5)^2 + (z - 8)^2 \\ge \\dfrac{1681}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Taking $x + 7 = y - 5 = z - 8 = \\dfrac{41}{3}$ gives $x = \\dfrac{20}{3}$, $y = \\dfrac{56}{3}$ and $z = \\dfrac{65}{3}$.",
                  "reason": "Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
                },
                {
                  "step": "At these values $x + y + z = 47$ and the expression is $\\dfrac{1681}{3}$.",
                  "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{1681}{3}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $(x + 1)^2 + (y - 1)^2 + (z + 4)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 12$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "256/3",
              "lines": [
                {
                  "step": "Find the least value of $(x + 1)^2 + (y - 1)^2 + (z + 4)^2$ for real numbers $x$, $y$ and $z$ with $x + y + z = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 1) + (y - 1) + (z + 4) = 16$",
                  "reason": "Substituting a value: the three numbers add to $x + y + z$ plus $1 - 1 + 4$, and $x + y + z = 12$."
                },
                {
                  "step": "$\\sqrt{\\dfrac{(x + 1)^2 + (y - 1)^2 + (z + 4)^2}{3}} \\ge \\dfrac{16}{3}$",
                  "reason": "QM-AM: the quadratic mean of three real numbers is at least their arithmetic mean."
                },
                {
                  "step": "$\\dfrac{(x + 1)^2 + (y - 1)^2 + (z + 4)^2}{3} \\ge \\dfrac{256}{9}$",
                  "reason": "Squaring an inequality of nonnegative sides: the right side is positive, so squaring keeps the order."
                },
                {
                  "step": "$(x + 1)^2 + (y - 1)^2 + (z + 4)^2 \\ge \\dfrac{256}{3}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Taking $x + 1 = y - 1 = z + 4 = \\dfrac{16}{3}$ gives $x = \\dfrac{13}{3}$, $y = \\dfrac{19}{3}$ and $z = \\dfrac{4}{3}$.",
                  "reason": "Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
                },
                {
                  "step": "At these values $x + y + z = 12$ and the expression is $\\dfrac{256}{3}$.",
                  "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{256}{3}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{11z}$ for positive numbers $x$, $y$ and $z$ with $x + 7y + 11z = 73$.",
            "lines": [
              {
                "step": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{11z}$ for positive numbers $x$, $y$ and $z$ with $x + 7y + 11z = 73$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x + 7y + 11z}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{11z}}$",
                "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $7y$ and $11z$ is at least their harmonic mean."
              },
              {
                "step": "$\\dfrac{73}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{11z}}$",
                "reason": "Substituting a value: $x + 7y + 11z = 73$."
              },
              {
                "step": "$\\dfrac{1}{x} + \\dfrac{1}{7y} + \\dfrac{1}{11z} \\ge \\dfrac{9}{73}$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $3$ and by the sum of the reciprocals, and divided by $73$."
              },
              {
                "step": "Equality needs $x = 7y = 11z = \\dfrac{73}{3}$, so $x = \\dfrac{73}{3}$, $y = \\dfrac{73}{21}$ and $z = \\dfrac{73}{33}$.",
                "reason": "Chain of means: equality holds only when all the numbers are equal, and then each is their mean."
              },
              {
                "step": "At these values $x + 7y + 11z = 73$ and the sum of the reciprocals is $\\dfrac{9}{73}$.",
                "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
              },
              {
                "step": "The least value is $\\dfrac{9}{73}$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{3y} + \\dfrac{1}{7z}$ for positive numbers $x$, $y$ and $z$ with $x + 3y + 7z = 57$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/19",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{3y} + \\dfrac{1}{7z}$ for positive numbers $x$, $y$ and $z$ with $x + 3y + 7z = 57$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x + 3y + 7z}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{3y} + \\dfrac{1}{7z}}$",
                  "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $3y$ and $7z$ is at least their harmonic mean."
                },
                {
                  "step": "$\\dfrac{57}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{3y} + \\dfrac{1}{7z}}$",
                  "reason": "Substituting a value: $x + 3y + 7z = 57$."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{3y} + \\dfrac{1}{7z} \\ge \\dfrac{3}{19}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$ and by the sum of the reciprocals, and divided by $57$."
                },
                {
                  "step": "Equality needs $x = 3y = 7z = 19$, so $x = 19$, $y = \\dfrac{19}{3}$ and $z = \\dfrac{19}{7}$.",
                  "reason": "Chain of means: equality holds only when all the numbers are equal, and then each is their mean."
                },
                {
                  "step": "At these values $x + 3y + 7z = 57$ and the sum of the reciprocals is $\\dfrac{3}{19}$.",
                  "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{3}{19}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{8y} + \\dfrac{1}{11z}$ for positive numbers $x$, $y$ and $z$ with $x + 8y + 11z = 70$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/70",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{8y} + \\dfrac{1}{11z}$ for positive numbers $x$, $y$ and $z$ with $x + 8y + 11z = 70$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x + 8y + 11z}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{8y} + \\dfrac{1}{11z}}$",
                  "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $8y$ and $11z$ is at least their harmonic mean."
                },
                {
                  "step": "$\\dfrac{70}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{8y} + \\dfrac{1}{11z}}$",
                  "reason": "Substituting a value: $x + 8y + 11z = 70$."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{8y} + \\dfrac{1}{11z} \\ge \\dfrac{9}{70}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$ and by the sum of the reciprocals, and divided by $70$."
                },
                {
                  "step": "Equality needs $x = 8y = 11z = \\dfrac{70}{3}$, so $x = \\dfrac{70}{3}$, $y = \\dfrac{35}{12}$ and $z = \\dfrac{70}{33}$.",
                  "reason": "Chain of means: equality holds only when all the numbers are equal, and then each is their mean."
                },
                {
                  "step": "At these values $x + 8y + 11z = 70$ and the sum of the reciprocals is $\\dfrac{9}{70}$.",
                  "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{9}{70}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{11z}$ for positive numbers $x$, $y$ and $z$ with $x + 9y + 11z = 44$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/44",
              "lines": [
                {
                  "step": "Find the least value of $\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{11z}$ for positive numbers $x$, $y$ and $z$ with $x + 9y + 11z = 44$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x + 9y + 11z}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{11z}}$",
                  "reason": "Chain of means: the arithmetic mean of the positive numbers $x$, $9y$ and $11z$ is at least their harmonic mean."
                },
                {
                  "step": "$\\dfrac{44}{3} \\ge \\dfrac{3}{\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{11z}}$",
                  "reason": "Substituting a value: $x + 9y + 11z = 44$."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{9y} + \\dfrac{1}{11z} \\ge \\dfrac{9}{44}$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$ and by the sum of the reciprocals, and divided by $44$."
                },
                {
                  "step": "Equality needs $x = 9y = 11z = \\dfrac{44}{3}$, so $x = \\dfrac{44}{3}$, $y = \\dfrac{44}{27}$ and $z = \\dfrac{4}{3}$.",
                  "reason": "Chain of means: equality holds only when all the numbers are equal, and then each is their mean."
                },
                {
                  "step": "At these values $x + 9y + 11z = 44$ and the sum of the reciprocals is $\\dfrac{9}{44}$.",
                  "reason": "Attaining the bound: substituting the values meets the condition and gives the bound."
                },
                {
                  "step": "The least value is $\\dfrac{9}{44}$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t230-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 55$; the solution finds the least value of $(x + 2)^2 + (y - 4)^2 + (z - 6)^2$.",
            "given": [
              "$(x + 2) + (y - 4) + (z - 6) = 55$",
              "$\\sqrt{\\dfrac{(x + 2)^2 + (y - 4)^2 + (z - 6)^2}{3}} \\ge \\dfrac{55}{3}$",
              "$\\dfrac{(x + 2)^2 + (y - 4)^2 + (z - 6)^2}{3} \\ge \\dfrac{3025}{9}$",
              "$(x + 2)^2 + (y - 4)^2 + (z - 6)^2 \\ge \\dfrac{3025}{3}$",
              "$x + 2 = y - 4 = z - 6 = \\dfrac{55}{3}$",
              "$x = \\dfrac{49}{3}$",
              "$y = \\dfrac{67}{3}$",
              "$z = \\dfrac{73}{3}$",
              "The least value is $\\dfrac{3025}{3}$, reached at $x = \\dfrac{49}{3}$, $y = \\dfrac{67}{3}$ and $z = \\dfrac{73}{3}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 55$; the solution finds the least value of $(x + 2)^2 + (y - 4)^2 + (z - 6)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The three numbers add to $55 + 2 - 4 - 6 = 47$, and when the bound is reached each of them is $\\dfrac{47}{3}$.",
                "reason": "Substituting a value: $x + y + z$ is replaced by its value; Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
              },
              {
                "step": "Line 1 adds the numbers $x + y + z = 55$ and $2$, $-4$, $-6$, but turns the minus sign of $-4$ into a plus, so it gives $55$.",
                "reason": "A sign lost: the number subtracted in the bracket counts as a negative number in the sum."
              },
              {
                "step": "Line 1 written right is $(x + 2) + (y - 4) + (z - 6) = 47$.",
                "reason": "The same step with the sign kept: each later line then follows from it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 25$; the solution finds the least value of $(x - 5)^2 + (y - 3)^2 + (z - 6)^2$.",
              "given": [
                "$(x - 5) + (y - 3) + (z - 6) = 11$",
                "$\\sqrt{\\dfrac{(x - 5)^2 + (y - 3)^2 + (z - 6)^2}{3}} \\ge \\dfrac{11}{3}$",
                "$\\dfrac{(x - 5)^2 + (y - 3)^2 + (z - 6)^2}{3} \\ge \\dfrac{121}{9}$",
                "$(x - 5)^2 + (y - 3)^2 + (z - 6)^2 \\ge \\dfrac{121}{3}$",
                "$x - 5 = y - 3 = z - 6 = \\dfrac{11}{3}$",
                "$x = -\\dfrac{4}{3}$",
                "$y = \\dfrac{20}{3}$",
                "$z = \\dfrac{29}{3}$",
                "The least value is $\\dfrac{121}{3}$, reached at $x = -\\dfrac{4}{3}$, $y = \\dfrac{20}{3}$ and $z = \\dfrac{29}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x = 26/3",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 25$; the solution finds the least value of $(x - 5)^2 + (y - 3)^2 + (z - 6)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The three numbers add to $25 - 5 - 3 - 6 = 11$, and when the bound is reached each of them is $\\dfrac{11}{3}$.",
                  "reason": "Substituting a value: $x + y + z$ is replaced by its value; Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
                },
                {
                  "step": "Lines 1 to 5 agree with this. Line 6 moves the $-5$ in $x - 5 = \\dfrac{11}{3}$ across the equals sign without changing its sign.",
                  "reason": "A sign lost: taking $-5$ from both sides gives $x = \\dfrac{11}{3} + 5$."
                },
                {
                  "step": "Line 6 written right is $x = \\dfrac{26}{3}$.",
                  "reason": "The same step with the sign kept: each later line then follows from it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 30$; the solution finds the least value of $(x - 2)^2 + (y - 4)^2 + (z - 1)^2$.",
              "given": [
                "$(x - 2) + (y - 4) + (z - 1) = 23$",
                "$\\sqrt{\\dfrac{(x - 2)^2 + (y - 4)^2 + (z - 1)^2}{3}} \\ge \\dfrac{23}{3}$",
                "$\\dfrac{(x - 2)^2 + (y - 4)^2 + (z - 1)^2}{3} \\ge \\dfrac{529}{9}$",
                "$(x - 2)^2 + (y - 4)^2 + (z - 1)^2 \\ge \\dfrac{529}{3}$",
                "$x - 2 = y - 4 = z - 1 = \\dfrac{23}{3}$",
                "$x = \\dfrac{29}{3}$",
                "$y = \\dfrac{35}{3}$",
                "$z = \\dfrac{20}{3}$",
                "The least value is $\\dfrac{529}{3}$, reached at $x = \\dfrac{29}{3}$, $y = \\dfrac{35}{3}$ and $z = \\dfrac{20}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: z = 26/3",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 30$; the solution finds the least value of $(x - 2)^2 + (y - 4)^2 + (z - 1)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The three numbers add to $30 - 2 - 4 - 1 = 23$, and when the bound is reached each of them is $\\dfrac{23}{3}$.",
                  "reason": "Substituting a value: $x + y + z$ is replaced by its value; Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
                },
                {
                  "step": "Lines 1 to 7 agree with this. Line 8 moves the $-1$ in $z - 1 = \\dfrac{23}{3}$ across the equals sign without changing its sign.",
                  "reason": "A sign lost: taking $-1$ from both sides gives $z = \\dfrac{23}{3} + 1$."
                },
                {
                  "step": "Line 8 written right is $z = \\dfrac{26}{3}$.",
                  "reason": "The same step with the sign kept: each later line then follows from it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 15$; the solution finds the least value of $(x - 2)^2 + (y - 8)^2 + (z - 4)^2$.",
              "given": [
                "$(x - 2) + (y - 8) + (z - 4) = 5$",
                "$\\sqrt{\\dfrac{(x - 2)^2 + (y - 8)^2 + (z - 4)^2}{3}} \\ge \\dfrac{5}{3}$",
                "$\\dfrac{(x - 2)^2 + (y - 8)^2 + (z - 4)^2}{3} \\ge \\dfrac{25}{9}$",
                "$(x - 2)^2 + (y - 8)^2 + (z - 4)^2 \\ge \\dfrac{25}{3}$",
                "$x - 2 = y - 8 = z - 4 = \\dfrac{5}{3}$",
                "$x = \\dfrac{11}{3}$",
                "$y = \\dfrac{29}{3}$",
                "$z = \\dfrac{17}{3}$",
                "The least value is $\\dfrac{25}{3}$, reached at $x = \\dfrac{11}{3}$, $y = \\dfrac{29}{3}$ and $z = \\dfrac{17}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (x-2)+(y-8)+(z-4) = 1",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. Real numbers $x$, $y$ and $z$ have $x + y + z = 15$; the solution finds the least value of $(x - 2)^2 + (y - 8)^2 + (z - 4)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The three numbers add to $15 - 2 - 8 - 4 = 1$, and when the bound is reached each of them is $\\dfrac{1}{3}$.",
                  "reason": "Substituting a value: $x + y + z$ is replaced by its value; Chain of means: at equal numbers QM and AM are equal, and each number is their mean."
                },
                {
                  "step": "Line 1 adds the numbers $x + y + z = 15$ and $-2$, $-8$, $-4$, but turns the minus sign of $-2$ into a plus, so it gives $5$.",
                  "reason": "A sign lost: the number subtracted in the bracket counts as a negative number in the sum."
                },
                {
                  "step": "Line 1 written right is $(x - 2) + (y - 8) + (z - 4) = 1$.",
                  "reason": "The same step with the sign kept: each later line then follows from it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t230-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $x$ and $3x + 4$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $x$ and $3x + 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The squares of $x$ and $3x + 4$ are $x^2$ and $(3x + 4)^2$.",
                "reason": "Quadratic mean: the numbers are squared first."
              },
              {
                "step": "Their arithmetic mean is $\\dfrac{x^2 + (3x + 4)^2}{2}$.",
                "reason": "Quadratic mean: the squares are averaged."
              },
              {
                "step": "$y = \\sqrt{\\dfrac{x^2 + (3x + 4)^2}{2}}$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the quadratic mean takes the square root last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $2x$ and $9$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(((2*x)^2+81)/2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $2x$ and $9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The squares of $2x$ and $9$ are $(2x)^2$ and $9^2$.",
                  "reason": "Quadratic mean: the numbers are squared first."
                },
                {
                  "step": "Their arithmetic mean is $\\dfrac{(2x)^2 + 9^2}{2}$.",
                  "reason": "Quadratic mean: the squares are averaged."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{(2x)^2 + 9^2}{2}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the quadratic mean takes the square root last."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $x + 5$ and $7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(((x+5)^2+49)/2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $x + 5$ and $7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The squares of $x + 5$ and $7$ are $(x + 5)^2$ and $7^2$.",
                  "reason": "Quadratic mean: the numbers are squared first."
                },
                {
                  "step": "Their arithmetic mean is $\\dfrac{(x + 5)^2 + 7^2}{2}$.",
                  "reason": "Quadratic mean: the squares are averaged."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{(x + 5)^2 + 7^2}{2}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the quadratic mean takes the square root last."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $4x$ and $x + 3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(((4*x)^2+(x+3)^2)/2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the quadratic mean of $4x$ and $x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The squares of $4x$ and $x + 3$ are $(4x)^2$ and $(x + 3)^2$.",
                  "reason": "Quadratic mean: the numbers are squared first."
                },
                {
                  "step": "Their arithmetic mean is $\\dfrac{(4x)^2 + (x + 3)^2}{2}$.",
                  "reason": "Quadratic mean: the squares are averaged."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{(4x)^2 + (x + 3)^2}{2}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the quadratic mean takes the square root last."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $7x$ and $13$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $7x$ and $13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The reciprocals of $7x$ and $13$ are $\\dfrac{1}{7x}$ and $\\dfrac{1}{13}$.",
                "reason": "Harmonic mean: the reciprocals of the numbers are taken first."
              },
              {
                "step": "Their sum is $\\dfrac{1}{7x} + \\dfrac{1}{13}$.",
                "reason": "Harmonic mean: the reciprocals are added."
              },
              {
                "step": "$y = \\dfrac{2}{\\dfrac{1}{7x} + \\dfrac{1}{13}}$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the harmonic mean divides the count of numbers by that sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $3x$ and $20$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2/(1/(3*x)+1/20)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $3x$ and $20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The reciprocals of $3x$ and $20$ are $\\dfrac{1}{3x}$ and $\\dfrac{1}{20}$.",
                  "reason": "Harmonic mean: the reciprocals of the numbers are taken first."
                },
                {
                  "step": "Their sum is $\\dfrac{1}{3x} + \\dfrac{1}{20}$.",
                  "reason": "Harmonic mean: the reciprocals are added."
                },
                {
                  "step": "$y = \\dfrac{2}{\\dfrac{1}{3x} + \\dfrac{1}{20}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the harmonic mean divides the count of numbers by that sum."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $6x$ and $19$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2/(1/(6*x)+1/19)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $6x$ and $19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The reciprocals of $6x$ and $19$ are $\\dfrac{1}{6x}$ and $\\dfrac{1}{19}$.",
                  "reason": "Harmonic mean: the reciprocals of the numbers are taken first."
                },
                {
                  "step": "Their sum is $\\dfrac{1}{6x} + \\dfrac{1}{19}$.",
                  "reason": "Harmonic mean: the reciprocals are added."
                },
                {
                  "step": "$y = \\dfrac{2}{\\dfrac{1}{6x} + \\dfrac{1}{19}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the harmonic mean divides the count of numbers by that sum."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $12x$ and $10$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2/(1/(12*x)+1/10)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is the harmonic mean of $12x$ and $10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The reciprocals of $12x$ and $10$ are $\\dfrac{1}{12x}$ and $\\dfrac{1}{10}$.",
                  "reason": "Harmonic mean: the reciprocals of the numbers are taken first."
                },
                {
                  "step": "Their sum is $\\dfrac{1}{12x} + \\dfrac{1}{10}$.",
                  "reason": "Harmonic mean: the reciprocals are added."
                },
                {
                  "step": "$y = \\dfrac{2}{\\dfrac{1}{12x} + \\dfrac{1}{10}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the harmonic mean divides the count of numbers by that sum."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $6$ more than the quadratic mean of $x$, $7x$ and $2$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $6$ more than the quadratic mean of $x$, $7x$ and $2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The quadratic mean of $x$, $7x$ and $2$ is $\\sqrt{\\dfrac{x^2 + (7x)^2 + 2^2}{3}}$.",
                "reason": "Quadratic mean: the square root of the arithmetic mean of the squares."
              },
              {
                "step": "Adding $6$ to that gives $\\sqrt{\\dfrac{x^2 + (7x)^2 + 2^2}{3}} + 6$.",
                "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
              },
              {
                "step": "$y = \\sqrt{\\dfrac{x^2 + (7x)^2 + 2^2}{3}} + 6$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $3$ more than the quadratic mean of $x$, $10x$ and $7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt((x^2+(10*x)^2+49)/3)+3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $3$ more than the quadratic mean of $x$, $10x$ and $7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic mean of $x$, $10x$ and $7$ is $\\sqrt{\\dfrac{x^2 + (10x)^2 + 7^2}{3}}$.",
                  "reason": "Quadratic mean: the square root of the arithmetic mean of the squares."
                },
                {
                  "step": "Adding $3$ to that gives $\\sqrt{\\dfrac{x^2 + (10x)^2 + 7^2}{3}} + 3$.",
                  "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{x^2 + (10x)^2 + 7^2}{3}} + 3$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $3$ more than the quadratic mean of $x$, $3x$ and $12$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt((x^2+(3*x)^2+144)/3)+3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $3$ more than the quadratic mean of $x$, $3x$ and $12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic mean of $x$, $3x$ and $12$ is $\\sqrt{\\dfrac{x^2 + (3x)^2 + 12^2}{3}}$.",
                  "reason": "Quadratic mean: the square root of the arithmetic mean of the squares."
                },
                {
                  "step": "Adding $3$ to that gives $\\sqrt{\\dfrac{x^2 + (3x)^2 + 12^2}{3}} + 3$.",
                  "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{x^2 + (3x)^2 + 12^2}{3}} + 3$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $6$ more than the quadratic mean of $x$, $11x$ and $8$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt((x^2+(11*x)^2+64)/3)+6",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $6$ more than the quadratic mean of $x$, $11x$ and $8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic mean of $x$, $11x$ and $8$ is $\\sqrt{\\dfrac{x^2 + (11x)^2 + 8^2}{3}}$.",
                  "reason": "Quadratic mean: the square root of the arithmetic mean of the squares."
                },
                {
                  "step": "Adding $6$ to that gives $\\sqrt{\\dfrac{x^2 + (11x)^2 + 8^2}{3}} + 6$.",
                  "reason": "Writing a sentence as an equation: \"more than\" means the amount is added."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{x^2 + (11x)^2 + 8^2}{3}} + 6$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $5$ times the harmonic mean of $x$ and $x + 2$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $5$ times the harmonic mean of $x$ and $x + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The harmonic mean of $x$ and $x + 2$ is $\\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 2}}$.",
                "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
              },
              {
                "step": "Multiplying that by $5$ gives $5 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 2}}$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies."
              },
              {
                "step": "$y = 5 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 2}}$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $9$ times the harmonic mean of $x$ and $x + 13$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 9*2/(1/x+1/(x+13))",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $9$ times the harmonic mean of $x$ and $x + 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The harmonic mean of $x$ and $x + 13$ is $\\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 13}}$.",
                  "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
                },
                {
                  "step": "Multiplying that by $9$ gives $9 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 13}}$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies."
                },
                {
                  "step": "$y = 9 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 13}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $10$ times the harmonic mean of $x$ and $x + 8$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 10*2/(1/x+1/(x+8))",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $10$ times the harmonic mean of $x$ and $x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The harmonic mean of $x$ and $x + 8$ is $\\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 8}}$.",
                  "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
                },
                {
                  "step": "Multiplying that by $10$ gives $10 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 8}}$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies."
                },
                {
                  "step": "$y = 10 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 8}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $4$ times the harmonic mean of $x$ and $x + 9$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4*2/(1/x+1/(x+9))",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: $y$ is $4$ times the harmonic mean of $x$ and $x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The harmonic mean of $x$ and $x + 9$ is $\\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 9}}$.",
                  "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
                },
                {
                  "step": "Multiplying that by $4$ gives $4 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 9}}$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies."
                },
                {
                  "step": "$y = 4 \\cdot \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{x + 9}}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t230-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether AM-HM still holds for $25$, $-20$ and $2$, taking their geometric mean as the real cube root of their product: is their arithmetic mean at least their harmonic mean?",
            "lines": [
              {
                "step": "Decide whether AM-HM still holds for $25$, $-20$ and $2$, taking their geometric mean as the real cube root of their product: is their arithmetic mean at least their harmonic mean?",
                "reason": "This is the problem as given."
              },
              {
                "step": "The arithmetic mean is $\\dfrac{25 - 20 + 2}{3} = \\dfrac{7}{3}$.",
                "reason": "Arithmetic mean and geometric mean: the arithmetic mean is the sum of the numbers divided by how many there are."
              },
              {
                "step": "The product is $25 \\cdot (-20) \\cdot 2 = -1000$.",
                "reason": "Laws of multiplication (arithmetic's): the three numbers are multiplied, signs included."
              },
              {
                "step": "The geometric mean is $\\sqrt[3]{-1000} = -10$, since $(-10)^3 = -1000$.",
                "reason": "Fractional exponents: the geometric mean of three numbers is the cube root of their product, and an odd root has one real value, of the same sign as the number."
              },
              {
                "step": "The sum of the reciprocals is $\\dfrac{1}{25} - \\dfrac{1}{20} + \\dfrac{1}{2} = \\dfrac{49}{100}$.",
                "reason": "Fraction rules (arithmetic's): the reciprocals are written over a common bottom and added."
              },
              {
                "step": "The harmonic mean is $\\dfrac{3}{\\dfrac{49}{100}} = \\dfrac{300}{49}$.",
                "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
              },
              {
                "step": "Here $\\dfrac{7}{3} < \\dfrac{300}{49}$, comparing the arithmetic mean with the harmonic mean.",
                "reason": "Chain of means: it is proved for positive numbers only, so with a negative number a link holds only if the two means compare that way."
              },
              {
                "step": "No",
                "reason": "Answering the question asked: the arithmetic mean is less than the harmonic mean, so AM-HM fails here."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether AM-HM still holds for $-45$, $-5$ and $15$, taking their geometric mean as the real cube root of their product: is their arithmetic mean at least their harmonic mean?",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether AM-HM still holds for $-45$, $-5$ and $15$, taking their geometric mean as the real cube root of their product: is their arithmetic mean at least their harmonic mean?",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean is $\\dfrac{-45 - 5 + 15}{3} = -\\dfrac{35}{3}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean is the sum of the numbers divided by how many there are."
                },
                {
                  "step": "The product is $(-45) \\cdot (-5) \\cdot 15 = 3375$.",
                  "reason": "Laws of multiplication (arithmetic's): the three numbers are multiplied, signs included."
                },
                {
                  "step": "The geometric mean is $\\sqrt[3]{3375} = 15$, since $15^3 = 3375$.",
                  "reason": "Fractional exponents: the geometric mean of three numbers is the cube root of their product, and an odd root has one real value, of the same sign as the number."
                },
                {
                  "step": "The sum of the reciprocals is $-\\dfrac{1}{45} - \\dfrac{1}{5} + \\dfrac{1}{15} = -\\dfrac{7}{45}$.",
                  "reason": "Fraction rules (arithmetic's): the reciprocals are written over a common bottom and added."
                },
                {
                  "step": "The harmonic mean is $\\dfrac{3}{-\\dfrac{7}{45}} = -\\dfrac{135}{7}$.",
                  "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
                },
                {
                  "step": "Here $-\\dfrac{35}{3} \\ge -\\dfrac{135}{7}$, comparing the arithmetic mean with the harmonic mean.",
                  "reason": "Chain of means: it is proved for positive numbers only, so with a negative number a link holds only if the two means compare that way."
                },
                {
                  "step": "Yes",
                  "reason": "Answering the question asked: the arithmetic mean is at least the harmonic mean, so AM-HM holds here."
                }
              ]
            },
            {
              "prompt": "Decide whether GM-HM still holds for $7$, $4$ and $-98$, taking their geometric mean as the real cube root of their product: is their geometric mean at least their harmonic mean?",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether GM-HM still holds for $7$, $4$ and $-98$, taking their geometric mean as the real cube root of their product: is their geometric mean at least their harmonic mean?",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean is $\\dfrac{7 + 4 - 98}{3} = -29$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean is the sum of the numbers divided by how many there are."
                },
                {
                  "step": "The product is $7 \\cdot 4 \\cdot (-98) = -2744$.",
                  "reason": "Laws of multiplication (arithmetic's): the three numbers are multiplied, signs included."
                },
                {
                  "step": "The geometric mean is $\\sqrt[3]{-2744} = -14$, since $(-14)^3 = -2744$.",
                  "reason": "Fractional exponents: the geometric mean of three numbers is the cube root of their product, and an odd root has one real value, of the same sign as the number."
                },
                {
                  "step": "The sum of the reciprocals is $\\dfrac{1}{7} + \\dfrac{1}{4} - \\dfrac{1}{98} = \\dfrac{75}{196}$.",
                  "reason": "Fraction rules (arithmetic's): the reciprocals are written over a common bottom and added."
                },
                {
                  "step": "The harmonic mean is $\\dfrac{3}{\\dfrac{75}{196}} = \\dfrac{196}{25}$.",
                  "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
                },
                {
                  "step": "Here $-14 < \\dfrac{196}{25}$, comparing the geometric mean with the harmonic mean.",
                  "reason": "Chain of means: it is proved for positive numbers only, so with a negative number a link holds only if the two means compare that way."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked: the geometric mean is less than the harmonic mean, so GM-HM fails here."
                }
              ]
            },
            {
              "prompt": "Decide whether AM-HM still holds for $-5$, $-50$ and $4$, taking their geometric mean as the real cube root of their product: is their arithmetic mean at least their harmonic mean?",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether AM-HM still holds for $-5$, $-50$ and $4$, taking their geometric mean as the real cube root of their product: is their arithmetic mean at least their harmonic mean?",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean is $\\dfrac{-5 - 50 + 4}{3} = -17$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean is the sum of the numbers divided by how many there are."
                },
                {
                  "step": "The product is $(-5) \\cdot (-50) \\cdot 4 = 1000$.",
                  "reason": "Laws of multiplication (arithmetic's): the three numbers are multiplied, signs included."
                },
                {
                  "step": "The geometric mean is $\\sqrt[3]{1000} = 10$, since $10^3 = 1000$.",
                  "reason": "Fractional exponents: the geometric mean of three numbers is the cube root of their product, and an odd root has one real value, of the same sign as the number."
                },
                {
                  "step": "The sum of the reciprocals is $-\\dfrac{1}{5} - \\dfrac{1}{50} + \\dfrac{1}{4} = \\dfrac{3}{100}$.",
                  "reason": "Fraction rules (arithmetic's): the reciprocals are written over a common bottom and added."
                },
                {
                  "step": "The harmonic mean is $\\dfrac{3}{\\dfrac{3}{100}} = 100$.",
                  "reason": "Harmonic mean: the count of numbers divided by the sum of their reciprocals."
                },
                {
                  "step": "Here $-17 < 100$, comparing the arithmetic mean with the harmonic mean.",
                  "reason": "Chain of means: it is proved for positive numbers only, so with a negative number a link holds only if the two means compare that way."
                },
                {
                  "step": "No",
                  "reason": "Answering the question asked: the arithmetic mean is less than the harmonic mean, so AM-HM fails here."
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
      "id": "t230-p1",
      "method": "direct proof",
      "statement": "Let $a_1, a_2, \\ldots, a_n$ be real numbers. Then $\\sqrt{\\dfrac{a_1^2 + a_2^2 + \\cdots + a_n^2}{n}} \\ge \\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$.",
      "idea": "Cauchy-Schwarz with every number of the second list equal to $1$ turns into $n$ times the sum of the squares against the square of the sum; divide by $n^2$ and take roots.",
      "lines": [
        {
          "line": "Let $a_1, a_2, \\ldots, a_n$ be real numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $(a_1^2 + a_2^2 + \\cdots + a_n^2)(1^2 + 1^2 + \\cdots + 1^2) \\ge (a_1 \\cdot 1 + a_2 \\cdot 1 + \\cdots + a_n \\cdot 1)^2$.",
          "reason": "Cauchy-Schwarz Inequality, with the second list $1, 1, \\ldots, 1$"
        },
        {
          "line": "So $n(a_1^2 + a_2^2 + \\cdots + a_n^2) \\ge (a_1 + a_2 + \\cdots + a_n)^2$.",
          "reason": "the sum of $n$ ones is $n$, and a number times $1$ is the number"
        },
        {
          "line": "So $\\dfrac{a_1^2 + a_2^2 + \\cdots + a_n^2}{n} \\ge \\dfrac{(a_1 + a_2 + \\cdots + a_n)^2}{n^2}$.",
          "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{n^2}$"
        },
        {
          "line": "So $\\sqrt{\\dfrac{a_1^2 + a_2^2 + \\cdots + a_n^2}{n}} \\ge \\sqrt{\\dfrac{(a_1 + a_2 + \\cdots + a_n)^2}{n^2}}$.",
          "reason": "powers and roots of positive numbers keep the order: square roots of both sides"
        },
        {
          "line": "Also $\\sqrt{\\dfrac{(a_1 + a_2 + \\cdots + a_n)^2}{n^2}} = \\dfrac{|a_1 + a_2 + \\cdots + a_n|}{n}$.",
          "reason": "the root of a square is the absolute value: $\\sqrt{a^2}=|a|$, with $a$ the sum divided by the positive number $n$"
        },
        {
          "line": "Also $\\dfrac{|a_1 + a_2 + \\cdots + a_n|}{n} \\ge \\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$.",
          "reason": "absolute value (arithmetic's): a number is at most its absolute value"
        },
        {
          "line": "Therefore $\\sqrt{\\dfrac{a_1^2 + a_2^2 + \\cdots + a_n^2}{n}} \\ge \\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$.",
          "reason": "transitivity: the fifth, sixth and seventh lines"
        }
      ]
    },
    {
      "id": "t230-p2",
      "method": "direct proof",
      "statement": "Let $x_1, x_2, \\ldots, x_n$ be positive numbers. Then $\\sqrt[n]{x_1 x_2 \\cdots x_n} \\ge \\dfrac{n}{\\dfrac{1}{x_1} + \\dfrac{1}{x_2} + \\cdots + \\dfrac{1}{x_n}}$.",
      "idea": "AM-GM on $\\dfrac{1}{x_1}, \\ldots, \\dfrac{1}{x_n}$, then reciprocals of both sides, turns AM-GM into GM-HM.",
      "lines": [
        {
          "line": "Let $x_1, x_2, \\ldots, x_n$ be positive numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $\\dfrac{1}{x_1}, \\dfrac{1}{x_2}, \\ldots, \\dfrac{1}{x_n}$ are positive numbers.",
          "reason": "fraction rules (arithmetic's): the quotient of two positive numbers is positive"
        },
        {
          "line": "So $\\dfrac{\\dfrac{1}{x_1} + \\dfrac{1}{x_2} + \\cdots + \\dfrac{1}{x_n}}{n} \\ge \\sqrt[n]{\\dfrac{1}{x_1} \\cdot \\dfrac{1}{x_2} \\cdots \\dfrac{1}{x_n}}$.",
          "reason": "AM-GM for n numbers, on the reciprocals"
        },
        {
          "line": "Also $\\dfrac{1}{x_1} \\cdot \\dfrac{1}{x_2} \\cdots \\dfrac{1}{x_n} = \\dfrac{1}{x_1 x_2 \\cdots x_n}$.",
          "reason": "fraction rules (arithmetic's): the product of fractions is the product of the tops over the product of the bottoms"
        },
        {
          "line": "Also $\\sqrt[n]{\\dfrac{1}{x_1 x_2 \\cdots x_n}} = \\dfrac{1}{\\sqrt[n]{x_1 x_2 \\cdots x_n}}$.",
          "reason": "root of a quotient"
        },
        {
          "line": "So $\\dfrac{\\dfrac{1}{x_1} + \\dfrac{1}{x_2} + \\cdots + \\dfrac{1}{x_n}}{n} \\ge \\dfrac{1}{\\sqrt[n]{x_1 x_2 \\cdots x_n}}$.",
          "reason": "the third, fourth and fifth lines"
        },
        {
          "line": "Therefore $\\sqrt[n]{x_1 x_2 \\cdots x_n} \\ge \\dfrac{n}{\\dfrac{1}{x_1} + \\dfrac{1}{x_2} + \\cdots + \\dfrac{1}{x_n}}$.",
          "reason": "reciprocals of numbers of the same sign reverse the order: both sides of the sixth line are positive"
        },
        {
          "line": "Equality holds only when $\\dfrac{1}{x_1} = \\dfrac{1}{x_2} = \\cdots = \\dfrac{1}{x_n}$, that is, when $x_1 = x_2 = \\cdots = x_n$.",
          "reason": "Equality in AM-GM"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t230-s1",
      "method": "direct proof",
      "statement": "Prove that $x^4 + y^4 \\ge 2$ for all real numbers $x$ and $y$ with $x + y = 2$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be real numbers with $x + y = 2$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\dfrac{x^2 + y^2}{2} \\ge \\left(\\dfrac{x + y}{2}\\right)^2$.",
            "reason": "QM-AM for $x$ and $y$, squared: the right side is nonnegative"
          },
          {
            "line": "So $\\dfrac{x^2 + y^2}{2} \\ge 1$.",
            "reason": "substituting a value: $x + y = 2$, so the right side is $\\left(\\dfrac{2}{2}\\right)^2 = 1$"
          },
          {
            "line": "Also $\\dfrac{x^4 + y^4}{2} \\ge \\left(\\dfrac{x^2 + y^2}{2}\\right)^2$.",
            "reason": "QM-AM for $x^2$ and $y^2$, squared: the right side is nonnegative"
          },
          {
            "line": "Also $\\left(\\dfrac{x^2 + y^2}{2}\\right)^2 \\ge 1$.",
            "reason": "powers and roots of positive numbers keep the order: the third line squared"
          },
          {
            "line": "So $\\dfrac{x^4 + y^4}{2} \\ge 1$.",
            "reason": "transitivity: the fourth and fifth lines"
          },
          {
            "line": "Therefore $x^4 + y^4 \\ge 2$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $2$"
          }
        ]
      }
    },
    {
      "id": "t230-s2",
      "method": "direct proof",
      "statement": "Prove that $\\left(1 + \\dfrac{1}{a}\\right)\\left(1 + \\dfrac{1}{b}\\right) \\ge 9$ for all positive numbers $a$ and $b$ with $a + b = 1$.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be positive numbers with $a + b = 1$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\left(1 + \\dfrac{1}{a}\\right)\\left(1 + \\dfrac{1}{b}\\right) = 1 + \\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{ab}$.",
            "reason": "multiplying out"
          },
          {
            "line": "Also $\\dfrac{1}{ab} = \\dfrac{a + b}{ab}$.",
            "reason": "substituting a value: $a + b = 1$"
          },
          {
            "line": "So $\\dfrac{1}{ab} = \\dfrac{1}{a} + \\dfrac{1}{b}$.",
            "reason": "fraction rules (arithmetic's): $\\dfrac{a + b}{ab}$ is $\\dfrac{a}{ab} + \\dfrac{b}{ab}$, and each part cancels"
          },
          {
            "line": "So $\\left(1 + \\dfrac{1}{a}\\right)\\left(1 + \\dfrac{1}{b}\\right) = 1 + 2\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right)$.",
            "reason": "collecting like terms, with the fourth line"
          },
          {
            "line": "Also $\\dfrac{a + b}{2} \\ge \\dfrac{2}{\\dfrac{1}{a} + \\dfrac{1}{b}}$.",
            "reason": "Chain of means: the arithmetic mean of $a$ and $b$ is at least their harmonic mean"
          },
          {
            "line": "So $\\dfrac{1}{2} \\ge \\dfrac{2}{\\dfrac{1}{a} + \\dfrac{1}{b}}$.",
            "reason": "substituting a value: $a + b = 1$"
          },
          {
            "line": "So $\\dfrac{1}{a} + \\dfrac{1}{b} \\ge 4$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $2$ and by the sum of the reciprocals"
          },
          {
            "line": "So $2\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right) \\ge 8$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $2$"
          },
          {
            "line": "So $1 + 2\\left(\\dfrac{1}{a} + \\dfrac{1}{b}\\right) \\ge 9$.",
            "reason": "adding the same number: $1$ is added to both sides"
          },
          {
            "line": "Therefore $\\left(1 + \\dfrac{1}{a}\\right)\\left(1 + \\dfrac{1}{b}\\right) \\ge 9$.",
            "reason": "the fifth and tenth lines"
          }
        ]
      }
    },
    {
      "id": "t230-s3",
      "method": "direct proof",
      "statement": "Prove that $\\dfrac{1}{x^2} + \\dfrac{1}{y^2} \\ge \\dfrac{8}{(x + y)^2}$ for all positive numbers $x$ and $y$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be positive numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\sqrt{\\dfrac{\\dfrac{1}{x^2} + \\dfrac{1}{y^2}}{2}} \\ge \\dfrac{\\dfrac{1}{x} + \\dfrac{1}{y}}{2}$.",
            "reason": "QM-AM for $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$, whose squares are $\\dfrac{1}{x^2}$ and $\\dfrac{1}{y^2}$"
          },
          {
            "line": "So $\\dfrac{\\dfrac{1}{x^2} + \\dfrac{1}{y^2}}{2} \\ge \\dfrac{\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right)^2}{4}$.",
            "reason": "Squaring an inequality of nonnegative sides: both sides are positive"
          },
          {
            "line": "So $\\dfrac{1}{x^2} + \\dfrac{1}{y^2} \\ge \\dfrac{\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right)^2}{2}$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $2$"
          },
          {
            "line": "Also $\\dfrac{x + y}{2} \\ge \\dfrac{2}{\\dfrac{1}{x} + \\dfrac{1}{y}}$.",
            "reason": "Chain of means: the arithmetic mean of $x$ and $y$ is at least their harmonic mean"
          },
          {
            "line": "So $x + y \\ge \\dfrac{4}{\\dfrac{1}{x} + \\dfrac{1}{y}}$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $2$"
          },
          {
            "line": "So $\\dfrac{1}{x} + \\dfrac{1}{y} \\ge \\dfrac{4}{x + y}$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{\\frac{1}{x} + \\frac{1}{y}}{x + y}$"
          },
          {
            "line": "So $\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right)^2 \\ge \\dfrac{16}{(x + y)^2}$.",
            "reason": "Squaring an inequality of nonnegative sides: both sides are positive"
          },
          {
            "line": "So $\\dfrac{\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right)^2}{2} \\ge \\dfrac{8}{(x + y)^2}$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$"
          },
          {
            "line": "Therefore $\\dfrac{1}{x^2} + \\dfrac{1}{y^2} \\ge \\dfrac{8}{(x + y)^2}$.",
            "reason": "transitivity: the fourth and ninth lines"
          }
        ]
      }
    }
  ]
}
