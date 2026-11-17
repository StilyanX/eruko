export default {
  "number": 150,
  "title": "Squares are never negative",
  "section": 9,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "258, 435-438, 446-450"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find all real numbers $x$, $y$ and $z$ with $(2x - 6)^2 + (x + y)^2 + (y - z + 8)^2 = 0$.",
    "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
    "answer": "x = 3, y = -3, z = 5",
    "solution": [
      "Find all real numbers $x$, $y$ and $z$ with $(2x - 6)^2 + (x + y)^2 + (y - z + 8)^2 = 0$.",
      "Each bracket is zero: $2x - 6 = 0$, $x + y = 0$ and $y - z + 8 = 0$.",
      "$x = 3$",
      "$y = -3$",
      "$z = 5$"
    ]
  },
  "ideas": [
    {
      "name": "Trivial Inequality",
      "concrete": "The square of $-6$ is $36$, the square of $\\dfrac{2}{5}$ is $\\dfrac{4}{25}$, and the square of $0$ is $0$: none of them is below $0$, and only the square of $0$ is $0$.",
      "general": "For every real number $x$, $x^2 \\ge 0$, and $x^2 = 0$ only when $x = 0$. This is the **Trivial Inequality**."
    },
    {
      "name": "A sum of squares is zero only when each is zero",
      "concrete": "In $(x + 4)^2 + (y - 7)^2 = 0$ both squares are at least $0$. If one of them were above $0$, the sum would be above $0$, so both are $0$: $x = -4$ and $y = 7$.",
      "general": "For real numbers $x$, $y$ and $z$, $x^2 + y^2 + z^2 = 0$ only when $x = 0$, $y = 0$ and $z = 0$; the same holds for two squares, or for more than three."
    },
    {
      "name": "Arithmetic mean and geometric mean",
      "concrete": "For $2$ and $18$ the arithmetic mean is $\\dfrac{2 + 18}{2} = 10$ and the geometric mean is $\\sqrt{2 \\cdot 18} = 6$, and $10 \\ge 6$.",
      "general": "For nonnegative numbers $x$ and $y$, the **arithmetic mean** is $\\dfrac{x + y}{2}$ and the **geometric mean** is $\\sqrt{xy}$. Putting $a = \\sqrt{x}$ and $b = \\sqrt{y}$ in $\\frac{a^2+b^2}2\\ge ab$ gives $\\dfrac{x + y}{2} \\ge \\sqrt{xy}$, the **AM-GM inequality for two numbers**, with equality only when $x = y$."
    },
    {
      "name": "A proof is written forwards",
      "concrete": "To prove $16x^2 + 9y^2 + 74 \\ge 40x + 42y$, working backwards turns it into $(4x - 5)^2 + (3y - 7)^2 \\ge 0$, which is true. The proof then starts from $(4x - 5)^2 \\ge 0$ and $(3y - 7)^2 \\ge 0$, adds them, multiplies out and moves the terms, and ends on $16x^2 + 9y^2 + 74 \\ge 40x + 42y$.",
      "general": "Working backwards from the inequality to be proved finds a true inequality to start from. The proof is then written forwards: it starts from the true inequality, and each line follows from the lines above it, ending on the inequality to be proved. A chain that starts from the inequality to be proved proves nothing, since a false start can also end on a true line."
    }
  ],
  "kinds": [
    {
      "id": "t150-k1",
      "forms": [
        {
          "example": {
            "problem": "Find all real numbers $x$ and $y$ with $(4x + 20)^2 + (-4x + 4y + 8)^2 = 0$.",
            "lines": [
              {
                "step": "Find all real numbers $x$ and $y$ with $(4x + 20)^2 + (-4x + 4y + 8)^2 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both brackets are zero: $4x + 20 = 0$ and $-4x + 4y + 8 = 0$.",
                "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
              },
              {
                "step": "$x = -5$",
                "reason": "Isolating the variable: taking $20$ from both sides of $4x + 20 = 0$ leaves $4x = -20$, and dividing both sides by $4$ leaves $x$ alone."
              },
              {
                "step": "$-4(-5) + 4y + 8 = 0$",
                "reason": "Substituting a value: $x$ is replaced by its value $-5$, in brackets, in the second bracket."
              },
              {
                "step": "$y = -7$",
                "reason": "Isolating the variable: $-4(-5) + 8$ is $28$, so $4y = -28$, and dividing both sides by $4$ leaves $y$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find all real numbers $x$ and $y$ with $(2x + 4)^2 + (3x + 2y + 20)^2 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -2, y = -7",
              "lines": [
                {
                  "step": "Find all real numbers $x$ and $y$ with $(2x + 4)^2 + (3x + 2y + 20)^2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both brackets are zero: $2x + 4 = 0$ and $3x + 2y + 20 = 0$.",
                  "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Isolating the variable: taking $4$ from both sides of $2x + 4 = 0$ leaves $2x = -4$, and dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$3(-2) + 2y + 20 = 0$",
                  "reason": "Substituting a value: $x$ is replaced by its value $-2$, in brackets, in the second bracket."
                },
                {
                  "step": "$y = -7$",
                  "reason": "Isolating the variable: $3(-2) + 20$ is $14$, so $2y = -14$, and dividing both sides by $2$ leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find all real numbers $x$ and $y$ with $(4x - 16)^2 + (2x - 5y + 7)^2 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 4, y = 3",
              "lines": [
                {
                  "step": "Find all real numbers $x$ and $y$ with $(4x - 16)^2 + (2x - 5y + 7)^2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both brackets are zero: $4x - 16 = 0$ and $2x - 5y + 7 = 0$.",
                  "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Isolating the variable: adding $16$ to both sides of $4x - 16 = 0$ leaves $4x = 16$, and dividing both sides by $4$ leaves $x$ alone."
                },
                {
                  "step": "$2(4) - 5y + 7 = 0$",
                  "reason": "Substituting a value: $x$ is replaced by its value $4$, in brackets, in the second bracket."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Isolating the variable: $2(4) + 7$ is $15$, so $-5y = -15$, and dividing both sides by $-5$ leaves $y$ alone."
                }
              ]
            },
            {
              "prompt": "Find all real numbers $x$ and $y$ with $(3x - 6)^2 + (2x - 3y - 13)^2 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 2, y = -3",
              "lines": [
                {
                  "step": "Find all real numbers $x$ and $y$ with $(3x - 6)^2 + (2x - 3y - 13)^2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both brackets are zero: $3x - 6 = 0$ and $2x - 3y - 13 = 0$.",
                  "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Isolating the variable: adding $6$ to both sides of $3x - 6 = 0$ leaves $3x = 6$, and dividing both sides by $3$ leaves $x$ alone."
                },
                {
                  "step": "$2(2) - 3y - 13 = 0$",
                  "reason": "Substituting a value: $x$ is replaced by its value $2$, in brackets, in the second bracket."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Isolating the variable: $2(2) - 13$ is $-9$, so $-3y = 9$, and dividing both sides by $-3$ leaves $y$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find all real numbers $x$ and $y$ with $4x^2 + y^2 - 36x + 18y + 162 = 0$.",
            "lines": [
              {
                "step": "Find all real numbers $x$ and $y$ with $4x^2 + y^2 - 36x + 18y + 162 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x^2 - 36x + 81 + y^2 + 18y + 81 = 0$",
                "reason": "Completing the square: the constant $162$ is split as $81 + 81$, the two numbers that complete $4x^2 - 36x$ and $y^2 + 18y$ to squares."
              },
              {
                "step": "$(2x - 9)^2 + (y + 9)^2 = 0$",
                "reason": "Square of a binomial: $4x^2 - 36x + 81$ is $(2x - 9)^2$ and $y^2 + 18y + 81$ is $(y + 9)^2$."
              },
              {
                "step": "Both brackets are zero: $2x - 9 = 0$ and $y + 9 = 0$.",
                "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
              },
              {
                "step": "$x = \\dfrac{9}{2}$",
                "reason": "Isolating the variable: adding $9$ to both sides of $2x - 9 = 0$, then dividing both sides by $2$."
              },
              {
                "step": "$y = -9$",
                "reason": "Isolating the variable: taking $9$ from both sides of $y + 9 = 0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find all real numbers $x$ and $y$ with $4x^2 + y^2 - 20x + 14y + 74 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 5/2, y = -7",
              "lines": [
                {
                  "step": "Find all real numbers $x$ and $y$ with $4x^2 + y^2 - 20x + 14y + 74 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 - 20x + 25 + y^2 + 14y + 49 = 0$",
                  "reason": "Completing the square: the constant $74$ is split as $25 + 49$, the two numbers that complete $4x^2 - 20x$ and $y^2 + 14y$ to squares."
                },
                {
                  "step": "$(2x - 5)^2 + (y + 7)^2 = 0$",
                  "reason": "Square of a binomial: $4x^2 - 20x + 25$ is $(2x - 5)^2$ and $y^2 + 14y + 49$ is $(y + 7)^2$."
                },
                {
                  "step": "Both brackets are zero: $2x - 5 = 0$ and $y + 7 = 0$.",
                  "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
                },
                {
                  "step": "$x = \\dfrac{5}{2}$",
                  "reason": "Isolating the variable: adding $5$ to both sides of $2x - 5 = 0$, then dividing both sides by $2$."
                },
                {
                  "step": "$y = -7$",
                  "reason": "Isolating the variable: taking $7$ from both sides of $y + 7 = 0$."
                }
              ]
            },
            {
              "prompt": "Find all real numbers $x$ and $y$ with $x^2 + 9y^2 + 14x + 30y + 74 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = -7, y = -5/3",
              "lines": [
                {
                  "step": "Find all real numbers $x$ and $y$ with $x^2 + 9y^2 + 14x + 30y + 74 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 14x + 49 + 9y^2 + 30y + 25 = 0$",
                  "reason": "Completing the square: the constant $74$ is split as $49 + 25$, the two numbers that complete $x^2 + 14x$ and $9y^2 + 30y$ to squares."
                },
                {
                  "step": "$(x + 7)^2 + (3y + 5)^2 = 0$",
                  "reason": "Square of a binomial: $x^2 + 14x + 49$ is $(x + 7)^2$ and $9y^2 + 30y + 25$ is $(3y + 5)^2$."
                },
                {
                  "step": "Both brackets are zero: $x + 7 = 0$ and $3y + 5 = 0$.",
                  "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
                },
                {
                  "step": "$x = -7$",
                  "reason": "Isolating the variable: taking $7$ from both sides of $x + 7 = 0$."
                },
                {
                  "step": "$y = -\\dfrac{5}{3}$",
                  "reason": "Isolating the variable: taking $5$ from both sides of $3y + 5 = 0$, then dividing both sides by $3$."
                }
              ]
            },
            {
              "prompt": "Find all real numbers $x$ and $y$ with $x^2 + 9y^2 - 8x + 42y + 65 = 0$.",
              "form": "Answer as each unknown = a number, as in x = 2, y = -1.",
              "answer": "x = 4, y = -7/3",
              "lines": [
                {
                  "step": "Find all real numbers $x$ and $y$ with $x^2 + 9y^2 - 8x + 42y + 65 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 8x + 16 + 9y^2 + 42y + 49 = 0$",
                  "reason": "Completing the square: the constant $65$ is split as $16 + 49$, the two numbers that complete $x^2 - 8x$ and $9y^2 + 42y$ to squares."
                },
                {
                  "step": "$(x - 4)^2 + (3y + 7)^2 = 0$",
                  "reason": "Square of a binomial: $x^2 - 8x + 16$ is $(x - 4)^2$ and $9y^2 + 42y + 49$ is $(3y + 7)^2$."
                },
                {
                  "step": "Both brackets are zero: $x - 4 = 0$ and $3y + 7 = 0$.",
                  "reason": "A sum of squares is zero only when each is zero: each square is at least $0$ by the Trivial Inequality, so a square above $0$ would make the sum above $0$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Isolating the variable: adding $4$ to both sides of $x - 4 = 0$."
                },
                {
                  "step": "$y = -\\dfrac{7}{3}$",
                  "reason": "Isolating the variable: taking $7$ from both sides of $3y + 7 = 0$, then dividing both sides by $3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t150-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $277 \\cdot 323$ and $298 \\cdot 302$. Type the greater one as it is written above; do not work out its value.",
            "lines": [
              {
                "step": "Find the greater of $277 \\cdot 323$ and $298 \\cdot 302$. Type the greater one as it is written above; do not work out its value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$298 \\cdot 302 = (300 - 2)(300 + 2) = 300^2 - 2^2$",
                "reason": "Difference of squares: $298$ and $302$ are $2$ below and $2$ above $300$, and $(a - b)(a + b) = a^2 - b^2$."
              },
              {
                "step": "$277 \\cdot 323 = (300 - 23)(300 + 23) = 300^2 - 23^2$",
                "reason": "Difference of squares: $277$ and $323$ are $23$ below and $23$ above $300$."
              },
              {
                "step": "$2^2 < 23^2$",
                "reason": "Powers and roots of positive numbers keep the order: $0 < 2 < 23$."
              },
              {
                "step": "$-(2^2) > -(23^2)$",
                "reason": "Multiplying by a negative number reverses the sign: both sides of the fourth line are multiplied by $-1$."
              },
              {
                "step": "$300^2 - 2^2 > 300^2 - 23^2$",
                "reason": "Adding the same number: $300^2$ is added to both sides."
              },
              {
                "step": "The greater is $298 \\cdot 302$.",
                "reason": "Answering the question asked: by the second, third and sixth lines, $298 \\cdot 302$ is the greater of the two products."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $673 \\cdot 687$ and $653 \\cdot 707$. Type the greater one as it is written above; do not work out its value.",
              "form": "Answer as a number, or equivalent.",
              "answer": "673*687",
              "lines": [
                {
                  "step": "Find the greater of $673 \\cdot 687$ and $653 \\cdot 707$. Type the greater one as it is written above; do not work out its value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$673 \\cdot 687 = (680 - 7)(680 + 7) = 680^2 - 7^2$",
                  "reason": "Difference of squares: $673$ and $687$ are $7$ below and $7$ above $680$, and $(a - b)(a + b) = a^2 - b^2$."
                },
                {
                  "step": "$653 \\cdot 707 = (680 - 27)(680 + 27) = 680^2 - 27^2$",
                  "reason": "Difference of squares: $653$ and $707$ are $27$ below and $27$ above $680$."
                },
                {
                  "step": "$7^2 < 27^2$",
                  "reason": "Powers and roots of positive numbers keep the order: $0 < 7 < 27$."
                },
                {
                  "step": "$-(7^2) > -(27^2)$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of the fourth line are multiplied by $-1$."
                },
                {
                  "step": "$680^2 - 7^2 > 680^2 - 27^2$",
                  "reason": "Adding the same number: $680^2$ is added to both sides."
                },
                {
                  "step": "The greater is $673 \\cdot 687$.",
                  "reason": "Answering the question asked: by the second, third and sixth lines, $673 \\cdot 687$ is the greater of the two products."
                }
              ]
            },
            {
              "prompt": "Find the greater of $3196 \\cdot 3204$ and $3198 \\cdot 3202$. Type the greater one as it is written above; do not work out its value.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3198*3202",
              "lines": [
                {
                  "step": "Find the greater of $3196 \\cdot 3204$ and $3198 \\cdot 3202$. Type the greater one as it is written above; do not work out its value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3198 \\cdot 3202 = (3200 - 2)(3200 + 2) = 3200^2 - 2^2$",
                  "reason": "Difference of squares: $3198$ and $3202$ are $2$ below and $2$ above $3200$, and $(a - b)(a + b) = a^2 - b^2$."
                },
                {
                  "step": "$3196 \\cdot 3204 = (3200 - 4)(3200 + 4) = 3200^2 - 4^2$",
                  "reason": "Difference of squares: $3196$ and $3204$ are $4$ below and $4$ above $3200$."
                },
                {
                  "step": "$2^2 < 4^2$",
                  "reason": "Powers and roots of positive numbers keep the order: $0 < 2 < 4$."
                },
                {
                  "step": "$-(2^2) > -(4^2)$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of the fourth line are multiplied by $-1$."
                },
                {
                  "step": "$3200^2 - 2^2 > 3200^2 - 4^2$",
                  "reason": "Adding the same number: $3200^2$ is added to both sides."
                },
                {
                  "step": "The greater is $3198 \\cdot 3202$.",
                  "reason": "Answering the question asked: by the second, third and sixth lines, $3198 \\cdot 3202$ is the greater of the two products."
                }
              ]
            },
            {
              "prompt": "Find the greater of $8683 \\cdot 8717$ and $8695 \\cdot 8705$. Type the greater one as it is written above; do not work out its value.",
              "form": "Answer as a number, or equivalent.",
              "answer": "8695*8705",
              "lines": [
                {
                  "step": "Find the greater of $8683 \\cdot 8717$ and $8695 \\cdot 8705$. Type the greater one as it is written above; do not work out its value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8695 \\cdot 8705 = (8700 - 5)(8700 + 5) = 8700^2 - 5^2$",
                  "reason": "Difference of squares: $8695$ and $8705$ are $5$ below and $5$ above $8700$, and $(a - b)(a + b) = a^2 - b^2$."
                },
                {
                  "step": "$8683 \\cdot 8717 = (8700 - 17)(8700 + 17) = 8700^2 - 17^2$",
                  "reason": "Difference of squares: $8683$ and $8717$ are $17$ below and $17$ above $8700$."
                },
                {
                  "step": "$5^2 < 17^2$",
                  "reason": "Powers and roots of positive numbers keep the order: $0 < 5 < 17$."
                },
                {
                  "step": "$-(5^2) > -(17^2)$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of the fourth line are multiplied by $-1$."
                },
                {
                  "step": "$8700^2 - 5^2 > 8700^2 - 17^2$",
                  "reason": "Adding the same number: $8700^2$ is added to both sides."
                },
                {
                  "step": "The greater is $8695 \\cdot 8705$.",
                  "reason": "Answering the question asked: by the second, third and sixth lines, $8695 \\cdot 8705$ is the greater of the two products."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $2 \\cdot 376 \\cdot 389 + 167$ and $376^2 + 389^2$. Type the greater one as it is written above; do not work out its value.",
            "lines": [
              {
                "step": "Find the greater of $2 \\cdot 376 \\cdot 389 + 167$ and $376^2 + 389^2$. Type the greater one as it is written above; do not work out its value.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$376^2 + 389^2 - 2 \\cdot 376 \\cdot 389 = (376 - 389)^2$",
                "reason": "Square of a binomial: $(a - b)^2 = a^2 - 2ab + b^2$, with $a = 376$ and $b = 389$."
              },
              {
                "step": "$376^2 + 389^2 - 2 \\cdot 376 \\cdot 389 = 169$",
                "reason": "Substituting a value: $376 - 389$ is $-13$, and $(-13)^2 = 169$."
              },
              {
                "step": "$376^2 + 389^2 - 2 \\cdot 376 \\cdot 389 > 167$",
                "reason": "Transitivity: the left side is $169$ by the third line, and $169 > 167$."
              },
              {
                "step": "$376^2 + 389^2 > 2 \\cdot 376 \\cdot 389 + 167$",
                "reason": "Adding the same number: $2 \\cdot 376 \\cdot 389$ is added to both sides."
              },
              {
                "step": "The greater is $376^2 + 389^2$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $2 \\cdot 159 \\cdot 172 + 179$ and $159^2 + 172^2$. Type the greater one as it is written above; do not work out its value.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2*159*172+179",
              "lines": [
                {
                  "step": "Find the greater of $2 \\cdot 159 \\cdot 172 + 179$ and $159^2 + 172^2$. Type the greater one as it is written above; do not work out its value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$159^2 + 172^2 - 2 \\cdot 159 \\cdot 172 = (159 - 172)^2$",
                  "reason": "Square of a binomial: $(a - b)^2 = a^2 - 2ab + b^2$, with $a = 159$ and $b = 172$."
                },
                {
                  "step": "$159^2 + 172^2 - 2 \\cdot 159 \\cdot 172 = 169$",
                  "reason": "Substituting a value: $159 - 172$ is $-13$, and $(-13)^2 = 169$."
                },
                {
                  "step": "$159^2 + 172^2 - 2 \\cdot 159 \\cdot 172 < 179$",
                  "reason": "Transitivity: the left side is $169$ by the third line, and $169 < 179$."
                },
                {
                  "step": "$159^2 + 172^2 < 2 \\cdot 159 \\cdot 172 + 179$",
                  "reason": "Adding the same number: $2 \\cdot 159 \\cdot 172$ is added to both sides."
                },
                {
                  "step": "The greater is $2 \\cdot 159 \\cdot 172 + 179$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $957^2 + 966^2$ and $2 \\cdot 957 \\cdot 966 + 82$. Type the greater one as it is written above; do not work out its value.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2*957*966+82",
              "lines": [
                {
                  "step": "Find the greater of $957^2 + 966^2$ and $2 \\cdot 957 \\cdot 966 + 82$. Type the greater one as it is written above; do not work out its value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$957^2 + 966^2 - 2 \\cdot 957 \\cdot 966 = (957 - 966)^2$",
                  "reason": "Square of a binomial: $(a - b)^2 = a^2 - 2ab + b^2$, with $a = 957$ and $b = 966$."
                },
                {
                  "step": "$957^2 + 966^2 - 2 \\cdot 957 \\cdot 966 = 81$",
                  "reason": "Substituting a value: $957 - 966$ is $-9$, and $(-9)^2 = 81$."
                },
                {
                  "step": "$957^2 + 966^2 - 2 \\cdot 957 \\cdot 966 < 82$",
                  "reason": "Transitivity: the left side is $81$ by the third line, and $81 < 82$."
                },
                {
                  "step": "$957^2 + 966^2 < 2 \\cdot 957 \\cdot 966 + 82$",
                  "reason": "Adding the same number: $2 \\cdot 957 \\cdot 966$ is added to both sides."
                },
                {
                  "step": "The greater is $2 \\cdot 957 \\cdot 966 + 82$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $2 \\cdot 684 \\cdot 695 + 116$ and $684^2 + 695^2$. Type the greater one as it is written above; do not work out its value.",
              "form": "Answer as a number, or equivalent.",
              "answer": "684^2+695^2",
              "lines": [
                {
                  "step": "Find the greater of $2 \\cdot 684 \\cdot 695 + 116$ and $684^2 + 695^2$. Type the greater one as it is written above; do not work out its value.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$684^2 + 695^2 - 2 \\cdot 684 \\cdot 695 = (684 - 695)^2$",
                  "reason": "Square of a binomial: $(a - b)^2 = a^2 - 2ab + b^2$, with $a = 684$ and $b = 695$."
                },
                {
                  "step": "$684^2 + 695^2 - 2 \\cdot 684 \\cdot 695 = 121$",
                  "reason": "Substituting a value: $684 - 695$ is $-11$, and $(-11)^2 = 121$."
                },
                {
                  "step": "$684^2 + 695^2 - 2 \\cdot 684 \\cdot 695 > 116$",
                  "reason": "Transitivity: the left side is $121$ by the third line, and $121 > 116$."
                },
                {
                  "step": "$684^2 + 695^2 > 2 \\cdot 684 \\cdot 695 + 116$",
                  "reason": "Adding the same number: $2 \\cdot 684 \\cdot 695$ is added to both sides."
                },
                {
                  "step": "The greater is $684^2 + 695^2$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t150-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this comparison of $738 \\cdot 782$ and $748 \\cdot 772$, and write that line right.",
            "given": [
              "$748 \\cdot 772 = 760^2 + 12^2$",
              "$738 \\cdot 782 = 760^2 - 22^2$",
              "$12^2 > -(22^2)$",
              "$760^2 + 12^2 > 760^2 - 22^2$",
              "$748 \\cdot 772 > 738 \\cdot 782$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this comparison of $738 \\cdot 782$ and $748 \\cdot 772$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 writes $748 \\cdot 772$ as $760^2 + 12^2$, with a plus sign where a minus sign belongs.",
                "reason": "Difference of squares: $(760 - 12)(760 + 12) = 760^2 - 12^2$, so the square of $12$ is taken away, never added."
              },
              {
                "step": "Line 1 written right is $748 \\cdot 772 = 760^2 - 12^2$.",
                "reason": "Difference of squares: $748$ and $772$ are $12$ below and $12$ above $760$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this comparison of $696 \\cdot 724$ and $701 \\cdot 719$, and write that line right.",
              "given": [
                "$701 \\cdot 719 = 710^2 - 9^2$",
                "$696 \\cdot 724 = 710^2 + 14^2$",
                "$-(9^2) < 14^2$",
                "$710^2 - 9^2 < 710^2 + 14^2$",
                "$701 \\cdot 719 < 696 \\cdot 724$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 696*724 = 710^2-14^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $696 \\cdot 724$ and $701 \\cdot 719$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $696 \\cdot 724$ as $710^2 + 14^2$, with a plus sign where a minus sign belongs.",
                  "reason": "Difference of squares: $(710 - 14)(710 + 14) = 710^2 - 14^2$, so the square of $14$ is taken away, never added."
                },
                {
                  "step": "Line 2 written right is $696 \\cdot 724 = 710^2 - 14^2$.",
                  "reason": "Difference of squares: $696$ and $724$ are $14$ below and $14$ above $710$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this comparison of $686 \\cdot 694$ and $663 \\cdot 717$, and write that line right.",
              "given": [
                "$686 \\cdot 694 = 690^2 + 4^2$",
                "$663 \\cdot 717 = 690^2 - 27^2$",
                "$4^2 > -(27^2)$",
                "$690^2 + 4^2 > 690^2 - 27^2$",
                "$686 \\cdot 694 > 663 \\cdot 717$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 686*694 = 690^2-4^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $686 \\cdot 694$ and $663 \\cdot 717$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes $686 \\cdot 694$ as $690^2 + 4^2$, with a plus sign where a minus sign belongs.",
                  "reason": "Difference of squares: $(690 - 4)(690 + 4) = 690^2 - 4^2$, so the square of $4$ is taken away, never added."
                },
                {
                  "step": "Line 1 written right is $686 \\cdot 694 = 690^2 - 4^2$.",
                  "reason": "Difference of squares: $686$ and $694$ are $4$ below and $4$ above $690$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this comparison of $6475 \\cdot 6525$ and $6492 \\cdot 6508$, and write that line right.",
              "given": [
                "$6492 \\cdot 6508 = 6500^2 - 8^2$",
                "$6475 \\cdot 6525 = 6500^2 + 25^2$",
                "$-(8^2) < 25^2$",
                "$6500^2 - 8^2 < 6500^2 + 25^2$",
                "$6492 \\cdot 6508 < 6475 \\cdot 6525$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 6475*6525 = 6500^2-25^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $6475 \\cdot 6525$ and $6492 \\cdot 6508$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $6475 \\cdot 6525$ as $6500^2 + 25^2$, with a plus sign where a minus sign belongs.",
                  "reason": "Difference of squares: $(6500 - 25)(6500 + 25) = 6500^2 - 25^2$, so the square of $25$ is taken away, never added."
                },
                {
                  "step": "Line 2 written right is $6475 \\cdot 6525 = 6500^2 - 25^2$.",
                  "reason": "Difference of squares: $6475$ and $6525$ are $25$ below and $25$ above $6500$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this comparison of $3687 \\cdot 3713$ and $3675 \\cdot 3725$, and write that line right.",
            "given": [
              "$3687 \\cdot 3713 = 3700^2 - 13^2$",
              "$3675 \\cdot 3725 = 3700^2 - 25^2$",
              "$13^2 < 25^2$",
              "$-(13^2) < -(25^2)$",
              "$3700^2 - 13^2 < 3700^2 - 25^2$",
              "$3687 \\cdot 3713 < 3675 \\cdot 3725$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this comparison of $3687 \\cdot 3713$ and $3675 \\cdot 3725$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 multiplies both sides of $13^2 < 25^2$ by $-1$ and keeps the sign $<$.",
                "reason": "Multiplying by a negative number reverses the sign: after multiplying by $-1$, less than becomes greater than."
              },
              {
                "step": "Line 4 written right is $-(13^2) > -(25^2)$.",
                "reason": "Multiplying by a negative number reverses the sign: $-169 > -625$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this comparison of $588 \\cdot 632$ and $606 \\cdot 614$, and write that line right.",
              "given": [
                "$4^2 < 22^2$",
                "$-(4^2) < -(22^2)$",
                "$610^2 - 4^2 < 610^2 - 22^2$",
                "$606 \\cdot 614 = 610^2 - 4^2$",
                "$588 \\cdot 632 = 610^2 - 22^2$",
                "$606 \\cdot 614 < 588 \\cdot 632$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -(4^2) > -(22^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $588 \\cdot 632$ and $606 \\cdot 614$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies both sides of $4^2 < 22^2$ by $-1$ and keeps the sign $<$.",
                  "reason": "Multiplying by a negative number reverses the sign: after multiplying by $-1$, less than becomes greater than."
                },
                {
                  "step": "Line 2 written right is $-(4^2) > -(22^2)$.",
                  "reason": "Multiplying by a negative number reverses the sign: $-16 > -484$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this comparison of $563 \\cdot 617$ and $581 \\cdot 599$, and write that line right.",
              "given": [
                "$581 \\cdot 599 = 590^2 - 9^2$",
                "$563 \\cdot 617 = 590^2 - 27^2$",
                "$9^2 < 27^2$",
                "$-(9^2) < -(27^2)$",
                "$590^2 - 9^2 < 590^2 - 27^2$",
                "$581 \\cdot 599 < 563 \\cdot 617$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -(9^2) > -(27^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $563 \\cdot 617$ and $581 \\cdot 599$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 multiplies both sides of $9^2 < 27^2$ by $-1$ and keeps the sign $<$.",
                  "reason": "Multiplying by a negative number reverses the sign: after multiplying by $-1$, less than becomes greater than."
                },
                {
                  "step": "Line 4 written right is $-(9^2) > -(27^2)$.",
                  "reason": "Multiplying by a negative number reverses the sign: $-81 > -729$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this comparison of $8590 \\cdot 8610$ and $8572 \\cdot 8628$, and write that line right.",
              "given": [
                "$10^2 < 28^2$",
                "$-(10^2) < -(28^2)$",
                "$8600^2 - 10^2 < 8600^2 - 28^2$",
                "$8590 \\cdot 8610 = 8600^2 - 10^2$",
                "$8572 \\cdot 8628 = 8600^2 - 28^2$",
                "$8590 \\cdot 8610 < 8572 \\cdot 8628$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -(10^2) > -(28^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $8590 \\cdot 8610$ and $8572 \\cdot 8628$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies both sides of $10^2 < 28^2$ by $-1$ and keeps the sign $<$.",
                  "reason": "Multiplying by a negative number reverses the sign: after multiplying by $-1$, less than becomes greater than."
                },
                {
                  "step": "Line 2 written right is $-(10^2) > -(28^2)$.",
                  "reason": "Multiplying by a negative number reverses the sign: $-100 > -784$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t150-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality in $x$ and $y$, with the sum of the squares of $x$ and $y$ on the left: The sum of the squares of $x$ and $y$ is at least two less than twice the sum of $x$ and $y$.",
            "lines": [
              {
                "step": "Write this sentence as an inequality in $x$ and $y$, with the sum of the squares of $x$ and $y$ on the left: The sum of the squares of $x$ and $y$ is at least two less than twice the sum of $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the squares of $x$ and $y$ is $x^2 + y^2$.",
                "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
              },
              {
                "step": "Two less than twice the sum of $x$ and $y$ is $2(x + y) - 2$.",
                "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
              },
              {
                "step": "$x^2 + y^2 \\ge 2(x + y) - 2$",
                "reason": "Writing a sentence as an equation: the words \"is at least\" stand where the sign $\\ge$ goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality in $x$, with the square of the sum of $3x$ and $7$ on the left: The square of the sum of $3x$ and $7$ is at least $84x$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "(3*x+7)^2 >= 84*x",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$, with the square of the sum of $3x$ and $7$ on the left: The square of the sum of $3x$ and $7$ is at least $84x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the sum of $3x$ and $7$ is $(3x + 7)^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The right side is $84x$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$(3x + 7)^2 \\ge 84x$",
                  "reason": "Writing a sentence as an equation: the words \"is at least\" stand where the sign $\\ge$ goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$, with the sum of $x$ and the quotient of $16$ by $x$ on the left: The sum of $x$ and the quotient of $16$ by $x$ is at least $8$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x+16/x >= 8",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$, with the sum of $x$ and the quotient of $16$ by $x$ on the left: The sum of $x$ and the quotient of $16$ by $x$ is at least $8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and the quotient of $16$ by $x$ is $x + \\dfrac{16}{x}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The right side is $8$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$x + \\dfrac{16}{x} \\ge 8$",
                  "reason": "Writing a sentence as an equation: the words \"is at least\" stand where the sign $\\ge$ goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ does not exceed the square of half the sum of $x$ and $y$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x*y <= ((x+y)/2)^2",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ does not exceed the square of half the sum of $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x$ and $y$ is $xy$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The square of half the sum of $x$ and $y$ is $\\left(\\dfrac{x + y}{2}\\right)^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$xy \\le \\left(\\dfrac{x + y}{2}\\right)^2$",
                  "reason": "Writing a sentence as an equation: the words \"does not exceed\" stand where the sign $\\le$ goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t150-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $9x^2 + 96x + 262 > 0$ for every real number $x$.",
            "lines": [
              {
                "step": "Decide whether $9x^2 + 96x + 262 > 0$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$9x^2 + 96x + 262 = (3x + 16)^2 + 6$",
                "reason": "Square of a binomial: $(3x + 16)^2 = 9x^2 + 96x + 256$, and $262 = 256 + 6$."
              },
              {
                "step": "The square $(3x + 16)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{16}{3}$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, with equality only when the number is $0$."
              },
              {
                "step": "So $9x^2 + 96x + 262$ is at least $6$, and equals $6$ at $x = -\\dfrac{16}{3}$.",
                "reason": "Adding the same number: $6$ is added to both sides of $(3x + 16)^2 \\ge 0$."
              },
              {
                "step": "The answer is Yes.",
                "reason": "Strict and nonstrict inequality: the least value $6$ is above $0$, so the expression is above $0$ for every real $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $36x^2 + 204x + 289 \\ge 0$ for every real number $x$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $36x^2 + 204x + 289 \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$36x^2 + 204x + 289 = (6x + 17)^2$",
                  "reason": "Square of a binomial: $(6x + 17)^2 = 36x^2 + 204x + 289$, and the constant $289$ is the square's own, so nothing is left over."
                },
                {
                  "step": "The square $(6x + 17)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{17}{6}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, with equality only when the number is $0$."
                },
                {
                  "step": "So $36x^2 + 204x + 289$ is at least $0$, and equals $0$ at $x = -\\dfrac{17}{6}$.",
                  "reason": "Adding the same number: $0$ is added to both sides of $(6x + 17)^2 \\ge 0$."
                },
                {
                  "step": "The answer is Yes.",
                  "reason": "Strict and nonstrict inequality: the least value $0$ is at least $0$, so the expression is at least $0$ for every real $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $9x^2 + 24x + 11 > 0$ for every real number $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $9x^2 + 24x + 11 > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x^2 + 24x + 11 = (3x + 4)^2 - 5$",
                  "reason": "Square of a binomial: $(3x + 4)^2 = 9x^2 + 24x + 16$, and $11 = 16 - 5$."
                },
                {
                  "step": "The square $(3x + 4)^2$ is at least $0$, and is $0$ only at $x = -\\dfrac{4}{3}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, with equality only when the number is $0$."
                },
                {
                  "step": "So $9x^2 + 24x + 11$ is at least $-5$, and equals $-5$ at $x = -\\dfrac{4}{3}$.",
                  "reason": "Adding the same number: $-5$ is added to both sides of $(3x + 4)^2 \\ge 0$."
                },
                {
                  "step": "The answer is No.",
                  "reason": "Strict and nonstrict inequality: at $x = -\\dfrac{4}{3}$ the expression is $-5$, which is below $0$."
                }
              ]
            },
            {
              "prompt": "Decide whether $4x^2 - 68x + 289 \\ge 0$ for every real number $x$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $4x^2 - 68x + 289 \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 - 68x + 289 = (2x - 17)^2$",
                  "reason": "Square of a binomial: $(2x - 17)^2 = 4x^2 - 68x + 289$, and the constant $289$ is the square's own, so nothing is left over."
                },
                {
                  "step": "The square $(2x - 17)^2$ is at least $0$, and is $0$ only at $x = \\dfrac{17}{2}$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, with equality only when the number is $0$."
                },
                {
                  "step": "So $4x^2 - 68x + 289$ is at least $0$, and equals $0$ at $x = \\dfrac{17}{2}$.",
                  "reason": "Adding the same number: $0$ is added to both sides of $(2x - 17)^2 \\ge 0$."
                },
                {
                  "step": "The answer is Yes.",
                  "reason": "Strict and nonstrict inequality: the least value $0$ is at least $0$, so the expression is at least $0$ for every real $x$."
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
      "id": "t150-p1",
      "method": "proof by cases",
      "statement": "Let $x$ be a real number. Then $x^2 \\ge 0$.",
      "idea": "A real number is positive, zero or negative; the square is worked out in each of the three cases.",
      "lines": [
        {
          "line": "Let $x$ be a real number.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $x > 0$, $x = 0$ or $x < 0$.",
          "reason": "arithmetic's order: a real number is positive, zero or negative"
        },
        {
          "line": "If $x > 0$, then $x^2 = x \\cdot x > 0$.",
          "reason": "arithmetic's order: the product of two positive numbers is positive"
        },
        {
          "line": "If $x = 0$, then $x^2 = 0 \\cdot 0 = 0$.",
          "reason": "substituting a value: $x$ is replaced by its value $0$"
        },
        {
          "line": "If $x < 0$, then $x^2 = x \\cdot x > 0$.",
          "reason": "arithmetic's order: the product of two negative numbers is positive"
        },
        {
          "line": "Therefore $x^2 \\ge 0$.",
          "reason": "strict and nonstrict inequality: in each case $x^2$ is above $0$ or equal to $0$"
        }
      ]
    },
    {
      "id": "t150-p2",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be real numbers. Then $\\dfrac{a^2 + b^2}{2} \\ge ab$.",
      "idea": "Working backwards turns the inequality into $(a - b)^2 \\ge 0$; the proof is written forwards from that square.",
      "lines": [
        {
          "line": "Let $a$ and $b$ be real numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $(a - b)^2 \\ge 0$.",
          "reason": "Trivial Inequality, for the real number $a - b$"
        },
        {
          "line": "So $a^2 - 2ab + b^2 \\ge 0$.",
          "reason": "square of a binomial, on the left side"
        },
        {
          "line": "So $a^2 + b^2 \\ge 2ab$.",
          "reason": "adding the same number $2ab$ to both sides"
        },
        {
          "line": "Therefore $\\dfrac{a^2 + b^2}{2} \\ge ab$.",
          "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$"
        }
      ]
    },
    {
      "id": "t150-p3",
      "method": "direct proof",
      "statement": "Let $x$ be a positive number. Then $x + \\dfrac{1}{x} \\ge 2$.",
      "idea": "Clearing the fraction and moving the terms turns the inequality into $(x - 1)^2 \\ge 0$; the proof is written forwards from that square, and divides by $x$ only because $x$ is positive.",
      "lines": [
        {
          "line": "Let $x$ be a positive number.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $(x - 1)^2 \\ge 0$.",
          "reason": "Trivial Inequality, for the real number $x - 1$"
        },
        {
          "line": "So $x^2 - 2x + 1 \\ge 0$.",
          "reason": "square of a binomial, on the left side"
        },
        {
          "line": "So $x^2 + 1 \\ge 2x$.",
          "reason": "adding the same number $2x$ to both sides"
        },
        {
          "line": "So $\\dfrac{x^2 + 1}{x} \\ge 2$.",
          "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{x}$, which is positive since $x$ is"
        },
        {
          "line": "Therefore $x + \\dfrac{1}{x} \\ge 2$.",
          "reason": "fraction rules (arithmetic's): $\\dfrac{x^2 + 1}{x}$ is $\\dfrac{x^2}{x} + \\dfrac{1}{x}$, and $\\dfrac{x^2}{x} = x$"
        }
      ]
    },
    {
      "id": "t150-p4",
      "method": "direct proof",
      "statement": "Let $x$ be a positive number. Then $\\dfrac{1}{x} + x \\ge 2$.",
      "idea": "A second way, from the inequality already proved: the numbers $a = \\sqrt{x}$ and $b = \\dfrac{1}{\\sqrt{x}}$ have squares $x$ and $\\dfrac{1}{x}$ and product $1$, so the inequality already proved gives the result at once.",
      "lines": [
        {
          "line": "Let $x$ be a positive number.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $\\sqrt{x}$ is a positive number.",
          "reason": "positive square root (arithmetic's): a positive number has a positive square root"
        },
        {
          "line": "So $\\dfrac{(\\sqrt{x})^2 + \\left(\\dfrac{1}{\\sqrt{x}}\\right)^2}{2} \\ge \\sqrt{x} \\cdot \\dfrac{1}{\\sqrt{x}}$.",
          "reason": "the inequality $\\frac{a^2+b^2}2\\ge ab$, with $a = \\sqrt{x}$ and $b = \\dfrac{1}{\\sqrt{x}}$"
        },
        {
          "line": "So $\\dfrac{x + \\left(\\dfrac{1}{\\sqrt{x}}\\right)^2}{2} \\ge \\sqrt{x} \\cdot \\dfrac{1}{\\sqrt{x}}$.",
          "reason": "positive square root: $(\\sqrt{x})^2 = x$"
        },
        {
          "line": "So $\\dfrac{x + \\dfrac{1}{x}}{2} \\ge \\sqrt{x} \\cdot \\dfrac{1}{\\sqrt{x}}$.",
          "reason": "power of a quotient: $\\left(\\dfrac{1}{\\sqrt{x}}\\right)^2 = \\dfrac{1^2}{(\\sqrt{x})^2}$, which is $\\dfrac{1}{x}$"
        },
        {
          "line": "So $\\dfrac{x + \\dfrac{1}{x}}{2} \\ge 1$.",
          "reason": "fraction rules (arithmetic's): $\\sqrt{x} \\cdot \\dfrac{1}{\\sqrt{x}} = \\dfrac{\\sqrt{x}}{\\sqrt{x}} = 1$"
        },
        {
          "line": "Therefore $\\dfrac{1}{x} + x \\ge 2$.",
          "reason": "multiplying by a positive number: both sides are multiplied by $2$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t150-s1",
      "method": "proof by cases",
      "statement": "Prove that $x \\cdot |x| \\le x^2$ for every real number $x$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a real number.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x \\ge 0$ or $x < 0$.",
            "reason": "arithmetic's order: a real number is at least $0$ or below $0$"
          },
          {
            "line": "If $x \\ge 0$, then $x \\cdot |x| = x \\cdot x = x^2$.",
            "reason": "absolute value (arithmetic's): $|x| = x$ when $x \\ge 0$"
          },
          {
            "line": "If $x < 0$, then $x \\cdot |x| = x \\cdot (-x) = -x^2$.",
            "reason": "absolute value (arithmetic's): $|x| = -x$ when $x < 0$"
          },
          {
            "line": "Also $-x^2 \\le 0$.",
            "reason": "multiplying by a negative number reverses the sign: the Trivial Inequality $x^2 \\ge 0$ times $-1$"
          },
          {
            "line": "So $x \\cdot |x| \\le x^2$ when $x < 0$.",
            "reason": "transitivity: $-x^2 \\le 0$, and $0 \\le x^2$ by the Trivial Inequality"
          },
          {
            "line": "Therefore $x \\cdot |x| \\le x^2$.",
            "reason": "both cases give $x \\cdot |x| \\le x^2$: equal in the first, at most in the second"
          }
        ]
      }
    },
    {
      "id": "t150-s2",
      "method": "direct proof",
      "statement": "Prove that real numbers $x$ and $y$ with $x \\cdot x + y \\cdot y = 0$ are both $0$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x \\cdot x + y \\cdot y = 0$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x \\cdot x \\ge 0$.",
            "reason": "Trivial Inequality, for $x$"
          },
          {
            "line": "Also $y \\cdot y \\ge 0$.",
            "reason": "Trivial Inequality, for $y$"
          },
          {
            "line": "So $x \\cdot x = -y \\cdot y$.",
            "reason": "adding the same number $-y \\cdot y$ to both sides of the hypothesis"
          },
          {
            "line": "So $-y \\cdot y \\le 0$.",
            "reason": "multiplying by a negative number reverses the sign: the third line times $-1$"
          },
          {
            "line": "So $x \\cdot x \\le 0$.",
            "reason": "the fourth line: $x \\cdot x$ equals $-y \\cdot y$"
          },
          {
            "line": "So $x \\cdot x = 0$.",
            "reason": "strict and nonstrict inequality: the second and sixth lines"
          },
          {
            "line": "So $x = 0$.",
            "reason": "zero-product property"
          },
          {
            "line": "Then $y \\cdot y = 0$.",
            "reason": "substituting a value: $x$ is replaced by $0$ in the hypothesis"
          },
          {
            "line": "Therefore $y = 0$.",
            "reason": "zero-product property"
          }
        ]
      }
    },
    {
      "id": "t150-s3",
      "method": "direct proof",
      "statement": "Prove that $(x + y)^2 \\le 2(x^2 + y^2)$ for all real numbers $x$ and $y$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be real numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $(x - y)^2 \\ge 0$.",
            "reason": "Trivial Inequality, for the real number $x - y$"
          },
          {
            "line": "So $x^2 - 2xy + y^2 \\ge 0$.",
            "reason": "square of a binomial, on the left side"
          },
          {
            "line": "So $2x^2 + 2y^2 \\ge x^2 + 2xy + y^2$.",
            "reason": "adding the same number $x^2 + 2xy + y^2$ to both sides"
          },
          {
            "line": "So $2(x^2 + y^2) \\ge x^2 + 2xy + y^2$.",
            "reason": "taking out a common factor $2$ on the left side"
          },
          {
            "line": "Therefore $2(x^2 + y^2) \\ge (x + y)^2$.",
            "reason": "square of a binomial, on the right side"
          }
        ]
      }
    },
    {
      "id": "t150-s4",
      "method": "direct proof",
      "statement": "Prove that $x^2 + xy + y^2 \\ge 0$ for all real numbers $x$ and $y$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be real numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x^2 + xy + y^2 = \\left(x + \\dfrac{y}{2}\\right)^2 + \\dfrac{3y^2}{4}$.",
            "reason": "completing the square in $x$: half of the coefficient $y$ is $\\dfrac{y}{2}$, and $y^2 - \\dfrac{y^2}{4} = \\dfrac{3y^2}{4}$"
          },
          {
            "line": "Also $\\left(x + \\dfrac{y}{2}\\right)^2 \\ge 0$.",
            "reason": "Trivial Inequality, for the real number $x + \\dfrac{y}{2}$"
          },
          {
            "line": "Also $y^2 \\ge 0$.",
            "reason": "Trivial Inequality, for $y$"
          },
          {
            "line": "So $\\dfrac{3y^2}{4} \\ge 0$.",
            "reason": "multiplying by a positive number: both sides of the fourth line are multiplied by $\\dfrac{3}{4}$"
          },
          {
            "line": "So $\\left(x + \\dfrac{y}{2}\\right)^2 + \\dfrac{3y^2}{4} \\ge 0$.",
            "reason": "adding two inequalities: the third and fifth lines"
          },
          {
            "line": "Therefore $x^2 + xy + y^2 \\ge 0$.",
            "reason": "the second line: the two expressions are equal"
          }
        ]
      }
    },
    {
      "id": "t150-s5",
      "method": "direct proof",
      "statement": "Prove that $\\sqrt{xy} \\ge \\dfrac{2xy}{x + y}$ for all positive numbers $x$ and $y$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $y$ be positive numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $\\sqrt{x}$ and $\\sqrt{y}$ are positive numbers.",
            "reason": "positive square root (arithmetic's): a positive number has a positive square root"
          },
          {
            "line": "So $\\dfrac{(\\sqrt{x})^2 + (\\sqrt{y})^2}{2} \\ge \\sqrt{x} \\cdot \\sqrt{y}$.",
            "reason": "the inequality $\\frac{a^2+b^2}2\\ge ab$, with $a = \\sqrt{x}$ and $b = \\sqrt{y}$"
          },
          {
            "line": "So $\\dfrac{x + y}{2} \\ge \\sqrt{x} \\cdot \\sqrt{y}$.",
            "reason": "positive square root: $(\\sqrt{x})^2 = x$ and $(\\sqrt{y})^2 = y$"
          },
          {
            "line": "So $\\dfrac{x + y}{2} \\ge \\sqrt{xy}$.",
            "reason": "positive square root (arithmetic's): $\\sqrt{x} \\cdot \\sqrt{y} = \\sqrt{xy}$ for nonnegative $x$ and $y$"
          },
          {
            "line": "Also $x + y > 0$.",
            "reason": "adding two inequalities: $x > 0$ and $y > 0$"
          },
          {
            "line": "Also $\\sqrt{xy} > 0$.",
            "reason": "positive square root (arithmetic's): $xy$ is positive, so its square root is positive"
          },
          {
            "line": "So $\\dfrac{x + y}{2} \\cdot \\dfrac{2\\sqrt{xy}}{x + y} \\ge \\sqrt{xy} \\cdot \\dfrac{2\\sqrt{xy}}{x + y}$.",
            "reason": "multiplying by a positive number: both sides of the fifth line are multiplied by $\\dfrac{2\\sqrt{xy}}{x + y}$, positive by the sixth and seventh lines"
          },
          {
            "line": "So $\\sqrt{xy} \\ge \\sqrt{xy} \\cdot \\dfrac{2\\sqrt{xy}}{x + y}$.",
            "reason": "cancelling a common factor: $x + y$ and $2$ on the left side"
          },
          {
            "line": "Therefore $\\sqrt{xy} \\ge \\dfrac{2xy}{x + y}$.",
            "reason": "positive square root: $\\sqrt{xy} \\cdot \\sqrt{xy} = xy$"
          }
        ]
      }
    }
  ]
}
