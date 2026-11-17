export default {
  "number": 176,
  "title": "Functions defined in pieces",
  "section": 16,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "578-583"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $f(f(3))$ for $f(x) = \\begin{cases} -2x - 13 & \\text{if } x \\le -4 \\\\ -2x^2 + 2x + 17 & \\text{if } -4 < x \\le -2 \\\\ -5x - 14 & \\text{if } x > -2 \\end{cases}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "45",
    "solution": [
      "Evaluate $f(f(3))$ for $f(x) = \\begin{cases} -2x - 13 & \\text{if } x \\le -4 \\\\ -2x^2 + 2x + 17 & \\text{if } -4 < x \\le -2 \\\\ -5x - 14 & \\text{if } x > -2 \\end{cases}$.",
      "$f(3) = -5 \\cdot 3 - 14 = -29$",
      "$f(f(3)) = f(-29)$",
      "$f(-29) = -2 \\cdot (-29) - 13 = 45$",
      "$f(f(3)) = 45$"
    ]
  },
  "ideas": [
    {
      "name": "Functions defined in pieces",
      "concrete": "For $g(x) = \\begin{cases} 3x & \\text{if } x < 2 \\\\ 8 - x & \\text{if } x \\ge 2 \\end{cases}$, the input $1$ satisfies $x < 2$, so $g(1) = 3 \\cdot 1 = 3$; the input $5$ satisfies $x \\ge 2$, so $g(5) = 8 - 5 = 3$. At $x = 2$ both rules give $6$, so the two pieces meet there.",
      "general": "A **piecewise defined function** gives one rule for each part of its domain, the parts not overlapping: an input uses the one rule whose condition it satisfies. Its graph is drawn piece by piece, with a filled dot at an end the piece holds and an open circle at an end it leaves out. The graph is a **continuous graph** when it can be drawn without lifting the pen: where each rule gives a graph of that kind, this holds exactly when the two rules on either side of each breakpoint give the same value there."
    }
  ],
  "kinds": [
    {
      "id": "t176-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $f(f(1))$ for $f(x) = \\begin{cases} 5x - 20 & \\text{if } x \\le -1 \\\\ x^2 + x + 5 & \\text{if } -1 < x \\le 1 \\\\ 5x + 2 & \\text{if } x > 1 \\end{cases}$.",
            "lines": [
              {
                "step": "Evaluate $f(f(1))$ for $f(x) = \\begin{cases} 5x - 20 & \\text{if } x \\le -1 \\\\ x^2 + x + 5 & \\text{if } -1 < x \\le 1 \\\\ 5x + 2 & \\text{if } x > 1 \\end{cases}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(1) = 1^2 + 1 + 5 = 7$",
                "reason": "Piecewise defined function: $1$ satisfies $-1 < x \\le 1$, so the rule $x^2 + x + 5$ is used."
              },
              {
                "step": "$f(f(1)) = f(7)$",
                "reason": "Composition $f(g(x))$: the inside value $f(1) = 7$ is worked out first."
              },
              {
                "step": "$f(7) = 5 \\cdot 7 + 2 = 37$",
                "reason": "Piecewise defined function: $7$ satisfies $x > 1$, so the rule $5x + 2$ is used."
              },
              {
                "step": "$f(f(1)) = 37$",
                "reason": "Transitive property: the two lines above give the same value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $f(f(0))$ for $f(x) = \\begin{cases} 6x + 5 & \\text{if } x \\le -2 \\\\ x^2 + 6x - 13 & \\text{if } -2 < x < 0 \\\\ -4x - 17 & \\text{if } x \\ge 0 \\end{cases}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-97",
              "lines": [
                {
                  "step": "Evaluate $f(f(0))$ for $f(x) = \\begin{cases} 6x + 5 & \\text{if } x \\le -2 \\\\ x^2 + 6x - 13 & \\text{if } -2 < x < 0 \\\\ -4x - 17 & \\text{if } x \\ge 0 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(0) = -4 \\cdot 0 - 17 = -17$",
                  "reason": "Piecewise defined function: $0$ satisfies $x \\ge 0$, so the rule $-4x - 17$ is used."
                },
                {
                  "step": "$f(f(0)) = f(-17)$",
                  "reason": "Composition $f(g(x))$: the inside value $f(0) = -17$ is worked out first."
                },
                {
                  "step": "$f(-17) = 6 \\cdot (-17) + 5 = -97$",
                  "reason": "Piecewise defined function: $-17$ satisfies $x \\le -2$, so the rule $6x + 5$ is used."
                },
                {
                  "step": "$f(f(0)) = -97$",
                  "reason": "Transitive property: the two lines above give the same value."
                }
              ]
            },
            {
              "prompt": "Evaluate $f(f(6))$ for $f(x) = \\begin{cases} -5x + 17 & \\text{if } x < -2 \\\\ x^2 + 6x + 1 & \\text{if } -2 \\le x \\le 2 \\\\ -\\dfrac{1}{2}x - 7 & \\text{if } x > 2 \\end{cases}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "67",
              "lines": [
                {
                  "step": "Evaluate $f(f(6))$ for $f(x) = \\begin{cases} -5x + 17 & \\text{if } x < -2 \\\\ x^2 + 6x + 1 & \\text{if } -2 \\le x \\le 2 \\\\ -\\dfrac{1}{2}x - 7 & \\text{if } x > 2 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(6) = -\\dfrac{1}{2} \\cdot 6 - 7 = -10$",
                  "reason": "Piecewise defined function: $6$ satisfies $x > 2$, so the rule $-\\dfrac{1}{2}x - 7$ is used."
                },
                {
                  "step": "$f(f(6)) = f(-10)$",
                  "reason": "Composition $f(g(x))$: the inside value $f(6) = -10$ is worked out first."
                },
                {
                  "step": "$f(-10) = -5 \\cdot (-10) + 17 = 67$",
                  "reason": "Piecewise defined function: $-10$ satisfies $x < -2$, so the rule $-5x + 17$ is used."
                },
                {
                  "step": "$f(f(6)) = 67$",
                  "reason": "Transitive property: the two lines above give the same value."
                }
              ]
            },
            {
              "prompt": "Evaluate $f(f(-3))$ for $f(x) = \\begin{cases} 7x + 7 & \\text{if } x < -3 \\\\ x^2 + 16 & \\text{if } -3 \\le x \\le 1 \\\\ -5x - 3 & \\text{if } x > 1 \\end{cases}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-128",
              "lines": [
                {
                  "step": "Evaluate $f(f(-3))$ for $f(x) = \\begin{cases} 7x + 7 & \\text{if } x < -3 \\\\ x^2 + 16 & \\text{if } -3 \\le x \\le 1 \\\\ -5x - 3 & \\text{if } x > 1 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-3) = (-3)^2 + 16 = 25$",
                  "reason": "Piecewise defined function: $-3$ satisfies $-3 \\le x \\le 1$, so the rule $x^2 + 16$ is used."
                },
                {
                  "step": "$f(f(-3)) = f(25)$",
                  "reason": "Composition $f(g(x))$: the inside value $f(-3) = 25$ is worked out first."
                },
                {
                  "step": "$f(25) = -5 \\cdot 25 - 3 = -128$",
                  "reason": "Piecewise defined function: $25$ satisfies $x > 1$, so the rule $-5x - 3$ is used."
                },
                {
                  "step": "$f(f(-3)) = -128$",
                  "reason": "Transitive property: the two lines above give the same value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $f(x) = x$ for $f(x) = \\begin{cases} 9x - 18 & \\text{if } x < -2 \\\\ x^2 + 6x + 6 & \\text{if } x \\ge -2 \\end{cases}$.",
            "lines": [
              {
                "step": "Solve $f(x) = x$ for $f(x) = \\begin{cases} 9x - 18 & \\text{if } x < -2 \\\\ x^2 + 6x + 6 & \\text{if } x \\ge -2 \\end{cases}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x < -2$: $9x - 18 = x$",
                "reason": "Piecewise defined function: the rule for $x < -2$ is $9x - 18$."
              },
              {
                "step": "$x = \\dfrac{9}{4}$",
                "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
              },
              {
                "step": "Here $x = \\dfrac{9}{4}$ does not count, since $\\dfrac{9}{4}$ fails $x < -2$",
                "reason": "A case answer counts only inside its case: the answer of a piece must lie in that piece."
              },
              {
                "step": "For $x \\ge -2$: $x^2 + 6x + 6 = x$",
                "reason": "Piecewise defined function: the rule for $x \\ge -2$ is $x^2 + 6x + 6$."
              },
              {
                "step": "$x^2 + 5x + 6 = 0$",
                "reason": "Adding the same number to both sides: $x$ is taken from both sides."
              },
              {
                "step": "$(x + 2)(x + 3) = 0$",
                "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 + 5x + 6$, the numbers $2$ and $3$ have sum $5$ and product $6$."
              },
              {
                "step": "Either $x = -2$ or $x = -3$",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "Of these, $x = -2$ counts, since $x \\ge -2$ is needed",
                "reason": "A case answer counts only inside its case: the answers of a piece must lie in that piece."
              },
              {
                "step": "The one solution is $x = -2$",
                "reason": "A case answer counts only inside its case: the answers kept from the two pieces together."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $f(x) = x$ for $f(x) = \\begin{cases} 3x - 18 & \\text{if } x \\le -1 \\\\ x^2 - 6x + 6 & \\text{if } x > -1 \\end{cases}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 6}",
              "lines": [
                {
                  "step": "Solve $f(x) = x$ for $f(x) = \\begin{cases} 3x - 18 & \\text{if } x \\le -1 \\\\ x^2 - 6x + 6 & \\text{if } x > -1 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le -1$: $3x - 18 = x$",
                  "reason": "Piecewise defined function: the rule for $x \\le -1$ is $3x - 18$."
                },
                {
                  "step": "$x = 9$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                },
                {
                  "step": "Here $x = 9$ does not count, since $9$ fails $x \\le -1$",
                  "reason": "A case answer counts only inside its case: the answer of a piece must lie in that piece."
                },
                {
                  "step": "For $x > -1$: $x^2 - 6x + 6 = x$",
                  "reason": "Piecewise defined function: the rule for $x > -1$ is $x^2 - 6x + 6$."
                },
                {
                  "step": "$x^2 - 7x + 6 = 0$",
                  "reason": "Adding the same number to both sides: $x$ is taken from both sides."
                },
                {
                  "step": "$(x - 1)(x - 6) = 0$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 - 7x + 6$, the numbers $-1$ and $-6$ have sum $-7$ and product $6$."
                },
                {
                  "step": "Either $x = 1$ or $x = 6$",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "Of these, $x = 1$ and $x = 6$ count, since $x > -1$ is needed",
                  "reason": "A case answer counts only inside its case: the answers of a piece must lie in that piece."
                },
                {
                  "step": "The solutions are $x = 1$ and $x = 6$",
                  "reason": "A case answer counts only inside its case: the answers kept from the two pieces together."
                }
              ]
            },
            {
              "prompt": "Solve $f(x) = 12$ for $f(x) = \\begin{cases} 3x + 9 & \\text{if } x \\le -1 \\\\ x^2 - 6x + 17 & \\text{if } x > -1 \\end{cases}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 5}",
              "lines": [
                {
                  "step": "Solve $f(x) = 12$ for $f(x) = \\begin{cases} 3x + 9 & \\text{if } x \\le -1 \\\\ x^2 - 6x + 17 & \\text{if } x > -1 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le -1$: $3x + 9 = 12$",
                  "reason": "Piecewise defined function: the rule for $x \\le -1$ is $3x + 9$."
                },
                {
                  "step": "$x = 1$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                },
                {
                  "step": "Here $x = 1$ does not count, since $1$ fails $x \\le -1$",
                  "reason": "A case answer counts only inside its case: the answer of a piece must lie in that piece."
                },
                {
                  "step": "For $x > -1$: $x^2 - 6x + 17 = 12$",
                  "reason": "Piecewise defined function: the rule for $x > -1$ is $x^2 - 6x + 17$."
                },
                {
                  "step": "$x^2 - 6x + 5 = 0$",
                  "reason": "Adding the same number to both sides: $12$ is taken from both sides."
                },
                {
                  "step": "$(x - 1)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 - 6x + 5$, the numbers $-1$ and $-5$ have sum $-6$ and product $5$."
                },
                {
                  "step": "Either $x = 1$ or $x = 5$",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "Of these, $x = 1$ and $x = 5$ count, since $x > -1$ is needed",
                  "reason": "A case answer counts only inside its case: the answers of a piece must lie in that piece."
                },
                {
                  "step": "The solutions are $x = 1$ and $x = 5$",
                  "reason": "A case answer counts only inside its case: the answers kept from the two pieces together."
                }
              ]
            },
            {
              "prompt": "Solve $f(x) = 4$ for $f(x) = \\begin{cases} -3x - 20 & \\text{if } x < -2 \\\\ x^2 - 5x - 2 & \\text{if } x \\ge -2 \\end{cases}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-8, -1, 6}",
              "lines": [
                {
                  "step": "Solve $f(x) = 4$ for $f(x) = \\begin{cases} -3x - 20 & \\text{if } x < -2 \\\\ x^2 - 5x - 2 & \\text{if } x \\ge -2 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < -2$: $-3x - 20 = 4$",
                  "reason": "Piecewise defined function: the rule for $x < -2$ is $-3x - 20$."
                },
                {
                  "step": "$x = -8$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                },
                {
                  "step": "Here $x = -8$ counts, since $-8$ satisfies $x < -2$",
                  "reason": "A case answer counts only inside its case: the answer of a piece must lie in that piece."
                },
                {
                  "step": "For $x \\ge -2$: $x^2 - 5x - 2 = 4$",
                  "reason": "Piecewise defined function: the rule for $x \\ge -2$ is $x^2 - 5x - 2$."
                },
                {
                  "step": "$x^2 - 5x - 6 = 0$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides."
                },
                {
                  "step": "$(x + 1)(x - 6) = 0$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: for $x^2 - 5x - 6$, the numbers $1$ and $-6$ have sum $-5$ and product $-6$."
                },
                {
                  "step": "Either $x = -1$ or $x = 6$",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "Of these, $x = -1$ and $x = 6$ count, since $x \\ge -2$ is needed",
                  "reason": "A case answer counts only inside its case: the answers of a piece must lie in that piece."
                },
                {
                  "step": "The solutions are $x = -8$ and $x = -1$ and $x = 6$",
                  "reason": "A case answer counts only inside its case: the answers kept from the two pieces together."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of hours $x$ of a job that costs $774$ dollars, where a plumber charges $12$ dollars an hour for the first $5$ hours of a job and $51$ dollars an hour for each hour after that.",
            "lines": [
              {
                "step": "Find the number of hours $x$ of a job that costs $774$ dollars, where a plumber charges $12$ dollars an hour for the first $5$ hours of a job and $51$ dollars an hour for each hour after that.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $0 \\le x \\le 5$: $f(x) = 12x$",
                "reason": "Writing a sentence as an equation: each of the first $5$ hours of a job costs $12$."
              },
              {
                "step": "For $x > 5$: $f(x) = 12 \\cdot 5 + 51(x - 5) = 51x - 195$",
                "reason": "Writing a sentence as an equation: the first $5$ hours of a job cost $12 \\cdot 5$, and each hour after that costs $51$; then collecting like terms."
              },
              {
                "step": "Here $f(5) = 12 \\cdot 5 = 60$, which is less than $774$, so $x > 5$",
                "reason": "A case answer counts only inside its case: the first piece reaches only $f(5)$, and the bill grows with $x$."
              },
              {
                "step": "$51x - 195 = 774$",
                "reason": "Piecewise defined function: the rule of the piece that holds the answer is set equal to $774$."
              },
              {
                "step": "$x = 19$",
                "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of minutes $x$ of calls in a month billed $1004$ cents, where a phone plan charges $9$ cents for each of the first $40$ minutes of calls in a month and $14$ cents for each minute after that.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 86",
              "lines": [
                {
                  "step": "Find the number of minutes $x$ of calls in a month billed $1004$ cents, where a phone plan charges $9$ cents for each of the first $40$ minutes of calls in a month and $14$ cents for each minute after that.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $0 \\le x \\le 40$: $f(x) = 9x$",
                  "reason": "Writing a sentence as an equation: each of the first $40$ minutes costs $9$."
                },
                {
                  "step": "For $x > 40$: $f(x) = 9 \\cdot 40 + 14(x - 40) = 14x - 200$",
                  "reason": "Writing a sentence as an equation: the first $40$ minutes cost $9 \\cdot 40$, and each minute after that costs $14$; then collecting like terms."
                },
                {
                  "step": "Here $f(40) = 9 \\cdot 40 = 360$, which is less than $1004$, so $x > 40$",
                  "reason": "A case answer counts only inside its case: the first piece reaches only $f(40)$, and the bill grows with $x$."
                },
                {
                  "step": "$14x - 200 = 1004$",
                  "reason": "Piecewise defined function: the rule of the piece that holds the answer is set equal to $1004$."
                },
                {
                  "step": "$x = 86$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                }
              ]
            },
            {
              "prompt": "Find the number of cubic metres $x$ used in a month billed $629$ dollars, where a town bills $28$ dollars for each cubic metre of water up to $15$ cubic metres in a month, and $11$ dollars for each cubic metre above $15$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 34",
              "lines": [
                {
                  "step": "Find the number of cubic metres $x$ used in a month billed $629$ dollars, where a town bills $28$ dollars for each cubic metre of water up to $15$ cubic metres in a month, and $11$ dollars for each cubic metre above $15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $0 \\le x \\le 15$: $f(x) = 28x$",
                  "reason": "Writing a sentence as an equation: each of the first $15$ cubic metres costs $28$."
                },
                {
                  "step": "For $x > 15$: $f(x) = 28 \\cdot 15 + 11(x - 15) = 11x + 255$",
                  "reason": "Writing a sentence as an equation: the first $15$ cubic metres cost $28 \\cdot 15$, and each cubic metre after that costs $11$; then collecting like terms."
                },
                {
                  "step": "Here $f(15) = 28 \\cdot 15 = 420$, which is less than $629$, so $x > 15$",
                  "reason": "A case answer counts only inside its case: the first piece reaches only $f(15)$, and the bill grows with $x$."
                },
                {
                  "step": "$11x + 255 = 629$",
                  "reason": "Piecewise defined function: the rule of the piece that holds the answer is set equal to $629$."
                },
                {
                  "step": "$x = 34$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                }
              ]
            },
            {
              "prompt": "Find the length $x$, in kilometres, of a ride that costs $1711$ dollars, where a taxi charges $33$ dollars a kilometre for the first $15$ kilometres of a ride and $38$ dollars a kilometre after that.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 47",
              "lines": [
                {
                  "step": "Find the length $x$, in kilometres, of a ride that costs $1711$ dollars, where a taxi charges $33$ dollars a kilometre for the first $15$ kilometres of a ride and $38$ dollars a kilometre after that.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $0 \\le x \\le 15$: $f(x) = 33x$",
                  "reason": "Writing a sentence as an equation: each of the first $15$ kilometres costs $33$."
                },
                {
                  "step": "For $x > 15$: $f(x) = 33 \\cdot 15 + 38(x - 15) = 38x - 75$",
                  "reason": "Writing a sentence as an equation: the first $15$ kilometres cost $33 \\cdot 15$, and each kilometre after that costs $38$; then collecting like terms."
                },
                {
                  "step": "Here $f(15) = 33 \\cdot 15 = 495$, which is less than $1711$, so $x > 15$",
                  "reason": "A case answer counts only inside its case: the first piece reaches only $f(15)$, and the bill grows with $x$."
                },
                {
                  "step": "$38x - 75 = 1711$",
                  "reason": "Piecewise defined function: the rule of the piece that holds the answer is set equal to $1711$."
                },
                {
                  "step": "$x = 47$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{-1}(-13)$ for $f(x) = \\begin{cases} 3x - 9 & \\text{if } x < 0 \\\\ \\dfrac{3}{2}x - 5 & \\text{if } x \\ge 0 \\end{cases}$, a function with an inverse.",
            "lines": [
              {
                "step": "Find $f^{-1}(-13)$ for $f(x) = \\begin{cases} 3x - 9 & \\text{if } x < 0 \\\\ \\dfrac{3}{2}x - 5 & \\text{if } x \\ge 0 \\end{cases}$, a function with an inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x < 0$: $f(x) < -9$",
                "reason": "Range: the rule $3x - 9$ grows with $x$ and gives $-9$ at $x = 0$, so this piece takes every value below $-9$."
              },
              {
                "step": "For $x \\ge 0$: $f(x) \\ge -5$",
                "reason": "Range: the rule $\\dfrac{3}{2}x - 5$ grows with $x$ and starts at $-5$, so this piece takes every value from $-5$ up."
              },
              {
                "step": "Here $-13 < -9$, so $f^{-1}(-13)$ comes from the rule for $x < 0$",
                "reason": "Inverse function: $f^{-1}(-13)$ is the input $x$ with $f(x) = -13$, and only one piece reaches that value."
              },
              {
                "step": "$3x - 9 = -13$",
                "reason": "Piecewise defined function: the rule of that piece is set equal to $-13$."
              },
              {
                "step": "$x = -\\dfrac{4}{3}$",
                "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
              },
              {
                "step": "$f^{-1}(-13) = -\\dfrac{4}{3}$",
                "reason": "Inverse function: the input that gives $-13$ is $-\\dfrac{4}{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{-1}(1)$ for $f(x) = \\begin{cases} \\dfrac{1}{3}x + 8 & \\text{if } x < 0 \\\\ 2x + 10 & \\text{if } x \\ge 0 \\end{cases}$, a function with an inverse.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-21",
              "lines": [
                {
                  "step": "Find $f^{-1}(1)$ for $f(x) = \\begin{cases} \\dfrac{1}{3}x + 8 & \\text{if } x < 0 \\\\ 2x + 10 & \\text{if } x \\ge 0 \\end{cases}$, a function with an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < 0$: $f(x) < 8$",
                  "reason": "Range: the rule $\\dfrac{1}{3}x + 8$ grows with $x$ and gives $8$ at $x = 0$, so this piece takes every value below $8$."
                },
                {
                  "step": "For $x \\ge 0$: $f(x) \\ge 10$",
                  "reason": "Range: the rule $2x + 10$ grows with $x$ and starts at $10$, so this piece takes every value from $10$ up."
                },
                {
                  "step": "Here $1 < 8$, so $f^{-1}(1)$ comes from the rule for $x < 0$",
                  "reason": "Inverse function: $f^{-1}(1)$ is the input $x$ with $f(x) = 1$, and only one piece reaches that value."
                },
                {
                  "step": "$\\dfrac{1}{3}x + 8 = 1$",
                  "reason": "Piecewise defined function: the rule of that piece is set equal to $1$."
                },
                {
                  "step": "$x = -21$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                },
                {
                  "step": "$f^{-1}(1) = -21$",
                  "reason": "Inverse function: the input that gives $1$ is $-21$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(-7)$ for $f(x) = \\begin{cases} 5x + 10 & \\text{if } x < -4 \\\\ 4x + 9 & \\text{if } x \\ge -4 \\end{cases}$, a function with an inverse.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-4",
              "lines": [
                {
                  "step": "Find $f^{-1}(-7)$ for $f(x) = \\begin{cases} 5x + 10 & \\text{if } x < -4 \\\\ 4x + 9 & \\text{if } x \\ge -4 \\end{cases}$, a function with an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < -4$: $f(x) < -10$",
                  "reason": "Range: the rule $5x + 10$ grows with $x$ and gives $-10$ at $x = -4$, so this piece takes every value below $-10$."
                },
                {
                  "step": "For $x \\ge -4$: $f(x) \\ge -7$",
                  "reason": "Range: the rule $4x + 9$ grows with $x$ and starts at $-7$, so this piece takes every value from $-7$ up."
                },
                {
                  "step": "Here $-7 \\ge -7$, so $f^{-1}(-7)$ comes from the rule for $x \\ge -4$",
                  "reason": "Inverse function: $f^{-1}(-7)$ is the input $x$ with $f(x) = -7$, and only one piece reaches that value."
                },
                {
                  "step": "$4x + 9 = -7$",
                  "reason": "Piecewise defined function: the rule of that piece is set equal to $-7$."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                },
                {
                  "step": "$f^{-1}(-7) = -4$",
                  "reason": "Inverse function: the input that gives $-7$ is $-4$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(4)$ for $f(x) = \\begin{cases} \\dfrac{1}{2}x + 2 & \\text{if } x < 2 \\\\ 5x - 6 & \\text{if } x \\ge 2 \\end{cases}$, a function with an inverse.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find $f^{-1}(4)$ for $f(x) = \\begin{cases} \\dfrac{1}{2}x + 2 & \\text{if } x < 2 \\\\ 5x - 6 & \\text{if } x \\ge 2 \\end{cases}$, a function with an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < 2$: $f(x) < 3$",
                  "reason": "Range: the rule $\\dfrac{1}{2}x + 2$ grows with $x$ and gives $3$ at $x = 2$, so this piece takes every value below $3$."
                },
                {
                  "step": "For $x \\ge 2$: $f(x) \\ge 4$",
                  "reason": "Range: the rule $5x - 6$ grows with $x$ and starts at $4$, so this piece takes every value from $4$ up."
                },
                {
                  "step": "Here $4 \\ge 4$, so $f^{-1}(4)$ comes from the rule for $x \\ge 2$",
                  "reason": "Inverse function: $f^{-1}(4)$ is the input $x$ with $f(x) = 4$, and only one piece reaches that value."
                },
                {
                  "step": "$5x - 6 = 4$",
                  "reason": "Piecewise defined function: the rule of that piece is set equal to $4$."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Isolating the variable: the terms in $x$ are gathered on one side and the numbers on the other."
                },
                {
                  "step": "$f^{-1}(4) = 2$",
                  "reason": "Inverse function: the input that gives $4$ is $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = \\begin{cases} -5x - 5 & \\text{if } x < -2 \\\\ x^2 - 7 & \\text{if } x \\ge -2 \\end{cases}$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = \\begin{cases} -5x - 5 & \\text{if } x < -2 \\\\ x^2 - 7 & \\text{if } x \\ge -2 \\end{cases}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x < -2$: $f(x) > 5$",
                "reason": "Range: the rule $-5x - 5$ falls as $x$ grows and gives $5$ at $x = -2$, an end this piece leaves out, so this piece takes every value above $5$."
              },
              {
                "step": "For $x \\ge -2$: $f(x) \\ge -7$",
                "reason": "Range: the parabola $y = x^2 - 7$ opens upward with its vertex at $(0, -7)$ inside this piece, so this piece takes every value from $-7$ up."
              },
              {
                "step": "The range is $[-7, \\infty)$",
                "reason": "Range: the range is every value either piece takes, so the two sets of values are joined."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = \\begin{cases} \\dfrac{1}{2}x + 12 & \\text{if } x \\le 2 \\\\ -4x - 5 & \\text{if } x > 2 \\end{cases}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 13]",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\begin{cases} \\dfrac{1}{2}x + 12 & \\text{if } x \\le 2 \\\\ -4x - 5 & \\text{if } x > 2 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le 2$: $f(x) \\le 13$",
                  "reason": "Range: the rule $\\dfrac{1}{2}x + 12$ grows as $x$ grows and gives $13$ at $x = 2$, an end this piece holds, so this piece takes every value up to $13$."
                },
                {
                  "step": "For $x > 2$: $f(x) < -13$",
                  "reason": "Range: the rule $-4x - 5$ falls as $x$ grows and gives $-13$ at $x = 2$, an end this piece leaves out, so this piece takes every value below $-13$."
                },
                {
                  "step": "The range is $(-\\infty, 13]$",
                  "reason": "Range: the range is every value either piece takes, so the two sets of values are joined."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\begin{cases} 3x - 11 & \\text{if } x \\le -2 \\\\ -2x^2 + 4x - 1 & \\text{if } x > -2 \\end{cases}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 1]",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\begin{cases} 3x - 11 & \\text{if } x \\le -2 \\\\ -2x^2 + 4x - 1 & \\text{if } x > -2 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le -2$: $f(x) \\le -17$",
                  "reason": "Range: the rule $3x - 11$ grows as $x$ grows and gives $-17$ at $x = -2$, an end this piece holds, so this piece takes every value up to $-17$."
                },
                {
                  "step": "For $x > -2$: $f(x) \\le 1$",
                  "reason": "Range: the parabola $y = -2x^2 + 4x - 1$ opens downward with its vertex at $(1, 1)$ inside this piece, so this piece takes every value up to $1$."
                },
                {
                  "step": "The range is $(-\\infty, 1]$",
                  "reason": "Range: the range is every value either piece takes, so the two sets of values are joined."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = \\begin{cases} 3x - 12 & \\text{if } x < 1 \\\\ -2x^2 + 12x - 10 & \\text{if } x \\ge 1 \\end{cases}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 8]",
              "lines": [
                {
                  "step": "Find the range of $f(x) = \\begin{cases} 3x - 12 & \\text{if } x < 1 \\\\ -2x^2 + 12x - 10 & \\text{if } x \\ge 1 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < 1$: $f(x) < -9$",
                  "reason": "Range: the rule $3x - 12$ grows as $x$ grows and gives $-9$ at $x = 1$, an end this piece leaves out, so this piece takes every value below $-9$."
                },
                {
                  "step": "For $x \\ge 1$: $f(x) \\le 8$",
                  "reason": "Range: the parabola $y = -2x^2 + 12x - 10$ opens downward with its vertex at $(3, 8)$ inside this piece, so this piece takes every value up to $8$."
                },
                {
                  "step": "The range is $(-\\infty, 8]$",
                  "reason": "Range: the range is every value either piece takes, so the two sets of values are joined."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k3",
      "forms": [
        {
          "example": {
            "problem": "Write $f(x) = |-5x + 1| + 6x + 10$ in pieces. Give the rule for $x > \\dfrac{1}{5}$.",
            "lines": [
              {
                "step": "Write $f(x) = |-5x + 1| + 6x + 10$ in pieces. Give the rule for $x > \\dfrac{1}{5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $-5x + 1 = 0$ at $x = \\dfrac{1}{5}$",
                "reason": "Breakpoints: the inside of the absolute value is $0$ there."
              },
              {
                "step": "For $x > \\dfrac{1}{5}$: $-5x + 1 < 0$",
                "reason": "Breakpoints: the inside changes sign only at $x = \\dfrac{1}{5}$, and at $x = 1$ it is $-4$."
              },
              {
                "step": "$|-5x + 1| = -(-5x + 1) = 5x - 1$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
              },
              {
                "step": "For $x > \\dfrac{1}{5}$: $f(x) = 5x - 1 + 6x + 10 = 11x + 9$",
                "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
              },
              {
                "step": "For $x < \\dfrac{1}{5}$: $f(x) = -5x + 1 + 6x + 10 = x + 11$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: on the other side of $x = \\dfrac{1}{5}$ the inside has the other sign, so $|-5x + 1| = -5x + 1$."
              },
              {
                "step": "$f(x) = \\begin{cases} x + 11 & \\text{if } x < \\dfrac{1}{5} \\\\ 11x + 9 & \\text{if } x \\ge \\dfrac{1}{5} \\end{cases}$",
                "reason": "Piecewise defined function: one rule for each part of the domain."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $f(x) = |2x - 7| - 3x - 2$ in pieces. Give the rule for $x > \\dfrac{7}{2}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-x-9",
              "lines": [
                {
                  "step": "Write $f(x) = |2x - 7| - 3x - 2$ in pieces. Give the rule for $x > \\dfrac{7}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $2x - 7 = 0$ at $x = \\dfrac{7}{2}$",
                  "reason": "Breakpoints: the inside of the absolute value is $0$ there."
                },
                {
                  "step": "For $x > \\dfrac{7}{2}$: $2x - 7 > 0$",
                  "reason": "Breakpoints: the inside changes sign only at $x = \\dfrac{7}{2}$, and at $x = 4$ it is $1$."
                },
                {
                  "step": "$|2x - 7| = 2x - 7$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is above $0$ here."
                },
                {
                  "step": "For $x > \\dfrac{7}{2}$: $f(x) = 2x - 7 - 3x - 2 = -x - 9$",
                  "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
                },
                {
                  "step": "For $x < \\dfrac{7}{2}$: $f(x) = -2x + 7 - 3x - 2 = -5x + 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: on the other side of $x = \\dfrac{7}{2}$ the inside has the other sign, so $|2x - 7| = -(2x - 7) = -2x + 7$."
                },
                {
                  "step": "$f(x) = \\begin{cases} -5x + 5 & \\text{if } x < \\dfrac{7}{2} \\\\ -x - 9 & \\text{if } x \\ge \\dfrac{7}{2} \\end{cases}$",
                  "reason": "Piecewise defined function: one rule for each part of the domain."
                }
              ]
            },
            {
              "prompt": "Write $f(x) = |-3x + 8| + 6x + 11$ in pieces. Give the rule for $x > \\dfrac{8}{3}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "9*x+3",
              "lines": [
                {
                  "step": "Write $f(x) = |-3x + 8| + 6x + 11$ in pieces. Give the rule for $x > \\dfrac{8}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $-3x + 8 = 0$ at $x = \\dfrac{8}{3}$",
                  "reason": "Breakpoints: the inside of the absolute value is $0$ there."
                },
                {
                  "step": "For $x > \\dfrac{8}{3}$: $-3x + 8 < 0$",
                  "reason": "Breakpoints: the inside changes sign only at $x = \\dfrac{8}{3}$, and at $x = 3$ it is $-1$."
                },
                {
                  "step": "$|-3x + 8| = -(-3x + 8) = 3x - 8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
                },
                {
                  "step": "For $x > \\dfrac{8}{3}$: $f(x) = 3x - 8 + 6x + 11 = 9x + 3$",
                  "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
                },
                {
                  "step": "For $x < \\dfrac{8}{3}$: $f(x) = -3x + 8 + 6x + 11 = 3x + 19$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: on the other side of $x = \\dfrac{8}{3}$ the inside has the other sign, so $|-3x + 8| = -3x + 8$."
                },
                {
                  "step": "$f(x) = \\begin{cases} 3x + 19 & \\text{if } x < \\dfrac{8}{3} \\\\ 9x + 3 & \\text{if } x \\ge \\dfrac{8}{3} \\end{cases}$",
                  "reason": "Piecewise defined function: one rule for each part of the domain."
                }
              ]
            },
            {
              "prompt": "Write $f(x) = |7x + 2| - x - 11$ in pieces. Give the rule for $x > -\\dfrac{2}{7}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "6*x-9",
              "lines": [
                {
                  "step": "Write $f(x) = |7x + 2| - x - 11$ in pieces. Give the rule for $x > -\\dfrac{2}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $7x + 2 = 0$ at $x = -\\dfrac{2}{7}$",
                  "reason": "Breakpoints: the inside of the absolute value is $0$ there."
                },
                {
                  "step": "For $x > -\\dfrac{2}{7}$: $7x + 2 > 0$",
                  "reason": "Breakpoints: the inside changes sign only at $x = -\\dfrac{2}{7}$, and at $x = 0$ it is $2$."
                },
                {
                  "step": "$|7x + 2| = 7x + 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is above $0$ here."
                },
                {
                  "step": "For $x > -\\dfrac{2}{7}$: $f(x) = 7x + 2 - x - 11 = 6x - 9$",
                  "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
                },
                {
                  "step": "For $x < -\\dfrac{2}{7}$: $f(x) = -7x - 2 - x - 11 = -8x - 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: on the other side of $x = -\\dfrac{2}{7}$ the inside has the other sign, so $|7x + 2| = -(7x + 2) = -7x - 2$."
                },
                {
                  "step": "$f(x) = \\begin{cases} -8x - 13 & \\text{if } x < -\\dfrac{2}{7} \\\\ 6x - 9 & \\text{if } x \\ge -\\dfrac{2}{7} \\end{cases}$",
                  "reason": "Piecewise defined function: one rule for each part of the domain."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $f(x) = |-2x - 11| - |x - 9|$ in pieces. Give the rule between the two breakpoints.",
            "lines": [
              {
                "step": "Write $f(x) = |-2x - 11| - |x - 9|$ in pieces. Give the rule between the two breakpoints.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -\\dfrac{11}{2}$ and $x = 9$",
                "reason": "Breakpoints: each inside is $0$ at one of them."
              },
              {
                "step": "For $-\\dfrac{11}{2} < x < 9$: $-2x - 11 < 0$ and $x - 9 < 0$",
                "reason": "Breakpoints: neither inside changes sign between the breakpoints, and at $x = -5$ they are $-1$ and $-14$."
              },
              {
                "step": "$|-2x - 11| = 2x + 11$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
              },
              {
                "step": "$|x - 9| = -x + 9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
              },
              {
                "step": "For $-\\dfrac{11}{2} < x < 9$: $f(x) = 2x + 11 - (-x + 9) = 3x + 2$",
                "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
              },
              {
                "step": "For $x < -\\dfrac{11}{2}$: $f(x) = -2x - 11 - (-x + 9) = -x - 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: below $x = -\\dfrac{11}{2}$ the inside that is $0$ at $-\\dfrac{11}{2}$ has the other sign."
              },
              {
                "step": "For $x > 9$: $f(x) = 2x + 11 - (x - 9) = x + 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: above $x = 9$ the inside that is $0$ at $9$ has the other sign."
              },
              {
                "step": "$f(x) = \\begin{cases} -x - 20 & \\text{if } x < -\\dfrac{11}{2} \\\\ 3x + 2 & \\text{if } -\\dfrac{11}{2} \\le x < 9 \\\\ x + 20 & \\text{if } x \\ge 9 \\end{cases}$",
                "reason": "Piecewise defined function: one rule for each part of the domain."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $f(x) = |3x - 10| - |x - 5|$ in pieces. Give the rule between the two breakpoints.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*x-15",
              "lines": [
                {
                  "step": "Write $f(x) = |3x - 10| - |x - 5|$ in pieces. Give the rule between the two breakpoints.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = \\dfrac{10}{3}$ and $x = 5$",
                  "reason": "Breakpoints: each inside is $0$ at one of them."
                },
                {
                  "step": "For $\\dfrac{10}{3} < x < 5$: $3x - 10 > 0$ and $x - 5 < 0$",
                  "reason": "Breakpoints: neither inside changes sign between the breakpoints, and at $x = 4$ they are $2$ and $-1$."
                },
                {
                  "step": "$|3x - 10| = 3x - 10$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is above $0$ here."
                },
                {
                  "step": "$|x - 5| = -x + 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
                },
                {
                  "step": "For $\\dfrac{10}{3} < x < 5$: $f(x) = 3x - 10 - (-x + 5) = 4x - 15$",
                  "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
                },
                {
                  "step": "For $x < \\dfrac{10}{3}$: $f(x) = -3x + 10 - (-x + 5) = -2x + 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: below $x = \\dfrac{10}{3}$ the inside that is $0$ at $\\dfrac{10}{3}$ has the other sign."
                },
                {
                  "step": "For $x > 5$: $f(x) = 3x - 10 - (x - 5) = 2x - 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: above $x = 5$ the inside that is $0$ at $5$ has the other sign."
                },
                {
                  "step": "$f(x) = \\begin{cases} -2x + 5 & \\text{if } x < \\dfrac{10}{3} \\\\ 4x - 15 & \\text{if } \\dfrac{10}{3} \\le x < 5 \\\\ 2x - 5 & \\text{if } x \\ge 5 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule for each part of the domain."
                }
              ]
            },
            {
              "prompt": "Write $f(x) = |-5x - 3| + |-x + 5|$ in pieces. Give the rule between the two breakpoints.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*x+8",
              "lines": [
                {
                  "step": "Write $f(x) = |-5x - 3| + |-x + 5|$ in pieces. Give the rule between the two breakpoints.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -\\dfrac{3}{5}$ and $x = 5$",
                  "reason": "Breakpoints: each inside is $0$ at one of them."
                },
                {
                  "step": "For $-\\dfrac{3}{5} < x < 5$: $-5x - 3 < 0$ and $-x + 5 > 0$",
                  "reason": "Breakpoints: neither inside changes sign between the breakpoints, and at $x = 0$ they are $-3$ and $5$."
                },
                {
                  "step": "$|-5x - 3| = 5x + 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
                },
                {
                  "step": "$|-x + 5| = -x + 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is above $0$ here."
                },
                {
                  "step": "For $-\\dfrac{3}{5} < x < 5$: $f(x) = 5x + 3 - x + 5 = 4x + 8$",
                  "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
                },
                {
                  "step": "For $x < -\\dfrac{3}{5}$: $f(x) = -5x - 3 - x + 5 = -6x + 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: below $x = -\\dfrac{3}{5}$ the inside that is $0$ at $-\\dfrac{3}{5}$ has the other sign."
                },
                {
                  "step": "For $x > 5$: $f(x) = 5x + 3 + x - 5 = 6x - 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: above $x = 5$ the inside that is $0$ at $5$ has the other sign."
                },
                {
                  "step": "$f(x) = \\begin{cases} -6x + 2 & \\text{if } x < -\\dfrac{3}{5} \\\\ 4x + 8 & \\text{if } -\\dfrac{3}{5} \\le x < 5 \\\\ 6x - 2 & \\text{if } x \\ge 5 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule for each part of the domain."
                }
              ]
            },
            {
              "prompt": "Write $f(x) = |5x - 2| + |-3x - 2|$ in pieces. Give the rule between the two breakpoints.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2*x+4",
              "lines": [
                {
                  "step": "Write $f(x) = |5x - 2| + |-3x - 2|$ in pieces. Give the rule between the two breakpoints.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = \\dfrac{2}{5}$ and $x = -\\dfrac{2}{3}$",
                  "reason": "Breakpoints: each inside is $0$ at one of them."
                },
                {
                  "step": "For $-\\dfrac{2}{3} < x < \\dfrac{2}{5}$: $5x - 2 < 0$ and $-3x - 2 < 0$",
                  "reason": "Breakpoints: neither inside changes sign between the breakpoints, and at $x = 0$ they are $-2$ and $-2$."
                },
                {
                  "step": "$|5x - 2| = -5x + 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
                },
                {
                  "step": "$|-3x - 2| = 3x + 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: the inside is below $0$ here."
                },
                {
                  "step": "For $-\\dfrac{2}{3} < x < \\dfrac{2}{5}$: $f(x) = -5x + 2 + 3x + 2 = -2x + 4$",
                  "reason": "Collecting like terms: the terms in $x$ and the numbers are each added."
                },
                {
                  "step": "For $x < -\\dfrac{2}{3}$: $f(x) = -5x + 2 - 3x - 2 = -8x$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: below $x = -\\dfrac{2}{3}$ the inside that is $0$ at $-\\dfrac{2}{3}$ has the other sign."
                },
                {
                  "step": "For $x > \\dfrac{2}{5}$: $f(x) = 5x - 2 + 3x + 2 = 8x$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: above $x = \\dfrac{2}{5}$ the inside that is $0$ at $\\dfrac{2}{5}$ has the other sign."
                },
                {
                  "step": "$f(x) = \\begin{cases} -8x & \\text{if } x < -\\dfrac{2}{3} \\\\ -2x + 4 & \\text{if } -\\dfrac{2}{3} \\le x < \\dfrac{2}{5} \\\\ 8x & \\text{if } x \\ge \\dfrac{2}{5} \\end{cases}$",
                  "reason": "Piecewise defined function: one rule for each part of the domain."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $f(x) = \\begin{cases} x - 15 & \\text{if } x < -3 \\\\ 5x - 3 & \\text{if } x \\ge -3 \\end{cases}$ with one absolute value, as $a|x + 3| + bx + c$.",
            "lines": [
              {
                "step": "Write $f(x) = \\begin{cases} x - 15 & \\text{if } x < -3 \\\\ 5x - 3 & \\text{if } x \\ge -3 \\end{cases}$ with one absolute value, as $a|x + 3| + bx + c$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two rules give $-18$ at $x = -3$, so the graph has its corner at $(-3, -18)$",
                "reason": "Breakpoints: $|x + 3|$ changes its rule where $x + 3 = 0$, at $x = -3$."
              },
              {
                "step": "For $x \\ge -3$: $a(x + 3) + bx + c = 5x - 3$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x + 3 \\ge 0$ there, so $|x + 3| = x + 3$."
              },
              {
                "step": "For $x < -3$: $-a(x + 3) + bx + c = x - 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x + 3 < 0$ there, so $|x + 3| = -(x + 3)$."
              },
              {
                "step": "Here $a + b = 5$ and $b - a = 1$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of each line above are equal."
              },
              {
                "step": "Here $a = 2$ and $b = 3$",
                "reason": "Elimination: the second equation is taken from the first, which leaves $2a = 4$, and then $b = 5 - 2$."
              },
              {
                "step": "$c = -3 - 6 = -9$",
                "reason": "Equal for all $x$ means equal coefficients: the numbers in the line for $x \\ge -3$ are equal, so $c + 6 = -3$."
              },
              {
                "step": "$f(x) = 2|x + 3| + 3x - 9$",
                "reason": "Substituting a value: $a = 2$, $b = 3$ and $c = -9$ are put in $a|x + 3| + bx + c$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $f(x) = \\begin{cases} x + 6 & \\text{if } x < -1 \\\\ -5x & \\text{if } x \\ge -1 \\end{cases}$ with one absolute value, as $a|x + 1| + bx + c$.",
              "form": "Answer as an expression with an absolute value, or equivalent, as in 2*abs(x-1)+3.",
              "answer": "-3*abs(x+1)-2*x+3",
              "lines": [
                {
                  "step": "Write $f(x) = \\begin{cases} x + 6 & \\text{if } x < -1 \\\\ -5x & \\text{if } x \\ge -1 \\end{cases}$ with one absolute value, as $a|x + 1| + bx + c$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two rules give $5$ at $x = -1$, so the graph has its corner at $(-1, 5)$",
                  "reason": "Breakpoints: $|x + 1|$ changes its rule where $x + 1 = 0$, at $x = -1$."
                },
                {
                  "step": "For $x \\ge -1$: $a(x + 1) + bx + c = -5x$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x + 1 \\ge 0$ there, so $|x + 1| = x + 1$."
                },
                {
                  "step": "For $x < -1$: $-a(x + 1) + bx + c = x + 6$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x + 1 < 0$ there, so $|x + 1| = -(x + 1)$."
                },
                {
                  "step": "Here $a + b = -5$ and $b - a = 1$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of each line above are equal."
                },
                {
                  "step": "Here $a = -3$ and $b = -2$",
                  "reason": "Elimination: the second equation is taken from the first, which leaves $2a = -6$, and then $b = -5 - (-3)$."
                },
                {
                  "step": "$c = 0 + 3 = 3$",
                  "reason": "Equal for all $x$ means equal coefficients: the numbers in the line for $x \\ge -1$ are equal, so $c - 3 = 0$."
                },
                {
                  "step": "$f(x) = -3|x + 1| - 2x + 3$",
                  "reason": "Substituting a value: $a = -3$, $b = -2$ and $c = 3$ are put in $a|x + 1| + bx + c$."
                }
              ]
            },
            {
              "prompt": "Write $f(x) = \\begin{cases} -7x + 7 & \\text{if } x < 3 \\\\ 3x - 23 & \\text{if } x \\ge 3 \\end{cases}$ with one absolute value, as $a|x - 3| + bx + c$.",
              "form": "Answer as an expression with an absolute value, or equivalent, as in 2*abs(x-1)+3.",
              "answer": "5*abs(x-3)-2*x-8",
              "lines": [
                {
                  "step": "Write $f(x) = \\begin{cases} -7x + 7 & \\text{if } x < 3 \\\\ 3x - 23 & \\text{if } x \\ge 3 \\end{cases}$ with one absolute value, as $a|x - 3| + bx + c$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two rules give $-14$ at $x = 3$, so the graph has its corner at $(3, -14)$",
                  "reason": "Breakpoints: $|x - 3|$ changes its rule where $x - 3 = 0$, at $x = 3$."
                },
                {
                  "step": "For $x \\ge 3$: $a(x - 3) + bx + c = 3x - 23$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x - 3 \\ge 0$ there, so $|x - 3| = x - 3$."
                },
                {
                  "step": "For $x < 3$: $-a(x - 3) + bx + c = -7x + 7$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x - 3 < 0$ there, so $|x - 3| = -(x - 3)$."
                },
                {
                  "step": "Here $a + b = 3$ and $b - a = -7$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of each line above are equal."
                },
                {
                  "step": "Here $a = 5$ and $b = -2$",
                  "reason": "Elimination: the second equation is taken from the first, which leaves $2a = 10$, and then $b = 3 - 5$."
                },
                {
                  "step": "$c = -23 + 15 = -8$",
                  "reason": "Equal for all $x$ means equal coefficients: the numbers in the line for $x \\ge 3$ are equal, so $c - 15 = -23$."
                },
                {
                  "step": "$f(x) = 5|x - 3| - 2x - 8$",
                  "reason": "Substituting a value: $a = 5$, $b = -2$ and $c = -8$ are put in $a|x - 3| + bx + c$."
                }
              ]
            },
            {
              "prompt": "Write $f(x) = \\begin{cases} 3x + 13 & \\text{if } x < -4 \\\\ -3x - 11 & \\text{if } x \\ge -4 \\end{cases}$ with one absolute value, as $a|x + 4| + bx + c$.",
              "form": "Answer as an expression with an absolute value, or equivalent, as in 2*abs(x-1)+3.",
              "answer": "-3*abs(x+4)+1",
              "lines": [
                {
                  "step": "Write $f(x) = \\begin{cases} 3x + 13 & \\text{if } x < -4 \\\\ -3x - 11 & \\text{if } x \\ge -4 \\end{cases}$ with one absolute value, as $a|x + 4| + bx + c$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two rules give $1$ at $x = -4$, so the graph has its corner at $(-4, 1)$",
                  "reason": "Breakpoints: $|x + 4|$ changes its rule where $x + 4 = 0$, at $x = -4$."
                },
                {
                  "step": "For $x \\ge -4$: $a(x + 4) + bx + c = -3x - 11$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x + 4 \\ge 0$ there, so $|x + 4| = x + 4$."
                },
                {
                  "step": "For $x < -4$: $-a(x + 4) + bx + c = 3x + 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x + 4 < 0$ there, so $|x + 4| = -(x + 4)$."
                },
                {
                  "step": "Here $a + b = -3$ and $b - a = 3$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of each line above are equal."
                },
                {
                  "step": "Here $a = -3$ and $b = 0$",
                  "reason": "Elimination: the second equation is taken from the first, which leaves $2a = -6$, and then $b = -3 - (-3)$."
                },
                {
                  "step": "$c = -11 + 12 = 1$",
                  "reason": "Equal for all $x$ means equal coefficients: the numbers in the line for $x \\ge -4$ are equal, so $c - 12 = -11$."
                },
                {
                  "step": "$f(x) = -3|x + 4| + 1$",
                  "reason": "Substituting a value: $a = -3$, $b = 0$ and $c = 1$ are put in $a|x + 4| + bx + c$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k4",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $f(x) = \\begin{cases} \\dfrac{1}{2}x + \\dfrac{7}{2} & \\text{if } x < -3 \\\\ x^2 + 4x + 6 & \\text{if } x \\ge -3 \\end{cases}$.",
            "lines": [
              {
                "step": "Sketch the graph of $f(x) = \\begin{cases} \\dfrac{1}{2}x + \\dfrac{7}{2} & \\text{if } x < -3 \\\\ x^2 + 4x + 6 & \\text{if } x \\ge -3 \\end{cases}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x < -3$: part of the line $y = \\dfrac{1}{2}x + \\dfrac{7}{2}$, ending with an open circle at $(-3, 2)$",
                "reason": "Piecewise defined function: the rule for $x < -3$ gives $2$ at $x = -3$, an end this piece leaves out."
              },
              {
                "step": "For $x \\ge -3$: part of the parabola $y = x^2 + 4x + 6$, starting with a filled dot at $(-3, 3)$, with its vertex at $(-2, 2)$",
                "reason": "Piecewise defined function: the rule for $x \\ge -3$ gives $3$ at $x = -3$, an end this piece holds."
              },
              {
                "step": "The graph meets the $y$-axis at $(0, 6)$",
                "reason": "Definition of the $y$-intercept: $f(0) = 6$, from the rule for $x \\ge -3$."
              },
              {
                "step": "The graph meets the $x$-axis at $(-7, 0)$",
                "reason": "Definition of the $x$-intercept: $y = 0$ on each piece is solved, and only answers inside that piece are kept."
              },
              {
                "step": "The graph jumps at $x = -3$, from $2$ to $3$",
                "reason": "Continuous graph: the two rules give different values at $x = -3$.",
                "figure": {
                  "file": "piecewise-functions-41.svg",
                  "alt": "Part of the line y = 1/2x + 7/2 for x < −3, then part of the parabola y = x squared + 4x + 6 for x ≥ −3; open circle at (−3, 2), filled dot at (−3, 3)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $f(x) = \\begin{cases} -\\dfrac{1}{2}x + 5 & \\text{if } x \\le 0 \\\\ x^2 - 4x + 5 & \\text{if } x > 0 \\end{cases}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 5)$"
                ],
                "turning": [
                  "corner at $(0, 5)$",
                  "vertex $(2, 1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $f(x) = \\begin{cases} -\\dfrac{1}{2}x + 5 & \\text{if } x \\le 0 \\\\ x^2 - 4x + 5 & \\text{if } x > 0 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le 0$: part of the line $y = -\\dfrac{1}{2}x + 5$, ending with a filled dot at $(0, 5)$",
                  "reason": "Piecewise defined function: the rule for $x \\le 0$ gives $5$ at $x = 0$, an end this piece holds."
                },
                {
                  "step": "For $x > 0$: part of the parabola $y = x^2 - 4x + 5$, starting with an open circle at $(0, 5)$, with its vertex at $(2, 1)$",
                  "reason": "Piecewise defined function: the rule for $x > 0$ gives $5$ at $x = 0$, an end this piece leaves out."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 5)$",
                  "reason": "Definition of the $y$-intercept: $f(0) = 5$, from the rule for $x \\le 0$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: $y = 0$ has no solution inside either piece."
                },
                {
                  "step": "The two pieces meet at $(0, 5)$, so the graph is drawn without lifting the pen",
                  "reason": "Continuous graph: the two rules give the same value at $x = 0$.",
                  "figure": {
                    "file": "piecewise-functions-2.svg",
                    "alt": "Part of the line y = −1/2x + 5 for x ≤ 0, then part of the parabola y = x squared − 4x + 5 for x > 0; the pieces meet at (0, 5)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $f(x) = \\begin{cases} -4x - 10 & \\text{if } x \\le -1 \\\\ x^2 + 2x + 1 & \\text{if } x > -1 \\end{cases}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 1)$",
                  "$(-\\dfrac{5}{2}, 0)$"
                ],
                "turning": [
                  "filled dot at $(-1, -6)$",
                  "open circle at $(-1, 0)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $f(x) = \\begin{cases} -4x - 10 & \\text{if } x \\le -1 \\\\ x^2 + 2x + 1 & \\text{if } x > -1 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\le -1$: part of the line $y = -4x - 10$, ending with a filled dot at $(-1, -6)$",
                  "reason": "Piecewise defined function: the rule for $x \\le -1$ gives $-6$ at $x = -1$, an end this piece holds."
                },
                {
                  "step": "For $x > -1$: part of the parabola $y = x^2 + 2x + 1$, starting with an open circle at $(-1, 0)$",
                  "reason": "Piecewise defined function: the rule for $x > -1$ gives $0$ at $x = -1$, an end this piece leaves out."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 1)$",
                  "reason": "Definition of the $y$-intercept: $f(0) = 1$, from the rule for $x > -1$."
                },
                {
                  "step": "The graph meets the $x$-axis at $(-\\dfrac{5}{2}, 0)$",
                  "reason": "Definition of the $x$-intercept: $y = 0$ on each piece is solved, and only answers inside that piece are kept."
                },
                {
                  "step": "The graph jumps at $x = -1$, from $-6$ to $0$",
                  "reason": "Continuous graph: the two rules give different values at $x = -1$.",
                  "figure": {
                    "file": "piecewise-functions-3.svg",
                    "alt": "Part of the line y = −4x − 10 for x ≤ −1, then part of the parabola y = x squared + 2x + 1 for x > −1; open circle at (−1, 0), filled dot at (−1, −6)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $f(x) = \\begin{cases} -\\dfrac{3}{2}x - 3 & \\text{if } x < 0 \\\\ -2x + 8 & \\text{if } x \\ge 0 \\end{cases}$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 8)$",
                  "$(-2, 0)$",
                  "$(4, 0)$"
                ],
                "turning": [
                  "open circle at $(0, -3)$",
                  "filled dot at $(0, 8)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $f(x) = \\begin{cases} -\\dfrac{3}{2}x - 3 & \\text{if } x < 0 \\\\ -2x + 8 & \\text{if } x \\ge 0 \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < 0$: part of the line $y = -\\dfrac{3}{2}x - 3$, ending with an open circle at $(0, -3)$",
                  "reason": "Piecewise defined function: the rule for $x < 0$ gives $-3$ at $x = 0$, an end this piece leaves out."
                },
                {
                  "step": "For $x \\ge 0$: part of the line $y = -2x + 8$, starting with a filled dot at $(0, 8)$",
                  "reason": "Piecewise defined function: the rule for $x \\ge 0$ gives $8$ at $x = 0$, an end this piece holds."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 8)$",
                  "reason": "Definition of the $y$-intercept: $f(0) = 8$, from the rule for $x \\ge 0$."
                },
                {
                  "step": "The graph meets the $x$-axis at $(-2, 0)$ and $(4, 0)$",
                  "reason": "Definition of the $x$-intercept: $y = 0$ on each piece is solved, and only answers inside that piece are kept."
                },
                {
                  "step": "The graph jumps at $x = 0$, from $-3$ to $8$",
                  "reason": "Continuous graph: the two rules give different values at $x = 0$.",
                  "figure": {
                    "file": "piecewise-functions-4.svg",
                    "alt": "Part of the line y = −3/2x − 3 for x < 0, then part of the line y = −2x + 8 for x ≥ 0; open circle at (0, −3), filled dot at (0, 8)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} x^2 + 9 & \\text{if } x < 2 \\\\ x^2 + cx + 8 & \\text{if } x \\ge 2 \\end{cases}$ continuous.",
            "lines": [
              {
                "step": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} x^2 + 9 & \\text{if } x < 2 \\\\ x^2 + cx + 8 & \\text{if } x \\ge 2 \\end{cases}$ continuous.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The rule for $x < 2$ gives $2^2 + 9 = 13$ at $x = 2$",
                "reason": "Substituting a value: $x = 2$ is put in the rule $x^2 + 9$."
              },
              {
                "step": "The rule for $x \\ge 2$ gives $2^2 + c \\cdot 2 + 8 = 2c + 12$ at $x = 2$",
                "reason": "Substituting a value: $x = 2$ is put in the rule $x^2 + cx + 8$."
              },
              {
                "step": "$2c + 12 = 13$",
                "reason": "Continuous graph: the graph is drawn without lifting the pen exactly when the two rules give the same value at $x = 2$."
              },
              {
                "step": "$2c = 1$",
                "reason": "Adding the same number to both sides: $12$ is taken from both sides."
              },
              {
                "step": "$c = \\dfrac{1}{2}$",
                "reason": "Isolating the variable: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} -3x + 6 & \\text{if } x \\le -3 \\\\ cx + 8 & \\text{if } x > -3 \\end{cases}$ continuous.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = -7/3",
              "lines": [
                {
                  "step": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} -3x + 6 & \\text{if } x \\le -3 \\\\ cx + 8 & \\text{if } x > -3 \\end{cases}$ continuous.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rule for $x \\le -3$ gives $-3 \\cdot (-3) + 6 = 15$ at $x = -3$",
                  "reason": "Substituting a value: $x = -3$ is put in the rule $-3x + 6$."
                },
                {
                  "step": "The rule for $x > -3$ gives $c \\cdot (-3) + 8 = -3c + 8$ at $x = -3$",
                  "reason": "Substituting a value: $x = -3$ is put in the rule $cx + 8$."
                },
                {
                  "step": "$-3c + 8 = 15$",
                  "reason": "Continuous graph: the graph is drawn without lifting the pen exactly when the two rules give the same value at $x = -3$."
                },
                {
                  "step": "$-3c = 7$",
                  "reason": "Adding the same number to both sides: $8$ is taken from both sides."
                },
                {
                  "step": "$c = -\\dfrac{7}{3}$",
                  "reason": "Isolating the variable: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} 2x^2 + 6 & \\text{if } x < -2 \\\\ cx^2 - 8 & \\text{if } x \\ge -2 \\end{cases}$ continuous.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = 11/2",
              "lines": [
                {
                  "step": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} 2x^2 + 6 & \\text{if } x < -2 \\\\ cx^2 - 8 & \\text{if } x \\ge -2 \\end{cases}$ continuous.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rule for $x < -2$ gives $2 \\cdot (-2)^2 + 6 = 14$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $2x^2 + 6$."
                },
                {
                  "step": "The rule for $x \\ge -2$ gives $c \\cdot (-2)^2 - 8 = 4c - 8$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $cx^2 - 8$."
                },
                {
                  "step": "$4c - 8 = 14$",
                  "reason": "Continuous graph: the graph is drawn without lifting the pen exactly when the two rules give the same value at $x = -2$."
                },
                {
                  "step": "$4c = 22$",
                  "reason": "Adding the same number to both sides: $-8$ is taken from both sides."
                },
                {
                  "step": "$c = \\dfrac{11}{2}$",
                  "reason": "Isolating the variable: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} -5x + 9 & \\text{if } x \\le -2 \\\\ x^2 + cx + 9 & \\text{if } x > -2 \\end{cases}$ continuous.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "c = -3",
              "lines": [
                {
                  "step": "Find the number $c$ that makes the graph of $f(x) = \\begin{cases} -5x + 9 & \\text{if } x \\le -2 \\\\ x^2 + cx + 9 & \\text{if } x > -2 \\end{cases}$ continuous.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rule for $x \\le -2$ gives $-5 \\cdot (-2) + 9 = 19$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $-5x + 9$."
                },
                {
                  "step": "The rule for $x > -2$ gives $(-2)^2 + c \\cdot (-2) + 9 = -2c + 13$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $x^2 + cx + 9$."
                },
                {
                  "step": "$-2c + 13 = 19$",
                  "reason": "Continuous graph: the graph is drawn without lifting the pen exactly when the two rules give the same value at $x = -2$."
                },
                {
                  "step": "$-2c = 6$",
                  "reason": "Adding the same number to both sides: $13$ is taken from both sides."
                },
                {
                  "step": "$c = -3$",
                  "reason": "Isolating the variable: both sides are divided by $-2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = \\lceil x\\rceil + 2\\lfloor x\\rfloor + 3$ for $-1 \\le x \\le 2$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\lceil x\\rceil + 2\\lfloor x\\rfloor + 3$ for $-1 \\le x \\le 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At an integer $x = n$: $\\lceil x\\rceil = \\lfloor x\\rfloor = n$, so $y = 3n + 3$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $n \\le n < n + 1$, so the floor of $n$ is $n$, and the least integer not below $n$ is $n$ itself (ceiling)."
              },
              {
                "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lceil x\\rceil = n + 1$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and the least integer not below $x$ is $n + 1$ (ceiling)."
              },
              {
                "step": "There $y = (n + 1) + 2n + 3 = 3n + 4$",
                "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
              },
              {
                "step": "$y = \\begin{cases} 3n + 3 & \\text{if } x = n \\\\ 3n + 4 & \\text{if } n < x < n + 1 \\end{cases}$",
                "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
              },
              {
                "step": "On $-1 \\le x \\le 2$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $3n + 4$, and the dot at $x = n$ has height $3n + 3$.",
                "figure": {
                  "file": "piecewise-functions-5.svg",
                  "alt": "Open steps: y = 1 from x = −1 to 0; y = 4 from x = 0 to 1; y = 7 from x = 1 to 2; filled dots at (−1, 0), (0, 3), (1, 6), (2, 9)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = \\lceil x\\rceil + 3\\lfloor x\\rfloor - 4$ for $-1 \\le x \\le 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -4)$",
                  "$(1, 0)$"
                ],
                "turning": [
                  "step at $y = -7$: open circles at $(-1, -7)$ and $(0, -7)$",
                  "step at $y = -3$: open circles at $(0, -3)$ and $(1, -3)$",
                  "step at $y = 1$: open circles at $(1, 1)$ and $(2, 1)$",
                  "filled dot at $(-1, -8)$",
                  "filled dot at $(0, -4)$",
                  "filled dot at $(1, 0)$",
                  "filled dot at $(2, 4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\lceil x\\rceil + 3\\lfloor x\\rfloor - 4$ for $-1 \\le x \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At an integer $x = n$: $\\lceil x\\rceil = \\lfloor x\\rfloor = n$, so $y = 4n - 4$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $n \\le n < n + 1$, so the floor of $n$ is $n$, and the least integer not below $n$ is $n$ itself (ceiling)."
                },
                {
                  "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lceil x\\rceil = n + 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and the least integer not below $x$ is $n + 1$ (ceiling)."
                },
                {
                  "step": "There $y = (n + 1) + 3n - 4 = 4n - 3$",
                  "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
                },
                {
                  "step": "$y = \\begin{cases} 4n - 4 & \\text{if } x = n \\\\ 4n - 3 & \\text{if } n < x < n + 1 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
                },
                {
                  "step": "On $-1 \\le x \\le 2$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                  "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $4n - 3$, and the dot at $x = n$ has height $4n - 4$.",
                  "figure": {
                    "file": "piecewise-functions-6.svg",
                    "alt": "Open steps: y = −7 from x = −1 to 0; y = −3 from x = 0 to 1; y = 1 from x = 1 to 2; filled dots at (−1, −8), (0, −4), (1, 0), (2, 4)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -2\\lceil x\\rceil + \\lfloor x\\rfloor + 1$ for $-1 \\le x \\le 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 1)$",
                  "$(1, 0)$",
                  "on the $x$-axis for $-1 < x < 0$"
                ],
                "turning": [
                  "step at $y = 0$: open circles at $(-1, 0)$ and $(0, 0)$",
                  "step at $y = -1$: open circles at $(0, -1)$ and $(1, -1)$",
                  "step at $y = -2$: open circles at $(1, -2)$ and $(2, -2)$",
                  "filled dot at $(-1, 2)$",
                  "filled dot at $(0, 1)$",
                  "filled dot at $(1, 0)$",
                  "filled dot at $(2, -1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -2\\lceil x\\rceil + \\lfloor x\\rfloor + 1$ for $-1 \\le x \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At an integer $x = n$: $\\lceil x\\rceil = \\lfloor x\\rfloor = n$, so $y = -n + 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $n \\le n < n + 1$, so the floor of $n$ is $n$, and the least integer not below $n$ is $n$ itself (ceiling)."
                },
                {
                  "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lceil x\\rceil = n + 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and the least integer not below $x$ is $n + 1$ (ceiling)."
                },
                {
                  "step": "There $y = -2(n + 1) + n + 1 = -n - 1$",
                  "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
                },
                {
                  "step": "$y = \\begin{cases} -n + 1 & \\text{if } x = n \\\\ -n - 1 & \\text{if } n < x < n + 1 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
                },
                {
                  "step": "On $-1 \\le x \\le 2$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                  "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $-n - 1$, and the dot at $x = n$ has height $-n + 1$.",
                  "figure": {
                    "file": "piecewise-functions-7.svg",
                    "alt": "Open steps: y = 0 from x = −1 to 0; y = −1 from x = 0 to 1; y = −2 from x = 1 to 2; filled dots at (−1, 2), (0, 1), (1, 0), (2, −1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 4\\lceil x\\rceil - 2\\lfloor x\\rfloor + 1$ for $-2 \\le x \\le 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 1)$"
                ],
                "turning": [
                  "step at $y = 1$: open circles at $(-2, 1)$ and $(-1, 1)$",
                  "step at $y = 3$: open circles at $(-1, 3)$ and $(0, 3)$",
                  "step at $y = 5$: open circles at $(0, 5)$ and $(1, 5)$",
                  "step at $y = 7$: open circles at $(1, 7)$ and $(2, 7)$",
                  "filled dot at $(-2, -3)$",
                  "filled dot at $(-1, -1)$",
                  "filled dot at $(0, 1)$",
                  "filled dot at $(1, 3)$",
                  "filled dot at $(2, 5)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 4\\lceil x\\rceil - 2\\lfloor x\\rfloor + 1$ for $-2 \\le x \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At an integer $x = n$: $\\lceil x\\rceil = \\lfloor x\\rfloor = n$, so $y = 2n + 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: $n \\le n < n + 1$, so the floor of $n$ is $n$, and the least integer not below $n$ is $n$ itself (ceiling)."
                },
                {
                  "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lceil x\\rceil = n + 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and the least integer not below $x$ is $n + 1$ (ceiling)."
                },
                {
                  "step": "There $y = 4(n + 1) - 2n + 1 = 2n + 5$",
                  "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
                },
                {
                  "step": "$y = \\begin{cases} 2n + 1 & \\text{if } x = n \\\\ 2n + 5 & \\text{if } n < x < n + 1 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
                },
                {
                  "step": "On $-2 \\le x \\le 2$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                  "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $2n + 5$, and the dot at $x = n$ has height $2n + 1$.",
                  "figure": {
                    "file": "piecewise-functions-8.svg",
                    "alt": "Open steps: y = 1 from x = −2 to −1; y = 3 from x = −1 to 0; y = 5 from x = 0 to 1; y = 7 from x = 1 to 2; filled dots at (−2, −3), (−1, −1), (0, 1), (1, 3), (2, 5)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = -2\\lfloor x\\rfloor - 4\\lfloor -x\\rfloor + 2$ for $-2 \\le x \\le 2$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = -2\\lfloor x\\rfloor - 4\\lfloor -x\\rfloor + 2$ for $-2 \\le x \\le 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At an integer $x = n$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n$, so $y = 2n + 2$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: an integer is its own floor, and $-n$ is an integer too."
              },
              {
                "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n - 1$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and $-n - 1 < -x < -n$, so $-x$ lies from $-n - 1$ up to below $-n$."
              },
              {
                "step": "There $y = -2n - 4(-n - 1) + 2 = 2n + 6$",
                "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
              },
              {
                "step": "$y = \\begin{cases} 2n + 2 & \\text{if } x = n \\\\ 2n + 6 & \\text{if } n < x < n + 1 \\end{cases}$",
                "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
              },
              {
                "step": "On $-2 \\le x \\le 2$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $2n + 6$, and the dot at $x = n$ has height $2n + 2$.",
                "figure": {
                  "file": "piecewise-functions-9.svg",
                  "alt": "Open steps: y = 2 from x = −2 to −1; y = 4 from x = −1 to 0; y = 6 from x = 0 to 1; y = 8 from x = 1 to 2; filled dots at (−2, −2), (−1, 0), (0, 2), (1, 4), (2, 6)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 2\\lfloor x\\rfloor - \\lfloor -x\\rfloor$ for $-2 \\le x \\le 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 0)$"
                ],
                "turning": [
                  "step at $y = -5$: open circles at $(-2, -5)$ and $(-1, -5)$",
                  "step at $y = -2$: open circles at $(-1, -2)$ and $(0, -2)$",
                  "step at $y = 1$: open circles at $(0, 1)$ and $(1, 1)$",
                  "filled dot at $(-2, -6)$",
                  "filled dot at $(-1, -3)$",
                  "filled dot at $(0, 0)$",
                  "filled dot at $(1, 3)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2\\lfloor x\\rfloor - \\lfloor -x\\rfloor$ for $-2 \\le x \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At an integer $x = n$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n$, so $y = 3n$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: an integer is its own floor, and $-n$ is an integer too."
                },
                {
                  "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n - 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and $-n - 1 < -x < -n$, so $-x$ lies from $-n - 1$ up to below $-n$."
                },
                {
                  "step": "There $y = 2n - (-n - 1) = 3n + 1$",
                  "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
                },
                {
                  "step": "$y = \\begin{cases} 3n & \\text{if } x = n \\\\ 3n + 1 & \\text{if } n < x < n + 1 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
                },
                {
                  "step": "On $-2 \\le x \\le 1$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                  "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $3n + 1$, and the dot at $x = n$ has height $3n$.",
                  "figure": {
                    "file": "piecewise-functions-10.svg",
                    "alt": "Open steps: y = −5 from x = −2 to −1; y = −2 from x = −1 to 0; y = 1 from x = 0 to 1; filled dots at (−2, −6), (−1, −3), (0, 0), (1, 3)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\lfloor x\\rfloor - 2\\lfloor -x\\rfloor - 2$ for $-2 \\le x \\le 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -2)$",
                  "on the $x$-axis for $0 < x < 1$"
                ],
                "turning": [
                  "step at $y = -6$: open circles at $(-2, -6)$ and $(-1, -6)$",
                  "step at $y = -3$: open circles at $(-1, -3)$ and $(0, -3)$",
                  "step at $y = 0$: open circles at $(0, 0)$ and $(1, 0)$",
                  "filled dot at $(-2, -8)$",
                  "filled dot at $(-1, -5)$",
                  "filled dot at $(0, -2)$",
                  "filled dot at $(1, 1)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\lfloor x\\rfloor - 2\\lfloor -x\\rfloor - 2$ for $-2 \\le x \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At an integer $x = n$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n$, so $y = 3n - 2$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: an integer is its own floor, and $-n$ is an integer too."
                },
                {
                  "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n - 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and $-n - 1 < -x < -n$, so $-x$ lies from $-n - 1$ up to below $-n$."
                },
                {
                  "step": "There $y = n - 2(-n - 1) - 2 = 3n$",
                  "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
                },
                {
                  "step": "$y = \\begin{cases} 3n - 2 & \\text{if } x = n \\\\ 3n & \\text{if } n < x < n + 1 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
                },
                {
                  "step": "On $-2 \\le x \\le 1$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                  "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $3n$, and the dot at $x = n$ has height $3n - 2$.",
                  "figure": {
                    "file": "piecewise-functions-11.svg",
                    "alt": "Open steps: y = −6 from x = −2 to −1; y = −3 from x = −1 to 0; y = 0 from x = 0 to 1; filled dots at (−2, −8), (−1, −5), (0, −2), (1, 1)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -\\lfloor x\\rfloor - 3\\lfloor -x\\rfloor - 1$ for $-2 \\le x \\le 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -1)$",
                  "on the $x$-axis for $-1 < x < 0$"
                ],
                "turning": [
                  "step at $y = -2$: open circles at $(-2, -2)$ and $(-1, -2)$",
                  "step at $y = 0$: open circles at $(-1, 0)$ and $(0, 0)$",
                  "step at $y = 2$: open circles at $(0, 2)$ and $(1, 2)$",
                  "step at $y = 4$: open circles at $(1, 4)$ and $(2, 4)$",
                  "filled dot at $(-2, -5)$",
                  "filled dot at $(-1, -3)$",
                  "filled dot at $(0, -1)$",
                  "filled dot at $(1, 1)$",
                  "filled dot at $(2, 3)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -\\lfloor x\\rfloor - 3\\lfloor -x\\rfloor - 1$ for $-2 \\le x \\le 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At an integer $x = n$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n$, so $y = 2n - 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: an integer is its own floor, and $-n$ is an integer too."
                },
                {
                  "step": "For $n < x < n + 1$: $\\lfloor x\\rfloor = n$ and $\\lfloor -x\\rfloor = -n - 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $n \\le x < n + 1$, and $-n - 1 < -x < -n$, so $-x$ lies from $-n - 1$ up to below $-n$."
                },
                {
                  "step": "There $y = -n - 3(-n - 1) - 1 = 2n + 2$",
                  "reason": "Collecting like terms: the terms in $n$ and the numbers are each added."
                },
                {
                  "step": "$y = \\begin{cases} 2n - 1 & \\text{if } x = n \\\\ 2n + 2 & \\text{if } n < x < n + 1 \\end{cases}$",
                  "reason": "Piecewise defined function: one rule at the integers and one between them, for each integer $n$."
                },
                {
                  "step": "On $-2 \\le x \\le 2$: a level step with open circles at both ends on each $(n, n + 1)$, and a filled dot at each integer",
                  "reason": "Graph of a function: the step between $n$ and $n + 1$ has height $2n + 2$, and the dot at $x = n$ has height $2n - 1$.",
                  "figure": {
                    "file": "piecewise-functions-12.svg",
                    "alt": "Open steps: y = −2 from x = −2 to −1; y = 0 from x = −1 to 0; y = 2 from x = 0 to 1; y = 4 from x = 1 to 2; filled dots at (−2, −5), (−1, −3), (0, −1), (1, 1), (2, 3)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k5",
      "forms": [
        {
          "example": {
            "problem": "Find a positive odd integer $k$ with $f(f(k)) = 18$, where $f(n) = \\begin{cases} n - 15 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} - 5 & \\text{if } n \\text{ is even} \\end{cases}$.",
            "lines": [
              {
                "step": "Find a positive odd integer $k$ with $f(f(k)) = 18$, where $f(n) = \\begin{cases} n - 15 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} - 5 & \\text{if } n \\text{ is even} \\end{cases}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $18$: the even rule gives $f(46) = 18$, and the odd rule gives $f(33) = 18$",
                "reason": "Piecewise defined function: each rule is tried, and a case answer counts only inside its case."
              },
              {
                "step": "For $46$: the even rule gives $f(102) = 46$, and the odd rule gives $f(61) = 46$; for $33$: the even rule gives $f(76) = 33$, and the odd rule would need $48$, an even number",
                "reason": "Piecewise defined function: each rule is tried again for each value found, and a case answer counts only inside its case."
              },
              {
                "step": "Of $61$, $76$ and $102$, only $61$ is positive odd",
                "reason": "A case answer counts only inside its case: the problem asks for a positive odd integer."
              },
              {
                "step": "$f(f(61)) = f(46) = 18$",
                "reason": "Checking a solution: both rules are applied forwards, each where it holds."
              },
              {
                "step": "$k = 61$",
                "reason": "Checking a solution: the value found satisfies the equation, and it is the only one of its kind."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an odd integer $k$ with $f(f(k)) = 55$, where $f(n) = \\begin{cases} n - 15 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} & \\text{if } n \\text{ is even} \\end{cases}$.",
              "form": "Answer as an integer.",
              "answer": "125",
              "lines": [
                {
                  "step": "Find an odd integer $k$ with $f(f(k)) = 55$, where $f(n) = \\begin{cases} n - 15 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} & \\text{if } n \\text{ is even} \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $55$: the even rule gives $f(110) = 55$, and the odd rule would need $70$, an even number",
                  "reason": "Piecewise defined function: each rule is tried, and a case answer counts only inside its case."
                },
                {
                  "step": "For $110$: the even rule gives $f(220) = 110$, and the odd rule gives $f(125) = 110$",
                  "reason": "Piecewise defined function: each rule is tried again for each value found, and a case answer counts only inside its case."
                },
                {
                  "step": "Of $125$ and $220$, only $125$ is odd",
                  "reason": "A case answer counts only inside its case: the problem asks for an odd integer."
                },
                {
                  "step": "$f(f(125)) = f(110) = 55$",
                  "reason": "Checking a solution: both rules are applied forwards, each where it holds."
                },
                {
                  "step": "$k = 125$",
                  "reason": "Checking a solution: the value found satisfies the equation, and it is the only one of its kind."
                }
              ]
            },
            {
              "prompt": "Find a positive odd integer $k$ with $f(f(k)) = 6$, where $f(n) = \\begin{cases} n - 7 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} & \\text{if } n \\text{ is even} \\end{cases}$.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find a positive odd integer $k$ with $f(f(k)) = 6$, where $f(n) = \\begin{cases} n - 7 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} & \\text{if } n \\text{ is even} \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $6$: the even rule gives $f(12) = 6$, and the odd rule gives $f(13) = 6$",
                  "reason": "Piecewise defined function: each rule is tried, and a case answer counts only inside its case."
                },
                {
                  "step": "For $12$: the even rule gives $f(24) = 12$, and the odd rule gives $f(19) = 12$; for $13$: the even rule gives $f(26) = 13$, and the odd rule would need $20$, an even number",
                  "reason": "Piecewise defined function: each rule is tried again for each value found, and a case answer counts only inside its case."
                },
                {
                  "step": "Of $19$, $24$ and $26$, only $19$ is positive odd",
                  "reason": "A case answer counts only inside its case: the problem asks for a positive odd integer."
                },
                {
                  "step": "$f(f(19)) = f(12) = 6$",
                  "reason": "Checking a solution: both rules are applied forwards, each where it holds."
                },
                {
                  "step": "$k = 19$",
                  "reason": "Checking a solution: the value found satisfies the equation, and it is the only one of its kind."
                }
              ]
            },
            {
              "prompt": "Find a positive even integer $k$ with $f(f(k)) = 10$, where $f(n) = \\begin{cases} n + 11 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} + 6 & \\text{if } n \\text{ is even} \\end{cases}$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find a positive even integer $k$ with $f(f(k)) = 10$, where $f(n) = \\begin{cases} n + 11 & \\text{if } n \\text{ is odd} \\\\ \\dfrac{n}{2} + 6 & \\text{if } n \\text{ is even} \\end{cases}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $10$: the even rule gives $f(8) = 10$, and the odd rule gives $f(-1) = 10$",
                  "reason": "Piecewise defined function: each rule is tried, and a case answer counts only inside its case."
                },
                {
                  "step": "For $8$: the even rule gives $f(4) = 8$, and the odd rule gives $f(-3) = 8$; for $-1$: the even rule gives $f(-14) = -1$, and the odd rule would need $-12$, an even number",
                  "reason": "Piecewise defined function: each rule is tried again for each value found, and a case answer counts only inside its case."
                },
                {
                  "step": "Of $-14$, $-3$ and $4$, only $4$ is positive even",
                  "reason": "A case answer counts only inside its case: the problem asks for a positive even integer."
                },
                {
                  "step": "$f(f(4)) = f(8) = 10$",
                  "reason": "Checking a solution: both rules are applied forwards, each where it holds."
                },
                {
                  "step": "$k = 4$",
                  "reason": "Checking a solution: the value found satisfies the equation, and it is the only one of its kind."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k6",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the graph of $f(x) = \\begin{cases} x^2 - 4x - 14 & \\text{if } x < 0 \\\\ x - 14 & \\text{if } x \\ge 0 \\end{cases}$ is continuous.",
            "lines": [
              {
                "step": "Decide whether the graph of $f(x) = \\begin{cases} x^2 - 4x - 14 & \\text{if } x < 0 \\\\ x - 14 & \\text{if } x \\ge 0 \\end{cases}$ is continuous.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The rule for $x < 0$ gives $0^2 - 4 \\cdot 0 - 14 = -14$ at $x = 0$",
                "reason": "Substituting a value: $x = 0$ is put in the rule $x^2 - 4x - 14$."
              },
              {
                "step": "The rule for $x \\ge 0$ gives $0 - 14 = -14$ at $x = 0$",
                "reason": "Substituting a value: $x = 0$ is put in the rule $x - 14$."
              },
              {
                "step": "Yes: both rules give $-14$ at $x = 0$, so the pieces meet",
                "reason": "Continuous graph: each piece is drawn without lifting the pen, so only the meeting point at $x = 0$ can break the graph."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the graph of $f(x) = \\begin{cases} 3x + 8 & \\text{if } x \\le -2 \\\\ 3x^2 + 6x + 4 & \\text{if } x > -2 \\end{cases}$ is continuous.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the graph of $f(x) = \\begin{cases} 3x + 8 & \\text{if } x \\le -2 \\\\ 3x^2 + 6x + 4 & \\text{if } x > -2 \\end{cases}$ is continuous.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rule for $x \\le -2$ gives $3 \\cdot (-2) + 8 = 2$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $3x + 8$."
                },
                {
                  "step": "The rule for $x > -2$ gives $3 \\cdot (-2)^2 + 6 \\cdot (-2) + 4 = 4$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $3x^2 + 6x + 4$."
                },
                {
                  "step": "No: the rules give $2$ and $4$ at $x = -2$, so the graph jumps there",
                  "reason": "Continuous graph: each piece is drawn without lifting the pen, so only the meeting point at $x = -2$ can break the graph."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $f(x) = \\begin{cases} -2x^2 + 2x - 3 & \\text{if } x \\le -2 \\\\ 8x + 5 & \\text{if } x > -2 \\end{cases}$ is continuous.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the graph of $f(x) = \\begin{cases} -2x^2 + 2x - 3 & \\text{if } x \\le -2 \\\\ 8x + 5 & \\text{if } x > -2 \\end{cases}$ is continuous.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rule for $x \\le -2$ gives $-2 \\cdot (-2)^2 + 2 \\cdot (-2) - 3 = -15$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $-2x^2 + 2x - 3$."
                },
                {
                  "step": "The rule for $x > -2$ gives $8 \\cdot (-2) + 5 = -11$ at $x = -2$",
                  "reason": "Substituting a value: $x = -2$ is put in the rule $8x + 5$."
                },
                {
                  "step": "No: the rules give $-15$ and $-11$ at $x = -2$, so the graph jumps there",
                  "reason": "Continuous graph: each piece is drawn without lifting the pen, so only the meeting point at $x = -2$ can break the graph."
                }
              ]
            },
            {
              "prompt": "Decide whether the graph of $f(x) = \\begin{cases} x^2 + 4x + 19 & \\text{if } x \\le 0 \\\\ 9x + 19 & \\text{if } x > 0 \\end{cases}$ is continuous.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the graph of $f(x) = \\begin{cases} x^2 + 4x + 19 & \\text{if } x \\le 0 \\\\ 9x + 19 & \\text{if } x > 0 \\end{cases}$ is continuous.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The rule for $x \\le 0$ gives $0^2 + 4 \\cdot 0 + 19 = 19$ at $x = 0$",
                  "reason": "Substituting a value: $x = 0$ is put in the rule $x^2 + 4x + 19$."
                },
                {
                  "step": "The rule for $x > 0$ gives $9 \\cdot 0 + 19 = 19$ at $x = 0$",
                  "reason": "Substituting a value: $x = 0$ is put in the rule $9x + 19$."
                },
                {
                  "step": "Yes: both rules give $19$ at $x = 0$, so the pieces meet",
                  "reason": "Continuous graph: each piece is drawn without lifting the pen, so only the meeting point at $x = 0$ can break the graph."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k7",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = \\begin{cases} -4x + 8 & \\text{if } x \\le 0 \\\\ -\\dfrac{3}{2}x + 4 & \\text{if } x > 0 \\end{cases}$ has an inverse.",
            "lines": [
              {
                "step": "Decide whether $f(x) = \\begin{cases} -4x + 8 & \\text{if } x \\le 0 \\\\ -\\dfrac{3}{2}x + 4 & \\text{if } x > 0 \\end{cases}$ has an inverse.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x \\le 0$: $f(x) \\ge 8$",
                "reason": "Range: the rule $-4x + 8$ falls as $x$ grows and gives $8$ at $x = 0$, an end this piece holds, so this piece takes every value from $8$ up."
              },
              {
                "step": "For $x > 0$: $f(x) < 4$",
                "reason": "Range: the rule $-\\dfrac{3}{2}x + 4$ falls as $x$ grows and gives $4$ at $x = 0$, an end this piece leaves out, so this piece takes every value below $4$."
              },
              {
                "step": "Yes: the two sets of values do not overlap, and each rule is a line that is not level, so each output comes from one input",
                "reason": "Inverse function: an inverse sends each output of $f$ back to the one input that gives it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = \\begin{cases} -\\dfrac{1}{3}x - 7 & \\text{if } x < 0 \\\\ -\\dfrac{2}{3}x + 1 & \\text{if } x \\ge 0 \\end{cases}$ has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\begin{cases} -\\dfrac{1}{3}x - 7 & \\text{if } x < 0 \\\\ -\\dfrac{2}{3}x + 1 & \\text{if } x \\ge 0 \\end{cases}$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < 0$: $f(x) > -7$",
                  "reason": "Range: the rule $-\\dfrac{1}{3}x - 7$ falls as $x$ grows and gives $-7$ at $x = 0$, an end this piece leaves out, so this piece takes every value above $-7$."
                },
                {
                  "step": "For $x \\ge 0$: $f(x) \\le 1$",
                  "reason": "Range: the rule $-\\dfrac{2}{3}x + 1$ falls as $x$ grows and gives $1$ at $x = 0$, an end this piece holds, so this piece takes every value up to $1$."
                },
                {
                  "step": "No: $f(-12) = -\\dfrac{1}{3} \\cdot (-12) - 7 = -3$ and $f(6) = -\\dfrac{2}{3} \\cdot 6 + 1 = -3$, so two inputs give one output",
                  "reason": "A function with one output from two inputs has no inverse."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\begin{cases} 5x + 8 & \\text{if } x < -2 \\\\ \\dfrac{1}{2}x + 4 & \\text{if } x \\ge -2 \\end{cases}$ has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\begin{cases} 5x + 8 & \\text{if } x < -2 \\\\ \\dfrac{1}{2}x + 4 & \\text{if } x \\ge -2 \\end{cases}$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < -2$: $f(x) < -2$",
                  "reason": "Range: the rule $5x + 8$ grows as $x$ grows and gives $-2$ at $x = -2$, an end this piece leaves out, so this piece takes every value below $-2$."
                },
                {
                  "step": "For $x \\ge -2$: $f(x) \\ge 3$",
                  "reason": "Range: the rule $\\dfrac{1}{2}x + 4$ grows as $x$ grows and gives $3$ at $x = -2$, an end this piece holds, so this piece takes every value from $3$ up."
                },
                {
                  "step": "Yes: the two sets of values do not overlap, and each rule is a line that is not level, so each output comes from one input",
                  "reason": "Inverse function: an inverse sends each output of $f$ back to the one input that gives it."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = \\begin{cases} \\dfrac{1}{3}x & \\text{if } x < 0 \\\\ -\\dfrac{1}{2}x + 3 & \\text{if } x \\ge 0 \\end{cases}$ has an inverse.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = \\begin{cases} \\dfrac{1}{3}x & \\text{if } x < 0 \\\\ -\\dfrac{1}{2}x + 3 & \\text{if } x \\ge 0 \\end{cases}$ has an inverse.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x < 0$: $f(x) < 0$",
                  "reason": "Range: the rule $\\dfrac{1}{3}x$ grows as $x$ grows and gives $0$ at $x = 0$, an end this piece leaves out, so this piece takes every value below $0$."
                },
                {
                  "step": "For $x \\ge 0$: $f(x) \\le 3$",
                  "reason": "Range: the rule $-\\dfrac{1}{2}x + 3$ falls as $x$ grows and gives $3$ at $x = 0$, an end this piece holds, so this piece takes every value up to $3$."
                },
                {
                  "step": "No: $f(-9) = \\dfrac{1}{3} \\cdot (-9) = -3$ and $f(12) = -\\dfrac{1}{2} \\cdot 12 + 3 = -3$, so two inputs give one output",
                  "reason": "A function with one output from two inputs has no inverse."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k8",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(f(f(6)))$, where $f(x) = \\begin{cases} -2x - 8 & \\text{if } x < -2 \\\\ -x^2 + 6x - 16 & \\text{if } -2 \\le x \\le 0 \\\\ \\dfrac{1}{3}x - 2 & \\text{if } x > 0 \\end{cases}$, and write that line right.",
            "given": [
              "$f(6) = \\dfrac{1}{3} \\cdot 6 - 2 = 0$",
              "$f(0) = \\dfrac{1}{3} \\cdot 0 - 2 = -2$",
              "$f(-2) = -(-2)^2 + 6 \\cdot (-2) - 16 = -32$",
              "$f(f(f(6))) = -32$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(f(f(6)))$, where $f(x) = \\begin{cases} -2x - 8 & \\text{if } x < -2 \\\\ -x^2 + 6x - 16 & \\text{if } -2 \\le x \\le 0 \\\\ \\dfrac{1}{3}x - 2 & \\text{if } x > 0 \\end{cases}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 works out $f(0)$ with the rule $\\dfrac{1}{3}x - 2$, but $0$ satisfies $-2 \\le x \\le 0$, not $x > 0$; line 1 is right",
                "reason": "Piecewise defined function: the end value $0$ belongs to the one piece whose condition holds it, so the rule $-x^2 + 6x - 16$ is used."
              },
              {
                "step": "Line 2 written right: $f(0) = -0^2 + 6 \\cdot 0 - 16 = -16$",
                "reason": "The later lines follow from the wrong line, so they change with it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(f(f(-1)))$, where $f(x) = \\begin{cases} -8x + 18 & \\text{if } x \\le -1 \\\\ 3x^2 - x + 17 & \\text{if } -1 < x < 3 \\\\ \\dfrac{1}{2}x - 13 & \\text{if } x \\ge 3 \\end{cases}$, and write that line right.",
              "given": [
                "$f(-1) = 3 \\cdot (-1)^2 - (-1) + 17 = 21$",
                "$f(21) = \\dfrac{1}{2} \\cdot 21 - 13 = -\\dfrac{5}{2}$",
                "$f(-\\dfrac{5}{2}) = -8 \\cdot (-\\dfrac{5}{2}) + 18 = 38$",
                "$f(f(f(-1))) = 38$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: -8*(-1)+18 = 26",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(f(f(-1)))$, where $f(x) = \\begin{cases} -8x + 18 & \\text{if } x \\le -1 \\\\ 3x^2 - x + 17 & \\text{if } -1 < x < 3 \\\\ \\dfrac{1}{2}x - 13 & \\text{if } x \\ge 3 \\end{cases}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 works out $f(-1)$ with the rule $3x^2 - x + 17$, but $-1$ satisfies $x \\le -1$, not $-1 < x < 3$",
                  "reason": "Piecewise defined function: the end value $-1$ belongs to the one piece whose condition holds it, so the rule $-8x + 18$ is used."
                },
                {
                  "step": "Line 1 written right: $f(-1) = -8 \\cdot (-1) + 18 = 26$",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(f(f(6)))$, where $f(x) = \\begin{cases} 3x + 17 & \\text{if } x \\le -2 \\\\ -x^2 - x - 9 & \\text{if } -2 < x < 2 \\\\ 2x - 17 & \\text{if } x \\ge 2 \\end{cases}$, and write that line right.",
              "given": [
                "$f(6) = 2 \\cdot 6 - 17 = -5$",
                "$f(-5) = 3 \\cdot (-5) + 17 = 2$",
                "$f(2) = -2^2 - 2 - 9 = -15$",
                "$f(f(f(6))) = -15$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*(2)-17 = -13",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(f(f(6)))$, where $f(x) = \\begin{cases} 3x + 17 & \\text{if } x \\le -2 \\\\ -x^2 - x - 9 & \\text{if } -2 < x < 2 \\\\ 2x - 17 & \\text{if } x \\ge 2 \\end{cases}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 works out $f(2)$ with the rule $-x^2 - x - 9$, but $2$ satisfies $x \\ge 2$, not $-2 < x < 2$; lines 1 and 2 are right",
                  "reason": "Piecewise defined function: the end value $2$ belongs to the one piece whose condition holds it, so the rule $2x - 17$ is used."
                },
                {
                  "step": "Line 3 written right: $f(2) = 2 \\cdot 2 - 17 = -13$",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(f(f(2)))$, where $f(x) = \\begin{cases} 7x + 10 & \\text{if } x < 0 \\\\ -3x^2 - x + 17 & \\text{if } 0 \\le x < 2 \\\\ 2x - 6 & \\text{if } x \\ge 2 \\end{cases}$, and write that line right.",
              "given": [
                "$f(2) = -3 \\cdot 2^2 - 2 + 17 = 3$",
                "$f(3) = 2 \\cdot 3 - 6 = 0$",
                "$f(0) = -3 \\cdot 0^2 - 0 + 17 = 17$",
                "$f(f(f(2))) = 17$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 2*(2)-6 = -2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(f(f(2)))$, where $f(x) = \\begin{cases} 7x + 10 & \\text{if } x < 0 \\\\ -3x^2 - x + 17 & \\text{if } 0 \\le x < 2 \\\\ 2x - 6 & \\text{if } x \\ge 2 \\end{cases}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 works out $f(2)$ with the rule $-3x^2 - x + 17$, but $2$ satisfies $x \\ge 2$, not $0 \\le x < 2$",
                  "reason": "Piecewise defined function: the end value $2$ belongs to the one piece whose condition holds it, so the rule $2x - 6$ is used."
                },
                {
                  "step": "Line 1 written right: $f(2) = 2 \\cdot 2 - 6 = -2$",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t176-k9",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write the equation of the piece of the graph in the figure for $x > -3$, which passes through $(-2, -4)$ and $(0, -6)$, with $y$ alone on the left.",
            "figure": {
              "file": "piecewise-functions-23.svg",
              "alt": "Two straight pieces: for x ≤ −3 a line through (−5, 3) and (−3, −3); for x > −3 a line through (−3, −3) and (−1, −5)."
            },
            "lines": [
              {
                "step": "Write the equation of the piece of the graph in the figure for $x > -3$, which passes through $(-2, -4)$ and $(0, -6)$, with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The piece for $x > -3$ passes through $(-2, -4)$ and $(0, -6)$",
                "reason": "Graph of a function: each point of the piece has $y$ equal to the value of the function at $x$."
              },
              {
                "step": "Its slope is $\\dfrac{-6 - (-4)}{0 - (-2)} = -1$",
                "reason": "Slope: the rise divided by the run between the two points."
              },
              {
                "step": "$y - (-4) = -(x - (-2))$",
                "reason": "Point-slope form: the slope $-1$ and the point $(-2, -4)$."
              },
              {
                "step": "$y = -x - 6$",
                "reason": "Slope-intercept form: the bracket is multiplied out and the numbers are collected."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the piece of the graph in the figure for $x > 3$, which passes through $(4, 2)$ and $(6, 6)$, with $y$ alone on the left.",
              "figure": {
                "file": "piecewise-functions-42.svg",
                "alt": "Two straight pieces: for x ≤ 3 a line through (1, 6) and (3, 2); for x > 3 a line through (3, 0) and (5, 4); filled dot at (3, 2), open circle at (3, 0)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*x-6",
              "lines": [
                {
                  "step": "Write the equation of the piece of the graph in the figure for $x > 3$, which passes through $(4, 2)$ and $(6, 6)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The piece for $x > 3$ passes through $(4, 2)$ and $(6, 6)$",
                  "reason": "Graph of a function: each point of the piece has $y$ equal to the value of the function at $x$."
                },
                {
                  "step": "Its slope is $\\dfrac{6 - 2}{6 - 4} = 2$",
                  "reason": "Slope: the rise divided by the run between the two points."
                },
                {
                  "step": "$y - 2 = 2(x - 4)$",
                  "reason": "Point-slope form: the slope $2$ and the point $(4, 2)$."
                },
                {
                  "step": "$y = 2x - 6$",
                  "reason": "Slope-intercept form: the bracket is multiplied out and the numbers are collected."
                }
              ]
            },
            {
              "prompt": "Write the equation of the piece of the graph in the figure for $x < -2$, which passes through $(-5, -7)$ and $(-3, -1)$, with $y$ alone on the left.",
              "figure": {
                "file": "piecewise-functions-43.svg",
                "alt": "Two straight pieces: for x < −2 a line through (−4, −4) and (−2, 2); for x ≥ −2 a line through (−2, 2) and (0, −4)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*x+8",
              "lines": [
                {
                  "step": "Write the equation of the piece of the graph in the figure for $x < -2$, which passes through $(-5, -7)$ and $(-3, -1)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The piece for $x < -2$ passes through $(-5, -7)$ and $(-3, -1)$",
                  "reason": "Graph of a function: each point of the piece has $y$ equal to the value of the function at $x$."
                },
                {
                  "step": "Its slope is $\\dfrac{-1 - (-7)}{-3 - (-5)} = 3$",
                  "reason": "Slope: the rise divided by the run between the two points."
                },
                {
                  "step": "$y - (-7) = 3(x - (-5))$",
                  "reason": "Point-slope form: the slope $3$ and the point $(-5, -7)$."
                },
                {
                  "step": "$y = 3x + 8$",
                  "reason": "Slope-intercept form: the bracket is multiplied out and the numbers are collected."
                }
              ]
            },
            {
              "prompt": "Write the equation of the piece of the graph in the figure for $x < 0$, which passes through $(-3, -6)$ and $(-1, 0)$, with $y$ alone on the left.",
              "figure": {
                "file": "piecewise-functions-44.svg",
                "alt": "Two straight pieces: for x < 0 a line through (−2, −3) and (0, 3); for x ≥ 0 a line through (0, 3) and (2, −3)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*x+3",
              "lines": [
                {
                  "step": "Write the equation of the piece of the graph in the figure for $x < 0$, which passes through $(-3, -6)$ and $(-1, 0)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The piece for $x < 0$ passes through $(-3, -6)$ and $(-1, 0)$",
                  "reason": "Graph of a function: each point of the piece has $y$ equal to the value of the function at $x$."
                },
                {
                  "step": "Its slope is $\\dfrac{0 - (-6)}{-1 - (-3)} = 3$",
                  "reason": "Slope: the rise divided by the run between the two points."
                },
                {
                  "step": "$y - (-6) = 3(x - (-3))$",
                  "reason": "Point-slope form: the slope $3$ and the point $(-3, -6)$."
                },
                {
                  "step": "$y = 3x + 3$",
                  "reason": "Slope-intercept form: the bracket is multiplied out and the numbers are collected."
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
