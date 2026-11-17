export default {
  "number": 241,
  "title": "Nonlinear recurrences that become linear",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "225-226"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 5$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1039}{a_n}$ for every whole number $n$.",
    "form": "Answer as an integer.",
    "answer": "54",
    "solution": [
      "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 5$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1039}{a_n}$ for every whole number $n$.",
      "Every term $a_n$ is positive.",
      "$a_{n+2}a_n = a_{n+1}^2 + 1039$",
      "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1039$",
      "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
      "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
      "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
      "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
      "$a_2 = \\dfrac{5^2 + 1039}{4} = 266$",
      "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{266 + 4}{5} = 54$",
      "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 54$ for every whole number $n$.",
      "$a_{n+2} + a_n = 54a_{n+1}$",
      "$a_{n+2} = 54a_{n+1} - a_n$",
      "So $b = 54$."
    ]
  },
  "ideas": [
    {
      "name": "Linearising a recurrence",
      "concrete": "Take $a_0 = 2$ and $a_{n+1} = \\dfrac{5a_n}{5 + 4a_n}$ for every whole number $n$. The terms $2$, $\\dfrac{10}{13}$, $\\dfrac{10}{21}$ show no plain pattern, but their reciprocals $\\dfrac{1}{2}$, $\\dfrac{13}{10}$, $\\dfrac{21}{10}$ go up by $\\dfrac{4}{5}$ at each step: turning both sides of the rule over gives $\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{4}{5}$, a linear rule for the reciprocals, and they form an arithmetic sequence.",
      "general": "A rule for a sequence is linear when it gives each term as a sum of fixed multiples of the terms before it, with or without a fixed number added. **Linearising a recurrence** turns a rule that is not linear into a linear one, in one of three ways. Where $a_{n+2}a_n = a_{n+1}^2 + c$ for every whole number $n$, with a fixed number $c$ and positive terms, the rule at $n$ is taken from the rule at $n + 1$; the ratio $\\dfrac{a_{n+2} + a_n}{a_{n+1}}$ then has one value $b$ for every $n$, so $a_{n+2} = ba_{n+1} - a_n$. Where the rule is a quotient of positive terms that turns over into a sum, the reciprocals $\\dfrac{1}{a_n}$ follow a linear rule. Where the rule is built from powers, products and quotients of positive terms, the logarithms of the terms to one fixed base follow a linear rule. The linear rule is then worked with the facts for arithmetic sequences and for linear recurrences of order 2."
    }
  ],
  "kinds": [
    {
      "id": "t241-k1",
      "forms": [
        {
          "example": {
            "problem": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 5$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 701}{a_n}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 5$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 701}{a_n}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
              },
              {
                "step": "Every term $a_n$ is positive.",
                "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 701$ and the bottom $a_n$ of the rule."
              },
              {
                "step": "$a_{n+2}a_n = a_{n+1}^2 + 701$",
                "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
              },
              {
                "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 701$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
              },
              {
                "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
                "reason": "Elimination: line 3 is taken from line 4, and the two numbers $701$ cancel."
              },
              {
                "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
                "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
              },
              {
                "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
                "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
              },
              {
                "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
              },
              {
                "step": "$a_2 = \\dfrac{3^2 + 701}{5} = 142$",
                "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 5$ and $a_1 = 3$."
              },
              {
                "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{142 + 5}{3} = 49$",
                "reason": "Substituting a value: $a_0 = 5$, $a_1 = 3$ and $a_2 = 142$ from line 9."
              },
              {
                "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 49$ for every whole number $n$.",
                "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
              },
              {
                "step": "$a_{n+2} + a_n = 49a_{n+1}$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
              },
              {
                "step": "$a_{n+2} = 49a_{n+1} - a_n$",
                "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
              },
              {
                "step": "So $b = 49$.",
                "reason": "Linear recurrence of order 2: line 13 is $a_{n+2} = ba_{n+1} - a_n$ with $b = 49$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 7$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 691}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 7$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 691}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 691$ and the bottom $a_n$ of the rule."
                },
                {
                  "step": "$a_{n+2}a_n = a_{n+1}^2 + 691$",
                  "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 691$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
                },
                {
                  "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
                  "reason": "Elimination: line 3 is taken from line 4, and the two numbers $691$ cancel."
                },
                {
                  "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
                  "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
                },
                {
                  "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
                  "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
                },
                {
                  "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_2 = \\dfrac{4^2 + 691}{7} = 101$",
                  "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 7$ and $a_1 = 4$."
                },
                {
                  "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{101 + 7}{4} = 27$",
                  "reason": "Substituting a value: $a_0 = 7$, $a_1 = 4$ and $a_2 = 101$ from line 9."
                },
                {
                  "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 27$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
                },
                {
                  "step": "$a_{n+2} + a_n = 27a_{n+1}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
                },
                {
                  "step": "$a_{n+2} = 27a_{n+1} - a_n$",
                  "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
                },
                {
                  "step": "So $b = 27$.",
                  "reason": "Linear recurrence of order 2: line 13 is $a_{n+2} = ba_{n+1} - a_n$ with $b = 27$."
                }
              ]
            },
            {
              "prompt": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 9$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1343}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "40",
              "lines": [
                {
                  "step": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 9$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1343}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 1343$ and the bottom $a_n$ of the rule."
                },
                {
                  "step": "$a_{n+2}a_n = a_{n+1}^2 + 1343$",
                  "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1343$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
                },
                {
                  "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
                  "reason": "Elimination: line 3 is taken from line 4, and the two numbers $1343$ cancel."
                },
                {
                  "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
                  "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
                },
                {
                  "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
                  "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
                },
                {
                  "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_2 = \\dfrac{9^2 + 1343}{4} = 356$",
                  "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 4$ and $a_1 = 9$."
                },
                {
                  "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{356 + 4}{9} = 40$",
                  "reason": "Substituting a value: $a_0 = 4$, $a_1 = 9$ and $a_2 = 356$ from line 9."
                },
                {
                  "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 40$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
                },
                {
                  "step": "$a_{n+2} + a_n = 40a_{n+1}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
                },
                {
                  "step": "$a_{n+2} = 40a_{n+1} - a_n$",
                  "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
                },
                {
                  "step": "So $b = 40$.",
                  "reason": "Linear recurrence of order 2: line 13 is $a_{n+2} = ba_{n+1} - a_n$ with $b = 40$."
                }
              ]
            },
            {
              "prompt": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 2$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 287}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "50",
              "lines": [
                {
                  "step": "Find a whole number $b$ for which $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 2$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 287}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 287$ and the bottom $a_n$ of the rule."
                },
                {
                  "step": "$a_{n+2}a_n = a_{n+1}^2 + 287$",
                  "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 287$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
                },
                {
                  "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
                  "reason": "Elimination: line 3 is taken from line 4, and the two numbers $287$ cancel."
                },
                {
                  "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
                  "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
                },
                {
                  "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
                  "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
                },
                {
                  "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_2 = \\dfrac{2^2 + 287}{3} = 97$",
                  "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 3$ and $a_1 = 2$."
                },
                {
                  "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{97 + 3}{2} = 50$",
                  "reason": "Substituting a value: $a_0 = 3$, $a_1 = 2$ and $a_2 = 97$ from line 9."
                },
                {
                  "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 50$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
                },
                {
                  "step": "$a_{n+2} + a_n = 50a_{n+1}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
                },
                {
                  "step": "$a_{n+2} = 50a_{n+1} - a_n$",
                  "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
                },
                {
                  "step": "So $b = 50$.",
                  "reason": "Linear recurrence of order 2: line 13 is $a_{n+2} = ba_{n+1} - a_n$ with $b = 50$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 7$, $a_2 = 29$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 277}{a_n}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 7$, $a_2 = 29$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 277}{a_n}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
              },
              {
                "step": "Every term $a_n$ is positive.",
                "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 277$ and the bottom $a_n$ of the rule."
              },
              {
                "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 277$",
                "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
              },
              {
                "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 277$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
              },
              {
                "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
                "reason": "Elimination: line 3 is taken from line 4, and the two numbers $277$ cancel."
              },
              {
                "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
                "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
              },
              {
                "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
                "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
              },
              {
                "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
              },
              {
                "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
                "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
              },
              {
                "step": "$a_3 = \\dfrac{7 \\cdot 29 + 277}{6} = 80$",
                "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 6$, $a_1 = 7$ and $a_2 = 29$."
              },
              {
                "step": "$d_0 = \\dfrac{29 + 6}{7} = 5$",
                "reason": "Substituting a value: $n = 0$ in line 9."
              },
              {
                "step": "$d_1 = \\dfrac{80 + 7}{29} = 3$",
                "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 80$ from line 10."
              },
              {
                "step": "So $d_n$ is $5$ for every even whole number $n$ and $3$ for every odd whole number $n$.",
                "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
              },
              {
                "step": "So $d_nd_{n+1} = 15$ for every whole number $n$.",
                "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $5$ and $3$ in one order or the other, and $5 \\cdot 3 = 15$."
              },
              {
                "step": "$a_{n+2} + a_n = d_na_{n+1}$",
                "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
              },
              {
                "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
                "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
              },
              {
                "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
                "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
              },
              {
                "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
                "reason": "Adding two equations: lines 15 and 17 are added."
              },
              {
                "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
                "reason": "Common factor: $d_n$ is taken out on the right."
              },
              {
                "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
              },
              {
                "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
                "reason": "Substituting a value: line 20 goes into the bracket of line 19."
              },
              {
                "step": "$a_{n+4} + 2a_{n+2} + a_n = 15a_{n+2}$",
                "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
              },
              {
                "step": "$a_{n+4} = 13a_{n+2} - a_n$",
                "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $15 - 2 = 13$."
              },
              {
                "step": "So $b = 13$.",
                "reason": "Transitive property: line 23 is the asked relation with $b = 13$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 7$, $a_1 = 5$, $a_2 = 8$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 317}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 7$, $a_1 = 5$, $a_2 = 8$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 317}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 317$ and the bottom $a_n$ of the rule."
                },
                {
                  "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 317$",
                  "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 317$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
                },
                {
                  "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
                  "reason": "Elimination: line 3 is taken from line 4, and the two numbers $317$ cancel."
                },
                {
                  "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
                  "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
                },
                {
                  "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
                  "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
                },
                {
                  "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
                },
                {
                  "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
                  "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
                },
                {
                  "step": "$a_3 = \\dfrac{5 \\cdot 8 + 317}{7} = 51$",
                  "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 7$, $a_1 = 5$ and $a_2 = 8$."
                },
                {
                  "step": "$d_0 = \\dfrac{8 + 7}{5} = 3$",
                  "reason": "Substituting a value: $n = 0$ in line 9."
                },
                {
                  "step": "$d_1 = \\dfrac{51 + 5}{8} = 7$",
                  "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 51$ from line 10."
                },
                {
                  "step": "So $d_n$ is $3$ for every even whole number $n$ and $7$ for every odd whole number $n$.",
                  "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
                },
                {
                  "step": "So $d_nd_{n+1} = 21$ for every whole number $n$.",
                  "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $3$ and $7$ in one order or the other, and $3 \\cdot 7 = 21$."
                },
                {
                  "step": "$a_{n+2} + a_n = d_na_{n+1}$",
                  "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
                },
                {
                  "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
                  "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
                },
                {
                  "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
                  "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
                  "reason": "Adding two equations: lines 15 and 17 are added."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
                  "reason": "Common factor: $d_n$ is taken out on the right."
                },
                {
                  "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
                  "reason": "Substituting a value: line 20 goes into the bracket of line 19."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = 21a_{n+2}$",
                  "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
                },
                {
                  "step": "$a_{n+4} = 19a_{n+2} - a_n$",
                  "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $21 - 2 = 19$."
                },
                {
                  "step": "So $b = 19$.",
                  "reason": "Transitive property: line 23 is the asked relation with $b = 19$."
                }
              ]
            },
            {
              "prompt": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 6$, $a_2 = 38$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 356}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "26",
              "lines": [
                {
                  "step": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 6$, $a_2 = 38$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 356}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 356$ and the bottom $a_n$ of the rule."
                },
                {
                  "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 356$",
                  "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 356$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
                },
                {
                  "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
                  "reason": "Elimination: line 3 is taken from line 4, and the two numbers $356$ cancel."
                },
                {
                  "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
                  "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
                },
                {
                  "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
                  "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
                },
                {
                  "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
                },
                {
                  "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
                  "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
                },
                {
                  "step": "$a_3 = \\dfrac{6 \\cdot 38 + 356}{4} = 146$",
                  "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 4$, $a_1 = 6$ and $a_2 = 38$."
                },
                {
                  "step": "$d_0 = \\dfrac{38 + 4}{6} = 7$",
                  "reason": "Substituting a value: $n = 0$ in line 9."
                },
                {
                  "step": "$d_1 = \\dfrac{146 + 6}{38} = 4$",
                  "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 146$ from line 10."
                },
                {
                  "step": "So $d_n$ is $7$ for every even whole number $n$ and $4$ for every odd whole number $n$.",
                  "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
                },
                {
                  "step": "So $d_nd_{n+1} = 28$ for every whole number $n$.",
                  "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $7$ and $4$ in one order or the other, and $7 \\cdot 4 = 28$."
                },
                {
                  "step": "$a_{n+2} + a_n = d_na_{n+1}$",
                  "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
                },
                {
                  "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
                  "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
                },
                {
                  "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
                  "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
                  "reason": "Adding two equations: lines 15 and 17 are added."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
                  "reason": "Common factor: $d_n$ is taken out on the right."
                },
                {
                  "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
                  "reason": "Substituting a value: line 20 goes into the bracket of line 19."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = 28a_{n+2}$",
                  "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
                },
                {
                  "step": "$a_{n+4} = 26a_{n+2} - a_n$",
                  "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $28 - 2 = 26$."
                },
                {
                  "step": "So $b = 26$.",
                  "reason": "Transitive property: line 23 is the asked relation with $b = 26$."
                }
              ]
            },
            {
              "prompt": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 4$, $a_2 = 12$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 112}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find a whole number $b$ for which $a_{n+4} = ba_{n+2} - a_n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 4$, $a_2 = 12$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 112}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 112$ and the bottom $a_n$ of the rule."
                },
                {
                  "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 112$",
                  "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
                },
                {
                  "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 112$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
                },
                {
                  "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
                  "reason": "Elimination: line 3 is taken from line 4, and the two numbers $112$ cancel."
                },
                {
                  "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
                  "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
                },
                {
                  "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
                  "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
                },
                {
                  "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
                },
                {
                  "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
                  "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
                },
                {
                  "step": "$a_3 = \\dfrac{4 \\cdot 12 + 112}{8} = 20$",
                  "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 8$, $a_1 = 4$ and $a_2 = 12$."
                },
                {
                  "step": "$d_0 = \\dfrac{12 + 8}{4} = 5$",
                  "reason": "Substituting a value: $n = 0$ in line 9."
                },
                {
                  "step": "$d_1 = \\dfrac{20 + 4}{12} = 2$",
                  "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 20$ from line 10."
                },
                {
                  "step": "So $d_n$ is $5$ for every even whole number $n$ and $2$ for every odd whole number $n$.",
                  "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
                },
                {
                  "step": "So $d_nd_{n+1} = 10$ for every whole number $n$.",
                  "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $5$ and $2$ in one order or the other, and $5 \\cdot 2 = 10$."
                },
                {
                  "step": "$a_{n+2} + a_n = d_na_{n+1}$",
                  "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
                },
                {
                  "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
                  "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
                },
                {
                  "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
                  "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
                  "reason": "Adding two equations: lines 15 and 17 are added."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
                  "reason": "Common factor: $d_n$ is taken out on the right."
                },
                {
                  "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
                  "reason": "Substituting a value: line 20 goes into the bracket of line 19."
                },
                {
                  "step": "$a_{n+4} + 2a_{n+2} + a_n = 10a_{n+2}$",
                  "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
                },
                {
                  "step": "$a_{n+4} = 8a_{n+2} - a_n$",
                  "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $10 - 2 = 8$."
                },
                {
                  "step": "So $b = 8$.",
                  "reason": "Transitive property: line 23 is the asked relation with $b = 8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t241-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 19a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 5$, $a_1 = 2$ and $a_{n+2} = 17a_{n+1} - a_n$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 19a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 5$, $a_1 = 2$ and $a_{n+2} = 17a_{n+1} - a_n$ for every whole number $n$.",
                "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
              },
              {
                "step": "$a_2 = 17 \\cdot 2 - 5 = 29$",
                "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 5$ and $a_1 = 2$."
              },
              {
                "step": "$(a_1 + a_0)^2 - 19a_0a_1 = (2 + 5)^2 - 19 \\cdot 5 \\cdot 2 = -141$",
                "reason": "Substituting a value: $a_0 = 5$ and $a_1 = 2$, with $(2 + 5)^2 = 49$ and $19 \\cdot 5 \\cdot 2 = 190$."
              },
              {
                "step": "$(a_2 + a_1)^2 - 19a_1a_2 = (29 + 2)^2 - 19 \\cdot 2 \\cdot 29 = -141$",
                "reason": "Substituting a value: $a_1 = 2$ and $a_2 = 29$ from line 2, with $(29 + 2)^2 = 961$ and $19 \\cdot 2 \\cdot 29 = 1102$."
              },
              {
                "step": "Guess: $(a_{n+1} + a_n)^2 - 19a_na_{n+1} = -141$ for every whole number $n$.",
                "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
              },
              {
                "step": "The guess holds at $n = 0$.",
                "reason": "Base case: line 3 is the guess at $n = 0$."
              },
              {
                "step": "Assume that $(a_{k+1} + a_k)^2 - 19a_ka_{k+1} = -141$ for some whole number $k$.",
                "reason": "Inductive assumption: the guess at $n = k$."
              },
              {
                "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 19a_ka_{k+1} = -141$",
                "reason": "Square of a binomial: the square in line 7 is multiplied out."
              },
              {
                "step": "$a_{k+1}^2 - 17a_ka_{k+1} + a_k^2 = -141$",
                "reason": "Collecting like terms: $2 - 19 = -17$."
              },
              {
                "step": "$(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 19a_{k+1}a_{k+2}$",
                "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
              },
              {
                "step": "$(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = a_{k+2}^2 - 17a_{k+1}a_{k+2} + a_{k+1}^2$",
                "reason": "Collecting like terms: $2 - 19 = -17$, as in line 9."
              },
              {
                "step": "$(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 17a_{k+1}) + a_{k+1}^2$",
                "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
              },
              {
                "step": "$a_{k+2} - 17a_{k+1} = -a_k$",
                "reason": "Adding the same number to both sides: $17a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
              },
              {
                "step": "$(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
                "reason": "Substituting a value: line 13 goes into the bracket of line 12."
              },
              {
                "step": "$(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = -a_k(17a_{k+1} - a_k) + a_{k+1}^2$",
                "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
              },
              {
                "step": "$(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = a_{k+1}^2 - 17a_ka_{k+1} + a_k^2$",
                "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
              },
              {
                "step": "So $(a_{k+2} + a_{k+1})^2 - 19a_{k+1}a_{k+2} = -141$, and the guess holds at $n = k + 1$.",
                "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-141$."
              },
              {
                "step": "So $(a_{n+1} + a_n)^2 - 19a_na_{n+1} = -141$ for every whole number $n$.",
                "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
              },
              {
                "step": "So $c = -141$.",
                "reason": "Adding the same number to both sides: $19a_na_{n+1}$ is added to both sides of line 18, which is then the asked relation with $c = -141$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 7a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 7$, $a_1 = 5$ and $a_{n+2} = 5a_{n+1} - a_n$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "-101",
              "lines": [
                {
                  "step": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 7a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 7$, $a_1 = 5$ and $a_{n+2} = 5a_{n+1} - a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$a_2 = 5 \\cdot 5 - 7 = 18$",
                  "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 7$ and $a_1 = 5$."
                },
                {
                  "step": "$(a_1 + a_0)^2 - 7a_0a_1 = (5 + 7)^2 - 7 \\cdot 7 \\cdot 5 = -101$",
                  "reason": "Substituting a value: $a_0 = 7$ and $a_1 = 5$, with $(5 + 7)^2 = 144$ and $7 \\cdot 7 \\cdot 5 = 245$."
                },
                {
                  "step": "$(a_2 + a_1)^2 - 7a_1a_2 = (18 + 5)^2 - 7 \\cdot 5 \\cdot 18 = -101$",
                  "reason": "Substituting a value: $a_1 = 5$ and $a_2 = 18$ from line 2, with $(18 + 5)^2 = 529$ and $7 \\cdot 5 \\cdot 18 = 630$."
                },
                {
                  "step": "Guess: $(a_{n+1} + a_n)^2 - 7a_na_{n+1} = -101$ for every whole number $n$.",
                  "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
                },
                {
                  "step": "The guess holds at $n = 0$.",
                  "reason": "Base case: line 3 is the guess at $n = 0$."
                },
                {
                  "step": "Assume that $(a_{k+1} + a_k)^2 - 7a_ka_{k+1} = -101$ for some whole number $k$.",
                  "reason": "Inductive assumption: the guess at $n = k$."
                },
                {
                  "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 7a_ka_{k+1} = -101$",
                  "reason": "Square of a binomial: the square in line 7 is multiplied out."
                },
                {
                  "step": "$a_{k+1}^2 - 5a_ka_{k+1} + a_k^2 = -101$",
                  "reason": "Collecting like terms: $2 - 7 = -5$."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 7a_{k+1}a_{k+2}$",
                  "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = a_{k+2}^2 - 5a_{k+1}a_{k+2} + a_{k+1}^2$",
                  "reason": "Collecting like terms: $2 - 7 = -5$, as in line 9."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 5a_{k+1}) + a_{k+1}^2$",
                  "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
                },
                {
                  "step": "$a_{k+2} - 5a_{k+1} = -a_k$",
                  "reason": "Adding the same number to both sides: $5a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
                  "reason": "Substituting a value: line 13 goes into the bracket of line 12."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = -a_k(5a_{k+1} - a_k) + a_{k+1}^2$",
                  "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = a_{k+1}^2 - 5a_ka_{k+1} + a_k^2$",
                  "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
                },
                {
                  "step": "So $(a_{k+2} + a_{k+1})^2 - 7a_{k+1}a_{k+2} = -101$, and the guess holds at $n = k + 1$.",
                  "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-101$."
                },
                {
                  "step": "So $(a_{n+1} + a_n)^2 - 7a_na_{n+1} = -101$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
                },
                {
                  "step": "So $c = -101$.",
                  "reason": "Adding the same number to both sides: $7a_na_{n+1}$ is added to both sides of line 18, which is then the asked relation with $c = -101$."
                }
              ]
            },
            {
              "prompt": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 13a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 8$, $a_1 = 7$ and $a_{n+2} = 11a_{n+1} - a_n$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "-503",
              "lines": [
                {
                  "step": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 13a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 8$, $a_1 = 7$ and $a_{n+2} = 11a_{n+1} - a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$a_2 = 11 \\cdot 7 - 8 = 69$",
                  "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 8$ and $a_1 = 7$."
                },
                {
                  "step": "$(a_1 + a_0)^2 - 13a_0a_1 = (7 + 8)^2 - 13 \\cdot 8 \\cdot 7 = -503$",
                  "reason": "Substituting a value: $a_0 = 8$ and $a_1 = 7$, with $(7 + 8)^2 = 225$ and $13 \\cdot 8 \\cdot 7 = 728$."
                },
                {
                  "step": "$(a_2 + a_1)^2 - 13a_1a_2 = (69 + 7)^2 - 13 \\cdot 7 \\cdot 69 = -503$",
                  "reason": "Substituting a value: $a_1 = 7$ and $a_2 = 69$ from line 2, with $(69 + 7)^2 = 5776$ and $13 \\cdot 7 \\cdot 69 = 6279$."
                },
                {
                  "step": "Guess: $(a_{n+1} + a_n)^2 - 13a_na_{n+1} = -503$ for every whole number $n$.",
                  "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
                },
                {
                  "step": "The guess holds at $n = 0$.",
                  "reason": "Base case: line 3 is the guess at $n = 0$."
                },
                {
                  "step": "Assume that $(a_{k+1} + a_k)^2 - 13a_ka_{k+1} = -503$ for some whole number $k$.",
                  "reason": "Inductive assumption: the guess at $n = k$."
                },
                {
                  "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 13a_ka_{k+1} = -503$",
                  "reason": "Square of a binomial: the square in line 7 is multiplied out."
                },
                {
                  "step": "$a_{k+1}^2 - 11a_ka_{k+1} + a_k^2 = -503$",
                  "reason": "Collecting like terms: $2 - 13 = -11$."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 13a_{k+1}a_{k+2}$",
                  "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = a_{k+2}^2 - 11a_{k+1}a_{k+2} + a_{k+1}^2$",
                  "reason": "Collecting like terms: $2 - 13 = -11$, as in line 9."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 11a_{k+1}) + a_{k+1}^2$",
                  "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
                },
                {
                  "step": "$a_{k+2} - 11a_{k+1} = -a_k$",
                  "reason": "Adding the same number to both sides: $11a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
                  "reason": "Substituting a value: line 13 goes into the bracket of line 12."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = -a_k(11a_{k+1} - a_k) + a_{k+1}^2$",
                  "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = a_{k+1}^2 - 11a_ka_{k+1} + a_k^2$",
                  "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
                },
                {
                  "step": "So $(a_{k+2} + a_{k+1})^2 - 13a_{k+1}a_{k+2} = -503$, and the guess holds at $n = k + 1$.",
                  "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-503$."
                },
                {
                  "step": "So $(a_{n+1} + a_n)^2 - 13a_na_{n+1} = -503$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
                },
                {
                  "step": "So $c = -503$.",
                  "reason": "Adding the same number to both sides: $13a_na_{n+1}$ is added to both sides of line 18, which is then the asked relation with $c = -503$."
                }
              ]
            },
            {
              "prompt": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 11a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 3$, $a_1 = 7$ and $a_{n+2} = 9a_{n+1} - a_n$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "-131",
              "lines": [
                {
                  "step": "Find the integer $c$ for which $(a_{n+1} + a_n)^2 = 11a_na_{n+1} + c$ for every whole number $n$, where $a_0 = 3$, $a_1 = 7$ and $a_{n+2} = 9a_{n+1} - a_n$ for every whole number $n$.",
                  "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
                },
                {
                  "step": "$a_2 = 9 \\cdot 7 - 3 = 60$",
                  "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 3$ and $a_1 = 7$."
                },
                {
                  "step": "$(a_1 + a_0)^2 - 11a_0a_1 = (7 + 3)^2 - 11 \\cdot 3 \\cdot 7 = -131$",
                  "reason": "Substituting a value: $a_0 = 3$ and $a_1 = 7$, with $(7 + 3)^2 = 100$ and $11 \\cdot 3 \\cdot 7 = 231$."
                },
                {
                  "step": "$(a_2 + a_1)^2 - 11a_1a_2 = (60 + 7)^2 - 11 \\cdot 7 \\cdot 60 = -131$",
                  "reason": "Substituting a value: $a_1 = 7$ and $a_2 = 60$ from line 2, with $(60 + 7)^2 = 4489$ and $11 \\cdot 7 \\cdot 60 = 4620$."
                },
                {
                  "step": "Guess: $(a_{n+1} + a_n)^2 - 11a_na_{n+1} = -131$ for every whole number $n$.",
                  "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
                },
                {
                  "step": "The guess holds at $n = 0$.",
                  "reason": "Base case: line 3 is the guess at $n = 0$."
                },
                {
                  "step": "Assume that $(a_{k+1} + a_k)^2 - 11a_ka_{k+1} = -131$ for some whole number $k$.",
                  "reason": "Inductive assumption: the guess at $n = k$."
                },
                {
                  "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 11a_ka_{k+1} = -131$",
                  "reason": "Square of a binomial: the square in line 7 is multiplied out."
                },
                {
                  "step": "$a_{k+1}^2 - 9a_ka_{k+1} + a_k^2 = -131$",
                  "reason": "Collecting like terms: $2 - 11 = -9$."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 11a_{k+1}a_{k+2}$",
                  "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = a_{k+2}^2 - 9a_{k+1}a_{k+2} + a_{k+1}^2$",
                  "reason": "Collecting like terms: $2 - 11 = -9$, as in line 9."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 9a_{k+1}) + a_{k+1}^2$",
                  "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
                },
                {
                  "step": "$a_{k+2} - 9a_{k+1} = -a_k$",
                  "reason": "Adding the same number to both sides: $9a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
                  "reason": "Substituting a value: line 13 goes into the bracket of line 12."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = -a_k(9a_{k+1} - a_k) + a_{k+1}^2$",
                  "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
                },
                {
                  "step": "$(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = a_{k+1}^2 - 9a_ka_{k+1} + a_k^2$",
                  "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
                },
                {
                  "step": "So $(a_{k+2} + a_{k+1})^2 - 11a_{k+1}a_{k+2} = -131$, and the guess holds at $n = k + 1$.",
                  "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-131$."
                },
                {
                  "step": "So $(a_{n+1} + a_n)^2 - 11a_na_{n+1} = -131$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
                },
                {
                  "step": "So $c = -131$.",
                  "reason": "Adding the same number to both sides: $11a_na_{n+1}$ is added to both sides of line 18, which is then the asked relation with $c = -131$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t241-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{11a_n}{11 + 2a_n}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{11a_n}{11 + 2a_n}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
              },
              {
                "step": "Every term $a_n$ is positive.",
                "reason": "Induction: $a_0 = 8$ is positive, and a positive $a_n$ gives a positive top $11a_n$ and a positive bottom $11 + 2a_n$."
              },
              {
                "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{11 + 2a_n}{11a_n}$",
                "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
              },
              {
                "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{11}{11a_n} + \\dfrac{2a_n}{11a_n}$",
                "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
              },
              {
                "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{2}{11}$",
                "reason": "Cancelling a common factor: $11$ in the first fraction and $a_n$ in the second."
              },
              {
                "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{2}{11}$ for every whole number $n$.",
                "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
              },
              {
                "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{2}{11}$.",
                "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
              },
              {
                "step": "$d_0 = \\dfrac{1}{8}$",
                "reason": "Substituting a value: $a_0 = 8$ in line 6."
              },
              {
                "step": "$d_n = \\dfrac{1}{8} + \\dfrac{2}{11}n$",
                "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
              },
              {
                "step": "$d_n = \\dfrac{11 + 16n}{88}$",
                "reason": "Single fraction: both fractions are written over the common bottom $88$."
              },
              {
                "step": "$a_n = \\dfrac{88}{11 + 16n}$",
                "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = 5$ and $a_{n+1} = \\dfrac{9a_n}{9 + 4a_n}$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "45/(9+20*n)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = 5$ and $a_{n+1} = \\dfrac{9a_n}{9 + 4a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0 = 5$ is positive, and a positive $a_n$ gives a positive top $9a_n$ and a positive bottom $9 + 4a_n$."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{9 + 4a_n}{9a_n}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{9}{9a_n} + \\dfrac{4a_n}{9a_n}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{4}{9}$",
                  "reason": "Cancelling a common factor: $9$ in the first fraction and $a_n$ in the second."
                },
                {
                  "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{4}{9}$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
                },
                {
                  "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{4}{9}$.",
                  "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
                },
                {
                  "step": "$d_0 = \\dfrac{1}{5}$",
                  "reason": "Substituting a value: $a_0 = 5$ in line 6."
                },
                {
                  "step": "$d_n = \\dfrac{1}{5} + \\dfrac{4}{9}n$",
                  "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
                },
                {
                  "step": "$d_n = \\dfrac{9 + 20n}{45}$",
                  "reason": "Single fraction: both fractions are written over the common bottom $45$."
                },
                {
                  "step": "$a_n = \\dfrac{45}{9 + 20n}$",
                  "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = 4$ and $a_{n+1} = \\dfrac{3a_n}{3 + 11a_n}$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "12/(3+44*n)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = 4$ and $a_{n+1} = \\dfrac{3a_n}{3 + 11a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0 = 4$ is positive, and a positive $a_n$ gives a positive top $3a_n$ and a positive bottom $3 + 11a_n$."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{3 + 11a_n}{3a_n}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{3}{3a_n} + \\dfrac{11a_n}{3a_n}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{11}{3}$",
                  "reason": "Cancelling a common factor: $3$ in the first fraction and $a_n$ in the second."
                },
                {
                  "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{11}{3}$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
                },
                {
                  "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{11}{3}$.",
                  "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
                },
                {
                  "step": "$d_0 = \\dfrac{1}{4}$",
                  "reason": "Substituting a value: $a_0 = 4$ in line 6."
                },
                {
                  "step": "$d_n = \\dfrac{1}{4} + \\dfrac{11}{3}n$",
                  "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
                },
                {
                  "step": "$d_n = \\dfrac{3 + 44n}{12}$",
                  "reason": "Single fraction: both fractions are written over the common bottom $12$."
                },
                {
                  "step": "$a_n = \\dfrac{12}{3 + 44n}$",
                  "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{7a_n}{7 + 8a_n}$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "77/(7+88*n)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{7a_n}{7 + 8a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0 = 11$ is positive, and a positive $a_n$ gives a positive top $7a_n$ and a positive bottom $7 + 8a_n$."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{7 + 8a_n}{7a_n}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{7}{7a_n} + \\dfrac{8a_n}{7a_n}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{8}{7}$",
                  "reason": "Cancelling a common factor: $7$ in the first fraction and $a_n$ in the second."
                },
                {
                  "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{8}{7}$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
                },
                {
                  "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{8}{7}$.",
                  "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
                },
                {
                  "step": "$d_0 = \\dfrac{1}{11}$",
                  "reason": "Substituting a value: $a_0 = 11$ in line 6."
                },
                {
                  "step": "$d_n = \\dfrac{1}{11} + \\dfrac{8}{7}n$",
                  "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
                },
                {
                  "step": "$d_n = \\dfrac{7 + 88n}{77}$",
                  "reason": "Single fraction: both fractions are written over the common bottom $77$."
                },
                {
                  "step": "$a_n = \\dfrac{77}{7 + 88n}$",
                  "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $\\log_3 a_n$ as an expression in $n$, where $a_0 = 81$, $a_1 = 6561$ and $a_{n+2} = \\dfrac{a_{n+1}^{16}}{a_n^{55}}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find $\\log_3 a_n$ as an expression in $n$, where $a_0 = 81$, $a_1 = 6561$ and $a_{n+2} = \\dfrac{a_{n+1}^{16}}{a_n^{55}}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
              },
              {
                "step": "Every term $a_n$ is positive.",
                "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
              },
              {
                "step": "$\\log_3 a_{n+2} = \\log_3 \\dfrac{a_{n+1}^{16}}{a_n^{55}}$",
                "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $3$."
              },
              {
                "step": "$\\log_3 a_{n+2} = \\log_3 a_{n+1}^{16} - \\log_3 a_n^{55}$",
                "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
              },
              {
                "step": "$\\log_3 a_{n+2} = 16\\log_3 a_{n+1} - 55\\log_3 a_n$",
                "reason": "Log of a power: the power comes out in front of each logarithm."
              },
              {
                "step": "Write $d_n = \\log_3 a_n$, so $d_{n+2} = 16d_{n+1} - 55d_n$ for every whole number $n$.",
                "reason": "Linearising a recurrence: the logarithm $\\log_3 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
              },
              {
                "step": "So $d_0 = 4$ and $d_1 = 8$.",
                "reason": "Logarithm: $a_0 = 3^4$ and $a_1 = 3^8$."
              },
              {
                "step": "$x^2 = 16x - 55$",
                "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
              },
              {
                "step": "$x^2 - 16x + 55 = 0$",
                "reason": "Adding the same number to both sides: $16x - 55$ is taken from both sides."
              },
              {
                "step": "$(x - 5)(x - 11) = 0$",
                "reason": "Factoring a quadratic: $-5$ and $-11$ have sum $-16$ and product $55$."
              },
              {
                "step": "The roots are $5$ and $11$.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "$d_n = y \\cdot 5^n + z \\cdot 11^n$",
                "reason": "General solution (distinct roots): the roots $5$ and $11$ are different, so two numbers $y$ and $z$ give every term."
              },
              {
                "step": "$y + z = 4$",
                "reason": "Substituting a value: $n = 0$ in line 12, with $5^0 = 11^0 = 1$ and $d_0 = 4$."
              },
              {
                "step": "$5y + 11z = 8$",
                "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 8$."
              },
              {
                "step": "$6z = -12$",
                "reason": "Elimination: $5$ times line 13 is taken from line 14."
              },
              {
                "step": "$z = -2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
              },
              {
                "step": "$y = 6$",
                "reason": "Back-substitution: $z = -2$ goes into line 13."
              },
              {
                "step": "$\\log_3 a_n = 6 \\cdot 5^n - 2 \\cdot 11^n$",
                "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_3 a_n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\log_2 a_n$ as an expression in $n$, where $a_0 = 32$, $a_1 = 65{,}536$ and $a_{n+2} = \\dfrac{a_{n+1}^7}{a_n^{10}}$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "3*2^n+2*5^n",
              "lines": [
                {
                  "step": "Find $\\log_2 a_n$ as an expression in $n$, where $a_0 = 32$, $a_1 = 65{,}536$ and $a_{n+2} = \\dfrac{a_{n+1}^7}{a_n^{10}}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
                },
                {
                  "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^7}{a_n^{10}}$",
                  "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
                },
                {
                  "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^7 - \\log_2 a_n^{10}$",
                  "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
                },
                {
                  "step": "$\\log_2 a_{n+2} = 7\\log_2 a_{n+1} - 10\\log_2 a_n$",
                  "reason": "Log of a power: the power comes out in front of each logarithm."
                },
                {
                  "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 7d_{n+1} - 10d_n$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
                },
                {
                  "step": "So $d_0 = 5$ and $d_1 = 16$.",
                  "reason": "Logarithm: $a_0 = 2^5$ and $a_1 = 2^{16}$."
                },
                {
                  "step": "$x^2 = 7x - 10$",
                  "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 7x + 10 = 0$",
                  "reason": "Adding the same number to both sides: $7x - 10$ is taken from both sides."
                },
                {
                  "step": "$(x - 2)(x - 5) = 0$",
                  "reason": "Factoring a quadratic: $-2$ and $-5$ have sum $-7$ and product $10$."
                },
                {
                  "step": "The roots are $2$ and $5$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$d_n = y \\cdot 2^n + z \\cdot 5^n$",
                  "reason": "General solution (distinct roots): the roots $2$ and $5$ are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 5$",
                  "reason": "Substituting a value: $n = 0$ in line 12, with $2^0 = 5^0 = 1$ and $d_0 = 5$."
                },
                {
                  "step": "$2y + 5z = 16$",
                  "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 16$."
                },
                {
                  "step": "$3z = 6$",
                  "reason": "Elimination: $2$ times line 13 is taken from line 14."
                },
                {
                  "step": "$z = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Back-substitution: $z = 2$ goes into line 13."
                },
                {
                  "step": "$\\log_2 a_n = 3 \\cdot 2^n + 2 \\cdot 5^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
                }
              ]
            },
            {
              "prompt": "Find $\\log_2 a_n$ as an expression in $n$, where $a_0 = 4$, $a_1 = 1024$ and $a_{n+2} = \\dfrac{a_{n+1}^{22}}{a_n^{120}}$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "7*10^n-5*12^n",
              "lines": [
                {
                  "step": "Find $\\log_2 a_n$ as an expression in $n$, where $a_0 = 4$, $a_1 = 1024$ and $a_{n+2} = \\dfrac{a_{n+1}^{22}}{a_n^{120}}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
                },
                {
                  "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^{22}}{a_n^{120}}$",
                  "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
                },
                {
                  "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^{22} - \\log_2 a_n^{120}$",
                  "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
                },
                {
                  "step": "$\\log_2 a_{n+2} = 22\\log_2 a_{n+1} - 120\\log_2 a_n$",
                  "reason": "Log of a power: the power comes out in front of each logarithm."
                },
                {
                  "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 22d_{n+1} - 120d_n$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
                },
                {
                  "step": "So $d_0 = 2$ and $d_1 = 10$.",
                  "reason": "Logarithm: $a_0 = 2^2$ and $a_1 = 2^{10}$."
                },
                {
                  "step": "$x^2 = 22x - 120$",
                  "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 22x + 120 = 0$",
                  "reason": "Adding the same number to both sides: $22x - 120$ is taken from both sides."
                },
                {
                  "step": "$(x - 10)(x - 12) = 0$",
                  "reason": "Factoring a quadratic: $-10$ and $-12$ have sum $-22$ and product $120$."
                },
                {
                  "step": "The roots are $10$ and $12$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$d_n = y \\cdot 10^n + z \\cdot 12^n$",
                  "reason": "General solution (distinct roots): the roots $10$ and $12$ are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 2$",
                  "reason": "Substituting a value: $n = 0$ in line 12, with $10^0 = 12^0 = 1$ and $d_0 = 2$."
                },
                {
                  "step": "$10y + 12z = 10$",
                  "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 10$."
                },
                {
                  "step": "$2z = -10$",
                  "reason": "Elimination: $10$ times line 13 is taken from line 14."
                },
                {
                  "step": "$z = -5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$y = 7$",
                  "reason": "Back-substitution: $z = -5$ goes into line 13."
                },
                {
                  "step": "$\\log_2 a_n = 7 \\cdot 10^n - 5 \\cdot 12^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
                }
              ]
            },
            {
              "prompt": "Find $\\log_2 a_n$ as an expression in $n$, where $a_0 = 8$, $a_1 = 2048$ and $a_{n+2} = \\dfrac{a_{n+1}^{19}}{a_n^{84}}$ for every whole number $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*7^n-2*12^n",
              "lines": [
                {
                  "step": "Find $\\log_2 a_n$ as an expression in $n$, where $a_0 = 8$, $a_1 = 2048$ and $a_{n+2} = \\dfrac{a_{n+1}^{19}}{a_n^{84}}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
                },
                {
                  "step": "Every term $a_n$ is positive.",
                  "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
                },
                {
                  "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^{19}}{a_n^{84}}$",
                  "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
                },
                {
                  "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^{19} - \\log_2 a_n^{84}$",
                  "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
                },
                {
                  "step": "$\\log_2 a_{n+2} = 19\\log_2 a_{n+1} - 84\\log_2 a_n$",
                  "reason": "Log of a power: the power comes out in front of each logarithm."
                },
                {
                  "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 19d_{n+1} - 84d_n$ for every whole number $n$.",
                  "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
                },
                {
                  "step": "So $d_0 = 3$ and $d_1 = 11$.",
                  "reason": "Logarithm: $a_0 = 2^3$ and $a_1 = 2^{11}$."
                },
                {
                  "step": "$x^2 = 19x - 84$",
                  "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 19x + 84 = 0$",
                  "reason": "Adding the same number to both sides: $19x - 84$ is taken from both sides."
                },
                {
                  "step": "$(x - 7)(x - 12) = 0$",
                  "reason": "Factoring a quadratic: $-7$ and $-12$ have sum $-19$ and product $84$."
                },
                {
                  "step": "The roots are $7$ and $12$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$d_n = y \\cdot 7^n + z \\cdot 12^n$",
                  "reason": "General solution (distinct roots): the roots $7$ and $12$ are different, so two numbers $y$ and $z$ give every term."
                },
                {
                  "step": "$y + z = 3$",
                  "reason": "Substituting a value: $n = 0$ in line 12, with $7^0 = 12^0 = 1$ and $d_0 = 3$."
                },
                {
                  "step": "$7y + 12z = 11$",
                  "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 11$."
                },
                {
                  "step": "$5z = -10$",
                  "reason": "Elimination: $7$ times line 13 is taken from line 14."
                },
                {
                  "step": "$z = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$y = 5$",
                  "reason": "Back-substitution: $z = -2$ goes into line 13."
                },
                {
                  "step": "$\\log_2 a_n = 5 \\cdot 7^n - 2 \\cdot 12^n$",
                  "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
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
      "id": "t241-p1",
      "method": "induction",
      "statement": "For a number $c$ and a sequence of positive numbers with $a_{n+2}a_n = a_{n+1}^2 + c$ for every whole number $n$, the number $b = \\dfrac{a_2 + a_0}{a_1}$ gives $a_{n+2} = ba_{n+1} - a_n$ for every whole number $n$: linearising a recurrence by taking the rule at $n$ from the rule at $n + 1$.",
      "idea": "Writing the rule at two neighbouring places and taking one from the other removes $c$; what is left says that one ratio of terms never changes, and that fixed ratio is a linear recurrence of order 2.",
      "lines": [
        {
          "line": "$a_{n+3}a_{n+1} = a_{n+2}^2 + c$",
          "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the rule."
        },
        {
          "line": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
          "reason": "Elimination: the rule at $n$ is taken from line 1, and the two numbers $c$ cancel."
        },
        {
          "line": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
          "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
        },
        {
          "line": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
          "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
        },
        {
          "line": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
          "reason": "Dividing both sides by a nonzero number: the terms are positive, so $a_{n+1}a_{n+2}$ is not $0$."
        },
        {
          "line": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$; then $d_{n+1} = d_n$ for every whole number $n$.",
          "reason": "Substitution for a repeated expression: line 5 with its two sides written $d_{n+1}$ and $d_n$."
        },
        {
          "line": "$d_0 = \\dfrac{a_2 + a_0}{a_1} = b$",
          "reason": "Substituting a value: $n = 0$ in line 6, and $b$ as the statement sets it."
        },
        {
          "line": "Assume that $d_k = b$ for some whole number $k$.",
          "reason": "Inductive assumption: the claim $d_n = b$ at $n = k$."
        },
        {
          "line": "$d_{k+1} = d_k$",
          "reason": "Substituting a value: $n = k$ in line 6."
        },
        {
          "line": "$d_{k+1} = b$",
          "reason": "Transitive property: lines 9 and 8."
        },
        {
          "line": "So $d_n = b$ for every whole number $n$.",
          "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 10."
        },
        {
          "line": "$a_{n+2} + a_n = ba_{n+1}$",
          "reason": "Multiplying both sides by the same number: line 11 with $d_n$ written out, times $a_{n+1}$."
        },
        {
          "line": "$a_{n+2} = ba_{n+1} - a_n$",
          "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t241-s1",
      "method": "induction",
      "statement": "Prove that the sequence with $a_1 = 1$, $a_2 = \\dfrac{3}{7}$ and $a_n = \\dfrac{a_{n-2}a_{n-1}}{2a_{n-2} - a_{n-1}}$ for every whole number $n \\ge 3$ has $a_{2019} = \\dfrac{3}{8075}$, so that the top and the bottom of $a_{2019}$ in lowest terms add to $8078$. Facts it may use: induction, base case, inductive assumption, inductive step, complex fraction, reciprocal (arithmetic), substituting a value, collecting like terms, prime decomposition and the fundamental theorem of arithmetic (arithmetic), fractions in lowest terms and the gcd (arithmetic).",
      "check": {
        "proof": [
          {
            "line": "The claim $a_n = \\dfrac{3}{4n - 1}$ holds at $n = 1$ and at $n = 2$: $a_1 = 1 = \\dfrac{3}{4 \\cdot 1 - 1}$ and $a_2 = \\dfrac{3}{7} = \\dfrac{3}{4 \\cdot 2 - 1}$.",
            "reason": "Base case: the two starting terms, as given."
          },
          {
            "line": "Assume that $a_k = \\dfrac{3}{4k - 1}$ and $a_{k+1} = \\dfrac{3}{4k + 3}$ for some whole number $k \\ge 1$.",
            "reason": "Inductive assumption: the claim at $n = k$ and at $n = k + 1$, where $4(k + 1) - 1 = 4k + 3$."
          },
          {
            "line": "$a_{k+2} = \\dfrac{1}{\\dfrac{2}{a_{k+1}} - \\dfrac{1}{a_k}}$",
            "reason": "Complex fraction: the top and the bottom of the rule at $n = k + 2$ are divided by $a_ka_{k+1}$, which is not $0$ by line 2."
          },
          {
            "line": "$\\dfrac{2}{a_{k+1}} - \\dfrac{1}{a_k} = \\dfrac{2(4k + 3)}{3} - \\dfrac{4k - 1}{3}$",
            "reason": "Reciprocal, from arithmetic: by line 2, $\\dfrac{1}{a_{k+1}} = \\dfrac{4k + 3}{3}$ and $\\dfrac{1}{a_k} = \\dfrac{4k - 1}{3}$."
          },
          {
            "line": "$\\dfrac{2}{a_{k+1}} - \\dfrac{1}{a_k} = \\dfrac{4k + 7}{3}$",
            "reason": "Collecting like terms: $8k + 6 - 4k + 1 = 4k + 7$ over the common bottom $3$."
          },
          {
            "line": "$a_{k+2} = \\dfrac{3}{4k + 7}$",
            "reason": "Reciprocal, from arithmetic: line 5 goes into line 3, and $4k + 7$ is not $0$."
          },
          {
            "line": "Since $4(k + 2) - 1 = 4k + 7$, the claim holds at $n = k + 2$.",
            "reason": "Inductive step: line 6, with the second half of line 2."
          },
          {
            "line": "So $a_n = \\dfrac{3}{4n - 1}$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 7."
          },
          {
            "line": "$a_{2019} = \\dfrac{3}{4 \\cdot 2019 - 1} = \\dfrac{3}{8075}$",
            "reason": "Substituting a value: $n = 2019$ in line 8."
          },
          {
            "line": "$8075 = 5^2 \\cdot 17 \\cdot 19$",
            "reason": "Prime decomposition and the fundamental theorem of arithmetic, from arithmetic: $8075 = 25 \\cdot 323$ and $323 = 17 \\cdot 19$."
          },
          {
            "line": "So $\\dfrac{3}{8075}$ is in lowest terms, and $3 + 8075 = 8078$.",
            "reason": "Fractions in lowest terms and the gcd, from arithmetic: by line 10 the prime $3$ does not divide $8075$, so the top and the bottom have no common factor above $1$."
          }
        ]
      }
    },
    {
      "id": "t241-s2",
      "method": "induction",
      "statement": "Prove that the sequence with $a_0 = 1$ and $a_{n+1} = a_0a_1 \\cdots a_n + 4$ for every whole number $n$ has $a_n - \\sqrt{a_{n+1}} = 2$ for every whole number $n \\ge 1$. Facts it may use: recursion, substituting a value, adding the same number to both sides, multiplying out, square of a binomial, induction, inductive assumption, powers and roots of positive numbers keep the order, adding the same number (arithmetic), transitivity (arithmetic), positive square root (arithmetic).",
      "check": {
        "proof": [
          {
            "line": "$a_{n+1} - 4 = a_0a_1 \\cdots a_n$",
            "reason": "Adding the same number to both sides: $4$ is taken from both sides of the rule."
          },
          {
            "line": "$a_{n+2} - 4 = a_0a_1 \\cdots a_n \\cdot a_{n+1}$",
            "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 1; the product gains the factor $a_{n+1}$."
          },
          {
            "line": "$a_{n+2} - 4 = (a_{n+1} - 4)a_{n+1}$",
            "reason": "Substituting a value: line 1 goes into line 2."
          },
          {
            "line": "$a_{n+2} - 4 = a_{n+1}^2 - 4a_{n+1}$",
            "reason": "Multiplying out: $a_{n+1}$ multiplies each term of the bracket."
          },
          {
            "line": "$a_{n+2} = a_{n+1}^2 - 4a_{n+1} + 4$",
            "reason": "Adding the same number to both sides: $4$ is added to both sides."
          },
          {
            "line": "$a_{n+2} = (a_{n+1} - 2)^2$",
            "reason": "Square of a binomial: $(a_{n+1} - 2)^2 = a_{n+1}^2 - 4a_{n+1} + 4$."
          },
          {
            "line": "$a_1 = 1 + 4 = 5$",
            "reason": "Substituting a value: $n = 0$ in the rule, where the product is $a_0 = 1$."
          },
          {
            "line": "Assume that $a_k \\ge 5$ for some whole number $k \\ge 1$.",
            "reason": "Inductive assumption: the claim $a_n \\ge 5$ at $n = k$."
          },
          {
            "line": "$a_k - 2 \\ge 3$",
            "reason": "Adding the same number: $2$ is taken from both sides of line 8."
          },
          {
            "line": "$(a_k - 2)^2 \\ge 9$",
            "reason": "Powers and roots of positive numbers keep the order: both sides of line 9 are positive and are squared."
          },
          {
            "line": "$a_{k+1} = (a_k - 2)^2$",
            "reason": "Substituting a value: $k - 1$ goes in place of $n$ in line 6, and $k - 1$ is a whole number since $k \\ge 1$."
          },
          {
            "line": "$a_{k+1} \\ge 5$",
            "reason": "Transitivity, from arithmetic: lines 11 and 10 give $a_{k+1} \\ge 9$, and $9 \\ge 5$."
          },
          {
            "line": "So $a_n \\ge 5$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 12."
          },
          {
            "line": "So $a_{n+1} = (a_n - 2)^2$ for every whole number $n \\ge 1$.",
            "reason": "Substituting a value: $n - 1$ goes in place of $n$ in line 6."
          },
          {
            "line": "So $\\sqrt{a_{n+1}} = a_n - 2$ for every whole number $n \\ge 1$.",
            "reason": "Positive square root, from arithmetic: $a_n - 2$ is positive by line 13, so it is the positive square root of its square, line 14."
          },
          {
            "line": "So $a_n - \\sqrt{a_{n+1}} = 2$ for every whole number $n \\ge 1$.",
            "reason": "Adding the same number to both sides: $2 - \\sqrt{a_{n+1}}$ is added to both sides of line 15."
          }
        ]
      }
    },
    {
      "id": "t241-s3",
      "method": "direct proof",
      "statement": "Prove that for a number $c$ and a sequence of positive numbers with $a_{n+2}a_n = a_{n+1}^2 + c$ for every whole number $n$, the number $b = \\dfrac{a_2 + a_0}{a_1}$ gives $a_{n+1}^2 - ba_na_{n+1} + a_n^2 = -c$ for every whole number $n$. Facts it may use: linearising a recurrence, substituting a value, multiplying out, adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "$a_{n+2} = ba_{n+1} - a_n$",
            "reason": "Linearising a recurrence: the terms are positive and $b = \\dfrac{a_2 + a_0}{a_1}$."
          },
          {
            "line": "$(ba_{n+1} - a_n)a_n = a_{n+1}^2 + c$",
            "reason": "Substituting a value: line 1 goes into the rule for $a_{n+2}$."
          },
          {
            "line": "$ba_na_{n+1} - a_n^2 = a_{n+1}^2 + c$",
            "reason": "Multiplying out: $a_n$ multiplies each term of the bracket."
          },
          {
            "line": "$a_{n+1}^2 - ba_na_{n+1} + a_n^2 = -c$",
            "reason": "Adding the same number to both sides: $ba_na_{n+1} - a_n^2 + c$ is taken from both sides, which are then read right to left."
          }
        ]
      }
    }
  ]
}
