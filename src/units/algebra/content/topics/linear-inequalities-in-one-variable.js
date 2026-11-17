export default {
  "number": 130,
  "title": "Linear inequalities in one variable",
  "section": 6,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "264-268, 280-285"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $3 - 4x < x + 13$.",
    "form": "Answer as an interval, as in [-2, 5).",
    "answer": "(-2, inf)",
    "solution": [
      "Solve $3 - 4x < x + 13$.",
      "$-5x + 3 < 13$",
      "$-5x < 10$",
      "$x > -2$",
      "$(-2, \\infty)$"
    ]
  },
  "ideas": [
    {
      "name": "Solution of an inequality",
      "concrete": "The number $6$ makes $2x - 5 > 4$ true, since $2 \\cdot 6 - 5 = 7$ and $7 > 4$, so $6$ is a solution. The number $4$ is not, since $2 \\cdot 4 - 5 = 3$ and $3 > 4$ is false. Adding $5$ to both sides and then dividing both sides by $2$ turns $2x - 5 > 4$ into $x > \\dfrac{9}{2}$, and the two inequalities have the same solutions: every number greater than $\\dfrac{9}{2}$. Its integer solutions up to $11$ are $5, 6, \\dots, 11$, and there are $11 - 5 + 1 = 7$ of them.",
      "general": "For an inequality in one letter $x$, a **solution of the inequality** is a number that makes it true when it stands in place of $x$. For integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$. Adding the same number to both sides, or multiplying both sides by a positive number, gives an inequality with the same solutions; multiplying both sides by a negative number does too, once the sign is reversed. So the rules for inequalities isolate $x$, and the inequality left, as $x > a$ or $x \\le a$, names every solution at once."
    },
    {
      "name": "Interval notation",
      "concrete": "The numbers $x$ with $-1 < x \\le 4$ are written $(-1, 4]$: the round bracket leaves $-1$ out and the square bracket takes $4$ in. The numbers $x$ with $x \\ge 2$ are written $[2, \\infty)$, and the numbers with $x < 0$ are written $(-\\infty, 0)$.",
      "general": "For numbers $a$ and $b$ with $a < b$, **interval notation** writes $a < x < b$ as $(a, b)$, $a \\le x \\le b$ as $[a, b]$, $a < x \\le b$ as $(a, b]$ and $a \\le x < b$ as $[a, b)$; it writes $x > a$ as $(a, \\infty)$, $x \\ge a$ as $[a, \\infty)$, $x < b$ as $(-\\infty, b)$ and $x \\le b$ as $(-\\infty, b]$. A square bracket takes its end in and a round bracket leaves it out; the smaller end comes first, and $\\infty$ and $-\\infty$, which are not numbers, always take a round bracket."
    },
    {
      "name": "Open circle and filled dot on the number line",
      "concrete": "On the number line, the solutions of $x < 1$ are the numbers to the left of $1$: the line is shaded to the left of $1$, and $1$ gets an open circle, since $1 < 1$ is false. The solutions of $x \\ge -2$ are shaded to the right of $-2$, with a filled dot at $-2$, since $-2 \\ge -2$ is true.",
      "general": "On the number line the solutions of an inequality in $x$ are shown by shading the part of the line they fill. An end of the shading that is a solution takes a **filled dot**, and an end that is not takes an **open circle**: the signs $\\le$ and $\\ge$ give filled dots, and the signs $<$ and $>$ give open circles."
    },
    {
      "name": "Solving a chain",
      "concrete": "In $1 < 2x + 3 \\le 11$ the letter stands in the middle part only. Taking $3$ from all three parts gives $-2 < 2x \\le 8$, and dividing all three by $2$ gives $-1 < x \\le 4$. In $x + 5 < 4x - 1 \\le 11$ the letter stands in two parts, so the chain is split into $x + 5 < 4x - 1$ and $4x - 1 \\le 11$; the first gives $x > 2$, the second gives $x \\le 3$, and the solutions are the numbers with $2 < x \\le 3$.",
      "general": "For numbers $p$, $q$ and $r$, a chain $p < q < r$ holds exactly when $p < q$ and $q < r$ both hold, and the same goes for $\\le$. **Solving a chain** in which $x$ stands in one part only does one step to all three parts at a time: adding the same number to each part, or multiplying each part by a positive number, keeps both signs, and multiplying each part by a negative number reverses both. Where $x$ stands in more than one part, the chain is split into its two inequalities, each is solved, and the solutions of the chain are the numbers that solve both. A chain read from right to left says the same with each sign turned round, as $4 > x \\ge -1$ says $-1 \\le x < 4$."
    }
  ],
  "kinds": [
    {
      "id": "t130-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $5x - 8 \\ge 2x + 7$.",
            "lines": [
              {
                "step": "Solve $5x - 8 \\ge 2x + 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x - 8 \\ge 7$",
                "reason": "Adding the same number: $2x$ is taken from both sides, which is adding $-2x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
              },
              {
                "step": "$3x \\ge 15$",
                "reason": "Adding the same number: $8$ is added to both sides, so the sign stays as it is."
              },
              {
                "step": "$x \\ge 5$",
                "reason": "Multiplying by a positive number: dividing both sides by $3$ is multiplying by $\\dfrac{1}{3}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "$[5, \\infty)$",
                "reason": "Interval notation: the end $5$ is a solution, so a square bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $7x + 3 < 3x - 9$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -3)",
              "lines": [
                {
                  "step": "Solve $7x + 3 < 3x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x + 3 < -9$",
                  "reason": "Adding the same number: $3x$ is taken from both sides, which is adding $-3x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
                },
                {
                  "step": "$4x < -12$",
                  "reason": "Adding the same number: $3$ is taken from both sides, which is adding $-3$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x < -3$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$(-\\infty, -3)$",
                  "reason": "Interval notation: the end $-3$ is left out, so a round bracket stands beside it, and the solutions go on without end to the left, so $-\\infty$ opens it with a round bracket."
                }
              ]
            },
            {
              "prompt": "Solve $6x - 5 \\le 2x + 6$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 11/4]",
              "lines": [
                {
                  "step": "Solve $6x - 5 \\le 2x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x - 5 \\le 6$",
                  "reason": "Adding the same number: $2x$ is taken from both sides, which is adding $-2x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
                },
                {
                  "step": "$4x \\le 11$",
                  "reason": "Adding the same number: $5$ is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\le \\dfrac{11}{4}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$(-\\infty, \\dfrac{11}{4}]$",
                  "reason": "Interval notation: the end $\\dfrac{11}{4}$ is a solution, so a square bracket stands beside it, and the solutions go on without end to the left, so $-\\infty$ opens it with a round bracket."
                }
              ]
            },
            {
              "prompt": "Solve $8x + 1 > 3x - 13$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-14/5, inf)",
              "lines": [
                {
                  "step": "Solve $8x + 1 > 3x - 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x + 1 > -13$",
                  "reason": "Adding the same number: $3x$ is taken from both sides, which is adding $-3x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
                },
                {
                  "step": "$5x > -14$",
                  "reason": "Adding the same number: $1$ is taken from both sides, which is adding $-1$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x > -\\dfrac{14}{5}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $5$ is multiplying by $\\dfrac{1}{5}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$(-\\dfrac{14}{5}, \\infty)$",
                  "reason": "Interval notation: the end $-\\dfrac{14}{5}$ is left out, so a round bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $4 - 3x > 2x + 24$.",
            "lines": [
              {
                "step": "Solve $4 - 3x > 2x + 24$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-5x + 4 > 24$",
                "reason": "Adding the same number: $2x$ is taken from both sides, which is adding $-2x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
              },
              {
                "step": "$-5x > 20$",
                "reason": "Adding the same number: $4$ is taken from both sides, which is adding $-4$ to both sides, so the sign stays as it is."
              },
              {
                "step": "$x < -4$",
                "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-5$ is multiplying by $-\\dfrac{1}{5}$, which is negative, so $>$ becomes $<$."
              },
              {
                "step": "$(-\\infty, -4)$",
                "reason": "Interval notation: the end $-4$ is left out, so a round bracket stands beside it, and the solutions go on without end to the left, so $-\\infty$ opens it with a round bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $9 - 2x \\ge 3x - 11$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 4]",
              "lines": [
                {
                  "step": "Solve $9 - 2x \\ge 3x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-5x + 9 \\ge -11$",
                  "reason": "Adding the same number: $3x$ is taken from both sides, which is adding $-3x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
                },
                {
                  "step": "$-5x \\ge -20$",
                  "reason": "Adding the same number: $9$ is taken from both sides, which is adding $-9$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\le 4$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-5$ is multiplying by $-\\dfrac{1}{5}$, which is negative, so $\\ge$ becomes $\\le$."
                },
                {
                  "step": "$(-\\infty, 4]$",
                  "reason": "Interval notation: the end $4$ is a solution, so a square bracket stands beside it, and the solutions go on without end to the left, so $-\\infty$ opens it with a round bracket."
                }
              ]
            },
            {
              "prompt": "Solve $-6 - 4x < 2x + 9$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-5/2, inf)",
              "lines": [
                {
                  "step": "Solve $-6 - 4x < 2x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6x - 6 < 9$",
                  "reason": "Adding the same number: $2x$ is taken from both sides, which is adding $-2x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
                },
                {
                  "step": "$-6x < 15$",
                  "reason": "Adding the same number: $6$ is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x > -\\dfrac{5}{2}$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-6$ is multiplying by $-\\dfrac{1}{6}$, which is negative, so $<$ becomes $>$."
                },
                {
                  "step": "$(-\\dfrac{5}{2}, \\infty)$",
                  "reason": "Interval notation: the end $-\\dfrac{5}{2}$ is left out, so a round bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
                }
              ]
            },
            {
              "prompt": "Solve $1 - 5x \\le 2x - 20$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[3, inf)",
              "lines": [
                {
                  "step": "Solve $1 - 5x \\le 2x - 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-7x + 1 \\le -20$",
                  "reason": "Adding the same number: $2x$ is taken from both sides, which is adding $-2x$ to both sides, and collecting like terms leaves the terms in $x$ on the left, so the sign stays as it is."
                },
                {
                  "step": "$-7x \\le -21$",
                  "reason": "Adding the same number: $1$ is taken from both sides, which is adding $-1$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\ge 3$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-7$ is multiplying by $-\\dfrac{1}{7}$, which is negative, so $\\le$ becomes $\\ge$."
                },
                {
                  "step": "$[3, \\infty)$",
                  "reason": "Interval notation: the end $3$ is a solution, so a square bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $-7 < 3x + 2 \\le 14$.",
            "lines": [
              {
                "step": "Solve $-7 < 3x + 2 \\le 14$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-9 < 3x \\le 12$",
                "reason": "Solving a chain: $2$ is taken from all three parts, which is adding $-2$ to each part, and adding the same number to each part keeps both signs as they are."
              },
              {
                "step": "$-3 < x \\le 4$",
                "reason": "Solving a chain: all three parts are divided by $3$, which is multiplying each by the positive number $\\dfrac{1}{3}$, so both signs stay as they are."
              },
              {
                "step": "$(-3, 4]$",
                "reason": "Interval notation: the smaller end comes first; $-3$ takes a round bracket and $4$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $1 \\le 2x - 5 < 8$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[3, 13/2)",
              "lines": [
                {
                  "step": "Solve $1 \\le 2x - 5 < 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6 \\le 2x < 13$",
                  "reason": "Solving a chain: $5$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 \\le x < \\dfrac{13}{2}$",
                  "reason": "Solving a chain: all three parts are divided by $2$, which is multiplying each by the positive number $\\dfrac{1}{2}$, so both signs stay as they are."
                },
                {
                  "step": "$[3, \\dfrac{13}{2})$",
                  "reason": "Interval notation: the smaller end comes first; $3$ takes a square bracket and $\\dfrac{13}{2}$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $-11 < 4x + 1 < 9$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-3, 2)",
              "lines": [
                {
                  "step": "Solve $-11 < 4x + 1 < 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-12 < 4x < 8$",
                  "reason": "Solving a chain: $1$ is taken from all three parts, which is adding $-1$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$-3 < x < 2$",
                  "reason": "Solving a chain: all three parts are divided by $4$, which is multiplying each by the positive number $\\dfrac{1}{4}$, so both signs stay as they are."
                },
                {
                  "step": "$(-3, 2)$",
                  "reason": "Interval notation: the smaller end comes first; $-3$ takes a round bracket and $2$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $0 \\le 5x - 3 \\le 12$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[3/5, 3]",
              "lines": [
                {
                  "step": "Solve $0 \\le 5x - 3 \\le 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 \\le 5x \\le 15$",
                  "reason": "Solving a chain: $3$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$\\dfrac{3}{5} \\le x \\le 3$",
                  "reason": "Solving a chain: all three parts are divided by $5$, which is multiplying each by the positive number $\\dfrac{1}{5}$, so both signs stay as they are."
                },
                {
                  "step": "$[\\dfrac{3}{5}, 3]$",
                  "reason": "Interval notation: the smaller end comes first; $\\dfrac{3}{5}$ takes a square bracket and $3$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2x - 3 < 3x + 1 \\le 16 - 2x$.",
            "lines": [
              {
                "step": "Solve $2x - 3 < 3x + 1 \\le 16 - 2x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The chain splits into $2x - 3 < 3x + 1$ and $3x + 1 \\le 16 - 2x$.",
                "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
              },
              {
                "step": "$-4 < x$",
                "reason": "Adding the same number: taking $2x$ and $1$ from both sides leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
              },
              {
                "step": "$5x \\le 15$",
                "reason": "Adding the same number: adding $2x$ to both sides and taking $1$ from them collects the terms in $x$ on the left of the second inequality, so its sign stays as it is."
              },
              {
                "step": "$x \\le 3$",
                "reason": "Multiplying by a positive number: dividing both sides by $5$ is multiplying by $\\dfrac{1}{5}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "$-4 < x \\le 3$",
                "reason": "Solution of an inequality: a solution of the chain makes both inequalities true, so it satisfies $-4 < x$ and $x \\le 3$ at once."
              },
              {
                "step": "$(-4, 3]$",
                "reason": "Interval notation: the smaller end comes first; $-4$ takes a round bracket and $3$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3x + 5 \\le 4x + 2 < 37 - 3x$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[3, 5)",
              "lines": [
                {
                  "step": "Solve $3x + 5 \\le 4x + 2 < 37 - 3x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain splits into $3x + 5 \\le 4x + 2$ and $4x + 2 < 37 - 3x$.",
                  "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
                },
                {
                  "step": "$3 \\le x$",
                  "reason": "Adding the same number: taking $3x$ and $2$ from both sides leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
                },
                {
                  "step": "$7x < 35$",
                  "reason": "Adding the same number: adding $3x$ to both sides and taking $2$ from them collects the terms in $x$ on the left of the second inequality, so its sign stays as it is."
                },
                {
                  "step": "$x < 5$",
                  "reason": "Multiplying by a positive number: dividing both sides by $7$ is multiplying by $\\dfrac{1}{7}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$3 \\le x < 5$",
                  "reason": "Solution of an inequality: a solution of the chain makes both inequalities true, so it satisfies $3 \\le x$ and $x < 5$ at once."
                },
                {
                  "step": "$[3, 5)$",
                  "reason": "Interval notation: the smaller end comes first; $3$ takes a square bracket and $5$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $4x - 9 < 5x - 6 < 9 - 2x$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-3, 15/7)",
              "lines": [
                {
                  "step": "Solve $4x - 9 < 5x - 6 < 9 - 2x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain splits into $4x - 9 < 5x - 6$ and $5x - 6 < 9 - 2x$.",
                  "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
                },
                {
                  "step": "$-3 < x$",
                  "reason": "Adding the same number: taking $4x$ from both sides and adding $6$ leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
                },
                {
                  "step": "$7x < 15$",
                  "reason": "Adding the same number: adding $2x$ and $6$ to both sides collects the terms in $x$ on the left of the second inequality, so its sign stays as it is."
                },
                {
                  "step": "$x < \\dfrac{15}{7}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $7$ is multiplying by $\\dfrac{1}{7}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$-3 < x < \\dfrac{15}{7}$",
                  "reason": "Solution of an inequality: a solution of the chain makes both inequalities true, so it satisfies $-3 < x$ and $x < \\dfrac{15}{7}$ at once."
                },
                {
                  "step": "$(-3, \\dfrac{15}{7})$",
                  "reason": "Interval notation: the smaller end comes first; $-3$ takes a round bracket and $\\dfrac{15}{7}$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $2x + 1 \\le 3x + 4 \\le 22 - 4x$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-3, 18/7]",
              "lines": [
                {
                  "step": "Solve $2x + 1 \\le 3x + 4 \\le 22 - 4x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain splits into $2x + 1 \\le 3x + 4$ and $3x + 4 \\le 22 - 4x$.",
                  "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
                },
                {
                  "step": "$-3 \\le x$",
                  "reason": "Adding the same number: taking $2x$ and $4$ from both sides leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
                },
                {
                  "step": "$7x \\le 18$",
                  "reason": "Adding the same number: adding $4x$ to both sides and taking $4$ from them collects the terms in $x$ on the left of the second inequality, so its sign stays as it is."
                },
                {
                  "step": "$x \\le \\dfrac{18}{7}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $7$ is multiplying by $\\dfrac{1}{7}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$-3 \\le x \\le \\dfrac{18}{7}$",
                  "reason": "Solution of an inequality: a solution of the chain makes both inequalities true, so it satisfies $-3 \\le x$ and $x \\le \\dfrac{18}{7}$ at once."
                },
                {
                  "step": "$[-3, \\dfrac{18}{7}]$",
                  "reason": "Interval notation: the smaller end comes first; $-3$ takes a square bracket and $\\dfrac{18}{7}$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $-5 < 7 - 3x \\le 22$.",
            "lines": [
              {
                "step": "Solve $-5 < 7 - 3x \\le 22$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-12 < -3x \\le 15$",
                "reason": "Solving a chain: $7$ is taken from all three parts, which is adding $-7$ to each part, and adding the same number to each part keeps both signs as they are."
              },
              {
                "step": "$4 > x \\ge -5$",
                "reason": "Solving a chain: all three parts are divided by $-3$, which is multiplying each by the negative number $-\\dfrac{1}{3}$, so both signs are reversed."
              },
              {
                "step": "$-5 \\le x < 4$",
                "reason": "Solving a chain: the chain read from right to left says the same with each sign turned round, so the smaller end is written first."
              },
              {
                "step": "$[-5, 4)$",
                "reason": "Interval notation: the smaller end comes first; $-5$ takes a square bracket and $4$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2 \\le 8 - 2x < 20$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-6, 3]",
              "lines": [
                {
                  "step": "Solve $2 \\le 8 - 2x < 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6 \\le -2x < 12$",
                  "reason": "Solving a chain: $8$ is taken from all three parts, which is adding $-8$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 \\ge x > -6$",
                  "reason": "Solving a chain: all three parts are divided by $-2$, which is multiplying each by the negative number $-\\dfrac{1}{2}$, so both signs are reversed."
                },
                {
                  "step": "$-6 < x \\le 3$",
                  "reason": "Solving a chain: the chain read from right to left says the same with each sign turned round, so the smaller end is written first."
                },
                {
                  "step": "$(-6, 3]$",
                  "reason": "Interval notation: the smaller end comes first; $-6$ takes a round bracket and $3$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $-1 < 11 - 4x < 23$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-3, 3)",
              "lines": [
                {
                  "step": "Solve $-1 < 11 - 4x < 23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-12 < -4x < 12$",
                  "reason": "Solving a chain: $11$ is taken from all three parts, which is adding $-11$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 > x > -3$",
                  "reason": "Solving a chain: all three parts are divided by $-4$, which is multiplying each by the negative number $-\\dfrac{1}{4}$, so both signs are reversed."
                },
                {
                  "step": "$-3 < x < 3$",
                  "reason": "Solving a chain: the chain read from right to left says the same with each sign turned round, so the smaller end is written first."
                },
                {
                  "step": "$(-3, 3)$",
                  "reason": "Interval notation: the smaller end comes first; $-3$ takes a round bracket and $3$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $-6 \\le 4 - 5x \\le 19$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-3, 2]",
              "lines": [
                {
                  "step": "Solve $-6 \\le 4 - 5x \\le 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-10 \\le -5x \\le 15$",
                  "reason": "Solving a chain: $4$ is taken from all three parts, which is adding $-4$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$2 \\ge x \\ge -3$",
                  "reason": "Solving a chain: all three parts are divided by $-5$, which is multiplying each by the negative number $-\\dfrac{1}{5}$, so both signs are reversed."
                },
                {
                  "step": "$-3 \\le x \\le 2$",
                  "reason": "Solving a chain: the chain read from right to left says the same with each sign turned round, so the smaller end is written first."
                },
                {
                  "step": "$[-3, 2]$",
                  "reason": "Interval notation: the smaller end comes first; $-3$ takes a square bracket and $2$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2x + 3 < 3x + 1 \\le 5x - 9$.",
            "lines": [
              {
                "step": "Solve $2x + 3 < 3x + 1 \\le 5x - 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The chain splits into $2x + 3 < 3x + 1$ and $3x + 1 \\le 5x - 9$.",
                "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
              },
              {
                "step": "$2 < x$",
                "reason": "Adding the same number: taking $2x$ and $1$ from both sides leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
              },
              {
                "step": "$10 \\le 2x$",
                "reason": "Adding the same number: taking $3x$ from both sides and adding $9$ collects the terms in $x$ on the right of the second inequality, so its sign stays as it is."
              },
              {
                "step": "$5 \\le x$",
                "reason": "Multiplying by a positive number: dividing both sides by $2$ is multiplying by $\\dfrac{1}{2}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "$x \\ge 5$",
                "reason": "Solution of an inequality: a solution of the chain makes both inequalities true; both put $x$ above a number, and every number with $x \\ge 5$ also lies above the smaller one, $2$, so the larger end, $5$, decides."
              },
              {
                "step": "$[5, \\infty)$",
                "reason": "Interval notation: the end $5$ is a solution, so a square bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $4x + 9 < 5x - 1 \\le 7x + 5$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(10, inf)",
              "lines": [
                {
                  "step": "Solve $4x + 9 < 5x - 1 \\le 7x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain splits into $4x + 9 < 5x - 1$ and $5x - 1 \\le 7x + 5$.",
                  "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
                },
                {
                  "step": "$10 < x$",
                  "reason": "Adding the same number: taking $4x$ from both sides and adding $1$ leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
                },
                {
                  "step": "$-6 \\le 2x$",
                  "reason": "Adding the same number: taking $5x$ and $5$ from both sides collects the terms in $x$ on the right of the second inequality, so its sign stays as it is."
                },
                {
                  "step": "$-3 \\le x$",
                  "reason": "Multiplying by a positive number: dividing both sides by $2$ is multiplying by $\\dfrac{1}{2}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$x > 10$",
                  "reason": "Solution of an inequality: a solution of the chain makes both inequalities true; both put $x$ above a number, and every number with $x > 10$ also lies above the smaller one, $-3$, so the larger end, $10$, decides."
                },
                {
                  "step": "$(10, \\infty)$",
                  "reason": "Interval notation: the end $10$ is left out, so a round bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
                }
              ]
            },
            {
              "prompt": "Solve $3x - 4 \\le 4x + 2 < 7x - 10$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(4, inf)",
              "lines": [
                {
                  "step": "Solve $3x - 4 \\le 4x + 2 < 7x - 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain splits into $3x - 4 \\le 4x + 2$ and $4x + 2 < 7x - 10$.",
                  "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
                },
                {
                  "step": "$-6 \\le x$",
                  "reason": "Adding the same number: taking $3x$ and $2$ from both sides leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
                },
                {
                  "step": "$12 < 3x$",
                  "reason": "Adding the same number: taking $4x$ from both sides and adding $10$ collects the terms in $x$ on the right of the second inequality, so its sign stays as it is."
                },
                {
                  "step": "$4 < x$",
                  "reason": "Multiplying by a positive number: dividing both sides by $3$ is multiplying by $\\dfrac{1}{3}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$x > 4$",
                  "reason": "Solution of an inequality: a solution of the chain makes both inequalities true; both put $x$ above a number, and every number with $x > 4$ also lies above the smaller one, $-6$, so the larger end, $4$, decides."
                },
                {
                  "step": "$(4, \\infty)$",
                  "reason": "Interval notation: the end $4$ is left out, so a round bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
                }
              ]
            },
            {
              "prompt": "Solve $2x - 5 \\le 3x + 3 < 7x + 11$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-2, inf)",
              "lines": [
                {
                  "step": "Solve $2x - 5 \\le 3x + 3 < 7x + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The chain splits into $2x - 5 \\le 3x + 3$ and $3x + 3 < 7x + 11$.",
                  "reason": "Solving a chain: the letter stands in more than one part, so the chain is split into its two inequalities, and a solution of the chain is a solution of both."
                },
                {
                  "step": "$-8 \\le x$",
                  "reason": "Adding the same number: taking $2x$ and $3$ from both sides leaves $x$ alone on the right of the first inequality, so its sign stays as it is."
                },
                {
                  "step": "$-8 < 4x$",
                  "reason": "Adding the same number: taking $3x$ and $11$ from both sides collects the terms in $x$ on the right of the second inequality, so its sign stays as it is."
                },
                {
                  "step": "$-2 < x$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "$x > -2$",
                  "reason": "Solution of an inequality: a solution of the chain makes both inequalities true; both put $x$ above a number, and every number with $x > -2$ also lies above the smaller one, $-8$, so the larger end, $-2$, decides."
                },
                {
                  "step": "$(-2, \\infty)$",
                  "reason": "Interval notation: the end $-2$ is left out, so a round bracket stands beside it, and the solutions go on without end to the right, so $\\infty$ closes it with a round bracket."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t130-k2",
      "forms": [
        {
          "example": {
            "problem": "Find how many integers $x$ satisfy $-6 < 3x + 4 \\le 20$.",
            "lines": [
              {
                "step": "Find how many integers $x$ satisfy $-6 < 3x + 4 \\le 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-10 < 3x \\le 16$",
                "reason": "Solving a chain: $4$ is taken from all three parts, which is adding $-4$ to each part, and adding the same number to each part keeps both signs as they are."
              },
              {
                "step": "$-\\dfrac{10}{3} < x \\le \\dfrac{16}{3}$",
                "reason": "Solving a chain: all three parts are divided by $3$, which is multiplying each by the positive number $\\dfrac{1}{3}$, so both signs stay as they are."
              },
              {
                "step": "The integers that are solutions are $-3, -2, \\dots, 5$.",
                "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $-3$, to the greatest, $5$."
              },
              {
                "step": "$5 - (-3) + 1 = 9$",
                "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = -3$ and $n = 5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many integers $x$ satisfy $1 \\le 2x + 7 < 30$.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find how many integers $x$ satisfy $1 \\le 2x + 7 < 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-6 \\le 2x < 23$",
                  "reason": "Solving a chain: $7$ is taken from all three parts, which is adding $-7$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$-3 \\le x < \\dfrac{23}{2}$",
                  "reason": "Solving a chain: all three parts are divided by $2$, which is multiplying each by the positive number $\\dfrac{1}{2}$, so both signs stay as they are."
                },
                {
                  "step": "The integers that are solutions are $-3, -2, \\dots, 11$.",
                  "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $-3$, to the greatest, $11$."
                },
                {
                  "step": "$11 - (-3) + 1 = 15$",
                  "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = -3$ and $n = 11$."
                }
              ]
            },
            {
              "prompt": "Find how many integers $x$ satisfy $-14 < 4x - 2 < 19$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find how many integers $x$ satisfy $-14 < 4x - 2 < 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-12 < 4x < 21$",
                  "reason": "Solving a chain: $2$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$-3 < x < \\dfrac{21}{4}$",
                  "reason": "Solving a chain: all three parts are divided by $4$, which is multiplying each by the positive number $\\dfrac{1}{4}$, so both signs stay as they are."
                },
                {
                  "step": "The integers that are solutions are $-2, -1, \\dots, 5$.",
                  "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $-2$, to the greatest, $5$."
                },
                {
                  "step": "$5 - (-2) + 1 = 8$",
                  "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = -2$ and $n = 5$."
                }
              ]
            },
            {
              "prompt": "Find how many integers $x$ satisfy $5 \\le 5x - 10 \\le 61$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find how many integers $x$ satisfy $5 \\le 5x - 10 \\le 61$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15 \\le 5x \\le 71$",
                  "reason": "Solving a chain: $10$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 \\le x \\le \\dfrac{71}{5}$",
                  "reason": "Solving a chain: all three parts are divided by $5$, which is multiplying each by the positive number $\\dfrac{1}{5}$, so both signs stay as they are."
                },
                {
                  "step": "The integers that are solutions are $3, 4, \\dots, 14$.",
                  "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $3$, to the greatest, $14$."
                },
                {
                  "step": "$14 - 3 + 1 = 12$",
                  "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = 3$ and $n = 14$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest number of boxes a lift can carry, given that it carries at most 680 kg, a worker of 80 kg rides in it, and each box weighs 45 kg.",
            "lines": [
              {
                "step": "Find the greatest number of boxes a lift can carry, given that it carries at most 680 kg, a worker of 80 kg rides in it, and each box weighs 45 kg.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $x$ boxes, $45x + 80 \\le 680$.",
                "reason": "Writing a sentence as an equation: $45x$ stands for the boxes, $+ 80$ for the worker, and the words \"at most\" give the sign $\\le$."
              },
              {
                "step": "$45x \\le 600$",
                "reason": "Adding the same number: $80$ is taken from both sides, which is adding $-80$ to both sides, so the sign stays as it is."
              },
              {
                "step": "$x \\le \\dfrac{40}{3}$",
                "reason": "Multiplying by a positive number: dividing both sides by $45$ is multiplying by $\\dfrac{1}{45}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "The greatest whole number at most $\\dfrac{40}{3}$ is $13$.",
                "reason": "Solution of an inequality: the solutions are the numbers at most $\\dfrac{40}{3}$, and the number of boxes is a whole number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest number of tickets that can be bought with 100 euros, given that each ticket costs 12 euros and a booking fee of 7 euros is added once.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the greatest number of tickets that can be bought with 100 euros, given that each ticket costs 12 euros and a booking fee of 7 euros is added once.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ tickets, $12x + 7 \\le 100$.",
                  "reason": "Writing a sentence as an equation: $12x$ stands for the tickets and $+ 7$ for the fee; \"can be bought with 100 euros\" means the total is at most $100$, so the sign is $\\le$."
                },
                {
                  "step": "$12x \\le 93$",
                  "reason": "Adding the same number: $7$ is taken from both sides, which is adding $-7$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\le \\dfrac{31}{4}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $12$ is multiplying by $\\dfrac{1}{12}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "The greatest whole number at most $\\dfrac{31}{4}$ is $7$.",
                  "reason": "Solution of an inequality: the solutions are the numbers at most $\\dfrac{31}{4}$, and the number of tickets is a whole number."
                }
              ]
            },
            {
              "prompt": "Find the least whole number of minutes after which a tank holds more than 70 litres, given that it holds 15 litres at the start and water flows in at 4 litres a minute.",
              "form": "Answer as an integer.",
              "answer": "14",
              "lines": [
                {
                  "step": "Find the least whole number of minutes after which a tank holds more than 70 litres, given that it holds 15 litres at the start and water flows in at 4 litres a minute.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ minutes, $4x + 15 > 70$.",
                  "reason": "Writing a sentence as an equation: $4x$ stands for the water that flows in, $+ 15$ for the water at the start, and the words \"more than\" give the sign $>$."
                },
                {
                  "step": "$4x > 55$",
                  "reason": "Adding the same number: $15$ is taken from both sides, which is adding $-15$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x > \\dfrac{55}{4}$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "The least whole number above $\\dfrac{55}{4}$ is $14$.",
                  "reason": "Solution of an inequality: the solutions are the numbers above $\\dfrac{55}{4}$, and the number of minutes is a whole number."
                }
              ]
            },
            {
              "prompt": "Find the least whole number of weeks after which Mia has at least 150 euros, given that she has 54 euros now and saves 8 euros each week.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the least whole number of weeks after which Mia has at least 150 euros, given that she has 54 euros now and saves 8 euros each week.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ weeks, $8x + 54 \\ge 150$.",
                  "reason": "Writing a sentence as an equation: $8x$ stands for the savings, $+ 54$ for the money she has now, and the words \"at least\" give the sign $\\ge$."
                },
                {
                  "step": "$8x \\ge 96$",
                  "reason": "Adding the same number: $54$ is taken from both sides, which is adding $-54$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\ge 12$",
                  "reason": "Multiplying by a positive number: dividing both sides by $8$ is multiplying by $\\dfrac{1}{8}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "The least whole number at least $12$ is $12$.",
                  "reason": "Solution of an inequality: the solutions are the numbers at least $12$, and the number of weeks is a whole number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest number of 9-euro tins of paint Sam can buy with 120 euros and still have at least 30 euros left.",
            "lines": [
              {
                "step": "Find the greatest number of 9-euro tins of paint Sam can buy with 120 euros and still have at least 30 euros left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $x$ tins, $120 - 9x \\ge 30$.",
                "reason": "Writing a sentence as an equation: $120$ stands for the money he has, $- 9x$ for the tins, and the words \"at least\" give the sign $\\ge$."
              },
              {
                "step": "$-9x \\ge -90$",
                "reason": "Adding the same number: $120$ is taken from both sides, which is adding $-120$ to both sides, so the sign stays as it is."
              },
              {
                "step": "$x \\le 10$",
                "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-9$ is multiplying by $-\\dfrac{1}{9}$, which is negative, so $\\ge$ becomes $\\le$."
              },
              {
                "step": "The greatest whole number at most $10$ is $10$.",
                "reason": "Solution of an inequality: the solutions are the numbers at most $10$, and the number of tins is a whole number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number of minutes a pump can run, given that it takes 35 litres a minute out of a barrel of 500 litres and more than 80 litres must stay in the barrel.",
              "form": "Answer as an integer.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find the greatest whole number of minutes a pump can run, given that it takes 35 litres a minute out of a barrel of 500 litres and more than 80 litres must stay in the barrel.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ minutes, $500 - 35x > 80$.",
                  "reason": "Writing a sentence as an equation: $500$ stands for the water at the start, $- 35x$ for the water taken out, and the words \"more than\" give the sign $>$."
                },
                {
                  "step": "$-35x > -420$",
                  "reason": "Adding the same number: $500$ is taken from both sides, which is adding $-500$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x < 12$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-35$ is multiplying by $-\\dfrac{1}{35}$, which is negative, so $>$ becomes $<$."
                },
                {
                  "step": "The greatest whole number below $12$ is $11$.",
                  "reason": "Solution of an inequality: the solutions are the numbers below $12$, and the number of minutes is a whole number."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number of hours a phone can play music, given that its battery starts at 100 per cent, playing uses 6 per cent an hour, and at least 25 per cent must be left.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the greatest whole number of hours a phone can play music, given that its battery starts at 100 per cent, playing uses 6 per cent an hour, and at least 25 per cent must be left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ hours, $100 - 6x \\ge 25$.",
                  "reason": "Writing a sentence as an equation: $100$ stands for the full battery, $- 6x$ for what playing uses, and the words \"at least\" give the sign $\\ge$."
                },
                {
                  "step": "$-6x \\ge -75$",
                  "reason": "Adding the same number: $100$ is taken from both sides, which is adding $-100$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\le \\dfrac{25}{2}$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-6$ is multiplying by $-\\dfrac{1}{6}$, which is negative, so $\\ge$ becomes $\\le$."
                },
                {
                  "step": "The greatest whole number at most $\\dfrac{25}{2}$ is $12$.",
                  "reason": "Solution of an inequality: the solutions are the numbers at most $\\dfrac{25}{2}$, and the number of hours is a whole number."
                }
              ]
            },
            {
              "prompt": "Find the greatest number of trips a boat can make, given that it has 60 litres of fuel, each trip uses 5 litres, and more than 12 litres must be left.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the greatest number of trips a boat can make, given that it has 60 litres of fuel, each trip uses 5 litres, and more than 12 litres must be left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ trips, $60 - 5x > 12$.",
                  "reason": "Writing a sentence as an equation: $60$ stands for the fuel at the start, $- 5x$ for the fuel the trips use, and the words \"more than\" give the sign $>$."
                },
                {
                  "step": "$-5x > -48$",
                  "reason": "Adding the same number: $60$ is taken from both sides, which is adding $-60$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x < \\dfrac{48}{5}$",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-5$ is multiplying by $-\\dfrac{1}{5}$, which is negative, so $>$ becomes $<$."
                },
                {
                  "step": "The greatest whole number below $\\dfrac{48}{5}$ is $9$.",
                  "reason": "Solution of an inequality: the solutions are the numbers below $\\dfrac{48}{5}$, and the number of trips is a whole number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t130-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $3x - 4 \\ge 5$ and sketch its solutions on a number line.",
            "lines": [
              {
                "step": "Solve $3x - 4 \\ge 5$ and sketch its solutions on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x \\ge 9$",
                "reason": "Adding the same number: $4$ is added to both sides, so the sign stays as it is."
              },
              {
                "step": "$x \\ge 3$",
                "reason": "Multiplying by a positive number: dividing both sides by $3$ is multiplying by $\\dfrac{1}{3}$, which is positive, so the sign stays as it is."
              },
              {
                "step": "The end $3$ takes a filled dot, since $3$ is a solution.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
              },
              {
                "step": "The line is shaded to the right of $3$.",
                "reason": "Solution of an inequality: every number at least $3$ makes $x \\ge 3$ true, and no other number does.",
                "figure": {
                  "file": "linear-inequalities-in-one-variable-1.svg",
                  "alt": "A number line with a filled dot at 3, and the line shaded to the right of 3."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x + 7 < 3$ and sketch its solutions on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-2$",
                  "shaded to the left of $-2$"
                ]
              },
              "lines": [
                {
                  "step": "Solve $2x + 7 < 3$ and sketch its solutions on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x < -4$",
                  "reason": "Adding the same number: $7$ is taken from both sides, which is adding $-7$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x < -2$",
                  "reason": "Multiplying by a positive number: dividing both sides by $2$ is multiplying by $\\dfrac{1}{2}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "The end $-2$ takes an open circle, since $-2$ is not a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the left of $-2$.",
                  "reason": "Solution of an inequality: every number less than $-2$ makes $x < -2$ true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-2.svg",
                    "alt": "A number line with an open circle at −2, and the line shaded to the left of −2."
                  }
                }
              ]
            },
            {
              "prompt": "Solve $4x + 1 > -11$ and sketch its solutions on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-3$",
                  "shaded to the right of $-3$"
                ]
              },
              "lines": [
                {
                  "step": "Solve $4x + 1 > -11$ and sketch its solutions on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x > -12$",
                  "reason": "Adding the same number: $1$ is taken from both sides, which is adding $-1$ to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x > -3$",
                  "reason": "Multiplying by a positive number: dividing both sides by $4$ is multiplying by $\\dfrac{1}{4}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "The end $-3$ takes an open circle, since $-3$ is not a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the right of $-3$.",
                  "reason": "Solution of an inequality: every number greater than $-3$ makes $x > -3$ true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-3.svg",
                    "alt": "A number line with an open circle at −3, and the line shaded to the right of −3."
                  }
                }
              ]
            },
            {
              "prompt": "Solve $5x - 6 \\le 4$ and sketch its solutions on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $2$",
                  "shaded to the left of $2$"
                ]
              },
              "lines": [
                {
                  "step": "Solve $5x - 6 \\le 4$ and sketch its solutions on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x \\le 10$",
                  "reason": "Adding the same number: $6$ is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "$x \\le 2$",
                  "reason": "Multiplying by a positive number: dividing both sides by $5$ is multiplying by $\\dfrac{1}{5}$, which is positive, so the sign stays as it is."
                },
                {
                  "step": "The end $2$ takes a filled dot, since $2$ is a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the left of $2$.",
                  "reason": "Solution of an inequality: every number at most $2$ makes $x \\le 2$ true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-4.svg",
                    "alt": "A number line with a filled dot at 2, and the line shaded to the left of 2."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the inequality in $x$ whose solutions the number line in figure A shows.",
            "figure": {
              "file": "linear-inequalities-in-one-variable-10.svg",
              "alt": "A number line with an open circle at 1, and the line shaded to the right of 1."
            },
            "lines": [
              {
                "step": "Write the inequality in $x$ whose solutions the number line in figure A shows.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The end $1$ has an open circle, so $1$ is not a solution.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
              },
              {
                "step": "The shading runs to the right of $1$, so the solutions are the numbers on that side of it, with $1$ itself fixed by line 2.",
                "reason": "Solution of an inequality: the shaded numbers are the numbers that make the inequality true."
              },
              {
                "step": "$x > 1$",
                "reason": "Strict and nonstrict inequality: a filled dot allows equality, so the sign is nonstrict, and an open circle rules it out, so the sign is strict."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the inequality in $x$ whose solutions the number line in figure B shows.",
              "figure": {
                "file": "linear-inequalities-in-one-variable-11.svg",
                "alt": "A number line with a filled dot at 0, and the line shaded to the left of 0."
              },
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "x <= 0",
              "lines": [
                {
                  "step": "Write the inequality in $x$ whose solutions the number line in figure B shows.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $0$ has a filled dot, so $0$ is a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The shading runs to the left of $0$, so the solutions are the numbers on that side of it, with $0$ itself fixed by line 2.",
                  "reason": "Solution of an inequality: the shaded numbers are the numbers that make the inequality true."
                },
                {
                  "step": "$x \\le 0$",
                  "reason": "Strict and nonstrict inequality: a filled dot allows equality, so the sign is nonstrict, and an open circle rules it out, so the sign is strict."
                }
              ]
            },
            {
              "prompt": "Write the inequality in $x$ whose solutions the number line in figure C shows.",
              "figure": {
                "file": "linear-inequalities-in-one-variable-12.svg",
                "alt": "A number line with a filled dot at −2 and an open circle at 3, and the line shaded between −2 and 3."
              },
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-2 <= x < 3",
              "lines": [
                {
                  "step": "Write the inequality in $x$ whose solutions the number line in figure C shows.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-2$ has a filled dot, so $-2$ is a solution, and the end $3$ has an open circle, so $3$ is not a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The shading runs from $-2$ to $3$, so the solutions lie between them.",
                  "reason": "Solution of an inequality: the shaded numbers are the numbers that make the inequality true."
                },
                {
                  "step": "$-2 \\le x < 3$",
                  "reason": "Strict and nonstrict inequality: each filled dot takes $\\le$ and each open circle takes $<$, with the smaller end on the left."
                }
              ]
            },
            {
              "prompt": "Write the inequality in $x$ whose solutions the number line in figure D shows.",
              "figure": {
                "file": "linear-inequalities-in-one-variable-13.svg",
                "alt": "A number line with an open circle at −5 and an open circle at −2, and the line shaded between −5 and −2."
              },
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-5 < x < -2",
              "lines": [
                {
                  "step": "Write the inequality in $x$ whose solutions the number line in figure D shows.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-5$ has an open circle, so $-5$ is not a solution, and the end $-2$ has an open circle, so $-2$ is not a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The shading runs from $-5$ to $-2$, so the solutions lie between them.",
                  "reason": "Solution of an inequality: the shaded numbers are the numbers that make the inequality true."
                },
                {
                  "step": "$-5 < x < -2$",
                  "reason": "Strict and nonstrict inequality: each filled dot takes $\\le$ and each open circle takes $<$, with the smaller end on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $-5 \\le 2x + 1 < 9$ and sketch its solutions on a number line.",
            "lines": [
              {
                "step": "Solve $-5 \\le 2x + 1 < 9$ and sketch its solutions on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-6 \\le 2x < 8$",
                "reason": "Solving a chain: $1$ is taken from all three parts, which is adding $-1$ to each part, and adding the same number to each part keeps both signs as they are."
              },
              {
                "step": "$-3 \\le x < 4$",
                "reason": "Solving a chain: all three parts are divided by $2$, which is multiplying each by the positive number $\\dfrac{1}{2}$, so both signs stay as they are."
              },
              {
                "step": "The end $-3$ takes a filled dot, since $-3$ is a solution, and the end $4$ takes an open circle, since $4$ is not a solution.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
              },
              {
                "step": "The line is shaded between $-3$ and $4$.",
                "reason": "Solution of an inequality: every number at least $-3$ and less than $4$ makes the chain true, and no other number does.",
                "figure": {
                  "file": "linear-inequalities-in-one-variable-19.svg",
                  "alt": "A number line with a filled dot at −3 and an open circle at 4, and the line shaded between −3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $1 < 3x - 2 \\le 10$ and sketch its solutions on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $1$",
                  "filled dot at $4$",
                  "shaded between $1$ and $4$"
                ]
              },
              "lines": [
                {
                  "step": "Solve $1 < 3x - 2 \\le 10$ and sketch its solutions on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3 < 3x \\le 12$",
                  "reason": "Solving a chain: $2$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$1 < x \\le 4$",
                  "reason": "Solving a chain: all three parts are divided by $3$, which is multiplying each by the positive number $\\dfrac{1}{3}$, so both signs stay as they are."
                },
                {
                  "step": "The end $1$ takes an open circle, since $1$ is not a solution, and the end $4$ takes a filled dot, since $4$ is a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded between $1$ and $4$.",
                  "reason": "Solution of an inequality: every number greater than $1$ and at most $4$ makes the chain true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-20.svg",
                    "alt": "A number line with an open circle at 1 and a filled dot at 4, and the line shaded between 1 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Solve $-10 \\le 4x + 2 \\le 6$ and sketch its solutions on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $-3$",
                  "filled dot at $1$",
                  "shaded between $-3$ and $1$"
                ]
              },
              "lines": [
                {
                  "step": "Solve $-10 \\le 4x + 2 \\le 6$ and sketch its solutions on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-12 \\le 4x \\le 4$",
                  "reason": "Solving a chain: $2$ is taken from all three parts, which is adding $-2$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$-3 \\le x \\le 1$",
                  "reason": "Solving a chain: all three parts are divided by $4$, which is multiplying each by the positive number $\\dfrac{1}{4}$, so both signs stay as they are."
                },
                {
                  "step": "The end $-3$ takes a filled dot, since $-3$ is a solution, and the end $1$ takes a filled dot, since $1$ is a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded between $-3$ and $1$.",
                  "reason": "Solution of an inequality: every number at least $-3$ and at most $1$ makes the chain true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-21.svg",
                    "alt": "A number line with a filled dot at −3 and a filled dot at 1, and the line shaded between −3 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Solve $-1 < 5x + 4 < 19$ and sketch its solutions on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-1$",
                  "open circle at $3$",
                  "shaded between $-1$ and $3$"
                ]
              },
              "lines": [
                {
                  "step": "Solve $-1 < 5x + 4 < 19$ and sketch its solutions on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-5 < 5x < 15$",
                  "reason": "Solving a chain: $4$ is taken from all three parts, which is adding $-4$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$-1 < x < 3$",
                  "reason": "Solving a chain: all three parts are divided by $5$, which is multiplying each by the positive number $\\dfrac{1}{5}$, so both signs stay as they are."
                },
                {
                  "step": "The end $-1$ takes an open circle, since $-1$ is not a solution, and the end $3$ takes an open circle, since $3$ is not a solution.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded between $-1$ and $3$.",
                  "reason": "Solution of an inequality: every number greater than $-1$ and less than $3$ makes the chain true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-22.svg",
                    "alt": "A number line with an open circle at −1 and an open circle at 3, and the line shaded between −1 and 3."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t130-k4",
      "forms": [
        {
          "example": {
            "problem": "Solve $5 < 2\\sqrt{x} + 1 < 13$.",
            "lines": [
              {
                "step": "Solve $5 < 2\\sqrt{x} + 1 < 13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4 < 2\\sqrt{x} < 12$",
                "reason": "Solving a chain: $1$ is taken from all three parts, which is adding $-1$ to each part, and adding the same number to each part keeps both signs as they are."
              },
              {
                "step": "$2 < \\sqrt{x} < 6$",
                "reason": "Solving a chain: all three parts are divided by $2$, which is multiplying each by the positive number $\\dfrac{1}{2}$, so both signs stay as they are."
              },
              {
                "step": "$4 < x < 36$",
                "reason": "Powers and roots of positive numbers keep the order: $2$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
              },
              {
                "step": "$(4, 36)$",
                "reason": "Interval notation: the smaller end comes first; $4$ takes a round bracket and $36$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $7 \\le 3\\sqrt{x} - 2 < 16$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[9, 36)",
              "lines": [
                {
                  "step": "Solve $7 \\le 3\\sqrt{x} - 2 < 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9 \\le 3\\sqrt{x} < 18$",
                  "reason": "Solving a chain: $2$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 \\le \\sqrt{x} < 6$",
                  "reason": "Solving a chain: all three parts are divided by $3$, which is multiplying each by the positive number $\\dfrac{1}{3}$, so both signs stay as they are."
                },
                {
                  "step": "$9 \\le x < 36$",
                  "reason": "Powers and roots of positive numbers keep the order: $3$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
                },
                {
                  "step": "$[9, 36)$",
                  "reason": "Interval notation: the smaller end comes first; $9$ takes a square bracket and $36$ a round bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $1 < 4\\sqrt{x} - 3 \\le 17$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(1, 25]",
              "lines": [
                {
                  "step": "Solve $1 < 4\\sqrt{x} - 3 \\le 17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4 < 4\\sqrt{x} \\le 20$",
                  "reason": "Solving a chain: $3$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$1 < \\sqrt{x} \\le 5$",
                  "reason": "Solving a chain: all three parts are divided by $4$, which is multiplying each by the positive number $\\dfrac{1}{4}$, so both signs stay as they are."
                },
                {
                  "step": "$1 < x \\le 25$",
                  "reason": "Powers and roots of positive numbers keep the order: $1$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
                },
                {
                  "step": "$(1, 25]$",
                  "reason": "Interval notation: the smaller end comes first; $1$ takes a round bracket and $25$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            },
            {
              "prompt": "Solve $5 \\le 2\\sqrt{x} + 3 \\le 12$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[1, 81/4]",
              "lines": [
                {
                  "step": "Solve $5 \\le 2\\sqrt{x} + 3 \\le 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2 \\le 2\\sqrt{x} \\le 9$",
                  "reason": "Solving a chain: $3$ is taken from all three parts, which is adding $-3$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$1 \\le \\sqrt{x} \\le \\dfrac{9}{2}$",
                  "reason": "Solving a chain: all three parts are divided by $2$, which is multiplying each by the positive number $\\dfrac{1}{2}$, so both signs stay as they are."
                },
                {
                  "step": "$1 \\le x \\le \\dfrac{81}{4}$",
                  "reason": "Powers and roots of positive numbers keep the order: $1$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
                },
                {
                  "step": "$[1, \\dfrac{81}{4}]$",
                  "reason": "Interval notation: the smaller end comes first; $1$ takes a square bracket and $\\dfrac{81}{4}$ a square bracket, since a square bracket takes its end in and a round one leaves it out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many integers $x$ satisfy $3 < 2\\sqrt{x} - 1 \\le 13$.",
            "lines": [
              {
                "step": "Find how many integers $x$ satisfy $3 < 2\\sqrt{x} - 1 \\le 13$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4 < 2\\sqrt{x} \\le 14$",
                "reason": "Solving a chain: $1$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
              },
              {
                "step": "$2 < \\sqrt{x} \\le 7$",
                "reason": "Solving a chain: all three parts are divided by $2$, which is multiplying each by the positive number $\\dfrac{1}{2}$, so both signs stay as they are."
              },
              {
                "step": "$4 < x \\le 49$",
                "reason": "Powers and roots of positive numbers keep the order: $2$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
              },
              {
                "step": "The integers that are solutions are $5, 6, \\dots, 49$.",
                "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $5$, to the greatest, $49$."
              },
              {
                "step": "$49 - 5 + 1 = 45$",
                "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = 5$ and $n = 49$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many integers $x$ satisfy $2 \\le 3\\sqrt{x} - 4 < 20$.",
              "form": "Answer as an integer.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find how many integers $x$ satisfy $2 \\le 3\\sqrt{x} - 4 < 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6 \\le 3\\sqrt{x} < 24$",
                  "reason": "Solving a chain: $4$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$2 \\le \\sqrt{x} < 8$",
                  "reason": "Solving a chain: all three parts are divided by $3$, which is multiplying each by the positive number $\\dfrac{1}{3}$, so both signs stay as they are."
                },
                {
                  "step": "$4 \\le x < 64$",
                  "reason": "Powers and roots of positive numbers keep the order: $2$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
                },
                {
                  "step": "The integers that are solutions are $4, 5, \\dots, 63$.",
                  "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $4$, to the greatest, $63$."
                },
                {
                  "step": "$63 - 4 + 1 = 60$",
                  "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = 4$ and $n = 63$."
                }
              ]
            },
            {
              "prompt": "Find how many integers $x$ satisfy $14 < 4\\sqrt{x} + 2 < 26$.",
              "form": "Answer as an integer.",
              "answer": "26",
              "lines": [
                {
                  "step": "Find how many integers $x$ satisfy $14 < 4\\sqrt{x} + 2 < 26$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12 < 4\\sqrt{x} < 24$",
                  "reason": "Solving a chain: $2$ is taken from all three parts, which is adding $-2$ to each part, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 < \\sqrt{x} < 6$",
                  "reason": "Solving a chain: all three parts are divided by $4$, which is multiplying each by the positive number $\\dfrac{1}{4}$, so both signs stay as they are."
                },
                {
                  "step": "$9 < x < 36$",
                  "reason": "Powers and roots of positive numbers keep the order: $3$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
                },
                {
                  "step": "The integers that are solutions are $10, 11, \\dots, 35$.",
                  "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $10$, to the greatest, $35$."
                },
                {
                  "step": "$35 - 10 + 1 = 26$",
                  "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = 10$ and $n = 35$."
                }
              ]
            },
            {
              "prompt": "Find how many integers $x$ satisfy $11 \\le 5\\sqrt{x} - 4 \\le 31$.",
              "form": "Answer as an integer.",
              "answer": "41",
              "lines": [
                {
                  "step": "Find how many integers $x$ satisfy $11 \\le 5\\sqrt{x} - 4 \\le 31$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15 \\le 5\\sqrt{x} \\le 35$",
                  "reason": "Solving a chain: $4$ is added to all three parts, and adding the same number to each part keeps both signs as they are."
                },
                {
                  "step": "$3 \\le \\sqrt{x} \\le 7$",
                  "reason": "Solving a chain: all three parts are divided by $5$, which is multiplying each by the positive number $\\dfrac{1}{5}$, so both signs stay as they are."
                },
                {
                  "step": "$9 \\le x \\le 49$",
                  "reason": "Powers and roots of positive numbers keep the order: $3$ is positive, so all three parts are positive, and squaring each keeps both signs as they are."
                },
                {
                  "step": "The integers that are solutions are $9, 10, \\dots, 49$.",
                  "reason": "Solution of an inequality: these are the integers that make the chain true, from the least integer allowed, $9$, to the greatest, $49$."
                },
                {
                  "step": "$49 - 9 + 1 = 41$",
                  "reason": "Solution of an inequality: for integers $m \\le n$, the integers from $m$ to $n$, both taken in, number $n - m + 1$; here $m = 9$ and $n = 49$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t130-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $5 - 2x \\ge 3x + 20$, and write that line right.",
            "given": [
              "$5 - 2x \\ge 3x + 20$",
              "$-5x + 5 \\ge 20$",
              "$-5x \\ge 15$",
              "$x \\ge -3$",
              "$[-3, \\infty)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $5 - 2x \\ge 3x + 20$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 divides both sides of line 3 by a negative number and keeps the sign $\\ge$.",
                "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $\\ge$ becomes $\\le$."
              },
              {
                "step": "Doing that to line 3 with the sign reversed gives $x \\le -3$.",
                "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-5$ is multiplying by $-\\dfrac{1}{5}$."
              },
              {
                "step": "Line 4 written right is $x \\le -3$.",
                "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $6 - 4x < 18$, and write that line right.",
              "given": [
                "$6 - 4x < 18$",
                "$-4x < 12$",
                "$x < -3$",
                "$(-\\infty, -3)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x > -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $6 - 4x < 18$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides both sides of line 2 by a negative number and keeps the sign $<$.",
                  "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $<$ becomes $>$."
                },
                {
                  "step": "Doing that to line 2 with the sign reversed gives $x > -3$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-4$ is multiplying by $-\\dfrac{1}{4}$."
                },
                {
                  "step": "Line 3 written right is $x > -3$.",
                  "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $-2 - 3x \\le 4x + 12$, and write that line right.",
              "given": [
                "$-2 - 3x \\le 4x + 12$",
                "$-7x - 2 \\le 12$",
                "$-7x \\le 14$",
                "$x \\le -2$",
                "$(-\\infty, -2]$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x >= -2",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $-2 - 3x \\le 4x + 12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 divides both sides of line 3 by a negative number and keeps the sign $\\le$.",
                  "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $\\le$ becomes $\\ge$."
                },
                {
                  "step": "Doing that to line 3 with the sign reversed gives $x \\ge -2$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-7$ is multiplying by $-\\dfrac{1}{7}$."
                },
                {
                  "step": "Line 4 written right is $x \\ge -2$.",
                  "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $1 - 5x \\ge -14$, and write that line right.",
              "given": [
                "$1 - 5x \\ge -14$",
                "$-5x \\ge -15$",
                "$x \\ge 3$",
                "$[3, \\infty)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x <= 3",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $1 - 5x \\ge -14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 divides both sides of line 2 by a negative number and keeps the sign $\\ge$.",
                  "reason": "A sign is lost: multiplying by a negative number reverses the sign, so $\\ge$ becomes $\\le$."
                },
                {
                  "step": "Doing that to line 2 with the sign reversed gives $x \\le 3$.",
                  "reason": "Multiplying by a negative number reverses the sign: dividing both sides by $-5$ is multiplying by $-\\dfrac{1}{5}$."
                },
                {
                  "step": "Line 3 written right is $x \\le 3$.",
                  "reason": "Each side of the line before it has the same thing done to it, and the sign is reversed."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $5x - 6 > 2x + 9$, and write that line right.",
            "given": [
              "$5x - 6 > 2x + 9$",
              "$3x - 6 > 9$",
              "$3x > 3$",
              "$x > 1$",
              "$(1, \\infty)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $5x - 6 > 2x + 9$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes $6$ from the right of line 2, where $6$ is to be added.",
                "reason": "A sign is lost: the $-6$ on the left is undone by adding $6$ to both sides, so $9$ becomes $15$, not $3$."
              },
              {
                "step": "Doing that to line 2 gives $3x > 15$.",
                "reason": "Adding the same number: $6$ is added to both sides, so the sign stays as it is."
              },
              {
                "step": "Line 3 written right is $3x > 15$.",
                "reason": "Each side of the line before it has the same thing done to it, so the sign stays as it is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $3x + 7 < -8$, and write that line right.",
              "given": [
                "$3x + 7 < -8$",
                "$3x < -1$",
                "$x < -\\dfrac{1}{3}$",
                "$(-\\infty, -\\dfrac{1}{3})$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 3*x < -15",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $3x + 7 < -8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds $7$ to the right of line 1, where $7$ is to be taken away.",
                  "reason": "A sign is lost: the $+7$ on the left is undone by adding $-7$ to both sides, so $-8$ becomes $-15$, not $-1$."
                },
                {
                  "step": "Doing that to line 1 gives $3x < -15$.",
                  "reason": "Adding the same number: $-7$ is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 2 written right is $3x < -15$.",
                  "reason": "Each side of the line before it has the same thing done to it, so the sign stays as it is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $6x + 4 \\le 2x - 12$, and write that line right.",
              "given": [
                "$6x + 4 \\le 2x - 12$",
                "$4x + 4 \\le -12$",
                "$4x \\le -8$",
                "$x \\le -2$",
                "$(-\\infty, -2]$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 4*x <= -16",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $6x + 4 \\le 2x - 12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds $4$ to the right of line 2, where $4$ is to be taken away.",
                  "reason": "A sign is lost: the $+4$ on the left is undone by adding $-4$ to both sides, so $-12$ becomes $-16$, not $-8$."
                },
                {
                  "step": "Doing that to line 2 gives $4x \\le -16$.",
                  "reason": "Adding the same number: $-4$ is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 3 written right is $4x \\le -16$.",
                  "reason": "Each side of the line before it has the same thing done to it, so the sign stays as it is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $4x - 7 \\ge 9$, and write that line right.",
              "given": [
                "$4x - 7 \\ge 9$",
                "$4x \\ge 2$",
                "$x \\ge \\dfrac{1}{2}$",
                "$[\\dfrac{1}{2}, \\infty)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 4*x >= 16",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $4x - 7 \\ge 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $7$ from the right of line 1, where $7$ is to be added.",
                  "reason": "A sign is lost: the $-7$ on the left is undone by adding $7$ to both sides, so $9$ becomes $16$, not $2$."
                },
                {
                  "step": "Doing that to line 1 gives $4x \\ge 16$.",
                  "reason": "Adding the same number: $7$ is added to both sides, so the sign stays as it is."
                },
                {
                  "step": "Line 2 written right is $4x \\ge 16$.",
                  "reason": "Each side of the line before it has the same thing done to it, so the sign stays as it is."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t130-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the solutions of $x \\ge -1$ on a number line.",
            "lines": [
              {
                "step": "Sketch the solutions of $x \\ge -1$ on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The end $-1$ takes a filled dot.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not. A sign with \"or equal\" lets $x$ take the end, and a strict sign does not."
              },
              {
                "step": "The line is shaded to the right of $-1$.",
                "reason": "Solution of an inequality: every number at least $-1$ makes $x \\ge -1$ true, and no other number does.",
                "figure": {
                  "file": "linear-inequalities-in-one-variable-28.svg",
                  "alt": "A number line with a filled dot at −1, and the line shaded to the right of −1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the solutions of $x < 3$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $3$",
                  "shaded to the left of $3$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the solutions of $x < 3$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $3$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not. A sign with \"or equal\" lets $x$ take the end, and a strict sign does not."
                },
                {
                  "step": "The line is shaded to the left of $3$.",
                  "reason": "Solution of an inequality: every number less than $3$ makes $x < 3$ true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-29.svg",
                    "alt": "A number line with an open circle at 3, and the line shaded to the left of 3."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the solutions of $-2 < x \\le 1$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-2$",
                  "filled dot at $1$",
                  "shaded between $-2$ and $1$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the solutions of $-2 < x \\le 1$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-2$ takes an open circle and the end $1$ takes a filled dot.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not. A sign with \"or equal\" lets $x$ take the end, and a strict sign does not."
                },
                {
                  "step": "The line is shaded between $-2$ and $1$.",
                  "reason": "Solution of an inequality: every number greater than $-2$ and at most $1$ makes $-2 < x \\le 1$ true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-30.svg",
                    "alt": "A number line with an open circle at −2 and a filled dot at 1, and the line shaded between −2 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the solutions of $4 > x$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $4$",
                  "shaded to the left of $4$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the solutions of $4 > x$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $4$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not. A sign with \"or equal\" lets $x$ take the end, and a strict sign does not."
                },
                {
                  "step": "The line is shaded to the left of $4$.",
                  "reason": "Solution of an inequality: every number less than $4$ makes $4 > x$ true, and no other number does.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-31.svg",
                    "alt": "A number line with an open circle at 4, and the line shaded to the left of 4."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the numbers of the interval $[2, \\infty)$ on a number line.",
            "lines": [
              {
                "step": "Sketch the numbers of the interval $[2, \\infty)$ on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The interval holds the numbers $x$ with $x \\ge 2$.",
                "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, and $\\infty$ or $-\\infty$ means the numbers go on without end."
              },
              {
                "step": "The end $2$ takes a filled dot.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
              },
              {
                "step": "The line is shaded to the right of $2$.",
                "reason": "Solution of an inequality: the numbers of the interval are the solutions, and they are the shaded part of the line.",
                "figure": {
                  "file": "linear-inequalities-in-one-variable-39.svg",
                  "alt": "A number line with a filled dot at 2, and the line shaded to the right of 2."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the numbers of the interval $(-\\infty, -5)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-5$",
                  "shaded to the left of $-5$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers of the interval $(-\\infty, -5)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The interval holds the numbers $x$ with $x < -5$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, and $\\infty$ or $-\\infty$ means the numbers go on without end."
                },
                {
                  "step": "The end $-5$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the left of $-5$.",
                  "reason": "Solution of an inequality: the numbers of the interval are the solutions, and they are the shaded part of the line.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-40.svg",
                    "alt": "A number line with an open circle at −5, and the line shaded to the left of −5."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the numbers of the interval $(-3, 2]$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-3$",
                  "filled dot at $2$",
                  "shaded between $-3$ and $2$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers of the interval $(-3, 2]$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The interval holds the numbers $x$ with $-3 < x \\le 2$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, and $\\infty$ or $-\\infty$ means the numbers go on without end."
                },
                {
                  "step": "The end $-3$ takes an open circle and the end $2$ takes a filled dot.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded between $-3$ and $2$.",
                  "reason": "Solution of an inequality: the numbers of the interval are the solutions, and they are the shaded part of the line.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-41.svg",
                    "alt": "A number line with an open circle at −3 and a filled dot at 2, and the line shaded between −3 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the numbers of the interval $[-1, 3]$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $-1$",
                  "filled dot at $3$",
                  "shaded between $-1$ and $3$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers of the interval $[-1, 3]$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The interval holds the numbers $x$ with $-1 \\le x \\le 3$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, and $\\infty$ or $-\\infty$ means the numbers go on without end."
                },
                {
                  "step": "The end $-1$ takes a filled dot and the end $3$ takes a filled dot.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is a solution, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded between $-1$ and $3$.",
                  "reason": "Solution of an inequality: the numbers of the interval are the solutions, and they are the shaded part of the line.",
                  "figure": {
                    "file": "linear-inequalities-in-one-variable-42.svg",
                    "alt": "A number line with a filled dot at −1 and a filled dot at 3, and the line shaded between −1 and 3."
                  }
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
