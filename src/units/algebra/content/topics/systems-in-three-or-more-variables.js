export default {
  "number": 117,
  "title": "Linear systems in three or more variables",
  "section": 3,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "145-150"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve the system $x + y + z = 6$, $2x - y + z = 3$ and $x + 2y - z = 2$.",
    "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
    "answer": "x = 1, y = 2, z = 3",
    "solution": [
      "$x + y + z = 6$, $2x - y + z = 3$ and $x + 2y - z = 2$",
      "$x = 6 - y - z$",
      "$2(6 - y - z) - y + z = 3$",
      "$(6 - y - z) + 2y - z = 2$",
      "$-3y - z = -9$",
      "$y - 2z = -4$",
      "$y = 2z - 4$",
      "$-3(2z - 4) - z = -9$",
      "$-7z + 12 = -9$",
      "$-7z = -21$",
      "$z = 3$",
      "$y = 2(3) - 4$",
      "$y = 2$",
      "$x = 6 - 2 - 3$",
      "$x = 1$",
      "$x = 1$, $y = 2$, $z = 3$"
    ]
  },
  "ideas": [
    {
      "name": "Ordered triples and reducing the number of variables",
      "concrete": "In the system $x + y + z = 9$, $x - y + z = 3$ and $2x + y - z = 3$, taking the second equation from the first gives $2y = 6$, so $y = 3$. Adding the second and third equations gives $3x = 6$, so $x = 2$. Then the first equation gives $z = 9 - 2 - 3 = 4$, and the solution is the ordered triple $(2, 3, 4)$.",
      "general": "A solution of a system of equations in $x$, $y$ and $z$ is an **ordered triple** $(x, y, z)$ of numbers that solves every equation of the system, the value of $x$ first, $y$ second and $z$ third. For a system of linear equations in three or more variables, **reducing the number of variables** means using substitution, or elimination on pairs of equations, to reach a system with one variable fewer; every solution of the first system solves the new one. Repeating this leaves an equation in one variable, and back-substitution gives the other values. Two equations in three unknowns leave one equation in two unknowns, and a parameter then writes the infinitely many solutions."
    },
    {
      "name": "Equal for all x means equal coefficients",
      "concrete": "Suppose that $a(x + 2) = 3x + b$ for every real number $x$. At $x = 0$ this gives $2a = b$, and at $x = 1$ it gives $3a = 3 + b$, so $3a = 3 + 2a$. Then $a = 3$ and $b = 6$.",
      "general": "For real numbers $a_1$, $b_1$, $a_2$ and $b_2$, if $a_1x + b_1 = a_2x + b_2$ for every real number $x$, then $a_1 = a_2$ and $b_1 = b_2$: **equal for all $x$ means equal coefficients**. Unknown constants in such an equation are found by setting the coefficients of $x$ equal and the constant terms equal."
    }
  ],
  "kinds": [
    {
      "id": "t117-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve the system $x - 2y + 3z = 18$, $-2x + 5y + 3z = 10$ and $-3x + y + 5z = 11$.",
            "lines": [
              {
                "step": "Solve the system $x - 2y + 3z = 18$, $-2x + 5y + 3z = 10$ and $-3x + y + 5z = 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = 18 + 2y - 3z$",
                "reason": "Solving for a letter in terms of the others: adding the opposites of the terms in $y$ and $z$ to both sides of the first equation leaves $x$ alone."
              },
              {
                "step": "$-2(18 + 2y - 3z) + 5y + 3z = 10$",
                "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation."
              },
              {
                "step": "$-3(18 + 2y - 3z) + y + 5z = 11$",
                "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the third equation."
              },
              {
                "step": "$y + 9z = 46$",
                "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
              },
              {
                "step": "$-5y + 14z = 65$",
                "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
              },
              {
                "step": "$y = 46 - 9z$",
                "reason": "Solving for a letter in terms of the others: taking the term in $z$ from both sides of the first equation in $y$ and $z$ leaves $y$ alone."
              },
              {
                "step": "$-5(46 - 9z) + 14z = 65$",
                "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the second equation in $y$ and $z$."
              },
              {
                "step": "$59z - 230 = 65$",
                "reason": "Multiplying out and collecting like terms leaves an equation in $z$ alone."
              },
              {
                "step": "$59z = 295$",
                "reason": "Adding the same number to both sides: adding $230$ to both sides leaves the term in $z$ alone."
              },
              {
                "step": "$z = 5$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $59$ leaves $z$ alone."
              },
              {
                "step": "$y = 46 - 9(5)$",
                "reason": "Back-substitution: the value of $z$ goes, in brackets, in place of $z$ in the expression for $y$."
              },
              {
                "step": "$y = 1$",
                "reason": "Order of operations: the products come before the sums and differences."
              },
              {
                "step": "$x = 18 + 2(1) - 3(5)$",
                "reason": "Back-substitution: the values of $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the expression for $x$."
              },
              {
                "step": "$x = 5$",
                "reason": "Order of operations: the products come before the sums and differences."
              },
              {
                "step": "$x = 5$, $y = 1$, $z = 5$",
                "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $x + 2y + 2z = -1$, $2x + 5y - 4z = 26$ and $4x - 2y - 4z = -8$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -3, y = 4, z = -3",
              "lines": [
                {
                  "step": "Solve the system $x + 2y + 2z = -1$, $2x + 5y - 4z = 26$ and $4x - 2y - 4z = -8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -1 - 2y - 2z$",
                  "reason": "Solving for a letter in terms of the others: adding the opposites of the terms in $y$ and $z$ to both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$2(-1 - 2y - 2z) + 5y - 4z = 26$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation."
                },
                {
                  "step": "$4(-1 - 2y - 2z) - 2y - 4z = -8$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the third equation."
                },
                {
                  "step": "$y - 8z = 28$",
                  "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
                },
                {
                  "step": "$-10y - 12z = -4$",
                  "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
                },
                {
                  "step": "$y = 28 + 8z$",
                  "reason": "Solving for a letter in terms of the others: taking the term in $z$ from both sides of the first equation in $y$ and $z$ leaves $y$ alone."
                },
                {
                  "step": "$-10(28 + 8z) - 12z = -4$",
                  "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the second equation in $y$ and $z$."
                },
                {
                  "step": "$-92z - 280 = -4$",
                  "reason": "Multiplying out and collecting like terms leaves an equation in $z$ alone."
                },
                {
                  "step": "$-92z = 276$",
                  "reason": "Adding the same number to both sides: adding $280$ to both sides leaves the term in $z$ alone."
                },
                {
                  "step": "$z = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-92$ leaves $z$ alone."
                },
                {
                  "step": "$y = 28 + 8(-3)$",
                  "reason": "Back-substitution: the value of $z$ goes, in brackets, in place of $z$ in the expression for $y$."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Order of operations: the products come before the sums and differences."
                },
                {
                  "step": "$x = -1 - 2(4) - 2(-3)$",
                  "reason": "Back-substitution: the values of $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the expression for $x$."
                },
                {
                  "step": "$x = -3$",
                  "reason": "Order of operations: the products come before the sums and differences."
                },
                {
                  "step": "$x = -3$, $y = 4$, $z = -3$",
                  "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $x + 2y - 4z = -14$, $2x + 5y + 5z = 38$ and $4x + 4y + 4z = 40$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 4, y = 1, z = 5",
              "lines": [
                {
                  "step": "Solve the system $x + 2y - 4z = -14$, $2x + 5y + 5z = 38$ and $4x + 4y + 4z = 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -14 - 2y + 4z$",
                  "reason": "Solving for a letter in terms of the others: adding the opposites of the terms in $y$ and $z$ to both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$2(-14 - 2y + 4z) + 5y + 5z = 38$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation."
                },
                {
                  "step": "$4(-14 - 2y + 4z) + 4y + 4z = 40$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the third equation."
                },
                {
                  "step": "$y + 13z = 66$",
                  "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
                },
                {
                  "step": "$-4y + 20z = 96$",
                  "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
                },
                {
                  "step": "$y = 66 - 13z$",
                  "reason": "Solving for a letter in terms of the others: taking the term in $z$ from both sides of the first equation in $y$ and $z$ leaves $y$ alone."
                },
                {
                  "step": "$-4(66 - 13z) + 20z = 96$",
                  "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the second equation in $y$ and $z$."
                },
                {
                  "step": "$72z - 264 = 96$",
                  "reason": "Multiplying out and collecting like terms leaves an equation in $z$ alone."
                },
                {
                  "step": "$72z = 360$",
                  "reason": "Adding the same number to both sides: adding $264$ to both sides leaves the term in $z$ alone."
                },
                {
                  "step": "$z = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $72$ leaves $z$ alone."
                },
                {
                  "step": "$y = 66 - 13(5)$",
                  "reason": "Back-substitution: the value of $z$ goes, in brackets, in place of $z$ in the expression for $y$."
                },
                {
                  "step": "$y = 1$",
                  "reason": "Order of operations: the products come before the sums and differences."
                },
                {
                  "step": "$x = -14 - 2(1) + 4(5)$",
                  "reason": "Back-substitution: the values of $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the expression for $x$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Order of operations: the products come before the sums and differences."
                },
                {
                  "step": "$x = 4$, $y = 1$, $z = 5$",
                  "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $x + 2y + 4z = 1$, $-2x - 3y + 4z = -21$ and $4x + 5y + 4z = 13$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -1, y = 5, z = -2",
              "lines": [
                {
                  "step": "Solve the system $x + 2y + 4z = 1$, $-2x - 3y + 4z = -21$ and $4x + 5y + 4z = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 1 - 2y - 4z$",
                  "reason": "Solving for a letter in terms of the others: adding the opposites of the terms in $y$ and $z$ to both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$-2(1 - 2y - 4z) - 3y + 4z = -21$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation."
                },
                {
                  "step": "$4(1 - 2y - 4z) + 5y + 4z = 13$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the third equation."
                },
                {
                  "step": "$y + 12z = -19$",
                  "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
                },
                {
                  "step": "$-3y - 12z = 9$",
                  "reason": "Reducing the number of variables: multiplying out and collecting like terms leaves an equation in $y$ and $z$ alone."
                },
                {
                  "step": "$y = -19 - 12z$",
                  "reason": "Solving for a letter in terms of the others: taking the term in $z$ from both sides of the first equation in $y$ and $z$ leaves $y$ alone."
                },
                {
                  "step": "$-3(-19 - 12z) - 12z = 9$",
                  "reason": "Substitution: the expression for $y$ goes, in brackets, in place of $y$ in the second equation in $y$ and $z$."
                },
                {
                  "step": "$24z + 57 = 9$",
                  "reason": "Multiplying out and collecting like terms leaves an equation in $z$ alone."
                },
                {
                  "step": "$24z = -48$",
                  "reason": "Adding the same number to both sides: adding $-57$ to both sides leaves the term in $z$ alone."
                },
                {
                  "step": "$z = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $24$ leaves $z$ alone."
                },
                {
                  "step": "$y = -19 - 12(-2)$",
                  "reason": "Back-substitution: the value of $z$ goes, in brackets, in place of $z$ in the expression for $y$."
                },
                {
                  "step": "$y = 5$",
                  "reason": "Order of operations: the products come before the sums and differences."
                },
                {
                  "step": "$x = 1 - 2(5) - 4(-2)$",
                  "reason": "Back-substitution: the values of $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the expression for $x$."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Order of operations: the products come before the sums and differences."
                },
                {
                  "step": "$x = -1$, $y = 5$, $z = -2$",
                  "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $-4x - 3y + 3z = -26$, $-x - 2y - 3z = -29$ and $3x - 4y - z = -13$.",
            "lines": [
              {
                "step": "Solve the system $-4x - 3y + 3z = -26$, $-x - 2y - 3z = -29$ and $3x - 4y - z = -13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-5x - 5y = -55$",
                "reason": "Elimination: adding the first and second equations cancels the terms in $z$, which reduces the number of variables to two."
              },
              {
                "step": "$9x - 12y - 3z = -39$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the third equation by $3$ gives a term in $z$ of the same size as in the first equation."
              },
              {
                "step": "$5x - 15y = -65$",
                "reason": "Elimination: adding that equation to the first cancels the terms in $z$, which leaves a second equation in $x$ and $y$."
              },
              {
                "step": "$-15x - 15y = -165$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $x$ and $y$ by $3$ gives a term in $y$ of the same size as in the second."
              },
              {
                "step": "$-20x = -100$",
                "reason": "Elimination: taking the second equation in $x$ and $y$ from the last line cancels the terms in $y$."
              },
              {
                "step": "$x = 5$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-20$ leaves $x$ alone."
              },
              {
                "step": "$-25 - 5y = -55$",
                "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the first equation in $x$ and $y$, and $-5 \\cdot 5 = -25$."
              },
              {
                "step": "$-5y = -30$",
                "reason": "Adding the same number to both sides: adding $25$ to both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $y$ alone."
              },
              {
                "step": "$-38 + 3z = -26$",
                "reason": "Back-substitution: the values of $x$ and $y$ go in place of $x$ and $y$ in the first equation, and $-4 \\cdot 5 + (-3) \\cdot 6 = -38$."
              },
              {
                "step": "$3z = 12$",
                "reason": "Adding the same number to both sides: adding $38$ to both sides leaves the term in $z$ alone."
              },
              {
                "step": "$z = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $z$ alone."
              },
              {
                "step": "$x = 5$, $y = 6$, $z = 4$",
                "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $-4x + 4y - 4z = 28$, $2x + 2y - 4z = 16$ and $x - 5y - 2z = 8$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -2, y = 0, z = -5",
              "lines": [
                {
                  "step": "Solve the system $-4x + 4y - 4z = 28$, $2x + 2y - 4z = 16$ and $x - 5y - 2z = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x + 2y = 12$",
                  "reason": "Elimination: taking the second equation from the first cancels the terms in $z$, which reduces the number of variables to two."
                },
                {
                  "step": "$2x - 10y - 4z = 16$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the third equation by $2$ gives a term in $z$ of the same size as in the first equation."
                },
                {
                  "step": "$-6x + 14y = 12$",
                  "reason": "Elimination: taking that equation from the first cancels the terms in $z$, which leaves a second equation in $x$ and $y$."
                },
                {
                  "step": "$-42x + 14y = 84$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $x$ and $y$ by $7$ gives a term in $y$ of the same size as in the second."
                },
                {
                  "step": "$-36x = 72$",
                  "reason": "Elimination: taking the second equation in $x$ and $y$ from the last line cancels the terms in $y$."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-36$ leaves $x$ alone."
                },
                {
                  "step": "$12 + 2y = 12$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the first equation in $x$ and $y$, and $-6 \\cdot (-2) = 12$."
                },
                {
                  "step": "$2y = 0$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 0$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $y$ alone."
                },
                {
                  "step": "$8 - 4z = 28$",
                  "reason": "Back-substitution: the values of $x$ and $y$ go in place of $x$ and $y$ in the first equation, and $-4 \\cdot (-2) + 4 \\cdot 0 = 8$."
                },
                {
                  "step": "$-4z = 20$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides leaves the term in $z$ alone."
                },
                {
                  "step": "$z = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $z$ alone."
                },
                {
                  "step": "$x = -2$, $y = 0$, $z = -5$",
                  "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $3x + 4y - 2z = 33$, $5x + 3y + 2z = 19$ and $-5x + 5y + z = 1$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 3, y = 4, z = -4",
              "lines": [
                {
                  "step": "Solve the system $3x + 4y - 2z = 33$, $5x + 3y + 2z = 19$ and $-5x + 5y + z = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8x + 7y = 52$",
                  "reason": "Elimination: adding the first and second equations cancels the terms in $z$, which reduces the number of variables to two."
                },
                {
                  "step": "$-10x + 10y + 2z = 2$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the third equation by $2$ gives a term in $z$ of the same size as in the first equation."
                },
                {
                  "step": "$-7x + 14y = 35$",
                  "reason": "Elimination: adding that equation to the first cancels the terms in $z$, which leaves a second equation in $x$ and $y$."
                },
                {
                  "step": "$16x + 14y = 104$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $x$ and $y$ by $2$ gives a term in $y$ of the same size as in the second."
                },
                {
                  "step": "$23x = 69$",
                  "reason": "Elimination: taking the second equation in $x$ and $y$ from the last line cancels the terms in $y$."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $23$ leaves $x$ alone."
                },
                {
                  "step": "$24 + 7y = 52$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the first equation in $x$ and $y$, and $8 \\cdot 3 = 24$."
                },
                {
                  "step": "$7y = 28$",
                  "reason": "Adding the same number to both sides: adding $-24$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $y$ alone."
                },
                {
                  "step": "$25 - 2z = 33$",
                  "reason": "Back-substitution: the values of $x$ and $y$ go in place of $x$ and $y$ in the first equation, and $3 \\cdot 3 + 4 \\cdot 4 = 25$."
                },
                {
                  "step": "$-2z = 8$",
                  "reason": "Adding the same number to both sides: adding $-25$ to both sides leaves the term in $z$ alone."
                },
                {
                  "step": "$z = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $z$ alone."
                },
                {
                  "step": "$x = 3$, $y = 4$, $z = -4$",
                  "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $5x + 2y + 4z = 6$, $-2x - y + 4z = 2$ and $-x + 2y - 2z = 12$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -2, y = 6, z = 1",
              "lines": [
                {
                  "step": "Solve the system $5x + 2y + 4z = 6$, $-2x - y + 4z = 2$ and $-x + 2y - 2z = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x + 3y = 4$",
                  "reason": "Elimination: taking the second equation from the first cancels the terms in $z$, which reduces the number of variables to two."
                },
                {
                  "step": "$-2x + 4y - 4z = 24$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the third equation by $2$ gives a term in $z$ of the same size as in the first equation."
                },
                {
                  "step": "$3x + 6y = 30$",
                  "reason": "Elimination: adding that equation to the first cancels the terms in $z$, which leaves a second equation in $x$ and $y$."
                },
                {
                  "step": "$14x + 6y = 8$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $x$ and $y$ by $2$ gives a term in $y$ of the same size as in the second."
                },
                {
                  "step": "$11x = -22$",
                  "reason": "Elimination: taking the second equation in $x$ and $y$ from the last line cancels the terms in $y$."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $11$ leaves $x$ alone."
                },
                {
                  "step": "$-14 + 3y = 4$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the first equation in $x$ and $y$, and $7 \\cdot (-2) = -14$."
                },
                {
                  "step": "$3y = 18$",
                  "reason": "Adding the same number to both sides: adding $14$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $y$ alone."
                },
                {
                  "step": "$2 + 4z = 6$",
                  "reason": "Back-substitution: the values of $x$ and $y$ go in place of $x$ and $y$ in the first equation, and $5 \\cdot (-2) + 2 \\cdot 6 = 2$."
                },
                {
                  "step": "$4z = 4$",
                  "reason": "Adding the same number to both sides: adding $-2$ to both sides leaves the term in $z$ alone."
                },
                {
                  "step": "$z = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $z$ alone."
                },
                {
                  "step": "$x = -2$, $y = 6$, $z = 1$",
                  "reason": "Ordered triple: the value of $x$ comes first, $y$ second and $z$ third, and the three values solve all three equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the solutions of the system $2x - 3y + z = -9$ and $-2x - 3y - 3z = -2$ in parametric form with $z = t$, and answer with $x$ in terms of $t$.",
            "lines": [
              {
                "step": "Write the solutions of the system $2x - 3y + z = -9$ and $-2x - 3y - 3z = -2$ in parametric form with $z = t$, and answer with $x$ in terms of $t$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x + 4z = -7$",
                "reason": "Reducing the number of variables: taking the second equation from the first cancels the terms in $y$ and leaves one equation in $x$ and $z$."
              },
              {
                "step": "$4x + 4t = -7$",
                "reason": "Parametric form of a solution set: two equations in three unknowns leave infinitely many solutions, and the parameter $t$ takes the place of $z$."
              },
              {
                "step": "$4x = -7 - 4t$",
                "reason": "Adding the same number to both sides: adding $-4t$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = \\dfrac{-7 - 4t}{4}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $x$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the solutions of the system $4x - y + 5z = -5$ and $-2x + y - 4z = 2$ in parametric form with $z = t$, and answer with $x$ in terms of $t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (-3-t)/2",
              "lines": [
                {
                  "step": "Write the solutions of the system $4x - y + 5z = -5$ and $-2x + y - 4z = 2$ in parametric form with $z = t$, and answer with $x$ in terms of $t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + z = -3$",
                  "reason": "Reducing the number of variables: adding the two equations cancels the terms in $y$ and leaves one equation in $x$ and $z$."
                },
                {
                  "step": "$2x + t = -3$",
                  "reason": "Parametric form of a solution set: two equations in three unknowns leave infinitely many solutions, and the parameter $t$ takes the place of $z$."
                },
                {
                  "step": "$2x = -3 - t$",
                  "reason": "Adding the same number to both sides: adding $-t$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{-3 - t}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Write the solutions of the system $3x - 2y - 3z = 10$ and $-4x - 2y + 5z = -12$ in parametric form with $z = t$, and answer with $x$ in terms of $t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "x = (22+8*t)/7",
              "lines": [
                {
                  "step": "Write the solutions of the system $3x - 2y - 3z = 10$ and $-4x - 2y + 5z = -12$ in parametric form with $z = t$, and answer with $x$ in terms of $t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x - 8z = 22$",
                  "reason": "Reducing the number of variables: taking the second equation from the first cancels the terms in $y$ and leaves one equation in $x$ and $z$."
                },
                {
                  "step": "$7x - 8t = 22$",
                  "reason": "Parametric form of a solution set: two equations in three unknowns leave infinitely many solutions, and the parameter $t$ takes the place of $z$."
                },
                {
                  "step": "$7x = 22 + 8t$",
                  "reason": "Adding the same number to both sides: adding $8t$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = \\dfrac{22 + 8t}{7}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Write the solutions of the system $x + y + 3z = 10$ and $x + 3y + z = 4$ in parametric form with $z = t$, and answer with $y$ in terms of $t$.",
              "form": "Answer as the subject = an expression, as in y = (3-2*x)/4.",
              "answer": "y = -3+t",
              "lines": [
                {
                  "step": "Write the solutions of the system $x + y + 3z = 10$ and $x + 3y + z = 4$ in parametric form with $z = t$, and answer with $y$ in terms of $t$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2y + 2z = 6$",
                  "reason": "Reducing the number of variables: taking the second equation from the first cancels the terms in $x$ and leaves one equation in $y$ and $z$."
                },
                {
                  "step": "$-2y + 2t = 6$",
                  "reason": "Parametric form of a solution set: two equations in three unknowns leave infinitely many solutions, and the parameter $t$ takes the place of $z$."
                },
                {
                  "step": "$-2y = 6 - 2t$",
                  "reason": "Adding the same number to both sides: adding $-2t$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -3 + t$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $y$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t117-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $-x - y - 3z$, given that $3x + y - 3z = -11$ and $-2x - y = -3$.",
            "lines": [
              {
                "step": "Find the value of $-x - y - 3z$, given that $3x + y - 3z = -11$ and $-2x - y = -3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4x - 2y = -6$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $2$ gives the terms the first equation lacks."
              },
              {
                "step": "$3x + y - 3z - 4x - 2y = -11 - 6$",
                "reason": "Adding two equations: adding the last line to the first equation keeps the two sides equal."
              },
              {
                "step": "$-x - y - 3z = -17$",
                "reason": "Collecting like terms: the terms in each letter are added, and so are the numbers on the right."
              },
              {
                "step": "The value of $-x - y - 3z$ is $-17$.",
                "reason": "Finding only what is asked: the combination is found without the value of each unknown."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $-2y - 3z$, given that $8x + 2y + 5z = 50$ and $-2x - y - 2z = -18$.",
              "form": "Answer as an integer.",
              "answer": "-22",
              "lines": [
                {
                  "step": "Find the value of $-2y - 3z$, given that $8x + 2y + 5z = 50$ and $-2x - y - 2z = -18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8x - 4y - 8z = -72$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $4$ gives the terms the first equation lacks."
                },
                {
                  "step": "$8x + 2y + 5z - 8x - 4y - 8z = 50 - 72$",
                  "reason": "Adding two equations: adding the last line to the first equation keeps the two sides equal."
                },
                {
                  "step": "$-2y - 3z = -22$",
                  "reason": "Collecting like terms: the terms in each letter are added, and so are the numbers on the right."
                },
                {
                  "step": "The value of $-2y - 3z$ is $-22$.",
                  "reason": "Finding only what is asked: the combination is found without the value of each unknown."
                }
              ]
            },
            {
              "prompt": "Find the value of $-3x - z$, given that $3x + 2y - 7z = 8$ and $-3x - y + 3z = -11$.",
              "form": "Answer as an integer.",
              "answer": "-14",
              "lines": [
                {
                  "step": "Find the value of $-3x - z$, given that $3x + 2y - 7z = 8$ and $-3x - y + 3z = -11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x - 2y + 6z = -22$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $2$ gives the terms the first equation lacks."
                },
                {
                  "step": "$3x + 2y - 7z - 6x - 2y + 6z = 8 - 22$",
                  "reason": "Adding two equations: adding the last line to the first equation keeps the two sides equal."
                },
                {
                  "step": "$-3x - z = -14$",
                  "reason": "Collecting like terms: the terms in each letter are added, and so are the numbers on the right."
                },
                {
                  "step": "The value of $-3x - z$ is $-14$.",
                  "reason": "Finding only what is asked: the combination is found without the value of each unknown."
                }
              ]
            },
            {
              "prompt": "Find the value of $3x + 3y - 3z$, given that $6x - 6y + 3z = 18$ and $-x + 3y - 2z = -10$.",
              "form": "Answer as an integer.",
              "answer": "-12",
              "lines": [
                {
                  "step": "Find the value of $3x + 3y - 3z$, given that $6x - 6y + 3z = 18$ and $-x + 3y - 2z = -10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3x + 9y - 6z = -30$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the second equation by $3$ gives the terms the first equation lacks."
                },
                {
                  "step": "$6x - 6y + 3z - 3x + 9y - 6z = 18 - 30$",
                  "reason": "Adding two equations: adding the last line to the first equation keeps the two sides equal."
                },
                {
                  "step": "$3x + 3y - 3z = -12$",
                  "reason": "Collecting like terms: the terms in each letter are added, and so are the numbers on the right."
                },
                {
                  "step": "The value of $3x + 3y - 3z$ is $-12$.",
                  "reason": "Finding only what is asked: the combination is found without the value of each unknown."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $2x + 4y + 2z$, given that $2x + 4y = -16$, $4y + 2z = -12$ and $2z + 2x = -12$.",
            "lines": [
              {
                "step": "Find the value of $2x + 4y + 2z$, given that $2x + 4y = -16$, $4y + 2z = -12$ and $2z + 2x = -12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x + 8y + 2z = -28$",
                "reason": "Adding two equations: adding the first and second equations, the terms in $y$ appear twice on the left, and $-16 - 12 = -28$ on the right."
              },
              {
                "step": "$4x + 8y + 4z = -40$",
                "reason": "Adding two equations: adding the third equation to the last line, each of the terms in $x$, $y$ and $z$ appears twice on the left, and $-28 - 12 = -40$ on the right."
              },
              {
                "step": "$2x + 4y + 2z = -20$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves the combination asked for."
              },
              {
                "step": "The value of $2x + 4y + 2z$ is $-20$.",
                "reason": "Finding only what is asked: the combination is found without the value of each unknown."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $4x - 3y - 2z$, given that $4x - 3y = -6$, $-3y - 2z = -22$ and $-2z + 4x = 8$.",
              "form": "Answer as an integer.",
              "answer": "-10",
              "lines": [
                {
                  "step": "Find the value of $4x - 3y - 2z$, given that $4x - 3y = -6$, $-3y - 2z = -22$ and $-2z + 4x = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x - 6y - 2z = -28$",
                  "reason": "Adding two equations: adding the first and second equations, the terms in $y$ appear twice on the left, and $-6 - 22 = -28$ on the right."
                },
                {
                  "step": "$8x - 6y - 4z = -20$",
                  "reason": "Adding two equations: adding the third equation to the last line, each of the terms in $x$, $y$ and $z$ appears twice on the left, and $-28 + 8 = -20$ on the right."
                },
                {
                  "step": "$4x - 3y - 2z = -10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves the combination asked for."
                },
                {
                  "step": "The value of $4x - 3y - 2z$ is $-10$.",
                  "reason": "Finding only what is asked: the combination is found without the value of each unknown."
                }
              ]
            },
            {
              "prompt": "Find the value of $5x - 4y + 2z$, given that $5x - 4y = -11$, $-4y + 2z = 14$ and $2z + 5x = -5$.",
              "form": "Answer as an integer.",
              "answer": "-1",
              "lines": [
                {
                  "step": "Find the value of $5x - 4y + 2z$, given that $5x - 4y = -11$, $-4y + 2z = 14$ and $2z + 5x = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x - 8y + 2z = 3$",
                  "reason": "Adding two equations: adding the first and second equations, the terms in $y$ appear twice on the left, and $-11 + 14 = 3$ on the right."
                },
                {
                  "step": "$10x - 8y + 4z = -2$",
                  "reason": "Adding two equations: adding the third equation to the last line, each of the terms in $x$, $y$ and $z$ appears twice on the left, and $3 - 5 = -2$ on the right."
                },
                {
                  "step": "$5x - 4y + 2z = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves the combination asked for."
                },
                {
                  "step": "The value of $5x - 4y + 2z$ is $-1$.",
                  "reason": "Finding only what is asked: the combination is found without the value of each unknown."
                }
              ]
            },
            {
              "prompt": "Find the value of $4x + 4y + 5z$, given that $4x + 4y = 28$, $4y + 5z = 15$ and $5z + 4x = 3$.",
              "form": "Answer as an integer.",
              "answer": "23",
              "lines": [
                {
                  "step": "Find the value of $4x + 4y + 5z$, given that $4x + 4y = 28$, $4y + 5z = 15$ and $5z + 4x = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 8y + 5z = 43$",
                  "reason": "Adding two equations: adding the first and second equations, the terms in $y$ appear twice on the left, and $28 + 15 = 43$ on the right."
                },
                {
                  "step": "$8x + 8y + 10z = 46$",
                  "reason": "Adding two equations: adding the third equation to the last line, each of the terms in $x$, $y$ and $z$ appears twice on the left, and $43 + 3 = 46$ on the right."
                },
                {
                  "step": "$4x + 4y + 5z = 23$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves the combination asked for."
                },
                {
                  "step": "The value of $4x + 4y + 5z$ is $23$.",
                  "reason": "Finding only what is asked: the combination is found without the value of each unknown."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $k_1$, where the third equation of the system $4x + 2y + 4z = 2$, $2x - 4y - 2z = 3$ and $-6x - 18y - 18z = 3$ is $k_1$ times the first plus $k_2$ times the second.",
            "lines": [
              {
                "step": "Find $k_1$, where the third equation of the system $4x + 2y + 4z = 2$, $2x - 4y - 2z = 3$ and $-6x - 18y - 18z = 3$ is $k_1$ times the first plus $k_2$ times the second.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4k_1 + 2k_2 = -6$",
                "reason": "Collecting like terms: the terms in $x$ of $k_1$ times the first equation and $k_2$ times the second add to the term in $x$ of the third."
              },
              {
                "step": "$2k_1 - 4k_2 = -18$",
                "reason": "Collecting like terms: in the same way, the terms in $y$ add to the term in $y$ of the third equation."
              },
              {
                "step": "$-8k_1 - 4k_2 = 12$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the equation for the terms in $x$ by $-2$ gives the same term in $k_2$ as in the equation for the terms in $y$."
              },
              {
                "step": "$10k_1 = -30$",
                "reason": "Elimination: taking the last line from the equation for the terms in $y$ cancels the terms in $k_2$."
              },
              {
                "step": "$k_1 = -3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ leaves $k_1$ alone."
              },
              {
                "step": "$-12 + 2k_2 = -6$",
                "reason": "Back-substitution: the value of $k_1$ goes in place of $k_1$ in the equation for the terms in $x$, and $4 \\cdot (-3) = -12$."
              },
              {
                "step": "$2k_2 = 6$",
                "reason": "Adding the same number to both sides: adding $12$ to both sides leaves the term in $k_2$ alone."
              },
              {
                "step": "$k_2 = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $k_2$ alone."
              },
              {
                "step": "$4 \\cdot (-3) + (-2) \\cdot 3 = -18$",
                "reason": "Checking a solution: the terms in $z$ of the combination add to the term in $z$ of the third equation."
              },
              {
                "step": "$2 \\cdot (-3) + 3 \\cdot 3 = 3$",
                "reason": "Checking a solution: the right sides of the combination add to the right side of the third equation."
              },
              {
                "step": "The value of $k_1$ is $-3$.",
                "reason": "Answering the question asked: the question asks for $k_1$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $k_2$, where the third equation of the system $-3x + 2y + 4z = 5$, $3x + 6y - 2z = -3$ and $6x - 20y - 12z = -14$ is $k_1$ times the first plus $k_2$ times the second.",
              "form": "Answer as an integer.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Find $k_2$, where the third equation of the system $-3x + 2y + 4z = 5$, $3x + 6y - 2z = -3$ and $6x - 20y - 12z = -14$ is $k_1$ times the first plus $k_2$ times the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3k_1 + 3k_2 = 6$",
                  "reason": "Collecting like terms: the terms in $x$ of $k_1$ times the first equation and $k_2$ times the second add to the term in $x$ of the third."
                },
                {
                  "step": "$2k_1 + 6k_2 = -20$",
                  "reason": "Collecting like terms: in the same way, the terms in $y$ add to the term in $y$ of the third equation."
                },
                {
                  "step": "$-6k_1 + 6k_2 = 12$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the equation for the terms in $x$ by $2$ gives the same term in $k_2$ as in the equation for the terms in $y$."
                },
                {
                  "step": "$8k_1 = -32$",
                  "reason": "Elimination: taking the last line from the equation for the terms in $y$ cancels the terms in $k_2$."
                },
                {
                  "step": "$k_1 = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $k_1$ alone."
                },
                {
                  "step": "$12 + 3k_2 = 6$",
                  "reason": "Back-substitution: the value of $k_1$ goes in place of $k_1$ in the equation for the terms in $x$, and $-3 \\cdot (-4) = 12$."
                },
                {
                  "step": "$3k_2 = -6$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $k_2$ alone."
                },
                {
                  "step": "$k_2 = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ leaves $k_2$ alone."
                },
                {
                  "step": "$4 \\cdot (-4) + (-2) \\cdot (-2) = -12$",
                  "reason": "Checking a solution: the terms in $z$ of the combination add to the term in $z$ of the third equation."
                },
                {
                  "step": "$5 \\cdot (-4) + (-3) \\cdot (-2) = -14$",
                  "reason": "Checking a solution: the right sides of the combination add to the right side of the third equation."
                },
                {
                  "step": "The value of $k_2$ is $-2$.",
                  "reason": "Answering the question asked: the question asks for $k_2$ alone."
                }
              ]
            },
            {
              "prompt": "Find $k_1$, where the third equation of the system $4x - 2y + 4z = 4$, $2x + 6y - 4z = 2$ and $20x + 18y - 4z = 20$ is $k_1$ times the first plus $k_2$ times the second.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find $k_1$, where the third equation of the system $4x - 2y + 4z = 4$, $2x + 6y - 4z = 2$ and $20x + 18y - 4z = 20$ is $k_1$ times the first plus $k_2$ times the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4k_1 + 2k_2 = 20$",
                  "reason": "Collecting like terms: the terms in $x$ of $k_1$ times the first equation and $k_2$ times the second add to the term in $x$ of the third."
                },
                {
                  "step": "$-2k_1 + 6k_2 = 18$",
                  "reason": "Collecting like terms: in the same way, the terms in $y$ add to the term in $y$ of the third equation."
                },
                {
                  "step": "$12k_1 + 6k_2 = 60$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the equation for the terms in $x$ by $3$ gives the same term in $k_2$ as in the equation for the terms in $y$."
                },
                {
                  "step": "$-14k_1 = -42$",
                  "reason": "Elimination: taking the last line from the equation for the terms in $y$ cancels the terms in $k_2$."
                },
                {
                  "step": "$k_1 = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-14$ leaves $k_1$ alone."
                },
                {
                  "step": "$12 + 2k_2 = 20$",
                  "reason": "Back-substitution: the value of $k_1$ goes in place of $k_1$ in the equation for the terms in $x$, and $4 \\cdot 3 = 12$."
                },
                {
                  "step": "$2k_2 = 8$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides leaves the term in $k_2$ alone."
                },
                {
                  "step": "$k_2 = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $k_2$ alone."
                },
                {
                  "step": "$4 \\cdot 3 + (-4) \\cdot 4 = -4$",
                  "reason": "Checking a solution: the terms in $z$ of the combination add to the term in $z$ of the third equation."
                },
                {
                  "step": "$4 \\cdot 3 + 2 \\cdot 4 = 20$",
                  "reason": "Checking a solution: the right sides of the combination add to the right side of the third equation."
                },
                {
                  "step": "The value of $k_1$ is $3$.",
                  "reason": "Answering the question asked: the question asks for $k_1$ alone."
                }
              ]
            },
            {
              "prompt": "Find $k_2$, where the third equation of the system $3x + 4y + 2z = -2$, $-2x - 6y - 3z = -8$ and $-2x + 4y + 2z = 20$ is $k_1$ times the first plus $k_2$ times the second.",
              "form": "Answer as an integer.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Find $k_2$, where the third equation of the system $3x + 4y + 2z = -2$, $-2x - 6y - 3z = -8$ and $-2x + 4y + 2z = 20$ is $k_1$ times the first plus $k_2$ times the second.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3k_1 - 2k_2 = -2$",
                  "reason": "Collecting like terms: the terms in $x$ of $k_1$ times the first equation and $k_2$ times the second add to the term in $x$ of the third."
                },
                {
                  "step": "$4k_1 - 6k_2 = 4$",
                  "reason": "Collecting like terms: in the same way, the terms in $y$ add to the term in $y$ of the third equation."
                },
                {
                  "step": "$9k_1 - 6k_2 = -6$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the equation for the terms in $x$ by $3$ gives the same term in $k_2$ as in the equation for the terms in $y$."
                },
                {
                  "step": "$-5k_1 = 10$",
                  "reason": "Elimination: taking the last line from the equation for the terms in $y$ cancels the terms in $k_2$."
                },
                {
                  "step": "$k_1 = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $k_1$ alone."
                },
                {
                  "step": "$-6 - 2k_2 = -2$",
                  "reason": "Back-substitution: the value of $k_1$ goes in place of $k_1$ in the equation for the terms in $x$, and $3 \\cdot (-2) = -6$."
                },
                {
                  "step": "$-2k_2 = 4$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides leaves the term in $k_2$ alone."
                },
                {
                  "step": "$k_2 = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $k_2$ alone."
                },
                {
                  "step": "$2 \\cdot (-2) + (-3) \\cdot (-2) = 2$",
                  "reason": "Checking a solution: the terms in $z$ of the combination add to the term in $z$ of the third equation."
                },
                {
                  "step": "$-2 \\cdot (-2) + (-8) \\cdot (-2) = 20$",
                  "reason": "Checking a solution: the right sides of the combination add to the right side of the third equation."
                },
                {
                  "step": "The value of $k_2$ is $-2$.",
                  "reason": "Answering the question asked: the question asks for $k_2$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t117-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the constants $a$ and $b$ for which $a(4x + 4) - 3 = 5x + b$ for every real number $x$, and answer with $b$.",
            "lines": [
              {
                "step": "Find the constants $a$ and $b$ for which $a(4x + 4) - 3 = 5x + b$ for every real number $x$, and answer with $b$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4ax + 4a - 3 = 5x + b$",
                "reason": "Multiplying out: the letter $a$ in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$4a = 5$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
              },
              {
                "step": "$a = \\dfrac{5}{4}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $a$ alone."
              },
              {
                "step": "$4a - 3 = b$",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms on the two sides are equal."
              },
              {
                "step": "$4\\left(\\dfrac{5}{4}\\right) - 3 = b$",
                "reason": "Back-substitution: the value of $a$ goes, in brackets, in place of $a$."
              },
              {
                "step": "$b = 2$",
                "reason": "Order of operations, then the symmetric property: the product comes first, and the two sides change places."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constants $a$ and $b$ for which $a(-2x + 5) + 2 = -6x + b$ for every real number $x$, and answer with $b$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 17",
              "lines": [
                {
                  "step": "Find the constants $a$ and $b$ for which $a(-2x + 5) + 2 = -6x + b$ for every real number $x$, and answer with $b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2ax + 5a + 2 = -6x + b$",
                  "reason": "Multiplying out: the letter $a$ in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-2a = -6$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $a$ alone."
                },
                {
                  "step": "$5a + 2 = b$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms on the two sides are equal."
                },
                {
                  "step": "$5(3) + 2 = b$",
                  "reason": "Back-substitution: the value of $a$ goes, in brackets, in place of $a$."
                },
                {
                  "step": "$b = 17$",
                  "reason": "Order of operations, then the symmetric property: the product comes first, and the two sides change places."
                }
              ]
            },
            {
              "prompt": "Find the constants $a$ and $b$ for which $a(4x + 5) - 8 = 16x + b$ for every real number $x$, and answer with $b$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 12",
              "lines": [
                {
                  "step": "Find the constants $a$ and $b$ for which $a(4x + 5) - 8 = 16x + b$ for every real number $x$, and answer with $b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4ax + 5a - 8 = 16x + b$",
                  "reason": "Multiplying out: the letter $a$ in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$4a = 16$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $a$ alone."
                },
                {
                  "step": "$5a - 8 = b$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms on the two sides are equal."
                },
                {
                  "step": "$5(4) - 8 = b$",
                  "reason": "Back-substitution: the value of $a$ goes, in brackets, in place of $a$."
                },
                {
                  "step": "$b = 12$",
                  "reason": "Order of operations, then the symmetric property: the product comes first, and the two sides change places."
                }
              ]
            },
            {
              "prompt": "Find the constants $a$ and $b$ for which $a(-3x + 3) + 5 = 12x + b$ for every real number $x$, and answer with $b$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -7",
              "lines": [
                {
                  "step": "Find the constants $a$ and $b$ for which $a(-3x + 3) + 5 = 12x + b$ for every real number $x$, and answer with $b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-3ax + 3a + 5 = 12x + b$",
                  "reason": "Multiplying out: the letter $a$ in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-3a = 12$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ leaves $a$ alone."
                },
                {
                  "step": "$3a + 5 = b$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms on the two sides are equal."
                },
                {
                  "step": "$3(-4) + 5 = b$",
                  "reason": "Back-substitution: the value of $a$ goes, in brackets, in place of $a$."
                },
                {
                  "step": "$b = -7$",
                  "reason": "Order of operations, then the symmetric property: the product comes first, and the two sides change places."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t117-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of the system $x - y + 5z = 29$, $-5x - 5y + 5z = -15$ and $-x + 3y + 5z = 25$, and write that line right.",
            "given": [
              "$(x - y + 5z) - (-5x - 5y + 5z) = 29 - (-15)$",
              "$-4x + 4y = 44$",
              "$(x - y + 5z) - (-x + 3y + 5z) = 29 - 25$",
              "$2x - 4y = 4$",
              "$-2x = 48$",
              "$x = -24$",
              "$96 + 4y = 44$",
              "$4y = -52$",
              "$y = -13$",
              "$-11 + 5z = 29$",
              "$5z = 40$",
              "$z = 8$"
            ],
            "lines": [
              {
                "step": "The working solves the system $x - y + 5z = 29$, $-5x - 5y + 5z = -15$ and $-x + 3y + 5z = 25$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes $(-5x - 5y + 5z)$ away from $(x - y + 5z)$ and writes $-4x$ for the terms in $x$.",
                "reason": "A sign is lost: subtracting a bracket changes every sign in it, so $x - (-5x) = 6x$."
              },
              {
                "step": "Line 2 written right is $6x + 4y = 44$.",
                "reason": "Subtracting a bracket changes every sign in it, and the terms in $z$ cancel."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of the system $3x + y + 2z = 6$, $-x - 3y + 2z = -18$ and $-5x + 5y + 2z = -18$, and write that line right.",
              "given": [
                "$(3x + y + 2z) - (-x - 3y + 2z) = 6 - (-18)$",
                "$4x + 4y = 24$",
                "$(3x + y + 2z) - (-5x + 5y + 2z) = 6 - (-18)$",
                "$8x - 4y = -12$",
                "$12x = 12$",
                "$x = 1$",
                "$4 + 4y = 24$",
                "$4y = 20$",
                "$y = 5$",
                "$8 + 2z = 6$",
                "$2z = -2$",
                "$z = -1$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8*x-4*y = 24",
              "lines": [
                {
                  "step": "The working solves the system $3x + y + 2z = 6$, $-x - 3y + 2z = -18$ and $-5x + 5y + 2z = -18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $-12$ on the right for $6 - (-18)$, the right side of line 3.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, so $6 - (-18) = 24$."
                },
                {
                  "step": "Line 4 written right is $8x - 4y = 24$.",
                  "reason": "Subtracting a bracket changes every sign in it, and the terms in $z$ cancel."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $-5x - y + 3z = -11$, $-3x + 3y + 3z = -9$ and $-x - 5y + 3z = 5$, and write that line right.",
              "given": [
                "$(-5x - y + 3z) - (-3x + 3y + 3z) = -11 - (-9)$",
                "$-2x - 4y = -20$",
                "$(-5x - y + 3z) - (-x - 5y + 3z) = -11 - 5$",
                "$-4x + 4y = -16$",
                "$-6x = -36$",
                "$x = 6$",
                "$-12 - 4y = -20$",
                "$-4y = -8$",
                "$y = 2$",
                "$-32 + 3z = -11$",
                "$3z = 21$",
                "$z = 7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -2*x-4*y = -2",
              "lines": [
                {
                  "step": "The working solves the system $-5x - y + 3z = -11$, $-3x + 3y + 3z = -9$ and $-x - 5y + 3z = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $-20$ on the right for $-11 - (-9)$, the right side of line 1.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, so $-11 - (-9) = -2$."
                },
                {
                  "step": "Line 2 written right is $-2x - 4y = -2$.",
                  "reason": "Subtracting a bracket changes every sign in it, and the terms in $z$ cancel."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $2x + 2y + 4z = -26$, $-5x - 5y + 4z = 9$ and $-5x + 9y + 4z = -33$, and write that line right.",
              "given": [
                "$(2x + 2y + 4z) - (-5x - 5y + 4z) = -26 - 9$",
                "$7x + 7y = -35$",
                "$(2x + 2y + 4z) - (-5x + 9y + 4z) = -26 - (-33)$",
                "$-3x - 7y = 7$",
                "$4x = -28$",
                "$x = -7$",
                "$-49 + 7y = -35$",
                "$7y = 14$",
                "$y = 2$",
                "$-10 + 4z = -26$",
                "$4z = -16$",
                "$z = -4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 7*x-7*y = 7",
              "lines": [
                {
                  "step": "The working solves the system $2x + 2y + 4z = -26$, $-5x - 5y + 4z = 9$ and $-5x + 9y + 4z = -33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $(-5x + 9y + 4z)$ away from $(2x + 2y + 4z)$ and writes $-3x$ for the terms in $x$.",
                  "reason": "A sign is lost: subtracting a bracket changes every sign in it, so $2x - (-5x) = 7x$."
                },
                {
                  "step": "Line 4 written right is $7x - 7y = 7$.",
                  "reason": "Subtracting a bracket changes every sign in it, and the terms in $z$ cancel."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of the system $2x - 3y - 2z = 14$, $-5x - 5y - 2z = 4$ and $-4x - y - 2z = -2$, and write that line right.",
            "given": [
              "$(2x - 3y - 2z) - (-5x - 5y - 2z) = 14 - 4$",
              "$7x + 2y = 10$",
              "$(2x - 3y - 2z) - (-4x - y - 2z) = 14 - (-2)$",
              "$6x - 2y = 16$",
              "$13x = 26$",
              "$x = 2$",
              "$14 + 2y = 10$",
              "$2y = 24$",
              "$y = 12$",
              "$-32 - 2z = 14$",
              "$-2z = 46$",
              "$z = -23$"
            ],
            "lines": [
              {
                "step": "The working solves the system $2x - 3y - 2z = 14$, $-5x - 5y - 2z = 4$ and $-4x - y - 2z = -2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 8 moves $14$ from the left side to the right side and writes $10 + 14$ there.",
                "reason": "A sign is lost: adding the same number to both sides, here $-14$, leaves $10 - 14 = -4$ on the right."
              },
              {
                "step": "Line 8 written right is $2y = -4$.",
                "reason": "Adding the same number to both sides keeps the two sides equal and leaves the term in $y$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of the system $-3x + 4y + 2z = -30$, $-x + 2y + 2z = -18$ and $-x + 6y + 2z = -34$, and write that line right.",
              "given": [
                "$(-3x + 4y + 2z) - (-x + 2y + 2z) = -30 - (-18)$",
                "$-2x + 2y = -12$",
                "$(-3x + 4y + 2z) - (-x + 6y + 2z) = -30 - (-34)$",
                "$-2x - 2y = 4$",
                "$-4x = -8$",
                "$x = 2$",
                "$-4 + 2y = -12$",
                "$2y = -8$",
                "$y = -4$",
                "$-22 + 2z = -30$",
                "$2z = -52$",
                "$z = -26$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 11: 2*z = -8",
              "lines": [
                {
                  "step": "The working solves the system $-3x + 4y + 2z = -30$, $-x + 2y + 2z = -18$ and $-x + 6y + 2z = -34$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 11 moves $-22$ from the left side to the right side and writes $-30 - 22$ there.",
                  "reason": "A sign is lost: adding the same number to both sides, here $22$, leaves $-30 + 22 = -8$ on the right."
                },
                {
                  "step": "Line 11 written right is $2z = -8$.",
                  "reason": "Adding the same number to both sides keeps the two sides equal and leaves the term in $z$ alone."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $4x - 2y + 2z = 24$, $-x + 4y + 2z = -12$ and $-3x - 8y + 2z = -12$, and write that line right.",
              "given": [
                "$(4x - 2y + 2z) - (-x + 4y + 2z) = 24 - (-12)$",
                "$5x - 6y = 36$",
                "$(4x - 2y + 2z) - (-3x - 8y + 2z) = 24 - (-12)$",
                "$7x + 6y = 36$",
                "$12x = 72$",
                "$x = 6$",
                "$30 - 6y = 36$",
                "$-6y = 66$",
                "$y = -11$",
                "$46 + 2z = 24$",
                "$2z = -22$",
                "$z = -11$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: -6*y = 6",
              "lines": [
                {
                  "step": "The working solves the system $4x - 2y + 2z = 24$, $-x + 4y + 2z = -12$ and $-3x - 8y + 2z = -12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 8 moves $30$ from the left side to the right side and writes $36 + 30$ there.",
                  "reason": "A sign is lost: adding the same number to both sides, here $-30$, leaves $36 - 30 = 6$ on the right."
                },
                {
                  "step": "Line 8 written right is $-6y = 6$.",
                  "reason": "Adding the same number to both sides keeps the two sides equal and leaves the term in $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $6x - 4y + 4z = -24$, $-x + y + 4z = 24$ and $-x - 9y + 4z = -16$, and write that line right.",
              "given": [
                "$(6x - 4y + 4z) - (-x + y + 4z) = -24 - 24$",
                "$7x - 5y = -48$",
                "$(6x - 4y + 4z) - (-x - 9y + 4z) = -24 - (-16)$",
                "$7x + 5y = -8$",
                "$14x = -56$",
                "$x = -4$",
                "$-28 - 5y = -48$",
                "$-5y = -20$",
                "$y = 4$",
                "$-40 + 4z = -24$",
                "$4z = -64$",
                "$z = -16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 11: 4*z = 16",
              "lines": [
                {
                  "step": "The working solves the system $6x - 4y + 4z = -24$, $-x + y + 4z = 24$ and $-x - 9y + 4z = -16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 11 moves $-40$ from the left side to the right side and writes $-24 - 40$ there.",
                  "reason": "A sign is lost: adding the same number to both sides, here $40$, leaves $-24 + 40 = 16$ on the right."
                },
                {
                  "step": "Line 11 written right is $4z = 16$.",
                  "reason": "Adding the same number to both sides keeps the two sides equal and leaves the term in $z$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t117-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation in $x$, $y$ and $z$ that fact 3 gives, where $x$ is the price of a pen in cents, $y$ is the price of a pencil in cents and $z$ is the price of an eraser in cents. Fact 1: A pen, a pencil and an eraser cost 150 cents together. Fact 2: A pen costs twice as much as a pencil. Fact 3: Two erasers cost 20 cents more than a pencil.",
            "lines": [
              {
                "step": "Write the equation in $x$, $y$ and $z$ that fact 3 gives, where $x$ is the price of a pen in cents, $y$ is the price of a pencil in cents and $z$ is the price of an eraser in cents. Fact 1: A pen, a pencil and an eraser cost 150 cents together. Fact 2: A pen costs twice as much as a pencil. Fact 3: Two erasers cost 20 cents more than a pencil.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Two erasers cost $2z$ cents, and 20 cents more than a pencil is $y + 20$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$, $y$ and $z$ as the prompt defines them."
              },
              {
                "step": "$2z = y + 20$",
                "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation in $x$, $y$ and $z$ that fact 2 gives, where $x$ is the first of three numbers, $y$ is the second and $z$ is the third. Fact 1: The three numbers add to 40. Fact 2: The third number is 5 more than the sum of the first two. Fact 3: The second number less 3 is twice the first.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x+y+5",
              "lines": [
                {
                  "step": "Write the equation in $x$, $y$ and $z$ that fact 2 gives, where $x$ is the first of three numbers, $y$ is the second and $z$ is the third. Fact 1: The three numbers add to 40. Fact 2: The third number is 5 more than the sum of the first two. Fact 3: The second number less 3 is twice the first.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the first two numbers is $x + y$, and 5 more is $x + y + 5$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$, $y$ and $z$ as the prompt defines them."
                },
                {
                  "step": "$z = x + y + 5$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write the equation in $x$, $y$ and $z$ that fact 2 gives, where $x$ is Ana's age in years, $y$ is Bea's age in years and $z$ is Cleo's age in years. Fact 1: Ana is 4 years older than Bea. Fact 2: Cleo is half as old as Ana. Fact 3: The three ages add to 41.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x/2",
              "lines": [
                {
                  "step": "Write the equation in $x$, $y$ and $z$ that fact 2 gives, where $x$ is Ana's age in years, $y$ is Bea's age in years and $z$ is Cleo's age in years. Fact 1: Ana is 4 years older than Bea. Fact 2: Cleo is half as old as Ana. Fact 3: The three ages add to 41.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half of Ana's age is $\\dfrac{x}{2}$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$, $y$ and $z$ as the prompt defines them."
                },
                {
                  "step": "$z = \\dfrac{x}{2}$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write the equation in $x$, $y$ and $z$ that fact 2 gives, where $x$ is the number of 10-cent coins in a box, $y$ is the number of 20-cent coins and $z$ is the number of 50-cent coins. Fact 1: The box holds 30 coins. Fact 2: The coins are worth 900 cents. Fact 3: There are 4 more 20-cent coins than 50-cent coins.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "10*x+20*y+50*z = 900",
              "lines": [
                {
                  "step": "Write the equation in $x$, $y$ and $z$ that fact 2 gives, where $x$ is the number of 10-cent coins in a box, $y$ is the number of 20-cent coins and $z$ is the number of 50-cent coins. Fact 1: The box holds 30 coins. Fact 2: The coins are worth 900 cents. Fact 3: There are 4 more 20-cent coins than 50-cent coins.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The 10-cent coins are worth $10x$ cents, the 20-cent coins $20y$ and the 50-cent coins $50z$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$, $y$ and $z$ as the prompt defines them."
                },
                {
                  "step": "$10x + 20y + 50z = 900$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t117-k6",
      "forms": [
        {
          "example": {
            "problem": "Find how many solutions $(x, y, z)$ the system $x + 4y - 4z = 4$, $3x + 10y - 10z = 6$ and $3x + 8y - 8z = -1$ has.",
            "lines": [
              {
                "step": "Find how many solutions $(x, y, z)$ the system $x + 4y - 4z = 4$, $3x + 10y - 10z = 6$ and $3x + 8y - 8z = -1$ has.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-2y + 2z = -6$",
                "reason": "Elimination: taking $3$ times the first equation from the second cancels the terms in $x$, which reduces the number of variables to two."
              },
              {
                "step": "$-4y + 4z = -13$",
                "reason": "Elimination: taking $3$ times the first equation from the third cancels the terms in $x$ and leaves a second equation in $y$ and $z$."
              },
              {
                "step": "$-4y + 4z = -12$",
                "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $y$ and $z$ by $2$ gives the same term in $y$ as in the second."
              },
              {
                "step": "The left side becomes $0$ and the right side $-1$.",
                "reason": "Elimination: taking the last line from the second equation in $y$ and $z$ cancels the terms in $y$ and in $z$."
              },
              {
                "step": "The system has no solution.",
                "reason": "A system has none, one, or infinitely many solutions: every solution of the system would make the left side, $0$, equal $-1$, and no values do that, so there are none."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many solutions $(x, y, z)$ the system $x + 3y + 4z = 5$, $2x + 8y + 5z = 5$ and $2x + 10y + 2z = 0$ has.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "Infinitely many",
              "lines": [
                {
                  "step": "Find how many solutions $(x, y, z)$ the system $x + 3y + 4z = 5$, $2x + 8y + 5z = 5$ and $2x + 10y + 2z = 0$ has.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y - 3z = -5$",
                  "reason": "Elimination: taking $2$ times the first equation from the second cancels the terms in $x$, which reduces the number of variables to two."
                },
                {
                  "step": "$4y - 6z = -10$",
                  "reason": "Elimination: taking $2$ times the first equation from the third cancels the terms in $x$ and leaves a second equation in $y$ and $z$."
                },
                {
                  "step": "Multiplying the first equation in $y$ and $z$ by $2$ gives the second equation in $y$ and $z$ again.",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $y$ and $z$ by $2$ gives the same term in $y$ as in the second."
                },
                {
                  "step": "Both sides become $0$.",
                  "reason": "Elimination: taking the last line from the second equation in $y$ and $z$ cancels the terms in $y$ and in $z$."
                },
                {
                  "step": "The system has infinitely many solutions.",
                  "reason": "A system has none, one, or infinitely many solutions: the two equations in $y$ and $z$ are one equation, which leaves two equations in three unknowns, and a parameter for $z$ gives infinitely many solutions."
                }
              ]
            },
            {
              "prompt": "Find how many solutions $(x, y, z)$ the system $x + 2y - 3z = -4$, $-2x - 6y + 8z = 3$ and $-2x - 10y + 8z = -11$ has.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Find how many solutions $(x, y, z)$ the system $x + 2y - 3z = -4$, $-2x - 6y + 8z = 3$ and $-2x - 10y + 8z = -11$ has.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2y + 2z = -5$",
                  "reason": "Elimination: taking $-2$ times the first equation from the second cancels the terms in $x$, which reduces the number of variables to two."
                },
                {
                  "step": "$-6y + 2z = -19$",
                  "reason": "Elimination: taking $-2$ times the first equation from the third cancels the terms in $x$ and leaves a second equation in $y$ and $z$."
                },
                {
                  "step": "$-6y + 6z = -15$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $y$ and $z$ by $3$ gives the same term in $y$ as in the second."
                },
                {
                  "step": "$-4z = -4$",
                  "reason": "Elimination: taking the last line from the second equation in $y$ and $z$ cancels the terms in $y$."
                },
                {
                  "step": "The system has exactly one solution.",
                  "reason": "A system has none, one, or infinitely many solutions: $-4z = -4$ gives one value of $z$, and back-substitution then gives one value of $y$ and one of $x$."
                }
              ]
            },
            {
              "prompt": "Find how many solutions $(x, y, z)$ the system $x + 3y + 2z = 1$, $-2x - 8y - 7z = -6$ and $2x + 2y - 2z = -11$ has.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Find how many solutions $(x, y, z)$ the system $x + 3y + 2z = 1$, $-2x - 8y - 7z = -6$ and $2x + 2y - 2z = -11$ has.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2y - 3z = -4$",
                  "reason": "Elimination: taking $-2$ times the first equation from the second cancels the terms in $x$, which reduces the number of variables to two."
                },
                {
                  "step": "$-4y - 6z = -13$",
                  "reason": "Elimination: taking $2$ times the first equation from the third cancels the terms in $x$ and leaves a second equation in $y$ and $z$."
                },
                {
                  "step": "$-4y - 6z = -8$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides of the first equation in $y$ and $z$ by $2$ gives the same term in $y$ as in the second."
                },
                {
                  "step": "The left side becomes $0$ and the right side $-5$.",
                  "reason": "Elimination: taking the last line from the second equation in $y$ and $z$ cancels the terms in $y$ and in $z$."
                },
                {
                  "step": "The system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: every solution of the system would make the left side, $0$, equal $-5$, and no values do that, so there are none."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t117-k7",
      "forms": [
        {
          "example": {
            "problem": "Find $x$, $y$ and $z$, where $x$ is the number of stickers Ana has, $y$ is the number Ben has and $z$ is the number Cal has. Ana, Ben and Cal have 126 stickers in all. Ben has 7 stickers more than Ana. Cal has 5 times as many stickers as Ana.",
            "lines": [
              {
                "step": "Find $x$, $y$ and $z$, where $x$ is the number of stickers Ana has, $y$ is the number Ben has and $z$ is the number Cal has. Ana, Ben and Cal have 126 stickers in all. Ben has 7 stickers more than Ana. Cal has 5 times as many stickers as Ana.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of stickers Ana has, $y$ the number Ben has and $z$ the number Cal has.",
                "reason": "One letter for each unknown: three amounts are unknown, so each gets its own letter, as the problem names them."
              },
              {
                "step": "$x + y + z = 126$",
                "reason": "Writing a sentence as an equation: the three amounts add to the total the first fact gives."
              },
              {
                "step": "$y = x + 7$",
                "reason": "Writing a sentence as an equation: the second fact adds $7$ to the first amount, $x$."
              },
              {
                "step": "$z = 5x$",
                "reason": "Writing a sentence as an equation: the third fact multiplies the first amount, $x$, by $5$."
              },
              {
                "step": "$x + (x + 7) + 5x = 126$",
                "reason": "Substitution: the expressions for $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the first equation."
              },
              {
                "step": "$7x + 7 = 126$",
                "reason": "Collecting like terms: $x + x + 5x = 7x$."
              },
              {
                "step": "$7x = 119$",
                "reason": "Adding the same number to both sides: adding $-7$ to both sides leaves the term in $x$ alone."
              },
              {
                "step": "$x = 17$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $x$ alone."
              },
              {
                "step": "$y = 24$",
                "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $y = x + 7$, and $17 + 7 = 24$."
              },
              {
                "step": "$z = 85$",
                "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $z = 5x$, and $5 \\cdot 17 = 85$."
              },
              {
                "step": "The three amounts add to $17 + 24 + 85 = 126$, with $24 - 17 = 7$ and $85 = 5 \\cdot 17$.",
                "reason": "Checking against the words: the values go back into the facts of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "$x = 17$, $y = 24$, $z = 85$",
                "reason": "Answering the question asked: the question asks for all three amounts, $x$ first, then $y$, then $z$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, $y$ and $z$, where $x$ is the number of 5-cent coins in a jar, $y$ is the number of 10-cent coins and $z$ is the number of 20-cent coins. The jar holds 52 coins. There are 10 more 10-cent coins than 5-cent coins. There are 5 times as many 20-cent coins as 5-cent coins.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 6, y = 16, z = 30",
              "lines": [
                {
                  "step": "Find $x$, $y$ and $z$, where $x$ is the number of 5-cent coins in a jar, $y$ is the number of 10-cent coins and $z$ is the number of 20-cent coins. The jar holds 52 coins. There are 10 more 10-cent coins than 5-cent coins. There are 5 times as many 20-cent coins as 5-cent coins.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 5-cent coins in a jar, $y$ the number of 10-cent coins and $z$ the number of 20-cent coins.",
                  "reason": "One letter for each unknown: three amounts are unknown, so each gets its own letter, as the problem names them."
                },
                {
                  "step": "$x + y + z = 52$",
                  "reason": "Writing a sentence as an equation: the three amounts add to the total the first fact gives."
                },
                {
                  "step": "$y = x + 10$",
                  "reason": "Writing a sentence as an equation: the second fact adds $10$ to the first amount, $x$."
                },
                {
                  "step": "$z = 5x$",
                  "reason": "Writing a sentence as an equation: the third fact multiplies the first amount, $x$, by $5$."
                },
                {
                  "step": "$x + (x + 10) + 5x = 52$",
                  "reason": "Substitution: the expressions for $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the first equation."
                },
                {
                  "step": "$7x + 10 = 52$",
                  "reason": "Collecting like terms: $x + x + 5x = 7x$."
                },
                {
                  "step": "$7x = 42$",
                  "reason": "Adding the same number to both sides: adding $-10$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $x$ alone."
                },
                {
                  "step": "$y = 16$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $y = x + 10$, and $6 + 10 = 16$."
                },
                {
                  "step": "$z = 30$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $z = 5x$, and $5 \\cdot 6 = 30$."
                },
                {
                  "step": "The three amounts add to $6 + 16 + 30 = 52$, with $16 - 6 = 10$ and $30 = 5 \\cdot 6$.",
                  "reason": "Checking against the words: the values go back into the facts of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$x = 6$, $y = 16$, $z = 30$",
                  "reason": "Answering the question asked: the question asks for all three amounts, $x$ first, then $y$, then $z$."
                }
              ]
            },
            {
              "prompt": "Find $x$, $y$ and $z$, where $x$ is the number of books on the top shelf, $y$ is the number of books on the middle shelf and $z$ is the number of books on the bottom shelf. The three shelves hold 90 books. The middle shelf holds 6 books more than the top shelf. The bottom shelf holds 4 times as many books as the top shelf.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 14, y = 20, z = 56",
              "lines": [
                {
                  "step": "Find $x$, $y$ and $z$, where $x$ is the number of books on the top shelf, $y$ is the number of books on the middle shelf and $z$ is the number of books on the bottom shelf. The three shelves hold 90 books. The middle shelf holds 6 books more than the top shelf. The bottom shelf holds 4 times as many books as the top shelf.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of books on the top shelf, $y$ the number of books on the middle shelf and $z$ the number of books on the bottom shelf.",
                  "reason": "One letter for each unknown: three amounts are unknown, so each gets its own letter, as the problem names them."
                },
                {
                  "step": "$x + y + z = 90$",
                  "reason": "Writing a sentence as an equation: the three amounts add to the total the first fact gives."
                },
                {
                  "step": "$y = x + 6$",
                  "reason": "Writing a sentence as an equation: the second fact adds $6$ to the first amount, $x$."
                },
                {
                  "step": "$z = 4x$",
                  "reason": "Writing a sentence as an equation: the third fact multiplies the first amount, $x$, by $4$."
                },
                {
                  "step": "$x + (x + 6) + 4x = 90$",
                  "reason": "Substitution: the expressions for $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the first equation."
                },
                {
                  "step": "$6x + 6 = 90$",
                  "reason": "Collecting like terms: $x + x + 4x = 6x$."
                },
                {
                  "step": "$6x = 84$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $x$ alone."
                },
                {
                  "step": "$y = 20$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $y = x + 6$, and $14 + 6 = 20$."
                },
                {
                  "step": "$z = 56$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $z = 4x$, and $4 \\cdot 14 = 56$."
                },
                {
                  "step": "The three amounts add to $14 + 20 + 56 = 90$, with $20 - 14 = 6$ and $56 = 4 \\cdot 14$.",
                  "reason": "Checking against the words: the values go back into the facts of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$x = 14$, $y = 20$, $z = 56$",
                  "reason": "Answering the question asked: the question asks for all three amounts, $x$ first, then $y$, then $z$."
                }
              ]
            },
            {
              "prompt": "Find $x$, $y$ and $z$, where $x$ is the points Dora scored in a game, $y$ is the points Eli scored and $z$ is the points Finn scored. Together the three scored 119 points. Eli scored 14 points more than Dora. Finn scored 3 times as many points as Dora.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 21, y = 35, z = 63",
              "lines": [
                {
                  "step": "Find $x$, $y$ and $z$, where $x$ is the points Dora scored in a game, $y$ is the points Eli scored and $z$ is the points Finn scored. Together the three scored 119 points. Eli scored 14 points more than Dora. Finn scored 3 times as many points as Dora.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the points Dora scored in a game, $y$ the points Eli scored and $z$ the points Finn scored.",
                  "reason": "One letter for each unknown: three amounts are unknown, so each gets its own letter, as the problem names them."
                },
                {
                  "step": "$x + y + z = 119$",
                  "reason": "Writing a sentence as an equation: the three amounts add to the total the first fact gives."
                },
                {
                  "step": "$y = x + 14$",
                  "reason": "Writing a sentence as an equation: the second fact adds $14$ to the first amount, $x$."
                },
                {
                  "step": "$z = 3x$",
                  "reason": "Writing a sentence as an equation: the third fact multiplies the first amount, $x$, by $3$."
                },
                {
                  "step": "$x + (x + 14) + 3x = 119$",
                  "reason": "Substitution: the expressions for $y$ and $z$ go, in brackets, in place of $y$ and $z$ in the first equation."
                },
                {
                  "step": "$5x + 14 = 119$",
                  "reason": "Collecting like terms: $x + x + 3x = 5x$."
                },
                {
                  "step": "$5x = 105$",
                  "reason": "Adding the same number to both sides: adding $-14$ to both sides leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 21$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "$y = 35$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $y = x + 14$, and $21 + 14 = 35$."
                },
                {
                  "step": "$z = 63$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in $z = 3x$, and $3 \\cdot 21 = 63$."
                },
                {
                  "step": "The three amounts add to $21 + 35 + 63 = 119$, with $35 - 21 = 14$ and $63 = 3 \\cdot 21$.",
                  "reason": "Checking against the words: the values go back into the facts of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$x = 21$, $y = 35$, $z = 63$",
                  "reason": "Answering the question asked: the question asks for all three amounts, $x$ first, then $y$, then $z$."
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
      "id": "t117-p1",
      "method": "direct proof",
      "statement": "Let $a_1$, $b_1$, $a_2$ and $b_2$ be real numbers with $a_1x + b_1 = a_2x + b_2$ for every real number $x$. Then $a_1 = a_2$ and $b_1 = b_2$.",
      "idea": "The equation holds at every $x$, so it holds at $x = 0$, which removes the terms in $x$ and gives the constants, and at $x = 1$, which then gives the coefficients.",
      "lines": [
        {
          "line": "Suppose that $a_1x + b_1 = a_2x + b_2$ for every real number $x$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $a_1 \\cdot 0 + b_1 = a_2 \\cdot 0 + b_2$.",
          "reason": "substituting a value: $x = 0$ in line 1"
        },
        {
          "line": "So $b_1 = b_2$.",
          "reason": "zero times a number is $0$"
        },
        {
          "line": "Also $a_1 \\cdot 1 + b_1 = a_2 \\cdot 1 + b_2$.",
          "reason": "substituting a value: $x = 1$ in line 1"
        },
        {
          "line": "So $a_1 + b_1 = a_2 + b_2$.",
          "reason": "one times a number is that number"
        },
        {
          "line": "So $a_1 + b_1 = a_2 + b_1$.",
          "reason": "substituting a value: $b_1$ in place of $b_2$, by line 3"
        },
        {
          "line": "So $a_1 = a_2$.",
          "reason": "adding the same number to both sides, $-b_1$"
        },
        {
          "line": "Therefore $a_1 = a_2$ and $b_1 = b_2$.",
          "reason": "lines 3 and 7"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t117-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a_1$, $b_1$, $c_1$, $a_2$, $b_2$ and $c_2$, if $a_1x^2 + b_1x + c_1 = a_2x^2 + b_2x + c_2$ for every real number $x$, then $a_1 = a_2$, $b_1 = b_2$ and $c_1 = c_2$. Facts it may use: substituting a value; zero times a number is $0$; the sign of a power of a negative number; adding two equations; dividing both sides by a nonzero number; adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $a_1x^2 + b_1x + c_1 = a_2x^2 + b_2x + c_2$ for every real number $x$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $a_1 \\cdot 0^2 + b_1 \\cdot 0 + c_1 = a_2 \\cdot 0^2 + b_2 \\cdot 0 + c_2$.",
            "reason": "substituting a value: $x = 0$ in line 1"
          },
          {
            "line": "So $c_1 = c_2$.",
            "reason": "zero times a number is $0$"
          },
          {
            "line": "Also $a_1 \\cdot 1^2 + b_1 \\cdot 1 + c_1 = a_2 \\cdot 1^2 + b_2 \\cdot 1 + c_2$.",
            "reason": "substituting a value: $x = 1$ in line 1"
          },
          {
            "line": "So $a_1 + b_1 + c_1 = a_2 + b_2 + c_2$.",
            "reason": "one times a number is that number, with $1^2 = 1$"
          },
          {
            "line": "Also $a_1 \\cdot (-1)^2 + b_1 \\cdot (-1) + c_1 = a_2 \\cdot (-1)^2 + b_2 \\cdot (-1) + c_2$.",
            "reason": "substituting a value: $x = -1$ in line 1"
          },
          {
            "line": "So $a_1 - b_1 + c_1 = a_2 - b_2 + c_2$.",
            "reason": "the sign of a power of a negative number: $(-1)^2 = 1$"
          },
          {
            "line": "So $2a_1 + 2c_1 = 2a_2 + 2c_2$.",
            "reason": "adding two equations, lines 5 and 7"
          },
          {
            "line": "So $a_1 + c_1 = a_2 + c_2$.",
            "reason": "dividing both sides by a nonzero number, $2$"
          },
          {
            "line": "So $a_1 + c_1 = a_2 + c_1$.",
            "reason": "substituting a value: $c_1$ in place of $c_2$, by line 3"
          },
          {
            "line": "So $a_1 = a_2$.",
            "reason": "adding the same number to both sides, $-c_1$"
          },
          {
            "line": "So $a_1 + b_1 + c_1 = a_1 + b_2 + c_1$.",
            "reason": "substituting a value: $a_1$ in place of $a_2$ and $c_1$ in place of $c_2$ in line 5, by lines 3 and 11"
          },
          {
            "line": "So $b_1 = b_2$.",
            "reason": "adding the same number to both sides, $-a_1 - c_1$"
          },
          {
            "line": "Therefore $a_1 = a_2$, $b_1 = b_2$ and $c_1 = c_2$.",
            "reason": "lines 3, 11 and 13"
          }
        ]
      }
    },
    {
      "id": "t117-s2",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a_1$, $b_1$, $a_2$, $b_2$, $p$ and $q$ with $p \\ne q$, if $a_1x + b_1 = a_2x + b_2$ both at $x = p$ and at $x = q$, then $a_1 = a_2$ and $b_1 = b_2$. Facts it may use: substituting a value; elimination; taking out a common factor; dividing both sides by a nonzero number; adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $a_1p + b_1 = a_2p + b_2$ and $a_1q + b_1 = a_2q + b_2$.",
            "reason": "the hypothesis, with substituting a value"
          },
          {
            "line": "Then $a_1p - a_1q = a_2p - a_2q$.",
            "reason": "elimination: taking the second equation from the first cancels $b_1$ and $b_2$"
          },
          {
            "line": "So $a_1(p - q) = a_2(p - q)$.",
            "reason": "taking out a common factor on each side"
          },
          {
            "line": "So $a_1 = a_2$.",
            "reason": "dividing both sides by a nonzero number, $p - q$, which is not $0$ because $p \\ne q$"
          },
          {
            "line": "So $a_1p + b_1 = a_1p + b_2$.",
            "reason": "substituting a value: $a_1$ in place of $a_2$ in the first equation of line 1"
          },
          {
            "line": "So $b_1 = b_2$.",
            "reason": "adding the same number to both sides, $-a_1p$"
          },
          {
            "line": "Therefore $a_1 = a_2$ and $b_1 = b_2$.",
            "reason": "lines 4 and 6"
          }
        ]
      }
    },
    {
      "id": "t117-s3",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$, $b$ and $c$, every solution of the system $2x + y + z = a$, $x + 2y + z = b$ and $x + y + 2z = c$ has $x = \\dfrac{3a - b - c}{4}$, $y = \\dfrac{3b - a - c}{4}$ and $z = \\dfrac{3c - a - b}{4}$. Facts it may use: ordered triple; reducing the number of variables; adding two equations; elimination; dividing both sides by a nonzero number; adding fractions with the same denominator; subtracting a bracket changes every sign in it; collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let the ordered triple $(x, y, z)$ solve the system.",
            "reason": "ordered triple"
          },
          {
            "line": "Then $3x + 3y + 2z = a + b$.",
            "reason": "adding two equations, the first and the second"
          },
          {
            "line": "So $4x + 4y + 4z = a + b + c$.",
            "reason": "adding two equations, line 2 and the third equation"
          },
          {
            "line": "So $x + y + z = \\dfrac{a + b + c}{4}$.",
            "reason": "dividing both sides by a nonzero number, $4$"
          },
          {
            "line": "Then $x = a - \\dfrac{a + b + c}{4}$.",
            "reason": "elimination: taking line 4 from the first equation cancels $y$ and $z$"
          },
          {
            "line": "So $x = \\dfrac{4a - (a + b + c)}{4}$.",
            "reason": "adding fractions with the same denominator, with $a = \\dfrac{4a}{4}$"
          },
          {
            "line": "So $x = \\dfrac{4a - a - b - c}{4}$.",
            "reason": "subtracting a bracket changes every sign in it"
          },
          {
            "line": "So $x = \\dfrac{3a - b - c}{4}$.",
            "reason": "collecting like terms"
          },
          {
            "line": "Also $y = b - \\dfrac{a + b + c}{4}$.",
            "reason": "elimination: taking line 4 from the second equation cancels $x$ and $z$"
          },
          {
            "line": "So $y = \\dfrac{4b - (a + b + c)}{4}$.",
            "reason": "adding fractions with the same denominator, with $b = \\dfrac{4b}{4}$"
          },
          {
            "line": "So $y = \\dfrac{4b - a - b - c}{4}$.",
            "reason": "subtracting a bracket changes every sign in it"
          },
          {
            "line": "So $y = \\dfrac{3b - a - c}{4}$.",
            "reason": "collecting like terms"
          },
          {
            "line": "Also $z = c - \\dfrac{a + b + c}{4}$.",
            "reason": "elimination: taking line 4 from the third equation cancels $x$ and $y$"
          },
          {
            "line": "So $z = \\dfrac{4c - (a + b + c)}{4}$.",
            "reason": "adding fractions with the same denominator, with $c = \\dfrac{4c}{4}$"
          },
          {
            "line": "So $z = \\dfrac{4c - a - b - c}{4}$.",
            "reason": "subtracting a bracket changes every sign in it"
          },
          {
            "line": "So $z = \\dfrac{3c - a - b}{4}$.",
            "reason": "collecting like terms"
          },
          {
            "line": "Therefore every solution has $x = \\dfrac{3a - b - c}{4}$, $y = \\dfrac{3b - a - c}{4}$ and $z = \\dfrac{3c - a - b}{4}$.",
            "reason": "reducing the number of variables: lines 8, 12 and 16"
          }
        ]
      }
    }
  ]
}
