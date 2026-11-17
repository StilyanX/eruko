export default {
  "number": 185,
  "title": "Systems with symmetry",
  "section": 21,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "635-638"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $z$, given that $x + y = 31$, $y + z = 21$ and $z + x = 22$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "6",
    "solution": [
      "Find $z$, given that $x + y = 31$, $y + z = 21$ and $z + x = 22$.",
      "$2x + 2y + 2z = 74$",
      "$x + y + z = 37$",
      "$z = 6$"
    ]
  },
  "ideas": [
    {
      "name": "Symmetric systems and adding all the equations",
      "concrete": "In the system $2x + y + z = 33$, $x + 2y + z = 40$ and $x + y + 2z = 39$, swapping $x$ and $y$ turns the first left side into the second and the second into the first, and leaves the third as it is. Adding the three equations gives $4x + 4y + 4z = 112$, so $x + y + z = 28$, and taking this from the first equation leaves $x = 5$.",
      "general": "An expression in several letters is a **symmetric expression** when swapping two of its letters, whichever two, leaves it the same: $x + y + z$ and $xy + yz + zx$ are symmetric, and $x - y$ is not. A system of equations is a **symmetric system** when its left sides come back as the same left sides, in the same order or another, after two of its letters are swapped, whichever two, or after each letter is moved on to the next in a cycle, as $x$ to $y$, $y$ to $z$ and $z$ to $x$. When every equation of a system holds, the sum of the left sides equals the sum of the right sides, by adding two equations again and again: this is **adding all the equations**. In a symmetric system of linear equations every letter has the same coefficient in the sum of the left sides, so that sum is this coefficient times the sum of the letters, and where the coefficient is not $0$, dividing by it gives the sum of the letters. Where a left side and the sum of the letters differ in one letter only, taking one from the other leaves a multiple of that letter."
    },
    {
      "name": "Multiplying all the equations",
      "concrete": "For positive numbers $x$, $y$ and $z$ with $xy = 2$, $yz = 18$ and $zx = 4$, multiplying the three equations gives $x^2y^2z^2 = 144$, so $(xyz)^2 = 144$ and $xyz = 12$. Since $yz = 18$, this is $18x = 12$, and $x = \\dfrac{2}{3}$.",
      "general": "When every equation of a system holds, the product of the left sides equals the product of the right sides, by multiplying two equations again and again: this is **multiplying all the equations**. In a symmetric system of products every letter stands the same number of times in the product of the left sides, so that product is a power of the product of the letters. For positive letters, the product of the letters is then the positive root of the product of the right sides, the root that undoes that power. Putting in the values of left sides that together hold every letter but one, each once, leaves that letter times the product of those values, which is positive, and dividing by it gives the letter."
    }
  ],
  "kinds": [
    {
      "id": "t185-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $z$, given that $x + y = 25$, $y + z = 4$ and $z + x = 17$.",
            "lines": [
              {
                "step": "Find $z$, given that $x + y = 25$, $y + z = 4$ and $z + x = 17$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2x + 2y + 2z = 46$",
                "reason": "Adding all the equations: the system is a symmetric system, and each unknown stands in two of the three equations, with coefficient $1$, so it has $1 + 1 = 2$ in the sum; on the right, $25 + 4 + 17 = 46$."
              },
              {
                "step": "$x + y + z = 23$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$z = -2$",
                "reason": "Elimination: taking the first equation, $x + y = 25$, from the last line cancels every unknown but $z$, and $23 - 25 = -2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x_4$, given that $x_1 + x_2 + x_3 = 24$, $x_2 + x_3 + x_4 = 34$, $x_3 + x_4 + x_1 = 38$ and $x_4 + x_1 + x_2 = 33$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find $x_4$, given that $x_1 + x_2 + x_3 = 24$, $x_2 + x_3 + x_4 = 34$, $x_3 + x_4 + x_1 = 38$ and $x_4 + x_1 + x_2 = 33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x_1 + 3x_2 + 3x_3 + 3x_4 = 129$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown stands in three of the four equations, with coefficient $1$, so it has $1 + 1 + 1 = 3$ in the sum; on the right, $24 + 34 + 38 + 33 = 129$."
                },
                {
                  "step": "$x_1 + x_2 + x_3 + x_4 = 43$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$x_4 = 19$",
                  "reason": "Elimination: taking the first equation, $x_1 + x_2 + x_3 = 24$, from the last line cancels every unknown but $x_4$, and $43 - 24 = 19$."
                }
              ]
            },
            {
              "prompt": "Find $x_1$, given that $x_1 + x_2 + x_3 = -2$, $x_2 + x_3 + x_4 = -7$, $x_3 + x_4 + x_1 = 22$ and $x_4 + x_1 + x_2 = -4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find $x_1$, given that $x_1 + x_2 + x_3 = -2$, $x_2 + x_3 + x_4 = -7$, $x_3 + x_4 + x_1 = 22$ and $x_4 + x_1 + x_2 = -4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x_1 + 3x_2 + 3x_3 + 3x_4 = 9$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown stands in three of the four equations, with coefficient $1$, so it has $1 + 1 + 1 = 3$ in the sum; on the right, $-2 - 7 + 22 - 4 = 9$."
                },
                {
                  "step": "$x_1 + x_2 + x_3 + x_4 = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$x_1 = 10$",
                  "reason": "Elimination: taking the second equation, $x_2 + x_3 + x_4 = -7$, from the last line cancels every unknown but $x_1$, and $3 - (-7) = 10$."
                }
              ]
            },
            {
              "prompt": "Find $x_4$, given that $2x_1 + x_2 + x_3 + x_4 = 16$, $x_1 + 2x_2 + x_3 + x_4 = 49$, $x_1 + x_2 + 2x_3 + x_4 = 50$ and $x_1 + x_2 + x_3 + 2x_4 = 45$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find $x_4$, given that $2x_1 + x_2 + x_3 + x_4 = 16$, $x_1 + 2x_2 + x_3 + x_4 = 49$, $x_1 + x_2 + 2x_3 + x_4 = 50$ and $x_1 + x_2 + x_3 + 2x_4 = 45$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x_1 + 5x_2 + 5x_3 + 5x_4 = 160$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $2$ in one equation and $1$ in the other three, so it has $2 + 1 + 1 + 1 = 5$ in the sum; on the right, $16 + 49 + 50 + 45 = 160$."
                },
                {
                  "step": "$x_1 + x_2 + x_3 + x_4 = 32$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$x_4 = 13$",
                  "reason": "Elimination: taking the last line from the fourth equation, $x_1 + x_2 + x_3 + 2x_4 = 45$, cancels every unknown but $x_4$, and $45 - 32 = 13$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $y$, given that $3x + y + z = 33$, $x + 3y + z = 69$ and $x + y + 3z = 43$.",
            "lines": [
              {
                "step": "Find $y$, given that $3x + y + z = 33$, $x + 3y + z = 69$ and $x + y + 3z = 43$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x + 5y + 5z = 145$",
                "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $3$ in one equation and $1$ in the other two, so it has $3 + 1 + 1 = 5$ in the sum; on the right, $33 + 69 + 43 = 145$."
              },
              {
                "step": "$x + y + z = 29$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$2y = 40$",
                "reason": "Elimination: taking the last line from the second equation, $x + 3y + z = 69$, cancels every unknown but $y$, and $69 - 29 = 40$."
              },
              {
                "step": "$y = 20$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x_5$, given that $3x_1 + x_2 + x_3 + x_4 + x_5 = -60$, $x_1 + 3x_2 + x_3 + x_4 + x_5 = -32$, $x_1 + x_2 + 3x_3 + x_4 + x_5 = -50$, $x_1 + x_2 + x_3 + 3x_4 + x_5 = -6$ and $x_1 + x_2 + x_3 + x_4 + 3x_5 = -20$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find $x_5$, given that $3x_1 + x_2 + x_3 + x_4 + x_5 = -60$, $x_1 + 3x_2 + x_3 + x_4 + x_5 = -32$, $x_1 + x_2 + 3x_3 + x_4 + x_5 = -50$, $x_1 + x_2 + x_3 + 3x_4 + x_5 = -6$ and $x_1 + x_2 + x_3 + x_4 + 3x_5 = -20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x_1 + 7x_2 + 7x_3 + 7x_4 + 7x_5 = -168$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $3$ in one equation and $1$ in the other four, so it has $3 + 1 + 1 + 1 + 1 = 7$ in the sum; on the right, $-60 - 32 - 50 - 6 - 20 = -168$."
                },
                {
                  "step": "$x_1 + x_2 + x_3 + x_4 + x_5 = -24$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$2x_5 = 4$",
                  "reason": "Elimination: taking the last line from the fifth equation, $x_1 + x_2 + x_3 + x_4 + 3x_5 = -20$, cancels every unknown but $x_5$, and $-20 - (-24) = 4$."
                },
                {
                  "step": "$x_5 = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find $x_2$, given that $-x_1 + x_2 + x_3 + x_4 = 2$, $x_1 - x_2 + x_3 + x_4 = -16$, $x_1 + x_2 - x_3 + x_4 = -20$ and $x_1 + x_2 + x_3 - x_4 = -42$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-11",
              "lines": [
                {
                  "step": "Find $x_2$, given that $-x_1 + x_2 + x_3 + x_4 = 2$, $x_1 - x_2 + x_3 + x_4 = -16$, $x_1 + x_2 - x_3 + x_4 = -20$ and $x_1 + x_2 + x_3 - x_4 = -42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x_1 + 2x_2 + 2x_3 + 2x_4 = -76$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $-1$ in one equation and $1$ in the other three, so it has $-1 + 1 + 1 + 1 = 2$ in the sum; on the right, $2 - 16 - 20 - 42 = -76$."
                },
                {
                  "step": "$x_1 + x_2 + x_3 + x_4 = -38$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$2x_2 = -22$",
                  "reason": "Elimination: taking the second equation, $x_1 - x_2 + x_3 + x_4 = -16$, from the last line cancels every unknown but $x_2$, and $-38 - (-16) = -22$."
                },
                {
                  "step": "$x_2 = -11$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find $x_5$, given that $3x_1 + x_2 + x_3 + x_4 + x_5 = 90$, $x_1 + 3x_2 + x_3 + x_4 + x_5 = 98$, $x_1 + x_2 + 3x_3 + x_4 + x_5 = 54$, $x_1 + x_2 + x_3 + 3x_4 + x_5 = 92$ and $x_1 + x_2 + x_3 + x_4 + 3x_5 = 72$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find $x_5$, given that $3x_1 + x_2 + x_3 + x_4 + x_5 = 90$, $x_1 + 3x_2 + x_3 + x_4 + x_5 = 98$, $x_1 + x_2 + 3x_3 + x_4 + x_5 = 54$, $x_1 + x_2 + x_3 + 3x_4 + x_5 = 92$ and $x_1 + x_2 + x_3 + x_4 + 3x_5 = 72$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x_1 + 7x_2 + 7x_3 + 7x_4 + 7x_5 = 406$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $3$ in one equation and $1$ in the other four, so it has $3 + 1 + 1 + 1 + 1 = 7$ in the sum; on the right, $90 + 98 + 54 + 92 + 72 = 406$."
                },
                {
                  "step": "$x_1 + x_2 + x_3 + x_4 + x_5 = 58$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$2x_5 = 14$",
                  "reason": "Elimination: taking the last line from the fifth equation, $x_1 + x_2 + x_3 + x_4 + 3x_5 = 72$, cancels every unknown but $x_5$, and $72 - 58 = 14$."
                },
                {
                  "step": "$x_5 = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $z$, where $x$, $y$ and $z$ are the numbers that Dora, Emil and Fay choose. Each of the three multiplies their own number by four and adds the other two numbers, which gives $57$ for Dora, $66$ for Emil and $75$ for Fay.",
            "lines": [
              {
                "step": "Find $z$, where $x$, $y$ and $z$ are the numbers that Dora, Emil and Fay choose. Each of the three multiplies their own number by four and adds the other two numbers, which gives $57$ for Dora, $66$ for Emil and $75$ for Fay.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x + y + z = 57$, $x + 4y + z = 66$ and $x + y + 4z = 75$",
                "reason": "Writing a sentence as an equation: for Dora, \"multiplies their own number by four\" gives $4x$ and \"adds the other two numbers\" adds $y + z$, so the sentence for Dora gives $4x + y + z = 57$; the sentences for Emil and Fay give the other two equations in the same way."
              },
              {
                "step": "$6x + 6y + 6z = 198$",
                "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $4$ in one equation and $1$ in the other two, so it has $4 + 1 + 1 = 6$ in the sum; on the right, $57 + 66 + 75 = 198$."
              },
              {
                "step": "$x + y + z = 33$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
              },
              {
                "step": "$3z = 42$",
                "reason": "Elimination: taking the last line from the third equation, $x + y + 4z = 75$, cancels every unknown but $z$, and $75 - 33 = 42$."
              },
              {
                "step": "$z = 14$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $y$, where $x$, $y$ and $z$ are three numbers. For each of the three, the sum of the other two, added to three times the number itself, is $12$ for $x$, $-44$ for $y$ and $-38$ for $z$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-15",
              "lines": [
                {
                  "step": "Find $y$, where $x$, $y$ and $z$ are three numbers. For each of the three, the sum of the other two, added to three times the number itself, is $12$ for $x$, $-44$ for $y$ and $-38$ for $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x + y + z = 12$, $x + 3y + z = -44$ and $x + y + 3z = -38$",
                  "reason": "Writing a sentence as an equation: for $x$, \"the sum of the other two\" is $y + z$ and \"three times the number itself\" is $3x$, so the sentence for $x$ gives $3x + y + z = 12$; the sentences for $y$ and $z$ give the other two equations in the same way."
                },
                {
                  "step": "$5x + 5y + 5z = -70$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $3$ in one equation and $1$ in the other two, so it has $3 + 1 + 1 = 5$ in the sum; on the right, $12 - 44 - 38 = -70$."
                },
                {
                  "step": "$x + y + z = -14$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$2y = -30$",
                  "reason": "Elimination: taking the last line from the second equation, $x + 3y + z = -44$, cancels every unknown but $y$, and $-44 - (-14) = -30$."
                },
                {
                  "step": "$y = -15$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find $z$, where $x$, $y$ and $z$ are the numbers on the cards of Mia, Nils and Omar. Each card's number, taken four times and added to the numbers on the other two cards, gives $-61$ for Mia, $-7$ for Nils and $44$ for Omar.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find $z$, where $x$, $y$ and $z$ are the numbers on the cards of Mia, Nils and Omar. Each card's number, taken four times and added to the numbers on the other two cards, gives $-61$ for Mia, $-7$ for Nils and $44$ for Omar.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + y + z = -61$, $x + 4y + z = -7$ and $x + y + 4z = 44$",
                  "reason": "Writing a sentence as an equation: the number on the card of Mia, taken four times, is $4x$, and the numbers on the other two cards add to $y + z$, so the sentence for Mia gives $4x + y + z = -61$; the sentences for Nils and Omar give the other two equations in the same way."
                },
                {
                  "step": "$6x + 6y + 6z = -24$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $4$ in one equation and $1$ in the other two, so it has $4 + 1 + 1 = 6$ in the sum; on the right, $-61 - 7 + 44 = -24$."
                },
                {
                  "step": "$x + y + z = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$3z = 48$",
                  "reason": "Elimination: taking the last line from the third equation, $x + y + 4z = 44$, cancels every unknown but $z$, and $44 - (-4) = 48$."
                },
                {
                  "step": "$z = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Find $x$, where $x$, $y$ and $z$ are the numbers that Jade, Kurt and Lena choose. Each of the three multiplies their own number by three and adds the other two numbers, which gives $55$ for Jade, $-3$ for Kurt and $53$ for Lena.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "17",
              "lines": [
                {
                  "step": "Find $x$, where $x$, $y$ and $z$ are the numbers that Jade, Kurt and Lena choose. Each of the three multiplies their own number by three and adds the other two numbers, which gives $55$ for Jade, $-3$ for Kurt and $53$ for Lena.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x + y + z = 55$, $x + 3y + z = -3$ and $x + y + 3z = 53$",
                  "reason": "Writing a sentence as an equation: for Jade, \"multiplies their own number by three\" gives $3x$ and \"adds the other two numbers\" adds $y + z$, so the sentence for Jade gives $3x + y + z = 55$; the sentences for Kurt and Lena give the other two equations in the same way."
                },
                {
                  "step": "$5x + 5y + 5z = 105$",
                  "reason": "Adding all the equations: the system is a symmetric system, and each unknown has coefficient $3$ in one equation and $1$ in the other two, so it has $3 + 1 + 1 = 5$ in the sum; on the right, $55 - 3 + 53 = 105$."
                },
                {
                  "step": "$x + y + z = 21$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$2x = 34$",
                  "reason": "Elimination: taking the last line from the first equation, $3x + y + z = 55$, cancels every unknown but $x$, and $55 - 21 = 34$."
                },
                {
                  "step": "$x = 17$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t185-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $z$, given that $4x + y + z = -22$, $x + 4y + z = 62$ and $x + y + 4z = 80$, and write that line right.",
            "given": [
              "$(4x + y + z) + (x + 4y + z) + (x + y + 4z) = -22 + 62 + 80$",
              "$6x + 6y + 6z = 164$",
              "$x + y + z = 164 \\div 6 = \\dfrac{82}{3}$",
              "$3z = 80 - \\dfrac{82}{3} = \\dfrac{158}{3}$",
              "$z = \\dfrac{158}{3} \\div 3 = \\dfrac{158}{9}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $z$, given that $4x + y + z = -22$, $x + 4y + z = 62$ and $x + y + 4z = 80$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 adds the right sides of line 1 as $22 + 62 + 80 = 164$, with the minus sign of $-22$ dropped.",
                "reason": "A sign lost: line 1 has $-22 + 62 + 80$ on the right, which is $120$."
              },
              {
                "step": "Line 1 is right, so line 2 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
              },
              {
                "step": "Line 2 written right is $6x + 6y + 6z = 120$.",
                "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $z$, given that $2x + y + z = -3$, $x + 2y + z = -31$ and $x + y + 2z = -18$, and write that line right.",
              "given": [
                "$(2x + y + z) + (x + 2y + z) + (x + y + 2z) = -3 - 31 - 18$",
                "$4x + 4y + 4z = -52$",
                "$x + y + z = -52 \\div 4 = 13$",
                "$z = -18 - 13 = -31$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x+y+z = -13",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $z$, given that $2x + y + z = -3$, $x + 2y + z = -31$ and $x + y + 2z = -18$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides $-52$ by $4$ and writes the positive number $13$.",
                  "reason": "A sign lost: a negative number divided by a positive number is negative, so $-52 \\div 4 = -13$."
                },
                {
                  "step": "Lines 1 and 2 are right, so line 3 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 3 written right is $x + y + z = -13$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $z$, given that $5x + y + z = 65$, $x + 5y + z = -59$ and $x + y + 5z = 29$, and write that line right.",
              "given": [
                "$(5x + y + z) + (x + 5y + z) + (x + y + 5z) = 65 - 59 + 29$",
                "$7x + 7y + 7z = 35$",
                "$x + y + z = 35 \\div 7 = 5$",
                "$4z = 29 + 5 = 34$",
                "$z = 34 \\div 4 = \\dfrac{17}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 4*z = 24",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $z$, given that $5x + y + z = 65$, $x + 5y + z = -59$ and $x + y + 5z = 29$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $x + y + z$ from $x + y + 5z$ on the left, and adds its value $5$ on the right.",
                  "reason": "A sign lost: taking one equation from another takes the whole right side away, so the right side is $29 - 5$."
                },
                {
                  "step": "Lines 1 to 3 are right, so line 4 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 4 written right is $4z = 24$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x$, given that $4x + y + z = -71$, $x + 4y + z = -65$ and $x + y + 4z = -92$, and write that line right.",
              "given": [
                "$(4x + y + z) + (x + 4y + z) + (x + y + 4z) = -71 - 65 - 92$",
                "$6x + 6y + 6z = -228$",
                "$x + y + z = -228 \\div 6 = 38$",
                "$3x = -71 - 38 = -109$",
                "$x = -109 \\div 3 = -\\dfrac{109}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x+y+z = -38",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x$, given that $4x + y + z = -71$, $x + 4y + z = -65$ and $x + y + 4z = -92$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides $-228$ by $6$ and writes the positive number $38$.",
                  "reason": "A sign lost: a negative number divided by a positive number is negative, so $-228 \\div 6 = -38$."
                },
                {
                  "step": "Lines 1 and 2 are right, so line 3 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and each later line carries the wrong value on."
                },
                {
                  "step": "Line 3 written right is $x + y + z = -38$.",
                  "reason": "Each number keeps its own sign through the working, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $x$, given that $5x + y + z = 95$, $x + 5y + z = 31$ and $x + y + 5z = 63$, and write that line right.",
            "given": [
              "$(5x + y + z) + (x + 5y + z) + (x + y + 5z) = 95 + 31 + 63$",
              "$7x + 7y + 7z = 189$",
              "$7x + 7y + 7z = 189 \\div 7 = 27$",
              "$4x = 95 - 27 = 68$",
              "$x = 68 \\div 4 = 17$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $x$, given that $5x + y + z = 95$, $x + 5y + z = 31$ and $x + y + 5z = 63$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 divides the right side of line 2 by $7$, leaves the left side as it is, and runs on with a second equals sign, so it states $7x + 7y + 7z = 27$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $189$."
              },
              {
                "step": "Lines 1 and 2 are right, so line 3 is the first wrong line.",
                "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
              },
              {
                "step": "Line 3 written right is $x + y + z = 27$.",
                "reason": "Each side of the line before it has the same thing done to it, and nothing else, so the line written right follows from the line before it by a rule that holds."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $y$, given that $5x + y + z = 85$, $x + 5y + z = 53$ and $x + y + 5z = 9$, and write that line right.",
              "given": [
                "$(5x + y + z) + (x + 5y + z) + (x + y + 5z) = 85 + 53 + 9$",
                "$7x + 7y + 7z = 147$",
                "$x + y + z = 147 \\div 7 = 21$",
                "$x + 5y + z = 53 - 21 = 32$",
                "$y = 32 \\div 4 = 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 4*y = 32",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $y$, given that $5x + y + z = 85$, $x + 5y + z = 53$ and $x + y + 5z = 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $21$ from the right side alone and runs on with a second equals sign, so it states $x + 5y + z = 32$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by the second equation $x + 5y + z = 53$."
                },
                {
                  "step": "Lines 1 to 3 are right, so line 4 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
                },
                {
                  "step": "Line 4 written right is $4y = 32$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $y$, given that $5x + y + z = 73$, $x + 5y + z = -47$ and $x + y + 5z = 93$, and write that line right.",
              "given": [
                "$(5x + y + z) + (x + 5y + z) + (x + y + 5z) = 73 - 47 + 93$",
                "$7x + 7y + 7z = 119$",
                "$x + y + z = 119 \\div 7 = 17$",
                "$x + 5y + z = -47 - 17 = -64$",
                "$y = -64 \\div 4 = -16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 4*y = -64",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $y$, given that $5x + y + z = 73$, $x + 5y + z = -47$ and $x + y + 5z = 93$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $17$ from the right side alone and runs on with a second equals sign, so it states $x + 5y + z = -64$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by the second equation $x + 5y + z = -47$."
                },
                {
                  "step": "Lines 1 to 3 are right, so line 4 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
                },
                {
                  "step": "Line 4 written right is $4y = -64$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $z$, given that $4x + y + z = 45$, $x + 4y + z = 42$ and $x + y + 4z = -33$, and write that line right.",
              "given": [
                "$(4x + y + z) + (x + 4y + z) + (x + y + 4z) = 45 + 42 - 33$",
                "$6x + 6y + 6z = 54$",
                "$6x + 6y + 6z = 54 \\div 6 = 9$",
                "$3z = -33 - 9 = -42$",
                "$z = -42 \\div 3 = -14$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x+y+z = 9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $z$, given that $4x + y + z = 45$, $x + 4y + z = 42$ and $x + y + 4z = -33$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides the right side of line 2 by $6$, leaves the left side as it is, and runs on with a second equals sign, so it states $6x + 6y + 6z = 9$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $54$."
                },
                {
                  "step": "Lines 1 and 2 are right, so line 3 is the first wrong line.",
                  "reason": "Each line before the wrong one follows from the line before it by a rule that holds, and the later lines go on from the value the wrong line reaches."
                },
                {
                  "step": "Line 3 written right is $x + y + z = 9$.",
                  "reason": "Each side of the line before it has the same thing done to it, and nothing else, so the line written right follows from the line before it by a rule that holds."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t185-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the sum on the left and nothing multiplied out: The sum of $x$ and twice the sum of $y$ and $z$ is 51.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the sum on the left and nothing multiplied out: The sum of $x$ and twice the sum of $y$ and $z$ is 51.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Twice the sum of $y$ and $z$ is $2(y + z)$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds $y$ and $z$, kept in a bracket, and \"twice\" multiplies the whole sum by $2$."
              },
              {
                "step": "The sum of $x$ and twice the sum of $y$ and $z$ is $x + 2(y + z)$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds $x$ and the expression from the last line."
              },
              {
                "step": "$x + 2(y + z) = 51$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum on the left: Three times $y$, added to the sum of $x$ and $z$, is 38.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3*y+(x+z) = 38",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left: Three times $y$, added to the sum of $x$ and $z$, is 38.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and $z$ is $x + z$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds $x$ and $z$."
                },
                {
                  "step": "Three times $y$, added to the sum of $x$ and $z$, is $3y + (x + z)$.",
                  "reason": "Writing a sentence as an equation: \"added to\" adds $3y$ to the sum from the last line, kept in a bracket."
                },
                {
                  "step": "$3y + (x + z) = 38$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the product on the left and nothing multiplied out: The product of $z$ and the sum of $x$, $y$ and $z$ is 58.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z*(x+y+z) = 58",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the product on the left and nothing multiplied out: The product of $z$ and the sum of $x$, $y$ and $z$ is 58.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$, $y$ and $z$ is $x + y + z$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the three numbers."
                },
                {
                  "step": "The product of $z$ and the sum of $x$, $y$ and $z$ is $z(x + y + z)$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies $z$ by the sum from the last line, kept in a bracket."
                },
                {
                  "step": "$z(x + y + z) = 58$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the square on the left and nothing multiplied out: The square of the product of $x$, $y$ and $z$ is 60.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x*y*z)^2 = 60",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the square on the left and nothing multiplied out: The square of the product of $x$, $y$ and $z$ is 60.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x$, $y$ and $z$ is $xyz$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the three numbers."
                },
                {
                  "step": "The square of the product of $x$, $y$ and $z$ is $(xyz)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the product from the last line, kept in a bracket, to the power $2$."
                },
                {
                  "step": "$(xyz)^2 = 60$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t185-k4",
      "forms": [
        {
          "example": {
            "problem": "Find $x$, given that $xy = 70$, $yz = 63$ and $zx = 40$, where $x$, $y$ and $z$ are positive numbers.",
            "lines": [
              {
                "step": "Find $x$, given that $xy = 70$, $yz = 63$ and $zx = 40$, where $x$, $y$ and $z$ are positive numbers.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2y^2z^2 = 176{,}400$",
                "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $70 \\cdot 63 \\cdot 40 = 176{,}400$."
              },
              {
                "step": "$(xyz)^2 = 176{,}400$",
                "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
              },
              {
                "step": "$xyz = 420$",
                "reason": "Positive square root: $xyz$ is a product of positive numbers, so it is the positive number whose square is $176{,}400$, and $420 \\cdot 420 = 176{,}400$."
              },
              {
                "step": "$x \\cdot (63) = 420$",
                "reason": "Substituting a value: in $x \\cdot (yz) = 420$, the product $yz$ is replaced by its value, in brackets."
              },
              {
                "step": "$x = \\dfrac{20}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $63$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, given that $xy = 45$, $yz = 52$ and $zx = 65$, where $x$, $y$ and $z$ are positive numbers.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15/2",
              "lines": [
                {
                  "step": "Find $x$, given that $xy = 45$, $yz = 52$ and $zx = 65$, where $x$, $y$ and $z$ are positive numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2y^2z^2 = 152{,}100$",
                  "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $45 \\cdot 52 \\cdot 65 = 152{,}100$."
                },
                {
                  "step": "$(xyz)^2 = 152{,}100$",
                  "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
                },
                {
                  "step": "$xyz = 390$",
                  "reason": "Positive square root: $xyz$ is a product of positive numbers, so it is the positive number whose square is $152{,}100$, and $390 \\cdot 390 = 152{,}100$."
                },
                {
                  "step": "$x \\cdot (52) = 390$",
                  "reason": "Substituting a value: in $x \\cdot (yz) = 390$, the product $yz$ is replaced by its value, in brackets."
                },
                {
                  "step": "$x = \\dfrac{15}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $52$."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $xy = 135$, $yz = 35$ and $zx = 21$, where $x$, $y$ and $z$ are positive numbers.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find $x$, given that $xy = 135$, $yz = 35$ and $zx = 21$, where $x$, $y$ and $z$ are positive numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2y^2z^2 = 99{,}225$",
                  "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $135 \\cdot 35 \\cdot 21 = 99{,}225$."
                },
                {
                  "step": "$(xyz)^2 = 99{,}225$",
                  "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
                },
                {
                  "step": "$xyz = 315$",
                  "reason": "Positive square root: $xyz$ is a product of positive numbers, so it is the positive number whose square is $99{,}225$, and $315 \\cdot 315 = 99{,}225$."
                },
                {
                  "step": "$x \\cdot (35) = 315$",
                  "reason": "Substituting a value: in $x \\cdot (yz) = 315$, the product $yz$ is replaced by its value, in brackets."
                },
                {
                  "step": "$x = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $35$."
                }
              ]
            },
            {
              "prompt": "Find $x_2$, given that $x_1x_2 = 60$, $x_2x_3 = 9$, $x_3x_4 = 3$, $x_4x_5 = 7$ and $x_5x_1 = 35$, where $x_1$, $x_2$, $x_3$, $x_4$ and $x_5$ are positive numbers.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find $x_2$, given that $x_1x_2 = 60$, $x_2x_3 = 9$, $x_3x_4 = 3$, $x_4x_5 = 7$ and $x_5x_1 = 35$, where $x_1$, $x_2$, $x_3$, $x_4$ and $x_5$ are positive numbers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x_1^2x_2^2x_3^2x_4^2x_5^2 = 396{,}900$",
                  "reason": "Multiplying all the equations: each unknown stands in two of the five left sides, so the product of the left sides is $x_1^2x_2^2x_3^2x_4^2x_5^2$, and $60 \\cdot 9 \\cdot 3 \\cdot 7 \\cdot 35 = 396{,}900$."
                },
                {
                  "step": "$(x_1x_2x_3x_4x_5)^2 = 396{,}900$",
                  "reason": "Power of a product: $(x_1x_2x_3x_4x_5)^2 = x_1^2x_2^2x_3^2x_4^2x_5^2$."
                },
                {
                  "step": "$x_1x_2x_3x_4x_5 = 630$",
                  "reason": "Positive square root: $x_1x_2x_3x_4x_5$ is a product of positive numbers, so it is the positive number whose square is $396{,}900$, and $630 \\cdot 630 = 396{,}900$."
                },
                {
                  "step": "$x_2 \\cdot (3) \\cdot (35) = 630$",
                  "reason": "Substituting a value: in $x_2 \\cdot (x_3x_4) \\cdot (x_5x_1) = 630$, the products $x_3x_4$ and $x_5x_1$ are replaced by their values, in brackets."
                },
                {
                  "step": "$x_2 = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $105$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $y$, where $x$, $y$ and $z$ are the positive numbers that Ana, Ben and Cai think of. The numbers of Ana and Ben have product 29, the numbers of Ben and Cai have product 116, and the numbers of Cai and Ana have product 36.",
            "lines": [
              {
                "step": "Find $y$, where $x$, $y$ and $z$ are the positive numbers that Ana, Ben and Cai think of. The numbers of Ana and Ben have product 29, the numbers of Ben and Cai have product 116, and the numbers of Cai and Ana have product 36.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$xy = 29$, $yz = 116$ and $zx = 36$",
                "reason": "Writing a sentence as an equation: \"the numbers of Ana and Ben have product 29\" is $xy = 29$, and the other two products give the other two equations in the same way."
              },
              {
                "step": "$x^2y^2z^2 = 121{,}104$",
                "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $29 \\cdot 116 \\cdot 36 = 121{,}104$."
              },
              {
                "step": "$(xyz)^2 = 121{,}104$",
                "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
              },
              {
                "step": "$xyz = 348$",
                "reason": "Positive square root: $xyz$ is a product of positive numbers, so it is the positive number whose square is $121{,}104$, and $348 \\cdot 348 = 121{,}104$."
              },
              {
                "step": "$y \\cdot (36) = 348$",
                "reason": "Substituting a value: in $y \\cdot (zx) = 348$, the product $zx$ is replaced by its value, in brackets."
              },
              {
                "step": "$y = \\dfrac{29}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $36$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, where $x$ cm, $y$ cm and $z$ cm are the length, width and height of a box. The face with sides of length and width has area 40 square cm, the face with sides of width and height has area 55 square cm, and the face with sides of height and length has area 88 square cm.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find $x$, where $x$ cm, $y$ cm and $z$ cm are the length, width and height of a box. The face with sides of length and width has area 40 square cm, the face with sides of width and height has area 55 square cm, and the face with sides of height and length has area 88 square cm.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = 40$, $yz = 55$ and $zx = 88$",
                  "reason": "Writing a sentence as an equation: the face with sides of length and width has area $xy$ square cm, so its sentence gives $xy = 40$, and the other two faces give the other two equations in the same way."
                },
                {
                  "step": "$x^2y^2z^2 = 193{,}600$",
                  "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $40 \\cdot 55 \\cdot 88 = 193{,}600$."
                },
                {
                  "step": "$(xyz)^2 = 193{,}600$",
                  "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
                },
                {
                  "step": "$xyz = 440$",
                  "reason": "Positive square root: $xyz$ is a product of lengths, and a length is positive, so it is the positive number whose square is $193{,}600$, and $440 \\cdot 440 = 193{,}600$."
                },
                {
                  "step": "$x \\cdot (55) = 440$",
                  "reason": "Substituting a value: in $x \\cdot (yz) = 440$, the product $yz$ is replaced by its value, in brackets."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $55$."
                }
              ]
            },
            {
              "prompt": "Find $z$, where $x$, $y$ and $z$ are three positive numbers. The first times the second is 96, the second times the third is 56, and the third times the first is 21.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/2",
              "lines": [
                {
                  "step": "Find $z$, where $x$, $y$ and $z$ are three positive numbers. The first times the second is 96, the second times the third is 56, and the third times the first is 21.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = 96$, $yz = 56$ and $zx = 21$",
                  "reason": "Writing a sentence as an equation: \"the first times the second\" is $xy$, so the first sentence gives $xy = 96$, and the other two give the other two equations in the same way."
                },
                {
                  "step": "$x^2y^2z^2 = 112{,}896$",
                  "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $96 \\cdot 56 \\cdot 21 = 112{,}896$."
                },
                {
                  "step": "$(xyz)^2 = 112{,}896$",
                  "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
                },
                {
                  "step": "$xyz = 336$",
                  "reason": "Positive square root: $xyz$ is a product of positive numbers, so it is the positive number whose square is $112{,}896$, and $336 \\cdot 336 = 112{,}896$."
                },
                {
                  "step": "$z \\cdot (96) = 336$",
                  "reason": "Substituting a value: in $z \\cdot (xy) = 336$, the product $xy$ is replaced by its value, in brackets."
                },
                {
                  "step": "$z = \\dfrac{7}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $96$."
                }
              ]
            },
            {
              "prompt": "Find $y$, where $x$, $y$ and $z$ are the positive numbers that Sami, Tess and Uri think of. The numbers of Sami and Tess have product 26, the numbers of Tess and Uri have product 156, and the numbers of Uri and Sami have product 54.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "26/3",
              "lines": [
                {
                  "step": "Find $y$, where $x$, $y$ and $z$ are the positive numbers that Sami, Tess and Uri think of. The numbers of Sami and Tess have product 26, the numbers of Tess and Uri have product 156, and the numbers of Uri and Sami have product 54.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy = 26$, $yz = 156$ and $zx = 54$",
                  "reason": "Writing a sentence as an equation: \"the numbers of Sami and Tess have product 26\" is $xy = 26$, and the other two products give the other two equations in the same way."
                },
                {
                  "step": "$x^2y^2z^2 = 219{,}024$",
                  "reason": "Multiplying all the equations: each unknown stands in two of the three left sides, so the product of the left sides is $x^2y^2z^2$, and $26 \\cdot 156 \\cdot 54 = 219{,}024$."
                },
                {
                  "step": "$(xyz)^2 = 219{,}024$",
                  "reason": "Power of a product: $(xyz)^2 = x^2y^2z^2$."
                },
                {
                  "step": "$xyz = 468$",
                  "reason": "Positive square root: $xyz$ is a product of positive numbers, so it is the positive number whose square is $219{,}024$, and $468 \\cdot 468 = 219{,}024$."
                },
                {
                  "step": "$y \\cdot (54) = 468$",
                  "reason": "Substituting a value: in $y \\cdot (zx) = 468$, the product $zx$ is replaced by its value, in brackets."
                },
                {
                  "step": "$y = \\dfrac{26}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $54$."
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
