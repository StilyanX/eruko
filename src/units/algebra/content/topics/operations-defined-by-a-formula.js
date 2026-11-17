export default {
  "number": 162,
  "title": "Operations defined by a formula",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "477-483"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $6 \\star (-6)$, where $x \\star y = -9y^2 - 7x - 5y$ for every pair of numbers $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "-336",
    "solution": [
      "Evaluate $6 \\star (-6)$, where $x \\star y = -9y^2 - 7x - 5y$ for every pair of numbers $x$ and $y$.",
      "$6 \\star (-6) = -9(-6)^2 - 7(6) - 5(-6)$",
      "$6 \\star (-6) = -324 - 42 + 30$",
      "$6 \\star (-6) = -336$"
    ]
  },
  "ideas": [
    {
      "name": "Operation",
      "concrete": "With $x \\star y = 6x - 5y$, the inputs $9$ and $4$ give $9 \\star 4 = 6(9) - 5(4) = 34$, while $4 \\star 9 = 6(4) - 5(9) = -21$. The sign $\\star$ is a rule of its own: $9 \\star 4$ is neither $9 \\cdot 4$ nor $9 + 4$.",
      "general": "An **operation** is a function of two inputs written with a sign between them: for numbers $x$ and $y$, $x \\star y$ is the output of the rule for the first input $x$ and the second input $y$. As in a function of several variables, the inputs go into the rule by place, the first where $x$ stands and the second where $y$ stands, and a part in brackets is worked first."
    },
    {
      "name": "Commutative operation",
      "concrete": "With $x \\diamond y = 2x + 9y$, the inputs $8$ and $3$ give $8 \\diamond 3 = 43$ but $3 \\diamond 8 = 78$, so the order matters. With $x \\diamond y = 7xy - 9x - 9y$, trading the inputs gives $7yx - 9y - 9x$, the same output for every pair.",
      "general": "An operation $\\star$ is **commutative** when $x \\star y = y \\star x$ for every pair of numbers $x$ and $y$ it accepts. Showing it takes the rule for $y \\star x$ rewritten as the rule for $x \\star y$; one pair of numbers $m$ and $n$ with $m \\star n \\ne n \\star m$ shows that it is not commutative."
    }
  ],
  "kinds": [
    {
      "id": "t162-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $3 \\diamond (-5)$, where $x \\diamond y = -4x^2 + 7y^2 - 9$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Evaluate $3 \\diamond (-5)$, where $x \\diamond y = -4x^2 + 7y^2 - 9$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3 \\diamond (-5) = -4(3)^2 + 7(-5)^2 - 9$",
                "reason": "Operation: $3$ stands where $x$ is and $-5$ where $y$ is, each in brackets."
              },
              {
                "step": "$3 \\diamond (-5) = -36 + 175 - 9$",
                "reason": "Order of operations: the powers are worked first, then the products."
              },
              {
                "step": "$3 \\diamond (-5) = 130$",
                "reason": "Order of operations: the terms are added and taken away last, from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $5 \\bullet 6$, where $x \\bullet y = 6x^2 - 3y^2 - 8y$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Evaluate $5 \\bullet 6$, where $x \\bullet y = 6x^2 - 3y^2 - 8y$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5 \\bullet 6 = 6(5)^2 - 3(6)^2 - 8(6)$",
                  "reason": "Operation: $5$ stands where $x$ is and $6$ where $y$ is, each in brackets."
                },
                {
                  "step": "$5 \\bullet 6 = 150 - 108 - 48$",
                  "reason": "Order of operations: the powers are worked first, then the products."
                },
                {
                  "step": "$5 \\bullet 6 = -6$",
                  "reason": "Order of operations: the terms are added and taken away last, from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-2) \\triangle 5$, where $x \\triangle y = -8xy^2 + 6xy - 3$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "337",
              "lines": [
                {
                  "step": "Evaluate $(-2) \\triangle 5$, where $x \\triangle y = -8xy^2 + 6xy - 3$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-2) \\triangle 5 = -8(-2)(5)^2 + 6(-2)(5) - 3$",
                  "reason": "Operation: $-2$ stands where $x$ is and $5$ where $y$ is, each in brackets."
                },
                {
                  "step": "$(-2) \\triangle 5 = 400 - 60 - 3$",
                  "reason": "Order of operations: the powers are worked first, then the products."
                },
                {
                  "step": "$(-2) \\triangle 5 = 337$",
                  "reason": "Order of operations: the terms are added and taken away last, from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $2 \\star (-2)$, where $x \\star y = 9x^2y + 7x^2 + 7x$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-30",
              "lines": [
                {
                  "step": "Evaluate $2 \\star (-2)$, where $x \\star y = 9x^2y + 7x^2 + 7x$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2 \\star (-2) = 9(2)^2(-2) + 7(2)^2 + 7(2)$",
                  "reason": "Operation: $2$ stands where $x$ is and $-2$ where $y$ is, each in brackets."
                },
                {
                  "step": "$2 \\star (-2) = -72 + 28 + 14$",
                  "reason": "Order of operations: the powers are worked first, then the products."
                },
                {
                  "step": "$2 \\star (-2) = -30$",
                  "reason": "Order of operations: the terms are added and taken away last, from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $((-7) \\diamond 5) \\diamond (-6)$, where $x \\diamond y = 2x - 7y - 7$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Evaluate $((-7) \\diamond 5) \\diamond (-6)$, where $x \\diamond y = 2x - 7y - 7$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-7) \\diamond 5 = 2(-7) - 7(5) - 7 = -56$",
                "reason": "Order of operations: the operation inside the brackets is worked first, with $-7$ where $x$ stands and $5$ where $y$ stands."
              },
              {
                "step": "$((-7) \\diamond 5) \\diamond (-6) = (-56) \\diamond (-6)$",
                "reason": "Substituting a value: $(-7) \\diamond 5$ is replaced by its value $-56$."
              },
              {
                "step": "$(-56) \\diamond (-6) = 2(-56) - 7(-6) - 7$",
                "reason": "Operation: $-56$ stands where $x$ is and $-6$ where $y$ is."
              },
              {
                "step": "$(-56) \\diamond (-6) = -77$",
                "reason": "Order of operations: the powers and products are worked first, then the terms are added and taken away."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $4 \\bullet (3 \\bullet (-6))$, where $x \\bullet y = -4x^2 - 2y + 9$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-25",
              "lines": [
                {
                  "step": "Evaluate $4 \\bullet (3 \\bullet (-6))$, where $x \\bullet y = -4x^2 - 2y + 9$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 \\bullet (-6) = -4(3)^2 - 2(-6) + 9 = -15$",
                  "reason": "Order of operations: the operation inside the brackets is worked first, with $3$ where $x$ stands and $-6$ where $y$ stands."
                },
                {
                  "step": "$4 \\bullet (3 \\bullet (-6)) = 4 \\bullet (-15)$",
                  "reason": "Substituting a value: $3 \\bullet (-6)$ is replaced by its value $-15$."
                },
                {
                  "step": "$4 \\bullet (-15) = -4(4)^2 - 2(-15) + 9$",
                  "reason": "Operation: $4$ stands where $x$ is and $-15$ where $y$ is."
                },
                {
                  "step": "$4 \\bullet (-15) = -25$",
                  "reason": "Order of operations: the powers and products are worked first, then the terms are added and taken away."
                }
              ]
            },
            {
              "prompt": "Evaluate $(3 \\triangle (-7)) \\triangle 4$, where $x \\triangle y = 4x + 8y + 9$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-99",
              "lines": [
                {
                  "step": "Evaluate $(3 \\triangle (-7)) \\triangle 4$, where $x \\triangle y = 4x + 8y + 9$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 \\triangle (-7) = 4(3) + 8(-7) + 9 = -35$",
                  "reason": "Order of operations: the operation inside the brackets is worked first, with $3$ where $x$ stands and $-7$ where $y$ stands."
                },
                {
                  "step": "$(3 \\triangle (-7)) \\triangle 4 = (-35) \\triangle 4$",
                  "reason": "Substituting a value: $3 \\triangle (-7)$ is replaced by its value $-35$."
                },
                {
                  "step": "$(-35) \\triangle 4 = 4(-35) + 8(4) + 9$",
                  "reason": "Operation: $-35$ stands where $x$ is and $4$ where $y$ is."
                },
                {
                  "step": "$(-35) \\triangle 4 = -99$",
                  "reason": "Order of operations: the powers and products are worked first, then the terms are added and taken away."
                }
              ]
            },
            {
              "prompt": "Evaluate $(-6) \\star (3 \\star (-2))$, where $x \\star y = -9x - 5y - 9$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "175",
              "lines": [
                {
                  "step": "Evaluate $(-6) \\star (3 \\star (-2))$, where $x \\star y = -9x - 5y - 9$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 \\star (-2) = -9(3) - 5(-2) - 9 = -26$",
                  "reason": "Order of operations: the operation inside the brackets is worked first, with $3$ where $x$ stands and $-2$ where $y$ stands."
                },
                {
                  "step": "$(-6) \\star (3 \\star (-2)) = (-6) \\star (-26)$",
                  "reason": "Substituting a value: $3 \\star (-2)$ is replaced by its value $-26$."
                },
                {
                  "step": "$(-6) \\star (-26) = -9(-6) - 5(-26) - 9$",
                  "reason": "Operation: $-6$ stands where $x$ is and $-26$ where $y$ is."
                },
                {
                  "step": "$(-6) \\star (-26) = 175$",
                  "reason": "Order of operations: the powers and products are worked first, then the terms are added and taken away."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $x \\diamond y$ for two numbers $x$ and $y$ with $x + y = 8$ and $xy = -27$, where $x \\diamond y = x^2 + y^2 - 5xy$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Evaluate $x \\diamond y$ for two numbers $x$ and $y$ with $x + y = 8$ and $xy = -27$, where $x \\diamond y = x^2 + y^2 - 5xy$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x \\diamond y = (x + y)^2 - 7xy$",
                "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, so $x^2 + y^2$ is $(x + y)^2 - 2xy$."
              },
              {
                "step": "$x \\diamond y = (8)^2 - 7(-27)$",
                "reason": "Substituting a value: $x + y$ is replaced by $8$ and $xy$ by $-27$."
              },
              {
                "step": "$x \\diamond y = 253$",
                "reason": "Order of operations: the power and the product are worked first, then the terms are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $x \\bullet y$ for two numbers $x$ and $y$ with $x + y = 5$ and $xy = -24$, where $x \\bullet y = x^2 + y^2 - 15xy$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "433",
              "lines": [
                {
                  "step": "Evaluate $x \\bullet y$ for two numbers $x$ and $y$ with $x + y = 5$ and $xy = -24$, where $x \\bullet y = x^2 + y^2 - 15xy$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\bullet y = (x + y)^2 - 17xy$",
                  "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, so $x^2 + y^2$ is $(x + y)^2 - 2xy$."
                },
                {
                  "step": "$x \\bullet y = (5)^2 - 17(-24)$",
                  "reason": "Substituting a value: $x + y$ is replaced by $5$ and $xy$ by $-24$."
                },
                {
                  "step": "$x \\bullet y = 433$",
                  "reason": "Order of operations: the power and the product are worked first, then the terms are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $x \\triangle y$ for two numbers $x$ and $y$ with $x + y = -5$ and $xy = -30$, where $x \\triangle y = x^2 + y^2 - 9xy$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "355",
              "lines": [
                {
                  "step": "Evaluate $x \\triangle y$ for two numbers $x$ and $y$ with $x + y = -5$ and $xy = -30$, where $x \\triangle y = x^2 + y^2 - 9xy$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\triangle y = (x + y)^2 - 11xy$",
                  "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, so $x^2 + y^2$ is $(x + y)^2 - 2xy$."
                },
                {
                  "step": "$x \\triangle y = (-5)^2 - 11(-30)$",
                  "reason": "Substituting a value: $x + y$ is replaced by $-5$ and $xy$ by $-30$."
                },
                {
                  "step": "$x \\triangle y = 355$",
                  "reason": "Order of operations: the power and the product are worked first, then the terms are added."
                }
              ]
            },
            {
              "prompt": "Evaluate $x \\star y$ for two numbers $x$ and $y$ with $x + y = 2$ and $xy = -3$, where $x \\star y = x^2 + y^2 + 14xy$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as an integer.",
              "answer": "-32",
              "lines": [
                {
                  "step": "Evaluate $x \\star y$ for two numbers $x$ and $y$ with $x + y = 2$ and $xy = -3$, where $x \\star y = x^2 + y^2 + 14xy$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\star y = (x + y)^2 + 12xy$",
                  "reason": "Square of a binomial: $(x + y)^2 = x^2 + 2xy + y^2$, so $x^2 + y^2$ is $(x + y)^2 - 2xy$."
                },
                {
                  "step": "$x \\star y = (2)^2 + 12(-3)$",
                  "reason": "Substituting a value: $x + y$ is replaced by $2$ and $xy$ by $-3$."
                },
                {
                  "step": "$x \\star y = -32$",
                  "reason": "Order of operations: the power and the product are worked first, then the terms are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(z \\diamond z) \\diamond z$, where $x \\diamond y = 5xy + 3y^2 - 5x + 4$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Simplify $(z \\diamond z) \\diamond z$, where $x \\diamond y = 5xy + 3y^2 - 5x + 4$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z \\diamond z = 5z \\cdot z + 3z^2 - 5z + 4$",
                "reason": "Operation: $z$ stands where $x$ is and also where $y$ is."
              },
              {
                "step": "$z \\diamond z = 8z^2 - 5z + 4$",
                "reason": "Collecting like terms: the terms with the same power of $z$ are added."
              },
              {
                "step": "$(z \\diamond z) \\diamond z = 5z(8z^2 - 5z + 4) + 3z^2 - 5(8z^2 - 5z + 4) + 4$",
                "reason": "Operation: $z \\diamond z = 8z^2 - 5z + 4$ stands, in brackets, where $x$ is, and $z$ stands where $y$ is."
              },
              {
                "step": "$(z \\diamond z) \\diamond z = 40z^3 - 25z^2 + 20z + 3z^2 - 40z^2 + 25z - 20 + 4$",
                "reason": "Multiplying out: the number and the power of $z$ in front of each bracket multiply each term inside it."
              },
              {
                "step": "$(z \\diamond z) \\diamond z = 40z^3 - 62z^2 + 45z - 16$",
                "reason": "Collecting like terms: the terms with the same power of $z$ are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $z \\bullet (z \\bullet z)$, where $x \\bullet y = 5x^2 + 4xy + 6x - 4$ for every pair of numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "36*z^3+29*z^2-10*z-4",
              "lines": [
                {
                  "step": "Simplify $z \\bullet (z \\bullet z)$, where $x \\bullet y = 5x^2 + 4xy + 6x - 4$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\bullet z = 5z^2 + 4z \\cdot z + 6z - 4$",
                  "reason": "Operation: $z$ stands where $x$ is and also where $y$ is."
                },
                {
                  "step": "$z \\bullet z = 9z^2 + 6z - 4$",
                  "reason": "Collecting like terms: the terms with the same power of $z$ are added."
                },
                {
                  "step": "$z \\bullet (z \\bullet z) = 5z^2 + 4z(9z^2 + 6z - 4) + 6z - 4$",
                  "reason": "Operation: $z$ stands where $x$ is, and $z \\bullet z = 9z^2 + 6z - 4$ stands, in brackets, where $y$ is."
                },
                {
                  "step": "$z \\bullet (z \\bullet z) = 5z^2 + 36z^3 + 24z^2 - 16z + 6z - 4$",
                  "reason": "Multiplying out: the number and the power of $z$ in front of each bracket multiply each term inside it."
                },
                {
                  "step": "$z \\bullet (z \\bullet z) = 36z^3 + 29z^2 - 10z - 4$",
                  "reason": "Collecting like terms: the terms with the same power of $z$ are added."
                }
              ]
            },
            {
              "prompt": "Simplify $(z \\triangle z) \\triangle z$, where $x \\triangle y = 6xy + 6y^2 + 2x + 2$ for every pair of numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "72*z^3+42*z^2+16*z+6",
              "lines": [
                {
                  "step": "Simplify $(z \\triangle z) \\triangle z$, where $x \\triangle y = 6xy + 6y^2 + 2x + 2$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\triangle z = 6z \\cdot z + 6z^2 + 2z + 2$",
                  "reason": "Operation: $z$ stands where $x$ is and also where $y$ is."
                },
                {
                  "step": "$z \\triangle z = 12z^2 + 2z + 2$",
                  "reason": "Collecting like terms: the terms with the same power of $z$ are added."
                },
                {
                  "step": "$(z \\triangle z) \\triangle z = 6z(12z^2 + 2z + 2) + 6z^2 + 2(12z^2 + 2z + 2) + 2$",
                  "reason": "Operation: $z \\triangle z = 12z^2 + 2z + 2$ stands, in brackets, where $x$ is, and $z$ stands where $y$ is."
                },
                {
                  "step": "$(z \\triangle z) \\triangle z = 72z^3 + 12z^2 + 12z + 6z^2 + 24z^2 + 4z + 4 + 2$",
                  "reason": "Multiplying out: the number and the power of $z$ in front of each bracket multiply each term inside it."
                },
                {
                  "step": "$(z \\triangle z) \\triangle z = 72z^3 + 42z^2 + 16z + 6$",
                  "reason": "Collecting like terms: the terms with the same power of $z$ are added."
                }
              ]
            },
            {
              "prompt": "Simplify $z \\star (z \\star z)$, where $x \\star y = 7x^2 - 6x - 7y - 5$ for every pair of numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-42*z^2+85*z+30",
              "lines": [
                {
                  "step": "Simplify $z \\star (z \\star z)$, where $x \\star y = 7x^2 - 6x - 7y - 5$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\star z = 7z^2 - 6z - 7z - 5$",
                  "reason": "Operation: $z$ stands where $x$ is and also where $y$ is."
                },
                {
                  "step": "$z \\star z = 7z^2 - 13z - 5$",
                  "reason": "Collecting like terms: the terms with the same power of $z$ are added."
                },
                {
                  "step": "$z \\star (z \\star z) = 7z^2 - 6z - 7(7z^2 - 13z - 5) - 5$",
                  "reason": "Operation: $z$ stands where $x$ is, and $z \\star z = 7z^2 - 13z - 5$ stands, in brackets, where $y$ is."
                },
                {
                  "step": "$z \\star (z \\star z) = 7z^2 - 6z - 49z^2 + 91z + 35 - 5$",
                  "reason": "Multiplying out: the number and the power of $z$ in front of each bracket multiply each term inside it."
                },
                {
                  "step": "$z \\star (z \\star z) = -42z^2 + 85z + 30$",
                  "reason": "Collecting like terms: the terms with the same power of $z$ are added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t162-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $2 \\triangle z = -39$, where $x \\triangle y = 9xy + 2x - 6y + 8$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Solve $2 \\triangle z = -39$, where $x \\triangle y = 9xy + 2x - 6y + 8$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2 \\triangle z = 9(2)z + 2(2) - 6z + 8$",
                "reason": "Operation: $2$ stands where $x$ is and $z$ where $y$ is."
              },
              {
                "step": "$2 \\triangle z = 12z + 12$",
                "reason": "Collecting like terms: the terms in $z$ are added, and so are the numbers."
              },
              {
                "step": "$12z + 12 = -39$",
                "reason": "Substituting a value: $2 \\triangle z$ is replaced by $12z + 12$ in $2 \\triangle z = -39$."
              },
              {
                "step": "$12z = -51$",
                "reason": "Adding the same number to both sides: $-12$ is added to both sides."
              },
              {
                "step": "$z = -\\dfrac{17}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $z \\star 2 = -28$, where $x \\star y = 4xy + 4x - 2y - 3$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = -7/4",
              "lines": [
                {
                  "step": "Solve $z \\star 2 = -28$, where $x \\star y = 4xy + 4x - 2y - 3$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\star 2 = 4(2)z + 4z - 2(2) - 3$",
                  "reason": "Operation: $z$ stands where $x$ is and $2$ where $y$ is."
                },
                {
                  "step": "$z \\star 2 = 12z - 7$",
                  "reason": "Collecting like terms: the terms in $z$ are added, and so are the numbers."
                },
                {
                  "step": "$12z - 7 = -28$",
                  "reason": "Substituting a value: $z \\star 2$ is replaced by $12z - 7$ in $z \\star 2 = -28$."
                },
                {
                  "step": "$12z = -21$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "$z = -\\dfrac{7}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                }
              ]
            },
            {
              "prompt": "Solve $3 \\diamond z = 38$, where $x \\diamond y = 4xy + 2x - 6y - 8$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = 20/3",
              "lines": [
                {
                  "step": "Solve $3 \\diamond z = 38$, where $x \\diamond y = 4xy + 2x - 6y - 8$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 \\diamond z = 4(3)z + 2(3) - 6z - 8$",
                  "reason": "Operation: $3$ stands where $x$ is and $z$ where $y$ is."
                },
                {
                  "step": "$3 \\diamond z = 6z - 2$",
                  "reason": "Collecting like terms: the terms in $z$ are added, and so are the numbers."
                },
                {
                  "step": "$6z - 2 = 38$",
                  "reason": "Substituting a value: $3 \\diamond z$ is replaced by $6z - 2$ in $3 \\diamond z = 38$."
                },
                {
                  "step": "$6z = 40$",
                  "reason": "Adding the same number to both sides: $2$ is added to both sides."
                },
                {
                  "step": "$z = \\dfrac{20}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Solve $z \\bullet 5 = 32$, where $x \\bullet y = -6xy + 5x + 5y - 8$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "z = -3/5",
              "lines": [
                {
                  "step": "Solve $z \\bullet 5 = 32$, where $x \\bullet y = -6xy + 5x + 5y - 8$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\bullet 5 = -6(5)z + 5z + 5(5) - 8$",
                  "reason": "Operation: $z$ stands where $x$ is and $5$ where $y$ is."
                },
                {
                  "step": "$z \\bullet 5 = -25z + 17$",
                  "reason": "Collecting like terms: the terms in $z$ are added, and so are the numbers."
                },
                {
                  "step": "$-25z + 17 = 32$",
                  "reason": "Substituting a value: $z \\bullet 5$ is replaced by $-25z + 17$ in $z \\bullet 5 = 32$."
                },
                {
                  "step": "$-25z = 15$",
                  "reason": "Adding the same number to both sides: $-17$ is added to both sides."
                },
                {
                  "step": "$z = -\\dfrac{3}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-25$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(-2) \\triangle z = 302$, where $x \\triangle y = -3y^2 + 33xy - 7x$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Solve $(-2) \\triangle z = 302$, where $x \\triangle y = -3y^2 + 33xy - 7x$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-2) \\triangle z = -3z^2 + 33(-2)z - 7(-2)$",
                "reason": "Operation: $-2$ stands where $x$ is and $z$ where $y$ is."
              },
              {
                "step": "$(-2) \\triangle z = -3z^2 - 66z + 14$",
                "reason": "Order of operations: the numbers in each term are multiplied."
              },
              {
                "step": "$-3z^2 - 66z + 14 = 302$",
                "reason": "Substituting a value: $(-2) \\triangle z$ is replaced by $-3z^2 - 66z + 14$ in $(-2) \\triangle z = 302$."
              },
              {
                "step": "$-3z^2 - 66z - 288 = 0$",
                "reason": "Adding the same number to both sides: $-302$ is added to both sides."
              },
              {
                "step": "$z^2 + 22z + 96 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
              },
              {
                "step": "$(z + 16)(z + 6) = 0$",
                "reason": "Factoring a quadratic: the two numbers $16$ and $6$ have sum $22$ and product $96$."
              },
              {
                "step": "The solutions are $z = -16$ and $z = -6$.",
                "reason": "Zero-product property: one of the two brackets is zero."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $z \\star (-2) = -334$, where $x \\star y = 3x^2 - 36xy + 5y$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = -18, z = -6",
              "lines": [
                {
                  "step": "Solve $z \\star (-2) = -334$, where $x \\star y = 3x^2 - 36xy + 5y$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\star (-2) = 3z^2 - 36(-2)z + 5(-2)$",
                  "reason": "Operation: $z$ stands where $x$ is and $-2$ where $y$ is."
                },
                {
                  "step": "$z \\star (-2) = 3z^2 + 72z - 10$",
                  "reason": "Order of operations: the numbers in each term are multiplied."
                },
                {
                  "step": "$3z^2 + 72z - 10 = -334$",
                  "reason": "Substituting a value: $z \\star (-2)$ is replaced by $3z^2 + 72z - 10$ in $z \\star (-2) = -334$."
                },
                {
                  "step": "$3z^2 + 72z + 324 = 0$",
                  "reason": "Adding the same number to both sides: $334$ is added to both sides."
                },
                {
                  "step": "$z^2 + 24z + 108 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$(z + 18)(z + 6) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $18$ and $6$ have sum $24$ and product $108$."
                },
                {
                  "step": "The solutions are $z = -18$ and $z = -6$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                }
              ]
            },
            {
              "prompt": "Solve $(-3) \\diamond z = 705$, where $x \\diamond y = -3y^2 - 31xy + 5x$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 15, z = 16",
              "lines": [
                {
                  "step": "Solve $(-3) \\diamond z = 705$, where $x \\diamond y = -3y^2 - 31xy + 5x$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-3) \\diamond z = -3z^2 - 31(-3)z + 5(-3)$",
                  "reason": "Operation: $-3$ stands where $x$ is and $z$ where $y$ is."
                },
                {
                  "step": "$(-3) \\diamond z = -3z^2 + 93z - 15$",
                  "reason": "Order of operations: the numbers in each term are multiplied."
                },
                {
                  "step": "$-3z^2 + 93z - 15 = 705$",
                  "reason": "Substituting a value: $(-3) \\diamond z$ is replaced by $-3z^2 + 93z - 15$ in $(-3) \\diamond z = 705$."
                },
                {
                  "step": "$-3z^2 + 93z - 720 = 0$",
                  "reason": "Adding the same number to both sides: $-705$ is added to both sides."
                },
                {
                  "step": "$z^2 - 31z + 240 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "$(z - 15)(z - 16) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-15$ and $-16$ have sum $-31$ and product $240$."
                },
                {
                  "step": "The solutions are $z = 15$ and $z = 16$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                }
              ]
            },
            {
              "prompt": "Solve $z \\bullet 4 = 465$, where $x \\bullet y = -3x^2 + 21xy - 12y$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 9, z = 19",
              "lines": [
                {
                  "step": "Solve $z \\bullet 4 = 465$, where $x \\bullet y = -3x^2 + 21xy - 12y$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\bullet 4 = -3z^2 + 21(4)z - 12(4)$",
                  "reason": "Operation: $z$ stands where $x$ is and $4$ where $y$ is."
                },
                {
                  "step": "$z \\bullet 4 = -3z^2 + 84z - 48$",
                  "reason": "Order of operations: the numbers in each term are multiplied."
                },
                {
                  "step": "$-3z^2 + 84z - 48 = 465$",
                  "reason": "Substituting a value: $z \\bullet 4$ is replaced by $-3z^2 + 84z - 48$ in $z \\bullet 4 = 465$."
                },
                {
                  "step": "$-3z^2 + 84z - 513 = 0$",
                  "reason": "Adding the same number to both sides: $-465$ is added to both sides."
                },
                {
                  "step": "$z^2 - 28z + 171 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "$(z - 9)(z - 19) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-9$ and $-19$ have sum $-28$ and product $171$."
                },
                {
                  "step": "The solutions are $z = 9$ and $z = 19$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $z \\triangle (4z) = 19$, where $x \\triangle y = \\sqrt{4x^2 + 7y^2 + 13}$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Solve $z \\triangle (4z) = 19$, where $x \\triangle y = \\sqrt{4x^2 + 7y^2 + 13}$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z \\triangle (4z) = \\sqrt{4z^2 + 7(4z)^2 + 13}$",
                "reason": "Operation: $z$ stands where $x$ is and $4z$ where $y$ is, in brackets."
              },
              {
                "step": "$z \\triangle (4z) = \\sqrt{116z^2 + 13}$",
                "reason": "Power of a product: $(4z)^2 = 16z^2$, and the terms in $z^2$ are collected."
              },
              {
                "step": "$\\sqrt{116z^2 + 13} = 19$",
                "reason": "Substituting a value: $z \\triangle (4z)$ is replaced by its rule in $z \\triangle (4z) = 19$."
              },
              {
                "step": "$116z^2 + 13 = 361$",
                "reason": "Raising both sides to a power: both sides are squared; the right side $19$ is positive, so each solution of this line is a solution of line 4."
              },
              {
                "step": "$116z^2 = 348$",
                "reason": "Adding the same number to both sides: $-13$ is added to both sides."
              },
              {
                "step": "$z^2 = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $116$."
              },
              {
                "step": "The solutions are $z = \\sqrt{3}$ and $z = -\\sqrt{3}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $a^2 = 3$ and $a = \\sqrt{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(2z) \\star z = 20$, where $x \\star y = \\sqrt{4x^2 + 3y^2 + 20}$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 2*sqrt(5), z = -2*sqrt(5)",
              "lines": [
                {
                  "step": "Solve $(2z) \\star z = 20$, where $x \\star y = \\sqrt{4x^2 + 3y^2 + 20}$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2z) \\star z = \\sqrt{4(2z)^2 + 3z^2 + 20}$",
                  "reason": "Operation: $2z$ stands where $x$ is and $z$ where $y$ is, in brackets."
                },
                {
                  "step": "$(2z) \\star z = \\sqrt{19z^2 + 20}$",
                  "reason": "Power of a product: $(2z)^2 = 4z^2$, and the terms in $z^2$ are collected."
                },
                {
                  "step": "$\\sqrt{19z^2 + 20} = 20$",
                  "reason": "Substituting a value: $(2z) \\star z$ is replaced by its rule in $(2z) \\star z = 20$."
                },
                {
                  "step": "$19z^2 + 20 = 400$",
                  "reason": "Raising both sides to a power: both sides are squared; the right side $20$ is positive, so each solution of this line is a solution of line 4."
                },
                {
                  "step": "$19z^2 = 380$",
                  "reason": "Adding the same number to both sides: $-20$ is added to both sides."
                },
                {
                  "step": "$z^2 = 20$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $19$."
                },
                {
                  "step": "The solutions are $z = 2\\sqrt{5}$ and $z = -2\\sqrt{5}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $a^2 = 20$ and $a = 2\\sqrt{5}$."
                }
              ]
            },
            {
              "prompt": "Solve $z \\diamond (3z) = 15$, where $x \\diamond y = \\sqrt{6x^2 + 2y^2 + 9}$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 3, z = -3",
              "lines": [
                {
                  "step": "Solve $z \\diamond (3z) = 15$, where $x \\diamond y = \\sqrt{6x^2 + 2y^2 + 9}$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\diamond (3z) = \\sqrt{6z^2 + 2(3z)^2 + 9}$",
                  "reason": "Operation: $z$ stands where $x$ is and $3z$ where $y$ is, in brackets."
                },
                {
                  "step": "$z \\diamond (3z) = \\sqrt{24z^2 + 9}$",
                  "reason": "Power of a product: $(3z)^2 = 9z^2$, and the terms in $z^2$ are collected."
                },
                {
                  "step": "$\\sqrt{24z^2 + 9} = 15$",
                  "reason": "Substituting a value: $z \\diamond (3z)$ is replaced by its rule in $z \\diamond (3z) = 15$."
                },
                {
                  "step": "$24z^2 + 9 = 225$",
                  "reason": "Raising both sides to a power: both sides are squared; the right side $15$ is positive, so each solution of this line is a solution of line 4."
                },
                {
                  "step": "$24z^2 = 216$",
                  "reason": "Adding the same number to both sides: $-9$ is added to both sides."
                },
                {
                  "step": "$z^2 = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $24$."
                },
                {
                  "step": "The solutions are $z = 3$ and $z = -3$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $a^2 = 9$, so $a = 3$."
                }
              ]
            },
            {
              "prompt": "Solve $(-4z) \\bullet z = 17$, where $x \\bullet y = \\sqrt{3x^2 + 5y^2 + 24}$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = sqrt(5), z = -sqrt(5)",
              "lines": [
                {
                  "step": "Solve $(-4z) \\bullet z = 17$, where $x \\bullet y = \\sqrt{3x^2 + 5y^2 + 24}$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-4z) \\bullet z = \\sqrt{3(-4z)^2 + 5z^2 + 24}$",
                  "reason": "Operation: $-4z$ stands where $x$ is and $z$ where $y$ is, in brackets."
                },
                {
                  "step": "$(-4z) \\bullet z = \\sqrt{53z^2 + 24}$",
                  "reason": "Power of a product: $(-4z)^2 = 16z^2$, and the terms in $z^2$ are collected."
                },
                {
                  "step": "$\\sqrt{53z^2 + 24} = 17$",
                  "reason": "Substituting a value: $(-4z) \\bullet z$ is replaced by its rule in $(-4z) \\bullet z = 17$."
                },
                {
                  "step": "$53z^2 + 24 = 289$",
                  "reason": "Raising both sides to a power: both sides are squared; the right side $17$ is positive, so each solution of this line is a solution of line 4."
                },
                {
                  "step": "$53z^2 = 265$",
                  "reason": "Adding the same number to both sides: $-24$ is added to both sides."
                },
                {
                  "step": "$z^2 = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $53$."
                },
                {
                  "step": "The solutions are $z = \\sqrt{5}$ and $z = -\\sqrt{5}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: here $a^2 = 5$ and $a = \\sqrt{5}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $z \\triangle 5 = 4$, where $x \\triangle y = \\dfrac{x^2 - 25x + 34y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
            "lines": [
              {
                "step": "Solve $z \\triangle 5 = 4$, where $x \\triangle y = \\dfrac{x^2 - 25x + 34y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z \\triangle 5 = \\dfrac{z^2 - 25z + 34(5)}{z - 5}$",
                "reason": "Operation: $z$ stands where $x$ is and $5$ where $y$ is."
              },
              {
                "step": "$\\dfrac{z^2 - 25z + 170}{z - 5} = 4$",
                "reason": "Substituting a value: $z \\triangle 5$ is replaced by its rule in $z \\triangle 5 = 4$, with $34(5) = 170$."
              },
              {
                "step": "$z^2 - 25z + 170 = 4(z - 5)$",
                "reason": "Clearing fractions: both sides are multiplied by $z - 5$, which is not zero, since $z = 5$ is an excluded value."
              },
              {
                "step": "$z^2 - 29z + 190 = 0$",
                "reason": "Adding the same number to both sides: the right side multiplied out is $4z - 20$, and its opposite is added to both sides."
              },
              {
                "step": "$(z - 10)(z - 19) = 0$",
                "reason": "Factoring a quadratic: the two numbers $-10$ and $-19$ have sum $-29$ and product $190$."
              },
              {
                "step": "Either $z = 10$ or $z = 19$.",
                "reason": "Zero-product property: one of the two brackets is zero."
              },
              {
                "step": "The set of solutions is $\\{10, 19\\}$.",
                "reason": "Excluded value: neither value is $5$, so neither makes the bottom $z - 5$ zero."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $z \\star 4 = 7$, where $x \\star y = \\dfrac{x^2 - 14x + 10y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{17}",
              "lines": [
                {
                  "step": "Solve $z \\star 4 = 7$, where $x \\star y = \\dfrac{x^2 - 14x + 10y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\star 4 = \\dfrac{z^2 - 14z + 10(4)}{z - 4}$",
                  "reason": "Operation: $z$ stands where $x$ is and $4$ where $y$ is."
                },
                {
                  "step": "$\\dfrac{z^2 - 14z + 40}{z - 4} = 7$",
                  "reason": "Substituting a value: $z \\star 4$ is replaced by its rule in $z \\star 4 = 7$, with $10(4) = 40$."
                },
                {
                  "step": "$z^2 - 14z + 40 = 7(z - 4)$",
                  "reason": "Clearing fractions: both sides are multiplied by $z - 4$, which is not zero, since $z = 4$ is an excluded value."
                },
                {
                  "step": "$z^2 - 21z + 68 = 0$",
                  "reason": "Adding the same number to both sides: the right side multiplied out is $7z - 28$, and its opposite is added to both sides."
                },
                {
                  "step": "$(z - 4)(z - 17) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-4$ and $-17$ have sum $-21$ and product $68$."
                },
                {
                  "step": "Either $z = 4$ or $z = 17$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                },
                {
                  "step": "The set of solutions is $\\{17\\}$.",
                  "reason": "Excluded value: $z = 4$ makes the bottom $z - 4$ zero, so it is left out."
                }
              ]
            },
            {
              "prompt": "Solve $z \\triangle 4 = 6$, where $x \\triangle y = \\dfrac{x^2 - 24x + 50y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{14, 16}",
              "lines": [
                {
                  "step": "Solve $z \\triangle 4 = 6$, where $x \\triangle y = \\dfrac{x^2 - 24x + 50y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\triangle 4 = \\dfrac{z^2 - 24z + 50(4)}{z - 4}$",
                  "reason": "Operation: $z$ stands where $x$ is and $4$ where $y$ is."
                },
                {
                  "step": "$\\dfrac{z^2 - 24z + 200}{z - 4} = 6$",
                  "reason": "Substituting a value: $z \\triangle 4$ is replaced by its rule in $z \\triangle 4 = 6$, with $50(4) = 200$."
                },
                {
                  "step": "$z^2 - 24z + 200 = 6(z - 4)$",
                  "reason": "Clearing fractions: both sides are multiplied by $z - 4$, which is not zero, since $z = 4$ is an excluded value."
                },
                {
                  "step": "$z^2 - 30z + 224 = 0$",
                  "reason": "Adding the same number to both sides: the right side multiplied out is $6z - 24$, and its opposite is added to both sides."
                },
                {
                  "step": "$(z - 14)(z - 16) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $-14$ and $-16$ have sum $-30$ and product $224$."
                },
                {
                  "step": "Either $z = 14$ or $z = 16$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                },
                {
                  "step": "The set of solutions is $\\{14, 16\\}$.",
                  "reason": "Excluded value: neither value is $4$, so neither makes the bottom $z - 4$ zero."
                }
              ]
            },
            {
              "prompt": "Solve $z \\bullet (-6) = -5$, where $x \\bullet y = \\dfrac{x^2 + 21x - 15y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-20}",
              "lines": [
                {
                  "step": "Solve $z \\bullet (-6) = -5$, where $x \\bullet y = \\dfrac{x^2 + 21x - 15y}{x - y}$ for every pair of numbers $x$ and $y$ with $x \\ne y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z \\bullet (-6) = \\dfrac{z^2 + 21z - 15(-6)}{z + 6}$",
                  "reason": "Operation: $z$ stands where $x$ is and $-6$ where $y$ is."
                },
                {
                  "step": "$\\dfrac{z^2 + 21z + 90}{z + 6} = -5$",
                  "reason": "Substituting a value: $z \\bullet (-6)$ is replaced by its rule in $z \\bullet (-6) = -5$, with $-15(-6) = 90$."
                },
                {
                  "step": "$z^2 + 21z + 90 = -5(z + 6)$",
                  "reason": "Clearing fractions: both sides are multiplied by $z + 6$, which is not zero, since $z = -6$ is an excluded value."
                },
                {
                  "step": "$z^2 + 26z + 120 = 0$",
                  "reason": "Adding the same number to both sides: the right side multiplied out is $-5z - 30$, and its opposite is added to both sides."
                },
                {
                  "step": "$(z + 20)(z + 6) = 0$",
                  "reason": "Factoring a quadratic: the two numbers $20$ and $6$ have sum $26$ and product $120$."
                },
                {
                  "step": "Either $z = -20$ or $z = -6$.",
                  "reason": "Zero-product property: one of the two brackets is zero."
                },
                {
                  "step": "The set of solutions is $\\{-20\\}$.",
                  "reason": "Excluded value: $z = -6$ makes the bottom $z + 6$ zero, so it is left out."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t162-k3",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the operation $\\star$ is commutative, where $x \\star y = (x + 9)(y - 10) - 15x - 34y$ for every pair of numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Decide whether the operation $\\star$ is commutative, where $x \\star y = (x + 9)(y - 10) - 15x - 34y$ for every pair of numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x \\star y = xy - 25x - 25y - 90$",
                "reason": "Every term of one bracket times every term of the other, then collecting like terms: the terms in $x$ are added, and so are the terms in $y$."
              },
              {
                "step": "$y \\star x = yx - 25y - 25x - 90$",
                "reason": "Operation: in $y \\star x$ the first input is $y$, so $y$ stands where $x$ is and $x$ where $y$ is."
              },
              {
                "step": "$y \\star x = xy - 25x - 25y - 90$",
                "reason": "Commutative law of multiplication: $yx = xy$, and the commutative law of addition puts the terms in the order of line 2."
              },
              {
                "step": "Yes: $y \\star x = x \\star y$ for every pair of numbers $x$ and $y$.",
                "reason": "Commutative operation: the output stays the same when the two inputs trade places, for every pair of inputs."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the operation $\\diamond$ is commutative, where $x \\diamond y = (x + 8)(y + 7) - 13x - 5y$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the operation $\\diamond$ is commutative, where $x \\diamond y = (x + 8)(y + 7) - 13x - 5y$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\diamond y = xy - 6x + 3y + 56$",
                  "reason": "Every term of one bracket times every term of the other, then collecting like terms: the terms in $x$ are added, and so are the terms in $y$."
                },
                {
                  "step": "$y \\diamond x = yx - 6y + 3x + 56$",
                  "reason": "Operation: in $y \\diamond x$ the first input is $y$, so $y$ stands where $x$ is and $x$ where $y$ is."
                },
                {
                  "step": "The outputs are $0 \\diamond 2 = 62$ and $2 \\diamond 0 = 44$.",
                  "reason": "Substituting a value: $x = 0$ and $y = 2$ in line 2 give $62$, and $x = 2$ and $y = 0$ give $44$."
                },
                {
                  "step": "No: the inputs $0$ and $2$ give two different outputs when they trade places.",
                  "reason": "Commutative operation: one pair of inputs whose output changes when they trade places shows that the operation is not commutative."
                }
              ]
            },
            {
              "prompt": "Decide whether the operation $\\bullet$ is commutative, where $x \\bullet y = (x + 7)(y - 13) + 4x - 16y$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the operation $\\bullet$ is commutative, where $x \\bullet y = (x + 7)(y - 13) + 4x - 16y$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\bullet y = xy - 9x - 9y - 91$",
                  "reason": "Every term of one bracket times every term of the other, then collecting like terms: the terms in $x$ are added, and so are the terms in $y$."
                },
                {
                  "step": "$y \\bullet x = yx - 9y - 9x - 91$",
                  "reason": "Operation: in $y \\bullet x$ the first input is $y$, so $y$ stands where $x$ is and $x$ where $y$ is."
                },
                {
                  "step": "$y \\bullet x = xy - 9x - 9y - 91$",
                  "reason": "Commutative law of multiplication: $yx = xy$, and the commutative law of addition puts the terms in the order of line 2."
                },
                {
                  "step": "Yes: $y \\bullet x = x \\bullet y$ for every pair of numbers $x$ and $y$.",
                  "reason": "Commutative operation: the output stays the same when the two inputs trade places, for every pair of inputs."
                }
              ]
            },
            {
              "prompt": "Decide whether the operation $\\triangle$ is commutative, where $x \\triangle y = (x + 9)(y + 6) + 10x + 10y$ for every pair of numbers $x$ and $y$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the operation $\\triangle$ is commutative, where $x \\triangle y = (x + 9)(y + 6) + 10x + 10y$ for every pair of numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x \\triangle y = xy + 16x + 19y + 54$",
                  "reason": "Every term of one bracket times every term of the other, then collecting like terms: the terms in $x$ are added, and so are the terms in $y$."
                },
                {
                  "step": "$y \\triangle x = yx + 16y + 19x + 54$",
                  "reason": "Operation: in $y \\triangle x$ the first input is $y$, so $y$ stands where $x$ is and $x$ where $y$ is."
                },
                {
                  "step": "The outputs are $2 \\triangle 0 = 86$ and $0 \\triangle 2 = 92$.",
                  "reason": "Substituting a value: $x = 2$ and $y = 0$ in line 2 give $86$, and $x = 0$ and $y = 2$ give $92$."
                },
                {
                  "step": "No: the inputs $2$ and $0$ give two different outputs when they trade places.",
                  "reason": "Commutative operation: one pair of inputs whose output changes when they trade places shows that the operation is not commutative."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t162-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $(6 \\bullet 3) + ((-5) \\bullet 7) + (3 \\bullet 5)$, where $x \\bullet y = -9x^2 - 3y + 8$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
            "given": [
              "$6 \\bullet 3 = -9(3)^2 - 3(6) + 8 = -91$",
              "$(-5) \\bullet 7 = -9(-5)^2 - 3(7) + 8 = -238$",
              "$3 \\bullet 5 = -9(3)^2 - 3(5) + 8 = -88$",
              "$(6 \\bullet 3) + ((-5) \\bullet 7) + (3 \\bullet 5) = -91 - 238 - 88 = -417$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $(6 \\bullet 3) + ((-5) \\bullet 7) + (3 \\bullet 5)$, where $x \\bullet y = -9x^2 - 3y + 8$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 puts $3$ where $x$ stands and $6$ where $y$ stands, as if the two inputs could trade places.",
                "reason": "Operation: in $6 \\bullet 3$ the first input $6$ stands where $x$ is; this operation is not commutative, so the order matters."
              },
              {
                "step": "Line 1 written right is $6 \\bullet 3 = -9(6)^2 - 3(3) + 8 = -325$.",
                "reason": "Operation: $6$ stands where $x$ is and $3$ where $y$ is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $(7 \\triangle (-5)) + ((-7) \\triangle 4) + (3 \\triangle (-5))$, where $x \\triangle y = 9xy - 5y - 3$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$7 \\triangle (-5) = 9(7)(-5) - 5(-5) - 3 = -293$",
                "$(-7) \\triangle 4 = 9(4)(-7) - 5(-7) - 3 = -220$",
                "$3 \\triangle (-5) = 9(3)(-5) - 5(-5) - 3 = -113$",
                "$(7 \\triangle (-5)) + ((-7) \\triangle 4) + (3 \\triangle (-5)) = -293 - 220 - 113 = -626$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 9*(-7)*(4)-5*(4)-3 = -275",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(7 \\triangle (-5)) + ((-7) \\triangle 4) + (3 \\triangle (-5))$, where $x \\triangle y = 9xy - 5y - 3$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 puts $4$ where $x$ stands and $-7$ where $y$ stands, as if the two inputs could trade places.",
                  "reason": "Operation: in $(-7) \\triangle 4$ the first input $-7$ stands where $x$ is; this operation is not commutative, so the order matters."
                },
                {
                  "step": "Line 2 written right is $(-7) \\triangle 4 = 9(-7)(4) - 5(4) - 3 = -275$.",
                  "reason": "Operation: $-7$ stands where $x$ is and $4$ where $y$ is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $((-7) \\star 5) + (3 \\star 4) + ((-3) \\star 3)$, where $x \\star y = 8y^2 - 8y + 9$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$(-7) \\star 5 = 8(5)^2 - 8(5) + 9 = 169$",
                "$3 \\star 4 = 8(4)^2 - 8(4) + 9 = 105$",
                "$(-3) \\star 3 = 8(-3)^2 - 8(-3) + 9 = 105$",
                "$((-7) \\star 5) + (3 \\star 4) + ((-3) \\star 3) = 169 + 105 + 105 = 379$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 8*(3)^2-8*(3)+9 = 57",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $((-7) \\star 5) + (3 \\star 4) + ((-3) \\star 3)$, where $x \\star y = 8y^2 - 8y + 9$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts $3$ where $x$ stands and $-3$ where $y$ stands, as if the two inputs could trade places.",
                  "reason": "Operation: in $(-3) \\star 3$ the first input $-3$ stands where $x$ is; this operation is not commutative, so the order matters."
                },
                {
                  "step": "Line 3 written right is $(-3) \\star 3 = 8(3)^2 - 8(3) + 9 = 57$.",
                  "reason": "Operation: $-3$ stands where $x$ is and $3$ where $y$ is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $(6 \\diamond 7) + (6 \\diamond (-5)) + (6 \\diamond (-2))$, where $x \\diamond y = 6xy + 3x + 7y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$6 \\diamond 7 = 6(7)(6) + 3(7) + 7(6) = 315$",
                "$6 \\diamond (-5) = 6(6)(-5) + 3(6) + 7(-5) = -197$",
                "$6 \\diamond (-2) = 6(6)(-2) + 3(6) + 7(-2) = -68$",
                "$(6 \\diamond 7) + (6 \\diamond (-5)) + (6 \\diamond (-2)) = 315 - 197 - 68 = 50$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 6*(6)*(7)+3*(6)+7*(7) = 319",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(6 \\diamond 7) + (6 \\diamond (-5)) + (6 \\diamond (-2))$, where $x \\diamond y = 6xy + 3x + 7y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 puts $7$ where $x$ stands and $6$ where $y$ stands, as if the two inputs could trade places.",
                  "reason": "Operation: in $6 \\diamond 7$ the first input $6$ stands where $x$ is; this operation is not commutative, so the order matters."
                },
                {
                  "step": "Line 1 written right is $6 \\diamond 7 = 6(6)(7) + 3(6) + 7(7) = 319$.",
                  "reason": "Operation: $6$ stands where $x$ is and $7$ where $y$ is."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $(3 \\bullet (-5)) + ((-7) \\bullet (-3)) + (4 \\bullet 2)$, where $x \\bullet y = 5xy - 3y + 3$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
            "given": [
              "$3 \\bullet (-5) = -57$",
              "$(-7) \\bullet (-3) = 21$",
              "$4 \\bullet 2 = 37$",
              "$(3 \\bullet (-5)) + ((-7) \\bullet (-3)) + (4 \\bullet 2) = -57 + 21 + 37 = 1$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $(3 \\bullet (-5)) + ((-7) \\bullet (-3)) + (4 \\bullet 2)$, where $x \\bullet y = 5xy - 3y + 3$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 gives $21$, the product $-7 \\cdot (-3)$, as if $\\bullet$ were a times sign.",
                "reason": "Operation: the sign $\\bullet$ stands for its own rule, $x \\bullet y = 5xy - 3y + 3$, never for a product."
              },
              {
                "step": "Line 2 written right is $(-7) \\bullet (-3) = 5(-7)(-3) - 3(-3) + 3 = 117$.",
                "reason": "Operation: $-7$ stands where $x$ is and $-3$ where $y$ is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $(6 \\triangle (-5)) + (2 \\triangle 4) + ((-3) \\triangle 5)$, where $x \\triangle y = -8x^2 + 6y - 4$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$6 \\triangle (-5) = -322$",
                "$2 \\triangle 4 = -12$",
                "$(-3) \\triangle 5 = -15$",
                "$(6 \\triangle (-5)) + (2 \\triangle 4) + ((-3) \\triangle 5) = -322 - 12 - 15 = -349$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -8*(-3)^2+6*(5)-4 = -46",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(6 \\triangle (-5)) + (2 \\triangle 4) + ((-3) \\triangle 5)$, where $x \\triangle y = -8x^2 + 6y - 4$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives $-15$, the product $-3 \\cdot 5$, as if $\\triangle$ were a times sign.",
                  "reason": "Operation: the sign $\\triangle$ stands for its own rule, $x \\triangle y = -8x^2 + 6y - 4$, never for a product."
                },
                {
                  "step": "Line 3 written right is $(-3) \\triangle 5 = -8(-3)^2 + 6(5) - 4 = -46$.",
                  "reason": "Operation: $-3$ stands where $x$ is and $5$ where $y$ is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $((-2) \\star (-5)) + ((-6) \\star 6) + ((-7) \\star 7)$, where $x \\star y = 6y^2 - 2x - 6$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$(-2) \\star (-5) = 10$",
                "$(-6) \\star 6 = 222$",
                "$(-7) \\star 7 = 302$",
                "$((-2) \\star (-5)) + ((-6) \\star 6) + ((-7) \\star 7) = 10 + 222 + 302 = 534$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 6*(-5)^2-2*(-2)-6 = 148",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $((-2) \\star (-5)) + ((-6) \\star 6) + ((-7) \\star 7)$, where $x \\star y = 6y^2 - 2x - 6$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 gives $10$, the product $-2 \\cdot (-5)$, as if $\\star$ were a times sign.",
                  "reason": "Operation: the sign $\\star$ stands for its own rule, $x \\star y = 6y^2 - 2x - 6$, never for a product."
                },
                {
                  "step": "Line 1 written right is $(-2) \\star (-5) = 6(-5)^2 - 2(-2) - 6 = 148$.",
                  "reason": "Operation: $-2$ stands where $x$ is and $-5$ where $y$ is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $((-4) \\diamond 6) + (2 \\diamond (-3)) + ((-5) \\diamond (-2))$, where $x \\diamond y = -3x^2 + 7x - 6$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$(-4) \\diamond 6 = -82$",
                "$2 \\diamond (-3) = -6$",
                "$(-5) \\diamond (-2) = -116$",
                "$((-4) \\diamond 6) + (2 \\diamond (-3)) + ((-5) \\diamond (-2)) = -82 - 6 - 116 = -204$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -3*(2)^2+7*(2)-6 = -4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $((-4) \\diamond 6) + (2 \\diamond (-3)) + ((-5) \\diamond (-2))$, where $x \\diamond y = -3x^2 + 7x - 6$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives $-6$, the product $2 \\cdot (-3)$, as if $\\diamond$ were a times sign.",
                  "reason": "Operation: the sign $\\diamond$ stands for its own rule, $x \\diamond y = -3x^2 + 7x - 6$, never for a product."
                },
                {
                  "step": "Line 2 written right is $2 \\diamond (-3) = -3(2)^2 + 7(2) - 6 = -4$.",
                  "reason": "Operation: $2$ stands where $x$ is and $-3$ where $y$ is."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $((-3) \\bullet (2 \\bullet 5)) + (5 \\bullet ((-5) \\bullet 2))$, where $x \\bullet y = -4xy + 7x + 2y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
            "given": [
              "$(-3) \\bullet (2 \\bullet 5) = (-4(-3)(2) + 7(-3) + 2(2)) \\bullet 5 = 7 \\bullet 5$",
              "$7 \\bullet 5 = -4(7)(5) + 7(7) + 2(5) = -81$",
              "$5 \\bullet ((-5) \\bullet 2) = 5 \\bullet (-4(-5)(2) + 7(-5) + 2(2)) = 5 \\bullet 9$",
              "$5 \\bullet 9 = -4(5)(9) + 7(5) + 2(9) = -127$",
              "$((-3) \\bullet (2 \\bullet 5)) + (5 \\bullet ((-5) \\bullet 2)) = -81 - 127 = -208$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $((-3) \\bullet (2 \\bullet 5)) + (5 \\bullet ((-5) \\bullet 2))$, where $x \\bullet y = -4xy + 7x + 2y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 works $(-3) \\bullet 2$ first, the outer operation, and leaves $5$ as the second input.",
                "reason": "Order of operations: the operation inside the brackets, $2 \\bullet 5$, is worked first."
              },
              {
                "step": "Line 1 written right is $(-3) \\bullet (2 \\bullet 5) = (-3) \\bullet (-4(2)(5) + 7(2) + 2(5)) = (-3) \\bullet (-16)$.",
                "reason": "Operation: $2$ stands where $x$ is and $5$ where $y$ is, and the value $-16$ becomes the second input."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $((-3) \\triangle (4 \\triangle (-6))) + ((-2) \\triangle (4 \\triangle (-4)))$, where $x \\triangle y = 3x^2 - 9x - 7y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$(-3) \\triangle (4 \\triangle (-6)) = (-3) \\triangle (3(4)^2 - 9(4) - 7(-6)) = (-3) \\triangle 54$",
                "$(-3) \\triangle 54 = 3(-3)^2 - 9(-3) - 7(54) = -324$",
                "$(-2) \\triangle (4 \\triangle (-4)) = (3(-2)^2 - 9(-2) - 7(4)) \\triangle (-4) = 2 \\triangle (-4)$",
                "$2 \\triangle (-4) = 3(2)^2 - 9(2) - 7(-4) = 22$",
                "$((-3) \\triangle (4 \\triangle (-6))) + ((-2) \\triangle (4 \\triangle (-4))) = -324 + 22 = -302$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3*(4)^2-9*(4)-7*(-4) = 40",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $((-3) \\triangle (4 \\triangle (-6))) + ((-2) \\triangle (4 \\triangle (-4)))$, where $x \\triangle y = 3x^2 - 9x - 7y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 works $(-2) \\triangle 4$ first, the outer operation, and leaves $-4$ as the second input.",
                  "reason": "Order of operations: the operation inside the brackets, $4 \\triangle (-4)$, is worked first."
                },
                {
                  "step": "Line 3 written right is $(-2) \\triangle (4 \\triangle (-4)) = (-2) \\triangle (3(4)^2 - 9(4) - 7(-4)) = (-2) \\triangle 40$.",
                  "reason": "Operation: $4$ stands where $x$ is and $-4$ where $y$ is, and the value $40$ becomes the second input."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $((-4) \\star (3 \\star 4)) + (2 \\star ((-2) \\star (-6)))$, where $x \\star y = -2xy - 2y - 7$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$(-4) \\star (3 \\star 4) = (-2(-4)(3) - 2(3) - 7) \\star 4 = 11 \\star 4$",
                "$11 \\star 4 = -2(11)(4) - 2(4) - 7 = -103$",
                "$2 \\star ((-2) \\star (-6)) = 2 \\star (-2(-2)(-6) - 2(-6) - 7) = 2 \\star (-19)$",
                "$2 \\star (-19) = -2(2)(-19) - 2(-19) - 7 = 107$",
                "$((-4) \\star (3 \\star 4)) + (2 \\star ((-2) \\star (-6))) = -103 + 107 = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: -2*(3)*(4)-2*(4)-7 = -39",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $((-4) \\star (3 \\star 4)) + (2 \\star ((-2) \\star (-6)))$, where $x \\star y = -2xy - 2y - 7$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 works $(-4) \\star 3$ first, the outer operation, and leaves $4$ as the second input.",
                  "reason": "Order of operations: the operation inside the brackets, $3 \\star 4$, is worked first."
                },
                {
                  "step": "Line 1 written right is $(-4) \\star (3 \\star 4) = (-4) \\star (-2(3)(4) - 2(4) - 7) = (-4) \\star (-39)$.",
                  "reason": "Operation: $3$ stands where $x$ is and $4$ where $y$ is, and the value $-39$ becomes the second input."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $(5 \\diamond (2 \\diamond (-2))) + (2 \\diamond ((-2) \\diamond (-4)))$, where $x \\diamond y = 4xy + 9x - 6y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
              "given": [
                "$5 \\diamond (2 \\diamond (-2)) = 5 \\diamond (4(2)(-2) + 9(2) - 6(-2)) = 5 \\diamond 14$",
                "$5 \\diamond 14 = 4(5)(14) + 9(5) - 6(14) = 241$",
                "$2 \\diamond ((-2) \\diamond (-4)) = (4(2)(-2) + 9(2) - 6(-2)) \\diamond (-4) = 14 \\diamond (-4)$",
                "$14 \\diamond (-4) = 4(14)(-4) + 9(14) - 6(-4) = -74$",
                "$(5 \\diamond (2 \\diamond (-2))) + (2 \\diamond ((-2) \\diamond (-4))) = 241 - 74 = 167$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*(-2)*(-4)+9*(-2)-6*(-4) = 38",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $(5 \\diamond (2 \\diamond (-2))) + (2 \\diamond ((-2) \\diamond (-4)))$, where $x \\diamond y = 4xy + 9x - 6y$ for every pair of numbers $x$ and $y$, and write that line right from the substitution on, without the operation sign.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 works $2 \\diamond (-2)$ first, the outer operation, and leaves $-4$ as the second input.",
                  "reason": "Order of operations: the operation inside the brackets, $(-2) \\diamond (-4)$, is worked first."
                },
                {
                  "step": "Line 3 written right is $2 \\diamond ((-2) \\diamond (-4)) = 2 \\diamond (4(-2)(-4) + 9(-2) - 6(-4)) = 2 \\diamond 38$.",
                  "reason": "Operation: $-2$ stands where $x$ is and $-4$ where $y$ is, and the value $38$ becomes the second input."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t162-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation for $z = x \\star y$, with $z$ alone on the left: The operation $\\star$ takes two numbers $x$ and $y$ to their product, increased by 9 times their sum.",
            "lines": [
              {
                "step": "Write this sentence as an equation for $z = x \\star y$, with $z$ alone on the left: The operation $\\star$ takes two numbers $x$ and $y$ to their product, increased by 9 times their sum.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The product of $x$ and $y$ is $xy$.",
                "reason": "Writing a sentence as an equation: the product of two numbers is the two multiplied."
              },
              {
                "step": "9 times their sum is $9(x + y)$.",
                "reason": "Writing a sentence as an equation: the sum $x + y$ is multiplied by $9$."
              },
              {
                "step": "$z = xy + 9(x + y)$",
                "reason": "Writing a sentence as an equation: increased by means the second amount is added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation for $z = x \\diamond y$, with $z$ alone on the left: The operation $\\diamond$ takes two numbers $x$ and $y$ to the square of their difference $x - y$, plus 11.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (x-y)^2+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z = x \\diamond y$, with $z$ alone on the left: The operation $\\diamond$ takes two numbers $x$ and $y$ to the square of their difference $x - y$, plus 11.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference is $x - y$.",
                  "reason": "Writing a sentence as an equation: the difference $x - y$ takes $y$ from $x$."
                },
                {
                  "step": "The square of the difference is $(x - y)^2$.",
                  "reason": "Writing a sentence as an equation: the square of a number is that number times itself."
                },
                {
                  "step": "$z = (x - y)^2 + 11$",
                  "reason": "Writing a sentence as an equation: plus means $11$ is added."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $z = x \\bullet y$, with $z$ alone on the left: The operation $\\bullet$ takes two numbers $x$ and $y$, with $y$ not zero, to 12 more than the quotient of $x$ by $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x/y+12",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z = x \\bullet y$, with $z$ alone on the left: The operation $\\bullet$ takes two numbers $x$ and $y$, with $y$ not zero, to 12 more than the quotient of $x$ by $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quotient of $x$ by $y$ is $\\dfrac{x}{y}$.",
                  "reason": "Writing a sentence as an equation: the quotient of $x$ by $y$ is $x$ divided by $y$."
                },
                {
                  "step": "12 more than that is $\\dfrac{x}{y} + 12$.",
                  "reason": "Writing a sentence as an equation: more than means $12$ is added."
                },
                {
                  "step": "$z = \\dfrac{x}{y} + 12$",
                  "reason": "Writing a sentence as an equation: the output of the operation is that amount."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation for $z = x \\triangle y$, with $z$ alone on the left: The operation $\\triangle$ takes two numbers $x$ and $y$ to the product of 14 more than $x$ and 2 less than $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (x+14)*(y-2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation for $z = x \\triangle y$, with $z$ alone on the left: The operation $\\triangle$ takes two numbers $x$ and $y$ to the product of 14 more than $x$ and 2 less than $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "14 more than $x$ is $x + 14$, and 2 less than $y$ is $y - 2$.",
                  "reason": "Writing a sentence as an equation: more than adds, and less than takes away."
                },
                {
                  "step": "Their product is $(x + 14)(y - 2)$.",
                  "reason": "Writing a sentence as an equation: the product of two numbers is the two multiplied."
                },
                {
                  "step": "$z = (x + 14)(y - 2)$",
                  "reason": "Writing a sentence as an equation: the output of the operation is that product."
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
