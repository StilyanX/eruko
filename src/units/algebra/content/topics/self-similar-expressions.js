export default {
  "number": 184,
  "title": "Expressions that contain themselves",
  "section": 21,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "631-635"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the value of $\\sqrt{308 - 17\\sqrt{308 - 17\\sqrt{308 - \\cdots}}}$, given that it has a value.",
    "form": "Answer as an integer.",
    "answer": "11",
    "solution": [
      "Find the value of $\\sqrt{308 - 17\\sqrt{308 - 17\\sqrt{308 - \\cdots}}}$, given that it has a value.",
      "$x = \\sqrt{308 - 17\\sqrt{308 - 17\\sqrt{308 - \\cdots}}}$",
      "$x = \\sqrt{308 - 17x}$",
      "$x^2 = 308 - 17x$",
      "$x^2 + 17x - 308 = 0$",
      "$(x - 11)(x + 28) = 0$",
      "Either $x = 11$ or $x = -28$.",
      "$x = 11$"
    ]
  },
  "ideas": [
    {
      "name": "Self-similar expression",
      "concrete": "In $\\sqrt{40 + 3\\sqrt{40 + 3\\sqrt{40 + \\cdots}}}$ the roots go on without end, and the root that the first $3$ multiplies is the whole expression again.",
      "general": "An expression whose pattern goes on without end, shown by dots, is **self-similar** when a part of it is the whole expression again. Its value, where it has one, is the limit of the numbers found by cutting the pattern off after more and more steps, the limit as arithmetic's decimals topic defines it."
    },
    {
      "name": "Set it equal to a letter and find the letter inside it",
      "concrete": "Given that $4 + \\dfrac{5}{4 + \\dfrac{5}{4 + \\cdots}}$ has a value, call it $x$. The bottom of the first fraction is the whole expression again, so $x = 4 + \\dfrac{5}{x}$. Then $x^2 - 4x - 5 = 0$, so $x = 5$ or $x = -1$, and the value is $5$, since every number in the expression is positive.",
      "general": "Given that a self-similar expression has a value, call that value $x$. The part that is the whole expression again also has the value $x$, so writing $x$ in its place gives an equation in $x$ with no dots. The value is a solution of that equation. Where the equation has more than one solution, the sign of the expression picks out the value: a square root is never negative, and an expression built from positive numbers by adding and dividing is positive."
    }
  ],
  "kinds": [
    {
      "id": "t184-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $\\sqrt{63 + 18\\sqrt{63 + 18\\sqrt{63 + \\cdots}}}$, given that it has a value.",
            "lines": [
              {
                "step": "Find the value of $\\sqrt{63 + 18\\sqrt{63 + 18\\sqrt{63 + \\cdots}}}$, given that it has a value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\sqrt{63 + 18\\sqrt{63 + 18\\sqrt{63 + \\cdots}}}$",
                "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
              },
              {
                "step": "$x = \\sqrt{63 + 18x}$",
                "reason": "Self-similar expression: the root that $18$ multiplies, $\\sqrt{63 + 18\\sqrt{63 + \\cdots}}$, is the whole expression again, so it is $x$."
              },
              {
                "step": "$x^2 = 63 + 18x$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{63 + 18x}$ is $63 + 18x$."
              },
              {
                "step": "$x^2 - 18x - 63 = 0$",
                "reason": "Adding the same number to both sides: $63 + 18x$ is taken from each side."
              },
              {
                "step": "$(x - 21)(x + 3) = 0$",
                "reason": "Factoring a quadratic: $-21$ and $3$ have sum $-18$ and product $-63$."
              },
              {
                "step": "Either $x = 21$ or $x = -3$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "$x = 21$",
                "reason": "Positive square root: $\\sqrt{63 + 18x}$ is never negative, so $x = -3$ is not the value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $\\sqrt{1560 - 22\\sqrt{1560 - 22\\sqrt{1560 - \\cdots}}}$, given that it has a value.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the value of $\\sqrt{1560 - 22\\sqrt{1560 - 22\\sqrt{1560 - \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{1560 - 22\\sqrt{1560 - 22\\sqrt{1560 - \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = \\sqrt{1560 - 22x}$",
                  "reason": "Self-similar expression: the root that $22$ multiplies, $\\sqrt{1560 - 22\\sqrt{1560 - \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 1560 - 22x$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{1560 - 22x}$ is $1560 - 22x$."
                },
                {
                  "step": "$x^2 + 22x - 1560 = 0$",
                  "reason": "Adding the same number to both sides: $1560 - 22x$ is taken from each side."
                },
                {
                  "step": "$(x - 30)(x + 52) = 0$",
                  "reason": "Factoring a quadratic: $-30$ and $52$ have sum $22$ and product $-1560$."
                },
                {
                  "step": "Either $x = 30$ or $x = -52$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 30$",
                  "reason": "Positive square root: $\\sqrt{1560 - 22x}$ is never negative, so $x = -52$ is not the value."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\sqrt{162 + 21\\sqrt{162 + 21\\sqrt{162 + \\cdots}}}$, given that it has a value.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Find the value of $\\sqrt{162 + 21\\sqrt{162 + 21\\sqrt{162 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{162 + 21\\sqrt{162 + 21\\sqrt{162 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = \\sqrt{162 + 21x}$",
                  "reason": "Self-similar expression: the root that $21$ multiplies, $\\sqrt{162 + 21\\sqrt{162 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 162 + 21x$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{162 + 21x}$ is $162 + 21x$."
                },
                {
                  "step": "$x^2 - 21x - 162 = 0$",
                  "reason": "Adding the same number to both sides: $162 + 21x$ is taken from each side."
                },
                {
                  "step": "$(x - 27)(x + 6) = 0$",
                  "reason": "Factoring a quadratic: $-27$ and $6$ have sum $-21$ and product $-162$."
                },
                {
                  "step": "Either $x = 27$ or $x = -6$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 27$",
                  "reason": "Positive square root: $\\sqrt{162 + 21x}$ is never negative, so $x = -6$ is not the value."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\sqrt{731 - 26\\sqrt{731 - 26\\sqrt{731 - \\cdots}}}$, given that it has a value.",
              "form": "Answer as an integer.",
              "answer": "17",
              "lines": [
                {
                  "step": "Find the value of $\\sqrt{731 - 26\\sqrt{731 - 26\\sqrt{731 - \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{731 - 26\\sqrt{731 - 26\\sqrt{731 - \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = \\sqrt{731 - 26x}$",
                  "reason": "Self-similar expression: the root that $26$ multiplies, $\\sqrt{731 - 26\\sqrt{731 - \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 731 - 26x$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{731 - 26x}$ is $731 - 26x$."
                },
                {
                  "step": "$x^2 + 26x - 731 = 0$",
                  "reason": "Adding the same number to both sides: $731 - 26x$ is taken from each side."
                },
                {
                  "step": "$(x - 17)(x + 43) = 0$",
                  "reason": "Factoring a quadratic: $-17$ and $43$ have sum $26$ and product $-731$."
                },
                {
                  "step": "Either $x = 17$ or $x = -43$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 17$",
                  "reason": "Positive square root: $\\sqrt{731 - 26x}$ is never negative, so $x = -43$ is not the value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t184-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\cdots}}}$, given that it has a value.",
            "lines": [
              {
                "step": "Find the value of $32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\cdots}}}$, given that it has a value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\cdots}}}$",
                "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
              },
              {
                "step": "$x = 32 + \\dfrac{105}{x}$",
                "reason": "Self-similar expression: the bottom of the first fraction, $32 + \\dfrac{105}{32 + \\dfrac{105}{32 + \\cdots}}$, is the whole expression again, so it is $x$."
              },
              {
                "step": "$x^2 = 32x + 105$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{105}{x} = 105$."
              },
              {
                "step": "$x^2 - 32x - 105 = 0$",
                "reason": "Adding the same number to both sides: $32x + 105$ is taken from each side."
              },
              {
                "step": "$(x - 35)(x + 3) = 0$",
                "reason": "Factoring a quadratic: $-35$ and $3$ have sum $-32$ and product $-105$."
              },
              {
                "step": "Either $x = 35$ or $x = -3$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "$x = 35$",
                "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -3$ is not the value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\cdots}}}$, given that it has a value.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find the value of $19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = 19 + \\dfrac{252}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $19 + \\dfrac{252}{19 + \\dfrac{252}{19 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 19x + 252$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{252}{x} = 252$."
                },
                {
                  "step": "$x^2 - 19x - 252 = 0$",
                  "reason": "Adding the same number to both sides: $19x + 252$ is taken from each side."
                },
                {
                  "step": "$(x - 28)(x + 9) = 0$",
                  "reason": "Factoring a quadratic: $-28$ and $9$ have sum $-19$ and product $-252$."
                },
                {
                  "step": "Either $x = 28$ or $x = -9$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 28$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -9$ is not the value."
                }
              ]
            },
            {
              "prompt": "Find the value of $39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\cdots}}}$, given that it has a value.",
              "form": "Answer as an integer.",
              "answer": "44",
              "lines": [
                {
                  "step": "Find the value of $39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = 39 + \\dfrac{220}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $39 + \\dfrac{220}{39 + \\dfrac{220}{39 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 39x + 220$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{220}{x} = 220$."
                },
                {
                  "step": "$x^2 - 39x - 220 = 0$",
                  "reason": "Adding the same number to both sides: $39x + 220$ is taken from each side."
                },
                {
                  "step": "$(x - 44)(x + 5) = 0$",
                  "reason": "Factoring a quadratic: $-44$ and $5$ have sum $-39$ and product $-220$."
                },
                {
                  "step": "Either $x = 44$ or $x = -5$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 44$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -5$ is not the value."
                }
              ]
            },
            {
              "prompt": "Find the value of $34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\cdots}}}$, given that it has a value.",
              "form": "Answer as an integer.",
              "answer": "40",
              "lines": [
                {
                  "step": "Find the value of $34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = 34 + \\dfrac{240}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $34 + \\dfrac{240}{34 + \\dfrac{240}{34 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 34x + 240$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{240}{x} = 240$."
                },
                {
                  "step": "$x^2 - 34x - 240 = 0$",
                  "reason": "Adding the same number to both sides: $34x + 240$ is taken from each side."
                },
                {
                  "step": "$(x - 40)(x + 6) = 0$",
                  "reason": "Factoring a quadratic: $-40$ and $6$ have sum $-34$ and product $-240$."
                },
                {
                  "step": "Either $x = 40$ or $x = -6$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 40$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -6$ is not the value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\cdots}}}$, given that it has a value.",
            "lines": [
              {
                "step": "Find the value of $25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\cdots}}}$, given that it has a value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\cdots}}}$",
                "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
              },
              {
                "step": "$x = 25 + \\dfrac{43}{x}$",
                "reason": "Self-similar expression: the bottom of the first fraction, $25 + \\dfrac{43}{25 + \\dfrac{43}{25 + \\cdots}}$, is the whole expression again, so it is $x$."
              },
              {
                "step": "$x^2 = 25x + 43$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{43}{x} = 43$."
              },
              {
                "step": "$x^2 - 25x - 43 = 0$",
                "reason": "Adding the same number to both sides: $25x + 43$ is taken from each side."
              },
              {
                "step": "$x = \\dfrac{25 \\pm \\sqrt{797}}{2}$",
                "reason": "Quadratic formula: with $a = 1$, $b = -25$ and $c = -43$, the number under the root is $b^2 - 4ac = 625 + 172 = 797$."
              },
              {
                "step": "$\\sqrt{797} > 25$",
                "reason": "Powers and roots of positive numbers keep the order: $797$ is above $25^2 = 625$, so $\\sqrt{797}$ is above $\\sqrt{625} = 25$."
              },
              {
                "step": "$x = \\dfrac{25 + \\sqrt{797}}{2}$",
                "reason": "Quotient of positive rational numbers: every number in the expression is positive, so its value is positive, and $25 - \\sqrt{797}$ is negative, so the minus sign does not give the value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\cdots}}}$, given that it has a value.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(11+sqrt(233))/2",
              "lines": [
                {
                  "step": "Find the value of $11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = 11 + \\dfrac{28}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $11 + \\dfrac{28}{11 + \\dfrac{28}{11 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 11x + 28$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{28}{x} = 28$."
                },
                {
                  "step": "$x^2 - 11x - 28 = 0$",
                  "reason": "Adding the same number to both sides: $11x + 28$ is taken from each side."
                },
                {
                  "step": "$x = \\dfrac{11 \\pm \\sqrt{233}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = -11$ and $c = -28$, the number under the root is $b^2 - 4ac = 121 + 112 = 233$."
                },
                {
                  "step": "$\\sqrt{233} > 11$",
                  "reason": "Powers and roots of positive numbers keep the order: $233$ is above $11^2 = 121$, so $\\sqrt{233}$ is above $\\sqrt{121} = 11$."
                },
                {
                  "step": "$x = \\dfrac{11 + \\sqrt{233}}{2}$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so its value is positive, and $11 - \\sqrt{233}$ is negative, so the minus sign does not give the value."
                }
              ]
            },
            {
              "prompt": "Find the value of $29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\cdots}}}$, given that it has a value.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(29+sqrt(997))/2",
              "lines": [
                {
                  "step": "Find the value of $29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = 29 + \\dfrac{39}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $29 + \\dfrac{39}{29 + \\dfrac{39}{29 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 29x + 39$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{39}{x} = 39$."
                },
                {
                  "step": "$x^2 - 29x - 39 = 0$",
                  "reason": "Adding the same number to both sides: $29x + 39$ is taken from each side."
                },
                {
                  "step": "$x = \\dfrac{29 \\pm \\sqrt{997}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = -29$ and $c = -39$, the number under the root is $b^2 - 4ac = 841 + 156 = 997$."
                },
                {
                  "step": "$\\sqrt{997} > 29$",
                  "reason": "Powers and roots of positive numbers keep the order: $997$ is above $29^2 = 841$, so $\\sqrt{997}$ is above $\\sqrt{841} = 29$."
                },
                {
                  "step": "$x = \\dfrac{29 + \\sqrt{997}}{2}$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so its value is positive, and $29 - \\sqrt{997}$ is negative, so the minus sign does not give the value."
                }
              ]
            },
            {
              "prompt": "Find the value of $21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\cdots}}}$, given that it has a value.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(21+sqrt(617))/2",
              "lines": [
                {
                  "step": "Find the value of $21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the value of the expression is called $x$."
                },
                {
                  "step": "$x = 21 + \\dfrac{44}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $21 + \\dfrac{44}{21 + \\dfrac{44}{21 + \\cdots}}$, is the whole expression again, so it is $x$."
                },
                {
                  "step": "$x^2 = 21x + 44$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{44}{x} = 44$."
                },
                {
                  "step": "$x^2 - 21x - 44 = 0$",
                  "reason": "Adding the same number to both sides: $21x + 44$ is taken from each side."
                },
                {
                  "step": "$x = \\dfrac{21 \\pm \\sqrt{617}}{2}$",
                  "reason": "Quadratic formula: with $a = 1$, $b = -21$ and $c = -44$, the number under the root is $b^2 - 4ac = 441 + 176 = 617$."
                },
                {
                  "step": "$\\sqrt{617} > 21$",
                  "reason": "Powers and roots of positive numbers keep the order: $617$ is above $21^2 = 441$, so $\\sqrt{617}$ is above $\\sqrt{441} = 21$."
                },
                {
                  "step": "$x = \\dfrac{21 + \\sqrt{617}}{2}$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so its value is positive, and $21 - \\sqrt{617}$ is negative, so the minus sign does not give the value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $9 + \\dfrac{19}{33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\cdots}}}}$, given that it has a value.",
            "lines": [
              {
                "step": "Find the value of $9 + \\dfrac{19}{33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\cdots}}}}$, given that it has a value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\cdots}}}$",
                "reason": "Set it equal to a letter and find the letter inside it: the part that repeats, the bottom of the first fraction, is called $x$."
              },
              {
                "step": "$x = 33 + \\dfrac{280}{x}$",
                "reason": "Self-similar expression: the bottom of the first fraction, $33 + \\dfrac{280}{33 + \\dfrac{280}{33 + \\cdots}}$, is the part that repeats again, so it is $x$."
              },
              {
                "step": "$x^2 = 33x + 280$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{280}{x} = 280$."
              },
              {
                "step": "$x^2 - 33x - 280 = 0$",
                "reason": "Adding the same number to both sides: $33x + 280$ is taken from each side."
              },
              {
                "step": "$(x - 40)(x + 7) = 0$",
                "reason": "Factoring a quadratic: $-40$ and $7$ have sum $-33$ and product $-280$."
              },
              {
                "step": "Either $x = 40$ or $x = -7$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "$x = 40$",
                "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -7$ is not the value."
              },
              {
                "step": "The value is $9 + \\dfrac{19}{40}$.",
                "reason": "Substituting a value: the bottom of the first fraction of the expression is $x$, replaced by its value $40$."
              },
              {
                "step": "The value is $\\dfrac{379}{40}$.",
                "reason": "Sum of positive rational numbers: $9 = \\dfrac{360}{40}$, and $360 + 19 = 379$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $4 + \\dfrac{35}{12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\cdots}}}}$, given that it has a value.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "111/19",
              "lines": [
                {
                  "step": "Find the value of $4 + \\dfrac{35}{12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\cdots}}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the part that repeats, the bottom of the first fraction, is called $x$."
                },
                {
                  "step": "$x = 12 + \\dfrac{133}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $12 + \\dfrac{133}{12 + \\dfrac{133}{12 + \\cdots}}$, is the part that repeats again, so it is $x$."
                },
                {
                  "step": "$x^2 = 12x + 133$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{133}{x} = 133$."
                },
                {
                  "step": "$x^2 - 12x - 133 = 0$",
                  "reason": "Adding the same number to both sides: $12x + 133$ is taken from each side."
                },
                {
                  "step": "$(x - 19)(x + 7) = 0$",
                  "reason": "Factoring a quadratic: $-19$ and $7$ have sum $-12$ and product $-133$."
                },
                {
                  "step": "Either $x = 19$ or $x = -7$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 19$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -7$ is not the value."
                },
                {
                  "step": "The value is $4 + \\dfrac{35}{19}$.",
                  "reason": "Substituting a value: the bottom of the first fraction of the expression is $x$, replaced by its value $19$."
                },
                {
                  "step": "The value is $\\dfrac{111}{19}$.",
                  "reason": "Sum of positive rational numbers: $4 = \\dfrac{76}{19}$, and $76 + 35 = 111$."
                }
              ]
            },
            {
              "prompt": "Find the value of $5 + \\dfrac{23}{8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\cdots}}}}$, given that it has a value.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "103/16",
              "lines": [
                {
                  "step": "Find the value of $5 + \\dfrac{23}{8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\cdots}}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the part that repeats, the bottom of the first fraction, is called $x$."
                },
                {
                  "step": "$x = 8 + \\dfrac{128}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $8 + \\dfrac{128}{8 + \\dfrac{128}{8 + \\cdots}}$, is the part that repeats again, so it is $x$."
                },
                {
                  "step": "$x^2 = 8x + 128$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{128}{x} = 128$."
                },
                {
                  "step": "$x^2 - 8x - 128 = 0$",
                  "reason": "Adding the same number to both sides: $8x + 128$ is taken from each side."
                },
                {
                  "step": "$(x - 16)(x + 8) = 0$",
                  "reason": "Factoring a quadratic: $-16$ and $8$ have sum $-8$ and product $-128$."
                },
                {
                  "step": "Either $x = 16$ or $x = -8$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 16$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -8$ is not the value."
                },
                {
                  "step": "The value is $5 + \\dfrac{23}{16}$.",
                  "reason": "Substituting a value: the bottom of the first fraction of the expression is $x$, replaced by its value $16$."
                },
                {
                  "step": "The value is $\\dfrac{103}{16}$.",
                  "reason": "Sum of positive rational numbers: $5 = \\dfrac{80}{16}$, and $80 + 23 = 103$."
                }
              ]
            },
            {
              "prompt": "Find the value of $15 + \\dfrac{12}{18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\cdots}}}}$, given that it has a value.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "357/23",
              "lines": [
                {
                  "step": "Find the value of $15 + \\dfrac{12}{18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\cdots}}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\cdots}}}$",
                  "reason": "Set it equal to a letter and find the letter inside it: the part that repeats, the bottom of the first fraction, is called $x$."
                },
                {
                  "step": "$x = 18 + \\dfrac{115}{x}$",
                  "reason": "Self-similar expression: the bottom of the first fraction, $18 + \\dfrac{115}{18 + \\dfrac{115}{18 + \\cdots}}$, is the part that repeats again, so it is $x$."
                },
                {
                  "step": "$x^2 = 18x + 115$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, and $x \\cdot \\dfrac{115}{x} = 115$."
                },
                {
                  "step": "$x^2 - 18x - 115 = 0$",
                  "reason": "Adding the same number to both sides: $18x + 115$ is taken from each side."
                },
                {
                  "step": "$(x - 23)(x + 5) = 0$",
                  "reason": "Factoring a quadratic: $-23$ and $5$ have sum $-18$ and product $-115$."
                },
                {
                  "step": "Either $x = 23$ or $x = -5$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "$x = 23$",
                  "reason": "Quotient of positive rational numbers: every number in the expression is positive, so each fraction in it is positive and so is its value, and $x = -5$ is not the value."
                },
                {
                  "step": "The value is $15 + \\dfrac{12}{23}$.",
                  "reason": "Substituting a value: the bottom of the first fraction of the expression is $x$, replaced by its value $23$."
                },
                {
                  "step": "The value is $\\dfrac{357}{23}$.",
                  "reason": "Sum of positive rational numbers: $15 = \\dfrac{345}{23}$, and $345 + 12 = 357$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t184-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the value of $\\sqrt{1118 - 17\\sqrt{1118 - 17\\sqrt{1118 - \\cdots}}}$, given that it has a value, and write that line right.",
            "given": [
              "$x = \\sqrt{1118 - 17\\sqrt{1118 - 17\\sqrt{1118 - \\cdots}}}$",
              "$x = \\sqrt{1118 - 17x}$",
              "$x^2 = 1118 + 17x$",
              "$x^2 - 17x - 1118 = 0$",
              "$(x - 43)(x + 26) = 0$",
              "$x = 43$ or $x = -26$",
              "$x = 43$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the value of $\\sqrt{1118 - 17\\sqrt{1118 - 17\\sqrt{1118 - \\cdots}}}$, given that it has a value, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 squares $\\sqrt{1118 - 17x}$ as $1118 + 17x$, with the sign of $17x$ changed.",
                "reason": "A sign lost: the square of $\\sqrt{1118 - 17x}$ is what stands under the root, $1118 - 17x$, with every sign kept."
              },
              {
                "step": "Lines 1 and 2 are right, and the lines after line 3 follow from it as it is written, so line 3 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds."
              },
              {
                "step": "Line 3 written right is $x^2 = 1118 - 17x$.",
                "reason": "The line written right follows from the line before it by a rule that holds, with every sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the value of $\\sqrt{222 + 31\\sqrt{222 + 31\\sqrt{222 + \\cdots}}}$, given that it has a value, and write that line right.",
              "given": [
                "$x = \\sqrt{222 + 31\\sqrt{222 + 31\\sqrt{222 + \\cdots}}}$",
                "$x = \\sqrt{222 + 31x}$",
                "$x^2 = 222 + 31x$",
                "$x^2 - 31x - 222 = 0$",
                "$(x - 37)(x + 6) = 0$",
                "$x = 37$ or $x = -6$",
                "$x = -6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x = 37",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the value of $\\sqrt{222 + 31\\sqrt{222 + 31\\sqrt{222 + \\cdots}}}$, given that it has a value, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 gives the negative solution $-6$ as the value.",
                  "reason": "A sign lost: by the positive square root, $\\sqrt{222 + 31x}$ is never negative, so the value is the solution that is not negative."
                },
                {
                  "step": "Lines 1 to 6 are right, and line 7 is the last line, so line 7 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 7 written right is $x = 37$.",
                  "reason": "The line written right follows from the line before it by a rule that holds, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the value of $\\sqrt{476 - 11\\sqrt{476 - 11\\sqrt{476 - \\cdots}}}$, given that it has a value, and write that line right.",
              "given": [
                "$x = \\sqrt{476 - 11\\sqrt{476 - 11\\sqrt{476 - \\cdots}}}$",
                "$x = \\sqrt{476 - 11x}$",
                "$x^2 = 476 - 11x$",
                "$x^2 - 11x - 476 = 0$",
                "$(x + 17)(x - 28) = 0$",
                "$x = 28$ or $x = -17$",
                "$x = 28$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x^2+11*x-476 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the value of $\\sqrt{476 - 11\\sqrt{476 - 11\\sqrt{476 - \\cdots}}}$, given that it has a value, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $476 - 11x$ from each side of line 3 but leaves $-11x$ on the left, where $+11x$ belongs.",
                  "reason": "A sign lost: taking $-11x$ away from the right side puts $+11x$ on the left."
                },
                {
                  "step": "Lines 1 to 3 are right, and the lines after line 4 follow from it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 written right is $x^2 + 11x - 476 = 0$.",
                  "reason": "The line written right follows from the line before it by a rule that holds, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the value of $\\sqrt{351 + 30\\sqrt{351 + 30\\sqrt{351 + \\cdots}}}$, given that it has a value, and write that line right.",
              "given": [
                "$x = \\sqrt{351 + 30\\sqrt{351 + 30\\sqrt{351 + \\cdots}}}$",
                "$x = \\sqrt{351 + 30x}$",
                "$x^2 = 351 + 30x$",
                "$x^2 - 30x - 351 = 0$",
                "$(x - 9)(x + 39) = 0$",
                "$x = 9$ or $x = -39$",
                "$x = 9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (x-39)*(x+9) = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the value of $\\sqrt{351 + 30\\sqrt{351 + 30\\sqrt{351 + \\cdots}}}$, given that it has a value, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 factors $x^2 - 30x - 351$ as $(x - 9)(x + 39)$, which multiplies out to $x^2 + 30x - 351$.",
                  "reason": "A sign lost: the two numbers with sum $-30$ and product $-351$ are $-39$ and $9$, so the brackets are $(x - 39)(x + 9)$."
                },
                {
                  "step": "Lines 1 to 4 are right, and the lines after line 5 follow from it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 5 written right is $(x - 39)(x + 9) = 0$.",
                  "reason": "The line written right follows from the line before it by a rule that holds, with every sign kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t184-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with $x$ alone on the left and one root sign on the right: The number $x$ is the value of $\\sqrt{78 + 10\\sqrt{78 + 10\\sqrt{78 + \\cdots}}}$, given that it has a value.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with $x$ alone on the left and one root sign on the right: The number $x$ is the value of $\\sqrt{78 + 10\\sqrt{78 + 10\\sqrt{78 + \\cdots}}}$, given that it has a value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\sqrt{78 + 10\\sqrt{78 + 10\\sqrt{78 + \\cdots}}}$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              },
              {
                "step": "The root that $10$ multiplies is the whole expression again.",
                "reason": "Self-similar expression: a part of the expression is the whole expression again."
              },
              {
                "step": "$x = \\sqrt{78 + 10x}$",
                "reason": "Set it equal to a letter and find the letter inside it: that part has the value $x$ too, so $x$ is written in its place, and the equation is left unsolved, as a Translate is never solved."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with $x$ alone on the left and a number plus one fraction on the right: The letter $x$ stands for the value of $13 + \\dfrac{36}{13 + \\dfrac{36}{13 + \\dfrac{36}{13 + \\cdots}}}$, given that it has a value.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 13+36/x",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $x$ alone on the left and a number plus one fraction on the right: The letter $x$ stands for the value of $13 + \\dfrac{36}{13 + \\dfrac{36}{13 + \\dfrac{36}{13 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 13 + \\dfrac{36}{13 + \\dfrac{36}{13 + \\dfrac{36}{13 + \\cdots}}}$",
                  "reason": "Writing a sentence as an equation: the words \"stands for\" mark the place of the equals sign."
                },
                {
                  "step": "The bottom of the first fraction is the whole expression again.",
                  "reason": "Self-similar expression: a part of the expression is the whole expression again."
                },
                {
                  "step": "$x = 13 + \\dfrac{36}{x}$",
                  "reason": "Set it equal to a letter and find the letter inside it: that part has the value $x$ too, so $x$ is written in its place, and the equation is left unsolved, as a Translate is never solved."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $x$ alone on the left and one root sign on the right: The number $x$ equals $\\sqrt{79 - 8\\sqrt{79 - 8\\sqrt{79 - \\cdots}}}$, given that it has a value.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = sqrt(79-8*x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $x$ alone on the left and one root sign on the right: The number $x$ equals $\\sqrt{79 - 8\\sqrt{79 - 8\\sqrt{79 - \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\sqrt{79 - 8\\sqrt{79 - 8\\sqrt{79 - \\cdots}}}$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                },
                {
                  "step": "The root that $8$ multiplies is the whole expression again.",
                  "reason": "Self-similar expression: a part of the expression is the whole expression again."
                },
                {
                  "step": "$x = \\sqrt{79 - 8x}$",
                  "reason": "Set it equal to a letter and find the letter inside it: that part has the value $x$ too, so $x$ is written in its place, and the equation is left unsolved, as a Translate is never solved."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with $x$ alone on the left and a number plus one fraction on the right: The number $x$ is the value of $15 + \\dfrac{26}{15 + \\dfrac{26}{15 + \\dfrac{26}{15 + \\cdots}}}$, given that it has a value.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 15+26/x",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with $x$ alone on the left and a number plus one fraction on the right: The number $x$ is the value of $15 + \\dfrac{26}{15 + \\dfrac{26}{15 + \\dfrac{26}{15 + \\cdots}}}$, given that it has a value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 15 + \\dfrac{26}{15 + \\dfrac{26}{15 + \\dfrac{26}{15 + \\cdots}}}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                },
                {
                  "step": "The bottom of the first fraction is the whole expression again.",
                  "reason": "Self-similar expression: a part of the expression is the whole expression again."
                },
                {
                  "step": "$x = 15 + \\dfrac{26}{x}$",
                  "reason": "Set it equal to a letter and find the letter inside it: that part has the value $x$ too, so $x$ is written in its place, and the equation is left unsolved, as a Translate is never solved."
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
