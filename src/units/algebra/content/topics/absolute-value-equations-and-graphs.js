export default {
  "number": 172,
  "title": "Absolute value: equations and graphs",
  "section": 16,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "562-569, 584-588, 249"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $|3x - 6| = |6x - 2|$.",
    "form": "Answer as the solutions, as in x = -1, x = 3.",
    "answer": "x = -4/3, x = 8/9",
    "solution": [
      "Solve $|3x - 6| = |6x - 2|$.",
      "Either $3x - 6 = 6x - 2$ or $3x - 6 = -(6x - 2)$",
      "Either $3x - 6 = 6x - 2$ or $3x - 6 = -6x + 2$",
      "Either $-3x = 4$ or $9x = 8$",
      "Either $x = -\\dfrac{4}{3}$ or $x = \\dfrac{8}{9}$"
    ]
  },
  "ideas": [
    {
      "name": "Absolute value by cases",
      "concrete": "At $x = 6$ the number $3x - 11$ is $7$, which is not negative, so $|3x - 11| = 7$. At $x = 2$ it is $-5$, which is negative, so $|3x - 11| = -(-5) = 5$.",
      "general": "For every real number $x$, $|x| = x$ when $x \\ge 0$ and $|x| = -x$ when $x < 0$, so $|x| \\ge 0$. For every real number $x$, $|x|^2 = x^2$."
    },
    {
      "name": "Breakpoints and cases",
      "concrete": "In $|x - 4| + |2x + 6|$ the insides are $0$ at $x = 4$ and at $x = -3$. For $x \\ge 4$ both insides are not negative, and the sum is $(x - 4) + (2x + 6) = 3x + 2$.",
      "general": "The values of $x$ where an expression inside bars is $0$ are the **breakpoints**. They split the number line into intervals, and in each interval every absolute value is its inside or the negative of its inside, so the bars come off. A value found in one case is an answer only when it lies inside that case."
    }
  ],
  "kinds": [
    {
      "id": "t172-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $|-2x + 11| = 2$.",
            "lines": [
              {
                "step": "Solve $|-2x + 11| = 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Either $-2x + 11 = 2$ or $-2x + 11 = -2$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $-2x + 11 \\ge 0$ it equals $2$, and if $-2x + 11 < 0$ its negative equals $2$, so $-2x + 11 = -2$."
              },
              {
                "step": "Either $-2x = -9$ or $-2x = -13$",
                "reason": "Adding the same number to both sides: $-11$ is added to both sides of each equation."
              },
              {
                "step": "Either $x = \\dfrac{9}{2}$ or $x = \\dfrac{13}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $-2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|6x - 12| = 15$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 9/2, x = -1/2",
              "lines": [
                {
                  "step": "Solve $|6x - 12| = 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $6x - 12 = 15$ or $6x - 12 = -15$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $6x - 12 \\ge 0$ it equals $15$, and if $6x - 12 < 0$ its negative equals $15$, so $6x - 12 = -15$."
                },
                {
                  "step": "Either $6x = 27$ or $6x = -3$",
                  "reason": "Adding the same number to both sides: $12$ is added to both sides of each equation."
                },
                {
                  "step": "Either $x = \\dfrac{9}{2}$ or $x = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Solve $|7x + 7| = 4$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -3/7, x = -11/7",
              "lines": [
                {
                  "step": "Solve $|7x + 7| = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $7x + 7 = 4$ or $7x + 7 = -4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $7x + 7 \\ge 0$ it equals $4$, and if $7x + 7 < 0$ its negative equals $4$, so $7x + 7 = -4$."
                },
                {
                  "step": "Either $7x = -3$ or $7x = -11$",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides of each equation."
                },
                {
                  "step": "Either $x = -\\dfrac{3}{7}$ or $x = -\\dfrac{11}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $7$."
                }
              ]
            },
            {
              "prompt": "Solve $|-5x - 11| = 12$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -23/5, x = 1/5",
              "lines": [
                {
                  "step": "Solve $|-5x - 11| = 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $-5x - 11 = 12$ or $-5x - 11 = -12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $-5x - 11 \\ge 0$ it equals $12$, and if $-5x - 11 < 0$ its negative equals $12$, so $-5x - 11 = -12$."
                },
                {
                  "step": "Either $-5x = 23$ or $-5x = -1$",
                  "reason": "Adding the same number to both sides: $11$ is added to both sides of each equation."
                },
                {
                  "step": "Either $x = -\\dfrac{23}{5}$ or $x = \\dfrac{1}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $-5$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $|x - 4| = |6x + 6|$.",
            "lines": [
              {
                "step": "Solve $|x - 4| = |6x + 6|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Either $x - 4 = 6x + 6$ or $x - 4 = -(6x + 6)$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $x - 4$ and $6x + 6$ each equal their absolute value or its negative, so equal absolute values make them equal or one the negative of the other."
              },
              {
                "step": "Either $x - 4 = 6x + 6$ or $x - 4 = -6x - 6$",
                "reason": "Subtracting a bracket changes every sign in it: $-(6x + 6) = -6x - 6$."
              },
              {
                "step": "Either $-5x = 10$ or $7x = -2$",
                "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
              },
              {
                "step": "Either $x = -2$ or $x = -\\dfrac{2}{7}$",
                "reason": "Dividing both sides by a nonzero number: by $-5$ in the first equation and by $7$ in the second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|5x - 8| = |-3x + 3|$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 11/8, x = 5/2",
              "lines": [
                {
                  "step": "Solve $|5x - 8| = |-3x + 3|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $5x - 8 = -3x + 3$ or $5x - 8 = -(-3x + 3)$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $5x - 8$ and $-3x + 3$ each equal their absolute value or its negative, so equal absolute values make them equal or one the negative of the other."
                },
                {
                  "step": "Either $5x - 8 = -3x + 3$ or $5x - 8 = 3x - 3$",
                  "reason": "Subtracting a bracket changes every sign in it: $-(-3x + 3) = 3x - 3$."
                },
                {
                  "step": "Either $8x = 11$ or $2x = 5$",
                  "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
                },
                {
                  "step": "Either $x = \\dfrac{11}{8}$ or $x = \\dfrac{5}{2}$",
                  "reason": "Dividing both sides by a nonzero number: by $8$ in the first equation and by $2$ in the second."
                }
              ]
            },
            {
              "prompt": "Solve $|5x - 5| = |-2x - 7|$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -2/7, x = 4",
              "lines": [
                {
                  "step": "Solve $|5x - 5| = |-2x - 7|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $5x - 5 = -2x - 7$ or $5x - 5 = -(-2x - 7)$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $5x - 5$ and $-2x - 7$ each equal their absolute value or its negative, so equal absolute values make them equal or one the negative of the other."
                },
                {
                  "step": "Either $5x - 5 = -2x - 7$ or $5x - 5 = 2x + 7$",
                  "reason": "Subtracting a bracket changes every sign in it: $-(-2x - 7) = 2x + 7$."
                },
                {
                  "step": "Either $7x = -2$ or $3x = 12$",
                  "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
                },
                {
                  "step": "Either $x = -\\dfrac{2}{7}$ or $x = 4$",
                  "reason": "Dividing both sides by a nonzero number: by $7$ in the first equation and by $3$ in the second."
                }
              ]
            },
            {
              "prompt": "Solve $|6x + 4| = |2x + 4|$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 0, x = -1",
              "lines": [
                {
                  "step": "Solve $|6x + 4| = |2x + 4|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $6x + 4 = 2x + 4$ or $6x + 4 = -(2x + 4)$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $6x + 4$ and $2x + 4$ each equal their absolute value or its negative, so equal absolute values make them equal or one the negative of the other."
                },
                {
                  "step": "Either $6x + 4 = 2x + 4$ or $6x + 4 = -2x - 4$",
                  "reason": "Subtracting a bracket changes every sign in it: $-(2x + 4) = -2x - 4$."
                },
                {
                  "step": "Either $4x = 0$ or $8x = -8$",
                  "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
                },
                {
                  "step": "Either $x = 0$ or $x = -1$",
                  "reason": "Dividing both sides by a nonzero number: by $4$ in the first equation and by $8$ in the second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $|2x - 12| = -4x - 2$.",
            "lines": [
              {
                "step": "Solve $|2x - 12| = -4x - 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Either $2x - 12 = -4x - 2$ or $2x - 12 = -(-4x - 2)$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $2x - 12$ equals its absolute value or its negative; the right side must then not be negative, which is checked at the end."
              },
              {
                "step": "Either $2x - 12 = -4x - 2$ or $2x - 12 = 4x + 2$",
                "reason": "Subtracting a bracket changes every sign in it: $-(-4x - 2) = 4x + 2$."
              },
              {
                "step": "Either $6x = 10$ or $-2x = 14$",
                "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
              },
              {
                "step": "Either $x = \\dfrac{5}{3}$ or $x = -7$",
                "reason": "Dividing both sides by a nonzero number: by $6$ in the first equation and by $-2$ in the second."
              },
              {
                "step": "At $x = \\dfrac{5}{3}$ the right side is $-\\dfrac{26}{3}$, and at $x = -7$ it is $26$.",
                "reason": "Substituting a value: each value goes into $-4x - 2$."
              },
              {
                "step": "$x = -7$",
                "reason": "The rule $|x| \\ge 0$: the right side equals an absolute value, so it cannot be negative; $x = \\dfrac{5}{3}$ makes it negative and is left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|5x + 9| = x + 11$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/2, x = -10/3",
              "lines": [
                {
                  "step": "Solve $|5x + 9| = x + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $5x + 9 = x + 11$ or $5x + 9 = -(x + 11)$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $5x + 9$ equals its absolute value or its negative; the right side must then not be negative, which is checked at the end."
                },
                {
                  "step": "Either $5x + 9 = x + 11$ or $5x + 9 = -x - 11$",
                  "reason": "Subtracting a bracket changes every sign in it: $-(x + 11) = -x - 11$."
                },
                {
                  "step": "Either $4x = 2$ or $6x = -20$",
                  "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
                },
                {
                  "step": "Either $x = \\dfrac{1}{2}$ or $x = -\\dfrac{10}{3}$",
                  "reason": "Dividing both sides by a nonzero number: by $4$ in the first equation and by $6$ in the second."
                },
                {
                  "step": "At $x = \\dfrac{1}{2}$ the right side is $\\dfrac{23}{2}$, and at $x = -\\dfrac{10}{3}$ it is $\\dfrac{23}{3}$.",
                  "reason": "Substituting a value: each value goes into $x + 11$."
                },
                {
                  "step": "Either $x = \\dfrac{1}{2}$ or $x = -\\dfrac{10}{3}$",
                  "reason": "The rule $|x| \\ge 0$: the right side equals an absolute value, so it cannot be negative; both values keep it positive, so both count."
                }
              ]
            },
            {
              "prompt": "Solve $|2x + 10| = -4x - 8$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -3",
              "lines": [
                {
                  "step": "Solve $|2x + 10| = -4x - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $2x + 10 = -4x - 8$ or $2x + 10 = -(-4x - 8)$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $2x + 10$ equals its absolute value or its negative; the right side must then not be negative, which is checked at the end."
                },
                {
                  "step": "Either $2x + 10 = -4x - 8$ or $2x + 10 = 4x + 8$",
                  "reason": "Subtracting a bracket changes every sign in it: $-(-4x - 8) = 4x + 8$."
                },
                {
                  "step": "Either $6x = -18$ or $-2x = -2$",
                  "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
                },
                {
                  "step": "Either $x = -3$ or $x = 1$",
                  "reason": "Dividing both sides by a nonzero number: by $6$ in the first equation and by $-2$ in the second."
                },
                {
                  "step": "At $x = -3$ the right side is $4$, and at $x = 1$ it is $-12$.",
                  "reason": "Substituting a value: each value goes into $-4x - 8$."
                },
                {
                  "step": "$x = -3$",
                  "reason": "The rule $|x| \\ge 0$: the right side equals an absolute value, so it cannot be negative; $x = 1$ makes it negative and is left out."
                }
              ]
            },
            {
              "prompt": "Solve $|5x - 11| = 3x + 6$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 17/2, x = 5/8",
              "lines": [
                {
                  "step": "Solve $|5x - 11| = 3x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $5x - 11 = 3x + 6$ or $5x - 11 = -(3x + 6)$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: $5x - 11$ equals its absolute value or its negative; the right side must then not be negative, which is checked at the end."
                },
                {
                  "step": "Either $5x - 11 = 3x + 6$ or $5x - 11 = -3x - 6$",
                  "reason": "Subtracting a bracket changes every sign in it: $-(3x + 6) = -3x - 6$."
                },
                {
                  "step": "Either $2x = 17$ or $8x = 5$",
                  "reason": "Adding the same number to both sides: the term in $x$ on the right and the number on the left are moved across in each equation."
                },
                {
                  "step": "Either $x = \\dfrac{17}{2}$ or $x = \\dfrac{5}{8}$",
                  "reason": "Dividing both sides by a nonzero number: by $2$ in the first equation and by $8$ in the second."
                },
                {
                  "step": "At $x = \\dfrac{17}{2}$ the right side is $\\dfrac{63}{2}$, and at $x = \\dfrac{5}{8}$ it is $\\dfrac{63}{8}$.",
                  "reason": "Substituting a value: each value goes into $3x + 6$."
                },
                {
                  "step": "Either $x = \\dfrac{17}{2}$ or $x = \\dfrac{5}{8}$",
                  "reason": "The rule $|x| \\ge 0$: the right side equals an absolute value, so it cannot be negative; both values keep it positive, so both count."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $|4x + 8| \\le 15$.",
            "lines": [
              {
                "step": "Solve $|4x + 8| \\le 15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-15 \\le 4x + 8 \\le 15$",
                "reason": "Distance on the number line: $|4x + 8|$ is the distance from $4x + 8$ to $0$, so $4x + 8$ lies within $15$ of $0$ on either side."
              },
              {
                "step": "$-23 \\le 4x \\le 7$",
                "reason": "Solving a chain: $-8$ is added to each of the three parts."
              },
              {
                "step": "$-\\dfrac{23}{4} \\le x \\le \\dfrac{7}{4}$",
                "reason": "Solving a chain: each of the three parts is divided by $4$, a positive number, so the signs stay."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|4x - 4| < 11$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-7/4 < x < 15/4",
              "lines": [
                {
                  "step": "Solve $|4x - 4| < 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-11 < 4x - 4 < 11$",
                  "reason": "Distance on the number line: $|4x - 4|$ is the distance from $4x - 4$ to $0$, so $4x - 4$ lies within $11$ of $0$ on either side."
                },
                {
                  "step": "$-7 < 4x < 15$",
                  "reason": "Solving a chain: $4$ is added to each of the three parts."
                },
                {
                  "step": "$-\\dfrac{7}{4} < x < \\dfrac{15}{4}$",
                  "reason": "Solving a chain: each of the three parts is divided by $4$, a positive number, so the signs stay."
                }
              ]
            },
            {
              "prompt": "Solve $|5x + 4| < 15$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-19/5 < x < 11/5",
              "lines": [
                {
                  "step": "Solve $|5x + 4| < 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-15 < 5x + 4 < 15$",
                  "reason": "Distance on the number line: $|5x + 4|$ is the distance from $5x + 4$ to $0$, so $5x + 4$ lies within $15$ of $0$ on either side."
                },
                {
                  "step": "$-19 < 5x < 11$",
                  "reason": "Solving a chain: $-4$ is added to each of the three parts."
                },
                {
                  "step": "$-\\dfrac{19}{5} < x < \\dfrac{11}{5}$",
                  "reason": "Solving a chain: each of the three parts is divided by $5$, a positive number, so the signs stay."
                }
              ]
            },
            {
              "prompt": "Solve $|4x - 6| < 4$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "1/2 < x < 5/2",
              "lines": [
                {
                  "step": "Solve $|4x - 6| < 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4 < 4x - 6 < 4$",
                  "reason": "Distance on the number line: $|4x - 6|$ is the distance from $4x - 6$ to $0$, so $4x - 6$ lies within $4$ of $0$ on either side."
                },
                {
                  "step": "$2 < 4x < 10$",
                  "reason": "Solving a chain: $6$ is added to each of the three parts."
                },
                {
                  "step": "$\\dfrac{1}{2} < x < \\dfrac{5}{2}$",
                  "reason": "Solving a chain: each of the three parts is divided by $4$, a positive number, so the signs stay."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $5|-3x - 5| + 2 = 32$.",
            "lines": [
              {
                "step": "Solve $5|-3x - 5| + 2 = 32$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5|-3x - 5| = 30$",
                "reason": "Adding the same number to both sides: $-2$ is added to both sides, which leaves the absolute value term alone."
              },
              {
                "step": "$|-3x - 5| = 6$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "Either $-3x - 5 = 6$ or $-3x - 5 = -6$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $-3x - 5 \\ge 0$ it equals $6$, and if $-3x - 5 < 0$ its negative equals $6$."
              },
              {
                "step": "Either $-3x = 11$ or $-3x = -1$",
                "reason": "Adding the same number to both sides: $5$ is added to both sides of each equation."
              },
              {
                "step": "Either $x = -\\dfrac{11}{3}$ or $x = \\dfrac{1}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $-3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2|6x - 10| + 5 = 19$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 17/6, x = 1/2",
              "lines": [
                {
                  "step": "Solve $2|6x - 10| + 5 = 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2|6x - 10| = 14$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides, which leaves the absolute value term alone."
                },
                {
                  "step": "$|6x - 10| = 7$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "Either $6x - 10 = 7$ or $6x - 10 = -7$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $6x - 10 \\ge 0$ it equals $7$, and if $6x - 10 < 0$ its negative equals $7$."
                },
                {
                  "step": "Either $6x = 17$ or $6x = 3$",
                  "reason": "Adding the same number to both sides: $10$ is added to both sides of each equation."
                },
                {
                  "step": "Either $x = \\dfrac{17}{6}$ or $x = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Solve $5|-4x + 8| - 13 = 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 5/4, x = 11/4",
              "lines": [
                {
                  "step": "Solve $5|-4x + 8| - 13 = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5|-4x + 8| = 15$",
                  "reason": "Adding the same number to both sides: $13$ is added to both sides, which leaves the absolute value term alone."
                },
                {
                  "step": "$|-4x + 8| = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "Either $-4x + 8 = 3$ or $-4x + 8 = -3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $-4x + 8 \\ge 0$ it equals $3$, and if $-4x + 8 < 0$ its negative equals $3$."
                },
                {
                  "step": "Either $-4x = -5$ or $-4x = -11$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides of each equation."
                },
                {
                  "step": "Either $x = \\dfrac{5}{4}$ or $x = \\dfrac{11}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $-4$."
                }
              ]
            },
            {
              "prompt": "Solve $3|-4x - 9| + 4 = 37$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -5, x = 1/2",
              "lines": [
                {
                  "step": "Solve $3|-4x - 9| + 4 = 37$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3|-4x - 9| = 33$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides, which leaves the absolute value term alone."
                },
                {
                  "step": "$|-4x - 9| = 11$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "Either $-4x - 9 = 11$ or $-4x - 9 = -11$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $-4x - 9 \\ge 0$ it equals $11$, and if $-4x - 9 < 0$ its negative equals $11$."
                },
                {
                  "step": "Either $-4x = 20$ or $-4x = -2$",
                  "reason": "Adding the same number to both sides: $9$ is added to both sides of each equation."
                },
                {
                  "step": "Either $x = -5$ or $x = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $-4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t172-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $|x + 9| + |4x + 10| = 9$.",
            "lines": [
              {
                "step": "Solve $|x + 9| + |4x + 10| = 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -9$ and $x = -\\dfrac{5}{2}$.",
                "reason": "Breakpoints: $x + 9 = 0$ at $x = -9$ and $4x + 10 = 0$ at $x = -\\dfrac{5}{2}$, which split the number line into three cases."
              },
              {
                "step": "For $x < -9$: $-(x + 9) - (4x + 10) = 9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 9$ is negative and $4x + 10$ is negative."
              },
              {
                "step": "$-5x - 19 = 9$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x = -\\dfrac{28}{5}$",
                "reason": "Adding the same number to both sides and dividing both sides by $-5$ give the value."
              },
              {
                "step": "Here $-\\dfrac{28}{5} \\ge -9$, so it does not count.",
                "reason": "A case answer counts only inside its case: $x = -\\dfrac{28}{5}$ does not lie in the case $x < -9$."
              },
              {
                "step": "For $-9 \\le x < -\\dfrac{5}{2}$: $x + 9 - (4x + 10) = 9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 9$ is not negative and $4x + 10$ is negative."
              },
              {
                "step": "$-3x - 1 = 9$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x = -\\dfrac{10}{3}$",
                "reason": "Adding the same number to both sides and dividing both sides by $-3$ give the value."
              },
              {
                "step": "Here $-9 \\le -\\dfrac{10}{3} < -\\dfrac{5}{2}$, so it counts.",
                "reason": "A case answer counts only inside its case: $x = -\\dfrac{10}{3}$ lies in the case $-9 \\le x < -\\dfrac{5}{2}$."
              },
              {
                "step": "For $x \\ge -\\dfrac{5}{2}$: $x + 9 + (4x + 10) = 9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 9$ is not negative and $4x + 10$ is not negative."
              },
              {
                "step": "$5x + 19 = 9$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x = -2$",
                "reason": "Adding the same number to both sides and dividing both sides by $5$ give the value."
              },
              {
                "step": "Here $-2 \\ge -\\dfrac{5}{2}$, so it counts.",
                "reason": "A case answer counts only inside its case: $x = -2$ lies in the case $x \\ge -\\dfrac{5}{2}$."
              },
              {
                "step": "Either $x = -\\dfrac{10}{3}$ or $x = -2$",
                "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|5x - 7| + |x + 1| = 13$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -7/6, x = 19/6",
              "lines": [
                {
                  "step": "Solve $|5x - 7| + |x + 1| = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -1$ and $x = \\dfrac{7}{5}$.",
                  "reason": "Breakpoints: $x + 1 = 0$ at $x = -1$ and $5x - 7 = 0$ at $x = \\dfrac{7}{5}$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -1$: $-(5x - 7) - (x + 1) = 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $5x - 7$ is negative and $x + 1$ is negative."
                },
                {
                  "step": "$-6x + 6 = 13$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{7}{6}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-6$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{7}{6} < -1$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{7}{6}$ lies in the case $x < -1$."
                },
                {
                  "step": "For $-1 \\le x < \\dfrac{7}{5}$: $-(5x - 7) + (x + 1) = 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $5x - 7$ is negative and $x + 1$ is not negative."
                },
                {
                  "step": "$-4x + 8 = 13$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{5}{4}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-4$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{5}{4} < -1$, so it does not count.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{5}{4}$ does not lie in the case $-1 \\le x < \\dfrac{7}{5}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{7}{5}$: $5x - 7 + (x + 1) = 13$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $5x - 7$ is not negative and $x + 1$ is not negative."
                },
                {
                  "step": "$6x - 6 = 13$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = \\dfrac{19}{6}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $6$ give the value."
                },
                {
                  "step": "Here $\\dfrac{19}{6} \\ge \\dfrac{7}{5}$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = \\dfrac{19}{6}$ lies in the case $x \\ge \\dfrac{7}{5}$."
                },
                {
                  "step": "Either $x = -\\dfrac{7}{6}$ or $x = \\dfrac{19}{6}$",
                  "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
                }
              ]
            },
            {
              "prompt": "Solve $|x + 2| + |4x - 7| = 8$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/3, x = 13/5",
              "lines": [
                {
                  "step": "Solve $|x + 2| + |4x - 7| = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -2$ and $x = \\dfrac{7}{4}$.",
                  "reason": "Breakpoints: $x + 2 = 0$ at $x = -2$ and $4x - 7 = 0$ at $x = \\dfrac{7}{4}$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -2$: $-(x + 2) - (4x - 7) = 8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 2$ is negative and $4x - 7$ is negative."
                },
                {
                  "step": "$-5x + 5 = 8$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{3}{5}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-5$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{3}{5} \\ge -2$, so it does not count.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{3}{5}$ does not lie in the case $x < -2$."
                },
                {
                  "step": "For $-2 \\le x < \\dfrac{7}{4}$: $x + 2 - (4x - 7) = 8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 2$ is not negative and $4x - 7$ is negative."
                },
                {
                  "step": "$-3x + 9 = 8$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = \\dfrac{1}{3}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-3$ give the value."
                },
                {
                  "step": "Here $-2 \\le \\dfrac{1}{3} < \\dfrac{7}{4}$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = \\dfrac{1}{3}$ lies in the case $-2 \\le x < \\dfrac{7}{4}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{7}{4}$: $x + 2 + (4x - 7) = 8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 2$ is not negative and $4x - 7$ is not negative."
                },
                {
                  "step": "$5x - 5 = 8$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = \\dfrac{13}{5}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $5$ give the value."
                },
                {
                  "step": "Here $\\dfrac{13}{5} \\ge \\dfrac{7}{4}$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = \\dfrac{13}{5}$ lies in the case $x \\ge \\dfrac{7}{4}$."
                },
                {
                  "step": "Either $x = \\dfrac{1}{3}$ or $x = \\dfrac{13}{5}$",
                  "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
                }
              ]
            },
            {
              "prompt": "Solve $|3x + 2| + |x + 2| = 17$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -21/4, x = 13/4",
              "lines": [
                {
                  "step": "Solve $|3x + 2| + |x + 2| = 17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -2$ and $x = -\\dfrac{2}{3}$.",
                  "reason": "Breakpoints: $x + 2 = 0$ at $x = -2$ and $3x + 2 = 0$ at $x = -\\dfrac{2}{3}$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -2$: $-(3x + 2) - (x + 2) = 17$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $3x + 2$ is negative and $x + 2$ is negative."
                },
                {
                  "step": "$-4x - 4 = 17$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{21}{4}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-4$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{21}{4} < -2$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{21}{4}$ lies in the case $x < -2$."
                },
                {
                  "step": "For $-2 \\le x < -\\dfrac{2}{3}$: $-(3x + 2) + (x + 2) = 17$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $3x + 2$ is negative and $x + 2$ is not negative."
                },
                {
                  "step": "$-2x = 17$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{17}{2}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-2$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{17}{2} < -2$, so it does not count.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{17}{2}$ does not lie in the case $-2 \\le x < -\\dfrac{2}{3}$."
                },
                {
                  "step": "For $x \\ge -\\dfrac{2}{3}$: $3x + 2 + (x + 2) = 17$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $3x + 2$ is not negative and $x + 2$ is not negative."
                },
                {
                  "step": "$4x + 4 = 17$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = \\dfrac{13}{4}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $4$ give the value."
                },
                {
                  "step": "Here $\\dfrac{13}{4} \\ge -\\dfrac{2}{3}$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = \\dfrac{13}{4}$ lies in the case $x \\ge -\\dfrac{2}{3}$."
                },
                {
                  "step": "Either $x = -\\dfrac{21}{4}$ or $x = \\dfrac{13}{4}$",
                  "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $|x + 3| + |x - 2| = 15$.",
            "lines": [
              {
                "step": "Solve $|x + 3| + |x - 2| = 15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -3$ and $x = 2$.",
                "reason": "Breakpoints: $x + 3 = 0$ at $x = -3$ and $x - 2 = 0$ at $x = 2$, which split the number line into three cases."
              },
              {
                "step": "For $x < -3$: $-(x + 3) - (x - 2) = 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
              },
              {
                "step": "$-2x - 1 = 15$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x = -8$",
                "reason": "Adding the same number to both sides and dividing both sides by $-2$ give the value."
              },
              {
                "step": "Here $-8 < -3$, so it counts.",
                "reason": "A case answer counts only inside its case: $x = -8$ lies in the case $x < -3$."
              },
              {
                "step": "For $-3 \\le x < 2$: $x + 3 - (x - 2) = 5$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 3$ is not negative and $x - 2$ is negative; the left side is collected."
              },
              {
                "step": "No value: the left side is $5$ for every $x$ in this case, and $5 \\ne 15$.",
                "reason": "A case answer counts only inside its case: the equation of this case is never true."
              },
              {
                "step": "For $x \\ge 2$: $x + 3 + (x - 2) = 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
              },
              {
                "step": "$2x + 1 = 15$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x = 7$",
                "reason": "Adding the same number to both sides and dividing both sides by $2$ give the value."
              },
              {
                "step": "Here $7 \\ge 2$, so it counts.",
                "reason": "A case answer counts only inside its case: $x = 7$ lies in the case $x \\ge 2$."
              },
              {
                "step": "Either $x = -8$ or $x = 7$",
                "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|x + 2| + |x - 9| = 20$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -13/2, x = 27/2",
              "lines": [
                {
                  "step": "Solve $|x + 2| + |x - 9| = 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -2$ and $x = 9$.",
                  "reason": "Breakpoints: $x + 2 = 0$ at $x = -2$ and $x - 9 = 0$ at $x = 9$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -2$: $-(x + 2) - (x - 9) = 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
                },
                {
                  "step": "$-2x + 7 = 20$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{13}{2}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-2$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{13}{2} < -2$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{13}{2}$ lies in the case $x < -2$."
                },
                {
                  "step": "For $-2 \\le x < 9$: $x + 2 - (x - 9) = 11$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 2$ is not negative and $x - 9$ is negative; the left side is collected."
                },
                {
                  "step": "No value: the left side is $11$ for every $x$ in this case, and $11 \\ne 20$.",
                  "reason": "A case answer counts only inside its case: the equation of this case is never true."
                },
                {
                  "step": "For $x \\ge 9$: $x + 2 + (x - 9) = 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
                },
                {
                  "step": "$2x - 7 = 20$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = \\dfrac{27}{2}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $2$ give the value."
                },
                {
                  "step": "Here $\\dfrac{27}{2} \\ge 9$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = \\dfrac{27}{2}$ lies in the case $x \\ge 9$."
                },
                {
                  "step": "Either $x = -\\dfrac{13}{2}$ or $x = \\dfrac{27}{2}$",
                  "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
                }
              ]
            },
            {
              "prompt": "Solve $|x + 8| + |x + 5| = 20$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -33/2, x = 7/2",
              "lines": [
                {
                  "step": "Solve $|x + 8| + |x + 5| = 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -8$ and $x = -5$.",
                  "reason": "Breakpoints: $x + 8 = 0$ at $x = -8$ and $x + 5 = 0$ at $x = -5$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -8$: $-(x + 8) - (x + 5) = 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
                },
                {
                  "step": "$-2x - 13 = 20$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -\\dfrac{33}{2}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-2$ give the value."
                },
                {
                  "step": "Here $-\\dfrac{33}{2} < -8$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = -\\dfrac{33}{2}$ lies in the case $x < -8$."
                },
                {
                  "step": "For $-8 \\le x < -5$: $x + 8 - (x + 5) = 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 8$ is not negative and $x + 5$ is negative; the left side is collected."
                },
                {
                  "step": "No value: the left side is $3$ for every $x$ in this case, and $3 \\ne 20$.",
                  "reason": "A case answer counts only inside its case: the equation of this case is never true."
                },
                {
                  "step": "For $x \\ge -5$: $x + 8 + (x + 5) = 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
                },
                {
                  "step": "$2x + 13 = 20$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = \\dfrac{7}{2}$",
                  "reason": "Adding the same number to both sides and dividing both sides by $2$ give the value."
                },
                {
                  "step": "Here $\\dfrac{7}{2} \\ge -5$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = \\dfrac{7}{2}$ lies in the case $x \\ge -5$."
                },
                {
                  "step": "Either $x = -\\dfrac{33}{2}$ or $x = \\dfrac{7}{2}$",
                  "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
                }
              ]
            },
            {
              "prompt": "Solve $|x + 7| + |x - 1| = 16$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -11, x = 5",
              "lines": [
                {
                  "step": "Solve $|x + 7| + |x - 1| = 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -7$ and $x = 1$.",
                  "reason": "Breakpoints: $x + 7 = 0$ at $x = -7$ and $x - 1 = 0$ at $x = 1$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -7$: $-(x + 7) - (x - 1) = 16$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
                },
                {
                  "step": "$-2x - 6 = 16$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = -11$",
                  "reason": "Adding the same number to both sides and dividing both sides by $-2$ give the value."
                },
                {
                  "step": "Here $-11 < -7$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = -11$ lies in the case $x < -7$."
                },
                {
                  "step": "For $-7 \\le x < 1$: $x + 7 - (x - 1) = 8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 7$ is not negative and $x - 1$ is negative; the left side is collected."
                },
                {
                  "step": "No value: the left side is $8$ for every $x$ in this case, and $8 \\ne 16$.",
                  "reason": "A case answer counts only inside its case: the equation of this case is never true."
                },
                {
                  "step": "For $x \\ge 1$: $x + 7 + (x - 1) = 16$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
                },
                {
                  "step": "$2x + 6 = 16$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Adding the same number to both sides and dividing both sides by $2$ give the value."
                },
                {
                  "step": "Here $5 \\ge 1$, so it counts.",
                  "reason": "A case answer counts only inside its case: $x = 5$ lies in the case $x \\ge 1$."
                },
                {
                  "step": "Either $x = -11$ or $x = 5$",
                  "reason": "A case answer counts only inside its case: the answers that lie in their own cases are the solutions."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $|x + 7| + |x + 2| < 20$.",
            "lines": [
              {
                "step": "Solve $|x + 7| + |x + 2| < 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = -7$ and $x = -2$.",
                "reason": "Breakpoints: $x + 7 = 0$ at $x = -7$ and $x + 2 = 0$ at $x = -2$, which split the number line into three cases."
              },
              {
                "step": "For $x < -7$: $-(x + 7) - (x + 2) < 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
              },
              {
                "step": "$-2x - 9 < 20$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x > -\\dfrac{29}{2}$",
                "reason": "Adding the same number to both sides, then dividing by $-2$; multiplying by a negative number reverses the sign."
              },
              {
                "step": "$-\\dfrac{29}{2} < x < -7$",
                "reason": "A case answer counts only inside its case: only the values below $-7$ belong to this case."
              },
              {
                "step": "For $-7 \\le x < -2$: $x + 7 - (x + 2) < 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 7$ is not negative and $x + 2$ is negative."
              },
              {
                "step": "Here $5 < 20$, true for every such $x$.",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "For $x \\ge -2$: $x + 7 + (x + 2) < 20$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
              },
              {
                "step": "$2x + 9 < 20$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
              },
              {
                "step": "$x < \\dfrac{11}{2}$",
                "reason": "Adding the same number to both sides, then dividing both sides by $2$, a positive number, so the sign stays."
              },
              {
                "step": "$-2 \\le x < \\dfrac{11}{2}$",
                "reason": "A case answer counts only inside its case: only the values from $-2$ up belong to this case."
              },
              {
                "step": "$-\\dfrac{29}{2} < x < \\dfrac{11}{2}$",
                "reason": "Union of intervals: the three pieces join end to end."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|x + 7| + |x + 5| < 3$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-15/2 < x < -9/2",
              "lines": [
                {
                  "step": "Solve $|x + 7| + |x + 5| < 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -7$ and $x = -5$.",
                  "reason": "Breakpoints: $x + 7 = 0$ at $x = -7$ and $x + 5 = 0$ at $x = -5$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -7$: $-(x + 7) - (x + 5) < 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
                },
                {
                  "step": "$-2x - 12 < 3$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x > -\\dfrac{15}{2}$",
                  "reason": "Adding the same number to both sides, then dividing by $-2$; multiplying by a negative number reverses the sign."
                },
                {
                  "step": "$-\\dfrac{15}{2} < x < -7$",
                  "reason": "A case answer counts only inside its case: only the values below $-7$ belong to this case."
                },
                {
                  "step": "For $-7 \\le x < -5$: $x + 7 - (x + 5) < 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 7$ is not negative and $x + 5$ is negative."
                },
                {
                  "step": "Here $2 < 3$, true for every such $x$.",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "For $x \\ge -5$: $x + 7 + (x + 5) < 3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
                },
                {
                  "step": "$2x + 12 < 3$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x < -\\dfrac{9}{2}$",
                  "reason": "Adding the same number to both sides, then dividing both sides by $2$, a positive number, so the sign stays."
                },
                {
                  "step": "$-5 \\le x < -\\dfrac{9}{2}$",
                  "reason": "A case answer counts only inside its case: only the values from $-5$ up belong to this case."
                },
                {
                  "step": "$-\\dfrac{15}{2} < x < -\\dfrac{9}{2}$",
                  "reason": "Union of intervals: the three pieces join end to end."
                }
              ]
            },
            {
              "prompt": "Solve $|x + 8| + |x - 9| < 19$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-9 < x < 10",
              "lines": [
                {
                  "step": "Solve $|x + 8| + |x - 9| < 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -8$ and $x = 9$.",
                  "reason": "Breakpoints: $x + 8 = 0$ at $x = -8$ and $x - 9 = 0$ at $x = 9$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -8$: $-(x + 8) - (x - 9) < 19$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
                },
                {
                  "step": "$-2x + 1 < 19$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x > -9$",
                  "reason": "Adding the same number to both sides, then dividing by $-2$; multiplying by a negative number reverses the sign."
                },
                {
                  "step": "$-9 < x < -8$",
                  "reason": "A case answer counts only inside its case: only the values below $-8$ belong to this case."
                },
                {
                  "step": "For $-8 \\le x < 9$: $x + 8 - (x - 9) < 19$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 8$ is not negative and $x - 9$ is negative."
                },
                {
                  "step": "Here $17 < 19$, true for every such $x$.",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "For $x \\ge 9$: $x + 8 + (x - 9) < 19$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
                },
                {
                  "step": "$2x - 1 < 19$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x < 10$",
                  "reason": "Adding the same number to both sides, then dividing both sides by $2$, a positive number, so the sign stays."
                },
                {
                  "step": "$9 \\le x < 10$",
                  "reason": "A case answer counts only inside its case: only the values from $9$ up belong to this case."
                },
                {
                  "step": "$-9 < x < 10$",
                  "reason": "Union of intervals: the three pieces join end to end."
                }
              ]
            },
            {
              "prompt": "Solve $|x + 1| + |x - 6| < 14$.",
              "form": "Answer as an inequality, as in -2 <= x < 5.",
              "answer": "-9/2 < x < 19/2",
              "lines": [
                {
                  "step": "Solve $|x + 1| + |x - 6| < 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -1$ and $x = 6$.",
                  "reason": "Breakpoints: $x + 1 = 0$ at $x = -1$ and $x - 6 = 0$ at $x = 6$, which split the number line into three cases."
                },
                {
                  "step": "For $x < -1$: $-(x + 1) - (x - 6) < 14$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are negative."
                },
                {
                  "step": "$-2x + 5 < 14$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x > -\\dfrac{9}{2}$",
                  "reason": "Adding the same number to both sides, then dividing by $-2$; multiplying by a negative number reverses the sign."
                },
                {
                  "step": "$-\\dfrac{9}{2} < x < -1$",
                  "reason": "A case answer counts only inside its case: only the values below $-1$ belong to this case."
                },
                {
                  "step": "For $-1 \\le x < 6$: $x + 1 - (x - 6) < 14$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case $x + 1$ is not negative and $x - 6$ is negative."
                },
                {
                  "step": "Here $7 < 14$, true for every such $x$.",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "For $x \\ge 6$: $x + 1 + (x - 6) < 14$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: in this case both insides are not negative."
                },
                {
                  "step": "$2x - 5 < 14$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected."
                },
                {
                  "step": "$x < \\dfrac{19}{2}$",
                  "reason": "Adding the same number to both sides, then dividing both sides by $2$, a positive number, so the sign stays."
                },
                {
                  "step": "$6 \\le x < \\dfrac{19}{2}$",
                  "reason": "A case answer counts only inside its case: only the values from $6$ up belong to this case."
                },
                {
                  "step": "$-\\dfrac{9}{2} < x < \\dfrac{19}{2}$",
                  "reason": "Union of intervals: the three pieces join end to end."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t172-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $|x^2 - 9x - 124| = 12$.",
            "lines": [
              {
                "step": "Solve $|x^2 - 9x - 124| = 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Either $x^2 - 9x - 124 = 12$ or $x^2 - 9x - 124 = -12$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $x^2 - 9x - 124 \\ge 0$ it equals $12$, and if it is negative its negative equals $12$."
              },
              {
                "step": "Either $x^2 - 9x - 136 = 0$ or $x^2 - 9x - 112 = 0$",
                "reason": "Adding the same number to both sides: $-12$ is added to both sides of the first equation and $12$ to both sides of the second."
              },
              {
                "step": "Either $(x + 8)(x - 17) = 0$ or $(x + 7)(x - 16) = 0$",
                "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: here $8$ and $-17$, then $7$ and $-16$, each pair with sum $-9$."
              },
              {
                "step": "Either $x = -8$ or $x = 17$ or $x = -7$ or $x = 16$",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $|x^2 + 4x - 78| = 18$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-12, -10, 6, 8}",
              "lines": [
                {
                  "step": "Solve $|x^2 + 4x - 78| = 18$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $x^2 + 4x - 78 = 18$ or $x^2 + 4x - 78 = -18$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $x^2 + 4x - 78 \\ge 0$ it equals $18$, and if it is negative its negative equals $18$."
                },
                {
                  "step": "Either $x^2 + 4x - 96 = 0$ or $x^2 + 4x - 60 = 0$",
                  "reason": "Adding the same number to both sides: $-18$ is added to both sides of the first equation and $18$ to both sides of the second."
                },
                {
                  "step": "Either $(x - 8)(x + 12) = 0$ or $(x - 6)(x + 10) = 0$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: here $-8$ and $12$, then $-6$ and $10$, each pair with sum $4$."
                },
                {
                  "step": "Either $x = 8$ or $x = -12$ or $x = 6$ or $x = -10$",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            },
            {
              "prompt": "Solve $|x^2 + 7x - 213| = 15$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-19, -18, 11, 12}",
              "lines": [
                {
                  "step": "Solve $|x^2 + 7x - 213| = 15$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $x^2 + 7x - 213 = 15$ or $x^2 + 7x - 213 = -15$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $x^2 + 7x - 213 \\ge 0$ it equals $15$, and if it is negative its negative equals $15$."
                },
                {
                  "step": "Either $x^2 + 7x - 228 = 0$ or $x^2 + 7x - 198 = 0$",
                  "reason": "Adding the same number to both sides: $-15$ is added to both sides of the first equation and $15$ to both sides of the second."
                },
                {
                  "step": "Either $(x - 12)(x + 19) = 0$ or $(x - 11)(x + 18) = 0$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: here $-12$ and $19$, then $-11$ and $18$, each pair with sum $7$."
                },
                {
                  "step": "Either $x = 12$ or $x = -19$ or $x = 11$ or $x = -18$",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            },
            {
              "prompt": "Solve $|x^2 + 11x - 331| = 19$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-25, -24, 13, 14}",
              "lines": [
                {
                  "step": "Solve $|x^2 + 11x - 331| = 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Either $x^2 + 11x - 331 = 19$ or $x^2 + 11x - 331 = -19$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: if $x^2 + 11x - 331 \\ge 0$ it equals $19$, and if it is negative its negative equals $19$."
                },
                {
                  "step": "Either $x^2 + 11x - 350 = 0$ or $x^2 + 11x - 312 = 0$",
                  "reason": "Adding the same number to both sides: $-19$ is added to both sides of the first equation and $19$ to both sides of the second."
                },
                {
                  "step": "Either $(x - 14)(x + 25) = 0$ or $(x - 13)(x + 24) = 0$",
                  "reason": "Factoring a quadratic: two numbers with sum $b$ and product $c$: here $-14$ and $25$, then $-13$ and $24$, each pair with sum $11$."
                },
                {
                  "step": "Either $x = 14$ or $x = -25$ or $x = 13$ or $x = -24$",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t172-k4",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = |x - 12| + 3$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = |x - 12| + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x \\ge 12$: $y = x - 9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 12 \\ge 0$, so $|x - 12| = x - 12$."
              },
              {
                "step": "For $x < 12$: $y = -x + 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 12 < 0$, so $|x - 12| = -(x - 12)$."
              },
              {
                "step": "The two pieces meet at the corner $(12, 3)$.",
                "reason": "Breakpoints: at $x = 12$ the inside is $0$, so $y = 3$ there."
              },
              {
                "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
              },
              {
                "step": "The graph crosses the $y$-axis at $(0, 15)$.",
                "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "The two half-lines from the corner make a V.",
                "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                "figure": {
                  "file": "absolute-value-equations-and-graphs-1.svg",
                  "alt": "A V with its corner at (12, 3), crossing the y-axis at (0, 15)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -|4x + 14| - 6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -20)$"
                ],
                "turning": [
                  "$(-\\dfrac{7}{2}, -6)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -|4x + 14| - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge -\\dfrac{7}{2}$: $y = -4x - 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $4x + 14 \\ge 0$, so $|4x + 14| = 4x + 14$."
                },
                {
                  "step": "For $x < -\\dfrac{7}{2}$: $y = 4x + 8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $4x + 14 < 0$, so $|4x + 14| = -(4x + 14)$."
                },
                {
                  "step": "The two pieces meet at the corner $(-\\dfrac{7}{2}, -6)$.",
                  "reason": "Breakpoints: at $x = -\\dfrac{7}{2}$ the inside is $0$, so $y = -6$ there."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies below the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, -20)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The two half-lines from the corner make an upside-down V.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-2.svg",
                    "alt": "An upside-down V with its corner at (−7/2, −6), crossing the y-axis at (0, −20)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 2|x - 8| + 4$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 20)$"
                ],
                "turning": [
                  "$(8, 4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 2|x - 8| + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 8$: $y = 2x - 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 8 \\ge 0$, so $|x - 8| = x - 8$."
                },
                {
                  "step": "For $x < 8$: $y = -2x + 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 8 < 0$, so $|x - 8| = -(x - 8)$."
                },
                {
                  "step": "The two pieces meet at the corner $(8, 4)$.",
                  "reason": "Breakpoints: at $x = 8$ the inside is $0$, so $y = 4$ there."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 20)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The two half-lines from the corner make a V.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-3.svg",
                    "alt": "A V with its corner at (8, 4), crossing the y-axis at (0, 20)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -2|x + 5| - 11$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -21)$"
                ],
                "turning": [
                  "$(-5, -11)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -2|x + 5| - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge -5$: $y = -2x - 21$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x + 5 \\ge 0$, so $|x + 5| = x + 5$."
                },
                {
                  "step": "For $x < -5$: $y = 2x - 1$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x + 5 < 0$, so $|x + 5| = -(x + 5)$."
                },
                {
                  "step": "The two pieces meet at the corner $(-5, -11)$.",
                  "reason": "Breakpoints: at $x = -5$ the inside is $0$, so $y = -11$ there."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies below the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, -21)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The two half-lines from the corner make an upside-down V.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-4.svg",
                    "alt": "An upside-down V with its corner at (−5, −11), crossing the y-axis at (0, −21)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = |2x - 17| + |x - 2|$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = |2x - 17| + |x - 2|$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The breakpoints are $x = 2$ and $x = \\dfrac{17}{2}$.",
                "reason": "Breakpoints: $x - 2 = 0$ at $x = 2$ and $2x - 17 = 0$ at $x = \\dfrac{17}{2}$."
              },
              {
                "step": "For $x < 2$: $y = -3x + 19$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here; like terms are collected."
              },
              {
                "step": "For $2 \\le x < \\dfrac{17}{2}$: $y = -x + 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: one inside is negative and the other is not; like terms are collected."
              },
              {
                "step": "For $x \\ge \\dfrac{17}{2}$: $y = 3x - 19$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here; like terms are collected."
              },
              {
                "step": "The corners are $(2, 13)$ and $(\\dfrac{17}{2}, \\dfrac{13}{2})$.",
                "reason": "Substituting a value: each breakpoint goes into the formula."
              },
              {
                "step": "The least value of $y$ is $\\dfrac{13}{2}$, at the corner $(\\dfrac{17}{2}, \\dfrac{13}{2})$.",
                "reason": "Greatest and least value: the graph falls to the first corner and rises after the second, so its lowest point is at a corner."
              },
              {
                "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
              },
              {
                "step": "The graph crosses the $y$-axis at $(0, 19)$.",
                "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "Two half-lines and the segment between the corners make the graph.",
                "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                "figure": {
                  "file": "absolute-value-equations-and-graphs-5.svg",
                  "alt": "A broken line with corners at (2, 13) and (17/2, 13/2), crossing the y-axis at (0, 19), above the x-axis."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = |x + 8| + |2x + 7|$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 15)$"
                ],
                "turning": [
                  "$(-8, 9)$",
                  "$(-\\dfrac{7}{2}, \\dfrac{9}{2})$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = |x + 8| + |2x + 7|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -8$ and $x = -\\dfrac{7}{2}$.",
                  "reason": "Breakpoints: $x + 8 = 0$ at $x = -8$ and $2x + 7 = 0$ at $x = -\\dfrac{7}{2}$."
                },
                {
                  "step": "For $x < -8$: $y = -3x - 15$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here; like terms are collected."
                },
                {
                  "step": "For $-8 \\le x < -\\dfrac{7}{2}$: $y = -x + 1$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: one inside is negative and the other is not; like terms are collected."
                },
                {
                  "step": "For $x \\ge -\\dfrac{7}{2}$: $y = 3x + 15$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here; like terms are collected."
                },
                {
                  "step": "The corners are $(-8, 9)$ and $(-\\dfrac{7}{2}, \\dfrac{9}{2})$.",
                  "reason": "Substituting a value: each breakpoint goes into the formula."
                },
                {
                  "step": "The least value of $y$ is $\\dfrac{9}{2}$, at the corner $(-\\dfrac{7}{2}, \\dfrac{9}{2})$.",
                  "reason": "Greatest and least value: the graph falls to the first corner and rises after the second, so its lowest point is at a corner."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 15)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Two half-lines and the segment between the corners make the graph.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-6.svg",
                    "alt": "A broken line with corners at (−8, 9) and (−7/2, 9/2), crossing the y-axis at (0, 15), above the x-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = |x + 11| + |x + 13|$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 24)$"
                ],
                "turning": [
                  "$(-13, 2)$",
                  "$(-11, 2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = |x + 11| + |x + 13|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = -13$ and $x = -11$.",
                  "reason": "Breakpoints: $x + 13 = 0$ at $x = -13$ and $x + 11 = 0$ at $x = -11$."
                },
                {
                  "step": "For $x < -13$: $y = -2x - 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here; like terms are collected."
                },
                {
                  "step": "For $-13 \\le x < -11$: $y = 2$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: one inside is negative and the other is not; like terms are collected."
                },
                {
                  "step": "For $x \\ge -11$: $y = 2x + 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here; like terms are collected."
                },
                {
                  "step": "The corners are $(-13, 2)$ and $(-11, 2)$.",
                  "reason": "Substituting a value: each breakpoint goes into the formula."
                },
                {
                  "step": "The least value of $y$ is $2$, along the level piece from $(-13, 2)$ to $(-11, 2)$.",
                  "reason": "Greatest and least value: the graph falls to the first corner and rises after the second, so its lowest point is at a corner."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 24)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Two half-lines and the segment between the corners make the graph.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-7.svg",
                    "alt": "A broken line with corners at (−13, 2) and (−11, 2), crossing the y-axis at (0, 24), above the x-axis."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = |x - 2| + |4x - 22|$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 24)$"
                ],
                "turning": [
                  "$(2, 14)$",
                  "$(\\dfrac{11}{2}, \\dfrac{7}{2})$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = |x - 2| + |4x - 22|$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The breakpoints are $x = 2$ and $x = \\dfrac{11}{2}$.",
                  "reason": "Breakpoints: $x - 2 = 0$ at $x = 2$ and $4x - 22 = 0$ at $x = \\dfrac{11}{2}$."
                },
                {
                  "step": "For $x < 2$: $y = -5x + 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here; like terms are collected."
                },
                {
                  "step": "For $2 \\le x < \\dfrac{11}{2}$: $y = -3x + 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: one inside is negative and the other is not; like terms are collected."
                },
                {
                  "step": "For $x \\ge \\dfrac{11}{2}$: $y = 5x - 24$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here; like terms are collected."
                },
                {
                  "step": "The corners are $(2, 14)$ and $(\\dfrac{11}{2}, \\dfrac{7}{2})$.",
                  "reason": "Substituting a value: each breakpoint goes into the formula."
                },
                {
                  "step": "The least value of $y$ is $\\dfrac{7}{2}$, at the corner $(\\dfrac{11}{2}, \\dfrac{7}{2})$.",
                  "reason": "Greatest and least value: the graph falls to the first corner and rises after the second, so its lowest point is at a corner."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies above the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, 24)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Two half-lines and the segment between the corners make the graph.",
                  "reason": "Graph of an equation: the graph is every point whose coordinates satisfy the equation, piece by piece.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-8.svg",
                    "alt": "A broken line with corners at (2, 14) and (11/2, 7/2), crossing the y-axis at (0, 24), above the x-axis."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $|x - 8| + |y + 4| = 3$.",
            "lines": [
              {
                "step": "Sketch the graph of $|x - 8| + |y + 4| = 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x \\ge 8$ and $y \\ge -4$: $x + y = 7$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
              },
              {
                "step": "For $x \\ge 8$ and $y < -4$: $x - y = 15$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $y + 4 < 0$, so $|y + 4| = -(y + 4)$."
              },
              {
                "step": "For $x < 8$ and $y \\ge -4$: $-x + y = -9$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 8 < 0$, so $|x - 8| = -(x - 8)$."
              },
              {
                "step": "For $x < 8$ and $y < -4$: $-x - y = -1$",
                "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
              },
              {
                "step": "The corners are $(11, -4)$, $(8, -1)$, $(5, -4)$ and $(8, -7)$.",
                "reason": "Substituting a value: at $y = -4$ the equation is $|x - 8| = 3$, and at $x = 8$ it is $|y + 4| = 3$."
              },
              {
                "step": "The graph does not meet the $x$-axis: every point of it lies below the axis.",
                "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
              },
              {
                "step": "The graph does not meet the $y$-axis: every point of it lies to the right of the axis.",
                "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
              },
              {
                "step": "The four segments joining the corners make a square standing on one corner.",
                "reason": "The graph of $ax + by = c$ is a line: each case is part of a line, cut off at the corners.",
                "figure": {
                  "file": "absolute-value-equations-and-graphs-9.svg",
                  "alt": "A square standing on one corner, with corners at (11, −4), (8, −1), (5, −4) and (8, −7)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $|x - 4| + |y + 6| = 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [],
                "turning": [
                  "$(6, -6)$",
                  "$(4, -4)$",
                  "$(2, -6)$",
                  "$(4, -8)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|x - 4| + |y + 6| = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 4$ and $y \\ge -6$: $x + y = 0$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
                },
                {
                  "step": "For $x \\ge 4$ and $y < -6$: $x - y = 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $y + 6 < 0$, so $|y + 6| = -(y + 6)$."
                },
                {
                  "step": "For $x < 4$ and $y \\ge -6$: $-x + y = -8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 4 < 0$, so $|x - 4| = -(x - 4)$."
                },
                {
                  "step": "For $x < 4$ and $y < -6$: $-x - y = 4$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
                },
                {
                  "step": "The corners are $(6, -6)$, $(4, -4)$, $(2, -6)$ and $(4, -8)$.",
                  "reason": "Substituting a value: at $y = -6$ the equation is $|x - 4| = 2$, and at $x = 4$ it is $|y + 6| = 2$."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies below the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph does not meet the $y$-axis: every point of it lies to the right of the axis.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The four segments joining the corners make a square standing on one corner.",
                  "reason": "The graph of $ax + by = c$ is a line: each case is part of a line, cut off at the corners.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-10.svg",
                    "alt": "A square standing on one corner, with corners at (6, −6), (4, −4), (2, −6) and (4, −8)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $|x - 4| + |y + 10| = 6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -12)$",
                  "$(0, -8)$"
                ],
                "turning": [
                  "$(10, -10)$",
                  "$(4, -4)$",
                  "$(-2, -10)$",
                  "$(4, -16)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|x - 4| + |y + 10| = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 4$ and $y \\ge -10$: $x + y = 0$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
                },
                {
                  "step": "For $x \\ge 4$ and $y < -10$: $x - y = 20$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $y + 10 < 0$, so $|y + 10| = -(y + 10)$."
                },
                {
                  "step": "For $x < 4$ and $y \\ge -10$: $-x + y = -8$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 4 < 0$, so $|x - 4| = -(x - 4)$."
                },
                {
                  "step": "For $x < 4$ and $y < -10$: $-x - y = 12$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
                },
                {
                  "step": "The corners are $(10, -10)$, $(4, -4)$, $(-2, -10)$ and $(4, -16)$.",
                  "reason": "Substituting a value: at $y = -10$ the equation is $|x - 4| = 6$, and at $x = 4$ it is $|y + 10| = 6$."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every point of it lies below the axis.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$, and here $y$ is never $0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, -12)$ and $(0, -8)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The four segments joining the corners make a square standing on one corner.",
                  "reason": "The graph of $ax + by = c$ is a line: each case is part of a line, cut off at the corners.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-11.svg",
                    "alt": "A square standing on one corner, with corners at (10, −10), (4, −4), (−2, −10) and (4, −16)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $|x - 4| + |y + 7| = 8$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(3, 0)$",
                  "$(5, 0)$",
                  "$(0, -11)$",
                  "$(0, -3)$"
                ],
                "turning": [
                  "$(12, -7)$",
                  "$(4, 1)$",
                  "$(-4, -7)$",
                  "$(4, -15)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $|x - 4| + |y + 7| = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\ge 4$ and $y \\ge -7$: $x + y = 5$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are not negative here."
                },
                {
                  "step": "For $x \\ge 4$ and $y < -7$: $x - y = 19$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $y + 7 < 0$, so $|y + 7| = -(y + 7)$."
                },
                {
                  "step": "For $x < 4$ and $y \\ge -7$: $-x + y = -3$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x - 4 < 0$, so $|x - 4| = -(x - 4)$."
                },
                {
                  "step": "For $x < 4$ and $y < -7$: $-x - y = 11$",
                  "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: both insides are negative here."
                },
                {
                  "step": "The corners are $(12, -7)$, $(4, 1)$, $(-4, -7)$ and $(4, -15)$.",
                  "reason": "Substituting a value: at $y = -7$ the equation is $|x - 4| = 8$, and at $x = 4$ it is $|y + 7| = 8$."
                },
                {
                  "step": "The graph crosses the $x$-axis at $(3, 0)$ and $(5, 0)$.",
                  "reason": "Definition of the $x$-intercept: a graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The graph crosses the $y$-axis at $(0, -11)$ and $(0, -3)$.",
                  "reason": "Definition of the $y$-intercept: a graph meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The four segments joining the corners make a square standing on one corner.",
                  "reason": "The graph of $ax + by = c$ is a line: each case is part of a line, cut off at the corners.",
                  "figure": {
                    "file": "absolute-value-equations-and-graphs-12.svg",
                    "alt": "A square standing on one corner, with corners at (12, −7), (4, 1), (−4, −7) and (4, −15)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t172-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $|-5x + 7| = x + 15$, and write that line right.",
            "given": [
              "$|-5x + 7| = x + 15$",
              "Either $-5x + 7 = x + 15$ or $-5x + 7 = -(x + 15)$",
              "$-6x = 22$",
              "$x = -\\dfrac{11}{3}$",
              "$-5x + 7 = -x - 15$",
              "$-4x = -22$",
              "$x = \\dfrac{11}{2}$",
              "At $x = -\\dfrac{11}{3}$ the right side is $\\dfrac{34}{3}$, and at $x = \\dfrac{11}{2}$ it is $\\dfrac{41}{2}$.",
              "Either $x = -\\dfrac{11}{3}$ or $x = \\dfrac{11}{2}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $|-5x + 7| = x + 15$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 moves $7$ to the right side without changing its sign.",
                "reason": "Adding the same number to both sides: $-7$ is added to both sides, so the right side is $15 - 7 = 8$."
              },
              {
                "step": "Line 3 written right is $-6x = 8$.",
                "reason": "The later lines follow from the wrong line, so they change with it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $|-4x + 14| = -2x + 13$, and write that line right.",
              "given": [
                "$|-4x + 14| = -2x + 13$",
                "Either $-4x + 14 = -2x + 13$ or $-4x + 14 = -(-2x + 13)$",
                "$-2x = -1$",
                "$x = \\dfrac{1}{2}$",
                "$-4x + 14 = 2x + 13$",
                "$-6x = -1$",
                "$x = \\dfrac{1}{6}$",
                "At $x = \\dfrac{1}{2}$ the right side is $12$, and at $x = \\dfrac{1}{6}$ it is $\\dfrac{38}{3}$.",
                "Either $x = \\dfrac{1}{2}$ or $x = \\dfrac{1}{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -4*x+14 = 2*x-13",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $|-4x + 14| = -2x + 13$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 takes the negative of $-2x + 13$ and changes the sign of $-2x$ alone.",
                  "reason": "Subtracting a bracket changes every sign in it: $-(-2x + 13) = 2x - 13$."
                },
                {
                  "step": "Line 5 written right is $-4x + 14 = 2x - 13$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $|-4x + 10| = -2x + 15$, and write that line right.",
              "given": [
                "$|-4x + 10| = -2x + 15$",
                "Either $-4x + 10 = -2x + 15$ or $-4x + 10 = -(-2x + 15)$",
                "$-2x = 5$",
                "$x = -\\dfrac{5}{2}$",
                "$-4x + 10 = 2x - 15$",
                "$-6x = -5$",
                "$x = \\dfrac{5}{6}$",
                "At $x = -\\dfrac{5}{2}$ the right side is $20$, and at $x = \\dfrac{5}{6}$ it is $\\dfrac{40}{3}$.",
                "Either $x = -\\dfrac{5}{2}$ or $x = \\dfrac{5}{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: -6*x = -25",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $|-4x + 10| = -2x + 15$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 moves $10$ to the right side without changing its sign.",
                  "reason": "Adding the same number to both sides: $-10$ is added to both sides, so the right side is $-15 - 10 = -25$."
                },
                {
                  "step": "Line 6 written right is $-6x = -25$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $|-5x - 10| = x + 7$, and write that line right.",
              "given": [
                "$|-5x - 10| = x + 7$",
                "Either $-5x - 10 = x + 7$ or $-5x - 10 = -(x + 7)$",
                "$-6x = 17$",
                "$x = -\\dfrac{17}{6}$",
                "$-5x - 10 = -x - 7$",
                "$-4x = 3$",
                "$x = \\dfrac{3}{4}$",
                "At $x = -\\dfrac{17}{6}$ the right side is $\\dfrac{25}{6}$, and at $x = \\dfrac{3}{4}$ it is $\\dfrac{31}{4}$.",
                "Either $x = -\\dfrac{17}{6}$ or $x = \\dfrac{3}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: x = -3/4",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $|-5x - 10| = x + 7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 divides by $-4$ and loses the minus sign.",
                  "reason": "Dividing both sides by a nonzero number: dividing $3$ by the negative number $-4$ gives $-\\dfrac{3}{4}$."
                },
                {
                  "step": "Line 7 written right is $x = -\\dfrac{3}{4}$.",
                  "reason": "The later lines follow from the wrong line, so they change with it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t172-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for the upside-down V in the figure, with corner $A(5, -6)$ and points $B(3, -14)$ and $C(7, -14)$, with $y$ alone on the left.",
            "figure": {
              "file": "absolute-value-equations-and-graphs-27.svg",
              "alt": "An upside-down V with its corner at A(5, −6), through B(3, −14) and C(7, −14)."
            },
            "lines": [
              {
                "step": "Write an equation for the upside-down V in the figure, with corner $A(5, -6)$ and points $B(3, -14)$ and $C(7, -14)$, with $y$ alone on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Here $y = a|x - 5| - 6$ for a number $a$",
                "reason": "Shifting, stretching and reflecting graphs: the corner of $y = a|x|$ at $(0, 0)$ moves to $(5, -6)$."
              },
              {
                "step": "$-14 = a \\cdot |7 - 5| - 6$",
                "reason": "Substituting a value: the point $C$ lies on the graph."
              },
              {
                "step": "$a = -4$",
                "reason": "Adding the same number to both sides and dividing both sides by a nonzero number: $|7 - 5| = 2$."
              },
              {
                "step": "$y = -4|x - 5| - 6$",
                "reason": "Substituting a value: $a = -4$ goes into the equation of line 2."
              },
              {
                "step": "$-4 \\cdot |3 - 5| - 6 = -14$",
                "reason": "Checking a solution: the point $B$ on the other branch fits too."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for the upside-down V in the figure, with corner $A(-2, -7)$ and points $B(-3, -11)$ and $C(0, -15)$, with $y$ alone on the left.",
              "figure": {
                "file": "absolute-value-equations-and-graphs-28.svg",
                "alt": "An upside-down V with its corner at A(−2, −7), through B(−3, −11) and C(0, −15)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -4*|x+2|-7",
              "lines": [
                {
                  "step": "Write an equation for the upside-down V in the figure, with corner $A(-2, -7)$ and points $B(-3, -11)$ and $C(0, -15)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $y = a|x + 2| - 7$ for a number $a$",
                  "reason": "Shifting, stretching and reflecting graphs: the corner of $y = a|x|$ at $(0, 0)$ moves to $(-2, -7)$."
                },
                {
                  "step": "$-15 = a \\cdot |0 + 2| - 7$",
                  "reason": "Substituting a value: the point $C$ lies on the graph."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Adding the same number to both sides and dividing both sides by a nonzero number: $|0 + 2| = 2$."
                },
                {
                  "step": "$y = -4|x + 2| - 7$",
                  "reason": "Substituting a value: $a = -4$ goes into the equation of line 2."
                },
                {
                  "step": "$-4 \\cdot |-3 + 2| - 7 = -11$",
                  "reason": "Checking a solution: the point $B$ on the other branch fits too."
                }
              ]
            },
            {
              "prompt": "Write an equation for the V in the figure, with corner $A(2, -11)$ and points $B(0, -7)$ and $C(4, -7)$, with $y$ alone on the left.",
              "figure": {
                "file": "absolute-value-equations-and-graphs-29.svg",
                "alt": "A V with its corner at A(2, −11), through B(0, −7) and C(4, −7)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*|x-2|-11",
              "lines": [
                {
                  "step": "Write an equation for the V in the figure, with corner $A(2, -11)$ and points $B(0, -7)$ and $C(4, -7)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $y = a|x - 2| - 11$ for a number $a$",
                  "reason": "Shifting, stretching and reflecting graphs: the corner of $y = a|x|$ at $(0, 0)$ moves to $(2, -11)$."
                },
                {
                  "step": "$-7 = a \\cdot |4 - 2| - 11$",
                  "reason": "Substituting a value: the point $C$ lies on the graph."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Adding the same number to both sides and dividing both sides by a nonzero number: $|4 - 2| = 2$."
                },
                {
                  "step": "$y = 2|x - 2| - 11$",
                  "reason": "Substituting a value: $a = 2$ goes into the equation of line 2."
                },
                {
                  "step": "$2 \\cdot |0 - 2| - 11 = -7$",
                  "reason": "Checking a solution: the point $B$ on the other branch fits too."
                }
              ]
            },
            {
              "prompt": "Write an equation for the upside-down V in the figure, with corner $A(-6, -10)$ and points $B(-7, -14)$ and $C(-3, -22)$, with $y$ alone on the left.",
              "figure": {
                "file": "absolute-value-equations-and-graphs-30.svg",
                "alt": "An upside-down V with its corner at A(−6, −10), through B(−7, −14) and C(−3, −22)."
              },
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -4*|x+6|-10",
              "lines": [
                {
                  "step": "Write an equation for the upside-down V in the figure, with corner $A(-6, -10)$ and points $B(-7, -14)$ and $C(-3, -22)$, with $y$ alone on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Here $y = a|x + 6| - 10$ for a number $a$",
                  "reason": "Shifting, stretching and reflecting graphs: the corner of $y = a|x|$ at $(0, 0)$ moves to $(-6, -10)$."
                },
                {
                  "step": "$-22 = a \\cdot |-3 + 6| - 10$",
                  "reason": "Substituting a value: the point $C$ lies on the graph."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Adding the same number to both sides and dividing both sides by a nonzero number: $|-3 + 6| = 3$."
                },
                {
                  "step": "$y = -4|x + 6| - 10$",
                  "reason": "Substituting a value: $a = -4$ goes into the equation of line 2."
                },
                {
                  "step": "$-4 \\cdot |-7 + 6| - 10 = -14$",
                  "reason": "Checking a solution: the point $B$ on the other branch fits too."
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
      "id": "t172-p1",
      "method": "proof by cases",
      "statement": "For every real number $x$, $|x|^2 = x^2$.",
      "idea": "The rule for $|x|$ gives two cases, and in each one the bars come off; squaring then removes the sign.",
      "lines": [
        {
          "line": "Suppose first that $x \\ge 0$.",
          "reason": "Proof by cases: every real number $x$ has $x \\ge 0$ or $x < 0$."
        },
        {
          "line": "Then $|x| = x$.",
          "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
        },
        {
          "line": "So $|x|^2 = x^2$.",
          "reason": "Substituting a value: $|x|$ is replaced by $x$."
        },
        {
          "line": "Suppose now that $x < 0$.",
          "reason": "Proof by cases: this is the second case."
        },
        {
          "line": "Then $|x| = -x$.",
          "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
        },
        {
          "line": "So $|x|^2 = (-x)^2$.",
          "reason": "Substituting a value: $|x|$ is replaced by $-x$."
        },
        {
          "line": "Also $(-x)^2 = x^2$.",
          "reason": "Signs of products, from arithmetic: $(-x)(-x) = x \\cdot x$."
        },
        {
          "line": "So $|x|^2 = x^2$ in this case too.",
          "reason": "Transitive property: lines 6 and 7."
        },
        {
          "line": "Therefore $|x|^2 = x^2$ for every real number $x$.",
          "reason": "Proof by cases: the two cases cover every real number."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t172-s1",
      "method": "proof by cases",
      "statement": "Prove that, for a real number $x$, $|x| > 0$ exactly when $x$ is not $0$. Facts it may use: $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$, $|x| \\ge 0$, multiplying by a negative number reverses the sign, multiplying both sides by the same number, substituting a value, the transitive property, the absolute value from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose first that $x > 0$.",
            "reason": "Proof by cases: every real number $x$ has $x > 0$, $x < 0$ or $x = 0$."
          },
          {
            "line": "Then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $|x| > 0$ when $x > 0$.",
            "reason": "Transitive property: lines 1 and 2."
          },
          {
            "line": "Suppose next that $x < 0$.",
            "reason": "Proof by cases: this is the second case."
          },
          {
            "line": "Then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "And $-x > 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 4 are multiplied by $-1$."
          },
          {
            "line": "So $|x| > 0$ when $x < 0$.",
            "reason": "Transitive property: lines 5 and 6."
          },
          {
            "line": "Suppose last that $x = 0$.",
            "reason": "Proof by cases: this is the third case."
          },
          {
            "line": "Then $|x| = |0|$.",
            "reason": "Substituting a value: $x$ is replaced by $0$."
          },
          {
            "line": "And $|0| = 0$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $0 \\ge 0$."
          },
          {
            "line": "So $|x| = 0$ when $x = 0$.",
            "reason": "Transitive property: lines 9 and 10."
          },
          {
            "line": "So $|x| > 0$ is false when $x = 0$.",
            "reason": "Substituting a value: by line 11, $|x| > 0$ reads $0 > 0$, which is false."
          },
          {
            "line": "So $|x| > 0$ exactly when $x$ is not $0$.",
            "reason": "Proof by cases: a number other than $0$ has $x > 0$ or $x < 0$, lines 3 and 7, and line 12 covers $x = 0$."
          }
        ]
      }
    },
    {
      "id": "t172-s2",
      "method": "proof by cases",
      "statement": "Prove that, for real numbers $x$ and $y$, $|x| = |y|$ exactly when $x = y$ or $x = -y$. Facts it may use: $|x|^2 = x^2$, if $x^2 = a^2$ then $x = a$ or $x = -a$, multiplying two equations, substituting a value, the transitive property, the absolute value from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $|x| = |y|$.",
            "reason": "The first half of the statement starts from $|x| = |y|$."
          },
          {
            "line": "Then $|x|^2 = |y|^2$.",
            "reason": "Multiplying two equations: line 1 is multiplied by itself."
          },
          {
            "line": "So $x^2 = y^2$.",
            "reason": "The rule $|x|^2 = x^2$: on each side."
          },
          {
            "line": "So $x = y$ or $x = -y$.",
            "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: here with $a = y$."
          },
          {
            "line": "Suppose now that $x = y$.",
            "reason": "The second half of the statement starts from $x = y$ or $x = -y$."
          },
          {
            "line": "Then $|x| = |y|$.",
            "reason": "Substituting a value: $x$ is replaced by $y$."
          },
          {
            "line": "Suppose instead that $x = -y$.",
            "reason": "Proof by cases: this is the other part of the second half."
          },
          {
            "line": "Then $|x| = |-y|$.",
            "reason": "Substituting a value: $x$ is replaced by $-y$."
          },
          {
            "line": "And $|-y| = |y|$.",
            "reason": "Absolute value, from arithmetic: $-y$ and $y$ lie the same distance from $0$."
          },
          {
            "line": "So $|x| = |y|$ when $x = -y$.",
            "reason": "Transitive property: lines 8 and 9."
          },
          {
            "line": "So $|x| = |y|$ exactly when $x = y$ or $x = -y$.",
            "reason": "Proof by cases: both halves are proved."
          }
        ]
      }
    },
    {
      "id": "t172-s3",
      "method": "proof by cases",
      "statement": "Prove that, for a real number $x$ and a number $b$, $|x| \\le b$ exactly when $-b \\le x \\le b$. Facts it may use: $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$, $|x| \\ge 0$, multiplying by a negative number reverses the sign, multiplying both sides by the same number, substituting a value, the transitive property, the absolute value from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $|x| \\le b$.",
            "reason": "The first half of the statement starts from $|x| \\le b$."
          },
          {
            "line": "Then $0 \\le b$.",
            "reason": "The rule $|x| \\ge 0$, and the transitive property: $0 \\le |x| \\le b$."
          },
          {
            "line": "So $-b \\le 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 2 are multiplied by $-1$."
          },
          {
            "line": "If $x \\ge 0$, then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $x \\le b$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 1 and 4."
          },
          {
            "line": "And $-b \\le x$ when $x \\ge 0$.",
            "reason": "Transitive property: line 3 and $0 \\le x$."
          },
          {
            "line": "If $x < 0$, then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $-x \\le b$ when $x < 0$.",
            "reason": "Transitive property: lines 1 and 7."
          },
          {
            "line": "Then $-b \\le x$ when $x < 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 8 are multiplied by $-1$."
          },
          {
            "line": "And $x \\le b$ when $x < 0$.",
            "reason": "Transitive property: $x < 0$ and line 2."
          },
          {
            "line": "So $-b \\le x \\le b$.",
            "reason": "Proof by cases: lines 5 and 6 cover $x \\ge 0$, and lines 9 and 10 cover $x < 0$."
          },
          {
            "line": "Suppose now that $-b \\le x \\le b$.",
            "reason": "The second half of the statement starts here."
          },
          {
            "line": "If $x \\ge 0$, then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $|x| \\le b$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 12 and 13."
          },
          {
            "line": "If $x < 0$, then $-x \\le b$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of $-b \\le x$ in line 12 are multiplied by $-1$."
          },
          {
            "line": "And then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $|x| \\le b$ when $x < 0$.",
            "reason": "Transitive property: lines 15 and 16."
          },
          {
            "line": "So $|x| \\le b$ exactly when $-b \\le x \\le b$.",
            "reason": "Proof by cases: both halves are proved, each for $x \\ge 0$ and for $x < 0$, so $x$ lies at most $b$ from $0$ exactly in that interval."
          }
        ]
      }
    },
    {
      "id": "t172-s4",
      "method": "proof by cases",
      "statement": "Prove that, for a real number $x$ and a number $b$, $|x| < b$ exactly when $-b < x < b$. Facts it may use: $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$, $|x| \\ge 0$, multiplying by a negative number reverses the sign, multiplying both sides by the same number, substituting a value, the transitive property, the absolute value from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $|x| < b$.",
            "reason": "The first half of the statement starts from $|x| < b$."
          },
          {
            "line": "Then $0 < b$.",
            "reason": "The rule $|x| \\ge 0$, and the transitive property: $0 \\le |x| < b$."
          },
          {
            "line": "So $-b < 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 2 are multiplied by $-1$."
          },
          {
            "line": "If $x \\ge 0$, then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $x < b$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 1 and 4."
          },
          {
            "line": "And $-b < x$ when $x \\ge 0$.",
            "reason": "Transitive property: line 3 and $0 \\le x$."
          },
          {
            "line": "If $x < 0$, then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $-x < b$ when $x < 0$.",
            "reason": "Transitive property: lines 1 and 7."
          },
          {
            "line": "Then $-b < x$ when $x < 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 8 are multiplied by $-1$."
          },
          {
            "line": "And $x < b$ when $x < 0$.",
            "reason": "Transitive property: $x < 0$ and line 2."
          },
          {
            "line": "So $-b < x < b$.",
            "reason": "Proof by cases: lines 5 and 6 cover $x \\ge 0$, and lines 9 and 10 cover $x < 0$."
          },
          {
            "line": "Suppose now that $-b < x < b$.",
            "reason": "The second half of the statement starts here."
          },
          {
            "line": "If $x \\ge 0$, then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $|x| < b$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 12 and 13."
          },
          {
            "line": "If $x < 0$, then $-x < b$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of $-b < x$ in line 12 are multiplied by $-1$."
          },
          {
            "line": "And then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $|x| < b$ when $x < 0$.",
            "reason": "Transitive property: lines 15 and 16."
          },
          {
            "line": "So $|x| < b$ exactly when $-b < x < b$.",
            "reason": "Proof by cases: both halves are proved, each for $x \\ge 0$ and for $x < 0$, so $x$ lies less than $b$ from $0$ exactly in that interval."
          }
        ]
      }
    },
    {
      "id": "t172-s5",
      "method": "proof by cases",
      "statement": "Prove that, for a real number $x$ and a number $b$, $b \\le |x|$ exactly when $x \\le -b$ or $x \\ge b$. Facts it may use: $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$, $|x| \\ge 0$, multiplying by a negative number reverses the sign, multiplying both sides by the same number, substituting a value, the transitive property, the absolute value from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $b \\le |x|$.",
            "reason": "The first half of the statement starts from $b \\le |x|$."
          },
          {
            "line": "If $x \\ge 0$, then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $b \\le x$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 1 and 2."
          },
          {
            "line": "If $x < 0$, then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $b \\le -x$ when $x < 0$.",
            "reason": "Transitive property: lines 1 and 4."
          },
          {
            "line": "Then $x \\le -b$ when $x < 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 5 are multiplied by $-1$."
          },
          {
            "line": "So $x \\le -b$ or $x \\ge b$.",
            "reason": "Proof by cases: line 3 covers $x \\ge 0$ and line 6 covers $x < 0$."
          },
          {
            "line": "Suppose now that $x \\ge b$.",
            "reason": "The second half of the statement starts from $x \\le -b$ or $x \\ge b$; this is its first part."
          },
          {
            "line": "If $x \\ge 0$, then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $b \\le |x|$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 8 and 9."
          },
          {
            "line": "If $x < 0$, then $-x > 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of $x < 0$ are multiplied by $-1$."
          },
          {
            "line": "And then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $x < |x|$ when $x < 0$.",
            "reason": "Transitive property: $x < 0$, line 11 and line 12."
          },
          {
            "line": "So $b \\le |x|$ when $x < 0$.",
            "reason": "Transitive property: lines 8 and 13."
          },
          {
            "line": "Suppose instead that $x \\le -b$.",
            "reason": "Proof by cases: this is the other part of the second half."
          },
          {
            "line": "Then $b \\le -x$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of line 15 are multiplied by $-1$."
          },
          {
            "line": "If $x < 0$, then $|x| = -x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x < 0$."
          },
          {
            "line": "So $b \\le |x|$ when $x < 0$.",
            "reason": "Transitive property: lines 16 and 17."
          },
          {
            "line": "If $x \\ge 0$, then $-x \\le 0$.",
            "reason": "Multiplying by a negative number reverses the sign: both sides of $x \\ge 0$ are multiplied by $-1$."
          },
          {
            "line": "And then $|x| = x$.",
            "reason": "The rule $|x| = x$ for $x \\ge 0$ and $-x$ for $x < 0$: here $x \\ge 0$."
          },
          {
            "line": "So $-x \\le |x|$ when $x \\ge 0$.",
            "reason": "Transitive property: line 19, $0 \\le x$ and line 20."
          },
          {
            "line": "So $b \\le |x|$ when $x \\ge 0$.",
            "reason": "Transitive property: lines 16 and 21."
          },
          {
            "line": "So $b \\le |x|$ exactly when $x \\le -b$ or $x \\ge b$.",
            "reason": "Proof by cases: both halves are proved, each for $x \\ge 0$ and for $x < 0$."
          }
        ]
      }
    }
  ]
}
