export default {
  "number": 186,
  "title": "Systems solved by eliminating an expression",
  "section": 3,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "9-13"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the solution $(x, y)$ of the system $x^2 - 3xy = -80$ and $8x + 3xy = 145$ with $x$ positive.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(5, 7)",
    "solution": [
      "Find the solution $(x, y)$ of the system $x^2 - 3xy = -80$ and $8x + 3xy = 145$ with $x$ positive.",
      "$x^2 + 8x = 65$",
      "$x^2 + 8x - 65 = 0$",
      "$(x - 5)(x + 13) = 0$",
      "Either $x = 5$ or $x = -13$.",
      "$x = 5$",
      "$(5)^2 - 3(5)y = -80$",
      "$25 - 15y = -80$",
      "$-15y = -105$",
      "$y = 7$",
      "$8 \\cdot 5 + 3 \\cdot 5 \\cdot 7 = 145$",
      "$(5, 7)$"
    ]
  },
  "ideas": [
    {
      "name": "Eliminating an expression",
      "concrete": "In the system $x(2x + 3y) = 108$ and $y(2x + 3y) = 36$, the right side $36$ is not $0$, so neither $y$ nor $2x + 3y$ is $0$. Dividing the first equation by the second gives $\\dfrac{x(2x + 3y)}{y(2x + 3y)} = 3$, and the bracket $2x + 3y$ cancels: $\\dfrac{x}{y} = 3$.",
      "general": "Two equations of a system may be added or taken one from the other, by adding two equations. They may also be divided one by the other: for numbers $a$, $b$, $c$ and $d$ with $a = b$, $c = d$ and $c$ not $0$, dividing both sides of $a = b$ by the nonzero number $c$ gives $\\dfrac{a}{c} = \\dfrac{b}{c}$, and $d$ is the same number as $c$, so $\\dfrac{a}{c} = \\dfrac{b}{d}$. **Eliminating an expression** is taking the sum, the difference or the quotient of two equations so that a whole expression in the unknowns cancels, such as a product $xy$, a power of the unknowns, or a bracket that is a factor of both left sides, and fewer unknowns are left. Before the division, the side divided by is shown not to be $0$, as never divide by an expression that may be zero requires."
    }
  ],
  "kinds": [
    {
      "id": "t186-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the solution $(x, y)$ of the system $y^2 - 7xy = 588$ and $6y - 7xy = 476$ with $y$ positive.",
            "lines": [
              {
                "step": "Find the solution $(x, y)$ of the system $y^2 - 7xy = 588$ and $6y - 7xy = 476$ with $y$ positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y^2 - 6y = 112$",
                "reason": "Eliminating an expression: taking the second equation from the first changes the sign of each term of the second left side, so the two terms $-7xy$ cancel and one unknown is left, and $588 - 476 = 112$."
              },
              {
                "step": "$y^2 - 6y - 112 = 0$",
                "reason": "Adding the same number to both sides: $112$ is taken from both sides."
              },
              {
                "step": "$(y - 14)(y + 8) = 0$",
                "reason": "Factoring a quadratic: $-14$ and $8$ have sum $-6$ and product $-112$."
              },
              {
                "step": "Either $y = 14$ or $y = -8$.",
                "reason": "Zero-product property: one of the two brackets is $0$, so $y - 14 = 0$ or $y + 8 = 0$."
              },
              {
                "step": "$y = 14$",
                "reason": "Answering the question asked: the solution asked for has $y$ positive."
              },
              {
                "step": "$(14)^2 - 7x(14) = 588$",
                "reason": "Substituting a value: $y$ is replaced by its value, in brackets, in the first equation."
              },
              {
                "step": "$196 - 98x = 588$",
                "reason": "Order of operations: the power and the product come first, $14^2 = 196$ and $-7 \\cdot 14 = -98$."
              },
              {
                "step": "$-98x = 392$",
                "reason": "Adding the same number to both sides: $196$ is taken from both sides, and $588 - 196 = 392$."
              },
              {
                "step": "$x = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-98$."
              },
              {
                "step": "$6 \\cdot 14 - 7 \\cdot (-4) \\cdot 14 = 476$",
                "reason": "Checking a solution: the pair makes the second equation true as well, so it solves both equations."
              },
              {
                "step": "$(-4, 14)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the solution $(x, y)$ of the system $x^2 - 3xy = 448$ and $-9x + 3xy = -378$ with $x$ positive.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(14, -6)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of the system $x^2 - 3xy = 448$ and $-9x + 3xy = -378$ with $x$ positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 9x = 70$",
                  "reason": "Eliminating an expression: adding the two equations makes $-3xy$ and $3xy$ cancel, which leaves one unknown, and $448 + (-378) = 70$."
                },
                {
                  "step": "$x^2 - 9x - 70 = 0$",
                  "reason": "Adding the same number to both sides: $70$ is taken from both sides."
                },
                {
                  "step": "$(x - 14)(x + 5) = 0$",
                  "reason": "Factoring a quadratic: $-14$ and $5$ have sum $-9$ and product $-70$."
                },
                {
                  "step": "Either $x = 14$ or $x = -5$.",
                  "reason": "Zero-product property: one of the two brackets is $0$, so $x - 14 = 0$ or $x + 5 = 0$."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Answering the question asked: the solution asked for has $x$ positive."
                },
                {
                  "step": "$(14)^2 - 3(14)y = 448$",
                  "reason": "Substituting a value: $x$ is replaced by its value, in brackets, in the first equation."
                },
                {
                  "step": "$196 - 42y = 448$",
                  "reason": "Order of operations: the power and the product come first, $14^2 = 196$ and $-3 \\cdot 14 = -42$."
                },
                {
                  "step": "$-42y = 252$",
                  "reason": "Adding the same number to both sides: $196$ is taken from both sides, and $448 - 196 = 252$."
                },
                {
                  "step": "$y = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-42$."
                },
                {
                  "step": "$-9 \\cdot 14 + 3 \\cdot 14 \\cdot (-6) = -378$",
                  "reason": "Checking a solution: the pair makes the second equation true as well, so it solves both equations."
                },
                {
                  "step": "$(14, -6)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            },
            {
              "prompt": "Find the solution $(x, y)$ of the system $x^2 + 2xy = -24$ and $11x - 2xy = 84$ with $x$ positive.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -5)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of the system $x^2 + 2xy = -24$ and $11x - 2xy = 84$ with $x$ positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 11x = 60$",
                  "reason": "Eliminating an expression: adding the two equations makes $2xy$ and $-2xy$ cancel, which leaves one unknown, and $-24 + 84 = 60$."
                },
                {
                  "step": "$x^2 + 11x - 60 = 0$",
                  "reason": "Adding the same number to both sides: $60$ is taken from both sides."
                },
                {
                  "step": "$(x - 4)(x + 15) = 0$",
                  "reason": "Factoring a quadratic: $-4$ and $15$ have sum $11$ and product $-60$."
                },
                {
                  "step": "Either $x = 4$ or $x = -15$.",
                  "reason": "Zero-product property: one of the two brackets is $0$, so $x - 4 = 0$ or $x + 15 = 0$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Answering the question asked: the solution asked for has $x$ positive."
                },
                {
                  "step": "$(4)^2 + 2(4)y = -24$",
                  "reason": "Substituting a value: $x$ is replaced by its value, in brackets, in the first equation."
                },
                {
                  "step": "$16 + 8y = -24$",
                  "reason": "Order of operations: the power and the product come first, $4^2 = 16$ and $2 \\cdot 4 = 8$."
                },
                {
                  "step": "$8y = -40$",
                  "reason": "Adding the same number to both sides: $16$ is taken from both sides, and $-24 - 16 = -40$."
                },
                {
                  "step": "$y = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$11 \\cdot 4 - 2 \\cdot 4 \\cdot (-5) = 84$",
                  "reason": "Checking a solution: the pair makes the second equation true as well, so it solves both equations."
                },
                {
                  "step": "$(4, -5)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            },
            {
              "prompt": "Find the solution $(x, y)$ of the system $x^2 - 5xy = 506$ and $6x + 5xy = -319$ with $x$ positive.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(11, -7)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of the system $x^2 - 5xy = 506$ and $6x + 5xy = -319$ with $x$ positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 6x = 187$",
                  "reason": "Eliminating an expression: adding the two equations makes $-5xy$ and $5xy$ cancel, which leaves one unknown, and $506 + (-319) = 187$."
                },
                {
                  "step": "$x^2 + 6x - 187 = 0$",
                  "reason": "Adding the same number to both sides: $187$ is taken from both sides."
                },
                {
                  "step": "$(x - 11)(x + 17) = 0$",
                  "reason": "Factoring a quadratic: $-11$ and $17$ have sum $6$ and product $-187$."
                },
                {
                  "step": "Either $x = 11$ or $x = -17$.",
                  "reason": "Zero-product property: one of the two brackets is $0$, so $x - 11 = 0$ or $x + 17 = 0$."
                },
                {
                  "step": "$x = 11$",
                  "reason": "Answering the question asked: the solution asked for has $x$ positive."
                },
                {
                  "step": "$(11)^2 - 5(11)y = 506$",
                  "reason": "Substituting a value: $x$ is replaced by its value, in brackets, in the first equation."
                },
                {
                  "step": "$121 - 55y = 506$",
                  "reason": "Order of operations: the power and the product come first, $11^2 = 121$ and $-5 \\cdot 11 = -55$."
                },
                {
                  "step": "$-55y = 385$",
                  "reason": "Adding the same number to both sides: $121$ is taken from both sides, and $506 - 121 = 385$."
                },
                {
                  "step": "$y = -7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-55$."
                },
                {
                  "step": "$6 \\cdot 11 + 5 \\cdot 11 \\cdot (-7) = -319$",
                  "reason": "Checking a solution: the pair makes the second equation true as well, so it solves both equations."
                },
                {
                  "step": "$(11, -7)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $xy^2 = 1250$ and $x^3y = -200$ for real numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Solve the system $xy^2 = 1250$ and $x^3y = -200$ for real numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x^3y)^2 = 40{,}000$",
                "reason": "Raising both sides to a power: both sides of the second equation are squared, and $(-200)^2 = 40{,}000$."
              },
              {
                "step": "$(x^3)^2y^2 = 40{,}000$",
                "reason": "Power of a product: $(x^3y)^2 = (x^3)^2y^2$."
              },
              {
                "step": "$x^6y^2 = 40{,}000$",
                "reason": "Power law: $(x^3)^2 = x^{3 \\cdot 2} = x^{6}$."
              },
              {
                "step": "$\\dfrac{x^6y^2}{xy^2} = 32$",
                "reason": "Eliminating an expression: both sides of the last line are divided by the two sides of the first equation, which is allowed as $1250$ is not $0$, and $40{,}000 \\div 1250 = 32$."
              },
              {
                "step": "$x^5 = 32$",
                "reason": "Cancelling a common factor: $x^6y^2 = x^5 \\cdot xy^2$, so the common factor $xy^2$ cancels."
              },
              {
                "step": "$x = 2$",
                "reason": "The definition of $x^{1/n}$ for odd $n$: $x^5 = 32$ exactly when $x$ is the one real fifth root of $32$, and $2^5 = 32$."
              },
              {
                "step": "$(2)^3y = -200$",
                "reason": "Substituting a value: $x$ is replaced by its value, in brackets, in the second equation."
              },
              {
                "step": "$8y = -200$",
                "reason": "Order of operations: the power comes first, $2^3 = 8$."
              },
              {
                "step": "$y = -25$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              },
              {
                "step": "$2 \\cdot (-25)^{2} = 1250$",
                "reason": "Checking a solution: $2 \\cdot 625 = 1250$, so the pair also solves the first equation."
              },
              {
                "step": "$(2, -25)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $x^{11}y^2 = -18{,}432$ and $x^4y = 48$ for real numbers $x$ and $y$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-2, 3)",
              "lines": [
                {
                  "step": "Solve the system $x^{11}y^2 = -18{,}432$ and $x^4y = 48$ for real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x^4y)^2 = 2304$",
                  "reason": "Raising both sides to a power: both sides of the second equation are squared, and $48^2 = 2304$."
                },
                {
                  "step": "$(x^4)^2y^2 = 2304$",
                  "reason": "Power of a product: $(x^4y)^2 = (x^4)^2y^2$."
                },
                {
                  "step": "$x^8y^2 = 2304$",
                  "reason": "Power law: $(x^4)^2 = x^{4 \\cdot 2} = x^{8}$."
                },
                {
                  "step": "$\\dfrac{x^{11}y^2}{x^8y^2} = -8$",
                  "reason": "Eliminating an expression: both sides of the first equation are divided by the two sides of the last line, which is allowed as $2304$ is not $0$, and $-18{,}432 \\div 2304 = -8$."
                },
                {
                  "step": "$x^3 = -8$",
                  "reason": "Cancelling a common factor: $x^{11}y^2 = x^3 \\cdot x^8y^2$, so the common factor $x^8y^2$ cancels."
                },
                {
                  "step": "$x = -2$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $x^3 = -8$ exactly when $x$ is the one real cube root of $-8$, and $(-2)^3 = -8$."
                },
                {
                  "step": "$(-2)^4y = 48$",
                  "reason": "Substituting a value: $x$ is replaced by its value, in brackets, in the second equation."
                },
                {
                  "step": "$16y = 48$",
                  "reason": "Order of operations: the power comes first, $(-2)^4 = 16$."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                },
                {
                  "step": "$(-2)^{11} \\cdot 3^{2} = -18{,}432$",
                  "reason": "Checking a solution: $-2048 \\cdot 9 = -18{,}432$, so the pair also solves the first equation."
                },
                {
                  "step": "$(-2, 3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            },
            {
              "prompt": "Solve the system $x^3y = -40$ and $x^9y^2 = 12{,}800$ for real numbers $x$ and $y$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -5)",
              "lines": [
                {
                  "step": "Solve the system $x^3y = -40$ and $x^9y^2 = 12{,}800$ for real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x^3y)^2 = 1600$",
                  "reason": "Raising both sides to a power: both sides of the first equation are squared, and $(-40)^2 = 1600$."
                },
                {
                  "step": "$(x^3)^2y^2 = 1600$",
                  "reason": "Power of a product: $(x^3y)^2 = (x^3)^2y^2$."
                },
                {
                  "step": "$x^6y^2 = 1600$",
                  "reason": "Power law: $(x^3)^2 = x^{3 \\cdot 2} = x^{6}$."
                },
                {
                  "step": "$\\dfrac{x^9y^2}{x^6y^2} = 8$",
                  "reason": "Eliminating an expression: both sides of the second equation are divided by the two sides of the last line, which is allowed as $1600$ is not $0$, and $12{,}800 \\div 1600 = 8$."
                },
                {
                  "step": "$x^3 = 8$",
                  "reason": "Cancelling a common factor: $x^9y^2 = x^3 \\cdot x^6y^2$, so the common factor $x^6y^2$ cancels."
                },
                {
                  "step": "$x = 2$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $x^3 = 8$ exactly when $x$ is the one real cube root of $8$, and $2^3 = 8$."
                },
                {
                  "step": "$(2)^3y = -40$",
                  "reason": "Substituting a value: $x$ is replaced by its value, in brackets, in the first equation."
                },
                {
                  "step": "$8y = -40$",
                  "reason": "Order of operations: the power comes first, $2^3 = 8$."
                },
                {
                  "step": "$y = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$2^{9} \\cdot (-5)^{2} = 12{,}800$",
                  "reason": "Checking a solution: $512 \\cdot 25 = 12{,}800$, so the pair also solves the second equation."
                },
                {
                  "step": "$(2, -5)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            },
            {
              "prompt": "Solve the system $x^2y^7 = -25{,}088$ and $xy^2 = -56$ for real numbers $x$ and $y$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-14, -2)",
              "lines": [
                {
                  "step": "Solve the system $x^2y^7 = -25{,}088$ and $xy^2 = -56$ for real numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(xy^2)^2 = 3136$",
                  "reason": "Raising both sides to a power: both sides of the second equation are squared, and $(-56)^2 = 3136$."
                },
                {
                  "step": "$x^2(y^2)^2 = 3136$",
                  "reason": "Power of a product: $(xy^2)^2 = x^2(y^2)^2$."
                },
                {
                  "step": "$x^2y^4 = 3136$",
                  "reason": "Power law: $(y^2)^2 = y^{2 \\cdot 2} = y^{4}$."
                },
                {
                  "step": "$\\dfrac{x^2y^7}{x^2y^4} = -8$",
                  "reason": "Eliminating an expression: both sides of the first equation are divided by the two sides of the last line, which is allowed as $3136$ is not $0$, and $-25{,}088 \\div 3136 = -8$."
                },
                {
                  "step": "$y^3 = -8$",
                  "reason": "Cancelling a common factor: $x^2y^7 = y^3 \\cdot x^2y^4$, so the common factor $x^2y^4$ cancels."
                },
                {
                  "step": "$y = -2$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $y^3 = -8$ exactly when $y$ is the one real cube root of $-8$, and $(-2)^3 = -8$."
                },
                {
                  "step": "$x(-2)^2 = -56$",
                  "reason": "Substituting a value: $y$ is replaced by its value, in brackets, in the second equation."
                },
                {
                  "step": "$4x = -56$",
                  "reason": "Order of operations: the power comes first, $(-2)^2 = 4$."
                },
                {
                  "step": "$x = -14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$(-14)^{2} \\cdot (-2)^{7} = -25{,}088$",
                  "reason": "Checking a solution: $196 \\cdot (-128) = -25{,}088$, so the pair also solves the first equation."
                },
                {
                  "step": "$(-14, -2)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the solution $(x, y)$ of the system $5x^2 + 4xy = 9984$ and $-5xy - 4y^2 = 1664$ with $y$ positive.",
            "lines": [
              {
                "step": "Find the solution $(x, y)$ of the system $5x^2 + 4xy = 9984$ and $-5xy - 4y^2 = 1664$ with $y$ positive.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x(5x + 4y) = 9984$",
                "reason": "Taking out a common factor: each term of the first left side holds $x$."
              },
              {
                "step": "$-y(5x + 4y) = 1664$",
                "reason": "Taking out a common factor: each term of the second left side holds $-y$, and taking $-y$ out changes the sign of each term left in the bracket."
              },
              {
                "step": "Neither $-y$ nor $5x + 4y$ is $0$.",
                "reason": "Never divide by an expression that may be zero: the product of $-y$ and $5x + 4y$ is $1664$, not $0$, and a product with a factor $0$ is $0$."
              },
              {
                "step": "$\\dfrac{x(5x + 4y)}{-y(5x + 4y)} = 6$",
                "reason": "Eliminating an expression: both sides of $x(5x + 4y) = 9984$ are divided by the two sides of $-y(5x + 4y) = 1664$, which is allowed as neither $-y$ nor $5x + 4y$ is $0$, and $\\dfrac{9984}{1664} = 6$."
              },
              {
                "step": "$\\dfrac{x}{-y} = 6$",
                "reason": "Cancelling a common factor: the factor $5x + 4y$ stands above and below the line, so it cancels."
              },
              {
                "step": "$x = -6y$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-y$, which is not $0$."
              },
              {
                "step": "$-y(5 \\cdot (-6y) + 4y) = 1664$",
                "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in $-y(5x + 4y) = 1664$."
              },
              {
                "step": "$-y \\cdot (-26y) = 1664$",
                "reason": "Collecting like terms: the bracket holds $-30y$ and $4y$, and $-30 + 4 = -26$."
              },
              {
                "step": "$26y^2 = 1664$",
                "reason": "Product law: $y \\cdot y = y^2$, so the product of $-y$ and $(-26y)$ is $26y^2$, by the sign rules for products."
              },
              {
                "step": "$y^2 = 64$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $26$."
              },
              {
                "step": "Either $y = 8$ or $y = -8$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: $64 = 8^2$."
              },
              {
                "step": "$y = 8$",
                "reason": "Answering the question asked: the solution asked for has $y$ positive."
              },
              {
                "step": "$x = -6(8)$",
                "reason": "Substituting a value: $y$ is replaced by its value, in brackets, in $x = -6y$."
              },
              {
                "step": "$x = -48$",
                "reason": "Order of operations: the product is worked out, $-6 \\cdot 8 = -48$."
              },
              {
                "step": "$(-48, 8)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the solution $(x, y)$ of the system $2x^2 + 5xy = 882$ and $2xy + 5y^2 = 441$ with $y$ positive.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(14, 7)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of the system $2x^2 + 5xy = 882$ and $2xy + 5y^2 = 441$ with $y$ positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(2x + 5y) = 882$",
                  "reason": "Taking out a common factor: each term of the first left side holds $x$."
                },
                {
                  "step": "$y(2x + 5y) = 441$",
                  "reason": "Taking out a common factor: each term of the second left side holds $y$."
                },
                {
                  "step": "Neither $y$ nor $2x + 5y$ is $0$.",
                  "reason": "Never divide by an expression that may be zero: the product of $y$ and $2x + 5y$ is $441$, not $0$, and a product with a factor $0$ is $0$."
                },
                {
                  "step": "$\\dfrac{x(2x + 5y)}{y(2x + 5y)} = 2$",
                  "reason": "Eliminating an expression: both sides of $x(2x + 5y) = 882$ are divided by the two sides of $y(2x + 5y) = 441$, which is allowed as neither $y$ nor $2x + 5y$ is $0$, and $\\dfrac{882}{441} = 2$."
                },
                {
                  "step": "$\\dfrac{x}{y} = 2$",
                  "reason": "Cancelling a common factor: the factor $2x + 5y$ stands above and below the line, so it cancels."
                },
                {
                  "step": "$x = 2y$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not $0$."
                },
                {
                  "step": "$y(2 \\cdot 2y + 5y) = 441$",
                  "reason": "Substitution: the expression for $x$ goes in place of $x$ in $y(2x + 5y) = 441$."
                },
                {
                  "step": "$y \\cdot 9y = 441$",
                  "reason": "Collecting like terms: the bracket holds $4y$ and $5y$, and $4 + 5 = 9$."
                },
                {
                  "step": "$9y^2 = 441$",
                  "reason": "Product law: $y \\cdot y = y^2$, so the product of $y$ and $9y$ is $9y^2$."
                },
                {
                  "step": "$y^2 = 49$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                },
                {
                  "step": "Either $y = 7$ or $y = -7$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: $49 = 7^2$."
                },
                {
                  "step": "$y = 7$",
                  "reason": "Answering the question asked: the solution asked for has $y$ positive."
                },
                {
                  "step": "$x = 2(7)$",
                  "reason": "Substituting a value: $y$ is replaced by its value, in brackets, in $x = 2y$."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Order of operations: the product is worked out, $2 \\cdot 7 = 14$."
                },
                {
                  "step": "$(14, 7)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            },
            {
              "prompt": "Find the solution $(x, y)$ of the system $x^2 + 3xy = 3240$ and $xy + 3y^2 = 648$ with $y$ positive.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(45, 9)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of the system $x^2 + 3xy = 3240$ and $xy + 3y^2 = 648$ with $y$ positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 3y) = 3240$",
                  "reason": "Taking out a common factor: each term of the first left side holds $x$."
                },
                {
                  "step": "$y(x + 3y) = 648$",
                  "reason": "Taking out a common factor: each term of the second left side holds $y$."
                },
                {
                  "step": "Neither $y$ nor $x + 3y$ is $0$.",
                  "reason": "Never divide by an expression that may be zero: the product of $y$ and $x + 3y$ is $648$, not $0$, and a product with a factor $0$ is $0$."
                },
                {
                  "step": "$\\dfrac{x(x + 3y)}{y(x + 3y)} = 5$",
                  "reason": "Eliminating an expression: both sides of $x(x + 3y) = 3240$ are divided by the two sides of $y(x + 3y) = 648$, which is allowed as neither $y$ nor $x + 3y$ is $0$, and $\\dfrac{3240}{648} = 5$."
                },
                {
                  "step": "$\\dfrac{x}{y} = 5$",
                  "reason": "Cancelling a common factor: the factor $x + 3y$ stands above and below the line, so it cancels."
                },
                {
                  "step": "$x = 5y$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not $0$."
                },
                {
                  "step": "$y(5y + 3y) = 648$",
                  "reason": "Substitution: the expression for $x$ goes in place of $x$ in $y(x + 3y) = 648$."
                },
                {
                  "step": "$y \\cdot 8y = 648$",
                  "reason": "Collecting like terms: the bracket holds $5y$ and $3y$, and $5 + 3 = 8$."
                },
                {
                  "step": "$8y^2 = 648$",
                  "reason": "Product law: $y \\cdot y = y^2$, so the product of $y$ and $8y$ is $8y^2$."
                },
                {
                  "step": "$y^2 = 81$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "Either $y = 9$ or $y = -9$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: $81 = 9^2$."
                },
                {
                  "step": "$y = 9$",
                  "reason": "Answering the question asked: the solution asked for has $y$ positive."
                },
                {
                  "step": "$x = 5(9)$",
                  "reason": "Substituting a value: $y$ is replaced by its value, in brackets, in $x = 5y$."
                },
                {
                  "step": "$x = 45$",
                  "reason": "Order of operations: the product is worked out, $5 \\cdot 9 = 45$."
                },
                {
                  "step": "$(45, 9)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            },
            {
              "prompt": "Find the solution $(x, y)$ of the system $3x^2 + xy = 1100$ and $3xy + y^2 = -275$ with $y$ positive.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-20, 5)",
              "lines": [
                {
                  "step": "Find the solution $(x, y)$ of the system $3x^2 + xy = 1100$ and $3xy + y^2 = -275$ with $y$ positive.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(3x + y) = 1100$",
                  "reason": "Taking out a common factor: each term of the first left side holds $x$."
                },
                {
                  "step": "$y(3x + y) = -275$",
                  "reason": "Taking out a common factor: each term of the second left side holds $y$."
                },
                {
                  "step": "Neither $y$ nor $3x + y$ is $0$.",
                  "reason": "Never divide by an expression that may be zero: the product of $y$ and $3x + y$ is $-275$, not $0$, and a product with a factor $0$ is $0$."
                },
                {
                  "step": "$\\dfrac{x(3x + y)}{y(3x + y)} = -4$",
                  "reason": "Eliminating an expression: both sides of $x(3x + y) = 1100$ are divided by the two sides of $y(3x + y) = -275$, which is allowed as neither $y$ nor $3x + y$ is $0$, and $\\dfrac{1100}{-275} = -4$."
                },
                {
                  "step": "$\\dfrac{x}{y} = -4$",
                  "reason": "Cancelling a common factor: the factor $3x + y$ stands above and below the line, so it cancels."
                },
                {
                  "step": "$x = -4y$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $y$, which is not $0$."
                },
                {
                  "step": "$y(3 \\cdot (-4y) + y) = -275$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in $y(3x + y) = -275$."
                },
                {
                  "step": "$y \\cdot (-11y) = -275$",
                  "reason": "Collecting like terms: the bracket holds $-12y$ and $y$, and $-12 + 1 = -11$."
                },
                {
                  "step": "$-11y^2 = -275$",
                  "reason": "Product law: $y \\cdot y = y^2$, so the product of $y$ and $(-11y)$ is $-11y^2$."
                },
                {
                  "step": "$y^2 = 25$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-11$."
                },
                {
                  "step": "Either $y = 5$ or $y = -5$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: $25 = 5^2$."
                },
                {
                  "step": "$y = 5$",
                  "reason": "Answering the question asked: the solution asked for has $y$ positive."
                },
                {
                  "step": "$x = -4(5)$",
                  "reason": "Substituting a value: $y$ is replaced by its value, in brackets, in $x = -4y$."
                },
                {
                  "step": "$x = -20$",
                  "reason": "Order of operations: the product is worked out, $-4 \\cdot 5 = -20$."
                },
                {
                  "step": "$(-20, 5)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t186-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $y^2 + 9xy = 826$ and $15y - 9xy = -420$ with $y$ positive, and write that line right.",
            "given": [
              "$(y^2 + 9xy) + (15y - 9xy) = 826 + (-420)$",
              "$y^2 + 15y = 406$",
              "$y^2 + 15y - 406 = 0$",
              "$(y + 14)(y - 29) = 0$",
              "$y = -14$ or $y = 29$",
              "$y = 29$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $y^2 + 9xy = 826$ and $15y - 9xy = -420$ with $y$ positive, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 writes $y^2 + 15y - 406$ as $(y + 14)(y - 29)$, with the sign in each bracket swapped.",
                "reason": "A sign lost: $(y + 14)(y - 29)$ multiplies out to $y^2 - 15y - 406$, and the two numbers with sum $15$ and product $-406$ are $-14$ and $29$."
              },
              {
                "step": "Lines 1 to 3 are right, and the lines after line 4 go on from it, so line 4 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
              },
              {
                "step": "Line 4 written right is $(y - 14)(y + 29) = 0$.",
                "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $x$, where $(x, y)$ is the solution of the system $y^2 + 5xy = -114$ and $16y + 5xy = -171$ with $y$ positive, and write that line right.",
              "given": [
                "$(y^2 + 5xy) - (16y + 5xy) = -114 - (-171)$",
                "$y^2 + 16y = 57$",
                "$y^2 + 16y - 57 = 0$",
                "$(y - 3)(y + 19) = 0$",
                "$y = 3$ or $y = -19$",
                "$y = 3$",
                "$(3)^2 + 5x(3) = -114$",
                "$9 + 15x = -114$",
                "$15x = -123$",
                "$x = -\\dfrac{41}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y^2-16*y = 57",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x$, where $(x, y)$ is the solution of the system $y^2 + 5xy = -114$ and $16y + 5xy = -171$ with $y$ positive, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $16y + 5xy$ from $y^2 + 5xy$ and keeps the sign of $16y$, so its left side is $y^2 + 16y$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so taking away $16y$ leaves $-16y$, and the left side is $y^2 - 16y$."
                },
                {
                  "step": "Line 1 is right, and the lines after line 2 go on from it, so line 2 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 2 written right is $y^2 - 16y = 57$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $x^2 - 5xy = 931$ and $4x + 5xy = -494$ with $x$ positive, and write that line right.",
              "given": [
                "$(x^2 - 5xy) + (4x + 5xy) = 931 + (-494)$",
                "$x^2 + 4x = 437$",
                "$x^2 + 4x - 437 = 0$",
                "$(x - 19)(x + 23) = 0$",
                "$x = 19$ or $x = -23$",
                "$x = 19$",
                "$(19)^2 - 5(19)y = 931$",
                "$361 - 95y = 931$",
                "$-95y = 1292$",
                "$y = -\\dfrac{68}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 9: -95*y = 570",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $x^2 - 5xy = 931$ and $4x + 5xy = -494$ with $x$ positive, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 9 moves $361$ to the right side and keeps its sign, so the right side is $931 + 361$.",
                  "reason": "A sign lost: taking $361$ from both sides leaves $931 - 361 = 570$ on the right."
                },
                {
                  "step": "Lines 1 to 8 are right, and the lines after line 9 go on from it, so line 9 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 9 written right is $-95y = 570$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $y^2 - 7xy = -341$ and $-16y - 7xy = -638$ with $y$ positive, and write that line right.",
              "given": [
                "$(y^2 - 7xy) - (-16y - 7xy) = -341 - (-638)$",
                "$y^2 - 16y = 297$",
                "$y^2 - 16y - 297 = 0$",
                "$(y - 27)(y + 11) = 0$",
                "$y = 27$ or $y = -11$",
                "$y = 27$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y^2+16*y = 297",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $y^2 - 7xy = -341$ and $-16y - 7xy = -638$ with $y$ positive, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $-16y - 7xy$ from $y^2 - 7xy$ and keeps the sign of $-16y$, so its left side is $y^2 - 16y$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so taking away $-16y$ leaves $16y$, and the left side is $y^2 + 16y$."
                },
                {
                  "step": "Line 1 is right, and the lines after line 2 go on from it, so line 2 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 2 written right is $y^2 + 16y = 297$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $x$, where $(x, y)$ is the solution of the system $x^2y = -968$ and $xy^3 = 176$ for real numbers $x$ and $y$, and write that line right.",
            "given": [
              "$(xy^3)^2 = 176^2 = 30{,}976$",
              "$x^2y^6 = 30{,}976$",
              "$x^2y^6 = 30{,}976 \\div (-968) = -32$",
              "$y^5 = -32$",
              "$y = \\sqrt[5]{-32} = -2$",
              "$-8x = 176$",
              "$x = 176 \\div (-8) = -22$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $x$, where $(x, y)$ is the solution of the system $x^2y = -968$ and $xy^3 = 176$ for real numbers $x$ and $y$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 divides the right side of line 2 by $-968$, leaves its left side as it is, and runs on with a second equals sign, so it states $x^2y^6 = -32$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 $x^2y^6$ is $30{,}976$."
              },
              {
                "step": "Lines 1 and 2 are right, and the lines after line 3 go on from it, so line 3 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
              },
              {
                "step": "Line 3 written right is $\\dfrac{x^2y^6}{x^2y} = -32$.",
                "reason": "Each side has the same thing done to it, and nothing else, so the line written right follows from the lines before it by a rule that holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $x^2 + 4xy = 833$ and $10x - 4xy = -374$ with $x$ positive, and write that line right.",
              "given": [
                "$x^2 + 10x = 833 + (-374) = 459$",
                "$x^2 + 10x - 459 = 0$",
                "$(x - 17)(x + 27) = 0$",
                "$x = 17$",
                "$289 + 68y = 833$",
                "$289 + 68y = 833 - 289 = 544$",
                "$y = 544 \\div 68 = 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 68*y = 544",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $x^2 + 4xy = 833$ and $10x - 4xy = -374$ with $x$ positive, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 takes $289$ from the right side alone and runs on with a second equals sign, so it states $289 + 68y = 544$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 5 $289 + 68y$ is $833$."
                },
                {
                  "step": "Lines 1 to 5 are right, and the lines after line 6 go on from it, so line 6 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
                },
                {
                  "step": "Line 6 written right is $68y = 544$.",
                  "reason": "Each side has the same thing done to it, and nothing else, so the line written right follows from the lines before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $x^2y = -189$ and $xy^2 = 1323$ for real numbers $x$ and $y$, and write that line right.",
              "given": [
                "$(x^2y)^2 = (-189)^2 = 35{,}721$",
                "$x^4y^2 = 35{,}721$",
                "$\\dfrac{x^4y^2}{xy^2} = 35{,}721 \\div 1323 = 27$",
                "$x^3 = 27$",
                "$x^3 = \\sqrt[3]{27} = 3$",
                "$9y = -189$",
                "$y = -189 \\div 9 = -21$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x = 3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $y$, where $(x, y)$ is the solution of the system $x^2y = -189$ and $xy^2 = 1323$ for real numbers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 takes the cube root of the right side of line 4, leaves the left side as it is, and runs on with a second equals sign, so it states $x^3 = 3$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 4 $x^3$ is $27$."
                },
                {
                  "step": "Lines 1 to 4 are right, and the lines after line 5 go on from it, so line 5 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
                },
                {
                  "step": "Line 5 written right is $x = 3$.",
                  "reason": "Each side has the same thing done to it, and nothing else, so the line written right follows from the lines before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x$, where $(x, y)$ is the solution of the system $y^2 - 7xy = 1332$ and $-11y + 7xy = -1206$ with $y$ positive, and write that line right.",
              "given": [
                "$y^2 - 11y = 1332 + (-1206) = 126$",
                "$y^2 - 11y = 126 - 126 = 0$",
                "$(y - 18)(y + 7) = 0$",
                "$y = 18$",
                "$324 - 126x = 1332$",
                "$-126x = 1332 - 324 = 1008$",
                "$x = 1008 \\div (-126) = -8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y^2-11*y-126 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x$, where $(x, y)$ is the solution of the system $y^2 - 7xy = 1332$ and $-11y + 7xy = -1206$ with $y$ positive, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $126$ from the right side alone and runs on with a second equals sign, so it states $y^2 - 11y = 0$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 $y^2 - 11y$ is $126$."
                },
                {
                  "step": "Line 1 is right, and the lines after line 2 go on from it, so line 2 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
                },
                {
                  "step": "Line 2 written right is $y^2 - 11y - 126 = 0$.",
                  "reason": "Each side has the same thing done to it, and nothing else, so the line written right follows from the lines before it by a rule that holds."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t186-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation in $x$ and $y$ that fact 2 gives, with the number of chairs on the left, where $x$ is the number of rows of chairs in a hall and $y$ is the number of chairs in each row. Fact 1: Each row has 6 more chairs than there are rows. Fact 2: The hall holds 280 chairs.",
            "lines": [
              {
                "step": "Write the equation in $x$ and $y$ that fact 2 gives, with the number of chairs on the left, where $x$ is the number of rows of chairs in a hall and $y$ is the number of chairs in each row. Fact 1: Each row has 6 more chairs than there are rows. Fact 2: The hall holds 280 chairs.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The $x$ rows of $y$ chairs each hold $xy$ chairs.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
              },
              {
                "step": "$xy = 280$",
                "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation in $x$ and $y$ that fact 1 gives, with the product on the left, where $x$ is the first of two numbers and $y$ is the second. Fact 1: The product of the two numbers is 21 more than the square of the first. Fact 2: The second number is 3 more than the first.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*y = x^2+21",
              "lines": [
                {
                  "step": "Write the equation in $x$ and $y$ that fact 1 gives, with the product on the left, where $x$ is the first of two numbers and $y$ is the second. Fact 1: The product of the two numbers is 21 more than the square of the first. Fact 2: The second number is 3 more than the first.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of the two numbers is $xy$, and 21 more than the square of the first is $x^2 + 21$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$xy = x^2 + 21$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write the equation in $x$ and $y$ that fact 1 gives, with the product on the left and nothing multiplied out, where $x$ is the first of two numbers and $y$ is the second. Fact 1: The first number times the sum of the two numbers is 72. Fact 2: The second number times the sum of the two numbers is 9.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*(x+y) = 72",
              "lines": [
                {
                  "step": "Write the equation in $x$ and $y$ that fact 1 gives, with the product on the left and nothing multiplied out, where $x$ is the first of two numbers and $y$ is the second. Fact 1: The first number times the sum of the two numbers is 72. Fact 2: The second number times the sum of the two numbers is 9.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the two numbers is $x + y$, kept in a bracket, and the first number times it is $x(x + y)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$x(x + y) = 72$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write the equation in $x$ and $y$ that fact 1 gives, with the number of apples left on the left and nothing multiplied out, where $x$ is the number of apples in each bag and $y$ is the number of bags. Fact 1: Taking 2 apples out of each bag leaves 120 apples in the bags. Fact 2: Each bag holds 4 more apples than there are bags.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y*(x-2) = 120",
              "lines": [
                {
                  "step": "Write the equation in $x$ and $y$ that fact 1 gives, with the number of apples left on the left and nothing multiplied out, where $x$ is the number of apples in each bag and $y$ is the number of bags. Fact 1: Taking 2 apples out of each bag leaves 120 apples in the bags. Fact 2: Each bag holds 4 more apples than there are bags.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each bag keeps $x - 2$ apples, so the $y$ bags keep $y(x - 2)$ apples.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$y(x - 2) = 120$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
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
