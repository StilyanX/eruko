export default {
  "number": 115,
  "title": "Word problems with two unknowns",
  "section": 3,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "136-142, 150-156"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the larger of two numbers whose sum is 46 and whose difference is 18.",
    "form": "Answer as an integer.",
    "answer": "32",
    "solution": [
      "Find the larger of two numbers whose sum is 46 and whose difference is 18.",
      "Let $x$ be the larger number and $y$ the smaller number.",
      "$x + y = 46$",
      "$x - y = 18$",
      "$2x = 64$",
      "$x = 32$",
      "$32 + y = 46$",
      "$y = 14$",
      "The numbers $32$ and $14$ have sum $32 + 14 = 46$ and difference $32 - 14 = 18$.",
      "The larger number is $32$."
    ]
  },
  "ideas": [
    {
      "name": "One letter for each unknown",
      "concrete": "For a shelf of large and small jars, let $x$ be the number of large jars and $y$ the number of small jars. Two quantities are unknown, so two letters stand for them, and each sentence about the jars becomes one equation in $x$ and $y$.",
      "general": "**One letter for each unknown**: where a word problem has two unknown quantities, each gets its own letter, defined in one sentence with its unit and, for a quantity that changes, its time. Each condition of the problem becomes one equation in the letters, and a question that needs a further unknown later gets a further letter."
    },
    {
      "name": "Clearing decimals before solving",
      "concrete": "Both sides of $0.3x + 0.15y = 2.7$ multiplied by $100$ give $30x + 15y = 270$, the same equation with whole coefficients.",
      "general": "**Clearing decimals before solving**: for a whole number $n$, an equation whose numbers have at most $n$ decimal places, multiplied on both sides by $10^n$, keeps its solutions and has whole numbers in place of the decimals."
    },
    {
      "name": "Finding only what is asked",
      "concrete": "If $4x + y = 31$ and $x + 4y = 19$ and the question asks for $x + y$, adding the equations gives $5x + 5y = 50$, so $x + y = 10$, and neither $x$ nor $y$ is found alone.",
      "general": "**Finding only what is asked**: where the question names a combination of the unknowns, such as their sum, the equations may be combined to give that combination directly, and the unknowns need not be found one by one."
    }
  ],
  "kinds": [
    {
      "id": "t115-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the larger of two numbers whose sum is 60 and whose difference is 22.",
            "lines": [
              {
                "step": "Find the larger of two numbers whose sum is 60 and whose difference is 22.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the larger number and $y$ the smaller number.",
                "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
              },
              {
                "step": "$x + y = 60$",
                "reason": "Writing a sentence as an equation: the sum of the two numbers is $x + y$."
              },
              {
                "step": "$x - y = 22$",
                "reason": "Writing a sentence as an equation: the difference of the two numbers is the larger less the smaller."
              },
              {
                "step": "$2x = 82$",
                "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and $y$ and $-y$ cancel."
              },
              {
                "step": "$x = 41$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "$41 + y = 60$",
                "reason": "Back-substitution: the value found goes in place of $x$ in the first equation."
              },
              {
                "step": "$y = 19$",
                "reason": "Adding the same number to both sides: adding $-41$ to both sides keeps them equal and leaves $y$ alone."
              },
              {
                "step": "The numbers $41$ and $19$ have sum $41 + 19 = 60$ and difference $41 - 19 = 22$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The larger number is $41$.",
                "reason": "Answering the question asked: the question asks for the larger number, which is $x$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the smaller of two numbers that add to 75, one of them 29 more than the other.",
              "form": "Answer as an integer.",
              "answer": "23",
              "lines": [
                {
                  "step": "Find the smaller of two numbers that add to 75, one of them 29 more than the other.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the larger number and $y$ the smaller number.",
                  "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
                },
                {
                  "step": "$x + y = 75$",
                  "reason": "Writing a sentence as an equation: the sum of the two numbers is $x + y$."
                },
                {
                  "step": "$x - y = 29$",
                  "reason": "Writing a sentence as an equation: the larger is the one $29$ more, so the larger less the smaller is $29$."
                },
                {
                  "step": "$2x = 104$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and $y$ and $-y$ cancel."
                },
                {
                  "step": "$x = 52$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$52 + y = 75$",
                  "reason": "Back-substitution: the value found goes in place of $x$ in the first equation."
                },
                {
                  "step": "$y = 23$",
                  "reason": "Adding the same number to both sides: adding $-52$ to both sides keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "The numbers $52$ and $23$ have sum $52 + 23 = 75$ and difference $52 - 23 = 29$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The smaller number is $23$.",
                  "reason": "Answering the question asked: the question asks for the smaller number, which is $y$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the larger of two numbers whose sum is -8 and whose difference is 30.",
              "form": "Answer as an integer.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find the larger of two numbers whose sum is -8 and whose difference is 30.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the larger number and $y$ the smaller number.",
                  "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
                },
                {
                  "step": "$x + y = -8$",
                  "reason": "Writing a sentence as an equation: the sum of the two numbers is $x + y$."
                },
                {
                  "step": "$x - y = 30$",
                  "reason": "Writing a sentence as an equation: the difference of the two numbers is the larger less the smaller."
                },
                {
                  "step": "$2x = 22$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and $y$ and $-y$ cancel."
                },
                {
                  "step": "$x = 11$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$11 + y = -8$",
                  "reason": "Back-substitution: the value found goes in place of $x$ in the first equation."
                },
                {
                  "step": "$y = -19$",
                  "reason": "Adding the same number to both sides: adding $-11$ to both sides keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "The numbers $11$ and $-19$ have sum $11 + (-19) = -8$ and difference $11 - (-19) = 30$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The larger number is $11$.",
                  "reason": "Answering the question asked: the question asks for the larger number, which is $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the smaller of two numbers that add to 91, one of them 47 more than the other.",
              "form": "Answer as an integer.",
              "answer": "22",
              "lines": [
                {
                  "step": "Find the smaller of two numbers that add to 91, one of them 47 more than the other.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the larger number and $y$ the smaller number.",
                  "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
                },
                {
                  "step": "$x + y = 91$",
                  "reason": "Writing a sentence as an equation: the sum of the two numbers is $x + y$."
                },
                {
                  "step": "$x - y = 47$",
                  "reason": "Writing a sentence as an equation: the larger is the one $47$ more, so the larger less the smaller is $47$."
                },
                {
                  "step": "$2x = 138$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and $y$ and $-y$ cancel."
                },
                {
                  "step": "$x = 69$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$69 + y = 91$",
                  "reason": "Back-substitution: the value found goes in place of $x$ in the first equation."
                },
                {
                  "step": "$y = 22$",
                  "reason": "Adding the same number to both sides: adding $-69$ to both sides keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "The numbers $69$ and $22$ have sum $69 + 22 = 91$ and difference $69 - 22 = 47$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The smaller number is $22$.",
                  "reason": "Answering the question asked: the question asks for the smaller number, which is $y$, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the larger of two numbers whose sum is 5 times their difference, where the sum less the difference is 16.",
            "lines": [
              {
                "step": "Find the larger of two numbers whose sum is 5 times their difference, where the sum less the difference is 16.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the larger number and $y$ the smaller number.",
                "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
              },
              {
                "step": "$x + y = 5(x - y)$",
                "reason": "Writing a sentence as an equation: the sum $x + y$ is 5 times the difference $x - y$."
              },
              {
                "step": "$(x + y) - (x - y) = 16$",
                "reason": "Writing a sentence as an equation: the sum less the difference, each in brackets, is the number given."
              },
              {
                "step": "$x + y - x + y = 16$",
                "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $x$ and $-y$ change sign."
              },
              {
                "step": "$2y = 16$",
                "reason": "Collecting like terms: $x$ and $-x$ cancel, and $y$ and $y$ add to $2y$."
              },
              {
                "step": "$y = 8$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x + 8 = 5(x - 8)$",
                "reason": "Back-substitution: the value found goes in place of $y$, in brackets where it follows a minus sign, in the first equation."
              },
              {
                "step": "$x + 8 = 5x - 40$",
                "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, $x$ and the number."
              },
              {
                "step": "$-4x + 8 = -40$",
                "reason": "Adding the same number to both sides: adding $-5x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
              },
              {
                "step": "$-4x = -48$",
                "reason": "Adding the same number to both sides: adding $-8$ to both sides keeps them equal and leaves the term in $x$ alone."
              },
              {
                "step": "$x = 12$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ keeps them equal and leaves $x$ alone."
              },
              {
                "step": "The numbers $12$ and $8$ have sum $20$ and difference $4$, with $20 = 5 \\cdot 4$ and $20 - 4 = 16$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The larger number is $12$.",
                "reason": "Answering the question asked: the question asks for the larger number, which is $x$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the larger of two numbers whose sum is 4 times their difference, where the sum less the difference is 24.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the larger of two numbers whose sum is 4 times their difference, where the sum less the difference is 24.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the larger number and $y$ the smaller number.",
                  "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
                },
                {
                  "step": "$x + y = 4(x - y)$",
                  "reason": "Writing a sentence as an equation: the sum $x + y$ is 4 times the difference $x - y$."
                },
                {
                  "step": "$(x + y) - (x - y) = 24$",
                  "reason": "Writing a sentence as an equation: the sum less the difference, each in brackets, is the number given."
                },
                {
                  "step": "$x + y - x + y = 24$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $x$ and $-y$ change sign."
                },
                {
                  "step": "$2y = 24$",
                  "reason": "Collecting like terms: $x$ and $-x$ cancel, and $y$ and $y$ add to $2y$."
                },
                {
                  "step": "$y = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x + 12 = 4(x - 12)$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets where it follows a minus sign, in the first equation."
                },
                {
                  "step": "$x + 12 = 4x - 48$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, $x$ and the number."
                },
                {
                  "step": "$-3x + 12 = -48$",
                  "reason": "Adding the same number to both sides: adding $-4x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$-3x = -60$",
                  "reason": "Adding the same number to both sides: adding $-12$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 20$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "The numbers $20$ and $12$ have sum $32$ and difference $8$, with $32 = 4 \\cdot 8$ and $32 - 8 = 24$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The larger number is $20$.",
                  "reason": "Answering the question asked: the question asks for the larger number, which is $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the larger of two numbers whose sum is 7 times their difference, where the sum less the difference is 12.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the larger of two numbers whose sum is 7 times their difference, where the sum less the difference is 12.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the larger number and $y$ the smaller number.",
                  "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
                },
                {
                  "step": "$x + y = 7(x - y)$",
                  "reason": "Writing a sentence as an equation: the sum $x + y$ is 7 times the difference $x - y$."
                },
                {
                  "step": "$(x + y) - (x - y) = 12$",
                  "reason": "Writing a sentence as an equation: the sum less the difference, each in brackets, is the number given."
                },
                {
                  "step": "$x + y - x + y = 12$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $x$ and $-y$ change sign."
                },
                {
                  "step": "$2y = 12$",
                  "reason": "Collecting like terms: $x$ and $-x$ cancel, and $y$ and $y$ add to $2y$."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x + 6 = 7(x - 6)$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets where it follows a minus sign, in the first equation."
                },
                {
                  "step": "$x + 6 = 7x - 42$",
                  "reason": "Multiplying out: by the distributive law the $7$ in front multiplies each term in the bracket, $x$ and the number."
                },
                {
                  "step": "$-6x + 6 = -42$",
                  "reason": "Adding the same number to both sides: adding $-7x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$-6x = -48$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-6$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "The numbers $8$ and $6$ have sum $14$ and difference $2$, with $14 = 7 \\cdot 2$ and $14 - 2 = 12$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The larger number is $8$.",
                  "reason": "Answering the question asked: the question asks for the larger number, which is $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the larger of two numbers whose sum is 9 times their difference, where the sum less the difference is 8.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the larger of two numbers whose sum is 9 times their difference, where the sum less the difference is 8.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the larger number and $y$ the smaller number.",
                  "reason": "One letter for each unknown: two numbers are unknown, so each gets its own letter, the larger $x$ and the smaller $y$."
                },
                {
                  "step": "$x + y = 9(x - y)$",
                  "reason": "Writing a sentence as an equation: the sum $x + y$ is 9 times the difference $x - y$."
                },
                {
                  "step": "$(x + y) - (x - y) = 8$",
                  "reason": "Writing a sentence as an equation: the sum less the difference, each in brackets, is the number given."
                },
                {
                  "step": "$x + y - x + y = 8$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $x$ and $-y$ change sign."
                },
                {
                  "step": "$2y = 8$",
                  "reason": "Collecting like terms: $x$ and $-x$ cancel, and $y$ and $y$ add to $2y$."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x + 4 = 9(x - 4)$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets where it follows a minus sign, in the first equation."
                },
                {
                  "step": "$x + 4 = 9x - 36$",
                  "reason": "Multiplying out: by the distributive law the $9$ in front multiplies each term in the bracket, $x$ and the number."
                },
                {
                  "step": "$-8x + 4 = -36$",
                  "reason": "Adding the same number to both sides: adding $-9x$ to both sides keeps them equal and leaves the terms in $x$ on the left only."
                },
                {
                  "step": "$-8x = -40$",
                  "reason": "Adding the same number to both sides: adding $-4$ to both sides keeps them equal and leaves the term in $x$ alone."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-8$ keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "The numbers $5$ and $4$ have sum $9$ and difference $1$, with $9 = 9 \\cdot 1$ and $9 - 1 = 8$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The larger number is $5$.",
                  "reason": "Answering the question asked: the question asks for the larger number, which is $x$, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t115-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number of goats in a yard that holds only hens and goats, 35 heads with 98 legs in all.",
            "lines": [
              {
                "step": "Find the number of goats in a yard that holds only hens and goats, 35 heads with 98 legs in all.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of hens and $y$ the number of goats.",
                "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts heads, never one of them and never an amount in legs."
              },
              {
                "step": "$x + y = 35$",
                "reason": "Writing a sentence as an equation: each of the hens and of the goats is one of the 35 heads, so the two counts add to $35$."
              },
              {
                "step": "$2x + 4y = 98$",
                "reason": "Writing a sentence as an equation: each of the hens gives $2$ legs and each of the goats gives $4$, and a count times the amount for one gives the amount for all."
              },
              {
                "step": "$x = 35 - y$",
                "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
              },
              {
                "step": "$2(35 - y) + 4y = 98$",
                "reason": "Substitution: $35 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
              },
              {
                "step": "$70 - 2y + 4y = 98$",
                "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, $-y$ and the number."
              },
              {
                "step": "$2y + 70 = 98$",
                "reason": "Collecting like terms: $-2y$ and $4y$ add to $2y$."
              },
              {
                "step": "$2y = 28$",
                "reason": "Adding the same number to both sides: adding $-70$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 14$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = 35 - 14 = 21$",
                "reason": "Back-substitution: the value found goes in place of $y$ in $x = 35 - y$."
              },
              {
                "step": "With $21$ hens and $14$ goats, the heads number $21 + 14 = 35$ and the legs come to $2 \\cdot 21 + 4 \\cdot 14 = 98$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There are $14$ goats.",
                "reason": "Answering the question asked: the question asks for the number of goats, which is $y$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of bicycles in a shed that holds only bicycles and 4-wheeled carts, 21 vehicles with 58 wheels in all.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the number of bicycles in a shed that holds only bicycles and 4-wheeled carts, 21 vehicles with 58 wheels in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of bicycles and $y$ the number of 4-wheeled carts.",
                  "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts vehicles, never one of them and never an amount in wheels."
                },
                {
                  "step": "$x + y = 21$",
                  "reason": "Writing a sentence as an equation: each of the bicycles and of the 4-wheeled carts is one of the 21 vehicles, so the two counts add to $21$."
                },
                {
                  "step": "$2x + 4y = 58$",
                  "reason": "Writing a sentence as an equation: each of the bicycles gives $2$ wheels and each of the 4-wheeled carts gives $4$, and a count times the amount for one gives the amount for all."
                },
                {
                  "step": "$x = 21 - y$",
                  "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
                },
                {
                  "step": "$2(21 - y) + 4y = 58$",
                  "reason": "Substitution: $21 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$42 - 2y + 4y = 58$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, $-y$ and the number."
                },
                {
                  "step": "$2y + 42 = 58$",
                  "reason": "Collecting like terms: $-2y$ and $4y$ add to $2y$."
                },
                {
                  "step": "$2y = 16$",
                  "reason": "Adding the same number to both sides: adding $-42$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 21 - 8 = 13$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in $x = 21 - y$."
                },
                {
                  "step": "With $13$ bicycles and $8$ 4-wheeled carts, the vehicles number $13 + 8 = 21$ and the wheels come to $2 \\cdot 13 + 4 \\cdot 8 = 58$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $13$ bicycles.",
                  "reason": "Answering the question asked: the question asks for the number of bicycles, which is $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of 5-seat benches in a park that holds only 2-seat benches and 5-seat benches, 24 benches with 93 seats in all.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find the number of 5-seat benches in a park that holds only 2-seat benches and 5-seat benches, 24 benches with 93 seats in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 2-seat benches and $y$ the number of 5-seat benches.",
                  "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts benches, never one of them and never an amount in seats."
                },
                {
                  "step": "$x + y = 24$",
                  "reason": "Writing a sentence as an equation: each of the 2-seat benches and of the 5-seat benches is one of the 24 benches, so the two counts add to $24$."
                },
                {
                  "step": "$2x + 5y = 93$",
                  "reason": "Writing a sentence as an equation: each of the 2-seat benches gives $2$ seats and each of the 5-seat benches gives $5$, and a count times the amount for one gives the amount for all."
                },
                {
                  "step": "$x = 24 - y$",
                  "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
                },
                {
                  "step": "$2(24 - y) + 5y = 93$",
                  "reason": "Substitution: $24 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$48 - 2y + 5y = 93$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, $-y$ and the number."
                },
                {
                  "step": "$3y + 48 = 93$",
                  "reason": "Collecting like terms: $-2y$ and $5y$ add to $3y$."
                },
                {
                  "step": "$3y = 45$",
                  "reason": "Adding the same number to both sides: adding $-48$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 15$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 24 - 15 = 9$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in $x = 24 - y$."
                },
                {
                  "step": "With $9$ 2-seat benches and $15$ 5-seat benches, the benches number $9 + 15 = 24$ and the seats come to $2 \\cdot 9 + 5 \\cdot 15 = 93$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $15$ 5-seat benches.",
                  "reason": "Answering the question asked: the question asks for the number of 5-seat benches, which is $y$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of 2-cent coins in a purse that holds only 2-cent coins and 5-cent coins, 28 coins worth 89 cents in all.",
              "form": "Answer as an integer.",
              "answer": "17",
              "lines": [
                {
                  "step": "Find the number of 2-cent coins in a purse that holds only 2-cent coins and 5-cent coins, 28 coins worth 89 cents in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 2-cent coins and $y$ the number of 5-cent coins.",
                  "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts coins, never one of them and never an amount in cents."
                },
                {
                  "step": "$x + y = 28$",
                  "reason": "Writing a sentence as an equation: each of the 2-cent coins and of the 5-cent coins is one of the 28 coins, so the two counts add to $28$."
                },
                {
                  "step": "$2x + 5y = 89$",
                  "reason": "Writing a sentence as an equation: each of the 2-cent coins gives $2$ cents and each of the 5-cent coins gives $5$, and a count times the amount for one gives the amount for all."
                },
                {
                  "step": "$x = 28 - y$",
                  "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
                },
                {
                  "step": "$2(28 - y) + 5y = 89$",
                  "reason": "Substitution: $28 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$56 - 2y + 5y = 89$",
                  "reason": "Multiplying out: by the distributive law the $2$ in front multiplies each term in the bracket, $-y$ and the number."
                },
                {
                  "step": "$3y + 56 = 89$",
                  "reason": "Collecting like terms: $-2y$ and $5y$ add to $3y$."
                },
                {
                  "step": "$3y = 33$",
                  "reason": "Adding the same number to both sides: adding $-56$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 11$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $3$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 28 - 11 = 17$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in $x = 28 - y$."
                },
                {
                  "step": "With $17$ 2-cent coins and $11$ 5-cent coins, the coins number $17 + 11 = 28$ and the cents come to $2 \\cdot 17 + 5 \\cdot 11 = 89$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $17$ 2-cent coins.",
                  "reason": "Answering the question asked: the question asks for the number of 2-cent coins, which is $x$, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of 0.50-euro coins in a jar that holds only 0.20-euro coins and 0.50-euro coins, 25 coins worth 7.70 euros in all.",
            "lines": [
              {
                "step": "Find the number of 0.50-euro coins in a jar that holds only 0.20-euro coins and 0.50-euro coins, 25 coins worth 7.70 euros in all.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the number of 0.20-euro coins and $y$ the number of 0.50-euro coins.",
                "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts coins, never one of them and never an amount in euros."
              },
              {
                "step": "$x + y = 25$",
                "reason": "Writing a sentence as an equation: each of the 0.20-euro coins and of the 0.50-euro coins is one of the 25 coins, so the two counts add to $25$."
              },
              {
                "step": "$0.20x + 0.50y = 7.70$",
                "reason": "Writing a sentence as an equation: each of the 0.20-euro coins gives $0.20$ euros and each of the 0.50-euro coins gives $0.50$, and a count times the amount for one gives the amount for all."
              },
              {
                "step": "$20x + 50y = 770$",
                "reason": "Clearing decimals before solving: multiplying both sides by $100$ keeps the solutions and turns each decimal into a whole number."
              },
              {
                "step": "$x = 25 - y$",
                "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
              },
              {
                "step": "$20(25 - y) + 50y = 770$",
                "reason": "Substitution: $25 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
              },
              {
                "step": "$500 - 20y + 50y = 770$",
                "reason": "Multiplying out: by the distributive law the $20$ in front multiplies each term in the bracket, $-y$ and the number."
              },
              {
                "step": "$30y + 500 = 770$",
                "reason": "Collecting like terms: $-20y$ and $50y$ add to $30y$."
              },
              {
                "step": "$30y = 270$",
                "reason": "Adding the same number to both sides: adding $-500$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 9$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $30$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = 25 - 9 = 16$",
                "reason": "Back-substitution: the value found goes in place of $y$ in $x = 25 - y$."
              },
              {
                "step": "With $16$ 0.20-euro coins and $9$ 0.50-euro coins, the coins number $16 + 9 = 25$ and the euros come to $0.20 \\cdot 16 + 0.50 \\cdot 9 = 7.70$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "There are $9$ 0.50-euro coins.",
                "reason": "Answering the question asked: the question asks for the number of 0.50-euro coins, which is $y$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of 0.25-kg tins on a shelf that holds only 0.25-kg tins and 0.40-kg tins, 22 tins weighing 7.30 kg in all.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the number of 0.25-kg tins on a shelf that holds only 0.25-kg tins and 0.40-kg tins, 22 tins weighing 7.30 kg in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 0.25-kg tins and $y$ the number of 0.40-kg tins.",
                  "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts tins, never one of them and never an amount in kilograms."
                },
                {
                  "step": "$x + y = 22$",
                  "reason": "Writing a sentence as an equation: each of the 0.25-kg tins and of the 0.40-kg tins is one of the 22 tins, so the two counts add to $22$."
                },
                {
                  "step": "$0.25x + 0.40y = 7.30$",
                  "reason": "Writing a sentence as an equation: each of the 0.25-kg tins gives $0.25$ kilograms and each of the 0.40-kg tins gives $0.40$, and a count times the amount for one gives the amount for all."
                },
                {
                  "step": "$25x + 40y = 730$",
                  "reason": "Clearing decimals before solving: multiplying both sides by $100$ keeps the solutions and turns each decimal into a whole number."
                },
                {
                  "step": "$x = 22 - y$",
                  "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
                },
                {
                  "step": "$25(22 - y) + 40y = 730$",
                  "reason": "Substitution: $22 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$550 - 25y + 40y = 730$",
                  "reason": "Multiplying out: by the distributive law the $25$ in front multiplies each term in the bracket, $-y$ and the number."
                },
                {
                  "step": "$15y + 550 = 730$",
                  "reason": "Collecting like terms: $-25y$ and $40y$ add to $15y$."
                },
                {
                  "step": "$15y = 180$",
                  "reason": "Adding the same number to both sides: adding $-550$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $15$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 22 - 12 = 10$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in $x = 22 - y$."
                },
                {
                  "step": "With $10$ 0.25-kg tins and $12$ 0.40-kg tins, the tins number $10 + 12 = 22$ and the kilograms come to $0.25 \\cdot 10 + 0.40 \\cdot 12 = 7.30$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $10$ 0.25-kg tins.",
                  "reason": "Answering the question asked: the question asks for the number of 0.25-kg tins, which is $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of 0.20-euro coins in a jar that holds only 0.05-euro coins and 0.20-euro coins, 31 coins worth 3.35 euros in all.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the number of 0.20-euro coins in a jar that holds only 0.05-euro coins and 0.20-euro coins, 31 coins worth 3.35 euros in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 0.05-euro coins and $y$ the number of 0.20-euro coins.",
                  "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts coins, never one of them and never an amount in euros."
                },
                {
                  "step": "$x + y = 31$",
                  "reason": "Writing a sentence as an equation: each of the 0.05-euro coins and of the 0.20-euro coins is one of the 31 coins, so the two counts add to $31$."
                },
                {
                  "step": "$0.05x + 0.20y = 3.35$",
                  "reason": "Writing a sentence as an equation: each of the 0.05-euro coins gives $0.05$ euros and each of the 0.20-euro coins gives $0.20$, and a count times the amount for one gives the amount for all."
                },
                {
                  "step": "$5x + 20y = 335$",
                  "reason": "Clearing decimals before solving: multiplying both sides by $100$ keeps the solutions and turns each decimal into a whole number."
                },
                {
                  "step": "$x = 31 - y$",
                  "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
                },
                {
                  "step": "$5(31 - y) + 20y = 335$",
                  "reason": "Substitution: $31 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$155 - 5y + 20y = 335$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, $-y$ and the number."
                },
                {
                  "step": "$15y + 155 = 335$",
                  "reason": "Collecting like terms: $-5y$ and $20y$ add to $15y$."
                },
                {
                  "step": "$15y = 180$",
                  "reason": "Adding the same number to both sides: adding $-155$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $15$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 31 - 12 = 19$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in $x = 31 - y$."
                },
                {
                  "step": "With $19$ 0.05-euro coins and $12$ 0.20-euro coins, the coins number $19 + 12 = 31$ and the euros come to $0.05 \\cdot 19 + 0.20 \\cdot 12 = 3.35$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $12$ 0.20-euro coins.",
                  "reason": "Answering the question asked: the question asks for the number of 0.20-euro coins, which is $y$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of 1.50-euro tickets in a cash box that holds only 1.50-euro tickets and 2.25-euro tickets, 40 tickets sold for 72.00 euros in all.",
              "form": "Answer as an integer.",
              "answer": "24",
              "lines": [
                {
                  "step": "Find the number of 1.50-euro tickets in a cash box that holds only 1.50-euro tickets and 2.25-euro tickets, 40 tickets sold for 72.00 euros in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the number of 1.50-euro tickets and $y$ the number of 2.25-euro tickets.",
                  "reason": "One letter for each unknown: two counts are unknown, so each gets its own letter, and each letter counts tickets, never one of them and never an amount in euros."
                },
                {
                  "step": "$x + y = 40$",
                  "reason": "Writing a sentence as an equation: each of the 1.50-euro tickets and of the 2.25-euro tickets is one of the 40 tickets, so the two counts add to $40$."
                },
                {
                  "step": "$1.50x + 2.25y = 72.00$",
                  "reason": "Writing a sentence as an equation: each of the 1.50-euro tickets gives $1.50$ euros and each of the 2.25-euro tickets gives $2.25$, and a count times the amount for one gives the amount for all."
                },
                {
                  "step": "$150x + 225y = 7200$",
                  "reason": "Clearing decimals before solving: multiplying both sides by $100$ keeps the solutions and turns each decimal into a whole number."
                },
                {
                  "step": "$x = 40 - y$",
                  "reason": "Adding the same number to both sides: adding $-y$ to both sides keeps them equal and leaves $x$ alone in the first equation."
                },
                {
                  "step": "$150(40 - y) + 225y = 7200$",
                  "reason": "Substitution: $40 - y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$6000 - 150y + 225y = 7200$",
                  "reason": "Multiplying out: by the distributive law the $150$ in front multiplies each term in the bracket, $-y$ and the number."
                },
                {
                  "step": "$75y + 6000 = 7200$",
                  "reason": "Collecting like terms: $-150y$ and $225y$ add to $75y$."
                },
                {
                  "step": "$75y = 1200$",
                  "reason": "Adding the same number to both sides: adding $-6000$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 16$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $75$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 40 - 16 = 24$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in $x = 40 - y$."
                },
                {
                  "step": "With $24$ 1.50-euro tickets and $16$ 2.25-euro tickets, the tickets number $24 + 16 = 40$ and the euros come to $1.50 \\cdot 24 + 2.25 \\cdot 16 = 72.00$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "There are $24$ 1.50-euro tickets.",
                  "reason": "Answering the question asked: the question asks for the number of 1.50-euro tickets, which is $x$, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t115-k3",
      "forms": [
        {
          "example": {
            "problem": "Find Hal's age now, if Gina is 3 times as old as Hal, and 4 years ago Gina was 5 times as old as Hal.",
            "lines": [
              {
                "step": "Find Hal's age now, if Gina is 3 times as old as Hal, and 4 years ago Gina was 5 times as old as Hal.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Gina's age now and $y$ be Hal's age now, in years.",
                "reason": "One letter for each unknown: each letter stands for one age at one time, now; the ages 4 years ago are written in the letters, never given letters of their own."
              },
              {
                "step": "$x = 3y$",
                "reason": "Writing a sentence as an equation: Gina's age now is 3 times Hal's age now."
              },
              {
                "step": "$x - 4 = 5(y - 4)$",
                "reason": "Writing a sentence as an equation: 4 years ago each age was $4$ less, so the two ages then are $x - 4$ and $y - 4$."
              },
              {
                "step": "$3y - 4 = 5(y - 4)$",
                "reason": "Substitution: $3y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
              },
              {
                "step": "$3y - 4 = 5y - 20$",
                "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, $y$ and the number."
              },
              {
                "step": "$-2y - 4 = -20$",
                "reason": "Adding the same number to both sides: adding $-5y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
              },
              {
                "step": "$-2y = -16$",
                "reason": "Adding the same number to both sides: adding $4$ to both sides keeps them equal and leaves the term in $y$ alone."
              },
              {
                "step": "$y = 8$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = 3(8) = 24$",
                "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 3y$."
              },
              {
                "step": "With Gina $24$ and Hal $8$ now, $24 = 3 \\cdot 8$, and 4 years ago they were $20$ and $4$, with $20 = 5 \\cdot 4$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "Hal is $8$ years old now.",
                "reason": "Answering the question asked: the question asks for Hal's age now, which is $y$, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find Ivan's age now, if Ivan is 2 times as old as Jade, and 12 years ago Ivan was 5 times as old as Jade.",
              "form": "Answer as an integer.",
              "answer": "32",
              "lines": [
                {
                  "step": "Find Ivan's age now, if Ivan is 2 times as old as Jade, and 12 years ago Ivan was 5 times as old as Jade.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Ivan's age now and $y$ be Jade's age now, in years.",
                  "reason": "One letter for each unknown: each letter stands for one age at one time, now; the ages 12 years ago are written in the letters, never given letters of their own."
                },
                {
                  "step": "$x = 2y$",
                  "reason": "Writing a sentence as an equation: Ivan's age now is 2 times Jade's age now."
                },
                {
                  "step": "$x - 12 = 5(y - 12)$",
                  "reason": "Writing a sentence as an equation: 12 years ago each age was $12$ less, so the two ages then are $x - 12$ and $y - 12$."
                },
                {
                  "step": "$2y - 12 = 5(y - 12)$",
                  "reason": "Substitution: $2y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$2y - 12 = 5y - 60$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, $y$ and the number."
                },
                {
                  "step": "$-3y - 12 = -60$",
                  "reason": "Adding the same number to both sides: adding $-5y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-3y = -48$",
                  "reason": "Adding the same number to both sides: adding $12$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 16$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 2(16) = 32$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 2y$."
                },
                {
                  "step": "With Ivan $32$ and Jade $16$ now, $32 = 2 \\cdot 16$, and 12 years ago they were $20$ and $4$, with $20 = 5 \\cdot 4$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Ivan is $32$ years old now.",
                  "reason": "Answering the question asked: the question asks for Ivan's age now, which is $x$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Lena's age now, if Kurt is 4 times as old as Lena, and 3 years ago Kurt was 7 times as old as Lena.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find Lena's age now, if Kurt is 4 times as old as Lena, and 3 years ago Kurt was 7 times as old as Lena.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Kurt's age now and $y$ be Lena's age now, in years.",
                  "reason": "One letter for each unknown: each letter stands for one age at one time, now; the ages 3 years ago are written in the letters, never given letters of their own."
                },
                {
                  "step": "$x = 4y$",
                  "reason": "Writing a sentence as an equation: Kurt's age now is 4 times Lena's age now."
                },
                {
                  "step": "$x - 3 = 7(y - 3)$",
                  "reason": "Writing a sentence as an equation: 3 years ago each age was $3$ less, so the two ages then are $x - 3$ and $y - 3$."
                },
                {
                  "step": "$4y - 3 = 7(y - 3)$",
                  "reason": "Substitution: $4y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$4y - 3 = 7y - 21$",
                  "reason": "Multiplying out: by the distributive law the $7$ in front multiplies each term in the bracket, $y$ and the number."
                },
                {
                  "step": "$-3y - 3 = -21$",
                  "reason": "Adding the same number to both sides: adding $-7y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-3y = -18$",
                  "reason": "Adding the same number to both sides: adding $3$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 4(6) = 24$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 4y$."
                },
                {
                  "step": "With Kurt $24$ and Lena $6$ now, $24 = 4 \\cdot 6$, and 3 years ago they were $21$ and $3$, with $21 = 7 \\cdot 3$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Lena is $6$ years old now.",
                  "reason": "Answering the question asked: the question asks for Lena's age now, which is $y$, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find Mia's age now, if Mia is 4 times as old as Ned, and 4 years ago Mia was 6 times as old as Ned.",
              "form": "Answer as an integer.",
              "answer": "40",
              "lines": [
                {
                  "step": "Find Mia's age now, if Mia is 4 times as old as Ned, and 4 years ago Mia was 6 times as old as Ned.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Mia's age now and $y$ be Ned's age now, in years.",
                  "reason": "One letter for each unknown: each letter stands for one age at one time, now; the ages 4 years ago are written in the letters, never given letters of their own."
                },
                {
                  "step": "$x = 4y$",
                  "reason": "Writing a sentence as an equation: Mia's age now is 4 times Ned's age now."
                },
                {
                  "step": "$x - 4 = 6(y - 4)$",
                  "reason": "Writing a sentence as an equation: 4 years ago each age was $4$ less, so the two ages then are $x - 4$ and $y - 4$."
                },
                {
                  "step": "$4y - 4 = 6(y - 4)$",
                  "reason": "Substitution: $4y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$4y - 4 = 6y - 24$",
                  "reason": "Multiplying out: by the distributive law the $6$ in front multiplies each term in the bracket, $y$ and the number."
                },
                {
                  "step": "$-2y - 4 = -24$",
                  "reason": "Adding the same number to both sides: adding $-6y$ to both sides keeps them equal and leaves the terms in $y$ on the left only."
                },
                {
                  "step": "$-2y = -20$",
                  "reason": "Adding the same number to both sides: adding $4$ to both sides keeps them equal and leaves the term in $y$ alone."
                },
                {
                  "step": "$y = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 4(10) = 40$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 4y$."
                },
                {
                  "step": "With Mia $40$ and Ned $10$ now, $40 = 4 \\cdot 10$, and 4 years ago they were $36$ and $6$, with $36 = 6 \\cdot 6$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "Mia is $40$ years old now.",
                  "reason": "Answering the question asked: the question asks for Mia's age now, which is $x$, so the last line states that quantity."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of years until Elif is 3 times as old as Fynn, if Elif is 5 times as old as Fynn now, and their two ages now add to 36.",
            "lines": [
              {
                "step": "Find the number of years until Elif is 3 times as old as Fynn, if Elif is 5 times as old as Fynn now, and their two ages now add to 36.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be Elif's age now and $y$ be Fynn's age now, in years.",
                "reason": "One letter for each unknown: each letter stands for one age now, the two unknowns the first two sentences fix."
              },
              {
                "step": "$x = 5y$",
                "reason": "Writing a sentence as an equation: Elif's age now is 5 times Fynn's age now."
              },
              {
                "step": "$x + y = 36$",
                "reason": "Writing a sentence as an equation: the two ages now add to the total given."
              },
              {
                "step": "$5y + y = 36$",
                "reason": "Substitution: $5y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
              },
              {
                "step": "$6y = 36$",
                "reason": "Collecting like terms: $5y$ and $y$ add to $6y$."
              },
              {
                "step": "$y = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x = 5(6) = 30$",
                "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 5y$."
              },
              {
                "step": "Let $z$ be the number of years until Elif is 3 times as old as Fynn.",
                "reason": "One letter for each unknown: the second question asks for a quantity neither $x$ nor $y$ stands for, so it gets a new letter of its own."
              },
              {
                "step": "$30 + z = 3(6 + z)$",
                "reason": "Writing a sentence as an equation: in $z$ years each age grows by $z$, to $30 + z$ and $6 + z$."
              },
              {
                "step": "$30 + z = 18 + 3z$",
                "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, $z$ and the number."
              },
              {
                "step": "$-2z + 30 = 18$",
                "reason": "Adding the same number to both sides: adding $-3z$ to both sides keeps them equal and leaves the terms in $z$ on the left only."
              },
              {
                "step": "$-2z = -12$",
                "reason": "Adding the same number to both sides: adding $-30$ to both sides keeps them equal and leaves the term in $z$ alone."
              },
              {
                "step": "$z = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $z$ alone."
              },
              {
                "step": "With $30$ and $6$ now, the ages add to $36$ and $30 = 5 \\cdot 6$, and in $6$ years they are $36$ and $12$, with $36 = 3 \\cdot 12$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "In $6$ years Elif will be 3 times as old as Fynn.",
                "reason": "Answering the question asked: the question asks for the number of years, which is $z$, not either age, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of years until Gil is 4 times as old as Hedy, if Gil is 9 times as old as Hedy now, and their two ages now add to 60.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the number of years until Gil is 4 times as old as Hedy, if Gil is 9 times as old as Hedy now, and their two ages now add to 60.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Gil's age now and $y$ be Hedy's age now, in years.",
                  "reason": "One letter for each unknown: each letter stands for one age now, the two unknowns the first two sentences fix."
                },
                {
                  "step": "$x = 9y$",
                  "reason": "Writing a sentence as an equation: Gil's age now is 9 times Hedy's age now."
                },
                {
                  "step": "$x + y = 60$",
                  "reason": "Writing a sentence as an equation: the two ages now add to the total given."
                },
                {
                  "step": "$9y + y = 60$",
                  "reason": "Substitution: $9y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$10y = 60$",
                  "reason": "Collecting like terms: $9y$ and $y$ add to $10y$."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 9(6) = 54$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 9y$."
                },
                {
                  "step": "Let $z$ be the number of years until Gil is 4 times as old as Hedy.",
                  "reason": "One letter for each unknown: the second question asks for a quantity neither $x$ nor $y$ stands for, so it gets a new letter of its own."
                },
                {
                  "step": "$54 + z = 4(6 + z)$",
                  "reason": "Writing a sentence as an equation: in $z$ years each age grows by $z$, to $54 + z$ and $6 + z$."
                },
                {
                  "step": "$54 + z = 24 + 4z$",
                  "reason": "Multiplying out: by the distributive law the $4$ in front multiplies each term in the bracket, $z$ and the number."
                },
                {
                  "step": "$-3z + 54 = 24$",
                  "reason": "Adding the same number to both sides: adding $-4z$ to both sides keeps them equal and leaves the terms in $z$ on the left only."
                },
                {
                  "step": "$-3z = -30$",
                  "reason": "Adding the same number to both sides: adding $-54$ to both sides keeps them equal and leaves the term in $z$ alone."
                },
                {
                  "step": "$z = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ keeps them equal and leaves $z$ alone."
                },
                {
                  "step": "With $54$ and $6$ now, the ages add to $60$ and $54 = 9 \\cdot 6$, and in $10$ years they are $64$ and $16$, with $64 = 4 \\cdot 16$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "In $10$ years Gil will be 4 times as old as Hedy.",
                  "reason": "Answering the question asked: the question asks for the number of years, which is $z$, not either age, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of years until Igor is 3 times as old as Juno, if Igor is 7 times as old as Juno now, and their two ages now add to 48.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the number of years until Igor is 3 times as old as Juno, if Igor is 7 times as old as Juno now, and their two ages now add to 48.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Igor's age now and $y$ be Juno's age now, in years.",
                  "reason": "One letter for each unknown: each letter stands for one age now, the two unknowns the first two sentences fix."
                },
                {
                  "step": "$x = 7y$",
                  "reason": "Writing a sentence as an equation: Igor's age now is 7 times Juno's age now."
                },
                {
                  "step": "$x + y = 48$",
                  "reason": "Writing a sentence as an equation: the two ages now add to the total given."
                },
                {
                  "step": "$7y + y = 48$",
                  "reason": "Substitution: $7y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$8y = 48$",
                  "reason": "Collecting like terms: $7y$ and $y$ add to $8y$."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 7(6) = 42$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 7y$."
                },
                {
                  "step": "Let $z$ be the number of years until Igor is 3 times as old as Juno.",
                  "reason": "One letter for each unknown: the second question asks for a quantity neither $x$ nor $y$ stands for, so it gets a new letter of its own."
                },
                {
                  "step": "$42 + z = 3(6 + z)$",
                  "reason": "Writing a sentence as an equation: in $z$ years each age grows by $z$, to $42 + z$ and $6 + z$."
                },
                {
                  "step": "$42 + z = 18 + 3z$",
                  "reason": "Multiplying out: by the distributive law the $3$ in front multiplies each term in the bracket, $z$ and the number."
                },
                {
                  "step": "$-2z + 42 = 18$",
                  "reason": "Adding the same number to both sides: adding $-3z$ to both sides keeps them equal and leaves the terms in $z$ on the left only."
                },
                {
                  "step": "$-2z = -24$",
                  "reason": "Adding the same number to both sides: adding $-42$ to both sides keeps them equal and leaves the term in $z$ alone."
                },
                {
                  "step": "$z = 12$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ keeps them equal and leaves $z$ alone."
                },
                {
                  "step": "With $42$ and $6$ now, the ages add to $48$ and $42 = 7 \\cdot 6$, and in $12$ years they are $54$ and $18$, with $54 = 3 \\cdot 18$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "In $12$ years Igor will be 3 times as old as Juno.",
                  "reason": "Answering the question asked: the question asks for the number of years, which is $z$, not either age, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find the number of years until Kira is 5 times as old as Lars, if Kira is 7 times as old as Lars now, and their two ages now add to 64.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the number of years until Kira is 5 times as old as Lars, if Kira is 7 times as old as Lars now, and their two ages now add to 64.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be Kira's age now and $y$ be Lars's age now, in years.",
                  "reason": "One letter for each unknown: each letter stands for one age now, the two unknowns the first two sentences fix."
                },
                {
                  "step": "$x = 7y$",
                  "reason": "Writing a sentence as an equation: Kira's age now is 7 times Lars's age now."
                },
                {
                  "step": "$x + y = 64$",
                  "reason": "Writing a sentence as an equation: the two ages now add to the total given."
                },
                {
                  "step": "$7y + y = 64$",
                  "reason": "Substitution: $7y$ goes, in brackets where it has more than one term, in place of $x$ in the other equation, which leaves one letter."
                },
                {
                  "step": "$8y = 64$",
                  "reason": "Collecting like terms: $7y$ and $y$ add to $8y$."
                },
                {
                  "step": "$y = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x = 7(8) = 56$",
                  "reason": "Back-substitution: the value found goes in place of $y$, in brackets, in $x = 7y$."
                },
                {
                  "step": "Let $z$ be the number of years until Kira is 5 times as old as Lars.",
                  "reason": "One letter for each unknown: the second question asks for a quantity neither $x$ nor $y$ stands for, so it gets a new letter of its own."
                },
                {
                  "step": "$56 + z = 5(8 + z)$",
                  "reason": "Writing a sentence as an equation: in $z$ years each age grows by $z$, to $56 + z$ and $8 + z$."
                },
                {
                  "step": "$56 + z = 40 + 5z$",
                  "reason": "Multiplying out: by the distributive law the $5$ in front multiplies each term in the bracket, $z$ and the number."
                },
                {
                  "step": "$-4z + 56 = 40$",
                  "reason": "Adding the same number to both sides: adding $-5z$ to both sides keeps them equal and leaves the terms in $z$ on the left only."
                },
                {
                  "step": "$-4z = -16$",
                  "reason": "Adding the same number to both sides: adding $-56$ to both sides keeps them equal and leaves the term in $z$ alone."
                },
                {
                  "step": "$z = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ keeps them equal and leaves $z$ alone."
                },
                {
                  "step": "With $56$ and $8$ now, the ages add to $64$ and $56 = 7 \\cdot 8$, and in $4$ years they are $60$ and $12$, with $60 = 5 \\cdot 12$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "In $4$ years Kira will be 5 times as old as Lars.",
                  "reason": "Answering the question asked: the question asks for the number of years, which is $z$, not either age, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t115-k4",
      "forms": [
        {
          "example": {
            "problem": "Find a two-digit number whose digits add to 9, where reversing its digits gives a number 27 more than the number.",
            "lines": [
              {
                "step": "Find a two-digit number whose digits add to 9, where reversing its digits gives a number 27 more than the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the tens digit and $y$ the units digit; the number is $10x + y$.",
                "reason": "One letter for each unknown: the two digits are the unknowns, each with its own letter, and the number is written in them, since the tens digit counts ten times its value."
              },
              {
                "step": "$x + y = 9$",
                "reason": "Writing a sentence as an equation: the two digits add to the total given."
              },
              {
                "step": "$(10y + x) - (10x + y) = 27$",
                "reason": "Writing a sentence as an equation: reversing the digits puts $y$ in the tens place, giving $10y + x$, and \"27 more\" makes the reversed number less the number equal to $27$."
              },
              {
                "step": "$10y + x - 10x - y = 27$",
                "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $10x$ and $y$ change sign."
              },
              {
                "step": "$9y - 9x = 27$",
                "reason": "Collecting like terms: $10y$ and $-y$ add to $9y$, and $x$ and $-10x$ add to $-9x$."
              },
              {
                "step": "$y - x = 3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ keeps them equal and leaves $y - x$ alone."
              },
              {
                "step": "$2y = 12$",
                "reason": "Adding two equations: $x + y$ and $y - x$ add to $2y$, and $x$ and $-x$ cancel."
              },
              {
                "step": "$y = 6$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
              },
              {
                "step": "$x + 6 = 9$",
                "reason": "Back-substitution: the value found goes in place of $y$ in the first equation."
              },
              {
                "step": "$x = 3$",
                "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves $x$ alone."
              },
              {
                "step": "$10(3) + 6 = 36$",
                "reason": "Substituting a value: each digit goes, in brackets, in place of its letter in $10x + y$."
              },
              {
                "step": "The digits of $36$ add to $3 + 6 = 9$, and reversed it is $63$, with $63 - 36 = 27$.",
                "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
              },
              {
                "step": "The number is $36$.",
                "reason": "Answering the question asked: the question asks for the number, which is $10x + y$, not either digit, so the last line states that quantity."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a two-digit number whose digits add to 11, where reversing its digits gives a number 9 more than the number.",
              "form": "Answer as an integer.",
              "answer": "56",
              "lines": [
                {
                  "step": "Find a two-digit number whose digits add to 11, where reversing its digits gives a number 9 more than the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the tens digit and $y$ the units digit; the number is $10x + y$.",
                  "reason": "One letter for each unknown: the two digits are the unknowns, each with its own letter, and the number is written in them, since the tens digit counts ten times its value."
                },
                {
                  "step": "$x + y = 11$",
                  "reason": "Writing a sentence as an equation: the two digits add to the total given."
                },
                {
                  "step": "$(10y + x) - (10x + y) = 9$",
                  "reason": "Writing a sentence as an equation: reversing the digits puts $y$ in the tens place, giving $10y + x$, and \"9 more\" makes the reversed number less the number equal to $9$."
                },
                {
                  "step": "$10y + x - 10x - y = 9$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $10x$ and $y$ change sign."
                },
                {
                  "step": "$9y - 9x = 9$",
                  "reason": "Collecting like terms: $10y$ and $-y$ add to $9y$, and $x$ and $-10x$ add to $-9x$."
                },
                {
                  "step": "$y - x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ keeps them equal and leaves $y - x$ alone."
                },
                {
                  "step": "$2y = 12$",
                  "reason": "Adding two equations: $x + y$ and $y - x$ add to $2y$, and $x$ and $-x$ cancel."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x + 6 = 11$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in the first equation."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$10(5) + 6 = 56$",
                  "reason": "Substituting a value: each digit goes, in brackets, in place of its letter in $10x + y$."
                },
                {
                  "step": "The digits of $56$ add to $5 + 6 = 11$, and reversed it is $65$, with $65 - 56 = 9$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The number is $56$.",
                  "reason": "Answering the question asked: the question asks for the number, which is $10x + y$, not either digit, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find a two-digit number whose digits add to 13, where reversing its digits gives a number 9 less than the number.",
              "form": "Answer as an integer.",
              "answer": "76",
              "lines": [
                {
                  "step": "Find a two-digit number whose digits add to 13, where reversing its digits gives a number 9 less than the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the tens digit and $y$ the units digit; the number is $10x + y$.",
                  "reason": "One letter for each unknown: the two digits are the unknowns, each with its own letter, and the number is written in them, since the tens digit counts ten times its value."
                },
                {
                  "step": "$x + y = 13$",
                  "reason": "Writing a sentence as an equation: the two digits add to the total given."
                },
                {
                  "step": "$(10y + x) - (10x + y) = -9$",
                  "reason": "Writing a sentence as an equation: reversing the digits puts $y$ in the tens place, giving $10y + x$, and \"9 less\" makes the reversed number less the number equal to $-9$."
                },
                {
                  "step": "$10y + x - 10x - y = -9$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $10x$ and $y$ change sign."
                },
                {
                  "step": "$9y - 9x = -9$",
                  "reason": "Collecting like terms: $10y$ and $-y$ add to $9y$, and $x$ and $-10x$ add to $-9x$."
                },
                {
                  "step": "$y - x = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ keeps them equal and leaves $y - x$ alone."
                },
                {
                  "step": "$2y = 12$",
                  "reason": "Adding two equations: $x + y$ and $y - x$ add to $2y$, and $x$ and $-x$ cancel."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x + 6 = 13$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in the first equation."
                },
                {
                  "step": "$x = 7$",
                  "reason": "Adding the same number to both sides: adding $-6$ to both sides keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$10(7) + 6 = 76$",
                  "reason": "Substituting a value: each digit goes, in brackets, in place of its letter in $10x + y$."
                },
                {
                  "step": "The digits of $76$ add to $7 + 6 = 13$, and reversed it is $67$, with $67 - 76 = -9$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The number is $76$.",
                  "reason": "Answering the question asked: the question asks for the number, which is $10x + y$, not either digit, so the last line states that quantity."
                }
              ]
            },
            {
              "prompt": "Find a two-digit number whose digits add to 15, where reversing its digits gives a number 9 more than the number.",
              "form": "Answer as an integer.",
              "answer": "78",
              "lines": [
                {
                  "step": "Find a two-digit number whose digits add to 15, where reversing its digits gives a number 9 more than the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the tens digit and $y$ the units digit; the number is $10x + y$.",
                  "reason": "One letter for each unknown: the two digits are the unknowns, each with its own letter, and the number is written in them, since the tens digit counts ten times its value."
                },
                {
                  "step": "$x + y = 15$",
                  "reason": "Writing a sentence as an equation: the two digits add to the total given."
                },
                {
                  "step": "$(10y + x) - (10x + y) = 9$",
                  "reason": "Writing a sentence as an equation: reversing the digits puts $y$ in the tens place, giving $10y + x$, and \"9 more\" makes the reversed number less the number equal to $9$."
                },
                {
                  "step": "$10y + x - 10x - y = 9$",
                  "reason": "Subtracting a bracket changes every sign in it: the bracket after the minus sign goes, and $10x$ and $y$ change sign."
                },
                {
                  "step": "$9y - 9x = 9$",
                  "reason": "Collecting like terms: $10y$ and $-y$ add to $9y$, and $x$ and $-10x$ add to $-9x$."
                },
                {
                  "step": "$y - x = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $9$ keeps them equal and leaves $y - x$ alone."
                },
                {
                  "step": "$2y = 16$",
                  "reason": "Adding two equations: $x + y$ and $y - x$ add to $2y$, and $x$ and $-x$ cancel."
                },
                {
                  "step": "$y = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ keeps them equal and leaves $y$ alone."
                },
                {
                  "step": "$x + 8 = 15$",
                  "reason": "Back-substitution: the value found goes in place of $y$ in the first equation."
                },
                {
                  "step": "$x = 7$",
                  "reason": "Adding the same number to both sides: adding $-8$ to both sides keeps them equal and leaves $x$ alone."
                },
                {
                  "step": "$10(7) + 8 = 78$",
                  "reason": "Substituting a value: each digit goes, in brackets, in place of its letter in $10x + y$."
                },
                {
                  "step": "The digits of $78$ add to $7 + 8 = 15$, and reversed it is $87$, with $87 - 78 = 9$.",
                  "reason": "Checking against the words: the values go back into the sentences of the problem, not into the equations, so an equation written wrong is caught as well as a slip in solving."
                },
                {
                  "step": "The number is $78$.",
                  "reason": "Answering the question asked: the question asks for the number, which is $10x + y$, not either digit, so the last line states that quantity."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t115-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the cost of one mug and one bowl together, in euros, if 2 mugs and 3 bowls cost 46 euros, and 3 mugs and 2 bowls cost 44 euros.",
            "lines": [
              {
                "step": "Find the cost of one mug and one bowl together, in euros, if 2 mugs and 3 bowls cost 46 euros, and 3 mugs and 2 bowls cost 44 euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the cost of one mug and $y$ the cost of one bowl, in euros.",
                "reason": "One letter for each unknown: the cost of one mug and the cost of one bowl are the two unknowns, each with its own letter."
              },
              {
                "step": "$2x + 3y = 46$",
                "reason": "Writing a sentence as an equation: a count times the cost of one gives the cost of all of them, and the two costs add."
              },
              {
                "step": "$3x + 2y = 44$",
                "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
              },
              {
                "step": "$5x + 5y = 90$",
                "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $5$."
              },
              {
                "step": "$x + y = 18$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ keeps them equal and leaves $x + y$ alone."
              },
              {
                "step": "One mug and one bowl together cost $18$ euros.",
                "reason": "Finding only what is asked: the question asks for $x + y$, the cost of one of each, so neither $x$ nor $y$ is worked out alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the cost of one pen and one notebook together, in euros, if 1 pen and 3 notebooks cost 24 euros, and 3 pens and 1 notebook cost 16 euros.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the cost of one pen and one notebook together, in euros, if 1 pen and 3 notebooks cost 24 euros, and 3 pens and 1 notebook cost 16 euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the cost of one pen and $y$ the cost of one notebook, in euros.",
                  "reason": "One letter for each unknown: the cost of one pen and the cost of one notebook are the two unknowns, each with its own letter."
                },
                {
                  "step": "$x + 3y = 24$",
                  "reason": "Writing a sentence as an equation: a count times the cost of one gives the cost of all of them, and the two costs add."
                },
                {
                  "step": "$3x + y = 16$",
                  "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
                },
                {
                  "step": "$4x + 4y = 40$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $4$."
                },
                {
                  "step": "$x + y = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x + y$ alone."
                },
                {
                  "step": "One pen and one notebook together cost $10$ euros.",
                  "reason": "Finding only what is asked: the question asks for $x + y$, the cost of one of each, so neither $x$ nor $y$ is worked out alone."
                }
              ]
            },
            {
              "prompt": "Find the weight of one apple and one pear together, in grams, if 4 apples and 1 pear weigh 780 grams, and 2 apples and 5 pears weigh 1200 grams.",
              "form": "Answer as an integer.",
              "answer": "330",
              "lines": [
                {
                  "step": "Find the weight of one apple and one pear together, in grams, if 4 apples and 1 pear weigh 780 grams, and 2 apples and 5 pears weigh 1200 grams.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the weight of one apple and $y$ the weight of one pear, in grams.",
                  "reason": "One letter for each unknown: the weight of one apple and the weight of one pear are the two unknowns, each with its own letter."
                },
                {
                  "step": "$4x + y = 780$",
                  "reason": "Writing a sentence as an equation: a count times the weight of one gives the weight of all of them, and the two weights add."
                },
                {
                  "step": "$2x + 5y = 1200$",
                  "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
                },
                {
                  "step": "$6x + 6y = 1980$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $6$."
                },
                {
                  "step": "$x + y = 330$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ keeps them equal and leaves $x + y$ alone."
                },
                {
                  "step": "One apple and one pear together weigh $330$ grams.",
                  "reason": "Finding only what is asked: the question asks for $x + y$, the weight of one of each, so neither $x$ nor $y$ is worked out alone."
                }
              ]
            },
            {
              "prompt": "Find the weight of one bag of rice and one bag of flour together, in kg, if 3 bags of rice and 5 bags of flour weigh 11 kg, and 5 bags of rice and 3 bags of flour weigh 13 kg.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the weight of one bag of rice and one bag of flour together, in kg, if 3 bags of rice and 5 bags of flour weigh 11 kg, and 5 bags of rice and 3 bags of flour weigh 13 kg.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the weight of one bag of rice and $y$ the weight of one bag of flour, in kg.",
                  "reason": "One letter for each unknown: the weight of one bag of rice and the weight of one bag of flour are the two unknowns, each with its own letter."
                },
                {
                  "step": "$3x + 5y = 11$",
                  "reason": "Writing a sentence as an equation: a count times the weight of one gives the weight of all of them, and the two weights add."
                },
                {
                  "step": "$5x + 3y = 13$",
                  "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
                },
                {
                  "step": "$8x + 8y = 24$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $8$."
                },
                {
                  "step": "$x + y = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ keeps them equal and leaves $x + y$ alone."
                },
                {
                  "step": "One bag of rice and one bag of flour together weigh $3$ kg.",
                  "reason": "Finding only what is asked: the question asks for $x + y$, the weight of one of each, so neither $x$ nor $y$ is worked out alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the cost of 2 mugs and 2 bowls together, in euros, if 3 mugs and 1 bowl cost 16 euros, and 1 mug and 3 bowls cost 14 euros.",
            "lines": [
              {
                "step": "Find the cost of 2 mugs and 2 bowls together, in euros, if 3 mugs and 1 bowl cost 16 euros, and 1 mug and 3 bowls cost 14 euros.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x$ be the cost of one mug and $y$ the cost of one bowl, in euros.",
                "reason": "One letter for each unknown: the cost of one mug and the cost of one bowl are the two unknowns, each with its own letter."
              },
              {
                "step": "$3x + y = 16$",
                "reason": "Writing a sentence as an equation: a count times the cost of one gives the cost of all of them, and the two costs add."
              },
              {
                "step": "$x + 3y = 14$",
                "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
              },
              {
                "step": "$4x + 4y = 30$",
                "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $4$."
              },
              {
                "step": "$x + y = \\dfrac{15}{2}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ keeps them equal and leaves $x + y$ alone."
              },
              {
                "step": "$2x + 2y = 15$",
                "reason": "Multiplying both sides by the same number: multiplying both sides by $2$ keeps them equal and gives the cost of 2 of each."
              },
              {
                "step": "Together, 2 mugs and 2 bowls cost $15$ euros.",
                "reason": "Finding only what is asked: the question asks for $2x + 2y$, the cost of 2 of each, so neither $x$ nor $y$ is worked out alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the cost of 4 pens and 4 notebooks together, in euros, if 2 pens and 3 notebooks cost 17 euros, and 4 pens and 3 notebooks cost 28 euros.",
              "form": "Answer as an integer.",
              "answer": "30",
              "lines": [
                {
                  "step": "Find the cost of 4 pens and 4 notebooks together, in euros, if 2 pens and 3 notebooks cost 17 euros, and 4 pens and 3 notebooks cost 28 euros.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the cost of one pen and $y$ the cost of one notebook, in euros.",
                  "reason": "One letter for each unknown: the cost of one pen and the cost of one notebook are the two unknowns, each with its own letter."
                },
                {
                  "step": "$2x + 3y = 17$",
                  "reason": "Writing a sentence as an equation: a count times the cost of one gives the cost of all of them, and the two costs add."
                },
                {
                  "step": "$4x + 3y = 28$",
                  "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
                },
                {
                  "step": "$6x + 6y = 45$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $6$."
                },
                {
                  "step": "$x + y = \\dfrac{15}{2}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ keeps them equal and leaves $x + y$ alone."
                },
                {
                  "step": "$4x + 4y = 30$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $4$ keeps them equal and gives the cost of 4 of each."
                },
                {
                  "step": "Together, 4 pens and 4 notebooks cost $30$ euros.",
                  "reason": "Finding only what is asked: the question asks for $4x + 4y$, the cost of 4 of each, so neither $x$ nor $y$ is worked out alone."
                }
              ]
            },
            {
              "prompt": "Find the weight of 3 apples and 3 pears together, in grams, if 5 apples and 3 pears weigh 1100 grams, and 1 apple and 3 pears weigh 700 grams.",
              "form": "Answer as an integer.",
              "answer": "900",
              "lines": [
                {
                  "step": "Find the weight of 3 apples and 3 pears together, in grams, if 5 apples and 3 pears weigh 1100 grams, and 1 apple and 3 pears weigh 700 grams.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the weight of one apple and $y$ the weight of one pear, in grams.",
                  "reason": "One letter for each unknown: the weight of one apple and the weight of one pear are the two unknowns, each with its own letter."
                },
                {
                  "step": "$5x + 3y = 1100$",
                  "reason": "Writing a sentence as an equation: a count times the weight of one gives the weight of all of them, and the two weights add."
                },
                {
                  "step": "$x + 3y = 700$",
                  "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
                },
                {
                  "step": "$6x + 6y = 1800$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $6$."
                },
                {
                  "step": "$x + y = 300$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ keeps them equal and leaves $x + y$ alone."
                },
                {
                  "step": "$3x + 3y = 900$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $3$ keeps them equal and gives the weight of 3 of each."
                },
                {
                  "step": "Together, 3 apples and 3 pears weigh $900$ grams.",
                  "reason": "Finding only what is asked: the question asks for $3x + 3y$, the weight of 3 of each, so neither $x$ nor $y$ is worked out alone."
                }
              ]
            },
            {
              "prompt": "Find the weight of 5 bags of rice and 5 bags of flour together, in kg, if 2 bags of rice and 5 bags of flour weigh 23 kg, and 5 bags of rice and 2 bags of flour weigh 26 kg.",
              "form": "Answer as an integer.",
              "answer": "35",
              "lines": [
                {
                  "step": "Find the weight of 5 bags of rice and 5 bags of flour together, in kg, if 2 bags of rice and 5 bags of flour weigh 23 kg, and 5 bags of rice and 2 bags of flour weigh 26 kg.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x$ be the weight of one bag of rice and $y$ the weight of one bag of flour, in kg.",
                  "reason": "One letter for each unknown: the weight of one bag of rice and the weight of one bag of flour are the two unknowns, each with its own letter."
                },
                {
                  "step": "$2x + 5y = 23$",
                  "reason": "Writing a sentence as an equation: a count times the weight of one gives the weight of all of them, and the two weights add."
                },
                {
                  "step": "$5x + 2y = 26$",
                  "reason": "Writing a sentence as an equation: the second sentence gives its own equation in the same two letters."
                },
                {
                  "step": "$7x + 7y = 49$",
                  "reason": "Adding two equations: the left sides and the right sides are added, which keeps the equation true, and the coefficients of $x$ and $y$ both come to $7$."
                },
                {
                  "step": "$x + y = 7$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ keeps them equal and leaves $x + y$ alone."
                },
                {
                  "step": "$5x + 5y = 35$",
                  "reason": "Multiplying both sides by the same number: multiplying both sides by $5$ keeps them equal and gives the weight of 5 of each."
                },
                {
                  "step": "Together, 5 bags of rice and 5 bags of flour weigh $35$ kg.",
                  "reason": "Finding only what is asked: the question asks for $5x + 5y$, the weight of 5 of each, so neither $x$ nor $y$ is worked out alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t115-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, and write that line right. Find Bert's age now, if Alba is 2 times as old as Bert, and 10 years ago Alba was 4 times as old as Bert.",
            "given": [
              "Let $x$ be Alba's age now and $y$ be Bert's age now, in years.",
              "$x = 2y$",
              "$x - 10 = 4y$",
              "$2y - 10 = 4y$",
              "$-2y = 10$",
              "$y = -5$"
            ],
            "lines": [
              {
                "step": "The working is for this problem: Find Bert's age now, if Alba is 2 times as old as Bert, and 10 years ago Alba was 4 times as old as Bert.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes $4y$ for 4 times Bert's age 10 years ago, which reads the letter as Bert's age now, in a place where Bert's age 10 years ago belongs.",
                "reason": "A letter is read as an object: the first line gives each letter one meaning, an age now or a count, and every other quantity is written in the letters from that meaning."
              },
              {
                "step": "Line 3 written right is $x - 10 = 4(y - 10)$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ and $y$ as the first line defines them."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find Dora's age now, if the ages of Cato and Dora now add to 50, and 5 years ago Cato was 4 times as old as Dora.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x+y = 50",
              "lines": [
                {
                  "step": "The working is for this problem: Find Dora's age now, if the ages of Cato and Dora now add to 50, and 5 years ago Cato was 4 times as old as Dora.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $(x - 5) + (y - 5)$ for the sum of the ages now, which reads the letter as an age 5 years ago, in a place where the ages now belong.",
                  "reason": "A letter is read as an object: the first line gives each letter one meaning, an age now or a count, and every other quantity is written in the letters from that meaning."
                },
                {
                  "step": "Line 2 written right is $x + y = 50$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ and $y$ as the first line defines them."
                }
              ],
              "given": [
                "Let $x$ be Cato's age now and $y$ be Dora's age now, in years.",
                "$(x - 5) + (y - 5) = 50$",
                "$x - 5 = 4(y - 5)$",
                "$4(y - 5) + (y - 5) = 50$",
                "$5(y - 5) = 50$",
                "$y - 5 = 10$",
                "$y = 15$"
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find the number of 10-cent coins in a purse that holds only 5-cent and 10-cent coins, 23 coins worth 165 cents in all.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5*x+10*y = 165",
              "lines": [
                {
                  "step": "The working is for this problem: Find the number of 10-cent coins in a purse that holds only 5-cent and 10-cent coins, 23 coins worth 165 cents in all.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $x$ for the amount the 5-cent coins make, which reads the letter as an amount in cents, though $x$ counts coins.",
                  "reason": "A letter is read as an object: the first line gives each letter one meaning, an age now or a count, and every other quantity is written in the letters from that meaning."
                },
                {
                  "step": "Line 3 written right is $5x + 10y = 165$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ and $y$ as the first line defines them."
                }
              ],
              "given": [
                "Let $x$ be the number of 5-cent coins and $y$ the number of 10-cent coins.",
                "$x + y = 23$",
                "$x + 10y = 165$",
                "$23 - y + 10y = 165$",
                "$9y = 142$",
                "$y = \\dfrac{142}{9}$"
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, and write that line right. Find Fay's age now, if Ezra is 3 times as old as Fay, and 6 years ago Ezra was 6 times as old as Fay.",
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x-6 = 6*(y-6)",
              "lines": [
                {
                  "step": "The working is for this problem: Find Fay's age now, if Ezra is 3 times as old as Fay, and 6 years ago Ezra was 6 times as old as Fay.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $x$ for Ezra's age 6 years ago, which reads the letter as Ezra's age now, in a place where Ezra's age 6 years ago belongs.",
                  "reason": "A letter is read as an object: the first line gives each letter one meaning, an age now or a count, and every other quantity is written in the letters from that meaning."
                },
                {
                  "step": "Line 3 written right is $x - 6 = 6(y - 6)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, with each quantity written in $x$ and $y$ as the first line defines them."
                }
              ],
              "given": [
                "Let $x$ be Ezra's age now and $y$ be Fay's age now, in years.",
                "$x = 3y$",
                "$x = 6(y - 6)$",
                "$3y = 6(y - 6)$",
                "$3y = 6y - 36$",
                "$-3y = -36$",
                "$y = 12$"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t115-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of hens and $y$ the number of goats: The hens and the goats have 94 legs in all.",
            "lines": [
              {
                "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the number of hens and $y$ the number of goats: The hens and the goats have 94 legs in all.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each hen has 2 legs and each goat 4, so the legs number $2x + 4y$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
              },
              {
                "step": "$2x + 4y = 94$",
                "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the larger number and $y$ the smaller: The larger number is 9 more than 3 times the smaller.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x = 3*y+9",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the larger number and $y$ the smaller: The larger number is 9 more than 3 times the smaller.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Three times the smaller is $3y$, and 9 more is $3y + 9$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$x = 3y + 9$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is Rita's age now and $y$ is Sam's age now, in years: Six years ago Rita was 4 times as old as Sam was then.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x-6 = 4*(y-6)",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is Rita's age now and $y$ is Sam's age now, in years: Six years ago Rita was 4 times as old as Sam was then.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Six years ago Rita was $x - 6$ and Sam was $y - 6$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$x - 6 = 4(y - 6)$",
                  "reason": "Writing a sentence as an equation: the verb that joins the two amounts stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the tens digit and $y$ the units digit of a two-digit number: Reversing the digits gives a number 45 more than the number.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "10*y+x = 10*x+y+45",
              "lines": [
                {
                  "step": "Write an equation in $x$ and $y$ for this sentence, where $x$ is the tens digit and $y$ the units digit of a two-digit number: Reversing the digits gives a number 45 more than the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number is $10x + y$, and reversed it is $10y + x$; 45 more than the number is $10x + y + 45$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, with each quantity written in $x$ and $y$ as the prompt defines them."
                },
                {
                  "step": "$10y + x = 10x + y + 45$",
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
