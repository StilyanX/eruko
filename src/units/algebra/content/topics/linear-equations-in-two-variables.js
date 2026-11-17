export default {
  "number": 113,
  "title": "Linear equations in two variables",
  "section": 3,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "123-127"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the solution $(x, y)$ of $4x - 3y = 2$ with $x = 5$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(5, 6)",
    "solution": [
      "Find the solution $(x, y)$ of $4x - 3y = 2$ with $x = 5$.",
      "$4(5) - 3y = 2$",
      "$20 - 3y = 2$",
      "$-3y = -18$",
      "$y = 6$",
      "$(5, 6)$"
    ]
  },
  "ideas": [
    {
      "name": "Solution of a two-variable equation",
      "concrete": "In $x + 2y = 8$ the values $x = 2$ and $y = 3$ give $2 + 6 = 8$, so the ordered pair $(2, 3)$ is a solution. The pair $(3, 2)$ gives $3 + 4 = 7$ and is not.",
      "general": "A **linear equation in two variables** is an equation $ax + by = c$ with real numbers $a$, $b$, $c$, and $a$ and $b$ not both $0$. An **ordered pair** $(x, y)$ writes the value of $x$ first and the value of $y$ second. A pair is a **solution of a two-variable equation** when substituting its values makes the two sides equal."
    },
    {
      "name": "Stepping from one solution to the next",
      "concrete": "In $3x + 4y = 10$ the pair $(2, 1)$ is a solution. Adding $4$ to $x$ adds $12$ to $3x$, and taking $3$ from $y$ takes $12$ from $4y$, so $(6, -2)$ is a solution too: $18 - 8 = 10$.",
      "general": "For real numbers $a$, $b$, $c$: if $(x, y)$ is a solution of $ax + by = c$, then so is $(x + b, y - a)$."
    },
    {
      "name": "System of equations",
      "concrete": "The pair $(4, 1)$ solves $x - y = 3$, since $4 - 1 = 3$, and solves $x + 2y = 6$, since $4 + 2 = 6$. So it is a solution of the system made of the two equations.",
      "general": "A **system of equations** is a set of equations in the same letters, all to hold at once. A **solution of a system** is a value for each letter that solves every equation of the system; a pair that fails one equation is not a solution of the system."
    }
  ],
  "kinds": [
    {
      "id": "t113-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the solution $(x, y)$ of $3x + 2y = 16$ with $x = 4$.",
            "lines": [
              {
                "step": "Find the solution $(x, y)$ of $3x + 2y = 16$ with $x = 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3(4) + 2y = 16$",
                "reason": "Substituting a value: the value of $x$ goes, in brackets, in place of $x$, which leaves a linear equation in one variable, $y$."
              },
              {
                "step": "$12 + 2y = 16$",
                "reason": "The order of operations puts the product of the two numbers first, and the sign rules for products give it its sign."
              },
              {
                "step": "$2y = 4$",
                "reason": "Adding the same number to both sides: adding $-12$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$(4, 2)$",
                "reason": "Ordered pair: the value of $x$ is written first and the value of $y$ second, and the pair solves the equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the solution $(x, y)$ of $5x - 2y = 17$ with $x = 3$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, -1)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of $5x - 2y = 17$ with $x = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(3) - 2y = 17$",
                  "reason": "Substituting a value: the value of $x$ goes, in brackets, in place of $x$, which leaves a linear equation in one variable, $y$."
                },
                {
                  "step": "$15 - 2y = 17$",
                  "reason": "The order of operations puts the product of the two numbers first, and the sign rules for products give it its sign."
                },
                {
                  "step": "$-2y = 2$",
                  "reason": "Adding the same number to both sides: adding $-15$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$(3, -1)$",
                  "reason": "Ordered pair: the value of $x$ is written first and the value of $y$ second, and the pair solves the equation."
                }
              ]
            },
            {
              "prompt": "Find the solution $(x, y)$ of $-2x + 7y = 20$ with $y = 2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-3, 2)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of $-2x + 7y = 20$ with $y = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x + 7(2) = 20$",
                  "reason": "Substituting a value: the value of $y$ goes, in brackets, in place of $y$, which leaves a linear equation in one variable, $x$."
                },
                {
                  "step": "$-2x + 14 = 20$",
                  "reason": "The order of operations puts the product of the two numbers first, and the sign rules for products give it its sign."
                },
                {
                  "step": "$-2x = 6$",
                  "reason": "Adding the same number to both sides: adding $-14$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$(-3, 2)$",
                  "reason": "Ordered pair: the value of $x$ is written first and the value of $y$ second, and the pair solves the equation."
                }
              ]
            },
            {
              "prompt": "Find the solution $(x, y)$ of $6x + 5y = 14$ with $x = -1$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1, 4)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of $6x + 5y = 14$ with $x = -1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6(-1) + 5y = 14$",
                  "reason": "Substituting a value: the value of $x$ goes, in brackets, in place of $x$, which leaves a linear equation in one variable, $y$."
                },
                {
                  "step": "$-6 + 5y = 14$",
                  "reason": "The order of operations puts the product of the two numbers first, and the sign rules for products give it its sign."
                },
                {
                  "step": "$5y = 20$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$(-1, 4)$",
                  "reason": "Ordered pair: the value of $x$ is written first and the value of $y$ second, and the pair solves the equation."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t113-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $(3, -1)$ is a solution of the system $2x - 5y = 11$ and $3x + 4y = 8$.",
            "lines": [
              {
                "step": "Decide whether $(3, -1)$ is a solution of the system $2x - 5y = 11$ and $3x + 4y = 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2(3) - 5(-1) = 6 + 5$",
                "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
              },
              {
                "step": "The first left side is $6 + 5 = 11$, equal to the right side.",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              },
              {
                "step": "$3(3) + 4(-1) = 9 - 4$",
                "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
              },
              {
                "step": "The second left side is $9 - 4 = 5$, not the right side $8$.",
                "reason": "The order of operations leaves sums and differences for last, worked from left to right."
              },
              {
                "step": "No",
                "reason": "Solution of a system: a solution of a system solves every equation of it, and the pair fails the second equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $(2, 4)$ is a solution of the system $5x - 2y = 2$ and $3x + 2y = 14$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $(2, 4)$ is a solution of the system $5x - 2y = 2$ and $3x + 2y = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5(2) - 2(4) = 10 - 8$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
                },
                {
                  "step": "The first left side is $10 - 8 = 2$, equal to the right side.",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                },
                {
                  "step": "$3(2) + 2(4) = 6 + 8$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
                },
                {
                  "step": "The second left side is $6 + 8 = 14$, equal to the right side.",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                },
                {
                  "step": "Yes",
                  "reason": "Solution of a system: the pair makes the two sides equal in both equations, so it solves the system."
                }
              ]
            },
            {
              "prompt": "Decide whether $(-1, 3)$ is a solution of the system $4x + 3y = 7$ and $2x - 5y = -17$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $(-1, 3)$ is a solution of the system $4x + 3y = 7$ and $2x - 5y = -17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(-1) + 3(3) = -4 + 9$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
                },
                {
                  "step": "The first left side is $-4 + 9 = 5$, not the right side $7$.",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                },
                {
                  "step": "$2(-1) - 5(3) = -2 - 15$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
                },
                {
                  "step": "The second left side is $-2 - 15 = -17$, equal to the right side.",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                },
                {
                  "step": "No",
                  "reason": "Solution of a system: a solution of a system solves every equation of it, and the pair fails the first equation."
                }
              ]
            },
            {
              "prompt": "Decide whether $(6, -2)$ is a solution of the system $2x + 7y = -2$ and $3x + 5y = 4$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $(6, -2)$ is a solution of the system $2x + 7y = -2$ and $3x + 5y = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(6) + 7(-2) = 12 - 14$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
                },
                {
                  "step": "The first left side is $12 - 14 = -2$, equal to the right side.",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                },
                {
                  "step": "$3(6) + 5(-2) = 18 - 10$",
                  "reason": "Substituting a value: each letter is replaced by its own value, in brackets, the first number of the pair for $x$ and the second for $y$."
                },
                {
                  "step": "The second left side is $18 - 10 = 8$, not the right side $4$.",
                  "reason": "The order of operations leaves sums and differences for last, worked from left to right."
                },
                {
                  "step": "No",
                  "reason": "Solution of a system: a solution of a system solves every equation of it, and the pair fails the second equation."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t113-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this check of whether $(5, 1)$ solves the system $2x - 5y = -23$ and $4x + 6y = 26$, and write that line right.",
            "given": [
              "$2(1) - 5(5) = 2 - 25$",
              "$2 - 25 = -23$",
              "$4(5) + 6(1) = 20 + 6$",
              "$20 + 6 = 26$",
              "Both equations hold, so $(5, 1)$ solves the system."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this check of whether $(5, 1)$ solves the system $2x - 5y = -23$ and $4x + 6y = 26$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 puts $1$ in place of $x$ and $5$ in place of $y$.",
                "reason": "A letter is read as an object: the line puts the numbers of the pair in the wrong places, the second number for $x$ and the first for $y$."
              },
              {
                "step": "Line 1 written right is $2(5) - 5(1) = 10 - 5$.",
                "reason": "Ordered pair: the first number of the pair is the value of $x$, and substituting a value puts it, in brackets, in place of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this check of whether $(3, 7)$ solves the system $5x + 2y = 31$ and $4x - 3y = -9$, and write that line right.",
              "given": [
                "$5(3) + 2(7) = 15 + 14$",
                "$15 + 14 = 29$",
                "$4(7) - 3(3) = 28 - 9$",
                "$28 - 9 = 19$",
                "Both equations fail, so $(3, 7)$ does not solve the system."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*(3)-3*(7) = 12-21",
              "lines": [
                {
                  "step": "Find the first wrong line in this check of whether $(3, 7)$ solves the system $5x + 2y = 31$ and $4x - 3y = -9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts $7$ in place of $x$ and $3$ in place of $y$.",
                  "reason": "A letter is read as an object: the line puts the numbers of the pair in the wrong places, the second number for $x$ and the first for $y$."
                },
                {
                  "step": "Line 3 written right is $4(3) - 3(7) = 12 - 21$.",
                  "reason": "Ordered pair: the first number of the pair is the value of $x$, and substituting a value puts it, in brackets, in place of $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this check of whether $(6, 2)$ solves the system $3x + 4y = 26$ and $2x - 5y = -1$, and write that line right.",
              "given": [
                "$3(2) + 4(6) = 6 + 24$",
                "$6 + 24 = 30$",
                "$2(6) - 5(2) = 12 - 10$",
                "$12 - 10 = 2$",
                "Both equations fail, so $(6, 2)$ does not solve the system."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 3*(6)+4*(2) = 18+8",
              "lines": [
                {
                  "step": "Find the first wrong line in this check of whether $(6, 2)$ solves the system $3x + 4y = 26$ and $2x - 5y = -1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 puts $2$ in place of $x$ and $6$ in place of $y$.",
                  "reason": "A letter is read as an object: the line puts the numbers of the pair in the wrong places, the second number for $x$ and the first for $y$."
                },
                {
                  "step": "Line 1 written right is $3(6) + 4(2) = 18 + 8$.",
                  "reason": "Ordered pair: the first number of the pair is the value of $x$, and substituting a value puts it, in brackets, in place of $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this check of whether $(1, 4)$ solves the system $7x + 3y = 19$ and $2x + 5y = 13$, and write that line right.",
              "given": [
                "$7(1) + 3(4) = 7 + 12$",
                "$7 + 12 = 19$",
                "$2(4) + 5(1) = 8 + 5$",
                "$8 + 5 = 13$",
                "Both equations hold, so $(1, 4)$ solves the system."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*(1)+5*(4) = 2+20",
              "lines": [
                {
                  "step": "Find the first wrong line in this check of whether $(1, 4)$ solves the system $7x + 3y = 19$ and $2x + 5y = 13$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 puts $4$ in place of $x$ and $1$ in place of $y$.",
                  "reason": "A letter is read as an object: the line puts the numbers of the pair in the wrong places, the second number for $x$ and the first for $y$."
                },
                {
                  "step": "Line 3 written right is $2(1) + 5(4) = 2 + 20$.",
                  "reason": "Ordered pair: the first number of the pair is the value of $x$, and substituting a value puts it, in brackets, in place of $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this check of whether $(5, -2)$ solves the system $2x - 3y = 16$ and $3x + 4y = 10$, and write that line right.",
            "given": [
              "$2(5) - 3(-2) = 10 - 6$",
              "$10 - 6 = 4$",
              "$3(5) + 4(-2) = 15 - 8$",
              "$15 - 8 = 7$",
              "Both equations fail, so $(5, -2)$ does not solve the system."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this check of whether $(5, -2)$ solves the system $2x - 3y = 16$ and $3x + 4y = 10$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 writes $-3(-2)$ as $-6$.",
                "reason": "A sign is lost: the product of two negative numbers equals the product of their opposites, so it is positive."
              },
              {
                "step": "Line 1 written right is $2(5) - 3(-2) = 10 + 6$.",
                "reason": "The order of operations puts products before sums and differences, and each product keeps the sign the sign rules give it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this check of whether $(4, -3)$ solves the system $3x + 2y = 6$ and $5x - 2y = 14$, and write that line right.",
              "given": [
                "$3(4) + 2(-3) = 12 - 6$",
                "$12 - 6 = 6$",
                "$5(4) - 2(-3) = 20 - 6$",
                "$20 - 6 = 14$",
                "Both equations hold, so $(4, -3)$ solves the system."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*(4)-2*(-3) = 20+6",
              "lines": [
                {
                  "step": "Find the first wrong line in this check of whether $(4, -3)$ solves the system $3x + 2y = 6$ and $5x - 2y = 14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $-2(-3)$ as $-6$.",
                  "reason": "A sign is lost: the product of two negative numbers equals the product of their opposites, so it is positive."
                },
                {
                  "step": "Line 3 written right is $5(4) - 2(-3) = 20 + 6$.",
                  "reason": "The order of operations puts products before sums and differences, and each product keeps the sign the sign rules give it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this check of whether $(-1, -4)$ solves the system $6x - 5y = -26$ and $2x + 3y = -14$, and write that line right.",
              "given": [
                "$6(-1) - 5(-4) = -6 - 20$",
                "$-6 - 20 = -26$",
                "$2(-1) + 3(-4) = -2 - 12$",
                "$-2 - 12 = -14$",
                "Both equations hold, so $(-1, -4)$ solves the system."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 6*(-1)-5*(-4) = -6+20",
              "lines": [
                {
                  "step": "Find the first wrong line in this check of whether $(-1, -4)$ solves the system $6x - 5y = -26$ and $2x + 3y = -14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes $-5(-4)$ as $-20$.",
                  "reason": "A sign is lost: the product of two negative numbers equals the product of their opposites, so it is positive."
                },
                {
                  "step": "Line 1 written right is $6(-1) - 5(-4) = -6 + 20$.",
                  "reason": "The order of operations puts products before sums and differences, and each product keeps the sign the sign rules give it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this check of whether $(3, -5)$ solves the system $4x + 7y = -27$ and $2x - 3y = 21$, and write that line right.",
              "given": [
                "$4(3) + 7(-5) = 12 - 35$",
                "$12 - 35 = -23$",
                "$2(3) - 3(-5) = 6 - 15$",
                "$6 - 15 = -9$",
                "Both equations fail, so $(3, -5)$ does not solve the system."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*(3)-3*(-5) = 6+15",
              "lines": [
                {
                  "step": "Find the first wrong line in this check of whether $(3, -5)$ solves the system $4x + 7y = -27$ and $2x - 3y = 21$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $-3(-5)$ as $-15$.",
                  "reason": "A sign is lost: the product of two negative numbers equals the product of their opposites, so it is positive."
                },
                {
                  "step": "Line 3 written right is $2(3) - 3(-5) = 6 + 15$.",
                  "reason": "The order of operations puts products before sums and differences, and each product keeps the sign the sign rules give it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t113-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the price of a notebook in cents and $y$ is the price of a ruler in cents: Five notebooks and two rulers cost 640 cents.",
            "lines": [
              {
                "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the price of a notebook in cents and $y$ is the price of a ruler in cents: Five notebooks and two rulers cost 640 cents.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Five notebooks cost $5x$ cents, and two rulers cost $2y$ cents.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
              },
              {
                "step": "$5x + 2y = 640$",
                "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of cars in a yard and $y$ is the number of bikes in the yard: The cars and bikes in the yard have 58 wheels in all.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "4*x+2*y = 58",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of cars in a yard and $y$ is the number of bikes in the yard: The cars and bikes in the yard have 58 wheels in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A car has 4 wheels and a bike 2, so the cars have $4x$ wheels and the bikes $2y$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$4x + 2y = 58$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is a number and $y$ is a second number: The second number is 9 less than 4 times the first.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4*x-9",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is a number and $y$ is a second number: The second number is 9 less than 4 times the first.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Then 4 times the first number is $4x$, and 9 less than that is $4x - 9$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$y = 4x - 9$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is Ana's age now in years and $y$ is Ben's age now in years: In 3 years Ana's and Ben's ages will add to 41.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+3)+(y+3) = 41",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is Ana's age now in years and $y$ is Ben's age now in years: In 3 years Ana's and Ben's ages will add to 41.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In 3 years Ana will be $x + 3$ and Ben $y + 3$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$(x + 3) + (y + 3) = 41$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
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
      "id": "t113-p1",
      "method": "direct proof",
      "statement": "Let $a$, $b$ and $c$ be real numbers, and let $(x, y)$ be a solution of $ax + by = c$. Then $(x + b, y - a)$ is also a solution of $ax + by = c$.",
      "idea": "Moving $x$ on by $b$ raises $ax$ by $ab$, and moving $y$ back by $a$ lowers $by$ by the same $ab$, so the left side keeps its value.",
      "lines": [
        {
          "line": "Let $(x, y)$ be a solution of $ax + by = c$, so $ax + by = c$.",
          "reason": "the hypothesis"
        },
        {
          "line": "At the pair $(x + b, y - a)$ the left side is $a(x + b) + b(y - a)$.",
          "reason": "substituting a value"
        },
        {
          "line": "This equals $ax + ab + by - ba$.",
          "reason": "multiplying out"
        },
        {
          "line": "This equals $ax + ab + by - ab$.",
          "reason": "the commutative law of multiplication"
        },
        {
          "line": "This equals $ax + by + ab - ab$.",
          "reason": "the commutative and associative laws of addition"
        },
        {
          "line": "This equals $ax + by$.",
          "reason": "collecting like terms: $ab - ab = 0$"
        },
        {
          "line": "This equals $c$.",
          "reason": "the hypothesis and the transitive property"
        },
        {
          "line": "So $(x + b, y - a)$ is a solution of $ax + by = c$.",
          "reason": "the definition of a solution of a two-variable equation"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t113-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a_1$, $b_1$, $c_1$, $a_2$, $b_2$ and $c_2$, if $(x, y)$ is a solution of the system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$, then $(x, y)$ is a solution of $(a_1 + a_2)x + (b_1 + b_2)y = c_1 + c_2$. Facts it may use: solution of a system; adding two equations; collecting like terms; the commutative and associative laws of addition.",
      "check": {
        "proof": [
          {
            "line": "Let $(x, y)$ be a solution of the system, so $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$.",
            "reason": "the definition of a solution of a system"
          },
          {
            "line": "Then $(a_1x + b_1y) + (a_2x + b_2y) = c_1 + c_2$.",
            "reason": "adding two equations"
          },
          {
            "line": "So $(a_1x + a_2x) + (b_1y + b_2y) = c_1 + c_2$.",
            "reason": "the commutative and associative laws of addition"
          },
          {
            "line": "So $(a_1 + a_2)x + (b_1 + b_2)y = c_1 + c_2$.",
            "reason": "collecting like terms"
          },
          {
            "line": "Therefore $(x, y)$ is a solution of $(a_1 + a_2)x + (b_1 + b_2)y = c_1 + c_2$.",
            "reason": "the definition of a solution of a two-variable equation"
          }
        ]
      }
    },
    {
      "id": "t113-s2",
      "method": "proof of existence by construction",
      "statement": "Prove that for real numbers $a$, $b$ and $c$ with $b \\ne 0$, and for every real number $x$, there is a real number $y$ for which $(x, y)$ is a solution of $ax + by = c$. Facts it may use: substituting a value; multiplying both sides by the same number; adding the same number to both sides; collecting like terms; solution of a two-variable equation.",
      "check": {
        "proof": [
          {
            "line": "Let $b \\ne 0$, and let $x$ be a real number.",
            "reason": "the hypothesis"
          },
          {
            "line": "Put $y = \\dfrac{c - ax}{b}$, a real number since $b \\ne 0$.",
            "reason": "the construction"
          },
          {
            "line": "Then $by = c - ax$.",
            "reason": "multiplying both sides by the same number, $b$"
          },
          {
            "line": "So $ax + by = ax + (c - ax)$.",
            "reason": "adding the same number to both sides, $ax$"
          },
          {
            "line": "So $ax + by = c$.",
            "reason": "collecting like terms: $ax - ax = 0$"
          },
          {
            "line": "Therefore $(x, y)$ is a solution of $ax + by = c$.",
            "reason": "the definition of a solution of a two-variable equation"
          }
        ]
      }
    },
    {
      "id": "t113-s3",
      "method": "disproof by counterexample",
      "statement": "Prove that the following is false: a pair that solves one equation of a system of two equations solves the system. Facts it may use: substituting a value; solution of a two-variable equation; solution of a system.",
      "check": {
        "proof": [
          {
            "line": "Take the system $x + y = 7$ and $x - y = 5$, and the pair $(2, 5)$.",
            "reason": "a choice of system and pair"
          },
          {
            "line": "At $(2, 5)$ the first left side is $2 + 5 = 7$, so the pair solves the first equation.",
            "reason": "substituting a value"
          },
          {
            "line": "At $(2, 5)$ the second left side is $2 - 5 = -3$, not $5$, so the pair fails the second equation.",
            "reason": "substituting a value"
          },
          {
            "line": "So $(2, 5)$ does not solve the system.",
            "reason": "the definition of a solution of a system"
          },
          {
            "line": "So the pair is a counterexample, and the statement is false.",
            "reason": "one case where the hypothesis holds and the conclusion fails"
          }
        ]
      }
    }
  ]
}
