export default {
  "number": 171,
  "title": "Square-root and cube-root functions",
  "section": 10,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "558-560, 584-588"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the range of $f(x) = 6\\left(\\sqrt{5x + 8} - 6\\right)$, as values of $y = f(x)$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "y >= -36",
    "solution": [
      "Find the range of $f(x) = 6\\left(\\sqrt{5x + 8} - 6\\right)$, as values of $y = f(x)$.",
      "$5x + 8 \\ge 0$",
      "$5x \\ge -8$",
      "$x \\ge -\\dfrac{8}{5}$",
      "For $x \\ge -\\dfrac{8}{5}$, $\\sqrt{5x + 8}$ takes every value at least $0$ and no other.",
      "$\\sqrt{5x + 8} - 6 \\ge -6$",
      "$6\\left(\\sqrt{5x + 8} - 6\\right) \\ge -36$",
      "The range is $y \\ge -36$."
    ]
  },
  "ideas": [
    {
      "name": "The square-root function",
      "concrete": "The function $f(x) = \\sqrt{x}$ gives $\\sqrt{49} = 7$ at $x = 49$ and $\\sqrt{0} = 0$ at $x = 0$. It has no value at $x = -49$, because no real number squared is negative. The output $5$ comes from the input $25$, and each output at least $0$ comes from its square.",
      "general": "The **square-root function** $f(x) = \\sqrt{x}$ has domain $x \\ge 0$ and range $y \\ge 0$: each $x \\ge 0$ gives its one root that is at least $0$, and each $y \\ge 0$ is the output at $x = y^2$. Its graph starts at $(0, 0)$ and rises to the right. The cube-root function $g(x) = \\sqrt[3]{x}$ has a value at every real $x$, and its domain and range are all real numbers."
    },
    {
      "name": "Square root against cube root",
      "concrete": "At $x = 64$, $\\sqrt{64} = 8$ and $\\sqrt[3]{64} = 4$, so the square root is the larger. At $x = \\dfrac{1}{64}$, $\\sqrt{\\dfrac{1}{64}} = \\dfrac{1}{8}$ and $\\sqrt[3]{\\dfrac{1}{64}} = \\dfrac{1}{4}$, so the cube root is the larger.",
      "general": "For $x > 1$, $\\sqrt{x} > \\sqrt[3]{x}$. For $0 < x < 1$ the order reverses: $\\sqrt{x} < \\sqrt[3]{x}$. At $x = 0$ and at $x = 1$ the two roots are equal."
    }
  ],
  "kinds": [
    {
      "id": "t171-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the range of $f(x) = 4\\left(\\sqrt{4x - 15} - 4\\right)$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 4\\left(\\sqrt{4x - 15} - 4\\right)$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x - 15 \\ge 0$",
                "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
              },
              {
                "step": "$4x \\ge 15$",
                "reason": "Adding the same number, from arithmetic: $15$ is added to both sides."
              },
              {
                "step": "$x \\ge \\dfrac{15}{4}$",
                "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{4}$."
              },
              {
                "step": "For $x \\ge \\dfrac{15}{4}$, $\\sqrt{4x - 15}$ takes every value at least $0$ and no other.",
                "reason": "The square-root function: its range is every number at least $0$, and $4x - 15$ takes every number at least $0$ once $x \\ge \\dfrac{15}{4}$."
              },
              {
                "step": "$\\sqrt{4x - 15} - 4 \\ge -4$",
                "reason": "Adding the same number, from arithmetic: $-4$ is added to both sides of $\\sqrt{4x - 15} \\ge 0$."
              },
              {
                "step": "$4\\left(\\sqrt{4x - 15} - 4\\right) \\ge -16$",
                "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $4$."
              },
              {
                "step": "The range is $y \\ge -16$.",
                "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 3\\left(\\sqrt{3x - 4} - 5\\right)$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= -15",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 3\\left(\\sqrt{3x - 4} - 5\\right)$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x - 4 \\ge 0$",
                  "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
                },
                {
                  "step": "$3x \\ge 4$",
                  "reason": "Adding the same number, from arithmetic: $4$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{4}{3}$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{4}{3}$, $\\sqrt{3x - 4}$ takes every value at least $0$ and no other.",
                  "reason": "The square-root function: its range is every number at least $0$, and $3x - 4$ takes every number at least $0$ once $x \\ge \\dfrac{4}{3}$."
                },
                {
                  "step": "$\\sqrt{3x - 4} - 5 \\ge -5$",
                  "reason": "Adding the same number, from arithmetic: $-5$ is added to both sides of $\\sqrt{3x - 4} \\ge 0$."
                },
                {
                  "step": "$3\\left(\\sqrt{3x - 4} - 5\\right) \\ge -15$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $3$."
                },
                {
                  "step": "The range is $y \\ge -15$.",
                  "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 6\\left(\\sqrt{6x - 5} - 3\\right)$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= -18",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 6\\left(\\sqrt{6x - 5} - 3\\right)$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x - 5 \\ge 0$",
                  "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
                },
                {
                  "step": "$6x \\ge 5$",
                  "reason": "Adding the same number, from arithmetic: $5$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{5}{6}$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{6}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{5}{6}$, $\\sqrt{6x - 5}$ takes every value at least $0$ and no other.",
                  "reason": "The square-root function: its range is every number at least $0$, and $6x - 5$ takes every number at least $0$ once $x \\ge \\dfrac{5}{6}$."
                },
                {
                  "step": "$\\sqrt{6x - 5} - 3 \\ge -3$",
                  "reason": "Adding the same number, from arithmetic: $-3$ is added to both sides of $\\sqrt{6x - 5} \\ge 0$."
                },
                {
                  "step": "$6\\left(\\sqrt{6x - 5} - 3\\right) \\ge -18$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $6$."
                },
                {
                  "step": "The range is $y \\ge -18$.",
                  "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 2\\left(\\sqrt{3x - 20} + 4\\right)$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y >= 8",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 2\\left(\\sqrt{3x - 20} + 4\\right)$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x - 20 \\ge 0$",
                  "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
                },
                {
                  "step": "$3x \\ge 20$",
                  "reason": "Adding the same number, from arithmetic: $20$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{20}{3}$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{20}{3}$, $\\sqrt{3x - 20}$ takes every value at least $0$ and no other.",
                  "reason": "The square-root function: its range is every number at least $0$, and $3x - 20$ takes every number at least $0$ once $x \\ge \\dfrac{20}{3}$."
                },
                {
                  "step": "$\\sqrt{3x - 20} + 4 \\ge 4$",
                  "reason": "Adding the same number, from arithmetic: $4$ is added to both sides of $\\sqrt{3x - 20} \\ge 0$."
                },
                {
                  "step": "$2\\left(\\sqrt{3x - 20} + 4\\right) \\ge 8$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $2$."
                },
                {
                  "step": "The range is $y \\ge 8$.",
                  "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = -2\\left(\\sqrt{6x - 7} + 3\\right)$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = -2\\left(\\sqrt{6x - 7} + 3\\right)$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x - 7 \\ge 0$",
                "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
              },
              {
                "step": "$6x \\ge 7$",
                "reason": "Adding the same number, from arithmetic: $7$ is added to both sides."
              },
              {
                "step": "$x \\ge \\dfrac{7}{6}$",
                "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{6}$."
              },
              {
                "step": "For $x \\ge \\dfrac{7}{6}$, $\\sqrt{6x - 7}$ takes every value at least $0$ and no other.",
                "reason": "The square-root function: its range is every number at least $0$, and $6x - 7$ takes every number at least $0$ once $x \\ge \\dfrac{7}{6}$."
              },
              {
                "step": "$\\sqrt{6x - 7} + 3 \\ge 3$",
                "reason": "Adding the same number, from arithmetic: $3$ is added to both sides of $\\sqrt{6x - 7} \\ge 0$."
              },
              {
                "step": "$-2\\left(\\sqrt{6x - 7} + 3\\right) \\le -6$",
                "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-2$."
              },
              {
                "step": "The range is $y \\le -6$.",
                "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = -2\\left(\\sqrt{6x + 13} + 7\\right)$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y <= -14",
              "lines": [
                {
                  "step": "Find the range of $f(x) = -2\\left(\\sqrt{6x + 13} + 7\\right)$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x + 13 \\ge 0$",
                  "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
                },
                {
                  "step": "$6x \\ge -13$",
                  "reason": "Adding the same number, from arithmetic: $-13$ is added to both sides."
                },
                {
                  "step": "$x \\ge -\\dfrac{13}{6}$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{6}$."
                },
                {
                  "step": "For $x \\ge -\\dfrac{13}{6}$, $\\sqrt{6x + 13}$ takes every value at least $0$ and no other.",
                  "reason": "The square-root function: its range is every number at least $0$, and $6x + 13$ takes every number at least $0$ once $x \\ge -\\dfrac{13}{6}$."
                },
                {
                  "step": "$\\sqrt{6x + 13} + 7 \\ge 7$",
                  "reason": "Adding the same number, from arithmetic: $7$ is added to both sides of $\\sqrt{6x + 13} \\ge 0$."
                },
                {
                  "step": "$-2\\left(\\sqrt{6x + 13} + 7\\right) \\le -14$",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-2$."
                },
                {
                  "step": "The range is $y \\le -14$.",
                  "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = -6\\left(\\sqrt{7x - 1} + 8\\right)$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y <= -48",
              "lines": [
                {
                  "step": "Find the range of $f(x) = -6\\left(\\sqrt{7x - 1} + 8\\right)$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x - 1 \\ge 0$",
                  "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
                },
                {
                  "step": "$7x \\ge 1$",
                  "reason": "Adding the same number, from arithmetic: $1$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{1}{7}$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{7}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{1}{7}$, $\\sqrt{7x - 1}$ takes every value at least $0$ and no other.",
                  "reason": "The square-root function: its range is every number at least $0$, and $7x - 1$ takes every number at least $0$ once $x \\ge \\dfrac{1}{7}$."
                },
                {
                  "step": "$\\sqrt{7x - 1} + 8 \\ge 8$",
                  "reason": "Adding the same number, from arithmetic: $8$ is added to both sides of $\\sqrt{7x - 1} \\ge 0$."
                },
                {
                  "step": "$-6\\left(\\sqrt{7x - 1} + 8\\right) \\le -48$",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-6$."
                },
                {
                  "step": "The range is $y \\le -48$.",
                  "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = -3\\left(\\sqrt{6x - 11} + 9\\right)$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "y <= -27",
              "lines": [
                {
                  "step": "Find the range of $f(x) = -3\\left(\\sqrt{6x - 11} + 9\\right)$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x - 11 \\ge 0$",
                  "reason": "Even root of a negative number is not real: $f(x)$ has a value only where the number under the root is at least $0$."
                },
                {
                  "step": "$6x \\ge 11$",
                  "reason": "Adding the same number, from arithmetic: $11$ is added to both sides."
                },
                {
                  "step": "$x \\ge \\dfrac{11}{6}$",
                  "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $\\dfrac{1}{6}$."
                },
                {
                  "step": "For $x \\ge \\dfrac{11}{6}$, $\\sqrt{6x - 11}$ takes every value at least $0$ and no other.",
                  "reason": "The square-root function: its range is every number at least $0$, and $6x - 11$ takes every number at least $0$ once $x \\ge \\dfrac{11}{6}$."
                },
                {
                  "step": "$\\sqrt{6x - 11} + 9 \\ge 9$",
                  "reason": "Adding the same number, from arithmetic: $9$ is added to both sides of $\\sqrt{6x - 11} \\ge 0$."
                },
                {
                  "step": "$-3\\left(\\sqrt{6x - 11} + 9\\right) \\le -27$",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-3$."
                },
                {
                  "step": "The range is $y \\le -27$.",
                  "reason": "Range: the range is the set of outputs, and by line 5 each value from line 7 is reached."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the range of $f(x) = 6\\sqrt[3]{4x - 24} + 10$ with the restricted domain $8 \\le x \\le 22$, as values of $y = f(x)$.",
            "lines": [
              {
                "step": "Find the range of $f(x) = 6\\sqrt[3]{4x - 24} + 10$ with the restricted domain $8 \\le x \\le 22$, as values of $y = f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$32 \\le 4x \\le 88$",
                "reason": "Multiplying by a positive number, from arithmetic: each part of $8 \\le x \\le 22$ is multiplied by $4$."
              },
              {
                "step": "$8 \\le 4x - 24 \\le 64$",
                "reason": "Adding the same number, from arithmetic: $-24$ is added to each part."
              },
              {
                "step": "$2 \\le \\sqrt[3]{4x - 24} \\le 4$",
                "reason": "Powers and roots of positive numbers keep the order: $8$ and $64$ have cube roots $2$ and $4$."
              },
              {
                "step": "$12 \\le 6\\sqrt[3]{4x - 24} \\le 24$",
                "reason": "Multiplying by a positive number, from arithmetic: each part is multiplied by $6$."
              },
              {
                "step": "$22 \\le 6\\sqrt[3]{4x - 24} + 10 \\le 34$",
                "reason": "Adding the same number, from arithmetic: $10$ is added to each part."
              },
              {
                "step": "The range is $22 \\le y \\le 34$.",
                "reason": "Range: as $x$ runs from $8$ to $22$, $4x - 24$ takes every number from $8$ to $64$, so by line 4 each value from line 6 is reached."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the range of $f(x) = 2\\sqrt[3]{7x + 43} - 14$ with the restricted domain $-6 \\le x \\le 3$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-12 <= y <= -6",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 2\\sqrt[3]{7x + 43} - 14$ with the restricted domain $-6 \\le x \\le 3$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-42 \\le 7x \\le 21$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part of $-6 \\le x \\le 3$ is multiplied by $7$."
                },
                {
                  "step": "$1 \\le 7x + 43 \\le 64$",
                  "reason": "Adding the same number, from arithmetic: $43$ is added to each part."
                },
                {
                  "step": "$1 \\le \\sqrt[3]{7x + 43} \\le 4$",
                  "reason": "Powers and roots of positive numbers keep the order: $1$ and $64$ have cube roots $1$ and $4$."
                },
                {
                  "step": "$2 \\le 2\\sqrt[3]{7x + 43} \\le 8$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part is multiplied by $2$."
                },
                {
                  "step": "$-12 \\le 2\\sqrt[3]{7x + 43} - 14 \\le -6$",
                  "reason": "Adding the same number, from arithmetic: $-14$ is added to each part."
                },
                {
                  "step": "The range is $-12 \\le y \\le -6$.",
                  "reason": "Range: as $x$ runs from $-6$ to $3$, $7x + 43$ takes every number from $1$ to $64$, so by line 4 each value from line 6 is reached."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 5\\sqrt[3]{7x - 6} + 2$ with the restricted domain $1 \\le x \\le 2$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "7 <= y <= 12",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 5\\sqrt[3]{7x - 6} + 2$ with the restricted domain $1 \\le x \\le 2$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7 \\le 7x \\le 14$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part of $1 \\le x \\le 2$ is multiplied by $7$."
                },
                {
                  "step": "$1 \\le 7x - 6 \\le 8$",
                  "reason": "Adding the same number, from arithmetic: $-6$ is added to each part."
                },
                {
                  "step": "$1 \\le \\sqrt[3]{7x - 6} \\le 2$",
                  "reason": "Powers and roots of positive numbers keep the order: $1$ and $8$ have cube roots $1$ and $2$."
                },
                {
                  "step": "$5 \\le 5\\sqrt[3]{7x - 6} \\le 10$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part is multiplied by $5$."
                },
                {
                  "step": "$7 \\le 5\\sqrt[3]{7x - 6} + 2 \\le 12$",
                  "reason": "Adding the same number, from arithmetic: $2$ is added to each part."
                },
                {
                  "step": "The range is $7 \\le y \\le 12$.",
                  "reason": "Range: as $x$ runs from $1$ to $2$, $7x - 6$ takes every number from $1$ to $8$, so by line 4 each value from line 6 is reached."
                }
              ]
            },
            {
              "prompt": "Find the range of $f(x) = 5\\sqrt[3]{4x - 15} - 4$ with the restricted domain $4 \\le x \\le 35$, as values of $y = f(x)$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "1 <= y <= 21",
              "lines": [
                {
                  "step": "Find the range of $f(x) = 5\\sqrt[3]{4x - 15} - 4$ with the restricted domain $4 \\le x \\le 35$, as values of $y = f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16 \\le 4x \\le 140$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part of $4 \\le x \\le 35$ is multiplied by $4$."
                },
                {
                  "step": "$1 \\le 4x - 15 \\le 125$",
                  "reason": "Adding the same number, from arithmetic: $-15$ is added to each part."
                },
                {
                  "step": "$1 \\le \\sqrt[3]{4x - 15} \\le 5$",
                  "reason": "Powers and roots of positive numbers keep the order: $1$ and $125$ have cube roots $1$ and $5$."
                },
                {
                  "step": "$5 \\le 5\\sqrt[3]{4x - 15} \\le 25$",
                  "reason": "Multiplying by a positive number, from arithmetic: each part is multiplied by $5$."
                },
                {
                  "step": "$1 \\le 5\\sqrt[3]{4x - 15} - 4 \\le 21$",
                  "reason": "Adding the same number, from arithmetic: $-4$ is added to each part."
                },
                {
                  "step": "The range is $1 \\le y \\le 21$.",
                  "reason": "Range: as $x$ runs from $4$ to $35$, $4x - 15$ takes every number from $1$ to $125$, so by line 4 each value from line 6 is reached."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t171-k2",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 3\\sqrt{x + 8} - 5$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 3\\sqrt{x + 8} - 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
              },
              {
                "step": "The graph of $y = 3\\sqrt{x}$ passes through $(0, 0)$, $(1, 3)$ and $(4, 6)$.",
                "reason": "Shifting, stretching and reflecting graphs: $y = 3\\sqrt{x}$ scales the graph from the $x$-axis by $3$."
              },
              {
                "step": "The graph of $y = 3\\sqrt{x + 8}$ starts at $(-8, 0)$ and passes through $(-7, 3)$ and $(-4, 6)$.",
                "reason": "Shifting, stretching and reflecting graphs: $x + 8$ in place of $x$ moves the graph 8 units to the left."
              },
              {
                "step": "The graph of $y = 3\\sqrt{x + 8} - 5$ starts at $S(-8, -5)$ and passes through $P(-7, -2)$ and $Q(-4, 1)$.",
                "reason": "Shifting, stretching and reflecting graphs: $-5$ added moves the graph 5 units down."
              },
              {
                "step": "At $x = 0$ the height is $3\\sqrt{8} - 5 = 6\\sqrt{2} - 5$, so the graph meets the $y$-axis at $C(0, 6\\sqrt{2} - 5)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $0$ is at least the start's first coordinate."
              },
              {
                "step": "$3\\sqrt{x + 8} - 5 = 0$",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$3\\sqrt{x + 8} = 5$",
                "reason": "Adding the same number to both sides: $5$ is added to both sides."
              },
              {
                "step": "$\\sqrt{x + 8} = \\dfrac{5}{3}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
              },
              {
                "step": "$x + 8 = \\dfrac{25}{9}$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
              },
              {
                "step": "$x = -\\dfrac{47}{9}$",
                "reason": "Adding the same number to both sides: $-8$ is added to both sides."
              },
              {
                "step": "The graph meets the $x$-axis at $A\\left(-\\dfrac{47}{9}, 0\\right)$.",
                "reason": "Checking in the original equation: $\\dfrac{5}{3}$ is at least $0$, so it is a square root and $x = -\\dfrac{47}{9}$ gives height $0$."
              },
              {
                "step": "The curve starts at $S$ and rises to the right through $P$, $A$, $Q$ and $C$.",
                "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height grows to the right.",
                "figure": {
                  "file": "root-functions-1.svg",
                  "alt": "A curve starting at S(−8, −5) and rising to the right through P(−7, −2), A(−47/9, 0), Q(−4, 1), C(0, 6√2−5)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 4\\sqrt{x - 6} - 13$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{265}{16}, 0\\right)$"
                ],
                "turning": [
                  "$(6, -13)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 4\\sqrt{x - 6} - 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                  "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
                },
                {
                  "step": "The graph of $y = 4\\sqrt{x}$ passes through $(0, 0)$, $(1, 4)$ and $(4, 8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $y = 4\\sqrt{x}$ scales the graph from the $x$-axis by $4$."
                },
                {
                  "step": "The graph of $y = 4\\sqrt{x - 6}$ starts at $(6, 0)$ and passes through $(7, 4)$ and $(10, 8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $x - 6$ in place of $x$ moves the graph 6 units to the right."
                },
                {
                  "step": "The graph of $y = 4\\sqrt{x - 6} - 13$ starts at $S(6, -13)$ and passes through $P(7, -9)$ and $Q(10, -5)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $-13$ added moves the graph 13 units down."
                },
                {
                  "step": "The graph does not meet the $y$-axis: every point has $x \\ge 6$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis only where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "$4\\sqrt{x - 6} - 13 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$4\\sqrt{x - 6} = 13$",
                  "reason": "Adding the same number to both sides: $13$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{x - 6} = \\dfrac{13}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$x - 6 = \\dfrac{169}{16}$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$x = \\dfrac{265}{16}$",
                  "reason": "Adding the same number to both sides: $6$ is added to both sides."
                },
                {
                  "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{265}{16}, 0\\right)$.",
                  "reason": "Checking in the original equation: $\\dfrac{13}{4}$ is at least $0$, so it is a square root and $x = \\dfrac{265}{16}$ gives height $0$."
                },
                {
                  "step": "The curve starts at $S$ and rises to the right through $P$, $Q$ and $A$.",
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height grows to the right.",
                  "figure": {
                    "file": "root-functions-2.svg",
                    "alt": "A curve starting at S(6, −13) and rising to the right through P(7, −9), Q(10, −5), A(265/16, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 6\\sqrt{x - 10} - 14$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{139}{9}, 0\\right)$"
                ],
                "turning": [
                  "$(10, -14)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 6\\sqrt{x - 10} - 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                  "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
                },
                {
                  "step": "The graph of $y = 6\\sqrt{x}$ passes through $(0, 0)$, $(1, 6)$ and $(4, 12)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $y = 6\\sqrt{x}$ scales the graph from the $x$-axis by $6$."
                },
                {
                  "step": "The graph of $y = 6\\sqrt{x - 10}$ starts at $(10, 0)$ and passes through $(11, 6)$ and $(14, 12)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $x - 10$ in place of $x$ moves the graph 10 units to the right."
                },
                {
                  "step": "The graph of $y = 6\\sqrt{x - 10} - 14$ starts at $S(10, -14)$ and passes through $P(11, -8)$ and $Q(14, -2)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $-14$ added moves the graph 14 units down."
                },
                {
                  "step": "The graph does not meet the $y$-axis: every point has $x \\ge 10$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis only where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "$6\\sqrt{x - 10} - 14 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$6\\sqrt{x - 10} = 14$",
                  "reason": "Adding the same number to both sides: $14$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{x - 10} = \\dfrac{7}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$x - 10 = \\dfrac{49}{9}$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$x = \\dfrac{139}{9}$",
                  "reason": "Adding the same number to both sides: $10$ is added to both sides."
                },
                {
                  "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{139}{9}, 0\\right)$.",
                  "reason": "Checking in the original equation: $\\dfrac{7}{3}$ is at least $0$, so it is a square root and $x = \\dfrac{139}{9}$ gives height $0$."
                },
                {
                  "step": "The curve starts at $S$ and rises to the right through $P$, $Q$ and $A$.",
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height grows to the right.",
                  "figure": {
                    "file": "root-functions-3.svg",
                    "alt": "A curve starting at S(10, −14) and rising to the right through P(11, −8), Q(14, −2), A(139/9, 0)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 5\\sqrt{x + 2} - 12$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{94}{25}, 0\\right)$",
                  "$(0, 5\\sqrt{2} - 12)$"
                ],
                "turning": [
                  "$(-2, -12)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 5\\sqrt{x + 2} - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                  "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
                },
                {
                  "step": "The graph of $y = 5\\sqrt{x}$ passes through $(0, 0)$, $(1, 5)$ and $(4, 10)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $y = 5\\sqrt{x}$ scales the graph from the $x$-axis by $5$."
                },
                {
                  "step": "The graph of $y = 5\\sqrt{x + 2}$ starts at $(-2, 0)$ and passes through $(-1, 5)$ and $(2, 10)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $x + 2$ in place of $x$ moves the graph 2 units to the left."
                },
                {
                  "step": "The graph of $y = 5\\sqrt{x + 2} - 12$ starts at $S(-2, -12)$ and passes through $P(-1, -7)$ and $Q(2, -2)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $-12$ added moves the graph 12 units down."
                },
                {
                  "step": "At $x = 0$ the height is $5\\sqrt{2} - 12$, so the graph meets the $y$-axis at $C(0, 5\\sqrt{2} - 12)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $0$ is at least the start's first coordinate."
                },
                {
                  "step": "$5\\sqrt{x + 2} - 12 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$5\\sqrt{x + 2} = 12$",
                  "reason": "Adding the same number to both sides: $12$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{x + 2} = \\dfrac{12}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$x + 2 = \\dfrac{144}{25}$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$x = \\dfrac{94}{25}$",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides."
                },
                {
                  "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{94}{25}, 0\\right)$.",
                  "reason": "Checking in the original equation: $\\dfrac{12}{5}$ is at least $0$, so it is a square root and $x = \\dfrac{94}{25}$ gives height $0$."
                },
                {
                  "step": "The curve starts at $S$ and rises to the right through $P$, $C$, $Q$ and $A$.",
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height grows to the right.",
                  "figure": {
                    "file": "root-functions-4.svg",
                    "alt": "A curve starting at S(−2, −12) and rising to the right through P(−1, −7), C(0, 5√2−12), Q(2, −2), A(94/25, 0)."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graph of $y = -6\\sqrt{x - 9} + 9$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = -6\\sqrt{x - 9} + 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
              },
              {
                "step": "The graph of $y = -6\\sqrt{x}$ passes through $(0, 0)$, $(1, -6)$ and $(4, -12)$.",
                "reason": "Shifting, stretching and reflecting graphs: $y = -6\\sqrt{x}$ scales the graph from the $x$-axis by $6$ and reflects it in the $x$-axis."
              },
              {
                "step": "The graph of $y = -6\\sqrt{x - 9}$ starts at $(9, 0)$ and passes through $(10, -6)$ and $(13, -12)$.",
                "reason": "Shifting, stretching and reflecting graphs: $x - 9$ in place of $x$ moves the graph 9 units to the right."
              },
              {
                "step": "The graph of $y = -6\\sqrt{x - 9} + 9$ starts at $S(9, 9)$ and passes through $P(10, 3)$ and $Q(13, -3)$.",
                "reason": "Shifting, stretching and reflecting graphs: $9$ added moves the graph 9 units up."
              },
              {
                "step": "The graph does not meet the $y$-axis: every point has $x \\ge 9$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis only where $x = 0$, and $0$ is left of the start."
              },
              {
                "step": "$-6\\sqrt{x - 9} + 9 = 0$",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
              },
              {
                "step": "$-6\\sqrt{x - 9} = -9$",
                "reason": "Adding the same number to both sides: $-9$ is added to both sides."
              },
              {
                "step": "$\\sqrt{x - 9} = \\dfrac{3}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
              },
              {
                "step": "$x - 9 = \\dfrac{9}{4}$",
                "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
              },
              {
                "step": "$x = \\dfrac{45}{4}$",
                "reason": "Adding the same number to both sides: $9$ is added to both sides."
              },
              {
                "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{45}{4}, 0\\right)$.",
                "reason": "Checking in the original equation: $\\dfrac{3}{2}$ is at least $0$, so it is a square root and $x = \\dfrac{45}{4}$ gives height $0$."
              },
              {
                "step": "The curve starts at $S$ and falls to the right through $P$, $A$ and $Q$.",
                "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height, multiplied by a negative number, falls to the right.",
                "figure": {
                  "file": "root-functions-12.svg",
                  "alt": "A curve starting at S(9, 9) and falling to the right through P(10, 3), A(45/4, 0), Q(13, −3)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = -5\\sqrt{x - 10} + 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{254}{25}, 0\\right)$"
                ],
                "turning": [
                  "$(10, 2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -5\\sqrt{x - 10} + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                  "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
                },
                {
                  "step": "The graph of $y = -5\\sqrt{x}$ passes through $(0, 0)$, $(1, -5)$ and $(4, -10)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $y = -5\\sqrt{x}$ scales the graph from the $x$-axis by $5$ and reflects it in the $x$-axis."
                },
                {
                  "step": "The graph of $y = -5\\sqrt{x - 10}$ starts at $(10, 0)$ and passes through $(11, -5)$ and $(14, -10)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $x - 10$ in place of $x$ moves the graph 10 units to the right."
                },
                {
                  "step": "The graph of $y = -5\\sqrt{x - 10} + 2$ starts at $S(10, 2)$ and passes through $P(11, -3)$ and $Q(14, -8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $2$ added moves the graph 2 units up."
                },
                {
                  "step": "The graph does not meet the $y$-axis: every point has $x \\ge 10$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis only where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "$-5\\sqrt{x - 10} + 2 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$-5\\sqrt{x - 10} = -2$",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{x - 10} = \\dfrac{2}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                },
                {
                  "step": "$x - 10 = \\dfrac{4}{25}$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$x = \\dfrac{254}{25}$",
                  "reason": "Adding the same number to both sides: $10$ is added to both sides."
                },
                {
                  "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{254}{25}, 0\\right)$.",
                  "reason": "Checking in the original equation: $\\dfrac{2}{5}$ is at least $0$, so it is a square root and $x = \\dfrac{254}{25}$ gives height $0$."
                },
                {
                  "step": "The curve starts at $S$ and falls to the right through $A$, $P$ and $Q$.",
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height, multiplied by a negative number, falls to the right.",
                  "figure": {
                    "file": "root-functions-13.svg",
                    "alt": "A curve starting at S(10, 2) and falling to the right through A(254/25, 0), P(11, −3), Q(14, −8)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -4\\sqrt{x - 1} + 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{5}{4}, 0\\right)$"
                ],
                "turning": [
                  "$(1, 2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -4\\sqrt{x - 1} + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                  "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
                },
                {
                  "step": "The graph of $y = -4\\sqrt{x}$ passes through $(0, 0)$, $(1, -4)$ and $(4, -8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $y = -4\\sqrt{x}$ scales the graph from the $x$-axis by $4$ and reflects it in the $x$-axis."
                },
                {
                  "step": "The graph of $y = -4\\sqrt{x - 1}$ starts at $(1, 0)$ and passes through $(2, -4)$ and $(5, -8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $x - 1$ in place of $x$ moves the graph 1 unit to the right."
                },
                {
                  "step": "The graph of $y = -4\\sqrt{x - 1} + 2$ starts at $S(1, 2)$ and passes through $P(2, -2)$ and $Q(5, -6)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $2$ added moves the graph 2 units up."
                },
                {
                  "step": "The graph does not meet the $y$-axis: every point has $x \\ge 1$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis only where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "$-4\\sqrt{x - 1} + 2 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$-4\\sqrt{x - 1} = -2$",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{x - 1} = \\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$x - 1 = \\dfrac{1}{4}$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$x = \\dfrac{5}{4}$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{5}{4}, 0\\right)$.",
                  "reason": "Checking in the original equation: $\\dfrac{1}{2}$ is at least $0$, so it is a square root and $x = \\dfrac{5}{4}$ gives height $0$."
                },
                {
                  "step": "The curve starts at $S$ and falls to the right through $A$, $P$ and $Q$.",
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height, multiplied by a negative number, falls to the right.",
                  "figure": {
                    "file": "root-functions-14.svg",
                    "alt": "A curve starting at S(1, 2) and falling to the right through A(5/4, 0), P(2, −2), Q(5, −6)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -4\\sqrt{x - 10} + 11$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$\\left(\\dfrac{281}{16}, 0\\right)$"
                ],
                "turning": [
                  "$(10, 11)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -4\\sqrt{x - 10} + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The graph of $y = \\sqrt{x}$ starts at $(0, 0)$ and passes through $(1, 1)$ and $(4, 2)$.",
                  "reason": "The square-root function: $\\sqrt{x}$ has a value for $x \\ge 0$, and $\\sqrt{0} = 0$, $\\sqrt{1} = 1$, $\\sqrt{4} = 2$."
                },
                {
                  "step": "The graph of $y = -4\\sqrt{x}$ passes through $(0, 0)$, $(1, -4)$ and $(4, -8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $y = -4\\sqrt{x}$ scales the graph from the $x$-axis by $4$ and reflects it in the $x$-axis."
                },
                {
                  "step": "The graph of $y = -4\\sqrt{x - 10}$ starts at $(10, 0)$ and passes through $(11, -4)$ and $(14, -8)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $x - 10$ in place of $x$ moves the graph 10 units to the right."
                },
                {
                  "step": "The graph of $y = -4\\sqrt{x - 10} + 11$ starts at $S(10, 11)$ and passes through $P(11, 7)$ and $Q(14, 3)$.",
                  "reason": "Shifting, stretching and reflecting graphs: $11$ added moves the graph 11 units up."
                },
                {
                  "step": "The graph does not meet the $y$-axis: every point has $x \\ge 10$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis only where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "$-4\\sqrt{x - 10} + 11 = 0$",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "$-4\\sqrt{x - 10} = -11$",
                  "reason": "Adding the same number to both sides: $-11$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{x - 10} = \\dfrac{11}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$x - 10 = \\dfrac{121}{16}$",
                  "reason": "Raising both sides to a power: both sides are squared, and the square of a square root is the number under it."
                },
                {
                  "step": "$x = \\dfrac{281}{16}$",
                  "reason": "Adding the same number to both sides: $10$ is added to both sides."
                },
                {
                  "step": "The graph meets the $x$-axis at $A\\left(\\dfrac{281}{16}, 0\\right)$.",
                  "reason": "Checking in the original equation: $\\dfrac{11}{4}$ is at least $0$, so it is a square root and $x = \\dfrac{281}{16}$ gives height $0$."
                },
                {
                  "step": "The curve starts at $S$ and falls to the right through $P$, $Q$ and $A$.",
                  "reason": "Powers and roots of positive numbers keep the order: a larger number under the root gives a larger root, so the height, multiplied by a negative number, falls to the right.",
                  "figure": {
                    "file": "root-functions-15.svg",
                    "alt": "A curve starting at S(10, 11) and falling to the right through P(11, 7), Q(14, 3), A(281/16, 0)."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t171-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sketch of $y = 5\\sqrt{x + 7} - 15$, and write that line right.",
            "given": [
              "$x + 7 \\ge 0$",
              "$x \\ge 7$",
              "The graph starts at $(7, -15)$.",
              "The point $(4, 10)$ of the graph of $y = 5\\sqrt{x}$ moves to $(11, -5)$.",
              "The graph rises to the right from $(7, -15)$ through $(11, -5)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sketch of $y = 5\\sqrt{x + 7} - 15$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 turns $x + 7 \\ge 0$ into $x \\ge 7$: the $7$ crosses to the other side and keeps its sign, so a sign is lost.",
                "reason": "Adding the same number, from arithmetic: $-7$ is added to both sides, so the start is 7 units to the left."
              },
              {
                "step": "Line 2 written right is: $x \\ge -7$",
                "reason": "Each line is checked alone against what comes before it: the lines before it are right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sketch of $y = -3\\sqrt{x - 10} + 8$, and write that line right.",
              "given": [
                "$x - 10 \\ge 0$",
                "$x \\ge 10$",
                "The graph starts at $(10, -8)$.",
                "The point $(4, -6)$ of the graph of $y = -3\\sqrt{x}$ moves to $(14, -14)$.",
                "The graph falls to the right from $(10, -8)$ through $(14, -14)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (10, 8)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sketch of $y = -3\\sqrt{x - 10} + 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the start the height $-8$: the sign of the $8$ added to the root is lost.",
                  "reason": "Shifting, stretching and reflecting graphs: $8$ added to the root moves the graph 8 units up, so the start $(10, 0)$ of $y = -3\\sqrt{x - 10}$ moves to height $8$."
                },
                {
                  "step": "Line 3 written right is: The graph starts at $(10, 8)$.",
                  "reason": "Each line is checked alone against what comes before it: the lines before it are right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sketch of $y = 6\\sqrt{x - 5} - 5$, and write that line right.",
              "given": [
                "$x - 5 \\ge 0$",
                "$x \\ge 5$",
                "The graph starts at $(5, -5)$.",
                "The point $(4, 12)$ of the graph of $y = 6\\sqrt{x}$ moves to $(-1, 7)$.",
                "The graph rises to the right from $(5, -5)$ through $(-1, 7)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (9, 7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sketch of $y = 6\\sqrt{x - 5} - 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 moves the point $(4, 12)$ 5 units to the left: the sign of the shift is lost.",
                  "reason": "Shifting, stretching and reflecting graphs: $x - 5$ in place of $x$ moves the graph 5 units to the right, as line 3's start shows."
                },
                {
                  "step": "Line 4 written right is: The point $(4, 12)$ of the graph of $y = 6\\sqrt{x}$ moves to $(9, 7)$.",
                  "reason": "Each line is checked alone against what comes before it: the lines before it are right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sketch of $y = -5\\sqrt{x + 9} + 4$, and write that line right.",
              "given": [
                "$x + 9 \\ge 0$",
                "$x \\ge -9$",
                "The graph starts at $(-9, -4)$.",
                "The point $(4, -10)$ of the graph of $y = -5\\sqrt{x}$ moves to $(-5, -14)$.",
                "The graph falls to the right from $(-9, -4)$ through $(-5, -14)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (-9, 4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sketch of $y = -5\\sqrt{x + 9} + 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the start the height $-4$: the sign of the $4$ added to the root is lost.",
                  "reason": "Shifting, stretching and reflecting graphs: $4$ added to the root moves the graph 4 units up, so the start $(-9, 0)$ of $y = -5\\sqrt{x + 9}$ moves to height $4$."
                },
                {
                  "step": "Line 3 written right is: The graph starts at $(-9, 4)$.",
                  "reason": "Each line is checked alone against what comes before it: the lines before it are right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t171-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = 4\\sqrt{16 - 5x} + 3$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = 4\\sqrt{16 - 5x} + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$16 - 5x \\ge 0$",
                "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
              },
              {
                "step": "$-5x \\ge -16$",
                "reason": "Adding the same number, from arithmetic: $-16$ is added to both sides."
              },
              {
                "step": "$x \\le \\dfrac{16}{5}$",
                "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-\\dfrac{1}{5}$."
              },
              {
                "step": "At $x = \\dfrac{16}{5}$ the height is $4\\sqrt{0} + 3 = 3$, so the graph starts at $S\\left(\\dfrac{16}{5}, 3\\right)$ and has no point to its right.",
                "reason": "Substituting a value: with $x = \\dfrac{16}{5}$ the number under the root is $16 - 5 \\cdot \\dfrac{16}{5} = 0$."
              },
              {
                "step": "At $x = 0$ the height is $4\\sqrt{16} + 3 = 19$, so the graph meets the $y$-axis at $C(0, 19)$.",
                "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $0$ is left of the start."
              },
              {
                "step": "The graph does not meet the $x$-axis: every height is at least $3$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and the root is at least $0$, so $4\\sqrt{16 - 5x} + 3 \\ge 3$."
              },
              {
                "step": "The curve starts at $S$ and rises to the left through $C$.",
                "reason": "Powers and roots of positive numbers keep the order: as $x$ falls the number under the root grows, so the root grows.",
                "figure": {
                  "file": "root-functions-23.svg",
                  "alt": "A curve starting at S(16/5, 3) and rising to the left through C(0, 19)."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graph of $y = 3\\sqrt{100 - 7x} + 1$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 31)$"
                ],
                "turning": [
                  "$\\left(\\dfrac{100}{7}, 1\\right)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 3\\sqrt{100 - 7x} + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$100 - 7x \\ge 0$",
                  "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
                },
                {
                  "step": "$-7x \\ge -100$",
                  "reason": "Adding the same number, from arithmetic: $-100$ is added to both sides."
                },
                {
                  "step": "$x \\le \\dfrac{100}{7}$",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-\\dfrac{1}{7}$."
                },
                {
                  "step": "At $x = \\dfrac{100}{7}$ the height is $3\\sqrt{0} + 1 = 1$, so the graph starts at $S\\left(\\dfrac{100}{7}, 1\\right)$ and has no point to its right.",
                  "reason": "Substituting a value: with $x = \\dfrac{100}{7}$ the number under the root is $100 - 7 \\cdot \\dfrac{100}{7} = 0$."
                },
                {
                  "step": "At $x = 0$ the height is $3\\sqrt{100} + 1 = 31$, so the graph meets the $y$-axis at $C(0, 31)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every height is at least $1$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and the root is at least $0$, so $3\\sqrt{100 - 7x} + 1 \\ge 1$."
                },
                {
                  "step": "The curve starts at $S$ and rises to the left through $C$.",
                  "reason": "Powers and roots of positive numbers keep the order: as $x$ falls the number under the root grows, so the root grows.",
                  "figure": {
                    "file": "root-functions-24.svg",
                    "alt": "A curve starting at S(100/7, 1) and rising to the left through C(0, 31)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = -2\\sqrt{9 - 8x} - 7$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -13)$"
                ],
                "turning": [
                  "$\\left(\\dfrac{9}{8}, -7\\right)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = -2\\sqrt{9 - 8x} - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9 - 8x \\ge 0$",
                  "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
                },
                {
                  "step": "$-8x \\ge -9$",
                  "reason": "Adding the same number, from arithmetic: $-9$ is added to both sides."
                },
                {
                  "step": "$x \\le \\dfrac{9}{8}$",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-\\dfrac{1}{8}$."
                },
                {
                  "step": "At $x = \\dfrac{9}{8}$ the height is $-2\\sqrt{0} - 7 = -7$, so the graph starts at $S\\left(\\dfrac{9}{8}, -7\\right)$ and has no point to its right.",
                  "reason": "Substituting a value: with $x = \\dfrac{9}{8}$ the number under the root is $9 - 8 \\cdot \\dfrac{9}{8} = 0$."
                },
                {
                  "step": "At $x = 0$ the height is $-2\\sqrt{9} - 7 = -13$, so the graph meets the $y$-axis at $C(0, -13)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every height is at most $-7$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and the root is at least $0$, so $-2\\sqrt{9 - 8x} - 7 \\le -7$."
                },
                {
                  "step": "The curve starts at $S$ and falls to the left through $C$.",
                  "reason": "Powers and roots of positive numbers keep the order: as $x$ falls the number under the root grows, so the root grows, and multiplied by a negative number the height falls.",
                  "figure": {
                    "file": "root-functions-25.svg",
                    "alt": "A curve starting at S(9/8, −7) and falling to the left through C(0, −13)."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = 4\\sqrt{4 - 9x} + 8$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 16)$"
                ],
                "turning": [
                  "$\\left(\\dfrac{4}{9}, 8\\right)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = 4\\sqrt{4 - 9x} + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4 - 9x \\ge 0$",
                  "reason": "Even root of a negative number is not real: the graph has a point at $x$ only where the number under the root is at least $0$."
                },
                {
                  "step": "$-9x \\ge -4$",
                  "reason": "Adding the same number, from arithmetic: $-4$ is added to both sides."
                },
                {
                  "step": "$x \\le \\dfrac{4}{9}$",
                  "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-\\dfrac{1}{9}$."
                },
                {
                  "step": "At $x = \\dfrac{4}{9}$ the height is $4\\sqrt{0} + 8 = 8$, so the graph starts at $S\\left(\\dfrac{4}{9}, 8\\right)$ and has no point to its right.",
                  "reason": "Substituting a value: with $x = \\dfrac{4}{9}$ the number under the root is $4 - 9 \\cdot \\dfrac{4}{9} = 0$."
                },
                {
                  "step": "At $x = 0$ the height is $4\\sqrt{4} + 8 = 16$, so the graph meets the $y$-axis at $C(0, 16)$.",
                  "reason": "Definition of the $y$-intercept: the graph meets the $y$-axis where $x = 0$, and $0$ is left of the start."
                },
                {
                  "step": "The graph does not meet the $x$-axis: every height is at least $8$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, and the root is at least $0$, so $4\\sqrt{4 - 9x} + 8 \\ge 8$."
                },
                {
                  "step": "The curve starts at $S$ and rises to the left through $C$.",
                  "reason": "Powers and roots of positive numbers keep the order: as $x$ falls the number under the root grows, so the root grows.",
                  "figure": {
                    "file": "root-functions-26.svg",
                    "alt": "A curve starting at S(4/9, 8) and rising to the left through C(0, 16)."
                  }
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
      "id": "t171-p1",
      "method": "direct proof",
      "statement": "For every $x > 1$, $\\sqrt{x} > \\sqrt[3]{x}$.",
      "idea": "Compare $x^3$ with $x^2$, then take the sixth root of both sides: the sixth root of $x^3$ is the square root of $x$, and the sixth root of $x^2$ is its cube root.",
      "lines": [
        {
          "line": "Let $x$ be a number with $x > 1$.",
          "reason": "The hypothesis: the statement is about every $x > 1$, so one such $x$ is named."
        },
        {
          "line": "$x^2 > 1$",
          "reason": "Powers and roots of positive numbers keep the order: $x > 1$ and both sides are positive, so squaring keeps the order."
        },
        {
          "line": "$x \\cdot x^2 > 1 \\cdot x^2$",
          "reason": "Multiplying by a positive number: both sides of line 1 are multiplied by $x^2$, which is positive by line 2."
        },
        {
          "line": "$x^3 > x^2$",
          "reason": "Product law: $x \\cdot x^2 = x^{1 + 2}$, and $1 \\cdot x^2 = x^2$."
        },
        {
          "line": "$\\left(x^3\\right)^{1/6} > \\left(x^2\\right)^{1/6}$",
          "reason": "Powers and roots of positive numbers keep the order: both sides of line 4 are positive, and the sixth root is taken."
        },
        {
          "line": "$\\left(x^3\\right)^{1/6} = x^{1/2}$",
          "reason": "Power law, with fractional exponents: $3 \\cdot \\dfrac{1}{6} = \\dfrac{1}{2}$."
        },
        {
          "line": "$\\left(x^2\\right)^{1/6} = x^{1/3}$",
          "reason": "Power law, with fractional exponents: $2 \\cdot \\dfrac{1}{6} = \\dfrac{1}{3}$."
        },
        {
          "line": "$x^{1/2} > x^{1/3}$",
          "reason": "Substituting a value: lines 6 and 7 put in line 5."
        },
        {
          "line": "$\\sqrt{x} > \\sqrt[3]{x}$",
          "reason": "Radical sign: $x^{1/2} = \\sqrt{x}$ and $x^{1/3} = \\sqrt[3]{x}$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t171-s1",
      "method": "direct proof",
      "statement": "Prove that for every $x \\ge 0$, $\\sqrt{x + 1} \\le \\sqrt{x} + 1$. Facts it may use: multiplying out, the square-root function, multiplying by a positive number, adding the same number, substituting a value, powers and roots of positive numbers keep the order, the rule $\\sqrt{a^2} = |a|$, absolute value.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number with $x \\ge 0$.",
            "reason": "The hypothesis: the statement is about every $x \\ge 0$, so one such $x$ is named."
          },
          {
            "line": "$\\left(\\sqrt{x} + 1\\right)^2 = x + 2\\sqrt{x} + 1$",
            "reason": "Multiplying out: each term of one bracket multiplies each term of the other, and $\\sqrt{x} \\cdot \\sqrt{x} = x$ by the square-root function."
          },
          {
            "line": "$\\sqrt{x} \\ge 0$",
            "reason": "The square-root function: its value is at least $0$."
          },
          {
            "line": "$2\\sqrt{x} \\ge 0$",
            "reason": "Multiplying by a positive number, from arithmetic: both sides of line 3 are multiplied by $2$."
          },
          {
            "line": "$x + 2\\sqrt{x} + 1 \\ge x + 1$",
            "reason": "Adding the same number, from arithmetic: $x + 1$ is added to both sides of line 4."
          },
          {
            "line": "$x + 1 \\le \\left(\\sqrt{x} + 1\\right)^2$",
            "reason": "Substituting a value: line 2 puts $\\left(\\sqrt{x} + 1\\right)^2$ in place of $x + 2\\sqrt{x} + 1$."
          },
          {
            "line": "$\\sqrt{x + 1} \\le \\sqrt{\\left(\\sqrt{x} + 1\\right)^2}$",
            "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are at least $0$, and the square root is taken."
          },
          {
            "line": "$\\sqrt{\\left(\\sqrt{x} + 1\\right)^2} = \\left|\\sqrt{x} + 1\\right|$",
            "reason": "The rule $\\sqrt{a^2} = |a|$: the square root of a square is the absolute value."
          },
          {
            "line": "$\\left|\\sqrt{x} + 1\\right| = \\sqrt{x} + 1$",
            "reason": "Absolute value, from arithmetic: $\\sqrt{x} + 1$ is at least $1$ by line 3."
          },
          {
            "line": "$\\sqrt{x + 1} \\le \\sqrt{x} + 1$",
            "reason": "Substituting a value: lines 8 and 9 put in line 7."
          }
        ]
      }
    },
    {
      "id": "t171-s2",
      "method": "direct proof",
      "statement": "Prove that for every $x$ with $0 < x < 1$, $\\sqrt{x} > x$. Facts it may use: multiplying by a positive number, product law, powers and roots of positive numbers keep the order, the rule $\\sqrt{a^2} = |a|$, absolute value.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a number with $0 < x < 1$.",
            "reason": "The hypothesis: the statement is about every $x$ between $0$ and $1$, so one such $x$ is named."
          },
          {
            "line": "$x \\cdot x < 1 \\cdot x$",
            "reason": "Multiplying by a positive number: both sides of $x < 1$ are multiplied by $x$, which is positive by line 1."
          },
          {
            "line": "$x^2 < x$",
            "reason": "Product law: $x \\cdot x = x^{1 + 1}$, and $1 \\cdot x = x$."
          },
          {
            "line": "$\\sqrt{x^2} < \\sqrt{x}$",
            "reason": "Powers and roots of positive numbers keep the order: both sides of line 3 are positive, and the square root is taken."
          },
          {
            "line": "$\\sqrt{x^2} = |x|$",
            "reason": "The rule $\\sqrt{a^2} = |a|$: the square root of a square is the absolute value."
          },
          {
            "line": "$|x| = x$",
            "reason": "Absolute value, from arithmetic: $x$ is positive by line 1."
          },
          {
            "line": "$x < \\sqrt{x}$",
            "reason": "Substituting a value: lines 5 and 6 put in line 4."
          }
        ]
      }
    },
    {
      "id": "t171-s3",
      "method": "proof of existence by construction",
      "statement": "Prove that every real number $c$ is a value of $f(x) = \\sqrt[3]{x - 5} + 2$: there is a real $x$ with $f(x) = c$. Facts it may use: the cube-root function, adding the same number to both sides, substituting a value, the one real cube root, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let $c$ be a real number.",
            "reason": "The hypothesis: the statement is about every real $c$, so one such $c$ is named."
          },
          {
            "line": "Take $x = (c - 2)^3 + 5$.",
            "reason": "The construction: $(c - 2)^3 + 5$ is a real number, so this $x$ exists."
          },
          {
            "line": "$x - 5 = (c - 2)^3$",
            "reason": "Adding the same number to both sides: $-5$ is added to both sides of line 2."
          },
          {
            "line": "$\\sqrt[3]{x - 5} = \\sqrt[3]{(c - 2)^3}$",
            "reason": "Substituting a value: line 3 puts $(c - 2)^3$ in place of $x - 5$."
          },
          {
            "line": "$\\sqrt[3]{(c - 2)^3} = c - 2$",
            "reason": "The one real cube root: $c - 2$ is the one real number whose cube is $(c - 2)^3$."
          },
          {
            "line": "$\\sqrt[3]{x - 5} = c - 2$",
            "reason": "Substituting a value: line 5 puts $c - 2$ in place of $\\sqrt[3]{(c - 2)^3}$ in line 4."
          },
          {
            "line": "$\\sqrt[3]{x - 5} + 2 = c - 2 + 2$",
            "reason": "Adding the same number to both sides: $2$ is added to both sides."
          },
          {
            "line": "$c - 2 + 2 = c$",
            "reason": "Collecting like terms: $-2 + 2 = 0$."
          },
          {
            "line": "So $c$ is the value of $f$ at $x = (c - 2)^3 + 5$.",
            "reason": "The cube-root function: $\\sqrt[3]{x - 5}$ has a value at every real $x$, and lines 7 and 8 give $f(x) = c$."
          }
        ]
      }
    }
  ]
}
