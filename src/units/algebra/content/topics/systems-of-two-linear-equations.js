export default {
  "number": 114,
  "title": "Systems of two linear equations",
  "section": 3,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "127-136"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve the system $x + 2y = 2$ and $3x - 5y = 17$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(4, -1)",
    "solution": [
      "Solve the system $x + 2y = 2$ and $3x - 5y = 17$.",
      "$x = 2 - 2y$",
      "$3(2 - 2y) - 5y = 17$",
      "$6 - 6y - 5y = 17$",
      "$-11y + 6 = 17$",
      "$-11y = 11$",
      "$y = -1$",
      "$x = 2 - 2(-1)$",
      "$x = 4$",
      "$(4, -1)$"
    ]
  },
  "ideas": [
    {
      "name": "Substitution",
      "concrete": "In the system $x - 2y = 1$ and $3x + y = 17$ the first equation gives $x = 1 + 2y$. Putting $1 + 2y$ in place of $x$ in the second gives $3(1 + 2y) + y = 17$, so $7y = 14$ and $y = 2$. Then $x = 1 + 2(2) = 5$, and the solution is $(5, 2)$.",
      "general": "To solve a system of two linear equations by **substitution**, solve one equation for one letter in terms of the other, and put that expression, in brackets, in place of the letter in the other equation; this leaves a linear equation in one variable. **Back-substitution** puts the value found into the expression for the first letter, which gives its value."
    },
    {
      "name": "Elimination",
      "concrete": "In the system $3x + 2y = 12$ and $5x - 2y = 4$ the terms in $y$ are opposites. Adding the two equations gives $8x = 16$, so $x = 2$. Then $6 + 2y = 12$ gives $y = 3$, and the solution is $(2, 3)$.",
      "general": "**Elimination** adds or subtracts the two equations of a system, after multiplying one or both by nonzero numbers where needed, so that the terms in one letter cancel. Every solution of the system solves the new equation, which is a linear equation in one variable."
    },
    {
      "name": "None, one or infinitely many solutions",
      "concrete": "In the system $x + 2y = 3$ and $2x + 4y = 7$, doubling the first equation gives $2x + 4y = 6$, and subtracting it from the second gives $0 = 1$: no pair solves both. In the system $x + 2y = 3$ and $2x + 4y = 6$ the same steps give $0 = 0$: the two equations have the same solutions, the pairs $(3 - 2t, t)$ for every real number $t$.",
      "general": "A system of two linear equations in two variables has no solution, exactly one solution, or infinitely many solutions. Where elimination leaves an equation that no pair satisfies, such as $0 = 1$, there is none; where it leaves $0 = 0$, the two equations have the same solutions and there are infinitely many. A **parameter** is a letter, such as $t$, that takes every real value; writing each solution in terms of it, as in $(3 - 2t, t)$, gives the **parametric form** of the solution set."
    },
    {
      "name": "The determinant",
      "concrete": "For the system $2x + 3y = 8$ and $x + 4y = 9$ the number $2 \\cdot 4 - 3 \\cdot 1 = 5$ is not $0$, and the system has exactly one solution, $(1, 2)$.",
      "general": "For real numbers $a_1$, $b_1$, $c_1$, $a_2$, $b_2$ and $c_2$, the system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ has **determinant** $a_1b_2 - a_2b_1$. With $a_1b_2 - a_2b_1 \\ne 0$ the system has exactly one solution, $x = \\dfrac{c_1b_2 - b_1c_2}{a_1b_2 - a_2b_1}$ and $y = \\dfrac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}$; with $a_1b_2 - a_2b_1 = 0$ it has no solution or infinitely many."
    }
  ],
  "kinds": [
    {
      "id": "t114-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve the system $4x + y = 13$ and $3x - 2y = -4$.",
            "lines": [
              {
                "step": "Solve the system $4x + y = 13$ and $3x - 2y = -4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y = 13 - 4x$",
                "reason": "Solving for a letter in terms of the others: taking $4x$ from both sides of the first equation leaves $y$ alone."
              },
              {
                "step": "$3x - 2(13 - 4x) = -4$",
                "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the second equation, which leaves a linear equation in $x$ alone."
              },
              {
                "step": "$3x - 26 + 8x = -4$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$11x - 26 = -4$",
                "reason": "Collecting like terms: $8x + 3x = 11x$."
              },
              {
                "step": "$11x = 22$",
                "reason": "Adding the same number to both sides: adding $26$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ leaves $x$ alone."
              },
              {
                "step": "$y = 13 - 4(2)$",
                "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the expression for $y$."
              },
              {
                "step": "$y = 5$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "$(2, 5)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $2x + 3y = 4$ and $x - 4y = 13$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5, -2)",
              "lines": [
                {
                  "step": "Solve the system $2x + 3y = 4$ and $x - 4y = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 13 + 4y$",
                  "reason": "Solving for a letter in terms of the others: adding $4y$ to both sides of the second equation leaves $x$ alone."
                },
                {
                  "step": "$2(13 + 4y) + 3y = 4$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the first equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$26 + 8y + 3y = 4$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$11y + 26 = 4$",
                  "reason": "Collecting like terms: $8y + 3y = 11y$."
                },
                {
                  "step": "$11y = -22$",
                  "reason": "Adding the same number to both sides: adding $-26$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ leaves $y$ alone."
                },
                {
                  "step": "$x = 13 + 4(-2)$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$(5, -2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $x - 3y = -10$ and $-5x + 4y = 17$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, 3)",
              "lines": [
                {
                  "step": "Solve the system $x - 3y = -10$ and $-5x + 4y = 17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -10 + 3y$",
                  "reason": "Solving for a letter in terms of the others: adding $3y$ to both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$-5(-10 + 3y) + 4y = 17$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$50 - 15y + 4y = 17$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-11y + 50 = 17$",
                  "reason": "Collecting like terms: $-15y + 4y = -11y$."
                },
                {
                  "step": "$-11y = -33$",
                  "reason": "Adding the same number to both sides: adding $-50$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ leaves $y$ alone."
                },
                {
                  "step": "$x = -10 + 3(3)$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$(-1, 3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $4x - 2y = 4$ and $-3x + y = -5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, 4)",
              "lines": [
                {
                  "step": "Solve the system $4x - 2y = 4$ and $-3x + y = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y = -5 + 3x$",
                  "reason": "Solving for a letter in terms of the others: adding $3x$ to both sides of the second equation leaves $y$ alone."
                },
                {
                  "step": "$4x - 2(-5 + 3x) = 4$",
                  "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the first equation, which leaves a linear equation in $x$ alone."
                },
                {
                  "step": "$4x + 10 - 6x = 4$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-2x + 10 = 4$",
                  "reason": "Collecting like terms: $-6x + 4x = -2x$."
                },
                {
                  "step": "$-2x = -6$",
                  "reason": "Adding the same number to both sides: adding $-10$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $x$ alone."
                },
                {
                  "step": "$y = -5 + 3(3)$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the expression for $y$."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$(3, 4)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $3x + 2y = 7$ and $4x - 5y = -6$.",
            "lines": [
              {
                "step": "Solve the system $3x + 2y = 7$ and $4x - 5y = -6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x = 7 - 2y$",
                "reason": "Adding the same number to both sides: taking $2y$ from both sides of the first equation leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{7 - 2y}{3}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
              },
              {
                "step": "$4 \\cdot \\dfrac{7 - 2y}{3} - 5y = -6$",
                "reason": "Substitution: the expression for $x$ goes in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
              },
              {
                "step": "$4(7 - 2y) - 15y = -18$",
                "reason": "Clearing fractions: multiplying both sides by $3$, the denominator, keeps them equal and leaves no fraction."
              },
              {
                "step": "$28 - 8y - 15y = -18$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$-23y + 28 = -18$",
                "reason": "Collecting like terms: $-8y - 15y = -23y$."
              },
              {
                "step": "$-23y = -46$",
                "reason": "Adding the same number to both sides: adding $-28$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-23$ leaves $y$ alone."
              },
              {
                "step": "$x = \\dfrac{7 - 2(2)}{3}$",
                "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
              },
              {
                "step": "$x = 1$",
                "reason": "Order of operations: the top is worked out first, the product before the sum, and the fraction is written in lowest terms."
              },
              {
                "step": "$(1, 2)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $2x + 5y = 1$ and $3x - 4y = 13$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, -1)",
              "lines": [
                {
                  "step": "Solve the system $2x + 5y = 1$ and $3x - 4y = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x = 1 - 5y$",
                  "reason": "Adding the same number to both sides: taking $5y$ from both sides of the first equation leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{1 - 5y}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$3 \\cdot \\dfrac{1 - 5y}{2} - 4y = 13$",
                  "reason": "Substitution: the expression for $x$ goes in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$3(1 - 5y) - 8y = 26$",
                  "reason": "Clearing fractions: multiplying both sides by $2$, the denominator, keeps them equal and leaves no fraction."
                },
                {
                  "step": "$3 - 15y - 8y = 26$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-23y + 3 = 26$",
                  "reason": "Collecting like terms: $-15y - 8y = -23y$."
                },
                {
                  "step": "$-23y = 23$",
                  "reason": "Adding the same number to both sides: adding $-3$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-23$ leaves $y$ alone."
                },
                {
                  "step": "$x = \\dfrac{1 - 5(-1)}{2}$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Order of operations: the top is worked out first, the product before the sum, and the fraction is written in lowest terms."
                },
                {
                  "step": "$(3, -1)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $4x + 3y = 11$ and $6x - 5y = -12$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1/2, 3)",
              "lines": [
                {
                  "step": "Solve the system $4x + 3y = 11$ and $6x - 5y = -12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x = 11 - 3y$",
                  "reason": "Adding the same number to both sides: taking $3y$ from both sides of the first equation leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{11 - 3y}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "$6 \\cdot \\dfrac{11 - 3y}{4} - 5y = -12$",
                  "reason": "Substitution: the expression for $x$ goes in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$6(11 - 3y) - 20y = -48$",
                  "reason": "Clearing fractions: multiplying both sides by $4$, the denominator, keeps them equal and leaves no fraction."
                },
                {
                  "step": "$66 - 18y - 20y = -48$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-38y + 66 = -48$",
                  "reason": "Collecting like terms: $-18y - 20y = -38y$."
                },
                {
                  "step": "$-38y = -114$",
                  "reason": "Adding the same number to both sides: adding $-66$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-38$ leaves $y$ alone."
                },
                {
                  "step": "$x = \\dfrac{11 - 3(3)}{4}$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = \\dfrac{1}{2}$",
                  "reason": "Order of operations: the top is worked out first, the product before the sum, and the fraction is written in lowest terms."
                },
                {
                  "step": "$(\\dfrac{1}{2}, 3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $5x - 3y = 19$ and $2x + 7y = -17$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -3)",
              "lines": [
                {
                  "step": "Solve the system $5x - 3y = 19$ and $2x + 7y = -17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7y = -17 - 2x$",
                  "reason": "Adding the same number to both sides: taking $2x$ from both sides of the second equation leaves the term in $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{-17 - 2x}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $y$ alone."
                },
                {
                  "step": "$5x - 3 \\cdot \\dfrac{-17 - 2x}{7} = 19$",
                  "reason": "Substitution: the expression for $y$ goes in place of $y$ in the first equation, which leaves a linear equation in $x$ alone."
                },
                {
                  "step": "$35x - 3(-17 - 2x) = 133$",
                  "reason": "Clearing fractions: multiplying both sides by $7$, the denominator, keeps them equal and leaves no fraction."
                },
                {
                  "step": "$35x + 51 + 6x = 133$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$41x + 51 = 133$",
                  "reason": "Collecting like terms: $6x + 35x = 41x$."
                },
                {
                  "step": "$41x = 82$",
                  "reason": "Adding the same number to both sides: adding $-51$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $41$ leaves $x$ alone."
                },
                {
                  "step": "$y = \\dfrac{-17 - 2(2)}{7}$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the expression for $y$."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Order of operations: the top is worked out first, the product before the sum, and the fraction is written in lowest terms."
                },
                {
                  "step": "$(2, -3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $\\dfrac{x}{2} + y = 4$ and $\\dfrac{x}{4} - \\dfrac{y}{3} = \\dfrac{1}{3}$.",
            "lines": [
              {
                "step": "Solve the system $\\dfrac{x}{2} + y = 4$ and $\\dfrac{x}{4} - \\dfrac{y}{3} = \\dfrac{1}{3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + 2y = 8$",
                "reason": "Clearing fractions: multiplying both sides of the first equation by $2$, the lowest common denominator, leaves whole-number coefficients."
              },
              {
                "step": "$3x - 4y = 4$",
                "reason": "Clearing fractions: multiplying both sides of the second equation by $12$, the lowest common denominator, leaves whole-number coefficients."
              },
              {
                "step": "$x = 8 - 2y$",
                "reason": "Solving for a letter in terms of the others: taking $2y$ from both sides of the first equation leaves $x$ alone."
              },
              {
                "step": "$3(8 - 2y) - 4y = 4$",
                "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
              },
              {
                "step": "$24 - 6y - 4y = 4$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$-10y + 24 = 4$",
                "reason": "Collecting like terms: $-6y - 4y = -10y$."
              },
              {
                "step": "$-10y = -20$",
                "reason": "Adding the same number to both sides: adding $-24$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-10$ leaves $y$ alone."
              },
              {
                "step": "$x = 8 - 2(2)$",
                "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
              },
              {
                "step": "$x = 4$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "$(4, 2)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $0.2x + 0.5y = 1.6$ and $-0.3x + 0.1y = -0.7$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, 2)",
              "lines": [
                {
                  "step": "Solve the system $0.2x + 0.5y = 1.6$ and $-0.3x + 0.1y = -0.7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 5y = 16$",
                  "reason": "Clearing fractions: multiplying both sides of the first equation by $10$ turns each decimal into a whole number."
                },
                {
                  "step": "$-3x + y = -7$",
                  "reason": "Clearing fractions: multiplying both sides of the second equation by $10$ turns each decimal into a whole number."
                },
                {
                  "step": "$y = -7 + 3x$",
                  "reason": "Solving for a letter in terms of the others: adding $3x$ to both sides of the second equation leaves $y$ alone."
                },
                {
                  "step": "$2x + 5(-7 + 3x) = 16$",
                  "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the first equation, which leaves a linear equation in $x$ alone."
                },
                {
                  "step": "$2x - 35 + 15x = 16$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$17x - 35 = 16$",
                  "reason": "Collecting like terms: $15x + 2x = 17x$."
                },
                {
                  "step": "$17x = 51$",
                  "reason": "Adding the same number to both sides: adding $35$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $17$ leaves $x$ alone."
                },
                {
                  "step": "$y = -7 + 3(3)$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the expression for $y$."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$(3, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{x}{3} + \\dfrac{y}{2} = 3$ and $\\dfrac{x}{5} - y = -\\dfrac{4}{5}$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(6, 2)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{x}{3} + \\dfrac{y}{2} = 3$ and $\\dfrac{x}{5} - y = -\\dfrac{4}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 3y = 18$",
                  "reason": "Clearing fractions: multiplying both sides of the first equation by $6$, the lowest common denominator, leaves whole-number coefficients."
                },
                {
                  "step": "$x - 5y = -4$",
                  "reason": "Clearing fractions: multiplying both sides of the second equation by $5$, the lowest common denominator, leaves whole-number coefficients."
                },
                {
                  "step": "$x = -4 + 5y$",
                  "reason": "Solving for a letter in terms of the others: adding $5y$ to both sides of the second equation leaves $x$ alone."
                },
                {
                  "step": "$2(-4 + 5y) + 3y = 18$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the first equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$-8 + 10y + 3y = 18$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$13y - 8 = 18$",
                  "reason": "Collecting like terms: $10y + 3y = 13y$."
                },
                {
                  "step": "$13y = 26$",
                  "reason": "Adding the same number to both sides: adding $8$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $13$ leaves $y$ alone."
                },
                {
                  "step": "$x = -4 + 5(2)$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$(6, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $0.5x + 0.2y = 0.1$ and $0.04x + 0.01y = 0.05$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, -7)",
              "lines": [
                {
                  "step": "Solve the system $0.5x + 0.2y = 0.1$ and $0.04x + 0.01y = 0.05$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 2y = 1$",
                  "reason": "Clearing fractions: multiplying both sides of the first equation by $10$ turns each decimal into a whole number."
                },
                {
                  "step": "$4x + y = 5$",
                  "reason": "Clearing fractions: multiplying both sides of the second equation by $100$ turns each decimal into a whole number."
                },
                {
                  "step": "$y = 5 - 4x$",
                  "reason": "Solving for a letter in terms of the others: taking $4x$ from both sides of the second equation leaves $y$ alone."
                },
                {
                  "step": "$5x + 2(5 - 4x) = 1$",
                  "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the first equation, which leaves a linear equation in $x$ alone."
                },
                {
                  "step": "$5x + 10 - 8x = 1$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-3x + 10 = 1$",
                  "reason": "Collecting like terms: $-8x + 5x = -3x$."
                },
                {
                  "step": "$-3x = -9$",
                  "reason": "Adding the same number to both sides: adding $-10$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ leaves $x$ alone."
                },
                {
                  "step": "$y = 5 - 4(3)$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the expression for $y$."
                },
                {
                  "step": "$y = -7$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$(3, -7)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t114-k2",
      "forms": [
        {
          "example": {
            "problem": "Express $y$ in terms of $x$, where $x = 5 + 2t$ and $y = 1 - 3t$.",
            "lines": [
              {
                "step": "Express $y$ in terms of $x$, where $x = 5 + 2t$ and $y = 1 - 3t$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x - 5 = 2t$",
                "reason": "Adding the same number to both sides: adding $-5$ to both sides of the equation for $x$ leaves the term in $t$ alone."
              },
              {
                "step": "$t = \\dfrac{x - 5}{2}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $t$ alone, and the symmetric property writes it on the left."
              },
              {
                "step": "$y = 1 - 3 \\cdot \\dfrac{x - 5}{2}$",
                "reason": "Substitution: the expression for the parameter $t$ goes in place of $t$ in the equation for $y$, which leaves $y$ in terms of $x$ alone."
              },
              {
                "step": "$y = 1 - \\dfrac{3x}{2} + \\dfrac{15}{2}$",
                "reason": "Multiplying out: the number in front of the fraction multiplies each term of its top."
              },
              {
                "step": "$y = -\\dfrac{3x}{2} + \\dfrac{17}{2}$",
                "reason": "Collecting like terms: $1 + \\dfrac{15}{2} = \\dfrac{17}{2}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Express $y$ in terms of $x$, where $x = 3 + 4t$ and $y = 2 + 6t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = 3*x/2-5/2",
              "lines": [
                {
                  "step": "Express $y$ in terms of $x$, where $x = 3 + 4t$ and $y = 2 + 6t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x - 3 = 4t$",
                  "reason": "Adding the same number to both sides: adding $-3$ to both sides of the equation for $x$ leaves the term in $t$ alone."
                },
                {
                  "step": "$t = \\dfrac{x - 3}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $t$ alone, and the symmetric property writes it on the left."
                },
                {
                  "step": "$y = 2 + 6 \\cdot \\dfrac{x - 3}{4}$",
                  "reason": "Substitution: the expression for the parameter $t$ goes in place of $t$ in the equation for $y$, which leaves $y$ in terms of $x$ alone."
                },
                {
                  "step": "$y = 2 + \\dfrac{3x}{2} - \\dfrac{9}{2}$",
                  "reason": "Multiplying out: the number in front of the fraction multiplies each term of its top."
                },
                {
                  "step": "$y = \\dfrac{3x}{2} - \\dfrac{5}{2}$",
                  "reason": "Collecting like terms: $2 - \\dfrac{9}{2} = -\\dfrac{5}{2}$."
                }
              ]
            },
            {
              "prompt": "Express $x$ in terms of $y$, where $x = -2 + 5t$ and $y = 4 + 3t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = 5*y/3-26/3",
              "lines": [
                {
                  "step": "Express $x$ in terms of $y$, where $x = -2 + 5t$ and $y = 4 + 3t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y - 4 = 3t$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides of the equation for $y$ leaves the term in $t$ alone."
                },
                {
                  "step": "$t = \\dfrac{y - 4}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $t$ alone, and the symmetric property writes it on the left."
                },
                {
                  "step": "$x = -2 + 5 \\cdot \\dfrac{y - 4}{3}$",
                  "reason": "Substitution: the expression for the parameter $t$ goes in place of $t$ in the equation for $x$, which leaves $x$ in terms of $y$ alone."
                },
                {
                  "step": "$x = -2 + \\dfrac{5y}{3} - \\dfrac{20}{3}$",
                  "reason": "Multiplying out: the number in front of the fraction multiplies each term of its top."
                },
                {
                  "step": "$x = \\dfrac{5y}{3} - \\dfrac{26}{3}$",
                  "reason": "Collecting like terms: $-2 - \\dfrac{20}{3} = -\\dfrac{26}{3}$."
                }
              ]
            },
            {
              "prompt": "Express $y$ in terms of $x$, where $x = -1 + 2t$ and $y = 7 - 4t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -2*x+5",
              "lines": [
                {
                  "step": "Express $y$ in terms of $x$, where $x = -1 + 2t$ and $y = 7 - 4t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 1 = 2t$",
                  "reason": "Adding the same number to both sides: adding $1$ to both sides of the equation for $x$ leaves the term in $t$ alone."
                },
                {
                  "step": "$t = \\dfrac{x + 1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $t$ alone, and the symmetric property writes it on the left."
                },
                {
                  "step": "$y = 7 - 4 \\cdot \\dfrac{x + 1}{2}$",
                  "reason": "Substitution: the expression for the parameter $t$ goes in place of $t$ in the equation for $y$, which leaves $y$ in terms of $x$ alone."
                },
                {
                  "step": "$y = 7 - 2x - 2$",
                  "reason": "Multiplying out: the number in front of the fraction multiplies each term of its top."
                },
                {
                  "step": "$y = -2x + 5$",
                  "reason": "Collecting like terms: $7 - 2 = 5$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t114-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve the system $4x + 3y = 9$ and $2x - 3y = 9$.",
            "lines": [
              {
                "step": "Solve the system $4x + 3y = 9$ and $2x - 3y = 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x = 18$",
                "reason": "Elimination: adding the two equations cancels the terms in $y$, since $3y - 3y = 0$."
              },
              {
                "step": "$x = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
              },
              {
                "step": "$4(3) + 3y = 9$",
                "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
              },
              {
                "step": "$12 + 3y = 9$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "$3y = -3$",
                "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = -1$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
              },
              {
                "step": "$(3, -1)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $5x + 2y = 2$ and $3x + 2y = -2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -4)",
              "lines": [
                {
                  "step": "Solve the system $5x + 2y = 2$ and $3x + 2y = -2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x = 4$",
                  "reason": "Elimination: subtracting the second equation from the first cancels the terms in $y$, since $2y - 2y = 0$."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$5(2) + 2y = 2$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
                },
                {
                  "step": "$10 + 2y = 2$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$2y = -8$",
                  "reason": "Adding the same number to both sides: adding $-10$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "$(2, -4)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $3x - 4y = -11$ and $-3x + 7y = 17$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, 2)",
              "lines": [
                {
                  "step": "Solve the system $3x - 4y = -11$ and $-3x + 7y = 17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3y = 6$",
                  "reason": "Elimination: adding the two equations cancels the terms in $x$, since $3x - 3x = 0$."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
                },
                {
                  "step": "$3x - 4(2) = -11$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$3x - 8 = -11$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$3x = -3$",
                  "reason": "Adding the same number to both sides: adding $8$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "$(-1, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $2x + 5y = 13$ and $2x - 3y = 5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, 1)",
              "lines": [
                {
                  "step": "Solve the system $2x + 5y = 13$ and $2x - 3y = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8y = 8$",
                  "reason": "Elimination: subtracting the second equation from the first cancels the terms in $x$, since $2x - 2x = 0$."
                },
                {
                  "step": "$y = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $y$ alone."
                },
                {
                  "step": "$2x + 5(1) = 13$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$2x + 5 = 13$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$2x = 8$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$(4, 1)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $3x + 4y = 8$ and $x - 2y = 6$.",
            "lines": [
              {
                "step": "Solve the system $3x + 4y = 8$ and $x - 2y = 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x - 4y = 12$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $2$ makes its term in $y$ the opposite of the term in the first equation."
              },
              {
                "step": "$5x = 20$",
                "reason": "Elimination: adding the two equations cancels the terms in $y$, since $4y - 4y = 0$."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
              },
              {
                "step": "$3(4) + 4y = 8$",
                "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
              },
              {
                "step": "$12 + 4y = 8$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "$4y = -4$",
                "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = -1$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
              },
              {
                "step": "$(4, -1)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $5x - 3y = -4$ and $2x + y = 5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, 3)",
              "lines": [
                {
                  "step": "Solve the system $5x - 3y = -4$ and $2x + y = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x + 3y = 15$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $3$ makes its term in $y$ the opposite of the term in the first equation."
                },
                {
                  "step": "$11x = 11$",
                  "reason": "Elimination: adding the two equations cancels the terms in $y$, since $-3y + 3y = 0$."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ leaves $x$ alone."
                },
                {
                  "step": "$5(1) - 3y = -4$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
                },
                {
                  "step": "$5 - 3y = -4$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$-3y = -9$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ leaves $y$ alone."
                },
                {
                  "step": "$(1, 3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $2x + 3y = 2$ and $4x - 5y = -18$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-2, 2)",
              "lines": [
                {
                  "step": "Solve the system $2x + 3y = 2$ and $4x - 5y = -18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4x - 6y = -4$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $-2$ makes its term in $x$ the opposite of the term in the second equation."
                },
                {
                  "step": "$-11y = -22$",
                  "reason": "Elimination: adding the two equations cancels the terms in $x$, since $-4x + 4x = 0$."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ leaves $y$ alone."
                },
                {
                  "step": "$2x + 3(2) = 2$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$2x + 6 = 2$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$2x = -4$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$(-2, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $6x + 7y = 22$ and $3x + 2y = 5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, 4)",
              "lines": [
                {
                  "step": "Solve the system $6x + 7y = 22$ and $3x + 2y = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x - 4y = -10$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $-2$ makes its term in $x$ the opposite of the term in the first equation."
                },
                {
                  "step": "$3y = 12$",
                  "reason": "Elimination: adding the two equations cancels the terms in $x$, since $6x - 6x = 0$."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
                },
                {
                  "step": "$6x + 7(4) = 22$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$6x + 28 = 22$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$6x = -6$",
                  "reason": "Adding the same number to both sides: adding $-28$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "$(-1, 4)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $3x + 4y = 6$ and $2x - 3y = -13$.",
            "lines": [
              {
                "step": "Solve the system $3x + 4y = 6$ and $2x - 3y = -13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$9x + 12y = 18$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $3$ makes its term in $y$ equal to $12y$."
              },
              {
                "step": "$8x - 12y = -52$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $4$ makes its term in $y$ the opposite of that."
              },
              {
                "step": "$17x = -34$",
                "reason": "Elimination: adding the two equations cancels the terms in $y$, since $12y - 12y = 0$."
              },
              {
                "step": "$x = -2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $17$ leaves $x$ alone."
              },
              {
                "step": "$3(-2) + 4y = 6$",
                "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
              },
              {
                "step": "$-6 + 4y = 6$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "$4y = 12$",
                "reason": "Adding the same number to both sides: adding $6$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
              },
              {
                "step": "$(-2, 3)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $5x + 3y = 11$ and $2x + 7y = 16$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, 2)",
              "lines": [
                {
                  "step": "Solve the system $5x + 3y = 11$ and $2x + 7y = 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10x + 6y = 22$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ makes its term in $x$ equal to $10x$."
                },
                {
                  "step": "$-10x - 35y = -80$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $-5$ makes its term in $x$ the opposite of that."
                },
                {
                  "step": "$-29y = -58$",
                  "reason": "Elimination: adding the two equations cancels the terms in $x$, since $10x - 10x = 0$."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-29$ leaves $y$ alone."
                },
                {
                  "step": "$5x + 3(2) = 11$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$5x + 6 = 11$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$5x = 5$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "$(1, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $4x - 3y = 6$ and $6x + 5y = 28$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, 2)",
              "lines": [
                {
                  "step": "Solve the system $4x - 3y = 6$ and $6x + 5y = 28$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12x - 9y = 18$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $3$ makes its term in $x$ equal to $12x$."
                },
                {
                  "step": "$-12x - 10y = -56$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $-2$ makes its term in $x$ the opposite of that."
                },
                {
                  "step": "$-19y = -38$",
                  "reason": "Elimination: adding the two equations cancels the terms in $x$, since $12x - 12x = 0$."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-19$ leaves $y$ alone."
                },
                {
                  "step": "$4x - 3(2) = 6$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$4x - 6 = 6$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$4x = 12$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "$(3, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $7x + 2y = 1$ and $3x - 5y = 18$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, -3)",
              "lines": [
                {
                  "step": "Solve the system $7x + 2y = 1$ and $3x - 5y = 18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$35x + 10y = 5$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $5$ makes its term in $y$ equal to $10y$."
                },
                {
                  "step": "$6x - 10y = 36$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $2$ makes its term in $y$ the opposite of that."
                },
                {
                  "step": "$41x = 41$",
                  "reason": "Elimination: adding the two equations cancels the terms in $y$, since $10y - 10y = 0$."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $41$ leaves $x$ alone."
                },
                {
                  "step": "$7(1) + 2y = 1$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
                },
                {
                  "step": "$7 + 2y = 1$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$2y = -6$",
                  "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "$(1, -3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $7x = 2y + 8$ and $4y = 18 - 3x$.",
            "lines": [
              {
                "step": "Solve the system $7x = 2y + 8$ and $4y = 18 - 3x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7x - 2y = 8$",
                "reason": "Adding the same number to both sides: taking $2y$ from both sides of the first equation puts both letters on the left."
              },
              {
                "step": "$3x + 4y = 18$",
                "reason": "Adding the same number to both sides: adding $3x$ to both sides of the second equation puts both letters on the left, the term in $x$ first."
              },
              {
                "step": "$14x - 4y = 16$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ makes its term in $y$ the opposite of the term in the second equation."
              },
              {
                "step": "$17x = 34$",
                "reason": "Elimination: adding the two equations cancels the terms in $y$, since $-4y + 4y = 0$."
              },
              {
                "step": "$x = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $17$ leaves $x$ alone."
              },
              {
                "step": "$7(2) - 2y = 8$",
                "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
              },
              {
                "step": "$14 - 2y = 8$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "$-2y = -6$",
                "reason": "Adding the same number to both sides: adding $-14$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $y$ alone."
              },
              {
                "step": "$(2, 3)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $3x = 5y + 7$ and $y = -4 - 2x$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, -2)",
              "lines": [
                {
                  "step": "Solve the system $3x = 5y + 7$ and $y = -4 - 2x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x - 5y = 7$",
                  "reason": "Adding the same number to both sides: taking $5y$ from both sides of the first equation puts both letters on the left."
                },
                {
                  "step": "$2x + y = -4$",
                  "reason": "Adding the same number to both sides: adding $2x$ to both sides of the second equation puts both letters on the left, the term in $x$ first."
                },
                {
                  "step": "$10x + 5y = -20$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $5$ makes its term in $y$ the opposite of the term in the first equation."
                },
                {
                  "step": "$13x = -13$",
                  "reason": "Elimination: adding the two equations cancels the terms in $y$, since $-5y + 5y = 0$."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $13$ leaves $x$ alone."
                },
                {
                  "step": "$3(-1) - 5y = 7$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
                },
                {
                  "step": "$-3 - 5y = 7$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$-5y = 10$",
                  "reason": "Adding the same number to both sides: adding $3$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $y$ alone."
                },
                {
                  "step": "$(-1, -2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $4x = -3y + 10$ and $-5y = -2 - 8x$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, 2)",
              "lines": [
                {
                  "step": "Solve the system $4x = -3y + 10$ and $-5y = -2 - 8x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 3y = 10$",
                  "reason": "Adding the same number to both sides: adding $3y$ to both sides of the first equation puts both letters on the left."
                },
                {
                  "step": "$8x - 5y = -2$",
                  "reason": "Adding the same number to both sides: adding $8x$ to both sides of the second equation puts both letters on the left, the term in $x$ first."
                },
                {
                  "step": "$-8x - 6y = -20$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $-2$ makes its term in $x$ the opposite of the term in the second equation."
                },
                {
                  "step": "$-11y = -22$",
                  "reason": "Elimination: adding the two equations cancels the terms in $x$, since $-8x + 8x = 0$."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ leaves $y$ alone."
                },
                {
                  "step": "$4x + 3(2) = 10$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the first equation."
                },
                {
                  "step": "$4x + 6 = 10$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$4x = 4$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "$(1, 2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $2x = 3y - 2$ and $6y = 29 - x$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5, 4)",
              "lines": [
                {
                  "step": "Solve the system $2x = 3y - 2$ and $6y = 29 - x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x - 3y = -2$",
                  "reason": "Adding the same number to both sides: taking $3y$ from both sides of the first equation puts both letters on the left."
                },
                {
                  "step": "$x + 6y = 29$",
                  "reason": "Adding the same number to both sides: adding $x$ to both sides of the second equation puts both letters on the left, the term in $x$ first."
                },
                {
                  "step": "$4x - 6y = -4$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ makes its term in $y$ the opposite of the term in the second equation."
                },
                {
                  "step": "$5x = 25$",
                  "reason": "Elimination: adding the two equations cancels the terms in $y$, since $-6y + 6y = 0$."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "$2(5) - 3y = -2$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation."
                },
                {
                  "step": "$10 - 3y = -2$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "$-3y = -12$",
                  "reason": "Adding the same number to both sides: adding $-10$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ leaves $y$ alone."
                },
                {
                  "step": "$(5, 4)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t114-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the system $2x + 3y = 4$ and $6x + 9y = 10$ has one solution, none or infinitely many.",
            "lines": [
              {
                "step": "Decide whether the system $2x + 3y = 4$ and $6x + 9y = 10$ has one solution, none or infinitely many.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x + 9y = 12$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $3$ gives it the same term in $x$ as the second."
              },
              {
                "step": "$0 = 2$",
                "reason": "Elimination: subtracting the second equation from this one cancels the terms in $x$."
              },
              {
                "step": "None",
                "reason": "A system has none, one, or infinitely many solutions: no pair makes $0 = 2$ true, and every solution of the system would, so there is none."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the system $x - 4y = 3$ and $-2x + 8y = -6$ has one solution, none or infinitely many.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "Infinitely many",
              "lines": [
                {
                  "step": "Decide whether the system $x - 4y = 3$ and $-2x + 8y = -6$ has one solution, none or infinitely many.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x + 8y = -6$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $-2$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$0 = 0$",
                  "reason": "Elimination: subtracting the second equation from this one cancels the terms in $x$."
                },
                {
                  "step": "Infinitely many",
                  "reason": "A system has none, one, or infinitely many solutions: $0 = 0$ holds for every pair, the second equation is the first multiplied by $-2$, and the two share their infinitely many solutions."
                }
              ]
            },
            {
              "prompt": "Decide whether the system $3x + 2y = 5$ and $6x + 5y = 7$ has one solution, none or infinitely many.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Decide whether the system $3x + 2y = 5$ and $6x + 5y = 7$ has one solution, none or infinitely many.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x + 4y = 10$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$-y = 3$",
                  "reason": "Elimination: subtracting the second equation from this one cancels the terms in $x$."
                },
                {
                  "step": "One",
                  "reason": "A system has none, one, or infinitely many solutions: $-y = 3$ gives one value of $y$, and back-substitution gives one value of $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether the system $5x - y = 2$ and $10x - 2y = 7$ has one solution, none or infinitely many.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Decide whether the system $5x - y = 2$ and $10x - 2y = 7$ has one solution, none or infinitely many.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10x - 2y = 4$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$0 = -3$",
                  "reason": "Elimination: subtracting the second equation from this one cancels the terms in $x$."
                },
                {
                  "step": "None",
                  "reason": "A system has none, one, or infinitely many solutions: no pair makes $0 = -3$ true, and every solution of the system would, so there is none."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the solutions of the system $2x + 5y = 9$ and $4x + 10y = 18$ in parametric form with $x = t$, and answer with $y$ in terms of $t$.",
            "lines": [
              {
                "step": "Write the solutions of the system $2x + 5y = 9$ and $4x + 10y = 18$ in parametric form with $x = t$, and answer with $y$ in terms of $t$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x + 5y = 9$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides of the second equation by $2$ gives the first equation."
              },
              {
                "step": "The system has infinitely many solutions, the solutions of $2x + 5y = 9$.",
                "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many, those of one equation alone."
              },
              {
                "step": "$2t + 5y = 9$",
                "reason": "Parametric form of a solution set: the parameter $t$ takes the place of $x$, and each real value of $t$ gives one solution."
              },
              {
                "step": "$5y = 9 - 2t$",
                "reason": "Adding the same number to both sides: taking $2t$ from both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = \\dfrac{9 - 2t}{5}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the solutions of the system $5x + 2y = 4$ and $-15x - 6y = -12$ in parametric form with $x = t$, and answer with $y$ in terms of $t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (4-5*t)/2",
              "lines": [
                {
                  "step": "Write the solutions of the system $5x + 2y = 4$ and $-15x - 6y = -12$ in parametric form with $x = t$, and answer with $y$ in terms of $t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 2y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides of the second equation by $-3$ gives the first equation."
                },
                {
                  "step": "The system has infinitely many solutions, the solutions of $5x + 2y = 4$.",
                  "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many, those of one equation alone."
                },
                {
                  "step": "$5t + 2y = 4$",
                  "reason": "Parametric form of a solution set: the parameter $t$ takes the place of $x$, and each real value of $t$ gives one solution."
                },
                {
                  "step": "$2y = 4 - 5t$",
                  "reason": "Adding the same number to both sides: taking $5t$ from both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{4 - 5t}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Write the solutions of the system $3x + 4y = 1$ and $9x + 12y = 3$ in parametric form with $y = t$, and answer with $x$ in terms of $t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (1-4*t)/3",
              "lines": [
                {
                  "step": "Write the solutions of the system $3x + 4y = 1$ and $9x + 12y = 3$ in parametric form with $y = t$, and answer with $x$ in terms of $t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x + 4y = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides of the second equation by $3$ gives the first equation."
                },
                {
                  "step": "The system has infinitely many solutions, the solutions of $3x + 4y = 1$.",
                  "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many, those of one equation alone."
                },
                {
                  "step": "$3x + 4t = 1$",
                  "reason": "Parametric form of a solution set: the parameter $t$ takes the place of $y$, and each real value of $t$ gives one solution."
                },
                {
                  "step": "$3x = 1 - 4t$",
                  "reason": "Adding the same number to both sides: taking $4t$ from both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{1 - 4t}{3}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Write the solutions of the system $-3x + 4y = 6$ and $6x - 8y = -12$ in parametric form with $x = t$, and answer with $y$ in terms of $t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = (6+3*t)/4",
              "lines": [
                {
                  "step": "Write the solutions of the system $-3x + 4y = 6$ and $6x - 8y = -12$ in parametric form with $x = t$, and answer with $y$ in terms of $t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x + 4y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides of the second equation by $-2$ gives the first equation."
                },
                {
                  "step": "The system has infinitely many solutions, the solutions of $-3x + 4y = 6$.",
                  "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many, those of one equation alone."
                },
                {
                  "step": "$-3t + 4y = 6$",
                  "reason": "Parametric form of a solution set: the parameter $t$ takes the place of $x$, and each real value of $t$ gives one solution."
                },
                {
                  "step": "$4y = 6 + 3t$",
                  "reason": "Adding the same number to both sides: adding $3t$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = \\dfrac{6 + 3t}{4}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant $a$ for which the system $5x - 3y = 4$ and $10x + ay = 3$ has no solution.",
            "lines": [
              {
                "step": "Find the constant $a$ for which the system $5x - 3y = 4$ and $10x + ay = 3$ has no solution.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$10x - 6y = 8$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ gives it the same term in $x$ as the second."
              },
              {
                "step": "$(a + 6)y = -5$",
                "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
              },
              {
                "step": "With $a + 6 \\ne 0$ the line gives one value of $y$, so the system has one solution.",
                "reason": "A system has none, one, or infinitely many solutions: one value of $y$, and back-substitution gives one value of $x$."
              },
              {
                "step": "With $a + 6 = 0$ the line reads $0 = -5$, so the system has no solution.",
                "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation such as $0 = -5$ that the system gives."
              },
              {
                "step": "So $a + 6 = 0$.",
                "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives none."
              },
              {
                "step": "$a = -6$",
                "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves $a$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant $a$ for which the system $3x + 4y = 2$ and $9x + ay = 5$ has no solution.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 12",
              "lines": [
                {
                  "step": "Find the constant $a$ for which the system $3x + 4y = 2$ and $9x + ay = 5$ has no solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x + 12y = 6$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $3$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$(a - 12)y = -1$",
                  "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
                },
                {
                  "step": "With $a - 12 \\ne 0$ the line gives one value of $y$, so the system has one solution.",
                  "reason": "A system has none, one, or infinitely many solutions: one value of $y$, and back-substitution gives one value of $x$."
                },
                {
                  "step": "With $a - 12 = 0$ the line reads $0 = -1$, so the system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation such as $0 = -1$ that the system gives."
                },
                {
                  "step": "So $a - 12 = 0$.",
                  "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives none."
                },
                {
                  "step": "$a = 12$",
                  "reason": "Adding the same number to both sides: adding $12$ to both sides leaves $a$ alone."
                }
              ]
            },
            {
              "prompt": "Find the constant $a$ for which the system $4x + 7y = 1$ and $-8x + ay = 3$ has no solution.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -14",
              "lines": [
                {
                  "step": "Find the constant $a$ for which the system $4x + 7y = 1$ and $-8x + ay = 3$ has no solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8x - 14y = -2$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $-2$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$(a + 14)y = 5$",
                  "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
                },
                {
                  "step": "With $a + 14 \\ne 0$ the line gives one value of $y$, so the system has one solution.",
                  "reason": "A system has none, one, or infinitely many solutions: one value of $y$, and back-substitution gives one value of $x$."
                },
                {
                  "step": "With $a + 14 = 0$ the line reads $0 = 5$, so the system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation such as $0 = 5$ that the system gives."
                },
                {
                  "step": "So $a + 14 = 0$.",
                  "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives none."
                },
                {
                  "step": "$a = -14$",
                  "reason": "Adding the same number to both sides: adding $-14$ to both sides leaves $a$ alone."
                }
              ]
            },
            {
              "prompt": "Find the constant $a$ for which the system $2x + 5y = -1$ and $-6x + ay = 4$ has no solution.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -15",
              "lines": [
                {
                  "step": "Find the constant $a$ for which the system $2x + 5y = -1$ and $-6x + ay = 4$ has no solution.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x - 15y = 3$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $-3$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$(a + 15)y = 1$",
                  "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
                },
                {
                  "step": "With $a + 15 \\ne 0$ the line gives one value of $y$, so the system has one solution.",
                  "reason": "A system has none, one, or infinitely many solutions: one value of $y$, and back-substitution gives one value of $x$."
                },
                {
                  "step": "With $a + 15 = 0$ the line reads $0 = 1$, so the system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation such as $0 = 1$ that the system gives."
                },
                {
                  "step": "So $a + 15 = 0$.",
                  "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives none."
                },
                {
                  "step": "$a = -15$",
                  "reason": "Adding the same number to both sides: adding $-15$ to both sides leaves $a$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant $c$ for which the system $4x - 5y = 3$ and $8x - 10y = c$ has infinitely many solutions.",
            "lines": [
              {
                "step": "Find the constant $c$ for which the system $4x - 5y = 3$ and $8x - 10y = c$ has infinitely many solutions.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$8x - 10y = 6$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $2$ gives it the same term in $x$ as the second."
              },
              {
                "step": "$0 = c - 6$",
                "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
              },
              {
                "step": "With $c - 6 \\ne 0$ no pair makes the line true, so the system has no solution.",
                "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation $0 = $ a nonzero number that the system gives."
              },
              {
                "step": "With $c - 6 = 0$ the second equation is the first multiplied by $2$, so the system has infinitely many solutions.",
                "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many."
              },
              {
                "step": "So $c - 6 = 0$.",
                "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives infinitely many."
              },
              {
                "step": "$c = 6$",
                "reason": "Adding the same number to both sides: adding $6$ to both sides leaves $c$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant $c$ for which the system $x - 3y = 4$ and $5x - 15y = c$ has infinitely many solutions.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 20",
              "lines": [
                {
                  "step": "Find the constant $c$ for which the system $x - 3y = 4$ and $5x - 15y = c$ has infinitely many solutions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 15y = 20$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $5$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$0 = c - 20$",
                  "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
                },
                {
                  "step": "With $c - 20 \\ne 0$ no pair makes the line true, so the system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation $0 = $ a nonzero number that the system gives."
                },
                {
                  "step": "With $c - 20 = 0$ the second equation is the first multiplied by $5$, so the system has infinitely many solutions.",
                  "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many."
                },
                {
                  "step": "So $c - 20 = 0$.",
                  "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives infinitely many."
                },
                {
                  "step": "$c = 20$",
                  "reason": "Adding the same number to both sides: adding $20$ to both sides leaves $c$ alone."
                }
              ]
            },
            {
              "prompt": "Find the constant $c$ for which the system $3x + 5y = -2$ and $-6x - 10y = c$ has infinitely many solutions.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 4",
              "lines": [
                {
                  "step": "Find the constant $c$ for which the system $3x + 5y = -2$ and $-6x - 10y = c$ has infinitely many solutions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x - 10y = 4$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $-2$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$0 = c - 4$",
                  "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
                },
                {
                  "step": "With $c - 4 \\ne 0$ no pair makes the line true, so the system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation $0 = $ a nonzero number that the system gives."
                },
                {
                  "step": "With $c - 4 = 0$ the second equation is the first multiplied by $-2$, so the system has infinitely many solutions.",
                  "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many."
                },
                {
                  "step": "So $c - 4 = 0$.",
                  "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives infinitely many."
                },
                {
                  "step": "$c = 4$",
                  "reason": "Adding the same number to both sides: adding $4$ to both sides leaves $c$ alone."
                }
              ]
            },
            {
              "prompt": "Find the constant $c$ for which the system $2x + 9y = -3$ and $6x + 27y = c$ has infinitely many solutions.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = -9",
              "lines": [
                {
                  "step": "Find the constant $c$ for which the system $2x + 9y = -3$ and $6x + 27y = c$ has infinitely many solutions.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x + 27y = -9$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation by $3$ gives it the same term in $x$ as the second."
                },
                {
                  "step": "$0 = c + 9$",
                  "reason": "Elimination: subtracting this equation from the second cancels the terms in $x$."
                },
                {
                  "step": "With $c + 9 \\ne 0$ no pair makes the line true, so the system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: no pair satisfies an equation $0 = $ a nonzero number that the system gives."
                },
                {
                  "step": "With $c + 9 = 0$ the second equation is the first multiplied by $3$, so the system has infinitely many solutions.",
                  "reason": "A system has none, one, or infinitely many solutions: two equations with the same solutions leave infinitely many."
                },
                {
                  "step": "So $c + 9 = 0$.",
                  "reason": "A system has none, one, or infinitely many solutions: of the two cases, only the second gives infinitely many."
                },
                {
                  "step": "$c = -9$",
                  "reason": "Adding the same number to both sides: adding $-9$ to both sides leaves $c$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t114-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of the system $x + 2y = 7$ and $-3x + 4y = -1$, and write that line right.",
            "given": [
              "$x = 7 - 2y$",
              "$-3(7 - 2y) + 4y = -1$",
              "$-21 - 6y + 4y = -1$",
              "$-2y - 21 = -1$",
              "$-2y = 20$",
              "$y = -10$",
              "$x = 7 - 2(-10)$",
              "$x = 27$"
            ],
            "lines": [
              {
                "step": "The working solves the system $x + 2y = 7$ and $-3x + 4y = -1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes $-3 \\cdot (-2y)$ as $-6y$.",
                "reason": "A sign is lost: the line gives a product of two negative numbers a minus sign."
              },
              {
                "step": "Line 3 written right is $-21 + 6y + 4y = -1$.",
                "reason": "The sign rules for products: the product of two negative numbers is positive, and every other term of the line stays as it was."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of the system $x + 3y = 1$ and $-2x + 5y = -24$, and write that line right.",
              "given": [
                "$x = 1 - 3y$",
                "$-2(1 - 3y) + 5y = -24$",
                "$-2 + 6y + 5y = -24$",
                "$11y - 2 = -24$",
                "$11y = -22$",
                "$y = -2$",
                "$x = 1 - 3(-2)$",
                "$x = -5$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: x = 7",
              "lines": [
                {
                  "step": "The working solves the system $x + 3y = 1$ and $-2x + 5y = -24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 works out $1 - 3(-2)$ as $-5$.",
                  "reason": "A sign is lost: the line gives a product of two negative numbers a minus sign."
                },
                {
                  "step": "Line 8 written right is $x = 7$.",
                  "reason": "The sign rules for products: the product of two negative numbers is positive, and every other term of the line stays as it was."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $x + 4y = 5$ and $-2x + 7y = 5$, and write that line right.",
              "given": [
                "$x = 5 - 4y$",
                "$-2(5 - 4y) + 7y = 5$",
                "$-10 - 8y + 7y = 5$",
                "$-y - 10 = 5$",
                "$-y = 15$",
                "$y = -15$",
                "$x = 5 - 4(-15)$",
                "$x = 65$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -10+8*y+7*y = 5",
              "lines": [
                {
                  "step": "The working solves the system $x + 4y = 5$ and $-2x + 7y = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $-2 \\cdot (-4y)$ as $-8y$.",
                  "reason": "A sign is lost: the line gives a product of two negative numbers a minus sign."
                },
                {
                  "step": "Line 3 written right is $-10 + 8y + 7y = 5$.",
                  "reason": "The sign rules for products: the product of two negative numbers is positive, and every other term of the line stays as it was."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $x + 2y = -3$ and $-4x + y = -24$, and write that line right.",
              "given": [
                "$x = -3 - 2y$",
                "$-4(-3 - 2y) + y = -24$",
                "$12 + 8y + y = -24$",
                "$9y + 12 = -24$",
                "$9y = -36$",
                "$y = -4$",
                "$x = -3 - 2(-4)$",
                "$x = -11$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: x = 5",
              "lines": [
                {
                  "step": "The working solves the system $x + 2y = -3$ and $-4x + y = -24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 works out $-3 - 2(-4)$ as $-11$.",
                  "reason": "A sign is lost: the line gives a product of two negative numbers a minus sign."
                },
                {
                  "step": "Line 8 written right is $x = 5$.",
                  "reason": "The sign rules for products: the product of two negative numbers is positive, and every other term of the line stays as it was."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of the system $3x + 5y = 7$ and $3x - 6y = -15$, and write that line right.",
            "given": [
              "$(3x + 5y) - (3x - 6y) = 7 - (-15)$",
              "$-y = 22$",
              "$y = -22$",
              "$3x + 5(-22) = 7$",
              "$3x = 117$",
              "$x = 39$"
            ],
            "lines": [
              {
                "step": "The working solves the system $3x + 5y = 7$ and $3x - 6y = -15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes $(3x - 6y)$ away from $(3x + 5y)$ and writes $-y$ for the terms in $y$.",
                "reason": "A sign is lost: subtracting a bracket changes every sign in it, and the line keeps the minus sign of the term in $y$ inside the bracket."
              },
              {
                "step": "Line 2 written right is $11y = 22$.",
                "reason": "Subtracting a bracket changes every sign in it: $5y - (-6y) = 11y$, and the terms in $x$ cancel."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of the system $4x + 3y = 11$ and $x - y = 1$, and write that line right.",
              "given": [
                "$4x - 4y = 4$",
                "$(4x + 3y) - (4x - 4y) = 11 - 4$",
                "$-y = 7$",
                "$y = -7$",
                "$4x + 3(-7) = 11$",
                "$4x = 32$",
                "$x = 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*y = 7",
              "lines": [
                {
                  "step": "The working solves the system $4x + 3y = 11$ and $x - y = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $(4x - 4y)$ away from $(4x + 3y)$ and writes $-y$ for the terms in $y$.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and the line keeps the minus sign of the term in $y$ inside the bracket."
                },
                {
                  "step": "Line 3 written right is $7y = 7$.",
                  "reason": "Subtracting a bracket changes every sign in it: $3y - (-4y) = 7y$, and the terms in $x$ cancel."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $2x + 7y = -1$ and $2x - 8y = 14$, and write that line right.",
              "given": [
                "$(2x + 7y) - (2x - 8y) = -1 - 14$",
                "$-y = -15$",
                "$y = 15$",
                "$2x + 7(15) = -1$",
                "$2x = -106$",
                "$x = -53$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 15*y = -15",
              "lines": [
                {
                  "step": "The working solves the system $2x + 7y = -1$ and $2x - 8y = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $(2x - 8y)$ away from $(2x + 7y)$ and writes $-y$ for the terms in $y$.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and the line keeps the minus sign of the term in $y$ inside the bracket."
                },
                {
                  "step": "Line 2 written right is $15y = -15$.",
                  "reason": "Subtracting a bracket changes every sign in it: $7y - (-8y) = 15y$, and the terms in $x$ cancel."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $6x + y = 9$ and $3x - 2y = -3$, and write that line right.",
              "given": [
                "$6x - 4y = -6$",
                "$(6x + y) - (6x - 4y) = 9 - (-6)$",
                "$-3y = 15$",
                "$y = -5$",
                "$6x + (-5) = 9$",
                "$6x = 14$",
                "$x = \\dfrac{7}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*y = 15",
              "lines": [
                {
                  "step": "The working solves the system $6x + y = 9$ and $3x - 2y = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $(6x - 4y)$ away from $(6x + y)$ and writes $-3y$ for the terms in $y$.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, and the line keeps the minus sign of the term in $y$ inside the bracket."
                },
                {
                  "step": "Line 3 written right is $5y = 15$.",
                  "reason": "Subtracting a bracket changes every sign in it: $y - (-4y) = 5y$, and the terms in $x$ cancel."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t114-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation in $x$ and $y$ that fact 2 gives, where $x$ is the number of 2-euro coins in a purse and $y$ is the number of 1-euro coins in it. Fact 1: The purse holds 23 coins, all of them 1-euro or 2-euro coins. Fact 2: The coins are worth 37 euros.",
            "lines": [
              {
                "step": "Write the equation in $x$ and $y$ that fact 2 gives, where $x$ is the number of 2-euro coins in a purse and $y$ is the number of 1-euro coins in it. Fact 1: The purse holds 23 coins, all of them 1-euro or 2-euro coins. Fact 2: The coins are worth 37 euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The 2-euro coins are worth $2x$ euros, and the 1-euro coins are worth $y$ euros.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
              },
              {
                "step": "$2x + y = 37$",
                "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation in $x$ and $y$ that fact 2 gives, where $x$ is the price of an apple in cents and $y$ is the price of a pear in cents. Fact 1: Four apples and three pears cost 255 cents. Fact 2: A pear costs 15 cents more than an apple.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x+15",
              "lines": [
                {
                  "step": "Write the equation in $x$ and $y$ that fact 2 gives, where $x$ is the price of an apple in cents and $y$ is the price of a pear in cents. Fact 1: Four apples and three pears cost 255 cents. Fact 2: A pear costs 15 cents more than an apple.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "15 cents more than the price of an apple is $x + 15$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$y = x + 15$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write the equation in $x$ and $y$ that fact 1 gives, where $x$ is the larger of two numbers and $y$ is the smaller. Fact 1: The sum of the two numbers is 52. Fact 2: The larger number is 4 less than three times the smaller.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x+y = 52",
              "lines": [
                {
                  "step": "Write the equation in $x$ and $y$ that fact 1 gives, where $x$ is the larger of two numbers and $y$ is the smaller. Fact 1: The sum of the two numbers is 52. Fact 2: The larger number is 4 less than three times the smaller.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the two numbers is $x + y$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$x + y = 52$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write the equation in $x$ and $y$ that fact 1 gives, where $x$ is the width of a field in metres and $y$ is its length in metres. Fact 1: The length is 30 metres more than twice the width. Fact 2: The fence around the field is 360 metres long.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*x+30",
              "lines": [
                {
                  "step": "Write the equation in $x$ and $y$ that fact 1 gives, where $x$ is the width of a field in metres and $y$ is its length in metres. Fact 1: The length is 30 metres more than twice the width. Fact 2: The fence around the field is 360 metres long.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice the width is $2x$, and 30 metres more is $2x + 30$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$y = 2x + 30$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t114-k7",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the system $3x + ay = 4$ and $6x + (a + 5)y = 1$ has exactly one solution for every real number $a$.",
            "lines": [
              {
                "step": "Decide whether the system $3x + ay = 4$ and $6x + (a + 5)y = 1$ has exactly one solution for every real number $a$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The determinant is $3(a + 5) - 6a$.",
                "reason": "Determinant: $a_1b_2 - a_2b_1$, with $a_1 = 3$, $b_1 = a$, $a_2 = 6$ and $b_2 = a + 5$."
              },
              {
                "step": "This equals $3a + 15 - 6a$.",
                "reason": "Multiplying out: the number beside each bracket multiplies each term inside it."
              },
              {
                "step": "This equals $15 - 3a$.",
                "reason": "Collecting like terms: $3a - 6a = -3a$."
              },
              {
                "step": "At $a = 5$ the determinant is $15 - 3 \\cdot 5 = 0$.",
                "reason": "Substituting a value: $5$ goes, in brackets where negative, in place of $a$."
              },
              {
                "step": "No",
                "reason": "The determinant: with determinant $0$ the system has no solution or infinitely many, so at $a = 5$ it does not have exactly one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the system $2x + (a + 3)y = 5$ and $4x + (2a + 1)y = 3$ has exactly one solution for every real number $a$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the system $2x + (a + 3)y = 5$ and $4x + (2a + 1)y = 3$ has exactly one solution for every real number $a$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The determinant is $2(2a + 1) - 4(a + 3)$.",
                  "reason": "Determinant: $a_1b_2 - a_2b_1$, with $a_1 = 2$, $b_1 = a + 3$, $a_2 = 4$ and $b_2 = 2a + 1$."
                },
                {
                  "step": "This equals $4a + 2 - 4a - 12$.",
                  "reason": "Multiplying out: the number beside each bracket multiplies each term inside it."
                },
                {
                  "step": "This equals $-10$.",
                  "reason": "Collecting like terms: the terms in $a$ cancel."
                },
                {
                  "step": "So the determinant is $-10$, which is not $0$, for every real number $a$.",
                  "reason": "Collecting like terms left no term in $a$, so every value of $a$ gives the same determinant."
                },
                {
                  "step": "Yes",
                  "reason": "The determinant: with determinant not $0$ the system has exactly one solution."
                }
              ]
            },
            {
              "prompt": "Decide whether the system $(a - 7)x + 5y = 2$ and $2ax + 3y = 4$ has exactly one solution for every real number $a$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the system $(a - 7)x + 5y = 2$ and $2ax + 3y = 4$ has exactly one solution for every real number $a$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The determinant is $(a - 7) \\cdot 3 - 2a \\cdot 5$.",
                  "reason": "Determinant: $a_1b_2 - a_2b_1$, with $a_1 = a - 7$, $b_1 = 5$, $a_2 = 2a$ and $b_2 = 3$."
                },
                {
                  "step": "This equals $3a - 21 - 10a$.",
                  "reason": "Multiplying out: the number beside each bracket multiplies each term inside it."
                },
                {
                  "step": "This equals $-21 - 7a$.",
                  "reason": "Collecting like terms: $3a - 10a = -7a$."
                },
                {
                  "step": "At $a = -3$ the determinant is $-21 - 7 \\cdot (-3) = 0$.",
                  "reason": "Substituting a value: $-3$ goes, in brackets where negative, in place of $a$."
                },
                {
                  "step": "No",
                  "reason": "The determinant: with determinant $0$ the system has no solution or infinitely many, so at $a = -3$ it does not have exactly one."
                }
              ]
            },
            {
              "prompt": "Decide whether the system $(3a + 4)x + 6y = 1$ and $(a - 3)x + 2y = 5$ has exactly one solution for every real number $a$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the system $(3a + 4)x + 6y = 1$ and $(a - 3)x + 2y = 5$ has exactly one solution for every real number $a$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The determinant is $(3a + 4) \\cdot 2 - (a - 3) \\cdot 6$.",
                  "reason": "Determinant: $a_1b_2 - a_2b_1$, with $a_1 = 3a + 4$, $b_1 = 6$, $a_2 = a - 3$ and $b_2 = 2$."
                },
                {
                  "step": "This equals $6a + 8 - 6a + 18$.",
                  "reason": "Multiplying out: the number beside each bracket multiplies each term inside it."
                },
                {
                  "step": "This equals $26$.",
                  "reason": "Collecting like terms: the terms in $a$ cancel."
                },
                {
                  "step": "So the determinant is $26$, which is not $0$, for every real number $a$.",
                  "reason": "Collecting like terms left no term in $a$, so every value of $a$ gives the same determinant."
                },
                {
                  "step": "Yes",
                  "reason": "The determinant: with determinant not $0$ the system has exactly one solution."
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
      "id": "t114-p1",
      "method": "direct proof",
      "statement": "Let $a_1$, $b_1$, $c_1$, $a_2$, $b_2$ and $c_2$ be real numbers with $a_1b_2 - a_2b_1 \\ne 0$. Then the system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ has exactly one solution, $x = \\dfrac{c_1b_2 - b_1c_2}{a_1b_2 - a_2b_1}$ and $y = \\dfrac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}$.",
      "idea": "Eliminating $y$ gives the only value $x$ can take, and eliminating $x$ gives the only value $y$ can take; substituting that pair back shows it solves both equations.",
      "lines": [
        {
          "line": "Suppose that $(x, y)$ solves the system, so $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$.",
          "reason": "solution of a system"
        },
        {
          "line": "Then $a_1b_2x + b_1b_2y = c_1b_2$.",
          "reason": "multiplying both sides of the first equation by the same number, $b_2$"
        },
        {
          "line": "And $a_2b_1x + b_1b_2y = b_1c_2$.",
          "reason": "multiplying both sides of the second equation by the same number, $b_1$"
        },
        {
          "line": "So $a_1b_2x - a_2b_1x = c_1b_2 - b_1c_2$.",
          "reason": "elimination: subtracting line 3 from line 2 cancels the terms in $y$"
        },
        {
          "line": "So $(a_1b_2 - a_2b_1)x = c_1b_2 - b_1c_2$.",
          "reason": "collecting like terms"
        },
        {
          "line": "So $x = \\dfrac{c_1b_2 - b_1c_2}{a_1b_2 - a_2b_1}$.",
          "reason": "dividing both sides by a nonzero number, $a_1b_2 - a_2b_1$, which is not $0$ by hypothesis"
        },
        {
          "line": "Also $a_1a_2x + a_2b_1y = a_2c_1$.",
          "reason": "multiplying both sides of the first equation by the same number, $a_2$"
        },
        {
          "line": "And $a_1a_2x + a_1b_2y = a_1c_2$.",
          "reason": "multiplying both sides of the second equation by the same number, $a_1$"
        },
        {
          "line": "So $a_1b_2y - a_2b_1y = a_1c_2 - a_2c_1$.",
          "reason": "elimination: subtracting line 7 from line 8 cancels the terms in $x$"
        },
        {
          "line": "So $(a_1b_2 - a_2b_1)y = a_1c_2 - a_2c_1$.",
          "reason": "collecting like terms"
        },
        {
          "line": "So $y = \\dfrac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}$.",
          "reason": "dividing both sides by a nonzero number, as in line 6"
        },
        {
          "line": "So the system has no solution other than the pair of lines 6 and 11.",
          "reason": "lines 1 to 11 hold for every solution"
        },
        {
          "line": "At that pair the first left side is $a_1 \\cdot \\dfrac{c_1b_2 - b_1c_2}{a_1b_2 - a_2b_1} + b_1 \\cdot \\dfrac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}$.",
          "reason": "substituting a value"
        },
        {
          "line": "This equals $\\dfrac{a_1(c_1b_2 - b_1c_2) + b_1(a_1c_2 - a_2c_1)}{a_1b_2 - a_2b_1}$.",
          "reason": "adding fractions with the same denominator"
        },
        {
          "line": "This equals $\\dfrac{a_1b_2c_1 - a_1b_1c_2 + a_1b_1c_2 - a_2b_1c_1}{a_1b_2 - a_2b_1}$.",
          "reason": "multiplying out"
        },
        {
          "line": "This equals $\\dfrac{a_1b_2c_1 - a_2b_1c_1}{a_1b_2 - a_2b_1}$.",
          "reason": "collecting like terms: $-a_1b_1c_2 + a_1b_1c_2 = 0$"
        },
        {
          "line": "This equals $\\dfrac{c_1(a_1b_2 - a_2b_1)}{a_1b_2 - a_2b_1}$.",
          "reason": "taking out a common factor, $c_1$"
        },
        {
          "line": "This equals $c_1$.",
          "reason": "cancelling a common factor, which is not $0$"
        },
        {
          "line": "At that pair the second left side is $a_2 \\cdot \\dfrac{c_1b_2 - b_1c_2}{a_1b_2 - a_2b_1} + b_2 \\cdot \\dfrac{a_1c_2 - a_2c_1}{a_1b_2 - a_2b_1}$.",
          "reason": "substituting a value"
        },
        {
          "line": "This equals $\\dfrac{a_2(c_1b_2 - b_1c_2) + b_2(a_1c_2 - a_2c_1)}{a_1b_2 - a_2b_1}$.",
          "reason": "adding fractions with the same denominator"
        },
        {
          "line": "This equals $\\dfrac{a_2b_2c_1 - a_2b_1c_2 + a_1b_2c_2 - a_2b_2c_1}{a_1b_2 - a_2b_1}$.",
          "reason": "multiplying out"
        },
        {
          "line": "This equals $\\dfrac{a_1b_2c_2 - a_2b_1c_2}{a_1b_2 - a_2b_1}$.",
          "reason": "collecting like terms: $a_2b_2c_1 - a_2b_2c_1 = 0$"
        },
        {
          "line": "This equals $\\dfrac{c_2(a_1b_2 - a_2b_1)}{a_1b_2 - a_2b_1}$.",
          "reason": "taking out a common factor, $c_2$"
        },
        {
          "line": "This equals $c_2$.",
          "reason": "cancelling a common factor, which is not $0$"
        },
        {
          "line": "So the pair solves the system, and it is the only solution.",
          "reason": "solution of a system, with line 12"
        }
      ]
    },
    {
      "id": "t114-p2",
      "method": "proof by cases",
      "statement": "Let $a_1$, $b_1$, $c_1$, $a_2$, $b_2$ and $c_2$ be real numbers with $a_1b_2 - a_2b_1 = 0$. Then the system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ has no solution or infinitely many solutions.",
      "idea": "Either there is no solution, or there is one, $(x_0, y_0)$; then a step along $(b_2, -a_2)$, scaled by a parameter, keeps both left sides, because the step changes the first left side by the determinant times $t$, which is $0$.",
      "lines": [
        {
          "line": "Either the system has no solution, or it has a solution $(x_0, y_0)$.",
          "reason": "the two cases, one of which holds"
        },
        {
          "line": "Case 1: the system has no solution. Then the conclusion holds.",
          "reason": "the case itself"
        },
        {
          "line": "Case 2: the pair $(x_0, y_0)$ solves the system, so $a_1x_0 + b_1y_0 = c_1$ and $a_2x_0 + b_2y_0 = c_2$.",
          "reason": "solution of a system"
        },
        {
          "line": "Case 2a: $a_2$ and $b_2$ are not both $0$. For each real number $t$ take the pair $(x_0 + b_2t, y_0 - a_2t)$.",
          "reason": "parameter"
        },
        {
          "line": "At that pair the second left side is $a_2(x_0 + b_2t) + b_2(y_0 - a_2t)$.",
          "reason": "substituting a value"
        },
        {
          "line": "This equals $a_2x_0 + b_2y_0 + a_2b_2t - a_2b_2t$.",
          "reason": "multiplying out"
        },
        {
          "line": "This equals $c_2$.",
          "reason": "collecting like terms, and line 3"
        },
        {
          "line": "At that pair the first left side is $a_1(x_0 + b_2t) + b_1(y_0 - a_2t)$.",
          "reason": "substituting a value"
        },
        {
          "line": "This equals $a_1x_0 + b_1y_0 + a_1b_2t - a_2b_1t$.",
          "reason": "multiplying out"
        },
        {
          "line": "This equals $a_1x_0 + b_1y_0 + (a_1b_2 - a_2b_1)t$.",
          "reason": "taking out a common factor, $t$"
        },
        {
          "line": "This equals $c_1$.",
          "reason": "line 3, and the hypothesis $a_1b_2 - a_2b_1 = 0$, with $0 \\cdot t = 0$"
        },
        {
          "line": "So each pair $(x_0 + b_2t, y_0 - a_2t)$ solves the system.",
          "reason": "solution of a system, lines 7 and 11"
        },
        {
          "line": "If two values $t_1$ and $t_2$ give the same pair, then $x_0 + b_2t_1 = x_0 + b_2t_2$ and $y_0 - a_2t_1 = y_0 - a_2t_2$.",
          "reason": "ordered pair: equal pairs have equal first numbers and equal second numbers"
        },
        {
          "line": "Then $b_2t_1 = b_2t_2$ and $-a_2t_1 = -a_2t_2$.",
          "reason": "adding the same number to both sides, $-x_0$ and $-y_0$"
        },
        {
          "line": "So $t_1 = t_2$.",
          "reason": "dividing both sides by a nonzero number, $b_2$ or $-a_2$, whichever is not $0$"
        },
        {
          "line": "So in Case 2a the system has infinitely many solutions.",
          "reason": "a different solution for each real number $t$, lines 12 and 15"
        },
        {
          "line": "Case 2b: $a_2 = b_2 = 0$, and $a_1$ and $b_1$ are not both $0$. For each real number $t$ take the pair $(x_0 + b_1t, y_0 - a_1t)$.",
          "reason": "parameter"
        },
        {
          "line": "At that pair the first left side is $a_1(x_0 + b_1t) + b_1(y_0 - a_1t)$.",
          "reason": "substituting a value"
        },
        {
          "line": "This equals $a_1x_0 + b_1y_0 + a_1b_1t - a_1b_1t$.",
          "reason": "multiplying out"
        },
        {
          "line": "This equals $c_1$.",
          "reason": "collecting like terms, and line 3"
        },
        {
          "line": "The second left side, $0x + 0y$, equals $0$ at every pair.",
          "reason": "zero times a number is $0$"
        },
        {
          "line": "At $(x_0, y_0)$ the second left side equals $c_2$.",
          "reason": "line 3"
        },
        {
          "line": "So $c_2 = 0$.",
          "reason": "the symmetric and transitive properties"
        },
        {
          "line": "So every pair solves the second equation.",
          "reason": "solution of a two-variable equation: $0x + 0y = 0$ holds at every pair"
        },
        {
          "line": "So each pair $(x_0 + b_1t, y_0 - a_1t)$ solves the system.",
          "reason": "solution of a system, lines 20 and 24"
        },
        {
          "line": "Two values of $t$ that give the same pair are equal.",
          "reason": "the steps of lines 13 to 15, with $b_1$ and $-a_1$ in place of $b_2$ and $-a_2$"
        },
        {
          "line": "So in Case 2b the system has infinitely many solutions.",
          "reason": "a different solution for each real number $t$, lines 25 and 26"
        },
        {
          "line": "Case 2c: $a_1$, $b_1$, $a_2$ and $b_2$ are all $0$. Then both left sides equal $0$ at every pair.",
          "reason": "zero times a number is $0$"
        },
        {
          "line": "At $(x_0, y_0)$ the two left sides equal $c_1$ and $c_2$.",
          "reason": "line 3"
        },
        {
          "line": "So $c_1 = c_2 = 0$.",
          "reason": "the symmetric and transitive properties"
        },
        {
          "line": "So every pair solves the system.",
          "reason": "solution of a system: $0x + 0y = 0$ holds at every pair"
        },
        {
          "line": "So in Case 2c the system has infinitely many solutions.",
          "reason": "there are infinitely many pairs of real numbers"
        },
        {
          "line": "In every case the system has no solution or infinitely many solutions.",
          "reason": "proof by cases: Cases 1, 2a, 2b and 2c cover every system with determinant $0$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t114-s1",
      "method": "proof by contradiction",
      "statement": "Prove that for real numbers $a$, $b$, $c_1$ and $c_2$ with $c_1 \\ne c_2$, the system $ax + by = c_1$ and $ax + by = c_2$ has no solution. Facts it may use: solution of a system; the symmetric property; the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Suppose that the system has a solution $(x, y)$.",
            "reason": "the assumption, made to reach a contradiction"
          },
          {
            "line": "Then $ax + by = c_1$ and $ax + by = c_2$.",
            "reason": "solution of a system"
          },
          {
            "line": "So $c_1 = ax + by$.",
            "reason": "the symmetric property"
          },
          {
            "line": "So $c_1 = c_2$.",
            "reason": "the transitive property, with line 2"
          },
          {
            "line": "This contradicts $c_1 \\ne c_2$, so the system has no solution.",
            "reason": "proof by contradiction: the assumption led to a false statement"
          }
        ]
      }
    },
    {
      "id": "t114-s2",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a_1$, $b_1$, $c_1$, $a_2$, $b_2$, $c_2$ and $d$, every solution $(x, y)$ of the system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ solves $(a_1 + da_2)x + (b_1 + db_2)y = c_1 + dc_2$. Facts it may use: solution of a system; multiplying both sides by the same number; multiplying out; elimination; the commutative and associative laws of addition; collecting like terms; solution of a two-variable equation.",
      "check": {
        "proof": [
          {
            "line": "Let $(x, y)$ solve the system, so $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$.",
            "reason": "solution of a system"
          },
          {
            "line": "Then $d(a_2x + b_2y) = dc_2$.",
            "reason": "multiplying both sides by the same number, $d$"
          },
          {
            "line": "So $da_2x + db_2y = dc_2$.",
            "reason": "multiplying out"
          },
          {
            "line": "So $a_1x + b_1y + da_2x + db_2y = c_1 + dc_2$.",
            "reason": "elimination: adding the first equation and line 3"
          },
          {
            "line": "So $a_1x + da_2x + b_1y + db_2y = c_1 + dc_2$.",
            "reason": "the commutative and associative laws of addition"
          },
          {
            "line": "So $(a_1 + da_2)x + (b_1 + db_2)y = c_1 + dc_2$.",
            "reason": "collecting like terms"
          },
          {
            "line": "Therefore $(x, y)$ solves $(a_1 + da_2)x + (b_1 + db_2)y = c_1 + dc_2$.",
            "reason": "solution of a two-variable equation"
          }
        ]
      }
    },
    {
      "id": "t114-s3",
      "method": "disproof by counterexample",
      "statement": "Prove that the following is false: every system of two linear equations in two variables has exactly one solution. Facts it may use: substituting a value; multiplying out; collecting like terms; solution of a system; parameter; parametric form of a solution set.",
      "check": {
        "proof": [
          {
            "line": "Take the system $x - 3y = 2$ and $2x - 6y = 4$.",
            "reason": "a choice of system"
          },
          {
            "line": "For each real number $t$ take the pair $(2 + 3t, t)$.",
            "reason": "parametric form of a solution set, with the parameter $t$ in place of $y$"
          },
          {
            "line": "At that pair the first left side is $(2 + 3t) - 3t$.",
            "reason": "substituting a value"
          },
          {
            "line": "This equals $2$.",
            "reason": "collecting like terms"
          },
          {
            "line": "At that pair the second left side is $2(2 + 3t) - 6t$.",
            "reason": "substituting a value"
          },
          {
            "line": "This equals $4 + 6t - 6t$.",
            "reason": "multiplying out"
          },
          {
            "line": "This equals $4$.",
            "reason": "collecting like terms"
          },
          {
            "line": "So the pairs $(2, 0)$, at $t = 0$, and $(5, 1)$, at $t = 1$, are two different solutions.",
            "reason": "solution of a system, lines 4 and 7"
          },
          {
            "line": "So the system does not have exactly one solution, and the statement is false.",
            "reason": "one case where the hypothesis holds and the conclusion fails"
          }
        ]
      }
    },
    {
      "id": "t114-s4",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$, $c$ and $d$, the determinant of the system $ax + by = c$ and $(da)x + (db)y = dc$ is $0$. Facts it may use: determinant $a_1b_2 - a_2b_1$; the commutative and associative laws of multiplication.",
      "check": {
        "proof": [
          {
            "line": "The determinant is $a(db) - (da)b$.",
            "reason": "determinant: $a_1b_2 - a_2b_1$ with $a_1 = a$, $b_1 = b$, $a_2 = da$ and $b_2 = db$"
          },
          {
            "line": "This equals $dab - dab$.",
            "reason": "the commutative and associative laws of multiplication"
          },
          {
            "line": "This equals $0$.",
            "reason": "a number minus itself is $0$"
          }
        ]
      }
    },
    {
      "id": "t114-s5",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a_1$, $c_1$, $a_2$, $b_2$ and $c_2$, a pair $(x, y)$ solves the system $y = a_1x + c_1$ and $a_2x + b_2y = c_2$ exactly when $y = a_1x + c_1$ and $(a_2 + a_1b_2)x = c_2 - b_2c_1$. Facts it may use: solution of a system; substitution; back-substitution; multiplying out; collecting like terms; adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $(x, y)$ solves the system, so $y = a_1x + c_1$ and $a_2x + b_2y = c_2$.",
            "reason": "solution of a system"
          },
          {
            "line": "Then $a_2x + b_2(a_1x + c_1) = c_2$.",
            "reason": "substitution: $a_1x + c_1$ goes, in brackets, in place of $y$ in the second equation"
          },
          {
            "line": "So $a_2x + a_1b_2x + b_2c_1 = c_2$.",
            "reason": "multiplying out"
          },
          {
            "line": "So $(a_2 + a_1b_2)x + b_2c_1 = c_2$.",
            "reason": "collecting like terms"
          },
          {
            "line": "So $(a_2 + a_1b_2)x = c_2 - b_2c_1$.",
            "reason": "adding the same number to both sides, $-b_2c_1$"
          },
          {
            "line": "So $y = a_1x + c_1$ and $(a_2 + a_1b_2)x = c_2 - b_2c_1$.",
            "reason": "lines 1 and 5"
          },
          {
            "line": "Conversely, suppose that $y = a_1x + c_1$ and $(a_2 + a_1b_2)x = c_2 - b_2c_1$.",
            "reason": "the hypothesis of the converse"
          },
          {
            "line": "Then the second left side of the system is $a_2x + b_2(a_1x + c_1)$.",
            "reason": "back-substitution: $a_1x + c_1$ goes, in brackets, in place of $y$"
          },
          {
            "line": "This equals $a_2x + a_1b_2x + b_2c_1$.",
            "reason": "multiplying out"
          },
          {
            "line": "This equals $(a_2 + a_1b_2)x + b_2c_1$.",
            "reason": "collecting like terms"
          },
          {
            "line": "This equals $c_2 - b_2c_1 + b_2c_1$.",
            "reason": "line 7: $(a_2 + a_1b_2)x = c_2 - b_2c_1$"
          },
          {
            "line": "This equals $c_2$.",
            "reason": "collecting like terms"
          },
          {
            "line": "So $(x, y)$ solves both equations of the system.",
            "reason": "solution of a system, lines 7 and 12"
          }
        ]
      }
    },
    {
      "id": "t114-s6",
      "method": "proof by cases",
      "statement": "Prove that for every real number $a$, the system $x + ay = 1$ and $ax + y = 1$ has a solution exactly when $a \\ne -1$. Facts it may use: solution of a system; elimination; substituting a value; multiplying a fraction by a number; adding fractions with the same denominator; cancelling a common factor.",
      "check": {
        "proof": [
          {
            "line": "Either $a = -1$ or $a \\ne -1$.",
            "reason": "the two cases, one of which holds"
          },
          {
            "line": "Case 1: $a = -1$. The system is $x - y = 1$ and $-x + y = 1$.",
            "reason": "substituting a value: $-1$ in place of $a$"
          },
          {
            "line": "Adding the two equations gives $0 = 2$.",
            "reason": "elimination"
          },
          {
            "line": "No pair makes $0 = 2$ true, so in Case 1 the system has no solution.",
            "reason": "solution of a system: every solution would satisfy line 3"
          },
          {
            "line": "Case 2: $a \\ne -1$, so $1 + a \\ne 0$. Take the pair $\\left(\\dfrac{1}{1+a}, \\dfrac{1}{1+a}\\right)$.",
            "reason": "the case itself"
          },
          {
            "line": "At that pair the first left side is $\\dfrac{1}{1+a} + a \\cdot \\dfrac{1}{1+a}$.",
            "reason": "substituting a value"
          },
          {
            "line": "This equals $\\dfrac{1}{1+a} + \\dfrac{a}{1+a}$.",
            "reason": "multiplying a fraction by a number, arithmetic's fraction rule"
          },
          {
            "line": "This equals $\\dfrac{1+a}{1+a}$.",
            "reason": "adding fractions with the same denominator"
          },
          {
            "line": "This equals $1$.",
            "reason": "cancelling a common factor, $1 + a$, which is not $0$"
          },
          {
            "line": "At that pair the second left side is $a \\cdot \\dfrac{1}{1+a} + \\dfrac{1}{1+a}$.",
            "reason": "substituting a value"
          },
          {
            "line": "This equals $\\dfrac{a}{1+a} + \\dfrac{1}{1+a}$.",
            "reason": "multiplying a fraction by a number, arithmetic's fraction rule"
          },
          {
            "line": "This equals $\\dfrac{a+1}{1+a}$.",
            "reason": "adding fractions with the same denominator"
          },
          {
            "line": "This equals $1$.",
            "reason": "cancelling a common factor, as $a + 1 = 1 + a$ is not $0$"
          },
          {
            "line": "So in Case 2 the pair solves the system.",
            "reason": "solution of a system, lines 9 and 13"
          },
          {
            "line": "So the system has a solution exactly when $a \\ne -1$.",
            "reason": "proof by cases: Cases 1 and 2 cover every real number $a$"
          }
        ]
      }
    }
  ]
}
