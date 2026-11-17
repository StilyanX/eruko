export default {
  "number": 221,
  "title": "Inequalities with radicals",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "456-464, 638-643"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $2\\sqrt{x^2 + 11x + 28} = \\sqrt{x^2 - x - 56}$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-7, -8}",
    "solution": [
      "Solve $2\\sqrt{x^2 + 11x + 28} = \\sqrt{x^2 - x - 56}$.",
      "$2\\sqrt{(x + 7)(x + 4)} = \\sqrt{(x + 7)(x - 8)}$",
      "$4(x + 7)(x + 4) = (x + 7)(x - 8)$",
      "$4(x + 7)(x + 4) - (x + 7)(x - 8) = 0$",
      "$(x + 7)(4(x + 4) - (x - 8)) = 0$",
      "$(x + 7)(3x + 24) = 0$",
      "Either $x = -7$ or $x = -8$.",
      "Check: at $x = -7$ both numbers under the roots are $0$, so both sides are $0$; at $x = -8$ the numbers under the roots are $4$ and $16$, so the left side is $2\\sqrt{4} = 4$ and the right side is $\\sqrt{16} = 4$.",
      "The set of values is $\\{-7, -8\\}$."
    ]
  },
  "ideas": [
    {
      "name": "Squaring an inequality of nonnegative sides",
      "concrete": "The numbers $7$ and $4$ are both nonnegative, and $7 > 4$ and $49 > 16$ hold together. With a negative side the squares can turn the order round: $-7 < 4$, yet $49 > 16$.",
      "general": "For real numbers $a$ and $b$ with $a \\ge 0$ and $b \\ge 0$: $a > b$ exactly when $a^2 > b^2$, and $a \\ge b$ exactly when $a^2 \\ge b^2$. This is **Squaring an inequality of nonnegative sides**. A square root is never negative, so an inequality between a square root and a second side is squared only where that side is nonnegative as well; where that side is negative, its sign alone settles the inequality."
    }
  ],
  "kinds": [
    {
      "id": "t221-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $3\\sqrt{x^2 + 4x - 5} = \\sqrt{x^2 - 12x + 11}$.",
            "lines": [
              {
                "step": "Solve $3\\sqrt{x^2 + 4x - 5} = \\sqrt{x^2 - 12x + 11}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3\\sqrt{(x - 1)(x + 5)} = \\sqrt{(x - 1)(x - 11)}$",
                "reason": "Factoring a quadratic: each expression under a root is written as a product of two brackets, and both products hold the bracket $x - 1$."
              },
              {
                "step": "$9(x - 1)(x + 5) = (x - 1)(x - 11)$",
                "reason": "Raising both sides to a power: both sides are squared; the square of a root is what is under it, and the square of $3$ is $9$."
              },
              {
                "step": "$9(x - 1)(x + 5) - (x - 1)(x - 11) = 0$",
                "reason": "Adding the same number to both sides: $(x - 1)(x - 11)$ is taken from each side."
              },
              {
                "step": "$(x - 1)(9(x + 5) - (x - 11)) = 0$",
                "reason": "Never divide by an expression that may be zero: the bracket $x - 1$ is $0$ at $x = 1$, so it is taken out as a common factor and not divided away."
              },
              {
                "step": "$(x - 1)(8x + 56) = 0$",
                "reason": "Subtracting a bracket changes every sign in it: $9(x + 5) - (x - 11) = 9x + 45 - x + 11$, and collecting like terms gives $8x + 56$."
              },
              {
                "step": "Either $x = 1$ or $x = -7$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = 1$ both numbers under the roots are $0$, so both sides are $0$; at $x = -7$ the numbers under the roots are $16$ and $144$, so the left side is $3\\sqrt{16} = 12$ and the right side is $\\sqrt{144} = 12$.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{1, -7\\}$.",
                "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2\\sqrt{x^2 - 7x + 10} = \\sqrt{x^2 - 4x - 5}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{5}",
              "lines": [
                {
                  "step": "Solve $2\\sqrt{x^2 - 7x + 10} = \\sqrt{x^2 - 4x - 5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2\\sqrt{(x - 5)(x - 2)} = \\sqrt{(x - 5)(x + 1)}$",
                  "reason": "Factoring a quadratic: each expression under a root is written as a product of two brackets, and both products hold the bracket $x - 5$."
                },
                {
                  "step": "$4(x - 5)(x - 2) = (x - 5)(x + 1)$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a root is what is under it, and the square of $2$ is $4$."
                },
                {
                  "step": "$4(x - 5)(x - 2) - (x - 5)(x + 1) = 0$",
                  "reason": "Adding the same number to both sides: $(x - 5)(x + 1)$ is taken from each side."
                },
                {
                  "step": "$(x - 5)(4(x - 2) - (x + 1)) = 0$",
                  "reason": "Never divide by an expression that may be zero: the bracket $x - 5$ is $0$ at $x = 5$, so it is taken out as a common factor and not divided away."
                },
                {
                  "step": "$(x - 5)(3x - 9) = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: $4(x - 2) - (x + 1) = 4x - 8 - x - 1$, and collecting like terms gives $3x - 9$."
                },
                {
                  "step": "Either $x = 5$ or $x = 3$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 5$ both numbers under the roots are $0$, so both sides are $0$; at $x = 3$ the number under the first root is $-2$, which is negative, so that root is not a real number.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{5\\}$.",
                  "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here $x = 3$ fails it."
                }
              ]
            },
            {
              "prompt": "Solve $2\\sqrt{x^2 - 7x + 6} = \\sqrt{x^2 + 5x - 6}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 10}",
              "lines": [
                {
                  "step": "Solve $2\\sqrt{x^2 - 7x + 6} = \\sqrt{x^2 + 5x - 6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2\\sqrt{(x - 1)(x - 6)} = \\sqrt{(x - 1)(x + 6)}$",
                  "reason": "Factoring a quadratic: each expression under a root is written as a product of two brackets, and both products hold the bracket $x - 1$."
                },
                {
                  "step": "$4(x - 1)(x - 6) = (x - 1)(x + 6)$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a root is what is under it, and the square of $2$ is $4$."
                },
                {
                  "step": "$4(x - 1)(x - 6) - (x - 1)(x + 6) = 0$",
                  "reason": "Adding the same number to both sides: $(x - 1)(x + 6)$ is taken from each side."
                },
                {
                  "step": "$(x - 1)(4(x - 6) - (x + 6)) = 0$",
                  "reason": "Never divide by an expression that may be zero: the bracket $x - 1$ is $0$ at $x = 1$, so it is taken out as a common factor and not divided away."
                },
                {
                  "step": "$(x - 1)(3x - 30) = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: $4(x - 6) - (x + 6) = 4x - 24 - x - 6$, and collecting like terms gives $3x - 30$."
                },
                {
                  "step": "Either $x = 1$ or $x = 10$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 1$ both numbers under the roots are $0$, so both sides are $0$; at $x = 10$ the numbers under the roots are $36$ and $144$, so the left side is $2\\sqrt{36} = 12$ and the right side is $\\sqrt{144} = 12$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{1, 10\\}$.",
                  "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
                }
              ]
            },
            {
              "prompt": "Solve $3\\sqrt{x^2 - x - 20} = \\sqrt{x^2 + 23x + 76}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, 8}",
              "lines": [
                {
                  "step": "Solve $3\\sqrt{x^2 - x - 20} = \\sqrt{x^2 + 23x + 76}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3\\sqrt{(x + 4)(x - 5)} = \\sqrt{(x + 4)(x + 19)}$",
                  "reason": "Factoring a quadratic: each expression under a root is written as a product of two brackets, and both products hold the bracket $x + 4$."
                },
                {
                  "step": "$9(x + 4)(x - 5) = (x + 4)(x + 19)$",
                  "reason": "Raising both sides to a power: both sides are squared; the square of a root is what is under it, and the square of $3$ is $9$."
                },
                {
                  "step": "$9(x + 4)(x - 5) - (x + 4)(x + 19) = 0$",
                  "reason": "Adding the same number to both sides: $(x + 4)(x + 19)$ is taken from each side."
                },
                {
                  "step": "$(x + 4)(9(x - 5) - (x + 19)) = 0$",
                  "reason": "Never divide by an expression that may be zero: the bracket $x + 4$ is $0$ at $x = -4$, so it is taken out as a common factor and not divided away."
                },
                {
                  "step": "$(x + 4)(8x - 64) = 0$",
                  "reason": "Subtracting a bracket changes every sign in it: $9(x - 5) - (x + 19) = 9x - 45 - x - 19$, and collecting like terms gives $8x - 64$."
                },
                {
                  "step": "Either $x = -4$ or $x = 8$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = -4$ both numbers under the roots are $0$, so both sides are $0$; at $x = 8$ the numbers under the roots are $36$ and $324$, so the left side is $3\\sqrt{36} = 18$ and the right side is $\\sqrt{324} = 18$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{-4, 8\\}$.",
                  "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{2x^2 + 15x + 73} + \\sqrt{2x^2 + 15x + 8} = 13$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{2x^2 + 15x + 73} + \\sqrt{2x^2 + 15x + 8} = 13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $u = \\sqrt{2x^2 + 15x + 73}$ and $v = \\sqrt{2x^2 + 15x + 8}$: $u + v = 13$",
                "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two roots."
              },
              {
                "step": "$u^2 - v^2 = 65$",
                "reason": "Positive square root, from arithmetic: $u^2$ and $v^2$ are the expressions under the roots, and in their difference the terms with $x$ cancel, leaving $73 - 8 = 65$."
              },
              {
                "step": "$(u - v)(u + v) = 65$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$."
              },
              {
                "step": "$13(u - v) = 65$",
                "reason": "Substituting a value: $u + v = 13$ by the second line."
              },
              {
                "step": "$u - v = 5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
              },
              {
                "step": "$2u = 18$",
                "reason": "Elimination: adding $u + v = 13$ and $u - v = 5$ leaves no term in $v$."
              },
              {
                "step": "$u = 9$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$\\sqrt{2x^2 + 15x + 73} = 9$",
                "reason": "Substituting a letter and undoing it: the root is put back in place of $u$."
              },
              {
                "step": "$2x^2 + 15x + 73 = 81$",
                "reason": "Raising both sides to a power: both sides are squared."
              },
              {
                "step": "$2x^2 + 15x - 8 = 0$",
                "reason": "Adding the same number to both sides: $81$ is taken from each side."
              },
              {
                "step": "$(x + 8)(2x - 1) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = -8$ or $x = \\dfrac{1}{2}$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = -8$ and at $x = \\dfrac{1}{2}$ the value of $2x^2 + 15x$ is $8$, so the left side is $\\sqrt{81} + \\sqrt{16} = 13$, the right side.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{-8, \\dfrac{1}{2}\\}$.",
                "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{x^2 - x + 3} - \\sqrt{x^2 - x - 5} = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3, -2}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x^2 - x + 3} - \\sqrt{x^2 - x - 5} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $u = \\sqrt{x^2 - x + 3}$ and $v = \\sqrt{x^2 - x - 5}$: $u - v = 2$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two roots."
                },
                {
                  "step": "$u^2 - v^2 = 8$",
                  "reason": "Positive square root, from arithmetic: $u^2$ and $v^2$ are the expressions under the roots, and in their difference the terms with $x$ cancel, leaving $3 + 5 = 8$."
                },
                {
                  "step": "$(u - v)(u + v) = 8$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$."
                },
                {
                  "step": "$2(u + v) = 8$",
                  "reason": "Substituting a value: $u - v = 2$ by the second line."
                },
                {
                  "step": "$u + v = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$2u = 6$",
                  "reason": "Elimination: adding $u - v = 2$ and $u + v = 4$ leaves no term in $v$."
                },
                {
                  "step": "$u = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\sqrt{x^2 - x + 3} = 3$",
                  "reason": "Substituting a letter and undoing it: the root is put back in place of $u$."
                },
                {
                  "step": "$x^2 - x + 3 = 9$",
                  "reason": "Raising both sides to a power: both sides are squared."
                },
                {
                  "step": "$x^2 - x - 6 = 0$",
                  "reason": "Adding the same number to both sides: $9$ is taken from each side."
                },
                {
                  "step": "$(x - 3)(x + 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 3$ or $x = -2$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 3$ and at $x = -2$ the value of $x^2 - x$ is $6$, so the left side is $\\sqrt{9} - \\sqrt{1} = 2$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{3, -2\\}$.",
                  "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{x^2 - 6x + 65} + \\sqrt{x^2 - 6x - 15} = 10$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{8, -2}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x^2 - 6x + 65} + \\sqrt{x^2 - 6x - 15} = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $u = \\sqrt{x^2 - 6x + 65}$ and $v = \\sqrt{x^2 - 6x - 15}$: $u + v = 10$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two roots."
                },
                {
                  "step": "$u^2 - v^2 = 80$",
                  "reason": "Positive square root, from arithmetic: $u^2$ and $v^2$ are the expressions under the roots, and in their difference the terms with $x$ cancel, leaving $65 + 15 = 80$."
                },
                {
                  "step": "$(u - v)(u + v) = 80$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$."
                },
                {
                  "step": "$10(u - v) = 80$",
                  "reason": "Substituting a value: $u + v = 10$ by the second line."
                },
                {
                  "step": "$u - v = 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$2u = 18$",
                  "reason": "Elimination: adding $u + v = 10$ and $u - v = 8$ leaves no term in $v$."
                },
                {
                  "step": "$u = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\sqrt{x^2 - 6x + 65} = 9$",
                  "reason": "Substituting a letter and undoing it: the root is put back in place of $u$."
                },
                {
                  "step": "$x^2 - 6x + 65 = 81$",
                  "reason": "Raising both sides to a power: both sides are squared."
                },
                {
                  "step": "$x^2 - 6x - 16 = 0$",
                  "reason": "Adding the same number to both sides: $81$ is taken from each side."
                },
                {
                  "step": "$(x - 8)(x + 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 8$ or $x = -2$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 8$ and at $x = -2$ the value of $x^2 - 6x$ is $16$, so the left side is $\\sqrt{81} + \\sqrt{1} = 10$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{8, -2\\}$.",
                  "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{x^2 + 3x + 51} - \\sqrt{x^2 + 3x + 11} = 4$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1, -2}",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x^2 + 3x + 51} - \\sqrt{x^2 + 3x + 11} = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $u = \\sqrt{x^2 + 3x + 51}$ and $v = \\sqrt{x^2 + 3x + 11}$: $u - v = 4$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two roots."
                },
                {
                  "step": "$u^2 - v^2 = 40$",
                  "reason": "Positive square root, from arithmetic: $u^2$ and $v^2$ are the expressions under the roots, and in their difference the terms with $x$ cancel, leaving $51 - 11 = 40$."
                },
                {
                  "step": "$(u - v)(u + v) = 40$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$."
                },
                {
                  "step": "$4(u + v) = 40$",
                  "reason": "Substituting a value: $u - v = 4$ by the second line."
                },
                {
                  "step": "$u + v = 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$2u = 14$",
                  "reason": "Elimination: adding $u - v = 4$ and $u + v = 10$ leaves no term in $v$."
                },
                {
                  "step": "$u = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\sqrt{x^2 + 3x + 51} = 7$",
                  "reason": "Substituting a letter and undoing it: the root is put back in place of $u$."
                },
                {
                  "step": "$x^2 + 3x + 51 = 49$",
                  "reason": "Raising both sides to a power: both sides are squared."
                },
                {
                  "step": "$x^2 + 3x + 2 = 0$",
                  "reason": "Adding the same number to both sides: $49$ is taken from each side."
                },
                {
                  "step": "$(x + 1)(x + 2) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = -1$ or $x = -2$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = -1$ and at $x = -2$ the value of $x^2 + 3x$ is $-2$, so the left side is $\\sqrt{49} - \\sqrt{9} = 4$, the right side.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{-1, -2\\}$.",
                  "reason": "Squaring keeps every solution and may add false ones: the solutions are the candidates that pass the check, and here both pass."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt[3]{x + 20} - \\sqrt[3]{x - 6} = 2$.",
            "lines": [
              {
                "step": "Solve $\\sqrt[3]{x + 20} - \\sqrt[3]{x - 6} = 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $u = \\sqrt[3]{x + 20}$ and $v = \\sqrt[3]{x - 6}$: $u - v = 2$",
                "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two cube roots."
              },
              {
                "step": "$u^3 - v^3 = 26$",
                "reason": "Radical sign: the cube of a cube root is the number under it, so $u^3 = x + 20$ and $v^3 = x - 6$; the terms with $x$ cancel, leaving $20 + 6 = 26$."
              },
              {
                "step": "$(u - v)^3 = u^3 - v^3 - 3uv(u - v)$",
                "reason": "Sums of powers from the sum and the product: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$; with $u$ for $a$ and $-v$ for $b$ it reads $u^3 - v^3 = (u - v)^3 + 3uv(u - v)$, and $3uv(u - v)$ is taken from both sides."
              },
              {
                "step": "$8 = 26 - 6uv$",
                "reason": "Substituting a value: $u - v = 2$ by the second line and $u^3 - v^3 = 26$ by the third."
              },
              {
                "step": "$6uv = 18$",
                "reason": "Adding the same number to both sides: $6uv$ is added to each side and $8$ is taken from each."
              },
              {
                "step": "$uv = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
              },
              {
                "step": "$(x + 20)(x - 6) = 27$",
                "reason": "Raising both sides to a power: both sides are cubed; $u^3v^3$ is the product of the two numbers under the roots, and the cube of $3$ is $27$."
              },
              {
                "step": "$x^2 + 14x - 120 = 27$",
                "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
              },
              {
                "step": "$x^2 + 14x - 147 = 0$",
                "reason": "Adding the same number to both sides: $27$ is taken from each side."
              },
              {
                "step": "$(x - 7)(x + 21) = 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "Either $x = 7$ or $x = -21$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Check: at $x = 7$ the left side is $\\sqrt[3]{27} - \\sqrt[3]{1} = 3 - 1 = 2$, and at $x = -21$ it is $\\sqrt[3]{-1} - \\sqrt[3]{-27} = -1 + 3 = 2$.",
                "reason": "Checking in the original equation: each candidate is put back into the equation as given."
              },
              {
                "step": "The set of values is $\\{7, -21\\}$.",
                "reason": "Answering the question asked: every solution is one of the two candidates, and both pass the check."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt[3]{x + 5} - \\sqrt[3]{x - 51} = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{59, -13}",
              "lines": [
                {
                  "step": "Solve $\\sqrt[3]{x + 5} - \\sqrt[3]{x - 51} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $u = \\sqrt[3]{x + 5}$ and $v = \\sqrt[3]{x - 51}$: $u - v = 2$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two cube roots."
                },
                {
                  "step": "$u^3 - v^3 = 56$",
                  "reason": "Radical sign: the cube of a cube root is the number under it, so $u^3 = x + 5$ and $v^3 = x - 51$; the terms with $x$ cancel, leaving $5 + 51 = 56$."
                },
                {
                  "step": "$(u - v)^3 = u^3 - v^3 - 3uv(u - v)$",
                  "reason": "Sums of powers from the sum and the product: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$; with $u$ for $a$ and $-v$ for $b$ it reads $u^3 - v^3 = (u - v)^3 + 3uv(u - v)$, and $3uv(u - v)$ is taken from both sides."
                },
                {
                  "step": "$8 = 56 - 6uv$",
                  "reason": "Substituting a value: $u - v = 2$ by the second line and $u^3 - v^3 = 56$ by the third."
                },
                {
                  "step": "$6uv = 48$",
                  "reason": "Adding the same number to both sides: $6uv$ is added to each side and $8$ is taken from each."
                },
                {
                  "step": "$uv = 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$(x + 5)(x - 51) = 512$",
                  "reason": "Raising both sides to a power: both sides are cubed; $u^3v^3$ is the product of the two numbers under the roots, and the cube of $8$ is $512$."
                },
                {
                  "step": "$x^2 - 46x - 255 = 512$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "$x^2 - 46x - 767 = 0$",
                  "reason": "Adding the same number to both sides: $512$ is taken from each side."
                },
                {
                  "step": "$(x - 59)(x + 13) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 59$ or $x = -13$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 59$ the left side is $\\sqrt[3]{64} - \\sqrt[3]{8} = 4 - 2 = 2$, and at $x = -13$ it is $\\sqrt[3]{-8} - \\sqrt[3]{-64} = -2 + 4 = 2$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{59, -13\\}$.",
                  "reason": "Answering the question asked: every solution is one of the two candidates, and both pass the check."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt[3]{x + 11} + \\sqrt[3]{24 - x} = 5$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{16, -3}",
              "lines": [
                {
                  "step": "Solve $\\sqrt[3]{x + 11} + \\sqrt[3]{24 - x} = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $u = \\sqrt[3]{x + 11}$ and $v = \\sqrt[3]{24 - x}$: $u + v = 5$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two cube roots."
                },
                {
                  "step": "$u^3 + v^3 = 35$",
                  "reason": "Radical sign: the cube of a cube root is the number under it, so $u^3 = x + 11$ and $v^3 = 24 - x$; the terms with $x$ cancel, leaving $11 + 24 = 35$."
                },
                {
                  "step": "$(u + v)^3 = u^3 + v^3 + 3uv(u + v)$",
                  "reason": "Sums of powers from the sum and the product: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$; with $u$ for $a$ and $v$ for $b$ it reads $u^3 + v^3 = (u + v)^3 - 3uv(u + v)$, and $3uv(u + v)$ is added to both sides."
                },
                {
                  "step": "$125 = 35 + 15uv$",
                  "reason": "Substituting a value: $u + v = 5$ by the second line and $u^3 + v^3 = 35$ by the third."
                },
                {
                  "step": "$15uv = 90$",
                  "reason": "Adding the same number to both sides: $35$ is taken from each side, and the two sides are then read from right to left."
                },
                {
                  "step": "$uv = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
                },
                {
                  "step": "$(x + 11)(24 - x) = 216$",
                  "reason": "Raising both sides to a power: both sides are cubed; $u^3v^3$ is the product of the two numbers under the roots, and the cube of $6$ is $216$."
                },
                {
                  "step": "$-x^2 + 13x + 264 = 216$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "$x^2 - 13x - 48 = 0$",
                  "reason": "Adding the same number to both sides: $x^2 - 13x - 264$ is added to each side, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x - 16)(x + 3) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 16$ or $x = -3$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 16$ the left side is $\\sqrt[3]{27} + \\sqrt[3]{8} = 3 + 2 = 5$, and at $x = -3$ it is $\\sqrt[3]{8} + \\sqrt[3]{27} = 2 + 3 = 5$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{16, -3\\}$.",
                  "reason": "Answering the question asked: every solution is one of the two candidates, and both pass the check."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt[3]{x - 3} - \\sqrt[3]{x - 22} = 1$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{30, -5}",
              "lines": [
                {
                  "step": "Solve $\\sqrt[3]{x - 3} - \\sqrt[3]{x - 22} = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $u = \\sqrt[3]{x - 3}$ and $v = \\sqrt[3]{x - 22}$: $u - v = 1$",
                  "reason": "Substituting a letter for a repeated expression in a system: the letters $u$ and $v$ stand for the two cube roots."
                },
                {
                  "step": "$u^3 - v^3 = 19$",
                  "reason": "Radical sign: the cube of a cube root is the number under it, so $u^3 = x - 3$ and $v^3 = x - 22$; the terms with $x$ cancel, leaving $-3 + 22 = 19$."
                },
                {
                  "step": "$(u - v)^3 = u^3 - v^3 - 3uv(u - v)$",
                  "reason": "Sums of powers from the sum and the product: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$; with $u$ for $a$ and $-v$ for $b$ it reads $u^3 - v^3 = (u - v)^3 + 3uv(u - v)$, and $3uv(u - v)$ is taken from both sides."
                },
                {
                  "step": "$1 = 19 - 3uv$",
                  "reason": "Substituting a value: $u - v = 1$ by the second line and $u^3 - v^3 = 19$ by the third."
                },
                {
                  "step": "$3uv = 18$",
                  "reason": "Adding the same number to both sides: $3uv$ is added to each side and $1$ is taken from each."
                },
                {
                  "step": "$uv = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$(x - 3)(x - 22) = 216$",
                  "reason": "Raising both sides to a power: both sides are cubed; $u^3v^3$ is the product of the two numbers under the roots, and the cube of $6$ is $216$."
                },
                {
                  "step": "$x^2 - 25x + 66 = 216$",
                  "reason": "Multiplying out: each term of the first bracket times each term of the second, like terms collected."
                },
                {
                  "step": "$x^2 - 25x - 150 = 0$",
                  "reason": "Adding the same number to both sides: $216$ is taken from each side."
                },
                {
                  "step": "$(x - 30)(x + 5) = 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "Either $x = 30$ or $x = -5$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Check: at $x = 30$ the left side is $\\sqrt[3]{27} - \\sqrt[3]{8} = 3 - 2 = 1$, and at $x = -5$ it is $\\sqrt[3]{-8} - \\sqrt[3]{-27} = -2 + 3 = 1$.",
                  "reason": "Checking in the original equation: each candidate is put back into the equation as given."
                },
                {
                  "step": "The set of values is $\\{30, -5\\}$.",
                  "reason": "Answering the question asked: every solution is one of the two candidates, and both pass the check."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t221-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\sqrt{9x - 5} \\ge x + 1$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{9x - 5} \\ge x + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root is defined exactly when $x \\ge \\dfrac{5}{9}$.",
                "reason": "Even root of a negative number is not real: the number under the root must satisfy $9x - 5 \\ge 0$."
              },
              {
                "step": "For $x \\ge \\dfrac{5}{9}$: $x + 1 \\ge \\dfrac{14}{9}$, so the right side is not negative.",
                "reason": "Adding the same number, from arithmetic: $1$ is added to both sides."
              },
              {
                "step": "So, where the root is defined, the inequality holds exactly when $9x - 5 \\ge (x + 1)^2$.",
                "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{9x - 5}$ is $9x - 5$."
              },
              {
                "step": "$9x - 5 \\ge x^2 + 2x + 1$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
              },
              {
                "step": "$x^2 - 7x + 6 \\le 0$",
                "reason": "Adding the same number, from arithmetic: $9x - 5$ is taken from both sides, and the two sides are then read from right to left."
              },
              {
                "step": "$(x - 1)(x - 6) \\le 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "So $1 \\le x \\le 6$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $1$ and $6$ and positive outside them, and $0$ at them."
              },
              {
                "step": "Among $x \\ge \\dfrac{5}{9}$ this leaves $1 \\le x \\le 6$.",
                "reason": "Even root of a negative number is not real: a solution must make the root defined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{6x + 49} > x + 9$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-8 < x < -4",
              "lines": [
                {
                  "step": "Solve $\\sqrt{6x + 49} > x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge -\\dfrac{49}{6}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $6x + 49 \\ge 0$."
                },
                {
                  "step": "For $x \\ge -\\dfrac{49}{6}$: $x + 9 \\ge \\dfrac{5}{6}$, so the right side is not negative.",
                  "reason": "Adding the same number, from arithmetic: $9$ is added to both sides."
                },
                {
                  "step": "So, where the root is defined, the inequality holds exactly when $6x + 49 > (x + 9)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{6x + 49}$ is $6x + 49$."
                },
                {
                  "step": "$6x + 49 > x^2 + 18x + 81$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 + 12x + 32 < 0$",
                  "reason": "Adding the same number, from arithmetic: $6x + 49$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 8)(x + 4) < 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $-8 < x < -4$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-8$ and $-4$ and positive outside them."
                },
                {
                  "step": "Among $x \\ge -\\dfrac{49}{6}$ this leaves $-8 < x < -4$.",
                  "reason": "Even root of a negative number is not real: a solution must make the root defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{5x - 41} > x - 7$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "9 < x < 10",
              "lines": [
                {
                  "step": "Solve $\\sqrt{5x - 41} > x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge \\dfrac{41}{5}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $5x - 41 \\ge 0$."
                },
                {
                  "step": "For $x \\ge \\dfrac{41}{5}$: $x - 7 \\ge \\dfrac{6}{5}$, so the right side is not negative.",
                  "reason": "Adding the same number, from arithmetic: $-7$ is added to both sides."
                },
                {
                  "step": "So, where the root is defined, the inequality holds exactly when $5x - 41 > (x - 7)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{5x - 41}$ is $5x - 41$."
                },
                {
                  "step": "$5x - 41 > x^2 - 14x + 49$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 19x + 90 < 0$",
                  "reason": "Adding the same number, from arithmetic: $5x - 41$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x - 9)(x - 10) < 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $9 < x < 10$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $9$ and $10$ and positive outside them."
                },
                {
                  "step": "Among $x \\ge \\dfrac{41}{5}$ this leaves $9 < x < 10$.",
                  "reason": "Even root of a negative number is not real: a solution must make the root defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{12x + 52} \\ge x + 7$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-3 <= x <= 1",
              "lines": [
                {
                  "step": "Solve $\\sqrt{12x + 52} \\ge x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge -\\dfrac{13}{3}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $12x + 52 \\ge 0$."
                },
                {
                  "step": "For $x \\ge -\\dfrac{13}{3}$: $x + 7 \\ge \\dfrac{8}{3}$, so the right side is not negative.",
                  "reason": "Adding the same number, from arithmetic: $7$ is added to both sides."
                },
                {
                  "step": "So, where the root is defined, the inequality holds exactly when $12x + 52 \\ge (x + 7)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{12x + 52}$ is $12x + 52$."
                },
                {
                  "step": "$12x + 52 \\ge x^2 + 14x + 49$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 + 2x - 3 \\le 0$",
                  "reason": "Adding the same number, from arithmetic: $12x + 52$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 3)(x - 1) \\le 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $-3 \\le x \\le 1$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-3$ and $1$ and positive outside them, and $0$ at them."
                },
                {
                  "step": "Among $x \\ge -\\dfrac{13}{3}$ this leaves $-3 \\le x \\le 1$.",
                  "reason": "Even root of a negative number is not real: a solution must make the root defined."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{3x - 14} < x - 4$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{3x - 14} < x - 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root is defined exactly when $x \\ge \\dfrac{14}{3}$.",
                "reason": "Even root of a negative number is not real: the number under the root must satisfy $3x - 14 \\ge 0$."
              },
              {
                "step": "For $x \\ge \\dfrac{14}{3}$: $x - 4 \\ge \\dfrac{2}{3}$, so the right side is not negative.",
                "reason": "Adding the same number, from arithmetic: $-4$ is added to both sides."
              },
              {
                "step": "So, where the root is defined, the inequality holds exactly when $3x - 14 < (x - 4)^2$.",
                "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{3x - 14}$ is $3x - 14$."
              },
              {
                "step": "$3x - 14 < x^2 - 8x + 16$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
              },
              {
                "step": "$x^2 - 11x + 30 > 0$",
                "reason": "Adding the same number, from arithmetic: $3x - 14$ is taken from both sides, and the two sides are then read from right to left."
              },
              {
                "step": "$(x - 5)(x - 6) > 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "So $x < 5$ or $x > 6$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $5$ and $6$ and positive outside them."
              },
              {
                "step": "Among $x \\ge \\dfrac{14}{3}$ this leaves $\\dfrac{14}{3} \\le x < 5$ or $x > 6$.",
                "reason": "Union of intervals: each of the two parts is cut to where the root is defined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{11x - 21} < x - 1$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "21/11 <= x < 2 or x > 11",
              "lines": [
                {
                  "step": "Solve $\\sqrt{11x - 21} < x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge \\dfrac{21}{11}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $11x - 21 \\ge 0$."
                },
                {
                  "step": "For $x \\ge \\dfrac{21}{11}$: $x - 1 \\ge \\dfrac{10}{11}$, so the right side is not negative.",
                  "reason": "Adding the same number, from arithmetic: $-1$ is added to both sides."
                },
                {
                  "step": "So, where the root is defined, the inequality holds exactly when $11x - 21 < (x - 1)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{11x - 21}$ is $11x - 21$."
                },
                {
                  "step": "$11x - 21 < x^2 - 2x + 1$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 13x + 22 > 0$",
                  "reason": "Adding the same number, from arithmetic: $11x - 21$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x - 2)(x - 11) > 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $x < 2$ or $x > 11$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $2$ and $11$ and positive outside them."
                },
                {
                  "step": "Among $x \\ge \\dfrac{21}{11}$ this leaves $\\dfrac{21}{11} \\le x < 2$ or $x > 11$.",
                  "reason": "Union of intervals: each of the two parts is cut to where the root is defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{9x - 35} \\le x - 3$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "35/9 <= x <= 4 or x >= 11",
              "lines": [
                {
                  "step": "Solve $\\sqrt{9x - 35} \\le x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge \\dfrac{35}{9}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $9x - 35 \\ge 0$."
                },
                {
                  "step": "For $x \\ge \\dfrac{35}{9}$: $x - 3 \\ge \\dfrac{8}{9}$, so the right side is not negative.",
                  "reason": "Adding the same number, from arithmetic: $-3$ is added to both sides."
                },
                {
                  "step": "So, where the root is defined, the inequality holds exactly when $9x - 35 \\le (x - 3)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{9x - 35}$ is $9x - 35$."
                },
                {
                  "step": "$9x - 35 \\le x^2 - 6x + 9$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 15x + 44 \\ge 0$",
                  "reason": "Adding the same number, from arithmetic: $9x - 35$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x - 4)(x - 11) \\ge 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $x \\le 4$ or $x \\ge 11$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $4$ and $11$ and positive outside them, and $0$ at them."
                },
                {
                  "step": "Among $x \\ge \\dfrac{35}{9}$ this leaves $\\dfrac{35}{9} \\le x \\le 4$ or $x \\ge 11$.",
                  "reason": "Union of intervals: each of the two parts is cut to where the root is defined."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{8x + 44} \\le x + 7$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-11/2 <= x <= -5 or x >= -1",
              "lines": [
                {
                  "step": "Solve $\\sqrt{8x + 44} \\le x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge -\\dfrac{11}{2}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $8x + 44 \\ge 0$."
                },
                {
                  "step": "For $x \\ge -\\dfrac{11}{2}$: $x + 7 \\ge \\dfrac{3}{2}$, so the right side is not negative.",
                  "reason": "Adding the same number, from arithmetic: $7$ is added to both sides."
                },
                {
                  "step": "So, where the root is defined, the inequality holds exactly when $8x + 44 \\le (x + 7)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{8x + 44}$ is $8x + 44$."
                },
                {
                  "step": "$8x + 44 \\le x^2 + 14x + 49$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 + 6x + 5 \\ge 0$",
                  "reason": "Adding the same number, from arithmetic: $8x + 44$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 5)(x + 1) \\ge 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $x \\le -5$ or $x \\ge -1$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-5$ and $-1$ and positive outside them, and $0$ at them."
                },
                {
                  "step": "Among $x \\ge -\\dfrac{11}{2}$ this leaves $-\\dfrac{11}{2} \\le x \\le -5$ or $x \\ge -1$.",
                  "reason": "Union of intervals: each of the two parts is cut to where the root is defined."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{10x + 51} > x + 4$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{10x + 51} > x + 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root is defined exactly when $x \\ge -\\dfrac{51}{10}$.",
                "reason": "Even root of a negative number is not real: the number under the root must satisfy $10x + 51 \\ge 0$."
              },
              {
                "step": "For $x < -4$ the right side is negative, so the inequality holds wherever the root is defined: $-\\dfrac{51}{10} \\le x < -4$.",
                "reason": "Positive square root, from arithmetic: a square root is never negative, so it is greater than every negative number."
              },
              {
                "step": "For $x \\ge -4$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $10x + 51 > (x + 4)^2$.",
                "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{10x + 51}$ is $10x + 51$."
              },
              {
                "step": "$10x + 51 > x^2 + 8x + 16$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
              },
              {
                "step": "$x^2 - 2x - 35 < 0$",
                "reason": "Adding the same number, from arithmetic: $10x + 51$ is taken from both sides, and the two sides are then read from right to left."
              },
              {
                "step": "$(x + 5)(x - 7) < 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "So $-5 < x < 7$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-5$ and $7$ and positive outside them."
              },
              {
                "step": "Among $x \\ge -4$ this leaves $-4 \\le x < 7$.",
                "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
              },
              {
                "step": "Together with $-\\dfrac{51}{10} \\le x < -4$: $-\\dfrac{51}{10} \\le x < 7$.",
                "reason": "Union of intervals: the solutions of the two cases are joined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{4x + 37} \\ge x + 8$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-37/4 <= x <= -3",
              "lines": [
                {
                  "step": "Solve $\\sqrt{4x + 37} \\ge x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge -\\dfrac{37}{4}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $4x + 37 \\ge 0$."
                },
                {
                  "step": "For $x < -8$ the right side is negative, so the inequality holds wherever the root is defined: $-\\dfrac{37}{4} \\le x < -8$.",
                  "reason": "Positive square root, from arithmetic: a square root is never negative, so it is greater than every negative number."
                },
                {
                  "step": "For $x \\ge -8$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $4x + 37 \\ge (x + 8)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{4x + 37}$ is $4x + 37$."
                },
                {
                  "step": "$4x + 37 \\ge x^2 + 16x + 64$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 + 12x + 27 \\le 0$",
                  "reason": "Adding the same number, from arithmetic: $4x + 37$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 9)(x + 3) \\le 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $-9 \\le x \\le -3$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-9$ and $-3$ and positive outside them, and $0$ at them."
                },
                {
                  "step": "Among $x \\ge -8$ this leaves $-8 \\le x \\le -3$.",
                  "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
                },
                {
                  "step": "Together with $-\\dfrac{37}{4} \\le x < -8$: $-\\dfrac{37}{4} \\le x \\le -3$.",
                  "reason": "Union of intervals: the solutions of the two cases are joined."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{x - 3} > 5 - x$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x > 4",
              "lines": [
                {
                  "step": "Solve $\\sqrt{x - 3} > 5 - x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge 3$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $x - 3 \\ge 0$."
                },
                {
                  "step": "For $x > 5$ the right side is negative, so the inequality holds wherever the root is defined: $x > 5$.",
                  "reason": "Positive square root, from arithmetic: a square root is never negative, so it is greater than every negative number."
                },
                {
                  "step": "For $3 \\le x \\le 5$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $x - 3 > (5 - x)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{x - 3}$ is $x - 3$."
                },
                {
                  "step": "$x - 3 > x^2 - 10x + 25$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 11x + 28 < 0$",
                  "reason": "Adding the same number, from arithmetic: $x - 3$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x - 4)(x - 7) < 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $4 < x < 7$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $4$ and $7$ and positive outside them."
                },
                {
                  "step": "Among $3 \\le x \\le 5$ this leaves $4 < x \\le 5$.",
                  "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
                },
                {
                  "step": "Together with $x > 5$: $x > 4$.",
                  "reason": "Union of intervals: the solutions of the two cases are joined."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{21 - 5x} > x - 3$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x < 4",
              "lines": [
                {
                  "step": "Solve $\\sqrt{21 - 5x} > x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\le \\dfrac{21}{5}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $21 - 5x \\ge 0$."
                },
                {
                  "step": "For $x < 3$ the right side is negative, so the inequality holds wherever the root is defined: $x < 3$.",
                  "reason": "Positive square root, from arithmetic: a square root is never negative, so it is greater than every negative number."
                },
                {
                  "step": "For $3 \\le x \\le \\dfrac{21}{5}$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $21 - 5x > (x - 3)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{21 - 5x}$ is $21 - 5x$."
                },
                {
                  "step": "$21 - 5x > x^2 - 6x + 9$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - x - 12 < 0$",
                  "reason": "Adding the same number, from arithmetic: $21 - 5x$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 3)(x - 4) < 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $-3 < x < 4$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-3$ and $4$ and positive outside them."
                },
                {
                  "step": "Among $3 \\le x \\le \\dfrac{21}{5}$ this leaves $3 \\le x < 4$.",
                  "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
                },
                {
                  "step": "Together with $x < 3$: $x < 4$.",
                  "reason": "Union of intervals: the solutions of the two cases are joined."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\sqrt{x - 2} < x - 4$.",
            "lines": [
              {
                "step": "Solve $\\sqrt{x - 2} < x - 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root is defined exactly when $x \\ge 2$.",
                "reason": "Even root of a negative number is not real: the number under the root must satisfy $x - 2 \\ge 0$."
              },
              {
                "step": "For $x < 4$ the right side is negative, so no such $x$ is a solution.",
                "reason": "Positive square root, from arithmetic: a square root is never negative, so it is not less than a negative number."
              },
              {
                "step": "For $x \\ge 4$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $x - 2 < (x - 4)^2$.",
                "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{x - 2}$ is $x - 2$."
              },
              {
                "step": "$x - 2 < x^2 - 8x + 16$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
              },
              {
                "step": "$x^2 - 9x + 18 > 0$",
                "reason": "Adding the same number, from arithmetic: $x - 2$ is taken from both sides, and the two sides are then read from right to left."
              },
              {
                "step": "$(x - 3)(x - 6) > 0$",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              },
              {
                "step": "So $x < 3$ or $x > 6$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $3$ and $6$ and positive outside them."
              },
              {
                "step": "Among $x \\ge 4$ this leaves $x > 6$.",
                "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\sqrt{8x + 12} \\le x - 1$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x >= 11",
              "lines": [
                {
                  "step": "Solve $\\sqrt{8x + 12} \\le x - 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge -\\dfrac{3}{2}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $8x + 12 \\ge 0$."
                },
                {
                  "step": "For $x < 1$ the right side is negative, so no such $x$ is a solution.",
                  "reason": "Positive square root, from arithmetic: a square root is never negative, so it is not less than a negative number."
                },
                {
                  "step": "For $x \\ge 1$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $8x + 12 \\le (x - 1)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{8x + 12}$ is $8x + 12$."
                },
                {
                  "step": "$8x + 12 \\le x^2 - 2x + 1$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 10x - 11 \\ge 0$",
                  "reason": "Adding the same number, from arithmetic: $8x + 12$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 1)(x - 11) \\ge 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $x \\le -1$ or $x \\ge 11$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-1$ and $11$ and positive outside them, and $0$ at them."
                },
                {
                  "step": "Among $x \\ge 1$ this leaves $x \\ge 11$.",
                  "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{8x - 15} < 3 - x$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "15/8 <= x < 2",
              "lines": [
                {
                  "step": "Solve $\\sqrt{8x - 15} < 3 - x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\ge \\dfrac{15}{8}$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $8x - 15 \\ge 0$."
                },
                {
                  "step": "For $x > 3$ the right side is negative, so no such $x$ is a solution.",
                  "reason": "Positive square root, from arithmetic: a square root is never negative, so it is not less than a negative number."
                },
                {
                  "step": "For $\\dfrac{15}{8} \\le x \\le 3$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $8x - 15 < (3 - x)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{8x - 15}$ is $8x - 15$."
                },
                {
                  "step": "$8x - 15 < x^2 - 6x + 9$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 14x + 24 > 0$",
                  "reason": "Adding the same number, from arithmetic: $8x - 15$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x - 2)(x - 12) > 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $x < 2$ or $x > 12$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $2$ and $12$ and positive outside them."
                },
                {
                  "step": "Among $\\dfrac{15}{8} \\le x \\le 3$ this leaves $\\dfrac{15}{8} \\le x < 2$.",
                  "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
                }
              ]
            },
            {
              "prompt": "Solve $\\sqrt{61 - x} < x - 5$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "12 < x <= 61",
              "lines": [
                {
                  "step": "Solve $\\sqrt{61 - x} < x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root is defined exactly when $x \\le 61$.",
                  "reason": "Even root of a negative number is not real: the number under the root must satisfy $61 - x \\ge 0$."
                },
                {
                  "step": "For $x < 5$ the right side is negative, so no such $x$ is a solution.",
                  "reason": "Positive square root, from arithmetic: a square root is never negative, so it is not less than a negative number."
                },
                {
                  "step": "For $5 \\le x \\le 61$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $61 - x < (x - 5)^2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative there, the left side as a square root, and the square of $\\sqrt{61 - x}$ is $61 - x$."
                },
                {
                  "step": "$61 - x < x^2 - 10x + 25$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side."
                },
                {
                  "step": "$x^2 - 9x - 36 > 0$",
                  "reason": "Adding the same number, from arithmetic: $61 - x$ is taken from both sides, and the two sides are then read from right to left."
                },
                {
                  "step": "$(x + 3)(x - 12) > 0$",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                },
                {
                  "step": "So $x < -3$ or $x > 12$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the product is negative between $-3$ and $12$ and positive outside them."
                },
                {
                  "step": "Among $5 \\le x \\le 61$ this leaves $12 < x \\le 61$.",
                  "reason": "A case answer counts only inside its case: the squared inequality stands for the given one only in this case."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t221-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the completed-square form of $(8x^2 + 224) - (x + 14)^2$; its sign shows how $\\sqrt{8x^2 + 224}$ compares with $x + 14$ for every real number $x$ with $x \\ge 0$.",
            "lines": [
              {
                "step": "Find the completed-square form of $(8x^2 + 224) - (x + 14)^2$; its sign shows how $\\sqrt{8x^2 + 224}$ compares with $x + 14$ for every real number $x$ with $x \\ge 0$.",
                "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{8x^2 + 224}$ with $x + 14$ becomes comparing $8x^2 + 224$ with $(x + 14)^2$, so their difference is studied first."
              },
              {
                "step": "$(8x^2 + 224) - (x + 14)^2 = 7x^2 - 28x + 28$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x + 14)^2$, which is then taken from $8x^2 + 224$."
              },
              {
                "step": "$7x^2 - 28x + 28 = 7(x - 2)^2$",
                "reason": "Completing the square: $7$ is taken out of the first two terms, and the square of $x - 2$ is $x^2 - 4x + 4$."
              },
              {
                "step": "Here $7(x - 2)^2 \\ge 0$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$."
              },
              {
                "step": "So $8x^2 + 224 \\ge (x + 14)^2$.",
                "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x + 14)^2$ is added to both sides."
              },
              {
                "step": "For $x \\ge 0$: $x + 14 \\ge 14$, so $x + 14$ is not negative.",
                "reason": "Adding the same number: $14$ is added to both sides of $x \\ge 0$."
              },
              {
                "step": "So $\\sqrt{8x^2 + 224} \\ge x + 14$.",
                "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $8x^2 + 224$ and $(x + 14)^2$."
              },
              {
                "step": "The completed-square form is $7(x - 2)^2$.",
                "reason": "Answering the question asked: the completed-square form of the difference is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the completed-square form of $(5x^2 + 320) - (x + 16)^2$; its sign shows how $\\sqrt{5x^2 + 320}$ compares with $x + 16$ for every real number $x$ with $x \\ge 0$.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "4*(x-4)^2",
              "lines": [
                {
                  "step": "Find the completed-square form of $(5x^2 + 320) - (x + 16)^2$; its sign shows how $\\sqrt{5x^2 + 320}$ compares with $x + 16$ for every real number $x$ with $x \\ge 0$.",
                  "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{5x^2 + 320}$ with $x + 16$ becomes comparing $5x^2 + 320$ with $(x + 16)^2$, so their difference is studied first."
                },
                {
                  "step": "$(5x^2 + 320) - (x + 16)^2 = 4x^2 - 32x + 64$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x + 16)^2$, which is then taken from $5x^2 + 320$."
                },
                {
                  "step": "$4x^2 - 32x + 64 = 4(x - 4)^2$",
                  "reason": "Completing the square: $4$ is taken out of the first two terms, and the square of $x - 4$ is $x^2 - 8x + 16$."
                },
                {
                  "step": "Here $4(x - 4)^2 \\ge 0$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "So $5x^2 + 320 \\ge (x + 16)^2$.",
                  "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x + 16)^2$ is added to both sides."
                },
                {
                  "step": "For $x \\ge 0$: $x + 16 \\ge 16$, so $x + 16$ is not negative.",
                  "reason": "Adding the same number: $16$ is added to both sides of $x \\ge 0$."
                },
                {
                  "step": "So $\\sqrt{5x^2 + 320} \\ge x + 16$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $5x^2 + 320$ and $(x + 16)^2$."
                },
                {
                  "step": "The completed-square form is $4(x - 4)^2$.",
                  "reason": "Answering the question asked: the completed-square form of the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the completed-square form of $(9x^2 + 72) - (x + 8)^2$; its sign shows how $\\sqrt{9x^2 + 72}$ compares with $x + 8$ for every real number $x$ with $x \\ge 0$.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "8*(x-1)^2",
              "lines": [
                {
                  "step": "Find the completed-square form of $(9x^2 + 72) - (x + 8)^2$; its sign shows how $\\sqrt{9x^2 + 72}$ compares with $x + 8$ for every real number $x$ with $x \\ge 0$.",
                  "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{9x^2 + 72}$ with $x + 8$ becomes comparing $9x^2 + 72$ with $(x + 8)^2$, so their difference is studied first."
                },
                {
                  "step": "$(9x^2 + 72) - (x + 8)^2 = 8x^2 - 16x + 8$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x + 8)^2$, which is then taken from $9x^2 + 72$."
                },
                {
                  "step": "$8x^2 - 16x + 8 = 8(x - 1)^2$",
                  "reason": "Completing the square: $8$ is taken out of the first two terms, and the square of $x - 1$ is $x^2 - 2x + 1$."
                },
                {
                  "step": "Here $8(x - 1)^2 \\ge 0$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "So $9x^2 + 72 \\ge (x + 8)^2$.",
                  "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x + 8)^2$ is added to both sides."
                },
                {
                  "step": "For $x \\ge 0$: $x + 8 \\ge 8$, so $x + 8$ is not negative.",
                  "reason": "Adding the same number: $8$ is added to both sides of $x \\ge 0$."
                },
                {
                  "step": "So $\\sqrt{9x^2 + 72} \\ge x + 8$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $9x^2 + 72$ and $(x + 8)^2$."
                },
                {
                  "step": "The completed-square form is $8(x - 1)^2$.",
                  "reason": "Answering the question asked: the completed-square form of the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the completed-square form of $(7x^2 + 42) - (x + 6)^2$; its sign shows how $\\sqrt{7x^2 + 42}$ compares with $x + 6$ for every real number $x$ with $x \\ge 0$.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "6*(x-1)^2",
              "lines": [
                {
                  "step": "Find the completed-square form of $(7x^2 + 42) - (x + 6)^2$; its sign shows how $\\sqrt{7x^2 + 42}$ compares with $x + 6$ for every real number $x$ with $x \\ge 0$.",
                  "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{7x^2 + 42}$ with $x + 6$ becomes comparing $7x^2 + 42$ with $(x + 6)^2$, so their difference is studied first."
                },
                {
                  "step": "$(7x^2 + 42) - (x + 6)^2 = 6x^2 - 12x + 6$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x + 6)^2$, which is then taken from $7x^2 + 42$."
                },
                {
                  "step": "$6x^2 - 12x + 6 = 6(x - 1)^2$",
                  "reason": "Completing the square: $6$ is taken out of the first two terms, and the square of $x - 1$ is $x^2 - 2x + 1$."
                },
                {
                  "step": "Here $6(x - 1)^2 \\ge 0$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "So $7x^2 + 42 \\ge (x + 6)^2$.",
                  "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x + 6)^2$ is added to both sides."
                },
                {
                  "step": "For $x \\ge 0$: $x + 6 \\ge 6$, so $x + 6$ is not negative.",
                  "reason": "Adding the same number: $6$ is added to both sides of $x \\ge 0$."
                },
                {
                  "step": "So $\\sqrt{7x^2 + 42} \\ge x + 6$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $7x^2 + 42$ and $(x + 6)^2$."
                },
                {
                  "step": "The completed-square form is $6(x - 1)^2$.",
                  "reason": "Answering the question asked: the completed-square form of the difference is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the completed-square form of $(2x^2 + 15) - (x - 2)^2$; its sign shows how $\\sqrt{2x^2 + 15}$ compares with $x - 2$ for every real number $x$ with $x \\ge 2$.",
            "lines": [
              {
                "step": "Find the completed-square form of $(2x^2 + 15) - (x - 2)^2$; its sign shows how $\\sqrt{2x^2 + 15}$ compares with $x - 2$ for every real number $x$ with $x \\ge 2$.",
                "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{2x^2 + 15}$ with $x - 2$ becomes comparing $2x^2 + 15$ with $(x - 2)^2$, so their difference is studied first."
              },
              {
                "step": "$(2x^2 + 15) - (x - 2)^2 = x^2 + 4x + 11$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x - 2)^2$, which is then taken from $2x^2 + 15$."
              },
              {
                "step": "$x^2 + 4x + 11 = (x + 2)^2 + 7$",
                "reason": "Completing the square: the square of $x + 2$ is $x^2 + 4x + 4$."
              },
              {
                "step": "Here $(x + 2)^2 \\ge 0$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$."
              },
              {
                "step": "So $(x + 2)^2 + 7 > 0$.",
                "reason": "Adding the same number: $7$ is added to both sides, which gives $(x + 2)^2 + 7 \\ge 7$, and $7$ is positive."
              },
              {
                "step": "So $2x^2 + 15 > (x - 2)^2$.",
                "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x - 2)^2$ is added to both sides."
              },
              {
                "step": "For $x \\ge 2$: $x - 2 \\ge 0$, so $x - 2$ is not negative.",
                "reason": "Adding the same number: $-2$ is added to both sides of $x \\ge 2$."
              },
              {
                "step": "So $\\sqrt{2x^2 + 15} > x - 2$.",
                "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $2x^2 + 15$ and $(x - 2)^2$."
              },
              {
                "step": "The completed-square form is $(x + 2)^2 + 7$.",
                "reason": "Answering the question asked: the completed-square form of the difference is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the completed-square form of $(3x^2 + 7) - (x + 2)^2$; its sign shows how $\\sqrt{3x^2 + 7}$ compares with $x + 2$ for every real number $x$ with $x \\ge 0$.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "2*(x-1)^2+1",
              "lines": [
                {
                  "step": "Find the completed-square form of $(3x^2 + 7) - (x + 2)^2$; its sign shows how $\\sqrt{3x^2 + 7}$ compares with $x + 2$ for every real number $x$ with $x \\ge 0$.",
                  "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{3x^2 + 7}$ with $x + 2$ becomes comparing $3x^2 + 7$ with $(x + 2)^2$, so their difference is studied first."
                },
                {
                  "step": "$(3x^2 + 7) - (x + 2)^2 = 2x^2 - 4x + 3$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x + 2)^2$, which is then taken from $3x^2 + 7$."
                },
                {
                  "step": "$2x^2 - 4x + 3 = 2(x - 1)^2 + 1$",
                  "reason": "Completing the square: $2$ is taken out of the first two terms, and the square of $x - 1$ is $x^2 - 2x + 1$."
                },
                {
                  "step": "Here $2(x - 1)^2 \\ge 0$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "So $2(x - 1)^2 + 1 > 0$.",
                  "reason": "Adding the same number: $1$ is added to both sides, which gives $2(x - 1)^2 + 1 \\ge 1$, and $1$ is positive."
                },
                {
                  "step": "So $3x^2 + 7 > (x + 2)^2$.",
                  "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x + 2)^2$ is added to both sides."
                },
                {
                  "step": "For $x \\ge 0$: $x + 2 \\ge 2$, so $x + 2$ is not negative.",
                  "reason": "Adding the same number: $2$ is added to both sides of $x \\ge 0$."
                },
                {
                  "step": "So $\\sqrt{3x^2 + 7} > x + 2$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $3x^2 + 7$ and $(x + 2)^2$."
                },
                {
                  "step": "The completed-square form is $2(x - 1)^2 + 1$.",
                  "reason": "Answering the question asked: the completed-square form of the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the completed-square form of $(2x^2 + 4) - (x + 1)^2$; its sign shows how $\\sqrt{2x^2 + 4}$ compares with $x + 1$ for every real number $x$ with $x \\ge 0$.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(x-1)^2+2",
              "lines": [
                {
                  "step": "Find the completed-square form of $(2x^2 + 4) - (x + 1)^2$; its sign shows how $\\sqrt{2x^2 + 4}$ compares with $x + 1$ for every real number $x$ with $x \\ge 0$.",
                  "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{2x^2 + 4}$ with $x + 1$ becomes comparing $2x^2 + 4$ with $(x + 1)^2$, so their difference is studied first."
                },
                {
                  "step": "$(2x^2 + 4) - (x + 1)^2 = x^2 - 2x + 3$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x + 1)^2$, which is then taken from $2x^2 + 4$."
                },
                {
                  "step": "$x^2 - 2x + 3 = (x - 1)^2 + 2$",
                  "reason": "Completing the square: the square of $x - 1$ is $x^2 - 2x + 1$."
                },
                {
                  "step": "Here $(x - 1)^2 \\ge 0$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "So $(x - 1)^2 + 2 > 0$.",
                  "reason": "Adding the same number: $2$ is added to both sides, which gives $(x - 1)^2 + 2 \\ge 2$, and $2$ is positive."
                },
                {
                  "step": "So $2x^2 + 4 > (x + 1)^2$.",
                  "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x + 1)^2$ is added to both sides."
                },
                {
                  "step": "For $x \\ge 0$: $x + 1 \\ge 1$, so $x + 1$ is not negative.",
                  "reason": "Adding the same number: $1$ is added to both sides of $x \\ge 0$."
                },
                {
                  "step": "So $\\sqrt{2x^2 + 4} > x + 1$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $2x^2 + 4$ and $(x + 1)^2$."
                },
                {
                  "step": "The completed-square form is $(x - 1)^2 + 2$.",
                  "reason": "Answering the question asked: the completed-square form of the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the completed-square form of $(2x^2 + 21) - (x - 3)^2$; its sign shows how $\\sqrt{2x^2 + 21}$ compares with $x - 3$ for every real number $x$ with $x \\ge 3$.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(x+3)^2+3",
              "lines": [
                {
                  "step": "Find the completed-square form of $(2x^2 + 21) - (x - 3)^2$; its sign shows how $\\sqrt{2x^2 + 21}$ compares with $x - 3$ for every real number $x$ with $x \\ge 3$.",
                  "reason": "Working backwards and then writing forwards: with both sides squared, comparing $\\sqrt{2x^2 + 21}$ with $x - 3$ becomes comparing $2x^2 + 21$ with $(x - 3)^2$, so their difference is studied first."
                },
                {
                  "step": "$(2x^2 + 21) - (x - 3)^2 = x^2 + 6x + 12$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out $(x - 3)^2$, which is then taken from $2x^2 + 21$."
                },
                {
                  "step": "$x^2 + 6x + 12 = (x + 3)^2 + 3$",
                  "reason": "Completing the square: the square of $x + 3$ is $x^2 + 6x + 9$."
                },
                {
                  "step": "Here $(x + 3)^2 \\ge 0$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "So $(x + 3)^2 + 3 > 0$.",
                  "reason": "Adding the same number: $3$ is added to both sides, which gives $(x + 3)^2 + 3 \\ge 3$, and $3$ is positive."
                },
                {
                  "step": "So $2x^2 + 21 > (x - 3)^2$.",
                  "reason": "Adding the same number: by the second and third lines the difference of the two sides is the completed square, and $(x - 3)^2$ is added to both sides."
                },
                {
                  "step": "For $x \\ge 3$: $x - 3 \\ge 0$, so $x - 3$ is not negative.",
                  "reason": "Adding the same number: $-3$ is added to both sides of $x \\ge 3$."
                },
                {
                  "step": "So $\\sqrt{2x^2 + 21} > x - 3$.",
                  "reason": "Squaring an inequality of nonnegative sides: both sides are nonnegative, the left side as a square root, and their squares are $2x^2 + 21$ and $(x - 3)^2$."
                },
                {
                  "step": "The completed-square form is $(x + 3)^2 + 3$.",
                  "reason": "Answering the question asked: the completed-square form of the difference is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t221-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\sqrt{x + 51} \\ge x - 3$, and write that line right.",
            "given": [
              "$\\sqrt{x + 51} \\ge x - 3$",
              "The root is defined exactly when $x \\ge -51$.",
              "For $x < 3$ the right side is negative, so the inequality holds wherever the root is defined: $-51 \\le x < 3$.",
              "For $x \\ge 3$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $x + 51 \\ge (x - 3)^2$.",
              "$x + 51 \\ge x^2 + 9$",
              "$x^2 - x - 42 \\le 0$",
              "$(x + 6)(x - 7) \\le 0$",
              "So $-6 \\le x \\le 7$.",
              "Among $x \\ge 3$ this leaves $3 \\le x \\le 7$.",
              "Together with $-51 \\le x < 3$: $-51 \\le x \\le 7$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\sqrt{x + 51} \\ge x - 3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 squares $x - 3$ as $x^2 + 9$: the middle term $-6x$ is missing.",
                "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
              },
              {
                "step": "Line 5 written right is $x + 51 \\ge x^2 - 6x + 9$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{9x + 22} + 5 < x - 1$, and write that line right.",
              "given": [
                "$\\sqrt{9x + 22} + 5 < x - 1$",
                "The root is defined exactly when $x \\ge -\\dfrac{22}{9}$.",
                "$\\sqrt{9x + 22} < x - 6$",
                "For $x < 6$ the right side is negative, so no such $x$ is a solution.",
                "For $x \\ge 6$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $9x + 22 < (x - 6)^2$.",
                "$9x + 22 < x^2 + 36$",
                "$x^2 - 9x + 14 > 0$",
                "$(x - 2)(x - 7) > 0$",
                "So $x < 2$ or $x > 7$.",
                "Among $x \\ge 6$ this leaves $x > 7$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 9*x+22 < x^2-12*x+36",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{9x + 22} + 5 < x - 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 squares $x - 6$ as $x^2 + 36$: the middle term $-12x$ is missing.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Line 6 written right is $9x + 22 < x^2 - 12x + 36$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{2x + 25} < x - 1$, and write that line right.",
              "given": [
                "$\\sqrt{2x + 25} < x - 1$",
                "The root is defined exactly when $x \\ge -\\dfrac{25}{2}$.",
                "For $x < 1$ the right side is negative, so no such $x$ is a solution.",
                "For $x \\ge 1$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $2x + 25 < (x - 1)^2$.",
                "$2x + 25 < x^2 + 1$",
                "$x^2 - 2x - 24 > 0$",
                "$(x + 4)(x - 6) > 0$",
                "So $x < -4$ or $x > 6$.",
                "Among $x \\ge 1$ this leaves $x > 6$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 2*x+25 < x^2-2*x+1",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{2x + 25} < x - 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 squares $x - 1$ as $x^2 + 1$: the middle term $-2x$ is missing.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Line 5 written right is $2x + 25 < x^2 - 2x + 1$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{6x + 16} + 3 > 6 - x$, and write that line right.",
              "given": [
                "$\\sqrt{6x + 16} + 3 > 6 - x$",
                "$\\sqrt{6x + 16} > 3 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{8}{3}$.",
                "For $x > 3$ the right side is negative, so the inequality holds wherever the root is defined: $x > 3$.",
                "For $-\\dfrac{8}{3} \\le x \\le 3$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $6x + 16 > (3 - x)^2$.",
                "$6x + 16 > x^2 + 9$",
                "$x^2 - 6x - 7 < 0$",
                "$(x + 1)(x - 7) < 0$",
                "So $-1 < x < 7$.",
                "Among $-\\dfrac{8}{3} \\le x \\le 3$ this leaves $-1 < x \\le 3$.",
                "Together with $x > 3$: $x > -1$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 6*x+16 > x^2-6*x+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{6x + 16} + 3 > 6 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 squares $3 - x$ as $x^2 + 9$: the middle term $-6x$ is missing.",
                  "reason": "A power taken term by term over a sum: the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Line 6 written right is $6x + 16 > x^2 - 6x + 9$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\sqrt{8x + 1} - 3 < x - 5$, and write that line right.",
            "given": [
              "$\\sqrt{8x + 1} - 3 < x - 5$",
              "The root is defined exactly when $x \\ge -\\dfrac{1}{8}$.",
              "$\\sqrt{8x + 1} < x - 2$",
              "For $x < 2$ the right side is negative, so no such $x$ is a solution.",
              "For $x \\ge 2$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $8x + 1 < (x - 2)^2$.",
              "$8x + 1 < x^2 + 4x + 4$",
              "$x^2 - 4x + 3 > 0$",
              "$(x - 1)(x - 3) > 0$",
              "So $x < 1$ or $x > 3$.",
              "Among $x \\ge 2$ this leaves $x > 3$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\sqrt{8x + 1} - 3 < x - 5$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 6 writes the middle term of $(x - 2)^2$ as $4x$: it is $-4x$.",
                "reason": "A sign lost: twice the product of two terms with different signs is negative."
              },
              {
                "step": "Line 6 written right is $8x + 1 < x^2 - 4x + 4$.",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{9x + 31} > 1 - x$, and write that line right.",
              "given": [
                "$\\sqrt{9x + 31} > 1 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{31}{9}$.",
                "For $x > 1$ the right side is negative, so the inequality holds wherever the root is defined: $x > 1$.",
                "For $-\\dfrac{31}{9} \\le x \\le 1$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $9x + 31 > (1 - x)^2$.",
                "$9x + 31 > x^2 + 2x + 1$",
                "$x^2 - 7x - 30 < 0$",
                "$(x + 3)(x - 10) < 0$",
                "So $-3 < x < 10$.",
                "Among $-\\dfrac{31}{9} \\le x \\le 1$ this leaves $-3 < x \\le 1$.",
                "Together with $x > 1$: $x > -3$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 9*x+31 > x^2-2*x+1",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{9x + 31} > 1 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes the middle term of $(1 - x)^2$ as $2x$: it is $-2x$.",
                  "reason": "A sign lost: twice the product of two terms with different signs is negative."
                },
                {
                  "step": "Line 5 written right is $9x + 31 > x^2 - 2x + 1$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{6x + 52} + 5 > 7 - x$, and write that line right.",
              "given": [
                "$\\sqrt{6x + 52} + 5 > 7 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{26}{3}$.",
                "$\\sqrt{6x + 52} > 2 - x$",
                "For $x > 2$ the right side is negative, so the inequality holds wherever the root is defined: $x > 2$.",
                "For $-\\dfrac{26}{3} \\le x \\le 2$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $6x + 52 > (2 - x)^2$.",
                "$6x + 52 > x^2 + 4x + 4$",
                "$x^2 - 2x - 48 < 0$",
                "$(x + 6)(x - 8) < 0$",
                "So $-6 < x < 8$.",
                "Among $-\\dfrac{26}{3} \\le x \\le 2$ this leaves $-6 < x \\le 2$.",
                "Together with $x > 2$: $x > -6$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 6*x+52 > x^2-4*x+4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{6x + 52} + 5 > 7 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 writes the middle term of $(2 - x)^2$ as $4x$: it is $-4x$.",
                  "reason": "A sign lost: twice the product of two terms with different signs is negative."
                },
                {
                  "step": "Line 6 written right is $6x + 52 > x^2 - 4x + 4$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{7x + 36} < x - 4$, and write that line right.",
              "given": [
                "$\\sqrt{7x + 36} < x - 4$",
                "The root is defined exactly when $x \\ge -\\dfrac{36}{7}$.",
                "For $x < 4$ the right side is negative, so no such $x$ is a solution.",
                "For $x \\ge 4$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $7x + 36 < (x - 4)^2$.",
                "$7x + 36 < x^2 + 8x + 16$",
                "$x^2 + x - 20 > 0$",
                "$(x + 5)(x - 4) > 0$",
                "So $x < -5$ or $x > 4$.",
                "Among $x \\ge 4$ this leaves $x > 4$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 7*x+36 < x^2-8*x+16",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{7x + 36} < x - 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes the middle term of $(x - 4)^2$ as $8x$: it is $-8x$.",
                  "reason": "A sign lost: twice the product of two terms with different signs is negative."
                },
                {
                  "step": "Line 5 written right is $7x + 36 < x^2 - 8x + 16$.",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$ writes out the right side of the line before."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\sqrt{2x + 13} > 8 - x$, and write that line right.",
            "given": [
              "$\\sqrt{2x + 13} > 8 - x$",
              "The root is defined exactly when $x \\ge -\\dfrac{13}{2}$.",
              "For $x > 8$ the right side is negative, so the inequality holds wherever the root is defined: $x > 8$.",
              "For $-\\dfrac{13}{2} \\le x \\le 8$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $2x + 13 > (8 - x)^2$.",
              "$2x + 13 > x^2 - 16x + 64$",
              "$x^2 - 18x + 77 < 0$",
              "$(x - 7)(x - 11) < 0$",
              "So $7 < x < 11$.",
              "Among $-\\dfrac{13}{2} \\le x \\le 8$ this leaves $7 < x \\le 8$.",
              "Together with $x > 8$: $x > 7$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\sqrt{2x + 13} > 8 - x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 6 has the constant $77$: taking $2x + 13$ from both sides of line 5 leaves $64 - 13 = 51$ there.",
                "reason": "A sign lost: a term taken to the other side changes its sign."
              },
              {
                "step": "Line 6 written right is $x^2 - 18x + 51 < 0$.",
                "reason": "Adding the same number, from arithmetic: $2x + 13$ is taken from both sides, and the two sides are then read from right to left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{4x + 19} - 3 < 3 - x$, and write that line right.",
              "given": [
                "$\\sqrt{4x + 19} - 3 < 3 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{19}{4}$.",
                "$\\sqrt{4x + 19} < 6 - x$",
                "For $x > 6$ the right side is negative, so no such $x$ is a solution.",
                "For $-\\dfrac{19}{4} \\le x \\le 6$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $4x + 19 < (6 - x)^2$.",
                "$4x + 19 < x^2 - 12x + 36$",
                "$x^2 - 16x + 55 > 0$",
                "$(x - 5)(x - 11) > 0$",
                "So $x < 5$ or $x > 11$.",
                "Among $-\\dfrac{19}{4} \\le x \\le 6$ this leaves $-\\dfrac{19}{4} \\le x < 5$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x^2-16*x+17 > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{4x + 19} - 3 < 3 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 has the constant $55$: taking $4x + 19$ from both sides of line 6 leaves $36 - 19 = 17$ there.",
                  "reason": "A sign lost: a term taken to the other side changes its sign."
                },
                {
                  "step": "Line 7 written right is $x^2 - 16x + 17 > 0$.",
                  "reason": "Adding the same number, from arithmetic: $4x + 19$ is taken from both sides, and the two sides are then read from right to left."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{2x + 11} < x - 7$, and write that line right.",
              "given": [
                "$\\sqrt{2x + 11} < x - 7$",
                "The root is defined exactly when $x \\ge -\\dfrac{11}{2}$.",
                "For $x < 7$ the right side is negative, so no such $x$ is a solution.",
                "For $x \\ge 7$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $2x + 11 < (x - 7)^2$.",
                "$2x + 11 < x^2 - 14x + 49$",
                "$x^2 - 16x + 60 > 0$",
                "$(x - 6)(x - 10) > 0$",
                "So $x < 6$ or $x > 10$.",
                "Among $x \\ge 7$ this leaves $x > 10$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: x^2-16*x+38 > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{2x + 11} < x - 7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 has the constant $60$: taking $2x + 11$ from both sides of line 5 leaves $49 - 11 = 38$ there.",
                  "reason": "A sign lost: a term taken to the other side changes its sign."
                },
                {
                  "step": "Line 6 written right is $x^2 - 16x + 38 > 0$.",
                  "reason": "Adding the same number, from arithmetic: $2x + 11$ is taken from both sides, and the two sides are then read from right to left."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{6x + 23} - 3 > x - 8$, and write that line right.",
              "given": [
                "$\\sqrt{6x + 23} - 3 > x - 8$",
                "$\\sqrt{6x + 23} > x - 5$",
                "The root is defined exactly when $x \\ge -\\dfrac{23}{6}$.",
                "For $x < 5$ the right side is negative, so the inequality holds wherever the root is defined: $-\\dfrac{23}{6} \\le x < 5$.",
                "For $x \\ge 5$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $6x + 23 > (x - 5)^2$.",
                "$6x + 23 > x^2 - 10x + 25$",
                "$x^2 - 16x + 48 < 0$",
                "$(x - 4)(x - 12) < 0$",
                "So $4 < x < 12$.",
                "Among $x \\ge 5$ this leaves $5 \\le x < 12$.",
                "Together with $-\\dfrac{23}{6} \\le x < 5$: $-\\dfrac{23}{6} \\le x < 12$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x^2-16*x+2 < 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{6x + 23} - 3 > x - 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 has the constant $48$: taking $6x + 23$ from both sides of line 6 leaves $25 - 23 = 2$ there.",
                  "reason": "A sign lost: a term taken to the other side changes its sign."
                },
                {
                  "step": "Line 7 written right is $x^2 - 16x + 2 < 0$.",
                  "reason": "Adding the same number, from arithmetic: $6x + 23$ is taken from both sides, and the two sides are then read from right to left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\sqrt{3x + 48} + 2 < x - 4$, and write that line right.",
            "given": [
              "$\\sqrt{3x + 48} + 2 < x - 4$",
              "$\\sqrt{3x + 48} < x - 2$",
              "The root is defined exactly when $x \\ge -16$.",
              "For $x < 2$ the right side is negative, so no such $x$ is a solution.",
              "For $x \\ge 2$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $3x + 48 < (x - 2)^2$.",
              "$3x + 48 < x^2 - 4x + 4$",
              "$x^2 - 7x - 44 > 0$",
              "$(x + 4)(x - 11) > 0$",
              "So $x < -4$ or $x > 11$.",
              "Among $x \\ge 2$ this leaves $x > 11$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\sqrt{3x + 48} + 2 < x - 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 adds $2$ on the right, where taking $2$ from both sides of line 1 takes it from the right side as well.",
                "reason": "A sign lost: a number taken to the other side changes its sign."
              },
              {
                "step": "Line 2 written right is $\\sqrt{3x + 48} < x - 6$.",
                "reason": "Isolate a root, then square: taking $2$ from both sides leaves the root alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{3x - 5} + 3 \\ge x - 8$, and write that line right.",
              "given": [
                "$\\sqrt{3x - 5} + 3 \\ge x - 8$",
                "The root is defined exactly when $x \\ge \\dfrac{5}{3}$.",
                "$\\sqrt{3x - 5} \\ge x - 5$",
                "For $x < 5$ the right side is negative, so the inequality holds wherever the root is defined: $\\dfrac{5}{3} \\le x < 5$.",
                "For $x \\ge 5$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $3x - 5 \\ge (x - 5)^2$.",
                "$3x - 5 \\ge x^2 - 10x + 25$",
                "$x^2 - 13x + 30 \\le 0$",
                "$(x - 3)(x - 10) \\le 0$",
                "So $3 \\le x \\le 10$.",
                "Among $x \\ge 5$ this leaves $5 \\le x \\le 10$.",
                "Together with $\\dfrac{5}{3} \\le x < 5$: $\\dfrac{5}{3} \\le x \\le 10$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(3*x-5) >= x-11",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{3x - 5} + 3 \\ge x - 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds $3$ on the right, where taking $3$ from both sides of line 1 takes it from the right side as well.",
                  "reason": "A sign lost: a number taken to the other side changes its sign."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{3x - 5} \\ge x - 11$.",
                  "reason": "Isolate a root, then square: taking $3$ from both sides leaves the root alone on the left."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{8x - 7} + 3 \\ge x - 5$, and write that line right.",
              "given": [
                "$\\sqrt{8x - 7} + 3 \\ge x - 5$",
                "$\\sqrt{8x - 7} \\ge x - 2$",
                "The root is defined exactly when $x \\ge \\dfrac{7}{8}$.",
                "For $x < 2$ the right side is negative, so the inequality holds wherever the root is defined: $\\dfrac{7}{8} \\le x < 2$.",
                "For $x \\ge 2$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $8x - 7 \\ge (x - 2)^2$.",
                "$8x - 7 \\ge x^2 - 4x + 4$",
                "$x^2 - 12x + 11 \\le 0$",
                "$(x - 1)(x - 11) \\le 0$",
                "So $1 \\le x \\le 11$.",
                "Among $x \\ge 2$ this leaves $2 \\le x \\le 11$.",
                "Together with $\\dfrac{7}{8} \\le x < 2$: $\\dfrac{7}{8} \\le x \\le 11$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: sqrt(8*x-7) >= x-8",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{8x - 7} + 3 \\ge x - 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds $3$ on the right, where taking $3$ from both sides of line 1 takes it from the right side as well.",
                  "reason": "A sign lost: a number taken to the other side changes its sign."
                },
                {
                  "step": "Line 2 written right is $\\sqrt{8x - 7} \\ge x - 8$.",
                  "reason": "Isolate a root, then square: taking $3$ from both sides leaves the root alone on the left."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{6x + 34} - 5 < x + 4$, and write that line right.",
              "given": [
                "$\\sqrt{6x + 34} - 5 < x + 4$",
                "The root is defined exactly when $x \\ge -\\dfrac{17}{3}$.",
                "$\\sqrt{6x + 34} < x - 1$",
                "For $x < 1$ the right side is negative, so no such $x$ is a solution.",
                "For $x \\ge 1$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $6x + 34 < (x - 1)^2$.",
                "$6x + 34 < x^2 - 2x + 1$",
                "$x^2 - 8x - 33 > 0$",
                "$(x + 3)(x - 11) > 0$",
                "So $x < -3$ or $x > 11$.",
                "Among $x \\ge 1$ this leaves $x > 11$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(6*x+34) < x+9",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{6x + 34} - 5 < x + 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $5$ from the right side, where adding $5$ to both sides of line 1 adds it to the right side as well.",
                  "reason": "A sign lost: a number taken to the other side changes its sign."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{6x + 34} < x + 9$.",
                  "reason": "Isolate a root, then square: adding $5$ to both sides leaves the root alone on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\sqrt{5x + 59} \\ge 5 - x$, and write that line right.",
            "given": [
              "$\\sqrt{5x + 59} \\ge 5 - x$",
              "The root is defined exactly when $x \\ge -\\dfrac{59}{5}$.",
              "For $x > 5$ the right side is negative, so the inequality holds wherever the root is defined: $x > 5$.",
              "For $-\\dfrac{59}{5} \\le x \\le 5$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $5x + 59 \\ge (5 - x)^2$.",
              "$5x + 59 \\ge x^2 - 10x + 25$",
              "$x^2 - 15x - 34 \\le 0$",
              "$(x - 2)(x - 17) \\le 0$",
              "So $2 \\le x \\le 17$.",
              "Among $-\\dfrac{59}{5} \\le x \\le 5$ this leaves $2 \\le x \\le 5$.",
              "Together with $x > 5$: $x \\ge 2$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\sqrt{5x + 59} \\ge 5 - x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 7 writes the brackets $(x - 2)(x - 17)$: the product of $-2$ and $-17$ is $34$, and the constant of line 6 is $-34$.",
                "reason": "A sign lost: the two numbers in the brackets must have the constant of the line before as their product, and here the product has the other sign."
              },
              {
                "step": "Line 7 written right is $(x + 2)(x - 17) \\le 0$.",
                "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{9x + 34} - 3 < 1 - x$, and write that line right.",
              "given": [
                "$\\sqrt{9x + 34} - 3 < 1 - x$",
                "$\\sqrt{9x + 34} < 4 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{34}{9}$.",
                "For $x > 4$ the right side is negative, so no such $x$ is a solution.",
                "For $-\\dfrac{34}{9} \\le x \\le 4$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $9x + 34 < (4 - x)^2$.",
                "$9x + 34 < x^2 - 8x + 16$",
                "$x^2 - 17x - 18 > 0$",
                "$(x - 1)(x - 18) > 0$",
                "So $x < 1$ or $x > 18$.",
                "Among $-\\dfrac{34}{9} \\le x \\le 4$ this leaves $-\\dfrac{34}{9} \\le x < 1$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: (x+1)*(x-18) > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{9x + 34} - 3 < 1 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 writes the brackets $(x - 1)(x - 18)$: the product of $-1$ and $-18$ is $18$, and the constant of line 7 is $-18$.",
                  "reason": "A sign lost: the two numbers in the brackets must have the constant of the line before as their product, and here the product has the other sign."
                },
                {
                  "step": "Line 8 written right is $(x + 1)(x - 18) > 0$.",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{7x + 95} \\le 7 - x$, and write that line right.",
              "given": [
                "$\\sqrt{7x + 95} \\le 7 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{95}{7}$.",
                "For $x > 7$ the right side is negative, so no such $x$ is a solution.",
                "For $-\\dfrac{95}{7} \\le x \\le 7$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $7x + 95 \\le (7 - x)^2$.",
                "$7x + 95 \\le x^2 - 14x + 49$",
                "$x^2 - 21x - 46 \\ge 0$",
                "$(x - 2)(x - 23) \\ge 0$",
                "So $x \\le 2$ or $x \\ge 23$.",
                "Among $-\\dfrac{95}{7} \\le x \\le 7$ this leaves $-\\dfrac{95}{7} \\le x \\le 2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: (x+2)*(x-23) >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{7x + 95} \\le 7 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 writes the brackets $(x - 2)(x - 23)$: the product of $-2$ and $-23$ is $46$, and the constant of line 6 is $-46$.",
                  "reason": "A sign lost: the two numbers in the brackets must have the constant of the line before as their product, and here the product has the other sign."
                },
                {
                  "step": "Line 7 written right is $(x + 2)(x - 23) \\ge 0$.",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{8x + 65} - 3 > 2 - x$, and write that line right.",
              "given": [
                "$\\sqrt{8x + 65} - 3 > 2 - x$",
                "The root is defined exactly when $x \\ge -\\dfrac{65}{8}$.",
                "$\\sqrt{8x + 65} > 5 - x$",
                "For $x > 5$ the right side is negative, so the inequality holds wherever the root is defined: $x > 5$.",
                "For $-\\dfrac{65}{8} \\le x \\le 5$ the root is defined and both sides are nonnegative, so the inequality holds exactly when $8x + 65 > (5 - x)^2$.",
                "$8x + 65 > x^2 - 10x + 25$",
                "$x^2 - 18x - 40 < 0$",
                "$(x - 2)(x - 20) < 0$",
                "So $2 < x < 20$.",
                "Among $-\\dfrac{65}{8} \\le x \\le 5$ this leaves $2 < x \\le 5$.",
                "Together with $x > 5$: $x > 2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: (x+2)*(x-20) < 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\sqrt{8x + 65} - 3 > 2 - x$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 writes the brackets $(x - 2)(x - 20)$: the product of $-2$ and $-20$ is $40$, and the constant of line 7 is $-40$.",
                  "reason": "A sign lost: the two numbers in the brackets must have the constant of the line before as their product, and here the product has the other sign."
                },
                {
                  "step": "Line 8 written right is $(x + 2)(x - 20) < 0$.",
                  "reason": "Factoring a quadratic: multiplying out the two brackets gives the left side of the line before."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t221-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 3 more than 3 times $x$ is greater than 4.",
            "lines": [
              {
                "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 3 more than 3 times $x$ is greater than 4.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{3x + 3} > 4$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "Where the root is defined, this holds exactly when $3x + 3 > 16$.",
                "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $4$ is positive, the square of $\\sqrt{3x + 3}$ is $3x + 3$, and the square of $4$ is $16$."
              },
              {
                "step": "Every $x$ with $3x + 3 > 16$ has $3x + 3 \\ge 0$, so the root is defined for it.",
                "reason": "Transitivity, from arithmetic: $3x + 3 > 16$ and $16 > 0$."
              },
              {
                "step": "$3x + 3 > 16$",
                "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy this inequality."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The number 10 is less than the square root of the number that is 1 less than twice $x$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "100 < 2*x-1",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The number 10 is less than the square root of the number that is 1 less than twice $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10 < \\sqrt{2x - 1}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "Where the root is defined, this holds exactly when $100 < 2x - 1$.",
                  "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $10$ is positive, the square of $\\sqrt{2x - 1}$ is $2x - 1$, and the square of $10$ is $100$."
                },
                {
                  "step": "Every $x$ with $100 < 2x - 1$ has $2x - 1 \\ge 0$, so the root is defined for it.",
                  "reason": "Transitivity, from arithmetic: $2x - 1 > 100$ and $100 > 0$."
                },
                {
                  "step": "$100 < 2x - 1$",
                  "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy this inequality."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number left when 5 times $x$ is taken from 14 is at least 3.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "14-5*x >= 9",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number left when 5 times $x$ is taken from 14 is at least 3.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{14 - 5x} \\ge 3$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "Where the root is defined, this holds exactly when $14 - 5x \\ge 9$.",
                  "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $3$ is positive, the square of $\\sqrt{14 - 5x}$ is $14 - 5x$, and the square of $3$ is $9$."
                },
                {
                  "step": "Every $x$ with $14 - 5x \\ge 9$ has $14 - 5x \\ge 0$, so the root is defined for it.",
                  "reason": "Transitivity, from arithmetic: $14 - 5x \\ge 9$ and $9 > 0$."
                },
                {
                  "step": "$14 - 5x \\ge 9$",
                  "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy this inequality."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 10 less than twice $x$ is greater than 9.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "2*x-10 > 81",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 10 less than twice $x$ is greater than 9.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{2x - 10} > 9$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "Where the root is defined, this holds exactly when $2x - 10 > 81$.",
                  "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $9$ is positive, the square of $\\sqrt{2x - 10}$ is $2x - 10$, and the square of $9$ is $81$."
                },
                {
                  "step": "Every $x$ with $2x - 10 > 81$ has $2x - 10 \\ge 0$, so the root is defined for it.",
                  "reason": "Transitivity, from arithmetic: $2x - 10 > 81$ and $81 > 0$."
                },
                {
                  "step": "$2x - 10 > 81$",
                  "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy this inequality."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 18 more than $x$ is less than 9.",
            "lines": [
              {
                "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 18 more than $x$ is less than 9.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt{x + 18} < 9$",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "The root is defined exactly when $x + 18 \\ge 0$.",
                "reason": "Even root of a negative number is not real: the number under the root is not negative."
              },
              {
                "step": "Where the root is defined, the inequality holds exactly when $x + 18 < 81$.",
                "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $9$ is positive, the square of $\\sqrt{x + 18}$ is $x + 18$, and the square of $9$ is $81$."
              },
              {
                "step": "So $x + 18 \\ge 0$ and $x + 18 < 81$.",
                "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy both conditions."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The number 3 is greater than the square root of the number that is 7 less than 7 times $x$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "7*x-7 >= 0 and 9 > 7*x-7",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The number 3 is greater than the square root of the number that is 7 less than 7 times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 > \\sqrt{7x - 7}$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The root is defined exactly when $7x - 7 \\ge 0$.",
                  "reason": "Even root of a negative number is not real: the number under the root is not negative."
                },
                {
                  "step": "Where the root is defined, the inequality holds exactly when $9 > 7x - 7$.",
                  "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $3$ is positive, the square of $\\sqrt{7x - 7}$ is $7x - 7$, and the square of $3$ is $9$."
                },
                {
                  "step": "So $7x - 7 \\ge 0$ and $9 > 7x - 7$.",
                  "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy both conditions."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number left when $x$ is taken from 4 is at most 11.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "4-x >= 0 and 4-x <= 121",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number left when $x$ is taken from 4 is at most 11.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{4 - x} \\le 11$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The root is defined exactly when $4 - x \\ge 0$.",
                  "reason": "Even root of a negative number is not real: the number under the root is not negative."
                },
                {
                  "step": "Where the root is defined, the inequality holds exactly when $4 - x \\le 121$.",
                  "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $11$ is positive, the square of $\\sqrt{4 - x}$ is $4 - x$, and the square of $11$ is $121$."
                },
                {
                  "step": "So $4 - x \\ge 0$ and $4 - x \\le 121$.",
                  "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy both conditions."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 3 less than twice $x$ is less than 12.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "2*x-3 >= 0 and 2*x-3 < 144",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ with no root, or as two such inequalities joined by and, that holds for exactly the same real numbers $x$: The square root of the number that is 3 less than twice $x$ is less than 12.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt{2x - 3} < 12$",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The root is defined exactly when $2x - 3 \\ge 0$.",
                  "reason": "Even root of a negative number is not real: the number under the root is not negative."
                },
                {
                  "step": "Where the root is defined, the inequality holds exactly when $2x - 3 < 144$.",
                  "reason": "Squaring an inequality of nonnegative sides: a square root is never negative and $12$ is positive, the square of $\\sqrt{2x - 3}$ is $2x - 3$, and the square of $12$ is $144$."
                },
                {
                  "step": "So $2x - 3 \\ge 0$ and $2x - 3 < 144$.",
                  "reason": "Solution of an inequality: the sentence holds for exactly the numbers $x$ that satisfy both conditions."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t221-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$ with $a \\ge 0$ and $b \\ge 0$, $\\sqrt{a + b} \\le \\sqrt{a} + \\sqrt{b}$. Facts it may use: Squaring an inequality of nonnegative sides, positive square root, square of a binomial, the signs of products, adding the same number.",
      "check": {
        "proof": [
          {
            "line": "The numbers $\\sqrt{a + b}$, $\\sqrt{a}$ and $\\sqrt{b}$ are nonnegative.",
            "reason": "Positive square root, from arithmetic: a square root is never negative."
          },
          {
            "line": "So $\\sqrt{a} + \\sqrt{b} \\ge 0$.",
            "reason": "Adding two inequalities, from arithmetic: $\\sqrt{a} \\ge 0$ and $\\sqrt{b} \\ge 0$."
          },
          {
            "line": "Now $(\\sqrt{a} + \\sqrt{b})^2 = a + 2\\sqrt{a}\\sqrt{b} + b$.",
            "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, and the square of a square root is the number under it."
          },
          {
            "line": "Here $2\\sqrt{a}\\sqrt{b} \\ge 0$.",
            "reason": "Signs of products, from arithmetic: a product of numbers that are not negative is not negative."
          },
          {
            "line": "So $a + 2\\sqrt{a}\\sqrt{b} + b \\ge a + b$.",
            "reason": "Adding the same number: $a + b$ is added to both sides of line 4."
          },
          {
            "line": "So $(\\sqrt{a} + \\sqrt{b})^2 \\ge a + b$.",
            "reason": "Substituting a value: by line 3 the left side of line 5 is the square."
          },
          {
            "line": "Also $(\\sqrt{a + b})^2 = a + b$.",
            "reason": "Positive square root, from arithmetic: the square of a square root is the number under it."
          },
          {
            "line": "So $(\\sqrt{a} + \\sqrt{b})^2 \\ge (\\sqrt{a + b})^2$.",
            "reason": "Substituting a value: line 7 is put in line 6."
          },
          {
            "line": "Therefore $\\sqrt{a + b} \\le \\sqrt{a} + \\sqrt{b}$.",
            "reason": "Squaring an inequality of nonnegative sides: both numbers are nonnegative by lines 1 and 2, so their order is the order of their squares."
          }
        ]
      }
    },
    {
      "id": "t221-s2",
      "method": "proof by cases",
      "statement": "Prove that for every real number $x$, $\\sqrt{x^2 + 1} > x$. Facts it may use: Squaring an inequality of nonnegative sides, positive square root, transitivity, adding the same number, the trichotomy of order.",
      "check": {
        "proof": [
          {
            "line": "Either $x < 0$ or $x \\ge 0$.",
            "reason": "Trichotomy of order, from arithmetic: of two numbers, exactly one is greater or the two are equal."
          },
          {
            "line": "In the first case, $\\sqrt{x^2 + 1} \\ge 0$.",
            "reason": "Positive square root, from arithmetic: a square root is never negative."
          },
          {
            "line": "So $\\sqrt{x^2 + 1} > x$ in the first case.",
            "reason": "Transitivity, from arithmetic: $\\sqrt{x^2 + 1} \\ge 0$ and $0 > x$."
          },
          {
            "line": "In the second case, $x^2 + 1 > x^2$.",
            "reason": "Adding the same number: $x^2$ is added to both sides of $1 > 0$."
          },
          {
            "line": "That is, $(\\sqrt{x^2 + 1})^2 > x^2$.",
            "reason": "Positive square root, from arithmetic: the square of a square root is the number under it."
          },
          {
            "line": "So $\\sqrt{x^2 + 1} > x$ in the second case.",
            "reason": "Squaring an inequality of nonnegative sides: $\\sqrt{x^2 + 1} \\ge 0$ and $x \\ge 0$, so the order of the two numbers is the order of their squares."
          },
          {
            "line": "Therefore $\\sqrt{x^2 + 1} > x$ for every real number $x$.",
            "reason": "Proof by cases: the two cases cover every real number, and the inequality holds in each."
          }
        ]
      }
    }
  ]
}
