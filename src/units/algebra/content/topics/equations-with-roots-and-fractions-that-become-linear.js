export default {
  "number": 111,
  "title": "Equations with roots and fractions that become linear",
  "section": 2,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "93-98, 122"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $\\dfrac{7}{x} + 4 = 9 + \\dfrac{3}{x}$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{4/5}",
    "solution": [
      "Solve $\\dfrac{7}{x} + 4 = 9 + \\dfrac{3}{x}$.",
      "The excluded value is $x = 0$.",
      "$\\dfrac{4}{x} + 4 = 9$",
      "$\\dfrac{4}{x} = 5$",
      "$4 = 5x$",
      "$x = \\dfrac{4}{5}$",
      "The set of values is $\\{\\dfrac{4}{5}\\}$."
    ]
  },
  "ideas": [
    {
      "name": "Substitution for a repeated expression",
      "concrete": "In $2\\sqrt{x} + 1 = 7 - \\sqrt{x}$ the root $\\sqrt{x}$ appears twice. Writing $y$ for it gives $2y + 1 = 7 - y$, a linear equation with $y = 2$, and then $\\sqrt{x} = 2$.",
      "general": "When one expression in $x$ appears more than once in an equation, a new letter may stand for it each time. The equation in the new letter is solved first, and then the new letter is replaced by the expression it stands for, which gives an equation in $x$."
    },
    {
      "name": "Excluded value",
      "concrete": "In $\\dfrac{4}{x - 1} = 2$ the value $x = 1$ makes the bottom $0$, and division by $0$ has no value, so $x = 1$ is never a solution.",
      "general": "An **excluded value** of an equation is a value of the unknown that makes a denominator in it $0$. No excluded value is a solution. Multiplying both sides by an expression in $x$ is multiplying by a nonzero number only for the values of $x$ that are not excluded, so each candidate is compared with the excluded values."
    },
    {
      "name": "Raising both sides to a power",
      "concrete": "From $\\sqrt{x + 2} = 3$, squaring both sides gives $x + 2 = 9$, since the square of $\\sqrt{x + 2}$ is $x + 2$.",
      "general": "If two numbers are equal, their squares are equal and their cubes are equal: for real numbers $a$ and $b$, $a = b$ gives $a^n = b^n$ for every whole number $n$. So every solution of an equation is a solution of the equation with both sides raised to a power. For an odd power the root's definition goes back the other way: $\\sqrt[3]{u} = s$ exactly when $u = s^3$."
    },
    {
      "name": "Extraneous solution",
      "concrete": "Squaring both sides of $\\sqrt{x} = -2$ gives $x = 4$, but $\\sqrt{4} = 2$, which is not $-2$. So $x = 4$ solves the squared equation and not the original one.",
      "general": "An **extraneous solution** is a value that solves an equation met in the working, after both sides were squared or multiplied by an expression in $x$, and does not solve the original equation. Squaring keeps every solution and may add extraneous ones, because $a^2 = b^2$ also holds when $a = -b$."
    },
    {
      "name": "Checking in the original equation",
      "concrete": "For $\\sqrt{x + 2} = 3$ the candidate $x = 7$ gives $\\sqrt{9} = 3$ in the original equation, so $x = 7$ is a solution.",
      "general": "After both sides of an equation were squared, each candidate is put into the original equation, never into a later line. A candidate that makes the two sides equal is a solution, and one that does not is an extraneous solution. After multiplying by an expression in $x$, a candidate is a solution exactly when it is not an excluded value."
    }
  ],
  "kinds": [
    {
      "id": "t111-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\dfrac{6}{x} + 1 = 5 + \\dfrac{1}{x}$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{6}{x} + 1 = 5 + \\dfrac{1}{x}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded value is $x = 0$.",
                "reason": "Excluded value: $x = 0$ makes the denominator $x$ equal to $0$, so $x$ is not $0$."
              },
              {
                "step": "$\\dfrac{5}{x} + 1 = 5$",
                "reason": "Adding the same number to both sides takes $\\dfrac{1}{x}$ from both sides, and Subtracting fractions with the same denominator writes $\\dfrac{6}{x} - \\dfrac{1}{x}$ as $\\dfrac{5}{x}$."
              },
              {
                "step": "$\\dfrac{5}{x} = 4$",
                "reason": "Adding the same number to both sides takes $1$ from both sides."
              },
              {
                "step": "$5 = 4x$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is not $0$."
              },
              {
                "step": "$x = \\dfrac{5}{4}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              },
              {
                "step": "The set of values is $\\{\\dfrac{5}{4}\\}$.",
                "reason": "Excluded value: $\\dfrac{5}{4}$ is not $0$, so it makes no denominator $0$ and is a solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{4}{x} - 2 = 1 + \\dfrac{9}{x}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5/3}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{4}{x} - 2 = 1 + \\dfrac{9}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 0$.",
                  "reason": "Excluded value: $x = 0$ makes the denominator $x$ equal to $0$, so $x$ is not $0$."
                },
                {
                  "step": "$-\\dfrac{5}{x} - 2 = 1$",
                  "reason": "Adding the same number to both sides takes $\\dfrac{9}{x}$ from both sides, and Subtracting fractions with the same denominator writes $\\dfrac{4}{x} - \\dfrac{9}{x}$ as $-\\dfrac{5}{x}$."
                },
                {
                  "step": "$-\\dfrac{5}{x} = 3$",
                  "reason": "Adding the same number to both sides adds $2$ to both sides."
                },
                {
                  "step": "$-5 = 3x$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$x = -\\dfrac{5}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "The set of values is $\\{-\\dfrac{5}{3}\\}$.",
                  "reason": "Excluded value: $-\\dfrac{5}{3}$ is not $0$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{10}{x} + 3 = -1 + \\dfrac{2}{x}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-2}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{10}{x} + 3 = -1 + \\dfrac{2}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 0$.",
                  "reason": "Excluded value: $x = 0$ makes the denominator $x$ equal to $0$, so $x$ is not $0$."
                },
                {
                  "step": "$\\dfrac{8}{x} + 3 = -1$",
                  "reason": "Adding the same number to both sides takes $\\dfrac{2}{x}$ from both sides, and Subtracting fractions with the same denominator writes $\\dfrac{10}{x} - \\dfrac{2}{x}$ as $\\dfrac{8}{x}$."
                },
                {
                  "step": "$\\dfrac{8}{x} = -4$",
                  "reason": "Adding the same number to both sides takes $3$ from both sides."
                },
                {
                  "step": "$8 = -4x$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "The set of values is $\\{-2\\}$.",
                  "reason": "Excluded value: $-2$ is not $0$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{1}{x} - 5 = 2 + \\dfrac{7}{x}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-6/7}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{1}{x} - 5 = 2 + \\dfrac{7}{x}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 0$.",
                  "reason": "Excluded value: $x = 0$ makes the denominator $x$ equal to $0$, so $x$ is not $0$."
                },
                {
                  "step": "$-\\dfrac{6}{x} - 5 = 2$",
                  "reason": "Adding the same number to both sides takes $\\dfrac{7}{x}$ from both sides, and Subtracting fractions with the same denominator writes $\\dfrac{1}{x} - \\dfrac{7}{x}$ as $-\\dfrac{6}{x}$."
                },
                {
                  "step": "$-\\dfrac{6}{x} = 7$",
                  "reason": "Adding the same number to both sides adds $5$ to both sides."
                },
                {
                  "step": "$-6 = 7x$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x$, which is not $0$."
                },
                {
                  "step": "$x = -\\dfrac{6}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "The set of values is $\\{-\\dfrac{6}{7}\\}$.",
                  "reason": "Excluded value: $-\\dfrac{6}{7}$ is not $0$, so it makes no denominator $0$ and is a solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{3}{x - 2} = \\dfrac{5}{x + 4}$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{3}{x - 2} = \\dfrac{5}{x + 4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded values are $x = 2$ and $x = -4$.",
                "reason": "Excluded value: $x = 2$ makes $x - 2$ equal to $0$, and $x = -4$ makes $x + 4$ equal to $0$."
              },
              {
                "step": "$3(x + 4) = 5(x - 2)$",
                "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
              },
              {
                "step": "$3x + 12 = 5x - 10$",
                "reason": "Multiplying out each bracket by the distributive law."
              },
              {
                "step": "$-2x = -22$",
                "reason": "Adding the same number to both sides takes $5x$ from both sides, takes $12$ from both sides, and Collecting like terms writes each side as one term."
              },
              {
                "step": "$x = 11$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
              },
              {
                "step": "The set of values is $\\{11\\}$.",
                "reason": "Excluded value: $11$ is neither $2$ nor $-4$, so it makes no denominator $0$ and is a solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{4}{x + 1} = \\dfrac{7}{x - 5}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-9}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{4}{x + 1} = \\dfrac{7}{x - 5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = -1$ and $x = 5$.",
                  "reason": "Excluded value: $x = -1$ makes $x + 1$ equal to $0$, and $x = 5$ makes $x - 5$ equal to $0$."
                },
                {
                  "step": "$4(x - 5) = 7(x + 1)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$4x - 20 = 7x + 7$",
                  "reason": "Multiplying out each bracket by the distributive law."
                },
                {
                  "step": "$-3x = 27$",
                  "reason": "Adding the same number to both sides takes $7x$ from both sides, adds $20$ to both sides, and Collecting like terms writes each side as one term."
                },
                {
                  "step": "$x = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "The set of values is $\\{-9\\}$.",
                  "reason": "Excluded value: $-9$ is neither $-1$ nor $5$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{2}{x - 3} = \\dfrac{6}{x + 2}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{11/2}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{2}{x - 3} = \\dfrac{6}{x + 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 3$ and $x = -2$.",
                  "reason": "Excluded value: $x = 3$ makes $x - 3$ equal to $0$, and $x = -2$ makes $x + 2$ equal to $0$."
                },
                {
                  "step": "$2(x + 2) = 6(x - 3)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$2x + 4 = 6x - 18$",
                  "reason": "Multiplying out each bracket by the distributive law."
                },
                {
                  "step": "$-4x = -22$",
                  "reason": "Adding the same number to both sides takes $6x$ from both sides, takes $4$ from both sides, and Collecting like terms writes each side as one term."
                },
                {
                  "step": "$x = \\dfrac{11}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "The set of values is $\\{\\dfrac{11}{2}\\}$.",
                  "reason": "Excluded value: $\\dfrac{11}{2}$ is neither $3$ nor $-2$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{5}{x + 2} = \\dfrac{3}{x - 3}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{21/2}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{5}{x + 2} = \\dfrac{3}{x - 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = -2$ and $x = 3$.",
                  "reason": "Excluded value: $x = -2$ makes $x + 2$ equal to $0$, and $x = 3$ makes $x - 3$ equal to $0$."
                },
                {
                  "step": "$5(x - 3) = 3(x + 2)$",
                  "reason": "Cross-multiplying: the top of each side times the bottom of the other side are equal, since neither bottom is $0$."
                },
                {
                  "step": "$5x - 15 = 3x + 6$",
                  "reason": "Multiplying out each bracket by the distributive law."
                },
                {
                  "step": "$2x = 21$",
                  "reason": "Adding the same number to both sides takes $3x$ from both sides, adds $15$ to both sides, and Collecting like terms writes each side as one term."
                },
                {
                  "step": "$x = \\dfrac{21}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The set of values is $\\{\\dfrac{21}{2}\\}$.",
                  "reason": "Excluded value: $\\dfrac{21}{2}$ is neither $-2$ nor $3$, so it makes no denominator $0$ and is a solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{2x + 1}{x - 5} = 3 + \\dfrac{11}{x - 5}$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{2x + 1}{x - 5} = 3 + \\dfrac{11}{x - 5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded value is $x = 5$.",
                "reason": "Excluded value: $x = 5$ makes $x - 5$ equal to $0$."
              },
              {
                "step": "$2x + 1 = 3(x - 5) + 11$",
                "reason": "Multiplying both sides by the same number: each side is multiplied by $x - 5$, which is not $0$, and each fraction leaves its top."
              },
              {
                "step": "$2x + 1 = 3x - 15 + 11$",
                "reason": "Multiplying out the bracket by the distributive law."
              },
              {
                "step": "$-x = -5$",
                "reason": "Adding the same number to both sides takes $3x$ from both sides, takes $1$ from both sides, and Collecting like terms writes each side as one term."
              },
              {
                "step": "$x = 5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-1$."
              },
              {
                "step": "The set of values is $\\{\\}$.",
                "reason": "Excluded value: the one candidate, $x = 5$, makes a denominator $0$, so the equation has no solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{4x - 3}{x + 3} = 2 - \\dfrac{15}{x + 3}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{4x - 3}{x + 3} = 2 - \\dfrac{15}{x + 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = -3$.",
                  "reason": "Excluded value: $x = -3$ makes $x + 3$ equal to $0$."
                },
                {
                  "step": "$4x - 3 = 2(x + 3) - 15$",
                  "reason": "Multiplying both sides by the same number: each side is multiplied by $x + 3$, which is not $0$, and each fraction leaves its top."
                },
                {
                  "step": "$4x - 3 = 2x + 6 - 15$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$2x = -6$",
                  "reason": "Adding the same number to both sides takes $2x$ from both sides, adds $3$ to both sides, and Collecting like terms writes each side as one term."
                },
                {
                  "step": "$x = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The set of values is $\\{\\}$.",
                  "reason": "Excluded value: the one candidate, $x = -3$, makes a denominator $0$, so the equation has no solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{3x + 5}{x + 2} = 6 - \\dfrac{1}{x + 2}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{3x + 5}{x + 2} = 6 - \\dfrac{1}{x + 2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = -2$.",
                  "reason": "Excluded value: $x = -2$ makes $x + 2$ equal to $0$."
                },
                {
                  "step": "$3x + 5 = 6(x + 2) - 1$",
                  "reason": "Multiplying both sides by the same number: each side is multiplied by $x + 2$, which is not $0$, and each fraction leaves its top."
                },
                {
                  "step": "$3x + 5 = 6x + 12 - 1$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$-3x = 6$",
                  "reason": "Adding the same number to both sides takes $6x$ from both sides, takes $5$ from both sides, and Collecting like terms writes each side as one term."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                },
                {
                  "step": "The set of values is $\\{\\}$.",
                  "reason": "Excluded value: the one candidate, $x = -2$, makes a denominator $0$, so the equation has no solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{6x - 1}{x - 4} = -2 + \\dfrac{23}{x - 4}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{6x - 1}{x - 4} = -2 + \\dfrac{23}{x - 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 4$.",
                  "reason": "Excluded value: $x = 4$ makes $x - 4$ equal to $0$."
                },
                {
                  "step": "$6x - 1 = -2(x - 4) + 23$",
                  "reason": "Multiplying both sides by the same number: each side is multiplied by $x - 4$, which is not $0$, and each fraction leaves its top."
                },
                {
                  "step": "$6x - 1 = -2x + 8 + 23$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$8x = 32$",
                  "reason": "Adding the same number to both sides adds $2x$ to both sides, adds $1$ to both sides, and Collecting like terms writes each side as one term."
                },
                {
                  "step": "$x = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "The set of values is $\\{\\}$.",
                  "reason": "Excluded value: the one candidate, $x = 4$, makes a denominator $0$, so the equation has no solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{6}{1 + \\dfrac{2}{x}} = 4$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{6}{1 + \\dfrac{2}{x}} = 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded values are $x = 0$ and $x = -2$.",
                "reason": "Excluded value: $x = 0$ makes the inner denominator $0$, and $x = -2$ makes $1 + \\dfrac{2}{x}$ equal to $0$."
              },
              {
                "step": "$\\dfrac{6x}{x + 2} = 4$",
                "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $x$, which is not $0$, and the distributive law multiplies out the bottom."
              },
              {
                "step": "$6x = 4(x + 2)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x + 2$, which is not $0$."
              },
              {
                "step": "$6x = 4x + 8$",
                "reason": "Multiplying out the bracket by the distributive law."
              },
              {
                "step": "$2x = 8$",
                "reason": "Adding the same number to both sides takes $4x$ from both sides, and Collecting like terms writes the left side as one term."
              },
              {
                "step": "$x = 4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "The set of values is $\\{4\\}$.",
                "reason": "Excluded value: $4$ is neither $0$ nor $-2$, so it makes no denominator $0$ and is a solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{5}{1 - \\dfrac{3}{x}} = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-2}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{5}{1 - \\dfrac{3}{x}} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $x = 3$.",
                  "reason": "Excluded value: $x = 0$ makes the inner denominator $0$, and $x = 3$ makes $1 - \\dfrac{3}{x}$ equal to $0$."
                },
                {
                  "step": "$\\dfrac{5x}{x - 3} = 2$",
                  "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $x$, which is not $0$, and the distributive law multiplies out the bottom."
                },
                {
                  "step": "$5x = 2(x - 3)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 3$, which is not $0$."
                },
                {
                  "step": "$5x = 2x - 6$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$3x = -6$",
                  "reason": "Adding the same number to both sides takes $2x$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "The set of values is $\\{-2\\}$.",
                  "reason": "Excluded value: $-2$ is neither $0$ nor $3$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{4}{1 + \\dfrac{5}{x}} = -3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-15/7}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{4}{1 + \\dfrac{5}{x}} = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $x = -5$.",
                  "reason": "Excluded value: $x = 0$ makes the inner denominator $0$, and $x = -5$ makes $1 + \\dfrac{5}{x}$ equal to $0$."
                },
                {
                  "step": "$\\dfrac{4x}{x + 5} = -3$",
                  "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $x$, which is not $0$, and the distributive law multiplies out the bottom."
                },
                {
                  "step": "$4x = -3(x + 5)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x + 5$, which is not $0$."
                },
                {
                  "step": "$4x = -3x - 15$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$7x = -15$",
                  "reason": "Adding the same number to both sides adds $3x$ to both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$x = -\\dfrac{15}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "The set of values is $\\{-\\dfrac{15}{7}\\}$.",
                  "reason": "Excluded value: $-\\dfrac{15}{7}$ is neither $0$ nor $-5$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{3}{1 - \\dfrac{4}{x}} = 7$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{3}{1 - \\dfrac{4}{x}} = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded values are $x = 0$ and $x = 4$.",
                  "reason": "Excluded value: $x = 0$ makes the inner denominator $0$, and $x = 4$ makes $1 - \\dfrac{4}{x}$ equal to $0$."
                },
                {
                  "step": "$\\dfrac{3x}{x - 4} = 7$",
                  "reason": "Cancelling a common factor, read from right to left: the top and the bottom are each multiplied by $x$, which is not $0$, and the distributive law multiplies out the bottom."
                },
                {
                  "step": "$3x = 7(x - 4)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 4$, which is not $0$."
                },
                {
                  "step": "$3x = 7x - 28$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$-4x = -28$",
                  "reason": "Adding the same number to both sides takes $7x$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$x = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "The set of values is $\\{7\\}$.",
                  "reason": "Excluded value: $7$ is neither $0$ nor $4$, so it makes no denominator $0$ and is a solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{9}{x - 4} + \\dfrac{2}{4 - x} = 3$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{9}{x - 4} + \\dfrac{2}{4 - x} = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded value is $x = 4$.",
                "reason": "Excluded value: $x = 4$ makes $x - 4$ and $4 - x$ equal to $0$."
              },
              {
                "step": "$\\dfrac{9}{x - 4} - \\dfrac{2}{x - 4} = 3$",
                "reason": "The rule for removing parentheses, read from right to left, writes $4 - x$ as $-(x - 4)$, and Negative quotient identities put the minus sign in front of the fraction."
              },
              {
                "step": "$\\dfrac{7}{x - 4} = 3$",
                "reason": "Subtracting fractions with the same denominator takes the second top from the first."
              },
              {
                "step": "$7 = 3(x - 4)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 4$, which is not $0$."
              },
              {
                "step": "$7 = 3x - 12$",
                "reason": "Multiplying out the bracket by the distributive law."
              },
              {
                "step": "$19 = 3x$",
                "reason": "Adding the same number to both sides adds $12$ to both sides."
              },
              {
                "step": "$x = \\dfrac{19}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "The set of values is $\\{\\dfrac{19}{3}\\}$.",
                "reason": "Excluded value: $\\dfrac{19}{3}$ is not $4$, so it makes no denominator $0$ and is a solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{5}{x + 2} + \\dfrac{8}{-2 - x} = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7/2}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{5}{x + 2} + \\dfrac{8}{-2 - x} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = -2$.",
                  "reason": "Excluded value: $x = -2$ makes $x + 2$ and $-2 - x$ equal to $0$."
                },
                {
                  "step": "$\\dfrac{5}{x + 2} - \\dfrac{8}{x + 2} = 2$",
                  "reason": "The rule for removing parentheses, read from right to left, writes $-2 - x$ as $-(x + 2)$, and Negative quotient identities put the minus sign in front of the fraction."
                },
                {
                  "step": "$-\\dfrac{3}{x + 2} = 2$",
                  "reason": "Subtracting fractions with the same denominator takes the second top from the first."
                },
                {
                  "step": "$-3 = 2(x + 2)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x + 2$, which is not $0$."
                },
                {
                  "step": "$-3 = 2x + 4$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$-7 = 2x$",
                  "reason": "Adding the same number to both sides takes $4$ from both sides."
                },
                {
                  "step": "$x = -\\dfrac{7}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "The set of values is $\\{-\\dfrac{7}{2}\\}$.",
                  "reason": "Excluded value: $-\\dfrac{7}{2}$ is not $-2$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{11}{x - 1} + \\dfrac{3}{1 - x} = 4$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{11}{x - 1} + \\dfrac{3}{1 - x} = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 1$.",
                  "reason": "Excluded value: $x = 1$ makes $x - 1$ and $1 - x$ equal to $0$."
                },
                {
                  "step": "$\\dfrac{11}{x - 1} - \\dfrac{3}{x - 1} = 4$",
                  "reason": "The rule for removing parentheses, read from right to left, writes $1 - x$ as $-(x - 1)$, and Negative quotient identities put the minus sign in front of the fraction."
                },
                {
                  "step": "$\\dfrac{8}{x - 1} = 4$",
                  "reason": "Subtracting fractions with the same denominator takes the second top from the first."
                },
                {
                  "step": "$8 = 4(x - 1)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 1$, which is not $0$."
                },
                {
                  "step": "$8 = 4x - 4$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$12 = 4x$",
                  "reason": "Adding the same number to both sides adds $4$ to both sides."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "The set of values is $\\{3\\}$.",
                  "reason": "Excluded value: $3$ is not $1$, so it makes no denominator $0$ and is a solution."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{4}{x - 3} + \\dfrac{9}{3 - x} = 5$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2}",
              "lines": [
                {
                  "step": "Solve $\\dfrac{4}{x - 3} + \\dfrac{9}{3 - x} = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 3$.",
                  "reason": "Excluded value: $x = 3$ makes $x - 3$ and $3 - x$ equal to $0$."
                },
                {
                  "step": "$\\dfrac{4}{x - 3} - \\dfrac{9}{x - 3} = 5$",
                  "reason": "The rule for removing parentheses, read from right to left, writes $3 - x$ as $-(x - 3)$, and Negative quotient identities put the minus sign in front of the fraction."
                },
                {
                  "step": "$-\\dfrac{5}{x - 3} = 5$",
                  "reason": "Subtracting fractions with the same denominator takes the second top from the first."
                },
                {
                  "step": "$-5 = 5(x - 3)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 3$, which is not $0$."
                },
                {
                  "step": "$-5 = 5x - 15$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$10 = 5x$",
                  "reason": "Adding the same number to both sides adds $15$ to both sides."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "The set of values is $\\{2\\}$.",
                  "reason": "Excluded value: $2$ is not $3$, so it makes no denominator $0$ and is a solution."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t111-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $3\\sqrt{x + 7} + 2 = 14$.",
            "lines": [
              {
                "step": "Solve $3\\sqrt{x + 7} + 2 = 14$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3\\sqrt{x + 7} = 12$",
                "reason": "Adding the same number to both sides takes $2$ from both sides."
              },
              {
                "step": "$\\sqrt{x + 7} = 4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$x + 7 = 16$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x + 7}$ is $x + 7$."
              },
              {
                "step": "$x = 9$",
                "reason": "Adding the same number to both sides takes $7$ from both sides."
              },
              {
                "step": "$3\\sqrt{16} + 2 = 3 \\cdot 4 + 2 = 14$",
                "reason": "Checking in the original equation: at $x = 9$ the left side is $14$, the right side."
              },
              {
                "step": "The set of values is $\\{9\\}$.",
                "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2\\sqrt{x - 3} + 5 = 15$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{28}",
              "lines": [
                {
                  "step": "Solve $2\\sqrt{x - 3} + 5 = 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2\\sqrt{x - 3} = 10$",
                  "reason": "Adding the same number to both sides takes $5$ from both sides."
                },
                {
                  "step": "$\\sqrt{x - 3} = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$x - 3 = 25$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x - 3}$ is $x - 3$."
                },
                {
                  "step": "$x = 28$",
                  "reason": "Adding the same number to both sides adds $3$ to both sides."
                },
                {
                  "step": "$2\\sqrt{25} + 5 = 2 \\cdot 5 + 5 = 15$",
                  "reason": "Checking in the original equation: at $x = 28$ the left side is $15$, the right side."
                },
                {
                  "step": "The set of values is $\\{28\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $4\\sqrt{x + 1} - 3 = 9$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{8}",
              "lines": [
                {
                  "step": "Solve $4\\sqrt{x + 1} - 3 = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\sqrt{x + 1} = 12$",
                  "reason": "Adding the same number to both sides adds $3$ to both sides."
                },
                {
                  "step": "$\\sqrt{x + 1} = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$x + 1 = 9$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x + 1}$ is $x + 1$."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Adding the same number to both sides takes $1$ from both sides."
                },
                {
                  "step": "$4\\sqrt{9} - 3 = 4 \\cdot 3 - 3 = 9$",
                  "reason": "Checking in the original equation: at $x = 8$ the left side is $9$, the right side."
                },
                {
                  "step": "The set of values is $\\{8\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $5\\sqrt{x - 6} + 1 = 11$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{10}",
              "lines": [
                {
                  "step": "Solve $5\\sqrt{x - 6} + 1 = 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5\\sqrt{x - 6} = 10$",
                  "reason": "Adding the same number to both sides takes $1$ from both sides."
                },
                {
                  "step": "$\\sqrt{x - 6} = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$x - 6 = 4$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x - 6}$ is $x - 6$."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Adding the same number to both sides adds $6$ to both sides."
                },
                {
                  "step": "$5\\sqrt{4} + 1 = 5 \\cdot 2 + 1 = 11$",
                  "reason": "Checking in the original equation: at $x = 10$ the left side is $11$, the right side."
                },
                {
                  "step": "The set of values is $\\{10\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2\\sqrt[3]{x + 1} + 5 = 1$.",
            "lines": [
              {
                "step": "Solve $2\\sqrt[3]{x + 1} + 5 = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2\\sqrt[3]{x + 1} = -4$",
                "reason": "Adding the same number to both sides takes $5$ from both sides."
              },
              {
                "step": "$\\sqrt[3]{x + 1} = -2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$x + 1 = -8$",
                "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x + 1}$ is $x + 1$."
              },
              {
                "step": "$x = -9$",
                "reason": "Adding the same number to both sides takes $1$ from both sides."
              },
              {
                "step": "The set of values is $\\{-9\\}$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x + 1} = -2$ exactly when $x + 1 = -8$, so cubing adds no candidate and $x = -9$ is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3\\sqrt[3]{x - 5} - 1 = 5$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{13}",
              "lines": [
                {
                  "step": "Solve $3\\sqrt[3]{x - 5} - 1 = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3\\sqrt[3]{x - 5} = 6$",
                  "reason": "Adding the same number to both sides adds $1$ to both sides."
                },
                {
                  "step": "$\\sqrt[3]{x - 5} = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$x - 5 = 8$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x - 5}$ is $x - 5$."
                },
                {
                  "step": "$x = 13$",
                  "reason": "Adding the same number to both sides adds $5$ to both sides."
                },
                {
                  "step": "The set of values is $\\{13\\}$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x - 5} = 2$ exactly when $x - 5 = 8$, so cubing adds no candidate and $x = 13$ is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $4\\sqrt[3]{x + 7} + 6 = -6$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-34}",
              "lines": [
                {
                  "step": "Solve $4\\sqrt[3]{x + 7} + 6 = -6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\sqrt[3]{x + 7} = -12$",
                  "reason": "Adding the same number to both sides takes $6$ from both sides."
                },
                {
                  "step": "$\\sqrt[3]{x + 7} = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$x + 7 = -27$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x + 7}$ is $x + 7$."
                },
                {
                  "step": "$x = -34$",
                  "reason": "Adding the same number to both sides takes $7$ from both sides."
                },
                {
                  "step": "The set of values is $\\{-34\\}$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x + 7} = -3$ exactly when $x + 7 = -27$, so cubing adds no candidate and $x = -34$ is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $2\\sqrt[3]{x - 3} - 4 = 2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{30}",
              "lines": [
                {
                  "step": "Solve $2\\sqrt[3]{x - 3} - 4 = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2\\sqrt[3]{x - 3} = 6$",
                  "reason": "Adding the same number to both sides adds $4$ to both sides."
                },
                {
                  "step": "$\\sqrt[3]{x - 3} = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$x - 3 = 27$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x - 3}$ is $x - 3$."
                },
                {
                  "step": "$x = 30$",
                  "reason": "Adding the same number to both sides adds $3$ to both sides."
                },
                {
                  "step": "The set of values is $\\{30\\}$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x - 3} = 3$ exactly when $x - 3 = 27$, so cubing adds no candidate and $x = 30$ is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2\\sqrt{x + 3} + 9 = 1$.",
            "lines": [
              {
                "step": "Solve $2\\sqrt{x + 3} + 9 = 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2\\sqrt{x + 3} = -8$",
                "reason": "Adding the same number to both sides takes $9$ from both sides."
              },
              {
                "step": "$\\sqrt{x + 3} = -4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$x + 3 = 16$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x + 3}$ is $x + 3$."
              },
              {
                "step": "$x = 13$",
                "reason": "Adding the same number to both sides takes $3$ from both sides."
              },
              {
                "step": "$2\\sqrt{16} + 9 = 2 \\cdot 4 + 9 = 17$",
                "reason": "Checking in the original equation: at $x = 13$ the left side is $17$, and the right side is $1$."
              },
              {
                "step": "The set of values is $\\{\\}$.",
                "reason": "Extraneous solution: $x = 13$ solves the squared equation and fails the original one, and it was the one candidate, so the equation has no solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3\\sqrt{x - 1} + 7 = -2$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Solve $3\\sqrt{x - 1} + 7 = -2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3\\sqrt{x - 1} = -9$",
                  "reason": "Adding the same number to both sides takes $7$ from both sides."
                },
                {
                  "step": "$\\sqrt{x - 1} = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$x - 1 = 9$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x - 1}$ is $x - 1$."
                },
                {
                  "step": "$x = 10$",
                  "reason": "Adding the same number to both sides adds $1$ to both sides."
                },
                {
                  "step": "$3\\sqrt{9} + 7 = 3 \\cdot 3 + 7 = 16$",
                  "reason": "Checking in the original equation: at $x = 10$ the left side is $16$, and the right side is $-2$."
                },
                {
                  "step": "The set of values is $\\{\\}$.",
                  "reason": "Extraneous solution: $x = 10$ solves the squared equation and fails the original one, and it was the one candidate, so the equation has no solution."
                }
              ]
            },
            {
              "prompt": "Solve $4\\sqrt{x + 6} + 5 = -3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Solve $4\\sqrt{x + 6} + 5 = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\sqrt{x + 6} = -8$",
                  "reason": "Adding the same number to both sides takes $5$ from both sides."
                },
                {
                  "step": "$\\sqrt{x + 6} = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$x + 6 = 4$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x + 6}$ is $x + 6$."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Adding the same number to both sides takes $6$ from both sides."
                },
                {
                  "step": "$4\\sqrt{4} + 5 = 4 \\cdot 2 + 5 = 13$",
                  "reason": "Checking in the original equation: at $x = -2$ the left side is $13$, and the right side is $-3$."
                },
                {
                  "step": "The set of values is $\\{\\}$.",
                  "reason": "Extraneous solution: $x = -2$ solves the squared equation and fails the original one, and it was the one candidate, so the equation has no solution."
                }
              ]
            },
            {
              "prompt": "Solve $5\\sqrt{x - 2} + 4 = -1$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{}",
              "lines": [
                {
                  "step": "Solve $5\\sqrt{x - 2} + 4 = -1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5\\sqrt{x - 2} = -5$",
                  "reason": "Adding the same number to both sides takes $4$ from both sides."
                },
                {
                  "step": "$\\sqrt{x - 2} = -1$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$x - 2 = 1$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x - 2}$ is $x - 2$."
                },
                {
                  "step": "$x = 3$",
                  "reason": "Adding the same number to both sides adds $2$ to both sides."
                },
                {
                  "step": "$5\\sqrt{1} + 4 = 5 \\cdot 1 + 4 = 9$",
                  "reason": "Checking in the original equation: at $x = 3$ the left side is $9$, and the right side is $-1$."
                },
                {
                  "step": "The set of values is $\\{\\}$.",
                  "reason": "Extraneous solution: $x = 3$ solves the squared equation and fails the original one, and it was the one candidate, so the equation has no solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $3\\sqrt{x - 2} + 5 = 21 - \\sqrt{x - 2}$.",
            "lines": [
              {
                "step": "Solve $3\\sqrt{x - 2} + 5 = 21 - \\sqrt{x - 2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = \\sqrt{x - 2}$, the equation reads $3y + 5 = 21 - y$.",
                "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt{x - 2}$ each time it appears."
              },
              {
                "step": "$4y = 16$",
                "reason": "Adding the same number to both sides adds $y$ to both sides and takes $5$ from both sides, and Collecting like terms writes the left side as one term."
              },
              {
                "step": "$y = 4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
              },
              {
                "step": "$\\sqrt{x - 2} = 4$",
                "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt{x - 2}$."
              },
              {
                "step": "$x - 2 = 16$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x - 2}$ is $x - 2$."
              },
              {
                "step": "$x = 18$",
                "reason": "Adding the same number to both sides adds $2$ to both sides."
              },
              {
                "step": "At $x = 18$ the left side is $3 \\cdot 4 + 5 = 17$ and the right side is $21 - 4 = 17$.",
                "reason": "Checking in the original equation: the two sides are equal."
              },
              {
                "step": "The set of values is $\\{18\\}$.",
                "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2\\sqrt{x + 4} - 3 = 7 - 3\\sqrt{x + 4}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{0}",
              "lines": [
                {
                  "step": "Solve $2\\sqrt{x + 4} - 3 = 7 - 3\\sqrt{x + 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt{x + 4}$, the equation reads $2y - 3 = 7 - 3y$.",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt{x + 4}$ each time it appears."
                },
                {
                  "step": "$5y = 10$",
                  "reason": "Adding the same number to both sides adds $3y$ to both sides and adds $3$ to both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$\\sqrt{x + 4} = 2$",
                  "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt{x + 4}$."
                },
                {
                  "step": "$x + 4 = 4$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x + 4}$ is $x + 4$."
                },
                {
                  "step": "$x = 0$",
                  "reason": "Adding the same number to both sides takes $4$ from both sides."
                },
                {
                  "step": "At $x = 0$ the left side is $2 \\cdot 2 - 3 = 1$ and the right side is $7 - 3 \\cdot 2 = 1$.",
                  "reason": "Checking in the original equation: the two sides are equal."
                },
                {
                  "step": "The set of values is $\\{0\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $5\\sqrt{x + 3} + 2 = 23 - 2\\sqrt{x + 3}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{6}",
              "lines": [
                {
                  "step": "Solve $5\\sqrt{x + 3} + 2 = 23 - 2\\sqrt{x + 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt{x + 3}$, the equation reads $5y + 2 = 23 - 2y$.",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt{x + 3}$ each time it appears."
                },
                {
                  "step": "$7y = 21$",
                  "reason": "Adding the same number to both sides adds $2y$ to both sides and takes $2$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "$\\sqrt{x + 3} = 3$",
                  "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt{x + 3}$."
                },
                {
                  "step": "$x + 3 = 9$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x + 3}$ is $x + 3$."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Adding the same number to both sides takes $3$ from both sides."
                },
                {
                  "step": "At $x = 6$ the left side is $5 \\cdot 3 + 2 = 17$ and the right side is $23 - 2 \\cdot 3 = 17$.",
                  "reason": "Checking in the original equation: the two sides are equal."
                },
                {
                  "step": "The set of values is $\\{6\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $4\\sqrt{x - 6} - 7 = 13 - \\sqrt{x - 6}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{22}",
              "lines": [
                {
                  "step": "Solve $4\\sqrt{x - 6} - 7 = 13 - \\sqrt{x - 6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt{x - 6}$, the equation reads $4y - 7 = 13 - y$.",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt{x - 6}$ each time it appears."
                },
                {
                  "step": "$5y = 20$",
                  "reason": "Adding the same number to both sides adds $y$ to both sides and adds $7$ to both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$y = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$\\sqrt{x - 6} = 4$",
                  "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt{x - 6}$."
                },
                {
                  "step": "$x - 6 = 16$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of $\\sqrt{x - 6}$ is $x - 6$."
                },
                {
                  "step": "$x = 22$",
                  "reason": "Adding the same number to both sides adds $6$ to both sides."
                },
                {
                  "step": "At $x = 22$ the left side is $4 \\cdot 4 - 7 = 9$ and the right side is $13 - 4 = 9$.",
                  "reason": "Checking in the original equation: the two sides are equal."
                },
                {
                  "step": "The set of values is $\\{22\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2\\sqrt[3]{x + 3} + 1 = -5 - \\sqrt[3]{x + 3}$.",
            "lines": [
              {
                "step": "Solve $2\\sqrt[3]{x + 3} + 1 = -5 - \\sqrt[3]{x + 3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $y = \\sqrt[3]{x + 3}$, the equation reads $2y + 1 = -5 - y$.",
                "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt[3]{x + 3}$ each time it appears."
              },
              {
                "step": "$3y = -6$",
                "reason": "Adding the same number to both sides adds $y$ to both sides and takes $1$ from both sides, and Collecting like terms writes the left side as one term."
              },
              {
                "step": "$y = -2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$\\sqrt[3]{x + 3} = -2$",
                "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt[3]{x + 3}$."
              },
              {
                "step": "$x + 3 = -8$",
                "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x + 3}$ is $x + 3$."
              },
              {
                "step": "$x = -11$",
                "reason": "Adding the same number to both sides takes $3$ from both sides."
              },
              {
                "step": "The set of values is $\\{-11\\}$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x + 3} = -2$ exactly when $x + 3 = -8$, so cubing adds no candidate and $x = -11$ is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3\\sqrt[3]{x - 4} + 2 = 17 - 2\\sqrt[3]{x - 4}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{31}",
              "lines": [
                {
                  "step": "Solve $3\\sqrt[3]{x - 4} + 2 = 17 - 2\\sqrt[3]{x - 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt[3]{x - 4}$, the equation reads $3y + 2 = 17 - 2y$.",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt[3]{x - 4}$ each time it appears."
                },
                {
                  "step": "$5y = 15$",
                  "reason": "Adding the same number to both sides adds $2y$ to both sides and takes $2$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$y = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$\\sqrt[3]{x - 4} = 3$",
                  "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt[3]{x - 4}$."
                },
                {
                  "step": "$x - 4 = 27$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x - 4}$ is $x - 4$."
                },
                {
                  "step": "$x = 31$",
                  "reason": "Adding the same number to both sides adds $4$ to both sides."
                },
                {
                  "step": "The set of values is $\\{31\\}$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x - 4} = 3$ exactly when $x - 4 = 27$, so cubing adds no candidate and $x = 31$ is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $4\\sqrt[3]{x + 1} - 5 = 5 - \\sqrt[3]{x + 1}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7}",
              "lines": [
                {
                  "step": "Solve $4\\sqrt[3]{x + 1} - 5 = 5 - \\sqrt[3]{x + 1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt[3]{x + 1}$, the equation reads $4y - 5 = 5 - y$.",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt[3]{x + 1}$ each time it appears."
                },
                {
                  "step": "$5y = 10$",
                  "reason": "Adding the same number to both sides adds $y$ to both sides and adds $5$ to both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$y = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$\\sqrt[3]{x + 1} = 2$",
                  "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt[3]{x + 1}$."
                },
                {
                  "step": "$x + 1 = 8$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x + 1}$ is $x + 1$."
                },
                {
                  "step": "$x = 7$",
                  "reason": "Adding the same number to both sides takes $1$ from both sides."
                },
                {
                  "step": "The set of values is $\\{7\\}$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x + 1} = 2$ exactly when $x + 1 = 8$, so cubing adds no candidate and $x = 7$ is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $2\\sqrt[3]{x - 6} + 7 = -8 - 3\\sqrt[3]{x - 6}$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-21}",
              "lines": [
                {
                  "step": "Solve $2\\sqrt[3]{x - 6} + 7 = -8 - 3\\sqrt[3]{x - 6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $y = \\sqrt[3]{x - 6}$, the equation reads $2y + 7 = -8 - 3y$.",
                  "reason": "Substitution for a repeated expression: the letter $y$ stands for $\\sqrt[3]{x - 6}$ each time it appears."
                },
                {
                  "step": "$5y = -15$",
                  "reason": "Adding the same number to both sides adds $3y$ to both sides and takes $7$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$y = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$\\sqrt[3]{x - 6} = -3$",
                  "reason": "Substitution for a repeated expression, undone: $y$ stands for $\\sqrt[3]{x - 6}$."
                },
                {
                  "step": "$x - 6 = -27$",
                  "reason": "Raising both sides to a power: both sides are cubed, and the cube of $\\sqrt[3]{x - 6}$ is $x - 6$."
                },
                {
                  "step": "$x = -21$",
                  "reason": "Adding the same number to both sides adds $6$ to both sides."
                },
                {
                  "step": "The set of values is $\\{-21\\}$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{x - 6} = -3$ exactly when $x - 6 = -27$, so cubing adds no candidate and $x = -21$ is the one solution."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2\\sqrt[4]{x - 5} + 3 = 7$.",
            "lines": [
              {
                "step": "Solve $2\\sqrt[4]{x - 5} + 3 = 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2\\sqrt[4]{x - 5} = 4$",
                "reason": "Adding the same number to both sides takes $3$ from both sides."
              },
              {
                "step": "$\\sqrt[4]{x - 5} = 2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$x - 5 = 16$",
                "reason": "Raising both sides to a power: both sides are raised to the fourth power, and the fourth power of $\\sqrt[4]{x - 5}$ is $x - 5$."
              },
              {
                "step": "$x = 21$",
                "reason": "Adding the same number to both sides adds $5$ to both sides."
              },
              {
                "step": "$2\\sqrt[4]{16} + 3 = 2 \\cdot 2 + 3 = 7$",
                "reason": "Checking in the original equation: at $x = 21$ the left side is $7$, the right side."
              },
              {
                "step": "The set of values is $\\{21\\}$.",
                "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3\\sqrt[4]{x + 4} - 2 = 7$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{77}",
              "lines": [
                {
                  "step": "Solve $3\\sqrt[4]{x + 4} - 2 = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3\\sqrt[4]{x + 4} = 9$",
                  "reason": "Adding the same number to both sides adds $2$ to both sides."
                },
                {
                  "step": "$\\sqrt[4]{x + 4} = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$x + 4 = 81$",
                  "reason": "Raising both sides to a power: both sides are raised to the fourth power, and the fourth power of $\\sqrt[4]{x + 4}$ is $x + 4$."
                },
                {
                  "step": "$x = 77$",
                  "reason": "Adding the same number to both sides takes $4$ from both sides."
                },
                {
                  "step": "$3\\sqrt[4]{81} - 2 = 3 \\cdot 3 - 2 = 7$",
                  "reason": "Checking in the original equation: at $x = 77$ the left side is $7$, the right side."
                },
                {
                  "step": "The set of values is $\\{77\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $5\\sqrt[4]{x - 9} + 6 = 16$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{25}",
              "lines": [
                {
                  "step": "Solve $5\\sqrt[4]{x - 9} + 6 = 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5\\sqrt[4]{x - 9} = 10$",
                  "reason": "Adding the same number to both sides takes $6$ from both sides."
                },
                {
                  "step": "$\\sqrt[4]{x - 9} = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$x - 9 = 16$",
                  "reason": "Raising both sides to a power: both sides are raised to the fourth power, and the fourth power of $\\sqrt[4]{x - 9}$ is $x - 9$."
                },
                {
                  "step": "$x = 25$",
                  "reason": "Adding the same number to both sides adds $9$ to both sides."
                },
                {
                  "step": "$5\\sqrt[4]{16} + 6 = 5 \\cdot 2 + 6 = 16$",
                  "reason": "Checking in the original equation: at $x = 25$ the left side is $16$, the right side."
                },
                {
                  "step": "The set of values is $\\{25\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            },
            {
              "prompt": "Solve $4\\sqrt[4]{x + 10} - 1 = 7$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{6}",
              "lines": [
                {
                  "step": "Solve $4\\sqrt[4]{x + 10} - 1 = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4\\sqrt[4]{x + 10} = 8$",
                  "reason": "Adding the same number to both sides adds $1$ to both sides."
                },
                {
                  "step": "$\\sqrt[4]{x + 10} = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$x + 10 = 16$",
                  "reason": "Raising both sides to a power: both sides are raised to the fourth power, and the fourth power of $\\sqrt[4]{x + 10}$ is $x + 10$."
                },
                {
                  "step": "$x = 6$",
                  "reason": "Adding the same number to both sides takes $10$ from both sides."
                },
                {
                  "step": "$4\\sqrt[4]{16} - 1 = 4 \\cdot 2 - 1 = 7$",
                  "reason": "Checking in the original equation: at $x = 6$ the left side is $7$, the right side."
                },
                {
                  "step": "The set of values is $\\{6\\}$.",
                  "reason": "Raising both sides to a power keeps every solution, so the one candidate, which passes the check, is the one solution."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t111-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a number $a$ for which the equation $\\dfrac{5x + a}{x - 3} = 2$ has no solution. Write the answer as $a$ = the number.",
            "lines": [
              {
                "step": "Find a number $a$ for which the equation $\\dfrac{5x + a}{x - 3} = 2$ has no solution. Write the answer as $a$ = the number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The excluded value is $x = 3$.",
                "reason": "Excluded value: $x = 3$ makes $x - 3$ equal to $0$."
              },
              {
                "step": "$5x + a = 2(x - 3)$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 3$, which is not $0$."
              },
              {
                "step": "$5x + a = 2x - 6$",
                "reason": "Multiplying out the bracket by the distributive law."
              },
              {
                "step": "$3x = -6 - a$",
                "reason": "Adding the same number to both sides takes $2x$ from both sides, takes $a$ from both sides, and Collecting like terms writes the left side as one term."
              },
              {
                "step": "$x = \\dfrac{-6 - a}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$\\dfrac{-6 - a}{3} = 3$",
                "reason": "Excluded value: the one candidate fails only when it is the excluded value, and then the equation has no solution."
              },
              {
                "step": "$-6 - a = 9$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $3$."
              },
              {
                "step": "$a = -15$",
                "reason": "Adding the same number to both sides adds $a$ and takes $9$ from both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which the equation $\\dfrac{4x + a}{x + 2} = 2$ has no solution. Write the answer as $a$ = the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 8",
              "lines": [
                {
                  "step": "Find a number $a$ for which the equation $\\dfrac{4x + a}{x + 2} = 2$ has no solution. Write the answer as $a$ = the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = -2$.",
                  "reason": "Excluded value: $x = -2$ makes $x + 2$ equal to $0$."
                },
                {
                  "step": "$4x + a = 2(x + 2)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x + 2$, which is not $0$."
                },
                {
                  "step": "$4x + a = 2x + 4$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$2x = 4 - a$",
                  "reason": "Adding the same number to both sides takes $2x$ from both sides, takes $a$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$x = \\dfrac{4 - a}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$\\dfrac{4 - a}{2} = -2$",
                  "reason": "Excluded value: the one candidate fails only when it is the excluded value, and then the equation has no solution."
                },
                {
                  "step": "$4 - a = -4$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                },
                {
                  "step": "$a = 8$",
                  "reason": "Adding the same number to both sides adds $a$ and adds $4$ to both sides."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which the equation $\\dfrac{7x + a}{x - 2} = 3$ has no solution. Write the answer as $a$ = the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -14",
              "lines": [
                {
                  "step": "Find a number $a$ for which the equation $\\dfrac{7x + a}{x - 2} = 3$ has no solution. Write the answer as $a$ = the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = 2$.",
                  "reason": "Excluded value: $x = 2$ makes $x - 2$ equal to $0$."
                },
                {
                  "step": "$7x + a = 3(x - 2)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x - 2$, which is not $0$."
                },
                {
                  "step": "$7x + a = 3x - 6$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$4x = -6 - a$",
                  "reason": "Adding the same number to both sides takes $3x$ from both sides, takes $a$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$x = \\dfrac{-6 - a}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$\\dfrac{-6 - a}{4} = 2$",
                  "reason": "Excluded value: the one candidate fails only when it is the excluded value, and then the equation has no solution."
                },
                {
                  "step": "$-6 - a = 8$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4$."
                },
                {
                  "step": "$a = -14$",
                  "reason": "Adding the same number to both sides adds $a$ and takes $8$ from both sides."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which the equation $\\dfrac{6x + a}{x + 5} = 2$ has no solution. Write the answer as $a$ = the number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 30",
              "lines": [
                {
                  "step": "Find a number $a$ for which the equation $\\dfrac{6x + a}{x + 5} = 2$ has no solution. Write the answer as $a$ = the number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The excluded value is $x = -5$.",
                  "reason": "Excluded value: $x = -5$ makes $x + 5$ equal to $0$."
                },
                {
                  "step": "$6x + a = 2(x + 5)$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $x + 5$, which is not $0$."
                },
                {
                  "step": "$6x + a = 2x + 10$",
                  "reason": "Multiplying out the bracket by the distributive law."
                },
                {
                  "step": "$4x = 10 - a$",
                  "reason": "Adding the same number to both sides takes $2x$ from both sides, takes $a$ from both sides, and Collecting like terms writes the left side as one term."
                },
                {
                  "step": "$x = \\dfrac{10 - a}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$\\dfrac{10 - a}{4} = -5$",
                  "reason": "Excluded value: the one candidate fails only when it is the excluded value, and then the equation has no solution."
                },
                {
                  "step": "$10 - a = -20$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4$."
                },
                {
                  "step": "$a = 30$",
                  "reason": "Adding the same number to both sides adds $a$ and adds $20$ to both sides."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t111-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\dfrac{7}{x - 3} + \\dfrac{2}{3 - x} = 5$, and write that line right.",
            "given": [
              "$\\dfrac{7}{x - 3} + \\dfrac{2}{3 - x} = 5$",
              "$\\dfrac{7}{x - 3} + \\dfrac{2}{x - 3} = 5$",
              "$\\dfrac{9}{x - 3} = 5$",
              "$9 = 5(x - 3)$",
              "$9 = 5x - 15$",
              "$5x = 24$",
              "$x = \\dfrac{24}{5}$"
            ],
            "lines": [
              {
                "step": "The working to check solves $\\dfrac{7}{x - 3} + \\dfrac{2}{3 - x} = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $\\dfrac{2}{3 - x}$ as $\\dfrac{2}{x - 3}$, which loses a minus sign.",
                "reason": "The rule for removing parentheses, read from right to left, writes $3 - x$ as $-(x - 3)$, and Negative quotient identities put the minus sign in front of the fraction."
              },
              {
                "step": "Line 2 written right is $\\dfrac{7}{x - 3} - \\dfrac{2}{x - 3} = 5$.",
                "reason": "A sign lost: the line keeps every minus sign the step calls for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{9}{x + 2} + \\dfrac{4}{-2 - x} = 5$, and write that line right.",
              "given": [
                "$\\dfrac{9}{x + 2} + \\dfrac{4}{-2 - x} = 5$",
                "$\\dfrac{9}{x + 2} - \\dfrac{4}{x + 2} = 5$",
                "$\\dfrac{13}{x + 2} = 5$",
                "$13 = 5(x + 2)$",
                "$13 = 5x + 10$",
                "$5x = 3$",
                "$x = \\dfrac{3}{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 5/(x+2) = 5",
              "lines": [
                {
                  "step": "The working to check solves $\\dfrac{9}{x + 2} + \\dfrac{4}{-2 - x} = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds the tops $9$ and $4$ where Line 2 subtracts them, which loses a minus sign.",
                  "reason": "Subtracting fractions with the same denominator takes the second top from the first."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{5}{x + 2} = 5$.",
                  "reason": "A sign lost: the line keeps every minus sign the step calls for."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{5}{x - 4} + \\dfrac{11}{4 - x} = 3$, and write that line right.",
              "given": [
                "$\\dfrac{5}{x - 4} + \\dfrac{11}{4 - x} = 3$",
                "$\\dfrac{5}{x - 4} - \\dfrac{11}{x - 4} = 3$",
                "$-\\dfrac{6}{x - 4} = 3$",
                "$-6 = 3(x - 4)$",
                "$-6 = 3x + 12$",
                "$3x = -18$",
                "$x = -6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -6 = 3*x-12",
              "lines": [
                {
                  "step": "The working to check solves $\\dfrac{5}{x - 4} + \\dfrac{11}{4 - x} = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 multiplies out the bracket with the wrong sign on the number term.",
                  "reason": "The distributive law multiplies each term of the bracket by $3$, and $3$ times $-4$ is $-12$."
                },
                {
                  "step": "Line 5 written right is $-6 = 3x - 12$.",
                  "reason": "A sign lost: the line keeps every minus sign the step calls for."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{8}{x + 1} + \\dfrac{3}{-1 - x} = 2$, and write that line right.",
              "given": [
                "$\\dfrac{8}{x + 1} + \\dfrac{3}{-1 - x} = 2$",
                "$\\dfrac{8}{x + 1} - \\dfrac{3}{x + 1} = 2$",
                "$\\dfrac{5}{x + 1} = 2$",
                "$5 = 2(x + 1)$",
                "$5 = 2x + 2$",
                "$2x = 7$",
                "$x = \\dfrac{7}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 2*x = 3",
              "lines": [
                {
                  "step": "The working to check solves $\\dfrac{8}{x + 1} + \\dfrac{3}{-1 - x} = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 moves the number term across without changing its sign, which loses a minus sign.",
                  "reason": "Adding the same number to both sides takes $2$ from both sides."
                },
                {
                  "step": "Line 6 written right is $2x = 3$.",
                  "reason": "A sign lost: the line keeps every minus sign the step calls for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $2\\sqrt{x + 9} + 1 = 11$, and write that line right.",
            "given": [
              "$2\\sqrt{x + 9} + 1 = 11$",
              "$2\\sqrt{x + 9} = 10$",
              "$\\sqrt{x + 9} = 5$",
              "$\\sqrt{x} + 3 = 5$",
              "$\\sqrt{x} = 2$",
              "$x = 4$"
            ],
            "lines": [
              {
                "step": "The working to check solves $2\\sqrt{x + 9} + 1 = 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 writes $\\sqrt{x + 9}$ as $\\sqrt{x} + 3$, taking the root of each term of the sum.",
                "reason": "A root taken term by term over a sum: the root of a sum is not the sum of the roots, as $\\sqrt{9 + 16} = 5$ while $\\sqrt{9} + \\sqrt{16} = 7$."
              },
              {
                "step": "Line 4 written right is $x + 9 = 25$.",
                "reason": "Raising both sides to a power: squaring both sides of Line 3 gives the sum $x + 9$ whole."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\sqrt{x + 16} = 7$, and write that line right.",
              "given": [
                "$\\sqrt{x + 16} = 7$",
                "$\\sqrt{x} + 4 = 7$",
                "$\\sqrt{x} = 3$",
                "$x = 9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x+16 = 49",
              "lines": [
                {
                  "step": "The working to check solves $\\sqrt{x + 16} = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $\\sqrt{x + 16}$ as $\\sqrt{x} + 4$, taking the root of each term of the sum.",
                  "reason": "A root taken term by term over a sum: the root of a sum is not the sum of the roots, as $\\sqrt{9 + 16} = 5$ while $\\sqrt{9} + \\sqrt{16} = 7$."
                },
                {
                  "step": "Line 2 written right is $x + 16 = 49$.",
                  "reason": "Raising both sides to a power: squaring both sides of Line 1 gives the sum $x + 16$ whole."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $3\\sqrt{x + 4} = 15$, and write that line right.",
              "given": [
                "$3\\sqrt{x + 4} = 15$",
                "$\\sqrt{x + 4} = 5$",
                "$\\sqrt{x} + 2 = 5$",
                "$\\sqrt{x} = 3$",
                "$x = 9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x+4 = 25",
              "lines": [
                {
                  "step": "The working to check solves $3\\sqrt{x + 4} = 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $\\sqrt{x + 4}$ as $\\sqrt{x} + 2$, taking the root of each term of the sum.",
                  "reason": "A root taken term by term over a sum: the root of a sum is not the sum of the roots, as $\\sqrt{9 + 16} = 5$ while $\\sqrt{9} + \\sqrt{16} = 7$."
                },
                {
                  "step": "Line 3 written right is $x + 4 = 25$.",
                  "reason": "Raising both sides to a power: squaring both sides of Line 2 gives the sum $x + 4$ whole."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $5\\sqrt{x + 9} - 1 = 34$, and write that line right.",
              "given": [
                "$5\\sqrt{x + 9} - 1 = 34$",
                "$5\\sqrt{x + 9} = 35$",
                "$\\sqrt{x + 9} = 7$",
                "$\\sqrt{x} + 3 = 7$",
                "$\\sqrt{x} = 4$",
                "$x = 16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x+9 = 49",
              "lines": [
                {
                  "step": "The working to check solves $5\\sqrt{x + 9} - 1 = 34$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $\\sqrt{x + 9}$ as $\\sqrt{x} + 3$, taking the root of each term of the sum.",
                  "reason": "A root taken term by term over a sum: the root of a sum is not the sum of the roots, as $\\sqrt{9 + 16} = 5$ while $\\sqrt{9} + \\sqrt{16} = 7$."
                },
                {
                  "step": "Line 4 written right is $x + 9 = 49$.",
                  "reason": "Raising both sides to a power: squaring both sides of Line 3 gives the sum $x + 9$ whole."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t111-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: adding a number $x$ to the top and to the bottom of $\\dfrac{3}{8}$ gives a fraction equal to $\\dfrac{1}{2}$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: adding a number $x$ to the top and to the bottom of $\\dfrac{3}{8}$ gives a fraction equal to $\\dfrac{1}{2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $x$ added, the top is $3 + x$ and the bottom is $8 + x$.",
                "reason": "Writing a sentence as an equation: the words \"adding to\" write each as a sum."
              },
              {
                "step": "The new fraction is $\\dfrac{3 + x}{8 + x}$.",
                "reason": "Writing a sentence as an equation: the top goes over the bottom."
              },
              {
                "step": "$\\dfrac{3 + x}{8 + x} = \\dfrac{1}{2}$",
                "reason": "Writing a sentence as an equation: the word \"gives\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: taking a number $x$ from the top and from the bottom of $\\dfrac{7}{9}$ gives a fraction equal to $\\dfrac{2}{3}$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(7-x)/(9-x) = 2/3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: taking a number $x$ from the top and from the bottom of $\\dfrac{7}{9}$ gives a fraction equal to $\\dfrac{2}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x$ taken away, the top is $7 - x$ and the bottom is $9 - x$.",
                  "reason": "Writing a sentence as an equation: the words \"taking from\" subtract $x$ from each."
                },
                {
                  "step": "The new fraction is $\\dfrac{7 - x}{9 - x}$.",
                  "reason": "Writing a sentence as an equation: the top goes over the bottom."
                },
                {
                  "step": "$\\dfrac{7 - x}{9 - x} = \\dfrac{2}{3}$",
                  "reason": "Writing a sentence as an equation: the word \"gives\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the square root of the sum of a number $x$ and 5 is 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(x+5) = 6",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square root of the sum of a number $x$ and 5 is 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the number and 5 is $x + 5$.",
                  "reason": "Writing a sentence as an equation: the words \"the sum of\" join the number and $5$ with a plus sign."
                },
                {
                  "step": "The square root of that sum is $\\sqrt{x + 5}$.",
                  "reason": "Writing a sentence as an equation: the words \"the square root of\" put the whole sum under the root."
                },
                {
                  "step": "$\\sqrt{x + 5} = 6$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the cube root of the difference of twice a number $x$ and 4 is $-3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*x-4)^(1/3) = -3",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the cube root of the difference of twice a number $x$ and 4 is $-3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of twice the number and 4 is $2x - 4$.",
                  "reason": "Writing a sentence as an equation: the words \"the difference of\" take $4$ from twice the number."
                },
                {
                  "step": "The cube root of that difference is $\\sqrt[3]{2x - 4}$.",
                  "reason": "Writing a sentence as an equation: the words \"the cube root of\" put the whole difference under the root."
                },
                {
                  "step": "$\\sqrt[3]{2x - 4} = -3$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
      "id": "t111-p1",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be real numbers with $a = b$. Then $a^2 = b^2$.",
      "idea": "Multiply both sides of $a = b$ once by $a$ and once by $b$, and join the two results.",
      "lines": [
        {
          "line": "Let $a$ and $b$ be real numbers with $a = b$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $a \\cdot a = a \\cdot b$.",
          "reason": "multiplying both sides by the same number, $a$"
        },
        {
          "line": "Also $a \\cdot b = b \\cdot b$.",
          "reason": "multiplying both sides of the first line by the same number, $b$"
        },
        {
          "line": "So $a \\cdot a = b \\cdot b$.",
          "reason": "the transitive property, from the second and third lines"
        },
        {
          "line": "Therefore $a^2 = b^2$.",
          "reason": "the definition of a square: $a^2$ is $a \\cdot a$"
        }
      ]
    },
    {
      "id": "t111-p2",
      "method": "disproof by counterexample",
      "statement": "The converse is false: it is not true that $a^2 = b^2$ gives $a = b$ for all real numbers $a$ and $b$.",
      "idea": "One pair with equal squares and unequal numbers is enough: a number and its opposite.",
      "lines": [
        {
          "line": "Take $a = 3$ and $b = -3$.",
          "reason": "a choice of two numbers"
        },
        {
          "line": "Then $a^2 = 3 \\cdot 3 = 9$.",
          "reason": "the definition of a square"
        },
        {
          "line": "And $b^2 = (-3)(-3) = 9$.",
          "reason": "the product of two negative numbers equals the product of their opposites"
        },
        {
          "line": "So $a^2 = b^2$.",
          "reason": "the second and third lines"
        },
        {
          "line": "But $3$ is not $-3$, so $a$ is not $b$.",
          "reason": "a positive number is not a negative number"
        },
        {
          "line": "So the pair $a = 3$, $b = -3$ is a counterexample, and the converse is false.",
          "reason": "one case where the hypothesis holds and the conclusion fails"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t111-s1",
      "method": "direct proof",
      "statement": "Prove that for all real numbers $a$ and $b$, if $|a| = |b|$, then $a^2 = b^2$. Facts it may use: the definition of absolute value; the product of two negative numbers equals the product of their opposites; raising both sides to a power; substituting a value; the transitive property.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers with $|a| = |b|$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $|a|^2 = |b|^2$.",
            "reason": "raising both sides to a power: both sides are squared"
          },
          {
            "line": "The number $|a|$ is $a$ or $-a$.",
            "reason": "the definition of absolute value"
          },
          {
            "line": "If $|a| = a$, then $|a|^2 = a^2$.",
            "reason": "substituting a value"
          },
          {
            "line": "If $|a| = -a$, then $|a|^2 = (-a)(-a) = a^2$.",
            "reason": "the product of two negative numbers equals the product of their opposites"
          },
          {
            "line": "In the same way $|b|^2 = b^2$.",
            "reason": "the third to fifth lines with $b$ in place of $a$"
          },
          {
            "line": "Therefore $a^2 = b^2$.",
            "reason": "the transitive property, from the second, fourth, fifth and sixth lines"
          }
        ]
      }
    },
    {
      "id": "t111-s2",
      "method": "direct proof",
      "statement": "Prove that for real numbers $c$ and $k$ with $c < 0$, the equation $\\sqrt{x + k} = c$ has no solution. Facts it may use: the definition of $x^{1/n}$; the transitive property; checking in the original equation.",
      "check": {
        "proof": [
          {
            "line": "Let $c < 0$, let $k$ be a real number, and let $x$ be a real number.",
            "reason": "the hypothesis"
          },
          {
            "line": "If $x + k < 0$, then $\\sqrt{x + k}$ has no value, so $x$ is not a solution.",
            "reason": "the definition of $x^{1/n}$: an even root is taken only of a number that is not negative"
          },
          {
            "line": "If $x + k \\ge 0$, then $\\sqrt{x + k} \\ge 0$.",
            "reason": "the definition of $x^{1/n}$: an even root is the root that is not negative"
          },
          {
            "line": "Then $\\sqrt{x + k} > c$.",
            "reason": "the transitive property, from the third line and $0 > c$"
          },
          {
            "line": "So $\\sqrt{x + k}$ is not $c$, and $x$ is not a solution.",
            "reason": "checking in the original equation"
          },
          {
            "line": "So no real number $x$ is a solution, and the equation has no solution.",
            "reason": "the second and fifth lines cover every $x$"
          }
        ]
      }
    },
    {
      "id": "t111-s3",
      "method": "disproof by counterexample",
      "statement": "Prove that the following is false: multiplying both sides of an equation by the same expression in $x$ always gives an equation with the same solutions. Facts it may use: excluded value; multiplying both sides by the same number; cancelling a common factor; checking in the original equation.",
      "check": {
        "proof": [
          {
            "line": "Take the equation $\\dfrac{x}{x - 4} = \\dfrac{4}{x - 4}$.",
            "reason": "a choice of equation"
          },
          {
            "line": "Multiplying both sides by $x - 4$ gives $\\dfrac{x}{x - 4} \\cdot (x - 4) = \\dfrac{4}{x - 4} \\cdot (x - 4)$.",
            "reason": "multiplying both sides by the same number, $x - 4$"
          },
          {
            "line": "So $x = 4$.",
            "reason": "cancelling a common factor: each fraction leaves its top"
          },
          {
            "line": "So $x = 4$ solves the new equation.",
            "reason": "substituting a value: $4 = 4$"
          },
          {
            "line": "At $x = 4$ the bottom $x - 4$ is $0$.",
            "reason": "substituting a value"
          },
          {
            "line": "So $x = 4$ is an excluded value and does not solve the first equation.",
            "reason": "excluded value"
          },
          {
            "line": "So the two equations have different solutions, and the claim is false.",
            "reason": "one case where the claim fails"
          }
        ]
      }
    }
  ]
}
