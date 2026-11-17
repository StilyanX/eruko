export default {
  "number": 116,
  "title": "Systems that become linear",
  "section": 3,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "142-145, 150-156"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve the system $\\dfrac{1}{x} + \\dfrac{1}{y} = 5$ and $\\dfrac{3}{x} - \\dfrac{2}{y} = 5$.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(1/3, 1/2)",
    "solution": [
      "Solve the system $\\dfrac{1}{x} + \\dfrac{1}{y} = 5$ and $\\dfrac{3}{x} - \\dfrac{2}{y} = 5$.",
      "The excluded values are $x = 0$ and $y = 0$.",
      "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
      "Then $u + v = 5$ and $3u - 2v = 5$.",
      "$u = 5 - v$",
      "$3(5 - v) - 2v = 5$",
      "$15 - 3v - 2v = 5$",
      "$-5v + 15 = 5$",
      "$-5v = -10$",
      "$v = 2$",
      "$u = 5 - 2$",
      "$u = 3$",
      "Then $\\dfrac{1}{x} = 3$ and $\\dfrac{1}{y} = 2$.",
      "$x = \\dfrac{1}{3}$",
      "$y = \\dfrac{1}{2}$",
      "$(\\dfrac{1}{3}, \\dfrac{1}{2})$"
    ]
  },
  "ideas": [
    {
      "name": "Substituting a letter for a repeated expression in a system",
      "concrete": "In the system $\\dfrac{2}{x} + \\dfrac{3}{y} = 8$ and $\\dfrac{4}{x} - \\dfrac{3}{y} = 1$ the fractions $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$ appear in both equations. Writing $u$ for $\\dfrac{1}{x}$ and $v$ for $\\dfrac{1}{y}$ gives $2u + 3v = 8$ and $4u - 3v = 1$, a linear system with $u = \\dfrac{3}{2}$ and $v = \\dfrac{5}{3}$. Then $\\dfrac{1}{x} = \\dfrac{3}{2}$ and $\\dfrac{1}{y} = \\dfrac{5}{3}$, so $x = \\dfrac{2}{3}$ and $y = \\dfrac{3}{5}$.",
      "general": "When an expression in $x$ and $y$, such as $\\dfrac{1}{x}$, $\\sqrt{y}$ or $\\sqrt{x + y}$, appears in both equations of a system, a new letter may stand for it wherever it appears, for the values of $x$ and $y$ at which the expression has a value. If the system in the new letters is linear, substitution or elimination solves it, and then each new letter is replaced by the expression it stands for, which gives an equation in $x$ and $y$ for each value found."
    }
  ],
  "kinds": [
    {
      "id": "t116-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve the system $\\dfrac{1}{x} + \\dfrac{2}{y} = -4$ and $-\\dfrac{5}{x} - \\dfrac{3}{y} = -8$.",
            "lines": [
              {
                "step": "Solve the system $\\dfrac{1}{x} + \\dfrac{2}{y} = -4$ and $-\\dfrac{5}{x} - \\dfrac{3}{y} = -8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded values are $x = 0$ and $y = 0$.",
                "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
              },
              {
                "step": "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                "reason": "Substituting a letter for a repeated expression in a system: $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$ each appear in both equations, so each gets a new letter."
              },
              {
                "step": "Then $u + 2v = -4$ and $-5u - 3v = -8$.",
                "reason": "Substituting a letter for a repeated expression in a system: a fraction with $x$ as its bottom is its top times $\\dfrac{1}{x}$, so it becomes that number times $u$, and in the same way each fraction with $y$ as its bottom becomes a number times $v$."
              },
              {
                "step": "$u = -4 - 2v$",
                "reason": "Solving for a letter in terms of the others: taking $2v$ from both sides of the first equation leaves $u$ alone."
              },
              {
                "step": "$-5(-4 - 2v) - 3v = -8$",
                "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
              },
              {
                "step": "$20 + 10v - 3v = -8$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$7v + 20 = -8$",
                "reason": "Collecting like terms: $10v - 3v = 7v$."
              },
              {
                "step": "$7v = -28$",
                "reason": "Adding the same number to both sides: taking $20$ from both sides leaves the term in $v$ alone."
              },
              {
                "step": "$v = -4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $7$ leaves $v$ alone."
              },
              {
                "step": "$u = -4 - 2(-4)$",
                "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
              },
              {
                "step": "$u = 4$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "Then $\\dfrac{1}{x} = 4$ and $\\dfrac{1}{y} = -4$.",
                "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\dfrac{1}{x}$ and $v$ for $\\dfrac{1}{y}$, so the values found are the values of these fractions."
              },
              {
                "step": "$x = \\dfrac{1}{4}$",
                "reason": "Multiplying both sides by the same number: both sides times $x$ give $1 = 4x$, and dividing both sides by $4$ leaves $x$ alone."
              },
              {
                "step": "$y = -\\dfrac{1}{4}$",
                "reason": "Multiplying both sides by the same number: both sides times $y$ give $1 = -4y$, and dividing both sides by $-4$ leaves $y$ alone."
              },
              {
                "step": "$(\\dfrac{1}{4}, -\\dfrac{1}{4})$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $\\dfrac{1}{x} + \\dfrac{1}{y} = 2$ and $\\dfrac{4}{x} - \\dfrac{4}{y} = 32$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1/5, -1/3)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{1}{x} + \\dfrac{1}{y} = 2$ and $\\dfrac{4}{x} - \\dfrac{4}{y} = 32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $y = 0$.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
                },
                {
                  "step": "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u + v = 2$ and $4u - 4v = 32$.",
                  "reason": "Substituting a letter for a repeated expression in a system: a fraction with $x$ as its bottom is its top times $\\dfrac{1}{x}$, so it becomes that number times $u$, and in the same way each fraction with $y$ as its bottom becomes a number times $v$."
                },
                {
                  "step": "$u = 2 - v$",
                  "reason": "Solving for a letter in terms of the others: taking $v$ from both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$4(2 - v) - 4v = 32$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$8 - 4v - 4v = 32$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-8v + 8 = 32$",
                  "reason": "Collecting like terms: $-4v - 4v = -8v$."
                },
                {
                  "step": "$-8v = 24$",
                  "reason": "Adding the same number to both sides: taking $8$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-8$ leaves $v$ alone."
                },
                {
                  "step": "$u = 2 - (-3)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 5$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $\\dfrac{1}{x} = 5$ and $\\dfrac{1}{y} = -3$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\dfrac{1}{x}$ and $v$ for $\\dfrac{1}{y}$, so the values found are the values of these fractions."
                },
                {
                  "step": "$x = \\dfrac{1}{5}$",
                  "reason": "Multiplying both sides by the same number: both sides times $x$ give $1 = 5x$, and dividing both sides by $5$ leaves $x$ alone."
                },
                {
                  "step": "$y = -\\dfrac{1}{3}$",
                  "reason": "Multiplying both sides by the same number: both sides times $y$ give $1 = -3y$, and dividing both sides by $-3$ leaves $y$ alone."
                },
                {
                  "step": "$(\\dfrac{1}{5}, -\\dfrac{1}{3})$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{1}{x} + \\dfrac{4}{y} = -13$ and $\\dfrac{3}{x} - \\dfrac{4}{y} = -7$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1/5, -1/2)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{1}{x} + \\dfrac{4}{y} = -13$ and $\\dfrac{3}{x} - \\dfrac{4}{y} = -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $y = 0$.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
                },
                {
                  "step": "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u + 4v = -13$ and $3u - 4v = -7$.",
                  "reason": "Substituting a letter for a repeated expression in a system: a fraction with $x$ as its bottom is its top times $\\dfrac{1}{x}$, so it becomes that number times $u$, and in the same way each fraction with $y$ as its bottom becomes a number times $v$."
                },
                {
                  "step": "$u = -13 - 4v$",
                  "reason": "Solving for a letter in terms of the others: taking $4v$ from both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$3(-13 - 4v) - 4v = -7$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-39 - 12v - 4v = -7$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-16v - 39 = -7$",
                  "reason": "Collecting like terms: $-12v - 4v = -16v$."
                },
                {
                  "step": "$-16v = 32$",
                  "reason": "Adding the same number to both sides: adding $39$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = -2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-16$ leaves $v$ alone."
                },
                {
                  "step": "$u = -13 - 4(-2)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = -5$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $\\dfrac{1}{x} = -5$ and $\\dfrac{1}{y} = -2$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\dfrac{1}{x}$ and $v$ for $\\dfrac{1}{y}$, so the values found are the values of these fractions."
                },
                {
                  "step": "$x = -\\dfrac{1}{5}$",
                  "reason": "Multiplying both sides by the same number: both sides times $x$ give $1 = -5x$, and dividing both sides by $-5$ leaves $x$ alone."
                },
                {
                  "step": "$y = -\\dfrac{1}{2}$",
                  "reason": "Multiplying both sides by the same number: both sides times $y$ give $1 = -2y$, and dividing both sides by $-2$ leaves $y$ alone."
                },
                {
                  "step": "$(-\\dfrac{1}{5}, -\\dfrac{1}{2})$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{1}{x} - \\dfrac{1}{y} = -11$ and $-\\dfrac{3}{x} + \\dfrac{5}{y} = 43$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-1/6, 1/5)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{1}{x} - \\dfrac{1}{y} = -11$ and $-\\dfrac{3}{x} + \\dfrac{5}{y} = 43$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $y = 0$.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
                },
                {
                  "step": "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - v = -11$ and $-3u + 5v = 43$.",
                  "reason": "Substituting a letter for a repeated expression in a system: a fraction with $x$ as its bottom is its top times $\\dfrac{1}{x}$, so it becomes that number times $u$, and in the same way each fraction with $y$ as its bottom becomes a number times $v$."
                },
                {
                  "step": "$u = -11 + v$",
                  "reason": "Solving for a letter in terms of the others: adding $v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$-3(-11 + v) + 5v = 43$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$33 - 3v + 5v = 43$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$2v + 33 = 43$",
                  "reason": "Collecting like terms: $-3v + 5v = 2v$."
                },
                {
                  "step": "$2v = 10$",
                  "reason": "Adding the same number to both sides: taking $33$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $v$ alone."
                },
                {
                  "step": "$u = -11 + 5$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = -6$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $\\dfrac{1}{x} = -6$ and $\\dfrac{1}{y} = 5$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\dfrac{1}{x}$ and $v$ for $\\dfrac{1}{y}$, so the values found are the values of these fractions."
                },
                {
                  "step": "$x = -\\dfrac{1}{6}$",
                  "reason": "Multiplying both sides by the same number: both sides times $x$ give $1 = -6x$, and dividing both sides by $-6$ leaves $x$ alone."
                },
                {
                  "step": "$y = \\dfrac{1}{5}$",
                  "reason": "Multiplying both sides by the same number: both sides times $y$ give $1 = 5y$, and dividing both sides by $5$ leaves $y$ alone."
                },
                {
                  "step": "$(-\\dfrac{1}{6}, \\dfrac{1}{5})$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $\\sqrt{x} + 4\\sqrt{y} = 13$ and $-5\\sqrt{x} - 5\\sqrt{y} = -35$.",
            "lines": [
              {
                "step": "Solve the system $\\sqrt{x} + 4\\sqrt{y} = 13$ and $-5\\sqrt{x} - 5\\sqrt{y} = -35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both $x$ and $y$ are at least $0$.",
                "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
              },
              {
                "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
              },
              {
                "step": "Then $u + 4v = 13$ and $-5u - 5v = -35$.",
                "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
              },
              {
                "step": "$u = 13 - 4v$",
                "reason": "Solving for a letter in terms of the others: taking $4v$ from both sides of the first equation leaves $u$ alone."
              },
              {
                "step": "$-5(13 - 4v) - 5v = -35$",
                "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
              },
              {
                "step": "$-65 + 20v - 5v = -35$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$15v - 65 = -35$",
                "reason": "Collecting like terms: $20v - 5v = 15v$."
              },
              {
                "step": "$15v = 30$",
                "reason": "Adding the same number to both sides: adding $65$ to both sides leaves the term in $v$ alone."
              },
              {
                "step": "$v = 2$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $15$ leaves $v$ alone."
              },
              {
                "step": "$u = 13 - 4(2)$",
                "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
              },
              {
                "step": "$u = 5$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "Then $\\sqrt{x} = 5$ and $\\sqrt{y} = 2$.",
                "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
              },
              {
                "step": "$x = 25$",
                "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{x} = 5$ gives $x = 5^2$, and as $5$ is not negative, $\\sqrt{25} = 5$, so no extraneous solution comes in."
              },
              {
                "step": "$y = 4$",
                "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 2$ gives $y = 2^2$, and as $2$ is not negative, $\\sqrt{4} = 2$, so no extraneous solution comes in."
              },
              {
                "step": "$(25, 4)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $\\sqrt{x} - \\sqrt{y} = 6$ and $4\\sqrt{x} + 2\\sqrt{y} = 42$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(81, 9)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt{x} - \\sqrt{y} = 6$ and $4\\sqrt{x} + 2\\sqrt{y} = 42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x$ and $y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - v = 6$ and $4u + 2v = 42$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = 6 + v$",
                  "reason": "Solving for a letter in terms of the others: adding $v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$4(6 + v) + 2v = 42$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$24 + 4v + 2v = 42$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$6v + 24 = 42$",
                  "reason": "Collecting like terms: $4v + 2v = 6v$."
                },
                {
                  "step": "$6v = 18$",
                  "reason": "Adding the same number to both sides: taking $24$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $6$ leaves $v$ alone."
                },
                {
                  "step": "$u = 6 + 3$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 9$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $\\sqrt{x} = 9$ and $\\sqrt{y} = 3$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
                },
                {
                  "step": "$x = 81$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{x} = 9$ gives $x = 9^2$, and as $9$ is not negative, $\\sqrt{81} = 9$, so no extraneous solution comes in."
                },
                {
                  "step": "$y = 9$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 3$ gives $y = 3^2$, and as $3$ is not negative, $\\sqrt{9} = 3$, so no extraneous solution comes in."
                },
                {
                  "step": "$(81, 9)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\sqrt{x} - 4\\sqrt{y} = -27$ and $2\\sqrt{x} - 3\\sqrt{y} = -14$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(25, 64)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt{x} - 4\\sqrt{y} = -27$ and $2\\sqrt{x} - 3\\sqrt{y} = -14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x$ and $y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - 4v = -27$ and $2u - 3v = -14$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = -27 + 4v$",
                  "reason": "Solving for a letter in terms of the others: adding $4v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$2(-27 + 4v) - 3v = -14$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-54 + 8v - 3v = -14$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$5v - 54 = -14$",
                  "reason": "Collecting like terms: $8v - 3v = 5v$."
                },
                {
                  "step": "$5v = 40$",
                  "reason": "Adding the same number to both sides: adding $54$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $v$ alone."
                },
                {
                  "step": "$u = -27 + 4(8)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 5$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $\\sqrt{x} = 5$ and $\\sqrt{y} = 8$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
                },
                {
                  "step": "$x = 25$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{x} = 5$ gives $x = 5^2$, and as $5$ is not negative, $\\sqrt{25} = 5$, so no extraneous solution comes in."
                },
                {
                  "step": "$y = 64$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 8$ gives $y = 8^2$, and as $8$ is not negative, $\\sqrt{64} = 8$, so no extraneous solution comes in."
                },
                {
                  "step": "$(25, 64)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\sqrt{x} - 2\\sqrt{y} = -14$ and $4\\sqrt{x} + 2\\sqrt{y} = 24$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, 64)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt{x} - 2\\sqrt{y} = -14$ and $4\\sqrt{x} + 2\\sqrt{y} = 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x$ and $y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - 2v = -14$ and $4u + 2v = 24$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = -14 + 2v$",
                  "reason": "Solving for a letter in terms of the others: adding $2v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$4(-14 + 2v) + 2v = 24$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-56 + 8v + 2v = 24$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$10v - 56 = 24$",
                  "reason": "Collecting like terms: $8v + 2v = 10v$."
                },
                {
                  "step": "$10v = 80$",
                  "reason": "Adding the same number to both sides: adding $56$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $10$ leaves $v$ alone."
                },
                {
                  "step": "$u = -14 + 2(8)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 2$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $\\sqrt{x} = 2$ and $\\sqrt{y} = 8$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{x} = 2$ gives $x = 2^2$, and as $2$ is not negative, $\\sqrt{4} = 2$, so no extraneous solution comes in."
                },
                {
                  "step": "$y = 64$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 8$ gives $y = 8^2$, and as $8$ is not negative, $\\sqrt{64} = 8$, so no extraneous solution comes in."
                },
                {
                  "step": "$(4, 64)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $\\dfrac{3x + 3y}{xy} = 3$ and $\\dfrac{3x + 11y}{xy} = 5$.",
            "lines": [
              {
                "step": "Solve the system $\\dfrac{3x + 3y}{xy} = 3$ and $\\dfrac{3x + 11y}{xy} = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded values are $x = 0$ and $y = 0$.",
                "reason": "Excluded value: $x = 0$ or $y = 0$ makes the denominator $xy$ equal to $0$, so neither is a solution."
              },
              {
                "step": "Then $3x + 3y = 3xy$ and $3x + 11y = 5xy$.",
                "reason": "Multiplying both sides by the same number: both sides of each equation are multiplied by $xy$, which is not $0$."
              },
              {
                "step": "$-8y = -2xy$",
                "reason": "Adding two equations: the second equation times $-1$ is added to the first, and the terms in $x$ cancel."
              },
              {
                "step": "$-8 = -2x$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $y$, which is not $0$."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $x$ alone, and the symmetric property puts $x$ on the left."
              },
              {
                "step": "$3(4) + 3y = 3(4)y$",
                "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation cleared of its denominator."
              },
              {
                "step": "$12 + 3y = 12y$",
                "reason": "Order of operations: the products are worked out, and the sign rules for products give each its sign."
              },
              {
                "step": "$3y - 12y = -12$",
                "reason": "Adding the same number to both sides: taking $12y$ and $12$ from both sides leaves the terms in $y$ on the left."
              },
              {
                "step": "$-9y = -12$",
                "reason": "Collecting like terms: $3y - 12y = -9y$."
              },
              {
                "step": "$y = \\dfrac{4}{3}$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-9$ leaves $y$ alone."
              },
              {
                "step": "$(4, \\dfrac{4}{3})$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $\\dfrac{3x + 3y}{xy} = -3$ and $\\dfrac{3x + 23y}{xy} = 2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -4/5)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{3x + 3y}{xy} = -3$ and $\\dfrac{3x + 23y}{xy} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $y = 0$.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes the denominator $xy$ equal to $0$, so neither is a solution."
                },
                {
                  "step": "Then $3x + 3y = -3xy$ and $3x + 23y = 2xy$.",
                  "reason": "Multiplying both sides by the same number: both sides of each equation are multiplied by $xy$, which is not $0$."
                },
                {
                  "step": "$-20y = -5xy$",
                  "reason": "Adding two equations: the second equation times $-1$ is added to the first, and the terms in $x$ cancel."
                },
                {
                  "step": "$-20 = -5x$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $y$, which is not $0$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $x$ alone, and the symmetric property puts $x$ on the left."
                },
                {
                  "step": "$3(4) + 3y = -3(4)y$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation cleared of its denominator."
                },
                {
                  "step": "$12 + 3y = -12y$",
                  "reason": "Order of operations: the products are worked out, and the sign rules for products give each its sign."
                },
                {
                  "step": "$3y + 12y = -12$",
                  "reason": "Adding the same number to both sides: taking $-12y$ and $12$ from both sides leaves the terms in $y$ on the left."
                },
                {
                  "step": "$15y = -12$",
                  "reason": "Collecting like terms: $3y + 12y = 15y$."
                },
                {
                  "step": "$y = -\\dfrac{4}{5}$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $15$ leaves $y$ alone."
                },
                {
                  "step": "$(4, -\\dfrac{4}{5})$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{-3x - 4y}{xy} = 2$ and $\\dfrac{-3x + 8y}{xy} = 5$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -1)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{-3x - 4y}{xy} = 2$ and $\\dfrac{-3x + 8y}{xy} = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $y = 0$.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes the denominator $xy$ equal to $0$, so neither is a solution."
                },
                {
                  "step": "Then $-3x - 4y = 2xy$ and $-3x + 8y = 5xy$.",
                  "reason": "Multiplying both sides by the same number: both sides of each equation are multiplied by $xy$, which is not $0$."
                },
                {
                  "step": "$-12y = -3xy$",
                  "reason": "Adding two equations: the second equation times $-1$ is added to the first, and the terms in $x$ cancel."
                },
                {
                  "step": "$-12 = -3x$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $y$, which is not $0$."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-3$ leaves $x$ alone, and the symmetric property puts $x$ on the left."
                },
                {
                  "step": "$-3(4) - 4y = 2(4)y$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation cleared of its denominator."
                },
                {
                  "step": "$-12 - 4y = 8y$",
                  "reason": "Order of operations: the products are worked out, and the sign rules for products give each its sign."
                },
                {
                  "step": "$-4y - 8y = 12$",
                  "reason": "Adding the same number to both sides: taking $8y$ and $-12$ from both sides leaves the terms in $y$ on the left."
                },
                {
                  "step": "$-12y = 12$",
                  "reason": "Collecting like terms: $-4y - 8y = -12y$."
                },
                {
                  "step": "$y = -1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-12$ leaves $y$ alone."
                },
                {
                  "step": "$(4, -1)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{-4x + 2y}{xy} = -3$ and $\\dfrac{-4x + 12y}{xy} = 2$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, 1)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{-4x + 2y}{xy} = -3$ and $\\dfrac{-4x + 12y}{xy} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $y = 0$.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes the denominator $xy$ equal to $0$, so neither is a solution."
                },
                {
                  "step": "Then $-4x + 2y = -3xy$ and $-4x + 12y = 2xy$.",
                  "reason": "Multiplying both sides by the same number: both sides of each equation are multiplied by $xy$, which is not $0$."
                },
                {
                  "step": "$-10y = -5xy$",
                  "reason": "Adding two equations: the second equation times $-1$ is added to the first, and the terms in $x$ cancel."
                },
                {
                  "step": "$-10 = -5x$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $y$, which is not $0$."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $x$ alone, and the symmetric property puts $x$ on the left."
                },
                {
                  "step": "$-4(2) + 2y = -3(2)y$",
                  "reason": "Back-substitution: the value of $x$ goes, in brackets, in place of $x$ in the first equation cleared of its denominator."
                },
                {
                  "step": "$-8 + 2y = -6y$",
                  "reason": "Order of operations: the products are worked out, and the sign rules for products give each its sign."
                },
                {
                  "step": "$2y + 6y = 8$",
                  "reason": "Adding the same number to both sides: taking $-6y$ and $-8$ from both sides leaves the terms in $y$ on the left."
                },
                {
                  "step": "$8y = 8$",
                  "reason": "Collecting like terms: $2y + 6y = 8y$."
                },
                {
                  "step": "$y = 1$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $8$ leaves $y$ alone."
                },
                {
                  "step": "$(2, 1)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $\\sqrt{x + y} - 3\\sqrt{x - y} = -4$ and $-3\\sqrt{x + y} + 2\\sqrt{x - y} = -16$.",
            "lines": [
              {
                "step": "Solve the system $\\sqrt{x + y} - 3\\sqrt{x - y} = -4$ and $-3\\sqrt{x + y} + 2\\sqrt{x - y} = -16$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both $x + y$ and $x - y$ are at least $0$.",
                "reason": "Even root of a negative number is not real: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ have values only where $x + y \\ge 0$ and $x - y \\ge 0$."
              },
              {
                "step": "Let $u = \\sqrt{x + y}$ and $v = \\sqrt{x - y}$.",
                "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ each appear in both equations, so each gets a new letter."
              },
              {
                "step": "Then $u - 3v = -4$ and $-3u + 2v = -16$.",
                "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x + y}$ becomes $u$ and each $\\sqrt{x - y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
              },
              {
                "step": "$u = -4 + 3v$",
                "reason": "Solving for a letter in terms of the others: adding $3v$ to both sides of the first equation leaves $u$ alone."
              },
              {
                "step": "$-3(-4 + 3v) + 2v = -16$",
                "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
              },
              {
                "step": "$12 - 9v + 2v = -16$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$-7v + 12 = -16$",
                "reason": "Collecting like terms: $-9v + 2v = -7v$."
              },
              {
                "step": "$-7v = -28$",
                "reason": "Adding the same number to both sides: taking $12$ from both sides leaves the term in $v$ alone."
              },
              {
                "step": "$v = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-7$ leaves $v$ alone."
              },
              {
                "step": "$u = -4 + 3(4)$",
                "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
              },
              {
                "step": "$u = 8$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "Then $\\sqrt{x + y} = 8$ and $\\sqrt{x - y} = 4$.",
                "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x + y}$ and $v$ for $\\sqrt{x - y}$, so the values found are the values of these roots."
              },
              {
                "step": "Then $x + y = 64$ and $x - y = 16$.",
                "reason": "Raising both sides to a power: squaring both sides of each equation removes the roots, and as $8$ and $4$ are not negative, no extraneous solution comes in."
              },
              {
                "step": "$2x = 80$",
                "reason": "Adding two equations: the terms in $y$ cancel."
              },
              {
                "step": "$x = 40$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
              },
              {
                "step": "$40 + y = 64$",
                "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the equation for $x + y$."
              },
              {
                "step": "$y = 24$",
                "reason": "Adding the same number to both sides: taking $40$ from both sides leaves $y$ alone."
              },
              {
                "step": "$(40, 24)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $\\sqrt{x + y} - 2\\sqrt{x - y} = 2$ and $3\\sqrt{x + y} - 2\\sqrt{x - y} = 14$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(20, 16)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt{x + y} - 2\\sqrt{x - y} = 2$ and $3\\sqrt{x + y} - 2\\sqrt{x - y} = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x + y$ and $x - y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ have values only where $x + y \\ge 0$ and $x - y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x + y}$ and $v = \\sqrt{x - y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - 2v = 2$ and $3u - 2v = 14$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x + y}$ becomes $u$ and each $\\sqrt{x - y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = 2 + 2v$",
                  "reason": "Solving for a letter in terms of the others: adding $2v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$3(2 + 2v) - 2v = 14$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$6 + 6v - 2v = 14$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$4v + 6 = 14$",
                  "reason": "Collecting like terms: $6v - 2v = 4v$."
                },
                {
                  "step": "$4v = 8$",
                  "reason": "Adding the same number to both sides: taking $6$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $v$ alone."
                },
                {
                  "step": "$u = 2 + 2(2)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 6$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $\\sqrt{x + y} = 6$ and $\\sqrt{x - y} = 2$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x + y}$ and $v$ for $\\sqrt{x - y}$, so the values found are the values of these roots."
                },
                {
                  "step": "Then $x + y = 36$ and $x - y = 4$.",
                  "reason": "Raising both sides to a power: squaring both sides of each equation removes the roots, and as $6$ and $2$ are not negative, no extraneous solution comes in."
                },
                {
                  "step": "$2x = 40$",
                  "reason": "Adding two equations: the terms in $y$ cancel."
                },
                {
                  "step": "$x = 20$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$20 + y = 36$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the equation for $x + y$."
                },
                {
                  "step": "$y = 16$",
                  "reason": "Adding the same number to both sides: taking $20$ from both sides leaves $y$ alone."
                },
                {
                  "step": "$(20, 16)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\sqrt{x + y} - \\sqrt{x - y} = 4$ and $-4\\sqrt{x + y} - 3\\sqrt{x - y} = -37$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(29, 20)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt{x + y} - \\sqrt{x - y} = 4$ and $-4\\sqrt{x + y} - 3\\sqrt{x - y} = -37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x + y$ and $x - y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ have values only where $x + y \\ge 0$ and $x - y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x + y}$ and $v = \\sqrt{x - y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - v = 4$ and $-4u - 3v = -37$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x + y}$ becomes $u$ and each $\\sqrt{x - y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = 4 + v$",
                  "reason": "Solving for a letter in terms of the others: adding $v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$-4(4 + v) - 3v = -37$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-16 - 4v - 3v = -37$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-7v - 16 = -37$",
                  "reason": "Collecting like terms: $-4v - 3v = -7v$."
                },
                {
                  "step": "$-7v = -21$",
                  "reason": "Adding the same number to both sides: adding $16$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-7$ leaves $v$ alone."
                },
                {
                  "step": "$u = 4 + 3$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 7$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $\\sqrt{x + y} = 7$ and $\\sqrt{x - y} = 3$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x + y}$ and $v$ for $\\sqrt{x - y}$, so the values found are the values of these roots."
                },
                {
                  "step": "Then $x + y = 49$ and $x - y = 9$.",
                  "reason": "Raising both sides to a power: squaring both sides of each equation removes the roots, and as $7$ and $3$ are not negative, no extraneous solution comes in."
                },
                {
                  "step": "$2x = 58$",
                  "reason": "Adding two equations: the terms in $y$ cancel."
                },
                {
                  "step": "$x = 29$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$29 + y = 49$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the equation for $x + y$."
                },
                {
                  "step": "$y = 20$",
                  "reason": "Adding the same number to both sides: taking $29$ from both sides leaves $y$ alone."
                },
                {
                  "step": "$(29, 20)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\sqrt{x + y} + 2\\sqrt{x - y} = 8$ and $-5\\sqrt{x + y} + 3\\sqrt{x - y} = -14$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(10, 6)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt{x + y} + 2\\sqrt{x - y} = 8$ and $-5\\sqrt{x + y} + 3\\sqrt{x - y} = -14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x + y$ and $x - y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ have values only where $x + y \\ge 0$ and $x - y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x + y}$ and $v = \\sqrt{x - y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x + y}$ and $\\sqrt{x - y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u + 2v = 8$ and $-5u + 3v = -14$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x + y}$ becomes $u$ and each $\\sqrt{x - y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = 8 - 2v$",
                  "reason": "Solving for a letter in terms of the others: taking $2v$ from both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$-5(8 - 2v) + 3v = -14$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-40 + 10v + 3v = -14$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$13v - 40 = -14$",
                  "reason": "Collecting like terms: $10v + 3v = 13v$."
                },
                {
                  "step": "$13v = 26$",
                  "reason": "Adding the same number to both sides: adding $40$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $13$ leaves $v$ alone."
                },
                {
                  "step": "$u = 8 - 2(2)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 4$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $\\sqrt{x + y} = 4$ and $\\sqrt{x - y} = 2$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt{x + y}$ and $v$ for $\\sqrt{x - y}$, so the values found are the values of these roots."
                },
                {
                  "step": "Then $x + y = 16$ and $x - y = 4$.",
                  "reason": "Raising both sides to a power: squaring both sides of each equation removes the roots, and as $4$ and $2$ are not negative, no extraneous solution comes in."
                },
                {
                  "step": "$2x = 20$",
                  "reason": "Adding two equations: the terms in $y$ cancel."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $x$ alone."
                },
                {
                  "step": "$10 + y = 16$",
                  "reason": "Back-substitution: the value of $x$ goes in place of $x$ in the equation for $x + y$."
                },
                {
                  "step": "$y = 6$",
                  "reason": "Adding the same number to both sides: taking $10$ from both sides leaves $y$ alone."
                },
                {
                  "step": "$(10, 6)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $\\dfrac{x}{y} + 3 = -\\dfrac{2}{y}$ and $-3x - 5y = -6$.",
            "lines": [
              {
                "step": "Solve the system $\\dfrac{x}{y} + 3 = -\\dfrac{2}{y}$ and $-3x - 5y = -6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded value is $y = 0$.",
                "reason": "Excluded value: $y = 0$ makes a denominator $0$, so it is not a solution."
              },
              {
                "step": "$x + 3y = -2$",
                "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$, and each term with $y$ as its bottom loses it."
              },
              {
                "step": "$x = -2 - 3y$",
                "reason": "Solving for a letter in terms of the others: taking $3y$ from both sides of the first equation leaves $x$ alone."
              },
              {
                "step": "$-3(-2 - 3y) - 5y = -6$",
                "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
              },
              {
                "step": "$6 + 9y - 5y = -6$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$4y + 6 = -6$",
                "reason": "Collecting like terms: $9y - 5y = 4y$."
              },
              {
                "step": "$4y = -12$",
                "reason": "Adding the same number to both sides: taking $6$ from both sides leaves the term in $y$ alone."
              },
              {
                "step": "$y = -3$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $4$ leaves $y$ alone."
              },
              {
                "step": "$x = -2 - 3(-3)$",
                "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
              },
              {
                "step": "$x = 7$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "The value $y = -3$ is not $0$.",
                "reason": "Excluded value: the value found for $y$ is not the excluded value, so the pair stands."
              },
              {
                "step": "$(7, -3)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $\\dfrac{x}{y} + 4 = -\\dfrac{9}{y}$ and $-2x - 3y = 3$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, -3)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{x}{y} + 4 = -\\dfrac{9}{y}$ and $-2x - 3y = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $y = 0$.",
                  "reason": "Excluded value: $y = 0$ makes a denominator $0$, so it is not a solution."
                },
                {
                  "step": "$x + 4y = -9$",
                  "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$, and each term with $y$ as its bottom loses it."
                },
                {
                  "step": "$x = -9 - 4y$",
                  "reason": "Solving for a letter in terms of the others: taking $4y$ from both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$-2(-9 - 4y) - 3y = 3$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$18 + 8y - 3y = 3$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$5y + 18 = 3$",
                  "reason": "Collecting like terms: $8y - 3y = 5y$."
                },
                {
                  "step": "$5y = -15$",
                  "reason": "Adding the same number to both sides: taking $18$ from both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $5$ leaves $y$ alone."
                },
                {
                  "step": "$x = -9 - 4(-3)$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "The value $y = -3$ is not $0$.",
                  "reason": "Excluded value: the value found for $y$ is not the excluded value, so the pair stands."
                },
                {
                  "step": "$(3, -3)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{x}{y} - 1 = \\dfrac{1}{y}$ and $-2x - 2y = 18$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-4, -5)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{x}{y} - 1 = \\dfrac{1}{y}$ and $-2x - 2y = 18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $y = 0$.",
                  "reason": "Excluded value: $y = 0$ makes a denominator $0$, so it is not a solution."
                },
                {
                  "step": "$x - y = 1$",
                  "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$, and each term with $y$ as its bottom loses it."
                },
                {
                  "step": "$x = 1 + y$",
                  "reason": "Solving for a letter in terms of the others: adding $y$ to both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$-2(1 + y) - 2y = 18$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$-2 - 2y - 2y = 18$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-4y - 2 = 18$",
                  "reason": "Collecting like terms: $-2y - 2y = -4y$."
                },
                {
                  "step": "$-4y = 20$",
                  "reason": "Adding the same number to both sides: adding $2$ to both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -5$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-4$ leaves $y$ alone."
                },
                {
                  "step": "$x = 1 + (-5)$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = -4$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "The value $y = -5$ is not $0$.",
                  "reason": "Excluded value: the value found for $y$ is not the excluded value, so the pair stands."
                },
                {
                  "step": "$(-4, -5)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\dfrac{x}{y} + 4 = -\\dfrac{18}{y}$ and $-2x + 5y = -42$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(6, -6)",
              "lines": [
                {
                  "step": "Solve the system $\\dfrac{x}{y} + 4 = -\\dfrac{18}{y}$ and $-2x + 5y = -42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $y = 0$.",
                  "reason": "Excluded value: $y = 0$ makes a denominator $0$, so it is not a solution."
                },
                {
                  "step": "$x + 4y = -18$",
                  "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$, and each term with $y$ as its bottom loses it."
                },
                {
                  "step": "$x = -18 - 4y$",
                  "reason": "Solving for a letter in terms of the others: taking $4y$ from both sides of the first equation leaves $x$ alone."
                },
                {
                  "step": "$-2(-18 - 4y) + 5y = -42$",
                  "reason": "Substitution: the expression for $x$ goes, in brackets, in place of $x$ in the second equation, which leaves a linear equation in $y$ alone."
                },
                {
                  "step": "$36 + 8y + 5y = -42$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$13y + 36 = -42$",
                  "reason": "Collecting like terms: $8y + 5y = 13y$."
                },
                {
                  "step": "$13y = -78$",
                  "reason": "Adding the same number to both sides: taking $36$ from both sides leaves the term in $y$ alone."
                },
                {
                  "step": "$y = -6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $13$ leaves $y$ alone."
                },
                {
                  "step": "$x = -18 - 4(-6)$",
                  "reason": "Back-substitution: the value of $y$ goes, in brackets, in place of $y$ in the expression for $x$."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "The value $y = -6$ is not $0$.",
                  "reason": "Excluded value: the value found for $y$ is not the excluded value, so the pair stands."
                },
                {
                  "step": "$(6, -6)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve the system $\\sqrt[3]{x} - 3\\sqrt{y} = -23$ and $-2\\sqrt[3]{x} - 5\\sqrt{y} = -31$.",
            "lines": [
              {
                "step": "Solve the system $\\sqrt[3]{x} - 3\\sqrt{y} = -23$ and $-2\\sqrt[3]{x} - 5\\sqrt{y} = -31$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number $y$ is at least $0$.",
                "reason": "Even root of a negative number is not real: $\\sqrt{y}$ has a value only for $y \\ge 0$, and $\\sqrt[3]{x}$, an odd root, has a value for every $x$."
              },
              {
                "step": "Let $u = \\sqrt[3]{x}$ and $v = \\sqrt{y}$.",
                "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt[3]{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
              },
              {
                "step": "Then $u - 3v = -23$ and $-2u - 5v = -31$.",
                "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt[3]{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
              },
              {
                "step": "$u = -23 + 3v$",
                "reason": "Solving for a letter in terms of the others: adding $3v$ to both sides of the first equation leaves $u$ alone."
              },
              {
                "step": "$-2(-23 + 3v) - 5v = -31$",
                "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
              },
              {
                "step": "$46 - 6v - 5v = -31$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$-11v + 46 = -31$",
                "reason": "Collecting like terms: $-6v - 5v = -11v$."
              },
              {
                "step": "$-11v = -77$",
                "reason": "Adding the same number to both sides: taking $46$ from both sides leaves the term in $v$ alone."
              },
              {
                "step": "$v = 7$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-11$ leaves $v$ alone."
              },
              {
                "step": "$u = -23 + 3(7)$",
                "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
              },
              {
                "step": "$u = -2$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "Then $\\sqrt[3]{x} = -2$ and $\\sqrt{y} = 7$.",
                "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt[3]{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
              },
              {
                "step": "$x = -8$",
                "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x} = -2$ exactly when $x = (-2)^3$, so cubing adds no extraneous solution."
              },
              {
                "step": "$y = 49$",
                "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 7$ gives $y = 7^2$, and as $7$ is not negative, $\\sqrt{49} = 7$, so no extraneous solution comes in."
              },
              {
                "step": "$(-8, 49)$",
                "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve the system $\\sqrt[3]{x} + \\sqrt{y} = 2$ and $3\\sqrt[3]{x} - 5\\sqrt{y} = -42$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-64, 36)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt[3]{x} + \\sqrt{y} = 2$ and $3\\sqrt[3]{x} - 5\\sqrt{y} = -42$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $y$ is at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{y}$ has a value only for $y \\ge 0$, and $\\sqrt[3]{x}$, an odd root, has a value for every $x$."
                },
                {
                  "step": "Let $u = \\sqrt[3]{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt[3]{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u + v = 2$ and $3u - 5v = -42$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt[3]{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = 2 - v$",
                  "reason": "Solving for a letter in terms of the others: taking $v$ from both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$3(2 - v) - 5v = -42$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$6 - 3v - 5v = -42$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-8v + 6 = -42$",
                  "reason": "Collecting like terms: $-3v - 5v = -8v$."
                },
                {
                  "step": "$-8v = -48$",
                  "reason": "Adding the same number to both sides: taking $6$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 6$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-8$ leaves $v$ alone."
                },
                {
                  "step": "$u = 2 - 6$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = -4$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $\\sqrt[3]{x} = -4$ and $\\sqrt{y} = 6$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt[3]{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
                },
                {
                  "step": "$x = -64$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x} = -4$ exactly when $x = (-4)^3$, so cubing adds no extraneous solution."
                },
                {
                  "step": "$y = 36$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 6$ gives $y = 6^2$, and as $6$ is not negative, $\\sqrt{36} = 6$, so no extraneous solution comes in."
                },
                {
                  "step": "$(-64, 36)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\sqrt[3]{x} - \\sqrt{y} = -4$ and $5\\sqrt[3]{x} - 3\\sqrt{y} = -16$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-8, 4)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt[3]{x} - \\sqrt{y} = -4$ and $5\\sqrt[3]{x} - 3\\sqrt{y} = -16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $y$ is at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{y}$ has a value only for $y \\ge 0$, and $\\sqrt[3]{x}$, an odd root, has a value for every $x$."
                },
                {
                  "step": "Let $u = \\sqrt[3]{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt[3]{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - v = -4$ and $5u - 3v = -16$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt[3]{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = -4 + v$",
                  "reason": "Solving for a letter in terms of the others: adding $v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$5(-4 + v) - 3v = -16$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-20 + 5v - 3v = -16$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$2v - 20 = -16$",
                  "reason": "Collecting like terms: $5v - 3v = 2v$."
                },
                {
                  "step": "$2v = 4$",
                  "reason": "Adding the same number to both sides: adding $20$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 2$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $2$ leaves $v$ alone."
                },
                {
                  "step": "$u = -4 + 2$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = -2$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $\\sqrt[3]{x} = -2$ and $\\sqrt{y} = 2$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt[3]{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
                },
                {
                  "step": "$x = -8$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x} = -2$ exactly when $x = (-2)^3$, so cubing adds no extraneous solution."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 2$ gives $y = 2^2$, and as $2$ is not negative, $\\sqrt{4} = 2$, so no extraneous solution comes in."
                },
                {
                  "step": "$(-8, 4)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            },
            {
              "prompt": "Solve the system $\\sqrt[3]{x} - 2\\sqrt{y} = -20$ and $-4\\sqrt[3]{x} + 3\\sqrt{y} = 40$.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-64, 64)",
              "lines": [
                {
                  "step": "Solve the system $\\sqrt[3]{x} - 2\\sqrt{y} = -20$ and $-4\\sqrt[3]{x} + 3\\sqrt{y} = 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $y$ is at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{y}$ has a value only for $y \\ge 0$, and $\\sqrt[3]{x}$, an odd root, has a value for every $x$."
                },
                {
                  "step": "Let $u = \\sqrt[3]{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt[3]{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - 2v = -20$ and $-4u + 3v = 40$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt[3]{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = -20 + 2v$",
                  "reason": "Solving for a letter in terms of the others: adding $2v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$-4(-20 + 2v) + 3v = 40$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$80 - 8v + 3v = 40$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-5v + 80 = 40$",
                  "reason": "Collecting like terms: $-8v + 3v = -5v$."
                },
                {
                  "step": "$-5v = -40$",
                  "reason": "Adding the same number to both sides: taking $80$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-5$ leaves $v$ alone."
                },
                {
                  "step": "$u = -20 + 2(8)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = -4$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $\\sqrt[3]{x} = -4$ and $\\sqrt{y} = 8$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $u$ stands for $\\sqrt[3]{x}$ and $v$ for $\\sqrt{y}$, so the values found are the values of these roots."
                },
                {
                  "step": "$x = -64$",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x} = -4$ exactly when $x = (-4)^3$, so cubing adds no extraneous solution."
                },
                {
                  "step": "$y = 64$",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{y} = 8$ gives $y = 8^2$, and as $8$ is not negative, $\\sqrt{64} = 8$, so no extraneous solution comes in."
                },
                {
                  "step": "$(-64, 64)$",
                  "reason": "Solution of a system: the value of $x$ is written first and the value of $y$ second, and the pair solves both equations."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t116-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of the system $\\dfrac{1}{x} - \\dfrac{2}{y} = 10$ and $-\\dfrac{5}{x} + \\dfrac{4}{y} = -14$, and write that line right.",
            "given": [
              "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
              "Then $u - 2v = 10$ and $-5u + 4v = -14$.",
              "$u = 10 + 2v$",
              "$-5(10 + 2v) + 4v = -14$",
              "$-50 - 10v + 4v = -14$",
              "$-6v - 50 = -14$",
              "$-6v = -64$",
              "$v = \\dfrac{32}{3}$",
              "$u = \\dfrac{94}{3}$",
              "Then $x = \\dfrac{3}{94}$ and $y = \\dfrac{3}{32}$."
            ],
            "lines": [
              {
                "step": "The working solves the system $\\dfrac{1}{x} - \\dfrac{2}{y} = 10$ and $-\\dfrac{5}{x} + \\dfrac{4}{y} = -14$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 7 moves $-50$ to the right side and keeps its sign.",
                "reason": "A sign is lost: adding $50$ to both sides is the step, so the right side becomes $-14 + 50 = 36$."
              },
              {
                "step": "Line 7 written right is $-6v = 36$.",
                "reason": "Every other term of the line stays as it was, and the lines after it follow from the wrong line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of the system $\\dfrac{1}{x} - \\dfrac{4}{y} = 23$ and $\\dfrac{4}{x} - \\dfrac{5}{y} = 37$, and write that line right.",
              "given": [
                "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                "Then $u - 4v = 23$ and $4u - 5v = 37$.",
                "$u = 23 + 4v$",
                "$4(23 + 4v) - 5v = 37$",
                "$92 + 16v - 5v = 37$",
                "$11v + 92 = 37$",
                "$11v = 129$",
                "$v = \\dfrac{129}{11}$",
                "$u = \\dfrac{769}{11}$",
                "Then $x = \\dfrac{11}{769}$ and $y = \\dfrac{11}{129}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: 11*v = -55",
              "lines": [
                {
                  "step": "The working solves the system $\\dfrac{1}{x} - \\dfrac{4}{y} = 23$ and $\\dfrac{4}{x} - \\dfrac{5}{y} = 37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 moves $92$ to the right side and keeps its sign.",
                  "reason": "A sign is lost: adding $-92$ to both sides is the step, so the right side becomes $37 - 92 = -55$."
                },
                {
                  "step": "Line 7 written right is $11v = -55$.",
                  "reason": "Every other term of the line stays as it was, and the lines after it follow from the wrong line."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $\\dfrac{1}{x} - \\dfrac{1}{y} = -3$ and $-\\dfrac{2}{x} + \\dfrac{5}{y} = 24$, and write that line right.",
              "given": [
                "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                "Then $u - v = -3$ and $-2u + 5v = 24$.",
                "$u = -3 - v$",
                "$-2(-3 - v) + 5v = 24$",
                "$6 + 2v + 5v = 24$",
                "$7v + 6 = 24$",
                "$7v = 18$",
                "$v = \\dfrac{18}{7}$",
                "$u = -\\dfrac{39}{7}$",
                "Then $x = -\\dfrac{7}{39}$ and $y = \\dfrac{7}{18}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: u = -3+v",
              "lines": [
                {
                  "step": "The working solves the system $\\dfrac{1}{x} - \\dfrac{1}{y} = -3$ and $-\\dfrac{2}{x} + \\dfrac{5}{y} = 24$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $-v$ to the other side and keeps its sign.",
                  "reason": "A sign is lost: taking $-v$ from both sides leaves $v$ on the right, so the sign of the term changes as it crosses."
                },
                {
                  "step": "Line 3 written right is $u = -3 + v$.",
                  "reason": "Every other term of the line stays as it was, and the lines after it follow from the wrong line."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of the system $\\dfrac{1}{x} - \\dfrac{4}{y} = -20$ and $-\\dfrac{3}{x} - \\dfrac{4}{y} = -36$, and write that line right.",
              "given": [
                "Let $u = \\dfrac{1}{x}$ and $v = \\dfrac{1}{y}$.",
                "Then $u - 4v = -20$ and $-3u - 4v = -36$.",
                "$u = -20 - 4v$",
                "$-3(-20 - 4v) - 4v = -36$",
                "$60 + 12v - 4v = -36$",
                "$8v + 60 = -36$",
                "$8v = -96$",
                "$v = -12$",
                "$u = 28$",
                "Then $x = \\dfrac{1}{28}$ and $y = -\\dfrac{1}{12}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: u = -20+4*v",
              "lines": [
                {
                  "step": "The working solves the system $\\dfrac{1}{x} - \\dfrac{4}{y} = -20$ and $-\\dfrac{3}{x} - \\dfrac{4}{y} = -36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $-4v$ to the other side and keeps its sign.",
                  "reason": "A sign is lost: taking $-4v$ from both sides leaves $4v$ on the right, so the sign of the term changes as it crosses."
                },
                {
                  "step": "Line 3 written right is $u = -20 + 4v$.",
                  "reason": "Every other term of the line stays as it was, and the lines after it follow from the wrong line."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t116-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$: the sum of the reciprocals of $x$ and $y$ is 7.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$: the sum of the reciprocals of $x$ and $y$ is 7.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The reciprocals of $x$ and $y$ are $\\dfrac{1}{x}$ and $\\dfrac{1}{y}$, and their sum is $\\dfrac{1}{x} + \\dfrac{1}{y}$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the reciprocal of a number is $1$ divided by it."
              },
              {
                "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = 7$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: the reciprocal of $x$ is 3 more than the reciprocal of $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/x = 1/y+3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: the reciprocal of $x$ is 3 more than the reciprocal of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "3 more than the reciprocal of $y$ is $\\dfrac{1}{y} + 3$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the reciprocal of a number is $1$ divided by it."
                },
                {
                  "step": "$\\dfrac{1}{x} = \\dfrac{1}{y} + 3$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: twice the reciprocal of $x$ is 5 less than the reciprocal of $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2/x = 1/y-5",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: twice the reciprocal of $x$ is 5 less than the reciprocal of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice the reciprocal of $x$ is $\\dfrac{2}{x}$, and 5 less than the reciprocal of $y$ is $\\dfrac{1}{y} - 5$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the reciprocal of a number is $1$ divided by it."
                },
                {
                  "step": "$\\dfrac{2}{x} = \\dfrac{1}{y} - 5$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$: the square root of $x$ is 4 more than three times the square root of $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(x) = 3*sqrt(y)+4",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$: the square root of $x$ is 4 more than three times the square root of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Three times the square root of $y$ is $3\\sqrt{y}$, and 4 more than that is $3\\sqrt{y} + 4$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order, and the reciprocal of a number is $1$ divided by it."
                },
                {
                  "step": "$\\sqrt{x} = 3\\sqrt{y} + 4$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t116-k4",
      "forms": [
        {
          "example": {
            "problem": "Find how many solutions $(x, y)$ the system $\\sqrt{x} - 3\\sqrt{y} = -16$ and $-4\\sqrt{x} + 2\\sqrt{y} = 24$ has.",
            "lines": [
              {
                "step": "Find how many solutions $(x, y)$ the system $\\sqrt{x} - 3\\sqrt{y} = -16$ and $-4\\sqrt{x} + 2\\sqrt{y} = 24$ has.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both $x$ and $y$ are at least $0$.",
                "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
              },
              {
                "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
              },
              {
                "step": "Then $u - 3v = -16$ and $-4u + 2v = 24$.",
                "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
              },
              {
                "step": "$u = -16 + 3v$",
                "reason": "Solving for a letter in terms of the others: adding $3v$ to both sides of the first equation leaves $u$ alone."
              },
              {
                "step": "$-4(-16 + 3v) + 2v = 24$",
                "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
              },
              {
                "step": "$64 - 12v + 2v = 24$",
                "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
              },
              {
                "step": "$-10v + 64 = 24$",
                "reason": "Collecting like terms: $-12v + 2v = -10v$."
              },
              {
                "step": "$-10v = -40$",
                "reason": "Adding the same number to both sides: taking $64$ from both sides leaves the term in $v$ alone."
              },
              {
                "step": "$v = 4$",
                "reason": "Dividing both sides by a nonzero number: dividing both sides by $-10$ leaves $v$ alone."
              },
              {
                "step": "$u = -16 + 3(4)$",
                "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
              },
              {
                "step": "$u = -4$",
                "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
              },
              {
                "step": "No value of $x$ gives $\\sqrt{x} = -4$.",
                "reason": "Positive square root: $\\sqrt{x}$ is never negative, so it never equals $-4$."
              },
              {
                "step": "The system has no solution.",
                "reason": "A system has none, one, or infinitely many solutions: the one pair $u$, $v$ of the linear system gives no $x$ and $y$, so there are none."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many solutions $(x, y)$ the system $\\sqrt{x} - 4\\sqrt{y} = -20$ and $3\\sqrt{x} + 5\\sqrt{y} = 59$ has.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Find how many solutions $(x, y)$ the system $\\sqrt{x} - 4\\sqrt{y} = -20$ and $3\\sqrt{x} + 5\\sqrt{y} = 59$ has.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x$ and $y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - 4v = -20$ and $3u + 5v = 59$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = -20 + 4v$",
                  "reason": "Solving for a letter in terms of the others: adding $4v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$3(-20 + 4v) + 5v = 59$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-60 + 12v + 5v = 59$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$17v - 60 = 59$",
                  "reason": "Collecting like terms: $12v + 5v = 17v$."
                },
                {
                  "step": "$17v = 119$",
                  "reason": "Adding the same number to both sides: adding $60$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 7$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $17$ leaves $v$ alone."
                },
                {
                  "step": "$u = -20 + 4(7)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 8$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "Then $x = 64$ and $y = 49$.",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{x} = 8$ and of $\\sqrt{y} = 7$, and as $8$ and $7$ are not negative, no extraneous solution comes in."
                },
                {
                  "step": "The system has one solution.",
                  "reason": "A system has none, one, or infinitely many solutions: the linear system in $u$ and $v$ has one solution, and it gives one pair $x$, $y$."
                }
              ]
            },
            {
              "prompt": "Find how many solutions $(x, y)$ the system $\\sqrt{x} - 4\\sqrt{y} = -34$ and $4\\sqrt{x} - 2\\sqrt{y} = -24$ has.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "None",
              "lines": [
                {
                  "step": "Find how many solutions $(x, y)$ the system $\\sqrt{x} - 4\\sqrt{y} = -34$ and $4\\sqrt{x} - 2\\sqrt{y} = -24$ has.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x$ and $y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u - 4v = -34$ and $4u - 2v = -24$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = -34 + 4v$",
                  "reason": "Solving for a letter in terms of the others: adding $4v$ to both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$4(-34 + 4v) - 2v = -24$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$-136 + 16v - 2v = -24$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$14v - 136 = -24$",
                  "reason": "Collecting like terms: $16v - 2v = 14v$."
                },
                {
                  "step": "$14v = 112$",
                  "reason": "Adding the same number to both sides: adding $136$ to both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 8$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $14$ leaves $v$ alone."
                },
                {
                  "step": "$u = -34 + 4(8)$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = -2$",
                  "reason": "Order of operations: the product comes before the sum or difference, and the sign rules for products give it its sign."
                },
                {
                  "step": "No value of $x$ gives $\\sqrt{x} = -2$.",
                  "reason": "Positive square root: $\\sqrt{x}$ is never negative, so it never equals $-2$."
                },
                {
                  "step": "The system has no solution.",
                  "reason": "A system has none, one, or infinitely many solutions: the one pair $u$, $v$ of the linear system gives no $x$ and $y$, so there are none."
                }
              ]
            },
            {
              "prompt": "Find how many solutions $(x, y)$ the system $\\sqrt{x} + \\sqrt{y} = 4$ and $4\\sqrt{x} + 2\\sqrt{y} = 16$ has.",
              "form": "Answer as One, None or Infinitely many.",
              "answer": "One",
              "lines": [
                {
                  "step": "Find how many solutions $(x, y)$ the system $\\sqrt{x} + \\sqrt{y} = 4$ and $4\\sqrt{x} + 2\\sqrt{y} = 16$ has.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both $x$ and $y$ are at least $0$.",
                  "reason": "Even root of a negative number is not real: $\\sqrt{x}$ and $\\sqrt{y}$ have values only for $x \\ge 0$ and $y \\ge 0$."
                },
                {
                  "step": "Let $u = \\sqrt{x}$ and $v = \\sqrt{y}$.",
                  "reason": "Substituting a letter for a repeated expression in a system: $\\sqrt{x}$ and $\\sqrt{y}$ each appear in both equations, so each gets a new letter."
                },
                {
                  "step": "Then $u + v = 4$ and $4u + 2v = 16$.",
                  "reason": "Substituting a letter for a repeated expression in a system: each $\\sqrt{x}$ becomes $u$ and each $\\sqrt{y}$ becomes $v$, which leaves a linear system in $u$ and $v$."
                },
                {
                  "step": "$u = 4 - v$",
                  "reason": "Solving for a letter in terms of the others: taking $v$ from both sides of the first equation leaves $u$ alone."
                },
                {
                  "step": "$4(4 - v) + 2v = 16$",
                  "reason": "Substitution: the expression for $u$ goes, in brackets, in place of $u$ in the second equation, which leaves a linear equation in $v$ alone."
                },
                {
                  "step": "$16 - 4v + 2v = 16$",
                  "reason": "Multiplying out: the number in front of the bracket multiplies each term inside it."
                },
                {
                  "step": "$-2v + 16 = 16$",
                  "reason": "Collecting like terms: $-4v + 2v = -2v$."
                },
                {
                  "step": "$-2v = 0$",
                  "reason": "Adding the same number to both sides: taking $16$ from both sides leaves the term in $v$ alone."
                },
                {
                  "step": "$v = 0$",
                  "reason": "Dividing both sides by a nonzero number: dividing both sides by $-2$ leaves $v$ alone."
                },
                {
                  "step": "$u = 4 - 0$",
                  "reason": "Back-substitution: the value of $v$ goes, in brackets, in place of $v$ in the expression for $u$."
                },
                {
                  "step": "$u = 4$",
                  "reason": "Order of operations: the one sum or difference left is worked out."
                },
                {
                  "step": "Then $x = 16$ and $y = 0$.",
                  "reason": "Raising both sides to a power: squaring both sides of $\\sqrt{x} = 4$ and of $\\sqrt{y} = 0$, and as $4$ and $0$ are not negative, no extraneous solution comes in."
                },
                {
                  "step": "The system has one solution.",
                  "reason": "A system has none, one, or infinitely many solutions: the linear system in $u$ and $v$ has one solution, and it gives one pair $x$, $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t116-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $3xy = 4(x + y)$.",
            "lines": [
              {
                "step": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $3xy = 4(x + y)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{3}{4} = \\dfrac{x + y}{xy}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4xy$, which is not $0$ as neither $x$ nor $y$ is."
              },
              {
                "step": "$\\dfrac{x + y}{xy} = \\dfrac{3}{4}$",
                "reason": "Symmetric property: the two sides change places."
              },
              {
                "step": "$\\dfrac{x}{xy} + \\dfrac{y}{xy} = \\dfrac{3}{4}$",
                "reason": "Adding fractions with a common denominator, read from right to left: a fraction whose top is a sum is the sum of each term over the same bottom."
              },
              {
                "step": "$\\dfrac{1}{y} + \\dfrac{1}{x} = \\dfrac{3}{4}$",
                "reason": "Cancelling a common factor: $x$ from the first fraction and $y$ from the second."
              },
              {
                "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{3}{4}$",
                "reason": "Commutative law of addition: the two fractions are added in the other order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $5xy = 2(x + y)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/2",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $5xy = 2(x + y)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5}{2} = \\dfrac{x + y}{xy}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2xy$, which is not $0$ as neither $x$ nor $y$ is."
                },
                {
                  "step": "$\\dfrac{x + y}{xy} = \\dfrac{5}{2}$",
                  "reason": "Symmetric property: the two sides change places."
                },
                {
                  "step": "$\\dfrac{x}{xy} + \\dfrac{y}{xy} = \\dfrac{5}{2}$",
                  "reason": "Adding fractions with a common denominator, read from right to left: a fraction whose top is a sum is the sum of each term over the same bottom."
                },
                {
                  "step": "$\\dfrac{1}{y} + \\dfrac{1}{x} = \\dfrac{5}{2}$",
                  "reason": "Cancelling a common factor: $x$ from the first fraction and $y$ from the second."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{5}{2}$",
                  "reason": "Commutative law of addition: the two fractions are added in the other order."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $4xy = 7(x + y)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/7",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $4xy = 7(x + y)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4}{7} = \\dfrac{x + y}{xy}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7xy$, which is not $0$ as neither $x$ nor $y$ is."
                },
                {
                  "step": "$\\dfrac{x + y}{xy} = \\dfrac{4}{7}$",
                  "reason": "Symmetric property: the two sides change places."
                },
                {
                  "step": "$\\dfrac{x}{xy} + \\dfrac{y}{xy} = \\dfrac{4}{7}$",
                  "reason": "Adding fractions with a common denominator, read from right to left: a fraction whose top is a sum is the sum of each term over the same bottom."
                },
                {
                  "step": "$\\dfrac{1}{y} + \\dfrac{1}{x} = \\dfrac{4}{7}$",
                  "reason": "Cancelling a common factor: $x$ from the first fraction and $y$ from the second."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{4}{7}$",
                  "reason": "Commutative law of addition: the two fractions are added in the other order."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $2xy = 9(x + y)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/9",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{1}{x} + \\dfrac{1}{y}$, where the numbers $x$ and $y$ are not $0$ and $2xy = 9(x + y)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2}{9} = \\dfrac{x + y}{xy}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9xy$, which is not $0$ as neither $x$ nor $y$ is."
                },
                {
                  "step": "$\\dfrac{x + y}{xy} = \\dfrac{2}{9}$",
                  "reason": "Symmetric property: the two sides change places."
                },
                {
                  "step": "$\\dfrac{x}{xy} + \\dfrac{y}{xy} = \\dfrac{2}{9}$",
                  "reason": "Adding fractions with a common denominator, read from right to left: a fraction whose top is a sum is the sum of each term over the same bottom."
                },
                {
                  "step": "$\\dfrac{1}{y} + \\dfrac{1}{x} = \\dfrac{2}{9}$",
                  "reason": "Cancelling a common factor: $x$ from the first fraction and $y$ from the second."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{2}{9}$",
                  "reason": "Commutative law of addition: the two fractions are added in the other order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x + \\dfrac{2}{y} = 6$ and $y + \\dfrac{2}{x} = 3$.",
            "lines": [
              {
                "step": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x + \\dfrac{2}{y} = 6$ and $y + \\dfrac{2}{x} = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$xy + 2 = 6y$",
                "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$."
              },
              {
                "step": "$xy + 2 = 3x$",
                "reason": "Multiplying both sides by the same number: both sides of the second equation are multiplied by $x$, which is not $0$."
              },
              {
                "step": "$6y = 3x$",
                "reason": "Transitive property: both sides are equal to $xy + 2$."
              },
              {
                "step": "$2 = \\dfrac{x}{y}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3y$, which is not $0$."
              },
              {
                "step": "$\\dfrac{x}{y} = 2$",
                "reason": "Symmetric property: the two sides change places."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x - \\dfrac{3}{y} = 5$ and $y - \\dfrac{3}{x} = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/2",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x - \\dfrac{3}{y} = 5$ and $y - \\dfrac{3}{x} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy - 3 = 5y$",
                  "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$."
                },
                {
                  "step": "$xy - 3 = 2x$",
                  "reason": "Multiplying both sides by the same number: both sides of the second equation are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$5y = 2x$",
                  "reason": "Transitive property: both sides are equal to $xy - 3$."
                },
                {
                  "step": "$\\dfrac{5}{2} = \\dfrac{x}{y}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2y$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{5}{2}$",
                  "reason": "Symmetric property: the two sides change places."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x + \\dfrac{3}{y} = 8$ and $y + \\dfrac{3}{x} = 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x + \\dfrac{3}{y} = 8$ and $y + \\dfrac{3}{x} = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy + 3 = 8y$",
                  "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$."
                },
                {
                  "step": "$xy + 3 = 4x$",
                  "reason": "Multiplying both sides by the same number: both sides of the second equation are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$8y = 4x$",
                  "reason": "Transitive property: both sides are equal to $xy + 3$."
                },
                {
                  "step": "$2 = \\dfrac{x}{y}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4y$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{y} = 2$",
                  "reason": "Symmetric property: the two sides change places."
                }
              ]
            },
            {
              "prompt": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x - \\dfrac{4}{y} = 3$ and $y - \\dfrac{4}{x} = 10$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/10",
              "lines": [
                {
                  "step": "Find the value of $\\dfrac{x}{y}$, where the numbers $x$ and $y$ are not $0$, $x - \\dfrac{4}{y} = 3$ and $y - \\dfrac{4}{x} = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy - 4 = 3y$",
                  "reason": "Multiplying both sides by the same number: both sides of the first equation are multiplied by $y$, which is not $0$."
                },
                {
                  "step": "$xy - 4 = 10x$",
                  "reason": "Multiplying both sides by the same number: both sides of the second equation are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$3y = 10x$",
                  "reason": "Transitive property: both sides are equal to $xy - 4$."
                },
                {
                  "step": "$\\dfrac{3}{10} = \\dfrac{x}{y}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10y$, which is not $0$."
                },
                {
                  "step": "$\\dfrac{x}{y} = \\dfrac{3}{10}$",
                  "reason": "Symmetric property: the two sides change places."
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
