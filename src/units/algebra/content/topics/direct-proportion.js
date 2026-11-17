export default {
  "number": 120,
  "title": "Direct proportion",
  "section": 4,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "187-190, 204-207"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $y$ when $x = 14$, if $y$ is directly proportional to $x$ and $y = 12$ when $x = 8$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "21",
    "solution": [
      "Find $y$ when $x = 14$, if $y$ is directly proportional to $x$ and $y = 12$ when $x = 8$.",
      "$y = ax$",
      "$12 = a(8)$",
      "$a = \\dfrac{3}{2}$",
      "$y = \\dfrac{3}{2}x$",
      "$y = \\dfrac{3}{2}(14)$",
      "$y = 21$"
    ]
  },
  "ideas": [
    {
      "name": "Directly proportional",
      "concrete": "Pencils cost $3$ euros each. For $2$, $5$ and $8$ pencils the cost is $6$, $15$ and $24$ euros, and the cost over the number of pencils is $3$ every time: the cost is $3$ times the number of pencils.",
      "general": "For variable quantities $x$ and $y$, $x$ is **directly proportional** to $y$ when $x = ay$ for a constant $a$ other than $0$. For $y$ other than $0$ this is the same as saying the quotient $\\dfrac{x}{y}$ is the constant $a$. A power or another expression may stand in the place of $y$: $x$ is directly proportional to $y^2$ when $x = ay^2$."
    },
    {
      "name": "Constant of proportionality",
      "concrete": "From $x = 3y$ and one pair, $y = 5$ and $x = 15$, the quotient $\\dfrac{15}{5} = 3$ is the constant, and every other pair obeys $x = 3y$.",
      "general": "Where $x = ay$, the number $a$ is the **constant of proportionality**. It is the same for every pair of values, so one pair with $y$ other than $0$ fixes it, as $a = \\dfrac{x}{y}$, and the equation then gives $x$ for every $y$."
    }
  ],
  "kinds": [
    {
      "id": "t120-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $y$ when $x = 10$, if $y$ is directly proportional to $x$ and $y = 15$ when $x = 6$.",
            "lines": [
              {
                "step": "Find $y$ when $x = 10$, if $y$ is directly proportional to $x$ and $y = 15$ when $x = 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = ax$",
                "reason": "Directly proportional: $y$ is a constant multiple of $x$, with $a$ the constant of proportionality."
              },
              {
                "step": "$15 = a(6)$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$a = \\dfrac{5}{2}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $a$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$y = \\dfrac{5}{2}x$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $y = \\dfrac{5}{2}x$ holds for every pair."
              },
              {
                "step": "$y = \\dfrac{5}{2}(10)$",
                "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
              },
              {
                "step": "$y = 25$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$ when $x = 6$, if $y$ is directly proportional to $x$ and $y = 20$ when $x = 8$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find $y$ when $x = 6$, if $y$ is directly proportional to $x$ and $y = 20$ when $x = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = ax$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $x$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$20 = a(8)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$a = \\dfrac{5}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = \\dfrac{5}{2}x$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $y = \\dfrac{5}{2}x$ holds for every pair."
                },
                {
                  "step": "$y = \\dfrac{5}{2}(6)$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$y = 15$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            },
            {
              "prompt": "Find $z$ when $x = 20$, if $z$ is directly proportional to $x$ and $z = 9$ when $x = 12$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find $z$ when $x = 20$, if $z$ is directly proportional to $x$ and $z = 9$ when $x = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = ax$",
                  "reason": "Directly proportional: $z$ is a constant multiple of $x$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$9 = a(12)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$a = \\dfrac{3}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = \\dfrac{3}{4}x$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = \\dfrac{3}{4}x$ holds for every pair."
                },
                {
                  "step": "$z = \\dfrac{3}{4}(20)$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$z = 15$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $z = 18$, if $y$ is directly proportional to $z$ and $y = 14$ when $z = 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "63",
              "lines": [
                {
                  "step": "Find $y$ when $z = 18$, if $y$ is directly proportional to $z$ and $y = 14$ when $z = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = az$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $z$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$14 = a(4)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$a = \\dfrac{7}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = \\dfrac{7}{2}z$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $y = \\dfrac{7}{2}z$ holds for every pair."
                },
                {
                  "step": "$y = \\dfrac{7}{2}(18)$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$y = 63$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $y$ when $x = 3$, if $y$ is directly proportional to the square of $x$ and $y = 50$ when $x = 5$.",
            "lines": [
              {
                "step": "Find $y$ when $x = 3$, if $y$ is directly proportional to the square of $x$ and $y = 50$ when $x = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = ax^2$",
                "reason": "Directly proportional: $y$ is a constant multiple of $x^2$, with $a$ the constant of proportionality."
              },
              {
                "step": "$50 = a(5)^2$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$50 = 25a$",
                "reason": "Order of operations: the power is worked out before the multiplication."
              },
              {
                "step": "$a = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $25$ leaves $a$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$y = 2x^2$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $y = 2x^2$ holds for every pair."
              },
              {
                "step": "$y = 2(3)^2$",
                "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
              },
              {
                "step": "$y = 2 \\cdot 9$",
                "reason": "Order of operations: the power is worked out before the multiplication."
              },
              {
                "step": "$y = 18$",
                "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$ when $x = 10$, if $y$ is directly proportional to the square of $x$ and $y = 27$ when $x = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "75",
              "lines": [
                {
                  "step": "Find $y$ when $x = 10$, if $y$ is directly proportional to the square of $x$ and $y = 27$ when $x = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = ax^2$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $x^2$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$27 = a(6)^2$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$27 = 36a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = \\dfrac{3}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $36$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = \\dfrac{3}{4}x^2$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $y = \\dfrac{3}{4}x^2$ holds for every pair."
                },
                {
                  "step": "$y = \\dfrac{3}{4}(10)^2$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$y = \\dfrac{3}{4} \\cdot 100$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$y = 75$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            },
            {
              "prompt": "Find $z$ when $x = 3$, if $z$ is directly proportional to the cube of $x$ and $z = 16$ when $x = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "54",
              "lines": [
                {
                  "step": "Find $z$ when $x = 3$, if $z$ is directly proportional to the cube of $x$ and $z = 16$ when $x = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z = ax^3$",
                  "reason": "Directly proportional: $z$ is a constant multiple of $x^3$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$16 = a(2)^3$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$16 = 8a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z = 2x^3$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z = 2x^3$ holds for every pair."
                },
                {
                  "step": "$z = 2(3)^3$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$z = 2 \\cdot 27$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$z = 54$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $z = 6$, if $y$ is directly proportional to the square of $z$ and $y = 12$ when $z = 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "27",
              "lines": [
                {
                  "step": "Find $y$ when $z = 6$, if $y$ is directly proportional to the square of $z$ and $y = 12$ when $z = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = az^2$",
                  "reason": "Directly proportional: $y$ is a constant multiple of $z^2$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$12 = a(4)^2$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$12 = 16a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = \\dfrac{3}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $16$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$y = \\dfrac{3}{4}z^2$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $y = \\dfrac{3}{4}z^2$ holds for every pair."
                },
                {
                  "step": "$y = \\dfrac{3}{4}(6)^2$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$y = \\dfrac{3}{4} \\cdot 36$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$y = 27$",
                  "reason": "Product of positive rational numbers: the tops are multiplied and the bottoms are multiplied."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $y$ when $x = 9$, if the square of $x$ is directly proportional to $y$ and $x = 6$ when $y = 8$.",
            "lines": [
              {
                "step": "Find $y$ when $x = 9$, if the square of $x$ is directly proportional to $y$ and $x = 6$ when $y = 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 = ay$",
                "reason": "Directly proportional: $x^2$ is a constant multiple of $y$, with $a$ the constant of proportionality."
              },
              {
                "step": "$(6)^2 = a(8)$",
                "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
              },
              {
                "step": "$36 = 8a$",
                "reason": "Order of operations: the power is worked out before the multiplication."
              },
              {
                "step": "$a = \\dfrac{9}{2}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $a$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "$x^2 = \\dfrac{9}{2}y$",
                "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^2 = \\dfrac{9}{2}y$ holds for every pair."
              },
              {
                "step": "$(9)^2 = \\dfrac{9}{2}y$",
                "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
              },
              {
                "step": "$81 = \\dfrac{9}{2}y$",
                "reason": "Order of operations: the power is worked out before the multiplication."
              },
              {
                "step": "$y = 18$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{2}{9}$, the multiplicative inverse of $\\dfrac{9}{2}$, leaves $y$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$ when $x = 10$, if the square of $x$ is directly proportional to $y$ and $x = 4$ when $y = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "75/2",
              "lines": [
                {
                  "step": "Find $y$ when $x = 10$, if the square of $x$ is directly proportional to $y$ and $x = 4$ when $y = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 = ay$",
                  "reason": "Directly proportional: $x^2$ is a constant multiple of $y$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(4)^2 = a(6)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$16 = 6a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = \\dfrac{8}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$x^2 = \\dfrac{8}{3}y$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^2 = \\dfrac{8}{3}y$ holds for every pair."
                },
                {
                  "step": "$(10)^2 = \\dfrac{8}{3}y$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$100 = \\dfrac{8}{3}y$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$y = \\dfrac{75}{2}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{3}{8}$, the multiplicative inverse of $\\dfrac{8}{3}$, leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find $y$ when $z = 5$, if the square of $z$ is directly proportional to $y$ and $z = 3$ when $y = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "50/9",
              "lines": [
                {
                  "step": "Find $y$ when $z = 5$, if the square of $z$ is directly proportional to $y$ and $z = 3$ when $y = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 = ay$",
                  "reason": "Directly proportional: $z^2$ is a constant multiple of $y$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(3)^2 = a(2)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$9 = 2a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = \\dfrac{9}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$z^2 = \\dfrac{9}{2}y$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $z^2 = \\dfrac{9}{2}y$ holds for every pair."
                },
                {
                  "step": "$(5)^2 = \\dfrac{9}{2}y$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$25 = \\dfrac{9}{2}y$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$y = \\dfrac{50}{9}$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{2}{9}$, the multiplicative inverse of $\\dfrac{9}{2}$, leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find $z$ when $x = 4$, if the cube of $x$ is directly proportional to $z$ and $x = 2$ when $z = 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find $z$ when $x = 4$, if the cube of $x$ is directly proportional to $z$ and $x = 2$ when $z = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 = az$",
                  "reason": "Directly proportional: $x^3$ is a constant multiple of $z$, with $a$ the constant of proportionality."
                },
                {
                  "step": "$(2)^3 = a(3)$",
                  "reason": "Substituting a value: the given pair of values goes, in brackets, in place of the letters."
                },
                {
                  "step": "$8 = 3a$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$a = \\dfrac{8}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $a$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "$x^3 = \\dfrac{8}{3}z$",
                  "reason": "Constant of proportionality: $a$ is the same number for every pair of values, so $x^3 = \\dfrac{8}{3}z$ holds for every pair."
                },
                {
                  "step": "$(4)^3 = \\dfrac{8}{3}z$",
                  "reason": "Substituting a value: the value given goes, in brackets, in place of its letter."
                },
                {
                  "step": "$64 = \\dfrac{8}{3}z$",
                  "reason": "Order of operations: the power is worked out before the multiplication."
                },
                {
                  "step": "$z = 24$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $\\dfrac{3}{8}$, the multiplicative inverse of $\\dfrac{8}{3}$, leaves $z$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t120-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the height in metres of a tree that casts a shadow $14$ m long, if a post $3$ m tall casts a shadow $4$ m long at the same time.",
            "lines": [
              {
                "step": "Find the height in metres of a tree that casts a shadow $14$ m long, if a post $3$ m tall casts a shadow $4$ m long at the same time.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the height of the tree in metres.",
                "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
              },
              {
                "step": "$\\dfrac{x}{14} = \\dfrac{3}{4}$",
                "reason": "Directly proportional: at one time of day the height of an object is directly proportional to the length of its shadow, so the height over the shadow length is the same constant for the tree as for the post."
              },
              {
                "step": "$4x = 14 \\cdot 3$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$4x = 42$",
                "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
              },
              {
                "step": "$x = \\dfrac{21}{2}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "The tree is $\\dfrac{21}{2}$ m tall.",
                "reason": "Answering the question asked: the question asks for the height of the tree in metres, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the real distance in kilometres between two villages that are $7$ cm apart on a map, if $2$ cm on the map stands for $15$ km.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "105/2",
              "lines": [
                {
                  "step": "Find the real distance in kilometres between two villages that are $7$ cm apart on a map, if $2$ cm on the map stands for $15$ km.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the real distance between the villages in kilometres.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
                },
                {
                  "step": "$\\dfrac{x}{7} = \\dfrac{15}{2}$",
                  "reason": "Directly proportional: on a map drawn to scale the real distance is directly proportional to the length on the map, so the real distance over the length on the map is the same constant for the villages as for the scale."
                },
                {
                  "step": "$2x = 7 \\cdot 15$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$2x = 105$",
                  "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
                },
                {
                  "step": "$x = \\dfrac{105}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "The villages are $\\dfrac{105}{2}$ km apart.",
                  "reason": "Answering the question asked: the question asks for the real distance between the villages in kilometres, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the butter in grams for $36$ biscuits, if a recipe for $16$ biscuits uses $120$ g of butter.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "270",
              "lines": [
                {
                  "step": "Find the butter in grams for $36$ biscuits, if a recipe for $16$ biscuits uses $120$ g of butter.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the butter in grams for the larger batch.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
                },
                {
                  "step": "$\\dfrac{x}{36} = \\dfrac{120}{16}$",
                  "reason": "Directly proportional: every biscuit takes the same butter, so the butter is directly proportional to the number of biscuits, so the butter over the number of biscuits is the same constant for the new batch as for the recipe."
                },
                {
                  "step": "$16x = 36 \\cdot 120$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$16x = 4320$",
                  "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
                },
                {
                  "step": "$x = 270$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $16$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "The biscuits need $270$ g of butter.",
                  "reason": "Answering the question asked: the question asks for the butter in grams for the larger batch, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the dose in millilitres for a patient who weighs $75$ kg, if the dose of a medicine is directly proportional to the weight of the patient and a patient who weighs $60$ kg takes $9$ ml.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "45/4",
              "lines": [
                {
                  "step": "Find the dose in millilitres for a patient who weighs $75$ kg, if the dose of a medicine is directly proportional to the weight of the patient and a patient who weighs $60$ kg takes $9$ ml.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the dose in millilitres.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
                },
                {
                  "step": "$\\dfrac{x}{75} = \\dfrac{9}{60}$",
                  "reason": "Directly proportional: the dose is directly proportional to the weight of the patient, so the dose over the weight is the same constant for the second patient as for the first patient."
                },
                {
                  "step": "$60x = 75 \\cdot 9$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$60x = 675$",
                  "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
                },
                {
                  "step": "$x = \\dfrac{45}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $60$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "The dose is $\\dfrac{45}{4}$ ml.",
                  "reason": "Answering the question asked: the question asks for the dose in millilitres, which is $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the length in metres of the shadow of a statue and its base together, if the statue is $5$ m tall, it stands on a base $3$ m tall, and a post $2$ m tall casts a shadow $3$ m long at the same time.",
            "lines": [
              {
                "step": "Find the length in metres of the shadow of a statue and its base together, if the statue is $5$ m tall, it stands on a base $3$ m tall, and a post $2$ m tall casts a shadow $3$ m long at the same time.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The statue and its base together are $5 + 3 = 8$ m tall.",
                "reason": "Writing a sentence as an equation: the statue stands on top of the base, so their heights add."
              },
              {
                "step": "Let $x$ be the length of the shadow of the statue and its base in metres.",
                "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
              },
              {
                "step": "$\\dfrac{x}{8} = \\dfrac{3}{2}$",
                "reason": "Directly proportional: at one time of day the length of the shadow of an object is directly proportional to its height, so the shadow length over the height is the same constant for the statue and its base as for the post."
              },
              {
                "step": "$2x = 8 \\cdot 3$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$2x = 24$",
                "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
              },
              {
                "step": "$x = 12$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone, and the quotient is written in lowest terms."
              },
              {
                "step": "The shadow is $12$ m long.",
                "reason": "Answering the question asked: the question asks for the length of the shadow of the statue and its base in metres, which is $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the length in centimetres on a map of a road that runs $25$ km from one town to a second and then $17$ km on to a third, if $4$ cm on the map stands for $10$ km.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "84/5",
              "lines": [
                {
                  "step": "Find the length in centimetres on a map of a road that runs $25$ km from one town to a second and then $17$ km on to a third, if $4$ cm on the map stands for $10$ km.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The road is $25 + 17 = 42$ km long.",
                  "reason": "Writing a sentence as an equation: the road runs on from the second town, so its two stretches add."
                },
                {
                  "step": "Let $x$ be the length of the road on the map in centimetres.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
                },
                {
                  "step": "$\\dfrac{x}{42} = \\dfrac{4}{10}$",
                  "reason": "Directly proportional: on a map drawn to scale the length on the map is directly proportional to the real distance, so the length on the map over the real distance is the same constant for the road as for the scale."
                },
                {
                  "step": "$10x = 42 \\cdot 4$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$10x = 168$",
                  "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
                },
                {
                  "step": "$x = \\dfrac{84}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "The road is $\\dfrac{84}{5}$ cm long on the map.",
                  "reason": "Answering the question asked: the question asks for the length of the road on the map in centimetres, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the lentils in grams for a party of $7$ adults and $5$ children who each eat the same, if a soup for $8$ people uses $300$ g of lentils.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "450",
              "lines": [
                {
                  "step": "Find the lentils in grams for a party of $7$ adults and $5$ children who each eat the same, if a soup for $8$ people uses $300$ g of lentils.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The party has $7 + 5 = 12$ people.",
                  "reason": "Writing a sentence as an equation: the adults and the children are all people at the party, so their numbers add."
                },
                {
                  "step": "Let $x$ be the lentils for the party in grams.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
                },
                {
                  "step": "$\\dfrac{x}{12} = \\dfrac{300}{8}$",
                  "reason": "Directly proportional: every person eats the same, so the lentils are directly proportional to the number of people, so the lentils over the number of people is the same constant for the party as for the recipe."
                },
                {
                  "step": "$8x = 12 \\cdot 300$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$8x = 3600$",
                  "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
                },
                {
                  "step": "$x = 450$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "The party needs $450$ g of lentils.",
                  "reason": "Answering the question asked: the question asks for the lentils for the party in grams, which is $x$."
                }
              ]
            },
            {
              "prompt": "Find the fuel in litres a van uses on a trip of $70$ km to a depot and then $90$ km on to a farm, if it uses $9$ litres to travel $120$ km and uses fuel at a steady rate.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the fuel in litres a van uses on a trip of $70$ km to a depot and then $90$ km on to a farm, if it uses $9$ litres to travel $120$ km and uses fuel at a steady rate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The trip is $70 + 90 = 160$ km long.",
                  "reason": "Writing a sentence as an equation: the trip goes on from the depot, so its two stretches add."
                },
                {
                  "step": "Let $x$ be the fuel for the trip in litres.",
                  "reason": "Defining the unknown: the letter stands for the number the question asks for, with its unit."
                },
                {
                  "step": "$\\dfrac{x}{160} = \\dfrac{9}{120}$",
                  "reason": "Directly proportional: at a steady rate the fuel used is directly proportional to the distance travelled, so the fuel over the distance is the same constant for the trip to the farm as for the first trip."
                },
                {
                  "step": "$120x = 160 \\cdot 9$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$120x = 1440$",
                  "reason": "Product of positive rational numbers: the two whole numbers are multiplied."
                },
                {
                  "step": "$x = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $120$ leaves $x$ alone, and the quotient is written in lowest terms."
                },
                {
                  "step": "The van uses $12$ litres.",
                  "reason": "Answering the question asked: the question asks for the fuel for the trip in litres, which is $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t120-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find the height in metres of a tree that casts a shadow $12$ m long, if a post $5$ m tall casts a shadow $8$ m long at the same time.",
            "given": [
              "Let $x$ be the height of the tree in metres.",
              "$\\dfrac{x}{12} = \\dfrac{8}{5}$",
              "$5x = 12 \\cdot 8$",
              "$5x = 96$",
              "$x = \\dfrac{96}{5}$",
              "The tree is $\\dfrac{96}{5}$ m tall."
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find the height in metres of a tree that casts a shadow $12$ m long, if a post $5$ m tall casts a shadow $8$ m long at the same time.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 puts the height $x$ over the shadow length $12$ on the left, but on the right it puts the shadow length $8$ over the height $5$.",
                "reason": "A letter is read as an object: $x$ is the height of the tree in metres, a number of the same sort as $5$, so it stands where $5$ stands; the line treats $x$ as the tree and pairs it with the wrong number."
              },
              {
                "step": "Line 2 written right is $\\dfrac{x}{12} = \\dfrac{5}{8}$.",
                "reason": "Directly proportional: at one time of day the height of an object is directly proportional to the length of its shadow, so the quotient of the height by the shadow length is the same for both pairs."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the real distance in kilometres between two villages that are $15$ cm apart on a map, if $6$ cm on the map stands for $20$ km.",
              "given": [
                "Let $x$ be the real distance between the villages in kilometres.",
                "$\\dfrac{20}{6} = \\dfrac{10}{3}$",
                "$\\dfrac{x}{15} = \\dfrac{3}{10}$",
                "$10x = 15 \\cdot 3$",
                "$10x = 45$",
                "$x = \\dfrac{9}{2}$",
                "The villages are $\\dfrac{9}{2}$ km apart."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x/15 = 10/3",
              "lines": [
                {
                  "step": "The working is for this problem: Find the real distance in kilometres between two villages that are $15$ cm apart on a map, if $6$ cm on the map stands for $20$ km.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts the real distance $x$ over the length on the map $15$ on the left, but on the right it puts the length on the map over the real distance, $\\dfrac{3}{10}$ in place of $\\dfrac{10}{3}$.",
                  "reason": "A letter is read as an object: $x$ is the real distance between the villages in kilometres, a number of the same sort as $20$, so it stands where $20$ stands; the line treats $x$ as the villages and pairs it with the wrong number."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{x}{15} = \\dfrac{10}{3}$.",
                  "reason": "Directly proportional: on a map drawn to scale the real distance is directly proportional to the length on the map, so the quotient of the real distance by the length on the map is the same for both pairs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the butter in grams for $40$ biscuits, if a recipe for $24$ biscuits uses $90$ g of butter.",
              "given": [
                "Let $x$ be the butter in grams for the larger batch.",
                "$\\dfrac{x}{24} = \\dfrac{40}{90}$",
                "$90x = 24 \\cdot 40$",
                "$90x = 960$",
                "$x = \\dfrac{32}{3}$",
                "The biscuits need $\\dfrac{32}{3}$ g of butter."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x/90 = 40/24",
              "lines": [
                {
                  "step": "The working is for this problem: Find the butter in grams for $40$ biscuits, if a recipe for $24$ biscuits uses $90$ g of butter.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 puts the butter $x$ over the number of biscuits $24$ of the recipe, and the number of biscuits $40$ of the new batch over the butter $90$ of the recipe.",
                  "reason": "A letter is read as an object: $x$ is the butter in grams for the larger batch, a number of the same sort as $90$, so it stands where $90$ stands; the line treats $x$ as the new batch and pairs it with the wrong number."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{x}{90} = \\dfrac{40}{24}$, or, the same proportion, $\\dfrac{x}{40} = \\dfrac{90}{24}$.",
                  "reason": "Directly proportional: every biscuit takes the same butter, so the butter is directly proportional to the number of biscuits, so the butter of the new batch over that of the recipe equals the number of biscuits of the new batch over that of the recipe."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the dose in millilitres for a patient who weighs $55$ kg, if the dose of a medicine is directly proportional to the weight of the patient and a patient who weighs $40$ kg takes $6$ ml.",
              "given": [
                "Let $x$ be the dose in millilitres.",
                "$\\dfrac{x}{55} = \\dfrac{6}{40}$",
                "$\\dfrac{x}{6} = \\dfrac{40}{55}$",
                "$55x = 6 \\cdot 40$",
                "$55x = 240$",
                "$x = \\dfrac{48}{11}$",
                "The dose is $\\dfrac{48}{11}$ ml."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x/6 = 55/40",
              "lines": [
                {
                  "step": "The working is for this problem: Find the dose in millilitres for a patient who weighs $55$ kg, if the dose of a medicine is directly proportional to the weight of the patient and a patient who weighs $40$ kg takes $6$ ml.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts the dose $x$ of the second patient over the dose $6$ of the first patient on the left, but on the right it puts the weight $40$ of the first patient over the weight $55$ of the second patient.",
                  "reason": "A letter is read as an object: $x$ is the dose in millilitres, a number of the same sort as $6$, so it stands where $6$ stands; the line treats $x$ as the second patient and pairs it with the wrong number."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{x}{6} = \\dfrac{55}{40}$.",
                  "reason": "Directly proportional: the dose is directly proportional to the weight of the patient, so the dose of the second patient over that of the first patient equals the weight of the second patient over that of the first patient."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t120-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is directly proportional to the square of $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ is directly proportional to the square of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of $x$ is $x^2$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "$y = ax^2$",
                "reason": "Directly proportional: \"directly proportional to\" puts $y$ equal to the constant of proportionality times the quantity named."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $z$, with $z$ alone on the left, with $a$ for the constant of proportionality: The number $z$ is directly proportional to $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = a*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $z$, with $z$ alone on the left, with $a$ for the constant of proportionality: The number $z$ is directly proportional to $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quantity named is $x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$z = ax$",
                  "reason": "Directly proportional: \"directly proportional to\" puts $z$ equal to the constant of proportionality times the quantity named."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $y$ and $z$, with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ varies directly as the cube of $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = a*z^3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $y$ and $z$, with $y$ alone on the left, with $a$ for the constant of proportionality: The number $y$ varies directly as the cube of $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cube of $z$ is $z^3$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y = az^3$",
                  "reason": "Directly proportional: \"directly proportional to\" puts $y$ equal to the constant of proportionality times the quantity named."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y^2$ alone on the left, with $a$ for the constant of proportionality: The square of $y$ is directly proportional to $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y^2 = a*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y^2$ alone on the left, with $a$ for the constant of proportionality: The square of $y$ is directly proportional to $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $y$ is $y^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "$y^2 = ax$",
                  "reason": "Directly proportional: \"directly proportional to\" puts $y^2$ equal to the constant of proportionality times the quantity named."
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
      "id": "t120-p1",
      "method": "direct proof",
      "statement": "Let $x$, $y$ and $z$ be variable quantities. If $x$ is directly proportional to $y$, and $y$ is directly proportional to $z$, then $x$ is directly proportional to $z$.",
      "idea": "Write each proportion with its own constant, put the second into the first, and read off the product of the two constants as the new constant.",
      "lines": [
        {
          "line": "Suppose $x$ is directly proportional to $y$, and $y$ is directly proportional to $z$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $x = ay$ for a number $a$ other than $0$.",
          "reason": "directly proportional, on the first proportion"
        },
        {
          "line": "Also $y = bz$ for a number $b$ other than $0$.",
          "reason": "directly proportional, on the second proportion"
        },
        {
          "line": "So $x = a(bz)$.",
          "reason": "substituting a value: by the third line $y$ has the value $bz$"
        },
        {
          "line": "So $x = (ab)z$.",
          "reason": "the associative law of multiplication"
        },
        {
          "line": "The number $ab$ is not $0$.",
          "reason": "a product of nonzero numbers is nonzero"
        },
        {
          "line": "Therefore $x$ is directly proportional to $z$, with constant of proportionality $ab$.",
          "reason": "directly proportional, from the fifth and sixth lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t120-s1",
      "method": "direct proof",
      "statement": "Let $x$ be directly proportional to $y$, with $x = ay$ for a nonzero constant $a$, and let $c$ be a number. If $y$ takes the value $y_1$ and then the value $cy_1$, then $x$ takes the value $x_1 = ay_1$ and then the value $cx_1$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x = ay$, with $x_1 = ay_1$, and let $x_2$ be the value of $x$ when $y = cy_1$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x_2 = a(cy_1)$.",
            "reason": "substituting a value: $y$ has the value $cy_1$ in $x = ay$"
          },
          {
            "line": "So $x_2 = (ac)y_1$.",
            "reason": "the associative law of multiplication"
          },
          {
            "line": "So $x_2 = (ca)y_1$.",
            "reason": "the commutative law of multiplication"
          },
          {
            "line": "So $x_2 = c(ay_1)$.",
            "reason": "the associative law of multiplication"
          },
          {
            "line": "Therefore $x_2 = cx_1$.",
            "reason": "substituting a value: $ay_1$ is $x_1$ by the first line"
          }
        ]
      }
    },
    {
      "id": "t120-s2",
      "method": "direct proof",
      "statement": "Let $x$ and $y$ each be directly proportional to $z$, with $x = az$ and $y = bz$ for nonzero constants $a$ and $b$, and let $a + b$ be other than $0$. Then $x + y$ is directly proportional to $z$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x = az$ and $y = bz$, with $a + b$ not $0$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x + y = az + bz$.",
            "reason": "adding two equations"
          },
          {
            "line": "So $x + y = (a + b)z$.",
            "reason": "the distributive law, read from right to left"
          },
          {
            "line": "Therefore $x + y$ is directly proportional to $z$, with constant of proportionality $a + b$.",
            "reason": "directly proportional, since $a + b$ is not $0$"
          }
        ]
      }
    }
  ]
}
