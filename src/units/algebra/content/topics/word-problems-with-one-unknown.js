export default {
  "number": 110,
  "title": "Word problems with one unknown",
  "section": 2,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "88-93, 98-102"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find a number such that 9 less than 5 times the number equals 3 more than 2 times the number.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find a number such that 9 less than 5 times the number equals 3 more than 2 times the number.",
      "Let $x$ be the number.",
      "$5x - 9 = 2x + 3$",
      "$3x - 9 = 3$",
      "$3x = 12$",
      "$x = 4$",
      "With the number $4$, 9 less than 5 times the number is $11$, and 3 more than 2 times the number is $11$.",
      "The number is $4$."
    ]
  },
  "ideas": [
    {
      "name": "Defining the unknown",
      "concrete": "For a purse with 3 times as many 5-cent coins as 20-cent coins, let $x$ be the number of 20-cent coins. The 5-cent coins then number $3x$, and $x$ never also stands for a coin or for an amount in cents.",
      "general": "In a word problem, **defining the unknown** is one sentence that says what the letter stands for: one quantity, with its unit, most often the quantity the question asks for. Every other quantity of the problem is then written in that letter, and the letter keeps its one meaning to the last line."
    },
    {
      "name": "Answering the question asked",
      "concrete": "If $x$ is a son's age, the father is $4x$, and the question asks for the father's age, then $x = 9$ is not the answer: the answer is $4(9) = 36$.",
      "general": "**Answering the question asked**: the last line states the quantity the question names, in its unit. Where the letter stands for another quantity, that quantity is worked out from the value of the letter first."
    },
    {
      "name": "Checking against the words",
      "concrete": "For a number with 2 times the number, plus 9, equal to 5 times the number, minus 6, the value $5$ gives $19$ for each phrase of the sentence, so the sentence holds.",
      "general": "**Checking against the words**: the value found goes back into the sentences of the problem, not into the equation written from them. A check in the equation finds a slip in solving; a check in the words also finds an equation written wrong."
    }
  ],
  "kinds": [
    {
      "id": "t110-k1",
      "forms": [
        {
          "example": {
            "problem": "Find a number such that 5 more than 4 times the number equals the sum of the number and 26.",
            "lines": [
              {
                "step": "Find a number such that 5 more than 4 times the number equals the sum of the number and 26.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number.",
                "reason": "Defining the unknown: the letter stands for the one quantity the question asks for, the number."
              },
              {
                "step": "$4x + 5 = x + 26$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$3x + 5 = 26$",
                "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$3x = 21$",
                "reason": "Adding the same number to both sides: adding $-5$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 7$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "With the number $7$, 5 more than 4 times the number is $33$, and the sum of the number and 26 is $33$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The number is $7$.",
                "reason": "Answering the question asked: the question asks for the number, which is $x$ itself, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number such that 11 less than 6 times the number is 2 times the number, increased by 13.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find a number such that 11 less than 6 times the number is 2 times the number, increased by 13.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number.",
                  "reason": "Defining the unknown: the letter stands for the one quantity the question asks for, the number."
                },
                {
                  "step": "$6x - 11 = 2x + 13$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$4x - 11 = 13$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$4x = 24$",
                  "reason": "Adding the same number to both sides: adding $11$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With the number $6$, 11 less than 6 times the number is $25$, and 2 times the number, increased by 13 is $25$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The number is $6$.",
                  "reason": "Answering the question asked: the question asks for the number, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find a number such that the sum of 7 times the number and 8 is the same as 24 less than 3 times the number.",
              "form": "Answer as an integer.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Find a number such that the sum of 7 times the number and 8 is the same as 24 less than 3 times the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number.",
                  "reason": "Defining the unknown: the letter stands for the one quantity the question asks for, the number."
                },
                {
                  "step": "$7x + 8 = 3x - 24$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$4x + 8 = -24$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$4x = -32$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = -8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With the number $-8$, the sum of 7 times the number and 8 is $-48$, and 24 less than 3 times the number is $-48$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The number is $-8$.",
                  "reason": "Answering the question asked: the question asks for the number, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find a number such that 17 more than 5 times the number equals the sum of 2 times the number and 2.",
              "form": "Answer as an integer.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Find a number such that 17 more than 5 times the number equals the sum of 2 times the number and 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number.",
                  "reason": "Defining the unknown: the letter stands for the one quantity the question asks for, the number."
                },
                {
                  "step": "$5x + 17 = 2x + 2$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$3x + 17 = 2$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$3x = -15$",
                  "reason": "Adding the same number to both sides: adding $-17$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With the number $-5$, 17 more than 5 times the number is $-8$, and the sum of 2 times the number and 2 is $-8$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The number is $-5$.",
                  "reason": "Answering the question asked: the question asks for the number, which is $x$ itself, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the largest of three consecutive integers whose sum is 72.",
            "lines": [
              {
                "step": "Find the largest of three consecutive integers whose sum is 72.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the middle one; the other two are $x - 1$ and $x + 1$.",
                "reason": "Defining the unknown: one letter stands for the middle number, and consecutive integers differ by $1$, so the other two are written in it."
              },
              {
                "step": "$(x - 1) + x + (x + 1) = 72$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$3x = 72$",
                "reason": "Collecting like terms: the brackets go, each having a plus sign in front or standing first, and collecting like terms adds the coefficients of $x$ to $3$ and the numbers $-1$ and $1$ to $0$."
              },
              {
                "step": "$x = 24$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "The numbers $23$, $24$ and $25$ are consecutive integers, and their sum is $72$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The largest of the three is $25$.",
                "reason": "Answering the question asked: the question asks for the largest number, which is $x + 1$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the largest of three consecutive odd integers whose sum is 81.",
              "form": "Answer as an integer.",
              "answer": "29",
              "lines": [
                {
                  "step": "Find the largest of three consecutive odd integers whose sum is 81.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the middle one; the other two are $x - 2$ and $x + 2$.",
                  "reason": "Defining the unknown: one letter stands for the middle number, and consecutive odd integers differ by $2$, so the other two are written in it."
                },
                {
                  "step": "$(x - 2) + x + (x + 2) = 81$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$3x = 81$",
                  "reason": "Collecting like terms: the brackets go, each having a plus sign in front or standing first, and collecting like terms adds the coefficients of $x$ to $3$ and the numbers $-2$ and $2$ to $0$."
                },
                {
                  "step": "$x = 27$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "The numbers $25$, $27$ and $29$ are consecutive odd integers, and their sum is $81$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The largest of the three is $29$.",
                  "reason": "Answering the question asked: the question asks for the largest number, which is $x + 2$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the smallest of three consecutive even integers for which the smallest and the largest add to 64.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the smallest of three consecutive even integers for which the smallest and the largest add to 64.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the middle one; the other two are $x - 2$ and $x + 2$.",
                  "reason": "Defining the unknown: one letter stands for the middle number, and consecutive even integers differ by $2$, so the other two are written in it."
                },
                {
                  "step": "$(x - 2) + (x + 2) = 64$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$2x = 64$",
                  "reason": "Collecting like terms: the brackets go, each having a plus sign in front or standing first, and collecting like terms adds the coefficients of $x$ to $2$ and the numbers $-2$ and $2$ to $0$."
                },
                {
                  "step": "$x = 32$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "The numbers $30$, $32$ and $34$ are consecutive even integers, and the smallest and the largest add to $64$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The smallest of the three is $30$.",
                  "reason": "Answering the question asked: the question asks for the smallest number, which is $x - 2$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the middle of three consecutive integers whose sum is -45.",
              "form": "Answer as an integer.",
              "answer": "-15",
              "lines": [
                {
                  "step": "Find the middle of three consecutive integers whose sum is -45.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the middle one; the other two are $x - 1$ and $x + 1$.",
                  "reason": "Defining the unknown: one letter stands for the middle number, and consecutive integers differ by $1$, so the other two are written in it."
                },
                {
                  "step": "$(x - 1) + x + (x + 1) = -45$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$3x = -45$",
                  "reason": "Collecting like terms: the brackets go, each having a plus sign in front or standing first, and collecting like terms adds the coefficients of $x$ to $3$ and the numbers $-1$ and $1$ to $0$."
                },
                {
                  "step": "$x = -15$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "The numbers $-16$, $-15$ and $-14$ are consecutive integers, and their sum is $-45$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The middle of the three is $-15$.",
                  "reason": "Answering the question asked: the question asks for the middle number, which is $x$, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of 3 times the number and 2, where the number gives 19 when it is divided by 4 and then increased by 7.",
            "lines": [
              {
                "step": "Find the sum of 3 times the number and 2, where the number gives 19 when it is divided by 4 and then increased by 7.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number.",
                "reason": "Defining the unknown: the letter stands for the number the sentence describes, and the quantity asked for is written in it afterwards."
              },
              {
                "step": "$\\dfrac{x}{4} + 7 = 19$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$\\dfrac{x}{4} = 12$",
                "reason": "Adding the same number to both sides: adding $-7$ to both sides keeps them equal and leaves the quotient by $4$ alone on the left."
              },
              {
                "step": "$x = 48$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "Dividing $48$ by $4$ gives $12$, and adding $7$ gives $19$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "$3x + 2 = 3(48) + 2 = 146$",
                "reason": "Substituting a value: the number $48$ goes, in brackets, in place of $x$ in $3x + 2$, the quantity the question names, and the order of operations works it out."
              },
              {
                "step": "The value asked for is $146$.",
                "reason": "Answering the question asked: the question asks for $3x + 2$, not the number $x$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find 7 less than 2 times the number, where the number gives 6 when it is divided by 3 and then decreased by 5.",
              "form": "Answer as an integer.",
              "answer": "59",
              "lines": [
                {
                  "step": "Find 7 less than 2 times the number, where the number gives 6 when it is divided by 3 and then decreased by 5.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number.",
                  "reason": "Defining the unknown: the letter stands for the number the sentence describes, and the quantity asked for is written in it afterwards."
                },
                {
                  "step": "$\\dfrac{x}{3} - 5 = 6$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$\\dfrac{x}{3} = 11$",
                  "reason": "Adding the same number to both sides: adding $5$ to both sides keeps them equal and leaves the quotient by $3$ alone on the left."
                },
                {
                  "step": "$x = 33$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Dividing $33$ by $3$ gives $11$, and taking away $5$ gives $6$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$2x - 7 = 2(33) - 7 = 59$",
                  "reason": "Substituting a value: the number $33$ goes, in brackets, in place of $x$ in $2x - 7$, the quantity the question names, and the order of operations works it out."
                },
                {
                  "step": "The value asked for is $59$.",
                  "reason": "Answering the question asked: the question asks for $2x - 7$, not the number $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find 30 more than the number, where the number gives 4 when it is divided by 5 and then increased by 9.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find 30 more than the number, where the number gives 4 when it is divided by 5 and then increased by 9.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number.",
                  "reason": "Defining the unknown: the letter stands for the number the sentence describes, and the quantity asked for is written in it afterwards."
                },
                {
                  "step": "$\\dfrac{x}{5} + 9 = 4$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$\\dfrac{x}{5} = -5$",
                  "reason": "Adding the same number to both sides: adding $-9$ to both sides keeps them equal and leaves the quotient by $5$ alone on the left."
                },
                {
                  "step": "$x = -25$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Dividing $-25$ by $5$ gives $-5$, and adding $9$ gives $4$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$x + 30 = (-25) + 30 = 5$",
                  "reason": "Substituting a value: the number $-25$ goes, in brackets, in place of $x$ in $x + 30$, the quantity the question names, and the order of operations works it out."
                },
                {
                  "step": "The value asked for is $5$.",
                  "reason": "Answering the question asked: the question asks for $x + 30$, not the number $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find 1 more than 4 times the number, where the number gives 3 when it is divided by 6 and then decreased by 2.",
              "form": "Answer as an integer.",
              "answer": "121",
              "lines": [
                {
                  "step": "Find 1 more than 4 times the number, where the number gives 3 when it is divided by 6 and then decreased by 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number.",
                  "reason": "Defining the unknown: the letter stands for the number the sentence describes, and the quantity asked for is written in it afterwards."
                },
                {
                  "step": "$\\dfrac{x}{6} - 2 = 3$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$\\dfrac{x}{6} = 5$",
                  "reason": "Adding the same number to both sides: adding $2$ to both sides keeps them equal and leaves the quotient by $6$ alone on the left."
                },
                {
                  "step": "$x = 30$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $6$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Dividing $30$ by $6$ gives $5$, and taking away $2$ gives $3$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$4x + 1 = 4(30) + 1 = 121$",
                  "reason": "Substituting a value: the number $30$ goes, in brackets, in place of $x$ in $4x + 1$, the quantity the question names, and the order of operations works it out."
                },
                {
                  "step": "The value asked for is $121$.",
                  "reason": "Answering the question asked: the question asks for $4x + 1$, not the number $x$, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t110-k2",
      "forms": [
        {
          "example": {
            "problem": "Find Ines's age now, if Ines's age now is 5 more than 2 times Ines's age 8 years ago.",
            "lines": [
              {
                "step": "Find Ines's age now, if Ines's age now is 5 more than 2 times Ines's age 8 years ago.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Ines's age now, in years; 8 years ago Ines was $x - 8$.",
                "reason": "Defining the unknown: the letter stands for one quantity, the age now, and the age 8 years ago is written in it, never given the same letter."
              },
              {
                "step": "$x = 2(x - 8) + 5$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$x = 2x - 16 + 5$",
                "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
              },
              {
                "step": "$x = 2x - 11$",
                "reason": "Collecting like terms: the numbers $-16$ and $5$ add to $-11$."
              },
              {
                "step": "$-x = -11$",
                "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$x = 11$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-1$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "With Ines $11$ now, Ines was $3$ then, and 5 more than 2 times $3$ is $11$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Ines is $11$ years old now.",
                "reason": "Answering the question asked: the question asks for the age now, which is $x$ itself, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find Omar's age now, if Omar's age now is 4 more than 3 times Omar's age 10 years ago.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find Omar's age now, if Omar's age now is 4 more than 3 times Omar's age 10 years ago.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Omar's age now, in years; 10 years ago Omar was $x - 10$.",
                  "reason": "Defining the unknown: the letter stands for one quantity, the age now, and the age 10 years ago is written in it, never given the same letter."
                },
                {
                  "step": "$x = 3(x - 10) + 4$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$x = 3x - 30 + 4$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 3x - 26$",
                  "reason": "Collecting like terms: the numbers $-30$ and $4$ add to $-26$."
                },
                {
                  "step": "$-2x = -26$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = 13$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With Omar $13$ now, Omar was $3$ then, and 4 more than 3 times $3$ is $13$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Omar is $13$ years old now.",
                  "reason": "Answering the question asked: the question asks for the age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Lea's age 12 years ago, if Lea's age now is 7 less than 2 times Lea's age 12 years ago.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find Lea's age 12 years ago, if Lea's age now is 7 less than 2 times Lea's age 12 years ago.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Lea's age now, in years; 12 years ago Lea was $x - 12$.",
                  "reason": "Defining the unknown: the letter stands for one quantity, the age now, and the age 12 years ago is written in it, never given the same letter."
                },
                {
                  "step": "$x = 2(x - 12) - 7$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$x = 2x - 24 - 7$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 2x - 31$",
                  "reason": "Collecting like terms: the numbers $-24$ and $-7$ add to $-31$."
                },
                {
                  "step": "$-x = -31$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = 31$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-1$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With Lea $31$ now, Lea was $19$ then, and 7 less than 2 times $19$ is $31$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "12 years ago Lea was $19$ years old.",
                  "reason": "Answering the question asked: the question asks for the age 12 years ago, which is $x - 12$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Yuki's age now, if Yuki's age now is 6 more than 4 times Yuki's age 9 years ago.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find Yuki's age now, if Yuki's age now is 6 more than 4 times Yuki's age 9 years ago.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Yuki's age now, in years; 9 years ago Yuki was $x - 9$.",
                  "reason": "Defining the unknown: the letter stands for one quantity, the age now, and the age 9 years ago is written in it, never given the same letter."
                },
                {
                  "step": "$x = 4(x - 9) + 6$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$x = 4x - 36 + 6$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$x = 4x - 30$",
                  "reason": "Collecting like terms: the numbers $-36$ and $6$ add to $-30$."
                },
                {
                  "step": "$-3x = -30$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With Yuki $10$ now, Yuki was $1$ then, and 6 more than 4 times $1$ is $10$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Yuki is $10$ years old now.",
                  "reason": "Answering the question asked: the question asks for the age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find Marta's age now, if Marta is 5 times as old as Jonas, and in 4 years Marta will be 3 times as old as Jonas.",
            "lines": [
              {
                "step": "Find Marta's age now, if Marta is 5 times as old as Jonas, and in 4 years Marta will be 3 times as old as Jonas.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Jonas's age now, in years; Marta is then $5x$.",
                "reason": "Defining the unknown: the letter stands for the younger age now, and the first relation writes the other age in it."
              },
              {
                "step": "In 4 years Jonas will be $x + 4$ and Marta will be $5x + 4$.",
                "reason": "Writing a sentence as an equation: the words \"in 4 years\" add $4$ to each age, and to each age in its own expression."
              },
              {
                "step": "$5x + 4 = 3(x + 4)$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$5x + 4 = 3x + 12$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
              },
              {
                "step": "$2x + 4 = 12$",
                "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$2x = 8$",
                "reason": "Adding the same number to both sides: adding $-4$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "Jonas is $4$ and Marta $20$, 5 times as much; in 4 years they are $8$ and $24$, and $24$ is 3 times $8$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Marta is $20$ years old now.",
                "reason": "Answering the question asked: the question asks for Marta's age now, which is $5x$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find Ida's age now, if Felix is 7 times as old as Ida, and in 12 years Felix will be 3 times as old as Ida.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find Ida's age now, if Felix is 7 times as old as Ida, and in 12 years Felix will be 3 times as old as Ida.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Ida's age now, in years; Felix is then $7x$.",
                  "reason": "Defining the unknown: the letter stands for the younger age now, and the first relation writes the other age in it."
                },
                {
                  "step": "In 12 years Ida will be $x + 12$ and Felix will be $7x + 12$.",
                  "reason": "Writing a sentence as an equation: the words \"in 12 years\" add $12$ to each age, and to each age in its own expression."
                },
                {
                  "step": "$7x + 12 = 3(x + 12)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$7x + 12 = 3x + 36$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$4x + 12 = 36$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$4x = 24$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Ida is $6$ and Felix $42$, 7 times as much; in 12 years they are $18$ and $54$, and $54$ is 3 times $18$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Ida is $6$ years old now.",
                  "reason": "Answering the question asked: the question asks for Ida's age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Rosa's age now, if Rosa is 6 times as old as Tim, and in 6 years Rosa will be 3 times as old as Tim.",
              "form": "Answer as an integer.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find Rosa's age now, if Rosa is 6 times as old as Tim, and in 6 years Rosa will be 3 times as old as Tim.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Tim's age now, in years; Rosa is then $6x$.",
                  "reason": "Defining the unknown: the letter stands for the younger age now, and the first relation writes the other age in it."
                },
                {
                  "step": "In 6 years Tim will be $x + 6$ and Rosa will be $6x + 6$.",
                  "reason": "Writing a sentence as an equation: the words \"in 6 years\" add $6$ to each age, and to each age in its own expression."
                },
                {
                  "step": "$6x + 6 = 3(x + 6)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$6x + 6 = 3x + 18$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$3x + 6 = 18$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$3x = 12$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Tim is $4$ and Rosa $24$, 6 times as much; in 6 years they are $10$ and $30$, and $30$ is 3 times $10$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Rosa is $24$ years old now.",
                  "reason": "Answering the question asked: the question asks for Rosa's age now, which is $6x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Anton's age now, if Anton is 5 times as old as Mila, and in 15 years Anton will be 2 times as old as Mila.",
              "form": "Answer as an integer.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find Anton's age now, if Anton is 5 times as old as Mila, and in 15 years Anton will be 2 times as old as Mila.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Mila's age now, in years; Anton is then $5x$.",
                  "reason": "Defining the unknown: the letter stands for the younger age now, and the first relation writes the other age in it."
                },
                {
                  "step": "In 15 years Mila will be $x + 15$ and Anton will be $5x + 15$.",
                  "reason": "Writing a sentence as an equation: the words \"in 15 years\" add $15$ to each age, and to each age in its own expression."
                },
                {
                  "step": "$5x + 15 = 2(x + 15)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$5x + 15 = 2x + 30$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$3x + 15 = 30$",
                  "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$3x = 15$",
                  "reason": "Adding the same number to both sides: adding $-15$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Mila is $5$ and Anton $25$, 5 times as much; in 15 years they are $20$ and $40$, and $40$ is 2 times $20$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Anton is $25$ years old now.",
                  "reason": "Answering the question asked: the question asks for Anton's age now, which is $5x$, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find Bruno's age now, if 8 years ago Bruno was one third of the age Bruno will be in 6 years.",
            "lines": [
              {
                "step": "Find Bruno's age now, if 8 years ago Bruno was one third of the age Bruno will be in 6 years.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Bruno's age now, in years; 8 years ago Bruno was $x - 8$, and in 6 years Bruno will be $x + 6$.",
                "reason": "Defining the unknown: the letter stands for the age now, and the age at each of the two other times is written in it."
              },
              {
                "step": "$x - 8 = \\dfrac{x + 6}{3}$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$3(x - 8) = x + 6$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ keeps them equal and clears the fraction."
              },
              {
                "step": "$3x - 24 = x + 6$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
              },
              {
                "step": "$2x - 24 = 6$",
                "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$2x = 30$",
                "reason": "Adding the same number to both sides: adding $24$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 15$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "With Bruno $15$ now, Bruno was $7$ then and will be $21$, and $7$ is one third of $21$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Bruno is $15$ years old now.",
                "reason": "Answering the question asked: the question asks for the age now, which is $x$ itself, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find Edda's age now, if 6 years ago Edda was one third of the age Edda will be in 10 years.",
              "form": "Answer as an integer.",
              "answer": "14",
              "lines": [
                {
                  "step": "Find Edda's age now, if 6 years ago Edda was one third of the age Edda will be in 10 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Edda's age now, in years; 6 years ago Edda was $x - 6$, and in 10 years Edda will be $x + 10$.",
                  "reason": "Defining the unknown: the letter stands for the age now, and the age at each of the two other times is written in it."
                },
                {
                  "step": "$x - 6 = \\dfrac{x + 10}{3}$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$3(x - 6) = x + 10$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$3x - 18 = x + 10$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$2x - 18 = 10$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$2x = 28$",
                  "reason": "Adding the same number to both sides: adding $18$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With Edda $14$ now, Edda was $8$ then and will be $24$, and $8$ is one third of $24$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Edda is $14$ years old now.",
                  "reason": "Answering the question asked: the question asks for the age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Ivo's age in 12 years, if 3 years ago Ivo was one quarter of the age Ivo will be in 12 years.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find Ivo's age in 12 years, if 3 years ago Ivo was one quarter of the age Ivo will be in 12 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Ivo's age now, in years; 3 years ago Ivo was $x - 3$, and in 12 years Ivo will be $x + 12$.",
                  "reason": "Defining the unknown: the letter stands for the age now, and the age at each of the two other times is written in it."
                },
                {
                  "step": "$x - 3 = \\dfrac{x + 12}{4}$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$4(x - 3) = x + 12$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$4x - 12 = x + 12$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$3x - 12 = 12$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$3x = 24$",
                  "reason": "Adding the same number to both sides: adding $12$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With Ivo $8$ now, Ivo was $5$ then and will be $20$, and $5$ is one quarter of $20$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "In 12 years Ivo will be $20$ years old.",
                  "reason": "Answering the question asked: the question asks for the age in 12 years, which is $x + 12$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Lotte's age now, if 7 years ago Lotte was one fifth of the age Lotte will be in 5 years.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find Lotte's age now, if 7 years ago Lotte was one fifth of the age Lotte will be in 5 years.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Lotte's age now, in years; 7 years ago Lotte was $x - 7$, and in 5 years Lotte will be $x + 5$.",
                  "reason": "Defining the unknown: the letter stands for the age now, and the age at each of the two other times is written in it."
                },
                {
                  "step": "$x - 7 = \\dfrac{x + 5}{5}$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$5(x - 7) = x + 5$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal and clears the fraction."
                },
                {
                  "step": "$5x - 35 = x + 5$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$4x - 35 = 5$",
                  "reason": "Adding the same number to both sides: adding $-x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$4x = 40$",
                  "reason": "Adding the same number to both sides: adding $35$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "With Lotte $10$ now, Lotte was $3$ then and will be $15$, and $3$ is one fifth of $15$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Lotte is $10$ years old now.",
                  "reason": "Answering the question asked: the question asks for the age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find Paul's age now, if 3 years ago Gerda was 5 times as old as Paul, and in 9 years Gerda will be 2 times as old as Paul.",
            "lines": [
              {
                "step": "Find Paul's age now, if 3 years ago Gerda was 5 times as old as Paul, and in 9 years Gerda will be 2 times as old as Paul.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Paul's age now, in years; 3 years ago Paul was $x - 3$ and Gerda was $5(x - 3)$.",
                "reason": "Defining the unknown: the letter stands for Paul's age now; the relation 3 years ago writes Gerda's age then in it."
              },
              {
                "step": "Gerda is now $5(x - 3) + 3$; in 9 years Gerda will be $5(x - 3) + 12$ and Paul $x + 9$.",
                "reason": "Writing a sentence as an equation: Gerda's age then, plus $3$, is the age now, and $9$ more gives the age in 9 years."
              },
              {
                "step": "$5(x - 3) + 12 = 2(x + 9)$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$5x - 15 + 12 = 2x + 18$",
                "reason": "Multiplying out: by the distributive law the $5$ and the $2$ in front multiply each term in their brackets."
              },
              {
                "step": "$5x - 3 = 2x + 18$",
                "reason": "Collecting like terms: the numbers $-15$ and $12$ add to $-3$."
              },
              {
                "step": "$3x - 3 = 18$",
                "reason": "Adding the same number to both sides: adding $-2x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$3x = 21$",
                "reason": "Adding the same number to both sides: adding $3$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 7$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "Paul is $7$ and Gerda $23$; 3 years ago they were $4$ and $20$, 5 times as much, and in 9 years they will be $16$ and $32$, 2 times as much.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Paul is $7$ years old now.",
                "reason": "Answering the question asked: the question asks for Paul's age now, which is $x$ itself, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find Mona's age now, if 2 years ago Henrik was 7 times as old as Mona, and in 4 years Henrik will be 5 times as old as Mona.",
              "form": "Answer as an integer.",
              "answer": "14",
              "lines": [
                {
                  "step": "Find Mona's age now, if 2 years ago Henrik was 7 times as old as Mona, and in 4 years Henrik will be 5 times as old as Mona.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Mona's age now, in years; 2 years ago Mona was $x - 2$ and Henrik was $7(x - 2)$.",
                  "reason": "Defining the unknown: the letter stands for Mona's age now; the relation 2 years ago writes Henrik's age then in it."
                },
                {
                  "step": "Henrik is now $7(x - 2) + 2$; in 4 years Henrik will be $7(x - 2) + 6$ and Mona $x + 4$.",
                  "reason": "Writing a sentence as an equation: Henrik's age then, plus $2$, is the age now, and $4$ more gives the age in 4 years."
                },
                {
                  "step": "$7(x - 2) + 6 = 5(x + 4)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$7x - 14 + 6 = 5x + 20$",
                  "reason": "Multiplying out: by the distributive law the $7$ and the $5$ in front multiply each term in their brackets."
                },
                {
                  "step": "$7x - 8 = 5x + 20$",
                  "reason": "Collecting like terms: the numbers $-14$ and $6$ add to $-8$."
                },
                {
                  "step": "$2x - 8 = 20$",
                  "reason": "Adding the same number to both sides: adding $-5x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$2x = 28$",
                  "reason": "Adding the same number to both sides: adding $8$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 14$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Mona is $14$ and Henrik $86$; 2 years ago they were $12$ and $84$, 7 times as much, and in 4 years they will be $18$ and $90$, 5 times as much.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Mona is $14$ years old now.",
                  "reason": "Answering the question asked: the question asks for Mona's age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Otto's age now, if 3 years ago Selma was 6 times as old as Otto, and in 5 years Selma will be 4 times as old as Otto.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find Otto's age now, if 3 years ago Selma was 6 times as old as Otto, and in 5 years Selma will be 4 times as old as Otto.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Otto's age now, in years; 3 years ago Otto was $x - 3$ and Selma was $6(x - 3)$.",
                  "reason": "Defining the unknown: the letter stands for Otto's age now; the relation 3 years ago writes Selma's age then in it."
                },
                {
                  "step": "Selma is now $6(x - 3) + 3$; in 5 years Selma will be $6(x - 3) + 8$ and Otto $x + 5$.",
                  "reason": "Writing a sentence as an equation: Selma's age then, plus $3$, is the age now, and $5$ more gives the age in 5 years."
                },
                {
                  "step": "$6(x - 3) + 8 = 4(x + 5)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$6x - 18 + 8 = 4x + 20$",
                  "reason": "Multiplying out: by the distributive law the $6$ and the $4$ in front multiply each term in their brackets."
                },
                {
                  "step": "$6x - 10 = 4x + 20$",
                  "reason": "Collecting like terms: the numbers $-18$ and $8$ add to $-10$."
                },
                {
                  "step": "$2x - 10 = 20$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$2x = 30$",
                  "reason": "Adding the same number to both sides: adding $10$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 15$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Otto is $15$ and Selma $75$; 3 years ago they were $12$ and $72$, 6 times as much, and in 5 years they will be $20$ and $80$, 4 times as much.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Otto is $15$ years old now.",
                  "reason": "Answering the question asked: the question asks for Otto's age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Liv's age now, if 2 years ago Rudolf was 7 times as old as Liv, and in 6 years Rudolf will be 3 times as old as Liv.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find Liv's age now, if 2 years ago Rudolf was 7 times as old as Liv, and in 6 years Rudolf will be 3 times as old as Liv.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Liv's age now, in years; 2 years ago Liv was $x - 2$ and Rudolf was $7(x - 2)$.",
                  "reason": "Defining the unknown: the letter stands for Liv's age now; the relation 2 years ago writes Rudolf's age then in it."
                },
                {
                  "step": "Rudolf is now $7(x - 2) + 2$; in 6 years Rudolf will be $7(x - 2) + 8$ and Liv $x + 6$.",
                  "reason": "Writing a sentence as an equation: Rudolf's age then, plus $2$, is the age now, and $6$ more gives the age in 6 years."
                },
                {
                  "step": "$7(x - 2) + 8 = 3(x + 6)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$7x - 14 + 8 = 3x + 18$",
                  "reason": "Multiplying out: by the distributive law the $7$ and the $3$ in front multiply each term in their brackets."
                },
                {
                  "step": "$7x - 6 = 3x + 18$",
                  "reason": "Collecting like terms: the numbers $-14$ and $8$ add to $-6$."
                },
                {
                  "step": "$4x - 6 = 18$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$4x = 24$",
                  "reason": "Adding the same number to both sides: adding $6$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "Liv is $6$ and Rudolf $30$; 2 years ago they were $4$ and $28$, 7 times as much, and in 6 years they will be $12$ and $36$, 3 times as much.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Liv is $6$ years old now.",
                  "reason": "Answering the question asked: the question asks for Liv's age now, which is $x$ itself, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the year Maja was born, if in 2002 Erik was 7 times as old as Maja, and in 2008 Erik was 3 times as old as Maja.",
            "lines": [
              {
                "step": "Find the year Maja was born, if in 2002 Erik was 7 times as old as Maja, and in 2008 Erik was 3 times as old as Maja.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Maja's age in 2002, in years; Erik was then $7x$.",
                "reason": "Defining the unknown: the letter stands for Maja's age in 2002, and the first relation writes Erik's age then in it."
              },
              {
                "step": "In 2008, 6 years later, Maja was $x + 6$ and Erik $7x + 6$.",
                "reason": "Writing a sentence as an equation: from 2002 to 2008 is $6$ years, so each age gains $6$."
              },
              {
                "step": "$7x + 6 = 3(x + 6)$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$7x + 6 = 3x + 18$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
              },
              {
                "step": "$4x + 6 = 18$",
                "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$4x = 12$",
                "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "In 2002 Maja was $3$ and Erik $21$, 7 times as much; in 2008 they were $9$ and $27$, and $27$ is 3 times $9$.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "$2002 - x = 2002 - (3) = 1999$",
                "reason": "Substituting a value: a year of birth is the year less the age then, so $3$ goes in place of $x$ in $2002 - x$."
              },
              {
                "step": "Maja was born in $1999$.",
                "reason": "Answering the question asked: the question asks for the year Maja was born, which is $2002 - x$, not Maja's age, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the year Jon was born, if in 1998 Frieda was 7 times as old as Jon, and in 2007 Frieda was 4 times as old as Jon.",
              "form": "Answer as an integer.",
              "answer": "1989",
              "lines": [
                {
                  "step": "Find the year Jon was born, if in 1998 Frieda was 7 times as old as Jon, and in 2007 Frieda was 4 times as old as Jon.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Jon's age in 1998, in years; Frieda was then $7x$.",
                  "reason": "Defining the unknown: the letter stands for Jon's age in 1998, and the first relation writes Frieda's age then in it."
                },
                {
                  "step": "In 2007, 9 years later, Jon was $x + 9$ and Frieda $7x + 9$.",
                  "reason": "Writing a sentence as an equation: from 1998 to 2007 is $9$ years, so each age gains $9$."
                },
                {
                  "step": "$7x + 9 = 4(x + 9)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$7x + 9 = 4x + 36$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$3x + 9 = 36$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$3x = 27$",
                  "reason": "Adding the same number to both sides: adding $-9$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "In 1998 Jon was $9$ and Frieda $63$, 7 times as much; in 2007 they were $18$ and $72$, and $72$ is 4 times $18$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$1998 - x = 1998 - (9) = 1989$",
                  "reason": "Substituting a value: a year of birth is the year less the age then, so $9$ goes in place of $x$ in $1998 - x$."
                },
                {
                  "step": "Jon was born in $1989$.",
                  "reason": "Answering the question asked: the question asks for the year Jon was born, which is $1998 - x$, not Jon's age, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the year Ylva was born, if in 2010 Gustav was 6 times as old as Ylva, and in 2016 Gustav was 3 times as old as Ylva.",
              "form": "Answer as an integer.",
              "answer": "2006",
              "lines": [
                {
                  "step": "Find the year Ylva was born, if in 2010 Gustav was 6 times as old as Ylva, and in 2016 Gustav was 3 times as old as Ylva.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Ylva's age in 2010, in years; Gustav was then $6x$.",
                  "reason": "Defining the unknown: the letter stands for Ylva's age in 2010, and the first relation writes Gustav's age then in it."
                },
                {
                  "step": "In 2016, 6 years later, Ylva was $x + 6$ and Gustav $6x + 6$.",
                  "reason": "Writing a sentence as an equation: from 2010 to 2016 is $6$ years, so each age gains $6$."
                },
                {
                  "step": "$6x + 6 = 3(x + 6)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$6x + 6 = 3x + 18$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$3x + 6 = 18$",
                  "reason": "Adding the same number to both sides: adding $-3x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$3x = 12$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "In 2010 Ylva was $4$ and Gustav $24$, 6 times as much; in 2016 they were $10$ and $30$, and $30$ is 3 times $10$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$2010 - x = 2010 - (4) = 2006$",
                  "reason": "Substituting a value: a year of birth is the year less the age then, so $4$ goes in place of $x$ in $2010 - x$."
                },
                {
                  "step": "Ylva was born in $2006$.",
                  "reason": "Answering the question asked: the question asks for the year Ylva was born, which is $2010 - x$, not Ylva's age, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the year Sven was born, if in 2001 Helga was 9 times as old as Sven, and in 2006 Helga was 4 times as old as Sven.",
              "form": "Answer as an integer.",
              "answer": "1998",
              "lines": [
                {
                  "step": "Find the year Sven was born, if in 2001 Helga was 9 times as old as Sven, and in 2006 Helga was 4 times as old as Sven.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Sven's age in 2001, in years; Helga was then $9x$.",
                  "reason": "Defining the unknown: the letter stands for Sven's age in 2001, and the first relation writes Helga's age then in it."
                },
                {
                  "step": "In 2006, 5 years later, Sven was $x + 5$ and Helga $9x + 5$.",
                  "reason": "Writing a sentence as an equation: from 2001 to 2006 is $5$ years, so each age gains $5$."
                },
                {
                  "step": "$9x + 5 = 4(x + 5)$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$9x + 5 = 4x + 20$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$5x + 5 = 20$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$5x = 15$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "In 2001 Sven was $3$ and Helga $27$, 9 times as much; in 2006 they were $8$ and $32$, and $32$ is 4 times $8$.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "$2001 - x = 2001 - (3) = 1998$",
                  "reason": "Substituting a value: a year of birth is the year less the age then, so $3$ goes in place of $x$ in $2001 - x$."
                },
                {
                  "step": "Sven was born in $1998$.",
                  "reason": "Answering the question asked: the question asks for the year Sven was born, which is $2001 - x$, not Sven's age, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t110-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the number of 20-cent coins in a purse that holds only coins of 5 cents and of 20 cents, 375 cents in all, where the 20-cent coins number 3 more than 2 times the number of 5-cent coins.",
            "lines": [
              {
                "step": "Find the number of 20-cent coins in a purse that holds only coins of 5 cents and of 20 cents, 375 cents in all, where the 20-cent coins number 3 more than 2 times the number of 5-cent coins.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of 5-cent coins; there are $2x + 3$ 20-cent coins.",
                "reason": "Defining the unknown: the letter stands for a count of coins, never for one of them or for an amount in cents, and the second count is written in it."
              },
              {
                "step": "The 5-cent coins make $5x$ cents and the 20-cent coins make $20(2x + 3)$ cents.",
                "reason": "Writing a sentence as an equation: a count times the amount one of the coins makes gives the amount all of them make."
              },
              {
                "step": "$5x + 20(2x + 3) = 375$",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
              },
              {
                "step": "$5x + 40x + 60 = 375$",
                "reason": "Multiplying out: by the distributive law the $20$ in front multiplies each term in the bracket."
              },
              {
                "step": "$45x + 60 = 375$",
                "reason": "Collecting like terms: the distributive law read backwards adds the coefficients $5$ and $40$ of $x$."
              },
              {
                "step": "$45x = 315$",
                "reason": "Adding the same number to both sides: adding $-60$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 7$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $45$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "There are $7$ 5-cent coins and $17$ 20-cent coins, making $35 + 340 = 375$ cents.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There are $17$ 20-cent coins.",
                "reason": "Answering the question asked: the question asks for the number of 20-cent coins, which is $2x + 3$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of 10-cent coins in a purse that holds only coins of 10 cents and of 50 cents, 440 cents in all, where the 50-cent coins number 2 fewer than the number of 10-cent coins.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the number of 10-cent coins in a purse that holds only coins of 10 cents and of 50 cents, 440 cents in all, where the 50-cent coins number 2 fewer than the number of 10-cent coins.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 10-cent coins; there are $x - 2$ 50-cent coins.",
                  "reason": "Defining the unknown: the letter stands for a count of coins, never for one of them or for an amount in cents, and the second count is written in it."
                },
                {
                  "step": "The 10-cent coins make $10x$ cents and the 50-cent coins make $50(x - 2)$ cents.",
                  "reason": "Writing a sentence as an equation: a count times the amount one of the coins makes gives the amount all of them make."
                },
                {
                  "step": "$10x + 50(x - 2) = 440$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$10x + 50x - 100 = 440$",
                  "reason": "Multiplying out: by the distributive law the $50$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$60x - 100 = 440$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients $10$ and $50$ of $x$."
                },
                {
                  "step": "$60x = 540$",
                  "reason": "Adding the same number to both sides: adding $100$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 9$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $60$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "There are $9$ 10-cent coins and $7$ 50-cent coins, making $90 + 350 = 440$ cents.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $9$ 10-cent coins.",
                  "reason": "Answering the question asked: the question asks for the number of 10-cent coins, which is $x$ itself, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of 65-cent stamps in a sheet that holds only stamps of 40 cents and of 65 cents, 1005 cents in all, where the 65-cent stamps number 1 more than 3 times the number of 40-cent stamps.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the number of 65-cent stamps in a sheet that holds only stamps of 40 cents and of 65 cents, 1005 cents in all, where the 65-cent stamps number 1 more than 3 times the number of 40-cent stamps.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 40-cent stamps; there are $3x + 1$ 65-cent stamps.",
                  "reason": "Defining the unknown: the letter stands for a count of stamps, never for one of them or for an amount in cents, and the second count is written in it."
                },
                {
                  "step": "The 40-cent stamps make $40x$ cents and the 65-cent stamps make $65(3x + 1)$ cents.",
                  "reason": "Writing a sentence as an equation: a count times the amount one of the stamps makes gives the amount all of them make."
                },
                {
                  "step": "$40x + 65(3x + 1) = 1005$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$40x + 195x + 65 = 1005$",
                  "reason": "Multiplying out: by the distributive law the $65$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$235x + 65 = 1005$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients $40$ and $195$ of $x$."
                },
                {
                  "step": "$235x = 940$",
                  "reason": "Adding the same number to both sides: adding $-65$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $235$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "There are $4$ 40-cent stamps and $13$ 65-cent stamps, making $160 + 845 = 1005$ cents.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $13$ 65-cent stamps.",
                  "reason": "Answering the question asked: the question asks for the number of 65-cent stamps, which is $3x + 1$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of 5-kg bags in a van that holds only bags of 2 kg and of 5 kg, 67 kg in all, where the 5-kg bags number 1 fewer than 2 times the number of 2-kg bags.",
              "form": "Answer as an integer.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find the number of 5-kg bags in a van that holds only bags of 2 kg and of 5 kg, 67 kg in all, where the 5-kg bags number 1 fewer than 2 times the number of 2-kg bags.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 2-kg bags; there are $2x - 1$ 5-kg bags.",
                  "reason": "Defining the unknown: the letter stands for a count of bags, never for one of them or for an amount in kg, and the second count is written in it."
                },
                {
                  "step": "The 2-kg bags make $2x$ kg and the 5-kg bags make $5(2x - 1)$ kg.",
                  "reason": "Writing a sentence as an equation: a count times the amount one of the bags makes gives the amount all of them make."
                },
                {
                  "step": "$2x + 5(2x - 1) = 67$",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the verb that joins the two amounts stands where the equals sign goes."
                },
                {
                  "step": "$2x + 10x - 5 = 67$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket."
                },
                {
                  "step": "$12x - 5 = 67$",
                  "reason": "Collecting like terms: the distributive law read backwards adds the coefficients $2$ and $10$ of $x$."
                },
                {
                  "step": "$12x = 72$",
                  "reason": "Adding the same number to both sides: adding $5$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $12$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "There are $6$ 2-kg bags and $11$ 5-kg bags, making $12 + 55 = 67$ kg.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $11$ 5-kg bags.",
                  "reason": "Answering the question asked: the question asks for the number of 5-kg bags, which is $2x - 1$, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of pupils if, seated 4 to a bench, 3 pupils are left over, and seated 5 to a bench, 7 places stay empty.",
            "lines": [
              {
                "step": "Find the number of pupils if, seated 4 to a bench, 3 pupils are left over, and seated 5 to a bench, 7 places stay empty.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of benches.",
                "reason": "Defining the unknown: the number of benches is the one count both ways of filling them share, so the letter stands for it."
              },
              {
                "step": "Seated 4 to a bench, the pupils number $4x + 3$.",
                "reason": "Writing a sentence as an equation: 4 for each bench gives $4x$, and the pupils left over are added."
              },
              {
                "step": "Seated 5 to a bench, the pupils number $5x - 7$.",
                "reason": "Writing a sentence as an equation: 5 for each bench gives $5x$, and the empty places are taken away."
              },
              {
                "step": "$4x + 3 = 5x - 7$",
                "reason": "Writing a sentence as an equation: both expressions count the same pupils, so the equals sign joins them."
              },
              {
                "step": "$-x + 3 = -7$",
                "reason": "Adding the same number to both sides: adding $-5x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$-x = -10$",
                "reason": "Adding the same number to both sides: adding $-3$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
              },
              {
                "step": "$x = 10$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-1$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "$4(10) + 3 = 43$",
                "reason": "Substituting a value: the number $10$ goes, in brackets, in place of $x$ in $4x + 3$, the count of pupils."
              },
              {
                "step": "With $10$ benches, 5 to a bench fills $50$ places; $7$ stay empty, which leaves $43$ pupils.",
                "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There are $43$ pupils.",
                "reason": "Answering the question asked: the question asks for the number of pupils, not the number of benches, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of books if, packed 6 to a box, 4 books are left over, and packed 8 to a box, 6 places stay empty.",
              "form": "Answer as an integer.",
              "answer": "34",
              "lines": [
                {
                  "step": "Find the number of books if, packed 6 to a box, 4 books are left over, and packed 8 to a box, 6 places stay empty.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of boxes.",
                  "reason": "Defining the unknown: the number of boxes is the one count both ways of filling them share, so the letter stands for it."
                },
                {
                  "step": "Packed 6 to a box, the books number $6x + 4$.",
                  "reason": "Writing a sentence as an equation: 6 for each box gives $6x$, and the books left over are added."
                },
                {
                  "step": "Packed 8 to a box, the books number $8x - 6$.",
                  "reason": "Writing a sentence as an equation: 8 for each box gives $8x$, and the empty places are taken away."
                },
                {
                  "step": "$6x + 4 = 8x - 6$",
                  "reason": "Writing a sentence as an equation: both expressions count the same books, so the equals sign joins them."
                },
                {
                  "step": "$-2x + 4 = -6$",
                  "reason": "Adding the same number to both sides: adding $-8x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$-2x = -10$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$6(5) + 4 = 34$",
                  "reason": "Substituting a value: the number $5$ goes, in brackets, in place of $x$ in $6x + 4$, the count of books."
                },
                {
                  "step": "With $5$ boxes, 8 to a box fills $40$ places; $6$ stay empty, which leaves $34$ books.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $34$ books.",
                  "reason": "Answering the question asked: the question asks for the number of books, not the number of boxes, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of guests if, seated 8 to a table, 5 guests are left over, and seated 10 to a table, 11 places stay empty.",
              "form": "Answer as an integer.",
              "answer": "69",
              "lines": [
                {
                  "step": "Find the number of guests if, seated 8 to a table, 5 guests are left over, and seated 10 to a table, 11 places stay empty.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of tables.",
                  "reason": "Defining the unknown: the number of tables is the one count both ways of filling them share, so the letter stands for it."
                },
                {
                  "step": "Seated 8 to a table, the guests number $8x + 5$.",
                  "reason": "Writing a sentence as an equation: 8 for each table gives $8x$, and the guests left over are added."
                },
                {
                  "step": "Seated 10 to a table, the guests number $10x - 11$.",
                  "reason": "Writing a sentence as an equation: 10 for each table gives $10x$, and the empty places are taken away."
                },
                {
                  "step": "$8x + 5 = 10x - 11$",
                  "reason": "Writing a sentence as an equation: both expressions count the same guests, so the equals sign joins them."
                },
                {
                  "step": "$-2x + 5 = -11$",
                  "reason": "Adding the same number to both sides: adding $-10x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$-2x = -16$",
                  "reason": "Adding the same number to both sides: adding $-5$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$8(8) + 5 = 69$",
                  "reason": "Substituting a value: the number $8$ goes, in brackets, in place of $x$ in $8x + 5$, the count of guests."
                },
                {
                  "step": "With $8$ tables, 10 to a table fills $80$ places; $11$ stay empty, which leaves $69$ guests.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $69$ guests.",
                  "reason": "Answering the question asked: the question asks for the number of guests, not the number of tables, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of eggs if, packed 10 to a tray, 7 eggs are left over, and packed 12 to a tray, 13 places stay empty.",
              "form": "Answer as an integer.",
              "answer": "107",
              "lines": [
                {
                  "step": "Find the number of eggs if, packed 10 to a tray, 7 eggs are left over, and packed 12 to a tray, 13 places stay empty.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of trays.",
                  "reason": "Defining the unknown: the number of trays is the one count both ways of filling them share, so the letter stands for it."
                },
                {
                  "step": "Packed 10 to a tray, the eggs number $10x + 7$.",
                  "reason": "Writing a sentence as an equation: 10 for each tray gives $10x$, and the eggs left over are added."
                },
                {
                  "step": "Packed 12 to a tray, the eggs number $12x - 13$.",
                  "reason": "Writing a sentence as an equation: 12 for each tray gives $12x$, and the empty places are taken away."
                },
                {
                  "step": "$10x + 7 = 12x - 13$",
                  "reason": "Writing a sentence as an equation: both expressions count the same eggs, so the equals sign joins them."
                },
                {
                  "step": "$-2x + 7 = -13$",
                  "reason": "Adding the same number to both sides: adding $-12x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$-2x = -20$",
                  "reason": "Adding the same number to both sides: adding $-7$ to both sides keeps them equal and leaves the term in $x$ alone on the left."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$10(10) + 7 = 107$",
                  "reason": "Substituting a value: the number $10$ goes, in brackets, in place of $x$ in $10x + 7$, the count of eggs."
                },
                {
                  "step": "With $10$ trays, 12 to a tray fills $120$ places; $13$ stay empty, which leaves $107$ eggs.",
                  "reason": "Checking against the words: the value goes back into the sentences of the problem, not into the equation, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $107$ eggs.",
                  "reason": "Answering the question asked: the question asks for the number of eggs, not the number of trays, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t110-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find Ruth's age now, if Ruth's age now is 6 more than 2 times Ruth's age 9 years ago.",
            "given": [
              "Let $x$ be Ruth's age now, in years.",
              "$x = 2x + 6$",
              "$-x = 6$",
              "$x = -6$"
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find Ruth's age now, if Ruth's age now is 6 more than 2 times Ruth's age 9 years ago.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $2x$ for 2 times Ruth's age 9 years ago, which reads $x$ as Ruth's age 9 years ago as well as Ruth's age now.",
                "reason": "A letter is read as an object: defining the unknown gives $x$ one meaning, and every other quantity is written in $x$ from that meaning."
              },
              {
                "step": "Line 2 written right is $x = 2(x - 9) + 6$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ as the first line defines it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find Eva's age now, if Karl is 5 times as old as Eva, and in 6 years Karl will be 3 times as old as Eva.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*x+6 = 3*(x+6)",
              "lines": [
                {
                  "step": "The working is for this problem: Find Eva's age now, if Karl is 5 times as old as Eva, and in 6 years Karl will be 3 times as old as Eva.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $5x$ for Karl's age in 6 years, which reads $x$ as Eva's age now in a place where Eva's age in 6 years belongs.",
                  "reason": "A letter is read as an object: defining the unknown gives $x$ one meaning, and every other quantity is written in $x$ from that meaning."
                },
                {
                  "step": "Line 3 written right is $5x + 6 = 3(x + 6)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ as the first line defines it."
                }
              ],
              "given": [
                "Let $x$ be Eva's age now, in years.",
                "Karl's age now is $5x$.",
                "$5x = 3(x + 6)$",
                "$5x = 3x + 18$",
                "$2x = 18$",
                "$x = 9$"
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of pupils on a trip with 7 pupils for each teacher, 96 people in all.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x+x/7 = 96",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of pupils on a trip with 7 pupils for each teacher, 96 people in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $7x$ for the number of teachers, which reads $x$ as one teacher, as if 7 times the letter gave 7 pupils for each teacher.",
                  "reason": "A letter is read as an object: defining the unknown gives $x$ one meaning, and every other quantity is written in $x$ from that meaning."
                },
                {
                  "step": "Line 2 written right is $x + \\dfrac{x}{7} = 96$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ as the first line defines it."
                }
              ],
              "given": [
                "Let $x$ be the number of pupils.",
                "$x + 7x = 96$",
                "$8x = 96$",
                "$x = 12$"
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of 10-cent coins in a purse that holds only 10-cent and 25-cent coins, 420 cents in all, with 2 times as many 25-cent coins as 10-cent coins.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 10*x+25*(2*x) = 420",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of 10-cent coins in a purse that holds only 10-cent and 25-cent coins, 420 cents in all, with 2 times as many 25-cent coins as 10-cent coins.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $2x$ for the amount the 25-cent coins make, which reads $x$ as an amount in cents, though $x$ counts coins.",
                  "reason": "A letter is read as an object: defining the unknown gives $x$ one meaning, and every other quantity is written in $x$ from that meaning."
                },
                {
                  "step": "Line 3 written right is $10x + 25(2x) = 420$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ as the first line defines it."
                }
              ],
              "given": [
                "Let $x$ be the number of 10-cent coins.",
                "There are $2x$ 25-cent coins.",
                "$10x + 2x = 420$",
                "$12x = 420$",
                "$x = 35$"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t110-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation in $x$ for this sentence, where $x$ is Rosa's age now, in years: Rosa's age now is 8 less than 3 times Rosa's age 6 years ago.",
            "lines": [
              {
                "step": "Write an equation in $x$ for this sentence, where $x$ is Rosa's age now, in years: Rosa's age now is 8 less than 3 times Rosa's age 6 years ago.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Rosa's age 6 years ago is $x - 6$, and 3 times that age is $3(x - 6)$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ as the prompt defines it."
              },
              {
                "step": "$x = 3(x - 6) - 8$",
                "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$ for this sentence, where $x$ is a number: 7 more than 5 times the number is 2 less than 8 times the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*x+7 = 8*x-2",
              "lines": [
                {
                  "step": "Write an equation in $x$ for this sentence, where $x$ is a number: 7 more than 5 times the number is 2 less than 8 times the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Then 5 times the number, with 7 more, is $5x + 7$, and 8 times the number, less 2, is $8x - 2$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ as the prompt defines it."
                },
                {
                  "step": "$5x + 7 = 8x - 2$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ for this sentence, where $x$ is the number of 10-cent coins: A purse holds only 10-cent and 25-cent coins, worth 425 cents, with 3 more 25-cent coins than 10-cent coins.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "10*x+25*(x+3) = 425",
              "lines": [
                {
                  "step": "Write an equation in $x$ for this sentence, where $x$ is the number of 10-cent coins: A purse holds only 10-cent and 25-cent coins, worth 425 cents, with 3 more 25-cent coins than 10-cent coins.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "There are $x + 3$ coins of 25 cents, making $25(x + 3)$ cents, and the 10-cent coins make $10x$ cents.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ as the prompt defines it."
                },
                {
                  "step": "$10x + 25(x + 3) = 425$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ for this sentence, where $x$ is the smallest of three consecutive integers: The sum of three consecutive integers is 96.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x+(x+1)+(x+2) = 96",
              "lines": [
                {
                  "step": "Write an equation in $x$ for this sentence, where $x$ is the smallest of three consecutive integers: The sum of three consecutive integers is 96.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The other two integers are $x + 1$ and $x + 2$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ as the prompt defines it."
                },
                {
                  "step": "$x + (x + 1) + (x + 2) = 96$",
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
