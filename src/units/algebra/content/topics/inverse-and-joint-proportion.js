export default {
  "number": 121,
  "title": "Inverse and joint proportion",
  "section": 4,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "190–196, 204–207"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $y$ when $x = 10$, if $y$ is inversely proportional to $x$ and $y = 15$ when $x = 4$.",
    "form": "Answer as a number, or equivalent.",
    "answer": "6",
    "solution": [
      "Find $y$ when $x = 10$, if $y$ is inversely proportional to $x$ and $y = 15$ when $x = 4$.",
      "$xy = a$",
      "$(4)(15) = a$",
      "$60 = a$",
      "$xy = 60$",
      "$(10)y = 60$",
      "$y = 6$"
    ]
  },
  "ideas": [
    {
      "name": "Inversely proportional",
      "concrete": "Rectangles of area $24$ square metres: a width of $3$ metres goes with a length of $8$ metres, and a width of $6$ metres with a length of $4$ metres. Doubling the width halves the length, and the width times the length is $24$ every time.",
      "general": "For variable quantities $x$ and $y$, $x$ and $y$ are **inversely proportional** when $xy = a$ for a constant $a$; the constant $a$ is again called the constant of proportionality. When $a$ is not $0$, multiplying $x$ by a number other than $0$ divides $y$ by that number. A power or another expression may stand in the place of $x$ or $y$: $x^2$ and $y$ are inversely proportional when $x^2y = a$."
    },
    {
      "name": "Jointly proportional",
      "concrete": "The area of a triangle is half the base times the height. With the height kept at $6$, doubling the base from $4$ to $8$ doubles the area from $12$ to $24$; with the base kept at $4$, doubling the height doubles the area too.",
      "general": "For variable quantities $x$, $y$ and $z$, $x$ is **jointly proportional** to $y$ and $z$ when $x = ayz$ for a constant $a$ other than $0$. With $z$ held fixed and not $0$, $x$ is then directly proportional to $y$, and with $y$ held fixed and not $0$, directly proportional to $z$. The same holds for three or more quantities, and a quantity that $x$ is inversely proportional to stands below the line: $x = \\dfrac{ay}{z}$."
    },
    {
      "name": "Varying one quantity while the others are held constant",
      "concrete": "In $x = \\dfrac{5y}{z}$, hold $z$ at $2$: then $x = \\dfrac{5}{2}y$, so $x$ is directly proportional to $y$. Hold $y$ at $4$ instead: then $xz = 20$, so $x$ and $z$ are inversely proportional.",
      "general": "In a formula that links several quantities, hold every quantity but two fixed, and gather the two that vary on one side and the fixed ones on the other. If the two that vary stand as a quotient, they are directly proportional; if they stand as a product, they are inversely proportional. The fixed side is the constant of proportionality."
    }
  ],
  "kinds": [
    {
      "id": "t121-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $y$ when $x = 12$, if $y$ is inversely proportional to $x$ and $y = 16$ when $x = 3$.",
            "lines": [
              {
                "step": "Find $y$ when $x = 12$, if $y$ is inversely proportional to $x$ and $y = 16$ when $x = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$xy = a$",
                "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
              },
              {
                "step": "$(3)(16) = a$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$48 = a$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$xy = 48$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $xy = 48$ holds for every pair."
              },
              {
                "step": "$(12)y = 48$",
                "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
              },
              {
                "step": "$y = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ leaves $y$ alone, and the quotient is written in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$ when $x = 7$, if $y$ is inversely proportional to $x$ and $y = 14$ when $x = 5$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find $y$ when $x = 7$, if $y$ is inversely proportional to $x$ and $y = 14$ when $x = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = a$",
                  "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(5)(14) = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$70 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$xy = 70$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $xy = 70$ holds for every pair."
                },
                {
                  "step": "$(7)y = 70$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$y = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $y$ alone, and the quotient is written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $x$ when $y = 5$, if $x$ is inversely proportional to $y$ and $x = 9$ when $y = 6$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "54/5",
              "lines": [
                {
                  "step": "Find $x$ when $y = 5$, if $x$ is inversely proportional to $y$ and $x = 9$ when $y = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = a$",
                  "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(9)(6) = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$54 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$xy = 54$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $xy = 54$ holds for every pair."
                },
                {
                  "step": "$x(5) = 54$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$x = \\dfrac{54}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone, and the quotient is written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $x = 6$, if $y$ is inversely proportional to $x$ and $y = 9$ when $x = 10$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find $y$ when $x = 6$, if $y$ is inversely proportional to $x$ and $y = 9$ when $x = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = a$",
                  "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(10)(9) = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$90 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$xy = 90$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $xy = 90$ holds for every pair."
                },
                {
                  "step": "$(6)y = 90$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$y = 15$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $y$ alone, and the quotient is written in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x$ when $y = 3$, if $x$ and $y$ are positive, $x^3$ and $y^2$ are inversely proportional, and $x = 2$ when $y = 6$.",
            "lines": [
              {
                "step": "Find $x$ when $y = 3$, if $x$ and $y$ are positive, $x^3$ and $y^2$ are inversely proportional, and $x = 2$ when $y = 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^3y^2 = a$",
                "reason": "Inversely proportional: the product of $x^3$ and $y^2$ is a constant, with $a$ the constant of proportionality."
              },
              {
                "step": "$(2)^3(6)^2 = a$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$8 \\cdot 36 = a$",
                "reason": "Order of operations: the powers are worked out before the multiplication."
              },
              {
                "step": "$288 = a$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$x^3y^2 = 288$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^3y^2 = 288$ holds for every pair."
              },
              {
                "step": "$x^3(3)^2 = 288$",
                "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
              },
              {
                "step": "$9x^3 = 288$",
                "reason": "Order of operations: the powers are worked out before the multiplication."
              },
              {
                "step": "$x^3 = 32$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ leaves $x^3$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$x = \\sqrt[3]{32}$",
                "reason": "Raising both sides to a power: raising both sides to the power $\\frac{1}{3}$ keeps them equal, and $x$ is positive, so $x$ is the positive root."
              },
              {
                "step": "$x = 2\\sqrt[3]{4}$",
                "reason": "Simplest radical form: $32 = 8 \\cdot 4$, the root of a product takes $\\sqrt[3]{8} = 2$ out, and $4$ has no cube factor greater than $1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$ when $x = 2$, if $x$ and $y$ are positive, $y^2$ and $x^3$ are inversely proportional, and $y = 3$ when $x = 4$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "6*sqrt(2)",
              "lines": [
                {
                  "step": "Find $y$ when $x = 2$, if $x$ and $y$ are positive, $y^2$ and $x^3$ are inversely proportional, and $y = 3$ when $x = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3y^2 = a$",
                  "reason": "Inversely proportional: the product of $x^3$ and $y^2$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(4)^3(3)^2 = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$64 \\cdot 9 = a$",
                  "reason": "Order of operations: the powers are worked out before the multiplication."
                },
                {
                  "step": "$576 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x^3y^2 = 576$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^3y^2 = 576$ holds for every pair."
                },
                {
                  "step": "$(2)^3y^2 = 576$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$8y^2 = 576$",
                  "reason": "Order of operations: the powers are worked out before the multiplication."
                },
                {
                  "step": "$y^2 = 72$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $y^2$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = \\sqrt{72}$",
                  "reason": "Raising both sides to a power: raising both sides to the power $\\frac{1}{2}$ keeps them equal, and $y$ is positive, so $y$ is the positive root."
                },
                {
                  "step": "$y = 6\\sqrt{2}$",
                  "reason": "Simplest radical form: $72 = 36 \\cdot 2$, the root of a product takes $\\sqrt{36} = 6$ out, and $2$ has no square factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $x$ when $y = 5$, if $x$ and $y$ are positive, $x^3$ and $y^2$ are inversely proportional, and $x = 5$ when $y = 4$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2*10^(1/3)",
              "lines": [
                {
                  "step": "Find $x$ when $y = 5$, if $x$ and $y$ are positive, $x^3$ and $y^2$ are inversely proportional, and $x = 5$ when $y = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3y^2 = a$",
                  "reason": "Inversely proportional: the product of $x^3$ and $y^2$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(5)^3(4)^2 = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$125 \\cdot 16 = a$",
                  "reason": "Order of operations: the powers are worked out before the multiplication."
                },
                {
                  "step": "$2000 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x^3y^2 = 2000$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^3y^2 = 2000$ holds for every pair."
                },
                {
                  "step": "$x^3(5)^2 = 2000$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$25x^3 = 2000$",
                  "reason": "Order of operations: the powers are worked out before the multiplication."
                },
                {
                  "step": "$x^3 = 80$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $25$ leaves $x^3$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$x = \\sqrt[3]{80}$",
                  "reason": "Raising both sides to a power: raising both sides to the power $\\frac{1}{3}$ keeps them equal, and $x$ is positive, so $x$ is the positive root."
                },
                {
                  "step": "$x = 2\\sqrt[3]{10}$",
                  "reason": "Simplest radical form: $80 = 8 \\cdot 10$, the root of a product takes $\\sqrt[3]{8} = 2$ out, and $10$ has no cube factor greater than $1$."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $x = 4$, if $x$ and $y$ are positive, $y^3$ and $x^2$ are inversely proportional, and $y = 6$ when $x = 2$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "3*2^(1/3)",
              "lines": [
                {
                  "step": "Find $y$ when $x = 4$, if $x$ and $y$ are positive, $y^3$ and $x^2$ are inversely proportional, and $y = 6$ when $x = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2y^3 = a$",
                  "reason": "Inversely proportional: the product of $x^2$ and $y^3$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(2)^2(6)^3 = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$4 \\cdot 216 = a$",
                  "reason": "Order of operations: the powers are worked out before the multiplication."
                },
                {
                  "step": "$864 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x^2y^3 = 864$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^2y^3 = 864$ holds for every pair."
                },
                {
                  "step": "$(4)^2y^3 = 864$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$16y^3 = 864$",
                  "reason": "Order of operations: the powers are worked out before the multiplication."
                },
                {
                  "step": "$y^3 = 54$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $16$ leaves $y^3$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = \\sqrt[3]{54}$",
                  "reason": "Raising both sides to a power: raising both sides to the power $\\frac{1}{3}$ keeps them equal, and $y$ is positive, so $y$ is the positive root."
                },
                {
                  "step": "$y = 3\\sqrt[3]{2}$",
                  "reason": "Simplest radical form: $54 = 27 \\cdot 2$, the root of a product takes $\\sqrt[3]{27} = 3$ out, and $2$ has no cube factor greater than $1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x$ when $z = 9$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 3$ and $y = 10$ when $z = 15$.",
            "lines": [
              {
                "step": "Find $x$ when $z = 9$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 3$ and $y = 10$ when $z = 15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$xy = a$",
                "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
              },
              {
                "step": "$y = bz$",
                "reason": "Directly proportional: $y$ is a constant multiple of $z$, with $b$ the constant of proportionality."
              },
              {
                "step": "$(3)(10) = a$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$30 = a$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$10 = b(15)$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$b = \\dfrac{2}{3}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $15$ leaves $b$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$y = \\dfrac{2}{3}(9)$",
                "reason": "Substituting a value: $b$ has the value found, and the value given goes, in brackets, in place of $z$."
              },
              {
                "step": "$y = 6$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$x(6) = 30$",
                "reason": "Substituting a value: the value of $y$ from the line before goes, in brackets, in place of $y$, and $a$ has the value found."
              },
              {
                "step": "$x = 5$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone, and the quotient is written in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$ when $z = 2$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 4$ and $y = 9$ when $z = 3$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find $x$ when $z = 2$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 4$ and $y = 9$ when $z = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = a$",
                  "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$y = bz$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $z$, with $b$ the constant of proportionality."
                },
                {
                  "step": "$(4)(9) = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$36 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$9 = b(3)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$b = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $b$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = 3(2)$",
                  "reason": "Substituting a value: $b$ has the value found, and the value given goes, in brackets, in place of $z$."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x(6) = 36$",
                  "reason": "Substituting a value: the value of $y$ from the line before goes, in brackets, in place of $y$, and $a$ has the value found."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone, and the quotient is written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $x$ when $z = 4$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 6$ and $y = 10$ when $z = 5$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "15/2",
              "lines": [
                {
                  "step": "Find $x$ when $z = 4$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 6$ and $y = 10$ when $z = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = a$",
                  "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$y = bz$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $z$, with $b$ the constant of proportionality."
                },
                {
                  "step": "$(6)(10) = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$60 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$10 = b(5)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$b = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $b$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = 2(4)$",
                  "reason": "Substituting a value: $b$ has the value found, and the value given goes, in brackets, in place of $z$."
                },
                {
                  "step": "$y = 8$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x(8) = 60$",
                  "reason": "Substituting a value: the value of $y$ from the line before goes, in brackets, in place of $y$, and $a$ has the value found."
                },
                {
                  "step": "$x = \\dfrac{15}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $x$ alone, and the quotient is written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $x$ when $z = 6$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 3$ and $y = 8$ when $z = 2$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find $x$ when $z = 6$, if $x$ is inversely proportional to $y$, $y$ is directly proportional to $z$, and $x = 3$ and $y = 8$ when $z = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = a$",
                  "reason": "Inversely proportional: the product of $x$ and $y$ is a constant, with $a$ the constant of proportionality."
                },
                {
                  "step": "$y = bz$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $z$, with $b$ the constant of proportionality."
                },
                {
                  "step": "$(3)(8) = a$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$24 = a$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$8 = b(2)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$b = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $b$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = 4(6)$",
                  "reason": "Substituting a value: $b$ has the value found, and the value given goes, in brackets, in place of $z$."
                },
                {
                  "step": "$y = 24$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x(24) = 24$",
                  "reason": "Substituting a value: the value of $y$ from the line before goes, in brackets, in place of $y$, and $a$ has the value found."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $24$ leaves $x$ alone, and the quotient is written in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t121-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number of hours $10$ painters take to paint a hall, if $6$ painters take $15$ hours and every painter works at the same rate.",
            "lines": [
              {
                "step": "Find the number of hours $10$ painters take to paint a hall, if $6$ painters take $15$ hours and every painter works at the same rate.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of hours $10$ painters take.",
                "reason": "Defining the unknown: the letter stands for the number the question asks for."
              },
              {
                "step": "$(10)x = (6)(15)$",
                "reason": "Inversely proportional: with every painter at the same rate, twice as many painters take half the time, so the number of painters times the number of hours is a constant, the same for both crews."
              },
              {
                "step": "$10x = 90$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$x = 9$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ leaves $x$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "With $10$ painters, the hall takes $9$ hours.",
                "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of hours $6$ pickers take to pick an orchard, if $4$ pickers take $9$ hours and every picker works at the same rate.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the number of hours $6$ pickers take to pick an orchard, if $4$ pickers take $9$ hours and every picker works at the same rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of hours $6$ pickers take.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for."
                },
                {
                  "step": "$(6)x = (4)(9)$",
                  "reason": "Inversely proportional: with every picker at the same rate, twice as many pickers take half the time, so the number of pickers times the number of hours is a constant, the same for both crews."
                },
                {
                  "step": "$6x = 36$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "With $6$ pickers, the orchard takes $6$ hours.",
                  "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
                }
              ]
            },
            {
              "prompt": "Find the number of typists who type a report in $12$ hours, if $8$ typists take $6$ hours and every typist works at the same rate.",
              "form": "Answer as a number, or equivalent.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the number of typists who type a report in $12$ hours, if $8$ typists take $6$ hours and every typist works at the same rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of typists who take $12$ hours.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for."
                },
                {
                  "step": "$(12)x = (8)(6)$",
                  "reason": "Inversely proportional: with every typist at the same rate, twice as many typists take half the time, so the number of typists times the number of hours is a constant, the same for both crews."
                },
                {
                  "step": "$12x = 48$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "To be done in $12$ hours, the report needs $4$ typists.",
                  "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
                }
              ]
            },
            {
              "prompt": "Find the number of days $2$ diggers take to dig a pond, if $5$ diggers take $8$ days and every digger works at the same rate.",
              "form": "Answer as a number, or equivalent.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the number of days $2$ diggers take to dig a pond, if $5$ diggers take $8$ days and every digger works at the same rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of days $2$ diggers take.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for."
                },
                {
                  "step": "$(2)x = (5)(8)$",
                  "reason": "Inversely proportional: with every digger at the same rate, twice as many diggers take half the time, so the number of diggers times the number of days is a constant, the same for both crews."
                },
                {
                  "step": "$2x = 40$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$x = 20$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "With $2$ diggers, the pond takes $20$ days.",
                  "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of days $8$ diggers take to dig $64$ metres of ditch, if $6$ diggers dig $40$ metres of ditch in $5$ days and every digger works at the same rate.",
            "lines": [
              {
                "step": "Find the number of days $8$ diggers take to dig $64$ metres of ditch, if $6$ diggers dig $40$ metres of ditch in $5$ days and every digger works at the same rate.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of days.",
                "reason": "Defining the unknown: the letter stands for the number the question asks for."
              },
              {
                "step": "$\\dfrac{40}{(6)(5)} = \\dfrac{64}{(8)x}$",
                "reason": "Jointly proportional: the number of metres of ditch is jointly proportional to the number of diggers and the number of days, so the metres of ditch divided by the product of diggers and days is a constant, the same for both crews."
              },
              {
                "step": "$\\dfrac{40}{30} = \\dfrac{64}{8x}$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$40 \\cdot 8x = 30 \\cdot 64$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$320x = 1920$",
                "reason": "Product of positive rational numbers: the whole numbers on each side are multiplied."
              },
              {
                "step": "$x = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $320$ leaves $x$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "With $8$ diggers, the $64$ metres of ditch take $6$ days.",
                "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of pickers who pick $75$ crates of apples in $5$ hours, if $4$ pickers pick $30$ crates of apples in $3$ hours and every picker works at the same rate.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the number of pickers who pick $75$ crates of apples in $5$ hours, if $4$ pickers pick $30$ crates of apples in $3$ hours and every picker works at the same rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of pickers.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for."
                },
                {
                  "step": "$\\dfrac{30}{(4)(3)} = \\dfrac{75}{x(5)}$",
                  "reason": "Jointly proportional: the number of crates of apples is jointly proportional to the number of pickers and the number of hours, so the crates of apples divided by the product of pickers and hours is a constant, the same for both crews."
                },
                {
                  "step": "$\\dfrac{30}{12} = \\dfrac{75}{5x}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$30 \\cdot 5x = 12 \\cdot 75$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$150x = 900$",
                  "reason": "Product of positive rational numbers: the whole numbers on each side are multiplied."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $150$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "It takes $6$ pickers to pick $75$ crates of apples in $5$ hours.",
                  "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
                }
              ]
            },
            {
              "prompt": "Find the number of pages $3$ typists type in $10$ hours, if $5$ typists type $40$ pages in $4$ hours and every typist works at the same rate.",
              "form": "Answer as a number, or equivalent.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find the number of pages $3$ typists type in $10$ hours, if $5$ typists type $40$ pages in $4$ hours and every typist works at the same rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of pages.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for."
                },
                {
                  "step": "$\\dfrac{40}{(5)(4)} = \\dfrac{x}{(3)(10)}$",
                  "reason": "Jointly proportional: the number of pages is jointly proportional to the number of typists and the number of hours, so the pages divided by the product of typists and hours is a constant, the same for both crews."
                },
                {
                  "step": "$\\dfrac{40}{20} = \\dfrac{x}{30}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$20x = 40 \\cdot 30$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$20x = 1200$",
                  "reason": "Product of positive rational numbers: the whole numbers on each side are multiplied."
                },
                {
                  "step": "$x = 60$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $20$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "In $10$ hours, $3$ typists type $60$ pages.",
                  "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
                }
              ]
            },
            {
              "prompt": "Find the number of hours $5$ bakers take to bake $45$ loaves, if $3$ bakers bake $18$ loaves in $2$ hours and every baker works at the same rate.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of hours $5$ bakers take to bake $45$ loaves, if $3$ bakers bake $18$ loaves in $2$ hours and every baker works at the same rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of hours.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for."
                },
                {
                  "step": "$\\dfrac{18}{(3)(2)} = \\dfrac{45}{(5)x}$",
                  "reason": "Jointly proportional: the number of loaves is jointly proportional to the number of bakers and the number of hours, so the loaves divided by the product of bakers and hours is a constant, the same for both crews."
                },
                {
                  "step": "$\\dfrac{18}{6} = \\dfrac{45}{5x}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$18 \\cdot 5x = 6 \\cdot 45$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$90x = 270$",
                  "reason": "Product of positive rational numbers: the whole numbers on each side are multiplied."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $90$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "With $5$ bakers, the $45$ loaves take $3$ hours.",
                  "reason": "Answering the question asked: the value of $x$ is put back into the words of the question."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t121-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $z$ when $x = 2$ and $y = 5$, if $z$ is jointly proportional to $x$ and the square of $y$, and $z = 72$ when $x = 4$ and $y = 3$.",
            "lines": [
              {
                "step": "Find $z$ when $x = 2$ and $y = 5$, if $z$ is jointly proportional to $x$ and the square of $y$, and $z = 72$ when $x = 4$ and $y = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z = axy^2$",
                "reason": "Jointly proportional: $z$ is a constant times the product of $x$ and $y^2$, with $a$ the constant of proportionality."
              },
              {
                "step": "$72 = a(4)(3)^2$",
                "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
              },
              {
                "step": "$72 = 36a$",
                "reason": "Order of operations: the power is worked out before the multiplication."
              },
              {
                "step": "$a = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $36$ leaves $a$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$z = 2xy^2$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = 2xy^2$ holds for every pair."
              },
              {
                "step": "$z = 2(2)(5)^2$",
                "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
              },
              {
                "step": "$z = 2 \\cdot 2 \\cdot 25$",
                "reason": "Order of operations: the power is worked out before the multiplication."
              },
              {
                "step": "$z = 100$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $z$ when $x = 3$ and $y = 4$, if $z$ is jointly proportional to the square of $x$ and $y$, and $z = 20$ when $x = 2$ and $y = 10$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find $z$ when $x = 3$ and $y = 4$, if $z$ is jointly proportional to the square of $x$ and $y$, and $z = 20$ when $x = 2$ and $y = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = ax^2y$",
                  "reason": "Jointly proportional: $z$ is a constant times the product of $x^2$ and $y$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$20 = a(2)^2(10)$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$20 = 40a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $40$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = \\dfrac{1}{2}x^2y$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = \\dfrac{1}{2}x^2y$ holds for every pair."
                },
                {
                  "step": "$z = \\dfrac{1}{2}(3)^2(4)$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$z = \\dfrac{1}{2} \\cdot 9 \\cdot 4$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$z = 18$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            },
            {
              "prompt": "Find $z$ when $x = 2$ and $y = 4$, if $z$ is jointly proportional to $x$ and the square of $y$, and $z = 90$ when $x = 5$ and $y = 3$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "64",
              "lines": [
                {
                  "step": "Find $z$ when $x = 2$ and $y = 4$, if $z$ is jointly proportional to $x$ and the square of $y$, and $z = 90$ when $x = 5$ and $y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = axy^2$",
                  "reason": "Jointly proportional: $z$ is a constant times the product of $x$ and $y^2$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$90 = a(5)(3)^2$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$90 = 45a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $45$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = 2xy^2$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = 2xy^2$ holds for every pair."
                },
                {
                  "step": "$z = 2(2)(4)^2$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$z = 2 \\cdot 2 \\cdot 16$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$z = 64$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            },
            {
              "prompt": "Find $z$ when $x = 3$ and $y = 5$, if $z$ is jointly proportional to the square of $x$ and $y$, and $z = 96$ when $x = 4$ and $y = 2$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "135",
              "lines": [
                {
                  "step": "Find $z$ when $x = 3$ and $y = 5$, if $z$ is jointly proportional to the square of $x$ and $y$, and $z = 96$ when $x = 4$ and $y = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = ax^2y$",
                  "reason": "Jointly proportional: $z$ is a constant times the product of $x^2$ and $y$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$96 = a(4)^2(2)$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$96 = 32a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $32$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = 3x^2y$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = 3x^2y$ holds for every pair."
                },
                {
                  "step": "$z = 3(3)^2(5)$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$z = 3 \\cdot 9 \\cdot 5$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$z = 135$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $z$ is multiplied by, if $z$ is jointly proportional to $x$ and the square of $y$ and inversely proportional to $d$, and $x$ is multiplied by $2$, $y$ is multiplied by $3$ and $d$ is divided by $2$.",
            "lines": [
              {
                "step": "Find the number $z$ is multiplied by, if $z$ is jointly proportional to $x$ and the square of $y$ and inversely proportional to $d$, and $x$ is multiplied by $2$, $y$ is multiplied by $3$ and $d$ is divided by $2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z = \\dfrac{axy^2}{d}$",
                "reason": "Jointly proportional: $z$ is directly proportional to the letters on top and inversely proportional to the one below, so $z$ is $a$ times the top letters divided by the letter below, with $a$ the constant of proportionality."
              },
              {
                "step": "The new value of $z$ is $\\dfrac{a(2x)(3y)^2}{\\left(\\dfrac{d}{2}\\right)}$.",
                "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
              },
              {
                "step": "$\\dfrac{a(2x)(3y)^2}{\\left(\\dfrac{d}{2}\\right)} = \\dfrac{18}{\\frac{1}{2}} \\cdot \\dfrac{axy^2}{d}$",
                "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers are gathered in front, top over bottom."
              },
              {
                "step": "The new value of $z$ is $36 \\cdot \\dfrac{axy^2}{d}$, which is $36z$.",
                "reason": "Division of rational numbers: dividing by a fraction is multiplying by the fraction turned over, so $\\dfrac{18}{\\frac{1}{2}} = 36$; by line 2 the fraction that is left is $z$."
              },
              {
                "step": "So $z$ is multiplied by $36$.",
                "reason": "Answering the question asked: the new value is the old value of $z$ times that number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $z$ is multiplied by, if $z$ is directly proportional to $x$ and inversely proportional to the square of $d$, and $x$ is multiplied by $5$ and $d$ is divided by $2$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the number $z$ is multiplied by, if $z$ is directly proportional to $x$ and inversely proportional to the square of $d$, and $x$ is multiplied by $5$ and $d$ is divided by $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ax}{d^2}$",
                  "reason": "Jointly proportional: $z$ is directly proportional to the letters on top and inversely proportional to the one below, so $z$ is $a$ times the top letters divided by the letter below, with $a$ the constant of proportionality."
                },
                {
                  "step": "The new value of $z$ is $\\dfrac{a(5x)}{\\left(\\dfrac{d}{2}\\right)^2}$.",
                  "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
                },
                {
                  "step": "$\\dfrac{a(5x)}{\\left(\\dfrac{d}{2}\\right)^2} = \\dfrac{5}{\\frac{1}{4}} \\cdot \\dfrac{ax}{d^2}$",
                  "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers are gathered in front, top over bottom."
                },
                {
                  "step": "The new value of $z$ is $20 \\cdot \\dfrac{ax}{d^2}$, which is $20z$.",
                  "reason": "Division of rational numbers: dividing by a fraction is multiplying by the fraction turned over, so $\\dfrac{5}{\\frac{1}{4}} = 20$; by line 2 the fraction that is left is $z$."
                },
                {
                  "step": "So $z$ is multiplied by $20$.",
                  "reason": "Answering the question asked: the new value is the old value of $z$ times that number."
                }
              ]
            },
            {
              "prompt": "Find the number $z$ is multiplied by, if $z$ is jointly proportional to the square of $x$ and $y$ and inversely proportional to $d$, and $x$ is divided by $2$, $y$ is multiplied by $6$ and $d$ is multiplied by $3$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "1/2",
              "lines": [
                {
                  "step": "Find the number $z$ is multiplied by, if $z$ is jointly proportional to the square of $x$ and $y$ and inversely proportional to $d$, and $x$ is divided by $2$, $y$ is multiplied by $6$ and $d$ is multiplied by $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ax^2y}{d}$",
                  "reason": "Jointly proportional: $z$ is directly proportional to the letters on top and inversely proportional to the one below, so $z$ is $a$ times the top letters divided by the letter below, with $a$ the constant of proportionality."
                },
                {
                  "step": "The new value of $z$ is $\\dfrac{a\\left(\\dfrac{x}{2}\\right)^2(6y)}{(3d)}$.",
                  "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
                },
                {
                  "step": "$\\dfrac{a\\left(\\dfrac{x}{2}\\right)^2(6y)}{(3d)} = \\dfrac{\\frac{3}{2}}{3} \\cdot \\dfrac{ax^2y}{d}$",
                  "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers are gathered in front, top over bottom."
                },
                {
                  "step": "The new value of $z$ is $\\dfrac{1}{2} \\cdot \\dfrac{ax^2y}{d}$, which is $\\dfrac{1}{2}z$.",
                  "reason": "Division of rational numbers: dividing by a fraction is multiplying by the fraction turned over, so $\\dfrac{\\frac{3}{2}}{3} = \\dfrac{1}{2}$; by line 2 the fraction that is left is $z$."
                },
                {
                  "step": "So $z$ is multiplied by $\\dfrac{1}{2}$.",
                  "reason": "Answering the question asked: the new value is the old value of $z$ times that number."
                }
              ]
            },
            {
              "prompt": "Find the number $z$ is multiplied by, if $z$ is jointly proportional to $x$ and $y$ and inversely proportional to the square of $d$, and $x$ is multiplied by $4$, $y$ is divided by $2$ and $d$ is divided by $3$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find the number $z$ is multiplied by, if $z$ is jointly proportional to $x$ and $y$ and inversely proportional to the square of $d$, and $x$ is multiplied by $4$, $y$ is divided by $2$ and $d$ is divided by $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{axy}{d^2}$",
                  "reason": "Jointly proportional: $z$ is directly proportional to the letters on top and inversely proportional to the one below, so $z$ is $a$ times the top letters divided by the letter below, with $a$ the constant of proportionality."
                },
                {
                  "step": "The new value of $z$ is $\\dfrac{a(4x)\\left(\\dfrac{y}{2}\\right)}{\\left(\\dfrac{d}{3}\\right)^2}$.",
                  "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
                },
                {
                  "step": "$\\dfrac{a(4x)\\left(\\dfrac{y}{2}\\right)}{\\left(\\dfrac{d}{3}\\right)^2} = \\dfrac{2}{\\frac{1}{9}} \\cdot \\dfrac{axy}{d^2}$",
                  "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers are gathered in front, top over bottom."
                },
                {
                  "step": "The new value of $z$ is $18 \\cdot \\dfrac{axy}{d^2}$, which is $18z$.",
                  "reason": "Division of rational numbers: dividing by a fraction is multiplying by the fraction turned over, so $\\dfrac{2}{\\frac{1}{9}} = 18$; by line 2 the fraction that is left is $z$."
                },
                {
                  "step": "So $z$ is multiplied by $18$.",
                  "reason": "Answering the question asked: the new value is the old value of $z$ times that number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $3xz = 2yd^2$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
            "lines": [
              {
                "step": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $3xz = 2yd^2$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{x}{y} = \\dfrac{2d^2}{3z}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3yz$, which is positive, puts $x$ and $y$ on the left and the fixed letters on the right."
              },
              {
                "step": "The right side holds only $z$ and $d$, so it is a fixed number.",
                "reason": "Varying one quantity while the others are held constant: with $z$ and $d$ held fixed, an expression in $z$ and $d$ alone does not change."
              },
              {
                "step": "The quotient $\\dfrac{x}{y}$ is fixed, so $x$ is directly proportional to $y$.",
                "reason": "Directly proportional: for $y$ other than $0$, $x = ay$ with $a$ a constant other than $0$ says the same as $\\dfrac{x}{y} = a$."
              },
              {
                "step": "$a = \\dfrac{2d^2}{3z}$",
                "reason": "Constant of proportionality: the fixed number in the proportion is $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $5xyd = 4z$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*z/(5*d)",
              "lines": [
                {
                  "step": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $5xyd = 4z$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = \\dfrac{4z}{5d}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5d$, which is positive, puts $x$ and $y$ on the left and the fixed letters on the right."
                },
                {
                  "step": "The right side holds only $z$ and $d$, so it is a fixed number.",
                  "reason": "Varying one quantity while the others are held constant: with $z$ and $d$ held fixed, an expression in $z$ and $d$ alone does not change."
                },
                {
                  "step": "The product $xy$ is fixed, so $x$ and $y$ are inversely proportional.",
                  "reason": "Inversely proportional: two quantities are inversely proportional when their product is a constant."
                },
                {
                  "step": "$a = \\dfrac{4z}{5d}$",
                  "reason": "Constant of proportionality: the fixed number in the proportion is $a$."
                }
              ]
            },
            {
              "prompt": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $2xd = 7yz^2$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "7*z^2/(2*d)",
              "lines": [
                {
                  "step": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $2xd = 7yz^2$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{7z^2}{2d}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2yd$, which is positive, puts $x$ and $y$ on the left and the fixed letters on the right."
                },
                {
                  "step": "The right side holds only $z$ and $d$, so it is a fixed number.",
                  "reason": "Varying one quantity while the others are held constant: with $z$ and $d$ held fixed, an expression in $z$ and $d$ alone does not change."
                },
                {
                  "step": "The quotient $\\dfrac{x}{y}$ is fixed, so $x$ is directly proportional to $y$.",
                  "reason": "Directly proportional: for $y$ other than $0$, $x = ay$ with $a$ a constant other than $0$ says the same as $\\dfrac{x}{y} = a$."
                },
                {
                  "step": "$a = \\dfrac{7z^2}{2d}$",
                  "reason": "Constant of proportionality: the fixed number in the proportion is $a$."
                }
              ]
            },
            {
              "prompt": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $xyz^2 = 6d$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "6*d/z^2",
              "lines": [
                {
                  "step": "Find the number $a$, in terms of $z$ and $d$, for which $x = ay$ or $xy = a$, if $x$, $y$, $z$ and $d$ are positive, $xyz^2 = 6d$, and $z$ and $d$ are held fixed while $x$ and $y$ vary.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = \\dfrac{6d}{z^2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $z^2$, which is positive, puts $x$ and $y$ on the left and the fixed letters on the right."
                },
                {
                  "step": "The right side holds only $z$ and $d$, so it is a fixed number.",
                  "reason": "Varying one quantity while the others are held constant: with $z$ and $d$ held fixed, an expression in $z$ and $d$ alone does not change."
                },
                {
                  "step": "The product $xy$ is fixed, so $x$ and $y$ are inversely proportional.",
                  "reason": "Inversely proportional: two quantities are inversely proportional when their product is a constant."
                },
                {
                  "step": "$a = \\dfrac{6d}{z^2}$",
                  "reason": "Constant of proportionality: the fixed number in the proportion is $a$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $y$ when $z = 2$ and $x = 3$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 6$ when $x = 4$ and $y = 2$.",
            "lines": [
              {
                "step": "Find $y$ when $z = 2$ and $x = 3$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 6$ when $x = 4$ and $y = 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z = \\dfrac{ax}{y}$",
                "reason": "Jointly proportional: $z$ is directly proportional to $x$ and inversely proportional to $y$, so $z$ is jointly proportional to $x$ and $\\frac{1}{y}$, with $a$ the constant of proportionality."
              },
              {
                "step": "$6 = \\dfrac{a(4)}{(2)}$",
                "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
              },
              {
                "step": "$12 = a(4)$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ clears the fraction."
              },
              {
                "step": "$12 = 4a$",
                "reason": "The commutative law of multiplication: the number is written in front of $a$."
              },
              {
                "step": "$a = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $a$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$z = \\dfrac{3x}{y}$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = \\dfrac{3x}{y}$ holds for every pair."
              },
              {
                "step": "$2 = \\dfrac{3(3)}{y}$",
                "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
              },
              {
                "step": "$2 = \\dfrac{9}{y}$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              },
              {
                "step": "$2y = 9$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $y$, which is not $0$, clears the fraction."
              },
              {
                "step": "$y = \\dfrac{9}{2}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone, and the quotient is written in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$ when $z = 4$ and $x = 2$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 10$ when $x = 5$ and $y = 3$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find $y$ when $z = 4$ and $x = 2$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 10$ when $x = 5$ and $y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ax}{y}$",
                  "reason": "Jointly proportional: $z$ is directly proportional to $x$ and inversely proportional to $y$, so $z$ is jointly proportional to $x$ and $\\frac{1}{y}$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$10 = \\dfrac{a(5)}{(3)}$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$30 = a(5)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ clears the fraction."
                },
                {
                  "step": "$30 = 5a$",
                  "reason": "The commutative law of multiplication: the number is written in front of $a$."
                },
                {
                  "step": "$a = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = \\dfrac{6x}{y}$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = \\dfrac{6x}{y}$ holds for every pair."
                },
                {
                  "step": "$4 = \\dfrac{6(2)}{y}$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$4 = \\dfrac{12}{y}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$4y = 12$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $y$, which is not $0$, clears the fraction."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone, and the quotient is written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $z = 5$ and $x = 4$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 8$ when $x = 2$ and $y = 5$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find $y$ when $z = 5$ and $x = 4$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 8$ when $x = 2$ and $y = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ax}{y}$",
                  "reason": "Jointly proportional: $z$ is directly proportional to $x$ and inversely proportional to $y$, so $z$ is jointly proportional to $x$ and $\\frac{1}{y}$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$8 = \\dfrac{a(2)}{(5)}$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$40 = a(2)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ clears the fraction."
                },
                {
                  "step": "$40 = 2a$",
                  "reason": "The commutative law of multiplication: the number is written in front of $a$."
                },
                {
                  "step": "$a = 20$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = \\dfrac{20x}{y}$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = \\dfrac{20x}{y}$ holds for every pair."
                },
                {
                  "step": "$5 = \\dfrac{20(4)}{y}$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$5 = \\dfrac{80}{y}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$5y = 80$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $y$, which is not $0$, clears the fraction."
                },
                {
                  "step": "$y = 16$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone, and the quotient is written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $z = 6$ and $x = 5$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 9$ when $x = 3$ and $y = 4$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find $y$ when $z = 6$ and $x = 5$, if $z$ is directly proportional to $x$ and inversely proportional to $y$, and $z = 9$ when $x = 3$ and $y = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ax}{y}$",
                  "reason": "Jointly proportional: $z$ is directly proportional to $x$ and inversely proportional to $y$, so $z$ is jointly proportional to $x$ and $\\frac{1}{y}$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$9 = \\dfrac{a(3)}{(4)}$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$36 = a(3)$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ clears the fraction."
                },
                {
                  "step": "$36 = 3a$",
                  "reason": "The commutative law of multiplication: the number is written in front of $a$."
                },
                {
                  "step": "$a = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = \\dfrac{12x}{y}$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = \\dfrac{12x}{y}$ holds for every pair."
                },
                {
                  "step": "$6 = \\dfrac{12(5)}{y}$",
                  "reason": "Substituting a value: the given values go, in brackets, in place of the letters."
                },
                {
                  "step": "$6 = \\dfrac{60}{y}$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                },
                {
                  "step": "$6y = 60$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $y$, which is not $0$, clears the fraction."
                },
                {
                  "step": "$y = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $y$ alone, and the quotient is written in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the positive number $c$ that keeps $z$ the same when $x$ is multiplied by $9$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is jointly proportional to $x$ and the square of $y$.",
            "lines": [
              {
                "step": "Find the positive number $c$ that keeps $z$ the same when $x$ is multiplied by $9$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is jointly proportional to $x$ and the square of $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z = axy^2$",
                "reason": "Jointly proportional: $z$ is $a$ times the letters it is directly proportional to, divided by those it is inversely proportional to, with $a$ the constant of proportionality."
              },
              {
                "step": "The new value of $z$ is $a(9x)(cy)^2$.",
                "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
              },
              {
                "step": "$a(9x)(cy)^2 = 9c^2 \\cdot axy^2$",
                "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers and $c^2$ are gathered in front."
              },
              {
                "step": "$9c^2 \\cdot axy^2 = axy^2$",
                "reason": "Writing a sentence as an equation: \"keeps $z$ the same\" makes the new value equal to the old one."
              },
              {
                "step": "$9c^2 = 1$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $axy^2$, which is $z$ and positive, leaves the number in front."
              },
              {
                "step": "$c^2 = \\dfrac{1}{9}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ leaves $c^2$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$c = \\dfrac{1}{3}$",
                "reason": "Positive square root: $c$ is positive, so $c$ is the positive square root of the right side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the positive number $c$ that keeps $z$ the same when $x$ is multiplied by $4$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is directly proportional to the square of $y$ and inversely proportional to $x$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the positive number $c$ that keeps $z$ the same when $x$ is multiplied by $4$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is directly proportional to the square of $y$ and inversely proportional to $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ay^2}{x}$",
                  "reason": "Jointly proportional: $z$ is $a$ times the letters it is directly proportional to, divided by those it is inversely proportional to, with $a$ the constant of proportionality."
                },
                {
                  "step": "The new value of $z$ is $\\dfrac{a(cy)^2}{(4x)}$.",
                  "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
                },
                {
                  "step": "$\\dfrac{a(cy)^2}{(4x)} = \\dfrac{1}{4}c^2 \\cdot \\dfrac{ay^2}{x}$",
                  "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers and $c^2$ are gathered in front."
                },
                {
                  "step": "$\\dfrac{1}{4}c^2 \\cdot \\dfrac{ay^2}{x} = \\dfrac{ay^2}{x}$",
                  "reason": "Writing a sentence as an equation: \"keeps $z$ the same\" makes the new value equal to the old one."
                },
                {
                  "step": "$\\dfrac{1}{4}c^2 = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $\\dfrac{ay^2}{x}$, which is $z$ and positive, leaves the number in front."
                },
                {
                  "step": "$c^2 = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $\\dfrac{1}{4}$ leaves $c^2$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$c = 2$",
                  "reason": "Positive square root: $c$ is positive, so $c$ is the positive square root of the right side."
                }
              ]
            },
            {
              "prompt": "Find the positive number $c$ that keeps $z$ the same when $x$ is divided by $3$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is jointly proportional to $x$ and the square of $y$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(3)",
              "lines": [
                {
                  "step": "Find the positive number $c$ that keeps $z$ the same when $x$ is divided by $3$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is jointly proportional to $x$ and the square of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = axy^2$",
                  "reason": "Jointly proportional: $z$ is $a$ times the letters it is directly proportional to, divided by those it is inversely proportional to, with $a$ the constant of proportionality."
                },
                {
                  "step": "The new value of $z$ is $a\\left(\\dfrac{x}{3}\\right)(cy)^2$.",
                  "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
                },
                {
                  "step": "$a\\left(\\dfrac{x}{3}\\right)(cy)^2 = \\dfrac{1}{3}c^2 \\cdot axy^2$",
                  "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers and $c^2$ are gathered in front."
                },
                {
                  "step": "$\\dfrac{1}{3}c^2 \\cdot axy^2 = axy^2$",
                  "reason": "Writing a sentence as an equation: \"keeps $z$ the same\" makes the new value equal to the old one."
                },
                {
                  "step": "$\\dfrac{1}{3}c^2 = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $axy^2$, which is $z$ and positive, leaves the number in front."
                },
                {
                  "step": "$c^2 = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $\\dfrac{1}{3}$ leaves $c^2$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$c = \\sqrt{3}$",
                  "reason": "Positive square root: $c$ is positive, so $c$ is the positive square root of the right side."
                }
              ]
            },
            {
              "prompt": "Find the positive number $c$ that keeps $z$ the same when $x$ is multiplied by $5$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is directly proportional to the square of $y$ and inversely proportional to the square of $x$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the positive number $c$ that keeps $z$ the same when $x$ is multiplied by $5$ and $y$ is multiplied by $c$, if $x$, $y$ and $z$ are positive and $z$ is directly proportional to the square of $y$ and inversely proportional to the square of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = \\dfrac{ay^2}{x^2}$",
                  "reason": "Jointly proportional: $z$ is $a$ times the letters it is directly proportional to, divided by those it is inversely proportional to, with $a$ the constant of proportionality."
                },
                {
                  "step": "The new value of $z$ is $\\dfrac{a(cy)^2}{(5x)^2}$.",
                  "reason": "Substituting a value: each new value goes, in brackets, in place of its letter."
                },
                {
                  "step": "$\\dfrac{a(cy)^2}{(5x)^2} = \\dfrac{1}{25}c^2 \\cdot \\dfrac{ay^2}{x^2}$",
                  "reason": "Power of a product: each power of a bracket is the power of its number times the power of its letter, and the numbers and $c^2$ are gathered in front."
                },
                {
                  "step": "$\\dfrac{1}{25}c^2 \\cdot \\dfrac{ay^2}{x^2} = \\dfrac{ay^2}{x^2}$",
                  "reason": "Writing a sentence as an equation: \"keeps $z$ the same\" makes the new value equal to the old one."
                },
                {
                  "step": "$\\dfrac{1}{25}c^2 = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $\\dfrac{ay^2}{x^2}$, which is $z$ and positive, leaves the number in front."
                },
                {
                  "step": "$c^2 = 25$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $\\dfrac{1}{25}$ leaves $c^2$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$c = 5$",
                  "reason": "Positive square root: $c$ is positive, so $c$ is the positive square root of the right side."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t121-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working that finds $y$ when $x = 22$, if $y$ is inversely proportional to $x$ and $y = 11$ when $x = 4$, and write that line right.",
            "given": [
              "$y = \\dfrac{a}{x}$",
              "$\\dfrac{a}{4} = y = 11$",
              "$\\dfrac{a}{4} = 11 \\cdot 4 = 44$",
              "$y = \\dfrac{44}{22}$",
              "$y = 2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that finds $y$ when $x = 22$, if $y$ is inversely proportional to $x$ and $y = 11$ when $x = 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 multiplies the right side alone by $4$ and runs on with a second equals sign, so it states $\\dfrac{a}{4} = 44$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $11$."
              },
              {
                "step": "Multiplying both sides of line 2 by $4$ gives $a = 44$.",
                "reason": "Multiplying both sides by the same number: the two sides stay equal."
              },
              {
                "step": "Line 3 written right is $a = 44$.",
                "reason": "Each side of the line before it has the same thing done to it, and nothing else."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that finds $y$ when $x = 10$, if $y$ is inversely proportional to $x$ and $y = 8$ when $x = 5$, and write that line right.",
              "given": [
                "$xy = a$",
                "$y = \\dfrac{xy}{x} = \\dfrac{a}{x}$",
                "$\\dfrac{a}{5} = 8$",
                "$\\dfrac{a}{5} = 8 \\cdot 5 = 40$",
                "$y = \\dfrac{40}{10}$",
                "$y = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: a = 40",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that finds $y$ when $x = 10$, if $y$ is inversely proportional to $x$ and $y = 8$ when $x = 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies the right side alone by $5$ and runs on with a second equals sign, so it states $\\dfrac{a}{5} = 40$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side is $8$."
                },
                {
                  "step": "Multiplying both sides of line 3 by $5$ gives $a = 40$.",
                  "reason": "Multiplying both sides by the same number: the two sides stay equal."
                },
                {
                  "step": "Line 4 written right is $a = 40$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that finds $y$ when $x = 3$, if $y$ is inversely proportional to $x$ and $y = 13$ when $x = 6$, and write that line right.",
              "given": [
                "$y = \\dfrac{a}{x}$",
                "$\\dfrac{a}{6} = y = 13$",
                "$\\dfrac{a}{6} = 13 \\cdot 6 = 78$",
                "$y = \\dfrac{78}{3}$",
                "$y = 26$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: a = 78",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that finds $y$ when $x = 3$, if $y$ is inversely proportional to $x$ and $y = 13$ when $x = 6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies the right side alone by $6$ and runs on with a second equals sign, so it states $\\dfrac{a}{6} = 78$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $13$."
                },
                {
                  "step": "Multiplying both sides of line 2 by $6$ gives $a = 78$.",
                  "reason": "Multiplying both sides by the same number: the two sides stay equal."
                },
                {
                  "step": "Line 3 written right is $a = 78$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that finds $y$ when $x = 15$, if $y$ is inversely proportional to $x$ and $y = 5$ when $x = 6$, and write that line right.",
              "given": [
                "$xy = a$",
                "$y = \\dfrac{xy}{x} = \\dfrac{a}{x}$",
                "$\\dfrac{a}{6} = 5$",
                "$\\dfrac{a}{6} = 5 \\cdot 6 = 30$",
                "$y = \\dfrac{30}{15}$",
                "$y = 2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: a = 30",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that finds $y$ when $x = 15$, if $y$ is inversely proportional to $x$ and $y = 5$ when $x = 6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies the right side alone by $6$ and runs on with a second equals sign, so it states $\\dfrac{a}{6} = 30$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side is $5$."
                },
                {
                  "step": "Multiplying both sides of line 3 by $6$ gives $a = 30$.",
                  "reason": "Multiplying both sides by the same number: the two sides stay equal."
                },
                {
                  "step": "Line 4 written right is $a = 30$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working that finds $y$ when $x = 5$, if $y$ is inversely proportional to $x$ and $y = 10$ when $x = 3$, and write that line right.",
            "given": [
              "$xy = a$",
              "$a = 3 \\cdot 10 = 30$",
              "$5y = 30$",
              "$5y = \\dfrac{30}{5} = 6$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working that finds $y$ when $x = 5$, if $y$ is inversely proportional to $x$ and $y = 10$ when $x = 3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 divides the right side alone by $5$ and runs on with a second equals sign, so it states $5y = 6$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side is $30$."
              },
              {
                "step": "Dividing both sides of line 3 by $5$ gives $y = 6$.",
                "reason": "Dividing both sides by a nonzero number: the two sides stay equal."
              },
              {
                "step": "Line 4 written right is $y = 6$.",
                "reason": "Each side of the line before it has the same thing done to it, and nothing else."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working that finds $y$ when $x = 2$, if $y$ is inversely proportional to $x$ and $y = 7$ when $x = 4$, and write that line right.",
              "given": [
                "$xy = a$",
                "$a = xy = 4 \\cdot 7$",
                "$a = 28$",
                "$2y = 28$",
                "$2y = \\dfrac{28}{2} = 14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = 14",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that finds $y$ when $x = 2$, if $y$ is inversely proportional to $x$ and $y = 7$ when $x = 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 divides the right side alone by $2$ and runs on with a second equals sign, so it states $2y = 14$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 4 the left side is $28$."
                },
                {
                  "step": "Dividing both sides of line 4 by $2$ gives $y = 14$.",
                  "reason": "Dividing both sides by a nonzero number: the two sides stay equal."
                },
                {
                  "step": "Line 5 written right is $y = 14$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that finds $x$ when $y = 3$, if $x$ is inversely proportional to $y$ and $x = 6$ when $y = 5$, and write that line right.",
              "given": [
                "$xy = a$",
                "$a = 5 \\cdot 6 = 30$",
                "$3x = 30$",
                "$3x = \\dfrac{30}{3} = 10$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x = 10",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that finds $x$ when $y = 3$, if $x$ is inversely proportional to $y$ and $x = 6$ when $y = 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 divides the right side alone by $3$ and runs on with a second equals sign, so it states $3x = 10$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 3 the left side is $30$."
                },
                {
                  "step": "Dividing both sides of line 3 by $3$ gives $x = 10$.",
                  "reason": "Dividing both sides by a nonzero number: the two sides stay equal."
                },
                {
                  "step": "Line 4 written right is $x = 10$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working that finds $y$ when $x = 6$, if $y$ is inversely proportional to $x$ and $y = 9$ when $x = 8$, and write that line right.",
              "given": [
                "$xy = a$",
                "$a = xy = 8 \\cdot 9$",
                "$a = 72$",
                "$6y = 72$",
                "$6y = \\dfrac{72}{6} = 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: y = 12",
              "lines": [
                {
                  "step": "Find the first wrong line in this working that finds $y$ when $x = 6$, if $y$ is inversely proportional to $x$ and $y = 9$ when $x = 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 divides the right side alone by $6$ and runs on with a second equals sign, so it states $6y = 12$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 4 the left side is $72$."
                },
                {
                  "step": "Dividing both sides of line 4 by $6$ gives $y = 12$.",
                  "reason": "Dividing both sides by a nonzero number: the two sides stay equal."
                },
                {
                  "step": "Line 5 written right is $y = 12$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t121-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation with $z$ alone on the left, with $a$ for the constant of proportionality: The number $z$ is jointly proportional to $x$ and $y$ and inversely proportional to the square of $d$.",
            "lines": [
              {
                "step": "Write this sentence as an equation with $z$ alone on the left, with $a$ for the constant of proportionality: The number $z$ is jointly proportional to $x$ and $y$ and inversely proportional to the square of $d$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of $d$ is $d^2$, and the product of $x$ and $y$ is $xy$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$z = \\dfrac{axy}{d^2}$",
                "reason": "Jointly proportional: the quantities named after \"directly proportional to\" multiply the constant of proportionality, and those named after \"inversely proportional to\" divide it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is inversely proportional to the square of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = a/x^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is inversely proportional to the square of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x$ is $x^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{a}{x^2}$",
                  "reason": "Inversely proportional: \"inversely proportional to\" makes the product of the first quantity and the quantity named the constant of proportionality, so the first quantity is $a$ divided by the quantity named."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is jointly proportional to $x$ and the square of $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = a*x*z^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is jointly proportional to $x$ and the square of $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $z$ is $z^2$, and the product of $x$ and $z^2$ is $xz^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = axz^2$",
                  "reason": "Jointly proportional: \"jointly proportional to\" makes the first quantity the constant of proportionality times the product of the quantities named."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is directly proportional to the square of $x$ and inversely proportional to $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = a*x^2/z",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is directly proportional to the square of $x$ and inversely proportional to $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x$ is $x^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = \\dfrac{ax^2}{z}$",
                  "reason": "Jointly proportional: the quantities named after \"directly proportional to\" multiply the constant of proportionality, and those named after \"inversely proportional to\" divide it."
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
      "id": "t121-p1",
      "method": "direct proof",
      "statement": "Let $x$, $y$ and $z$ be positive variable quantities. If $x$ and $y$ are inversely proportional, and $y$ and $z$ are inversely proportional, then $x$ and $z$ are directly proportional.",
      "idea": "Write each product as its own constant, divide the first product by the second so that $y$ cancels, and read off the quotient of the two constants.",
      "lines": [
        {
          "line": "Suppose $x$ and $y$ are inversely proportional, and $y$ and $z$ are inversely proportional.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $xy = a$ for a constant $a$.",
          "reason": "inversely proportional, on the first proportion"
        },
        {
          "line": "Also $yz = b$ for a constant $b$.",
          "reason": "inversely proportional, on the second proportion"
        },
        {
          "line": "The number $a$ is positive.",
          "reason": "the product of two positive numbers is positive, and $a = xy$"
        },
        {
          "line": "The number $b$ is positive.",
          "reason": "the product of two positive numbers is positive, and $b = yz$"
        },
        {
          "line": "So $\\dfrac{xy}{yz} = \\dfrac{a}{yz}$.",
          "reason": "dividing both sides by a nonzero number: $yz$ is positive"
        },
        {
          "line": "So $\\dfrac{xy}{yz} = \\dfrac{a}{b}$.",
          "reason": "substituting a value: by the third line $yz$ has the value $b$"
        },
        {
          "line": "So $\\dfrac{x}{z} = \\dfrac{a}{b}$.",
          "reason": "cancelling a common factor: $y$ is positive, so it is not $0$"
        },
        {
          "line": "So $x = \\dfrac{a}{b}z$.",
          "reason": "multiplying both sides by the same number: both sides times $z$"
        },
        {
          "line": "The number $\\dfrac{a}{b}$ is a constant other than $0$.",
          "reason": "the quotient of two positive constants is a positive constant, by the fourth and fifth lines"
        },
        {
          "line": "Therefore $x$ is directly proportional to $z$, with constant of proportionality $\\dfrac{a}{b}$.",
          "reason": "directly proportional, from the ninth and tenth lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t121-s1",
      "method": "direct proof",
      "statement": "Let $x$, $y$ and $z$ be variable quantities, none of them $0$. If $x$ and $y$ are inversely proportional, and $y$ is directly proportional to $z$, then $x$ and $z$ are inversely proportional.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x$ and $y$ are inversely proportional, and $y$ is directly proportional to $z$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $xy = a$ for a constant $a$.",
            "reason": "inversely proportional, on the first proportion"
          },
          {
            "line": "Also $y = bz$ for a constant $b$ other than $0$.",
            "reason": "directly proportional, on the second proportion"
          },
          {
            "line": "So $x(bz) = a$.",
            "reason": "substituting a value: by the third line $y$ has the value $bz$"
          },
          {
            "line": "So $b(xz) = a$.",
            "reason": "the commutative and associative laws of multiplication"
          },
          {
            "line": "So $xz = \\dfrac{a}{b}$.",
            "reason": "dividing both sides by a nonzero number: $b$ is not $0$"
          },
          {
            "line": "The number $\\dfrac{a}{b}$ is a constant.",
            "reason": "a quotient of two constants is a constant"
          },
          {
            "line": "Therefore $x$ and $z$ are inversely proportional, with constant of proportionality $\\dfrac{a}{b}$.",
            "reason": "inversely proportional, from the sixth and seventh lines"
          }
        ]
      }
    },
    {
      "id": "t121-s2",
      "method": "direct proof",
      "statement": "Let $x$, $y$ and $z$ be variable quantities, none of them $0$. If $x$ is jointly proportional to $y$ and $z$, and $z$ is directly proportional to $y$, then $x$ is directly proportional to $y^2$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x$ is jointly proportional to $y$ and $z$, and $z$ is directly proportional to $y$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x = ayz$ for a constant $a$.",
            "reason": "jointly proportional, on the first proportion"
          },
          {
            "line": "Also $z = by$ for a constant $b$ other than $0$.",
            "reason": "directly proportional, on the second proportion"
          },
          {
            "line": "So $x = ay(by)$.",
            "reason": "substituting a value: by the third line $z$ has the value $by$"
          },
          {
            "line": "So $x = (ab)y^2$.",
            "reason": "the commutative and associative laws of multiplication, and the product law $y \\cdot y = y^2$"
          },
          {
            "line": "The number $ab$ is a constant.",
            "reason": "a product of two constants is a constant"
          },
          {
            "line": "The number $ab$ is not $0$.",
            "reason": "by the fifth line, $ab = 0$ would make $x = 0 \\cdot y^2 = 0$, and $x$ is not $0$"
          },
          {
            "line": "Therefore $x$ is directly proportional to $y^2$, with constant of proportionality $ab$.",
            "reason": "directly proportional, from the fifth, sixth and seventh lines"
          }
        ]
      }
    },
    {
      "id": "t121-s3",
      "method": "direct proof",
      "statement": "Let $x$, $y$ and $z$ be variable quantities. If $x$ is jointly proportional to $y$ and $z$, and $y$ and $z$ are inversely proportional, then $x$ is a constant.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x$ is jointly proportional to $y$ and $z$, and $y$ and $z$ are inversely proportional.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x = ayz$ for a constant $a$.",
            "reason": "jointly proportional, on the first proportion"
          },
          {
            "line": "Also $yz = b$ for a constant $b$.",
            "reason": "inversely proportional, on the second proportion"
          },
          {
            "line": "So $x = a(yz)$.",
            "reason": "the associative law of multiplication"
          },
          {
            "line": "So $x = ab$.",
            "reason": "substituting a value: by the third line $yz$ has the value $b$"
          },
          {
            "line": "The number $ab$ is a constant.",
            "reason": "a product of two constants is a constant"
          },
          {
            "line": "Therefore $x$ is a constant, equal to $ab$ for every value of $y$ and $z$.",
            "reason": "from the fifth and sixth lines"
          }
        ]
      }
    }
  ]
}
