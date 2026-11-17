export default {
  "number": 149,
  "title": "Equations with square roots",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "558-562"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $\\sqrt{x^2 + 19} = 4x - 2$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{5/3}",
    "solution": [
      "Solve $\\sqrt{x^2 + 19} = 4x - 2$.",
      "$x^2 + 19 = 16x^2 - 16x + 4$",
      "$15x^2 - 16x - 15 = 0$",
      "$(3x - 5)(5x + 3) = 0$",
      "Either $x = \\dfrac{5}{3}$ or $x = -\\dfrac{3}{5}$.",
      "Check: at $x = \\dfrac{5}{3}$ the left side is $\\sqrt{(\\dfrac{5}{3})^2 + 19} = \\dfrac{14}{3}$ and the right side is $4 \\cdot \\dfrac{5}{3} - 2 = \\dfrac{14}{3}$; at $x = -\\dfrac{3}{5}$ the left side is $\\sqrt{(-\\dfrac{3}{5})^2 + 19} = \\dfrac{22}{5}$ and the right side is $4 \\cdot (-\\dfrac{3}{5}) - 2 = -\\dfrac{22}{5}$.",
      "The set of values is $\\{\\dfrac{5}{3}\\}$."
    ]
  },
  "ideas": [
    {
      "name": "Isolate a root, then square",
      "concrete": "In $\\sqrt{6x - 5} + 4 = 9$ the root is not alone, so $4$ is taken from both sides first: $\\sqrt{6x - 5} = 5$. Squaring both sides then gives $6x - 5 = 25$, with no root left, and $x = 5$.",
      "general": "In an equation where the unknown sits under a square root, the terms are first moved so that one root stands alone on one side, and then both sides are squared: for $u$ not negative the square of $\\sqrt{u}$ is $u$, so that root is gone. Where a root is still left, it is isolated and both sides are squared again."
    }
  ],
  "kinds": [
    {
      "id": "t149-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\sqrt{11x - 54} + 4 = x$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{11x - 54} + 4 = x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{11x - 54} = x - 4$",
                "reason": "Isolate a root, then square: taking $4$ from both sides leaves the root alone on the left."
              },
              {
                "step": "$11x - 54 = x^2 - 8x + 16$",
                "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x - 4)^2$ out."
              },
              {
                "step": "$x^2 - 19x + 70 = 0$",
                "reason": "Adding the same number to both sides: $11x - 54$ is taken from each side."
              },
              {
                "step": "$(x - 14)(x - 5) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 14$ or $x = 5$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = 14$ the left side is $\\sqrt{11 \\cdot 14 - 54} + 4 = \\sqrt{100} + 4 = 14$, the right side; at $x = 5$ the left side is $\\sqrt{11 \\cdot 5 - 54} + 4 = \\sqrt{1} + 4 = 5$, the right side.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{14, 5\\}$.",
                "reason": "Raising both sides to a power keeps every solution, and both candidates pass the check, so both are solutions."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{15x - 89} + 3 = x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{14, 7}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{15x - 89} + 3 = x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{15x - 89} = x - 3$",
                  "reason": "Isolate a root, then square: taking $3$ from both sides leaves the root alone on the left."
                },
                {
                  "step": "$15x - 89 = x^2 - 6x + 9$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x - 3)^2$ out."
                },
                {
                  "step": "$x^2 - 21x + 98 = 0$",
                  "reason": "Adding the same number to both sides: $15x - 89$ is taken from each side."
                },
                {
                  "step": "$(x - 14)(x - 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 14$ or $x = 7$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 14$ the left side is $\\sqrt{15 \\cdot 14 - 89} + 3 = \\sqrt{121} + 3 = 14$, the right side; at $x = 7$ the left side is $\\sqrt{15 \\cdot 7 - 89} + 3 = \\sqrt{16} + 3 = 7$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{14, 7\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, and both candidates pass the check, so both are solutions."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{14x - 103} + 5 = x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{16, 8}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{14x - 103} + 5 = x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{14x - 103} = x - 5$",
                  "reason": "Isolate a root, then square: taking $5$ from both sides leaves the root alone on the left."
                },
                {
                  "step": "$14x - 103 = x^2 - 10x + 25$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x - 5)^2$ out."
                },
                {
                  "step": "$x^2 - 24x + 128 = 0$",
                  "reason": "Adding the same number to both sides: $14x - 103$ is taken from each side."
                },
                {
                  "step": "$(x - 16)(x - 8) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 16$ or $x = 8$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 16$ the left side is $\\sqrt{14 \\cdot 16 - 103} + 5 = \\sqrt{121} + 5 = 16$, the right side; at $x = 8$ the left side is $\\sqrt{14 \\cdot 8 - 103} + 5 = \\sqrt{9} + 5 = 8$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{16, 8\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, and both candidates pass the check, so both are solutions."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{15x - 170} + 8 = x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{18, 13}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{15x - 170} + 8 = x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{15x - 170} = x - 8$",
                  "reason": "Isolate a root, then square: taking $8$ from both sides leaves the root alone on the left."
                },
                {
                  "step": "$15x - 170 = x^2 - 16x + 64$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x - 8)^2$ out."
                },
                {
                  "step": "$x^2 - 31x + 234 = 0$",
                  "reason": "Adding the same number to both sides: $15x - 170$ is taken from each side."
                },
                {
                  "step": "$(x - 18)(x - 13) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 18$ or $x = 13$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 18$ the left side is $\\sqrt{15 \\cdot 18 - 170} + 8 = \\sqrt{100} + 8 = 18$, the right side; at $x = 13$ the left side is $\\sqrt{15 \\cdot 13 - 170} + 8 = \\sqrt{25} + 8 = 13$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{18, 13\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, and both candidates pass the check, so both are solutions."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{14x + 93} - 3 = x$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{14x + 93} - 3 = x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{14x + 93} = x + 3$",
                "reason": "Isolate a root, then square: adding $3$ to both sides leaves the root alone on the left."
              },
              {
                "step": "$14x + 93 = x^2 + 6x + 9$",
                "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x + 3)^2$ out."
              },
              {
                "step": "$x^2 - 8x - 84 = 0$",
                "reason": "Adding the same number to both sides: $14x + 93$ is taken from each side."
              },
              {
                "step": "$(x - 14)(x + 6) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 14$ or $x = -6$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = 14$ the left side is $\\sqrt{14 \\cdot 14 + 93} - 3 = \\sqrt{289} - 3 = 14$, the right side; at $x = -6$ the left side is $\\sqrt{14 \\cdot (-6) + 93} - 3 = \\sqrt{9} - 3 = 0$ and the right side is $-6$.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{14\\}$.",
                "reason": "Extraneous solution: $x = -6$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{15x + 201} - 5 = x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{16}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{15x + 201} - 5 = x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{15x + 201} = x + 5$",
                  "reason": "Isolate a root, then square: adding $5$ to both sides leaves the root alone on the left."
                },
                {
                  "step": "$15x + 201 = x^2 + 10x + 25$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x + 5)^2$ out."
                },
                {
                  "step": "$x^2 - 5x - 176 = 0$",
                  "reason": "Adding the same number to both sides: $15x + 201$ is taken from each side."
                },
                {
                  "step": "$(x - 16)(x + 11) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 16$ or $x = -11$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 16$ the left side is $\\sqrt{15 \\cdot 16 + 201} - 5 = \\sqrt{441} - 5 = 16$, the right side; at $x = -11$ the left side is $\\sqrt{15 \\cdot (-11) + 201} - 5 = \\sqrt{36} - 5 = 1$ and the right side is $-11$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{16\\}$.",
                  "reason": "Extraneous solution: $x = -11$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{5x + 65} - 3 = x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{5x + 65} - 3 = x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{5x + 65} = x + 3$",
                  "reason": "Isolate a root, then square: adding $3$ to both sides leaves the root alone on the left."
                },
                {
                  "step": "$5x + 65 = x^2 + 6x + 9$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x + 3)^2$ out."
                },
                {
                  "step": "$x^2 + x - 56 = 0$",
                  "reason": "Adding the same number to both sides: $5x + 65$ is taken from each side."
                },
                {
                  "step": "$(x - 7)(x + 8) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 7$ or $x = -8$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 7$ the left side is $\\sqrt{5 \\cdot 7 + 65} - 3 = \\sqrt{100} - 3 = 7$, the right side; at $x = -8$ the left side is $\\sqrt{5 \\cdot (-8) + 65} - 3 = \\sqrt{25} - 3 = 2$ and the right side is $-8$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{7\\}$.",
                  "reason": "Extraneous solution: $x = -8$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{9x + 67} - 5 = x$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{6}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{9x + 67} - 5 = x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{9x + 67} = x + 5$",
                  "reason": "Isolate a root, then square: adding $5$ to both sides leaves the root alone on the left."
                },
                {
                  "step": "$9x + 67 = x^2 + 10x + 25$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes $(x + 5)^2$ out."
                },
                {
                  "step": "$x^2 + x - 42 = 0$",
                  "reason": "Adding the same number to both sides: $9x + 67$ is taken from each side."
                },
                {
                  "step": "$(x - 6)(x + 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 6$ or $x = -7$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 6$ the left side is $\\sqrt{9 \\cdot 6 + 67} - 5 = \\sqrt{121} - 5 = 6$, the right side; at $x = -7$ the left side is $\\sqrt{9 \\cdot (-7) + 67} - 5 = \\sqrt{4} - 5 = -3$ and the right side is $-7$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{6\\}$.",
                  "reason": "Extraneous solution: $x = -7$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{5 + \\sqrt{5x - 24}} = 3$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{5 + \\sqrt{5x - 24}} = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5 + \\sqrt{5x - 24} = 9$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of the outer root is what is under it."
              },
              {
                "step": "$\\sqrt{5x - 24} = 4$",
                "reason": "Isolate a root, then square: taking $5$ from both sides leaves the inner root alone."
              },
              {
                "step": "$5x - 24 = 16$",
                "reason": "Raising both sides to a power: both sides are squared again."
              },
              {
                "step": "$5x = 40$",
                "reason": "Adding the same number to both sides: $24$ is added to each side."
              },
              {
                "step": "$x = 8$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "Check: at $x = 8$ the left side is $\\sqrt{5 + \\sqrt{5 \\cdot 8 - 24}} = \\sqrt{5 + \\sqrt{16}} = \\sqrt{9} = 3$, the right side.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{8\\}$.",
                "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{\\sqrt{3x - 8} - 4} = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{24}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{\\sqrt{3x - 8} - 4} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{3x - 8} - 4 = 4$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of the outer root is what is under it."
                },
                {
                  "step": "$\\sqrt{3x - 8} = 8$",
                  "reason": "Isolate a root, then square: adding $4$ to both sides leaves the inner root alone."
                },
                {
                  "step": "$3x - 8 = 64$",
                  "reason": "Raising both sides to a power: both sides are squared again."
                },
                {
                  "step": "$3x = 72$",
                  "reason": "Adding the same number to both sides: $8$ is added to each side."
                },
                {
                  "step": "$x = 24$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "Check: at $x = 24$ the left side is $\\sqrt{\\sqrt{3 \\cdot 24 - 8} - 4} = \\sqrt{\\sqrt{64} - 4} = \\sqrt{4} = 2$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{24\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{\\sqrt{2x - 22} - 3} = 3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{83}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{\\sqrt{2x - 22} - 3} = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{2x - 22} - 3 = 9$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of the outer root is what is under it."
                },
                {
                  "step": "$\\sqrt{2x - 22} = 12$",
                  "reason": "Isolate a root, then square: adding $3$ to both sides leaves the inner root alone."
                },
                {
                  "step": "$2x - 22 = 144$",
                  "reason": "Raising both sides to a power: both sides are squared again."
                },
                {
                  "step": "$2x = 166$",
                  "reason": "Adding the same number to both sides: $22$ is added to each side."
                },
                {
                  "step": "$x = 83$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "Check: at $x = 83$ the left side is $\\sqrt{\\sqrt{2 \\cdot 83 - 22} - 3} = \\sqrt{\\sqrt{144} - 3} = \\sqrt{9} = 3$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{83\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{4 + \\sqrt{2x + 10}} = 4$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{67}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{4 + \\sqrt{2x + 10}} = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4 + \\sqrt{2x + 10} = 16$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of the outer root is what is under it."
                },
                {
                  "step": "$\\sqrt{2x + 10} = 12$",
                  "reason": "Isolate a root, then square: taking $4$ from both sides leaves the inner root alone."
                },
                {
                  "step": "$2x + 10 = 144$",
                  "reason": "Raising both sides to a power: both sides are squared again."
                },
                {
                  "step": "$2x = 134$",
                  "reason": "Adding the same number to both sides: $10$ is taken from each side."
                },
                {
                  "step": "$x = 67$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "Check: at $x = 67$ the left side is $\\sqrt{4 + \\sqrt{2 \\cdot 67 + 10}} = \\sqrt{4 + \\sqrt{144}} = \\sqrt{16} = 4$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{67\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt[3]{x^3 + 17x^2 + 64x + 85} = x + 5$.",
            "lines": [
              {
                "step": "Solve $\\sqrt[3]{x^3 + 17x^2 + 64x + 85} = x + 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^3 + 17x^2 + 64x + 85 = (x + 5)^3$",
                "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is what is under it."
              },
              {
                "step": "$x^3 + 17x^2 + 64x + 85 = x^3 + 15x^2 + 75x + 125$",
                "reason": "Every term of one bracket times every term of the other: $(x + 5)^2 = x^2 + 10x + 25$, and that times $(x + 5)$ gives the right side."
              },
              {
                "step": "$2x^2 - 11x - 40 = 0$",
                "reason": "Adding the same number to both sides: the right side is taken from each side, and the $x^3$ terms cancel."
              },
              {
                "step": "$(x - 8)(2x + 5) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 8$ or $x = -\\dfrac{5}{2}$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "The set of values is $\\{8, -\\dfrac{5}{2}\\}$.",
                "reason": "Raising both sides to a power: for an odd power the root's definition goes back the other way, $\\sqrt[3]{u} = s$ exactly when $u = s^3$, so cubing adds no candidate and both values are solutions."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt[3]{x^3 - 6x^2 + 58x + 29} = x - 3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7/3, -8}",
              "lines": [
                {
                  "step": "Solve $\\sqrt[3]{x^3 - 6x^2 + 58x + 29} = x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 6x^2 + 58x + 29 = (x - 3)^3$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is what is under it."
                },
                {
                  "step": "$x^3 - 6x^2 + 58x + 29 = x^3 - 9x^2 + 27x - 27$",
                  "reason": "Every term of one bracket times every term of the other: $(x - 3)^2 = x^2 - 6x + 9$, and that times $(x - 3)$ gives the right side."
                },
                {
                  "step": "$3x^2 + 31x + 56 = 0$",
                  "reason": "Adding the same number to both sides: the right side is taken from each side, and the $x^3$ terms cancel."
                },
                {
                  "step": "$(3x + 7)(x + 8) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = -\\dfrac{7}{3}$ or $x = -8$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "The set of values is $\\{-\\dfrac{7}{3}, -8\\}$.",
                  "reason": "Raising both sides to a power: for an odd power the root's definition goes back the other way, $\\sqrt[3]{u} = s$ exactly when $u = s^3$, so cubing adds no candidate and both values are solutions."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt[3]{x^3 + 7x^2 + 11x - 34} = x + 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7, -6}",
              "lines": [
                {
                  "step": "Solve $\\sqrt[3]{x^3 + 7x^2 + 11x - 34} = x + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + 7x^2 + 11x - 34 = (x + 2)^3$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is what is under it."
                },
                {
                  "step": "$x^3 + 7x^2 + 11x - 34 = x^3 + 6x^2 + 12x + 8$",
                  "reason": "Every term of one bracket times every term of the other: $(x + 2)^2 = x^2 + 4x + 4$, and that times $(x + 2)$ gives the right side."
                },
                {
                  "step": "$x^2 - x - 42 = 0$",
                  "reason": "Adding the same number to both sides: the right side is taken from each side, and the $x^3$ terms cancel."
                },
                {
                  "step": "$(x - 7)(x + 6) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 7$ or $x = -6$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "The set of values is $\\{7, -6\\}$.",
                  "reason": "Raising both sides to a power: for an odd power the root's definition goes back the other way, $\\sqrt[3]{u} = s$ exactly when $u = s^3$, so cubing adds no candidate and both values are solutions."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt[3]{x^3 + 12x^2 + 25x + 6} = x + 3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3, -7/3}",
              "lines": [
                {
                  "step": "Solve $\\sqrt[3]{x^3 + 12x^2 + 25x + 6} = x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + 12x^2 + 25x + 6 = (x + 3)^3$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of a cube root is what is under it."
                },
                {
                  "step": "$x^3 + 12x^2 + 25x + 6 = x^3 + 9x^2 + 27x + 27$",
                  "reason": "Every term of one bracket times every term of the other: $(x + 3)^2 = x^2 + 6x + 9$, and that times $(x + 3)$ gives the right side."
                },
                {
                  "step": "$3x^2 - 2x - 21 = 0$",
                  "reason": "Adding the same number to both sides: the right side is taken from each side, and the $x^3$ terms cancel."
                },
                {
                  "step": "$(x - 3)(3x + 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 3$ or $x = -\\dfrac{7}{3}$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "The set of values is $\\{3, -\\dfrac{7}{3}\\}$.",
                  "reason": "Raising both sides to a power: for an odd power the root's definition goes back the other way, $\\sqrt[3]{u} = s$ exactly when $u = s^3$, so cubing adds no candidate and both values are solutions."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{x^2 - 3} = 4x - 7$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{x^2 - 3} = 4x - 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 3 = 16x^2 - 56x + 49$",
                "reason": "Raising both sides to a power: the root already stands alone, so both sides are squared at once, and Square of a binomial writes $(4x - 7)^2$ out."
              },
              {
                "step": "$15x^2 - 56x + 52 = 0$",
                "reason": "Adding the same number to both sides: $x^2 - 3$ is taken from each side."
              },
              {
                "step": "$(x - 2)(15x - 26) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 2$ or $x = \\dfrac{26}{15}$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = 2$ the left side is $\\sqrt{2^2 - 3} = \\sqrt{1} = 1$ and the right side is $4 \\cdot 2 - 7 = 1$; at $x = \\dfrac{26}{15}$ the left side is $\\sqrt{(\\dfrac{26}{15})^2 - 3} = \\sqrt{\\dfrac{1}{225}} = \\dfrac{1}{15}$ and the right side is $4 \\cdot \\dfrac{26}{15} - 7 = -\\dfrac{1}{15}$.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{2\\}$.",
                "reason": "Extraneous solution: $x = \\dfrac{26}{15}$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{5x - 9} = x - 9$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{18}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{5x - 9} = x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 9 = x^2 - 18x + 81$",
                  "reason": "Raising both sides to a power: the root already stands alone, so both sides are squared at once, and Square of a binomial writes $(x - 9)^2$ out."
                },
                {
                  "step": "$x^2 - 23x + 90 = 0$",
                  "reason": "Adding the same number to both sides: $5x - 9$ is taken from each side."
                },
                {
                  "step": "$(x - 18)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 18$ or $x = 5$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 18$ the left side is $\\sqrt{5 \\cdot 18 - 9} = \\sqrt{81} = 9$ and the right side is $18 - 9 = 9$; at $x = 5$ the left side is $\\sqrt{5 \\cdot 5 - 9} = \\sqrt{16} = 4$ and the right side is $5 - 9 = -4$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{18\\}$.",
                  "reason": "Extraneous solution: $x = 5$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{x^2 + 15} = 4x + 8$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x^2 + 15} = 4x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 15 = 16x^2 + 64x + 64$",
                  "reason": "Raising both sides to a power: the root already stands alone, so both sides are squared at once, and Square of a binomial writes $(4x + 8)^2$ out."
                },
                {
                  "step": "$15x^2 + 64x + 49 = 0$",
                  "reason": "Adding the same number to both sides: $x^2 + 15$ is taken from each side."
                },
                {
                  "step": "$(x + 1)(15x + 49) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = -1$ or $x = -\\dfrac{49}{15}$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = -1$ the left side is $\\sqrt{(-1)^2 + 15} = \\sqrt{16} = 4$ and the right side is $4 \\cdot (-1) + 8 = 4$; at $x = -\\dfrac{49}{15}$ the left side is $\\sqrt{(-\\dfrac{49}{15})^2 + 15} = \\sqrt{\\dfrac{5776}{225}} = \\dfrac{76}{15}$ and the right side is $4 \\cdot (-\\dfrac{49}{15}) + 8 = -\\dfrac{76}{15}$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{-1\\}$.",
                  "reason": "Extraneous solution: $x = -\\dfrac{49}{15}$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{11x - 18} = x - 4$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{17}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{11x - 18} = x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$11x - 18 = x^2 - 8x + 16$",
                  "reason": "Raising both sides to a power: the root already stands alone, so both sides are squared at once, and Square of a binomial writes $(x - 4)^2$ out."
                },
                {
                  "step": "$x^2 - 19x + 34 = 0$",
                  "reason": "Adding the same number to both sides: $11x - 18$ is taken from each side."
                },
                {
                  "step": "$(x - 17)(x - 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 17$ or $x = 2$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 17$ the left side is $\\sqrt{11 \\cdot 17 - 18} = \\sqrt{169} = 13$ and the right side is $17 - 4 = 13$; at $x = 2$ the left side is $\\sqrt{11 \\cdot 2 - 18} = \\sqrt{4} = 2$ and the right side is $2 - 4 = -2$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{17\\}$.",
                  "reason": "Extraneous solution: $x = 2$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t149-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\sqrt{7x - 3} - \\sqrt{4x + 5} = 1$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{7x - 3} - \\sqrt{4x + 5} = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{7x - 3} = 1 + \\sqrt{4x + 5}$",
                "reason": "Isolate a root, then square: adding $\\sqrt{4x + 5}$ to both sides leaves one root alone on the left."
              },
              {
                "step": "$7x - 3 = 1 + 2\\sqrt{4x + 5} + 4x + 5$",
                "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes out the right side, the square of the root being what is under it."
              },
              {
                "step": "$2\\sqrt{4x + 5} = 3x - 9$",
                "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
              },
              {
                "step": "$16x + 20 = 9x^2 - 54x + 81$",
                "reason": "Raising both sides to a power: both sides are squared again, and Square of a binomial writes out the right side."
              },
              {
                "step": "$9x^2 - 70x + 61 = 0$",
                "reason": "Adding the same number to both sides: $16x + 20$ is taken from each side."
              },
              {
                "step": "$(9x - 61)(x - 1) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = \\dfrac{61}{9}$ or $x = 1$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = \\dfrac{61}{9}$ the left side is $\\sqrt{7 \\cdot \\dfrac{61}{9} - 3} - \\sqrt{4 \\cdot \\dfrac{61}{9} + 5} = \\sqrt{\\dfrac{400}{9}} - \\sqrt{\\dfrac{289}{9}} = 1$, the right side; at $x = 1$ the left side is $\\sqrt{7 \\cdot 1 - 3} - \\sqrt{4 \\cdot 1 + 5} = \\sqrt{4} - \\sqrt{9} = -1$, not $1$.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{\\dfrac{61}{9}\\}$.",
                "reason": "Extraneous solution: $x = 1$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{6x + 7} - \\sqrt{x - 2} = 4$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3, 59/25}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{6x + 7} - \\sqrt{x - 2} = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{6x + 7} = 4 + \\sqrt{x - 2}$",
                  "reason": "Isolate a root, then square: adding $\\sqrt{x - 2}$ to both sides leaves one root alone on the left."
                },
                {
                  "step": "$6x + 7 = 16 + 8\\sqrt{x - 2} + x - 2$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes out the right side, the square of the root being what is under it."
                },
                {
                  "step": "$8\\sqrt{x - 2} = 5x - 7$",
                  "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
                },
                {
                  "step": "$64x - 128 = 25x^2 - 70x + 49$",
                  "reason": "Raising both sides to a power: both sides are squared again, and Square of a binomial writes out the right side."
                },
                {
                  "step": "$25x^2 - 134x + 177 = 0$",
                  "reason": "Adding the same number to both sides: $64x - 128$ is taken from each side."
                },
                {
                  "step": "$(x - 3)(25x - 59) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 3$ or $x = \\dfrac{59}{25}$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 3$ the left side is $\\sqrt{6 \\cdot 3 + 7} - \\sqrt{3 - 2} = \\sqrt{25} - \\sqrt{1} = 4$, the right side; at $x = \\dfrac{59}{25}$ the left side is $\\sqrt{6 \\cdot \\dfrac{59}{25} + 7} - \\sqrt{\\dfrac{59}{25} - 2} = \\sqrt{\\dfrac{529}{25}} - \\sqrt{\\dfrac{9}{25}} = 4$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{3, \\dfrac{59}{25}\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, and both candidates pass the check, so both are solutions."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{2x - 4} - \\sqrt{x + 12} = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{52}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{2x - 4} - \\sqrt{x + 12} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{2x - 4} = 2 + \\sqrt{x + 12}$",
                  "reason": "Isolate a root, then square: adding $\\sqrt{x + 12}$ to both sides leaves one root alone on the left."
                },
                {
                  "step": "$2x - 4 = 4 + 4\\sqrt{x + 12} + x + 12$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes out the right side, the square of the root being what is under it."
                },
                {
                  "step": "$4\\sqrt{x + 12} = x - 20$",
                  "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
                },
                {
                  "step": "$16x + 192 = x^2 - 40x + 400$",
                  "reason": "Raising both sides to a power: both sides are squared again, and Square of a binomial writes out the right side."
                },
                {
                  "step": "$x^2 - 56x + 208 = 0$",
                  "reason": "Adding the same number to both sides: $16x + 192$ is taken from each side."
                },
                {
                  "step": "$(x - 52)(x - 4) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 52$ or $x = 4$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 52$ the left side is $\\sqrt{2 \\cdot 52 - 4} - \\sqrt{52 + 12} = \\sqrt{100} - \\sqrt{64} = 2$, the right side; at $x = 4$ the left side is $\\sqrt{2 \\cdot 4 - 4} - \\sqrt{4 + 12} = \\sqrt{4} - \\sqrt{16} = -2$, not $2$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{52\\}$.",
                  "reason": "Extraneous solution: $x = 4$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{6x + 11} + \\sqrt{3x + 5} = 5$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1/3}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{6x + 11} + \\sqrt{3x + 5} = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{6x + 11} = 5 - \\sqrt{3x + 5}$",
                  "reason": "Isolate a root, then square: taking $\\sqrt{3x + 5}$ from both sides leaves one root alone on the left."
                },
                {
                  "step": "$6x + 11 = 25 - 10\\sqrt{3x + 5} + 3x + 5$",
                  "reason": "Raising both sides to a power: both sides are squared, and Square of a binomial writes out the right side, the square of the root being what is under it."
                },
                {
                  "step": "$10\\sqrt{3x + 5} = -3x + 19$",
                  "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
                },
                {
                  "step": "$300x + 500 = 9x^2 - 114x + 361$",
                  "reason": "Raising both sides to a power: both sides are squared again, and Square of a binomial writes out the right side."
                },
                {
                  "step": "$9x^2 - 414x - 139 = 0$",
                  "reason": "Adding the same number to both sides: $300x + 500$ is taken from each side."
                },
                {
                  "step": "$(3x - 139)(3x + 1) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = \\dfrac{139}{3}$ or $x = -\\dfrac{1}{3}$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = \\dfrac{139}{3}$ the left side is $\\sqrt{6 \\cdot \\dfrac{139}{3} + 11} + \\sqrt{3 \\cdot \\dfrac{139}{3} + 5} = \\sqrt{289} + \\sqrt{144} = 29$, not $5$; at $x = -\\dfrac{1}{3}$ the left side is $\\sqrt{6 \\cdot (-\\dfrac{1}{3}) + 11} + \\sqrt{3 \\cdot (-\\dfrac{1}{3}) + 5} = \\sqrt{9} + \\sqrt{4} = 5$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{-\\dfrac{1}{3}\\}$.",
                  "reason": "Extraneous solution: $x = \\dfrac{139}{3}$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{x + 6} + \\sqrt{6x + 34} = \\sqrt{2x + 19}$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{x + 6} + \\sqrt{6x + 34} = \\sqrt{2x + 19}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + 6 + 2\\sqrt{(x + 6)(6x + 34)} + 6x + 34 = 2x + 19$",
                "reason": "Raising both sides to a power: both sides are squared, Square of a binomial writes out the left side, and Root of a product writes $\\sqrt{x + 6} \\cdot \\sqrt{6x + 34}$ as one root."
              },
              {
                "step": "$2\\sqrt{(x + 6)(6x + 34)} = -5x - 21$",
                "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
              },
              {
                "step": "$4(x + 6)(6x + 34) = (-5x - 21)^2$",
                "reason": "Raising both sides to a power: both sides are squared again."
              },
              {
                "step": "$x^2 - 70x - 375 = 0$",
                "reason": "Every term of one bracket times every term of the other writes out each side, and Adding the same number to both sides gathers every term on the side where $x^2$ keeps a positive coefficient."
              },
              {
                "step": "$(x - 75)(x + 5) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 75$ or $x = -5$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = 75$ the left side is $\\sqrt{75 + 6} + \\sqrt{6 \\cdot 75 + 34} = \\sqrt{81} + \\sqrt{484} = 31$ and the right side is $\\sqrt{2 \\cdot 75 + 19} = 13$; at $x = -5$ the left side is $\\sqrt{(-5) + 6} + \\sqrt{6 \\cdot (-5) + 34} = \\sqrt{1} + \\sqrt{4} = 3$ and the right side is $\\sqrt{2 \\cdot (-5) + 19} = 3$.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{-5\\}$.",
                "reason": "Extraneous solution: $x = 75$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{x + 2} + \\sqrt{6x - 38} = \\sqrt{2x + 11}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x + 2} + \\sqrt{6x - 38} = \\sqrt{2x + 11}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 2 + 2\\sqrt{(x + 2)(6x - 38)} + 6x - 38 = 2x + 11$",
                  "reason": "Raising both sides to a power: both sides are squared, Square of a binomial writes out the left side, and Root of a product writes $\\sqrt{x + 2} \\cdot \\sqrt{6x - 38}$ as one root."
                },
                {
                  "step": "$2\\sqrt{(x + 2)(6x - 38)} = -5x + 47$",
                  "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
                },
                {
                  "step": "$4(x + 2)(6x - 38) = (-5x + 47)^2$",
                  "reason": "Raising both sides to a power: both sides are squared again."
                },
                {
                  "step": "$x^2 - 366x + 2513 = 0$",
                  "reason": "Every term of one bracket times every term of the other writes out each side, and Adding the same number to both sides gathers every term on the side where $x^2$ keeps a positive coefficient."
                },
                {
                  "step": "$(x - 359)(x - 7) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 359$ or $x = 7$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 359$ the left side is $\\sqrt{359 + 2} + \\sqrt{6 \\cdot 359 - 38} = \\sqrt{361} + \\sqrt{2116} = 65$ and the right side is $\\sqrt{2 \\cdot 359 + 11} = 27$; at $x = 7$ the left side is $\\sqrt{7 + 2} + \\sqrt{6 \\cdot 7 - 38} = \\sqrt{9} + \\sqrt{4} = 5$ and the right side is $\\sqrt{2 \\cdot 7 + 11} = 5$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{7\\}$.",
                  "reason": "Extraneous solution: $x = 359$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{x + 6} + \\sqrt{6x - 9} = \\sqrt{2x + 30}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x + 6} + \\sqrt{6x - 9} = \\sqrt{2x + 30}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 6 + 2\\sqrt{(x + 6)(6x - 9)} + 6x - 9 = 2x + 30$",
                  "reason": "Raising both sides to a power: both sides are squared, Square of a binomial writes out the left side, and Root of a product writes $\\sqrt{x + 6} \\cdot \\sqrt{6x - 9}$ as one root."
                },
                {
                  "step": "$2\\sqrt{(x + 6)(6x - 9)} = -5x + 33$",
                  "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
                },
                {
                  "step": "$4(x + 6)(6x - 9) = (-5x + 33)^2$",
                  "reason": "Raising both sides to a power: both sides are squared again."
                },
                {
                  "step": "$x^2 - 438x + 1305 = 0$",
                  "reason": "Every term of one bracket times every term of the other writes out each side, and Adding the same number to both sides gathers every term on the side where $x^2$ keeps a positive coefficient."
                },
                {
                  "step": "$(x - 435)(x - 3) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 435$ or $x = 3$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 435$ the left side is $\\sqrt{435 + 6} + \\sqrt{6 \\cdot 435 - 9} = \\sqrt{441} + \\sqrt{2601} = 72$ and the right side is $\\sqrt{2 \\cdot 435 + 30} = 30$; at $x = 3$ the left side is $\\sqrt{3 + 6} + \\sqrt{6 \\cdot 3 - 9} = \\sqrt{9} + \\sqrt{9} = 6$ and the right side is $\\sqrt{2 \\cdot 3 + 30} = 6$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{3\\}$.",
                  "reason": "Extraneous solution: $x = 435$ solves the squared equation and fails the original one, so the candidate that passes is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{x + 1} + \\sqrt{2x - 5} = \\sqrt{6x - 9}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{15, 3}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x + 1} + \\sqrt{2x - 5} = \\sqrt{6x - 9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 1 + 2\\sqrt{(x + 1)(2x - 5)} + 2x - 5 = 6x - 9$",
                  "reason": "Raising both sides to a power: both sides are squared, Square of a binomial writes out the left side, and Root of a product writes $\\sqrt{x + 1} \\cdot \\sqrt{2x - 5}$ as one root."
                },
                {
                  "step": "$2\\sqrt{(x + 1)(2x - 5)} = 3x - 5$",
                  "reason": "Isolate a root, then square: Adding the same number to both sides moves every term without the root to one side, so the root term stands alone."
                },
                {
                  "step": "$4(x + 1)(2x - 5) = (3x - 5)^2$",
                  "reason": "Raising both sides to a power: both sides are squared again."
                },
                {
                  "step": "$x^2 - 18x + 45 = 0$",
                  "reason": "Every term of one bracket times every term of the other writes out each side, and Adding the same number to both sides gathers every term on the side where $x^2$ keeps a positive coefficient."
                },
                {
                  "step": "$(x - 15)(x - 3) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 15$ or $x = 3$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 15$ the left side is $\\sqrt{15 + 1} + \\sqrt{2 \\cdot 15 - 5} = \\sqrt{16} + \\sqrt{25} = 9$ and the right side is $\\sqrt{6 \\cdot 15 - 9} = 9$; at $x = 3$ the left side is $\\sqrt{3 + 1} + \\sqrt{2 \\cdot 3 - 5} = \\sqrt{4} + \\sqrt{1} = 3$ and the right side is $\\sqrt{6 \\cdot 3 - 9} = 3$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{15, 3\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, and both candidates pass the check, so both are solutions."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t149-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $b$, a positive number, when the two roots of $3x^2 + bx - 60 = 0$ differ by $9$.",
            "lines": [
              {
                "step": "Find $b$, a positive number, when the two roots of $3x^2 + bx - 60 = 0$ differ by $9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = \\dfrac{-b \\pm \\sqrt{b^2 + 720}}{6}$",
                "reason": "Quadratic formula: the coefficient of $x^2$ is $3$ and the constant term is $-60$, so $4 \\cdot 3 \\cdot (-60) = -720$."
              },
              {
                "step": "$\\dfrac{-b + \\sqrt{b^2 + 720}}{6} - \\dfrac{-b - \\sqrt{b^2 + 720}}{6} = \\dfrac{\\sqrt{b^2 + 720}}{3}$",
                "reason": "Subtracting fractions with the same denominator: the larger root less the smaller, the $-b$ parts cancel; Cancelling a common factor then takes $2$ from the top and the bottom."
              },
              {
                "step": "$\\dfrac{\\sqrt{b^2 + 720}}{3} = 9$",
                "reason": "Substituting a value: the difference of the two roots is replaced by its value, $9$."
              },
              {
                "step": "$\\sqrt{b^2 + 720} = 27$",
                "reason": "Isolate a root, then square: Multiplying both sides by the same number, $3$, leaves the root alone."
              },
              {
                "step": "$b^2 + 720 = 729$",
                "reason": "Raising both sides to a power: both sides are squared."
              },
              {
                "step": "$b^2 = 9$",
                "reason": "Adding the same number to both sides: $720$ is taken from each side."
              },
              {
                "step": "Either $b = 3$ or $b = -3$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "$b = 3$",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the problem asks for a positive $b$, and of the two values only $3$ is positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $b$, a positive number, when the two roots of $4x^2 + bx + 45 = 0$ differ by $2$.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find $b$, a positive number, when the two roots of $4x^2 + bx + 45 = 0$ differ by $2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 720}}{8}$",
                  "reason": "Quadratic formula: the coefficient of $x^2$ is $4$ and the constant term is $45$, so $4 \\cdot 4 \\cdot 45 = 720$."
                },
                {
                  "step": "$\\dfrac{-b + \\sqrt{b^2 - 720}}{8} - \\dfrac{-b - \\sqrt{b^2 - 720}}{8} = \\dfrac{\\sqrt{b^2 - 720}}{4}$",
                  "reason": "Subtracting fractions with the same denominator: the larger root less the smaller, the $-b$ parts cancel; Cancelling a common factor then takes $2$ from the top and the bottom."
                },
                {
                  "step": "$\\dfrac{\\sqrt{b^2 - 720}}{4} = 2$",
                  "reason": "Substituting a value: the difference of the two roots is replaced by its value, $2$."
                },
                {
                  "step": "$\\sqrt{b^2 - 720} = 8$",
                  "reason": "Isolate a root, then square: Multiplying both sides by the same number, $4$, leaves the root alone."
                },
                {
                  "step": "$b^2 - 720 = 64$",
                  "reason": "Raising both sides to a power: both sides are squared."
                },
                {
                  "step": "$b^2 = 784$",
                  "reason": "Adding the same number to both sides: $720$ is added to each side."
                },
                {
                  "step": "Either $b = 28$ or $b = -28$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "$b = 28$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the problem asks for a positive $b$, and of the two values only $28$ is positive."
                }
              ]
            },
            {
              "prompt": "Find $b$, a positive number, when the two roots of $3x^2 + bx - 24 = 0$ differ by $9$.",
              "form": "Answer as an integer.",
              "answer": "21",
              "lines": [
                {
                  "step": "Find $b$, a positive number, when the two roots of $3x^2 + bx - 24 = 0$ differ by $9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{-b \\pm \\sqrt{b^2 + 288}}{6}$",
                  "reason": "Quadratic formula: the coefficient of $x^2$ is $3$ and the constant term is $-24$, so $4 \\cdot 3 \\cdot (-24) = -288$."
                },
                {
                  "step": "$\\dfrac{-b + \\sqrt{b^2 + 288}}{6} - \\dfrac{-b - \\sqrt{b^2 + 288}}{6} = \\dfrac{\\sqrt{b^2 + 288}}{3}$",
                  "reason": "Subtracting fractions with the same denominator: the larger root less the smaller, the $-b$ parts cancel; Cancelling a common factor then takes $2$ from the top and the bottom."
                },
                {
                  "step": "$\\dfrac{\\sqrt{b^2 + 288}}{3} = 9$",
                  "reason": "Substituting a value: the difference of the two roots is replaced by its value, $9$."
                },
                {
                  "step": "$\\sqrt{b^2 + 288} = 27$",
                  "reason": "Isolate a root, then square: Multiplying both sides by the same number, $3$, leaves the root alone."
                },
                {
                  "step": "$b^2 + 288 = 729$",
                  "reason": "Raising both sides to a power: both sides are squared."
                },
                {
                  "step": "$b^2 = 441$",
                  "reason": "Adding the same number to both sides: $288$ is taken from each side."
                },
                {
                  "step": "Either $b = 21$ or $b = -21$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "$b = 21$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the problem asks for a positive $b$, and of the two values only $21$ is positive."
                }
              ]
            },
            {
              "prompt": "Find $b$, a positive number, when the two roots of $4x^2 + bx - 35 = 0$ differ by $6$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find $b$, a positive number, when the two roots of $4x^2 + bx - 35 = 0$ differ by $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = \\dfrac{-b \\pm \\sqrt{b^2 + 560}}{8}$",
                  "reason": "Quadratic formula: the coefficient of $x^2$ is $4$ and the constant term is $-35$, so $4 \\cdot 4 \\cdot (-35) = -560$."
                },
                {
                  "step": "$\\dfrac{-b + \\sqrt{b^2 + 560}}{8} - \\dfrac{-b - \\sqrt{b^2 + 560}}{8} = \\dfrac{\\sqrt{b^2 + 560}}{4}$",
                  "reason": "Subtracting fractions with the same denominator: the larger root less the smaller, the $-b$ parts cancel; Cancelling a common factor then takes $2$ from the top and the bottom."
                },
                {
                  "step": "$\\dfrac{\\sqrt{b^2 + 560}}{4} = 6$",
                  "reason": "Substituting a value: the difference of the two roots is replaced by its value, $6$."
                },
                {
                  "step": "$\\sqrt{b^2 + 560} = 24$",
                  "reason": "Isolate a root, then square: Multiplying both sides by the same number, $4$, leaves the root alone."
                },
                {
                  "step": "$b^2 + 560 = 576$",
                  "reason": "Raising both sides to a power: both sides are squared."
                },
                {
                  "step": "$b^2 = 16$",
                  "reason": "Adding the same number to both sides: $560$ is taken from each side."
                },
                {
                  "step": "Either $b = 4$ or $b = -4$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "$b = 4$",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: the problem asks for a positive $b$, and of the two values only $4$ is positive."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t149-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{2x + 112} + 4 = x$, and write that line right.",
            "given": [
              "$\\sqrt{2x + 112} + 4 = x$",
              "$\\sqrt{2x + 112} = x - 4$",
              "$2x + 112 = x^2 - 8x + 16$",
              "$x^2 - 10x - 96 = 0$",
              "$(x - 16)(x + 6) = 0$",
              "Either $x = 16$ or $x = 6$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{2x + 112} + 4 = x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 6 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 6 loses a sign: the bracket $(x + 6)$ is $0$ at $x = -6$, not at $x = 6$.",
                "reason": "Zero-product property: a bracket $x - a$ is $0$ exactly when $x = a$."
              },
              {
                "step": "Line 6 written right is $x = 16$ or $x = -6$.",
                "reason": "Each later line follows from the line written right."
              },
              {
                "step": "With line 6 written right the candidates are $16$ and $-6$: at $x = 16$ the left side is $\\sqrt{2 \\cdot 16 + 112} + 4 = \\sqrt{144} + 4 = 16$ and the right side is $16$; at $x = -6$ the left side is $\\sqrt{2 \\cdot (-6) + 112} + 4 = \\sqrt{100} + 4 = 14$ and the right side is $-6$; so the set of values is $\\{16\\}$.",
                "reason": "Checking in the original equation keeps $x = 16$, and Extraneous solution: $x = -6$ solves the squared equation and fails the original one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{3x + 19} + 3 = x$, and write that line right.",
              "given": [
                "$\\sqrt{3x + 19} + 3 = x$",
                "$\\sqrt{3x + 19} = x + 3$",
                "$3x + 19 = x^2 + 6x + 9$",
                "$x^2 + 3x - 10 = 0$",
                "$(x - 2)(x + 5) = 0$",
                "Either $x = 2$ or $x = -5$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: sqrt(3*x+19) = x-3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{3x + 19} + 3 = x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 loses a sign: the root stands alone when $3$ is taken from both sides, which leaves $x - 3$ on the right, not $x + 3$.",
                  "reason": "Adding the same number to both sides: a number moved to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $\\sqrt{3x + 19} = x - 3$.",
                  "reason": "Each later line follows from the line written right."
                },
                {
                  "step": "With line 2 written right the candidates are $10$ and $-1$: at $x = 10$ the left side is $\\sqrt{3 \\cdot 10 + 19} + 3 = \\sqrt{49} + 3 = 10$ and the right side is $10$; at $x = -1$ the left side is $\\sqrt{3 \\cdot (-1) + 19} + 3 = \\sqrt{16} + 3 = 7$ and the right side is $-1$; so the set of values is $\\{10\\}$.",
                  "reason": "Checking in the original equation keeps $x = 10$, and Extraneous solution: $x = -1$ solves the squared equation and fails the original one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{5x - 21} + 9 = x$, and write that line right.",
              "given": [
                "$\\sqrt{5x - 21} + 9 = x$",
                "$\\sqrt{5x - 21} = x - 9$",
                "$5x - 21 = x^2 - 18x + 81$",
                "$x^2 - 23x + 60 = 0$",
                "$(x - 20)(x - 3) = 0$",
                "Either $x = 20$ or $x = 3$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x^2-23*x+102 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{5x - 21} + 9 = x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 loses the sign of $-21$ when $5x - 21$ is taken from both sides of line 3.",
                  "reason": "Adding the same number to both sides: a term moved to the other side changes its sign."
                },
                {
                  "step": "Line 4 written right is $x^2 - 23x + 102 = 0$.",
                  "reason": "Each later line follows from the line written right."
                },
                {
                  "step": "With line 4 written right the candidates are $17$ and $6$: at $x = 17$ the left side is $\\sqrt{5 \\cdot 17 - 21} + 9 = \\sqrt{64} + 9 = 17$ and the right side is $17$; at $x = 6$ the left side is $\\sqrt{5 \\cdot 6 - 21} + 9 = \\sqrt{9} + 9 = 12$ and the right side is $6$; so the set of values is $\\{17\\}$.",
                  "reason": "Checking in the original equation keeps $x = 17$, and Extraneous solution: $x = 6$ solves the squared equation and fails the original one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{11x - 112} + 8 = x$, and write that line right.",
              "given": [
                "$\\sqrt{11x - 112} + 8 = x$",
                "$\\sqrt{11x - 112} = x - 8$",
                "$11x - 112 = x^2 - 16x + 64$",
                "$x^2 - 27x + 176 = 0$",
                "$(x - 16)(x + 11) = 0$",
                "Either $x = 16$ or $x = -11$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (x-16)*(x-11) = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{11x - 112} + 8 = x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 gives the second bracket the wrong sign: the product of its two numbers must be the constant term $176$.",
                  "reason": "Factoring a quadratic: the two numbers have the constant term as product and the coefficient of $x$ as sum."
                },
                {
                  "step": "Line 5 written right is $(x - 16)(x - 11) = 0$.",
                  "reason": "Each later line follows from the line written right."
                },
                {
                  "step": "With line 5 written right the candidates are $16$ and $11$: at $x = 16$ the left side is $\\sqrt{11 \\cdot 16 - 112} + 8 = \\sqrt{64} + 8 = 16$ and the right side is $16$; at $x = 11$ the left side is $\\sqrt{11 \\cdot 11 - 112} + 8 = \\sqrt{9} + 8 = 11$ and the right side is $11$; so the set of values is $\\{16, 11\\}$.",
                  "reason": "Checking in the original equation keeps both candidates, and Raising both sides to a power keeps every solution, so both are solutions."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{13x + 94} - 2 = x$, and write that line right.",
            "given": [
              "$\\sqrt{13x + 94} - 2 = x$",
              "$\\sqrt{13x + 94} = x + 2$",
              "$13x + 94 = x^2 + 4$",
              "$x^2 - 13x - 90 = 0$",
              "$(x - 18)(x + 5) = 0$",
              "Either $x = 18$ or $x = -5$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{13x + 94} - 2 = x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 squares $x + 2$ term by term, as $x^2 + 4$, and loses the middle term $4x$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, never $a^2 + b^2$."
              },
              {
                "step": "Line 3 written right is $13x + 94 = x^2 + 4x + 4$.",
                "reason": "Each later line follows from the line written right."
              },
              {
                "step": "With line 3 written right the candidates are $15$ and $-6$: at $x = 15$ the left side is $\\sqrt{13 \\cdot 15 + 94} - 2 = \\sqrt{289} - 2 = 15$ and the right side is $15$; at $x = -6$ the left side is $\\sqrt{13 \\cdot (-6) + 94} - 2 = \\sqrt{16} - 2 = 2$ and the right side is $-6$; so the set of values is $\\{15\\}$.",
                "reason": "Checking in the original equation keeps $x = 15$, and Extraneous solution: $x = -6$ solves the squared equation and fails the original one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{14x + 184} = x + 8$, and write that line right.",
              "given": [
                "$\\sqrt{14x + 184} = x + 8$",
                "$14x + 184 = x^2 + 64$",
                "$x^2 - 14x - 120 = 0$",
                "$(x - 20)(x + 6) = 0$",
                "Either $x = 20$ or $x = -6$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 14*x+184 = x^2+16*x+64",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{14x + 184} = x + 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 squares $x + 8$ term by term, as $x^2 + 64$, and loses the middle term $16x$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, never $a^2 + b^2$."
                },
                {
                  "step": "Line 2 written right is $14x + 184 = x^2 + 16x + 64$.",
                  "reason": "Each later line follows from the line written right."
                },
                {
                  "step": "With line 2 written right the candidates are $10$ and $-12$: at $x = 10$ the left side is $\\sqrt{14 \\cdot 10 + 184} = \\sqrt{324} = 18$ and the right side is $10 + 8 = 18$; at $x = -12$ the left side is $\\sqrt{14 \\cdot (-12) + 184} = \\sqrt{16} = 4$ and the right side is $(-12) + 8 = -4$; so the set of values is $\\{10\\}$.",
                  "reason": "Checking in the original equation keeps $x = 10$, and Extraneous solution: $x = -12$ solves the squared equation and fails the original one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{3x + 97} - 3 = x$, and write that line right.",
              "given": [
                "$\\sqrt{3x + 97} - 3 = x$",
                "$\\sqrt{3x + 97} = x + 3$",
                "$3x + 97 = x^2 + 9$",
                "$x^2 - 3x - 88 = 0$",
                "$(x - 11)(x + 8) = 0$",
                "Either $x = 11$ or $x = -8$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 3*x+97 = x^2+6*x+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{3x + 97} - 3 = x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 squares $x + 3$ term by term, as $x^2 + 9$, and loses the middle term $6x$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, never $a^2 + b^2$."
                },
                {
                  "step": "Line 3 written right is $3x + 97 = x^2 + 6x + 9$.",
                  "reason": "Each later line follows from the line written right."
                },
                {
                  "step": "With line 3 written right the candidates are $8$ and $-11$: at $x = 8$ the left side is $\\sqrt{3 \\cdot 8 + 97} - 3 = \\sqrt{121} - 3 = 8$ and the right side is $8$; at $x = -11$ the left side is $\\sqrt{3 \\cdot (-11) + 97} - 3 = \\sqrt{64} - 3 = 5$ and the right side is $-11$; so the set of values is $\\{8\\}$.",
                  "reason": "Checking in the original equation keeps $x = 8$, and Extraneous solution: $x = -11$ solves the squared equation and fails the original one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{11x + 67} = x + 5$, and write that line right.",
              "given": [
                "$\\sqrt{11x + 67} = x + 5$",
                "$11x + 67 = x^2 + 25$",
                "$x^2 - 11x - 42 = 0$",
                "$(x - 14)(x + 3) = 0$",
                "Either $x = 14$ or $x = -3$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 11*x+67 = x^2+10*x+25",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which stops at the candidates, for $\\sqrt{11x + 67} = x + 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 squares $x + 5$ term by term, as $x^2 + 25$, and loses the middle term $10x$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, never $a^2 + b^2$."
                },
                {
                  "step": "Line 2 written right is $11x + 67 = x^2 + 10x + 25$.",
                  "reason": "Each later line follows from the line written right."
                },
                {
                  "step": "With line 2 written right the candidates are $7$ and $-6$: at $x = 7$ the left side is $\\sqrt{11 \\cdot 7 + 67} = \\sqrt{144} = 12$ and the right side is $7 + 5 = 12$; at $x = -6$ the left side is $\\sqrt{11 \\cdot (-6) + 67} = \\sqrt{1} = 1$ and the right side is $(-6) + 5 = -1$; so the set of values is $\\{7\\}$.",
                  "reason": "Checking in the original equation keeps $x = 7$, and Extraneous solution: $x = -6$ solves the squared equation and fails the original one."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t149-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the root alone on the left: the square root of the number that is 28 less than 3 times a number $x$ is 26 more than $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the root alone on the left: the square root of the number that is 28 less than 3 times a number $x$ is 26 more than $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "3 times the number is $3x$, and 28 less than that is $3x - 28$.",
                "reason": "Writing a sentence as an equation: \"times\" and \"multiplying by\" multiply, \"more than\" and \"adding\" add the amount, and \"less than\" and \"taking away\" take it away."
              },
              {
                "step": "The square root of that amount is $\\sqrt{3x - 28}$.",
                "reason": "Writing a sentence as an equation: \"the square root of\" puts the whole amount it names under one root."
              },
              {
                "step": "26 more than the number is $x + 26$.",
                "reason": "Writing a sentence as an equation: \"more than\" or \"increased by\" adds the amount, and \"less than\" or \"decreased by\" takes it away."
              },
              {
                "step": "$\\sqrt{3x - 28} = x + 26$",
                "reason": "Writing a sentence as an equation: \"is\", \"equals\", \"is equal to\" and \"is the same as\" stand where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the root alone on the left: multiplying a number $x$ by 7 and then adding 24 gives an amount whose square root is equal to 12 more than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(7*x+24) = x+12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the root alone on the left: multiplying a number $x$ by 7 and then adding 24 gives an amount whose square root is equal to 12 more than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "7 times the number is $7x$, and 24 more than that is $7x + 24$.",
                  "reason": "Writing a sentence as an equation: \"times\" and \"multiplying by\" multiply, \"more than\" and \"adding\" add the amount, and \"less than\" and \"taking away\" take it away."
                },
                {
                  "step": "The square root of that amount is $\\sqrt{7x + 24}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the whole amount it names under one root."
                },
                {
                  "step": "12 more than the number is $x + 12$.",
                  "reason": "Writing a sentence as an equation: \"more than\" or \"increased by\" adds the amount, and \"less than\" or \"decreased by\" takes it away."
                },
                {
                  "step": "$\\sqrt{7x + 24} = x + 12$",
                  "reason": "Writing a sentence as an equation: \"is\", \"equals\", \"is equal to\" and \"is the same as\" stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the root alone on the left: the number that is 15 less than a number $x$ equals the square root of the number that is 18 less than 8 times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(8*x-18) = x-15",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the root alone on the left: the number that is 15 less than a number $x$ equals the square root of the number that is 18 less than 8 times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "8 times the number is $8x$, and 18 less than that is $8x - 18$.",
                  "reason": "Writing a sentence as an equation: \"times\" and \"multiplying by\" multiply, \"more than\" and \"adding\" add the amount, and \"less than\" and \"taking away\" take it away."
                },
                {
                  "step": "The square root of that amount is $\\sqrt{8x - 18}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the whole amount it names under one root."
                },
                {
                  "step": "15 less than the number is $x - 15$.",
                  "reason": "Writing a sentence as an equation: \"more than\" or \"increased by\" adds the amount, and \"less than\" or \"decreased by\" takes it away."
                },
                {
                  "step": "$\\sqrt{8x - 18} = x - 15$",
                  "reason": "Writing a sentence as an equation: \"is\", \"equals\", \"is equal to\" and \"is the same as\" stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the root alone on the left: the square root of the number that is 22 less than 2 times a number $x$ is the same as $x$ decreased by 16.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(2*x-22) = x-16",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the root alone on the left: the square root of the number that is 22 less than 2 times a number $x$ is the same as $x$ decreased by 16.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "2 times the number is $2x$, and 22 less than that is $2x - 22$.",
                  "reason": "Writing a sentence as an equation: \"times\" and \"multiplying by\" multiply, \"more than\" and \"adding\" add the amount, and \"less than\" and \"taking away\" take it away."
                },
                {
                  "step": "The square root of that amount is $\\sqrt{2x - 22}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the whole amount it names under one root."
                },
                {
                  "step": "16 less than the number is $x - 16$.",
                  "reason": "Writing a sentence as an equation: \"more than\" or \"increased by\" adds the amount, and \"less than\" or \"decreased by\" takes it away."
                },
                {
                  "step": "$\\sqrt{2x - 22} = x - 16$",
                  "reason": "Writing a sentence as an equation: \"is\", \"equals\", \"is equal to\" and \"is the same as\" stand where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the two roots on the left: the square roots of the numbers that are 26 less and 3 less than a number $x$ add up to 8.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the two roots on the left: the square roots of the numbers that are 26 less and 3 less than a number $x$ add up to 8.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number 26 less than $x$ is $x - 26$, and the number 3 less than $x$ is $x - 3$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount before it, and \"less than\" takes that amount away."
              },
              {
                "step": "Their square roots are $\\sqrt{x - 26}$ and $\\sqrt{x - 3}$.",
                "reason": "Writing a sentence as an equation: \"the square root of\" puts each amount under its own root."
              },
              {
                "step": "The two roots added give $\\sqrt{x - 26} + \\sqrt{x - 3}$.",
                "reason": "Writing a sentence as an equation: \"sum\", \"added to\" and \"add up to\" add the two amounts; \"difference\", \"exceeds by\" and \"taking from\" take the second root from the first."
              },
              {
                "step": "$\\sqrt{x - 26} + \\sqrt{x - 3} = 8$",
                "reason": "Writing a sentence as an equation: \"is\", \"by\", \"leaves\", \"gives\" and \"add up to\" set the result equal to the number named."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the two roots on the left: the square root of the number that is 22 more than a number $x$, added to the square root of the number that is 27 less than $x$, gives 10.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(x+22)+sqrt(x-27) = 10",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two roots on the left: the square root of the number that is 22 more than a number $x$, added to the square root of the number that is 27 less than $x$, gives 10.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 22 more than $x$ is $x + 22$, and the number 27 less than $x$ is $x - 27$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount before it, and \"less than\" takes that amount away."
                },
                {
                  "step": "Their square roots are $\\sqrt{x + 22}$ and $\\sqrt{x - 27}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts each amount under its own root."
                },
                {
                  "step": "The two roots added give $\\sqrt{x + 22} + \\sqrt{x - 27}$.",
                  "reason": "Writing a sentence as an equation: \"sum\", \"added to\" and \"add up to\" add the two amounts; \"difference\", \"exceeds by\" and \"taking from\" take the second root from the first."
                },
                {
                  "step": "$\\sqrt{x + 22} + \\sqrt{x - 27} = 10$",
                  "reason": "Writing a sentence as an equation: \"is\", \"by\", \"leaves\", \"gives\" and \"add up to\" set the result equal to the number named."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the two roots on the left: the sum of the square root of the number that is 19 less than a number $x$ and the square root of the number that is 18 less than $x$ is 12.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(x-19)+sqrt(x-18) = 12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two roots on the left: the sum of the square root of the number that is 19 less than a number $x$ and the square root of the number that is 18 less than $x$ is 12.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 19 less than $x$ is $x - 19$, and the number 18 less than $x$ is $x - 18$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount before it, and \"less than\" takes that amount away."
                },
                {
                  "step": "Their square roots are $\\sqrt{x - 19}$ and $\\sqrt{x - 18}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts each amount under its own root."
                },
                {
                  "step": "The two roots added give $\\sqrt{x - 19} + \\sqrt{x - 18}$.",
                  "reason": "Writing a sentence as an equation: \"sum\", \"added to\" and \"add up to\" add the two amounts; \"difference\", \"exceeds by\" and \"taking from\" take the second root from the first."
                },
                {
                  "step": "$\\sqrt{x - 19} + \\sqrt{x - 18} = 12$",
                  "reason": "Writing a sentence as an equation: \"is\", \"by\", \"leaves\", \"gives\" and \"add up to\" set the result equal to the number named."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the two roots on the left: the square roots of the numbers that are 6 more and 3 less than a number $x$ add up to 11.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(x+6)+sqrt(x-3) = 11",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the two roots on the left: the square roots of the numbers that are 6 more and 3 less than a number $x$ add up to 11.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 6 more than $x$ is $x + 6$, and the number 3 less than $x$ is $x - 3$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount before it, and \"less than\" takes that amount away."
                },
                {
                  "step": "Their square roots are $\\sqrt{x + 6}$ and $\\sqrt{x - 3}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts each amount under its own root."
                },
                {
                  "step": "The two roots added give $\\sqrt{x + 6} + \\sqrt{x - 3}$.",
                  "reason": "Writing a sentence as an equation: \"sum\", \"added to\" and \"add up to\" add the two amounts; \"difference\", \"exceeds by\" and \"taking from\" take the second root from the first."
                },
                {
                  "step": "$\\sqrt{x + 6} + \\sqrt{x - 3} = 11$",
                  "reason": "Writing a sentence as an equation: \"is\", \"by\", \"leaves\", \"gives\" and \"add up to\" set the result equal to the number named."
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
