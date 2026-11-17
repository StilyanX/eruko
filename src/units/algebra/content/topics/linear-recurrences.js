export default {
  "number": 238,
  "title": "Linear recurrences of order 2",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "221-223"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find a closed form for $a_n$, where $a_0 = 9$, $a_1 = 59$ and $a_{n+2} = 12a_{n+1} - 35a_n$ for every whole number $n$.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "2*5^n+7*7^n",
    "solution": [
      "Find a closed form for $a_n$, where $a_0 = 9$, $a_1 = 59$ and $a_{n+2} = 12a_{n+1} - 35a_n$ for every whole number $n$.",
      "$x^2 = 12x - 35$",
      "$x^2 - 12x + 35 = 0$",
      "$(x - 5)(x - 7) = 0$",
      "The roots are $5$ and $7$.",
      "$a_n = y \\cdot 5^n + z \\cdot 7^n$",
      "$y + z = 9$",
      "$5y + 7z = 59$",
      "$2z = 14$",
      "$z = 7$",
      "$y = 2$",
      "$a_n = 2 \\cdot 5^n + 7 \\cdot 7^n$"
    ]
  },
  "ideas": [
    {
      "name": "Characteristic equation",
      "concrete": "The powers $2^n$ fit $a_{n+2} = 9a_{n+1} - 14a_n$: $2^{n+2} = 9 \\cdot 2^{n+1} - 14 \\cdot 2^n$ for every whole number $n$, since $4 = 18 - 14$. The powers $7^n$ fit it too, since $49 = 63 - 14$; and $2$ and $7$ are the two roots of $x^2 = 9x - 14$.",
      "general": "For numbers $b$ and $c$ with $c \\ne 0$, a **linear recurrence of order 2** is $a_{n+2} = ba_{n+1} + ca_n$ for every whole number $n$: the two starting terms $a_0$ and $a_1$ fix every later term. Its **characteristic equation** is $x^2 = bx + c$, written by putting $x^2$, $x$ and $1$ in place of $a_{n+2}$, $a_{n+1}$ and $a_n$; with a whole number $m$ from $2$ up in front, $ma_{n+2} = ba_{n+1} + ca_n$ has the characteristic equation $mx^2 = bx + c$. When the characteristic equation has two different roots $r_1$ and $r_2$, real or not, every sequence that satisfies the recurrence is $a_n = yr_1^n + zr_2^n$ for two numbers $y$ and $z$: the **general solution (distinct roots)**. When it has a double root $r$, every such sequence is $a_n = (y + zn)r^n$: the **general solution (double root)**. In both, $n = 0$ and $n = 1$ give two equations that fix $y$ and $z$."
    }
  ],
  "kinds": [
    {
      "id": "t238-k1",
      "forms": [
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_0 = 1$, $a_1 = 14$ and $a_{n+2} = 13a_{n+1} - 40a_n$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_0 = 1$, $a_1 = 14$ and $a_{n+2} = 13a_{n+1} - 40a_n$ for every whole number $n$.",
                "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
              },
              {
                "step": "$x^2 = 13x - 40$",
                "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
              },
              {
                "step": "$x^2 - 13x + 40 = 0$",
                "reason": "Adding the same number to both sides: $13x - 40$ is taken from both sides."
              },
              {
                "step": "$(x - 5)(x - 8) = 0$",
                "reason": "Factoring a quadratic: $-5$ and $-8$ have sum $-13$ and product $40$."
              },
              {
                "step": "The roots are $5$ and $8$.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "$a_n = y \\cdot 5^n + z \\cdot 8^n$",
                "reason": "General solution (distinct roots): the roots $5$ and $8$ are different, so two numbers $y$ and $z$ give every term."
              },
              {
                "step": "$y + z = 1$",
                "reason": "Substituting a value: $n = 0$ in line 6, with $5^0 = 8^0 = 1$ and $a_0 = 1$."
              },
              {
                "step": "$5y + 8z = 14$",
                "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 14$."
              },
              {
                "step": "$3z = 9$",
                "reason": "Elimination: $5$ times line 7 is taken from line 8."
              },
              {
                "step": "$z = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$y = -2$",
                "reason": "Back-substitution: $z = 3$ goes into line 7."
              },
              {
                "step": "$a_n = -2 \\cdot 5^n + 3 \\cdot 8^n$",
                "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = -5$, $a_1 = -42$ and $a_{n+2} = 9a_{n+1} - 18a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*3^n-9*6^n",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = -5$, $a_1 = -42$ and $a_{n+2} = 9a_{n+1} - 18a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 9x - 18$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 9x + 18 = 0$",
                  "reason": "Adding the same number to both sides: $9x - 18$ is taken from both sides."
                },
                {
                  "step": "$(x - 3)(x - 6) = 0$",
                  "reason": "Factoring a quadratic: $-3$ and $-6$ have sum $-9$ and product $18$."
                },
                {
                  "step": "The roots are $3$ and $6$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$a_n = y \\cdot 3^n + z \\cdot 6^n$",
                  "reason": "General solution (distinct roots): the roots $3$ and $6$ are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = -5$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $3^0 = 6^0 = 1$ and $a_0 = -5$."
                },
                {
                  "step": "$3y + 6z = -42$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -42$."
                },
                {
                  "step": "$3z = -27$",
                  "reason": "Elimination: $3$ times line 7 is taken from line 8."
                },
                {
                  "step": "$z = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Back-substitution: $z = -9$ goes into line 7."
                },
                {
                  "step": "$a_n = 4 \\cdot 3^n - 9 \\cdot 6^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = 15$, $a_1 = 86$ and $a_{n+2} = 11a_{n+1} - 18a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "7*2^n+8*9^n",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = 15$, $a_1 = 86$ and $a_{n+2} = 11a_{n+1} - 18a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 11x - 18$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 11x + 18 = 0$",
                  "reason": "Adding the same number to both sides: $11x - 18$ is taken from both sides."
                },
                {
                  "step": "$(x - 2)(x - 9) = 0$",
                  "reason": "Factoring a quadratic: $-2$ and $-9$ have sum $-11$ and product $18$."
                },
                {
                  "step": "The roots are $2$ and $9$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$a_n = y \\cdot 2^n + z \\cdot 9^n$",
                  "reason": "General solution (distinct roots): the roots $2$ and $9$ are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 15$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $2^0 = 9^0 = 1$ and $a_0 = 15$."
                },
                {
                  "step": "$2y + 9z = 86$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 86$."
                },
                {
                  "step": "$7z = 56$",
                  "reason": "Elimination: $2$ times line 7 is taken from line 8."
                },
                {
                  "step": "$z = 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$y = 7$",
                  "reason": "Back-substitution: $z = 8$ goes into line 7."
                },
                {
                  "step": "$a_n = 7 \\cdot 2^n + 8 \\cdot 9^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = -1$, $a_1 = -34$ and $a_{n+2} = 13a_{n+1} - 36a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*4^n-6*9^n",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = -1$, $a_1 = -34$ and $a_{n+2} = 13a_{n+1} - 36a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 13x - 36$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 13x + 36 = 0$",
                  "reason": "Adding the same number to both sides: $13x - 36$ is taken from both sides."
                },
                {
                  "step": "$(x - 4)(x - 9) = 0$",
                  "reason": "Factoring a quadratic: $-4$ and $-9$ have sum $-13$ and product $36$."
                },
                {
                  "step": "The roots are $4$ and $9$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$a_n = y \\cdot 4^n + z \\cdot 9^n$",
                  "reason": "General solution (distinct roots): the roots $4$ and $9$ are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = -1$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $4^0 = 9^0 = 1$ and $a_0 = -1$."
                },
                {
                  "step": "$4y + 9z = -34$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -34$."
                },
                {
                  "step": "$5z = -30$",
                  "reason": "Elimination: $4$ times line 7 is taken from line 8."
                },
                {
                  "step": "$z = -6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$y = 5$",
                  "reason": "Back-substitution: $z = -6$ goes into line 7."
                },
                {
                  "step": "$a_n = 5 \\cdot 4^n - 6 \\cdot 9^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_0 = 3$, $a_1 = 40$ and $a_{n+2} = 16a_{n+1} - 64a_n$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_0 = 3$, $a_1 = 40$ and $a_{n+2} = 16a_{n+1} - 64a_n$ for every whole number $n$.",
                "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
              },
              {
                "step": "$x^2 = 16x - 64$",
                "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
              },
              {
                "step": "$x^2 - 16x + 64 = 0$",
                "reason": "Adding the same number to both sides: $16x - 64$ is taken from both sides."
              },
              {
                "step": "$(x - 8)^2 = 0$",
                "reason": "Square of a binomial: $(x - 8)^2 = x^2 - 16x + 64$."
              },
              {
                "step": "$x = 8$",
                "reason": "Double root: the one root is $8$, counted twice."
              },
              {
                "step": "$a_n = (y + zn) \\cdot 8^n$",
                "reason": "General solution (double root): the root $8$ is a double root, so two numbers $y$ and $z$ give every term."
              },
              {
                "step": "$y = 3$",
                "reason": "Substituting a value: $n = 0$ in line 6, with $8^0 = 1$ and $a_0 = 3$."
              },
              {
                "step": "$(y + z) \\cdot 8 = 40$",
                "reason": "Substituting a value: $n = 1$ in line 6, with $8^1 = 8$ and $a_1 = 40$."
              },
              {
                "step": "$8y + 8z = 40$",
                "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
              },
              {
                "step": "$8 \\cdot 3 + 8z = 40$",
                "reason": "Back-substitution: $y = 3$ goes into line 9."
              },
              {
                "step": "$8z = 16$",
                "reason": "Adding the same number to both sides: $24$ is taken from both sides."
              },
              {
                "step": "$z = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              },
              {
                "step": "$a_n = (3 + 2n) \\cdot 8^n$",
                "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = 4$, $a_1 = 10$ and $a_{n+2} = 10a_{n+1} - 25a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(4-2*n)*5^n",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = 4$, $a_1 = 10$ and $a_{n+2} = 10a_{n+1} - 25a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 10x - 25$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 10x + 25 = 0$",
                  "reason": "Adding the same number to both sides: $10x - 25$ is taken from both sides."
                },
                {
                  "step": "$(x - 5)^2 = 0$",
                  "reason": "Square of a binomial: $(x - 5)^2 = x^2 - 10x + 25$."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Double root: the one root is $5$, counted twice."
                },
                {
                  "step": "$a_n = (y + zn) \\cdot 5^n$",
                  "reason": "General solution (double root): the root $5$ is a double root, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $5^0 = 1$ and $a_0 = 4$."
                },
                {
                  "step": "$(y + z) \\cdot 5 = 10$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $5^1 = 5$ and $a_1 = 10$."
                },
                {
                  "step": "$5y + 5z = 10$",
                  "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
                },
                {
                  "step": "$5 \\cdot 4 + 5z = 10$",
                  "reason": "Back-substitution: $y = 4$ goes into line 9."
                },
                {
                  "step": "$5z = -10$",
                  "reason": "Adding the same number to both sides: $20$ is taken from both sides."
                },
                {
                  "step": "$z = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$a_n = (4 - 2n) \\cdot 5^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = 8$, $a_1 = 30$ and $a_{n+2} = 12a_{n+1} - 36a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(8-3*n)*6^n",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = 8$, $a_1 = 30$ and $a_{n+2} = 12a_{n+1} - 36a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 12x - 36$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 12x + 36 = 0$",
                  "reason": "Adding the same number to both sides: $12x - 36$ is taken from both sides."
                },
                {
                  "step": "$(x - 6)^2 = 0$",
                  "reason": "Square of a binomial: $(x - 6)^2 = x^2 - 12x + 36$."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Double root: the one root is $6$, counted twice."
                },
                {
                  "step": "$a_n = (y + zn) \\cdot 6^n$",
                  "reason": "General solution (double root): the root $6$ is a double root, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y = 8$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $6^0 = 1$ and $a_0 = 8$."
                },
                {
                  "step": "$(y + z) \\cdot 6 = 30$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $6^1 = 6$ and $a_1 = 30$."
                },
                {
                  "step": "$6y + 6z = 30$",
                  "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
                },
                {
                  "step": "$6 \\cdot 8 + 6z = 30$",
                  "reason": "Back-substitution: $y = 8$ goes into line 9."
                },
                {
                  "step": "$6z = -18$",
                  "reason": "Adding the same number to both sides: $48$ is taken from both sides."
                },
                {
                  "step": "$z = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$a_n = (8 - 3n) \\cdot 6^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = -5$, $a_1 = -36$ and $a_{n+2} = 8a_{n+1} - 16a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(-5-4*n)*4^n",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = -5$, $a_1 = -36$ and $a_{n+2} = 8a_{n+1} - 16a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 8x - 16$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 8x + 16 = 0$",
                  "reason": "Adding the same number to both sides: $8x - 16$ is taken from both sides."
                },
                {
                  "step": "$(x - 4)^2 = 0$",
                  "reason": "Square of a binomial: $(x - 4)^2 = x^2 - 8x + 16$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Double root: the one root is $4$, counted twice."
                },
                {
                  "step": "$a_n = (y + zn) \\cdot 4^n$",
                  "reason": "General solution (double root): the root $4$ is a double root, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y = -5$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $4^0 = 1$ and $a_0 = -5$."
                },
                {
                  "step": "$(y + z) \\cdot 4 = -36$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $4^1 = 4$ and $a_1 = -36$."
                },
                {
                  "step": "$4y + 4z = -36$",
                  "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
                },
                {
                  "step": "$4 \\cdot (-5) + 4z = -36$",
                  "reason": "Back-substitution: $y = -5$ goes into line 9."
                },
                {
                  "step": "$4z = -16$",
                  "reason": "Adding the same number to both sides: $20$ is added to both sides."
                },
                {
                  "step": "$z = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$a_n = (-5 - 4n) \\cdot 4^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 8$, $a_1 = 40$ and $a_{n+2} = 8a_{n+1} - 32a_n$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 8$, $a_1 = 40$ and $a_{n+2} = 8a_{n+1} - 32a_n$ for every whole number $n$.",
                "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
              },
              {
                "step": "$x^2 = 8x - 32$",
                "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
              },
              {
                "step": "$x^2 - 8x + 32 = 0$",
                "reason": "Adding the same number to both sides: $8x - 32$ is taken from both sides."
              },
              {
                "step": "$x = \\dfrac{8 \\pm \\sqrt{64 - 128}}{2}$",
                "reason": "Quadratic formula: the discriminant is $64 - 128 = -64$, below $0$."
              },
              {
                "step": "$x = \\dfrac{8 \\pm 8i}{2}$",
                "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-64} = 8i$."
              },
              {
                "step": "The roots are $4 + 4i$ and $4 - 4i$.",
                "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
              },
              {
                "step": "$a_n = y(4 + 4i)^n + z(4 - 4i)^n$",
                "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
              },
              {
                "step": "$y + z = 8$",
                "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = 8$."
              },
              {
                "step": "$y(4 + 4i) + z(4 - 4i) = 40$",
                "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 40$."
              },
              {
                "step": "$4i(y - z) = 8$",
                "reason": "Elimination: $4$ times line 8 is taken from line 9."
              },
              {
                "step": "$i(y - z) = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              },
              {
                "step": "$y - z = -2i$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
              },
              {
                "step": "$2y = 8 - 2i$",
                "reason": "Adding two equations: lines 8 and 12 are added."
              },
              {
                "step": "$y = 4 - i$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 8$, $a_1 = 49$ and $2a_{n+2} = 14a_{n+1} - 49a_n$ for every whole number $n$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "4-3*i",
              "lines": [
                {
                  "step": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 8$, $a_1 = 49$ and $2a_{n+2} = 14a_{n+1} - 49a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$2x^2 = 14x - 49$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$2x^2 - 14x + 49 = 0$",
                  "reason": "Adding the same number to both sides: $14x - 49$ is taken from both sides."
                },
                {
                  "step": "$x = \\dfrac{14 \\pm \\sqrt{196 - 392}}{4}$",
                  "reason": "Quadratic formula: the discriminant is $196 - 392 = -196$, below $0$."
                },
                {
                  "step": "$x = \\dfrac{14 \\pm 14i}{4}$",
                  "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-196} = 14i$."
                },
                {
                  "step": "The roots are $\\dfrac{7}{2} + \\dfrac{7}{2}i$ and $\\dfrac{7}{2} - \\dfrac{7}{2}i$.",
                  "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
                },
                {
                  "step": "$a_n = y\\left(\\dfrac{7}{2} + \\dfrac{7}{2}i\\right)^n + z\\left(\\dfrac{7}{2} - \\dfrac{7}{2}i\\right)^n$",
                  "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 8$",
                  "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = 8$."
                },
                {
                  "step": "$y\\left(\\dfrac{7}{2} + \\dfrac{7}{2}i\\right) + z\\left(\\dfrac{7}{2} - \\dfrac{7}{2}i\\right) = 49$",
                  "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 49$."
                },
                {
                  "step": "$\\dfrac{7}{2}i(y - z) = 21$",
                  "reason": "Elimination: $\\dfrac{7}{2}$ times line 8 is taken from line 9."
                },
                {
                  "step": "$i(y - z) = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{7}{2}$."
                },
                {
                  "step": "$y - z = -6i$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
                },
                {
                  "step": "$2y = 8 - 6i$",
                  "reason": "Adding two equations: lines 8 and 12 are added."
                },
                {
                  "step": "$y = 4 - 3i$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 7$, $a_1 = 30$ and $a_{n+2} = 12a_{n+1} - 72a_n$ for every whole number $n$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "(7+2*i)/2",
              "lines": [
                {
                  "step": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 7$, $a_1 = 30$ and $a_{n+2} = 12a_{n+1} - 72a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$x^2 = 12x - 72$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 12x + 72 = 0$",
                  "reason": "Adding the same number to both sides: $12x - 72$ is taken from both sides."
                },
                {
                  "step": "$x = \\dfrac{12 \\pm \\sqrt{144 - 288}}{2}$",
                  "reason": "Quadratic formula: the discriminant is $144 - 288 = -144$, below $0$."
                },
                {
                  "step": "$x = \\dfrac{12 \\pm 12i}{2}$",
                  "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-144} = 12i$."
                },
                {
                  "step": "The roots are $6 + 6i$ and $6 - 6i$.",
                  "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
                },
                {
                  "step": "$a_n = y(6 + 6i)^n + z(6 - 6i)^n$",
                  "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 7$",
                  "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = 7$."
                },
                {
                  "step": "$y(6 + 6i) + z(6 - 6i) = 30$",
                  "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 30$."
                },
                {
                  "step": "$6i(y - z) = -12$",
                  "reason": "Elimination: $6$ times line 8 is taken from line 9."
                },
                {
                  "step": "$i(y - z) = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$y - z = 2i$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
                },
                {
                  "step": "$2y = 7 + 2i$",
                  "reason": "Adding two equations: lines 8 and 12 are added."
                },
                {
                  "step": "$y = \\dfrac{7}{2} + i$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 4$, $a_1 = 36$ and $2a_{n+2} = 18a_{n+1} - 81a_n$ for every whole number $n$.",
              "form": "Answer as a complex number $a + bi$, as in 3-2*i.",
              "answer": "2-2*i",
              "lines": [
                {
                  "step": "Find the number $y$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 4$, $a_1 = 36$ and $2a_{n+2} = 18a_{n+1} - 81a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$2x^2 = 18x - 81$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$2x^2 - 18x + 81 = 0$",
                  "reason": "Adding the same number to both sides: $18x - 81$ is taken from both sides."
                },
                {
                  "step": "$x = \\dfrac{18 \\pm \\sqrt{324 - 648}}{4}$",
                  "reason": "Quadratic formula: the discriminant is $324 - 648 = -324$, below $0$."
                },
                {
                  "step": "$x = \\dfrac{18 \\pm 18i}{4}$",
                  "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-324} = 18i$."
                },
                {
                  "step": "The roots are $\\dfrac{9}{2} + \\dfrac{9}{2}i$ and $\\dfrac{9}{2} - \\dfrac{9}{2}i$.",
                  "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
                },
                {
                  "step": "$a_n = y\\left(\\dfrac{9}{2} + \\dfrac{9}{2}i\\right)^n + z\\left(\\dfrac{9}{2} - \\dfrac{9}{2}i\\right)^n$",
                  "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 4$",
                  "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = 4$."
                },
                {
                  "step": "$y\\left(\\dfrac{9}{2} + \\dfrac{9}{2}i\\right) + z\\left(\\dfrac{9}{2} - \\dfrac{9}{2}i\\right) = 36$",
                  "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 36$."
                },
                {
                  "step": "$\\dfrac{9}{2}i(y - z) = 18$",
                  "reason": "Elimination: $\\dfrac{9}{2}$ times line 8 is taken from line 9."
                },
                {
                  "step": "$i(y - z) = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{9}{2}$."
                },
                {
                  "step": "$y - z = -4i$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
                },
                {
                  "step": "$2y = 4 - 4i$",
                  "reason": "Adding two equations: lines 8 and 12 are added."
                },
                {
                  "step": "$y = 2 - 2i$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t238-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $a_{n+1} - 7a_n$ as an expression in $n$, where $a_0 = 4$, $a_1 = 81$ and $a_{n+2} = 15a_{n+1} - 56a_n$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find $a_{n+1} - 7a_n$ as an expression in $n$, where $a_0 = 4$, $a_1 = 81$ and $a_{n+2} = 15a_{n+1} - 56a_n$ for every whole number $n$.",
                "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
              },
              {
                "step": "$a_{n+2} - 7a_{n+1} = 15a_{n+1} - 56a_n - 7a_{n+1}$",
                "reason": "Linear recurrence of order 2: $a_{n+2} = 15a_{n+1} - 56a_n$ goes in for $a_{n+2}$."
              },
              {
                "step": "$a_{n+2} - 7a_{n+1} = 8a_{n+1} - 56a_n$",
                "reason": "Collecting like terms: $15a_{n+1} - 7a_{n+1} = 8a_{n+1}$."
              },
              {
                "step": "$a_{n+2} - 7a_{n+1} = 8(a_{n+1} - 7a_n)$",
                "reason": "Common factor: $8$ is taken out; this holds for every whole number $n$."
              },
              {
                "step": "$a_1 - 7a_0 = 81 - 7 \\cdot 4 = 53$",
                "reason": "Substituting a value: $a_0 = 4$ and $a_1 = 81$."
              },
              {
                "step": "So the numbers $a_{n+1} - 7a_n$ form a geometric sequence with first term $53$ and common ratio $8$.",
                "reason": "Geometric sequence: by line 4 each term is $8$ times the one before, and line 5 gives the first."
              },
              {
                "step": "$a_{n+1} - 7a_n = 53 \\cdot 8^n$",
                "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $53 \\cdot 8^n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{n+1} - 4a_n$ as an expression in $n$, where $a_0 = -8$, $a_1 = -91$ and $a_{n+2} = 9a_{n+1} - 20a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-59*5^n",
              "lines": [
                {
                  "step": "Find $a_{n+1} - 4a_n$ as an expression in $n$, where $a_0 = -8$, $a_1 = -91$ and $a_{n+2} = 9a_{n+1} - 20a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$a_{n+2} - 4a_{n+1} = 9a_{n+1} - 20a_n - 4a_{n+1}$",
                  "reason": "Linear recurrence of order 2: $a_{n+2} = 9a_{n+1} - 20a_n$ goes in for $a_{n+2}$."
                },
                {
                  "step": "$a_{n+2} - 4a_{n+1} = 5a_{n+1} - 20a_n$",
                  "reason": "Collecting like terms: $9a_{n+1} - 4a_{n+1} = 5a_{n+1}$."
                },
                {
                  "step": "$a_{n+2} - 4a_{n+1} = 5(a_{n+1} - 4a_n)$",
                  "reason": "Common factor: $5$ is taken out; this holds for every whole number $n$."
                },
                {
                  "step": "$a_1 - 4a_0 = -91 - 4 \\cdot (-8) = -59$",
                  "reason": "Substituting a value: $a_0 = -8$ and $a_1 = -91$."
                },
                {
                  "step": "So the numbers $a_{n+1} - 4a_n$ form a geometric sequence with first term $-59$ and common ratio $5$.",
                  "reason": "Geometric sequence: by line 4 each term is $5$ times the one before, and line 5 gives the first."
                },
                {
                  "step": "$a_{n+1} - 4a_n = -59 \\cdot 5^n$",
                  "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $-59 \\cdot 5^n$."
                }
              ]
            },
            {
              "prompt": "Find $a_{n+1} - 6a_n$ as an expression in $n$, where $a_0 = -10$, $a_1 = -85$ and $a_{n+2} = 11a_{n+1} - 30a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-25*5^n",
              "lines": [
                {
                  "step": "Find $a_{n+1} - 6a_n$ as an expression in $n$, where $a_0 = -10$, $a_1 = -85$ and $a_{n+2} = 11a_{n+1} - 30a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$a_{n+2} - 6a_{n+1} = 11a_{n+1} - 30a_n - 6a_{n+1}$",
                  "reason": "Linear recurrence of order 2: $a_{n+2} = 11a_{n+1} - 30a_n$ goes in for $a_{n+2}$."
                },
                {
                  "step": "$a_{n+2} - 6a_{n+1} = 5a_{n+1} - 30a_n$",
                  "reason": "Collecting like terms: $11a_{n+1} - 6a_{n+1} = 5a_{n+1}$."
                },
                {
                  "step": "$a_{n+2} - 6a_{n+1} = 5(a_{n+1} - 6a_n)$",
                  "reason": "Common factor: $5$ is taken out; this holds for every whole number $n$."
                },
                {
                  "step": "$a_1 - 6a_0 = -85 - 6 \\cdot (-10) = -25$",
                  "reason": "Substituting a value: $a_0 = -10$ and $a_1 = -85$."
                },
                {
                  "step": "So the numbers $a_{n+1} - 6a_n$ form a geometric sequence with first term $-25$ and common ratio $5$.",
                  "reason": "Geometric sequence: by line 4 each term is $5$ times the one before, and line 5 gives the first."
                },
                {
                  "step": "$a_{n+1} - 6a_n = -25 \\cdot 5^n$",
                  "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $-25 \\cdot 5^n$."
                }
              ]
            },
            {
              "prompt": "Find $a_{n+1} - 7a_n$ as an expression in $n$, where $a_0 = 11$, $a_1 = 134$ and $a_{n+2} = 11a_{n+1} - 28a_n$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "57*4^n",
              "lines": [
                {
                  "step": "Find $a_{n+1} - 7a_n$ as an expression in $n$, where $a_0 = 11$, $a_1 = 134$ and $a_{n+2} = 11a_{n+1} - 28a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$a_{n+2} - 7a_{n+1} = 11a_{n+1} - 28a_n - 7a_{n+1}$",
                  "reason": "Linear recurrence of order 2: $a_{n+2} = 11a_{n+1} - 28a_n$ goes in for $a_{n+2}$."
                },
                {
                  "step": "$a_{n+2} - 7a_{n+1} = 4a_{n+1} - 28a_n$",
                  "reason": "Collecting like terms: $11a_{n+1} - 7a_{n+1} = 4a_{n+1}$."
                },
                {
                  "step": "$a_{n+2} - 7a_{n+1} = 4(a_{n+1} - 7a_n)$",
                  "reason": "Common factor: $4$ is taken out; this holds for every whole number $n$."
                },
                {
                  "step": "$a_1 - 7a_0 = 134 - 7 \\cdot 11 = 57$",
                  "reason": "Substituting a value: $a_0 = 11$ and $a_1 = 134$."
                },
                {
                  "step": "So the numbers $a_{n+1} - 7a_n$ form a geometric sequence with first term $57$ and common ratio $4$.",
                  "reason": "Geometric sequence: by line 4 each term is $4$ times the one before, and line 5 gives the first."
                },
                {
                  "step": "$a_{n+1} - 7a_n = 57 \\cdot 4^n$",
                  "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $57 \\cdot 4^n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the limit of $a_n$, where $a_0 = 83$, $a_1 = 39$ and $9a_{n+2} = 7a_{n+1} + 2a_n$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the limit of $a_n$, where $a_0 = 83$, $a_1 = 39$ and $9a_{n+2} = 7a_{n+1} + 2a_n$ for every whole number $n$.",
                "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
              },
              {
                "step": "$9x^2 = 7x + 2$",
                "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
              },
              {
                "step": "$9x^2 - 7x - 2 = 0$",
                "reason": "Adding the same number to both sides: $7x + 2$ is taken from both sides."
              },
              {
                "step": "$(x - 1)(9x + 2) = 0$",
                "reason": "Factoring a quadratic: $(x - 1)(9x + 2) = 9x^2 - 7x - 2$."
              },
              {
                "step": "The roots are $1$ and $-\\dfrac{2}{9}$.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "$a_n = y + z\\left(-\\dfrac{2}{9}\\right)^n$",
                "reason": "General solution (distinct roots): the roots $1$ and $-\\dfrac{2}{9}$ are different, and $1^n = 1$."
              },
              {
                "step": "$y + z = 83$",
                "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = 83$."
              },
              {
                "step": "$y - \\dfrac{2}{9}z = 39$",
                "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 39$."
              },
              {
                "step": "$9y - 2z = 351$",
                "reason": "Multiplying both sides by the same number: line 8 is multiplied by $9$."
              },
              {
                "step": "$11y = 517$",
                "reason": "Elimination: $2$ times line 7 is added to line 9."
              },
              {
                "step": "$y = 47$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
              },
              {
                "step": "The powers $\\left(-\\dfrac{2}{9}\\right)^n$ have the limit $0$.",
                "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $-\\dfrac{2}{9}$ lies between $-1$ and $1$."
              },
              {
                "step": "The limit of $a_n$ is $47 + z \\cdot 0 = 47$.",
                "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the limit of $a_n$, where $a_0 = -70$, $a_1 = -50$ and $9a_{n+2} = 13a_{n+1} - 4a_n$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "-34",
              "lines": [
                {
                  "step": "Find the limit of $a_n$, where $a_0 = -70$, $a_1 = -50$ and $9a_{n+2} = 13a_{n+1} - 4a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$9x^2 = 13x - 4$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$9x^2 - 13x + 4 = 0$",
                  "reason": "Adding the same number to both sides: $13x - 4$ is taken from both sides."
                },
                {
                  "step": "$(x - 1)(9x - 4) = 0$",
                  "reason": "Factoring a quadratic: $(x - 1)(9x - 4) = 9x^2 - 13x + 4$."
                },
                {
                  "step": "The roots are $1$ and $\\dfrac{4}{9}$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$a_n = y + z\\left(\\dfrac{4}{9}\\right)^n$",
                  "reason": "General solution (distinct roots): the roots $1$ and $\\dfrac{4}{9}$ are different, and $1^n = 1$."
                },
                {
                  "step": "$y + z = -70$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -70$."
                },
                {
                  "step": "$y + \\dfrac{4}{9}z = -50$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -50$."
                },
                {
                  "step": "$9y + 4z = -450$",
                  "reason": "Multiplying both sides by the same number: line 8 is multiplied by $9$."
                },
                {
                  "step": "$5y = -170$",
                  "reason": "Elimination: $4$ times line 7 is taken from line 9."
                },
                {
                  "step": "$y = -34$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "The powers $\\left(\\dfrac{4}{9}\\right)^n$ have the limit $0$.",
                  "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{4}{9}$ lies between $-1$ and $1$."
                },
                {
                  "step": "The limit of $a_n$ is $-34 + z \\cdot 0 = -34$.",
                  "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
                }
              ]
            },
            {
              "prompt": "Find the limit of $a_n$, where $a_0 = -37$, $a_1 = -45$ and $7a_{n+2} = 10a_{n+1} - 3a_n$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "-51",
              "lines": [
                {
                  "step": "Find the limit of $a_n$, where $a_0 = -37$, $a_1 = -45$ and $7a_{n+2} = 10a_{n+1} - 3a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$7x^2 = 10x - 3$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$7x^2 - 10x + 3 = 0$",
                  "reason": "Adding the same number to both sides: $10x - 3$ is taken from both sides."
                },
                {
                  "step": "$(x - 1)(7x - 3) = 0$",
                  "reason": "Factoring a quadratic: $(x - 1)(7x - 3) = 7x^2 - 10x + 3$."
                },
                {
                  "step": "The roots are $1$ and $\\dfrac{3}{7}$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$a_n = y + z\\left(\\dfrac{3}{7}\\right)^n$",
                  "reason": "General solution (distinct roots): the roots $1$ and $\\dfrac{3}{7}$ are different, and $1^n = 1$."
                },
                {
                  "step": "$y + z = -37$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -37$."
                },
                {
                  "step": "$y + \\dfrac{3}{7}z = -45$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -45$."
                },
                {
                  "step": "$7y + 3z = -315$",
                  "reason": "Multiplying both sides by the same number: line 8 is multiplied by $7$."
                },
                {
                  "step": "$4y = -204$",
                  "reason": "Elimination: $3$ times line 7 is taken from line 9."
                },
                {
                  "step": "$y = -51$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "The powers $\\left(\\dfrac{3}{7}\\right)^n$ have the limit $0$.",
                  "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{3}{7}$ lies between $-1$ and $1$."
                },
                {
                  "step": "The limit of $a_n$ is $-51 + z \\cdot 0 = -51$.",
                  "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
                }
              ]
            },
            {
              "prompt": "Find the limit of $a_n$, where $a_0 = -17$, $a_1 = -47$ and $7a_{n+2} = 4a_{n+1} + 3a_n$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "-38",
              "lines": [
                {
                  "step": "Find the limit of $a_n$, where $a_0 = -17$, $a_1 = -47$ and $7a_{n+2} = 4a_{n+1} + 3a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$7x^2 = 4x + 3$",
                  "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$7x^2 - 4x - 3 = 0$",
                  "reason": "Adding the same number to both sides: $4x + 3$ is taken from both sides."
                },
                {
                  "step": "$(x - 1)(7x + 3) = 0$",
                  "reason": "Factoring a quadratic: $(x - 1)(7x + 3) = 7x^2 - 4x - 3$."
                },
                {
                  "step": "The roots are $1$ and $-\\dfrac{3}{7}$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$a_n = y + z\\left(-\\dfrac{3}{7}\\right)^n$",
                  "reason": "General solution (distinct roots): the roots $1$ and $-\\dfrac{3}{7}$ are different, and $1^n = 1$."
                },
                {
                  "step": "$y + z = -17$",
                  "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -17$."
                },
                {
                  "step": "$y - \\dfrac{3}{7}z = -47$",
                  "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -47$."
                },
                {
                  "step": "$7y - 3z = -329$",
                  "reason": "Multiplying both sides by the same number: line 8 is multiplied by $7$."
                },
                {
                  "step": "$10y = -380$",
                  "reason": "Elimination: $3$ times line 7 is added to line 9."
                },
                {
                  "step": "$y = -38$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "The powers $\\left(-\\dfrac{3}{7}\\right)^n$ have the limit $0$.",
                  "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $-\\dfrac{3}{7}$ lies between $-1$ and $1$."
                },
                {
                  "step": "The limit of $a_n$ is $-38 + z \\cdot 0 = -38$.",
                  "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
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
      "id": "t238-p1",
      "method": "induction",
      "statement": "For numbers $b$ and $c$ with $c \\ne 0$ whose characteristic equation $x^2 = bx + c$ has two different roots $r_1$ and $r_2$, every sequence with $a_{n+2} = ba_{n+1} + ca_n$ for every whole number $n$ has $a_n = yr_1^n + zr_2^n$ for every whole number $n$, where $y = \\dfrac{a_1 - r_2a_0}{r_1 - r_2}$ and $z = \\dfrac{r_1a_0 - a_1}{r_1 - r_2}$: the general solution (distinct roots).",
      "idea": "The two starting terms fix $y$ and $z$; each root satisfies the characteristic equation, so the closed form obeys the recurrence too, and induction on two neighbouring terms at a time carries it to every term.",
      "lines": [
        {
          "line": "$r_1 - r_2 \\ne 0$",
          "reason": "Characteristic equation: $r_1$ and $r_2$ are its two roots, and they are different."
        },
        {
          "line": "$y + z = \\dfrac{a_1 - r_2a_0 + r_1a_0 - a_1}{r_1 - r_2}$",
          "reason": "Single fraction: the two fractions share the bottom $r_1 - r_2$, which is not $0$ by line 1."
        },
        {
          "line": "$y + z = \\dfrac{(r_1 - r_2)a_0}{r_1 - r_2}$",
          "reason": "Collecting like terms: $a_1 - a_1 = 0$, and $r_1a_0 - r_2a_0$ has the common factor $a_0$."
        },
        {
          "line": "$y + z = a_0$",
          "reason": "Cancelling a common factor: $r_1 - r_2$ is not $0$."
        },
        {
          "line": "$yr_1 + zr_2 = \\dfrac{r_1a_1 - r_1r_2a_0 + r_1r_2a_0 - r_2a_1}{r_1 - r_2}$",
          "reason": "Single fraction: the tops are multiplied out over the shared bottom $r_1 - r_2$."
        },
        {
          "line": "$yr_1 + zr_2 = \\dfrac{(r_1 - r_2)a_1}{r_1 - r_2}$",
          "reason": "Collecting like terms: the two terms in $r_1r_2a_0$ cancel, and $r_1a_1 - r_2a_1$ has the common factor $a_1$."
        },
        {
          "line": "$yr_1 + zr_2 = a_1$",
          "reason": "Cancelling a common factor: $r_1 - r_2$ is not $0$."
        },
        {
          "line": "The claim $a_n = yr_1^n + zr_2^n$ holds for $n = 0$ and for $n = 1$.",
          "reason": "Base case: lines 4 and 7, with the zero exponent $r_1^0 = r_2^0 = 1$."
        },
        {
          "line": "Assume that $a_k = yr_1^k + zr_2^k$ and $a_{k+1} = yr_1^{k+1} + zr_2^{k+1}$ for some whole number $k$.",
          "reason": "Inductive assumption: the claim for the two neighbouring terms $a_k$ and $a_{k+1}$."
        },
        {
          "line": "$a_{k+2} = ba_{k+1} + ca_k$",
          "reason": "Linear recurrence of order 2: the recurrence at $n = k$."
        },
        {
          "line": "$a_{k+2} = b(yr_1^{k+1} + zr_2^{k+1}) + c(yr_1^k + zr_2^k)$",
          "reason": "Inductive assumption: line 9 goes into line 10."
        },
        {
          "line": "$a_{k+2} = byr_1^{k+1} + bzr_2^{k+1} + cyr_1^k + czr_2^k$",
          "reason": "Multiplying out: $b$ and $c$ multiply each term of their brackets."
        },
        {
          "line": "$a_{k+2} = yr_1^k(br_1 + c) + zr_2^k(br_2 + c)$",
          "reason": "Common factor: by the product law $r_1^{k+1} = r_1^k \\cdot r_1$, so $yr_1^k$ comes out of two terms, and $zr_2^k$ out of the other two."
        },
        {
          "line": "So $br_1 + c = r_1^2$ and $br_2 + c = r_2^2$.",
          "reason": "A root satisfies its equation: $r_1$ and $r_2$ are roots of $x^2 = bx + c$."
        },
        {
          "line": "$a_{k+2} = yr_1^k \\cdot r_1^2 + zr_2^k \\cdot r_2^2$",
          "reason": "Substituting a value: line 14 goes into line 13."
        },
        {
          "line": "$a_{k+2} = yr_1^{k+2} + zr_2^{k+2}$",
          "reason": "Product law: $r_1^k \\cdot r_1^2 = r_1^{k+2}$, and the same for $r_2$."
        },
        {
          "line": "The claim holds for $a_{k+1}$ and $a_{k+2}$.",
          "reason": "Inductive step: the second half of line 9, and line 16."
        },
        {
          "line": "So $a_n = yr_1^n + zr_2^n$ for every whole number $n$.",
          "reason": "Induction: the base case is line 8 and the inductive step is lines 9 to 17."
        }
      ]
    },
    {
      "id": "t238-p2",
      "method": "induction",
      "statement": "For numbers $b$ and $c$ with $c \\ne 0$ whose characteristic equation $x^2 = bx + c$ has a double root $r$, every sequence with $a_{n+2} = ba_{n+1} + ca_n$ for every whole number $n$ has $a_n = (y + zn)r^n$ for every whole number $n$, where $y = a_0$ and $z = \\dfrac{a_1 - ra_0}{r}$: the general solution (double root).",
      "idea": "A double root fixes the recurrence as $a_{n+2} = 2ra_{n+1} - r^2a_n$; the two starting terms fix $y$ and $z$, and induction on two neighbouring terms at a time carries the closed form to every term.",
      "lines": [
        {
          "line": "$x^2 - bx - c = (x - r)^2$",
          "reason": "Double root: the quadratic $x^2 - bx - c$ is the square of $x - r$."
        },
        {
          "line": "$x^2 - bx - c = x^2 - 2rx + r^2$",
          "reason": "Square of a binomial: $(x - r)^2 = x^2 - 2rx + r^2$."
        },
        {
          "line": "So $b = 2r$ and $c = -r^2$.",
          "reason": "Identity Theorem: the coefficients of $x$ agree, and so do the constant terms."
        },
        {
          "line": "$r \\ne 0$",
          "reason": "Zero-product property: $r = 0$ would give $c = -r \\cdot r = 0$, and $c \\ne 0$."
        },
        {
          "line": "$(y + z \\cdot 0)r^0 = y = a_0$",
          "reason": "Base case at $n = 0$: zero exponent $r^0 = 1$, and $y = a_0$ as the statement sets it."
        },
        {
          "line": "$zr = a_1 - ra_0$",
          "reason": "Multiplying both sides by the same number: the statement's $z = \\dfrac{a_1 - ra_0}{r}$ times $r$, which is not $0$ by line 4."
        },
        {
          "line": "$(y + z)r = ra_0 + a_1 - ra_0$",
          "reason": "Multiplying out: $(y + z)r = yr + zr$, with $y = a_0$ and line 6."
        },
        {
          "line": "$(y + z)r = a_1$",
          "reason": "Collecting like terms: $ra_0 - ra_0 = 0$. This is the claim at $n = 1$."
        },
        {
          "line": "Assume that $a_k = (y + zk)r^k$ and $a_{k+1} = (y + z(k + 1))r^{k+1}$ for some whole number $k$.",
          "reason": "Inductive assumption: the claim for the two neighbouring terms $a_k$ and $a_{k+1}$."
        },
        {
          "line": "$a_{k+2} = 2ra_{k+1} - r^2a_k$",
          "reason": "Linear recurrence of order 2: the recurrence at $n = k$, with $b$ and $c$ from line 3."
        },
        {
          "line": "$a_{k+2} = 2r(y + z(k + 1))r^{k+1} - r^2(y + zk)r^k$",
          "reason": "Inductive assumption: line 9 goes into line 10."
        },
        {
          "line": "$a_{k+2} = r^{k+2}\\left(2(y + z(k + 1)) - (y + zk)\\right)$",
          "reason": "Common factor: by the product law $r \\cdot r^{k+1} = r^{k+2}$ and $r^2 \\cdot r^k = r^{k+2}$, so $r^{k+2}$ comes out."
        },
        {
          "line": "$a_{k+2} = r^{k+2}(y + zk + 2z)$",
          "reason": "Collecting like terms: $2y - y = y$ and $2zk + 2z - zk = zk + 2z$."
        },
        {
          "line": "$a_{k+2} = (y + z(k + 2))r^{k+2}$",
          "reason": "Common factor: $zk + 2z = z(k + 2)$."
        },
        {
          "line": "The claim holds for $a_{k+1}$ and $a_{k+2}$.",
          "reason": "Inductive step: the second half of line 9, and line 14."
        },
        {
          "line": "So $a_n = (y + zn)r^n$ for every whole number $n$.",
          "reason": "Induction: the base case is lines 5 and 8, and the inductive step is lines 9 to 15."
        }
      ]
    },
    {
      "id": "t238-p3",
      "method": "direct proof",
      "statement": "The sequence with $a_0 = 0$, $a_1 = 1$ and $a_{n+2} = a_{n+1} + a_n$ for every whole number $n$, the Fibonacci numbers, has $a_n = \\dfrac{1}{\\sqrt{5}}\\left(\\left(\\dfrac{1 + \\sqrt{5}}{2}\\right)^n - \\left(\\dfrac{1 - \\sqrt{5}}{2}\\right)^n\\right)$ for every whole number $n$: **Binet's formula**.",
      "idea": "The characteristic equation $x^2 = x + 1$ has two different real roots, so the general solution holds, and $a_0 = 0$, $a_1 = 1$ fix its two numbers.",
      "lines": [
        {
          "line": "$x^2 = x + 1$",
          "reason": "Characteristic equation: here $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
        },
        {
          "line": "$x^2 - x - 1 = 0$",
          "reason": "Adding the same number to both sides: $x + 1$ is taken from both sides."
        },
        {
          "line": "$x = \\dfrac{1 \\pm \\sqrt{5}}{2}$",
          "reason": "Quadratic formula: the discriminant is $1 + 4 = 5$."
        },
        {
          "line": "Write $r_1 = \\dfrac{1 + \\sqrt{5}}{2}$ and $r_2 = \\dfrac{1 - \\sqrt{5}}{2}$.",
          "reason": "Positive discriminant: the two real roots are different."
        },
        {
          "line": "$r_1 - r_2 = \\sqrt{5}$",
          "reason": "Collecting like terms: $\\dfrac{1 + \\sqrt{5} - 1 + \\sqrt{5}}{2} = \\dfrac{2\\sqrt{5}}{2}$."
        },
        {
          "line": "So $a_n = yr_1^n + zr_2^n$ for every whole number $n$, with $y = \\dfrac{a_1 - r_2a_0}{r_1 - r_2}$ and $z = \\dfrac{r_1a_0 - a_1}{r_1 - r_2}$.",
          "reason": "General solution (distinct roots): $c = 1$ is not $0$ and the roots are different."
        },
        {
          "line": "$y = \\dfrac{1 - r_2 \\cdot 0}{\\sqrt{5}} = \\dfrac{1}{\\sqrt{5}}$",
          "reason": "Substituting a value: $a_0 = 0$, $a_1 = 1$ and line 5."
        },
        {
          "line": "$z = \\dfrac{r_1 \\cdot 0 - 1}{\\sqrt{5}} = -\\dfrac{1}{\\sqrt{5}}$",
          "reason": "Substituting a value: $a_0 = 0$, $a_1 = 1$ and line 5."
        },
        {
          "line": "$a_n = \\dfrac{1}{\\sqrt{5}}r_1^n - \\dfrac{1}{\\sqrt{5}}r_2^n$",
          "reason": "Substituting a value: lines 7 and 8 go into line 6."
        },
        {
          "line": "$a_n = \\dfrac{1}{\\sqrt{5}}\\left(\\left(\\dfrac{1 + \\sqrt{5}}{2}\\right)^n - \\left(\\dfrac{1 - \\sqrt{5}}{2}\\right)^n\\right)$",
          "reason": "Common factor: $\\dfrac{1}{\\sqrt{5}}$ is taken out, and $r_1$, $r_2$ are written out from line 4."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t238-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $b$, $c$ and $r$, the sequence $a_n = r^n$ satisfies $a_{n+2} = ba_{n+1} + ca_n$ for every whole number $n$ exactly when $r$ is a root of the characteristic equation $x^2 = bx + c$. Facts it may use: linear recurrence of order 2, characteristic equation, substituting a value, zero exponent, product law, multiplying both sides by the same number, the distributive law (arithmetic).",
      "check": {
        "proof": [
          {
            "line": "Suppose that $r^{n+2} = br^{n+1} + cr^n$ for every whole number $n$.",
            "reason": "Linear recurrence of order 2: the sequence $a_n = r^n$ satisfies it."
          },
          {
            "line": "$r^2 = br^1 + cr^0$",
            "reason": "Substituting a value: $n = 0$ in line 1."
          },
          {
            "line": "$r^2 = br + c$",
            "reason": "Zero exponent: $r^0 = 1$, and $r^1 = r$."
          },
          {
            "line": "So $r$ is a root of $x^2 = bx + c$.",
            "reason": "Characteristic equation: line 3 is that equation at $x = r$."
          },
          {
            "line": "Suppose now that $r^2 = br + c$.",
            "reason": "Characteristic equation: $r$ is one of its roots."
          },
          {
            "line": "For every whole number $n$, $r^n \\cdot r^2 = r^n(br + c)$.",
            "reason": "Multiplying both sides by the same number: line 5 times $r^n$."
          },
          {
            "line": "$r^n \\cdot r^2 = br^n \\cdot r + cr^n$",
            "reason": "The distributive law, from arithmetic."
          },
          {
            "line": "$r^{n+2} = br^{n+1} + cr^n$",
            "reason": "Product law: $r^n \\cdot r^2 = r^{n+2}$ and $r^n \\cdot r = r^{n+1}$."
          },
          {
            "line": "So $a_n = r^n$ satisfies $a_{n+2} = ba_{n+1} + ca_n$ for every whole number $n$.",
            "reason": "Linear recurrence of order 2: line 8 is the recurrence for $a_n = r^n$, and lines 1 to 4 give the other direction."
          }
        ]
      }
    },
    {
      "id": "t238-s2",
      "method": "induction",
      "statement": "Prove that two sequences $a_n$ and $d_n$ with $a_{n+2} = ba_{n+1} + ca_n$ and $d_{n+2} = bd_{n+1} + cd_n$ for every whole number $n$, $a_0 = d_0$ and $a_1 = d_1$ have $a_n = d_n$ for every whole number $n$. Facts it may use: linear recurrence of order 2, induction, base case, inductive assumption, inductive step, substituting a value, transitive property.",
      "check": {
        "proof": [
          {
            "line": "Here $a_0 = d_0$ and $a_1 = d_1$.",
            "reason": "Base case: the claim \"$a_n = d_n$ and $a_{n+1} = d_{n+1}$\" at $n = 0$, as given."
          },
          {
            "line": "Assume that $a_k = d_k$ and $a_{k+1} = d_{k+1}$ for some whole number $k$.",
            "reason": "Inductive assumption: the claim at $n = k$."
          },
          {
            "line": "$a_{k+2} = ba_{k+1} + ca_k$",
            "reason": "Linear recurrence of order 2: the first recurrence at $n = k$."
          },
          {
            "line": "$a_{k+2} = bd_{k+1} + cd_k$",
            "reason": "Inductive assumption: line 2 goes into line 3."
          },
          {
            "line": "$d_{k+2} = bd_{k+1} + cd_k$",
            "reason": "Linear recurrence of order 2: the second recurrence at $n = k$."
          },
          {
            "line": "$a_{k+2} = d_{k+2}$",
            "reason": "Transitive property: lines 4 and 5 have the same right side."
          },
          {
            "line": "So $a_{k+1} = d_{k+1}$ and $a_{k+2} = d_{k+2}$.",
            "reason": "Inductive step: line 2 and line 6 give the claim at $n = k + 1$."
          },
          {
            "line": "So $a_n = d_n$ for every whole number $n$.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 7."
          }
        ]
      }
    },
    {
      "id": "t238-s3",
      "method": "direct proof",
      "statement": "Prove that for a number $r \\ne 0$ and a sequence with $a_{n+2} = 2ra_{n+1} - r^2a_n$ for every whole number $n$, the numbers $\\dfrac{a_n}{r^n}$ form an arithmetic sequence. Facts it may use: characteristic equation, square of a binomial, double root, general solution (double root), quotient law, arithmetic sequence, common difference, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "$x^2 = 2rx - r^2$",
            "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
          },
          {
            "line": "$(x - r)^2 = 0$",
            "reason": "Square of a binomial: $x^2 - 2rx + r^2 = (x - r)^2$, after $2rx - r^2$ is taken from both sides of line 1."
          },
          {
            "line": "The characteristic equation has the double root $r$.",
            "reason": "Double root: line 2."
          },
          {
            "line": "So $a_n = (y + zn)r^n$ for every whole number $n$, for two numbers $y$ and $z$.",
            "reason": "General solution (double root): line 3, with $c = -r^2 \\ne 0$."
          },
          {
            "line": "$\\dfrac{a_n}{r^n} = y + zn$",
            "reason": "Quotient law: $\\dfrac{r^n}{r^n} = r^0 = 1$, since $r \\ne 0$."
          },
          {
            "line": "$\\dfrac{a_{n+1}}{r^{n+1}} - \\dfrac{a_n}{r^n} = y + z(n + 1) - (y + zn)$",
            "reason": "Substituting a value: line 5 at $n + 1$ and at $n$."
          },
          {
            "line": "$\\dfrac{a_{n+1}}{r^{n+1}} - \\dfrac{a_n}{r^n} = z$",
            "reason": "Collecting like terms: $y - y = 0$ and $zn + z - zn = z$."
          },
          {
            "line": "So the numbers $\\dfrac{a_n}{r^n}$ form an arithmetic sequence with common difference $z$.",
            "reason": "Arithmetic sequence: each term less the one before is the same number $z$, by line 7."
          }
        ]
      }
    },
    {
      "id": "t238-s4",
      "method": "direct proof",
      "statement": "Prove that the Fibonacci numbers, $a_0 = 0$, $a_1 = 1$ and $a_{n+2} = a_{n+1} + a_n$ for every whole number $n$, differ from $\\dfrac{1}{\\sqrt{5}}\\left(\\dfrac{1 + \\sqrt{5}}{2}\\right)^n$ by less than $\\dfrac{1}{2}$ for every whole number $n$. Facts it may use: Binet's formula, absolute value (arithmetic), comparing numbers without a calculator, multiplying two inequalities of positive numbers.",
      "check": {
        "proof": [
          {
            "line": "$a_n - \\dfrac{1}{\\sqrt{5}}\\left(\\dfrac{1 + \\sqrt{5}}{2}\\right)^n = -\\dfrac{1}{\\sqrt{5}}\\left(\\dfrac{1 - \\sqrt{5}}{2}\\right)^n$",
            "reason": "Binet's formula: the first power cancels."
          },
          {
            "line": "$2 < \\sqrt{5} < 3$",
            "reason": "Comparing numbers without a calculator: $4 < 5 < 9$."
          },
          {
            "line": "$-1 < \\dfrac{1 - \\sqrt{5}}{2} < 0$",
            "reason": "Dividing an inequality by a positive number: by line 2, $1 - \\sqrt{5}$ lies between $-2$ and $-1$, and both sides are divided by $2$."
          },
          {
            "line": "$\\left|\\dfrac{1 - \\sqrt{5}}{2}\\right| < 1$",
            "reason": "Absolute value, from arithmetic: line 3 puts the number between $-1$ and $0$."
          },
          {
            "line": "$\\left|\\dfrac{1 - \\sqrt{5}}{2}\\right|^n \\le 1$",
            "reason": "Multiplying two inequalities of positive numbers, $n$ times: each factor is below $1$ by line 4, and the value is $1$ at $n = 0$."
          },
          {
            "line": "$\\left|\\left(\\dfrac{1 - \\sqrt{5}}{2}\\right)^n\\right| \\le 1$",
            "reason": "Absolute value, from arithmetic: the size of a product is the product of the sizes."
          },
          {
            "line": "$\\dfrac{1}{\\sqrt{5}} < \\dfrac{1}{2}$",
            "reason": "Comparing reciprocals: $\\sqrt{5} > 2$ by line 2."
          },
          {
            "line": "$\\left|a_n - \\dfrac{1}{\\sqrt{5}}\\left(\\dfrac{1 + \\sqrt{5}}{2}\\right)^n\\right| = \\dfrac{1}{\\sqrt{5}}\\left|\\left(\\dfrac{1 - \\sqrt{5}}{2}\\right)^n\\right|$",
            "reason": "Absolute value, from arithmetic: the size of line 1's right side, the size of a product being the product of the sizes."
          },
          {
            "line": "$\\dfrac{1}{\\sqrt{5}}\\left|\\left(\\dfrac{1 - \\sqrt{5}}{2}\\right)^n\\right| < \\dfrac{1}{2}$",
            "reason": "Multiplying two inequalities of positive numbers: the factors are at most $1$ (line 6) and below $\\dfrac{1}{2}$ (line 7)."
          }
        ]
      }
    },
    {
      "id": "t238-s5",
      "method": "direct proof",
      "statement": "Prove that if the characteristic equation of $a_{n+2} = ba_{n+1} + ca_n$, with $c \\ne 0$, has two different real roots $r_1$ and $r_2$ with $|r_2| < |r_1|$, then $\\dfrac{a_n}{r_1^n}$ has the limit $\\dfrac{a_1 - r_2a_0}{r_1 - r_2}$. Facts it may use: general solution (distinct roots), power of a quotient, quotient law, Powers of a number between $-1$ and $1$ shrink to $0$, A limit passes through sums, products and quotients.",
      "check": {
        "proof": [
          {
            "line": "$r_1 \\ne 0$",
            "reason": "Absolute value, from arithmetic: $|r_1| > |r_2|$ and $|r_2|$ is not below $0$, so $|r_1| > 0$."
          },
          {
            "line": "So $a_n = yr_1^n + zr_2^n$ for every whole number $n$, with $y = \\dfrac{a_1 - r_2a_0}{r_1 - r_2}$.",
            "reason": "General solution (distinct roots): the roots are different and $c \\ne 0$."
          },
          {
            "line": "$\\dfrac{a_n}{r_1^n} = y + z\\left(\\dfrac{r_2}{r_1}\\right)^n$",
            "reason": "Power of a quotient: $\\dfrac{r_2^n}{r_1^n} = \\left(\\dfrac{r_2}{r_1}\\right)^n$, and the quotient law $\\dfrac{r_1^n}{r_1^n} = 1$, with $r_1 \\ne 0$ by line 1."
          },
          {
            "line": "$-1 < \\dfrac{r_2}{r_1} < 1$",
            "reason": "Absolute value, from arithmetic: $\\left|\\dfrac{r_2}{r_1}\\right| = \\dfrac{|r_2|}{|r_1|}$, which is below $1$."
          },
          {
            "line": "The powers $\\left(\\dfrac{r_2}{r_1}\\right)^n$ have the limit $0$.",
            "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: line 4."
          },
          {
            "line": "So $\\dfrac{a_n}{r_1^n}$ has the limit $y + z \\cdot 0 = \\dfrac{a_1 - r_2a_0}{r_1 - r_2}$.",
            "reason": "A limit passes through sums, products and quotients: lines 3 and 5."
          }
        ]
      }
    }
  ]
}
