export default {
  "number": 214,
  "title": "The AM-GM inequality",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "384-391, 409-412"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the expression $E$ that AM-GM for two numbers gives in $2x^2 + 32y^2 \\ge E$, for positive numbers $x$ and $y$.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "16*x*y",
    "solution": [
      "Find the expression $E$ that AM-GM for two numbers gives in $2x^2 + 32y^2 \\ge E$, for positive numbers $x$ and $y$.",
      "$\\dfrac{2x^2 + 32y^2}{2} \\ge \\sqrt{2x^2 \\cdot 32y^2}$",
      "$\\sqrt{2x^2 \\cdot 32y^2} = 8xy$",
      "$2x^2 + 32y^2 \\ge 16xy$"
    ]
  },
  "ideas": [
    {
      "name": "AM-GM for n numbers",
      "concrete": "For $3$, $8$ and $9$ the arithmetic mean is $\\dfrac{3 + 8 + 9}{3} = \\dfrac{20}{3}$ and the geometric mean is $\\sqrt[3]{3 \\cdot 8 \\cdot 9} = \\sqrt[3]{216} = 6$, and $\\dfrac{20}{3} \\ge 6$.",
      "general": "For nonnegative numbers $a_1, a_2, \\ldots, a_n$ the arithmetic mean is $\\dfrac{a_1 + a_2 + \\cdots + a_n}{n}$, the sum divided by the count of the numbers, and the geometric mean is $\\sqrt[n]{a_1 a_2 \\cdots a_n}$, the $n$th root of the product. The arithmetic mean is at least the geometric mean: $\\dfrac{a_1 + a_2 + \\cdots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\cdots a_n}$. This is **AM-GM for n numbers**."
    },
    {
      "name": "Equality in AM-GM",
      "concrete": "For $6$, $6$ and $6$ the arithmetic mean and the geometric mean are both $6$. For $3$, $8$ and $9$, which are not all equal, the arithmetic mean $\\dfrac{20}{3}$ is above the geometric mean $6$.",
      "general": "For nonnegative numbers $a_1, a_2, \\ldots, a_n$ the arithmetic mean equals the geometric mean only when $a_1 = a_2 = \\cdots = a_n$, and numbers that are all equal have equal means. This is **Equality in AM-GM**. So a bound that AM-GM gives is reached only where the numbers it was used on are all equal."
    }
  ],
  "kinds": [
    {
      "id": "t214-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for two numbers gives in $12x^4 + 27y^2 \\ge E$, for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for two numbers gives in $12x^4 + 27y^2 \\ge E$, for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{12x^4 + 27y^2}{2} \\ge \\sqrt{12x^4 \\cdot 27y^2}$",
                "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $12x^4$ and $27y^2$ is at least their geometric mean."
              },
              {
                "step": "$\\sqrt{12x^4 \\cdot 27y^2} = 18x^2y$",
                "reason": "Root of a product: the product is $324x^4y^2$, the square of $18x^2y$, and $18x^2y$ is positive."
              },
              {
                "step": "$12x^4 + 27y^2 \\ge 36x^2y$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers gives in $49x^4 + 9y^4 \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "42*x^2*y^2",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers gives in $49x^4 + 9y^4 \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{49x^4 + 9y^4}{2} \\ge \\sqrt{49x^4 \\cdot 9y^4}$",
                  "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $49x^4$ and $9y^4$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt{49x^4 \\cdot 9y^4} = 21x^2y^2$",
                  "reason": "Root of a product: the product is $441x^4y^4$, the square of $21x^2y^2$, and $21x^2y^2$ is positive."
                },
                {
                  "step": "$49x^4 + 9y^4 \\ge 42x^2y^2$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers gives in $32x^2 + 50y^2 \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "80*x*y",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers gives in $32x^2 + 50y^2 \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{32x^2 + 50y^2}{2} \\ge \\sqrt{32x^2 \\cdot 50y^2}$",
                  "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $32x^2$ and $50y^2$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt{32x^2 \\cdot 50y^2} = 40xy$",
                  "reason": "Root of a product: the product is $1600x^2y^2$, the square of $40xy$, and $40xy$ is positive."
                },
                {
                  "step": "$32x^2 + 50y^2 \\ge 80xy$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers gives in $50x^6 + 18y^6 \\ge E$, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "60*x^3*y^3",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers gives in $50x^6 + 18y^6 \\ge E$, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{50x^6 + 18y^6}{2} \\ge \\sqrt{50x^6 \\cdot 18y^6}$",
                  "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $50x^6$ and $18y^6$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt{50x^6 \\cdot 18y^6} = 30x^3y^3$",
                  "reason": "Root of a product: the product is $900x^6y^6$, the square of $30x^3y^3$, and $30x^3y^3$ is positive."
                },
                {
                  "step": "$50x^6 + 18y^6 \\ge 60x^3y^3$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $25x^4 + 169y^2 + 9z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $25x^4 + 169y^2 + 9z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{25x^4 + 169y^2}{2} \\ge 65x^2y$",
                "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $25x^4$ and $169y^2$ is $\\sqrt{4225x^4y^2} = 65x^2y$."
              },
              {
                "step": "$\\dfrac{169y^2 + 9z^2}{2} \\ge 39yz$",
                "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $169y^2$ and $9z^2$ is $\\sqrt{1521y^2z^2} = 39yz$."
              },
              {
                "step": "$\\dfrac{25x^4 + 9z^2}{2} \\ge 15x^2z$",
                "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $25x^4$ and $9z^2$ is $\\sqrt{225x^4z^2} = 15x^2z$."
              },
              {
                "step": "$25x^4 + 169y^2 + 9z^2 \\ge 65x^2y + 39yz + 15x^2z$",
                "reason": "Adding two inequalities, used twice: the three lines are added, and each term stands in two of them, so its two halves make the whole term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $100x^4 + 64y^4 + 4z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "80*x^2*y^2+16*y^2*z+20*x^2*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $100x^4 + 64y^4 + 4z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{100x^4 + 64y^4}{2} \\ge 80x^2y^2$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $100x^4$ and $64y^4$ is $\\sqrt{6400x^4y^4} = 80x^2y^2$."
                },
                {
                  "step": "$\\dfrac{64y^4 + 4z^2}{2} \\ge 16y^2z$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $64y^4$ and $4z^2$ is $\\sqrt{256y^4z^2} = 16y^2z$."
                },
                {
                  "step": "$\\dfrac{100x^4 + 4z^2}{2} \\ge 20x^2z$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $100x^4$ and $4z^2$ is $\\sqrt{400x^4z^2} = 20x^2z$."
                },
                {
                  "step": "$100x^4 + 64y^4 + 4z^2 \\ge 80x^2y^2 + 16y^2z + 20x^2z$",
                  "reason": "Adding two inequalities, used twice: the three lines are added, and each term stands in two of them, so its two halves make the whole term."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $16x^4 + 49y^4 + 64z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "28*x^2*y^2+56*y^2*z+32*x^2*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $16x^4 + 49y^4 + 64z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{16x^4 + 49y^4}{2} \\ge 28x^2y^2$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $16x^4$ and $49y^4$ is $\\sqrt{784x^4y^4} = 28x^2y^2$."
                },
                {
                  "step": "$\\dfrac{49y^4 + 64z^2}{2} \\ge 56y^2z$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $49y^4$ and $64z^2$ is $\\sqrt{3136y^4z^2} = 56y^2z$."
                },
                {
                  "step": "$\\dfrac{16x^4 + 64z^2}{2} \\ge 32x^2z$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $16x^4$ and $64z^2$ is $\\sqrt{1024x^4z^2} = 32x^2z$."
                },
                {
                  "step": "$16x^4 + 49y^4 + 64z^2 \\ge 28x^2y^2 + 56y^2z + 32x^2z$",
                  "reason": "Adding two inequalities, used twice: the three lines are added, and each term stands in two of them, so its two halves make the whole term."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $16x^2 + 81y^2 + 100z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "36*x*y+90*y*z+40*x*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers, used on each pair of the three terms, gives in $16x^2 + 81y^2 + 100z^2 \\ge E$ when the three results are added, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{16x^2 + 81y^2}{2} \\ge 36xy$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $16x^2$ and $81y^2$ is $\\sqrt{1296x^2y^2} = 36xy$."
                },
                {
                  "step": "$\\dfrac{81y^2 + 100z^2}{2} \\ge 90yz$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $81y^2$ and $100z^2$ is $\\sqrt{8100y^2z^2} = 90yz$."
                },
                {
                  "step": "$\\dfrac{16x^2 + 100z^2}{2} \\ge 40xz$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $16x^2$ and $100z^2$ is $\\sqrt{1600x^2z^2} = 40xz$."
                },
                {
                  "step": "$16x^2 + 81y^2 + 100z^2 \\ge 36xy + 90yz + 40xz$",
                  "reason": "Adding two inequalities, used twice: the three lines are added, and each term stands in two of them, so its two halves make the whole term."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(2x + 32y)(9x + 4z)(5y + 20z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(2x + 32y)(9x + 4z)(5y + 20z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{2x + 32y}{2} \\ge 8\\sqrt{xy}$",
                "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $2x$ and $32y$ is $\\sqrt{64xy} = 8\\sqrt{xy}$."
              },
              {
                "step": "$\\dfrac{9x + 4z}{2} \\ge 6\\sqrt{xz}$",
                "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $9x$ and $4z$ is $\\sqrt{36xz} = 6\\sqrt{xz}$."
              },
              {
                "step": "$\\dfrac{5y + 20z}{2} \\ge 10\\sqrt{yz}$",
                "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $5y$ and $20z$ is $\\sqrt{100yz} = 10\\sqrt{yz}$."
              },
              {
                "step": "$\\dfrac{(2x + 32y)(9x + 4z)(5y + 20z)}{8} \\ge 8\\sqrt{xy} \\cdot 6\\sqrt{xz} \\cdot 10\\sqrt{yz}$",
                "reason": "Multiplying two inequalities of positive numbers, used twice: the three lines are multiplied, left sides together and right sides together."
              },
              {
                "step": "$8\\sqrt{xy} \\cdot 6\\sqrt{xz} \\cdot 10\\sqrt{yz} = 480xyz$",
                "reason": "Root of a product: $\\sqrt{xy} \\cdot \\sqrt{xz} \\cdot \\sqrt{yz} = \\sqrt{x^2y^2z^2} = xyz$, and $8 \\cdot 6 \\cdot 10 = 480$."
              },
              {
                "step": "$(2x + 32y)(9x + 4z)(5y + 20z) \\ge 3840xyz$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(9x + 25y)(12x + 3z)(8y + 2z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "2880*x*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(9x + 25y)(12x + 3z)(8y + 2z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9x + 25y}{2} \\ge 15\\sqrt{xy}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $9x$ and $25y$ is $\\sqrt{225xy} = 15\\sqrt{xy}$."
                },
                {
                  "step": "$\\dfrac{12x + 3z}{2} \\ge 6\\sqrt{xz}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $12x$ and $3z$ is $\\sqrt{36xz} = 6\\sqrt{xz}$."
                },
                {
                  "step": "$\\dfrac{8y + 2z}{2} \\ge 4\\sqrt{yz}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $8y$ and $2z$ is $\\sqrt{16yz} = 4\\sqrt{yz}$."
                },
                {
                  "step": "$\\dfrac{(9x + 25y)(12x + 3z)(8y + 2z)}{8} \\ge 15\\sqrt{xy} \\cdot 6\\sqrt{xz} \\cdot 4\\sqrt{yz}$",
                  "reason": "Multiplying two inequalities of positive numbers, used twice: the three lines are multiplied, left sides together and right sides together."
                },
                {
                  "step": "$15\\sqrt{xy} \\cdot 6\\sqrt{xz} \\cdot 4\\sqrt{yz} = 360xyz$",
                  "reason": "Root of a product: $\\sqrt{xy} \\cdot \\sqrt{xz} \\cdot \\sqrt{yz} = \\sqrt{x^2y^2z^2} = xyz$, and $15 \\cdot 6 \\cdot 4 = 360$."
                },
                {
                  "step": "$(9x + 25y)(12x + 3z)(8y + 2z) \\ge 2880xyz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(2x + 8y)(7x + 28z)(4y + 16z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "3584*x*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(2x + 8y)(7x + 28z)(4y + 16z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2x + 8y}{2} \\ge 4\\sqrt{xy}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $2x$ and $8y$ is $\\sqrt{16xy} = 4\\sqrt{xy}$."
                },
                {
                  "step": "$\\dfrac{7x + 28z}{2} \\ge 14\\sqrt{xz}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $7x$ and $28z$ is $\\sqrt{196xz} = 14\\sqrt{xz}$."
                },
                {
                  "step": "$\\dfrac{4y + 16z}{2} \\ge 8\\sqrt{yz}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $4y$ and $16z$ is $\\sqrt{64yz} = 8\\sqrt{yz}$."
                },
                {
                  "step": "$\\dfrac{(2x + 8y)(7x + 28z)(4y + 16z)}{8} \\ge 4\\sqrt{xy} \\cdot 14\\sqrt{xz} \\cdot 8\\sqrt{yz}$",
                  "reason": "Multiplying two inequalities of positive numbers, used twice: the three lines are multiplied, left sides together and right sides together."
                },
                {
                  "step": "$4\\sqrt{xy} \\cdot 14\\sqrt{xz} \\cdot 8\\sqrt{yz} = 448xyz$",
                  "reason": "Root of a product: $\\sqrt{xy} \\cdot \\sqrt{xz} \\cdot \\sqrt{yz} = \\sqrt{x^2y^2z^2} = xyz$, and $4 \\cdot 14 \\cdot 8 = 448$."
                },
                {
                  "step": "$(2x + 8y)(7x + 28z)(4y + 16z) \\ge 3584xyz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(8x + 2y)(16x + 4z)(3y + 48z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "3072*x*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for two numbers, used on each bracket, gives in $(8x + 2y)(16x + 4z)(3y + 48z) \\ge E$ when the three results are multiplied, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8x + 2y}{2} \\ge 4\\sqrt{xy}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $8x$ and $2y$ is $\\sqrt{16xy} = 4\\sqrt{xy}$."
                },
                {
                  "step": "$\\dfrac{16x + 4z}{2} \\ge 8\\sqrt{xz}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $16x$ and $4z$ is $\\sqrt{64xz} = 8\\sqrt{xz}$."
                },
                {
                  "step": "$\\dfrac{3y + 48z}{2} \\ge 12\\sqrt{yz}$",
                  "reason": "AM-GM for two numbers: the geometric mean of the positive numbers $3y$ and $48z$ is $\\sqrt{144yz} = 12\\sqrt{yz}$."
                },
                {
                  "step": "$\\dfrac{(8x + 2y)(16x + 4z)(3y + 48z)}{8} \\ge 4\\sqrt{xy} \\cdot 8\\sqrt{xz} \\cdot 12\\sqrt{yz}$",
                  "reason": "Multiplying two inequalities of positive numbers, used twice: the three lines are multiplied, left sides together and right sides together."
                },
                {
                  "step": "$4\\sqrt{xy} \\cdot 8\\sqrt{xz} \\cdot 12\\sqrt{yz} = 384xyz$",
                  "reason": "Root of a product: $\\sqrt{xy} \\cdot \\sqrt{xz} \\cdot \\sqrt{yz} = \\sqrt{x^2y^2z^2} = xyz$, and $4 \\cdot 8 \\cdot 12 = 384$."
                },
                {
                  "step": "$(8x + 2y)(16x + 4z)(3y + 48z) \\ge 3072xyz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $8$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $E$ that AM-GM for two numbers gives in $\\left(5x + \\dfrac{11}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
            "lines": [
              {
                "step": "Find the number $E$ that AM-GM for two numbers gives in $\\left(5x + \\dfrac{11}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(5x + \\dfrac{11}{x}\\right)^2 = 25x^2 + 110 + \\dfrac{121}{x^2}$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 5x$ and $b = \\dfrac{11}{x}$, so that $2ab = 110$."
              },
              {
                "step": "$\\dfrac{25x^2 + \\dfrac{121}{x^2}}{2} \\ge \\sqrt{25x^2 \\cdot \\dfrac{121}{x^2}}$",
                "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $25x^2$ and $\\dfrac{121}{x^2}$ is at least their geometric mean."
              },
              {
                "step": "$\\sqrt{25x^2 \\cdot \\dfrac{121}{x^2}} = 55$",
                "reason": "Cancelling a common factor: $x^2$ cancels, the product is $3025$, and $3025 = 55^2$."
              },
              {
                "step": "$25x^2 + \\dfrac{121}{x^2} \\ge 110$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
              },
              {
                "step": "$\\left(5x + \\dfrac{11}{x}\\right)^2 \\ge 220$",
                "reason": "Adding the same number: $110$ is added to both sides, and by the second line the left side is then the square."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ that AM-GM for two numbers gives in $\\left(7x + \\dfrac{18}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
              "form": "Answer as an integer.",
              "answer": "504",
              "lines": [
                {
                  "step": "Find the number $E$ that AM-GM for two numbers gives in $\\left(7x + \\dfrac{18}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(7x + \\dfrac{18}{x}\\right)^2 = 49x^2 + 252 + \\dfrac{324}{x^2}$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 7x$ and $b = \\dfrac{18}{x}$, so that $2ab = 252$."
                },
                {
                  "step": "$\\dfrac{49x^2 + \\dfrac{324}{x^2}}{2} \\ge \\sqrt{49x^2 \\cdot \\dfrac{324}{x^2}}$",
                  "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $49x^2$ and $\\dfrac{324}{x^2}$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt{49x^2 \\cdot \\dfrac{324}{x^2}} = 126$",
                  "reason": "Cancelling a common factor: $x^2$ cancels, the product is $15\\,876$, and $15\\,876 = 126^2$."
                },
                {
                  "step": "$49x^2 + \\dfrac{324}{x^2} \\ge 252$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                },
                {
                  "step": "$\\left(7x + \\dfrac{18}{x}\\right)^2 \\ge 504$",
                  "reason": "Adding the same number: $252$ is added to both sides, and by the second line the left side is then the square."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that AM-GM for two numbers gives in $\\left(16x + \\dfrac{17}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
              "form": "Answer as an integer.",
              "answer": "1088",
              "lines": [
                {
                  "step": "Find the number $E$ that AM-GM for two numbers gives in $\\left(16x + \\dfrac{17}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(16x + \\dfrac{17}{x}\\right)^2 = 256x^2 + 544 + \\dfrac{289}{x^2}$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 16x$ and $b = \\dfrac{17}{x}$, so that $2ab = 544$."
                },
                {
                  "step": "$\\dfrac{256x^2 + \\dfrac{289}{x^2}}{2} \\ge \\sqrt{256x^2 \\cdot \\dfrac{289}{x^2}}$",
                  "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $256x^2$ and $\\dfrac{289}{x^2}$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt{256x^2 \\cdot \\dfrac{289}{x^2}} = 272$",
                  "reason": "Cancelling a common factor: $x^2$ cancels, the product is $73\\,984$, and $73\\,984 = 272^2$."
                },
                {
                  "step": "$256x^2 + \\dfrac{289}{x^2} \\ge 544$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                },
                {
                  "step": "$\\left(16x + \\dfrac{17}{x}\\right)^2 \\ge 1088$",
                  "reason": "Adding the same number: $544$ is added to both sides, and by the second line the left side is then the square."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that AM-GM for two numbers gives in $\\left(11x + \\dfrac{9}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
              "form": "Answer as an integer.",
              "answer": "396",
              "lines": [
                {
                  "step": "Find the number $E$ that AM-GM for two numbers gives in $\\left(11x + \\dfrac{9}{x}\\right)^2 \\ge E$ when the square is multiplied out first, for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(11x + \\dfrac{9}{x}\\right)^2 = 121x^2 + 198 + \\dfrac{81}{x^2}$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 11x$ and $b = \\dfrac{9}{x}$, so that $2ab = 198$."
                },
                {
                  "step": "$\\dfrac{121x^2 + \\dfrac{81}{x^2}}{2} \\ge \\sqrt{121x^2 \\cdot \\dfrac{81}{x^2}}$",
                  "reason": "AM-GM for two numbers: the arithmetic mean of the positive numbers $121x^2$ and $\\dfrac{81}{x^2}$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt{121x^2 \\cdot \\dfrac{81}{x^2}} = 99$",
                  "reason": "Cancelling a common factor: $x^2$ cancels, the product is $9801$, and $9801 = 99^2$."
                },
                {
                  "step": "$121x^2 + \\dfrac{81}{x^2} \\ge 198$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $2$."
                },
                {
                  "step": "$\\left(11x + \\dfrac{9}{x}\\right)^2 \\ge 396$",
                  "reason": "Adding the same number: $198$ is added to both sides, and by the second line the left side is then the square."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t214-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a positive number $x$ at which the two sides of $2x + \\dfrac{98}{x} \\ge 28$ are equal.",
            "lines": [
              {
                "step": "Find a positive number $x$ at which the two sides of $2x + \\dfrac{98}{x} \\ge 28$ are equal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x = \\dfrac{98}{x}$",
                "reason": "Equality in AM-GM: the inequality is AM-GM for the two positive numbers $2x$ and $\\dfrac{98}{x}$, and its two sides are equal only when the two numbers are equal."
              },
              {
                "step": "$2x^2 = 98$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$."
              },
              {
                "step": "$x^2 = 49$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$x = 7$",
                "reason": "Positive square root (arithmetic's): $x$ is positive, so it is the positive square root of $49$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a positive number $x$ at which the two sides of $150x + \\dfrac{24}{x} \\ge 120$ are equal.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 2/5",
              "lines": [
                {
                  "step": "Find a positive number $x$ at which the two sides of $150x + \\dfrac{24}{x} \\ge 120$ are equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$150x = \\dfrac{24}{x}$",
                  "reason": "Equality in AM-GM: the inequality is AM-GM for the two positive numbers $150x$ and $\\dfrac{24}{x}$, and its two sides are equal only when the two numbers are equal."
                },
                {
                  "step": "$150x^2 = 24$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$."
                },
                {
                  "step": "$x^2 = \\dfrac{4}{25}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $150$."
                },
                {
                  "step": "$x = \\dfrac{2}{5}$",
                  "reason": "Positive square root (arithmetic's): $x$ is positive, so it is the positive square root of $\\dfrac{4}{25}$."
                }
              ]
            },
            {
              "prompt": "Find a positive number $x$ at which the two sides of $25x + \\dfrac{1}{x} \\ge 10$ are equal.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 1/5",
              "lines": [
                {
                  "step": "Find a positive number $x$ at which the two sides of $25x + \\dfrac{1}{x} \\ge 10$ are equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$25x = \\dfrac{1}{x}$",
                  "reason": "Equality in AM-GM: the inequality is AM-GM for the two positive numbers $25x$ and $\\dfrac{1}{x}$, and its two sides are equal only when the two numbers are equal."
                },
                {
                  "step": "$25x^2 = 1$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$."
                },
                {
                  "step": "$x^2 = \\dfrac{1}{25}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $25$."
                },
                {
                  "step": "$x = \\dfrac{1}{5}$",
                  "reason": "Positive square root (arithmetic's): $x$ is positive, so it is the positive square root of $\\dfrac{1}{25}$."
                }
              ]
            },
            {
              "prompt": "Find a positive number $x$ at which the two sides of $18x + \\dfrac{8}{x} \\ge 24$ are equal.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 2/3",
              "lines": [
                {
                  "step": "Find a positive number $x$ at which the two sides of $18x + \\dfrac{8}{x} \\ge 24$ are equal.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$18x = \\dfrac{8}{x}$",
                  "reason": "Equality in AM-GM: the inequality is AM-GM for the two positive numbers $18x$ and $\\dfrac{8}{x}$, and its two sides are equal only when the two numbers are equal."
                },
                {
                  "step": "$18x^2 = 8$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$."
                },
                {
                  "step": "$x^2 = \\dfrac{4}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $18$."
                },
                {
                  "step": "$x = \\dfrac{2}{3}$",
                  "reason": "Positive square root (arithmetic's): $x$ is positive, so it is the positive square root of $\\dfrac{4}{9}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t214-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for three numbers gives in $49x^3 + 54y^6 + 28 \\ge E$, for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for three numbers gives in $49x^3 + 54y^6 + 28 \\ge E$, for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{49x^3 + 54y^6 + 28}{3} \\ge \\sqrt[3]{49x^3 \\cdot 54y^6 \\cdot 28}$",
                "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $49x^3$, $54y^6$ and $28$ is at least their geometric mean."
              },
              {
                "step": "$\\sqrt[3]{49x^3 \\cdot 54y^6 \\cdot 28} = 42xy^2$",
                "reason": "Root of a product: the product is $74\\,088x^3y^6$, the cube of $42xy^2$."
              },
              {
                "step": "$49x^3 + 54y^6 + 28 \\ge 126xy^2$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers gives in $14x^6 + 49y^3 + 4z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "42*x^2*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers gives in $14x^6 + 49y^3 + 4z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{14x^6 + 49y^3 + 4z^3}{3} \\ge \\sqrt[3]{14x^6 \\cdot 49y^3 \\cdot 4z^3}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $14x^6$, $49y^3$ and $4z^3$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{14x^6 \\cdot 49y^3 \\cdot 4z^3} = 14x^2yz$",
                  "reason": "Root of a product: the product is $2744x^6y^3z^3$, the cube of $14x^2yz$."
                },
                {
                  "step": "$14x^6 + 49y^3 + 4z^3 \\ge 42x^2yz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for four numbers gives in $9x^4 + 24y^4 + 16z^4 + 6 \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "48*x*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for four numbers gives in $9x^4 + 24y^4 + 16z^4 + 6 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9x^4 + 24y^4 + 16z^4 + 6}{4} \\ge \\sqrt[4]{9x^4 \\cdot 24y^4 \\cdot 16z^4 \\cdot 6}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the four positive numbers $9x^4$, $24y^4$, $16z^4$ and $6$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[4]{9x^4 \\cdot 24y^4 \\cdot 16z^4 \\cdot 6} = 12xyz$",
                  "reason": "Root of a product: the product is $20\\,736x^4y^4z^4$, the fourth power of $12xyz$."
                },
                {
                  "step": "$9x^4 + 24y^4 + 16z^4 + 6 \\ge 48xyz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers gives in $49x^3 + 32y^3 + 14z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "84*x*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers gives in $49x^3 + 32y^3 + 14z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{49x^3 + 32y^3 + 14z^3}{3} \\ge \\sqrt[3]{49x^3 \\cdot 32y^3 \\cdot 14z^3}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $49x^3$, $32y^3$ and $14z^3$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{49x^3 \\cdot 32y^3 \\cdot 14z^3} = 28xyz$",
                  "reason": "Root of a product: the product is $21\\,952x^3y^3z^3$, the cube of $28xyz$."
                },
                {
                  "step": "$49x^3 + 32y^3 + 14z^3 \\ge 84xyz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for four numbers gives in $(2x^2 + 4y^2)(18 + z^4) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for four numbers gives in $(2x^2 + 4y^2)(18 + z^4) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x^2 + 4y^2)(18 + z^4) = 36x^2 + 2x^2z^4 + 72y^2 + 4y^2z^4$",
                "reason": "Multiplying out: every term of one bracket times every term of the other gives four terms."
              },
              {
                "step": "$\\dfrac{36x^2 + 2x^2z^4 + 72y^2 + 4y^2z^4}{4} \\ge \\sqrt[4]{36x^2 \\cdot 2x^2z^4 \\cdot 72y^2 \\cdot 4y^2z^4}$",
                "reason": "AM-GM for n numbers: the arithmetic mean of the four positive terms is at least their geometric mean."
              },
              {
                "step": "$\\sqrt[4]{36x^2 \\cdot 2x^2z^4 \\cdot 72y^2 \\cdot 4y^2z^4} = 12xyz^2$",
                "reason": "Root of a product: the product is $20\\,736x^4y^4z^8$, the fourth power of $12xyz^2$."
              },
              {
                "step": "$(2x^2 + 4y^2)(18 + z^4) \\ge 48xyz^2$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $4$, and by the second line the four terms are the product of the brackets."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for four numbers gives in $(8x^2 + 4y^2)(9 + 2z^4) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "96*x*y*z^2",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for four numbers gives in $(8x^2 + 4y^2)(9 + 2z^4) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(8x^2 + 4y^2)(9 + 2z^4) = 72x^2 + 16x^2z^4 + 36y^2 + 8y^2z^4$",
                  "reason": "Multiplying out: every term of one bracket times every term of the other gives four terms."
                },
                {
                  "step": "$\\dfrac{72x^2 + 16x^2z^4 + 36y^2 + 8y^2z^4}{4} \\ge \\sqrt[4]{72x^2 \\cdot 16x^2z^4 \\cdot 36y^2 \\cdot 8y^2z^4}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the four positive terms is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[4]{72x^2 \\cdot 16x^2z^4 \\cdot 36y^2 \\cdot 8y^2z^4} = 24xyz^2$",
                  "reason": "Root of a product: the product is $331\\,776x^4y^4z^8$, the fourth power of $24xyz^2$."
                },
                {
                  "step": "$(8x^2 + 4y^2)(9 + 2z^4) \\ge 96xyz^2$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$, and by the second line the four terms are the product of the brackets."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for four numbers gives in $(16x^4 + 2y^2)(8 + z^2) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "64*x^2*y*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for four numbers gives in $(16x^4 + 2y^2)(8 + z^2) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(16x^4 + 2y^2)(8 + z^2) = 128x^4 + 16x^4z^2 + 16y^2 + 2y^2z^2$",
                  "reason": "Multiplying out: every term of one bracket times every term of the other gives four terms."
                },
                {
                  "step": "$\\dfrac{128x^4 + 16x^4z^2 + 16y^2 + 2y^2z^2}{4} \\ge \\sqrt[4]{128x^4 \\cdot 16x^4z^2 \\cdot 16y^2 \\cdot 2y^2z^2}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the four positive terms is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[4]{128x^4 \\cdot 16x^4z^2 \\cdot 16y^2 \\cdot 2y^2z^2} = 16x^2yz$",
                  "reason": "Root of a product: the product is $65\\,536x^8y^4z^4$, the fourth power of $16x^2yz$."
                },
                {
                  "step": "$(16x^4 + 2y^2)(8 + z^2) \\ge 64x^2yz$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$, and by the second line the four terms are the product of the brackets."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for four numbers gives in $(7x^2 + 2y^4)(8 + 7z^2) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "112*x*y^2*z",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for four numbers gives in $(7x^2 + 2y^4)(8 + 7z^2) \\ge E$ after the brackets are multiplied out, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7x^2 + 2y^4)(8 + 7z^2) = 56x^2 + 49x^2z^2 + 16y^4 + 14y^4z^2$",
                  "reason": "Multiplying out: every term of one bracket times every term of the other gives four terms."
                },
                {
                  "step": "$\\dfrac{56x^2 + 49x^2z^2 + 16y^4 + 14y^4z^2}{4} \\ge \\sqrt[4]{56x^2 \\cdot 49x^2z^2 \\cdot 16y^4 \\cdot 14y^4z^2}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the four positive terms is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[4]{56x^2 \\cdot 49x^2z^2 \\cdot 16y^4 \\cdot 14y^4z^2} = 28xy^2z$",
                  "reason": "Root of a product: the product is $614\\,656x^4y^8z^4$, the fourth power of $28xy^2z$."
                },
                {
                  "step": "$(7x^2 + 2y^4)(8 + 7z^2) \\ge 112xy^2z$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$, and by the second line the four terms are the product of the brackets."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for three numbers gives in $125x^6 + 128y^3 \\ge E$ after $128y^3$ is split into two equal parts, for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for three numbers gives in $125x^6 + 128y^3 \\ge E$ after $128y^3$ is split into two equal parts, for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$128y^3 = 64y^3 + 64y^3$",
                "reason": "Collecting like terms: read backwards, the term $128y^3$ is the sum of two equal terms $64y^3$."
              },
              {
                "step": "$\\dfrac{125x^6 + 64y^3 + 64y^3}{3} \\ge \\sqrt[3]{125x^6 \\cdot 64y^3 \\cdot 64y^3}$",
                "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers is at least their geometric mean."
              },
              {
                "step": "$\\sqrt[3]{125x^6 \\cdot 64y^3 \\cdot 64y^3} = 80x^2y^2$",
                "reason": "Root of a product: the product is $512\\,000x^6y^6$, the cube of $80x^2y^2$."
              },
              {
                "step": "$125x^6 + 128y^3 \\ge 240x^2y^2$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $3$, and by the second line the two equal parts make $128y^3$ again."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers gives in $96x^3 + 24y^3 \\ge E$ after $24y^3$ is split into two equal parts, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "72*x*y^2",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers gives in $96x^3 + 24y^3 \\ge E$ after $24y^3$ is split into two equal parts, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$24y^3 = 12y^3 + 12y^3$",
                  "reason": "Collecting like terms: read backwards, the term $24y^3$ is the sum of two equal terms $12y^3$."
                },
                {
                  "step": "$\\dfrac{96x^3 + 12y^3 + 12y^3}{3} \\ge \\sqrt[3]{96x^3 \\cdot 12y^3 \\cdot 12y^3}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{96x^3 \\cdot 12y^3 \\cdot 12y^3} = 24xy^2$",
                  "reason": "Root of a product: the product is $13\\,824x^3y^6$, the cube of $24xy^2$."
                },
                {
                  "step": "$96x^3 + 24y^3 \\ge 72xy^2$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$, and by the second line the two equal parts make $24y^3$ again."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for four numbers gives in $48x^4 + 9y^4 \\ge E$ after $9y^4$ is split into three equal parts, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "24*x*y^3",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for four numbers gives in $48x^4 + 9y^4 \\ge E$ after $9y^4$ is split into three equal parts, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9y^4 = 3y^4 + 3y^4 + 3y^4$",
                  "reason": "Collecting like terms: read backwards, the term $9y^4$ is the sum of three equal terms $3y^4$."
                },
                {
                  "step": "$\\dfrac{48x^4 + 3y^4 + 3y^4 + 3y^4}{4} \\ge \\sqrt[4]{48x^4 \\cdot 3y^4 \\cdot 3y^4 \\cdot 3y^4}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the four positive numbers is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[4]{48x^4 \\cdot 3y^4 \\cdot 3y^4 \\cdot 3y^4} = 6xy^3$",
                  "reason": "Root of a product: the product is $1296x^4y^{12}$, the fourth power of $6xy^3$."
                },
                {
                  "step": "$48x^4 + 9y^4 \\ge 24xy^3$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $4$, and by the second line the three equal parts make $9y^4$ again."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers gives in $64x^6 + 2y^3 \\ge E$ after $2y^3$ is split into two equal parts, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "12*x^2*y^2",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers gives in $64x^6 + 2y^3 \\ge E$ after $2y^3$ is split into two equal parts, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y^3 = y^3 + y^3$",
                  "reason": "Collecting like terms: read backwards, the term $2y^3$ is the sum of two equal terms $y^3$."
                },
                {
                  "step": "$\\dfrac{64x^6 + y^3 + y^3}{3} \\ge \\sqrt[3]{64x^6 \\cdot y^3 \\cdot y^3}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{64x^6 \\cdot y^3 \\cdot y^3} = 4x^2y^2$",
                  "reason": "Root of a product: the product is $64x^6y^6$, the cube of $4x^2y^2$."
                },
                {
                  "step": "$64x^6 + 2y^3 \\ge 12x^2y^2$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$, and by the second line the two equal parts make $2y^3$ again."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(5x^4 + 20x^2 + 10)(16y^2 + 4y + 8) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(5x^4 + 20x^2 + 10)(16y^2 + 4y + 8) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{5x^4 + 20x^2 + 10}{3} \\ge \\sqrt[3]{5x^4 \\cdot 20x^2 \\cdot 10}$",
                "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $5x^4$, $20x^2$ and $10$ is at least their geometric mean."
              },
              {
                "step": "$\\dfrac{16y^2 + 4y + 8}{3} \\ge \\sqrt[3]{16y^2 \\cdot 4y \\cdot 8}$",
                "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $16y^2$, $4y$ and $8$ is at least their geometric mean."
              },
              {
                "step": "$\\dfrac{(5x^4 + 20x^2 + 10)(16y^2 + 4y + 8)}{9} \\ge \\sqrt[3]{5x^4 \\cdot 20x^2 \\cdot 10} \\cdot \\sqrt[3]{16y^2 \\cdot 4y \\cdot 8}$",
                "reason": "Multiplying two inequalities of positive numbers: the two lines are multiplied, left sides together and right sides together."
              },
              {
                "step": "$\\sqrt[3]{5x^4 \\cdot 20x^2 \\cdot 10} \\cdot \\sqrt[3]{16y^2 \\cdot 4y \\cdot 8} = 80x^2y$",
                "reason": "Root of a product: the products are $1000x^6$ and $512y^3$, the cubes of $10x^2$ and $8y$, and $10x^2 \\cdot 8y = 80x^2y$."
              },
              {
                "step": "$(5x^4 + 20x^2 + 10)(16y^2 + 4y + 8) \\ge 720x^2y$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $9$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(32x^2 + 2x + 27)(25y^2 + 2y + 20) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "1080*x*y",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(32x^2 + 2x + 27)(25y^2 + 2y + 20) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{32x^2 + 2x + 27}{3} \\ge \\sqrt[3]{32x^2 \\cdot 2x \\cdot 27}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $32x^2$, $2x$ and $27$ is at least their geometric mean."
                },
                {
                  "step": "$\\dfrac{25y^2 + 2y + 20}{3} \\ge \\sqrt[3]{25y^2 \\cdot 2y \\cdot 20}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $25y^2$, $2y$ and $20$ is at least their geometric mean."
                },
                {
                  "step": "$\\dfrac{(32x^2 + 2x + 27)(25y^2 + 2y + 20)}{9} \\ge \\sqrt[3]{32x^2 \\cdot 2x \\cdot 27} \\cdot \\sqrt[3]{25y^2 \\cdot 2y \\cdot 20}$",
                  "reason": "Multiplying two inequalities of positive numbers: the two lines are multiplied, left sides together and right sides together."
                },
                {
                  "step": "$\\sqrt[3]{32x^2 \\cdot 2x \\cdot 27} \\cdot \\sqrt[3]{25y^2 \\cdot 2y \\cdot 20} = 120xy$",
                  "reason": "Root of a product: the products are $1728x^3$ and $1000y^3$, the cubes of $12x$ and $10y$, and $12x \\cdot 10y = 120xy$."
                },
                {
                  "step": "$(32x^2 + 2x + 27)(25y^2 + 2y + 20) \\ge 1080xy$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $9$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(16x^2 + 4x + 27)(3y^4 + 4y^2 + 18) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "648*x*y^2",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(16x^2 + 4x + 27)(3y^4 + 4y^2 + 18) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{16x^2 + 4x + 27}{3} \\ge \\sqrt[3]{16x^2 \\cdot 4x \\cdot 27}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $16x^2$, $4x$ and $27$ is at least their geometric mean."
                },
                {
                  "step": "$\\dfrac{3y^4 + 4y^2 + 18}{3} \\ge \\sqrt[3]{3y^4 \\cdot 4y^2 \\cdot 18}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $3y^4$, $4y^2$ and $18$ is at least their geometric mean."
                },
                {
                  "step": "$\\dfrac{(16x^2 + 4x + 27)(3y^4 + 4y^2 + 18)}{9} \\ge \\sqrt[3]{16x^2 \\cdot 4x \\cdot 27} \\cdot \\sqrt[3]{3y^4 \\cdot 4y^2 \\cdot 18}$",
                  "reason": "Multiplying two inequalities of positive numbers: the two lines are multiplied, left sides together and right sides together."
                },
                {
                  "step": "$\\sqrt[3]{16x^2 \\cdot 4x \\cdot 27} \\cdot \\sqrt[3]{3y^4 \\cdot 4y^2 \\cdot 18} = 72xy^2$",
                  "reason": "Root of a product: the products are $1728x^3$ and $216y^6$, the cubes of $12x$ and $6y^2$, and $12x \\cdot 6y^2 = 72xy^2$."
                },
                {
                  "step": "$(16x^2 + 4x + 27)(3y^4 + 4y^2 + 18) \\ge 648xy^2$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $9$."
                }
              ]
            },
            {
              "prompt": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(x^4 + 25x^2 + 5)(18y^2 + 4y + 24) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "540*x^2*y",
              "lines": [
                {
                  "step": "Find the expression $E$ that AM-GM for three numbers, used on each bracket, gives in $(x^4 + 25x^2 + 5)(18y^2 + 4y + 24) \\ge E$ when the two results are multiplied, for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x^4 + 25x^2 + 5}{3} \\ge \\sqrt[3]{x^4 \\cdot 25x^2 \\cdot 5}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $x^4$, $25x^2$ and $5$ is at least their geometric mean."
                },
                {
                  "step": "$\\dfrac{18y^2 + 4y + 24}{3} \\ge \\sqrt[3]{18y^2 \\cdot 4y \\cdot 24}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $18y^2$, $4y$ and $24$ is at least their geometric mean."
                },
                {
                  "step": "$\\dfrac{(x^4 + 25x^2 + 5)(18y^2 + 4y + 24)}{9} \\ge \\sqrt[3]{x^4 \\cdot 25x^2 \\cdot 5} \\cdot \\sqrt[3]{18y^2 \\cdot 4y \\cdot 24}$",
                  "reason": "Multiplying two inequalities of positive numbers: the two lines are multiplied, left sides together and right sides together."
                },
                {
                  "step": "$\\sqrt[3]{x^4 \\cdot 25x^2 \\cdot 5} \\cdot \\sqrt[3]{18y^2 \\cdot 4y \\cdot 24} = 60x^2y$",
                  "reason": "Root of a product: the products are $125x^6$ and $1728y^3$, the cubes of $5x^2$ and $12y$, and $5x^2 \\cdot 12y = 60x^2y$."
                },
                {
                  "step": "$(x^4 + 25x^2 + 5)(18y^2 + 4y + 24) \\ge 540x^2y$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $9$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t214-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the least value of $6x + 16y + \\dfrac{144}{xy}$ for positive numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Find the least value of $6x + 16y + \\dfrac{144}{xy}$ for positive numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{6x + 16y + \\dfrac{144}{xy}}{3} \\ge \\sqrt[3]{6x \\cdot 16y \\cdot \\dfrac{144}{xy}}$",
                "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $6x$, $16y$ and $\\dfrac{144}{xy}$ is at least their geometric mean."
              },
              {
                "step": "$\\sqrt[3]{6x \\cdot 16y \\cdot \\dfrac{144}{xy}} = 24$",
                "reason": "Cancelling a common factor: $xy$ cancels, the product is $13\\,824$, and $13\\,824 = 24^3$."
              },
              {
                "step": "$6x + 16y + \\dfrac{144}{xy} \\ge 72$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
              },
              {
                "step": "Equality needs $6x = 16y = \\dfrac{144}{xy}$, each of them $24$.",
                "reason": "Equality in AM-GM: the two sides are equal only when the three numbers are equal, and three equal numbers with sum $72$ are each $24$."
              },
              {
                "step": "So $x = 4$ and $y = \\dfrac{3}{2}$.",
                "reason": "Dividing both sides by a nonzero number: $6x = 24$ is divided by $6$, and $16y = 24$ by $16$."
              },
              {
                "step": "At these values $\\dfrac{144}{xy} = 24$, and the expression is $24 + 24 + 24 = 72$.",
                "reason": "Substituting a value: $xy = 6$, and $144$ divided by $6$ is $24$."
              },
              {
                "step": "The least value is $72$.",
                "reason": "A greatest value needs a bound and a case that reaches it: by the fourth line the expression is never below $72$, and at $x = 4$, $y = \\dfrac{3}{2}$ it equals $72$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $12x + 27y + \\dfrac{18}{xy}$ for positive numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "54",
              "lines": [
                {
                  "step": "Find the least value of $12x + 27y + \\dfrac{18}{xy}$ for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{12x + 27y + \\dfrac{18}{xy}}{3} \\ge \\sqrt[3]{12x \\cdot 27y \\cdot \\dfrac{18}{xy}}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $12x$, $27y$ and $\\dfrac{18}{xy}$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{12x \\cdot 27y \\cdot \\dfrac{18}{xy}} = 18$",
                  "reason": "Cancelling a common factor: $xy$ cancels, the product is $5832$, and $5832 = 18^3$."
                },
                {
                  "step": "$12x + 27y + \\dfrac{18}{xy} \\ge 54$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Equality needs $12x = 27y = \\dfrac{18}{xy}$, each of them $18$.",
                  "reason": "Equality in AM-GM: the two sides are equal only when the three numbers are equal, and three equal numbers with sum $54$ are each $18$."
                },
                {
                  "step": "So $x = \\dfrac{3}{2}$ and $y = \\dfrac{2}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: $12x = 18$ is divided by $12$, and $27y = 18$ by $27$."
                },
                {
                  "step": "At these values $\\dfrac{18}{xy} = 18$, and the expression is $18 + 18 + 18 = 54$.",
                  "reason": "Substituting a value: $xy = 1$, and $18$ divided by $1$ is $18$."
                },
                {
                  "step": "The least value is $54$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: by the fourth line the expression is never below $54$, and at $x = \\dfrac{3}{2}$, $y = \\dfrac{2}{3}$ it equals $54$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $20x + 27y + \\dfrac{50}{xy}$ for positive numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "90",
              "lines": [
                {
                  "step": "Find the least value of $20x + 27y + \\dfrac{50}{xy}$ for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{20x + 27y + \\dfrac{50}{xy}}{3} \\ge \\sqrt[3]{20x \\cdot 27y \\cdot \\dfrac{50}{xy}}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $20x$, $27y$ and $\\dfrac{50}{xy}$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{20x \\cdot 27y \\cdot \\dfrac{50}{xy}} = 30$",
                  "reason": "Cancelling a common factor: $xy$ cancels, the product is $27\\,000$, and $27\\,000 = 30^3$."
                },
                {
                  "step": "$20x + 27y + \\dfrac{50}{xy} \\ge 90$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Equality needs $20x = 27y = \\dfrac{50}{xy}$, each of them $30$.",
                  "reason": "Equality in AM-GM: the two sides are equal only when the three numbers are equal, and three equal numbers with sum $90$ are each $30$."
                },
                {
                  "step": "So $x = \\dfrac{3}{2}$ and $y = \\dfrac{10}{9}$.",
                  "reason": "Dividing both sides by a nonzero number: $20x = 30$ is divided by $20$, and $27y = 30$ by $27$."
                },
                {
                  "step": "At these values $\\dfrac{50}{xy} = 30$, and the expression is $30 + 30 + 30 = 90$.",
                  "reason": "Substituting a value: $xy = \\dfrac{5}{3}$, and $50$ divided by $\\dfrac{5}{3}$ is $30$."
                },
                {
                  "step": "The least value is $90$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: by the fourth line the expression is never below $90$, and at $x = \\dfrac{3}{2}$, $y = \\dfrac{10}{9}$ it equals $90$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $27x + 32y + \\dfrac{2}{xy}$ for positive numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "36",
              "lines": [
                {
                  "step": "Find the least value of $27x + 32y + \\dfrac{2}{xy}$ for positive numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{27x + 32y + \\dfrac{2}{xy}}{3} \\ge \\sqrt[3]{27x \\cdot 32y \\cdot \\dfrac{2}{xy}}$",
                  "reason": "AM-GM for n numbers: the arithmetic mean of the three positive numbers $27x$, $32y$ and $\\dfrac{2}{xy}$ is at least their geometric mean."
                },
                {
                  "step": "$\\sqrt[3]{27x \\cdot 32y \\cdot \\dfrac{2}{xy}} = 12$",
                  "reason": "Cancelling a common factor: $xy$ cancels, the product is $1728$, and $1728 = 12^3$."
                },
                {
                  "step": "$27x + 32y + \\dfrac{2}{xy} \\ge 36$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $3$."
                },
                {
                  "step": "Equality needs $27x = 32y = \\dfrac{2}{xy}$, each of them $12$.",
                  "reason": "Equality in AM-GM: the two sides are equal only when the three numbers are equal, and three equal numbers with sum $36$ are each $12$."
                },
                {
                  "step": "So $x = \\dfrac{4}{9}$ and $y = \\dfrac{3}{8}$.",
                  "reason": "Dividing both sides by a nonzero number: $27x = 12$ is divided by $27$, and $32y = 12$ by $32$."
                },
                {
                  "step": "At these values $\\dfrac{2}{xy} = 12$, and the expression is $12 + 12 + 12 = 36$.",
                  "reason": "Substituting a value: $xy = \\dfrac{1}{6}$, and $2$ divided by $\\dfrac{1}{6}$ is $12$."
                },
                {
                  "step": "The least value is $36$.",
                  "reason": "A greatest value needs a bound and a case that reaches it: by the fourth line the expression is never below $36$, and at $x = \\dfrac{4}{9}$, $y = \\dfrac{3}{8}$ it equals $36$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t214-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(14x + \\dfrac{19}{x}\\right)^2 \\ge E$, for a positive number $x$.",
            "given": [
              "$\\left(14x + \\dfrac{19}{x}\\right)^2 = 196x^2 + \\dfrac{361}{x^2}$",
              "$\\dfrac{196x^2 + \\dfrac{361}{x^2}}{2} \\ge \\sqrt{196x^2 \\cdot \\dfrac{361}{x^2}}$",
              "$\\sqrt{196x^2 \\cdot \\dfrac{361}{x^2}} = 266$",
              "$196x^2 + \\dfrac{361}{x^2} \\ge 532$",
              "$\\left(14x + \\dfrac{19}{x}\\right)^2 \\ge 532$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(14x + \\dfrac{19}{x}\\right)^2 \\ge E$, for a positive number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 squares $14x + \\dfrac{19}{x}$ term by term and leaves out the middle term $532$.",
                "reason": "A power taken term by term over a sum: by the square of a binomial, $(a + b)^2 = a^2 + 2ab + b^2$, and here $2ab = 2 \\cdot 14x \\cdot \\dfrac{19}{x} = 532$."
              },
              {
                "step": "Line 1 written right is $\\left(14x + \\dfrac{19}{x}\\right)^2 = 196x^2 + 532 + \\dfrac{361}{x^2}$.",
                "reason": "Square of a binomial: the square of the first term, twice the product of the two terms, and the square of the second term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(8x + \\dfrac{3}{x}\\right)^2 \\ge E$, for a positive number $x$.",
              "given": [
                "$\\dfrac{64x^2 + \\dfrac{9}{x^2}}{2} \\ge \\sqrt{64x^2 \\cdot \\dfrac{9}{x^2}}$",
                "$\\sqrt{64x^2 \\cdot \\dfrac{9}{x^2}} = 24$",
                "$64x^2 + \\dfrac{9}{x^2} \\ge 48$",
                "$\\left(8x + \\dfrac{3}{x}\\right)^2 = 64x^2 + \\dfrac{9}{x^2}$",
                "$\\left(8x + \\dfrac{3}{x}\\right)^2 \\ge 48$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (8*x+3/x)^2 = 64*x^2+48+9/x^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(8x + \\dfrac{3}{x}\\right)^2 \\ge E$, for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 squares $8x + \\dfrac{3}{x}$ term by term and leaves out the middle term $48$.",
                  "reason": "A power taken term by term over a sum: by the square of a binomial, $(a + b)^2 = a^2 + 2ab + b^2$, and here $2ab = 2 \\cdot 8x \\cdot \\dfrac{3}{x} = 48$."
                },
                {
                  "step": "Line 4 written right is $\\left(8x + \\dfrac{3}{x}\\right)^2 = 64x^2 + 48 + \\dfrac{9}{x^2}$.",
                  "reason": "Square of a binomial: the square of the first term, twice the product of the two terms, and the square of the second term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(10x + \\dfrac{3}{x}\\right)^2 \\ge E$, for a positive number $x$.",
              "given": [
                "$\\left(10x + \\dfrac{3}{x}\\right)^2 = 100x^2 + \\dfrac{9}{x^2}$",
                "$\\dfrac{100x^2 + \\dfrac{9}{x^2}}{2} \\ge \\sqrt{100x^2 \\cdot \\dfrac{9}{x^2}}$",
                "$\\sqrt{100x^2 \\cdot \\dfrac{9}{x^2}} = 30$",
                "$100x^2 + \\dfrac{9}{x^2} \\ge 60$",
                "$\\left(10x + \\dfrac{3}{x}\\right)^2 \\ge 60$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (10*x+3/x)^2 = 100*x^2+60+9/x^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(10x + \\dfrac{3}{x}\\right)^2 \\ge E$, for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 squares $10x + \\dfrac{3}{x}$ term by term and leaves out the middle term $60$.",
                  "reason": "A power taken term by term over a sum: by the square of a binomial, $(a + b)^2 = a^2 + 2ab + b^2$, and here $2ab = 2 \\cdot 10x \\cdot \\dfrac{3}{x} = 60$."
                },
                {
                  "step": "Line 1 written right is $\\left(10x + \\dfrac{3}{x}\\right)^2 = 100x^2 + 60 + \\dfrac{9}{x^2}$.",
                  "reason": "Square of a binomial: the square of the first term, twice the product of the two terms, and the square of the second term."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(2x + \\dfrac{3}{x}\\right)^2 \\ge E$, for a positive number $x$.",
              "given": [
                "$\\dfrac{4x^2 + \\dfrac{9}{x^2}}{2} \\ge \\sqrt{4x^2 \\cdot \\dfrac{9}{x^2}}$",
                "$\\sqrt{4x^2 \\cdot \\dfrac{9}{x^2}} = 6$",
                "$4x^2 + \\dfrac{9}{x^2} \\ge 12$",
                "$\\left(2x + \\dfrac{3}{x}\\right)^2 = 4x^2 + \\dfrac{9}{x^2}$",
                "$\\left(2x + \\dfrac{3}{x}\\right)^2 \\ge 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (2*x+3/x)^2 = 4*x^2+12+9/x^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. The solution finds the number $E$ that AM-GM for two numbers gives in $\\left(2x + \\dfrac{3}{x}\\right)^2 \\ge E$, for a positive number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 squares $2x + \\dfrac{3}{x}$ term by term and leaves out the middle term $12$.",
                  "reason": "A power taken term by term over a sum: by the square of a binomial, $(a + b)^2 = a^2 + 2ab + b^2$, and here $2ab = 2 \\cdot 2x \\cdot \\dfrac{3}{x} = 12$."
                },
                {
                  "step": "Line 4 written right is $\\left(2x + \\dfrac{3}{x}\\right)^2 = 4x^2 + 12 + \\dfrac{9}{x^2}$.",
                  "reason": "Square of a binomial: the square of the first term, twice the product of the two terms, and the square of the second term."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for three numbers gives in $49x^6 + 56y^3 + 8z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
            "given": [
              "$\\dfrac{49x^6 + 56y^3 + 8z^3}{3} \\ge \\sqrt[3]{49x^6 \\cdot 56y^3 \\cdot 8z^3}$",
              "$49x^6 \\cdot 56y^3 \\cdot 8z^3 = 21\\,952x^6y^3z^3 = (28x^2yz)^3$",
              "$\\sqrt[3]{49x^6 \\cdot 56y^3 \\cdot 8z^3} = 28x^2yz = 84x^2yz$",
              "$49x^6 + 56y^3 + 8z^3 \\ge 84x^2yz$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for three numbers gives in $49x^6 + 56y^3 + 8z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 runs on from the cube root $28x^2yz$ with a second equals sign to $84x^2yz$, which is $3$ times as much.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and the multiplying by $3$ belongs to the last line, where both sides of the inequality are multiplied."
              },
              {
                "step": "Line 3 written right is $\\sqrt[3]{49x^6 \\cdot 56y^3 \\cdot 8z^3} = 28x^2yz$.",
                "reason": "Root of a product: the product is $21\\,952x^6y^3z^3$, the cube of $28x^2yz$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for four numbers gives in $9x^4 + 16y^4 + 27z^4 + 27 \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "given": [
                "$9x^4 \\cdot 16y^4 \\cdot 27z^4 \\cdot 27 = 104\\,976x^4y^4z^4 = (18xyz)^4$",
                "$\\sqrt[4]{9x^4 \\cdot 16y^4 \\cdot 27z^4 \\cdot 27} = 18xyz = 72xyz$",
                "$\\dfrac{9x^4 + 16y^4 + 27z^4 + 27}{4} \\ge \\sqrt[4]{9x^4 \\cdot 16y^4 \\cdot 27z^4 \\cdot 27}$",
                "$9x^4 + 16y^4 + 27z^4 + 27 \\ge 72xyz$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (9*x^4*16*y^4*27*z^4*27)^(1/4) = 18*x*y*z",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for four numbers gives in $9x^4 + 16y^4 + 27z^4 + 27 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 runs on from the fourth root $18xyz$ with a second equals sign to $72xyz$, which is $4$ times as much.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and the multiplying by $4$ belongs to the last line, where both sides of the inequality are multiplied."
                },
                {
                  "step": "Line 2 written right is $\\sqrt[4]{9x^4 \\cdot 16y^4 \\cdot 27z^4 \\cdot 27} = 18xyz$.",
                  "reason": "Root of a product: the product is $104\\,976x^4y^4z^4$, the fourth power of $18xyz$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for three numbers gives in $18x^3 + 8y^3 + 12z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "given": [
                "$18x^3 \\cdot 8y^3 \\cdot 12z^3 = 1728x^3y^3z^3 = (12xyz)^3$",
                "$\\sqrt[3]{18x^3 \\cdot 8y^3 \\cdot 12z^3} = 12xyz = 36xyz$",
                "$\\dfrac{18x^3 + 8y^3 + 12z^3}{3} \\ge \\sqrt[3]{18x^3 \\cdot 8y^3 \\cdot 12z^3}$",
                "$18x^3 + 8y^3 + 12z^3 \\ge 36xyz$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (18*x^3*8*y^3*12*z^3)^(1/3) = 12*x*y*z",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for three numbers gives in $18x^3 + 8y^3 + 12z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 runs on from the cube root $12xyz$ with a second equals sign to $36xyz$, which is $3$ times as much.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and the multiplying by $3$ belongs to the last line, where both sides of the inequality are multiplied."
                },
                {
                  "step": "Line 2 written right is $\\sqrt[3]{18x^3 \\cdot 8y^3 \\cdot 12z^3} = 12xyz$.",
                  "reason": "Root of a product: the product is $1728x^3y^3z^3$, the cube of $12xyz$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for three numbers gives in $8x^3 + 54y^6 + 32z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
              "given": [
                "$\\dfrac{8x^3 + 54y^6 + 32z^3}{3} \\ge \\sqrt[3]{8x^3 \\cdot 54y^6 \\cdot 32z^3}$",
                "$8x^3 \\cdot 54y^6 \\cdot 32z^3 = 13\\,824x^3y^6z^3 = (24xy^2z)^3$",
                "$\\sqrt[3]{8x^3 \\cdot 54y^6 \\cdot 32z^3} = 24xy^2z = 72xy^2z$",
                "$8x^3 + 54y^6 + 32z^3 \\ge 72xy^2z$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (8*x^3*54*y^6*32*z^3)^(1/3) = 24*x*y^2*z",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution, and write that line right. The solution finds the expression $E$ that AM-GM for three numbers gives in $8x^3 + 54y^6 + 32z^3 \\ge E$, for positive numbers $x$, $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 runs on from the cube root $24xy^2z$ with a second equals sign to $72xy^2z$, which is $3$ times as much.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and the multiplying by $3$ belongs to the last line, where both sides of the inequality are multiplied."
                },
                {
                  "step": "Line 3 written right is $\\sqrt[3]{8x^3 \\cdot 54y^6 \\cdot 32z^3} = 24xy^2z$.",
                  "reason": "Root of a product: the product is $13\\,824x^3y^6z^3$, the cube of $24xy^2z$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t214-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality in $x$, with the arithmetic mean on the left: For a positive number $x$, the arithmetic mean of $8x$ and $20$ is at least their geometric mean.",
            "lines": [
              {
                "step": "Write this sentence as an inequality in $x$, with the arithmetic mean on the left: For a positive number $x$, the arithmetic mean of $8x$ and $20$ is at least their geometric mean.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The arithmetic mean of $8x$ and $20$ is $\\dfrac{8x + 20}{2}$.",
                "reason": "Arithmetic mean and geometric mean: the arithmetic mean of two numbers is their sum divided by $2$."
              },
              {
                "step": "The geometric mean of $8x$ and $20$ is $\\sqrt{8x \\cdot 20}$.",
                "reason": "Arithmetic mean and geometric mean: the geometric mean of two numbers is the square root of their product."
              },
              {
                "step": "$\\dfrac{8x + 20}{2} \\ge \\sqrt{8x \\cdot 20}$",
                "reason": "Writing a sentence as an equation: the words \"is at least\" stand where the sign $\\ge$ goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality in $x$, with the geometric mean on the left: For a positive number $x$, the geometric mean of $12$ and $x + 1$ is at most their arithmetic mean.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "sqrt(12*(x+1)) <= (12+x+1)/2",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$, with the geometric mean on the left: For a positive number $x$, the geometric mean of $12$ and $x + 1$ is at most their arithmetic mean.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The geometric mean of $12$ and $x + 1$ is $\\sqrt{12 \\cdot (x + 1)}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of two numbers is the square root of their product."
                },
                {
                  "step": "The arithmetic mean of $12$ and $x + 1$ is $\\dfrac{12 + x + 1}{2}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean of two numbers is their sum divided by $2$."
                },
                {
                  "step": "$\\sqrt{12 \\cdot (x + 1)} \\le \\dfrac{12 + x + 1}{2}$",
                  "reason": "Writing a sentence as an equation: the words \"is at most\" stand where the sign $\\le$ goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$, with the arithmetic mean on the left: For a positive number $x$, the arithmetic mean of $19$ and $x + 8$ is no less than their geometric mean.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "(19+x+8)/2 >= sqrt(19*(x+8))",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$, with the arithmetic mean on the left: For a positive number $x$, the arithmetic mean of $19$ and $x + 8$ is no less than their geometric mean.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean of $19$ and $x + 8$ is $\\dfrac{19 + x + 8}{2}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean of two numbers is their sum divided by $2$."
                },
                {
                  "step": "The geometric mean of $19$ and $x + 8$ is $\\sqrt{19 \\cdot (x + 8)}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of two numbers is the square root of their product."
                },
                {
                  "step": "$\\dfrac{19 + x + 8}{2} \\ge \\sqrt{19 \\cdot (x + 8)}$",
                  "reason": "Writing a sentence as an equation: the words \"is no less than\" stand where the sign $\\ge$ goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$, with the geometric mean on the left: For a positive number $x$, the geometric mean of $x + 12$ and $8$ is no more than their arithmetic mean.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "sqrt((x+12)*8) <= (x+12+8)/2",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$, with the geometric mean on the left: For a positive number $x$, the geometric mean of $x + 12$ and $8$ is no more than their arithmetic mean.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The geometric mean of $x + 12$ and $8$ is $\\sqrt{(x + 12) \\cdot 8}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of two numbers is the square root of their product."
                },
                {
                  "step": "The arithmetic mean of $x + 12$ and $8$ is $\\dfrac{x + 12 + 8}{2}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean of two numbers is their sum divided by $2$."
                },
                {
                  "step": "$\\sqrt{(x + 12) \\cdot 8} \\le \\dfrac{x + 12 + 8}{2}$",
                  "reason": "Writing a sentence as an equation: the words \"is no more than\" stand where the sign $\\le$ goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the geometric mean of $16$, $4x$ and $8$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the geometric mean of $16$, $4x$ and $8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The product of the three numbers is $16 \\cdot 4x \\cdot 8$.",
                "reason": "Arithmetic mean and geometric mean: the numbers are multiplied first."
              },
              {
                "step": "The geometric mean of three numbers is the cube root of their product, $\\sqrt[3]{16 \\cdot 4x \\cdot 8}$.",
                "reason": "Arithmetic mean and geometric mean: the geometric mean of $n$ numbers is the $n$th root of their product, and here $n = 3$."
              },
              {
                "step": "$y = \\sqrt[3]{16 \\cdot 4x \\cdot 8}$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, the geometric mean of $3x$, $5$ and $17$ is $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (3*x*5*17)^(1/3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, the geometric mean of $3x$, $5$ and $17$ is $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of the three numbers is $3x \\cdot 5 \\cdot 17$.",
                  "reason": "Arithmetic mean and geometric mean: the numbers are multiplied first."
                },
                {
                  "step": "The geometric mean of three numbers is the cube root of their product, $\\sqrt[3]{3x \\cdot 5 \\cdot 17}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of $n$ numbers is the $n$th root of their product, and here $n = 3$."
                },
                {
                  "step": "$y = \\sqrt[3]{3x \\cdot 5 \\cdot 17}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the geometric mean of $2$, $x + 12$, $5x$ and $x + 9$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (2*(x+12)*5*x*(x+9))^(1/4)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the geometric mean of $2$, $x + 12$, $5x$ and $x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of the four numbers is $2 \\cdot (x + 12) \\cdot 5x \\cdot (x + 9)$.",
                  "reason": "Arithmetic mean and geometric mean: the numbers are multiplied first."
                },
                {
                  "step": "The geometric mean of four numbers is the fourth root of their product, $\\sqrt[4]{2 \\cdot (x + 12) \\cdot 5x \\cdot (x + 9)}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of $n$ numbers is the $n$th root of their product, and here $n = 4$."
                },
                {
                  "step": "$y = \\sqrt[4]{2 \\cdot (x + 12) \\cdot 5x \\cdot (x + 9)}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, the geometric mean of $9x$, $x + 7$ and $11$ is $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (9*x*(x+7)*11)^(1/3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, the geometric mean of $9x$, $x + 7$ and $11$ is $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of the three numbers is $9x \\cdot (x + 7) \\cdot 11$.",
                  "reason": "Arithmetic mean and geometric mean: the numbers are multiplied first."
                },
                {
                  "step": "The geometric mean of three numbers is the cube root of their product, $\\sqrt[3]{9x \\cdot (x + 7) \\cdot 11}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of $n$ numbers is the $n$th root of their product, and here $n = 3$."
                },
                {
                  "step": "$y = \\sqrt[3]{9x \\cdot (x + 7) \\cdot 11}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is what is left when the geometric mean of $9x$ and $20$ is taken from their arithmetic mean.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is what is left when the geometric mean of $9x$ and $20$ is taken from their arithmetic mean.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The arithmetic mean of $9x$ and $20$ is $\\dfrac{9x + 20}{2}$.",
                "reason": "Arithmetic mean and geometric mean: the arithmetic mean of two numbers is their sum divided by $2$."
              },
              {
                "step": "The geometric mean of $9x$ and $20$ is $\\sqrt{9x \\cdot 20}$.",
                "reason": "Arithmetic mean and geometric mean: the geometric mean of two numbers is the square root of their product."
              },
              {
                "step": "$y = \\dfrac{9x + 20}{2} - \\sqrt{9x \\cdot 20}$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and what is left when one number is taken from another is the other minus the number taken."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the amount by which the arithmetic mean of $x + 11$, $x + 5$ and $4$ is above their geometric mean.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+11+x+5+4)/3-((x+11)*(x+5)*4)^(1/3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the amount by which the arithmetic mean of $x + 11$, $x + 5$ and $4$ is above their geometric mean.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean of $x + 11$, $x + 5$ and $4$ is $\\dfrac{x + 11 + x + 5 + 4}{3}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean of three numbers is their sum divided by $3$."
                },
                {
                  "step": "The geometric mean of $x + 11$, $x + 5$ and $4$ is $\\sqrt[3]{(x + 11) \\cdot (x + 5) \\cdot 4}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of three numbers is the cube root of their product."
                },
                {
                  "step": "$y = \\dfrac{x + 11 + x + 5 + 4}{3} - \\sqrt[3]{(x + 11) \\cdot (x + 5) \\cdot 4}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the amount by which one number is above another is the first minus the second."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is what is left when the geometric mean of $14$, $3x$ and $9$ is taken from their arithmetic mean.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (14+3*x+9)/3-(14*3*x*9)^(1/3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is what is left when the geometric mean of $14$, $3x$ and $9$ is taken from their arithmetic mean.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean of $14$, $3x$ and $9$ is $\\dfrac{14 + 3x + 9}{3}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean of three numbers is their sum divided by $3$."
                },
                {
                  "step": "The geometric mean of $14$, $3x$ and $9$ is $\\sqrt[3]{14 \\cdot 3x \\cdot 9}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of three numbers is the cube root of their product."
                },
                {
                  "step": "$y = \\dfrac{14 + 3x + 9}{3} - \\sqrt[3]{14 \\cdot 3x \\cdot 9}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and what is left when one number is taken from another is the other minus the number taken."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the amount by which the arithmetic mean of $x + 2$ and $5$ is above their geometric mean.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+2+5)/2-sqrt((x+2)*5)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For a positive number $x$, $y$ is the amount by which the arithmetic mean of $x + 2$ and $5$ is above their geometric mean.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The arithmetic mean of $x + 2$ and $5$ is $\\dfrac{x + 2 + 5}{2}$.",
                  "reason": "Arithmetic mean and geometric mean: the arithmetic mean of two numbers is their sum divided by $2$."
                },
                {
                  "step": "The geometric mean of $x + 2$ and $5$ is $\\sqrt{(x + 2) \\cdot 5}$.",
                  "reason": "Arithmetic mean and geometric mean: the geometric mean of two numbers is the square root of their product."
                },
                {
                  "step": "$y = \\dfrac{x + 2 + 5}{2} - \\sqrt{(x + 2) \\cdot 5}$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and the amount by which one number is above another is the first minus the second."
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
      "id": "t214-p1",
      "method": "induction",
      "statement": "Let $a_1, a_2, \\ldots, a_n$ be nonnegative numbers. Then $\\dfrac{a_1 + a_2 + \\cdots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\cdots a_n}$, and the two sides are equal only when $a_1 = a_2 = \\cdots = a_n$.",
      "idea": "AM-GM for two numbers doubles: two lists of $2^k$ numbers that each obey the inequality join into a list of $2^{k+1}$ numbers that obeys it, so induction covers every list of $2^k$ numbers. A list of $n$ numbers is then filled up to $2^k$ numbers with copies of its own arithmetic mean, which leaves the arithmetic mean as it was.",
      "lines": [
        {
          "line": "For a whole number $k \\ge 1$, let the claim for $k$ be: the arithmetic mean of $2^k$ nonnegative numbers is at least their geometric mean, and the two means are equal only when the numbers are all equal.",
          "reason": "Induction, on $k$: the claim is proved for every whole number $k \\ge 1$"
        },
        {
          "line": "The claim holds for $k = 1$.",
          "reason": "Base case: AM-GM for two numbers, whose two sides are equal only when the two numbers are equal"
        },
        {
          "line": "Assume that the claim holds for a whole number $k \\ge 1$.",
          "reason": "Inductive assumption"
        },
        {
          "line": "Take $2^{k+1}$ nonnegative numbers. Let $b_1$ and $c_1$ be the arithmetic mean and the geometric mean of the first $2^k$ of them, and $b_2$ and $c_2$ those of the other $2^k$.",
          "reason": "product law: $2^{k+1} = 2 \\cdot 2^k$, so the numbers split into two lists of $2^k$ numbers"
        },
        {
          "line": "Then $b_1 \\ge c_1$ and $b_2 \\ge c_2$.",
          "reason": "Inductive assumption, on each of the two lists"
        },
        {
          "line": "The arithmetic mean of all $2^{k+1}$ numbers is $\\dfrac{b_1 + b_2}{2}$.",
          "reason": "arithmetic mean and geometric mean: the two lists have the sums $2^k b_1$ and $2^k b_2$, and $\\dfrac{2^k b_1 + 2^k b_2}{2^{k+1}} = \\dfrac{b_1 + b_2}{2}$"
        },
        {
          "line": "The geometric mean of all $2^{k+1}$ numbers is $\\sqrt{c_1 c_2}$.",
          "reason": "arithmetic mean and geometric mean: the two lists have the products $c_1^{2^k}$ and $c_2^{2^k}$, and by fractional exponents the $2^{k+1}$th root of $(c_1 c_2)^{2^k}$ is $(c_1 c_2)^{1/2}$"
        },
        {
          "line": "Also $b_1 + b_2 \\ge c_1 + c_2$.",
          "reason": "adding two inequalities: the two inequalities of the fifth line"
        },
        {
          "line": "So $\\dfrac{b_1 + b_2}{2} \\ge \\dfrac{c_1 + c_2}{2}$.",
          "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$"
        },
        {
          "line": "Also $\\dfrac{c_1 + c_2}{2} \\ge \\sqrt{c_1 c_2}$.",
          "reason": "AM-GM for two numbers, on the nonnegative numbers $c_1$ and $c_2$"
        },
        {
          "line": "So $\\dfrac{b_1 + b_2}{2} \\ge \\sqrt{c_1 c_2}$: the arithmetic mean of the $2^{k+1}$ numbers is at least their geometric mean.",
          "reason": "transitivity: the ninth and tenth lines, read with the sixth and seventh"
        },
        {
          "line": "Suppose that the two means of the $2^{k+1}$ numbers are equal. Then $b_1 + b_2 = c_1 + c_2$ and $\\dfrac{c_1 + c_2}{2} = \\sqrt{c_1 c_2}$.",
          "reason": "transitivity: a strict sign in the ninth or the tenth line would make the eleventh line strict"
        },
        {
          "line": "Then $c_1 = c_2$.",
          "reason": "AM-GM for two numbers: its two sides are equal only when the two numbers are equal"
        },
        {
          "line": "Also $b_1 = c_1$ and $b_2 = c_2$.",
          "reason": "the fifth line: $b_1 - c_1$ and $b_2 - c_2$ are nonnegative, and their sum is $0$ by the twelfth line, so each is $0$"
        },
        {
          "line": "So the numbers of the first list are all equal, and the numbers of the other list are all equal.",
          "reason": "Inductive assumption: the two means of each list are equal by the fourteenth line"
        },
        {
          "line": "So all $2^{k+1}$ numbers are equal.",
          "reason": "arithmetic mean and geometric mean: equal numbers are each equal to their geometric mean, so the numbers of the first list are $c_1$, those of the other list are $c_2$, and $c_1 = c_2$ by the thirteenth line"
        },
        {
          "line": "So the claim holds for $k + 1$.",
          "reason": "Inductive step: the eleventh and sixteenth lines"
        },
        {
          "line": "So the claim holds for every whole number $k \\ge 1$.",
          "reason": "Induction"
        },
        {
          "line": "Let $a_1, a_2, \\ldots, a_n$ be nonnegative numbers, with the arithmetic mean $b$ and the geometric mean $c$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $2^n \\ge n$.",
          "reason": "Binomial Theorem: $2^n = (1 + 1)^n$ is a sum of positive terms whose first two are $1$ and $n$, so $2^n \\ge 1 + n$"
        },
        {
          "line": "Take $k = n$ and let $m = 2^k - n$.",
          "reason": "the twentieth line: $2^k \\ge n$, so $m \\ge 0$"
        },
        {
          "line": "The $2^k$ numbers made of $a_1, a_2, \\ldots, a_n$ and $m$ copies of $b$ are nonnegative, with the sum $nb + mb = 2^k b$ and the product $c^n b^m$.",
          "reason": "arithmetic mean and geometric mean: $a_1 + a_2 + \\cdots + a_n = nb$ and $a_1 a_2 \\cdots a_n = c^n$"
        },
        {
          "line": "So their arithmetic mean is $b$ and their geometric mean is $\\sqrt[2^k]{c^n b^m}$.",
          "reason": "arithmetic mean and geometric mean, for the $2^k$ numbers"
        },
        {
          "line": "So $b \\ge \\sqrt[2^k]{c^n b^m}$.",
          "reason": "the claim for $k$, by the eighteenth line"
        },
        {
          "line": "If $b = 0$, then $a_1, a_2, \\ldots, a_n$ are all $0$, so $c = 0$ and the two means are equal.",
          "reason": "arithmetic's order: nonnegative numbers with the sum $0$ are each $0$"
        },
        {
          "line": "If $b > 0$ and $c = 0$, then $b > c$.",
          "reason": "the two conditions of this case"
        },
        {
          "line": "If $b > 0$ and $c > 0$, then $b^{2^k} \\ge c^n b^m$.",
          "reason": "powers and roots of positive numbers keep the order: both sides of the twenty-fourth line are positive here, and both are raised to the power $2^k$"
        },
        {
          "line": "Then $b^n \\ge c^n$.",
          "reason": "multiplying by a positive number: both sides of the twenty-seventh line are multiplied by $\\dfrac{1}{b^m}$, and $2^k - m = n$ by the quotient law"
        },
        {
          "line": "So $b \\ge c$ in all three cases.",
          "reason": "powers and roots of positive numbers keep the order: the $n$th roots of both sides of the twenty-eighth line; the twenty-fifth and twenty-sixth lines for the other two cases"
        },
        {
          "line": "Suppose that $b = c$ and $b > 0$. Then $b = \\sqrt[2^k]{c^n b^m}$.",
          "reason": "substituting a value: with $c = b$ the root is $\\sqrt[2^k]{b^{n+m}}$, and $n + m = 2^k$"
        },
        {
          "line": "Then the $2^k$ numbers of the twenty-second line are all equal.",
          "reason": "the claim for $k$: the two means are equal only when the numbers are all equal"
        },
        {
          "line": "So $a_1 = a_2 = \\cdots = a_n$ whenever $b = c$.",
          "reason": "the thirty-first line for $b > 0$, and the twenty-fifth line for $b = 0$"
        },
        {
          "line": "Therefore $\\dfrac{a_1 + a_2 + \\cdots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\cdots a_n}$, and the two sides are equal only when $a_1 = a_2 = \\cdots = a_n$.",
          "reason": "the twenty-ninth and thirty-second lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t214-s1",
      "method": "direct proof",
      "statement": "Prove that $\\dfrac{k_1 a_1 + k_2 a_2 + \\cdots + k_n a_n}{m} \\ge \\sqrt[m]{a_1^{k_1} a_2^{k_2} \\cdots a_n^{k_n}}$ for all nonnegative numbers $a_1, a_2, \\ldots, a_n$ and all whole numbers $k_1, k_2, \\ldots, k_n$ that are at least $1$, where $m = k_1 + k_2 + \\cdots + k_n$.",
      "check": {
        "proof": [
          {
            "line": "Let $a_1, a_2, \\ldots, a_n$ be nonnegative numbers and $k_1, k_2, \\ldots, k_n$ whole numbers that are at least $1$, with the sum $m$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Write the list of $m$ nonnegative numbers made of $k_1$ copies of $a_1$, $k_2$ copies of $a_2$, and so on up to $k_n$ copies of $a_n$.",
            "reason": "the list has $k_1 + k_2 + \\cdots + k_n = m$ numbers"
          },
          {
            "line": "The sum of the list is $k_1 a_1 + k_2 a_2 + \\cdots + k_n a_n$.",
            "reason": "laws of multiplication (arithmetic's): $k$ copies of a number add to $k$ times the number"
          },
          {
            "line": "The product of the list is $a_1^{k_1} a_2^{k_2} \\cdots a_n^{k_n}$.",
            "reason": "a power with a whole exponent (arithmetic's): $k$ copies of a number multiply to its $k$th power"
          },
          {
            "line": "So the arithmetic mean of the list is $\\dfrac{k_1 a_1 + k_2 a_2 + \\cdots + k_n a_n}{m}$ and its geometric mean is $\\sqrt[m]{a_1^{k_1} a_2^{k_2} \\cdots a_n^{k_n}}$.",
            "reason": "arithmetic mean and geometric mean, for the $m$ numbers of the list"
          },
          {
            "line": "Therefore $\\dfrac{k_1 a_1 + k_2 a_2 + \\cdots + k_n a_n}{m} \\ge \\sqrt[m]{a_1^{k_1} a_2^{k_2} \\cdots a_n^{k_n}}$.",
            "reason": "AM-GM for n numbers, on the list of the second line"
          }
        ]
      }
    },
    {
      "id": "t214-s2",
      "method": "induction",
      "statement": "Prove that $\\left(x_1 + \\dfrac{1}{x_1}\\right)\\left(x_2 + \\dfrac{1}{x_2}\\right) \\cdots \\left(x_n + \\dfrac{1}{x_n}\\right) \\ge 2^n$ for every whole number $n \\ge 1$ and all positive numbers $x_1, x_2, \\ldots, x_n$.",
      "check": {
        "proof": [
          {
            "line": "For a whole number $n \\ge 1$, let the claim for $n$ be: the product of the $n$ brackets is at least $2^n$ for all positive numbers $x_1, x_2, \\ldots, x_n$.",
            "reason": "Induction, on $n$"
          },
          {
            "line": "Let $x$ be a positive number. Then $\\dfrac{x + \\dfrac{1}{x}}{2} \\ge \\sqrt{x \\cdot \\dfrac{1}{x}}$.",
            "reason": "AM-GM for two numbers, on the positive numbers $x$ and $\\dfrac{1}{x}$"
          },
          {
            "line": "So $\\dfrac{x + \\dfrac{1}{x}}{2} \\ge 1$.",
            "reason": "cancelling a common factor: $x \\cdot \\dfrac{1}{x} = 1$, and $\\sqrt{1} = 1$"
          },
          {
            "line": "So $x + \\dfrac{1}{x} \\ge 2$ for every positive number $x$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $2$"
          },
          {
            "line": "The claim holds for $n = 1$.",
            "reason": "Base case: the fourth line with $x = x_1$, and $2^1 = 2$"
          },
          {
            "line": "Assume that the claim holds for a whole number $n \\ge 1$.",
            "reason": "Inductive assumption"
          },
          {
            "line": "Let $x_1, x_2, \\ldots, x_{n+1}$ be positive numbers.",
            "reason": "the hypothesis of the claim for $n + 1$"
          },
          {
            "line": "Then the product of the first $n$ brackets is at least $2^n$.",
            "reason": "Inductive assumption, on $x_1, x_2, \\ldots, x_n$"
          },
          {
            "line": "Also $x_{n+1} + \\dfrac{1}{x_{n+1}} \\ge 2$.",
            "reason": "the fourth line with $x = x_{n+1}$"
          },
          {
            "line": "So the product of all $n + 1$ brackets is at least $2^n \\cdot 2$.",
            "reason": "multiplying two inequalities of positive numbers: the eighth and ninth lines"
          },
          {
            "line": "So the product of all $n + 1$ brackets is at least $2^{n+1}$.",
            "reason": "product law: $2^n \\cdot 2 = 2^{n+1}$"
          },
          {
            "line": "So the claim holds for $n + 1$.",
            "reason": "Inductive step"
          },
          {
            "line": "Therefore $\\left(x_1 + \\dfrac{1}{x_1}\\right)\\left(x_2 + \\dfrac{1}{x_2}\\right) \\cdots \\left(x_n + \\dfrac{1}{x_n}\\right) \\ge 2^n$ for every whole number $n \\ge 1$.",
            "reason": "Induction"
          }
        ]
      }
    },
    {
      "id": "t214-s3",
      "method": "direct proof",
      "statement": "Prove that positive numbers $x$ and $y$ with $x^3 + y^3 + 8 = 6xy$ are both equal to $2$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be positive numbers with $x^3 + y^3 + 8 = 6xy$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\dfrac{x^3 + y^3 + 8}{3} \\ge \\sqrt[3]{x^3 \\cdot y^3 \\cdot 8}$.",
            "reason": "AM-GM for n numbers, on the positive numbers $x^3$, $y^3$ and $8$"
          },
          {
            "line": "Also $\\sqrt[3]{x^3 \\cdot y^3 \\cdot 8} = 2xy$.",
            "reason": "root of a product: the product is $8x^3y^3$, the cube of $2xy$"
          },
          {
            "line": "So $x^3 + y^3 + 8 \\ge 6xy$.",
            "reason": "multiplying by a positive number: both sides of the second line are multiplied by $3$, with the third line"
          },
          {
            "line": "So the arithmetic mean of $x^3$, $y^3$ and $8$ equals their geometric mean.",
            "reason": "the hypothesis: the two sides of the fourth line are equal, and so are the two sides of the second line"
          },
          {
            "line": "So $x^3 = y^3 = 8$.",
            "reason": "Equality in AM-GM"
          },
          {
            "line": "Therefore $x = y = 2$.",
            "reason": "fractional exponents: a number has one real cube root, and $2^3 = 8$"
          }
        ]
      }
    }
  ]
}
